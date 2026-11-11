using UnityEngine;

// Replaces the DOTweenAnimation components of the source prefabs (morph squash, popup glow spin, icon pulses).
// Keeps DOTweenAnimation's field names so duration / end value / loop settings carry over.
// Supported: animationType 3 Rotate / 4 LocalRotate and 5 Scale, with Restart / Yoyo / Incremental loops.
public class ScaleYoyo : MonoBehaviour
{
    public float delay;
    public float duration = 0.5f;
    public int easeType = 6;
    public int loops = -1;
    public int loopType = 1; // 0 Restart, 1 Yoyo, 2 Incremental
    public int animationType = 5; // 3 Rotate, 4 LocalRotate, 5 Scale (DOTween enum)
    public Vector3 endValueV3 = Vector3.one;
    public bool isRelative;
    public bool autoPlay = true;

    private Vector3 startScale, startEuler;
    private Quaternion startRotation;
    private float time;
    private bool playing;

    private bool IsRotate { get { return animationType == 3 || animationType == 4; } }

    private void Awake()
    {
        startScale = transform.localScale;
        startRotation = animationType == 3 ? transform.rotation : transform.localRotation;
        startEuler = startRotation.eulerAngles;
    }

    private void OnEnable()
    {
        time = -delay;
        playing = autoPlay && (animationType == 5 || IsRotate) && duration > 0;
        if (!playing) return;
        Restore();
    }

    private void OnDisable() { Restore(); }

    private void Restore()
    {
        if (animationType == 5) transform.localScale = startScale;
        else if (animationType == 3) transform.rotation = startRotation;
        else if (animationType == 4) transform.localRotation = startRotation;
    }

    private void Update()
    {
        if (!playing) return;
        time += Time.deltaTime;
        if (time < 0) return;
        float cycles = time / duration;
        if (loops >= 0 && cycles >= Mathf.Max(1, loops)) { playing = false; cycles = Mathf.Max(1, loops); }
        int index = Mathf.FloorToInt(cycles);
        float t = cycles - index;
        if (!playing) { t = 1; index = Mathf.Max(0, index - 1); }
        if (loopType == 1 && (index & 1) == 1 && playing) t = 1 - t;
        float e = Ease(t);
        // Incremental: every loop starts where the previous one ended
        float steps = loopType == 2 ? index : 0;

        if (animationType == 5)
        {
            Vector3 delta = (isRelative ? endValueV3 : endValueV3 - startScale);
            transform.localScale = startScale + delta * (steps + e);
        }
        else
        {
            Vector3 delta = isRelative ? endValueV3 : endValueV3 - startEuler;
            // shortest way for absolute rotations, like DOTween's default rotate mode
            if (!isRelative) delta = new Vector3(Mathf.DeltaAngle(0, delta.x), Mathf.DeltaAngle(0, delta.y), Mathf.DeltaAngle(0, delta.z));
            if (loopType == 2 && !isRelative) delta = endValueV3; // incremental absolute: DOTween adds the end value each loop
            Quaternion rot = Quaternion.Euler(startEuler + delta * (steps + e));
            if (animationType == 3) transform.rotation = rot; else transform.localRotation = rot;
            if (loopType == 2) time = Mathf.Repeat(time, duration * 360f); // keep the clock small on endless spins
        }
    }

    private float Ease(float t)
    {
        switch (easeType)
        {
            case 2: return 1 - Mathf.Cos(t * Mathf.PI * .5f);         // InSine
            case 3: return Mathf.Sin(t * Mathf.PI * .5f);             // OutSine
            case 4: return -(Mathf.Cos(Mathf.PI * t) - 1) * .5f;      // InOutSine
            case 5: return t * t;                                     // InQuad
            case 6: return 1 - (1 - t) * (1 - t);                     // OutQuad
            case 7: return t < .5f ? 2 * t * t : 1 - Mathf.Pow(-2 * t + 2, 2) * .5f; // InOutQuad
            default: return t;                                        // Linear (1) and others
        }
    }
}
