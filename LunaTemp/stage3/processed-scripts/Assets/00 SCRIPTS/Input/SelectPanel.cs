using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class SelectPanel : MonoBehaviour
{
    [SerializeField] private Transform _title;
    [SerializeField] private List<Button> _buttons;
    [SerializeField] private GameObject _popupMap;
    [SerializeField] private GameObject _popupMonster;
    [SerializeField] private Button _btnFind;

    private void Start()
    {
        _title.DOScale(1.2f, 1f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        foreach (Button button in _buttons)
        {
            button.onClick.AddListener(() =>
            {
                _popupMap.SetActive(false);
                _popupMonster.SetActive(true);
            });
        }

        _btnFind.onClick.AddListener(() => { gameObject.SetActive(false); });
    }
}