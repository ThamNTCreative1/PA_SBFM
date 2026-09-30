using UnityEngine;

public class CharacterMotor : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private CharacterInput characterInput;
    [SerializeField] private Transform cameraYawTransform;
    [SerializeField] private Transform _arrow;

    [Header("Movement")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpHeight = 1.5f;

    [Header("Gravity")]
    [SerializeField] private GroundChecker groundChecker;
    [SerializeField] private float gravity = -20f;

    [Header("Stairs")]
    [SerializeField] private bool enableStepClimb = true;
    [SerializeField] private LayerMask stepLayers = ~0;
    [SerializeField, Min(0.01f)] private float maxStepHeight = 0.45f;
    [SerializeField, Min(0.01f)] private float stepCheckDistance = 0.35f;
    [SerializeField, Min(0.01f)] private float stepUpSpeed = 4f;
    [SerializeField, Min(0.01f)] private float stepUpAcceleration = 80f;
    [SerializeField, Range(0f, 1f)] private float minimumStepFacing = 0.25f;

    public float VerticalVelocity => verticalVelocity;
    public Rigidbody Body => controller;

    public float MaxMoveSpeed => moveSpeed;
    public float Speed => (MoveDirection * moveSpeed).magnitude;

    public bool IsGrounded => groundChecker.IsGrounded || IsOnStepSurface();

    private float verticalVelocity;
    [SerializeField] private Rigidbody controller;
    private CapsuleCollider capsuleCollider;

    public Vector3 MoveDirection { get; private set; }
    public bool IsMoving => MoveDirection.sqrMagnitude > 0.01f;

    [SerializeField] private bool autoRun;
    private bool jumpRequested;

    private void Awake()
    {
        capsuleCollider = controller.GetComponent<CapsuleCollider>();
        controller.useGravity = false;
        // Smooth the rendered pose between physics ticks.
        controller.interpolation = RigidbodyInterpolation.Interpolate;
    }

    public void AutoRun(bool isAuto, [Bridge.Ref] Vector3 direction)
    {
        autoRun = isAuto;
        MoveDirection = Vector3.ClampMagnitude(direction, 1f);
    }

    public void Teleport([Bridge.Ref] Vector3 position, [Bridge.Ref] Quaternion rotation)
    {
        verticalVelocity = 0f;
        MoveDirection = Vector3.zero;

        controller.linearVelocity = Vector3.zero;
        controller.angularVelocity = Vector3.zero;
        controller.position = position;
        controller.rotation = rotation;

        transform.SetPositionAndRotation(position, rotation);
    }
    private void Update()
    {
        if (characterInput.Jump)
            jumpRequested = true;
        ApplyMotor();
        UpdateArrow();
    }

    private void UpdateArrow()
    {
        if (GameController.Ins == null) return;

        Gift targetGift = GameController.Ins.FirstGift;
        if (targetGift == null) return;

        RotateTowardsLocalY(_arrow, targetGift.transform.position);
        RotateTowardsLocalY(targetGift.Arrow, transform.position);
    }

    private void RotateTowardsLocalY(Transform target, Vector3 worldPosition)
    {
        if (target == null) return;

        Vector3 targetLocalPos = target.parent != null
            ? target.parent.InverseTransformPoint(worldPosition)
            : worldPosition;

        Vector3 direction = targetLocalPos - target.localPosition;
        direction.y = 0f;
        if (direction.sqrMagnitude < 0.0001f) return;

        float yAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg;

        Vector3 currentEuler = target.localEulerAngles;
        target.localRotation = Quaternion.Euler(currentEuler.x, yAngle, currentEuler.z);
    }
    private void FixedUpdate()
    {
        ApplyGravity();
        ApplyJump();
        Move();
    }
    private void ApplyGravity()
    {
        if (IsGrounded && verticalVelocity < 0f)
        {
            verticalVelocity = -2f;
        }

        verticalVelocity += gravity * Time.fixedDeltaTime;
    }
    private void Move()
    {
        Vector3 motion = MoveDirection * moveSpeed;

        if (CanStepUp(motion, out float stepHeight))
        {
            float requiredSpeed = stepHeight / Time.fixedDeltaTime;
            float targetStepSpeed = Mathf.Min(requiredSpeed, stepUpSpeed);
            verticalVelocity = Mathf.MoveTowards(
                verticalVelocity,
                targetStepSpeed,
                stepUpAcceleration * Time.fixedDeltaTime);
        }

        motion.y = verticalVelocity;

        controller.linearVelocity = motion;
    }

    private bool CanStepUp([Bridge.Ref] Vector3 motion, out float stepHeight)
    {
        stepHeight = 0f;

        if (!enableStepClimb || capsuleCollider == null || motion.sqrMagnitude < 0.01f)
            return false;

        Vector3 direction = new Vector3(motion.x, 0f, motion.z).normalized;
        Bounds bounds = capsuleCollider.bounds;

        if (!IsSupportedForStep(bounds))
            return false;

        float skin = 0.05f;
        Vector3 lowerOrigin = new Vector3(bounds.center.x, bounds.min.y + skin, bounds.center.z);
        float distance = GetCapsuleRadius() + stepCheckDistance;

        if (!Physics.Raycast(lowerOrigin, direction, out RaycastHit lowerHit, distance,
                stepLayers, QueryTriggerInteraction.Ignore))
            return false;

        if (Vector3.Dot(-lowerHit.normal, direction) < minimumStepFacing)
            return false;

        Vector3 upperOrigin = lowerOrigin + Vector3.up * maxStepHeight;
        if (Physics.Raycast(upperOrigin, direction, distance, stepLayers, QueryTriggerInteraction.Ignore))
            return false;

        Vector3 landingOrigin = upperOrigin + direction * distance;
        float landingCheckDistance = maxStepHeight + skin * 2f;
        if (!Physics.Raycast(landingOrigin, Vector3.down, out RaycastHit landingHit,
                landingCheckDistance, stepLayers, QueryTriggerInteraction.Ignore))
            return false;

        stepHeight = landingHit.point.y - bounds.min.y;
        return stepHeight > skin && stepHeight <= maxStepHeight + skin;
    }

    private bool IsSupportedForStep([Bridge.Ref] Bounds bounds)
    {
        if (IsGrounded)
            return true;

        return false;
    }

    private bool IsOnStepSurface()
    {
        if (!enableStepClimb || capsuleCollider == null)
            return false;

        float skin = 0.05f;
        Bounds bounds = capsuleCollider.bounds;
        Vector3 origin = new Vector3(
            bounds.center.x,
            bounds.min.y + maxStepHeight,
            bounds.center.z);

        return Physics.Raycast(
            origin,
            Vector3.down,
            maxStepHeight + skin,
            stepLayers,
            QueryTriggerInteraction.Ignore);
    }

    private float GetCapsuleRadius()
    {
        Vector3 scale = capsuleCollider.transform.lossyScale;
        float horizontalScale = Mathf.Max(Mathf.Abs(scale.x), Mathf.Abs(scale.z));
        return capsuleCollider.radius * horizontalScale;
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

        if (!IsGrounded) return;

        verticalVelocity = Mathf.Sqrt(jumpHeight * -2f * gravity);
    }
}
