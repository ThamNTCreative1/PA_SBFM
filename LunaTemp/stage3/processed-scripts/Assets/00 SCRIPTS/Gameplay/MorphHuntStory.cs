using System.Collections;
using UnityEngine;

// Playable storyline (farm): one morph on top of the haystack.
// 1. After the controls tutorial the camera turns straight at the morph once the player has landed, then
//    "Look! A Morph is There!" and the guide arrow to the morph; the hand and a guide
//    label point at the wheelbarrow (the step up onto the haystack).
// 2. Up close to the morph (same height, near it): "Almost There!".
// 3. Touching it: flash + the source game's found popup (Morph button), the HUD counter goes up by one. When the
//    popup closes, the "MORPH UNLOCKED!" screen shows the morph(s) found, then the end UI + end card.
// Works with any number of morphs: after each one (but the last) the camera turns to the next.
public class MorphHuntStory : MonoBehaviour
{
    public static MorphHuntStory Instance { get; private set; }

    [Header("Scene")]
    [SerializeField] private FMCharacter player;
    [SerializeField] private FM3rdInput look;
    [Tooltip("The hidden morphs, in the order the guide shows them.")]
    [SerializeField] private HiddenMonster[] morphs = new HiddenMonster[1];
    [Tooltip("Morphs that LunaController.TypeMorph picks from for the first spot (index = type value).")]
    [SerializeField] private MonsterSO[] morphOptions = new MonsterSO[0];

    [Header("Start view")]
    [Tooltip("At the start the camera looks towards this point (e.g. the morph on the haystack).")]
    [SerializeField] private Transform startLookAt;
    [Tooltip("Camera pitch at the start; negative looks up.")]
    [SerializeField] private float startPitch = -15f;

    [Header("Feedback")]
    [SerializeField] private PointerHand hand;
    [Tooltip("Where the hand taps, from the target's position (target's orientation).")]
    [SerializeField] private Vector3 handOffset = new Vector3(0, 1.5f, 0);
    [Tooltip("Optional: the hand points here instead of at the morph (e.g. the wheelbarrow to climb on).")]
    [SerializeField] private Transform guideAnchor;
    [Tooltip("Optional: where the guide arrow ends while it leads to the guide anchor (e.g. the ground under the wheelbarrow).")]
    [SerializeField] private Transform arrowAnchor;
    [Tooltip("Optional world label shown with the hand at the guide anchor (built in the scene).")]
    [SerializeField] private GameObject guideLabel;
    [SerializeField] private StoryTextView storyText;
    [Tooltip("Text shown above the found popup when a morph is unlocked (its own canvas above the popup).")]
    [SerializeField] private StoryTextView unlockText;
    [SerializeField] private ShineBurst shine;
    [Tooltip("Shown at the end: the morph icons + text (built in the scene).")]
    [SerializeField] private PlayableFrame finalPanel;

    [Header("Texts")]
    [SerializeField] private string introText = "Look! A Morph is There!";
    [Tooltip("Shown once the player is up close to the morph. Empty = none.")]
    [SerializeField] private string almostText = "Almost There!";
    [Tooltip("{0} = morphs unlocked, {1} = total. Empty = no text over the found popup.")]
    [SerializeField] private string unlockedFormat = "";
    [SerializeField] private string oneMoreText = "ONE MORE TO FIND!";

    [Header("Timing")]
    [SerializeField] private float introDelay = 0.2f;
    [SerializeField] private float handHideDistance = 6f;
    [Tooltip("\"Almost There!\": horizontal distance to the morph...")]
    [SerializeField] private float almostDistance = 9f;
    [Tooltip("...with the player's feet at most this far below the morph's feet.")]
    [SerializeField] private float almostHeight = 0.5f;
    [SerializeField] private float cameraTurnDuration = 1.2f;
    [SerializeField] private float finalDuration = 2.5f;

    private enum Step { Intro, Hunt, Unlocking, Final }
    private Step step = Step.Intro;
    private float clock;
    private int unlocked;
    private Transform target;
    private bool almostShown;
    private bool arrowOnAnchor;
    [Tooltip("The arrow switches from the wheelbarrow to the morph once the player stands no lower than this below the guide anchor.")]
    [SerializeField] private float arrowSwitchBelow = 0.4f;

