using UnityEngine;

// Playable replacement for the source FM3rdInput / ThirdPersonInputSystem + Cinemachine third person follow.
// Field names match the source component so the prefab values (pitch limits, sensitivity, auto return...) carry over.
// Drives the camera directly: orbit around followTarget at cameraDistance, pulled in when something blocks the view.
public class FM3rdInput : MonoBehaviour
{
    public GameObject followTarget;
    public float followDistance = 5.0f;
    public float followMinDistance = 2.0f;
    public float followMaxDistance = 10.0f;
    public float maxPitch = 80.0f;
    public float minPitch = -80.0f;
    public bool invertLook = true;
    public Vector2 lookSensitivity = new Vector2(1.5f, 1.25f);
    [SerializeField] private float autoReturnDelay = 1.0f;
    [SerializeField] private float autoReturnSpeed = 2.0f;
    [SerializeField] private float defaultPitch = 10.0f;
    [SerializeField] private bool enableAutoReturn = true;
    [SerializeField] private float forwardSpeedMultiplier = 1.0f;
    [SerializeField] private float backwardSpeedMultiplier = 0.0f;

    [Space(15f)]
    public Transform planetTransform;
    [Tooltip("Camera distance from the follow target (Cinemachine 3rd Person Follow CameraDistance in the source).")]
    public float cameraDistance = 11f;
    public float cameraRadius = 0.1f;
    public Camera cam;
    public ScreenDeltaInputSystem lookArea;
    [HideInInspector] public float extraRoll;
    // Degrees of camera turn the player has dragged so far (controls tutorial)
    public float LookAccumulated { get; private set; }

    private FMCharacter character;
    private float yaw, pitch;
    private float lastLookInputTime;
    private bool autoReturning;
    // Planet mode (source FM3rdInput): the camera forward is kept on the plane under the character and yaw turns
    // around the character's up, so the view follows the planet's curve.
    private bool planetMode;
    private Vector3 planetForward = Vector3.forward;

    private void Awake()
    {
        character = GetComponent<FMCharacter>();
        if (cam == null) cam = character && character.Camera ? character.Camera : Camera.main;
    }

    private void Start()
    {
        if (!viewSet)
        {
            yaw = transform.eulerAngles.y;
            pitch = defaultPitch;
        }
        UpdateCamera();
    }

    private bool viewSet;

    // Story start view: camera yaw/pitch set right away (independent of where the player faces).
    public void SetView(float newYaw, float newPitch)
    {
        yaw = newYaw;
        pitch = Mathf.Clamp(newPitch, minPitch, maxPitch);
        viewSet = true;
        autoReturning = false;
        lastLookInputTime = Time.time;
        UpdateCamera();
    }

    public void EnablePlanet(Transform newPlanetTransform, bool enable) { planetTransform = newPlanetTransform; }

    public virtual void AddControlYawInput(float value)
    {
        if (value == 0) return;
        if (planetMode) planetForward = Quaternion.AngleAxis(value, transform.up) * planetForward;
        else yaw = Mathf.Repeat(yaw + value + 180f, 360f) - 180f;
        lastLookInputTime = Time.time;
        autoReturning = false;
    }

    public void AddControlPitchInput(float value)
    {
        if (value == 0) return;
        if (invertLook) value = -value;
        pitch = Mathf.Clamp(pitch + value, minPitch, maxPitch);
        lastLookInputTime = Time.time;
        autoReturning = false;
    }

    // Story camera move: turn the view smoothly towards a world point (yaw and pitch), then hand control back.
    public void LookTowards(Vector3 point, float duration)
    {
        if (followTarget == null || planetMode) return;
        Vector3 d = point - followTarget.transform.position;
        Vector3 flat = new Vector3(d.x, 0, d.z);
        if (flat.sqrMagnitude < 0.0001f) return;
        turnFromYaw = yaw;
        turnFromPitch = pitch;
        turnToYaw = Quaternion.LookRotation(flat).eulerAngles.y;
        // positive pitch looks down
        turnToPitch = Mathf.Clamp(-Mathf.Atan2(d.y, flat.magnitude) * Mathf.Rad2Deg + defaultPitch, minPitch, maxPitch);
        turnDuration = Mathf.Max(0.01f, duration);
        turnClock = 0;
        autoReturning = false;
    }

    public bool IsTurning { get { return turnClock >= 0; } }

    private float turnClock = -1, turnDuration, turnFromYaw, turnToYaw, turnFromPitch, turnToPitch;

