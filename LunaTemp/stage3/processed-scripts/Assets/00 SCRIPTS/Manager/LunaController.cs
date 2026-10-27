using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Click?")] public bool LimitClick;
    [LunaPlaygroundField("Max Click")] public float MaxClick;
    [LunaPlaygroundField("Tutorial Text Before Horror")] public string TutorialTextBeforeHorror = "Try Collect HORROR Morph!";
    [LunaPlaygroundField("Tutorial Text After Horror")] public string TutorialTextAfterHorror = "Find one more";
    [LunaPlaygroundField("Tutorial Text After Second Horror")] public string TutorialTextAfterSecondHorror = "You found them all!";

    public static LunaController Ins { get; private set; }

    [SerializeField] private List<GameObject> monsters;

    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    [SerializeField] private int currentClick;
    private void Awake()
    {
        Ins = this;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
    }
    
    private void Start()
    {
        StartCoroutine(EndGame());
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            CountClick();
        }
    }
    private void CountClick()
    {
        if (!LimitClick) return;
        currentClick++;
        if (currentClick >= MaxClick) endCard.SetActive(true);
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) endCard.SetActive(true);
    }

    private void OnDestroy()
    {
        if (Ins == this)
            Ins = null;
    }
}
