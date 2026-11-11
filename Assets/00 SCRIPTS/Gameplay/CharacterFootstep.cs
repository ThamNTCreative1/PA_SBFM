using UnityEngine;

// Footstep sound while the character walks.
// - loopSource set (MCH walking clip): the walking loop plays while walking on the ground and pauses otherwise;
//   its pitch follows the walk speed.
// - otherwise: one-shot audioSource clip every step (distance based, as in the source game).
public class CharacterFootstep : MonoBehaviour
{
    [SerializeField] private FMCharacter ecmCharacter;
    [SerializeField] private FMAudio audioSource;
    [SerializeField] private float speed;

    [Header("Walking loop")]
    [SerializeField] private AudioSource loopSource;
    [SerializeField, Range(0, 1)] private float loopVolume = 0.8f;
    [Tooltip("Pitch at full walk speed / at the slowest walk.")]
    [SerializeField] private float maxPitch = 1.1f;
    [SerializeField] private float minPitch = 0.8f;

    private float remainingToNextStep = 1;

    private void Start()
    {
        if (ecmCharacter == null) { enabled = false; return; }
        if (loopSource)
        {
            loopSource.loop = true;
            loopSource.playOnAwake = false;
            loopSource.volume = loopVolume;
            return;
        }
        if (audioSource == null || audioSource.IsEmpty) enabled = false;
    }

    private void Update()
    {
        bool walking = ecmCharacter.IsWalking();
        if (loopSource)
        {
            if (walking)
            {
                float k = ecmCharacter.maxWalkSpeed > 0 ? Mathf.Clamp01(ecmCharacter.speed / ecmCharacter.maxWalkSpeed) : 1;
                loopSource.pitch = Mathf.Lerp(minPitch, maxPitch, k);
                if (!loopSource.isPlaying) loopSource.Play();
            }
            else if (loopSource.isPlaying) loopSource.Pause();
            return;
        }

        if (walking)
        {
            remainingToNextStep -= ecmCharacter.speed * Time.deltaTime * speed;
            if (remainingToNextStep <= 0)
            {
                remainingToNextStep = 1;
                audioSource.PlayAtPosition(transform.position);
            }
        }
        else remainingToNextStep = 1;
    }

    private void OnDisable()
    {
        if (loopSource && loopSource.isPlaying) loopSource.Pause();
    }
}
