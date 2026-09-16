using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShowComplete;
    [SerializeField] private float timeToShowHint;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target;
    [SerializeField] private TMP_Text progressText;
    [SerializeField] private TMP_Text collectText;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private List<Gift> gifts;
    [SerializeField] private CharacterCollect collect;
    [SerializeField] private TutController tut;

    public static GameController Ins { get; private set; }

    public Gift FirstGift => gifts != null && gifts.Count > 0 ? gifts[0] : null;

    private void Awake()
    {
        CreateIns();
    }

   

    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }

        Ins = this;
        DontDestroyOnLoad(gameObject);
    }

    public void Far()
    {
        tut.ShowFarTut();
    }

    private void Fail()
    {
        tut.ShowFailTut();
        StartCoroutine(ShowHint());
    }

    public void CollectGift(Gift gift)
    {
        int collected = -1;
        for (int i = 0; i < gifts.Count; i++)
        {
            if (gifts[i] != gift) continue;
            collected = i;
            break;
        }

        if (collected == -1) return;
        Gift g = gifts[collected];
        gifts.RemoveAt(collected);
        // g.Collect(collect);
        collectText.transform.localScale = Vector3.zero;
        collectText.transform.DOScale(1.2f, 0.3f).SetEase(Ease.OutCubic).OnComplete(() =>
        {
            collectText.transform.DOScale(1f, 0.2f).SetEase(Ease.OutCubic);
        });
        UpdateProgress();
        DOVirtual.DelayedCall(1f, () => { collectText.transform.localScale = Vector3.zero; });
        StartCoroutine(WaitForCollect(g));
    }

    private IEnumerator WaitForCollect(Gift g)
    {
        yield return new WaitUntil(() => g.collectDone);
        g.RemoveGift();
    }

    private void UpdateProgress()
    {
        currentProgress++;
        // progressText.text = string.Format("{0}/{1}", currentProgress, target);

        if (currentProgress >= target) StartCoroutine(ShowComplete());
    }


    private void Complete()
    {
        tut.StopTut();
        completeScene.gameObject.SetActive(true);
    }

    private IEnumerator ShowComplete()
    {
        yield return new WaitForSeconds(timeToShowComplete);
        Complete();
    }

    private IEnumerator ShowHint()
    {
        yield return new WaitForSeconds(timeToShowHint);
        foreach (Gift gift in gifts)
        {
            gift.ShowHints();
        }
    }
}