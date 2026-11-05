using UnityEngine;

// Keeps a ferris wheel cabin upright while the wheel rotates.
public class FerrisCabin : MonoBehaviour
{
    private void LateUpdate()
    {
        transform.rotation = Quaternion.identity;
    }
}
