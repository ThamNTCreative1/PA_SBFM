using UnityEngine;

// Guide line on the ground from the player to the target (tutorial / radar / secret morph).
// On a planet the line follows the sphere's surface (an arc) and is tilted to lie on it.
public class TurtorialArrow : MonoBehaviour
{
    public static TurtorialArrow Instance;

    [SerializeField] private LineRenderer lineRenderer;
    [SerializeField] private Vector3 offset;
    [Tooltip("Points used for the arc on a planet.")]
    [SerializeField] private int planetSegments = 16;

    private readonly Vector3[] positionDraws = new Vector3[2];
    private Vector3[] arc;
    private Transform currentTarget;
    private Transform characterTrans;
    private FMCharacter character;
    private bool active;
    private Quaternion baseRotation;

    public bool Active { get { return active; } }
    public Transform CurrentTarget { get { return currentTarget; } }

    private void Awake()
    {
        Instance = this;
        baseRotation = transform.rotation;
        if (lineRenderer) lineRenderer.positionCount = 0;
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    public void StartDraw(Transform target, Transform start)
    {
        active = true;
        enabled = true;
        currentTarget = target;
        characterTrans = start;
        character = start ? start.GetComponent<FMCharacter>() : null;
        targetFootOffset = FootOffset(target);
    }

    // Height from the target's pivot down to its feet (lowest point of its meshes), so the line ends under the
    // monster instead of at its pivot (HiddenCharacter pivots sit ~1.1 m above the ground).
    private float targetFootOffset;

    private static float FootOffset(Transform target)
    {
        if (target == null) return 0;
        MeshRenderer[] renderers = target.GetComponentsInChildren<MeshRenderer>();
        float minY = float.MaxValue;
        for (int i = 0; i < renderers.Length; i++)
        {
            MeshRenderer r = renderers[i];
            if (r == null || !r.enabled) continue;
            float y = r.bounds.min.y;
            if (y < minY) minY = y;
        }
        return minY == float.MaxValue ? 0 : minY - target.position.y;
    }

    private void Update()
    {
        if (lineRenderer == null) return;
        if (currentTarget == null || characterTrans == null)
        {
            lineRenderer.positionCount = 0;
            return;
        }

        if (character && character.IsOnPlanet && character.PlanetRadius > 0)
        {
            Vector3 c = character.PlanetCenter;
            float r = character.PlanetRadius + offset.y;
            Vector3 a = (characterTrans.position - c).normalized;
            Vector3 b = (currentTarget.position - c).normalized;
            int n = Mathf.Max(2, planetSegments);
            if (arc == null || arc.Length != n) arc = new Vector3[n];
            for (int i = 0; i < n; i++) arc[i] = c + Vector3.Slerp(a, b, i / (float)(n - 1)).normalized * r;
            lineRenderer.positionCount = n;
            lineRenderer.SetPositions(arc);
            // the line lies flat in its local plane: tilt that plane to the surface under the middle of the arc
            transform.rotation = Quaternion.FromToRotation(Vector3.up, Vector3.Slerp(a, b, .5f).normalized) * baseRotation;
            return;
        }

        transform.rotation = baseRotation;
        lineRenderer.positionCount = positionDraws.Length;
        positionDraws[0] = characterTrans.position + offset;
        positionDraws[1] = currentTarget.position + Vector3.up * targetFootOffset + offset;
        lineRenderer.SetPositions(positionDraws);
    }

    public void StopDraw()
    {
        active = false;
        if (lineRenderer) lineRenderer.positionCount = 0;
        currentTarget = null;
    }
}
