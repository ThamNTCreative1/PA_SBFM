using UnityEngine;

// Fit the morph UI inside the existing UI canvas without changing its scaler.
[ExecuteAlways]
[RequireComponent(typeof(RectTransform))]
public class MorphSelectionLayout : MonoBehaviour
{
    [SerializeField] private Vector2 referenceSize = new Vector2(1000f, 1000f);
    private RectTransform rect;

    private void OnEnable()
    {
        rect = GetComponent<RectTransform>();
        Fit();
    }

    private void LateUpdate() => Fit();

    private void Fit()
    {
        if (rect == null) return;
        var parent = rect.parent as RectTransform;
        if (parent == null) return;
        Vector2 size = parent.rect.size;
        if (size.x <= 0f || size.y <= 0f) return;
        float scale = Mathf.Min(size.x / referenceSize.x, size.y / referenceSize.y);
        rect.anchorMin = rect.anchorMax = rect.pivot = new Vector2(0.5f, 0.5f);
        rect.anchoredPosition = Vector2.zero;
        rect.sizeDelta = size / scale;
        rect.localScale = Vector3.one * scale;
    }
}
