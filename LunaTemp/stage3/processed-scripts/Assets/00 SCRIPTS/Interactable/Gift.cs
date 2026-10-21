using UnityEngine;
using UnityEngine.Events;

public class Gift : MonoBehaviour
{
    [SerializeField] private bool collectDone;
    [SerializeField] private AudioClip collectSound;
    [SerializeField] private ParticleSystem effect;
    public GameObject hint;
    [SerializeField] private GameObject complete;
    public UnityEvent onCollect;

    private void OnTriggerEnter(Collider collision)
    {
        if (collectDone) return;
        if (!collision.gameObject.CompareTag("Player")) return;
        collectDone = true;
        onCollect?.Invoke();
        AudioController.Ins.PlaySFX(collectSound);
        effect.Play();
        hint.SetActive(false);
        complete.SetActive(true);
        GameController.Ins.RemoveGift(this);
    }
}