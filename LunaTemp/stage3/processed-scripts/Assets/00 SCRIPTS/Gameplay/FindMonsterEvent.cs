using System;

// Replaces the source game's HAVIGAME EventDispatcher events (BoostSpeed, BoostJump, Morph, ResetMorph).
public static class FindMonsterEvent
{
    public static event Action BoostSpeed;
    public static event Action BoostJump;
    public static event Action<MonsterSO> Morph;
    public static event Action ResetMorph;
    public static event Action<MonsterSO> MonsterFound;
    public static event Action<TeleportPortal> Teleported;
    public static event Action<TeleportPortal> TeleportStarted;

    public static void DispatchBoostSpeed() { if (BoostSpeed != null) BoostSpeed(); }
    public static void DispatchBoostJump() { if (BoostJump != null) BoostJump(); }
    public static void DispatchMorph(MonsterSO so) { if (Morph != null) Morph(so); }
    public static void DispatchResetMorph() { if (ResetMorph != null) ResetMorph(); }
    public static void DispatchMonsterFound(MonsterSO so) { if (MonsterFound != null) MonsterFound(so); }
    public static void DispatchTeleported(TeleportPortal portal) { if (Teleported != null) Teleported(portal); }
    public static void DispatchTeleportStarted(TeleportPortal portal) { if (TeleportStarted != null) TeleportStarted(portal); }

    public static void Clear()
    {
        BoostSpeed = null; BoostJump = null; Morph = null; ResetMorph = null; MonsterFound = null; Teleported = null; TeleportStarted = null;
    }
}
