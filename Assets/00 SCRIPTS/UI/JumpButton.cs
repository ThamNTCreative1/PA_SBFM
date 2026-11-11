using UnityEngine;
using UnityEngine.EventSystems;

// Jump on press (replaces the Input System OnScreenButton of the source HUD).
public class JumpButton : MonoBehaviour, IPointerDownHandler
{
    [SerializeField] private FMCharacter character;

    public void OnPointerDown(PointerEventData eventData)
    {
        if (character) character.Jump();
    }
}
