using UnityEngine;

// Playable replacement for the source FMCharacter (an ECM2 Character). Keeps the ECM2 field names so the
// values serialized in FindMonsterPlayer.prefab (speed, acceleration, gravity scale, rotation rate...) carry over.
// Moves with a CharacterController instead of ECM2's CharacterMovement, which Luna can't run.
[RequireComponent(typeof(CharacterController))]
public class FMCharacter : MonoBehaviour
{
    [SerializeField] private float _rotationRate = 1000;
    [SerializeField] private float _maxWalkSpeed = 5;
    [SerializeField] private float _maxAcceleration = 20;
    [SerializeField] private float _brakingDecelerationWalking = 20;
    [SerializeField] private float _airControl = 0.3f;
    [SerializeField] private float _jumpImpulse = 5;
    [SerializeField] private Vector3 _gravity = new Vector3(0, -9.81f, 0);
    [SerializeField] private float _gravityScale = 2.5f;
    [SerializeField] private Camera _camera;

    [Space(15f)]
    public Transform planetTransform;
    public Animator animator;
    public PlayableJoystick joystick;
    [Tooltip("Source game: GameAudio.PlayJump (jump-02, volume 0.8) from CharacterAudio.OnJumped.")]
    [SerializeField] private FMAudio jumpSound;
    [Tooltip("Highest step climbed when walking (Luna ignores CharacterController.stepOffset). Same as the controller's stepOffset.")]
    [SerializeField] private float stepHeight = 0.8f;

    // Animator parameters of FMPlayer.controller (states and transitions live in the controller; set by name)
    private const string SpeedParam = "Speed";
    private const string GroundedParam = "Grounded";
    private const string VerticalParam = "VerticalSpeed";
    private const string MoveAnimSpeedParam = "MoveAnimSpeed";

    private CharacterController controller;
    private Vector3 horizontalVelocity;
    private Vector3 runDirection;
    private float verticalSpeed;
    private bool grounded;
    private bool jumpQueued;
    private bool inputEnabled = true;
    private bool isPlanet;
    private float planetRadius;

    public float maxWalkSpeed { get { return _maxWalkSpeed; } set { _maxWalkSpeed = value; } }
    public float jumpImpulse { get { return _jumpImpulse; } set { _jumpImpulse = value; } }
    public float speed { get { return horizontalVelocity.magnitude; } }
    // _rotationRate (deg/s) sets how fast the run direction swings round when the input direction changes.
    // The other ECM2 values are kept from the source data but not used: start and stop are instant.
    public float RotationRate { get { return _rotationRate; } set { _rotationRate = value; } }
    public float MaxAcceleration { get { return _maxAcceleration; } }
    public float BrakingDeceleration { get { return _brakingDecelerationWalking; } }
    public float AirControl { get { return _airControl; } }
    public Vector3 Velocity { get { return horizontalVelocity + Vector3.up * verticalSpeed; } }
    public Camera Camera { get { return _camera; } }
    public bool InputEnabled { get { return inputEnabled; } set { inputEnabled = value; if (!value && joystick) joystick.ResetInput(); } }

    public bool IsGrounded() { return grounded; }
    public bool IsWalking() { return grounded && horizontalVelocity.sqrMagnitude > 0.01f; }

    // Counters for the controls tutorial
    public int JumpCount { get; private set; }
    public float DistanceMoved { get; private set; }

    private void Awake()
    {
        controller = GetComponent<CharacterController>();
        if (_camera == null) _camera = Camera.main;
    }

    public void Jump() { if (inputEnabled) jumpQueued = true; }

    public bool IsOnPlanet { get { return isPlanet && planetTransform != null; } }
    public Vector3 PlanetCenter { get { return planetTransform ? planetTransform.position : Vector3.zero; } }
    public float PlanetRadius { get { return planetRadius; } }

