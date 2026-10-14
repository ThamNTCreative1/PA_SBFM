using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShowEnd;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target;
    [SerializeField] private int maxProgress;

    [SerializeField] private TextMeshProUGUI progressText;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private RectTransform failScene;

    [SerializeField] private CharacterCollect collect;
    [SerializeField] private TutController tut;
    [SerializeField] private List<Gift> gifts = new List<Gift>();
    public Gift FirstGift => gifts != null && gifts.Count > 0 ? gifts[0] : null;

    public static GameController Ins { get; private set; }
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
    public void RemoveGift(Gift gift)
    {
        gifts.Remove(gift);
    }
    public void UpdateProgress()
    {
        currentProgress++;
        progressText.text = string.Format("{0}/{1}", currentProgress, maxProgress);
        if (currentProgress >= target) StartCoroutine(ShowComplete());
    }
    private void Complete()
    {
        tut.StopTut();
        completeScene.gameObject.SetActive(true);
    }
    public void Fail()
    {
        tut.StopTut();
        failScene.gameObject.SetActive(true);
    }
    private IEnumerator ShowComplete()
    {
        yield return new WaitForSeconds(timeToShowEnd);
        Complete();
    }
}