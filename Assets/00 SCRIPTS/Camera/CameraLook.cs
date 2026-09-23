using UnityEngine;

public class CameraLook : MonoBehaviour
{
    [SerializeField] private InputManager input;
    [SerializeField] private Transform yawPivot;
    [SerializeField] private Transform pitchPivot;

    [SerializeField] private float minPitch = -30f;
    [SerializeField] private float maxPitch = 70f;

    [SerializeField] private float yaw;
    [SerializeField] private float pitch;

    [SerializeField] private float defaltYaw;
    [SerializeField] private float defaltPitch;

    private void Awake()
    {
        defaltYaw = yawPivot.rotation.eulerAngles.y;
        yaw = defaltYaw;
        defaltPitch = pitchPivot.rotation.eulerAngles.x;
        pitch = defaltPitch;
    }

    private void Update()
    {
        Vector2 look = input.LookDelta;

        if (look.sqrMagnitude < 0.0001f)
            return;

        yaw += look.x;

        pitch -= look.y;
        pitch = Mathf.Clamp(pitch, minPitch, maxPitch);

        yawPivot.rotation = Quaternion.Euler(0f, yaw, 0f);
        pitchPivot.localRotation = Quaternion.Euler(pitch, 0f, 0f);
    }
    public void CollectLook()
    {
        pitchPivot.position = new Vector3(yawPivot.position.x, yawPivot.position.y - 3.5f, yawPivot.position.z);
        pitch = defaltPitch;
        pitchPivot.localRotation = Quaternion.Euler(pitch, 0f, 0f);
    }

}