using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
    [SerializeField] private RectTransform background;
    [SerializeField] private RectTransform joy;
    [SerializeField]
    [Range(0f, 1f)] private float deadZone = 0.15f;

    public Vector2 Direction { get; private set; }
    public void OnPointerDown(PointerEventData eventData)
    {
        OnDrag(eventData);

    }
    public void OnDrag(PointerEventData eventData)
    {
        Vector2 position;

        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            background,
            eventData.position,
            eventData.pressEventCamera,
            out position);

        float radius = background.sizeDelta.x * 0.5f;

        position /= radius;

        Direction = Vector2.ClampMagnitude(position, 1f);

        float magnitude = Direction.magnitude;

        if (magnitude < deadZone)
        {
            Direction = Vector2.zero;
        }
        else
        {
            Direction = Direction.normalized *
                ((magnitude - deadZone) / (1f - deadZone));
        }

        joy.anchoredPosition = Direction * radius;
    }
    public void OnPointerUp(PointerEventData eventData)
    {
        Direction = Vector2.zero;
        joy.anchoredPosition = Vector2.zero;
    }
}