using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

// Editor-only importer for the eight characters recovered from the supplied WebGL data.
public static class BrainrotSceneBuilder
{
    const string Root = "Assets/Brainrot";
    const string Source = Root + "/Editor/Source";
    static readonly string[] HudNames = { "Trenostruzzo\nTurbo 3000", "Bobritto\nBandito", "Boneca\nAmbalabu", "Chimpanzini\nBananini", "Zibra Zubra\nZibralini", "Orcalero\nOrcala", "Pi Pi Kiwi", "Svinino\nBombardino" };
    public const string ScenePath = "Assets/Scenes/FindFarmBrainrot.unity";
    [Serializable] public class Catalog { public Character[] characters; public Mat[] materials; }
    [Serializable] public class Character { public string name, key; public Node root; }
    [Serializable] public class Node { public string name, mesh; public Vector3 position, scale; public Quaternion rotation; public string[] materials; public Node[] children; }
    [Serializable] public class Mat { public string id, name; public Tex[] textures; public Col[] colors; }
    [Serializable] public class Tex { public string property, texture; public Vector2 scale, offset; }
    [Serializable] public class Col { public string property; public float r,g,b,a; }
    [Serializable] public class MeshData { public string name; public Vector3[] vertices,normals; public Vector2[] uv; public Submesh[] submeshes; }
    [Serializable] public class Submesh { public int[] triangles; }

