using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Serialization;

// Joystick (replaces Joystick Pack FloatingJoystick + InputSystemJoystick; same field names).
// Fixed by default: the ring stays where it is placed in the scene and the knob follows the finger, measured from
// the ring's centre (a press anywhere in this touch area works). Tick 'floating' to move the ring to the touch point.
public class PlayableJoystick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
    [SerializeField] private float handleRange = 1;
    [SerializeField] private float deadZone = 0;
    [Tooltip("Off: fixed joystick (ring stays in place). On: the ring jumps to the touch point while held.")]
    [SerializeField] private bool floating = false;
    [SerializeField] protected RectTransform background = null;
    // 'handle' is a Luna reserved keyword (LP3005): renamed, the prefab value is kept
    [SerializeField, FormerlySerializedAs("handle")] protected RectTransform knob = null;

    public Vector2 Value { get; private set; }

    private RectTransform area;
    private Vector2 initialBackgroundPosition;
    private int pointerId = int.MinValue;

    private void Awake()
    {
        area = (RectTransform)transform;
        if (background) initialBackgroundPosition = background.anchoredPosition;
    }

    public void OnPointerDown(PointerEventData e)
    {
        if (pointerId != int.MinValue || background == null) return;
        pointerId = e.pointerId;
        Vector3 world;
        if (floating && RectTransformUtility.ScreenPointToWorldPointInRectangle(area, e.position, e.pressEventCamera, out world))
        {
            // Centre the ring on the finger (whatever its pivot).
            Vector3 centerOffset = background.TransformPoint(background.rect.center) - background.position;
            background.position = world - centerOffset;
        }
        OnDrag(e);
    }

    public void OnDrag(PointerEventData e)
    {
        if (e.pointerId != pointerId || background == null) return;
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(background, e.position, e.pressEventCamera, out local)) return;
        Vector2 radius = background.rect.size * .5f;
        Vector2 center = background.rect.center;
        Vector2 input = new Vector2((local.x - center.x) / Mathf.Max(1, radius.x), (local.y - center.y) / Mathf.Max(1, radius.y));
        if (input.magnitude < deadZone) input = Vector2.zero;
        else if (input.magnitude > 1) input.Normalize();
        Value = input;
        if (knob) knob.anchoredPosition = Vector2.Scale(input, radius) * handleRange;
    }

    public void OnPointerUp(PointerEventData e)
    {
        if (e.pointerId == pointerId) ResetInput();
    }

    public void ResetInput()
    {
        pointerId = int.MinValue;
        Value = Vector2.zero;
        if (knob) knob.anchoredPosition = Vector2.zero;
        if (background && floating) background.anchoredPosition = initialBackgroundPosition;
    }

    private void OnDisable() { ResetInput(); }
}
