using UnityEngine;
using UnityEngine.Events;

public class Gift : MonoBehaviour
{
    private const string HorrorTag = "Horror";

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

        if (CompareTag(HorrorTag))
        {
            if (WorldController.Ins != null)
                WorldController.Ins.EnterHorrorWorld();
            else
                Debug.LogWarning("Gift: No WorldController was found in the scene.", this);
        }
    }
}
