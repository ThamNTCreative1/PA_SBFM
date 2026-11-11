using UnityEngine;
using UnityEngine.UI;

// Light rays behind the "found a morph" popup, rebuilt from BAH's "RaysLegendary" UI particle
// (CFX2 Faded Ray, stretched from the centre). The source needed the UIParticle plugin, so here a pool of ray
// Images placed in the scene is animated the same way: rays spawn at a random angle, fade in then out over their
// lifetime and grow from startScale to 1. Each ray's pivot must be on the ray's tip so it points outwards.
// Rays stay active and are shown/hidden with Graphic.enabled + colour alpha (works the same in Luna).
public class UIRays : MonoBehaviour
{
    [SerializeField] private Graphic[] rays = new Graphic[0];
    [SerializeField] private float lifetime = 1.7f;
    [SerializeField] private float rate = 24f;
    [SerializeField, Range(0, 1)] private float startScale = 0.51f;
    [SerializeField, Range(0, 1)] private float maxAlpha = 1f;

    private float[] age = new float[0];
    private float spawnClock;
    private int next;

    private void EnsureAges()
    {
        if (age == null || age.Length != rays.Length)
        {
            age = new float[rays.Length];
            for (int i = 0; i < age.Length; i++) age[i] = -1;
        }
    }

    private void OnEnable()
    {
        EnsureAges();
        spawnClock = 0;
        for (int i = 0; i < rays.Length; i++)
        {
            age[i] = -1;
            Graphic ray = rays[i];
            if (ray == null) continue;
            if (!ray.gameObject.activeSelf) ray.gameObject.SetActive(true);
            SetAlpha(ray, 0);
            ray.enabled = false;
        }
    }

    private static void SetAlpha(Graphic ray, float a)
    {
        Color c = ray.color;
        c.a = a;
        ray.color = c;
    }

    private void Update()
    {
        EnsureAges();
        float dt = Time.unscaledDeltaTime;

        spawnClock += dt * rate;
        while (spawnClock >= 1)
        {
            spawnClock -= 1;
            Spawn();
        }

        for (int i = 0; i < rays.Length; i++)
        {
            Graphic ray = rays[i];
            if (age[i] < 0 || ray == null) continue;
            age[i] += dt;
            float t = age[i] / lifetime;
            if (t >= 1)
            {
                age[i] = -1;
                SetAlpha(ray, 0);
                ray.enabled = false;
                continue;
            }
            // alpha 0 -> 1 -> 0, size startScale -> 1 (the particle's colour/size over lifetime)
            float a = t < 0.5f ? t * 2 : (1 - t) * 2;
            SetAlpha(ray, a * maxAlpha);
            float s = Mathf.Lerp(startScale, 1, t);
            ray.rectTransform.localScale = new Vector3(s, s, 1);
        }
    }

    private void Spawn()
    {
        if (rays.Length == 0) return;
        // reuse a free ray, or the oldest one when all are busy
        int index = -1;
        for (int k = 0; k < rays.Length; k++)
        {
            int i = (next + k) % rays.Length;
            if (age[i] < 0) { index = i; break; }
        }
        if (index < 0) index = next;
        next = (index + 1) % rays.Length;

        Graphic ray = rays[index];
        if (ray == null) return;
        age[index] = 0;
        ray.rectTransform.localRotation = Quaternion.Euler(0, 0, Random.Range(0f, 360f));
        ray.rectTransform.localScale = new Vector3(startScale, startScale, 1);
        SetAlpha(ray, 0);
        ray.enabled = true;
    }
}
