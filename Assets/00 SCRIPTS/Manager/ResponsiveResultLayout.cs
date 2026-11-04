using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
public class ResponsiveResultLayout : MonoBehaviour
{
    [SerializeField] private Image title;
    [SerializeField] private Image action;
    // Normalized visible artwork bounds, excluding the transparent sprite padding.
    [SerializeField] private Rect titleArtwork = new Rect(0f, 0f, 1f, 1f);
    [SerializeField] private Rect actionArtwork = new Rect(0f, 0f, 1f, 1f);
    private RectTransform panel;
    private Vector2 lastSize;

    private void Awake() { panel = GetComponent<RectTransform>(); }
    private void OnEnable() { lastSize = Vector2.zero; }
    private void LateUpdate()
    {
        if (panel == null || title == null || action == null) return;
        Vector2 size = panel.rect.size;
        if (size.x <= 0f || size.y <= 0f || (size - lastSize).sqrMagnitude < 0.01f) return;
        lastSize = size;
        float titleHeight = ArtworkHeight(title, titleArtwork, 1000f);
        float buttonHeight = ArtworkHeight(action, actionArtwork, 620f);
        // Reserve the button's full 1.2x pulse, plus a clear gap from the title.
        float totalHeight = titleHeight + 90f + buttonHeight * 1.2f;
        float scale = Mathf.Min(size.x * 0.88f / 1000f, size.y * 0.82f / totalHeight);
        Place(title, titleArtwork, 1000f * scale,
            new Vector2(0f, (totalHeight - titleHeight) * 0.5f * scale));
        Place(action, actionArtwork, 620f * scale,
            new Vector2(0f, (-totalHeight + buttonHeight * 1.2f) * 0.5f * scale));
    }

    private static float ArtworkHeight(Image image, Rect artwork, float width)
    {
        Rect sprite = image.sprite.rect;
        return width * sprite.height * artwork.height / (sprite.width * artwork.width);
    }

    private static void Place(Image image, Rect artwork, float visibleWidth, Vector2 center)
    {
        Rect sprite = image.sprite.rect;
        RectTransform rect = image.rectTransform;
        rect.anchorMin = rect.anchorMax = rect.pivot = new Vector2(0.5f, 0.5f);
        rect.sizeDelta = new Vector2(visibleWidth / artwork.width,
            visibleWidth / artwork.width * sprite.height / sprite.width);
        rect.anchoredPosition = center - Vector2.Scale(artwork.center - new Vector2(0.5f, 0.5f), rect.sizeDelta);
        image.preserveAspect = true;
    }
}
