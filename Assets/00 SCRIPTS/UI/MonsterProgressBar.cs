using TMPro;
using UnityEngine;
using UnityEngine.UI;

// "x/N Monsters found" bar. Goes up by one for every monster found.
// With countSceneMonsters on, N is the number of morphs that can be collected in the map (FindMonsterManager's list)
// and the bar starts at 0; otherwise it uses startFound/total as set here.
public class MonsterProgressBar : MonoBehaviour
{
    [SerializeField] private bool countSceneMonsters = true;
    [SerializeField] private int startFound = 0;
    [SerializeField] private int total = 39;
    [SerializeField] private Image fill;
    [SerializeField] private TMP_Text countText;
    [SerializeField] private Transform icon;
    [SerializeField] private float fillSpeed = 1.5f;

    private int found;
    private float shown;
    private float bump = -1;

    public int Found { get { return found; } }

    private void Awake()
    {
        FindMonsterEvent.MonsterFound += OnMonsterFound;
        Init();
    }

    private void Start()
    {
        // FindMonsterManager is set up in its Awake; read the real count once everything exists
        if (countSceneMonsters) Init();
    }

    private void Init()
    {
        if (countSceneMonsters && FindMonsterManager.Instance)
        {
            total = FindMonsterManager.Instance.Total;
            startFound = 0;
        }
        found = Mathf.Clamp(startFound + (FindMonsterManager.Instance ? FindMonsterManager.Instance.Collected : 0), 0, total);
        shown = total > 0 ? (float)found / total : 0;
        Refresh();
    }

    private void OnDestroy() { FindMonsterEvent.MonsterFound -= OnMonsterFound; }

    private void OnMonsterFound(MonsterSO so)
    {
        if (found >= total) return;
        found++;
        bump = 0;
        Refresh();
    }

    private void Refresh()
    {
        if (countText) countText.text = found + "/" + total;
        if (fill) fill.fillAmount = shown;
    }

    private void Update()
    {
        float target = total > 0 ? (float)found / total : 0;
        if (!Mathf.Approximately(shown, target))
        {
            shown = Mathf.MoveTowards(shown, target, fillSpeed * Time.unscaledDeltaTime * 0.2f);
            if (fill) fill.fillAmount = shown;
        }
        // Icon bump when the count goes up
        if (bump >= 0 && icon)
        {
            bump += Time.unscaledDeltaTime;
            float k = Mathf.Clamp01(bump / 0.4f);
            icon.localScale = Vector3.one * (1 + Mathf.Sin(k * Mathf.PI) * 0.3f);
            if (k >= 1) { bump = -1; icon.localScale = Vector3.one; }
        }
    }
}
