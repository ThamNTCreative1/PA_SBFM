using TMPro;
using UnityEngine;

// Big guide text ("ONE MORE MORPH AWAITS!", "ENTER THE PORTAL!", ...). Pops in, gently pulses, fades out by colour alpha.
// The text object is placed in the scene; only its scale/alpha are animated as feedback.
public class StoryTextView : MonoBehaviour
{
    [SerializeField] private TMP_Text label;
    [SerializeField] private float popDuration = 0.35f;
    [SerializeField] private float pulseAmount = 0.05f;
    [SerializeField] private float pulseSpeed = 4f;
    [SerializeField] private float fadeDuration = 0.25f;

    private float clock = -1, fadeClock = -1, baseAlpha = 1;
    private Vector3 baseScale = Vector3.one;

    private void Awake()
    {
        if (label == null) label = GetComponent<TMP_Text>();
        baseScale = transform.localScale;
        if (label) baseAlpha = label.color.a;
        // The object starts inactive in the scene; Show() turns it on.
    }

    public void Show(string text)
    {
        if (label) { label.text = text; SetAlpha(1); }
        gameObject.SetActive(true);
        clock = 0; fadeClock = -1;
        transform.localScale = baseScale * 0.3f;
    }

    public void Hide()
    {
        if (!gameObject.activeSelf) return;
        fadeClock = 0;
    }

    private void SetAlpha(float k)
    {
        if (!label) return;
        Color c = label.color; c.a = baseAlpha * k; label.color = c;
    }

    private void Update()
    {
        if (clock < 0) return;
        clock += Time.unscaledDeltaTime;
        float t = Mathf.Clamp01(clock / popDuration);
        const float c1 = 1.70158f, c3 = c1 + 1f;
        float pop = 1 + c3 * Mathf.Pow(t - 1, 3) + c1 * Mathf.Pow(t - 1, 2);
        float pulse = t >= 1 ? 1 + Mathf.Sin((clock - popDuration) * pulseSpeed) * pulseAmount : 1;
        transform.localScale = baseScale * Mathf.LerpUnclamped(0.3f, 1f, pop) * pulse;

        if (fadeClock >= 0)
        {
            fadeClock += Time.unscaledDeltaTime;
            float f = Mathf.Clamp01(fadeClock / fadeDuration);
            SetAlpha(1 - f);
            if (f >= 1) { clock = -1; fadeClock = -1; transform.localScale = baseScale; gameObject.SetActive(false); }
        }
    }
}
