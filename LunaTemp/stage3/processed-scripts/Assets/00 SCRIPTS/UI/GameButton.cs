using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

// Same GUID as the source GameButton (a Button subclass), so every button's onClick, graphics and transition carry over.
// Press scale feedback without DOTween; click sound through PlayableAudio.
public class GameButton : Button
{
    [SerializeField] private Image background;
    [SerializeField] private Image icon;
    [SerializeField] private TextMeshProUGUI title;
    [SerializeField] private Vector3 scale = new Vector3(1.1f, 1.1f, 1.1f);
    [SerializeField] private FMAudio pressAudio;

    private Vector3 targetScale = Vector3.one;

    public void SetBackground(Sprite sprite) { if (background != null) background.overrideSprite = sprite; }
    public void SetIcon(Sprite sprite) { if (icon != null) icon.overrideSprite = sprite; }
    public void SetTitle(string text) { if (title != null) title.text = text; }

    public override void OnPointerClick(PointerEventData eventData)
    {
        base.OnPointerClick(eventData);
        if (pressAudio != null && !pressAudio.IsEmpty) pressAudio.Play();
        else PlayableAudio.PlayButtonClick();
    }

    public override void OnPointerDown(PointerEventData eventData)
    {
        base.OnPointerDown(eventData);
        if (interactable) targetScale = scale;
    }

    public override void OnPointerUp(PointerEventData eventData)
    {
        base.OnPointerUp(eventData);
        targetScale = Vector3.one;
    }

    protected override void OnDisable()
    {
        base.OnDisable();
        targetScale = Vector3.one;
        transform.localScale = Vector3.one;
    }

    private void Update()
    {
        if (transform.localScale != targetScale)
            transform.localScale = Vector3.MoveTowards(transform.localScale, targetScale, Time.unscaledDeltaTime * 2f);
    }
}