    // Source TeleportPortal: switches planet gravity on (walk around planetTransform) or back to normal gravity.
    public void EnablePlanet(Transform newPlanetTransform, bool enable)
    {
        planetTransform = newPlanetTransform;
        isPlanet = enable && newPlanetTransform != null;
        if (isPlanet)
        {
            planetRadius = 0;
            SphereCollider sphere = planetTransform.GetComponent<SphereCollider>();
            if (sphere && !sphere.isTrigger)
            {
                Vector3 s = planetTransform.lossyScale;
                planetRadius = sphere.radius * Mathf.Max(Mathf.Abs(s.x), Mathf.Max(Mathf.Abs(s.y), Mathf.Abs(s.z)));
            }
            if (planetRadius <= 0) planetRadius = Vector3.Distance(transform.position, planetTransform.position);
        }
        controller.enabled = !isPlanet;
        verticalSpeed = 0;
        grounded = false;
        if (!isPlanet)
        {
            Vector3 f = Vector3.ProjectOnPlane(transform.forward, Vector3.up);
            if (f.sqrMagnitude > 0.0001f) transform.rotation = Quaternion.LookRotation(f.normalized, Vector3.up);
        }
    }

    public Vector3 GetPosition() { return transform.position; }

    public void SetPosition(Vector3 position)
    {
        controller.enabled = false;
        transform.position = position;
        controller.enabled = !isPlanet;
        verticalSpeed = 0;
        horizontalVelocity = Vector3.zero;
    }

    public void SetRotation(Quaternion rotation) { transform.rotation = rotation; }

