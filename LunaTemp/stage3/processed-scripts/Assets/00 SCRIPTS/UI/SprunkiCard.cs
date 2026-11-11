using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One card of the Sprunki collection (placed in the scene). Select picks this Sprunki as the one to find.
// A Sprunki already found shows as owned (white card, green button) and can't be picked again.
public class SprunkiCard : MonoBehaviour
{
    [SerializeField] private MonsterSO monster;
    [SerializeField] private Image background;
    [SerializeField] private Image icon;
    [SerializeField] private TMP_Text nameText;
    [SerializeField] private Button selectButton;
    [SerializeField] private Image buttonImage;
    [SerializeField] private TMP_Text buttonText;
    [Tooltip("Shown instead of the Select button once this Sprunki is found (tick).")]
    [SerializeField] private GameObject foundMark;

    [Header("Look")]
    [SerializeField] private Color normalColor = new Color(0.97f, 0.22f, 0.27f, 1f);
    [SerializeField] private Color foundColor = Color.white;
    [SerializeField] private Color buttonColor = new Color(0.78f, 0.52f, 0.3f, 1f);
    [SerializeField] private Color foundButtonColor = new Color(0.35f, 0.8f, 0.35f, 1f);
    [Tooltip("Icon tint while not found yet (black silhouette); found shows the real colours.")]
    [SerializeField] private Color lockedIconColor = Color.black;
    [SerializeField] private Color nameColor = Color.white;
    [SerializeField] private Color foundNameColor = new Color(0.2f, 0.2f, 0.25f, 1f);
    [SerializeField] private string selectLabel = "Select";
    [SerializeField] private string foundLabel = "Found";

    public Action<SprunkiCard> onSelect;

    public MonsterSO Monster { get { return monster; } }
    public Button SelectButton { get { return selectButton; } }
    public bool Found { get { return monster != null && monster.IsOwn; } }

    private void Awake()
    {
        if (selectButton) selectButton.onClick.AddListener(Click);
    }

    private void Click()
    {
        if (monster == null || Found) return;
        PlayableAudio.PlayButtonClick();
        if (onSelect != null) onSelect(this);
    }

    public void Refresh()
    {
        bool found = Found;
        if (background) background.color = found ? foundColor : normalColor;
        if (icon) icon.color = found ? Color.white : lockedIconColor;
        if (nameText) nameText.color = found ? foundNameColor : nameColor;
        if (buttonImage) buttonImage.color = found ? foundButtonColor : buttonColor;
        if (buttonText) buttonText.text = found ? foundLabel : selectLabel;
        if (selectButton) selectButton.interactable = !found;
        // Found: the tick replaces the button
        if (foundMark)
        {
            foundMark.SetActive(found);
            if (selectButton) selectButton.gameObject.SetActive(!found);
        }
    }
}
