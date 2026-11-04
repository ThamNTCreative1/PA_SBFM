using DG.Tweening;
using UnityEngine;

public class SearchPromptPulse : MonoBehaviour
{
    private Tween pulse;
    private Vector3 initialScale;

    private void OnEnable()
    {
        initialScale = transform.localScale;
        pulse = transform.DOScale(initialScale * 1.08f, 0.6f)
            .SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        pulse?.Kill();
        pulse = null;
        transform.localScale = initialScale;
    }
}
