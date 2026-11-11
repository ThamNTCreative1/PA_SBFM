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
    // Morph shown at each hidden spot (1 = in the pen, 2 = on the chimney). 0 Los Tralaleritos, 1 Bambini Crostino,
    // 2 Trenostruzzo Turbo 3000, 3 Bobrito Bandito, 4 Boneca Ambalabu, 5 Chimpanzini Bananini, 6 Zibra Zubra Zibralini,
    // 7 Orcalero Orcala, 8 Pi Pi Kiwi, 9 Svinina Bombardino (list in MorphHuntStory.morphOptions).
    [LunaPlaygroundField("Type Morph 1: 0 -> 9")] public int TypeMorph1 = 0;
    [LunaPlaygroundField("Type Morph 2: 0 -> 9")] public int TypeMorph2 = 1;
    [LunaPlaygroundField("Limit Click?")] public bool LimitClick = false;
    [LunaPlaygroundField("Max Click")] public int MaxClick = 30;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;

    private int clicks;
    public int Clicks { get { return clicks; } }

    [SerializeField] private AudioSource musicSource;
    [SerializeField, Range(0, 1)] private float musicVolume = 0.68f;
    [SerializeField] private List<Button> CTA = new List<Button>();
    [Tooltip("End UI: the end display (background, title). Shown with the End Card when the game ends.")]
    [SerializeField] private GameObject endUI;
    [Tooltip("End Card: the PLAY NOW button. Shown alone when MaxClick is reached.")]
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
        if (endUI) endUI.SetActive(false);
        if (endCard) endCard.SetActive(false);
        StartCoroutine(EndAfterTime());
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    // Every tap on the screen counts as one click (touches arrive as mouse button 0); at MaxClick only the End Card
    // (PLAY NOW button) shows, without the End UI.
    private void Update()
    {
        if (!LimitClick || ended) return;
        if (!Input.GetMouseButtonDown(0)) return;
        clicks++;
        if (clicks >= MaxClick) ShowEndCard();
    }

    // "Watch ad" buttons of the source game: either give the reward right away or go to the store.
    public static void Rewarded(Action onReward)
    {
        if (onReward != null) onReward();
    }

    // Luna's GameEnded is sent only when TimePlay runs out (never from the end card / end UI).
    private bool gameEndedSent;
    private void SendGameEnded()
    {
        if (gameEndedSent) return;
        gameEndedSent = true;
        Luna.Unity.LifeCycle.GameEnded();
    }

    // Game over (storyline finished, time up): the End UI together with the End Card.
    public void ShowEndUI()
    {
        ended = true;
        if (endUI) endUI.SetActive(true);
        if (endCard) endCard.SetActive(true);
    }

    // Only the End Card (PLAY NOW button), e.g. when MaxClick is reached.
    public void ShowEndCard()
    {
        ended = true;
        if (endCard) endCard.SetActive(true);
    }

    public void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private IEnumerator EndAfterTime()
    {
        yield return new WaitForSeconds(TimePlay);
        SendGameEnded();
        if (LimitTimePlay && !ended) ShowEndUI();
    }
}
