using UnityEngine;

public class CharacterMotor : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private CharacterInput characterInput;
    [SerializeField] private Transform cameraYawTransform;

    [Header("Movement")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpHeight = 1.5f;

    [Header("Gravity")]
    [SerializeField] private GroundChecker groundChecker;
    [SerializeField] private float gravity = -20f;

    public float VerticalVelocity => verticalVelocity;

    public float MaxMoveSpeed => moveSpeed;
    public float Speed => (MoveDirection * moveSpeed).magnitude;

    public bool IsGrounded => groundChecker.IsGrounded;

    private float verticalVelocity;
    [SerializeField] private Rigidbody controller;

    public Vector3 MoveDirection { get; private set; }
    public bool IsMoving => MoveDirection.sqrMagnitude > 0.01f;

    [SerializeField] private bool autoRun;
    private bool jumpRequested;

    public void AutoRun(bool isAuto, Vector3 direction)
    {
        autoRun = isAuto;
        MoveDirection = Vector3.ClampMagnitude(direction, 1f);
    }
    private void Update()
    {
        if (characterInput.Jump)
            jumpRequested = true;
        ApplyMotor();
    }
    private void FixedUpdate()
    {
        ApplyGravity();
        ApplyJump();
        Move();
    }
    private void ApplyGravity()
    {
        if (groundChecker.IsGrounded && verticalVelocity < 0f)
        {
            verticalVelocity = -2f;
        }

        verticalVelocity += gravity * Time.fixedDeltaTime;
    }
    private void Move()
    {
        Vector3 motion = MoveDirection * moveSpeed;
        motion.y = verticalVelocity;

        controller.linearVelocity = motion;
    }

    private void ApplyMotor()
    {
        if (autoRun) return;
        Vector2 input = characterInput.Move;

        Vector3 forward = cameraYawTransform.forward;
        Vector3 right = cameraYawTransform.right;

        forward.y = 0f;
        right.y = 0f;

        forward.Normalize();
        right.Normalize();

        MoveDirection = forward * input.y + right * input.x;
        MoveDirection = Vector3.ClampMagnitude(MoveDirection, 1f);
    }
    private void ApplyJump()
    {
        if (!jumpRequested) return;
        jumpRequested = false;

        if (!groundChecker.IsGrounded) return;

        verticalVelocity = Mathf.Sqrt(jumpHeight * -2f * gravity);
    }
}