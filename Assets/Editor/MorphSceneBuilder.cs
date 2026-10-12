using System.IO;
using TMPro;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.UI;

/// <summary>Rebuilds the authored V08 UI and lightweight visuals from the source assets.</summary>
public static class MorphSceneBuilder
{
    private const string Output = "Assets/01 RESOURCES/MorphSelection";
    private const string Art = "Assets/01 RESOURCES/Texture/V08/";

    [MenuItem("Tools/Morph/Build Selection Flow")]
    public static void Build()
    {
        if (EditorApplication.isPlaying) throw new System.InvalidOperationException("Exit Play Mode first.");
        Directory.CreateDirectory(Output);
        AssetDatabase.Refresh();
        GameController controller = Object.FindFirstObjectByType<GameController>();
        if (controller == null) throw new System.InvalidOperationException("Open the game scene first.");
        GameObject previous = GameObject.Find("Morph Selection");
        if (previous != null) Object.DestroyImmediate(previous);
        GameObject ui = null;
        foreach (var sceneRoot in controller.gameObject.scene.GetRootGameObjects())
            if (sceneRoot.name == "UI") ui = sceneRoot;
        if (ui == null) throw new System.InvalidOperationException("The scene needs its UI canvas.");
        ui.SetActive(true);
        var root = new GameObject("Morph Selection", typeof(RectTransform), typeof(Canvas), typeof(GraphicRaycaster));
        root.transform.SetParent(ui.transform, false);
        root.AddComponent<MorphSelectionLayout>();
        root.layer = 5;
        var canvas = root.GetComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.overrideSorting = true;
        canvas.sortingOrder = 20;
        var flow = root.AddComponent<MorphSelectionFlow>();
        var so = new SerializedObject(flow);

        Image backdrop = Image("Backdrop", root.transform, null, Vector2.zero, Vector2.zero);
        backdrop.color = new Color(0.02f, 0.06f, 0.13f, 0.62f);
        Stretch(backdrop.rectTransform);
        backdrop.raycastTarget = true;
        var selection = Rect("Selection", root.transform, Vector2.zero, new Vector2(940, 800));
        Image("Choose Your Morph!", selection, Sprite(Art + "Choose Your Morph!.png"), new Vector2(0, 352), new Vector2(790, 90));
        Image frame = Image("Morph Panel", selection, Sprite(Art + "Group 3.png"), new Vector2(0, -48), new Vector2(900, 690));
        Image("Panel Interior", frame.transform, Sprite(Art + "Rectangle 10.png"), new Vector2(0, -48), new Vector2(848, 536));
        var entries = so.FindProperty("morphs");
        entries.arraySize = 6;
        for (int i = 0; i < 6; i++)
        {
            int id = 19 + i;
            GameObject visual = BuildVisual(id);
            Sprite portrait = Sprite(Art + "c" + id + ".png");
            Vector2 position = new Vector2((i % 3 - 1) * 276, 87 - (i / 3) * 270);
            Image card = Image("HiddenCharacter" + id, frame.transform, Sprite(Art + "Rectangle 7.png"), position, new Vector2(260, 258));
            card.raycastTarget = true;
            Button button = card.gameObject.AddComponent<Button>();
            button.targetGraphic = card;
            Text("Name", card.transform, "HiddenCharacter" + id, new Vector2(0, 106), new Vector2(250, 36), 24);
            var icon = Image("Portrait", card.transform, portrait, new Vector2(0, 3), new Vector2(210, 177));
            icon.SetNativeSize();
            icon.preserveAspect = true;
            Vector2 nativeSize = icon.rectTransform.sizeDelta;
            icon.rectTransform.localScale = Vector3.one * Mathf.Min(210f / nativeSize.x, 177f / nativeSize.y);
            Image("Select", card.transform, Sprite(Art + "seclect.png"), new Vector2(0, -94), new Vector2(238, 66));
            var badge = Image("Unlocked Badge", card.transform, Sprite(Art + "Rectangle 10.png"), new Vector2(0, -94), new Vector2(232, 60));
            var badgeText = Text("Label", badge.transform, "UNLOCKED", Vector2.zero, new Vector2(232, 60), 27);
            badgeText.color = new Color(1f, 0.94f, 0.2f);
            badge.gameObject.SetActive(false);
            var entry = entries.GetArrayElementAtIndex(i);
            entry.FindPropertyRelative("prefab").objectReferenceValue = visual;
            entry.FindPropertyRelative("portrait").objectReferenceValue = portrait;
            entry.FindPropertyRelative("card").objectReferenceValue = button;
            entry.FindPropertyRelative("unlockedBadge").objectReferenceValue = badge.gameObject;
        }

        var preview = Rect("Preview", root.transform, Vector2.zero, new Vector2(940, 800));
        Image("Choose Your Morph!", preview, Sprite(Art + "Choose Your Morph!.png"), new Vector2(0, 352), new Vector2(790, 90));
        var aura = Image("Rotating Aura", preview, Sprite("Assets/01 RESOURCES/Texture/V03 - Choose Your Map (Assets playable) (HoaiTT) (AnhNTN) (1)/aura.png"), new Vector2(0, 0), new Vector2(600, 600));
        aura.preserveAspect = true;
        var portraitImage = Image("Morph Portrait", preview, null, new Vector2(0, 0), new Vector2(440, 465));
        portraitImage.preserveAspect = true;
        var previewName = Text("Name", preview, "", new Vector2(0, 268), new Vector2(740, 58), 44);
        Button confirm = Button("Select", preview, Sprite(Art + "seclect.png"), new Vector2(0, -300), new Vector2(360, 115));
        Button back = Button("Back", preview, Sprite(Art + "Rectangle 10.png"), new Vector2(-355, -310), new Vector2(150, 68));
        Text("Label", back.transform, "Back", Vector2.zero, new Vector2(145, 62), 32);
        preview.gameObject.SetActive(false);
        var unlocked = Text("Morph Unlocked!", root.transform, "Morph Unlocked!", new Vector2(0, 280), new Vector2(940, 130), 76);
        unlocked.color = new Color(1f, 0.94f, 0.22f);
        unlocked.gameObject.SetActive(false);
        Set(so, "selectionPanel", selection.gameObject);
        Set(so, "previewPanel", preview.gameObject);
        Set(so, "backdrop", backdrop.gameObject);
        Set(so, "previewImage", portraitImage);
        Set(so, "aura", aura.rectTransform);
        Set(so, "selectButton", confirm);
        Set(so, "unlockedMessage", unlocked.gameObject);
        Camera camera = Object.FindFirstObjectByType<Camera>();
        if (camera == null) throw new System.InvalidOperationException("The scene needs a game camera.");
        Set(so, "revealCamera", camera);
        var spawn = controller.transform.Find("Morph Spawn");
        if (spawn == null) spawn = new GameObject("Morph Spawn").transform;
        spawn.SetParent(controller.transform, false);
        // Center of the current amusement park, just above the central walkway.
        spawn.position = new Vector3(0f, -0.4f, 0f);
        spawn.rotation = Quaternion.identity;
        Set(so, "spawnPoint", spawn);
        var hidden = new System.Collections.Generic.List<GameObject>();
        var inputUI = ui.transform.Find("Input");
        if (inputUI != null) hidden.Add(inputUI.gameObject);
        foreach (var sceneRoot in UnityEngine.SceneManagement.SceneManager.GetActiveScene().GetRootGameObjects())
        {
            if (sceneRoot.name == "InputManager" || sceneRoot.GetComponent<Gift>() != null)
                hidden.Add(sceneRoot);
        }
        CharacterMotor player = Object.FindFirstObjectByType<CharacterMotor>(FindObjectsInactive.Include);
        if (player != null) hidden.Add(player.gameObject);
        var hide = so.FindProperty("hideOnStart");
        hide.arraySize = hidden.Count;
        for (int i = 0; i < hidden.Count; i++)
        {
            hide.GetArrayElementAtIndex(i).objectReferenceValue = hidden[i];
            hidden[i].SetActive(false);
        }
        var disabled = new System.Collections.Generic.List<Behaviour>();
        disabled.AddRange(camera.GetComponentsInParent<CameraFollow>(true));
        disabled.AddRange(camera.GetComponentsInParent<CameraLook>(true));
        var disable = so.FindProperty("disableOnStart");
        disable.arraySize = disabled.Count;
        for (int i = 0; i < disabled.Count; i++)
        {
            disable.GetArrayElementAtIndex(i).objectReferenceValue = disabled[i];
            disabled[i].enabled = false;
        }
        so.ApplyModifiedPropertiesWithoutUndo();
        var game = new SerializedObject(controller);
        Set(game, "morphSelection", flow);
        game.ApplyModifiedPropertiesWithoutUndo();
        LunaController luna = Object.FindFirstObjectByType<LunaController>();
        if (luna != null)
        {
            luna.LimitTimePlay = false;
            EditorUtility.SetDirty(luna);
            var ls = new SerializedObject(luna);
            var cta = ls.FindProperty("CTA").objectReferenceValue as Button;
            if (cta != null) cta.gameObject.SetActive(false);
        }
        // CTA must remain above the new morph canvas.
        GameObject ctaRoot = GameObject.Find("CTA");
        if (ctaRoot != null) ctaRoot.GetComponent<Canvas>().sortingOrder = 30;
        EditorSceneManager.MarkSceneDirty(controller.gameObject.scene);
        EditorSceneManager.SaveScene(controller.gameObject.scene);
        AssetDatabase.SaveAssets();
        Selection.activeGameObject = root;
        Debug.Log("Morph selection built: six cards, preview, two reveals, CTA.");
    }

