var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6570 = root || request.c( 'UnityEngine.JointSpring' )
  var i6571 = data
  i6570.spring = i6571[0]
  i6570.damper = i6571[1]
  i6570.targetPosition = i6571[2]
  return i6570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6572 = root || request.c( 'UnityEngine.JointMotor' )
  var i6573 = data
  i6572.m_TargetVelocity = i6573[0]
  i6572.m_Force = i6573[1]
  i6572.m_FreeSpin = i6573[2]
  return i6572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6574 = root || request.c( 'UnityEngine.JointLimits' )
  var i6575 = data
  i6574.m_Min = i6575[0]
  i6574.m_Max = i6575[1]
  i6574.m_Bounciness = i6575[2]
  i6574.m_BounceMinVelocity = i6575[3]
  i6574.m_ContactDistance = i6575[4]
  i6574.minBounce = i6575[5]
  i6574.maxBounce = i6575[6]
  return i6574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6576 = root || request.c( 'UnityEngine.JointDrive' )
  var i6577 = data
  i6576.m_PositionSpring = i6577[0]
  i6576.m_PositionDamper = i6577[1]
  i6576.m_MaximumForce = i6577[2]
  i6576.m_UseAcceleration = i6577[3]
  return i6576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6579 = data
  i6578.m_Spring = i6579[0]
  i6578.m_Damper = i6579[1]
  return i6578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6581 = data
  i6580.m_Limit = i6581[0]
  i6580.m_Bounciness = i6581[1]
  i6580.m_ContactDistance = i6581[2]
  return i6580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6583 = data
  i6582.m_ExtremumSlip = i6583[0]
  i6582.m_ExtremumValue = i6583[1]
  i6582.m_AsymptoteSlip = i6583[2]
  i6582.m_AsymptoteValue = i6583[3]
  i6582.m_Stiffness = i6583[4]
  return i6582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6585 = data
  i6584.m_LowerAngle = i6585[0]
  i6584.m_UpperAngle = i6585[1]
  return i6584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6587 = data
  i6586.m_MotorSpeed = i6587[0]
  i6586.m_MaximumMotorTorque = i6587[1]
  return i6586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6589 = data
  i6588.m_DampingRatio = i6589[0]
  i6588.m_Frequency = i6589[1]
  i6588.m_Angle = i6589[2]
  return i6588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6591 = data
  i6590.m_LowerTranslation = i6591[0]
  i6590.m_UpperTranslation = i6591[1]
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6593 = data
  i6592.name = i6593[0]
  i6592.width = i6593[1]
  i6592.height = i6593[2]
  i6592.mipmapCount = i6593[3]
  i6592.anisoLevel = i6593[4]
  i6592.filterMode = i6593[5]
  i6592.hdr = !!i6593[6]
  i6592.format = i6593[7]
  i6592.wrapMode = i6593[8]
  i6592.alphaIsTransparency = !!i6593[9]
  i6592.alphaSource = i6593[10]
  i6592.graphicsFormat = i6593[11]
  i6592.sRGBTexture = !!i6593[12]
  i6592.desiredColorSpace = i6593[13]
  i6592.wrapU = i6593[14]
  i6592.wrapV = i6593[15]
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6594 = root || new pc.UnityMaterial()
  var i6595 = data
  i6594.name = i6595[0]
  request.r(i6595[1], i6595[2], 0, i6594, 'shader')
  i6594.renderQueue = i6595[3]
  i6594.enableInstancing = !!i6595[4]
  var i6597 = i6595[5]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 1) {
    i6596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6597[i + 0]) );
  }
  i6594.floatParameters = i6596
  var i6599 = i6595[6]
  var i6598 = []
  for(var i = 0; i < i6599.length; i += 1) {
    i6598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6599[i + 0]) );
  }
  i6594.colorParameters = i6598
  var i6601 = i6595[7]
  var i6600 = []
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6601[i + 0]) );
  }
  i6594.vectorParameters = i6600
  var i6603 = i6595[8]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6603[i + 0]) );
  }
  i6594.textureParameters = i6602
  var i6605 = i6595[9]
  var i6604 = []
  for(var i = 0; i < i6605.length; i += 1) {
    i6604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6605[i + 0]) );
  }
  i6594.materialFlags = i6604
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6609 = data
  i6608.name = i6609[0]
  i6608.value = i6609[1]
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6613 = data
  i6612.name = i6613[0]
  i6612.value = new pc.Color(i6613[1], i6613[2], i6613[3], i6613[4])
  return i6612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6617 = data
  i6616.name = i6617[0]
  i6616.value = new pc.Vec4( i6617[1], i6617[2], i6617[3], i6617[4] )
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6621 = data
  i6620.name = i6621[0]
  request.r(i6621[1], i6621[2], 0, i6620, 'value')
  return i6620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6625 = data
  i6624.name = i6625[0]
  i6624.enabled = !!i6625[1]
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6627 = data
  i6626.name = i6627[0]
  i6626.halfPrecision = !!i6627[1]
  i6626.useSimplification = !!i6627[2]
  i6626.useUInt32IndexFormat = !!i6627[3]
  i6626.vertexCount = i6627[4]
  i6626.aabb = i6627[5]
  var i6629 = i6627[6]
  var i6628 = []
  for(var i = 0; i < i6629.length; i += 1) {
    i6628.push( !!i6629[i + 0] );
  }
  i6626.streams = i6628
  i6626.vertices = i6627[7]
  var i6631 = i6627[8]
  var i6630 = []
  for(var i = 0; i < i6631.length; i += 1) {
    i6630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6631[i + 0]) );
  }
  i6626.subMeshes = i6630
  var i6633 = i6627[9]
  var i6632 = []
  for(var i = 0; i < i6633.length; i += 16) {
    i6632.push( new pc.Mat4().setData(i6633[i + 0], i6633[i + 1], i6633[i + 2], i6633[i + 3],  i6633[i + 4], i6633[i + 5], i6633[i + 6], i6633[i + 7],  i6633[i + 8], i6633[i + 9], i6633[i + 10], i6633[i + 11],  i6633[i + 12], i6633[i + 13], i6633[i + 14], i6633[i + 15]) );
  }
  i6626.bindposes = i6632
  var i6635 = i6627[10]
  var i6634 = []
  for(var i = 0; i < i6635.length; i += 1) {
    i6634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6635[i + 0]) );
  }
  i6626.blendShapes = i6634
  return i6626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6641 = data
  i6640.triangles = i6641[0]
  return i6640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6647 = data
  i6646.name = i6647[0]
  var i6649 = i6647[1]
  var i6648 = []
  for(var i = 0; i < i6649.length; i += 1) {
    i6648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6649[i + 0]) );
  }
  i6646.frames = i6648
  return i6646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6651 = data
  i6650.name = i6651[0]
  i6650.atlasId = i6651[1]
  i6650.mipmapCount = i6651[2]
  i6650.hdr = !!i6651[3]
  i6650.size = i6651[4]
  i6650.anisoLevel = i6651[5]
  i6650.filterMode = i6651[6]
  var i6653 = i6651[7]
  var i6652 = []
  for(var i = 0; i < i6653.length; i += 4) {
    i6652.push( UnityEngine.Rect.MinMaxRect(i6653[i + 0], i6653[i + 1], i6653[i + 2], i6653[i + 3]) );
  }
  i6650.rects = i6652
  i6650.wrapU = i6651[8]
  i6650.wrapV = i6651[9]
  return i6650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6657 = data
  i6656.name = i6657[0]
  i6656.index = i6657[1]
  i6656.startup = !!i6657[2]
  return i6656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6659 = data
  request.r(i6659[0], i6659[1], 0, i6658, 'm_FirstSelected')
  i6658.m_sendNavigationEvents = !!i6659[2]
  i6658.m_DragThreshold = i6659[3]
  return i6658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6661 = data
  i6660.m_HorizontalAxis = i6661[0]
  i6660.m_VerticalAxis = i6661[1]
  i6660.m_SubmitButton = i6661[2]
  i6660.m_CancelButton = i6661[3]
  i6660.m_InputActionsPerSecond = i6661[4]
  i6660.m_RepeatDelay = i6661[5]
  i6660.m_ForceModuleActive = !!i6661[6]
  i6660.m_SendPointerHoverToParent = !!i6661[7]
  return i6660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6663 = data
  i6662.name = i6663[0]
  i6662.tagId = i6663[1]
  i6662.enabled = !!i6663[2]
  i6662.isStatic = !!i6663[3]
  i6662.layer = i6663[4]
  return i6662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6665 = data
  i6664.pivot = new pc.Vec2( i6665[0], i6665[1] )
  i6664.anchorMin = new pc.Vec2( i6665[2], i6665[3] )
  i6664.anchorMax = new pc.Vec2( i6665[4], i6665[5] )
  i6664.sizeDelta = new pc.Vec2( i6665[6], i6665[7] )
  i6664.anchoredPosition3D = new pc.Vec3( i6665[8], i6665[9], i6665[10] )
  i6664.rotation = new pc.Quat(i6665[11], i6665[12], i6665[13], i6665[14])
  i6664.scale = new pc.Vec3( i6665[15], i6665[16], i6665[17] )
  return i6664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6667 = data
  i6666.planeDistance = i6667[0]
  i6666.referencePixelsPerUnit = i6667[1]
  i6666.isFallbackOverlay = !!i6667[2]
  i6666.renderMode = i6667[3]
  i6666.renderOrder = i6667[4]
  i6666.sortingLayerName = i6667[5]
  i6666.sortingOrder = i6667[6]
  i6666.scaleFactor = i6667[7]
  request.r(i6667[8], i6667[9], 0, i6666, 'worldCamera')
  i6666.overrideSorting = !!i6667[10]
  i6666.pixelPerfect = !!i6667[11]
  i6666.targetDisplay = i6667[12]
  i6666.overridePixelPerfect = !!i6667[13]
  i6666.enabled = !!i6667[14]
  return i6666
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6668 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6669 = data
  i6668.m_UiScaleMode = i6669[0]
  i6668.m_ReferencePixelsPerUnit = i6669[1]
  i6668.m_ScaleFactor = i6669[2]
  i6668.m_ReferenceResolution = new pc.Vec2( i6669[3], i6669[4] )
  i6668.m_ScreenMatchMode = i6669[5]
  i6668.m_MatchWidthOrHeight = i6669[6]
  i6668.m_PhysicalUnit = i6669[7]
  i6668.m_FallbackScreenDPI = i6669[8]
  i6668.m_DefaultSpriteDPI = i6669[9]
  i6668.m_DynamicPixelsPerUnit = i6669[10]
  i6668.m_PresetInfoIsWorld = !!i6669[11]
  return i6668
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6670 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6671 = data
  i6670.m_IgnoreReversedGraphics = !!i6671[0]
  i6670.m_BlockingObjects = i6671[1]
  i6670.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6671[2] )
  return i6670
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i6672 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i6673 = data
  i6672._referenceResolution = new pc.Vec2( i6673[0], i6673[1] )
  i6672._portraitMatch = i6673[2]
  i6672._landscapeMatch = i6673[3]
  i6672._squareMatch = i6673[4]
  i6672._portraitAspectThreshold = i6673[5]
  i6672._landscapeAspectThreshold = i6673[6]
  i6672._aspectEpsilon = i6673[7]
  return i6672
}

