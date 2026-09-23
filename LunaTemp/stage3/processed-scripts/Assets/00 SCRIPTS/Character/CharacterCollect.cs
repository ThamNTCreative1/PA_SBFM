using System.Collections;
using UnityEngine;

public class CharacterCollect : MonoBehaviour
{
    [SerializeField] private CharacterMotor motor;
    [SerializeField] private CharacterAnimation avatar;
    private Gift target;
    private void Update()
    {
        RunToTarget();
    }
    private void RunToTarget()
    {
        if (!target) return;
        motor.AutoRun(true, (target.transform.position - transform.position).normalized);
    }
    public void SetTarget(Gift t, Animator a)
    {
        target = t;
        StartCoroutine(CollectTarget(target, a));
    }
    private IEnumerator CollectTarget(Gift t, Animator a)
    {
        yield return new WaitUntil(() => t.collectDone);
        target = null;
        motor.AutoRun(false, Vector2.zero);
        avatar.SetAvatar(a);
    }
}