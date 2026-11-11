using UnityEngine;

public class Billboard : MonoBehaviour
{
    [SerializeField] private float distanceToBillborad = 50;

    private Transform cameraTransform;
    private float sqrDistance;

    private void Start()
    {
        if (Camera.main != null) cameraTransform = Camera.main.transform;
        sqrDistance = distanceToBillborad * distanceToBillborad;
    }

    private void LateUpdate()
    {
        if (cameraTransform == null)
        {
            if (Camera.main == null) return;
            cameraTransform = Camera.main.transform;
        }
        Vector3 direction = transform.position - cameraTransform.position;
        if (direction.sqrMagnitude <= sqrDistance && direction.sqrMagnitude > 0.0001f)
            transform.rotation = Quaternion.LookRotation(direction);
    }
}