Deserializers["Joystick"] = function (request, data, root) {
  var i6674 = root || request.c( 'Joystick' )
  var i6675 = data
  request.r(i6675[0], i6675[1], 0, i6674, 'background')
  request.r(i6675[2], i6675[3], 0, i6674, 'joy')
  i6674.deadZone = i6675[4]
  return i6674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6677 = data
  i6676.cullTransparentMesh = !!i6677[0]
  return i6676
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6678 = root || request.c( 'UnityEngine.UI.Image' )
  var i6679 = data
  request.r(i6679[0], i6679[1], 0, i6678, 'm_Sprite')
  i6678.m_Type = i6679[2]
  i6678.m_PreserveAspect = !!i6679[3]
  i6678.m_FillCenter = !!i6679[4]
  i6678.m_FillMethod = i6679[5]
  i6678.m_FillAmount = i6679[6]
  i6678.m_FillClockwise = !!i6679[7]
  i6678.m_FillOrigin = i6679[8]
  i6678.m_UseSpriteMesh = !!i6679[9]
  i6678.m_PixelsPerUnitMultiplier = i6679[10]
  request.r(i6679[11], i6679[12], 0, i6678, 'm_Material')
  i6678.m_Maskable = !!i6679[13]
  i6678.m_Color = new pc.Color(i6679[14], i6679[15], i6679[16], i6679[17])
  i6678.m_RaycastTarget = !!i6679[18]
  i6678.m_RaycastPadding = new pc.Vec4( i6679[19], i6679[20], i6679[21], i6679[22] )
  return i6678
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6680 = root || request.c( 'UnityEngine.UI.Button' )
  var i6681 = data
  i6680.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6681[0], i6680.m_OnClick)
  i6680.m_Navigation = request.d('UnityEngine.UI.Navigation', i6681[1], i6680.m_Navigation)
  i6680.m_Transition = i6681[2]
  i6680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6681[3], i6680.m_Colors)
  i6680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6681[4], i6680.m_SpriteState)
  i6680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6681[5], i6680.m_AnimationTriggers)
  i6680.m_Interactable = !!i6681[6]
  request.r(i6681[7], i6681[8], 0, i6680, 'm_TargetGraphic')
  return i6680
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6682 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6683 = data
  i6682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6683[0], i6682.m_PersistentCalls)
  return i6682
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6684 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6685 = data
  var i6687 = i6685[0]
  var i6686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6687.length; i += 1) {
    i6686.add(request.d('UnityEngine.Events.PersistentCall', i6687[i + 0]));
  }
  i6684.m_Calls = i6686
  return i6684
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6690 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6691 = data
  request.r(i6691[0], i6691[1], 0, i6690, 'm_Target')
  i6690.m_TargetAssemblyTypeName = i6691[2]
  i6690.m_MethodName = i6691[3]
  i6690.m_Mode = i6691[4]
  i6690.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6691[5], i6690.m_Arguments)
  i6690.m_CallState = i6691[6]
  return i6690
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6692 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6693 = data
  i6692.m_Mode = i6693[0]
  i6692.m_WrapAround = !!i6693[1]
  request.r(i6693[2], i6693[3], 0, i6692, 'm_SelectOnUp')
  request.r(i6693[4], i6693[5], 0, i6692, 'm_SelectOnDown')
  request.r(i6693[6], i6693[7], 0, i6692, 'm_SelectOnLeft')
  request.r(i6693[8], i6693[9], 0, i6692, 'm_SelectOnRight')
  return i6692
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6694 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6695 = data
  i6694.m_NormalColor = new pc.Color(i6695[0], i6695[1], i6695[2], i6695[3])
  i6694.m_HighlightedColor = new pc.Color(i6695[4], i6695[5], i6695[6], i6695[7])
  i6694.m_PressedColor = new pc.Color(i6695[8], i6695[9], i6695[10], i6695[11])
  i6694.m_SelectedColor = new pc.Color(i6695[12], i6695[13], i6695[14], i6695[15])
  i6694.m_DisabledColor = new pc.Color(i6695[16], i6695[17], i6695[18], i6695[19])
  i6694.m_ColorMultiplier = i6695[20]
  i6694.m_FadeDuration = i6695[21]
  return i6694
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6696 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6697 = data
  request.r(i6697[0], i6697[1], 0, i6696, 'm_HighlightedSprite')
  request.r(i6697[2], i6697[3], 0, i6696, 'm_PressedSprite')
  request.r(i6697[4], i6697[5], 0, i6696, 'm_SelectedSprite')
  request.r(i6697[6], i6697[7], 0, i6696, 'm_DisabledSprite')
  return i6696
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6698 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6699 = data
  i6698.m_NormalTrigger = i6699[0]
  i6698.m_HighlightedTrigger = i6699[1]
  i6698.m_PressedTrigger = i6699[2]
  i6698.m_SelectedTrigger = i6699[3]
  i6698.m_DisabledTrigger = i6699[4]
  return i6698
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i6700 = root || request.c( 'JumpButton' )
  var i6701 = data
  request.r(i6701[0], i6701[1], 0, i6700, 'button')
  return i6700
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6702 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6703 = data
  i6702.m_ShowMaskGraphic = !!i6703[0]
  return i6702
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6704 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6705 = data
  i6704.m_hasFontAssetChanged = !!i6705[0]
  request.r(i6705[1], i6705[2], 0, i6704, 'm_baseMaterial')
  i6704.m_maskOffset = new pc.Vec4( i6705[3], i6705[4], i6705[5], i6705[6] )
  i6704.m_text = i6705[7]
  i6704.m_isRightToLeft = !!i6705[8]
  request.r(i6705[9], i6705[10], 0, i6704, 'm_fontAsset')
  request.r(i6705[11], i6705[12], 0, i6704, 'm_sharedMaterial')
  var i6707 = i6705[13]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 2) {
  request.r(i6707[i + 0], i6707[i + 1], 2, i6706, '')
  }
  i6704.m_fontSharedMaterials = i6706
  request.r(i6705[14], i6705[15], 0, i6704, 'm_fontMaterial')
  var i6709 = i6705[16]
  var i6708 = []
  for(var i = 0; i < i6709.length; i += 2) {
  request.r(i6709[i + 0], i6709[i + 1], 2, i6708, '')
  }
  i6704.m_fontMaterials = i6708
  i6704.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6705[17], i6705[18], i6705[19], i6705[20])
  i6704.m_fontColor = new pc.Color(i6705[21], i6705[22], i6705[23], i6705[24])
  i6704.m_enableVertexGradient = !!i6705[25]
  i6704.m_colorMode = i6705[26]
  i6704.m_fontColorGradient = request.d('TMPro.VertexGradient', i6705[27], i6704.m_fontColorGradient)
  request.r(i6705[28], i6705[29], 0, i6704, 'm_fontColorGradientPreset')
  request.r(i6705[30], i6705[31], 0, i6704, 'm_spriteAsset')
  i6704.m_tintAllSprites = !!i6705[32]
  request.r(i6705[33], i6705[34], 0, i6704, 'm_StyleSheet')
  i6704.m_TextStyleHashCode = i6705[35]
  i6704.m_overrideHtmlColors = !!i6705[36]
  i6704.m_faceColor = UnityEngine.Color32.ConstructColor(i6705[37], i6705[38], i6705[39], i6705[40])
  i6704.m_fontSize = i6705[41]
  i6704.m_fontSizeBase = i6705[42]
  i6704.m_fontWeight = i6705[43]
  i6704.m_enableAutoSizing = !!i6705[44]
  i6704.m_fontSizeMin = i6705[45]
  i6704.m_fontSizeMax = i6705[46]
  i6704.m_fontStyle = i6705[47]
  i6704.m_HorizontalAlignment = i6705[48]
  i6704.m_VerticalAlignment = i6705[49]
  i6704.m_textAlignment = i6705[50]
  i6704.m_characterSpacing = i6705[51]
  i6704.m_wordSpacing = i6705[52]
  i6704.m_lineSpacing = i6705[53]
  i6704.m_lineSpacingMax = i6705[54]
  i6704.m_paragraphSpacing = i6705[55]
  i6704.m_charWidthMaxAdj = i6705[56]
  i6704.m_TextWrappingMode = i6705[57]
  i6704.m_wordWrappingRatios = i6705[58]
  i6704.m_overflowMode = i6705[59]
  request.r(i6705[60], i6705[61], 0, i6704, 'm_linkedTextComponent')
  request.r(i6705[62], i6705[63], 0, i6704, 'parentLinkedComponent')
  i6704.m_enableKerning = !!i6705[64]
  var i6711 = i6705[65]
  var i6710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6711.length; i += 1) {
    i6710.add(i6711[i + 0]);
  }
  i6704.m_ActiveFontFeatures = i6710
  i6704.m_enableExtraPadding = !!i6705[66]
  i6704.checkPaddingRequired = !!i6705[67]
  i6704.m_isRichText = !!i6705[68]
  i6704.m_parseCtrlCharacters = !!i6705[69]
  i6704.m_isOrthographic = !!i6705[70]
  i6704.m_isCullingEnabled = !!i6705[71]
  i6704.m_horizontalMapping = i6705[72]
  i6704.m_verticalMapping = i6705[73]
  i6704.m_uvLineOffset = i6705[74]
  i6704.m_geometrySortingOrder = i6705[75]
  i6704.m_IsTextObjectScaleStatic = !!i6705[76]
  i6704.m_VertexBufferAutoSizeReduction = !!i6705[77]
  i6704.m_useMaxVisibleDescender = !!i6705[78]
  i6704.m_pageToDisplay = i6705[79]
  i6704.m_margin = new pc.Vec4( i6705[80], i6705[81], i6705[82], i6705[83] )
  i6704.m_isUsingLegacyAnimationComponent = !!i6705[84]
  i6704.m_isVolumetricText = !!i6705[85]
  request.r(i6705[86], i6705[87], 0, i6704, 'm_Material')
  i6704.m_EmojiFallbackSupport = !!i6705[88]
  i6704.m_Maskable = !!i6705[89]
  i6704.m_Color = new pc.Color(i6705[90], i6705[91], i6705[92], i6705[93])
  i6704.m_RaycastTarget = !!i6705[94]
  i6704.m_RaycastPadding = new pc.Vec4( i6705[95], i6705[96], i6705[97], i6705[98] )
  return i6704
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6714 = root || request.c( 'TMPro.VertexGradient' )
  var i6715 = data
  i6714.topLeft = new pc.Color(i6715[0], i6715[1], i6715[2], i6715[3])
  i6714.topRight = new pc.Color(i6715[4], i6715[5], i6715[6], i6715[7])
  i6714.bottomLeft = new pc.Color(i6715[8], i6715[9], i6715[10], i6715[11])
  i6714.bottomRight = new pc.Color(i6715[12], i6715[13], i6715[14], i6715[15])
  return i6714
}

Deserializers["TutController"] = function (request, data, root) {
  var i6718 = root || request.c( 'TutController' )
  var i6719 = data
  request.r(i6719[0], i6719[1], 0, i6718, 'tutScene')
  request.r(i6719[2], i6719[3], 0, i6718, 'startTut')
  request.r(i6719[4], i6719[5], 0, i6718, 'playTut')
  request.r(i6719[6], i6719[7], 0, i6718, 'farTut')
  request.r(i6719[8], i6719[9], 0, i6718, 'failTut')
  return i6718
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6720 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6721 = data
  i6720.targetIsSelf = !!i6721[0]
  request.r(i6721[1], i6721[2], 0, i6720, 'targetGO')
  i6720.tweenTargetIsTargetGO = !!i6721[3]
  i6720.delay = i6721[4]
  i6720.duration = i6721[5]
  i6720.easeType = i6721[6]
  i6720.easeCurve = new pc.AnimationCurve( { keys_flow: i6721[7] } )
  i6720.loopType = i6721[8]
  i6720.loops = i6721[9]
  i6720.id = i6721[10]
  i6720.isRelative = !!i6721[11]
  i6720.isFrom = !!i6721[12]
  i6720.isIndependentUpdate = !!i6721[13]
  i6720.autoKill = !!i6721[14]
  i6720.autoGenerate = !!i6721[15]
  i6720.isActive = !!i6721[16]
  i6720.isValid = !!i6721[17]
  request.r(i6721[18], i6721[19], 0, i6720, 'target')
  i6720.animationType = i6721[20]
  i6720.targetType = i6721[21]
  i6720.forcedTargetType = i6721[22]
  i6720.autoPlay = !!i6721[23]
  i6720.useTargetAsV3 = !!i6721[24]
  i6720.endValueFloat = i6721[25]
  i6720.endValueV3 = new pc.Vec3( i6721[26], i6721[27], i6721[28] )
  i6720.endValueV2 = new pc.Vec2( i6721[29], i6721[30] )
  i6720.endValueColor = new pc.Color(i6721[31], i6721[32], i6721[33], i6721[34])
  i6720.endValueString = i6721[35]
  i6720.endValueRect = UnityEngine.Rect.MinMaxRect(i6721[36], i6721[37], i6721[38], i6721[39])
  request.r(i6721[40], i6721[41], 0, i6720, 'endValueTransform')
  i6720.optionalBool0 = !!i6721[42]
  i6720.optionalBool1 = !!i6721[43]
  i6720.optionalFloat0 = i6721[44]
  i6720.optionalInt0 = i6721[45]
  i6720.optionalRotationMode = i6721[46]
  i6720.optionalScrambleMode = i6721[47]
  i6720.optionalShakeRandomnessMode = i6721[48]
  i6720.optionalString = i6721[49]
  i6720.updateType = i6721[50]
  i6720.isSpeedBased = !!i6721[51]
  i6720.hasOnStart = !!i6721[52]
  i6720.hasOnPlay = !!i6721[53]
  i6720.hasOnUpdate = !!i6721[54]
  i6720.hasOnStepComplete = !!i6721[55]
  i6720.hasOnComplete = !!i6721[56]
  i6720.hasOnTweenCreated = !!i6721[57]
  i6720.hasOnRewind = !!i6721[58]
  i6720.onStart = request.d('UnityEngine.Events.UnityEvent', i6721[59], i6720.onStart)
  i6720.onPlay = request.d('UnityEngine.Events.UnityEvent', i6721[60], i6720.onPlay)
  i6720.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6721[61], i6720.onUpdate)
  i6720.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6721[62], i6720.onStepComplete)
  i6720.onComplete = request.d('UnityEngine.Events.UnityEvent', i6721[63], i6720.onComplete)
  i6720.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6721[64], i6720.onTweenCreated)
  i6720.onRewind = request.d('UnityEngine.Events.UnityEvent', i6721[65], i6720.onRewind)
  return i6720
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6722 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6723 = data
  i6722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6723[0], i6722.m_PersistentCalls)
  return i6722
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i6724 = root || request.c( 'HideOnPointer' )
  var i6725 = data
  i6724.OnPointerDownEvent = request.d('System.Action', i6725[0], i6724.OnPointerDownEvent)
  return i6724
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6726 = root || request.c( 'System.Action' )
  var i6727 = data
  return i6726
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i6728 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i6729 = data
  i6728.m_AspectMode = i6729[0]
  i6728.m_AspectRatio = i6729[1]
  return i6728
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i6730 = root || request.c( 'SelectPanel' )
  var i6731 = data
  request.r(i6731[0], i6731[1], 0, i6730, '_title')
  var i6733 = i6731[2]
  var i6732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i6733.length; i += 2) {
  request.r(i6733[i + 0], i6733[i + 1], 1, i6732, '')
  }
  i6730._buttonsSelectMap = i6732
  var i6735 = i6731[3]
  var i6734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i6735.length; i += 2) {
  request.r(i6735[i + 0], i6735[i + 1], 1, i6734, '')
  }
  i6730._buttonsCTA = i6734
  request.r(i6731[4], i6731[5], 0, i6730, '_lock')
  return i6730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6739 = data
  i6738.center = new pc.Vec3( i6739[0], i6739[1], i6739[2] )
  i6738.size = new pc.Vec3( i6739[3], i6739[4], i6739[5] )
  i6738.enabled = !!i6739[6]
  i6738.isTrigger = !!i6739[7]
  request.r(i6739[8], i6739[9], 0, i6738, 'material')
  return i6738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i6740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i6741 = data
  i6740.mass = i6741[0]
  i6740.drag = i6741[1]
  i6740.angularDrag = i6741[2]
  i6740.useGravity = !!i6741[3]
  i6740.isKinematic = !!i6741[4]
  i6740.constraints = i6741[5]
  i6740.maxAngularVelocity = i6741[6]
  i6740.collisionDetectionMode = i6741[7]
  i6740.interpolation = i6741[8]
  return i6740
}

