using UnityEngine;

public class CharacterFootstep : MonoBehaviour
{
    [SerializeField] private FMCharacter ecmCharacter;
    [SerializeField] private FMAudio audioSource;
    [SerializeField] private float speed;

    private float remainingToNextStep = 1;

    private void Start()
    {
        if (ecmCharacter == null || audioSource == null || audioSource.IsEmpty) enabled = false;
    }

    private void Update()
    {
        if (ecmCharacter.IsWalking())
        {
            remainingToNextStep -= ecmCharacter.speed * Time.deltaTime * speed;
            if (remainingToNextStep <= 0)
            {
                remainingToNextStep = 1;
                audioSource.PlayAtPosition(transform.position);
            }
        }
        else remainingToNextStep = 1;
    }
}
