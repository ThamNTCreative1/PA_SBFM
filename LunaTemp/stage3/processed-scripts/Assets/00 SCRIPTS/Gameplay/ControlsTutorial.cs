using UnityEngine;

// Controls tutorial at the start: 1) drag to turn the view, 2) drag the joystick to move, 3) tap Jump (only if jumpStep is on).
// A screen-space hand (hand6) shows each gesture with a text; each step ends when the player has done it.
// The hand only animates (position/scale/rotation as feedback); its targets are read from the existing HUD
// (joystick ring, Jump button) and from two marker rects for the view swipe, so the layout stays as built in the scene.
public class ControlsTutorial : MonoBehaviour
{
    public static ControlsTutorial Instance { get; private set; }

    [Header("Player")]
    [SerializeField] private FMCharacter player;
    [SerializeField] private FM3rdInput look;

    [Header("UI (tutorial canvas)")]
    [SerializeField] private RectTransform hand;
    [SerializeField] private StoryTextView text;
    [Tooltip("View swipe goes back and forth between these two markers.")]
    [SerializeField] private RectTransform viewFrom;
    [SerializeField] private RectTransform viewTo;

    [Header("HUD targets")]
    [SerializeField] private RectTransform joystickRing;
    [SerializeField] private RectTransform jumpButton;

    [Header("Texts")]
    [SerializeField] private string viewText = "Drag to View";
    [SerializeField] private string moveText = "Drag to Move";
    [SerializeField] private string jumpText = "Tap to Jump";

    [Header("Goals")]
    [SerializeField] private float lookDegrees = 60f;
    [SerializeField] private float moveDistance = 4f;
    [SerializeField] private int jumps = 1;
    [Tooltip("Off: the tutorial ends after the move step (the Jump button is hidden).")]
    [SerializeField] private bool jumpStep = false;

    [Header("Timing")]
    [SerializeField] private float startDelay = 0.6f;
    [SerializeField] private float stepGap = 0.5f;
    [SerializeField] private float swipeDuration = 1.1f;
    [Tooltip("Joystick swipe length, in canvas units (scaled with the canvas).")]
    [SerializeField] private float joystickSwipe = 120f;

    private enum Step { Wait, View, Move, Jump, Done }
    private Step step = Step.Wait;
    private Step nextStep = Step.View;
    private float clock, stepClock;
    private float lookStart, moveStart;
    private int jumpStart;
    private Vector3 handScale = Vector3.one;
    private Canvas canvas;

    public bool Done { get { return step == Step.Done; } }

    // The player went on without finishing (e.g. walked into the portal): stop the tutorial.
    public void Skip()
    {
        if (hand) hand.gameObject.SetActive(false);
        if (text && text.gameObject.activeSelf) text.Hide();
        step = Step.Done;
    }

    private void Awake()
    {
        Instance = this;
        if (hand) { handScale = hand.localScale; canvas = hand.GetComponentInParent<Canvas>(); hand.gameObject.SetActive(false); }
        if (text) text.gameObject.SetActive(false);
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    private void Begin(Step s)
    {
        step = s;
        stepClock = 0;
        if (look) lookStart = look.LookAccumulated;
        if (player) { moveStart = player.DistanceMoved; jumpStart = player.JumpCount; }
        if (hand) hand.gameObject.SetActive(true);
        if (text) text.Show(s == Step.View ? viewText : s == Step.Move ? moveText : jumpText);
    }

    private void Finish(Step next)
    {
        if (hand) hand.gameObject.SetActive(false);
        if (text) text.Hide();
        // Last step: done right away, so the story guide that follows does not wait for the step gap
        if (next == Step.Done) { step = Step.Done; return; }
        step = Step.Wait;
        nextStep = next;
        clock = startDelay - stepGap; // short gap before the next step
    }

    private void Update()
    {
        float dt = Time.deltaTime;
        switch (step)
        {
            case Step.Wait:
                clock += dt;
                if (clock < startDelay) return;
                if (nextStep == Step.Done) { step = Step.Done; return; }
                Begin(nextStep);
                break;
            case Step.View:
                if (look && look.LookAccumulated - lookStart >= lookDegrees) Finish(Step.Move);
                break;
            case Step.Move:
                if (player && player.DistanceMoved - moveStart >= moveDistance) Finish(jumpStep ? Step.Jump : Step.Done);
                break;
            case Step.Jump:
                if (player && player.JumpCount - jumpStart >= jumps) Finish(Step.Done);
                break;
        }
    }

    private void LateUpdate()
    {
        if (hand == null || !hand.gameObject.activeSelf) return;
        stepClock += Time.deltaTime;
        float scale = canvas ? canvas.scaleFactor : 1f;
        switch (step)
        {
            case Step.View:
            {
                if (viewFrom == null || viewTo == null) return;
                // back and forth, easing at both ends
                float u = Mathf.PingPong(stepClock / swipeDuration, 1f);
                u = u * u * (3 - 2 * u);
                hand.position = Vector3.Lerp(viewFrom.position, viewTo.position, u);
                hand.localRotation = Quaternion.Euler(0, 0, Mathf.Lerp(8f, -8f, u));
                hand.localScale = handScale;
                break;
            }
            case Step.Move:
            {
                if (joystickRing == null) return;
                // press on the ring, slide up, lift, come back
                float period = swipeDuration + 0.4f;
                float t = Mathf.Repeat(stepClock, period);
                Vector3 center = joystickRing.TransformPoint(joystickRing.rect.center);
                float slide = Mathf.Clamp01((t - 0.15f) / (swipeDuration * 0.6f));
                slide = slide * slide * (3 - 2 * slide);
                bool pressed = t > 0.1f && t < swipeDuration * 0.85f;
                hand.position = center + Vector3.up * joystickSwipe * scale * slide;
                hand.localRotation = Quaternion.identity;
                hand.localScale = handScale * (pressed ? 0.9f : 1f);
                break;
            }
            case Step.Jump:
            {
                if (jumpButton == null) return;
                float t = Mathf.Repeat(stepClock, 0.8f);
                float press = t < 0.25f ? t / 0.25f : t < 0.4f ? 1 - (t - 0.25f) / 0.15f : 0;
                hand.position = jumpButton.TransformPoint(jumpButton.rect.center) + Vector3.down * 10f * scale * press;
                hand.localRotation = Quaternion.identity;
                hand.localScale = handScale * (1 - 0.12f * press);
                break;
            }
        }
    }
}
