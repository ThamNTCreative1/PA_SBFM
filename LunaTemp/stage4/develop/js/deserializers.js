var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.JointSpring' )
  var i3571 = data
  i3570.spring = i3571[0]
  i3570.damper = i3571[1]
  i3570.targetPosition = i3571[2]
  return i3570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.JointMotor' )
  var i3573 = data
  i3572.m_TargetVelocity = i3573[0]
  i3572.m_Force = i3573[1]
  i3572.m_FreeSpin = i3573[2]
  return i3572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.JointLimits' )
  var i3575 = data
  i3574.m_Min = i3575[0]
  i3574.m_Max = i3575[1]
  i3574.m_Bounciness = i3575[2]
  i3574.m_BounceMinVelocity = i3575[3]
  i3574.m_ContactDistance = i3575[4]
  i3574.minBounce = i3575[5]
  i3574.maxBounce = i3575[6]
  return i3574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.JointDrive' )
  var i3577 = data
  i3576.m_PositionSpring = i3577[0]
  i3576.m_PositionDamper = i3577[1]
  i3576.m_MaximumForce = i3577[2]
  i3576.m_UseAcceleration = i3577[3]
  return i3576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3579 = data
  i3578.m_Spring = i3579[0]
  i3578.m_Damper = i3579[1]
  return i3578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3581 = data
  i3580.m_Limit = i3581[0]
  i3580.m_Bounciness = i3581[1]
  i3580.m_ContactDistance = i3581[2]
  return i3580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3583 = data
  i3582.m_ExtremumSlip = i3583[0]
  i3582.m_ExtremumValue = i3583[1]
  i3582.m_AsymptoteSlip = i3583[2]
  i3582.m_AsymptoteValue = i3583[3]
  i3582.m_Stiffness = i3583[4]
  return i3582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3585 = data
  i3584.m_LowerAngle = i3585[0]
  i3584.m_UpperAngle = i3585[1]
  return i3584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3587 = data
  i3586.m_MotorSpeed = i3587[0]
  i3586.m_MaximumMotorTorque = i3587[1]
  return i3586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3589 = data
  i3588.m_DampingRatio = i3589[0]
  i3588.m_Frequency = i3589[1]
  i3588.m_Angle = i3589[2]
  return i3588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3591 = data
  i3590.m_LowerTranslation = i3591[0]
  i3590.m_UpperTranslation = i3591[1]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3593 = data
  i3592.name = i3593[0]
  i3592.width = i3593[1]
  i3592.height = i3593[2]
  i3592.mipmapCount = i3593[3]
  i3592.anisoLevel = i3593[4]
  i3592.filterMode = i3593[5]
  i3592.hdr = !!i3593[6]
  i3592.format = i3593[7]
  i3592.wrapMode = i3593[8]
  i3592.alphaIsTransparency = !!i3593[9]
  i3592.alphaSource = i3593[10]
  i3592.graphicsFormat = i3593[11]
  i3592.sRGBTexture = !!i3593[12]
  i3592.desiredColorSpace = i3593[13]
  i3592.wrapU = i3593[14]
  i3592.wrapV = i3593[15]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3594 = root || new pc.UnityMaterial()
  var i3595 = data
  i3594.name = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'shader')
  i3594.renderQueue = i3595[3]
  i3594.enableInstancing = !!i3595[4]
  var i3597 = i3595[5]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3597[i + 0]) );
  }
  i3594.floatParameters = i3596
  var i3599 = i3595[6]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3599[i + 0]) );
  }
  i3594.colorParameters = i3598
  var i3601 = i3595[7]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3601[i + 0]) );
  }
  i3594.vectorParameters = i3600
  var i3603 = i3595[8]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3603[i + 0]) );
  }
  i3594.textureParameters = i3602
  var i3605 = i3595[9]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3605[i + 0]) );
  }
  i3594.materialFlags = i3604
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3609 = data
  i3608.name = i3609[0]
  i3608.value = i3609[1]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3613 = data
  i3612.name = i3613[0]
  i3612.value = new pc.Color(i3613[1], i3613[2], i3613[3], i3613[4])
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3617 = data
  i3616.name = i3617[0]
  i3616.value = new pc.Vec4( i3617[1], i3617[2], i3617[3], i3617[4] )
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3621 = data
  i3620.name = i3621[0]
  request.r(i3621[1], i3621[2], 0, i3620, 'value')
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3625 = data
  i3624.name = i3625[0]
  i3624.enabled = !!i3625[1]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.halfPrecision = !!i3627[1]
  i3626.useSimplification = !!i3627[2]
  i3626.useUInt32IndexFormat = !!i3627[3]
  i3626.vertexCount = i3627[4]
  i3626.aabb = i3627[5]
  var i3629 = i3627[6]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( !!i3629[i + 0] );
  }
  i3626.streams = i3628
  i3626.vertices = i3627[7]
  var i3631 = i3627[8]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3631[i + 0]) );
  }
  i3626.subMeshes = i3630
  var i3633 = i3627[9]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 16) {
    i3632.push( new pc.Mat4().setData(i3633[i + 0], i3633[i + 1], i3633[i + 2], i3633[i + 3],  i3633[i + 4], i3633[i + 5], i3633[i + 6], i3633[i + 7],  i3633[i + 8], i3633[i + 9], i3633[i + 10], i3633[i + 11],  i3633[i + 12], i3633[i + 13], i3633[i + 14], i3633[i + 15]) );
  }
  i3626.bindposes = i3632
  var i3635 = i3627[10]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3635[i + 0]) );
  }
  i3626.blendShapes = i3634
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3641 = data
  i3640.triangles = i3641[0]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3647 = data
  i3646.name = i3647[0]
  var i3649 = i3647[1]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3649[i + 0]) );
  }
  i3646.frames = i3648
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3651 = data
  i3650.name = i3651[0]
  i3650.atlasId = i3651[1]
  i3650.mipmapCount = i3651[2]
  i3650.hdr = !!i3651[3]
  i3650.size = i3651[4]
  i3650.anisoLevel = i3651[5]
  i3650.filterMode = i3651[6]
  var i3653 = i3651[7]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 4) {
    i3652.push( UnityEngine.Rect.MinMaxRect(i3653[i + 0], i3653[i + 1], i3653[i + 2], i3653[i + 3]) );
  }
  i3650.rects = i3652
  i3650.wrapU = i3651[8]
  i3650.wrapV = i3651[9]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3657 = data
  i3656.name = i3657[0]
  i3656.index = i3657[1]
  i3656.startup = !!i3657[2]
  return i3656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3659 = data
  request.r(i3659[0], i3659[1], 0, i3658, 'm_FirstSelected')
  i3658.m_sendNavigationEvents = !!i3659[2]
  i3658.m_DragThreshold = i3659[3]
  return i3658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3661 = data
  i3660.m_HorizontalAxis = i3661[0]
  i3660.m_VerticalAxis = i3661[1]
  i3660.m_SubmitButton = i3661[2]
  i3660.m_CancelButton = i3661[3]
  i3660.m_InputActionsPerSecond = i3661[4]
  i3660.m_RepeatDelay = i3661[5]
  i3660.m_ForceModuleActive = !!i3661[6]
  i3660.m_SendPointerHoverToParent = !!i3661[7]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3663 = data
  i3662.name = i3663[0]
  i3662.tagId = i3663[1]
  i3662.enabled = !!i3663[2]
  i3662.isStatic = !!i3663[3]
  i3662.layer = i3663[4]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3665 = data
  i3664.pivot = new pc.Vec2( i3665[0], i3665[1] )
  i3664.anchorMin = new pc.Vec2( i3665[2], i3665[3] )
  i3664.anchorMax = new pc.Vec2( i3665[4], i3665[5] )
  i3664.sizeDelta = new pc.Vec2( i3665[6], i3665[7] )
  i3664.anchoredPosition3D = new pc.Vec3( i3665[8], i3665[9], i3665[10] )
  i3664.rotation = new pc.Quat(i3665[11], i3665[12], i3665[13], i3665[14])
  i3664.scale = new pc.Vec3( i3665[15], i3665[16], i3665[17] )
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3667 = data
  i3666.planeDistance = i3667[0]
  i3666.referencePixelsPerUnit = i3667[1]
  i3666.isFallbackOverlay = !!i3667[2]
  i3666.renderMode = i3667[3]
  i3666.renderOrder = i3667[4]
  i3666.sortingLayerName = i3667[5]
  i3666.sortingOrder = i3667[6]
  i3666.scaleFactor = i3667[7]
  request.r(i3667[8], i3667[9], 0, i3666, 'worldCamera')
  i3666.overrideSorting = !!i3667[10]
  i3666.pixelPerfect = !!i3667[11]
  i3666.targetDisplay = i3667[12]
  i3666.overridePixelPerfect = !!i3667[13]
  i3666.enabled = !!i3667[14]
  return i3666
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3669 = data
  i3668.m_UiScaleMode = i3669[0]
  i3668.m_ReferencePixelsPerUnit = i3669[1]
  i3668.m_ScaleFactor = i3669[2]
  i3668.m_ReferenceResolution = new pc.Vec2( i3669[3], i3669[4] )
  i3668.m_ScreenMatchMode = i3669[5]
  i3668.m_MatchWidthOrHeight = i3669[6]
  i3668.m_PhysicalUnit = i3669[7]
  i3668.m_FallbackScreenDPI = i3669[8]
  i3668.m_DefaultSpriteDPI = i3669[9]
  i3668.m_DynamicPixelsPerUnit = i3669[10]
  i3668.m_PresetInfoIsWorld = !!i3669[11]
  return i3668
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3671 = data
  i3670.m_IgnoreReversedGraphics = !!i3671[0]
  i3670.m_BlockingObjects = i3671[1]
  i3670.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3671[2] )
  return i3670
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i3672 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i3673 = data
  i3672._referenceResolution = new pc.Vec2( i3673[0], i3673[1] )
  i3672._portraitMatch = i3673[2]
  i3672._landscapeMatch = i3673[3]
  i3672._squareMatch = i3673[4]
  i3672._portraitAspectThreshold = i3673[5]
  i3672._landscapeAspectThreshold = i3673[6]
  i3672._aspectEpsilon = i3673[7]
  return i3672
}

