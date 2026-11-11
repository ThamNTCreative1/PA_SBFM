using UnityEngine;

[CreateAssetMenu(fileName = "PlayerSO", menuName = "FindMonster/PlayerSO", order = 0)]
public class PlayerSO : ScriptableObject
{
    [SerializeField] private float maxSpeed = 5;
    [SerializeField] private float jumpImpulse = 10;

    public float MaxSpeed { get { return maxSpeed; } }
    public float JumpImpulse { get { return jumpImpulse; } }
}
