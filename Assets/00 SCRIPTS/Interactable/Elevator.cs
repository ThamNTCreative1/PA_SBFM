using UnityEngine;

/// <summary>
/// Moving platform: when the player stands on it at the bottom it rides up to the top point,
/// carrying the player. After the player leaves it at the top it returns down.
/// </summary>
[RequireComponent(typeof(Rigidbody))]
public class Elevator : MonoBehaviour
{
    [SerializeField] private Transform bottomPoint;
    [SerializeField] private Transform topPoint;
    [SerializeField, Min(0.1f)] private float travelTime = 3f;
    [SerializeField, Min(0f)] private float startDelay = 0.3f;
    [SerializeField, Min(0f)] private float returnDelay = 2f;

    private enum State { Bottom, GoingUp, Top, GoingDown }

    private Rigidbody body;
    private Collider platformCollider;
    private State state;
    private float progress;
    private float timer;

    private void Awake()
    {
        body = GetComponent<Rigidbody>();
        body.isKinematic = true;
        body.useGravity = false;
        body.interpolation = RigidbodyInterpolation.Interpolate;
        platformCollider = GetComponent<Collider>();
        if (bottomPoint != null) body.position = transform.position = bottomPoint.position;
    }

    private void FixedUpdate()
    {
        if (bottomPoint == null || topPoint == null) return;
        CharacterMotor rider = FindRider();
        LateFixedTick();

        switch (state)
        {
            case State.Bottom:
                timer = rider != null ? timer + Time.fixedDeltaTime : 0f;
                if (timer >= startDelay) { state = State.GoingUp; timer = 0f; }
                break;
            case State.GoingUp:
                Step(1f, rider);
                if (progress >= 1f) { state = State.Top; timer = 0f; }
                break;
            case State.Top:
                timer = rider == null ? timer + Time.fixedDeltaTime : 0f;
                if (timer >= returnDelay) { state = State.GoingDown; timer = 0f; }
                break;
            case State.GoingDown:
                Step(-1f, rider);
                if (progress <= 0f) { state = State.Bottom; timer = 0f; }
                break;
        }
    }

    private void Step(float direction, CharacterMotor rider)
    {
        progress = Mathf.Clamp01(progress + direction * Time.fixedDeltaTime / travelTime);
        Vector3 next = Vector3.Lerp(bottomPoint.position, topPoint.position, Mathf.SmoothStep(0f, 1f, progress));
        Vector3 delta = next - body.position;
        body.MovePosition(next);
        if (rider != null && rider.Body != null)
        {
            rider.Body.position += delta;
            rider.ResetFall();
        }
    }

    private CharacterMotor contactRider;

    // Uses collision contacts (works in Luna): the rider counts while it touched the top face in the last physics steps.
    private CharacterMotor FindRider()
    {
        return stepsSinceContact <= 3 ? contactRider : null;
    }

    private int stepsSinceContact = 10;

    private void LateFixedTick()
    {
        stepsSinceContact++;
    }

    private void OnCollisionStay(Collision collision)
    {
        CharacterMotor motor = collision.rigidbody != null ? collision.rigidbody.GetComponent<CharacterMotor>() : null;
        if (motor == null || !motor.enabled) return;
        for (int i = 0; i < collision.contactCount; i++)
        {
            // Normal points from the player into the platform: downward when standing on top.
            if (Mathf.Abs(collision.GetContact(i).normal.y) > 0.5f && collision.GetContact(i).point.y >= platformCollider.bounds.max.y - 0.2f)
            {
                contactRider = motor;
                stepsSinceContact = 0;
                return;
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        OnCollisionStay(collision);
    }
}
