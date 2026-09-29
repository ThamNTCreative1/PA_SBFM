using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [Serializable]
    public class GiftGroup
    {
        public List<Gift> gifts = new List<Gift>();
    }

    [SerializeField] private float timeToShowComplete;
    [SerializeField] private float timeToShowHint;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target;
    [SerializeField] private TMP_Text progressText;
    [SerializeField] private TMP_Text collectText;
    [SerializeField] private SelectPanel completeScene;

    [LunaPlaygroundField("Hidden Character(0->3)")] [SerializeField, Range(0, 3)]
    private int _indexGift;

    [SerializeField] private List<GiftGroup> giftGroups = new List<GiftGroup>();
    private List<Gift> gifts = new List<Gift>();
    [SerializeField] private CharacterCollect collect;
    [SerializeField] private TutController tut;

    public static GameController Ins { get; private set; }

    public Gift FirstGift => gifts != null && gifts.Count > 0 ? gifts[0] : null;

    public SelectPanel CompleteScene => completeScene;

    private void Awake()
    {
        CreateIns();
    }

    private void Start()
    {
        if (!InitializeGifts()) return;
        UpdateProgress();
    }

    private bool InitializeGifts()
    {
        // Keep existing scene assignments working until gift groups are configured.
        if (giftGroups == null || giftGroups.Count == 0) return true;

        _indexGift = Mathf.Clamp(_indexGift, 0, 4);
        if (_indexGift >= giftGroups.Count || giftGroups[_indexGift] == null ||
            giftGroups[_indexGift].gifts == null)
        {
            Debug.LogError($"Gift group {_indexGift} is not configured.", this);
            return false;
        }

        // Copy the selected group so collecting gifts does not modify its configuration.
        List<Gift> selectedGifts = new List<Gift>();
        foreach (Gift gift in giftGroups[_indexGift].gifts)
        {
            if (gift != null && !selectedGifts.Contains(gift)) selectedGifts.Add(gift);
        }

        if (selectedGifts.Count == 0)
        {
            Debug.LogError($"Gift group {_indexGift} has no gifts.", this);
            return false;
        }

        foreach (Gift gift in gifts)
        {
            if (gift != null) gift.gameObject.SetActive(false);
        }

        foreach (GiftGroup group in giftGroups)
        {
            if (group == null || group.gifts == null) continue;
            foreach (Gift gift in group.gifts)
            {
                if (gift != null) gift.gameObject.SetActive(false);
            }
        }

        gifts = selectedGifts;
        foreach (Gift gift in gifts)
        {
            gift.gameObject.SetActive(true);
        }

        return true;
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
        progressText.text = $"{currentProgress}/{target}";

        if (gifts.Count <= 0) StartCoroutine(ShowComplete());
    }


    private void Complete()
    {
        tut.StopTut();
        completeScene.OpenCTA();
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