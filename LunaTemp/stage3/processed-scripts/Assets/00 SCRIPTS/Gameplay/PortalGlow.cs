using UnityEngine;

// Portal "wakes up" when the player comes near: its inner glow pulses brighter/bigger and an energy swirl starts.
public class PortalGlow : MonoBehaviour
{
    [Tooltip("Inner portal sprite (the purple surface).")]
    [SerializeField] private SpriteRenderer surface;
    [SerializeField] private ParticleSystem swirl;
    [SerializeField] private Color glowColor = new Color(1f, 0.6f, 1f, 1f);
    [SerializeField] private float pulseSpeed = 6f;
    [SerializeField] private float pulseScale = 0.12f;
    [SerializeField] private float rampDuration = 0.5f;

    private Color baseColor = Color.white;
    private Vector3 baseScale = Vector3.one;
    private float clock = -1;
    // The surface sprite and any sprite under it, tinted together
    private SpriteRenderer[] faces = new SpriteRenderer[0];

    public bool Active { get { return clock >= 0; } }

    private void SetColor([Bridge.Ref] Color color)
    {
        for (int i = 0; i < faces.Length; i++) if (faces[i]) faces[i].color = color;
    }

    private void Awake()
    {
        if (surface) { baseColor = surface.color; baseScale = surface.transform.localScale; faces = surface.GetComponentsInChildren<SpriteRenderer>(true); }
        if (swirl) { swirl.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear); swirl.gameObject.SetActive(false); }
    }

    public void Activate()
    {
        if (clock >= 0) return;
        clock = 0;
        if (swirl) { swirl.gameObject.SetActive(true); swirl.Play(true); }
    }

    public void Deactivate()
    {
        clock = -1;
        if (surface) { SetColor(baseColor); surface.transform.localScale = baseScale; }
        if (swirl) swirl.Stop(true, ParticleSystemStopBehavior.StopEmitting);
    }

    private void Update()
    {
        if (clock < 0 || surface == null) return;
        clock += Time.deltaTime;
        float ramp = Mathf.Clamp01(clock / rampDuration);
        float pulse = (Mathf.Sin(clock * pulseSpeed) + 1) * .5f;
        SetColor(Color.Lerp(baseColor, glowColor, ramp * (0.6f + 0.4f * pulse)));
        surface.transform.localScale = baseScale * (1 + ramp * pulseScale * (0.5f + pulse));
    }
}
