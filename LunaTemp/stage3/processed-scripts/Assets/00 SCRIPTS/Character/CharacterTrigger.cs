using UnityEngine;

public class CharacterTrigger : MonoBehaviour
{
    [SerializeField] private bool onTrigger1;

    [SerializeField] private bool completeGift1;

    [SerializeField] private bool onTrigger2;

    [SerializeField] private bool completeGift2;

    private void OnTriggerEnter(Collider collision)
    {
        if (collision.gameObject.CompareTag("Trigger1"))
        {
            if (completeGift1) return;
            onTrigger1 = true;
        }
        if (collision.gameObject.CompareTag("Trigger2"))
        {
            if (completeGift2) return;
            onTrigger2 = true;
        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            if (onTrigger1 && !completeGift1)
            {
                GameController.Ins.Fail();
                enabled = false;
            }
            if (onTrigger2 && !completeGift2)
            {
                GameController.Ins.Fail();
                enabled = false;
            }
        }
    }
    public void CompleteGift1()
    {
        completeGift1 = true;
    }
    public void CompleteGift2()
    {
        completeGift2 = true;
    }
    public void ResetTrigger()
    {
        onTrigger1 = false;
        onTrigger2 = false;
    }
}