using UnityEngine;

// Map popup: puts the player icon on the map picture from the world position (x,z) around centerPos.
public class MapPanel : PlayableFrame
{
    [SerializeField] private RectTransform playerIcon;
    [SerializeField] private Vector3 centerPos;
    [SerializeField] private float ratio;
    [SerializeField] private Transform player;

    protected override void OnShow()
    {
        if (player == null && FindMonsterManager.Instance) player = FindMonsterManager.Instance.PlayerTransform;
        if (player == null || playerIcon == null) return;
        Vector3 mapPos = player.position - centerPos;
        playerIcon.localPosition = new Vector3(mapPos.x * ratio, mapPos.z * ratio, 0);
    }
}
