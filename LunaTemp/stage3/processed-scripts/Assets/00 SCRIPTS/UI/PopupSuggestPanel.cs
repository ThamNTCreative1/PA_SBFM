using System.Collections.Generic;
using UnityEngine;

// Boost suggestion popup (Radar / Speed / Jump). Buttons call these methods from their onClick.
// "Watch ad" goes through LunaController.Rewarded (free reward or store, set in the Luna playground).
public class PopupSuggestPanel : PlayableFrame
{
    [SerializeField] private List<Transform> buttons = new List<Transform>();

    private float clock = -1;

    protected override void OnShow()
    {
        clock = 0;
        for (int i = 0; i < buttons.Count; i++) if (buttons[i]) buttons[i].localScale = Vector3.zero;
    }

    protected override void Update()
    {
        base.Update();
        if (clock < 0) return;
        // Buttons pop one after another (0.5s delay, 0.5s each, OutBack) like the source sequence.
        clock += Time.unscaledDeltaTime;
        bool done = true;
        for (int i = 0; i < buttons.Count; i++)
        {
            if (buttons[i] == null) continue;
            float t = Mathf.Clamp01((clock - 0.5f - i * 0.5f) / 0.5f);
            const float c1 = 1.70158f, c3 = c1 + 1f;
            float e = t <= 0 ? 0 : 1 + c3 * Mathf.Pow(t - 1, 3) + c1 * Mathf.Pow(t - 1, 2);
            buttons[i].localScale = Vector3.one * e;
            if (t < 1) done = false;
        }
        if (done) clock = -1;
    }

    protected override void OnHide()
    {
        clock = -1;
        for (int i = 0; i < buttons.Count; i++) if (buttons[i]) buttons[i].localScale = Vector3.one;
    }

    public void HideButton() { Hide(); }

    public void BoostSpeed()
    {
        LunaController.Rewarded(() => { FindMonsterEvent.DispatchBoostSpeed(); Hide(); });
    }

    public void BoostJump()
    {
        LunaController.Rewarded(() => { FindMonsterEvent.DispatchBoostJump(); Hide(); });
    }

    public void BoostRadar()
    {
        LunaController.Rewarded(() =>
        {
            if (FindMonsterManager.Instance) FindMonsterManager.Instance.ShowNearestMonster();
            Hide();
        });
    }
}
