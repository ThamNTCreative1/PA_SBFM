using UnityEngine;

public class CharacterInput : MonoBehaviour
{
    [SerializeField] private Joystick joystick;
    [SerializeField] private JumpButton jumpButton;

    public Vector2 Move { get; private set; }
    public bool Jump { get; private set; }

    private void Update()
    {
        CheckMoveInput();
        CheckJumpInput();
    }
    private void CheckMoveInput()
    {
        Vector2 keyboard = new
        Vector2(Input.GetAxisRaw("Horizontal"),
                Input.GetAxisRaw("Vertical"));

        Move = keyboard.sqrMagnitude > 0
            ? keyboard
            : joystick.Direction;
    }
    private void CheckJumpInput()
    {
        Jump = Input.GetKeyDown(KeyCode.Space) || jumpButton.Jump;
    }
}