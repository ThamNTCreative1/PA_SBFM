using UnityEngine;
public class JumpHint : Hint
{
    public Vector3 JumpForce;
    public Rigidbody Rigidbody;
    public override void ShowHint()
    {
        Rigidbody.AddForce(JumpForce, ForceMode.Acceleration);
    }
}