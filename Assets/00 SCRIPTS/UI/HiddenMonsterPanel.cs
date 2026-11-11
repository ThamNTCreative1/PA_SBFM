using TMPro;
using UnityEngine;
using UnityEngine.UI;

// "You found a morph" notification (BAH's MorfNotify); its button (onClick -> Morph) turns the player into the monster.
// Like the source notification it has no close button: with autoHide > 0 it goes away by itself.
public class HiddenMonsterPanel : PlayableFrame
{
    [SerializeField] private Image icon;
    [SerializeField] private TMP_Text nameText;
    [Tooltip("Rarity label above the card, coloured with the rarity colour.")]
    [SerializeField] private TMP_Text rarityText;
    [Tooltip("Card behind the monster, tinted with the rarity colour.")]
    [SerializeField] private Image card;
    [Tooltip("Played every time the popup opens (a monster was found).")]
    [SerializeField] private FMAudio openSound;
    [Tooltip("Seconds before the notification hides by itself (0 = stays until the button is pressed).")]
    [SerializeField] private float autoHide = 4f;
    [Tooltip("Finger pointing at the button, shown on the first notification only.")]
    [SerializeField] private GameObject tutorFinger;

    private MonsterSO monsterSO;
    private float shownTime;
    private bool fingerShown;

    public void Setup(MonsterSO so)
    {
        monsterSO = so;
        if (icon && so) icon.sprite = so.icon;
        if (nameText && so) nameText.text = so.displayName;
        if (rarityText && so) { rarityText.text = so.rarity; rarityText.color = so.rarityColor; }
        if (card && so) card.color = so.rarityColor;
        if (tutorFinger)
        {
            tutorFinger.SetActive(!fingerShown);
            fingerShown = true;
        }
        shownTime = 0;
        Show();
        if (openSound != null) openSound.Play();
    }

    public void Morph()
    {
        if (monsterSO) FindMonsterEvent.DispatchMorph(monsterSO);
        Hide();
    }

    protected override void Update()
    {
        base.Update();
        if (autoHide <= 0) return;
        shownTime += Time.unscaledDeltaTime;
        if (shownTime >= autoHide) Hide();
    }
}
