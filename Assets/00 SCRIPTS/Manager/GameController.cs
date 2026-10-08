using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShowComplete = 0.5f;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target = 1;
    [SerializeField] private TMP_Text progressText;
    [SerializeField] private TMP_Text collectText;
    [SerializeField] private GameObject _cta;
    [SerializeField] private List<Gift> gifts = new List<Gift>();
    [SerializeField] private CharacterCollect collect;
    [SerializeField] private TutController tut;

    [Header("Bridge Level")] [SerializeField]
    private Transform playerSpawn;

    [SerializeField] private Transform giftSpawn;
    [SerializeField] private GameObject failUI;
    [SerializeField] private CharacterMotor playerMotor;

    [Tooltip("Only landing contacts below this world height count as falling to the ground.")] [SerializeField]
    private float failHeight = 0f;

    private enum GameState
    {
        Playing,
        Completing,
        Complete,
        Failed
    }

    private GameState state;
    private Tween collectTween;
    private Tween hideCollectTween;
    private RectTransform failButton;
    private RectTransform failShine;
    private Vector3 failButtonScale;
    private Vector2 failShineStart;
    private Tween failButtonTween;
    private Tween failShineTween;

    public static GameController Ins { get; private set; }
    public Gift FirstGift => gifts != null && gifts.Count > 0 ? gifts[0] : null;
    public bool IsPlaying => state == GameState.Playing;
    public bool HasFailed => state == GameState.Failed;

    private void Awake()
    {
        if (Ins != null && Ins != this)
        {
            Destroy(gameObject);
            return;
        }

        Ins = this;
    }

    private void Start()
    {
        if (playerMotor == null && collect != null)
            playerMotor = collect.GetComponent<CharacterMotor>();

        Gift levelGift = FirstGift;
        gifts.Clear();
        if (levelGift != null)
        {
            gifts.Add(levelGift);
            levelGift.collectDone = false;
            if (giftSpawn != null)
                levelGift.transform.position = giftSpawn.position;
        }

        target = 1;
        currentProgress = 0;
        state = GameState.Playing;
        if (failUI != null) failUI.SetActive(false);
        if (_cta != null) _cta.SetActive(false);
        if (collectText != null) collectText.transform.localScale = Vector3.zero;
        if (playerSpawn != null && playerMotor != null)
            playerMotor.Teleport(playerSpawn.position, playerSpawn.rotation);
        UpdateProgress();
    }

    public void CheckLanding(Collision collision)
    {
        if (!IsPlaying || playerMotor == null || playerMotor.Body == null) return;
        // Wait for an actual landing: the motor's ground probe can report grounded
        // before contact, and a height check alone would stop the player in midair.
        int count = collision.contactCount;
        for (int i = 0; i < count; i++)
        {
            ContactPoint contact = collision.GetContact(i);
            if (contact.normal.y < 0.5f || contact.point.y >= failHeight) continue;
            Fail();
            return;
        }
    }

    public void Far()
    {
        if (IsPlaying && tut != null) tut.ShowFarTut();
    }

    public void Fail()
    {
        if (!IsPlaying) return;
        state = GameState.Failed;
        StopPlayer();
        if (failUI != null)
        {
            if (tut != null) tut.StopTut();
            failUI.SetActive(true);
        }
        else if (tut != null) tut.ShowFailTut();

        if (LunaController.Instance != null)
        {
            LunaController.Instance.EndGame(failUI);
        }
        else if (_cta != null) _cta.SetActive(true);
    }

    public void CollectGift(Gift gift)
    {
        if (!IsPlaying || gift == null || gift != FirstGift) return;
        // Lock the result immediately, including the delay before the CTA appears.
        state = GameState.Completing;
        gifts.Clear();
        currentProgress = 1;
        StopPlayer();
        UpdateProgress();
        if (collectText != null)
        {
            collectText.transform.localScale = Vector3.zero;
            collectTween = collectText.transform.DOScale(1.2f, 0.3f).SetEase(Ease.OutCubic)
                .OnComplete(() => collectTween = collectText.transform.DOScale(1f, 0.2f));
            hideCollectTween = DOVirtual.DelayedCall(1f,
                () =>
                {
                    if (collectText != null) collectText.transform.localScale = Vector3.zero;
                });
        }

        StartCoroutine(WaitForCollect(gift));
        StartCoroutine(ShowComplete());
    }

    private void Update()
    {
        bool showEffect = state == GameState.Failed && failUI != null && failUI.activeInHierarchy;
        if (showEffect && failButtonTween == null) StartFailButtonEffect();
        else if (!showEffect && failButtonTween != null) StopFailButtonEffect();
    }

    private void StartFailButtonEffect()
    {
        if (failButton == null)
        {
            // The TRY AGAIN artwork is the CTA child of the fail popup.
            failButton = failUI.transform.Find("CTA") as RectTransform;
            if (failButton == null) return;
            Image buttonImage = failButton.GetComponent<Image>();
            if (buttonImage == null) return;
            failButtonScale = failButton.localScale;

            Mask mask = failButton.GetComponent<Mask>();
            if (mask == null) mask = failButton.gameObject.AddComponent<Mask>();
            mask.showMaskGraphic = true;

            GameObject line = new GameObject("FailShine", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            line.layer = failButton.gameObject.layer;
            failShine = line.GetComponent<RectTransform>();
            failShine.SetParent(failButton, false);
            failShine.anchorMin = failShine.anchorMax = new Vector2(0.5f, 0.5f);
            failShine.pivot = new Vector2(0.5f, 0.5f);
            failShine.localRotation = Quaternion.Euler(0f, 0f, -24.92f);
            Image shineImage = line.GetComponent<Image>();
            shineImage.color = new Color(1f, 1f, 1f, 0.2f);
            shineImage.raycastTarget = false;
        }

        if (failShine == null) return;
        Canvas.ForceUpdateCanvases();
        float width = failButton.rect.width;
        float height = failButton.rect.height;
        float lineWidth = width * 0.15f;
        float lineHeight = height * 2f;
        failShine.sizeDelta = new Vector2(lineWidth, lineHeight);
        // Include the rotated stripe's extent so it restarts entirely outside the mask.
        float extent = (lineWidth * Mathf.Cos(24.92f * Mathf.Deg2Rad)
                        + lineHeight * Mathf.Sin(24.92f * Mathf.Deg2Rad)) * 0.5f;
        float center = failButton.rect.center.x;
        failShineStart = new Vector2(center - width * 0.5f - extent, failButton.rect.center.y);
        failShine.anchoredPosition = failShineStart;
        failShine.gameObject.SetActive(true);
        failButtonTween = failButton.DOScale(failButtonScale * 1.2f, 0.6f)
            .SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        failShineTween = failShine.DOAnchorPosX(center + width * 0.5f + extent, 0.8f)
            .SetEase(Ease.Linear).SetLoops(-1, LoopType.Restart);
    }

    private void StopFailButtonEffect()
    {
        failButtonTween?.Kill();
        failShineTween?.Kill();
        failButtonTween = null;
        failShineTween = null;
        if (failButton != null) failButton.localScale = failButtonScale;
        if (failShine != null)
        {
            failShine.anchoredPosition = failShineStart;
            failShine.gameObject.SetActive(false);
        }
    }

    private void OnDisable()
    {
        StopFailButtonEffect();
    }

    private void StopPlayer()
    {
        if (collect != null) collect.enabled = false;
        if (playerMotor == null) return;
        playerMotor.AutoRun(true, Vector3.zero);
        playerMotor.enabled = false;
        Rigidbody body = playerMotor.Body;
        if (body == null) return;
        body.linearVelocity = Vector3.zero;
        body.angularVelocity = Vector3.zero;
        body.isKinematic = true;
    }

    private IEnumerator WaitForCollect(Gift gift)
    {
        yield return new WaitUntil(() => gift == null || gift.collectDone);
        if (gift != null) gift.RemoveGift();
    }

    private void UpdateProgress()
    {
        if (progressText != null) progressText.text = $"{currentProgress}/{target}";
    }

    private IEnumerator ShowComplete()
    {
        yield return new WaitForSeconds(timeToShowComplete);
        if (state != GameState.Completing) yield break;
        state = GameState.Complete;
        if (tut != null) tut.StopTut();
        if (LunaController.Instance != null) LunaController.Instance.EndCard();
        else if (_cta != null) _cta.SetActive(true);
    }

    private void OnDestroy()
    {
        StopFailButtonEffect();
        collectTween?.Kill();
        hideCollectTween?.Kill();
        if (Ins == this) Ins = null;
    }
}