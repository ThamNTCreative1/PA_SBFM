using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    private const int DeathsBeforeCta = 4;

    [Header("Playable Setup")]
    [SerializeField] private MorphSelectionFlow morphSelection;
    [SerializeField] private Renderer[] skiSections;
    [SerializeField] private Collider[] safeLandingSurfaces;
    [SerializeField] private CharacterMotor playerMotor;
    [SerializeField] private Transform playerSpawn;
    [SerializeField] private Transform morphPosition;
    [SerializeField] private GameObject[] morphPrefabs = new GameObject[8];
    [SerializeField] private GameObject failUI;
    [SerializeField] private GameObject endCard;
    [SerializeField] private Transform cameraYaw;
    [SerializeField, Min(0f)] private float fallConfirmationTime = 0.25f;

    [LunaPlaygroundField("Morph (1-8)")]
    [Range(1, 8)] public int luna = 1;

    [LunaPlaygroundField("Applovin")]
    public bool applovin;

    [LunaPlaygroundField("Count Event")]
    [Min(1)] public int countEvent = 1;

    public static GameController Ins { get; private set; }
    public Gift FirstGift => null;
    public bool IsPlaying => state == State.Playing;
    public bool HasFailed => state == State.Failed;

    private enum State { Ready, Playing, Complete, Failed }
    private State state;
    private Vector3 skiDirection;
    private Vector3 courseTop;
    private Vector3 courseBottom;
    private Vector3 courseVector;
    private float courseLengthSquared;
    private bool fallingOffSki;
    private float airborneFallTime;
    private int deathCount;
    private bool mouseHeld;
    private int currentCountEvent;
    private readonly List<int> heldFingerIds = new List<int>(2);
    private GameObject spawnedMorph;

    private void Awake()
    {
        if (Ins != null && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
    }

    private void Start()
    {
        luna = Mathf.Clamp(luna, 1, 8);
        countEvent = Mathf.Max(1, countEvent);
        if (playerMotor == null)
            playerMotor = GetComponentInChildren<CharacterMotor>(true);
        if (playerMotor == null)
        {
            Debug.LogError("GameController needs the existing player CharacterMotor reference.", this);
            return;
        }

        if (morphSelection != null) morphSelection.gameObject.SetActive(false);
        if (failUI != null) failUI.SetActive(false);
        if (endCard != null) endCard.SetActive(false);

        SetSkiCourse();
        if (playerSpawn != null)
            playerMotor.Teleport(playerSpawn.position, playerSpawn.rotation);

        SpawnMorph();
        state = State.Playing;
        if (playerMotor.Body != null) playerMotor.Body.isKinematic = false;
    }

    private void SetSkiCourse()
    {
        if (skiSections == null || skiSections.Length == 0)
        {
            Debug.LogError("GameController needs the ski section references.", this);
            return;
        }

        bool foundEnd = false;
        Vector3 bottom = Vector3.zero;
        Vector3 top = Vector3.zero;
        for (int i = 0; i < skiSections.Length; i++)
        {
            Renderer renderer = skiSections[i];
            if (renderer == null) continue;
            MeshFilter meshFilter = renderer.GetComponent<MeshFilter>();
            if (meshFilter == null || meshFilter.sharedMesh == null) continue;
            Bounds localBounds = meshFilter.sharedMesh.bounds;
            Transform meshTransform = renderer.transform;
            Vector3 localCenter = localBounds.center;
            Vector3 positiveEnd = meshTransform.TransformPoint(localCenter + Vector3.forward * localBounds.extents.z);
            Vector3 negativeEnd = meshTransform.TransformPoint(localCenter - Vector3.forward * localBounds.extents.z);
            if (!foundEnd)
            {
                bottom = positiveEnd.y < negativeEnd.y ? positiveEnd : negativeEnd;
                top = positiveEnd.y > negativeEnd.y ? positiveEnd : negativeEnd;
                foundEnd = true;
            }
            if (positiveEnd.y < bottom.y) bottom = positiveEnd;
            if (negativeEnd.y < bottom.y) bottom = negativeEnd;
            if (positiveEnd.y > top.y) top = positiveEnd;
            if (negativeEnd.y > top.y) top = negativeEnd;
        }
        if (!foundEnd) return;
        courseBottom = bottom;
        courseTop = top;
        courseVector = courseTop - courseBottom;
        courseLengthSquared = courseVector.sqrMagnitude;
        skiDirection = (top - bottom).normalized;
        if (skiDirection.sqrMagnitude < 0.01f) skiDirection = skiSections[0].transform.forward;

        if (cameraYaw != null)
            cameraYaw.rotation = Quaternion.LookRotation(skiDirection, Vector3.up);
        playerMotor.SetCourseDirection(skiDirection);

    }

    private void SpawnMorph()
    {
        int index = Mathf.Clamp(luna, 1, 8) - 1;
        if (morphPrefabs == null || index >= morphPrefabs.Length || morphPrefabs[index] == null)
        {
            Debug.LogError("Assign all eight morph prefabs in GameController.", this);
            return;
        }

        Vector3 spawnPosition = morphPosition != null
            ? morphPosition.position
            : courseTop + Vector3.up * 0.25f;
        Quaternion spawnRotation = Quaternion.LookRotation(-skiDirection, Vector3.up);
        Vector3 spawnEuler = spawnRotation.eulerAngles;
        spawnEuler.x = 0f;
        spawnedMorph = Instantiate(morphPrefabs[index], spawnPosition,
            Quaternion.Euler(spawnEuler));
        spawnedMorph.name = morphPrefabs[index].name;
        Collider[] existingColliders = spawnedMorph.GetComponentsInChildren<Collider>(true);
        for (int i = 0; i < existingColliders.Length; i++)
            existingColliders[i].enabled = false;
        Rigidbody[] bodies = spawnedMorph.GetComponentsInChildren<Rigidbody>(true);
        for (int i = 0; i < bodies.Length; i++)
        {
            bodies[i].useGravity = false;
            bodies[i].isKinematic = true;
        }
        SphereCollider trigger = spawnedMorph.AddComponent<SphereCollider>();
        trigger.isTrigger = true;
        trigger.radius = 1.5f;
        spawnedMorph.AddComponent<MorphTouchTarget>().Initialize(this);
    }

    private void Update()
    {
        CountPointerEvents();
        if (state != State.Playing || playerMotor == null || playerMotor.Body == null)
        {
            airborneFallTime = 0f;
            return;
        }

        // Do not use an absolute world-height threshold: a walkable lower bridge
        // section can be below the ski's lowest endpoint. A fall only becomes
        // eligible to fail after sustained airborne downward movement and
        // landing outside the safe course surfaces.
        if (!playerMotor.IsGrounded && playerMotor.Body.linearVelocity.y < -0.5f)
        {
            airborneFallTime += Time.deltaTime;
            if (airborneFallTime >= fallConfirmationTime)
                fallingOffSki = true;
        }
        else
        {
            airborneFallTime = 0f;
        }
    }

    private void CountPointerEvents()
    {
        if (state != State.Playing) return;
#if UNITY_EDITOR || UNITY_STANDALONE || UNITY_LUNA
        if (Input.GetMouseButtonDown(0)) mouseHeld = true;
        if (Input.GetMouseButtonUp(0) && mouseHeld)
        {
            mouseHeld = false;
            RegisterCountEvent();
        }
#else
        Touch[] touches = Input.touches;
        for (int i = 0; i < touches.Length; i++)
        {
            Touch touch = touches[i];
            if (touch.phase == TouchPhase.Began && !heldFingerIds.Contains(touch.fingerId))
                heldFingerIds.Add(touch.fingerId);
            else if ((touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled) &&
                     heldFingerIds.Remove(touch.fingerId))
            {
                RegisterCountEvent();
            }
        }
#endif
    }

    private void RegisterCountEvent()
    {
        currentCountEvent++;
        if (currentCountEvent >= countEvent)
            CompleteMorph();
    }

    public void CheckLanding(Collision collision)
    {
        if (!IsPlaying || playerMotor == null || collision == null) return;
        if (!fallingOffSki) return;
        for (int i = 0; i < collision.contactCount; i++)
        {
            ContactPoint contact = collision.GetContact(i);
            if (contact.normal.y > 0.5f)
            {
                // A normal jump also has a sustained downward phase. Landing
                // back on the course must clear it instead of counting a death.
                if (IsSafeLandingSurface(collision.collider))
                {
                    fallingOffSki = false;
                    airborneFallTime = 0f;
                    return;
                }

                deathCount++;
                if (deathCount >= DeathsBeforeCta)
                    ShowFinalFail();
                else
                    ShowFailForRetry();
                return;
            }
        }
    }

    private bool IsSafeLandingSurface(Collider surface)
    {
        if (surface == null) return false;
        if (safeLandingSurfaces != null)
        {
            for (int i = 0; i < safeLandingSurfaces.Length; i++)
                if (safeLandingSurfaces[i] == surface) return true;
        }

        if (skiSections != null)
        {
            for (int i = 0; i < skiSections.Length; i++)
            {
                Renderer section = skiSections[i];
                if (section != null && surface.transform.IsChildOf(section.transform))
                    return true;
            }
        }
        return false;
    }

    private void ShowFailForRetry()
    {
        state = State.Failed;
        fallingOffSki = false;
        airborneFallTime = 0f;
        FreezePlayer();
        if (TutController.Instance != null) TutController.Instance.StopTut();
        if (LunaController.Instance != null)
            LunaController.Instance.ShowRetryPanel(failUI, RetryAfterFail);
        else if (failUI != null)
            failUI.SetActive(true);
    }

    private void RetryAfterFail()
    {
        if (state != State.Failed || deathCount >= DeathsBeforeCta) return;
        if (failUI != null) failUI.SetActive(false);
        if (playerMotor == null || playerSpawn == null) return;
        playerMotor.Teleport(playerSpawn.position, playerSpawn.rotation);
        if (playerMotor.Body != null) playerMotor.Body.isKinematic = false;
        playerMotor.enabled = true;
        playerMotor.AutoRun(false, Vector3.zero);
        fallingOffSki = false;
        airborneFallTime = 0f;
        state = State.Playing;
    }

    public void TimeExpired()
    {
        if (!IsPlaying && state != State.Failed) return;
        ShowEndCard();
    }

    private void ShowEndCard()
    {
        if (!IsPlaying && state != State.Failed) return;
        state = State.Complete;
        if (failUI != null) failUI.SetActive(false);
        StopPlayer();
        if (TutController.Instance != null) TutController.Instance.StopTut();
        if (LunaController.Instance != null) LunaController.Instance.EndCard(applovin);
        else if (endCard != null) endCard.SetActive(true);
    }

    private void ShowFinalFail()
    {
        if (!IsPlaying) return;
        state = State.Complete;
        fallingOffSki = false;
        StopPlayer();
        if (TutController.Instance != null) TutController.Instance.StopTut();
        if (LunaController.Instance != null)
            LunaController.Instance.EndGame(failUI, !applovin);
        else if (failUI != null)
            failUI.SetActive(true);
    }

    private void FreezePlayer()
    {
        if (playerMotor == null) return;
        playerMotor.AutoRun(true, Vector3.zero);
        Rigidbody body = playerMotor.Body;
        if (body == null) return;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
        body.isKinematic = true;
    }

    public void CompleteMorph()
    {
        if (!IsPlaying) return;
        state = State.Complete;
        StopPlayer();
        if (TutController.Instance != null) TutController.Instance.StopTut();
        if (LunaController.Instance != null) LunaController.Instance.EndCard(!applovin);
        else if (endCard != null) endCard.SetActive(true);
    }

    public void Fail()
    {
        if (IsPlaying) ShowFailForRetry();
    }

    public void Far()
    {
        if (IsPlaying && TutController.Instance != null) TutController.Instance.ShowFarTut();
    }

    public void RegisterCollection()
    {
        // Kept for existing scene components; this playable has a single morph target.
    }

    public void CollectGift(Gift gift)
    {
        // The existing gift is inactive in this scene setup.
    }

    public void CompleteMorphSelection()
    {
        CompleteMorph();
    }

    private void StopPlayer()
    {
        if (playerMotor == null) return;
        playerMotor.AutoRun(true, Vector3.zero);
        playerMotor.enabled = false;
        Rigidbody body = playerMotor.Body;
        if (body == null) return;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
        body.isKinematic = true;
    }

    private void LetPlayerFall()
    {
        if (playerMotor == null) return;
        playerMotor.AutoRun(true, Vector3.zero);
        // Keep CharacterMotor enabled so its custom gravity continues the fall.
        // Preserve current vertical velocity and stop only horizontal motion.
        Rigidbody body = playerMotor.Body;
        if (body == null) return;
        Vector3 velocity = body.linearVelocity;
        velocity.x = 0f;
        velocity.z = 0f;
        body.linearVelocity = velocity;
    }

    private void OnDestroy()
    {
        if (spawnedMorph != null) Destroy(spawnedMorph);
        if (Ins == this) Ins = null;
    }
}
