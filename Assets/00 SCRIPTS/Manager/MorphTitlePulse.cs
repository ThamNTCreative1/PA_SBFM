using DG.Tweening;
using UnityEngine;

public class MorphTitlePulse : MonoBehaviour
{
    [SerializeField] private float scaleMultiplier = 1.06f;
    [SerializeField] private float duration = 0.65f;
    private Vector3 originalScale;
    private Tween pulse;

    private void OnEnable()
    {
        originalScale = transform.localScale;
        pulse = transform.DOScale(originalScale * scaleMultiplier, duration)
            .SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo).SetUpdate(true);
    }

    private void OnDisable()
    {
        pulse?.Kill();
        pulse = null;
        transform.localScale = originalScale;
    }
}
