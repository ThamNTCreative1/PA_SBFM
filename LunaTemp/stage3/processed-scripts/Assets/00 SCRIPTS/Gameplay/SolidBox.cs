using System.Collections.Generic;
using UnityEngine;

// Keeps the player out of a big box (the hay bales). Luna's CharacterController sometimes slides into a large
// BoxCollider after touching it and then walks straight through; FMCharacter calls PushOut after every move, which
// pushes the capsule back out through the nearest side (or onto the top when it is only just below it).
// Put it on an unscaled object with a BoxCollider (rotation around Y only).
[RequireComponent(typeof(BoxCollider))]
public class SolidBox : MonoBehaviour
{
    private static readonly List<SolidBox> All = new List<SolidBox>();

    [Tooltip("Feet this close below the top are lifted onto it instead of being pushed out sideways.")]
    [SerializeField] private float liftOntoTop = 0.4f;

    private BoxCollider box;

    private void Awake() { box = GetComponent<BoxCollider>(); }
    private void OnEnable() { if (!All.Contains(this)) All.Add(this); }
    private void OnDisable() { All.Remove(this); }

    public static void PushOut(CharacterController controller)
    {
        if (controller == null || All.Count == 0) return;
        Transform t = controller.transform;
        for (int i = 0; i < All.Count; i++)
        {
            Vector3 push;
            if (All[i] && All[i].box && All[i].Penetration(t.position, controller, out push))
            {
                controller.enabled = false;
                t.position = t.position + push;
                controller.enabled = true;
            }
        }
    }

    private bool Penetration([Bridge.Ref] Vector3 position, CharacterController controller, out Vector3 push)
    {
        push = Vector3.zero;
        Vector3 half = box.size * 0.5f;
        float radius = controller.radius;
        float feet = position.y + controller.center.y - controller.height * 0.5f;
        float head = feet + controller.height;
        Vector3 centre = transform.TransformPoint(box.center);
        float top = centre.y + half.y, bottom = centre.y - half.y;
        if (feet >= top - 0.05f || head <= bottom) return false;

        // horizontal position in the box's own axes
        Vector3 local = Quaternion.Inverse(transform.rotation) * (position - centre);
        float dx = half.x + radius - Mathf.Abs(local.x);
        float dz = half.z + radius - Mathf.Abs(local.z);
        if (dx <= 0f || dz <= 0f) return false;

        float up = top - feet;
        if (up <= liftOntoTop && up < dx && up < dz)
        {
            push = Vector3.up * (up + 0.01f);
            return true;
        }
        Vector3 localPush = dx < dz
            ? new Vector3((local.x >= 0f ? 1f : -1f) * (dx + 0.01f), 0f, 0f)
            : new Vector3(0f, 0f, (local.z >= 0f ? 1f : -1f) * (dz + 0.01f));
        push = transform.rotation * localPush;
        return true;
    }
}
