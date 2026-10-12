using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    public static LunaController Instance;

    [LunaPlaygroundField("Limit Time Play?")]
    public bool LimitTimePlay;

    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [SerializeField] private List<Image> images;
    [SerializeField] private Button CTA;
    private Tween installDelay;
    private bool failEnded;

    private void Awake()
    {
        Instance = this;
        CTA.onClick.AddListener(ClickCTA);
    }

    private void Start()
    {
        if (LimitTimePlay)
            StartCoroutine(EndGameAfterTimeLimit());
    }

    private void ClickCTA()
    {
        installDelay?.Kill();
        Luna.Unity.Playable.InstallFullGame();
    }

    public void EndGame(GameObject failPopup)
    {
        if (failEnded) return;
        failEnded = true;
        StopAllCoroutines();
        installDelay?.Kill();
        Luna.Unity.LifeCycle.GameEnded();
        if (failPopup != null)
        {
            Button button = failPopup.GetComponent<Button>();
            if (button == null) button = failPopup.AddComponent<Button>();
            button.transition = Selectable.Transition.None;
            button.onClick.AddListener(ClickCTA);
        }
        installDelay = DOVirtual.DelayedCall(2f, ClickCTA);
    }

    private IEnumerator EndGameAfterTimeLimit()
    {
        yield return new WaitForSeconds(TimePlay);
        if (CTA.gameObject.activeSelf) yield break;
        Luna.Unity.LifeCycle.GameEnded();
        CTA.gameObject.SetActive(true);
        GameObject obj = CTA.transform.GetChild(0).gameObject;
        obj.transform.DOScale(new Vector3(1.2f, 1.2f, 1.2f), 0.6f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        RectTransform line = obj.transform.GetChild(0).GetComponent<RectTransform>();
        line.DOAnchorPosX(520, 0.8f)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Restart);
        yield return new WaitForSeconds(1.5f);
        // ClickCTA();
    }

    public void EndCard()
    {
        if (CTA.gameObject.activeSelf) return;
        Luna.Unity.LifeCycle.GameEnded();
        CTA.gameObject.SetActive(true);
        GameObject obj = CTA.transform.GetChild(0).gameObject;
        obj.transform.DOScale(new Vector3(1.2f, 1.2f, 1.2f), 0.6f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        RectTransform line = obj.transform.GetChild(0).GetComponent<RectTransform>();
        line.DOAnchorPosX(520, 0.8f)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Restart);
        // installDelay = DOVirtual.DelayedCall(1.5f, ClickCTA);
    }

    private void OnDestroy()
    {
        installDelay?.Kill();
        if (Instance == this) Instance = null;
    }
}
