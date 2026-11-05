using UnityEngine;
using UnityEngine.UI;

// Radar: draws the line to the nearest monster not collected yet. First use free, then "watch ad".
// After hintDelay seconds without using it, the hint (tap hand) shows on the button.
public class RadarButton : MonoBehaviour
{
    [SerializeField] private GameObject adIcon;
    [Tooltip("Tap hint shown after hintDelay seconds if the radar was never used (Spine hand in the source).")]
    [SerializeField] private GameObject hint;
    [SerializeField] private float hintDelay = 45f;
    [SerializeField] private PlayableFrame allCollectedDialog;

    private Button button;
    private int activeCount;
    private float hintClock;

    private void Awake()
    {
        button = GetComponent<Button>();
        if (button) button.onClick.AddListener(OnClick);
        if (adIcon) adIcon.SetActive(false);
        if (hint) hint.SetActive(false);
    }

    private void Update()
    {
        if (activeCount > 0 || hint == null || hint.activeSelf) return;
        hintClock += Time.deltaTime;
        if (hintClock >= hintDelay) hint.SetActive(true);
    }

    private void OnClick()
    {
        if (hint) hint.SetActive(false);
        FindMonsterManager manager = FindMonsterManager.Instance;
        if (manager == null) return;
        if (TurtorialArrow.Instance && TurtorialArrow.Instance.Active) return;
        if (manager.AvailableMonsters() <= 0)
        {
            if (allCollectedDialog) allCollectedDialog.Show();
            return;
        }
        if (activeCount > 0) LunaController.Rewarded(Radar);
        else { Radar(); if (adIcon) adIcon.SetActive(true); }
    }

    private void Radar()
    {
        activeCount++;
        FindMonsterManager.Instance.ShowNearestMonster();
    }
}
