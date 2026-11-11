using UnityEngine;

// One AudioSource in the scene for one-shot SFX (replaces HAVIGAME GameAudio).
public class PlayableAudio : MonoBehaviour
{
    public static PlayableAudio Instance { get; private set; }

    [SerializeField] private AudioSource source;
    [SerializeField] private AudioClip buttonClick;

    private void Awake()
    {
        Instance = this;
        if (source == null) source = GetComponent<AudioSource>();
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    public static void Play(AudioClip clip, float volume = 1)
    {
        if (Instance == null || Instance.source == null || clip == null) return;
        Instance.source.PlayOneShot(clip, volume <= 0 ? 1 : volume);
    }

    public static void PlayButtonClick()
    {
        if (Instance != null) Play(Instance.buttonClick);
    }
}
