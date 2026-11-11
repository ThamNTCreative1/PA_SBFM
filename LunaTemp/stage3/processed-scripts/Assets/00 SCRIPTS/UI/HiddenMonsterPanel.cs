using UnityEngine;
using UnityEngine.UI;

// "You found a monster" popup; its button (onClick -> Morph) turns the player into the monster.
public class HiddenMonsterPanel : PlayableFrame
{
    [SerializeField] private Image icon;
    [Tooltip("Played every time the popup opens (a monster was found).")]
    [SerializeField] private FMAudio openSound;

    private MonsterSO monsterSO;

    public void Setup(MonsterSO so)
    {
        monsterSO = so;
        if (icon && so) icon.sprite = so.icon;
        Show();
        if (openSound != null) openSound.Play();
    }

    public void Morph()
    {
        if (monsterSO) FindMonsterEvent.DispatchMorph(monsterSO);
        Hide();
    }
}
