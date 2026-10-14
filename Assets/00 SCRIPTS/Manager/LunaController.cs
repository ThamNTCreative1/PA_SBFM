using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Type Monster 1: 0 -> 8")] public int TypeMonster1;
    [LunaPlaygroundField("Type Monster 2: 0 -> 8")] public int TypeMonster2;

    [SerializeField] private Transform gift1;
    [SerializeField] private Transform gift2;

    [SerializeField] private List<GameObject> monsters;

    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        InitMonster();
    }
    private void InitMonster()
    {
        Instantiate(monsters[Mathf.Clamp(TypeMonster1, 0, monsters.Count - 1)], gift1);
        Instantiate(monsters[Mathf.Clamp(TypeMonster2, 0, monsters.Count - 1)], gift2);
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
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) endCard.SetActive(true);
    }
}
