using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    public static LunaController Instance;

    [LunaPlaygroundField("Limit Time Play?")]
    public bool LimitTimePlay;

    [LunaPlaygroundField("Time Play")] public float TimePlay;

    [LunaPlaygroundField("Monster (0-7)")] [Range(0, MonsterSelector.MaxIndex)]
    public int MonsterIndex;

    [SerializeField] private MonsterSelector monsterSelector;

    [LunaPlaygroundField("Monster 2 (0-7)")] [Range(0, MonsterSelector.MaxIndex)]
    public int MonsterIndex2;

    [Tooltip("Optional: selector of the second morph (scenes with two morphs).")]
    [SerializeField] private MonsterSelector monsterSelector2;
    [SerializeField] private List<Image> images;
    [SerializeField] private Button CTA;

    [Tooltip("Transparent full-screen button shown on the end card / fail popup. Tapping anywhere opens the store. Never clicks by itself.")]
    [SerializeField] private Button clickOverlay;

    private bool ended;

    private void Awake()
    {
        Instance = this;
        ApplyMonster();
        CTA.onClick.AddListener(ClickCTA);
        if (clickOverlay != null)
        {
            clickOverlay.onClick.AddListener(ClickCTA);
            clickOverlay.gameObject.SetActive(false);
        }
    }

    private void ApplyMonster()
    {
        if (monsterSelector != null) monsterSelector.MonsterIndex = MonsterIndex;
        if (monsterSelector2 != null) monsterSelector2.MonsterIndex = MonsterIndex2;
    }

#if UNITY_EDITOR
    private void OnValidate()
    {
        // Defer: toggling objects inside OnValidate is not allowed.
        UnityEditor.EditorApplication.delayCall += () =>
        {
            if (this == null) return;
            ApplyMonster();
            if (monsterSelector != null) UnityEditor.EditorUtility.SetDirty(monsterSelector);
            if (monsterSelector2 != null) UnityEditor.EditorUtility.SetDirty(monsterSelector2);
        };
    }
#endif

    private void Start()
    {
        if (LimitTimePlay)
            StartCoroutine(EndGameAfterTimeLimit());
    }

    // Only ever called from a user tap (button onClick) - no automatic redirects.
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private void ShowClickOverlay()
    {
        if (clickOverlay == null) clickOverlay = CreateClickOverlay();
        if (clickOverlay == null) return;
        clickOverlay.transform.SetAsLastSibling();
        clickOverlay.gameObject.SetActive(true);
    }

    private Button CreateClickOverlay()
    {
        Canvas canvas = CTA != null ? CTA.GetComponentInParent<Canvas>() : null;
        if (canvas == null) return null;
        canvas = canvas.rootCanvas;
        GameObject go = new GameObject("ClickToStoreOverlay", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image), typeof(Button));
        go.layer = canvas.gameObject.layer;
        RectTransform rt = go.GetComponent<RectTransform>();
        rt.SetParent(canvas.transform, false);
        rt.anchorMin = Vector2.zero;
        rt.anchorMax = Vector2.one;
        rt.offsetMin = Vector2.zero;
        rt.offsetMax = Vector2.zero;
        Image image = go.GetComponent<Image>();
        image.color = new Color(1f, 1f, 1f, 0f);
        image.raycastTarget = true;
        Button button = go.GetComponent<Button>();
        button.transition = Selectable.Transition.None;
        button.onClick.AddListener(ClickCTA);
        return button;
    }

    public void EndGame(GameObject failPopup)
    {
        if (ended) return;
        ended = true;
        StopAllCoroutines();
        Luna.Unity.LifeCycle.GameEnded();
        if (failPopup != null)
        {
            Button button = failPopup.GetComponent<Button>();
            if (button == null) button = failPopup.AddComponent<Button>();
            button.transition = Selectable.Transition.None;
            button.onClick.AddListener(ClickCTA);
        }

        ShowClickOverlay();
    }

    public void EndUnlock(Button unlockCta, float autoInstallDelay)
    {
        if (ended) return;
        ended = true;
        StopAllCoroutines();
        Luna.Unity.LifeCycle.GameEnded();
        if (unlockCta != null) unlockCta.onClick.AddListener(ClickCTA);
        ShowClickOverlay();
    }

    private IEnumerator EndGameAfterTimeLimit()
    {
        yield return new WaitForSeconds(TimePlay);
        if (CTA.gameObject.activeSelf || ended) yield break;
        ShowEndCard();
    }

    public void EndCard()
    {
        if (CTA.gameObject.activeSelf) return;
        ShowEndCard();
    }

    private void ShowEndCard()
    {
        ended = true;
        StopAllCoroutines();
        Luna.Unity.LifeCycle.GameEnded();
        CTA.gameObject.SetActive(true);
        GameObject obj = CTA.transform.GetChild(0).gameObject;
        obj.transform.DOScale(new Vector3(1.2f, 1.2f, 1.2f), 0.6f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        RectTransform line = obj.transform.GetChild(0).GetComponent<RectTransform>();
        line.DOAnchorPosX(520, 0.8f)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Restart);
        ShowClickOverlay();
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
    }
}
