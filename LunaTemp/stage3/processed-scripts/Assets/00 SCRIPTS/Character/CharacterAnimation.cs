using UnityEngine;

public class CharacterAnimation : MonoBehaviour
{
    [SerializeField] private Animator animator;
    [SerializeField] private CharacterMotor motor;

    [Header("Smoothing")]
    [SerializeField, Min(0.01f)] private float speedChangeRate = 8f;
    [SerializeField, Min(0f)] private float groundedGraceTime = 0.1f;

    private float displayedSpeed;
    private float groundedTimer;

    private void Awake()
    {
        ConfigureAnimator();
        groundedTimer = groundedGraceTime;
    }

    private void ConfigureAnimator()
    {
        // The motor owns movement; animate the visual pose every rendered frame.
        animator.applyRootMotion = false;
        animator.updateMode = AnimatorUpdateMode.Normal;
    }

    private void Update()
    {
        UpdateAnimation();
    }

    private void UpdateAnimation()
    {
        float targetSpeed = motor.MaxMoveSpeed > 0f
            ? Mathf.Clamp01(motor.Speed / motor.MaxMoveSpeed)
            : 0f;

        displayedSpeed = Mathf.Lerp(
            displayedSpeed,
            targetSpeed,
            1f - Mathf.Exp(-speedChangeRate * Time.deltaTime));

        if (Mathf.Abs(displayedSpeed - targetSpeed) < 0.001f)
            displayedSpeed = targetSpeed;

        if (motor.IsGrounded)
            groundedTimer = groundedGraceTime;
        else
            groundedTimer = Mathf.Max(0f, groundedTimer - Time.deltaTime);

        animator.SetFloat("Speed", displayedSpeed);
        animator.SetBool("Jump", groundedTimer <= 0f);
    }

    public void SetAvatar(Animator avatar)
    {
        animator.gameObject.SetActive(false);
        animator = avatar;
        ConfigureAnimator();
        animator.gameObject.SetActive(true);

        animator.SetFloat("Speed", displayedSpeed);
        animator.SetBool("Jump", groundedTimer <= 0f);
    }
}