    private Vector2 ReadMoveInput()
    {
        if (!inputEnabled) return Vector2.zero;
        Vector2 value = joystick ? joystick.Value : Vector2.zero;
        if (value.sqrMagnitude < 0.0001f)
        {
            float h = 0, v = 0;
            if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow)) h -= 1;
            if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)) h += 1;
            if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)) v -= 1;
            if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow)) v += 1;
            value = Vector2.ClampMagnitude(new Vector2(h, v), 1);
        }
        return value;
    }

    private void Update()
    {
        float dt = Time.deltaTime;
        if (dt <= 0) return;
        if (inputEnabled && Input.GetKeyDown(KeyCode.Space)) jumpQueued = true;

        bool onPlanet = isPlanet && planetTransform != null;
        Vector3 up = onPlanet ? GetPlanetUp() : Vector3.up;

        // Camera-relative input on the plane under the character (the ground, or the planet's tangent plane).
        Vector2 input = ReadMoveInput();
        Vector3 forward = Vector3.ProjectOnPlane(Vector3.forward, up), right;
        if (_camera)
        {
            forward = Vector3.ProjectOnPlane(_camera.transform.forward, up);
            if (forward.sqrMagnitude < 0.0001f) forward = Vector3.ProjectOnPlane(_camera.transform.up, up);
        }
        forward.Normalize();
        right = Vector3.Cross(up, forward);
        Vector3 moveDirection = Vector3.ClampMagnitude(forward * input.y + right * input.x, 1);

        // Speed starts and stops at once. The run direction swings round to the input direction at _rotationRate
        // degrees per second (light inertia), also when starting from standing; the character faces that direction.
        if (moveDirection.sqrMagnitude > 0.0001f)
        {
            Vector3 target = moveDirection.normalized;
            // Starting from standing: begin from the way the character faces, so it turns round to the run direction too.
            if (runDirection.sqrMagnitude < 0.0001f) runDirection = transform.forward;
            runDirection = Vector3.ProjectOnPlane(runDirection, up);
            if (runDirection.sqrMagnitude < 0.0001f) runDirection = target;
            runDirection.Normalize();
            // Turn around the up axis only (a U-turn would otherwise tilt the direction).
            float angle = Vector3.SignedAngle(runDirection, target, up);
            if (Mathf.Abs(angle) > 179.5f) angle = 180f; // exact reverse: always swing the same way
            float step = Mathf.Clamp(angle, -_rotationRate * dt, _rotationRate * dt);
            runDirection = (Quaternion.AngleAxis(step, up) * runDirection).normalized;
            horizontalVelocity = runDirection * (moveDirection.magnitude * _maxWalkSpeed);
        }
        else
        {
            runDirection = Vector3.zero;
            horizontalVelocity = Vector3.zero;
        }

        // Vertical (along up): jump and gravity
        float gravity = _gravity.magnitude * _gravityScale;
        if (grounded && verticalSpeed < 0) verticalSpeed = onPlanet ? 0f : -2f;
        if (jumpQueued && grounded)
        {
            verticalSpeed = _jumpImpulse;
            JumpCount++;
            grounded = false;
            if (jumpSound != null) jumpSound.Play();
        }
        jumpQueued = false;
        verticalSpeed -= gravity * dt;

        DistanceMoved += horizontalVelocity.magnitude * dt;
        if (onPlanet) MoveOnPlanet(dt);
        else
        {
            // Luna's CollisionFlags don't match Unity's ("& Above" holds on the ground, cancelling every jump) and its
            // isGrounded stays false, so ground and ceiling come from the actual vertical motion: falling but held up
            // (moved down less than half the expected step) = grounded; rising less than half = hit a ceiling.
            bool wasGrounded = grounded;
            Vector3 start = transform.position;
            Vector3 step = horizontalVelocity * dt;
            float expected = verticalSpeed * dt;
            controller.Move(step + Vector3.up * expected);
            float moved = transform.position.y - start.y;
            grounded = controller.isGrounded || (verticalSpeed <= 0 && moved > expected * 0.5f);
            if (verticalSpeed > 0 && moved < expected * 0.5f) verticalSpeed = 0;
            // Luna ignores stepOffset: when walking on the ground is blocked, climb the step ourselves.
            if (wasGrounded && verticalSpeed <= 0 && step.sqrMagnitude > 1e-6f && Flat(transform.position - start).magnitude < step.magnitude * 0.5f)
                if (StepUp(step)) grounded = true;
        }

        // Stand along up and face the run direction (turns together with the velocity)
        up = onPlanet ? GetPlanetUp() : Vector3.up;
        Vector3 face = runDirection.sqrMagnitude > 0.0001f ? runDirection : transform.forward;
        face = Vector3.ProjectOnPlane(face, up);
        if (face.sqrMagnitude > 0.0001f) transform.rotation = Quaternion.LookRotation(face.normalized, up);

        if (animator)
        {
            animator.SetFloat(SpeedParam, _maxWalkSpeed > 0 ? Mathf.Clamp01(speed / _maxWalkSpeed) : 0);
            animator.SetBool(GroundedParam, grounded);
            animator.SetFloat(VerticalParam, verticalSpeed);
        }
    }

    private static Vector3 Flat(Vector3 v) { v.y = 0; return v; }

    // Up by at most stepOffset, across, back down onto the step. Kept only if it got further than the blocked move
    // and ended on something (not hanging in the air); otherwise the character goes back where it was.
    private bool StepUp(Vector3 step)
    {
        Vector3 before = transform.position;
        controller.Move(Vector3.up * stepHeight);
        float rose = transform.position.y - before.y;
        if (rose > 0.01f)
        {
            Vector3 mid = transform.position;
            controller.Move(step);
            float across = Flat(transform.position - mid).magnitude;
            Vector3 top = transform.position;
            controller.Move(Vector3.down * (rose + 0.05f));
            bool landed = transform.position.y > top.y - rose - 0.04f; // stopped by the step, not fallen back
            if (across > step.magnitude * 0.5f && landed) return true;
        }
        controller.enabled = false;
        transform.position = before;
        controller.enabled = true;
        return false;
    }

    // ---------- Planet (source FMCharacter: gravity towards the planet centre, character up = away from it) ----------
    // A CharacterController capsule is always upright, so on a planet the character is moved on the sphere directly:
    // along the tangent plane, then kept at planetRadius + height from the centre.

    private Vector3 GetPlanetUp()
    {
        Vector3 up = transform.position - planetTransform.position;
        return up.sqrMagnitude > 0.0001f ? up.normalized : Vector3.up;
    }

    private void MoveOnPlanet(float dt)
    {
        Vector3 center = planetTransform.position;
        Vector3 offset = transform.position - center;
        float height = offset.magnitude - planetRadius;
        Vector3 moved = transform.position + horizontalVelocity * dt;
        Vector3 dir = (moved - center).normalized;
        height += verticalSpeed * dt;
        grounded = false;
        if (height <= 0)
        {
            height = 0;
            if (verticalSpeed < 0) verticalSpeed = 0;
            grounded = true;
        }
        transform.position = center + dir * (planetRadius + height);
        // Carry the run direction over to the new tangent plane
        if (runDirection.sqrMagnitude > 0.0001f) runDirection = Vector3.ProjectOnPlane(runDirection, dir).normalized;
    }

    public void SetMoveAnimSpeed(float value)
    {
        if (animator) animator.SetFloat(MoveAnimSpeedParam, value);
    }
}
