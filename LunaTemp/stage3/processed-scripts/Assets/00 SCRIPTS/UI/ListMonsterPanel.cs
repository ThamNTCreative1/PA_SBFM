using System.Collections.Generic;
using UnityEngine;

// Collection of all monsters. Cells are instances of the MonsterItemView prefab (Luna can only Instantiate prefab assets).
public class ListMonsterPanel : PlayableFrame
{
    [SerializeField] private MonsterItemView monsterItemView;
    [SerializeField] private Transform root;

    private readonly List<MonsterItemView> views = new List<MonsterItemView>();

    protected override void OnShow()
    {
        FindMonsterDatabase db = FindMonsterManager.Instance ? FindMonsterManager.Instance.Database : null;
        if (db == null || monsterItemView == null || root == null) return;
        List<MonsterSO> all = db.GetAll();
        if (views.Count == 0)
        {
            for (int i = 0; i < all.Count; i++)
            {
                if (all[i] == null) continue;
                MonsterItemView view = Instantiate(monsterItemView.gameObject, root).GetComponent<MonsterItemView>();
                view.onMorph = Morph;
                views.Add(view);
                view.SetModel(all[i]);
            }
        }
        for (int i = 0; i < views.Count; i++) views[i].UpdateUI();
    }

    private void Morph(MonsterSO so)
    {
        FindMonsterEvent.DispatchMorph(so);
        Hide();
    }
}
