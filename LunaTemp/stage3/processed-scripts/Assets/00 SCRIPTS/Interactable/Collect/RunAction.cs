using UnityEngine;

public class RunEffect : CollectAction
{
    [SerializeField] private Rigidbody controller;
    [SerializeField] private Transform targetPos;
    [SerializeField] private CameraLook look;
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float rotateSpeed = 10f;
    [SerializeField] private float stopDistance = 0.1f;

    private Rigidbody rb;
    private Transform target;
    private bool isMoving;
    

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
    }

    public override void Collect()
    {
        look.CollectLook();
        target = targetPos;
        isMoving = true;
    }

    public void Stop()
    {
        isMoving = false;
        target = null;

        rb.linearVelocity = Vector3.zero;
    }

    private void FixedUpdate()
    {
        if (!isMoving || target == null)
            return;

        Vector3 direction = target.position - rb.position;
        direction.y = 0f;

        float distance = direction.magnitude;

        if (distance <= stopDistance)
        {
            Stop();
            return;
        }

        Vector3 move = moveSpeed * Time.fixedDeltaTime * direction.normalized;
        rb.MovePosition(rb.position + move);

        Quaternion targetRotation = Quaternion.LookRotation(direction);
        rb.MoveRotation(Quaternion.Slerp(
            rb.rotation,
            targetRotation,
            rotateSpeed * Time.fixedDeltaTime));
    }
}