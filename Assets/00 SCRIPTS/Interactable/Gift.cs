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
    [SerializeField] private GameObject morphVisual;

    public Transform Arrow => arrow;

    private void Start()
    {
        if (arrow != null) arrow.gameObject.SetActive(false);
    }

    public void ShowHints()
    {
        if (hints == null) return;
        for (int i = 0; i < hints.Count; i++)
        {
            hints[i].ShowHint();
        }
    }

    public void SetMorphVisual(GameObject modelPrefab)
    {
        if (modelPrefab == null || transform.childCount == 0) return;

        Transform originalVisual = transform.GetChild(0);
        Renderer[] originalRenderers = originalVisual.GetComponentsInChildren<Renderer>(true);
        bool hasOriginalBounds = TryGetBounds(originalRenderers, out Bounds originalBounds);

        if (morphVisual != null)
            Destroy(morphVisual);

        morphVisual = Instantiate(modelPrefab, transform, false);
        morphVisual.name = modelPrefab.name;
        morphVisual.transform.localPosition = Vector3.zero;
        morphVisual.transform.localRotation = Quaternion.identity;
        morphVisual.transform.localScale = Vector3.one;

        Renderer[] newRenderers = morphVisual.GetComponentsInChildren<Renderer>(true);
        if (TryGetBounds(newRenderers, out Bounds newBounds))
        {
            float groundY = hasOriginalBounds ? originalBounds.min.y : transform.position.y;
            Vector3 offset = new Vector3(
                transform.position.x - newBounds.center.x,
                groundY - newBounds.min.y,
                transform.position.z - newBounds.center.z);
            morphVisual.transform.position += offset;
        }

        originalVisual.gameObject.SetActive(false);
    }


    private void OnTriggerEnter(Collider collision)
    {
        if (collectDone || !collision.gameObject.CompareTag("Player")) return;
        if (GameController.Ins == null || !GameController.Ins.IsPlaying) return;
        collectDone = true;
        // Keep the effect alive on the Gift root while hiding only the character visual.
        if (collectEffect != null) collectEffect.Play(true);
        RemoveGift();
        GameController.Ins.CollectGift(this);
        if (!GameController.Ins.HasFailed && AudioController.Ins != null && collectSound != null)
            AudioController.Ins.PlaySFX(collectSound);
    }

    public void RemoveGift()
    {
        if (transform.childCount > 0)
            transform.GetChild(0).gameObject.SetActive(false);
        if (morphVisual != null)
            morphVisual.SetActive(false);
        if (arrow != null) arrow.gameObject.SetActive(false);
    }

    private static bool TryGetBounds(Renderer[] renderers, out Bounds bounds)
    {
        bounds = default;
        bool hasBounds = false;
        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] == null) continue;
            if (!hasBounds)
            {
                bounds = renderers[i].bounds;
                hasBounds = true;
            }
            else
            {
                bounds.Encapsulate(renderers[i].bounds);
            }
        }

        return hasBounds;
    }
}
