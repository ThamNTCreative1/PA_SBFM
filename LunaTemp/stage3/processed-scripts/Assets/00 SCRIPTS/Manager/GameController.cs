using System.Collections;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShowComplete;
    [SerializeField] private float timeToShowHint;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target;
    [SerializeField] private TextMeshProUGUI progressText;
    [SerializeField] private TutController tut;
    [SerializeField] private RectTransform inputUI;
    [SerializeField] private RectTransform completeScene;

    [SerializeField] private CharacterCollect collector;
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
    public void CollectGift(Gift gift)
    {
        gift.Collect(collector);
        UpdateProgress();
    }

    private void UpdateProgress()
    {
        currentProgress++;
        progressText.text = string.Format("{0}/{1}", currentProgress, target);
        if (currentProgress >= target)
        {
            StartCoroutine(ShowComplete());
        }
    }
    private void Complete()
    {
        inputUI.gameObject.SetActive(false);
        completeScene.gameObject.SetActive(true);
    }
    private IEnumerator ShowComplete()
    {
        tut.StopTut();
        collector.gameObject.SetActive(false);
        yield return new WaitForSeconds(timeToShowComplete);
        Complete();
    }
}

