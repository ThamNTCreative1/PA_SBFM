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
    [LunaPlaygroundField("Type Monster 1: 0 -> 8")] public int TypeMonster1;

    [SerializeField] private Transform gift1;

    [SerializeField] private List<GameObject> monsters;

    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    [SerializeField] private int currentClick;
    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        InitMonster();
    }
    private void InitMonster()
    {
        Instantiate(monsters[Mathf.Clamp(TypeMonster1, 0, monsters.Count - 1)], gift1);
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
}
