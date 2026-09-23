using System.Collections.Generic;
using UnityEngine;

public class Gift : MonoBehaviour
{
    [SerializeField] private List<Hint> hints;
    [SerializeField] private AudioClip collectSound;
    [SerializeField] private ParticleSystem collectEffect;
    [SerializeField] private CollectAction action;
    [SerializeField] public Animator avatar;
    public bool collectDone;
    public void ShowHints()
    {
        if (hints == null) return;
        for (int i = 0; i < hints.Count; i++)
        {
            hints[i].ShowHint();
        }
    }
    public void Collect(CharacterCollect character)
    {
        character.SetTarget(this, avatar);
    }
    private void OnTriggerEnter(Collider collision)
    {
        if (collectDone || !collision.gameObject.CompareTag("Player")) return;
        collectDone = true;
        AudioController.Ins.PlaySFX(collectSound);
        action.Collect();
        GameController.Ins.CollectGift(this);
    }
}