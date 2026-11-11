using UnityEngine;
using UnityEngine.UI;

// Shared logic of the HUD boost buttons: first use is free, later uses are "watch ad" (LunaController.Rewarded).
// While active a slider counts the boost duration down.
public abstract class BoostButton : MonoBehaviour
{
    [SerializeField] protected GameObject adIcon;
    [SerializeField] protected GameObject txtObj;
    [SerializeField] protected Slider slider;

    private Button button;
    private bool activate;
    private int activeCount;
    private float left;

    protected abstract void Dispatch();

    protected virtual void Awake()
    {
        button = GetComponent<Button>();
        if (button) button.onClick.AddListener(OnClick);
        if (adIcon) adIcon.SetActive(false);
        if (txtObj) txtObj.SetActive(true);
        if (slider) slider.gameObject.SetActive(false);
    }

    private void OnClick()
    {
        if (activate) return;
        if (activeCount > 0) LunaController.Rewarded(Activate);
        else { Activate(); if (adIcon) adIcon.SetActive(true); }
    }

    private void Activate()
    {
        activeCount++;
        Dispatch();
        activate = true;
        left = FindMonsterPlayerControl.BoostDuration;
        if (txtObj) txtObj.SetActive(false);
        if (slider) { slider.gameObject.SetActive(true); slider.value = 1; }
    }

    private void Update()
    {
        if (!activate) return;
        left -= Time.deltaTime;
        if (slider) slider.value = Mathf.Clamp01(left / FindMonsterPlayerControl.BoostDuration);
        if (left <= 0)
        {
            activate = false;
            if (slider) slider.gameObject.SetActive(false);
            if (txtObj) txtObj.SetActive(true);
        }
    }
}
