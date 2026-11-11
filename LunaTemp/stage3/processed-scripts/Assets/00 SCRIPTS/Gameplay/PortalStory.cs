using System.Collections;
using UnityEngine;

// Playable storyline:
// 1. Start in front of the purple portal; a hand points at it: "ONE MORE MORPH AWAITS!".
// 2. Near the portal it glows and an energy swirl starts: "ENTER THE PORTAL!".
// 3. Through the portal (screen transition) the player lands on the moon; a secret morph appears in front of them
//    and the guide arrow under the player's feet points to it.
// 4. Touching it collects it like any monster in the source game (found popup, Morph button) plus a flash, with
//    "SECRET MORPH UNLOCKED!" on screen above the popup; after Morph, the end card.
public class PortalStory : MonoBehaviour
{
    public static PortalStory Instance { get; private set; }

    [Header("Scene")]
    [SerializeField] private FMCharacter player;
    [SerializeField] private TeleportPortal portal;
    [Tooltip("Portal root (distance test and hand anchor).")]
    [SerializeField] private Transform portalAnchor;
    [SerializeField] private PortalGlow portalGlow;
    [SerializeField] private HiddenMonster secretMonster;
    [Tooltip("Child of the secret monster that pops in when it appears.")]
    [SerializeField] private Transform secretModel;

    [Header("Feedback")]
    [SerializeField] private PointerHand hand;
    [Tooltip("Hand position from the portal root, in the portal's orientation (z = towards the front/player side).")]
    [SerializeField] private Vector3 portalHandOffset = new Vector3(0, 1f, 3f);
    [SerializeField] private StoryTextView storyText;
    [Tooltip("Text shown on top of the found popup when the secret morph is collected (its own canvas above the popup).")]
    [SerializeField] private StoryTextView unlockTextView;
    [SerializeField] private ShineBurst shine;
    [Tooltip("Prefab played where the secret morph appears.")]
    [SerializeField] private ParticleSystem appearFx;

    [Header("Texts")]
    [SerializeField] private string awaitText = "ONE MORE MORPH AWAITS!";
    [SerializeField] private string enterText = "ENTER THE PORTAL!";
    [SerializeField] private string unlockedText = "SECRET MORPH UNLOCKED!";

    [Header("Timing")]
    [SerializeField] private float introDelay = 0.8f;
    [SerializeField] private float nearDistance = 12f;
    [SerializeField] private float handHideDistance = 5f;
    [SerializeField] private float appearDuration = 0.5f;
    [SerializeField] private float endCardDelay = 2f;

    private enum Step { Intro, GoToPortal, EnterPortal, FindSecret, Unlocked }
    private Step step = Step.Intro;
    private float clock;
    private Vector3 secretModelScale = Vector3.one;

    private void Awake()
    {
        Instance = this;
        FindMonsterEvent.Teleported += OnTeleported;
        FindMonsterEvent.TeleportStarted += OnTeleportStarted;
        if (secretModel) secretModelScale = secretModel.localScale;
        if (secretMonster) secretMonster.gameObject.SetActive(false);
        if (hand) hand.gameObject.SetActive(false);
        if (shine) shine.gameObject.SetActive(false);
        // Texts may be left switched on in the scene while editing them: start hidden.
        if (storyText) storyText.gameObject.SetActive(false);
        if (unlockTextView) unlockTextView.gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        FindMonsterEvent.Teleported -= OnTeleported;
        FindMonsterEvent.TeleportStarted -= OnTeleportStarted;
        if (Instance == this) Instance = null;
    }

    private void Update()
    {
        clock += Time.deltaTime;
        switch (step)
        {
            case Step.Intro:
                // the portal guide starts only after the controls tutorial (view -> move -> jump)
                if (ControlsTutorial.Instance && !ControlsTutorial.Instance.Done) { clock = 0; return; }
                if (clock < introDelay) return;
                if (hand && portalAnchor) hand.Point(portalAnchor, portalHandOffset);
                if (storyText) storyText.Show(awaitText);
                if (TurtorialArrow.Instance && portalAnchor && player && !TurtorialArrow.Instance.Active)
                    TurtorialArrow.Instance.StartDraw(portalAnchor, player.transform);
                step = Step.GoToPortal;
                break;
            case Step.GoToPortal:
                if (player == null || portalAnchor == null) return;
                Vector3 d = player.transform.position - portalAnchor.position; d.y = 0;
                if (d.magnitude > nearDistance) return;
                if (portalGlow) portalGlow.Activate();
                if (storyText) storyText.Show(enterText);
                step = Step.EnterPortal;
                break;
            case Step.EnterPortal:
                // Right at the portal the hand would cover the player: hide it.
                if (hand && hand.gameObject.activeSelf && player && portalAnchor)
                {
                    Vector3 e = player.transform.position - portalAnchor.position; e.y = 0;
                    if (e.magnitude < handHideDistance) hand.Hide();
                }
                break;
        }
    }

