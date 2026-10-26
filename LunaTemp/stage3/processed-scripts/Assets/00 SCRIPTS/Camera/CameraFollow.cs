using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target;
    [SerializeField] private Transform pitchPivot;
    [SerializeField] private float smoothTime = 0.1f;
    [SerializeField] private float minimumPitch = -25f;
    [SerializeField] private float maximumPitch = 60f;

    private Vector3 velocity;
    private float pitch;

    private void Awake()
    {
        if (pitchPivot == null)
            pitchPivot = transform.Find("PivotYaw/PivotPitch");
        if (pitchPivot != null)
            pitch = NormalizeAngle(pitchPivot.localEulerAngles.x);
    }

    private void LateUpdate()
    {
        ApplyLookInput();
        if (target == null) return;

        transform.position = Vector3.SmoothDamp(
            transform.position,
            target.position,
            ref velocity,
            smoothTime);
    }

    private void ApplyLookInput()
    {
        InputManager input = InputManager.Instance;
        if (input == null) return;

        Vector2 look = input.LookDelta;
        if (look.sqrMagnitude < 0.0001f) return;

        transform.Rotate(Vector3.up, look.x, Space.World);
        if (pitchPivot == null) return;

        pitch = Mathf.Clamp(pitch - look.y, minimumPitch, maximumPitch);
        pitchPivot.localRotation = Quaternion.Euler(pitch, 0f, 0f);
    }

    private static float NormalizeAngle(float angle)
    {
        return angle > 180f ? angle - 360f : angle;
    }
}
