using UnityEngine;

public class GroundChecker : MonoBehaviour
{
    [SerializeField] private Transform groundPoint;
    [SerializeField] private Vector3 half;
    [SerializeField] private LayerMask groundLayer;

    public bool IsGrounded { get; private set; }

    private void Update()
    {
        CheckGround();
    }

    private void CheckGround()
    {
        IsGrounded = Physics.CheckBox(
            groundPoint.position,
            half,
            Quaternion.identity,
            groundLayer,
            QueryTriggerInteraction.Ignore);
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        if (groundPoint == null)
            return;

        Gizmos.color = IsGrounded ? Color.green : Color.red;

        Gizmos.DrawWireCube(
            groundPoint.position,
            half * 2);
    }
#endif
}