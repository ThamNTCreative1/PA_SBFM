using System;
using UnityEngine;

public class HideOnPointer : MonoBehaviour
{
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            OnPointerDownEvent?.Invoke();
            Destroy(gameObject);
        }
    }
    public Action OnPointerDownEvent;
}
