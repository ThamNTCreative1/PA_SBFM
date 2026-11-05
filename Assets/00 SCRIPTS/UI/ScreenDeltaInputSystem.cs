using UnityEngine;
using UnityEngine.EventSystems;

// Camera look area: collects drag deltas (pixels) for FM3rdInput. Same GUID as the source ScreenDeltaInputSystem.
public class ScreenDeltaInputSystem : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
    private Vector2 delta;
    private int pointerId = int.MinValue;

    public void OnPointerDown(PointerEventData e)
    {
        if (pointerId == int.MinValue) pointerId = e.pointerId;
    }

    public void OnDrag(PointerEventData e)
    {
        if (e.pointerId == pointerId) delta += e.delta;
    }

    public void OnPointerUp(PointerEventData e)
    {
        if (e.pointerId == pointerId) pointerId = int.MinValue;
    }

    public Vector2 ConsumeDelta()
    {
        Vector2 d = delta;
        delta = Vector2.zero;
        return d;
    }

    private void OnDisable() { pointerId = int.MinValue; delta = Vector2.zero; }
}
