using UnityEngine;

// Bright flash that grows and fades at a point (secret morph unlock). Faces the camera.
public class ShineBurst : MonoBehaviour
{
    [SerializeField] private SpriteRenderer sprite;
    [SerializeField] private float duration = 0.9f;
    [SerializeField] private float startScale = 0.5f;
    [SerializeField] private float endScale = 8f;

    private float clock = -1;
    private Color baseColor = Color.white;
    private Camera cam;

    private void Awake()
    {
        if (sprite == null) sprite = GetComponentInChildren<SpriteRenderer>(true);
        if (sprite) baseColor = sprite.color;
    }

    public void Play(Vector3 position)
    {
        transform.position = position;
        gameObject.SetActive(true);
        clock = 0;
        Update();
    }

    private void Update()
    {
        if (clock < 0) return;
        if (cam == null) cam = Camera.main;
        clock += Time.deltaTime;
        float k = Mathf.Clamp01(clock / duration);
        float e = 1 - (1 - k) * (1 - k);
        transform.localScale = Vector3.one * Mathf.Lerp(startScale, endScale, e);
        if (cam) transform.rotation = Quaternion.LookRotation(transform.position - cam.transform.position, cam.transform.up);
        if (sprite) { Color c = baseColor; c.a = baseColor.a * (k < .2f ? k / .2f : 1 - (k - .2f) / .8f); sprite.color = c; }
        if (k >= 1) { clock = -1; gameObject.SetActive(false); }
    }
}
