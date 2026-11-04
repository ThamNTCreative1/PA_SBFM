using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private RectTransform tutScene;
    [SerializeField] private HideOnPointer startTut;
    [SerializeField] private RectTransform playTut;
    [SerializeField] private DOTweenAnimation farTut;
    [SerializeField] private DOTweenAnimation failTut;
    [SerializeField] private Joystick joystick;
    [SerializeField] private RectTransform moveTut;
    [SerializeField] private RectTransform moveHand;
    [SerializeField] private RectTransform cameraHand;
    [SerializeField] private RectTransform jumpTut;
    [SerializeField] private RectTransform jumpHand;
    [SerializeField] private Button jumpButton;
    [SerializeField] private float swipeDistance = 120f;
    [SerializeField] private float swipeDuration = 0.8f;
    [SerializeField] private float swipePause = 0.25f;

    private enum Step { None, Camera, Move, Jump, Done }
    private Step step;
    private Tween handTween;
    private Vector2 cameraHandStart;
    private Vector2 moveHandStart;
    private Vector2 jumpHandStart;
    private Vector3 jumpHandScale;

    private void Awake()
    {
        if (cameraHand != null) cameraHandStart = cameraHand.anchoredPosition;
        if (moveHand != null) moveHandStart = moveHand.anchoredPosition;
        if (jumpHand != null)
        {
            jumpHandStart = jumpHand.anchoredPosition;
            jumpHandScale = jumpHand.localScale;
        }
        if (startTut != null) startTut.OnPointerDownEvent += CompleteCameraTut;
        if (jumpButton != null) jumpButton.onClick.AddListener(CompleteJump);
        HideSteps();
    }

    public void BeginTutorial()
    {
        gameObject.SetActive(true);
        HideSteps();
        step = Step.Camera;
        if (startTut != null) startTut.gameObject.SetActive(true);
        if (cameraHand != null)
            handTween = DOTween.Sequence()
                .Append(cameraHand.DOAnchorPos(cameraHandStart + Vector2.right * 200f, swipeDuration).SetEase(Ease.Linear))
                .AppendInterval(swipePause).SetLoops(-1, LoopType.Restart);
    }

    private void Update()
    {
        if (GameController.Ins == null || !GameController.Ins.IsPlaying) return;
        if (step == Step.Move && joystick != null && joystick.Direction.sqrMagnitude > 0.04f)
            ShowJumpTut();
    }

    private void CompleteCameraTut()
    {
        if (step == Step.Camera && GameController.Ins != null && GameController.Ins.IsPlaying)
            ShowMoveTut();
    }

    private void ShowMoveTut()
    {
        HideSteps();
        step = Step.Move;
        if (moveTut != null) moveTut.gameObject.SetActive(true);
        if (moveHand != null)
            handTween = DOTween.Sequence()
                .Append(moveHand.DOAnchorPosY(moveHandStart.y + swipeDistance, swipeDuration).SetEase(Ease.InOutSine))
                .AppendInterval(swipePause).SetLoops(-1, LoopType.Restart);
    }

    private void ShowJumpTut()
    {
        HideSteps();
        step = Step.Jump;
        if (jumpTut != null) jumpTut.gameObject.SetActive(true);
        if (jumpHand != null)
            handTween = jumpHand.DOScale(jumpHandScale * 0.85f, 0.4f)
                .SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
    }

    private void CompleteJump()
    {
        if (step != Step.Jump) return;
        step = Step.Done;
        HideSteps();
    }

    private void HideSteps()
    {
        handTween?.Kill();
        handTween = null;
        if (cameraHand != null) cameraHand.anchoredPosition = cameraHandStart;
        if (moveHand != null) moveHand.anchoredPosition = moveHandStart;
        if (jumpHand != null)
        {
            jumpHand.anchoredPosition = jumpHandStart;
            jumpHand.localScale = jumpHandScale;
        }
        if (startTut != null) startTut.gameObject.SetActive(false);
        if (playTut != null) playTut.gameObject.SetActive(false);
        if (moveTut != null) moveTut.gameObject.SetActive(false);
        if (jumpTut != null) jumpTut.gameObject.SetActive(false);
    }

    public void StopTut()
    {
        step = Step.Done;
        HideSteps();
        if (tutScene != null) tutScene.gameObject.SetActive(false);
    }
    public void ShowFarTut() { if (farTut != null) farTut.DORestart(); }
    public void ShowFailTut() { if (failTut != null) failTut.DORestart(); }
    private void OnDisable() { HideSteps(); }
    private void OnDestroy()
    {
        if (startTut != null) startTut.OnPointerDownEvent -= CompleteCameraTut;
        if (jumpButton != null) jumpButton.onClick.RemoveListener(CompleteJump);
        handTween?.Kill();
    }
}