Deserializers["Gift"] = function (request, data, root) {
  var i6742 = root || request.c( 'Gift' )
  var i6743 = data
  i6742.collectDone = !!i6743[0]
  var i6745 = i6743[1]
  var i6744 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i6745.length; i += 2) {
  request.r(i6745[i + 0], i6745[i + 1], 1, i6744, '')
  }
  i6742.hints = i6744
  request.r(i6743[2], i6743[3], 0, i6742, 'collectSound')
  request.r(i6743[4], i6743[5], 0, i6742, 'collectEffect')
  request.r(i6743[6], i6743[7], 0, i6742, 'arrow')
  return i6742
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i6748 = root || request.c( 'SoundHint' )
  var i6749 = data
  request.r(i6749[0], i6749[1], 0, i6748, 'Sound')
  request.r(i6749[2], i6749[3], 0, i6748, 'Source')
  return i6748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6751 = data
  request.r(i6751[0], i6751[1], 0, i6750, 'sharedMesh')
  return i6750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6753 = data
  request.r(i6753[0], i6753[1], 0, i6752, 'additionalVertexStreams')
  i6752.enabled = !!i6753[2]
  request.r(i6753[3], i6753[4], 0, i6752, 'sharedMaterial')
  var i6755 = i6753[5]
  var i6754 = []
  for(var i = 0; i < i6755.length; i += 2) {
  request.r(i6755[i + 0], i6755[i + 1], 2, i6754, '')
  }
  i6752.sharedMaterials = i6754
  i6752.receiveShadows = !!i6753[6]
  i6752.shadowCastingMode = i6753[7]
  i6752.sortingLayerID = i6753[8]
  i6752.sortingOrder = i6753[9]
  i6752.lightmapIndex = i6753[10]
  i6752.lightmapSceneIndex = i6753[11]
  i6752.lightmapScaleOffset = new pc.Vec4( i6753[12], i6753[13], i6753[14], i6753[15] )
  i6752.lightProbeUsage = i6753[16]
  i6752.reflectionProbeUsage = i6753[17]
  return i6752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6757 = data
  request.r(i6757[0], i6757[1], 0, i6756, 'mesh')
  i6756.meshCount = i6757[2]
  i6756.activeVertexStreamsCount = i6757[3]
  i6756.alignment = i6757[4]
  i6756.renderMode = i6757[5]
  i6756.sortMode = i6757[6]
  i6756.lengthScale = i6757[7]
  i6756.velocityScale = i6757[8]
  i6756.cameraVelocityScale = i6757[9]
  i6756.normalDirection = i6757[10]
  i6756.sortingFudge = i6757[11]
  i6756.minParticleSize = i6757[12]
  i6756.maxParticleSize = i6757[13]
  i6756.pivot = new pc.Vec3( i6757[14], i6757[15], i6757[16] )
  request.r(i6757[17], i6757[18], 0, i6756, 'trailMaterial')
  i6756.applyActiveColorSpace = !!i6757[19]
  i6756.enabled = !!i6757[20]
  request.r(i6757[21], i6757[22], 0, i6756, 'sharedMaterial')
  var i6759 = i6757[23]
  var i6758 = []
  for(var i = 0; i < i6759.length; i += 2) {
  request.r(i6759[i + 0], i6759[i + 1], 2, i6758, '')
  }
  i6756.sharedMaterials = i6758
  i6756.receiveShadows = !!i6757[24]
  i6756.shadowCastingMode = i6757[25]
  i6756.sortingLayerID = i6757[26]
  i6756.sortingOrder = i6757[27]
  i6756.lightmapIndex = i6757[28]
  i6756.lightmapSceneIndex = i6757[29]
  i6756.lightmapScaleOffset = new pc.Vec4( i6757[30], i6757[31], i6757[32], i6757[33] )
  i6756.lightProbeUsage = i6757[34]
  i6756.reflectionProbeUsage = i6757[35]
  return i6756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6761 = data
  i6760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6761[0], i6760.main)
  i6760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6761[1], i6760.colorBySpeed)
  i6760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6761[2], i6760.colorOverLifetime)
  i6760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6761[3], i6760.emission)
  i6760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6761[4], i6760.rotationBySpeed)
  i6760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6761[5], i6760.rotationOverLifetime)
  i6760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6761[6], i6760.shape)
  i6760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6761[7], i6760.sizeBySpeed)
  i6760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6761[8], i6760.sizeOverLifetime)
  i6760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6761[9], i6760.textureSheetAnimation)
  i6760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6761[10], i6760.velocityOverLifetime)
  i6760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6761[11], i6760.noise)
  i6760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6761[12], i6760.inheritVelocity)
  i6760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6761[13], i6760.forceOverLifetime)
  i6760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6761[14], i6760.limitVelocityOverLifetime)
  i6760.useAutoRandomSeed = !!i6761[15]
  i6760.randomSeed = i6761[16]
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6762 = root || new pc.ParticleSystemMain()
  var i6763 = data
  i6762.duration = i6763[0]
  i6762.loop = !!i6763[1]
  i6762.prewarm = !!i6763[2]
  i6762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[3], i6762.startDelay)
  i6762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[4], i6762.startLifetime)
  i6762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[5], i6762.startSpeed)
  i6762.startSize3D = !!i6763[6]
  i6762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[7], i6762.startSizeX)
  i6762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[8], i6762.startSizeY)
  i6762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[9], i6762.startSizeZ)
  i6762.startRotation3D = !!i6763[10]
  i6762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[11], i6762.startRotationX)
  i6762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[12], i6762.startRotationY)
  i6762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[13], i6762.startRotationZ)
  i6762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6763[14], i6762.startColor)
  i6762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6763[15], i6762.gravityModifier)
  i6762.simulationSpace = i6763[16]
  request.r(i6763[17], i6763[18], 0, i6762, 'customSimulationSpace')
  i6762.simulationSpeed = i6763[19]
  i6762.useUnscaledTime = !!i6763[20]
  i6762.scalingMode = i6763[21]
  i6762.playOnAwake = !!i6763[22]
  i6762.maxParticles = i6763[23]
  i6762.emitterVelocityMode = i6763[24]
  i6762.stopAction = i6763[25]
  return i6762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6764 = root || new pc.MinMaxCurve()
  var i6765 = data
  i6764.mode = i6765[0]
  i6764.curveMin = new pc.AnimationCurve( { keys_flow: i6765[1] } )
  i6764.curveMax = new pc.AnimationCurve( { keys_flow: i6765[2] } )
  i6764.curveMultiplier = i6765[3]
  i6764.constantMin = i6765[4]
  i6764.constantMax = i6765[5]
  return i6764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6766 = root || new pc.MinMaxGradient()
  var i6767 = data
  i6766.mode = i6767[0]
  i6766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6767[1], i6766.gradientMin)
  i6766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6767[2], i6766.gradientMax)
  i6766.colorMin = new pc.Color(i6767[3], i6767[4], i6767[5], i6767[6])
  i6766.colorMax = new pc.Color(i6767[7], i6767[8], i6767[9], i6767[10])
  return i6766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6769 = data
  i6768.mode = i6769[0]
  var i6771 = i6769[1]
  var i6770 = []
  for(var i = 0; i < i6771.length; i += 1) {
    i6770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6771[i + 0]) );
  }
  i6768.colorKeys = i6770
  var i6773 = i6769[2]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
    i6772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6773[i + 0]) );
  }
  i6768.alphaKeys = i6772
  return i6768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6774 = root || new pc.ParticleSystemColorBySpeed()
  var i6775 = data
  i6774.enabled = !!i6775[0]
  i6774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6775[1], i6774.color)
  i6774.range = new pc.Vec2( i6775[2], i6775[3] )
  return i6774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6779 = data
  i6778.color = new pc.Color(i6779[0], i6779[1], i6779[2], i6779[3])
  i6778.time = i6779[4]
  return i6778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6783 = data
  i6782.alpha = i6783[0]
  i6782.time = i6783[1]
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6784 = root || new pc.ParticleSystemColorOverLifetime()
  var i6785 = data
  i6784.enabled = !!i6785[0]
  i6784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6785[1], i6784.color)
  return i6784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6786 = root || new pc.ParticleSystemEmitter()
  var i6787 = data
  i6786.enabled = !!i6787[0]
  i6786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6787[1], i6786.rateOverTime)
  i6786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6787[2], i6786.rateOverDistance)
  var i6789 = i6787[3]
  var i6788 = []
  for(var i = 0; i < i6789.length; i += 1) {
    i6788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6789[i + 0]) );
  }
  i6786.bursts = i6788
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6792 = root || new pc.ParticleSystemBurst()
  var i6793 = data
  i6792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6793[0], i6792.count)
  i6792.cycleCount = i6793[1]
  i6792.minCount = i6793[2]
  i6792.maxCount = i6793[3]
  i6792.repeatInterval = i6793[4]
  i6792.time = i6793[5]
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6794 = root || new pc.ParticleSystemRotationBySpeed()
  var i6795 = data
  i6794.enabled = !!i6795[0]
  i6794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6795[1], i6794.x)
  i6794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6795[2], i6794.y)
  i6794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6795[3], i6794.z)
  i6794.separateAxes = !!i6795[4]
  i6794.range = new pc.Vec2( i6795[5], i6795[6] )
  return i6794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6797 = data
  i6796.enabled = !!i6797[0]
  i6796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6797[1], i6796.x)
  i6796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6797[2], i6796.y)
  i6796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6797[3], i6796.z)
  i6796.separateAxes = !!i6797[4]
  return i6796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6798 = root || new pc.ParticleSystemShape()
  var i6799 = data
  i6798.enabled = !!i6799[0]
  i6798.shapeType = i6799[1]
  i6798.randomDirectionAmount = i6799[2]
  i6798.sphericalDirectionAmount = i6799[3]
  i6798.randomPositionAmount = i6799[4]
  i6798.alignToDirection = !!i6799[5]
  i6798.radius = i6799[6]
  i6798.radiusMode = i6799[7]
  i6798.radiusSpread = i6799[8]
  i6798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6799[9], i6798.radiusSpeed)
  i6798.radiusThickness = i6799[10]
  i6798.angle = i6799[11]
  i6798.length = i6799[12]
  i6798.boxThickness = new pc.Vec3( i6799[13], i6799[14], i6799[15] )
  i6798.meshShapeType = i6799[16]
  request.r(i6799[17], i6799[18], 0, i6798, 'mesh')
  request.r(i6799[19], i6799[20], 0, i6798, 'meshRenderer')
  request.r(i6799[21], i6799[22], 0, i6798, 'skinnedMeshRenderer')
  i6798.useMeshMaterialIndex = !!i6799[23]
  i6798.meshMaterialIndex = i6799[24]
  i6798.useMeshColors = !!i6799[25]
  i6798.normalOffset = i6799[26]
  i6798.arc = i6799[27]
  i6798.arcMode = i6799[28]
  i6798.arcSpread = i6799[29]
  i6798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6799[30], i6798.arcSpeed)
  i6798.donutRadius = i6799[31]
  i6798.position = new pc.Vec3( i6799[32], i6799[33], i6799[34] )
  i6798.rotation = new pc.Vec3( i6799[35], i6799[36], i6799[37] )
  i6798.scale = new pc.Vec3( i6799[38], i6799[39], i6799[40] )
  return i6798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6800 = root || new pc.ParticleSystemSizeBySpeed()
  var i6801 = data
  i6800.enabled = !!i6801[0]
  i6800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6801[1], i6800.x)
  i6800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6801[2], i6800.y)
  i6800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6801[3], i6800.z)
  i6800.separateAxes = !!i6801[4]
  i6800.range = new pc.Vec2( i6801[5], i6801[6] )
  return i6800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6803 = data
  i6802.enabled = !!i6803[0]
  i6802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6803[1], i6802.x)
  i6802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6803[2], i6802.y)
  i6802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6803[3], i6802.z)
  i6802.separateAxes = !!i6803[4]
  return i6802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6805 = data
  i6804.enabled = !!i6805[0]
  i6804.mode = i6805[1]
  i6804.animation = i6805[2]
  i6804.numTilesX = i6805[3]
  i6804.numTilesY = i6805[4]
  i6804.useRandomRow = !!i6805[5]
  i6804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6805[6], i6804.frameOverTime)
  i6804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6805[7], i6804.startFrame)
  i6804.cycleCount = i6805[8]
  i6804.rowIndex = i6805[9]
  i6804.flipU = i6805[10]
  i6804.flipV = i6805[11]
  i6804.spriteCount = i6805[12]
  var i6807 = i6805[13]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 2) {
  request.r(i6807[i + 0], i6807[i + 1], 2, i6806, '')
  }
  i6804.sprites = i6806
  return i6804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6811 = data
  i6810.enabled = !!i6811[0]
  i6810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[1], i6810.x)
  i6810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[2], i6810.y)
  i6810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[3], i6810.z)
  i6810.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[4], i6810.radial)
  i6810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[5], i6810.speedModifier)
  i6810.space = i6811[6]
  i6810.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[7], i6810.orbitalX)
  i6810.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[8], i6810.orbitalY)
  i6810.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[9], i6810.orbitalZ)
  i6810.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[10], i6810.orbitalOffsetX)
  i6810.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[11], i6810.orbitalOffsetY)
  i6810.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6811[12], i6810.orbitalOffsetZ)
  return i6810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6812 = root || new pc.ParticleSystemNoise()
  var i6813 = data
  i6812.enabled = !!i6813[0]
  i6812.separateAxes = !!i6813[1]
  i6812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[2], i6812.strengthX)
  i6812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[3], i6812.strengthY)
  i6812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[4], i6812.strengthZ)
  i6812.frequency = i6813[5]
  i6812.damping = !!i6813[6]
  i6812.octaveCount = i6813[7]
  i6812.octaveMultiplier = i6813[8]
  i6812.octaveScale = i6813[9]
  i6812.quality = i6813[10]
  i6812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[11], i6812.scrollSpeed)
  i6812.scrollSpeedMultiplier = i6813[12]
  i6812.remapEnabled = !!i6813[13]
  i6812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[14], i6812.remapX)
  i6812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[15], i6812.remapY)
  i6812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[16], i6812.remapZ)
  i6812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[17], i6812.positionAmount)
  i6812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[18], i6812.rotationAmount)
  i6812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6813[19], i6812.sizeAmount)
  return i6812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6814 = root || new pc.ParticleSystemInheritVelocity()
  var i6815 = data
  i6814.enabled = !!i6815[0]
  i6814.mode = i6815[1]
  i6814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6815[2], i6814.curve)
  return i6814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6816 = root || new pc.ParticleSystemForceOverLifetime()
  var i6817 = data
  i6816.enabled = !!i6817[0]
  i6816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6817[1], i6816.x)
  i6816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6817[2], i6816.y)
  i6816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6817[3], i6816.z)
  i6816.space = i6817[4]
  i6816.randomized = !!i6817[5]
  return i6816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6819 = data
  i6818.enabled = !!i6819[0]
  i6818.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6819[1], i6818.limit)
  i6818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6819[2], i6818.limitX)
  i6818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6819[3], i6818.limitY)
  i6818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6819[4], i6818.limitZ)
  i6818.dampen = i6819[5]
  i6818.separateAxes = !!i6819[6]
  i6818.space = i6819[7]
  i6818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6819[8], i6818.drag)
  i6818.multiplyDragByParticleSize = !!i6819[9]
  i6818.multiplyDragByParticleVelocity = !!i6819[10]
  return i6818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6821 = data
  i6820.color = new pc.Color(i6821[0], i6821[1], i6821[2], i6821[3])
  request.r(i6821[4], i6821[5], 0, i6820, 'sprite')
  i6820.flipX = !!i6821[6]
  i6820.flipY = !!i6821[7]
  i6820.drawMode = i6821[8]
  i6820.size = new pc.Vec2( i6821[9], i6821[10] )
  i6820.tileMode = i6821[11]
  i6820.adaptiveModeThreshold = i6821[12]
  i6820.maskInteraction = i6821[13]
  i6820.spriteSortPoint = i6821[14]
  i6820.enabled = !!i6821[15]
  request.r(i6821[16], i6821[17], 0, i6820, 'sharedMaterial')
  var i6823 = i6821[18]
  var i6822 = []
  for(var i = 0; i < i6823.length; i += 2) {
  request.r(i6823[i + 0], i6823[i + 1], 2, i6822, '')
  }
  i6820.sharedMaterials = i6822
  i6820.receiveShadows = !!i6821[19]
  i6820.shadowCastingMode = i6821[20]
  i6820.sortingLayerID = i6821[21]
  i6820.sortingOrder = i6821[22]
  i6820.lightmapIndex = i6821[23]
  i6820.lightmapSceneIndex = i6821[24]
  i6820.lightmapScaleOffset = new pc.Vec4( i6821[25], i6821[26], i6821[27], i6821[28] )
  i6820.lightProbeUsage = i6821[29]
  i6820.reflectionProbeUsage = i6821[30]
  return i6820
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i6824 = root || request.c( 'CharacterMotor' )
  var i6825 = data
  request.r(i6825[0], i6825[1], 0, i6824, 'characterInput')
  request.r(i6825[2], i6825[3], 0, i6824, 'cameraYawTransform')
  request.r(i6825[4], i6825[5], 0, i6824, '_arrow')
  i6824.moveSpeed = i6825[6]
  i6824.jumpHeight = i6825[7]
  request.r(i6825[8], i6825[9], 0, i6824, 'groundChecker')
  i6824.gravity = i6825[10]
  i6824.enableStepClimb = !!i6825[11]
  i6824.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i6825[12] )
  i6824.maxStepHeight = i6825[13]
  i6824.stepCheckDistance = i6825[14]
  i6824.stepUpSpeed = i6825[15]
  i6824.stepUpAcceleration = i6825[16]
  i6824.minimumStepFacing = i6825[17]
  request.r(i6825[18], i6825[19], 0, i6824, 'controller')
  i6824.autoRun = !!i6825[20]
  return i6824
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i6826 = root || request.c( 'CharacterRotation' )
  var i6827 = data
  request.r(i6827[0], i6827[1], 0, i6826, 'motor')
  i6826.rotationSpeed = i6827[2]
  return i6826
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i6828 = root || request.c( 'CharacterAnimation' )
  var i6829 = data
  request.r(i6829[0], i6829[1], 0, i6828, 'animator')
  request.r(i6829[2], i6829[3], 0, i6828, 'motor')
  i6828.speedChangeRate = i6829[4]
  i6828.groundedGraceTime = i6829[5]
  return i6828
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i6830 = root || request.c( 'CharacterCollect' )
  var i6831 = data
  request.r(i6831[0], i6831[1], 0, i6830, 'motor')
  request.r(i6831[2], i6831[3], 0, i6830, 'avatar')
  return i6830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i6832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i6833 = data
  i6832.center = new pc.Vec3( i6833[0], i6833[1], i6833[2] )
  i6832.radius = i6833[3]
  i6832.height = i6833[4]
  i6832.direction = i6833[5]
  i6832.enabled = !!i6833[6]
  i6832.isTrigger = !!i6833[7]
  request.r(i6833[8], i6833[9], 0, i6832, 'material')
  return i6832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6835 = data
  request.r(i6835[0], i6835[1], 0, i6834, 'animatorController')
  request.r(i6835[2], i6835[3], 0, i6834, 'avatar')
  i6834.updateMode = i6835[4]
  i6834.hasTransformHierarchy = !!i6835[5]
  i6834.applyRootMotion = !!i6835[6]
  var i6837 = i6835[7]
  var i6836 = []
  for(var i = 0; i < i6837.length; i += 2) {
  request.r(i6837[i + 0], i6837[i + 1], 2, i6836, '')
  }
  i6834.humanBones = i6836
  i6834.enabled = !!i6835[8]
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6841 = data
  request.r(i6841[0], i6841[1], 0, i6840, 'clip')
  request.r(i6841[2], i6841[3], 0, i6840, 'outputAudioMixerGroup')
  i6840.playOnAwake = !!i6841[4]
  i6840.loop = !!i6841[5]
  i6840.time = i6841[6]
  i6840.volume = i6841[7]
  i6840.pitch = i6841[8]
  i6840.enabled = !!i6841[9]
  return i6840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i6842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i6843 = data
  request.r(i6843[0], i6843[1], 0, i6842, 'sharedMesh')
  var i6845 = i6843[2]
  var i6844 = []
  for(var i = 0; i < i6845.length; i += 2) {
  request.r(i6845[i + 0], i6845[i + 1], 2, i6844, '')
  }
  i6842.bones = i6844
  i6842.updateWhenOffscreen = !!i6843[3]
  i6842.localBounds = i6843[4]
  request.r(i6843[5], i6843[6], 0, i6842, 'rootBone')
  var i6847 = i6843[7]
  var i6846 = []
  for(var i = 0; i < i6847.length; i += 1) {
    i6846.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i6847[i + 0]) );
  }
  i6842.blendShapesWeights = i6846
  i6842.enabled = !!i6843[8]
  request.r(i6843[9], i6843[10], 0, i6842, 'sharedMaterial')
  var i6849 = i6843[11]
  var i6848 = []
  for(var i = 0; i < i6849.length; i += 2) {
  request.r(i6849[i + 0], i6849[i + 1], 2, i6848, '')
  }
  i6842.sharedMaterials = i6848
  i6842.receiveShadows = !!i6843[12]
  i6842.shadowCastingMode = i6843[13]
  i6842.sortingLayerID = i6843[14]
  i6842.sortingOrder = i6843[15]
  i6842.lightmapIndex = i6843[16]
  i6842.lightmapSceneIndex = i6843[17]
  i6842.lightmapScaleOffset = new pc.Vec4( i6843[18], i6843[19], i6843[20], i6843[21] )
  i6842.lightProbeUsage = i6843[22]
  i6842.reflectionProbeUsage = i6843[23]
  return i6842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i6852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i6853 = data
  i6852.weight = i6853[0]
  return i6852
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i6854 = root || request.c( 'GroundChecker' )
  var i6855 = data
  request.r(i6855[0], i6855[1], 0, i6854, 'groundPoint')
  i6854.checkRadius = i6855[2]
  i6854.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i6855[3] )
  return i6854
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i6856 = root || request.c( 'CameraFollow' )
  var i6857 = data
  request.r(i6857[0], i6857[1], 0, i6856, 'target')
  i6856.smoothTime = i6857[2]
  return i6856
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i6858 = root || request.c( 'CameraLook' )
  var i6859 = data
  request.r(i6859[0], i6859[1], 0, i6858, 'input')
  request.r(i6859[2], i6859[3], 0, i6858, 'yawPivot')
  request.r(i6859[4], i6859[5], 0, i6858, 'pitchPivot')
  i6858.minPitch = i6859[6]
  i6858.maxPitch = i6859[7]
  i6858.yaw = i6859[8]
  i6858.pitch = i6859[9]
  i6858.defaltYaw = i6859[10]
  i6858.defaltPitch = i6859[11]
  return i6858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6861 = data
  i6860.aspect = i6861[0]
  i6860.orthographic = !!i6861[1]
  i6860.orthographicSize = i6861[2]
  i6860.backgroundColor = new pc.Color(i6861[3], i6861[4], i6861[5], i6861[6])
  i6860.nearClipPlane = i6861[7]
  i6860.farClipPlane = i6861[8]
  i6860.fieldOfView = i6861[9]
  i6860.depth = i6861[10]
  i6860.clearFlags = i6861[11]
  i6860.cullingMask = i6861[12]
  i6860.rect = i6861[13]
  request.r(i6861[14], i6861[15], 0, i6860, 'targetTexture')
  i6860.usePhysicalProperties = !!i6861[16]
  i6860.focalLength = i6861[17]
  i6860.sensorSize = new pc.Vec2( i6861[18], i6861[19] )
  i6860.lensShift = new pc.Vec2( i6861[20], i6861[21] )
  i6860.gateFit = i6861[22]
  i6860.commandBufferCount = i6861[23]
  i6860.cameraType = i6861[24]
  i6860.enabled = !!i6861[25]
  return i6860
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i6862 = root || request.c( 'CharacterInput' )
  var i6863 = data
  request.r(i6863[0], i6863[1], 0, i6862, 'joystick')
  request.r(i6863[2], i6863[3], 0, i6862, 'jumpButton')
  return i6862
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6864 = root || request.c( 'InputManager' )
  var i6865 = data
  request.r(i6865[0], i6865[1], 0, i6864, 'worldCamera')
  i6864.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i6865[2] )
  i6864.touchSensitivity = i6865[3]
  i6864.mouseSensitivity = i6865[4]
  i6864.dragThreshold = i6865[5]
  return i6864
}