Deserializers["Joystick"] = function (request, data, root) {
  var i3674 = root || request.c( 'Joystick' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'background')
  request.r(i3675[2], i3675[3], 0, i3674, 'joy')
  i3674.deadZone = i3675[4]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3677 = data
  i3676.cullTransparentMesh = !!i3677[0]
  return i3676
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3678 = root || request.c( 'UnityEngine.UI.Image' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'm_Sprite')
  i3678.m_Type = i3679[2]
  i3678.m_PreserveAspect = !!i3679[3]
  i3678.m_FillCenter = !!i3679[4]
  i3678.m_FillMethod = i3679[5]
  i3678.m_FillAmount = i3679[6]
  i3678.m_FillClockwise = !!i3679[7]
  i3678.m_FillOrigin = i3679[8]
  i3678.m_UseSpriteMesh = !!i3679[9]
  i3678.m_PixelsPerUnitMultiplier = i3679[10]
  request.r(i3679[11], i3679[12], 0, i3678, 'm_Material')
  i3678.m_Maskable = !!i3679[13]
  i3678.m_Color = new pc.Color(i3679[14], i3679[15], i3679[16], i3679[17])
  i3678.m_RaycastTarget = !!i3679[18]
  i3678.m_RaycastPadding = new pc.Vec4( i3679[19], i3679[20], i3679[21], i3679[22] )
  return i3678
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.UI.Button' )
  var i3681 = data
  i3680.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3681[0], i3680.m_OnClick)
  i3680.m_Navigation = request.d('UnityEngine.UI.Navigation', i3681[1], i3680.m_Navigation)
  i3680.m_Transition = i3681[2]
  i3680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3681[3], i3680.m_Colors)
  i3680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3681[4], i3680.m_SpriteState)
  i3680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3681[5], i3680.m_AnimationTriggers)
  i3680.m_Interactable = !!i3681[6]
  request.r(i3681[7], i3681[8], 0, i3680, 'm_TargetGraphic')
  return i3680
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3683 = data
  i3682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3683[0], i3682.m_PersistentCalls)
  return i3682
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3685 = data
  var i3687 = i3685[0]
  var i3686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.add(request.d('UnityEngine.Events.PersistentCall', i3687[i + 0]));
  }
  i3684.m_Calls = i3686
  return i3684
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'm_Target')
  i3690.m_TargetAssemblyTypeName = i3691[2]
  i3690.m_MethodName = i3691[3]
  i3690.m_Mode = i3691[4]
  i3690.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3691[5], i3690.m_Arguments)
  i3690.m_CallState = i3691[6]
  return i3690
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3693 = data
  i3692.m_Mode = i3693[0]
  i3692.m_WrapAround = !!i3693[1]
  request.r(i3693[2], i3693[3], 0, i3692, 'm_SelectOnUp')
  request.r(i3693[4], i3693[5], 0, i3692, 'm_SelectOnDown')
  request.r(i3693[6], i3693[7], 0, i3692, 'm_SelectOnLeft')
  request.r(i3693[8], i3693[9], 0, i3692, 'm_SelectOnRight')
  return i3692
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3695 = data
  i3694.m_NormalColor = new pc.Color(i3695[0], i3695[1], i3695[2], i3695[3])
  i3694.m_HighlightedColor = new pc.Color(i3695[4], i3695[5], i3695[6], i3695[7])
  i3694.m_PressedColor = new pc.Color(i3695[8], i3695[9], i3695[10], i3695[11])
  i3694.m_SelectedColor = new pc.Color(i3695[12], i3695[13], i3695[14], i3695[15])
  i3694.m_DisabledColor = new pc.Color(i3695[16], i3695[17], i3695[18], i3695[19])
  i3694.m_ColorMultiplier = i3695[20]
  i3694.m_FadeDuration = i3695[21]
  return i3694
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3697 = data
  request.r(i3697[0], i3697[1], 0, i3696, 'm_HighlightedSprite')
  request.r(i3697[2], i3697[3], 0, i3696, 'm_PressedSprite')
  request.r(i3697[4], i3697[5], 0, i3696, 'm_SelectedSprite')
  request.r(i3697[6], i3697[7], 0, i3696, 'm_DisabledSprite')
  return i3696
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3699 = data
  i3698.m_NormalTrigger = i3699[0]
  i3698.m_HighlightedTrigger = i3699[1]
  i3698.m_PressedTrigger = i3699[2]
  i3698.m_SelectedTrigger = i3699[3]
  i3698.m_DisabledTrigger = i3699[4]
  return i3698
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i3700 = root || request.c( 'JumpButton' )
  var i3701 = data
  request.r(i3701[0], i3701[1], 0, i3700, 'button')
  return i3700
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3703 = data
  i3702.m_ShowMaskGraphic = !!i3703[0]
  return i3702
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3704 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3705 = data
  i3704.m_hasFontAssetChanged = !!i3705[0]
  request.r(i3705[1], i3705[2], 0, i3704, 'm_baseMaterial')
  i3704.m_maskOffset = new pc.Vec4( i3705[3], i3705[4], i3705[5], i3705[6] )
  i3704.m_text = i3705[7]
  i3704.m_isRightToLeft = !!i3705[8]
  request.r(i3705[9], i3705[10], 0, i3704, 'm_fontAsset')
  request.r(i3705[11], i3705[12], 0, i3704, 'm_sharedMaterial')
  var i3707 = i3705[13]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 2, i3706, '')
  }
  i3704.m_fontSharedMaterials = i3706
  request.r(i3705[14], i3705[15], 0, i3704, 'm_fontMaterial')
  var i3709 = i3705[16]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 2) {
  request.r(i3709[i + 0], i3709[i + 1], 2, i3708, '')
  }
  i3704.m_fontMaterials = i3708
  i3704.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3705[17], i3705[18], i3705[19], i3705[20])
  i3704.m_fontColor = new pc.Color(i3705[21], i3705[22], i3705[23], i3705[24])
  i3704.m_enableVertexGradient = !!i3705[25]
  i3704.m_colorMode = i3705[26]
  i3704.m_fontColorGradient = request.d('TMPro.VertexGradient', i3705[27], i3704.m_fontColorGradient)
  request.r(i3705[28], i3705[29], 0, i3704, 'm_fontColorGradientPreset')
  request.r(i3705[30], i3705[31], 0, i3704, 'm_spriteAsset')
  i3704.m_tintAllSprites = !!i3705[32]
  request.r(i3705[33], i3705[34], 0, i3704, 'm_StyleSheet')
  i3704.m_TextStyleHashCode = i3705[35]
  i3704.m_overrideHtmlColors = !!i3705[36]
  i3704.m_faceColor = UnityEngine.Color32.ConstructColor(i3705[37], i3705[38], i3705[39], i3705[40])
  i3704.m_fontSize = i3705[41]
  i3704.m_fontSizeBase = i3705[42]
  i3704.m_fontWeight = i3705[43]
  i3704.m_enableAutoSizing = !!i3705[44]
  i3704.m_fontSizeMin = i3705[45]
  i3704.m_fontSizeMax = i3705[46]
  i3704.m_fontStyle = i3705[47]
  i3704.m_HorizontalAlignment = i3705[48]
  i3704.m_VerticalAlignment = i3705[49]
  i3704.m_textAlignment = i3705[50]
  i3704.m_characterSpacing = i3705[51]
  i3704.m_wordSpacing = i3705[52]
  i3704.m_lineSpacing = i3705[53]
  i3704.m_lineSpacingMax = i3705[54]
  i3704.m_paragraphSpacing = i3705[55]
  i3704.m_charWidthMaxAdj = i3705[56]
  i3704.m_TextWrappingMode = i3705[57]
  i3704.m_wordWrappingRatios = i3705[58]
  i3704.m_overflowMode = i3705[59]
  request.r(i3705[60], i3705[61], 0, i3704, 'm_linkedTextComponent')
  request.r(i3705[62], i3705[63], 0, i3704, 'parentLinkedComponent')
  i3704.m_enableKerning = !!i3705[64]
  var i3711 = i3705[65]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.add(i3711[i + 0]);
  }
  i3704.m_ActiveFontFeatures = i3710
  i3704.m_enableExtraPadding = !!i3705[66]
  i3704.checkPaddingRequired = !!i3705[67]
  i3704.m_isRichText = !!i3705[68]
  i3704.m_parseCtrlCharacters = !!i3705[69]
  i3704.m_isOrthographic = !!i3705[70]
  i3704.m_isCullingEnabled = !!i3705[71]
  i3704.m_horizontalMapping = i3705[72]
  i3704.m_verticalMapping = i3705[73]
  i3704.m_uvLineOffset = i3705[74]
  i3704.m_geometrySortingOrder = i3705[75]
  i3704.m_IsTextObjectScaleStatic = !!i3705[76]
  i3704.m_VertexBufferAutoSizeReduction = !!i3705[77]
  i3704.m_useMaxVisibleDescender = !!i3705[78]
  i3704.m_pageToDisplay = i3705[79]
  i3704.m_margin = new pc.Vec4( i3705[80], i3705[81], i3705[82], i3705[83] )
  i3704.m_isUsingLegacyAnimationComponent = !!i3705[84]
  i3704.m_isVolumetricText = !!i3705[85]
  request.r(i3705[86], i3705[87], 0, i3704, 'm_Material')
  i3704.m_EmojiFallbackSupport = !!i3705[88]
  i3704.m_Maskable = !!i3705[89]
  i3704.m_Color = new pc.Color(i3705[90], i3705[91], i3705[92], i3705[93])
  i3704.m_RaycastTarget = !!i3705[94]
  i3704.m_RaycastPadding = new pc.Vec4( i3705[95], i3705[96], i3705[97], i3705[98] )
  return i3704
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.VertexGradient' )
  var i3715 = data
  i3714.topLeft = new pc.Color(i3715[0], i3715[1], i3715[2], i3715[3])
  i3714.topRight = new pc.Color(i3715[4], i3715[5], i3715[6], i3715[7])
  i3714.bottomLeft = new pc.Color(i3715[8], i3715[9], i3715[10], i3715[11])
  i3714.bottomRight = new pc.Color(i3715[12], i3715[13], i3715[14], i3715[15])
  return i3714
}

Deserializers["TutController"] = function (request, data, root) {
  var i3718 = root || request.c( 'TutController' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'tutScene')
  request.r(i3719[2], i3719[3], 0, i3718, 'startTut')
  request.r(i3719[4], i3719[5], 0, i3718, 'playTut')
  request.r(i3719[6], i3719[7], 0, i3718, 'farTut')
  request.r(i3719[8], i3719[9], 0, i3718, 'failTut')
  return i3718
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3720 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3721 = data
  i3720.targetIsSelf = !!i3721[0]
  request.r(i3721[1], i3721[2], 0, i3720, 'targetGO')
  i3720.tweenTargetIsTargetGO = !!i3721[3]
  i3720.delay = i3721[4]
  i3720.duration = i3721[5]
  i3720.easeType = i3721[6]
  i3720.easeCurve = new pc.AnimationCurve( { keys_flow: i3721[7] } )
  i3720.loopType = i3721[8]
  i3720.loops = i3721[9]
  i3720.id = i3721[10]
  i3720.isRelative = !!i3721[11]
  i3720.isFrom = !!i3721[12]
  i3720.isIndependentUpdate = !!i3721[13]
  i3720.autoKill = !!i3721[14]
  i3720.autoGenerate = !!i3721[15]
  i3720.isActive = !!i3721[16]
  i3720.isValid = !!i3721[17]
  request.r(i3721[18], i3721[19], 0, i3720, 'target')
  i3720.animationType = i3721[20]
  i3720.targetType = i3721[21]
  i3720.forcedTargetType = i3721[22]
  i3720.autoPlay = !!i3721[23]
  i3720.useTargetAsV3 = !!i3721[24]
  i3720.endValueFloat = i3721[25]
  i3720.endValueV3 = new pc.Vec3( i3721[26], i3721[27], i3721[28] )
  i3720.endValueV2 = new pc.Vec2( i3721[29], i3721[30] )
  i3720.endValueColor = new pc.Color(i3721[31], i3721[32], i3721[33], i3721[34])
  i3720.endValueString = i3721[35]
  i3720.endValueRect = UnityEngine.Rect.MinMaxRect(i3721[36], i3721[37], i3721[38], i3721[39])
  request.r(i3721[40], i3721[41], 0, i3720, 'endValueTransform')
  i3720.optionalBool0 = !!i3721[42]
  i3720.optionalBool1 = !!i3721[43]
  i3720.optionalFloat0 = i3721[44]
  i3720.optionalInt0 = i3721[45]
  i3720.optionalRotationMode = i3721[46]
  i3720.optionalScrambleMode = i3721[47]
  i3720.optionalShakeRandomnessMode = i3721[48]
  i3720.optionalString = i3721[49]
  i3720.updateType = i3721[50]
  i3720.isSpeedBased = !!i3721[51]
  i3720.hasOnStart = !!i3721[52]
  i3720.hasOnPlay = !!i3721[53]
  i3720.hasOnUpdate = !!i3721[54]
  i3720.hasOnStepComplete = !!i3721[55]
  i3720.hasOnComplete = !!i3721[56]
  i3720.hasOnTweenCreated = !!i3721[57]
  i3720.hasOnRewind = !!i3721[58]
  i3720.onStart = request.d('UnityEngine.Events.UnityEvent', i3721[59], i3720.onStart)
  i3720.onPlay = request.d('UnityEngine.Events.UnityEvent', i3721[60], i3720.onPlay)
  i3720.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3721[61], i3720.onUpdate)
  i3720.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3721[62], i3720.onStepComplete)
  i3720.onComplete = request.d('UnityEngine.Events.UnityEvent', i3721[63], i3720.onComplete)
  i3720.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3721[64], i3720.onTweenCreated)
  i3720.onRewind = request.d('UnityEngine.Events.UnityEvent', i3721[65], i3720.onRewind)
  return i3720
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3723 = data
  i3722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3723[0], i3722.m_PersistentCalls)
  return i3722
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i3724 = root || request.c( 'HideOnPointer' )
  var i3725 = data
  i3724.OnPointerDownEvent = request.d('System.Action', i3725[0], i3724.OnPointerDownEvent)
  return i3724
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3726 = root || request.c( 'System.Action' )
  var i3727 = data
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3729 = data
  i3728.center = new pc.Vec3( i3729[0], i3729[1], i3729[2] )
  i3728.size = new pc.Vec3( i3729[3], i3729[4], i3729[5] )
  i3728.enabled = !!i3729[6]
  i3728.isTrigger = !!i3729[7]
  request.r(i3729[8], i3729[9], 0, i3728, 'material')
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3731 = data
  i3730.mass = i3731[0]
  i3730.drag = i3731[1]
  i3730.angularDrag = i3731[2]
  i3730.useGravity = !!i3731[3]
  i3730.isKinematic = !!i3731[4]
  i3730.constraints = i3731[5]
  i3730.maxAngularVelocity = i3731[6]
  i3730.collisionDetectionMode = i3731[7]
  i3730.interpolation = i3731[8]
  return i3730
}

