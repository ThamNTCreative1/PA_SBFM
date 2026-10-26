using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

/// <summary>Applies the ski morph playable setup to the existing SampleScene.</summary>
[InitializeOnLoad]
public static class SkiPlayableSceneSetup
{
    private const string ScenePath = "Assets/Scenes/SampleScene.unity";
    private const string MorphFolder = "Assets/GameObject/";
    private const string ArtFolder = "Assets/01 RESOURCES/Texture/V03 - Choose Your Map (Assets playable) (HoaiTT) (AnhNTN) (1)/";
    private static readonly string[] MorphNames =
    {
        "FunBot_Horror", "Vineria", "Sighupdatedbrud", "Garnold_Normal",
        "PinkiNormal", "Jevin", "Raddy_Normal", "Vineria_Horror"
    };

    static SkiPlayableSceneSetup()
    {
        EditorApplication.delayCall += ApplyOnOpen;
    }

    private static void ApplyOnOpen()
    {
        if (EditorApplication.isPlaying || EditorApplication.isCompiling) return;
        if (SceneManager.GetActiveScene().path != ScenePath) return;
        GameController controller = Object.FindFirstObjectByType<GameController>(FindObjectsInactive.Include);
        if (controller == null) return;
        SerializedObject serialized = new SerializedObject(controller);
        if (serialized.FindProperty("morphSelection").objectReferenceValue == null) return;
        Configure();
    }

    [MenuItem("Tools/Playable/Setup Ski Morph Playable")]
    public static void Configure()
    {
        if (EditorApplication.isPlaying) throw new System.InvalidOperationException("Stop Play Mode before applying the ski playable setup.");
        if (SceneManager.GetActiveScene().path != ScenePath)
            throw new System.InvalidOperationException("Open Assets/Scenes/SampleScene.unity before applying the ski setup.");

        GameController controller = Object.FindFirstObjectByType<GameController>(FindObjectsInactive.Include);
        CharacterMotor motor = Object.FindFirstObjectByType<CharacterMotor>(FindObjectsInactive.Include);
        Transform spawn = FindTransform("PlayerSpawn");
        GameObject canvasRoot = FindSceneRoot("UI");
        GameObject endCard = FindSceneRoot("CTA");
        MorphSelectionFlow selection = Object.FindFirstObjectByType<MorphSelectionFlow>(FindObjectsInactive.Include);
        LunaController lunaController = Object.FindFirstObjectByType<LunaController>(FindObjectsInactive.Include);

        if (controller == null || motor == null || spawn == null || canvasRoot == null || endCard == null || lunaController == null)
            throw new System.InvalidOperationException("SampleScene is missing a required player, UI, CTA, or manager reference.");

        List<Renderer> skiSections = new List<Renderer>();
        Renderer ski = FindRenderer("ski");
        if (ski != null) skiSections.Add(ski);
        if (ski == null) throw new System.InvalidOperationException("The existing ski object shown in the reference could not be found.");
        int groundLayer = LayerMask.NameToLayer("Ground");
        if (groundLayer < 0) throw new System.InvalidOperationException("The project's Ground layer is missing.");
        ski.gameObject.layer = groundLayer;
        EditorUtility.SetDirty(ski.gameObject);
        Transform morphPosition = GetMorphPosition(ski);

        GameObject player = motor.gameObject;
        player.SetActive(true);
        motor.enabled = true;
        GameObject inputManager = FindSceneRoot("InputManager");
        if (inputManager != null) inputManager.SetActive(true);
        Transform inputUI = FindTransform("Input");
        if (inputUI != null) inputUI.gameObject.SetActive(true);

        GameObject morphPanel = selection != null ? selection.gameObject : GameObject.Find("Morph Selection");
        if (morphPanel != null) morphPanel.SetActive(false);
        Transform tutRoot = FindTransform("Tut");
        if (tutRoot != null) tutRoot.gameObject.SetActive(true);
        Transform progress = FindTransform("Progress");
        if (progress != null) progress.gameObject.SetActive(false);
        Transform collectText = FindTransform("Collect Text");
        if (collectText != null) collectText.gameObject.SetActive(false);

        CameraFollow follow = Object.FindFirstObjectByType<CameraFollow>(FindObjectsInactive.Include);
        Transform cameraYaw = null;
        SerializedObject motorData = new SerializedObject(motor);
        SerializedProperty cameraYawProperty = motorData.FindProperty("cameraYawTransform");
        if (cameraYawProperty != null) cameraYaw = cameraYawProperty.objectReferenceValue as Transform;
        if (follow != null)
        {
            SerializedObject followData = new SerializedObject(follow);
            followData.FindProperty("target").objectReferenceValue = player.transform;
            followData.ApplyModifiedPropertiesWithoutUndo();
            follow.enabled = true;
        }

        GameObject failPanel = BuildLosePanel(endCard.transform);
        failPanel.SetActive(false);
        endCard.SetActive(false);

        SerializedObject game = new SerializedObject(controller);
        game.FindProperty("morphSelection").objectReferenceValue = null;
        game.FindProperty("skiSections").arraySize = skiSections.Count;
        for (int i = 0; i < skiSections.Count; i++)
            game.FindProperty("skiSections").GetArrayElementAtIndex(i).objectReferenceValue = skiSections[i];
        game.FindProperty("playerMotor").objectReferenceValue = motor;
        game.FindProperty("playerSpawn").objectReferenceValue = spawn;
        game.FindProperty("morphPosition").objectReferenceValue = morphPosition;
        game.FindProperty("cameraYaw").objectReferenceValue = cameraYaw;
        game.FindProperty("failUI").objectReferenceValue = failPanel;
        game.FindProperty("endCard").objectReferenceValue = endCard;
        SerializedProperty prefabs = game.FindProperty("morphPrefabs");
        prefabs.arraySize = MorphNames.Length;
        for (int i = 0; i < MorphNames.Length; i++)
        {
            GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(MorphFolder + MorphNames[i] + ".prefab");
            if (prefab == null) throw new System.InvalidOperationException("Missing morph prefab: " + MorphFolder + MorphNames[i] + ".prefab");
            prefabs.GetArrayElementAtIndex(i).objectReferenceValue = prefab;
        }
        game.FindProperty("luna").intValue = Mathf.Clamp(game.FindProperty("luna").intValue, 1, 8);
        game.ApplyModifiedPropertiesWithoutUndo();

        PlacePlayerOnSkiTop(ski, player.transform, spawn, motor);

        SerializedObject luna = new SerializedObject(lunaController);
        luna.FindProperty("endCardRoot").objectReferenceValue = endCard;
        luna.ApplyModifiedPropertiesWithoutUndo();

        Transform prompt = canvasRoot.transform.Find("Can You Reach It");
        if (prompt != null) Object.DestroyImmediate(prompt.gameObject);

        EditorSceneManager.MarkSceneDirty(SceneManager.GetActiveScene());
        EditorSceneManager.SaveScene(SceneManager.GetActiveScene());
        AssetDatabase.SaveAssets();
        Debug.Log("Ski morph playable configured with the existing player, ski meshes, eight morph prefabs, lose art, tutorial, and CTA.");
    }

