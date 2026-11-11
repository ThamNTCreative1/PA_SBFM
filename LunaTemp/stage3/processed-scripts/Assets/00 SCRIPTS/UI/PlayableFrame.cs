using UnityEngine;

// Base for the popups placed in the scene (replaces HAVIGAME UIFrame + UIManager push/pop).
// Show/Hide toggle the GameObject; the "Root" child pops in as feedback (the layout itself is left as built in the scene).
public class PlayableFrame : MonoBehaviour
{
    public static int OpenCount { get; private set; }

    [SerializeField] private Transform popRoot;
    [SerializeField] private float popDuration = 0.25f;

    private bool counted;
    private float popTime = -1;

    public bool IsOpen { get { return gameObject.activeSelf; } }

    protected virtual void Awake()
    {
        if (popRoot == null) popRoot = transform.Find("Root");
    }

    public void Show()
    {
        gameObject.SetActive(true);
        transform.SetAsLastSibling();
        if (!counted) { counted = true; OpenCount++; }
        popTime = 0;
        if (popRoot) popRoot.localScale = Vector3.one * 0.6f;
        OnShow();
    }

    public void Hide()
    {
        if (counted) { counted = false; OpenCount--; }
        OnHide();
        gameObject.SetActive(false);
    }

    protected virtual void OnShow() { }
    protected virtual void OnHide() { }

    protected virtual void OnDisable()
    {
        if (counted) { counted = false; OpenCount--; }
        if (popRoot) popRoot.localScale = Vector3.one;
    }

    protected virtual void Update()
    {
        if (popTime < 0 || popRoot == null) return;
        popTime += Time.unscaledDeltaTime;
        float t = Mathf.Clamp01(popTime / popDuration);
        // OutBack
        const float c1 = 1.70158f, c3 = c1 + 1f;
        float e = 1 + c3 * Mathf.Pow(t - 1, 3) + c1 * Mathf.Pow(t - 1, 2);
        popRoot.localScale = Vector3.one * Mathf.LerpUnclamped(0.6f, 1f, e);
        if (t >= 1) popTime = -1;
    }
}
