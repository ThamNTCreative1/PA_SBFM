using UnityEngine;
using UnityEngine.EventSystems;

public class InputManager : MonoBehaviour
{
    public static InputManager Instance { get; private set; }

    [Header("Camera")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private float touchSensitivity = 0.15f;
    [SerializeField] private float mouseSensitivity = 5f;
    [SerializeField] private float dragThreshold = 20f;

    public Vector2 LookDelta { get; private set; }

    private int cameraFinger = -1;
    private Vector2 startPosition;
    private bool dragging;

    private void Awake()
    {
        Instance = this;
    }

    private void Update()
    {
        LookDelta = Vector2.zero;

#if UNITY_EDITOR || UNITY_STANDALONE
        HandleMouse();
#else
        HandleTouch();
#endif
    }

    #region Mouse

    private void HandleMouse()
    {
        if (EventSystem.current.IsPointerOverGameObject()) return;
        if (Input.GetMouseButton(1))
        {
            LookDelta = new Vector2(
                Input.GetAxisRaw("Mouse X"),
                Input.GetAxisRaw("Mouse Y")) * mouseSensitivity;
        }
    }

    #endregion

    #region Touch

    private void HandleTouch()
    {
        foreach (Touch touch in Input.touches)
        {
            switch (touch.phase)
            {
                case TouchPhase.Began:

                    if (EventSystem.current.IsPointerOverGameObject(touch.fingerId))
                        continue;

                    startPosition = touch.position;
                    dragging = false;

                    cameraFinger = touch.fingerId;

                    break;

                case TouchPhase.Moved:

                    if (touch.fingerId != cameraFinger)
                        continue;

                    if (!dragging)
                    {
                        float distance =
                            Vector2.Distance(startPosition, touch.position);

                        if (distance > dragThreshold)
                        {
                            dragging = true;
                        }
                    }

                    if (dragging)
                    {
                        LookDelta =
                            touch.deltaPosition * touchSensitivity;
                    }

                    break;

                case TouchPhase.Ended:

                    if (touch.fingerId != cameraFinger)
                        continue;

                    cameraFinger = -1;
                    dragging = false;

                    break;

                case TouchPhase.Canceled:

                    if (touch.fingerId == cameraFinger)
                    {
                        cameraFinger = -1;
                        dragging = false;
                    }

                    break;
            }
        }
    }
    #endregion
}