    private void Awake()
    {
        Instance = this;
        if (hand) hand.gameObject.SetActive(false);
        if (guideLabel) guideLabel.SetActive(false);
        if (shine) shine.gameObject.SetActive(false);
        // Texts/panels may be left switched on in the scene while editing them: start hidden.
        if (storyText) storyText.gameObject.SetActive(false);
        if (unlockText) unlockText.gameObject.SetActive(false);
        if (finalPanel) finalPanel.gameObject.SetActive(false);
        ApplyMorphType();
    }

    // Puts the morph chosen in LunaController (TypeMorph) at the first hidden spot. Runs in Awake, before
    // HiddenMonster.Start reads its name to find its MonsterSO.
    private void ApplyMorphType()
    {
        if (morphOptions == null || morphOptions.Length == 0 || morphs == null || morphs.Length == 0) return;
        LunaController luna = LunaController.Instance ? LunaController.Instance : FindObjectOfType<LunaController>();
        if (luna == null) return;
        int type = Mathf.Clamp(luna.TypeMorph, 0, morphOptions.Length - 1);
        SetMorph(morphs[0], morphOptions[type]);
    }

    private static void SetMorph(HiddenMonster spot, MonsterSO so)
    {
        if (spot == null || so == null || so.prefab == null) return;
        if (spot.gameObject.name == so.id) return; // already this morph in the scene
        spot.gameObject.name = so.id;
        Transform view = spot.transform.Find("View");
        if (view == null) view = spot.transform;
        for (int i = view.childCount - 1; i >= 0; i--)
        {
            GameObject old = view.GetChild(i).gameObject;
            old.SetActive(false);
            Destroy(old);
        }
        GameObject model = Instantiate(so.prefab, view);
        model.transform.localPosition = Vector3.zero;
        model.transform.localRotation = Quaternion.identity;
        Animator animator = model.GetComponent<Animator>();
        if (animator) animator.enabled = false;

        // trigger box around the new model (local space of the spot)
        BoxCollider box = spot.GetComponent<BoxCollider>();
        Renderer[] renderers = model.GetComponentsInChildren<Renderer>();
        if (box == null || renderers.Length == 0) return;
        Bounds b = new Bounds(spot.transform.InverseTransformPoint(renderers[0].bounds.center), Vector3.zero);
        for (int i = 0; i < renderers.Length; i++)
        {
            Bounds rb = renderers[i].bounds;
            b.Encapsulate(spot.transform.InverseTransformPoint(rb.min));
            b.Encapsulate(spot.transform.InverseTransformPoint(rb.max));
        }
        box.center = b.center;
        box.size = new Vector3(Mathf.Max(3f, b.size.x + 1f), Mathf.Max(4f, b.size.y + 1f), Mathf.Max(3f, b.size.z + 1f));
    }

    private void Start()
    {
        if (look && startLookAt && player)
        {
            Vector3 d = startLookAt.position - player.transform.position; d.y = 0;
            if (d.sqrMagnitude > 0.0001f) look.SetView(Quaternion.LookRotation(d).eulerAngles.y, startPitch);
        }
    }

