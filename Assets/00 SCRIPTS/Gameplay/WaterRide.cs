using UnityEngine;

// Boat following waypoints in a loop.
public class WaterRide : MonoBehaviour
{
    public Transform[] waypoints;
    public float speed = 10f;
    public float arrivalDistance = 0.1f;

    private int currentWaypointIndex;
    private Rigidbody body;
    private float timeElapsed;
    private Vector3 startPosition;

    private void Awake()
    {
        body = GetComponent<Rigidbody>();
        startPosition = transform.position;
    }

    private void FixedUpdate()
    {
        if (waypoints == null || waypoints.Length == 0) return;
        Vector3 target = waypoints[currentWaypointIndex].position;
        float totalDistance = Mathf.Max(0.001f, (target - startPosition).magnitude);
        timeElapsed += Time.fixedDeltaTime;
        Vector3 p = Vector3.Lerp(startPosition, target, timeElapsed * speed / totalDistance);
        Vector3 direction = p - transform.position;
        Quaternion rotation = transform.rotation;
        if (direction.sqrMagnitude > 0.000001f)
            rotation = Quaternion.Slerp(rotation, Quaternion.LookRotation(direction) * Quaternion.Euler(0, 90f, 0), speed * Time.fixedDeltaTime);
        if (body) { body.MoveRotation(rotation); body.MovePosition(p); }
        else { transform.rotation = rotation; transform.position = p; }

        if (Vector3.Distance(p, target) <= arrivalDistance)
        {
            currentWaypointIndex = (currentWaypointIndex + 1) % waypoints.Length;
            startPosition = transform.position;
            timeElapsed = 0;
        }
    }
}
