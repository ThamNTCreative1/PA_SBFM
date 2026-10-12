using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

/// <summary>Two distinct morph reveals, followed immediately by the end card.</summary>
public class MorphSelectionFlow : MonoBehaviour
{
    [Serializable]
    public class Morph
    {
        public GameObject prefab;
        public Sprite portrait;
        public Button card;
        public GameObject unlockedBadge;
    }

    [SerializeField] private Morph[] morphs;
    [SerializeField] private GameObject selectionPanel;
    [SerializeField] private GameObject previewPanel;
    [SerializeField] private GameObject backdrop;
    [SerializeField] private Image previewImage;
    [SerializeField] private Vector2 previewPortraitSize = new Vector2(440f, 465f);
    [SerializeField] private RectTransform aura;
    [SerializeField] private Button selectButton;
    [SerializeField] private GameObject unlockedMessage;
    [SerializeField] private Camera revealCamera;
    [SerializeField] private Transform spawnPoint;
    [SerializeField] private GameObject[] hideOnStart;
    [SerializeField] private Behaviour[] disableOnStart;
    [SerializeField] private float orbitDuration = 2f;
    [SerializeField] private float unlockedMessageDuration = 1f;
    [SerializeField] private float auraSpeed = 35f;

    [Header("Sound Effects")]
    [Tooltip("Played once when the morph preview and aura appear.")]
    [SerializeField] private AudioClip auraSfx;
    [Tooltip("Played once when the camera orbit starts. Use a roughly 2-second clip.")]
    [SerializeField] private AudioClip orbitSfx;

    private enum Phase { Dormant, Choosing, Preview, Orbiting, Unlocked, Complete }
    private Phase phase;
    private GameController owner;
    private bool[] unlocked;
    private int selected = -1;
    private int unlockCount;
    private GameObject currentMorph;
    private AudioSource orbitSource;
    private Vector3 menuCameraPosition;
    private Quaternion menuCameraRotation;
    private float menuFieldOfView;

    public int UnlockCount => unlockCount;

    public void Begin(GameController controller)
    {
        if (phase != Phase.Dormant) return;
        owner = controller;
        if (morphs == null || morphs.Length < 2 || revealCamera == null || spawnPoint == null)
        {
            Debug.LogError("Morph selection is missing its scene references.", this);
            return;
        }
        foreach (Behaviour component in disableOnStart)
            if (component != null) component.enabled = false;
        foreach (GameObject root in hideOnStart)
            if (root != null) root.SetActive(false);
        menuCameraPosition = revealCamera.transform.position;
        menuCameraRotation = revealCamera.transform.rotation;
        menuFieldOfView = revealCamera.fieldOfView;
        unlocked = new bool[morphs.Length];
        for (int i = 0; i < morphs.Length; i++)
        {
            int index = i;
            morphs[i].card.onClick.AddListener(() => PreviewMorph(index));
            if (morphs[i].unlockedBadge != null) morphs[i].unlockedBadge.SetActive(false);
        }
        selectButton.onClick.AddListener(ConfirmMorph);
        ShowSelection();
    }

    public void PreviewMorph(int index)
    {
        if (phase != Phase.Choosing || index < 0 || index >= morphs.Length || unlocked[index]) return;
        selected = index;
        phase = Phase.Preview;
        selectionPanel.SetActive(false);
        previewImage.sprite = morphs[index].portrait;
        previewImage.SetNativeSize();
        previewImage.preserveAspect = true;
        Vector2 nativeSize = previewImage.rectTransform.sizeDelta;
        float portraitScale = Mathf.Min(previewPortraitSize.x / nativeSize.x, previewPortraitSize.y / nativeSize.y);
        previewImage.rectTransform.localScale = Vector3.one * portraitScale;
        aura.localRotation = Quaternion.identity;
        previewPanel.SetActive(true);
        PlaySfx(auraSfx);
    }

   

    private void ShowSelection()
    {
        StopOrbitSfx();
        phase = Phase.Choosing;
        selected = -1;
        revealCamera.transform.SetPositionAndRotation(menuCameraPosition, menuCameraRotation);
        revealCamera.fieldOfView = menuFieldOfView;
        previewPanel.SetActive(false);
        unlockedMessage.SetActive(false);
        backdrop.SetActive(true);
        selectionPanel.SetActive(true);
    }

