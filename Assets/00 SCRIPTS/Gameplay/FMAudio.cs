using System;
using UnityEngine;

// Serialized like the source game's HAVIGAME Audio struct (clip / channel / volume) so prefab values carry over.
[Serializable]
public class FMAudio
{
    public AudioClip clip;
    public int channel;
    public float volume = 1;

    public bool IsEmpty { get { return clip == null; } }

    public void Play() { PlayableAudio.Play(clip, volume); }
    public void PlayAtPosition(Vector3 position) { PlayableAudio.Play(clip, volume); }
}
