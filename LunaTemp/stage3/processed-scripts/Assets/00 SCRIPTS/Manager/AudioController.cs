using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Transform poolParent;
    [SerializeField] private int startSize;

    private Queue<AudioSource> SFXPool;
    private Coroutine musicRoutine;
    private float musicVolume;

    public static AudioController Ins { get; private set; }
    private void Awake()
    {
        CreateIns();
        BootstrapPool();

        if (musicSource != null)
            musicVolume = musicSource.volume;
    }

    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }

    private void BootstrapPool()
    {
        SFXPool = new Queue<AudioSource>();
        for (int i = 0; i < startSize; i++)
        {
            SFXPool.Enqueue(CreateNewSource());
        }
    }
    public void PlaySFX(AudioClip clip)
    {
        AudioSource s = GetFreeSource();
        s.PlayOneShot(clip);
        StartCoroutine(ReturnToPool(s));
    }

    public void ChangeBackgroundMusic(AudioClip newMusic, float fadeDuration)
    {
        if (musicSource == null)
        {
            Debug.LogWarning("AudioController: Music Source is not assigned.", this);
            return;
        }

        if (musicRoutine != null)
            StopCoroutine(musicRoutine);

        musicRoutine = StartCoroutine(ChangeBackgroundMusicRoutine(
            newMusic,
            Mathf.Max(0f, fadeDuration)));
    }

    private IEnumerator ChangeBackgroundMusicRoutine(AudioClip newMusic, float fadeDuration)
    {
        float startVolume = musicSource.volume;

        if (musicSource.isPlaying && fadeDuration > 0f)
        {
            float elapsed = 0f;
            while (elapsed < fadeDuration)
            {
                elapsed += Time.unscaledDeltaTime;
                musicSource.volume = Mathf.Lerp(
                    startVolume,
                    0f,
                    elapsed / fadeDuration);
                yield return null;
            }
        }

        musicSource.Stop();
        musicSource.clip = newMusic;
        musicSource.loop = true;

        if (newMusic == null)
        {
            musicSource.volume = musicVolume;
            musicRoutine = null;
            yield break;
        }

        musicSource.volume = fadeDuration > 0f ? 0f : musicVolume;
        musicSource.Play();

        if (fadeDuration > 0f)
        {
            float elapsed = 0f;
            while (elapsed < fadeDuration)
            {
                elapsed += Time.unscaledDeltaTime;
                musicSource.volume = Mathf.Lerp(
                    0f,
                    musicVolume,
                    elapsed / fadeDuration);
                yield return null;
            }
        }

        musicSource.volume = musicVolume;
        musicRoutine = null;
    }
    private AudioSource CreateNewSource()
    {
        AudioSource s = new GameObject("SFX").AddComponent<AudioSource>();
        s.transform.SetParent(poolParent);
        return s;
    }
    private AudioSource GetFreeSource()
    {
        return SFXPool.Count > 0 ? SFXPool.Dequeue() : CreateNewSource();
    }
    private IEnumerator ReturnToPool(AudioSource s)
    {
        yield return new WaitUntil(() => !s.isPlaying);
        SFXPool.Enqueue(s);
    }
}
