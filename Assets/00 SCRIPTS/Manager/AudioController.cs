using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Transform poolParent;
    [SerializeField] private int startSize;

    private Queue<AudioSource> SFXPool;

    public static AudioController Ins { get; private set; }
    private void Awake()
    {
        CreateIns();
        BootstrapPool();
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
