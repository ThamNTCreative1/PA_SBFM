using System.Collections;
using UnityEngine;

// Portal (source TeleportPortal): walking into it moves the player to pos and switches planet gravity on or off.
// The source used OnTriggerEnter; Luna's CharacterController collides with triggers, so the portal's trigger box
// is read once as a volume, switched off, and the player's position is tested against it.
// With a ScreenTransition in the scene the screen is covered first, the player is moved, then it is revealed.
public class TeleportPortal : MonoBehaviour
{
    [Tooltip("Planet to walk on after the teleport (its centre is the gravity centre).")]
    public Transform planet;
    [Tooltip("Arrival point (position and rotation).")]
    public Transform pos;
    [Tooltip("On: planet gravity around 'planet'. Off: back to normal gravity.")]
    public bool isPlanet = true;
    [Tooltip("Extra size added to the portal box when testing the player (the portal is thin).")]
    public Vector3 touchPadding = new Vector3(1f, 1f, 1f);
    [SerializeField] private FMAudio teleportSound;

    private const float Cooldown = 1f;
    private static float lastTeleportTime = -10f;
    private static bool busy;

    private Bounds volume;
    private bool hasVolume;

    private void Start()
    {
        Collider c = GetComponent<Collider>();
        if (c)
        {
            // A copy: in Luna Bounds is a reference type and collider bounds are live.
            volume = new Bounds(c.bounds.center, c.bounds.size + touchPadding);
            hasVolume = true;
            c.enabled = false;
        }
    }

    private void OnDestroy() { busy = false; }

    private void Update()
    {
        if (busy || !hasVolume || pos == null || FindMonsterManager.Instance == null) return;
        if (Time.time - lastTeleportTime < Cooldown) return;
        Transform player = FindMonsterManager.Instance.PlayerTransform;
        if (player == null) return;
        if (!volume.Contains(player.position) && !volume.Contains(player.position + player.up)) return;

        FMCharacter character = player.GetComponent<FMCharacter>();
        if (character == null) return;
        StartCoroutine(TeleportRoutine(character));
    }

    private IEnumerator TeleportRoutine(FMCharacter character)
    {
        busy = true;
        if (teleportSound != null) teleportSound.Play();
        FindMonsterEvent.DispatchTeleportStarted(this);
        ScreenTransition transition = ScreenTransition.Instance;
        if (transition)
        {
            character.InputEnabled = false;
            yield return StartCoroutine(transition.Cover());
        }

        lastTeleportTime = Time.time;
        character.EnablePlanet(planet, isPlanet);
        character.SetPosition(pos.position);
        character.SetRotation(pos.rotation);
        FM3rdInput input = character.GetComponent<FM3rdInput>();
        if (input) { input.EnablePlanet(planet, isPlanet); input.ResetCameraToPlayerBack(); }
        if (FindMonsterManager.Instance) FindMonsterManager.Instance.OnTeleported(transform);
        FindMonsterEvent.DispatchTeleported(this);

        if (transition)
        {
            yield return StartCoroutine(transition.Reveal());
            character.InputEnabled = true;
        }
        lastTeleportTime = Time.time;
        busy = false;
    }
}