    public void ConfirmMorph()
    {
        if (phase != Phase.Preview || selected < 0 || unlocked[selected]) return;
        phase = Phase.Orbiting; // Lock input before starting the animation.
        previewPanel.SetActive(false);
        backdrop.SetActive(false);
        StartCoroutine(RevealMorph(selected));
    }

    private IEnumerator RevealMorph(int index)
    {
        // Every reveal uses the map center, without overlapping the previous morph.
        if (currentMorph != null)
        {
            currentMorph.SetActive(false);
            Destroy(currentMorph);
        }
        Vector3 position = spawnPoint.position;
        RaycastHit ground;
        if (Physics.Raycast(position + Vector3.up * 10f, Vector3.down, out ground, 30f,
                Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore))
            position.y = ground.point.y + 0.05f;
        GameObject model = Instantiate(morphs[index].prefab, position, spawnPoint.rotation);
        currentMorph = model;
        model.name = "Unlocked HiddenCharacter" + (19 + index);
        Renderer[] renderers = model.GetComponentsInChildren<Renderer>();
        Bounds bounds = new Bounds(position + Vector3.up * 2f, Vector3.one);
        if (renderers.Length > 0)
        {
            bounds = renderers[0].bounds;
            for (int i = 1; i < renderers.Length; i++) bounds.Encapsulate(renderers[i].bounds);
        }
        Vector3 focus = bounds.center;
        revealCamera.fieldOfView = 45f;
        float vertical = revealCamera.fieldOfView * Mathf.Deg2Rad * 0.5f;
        float horizontal = Mathf.Atan(Mathf.Tan(vertical) * revealCamera.aspect);
        float radius = bounds.extents.magnitude / Mathf.Sin(Mathf.Min(vertical, horizontal)) * 1.15f;
        // Keep an elevated view of the morph and its surroundings.
        Vector3 offset = new Vector3(0f, radius * 0.65f, radius);
        float duration = Mathf.Max(0.01f, orbitDuration);
        float elapsed = 0f;
        PlayOrbitSfx();
        while (elapsed < duration)
        {
            float angle = elapsed / duration * 360f;
            revealCamera.transform.position = focus + Quaternion.AngleAxis(angle, Vector3.up) * offset;
            revealCamera.transform.LookAt(focus);
            elapsed += Time.deltaTime;
            yield return null;
        }
        revealCamera.transform.position = focus + offset;
        revealCamera.transform.LookAt(focus);
        unlocked[index] = true;
        unlockCount++;
        owner.RegisterCollection();
        morphs[index].card.interactable = false;
        if (morphs[index].unlockedBadge != null) morphs[index].unlockedBadge.SetActive(true);
        phase = Phase.Unlocked;
        unlockedMessage.SetActive(true);
        // This is the readable duration of the message, with no additional CTA delay.
        yield return new WaitForSeconds(unlockedMessageDuration);
        if (unlockCount >= 2)
        {
            phase = Phase.Complete;
            StopOrbitSfx();
            unlockedMessage.SetActive(false);
            owner.CompleteMorphSelection();
        }
        else ShowSelection();
    }

    private void PlayOrbitSfx()
    {
        StopOrbitSfx();
        if (orbitSfx == null) return;
        // Own this source so stopping the orbit cannot stop another pooled SFX.
        if (orbitSource == null)
        {
            orbitSource = gameObject.AddComponent<AudioSource>();
            orbitSource.playOnAwake = false;
            // AudioSource defaults to 2D; spatialBlend is unsupported by Luna.
            orbitSource.loop = false;
        }
        orbitSource.clip = orbitSfx;
        orbitSource.Play();
    }

    private void StopOrbitSfx()
    {
        if (orbitSource != null) orbitSource.Stop();
    }

    private static void PlaySfx(AudioClip clip)
    {
        if (clip != null && AudioController.Ins != null)
            AudioController.Ins.PlaySFX(clip);
    }

    private void Update()
    {
        if (phase == Phase.Preview)
            aura.Rotate(0f, 0f, auraSpeed * Time.unscaledDeltaTime);
    }

    private void OnDisable()
    {
        StopOrbitSfx();
        StopAllCoroutines();
    }
}
