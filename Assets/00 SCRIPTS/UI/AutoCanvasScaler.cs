using UnityEngine;
using UnityEngine.UI;

// CanvasScaler match driven by the screen aspect (same GUID and fields as HAVIGAME AutoCanvasScaler),
// so the HUD scales sensibly in both portrait and landscape. Only the scaler's match value is changed.
[RequireComponent(typeof(CanvasScaler))]
public class AutoCanvasScaler : MonoBehaviour
{
    [SerializeField] private CanvasScaler canvasScaler;
    [SerializeField] private bool autoScale = true;
    [SerializeField, Range(0f, 10f)] private float updateRate = 1f;
    [SerializeField] private AnimationCurve curve = AnimationCurve.Linear(1.33f, 0f, 2f, 1f);

    private float currentAspect = -1;
    private float timer;

    private void OnEnable()
    {
        if (canvasScaler == null) canvasScaler = GetComponent<CanvasScaler>();
        Calculate();
    }

    private void Update()
    {
        if (!autoScale) return;
        timer -= Time.unscaledDeltaTime;
        if (timer > 0) return;
        timer = Mathf.Max(0.1f, updateRate);
        Calculate();
    }

    public void Calculate()
    {
        if (canvasScaler == null || Screen.height == 0) return;
        float aspect = (float)Screen.width / Screen.height;
        if (Mathf.Approximately(aspect, currentAspect)) return;
        currentAspect = aspect;
        canvasScaler.matchWidthOrHeight = curve.Evaluate(aspect);
    }
}
