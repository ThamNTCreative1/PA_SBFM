using System.Collections.Generic;
using UnityEngine;

public class FindMonsterManager : MonoBehaviour
{
    public static FindMonsterManager Instance;

    [SerializeField] private FindMonsterDatabase database;
    [SerializeField] private List<Transform> listRespawn = new List<Transform>();

    [Header("Tutorial")]
    [SerializeField] private Transform playerTransform;
    [SerializeField] private Transform targetTutorial;
    [SerializeField] private TurtorialArrow arrowTut;

    [Header("Hidden Monster")]
    [SerializeField] private List<HiddenMonster> monsters = new List<HiddenMonster>();
    [Tooltip("Extra size added to each monster's trigger box when testing the player's position.")]
    [SerializeField] private Vector3 playerTouchSize = new Vector3(1f, 2f, 1f);

    [Header("UI")]
    [SerializeField] private HiddenMonsterPanel hiddenMonsterPanel;

    private bool tutorialComplete;
    private int collected;

    public FindMonsterDatabase Database { get { return database; } }
    public Transform PlayerTransform { get { return playerTransform; } }
    public Vector3 PlayerTouchSize { get { return playerTouchSize; } }
    public int Collected { get { return collected; } }
    public int Total { get { return monsters.Count; } }

    private void Awake()
    {
        Instance = this;
        if (database) database.ResetData();
        DisableUnusedTriggers();
    }

    // Luna's CharacterController collides with trigger colliders. The map's triggers that have no logic in the playable
    // (teleport cubes, planet zone, stair/ladder boxes) are switched off; monsters read their own box as a volume.
    private void DisableUnusedTriggers()
    {
        foreach (GameObject root in gameObject.scene.GetRootGameObjects())
            foreach (Collider c in root.GetComponentsInChildren<Collider>(true))
                if (c.isTrigger && c.GetComponent<HiddenMonster>() == null && c.GetComponent<TeleportPortal>() == null)
                    c.enabled = false;
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
        FindMonsterEvent.Clear();
    }

    private void Start()
    {
        // With the portal storyline in the scene, it starts the guide line itself (after the controls tutorial).
        if (PortalStory.Instance == null && !tutorialComplete && arrowTut && targetTutorial && playerTransform)
            arrowTut.StartDraw(targetTutorial, playerTransform);
    }

    public void Register(HiddenMonster monster)
    {
        if (monster && !monsters.Contains(monster)) monsters.Add(monster);
    }

    public void OnMonsterCollected(HiddenMonster monster)
    {
        tutorialComplete = true;
        if (arrowTut) arrowTut.StopDraw();
        collected++;
        bool storyHandled = PortalStory.Instance && PortalStory.Instance.HandleCollected(monster);
        if (!storyHandled && hiddenMonsterPanel) hiddenMonsterPanel.Setup(monster.MonsterSo);
        FindMonsterEvent.DispatchMonsterFound(monster.MonsterSo);
        if (LunaController.Instance) LunaController.Instance.MonsterFound(collected);
    }

    // Tutorial points at the portal: going through it completes the tutorial and removes the line.
    public void OnTeleported(Transform portal)
    {
        if (tutorialComplete || targetTutorial == null) return;
        if (portal != targetTutorial && !portal.IsChildOf(targetTutorial) && !targetTutorial.IsChildOf(portal)) return;
        tutorialComplete = true;
        if (arrowTut && arrowTut.CurrentTarget == targetTutorial) arrowTut.StopDraw();
    }

    public int AvailableMonsters()
    {
        int count = 0;
        for (int i = 0; i < monsters.Count; i++)
            if (monsters[i] && !monsters[i].Obtained && monsters[i].gameObject.activeInHierarchy) count++;
        return count;
    }

    public int ShowNearestMonster()
    {
        Transform bestTarget = null;
        float closest = Mathf.Infinity;
        Vector3 current = playerTransform.position;
        int count = 0;
        for (int i = 0; i < monsters.Count; i++)
        {
            HiddenMonster m = monsters[i];
            if (m == null || m.Obtained || !m.gameObject.activeInHierarchy) continue;
            count++;
            float d = (m.transform.position - current).sqrMagnitude;
            if (d < closest) { closest = d; bestTarget = m.transform; }
        }
        if (bestTarget && arrowTut) arrowTut.StartDraw(bestTarget, playerTransform);
        return count;
    }

    public Vector3 GetPositionRespawn(Transform currentPosition)
    {
        if (listRespawn == null || listRespawn.Count == 0) return currentPosition.position;
        Transform nearest = null;
        float closest = Mathf.Infinity;
        Vector3 pos = currentPosition.position;
        for (int i = 0; i < listRespawn.Count; i++)
        {
            Transform t = listRespawn[i];
            if (t == null) continue;
            float d = (t.position - pos).sqrMagnitude;
            if (d < closest) { closest = d; nearest = t; }
        }
        return nearest ? nearest.position : pos;
    }
}
