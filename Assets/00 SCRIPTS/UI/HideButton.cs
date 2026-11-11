using UnityEngine;
using UnityEngine.UI;

// Close button of a popup (same GUID as HAVIGAME HideButton, used by the btnClose prefab).
public class HideButton : MonoBehaviour
{
    private Button button;
    private PlayableFrame frame;

    private void Awake()
    {
        button = GetComponent<Button>();
        frame = GetComponentInParent<PlayableFrame>();
        if (button) button.onClick.AddListener(Hide);
    }

    private void Hide()
    {
        if (frame) frame.Hide();
    }
}
