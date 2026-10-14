using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private RectTransform tutScene;
    [SerializeField] private HideOnPointer startTut;
    [SerializeField] private RectTransform playTut;
    [SerializeField] private DOTweenAnimation farTut;
    [SerializeField] private DOTweenAnimation failTut;
    private void Awake()
    {
        startTut.OnPointerDownEvent += ShowPlayTut;
    }
    private void ShowPlayTut()
    {
        playTut.gameObject.SetActive(true);
    }
    public void StopTut()
    {
        tutScene.gameObject.SetActive(false);
    }
    public void ShowFarTut()
    {
        farTut.DORestart();
    }
    public void ShowFailTut()
    {
        failTut.DORestart();
    }
}