using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Luna Playworks integration only: playground fields, lifecycle, CTA, end card. Gameplay lives in 00 SCRIPTS/Gameplay.
public class LunaController : MonoBehaviour
{
    public static LunaController Instance { get; private set; }

    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay = 60;
    [LunaPlaygroundField("Use Hand")] public bool UseHand = true;
    //[LunaPlaygroundField("Limit Monsters Found?")] public bool LimitMonsterFound = true;
    //[LunaPlaygroundField("Monsters Found To End")] public int MonstersToEnd = 3;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;

    [SerializeField] private AudioSource musicSource;
    [SerializeField, Range(0, 1)] private float musicVolume = 0.68f;
    [SerializeField] private List<Button> CTA = new List<Button>();
    [SerializeField] private GameObject endCard;

    private bool ended;
    public bool Ended { get { return ended; } }

    private void Awake()
    {
        Instance = this;
        PatchMeshColliderUV();
    }

    // Luna engine bug: when the CharacterController touches several MeshColliders, CharacterController.Move computes
    // the hit UV with a triangle index from another collider's mesh and throws "Cannot read properties of undefined
    // (reading 'indexBuffer')" in Mesh.getUVInTriangle, which aborts the move. The game never reads the UV, so an
    // out-of-range triangle falls back to triangle 0 instead of throwing.
    private static void PatchMeshColliderUV()
    {
#if UNITY_LUNA
        Bridge.Script.Eval(@"(function(){
            var cols=UnityEngine.Object.FindObjectsOfType(UnityEngine.MeshCollider);
            for(var i=0;i<cols.length;i++){
                var w=cols[i].sharedMesh; if(!w)continue;
                for(var k in w){
                    var v; try{v=w[k];}catch(e){continue;}
                    if(!v||typeof v!=='object')continue;
                    var p=v; while(p&&!Object.prototype.hasOwnProperty.call(p,'getUVInTriangle'))p=Object.getPrototypeOf(p);
                    if(!p)continue;
                    if(p.__uvPatched)return;
                    var orig=p.getUVInTriangle;
                    p.getUVInTriangle=function(e,t){try{return orig.call(this,e,t);}catch(x){try{return orig.call(this,0,t);}catch(y){return orig.call(this,0,0);}}};
                    p.__uvPatched=true; return;
                }
            }
        })();");
#endif
    }

    private void Start()
    {
        if (BGM && musicSource) { musicSource.clip = BGM; musicSource.loop = true; musicSource.volume = musicVolume; musicSource.Play(); }
        foreach (Button b in CTA) if (b) b.onClick.AddListener(ClickCTA);
        if (endCard) endCard.SetActive(false);
        StartCoroutine(EndAfterTime());
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    // "Watch ad" buttons of the source game: either give the reward right away or go to the store.
    public static void Rewarded(Action onReward)
    {
        if (onReward != null) onReward();
    }

    public void MonsterFound(int count)
    {
        //if (LimitMonsterFound && count >= MonstersToEnd) ShowEndCard();
    }

    public void ShowEndCard()
    {
        if (endCard) endCard.SetActive(true);
    }

    public void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private IEnumerator EndAfterTime()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) ShowEndCard();
    }
}
