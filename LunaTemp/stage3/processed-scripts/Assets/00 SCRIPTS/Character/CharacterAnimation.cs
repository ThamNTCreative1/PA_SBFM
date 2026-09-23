using UnityEngine;

public class CharacterAnimation : MonoBehaviour
{
    [SerializeField] private Animator animator;
    [SerializeField] private CharacterMotor motor;
    private void Update()
    {
        UpdateAnimation();
    }
    private void UpdateAnimation()
    {
        animator.SetFloat("Speed", motor.Speed / motor.MaxMoveSpeed);
        animator.SetBool("Jump", !motor.IsGrounded);
    }
    public void SetAvatar(Animator avatar)
    {
        animator.gameObject.SetActive(false);
        animator = avatar;
        animator.gameObject.SetActive(true);
    }
}
