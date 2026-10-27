using UnityEngine;

/// <summary>
/// Climbable ladder. Put this on a trigger volume that covers the ladder.
/// Bottom/Top are the climber's feet positions at each end (on the walkable side).
/// Push the joystick toward the ladder to climb up, away from it to climb down.
/// </summary>
[RequireComponent(typeof(Collider))]
public class Ladder : MonoBehaviour
{
    [SerializeField] private Transform bottom;
    [SerializeField] private Transform top;
    [Tooltip("Horizontal direction the climber faces / pushes to climb up. Zero = from bottom toward top.")]
    [SerializeField] private Vector3 intoDirection;

    public Vector3 Bottom => bottom.position;
    public Vector3 Top => top.position;
    public float Length => Mathf.Max(0.01f, Vector3.Distance(Bottom, Top));
    public Vector3 Up => (Top - Bottom) / Length;

    public Vector3 IntoDirection
    {
        get
        {
            Vector3 d = intoDirection.sqrMagnitude > 0.001f ? intoDirection : Top - Bottom;
            d.y = 0f;
            return d.sqrMagnitude > 0.0001f ? d.normalized : Vector3.forward;
        }
    }

    /// <summary>0 at the bottom, 1 at the top (can go outside that range).</summary>
    public float GetT(Vector3 position) => Vector3.Dot(position - Bottom, Up) / Length;

    public Vector3 PointAt(float t) => Vector3.Lerp(Bottom, Top, Mathf.Clamp01(t));

    private void Reset()
    {
        GetComponent<Collider>().isTrigger = true;
    }

    private void OnTriggerEnter(Collider other)
    {
        CharacterMotor motor = other.GetComponentInParent<CharacterMotor>();
        if (motor != null) motor.SetLadder(this);
    }

    private void OnTriggerStay(Collider other)
    {
        CharacterMotor motor = other.GetComponentInParent<CharacterMotor>();
        if (motor != null) motor.SetLadder(this);
    }

    private void OnTriggerExit(Collider other)
    {
        CharacterMotor motor = other.GetComponentInParent<CharacterMotor>();
        if (motor != null) motor.ClearLadder(this);
    }

#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        if (bottom == null || top == null) return;
        Gizmos.color = Color.cyan;
        Gizmos.DrawLine(Bottom, Top);
        Gizmos.DrawWireSphere(Bottom, 0.3f);
        Gizmos.DrawWireSphere(Top, 0.3f);
    }
#endif
}