    private static GameObject BuildVisual(int id)
    {
        var source = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/MiniGames/FindMonster/Prefab/Monster/HiddenCharacter" + id + ".prefab");
        var root = new GameObject("Morph" + id);
        var model = Object.Instantiate(source.transform.GetChild(0).gameObject, root.transform);
        model.name = source.transform.GetChild(0).name;
        foreach (var t in root.GetComponentsInChildren<Transform>(true))
        {
            GameObjectUtility.RemoveMonoBehavioursWithMissingScript(t.gameObject);
            t.gameObject.layer = 0;
        }
        foreach (var c in root.GetComponentsInChildren<Collider>(true)) Object.DestroyImmediate(c);
        foreach (var a in root.GetComponentsInChildren<AudioSource>(true)) Object.DestroyImmediate(a);
        Bounds bounds = Bounds(root);
        model.transform.localScale *= 5f / Mathf.Max(0.01f, bounds.size.y);
        bounds = Bounds(root);
        model.transform.position -= new Vector3(bounds.center.x, bounds.min.y, bounds.center.z);
        var prefab = PrefabUtility.SaveAsPrefabAsset(root, Output + "/Morph" + id + ".prefab");
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static Sprite RenderPortrait(GameObject prefab, int id)
    {
        var model = Object.Instantiate(prefab);
        model.transform.position = new Vector3(0, -1000, 0);
        foreach (var t in model.GetComponentsInChildren<Transform>(true)) t.gameObject.layer = 31;
        // The imported particle shaders only write RGB. Use opaque preview materials
        // so the rendered portrait also contains a proper alpha silhouette.
        var previewMaterials = new System.Collections.Generic.List<Material>();
        foreach (var renderer in model.GetComponentsInChildren<Renderer>())
        {
            var materials = renderer.sharedMaterials;
            for (int i = 0; i < materials.Length; i++)
            {
                if (materials[i] == null || materials[i].shader.name != "Particles/Standard Unlit") continue;
                var material = new Material(Shader.Find("Unlit/Color"));
                material.color = materials[i].color;
                materials[i] = material;
                previewMaterials.Add(material);
            }
            renderer.sharedMaterials = materials;
        }
        Bounds bounds = Bounds(model);
        var go = new GameObject("Portrait Camera", typeof(Camera));
        var camera = go.GetComponent<Camera>();
        camera.enabled = false;
        camera.clearFlags = CameraClearFlags.SolidColor;
        camera.backgroundColor = Color.clear;
        camera.cullingMask = 1 << 31;
        camera.orthographic = true;
        camera.orthographicSize = Mathf.Max(bounds.extents.y, bounds.extents.x) * 1.12f;
        camera.transform.position = bounds.center + new Vector3(0, 0, 20);
        camera.transform.LookAt(bounds.center);
        camera.nearClipPlane = 0.1f;
        camera.farClipPlane = 40f;
        var rt = new RenderTexture(512, 512, 24, RenderTextureFormat.ARGB32);
        var previous = RenderTexture.active;
        camera.targetTexture = rt;
        camera.Render();
        RenderTexture.active = rt;
        var texture = new Texture2D(512, 512, TextureFormat.RGBA32, false);
        texture.ReadPixels(new Rect(0, 0, 512, 512), 0, 0);
        texture.Apply();
        string path = Output + "/HiddenCharacter" + id + ".png";
        File.WriteAllBytes(path, texture.EncodeToPNG());
        RenderTexture.active = previous;
        camera.targetTexture = null;
        Object.DestroyImmediate(texture);
        rt.Release();
        Object.DestroyImmediate(rt);
        Object.DestroyImmediate(go);
        Object.DestroyImmediate(model);
        foreach (var material in previewMaterials) Object.DestroyImmediate(material);
        AssetDatabase.ImportAsset(path);
        return Sprite(path);
    }

    private static Bounds Bounds(GameObject root)
    {
        var renderers = root.GetComponentsInChildren<Renderer>();
        var bounds = renderers[0].bounds;
        for (int i = 1; i < renderers.Length; i++) bounds.Encapsulate(renderers[i].bounds);
        return bounds;
    }

    private static Sprite Sprite(string path)
    {
        var importer = AssetImporter.GetAtPath(path) as TextureImporter;
        if (importer == null) throw new System.InvalidOperationException("Missing texture: " + path);
        if (importer.textureType != TextureImporterType.Sprite || importer.spriteImportMode != SpriteImportMode.Single ||
            importer.textureCompression != TextureImporterCompression.Uncompressed)
        {
            importer.textureType = TextureImporterType.Sprite;
            importer.spriteImportMode = SpriteImportMode.Single;
            importer.alphaIsTransparency = true;
            importer.mipmapEnabled = false;
            importer.textureCompression = TextureImporterCompression.Uncompressed;
            importer.crunchedCompression = false;
            importer.filterMode = FilterMode.Bilinear;
            importer.SaveAndReimport();
        }
        return AssetDatabase.LoadAssetAtPath<Sprite>(path);
    }

    private static RectTransform Rect(string name, Transform parent, Vector2 position, Vector2 size)
    {
        var go = new GameObject(name, typeof(RectTransform));
        go.layer = 5;
        var rect = go.GetComponent<RectTransform>();
        rect.SetParent(parent, false);
        rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.anchoredPosition = position;
        rect.sizeDelta = size;
        return rect;
    }

    private static Image Image(string name, Transform parent, Sprite sprite, Vector2 position, Vector2 size)
    {
        var image = Rect(name, parent, position, size).gameObject.AddComponent<Image>();
        image.sprite = sprite;
        image.preserveAspect = sprite != null;
        image.raycastTarget = false;
        if (name == "Choose Your Morph!") image.gameObject.AddComponent<MorphTitlePulse>();
        return image;
    }

    private static Button Button(string name, Transform parent, Sprite sprite, Vector2 position, Vector2 size)
    {
        var image = Image(name, parent, sprite, position, size);
        image.raycastTarget = true;
        var button = image.gameObject.AddComponent<Button>();
        button.targetGraphic = image;
        return button;
    }

    private static TextMeshProUGUI Text(string name, Transform parent, string value, Vector2 position, Vector2 size, float fontSize)
    {
        var text = Rect(name, parent, position, size).gameObject.AddComponent<TextMeshProUGUI>();
        text.text = value;
        text.font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>("Assets/01 RESOURCES/Fonts/SDF/Roboto-Regular SDF.asset");
        text.fontSize = fontSize;
        text.fontStyle = FontStyles.Bold;
        text.alignment = TextAlignmentOptions.Center;
        text.raycastTarget = false;
        text.outlineWidth = 0.2f;
        text.outlineColor = Color.black;
        return text;
    }

    private static void Stretch(RectTransform rect)
    {
        rect.anchorMin = Vector2.zero;
        rect.anchorMax = Vector2.one;
        rect.offsetMin = rect.offsetMax = Vector2.zero;
    }

    private static void Set(SerializedObject so, string name, Object value)
    {
        so.FindProperty(name).objectReferenceValue = value;
    }
}
