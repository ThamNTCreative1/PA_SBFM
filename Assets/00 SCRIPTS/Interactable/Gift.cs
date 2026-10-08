using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Gift : MonoBehaviour
{
    [SerializeField] private List<Hint> hints;
    [SerializeField] private AudioClip collectSound;
    [SerializeField] private ParticleSystem collectEffect;
    [SerializeField] private Transform arrow;

    public bool collectDone;

    public Transform Arrow => arrow;

    private void Start()
    {
        arrow.DOLocalMoveY(4f, 0.5f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
    }

    public void ShowHints()
    {
        if (hints == null) return;
        for (int i = 0; i < hints.Count; i++)
        {
            hints[i].ShowHint();
        }
    }


    private void OnTriggerEnter(Collider collision)
    {
        if (collectDone || !collision.gameObject.CompareTag("Player")) return;
        if (GameController.Ins == null || !GameController.Ins.IsPlaying ||
            GameController.Ins.FirstGift != this) return;
        GameController.Ins.CollectGift(this);
        collectDone = true;
        collectEffect.Play();
        AudioController.Ins.PlaySFX(collectSound);
    }

    public void RemoveGift()
    {
        transform.GetChild(0).gameObject.SetActive(false);
        arrow.gameObject.SetActive(false);
    }
}