    // The hand and the controls tutorial go away as soon as the player steps into a portal; the story text stays
    // (the transition covers it) and reads "ONE MORE MORPH AWAITS!" again on arrival.
    private void OnTeleportStarted(TeleportPortal used)
    {
        if (hand) hand.Hide();
        if (used == portal && ControlsTutorial.Instance && !ControlsTutorial.Instance.Done) ControlsTutorial.Instance.Skip();
    }

    private void OnTeleported(TeleportPortal used)
    {
        // Back from the moon without the secret morph: the start-of-game guide runs again
        // (hand + "ONE MORE MORPH AWAITS!", guide arrow to the portal, glow when near).
        if (step == Step.FindSecret && used != portal)
        {
            if (TurtorialArrow.Instance) TurtorialArrow.Instance.StopDraw();
            if (TurtorialArrow.Instance && portalAnchor && player) TurtorialArrow.Instance.StartDraw(portalAnchor, player.transform);
            if (portalGlow) portalGlow.Deactivate();
            clock = 0;
            step = Step.Intro;
            return;
        }
        // Entering the portal counts at any point before the unlock, even before its guide has started.
        if (step != Step.Intro && step != Step.GoToPortal && step != Step.EnterPortal) return;
        if (used != portal) return;
        // On the moon the goal text stays on screen until the secret morph is unlocked
        if (storyText) storyText.Show(awaitText);
        if (portalGlow) portalGlow.Deactivate();
        if (hand) hand.Hide();
        if (TurtorialArrow.Instance && TurtorialArrow.Instance.CurrentTarget == portalAnchor) TurtorialArrow.Instance.StopDraw();
        step = Step.FindSecret;
        StartCoroutine(AppearRoutine());
    }

    private IEnumerator AppearRoutine()
    {
        if (secretMonster == null) yield break;
        // Second visit: the secret morph is already there, only the guide arrow comes back
        if (secretMonster.gameObject.activeSelf)
        {
            if (TurtorialArrow.Instance && player) TurtorialArrow.Instance.StartDraw(secretMonster.transform, player.transform);
            yield break;
        }
        secretMonster.gameObject.SetActive(true);
        if (appearFx)
        {
            // Luna can only clone GameObjects (or script components), not a ParticleSystem reference
            GameObject fx = Instantiate(appearFx.gameObject, secretMonster.transform.position, secretMonster.transform.rotation);
            ParticleSystem ps = fx.GetComponent<ParticleSystem>();
            if (ps) ps.Play();
            Destroy(fx, 3f);
        }
        float t = 0;
        while (t < appearDuration)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / appearDuration);
            const float c1 = 1.70158f, c3 = c1 + 1f;
            float e = 1 + c3 * Mathf.Pow(k - 1, 3) + c1 * Mathf.Pow(k - 1, 2);
            if (secretModel) secretModel.localScale = secretModelScale * Mathf.LerpUnclamped(0f, 1f, e);
            yield return null;
        }
        if (secretModel) secretModel.localScale = secretModelScale;
        // On the moon the guide is the arrow line under the player's feet (not the hand)
        if (step == Step.FindSecret && TurtorialArrow.Instance && player)
            TurtorialArrow.Instance.StartDraw(secretMonster.transform, player.transform);
    }

    // Called by FindMonsterManager when a monster is collected. Returns false: collecting keeps the source game's
    // gameplay (the "found" popup with its Morph button, check mark, stars). For the secret morph the story only adds
    // the flash + "SECRET MORPH UNLOCKED!" and shows the end card once the popup is closed.
    public bool HandleCollected(HiddenMonster monster)
    {
        if (monster == null || monster != secretMonster) return false;
        step = Step.Unlocked;
        if (hand) hand.Hide();
        if (shine) shine.Play(monster.transform.position + monster.transform.up * 1f);
        if (storyText) storyText.Hide();
        if (unlockTextView) unlockTextView.Show(unlockedText);
        StartCoroutine(UnlockRoutine());
        return false;
    }

    private IEnumerator UnlockRoutine()
    {
        yield return null; // the found popup opens this frame
        while (PlayableFrame.OpenCount > 0) yield return null;
        // Popup closed with its Morph button: the player morphs; end card after a moment.
        if (unlockTextView) unlockTextView.Hide();
        yield return new WaitForSeconds(endCardDelay);
        if (player) player.InputEnabled = false;
        if (LunaController.Instance) LunaController.Instance.ShowEndUI();
    }
}
