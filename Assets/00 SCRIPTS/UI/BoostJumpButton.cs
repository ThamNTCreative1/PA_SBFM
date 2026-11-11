public class BoostJumpButton : BoostButton
{
    protected override void Dispatch() { FindMonsterEvent.DispatchBoostJump(); }
}
