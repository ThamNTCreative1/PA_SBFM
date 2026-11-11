using System.Collections;
using UnityEngine;

public class FindMonsterPlayerControl : MonoBehaviour
{
    public const float BoostDuration = 30f;

    [Header("Data")]
    public PlayerSO playerSO;

    [Header("Player")]
    public GameObject playerBase;
    public Transform morphRoot;

    [Header("Fx")]
    public ParticleSystem poopFx;
    public Transform poopRoot;
    public ParticleSystem trailSpeed;

    [Header("Audio")]
    [SerializeField] private FMAudio popSound;

    private FMCharacter character;
    private Coroutine speedRoutine, jumpRoutine;

    private void Awake()
    {
        character = GetComponent<FMCharacter>();
        FindMonsterEvent.BoostSpeed += BoostSpeed;
        FindMonsterEvent.BoostJump += BoostJump;
        FindMonsterEvent.Morph += Morph;
        FindMonsterEvent.ResetMorph += ResetMorph;
        if (trailSpeed) trailSpeed.gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        FindMonsterEvent.BoostSpeed -= BoostSpeed;
        FindMonsterEvent.BoostJump -= BoostJump;
        FindMonsterEvent.Morph -= Morph;
        FindMonsterEvent.ResetMorph -= ResetMorph;
    }

    private void Start()
    {
        if (playerSO)
        {
            character.maxWalkSpeed = playerSO.MaxSpeed;
            character.jumpImpulse = playerSO.JumpImpulse;
        }
    }

    private void Update()
    {
        if (transform.position.y <= -10 && FindMonsterManager.Instance)
            character.SetPosition(FindMonsterManager.Instance.GetPositionRespawn(transform));
    }

    private void PlayPoof()
    {
        if (poopFx)
        {
            Vector3 at = poopRoot ? poopRoot.position : transform.position;
            // Luna can only clone GameObjects (or script components), not a ParticleSystem reference
            GameObject fx = Instantiate(poopFx.gameObject, at, Quaternion.identity);
            ParticleSystem ps = fx.GetComponent<ParticleSystem>();
            if (ps) ps.Play();
            Destroy(fx, 3f);
        }
        popSound.Play();
    }

    private void ClearMorph()
    {
        if (morphRoot == null) return;
        for (int i = morphRoot.childCount - 1; i >= 0; i--) Destroy(morphRoot.GetChild(i).gameObject);
    }

    public void Morph(MonsterSO so)
    {
        if (so == null || so.prefab == null || morphRoot == null) return;
        ClearMorph();
        GameObject skin = Instantiate(so.prefab, morphRoot.position, transform.rotation, morphRoot);
        MakeSkin(skin);
        PlayPoof();
        if (playerBase) playerBase.SetActive(false);
    }

    private void ResetMorph()
    {
        ClearMorph();
        PlayPoof();
        if (playerBase) playerBase.SetActive(true);
    }

    // A hidden-monster prefab used as a costume: no pickup logic and no colliders (they would block the CharacterController).
    public static void MakeSkin(GameObject skin)
    {
        HiddenMonster hidden = skin.GetComponent<HiddenMonster>();
        if (hidden)
        {
            hidden.enabled = false;
            if (hidden.CheckMark) hidden.CheckMark.SetActive(false);
            if (hidden.ClaimFx) hidden.ClaimFx.gameObject.SetActive(false);
            Destroy(hidden);
        }
        foreach (Collider c in skin.GetComponentsInChildren<Collider>(true)) c.enabled = false;
    }

    private void BoostJump()
    {
        if (jumpRoutine != null) StopCoroutine(jumpRoutine);
        jumpRoutine = StartCoroutine(JumpRoutine());
    }

    private IEnumerator JumpRoutine()
    {
        float baseJump = playerSO ? playerSO.JumpImpulse : character.jumpImpulse;
        character.jumpImpulse = baseJump * 2;
        yield return new WaitForSeconds(BoostDuration);
        character.jumpImpulse = baseJump;
        jumpRoutine = null;
    }

    private void BoostSpeed()
    {
        if (speedRoutine != null) StopCoroutine(speedRoutine);
        speedRoutine = StartCoroutine(SpeedRoutine());
    }

    private IEnumerator SpeedRoutine()
    {
        float baseSpeed = playerSO ? playerSO.MaxSpeed : character.maxWalkSpeed;
        if (trailSpeed) { trailSpeed.gameObject.SetActive(true); trailSpeed.Play(); }
        character.maxWalkSpeed = baseSpeed * 2;
        character.SetMoveAnimSpeed(2);
        yield return new WaitForSeconds(BoostDuration);
        if (trailSpeed) trailSpeed.gameObject.SetActive(false);
        character.maxWalkSpeed = baseSpeed;
        character.SetMoveAnimSpeed(1);
        speedRoutine = null;
    }
}
