using System.Collections;
using TMPro;
using UnityEngine;

public class WorldController : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private Light directionalLight;
    [SerializeField] private TMP_Text tutorialText;

    [Header("World Colors")]
    [SerializeField] private Color cameraBackgroundColor = Color.cyan;
    [SerializeField] private bool enableFog = true;
    [SerializeField] private Color fogColor = Color.gray;

    [Header("Horror World")]
    [SerializeField] private Color horrorCameraColor = Color.black;
    [SerializeField] private Color horrorFogColor = Color.black;
    [SerializeField] private Color horrorDirectionalLightColor = Color.red;
    [SerializeField] private AudioClip horrorMusic;
    [SerializeField, Min(0f)] private float horrorColorFadeDuration = 1f;
    [SerializeField, Min(0f)] private float horrorMusicFadeDuration = 0.5f;

    private Coroutine colorRoutine;
    private int collectedHorrorGiftCount;

    public static WorldController Ins { get; private set; }

    private void Awake()
    {
        Ins = this;

        if (worldCamera == null)
            worldCamera = Camera.main;

        if (directionalLight == null)
            directionalLight = RenderSettings.sun;

        SetCameraBackgroundColor(cameraBackgroundColor);
        SetFogEnabled(enableFog);
        SetFogColor(fogColor);
    }

    private void Start()
    {
        SetTutorialText(0);
    }

    public void SetCameraBackgroundColor(Color color)
    {
        cameraBackgroundColor = color;

        if (worldCamera != null)
            worldCamera.backgroundColor = color;
    }

    public void SetFogColor(Color color)
    {
        fogColor = color;
        RenderSettings.fogColor = color;
    }

    public void SetFogEnabled(bool enabled)
    {
        enableFog = enabled;
        RenderSettings.fog = enabled;
    }

    public void ApplyWorld(Color backgroundColor, Color newFogColor)
    {
        SetCameraBackgroundColor(backgroundColor);
        SetFogColor(newFogColor);
    }

    public void EnterHorrorWorld()
    {
        collectedHorrorGiftCount++;
        SetTutorialText(collectedHorrorGiftCount);

        if (colorRoutine != null)
            StopCoroutine(colorRoutine);

        colorRoutine = StartCoroutine(FadeWorldColors(
            horrorCameraColor,
            horrorFogColor,
            horrorColorFadeDuration));

        if (AudioController.Ins != null)
            AudioController.Ins.ChangeBackgroundMusic(
                horrorMusic,
                horrorMusicFadeDuration);
        else
            Debug.LogWarning("WorldController: No AudioController was found in the scene.", this);
    }

    private void SetTutorialText(int horrorGiftCount)
    {
        if (tutorialText == null)
        {
            Debug.LogWarning("WorldController: Tutorial Text is not assigned.", this);
            return;
        }

        if (LunaController.Ins == null)
        {
            Debug.LogWarning("WorldController: No LunaController was found in the scene.", this);
            return;
        }

        if (horrorGiftCount <= 0)
            tutorialText.text = LunaController.Ins.TutorialTextBeforeHorror;
        else if (horrorGiftCount == 1)
            tutorialText.text = LunaController.Ins.TutorialTextAfterHorror;
        else
            tutorialText.text = LunaController.Ins.TutorialTextAfterSecondHorror;
    }

    public void HideTutorialText()
    {
        if (tutorialText != null)
            tutorialText.gameObject.SetActive(false);
    }

    private IEnumerator FadeWorldColors(
        Color targetCameraColor,
        Color targetFogColor,
        float duration)
    {
        Color startCameraColor = worldCamera != null
            ? worldCamera.backgroundColor
            : cameraBackgroundColor;
        Color startFogColor = RenderSettings.fogColor;
        Color startLightColor = directionalLight != null
            ? directionalLight.color
            : Color.white;

        if (duration <= 0f)
        {
            SetCameraBackgroundColor(targetCameraColor);
            SetFogColor(targetFogColor);
            SetDirectionalLightColor(horrorDirectionalLightColor);
            colorRoutine = null;
            yield break;
        }

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.unscaledDeltaTime;
            float progress = Mathf.Clamp01(elapsed / duration);

            SetCameraBackgroundColor(Color.Lerp(
                startCameraColor,
                targetCameraColor,
                progress));
            SetFogColor(Color.Lerp(
                startFogColor,
                targetFogColor,
                progress));
            SetDirectionalLightColor(Color.Lerp(
                startLightColor,
                horrorDirectionalLightColor,
                progress));

            yield return null;
        }

        SetCameraBackgroundColor(targetCameraColor);
        SetFogColor(targetFogColor);
        SetDirectionalLightColor(horrorDirectionalLightColor);
        colorRoutine = null;
    }

    private void SetDirectionalLightColor(Color color)
    {
        if (directionalLight != null)
            directionalLight.color = color;
    }

    private void OnDestroy()
    {
        if (Ins == this)
            Ins = null;
    }
}
