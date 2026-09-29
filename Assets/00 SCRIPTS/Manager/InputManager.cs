using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class InputManager : MonoBehaviour
{
    public static InputManager Instance { get; private set; }

    [Header("Camera")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private LayerMask interactLayer;
    [SerializeField] private float touchSensitivity = 0.15f;
    [SerializeField] private float mouseSensitivity = 5f;
    [SerializeField] private float dragThreshold = 20f;

    public Vector2 LookDelta { get; private set; }

    public IInteractable CurrentInteractable { get; private set; }

    private int cameraFinger = -1;
    private Vector2 startPosition;
    private bool dragging;
    private bool mousePressed;
    private Vector2 previousMousePosition;
    private readonly List<RaycastResult> uiHits = new List<RaycastResult>();
    private PointerEventData pointerData;
    private EventSystem pointerEventSystem;

    private void Awake()
    {
        Instance = this;
    }

    private void Update()
    {
        LookDelta = Vector2.zero;

#if UNITY_LUNA || UNITY_EDITOR || UNITY_STANDALONE
        HandleMouse();
#else
        HandleTouch();
#endif
    }

    #region Mouse

    private void HandleMouse()
    {
#if !UNITY_LUNA
        if (Input.GetMouseButton(1))
        {
            if (!IsOverInputControl(Input.mousePosition))
            {
                LookDelta = new Vector2(
                    Input.GetAxisRaw("Mouse X"),
                    Input.GetAxisRaw("Mouse Y")) * mouseSensitivity;
            }
        }
#endif

        // Luna maps mobile touch to the primary mouse button.
        Vector2 position = Input.mousePosition;
        if (Input.GetMouseButtonDown(0))
        {
            mousePressed = false;
            dragging = false;
            CurrentInteractable = null;
            if (IsOverInputControl(position))
                return;

            mousePressed = true;
            startPosition = position;
            previousMousePosition = position;
        }

        if (!mousePressed) return;

        if (Input.GetMouseButton(0) || Input.GetMouseButtonUp(0))
        {
            if (!dragging && Vector2.Distance(startPosition, position) > dragThreshold)
            {
                dragging = true;
                CurrentInteractable = null;
            }

            // The threshold only distinguishes taps; camera movement starts immediately.
            LookDelta = (position - previousMousePosition) * touchSensitivity;

            previousMousePosition = position;
        }

        if (Input.GetMouseButtonUp(0))
        {
            bool shouldInteract = !dragging;
            ResetPointer();
            if (shouldInteract && !IsOverInputControl(position))
            {
                InteractAt(position);
            }
        }
        else if (!Input.GetMouseButton(0))
        {
            ResetPointer();
        }
    }

    private bool IsOverInputControl(Vector2 position)
    {
        EventSystem eventSystem = EventSystem.current;
        if (eventSystem == null) return false;

        if (pointerData == null || pointerEventSystem != eventSystem)
        {
            pointerEventSystem = eventSystem;
            pointerData = new PointerEventData(eventSystem);
        }

        pointerData.Reset();
        pointerData.position = position;
        uiHits.Clear();
        eventSystem.RaycastAll(pointerData, uiHits);
        foreach (RaycastResult hit in uiHits)
        {
            if (!(hit.module is GraphicRaycaster)) continue;
            GameObject hitObject = hit.gameObject;
            if (ExecuteEvents.GetEventHandler<IPointerDownHandler>(hitObject) != null ||
                ExecuteEvents.GetEventHandler<IPointerClickHandler>(hitObject) != null ||
                ExecuteEvents.GetEventHandler<IDragHandler>(hitObject) != null ||
                hitObject.GetComponentInParent<SelectPanel>() != null)
                return true;
        }

        return false;
    }

    private void InteractAt(Vector2 position)
    {
        RaycastInteractable(position);
        IInteractable interactable = CurrentInteractable;
        CurrentInteractable = null;
        if (interactable != null) interactable.Interact();
    }

    private void ResetPointer()
    {
        mousePressed = false;
        cameraFinger = -1;
        dragging = false;
        CurrentInteractable = null;
    }

    private void OnDisable()
    {
        ResetPointer();
        LookDelta = Vector2.zero;
    }

    private void OnApplicationFocus(bool hasFocus)
    {
        if (hasFocus) return;
        ResetPointer();
        LookDelta = Vector2.zero;
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

                    if (cameraFinger != -1 ||
                        IsOverInputControl(touch.position))
                        continue;

                    startPosition = touch.position;
                    dragging = false;
                    CurrentInteractable = null;

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

                    LookDelta = touch.deltaPosition * touchSensitivity;

                    break;

                case TouchPhase.Ended:

                    if (touch.fingerId != cameraFinger)
                        continue;

                    bool shouldInteract = !dragging &&
                        Vector2.Distance(startPosition, touch.position) <= dragThreshold;
                    ResetPointer();
                    if (shouldInteract && !IsOverInputControl(touch.position))
                        InteractAt(touch.position);

                    break;

                case TouchPhase.Canceled:

                    if (touch.fingerId == cameraFinger)
                    {
                        ResetPointer();
                    }

                    break;
            }
        }
    }

    #endregion

    private void RaycastInteractable(Vector2 screenPosition)
    {
        CurrentInteractable = null;

        Ray ray = worldCamera.ScreenPointToRay(screenPosition);

        if (Physics.Raycast(ray,
            out RaycastHit hit,
            100f,
            interactLayer))
        {
            if (hit.distance > 25f)
            {
                GameController.Ins.Far();
                return;
            }
            CurrentInteractable = hit.collider.GetComponent<IInteractable>();
        }
    }
}
