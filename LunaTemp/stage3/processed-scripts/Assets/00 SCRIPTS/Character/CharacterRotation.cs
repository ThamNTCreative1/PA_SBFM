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
        if (!motor.IsMoving)
            return;

        Quaternion targetRotation =
            Quaternion.LookRotation(motor.MoveDirection);

        // Rotate through physics so Transform writes do not break interpolation.
        motor.Body.MoveRotation(Quaternion.Slerp(
            motor.Body.rotation,
            targetRotation,
            1f - Mathf.Exp(-rotationSpeed * Time.fixedDeltaTime)));
    }
}