    private void UpdateTurn()
    {
        if (turnClock < 0) return;
        turnClock += Time.deltaTime;
        float t = Mathf.Clamp01(turnClock / turnDuration);
        float e = t * t * (3 - 2 * t);
        yaw = Mathf.LerpAngle(turnFromYaw, turnToYaw, e);
        pitch = Mathf.Lerp(turnFromPitch, turnToPitch, e);
        // the player's look input and auto return wait until the turn is done
        lastLookInputTime = Time.time;
        if (t >= 1) turnClock = -1;
    }

    public void ResetCameraToPlayerBack()
    {
        yaw = transform.eulerAngles.y;
        planetForward = transform.forward;
        pitch = defaultPitch;
        autoReturning = false;
        lastLookInputTime = Time.time;
    }

    private void LateUpdate()
    {
        bool onPlanet = character != null && character.IsOnPlanet;
        if (onPlanet != planetMode)
        {
            planetMode = onPlanet;
            Vector3 f = followTarget ? followTarget.transform.forward : transform.forward;
            if (planetMode)
            {
                planetForward = Vector3.ProjectOnPlane(transform.forward, transform.up).normalized;
                pitch = defaultPitch;
            }
            else
            {
                f = Vector3.ProjectOnPlane(f, Vector3.up);
                if (f.sqrMagnitude > 0.0001f) yaw = Quaternion.LookRotation(f).eulerAngles.y;
            }
        }
        Vector2 look = lookArea ? lookArea.ConsumeDelta() : Vector2.zero;
#if UNITY_EDITOR
        if (look == Vector2.zero && Input.GetMouseButton(1))
            look = new Vector2(Input.GetAxis("Mouse X"), Input.GetAxis("Mouse Y")) * 20f;
#endif
        if (character == null || character.InputEnabled)
        {
            AddControlYawInput(look.x * lookSensitivity.x);
            AddControlPitchInput(look.y * lookSensitivity.y);
            LookAccumulated += Mathf.Abs(look.x * lookSensitivity.x) + Mathf.Abs(look.y * lookSensitivity.y);
        }
        HandleAutoReturn(look);
        UpdateTurn();
        UpdateCamera();
    }

    private void HandleAutoReturn(Vector2 look)
    {
        if (!enableAutoReturn || character == null || planetMode) return;
        if (look.sqrMagnitude > 0.0001f) { lastLookInputTime = Time.time; autoReturning = false; return; }
        if (character.speed < 0.1f) { autoReturning = false; return; }
        if (Time.time - lastLookInputTime >= autoReturnDelay) autoReturning = true;
        if (!autoReturning) return;

        Vector3 charFwd = Vector3.ProjectOnPlane(transform.forward, Vector3.up).normalized;
        Vector3 camFwd = Quaternion.Euler(0, yaw, 0) * Vector3.forward;
        float multiplier = Mathf.Lerp(backwardSpeedMultiplier, forwardSpeedMultiplier, (Vector3.Dot(charFwd, camFwd) + 1f) * .5f);
        float s = autoReturnSpeed * multiplier * Time.deltaTime;
        yaw = Mathf.LerpAngle(yaw, transform.eulerAngles.y, s);
        pitch = Mathf.Lerp(pitch, defaultPitch, s);
    }

    public virtual void UpdateCamera()
    {
        if (followTarget == null) return;
        Quaternion rotation;
        if (planetMode)
        {
            Vector3 up = transform.up;
            Vector3.OrthoNormalize(ref up, ref planetForward);
            rotation = Quaternion.LookRotation(planetForward, up) * Quaternion.Euler(pitch, 0, 0);
        }
        else rotation = Quaternion.Euler(pitch, yaw, 0);
        followTarget.transform.rotation = rotation;
        if (cam == null) return;

        Vector3 pivot = followTarget.transform.position;
        Vector3 back = rotation * Vector3.back;
        float distance = cameraDistance;
        RaycastHit[] hits = Physics.RaycastAll(pivot, back, cameraDistance + cameraRadius);
        for (int i = 0; i < hits.Length; i++)
        {
            Collider c = hits[i].collider;
            if (c == null || c.isTrigger || c.transform.IsChildOf(transform)) continue;
            distance = Mathf.Min(distance, Mathf.Max(0.5f, hits[i].distance - cameraRadius));
        }
        cam.transform.position = pivot + back * distance;
        // extraRoll: spin around the view axis (teleport transition), 0 normally
        cam.transform.rotation = extraRoll != 0 ? rotation * Quaternion.Euler(0, 0, extraRoll) : rotation;
    }
}
