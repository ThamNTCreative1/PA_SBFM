using UnityEngine;

public class CharacterRotation : MonoBehaviour
{
    [SerializeField] private CharacterMotor motor;
    [SerializeField] private float rotationSpeed = 12f;

    private void Update()
    {
        Rotate();
    }

    private void Rotate()
    {
        if (!motor.IsMoving)
            return;

        Quaternion targetRotation =
            Quaternion.LookRotation(motor.MoveDirection);

        transform.rotation = Quaternion.Slerp(
            transform.rotation,
            targetRotation,
            rotationSpeed * Time.deltaTime);
    }
}