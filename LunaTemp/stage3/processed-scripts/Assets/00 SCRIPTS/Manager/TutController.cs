using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private RectTransform tutScene;
    [SerializeField] private HideOnPointer startTut;
    [SerializeField] private RectTransform playTut;
    [SerializeField] private DOTweenAnimation farTut;
    [SerializeField] private DOTweenAnimation failTut;
    [SerializeField] private RectTransform joystickTutHand;
    [SerializeField] private TMP_Text joystickTutLabel;
    [SerializeField, Min(0f)] private float joystickHandSwipeDistance = 150f;
    [SerializeField, Min(0.01f)] private float joystickHandSwipeDuration = 0.65f;

    private Vector2 joystickHandStartPosition;
    private float joystickHandElapsed;
    private bool joystickTutorialVisible;
    public static TutController Instance { get; private set; }

    private void Awake()
    {
        Instance = this;
        if (startTut != null) startTut.OnPointerDownEvent += ShowPlayTut;
    }

    private void Start()
    {
        if (joystickTutHand != null)
            joystickHandStartPosition = joystickTutHand.anchoredPosition;
        HideJoystickTut();
    }

    private void Update()
    {
        if (!joystickTutorialVisible || joystickTutHand == null) return;

        float duration = Mathf.Max(0.01f, joystickHandSwipeDuration);
        joystickHandElapsed += Time.deltaTime;
        float progress = (joystickHandElapsed % duration) / duration;
        joystickTutHand.anchoredPosition = joystickHandStartPosition +
            Vector2.up * (joystickHandSwipeDistance * progress);
    }

    private void ShowPlayTut()
    {
        if (joystickTutHand == null || joystickTutLabel == null)
        {
            Debug.LogWarning("TutController needs separate joystick tutorial hand and text references.", this);
            return;
        }

        Graphic handGraphic = joystickTutHand.GetComponent<Graphic>();
        if (handGraphic != null) handGraphic.raycastTarget = false;
        joystickHandElapsed = 0f;
        joystickTutHand.anchoredPosition = joystickHandStartPosition;
        joystickTutorialVisible = true;
        joystickTutHand.gameObject.SetActive(true);
        joystickTutLabel.raycastTarget = false;
        joystickTutLabel.gameObject.SetActive(true);
    }

    public void StopTut()
    {
        HideJoystickTut();
        if (tutScene != null) tutScene.gameObject.SetActive(false);
    }

    public void HideJoystickTut()
    {
        joystickTutorialVisible = false;
        joystickHandElapsed = 0f;
        if (joystickTutHand != null) joystickTutHand.gameObject.SetActive(false);
        if (joystickTutLabel != null) joystickTutLabel.gameObject.SetActive(false);
    }

    public void ShowFarTut()
    {
        if (farTut != null) farTut.DORestart();
    }

    public void ShowFailTut()
    {
        if (failTut != null) failTut.DORestart();
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
    }
}
