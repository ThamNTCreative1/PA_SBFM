using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Tap hand on the Sprunki collection: goes over the Select buttons one card after the other (cards already found are
// skipped) and loops. Shown only the first time the collection opens: after the first Select it stays hidden. When the next card is outside the scroll view, the list scrolls to it.
// Only the hand's position/scale and the list scroll are animated (feedback); the layout stays as built in the scene.
public class SelectHandHint : MonoBehaviour
{
    [SerializeField] private RectTransform hand;
    [SerializeField] private DragScroll scroll;
    [SerializeField] private List<SprunkiCard> cards = new List<SprunkiCard>();

    [Header("Timing")]
    [SerializeField] private float startDelay = 0.5f;
    [SerializeField] private float moveDuration = 0.45f;
    [SerializeField] private float pressDuration = 0.35f;
    [SerializeField] private float holdDuration = 0.35f;
    [Tooltip("Canvas units per second the list scrolls to show the next card.")]
    [SerializeField] private float scrollSpeed = 1500f;
    [SerializeField] private float pressScale = 0.85f;

    private enum Phase { Wait, Move, Press, Hold, Off }
    private Phase phase;
    private float clock;
    private int index;
    private Vector3 from;
    private Vector3 baseScale = Vector3.one;
    private Image handImage;
    private bool first;
    private bool done;

    private void Awake()
    {
        if (hand == null) hand = (RectTransform)transform;
        baseScale = hand.localScale;
        handImage = hand.GetComponent<Image>();
    }

    private void OnEnable()
    {
        if (done) { phase = Phase.Off; SetVisible(false); return; }
        phase = Phase.Wait;
        clock = 0;
        index = -1;
        first = true;
        SetVisible(false);
    }

    // The collection closes when a Sprunki is selected: the hint is not shown again
    private void OnDisable()
    {
        if (phase != Phase.Off || !first) done = true;
        SetVisible(false);
    }

    private void SetVisible(bool on)
    {
        if (handImage) handImage.enabled = on;
    }

    private SprunkiCard Current { get { return index >= 0 && index < cards.Count ? cards[index] : null; } }

    private static bool Usable(SprunkiCard c)
    {
        return c != null && !c.Found && c.SelectButton != null && c.SelectButton.gameObject.activeInHierarchy;
    }

    private Vector3 Target(SprunkiCard c)
    {
        RectTransform b = (RectTransform)c.SelectButton.transform;
        return b.TransformPoint(b.rect.center);
    }

    private void Next()
    {
        for (int i = 0; i < cards.Count; i++)
        {
            index = (index + 1) % cards.Count;
            if (Usable(cards[index]))
            {
                from = first ? Target(cards[index]) : hand.position;
                first = false;
                SetVisible(true);
                phase = Phase.Move;
                clock = 0;
                return;
            }
        }
        // Nothing left to select
        SetVisible(false);
        phase = Phase.Off;
    }

    private void Update()
    {
        float dt = Time.unscaledDeltaTime;
        clock += dt;
        SprunkiCard card = Current;
        switch (phase)
        {
            case Phase.Wait:
                if (clock >= startDelay) Next();
                return;
            case Phase.Off:
                return;
        }
        if (!Usable(card)) { Next(); return; }

        ScrollToShow(card, dt);
        Vector3 to = Target(card);
        switch (phase)
        {
            case Phase.Move:
            {
                float t = Mathf.Clamp01(clock / moveDuration);
                t = t * t * (3 - 2 * t);
                hand.position = Vector3.Lerp(from, to, t);
                hand.localScale = baseScale;
                if (clock >= moveDuration) { phase = Phase.Press; clock = 0; }
                break;
            }
            case Phase.Press:
            {
                float t = Mathf.Clamp01(clock / pressDuration);
                hand.position = to;
                hand.localScale = baseScale * Mathf.Lerp(1f, pressScale, Mathf.Sin(t * Mathf.PI));
                if (clock >= pressDuration) { phase = Phase.Hold; clock = 0; hand.localScale = baseScale; }
                break;
            }
            case Phase.Hold:
                hand.position = to;
                if (clock >= holdDuration) Next();
                break;
        }
    }

    // Scroll the list (content moves up/down) until the card is fully inside the viewport.
    private void ScrollToShow(SprunkiCard card, float dt)
    {
        if (scroll == null || scroll.Content == null) return;
        RectTransform viewport = scroll.Viewport;
        RectTransform content = scroll.Content;
        RectTransform c = (RectTransform)card.transform;

        // Card top/bottom measured downwards from the content's top edge
        float top = -(c.anchoredPosition.y + c.rect.height * (1 - c.pivot.y));
        float bottom = top + c.rect.height;
        float viewH = viewport.rect.height;
        float maxY = Mathf.Max(0, content.rect.height - viewH);
        float y = content.anchoredPosition.y;
        float desired = y;
        const float margin = 20f;
        if (bottom > y + viewH) desired = bottom - viewH + margin;
        else if (top < y) desired = top - margin;
        desired = Mathf.Clamp(desired, 0, maxY);
        if (Mathf.Approximately(desired, y)) return;

        scroll.ScrollTo(Mathf.MoveTowards(y, desired, scrollSpeed * dt));
    }
}
