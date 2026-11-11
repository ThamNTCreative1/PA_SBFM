using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Teleport screen transition (about 2 s): the view is pulled into the portal (camera FOV warp) while a purple veil,
// a spinning vortex, two counter-rotating energy rings, a breathing glow and whirlpool sparkles cover the screen
// while the camera rolls round (2 turns);
// a white flash marks the jump, then everything bursts outward and fades on arrival.
// Fading sets Graphic colour alpha directly (no CanvasGroup). Only scale/rotation/alpha (and sparkle travel) are animated.
public class ScreenTransition : MonoBehaviour
{
    public static ScreenTransition Instance { get; private set; }

    [Header("Layers (placed in the scene)")]
    [SerializeField] private Image overlay;
    [SerializeField] private Image glow;
    [SerializeField] private Image swirl;
    [SerializeField] private Image swirlInner;
    [SerializeField] private Image flash;
    [SerializeField] private List<Image> sparkles = new List<Image>();
    [Tooltip("Container of the vortex arms; spins faster and faster while covering.")]
    [SerializeField] private RectTransform vortex;
    [SerializeField] private List<Image> vortexArms = new List<Image>();

    [Header("Timing")]
    [SerializeField] private float coverDuration = 0.75f;
    [SerializeField] private float holdDuration = 0.5f;
    [SerializeField] private float revealDuration = 0.9f;

    [Header("Look")]
    [SerializeField] private float swirlSpeed = 420f;
    [SerializeField] private float swirlMaxScale = 4f;
    [SerializeField] private float sparkleRadius = 900f;
    [Tooltip("Ring the sparkles gather on while the screen is covered.")]
    [SerializeField] private float sparkleInnerRadius = 260f;
    [SerializeField] private Color overlayPulseColor = new Color(0.75f, 0.2f, 0.95f, 1f);
    [SerializeField] private float vortexSpeed = 720f;
    [Tooltip("Sparkle spin (deg/s) at the outer radius; it speeds up as they get closer to the centre, like a whirlpool.")]
    [SerializeField] private float sparkleSpin = 120f;

    [Header("Camera warp")]
    [SerializeField] private Camera warpCamera;
    [SerializeField] private float warpFov = 80f;
    [Tooltip("Camera spin around the view axis over the whole transition (a multiple of 360 so it ends upright).")]
    [SerializeField] private FM3rdInput cameraRig;
    [SerializeField] private float rollDegrees = 720f;

    private class Layer { public Image image; public float alpha; public Vector3 scale; }
    private readonly Dictionary<Image, Layer> layers = new Dictionary<Image, Layer>();
    private float[] sparkleAngle, sparkleDist, sparkleSpeed, sparklePhase;
    private Color overlayBaseColor;
    private float baseFov = -1;
    private float clock, elapsed, vortexAngle;

