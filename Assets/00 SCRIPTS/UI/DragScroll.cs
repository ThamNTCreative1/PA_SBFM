using UnityEngine;
using UnityEngine.EventSystems;

// Vertical drag-scroll list (replaces ScrollRect + Scrollbar: those use DrivenRectTransformTracker, which Luna warns
// about). Put it on the viewport (with a Mask). The content's anchored Y moves between 0 (top) and content height -
// viewport height. Inertia after release, elastic pull at both ends, mouse wheel. The optional scrollbar handle
// follows the list, and the bar can be pressed / dragged (ScrollbarArea below).
public class DragScroll : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler, IScrollHandler, IInitializePotentialDragHandler
{
    [SerializeField] private RectTransform content;
    [SerializeField] private RectTransform viewport;

    [Header("Scrollbar (optional)")]
    [SerializeField] private RectTransform scrollbarArea;
    [SerializeField] private RectTransform scrollbarHandle;

    [Header("Feel")]
    [SerializeField] private float decelerationRate = 0.135f;
    [SerializeField] private float elasticity = 0.1f;
    [SerializeField] private float scrollSensitivity = 30f;

    private bool dragging;
    private Vector2 pointerStart;
    private float contentStart;
    private float velocity;
    private float elasticVel;

    public RectTransform Content { get { return content; } }
    public RectTransform Viewport { get { return viewport ? viewport : (RectTransform)transform; } }
    public float MaxScroll { get { return content ? Mathf.Max(0, content.rect.height - Viewport.rect.height) : 0; } }

    // 0 = top, 1 = bottom
    public float Normalized
    {
        get { float m = MaxScroll; return m > 0 ? Mathf.Clamp01(Y / m) : 0; }
        set { SetY(Mathf.Clamp01(value) * MaxScroll); velocity = 0; }
    }

    private float Y { get { return content ? content.anchoredPosition.y : 0; } }

    private void SetY(float y)
    {
        if (content == null) return;
        content.anchoredPosition = new Vector2(content.anchoredPosition.x, y);
        UpdateHandle();
    }

    public void StopMovement() { velocity = 0; }

    // Moves the list by a distance (SelectHandHint auto-scroll); stays inside the range.
    public void ScrollTo(float y)
    {
        velocity = 0;
        SetY(Mathf.Clamp(y, 0, MaxScroll));
    }

    private void OnEnable() { UpdateHandle(); }

    public void OnInitializePotentialDrag(PointerEventData e) { velocity = 0; }

    public void OnBeginDrag(PointerEventData e)
    {
        if (e.button != PointerEventData.InputButton.Left) return;
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(Viewport, e.position, e.pressEventCamera, out local)) return;
        dragging = true;
        pointerStart = local;
        contentStart = Y;
    }

    public void OnDrag(PointerEventData e)
    {
        if (!dragging) return;
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(Viewport, e.position, e.pressEventCamera, out local)) return;
        float y = contentStart + (local.y - pointerStart.y);
        // rubber band past the ends
        float max = MaxScroll;
        if (y < 0) y = -Rubber(-y, Viewport.rect.height);
        else if (y > max) y = max + Rubber(y - max, Viewport.rect.height);
        float prev = Y;
        SetY(y);
        float dt = Mathf.Max(Time.unscaledDeltaTime, 0.0001f);
        velocity = Mathf.Lerp(velocity, (y - prev) / dt, dt * 10f);
    }

    public void OnEndDrag(PointerEventData e) { dragging = false; }

    public void OnScroll(PointerEventData e)
    {
        velocity = 0;
        SetY(Mathf.Clamp(Y - e.scrollDelta.y * scrollSensitivity, 0, MaxScroll));
    }

    private static float Rubber(float overStretch, float viewSize)
    {
        return (1 - 1 / (overStretch * 0.55f / Mathf.Max(1, viewSize) + 1)) * viewSize;
    }

    private void LateUpdate()
    {
        if (content == null || dragging) return;
        float dt = Time.unscaledDeltaTime;
        float y = Y, max = MaxScroll;
        if (y < 0 || y > max)
        {
            // spring back
            float target = y < 0 ? 0 : max;
            y = Mathf.SmoothDamp(y, target, ref elasticVel, elasticity, Mathf.Infinity, dt);
            if (Mathf.Abs(y - target) < 0.5f) y = target;
            velocity = 0;
            SetY(y);
        }
        else if (Mathf.Abs(velocity) > 1f)
        {
            velocity *= Mathf.Pow(decelerationRate, dt);
            SetY(Mathf.Clamp(y + velocity * dt, 0, max));
            if (Y <= 0 || Y >= max) velocity = 0;
        }
    }

    // Handle length = visible part, position = scroll position (anchors inside the bar area, set as feedback).
    private void UpdateHandle()
    {
        if (scrollbarHandle == null || content == null) return;
        float contentH = Mathf.Max(1, content.rect.height);
        float size = Mathf.Clamp01(Viewport.rect.height / contentH);
        float pos = Normalized;
        float top = 1 - (1 - size) * pos;
        scrollbarHandle.anchorMin = new Vector2(0, top - size);
        scrollbarHandle.anchorMax = new Vector2(1, top);
        scrollbarHandle.offsetMin = Vector2.zero;
        scrollbarHandle.offsetMax = Vector2.zero;
    }

    // Pointer on the scrollbar bar: jump/drag the list there.
    public void ScrollbarPointer(PointerEventData e)
    {
        if (scrollbarArea == null) return;
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(scrollbarArea, e.position, e.pressEventCamera, out local)) return;
        Rect r = scrollbarArea.rect;
        float contentH = Mathf.Max(1, content.rect.height);
        float size = Mathf.Clamp01(Viewport.rect.height / contentH);
        float t = Mathf.InverseLerp(r.yMax - r.height * size * 0.5f, r.yMin + r.height * size * 0.5f, local.y);
        Normalized = t;
    }
}
