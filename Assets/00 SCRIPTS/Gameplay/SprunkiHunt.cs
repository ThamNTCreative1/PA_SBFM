using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// Game flow: the Sprunki collection opens first; the player selects the Sprunki to find and goes looking for it.
// Finding it shows "You Found It" (Continue), finding another one shows "Fail" (Try Again). Both buttons use the same
// number of plays (LunaController.CountPlay, if LimitCountPlay): with plays left the collection opens again,
// otherwise the end card. Without the limit the game goes on until every Sprunki is found.
public class SprunkiHunt : MonoBehaviour
{
    public static SprunkiHunt Instance { get; private set; }

    [Header("Player")]
    [SerializeField] private FMCharacter player;
    [Tooltip("On: the player goes back to startPoint at every new round. Off: the player stays where it is (after a Fail the player always goes back).")]
    [SerializeField] private bool resetPlayerPosition = false;
    [SerializeField] private Transform startPoint;

    [Header("Collection")]
    [SerializeField] private PlayableFrame collection;
    [SerializeField] private List<SprunkiCard> cards = new List<SprunkiCard>();

    [Header("HUD: the Sprunki to find")]
    [SerializeField] private GameObject targetView;
    [SerializeField] private Image targetIcon;
    [SerializeField] private TMP_Text targetName;

    [Header("Results")]
    [SerializeField] private PlayableFrame foundPanel;
    [SerializeField] private Image foundIcon;
    [SerializeField] private TMP_Text foundName;
    [SerializeField] private PlayableFrame failPanel;
    [SerializeField] private Image failIcon;
    [SerializeField] private TMP_Text failName;
    [SerializeField] private FMAudio foundSound;
    [SerializeField] private FMAudio failSound;
    [Tooltip("Paper confetti fired from both sides when the Sprunki is found.")]
    [SerializeField] private ConfettiBurst confetti;

    [Header("Guide")]
    [Tooltip("Draw the guide line to the selected Sprunki (after the controls tutorial).")]
    [SerializeField] private bool guideToTarget = true;
    [Tooltip("Shown with the guide line while the selected Sprunki is not found yet.")]
    [SerializeField] private StoryTextView followText;
    [SerializeField] private string followMessage = "FOLLOW THE ARROW!";

    [Header("Horror")]
    [Tooltip("Finding a horror Sprunki turns the sky to horror when Continue is pressed.")]
    [SerializeField] private HorrorSky horrorSky;

    private MonsterSO target;
    private bool hunting;
    private bool guidePending;
    private int played;
    private HiddenMonster wrongOne;
    private MonsterSO lastFound;
    private bool followDone; // "Follow the arrow" stops once a Sprunki has been found right

    public bool Hunting { get { return hunting; } }
    public MonsterSO Target { get { return target; } }

    private void Awake()
    {
        Instance = this;
        for (int i = 0; i < cards.Count; i++)
            if (cards[i]) cards[i].onSelect = Select;
        if (foundPanel) foundPanel.gameObject.SetActive(false);
        if (failPanel) failPanel.gameObject.SetActive(false);
        if (targetView) targetView.SetActive(false);
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    private void Start()
    {
        ShowCollection();
    }

    private void ShowCollection()
    {
        hunting = false;
        guidePending = false;
        target = null;
        if (player) player.InputEnabled = false;
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StopDraw();
        if (targetView) targetView.SetActive(false);
        for (int i = 0; i < cards.Count; i++)
            if (cards[i]) cards[i].Refresh();
        if (collection) collection.Show();
    }

    private void Select(SprunkiCard card)
    {
        if (card == null || card.Monster == null) return;
        target = card.Monster;
        if (collection) collection.Hide();
        if (targetView) targetView.SetActive(true);
        if (targetIcon) targetIcon.sprite = target.icon;
        if (targetName) targetName.text = target.displayName;
        if (player) player.InputEnabled = true;
        hunting = true;
        // Luna "Max Click": taps on the screen count from the first Select on
        if (LunaController.Instance) LunaController.Instance.StartClickCount();
        guidePending = guideToTarget;
    }

    private void Update()
    {
        if (!guidePending || !hunting) return;
        if (ControlsTutorial.Instance && !ControlsTutorial.Instance.Done) return;
        guidePending = false;
        HiddenMonster m = FindMonsterManager.Instance ? FindMonsterManager.Instance.GetMonster(target) : null;
        if (m && player && TurtorialArrow.Instance) TurtorialArrow.Instance.StartDraw(m.transform, player.transform);
        if (followText && !followDone) followText.Show(followMessage);
    }

    // Called by FindMonsterManager when the player touches a hidden Sprunki. Returns true: the result is shown here.
    public bool HandleCollected(HiddenMonster monster)
    {
        if (monster == null) return false;
        hunting = false;
        guidePending = false;
        played++;
        if (TurtorialArrow.Instance) TurtorialArrow.Instance.StopDraw();
        if (player) player.InputEnabled = false;
        if (targetView) targetView.SetActive(false);
        if (followText) followText.Hide();

        MonsterSO so = monster.MonsterSo;
        if (so != null && so == target)
        {
            if (foundIcon) foundIcon.sprite = so.icon;
            if (foundName) foundName.text = so.displayName;
            lastFound = so;
            followDone = true;
            if (foundPanel) foundPanel.Show();
            if (confetti) confetti.Play();
            foundSound.Play();
            FindMonsterEvent.DispatchMonsterFound(so);
        }
        else
        {
            // Fail: Try Again puts this Sprunki back to hidden (not counted) and the player back to the start
            wrongOne = monster;
            if (failIcon) failIcon.sprite = so != null ? so.icon : null;
            if (failName) failName.text = so != null ? so.displayName : "";
            if (failPanel) failPanel.Show();
            failSound.Play();
        }
        // No plays left: the end card shows right away, together with the popup
        if (IsLastPlay() && LunaController.Instance) LunaController.Instance.EndGame();
        return true;
    }

    // Continue (You Found It) and Try Again (Fail) buttons.
    public void NextRound()
    {
        PlayableAudio.PlayButtonClick();
        if (foundPanel) foundPanel.Hide();
        if (failPanel) failPanel.Hide();
        // Continue: the player morphs into the Sprunki just found
        if (lastFound != null) FindMonsterEvent.DispatchMorph(lastFound);
        // Continue: a horror Sprunki turns the sky to horror, any other Sprunki brings the normal sky back
        if (lastFound != null && horrorSky)
        {
            if (horrorSky.IsHorrorMonster(lastFound)) horrorSky.StartHorror();
            else horrorSky.StopHorror();
        }
        lastFound = null;
        bool failed = wrongOne != null;
        if ((failed || resetPlayerPosition) && player && startPoint) player.SetPosition(startPoint.position);
        if (failed) { wrongOne.ResetCollected(); wrongOne = null; }

        if (IsLastPlay())
        {
            if (LunaController.Instance) LunaController.Instance.EndGame();
            return;
        }
        ShowCollection();
    }

    private bool IsLastPlay()
    {
        LunaController luna = LunaController.Instance;
        // CountPlay = how many times the player can play again after the first round (2 -> 3 rounds in all)
        bool outOfPlays = luna != null && luna.LimitCountPlay && played > luna.CountPlay;
        return outOfPlays || !AnyLeft();
    }

    private bool AnyLeft()
    {
        for (int i = 0; i < cards.Count; i++)
            if (cards[i] && cards[i].Monster && !cards[i].Found) return true;
        return false;
    }
}