Deserializers["Gift"] = function (request, data, root) {
  var i3732 = root || request.c( 'Gift' )
  var i3733 = data
  i3732.collectDone = !!i3733[0]
  var i3735 = i3733[1]
  var i3734 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i3735.length; i += 2) {
  request.r(i3735[i + 0], i3735[i + 1], 1, i3734, '')
  }
  i3732.hints = i3734
  request.r(i3733[2], i3733[3], 0, i3732, 'collectSound')
  request.r(i3733[4], i3733[5], 0, i3732, 'collectEffect')
  request.r(i3733[6], i3733[7], 0, i3732, 'arrow')
  return i3732
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i3738 = root || request.c( 'SoundHint' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'Sound')
  request.r(i3739[2], i3739[3], 0, i3738, 'Source')
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'sharedMesh')
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3743 = data
  request.r(i3743[0], i3743[1], 0, i3742, 'additionalVertexStreams')
  i3742.enabled = !!i3743[2]
  request.r(i3743[3], i3743[4], 0, i3742, 'sharedMaterial')
  var i3745 = i3743[5]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 2) {
  request.r(i3745[i + 0], i3745[i + 1], 2, i3744, '')
  }
  i3742.sharedMaterials = i3744
  i3742.receiveShadows = !!i3743[6]
  i3742.shadowCastingMode = i3743[7]
  i3742.sortingLayerID = i3743[8]
  i3742.sortingOrder = i3743[9]
  i3742.lightmapIndex = i3743[10]
  i3742.lightmapSceneIndex = i3743[11]
  i3742.lightmapScaleOffset = new pc.Vec4( i3743[12], i3743[13], i3743[14], i3743[15] )
  i3742.lightProbeUsage = i3743[16]
  i3742.reflectionProbeUsage = i3743[17]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'mesh')
  i3746.meshCount = i3747[2]
  i3746.activeVertexStreamsCount = i3747[3]
  i3746.alignment = i3747[4]
  i3746.renderMode = i3747[5]
  i3746.sortMode = i3747[6]
  i3746.lengthScale = i3747[7]
  i3746.velocityScale = i3747[8]
  i3746.cameraVelocityScale = i3747[9]
  i3746.normalDirection = i3747[10]
  i3746.sortingFudge = i3747[11]
  i3746.minParticleSize = i3747[12]
  i3746.maxParticleSize = i3747[13]
  i3746.pivot = new pc.Vec3( i3747[14], i3747[15], i3747[16] )
  request.r(i3747[17], i3747[18], 0, i3746, 'trailMaterial')
  i3746.applyActiveColorSpace = !!i3747[19]
  i3746.enabled = !!i3747[20]
  request.r(i3747[21], i3747[22], 0, i3746, 'sharedMaterial')
  var i3749 = i3747[23]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 2) {
  request.r(i3749[i + 0], i3749[i + 1], 2, i3748, '')
  }
  i3746.sharedMaterials = i3748
  i3746.receiveShadows = !!i3747[24]
  i3746.shadowCastingMode = i3747[25]
  i3746.sortingLayerID = i3747[26]
  i3746.sortingOrder = i3747[27]
  i3746.lightmapIndex = i3747[28]
  i3746.lightmapSceneIndex = i3747[29]
  i3746.lightmapScaleOffset = new pc.Vec4( i3747[30], i3747[31], i3747[32], i3747[33] )
  i3746.lightProbeUsage = i3747[34]
  i3746.reflectionProbeUsage = i3747[35]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3751 = data
  i3750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3751[0], i3750.main)
  i3750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3751[1], i3750.colorBySpeed)
  i3750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3751[2], i3750.colorOverLifetime)
  i3750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3751[3], i3750.emission)
  i3750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3751[4], i3750.rotationBySpeed)
  i3750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3751[5], i3750.rotationOverLifetime)
  i3750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3751[6], i3750.shape)
  i3750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3751[7], i3750.sizeBySpeed)
  i3750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3751[8], i3750.sizeOverLifetime)
  i3750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3751[9], i3750.textureSheetAnimation)
  i3750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3751[10], i3750.velocityOverLifetime)
  i3750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3751[11], i3750.noise)
  i3750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3751[12], i3750.inheritVelocity)
  i3750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3751[13], i3750.forceOverLifetime)
  i3750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3751[14], i3750.limitVelocityOverLifetime)
  i3750.useAutoRandomSeed = !!i3751[15]
  i3750.randomSeed = i3751[16]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3752 = root || new pc.ParticleSystemMain()
  var i3753 = data
  i3752.duration = i3753[0]
  i3752.loop = !!i3753[1]
  i3752.prewarm = !!i3753[2]
  i3752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[3], i3752.startDelay)
  i3752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[4], i3752.startLifetime)
  i3752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[5], i3752.startSpeed)
  i3752.startSize3D = !!i3753[6]
  i3752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[7], i3752.startSizeX)
  i3752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[8], i3752.startSizeY)
  i3752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[9], i3752.startSizeZ)
  i3752.startRotation3D = !!i3753[10]
  i3752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[11], i3752.startRotationX)
  i3752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[12], i3752.startRotationY)
  i3752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[13], i3752.startRotationZ)
  i3752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3753[14], i3752.startColor)
  i3752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[15], i3752.gravityModifier)
  i3752.simulationSpace = i3753[16]
  request.r(i3753[17], i3753[18], 0, i3752, 'customSimulationSpace')
  i3752.simulationSpeed = i3753[19]
  i3752.useUnscaledTime = !!i3753[20]
  i3752.scalingMode = i3753[21]
  i3752.playOnAwake = !!i3753[22]
  i3752.maxParticles = i3753[23]
  i3752.emitterVelocityMode = i3753[24]
  i3752.stopAction = i3753[25]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3754 = root || new pc.MinMaxCurve()
  var i3755 = data
  i3754.mode = i3755[0]
  i3754.curveMin = new pc.AnimationCurve( { keys_flow: i3755[1] } )
  i3754.curveMax = new pc.AnimationCurve( { keys_flow: i3755[2] } )
  i3754.curveMultiplier = i3755[3]
  i3754.constantMin = i3755[4]
  i3754.constantMax = i3755[5]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3756 = root || new pc.MinMaxGradient()
  var i3757 = data
  i3756.mode = i3757[0]
  i3756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3757[1], i3756.gradientMin)
  i3756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3757[2], i3756.gradientMax)
  i3756.colorMin = new pc.Color(i3757[3], i3757[4], i3757[5], i3757[6])
  i3756.colorMax = new pc.Color(i3757[7], i3757[8], i3757[9], i3757[10])
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3759 = data
  i3758.mode = i3759[0]
  var i3761 = i3759[1]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3761[i + 0]) );
  }
  i3758.colorKeys = i3760
  var i3763 = i3759[2]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3763[i + 0]) );
  }
  i3758.alphaKeys = i3762
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3764 = root || new pc.ParticleSystemColorBySpeed()
  var i3765 = data
  i3764.enabled = !!i3765[0]
  i3764.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3765[1], i3764.color)
  i3764.range = new pc.Vec2( i3765[2], i3765[3] )
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3769 = data
  i3768.color = new pc.Color(i3769[0], i3769[1], i3769[2], i3769[3])
  i3768.time = i3769[4]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3773 = data
  i3772.alpha = i3773[0]
  i3772.time = i3773[1]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3774 = root || new pc.ParticleSystemColorOverLifetime()
  var i3775 = data
  i3774.enabled = !!i3775[0]
  i3774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3775[1], i3774.color)
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3776 = root || new pc.ParticleSystemEmitter()
  var i3777 = data
  i3776.enabled = !!i3777[0]
  i3776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3777[1], i3776.rateOverTime)
  i3776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3777[2], i3776.rateOverDistance)
  var i3779 = i3777[3]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3779[i + 0]) );
  }
  i3776.bursts = i3778
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3782 = root || new pc.ParticleSystemBurst()
  var i3783 = data
  i3782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[0], i3782.count)
  i3782.cycleCount = i3783[1]
  i3782.minCount = i3783[2]
  i3782.maxCount = i3783[3]
  i3782.repeatInterval = i3783[4]
  i3782.time = i3783[5]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3784 = root || new pc.ParticleSystemRotationBySpeed()
  var i3785 = data
  i3784.enabled = !!i3785[0]
  i3784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[1], i3784.x)
  i3784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[2], i3784.y)
  i3784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[3], i3784.z)
  i3784.separateAxes = !!i3785[4]
  i3784.range = new pc.Vec2( i3785[5], i3785[6] )
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3787 = data
  i3786.enabled = !!i3787[0]
  i3786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[1], i3786.x)
  i3786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[2], i3786.y)
  i3786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[3], i3786.z)
  i3786.separateAxes = !!i3787[4]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3788 = root || new pc.ParticleSystemShape()
  var i3789 = data
  i3788.enabled = !!i3789[0]
  i3788.shapeType = i3789[1]
  i3788.randomDirectionAmount = i3789[2]
  i3788.sphericalDirectionAmount = i3789[3]
  i3788.randomPositionAmount = i3789[4]
  i3788.alignToDirection = !!i3789[5]
  i3788.radius = i3789[6]
  i3788.radiusMode = i3789[7]
  i3788.radiusSpread = i3789[8]
  i3788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[9], i3788.radiusSpeed)
  i3788.radiusThickness = i3789[10]
  i3788.angle = i3789[11]
  i3788.length = i3789[12]
  i3788.boxThickness = new pc.Vec3( i3789[13], i3789[14], i3789[15] )
  i3788.meshShapeType = i3789[16]
  request.r(i3789[17], i3789[18], 0, i3788, 'mesh')
  request.r(i3789[19], i3789[20], 0, i3788, 'meshRenderer')
  request.r(i3789[21], i3789[22], 0, i3788, 'skinnedMeshRenderer')
  i3788.useMeshMaterialIndex = !!i3789[23]
  i3788.meshMaterialIndex = i3789[24]
  i3788.useMeshColors = !!i3789[25]
  i3788.normalOffset = i3789[26]
  i3788.arc = i3789[27]
  i3788.arcMode = i3789[28]
  i3788.arcSpread = i3789[29]
  i3788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[30], i3788.arcSpeed)
  i3788.donutRadius = i3789[31]
  i3788.position = new pc.Vec3( i3789[32], i3789[33], i3789[34] )
  i3788.rotation = new pc.Vec3( i3789[35], i3789[36], i3789[37] )
  i3788.scale = new pc.Vec3( i3789[38], i3789[39], i3789[40] )
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3790 = root || new pc.ParticleSystemSizeBySpeed()
  var i3791 = data
  i3790.enabled = !!i3791[0]
  i3790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[1], i3790.x)
  i3790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[2], i3790.y)
  i3790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[3], i3790.z)
  i3790.separateAxes = !!i3791[4]
  i3790.range = new pc.Vec2( i3791[5], i3791[6] )
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3793 = data
  i3792.enabled = !!i3793[0]
  i3792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3793[1], i3792.x)
  i3792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3793[2], i3792.y)
  i3792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3793[3], i3792.z)
  i3792.separateAxes = !!i3793[4]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3795 = data
  i3794.enabled = !!i3795[0]
  i3794.mode = i3795[1]
  i3794.animation = i3795[2]
  i3794.numTilesX = i3795[3]
  i3794.numTilesY = i3795[4]
  i3794.useRandomRow = !!i3795[5]
  i3794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3795[6], i3794.frameOverTime)
  i3794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3795[7], i3794.startFrame)
  i3794.cycleCount = i3795[8]
  i3794.rowIndex = i3795[9]
  i3794.flipU = i3795[10]
  i3794.flipV = i3795[11]
  i3794.spriteCount = i3795[12]
  var i3797 = i3795[13]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 2) {
  request.r(i3797[i + 0], i3797[i + 1], 2, i3796, '')
  }
  i3794.sprites = i3796
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3801 = data
  i3800.enabled = !!i3801[0]
  i3800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[1], i3800.x)
  i3800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[2], i3800.y)
  i3800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[3], i3800.z)
  i3800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[4], i3800.radial)
  i3800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[5], i3800.speedModifier)
  i3800.space = i3801[6]
  i3800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[7], i3800.orbitalX)
  i3800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[8], i3800.orbitalY)
  i3800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[9], i3800.orbitalZ)
  i3800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[10], i3800.orbitalOffsetX)
  i3800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[11], i3800.orbitalOffsetY)
  i3800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[12], i3800.orbitalOffsetZ)
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3802 = root || new pc.ParticleSystemNoise()
  var i3803 = data
  i3802.enabled = !!i3803[0]
  i3802.separateAxes = !!i3803[1]
  i3802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[2], i3802.strengthX)
  i3802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[3], i3802.strengthY)
  i3802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[4], i3802.strengthZ)
  i3802.frequency = i3803[5]
  i3802.damping = !!i3803[6]
  i3802.octaveCount = i3803[7]
  i3802.octaveMultiplier = i3803[8]
  i3802.octaveScale = i3803[9]
  i3802.quality = i3803[10]
  i3802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[11], i3802.scrollSpeed)
  i3802.scrollSpeedMultiplier = i3803[12]
  i3802.remapEnabled = !!i3803[13]
  i3802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[14], i3802.remapX)
  i3802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[15], i3802.remapY)
  i3802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[16], i3802.remapZ)
  i3802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[17], i3802.positionAmount)
  i3802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[18], i3802.rotationAmount)
  i3802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[19], i3802.sizeAmount)
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3804 = root || new pc.ParticleSystemInheritVelocity()
  var i3805 = data
  i3804.enabled = !!i3805[0]
  i3804.mode = i3805[1]
  i3804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3805[2], i3804.curve)
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3806 = root || new pc.ParticleSystemForceOverLifetime()
  var i3807 = data
  i3806.enabled = !!i3807[0]
  i3806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[1], i3806.x)
  i3806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[2], i3806.y)
  i3806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[3], i3806.z)
  i3806.space = i3807[4]
  i3806.randomized = !!i3807[5]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3809 = data
  i3808.enabled = !!i3809[0]
  i3808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[1], i3808.limit)
  i3808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[2], i3808.limitX)
  i3808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[3], i3808.limitY)
  i3808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[4], i3808.limitZ)
  i3808.dampen = i3809[5]
  i3808.separateAxes = !!i3809[6]
  i3808.space = i3809[7]
  i3808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[8], i3808.drag)
  i3808.multiplyDragByParticleSize = !!i3809[9]
  i3808.multiplyDragByParticleVelocity = !!i3809[10]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3811 = data
  i3810.color = new pc.Color(i3811[0], i3811[1], i3811[2], i3811[3])
  request.r(i3811[4], i3811[5], 0, i3810, 'sprite')
  i3810.flipX = !!i3811[6]
  i3810.flipY = !!i3811[7]
  i3810.drawMode = i3811[8]
  i3810.size = new pc.Vec2( i3811[9], i3811[10] )
  i3810.tileMode = i3811[11]
  i3810.adaptiveModeThreshold = i3811[12]
  i3810.maskInteraction = i3811[13]
  i3810.spriteSortPoint = i3811[14]
  i3810.enabled = !!i3811[15]
  request.r(i3811[16], i3811[17], 0, i3810, 'sharedMaterial')
  var i3813 = i3811[18]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 2, i3812, '')
  }
  i3810.sharedMaterials = i3812
  i3810.receiveShadows = !!i3811[19]
  i3810.shadowCastingMode = i3811[20]
  i3810.sortingLayerID = i3811[21]
  i3810.sortingOrder = i3811[22]
  i3810.lightmapIndex = i3811[23]
  i3810.lightmapSceneIndex = i3811[24]
  i3810.lightmapScaleOffset = new pc.Vec4( i3811[25], i3811[26], i3811[27], i3811[28] )
  i3810.lightProbeUsage = i3811[29]
  i3810.reflectionProbeUsage = i3811[30]
  return i3810
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i3814 = root || request.c( 'CharacterMotor' )
  var i3815 = data
  request.r(i3815[0], i3815[1], 0, i3814, 'characterInput')
  request.r(i3815[2], i3815[3], 0, i3814, 'cameraYawTransform')
  request.r(i3815[4], i3815[5], 0, i3814, '_arrow')
  i3814.moveSpeed = i3815[6]
  i3814.jumpHeight = i3815[7]
  request.r(i3815[8], i3815[9], 0, i3814, 'groundChecker')
  i3814.gravity = i3815[10]
  i3814.enableStepClimb = !!i3815[11]
  i3814.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i3815[12] )
  i3814.maxStepHeight = i3815[13]
  i3814.stepCheckDistance = i3815[14]
  i3814.stepUpSpeed = i3815[15]
  i3814.stepUpAcceleration = i3815[16]
  i3814.minimumStepFacing = i3815[17]
  request.r(i3815[18], i3815[19], 0, i3814, 'controller')
  i3814.autoRun = !!i3815[20]
  return i3814
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i3816 = root || request.c( 'CharacterRotation' )
  var i3817 = data
  request.r(i3817[0], i3817[1], 0, i3816, 'motor')
  i3816.rotationSpeed = i3817[2]
  return i3816
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i3818 = root || request.c( 'CharacterAnimation' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, 'animator')
  request.r(i3819[2], i3819[3], 0, i3818, 'motor')
  i3818.speedChangeRate = i3819[4]
  i3818.groundedGraceTime = i3819[5]
  return i3818
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i3820 = root || request.c( 'CharacterCollect' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'motor')
  request.r(i3821[2], i3821[3], 0, i3820, 'avatar')
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3823 = data
  i3822.center = new pc.Vec3( i3823[0], i3823[1], i3823[2] )
  i3822.radius = i3823[3]
  i3822.height = i3823[4]
  i3822.direction = i3823[5]
  i3822.enabled = !!i3823[6]
  i3822.isTrigger = !!i3823[7]
  request.r(i3823[8], i3823[9], 0, i3822, 'material')
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'animatorController')
  request.r(i3825[2], i3825[3], 0, i3824, 'avatar')
  i3824.updateMode = i3825[4]
  i3824.hasTransformHierarchy = !!i3825[5]
  i3824.applyRootMotion = !!i3825[6]
  var i3827 = i3825[7]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 2) {
  request.r(i3827[i + 0], i3827[i + 1], 2, i3826, '')
  }
  i3824.humanBones = i3826
  i3824.enabled = !!i3825[8]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3831 = data
  request.r(i3831[0], i3831[1], 0, i3830, 'clip')
  request.r(i3831[2], i3831[3], 0, i3830, 'outputAudioMixerGroup')
  i3830.playOnAwake = !!i3831[4]
  i3830.loop = !!i3831[5]
  i3830.time = i3831[6]
  i3830.volume = i3831[7]
  i3830.pitch = i3831[8]
  i3830.enabled = !!i3831[9]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'sharedMesh')
  var i3835 = i3833[2]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 2, i3834, '')
  }
  i3832.bones = i3834
  i3832.updateWhenOffscreen = !!i3833[3]
  i3832.localBounds = i3833[4]
  request.r(i3833[5], i3833[6], 0, i3832, 'rootBone')
  var i3837 = i3833[7]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3837[i + 0]) );
  }
  i3832.blendShapesWeights = i3836
  i3832.enabled = !!i3833[8]
  request.r(i3833[9], i3833[10], 0, i3832, 'sharedMaterial')
  var i3839 = i3833[11]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 2) {
  request.r(i3839[i + 0], i3839[i + 1], 2, i3838, '')
  }
  i3832.sharedMaterials = i3838
  i3832.receiveShadows = !!i3833[12]
  i3832.shadowCastingMode = i3833[13]
  i3832.sortingLayerID = i3833[14]
  i3832.sortingOrder = i3833[15]
  i3832.lightmapIndex = i3833[16]
  i3832.lightmapSceneIndex = i3833[17]
  i3832.lightmapScaleOffset = new pc.Vec4( i3833[18], i3833[19], i3833[20], i3833[21] )
  i3832.lightProbeUsage = i3833[22]
  i3832.reflectionProbeUsage = i3833[23]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3843 = data
  i3842.weight = i3843[0]
  return i3842
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i3844 = root || request.c( 'GroundChecker' )
  var i3845 = data
  request.r(i3845[0], i3845[1], 0, i3844, 'groundPoint')
  i3844.checkRadius = i3845[2]
  i3844.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i3845[3] )
  return i3844
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i3846 = root || request.c( 'CameraFollow' )
  var i3847 = data
  request.r(i3847[0], i3847[1], 0, i3846, 'target')
  i3846.smoothTime = i3847[2]
  return i3846
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i3848 = root || request.c( 'CameraLook' )
  var i3849 = data
  request.r(i3849[0], i3849[1], 0, i3848, 'input')
  request.r(i3849[2], i3849[3], 0, i3848, 'yawPivot')
  request.r(i3849[4], i3849[5], 0, i3848, 'pitchPivot')
  i3848.minPitch = i3849[6]
  i3848.maxPitch = i3849[7]
  i3848.yaw = i3849[8]
  i3848.pitch = i3849[9]
  i3848.defaltYaw = i3849[10]
  i3848.defaltPitch = i3849[11]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3851 = data
  i3850.aspect = i3851[0]
  i3850.orthographic = !!i3851[1]
  i3850.orthographicSize = i3851[2]
  i3850.backgroundColor = new pc.Color(i3851[3], i3851[4], i3851[5], i3851[6])
  i3850.nearClipPlane = i3851[7]
  i3850.farClipPlane = i3851[8]
  i3850.fieldOfView = i3851[9]
  i3850.depth = i3851[10]
  i3850.clearFlags = i3851[11]
  i3850.cullingMask = i3851[12]
  i3850.rect = i3851[13]
  request.r(i3851[14], i3851[15], 0, i3850, 'targetTexture')
  i3850.usePhysicalProperties = !!i3851[16]
  i3850.focalLength = i3851[17]
  i3850.sensorSize = new pc.Vec2( i3851[18], i3851[19] )
  i3850.lensShift = new pc.Vec2( i3851[20], i3851[21] )
  i3850.gateFit = i3851[22]
  i3850.commandBufferCount = i3851[23]
  i3850.cameraType = i3851[24]
  i3850.enabled = !!i3851[25]
  return i3850
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i3852 = root || request.c( 'CharacterInput' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'joystick')
  request.r(i3853[2], i3853[3], 0, i3852, 'jumpButton')
  return i3852
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3854 = root || request.c( 'InputManager' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, 'worldCamera')
  i3854.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i3855[2] )
  i3854.touchSensitivity = i3855[3]
  i3854.mouseSensitivity = i3855[4]
  i3854.dragThreshold = i3855[5]
  return i3854
}

