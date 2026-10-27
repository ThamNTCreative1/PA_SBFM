using UnityEngine;

/// <summary>
/// Loops a footstep clip while the character is running on the ground.
/// </summary>
[RequireComponent(typeof(AudioSource))]
public class FootstepAudio : MonoBehaviour
{
    [SerializeField] private CharacterMotor motor;
    [SerializeField] private AudioClip footstepClip;
    [SerializeField, Range(0f, 1f)] private float volume = 0.6f;
    [SerializeField, Min(0.1f)] private float pitchAtFullSpeed = 1.15f;

    private AudioSource source;

    private void Awake()
    {
        source = GetComponent<AudioSource>();
        source.clip = footstepClip;
        source.loop = true;
        source.playOnAwake = false;
        source.spatialBlend = 0f;
        source.volume = volume;
        if (motor == null) motor = GetComponent<CharacterMotor>();
    }

    private void Update()
    {
        bool running = motor != null && motor.enabled && motor.IsMoving && motor.IsGrounded && footstepClip != null;
        if (running)
        {
            float speed01 = motor.MaxMoveSpeed > 0f ? Mathf.Clamp01(motor.Speed / motor.MaxMoveSpeed) : 1f;
            source.pitch = Mathf.Lerp(0.9f, pitchAtFullSpeed, speed01);
            if (!source.isPlaying) source.Play();
        }
        else if (source.isPlaying)
        {
            source.Stop();
        }
    }

    private void OnDisable()
    {
        if (source != null) source.Stop();
    }
}
