using UnityEngine;

// Opens the boost suggestion popup every cappingTime seconds while no other popup is open.
// (The source read the capping from Remote Config.)
public class PopupSuggest : MonoBehaviour
{
    [SerializeField] private float cappingTime = 120;
    [SerializeField] private PopupSuggestPanel panel;

    private float timer;

    private void Start() { timer = cappingTime; }

    private void Update()
    {
        if (panel == null || cappingTime <= 0) return;
        if (PlayableFrame.OpenCount > 0) return;
        timer -= Time.deltaTime;
        if (timer <= 0)
        {
            panel.Show();
            timer = cappingTime;
        }
    }
}
