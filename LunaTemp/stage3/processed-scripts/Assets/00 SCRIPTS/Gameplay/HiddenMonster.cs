using UnityEngine;

// A monster hidden in the map. The source used OnTriggerEnter; Luna's CharacterController collides with triggers,
// so the trigger box is read once as a volume, switched off, and the player's position is tested against it.
public class HiddenMonster : MonoBehaviour
{
    [SerializeField] private GameObject checkMark;
    [SerializeField] private ParticleSystem claimFx;

    private MonsterSO monsterSO;
    private bool obtain;
    private Bounds volume;
    private bool hasVolume;

    public MonsterSO MonsterSo { get { return monsterSO; } }
    public GameObject CheckMark { get { return checkMark; } }
    public ParticleSystem ClaimFx { get { return claimFx; } }
    public bool Obtained { get { return obtain; } }

    private void Awake()
    {
        if (checkMark) checkMark.SetActive(false);
    }

    private void Start()
    {
        FindMonsterManager manager = FindMonsterManager.Instance;
        monsterSO = manager && manager.Database ? manager.Database.GetMonster(gameObject.name) : null;
        // HiddenCharacter31..39 have no MonsterSO in the database (as in the source game): they stay as decoration.
        if (monsterSO == null)
        {
            Collider trigger = GetComponent<Collider>();
            if (trigger && trigger.isTrigger) trigger.enabled = false;
            enabled = false;
            return;
        }
        obtain = monsterSO != null && monsterSO.IsOwn;
        if (checkMark) checkMark.SetActive(obtain);

        Collider c = GetComponent<Collider>();
        if (c)
        {
            volume = ComputeVolume(c);
            hasVolume = true;
            c.enabled = false;
        }
        if (manager) manager.Register(this);
    }

    // World box of the trigger, computed from the BoxCollider itself (collider.bounds can be empty right after the
    // object is switched on, and in Luna Bounds is a reference type).
    private Bounds ComputeVolume(Collider c)
    {
        BoxCollider box = c as BoxCollider;
        if (box == null) return new Bounds(c.bounds.center, c.bounds.size);
        Vector3 e = box.size * .5f;
        Vector3 first = transform.TransformPoint(box.center - e);
        Bounds b = new Bounds(first, Vector3.zero);
        for (int i = 1; i < 8; i++)
        {
            Vector3 corner = new Vector3((i & 1) == 0 ? -e.x : e.x, (i & 2) == 0 ? -e.y : e.y, (i & 4) == 0 ? -e.z : e.z);
            b.Encapsulate(transform.TransformPoint(box.center + corner));
        }
        return b;
    }

    private void Update()
    {
        if (obtain || !hasVolume || monsterSO == null) return;
        FindMonsterManager manager = FindMonsterManager.Instance;
        if (manager == null || manager.PlayerTransform == null) return;
        Vector3 p = manager.PlayerTransform.position;
        Bounds b = new Bounds(volume.center, volume.size + manager.PlayerTouchSize);
        bool inside = b.Contains(p) || b.Contains(p + manager.PlayerTransform.up);
        // Just reset while the player stands on it: wait until the player has walked away before it counts again
        if (waitPlayerExit) { if (!inside) waitPlayerExit = false; return; }
        if (inside) Collect();
    }

    private bool waitPlayerExit;

    // Back to hidden (SprunkiHunt: a wrong Sprunki can be found again in a later round).
    public void ResetCollected()
    {
        obtain = false;
        waitPlayerExit = true;
        if (monsterSO != null) monsterSO.ResetData();
        if (checkMark) checkMark.SetActive(false);
    }

    private void Collect()
    {
        obtain = true;
        monsterSO.Obtain();
        if (claimFx) claimFx.Play();
        if (checkMark) checkMark.SetActive(true);
        FindMonsterManager.Instance.OnMonsterCollected(this);
    }
}