    [MenuItem("Tools/Brainrot/Create FindFarm Brainrot")]
    public static void Create()
    {
        if (File.Exists(ScenePath)) throw new InvalidOperationException("Scene already exists: " + ScenePath);
        var catalog = JsonUtility.FromJson<Catalog>(File.ReadAllText(Source + "/catalog.json"));
        foreach (var d in new[]{"Meshes","Materials","Textures","Icons","Prefabs"}) Directory.CreateDirectory(Root+"/"+d);
        foreach(var file in Directory.GetFiles(Source,"*.png"))
        {
            var dest=Root+(Path.GetFileName(file).StartsWith("icon_")?"/Icons/":"/Textures/")+Path.GetFileName(file);
            if(!File.Exists(dest)) File.Copy(file,dest);
        }
        AssetDatabase.Refresh();
        foreach(var file in Directory.GetFiles(Root+"/Icons","*.png"))
        {
            var ti=(TextureImporter)AssetImporter.GetAtPath(file.Replace('\\','/'));
            ti.textureType=TextureImporterType.Sprite; ti.spriteImportMode=SpriteImportMode.Single;
            ti.alphaIsTransparency=true;ti.mipmapEnabled=false;ti.maxTextureSize=512;ti.textureCompression=TextureImporterCompression.Uncompressed;ti.SaveAndReimport();
        }
        foreach(var file in Directory.GetFiles(Root+"/Textures","*.png"))
        {
            var ti=(TextureImporter)AssetImporter.GetAtPath(file.Replace('\\','/'));
            ti.maxTextureSize=1024;ti.textureCompression=TextureImporterCompression.Uncompressed;ti.SaveAndReimport();
        }
        var meshes = new Dictionary<string,Mesh>();
        foreach(var file in Directory.GetFiles(Source,"mesh_*.json"))
        {
            var d=JsonUtility.FromJson<MeshData>(File.ReadAllText(file));
            var id=Path.GetFileNameWithoutExtension(file).Substring(5);
            var m=new Mesh {name=d.name,vertices=d.vertices,uv=d.uv};
            m.subMeshCount=d.submeshes.Length;
            for(int i=0;i<d.submeshes.Length;i++)m.SetTriangles(d.submeshes[i].triangles,i);
            if(d.normals.Length==d.vertices.Length)m.normals=d.normals;else m.RecalculateNormals();
            m.RecalculateBounds();
            AssetDatabase.CreateAsset(m,Root+"/Meshes/"+d.name+".asset");meshes[id]=m;
        }
        var shader=AssetDatabase.LoadAssetAtPath<Shader>("Assets/Shader/Universal Render Pipeline_Lit.shader");
        if(shader==null)throw new InvalidOperationException("Missing project shader");
        var mats=new Dictionary<string,Material>();
        foreach(var d in catalog.materials)
        {
            var m=new Material(shader){name=d.name};
            foreach(var c in d.colors)if(m.HasProperty(c.property))m.SetColor(c.property,new Color(c.r,c.g,c.b,c.a));
            foreach(var t in d.textures)if(m.HasProperty(t.property))
            {
                m.SetTexture(t.property,AssetDatabase.LoadAssetAtPath<Texture2D>(Root+"/Textures/texture_"+t.texture+".png"));
                m.SetTextureScale(t.property,t.scale);m.SetTextureOffset(t.property,t.offset);
            }
            AssetDatabase.CreateAsset(m,Root+"/Materials/"+d.id+"_"+d.name+".mat");mats[d.id]=m;
        }
        var prefabs=new List<GameObject>();
        var preview=EditorSceneManager.NewPreviewScene();
        try
        {
            foreach(var c in catalog.characters)
            {
                var root=new GameObject(c.key);SceneManager.MoveGameObjectToScene(root,preview);
                var visual=MakeNode(c.root,root.transform,meshes,mats);
                visual.transform.localRotation=Quaternion.Euler(0,180,0)*visual.transform.localRotation;
                var bounds=BoundsIn(visual,root.transform);
                float fit=Mathf.Min(2.25f/bounds.size.y,2.0f/bounds.size.x,2.0f/bounds.size.z);
                visual.transform.localScale*=fit;
                visual.transform.localPosition=new Vector3(-bounds.center.x*fit,-bounds.min.y*fit,-bounds.center.z*fit);
                prefabs.Add(PrefabUtility.SaveAsPrefabAsset(root,Root+"/Prefabs/"+c.key+".prefab"));
                UnityEngine.Object.DestroyImmediate(root);
            }
        }
        finally{EditorSceneManager.ClosePreviewScene(preview);}
        if(!AssetDatabase.CopyAsset("Assets/Scenes/FindFarm.unity",ScenePath))throw new Exception("Scene copy failed");
        var scene=EditorSceneManager.OpenScene(ScenePath,OpenSceneMode.Additive);
        var selector=scene.GetRootGameObjects().SelectMany(g=>g.GetComponentsInChildren<MonsterSelector>(true)).Single();
        var so=new SerializedObject(selector);var entries=so.FindProperty("monsters");
        var original=entries.GetArrayElementAtIndex(0).FindPropertyRelative("model").objectReferenceValue as GameObject;
        var parent=original.transform.parent;
        float floor=BoundsIn(original,parent).min.y;
        var player=scene.GetRootGameObjects().SelectMany(g=>g.GetComponentsInChildren<Transform>(true)).FirstOrDefault(t=>t.CompareTag("Player"));
        var facing=Quaternion.identity;
        if(player!=null){var direction=player.position-selector.transform.position;direction.y=0;if(direction.sqrMagnitude>0.001f)facing=Quaternion.LookRotation(-direction.normalized,Vector3.up);}
        var oldModels=new List<GameObject>();
        for(int i=0;i<entries.arraySize;i++)oldModels.Add(entries.GetArrayElementAtIndex(i).FindPropertyRelative("model").objectReferenceValue as GameObject);
        entries.arraySize=catalog.characters.Length;
        for(int i=0;i<catalog.characters.Length;i++)
        {
            var go=(GameObject)PrefabUtility.InstantiatePrefab(prefabs[i],scene);
            go.transform.SetParent(parent,false);go.transform.localPosition=new Vector3(0,floor,0);go.transform.rotation=facing;go.layer=selector.gameObject.layer;
            foreach(var t in go.GetComponentsInChildren<Transform>(true))t.gameObject.layer=selector.gameObject.layer;
            var entry=entries.GetArrayElementAtIndex(i);
            entry.FindPropertyRelative("displayName").stringValue=HudNames[i];
            entry.FindPropertyRelative("model").objectReferenceValue=go;
            entry.FindPropertyRelative("icon").objectReferenceValue=AssetDatabase.LoadAssetAtPath<Sprite>(Root+"/Icons/icon_"+i+".png");
        }
        so.FindProperty("monsterIndex").intValue=0;so.ApplyModifiedPropertiesWithoutUndo();
        var hudName=(TMPro.TMP_Text)so.FindProperty("hudName").objectReferenceValue;
        if(hudName!=null)
        {
            hudName.rectTransform.pivot=new Vector2(0,0.5f);
            hudName.rectTransform.anchoredPosition=new Vector2(-100,-140);
            hudName.rectTransform.sizeDelta=new Vector2(620,130);
            hudName.alignment=TMPro.TextAlignmentOptions.Top;
            hudName.enableAutoSizing=true;hudName.fontSize=54;hudName.fontSizeMin=42;hudName.fontSizeMax=54;
            hudName.overflowMode=TMPro.TextOverflowModes.Truncate;
        }
        foreach(var go in oldModels)if(go!=null)UnityEngine.Object.DestroyImmediate(go);
        var luna=scene.GetRootGameObjects().SelectMany(g=>g.GetComponentsInChildren<LunaController>(true)).Single();
        luna.MonsterIndex=0;selector.MonsterIndex=0;
        EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);AssetDatabase.SaveAssets();
        SceneManager.SetActiveScene(scene);
        Debug.Log("FindFarmBrainrot created with eight recovered models and original icons.");
    }
    static GameObject MakeNode(Node n,Transform parent,Dictionary<string,Mesh> meshes,Dictionary<string,Material> mats)
    {
        var go=new GameObject(n.name);go.transform.SetParent(parent,false);
        go.transform.localPosition=n.position;go.transform.localRotation=n.rotation;go.transform.localScale=n.scale;
        if(!string.IsNullOrEmpty(n.mesh))
        {
            go.AddComponent<MeshFilter>().sharedMesh=meshes[n.mesh];
            go.AddComponent<MeshRenderer>().sharedMaterials=n.materials.Select(id=>mats[id]).ToArray();
        }
        foreach(var c in n.children)MakeNode(c,go.transform,meshes,mats);
        return go;
    }
    public static Bounds BoundsIn(GameObject go,Transform relative)
    {
        bool first=true;var b=new Bounds();
        foreach(var mf in go.GetComponentsInChildren<MeshFilter>(true))
        {
            var bb=mf.sharedMesh.bounds;var matrix=relative.worldToLocalMatrix*mf.transform.localToWorldMatrix;
            for(int i=0;i<8;i++)
            {
                var p=matrix.MultiplyPoint3x4(bb.center+Vector3.Scale(bb.extents,new Vector3((i&1)==0?-1:1,(i&2)==0?-1:1,(i&4)==0?-1:1)));
                if(first){b=new Bounds(p,Vector3.zero);first=false;}else b.Encapsulate(p);
            }
        }
        return b;
    }
}
