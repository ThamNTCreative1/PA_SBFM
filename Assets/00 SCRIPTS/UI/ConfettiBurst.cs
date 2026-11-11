using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Paper confetti fired from both sides of the screen (UI, above the popups). The pieces are Images placed in the
// scene (a pool); Play() shoots half from the left edge and half from the right edge towards the centre, then they
// fall with gravity, spin, flip like paper and fade out by colour alpha. Mostly pastel colours plus a few vivid ones.
public class ConfettiBurst : MonoBehaviour
{
    [SerializeField] private RectTransform area;
    [SerializeField] private List<Image> pieces = new List<Image>();

    [Header("Colours")]
    [SerializeField] private Color[] pastel =
    {
        new Color(1f, 0.74f, 0.82f), new Color(0.72f, 0.87f, 1f), new Color(0.76f, 0.96f, 0.8f),
        new Color(1f, 0.95f, 0.68f), new Color(0.84f, 0.76f, 1f), new Color(1f, 0.83f, 0.7f)
    };
    [SerializeField] private Color[] vivid =
    {
        new Color(1f, 0.18f, 0.42f), new Color(0.1f, 0.65f, 1f), new Color(1f, 0.82f, 0f), new Color(0.25f, 0.88f, 0.3f)
    };
    [SerializeField, Range(0, 1)] private float vividChance = 0.25f;

    [Header("Motion (canvas units)")]
    [SerializeField] private Vector2 speed = new Vector2(1100f, 1900f);
    [Tooltip("Launch angle above the horizontal, towards the centre (degrees).")]
    [SerializeField] private Vector2 angle = new Vector2(35f, 75f);
    [Tooltip("Start height on the screen edge (0 = bottom, 1 = top).")]
    [SerializeField] private Vector2 startHeight = new Vector2(0.15f, 0.45f);
    [SerializeField] private float gravity = 1600f;
    [SerializeField] private float drag = 1.6f;
    [SerializeField] private Vector2 lifetime = new Vector2(2.4f, 3.4f);
    [SerializeField] private float fadeTime = 0.6f;
    [SerializeField] private Vector2 spinSpeed = new Vector2(-540f, 540f);
    [SerializeField] private Vector2 flipSpeed = new Vector2(6f, 14f);

    private class Piece
    {
        public Image image;
        public RectTransform rect;
        public Vector2 pos, vel;
        public float rot, spin, flip, flipPhase, age, life;
        public Color color;
        public Vector3 baseScale;
    }

    private readonly List<Piece> live = new List<Piece>();
    private bool playing;

    private void Awake()
    {
        if (area == null) area = (RectTransform)transform;
        for (int i = 0; i < pieces.Count; i++)
        {
            if (pieces[i] == null) continue;
            Piece p = new Piece();
            p.image = pieces[i];
            p.rect = (RectTransform)pieces[i].transform;
            p.baseScale = p.rect.localScale;
            live.Add(p);
            pieces[i].gameObject.SetActive(false);
        }
    }

    public void Play()
    {
        Vector2 size = area.rect.size;
        for (int i = 0; i < live.Count; i++)
        {
            Piece p = live[i];
            bool left = (i & 1) == 0;
            float a = Random.Range(angle.x, angle.y) * Mathf.Deg2Rad;
            float s = Random.Range(speed.x, speed.y);
            p.pos = new Vector2((left ? -0.5f : 0.5f) * size.x, (Random.Range(startHeight.x, startHeight.y) - 0.5f) * size.y);
            p.vel = new Vector2(Mathf.Cos(a) * s * (left ? 1 : -1), Mathf.Sin(a) * s);
            p.rot = Random.Range(0f, 360f);
            p.spin = Random.Range(spinSpeed.x, spinSpeed.y);
            p.flip = Random.Range(flipSpeed.x, flipSpeed.y);
            p.flipPhase = Random.Range(0f, Mathf.PI * 2);
            p.age = 0;
            p.life = Random.Range(lifetime.x, lifetime.y);
            Color[] set = (Random.value < vividChance && vivid.Length > 0) || pastel.Length == 0 ? vivid : pastel;
            p.color = set[Random.Range(0, set.Length)];
            p.image.color = p.color;
            p.image.gameObject.SetActive(true);
            Apply(p);
        }
        playing = true;
    }

    private void Apply(Piece p)
    {
        p.rect.anchoredPosition = p.pos;
        p.rect.localRotation = Quaternion.Euler(0, 0, p.rot);
        // paper flipping: squash one side
        float f = Mathf.Cos(p.age * p.flip + p.flipPhase);
        p.rect.localScale = new Vector3(p.baseScale.x * f, p.baseScale.y, p.baseScale.z);
    }

    private void Update()
    {
        if (!playing) return;
        float dt = Mathf.Min(Time.unscaledDeltaTime, 0.05f);
        bool any = false;
        for (int i = 0; i < live.Count; i++)
        {
            Piece p = live[i];
            if (!p.image.gameObject.activeSelf) continue;
            p.age += dt;
            if (p.age >= p.life) { p.image.gameObject.SetActive(false); continue; }
            any = true;
            p.vel.y -= gravity * dt;
            p.vel *= Mathf.Max(0, 1 - drag * dt);
            p.pos += p.vel * dt;
            p.rot += p.spin * dt;
            float remain = p.life - p.age;
            Color c = p.color;
            c.a = remain < fadeTime ? remain / fadeTime : 1;
            p.image.color = c;
            Apply(p);
        }
        if (!any) playing = false;
    }
}
