public class BoostSpeedButton : BoostButton
{
    protected override void Dispatch() { FindMonsterEvent.DispatchBoostSpeed(); }
}
