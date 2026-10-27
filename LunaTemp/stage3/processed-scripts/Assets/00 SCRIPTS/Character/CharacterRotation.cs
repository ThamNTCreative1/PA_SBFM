using UnityEngine;

public class CharacterRotation : MonoBehaviour
{
    [SerializeField] private CharacterMotor motor;
    [SerializeField] private float rotationSpeed = 12f;

    private void FixedUpdate()
    {
        Rotate();
    }

    private void Rotate()
    {
        Vector3 facing;
        if (motor.IsClimbing) facing = motor.ClimbFacing;
        else if (motor.IsMoving) facing = motor.MoveDirection;
        else return;
        facing.y = 0f;
        if (facing.sqrMagnitude < 0.0001f) return;

        Quaternion targetRotation =
            Quaternion.LookRotation(facing);

        // Rotate through physics so Transform writes do not break interpolation.
        motor.Body.MoveRotation(Quaternion.Slerp(
            motor.Body.rotation,
            targetRotation,
            1f - Mathf.Exp(-rotationSpeed * Time.fixedDeltaTime)));
    }
}
