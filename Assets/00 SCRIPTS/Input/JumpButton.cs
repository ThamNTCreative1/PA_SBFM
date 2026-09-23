using UnityEngine;
using UnityEngine.UI;

public class JumpButton : MonoBehaviour
{
    [SerializeField] private Button button;
    public bool Jump { get; private set; }
    private void Awake()
    {
        button.onClick.AddListener(StartJump);
    }
    private void StartJump()
    {
        Jump = true;
    }
    private void LateUpdate()
    {
        Jump = false;
    }
}