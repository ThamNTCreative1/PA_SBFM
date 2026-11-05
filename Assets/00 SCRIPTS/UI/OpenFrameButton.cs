using UnityEngine;
using UnityEngine.UI;

// Base for HUD buttons that open a popup placed in the scene.
public abstract class OpenFrameButton : MonoBehaviour
{
    [SerializeField] protected PlayableFrame frame;

    protected virtual void Awake()
    {
        Button button = GetComponent<Button>();
        if (button) button.onClick.AddListener(OnClick);
    }

    protected virtual void OnClick()
    {
        if (frame) frame.Show();
    }
}
