using System.Collections;
using UnityEngine;

// Playable storyline (Egypt): two hidden morphs.
// 1. After the controls tutorial: "2 HIDDEN MORPHS! FIND THEM ALL!", guide arrow (and hand, if one is set) to
//    the first morph, high up near the sphinx's head.
// 2. Touching it: flash + "MORPH UNLOCKED! 1/2" over the source game's found popup (Morph button). When the popup
//    closes the camera turns towards the second morph on the sphinx's body: "ONE MORE TO FIND!".
// 3. Touching the second: flash + "MORPH UNLOCKED! 2/2" + popup; then both morphs are shown on screen with
//    "YOU FOUND BOTH! CAN YOU FIND MORE?" and the end card (CTA) follows.
// The morphs can be found in any order; the texts follow the count.
public class MorphHuntStory : MonoBehaviour
{
    public static MorphHuntStory Instance { get; private set; }

    [Header("Scene")]
    [SerializeField] private FMCharacter player;
    [SerializeField] private FM3rdInput look;
    [Tooltip("The two hidden morphs, in the order the guide shows them.")]
    [SerializeField] private HiddenMonster[] morphs = new HiddenMonster[2];
    [Tooltip("Morphs that LunaController.TypeMorph1/TypeMorph2 pick from (index = type value).")]
    [SerializeField] private MonsterSO[] morphOptions = new MonsterSO[0];

    [Header("Start view")]
    [Tooltip("At the start the camera looks towards this point (e.g. the first morph on top of the pyramid).")]
    [SerializeField] private Transform startLookAt;
    [Tooltip("Camera pitch at the start; negative looks up.")]
    [SerializeField] private float startPitch = -15f;

    [Header("Feedback")]
    [SerializeField] private PointerHand hand;
    [Tooltip("Where the hand's finger taps, from the morph's position (world axes).")]
    [SerializeField] private Vector3 handOffset = new Vector3(0, 1.5f, 0);
    [SerializeField] private StoryTextView storyText;
    [Tooltip("Text shown above the found popup when a morph is unlocked (its own canvas above the popup).")]
    [SerializeField] private StoryTextView unlockText;
    [SerializeField] private ShineBurst shine;
    [Tooltip("Shown at the end: both morph icons + text (built in the scene).")]
    [SerializeField] private PlayableFrame finalPanel;

    [Header("Texts")]
    [SerializeField] private string introText = "2 HIDDEN MORPHS! FIND THEM ALL!";
    [Tooltip("{0} = morphs unlocked, {1} = total")]
    [SerializeField] private string unlockedFormat = "MORPH UNLOCKED! {0}/{1}";
    [SerializeField] private string oneMoreText = "ONE MORE TO FIND!";

    [Header("Timing")]
    [SerializeField] private float introDelay = 0.2f;
    [SerializeField] private float handHideDistance = 6f;
    [SerializeField] private float cameraTurnDuration = 1.2f;
    [SerializeField] private float finalDuration = 2.5f;

    private enum Step { Intro, Hunt, Unlocking, Final }
    private Step step = Step.Intro;
    private float clock;
    private int unlocked;
    private Transform target;


    private void Awake()
    {
        Instance = this;
        if (hand) hand.gameObject.SetActive(false);
        if (shine) shine.gameObject.SetActive(false);
        // Texts/panels may be left switched on in the scene while editing them: start hidden.
        if (storyText) storyText.gameObject.SetActive(false);
        if (unlockText) unlockText.gameObject.SetActive(false);
        if (finalPanel) finalPanel.gameObject.SetActive(false);
        ApplyMorphTypes();
    }

    // Puts the morphs chosen in LunaController (TypeMorph1/2) at the two hidden spots. Runs in Awake, before
    // HiddenMonster.Start reads its name to find its MonsterSO.
    private void ApplyMorphTypes()
    {
        if (morphOptions == null || morphOptions.Length == 0) return;
        LunaController luna = LunaController.Instance ? LunaController.Instance : FindObjectOfType<LunaController>();
        if (luna == null) return;
        int first = Mathf.Clamp(luna.TypeMorph1, 0, morphOptions.Length - 1);
        int second = Mathf.Clamp(luna.TypeMorph2, 0, morphOptions.Length - 1);
        // the same morph twice would count as one: take the next one for the second spot
        if (second == first) second = (first + 1) % morphOptions.Length;
        if (morphs.Length > 0) SetMorph(morphs[0], morphOptions[first]);
        if (morphs.Length > 1) SetMorph(morphs[1], morphOptions[second]);
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

    private void OnDestroy() { if (Instance == this) Instance = null; }

    private void Update()
    {
        clock += Time.deltaTime;
        switch (step)
        {
            case Step.Intro:
                // the hunt starts only after the controls tutorial (view -> move -> jump)
                if (ControlsTutorial.Instance && !ControlsTutorial.Instance.Done) { clock = 0; return; }
                if (clock < introDelay) return;
                if (storyText) storyText.Show(introText);
                GuideTo(NextMorph());
                step = Step.Hunt;
                break;
            case Step.Hunt:
                // Right at the morph the hand would cover the player: hide it.
                if (hand && hand.gameObject.activeSelf && target && player
                    && (player.transform.position - target.position).magnitude < handHideDistance) hand.Hide();
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
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StartDraw(target, player.transform);
        if (hand) hand.Point(target, handOffset);
    }

    private bool IsMorph(HiddenMonster monster)
    {
        for (int i = 0; i < morphs.Length; i++) if (morphs[i] == monster) return true;
        return false;
    }

    // Called by FindMonsterManager when a monster is collected. Returns false: the source game's found popup (Morph
    // button) still opens; the story adds the flash and the "MORPH UNLOCKED! x/2" text and goes on once it closes.
    public bool HandleCollected(HiddenMonster monster)
    {
        if (monster == null || !IsMorph(monster)) return false;
        unlocked++;
        step = Step.Unlocking;
        if (hand) hand.Hide();
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StopDraw();
        if (shine) shine.Play(monster.transform.position + Vector3.up * 1f);
        if (storyText) storyText.Hide();
        if (unlockText) unlockText.Show(string.Format(unlockedFormat, unlocked, morphs.Length));
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
            GuideTo(next);
            step = Step.Hunt;
            yield break;
        }

        // Both found: show them together, then the end card (CTA)
        step = Step.Final;
        if (player) player.InputEnabled = false;
        MorphUnlockedPanel unlockedPanel = finalPanel as MorphUnlockedPanel;
        if (unlockedPanel && morphs.Length > 1 && morphs[0] && morphs[1]) unlockedPanel.Setup(morphs[0].MonsterSo, morphs[1].MonsterSo);
        if (finalPanel) finalPanel.Show();
        yield return new WaitForSeconds(finalDuration);
        if (finalPanel) finalPanel.Hide();
        if (LunaController.Instance) LunaController.Instance.ShowEndUI();
    }
}
