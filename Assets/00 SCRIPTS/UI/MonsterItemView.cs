using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One cell of the monster list: silhouette until collected, then a Select button (onClick -> Morph).
public class MonsterItemView : MonoBehaviour
{
    [SerializeField] private Image icon;
    [SerializeField] private TMP_Text displayName;
    [SerializeField] private GameButton button;

    public Action<MonsterSO> onMorph;
    public MonsterSO Model { get; private set; }

    public void SetModel(MonsterSO model)
    {
        Model = model;
        UpdateUI();
    }

    public void UpdateUI()
    {
        if (Model == null) return;
        if (button) button.gameObject.SetActive(Model.IsOwn);
        if (displayName) displayName.text = Model.displayName;
        if (icon)
        {
            icon.sprite = Model.icon;
            icon.color = Model.IsOwn ? Color.white : Color.black;
        }
    }

    public void Morph()
    {
        if (onMorph != null && Model != null) onMorph(Model);
    }
}