Deserializers["GameController"] = function (request, data, root) {
  var i6866 = root || request.c( 'GameController' )
  var i6867 = data
  i6866.timeToShowComplete = i6867[0]
  i6866.timeToShowHint = i6867[1]
  i6866.currentProgress = i6867[2]
  i6866.target = i6867[3]
  request.r(i6867[4], i6867[5], 0, i6866, 'progressText')
  request.r(i6867[6], i6867[7], 0, i6866, 'collectText')
  request.r(i6867[8], i6867[9], 0, i6866, 'completeScene')
  var i6869 = i6867[10]
  var i6868 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i6869.length; i += 2) {
  request.r(i6869[i + 0], i6869[i + 1], 1, i6868, '')
  }
  i6866.gifts = i6868
  request.r(i6867[11], i6867[12], 0, i6866, 'collect')
  request.r(i6867[13], i6867[14], 0, i6866, 'tut')
  return i6866
}

Deserializers["AudioController"] = function (request, data, root) {
  var i6872 = root || request.c( 'AudioController' )
  var i6873 = data
  request.r(i6873[0], i6873[1], 0, i6872, 'musicSource')
  request.r(i6873[2], i6873[3], 0, i6872, 'poolParent')
  i6872.startSize = i6873[4]
  return i6872
}

