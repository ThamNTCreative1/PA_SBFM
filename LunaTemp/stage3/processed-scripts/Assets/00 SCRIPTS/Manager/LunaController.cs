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

    private void Awake()
    {
        Instance = this;
        CTA.onClick.AddListener(ClickCTA);
    }

    private void Start()
    {
        StartCoroutine(EndGame());
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private IEnumerator EndGame()
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
        GameController.Ins.CompleteScene.gameObject.SetActive(false);
        yield return new WaitForSeconds(1.5f);
        ClickCTA();
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
        GameController.Ins.CompleteScene.gameObject.SetActive(false);
        DOVirtual.DelayedCall(1.5f, ClickCTA);
    }
}