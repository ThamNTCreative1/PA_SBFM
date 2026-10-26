using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler, IEndDragHandler
{
    [SerializeField] private RectTransform background;
    [SerializeField] private RectTransform joy;
    [SerializeField]
    [Range(0f, 1f)] private float deadZone = 0.15f;

    public Vector2 Direction { get; private set; }
    private bool isPressed;
    private int activePointerId;

    public void OnPointerDown(PointerEventData eventData)
    {
        if (isPressed) return;
        if (TutController.Instance != null) TutController.Instance.HideJoystickTut();
        isPressed = true;
        activePointerId = eventData.pointerId;
        OnDrag(eventData);

    }
    public void OnDrag(PointerEventData eventData)
    {
        if (!isPressed || eventData.pointerId != activePointerId) return;
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
        if (isPressed && eventData.pointerId == activePointerId) ResetJoystick();
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (isPressed && eventData.pointerId == activePointerId) ResetJoystick();
    }

    private void LateUpdate()
    {
        if (!isPressed) return;

        // Recover even if the UI module misses the pointer-up event.
#if UNITY_LUNA || UNITY_EDITOR || UNITY_STANDALONE
        if (Input.GetMouseButtonUp(0) || !Input.GetMouseButton(0)) ResetJoystick();
#else
        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            if (touch.fingerId != activePointerId) continue;
            if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
                ResetJoystick();
            return;
        }

        ResetJoystick();
#endif
    }

    private void OnDisable()
    {
        ResetJoystick();
    }

    private void OnApplicationFocus(bool hasFocus)
    {
        if (!hasFocus) ResetJoystick();
    }

    private void OnApplicationPause(bool isPaused)
    {
        if (isPaused) ResetJoystick();
    }

    private void ResetJoystick()
    {
        isPressed = false;
        activePointerId = -1;
        Direction = Vector2.zero;
        if (joy != null) joy.anchoredPosition = Vector2.zero;
    }
}
