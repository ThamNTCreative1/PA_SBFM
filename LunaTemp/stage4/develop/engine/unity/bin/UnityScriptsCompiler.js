if ( TRACE ) { TRACE( JSON.parse( '["AudioController#init","AudioController#Awake","AudioController#CreateIns","AudioController#BootstrapPool","AudioController#PlaySFX","AudioController#CreateNewSource","AudioController#GetFreeSource","AudioController#ReturnToPool","CameraFollow#init","CameraFollow#LateUpdate","CameraLook#init","CameraLook#Awake","CameraLook#LateUpdate","CameraLook#CollectLook","CharacterAnimation#init","CharacterAnimation#Awake","CharacterAnimation#ConfigureAnimator","CharacterAnimation#Update","CharacterAnimation#UpdateAnimation","CharacterAnimation#SetAvatar","CharacterCollect#Update","CharacterCollect#RunToTarget","CharacterCollect#SetTarget","CharacterCollect#Teleport","CharacterCollect#CollectTarget","CharacterInput#init","CharacterInput#Update","CharacterInput#CheckMoveInput","CharacterInput#CheckJumpInput","CharacterMotor#VerticalVelocity#get","CharacterMotor#Body#get","CharacterMotor#MaxMoveSpeed#get","CharacterMotor#Speed#get","CharacterMotor#IsGrounded#get","CharacterMotor#IsClimbing#get","CharacterMotor#ClimbFacing#get","CharacterMotor#FallDistance#get","CharacterMotor#IsMoving#get","CharacterMotor#init","CharacterMotor#Awake","CharacterMotor#AutoRun","CharacterMotor#Teleport","CharacterMotor#Update","CharacterMotor#UpdateArrow","CharacterMotor#RotateTowardsLocalY","CharacterMotor#FixedUpdate","CharacterMotor#TrackFall","CharacterMotor#ResetFall","CharacterMotor#SetLadder","CharacterMotor#ClearLadder","CharacterMotor#UpdateLadder","CharacterMotor#OnCollisionEnter","CharacterMotor#OnCollisionStay","CharacterMotor#ApplyGravity","CharacterMotor#Move","CharacterMotor#CanStepUp","CharacterMotor#IsSupportedForStep","CharacterMotor#IsOnStepSurface","CharacterMotor#GetCapsuleRadius","CharacterMotor#ApplyMotor","CharacterMotor#ApplyJump","CharacterRotation#init","CharacterRotation#FixedUpdate","CharacterRotation#Rotate","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral","Elevator#init","Elevator#Awake","Elevator#FixedUpdate","Elevator#Step","Elevator#FindRider","Elevator#LateFixedTick","Elevator#OnCollisionStay","Elevator#OnCollisionEnter","FootstepAudio#init","FootstepAudio#Awake","FootstepAudio#Update","FootstepAudio#OnDisable","GameController#PlaySfx","GameController#SetGiftArrow","GameController#FirstGift#get","GameController#IsPlaying#get","GameController#HasFailed#get","GameController#init","GameController#Awake","GameController#Start","GameController#CheckLanding","GameController#ReportLanding","GameController#Far","GameController#Fail","GameController#CollectGift","GameController#CollectIntermediateGift","GameController#PopCollectText","GameController#Update","GameController#StartFailButtonEffect","GameController#StopFailButtonEffect","GameController#OnDisable","GameController#StopPlayer","GameController#WaitForCollect","GameController#UpdateProgress","GameController#ShowComplete","GameController#OnDestroy","GroundChecker#GroundLayer#get","GroundChecker#init","GroundChecker#Update","GroundChecker#CheckGround","Gift#Arrow#get","Gift#Start","Gift#ShowHints","Gift#OnTriggerEnter","Gift#RemoveGift","HideOnPointer#OnPointerDown","InputManager#init","InputManager#Awake","InputManager#Update","InputManager#HandleMouse","InputManager#IsOverInputControl","InputManager#InteractAt","InputManager#ResetPointer","InputManager#OnDisable","InputManager#OnApplicationFocus","InputManager#HandleTouch","InputManager#RaycastInteractable","Joystick#init","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#OnPointerUp","Joystick#OnEndDrag","Joystick#LateUpdate","Joystick#OnDisable","Joystick#OnApplicationFocus","Joystick#OnApplicationPause","Joystick#ResetJoystick","JumpButton#Awake","JumpButton#StartJump","JumpButton#LateUpdate","Ladder#Bottom#get","Ladder#Top#get","Ladder#Length#get","Ladder#Up#get","Ladder#IntoDirection#get","Ladder#init","Ladder#GetT","Ladder#PointAt","Ladder#Reset","Ladder#OnTriggerEnter","Ladder#OnTriggerStay","Ladder#OnTriggerExit","LunaController#Awake","LunaController#ApplyMonster","LunaController#Start","LunaController#ClickCTA","LunaController#ShowClickOverlay","LunaController#CreateClickOverlay","LunaController#EndGame","LunaController#EndUnlock","LunaController#EndGameAfterTimeLimit","LunaController#EndCard","LunaController#ShowEndCard","LunaController#OnDestroy","MonsterSelector#init","MonsterSelector#MonsterIndex#get","MonsterSelector#MonsterIndex#set","MonsterSelector#init","MonsterSelector#Awake","MonsterSelector#Apply","MonsterSelector#ApplyHud","Playable.ResponsiveCanvasScaler#init","Playable.ResponsiveCanvasScaler#Awake","Playable.ResponsiveCanvasScaler#OnEnable","Playable.ResponsiveCanvasScaler#Update","Playable.ResponsiveCanvasScaler#OnValidate","Playable.ResponsiveCanvasScaler#ApplyScaleSettings","Playable.ResponsiveCanvasScaler#GetMatchValue","SelectPanel#Start","SelectPanel#OpenCTA","TutController#Awake","TutController#ShowPlayTut","TutController#StopTut","TutController#ShowFarTut","TutController#ShowFailTut","Box#init","Box#Interact","Box#UnBox","Box#DestroyBox","JumpHint#init","JumpHint#ShowHint","RunEffect#init","RunEffect#Awake","RunEffect#Collect","RunEffect#Stop","RunEffect#FixedUpdate","SoundHint#ShowHint"]' ) ); }
/**
 * @version 1.0.9796.26882
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioController start.*/
    Bridge.define("AudioController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            musicSource: null,
            poolParent: null,
            startSize: 0,
            sfxVolumeScale: 0,
            SFXPool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AudioController#init", this ); }

                this.sfxVolumeScale = 1.0;
            }
        },
        methods: {
            /*AudioController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioController#Awake", this ); }

                this.CreateIns();
                this.BootstrapPool();
            },
            /*AudioController.Awake end.*/

            /*AudioController.CreateIns start.*/
            CreateIns: function () {
if ( TRACE ) { TRACE( "AudioController#CreateIns", this ); }

                if (UnityEngine.Object.op_Implicit(AudioController.Ins) && UnityEngine.MonoBehaviour.op_Inequality(AudioController.Ins, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                AudioController.Ins = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*AudioController.CreateIns end.*/

            /*AudioController.BootstrapPool start.*/
            BootstrapPool: function () {
if ( TRACE ) { TRACE( "AudioController#BootstrapPool", this ); }

                this.SFXPool = new (System.Collections.Generic.Queue$1(UnityEngine.AudioSource)).ctor();
                for (var i = 0; i < this.startSize; i = (i + 1) | 0) {
                    this.SFXPool.Enqueue(this.CreateNewSource());
                }
            },
            /*AudioController.BootstrapPool end.*/

            /*AudioController.PlaySFX start.*/
            PlaySFX: function (clip) {
if ( TRACE ) { TRACE( "AudioController#PlaySFX", this ); }

                var s = this.GetFreeSource();
                s.PlayOneShot$1(clip, this.sfxVolumeScale);
                this.StartCoroutine$1(this.ReturnToPool(s));
            },
            /*AudioController.PlaySFX end.*/

            /*AudioController.CreateNewSource start.*/
            CreateNewSource: function () {
if ( TRACE ) { TRACE( "AudioController#CreateNewSource", this ); }

                var s = new UnityEngine.GameObject.$ctor2("SFX").AddComponent(UnityEngine.AudioSource);
                s.transform.SetParent(this.poolParent);
                return s;
            },
            /*AudioController.CreateNewSource end.*/

            /*AudioController.GetFreeSource start.*/
            GetFreeSource: function () {
if ( TRACE ) { TRACE( "AudioController#GetFreeSource", this ); }

                return this.SFXPool.Count > 0 ? this.SFXPool.Dequeue() : this.CreateNewSource();
            },
            /*AudioController.GetFreeSource end.*/

            /*AudioController.ReturnToPool start.*/
            ReturnToPool: function (s) {
if ( TRACE ) { TRACE( "AudioController#ReturnToPool", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(function () {
                                            return !s.isPlaying;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SFXPool.Enqueue(s);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AudioController.ReturnToPool end.*/


        }
    });
    /*AudioController end.*/

    /*IInteractable start.*/
    Bridge.define("IInteractable", {
        $kind: 3
    });
    /*IInteractable end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            smoothTime: 0,
            velocity: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow#init", this ); }

                this.velocity = new UnityEngine.Vector3();
                this.smoothTime = 0.1;
            }
        },
        methods: {
            /*CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#LateUpdate", this ); }

                this.transform.position = pc.Vec3.smoothDamp( this.transform.position.$clone(), this.target.position.$clone(), Bridge.ref(this, "velocity"), this.smoothTime, Infinity, UnityEngine.Time.deltaTime );
            },
            /*CameraFollow.LateUpdate end.*/


        }
    });
    /*CameraFollow end.*/

    /*CameraLook start.*/
    Bridge.define("CameraLook", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            input: null,
            yawPivot: null,
            pitchPivot: null,
            minPitch: 0,
            maxPitch: 0,
            yaw: 0,
            pitch: 0,
            defaltYaw: 0,
            defaltPitch: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraLook#init", this ); }

                this.minPitch = -30.0;
                this.maxPitch = 70.0;
            }
        },
        methods: {
            /*CameraLook.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraLook#Awake", this ); }

                this.defaltYaw = this.yawPivot.rotation.getPositiveEulerAngles().y;
                this.yaw = this.defaltYaw;
                this.defaltPitch = UnityEngine.Mathf.DeltaAngle(0.0, this.pitchPivot.localEulerAngles.x);
                this.pitch = this.defaltPitch;
            },
            /*CameraLook.Awake end.*/

            /*CameraLook.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraLook#LateUpdate", this ); }

                var look = this.input.LookDelta.$clone();

                if (look.lengthSq() < 0.0001) {
                    return;
                }

                this.yaw += look.x;

                this.pitch -= look.y;
                this.pitch = Math.max(this.minPitch, Math.min(this.pitch, this.maxPitch));

                this.yawPivot.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.yaw, 0.0 );
                this.pitchPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( this.pitch, 0.0, 0.0 );
            },
            /*CameraLook.LateUpdate end.*/

            /*CameraLook.CollectLook start.*/
            CollectLook: function () {
if ( TRACE ) { TRACE( "CameraLook#CollectLook", this ); }

                this.pitchPivot.position = new pc.Vec3( this.yawPivot.position.x, this.yawPivot.position.y - 3.5, this.yawPivot.position.z );
                this.pitch = this.defaltPitch;
                this.pitchPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( this.pitch, 0.0, 0.0 );
            },
            /*CameraLook.CollectLook end.*/


        }
    });
    /*CameraLook end.*/

    /*CollectAction start.*/
    Bridge.define("CollectAction", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*CollectAction end.*/

    /*CharacterAnimation start.*/
    Bridge.define("CharacterAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            animator: null,
            motor: null,
            speedChangeRate: 0,
            groundedGraceTime: 0,
            displayedSpeed: 0,
            groundedTimer: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterAnimation#init", this ); }

                this.speedChangeRate = 8.0;
                this.groundedGraceTime = 0.1;
            }
        },
        methods: {
            /*CharacterAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CharacterAnimation#Awake", this ); }

                this.ConfigureAnimator();
                this.groundedTimer = this.groundedGraceTime;
            },
            /*CharacterAnimation.Awake end.*/

            /*CharacterAnimation.ConfigureAnimator start.*/
            ConfigureAnimator: function () {
if ( TRACE ) { TRACE( "CharacterAnimation#ConfigureAnimator", this ); }

                // The motor owns movement; animate the visual pose every rendered frame.
                this.animator.applyRootMotion = false;
                this.animator.updateMode = UnityEngine.AnimatorUpdateMode.Normal;
            },
            /*CharacterAnimation.ConfigureAnimator end.*/

            /*CharacterAnimation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterAnimation#Update", this ); }

                this.UpdateAnimation();
            },
            /*CharacterAnimation.Update end.*/

            /*CharacterAnimation.UpdateAnimation start.*/
            UpdateAnimation: function () {
if ( TRACE ) { TRACE( "CharacterAnimation#UpdateAnimation", this ); }

                var targetSpeed = this.motor.MaxMoveSpeed > 0.0 ? Math.max(0, Math.min(1, this.motor.Speed / this.motor.MaxMoveSpeed)) : 0.0;

                this.displayedSpeed = pc.math.lerp(this.displayedSpeed, targetSpeed, 1.0 - UnityEngine.Mathf.Exp(-this.speedChangeRate * UnityEngine.Time.deltaTime));

                if (Math.abs(this.displayedSpeed - targetSpeed) < 0.001) {
                    this.displayedSpeed = targetSpeed;
                }

                if (this.motor.IsGrounded) {
                    this.groundedTimer = this.groundedGraceTime;
                } else {
                    this.groundedTimer = UnityEngine.Mathf.Max(0.0, this.groundedTimer - UnityEngine.Time.deltaTime);
                }

                this.animator.SetFloat$1("Speed", this.displayedSpeed);
                this.animator.SetBool$1("Jump", this.groundedTimer <= 0.0);
            },
            /*CharacterAnimation.UpdateAnimation end.*/

            /*CharacterAnimation.SetAvatar start.*/
            SetAvatar: function (avatar) {
if ( TRACE ) { TRACE( "CharacterAnimation#SetAvatar", this ); }

                this.animator.gameObject.SetActive(false);
                this.animator = avatar;
                this.ConfigureAnimator();
                this.animator.gameObject.SetActive(true);

                this.animator.SetFloat$1("Speed", this.displayedSpeed);
                this.animator.SetBool$1("Jump", this.groundedTimer <= 0.0);
            },
            /*CharacterAnimation.SetAvatar end.*/


        }
    });
    /*CharacterAnimation end.*/

    /*CharacterCollect start.*/
    Bridge.define("CharacterCollect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            motor: null,
            avatar: null,
            target: null
        },
        methods: {
            /*CharacterCollect.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterCollect#Update", this ); }

                this.RunToTarget();
            },
            /*CharacterCollect.Update end.*/

            /*CharacterCollect.RunToTarget start.*/
            RunToTarget: function () {
if ( TRACE ) { TRACE( "CharacterCollect#RunToTarget", this ); }

                if (!UnityEngine.Object.op_Implicit(this.target)) {
                    return;
                }
                this.motor.AutoRun(true, (this.target.transform.position.$clone().sub( this.transform.position )).clone().normalize());
            },
            /*CharacterCollect.RunToTarget end.*/

            /*CharacterCollect.SetTarget start.*/
            SetTarget: function (t, a) {
if ( TRACE ) { TRACE( "CharacterCollect#SetTarget", this ); }

                this.target = t;
                this.StartCoroutine$1(this.CollectTarget(this.target, a));
            },
            /*CharacterCollect.SetTarget end.*/

            /*CharacterCollect.Teleport start.*/
            Teleport: function (position, rotation) {
if ( TRACE ) { TRACE( "CharacterCollect#Teleport", this ); }

                this.motor.Teleport(position, rotation);
            },
            /*CharacterCollect.Teleport end.*/

            /*CharacterCollect.CollectTarget start.*/
            CollectTarget: function (t, a) {
if ( TRACE ) { TRACE( "CharacterCollect#CollectTarget", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(function () {
                                            return t.collectDone;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.target = null;
                                        this.motor.AutoRun(false, UnityEngine.Vector3.FromVector2(pc.Vec2.ZERO.clone()));
                                        this.avatar.SetAvatar(a);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterCollect.CollectTarget end.*/


        }
    });
    /*CharacterCollect end.*/

    /*CharacterInput start.*/
    Bridge.define("CharacterInput", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            joystick: null,
            jumpButton: null,
            Move: null,
            Jump: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterInput#init", this ); }

                this.Move = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*CharacterInput.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterInput#Update", this ); }

                this.CheckMoveInput();
                this.CheckJumpInput();
            },
            /*CharacterInput.Update end.*/

            /*CharacterInput.CheckMoveInput start.*/
            CheckMoveInput: function () {
if ( TRACE ) { TRACE( "CharacterInput#CheckMoveInput", this ); }

                var keyboard = new pc.Vec2( UnityEngine.Input.GetAxisRaw("Horizontal"), UnityEngine.Input.GetAxisRaw("Vertical") );

                this.Move = keyboard.lengthSq() > 0 ? keyboard.$clone() : this.joystick.Direction.$clone();
            },
            /*CharacterInput.CheckMoveInput end.*/

            /*CharacterInput.CheckJumpInput start.*/
            CheckJumpInput: function () {
if ( TRACE ) { TRACE( "CharacterInput#CheckJumpInput", this ); }

                this.Jump = UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Space) || this.jumpButton.Jump;
            },
            /*CharacterInput.CheckJumpInput end.*/


        }
    });
    /*CharacterInput end.*/

    /*CharacterMotor start.*/
    Bridge.define("CharacterMotor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            characterInput: null,
            cameraYawTransform: null,
            _arrow: null,
            moveSpeed: 0,
            jumpHeight: 0,
            groundChecker: null,
            gravity: 0,
            enableStepClimb: false,
            stepLayers: null,
            maxStepHeight: 0,
            stepCheckDistance: 0,
            stepUpSpeed: 0,
            stepUpAcceleration: 0,
            minimumStepFacing: 0,
            climbSpeed: 0,
            ladderSnapStrength: 0,
            ladder: null,
            climbing: false,
            fallStartY: 0,
            lastClimbDirection: 0,
            verticalVelocity: 0,
            controller: null,
            capsuleCollider: null,
            MoveDirection: null,
            autoRun: false,
            jumpRequested: false,
            wasSupported: false
        },
        props: {
            VerticalVelocity: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#VerticalVelocity#get", this ); }

                    return this.verticalVelocity;
                }
            },
            Body: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#Body#get", this ); }

                    return this.controller;
                }
            },
            MaxMoveSpeed: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#MaxMoveSpeed#get", this ); }

                    return this.moveSpeed;
                }
            },
            Speed: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#Speed#get", this ); }

                    return (this.MoveDirection.$clone().clone().scale( this.moveSpeed )).length();
                }
            },
            IsGrounded: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#IsGrounded#get", this ); }

                    return this.climbing || this.groundChecker.IsGrounded || this.IsOnStepSurface();
                }
            },
            IsClimbing: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#IsClimbing#get", this ); }

                    return this.climbing;
                }
            },
            ClimbFacing: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#ClimbFacing#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Equality(this.ladder, null) ? this.transform.forward.$clone() : (this.lastClimbDirection < 0.0 ? this.ladder.IntoDirection.$clone().scale( -1 ) : this.ladder.IntoDirection.$clone());
                }
            },
            /**
             * Height fallen since the character was last supported (ground, platform or ladder).
             *
             * @instance
             * @public
             * @readonly
             * @memberof CharacterMotor
             * @function FallDistance
             * @type number
             */
            FallDistance: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#FallDistance#get", this ); }

                    return UnityEngine.Mathf.Max(0.0, this.fallStartY - (UnityEngine.Component.op_Inequality(this.controller, null) ? this.controller.position.y : this.transform.position.y));
                }
            },
            IsMoving: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterMotor#IsMoving#get", this ); }

                    return this.MoveDirection.lengthSq() > 0.01;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterMotor#init", this ); }

                this.stepLayers = new UnityEngine.LayerMask();
                this.MoveDirection = new UnityEngine.Vector3();
                this.moveSpeed = 5.0;
                this.jumpHeight = 1.5;
                this.gravity = -20.0;
                this.enableStepClimb = true;
                this.stepLayers = UnityEngine.LayerMask.op_Implicit$1(-1);
                this.maxStepHeight = 0.45;
                this.stepCheckDistance = 0.35;
                this.stepUpSpeed = 4.0;
                this.stepUpAcceleration = 80.0;
                this.minimumStepFacing = 0.25;
                this.climbSpeed = 7.0;
                this.ladderSnapStrength = 10.0;
                this.lastClimbDirection = 1.0;
                this.wasSupported = true;
            }
        },
        methods: {
            /*CharacterMotor.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CharacterMotor#Awake", this ); }

                this.capsuleCollider = this.controller.GetComponent(UnityEngine.CapsuleCollider);
                this.controller.useGravity = false;
                // Smooth the rendered pose between physics ticks.
                this.controller.interpolation = UnityEngine.RigidbodyInterpolation.Interpolate;
            },
            /*CharacterMotor.Awake end.*/

            /*CharacterMotor.AutoRun start.*/
            AutoRun: function (isAuto, direction) {
if ( TRACE ) { TRACE( "CharacterMotor#AutoRun", this ); }

                this.autoRun = isAuto;
                this.MoveDirection = pc.Vec3.clampMagnitude( direction, 1.0 );
            },
            /*CharacterMotor.AutoRun end.*/

            /*CharacterMotor.Teleport start.*/
            Teleport: function (position, rotation) {
if ( TRACE ) { TRACE( "CharacterMotor#Teleport", this ); }

                this.verticalVelocity = 0.0;
                this.MoveDirection = pc.Vec3.ZERO.clone();

                this.controller.linearVelocity = pc.Vec3.ZERO.clone();
                this.controller.angularVelocity = pc.Vec3.ZERO.clone();
                this.controller.position = position.$clone();
                this.controller.rotation = rotation.$clone();
                this.fallStartY = position.y;
                this.wasSupported = true;
                this.climbing = false;

                this.transform.SetPositionAndRotation(position, rotation);
            },
            /*CharacterMotor.Teleport end.*/

            /*CharacterMotor.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterMotor#Update", this ); }

                if (this.characterInput.Jump) {
                    this.jumpRequested = true;
                }
                this.ApplyMotor();
                this.UpdateArrow();
            },
            /*CharacterMotor.Update end.*/

            /*CharacterMotor.UpdateArrow start.*/
            UpdateArrow: function () {
if ( TRACE ) { TRACE( "CharacterMotor#UpdateArrow", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameController.Ins, null)) {
                    return;
                }

                var targetGift = GameController.Ins.FirstGift;
                if (UnityEngine.MonoBehaviour.op_Equality(targetGift, null)) {
                    return;
                }

                this.RotateTowardsLocalY(this._arrow, targetGift.transform.position.$clone());
                this.RotateTowardsLocalY(targetGift.Arrow, this.transform.position.$clone());
            },
            /*CharacterMotor.UpdateArrow end.*/

            /*CharacterMotor.RotateTowardsLocalY start.*/
            RotateTowardsLocalY: function (target, worldPosition) {
if ( TRACE ) { TRACE( "CharacterMotor#RotateTowardsLocalY", this ); }

                if (UnityEngine.Component.op_Equality(target, null)) {
                    return;
                }

                var targetLocalPos = UnityEngine.Component.op_Inequality(target.parent, null) ? target.parent.InverseTransformPoint(worldPosition) : worldPosition.$clone();

                var direction = targetLocalPos.$clone().sub( target.localPosition );
                direction.y = 0.0;
                if (direction.lengthSq() < 0.0001) {
                    return;
                }

                var yAngle = Math.atan2(direction.x, direction.z) * UnityEngine.Mathf.Rad2Deg;

                var currentEuler = target.localEulerAngles.$clone();
                target.localRotation = new pc.Quat().setFromEulerAngles_Unity( currentEuler.x, yAngle, currentEuler.z );
            },
            /*CharacterMotor.RotateTowardsLocalY end.*/

            /*CharacterMotor.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterMotor#FixedUpdate", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ladder, null) && this.UpdateLadder()) {
                    this.TrackFall(true);
                    return;
                }

                this.ApplyGravity();
                this.ApplyJump();
                this.Move();
                this.TrackFall(this.groundChecker.IsGrounded || this.IsOnStepSurface());
            },
            /*CharacterMotor.FixedUpdate end.*/

            /*CharacterMotor.TrackFall start.*/
            TrackFall: function (supported) {
if ( TRACE ) { TRACE( "CharacterMotor#TrackFall", this ); }

                var y = this.controller.position.y;
                if (supported && !this.wasSupported && UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, null)) {
                    GameController.Ins.ReportLanding(this.fallStartY - y);
                }
                this.wasSupported = supported;
                if (supported || y > this.fallStartY) {
                    this.fallStartY = y;
                }
            },
            /*CharacterMotor.TrackFall end.*/

            /*CharacterMotor.ResetFall start.*/
            /**
             * Call while a moving platform carries the character so the ride never counts as a fall.
             *
             * @instance
             * @public
             * @this CharacterMotor
             * @memberof CharacterMotor
             * @return  {void}
             */
            ResetFall: function () {
if ( TRACE ) { TRACE( "CharacterMotor#ResetFall", this ); }

                this.fallStartY = this.controller.position.y;
                this.wasSupported = true;
            },
            /*CharacterMotor.ResetFall end.*/

            /*CharacterMotor.SetLadder start.*/
            SetLadder: function (value) {
if ( TRACE ) { TRACE( "CharacterMotor#SetLadder", this ); }

                this.ladder = value;
                if (UnityEngine.MonoBehaviour.op_Equality(value, null)) {
                    this.climbing = false;
                }
            },
            /*CharacterMotor.SetLadder end.*/

            /*CharacterMotor.ClearLadder start.*/
            ClearLadder: function (value) {
if ( TRACE ) { TRACE( "CharacterMotor#ClearLadder", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ladder, value)) {
                    return;
                }
                this.ladder = null;
                this.climbing = false;
            },
            /*CharacterMotor.ClearLadder end.*/

            /*CharacterMotor.UpdateLadder start.*/
            UpdateLadder: function () {
if ( TRACE ) { TRACE( "CharacterMotor#UpdateLadder", this ); }

                if (this.autoRun) {
                    return false;
                }
                var into = this.ladder.IntoDirection.$clone();
                var input = this.MoveDirection.dot( into );
                var t = this.ladder.GetT(this.controller.position.$clone());
                var supported = this.groundChecker.IsGrounded || this.IsOnStepSurface();

                if (!this.climbing) {
                    var startUp = t < 0.3 && supported && input > 0.3;
                    var startDown = t > 0.7 && supported && input < -0.3 && this.controller.position.y >= this.ladder.Top.y - 1.0;
                    // Walking off the top next to the ladder (or falling past it) grabs the ladder instead of falling.
                    var offLine = this.controller.position.$clone().sub( this.ladder.PointAt(t) );
                    offLine.y = 0.0;
                    var grab = !supported && this.verticalVelocity < 0.0 && t > 0.15 && t < 1.2 && offLine.length() < 2.0;
                    if (!startUp && !startDown && !grab) {
                        return false;
                    }
                    this.lastClimbDirection = startUp ? 1.0 : -1.0;
                    this.climbing = true;
                }

                this.jumpRequested = false;
                this.verticalVelocity = 0.0;
                var climb = input > 0.2 ? 1.0 : (input < -0.2 ? -1.0 : 0.0);
                if (climb !== 0.0) {
                    this.lastClimbDirection = climb;
                }

                if (climb > 0.0 && t >= 1.0) {
                    // Reached the top: step off onto the platform the ladder leans on.
                    this.climbing = false;
                    this.controller.linearVelocity = into.$clone().clone().scale( this.moveSpeed ).clone().scale( 0.6 ).add( pc.Vec3.UP.clone().clone().scale( 3.0 ) );
                    return true;
                }

                if (climb < 0.0 && t <= 0.02) {
                    this.climbing = false;
                    return false;
                }

                var target = this.ladder.PointAt(t);
                var snap = target.$clone().sub( this.controller.position );
                snap.y = 0.0;
                this.controller.linearVelocity = this.ladder.Up.$clone().clone().scale( (climb * this.climbSpeed) ).add( snap.$clone().clone().scale( this.ladderSnapStrength ) );
                return true;
            },
            /*CharacterMotor.UpdateLadder end.*/

            /*CharacterMotor.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "CharacterMotor#OnCollisionEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, null)) {
                    GameController.Ins.CheckLanding(collision);
                }
            },
            /*CharacterMotor.OnCollisionEnter end.*/

            /*CharacterMotor.OnCollisionStay start.*/
            OnCollisionStay: function (collision) {
if ( TRACE ) { TRACE( "CharacterMotor#OnCollisionStay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, null)) {
                    GameController.Ins.CheckLanding(collision);
                }
            },
            /*CharacterMotor.OnCollisionStay end.*/

            /*CharacterMotor.ApplyGravity start.*/
            ApplyGravity: function () {
if ( TRACE ) { TRACE( "CharacterMotor#ApplyGravity", this ); }

                if (this.IsGrounded && this.verticalVelocity < 0.0) {
                    this.verticalVelocity = -2.0;
                }

                this.verticalVelocity += this.gravity * UnityEngine.Time.fixedDeltaTime;
            },
            /*CharacterMotor.ApplyGravity end.*/

            /*CharacterMotor.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "CharacterMotor#Move", this ); }

                var motion = this.MoveDirection.$clone().clone().scale( this.moveSpeed );
                var stepHeight = { };

                if (this.CanStepUp(motion, stepHeight)) {
                    var requiredSpeed = stepHeight.v / UnityEngine.Time.fixedDeltaTime;
                    var targetStepSpeed = UnityEngine.Mathf.Min(requiredSpeed, this.stepUpSpeed);
                    this.verticalVelocity = UnityEngine.Mathf.MoveTowards(this.verticalVelocity, targetStepSpeed, this.stepUpAcceleration * UnityEngine.Time.fixedDeltaTime);
                }

                motion.y = this.verticalVelocity;

                this.controller.linearVelocity = motion.$clone();
            },
            /*CharacterMotor.Move end.*/

            /*CharacterMotor.CanStepUp start.*/
            CanStepUp: function (motion, stepHeight) {
if ( TRACE ) { TRACE( "CharacterMotor#CanStepUp", this ); }

                stepHeight.v = 0.0;

                if (!this.enableStepClimb || UnityEngine.Component.op_Equality(this.capsuleCollider, null) || motion.lengthSq() < 0.01) {
                    return false;
                }

                var direction = new pc.Vec3( motion.x, 0.0, motion.z ).clone().normalize().$clone();
                var bounds = this.capsuleCollider.bounds;

                if (!this.IsSupportedForStep(bounds)) {
                    return false;
                }

                var skin = 0.05;
                var lowerOrigin = new pc.Vec3( bounds.center.x, bounds.min.y + skin, bounds.center.z );
                var distance = this.GetCapsuleRadius() + this.stepCheckDistance;
                var lowerHit = { v : new UnityEngine.RaycastHit() };

                if (!UnityEngine.Physics.Raycast$3(lowerOrigin, direction, lowerHit, distance, UnityEngine.LayerMask.op_Implicit(this.stepLayers.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    return false;
                }

                if (lowerHit.v.normal.$clone().scale( -1 ).dot( direction ) < this.minimumStepFacing) {
                    return false;
                }

                var upperOrigin = lowerOrigin.$clone().add( pc.Vec3.UP.clone().clone().scale( this.maxStepHeight ) );
                if (UnityEngine.Physics.Raycast$2(upperOrigin, direction, distance, UnityEngine.LayerMask.op_Implicit(this.stepLayers.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    return false;
                }

                var landingOrigin = upperOrigin.$clone().add( direction.$clone().clone().scale( distance ) );
                var landingCheckDistance = this.maxStepHeight + skin * 2.0;
                var landingHit = { v : new UnityEngine.RaycastHit() };
                if (!UnityEngine.Physics.Raycast$3(landingOrigin, pc.Vec3.DOWN.clone(), landingHit, landingCheckDistance, UnityEngine.LayerMask.op_Implicit(this.stepLayers.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    return false;
                }

                stepHeight.v = landingHit.v.point.y - bounds.min.y;
                return stepHeight.v > skin && stepHeight.v <= this.maxStepHeight + skin;
            },
            /*CharacterMotor.CanStepUp end.*/

            /*CharacterMotor.IsSupportedForStep start.*/
            IsSupportedForStep: function (bounds) {
if ( TRACE ) { TRACE( "CharacterMotor#IsSupportedForStep", this ); }

                if (this.IsGrounded) {
                    return true;
                }

                return false;
            },
            /*CharacterMotor.IsSupportedForStep end.*/

            /*CharacterMotor.IsOnStepSurface start.*/
            IsOnStepSurface: function () {
if ( TRACE ) { TRACE( "CharacterMotor#IsOnStepSurface", this ); }

                if (!this.enableStepClimb || UnityEngine.Component.op_Equality(this.capsuleCollider, null)) {
                    return false;
                }

                var skin = 0.05;
                var bounds = this.capsuleCollider.bounds;
                var origin = new pc.Vec3( bounds.center.x, bounds.min.y + this.maxStepHeight, bounds.center.z );

                return UnityEngine.Physics.Raycast$2(origin, pc.Vec3.DOWN.clone(), this.maxStepHeight + skin, UnityEngine.LayerMask.op_Implicit(this.stepLayers.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
            },
            /*CharacterMotor.IsOnStepSurface end.*/

            /*CharacterMotor.GetCapsuleRadius start.*/
            GetCapsuleRadius: function () {
if ( TRACE ) { TRACE( "CharacterMotor#GetCapsuleRadius", this ); }

                var scale = this.capsuleCollider.transform.lossyScale.$clone();
                var horizontalScale = UnityEngine.Mathf.Max(Math.abs(scale.x), Math.abs(scale.z));
                return this.capsuleCollider.radius * horizontalScale;
            },
            /*CharacterMotor.GetCapsuleRadius end.*/

            /*CharacterMotor.ApplyMotor start.*/
            ApplyMotor: function () {
if ( TRACE ) { TRACE( "CharacterMotor#ApplyMotor", this ); }

                if (this.autoRun) {
                    return;
                }
                var input = this.characterInput.Move.$clone();

                var forward = this.cameraYawTransform.forward.$clone();
                var right = this.cameraYawTransform.right.$clone();

                forward.y = 0.0;
                right.y = 0.0;

                forward.normalize();
                right.normalize();

                this.MoveDirection = forward.$clone().clone().scale( input.y ).add( right.$clone().clone().scale( input.x ) );
                this.MoveDirection = pc.Vec3.clampMagnitude( this.MoveDirection, 1.0 );
            },
            /*CharacterMotor.ApplyMotor end.*/

            /*CharacterMotor.ApplyJump start.*/
            ApplyJump: function () {
if ( TRACE ) { TRACE( "CharacterMotor#ApplyJump", this ); }

                if (!this.jumpRequested) {
                    return;
                }
                this.jumpRequested = false;

                if (!this.IsGrounded) {
                    return;
                }

                this.verticalVelocity = Math.sqrt(this.jumpHeight * -2.0 * this.gravity);
            },
            /*CharacterMotor.ApplyJump end.*/


        }
    });
    /*CharacterMotor end.*/

    /*CharacterRotation start.*/
    Bridge.define("CharacterRotation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            motor: null,
            rotationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterRotation#init", this ); }

                this.rotationSpeed = 12.0;
            }
        },
        methods: {
            /*CharacterRotation.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterRotation#FixedUpdate", this ); }

                this.Rotate();
            },
            /*CharacterRotation.FixedUpdate end.*/

            /*CharacterRotation.Rotate start.*/
            Rotate: function () {
if ( TRACE ) { TRACE( "CharacterRotation#Rotate", this ); }

                var facing = new UnityEngine.Vector3();
                if (this.motor.IsClimbing) {
                    facing = this.motor.ClimbFacing.$clone();
                } else {
                    if (this.motor.IsMoving) {
                        facing = this.motor.MoveDirection.$clone();
                    } else {
                        return;
                    }
                }
                facing.y = 0.0;
                if (facing.lengthSq() < 0.0001) {
                    return;
                }

                var targetRotation = new pc.Quat().lookRotation( facing, pc.Vec3.UP );

                // Rotate through physics so Transform writes do not break interpolation.
                this.motor.Body.MoveRotation(new pc.Quat().slerpUnclamped( this.motor.Body.rotation, targetRotation, pc.math.clamp( 1.0 - UnityEngine.Mathf.Exp(-this.rotationSpeed * UnityEngine.Time.fixedDeltaTime), 0, 1 ) ));
            },
            /*CharacterRotation.Rotate end.*/


        }
    });
    /*CharacterRotation end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {DG.Tweening.DOTweenAnimation}    arg
     * @return  {void}
     */


    /*DG.Tweening.DOTweenAnimation start.*/
    /** @namespace DG.Tweening */

    /**
     * Attach this to a GameObject to create a tween
     *
     * @public
     * @class DG.Tweening.DOTweenAnimation
     * @augments DG.Tweening.Core.ABSAnimationComponent
     */
    Bridge.define("DG.Tweening.DOTweenAnimation", {
        inherits: [DG.Tweening.Core.ABSAnimationComponent],
        statics: {
            events: {
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function addOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function removeOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnReset: null
            },
            methods: {
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static start.*/
                Dispatch_OnReset: function (anim) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Dispatch_OnReset", this ); }

                    if (!Bridge.staticEquals(DG.Tweening.DOTweenAnimation.OnReset, null)) {
                        DG.Tweening.DOTweenAnimation.OnReset(anim);
                    }
                },
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static end.*/

                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static start.*/
                TypeToDOTargetType: function (t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#TypeToDOTargetType", this ); }

                    var str = Bridge.getTypeName(t);
                    var dotIndex = str.lastIndexOf(".");
                    if (dotIndex !== -1) {
                        str = str.substr(((dotIndex + 1) | 0));
                    }
                    if (System.String.indexOf(str, "Renderer") !== -1 && (!Bridge.referenceEquals(str, "SpriteRenderer"))) {
                        str = "Renderer";
                    }
                    //#if true // PHYSICS_MARKER
                    //            if (str == "Rigidbody") str = "Transform";
                    //#endif
                    //#if true // PHYSICS2D_MARKER
                    //            if (str == "Rigidbody2D") str = "Transform";
                    //#endif
                    //            if (str == "RectTransform") str = "Transform";
                    if (Bridge.referenceEquals(str, "RawImage") || Bridge.referenceEquals(str, "Graphic")) {
                        str = "Image";
                    } // RawImages/Graphics are managed like Images for DOTweenAnimation (color and fade use Graphic target anyway)
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(DG.Tweening.DOTweenAnimation.TargetType, str), DG.Tweening.DOTweenAnimation.TargetType), System.Int32));
                },
                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static end.*/


            }
        },
        fields: {
            targetIsSelf: false,
            targetGO: null,
            tweenTargetIsTargetGO: false,
            delay: 0,
            duration: 0,
            easeType: 0,
            easeCurve: null,
            loopType: 0,
            loops: 0,
            id: null,
            isRelative: false,
            isFrom: false,
            isIndependentUpdate: false,
            autoKill: false,
            autoGenerate: false,
            isActive: false,
            isValid: false,
            target: null,
            animationType: 0,
            targetType: 0,
            forcedTargetType: 0,
            autoPlay: false,
            useTargetAsV3: false,
            endValueFloat: 0,
            endValueV3: null,
            endValueV2: null,
            endValueColor: null,
            endValueString: null,
            endValueRect: null,
            endValueTransform: null,
            optionalBool0: false,
            optionalBool1: false,
            optionalFloat0: 0,
            optionalInt0: 0,
            optionalRotationMode: 0,
            optionalScrambleMode: 0,
            optionalShakeRandomnessMode: 0,
            optionalString: null,
            _tweenAutoGenerationCalled: false,
            _playCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#init", this ); }

                this.endValueV3 = new UnityEngine.Vector3();
                this.endValueV2 = new UnityEngine.Vector2();
                this.endValueColor = new UnityEngine.Color();
                this.endValueRect = new UnityEngine.Rect();
                this.targetIsSelf = true;
                this.tweenTargetIsTargetGO = true;
                this.duration = 1;
                this.easeType = DG.Tweening.Ease.OutQuad;
                this.easeCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0, 0, 0, 0), new pc.Keyframe(1, 1, 0, 0) ]});
                this.loopType = DG.Tweening.LoopType.Restart;
                this.loops = 1;
                this.id = "";
                this.isIndependentUpdate = false;
                this.autoKill = true;
                this.autoGenerate = true;
                this.isActive = true;
                this.autoPlay = true;
                this.endValueColor = new pc.Color( 1, 1, 1, 1 );
                this.endValueString = "";
                this.endValueRect = new UnityEngine.Rect.$ctor1(0, 0, 0, 0);
                this.optionalRotationMode = DG.Tweening.RotateMode.Fast;
                this.optionalScrambleMode = DG.Tweening.ScrambleMode.None;
                this.optionalShakeRandomnessMode = DG.Tweening.ShakeRandomnessMode.Full;
                this._playCount = -1;
            }
        },
        methods: {
            /*DG.Tweening.DOTweenAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Awake", this ); }

                if (!this.isActive || !this.autoGenerate) {
                    return;
                }

                if (this.animationType !== DG.Tweening.DOTweenAnimation.AnimationType.Move || !this.useTargetAsV3) {
                    // Don't create tweens if we're using a RectTransform as a Move target,
                    // because that will work only inside Start
                    this.CreateTween(false, this.autoPlay);
                    this._tweenAutoGenerationCalled = true;
                }
            },
            /*DG.Tweening.DOTweenAnimation.Awake end.*/

            /*DG.Tweening.DOTweenAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Start", this ); }

                if (this._tweenAutoGenerationCalled || !this.isActive || !this.autoGenerate) {
                    return;
                }

                this.CreateTween(false, this.autoPlay);
                this._tweenAutoGenerationCalled = true;
            },
            /*DG.Tweening.DOTweenAnimation.Start end.*/

            /*DG.Tweening.DOTweenAnimation.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Reset", this ); }

                DG.Tweening.DOTweenAnimation.Dispatch_OnReset(this);
            },
            /*DG.Tweening.DOTweenAnimation.Reset end.*/

            /*DG.Tweening.DOTweenAnimation.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#OnDestroy", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.OnDestroy end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween start.*/
            /**
             * Creates/recreates the tween without playing it, but first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTween", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween and plays it, first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTween start.*/
            /**
             * Creates/recreates the tween from its target's current value without playing it, but first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTween", this ); }

                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween from its target's current value and plays it, first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay", this ); }

                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.CreateTween start.*/
            /**
             * Creates the tween manually (called automatically if AutoGenerate is set in the Inspector)
             from its target's current value.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    regenerateIfExists    If TRUE and an existing tween was already created (and not killed), kills it and recreates it with the current
             parameters. Otherwise, if a tween already exists, does nothing.
             * @param   {boolean}    andPlay               If TRUE also plays the tween, otherwise only creates it
             * @return  {void}
             */
            CreateTween: function (regenerateIfExists, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateTween", this ); }

                if (regenerateIfExists === void 0) { regenerateIfExists = false; }
                if (andPlay === void 0) { andPlay = true; }
                if (!this.isValid) {
                    if (regenerateIfExists) { // Called manually: warn users
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation isn't valid and its tween won't be created", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }
                if (this.tween != null) {
                    if (this.tween.active) {
                        if (regenerateIfExists) {
                            DG.Tweening.TweenExtensions.Kill(this.tween);
                        } else {
                            return;
                        }
                    }
                    this.tween = null;
                }

                //            if (target == null) {
                //                Debug.LogWarning(string.Format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", this.gameObject.name), this.gameObject);
                //                return;
                //            }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.Component.op_Equality(this.target, null) || UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    if (this.targetIsSelf && UnityEngine.Component.op_Equality(this.target, null)) {
                        // Old error caused during upgrade from DOTween Pro 0.9.255
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", [this.gameObject.name]), this.gameObject);
                    } else {
                        // Missing non-self target
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }

                if (this.forcedTargetType !== DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    this.targetType = this.forcedTargetType;
                }
                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    // Legacy DOTweenAnimation (made with a version older than 0.9.450) without stored targetType > assign it now
                    this.targetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                }

                switch (this.animationType) {
                    case DG.Tweening.DOTweenAnimation.AnimationType.None: 
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Move: 
                        if (this.useTargetAsV3) {
                            this.isRelative = false;
                            if (UnityEngine.Component.op_Equality(this.endValueTransform, null)) {
                                UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target is NULL, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                this.endValueV3 = pc.Vec3.ZERO.clone();
                            } else {
                                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.RectTransform) {
                                    var endValueT = Bridge.as(this.endValueTransform, UnityEngine.RectTransform);
                                    if (UnityEngine.Component.op_Equality(endValueT, null)) {
                                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target should be a RectTransform, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                        this.endValueV3 = pc.Vec3.ZERO.clone();
                                    } else {
                                        var rTarget = Bridge.as(this.target, UnityEngine.RectTransform);
                                        if (UnityEngine.Component.op_Equality(rTarget, null)) {
                                            UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's target and TO target are not of the same type. Please reassign the values", [this.gameObject.name]), this.gameObject);
                                        } else {
                                            // Problem: doesn't work inside Awake (ararargh!)
                                            this.endValueV3 = UnityEngine.Vector3.FromVector2(DG.Tweening.DOTweenModuleUI.Utils.SwitchToRectTransform(endValueT, rTarget));
                                        }
                                    }
                                } else {
                                    this.endValueV3 = this.endValueTransform.position.$clone();
                                }
                            }
                        }
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOAnchorPos3D(Bridge.cast(this.target, UnityEngine.RectTransform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalMove: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalMove(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalBool0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Rotate: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalRotate: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalRotate(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Scale: 
                        switch (this.targetType) {
                            default: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOScale$1(tweenGO.transform, this.optionalBool0 ? new pc.Vec3( this.endValueFloat, this.endValueFloat, this.endValueFloat ) : this.endValueV3.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.UIWidthHeight: 
                        this.tween = DG.Tweening.DOTweenModuleUI.DOSizeDelta(Bridge.cast(this.target, UnityEngine.RectTransform), this.optionalBool0 ? new pc.Vec2( this.endValueFloat, this.endValueFloat ) : this.endValueV2.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Color: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$3(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$1(Bridge.cast(this.target, UnityEngine.Light), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor$3(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueColor.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Fade: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOFade$1(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOIntensity(Bridge.cast(this.target, UnityEngine.Light), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$1(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$4(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.CanvasGroup: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade(Bridge.cast(this.target, UnityEngine.CanvasGroup), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Text: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOText(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueString, this.duration, this.optionalBool0, this.optionalScrambleMode, this.optionalString);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchPosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOPunchPosition(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos(Bridge.cast(this.target, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchScale(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchRotation(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakePosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOShakePosition$3(Bridge.cast(this.target, UnityEngine.Transform), this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1(Bridge.cast(this.target, UnityEngine.RectTransform), this.duration, UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeScale$1(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeRotation$3(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraAspect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOAspect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraBackgroundColor: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOColor(Bridge.cast(this.target, UnityEngine.Camera), this.endValueColor.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraFieldOfView: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOFieldOfView(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraOrthoSize: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOOrthoSize(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraPixelRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPixelRect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DORect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                }

                if (this.tween == null) {
                    return;
                }

                // Created

                if (this.isFrom) {
                    DG.Tweening.TweenSettingsExtensions.From$1(DG.Tweening.Tweener, Bridge.cast(this.tween, DG.Tweening.Tweener), this.isRelative);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Tween, this.tween, this.isRelative);
                }
                var setTarget = this.GetTweenTarget();
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tween, this.tween, setTarget), this.delay), this.loops, this.loopType), this.autoKill), Bridge.fn.bind(this, function () {
                    this.tween = null;
                }));
                if (this.isSpeedBased) {
                    DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Tween, this.tween);
                }
                if (this.easeType === DG.Tweening.Ease.INTERNAL_Custom) {
                    DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Tween, this.tween, this.easeCurve);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tween, this.tween, this.easeType);
                }
                if (!System.String.isNullOrEmpty(this.id)) {
                    DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Tween, this.tween, this.id);
                }
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Tween, this.tween, this.isIndependentUpdate);

                if (this.hasOnStart) {
                    if (this.onStart != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStart, this.onStart.Invoke));
                    }
                } else {
                    this.onStart = null;
                }
                if (this.hasOnPlay) {
                    if (this.onPlay != null) {
                        DG.Tweening.TweenSettingsExtensions.OnPlay(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onPlay, this.onPlay.Invoke));
                    }
                } else {
                    this.onPlay = null;
                }
                if (this.hasOnUpdate) {
                    if (this.onUpdate != null) {
                        DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onUpdate, this.onUpdate.Invoke));
                    }
                } else {
                    this.onUpdate = null;
                }
                if (this.hasOnStepComplete) {
                    if (this.onStepComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStepComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStepComplete, this.onStepComplete.Invoke));
                    }
                } else {
                    this.onStepComplete = null;
                }
                if (this.hasOnComplete) {
                    if (this.onComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onComplete, this.onComplete.Invoke));
                    }
                } else {
                    this.onComplete = null;
                }
                if (this.hasOnRewind) {
                    if (this.onRewind != null) {
                        DG.Tweening.TweenSettingsExtensions.OnRewind(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onRewind, this.onRewind.Invoke));
                    }
                } else {
                    this.onRewind = null;
                }

                if (andPlay) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this.tween);
                } else {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tween, this.tween);
                }

                if (this.hasOnTweenCreated && this.onTweenCreated != null) {
                    this.onTweenCreated.Invoke();
                }
            },
            /*DG.Tweening.DOTweenAnimation.CreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweens start.*/
            /**
             * Returns the tweens (if generated and not killed) created by all DOTweenAnimations on this gameObject,
             in the same order as they appear in the Inspector (top to bottom).<p />
             Note that a tween is generated inside the Awake call (except RectTransform tweens which are generated inside Start),
             so this method won't return them before that
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {System.Collections.Generic.List$1}
             */
            GetTweens: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweens", this ); }

                var $t;
                var result = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                $t = Bridge.getEnumerator(anims);
                try {
                    while ($t.moveNext()) {
                        var anim = $t.Current;
                        if (anim.tween != null && anim.tween.active) {
                            result.add(anim.tween);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweens end.*/

            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget start.*/
            /**
             * Sets the animation target (which must be of the same type of the one set in the Inspector).
             This is useful if you want to change it BEFORE this {@link }
             creates a tween, while after that it won't have any effect.<p />
             Consider that a {@link } creates its tween inside its Awake (except for special tweens),
             so you will need to sure your code runs before this object's Awake (via ScriptExecutionOrder or enabling/disabling methods)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {UnityEngine.Component}    tweenTarget                                   New target for the animation (must be of the same type of the previous one)
             * @param   {boolean}                  useTweenTargetGameObjectForGroupOperations    If TRUE also uses tweenTarget's gameObject when settings the target-ID of the tween
             (which is used with DOPlay/DORestart/etc to apply the same operation on all tweens that have the same target-id).<p />
             You should usually leave this to TRUE if you change the target.
             * @return  {void}
             */
            SetAnimationTarget: function (tweenTarget, useTweenTargetGameObjectForGroupOperations) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#SetAnimationTarget", this ); }

                if (useTweenTargetGameObjectForGroupOperations === void 0) { useTweenTargetGameObjectForGroupOperations = true; }
                var newTargetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                if (newTargetType !== this.targetType) {
                    UnityEngine.Debug.LogError$2("DOTweenAnimation \u25ba SetAnimationTarget: the new target is of a different type from the one set in the Inspector");
                    return;
                }
                this.target = tweenTarget;
                this.targetGO = this.target.gameObject;
                this.tweenTargetIsTargetGO = useTweenTargetGameObjectForGroupOperations;
            },
            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlay start.*/
            /**
             * Plays all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlay", this ); }

                DG.Tweening.DOTween.Play(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlay end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards start.*/
            /**
             * Plays backwards all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayBackwards: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwards", this ); }

                DG.Tweening.DOTween.PlayBackwards(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForward start.*/
            /**
             * Plays foward all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayForward: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForward", this ); }

                DG.Tweening.DOTween.PlayForward(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForward end.*/

            /*DG.Tweening.DOTweenAnimation.DOPause start.*/
            /**
             * Pauses all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPause", this ); }

                DG.Tweening.DOTween.Pause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPause end.*/

            /*DG.Tweening.DOTweenAnimation.DOTogglePause start.*/
            /**
             * Pauses/unpauses (depending on the current state) all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOTogglePause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOTogglePause", this ); }

                DG.Tweening.DOTween.TogglePause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOTogglePause end.*/

            /*DG.Tweening.DOTweenAnimation.DORewind start.*/
            /**
             * Rewinds all tweens created by this animation in the correct order
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewind: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewind", this ); }

                this._playCount = -1;
                // Rewind using Components order (in case there are multiple animations on the same property)
                var anims = this.gameObject.GetComponents(DG.Tweening.DOTweenAnimation);
                for (var i = (anims.length - 1) | 0; i > -1; i = (i - 1) | 0) {
                    var t = anims[i].tween;
                    if (t != null && DG.Tweening.TweenExtensions.IsInitialized(t)) {
                        DG.Tweening.TweenExtensions.Rewind(anims[i].tween);
                    }
                }
                // DOTween.Rewind(GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORewind end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORestart: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart", this ); }

                this.DORestart$1(false);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart$1 start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    fromHere    If TRUE, re-evaluates the tween's start and end values from its current position.
             Set it to TRUE when spawning the same DOTweenAnimation in different positions (like when using a pooling system)
             * @return  {void}
             */
            DORestart$1: function (fromHere) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart$1", this ); }

                this._playCount = -1;
                if (this.tween == null) {
                    if (DG.Tweening.Core.Debugger.logPriority > 1) {
                        DG.Tweening.Core.Debugger.LogNullTween(this.tween);
                    }
                    return;
                }
                if (fromHere && this.isRelative) {
                    this.ReEvaluateRelativeTween();
                }
                DG.Tweening.DOTween.Restart(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORestart$1 end.*/

            /*DG.Tweening.DOTweenAnimation.DOComplete start.*/
            /**
             * Completes all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOComplete: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOComplete", this ); }

                DG.Tweening.DOTween.Complete(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOComplete end.*/

            /*DG.Tweening.DOTweenAnimation.DOKill start.*/
            /**
             * Kills all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOKill: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKill", this ); }

                DG.Tweening.DOTween.Kill(this.GetTweenTarget());
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.DOKill end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayById start.*/
            /**
             * Plays all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayById", this ); }

                DG.Tweening.DOTween.Play$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayAllById start.*/
            /**
             * Plays all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayAllById", this ); }

                DG.Tweening.DOTween.Play(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPauseAllById start.*/
            /**
             * Pauses all tweens that with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPauseAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPauseAllById", this ); }

                DG.Tweening.DOTween.Pause(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPauseAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById start.*/
            /**
             * Plays backwards all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsById", this ); }

                DG.Tweening.DOTween.PlayBackwards$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById start.*/
            /**
             * Plays backwards all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById", this ); }

                DG.Tweening.DOTween.PlayBackwards(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById start.*/
            /**
             * Plays forward all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardById", this ); }

                DG.Tweening.DOTween.PlayForward$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById start.*/
            /**
             * Plays forward all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardAllById", this ); }

                DG.Tweening.DOTween.PlayForward(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayNext start.*/
            /**
             * Plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayNext", this ); }

                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                while (this._playCount < ((anims.length - 1) | 0)) {
                    this._playCount = (this._playCount + 1) | 0;
                    var anim = anims[this._playCount];
                    if (UnityEngine.MonoBehaviour.op_Inequality(anim, null) && anim.tween != null && anim.tween.active && !DG.Tweening.TweenExtensions.IsPlaying(anim.tween) && !DG.Tweening.TweenExtensions.IsComplete(anim.tween)) {
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, anim.tween);
                        break;
                    }
                }
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext start.*/
            /**
             * Rewinds all tweens with the given ID and whose target-id is the same as the one set by this animation,
             then plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewindAndPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAndPlayNext", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(this.GetTweenTarget());
                this.DOPlayNext();
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAllById start.*/
            /**
             * Rewinds all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORewindAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartById start.*/
            /**
             * Restarts all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartAllById start.*/
            /**
             * Restarts all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillById start.*/
            /**
             * Kills all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillById", this ); }

                DG.Tweening.DOTween.Kill$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillAllById start.*/
            /**
             * Kills all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillAllById", this ); }

                DG.Tweening.DOTween.Kill(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillAllById end.*/

            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview start.*/
            /**
             * Previews the tween in the editor. Only for DOTween internal usage: don't use otherwise.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {DG.Tweening.Tween}
             */
            CreateEditorPreview: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateEditorPreview", this ); }

                if (UnityEngine.Application.isPlaying) {
                    return null;
                }

                // CHANGE: first param switched to TRUE otherwise changing an animation and replaying in editor would still play old one
                this.CreateTween(true, this.autoPlay);
                return this.tween;
            },
            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenGO start.*/
            /**
             * Returns the gameObject whose target component should be animated
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenGO: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenGO", this ); }

                return this.targetIsSelf ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenGO end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenTarget start.*/
            /**
             * Returns the GameObject which should be used/retrieved for SetTarget
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenTarget: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenTarget", this ); }

                return this.targetIsSelf || !this.tweenTargetIsTargetGO ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenTarget end.*/

            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween start.*/
            ReEvaluateRelativeTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween", this ); }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    return;
                }
                if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.Move) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.position.$clone().add( this.endValueV3 ).$clone(), true);
                } else if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.LocalMove) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.localPosition.$clone().add( this.endValueV3 ).$clone(), true);
                }
            },
            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween end.*/


        },
        overloads: {
            "DORestart(bool)": "DORestart$1"
        }
    });
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.AnimationType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Move: 1,
                LocalMove: 2,
                Rotate: 3,
                LocalRotate: 4,
                Scale: 5,
                Color: 6,
                Fade: 7,
                Text: 8,
                PunchPosition: 9,
                PunchRotation: 10,
                PunchScale: 11,
                ShakePosition: 12,
                ShakeRotation: 13,
                ShakeScale: 14,
                CameraAspect: 15,
                CameraBackgroundColor: 16,
                CameraFieldOfView: 17,
                CameraOrthoSize: 18,
                CameraPixelRect: 19,
                CameraRect: 20,
                UIWidthHeight: 21
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.TargetType", {
        $kind: 1006,
        statics: {
            fields: {
                Unset: 0,
                Camera: 1,
                CanvasGroup: 2,
                Image: 3,
                Light: 4,
                RectTransform: 5,
                Renderer: 6,
                SpriteRenderer: 7,
                Rigidbody: 8,
                Rigidbody2D: 9,
                Text: 10,
                Transform: 11,
                tk2dBaseSprite: 12,
                tk2dTextMesh: 13,
                TextMeshPro: 14,
                TextMeshProUGUI: 15
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    Bridge.define("DG.Tweening.DOTweenAnimationExtensions", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static start.*/
                IsSameOrSubclassOf: function (T, t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf", this ); }

                    return Bridge.is(t, T);
                },
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    trans.rotation = newRot.$clone();
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return false;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return false;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    Bridge.define("DG.Tweening.DOTweenProShortcuts", {
        statics: {
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#ctor", this ); }

                    // Create stub instances of custom plugins, in order to allow IL2CPP to understand they must be included in the build
                    var stub = new DG.Tweening.Plugins.SpiralPlugin();
                }
            },
            methods: {
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static start.*/
                /**
                 * Tweens a Transform's localPosition in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Transform}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#DOSpiral", this ); }

                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.localPosition;
                    }, function (x) {
                        target.localPosition = x.$clone();
                    }, System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*Elevator start.*/
    /**
     * Moving platform: when the player stands on it at the bottom it rides up to the top point,
     carrying the player. After the player leaves it at the top it returns down.
     *
     * @public
     * @class Elevator
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Elevator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bottomPoint: null,
            topPoint: null,
            travelTime: 0,
            startDelay: 0,
            returnDelay: 0,
            body: null,
            platformCollider: null,
            state: 0,
            progress: 0,
            timer: 0,
            contactRider: null,
            stepsSinceContact: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Elevator#init", this ); }

                this.travelTime = 3.0;
                this.startDelay = 0.3;
                this.returnDelay = 2.0;
                this.stepsSinceContact = 10;
            }
        },
        methods: {
            /*Elevator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Elevator#Awake", this ); }

                var $t;
                this.body = this.GetComponent(UnityEngine.Rigidbody);
                this.body.isKinematic = true;
                this.body.useGravity = false;
                this.body.interpolation = UnityEngine.RigidbodyInterpolation.Interpolate;
                this.platformCollider = this.GetComponent(UnityEngine.Collider);
                if (UnityEngine.Component.op_Inequality(this.bottomPoint, null)) {
                    this.body.position = ($t = this.bottomPoint.position.$clone(), this.transform.position = $t.$clone(), $t);
                }
            },
            /*Elevator.Awake end.*/

            /*Elevator.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Elevator#FixedUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.bottomPoint, null) || UnityEngine.Component.op_Equality(this.topPoint, null)) {
                    return;
                }
                var rider = this.FindRider();
                this.LateFixedTick();

                switch (this.state) {
                    case Elevator.State.Bottom: 
                        this.timer = UnityEngine.MonoBehaviour.op_Inequality(rider, null) ? this.timer + UnityEngine.Time.fixedDeltaTime : 0.0;
                        if (this.timer >= this.startDelay) {
                            this.state = Elevator.State.GoingUp;
                            this.timer = 0.0;
                        }
                        break;
                    case Elevator.State.GoingUp: 
                        this.Step(1.0, rider);
                        if (this.progress >= 1.0) {
                            this.state = Elevator.State.Top;
                            this.timer = 0.0;
                        }
                        break;
                    case Elevator.State.Top: 
                        this.timer = UnityEngine.MonoBehaviour.op_Equality(rider, null) ? this.timer + UnityEngine.Time.fixedDeltaTime : 0.0;
                        if (this.timer >= this.returnDelay) {
                            this.state = Elevator.State.GoingDown;
                            this.timer = 0.0;
                        }
                        break;
                    case Elevator.State.GoingDown: 
                        this.Step(-1.0, rider);
                        if (this.progress <= 0.0) {
                            this.state = Elevator.State.Bottom;
                            this.timer = 0.0;
                        }
                        break;
                }
            },
            /*Elevator.FixedUpdate end.*/

            /*Elevator.Step start.*/
            Step: function (direction, rider) {
if ( TRACE ) { TRACE( "Elevator#Step", this ); }

                this.progress = Math.max(0, Math.min(1, this.progress + direction * UnityEngine.Time.fixedDeltaTime / this.travelTime));
                var next = new pc.Vec3().lerp( this.bottomPoint.position, this.topPoint.position, pc.math.smoothstep(0.0, 1.0, this.progress) );
                var delta = next.$clone().sub( this.body.position );
                this.body.MovePosition(next);
                if (UnityEngine.MonoBehaviour.op_Inequality(rider, null) && UnityEngine.Component.op_Inequality(rider.Body, null)) {
                    rider.Body.position = rider.Body.position.$clone().add( delta.$clone() );
                    rider.ResetFall();
                }
            },
            /*Elevator.Step end.*/

            /*Elevator.FindRider start.*/
            FindRider: function () {
if ( TRACE ) { TRACE( "Elevator#FindRider", this ); }

                return this.stepsSinceContact <= 3 ? this.contactRider : null;
            },
            /*Elevator.FindRider end.*/

            /*Elevator.LateFixedTick start.*/
            LateFixedTick: function () {
if ( TRACE ) { TRACE( "Elevator#LateFixedTick", this ); }

                this.stepsSinceContact = (this.stepsSinceContact + 1) | 0;
            },
            /*Elevator.LateFixedTick end.*/

            /*Elevator.OnCollisionStay start.*/
            OnCollisionStay: function (collision) {
if ( TRACE ) { TRACE( "Elevator#OnCollisionStay", this ); }

                var motor = UnityEngine.Component.op_Inequality(collision.rigidbody, null) ? collision.rigidbody.GetComponent(CharacterMotor) : null;
                if (UnityEngine.MonoBehaviour.op_Equality(motor, null) || !motor.enabled) {
                    return;
                }
                for (var i = 0; i < collision.contactCount; i = (i + 1) | 0) {
                    // Normal points from the player into the platform: downward when standing on top.
                    if (Math.abs(collision.GetContact(i).normal.y) > 0.5 && collision.GetContact(i).point.y >= this.platformCollider.bounds.max.y - 0.2) {
                        this.contactRider = motor;
                        this.stepsSinceContact = 0;
                        return;
                    }
                }
            },
            /*Elevator.OnCollisionStay end.*/

            /*Elevator.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "Elevator#OnCollisionEnter", this ); }

                this.OnCollisionStay(collision);
            },
            /*Elevator.OnCollisionEnter end.*/


        }
    });
    /*Elevator end.*/

    /*Elevator+State start.*/
    Bridge.define("Elevator.State", {
        $kind: 1006,
        statics: {
            fields: {
                Bottom: 0,
                GoingUp: 1,
                Top: 2,
                GoingDown: 3
            }
        }
    });
    /*Elevator+State end.*/

    /*FootstepAudio start.*/
    /**
     * Loops a footstep clip while the character is running on the ground.
     *
     * @public
     * @class FootstepAudio
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("FootstepAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            motor: null,
            footstepClip: null,
            volume: 0,
            pitchAtFullSpeed: 0,
            source: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FootstepAudio#init", this ); }

                this.volume = 0.6;
                this.pitchAtFullSpeed = 1.15;
            }
        },
        methods: {
            /*FootstepAudio.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FootstepAudio#Awake", this ); }

                this.source = this.GetComponent(UnityEngine.AudioSource);
                this.source.clip = this.footstepClip;
                this.source.loop = true;
                this.source.playOnAwake = false;
                this.source.spatialBlend = 0.0;
                this.source.volume = this.volume;
                if (UnityEngine.MonoBehaviour.op_Equality(this.motor, null)) {
                    this.motor = this.GetComponent(CharacterMotor);
                }
            },
            /*FootstepAudio.Awake end.*/

            /*FootstepAudio.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FootstepAudio#Update", this ); }

                var running = UnityEngine.MonoBehaviour.op_Inequality(this.motor, null) && this.motor.enabled && this.motor.IsMoving && this.motor.IsGrounded && this.footstepClip != null;
                if (running) {
                    var speed01 = this.motor.MaxMoveSpeed > 0.0 ? Math.max(0, Math.min(1, this.motor.Speed / this.motor.MaxMoveSpeed)) : 1.0;
                    this.source.pitch = pc.math.lerp(0.9, this.pitchAtFullSpeed, speed01);
                    if (!this.source.isPlaying) {
                        this.source.Play();
                    }
                } else if (this.source.isPlaying) {
                    this.source.Stop();
                }
            },
            /*FootstepAudio.Update end.*/

            /*FootstepAudio.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FootstepAudio#OnDisable", this ); }

                if (UnityEngine.Component.op_Inequality(this.source, null)) {
                    this.source.Stop();
                }
            },
            /*FootstepAudio.OnDisable end.*/


        }
    });
    /*FootstepAudio end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            },
            methods: {
                /*GameController.PlaySfx:static start.*/
                PlaySfx: function (clip) {
if ( TRACE ) { TRACE( "GameController#PlaySfx", this ); }

                    if (clip != null && UnityEngine.MonoBehaviour.op_Inequality(AudioController.Ins, null)) {
                        AudioController.Ins.PlaySFX(clip);
                    }
                },
                /*GameController.PlaySfx:static end.*/

                /*GameController.SetGiftArrow:static start.*/
                SetGiftArrow: function (gift, visible) {
if ( TRACE ) { TRACE( "GameController#SetGiftArrow", this ); }

                    if (UnityEngine.MonoBehaviour.op_Inequality(gift, null) && UnityEngine.Component.op_Inequality(gift.Arrow, null)) {
                        gift.Arrow.gameObject.SetActive(visible);
                    }
                },
                /*GameController.SetGiftArrow:static end.*/


            }
        },
        fields: {
            timeToShowComplete: 0,
            currentProgress: 0,
            target: 0,
            progressText: null,
            collectText: null,
            _cta: null,
            gifts: null,
            collect: null,
            tut: null,
            playerSpawn: null,
            giftSpawn: null,
            failUI: null,
            playerMotor: null,
            failHeight: 0,
            failOnlyAfterClimb: false,
            alwaysFailDepth: 0,
            winSound: null,
            loseSound: null,
            failByFallDistance: false,
            maxSafeFall: 0,
            winEffect: null,
            sequentialGifts: false,
            hasClimbed: false,
            progressOffset: 0,
            progressTotal: 0,
            unlockPanel: null,
            unlockCTA: null,
            unlockAutoInstallDelay: 0,
            state: 0,
            collectTween: null,
            hideCollectTween: null,
            failButton: null,
            failShine: null,
            failButtonScale: null,
            failShineStart: null,
            failButtonTween: null,
            failShineTween: null
        },
        props: {
            FirstGift: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#FirstGift#get", this ); }

                    return this.gifts != null && this.gifts.Count > 0 ? this.gifts.getItem(0) : null;
                }
            },
            IsPlaying: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#IsPlaying#get", this ); }

                    return this.state === GameController.GameState.Playing;
                }
            },
            HasFailed: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#HasFailed#get", this ); }

                    return this.state === GameController.GameState.Failed;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController#init", this ); }

                this.failButtonScale = new UnityEngine.Vector3();
                this.failShineStart = new UnityEngine.Vector2();
                this.timeToShowComplete = 0.5;
                this.target = 1;
                this.gifts = new (System.Collections.Generic.List$1(Gift)).ctor();
                this.failHeight = 0.0;
                this.failOnlyAfterClimb = false;
                this.alwaysFailDepth = 10.0;
                this.failByFallDistance = false;
                this.maxSafeFall = 6.0;
                this.sequentialGifts = false;
                this.progressOffset = 0;
                this.progressTotal = 0;
                this.unlockAutoInstallDelay = 3.0;
            }
        },
        methods: {
            /*GameController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, null) && UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                GameController.Ins = this;
            },
            /*GameController.Awake end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.playerMotor, null) && UnityEngine.MonoBehaviour.op_Inequality(this.collect, null)) {
                    this.playerMotor = this.collect.GetComponent(CharacterMotor);
                }

                if (this.sequentialGifts) {
                    this.gifts.RemoveAll(function (g) {
                        return UnityEngine.MonoBehaviour.op_Equality(g, null);
                    });
                    for (var i = 0; i < this.gifts.Count; i = (i + 1) | 0) {
                        this.gifts.getItem(i).collectDone = false;
                        GameController.SetGiftArrow(this.gifts.getItem(i), i === 0);
                    }

                    this.target = UnityEngine.Mathf.Max(1, this.gifts.Count);
                } else {
                    var levelGift = this.FirstGift;
                    this.gifts.clear();
                    if (UnityEngine.MonoBehaviour.op_Inequality(levelGift, null)) {
                        this.gifts.add(levelGift);
                        levelGift.collectDone = false;
                        if (UnityEngine.Component.op_Inequality(this.giftSpawn, null)) {
                            levelGift.transform.position = this.giftSpawn.position.$clone();
                        }
                    }

                    this.target = 1;
                }
                this.currentProgress = 0;
                this.state = GameController.GameState.Playing;
                if (UnityEngine.GameObject.op_Inequality(this.failUI, null)) {
                    this.failUI.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this._cta, null)) {
                    this._cta.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.collectText, null)) {
                    this.collectText.transform$1.localScale = pc.Vec3.ZERO.clone();
                }
                if (UnityEngine.Component.op_Inequality(this.playerSpawn, null) && UnityEngine.MonoBehaviour.op_Inequality(this.playerMotor, null)) {
                    this.playerMotor.Teleport(this.playerSpawn.position, this.playerSpawn.rotation);
                }
                this.UpdateProgress();
            },
            /*GameController.Start end.*/

            /*GameController.CheckLanding start.*/
            CheckLanding: function (collision) {
if ( TRACE ) { TRACE( "GameController#CheckLanding", this ); }

                if (!this.IsPlaying || UnityEngine.MonoBehaviour.op_Equality(this.playerMotor, null) || UnityEngine.Component.op_Equality(this.playerMotor.Body, null)) {
                    return;
                }
                // Wait for an actual landing: the motor's ground probe can report grounded
                // before contact, and a height check alone would stop the player in midair.
                if (this.failByFallDistance) {
                    if (this.playerMotor.IsClimbing || this.playerMotor.FallDistance <= this.maxSafeFall) {
                        return;
                    }
                    for (var i = 0; i < collision.contactCount; i = (i + 1) | 0) {
                        if (collision.GetContact(i).normal.y < 0.5) {
                            continue;
                        }
                        this.Fail();
                        return;
                    }

                    return;
                }

                var count = collision.contactCount;
                for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                    var contact = collision.GetContact(i1);
                    if (contact.normal.y < 0.5) {
                        continue;
                    }
                    if (contact.point.y >= this.failHeight) {
                        if (contact.point.y >= this.failHeight + 0.5) {
                            this.hasClimbed = true;
                        }
                        continue;
                    }

                    if (this.failOnlyAfterClimb && !this.hasClimbed && contact.point.y >= this.failHeight - this.alwaysFailDepth) {
                        continue;
                    }
                    this.Fail();
                    return;
                }
            },
            /*GameController.CheckLanding end.*/

            /*GameController.ReportLanding start.*/
            /**
             * Called by the motor when it lands after being airborne.
             *
             * @instance
             * @public
             * @this GameController
             * @memberof GameController
             * @param   {number}    fallDistance
             * @return  {void}
             */
            ReportLanding: function (fallDistance) {
if ( TRACE ) { TRACE( "GameController#ReportLanding", this ); }

                if (!this.failByFallDistance || !this.IsPlaying) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.playerMotor, null) && this.playerMotor.IsClimbing) {
                    return;
                }
                if (fallDistance > this.maxSafeFall) {
                    this.Fail();
                }
            },
            /*GameController.ReportLanding end.*/

            /*GameController.Far start.*/
            Far: function () {
if ( TRACE ) { TRACE( "GameController#Far", this ); }

                if (this.IsPlaying && UnityEngine.MonoBehaviour.op_Inequality(this.tut, null)) {
                    this.tut.ShowFarTut();
                }
            },
            /*GameController.Far end.*/

            /*GameController.Fail start.*/
            Fail: function () {
if ( TRACE ) { TRACE( "GameController#Fail", this ); }

                if (!this.IsPlaying) {
                    return;
                }
                this.state = GameController.GameState.Failed;
                this.StopPlayer();
                GameController.PlaySfx(this.loseSound);
                if (UnityEngine.GameObject.op_Inequality(this.failUI, null)) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tut, null)) {
                        this.tut.StopTut();
                    }
                    this.failUI.SetActive(true);
                } else if (UnityEngine.MonoBehaviour.op_Inequality(this.tut, null)) {
                    this.tut.ShowFailTut();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(LunaController.Instance, null)) {
                    LunaController.Instance.EndGame(this.failUI);
                } else if (UnityEngine.GameObject.op_Inequality(this._cta, null)) {
                    this._cta.SetActive(true);
                }
            },
            /*GameController.Fail end.*/

            /*GameController.CollectGift start.*/
            CollectGift: function (gift) {
if ( TRACE ) { TRACE( "GameController#CollectGift", this ); }

                if (!this.IsPlaying || UnityEngine.MonoBehaviour.op_Equality(gift, null) || UnityEngine.MonoBehaviour.op_Inequality(gift, this.FirstGift)) {
                    return;
                }
                if (this.sequentialGifts && this.gifts.Count > 1) {
                    this.CollectIntermediateGift(gift);
                    return;
                }

                // Lock the result immediately, including the delay before the CTA appears.
                this.state = GameController.GameState.Completing;
                this.gifts.clear();
                this.currentProgress = (this.currentProgress + 1) | 0;
                if (UnityEngine.Component.op_Inequality(this.winEffect, null)) {
                    this.winEffect.gameObject.SetActive(true);
                    this.winEffect.Play$1(true);
                }
                this.StopPlayer();
                this.UpdateProgress();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.collectText, null)) {
                    this.collectText.transform$1.localScale = pc.Vec3.ZERO.clone();
                    this.collectTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.collectText.transform$1, 1.2, 0.3), DG.Tweening.Ease.OutCubic), Bridge.fn.bind(this, function () {
                        this.collectTween = DG.Tweening.ShortcutExtensions.DOScale(this.collectText.transform$1, 1.0, 0.2);
                    }));
                    this.hideCollectTween = DG.Tweening.DOVirtual.DelayedCall(1.0, Bridge.fn.bind(this, function () {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.collectText, null)) {
                            this.collectText.transform$1.localScale = pc.Vec3.ZERO.clone();
                        }
                    }));
                }

                this.StartCoroutine$1(this.WaitForCollect(gift));
                this.StartCoroutine$1(this.ShowComplete());
            },
            /*GameController.CollectGift end.*/

            /*GameController.CollectIntermediateGift start.*/
            CollectIntermediateGift: function (gift) {
if ( TRACE ) { TRACE( "GameController#CollectIntermediateGift", this ); }

                this.gifts.removeAt(0);
                this.currentProgress = (this.currentProgress + 1) | 0;
                this.UpdateProgress();
                this.PopCollectText();
                this.StartCoroutine$1(this.WaitForCollect(gift));

                var next = this.FirstGift;
                if (UnityEngine.MonoBehaviour.op_Equality(next, null)) {
                    return;
                }
                GameController.SetGiftArrow(next, true);
                var selector = next.GetComponent(MonsterSelector);
                if (UnityEngine.MonoBehaviour.op_Inequality(selector, null)) {
                    selector.ApplyHud();
                }
            },
            /*GameController.CollectIntermediateGift end.*/

            /*GameController.PopCollectText start.*/
            PopCollectText: function () {
if ( TRACE ) { TRACE( "GameController#PopCollectText", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.collectText, null)) {
                    return;
                }
                this.collectTween != null ? DG.Tweening.TweenExtensions.Kill(this.collectTween) : null;
                this.hideCollectTween != null ? DG.Tweening.TweenExtensions.Kill(this.hideCollectTween) : null;
                this.collectText.transform$1.localScale = pc.Vec3.ZERO.clone();
                this.collectTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.collectText.transform$1, 1.2, 0.3), DG.Tweening.Ease.OutCubic), Bridge.fn.bind(this, function () {
                    this.collectTween = DG.Tweening.ShortcutExtensions.DOScale(this.collectText.transform$1, 1.0, 0.2);
                }));
                this.hideCollectTween = DG.Tweening.DOVirtual.DelayedCall(1.0, Bridge.fn.bind(this, function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.collectText, null)) {
                        this.collectText.transform$1.localScale = pc.Vec3.ZERO.clone();
                    }
                }));
            },
            /*GameController.PopCollectText end.*/

            /*GameController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameController#Update", this ); }

                var showEffect = this.state === GameController.GameState.Failed && UnityEngine.GameObject.op_Inequality(this.failUI, null) && this.failUI.activeInHierarchy;
                if (showEffect && this.failButtonTween == null) {
                    this.StartFailButtonEffect();
                } else {
                    if (!showEffect && this.failButtonTween != null) {
                        this.StopFailButtonEffect();
                    }
                }
            },
            /*GameController.Update end.*/

            /*GameController.StartFailButtonEffect start.*/
            StartFailButtonEffect: function () {
if ( TRACE ) { TRACE( "GameController#StartFailButtonEffect", this ); }

                var $t;
                if (UnityEngine.Component.op_Equality(this.failButton, null)) {
                    // The TRY AGAIN artwork is the CTA child of the fail popup.
                    this.failButton = Bridge.as(this.failUI.transform.Find("CTA"), UnityEngine.RectTransform);
                    if (UnityEngine.Component.op_Equality(this.failButton, null)) {
                        return;
                    }
                    var buttonImage = this.failButton.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Equality(buttonImage, null)) {
                        return;
                    }
                    this.failButtonScale = this.failButton.localScale.$clone();

                    var mask = this.failButton.GetComponent(UnityEngine.UI.Mask);
                    if (UnityEngine.MonoBehaviour.op_Equality(mask, null)) {
                        mask = this.failButton.gameObject.AddComponent(UnityEngine.UI.Mask);
                    }
                    mask.showMaskGraphic = true;

                    var line = new UnityEngine.GameObject.$ctor4("FailShine", [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image]);
                    line.layer = this.failButton.gameObject.layer;
                    this.failShine = line.GetComponent(UnityEngine.RectTransform);
                    this.failShine.SetParent(this.failButton, false);
                    this.failShine.anchorMin = ($t = new pc.Vec2( 0.5, 0.5 ), this.failShine.anchorMax = $t.$clone(), $t);
                    this.failShine.pivot = new pc.Vec2( 0.5, 0.5 );
                    this.failShine.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, -24.92 );
                    var shineImage = line.GetComponent(UnityEngine.UI.Image);
                    shineImage.color = new pc.Color( 1.0, 1.0, 1.0, 0.2 );
                    shineImage.raycastTarget = false;
                }

                if (UnityEngine.Component.op_Equality(this.failShine, null)) {
                    return;
                }
                UnityEngine.Canvas.ForceUpdateCanvases();
                var width = this.failButton.rect.width;
                var height = this.failButton.rect.height;
                var lineWidth = width * 0.15;
                var lineHeight = height * 2.0;
                this.failShine.sizeDelta = new pc.Vec2( lineWidth, lineHeight );
                // Include the rotated stripe's extent so it restarts entirely outside the mask.
                var extent = (lineWidth * Math.cos(0.434936) + lineHeight * Math.sin(0.434936)) * 0.5;
                var center = this.failButton.rect.center.x;
                this.failShineStart = new pc.Vec2( center - width * 0.5 - extent, this.failButton.rect.center.y );
                this.failShine.anchoredPosition = this.failShineStart.$clone();
                this.failShine.gameObject.SetActive(true);
                this.failButtonTween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.failButton, this.failButtonScale.$clone().clone().scale( 1.2 ), 0.6), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo);
                this.failShineTween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.failShine, center + width * 0.5 + extent, 0.8), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Restart);
            },
            /*GameController.StartFailButtonEffect end.*/

            /*GameController.StopFailButtonEffect start.*/
            StopFailButtonEffect: function () {
if ( TRACE ) { TRACE( "GameController#StopFailButtonEffect", this ); }

                this.failButtonTween != null ? DG.Tweening.TweenExtensions.Kill(this.failButtonTween) : null;
                this.failShineTween != null ? DG.Tweening.TweenExtensions.Kill(this.failShineTween) : null;
                this.failButtonTween = null;
                this.failShineTween = null;
                if (UnityEngine.Component.op_Inequality(this.failButton, null)) {
                    this.failButton.localScale = this.failButtonScale.$clone();
                }
                if (UnityEngine.Component.op_Inequality(this.failShine, null)) {
                    this.failShine.anchoredPosition = this.failShineStart.$clone();
                    this.failShine.gameObject.SetActive(false);
                }
            },
            /*GameController.StopFailButtonEffect end.*/

            /*GameController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "GameController#OnDisable", this ); }

                this.StopFailButtonEffect();
            },
            /*GameController.OnDisable end.*/

            /*GameController.StopPlayer start.*/
            StopPlayer: function () {
if ( TRACE ) { TRACE( "GameController#StopPlayer", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.collect, null)) {
                    this.collect.enabled = false;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.playerMotor, null)) {
                    return;
                }
                this.playerMotor.AutoRun(true, pc.Vec3.ZERO.clone());
                this.playerMotor.enabled = false;
                var body = this.playerMotor.Body;
                if (UnityEngine.Component.op_Equality(body, null)) {
                    return;
                }
                body.linearVelocity = pc.Vec3.ZERO.clone();
                body.angularVelocity = pc.Vec3.ZERO.clone();
                body.isKinematic = true;
            },
            /*GameController.StopPlayer end.*/

            /*GameController.WaitForCollect start.*/
            WaitForCollect: function (gift) {
if ( TRACE ) { TRACE( "GameController#WaitForCollect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(function () {
                                            return UnityEngine.MonoBehaviour.op_Equality(gift, null) || gift.collectDone;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(gift, null)) {
                                            gift.RemoveGift();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameController.WaitForCollect end.*/

            /*GameController.UpdateProgress start.*/
            UpdateProgress: function () {
if ( TRACE ) { TRACE( "GameController#UpdateProgress", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressText, null)) {
                    this.progressText.text = System.String.format("{0}/{1}", Bridge.box(((this.progressOffset + this.currentProgress) | 0), System.Int32), Bridge.box((this.progressTotal > 0 ? this.progressTotal : this.target), System.Int32));
                }
            },
            /*GameController.UpdateProgress end.*/

            /*GameController.ShowComplete start.*/
            ShowComplete: function () {
if ( TRACE ) { TRACE( "GameController#ShowComplete", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.timeToShowComplete);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.state !== GameController.GameState.Completing) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    return false;
                                }
                                case 3: {
                                    this.state = GameController.GameState.Complete;
                                        GameController.PlaySfx(this.winSound);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.tut, null)) {
                                            this.tut.StopTut();
                                        }
                                        if (UnityEngine.GameObject.op_Inequality(this.unlockPanel, null)) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    this.unlockPanel.SetActive(true);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(LunaController.Instance, null)) {
                                            LunaController.Instance.EndUnlock(this.unlockCTA, this.unlockAutoInstallDelay);
                                        }
                                        return false;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(LunaController.Instance, null)) {
                                            LunaController.Instance.EndCard();
                                        } else {
                                            if (UnityEngine.GameObject.op_Inequality(this._cta, null)) {
                                                this._cta.SetActive(true);
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameController.ShowComplete end.*/

            /*GameController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "GameController#OnDestroy", this ); }

                this.StopFailButtonEffect();
                this.collectTween != null ? DG.Tweening.TweenExtensions.Kill(this.collectTween) : null;
                this.hideCollectTween != null ? DG.Tweening.TweenExtensions.Kill(this.hideCollectTween) : null;
                if (UnityEngine.MonoBehaviour.op_Equality(GameController.Ins, this)) {
                    GameController.Ins = null;
                }
            },
            /*GameController.OnDestroy end.*/


        }
    });
    /*GameController end.*/

    /*GameController+GameState start.*/
    Bridge.define("GameController.GameState", {
        $kind: 1006,
        statics: {
            fields: {
                Playing: 0,
                Completing: 1,
                Complete: 2,
                Failed: 3
            }
        }
    });
    /*GameController+GameState end.*/

    /*GroundChecker start.*/
    Bridge.define("GroundChecker", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            groundPoint: null,
            checkRadius: 0,
            groundLayer: null,
            IsGrounded: false
        },
        props: {
            GroundLayer: {
                get: function () {
if ( TRACE ) { TRACE( "GroundChecker#GroundLayer#get", this ); }

                    return this.groundLayer.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GroundChecker#init", this ); }

                this.groundLayer = new UnityEngine.LayerMask();
                this.checkRadius = 0.2;
            }
        },
        methods: {
            /*GroundChecker.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GroundChecker#Update", this ); }

                this.CheckGround();
            },
            /*GroundChecker.Update end.*/

            /*GroundChecker.CheckGround start.*/
            CheckGround: function () {
if ( TRACE ) { TRACE( "GroundChecker#CheckGround", this ); }

                this.IsGrounded = UnityEngine.Physics.CheckSphere(this.groundPoint.position, this.checkRadius, UnityEngine.LayerMask.op_Implicit(this.groundLayer.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
            },
            /*GroundChecker.CheckGround end.*/


        }
    });
    /*GroundChecker end.*/

    /*Gift start.*/
    Bridge.define("Gift", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hints: null,
            collectSound: null,
            collectEffect: null,
            arrow: null,
            collectDone: false
        },
        props: {
            Arrow: {
                get: function () {
if ( TRACE ) { TRACE( "Gift#Arrow#get", this ); }

                    return this.arrow;
                }
            }
        },
        methods: {
            /*Gift.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Gift#Start", this ); }

                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(this.arrow, 4.0, 0.5), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo);
            },
            /*Gift.Start end.*/

            /*Gift.ShowHints start.*/
            ShowHints: function () {
if ( TRACE ) { TRACE( "Gift#ShowHints", this ); }

                if (this.hints == null) {
                    return;
                }
                for (var i = 0; i < this.hints.Count; i = (i + 1) | 0) {
                    this.hints.getItem(i).ShowHint();
                }
            },
            /*Gift.ShowHints end.*/

            /*Gift.OnTriggerEnter start.*/
            OnTriggerEnter: function (collision) {
if ( TRACE ) { TRACE( "Gift#OnTriggerEnter", this ); }

                if (this.collectDone || !collision.gameObject.CompareTag("Player")) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(GameController.Ins, null) || !GameController.Ins.IsPlaying || UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins.FirstGift, this)) {
                    return;
                }
                GameController.Ins.CollectGift(this);
                this.collectDone = true;
                this.collectEffect.Play();
                AudioController.Ins.PlaySFX(this.collectSound);
            },
            /*Gift.OnTriggerEnter end.*/

            /*Gift.RemoveGift start.*/
            RemoveGift: function () {
if ( TRACE ) { TRACE( "Gift#RemoveGift", this ); }

                this.transform.GetChild(0).gameObject.SetActive(false);
                this.arrow.gameObject.SetActive(false);
            },
            /*Gift.RemoveGift end.*/


        }
    });
    /*Gift end.*/

    /*HideOnPointer start.*/
    Bridge.define("HideOnPointer", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler],
        fields: {
            OnPointerDownEvent: null
        },
        alias: ["OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown"],
        methods: {
            /*HideOnPointer.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "HideOnPointer#OnPointerDown", this ); }

                !Bridge.staticEquals(this.OnPointerDownEvent, null) ? this.OnPointerDownEvent() : null;
                this.gameObject.SetActive(false);
            },
            /*HideOnPointer.OnPointerDown end.*/


        }
    });
    /*HideOnPointer end.*/

    /*Hint start.*/
    Bridge.define("Hint", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*Hint end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*InputManager start.*/
    Bridge.define("InputManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            worldCamera: null,
            interactLayer: null,
            touchSensitivity: 0,
            mouseSensitivity: 0,
            dragThreshold: 0,
            LookDelta: null,
            CurrentInteractable: null,
            cameraFinger: 0,
            startPosition: null,
            dragging: false,
            mousePressed: false,
            previousMousePosition: null,
            uiHits: null,
            pointerData: null,
            pointerEventSystem: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InputManager#init", this ); }

                this.interactLayer = new UnityEngine.LayerMask();
                this.LookDelta = new UnityEngine.Vector2();
                this.startPosition = new UnityEngine.Vector2();
                this.previousMousePosition = new UnityEngine.Vector2();
                this.touchSensitivity = 0.15;
                this.mouseSensitivity = 5.0;
                this.dragThreshold = 20.0;
                this.cameraFinger = -1;
                this.uiHits = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
            }
        },
        methods: {
            /*InputManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "InputManager#Awake", this ); }

                InputManager.Instance = this;
            },
            /*InputManager.Awake end.*/

            /*InputManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "InputManager#Update", this ); }

                this.LookDelta = pc.Vec2.ZERO.clone();

                this.HandleMouse();
            },
            /*InputManager.Update end.*/

            /*InputManager.HandleMouse start.*/
            HandleMouse: function () {
if ( TRACE ) { TRACE( "InputManager#HandleMouse", this ); }


                // Luna maps mobile touch to the primary mouse button.
                var position = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.mousePressed = false;
                    this.dragging = false;
                    this.CurrentInteractable = null;
                    if (this.IsOverInputControl(position)) {
                        return;
                    }

                    this.mousePressed = true;
                    this.startPosition = position.$clone();
                    this.previousMousePosition = position.$clone();
                }

                if (!this.mousePressed) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButton(0) || UnityEngine.Input.GetMouseButtonUp(0)) {
                    if (!this.dragging && this.startPosition.$clone().sub( position ).length() > this.dragThreshold) {
                        this.dragging = true;
                        this.CurrentInteractable = null;
                    }

                    // The threshold only distinguishes taps; camera movement starts immediately.
                    this.LookDelta = (position.$clone().sub( this.previousMousePosition )).scale( this.touchSensitivity );

                    this.previousMousePosition = position.$clone();
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    var shouldInteract = !this.dragging;
                    this.ResetPointer();
                    if (shouldInteract && !this.IsOverInputControl(position)) {
                        this.InteractAt(position);
                    }
                } else if (!UnityEngine.Input.GetMouseButton(0)) {
                    this.ResetPointer();
                }
            },
            /*InputManager.HandleMouse end.*/

            /*InputManager.IsOverInputControl start.*/
            IsOverInputControl: function (position) {
if ( TRACE ) { TRACE( "InputManager#IsOverInputControl", this ); }

                var $t;
                var eventSystem = UnityEngine.EventSystems.EventSystem.current;
                if (UnityEngine.MonoBehaviour.op_Equality(eventSystem, null)) {
                    return false;
                }

                if (this.pointerData == null || UnityEngine.MonoBehaviour.op_Inequality(this.pointerEventSystem, eventSystem)) {
                    this.pointerEventSystem = eventSystem;
                    this.pointerData = new UnityEngine.EventSystems.PointerEventData(eventSystem);
                }

                this.pointerData.Reset();
                this.pointerData.position = position.$clone();
                this.uiHits.clear();
                eventSystem.RaycastAll(this.pointerData, this.uiHits);
                $t = Bridge.getEnumerator(this.uiHits);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current.$clone();
                        if (!(Bridge.is(hit.module, UnityEngine.UI.GraphicRaycaster))) {
                            continue;
                        }
                        var hitObject = hit.gameObject;
                        if (UnityEngine.GameObject.op_Inequality(UnityEngine.EventSystems.ExecuteEvents.GetEventHandler(UnityEngine.EventSystems.IPointerDownHandler, hitObject), null) || UnityEngine.GameObject.op_Inequality(UnityEngine.EventSystems.ExecuteEvents.GetEventHandler(UnityEngine.EventSystems.IPointerClickHandler, hitObject), null) || UnityEngine.GameObject.op_Inequality(UnityEngine.EventSystems.ExecuteEvents.GetEventHandler(UnityEngine.EventSystems.IDragHandler, hitObject), null) || UnityEngine.MonoBehaviour.op_Inequality(hitObject.GetComponentInParent(SelectPanel), null)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return false;
            },
            /*InputManager.IsOverInputControl end.*/

            /*InputManager.InteractAt start.*/
            InteractAt: function (position) {
if ( TRACE ) { TRACE( "InputManager#InteractAt", this ); }

                this.RaycastInteractable(position);
                var interactable = this.CurrentInteractable;
                this.CurrentInteractable = null;
                if (interactable != null) {
                    interactable.IInteractable$Interact();
                }
            },
            /*InputManager.InteractAt end.*/

            /*InputManager.ResetPointer start.*/
            ResetPointer: function () {
if ( TRACE ) { TRACE( "InputManager#ResetPointer", this ); }

                this.mousePressed = false;
                this.cameraFinger = -1;
                this.dragging = false;
                this.CurrentInteractable = null;
            },
            /*InputManager.ResetPointer end.*/

            /*InputManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "InputManager#OnDisable", this ); }

                this.ResetPointer();
                this.LookDelta = pc.Vec2.ZERO.clone();
            },
            /*InputManager.OnDisable end.*/

            /*InputManager.OnApplicationFocus start.*/
            OnApplicationFocus: function (hasFocus) {
if ( TRACE ) { TRACE( "InputManager#OnApplicationFocus", this ); }

                if (hasFocus) {
                    return;
                }
                this.ResetPointer();
                this.LookDelta = pc.Vec2.ZERO.clone();
            },
            /*InputManager.OnApplicationFocus end.*/

            /*InputManager.HandleTouch start.*/
            HandleTouch: function () {
if ( TRACE ) { TRACE( "InputManager#HandleTouch", this ); }

                var $t;
                $t = Bridge.getEnumerator(UnityEngine.Input.touches);
                try {
                    while ($t.moveNext()) {
                        var touch = $t.Current.$clone();
                        switch (touch.phase) {
                            case UnityEngine.TouchPhase.Began: 
                                if (this.cameraFinger !== -1 || this.IsOverInputControl(touch.position)) {
                                    continue;
                                }
                                this.startPosition = touch.position.$clone();
                                this.dragging = false;
                                this.CurrentInteractable = null;
                                this.cameraFinger = touch.fingerId;
                                break;
                            case UnityEngine.TouchPhase.Moved: 
                                if (touch.fingerId !== this.cameraFinger) {
                                    continue;
                                }
                                if (!this.dragging) {
                                    var distance = this.startPosition.$clone().sub( touch.position ).length();

                                    if (distance > this.dragThreshold) {
                                        this.dragging = true;
                                    }
                                }
                                this.LookDelta = touch.deltaPosition.$clone().scale( this.touchSensitivity );
                                break;
                            case UnityEngine.TouchPhase.Ended: 
                                if (touch.fingerId !== this.cameraFinger) {
                                    continue;
                                }
                                var shouldInteract = !this.dragging && this.startPosition.$clone().sub( touch.position ).length() <= this.dragThreshold;
                                this.ResetPointer();
                                if (shouldInteract && !this.IsOverInputControl(touch.position)) {
                                    this.InteractAt(touch.position);
                                }
                                break;
                            case UnityEngine.TouchPhase.Canceled: 
                                if (touch.fingerId === this.cameraFinger) {
                                    this.ResetPointer();
                                }
                                break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*InputManager.HandleTouch end.*/

            /*InputManager.RaycastInteractable start.*/
            RaycastInteractable: function (screenPosition) {
if ( TRACE ) { TRACE( "InputManager#RaycastInteractable", this ); }

                this.CurrentInteractable = null;

                var ray = this.worldCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                var hit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$1(ray, hit, 100.0, UnityEngine.LayerMask.op_Implicit(this.interactLayer.$clone()))) {
                    if (hit.v.distance > 25.0) {
                        GameController.Ins.Far();
                        return;
                    }
                    this.CurrentInteractable = hit.v.collider.GetComponent(IInteractable);
                }
            },
            /*InputManager.RaycastInteractable end.*/


        }
    });
    /*InputManager end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler,UnityEngine.EventSystems.IEndDragHandler],
        fields: {
            background: null,
            joy: null,
            deadZone: 0,
            Direction: null,
            isPressed: false,
            activePointerId: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp",
            "OnEndDrag", "UnityEngine$EventSystems$IEndDragHandler$OnEndDrag"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.Direction = new UnityEngine.Vector2();
                this.deadZone = 0.15;
            }
        },
        methods: {
            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                if (this.isPressed) {
                    return;
                }
                this.isPressed = true;
                this.activePointerId = eventData.pointerId;
                this.OnDrag(eventData);

            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                if (!this.isPressed || eventData.pointerId !== this.activePointerId) {
                    return;
                }
                var position = { v : new UnityEngine.Vector2() };

                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.background, eventData.position, eventData.pressEventCamera, position);

                var radius = this.background.sizeDelta.x * 0.5;

                position.v = position.v.$clone().scale( 1.0 / ( radius ) );

                this.Direction = pc.Vec2.lengthClamp( position.v, 1.0 );

                var magnitude = this.Direction.length();

                if (magnitude < this.deadZone) {
                    this.Direction = pc.Vec2.ZERO.clone();
                } else {
                    this.Direction = this.Direction.clone().normalize().$clone().scale( ((magnitude - this.deadZone) / (1.0 - this.deadZone)) );
                }

                this.joy.anchoredPosition = this.Direction.$clone().scale( radius );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                if (this.isPressed && eventData.pointerId === this.activePointerId) {
                    this.ResetJoystick();
                }
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.OnEndDrag start.*/
            OnEndDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnEndDrag", this ); }

                if (this.isPressed && eventData.pointerId === this.activePointerId) {
                    this.ResetJoystick();
                }
            },
            /*Joystick.OnEndDrag end.*/

            /*Joystick.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Joystick#LateUpdate", this ); }

                if (!this.isPressed) {
                    return;
                }

                // Recover even if the UI module misses the pointer-up event.
                if (UnityEngine.Input.GetMouseButtonUp(0) || !UnityEngine.Input.GetMouseButton(0)) {
                    this.ResetJoystick();
                }
            },
            /*Joystick.LateUpdate end.*/

            /*Joystick.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Joystick#OnDisable", this ); }

                this.ResetJoystick();
            },
            /*Joystick.OnDisable end.*/

            /*Joystick.OnApplicationFocus start.*/
            OnApplicationFocus: function (hasFocus) {
if ( TRACE ) { TRACE( "Joystick#OnApplicationFocus", this ); }

                if (!hasFocus) {
                    this.ResetJoystick();
                }
            },
            /*Joystick.OnApplicationFocus end.*/

            /*Joystick.OnApplicationPause start.*/
            OnApplicationPause: function (isPaused) {
if ( TRACE ) { TRACE( "Joystick#OnApplicationPause", this ); }

                if (isPaused) {
                    this.ResetJoystick();
                }
            },
            /*Joystick.OnApplicationPause end.*/

            /*Joystick.ResetJoystick start.*/
            ResetJoystick: function () {
if ( TRACE ) { TRACE( "Joystick#ResetJoystick", this ); }

                this.isPressed = false;
                this.activePointerId = -1;
                this.Direction = pc.Vec2.ZERO.clone();
                if (UnityEngine.Component.op_Inequality(this.joy, null)) {
                    this.joy.anchoredPosition = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.ResetJoystick end.*/


        }
    });
    /*Joystick end.*/

    /*JumpButton start.*/
    Bridge.define("JumpButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            button: null,
            Jump: false
        },
        methods: {
            /*JumpButton.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "JumpButton#Awake", this ); }

                this.button.onClick.AddListener(Bridge.fn.cacheBind(this, this.StartJump));
            },
            /*JumpButton.Awake end.*/

            /*JumpButton.StartJump start.*/
            StartJump: function () {
if ( TRACE ) { TRACE( "JumpButton#StartJump", this ); }

                this.Jump = true;
            },
            /*JumpButton.StartJump end.*/

            /*JumpButton.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "JumpButton#LateUpdate", this ); }

                this.Jump = false;
            },
            /*JumpButton.LateUpdate end.*/


        }
    });
    /*JumpButton end.*/

    /*Ladder start.*/
    /**
     * Climbable ladder. Put this on a trigger volume that covers the ladder.
     Bottom/Top are the climber's feet positions at each end (on the walkable side).
     Push the joystick toward the ladder to climb up, away from it to climb down.
     *
     * @public
     * @class Ladder
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Ladder", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bottom: null,
            top: null,
            intoDirection: null
        },
        props: {
            Bottom: {
                get: function () {
if ( TRACE ) { TRACE( "Ladder#Bottom#get", this ); }

                    return this.bottom.position.$clone();
                }
            },
            Top: {
                get: function () {
if ( TRACE ) { TRACE( "Ladder#Top#get", this ); }

                    return this.top.position.$clone();
                }
            },
            Length: {
                get: function () {
if ( TRACE ) { TRACE( "Ladder#Length#get", this ); }

                    return UnityEngine.Mathf.Max(0.01, pc.Vec3.distance( this.Bottom, this.Top ));
                }
            },
            Up: {
                get: function () {
if ( TRACE ) { TRACE( "Ladder#Up#get", this ); }

                    return (this.Top.$clone().sub( this.Bottom )).scale( 1.0 / ( this.Length ) );
                }
            },
            IntoDirection: {
                get: function () {
if ( TRACE ) { TRACE( "Ladder#IntoDirection#get", this ); }

                    var d = this.intoDirection.lengthSq() > 0.001 ? this.intoDirection.$clone() : this.Top.$clone().sub( this.Bottom );
                    d.y = 0.0;
                    return d.lengthSq() > 0.0001 ? d.clone().normalize().$clone() : new pc.Vec3( 0, 0, 1 );
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ladder#init", this ); }

                this.intoDirection = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*Ladder.GetT start.*/
            /**
             * 0 at the bottom, 1 at the top (can go outside that range).
             *
             * @instance
             * @public
             * @this Ladder
             * @memberof Ladder
             * @param   {UnityEngine.Vector3}    position
             * @return  {number}
             */
            GetT: function (position) {
if ( TRACE ) { TRACE( "Ladder#GetT", this ); }

                return position.$clone().sub( this.Bottom ).dot( this.Up ) / this.Length;
            },
            /*Ladder.GetT end.*/

            /*Ladder.PointAt start.*/
            PointAt: function (t) {
if ( TRACE ) { TRACE( "Ladder#PointAt", this ); }

                return new pc.Vec3().lerp( this.Bottom, this.Top, Math.max(0, Math.min(1, t)) );
            },
            /*Ladder.PointAt end.*/

            /*Ladder.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Ladder#Reset", this ); }

                this.GetComponent(UnityEngine.Collider).isTrigger = true;
            },
            /*Ladder.Reset end.*/

            /*Ladder.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Ladder#OnTriggerEnter", this ); }

                var motor = other.GetComponentInParent(CharacterMotor);
                if (UnityEngine.MonoBehaviour.op_Inequality(motor, null)) {
                    motor.SetLadder(this);
                }
            },
            /*Ladder.OnTriggerEnter end.*/

            /*Ladder.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "Ladder#OnTriggerStay", this ); }

                var motor = other.GetComponentInParent(CharacterMotor);
                if (UnityEngine.MonoBehaviour.op_Inequality(motor, null)) {
                    motor.SetLadder(this);
                }
            },
            /*Ladder.OnTriggerStay end.*/

            /*Ladder.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "Ladder#OnTriggerExit", this ); }

                var motor = other.GetComponentInParent(CharacterMotor);
                if (UnityEngine.MonoBehaviour.op_Inequality(motor, null)) {
                    motor.ClearLadder(this);
                }
            },
            /*Ladder.OnTriggerExit end.*/


        }
    });
    /*Ladder end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            LimitTimePlay: false,
            TimePlay: 0,
            MonsterIndex: 0,
            monsterSelector: null,
            MonsterIndex2: 0,
            monsterSelector2: null,
            images: null,
            CTA: null,
            clickOverlay: null,
            ended: false
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                LunaController.Instance = this;
                this.ApplyMonster();
                this.CTA.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                if (UnityEngine.MonoBehaviour.op_Inequality(this.clickOverlay, null)) {
                    this.clickOverlay.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                    this.clickOverlay.gameObject.SetActive(false);
                }
            },
            /*LunaController.Awake end.*/

            /*LunaController.ApplyMonster start.*/
            ApplyMonster: function () {
if ( TRACE ) { TRACE( "LunaController#ApplyMonster", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.monsterSelector, null)) {
                    this.monsterSelector.MonsterIndex = this.MonsterIndex;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.monsterSelector2, null)) {
                    this.monsterSelector2.MonsterIndex = this.MonsterIndex2;
                }
            },
            /*LunaController.ApplyMonster end.*/

            /*LunaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LunaController#Start", this ); }

                if (this.LimitTimePlay) {
                    this.StartCoroutine$1(this.EndGameAfterTimeLimit());
                }
            },
            /*LunaController.Start end.*/

            /*LunaController.ClickCTA start.*/
            ClickCTA: function () {
if ( TRACE ) { TRACE( "LunaController#ClickCTA", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*LunaController.ClickCTA end.*/

            /*LunaController.ShowClickOverlay start.*/
            ShowClickOverlay: function () {
if ( TRACE ) { TRACE( "LunaController#ShowClickOverlay", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.clickOverlay, null)) {
                    this.clickOverlay = this.CreateClickOverlay();
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.clickOverlay, null)) {
                    return;
                }
                this.clickOverlay.transform.SetAsLastSibling();
                this.clickOverlay.gameObject.SetActive(true);
            },
            /*LunaController.ShowClickOverlay end.*/

            /*LunaController.CreateClickOverlay start.*/
            CreateClickOverlay: function () {
if ( TRACE ) { TRACE( "LunaController#CreateClickOverlay", this ); }

                var canvas = UnityEngine.MonoBehaviour.op_Inequality(this.CTA, null) ? this.CTA.GetComponentInParent(UnityEngine.Canvas) : null;
                if (UnityEngine.Component.op_Equality(canvas, null)) {
                    return null;
                }
                canvas = canvas.rootCanvas;
                var go = new UnityEngine.GameObject.$ctor4("ClickToStoreOverlay", [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image, UnityEngine.UI.Button]);
                go.layer = canvas.gameObject.layer;
                var rt = go.GetComponent(UnityEngine.RectTransform);
                rt.SetParent(canvas.transform, false);
                rt.anchorMin = pc.Vec2.ZERO.clone();
                rt.anchorMax = pc.Vec2.ONE.clone();
                rt.offsetMin = pc.Vec2.ZERO.clone();
                rt.offsetMax = pc.Vec2.ZERO.clone();
                var image = go.GetComponent(UnityEngine.UI.Image);
                image.color = new pc.Color( 1.0, 1.0, 1.0, 0.0 );
                image.raycastTarget = true;
                var button = go.GetComponent(UnityEngine.UI.Button);
                button.transition = UnityEngine.UI.Selectable.Transition.None;
                button.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                return button;
            },
            /*LunaController.CreateClickOverlay end.*/

            /*LunaController.EndGame start.*/
            EndGame: function (failPopup) {
if ( TRACE ) { TRACE( "LunaController#EndGame", this ); }

                if (this.ended) {
                    return;
                }
                this.ended = true;
                this.StopAllCoroutines();
                Luna.Unity.LifeCycle.GameEnded();
                if (UnityEngine.GameObject.op_Inequality(failPopup, null)) {
                    var button = failPopup.GetComponent(UnityEngine.UI.Button);
                    if (UnityEngine.MonoBehaviour.op_Equality(button, null)) {
                        button = failPopup.AddComponent(UnityEngine.UI.Button);
                    }
                    button.transition = UnityEngine.UI.Selectable.Transition.None;
                    button.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                }

                this.ShowClickOverlay();
            },
            /*LunaController.EndGame end.*/

            /*LunaController.EndUnlock start.*/
            EndUnlock: function (unlockCta, autoInstallDelay) {
if ( TRACE ) { TRACE( "LunaController#EndUnlock", this ); }

                if (this.ended) {
                    return;
                }
                this.ended = true;
                this.StopAllCoroutines();
                Luna.Unity.LifeCycle.GameEnded();
                if (UnityEngine.MonoBehaviour.op_Inequality(unlockCta, null)) {
                    unlockCta.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                }
                this.ShowClickOverlay();
            },
            /*LunaController.EndUnlock end.*/

            /*LunaController.EndGameAfterTimeLimit start.*/
            EndGameAfterTimeLimit: function () {
if ( TRACE ) { TRACE( "LunaController#EndGameAfterTimeLimit", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.TimePlay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.CTA.gameObject.activeSelf || this.ended) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    return false;
                                }
                                case 3: {
                                    this.ShowEndCard();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LunaController.EndGameAfterTimeLimit end.*/

            /*LunaController.EndCard start.*/
            EndCard: function () {
if ( TRACE ) { TRACE( "LunaController#EndCard", this ); }

                if (this.CTA.gameObject.activeSelf) {
                    return;
                }
                this.ShowEndCard();
            },
            /*LunaController.EndCard end.*/

            /*LunaController.ShowEndCard start.*/
            ShowEndCard: function () {
if ( TRACE ) { TRACE( "LunaController#ShowEndCard", this ); }

                this.ended = true;
                this.StopAllCoroutines();
                Luna.Unity.LifeCycle.GameEnded();
                this.CTA.gameObject.SetActive(true);
                var obj = this.CTA.transform.GetChild(0).gameObject;
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(obj.transform, new pc.Vec3( 1.2, 1.2, 1.2 ), 0.6), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo);
                var line = obj.transform.GetChild(0).GetComponent(UnityEngine.RectTransform);
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(line, 520, 0.8), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Restart);
                this.ShowClickOverlay();
            },
            /*LunaController.ShowEndCard end.*/

            /*LunaController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "LunaController#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(LunaController.Instance, this)) {
                    LunaController.Instance = null;
                }
            },
            /*LunaController.OnDestroy end.*/


        }
    });
    /*LunaController end.*/

    /*MonsterSelector start.*/
    /**
     * Picks which monster (morph) sits at the end of the course.
     Set the index from LunaController (Monster field) or here: the 3D model on the horse,
     the HUD icon/name and the unlock card icon all switch to that monster.
     *
     * @public
     * @class MonsterSelector
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MonsterSelector", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MaxIndex: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MonsterSelector#init", this ); }

                    this.MaxIndex = 7;
                }
            }
        },
        fields: {
            monsterIndex: 0,
            monsters: null,
            hudIcon: null,
            hudName: null,
            unlockIcon: null,
            driveHud: false
        },
        props: {
            MonsterIndex: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterSelector#MonsterIndex#get", this ); }

                    return this.monsterIndex;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "MonsterSelector#MonsterIndex#set", this ); }

                    this.monsterIndex = value;
                    this.Apply();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MonsterSelector#init", this ); }

                this.monsters = System.Array.init(8, null, MonsterSelector.MonsterEntry);
                this.driveHud = true;
            }
        },
        methods: {
            /*MonsterSelector.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MonsterSelector#Awake", this ); }

                this.Apply();
            },
            /*MonsterSelector.Awake end.*/

            /*MonsterSelector.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "MonsterSelector#Apply", this ); }

                if (this.monsters == null || this.monsters.length === 0) {
                    return;
                }
                var index = Math.max(0, Math.min(this.monsterIndex, ((this.monsters.length - 1) | 0)));

                for (var i = 0; i < this.monsters.length; i = (i + 1) | 0) {
                    var entry = this.monsters[i];
                    if (entry == null || UnityEngine.GameObject.op_Equality(entry.model, null)) {
                        continue;
                    }
                    var on = i === index;
                    if (entry.model.activeSelf !== on) {
                        entry.model.SetActive(on);
                    }
                }

                if (this.driveHud) {
                    this.ApplyHud();
                }
            },
            /*MonsterSelector.Apply end.*/

            /*MonsterSelector.ApplyHud start.*/
            ApplyHud: function () {
if ( TRACE ) { TRACE( "MonsterSelector#ApplyHud", this ); }

                if (this.monsters == null || this.monsters.length === 0) {
                    return;
                }
                var current = this.monsters[Math.max(0, Math.min(this.monsterIndex, ((this.monsters.length - 1) | 0)))];
                if (current == null) {
                    return;
                }
                if (current.icon != null) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.hudIcon, null)) {
                        this.hudIcon.sprite = current.icon;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.unlockIcon, null)) {
                        this.unlockIcon.sprite = current.icon;
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.hudName, null) && !System.String.isNullOrEmpty(current.displayName)) {
                    this.hudName.text = current.displayName;
                }
            },
            /*MonsterSelector.ApplyHud end.*/


        }
    });
    /*MonsterSelector end.*/

    /*MonsterSelector+MonsterEntry start.*/
    Bridge.define("MonsterSelector.MonsterEntry", {
        $kind: 1002,
        fields: {
            displayName: null,
            model: null,
            icon: null
        }
    });
    /*MonsterSelector+MonsterEntry end.*/

    /*Playable.ResponsiveCanvasScaler start.*/
    Bridge.define("Playable.ResponsiveCanvasScaler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _referenceResolution: null,
            _portraitMatch: 0,
            _landscapeMatch: 0,
            _squareMatch: 0,
            _portraitAspectThreshold: 0,
            _landscapeAspectThreshold: 0,
            _aspectEpsilon: 0,
            _canvasScaler: null,
            _lastAspectRatio: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#init", this ); }

                this._referenceResolution = new UnityEngine.Vector2();
                this._referenceResolution = new pc.Vec2( 1080.0, 1920.0 );
                this._portraitMatch = 1.0;
                this._landscapeMatch = 0.0;
                this._squareMatch = 0.5;
                this._portraitAspectThreshold = 0.7;
                this._landscapeAspectThreshold = 1.3;
                this._aspectEpsilon = 0.005;
                this._lastAspectRatio = -1.0;
            }
        },
        methods: {
            /*Playable.ResponsiveCanvasScaler.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#Awake", this ); }

                this._canvasScaler = this.GetComponent(UnityEngine.UI.CanvasScaler);
                this.ApplyScaleSettings();
            },
            /*Playable.ResponsiveCanvasScaler.Awake end.*/

            /*Playable.ResponsiveCanvasScaler.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#OnEnable", this ); }

                this.ApplyScaleSettings();
            },
            /*Playable.ResponsiveCanvasScaler.OnEnable end.*/

            /*Playable.ResponsiveCanvasScaler.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#Update", this ); }

                if (UnityEngine.Screen.height <= 0) {
                    return;
                }

                var aspectRatio = UnityEngine.Screen.width / UnityEngine.Screen.height;

                // Mỗi lần gán property của CanvasScaler là canvas bị đánh dấu dirty và rebuild lại
                // toàn bộ. Trên trình duyệt mobile, thanh địa chỉ ẩn/hiện khi chạm làm Screen.height
                // đổi liên tục -> nếu áp dụng lại mỗi lần thì UI giật/nhảy.
                if (Math.abs(aspectRatio - this._lastAspectRatio) < this._aspectEpsilon) {
                    return;
                }

                this.ApplyScaleSettings();
            },
            /*Playable.ResponsiveCanvasScaler.Update end.*/

            /*Playable.ResponsiveCanvasScaler.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#OnValidate", this ); }

                this._canvasScaler = this.GetComponent(UnityEngine.UI.CanvasScaler);
                this._lastAspectRatio = -1.0;
                this.ApplyScaleSettings();
            },
            /*Playable.ResponsiveCanvasScaler.OnValidate end.*/

            /*Playable.ResponsiveCanvasScaler.ApplyScaleSettings start.*/
            ApplyScaleSettings: function () {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#ApplyScaleSettings", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._canvasScaler, null) || UnityEngine.Screen.height <= 0) {
                    return;
                }

                var aspectRatio = UnityEngine.Screen.width / UnityEngine.Screen.height;

                if (this._canvasScaler.uiScaleMode !== UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize) {
                    this._canvasScaler.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                }

                if (!pc.Vec2.equals( this._canvasScaler.referenceResolution, this._referenceResolution )) {
                    this._canvasScaler.referenceResolution = this._referenceResolution.$clone();
                }

                if (this._canvasScaler.screenMatchMode !== UnityEngine.UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight) {
                    this._canvasScaler.screenMatchMode = UnityEngine.UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
                }

                var match = this.GetMatchValue(aspectRatio);

                if (!UnityEngine.Mathf.Approximately(this._canvasScaler.matchWidthOrHeight, match)) {
                    this._canvasScaler.matchWidthOrHeight = match;
                }

                this._lastAspectRatio = aspectRatio;
            },
            /*Playable.ResponsiveCanvasScaler.ApplyScaleSettings end.*/

            /*Playable.ResponsiveCanvasScaler.GetMatchValue start.*/
            /**
             * Nội suy liên tục giữa 3 mốc portrait / square / landscape.
             Bản cũ nhảy thẳng 1 -&gt; 0.5 -&gt; 0 khi vượt ngưỡng, nên chỉ cần màn hình đổi
             vài pixel quanh ngưỡng là toàn bộ UI đổi tỉ lệ đột ngột.
             *
             * @instance
             * @private
             * @this Playable.ResponsiveCanvasScaler
             * @memberof Playable.ResponsiveCanvasScaler
             * @param   {number}    aspectRatio
             * @return  {number}
             */
            GetMatchValue: function (aspectRatio) {
if ( TRACE ) { TRACE( "Playable.ResponsiveCanvasScaler#GetMatchValue", this ); }

                if (aspectRatio <= this._portraitAspectThreshold) {
                    return this._portraitMatch;
                }

                if (aspectRatio >= this._landscapeAspectThreshold) {
                    return this._landscapeMatch;
                }

                var middleAspect = (this._portraitAspectThreshold + this._landscapeAspectThreshold) * 0.5;

                if (aspectRatio <= middleAspect) {
                    var t = pc.math.inverseLerp(this._portraitAspectThreshold, middleAspect, aspectRatio);
                    return pc.math.lerp(this._portraitMatch, this._squareMatch, t);
                }

                var landscapeT = pc.math.inverseLerp(middleAspect, this._landscapeAspectThreshold, aspectRatio);
                return pc.math.lerp(this._squareMatch, this._landscapeMatch, landscapeT);
            },
            /*Playable.ResponsiveCanvasScaler.GetMatchValue end.*/


        }
    });
    /*Playable.ResponsiveCanvasScaler end.*/

    /*SelectPanel start.*/
    Bridge.define("SelectPanel", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _title: null,
            _buttonsSelectMap: null
        },
        methods: {
            /*SelectPanel.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SelectPanel#Start", this ); }

                var $t;
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._title, 1.2, 1.0), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo);
                $t = Bridge.getEnumerator(this._buttonsSelectMap);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        button.onClick.AddListener(Bridge.fn.bind(this, function () {
                            this.gameObject.SetActive(false);
                        }));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SelectPanel.Start end.*/

            /*SelectPanel.OpenCTA start.*/
            OpenCTA: function () {
if ( TRACE ) { TRACE( "SelectPanel#OpenCTA", this ); }

                this.gameObject.SetActive(false);
                LunaController.Instance.EndCard();
            },
            /*SelectPanel.OpenCTA end.*/


        }
    });
    /*SelectPanel end.*/

    /*TutController start.*/
    Bridge.define("TutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutScene: null,
            startTut: null,
            playTut: null,
            farTut: null,
            failTut: null
        },
        methods: {
            /*TutController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TutController#Awake", this ); }

                this.startTut.OnPointerDownEvent = Bridge.fn.combine(this.startTut.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.ShowPlayTut));
            },
            /*TutController.Awake end.*/

            /*TutController.ShowPlayTut start.*/
            ShowPlayTut: function () {
if ( TRACE ) { TRACE( "TutController#ShowPlayTut", this ); }

                this.playTut.gameObject.SetActive(true);
            },
            /*TutController.ShowPlayTut end.*/

            /*TutController.StopTut start.*/
            StopTut: function () {
if ( TRACE ) { TRACE( "TutController#StopTut", this ); }

                this.tutScene.gameObject.SetActive(false);
            },
            /*TutController.StopTut end.*/

            /*TutController.ShowFarTut start.*/
            ShowFarTut: function () {
if ( TRACE ) { TRACE( "TutController#ShowFarTut", this ); }

                this.farTut.DORestart();
            },
            /*TutController.ShowFarTut end.*/

            /*TutController.ShowFailTut start.*/
            ShowFailTut: function () {
if ( TRACE ) { TRACE( "TutController#ShowFailTut", this ); }

                this.failTut.DORestart();
            },
            /*TutController.ShowFailTut end.*/


        }
    });
    /*TutController end.*/

    /*Box start.*/
    Bridge.define("Box", {
        inherits: [UnityEngine.MonoBehaviour,IInteractable],
        fields: {
            lifeTime: 0,
            effect: null,
            avatar: null,
            interactSound: null,
            openSound: null,
            isInteract: false
        },
        alias: ["Interact", "IInteractable$Interact"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Box#init", this ); }

                this.lifeTime = 2;
            }
        },
        methods: {
            /*Box.Interact start.*/
            Interact: function () {
if ( TRACE ) { TRACE( "Box#Interact", this ); }

                if (this.isInteract) {
                    return;
                }
                this.isInteract = true;
                AudioController.Ins.PlaySFX(this.interactSound);

                this.effect.Play();
                this.StartCoroutine$1(this.DestroyBox());
            },
            /*Box.Interact end.*/

            /*Box.UnBox start.*/
            UnBox: function () {
if ( TRACE ) { TRACE( "Box#UnBox", this ); }

                this.avatar.SetActive(false);
                AudioController.Ins.PlaySFX(this.openSound);
            },
            /*Box.UnBox end.*/

            /*Box.DestroyBox start.*/
            DestroyBox: function () {
if ( TRACE ) { TRACE( "Box#DestroyBox", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.lifeTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.UnBox();
                                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Box.DestroyBox end.*/


        }
    });
    /*Box end.*/

    /*JumpHint start.*/
    Bridge.define("JumpHint", {
        inherits: [Hint],
        fields: {
            JumpForce: null,
            Rigidbody: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "JumpHint#init", this ); }

                this.JumpForce = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*JumpHint.ShowHint start.*/
            ShowHint: function () {
if ( TRACE ) { TRACE( "JumpHint#ShowHint", this ); }

                // Rigidbody.AddForce(JumpForce, ForceMode.Acceleration);
            },
            /*JumpHint.ShowHint end.*/


        }
    });
    /*JumpHint end.*/

    /*RunEffect start.*/
    Bridge.define("RunEffect", {
        inherits: [CollectAction],
        fields: {
            controller: null,
            targetPos: null,
            look: null,
            moveSpeed: 0,
            rotateSpeed: 0,
            stopDistance: 0,
            rb: null,
            target: null,
            isMoving: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RunEffect#init", this ); }

                this.moveSpeed = 5.0;
                this.rotateSpeed = 10.0;
                this.stopDistance = 0.1;
            }
        },
        methods: {
            /*RunEffect.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RunEffect#Awake", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
            },
            /*RunEffect.Awake end.*/

            /*RunEffect.Collect start.*/
            Collect: function () {
if ( TRACE ) { TRACE( "RunEffect#Collect", this ); }

                this.look.CollectLook();
                this.target = this.targetPos;
                this.isMoving = true;
            },
            /*RunEffect.Collect end.*/

            /*RunEffect.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "RunEffect#Stop", this ); }

                this.isMoving = false;
                this.target = null;

                this.rb.linearVelocity = pc.Vec3.ZERO.clone();
            },
            /*RunEffect.Stop end.*/

            /*RunEffect.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "RunEffect#FixedUpdate", this ); }

                if (!this.isMoving || UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }

                var direction = this.target.position.$clone().sub( this.rb.position );
                direction.y = 0.0;

                var distance = direction.length();

                if (distance <= this.stopDistance) {
                    this.Stop();
                    return;
                }

                var move = direction.clone().normalize().clone().scale( this.moveSpeed * UnityEngine.Time.fixedDeltaTime );
                this.rb.MovePosition(this.rb.position.$clone().add( move ));

                var targetRotation = new pc.Quat().lookRotation( direction, pc.Vec3.UP );
                this.rb.MoveRotation(new pc.Quat().slerpUnclamped( this.rb.rotation, targetRotation, pc.math.clamp( this.rotateSpeed * UnityEngine.Time.fixedDeltaTime, 0, 1 ) ));
            },
            /*RunEffect.FixedUpdate end.*/


        }
    });
    /*RunEffect end.*/

    /*SoundHint start.*/
    Bridge.define("SoundHint", {
        inherits: [Hint],
        fields: {
            Sound: null,
            Source: null
        },
        methods: {
            /*SoundHint.ShowHint start.*/
            ShowHint: function () {
if ( TRACE ) { TRACE( "SoundHint#ShowHint", this ); }

                if (UnityEngine.Object.op_Implicit(this.Source)) {
                    this.Source.PlayOneShot(this.Sound);
                }
            },
            /*SoundHint.ShowHint end.*/


        }
    });
    /*SoundHint end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.EventSystems","UnityEngine.UI","System.Collections.Generic","TMPro","DG.Tweening","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Plugins.Options"];

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"velocity","t":4,"rt":$n[1].Vector3,"sn":"velocity"}]}; }, $n);
    /*CameraFollow end.*/

    /*CameraLook start.*/
    $m("CameraLook", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CollectLook","t":8,"sn":"CollectLook","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaltPitch","t":4,"rt":$n[0].Single,"sn":"defaltPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaltYaw","t":4,"rt":$n[0].Single,"sn":"defaltYaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"input","t":4,"rt":InputManager,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxPitch","t":4,"rt":$n[0].Single,"sn":"maxPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minPitch","t":4,"rt":$n[0].Single,"sn":"minPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pitch","t":4,"rt":$n[0].Single,"sn":"pitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pitchPivot","t":4,"rt":$n[1].Transform,"sn":"pitchPivot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"yaw","t":4,"rt":$n[0].Single,"sn":"yaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"yawPivot","t":4,"rt":$n[1].Transform,"sn":"yawPivot"}]}; }, $n);
    /*CameraLook end.*/

    /*CharacterAnimation start.*/
    $m("CharacterAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ConfigureAnimator","t":8,"sn":"ConfigureAnimator","rt":$n[0].Void},{"a":2,"n":"SetAvatar","t":8,"pi":[{"n":"avatar","pt":$n[1].Animator,"ps":0}],"sn":"SetAvatar","rt":$n[0].Void,"p":[$n[1].Animator]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateAnimation","t":8,"sn":"UpdateAnimation","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"displayedSpeed","t":4,"rt":$n[0].Single,"sn":"displayedSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundedGraceTime","t":4,"rt":$n[0].Single,"sn":"groundedGraceTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"groundedTimer","t":4,"rt":$n[0].Single,"sn":"groundedTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"motor","t":4,"rt":CharacterMotor,"sn":"motor"},{"at":[new UnityEngine.HeaderAttribute("Smoothing"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedChangeRate","t":4,"rt":$n[0].Single,"sn":"speedChangeRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CharacterAnimation end.*/

    /*CharacterCollect start.*/
    $m("CharacterCollect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CollectTarget","t":8,"pi":[{"n":"t","pt":Gift,"ps":0},{"n":"a","pt":$n[1].Animator,"ps":1}],"sn":"CollectTarget","rt":$n[2].IEnumerator,"p":[Gift,$n[1].Animator]},{"a":1,"n":"RunToTarget","t":8,"sn":"RunToTarget","rt":$n[0].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"t","pt":Gift,"ps":0},{"n":"a","pt":$n[1].Animator,"ps":1}],"sn":"SetTarget","rt":$n[0].Void,"p":[Gift,$n[1].Animator]},{"a":2,"n":"Teleport","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Teleport","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"avatar","t":4,"rt":CharacterAnimation,"sn":"avatar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"motor","t":4,"rt":CharacterMotor,"sn":"motor"},{"a":1,"n":"target","t":4,"rt":Gift,"sn":"target"}]}; }, $n);
    /*CharacterCollect end.*/

    /*CharacterMotor start.*/
    $m("CharacterMotor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyGravity","t":8,"sn":"ApplyGravity","rt":$n[0].Void},{"a":1,"n":"ApplyJump","t":8,"sn":"ApplyJump","rt":$n[0].Void},{"a":1,"n":"ApplyMotor","t":8,"sn":"ApplyMotor","rt":$n[0].Void},{"a":2,"n":"AutoRun","t":8,"pi":[{"n":"isAuto","pt":$n[0].Boolean,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1}],"sn":"AutoRun","rt":$n[0].Void,"p":[$n[0].Boolean,$n[1].Vector3]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CanStepUp","t":8,"pi":[{"n":"motion","pt":$n[1].Vector3,"ps":0},{"n":"stepHeight","out":true,"pt":$n[0].Single,"ps":1}],"sn":"CanStepUp","rt":$n[0].Boolean,"p":[$n[1].Vector3,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ClearLadder","t":8,"pi":[{"n":"value","pt":Ladder,"ps":0}],"sn":"ClearLadder","rt":$n[0].Void,"p":[Ladder]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"GetCapsuleRadius","t":8,"sn":"GetCapsuleRadius","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"IsOnStepSurface","t":8,"sn":"IsOnStepSurface","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsSupportedForStep","t":8,"pi":[{"n":"bounds","pt":$n[1].Bounds,"ps":0}],"sn":"IsSupportedForStep","rt":$n[0].Boolean,"p":[$n[1].Bounds],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnCollisionStay","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionStay","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":2,"n":"ResetFall","t":8,"sn":"ResetFall","rt":$n[0].Void},{"a":1,"n":"RotateTowardsLocalY","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"worldPosition","pt":$n[1].Vector3,"ps":1}],"sn":"RotateTowardsLocalY","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Vector3]},{"a":2,"n":"SetLadder","t":8,"pi":[{"n":"value","pt":Ladder,"ps":0}],"sn":"SetLadder","rt":$n[0].Void,"p":[Ladder]},{"a":2,"n":"Teleport","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Teleport","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"TrackFall","t":8,"pi":[{"n":"supported","pt":$n[0].Boolean,"ps":0}],"sn":"TrackFall","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateArrow","t":8,"sn":"UpdateArrow","rt":$n[0].Void},{"a":1,"n":"UpdateLadder","t":8,"sn":"UpdateLadder","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Body","t":16,"rt":$n[1].Rigidbody,"g":{"a":2,"n":"get_Body","t":8,"rt":$n[1].Rigidbody,"fg":"Body"},"fn":"Body"},{"a":2,"n":"ClimbFacing","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_ClimbFacing","t":8,"rt":$n[1].Vector3,"fg":"ClimbFacing"},"fn":"ClimbFacing"},{"a":2,"n":"FallDistance","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_FallDistance","t":8,"rt":$n[0].Single,"fg":"FallDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FallDistance"},{"a":2,"n":"IsClimbing","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClimbing","t":8,"rt":$n[0].Boolean,"fg":"IsClimbing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsClimbing"},{"a":2,"n":"IsGrounded","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGrounded","t":8,"rt":$n[0].Boolean,"fg":"IsGrounded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsGrounded"},{"a":2,"n":"IsMoving","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMoving","t":8,"rt":$n[0].Boolean,"fg":"IsMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMoving"},{"a":2,"n":"MaxMoveSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MaxMoveSpeed","t":8,"rt":$n[0].Single,"fg":"MaxMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"MaxMoveSpeed"},{"a":2,"n":"MoveDirection","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_MoveDirection","t":8,"rt":$n[1].Vector3,"fg":"MoveDirection"},"s":{"a":1,"n":"set_MoveDirection","t":8,"p":[$n[1].Vector3],"rt":$n[0].Void,"fs":"MoveDirection"},"fn":"MoveDirection"},{"a":2,"n":"Speed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Speed","t":8,"rt":$n[0].Single,"fg":"Speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Speed"},{"a":2,"n":"VerticalVelocity","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_VerticalVelocity","t":8,"rt":$n[0].Single,"fg":"VerticalVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"VerticalVelocity"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arrow","t":4,"rt":$n[1].Transform,"sn":"_arrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoRun","t":4,"rt":$n[0].Boolean,"sn":"autoRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cameraYawTransform","t":4,"rt":$n[1].Transform,"sn":"cameraYawTransform"},{"a":1,"n":"capsuleCollider","t":4,"rt":$n[1].CapsuleCollider,"sn":"capsuleCollider"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"characterInput","t":4,"rt":CharacterInput,"sn":"characterInput"},{"at":[new UnityEngine.HeaderAttribute("Ladder"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"climbSpeed","t":4,"rt":$n[0].Single,"sn":"climbSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"climbing","t":4,"rt":$n[0].Boolean,"sn":"climbing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"controller","t":4,"rt":$n[1].Rigidbody,"sn":"controller"},{"at":[new UnityEngine.HeaderAttribute("Stairs"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enableStepClimb","t":4,"rt":$n[0].Boolean,"sn":"enableStepClimb","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fallStartY","t":4,"rt":$n[0].Single,"sn":"fallStartY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gravity","t":4,"rt":$n[0].Single,"sn":"gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Gravity"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundChecker","t":4,"rt":GroundChecker,"sn":"groundChecker"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpHeight","t":4,"rt":$n[0].Single,"sn":"jumpHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"jumpRequested","t":4,"rt":$n[0].Boolean,"sn":"jumpRequested","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ladder","t":4,"rt":Ladder,"sn":"ladder"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ladderSnapStrength","t":4,"rt":$n[0].Single,"sn":"ladderSnapStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastClimbDirection","t":4,"rt":$n[0].Single,"sn":"lastClimbDirection","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxStepHeight","t":4,"rt":$n[0].Single,"sn":"maxStepHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"minimumStepFacing","t":4,"rt":$n[0].Single,"sn":"minimumStepFacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepCheckDistance","t":4,"rt":$n[0].Single,"sn":"stepCheckDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepLayers","t":4,"rt":$n[1].LayerMask,"sn":"stepLayers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepUpAcceleration","t":4,"rt":$n[0].Single,"sn":"stepUpAcceleration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepUpSpeed","t":4,"rt":$n[0].Single,"sn":"stepUpSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"verticalVelocity","t":4,"rt":$n[0].Single,"sn":"verticalVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"wasSupported","t":4,"rt":$n[0].Boolean,"sn":"wasSupported","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<MoveDirection>k__BackingField","t":4,"rt":$n[1].Vector3,"sn":"MoveDirection"}]}; }, $n);
    /*CharacterMotor end.*/

    /*CharacterRotation start.*/
    $m("CharacterRotation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Rotate","t":8,"sn":"Rotate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"motor","t":4,"rt":CharacterMotor,"sn":"motor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CharacterRotation end.*/

    /*FootstepAudio start.*/
    $m("FootstepAudio", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.AudioSource)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"footstepClip","t":4,"rt":$n[1].AudioClip,"sn":"footstepClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"motor","t":4,"rt":CharacterMotor,"sn":"motor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pitchAtFullSpeed","t":4,"rt":$n[0].Single,"sn":"pitchAtFullSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"source","t":4,"rt":$n[1].AudioSource,"sn":"source"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"volume","t":4,"rt":$n[0].Single,"sn":"volume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FootstepAudio end.*/

    /*GroundChecker start.*/
    $m("GroundChecker", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckGround","t":8,"sn":"CheckGround","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"GroundLayer","t":16,"rt":$n[1].LayerMask,"g":{"a":2,"n":"get_GroundLayer","t":8,"rt":$n[1].LayerMask,"fg":"GroundLayer"},"fn":"GroundLayer"},{"a":2,"n":"IsGrounded","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGrounded","t":8,"rt":$n[0].Boolean,"fg":"IsGrounded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsGrounded","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsGrounded"},"fn":"IsGrounded"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"checkRadius","t":4,"rt":$n[0].Single,"sn":"checkRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundLayer","t":4,"rt":$n[1].LayerMask,"sn":"groundLayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundPoint","t":4,"rt":$n[1].Transform,"sn":"groundPoint"},{"a":1,"backing":true,"n":"<IsGrounded>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsGrounded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GroundChecker end.*/

    /*CharacterInput start.*/
    $m("CharacterInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckJumpInput","t":8,"sn":"CheckJumpInput","rt":$n[0].Void},{"a":1,"n":"CheckMoveInput","t":8,"sn":"CheckMoveInput","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Jump","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Jump","t":8,"rt":$n[0].Boolean,"fg":"Jump","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Jump","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Jump"},"fn":"Jump"},{"a":2,"n":"Move","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Move","t":8,"rt":$n[1].Vector2,"fg":"Move"},"s":{"a":1,"n":"set_Move","t":8,"p":[$n[1].Vector2],"rt":$n[0].Void,"fs":"Move"},"fn":"Move"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystick","t":4,"rt":Joystick,"sn":"joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpButton","t":4,"rt":JumpButton,"sn":"jumpButton"},{"a":1,"backing":true,"n":"<Jump>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Jump","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Move>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"Move"}]}; }, $n);
    /*CharacterInput end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnApplicationFocus","t":8,"pi":[{"n":"hasFocus","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationFocus","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnApplicationPause","t":8,"pi":[{"n":"isPaused","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationPause","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnEndDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnEndDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ResetJoystick","t":8,"sn":"ResetJoystick","rt":$n[0].Void},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"s":{"a":1,"n":"set_Direction","t":8,"p":[$n[1].Vector2],"rt":$n[0].Void,"fs":"Direction"},"fn":"Direction"},{"a":1,"n":"activePointerId","t":4,"rt":$n[0].Int32,"sn":"activePointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isPressed","t":4,"rt":$n[0].Boolean,"sn":"isPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joy","t":4,"rt":$n[1].RectTransform,"sn":"joy"},{"a":1,"backing":true,"n":"<Direction>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"Direction"}]}; }, $n);
    /*Joystick end.*/

    /*JumpButton start.*/
    $m("JumpButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"StartJump","t":8,"sn":"StartJump","rt":$n[0].Void},{"a":2,"n":"Jump","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Jump","t":8,"rt":$n[0].Boolean,"fg":"Jump","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Jump","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Jump"},"fn":"Jump"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"button","t":4,"rt":$n[4].Button,"sn":"button"},{"a":1,"backing":true,"n":"<Jump>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Jump","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*JumpButton end.*/

    /*SelectPanel start.*/
    $m("SelectPanel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OpenCTA","t":8,"sn":"OpenCTA","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buttonsSelectMap","t":4,"rt":$n[5].List$1(UnityEngine.UI.Button),"sn":"_buttonsSelectMap"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_title","t":4,"rt":$n[1].Transform,"sn":"_title"}]}; }, $n);
    /*SelectPanel end.*/

    /*Box start.*/
    $m("Box", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DestroyBox","t":8,"sn":"DestroyBox","rt":$n[2].IEnumerator},{"a":2,"n":"Interact","t":8,"sn":"Interact","rt":$n[0].Void},{"a":1,"n":"UnBox","t":8,"sn":"UnBox","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"avatar","t":4,"rt":$n[1].GameObject,"sn":"avatar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"effect","t":4,"rt":$n[1].ParticleSystem,"sn":"effect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"interactSound","t":4,"rt":$n[1].AudioClip,"sn":"interactSound"},{"a":1,"n":"isInteract","t":4,"rt":$n[0].Boolean,"sn":"isInteract","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"openSound","t":4,"rt":$n[1].AudioClip,"sn":"openSound"}]}; }, $n);
    /*Box end.*/

    /*CollectAction start.*/
    $m("CollectAction", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":2,"n":"Collect","t":8,"sn":"Collect","rt":$n[0].Void}]}; }, $n);
    /*CollectAction end.*/

    /*RunEffect start.*/
    $m("RunEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":2,"n":"Collect","t":8,"sn":"Collect","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"controller","t":4,"rt":$n[1].Rigidbody,"sn":"controller"},{"a":1,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"look","t":4,"rt":CameraLook,"sn":"look"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotateSpeed","t":4,"rt":$n[0].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stopDistance","t":4,"rt":$n[0].Single,"sn":"stopDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetPos","t":4,"rt":$n[1].Transform,"sn":"targetPos"}]}; }, $n);
    /*RunEffect end.*/

    /*Elevator start.*/
    $m("Elevator", function () { return {"nested":[Elevator.State],"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rigidbody)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FindRider","t":8,"sn":"FindRider","rt":CharacterMotor},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"LateFixedTick","t":8,"sn":"LateFixedTick","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnCollisionStay","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionStay","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"Step","t":8,"pi":[{"n":"direction","pt":$n[0].Single,"ps":0},{"n":"rider","pt":CharacterMotor,"ps":1}],"sn":"Step","rt":$n[0].Void,"p":[$n[0].Single,CharacterMotor]},{"a":1,"n":"body","t":4,"rt":$n[1].Rigidbody,"sn":"body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottomPoint","t":4,"rt":$n[1].Transform,"sn":"bottomPoint"},{"a":1,"n":"contactRider","t":4,"rt":CharacterMotor,"sn":"contactRider"},{"a":1,"n":"platformCollider","t":4,"rt":$n[1].Collider,"sn":"platformCollider"},{"a":1,"n":"progress","t":4,"rt":$n[0].Single,"sn":"progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"returnDelay","t":4,"rt":$n[0].Single,"sn":"returnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startDelay","t":4,"rt":$n[0].Single,"sn":"startDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"state","t":4,"rt":Elevator.State,"sn":"state","box":function ($v) { return Bridge.box($v, Elevator.State, System.Enum.toStringFn(Elevator.State));}},{"a":1,"n":"stepsSinceContact","t":4,"rt":$n[0].Int32,"sn":"stepsSinceContact","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"topPoint","t":4,"rt":$n[1].Transform,"sn":"topPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"travelTime","t":4,"rt":$n[0].Single,"sn":"travelTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Elevator end.*/

    /*Elevator+State start.*/
    $m("Elevator.State", function () { return {"td":Elevator,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bottom","is":true,"t":4,"rt":Elevator.State,"sn":"Bottom","box":function ($v) { return Bridge.box($v, Elevator.State, System.Enum.toStringFn(Elevator.State));}},{"a":2,"n":"GoingDown","is":true,"t":4,"rt":Elevator.State,"sn":"GoingDown","box":function ($v) { return Bridge.box($v, Elevator.State, System.Enum.toStringFn(Elevator.State));}},{"a":2,"n":"GoingUp","is":true,"t":4,"rt":Elevator.State,"sn":"GoingUp","box":function ($v) { return Bridge.box($v, Elevator.State, System.Enum.toStringFn(Elevator.State));}},{"a":2,"n":"Top","is":true,"t":4,"rt":Elevator.State,"sn":"Top","box":function ($v) { return Bridge.box($v, Elevator.State, System.Enum.toStringFn(Elevator.State));}}]}; }, $n);
    /*Elevator+State end.*/

    /*Gift start.*/
    $m("Gift", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"RemoveGift","t":8,"sn":"RemoveGift","rt":$n[0].Void},{"a":2,"n":"ShowHints","t":8,"sn":"ShowHints","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Arrow","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_Arrow","t":8,"rt":$n[1].Transform,"fg":"Arrow"},"fn":"Arrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrow","t":4,"rt":$n[1].Transform,"sn":"arrow"},{"a":2,"n":"collectDone","t":4,"rt":$n[0].Boolean,"sn":"collectDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collectEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"collectEffect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collectSound","t":4,"rt":$n[1].AudioClip,"sn":"collectSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hints","t":4,"rt":$n[5].List$1(Hint),"sn":"hints"}]}; }, $n);
    /*Gift end.*/

    /*Hint start.*/
    $m("Hint", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":2,"n":"ShowHint","t":8,"sn":"ShowHint","rt":$n[0].Void}]}; }, $n);
    /*Hint end.*/

    /*JumpHint start.*/
    $m("JumpHint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"ShowHint","t":8,"sn":"ShowHint","rt":$n[0].Void},{"a":2,"n":"JumpForce","t":4,"rt":$n[1].Vector3,"sn":"JumpForce"},{"a":2,"n":"Rigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"Rigidbody"}]}; }, $n);
    /*JumpHint end.*/

    /*SoundHint start.*/
    $m("SoundHint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"ShowHint","t":8,"sn":"ShowHint","rt":$n[0].Void},{"a":2,"n":"Sound","t":4,"rt":$n[1].AudioClip,"sn":"Sound"},{"a":2,"n":"Source","t":4,"rt":$n[1].AudioSource,"sn":"Source"}]}; }, $n);
    /*SoundHint end.*/

    /*IInteractable start.*/
    $m("IInteractable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Interact","t":8,"sn":"IInteractable$Interact","rt":$n[0].Void}]}; }, $n);
    /*IInteractable end.*/

    /*Ladder start.*/
    $m("Ladder", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Collider)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetT","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0}],"sn":"GetT","rt":$n[0].Single,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"PointAt","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"PointAt","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"Bottom","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_Bottom","t":8,"rt":$n[1].Vector3,"fg":"Bottom"},"fn":"Bottom"},{"a":2,"n":"IntoDirection","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_IntoDirection","t":8,"rt":$n[1].Vector3,"fg":"IntoDirection"},"fn":"IntoDirection"},{"a":2,"n":"Length","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Length","t":8,"rt":$n[0].Single,"fg":"Length","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Length"},{"a":2,"n":"Top","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_Top","t":8,"rt":$n[1].Vector3,"fg":"Top"},"fn":"Top"},{"a":2,"n":"Up","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_Up","t":8,"rt":$n[1].Vector3,"fg":"Up"},"fn":"Up"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottom","t":4,"rt":$n[1].Transform,"sn":"bottom"},{"at":[new UnityEngine.TooltipAttribute("Horizontal direction the climber faces / pushes to climb up. Zero = from bottom toward top."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"intoDirection","t":4,"rt":$n[1].Vector3,"sn":"intoDirection"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"top","t":4,"rt":$n[1].Transform,"sn":"top"}]}; }, $n);
    /*Ladder end.*/

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BootstrapPool","t":8,"sn":"BootstrapPool","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewSource","t":8,"sn":"CreateNewSource","rt":$n[1].AudioSource},{"a":1,"n":"GetFreeSource","t":8,"sn":"GetFreeSource","rt":$n[1].AudioSource},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"s","pt":$n[1].AudioSource,"ps":0}],"sn":"ReturnToPool","rt":$n[2].IEnumerator,"p":[$n[1].AudioSource]},{"a":2,"n":"Ins","is":true,"t":16,"rt":AudioController,"g":{"a":2,"n":"get_Ins","t":8,"rt":AudioController,"fg":"Ins","is":true},"s":{"a":1,"n":"set_Ins","t":8,"p":[AudioController],"rt":$n[0].Void,"fs":"Ins","is":true},"fn":"Ins"},{"a":1,"n":"SFXPool","t":4,"rt":$n[5].Queue$1(UnityEngine.AudioSource),"sn":"SFXPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolParent","t":4,"rt":$n[1].Transform,"sn":"poolParent"},{"at":[new UnityEngine.TooltipAttribute("Loudness multiplier for one-shot SFX (1 = original)."),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 3.0)],"a":1,"n":"sfxVolumeScale","t":4,"rt":$n[0].Single,"sn":"sfxVolumeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startSize","t":4,"rt":$n[0].Int32,"sn":"startSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Ins>k__BackingField","is":true,"t":4,"rt":AudioController,"sn":"Ins"}]}; }, $n);
    /*AudioController end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"nested":[GameController.GameState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckLanding","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"CheckLanding","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":2,"n":"CollectGift","t":8,"pi":[{"n":"gift","pt":Gift,"ps":0}],"sn":"CollectGift","rt":$n[0].Void,"p":[Gift]},{"a":1,"n":"CollectIntermediateGift","t":8,"pi":[{"n":"gift","pt":Gift,"ps":0}],"sn":"CollectIntermediateGift","rt":$n[0].Void,"p":[Gift]},{"a":2,"n":"Fail","t":8,"sn":"Fail","rt":$n[0].Void},{"a":2,"n":"Far","t":8,"sn":"Far","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"PlaySfx","is":true,"t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySfx","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"PopCollectText","t":8,"sn":"PopCollectText","rt":$n[0].Void},{"a":2,"n":"ReportLanding","t":8,"pi":[{"n":"fallDistance","pt":$n[0].Single,"ps":0}],"sn":"ReportLanding","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"SetGiftArrow","is":true,"t":8,"pi":[{"n":"gift","pt":Gift,"ps":0},{"n":"visible","pt":$n[0].Boolean,"ps":1}],"sn":"SetGiftArrow","rt":$n[0].Void,"p":[Gift,$n[0].Boolean]},{"a":1,"n":"ShowComplete","t":8,"sn":"ShowComplete","rt":$n[2].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartFailButtonEffect","t":8,"sn":"StartFailButtonEffect","rt":$n[0].Void},{"a":1,"n":"StopFailButtonEffect","t":8,"sn":"StopFailButtonEffect","rt":$n[0].Void},{"a":1,"n":"StopPlayer","t":8,"sn":"StopPlayer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateProgress","t":8,"sn":"UpdateProgress","rt":$n[0].Void},{"a":1,"n":"WaitForCollect","t":8,"pi":[{"n":"gift","pt":Gift,"ps":0}],"sn":"WaitForCollect","rt":$n[2].IEnumerator,"p":[Gift]},{"a":2,"n":"FirstGift","t":16,"rt":Gift,"g":{"a":2,"n":"get_FirstGift","t":8,"rt":Gift,"fg":"FirstGift"},"fn":"FirstGift"},{"a":2,"n":"HasFailed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasFailed","t":8,"rt":$n[0].Boolean,"fg":"HasFailed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasFailed"},{"a":2,"n":"Ins","is":true,"t":16,"rt":GameController,"g":{"a":2,"n":"get_Ins","t":8,"rt":GameController,"fg":"Ins","is":true},"s":{"a":1,"n":"set_Ins","t":8,"p":[GameController],"rt":$n[0].Void,"fs":"Ins","is":true},"fn":"Ins"},{"a":2,"n":"IsPlaying","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPlaying","t":8,"rt":$n[0].Boolean,"fg":"IsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPlaying"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cta","t":4,"rt":$n[1].GameObject,"sn":"_cta"},{"at":[new UnityEngine.TooltipAttribute("Landings this far below Fail Height (falling off the map) always fail."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alwaysFailDepth","t":4,"rt":$n[0].Single,"sn":"alwaysFailDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collect","t":4,"rt":CharacterCollect,"sn":"collect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collectText","t":4,"rt":$n[6].TMP_Text,"sn":"collectText"},{"a":1,"n":"collectTween","t":4,"rt":$n[7].Tween,"sn":"collectTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentProgress","t":4,"rt":$n[0].Int32,"sn":"currentProgress","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"failButton","t":4,"rt":$n[1].RectTransform,"sn":"failButton"},{"a":1,"n":"failButtonScale","t":4,"rt":$n[1].Vector3,"sn":"failButtonScale"},{"a":1,"n":"failButtonTween","t":4,"rt":$n[7].Tween,"sn":"failButtonTween"},{"at":[new UnityEngine.HeaderAttribute("Fall Rule"),new UnityEngine.TooltipAttribute("If on, the player fails when landing after falling farther than Max Safe Fall (ladders and lifts never count). Replaces the Fail Height rule."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failByFallDistance","t":4,"rt":$n[0].Boolean,"sn":"failByFallDistance","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Only landing contacts below this world height count as falling to the ground."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failHeight","t":4,"rt":$n[0].Single,"sn":"failHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("If on, touching the ground only fails after the player has climbed onto an obstacle (start on the ground)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failOnlyAfterClimb","t":4,"rt":$n[0].Boolean,"sn":"failOnlyAfterClimb","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"failShine","t":4,"rt":$n[1].RectTransform,"sn":"failShine"},{"a":1,"n":"failShineStart","t":4,"rt":$n[1].Vector2,"sn":"failShineStart"},{"a":1,"n":"failShineTween","t":4,"rt":$n[7].Tween,"sn":"failShineTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failUI","t":4,"rt":$n[1].GameObject,"sn":"failUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"giftSpawn","t":4,"rt":$n[1].Transform,"sn":"giftSpawn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gifts","t":4,"rt":$n[5].List$1(Gift),"sn":"gifts"},{"a":1,"n":"hasClimbed","t":4,"rt":$n[0].Boolean,"sn":"hasClimbed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hideCollectTween","t":4,"rt":$n[7].Tween,"sn":"hideCollectTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseSound","t":4,"rt":$n[1].AudioClip,"sn":"loseSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxSafeFall","t":4,"rt":$n[0].Single,"sn":"maxSafeFall","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerMotor","t":4,"rt":CharacterMotor,"sn":"playerMotor"},{"at":[new UnityEngine.HeaderAttribute("Bridge Level"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSpawn","t":4,"rt":$n[1].Transform,"sn":"playerSpawn"},{"at":[new UnityEngine.HeaderAttribute("Progress Display"),new UnityEngine.TooltipAttribute("Added to the shown progress (e.g. 23 shows 23/40 then 24/40)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressOffset","t":4,"rt":$n[0].Int32,"sn":"progressOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressText","t":4,"rt":$n[6].TMP_Text,"sn":"progressText"},{"at":[new UnityEngine.TooltipAttribute("Total shown after the slash. 0 uses the level target."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressTotal","t":4,"rt":$n[0].Int32,"sn":"progressTotal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Multiple Gifts"),new UnityEngine.TooltipAttribute("If on, every gift in the list must be collected in order. The arrow guides to the next one after each pickup."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sequentialGifts","t":4,"rt":$n[0].Boolean,"sn":"sequentialGifts","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"state","t":4,"rt":GameController.GameState,"sn":"state","box":function ($v) { return Bridge.box($v, GameController.GameState, System.Enum.toStringFn(GameController.GameState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[0].Int32,"sn":"target","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeToShowComplete","t":4,"rt":$n[0].Single,"sn":"timeToShowComplete","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tut","t":4,"rt":TutController,"sn":"tut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unlockAutoInstallDelay","t":4,"rt":$n[0].Single,"sn":"unlockAutoInstallDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unlockCTA","t":4,"rt":$n[4].Button,"sn":"unlockCTA"},{"at":[new UnityEngine.HeaderAttribute("Unlock End Card (optional)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unlockPanel","t":4,"rt":$n[1].GameObject,"sn":"unlockPanel"},{"at":[new UnityEngine.HeaderAttribute("Win Effect"),new UnityEngine.TooltipAttribute("Optional particle burst (e.g. confetti) played when the last morph is collected."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"winEffect"},{"at":[new UnityEngine.HeaderAttribute("SFX"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winSound","t":4,"rt":$n[1].AudioClip,"sn":"winSound"},{"a":1,"backing":true,"n":"<Ins>k__BackingField","is":true,"t":4,"rt":GameController,"sn":"Ins"}]}; }, $n);
    /*GameController end.*/

    /*GameController+GameState start.*/
    $m("GameController.GameState", function () { return {"td":GameController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Complete","is":true,"t":4,"rt":GameController.GameState,"sn":"Complete","box":function ($v) { return Bridge.box($v, GameController.GameState, System.Enum.toStringFn(GameController.GameState));}},{"a":2,"n":"Completing","is":true,"t":4,"rt":GameController.GameState,"sn":"Completing","box":function ($v) { return Bridge.box($v, GameController.GameState, System.Enum.toStringFn(GameController.GameState));}},{"a":2,"n":"Failed","is":true,"t":4,"rt":GameController.GameState,"sn":"Failed","box":function ($v) { return Bridge.box($v, GameController.GameState, System.Enum.toStringFn(GameController.GameState));}},{"a":2,"n":"Playing","is":true,"t":4,"rt":GameController.GameState,"sn":"Playing","box":function ($v) { return Bridge.box($v, GameController.GameState, System.Enum.toStringFn(GameController.GameState));}}]}; }, $n);
    /*GameController+GameState end.*/

    /*HideOnPointer start.*/
    $m("HideOnPointer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerDownEvent","t":4,"rt":Function,"sn":"OnPointerDownEvent"}]}; }, $n);
    /*HideOnPointer end.*/

    /*InputManager start.*/
    $m("InputManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleMouse","t":8,"sn":"HandleMouse","rt":$n[0].Void},{"a":1,"n":"HandleTouch","t":8,"sn":"HandleTouch","rt":$n[0].Void},{"a":1,"n":"InteractAt","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"InteractAt","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"IsOverInputControl","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"IsOverInputControl","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnApplicationFocus","t":8,"pi":[{"n":"hasFocus","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationFocus","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"RaycastInteractable","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"RaycastInteractable","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"ResetPointer","t":8,"sn":"ResetPointer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"CurrentInteractable","t":16,"rt":IInteractable,"g":{"a":2,"n":"get_CurrentInteractable","t":8,"rt":IInteractable,"fg":"CurrentInteractable"},"s":{"a":1,"n":"set_CurrentInteractable","t":8,"p":[IInteractable],"rt":$n[0].Void,"fs":"CurrentInteractable"},"fn":"CurrentInteractable"},{"a":2,"n":"Instance","is":true,"t":16,"rt":InputManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":InputManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[InputManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"LookDelta","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_LookDelta","t":8,"rt":$n[1].Vector2,"fg":"LookDelta"},"s":{"a":1,"n":"set_LookDelta","t":8,"p":[$n[1].Vector2],"rt":$n[0].Void,"fs":"LookDelta"},"fn":"LookDelta"},{"a":1,"n":"cameraFinger","t":4,"rt":$n[0].Int32,"sn":"cameraFinger","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragThreshold","t":4,"rt":$n[0].Single,"sn":"dragThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragging","t":4,"rt":$n[0].Boolean,"sn":"dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"interactLayer","t":4,"rt":$n[1].LayerMask,"sn":"interactLayer"},{"a":1,"n":"mousePressed","t":4,"rt":$n[0].Boolean,"sn":"mousePressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mouseSensitivity","t":4,"rt":$n[0].Single,"sn":"mouseSensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pointerData","t":4,"rt":$n[3].PointerEventData,"sn":"pointerData"},{"a":1,"n":"pointerEventSystem","t":4,"rt":$n[3].EventSystem,"sn":"pointerEventSystem"},{"a":1,"n":"previousMousePosition","t":4,"rt":$n[1].Vector2,"sn":"previousMousePosition"},{"a":1,"n":"startPosition","t":4,"rt":$n[1].Vector2,"sn":"startPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"touchSensitivity","t":4,"rt":$n[0].Single,"sn":"touchSensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"uiHits","t":4,"rt":$n[5].List$1(UnityEngine.EventSystems.RaycastResult),"sn":"uiHits","ro":true},{"at":[new UnityEngine.HeaderAttribute("Camera"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"worldCamera","t":4,"rt":$n[1].Camera,"sn":"worldCamera"},{"a":1,"backing":true,"n":"<CurrentInteractable>k__BackingField","t":4,"rt":IInteractable,"sn":"CurrentInteractable"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":InputManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<LookDelta>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"LookDelta"}]}; }, $n);
    /*InputManager end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyMonster","t":8,"sn":"ApplyMonster","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[0].Void},{"a":1,"n":"CreateClickOverlay","t":8,"sn":"CreateClickOverlay","rt":$n[4].Button},{"a":2,"n":"EndCard","t":8,"sn":"EndCard","rt":$n[0].Void},{"a":2,"n":"EndGame","t":8,"pi":[{"n":"failPopup","pt":$n[1].GameObject,"ps":0}],"sn":"EndGame","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"EndGameAfterTimeLimit","t":8,"sn":"EndGameAfterTimeLimit","rt":$n[2].IEnumerator},{"a":2,"n":"EndUnlock","t":8,"pi":[{"n":"unlockCta","pt":$n[4].Button,"ps":0},{"n":"autoInstallDelay","pt":$n[0].Single,"ps":1}],"sn":"EndUnlock","rt":$n[0].Void,"p":[$n[4].Button,$n[0].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ShowClickOverlay","t":8,"sn":"ShowClickOverlay","rt":$n[0].Void},{"a":1,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[4].Button,"sn":"CTA"},{"a":2,"n":"Instance","is":true,"t":4,"rt":LunaController,"sn":"Instance"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"LimitTimePlay","t":4,"rt":$n[0].Boolean,"sn":"LimitTimePlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster (0-7)", -1, null, false, null),new UnityEngine.RangeAttribute(0.0, 7.0)],"a":2,"n":"MonsterIndex","t":4,"rt":$n[0].Int32,"sn":"MonsterIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster 2 (0-7)", -1, null, false, null),new UnityEngine.RangeAttribute(0.0, 7.0)],"a":2,"n":"MonsterIndex2","t":4,"rt":$n[0].Int32,"sn":"MonsterIndex2","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[0].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Transparent full-screen button shown on the end card / fail popup. Tapping anywhere opens the store. Never clicks by itself."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickOverlay","t":4,"rt":$n[4].Button,"sn":"clickOverlay"},{"a":1,"n":"ended","t":4,"rt":$n[0].Boolean,"sn":"ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"images","t":4,"rt":$n[5].List$1(UnityEngine.UI.Image),"sn":"images"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterSelector","t":4,"rt":MonsterSelector,"sn":"monsterSelector"},{"at":[new UnityEngine.TooltipAttribute("Optional: selector of the second morph (scenes with two morphs)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterSelector2","t":4,"rt":MonsterSelector,"sn":"monsterSelector2"}]}; }, $n);
    /*LunaController end.*/

    /*MonsterSelector start.*/
    $m("MonsterSelector", function () { return {"nested":[MonsterSelector.MonsterEntry],"att":1048577,"a":2,"at":[new UnityEngine.ExecuteAlwaysAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"sn":"Apply","rt":$n[0].Void},{"a":2,"n":"ApplyHud","t":8,"sn":"ApplyHud","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"MonsterIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MonsterIndex","t":8,"rt":$n[0].Int32,"fg":"MonsterIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_MonsterIndex","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"MonsterIndex"},"fn":"MonsterIndex"},{"a":2,"n":"MaxIndex","is":true,"t":4,"rt":$n[0].Int32,"sn":"MaxIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Off for a later gift: the HUD switches to it only when it becomes the current target."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"driveHud","t":4,"rt":$n[0].Boolean,"sn":"driveHud","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hudIcon","t":4,"rt":$n[4].Image,"sn":"hudIcon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hudName","t":4,"rt":$n[6].TMP_Text,"sn":"hudName"},{"at":[new UnityEngine.RangeAttribute(0.0, 7.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterIndex","t":4,"rt":$n[0].Int32,"sn":"monsterIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsters","t":4,"rt":System.Array.type(MonsterSelector.MonsterEntry),"sn":"monsters"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unlockIcon","t":4,"rt":$n[4].Image,"sn":"unlockIcon"}]}; }, $n);
    /*MonsterSelector end.*/

    /*MonsterSelector+MonsterEntry start.*/
    $m("MonsterSelector.MonsterEntry", function () { return {"td":MonsterSelector,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"displayName","t":4,"rt":$n[0].String,"sn":"displayName"},{"at":[new UnityEngine.TooltipAttribute("Icon sprite shown in the HUD and on the unlock card")],"a":2,"n":"icon","t":4,"rt":$n[1].Sprite,"sn":"icon"},{"at":[new UnityEngine.TooltipAttribute("3D model under the Morph gift")],"a":2,"n":"model","t":4,"rt":$n[1].GameObject,"sn":"model"}]}; }, $n);
    /*MonsterSelector+MonsterEntry end.*/

    /*TutController start.*/
    $m("TutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ShowFailTut","t":8,"sn":"ShowFailTut","rt":$n[0].Void},{"a":2,"n":"ShowFarTut","t":8,"sn":"ShowFarTut","rt":$n[0].Void},{"a":1,"n":"ShowPlayTut","t":8,"sn":"ShowPlayTut","rt":$n[0].Void},{"a":2,"n":"StopTut","t":8,"sn":"StopTut","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failTut","t":4,"rt":$n[7].DOTweenAnimation,"sn":"failTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"farTut","t":4,"rt":$n[7].DOTweenAnimation,"sn":"farTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playTut","t":4,"rt":$n[1].RectTransform,"sn":"playTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startTut","t":4,"rt":HideOnPointer,"sn":"startTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutScene","t":4,"rt":$n[1].RectTransform,"sn":"tutScene"}]}; }, $n);
    /*TutController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[7].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[7].Tweener,"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[7].Tweener,"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[7].Tweener,"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[4].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[7].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[7].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[7].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[7].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[7].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[7].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[7].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[7].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[7].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[7].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[7].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[7].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[7].DOTweenCYInstruction.WaitForCompletion,$n[7].DOTweenCYInstruction.WaitForRewind,$n[7].DOTweenCYInstruction.WaitForKill,$n[7].DOTweenCYInstruction.WaitForElapsedLoops,$n[7].DOTweenCYInstruction.WaitForPosition,$n[7].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[7].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[7].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[10].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[7].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[10].Path,$n[0].Single,$n[7].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[7].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[7].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[7].DOTweenAnimation.AnimationType,$n[7].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[7].Tween},{"a":2,"n":"CreateTween","t":8,"pi":[{"n":"regenerateIfExists","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"andPlay","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateTween","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"a":2,"n":"DOKillAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOKillById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[7].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[7].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[1].GameObject},{"a":1,"n":"GetTweenTarget","t":8,"sn":"GetTweenTarget","rt":$n[1].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[5].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":2,"n":"RecreateTween","t":8,"sn":"RecreateTween","rt":$n[0].Void},{"a":2,"n":"RecreateTweenAndPlay","t":8,"sn":"RecreateTweenAndPlay","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTween","t":8,"sn":"RewindThenRecreateTween","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTweenAndPlay","t":8,"sn":"RewindThenRecreateTweenAndPlay","rt":$n[0].Void},{"a":2,"n":"SetAnimationTarget","t":8,"pi":[{"n":"tweenTarget","pt":$n[1].Component,"ps":0},{"n":"useTweenTargetGameObjectForGroupOperations","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetAnimationTarget","rt":$n[0].Void,"p":[$n[1].Component,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[7].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenAutoGenerationCalled","t":4,"rt":$n[0].Boolean,"sn":"_tweenAutoGenerationCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoGenerate","t":4,"rt":$n[0].Boolean,"sn":"autoGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[7].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[1].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[1].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[1].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[1].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[1].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[7].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalBool1","t":4,"rt":$n[0].Boolean,"sn":"optionalBool1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[7].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[7].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalShakeRandomnessMode","t":4,"rt":$n[7].ShakeRandomnessMode,"sn":"optionalShakeRandomnessMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ShakeRandomnessMode, System.Enum.toStringFn(DG.Tweening.ShakeRandomnessMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[1].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[1].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[7].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[7].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[7].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[7].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[7].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[7].Tweener,"p":[$n[1].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[7].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*Playable.ResponsiveCanvasScaler start.*/
    $m("Playable.ResponsiveCanvasScaler", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.CanvasScaler)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyScaleSettings","t":8,"sn":"ApplyScaleSettings","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetMatchValue","t":8,"pi":[{"n":"aspectRatio","pt":$n[0].Single,"ps":0}],"sn":"GetMatchValue","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Stability"),new UnityEngine.TooltipAttribute("Ch\u1ec9 \u00e1p d\u1ee5ng l\u1ea1i khi t\u1ec9 l\u1ec7 m\u00e0n h\u00ecnh \u0111\u1ed5i h\u01a1n ng\u01b0\u1ee1ng n\u00e0y. Tr\u00e1nh rebuild canvas khi tr\u00ecnh duy\u1ec7t co gi\u00e3n v\u00e0i pixel"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_aspectEpsilon","t":4,"rt":$n[0].Single,"sn":"_aspectEpsilon","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_canvasScaler","t":4,"rt":$n[4].CanvasScaler,"sn":"_canvasScaler"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_landscapeAspectThreshold","t":4,"rt":$n[0].Single,"sn":"_landscapeAspectThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"_landscapeMatch","t":4,"rt":$n[0].Single,"sn":"_landscapeMatch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastAspectRatio","t":4,"rt":$n[0].Single,"sn":"_lastAspectRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Aspect Ratio Thresholds"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_portraitAspectThreshold","t":4,"rt":$n[0].Single,"sn":"_portraitAspectThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Match Settings"),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"_portraitMatch","t":4,"rt":$n[0].Single,"sn":"_portraitMatch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Reference Resolution"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_referenceResolution","t":4,"rt":$n[1].Vector2,"sn":"_referenceResolution"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"_squareMatch","t":4,"rt":$n[0].Single,"sn":"_squareMatch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.ResponsiveCanvasScaler end.*/

    }});
