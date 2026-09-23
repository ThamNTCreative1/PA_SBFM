using UnityEngine;

public class GroundChecker : MonoBehaviour
{
    [SerializeField] private Transform groundPoint;
    [SerializeField] private float checkRadius = 0.2f;
    [SerializeField] private LayerMask groundLayer;

    public bool IsGrounded { get; private set; }

    private void Update()
    {
        CheckGround();
    }

    private void CheckGround()
    {
        IsGrounded = Physics.CheckSphere(
            groundPoint.position,
            checkRadius,
            groundLayer,
            QueryTriggerInteraction.Ignore);
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        if (groundPoint == null)
            return;

        Gizmos.color = IsGrounded ? Color.green : Color.red;

        Gizmos.DrawWireSphere(
            groundPoint.position,
            checkRadius);
    }
#endif
}