using System.Collections.Generic;
using UnityEngine;

// Same asset as the source game's Resources/FindMonsterDatabase; referenced directly (no Resources.Load).
[CreateAssetMenu(fileName = "MonsterDatabase", menuName = "FindMonster/MonsterDatabase", order = 0)]
public class FindMonsterDatabase : ScriptableObject
{
    [SerializeField] private List<MonsterSO> database = new List<MonsterSO>();

    public List<MonsterSO> GetAll() { return database; }

    public MonsterSO GetMonster(string id)
    {
        for (int i = 0; i < database.Count; i++)
            if (database[i] != null && database[i].id == id) return database[i];
        return null;
    }

    public void ResetData()
    {
        for (int i = 0; i < database.Count; i++)
            if (database[i] != null) database[i].ResetData();
    }
}