    private void Awake()
    {
        Instance = this;
        if (warpCamera == null) warpCamera = Camera.main;
        Register(overlay); Register(glow); Register(swirl); Register(swirlInner); Register(flash);
        for (int i = 0; i < sparkles.Count; i++) Register(sparkles[i]);
        for (int i = 0; i < vortexArms.Count; i++) Register(vortexArms[i]);
        if (cameraRig == null && warpCamera) cameraRig = FindCameraRig();
        if (overlay) overlayBaseColor = overlay.color;
        int n = sparkles.Count;
        sparkleAngle = new float[n]; sparkleDist = new float[n]; sparkleSpeed = new float[n]; sparklePhase = new float[n];
        for (int i = 0; i < n; i++)
        {
            sparkleAngle[i] = i * (360f / Mathf.Max(1, n)) + Random.Range(-10f, 10f);
            sparkleDist[i] = Random.Range(0.55f, 1f);
            sparkleSpeed[i] = Random.Range(0.7f, 1.3f);
            sparklePhase[i] = Random.Range(0f, Mathf.PI * 2f);
        }
        HideAll();
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    private FM3rdInput FindCameraRig()
    {
        FMCharacter character = FindMonsterManager.Instance ? FindMonsterManager.Instance.PlayerTransform.GetComponent<FMCharacter>() : null;
        return character ? character.GetComponent<FM3rdInput>() : null;
    }

    private void Register(Image image)
    {
        if (image == null || layers.ContainsKey(image)) return;
        image.raycastTarget = false;
        layers[image] = new Layer { image = image, alpha = image.color.a, scale = image.rectTransform.localScale };
    }

    private void SetAlpha(Image image, float k)
    {
        if (image == null) return;
        Layer l; if (!layers.TryGetValue(image, out l)) return;
        Color c = image.color; c.a = l.alpha * Mathf.Clamp01(k); image.color = c;
        image.enabled = k > 0.001f;
    }

    private void SetScale(Image image, float s)
    {
        if (image == null) return;
        Layer l; if (!layers.TryGetValue(image, out l)) return;
        image.rectTransform.localScale = l.scale * s;
    }

    private void HideAll()
    {
        foreach (Layer l in layers.Values) SetAlpha(l.image, 0);
    }

    // phase: 0..1 during cover, 1 during hold, 1..2 during reveal
    private void Animate(float phase, float dt)
    {
        clock += dt;
        elapsed += dt;
        float cover = Mathf.Clamp01(phase);
        float reveal = Mathf.Clamp01(phase - 1f);
        float shown = phase <= 1 ? cover : 1 - reveal;

        // Veil: ease in, pulsing between the base and a brighter magenta
        if (overlay)
        {
            SetAlpha(overlay, shown * shown * (3 - 2 * shown));
            float pulse = (Mathf.Sin(clock * 7f) + 1) * .5f;
            Color c = Color.Lerp(overlayBaseColor, overlayPulseColor, pulse * 0.6f);
            c.a = overlay.color.a; overlay.color = c;
        }
        // Breathing glow behind the rings
        SetAlpha(glow, Mathf.Clamp01(shown * 1.5f));
        SetScale(glow, Mathf.Lerp(0.6f, 1.6f, cover) * (1 + Mathf.Sin(clock * 5f) * 0.08f) + reveal * 1.5f);

        // Counter-rotating energy rings
        float ringScale = phase <= 1 ? Mathf.Lerp(0.2f, swirlMaxScale * .55f, cover) : Mathf.Lerp(swirlMaxScale * .55f, swirlMaxScale * 1.2f, reveal);
        SetAlpha(swirl, Mathf.Clamp01(cover * 2f) * (1 - reveal * reveal));
        SetScale(swirl, ringScale * (1 + Mathf.Sin(clock * 9f) * 0.05f));
        if (swirl) swirl.rectTransform.Rotate(0, 0, -swirlSpeed * dt);
        SetAlpha(swirlInner, Mathf.Clamp01(cover * 2f - .3f) * (1 - reveal));
        SetScale(swirlInner, ringScale * 0.55f * (1 + Mathf.Sin(clock * 11f + 1f) * 0.08f));
        if (swirlInner) swirlInner.rectTransform.Rotate(0, 0, swirlSpeed * 1.6f * dt);

        // Vortex arms: a spinning whirl that speeds up while covering and keeps turning as it opens out
        float spin = phase <= 1 ? Mathf.Lerp(0.3f, 1f, cover) : Mathf.Lerp(1f, 0.4f, reveal);
        vortexAngle -= vortexSpeed * spin * dt;
        if (vortex)
        {
            vortex.localRotation = Quaternion.Euler(0, 0, vortexAngle);
            vortex.localScale = Vector3.one * (phase <= 1 ? Mathf.Lerp(1.6f, 0.9f, cover) : Mathf.Lerp(0.9f, 2.2f, reveal));
        }
        for (int i = 0; i < vortexArms.Count; i++)
            SetAlpha(vortexArms[i], Mathf.Clamp01(cover * 1.6f) * (1 - reveal) * (0.75f + 0.25f * Mathf.Sin(clock * 8f + i)));

        // Camera spin: eases in, peaks around the jump, eases out upright
        if (cameraRig)
        {
            float total = coverDuration + holdDuration + revealDuration;
            float u = Mathf.Clamp01(elapsed / Mathf.Max(0.01f, total));
            float e = u * u * u * (u * (u * 6 - 15) + 10); // smootherstep
            cameraRig.extraRoll = Mathf.Repeat(rollDegrees * e + 180f, 360f) - 180f;
        }

        // Sparkles: spiral inward while covering, burst outward on arrival, twinkling all the time
        for (int i = 0; i < sparkles.Count; i++)
        {
            Image s = sparkles[i]; if (s == null) continue;
            float r;
            if (phase <= 1) r = Mathf.Lerp(sparkleRadius * sparkleDist[i], sparkleInnerRadius * sparkleDist[i], Mathf.Pow(cover, 0.8f));
            else r = Mathf.Lerp(sparkleInnerRadius * sparkleDist[i], sparkleRadius * 1.3f * sparkleDist[i], 1 - (1 - reveal) * (1 - reveal));
            // whirlpool: the closer to the centre, the faster they turn; every other one turns the other way
            float dir = (i & 1) == 0 ? 1f : -0.6f;
            sparkleAngle[i] += dir * sparkleSpin * sparkleSpeed[i] * Mathf.Clamp(sparkleRadius / Mathf.Max(r, 80f), 1f, 5f) * dt;
            float a = sparkleAngle[i] * Mathf.Deg2Rad;
            s.rectTransform.anchoredPosition = new Vector2(Mathf.Cos(a), Mathf.Sin(a)) * r;
            s.rectTransform.localRotation = Quaternion.Euler(0, 0, clock * 90f * sparkleSpeed[i]);
            float twinkle = 0.55f + 0.45f * Mathf.Sin(clock * 14f * sparkleSpeed[i] + sparklePhase[i]);
            SetScale(s, twinkle * (phase <= 1 ? 0.6f + cover * 0.6f : 1.2f - reveal * 0.6f));
            SetAlpha(s, Mathf.Clamp01(cover * 2.5f) * (1 - reveal) * (0.4f + 0.6f * twinkle));
        }

        // Camera pulled into the portal, then released
        if (warpCamera)
        {
            if (baseFov < 0) baseFov = warpCamera.fieldOfView;
            float w = phase <= 1 ? cover * cover : 1 - reveal;
            warpCamera.fieldOfView = Mathf.Lerp(baseFov, warpFov, w);
        }
    }

    private void Flash(float k)
    {
        SetAlpha(flash, k);
    }

    public IEnumerator Cover()
    {
        clock = 0; elapsed = 0;
        if (cameraRig == null) cameraRig = FindCameraRig();
        if (warpCamera) baseFov = warpCamera.fieldOfView;
        float t = 0;
        while (t < coverDuration)
        {
            float dt = Time.unscaledDeltaTime; t += dt;
            Animate(Mathf.Clamp01(t / coverDuration), dt);
            yield return null;
        }
        // Hold: fully covered, rings keep spinning; a white flash peaks in the middle (the jump happens after)
        float h = 0;
        while (h < holdDuration)
        {
            float dt = Time.unscaledDeltaTime; h += dt;
            Animate(1, dt);
            float k = Mathf.Clamp01(h / holdDuration);
            Flash(Mathf.Sin(k * Mathf.PI) * 0.85f);
            yield return null;
        }
        Flash(0);
    }

    public IEnumerator Reveal()
    {
        float t = 0;
        while (t < revealDuration)
        {
            float dt = Time.unscaledDeltaTime; t += dt;
            float k = Mathf.Clamp01(t / revealDuration);
            Animate(1 + k, dt);
            Flash(k < .15f ? (1 - k / .15f) * 0.5f : 0);
            yield return null;
        }
        HideAll();
        if (warpCamera && baseFov > 0) warpCamera.fieldOfView = baseFov;
        if (cameraRig) cameraRig.extraRoll = 0;
    }
}