    private static void PlacePlayerOnSkiTop(Renderer ski, Transform player, Transform spawn, CharacterMotor motor)
    {
        BoxCollider skiCollider = null;
        BoxCollider[] colliders = ski.GetComponents<BoxCollider>();
        for (int i = 0; i < colliders.Length; i++)
            if (skiCollider == null || colliders[i].size.z > skiCollider.size.z)
                skiCollider = colliders[i];
        if (skiCollider == null) throw new System.InvalidOperationException("The existing ski collider is missing.");

        Vector3 localPosition = ski.transform.InverseTransformPoint(player.position);
        float scaleX = Mathf.Max(0.001f, Mathf.Abs(ski.transform.lossyScale.x));
        float topSide = ski.transform.right.y >= 0f ? 1f : -1f;
        localPosition.x = skiCollider.center.x + topSide * (Mathf.Abs(skiCollider.size.x) * 0.5f + 0.05f / scaleX);
        localPosition.y = skiCollider.center.y;
        Vector3 playerPosition = ski.transform.TransformPoint(localPosition);

        spawn.SetPositionAndRotation(playerPosition, player.rotation);
        player.SetPositionAndRotation(playerPosition, player.rotation);
        Rigidbody body = motor.GetComponent<Rigidbody>();
        if (body != null)
        {
            body.position = playerPosition;
            body.rotation = player.rotation;
        }
        GroundChecker groundChecker = motor.GetComponentInChildren<GroundChecker>(true);
        if (groundChecker != null)
        {
            SerializedObject ground = new SerializedObject(groundChecker);
            SerializedProperty groundMask = ground.FindProperty("groundLayer");
            groundMask.intValue |= 1 << ski.gameObject.layer;
            ground.ApplyModifiedPropertiesWithoutUndo();
            EditorUtility.SetDirty(groundChecker);
        }
        EditorUtility.SetDirty(spawn);
        EditorUtility.SetDirty(player);
        EditorUtility.SetDirty(motor);
    }

