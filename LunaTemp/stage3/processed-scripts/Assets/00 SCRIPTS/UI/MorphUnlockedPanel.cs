using TMPro;
using UnityEngine;
using UnityEngine.UI;

// "MORPH UNLOCKED!" screen: the morphs found, each on a card in its rarity colour (layout built in the scene).
public class MorphUnlockedPanel : PlayableFrame
{
    [System.Serializable]
    public class Card
    {
        public Image background;
        public Image icon;
        public TMP_Text nameText;
        public TMP_Text rarityText;
    }

    [SerializeField] private Card[] cards = new Card[1];

    public void Setup(MonsterSO[] morphs)
    {
        if (morphs == null) return;
        for (int i = 0; i < morphs.Length; i++) Fill(i, morphs[i]);
    }

    private void Fill(int index, MonsterSO so)
    {
        if (so == null || cards == null || index >= cards.Length || cards[index] == null) return;
        Card c = cards[index];
        if (c.background) c.background.color = so.rarityColor;
        if (c.icon) c.icon.sprite = so.icon;
        if (c.nameText) c.nameText.text = so.displayName;
        if (c.rarityText) { c.rarityText.text = so.rarity; c.rarityText.color = so.rarityColor; }
    }
}