    // After the controls tutorial the view may point anywhere: turn it straight at the morph.
    private void TurnToMorph(Transform morph)
    {
        if (look == null || player == null || morph == null) return;
        Vector3 d = morph.position - player.transform.position; d.y = 0;
        if (d.sqrMagnitude < 0.0001f) return;
        look.TurnTo(Quaternion.LookRotation(d).eulerAngles.y, startPitch, cameraTurnDuration);
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    private void Update()
    {
        clock += Time.deltaTime;
        switch (step)
        {
            case Step.Intro:
                // the hunt starts only after the controls tutorial (view -> move -> jump)
                if (ControlsTutorial.Instance && !ControlsTutorial.Instance.Done) { clock = 0; return; }
                // the tutorial ends with a jump: wait until the player has landed before turning the camera
                if (player && !player.IsGrounded()) { clock = 0; return; }
                if (clock < introDelay) return;
                if (storyText) storyText.Show(introText);
                HiddenMonster first = NextMorph();
                if (first) TurnToMorph(first.transform);
                GuideTo(first);
                step = Step.Hunt;
                break;
            case Step.Hunt:
                if (player == null || target == null) return;
                Vector3 p = player.transform.position;
                // up on the wheelbarrow (or anywhere above the ground at its height): the arrow now points at the morph
                if (arrowOnAnchor && guideAnchor && player.IsGrounded() && p.y > guideAnchor.position.y - arrowSwitchBelow)
                {
                    arrowOnAnchor = false;
                    if (TurtorialArrow.Instance) TurtorialArrow.Instance.StartDraw(target, player.transform);
                }
                // Right at the hand's target the hand would cover the player: hide it (and its label).
                Transform handTarget = guideAnchor ? guideAnchor : target;
                if (hand && hand.gameObject.activeSelf && (p - handTarget.position).magnitude < handHideDistance) HideGuide();
                if (!almostShown && !string.IsNullOrEmpty(almostText))
                {
                    Vector3 d = target.position - p; d.y = 0;
                    // standing on the morph's level (landed on the haystack), not just jumping past it
                    if (d.magnitude < almostDistance && p.y > target.position.y - almostHeight && player.IsGrounded())
                    {
                        almostShown = true;
                        HideGuide();
                        if (storyText) storyText.Show(almostText);
                    }
                }
                break;
        }
    }

    private HiddenMonster NextMorph()
    {
        for (int i = 0; i < morphs.Length; i++)
            if (morphs[i] && !morphs[i].Obtained) return morphs[i];
        return null;
    }

    private void GuideTo(HiddenMonster morph)
    {
        target = morph ? morph.transform : null;
        if (target == null || player == null) return;
        // the wheelbarrow guide is only for the first morph
        Transform handTarget = guideAnchor && unlocked == 0 ? guideAnchor : target;
        // the guide arrow first leads to the wheelbarrow; once the player stands on it, to the morph
        arrowOnAnchor = handTarget == guideAnchor;
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StartDraw(arrowOnAnchor ? (arrowAnchor ? arrowAnchor : guideAnchor) : target, player.transform);
        if (hand) hand.Point(handTarget, handOffset);
        if (guideLabel && handTarget == guideAnchor) guideLabel.SetActive(true);
    }

    private void HideGuide()
    {
        if (hand) hand.Hide();
        if (guideLabel) guideLabel.SetActive(false);
    }

    private bool IsMorph(HiddenMonster monster)
    {
        for (int i = 0; i < morphs.Length; i++) if (morphs[i] == monster) return true;
        return false;
    }

    // Called by FindMonsterManager when a monster is collected. Returns false: the source game's found popup (Morph
    // button) still opens; the story adds the flash (and the optional unlock text) and goes on once it closes.
    public bool HandleCollected(HiddenMonster monster)
    {
        if (monster == null || !IsMorph(monster)) return false;
        unlocked++;
        step = Step.Unlocking;
        HideGuide();
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StopDraw();
        if (shine) shine.Play(monster.transform.position + Vector3.up * 1f);
        if (storyText) storyText.Hide();
        if (unlockText && !string.IsNullOrEmpty(unlockedFormat)) unlockText.Show(string.Format(unlockedFormat, unlocked, morphs.Length));
        StartCoroutine(AfterUnlock());
        return false;
    }

    private IEnumerator AfterUnlock()
    {
        yield return null; // the found popup opens this frame
        while (PlayableFrame.OpenCount > 0) yield return null;
        if (unlockText) unlockText.Hide();

        HiddenMonster next = NextMorph();
        if (next)
        {
            // Turn the view towards the next morph, then guide the player there
            if (look) look.LookTowards(next.transform.position, cameraTurnDuration);
            if (storyText) storyText.Show(oneMoreText);
            almostShown = false;
            GuideTo(next);
            step = Step.Hunt;
            yield break;
        }

        // All found: show them together, then the end UI + end card (CTA)
        step = Step.Final;
        if (player) player.InputEnabled = false;
        MorphUnlockedPanel unlockedPanel = finalPanel as MorphUnlockedPanel;
        if (unlockedPanel)
        {
            MonsterSO[] found = new MonsterSO[morphs.Length];
            for (int i = 0; i < morphs.Length; i++) found[i] = morphs[i] ? morphs[i].MonsterSo : null;
            unlockedPanel.Setup(found);
        }
        // no final panel set: the end UI follows the found popup right away
        if (finalPanel)
        {
            finalPanel.Show();
            yield return new WaitForSeconds(finalDuration);
            finalPanel.Hide();
        }
        if (LunaController.Instance) LunaController.Instance.ShowEndUI();
    }
}
