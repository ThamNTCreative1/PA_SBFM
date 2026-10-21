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
}