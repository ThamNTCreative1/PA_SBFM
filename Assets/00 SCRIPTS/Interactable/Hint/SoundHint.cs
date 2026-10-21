using UnityEngine;

public class SoundHint : Hint
{
    public AudioClip Sound;
    public AudioSource Source;

    public override void ShowHint()
    {
        if (Source) Source.PlayOneShot(Sound);
    }
}