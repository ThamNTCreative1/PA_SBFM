using UnityEngine;

[CreateAssetMenu(fileName = "MonsterSO", menuName = "FindMonster/MonsterSO", order = 0)]
public class MonsterSO : ScriptableObject
{
    public string id;
    public string displayName;
    public Sprite icon;
    public GameObject prefab;

    // Runtime only: a playable session always starts with nothing collected (no save data).
    [System.NonSerialized] private bool isOwn;
    public bool IsOwn { get { return isOwn; } }

    public void Obtain() { isOwn = true; }
    public void ResetData() { isOwn = false; }
}
