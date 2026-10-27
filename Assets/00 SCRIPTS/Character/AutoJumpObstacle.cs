using UnityEngine;

[RequireComponent(typeof(CharacterMotor))]
[RequireComponent(typeof(CapsuleCollider))]
public class AutoJumpObstacle : MonoBehaviour
{
    private const string StairTag = "Stair";

    [Header("References")]
    [SerializeField] private CharacterMotor motor;
    [SerializeField] private CapsuleCollider capsuleCollider;

    [Header("Obstacle Detection")]
    [SerializeField, Min(0.01f)] private float checkDistance = 0.65f;
    [SerializeField, Min(0f)] private float lowerRayHeight = 0.2f;
    [SerializeField, Min(0.01f)] private float maxObstacleHeight = 0.8f;
    [SerializeField, Min(0.01f)] private float autoJumpHeight = 1.5f;
    [SerializeField, Min(0f)] private float jumpCooldown = 0.25f;
    [SerializeField, Min(0f)] private float jumpBufferDuration = 0.5f;

    private float nextJumpTime;
    private float jumpBufferedUntil = -1f;

    private void Awake()
    {
        if (motor == null)
            motor = GetComponent<CharacterMotor>();

        if (capsuleCollider == null)
            capsuleCollider = GetComponent<CapsuleCollider>();
    }

    private void Reset()
    {
        motor = GetComponent<CharacterMotor>();
        capsuleCollider = GetComponent<CapsuleCollider>();
    }

    private void Update()
    {
        TryAutoJump();
    }

    private void TryAutoJump()
    {
        if (motor == null || !motor.IsMoving)
            return;

        if (Time.time <= jumpBufferedUntil && TryRequestJump())
            return;

        if (Time.time < nextJumpTime)
            return;

        Vector3 direction = motor.MoveDirection;
        direction.y = 0f;

        if (direction.sqrMagnitude < 0.0001f)
            return;

        direction.Normalize();

        Vector3 lowerOrigin = transform.position + Vector3.up * lowerRayHeight;
        Vector3 upperOrigin = transform.position + Vector3.up * maxObstacleHeight;
        float detectionDistance = GetColliderRadius() + checkDistance;

        bool hasLowObstacle = Physics.Raycast(
            lowerOrigin,
            direction,
            out RaycastHit lowerHit,
            detectionDistance,
            Physics.DefaultRaycastLayers,
            QueryTriggerInteraction.Ignore);

        if (!hasLowObstacle || !lowerHit.collider.CompareTag(StairTag))
            return;

        bool blockedAbove = Physics.Raycast(
            upperOrigin,
            direction,
            detectionDistance,
            Physics.DefaultRaycastLayers,
            QueryTriggerInteraction.Ignore);

        if (blockedAbove)
            return;

        jumpBufferedUntil = Time.time + jumpBufferDuration;
        TryRequestJump();
    }

    private void OnCollisionStay(Collision collision)
    {
        if (motor == null || !motor.IsMoving)
            return;

        if (!collision.gameObject.CompareTag(StairTag))
            return;

        Vector3 moveDirection = motor.MoveDirection;
        moveDirection.y = 0f;
        if (moveDirection.sqrMagnitude < 0.0001f)
            return;

        moveDirection.Normalize();
        float feetHeight = capsuleCollider != null
            ? capsuleCollider.bounds.min.y
            : transform.position.y;

        for (int i = 0; i < collision.contactCount; i++)
        {
            ContactPoint contact = collision.GetContact(i);

            // Ignore the horizontal surface under the player's feet.
            if (Mathf.Abs(contact.normal.y) > 0.5f)
                continue;

            // The player must be moving into the contacted face.
            if (Vector3.Dot(moveDirection, -contact.normal) < 0.2f)
                continue;

            float contactHeight = contact.point.y - feetHeight;
            if (contactHeight < -0.05f || contactHeight > maxObstacleHeight)
                continue;

            jumpBufferedUntil = Time.time + jumpBufferDuration;
            TryRequestJump();
            return;
        }
    }

    private bool TryRequestJump()
    {
        if (Time.time < nextJumpTime || !motor.RequestJump(autoJumpHeight))
            return false;

        nextJumpTime = Time.time + jumpCooldown;
        jumpBufferedUntil = -1f;
        return true;
    }

    private float GetColliderRadius()
    {
        if (capsuleCollider == null)
            return 0f;

        Vector3 scale = capsuleCollider.transform.lossyScale;
        float horizontalScale = Mathf.Max(Mathf.Abs(scale.x), Mathf.Abs(scale.z));
        return capsuleCollider.radius * horizontalScale;
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        Vector3 direction = motor != null && motor.IsMoving
            ? motor.MoveDirection.normalized
            : transform.forward;
        direction.y = 0f;

        Vector3 lowerOrigin = transform.position + Vector3.up * lowerRayHeight;
        Vector3 upperOrigin = transform.position + Vector3.up * maxObstacleHeight;
        float detectionDistance = GetColliderRadius() + checkDistance;

        Gizmos.color = Color.yellow;
        Gizmos.DrawLine(lowerOrigin, lowerOrigin + direction * detectionDistance);

        Gizmos.color = Color.cyan;
        Gizmos.DrawLine(upperOrigin, upperOrigin + direction * detectionDistance);
    }
#endif
}
