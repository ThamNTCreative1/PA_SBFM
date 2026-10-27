using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Picks which monster (morph) sits at the end of the course.
/// Set the index from LunaController (Monster field) or here: the 3D model on the horse,
/// the HUD icon/name and the unlock card icon all switch to that monster.
/// </summary>
[ExecuteAlways]
public class MonsterSelector : MonoBehaviour
{
    public const int MaxIndex = 7;

    [Serializable]
    public class MonsterEntry
    {
        public string displayName;
        [Tooltip("3D model under the Morph gift")] public GameObject model;
        [Tooltip("Icon sprite shown in the HUD and on the unlock card")] public Sprite icon;
    }

    [Range(0, MaxIndex)] [SerializeField] private int monsterIndex;
    [SerializeField] private MonsterEntry[] monsters = new MonsterEntry[MaxIndex + 1];

    [Header("UI")]
    [SerializeField] private Image hudIcon;
    [SerializeField] private TMP_Text hudName;
    [SerializeField] private Image unlockIcon;

    [Tooltip("Off for a later gift: the HUD switches to it only when it becomes the current target.")]
    [SerializeField] private bool driveHud = true;

    public int MonsterIndex
    {
        get => monsterIndex;
        set
        {
            monsterIndex = value;
            Apply();
        }
    }

    private void Awake() => Apply();

#if UNITY_EDITOR
    private void OnValidate()
    {
        UnityEditor.EditorApplication.delayCall += () =>
        {
            if (this != null) Apply();
        };
    }
#endif

    public void Apply()
    {
        if (monsters == null || monsters.Length == 0) return;
        int index = Mathf.Clamp(monsterIndex, 0, monsters.Length - 1);

        for (int i = 0; i < monsters.Length; i++)
        {
            MonsterEntry entry = monsters[i];
            if (entry == null || entry.model == null) continue;
            bool on = i == index;
            if (entry.model.activeSelf != on) entry.model.SetActive(on);
        }

        if (driveHud) ApplyHud();
    }

    public void ApplyHud()
    {
        if (monsters == null || monsters.Length == 0) return;
        MonsterEntry current = monsters[Mathf.Clamp(monsterIndex, 0, monsters.Length - 1)];
        if (current == null) return;
        if (current.icon != null)
        {
            if (hudIcon != null) hudIcon.sprite = current.icon;
            if (unlockIcon != null) unlockIcon.sprite = current.icon;
        }

        if (hudName != null && !string.IsNullOrEmpty(current.displayName)) hudName.text = current.displayName;
    }
}
