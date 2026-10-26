using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    public static LunaController Instance;

    [LunaPlaygroundField("Limit Time Play?")]
    public bool LimitTimePlay;

    [LunaPlaygroundField("Time Play")]
    public float TimePlay;

    [SerializeField] private List<Image> images;
    [SerializeField] private Button CTA;
    [SerializeField] private GameObject endCardRoot;
    [SerializeField] private RectTransform retryButtonLine;
    [SerializeField] private RectTransform ctaButtonLine;

    private Tween installDelay;
    private readonly List<Tween> buttonEffectTweens = new List<Tween>();
    private RectTransform animatedButton;
    private RectTransform animatedLine;
    private Vector3 buttonRestScale;
    private Vector2 lineRestPosition;
    private bool resultShown;

    private void Awake()
    {
        Instance = this;
        if (CTA != null) CTA.onClick.AddListener(OpenStore);
    }

    private void Start()
    {
        if (LimitTimePlay) StartCoroutine(EndGameAfterTimeLimit());
    }

    private void Update()
    {
        if (animatedButton != null && !animatedButton.gameObject.activeInHierarchy)
            StopButtonEffect();
    }

    public void OpenStore()
    {
        installDelay?.Kill();
        Luna.Unity.Playable.InstallFullGame();
    }

    public void EndGame(GameObject failPopup)
    {
        EndGame(failPopup, false);
    }

    public void EndGame(GameObject failPopup, bool applovin)
    {
        if (resultShown) return;
        resultShown = true;
        StopAllCoroutines();
        Luna.Unity.LifeCycle.GameEnded();
        if (endCardRoot != null)
        {
            // LosePanel is inside the CTA canvas. The canvas is serialized at scale zero
            // while hidden, so restore its normal canvas scale before showing the child.
            endCardRoot.transform.localScale = Vector3.one;
            endCardRoot.SetActive(true);
        }
        HideEndCardContent();
        if (failPopup != null) failPopup.SetActive(true);
        EnableFullScreenClick(failPopup, OpenStore);
        if (failPopup != null)
            StartButtonEffect(failPopup.transform.Find("CTA") as RectTransform, retryButtonLine);
        installDelay = DOVirtual.DelayedCall(applovin ? 1f : 0f, OpenStore);
    }

    public void ShowRetryPanel(GameObject failPopup, UnityAction retryAction)
    {
        if (resultShown || failPopup == null) return;
        if (endCardRoot != null)
        {
            endCardRoot.transform.localScale = Vector3.one;
            endCardRoot.SetActive(true);
        }
        HideEndCardContent();
        failPopup.SetActive(true);
        EnableFullScreenClick(failPopup, () =>
        {
            StopButtonEffect();
            retryAction?.Invoke();
        });
        StartButtonEffect(failPopup.transform.Find("CTA") as RectTransform, retryButtonLine);
    }

    public void EndCard()
    {
        EndCard(false);
    }

    public void EndCard(bool applovin)
    {
        if (resultShown) return;
        resultShown = true;
        Luna.Unity.LifeCycle.GameEnded();
        if (endCardRoot != null) endCardRoot.SetActive(true);
        if (CTA != null)
        {
            CTA.gameObject.SetActive(true);
            EnableFullScreenClick(endCardRoot != null ? endCardRoot : CTA.transform.root.gameObject, OpenStore);
            RectTransform playNowButton = CTA.transform.Find("Button") as RectTransform;
            StartButtonEffect(playNowButton != null ? playNowButton : CTA.transform as RectTransform, ctaButtonLine);
        }
        if (applovin)
            installDelay = DOVirtual.DelayedCall(1f, OpenStore);
    }

    private void StartButtonEffect(RectTransform button, RectTransform shineRect)
    {
        StopButtonEffect();
        if (button == null) return;
        animatedButton = button;
        buttonRestScale = button.localScale;
        buttonEffectTweens.Add(button.DOScale(buttonRestScale * 1.15f, 0.6f)
            .SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo));
        if (shineRect == null) return;

        animatedLine = shineRect;
        lineRestPosition = shineRect.anchoredPosition;
        float lineWidth = shineRect.rect.width * Mathf.Abs(shineRect.localScale.x);
        float lineHeight = shineRect.rect.height * Mathf.Abs(shineRect.localScale.y);
        float halfWidth = button.rect.width * 0.5f;
        float angle = Mathf.Abs(Mathf.DeltaAngle(0f, shineRect.localEulerAngles.z)) * Mathf.Deg2Rad;
        float extentX = (lineWidth * Mathf.Cos(angle) + lineHeight * Mathf.Sin(angle)) * 0.5f;
        // The scene's UI Mask clips the line as it enters and leaves the button.
        float travel = halfWidth + extentX;
        shineRect.anchoredPosition = new Vector2(-travel, lineRestPosition.y);
        shineRect.gameObject.SetActive(true);

        buttonEffectTweens.Add(shineRect.DOAnchorPosX(travel, 0.9f)
            .SetEase(Ease.Linear).SetLoops(-1, LoopType.Restart));
    }

    private void StopButtonEffect()
    {
        for (int i = 0; i < buttonEffectTweens.Count; i++)
            buttonEffectTweens[i]?.Kill();
        buttonEffectTweens.Clear();
        if (animatedButton != null) animatedButton.localScale = buttonRestScale;
        if (animatedLine != null)
        {
            animatedLine.anchoredPosition = lineRestPosition;
            animatedLine.gameObject.SetActive(false);
        }
        animatedButton = null;
        animatedLine = null;
    }

    private void HideEndCardContent()
    {
        StopButtonEffect();
        if (CTA != null)
        {
            CTA.gameObject.SetActive(false);
        }
    }

    private void EnableFullScreenClick(GameObject root, UnityAction onClick)
    {
        if (root == null) return;
        RectTransform rect = root.GetComponent<RectTransform>();
        Canvas canvas = root.GetComponentInParent<Canvas>();
        if (rect == null || canvas == null) return;

        Image hitSurface = root.GetComponent<Image>();
        if (hitSurface == null)
        {
            hitSurface = root.AddComponent<Image>();
            hitSurface.color = new Color(0f, 0f, 0f, 0f);
        }
        hitSurface.raycastTarget = true;

        Button screenButton = root.GetComponent<Button>();
        if (screenButton == null) screenButton = root.AddComponent<Button>();
        screenButton.transition = Selectable.Transition.None;
        screenButton.targetGraphic = hitSurface;
        screenButton.onClick.RemoveAllListeners();
        if (onClick != null) screenButton.onClick.AddListener(onClick);
    }

    private IEnumerator EndGameAfterTimeLimit()
    {
        yield return new WaitForSeconds(TimePlay);
        if (resultShown) yield break;
        if (GameController.Ins != null)
            GameController.Ins.TimeExpired();
        else
            EndCard(true);
    }

    private void OnDisable()
    {
        StopButtonEffect();
    }

    private void OnDestroy()
    {
        StopAllCoroutines();
        installDelay?.Kill();
        StopButtonEffect();
        if (Instance == this) Instance = null;
    }
}