    private static GameObject BuildLosePanel(Transform ctaCanvas)
    {
        Transform previous = FindTransform("LosePanel");
        if (previous != null) Object.DestroyImmediate(previous.gameObject);

        GameObject root = new GameObject("LosePanel", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image),
            typeof(Button));
        root.layer = 5;
        RectTransform rect = root.GetComponent<RectTransform>();
        rect.SetParent(ctaCanvas, false);
        rect.anchorMin = Vector2.zero;
        rect.anchorMax = Vector2.one;
        rect.offsetMin = Vector2.zero;
        rect.offsetMax = Vector2.zero;
        Image hitSurface = root.GetComponent<Image>();
        hitSurface.color = new Color(0f, 0f, 0f, 0f);
        hitSurface.raycastTarget = true;
        Button screenButton = root.GetComponent<Button>();
        screenButton.transition = Selectable.Transition.None;
        screenButton.targetGraphic = hitSurface;

        Sprite fail = LoadSprite(ArtFolder + "v (2).png");
        Sprite retry = LoadSprite(ArtFolder + "v (1) 1.png");
        AddArtwork(root.transform, "Fail", fail, new Vector2(0f, 165f), new Vector2(700f, 230f));
        AddArtwork(root.transform, "CTA", retry, new Vector2(0f, -105f), new Vector2(620f, 220f));
        return root;
    }

    private static Transform GetMorphPosition(Renderer ski)
    {
        Transform marker = FindTransform("MorphPosition");
        if (marker != null) return marker;

        Bounds bounds = ski.localBounds;
        Vector3 localCenter = bounds.center;
        Vector3 positiveEnd = ski.transform.TransformPoint(localCenter + Vector3.forward * bounds.extents.z);
        Vector3 negativeEnd = ski.transform.TransformPoint(localCenter - Vector3.forward * bounds.extents.z);
        Vector3 top = positiveEnd.y >= negativeEnd.y ? positiveEnd : negativeEnd;

        GameObject markerObject = new GameObject("MorphPosition");
        SceneManager.MoveGameObjectToScene(markerObject, SceneManager.GetActiveScene());
        markerObject.transform.position = top + Vector3.up * 0.25f;
        EditorUtility.SetDirty(markerObject);
        return markerObject.transform;
    }

    private static Image AddArtwork(Transform parent, string name, Sprite sprite, Vector2 position, Vector2 maxSize)
    {
        GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
        go.layer = 5;
        RectTransform rect = go.GetComponent<RectTransform>();
        rect.SetParent(parent, false);
        rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.anchoredPosition = position;
        rect.sizeDelta = maxSize;
        Image image = go.GetComponent<Image>();
        image.sprite = sprite;
        image.preserveAspect = true;
        image.raycastTarget = false;
        return image;
    }

    private static Sprite LoadSprite(string path)
    {
        TextureImporter importer = AssetImporter.GetAtPath(path) as TextureImporter;
        if (importer == null) throw new System.InvalidOperationException("Missing lose UI image: " + path);
        if (importer.textureType != TextureImporterType.Sprite)
        {
            importer.textureType = TextureImporterType.Sprite;
            importer.SaveAndReimport();
        }
        return AssetDatabase.LoadAssetAtPath<Sprite>(path);
    }

    private static Transform FindTransform(string name)
    {
        Transform[] all = Object.FindObjectsByType<Transform>(FindObjectsInactive.Include, FindObjectsSortMode.None);
        for (int i = 0; i < all.Length; i++)
            if (all[i].name == name) return all[i];
        return null;
    }

    private static Renderer FindRenderer(string name)
    {
        Transform transform = FindTransform(name);
        return transform != null ? transform.GetComponent<Renderer>() : null;
    }

    private static GameObject FindSceneRoot(string name)
    {
        GameObject[] roots = SceneManager.GetActiveScene().GetRootGameObjects();
        for (int i = 0; i < roots.Length; i++)
            if (roots[i].name == name) return roots[i];
        return null;
    }
}
