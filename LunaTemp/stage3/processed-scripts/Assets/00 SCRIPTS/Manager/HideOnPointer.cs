using System;
using UnityEngine;
using UnityEngine.EventSystems;

public class HideOnPointer : MonoBehaviour, IPointerDownHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        OnPointerDownEvent?.Invoke();
        gameObject.SetActive(false);
    }

    public Action OnPointerDownEvent;
}
