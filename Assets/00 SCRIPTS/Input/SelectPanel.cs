using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class SelectPanel : MonoBehaviour
{
    [SerializeField] private Transform _title;
    [SerializeField] private List<Button> _buttons;

    private void Start()
    {
        _title.DOScale(1.2f, 1f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        foreach (Button button in _buttons)
        {
            button.onClick.AddListener(() => { gameObject.SetActive(false); });
        }
    }
}