Deserializers["LunaController"] = function (request, data, root) {
  var i6874 = root || request.c( 'LunaController' )
  var i6875 = data
  i6874.LimitTimePlay = !!i6875[0]
  i6874.TimePlay = i6875[1]
  var i6877 = i6875[2]
  var i6876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i6877.length; i += 2) {
  request.r(i6877[i + 0], i6877[i + 1], 1, i6876, '')
  }
  i6874.images = i6876
  request.r(i6875[3], i6875[4], 0, i6874, 'CTA')
  return i6874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i6881 = data
  i6880.textureMode = i6881[0]
  i6880.alignment = i6881[1]
  i6880.widthCurve = new pc.AnimationCurve( { keys_flow: i6881[2] } )
  i6880.colorGradient = i6881[3] ? new pc.ColorGradient(i6881[3][0], i6881[3][1], i6881[3][2]) : null
  var i6883 = i6881[4]
  var i6882 = []
  for(var i = 0; i < i6883.length; i += 3) {
    i6882.push( new pc.Vec3( i6883[i + 0], i6883[i + 1], i6883[i + 2] ) );
  }
  i6880.positions = i6882
  i6880.positionCount = i6881[5]
  i6880.widthMultiplier = i6881[6]
  i6880.startWidth = i6881[7]
  i6880.endWidth = i6881[8]
  i6880.numCornerVertices = i6881[9]
  i6880.numCapVertices = i6881[10]
  i6880.useWorldSpace = !!i6881[11]
  i6880.loop = !!i6881[12]
  i6880.startColor = new pc.Color(i6881[13], i6881[14], i6881[15], i6881[16])
  i6880.endColor = new pc.Color(i6881[17], i6881[18], i6881[19], i6881[20])
  i6880.generateLightingData = !!i6881[21]
  i6880.enabled = !!i6881[22]
  request.r(i6881[23], i6881[24], 0, i6880, 'sharedMaterial')
  var i6885 = i6881[25]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 2) {
  request.r(i6885[i + 0], i6885[i + 1], 2, i6884, '')
  }
  i6880.sharedMaterials = i6884
  i6880.receiveShadows = !!i6881[26]
  i6880.shadowCastingMode = i6881[27]
  i6880.sortingLayerID = i6881[28]
  i6880.sortingOrder = i6881[29]
  i6880.lightmapIndex = i6881[30]
  i6880.lightmapSceneIndex = i6881[31]
  i6880.lightmapScaleOffset = new pc.Vec4( i6881[32], i6881[33], i6881[34], i6881[35] )
  i6880.lightProbeUsage = i6881[36]
  i6880.reflectionProbeUsage = i6881[37]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i6888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i6889 = data
  request.r(i6889[0], i6889[1], 0, i6888, 'sharedMesh')
  i6888.convex = !!i6889[2]
  i6888.enabled = !!i6889[3]
  i6888.isTrigger = !!i6889[4]
  request.r(i6889[5], i6889[6], 0, i6888, 'material')
  return i6888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i6891 = data
  i6890.center = new pc.Vec3( i6891[0], i6891[1], i6891[2] )
  i6890.radius = i6891[3]
  i6890.enabled = !!i6891[4]
  i6890.isTrigger = !!i6891[5]
  request.r(i6891[6], i6891[7], 0, i6890, 'material')
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6893 = data
  i6892.ambientIntensity = i6893[0]
  i6892.reflectionIntensity = i6893[1]
  i6892.ambientMode = i6893[2]
  i6892.ambientLight = new pc.Color(i6893[3], i6893[4], i6893[5], i6893[6])
  i6892.ambientSkyColor = new pc.Color(i6893[7], i6893[8], i6893[9], i6893[10])
  i6892.ambientGroundColor = new pc.Color(i6893[11], i6893[12], i6893[13], i6893[14])
  i6892.ambientEquatorColor = new pc.Color(i6893[15], i6893[16], i6893[17], i6893[18])
  i6892.fogColor = new pc.Color(i6893[19], i6893[20], i6893[21], i6893[22])
  i6892.fogEndDistance = i6893[23]
  i6892.fogStartDistance = i6893[24]
  i6892.fogDensity = i6893[25]
  i6892.fog = !!i6893[26]
  request.r(i6893[27], i6893[28], 0, i6892, 'skybox')
  i6892.fogMode = i6893[29]
  var i6895 = i6893[30]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6895[i + 0]) );
  }
  i6892.lightmaps = i6894
  i6892.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6893[31], i6892.lightProbes)
  i6892.lightmapsMode = i6893[32]
  i6892.mixedBakeMode = i6893[33]
  i6892.environmentLightingMode = i6893[34]
  i6892.ambientProbe = new pc.SphericalHarmonicsL2(i6893[35])
  request.r(i6893[36], i6893[37], 0, i6892, 'customReflection')
  request.r(i6893[38], i6893[39], 0, i6892, 'defaultReflection')
  i6892.defaultReflectionMode = i6893[40]
  i6892.defaultReflectionResolution = i6893[41]
  i6892.sunLightObjectId = i6893[42]
  i6892.pixelLightCount = i6893[43]
  i6892.defaultReflectionHDR = !!i6893[44]
  i6892.hasLightDataAsset = !!i6893[45]
  i6892.hasManualGenerate = !!i6893[46]
  return i6892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6899 = data
  request.r(i6899[0], i6899[1], 0, i6898, 'lightmapColor')
  request.r(i6899[2], i6899[3], 0, i6898, 'lightmapDirection')
  request.r(i6899[4], i6899[5], 0, i6898, 'shadowMask')
  return i6898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6900 = root || new UnityEngine.LightProbes()
  var i6901 = data
  return i6900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6907 = data
  var i6909 = i6907[0]
  var i6908 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6909.length; i += 1) {
    i6908.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6909[i + 0]));
  }
  i6906.ShaderCompilationErrors = i6908
  i6906.name = i6907[1]
  i6906.guid = i6907[2]
  var i6911 = i6907[3]
  var i6910 = []
  for(var i = 0; i < i6911.length; i += 1) {
    i6910.push( i6911[i + 0] );
  }
  i6906.shaderDefinedKeywords = i6910
  var i6913 = i6907[4]
  var i6912 = []
  for(var i = 0; i < i6913.length; i += 1) {
    i6912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6913[i + 0]) );
  }
  i6906.passes = i6912
  var i6915 = i6907[5]
  var i6914 = []
  for(var i = 0; i < i6915.length; i += 1) {
    i6914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6915[i + 0]) );
  }
  i6906.usePasses = i6914
  var i6917 = i6907[6]
  var i6916 = []
  for(var i = 0; i < i6917.length; i += 1) {
    i6916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6917[i + 0]) );
  }
  i6906.defaultParameterValues = i6916
  request.r(i6907[7], i6907[8], 0, i6906, 'unityFallbackShader')
  i6906.readDepth = !!i6907[9]
  i6906.hasDepthOnlyPass = !!i6907[10]
  i6906.isCreatedByShaderGraph = !!i6907[11]
  i6906.disableBatching = !!i6907[12]
  i6906.compiled = !!i6907[13]
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6921 = data
  i6920.shaderName = i6921[0]
  i6920.errorMessage = i6921[1]
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6926 = root || new pc.UnityShaderPass()
  var i6927 = data
  i6926.id = i6927[0]
  i6926.subShaderIndex = i6927[1]
  i6926.name = i6927[2]
  i6926.passType = i6927[3]
  i6926.grabPassTextureName = i6927[4]
  i6926.usePass = !!i6927[5]
  i6926.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[6], i6926.zTest)
  i6926.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[7], i6926.zWrite)
  i6926.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[8], i6926.culling)
  i6926.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6927[9], i6926.blending)
  i6926.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6927[10], i6926.alphaBlending)
  i6926.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[11], i6926.colorWriteMask)
  i6926.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[12], i6926.offsetUnits)
  i6926.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[13], i6926.offsetFactor)
  i6926.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[14], i6926.stencilRef)
  i6926.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[15], i6926.stencilReadMask)
  i6926.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6927[16], i6926.stencilWriteMask)
  i6926.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6927[17], i6926.stencilOp)
  i6926.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6927[18], i6926.stencilOpFront)
  i6926.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6927[19], i6926.stencilOpBack)
  var i6929 = i6927[20]
  var i6928 = []
  for(var i = 0; i < i6929.length; i += 1) {
    i6928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6929[i + 0]) );
  }
  i6926.tags = i6928
  var i6931 = i6927[21]
  var i6930 = []
  for(var i = 0; i < i6931.length; i += 1) {
    i6930.push( i6931[i + 0] );
  }
  i6926.passDefinedKeywords = i6930
  var i6933 = i6927[22]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6933[i + 0]) );
  }
  i6926.passDefinedKeywordGroups = i6932
  var i6935 = i6927[23]
  var i6934 = []
  for(var i = 0; i < i6935.length; i += 1) {
    i6934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6935[i + 0]) );
  }
  i6926.variants = i6934
  var i6937 = i6927[24]
  var i6936 = []
  for(var i = 0; i < i6937.length; i += 1) {
    i6936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6937[i + 0]) );
  }
  i6926.excludedVariants = i6936
  i6926.hasDepthReader = !!i6927[25]
  return i6926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6939 = data
  i6938.val = i6939[0]
  i6938.name = i6939[1]
  return i6938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6941 = data
  i6940.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6941[0], i6940.src)
  i6940.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6941[1], i6940.dst)
  i6940.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6941[2], i6940.op)
  return i6940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6943 = data
  i6942.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6943[0], i6942.pass)
  i6942.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6943[1], i6942.fail)
  i6942.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6943[2], i6942.zFail)
  i6942.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6943[3], i6942.comp)
  return i6942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6947 = data
  i6946.name = i6947[0]
  i6946.value = i6947[1]
  return i6946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6951 = data
  var i6953 = i6951[0]
  var i6952 = []
  for(var i = 0; i < i6953.length; i += 1) {
    i6952.push( i6953[i + 0] );
  }
  i6950.keywords = i6952
  i6950.hasDiscard = !!i6951[1]
  return i6950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6957 = data
  i6956.passId = i6957[0]
  i6956.subShaderIndex = i6957[1]
  var i6959 = i6957[2]
  var i6958 = []
  for(var i = 0; i < i6959.length; i += 1) {
    i6958.push( i6959[i + 0] );
  }
  i6956.keywords = i6958
  i6956.vertexProgram = i6957[3]
  i6956.fragmentProgram = i6957[4]
  i6956.exportedForWebGl2 = !!i6957[5]
  i6956.readDepth = !!i6957[6]
  return i6956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6963 = data
  request.r(i6963[0], i6963[1], 0, i6962, 'shader')
  i6962.pass = i6963[2]
  return i6962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6967 = data
  i6966.name = i6967[0]
  i6966.type = i6967[1]
  i6966.value = new pc.Vec4( i6967[2], i6967[3], i6967[4], i6967[5] )
  i6966.textureValue = i6967[6]
  i6966.shaderPropertyFlag = i6967[7]
  return i6966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6969 = data
  i6968.name = i6969[0]
  request.r(i6969[1], i6969[2], 0, i6968, 'texture')
  i6968.aabb = i6969[3]
  i6968.vertices = i6969[4]
  i6968.triangles = i6969[5]
  i6968.textureRect = UnityEngine.Rect.MinMaxRect(i6969[6], i6969[7], i6969[8], i6969[9])
  i6968.packedRect = UnityEngine.Rect.MinMaxRect(i6969[10], i6969[11], i6969[12], i6969[13])
  i6968.border = new pc.Vec4( i6969[14], i6969[15], i6969[16], i6969[17] )
  i6968.transparency = i6969[18]
  i6968.bounds = i6969[19]
  i6968.pixelsPerUnit = i6969[20]
  i6968.textureWidth = i6969[21]
  i6968.textureHeight = i6969[22]
  i6968.nativeSize = new pc.Vec2( i6969[23], i6969[24] )
  i6968.pivot = new pc.Vec2( i6969[25], i6969[26] )
  i6968.textureRectOffset = new pc.Vec2( i6969[27], i6969[28] )
  return i6968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6971 = data
  i6970.name = i6971[0]
  return i6970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6973 = data
  i6972.name = i6973[0]
  i6972.wrapMode = i6973[1]
  i6972.isLooping = !!i6973[2]
  i6972.length = i6973[3]
  var i6975 = i6973[4]
  var i6974 = []
  for(var i = 0; i < i6975.length; i += 1) {
    i6974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6975[i + 0]) );
  }
  i6972.curves = i6974
  var i6977 = i6973[5]
  var i6976 = []
  for(var i = 0; i < i6977.length; i += 1) {
    i6976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6977[i + 0]) );
  }
  i6972.events = i6976
  i6972.halfPrecision = !!i6973[6]
  i6972._frameRate = i6973[7]
  i6972.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6973[8], i6972.localBounds)
  i6972.hasMuscleCurves = !!i6973[9]
  var i6979 = i6973[10]
  var i6978 = []
  for(var i = 0; i < i6979.length; i += 1) {
    i6978.push( i6979[i + 0] );
  }
  i6972.clipMuscleConstant = i6978
  i6972.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6973[11], i6972.clipBindingConstant)
  return i6972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6983 = data
  i6982.path = i6983[0]
  i6982.hash = i6983[1]
  i6982.componentType = i6983[2]
  i6982.property = i6983[3]
  i6982.keys = i6983[4]
  var i6985 = i6983[5]
  var i6984 = []
  for(var i = 0; i < i6985.length; i += 1) {
    i6984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6985[i + 0]) );
  }
  i6982.objectReferenceKeys = i6984
  return i6982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6989 = data
  i6988.time = i6989[0]
  request.r(i6989[1], i6989[2], 0, i6988, 'value')
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6993 = data
  i6992.functionName = i6993[0]
  i6992.floatParameter = i6993[1]
  i6992.intParameter = i6993[2]
  i6992.stringParameter = i6993[3]
  request.r(i6993[4], i6993[5], 0, i6992, 'objectReferenceParameter')
  i6992.time = i6993[6]
  return i6992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6995 = data
  i6994.center = new pc.Vec3( i6995[0], i6995[1], i6995[2] )
  i6994.extends = new pc.Vec3( i6995[3], i6995[4], i6995[5] )
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6999 = data
  var i7001 = i6999[0]
  var i7000 = []
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.push( i7001[i + 0] );
  }
  i6998.genericBindings = i7000
  var i7003 = i6999[1]
  var i7002 = []
  for(var i = 0; i < i7003.length; i += 1) {
    i7002.push( i7003[i + 0] );
  }
  i6998.pptrCurveMapping = i7002
  return i6998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7005 = data
  i7004.name = i7005[0]
  var i7007 = i7005[1]
  var i7006 = []
  for(var i = 0; i < i7007.length; i += 1) {
    i7006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7007[i + 0]) );
  }
  i7004.layers = i7006
  var i7009 = i7005[2]
  var i7008 = []
  for(var i = 0; i < i7009.length; i += 1) {
    i7008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7009[i + 0]) );
  }
  i7004.parameters = i7008
  i7004.animationClips = i7005[3]
  i7004.avatarUnsupported = i7005[4]
  return i7004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7013 = data
  i7012.name = i7013[0]
  i7012.defaultWeight = i7013[1]
  i7012.blendingMode = i7013[2]
  i7012.avatarMask = i7013[3]
  i7012.syncedLayerIndex = i7013[4]
  i7012.syncedLayerAffectsTiming = !!i7013[5]
  i7012.syncedLayers = i7013[6]
  i7012.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7013[7], i7012.stateMachine)
  return i7012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7015 = data
  i7014.id = i7015[0]
  i7014.name = i7015[1]
  i7014.path = i7015[2]
  var i7017 = i7015[3]
  var i7016 = []
  for(var i = 0; i < i7017.length; i += 1) {
    i7016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7017[i + 0]) );
  }
  i7014.states = i7016
  var i7019 = i7015[4]
  var i7018 = []
  for(var i = 0; i < i7019.length; i += 1) {
    i7018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7019[i + 0]) );
  }
  i7014.machines = i7018
  var i7021 = i7015[5]
  var i7020 = []
  for(var i = 0; i < i7021.length; i += 1) {
    i7020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7021[i + 0]) );
  }
  i7014.entryStateTransitions = i7020
  var i7023 = i7015[6]
  var i7022 = []
  for(var i = 0; i < i7023.length; i += 1) {
    i7022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7023[i + 0]) );
  }
  i7014.exitStateTransitions = i7022
  var i7025 = i7015[7]
  var i7024 = []
  for(var i = 0; i < i7025.length; i += 1) {
    i7024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7025[i + 0]) );
  }
  i7014.anyStateTransitions = i7024
  i7014.defaultStateId = i7015[8]
  return i7014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7029 = data
  i7028.id = i7029[0]
  i7028.name = i7029[1]
  i7028.cycleOffset = i7029[2]
  i7028.cycleOffsetParameter = i7029[3]
  i7028.cycleOffsetParameterActive = !!i7029[4]
  i7028.mirror = !!i7029[5]
  i7028.mirrorParameter = i7029[6]
  i7028.mirrorParameterActive = !!i7029[7]
  i7028.motionId = i7029[8]
  i7028.nameHash = i7029[9]
  i7028.fullPathHash = i7029[10]
  i7028.speed = i7029[11]
  i7028.speedParameter = i7029[12]
  i7028.speedParameterActive = !!i7029[13]
  i7028.tag = i7029[14]
  i7028.tagHash = i7029[15]
  i7028.writeDefaultValues = !!i7029[16]
  var i7031 = i7029[17]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 2) {
  request.r(i7031[i + 0], i7031[i + 1], 2, i7030, '')
  }
  i7028.behaviours = i7030
  var i7033 = i7029[18]
  var i7032 = []
  for(var i = 0; i < i7033.length; i += 1) {
    i7032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7033[i + 0]) );
  }
  i7028.transitions = i7032
  return i7028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7039 = data
  i7038.fullPath = i7039[0]
  i7038.canTransitionToSelf = !!i7039[1]
  i7038.duration = i7039[2]
  i7038.exitTime = i7039[3]
  i7038.hasExitTime = !!i7039[4]
  i7038.hasFixedDuration = !!i7039[5]
  i7038.interruptionSource = i7039[6]
  i7038.offset = i7039[7]
  i7038.orderedInterruption = !!i7039[8]
  i7038.destinationStateId = i7039[9]
  i7038.isExit = !!i7039[10]
  i7038.mute = !!i7039[11]
  i7038.solo = !!i7039[12]
  var i7041 = i7039[13]
  var i7040 = []
  for(var i = 0; i < i7041.length; i += 1) {
    i7040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7041[i + 0]) );
  }
  i7038.conditions = i7040
  return i7038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7045 = data
  i7044.mode = i7045[0]
  i7044.parameter = i7045[1]
  i7044.threshold = i7045[2]
  return i7044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7051 = data
  i7050.destinationStateId = i7051[0]
  i7050.isExit = !!i7051[1]
  i7050.mute = !!i7051[2]
  i7050.solo = !!i7051[3]
  var i7053 = i7051[4]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 1) {
    i7052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7053[i + 0]) );
  }
  i7050.conditions = i7052
  return i7050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7057 = data
  i7056.defaultBool = !!i7057[0]
  i7056.defaultFloat = i7057[1]
  i7056.defaultInt = i7057[2]
  i7056.name = i7057[3]
  i7056.nameHash = i7057[4]
  i7056.type = i7057[5]
  return i7056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i7058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i7059 = data
  i7058.name = i7059[0]
  request.r(i7059[1], i7059[2], 0, i7058, '_runtimeAnimatorController')
  var i7061 = i7059[3]
  var i7060 = []
  for(var i = 0; i < i7061.length; i += 2) {
  request.r(i7061[i + 0], i7061[i + 1], 2, i7060, '')
  }
  i7058._originalAnimationClips = i7060
  var i7063 = i7059[4]
  var i7062 = []
  for(var i = 0; i < i7063.length; i += 2) {
  request.r(i7063[i + 0], i7063[i + 1], 2, i7062, '')
  }
  i7058._overrideAnimationClips = i7062
  var i7065 = i7059[5]
  var i7064 = []
  for(var i = 0; i < i7065.length; i += 2) {
  request.r(i7065[i + 0], i7065[i + 1], 2, i7064, '')
  }
  i7058._animationClips = i7064
  var i7067 = i7059[6]
  var i7066 = []
  for(var i = 0; i < i7067.length; i += 1) {
    i7066.push( request.d('UnityEngine.AnimationClipPair', i7067[i + 0]) );
  }
  i7058._animationClipPairs = i7066
  return i7058
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i7072 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i7073 = data
  request.r(i7073[0], i7073[1], 0, i7072, 'originalClip')
  request.r(i7073[2], i7073[3], 0, i7072, 'overrideClip')
  return i7072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7075 = data
  i7074.name = i7075[0]
  i7074.bytes64 = i7075[1]
  i7074.data = i7075[2]
  return i7074
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7076 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7077 = data
  i7076.normalStyle = i7077[0]
  i7076.normalSpacingOffset = i7077[1]
  i7076.boldStyle = i7077[2]
  i7076.boldSpacing = i7077[3]
  i7076.italicStyle = i7077[4]
  i7076.tabSize = i7077[5]
  request.r(i7077[6], i7077[7], 0, i7076, 'atlas')
  i7076.m_SourceFontFileGUID = i7077[8]
  i7076.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7077[9], i7076.m_CreationSettings)
  request.r(i7077[10], i7077[11], 0, i7076, 'm_SourceFontFile')
  i7076.m_SourceFontFilePath = i7077[12]
  i7076.m_AtlasPopulationMode = i7077[13]
  i7076.InternalDynamicOS = !!i7077[14]
  var i7079 = i7077[15]
  var i7078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7079.length; i += 1) {
    i7078.add(request.d('UnityEngine.TextCore.Glyph', i7079[i + 0]));
  }
  i7076.m_GlyphTable = i7078
  var i7081 = i7077[16]
  var i7080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7081.length; i += 1) {
    i7080.add(request.d('TMPro.TMP_Character', i7081[i + 0]));
  }
  i7076.m_CharacterTable = i7080
  var i7083 = i7077[17]
  var i7082 = []
  for(var i = 0; i < i7083.length; i += 2) {
  request.r(i7083[i + 0], i7083[i + 1], 2, i7082, '')
  }
  i7076.m_AtlasTextures = i7082
  i7076.m_AtlasTextureIndex = i7077[18]
  i7076.m_IsMultiAtlasTexturesEnabled = !!i7077[19]
  i7076.m_GetFontFeatures = !!i7077[20]
  i7076.m_ClearDynamicDataOnBuild = !!i7077[21]
  i7076.m_AtlasWidth = i7077[22]
  i7076.m_AtlasHeight = i7077[23]
  i7076.m_AtlasPadding = i7077[24]
  i7076.m_AtlasRenderMode = i7077[25]
  var i7085 = i7077[26]
  var i7084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7085.length; i += 1) {
    i7084.add(request.d('UnityEngine.TextCore.GlyphRect', i7085[i + 0]));
  }
  i7076.m_UsedGlyphRects = i7084
  var i7087 = i7077[27]
  var i7086 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7087.length; i += 1) {
    i7086.add(request.d('UnityEngine.TextCore.GlyphRect', i7087[i + 0]));
  }
  i7076.m_FreeGlyphRects = i7086
  i7076.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7077[28], i7076.m_FontFeatureTable)
  i7076.m_ShouldReimportFontFeatures = !!i7077[29]
  var i7089 = i7077[30]
  var i7088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7089.length; i += 2) {
  request.r(i7089[i + 0], i7089[i + 1], 1, i7088, '')
  }
  i7076.m_FallbackFontAssetTable = i7088
  var i7091 = i7077[31]
  var i7090 = []
  for(var i = 0; i < i7091.length; i += 1) {
    i7090.push( request.d('TMPro.TMP_FontWeightPair', i7091[i + 0]) );
  }
  i7076.m_FontWeightTable = i7090
  var i7093 = i7077[32]
  var i7092 = []
  for(var i = 0; i < i7093.length; i += 1) {
    i7092.push( request.d('TMPro.TMP_FontWeightPair', i7093[i + 0]) );
  }
  i7076.fontWeights = i7092
  i7076.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7077[33], i7076.m_fontInfo)
  var i7095 = i7077[34]
  var i7094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7095.length; i += 1) {
    i7094.add(request.d('TMPro.TMP_Glyph', i7095[i + 0]));
  }
  i7076.m_glyphInfoList = i7094
  i7076.m_KerningTable = request.d('TMPro.KerningTable', i7077[35], i7076.m_KerningTable)
  var i7097 = i7077[36]
  var i7096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7097.length; i += 2) {
  request.r(i7097[i + 0], i7097[i + 1], 1, i7096, '')
  }
  i7076.fallbackFontAssets = i7096
  i7076.m_Version = i7077[37]
  i7076.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7077[38], i7076.m_FaceInfo)
  request.r(i7077[39], i7077[40], 0, i7076, 'm_Material')
  return i7076
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7098 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7099 = data
  i7098.sourceFontFileName = i7099[0]
  i7098.sourceFontFileGUID = i7099[1]
  i7098.faceIndex = i7099[2]
  i7098.pointSizeSamplingMode = i7099[3]
  i7098.pointSize = i7099[4]
  i7098.padding = i7099[5]
  i7098.paddingMode = i7099[6]
  i7098.packingMode = i7099[7]
  i7098.atlasWidth = i7099[8]
  i7098.atlasHeight = i7099[9]
  i7098.characterSetSelectionMode = i7099[10]
  i7098.characterSequence = i7099[11]
  i7098.referencedFontAssetGUID = i7099[12]
  i7098.referencedTextAssetGUID = i7099[13]
  i7098.fontStyle = i7099[14]
  i7098.fontStyleModifier = i7099[15]
  i7098.renderMode = i7099[16]
  i7098.includeFontFeatures = !!i7099[17]
  return i7098
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7102 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7103 = data
  i7102.m_Index = i7103[0]
  i7102.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7103[1], i7102.m_Metrics)
  i7102.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7103[2], i7102.m_GlyphRect)
  i7102.m_Scale = i7103[3]
  i7102.m_AtlasIndex = i7103[4]
  i7102.m_ClassDefinitionType = i7103[5]
  return i7102
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7104 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7105 = data
  i7104.m_Width = i7105[0]
  i7104.m_Height = i7105[1]
  i7104.m_HorizontalBearingX = i7105[2]
  i7104.m_HorizontalBearingY = i7105[3]
  i7104.m_HorizontalAdvance = i7105[4]
  return i7104
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7106 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7107 = data
  i7106.m_X = i7107[0]
  i7106.m_Y = i7107[1]
  i7106.m_Width = i7107[2]
  i7106.m_Height = i7107[3]
  return i7106
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7110 = root || request.c( 'TMPro.TMP_Character' )
  var i7111 = data
  i7110.m_ElementType = i7111[0]
  i7110.m_Unicode = i7111[1]
  i7110.m_GlyphIndex = i7111[2]
  i7110.m_Scale = i7111[3]
  return i7110
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7116 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7117 = data
  var i7119 = i7117[0]
  var i7118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i7119.length; i += 1) {
    i7118.add(request.d('TMPro.MultipleSubstitutionRecord', i7119[i + 0]));
  }
  i7116.m_MultipleSubstitutionRecords = i7118
  var i7121 = i7117[1]
  var i7120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i7121.length; i += 1) {
    i7120.add(request.d('TMPro.LigatureSubstitutionRecord', i7121[i + 0]));
  }
  i7116.m_LigatureSubstitutionRecords = i7120
  var i7123 = i7117[2]
  var i7122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7123.length; i += 1) {
    i7122.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i7123[i + 0]));
  }
  i7116.m_GlyphPairAdjustmentRecords = i7122
  var i7125 = i7117[3]
  var i7124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i7125.length; i += 1) {
    i7124.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i7125[i + 0]));
  }
  i7116.m_MarkToBaseAdjustmentRecords = i7124
  var i7127 = i7117[4]
  var i7126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i7127.length; i += 1) {
    i7126.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i7127[i + 0]));
  }
  i7116.m_MarkToMarkAdjustmentRecords = i7126
  return i7116
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i7130 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i7131 = data
  i7130.m_TargetGlyphID = i7131[0]
  i7130.m_SubstituteGlyphIDs = i7131[1]
  return i7130
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i7134 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i7135 = data
  i7134.m_ComponentGlyphIDs = i7135[0]
  i7134.m_LigatureGlyphID = i7135[1]
  return i7134
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7138 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i7139 = data
  i7138.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7139[0], i7138.m_FirstAdjustmentRecord)
  i7138.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7139[1], i7138.m_SecondAdjustmentRecord)
  i7138.m_FeatureLookupFlags = i7139[2]
  return i7138
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7142 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7143 = data
  i7142.m_BaseGlyphID = i7143[0]
  i7142.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7143[1], i7142.m_BaseGlyphAnchorPoint)
  i7142.m_MarkGlyphID = i7143[2]
  i7142.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7143[3], i7142.m_MarkPositionAdjustment)
  return i7142
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7146 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7147 = data
  i7146.m_BaseMarkGlyphID = i7147[0]
  i7146.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7147[1], i7146.m_BaseMarkGlyphAnchorPoint)
  i7146.m_CombiningMarkGlyphID = i7147[2]
  i7146.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7147[3], i7146.m_CombiningMarkPositionAdjustment)
  return i7146
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7152 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7153 = data
  request.r(i7153[0], i7153[1], 0, i7152, 'regularTypeface')
  request.r(i7153[2], i7153[3], 0, i7152, 'italicTypeface')
  return i7152
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7154 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7155 = data
  i7154.Name = i7155[0]
  i7154.PointSize = i7155[1]
  i7154.Scale = i7155[2]
  i7154.CharacterCount = i7155[3]
  i7154.LineHeight = i7155[4]
  i7154.Baseline = i7155[5]
  i7154.Ascender = i7155[6]
  i7154.CapHeight = i7155[7]
  i7154.Descender = i7155[8]
  i7154.CenterLine = i7155[9]
  i7154.SuperscriptOffset = i7155[10]
  i7154.SubscriptOffset = i7155[11]
  i7154.SubSize = i7155[12]
  i7154.Underline = i7155[13]
  i7154.UnderlineThickness = i7155[14]
  i7154.strikethrough = i7155[15]
  i7154.strikethroughThickness = i7155[16]
  i7154.TabWidth = i7155[17]
  i7154.Padding = i7155[18]
  i7154.AtlasWidth = i7155[19]
  i7154.AtlasHeight = i7155[20]
  return i7154
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7158 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7159 = data
  i7158.id = i7159[0]
  i7158.x = i7159[1]
  i7158.y = i7159[2]
  i7158.width = i7159[3]
  i7158.height = i7159[4]
  i7158.xOffset = i7159[5]
  i7158.yOffset = i7159[6]
  i7158.xAdvance = i7159[7]
  i7158.scale = i7159[8]
  return i7158
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7160 = root || request.c( 'TMPro.KerningTable' )
  var i7161 = data
  var i7163 = i7161[0]
  var i7162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7163.length; i += 1) {
    i7162.add(request.d('TMPro.KerningPair', i7163[i + 0]));
  }
  i7160.kerningPairs = i7162
  return i7160
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7166 = root || request.c( 'TMPro.KerningPair' )
  var i7167 = data
  i7166.xOffset = i7167[0]
  i7166.m_FirstGlyph = i7167[1]
  i7166.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7167[2], i7166.m_FirstGlyphAdjustments)
  i7166.m_SecondGlyph = i7167[3]
  i7166.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7167[4], i7166.m_SecondGlyphAdjustments)
  i7166.m_IgnoreSpacingAdjustments = !!i7167[5]
  return i7166
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7168 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7169 = data
  i7168.m_FaceIndex = i7169[0]
  i7168.m_FamilyName = i7169[1]
  i7168.m_StyleName = i7169[2]
  i7168.m_PointSize = i7169[3]
  i7168.m_Scale = i7169[4]
  i7168.m_UnitsPerEM = i7169[5]
  i7168.m_LineHeight = i7169[6]
  i7168.m_AscentLine = i7169[7]
  i7168.m_CapLine = i7169[8]
  i7168.m_MeanLine = i7169[9]
  i7168.m_Baseline = i7169[10]
  i7168.m_DescentLine = i7169[11]
  i7168.m_SuperscriptOffset = i7169[12]
  i7168.m_SuperscriptSize = i7169[13]
  i7168.m_SubscriptOffset = i7169[14]
  i7168.m_SubscriptSize = i7169[15]
  i7168.m_UnderlineOffset = i7169[16]
  i7168.m_UnderlineThickness = i7169[17]
  i7168.m_StrikethroughOffset = i7169[18]
  i7168.m_StrikethroughThickness = i7169[19]
  i7168.m_TabWidth = i7169[20]
  return i7168
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7171 = data
  i7170.useSafeMode = !!i7171[0]
  i7170.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7171[1], i7170.safeModeOptions)
  i7170.timeScale = i7171[2]
  i7170.unscaledTimeScale = i7171[3]
  i7170.useSmoothDeltaTime = !!i7171[4]
  i7170.maxSmoothUnscaledTime = i7171[5]
  i7170.rewindCallbackMode = i7171[6]
  i7170.showUnityEditorReport = !!i7171[7]
  i7170.logBehaviour = i7171[8]
  i7170.drawGizmos = !!i7171[9]
  i7170.defaultRecyclable = !!i7171[10]
  i7170.defaultAutoPlay = i7171[11]
  i7170.defaultUpdateType = i7171[12]
  i7170.defaultTimeScaleIndependent = !!i7171[13]
  i7170.defaultEaseType = i7171[14]
  i7170.defaultEaseOvershootOrAmplitude = i7171[15]
  i7170.defaultEasePeriod = i7171[16]
  i7170.defaultAutoKill = !!i7171[17]
  i7170.defaultLoopType = i7171[18]
  i7170.debugMode = !!i7171[19]
  i7170.debugStoreTargetId = !!i7171[20]
  i7170.showPreviewPanel = !!i7171[21]
  i7170.storeSettingsLocation = i7171[22]
  i7170.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7171[23], i7170.modules)
  i7170.createASMDEF = !!i7171[24]
  i7170.showPlayingTweens = !!i7171[25]
  i7170.showPausedTweens = !!i7171[26]
  return i7170
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7173 = data
  i7172.logBehaviour = i7173[0]
  i7172.nestedTweenFailureBehaviour = i7173[1]
  return i7172
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7175 = data
  i7174.showPanel = !!i7175[0]
  i7174.audioEnabled = !!i7175[1]
  i7174.physicsEnabled = !!i7175[2]
  i7174.physics2DEnabled = !!i7175[3]
  i7174.spriteEnabled = !!i7175[4]
  i7174.uiEnabled = !!i7175[5]
  i7174.textMeshProEnabled = !!i7175[6]
  i7174.tk2DEnabled = !!i7175[7]
  i7174.deAudioEnabled = !!i7175[8]
  i7174.deUnityExtendedEnabled = !!i7175[9]
  i7174.epoOutlineEnabled = !!i7175[10]
  return i7174
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7176 = root || request.c( 'TMPro.TMP_Settings' )
  var i7177 = data
  i7176.assetVersion = i7177[0]
  i7176.m_TextWrappingMode = i7177[1]
  i7176.m_enableKerning = !!i7177[2]
  var i7179 = i7177[3]
  var i7178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7179.length; i += 1) {
    i7178.add(i7179[i + 0]);
  }
  i7176.m_ActiveFontFeatures = i7178
  i7176.m_enableExtraPadding = !!i7177[4]
  i7176.m_enableTintAllSprites = !!i7177[5]
  i7176.m_enableParseEscapeCharacters = !!i7177[6]
  i7176.m_EnableRaycastTarget = !!i7177[7]
  i7176.m_GetFontFeaturesAtRuntime = !!i7177[8]
  i7176.m_missingGlyphCharacter = i7177[9]
  i7176.m_ClearDynamicDataOnBuild = !!i7177[10]
  i7176.m_warningsDisabled = !!i7177[11]
  request.r(i7177[12], i7177[13], 0, i7176, 'm_defaultFontAsset')
  i7176.m_defaultFontAssetPath = i7177[14]
  i7176.m_defaultFontSize = i7177[15]
  i7176.m_defaultAutoSizeMinRatio = i7177[16]
  i7176.m_defaultAutoSizeMaxRatio = i7177[17]
  i7176.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7177[18], i7177[19] )
  i7176.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7177[20], i7177[21] )
  i7176.m_autoSizeTextContainer = !!i7177[22]
  i7176.m_IsTextObjectScaleStatic = !!i7177[23]
  var i7181 = i7177[24]
  var i7180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7181.length; i += 2) {
  request.r(i7181[i + 0], i7181[i + 1], 1, i7180, '')
  }
  i7176.m_fallbackFontAssets = i7180
  i7176.m_matchMaterialPreset = !!i7177[25]
  i7176.m_HideSubTextObjects = !!i7177[26]
  request.r(i7177[27], i7177[28], 0, i7176, 'm_defaultSpriteAsset')
  i7176.m_defaultSpriteAssetPath = i7177[29]
  i7176.m_enableEmojiSupport = !!i7177[30]
  i7176.m_MissingCharacterSpriteUnicode = i7177[31]
  var i7183 = i7177[32]
  var i7182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7183.length; i += 2) {
  request.r(i7183[i + 0], i7183[i + 1], 1, i7182, '')
  }
  i7176.m_EmojiFallbackTextAssets = i7182
  i7176.m_defaultColorGradientPresetsPath = i7177[33]
  request.r(i7177[34], i7177[35], 0, i7176, 'm_defaultStyleSheet')
  i7176.m_StyleSheetsResourcePath = i7177[36]
  request.r(i7177[37], i7177[38], 0, i7176, 'm_leadingCharacters')
  request.r(i7177[39], i7177[40], 0, i7176, 'm_followingCharacters')
  i7176.m_UseModernHangulLineBreakingRules = !!i7177[41]
  return i7176
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7186 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7187 = data
  request.r(i7187[0], i7187[1], 0, i7186, 'spriteSheet')
  var i7189 = i7187[2]
  var i7188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7189.length; i += 1) {
    i7188.add(request.d('TMPro.TMP_Sprite', i7189[i + 0]));
  }
  i7186.spriteInfoList = i7188
  var i7191 = i7187[3]
  var i7190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7191.length; i += 2) {
  request.r(i7191[i + 0], i7191[i + 1], 1, i7190, '')
  }
  i7186.fallbackSpriteAssets = i7190
  var i7193 = i7187[4]
  var i7192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7193.length; i += 1) {
    i7192.add(request.d('TMPro.TMP_SpriteCharacter', i7193[i + 0]));
  }
  i7186.m_SpriteCharacterTable = i7192
  var i7195 = i7187[5]
  var i7194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7195.length; i += 1) {
    i7194.add(request.d('TMPro.TMP_SpriteGlyph', i7195[i + 0]));
  }
  i7186.m_GlyphTable = i7194
  i7186.m_Version = i7187[6]
  i7186.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7187[7], i7186.m_FaceInfo)
  request.r(i7187[8], i7187[9], 0, i7186, 'm_Material')
  return i7186
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7198 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7199 = data
  i7198.name = i7199[0]
  i7198.hashCode = i7199[1]
  i7198.unicode = i7199[2]
  i7198.pivot = new pc.Vec2( i7199[3], i7199[4] )
  request.r(i7199[5], i7199[6], 0, i7198, 'sprite')
  i7198.id = i7199[7]
  i7198.x = i7199[8]
  i7198.y = i7199[9]
  i7198.width = i7199[10]
  i7198.height = i7199[11]
  i7198.xOffset = i7199[12]
  i7198.yOffset = i7199[13]
  i7198.xAdvance = i7199[14]
  i7198.scale = i7199[15]
  return i7198
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7204 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7205 = data
  i7204.m_Name = i7205[0]
  i7204.m_ElementType = i7205[1]
  i7204.m_Unicode = i7205[2]
  i7204.m_GlyphIndex = i7205[3]
  i7204.m_Scale = i7205[4]
  return i7204
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7208 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7209 = data
  request.r(i7209[0], i7209[1], 0, i7208, 'sprite')
  i7208.m_Index = i7209[2]
  i7208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7209[3], i7208.m_Metrics)
  i7208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7209[4], i7208.m_GlyphRect)
  i7208.m_Scale = i7209[5]
  i7208.m_AtlasIndex = i7209[6]
  i7208.m_ClassDefinitionType = i7209[7]
  return i7208
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7210 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7211 = data
  var i7213 = i7211[0]
  var i7212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7213.length; i += 1) {
    i7212.add(request.d('TMPro.TMP_Style', i7213[i + 0]));
  }
  i7210.m_StyleList = i7212
  return i7210
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7216 = root || request.c( 'TMPro.TMP_Style' )
  var i7217 = data
  i7216.m_Name = i7217[0]
  i7216.m_HashCode = i7217[1]
  i7216.m_OpeningDefinition = i7217[2]
  i7216.m_ClosingDefinition = i7217[3]
  i7216.m_OpeningTagArray = i7217[4]
  i7216.m_ClosingTagArray = i7217[5]
  return i7216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7219 = data
  var i7221 = i7219[0]
  var i7220 = []
  for(var i = 0; i < i7221.length; i += 1) {
    i7220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7221[i + 0]) );
  }
  i7218.files = i7220
  i7218.componentToPrefabIds = i7219[1]
  return i7218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7225 = data
  i7224.path = i7225[0]
  request.r(i7225[1], i7225[2], 0, i7224, 'unityObject')
  return i7224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7227 = data
  var i7229 = i7227[0]
  var i7228 = []
  for(var i = 0; i < i7229.length; i += 1) {
    i7228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7229[i + 0]) );
  }
  i7226.scriptsExecutionOrder = i7228
  var i7231 = i7227[1]
  var i7230 = []
  for(var i = 0; i < i7231.length; i += 1) {
    i7230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7231[i + 0]) );
  }
  i7226.sortingLayers = i7230
  var i7233 = i7227[2]
  var i7232 = []
  for(var i = 0; i < i7233.length; i += 1) {
    i7232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7233[i + 0]) );
  }
  i7226.cullingLayers = i7232
  i7226.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7227[3], i7226.timeSettings)
  i7226.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7227[4], i7226.physicsSettings)
  i7226.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7227[5], i7226.physics2DSettings)
  i7226.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7227[6], i7226.qualitySettings)
  i7226.enableRealtimeShadows = !!i7227[7]
  i7226.enableAutoInstancing = !!i7227[8]
  i7226.enableStaticBatching = !!i7227[9]
  i7226.enableDynamicBatching = !!i7227[10]
  i7226.usePreservativeDynamicBatching = !!i7227[11]
  i7226.lightmapEncodingQuality = i7227[12]
  i7226.desiredColorSpace = i7227[13]
  var i7235 = i7227[14]
  var i7234 = []
  for(var i = 0; i < i7235.length; i += 1) {
    i7234.push( i7235[i + 0] );
  }
  i7226.allTags = i7234
  return i7226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7239 = data
  i7238.name = i7239[0]
  i7238.value = i7239[1]
  return i7238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7243 = data
  i7242.id = i7243[0]
  i7242.name = i7243[1]
  i7242.value = i7243[2]
  return i7242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7247 = data
  i7246.id = i7247[0]
  i7246.name = i7247[1]
  return i7246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7249 = data
  i7248.fixedDeltaTime = i7249[0]
  i7248.maximumDeltaTime = i7249[1]
  i7248.timeScale = i7249[2]
  i7248.maximumParticleTimestep = i7249[3]
  return i7248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7251 = data
  i7250.gravity = new pc.Vec3( i7251[0], i7251[1], i7251[2] )
  i7250.defaultSolverIterations = i7251[3]
  i7250.bounceThreshold = i7251[4]
  i7250.autoSyncTransforms = !!i7251[5]
  i7250.autoSimulation = !!i7251[6]
  var i7253 = i7251[7]
  var i7252 = []
  for(var i = 0; i < i7253.length; i += 1) {
    i7252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7253[i + 0]) );
  }
  i7250.collisionMatrix = i7252
  return i7250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7257 = data
  i7256.enabled = !!i7257[0]
  i7256.layerId = i7257[1]
  i7256.otherLayerId = i7257[2]
  return i7256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7259 = data
  request.r(i7259[0], i7259[1], 0, i7258, 'material')
  i7258.gravity = new pc.Vec2( i7259[2], i7259[3] )
  i7258.positionIterations = i7259[4]
  i7258.velocityIterations = i7259[5]
  i7258.velocityThreshold = i7259[6]
  i7258.maxLinearCorrection = i7259[7]
  i7258.maxAngularCorrection = i7259[8]
  i7258.maxTranslationSpeed = i7259[9]
  i7258.maxRotationSpeed = i7259[10]
  i7258.baumgarteScale = i7259[11]
  i7258.baumgarteTOIScale = i7259[12]
  i7258.timeToSleep = i7259[13]
  i7258.linearSleepTolerance = i7259[14]
  i7258.angularSleepTolerance = i7259[15]
  i7258.defaultContactOffset = i7259[16]
  i7258.autoSimulation = !!i7259[17]
  i7258.queriesHitTriggers = !!i7259[18]
  i7258.queriesStartInColliders = !!i7259[19]
  i7258.callbacksOnDisable = !!i7259[20]
  i7258.reuseCollisionCallbacks = !!i7259[21]
  i7258.autoSyncTransforms = !!i7259[22]
  var i7261 = i7259[23]
  var i7260 = []
  for(var i = 0; i < i7261.length; i += 1) {
    i7260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7261[i + 0]) );
  }
  i7258.collisionMatrix = i7260
  return i7258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7265 = data
  i7264.enabled = !!i7265[0]
  i7264.layerId = i7265[1]
  i7264.otherLayerId = i7265[2]
  return i7264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7267 = data
  var i7269 = i7267[0]
  var i7268 = []
  for(var i = 0; i < i7269.length; i += 1) {
    i7268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7269[i + 0]) );
  }
  i7266.qualityLevels = i7268
  var i7271 = i7267[1]
  var i7270 = []
  for(var i = 0; i < i7271.length; i += 1) {
    i7270.push( i7271[i + 0] );
  }
  i7266.names = i7270
  i7266.shadows = i7267[2]
  i7266.anisotropicFiltering = i7267[3]
  i7266.antiAliasing = i7267[4]
  i7266.lodBias = i7267[5]
  i7266.shadowCascades = i7267[6]
  i7266.shadowDistance = i7267[7]
  i7266.shadowmaskMode = i7267[8]
  i7266.shadowProjection = i7267[9]
  i7266.shadowResolution = i7267[10]
  i7266.softParticles = !!i7267[11]
  i7266.softVegetation = !!i7267[12]
  i7266.activeColorSpace = i7267[13]
  i7266.desiredColorSpace = i7267[14]
  i7266.masterTextureLimit = i7267[15]
  i7266.maxQueuedFrames = i7267[16]
  i7266.particleRaycastBudget = i7267[17]
  i7266.pixelLightCount = i7267[18]
  i7266.realtimeReflectionProbes = !!i7267[19]
  i7266.shadowCascade2Split = i7267[20]
  i7266.shadowCascade4Split = new pc.Vec3( i7267[21], i7267[22], i7267[23] )
  i7266.streamingMipmapsActive = !!i7267[24]
  i7266.vSyncCount = i7267[25]
  i7266.asyncUploadBufferSize = i7267[26]
  i7266.asyncUploadTimeSlice = i7267[27]
  i7266.billboardsFaceCameraPosition = !!i7267[28]
  i7266.shadowNearPlaneOffset = i7267[29]
  i7266.streamingMipmapsMemoryBudget = i7267[30]
  i7266.maximumLODLevel = i7267[31]
  i7266.streamingMipmapsAddAllCameras = !!i7267[32]
  i7266.streamingMipmapsMaxLevelReduction = i7267[33]
  i7266.streamingMipmapsRenderersPerFrame = i7267[34]
  i7266.resolutionScalingFixedDPIFactor = i7267[35]
  i7266.streamingMipmapsMaxFileIORequests = i7267[36]
  i7266.currentQualityLevel = i7267[37]
  return i7266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i7274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i7275 = data
  i7274.name = i7275[0]
  var i7277 = i7275[1]
  var i7276 = []
  for(var i = 0; i < i7277.length; i += 1) {
    i7276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i7277[i + 0]) );
  }
  i7274.tos = i7276
  var i7279 = i7275[2]
  var i7278 = []
  for(var i = 0; i < i7279.length; i += 1) {
    i7278.push( i7279[i + 0] );
  }
  i7274.constant = i7278
  i7274.isValid = !!i7275[3]
  i7274.isHuman = !!i7275[4]
  i7274.hasRootMotion = !!i7275[5]
  return i7274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i7282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i7283 = data
  i7282.hash = i7283[0]
  i7282.path = i7283[1]
  return i7282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7287 = data
  i7286.weight = i7287[0]
  i7286.vertices = i7287[1]
  i7286.normals = i7287[2]
  i7286.tangents = i7287[3]
  return i7286
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7288 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7289 = data
  request.r(i7289[0], i7289[1], 0, i7288, 'm_ObjectArgument')
  i7288.m_ObjectArgumentAssemblyTypeName = i7289[2]
  i7288.m_IntArgument = i7289[3]
  i7288.m_FloatArgument = i7289[4]
  i7288.m_StringArgument = i7289[5]
  i7288.m_BoolArgument = !!i7289[6]
  return i7288
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7290 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i7291 = data
  i7290.m_GlyphIndex = i7291[0]
  i7290.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i7291[1], i7290.m_GlyphValueRecord)
  return i7290
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i7292 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i7293 = data
  i7292.m_XCoordinate = i7293[0]
  i7292.m_YCoordinate = i7293[1]
  return i7292
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i7294 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i7295 = data
  i7294.m_XPositionAdjustment = i7295[0]
  i7294.m_YPositionAdjustment = i7295[1]
  return i7294
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7296 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7297 = data
  i7296.xPlacement = i7297[0]
  i7296.yPlacement = i7297[1]
  i7296.xAdvance = i7297[2]
  i7296.yAdvance = i7297[3]
  return i7296
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i7298 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i7299 = data
  i7298.m_XPlacement = i7299[0]
  i7298.m_YPlacement = i7299[1]
  i7298.m_XAdvance = i7299[2]
  i7298.m_YAdvance = i7299[3]
  return i7298
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[52],"78":[56],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[56],"100":[37],"101":[102],"103":[102],"7":[6],"11":[8],"104":[6],"105":[37,6],"19":[6,13],"106":[6],"107":[13,6],"108":[37],"109":[13,6],"110":[6],"111":[112],"113":[112],"114":[112],"115":[6],"116":[6],"9":[7],"14":[13,6],"25":[6],"8":[7],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"18":[6],"124":[6],"125":[13,6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[13,6],"131":[6],"132":[4],"133":[4],"5":[4],"134":[4],"135":[56],"136":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.AspectRatioFitter","SelectPanel","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "8.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V04_HoaiTT_HuyNQ";

Deserializers.lunaAppID = "42700";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1662";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4793";

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

Deserializers.buildID = "6008423e-c225-4822-b196-126c9dc0b6c5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

