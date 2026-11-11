using UnityEngine;

// World-space guide hand (sprite hand6). The finger tip sits on the target point; every cycle the hand lifts back
// along the finger direction and then presses in (a tap), with a light ring flashing at the finger tip.
// It always faces the camera.
// Hierarchy: PointerHand (finger tip, faces camera) > Pivot (moves/rotates/scales for the tap) > Visual (sprite,
//            offset so the finger tip is at the Pivot's origin), and Ripple (ring at the finger tip).
public class PointerHand : MonoBehaviour
{
    [SerializeField] private Transform pivot;
    [SerializeField] private Transform visual;
    [SerializeField] private SpriteRenderer ripple;
    [SerializeField] private float height = 0f;
    [Tooltip("Finger direction in the sprite (from the palm to the finger tip), in the hand's local XY.")]
    [SerializeField] private Vector2 fingerDirection = new Vector2(-0.546f, 0.838f);
    [Tooltip("Seconds per tap.")]
    [SerializeField] private float cycle = 0.9f;
    [SerializeField] private float pause = 0.2f;
    [Tooltip("How far (world units) the hand lifts back before pressing in.")]
    [SerializeField] private float liftDistance = 0.6f;
    [SerializeField] private float rippleScale = 0.9f;
    [SerializeField] private float appearDuration = 0.3f;
    [Tooltip("On: the hand just moves up and down along the finger (no press squash, no wobble, no ring).")]
    [SerializeField] private bool bob = false;

    // Tap keys over one cycle (0..1): lift back, press in (small overshoot), settle.
    private static readonly float[] KeyT = { 0f, 0.4f, 0.55f, 0.68f, 1f };
    private static readonly float[] MoveK = { 0f, -1f, 0.15f, 0f, 0f };     // along the finger (x liftDistance)
    private static readonly float[] ScaleK = { 1f, 1.06f, 0.92f, 1f, 1f };
    private static readonly float[] RotK = { 0f, 6f, -4f, 0f, 0f };

    private Transform target;
    private Vector3 offset;
    private Camera cam;
    private float clock;
    private Vector3 pivotBase, pivotScale = Vector3.one, visualScale = Vector3.one, rippleBaseScale = Vector3.one;
    private Color rippleColor = Color.white;

    private void Awake()
    {
        if (pivot) { pivotBase = pivot.localPosition; pivotScale = pivot.localScale; }
        if (visual) visualScale = visual.localScale;
        if (ripple) { rippleBaseScale = ripple.transform.localScale; rippleColor = ripple.color; }
    }

    // offset (in the target's orientation) is added to the target position: that is where the finger tip taps.
    public void Point(Transform newTarget, [Bridge.Ref] Vector3 newOffset)
    {
        target = newTarget;
        offset = newOffset;
        clock = 0;
        gameObject.SetActive(true);
        LateUpdate();
    }

    public void Hide()
    {
        target = null;
        gameObject.SetActive(false);
    }

    private static float Sample(float[] v, float time)
    {
        if (time <= KeyT[0]) return v[0];
        for (int i = 1; i < KeyT.Length; i++)
        {
            if (time > KeyT[i]) continue;
            float k = (time - KeyT[i - 1]) / (KeyT[i] - KeyT[i - 1]);
            k = k * k * (3 - 2 * k);
            return Mathf.Lerp(v[i - 1], v[i], k);
        }
        return v[v.Length - 1];
    }

    private void LateUpdate()
    {
        if (target == null) return;
        if (cam == null) cam = Camera.main;
        clock += Time.deltaTime;

        transform.position = target.position + target.rotation * offset + target.up * height;
        if (cam) transform.rotation = Quaternion.LookRotation(transform.position - cam.transform.position, cam.transform.up);

        float u = Mathf.Clamp01(Mathf.Repeat(clock, cycle + pause) / cycle);
        Vector2 dir = fingerDirection.sqrMagnitude > 0.0001f ? fingerDirection.normalized : Vector2.up;
        if (bob)
        {
            // smooth up/down: back along the finger and towards the target again
            float k = 0.5f - 0.5f * Mathf.Cos(clock / Mathf.Max(0.01f, cycle) * Mathf.PI * 2f);
            if (pivot)
            {
                pivot.localPosition = pivotBase - (Vector3)(dir * k * liftDistance);
                pivot.localRotation = Quaternion.identity;
                pivot.localScale = pivotScale;
            }
            if (visual) visual.localScale = visualScale * Mathf.SmoothStep(0, 1, Mathf.Clamp01(clock / appearDuration));
            if (ripple) { Color rc = rippleColor; rc.a = 0; ripple.color = rc; }
            return;
        }
        if (pivot)
        {
            pivot.localPosition = pivotBase + (Vector3)(dir * Sample(MoveK, u) * liftDistance);
            pivot.localRotation = Quaternion.Euler(0, 0, Sample(RotK, u));
            pivot.localScale = pivotScale * Sample(ScaleK, u);
        }
        if (visual)
        {
            float k = Mathf.Clamp01(clock / appearDuration);
            visual.localScale = visualScale * Mathf.SmoothStep(0, 1, k);
        }
        if (ripple)
        {
            // ring at the finger tip right after the press
            float a = u < 0.5f ? 0 : u < 0.62f ? (u - 0.5f) / 0.12f : u < 0.9f ? 1 - (u - 0.62f) / 0.28f : 0;
            Color c = rippleColor; c.a = rippleColor.a * a; ripple.color = c;
            float s = u < 0.5f ? 0.4f : Mathf.Lerp(0.4f, 1f, (u - 0.5f) / 0.4f);
            ripple.transform.localScale = rippleBaseScale * s * rippleScale;
        }
    }
}
