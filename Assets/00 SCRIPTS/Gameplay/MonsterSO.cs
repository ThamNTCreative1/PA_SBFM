using UnityEngine;

[CreateAssetMenu(fileName = "MonsterSO", menuName = "FindMonster/MonsterSO", order = 0)]
public class MonsterSO : ScriptableObject
{
    public string id;
    public string displayName;
    public Sprite icon;
    public GameObject prefab;

    [Header("Rarity (found popup: label + card colour)")]
    public string rarity = "Epic";
    public Color rarityColor = new Color(1f, 0.2f, 1f, 1f);

    // Runtime only: a playable session always starts with nothing collected (no save data).
    [System.NonSerialized] private bool isOwn;
    public bool IsOwn { get { return isOwn; } }

    public void Obtain() { isOwn = true; }
    public void ResetData() { isOwn = false; }
}
