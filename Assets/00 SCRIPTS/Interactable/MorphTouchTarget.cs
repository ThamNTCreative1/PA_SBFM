using UnityEngine;

public class MorphTouchTarget : MonoBehaviour
{
    private GameController owner;

    public void Initialize(GameController controller)
    {
        owner = controller;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (owner != null && other.CompareTag("Player"))
            owner.CompleteMorph();
    }
}
