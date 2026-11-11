using UnityEngine;
using UnityEngine.EventSystems;

// The scrollbar bar of a DragScroll: pressing or dragging on it scrolls the list to that point.
public class ScrollbarArea : MonoBehaviour, IPointerDownHandler, IDragHandler, IBeginDragHandler
{
    [SerializeField] private DragScroll scroll;

    public void OnPointerDown(PointerEventData e) { if (scroll) scroll.ScrollbarPointer(e); }
    public void OnBeginDrag(PointerEventData e) { if (scroll) scroll.ScrollbarPointer(e); }
    public void OnDrag(PointerEventData e) { if (scroll) scroll.ScrollbarPointer(e); }
}