Deserializers["GameController"] = function (request, data, root) {
  var i3856 = root || request.c( 'GameController' )
  var i3857 = data
  i3856.timeToShowComplete = i3857[0]
  i3856.currentProgress = i3857[1]
  i3856.target = i3857[2]
  request.r(i3857[3], i3857[4], 0, i3856, 'progressText')
  request.r(i3857[5], i3857[6], 0, i3856, 'collectText')
  request.r(i3857[7], i3857[8], 0, i3856, '_cta')
  var i3859 = i3857[9]
  var i3858 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i3859.length; i += 2) {
  request.r(i3859[i + 0], i3859[i + 1], 1, i3858, '')
  }
  i3856.gifts = i3858
  request.r(i3857[10], i3857[11], 0, i3856, 'collect')
  request.r(i3857[12], i3857[13], 0, i3856, 'tut')
  request.r(i3857[14], i3857[15], 0, i3856, 'playerSpawn')
  request.r(i3857[16], i3857[17], 0, i3856, 'giftSpawn')
  request.r(i3857[18], i3857[19], 0, i3856, 'failUI')
  request.r(i3857[20], i3857[21], 0, i3856, 'playerMotor')
  i3856.failHeight = i3857[22]
  return i3856
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3862 = root || request.c( 'AudioController' )
  var i3863 = data
  request.r(i3863[0], i3863[1], 0, i3862, 'musicSource')
  request.r(i3863[2], i3863[3], 0, i3862, 'poolParent')
  i3862.startSize = i3863[4]
  return i3862
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3864 = root || request.c( 'LunaController' )
  var i3865 = data
  i3864.LimitTimePlay = !!i3865[0]
  i3864.TimePlay = i3865[1]
  var i3867 = i3865[2]
  var i3866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i3867.length; i += 2) {
  request.r(i3867[i + 0], i3867[i + 1], 1, i3866, '')
  }
  i3864.images = i3866
  request.r(i3865[3], i3865[4], 0, i3864, 'CTA')
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, 'sharedMesh')
  i3870.convex = !!i3871[2]
  i3870.enabled = !!i3871[3]
  i3870.isTrigger = !!i3871[4]
  request.r(i3871[5], i3871[6], 0, i3870, 'material')
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3873 = data
  i3872.center = new pc.Vec3( i3873[0], i3873[1], i3873[2] )
  i3872.radius = i3873[3]
  i3872.enabled = !!i3873[4]
  i3872.isTrigger = !!i3873[5]
  request.r(i3873[6], i3873[7], 0, i3872, 'material')
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3875 = data
  i3874.ambientIntensity = i3875[0]
  i3874.reflectionIntensity = i3875[1]
  i3874.ambientMode = i3875[2]
  i3874.ambientLight = new pc.Color(i3875[3], i3875[4], i3875[5], i3875[6])
  i3874.ambientSkyColor = new pc.Color(i3875[7], i3875[8], i3875[9], i3875[10])
  i3874.ambientGroundColor = new pc.Color(i3875[11], i3875[12], i3875[13], i3875[14])
  i3874.ambientEquatorColor = new pc.Color(i3875[15], i3875[16], i3875[17], i3875[18])
  i3874.fogColor = new pc.Color(i3875[19], i3875[20], i3875[21], i3875[22])
  i3874.fogEndDistance = i3875[23]
  i3874.fogStartDistance = i3875[24]
  i3874.fogDensity = i3875[25]
  i3874.fog = !!i3875[26]
  request.r(i3875[27], i3875[28], 0, i3874, 'skybox')
  i3874.fogMode = i3875[29]
  var i3877 = i3875[30]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3877[i + 0]) );
  }
  i3874.lightmaps = i3876
  i3874.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3875[31], i3874.lightProbes)
  i3874.lightmapsMode = i3875[32]
  i3874.mixedBakeMode = i3875[33]
  i3874.environmentLightingMode = i3875[34]
  i3874.ambientProbe = new pc.SphericalHarmonicsL2(i3875[35])
  request.r(i3875[36], i3875[37], 0, i3874, 'customReflection')
  request.r(i3875[38], i3875[39], 0, i3874, 'defaultReflection')
  i3874.defaultReflectionMode = i3875[40]
  i3874.defaultReflectionResolution = i3875[41]
  i3874.sunLightObjectId = i3875[42]
  i3874.pixelLightCount = i3875[43]
  i3874.defaultReflectionHDR = !!i3875[44]
  i3874.hasLightDataAsset = !!i3875[45]
  i3874.hasManualGenerate = !!i3875[46]
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3881 = data
  request.r(i3881[0], i3881[1], 0, i3880, 'lightmapColor')
  request.r(i3881[2], i3881[3], 0, i3880, 'lightmapDirection')
  request.r(i3881[4], i3881[5], 0, i3880, 'shadowMask')
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3882 = root || new UnityEngine.LightProbes()
  var i3883 = data
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3891 = data
  var i3893 = i3891[0]
  var i3892 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3893[i + 0]));
  }
  i3890.ShaderCompilationErrors = i3892
  i3890.name = i3891[1]
  i3890.guid = i3891[2]
  var i3895 = i3891[3]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( i3895[i + 0] );
  }
  i3890.shaderDefinedKeywords = i3894
  var i3897 = i3891[4]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3897[i + 0]) );
  }
  i3890.passes = i3896
  var i3899 = i3891[5]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3899[i + 0]) );
  }
  i3890.usePasses = i3898
  var i3901 = i3891[6]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3901[i + 0]) );
  }
  i3890.defaultParameterValues = i3900
  request.r(i3891[7], i3891[8], 0, i3890, 'unityFallbackShader')
  i3890.readDepth = !!i3891[9]
  i3890.hasDepthOnlyPass = !!i3891[10]
  i3890.isCreatedByShaderGraph = !!i3891[11]
  i3890.disableBatching = !!i3891[12]
  i3890.compiled = !!i3891[13]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3905 = data
  i3904.shaderName = i3905[0]
  i3904.errorMessage = i3905[1]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3910 = root || new pc.UnityShaderPass()
  var i3911 = data
  i3910.id = i3911[0]
  i3910.subShaderIndex = i3911[1]
  i3910.name = i3911[2]
  i3910.passType = i3911[3]
  i3910.grabPassTextureName = i3911[4]
  i3910.usePass = !!i3911[5]
  i3910.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[6], i3910.zTest)
  i3910.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[7], i3910.zWrite)
  i3910.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[8], i3910.culling)
  i3910.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3911[9], i3910.blending)
  i3910.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3911[10], i3910.alphaBlending)
  i3910.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[11], i3910.colorWriteMask)
  i3910.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[12], i3910.offsetUnits)
  i3910.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[13], i3910.offsetFactor)
  i3910.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[14], i3910.stencilRef)
  i3910.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[15], i3910.stencilReadMask)
  i3910.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3911[16], i3910.stencilWriteMask)
  i3910.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3911[17], i3910.stencilOp)
  i3910.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3911[18], i3910.stencilOpFront)
  i3910.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3911[19], i3910.stencilOpBack)
  var i3913 = i3911[20]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3913[i + 0]) );
  }
  i3910.tags = i3912
  var i3915 = i3911[21]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( i3915[i + 0] );
  }
  i3910.passDefinedKeywords = i3914
  var i3917 = i3911[22]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3917[i + 0]) );
  }
  i3910.passDefinedKeywordGroups = i3916
  var i3919 = i3911[23]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3919[i + 0]) );
  }
  i3910.variants = i3918
  var i3921 = i3911[24]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3921[i + 0]) );
  }
  i3910.excludedVariants = i3920
  i3910.hasDepthReader = !!i3911[25]
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3923 = data
  i3922.val = i3923[0]
  i3922.name = i3923[1]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3925 = data
  i3924.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3925[0], i3924.src)
  i3924.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3925[1], i3924.dst)
  i3924.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3925[2], i3924.op)
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3927 = data
  i3926.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[0], i3926.pass)
  i3926.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[1], i3926.fail)
  i3926.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[2], i3926.zFail)
  i3926.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[3], i3926.comp)
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3931 = data
  i3930.name = i3931[0]
  i3930.value = i3931[1]
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( i3937[i + 0] );
  }
  i3934.keywords = i3936
  i3934.hasDiscard = !!i3935[1]
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3941 = data
  i3940.passId = i3941[0]
  i3940.subShaderIndex = i3941[1]
  var i3943 = i3941[2]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( i3943[i + 0] );
  }
  i3940.keywords = i3942
  i3940.vertexProgram = i3941[3]
  i3940.fragmentProgram = i3941[4]
  i3940.exportedForWebGl2 = !!i3941[5]
  i3940.readDepth = !!i3941[6]
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3947 = data
  request.r(i3947[0], i3947[1], 0, i3946, 'shader')
  i3946.pass = i3947[2]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3951 = data
  i3950.name = i3951[0]
  i3950.type = i3951[1]
  i3950.value = new pc.Vec4( i3951[2], i3951[3], i3951[4], i3951[5] )
  i3950.textureValue = i3951[6]
  i3950.shaderPropertyFlag = i3951[7]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3953 = data
  i3952.name = i3953[0]
  request.r(i3953[1], i3953[2], 0, i3952, 'texture')
  i3952.aabb = i3953[3]
  i3952.vertices = i3953[4]
  i3952.triangles = i3953[5]
  i3952.textureRect = UnityEngine.Rect.MinMaxRect(i3953[6], i3953[7], i3953[8], i3953[9])
  i3952.packedRect = UnityEngine.Rect.MinMaxRect(i3953[10], i3953[11], i3953[12], i3953[13])
  i3952.border = new pc.Vec4( i3953[14], i3953[15], i3953[16], i3953[17] )
  i3952.transparency = i3953[18]
  i3952.bounds = i3953[19]
  i3952.pixelsPerUnit = i3953[20]
  i3952.textureWidth = i3953[21]
  i3952.textureHeight = i3953[22]
  i3952.nativeSize = new pc.Vec2( i3953[23], i3953[24] )
  i3952.pivot = new pc.Vec2( i3953[25], i3953[26] )
  i3952.textureRectOffset = new pc.Vec2( i3953[27], i3953[28] )
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3955 = data
  i3954.name = i3955[0]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3957 = data
  i3956.name = i3957[0]
  i3956.wrapMode = i3957[1]
  i3956.isLooping = !!i3957[2]
  i3956.length = i3957[3]
  var i3959 = i3957[4]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3959[i + 0]) );
  }
  i3956.curves = i3958
  var i3961 = i3957[5]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3961[i + 0]) );
  }
  i3956.events = i3960
  i3956.halfPrecision = !!i3957[6]
  i3956._frameRate = i3957[7]
  i3956.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3957[8], i3956.localBounds)
  i3956.hasMuscleCurves = !!i3957[9]
  var i3963 = i3957[10]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( i3963[i + 0] );
  }
  i3956.clipMuscleConstant = i3962
  i3956.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3957[11], i3956.clipBindingConstant)
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3967 = data
  i3966.path = i3967[0]
  i3966.hash = i3967[1]
  i3966.componentType = i3967[2]
  i3966.property = i3967[3]
  i3966.keys = i3967[4]
  var i3969 = i3967[5]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3969[i + 0]) );
  }
  i3966.objectReferenceKeys = i3968
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3973 = data
  i3972.time = i3973[0]
  request.r(i3973[1], i3973[2], 0, i3972, 'value')
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3977 = data
  i3976.functionName = i3977[0]
  i3976.floatParameter = i3977[1]
  i3976.intParameter = i3977[2]
  i3976.stringParameter = i3977[3]
  request.r(i3977[4], i3977[5], 0, i3976, 'objectReferenceParameter')
  i3976.time = i3977[6]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3979 = data
  i3978.center = new pc.Vec3( i3979[0], i3979[1], i3979[2] )
  i3978.extends = new pc.Vec3( i3979[3], i3979[4], i3979[5] )
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3983 = data
  var i3985 = i3983[0]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( i3985[i + 0] );
  }
  i3982.genericBindings = i3984
  var i3987 = i3983[1]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( i3987[i + 0] );
  }
  i3982.pptrCurveMapping = i3986
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3989 = data
  i3988.name = i3989[0]
  var i3991 = i3989[1]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3991[i + 0]) );
  }
  i3988.layers = i3990
  var i3993 = i3989[2]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3993[i + 0]) );
  }
  i3988.parameters = i3992
  i3988.animationClips = i3989[3]
  i3988.avatarUnsupported = i3989[4]
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3997 = data
  i3996.name = i3997[0]
  i3996.defaultWeight = i3997[1]
  i3996.blendingMode = i3997[2]
  i3996.avatarMask = i3997[3]
  i3996.syncedLayerIndex = i3997[4]
  i3996.syncedLayerAffectsTiming = !!i3997[5]
  i3996.syncedLayers = i3997[6]
  i3996.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3997[7], i3996.stateMachine)
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3999 = data
  i3998.id = i3999[0]
  i3998.name = i3999[1]
  i3998.path = i3999[2]
  var i4001 = i3999[3]
  var i4000 = []
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4001[i + 0]) );
  }
  i3998.states = i4000
  var i4003 = i3999[4]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4003[i + 0]) );
  }
  i3998.machines = i4002
  var i4005 = i3999[5]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4005[i + 0]) );
  }
  i3998.entryStateTransitions = i4004
  var i4007 = i3999[6]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4007[i + 0]) );
  }
  i3998.exitStateTransitions = i4006
  var i4009 = i3999[7]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4009[i + 0]) );
  }
  i3998.anyStateTransitions = i4008
  i3998.defaultStateId = i3999[8]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4013 = data
  i4012.id = i4013[0]
  i4012.name = i4013[1]
  i4012.cycleOffset = i4013[2]
  i4012.cycleOffsetParameter = i4013[3]
  i4012.cycleOffsetParameterActive = !!i4013[4]
  i4012.mirror = !!i4013[5]
  i4012.mirrorParameter = i4013[6]
  i4012.mirrorParameterActive = !!i4013[7]
  i4012.motionId = i4013[8]
  i4012.nameHash = i4013[9]
  i4012.fullPathHash = i4013[10]
  i4012.speed = i4013[11]
  i4012.speedParameter = i4013[12]
  i4012.speedParameterActive = !!i4013[13]
  i4012.tag = i4013[14]
  i4012.tagHash = i4013[15]
  i4012.writeDefaultValues = !!i4013[16]
  var i4015 = i4013[17]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 2) {
  request.r(i4015[i + 0], i4015[i + 1], 2, i4014, '')
  }
  i4012.behaviours = i4014
  var i4017 = i4013[18]
  var i4016 = []
  for(var i = 0; i < i4017.length; i += 1) {
    i4016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4017[i + 0]) );
  }
  i4012.transitions = i4016
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4023 = data
  i4022.fullPath = i4023[0]
  i4022.canTransitionToSelf = !!i4023[1]
  i4022.duration = i4023[2]
  i4022.exitTime = i4023[3]
  i4022.hasExitTime = !!i4023[4]
  i4022.hasFixedDuration = !!i4023[5]
  i4022.interruptionSource = i4023[6]
  i4022.offset = i4023[7]
  i4022.orderedInterruption = !!i4023[8]
  i4022.destinationStateId = i4023[9]
  i4022.isExit = !!i4023[10]
  i4022.mute = !!i4023[11]
  i4022.solo = !!i4023[12]
  var i4025 = i4023[13]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4025[i + 0]) );
  }
  i4022.conditions = i4024
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4029 = data
  i4028.mode = i4029[0]
  i4028.parameter = i4029[1]
  i4028.threshold = i4029[2]
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4035 = data
  i4034.destinationStateId = i4035[0]
  i4034.isExit = !!i4035[1]
  i4034.mute = !!i4035[2]
  i4034.solo = !!i4035[3]
  var i4037 = i4035[4]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4037[i + 0]) );
  }
  i4034.conditions = i4036
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4041 = data
  i4040.defaultBool = !!i4041[0]
  i4040.defaultFloat = i4041[1]
  i4040.defaultInt = i4041[2]
  i4040.name = i4041[3]
  i4040.nameHash = i4041[4]
  i4040.type = i4041[5]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i4043 = data
  i4042.name = i4043[0]
  request.r(i4043[1], i4043[2], 0, i4042, '_runtimeAnimatorController')
  var i4045 = i4043[3]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 2) {
  request.r(i4045[i + 0], i4045[i + 1], 2, i4044, '')
  }
  i4042._originalAnimationClips = i4044
  var i4047 = i4043[4]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 2) {
  request.r(i4047[i + 0], i4047[i + 1], 2, i4046, '')
  }
  i4042._overrideAnimationClips = i4046
  var i4049 = i4043[5]
  var i4048 = []
  for(var i = 0; i < i4049.length; i += 2) {
  request.r(i4049[i + 0], i4049[i + 1], 2, i4048, '')
  }
  i4042._animationClips = i4048
  var i4051 = i4043[6]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.push( request.d('UnityEngine.AnimationClipPair', i4051[i + 0]) );
  }
  i4042._animationClipPairs = i4050
  return i4042
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i4056 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i4057 = data
  request.r(i4057[0], i4057[1], 0, i4056, 'originalClip')
  request.r(i4057[2], i4057[3], 0, i4056, 'overrideClip')
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4059 = data
  i4058.name = i4059[0]
  i4058.bytes64 = i4059[1]
  i4058.data = i4059[2]
  return i4058
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4060 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4061 = data
  i4060.normalStyle = i4061[0]
  i4060.normalSpacingOffset = i4061[1]
  i4060.boldStyle = i4061[2]
  i4060.boldSpacing = i4061[3]
  i4060.italicStyle = i4061[4]
  i4060.tabSize = i4061[5]
  request.r(i4061[6], i4061[7], 0, i4060, 'atlas')
  i4060.m_SourceFontFileGUID = i4061[8]
  i4060.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4061[9], i4060.m_CreationSettings)
  request.r(i4061[10], i4061[11], 0, i4060, 'm_SourceFontFile')
  i4060.m_SourceFontFilePath = i4061[12]
  i4060.m_AtlasPopulationMode = i4061[13]
  i4060.InternalDynamicOS = !!i4061[14]
  var i4063 = i4061[15]
  var i4062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.add(request.d('UnityEngine.TextCore.Glyph', i4063[i + 0]));
  }
  i4060.m_GlyphTable = i4062
  var i4065 = i4061[16]
  var i4064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.add(request.d('TMPro.TMP_Character', i4065[i + 0]));
  }
  i4060.m_CharacterTable = i4064
  var i4067 = i4061[17]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 2) {
  request.r(i4067[i + 0], i4067[i + 1], 2, i4066, '')
  }
  i4060.m_AtlasTextures = i4066
  i4060.m_AtlasTextureIndex = i4061[18]
  i4060.m_IsMultiAtlasTexturesEnabled = !!i4061[19]
  i4060.m_GetFontFeatures = !!i4061[20]
  i4060.m_ClearDynamicDataOnBuild = !!i4061[21]
  i4060.m_AtlasWidth = i4061[22]
  i4060.m_AtlasHeight = i4061[23]
  i4060.m_AtlasPadding = i4061[24]
  i4060.m_AtlasRenderMode = i4061[25]
  var i4069 = i4061[26]
  var i4068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.add(request.d('UnityEngine.TextCore.GlyphRect', i4069[i + 0]));
  }
  i4060.m_UsedGlyphRects = i4068
  var i4071 = i4061[27]
  var i4070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.add(request.d('UnityEngine.TextCore.GlyphRect', i4071[i + 0]));
  }
  i4060.m_FreeGlyphRects = i4070
  i4060.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4061[28], i4060.m_FontFeatureTable)
  i4060.m_ShouldReimportFontFeatures = !!i4061[29]
  var i4073 = i4061[30]
  var i4072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4073.length; i += 2) {
  request.r(i4073[i + 0], i4073[i + 1], 1, i4072, '')
  }
  i4060.m_FallbackFontAssetTable = i4072
  var i4075 = i4061[31]
  var i4074 = []
  for(var i = 0; i < i4075.length; i += 1) {
    i4074.push( request.d('TMPro.TMP_FontWeightPair', i4075[i + 0]) );
  }
  i4060.m_FontWeightTable = i4074
  var i4077 = i4061[32]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( request.d('TMPro.TMP_FontWeightPair', i4077[i + 0]) );
  }
  i4060.fontWeights = i4076
  i4060.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4061[33], i4060.m_fontInfo)
  var i4079 = i4061[34]
  var i4078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.add(request.d('TMPro.TMP_Glyph', i4079[i + 0]));
  }
  i4060.m_glyphInfoList = i4078
  i4060.m_KerningTable = request.d('TMPro.KerningTable', i4061[35], i4060.m_KerningTable)
  var i4081 = i4061[36]
  var i4080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4081.length; i += 2) {
  request.r(i4081[i + 0], i4081[i + 1], 1, i4080, '')
  }
  i4060.fallbackFontAssets = i4080
  i4060.m_Version = i4061[37]
  i4060.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4061[38], i4060.m_FaceInfo)
  request.r(i4061[39], i4061[40], 0, i4060, 'm_Material')
  return i4060
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4082 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4083 = data
  i4082.sourceFontFileName = i4083[0]
  i4082.sourceFontFileGUID = i4083[1]
  i4082.faceIndex = i4083[2]
  i4082.pointSizeSamplingMode = i4083[3]
  i4082.pointSize = i4083[4]
  i4082.padding = i4083[5]
  i4082.paddingMode = i4083[6]
  i4082.packingMode = i4083[7]
  i4082.atlasWidth = i4083[8]
  i4082.atlasHeight = i4083[9]
  i4082.characterSetSelectionMode = i4083[10]
  i4082.characterSequence = i4083[11]
  i4082.referencedFontAssetGUID = i4083[12]
  i4082.referencedTextAssetGUID = i4083[13]
  i4082.fontStyle = i4083[14]
  i4082.fontStyleModifier = i4083[15]
  i4082.renderMode = i4083[16]
  i4082.includeFontFeatures = !!i4083[17]
  return i4082
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4086 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4087 = data
  i4086.m_Index = i4087[0]
  i4086.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4087[1], i4086.m_Metrics)
  i4086.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4087[2], i4086.m_GlyphRect)
  i4086.m_Scale = i4087[3]
  i4086.m_AtlasIndex = i4087[4]
  i4086.m_ClassDefinitionType = i4087[5]
  return i4086
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4088 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4089 = data
  i4088.m_Width = i4089[0]
  i4088.m_Height = i4089[1]
  i4088.m_HorizontalBearingX = i4089[2]
  i4088.m_HorizontalBearingY = i4089[3]
  i4088.m_HorizontalAdvance = i4089[4]
  return i4088
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4090 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4091 = data
  i4090.m_X = i4091[0]
  i4090.m_Y = i4091[1]
  i4090.m_Width = i4091[2]
  i4090.m_Height = i4091[3]
  return i4090
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4094 = root || request.c( 'TMPro.TMP_Character' )
  var i4095 = data
  i4094.m_ElementType = i4095[0]
  i4094.m_Unicode = i4095[1]
  i4094.m_GlyphIndex = i4095[2]
  i4094.m_Scale = i4095[3]
  return i4094
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4100 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4101 = data
  var i4103 = i4101[0]
  var i4102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.add(request.d('TMPro.MultipleSubstitutionRecord', i4103[i + 0]));
  }
  i4100.m_MultipleSubstitutionRecords = i4102
  var i4105 = i4101[1]
  var i4104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.add(request.d('TMPro.LigatureSubstitutionRecord', i4105[i + 0]));
  }
  i4100.m_LigatureSubstitutionRecords = i4104
  var i4107 = i4101[2]
  var i4106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4107[i + 0]));
  }
  i4100.m_GlyphPairAdjustmentRecords = i4106
  var i4109 = i4101[3]
  var i4108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4109[i + 0]));
  }
  i4100.m_MarkToBaseAdjustmentRecords = i4108
  var i4111 = i4101[4]
  var i4110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4111[i + 0]));
  }
  i4100.m_MarkToMarkAdjustmentRecords = i4110
  return i4100
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4114 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4115 = data
  i4114.m_TargetGlyphID = i4115[0]
  i4114.m_SubstituteGlyphIDs = i4115[1]
  return i4114
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4118 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4119 = data
  i4118.m_ComponentGlyphIDs = i4119[0]
  i4118.m_LigatureGlyphID = i4119[1]
  return i4118
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4122 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4123 = data
  i4122.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4123[0], i4122.m_FirstAdjustmentRecord)
  i4122.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4123[1], i4122.m_SecondAdjustmentRecord)
  i4122.m_FeatureLookupFlags = i4123[2]
  return i4122
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4126 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4127 = data
  i4126.m_BaseGlyphID = i4127[0]
  i4126.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4127[1], i4126.m_BaseGlyphAnchorPoint)
  i4126.m_MarkGlyphID = i4127[2]
  i4126.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4127[3], i4126.m_MarkPositionAdjustment)
  return i4126
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4130 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4131 = data
  i4130.m_BaseMarkGlyphID = i4131[0]
  i4130.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4131[1], i4130.m_BaseMarkGlyphAnchorPoint)
  i4130.m_CombiningMarkGlyphID = i4131[2]
  i4130.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4131[3], i4130.m_CombiningMarkPositionAdjustment)
  return i4130
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4136 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4137 = data
  request.r(i4137[0], i4137[1], 0, i4136, 'regularTypeface')
  request.r(i4137[2], i4137[3], 0, i4136, 'italicTypeface')
  return i4136
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4138 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4139 = data
  i4138.Name = i4139[0]
  i4138.PointSize = i4139[1]
  i4138.Scale = i4139[2]
  i4138.CharacterCount = i4139[3]
  i4138.LineHeight = i4139[4]
  i4138.Baseline = i4139[5]
  i4138.Ascender = i4139[6]
  i4138.CapHeight = i4139[7]
  i4138.Descender = i4139[8]
  i4138.CenterLine = i4139[9]
  i4138.SuperscriptOffset = i4139[10]
  i4138.SubscriptOffset = i4139[11]
  i4138.SubSize = i4139[12]
  i4138.Underline = i4139[13]
  i4138.UnderlineThickness = i4139[14]
  i4138.strikethrough = i4139[15]
  i4138.strikethroughThickness = i4139[16]
  i4138.TabWidth = i4139[17]
  i4138.Padding = i4139[18]
  i4138.AtlasWidth = i4139[19]
  i4138.AtlasHeight = i4139[20]
  return i4138
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4143 = data
  i4142.id = i4143[0]
  i4142.x = i4143[1]
  i4142.y = i4143[2]
  i4142.width = i4143[3]
  i4142.height = i4143[4]
  i4142.xOffset = i4143[5]
  i4142.yOffset = i4143[6]
  i4142.xAdvance = i4143[7]
  i4142.scale = i4143[8]
  return i4142
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.KerningTable' )
  var i4145 = data
  var i4147 = i4145[0]
  var i4146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.add(request.d('TMPro.KerningPair', i4147[i + 0]));
  }
  i4144.kerningPairs = i4146
  return i4144
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4150 = root || request.c( 'TMPro.KerningPair' )
  var i4151 = data
  i4150.xOffset = i4151[0]
  i4150.m_FirstGlyph = i4151[1]
  i4150.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4151[2], i4150.m_FirstGlyphAdjustments)
  i4150.m_SecondGlyph = i4151[3]
  i4150.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4151[4], i4150.m_SecondGlyphAdjustments)
  i4150.m_IgnoreSpacingAdjustments = !!i4151[5]
  return i4150
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4152 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4153 = data
  i4152.m_FaceIndex = i4153[0]
  i4152.m_FamilyName = i4153[1]
  i4152.m_StyleName = i4153[2]
  i4152.m_PointSize = i4153[3]
  i4152.m_Scale = i4153[4]
  i4152.m_UnitsPerEM = i4153[5]
  i4152.m_LineHeight = i4153[6]
  i4152.m_AscentLine = i4153[7]
  i4152.m_CapLine = i4153[8]
  i4152.m_MeanLine = i4153[9]
  i4152.m_Baseline = i4153[10]
  i4152.m_DescentLine = i4153[11]
  i4152.m_SuperscriptOffset = i4153[12]
  i4152.m_SuperscriptSize = i4153[13]
  i4152.m_SubscriptOffset = i4153[14]
  i4152.m_SubscriptSize = i4153[15]
  i4152.m_UnderlineOffset = i4153[16]
  i4152.m_UnderlineThickness = i4153[17]
  i4152.m_StrikethroughOffset = i4153[18]
  i4152.m_StrikethroughThickness = i4153[19]
  i4152.m_TabWidth = i4153[20]
  return i4152
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4154 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4155 = data
  i4154.useSafeMode = !!i4155[0]
  i4154.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4155[1], i4154.safeModeOptions)
  i4154.timeScale = i4155[2]
  i4154.unscaledTimeScale = i4155[3]
  i4154.useSmoothDeltaTime = !!i4155[4]
  i4154.maxSmoothUnscaledTime = i4155[5]
  i4154.rewindCallbackMode = i4155[6]
  i4154.showUnityEditorReport = !!i4155[7]
  i4154.logBehaviour = i4155[8]
  i4154.drawGizmos = !!i4155[9]
  i4154.defaultRecyclable = !!i4155[10]
  i4154.defaultAutoPlay = i4155[11]
  i4154.defaultUpdateType = i4155[12]
  i4154.defaultTimeScaleIndependent = !!i4155[13]
  i4154.defaultEaseType = i4155[14]
  i4154.defaultEaseOvershootOrAmplitude = i4155[15]
  i4154.defaultEasePeriod = i4155[16]
  i4154.defaultAutoKill = !!i4155[17]
  i4154.defaultLoopType = i4155[18]
  i4154.debugMode = !!i4155[19]
  i4154.debugStoreTargetId = !!i4155[20]
  i4154.showPreviewPanel = !!i4155[21]
  i4154.storeSettingsLocation = i4155[22]
  i4154.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4155[23], i4154.modules)
  i4154.createASMDEF = !!i4155[24]
  i4154.showPlayingTweens = !!i4155[25]
  i4154.showPausedTweens = !!i4155[26]
  return i4154
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4157 = data
  i4156.logBehaviour = i4157[0]
  i4156.nestedTweenFailureBehaviour = i4157[1]
  return i4156
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4158 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4159 = data
  i4158.showPanel = !!i4159[0]
  i4158.audioEnabled = !!i4159[1]
  i4158.physicsEnabled = !!i4159[2]
  i4158.physics2DEnabled = !!i4159[3]
  i4158.spriteEnabled = !!i4159[4]
  i4158.uiEnabled = !!i4159[5]
  i4158.textMeshProEnabled = !!i4159[6]
  i4158.tk2DEnabled = !!i4159[7]
  i4158.deAudioEnabled = !!i4159[8]
  i4158.deUnityExtendedEnabled = !!i4159[9]
  i4158.epoOutlineEnabled = !!i4159[10]
  return i4158
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4160 = root || request.c( 'TMPro.TMP_Settings' )
  var i4161 = data
  i4160.assetVersion = i4161[0]
  i4160.m_TextWrappingMode = i4161[1]
  i4160.m_enableKerning = !!i4161[2]
  var i4163 = i4161[3]
  var i4162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.add(i4163[i + 0]);
  }
  i4160.m_ActiveFontFeatures = i4162
  i4160.m_enableExtraPadding = !!i4161[4]
  i4160.m_enableTintAllSprites = !!i4161[5]
  i4160.m_enableParseEscapeCharacters = !!i4161[6]
  i4160.m_EnableRaycastTarget = !!i4161[7]
  i4160.m_GetFontFeaturesAtRuntime = !!i4161[8]
  i4160.m_missingGlyphCharacter = i4161[9]
  i4160.m_ClearDynamicDataOnBuild = !!i4161[10]
  i4160.m_warningsDisabled = !!i4161[11]
  request.r(i4161[12], i4161[13], 0, i4160, 'm_defaultFontAsset')
  i4160.m_defaultFontAssetPath = i4161[14]
  i4160.m_defaultFontSize = i4161[15]
  i4160.m_defaultAutoSizeMinRatio = i4161[16]
  i4160.m_defaultAutoSizeMaxRatio = i4161[17]
  i4160.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4161[18], i4161[19] )
  i4160.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4161[20], i4161[21] )
  i4160.m_autoSizeTextContainer = !!i4161[22]
  i4160.m_IsTextObjectScaleStatic = !!i4161[23]
  var i4165 = i4161[24]
  var i4164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4165.length; i += 2) {
  request.r(i4165[i + 0], i4165[i + 1], 1, i4164, '')
  }
  i4160.m_fallbackFontAssets = i4164
  i4160.m_matchMaterialPreset = !!i4161[25]
  i4160.m_HideSubTextObjects = !!i4161[26]
  request.r(i4161[27], i4161[28], 0, i4160, 'm_defaultSpriteAsset')
  i4160.m_defaultSpriteAssetPath = i4161[29]
  i4160.m_enableEmojiSupport = !!i4161[30]
  i4160.m_MissingCharacterSpriteUnicode = i4161[31]
  var i4167 = i4161[32]
  var i4166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4167.length; i += 2) {
  request.r(i4167[i + 0], i4167[i + 1], 1, i4166, '')
  }
  i4160.m_EmojiFallbackTextAssets = i4166
  i4160.m_defaultColorGradientPresetsPath = i4161[33]
  request.r(i4161[34], i4161[35], 0, i4160, 'm_defaultStyleSheet')
  i4160.m_StyleSheetsResourcePath = i4161[36]
  request.r(i4161[37], i4161[38], 0, i4160, 'm_leadingCharacters')
  request.r(i4161[39], i4161[40], 0, i4160, 'm_followingCharacters')
  i4160.m_UseModernHangulLineBreakingRules = !!i4161[41]
  return i4160
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4170 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4171 = data
  request.r(i4171[0], i4171[1], 0, i4170, 'spriteSheet')
  var i4173 = i4171[2]
  var i4172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.add(request.d('TMPro.TMP_Sprite', i4173[i + 0]));
  }
  i4170.spriteInfoList = i4172
  var i4175 = i4171[3]
  var i4174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4175.length; i += 2) {
  request.r(i4175[i + 0], i4175[i + 1], 1, i4174, '')
  }
  i4170.fallbackSpriteAssets = i4174
  var i4177 = i4171[4]
  var i4176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4177.length; i += 1) {
    i4176.add(request.d('TMPro.TMP_SpriteCharacter', i4177[i + 0]));
  }
  i4170.m_SpriteCharacterTable = i4176
  var i4179 = i4171[5]
  var i4178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.add(request.d('TMPro.TMP_SpriteGlyph', i4179[i + 0]));
  }
  i4170.m_GlyphTable = i4178
  i4170.m_Version = i4171[6]
  i4170.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4171[7], i4170.m_FaceInfo)
  request.r(i4171[8], i4171[9], 0, i4170, 'm_Material')
  return i4170
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4182 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4183 = data
  i4182.name = i4183[0]
  i4182.hashCode = i4183[1]
  i4182.unicode = i4183[2]
  i4182.pivot = new pc.Vec2( i4183[3], i4183[4] )
  request.r(i4183[5], i4183[6], 0, i4182, 'sprite')
  i4182.id = i4183[7]
  i4182.x = i4183[8]
  i4182.y = i4183[9]
  i4182.width = i4183[10]
  i4182.height = i4183[11]
  i4182.xOffset = i4183[12]
  i4182.yOffset = i4183[13]
  i4182.xAdvance = i4183[14]
  i4182.scale = i4183[15]
  return i4182
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4188 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4189 = data
  i4188.m_Name = i4189[0]
  i4188.m_ElementType = i4189[1]
  i4188.m_Unicode = i4189[2]
  i4188.m_GlyphIndex = i4189[3]
  i4188.m_Scale = i4189[4]
  return i4188
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4192 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4193 = data
  request.r(i4193[0], i4193[1], 0, i4192, 'sprite')
  i4192.m_Index = i4193[2]
  i4192.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4193[3], i4192.m_Metrics)
  i4192.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4193[4], i4192.m_GlyphRect)
  i4192.m_Scale = i4193[5]
  i4192.m_AtlasIndex = i4193[6]
  i4192.m_ClassDefinitionType = i4193[7]
  return i4192
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4194 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4195 = data
  var i4197 = i4195[0]
  var i4196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.add(request.d('TMPro.TMP_Style', i4197[i + 0]));
  }
  i4194.m_StyleList = i4196
  return i4194
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4200 = root || request.c( 'TMPro.TMP_Style' )
  var i4201 = data
  i4200.m_Name = i4201[0]
  i4200.m_HashCode = i4201[1]
  i4200.m_OpeningDefinition = i4201[2]
  i4200.m_ClosingDefinition = i4201[3]
  i4200.m_OpeningTagArray = i4201[4]
  i4200.m_ClosingTagArray = i4201[5]
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4203 = data
  var i4205 = i4203[0]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4205[i + 0]) );
  }
  i4202.files = i4204
  i4202.componentToPrefabIds = i4203[1]
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4209 = data
  i4208.path = i4209[0]
  request.r(i4209[1], i4209[2], 0, i4208, 'unityObject')
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4211 = data
  var i4213 = i4211[0]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 1) {
    i4212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4213[i + 0]) );
  }
  i4210.scriptsExecutionOrder = i4212
  var i4215 = i4211[1]
  var i4214 = []
  for(var i = 0; i < i4215.length; i += 1) {
    i4214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4215[i + 0]) );
  }
  i4210.sortingLayers = i4214
  var i4217 = i4211[2]
  var i4216 = []
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4217[i + 0]) );
  }
  i4210.cullingLayers = i4216
  i4210.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4211[3], i4210.timeSettings)
  i4210.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4211[4], i4210.physicsSettings)
  i4210.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4211[5], i4210.physics2DSettings)
  i4210.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4211[6], i4210.qualitySettings)
  i4210.enableRealtimeShadows = !!i4211[7]
  i4210.enableAutoInstancing = !!i4211[8]
  i4210.enableStaticBatching = !!i4211[9]
  i4210.enableDynamicBatching = !!i4211[10]
  i4210.usePreservativeDynamicBatching = !!i4211[11]
  i4210.lightmapEncodingQuality = i4211[12]
  i4210.desiredColorSpace = i4211[13]
  var i4219 = i4211[14]
  var i4218 = []
  for(var i = 0; i < i4219.length; i += 1) {
    i4218.push( i4219[i + 0] );
  }
  i4210.allTags = i4218
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4223 = data
  i4222.name = i4223[0]
  i4222.value = i4223[1]
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4227 = data
  i4226.id = i4227[0]
  i4226.name = i4227[1]
  i4226.value = i4227[2]
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4231 = data
  i4230.id = i4231[0]
  i4230.name = i4231[1]
  return i4230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4233 = data
  i4232.fixedDeltaTime = i4233[0]
  i4232.maximumDeltaTime = i4233[1]
  i4232.timeScale = i4233[2]
  i4232.maximumParticleTimestep = i4233[3]
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4235 = data
  i4234.gravity = new pc.Vec3( i4235[0], i4235[1], i4235[2] )
  i4234.defaultSolverIterations = i4235[3]
  i4234.bounceThreshold = i4235[4]
  i4234.autoSyncTransforms = !!i4235[5]
  i4234.autoSimulation = !!i4235[6]
  var i4237 = i4235[7]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4237[i + 0]) );
  }
  i4234.collisionMatrix = i4236
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4241 = data
  i4240.enabled = !!i4241[0]
  i4240.layerId = i4241[1]
  i4240.otherLayerId = i4241[2]
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4243 = data
  request.r(i4243[0], i4243[1], 0, i4242, 'material')
  i4242.gravity = new pc.Vec2( i4243[2], i4243[3] )
  i4242.positionIterations = i4243[4]
  i4242.velocityIterations = i4243[5]
  i4242.velocityThreshold = i4243[6]
  i4242.maxLinearCorrection = i4243[7]
  i4242.maxAngularCorrection = i4243[8]
  i4242.maxTranslationSpeed = i4243[9]
  i4242.maxRotationSpeed = i4243[10]
  i4242.baumgarteScale = i4243[11]
  i4242.baumgarteTOIScale = i4243[12]
  i4242.timeToSleep = i4243[13]
  i4242.linearSleepTolerance = i4243[14]
  i4242.angularSleepTolerance = i4243[15]
  i4242.defaultContactOffset = i4243[16]
  i4242.autoSimulation = !!i4243[17]
  i4242.queriesHitTriggers = !!i4243[18]
  i4242.queriesStartInColliders = !!i4243[19]
  i4242.callbacksOnDisable = !!i4243[20]
  i4242.reuseCollisionCallbacks = !!i4243[21]
  i4242.autoSyncTransforms = !!i4243[22]
  var i4245 = i4243[23]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 1) {
    i4244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4245[i + 0]) );
  }
  i4242.collisionMatrix = i4244
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4249 = data
  i4248.enabled = !!i4249[0]
  i4248.layerId = i4249[1]
  i4248.otherLayerId = i4249[2]
  return i4248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4251 = data
  var i4253 = i4251[0]
  var i4252 = []
  for(var i = 0; i < i4253.length; i += 1) {
    i4252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4253[i + 0]) );
  }
  i4250.qualityLevels = i4252
  var i4255 = i4251[1]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( i4255[i + 0] );
  }
  i4250.names = i4254
  i4250.shadows = i4251[2]
  i4250.anisotropicFiltering = i4251[3]
  i4250.antiAliasing = i4251[4]
  i4250.lodBias = i4251[5]
  i4250.shadowCascades = i4251[6]
  i4250.shadowDistance = i4251[7]
  i4250.shadowmaskMode = i4251[8]
  i4250.shadowProjection = i4251[9]
  i4250.shadowResolution = i4251[10]
  i4250.softParticles = !!i4251[11]
  i4250.softVegetation = !!i4251[12]
  i4250.activeColorSpace = i4251[13]
  i4250.desiredColorSpace = i4251[14]
  i4250.masterTextureLimit = i4251[15]
  i4250.maxQueuedFrames = i4251[16]
  i4250.particleRaycastBudget = i4251[17]
  i4250.pixelLightCount = i4251[18]
  i4250.realtimeReflectionProbes = !!i4251[19]
  i4250.shadowCascade2Split = i4251[20]
  i4250.shadowCascade4Split = new pc.Vec3( i4251[21], i4251[22], i4251[23] )
  i4250.streamingMipmapsActive = !!i4251[24]
  i4250.vSyncCount = i4251[25]
  i4250.asyncUploadBufferSize = i4251[26]
  i4250.asyncUploadTimeSlice = i4251[27]
  i4250.billboardsFaceCameraPosition = !!i4251[28]
  i4250.shadowNearPlaneOffset = i4251[29]
  i4250.streamingMipmapsMemoryBudget = i4251[30]
  i4250.maximumLODLevel = i4251[31]
  i4250.streamingMipmapsAddAllCameras = !!i4251[32]
  i4250.streamingMipmapsMaxLevelReduction = i4251[33]
  i4250.streamingMipmapsRenderersPerFrame = i4251[34]
  i4250.resolutionScalingFixedDPIFactor = i4251[35]
  i4250.streamingMipmapsMaxFileIORequests = i4251[36]
  i4250.currentQualityLevel = i4251[37]
  return i4250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i4258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i4259 = data
  i4258.name = i4259[0]
  var i4261 = i4259[1]
  var i4260 = []
  for(var i = 0; i < i4261.length; i += 1) {
    i4260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i4261[i + 0]) );
  }
  i4258.tos = i4260
  var i4263 = i4259[2]
  var i4262 = []
  for(var i = 0; i < i4263.length; i += 1) {
    i4262.push( i4263[i + 0] );
  }
  i4258.constant = i4262
  i4258.isValid = !!i4259[3]
  i4258.isHuman = !!i4259[4]
  i4258.hasRootMotion = !!i4259[5]
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i4266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i4267 = data
  i4266.hash = i4267[0]
  i4266.path = i4267[1]
  return i4266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4271 = data
  i4270.weight = i4271[0]
  i4270.vertices = i4271[1]
  i4270.normals = i4271[2]
  i4270.tangents = i4271[3]
  return i4270
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4272 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4273 = data
  request.r(i4273[0], i4273[1], 0, i4272, 'm_ObjectArgument')
  i4272.m_ObjectArgumentAssemblyTypeName = i4273[2]
  i4272.m_IntArgument = i4273[3]
  i4272.m_FloatArgument = i4273[4]
  i4272.m_StringArgument = i4273[5]
  i4272.m_BoolArgument = !!i4273[6]
  return i4272
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4274 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4275 = data
  i4274.m_GlyphIndex = i4275[0]
  i4274.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4275[1], i4274.m_GlyphValueRecord)
  return i4274
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4276 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4277 = data
  i4276.m_XCoordinate = i4277[0]
  i4276.m_YCoordinate = i4277[1]
  return i4276
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4278 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4279 = data
  i4278.m_XPositionAdjustment = i4279[0]
  i4278.m_YPositionAdjustment = i4279[1]
  return i4278
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4280 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4281 = data
  i4280.xPlacement = i4281[0]
  i4280.yPlacement = i4281[1]
  i4280.xAdvance = i4281[2]
  i4280.yAdvance = i4281[3]
  return i4280
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4282 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4283 = data
  i4282.m_XPlacement = i4283[0]
  i4282.m_YPlacement = i4283[1]
  i4282.m_XAdvance = i4283[2]
  i4282.m_YAdvance = i4283[3]
  return i4282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[49],"75":[53],"76":[26],"77":[26],"78":[26],"79":[26],"80":[26],"81":[26],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[53],"97":[34],"98":[99],"100":[99],"7":[6],"11":[8],"101":[6],"102":[34,6],"19":[6,13],"103":[6],"104":[13,6],"105":[34],"106":[13,6],"107":[6],"108":[109],"110":[109],"111":[109],"112":[6],"113":[6],"9":[7],"14":[13,6],"114":[6],"8":[7],"115":[6],"116":[6],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"18":[6],"122":[6],"123":[13,6],"124":[6],"125":[6],"126":[6],"127":[6],"128":[13,6],"129":[6],"130":[4],"131":[4],"5":[4],"132":[4],"133":[53],"134":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","UnityEngine.GameObject","AudioController","LunaController","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "30.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SBFM_V03_HoaiTT_HuyNQ";

Deserializers.lunaAppID = "41535";

Deserializers.projectId = "1cbfda1e906e7db4a9fd3c53e24fceff";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1675";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4820";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "eaa6348b-bcab-49ac-8426-d5c7cebf2e62";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

