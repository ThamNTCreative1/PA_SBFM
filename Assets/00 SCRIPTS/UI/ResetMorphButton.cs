using UnityEngine;
using UnityEngine.UI;

public class ResetMorphButton : MonoBehaviour
{
    private void Awake()
    {
        Button button = GetComponent<Button>();
        if (button) button.onClick.AddListener(FindMonsterEvent.DispatchResetMorph);
    }
}
