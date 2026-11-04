using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
public class SelectPanel : MonoBehaviour
{
    [SerializeField] private Button startButton;
    [SerializeField] private AudioClip startSound;
    private Tween pulse;
    private Vector3 buttonScale;
    private void OnEnable()
    {
        if (startButton == null) return;
        buttonScale = startButton.transform.localScale;
        pulse = startButton.transform.DOScale(buttonScale * 1.12f, 0.6f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        startButton.onClick.AddListener(Begin);
    }
    private void Begin()
    {
        if (AudioController.Ins != null && startSound != null) AudioController.Ins.PlaySFX(startSound);
        if (GameController.Ins != null) GameController.Ins.BeginSearch();
    }
    private void OnDisable()
    {
        pulse?.Kill();
        if (startButton == null) return;
        startButton.transform.localScale = buttonScale;
        startButton.onClick.RemoveListener(Begin);
    }
    public void OpenCTA() { if (LunaController.Instance != null) LunaController.Instance.EndCard(); }
}
