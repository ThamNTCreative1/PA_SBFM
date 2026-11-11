using System.Collections.Generic;
using UnityEngine;

// After a horror Sprunki is found (on Continue, called by SprunkiHunt), the sky turns to horror (an orange/red sunset like MCH):
// a sky dome (big sphere with a vertical gradient, drawn behind the world, no fog) and a sun sprite fade in over the
// normal sky, while fog, sun light and ambient light blend to warm colours. The background music crossfades to the
// horror music at the same time. Everything stays horror afterwards.
public class HorrorSky : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private Light sun;
    [Tooltip("Finding one of these turns the sky to horror.")]
    [SerializeField] private List<MonsterSO> horrorMonsters = new List<MonsterSO>();

    [Header("Sky dome")]
    [SerializeField] private Renderer skyDome;
    [SerializeField] private Renderer sunSprite;
    [Tooltip("Sky dome radius; keep it under the camera far clip.")]
    [SerializeField] private float domeRadius = 200f;
    [SerializeField] private float sunSize = 28f;
    [Tooltip("Height of the sun sprite above the horizon (degrees); its compass direction follows the light. Below 0: use the light's angle.")]
    [SerializeField] private float sunElevation = 32f;

    [Header("Horror colours")]
    [SerializeField] private Color fogColor = new Color(0.86f, 0.38f, 0.1f, 1f);
    [SerializeField] private Color sunColor = new Color(1f, 0.74f, 0.48f, 1f);
    [SerializeField] private float sunIntensity = 1.1f;
    [SerializeField] private Color ambientColor = new Color(0.82f, 0.64f, 0.54f, 1f);
    [Tooltip("Ambient colour of the normal day (used as the start of the blend).")]
    [SerializeField] private Color dayAmbientColor = new Color(0.7f, 0.85f, 1f, 1f);
    [SerializeField] private float duration = 1.5f;

    [Header("Horror music")]
    [Tooltip("The normal background music (LunaController's music source): faded out.")]
    [SerializeField] private AudioSource dayMusic;
    [SerializeField] private AudioSource horrorMusicSource;
    [SerializeField] private AudioClip horrorMusic;
    [SerializeField, Range(0, 1)] private float horrorMusicVolume = 0.8f;
    [SerializeField] private float musicFade = 1.5f;

    private bool horror;
    // 0 = normal day, 1 = full horror; moves towards the target over duration / musicFade
    private float level, musicLevel;
    private bool dayCaptured;
    private Color dayFog, daySun;
    private float daySunIntensity, dayMusicVolume;
    private UnityEngine.Rendering.AmbientMode dayAmbientMode;
    private Color dayAmbientSky;
    private Material domeMat, sunMat;
    private float domeMeshRadius;

    public bool IsHorror { get { return horror; } }

    private void Awake()
    {
        if (cam == null) cam = Camera.main;
        if (skyDome) { domeMat = skyDome.material; skyDome.gameObject.SetActive(false); }
        if (sunSprite) { sunMat = sunSprite.material; sunSprite.gameObject.SetActive(false); }
    }

    public bool IsHorrorMonster(MonsterSO so) { return so != null && horrorMonsters.Contains(so); }

    private void CaptureDay()
    {
        if (dayCaptured) return;
        dayCaptured = true;
        dayFog = RenderSettings.fogColor;
        dayAmbientMode = RenderSettings.ambientMode;
        // Flat ambient uses the sky colour slot, so the day value is kept to restore it
        dayAmbientSky = dayAmbientMode == UnityEngine.Rendering.AmbientMode.Skybox ? dayAmbientColor : RenderSettings.ambientSkyColor;
        if (sun) { daySun = sun.color; daySunIntensity = sun.intensity; }
        dayMusicVolume = dayMusic ? dayMusic.volume : 0;
    }

    public void StartHorror()
    {
        if (horror) return;
        CaptureDay();
        horror = true;
        if (skyDome) skyDome.gameObject.SetActive(true);
        if (sunSprite) sunSprite.gameObject.SetActive(true);
        FollowCamera();
        RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
        if (horrorMusicSource && horrorMusic)
        {
            if (horrorMusicSource.clip != horrorMusic) horrorMusicSource.clip = horrorMusic;
            horrorMusicSource.loop = true;
            if (!horrorMusicSource.isPlaying) { horrorMusicSource.volume = 0; horrorMusicSource.Play(); }
        }
        if (dayMusic && !dayMusic.isPlaying) dayMusic.Play();
    }

    // Back to the normal day sky (blends back over the same time).
    public void StopHorror()
    {
        if (!horror) return;
        horror = false;
        if (dayMusic && !dayMusic.isPlaying) { dayMusic.volume = 0; dayMusic.Play(); }
    }

    private static void SetAlpha(Material m, float a)
    {
        if (m == null) return;
        Color c = m.color; c.a = a; m.color = c;
    }

    private void Update()
    {
        if (!dayCaptured) return;
        float target = horror ? 1 : 0;
        if (level == target && musicLevel == target) return;
        level = Mathf.MoveTowards(level, target, Time.deltaTime / Mathf.Max(0.01f, duration));
        musicLevel = Mathf.MoveTowards(musicLevel, target, Time.deltaTime / Mathf.Max(0.01f, musicFade));
        float t = level * level * (3 - 2 * level);

        SetAlpha(domeMat, t);
        SetAlpha(sunMat, t);
        RenderSettings.fogColor = Color.Lerp(dayFog, fogColor, t);
        RenderSettings.ambientLight = Color.Lerp(dayAmbientSky, ambientColor, t);
        if (sun)
        {
            sun.color = Color.Lerp(daySun, sunColor, t);
            sun.intensity = Mathf.Lerp(daySunIntensity, sunIntensity, t);
        }
        if (dayMusic) dayMusic.volume = dayMusicVolume * (1 - musicLevel);
        if (horrorMusicSource && horrorMusic) horrorMusicSource.volume = horrorMusicVolume * musicLevel;

        if (level <= 0 && !horror)
        {
            // fully back to day
            if (skyDome) skyDome.gameObject.SetActive(false);
            if (sunSprite) sunSprite.gameObject.SetActive(false);
            RenderSettings.ambientMode = dayAmbientMode;
            if (dayAmbientMode != UnityEngine.Rendering.AmbientMode.Skybox) RenderSettings.ambientSkyColor = dayAmbientSky;
        }
        if (musicLevel <= 0 && !horror && horrorMusicSource && horrorMusicSource.isPlaying) horrorMusicSource.Stop();
        if (musicLevel >= 1 && horror && dayMusic && dayMusic.isPlaying) dayMusic.Stop();
    }

    private void LateUpdate()
    {
        if (horror || level > 0) FollowCamera();
    }

    // The dome stays centred on the camera; the sun sits on it, opposite the light direction, facing the camera.
    private void FollowCamera()
    {
        if (cam == null) return;
        Vector3 c = cam.transform.position;
        if (skyDome)
        {
            skyDome.transform.position = c;
            if (domeMeshRadius <= 0)
            {
                MeshFilter mf = skyDome.GetComponent<MeshFilter>();
                domeMeshRadius = mf && mf.sharedMesh ? Mathf.Max(0.01f, mf.sharedMesh.bounds.extents.y) : 0.5f;
            }
            skyDome.transform.localScale = Vector3.one * (domeRadius / domeMeshRadius);
        }
        if (sunSprite && sun)
        {
            Vector3 dir = -sun.transform.forward;
            if (sunElevation >= 0)
            {
                Vector3 flat = new Vector3(dir.x, 0, dir.z);
                if (flat.sqrMagnitude < 0.0001f) flat = Vector3.forward;
                flat.Normalize();
                float e = sunElevation * Mathf.Deg2Rad;
                dir = flat * Mathf.Cos(e) + Vector3.up * Mathf.Sin(e);
            }
            sunSprite.transform.position = c + dir * domeRadius * 0.9f;
            sunSprite.transform.rotation = Quaternion.LookRotation(dir * -1f, Vector3.up) * Quaternion.Euler(0, 180, 0);
            sunSprite.transform.localScale = Vector3.one * sunSize;
        }
    }
}
