var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i9704 = root || request.c( 'UnityEngine.JointSpring' )
  var i9705 = data
  i9704.spring = i9705[0]
  i9704.damper = i9705[1]
  i9704.targetPosition = i9705[2]
  return i9704
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i9706 = root || request.c( 'UnityEngine.JointMotor' )
  var i9707 = data
  i9706.m_TargetVelocity = i9707[0]
  i9706.m_Force = i9707[1]
  i9706.m_FreeSpin = i9707[2]
  return i9706
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i9708 = root || request.c( 'UnityEngine.JointLimits' )
  var i9709 = data
  i9708.m_Min = i9709[0]
  i9708.m_Max = i9709[1]
  i9708.m_Bounciness = i9709[2]
  i9708.m_BounceMinVelocity = i9709[3]
  i9708.m_ContactDistance = i9709[4]
  i9708.minBounce = i9709[5]
  i9708.maxBounce = i9709[6]
  return i9708
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i9710 = root || request.c( 'UnityEngine.JointDrive' )
  var i9711 = data
  i9710.m_PositionSpring = i9711[0]
  i9710.m_PositionDamper = i9711[1]
  i9710.m_MaximumForce = i9711[2]
  i9710.m_UseAcceleration = i9711[3]
  return i9710
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i9712 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i9713 = data
  i9712.m_Spring = i9713[0]
  i9712.m_Damper = i9713[1]
  return i9712
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i9714 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i9715 = data
  i9714.m_Limit = i9715[0]
  i9714.m_Bounciness = i9715[1]
  i9714.m_ContactDistance = i9715[2]
  return i9714
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i9716 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i9717 = data
  i9716.m_ExtremumSlip = i9717[0]
  i9716.m_ExtremumValue = i9717[1]
  i9716.m_AsymptoteSlip = i9717[2]
  i9716.m_AsymptoteValue = i9717[3]
  i9716.m_Stiffness = i9717[4]
  return i9716
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i9718 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i9719 = data
  i9718.m_LowerAngle = i9719[0]
  i9718.m_UpperAngle = i9719[1]
  return i9718
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i9720 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i9721 = data
  i9720.m_MotorSpeed = i9721[0]
  i9720.m_MaximumMotorTorque = i9721[1]
  return i9720
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i9722 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i9723 = data
  i9722.m_DampingRatio = i9723[0]
  i9722.m_Frequency = i9723[1]
  i9722.m_Angle = i9723[2]
  return i9722
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i9724 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i9725 = data
  i9724.m_LowerTranslation = i9725[0]
  i9724.m_UpperTranslation = i9725[1]
  return i9724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i9726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i9727 = data
  i9726.name = i9727[0]
  i9726.width = i9727[1]
  i9726.height = i9727[2]
  i9726.mipmapCount = i9727[3]
  i9726.anisoLevel = i9727[4]
  i9726.filterMode = i9727[5]
  i9726.hdr = !!i9727[6]
  i9726.format = i9727[7]
  i9726.wrapMode = i9727[8]
  i9726.alphaIsTransparency = !!i9727[9]
  i9726.alphaSource = i9727[10]
  i9726.graphicsFormat = i9727[11]
  i9726.sRGBTexture = !!i9727[12]
  i9726.desiredColorSpace = i9727[13]
  i9726.wrapU = i9727[14]
  i9726.wrapV = i9727[15]
  return i9726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i9728 = root || new pc.UnityMaterial()
  var i9729 = data
  i9728.name = i9729[0]
  request.r(i9729[1], i9729[2], 0, i9728, 'shader')
  i9728.renderQueue = i9729[3]
  i9728.enableInstancing = !!i9729[4]
  var i9731 = i9729[5]
  var i9730 = []
  for(var i = 0; i < i9731.length; i += 1) {
    i9730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i9731[i + 0]) );
  }
  i9728.floatParameters = i9730
  var i9733 = i9729[6]
  var i9732 = []
  for(var i = 0; i < i9733.length; i += 1) {
    i9732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i9733[i + 0]) );
  }
  i9728.colorParameters = i9732
  var i9735 = i9729[7]
  var i9734 = []
  for(var i = 0; i < i9735.length; i += 1) {
    i9734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i9735[i + 0]) );
  }
  i9728.vectorParameters = i9734
  var i9737 = i9729[8]
  var i9736 = []
  for(var i = 0; i < i9737.length; i += 1) {
    i9736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i9737[i + 0]) );
  }
  i9728.textureParameters = i9736
  var i9739 = i9729[9]
  var i9738 = []
  for(var i = 0; i < i9739.length; i += 1) {
    i9738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i9739[i + 0]) );
  }
  i9728.materialFlags = i9738
  return i9728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i9742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i9743 = data
  i9742.name = i9743[0]
  i9742.value = i9743[1]
  return i9742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i9746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i9747 = data
  i9746.name = i9747[0]
  i9746.value = new pc.Color(i9747[1], i9747[2], i9747[3], i9747[4])
  return i9746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i9750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i9751 = data
  i9750.name = i9751[0]
  i9750.value = new pc.Vec4( i9751[1], i9751[2], i9751[3], i9751[4] )
  return i9750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i9754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i9755 = data
  i9754.name = i9755[0]
  request.r(i9755[1], i9755[2], 0, i9754, 'value')
  return i9754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i9758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i9759 = data
  i9758.name = i9759[0]
  i9758.enabled = !!i9759[1]
  return i9758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i9760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i9761 = data
  i9760.name = i9761[0]
  i9760.halfPrecision = !!i9761[1]
  i9760.useSimplification = !!i9761[2]
  i9760.useUInt32IndexFormat = !!i9761[3]
  i9760.vertexCount = i9761[4]
  i9760.aabb = i9761[5]
  var i9763 = i9761[6]
  var i9762 = []
  for(var i = 0; i < i9763.length; i += 1) {
    i9762.push( !!i9763[i + 0] );
  }
  i9760.streams = i9762
  i9760.vertices = i9761[7]
  var i9765 = i9761[8]
  var i9764 = []
  for(var i = 0; i < i9765.length; i += 1) {
    i9764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i9765[i + 0]) );
  }
  i9760.subMeshes = i9764
  var i9767 = i9761[9]
  var i9766 = []
  for(var i = 0; i < i9767.length; i += 16) {
    i9766.push( new pc.Mat4().setData(i9767[i + 0], i9767[i + 1], i9767[i + 2], i9767[i + 3],  i9767[i + 4], i9767[i + 5], i9767[i + 6], i9767[i + 7],  i9767[i + 8], i9767[i + 9], i9767[i + 10], i9767[i + 11],  i9767[i + 12], i9767[i + 13], i9767[i + 14], i9767[i + 15]) );
  }
  i9760.bindposes = i9766
  var i9769 = i9761[10]
  var i9768 = []
  for(var i = 0; i < i9769.length; i += 1) {
    i9768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i9769[i + 0]) );
  }
  i9760.blendShapes = i9768
  return i9760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i9774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i9775 = data
  i9774.triangles = i9775[0]
  return i9774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i9780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i9781 = data
  i9780.name = i9781[0]
  var i9783 = i9781[1]
  var i9782 = []
  for(var i = 0; i < i9783.length; i += 1) {
    i9782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i9783[i + 0]) );
  }
  i9780.frames = i9782
  return i9780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i9784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i9785 = data
  i9784.name = i9785[0]
  i9784.atlasId = i9785[1]
  i9784.mipmapCount = i9785[2]
  i9784.hdr = !!i9785[3]
  i9784.size = i9785[4]
  i9784.anisoLevel = i9785[5]
  i9784.filterMode = i9785[6]
  var i9787 = i9785[7]
  var i9786 = []
  for(var i = 0; i < i9787.length; i += 4) {
    i9786.push( UnityEngine.Rect.MinMaxRect(i9787[i + 0], i9787[i + 1], i9787[i + 2], i9787[i + 3]) );
  }
  i9784.rects = i9786
  i9784.wrapU = i9785[8]
  i9784.wrapV = i9785[9]
  return i9784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i9790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i9791 = data
  i9790.name = i9791[0]
  i9790.index = i9791[1]
  i9790.startup = !!i9791[2]
  return i9790
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9792 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9793 = data
  request.r(i9793[0], i9793[1], 0, i9792, 'm_FirstSelected')
  i9792.m_sendNavigationEvents = !!i9793[2]
  i9792.m_DragThreshold = i9793[3]
  return i9792
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9794 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9795 = data
  i9794.m_HorizontalAxis = i9795[0]
  i9794.m_VerticalAxis = i9795[1]
  i9794.m_SubmitButton = i9795[2]
  i9794.m_CancelButton = i9795[3]
  i9794.m_InputActionsPerSecond = i9795[4]
  i9794.m_RepeatDelay = i9795[5]
  i9794.m_ForceModuleActive = !!i9795[6]
  i9794.m_SendPointerHoverToParent = !!i9795[7]
  return i9794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i9796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i9797 = data
  i9796.name = i9797[0]
  i9796.tagId = i9797[1]
  i9796.enabled = !!i9797[2]
  i9796.isStatic = !!i9797[3]
  i9796.layer = i9797[4]
  return i9796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i9798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i9799 = data
  i9798.pivot = new pc.Vec2( i9799[0], i9799[1] )
  i9798.anchorMin = new pc.Vec2( i9799[2], i9799[3] )
  i9798.anchorMax = new pc.Vec2( i9799[4], i9799[5] )
  i9798.sizeDelta = new pc.Vec2( i9799[6], i9799[7] )
  i9798.anchoredPosition3D = new pc.Vec3( i9799[8], i9799[9], i9799[10] )
  i9798.rotation = new pc.Quat(i9799[11], i9799[12], i9799[13], i9799[14])
  i9798.scale = new pc.Vec3( i9799[15], i9799[16], i9799[17] )
  return i9798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i9800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i9801 = data
  i9800.planeDistance = i9801[0]
  i9800.referencePixelsPerUnit = i9801[1]
  i9800.isFallbackOverlay = !!i9801[2]
  i9800.renderMode = i9801[3]
  i9800.renderOrder = i9801[4]
  i9800.sortingLayerName = i9801[5]
  i9800.sortingOrder = i9801[6]
  i9800.scaleFactor = i9801[7]
  request.r(i9801[8], i9801[9], 0, i9800, 'worldCamera')
  i9800.overrideSorting = !!i9801[10]
  i9800.pixelPerfect = !!i9801[11]
  i9800.targetDisplay = i9801[12]
  i9800.overridePixelPerfect = !!i9801[13]
  i9800.enabled = !!i9801[14]
  return i9800
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i9802 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i9803 = data
  i9802.m_UiScaleMode = i9803[0]
  i9802.m_ReferencePixelsPerUnit = i9803[1]
  i9802.m_ScaleFactor = i9803[2]
  i9802.m_ReferenceResolution = new pc.Vec2( i9803[3], i9803[4] )
  i9802.m_ScreenMatchMode = i9803[5]
  i9802.m_MatchWidthOrHeight = i9803[6]
  i9802.m_PhysicalUnit = i9803[7]
  i9802.m_FallbackScreenDPI = i9803[8]
  i9802.m_DefaultSpriteDPI = i9803[9]
  i9802.m_DynamicPixelsPerUnit = i9803[10]
  i9802.m_PresetInfoIsWorld = !!i9803[11]
  return i9802
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i9804 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i9805 = data
  i9804.m_IgnoreReversedGraphics = !!i9805[0]
  i9804.m_BlockingObjects = i9805[1]
  i9804.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i9805[2] )
  return i9804
}

Deserializers["Joystick"] = function (request, data, root) {
  var i9806 = root || request.c( 'Joystick' )
  var i9807 = data
  request.r(i9807[0], i9807[1], 0, i9806, 'background')
  request.r(i9807[2], i9807[3], 0, i9806, 'joy')
  i9806.deadZone = i9807[4]
  return i9806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i9808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i9809 = data
  i9808.cullTransparentMesh = !!i9809[0]
  return i9808
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i9810 = root || request.c( 'UnityEngine.UI.Image' )
  var i9811 = data
  request.r(i9811[0], i9811[1], 0, i9810, 'm_Sprite')
  i9810.m_Type = i9811[2]
  i9810.m_PreserveAspect = !!i9811[3]
  i9810.m_FillCenter = !!i9811[4]
  i9810.m_FillMethod = i9811[5]
  i9810.m_FillAmount = i9811[6]
  i9810.m_FillClockwise = !!i9811[7]
  i9810.m_FillOrigin = i9811[8]
  i9810.m_UseSpriteMesh = !!i9811[9]
  i9810.m_PixelsPerUnitMultiplier = i9811[10]
  request.r(i9811[11], i9811[12], 0, i9810, 'm_Material')
  i9810.m_Maskable = !!i9811[13]
  i9810.m_Color = new pc.Color(i9811[14], i9811[15], i9811[16], i9811[17])
  i9810.m_RaycastTarget = !!i9811[18]
  i9810.m_RaycastPadding = new pc.Vec4( i9811[19], i9811[20], i9811[21], i9811[22] )
  return i9810
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i9812 = root || request.c( 'UnityEngine.UI.Button' )
  var i9813 = data
  i9812.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i9813[0], i9812.m_OnClick)
  i9812.m_Navigation = request.d('UnityEngine.UI.Navigation', i9813[1], i9812.m_Navigation)
  i9812.m_Transition = i9813[2]
  i9812.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9813[3], i9812.m_Colors)
  i9812.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9813[4], i9812.m_SpriteState)
  i9812.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9813[5], i9812.m_AnimationTriggers)
  i9812.m_Interactable = !!i9813[6]
  request.r(i9813[7], i9813[8], 0, i9812, 'm_TargetGraphic')
  return i9812
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i9814 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i9815 = data
  i9814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9815[0], i9814.m_PersistentCalls)
  return i9814
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i9816 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i9817 = data
  var i9819 = i9817[0]
  var i9818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i9819.length; i += 1) {
    i9818.add(request.d('UnityEngine.Events.PersistentCall', i9819[i + 0]));
  }
  i9816.m_Calls = i9818
  return i9816
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i9822 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i9823 = data
  request.r(i9823[0], i9823[1], 0, i9822, 'm_Target')
  i9822.m_TargetAssemblyTypeName = i9823[2]
  i9822.m_MethodName = i9823[3]
  i9822.m_Mode = i9823[4]
  i9822.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i9823[5], i9822.m_Arguments)
  i9822.m_CallState = i9823[6]
  return i9822
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i9824 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i9825 = data
  i9824.m_Mode = i9825[0]
  i9824.m_WrapAround = !!i9825[1]
  request.r(i9825[2], i9825[3], 0, i9824, 'm_SelectOnUp')
  request.r(i9825[4], i9825[5], 0, i9824, 'm_SelectOnDown')
  request.r(i9825[6], i9825[7], 0, i9824, 'm_SelectOnLeft')
  request.r(i9825[8], i9825[9], 0, i9824, 'm_SelectOnRight')
  return i9824
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i9826 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i9827 = data
  i9826.m_NormalColor = new pc.Color(i9827[0], i9827[1], i9827[2], i9827[3])
  i9826.m_HighlightedColor = new pc.Color(i9827[4], i9827[5], i9827[6], i9827[7])
  i9826.m_PressedColor = new pc.Color(i9827[8], i9827[9], i9827[10], i9827[11])
  i9826.m_SelectedColor = new pc.Color(i9827[12], i9827[13], i9827[14], i9827[15])
  i9826.m_DisabledColor = new pc.Color(i9827[16], i9827[17], i9827[18], i9827[19])
  i9826.m_ColorMultiplier = i9827[20]
  i9826.m_FadeDuration = i9827[21]
  return i9826
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i9828 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i9829 = data
  request.r(i9829[0], i9829[1], 0, i9828, 'm_HighlightedSprite')
  request.r(i9829[2], i9829[3], 0, i9828, 'm_PressedSprite')
  request.r(i9829[4], i9829[5], 0, i9828, 'm_SelectedSprite')
  request.r(i9829[6], i9829[7], 0, i9828, 'm_DisabledSprite')
  return i9828
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i9830 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i9831 = data
  i9830.m_NormalTrigger = i9831[0]
  i9830.m_HighlightedTrigger = i9831[1]
  i9830.m_PressedTrigger = i9831[2]
  i9830.m_SelectedTrigger = i9831[3]
  i9830.m_DisabledTrigger = i9831[4]
  return i9830
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i9832 = root || request.c( 'JumpButton' )
  var i9833 = data
  request.r(i9833[0], i9833[1], 0, i9832, 'button')
  return i9832
}

Deserializers["TutController"] = function (request, data, root) {
  var i9834 = root || request.c( 'TutController' )
  var i9835 = data
  request.r(i9835[0], i9835[1], 0, i9834, 'tutScene')
  request.r(i9835[2], i9835[3], 0, i9834, 'startTut')
  request.r(i9835[4], i9835[5], 0, i9834, 'playTut')
  request.r(i9835[6], i9835[7], 0, i9834, 'farTut')
  request.r(i9835[8], i9835[9], 0, i9834, 'failTut')
  return i9834
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i9836 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i9837 = data
  i9836.m_hasFontAssetChanged = !!i9837[0]
  request.r(i9837[1], i9837[2], 0, i9836, 'm_baseMaterial')
  i9836.m_maskOffset = new pc.Vec4( i9837[3], i9837[4], i9837[5], i9837[6] )
  i9836.m_text = i9837[7]
  i9836.m_isRightToLeft = !!i9837[8]
  request.r(i9837[9], i9837[10], 0, i9836, 'm_fontAsset')
  request.r(i9837[11], i9837[12], 0, i9836, 'm_sharedMaterial')
  var i9839 = i9837[13]
  var i9838 = []
  for(var i = 0; i < i9839.length; i += 2) {
  request.r(i9839[i + 0], i9839[i + 1], 2, i9838, '')
  }
  i9836.m_fontSharedMaterials = i9838
  request.r(i9837[14], i9837[15], 0, i9836, 'm_fontMaterial')
  var i9841 = i9837[16]
  var i9840 = []
  for(var i = 0; i < i9841.length; i += 2) {
  request.r(i9841[i + 0], i9841[i + 1], 2, i9840, '')
  }
  i9836.m_fontMaterials = i9840
  i9836.m_fontColor32 = UnityEngine.Color32.ConstructColor(i9837[17], i9837[18], i9837[19], i9837[20])
  i9836.m_fontColor = new pc.Color(i9837[21], i9837[22], i9837[23], i9837[24])
  i9836.m_enableVertexGradient = !!i9837[25]
  i9836.m_colorMode = i9837[26]
  i9836.m_fontColorGradient = request.d('TMPro.VertexGradient', i9837[27], i9836.m_fontColorGradient)
  request.r(i9837[28], i9837[29], 0, i9836, 'm_fontColorGradientPreset')
  request.r(i9837[30], i9837[31], 0, i9836, 'm_spriteAsset')
  i9836.m_tintAllSprites = !!i9837[32]
  request.r(i9837[33], i9837[34], 0, i9836, 'm_StyleSheet')
  i9836.m_TextStyleHashCode = i9837[35]
  i9836.m_overrideHtmlColors = !!i9837[36]
  i9836.m_faceColor = UnityEngine.Color32.ConstructColor(i9837[37], i9837[38], i9837[39], i9837[40])
  i9836.m_fontSize = i9837[41]
  i9836.m_fontSizeBase = i9837[42]
  i9836.m_fontWeight = i9837[43]
  i9836.m_enableAutoSizing = !!i9837[44]
  i9836.m_fontSizeMin = i9837[45]
  i9836.m_fontSizeMax = i9837[46]
  i9836.m_fontStyle = i9837[47]
  i9836.m_HorizontalAlignment = i9837[48]
  i9836.m_VerticalAlignment = i9837[49]
  i9836.m_textAlignment = i9837[50]
  i9836.m_characterSpacing = i9837[51]
  i9836.m_wordSpacing = i9837[52]
  i9836.m_lineSpacing = i9837[53]
  i9836.m_lineSpacingMax = i9837[54]
  i9836.m_paragraphSpacing = i9837[55]
  i9836.m_charWidthMaxAdj = i9837[56]
  i9836.m_TextWrappingMode = i9837[57]
  i9836.m_wordWrappingRatios = i9837[58]
  i9836.m_overflowMode = i9837[59]
  request.r(i9837[60], i9837[61], 0, i9836, 'm_linkedTextComponent')
  request.r(i9837[62], i9837[63], 0, i9836, 'parentLinkedComponent')
  i9836.m_enableKerning = !!i9837[64]
  var i9843 = i9837[65]
  var i9842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i9843.length; i += 1) {
    i9842.add(i9843[i + 0]);
  }
  i9836.m_ActiveFontFeatures = i9842
  i9836.m_enableExtraPadding = !!i9837[66]
  i9836.checkPaddingRequired = !!i9837[67]
  i9836.m_isRichText = !!i9837[68]
  i9836.m_parseCtrlCharacters = !!i9837[69]
  i9836.m_isOrthographic = !!i9837[70]
  i9836.m_isCullingEnabled = !!i9837[71]
  i9836.m_horizontalMapping = i9837[72]
  i9836.m_verticalMapping = i9837[73]
  i9836.m_uvLineOffset = i9837[74]
  i9836.m_geometrySortingOrder = i9837[75]
  i9836.m_IsTextObjectScaleStatic = !!i9837[76]
  i9836.m_VertexBufferAutoSizeReduction = !!i9837[77]
  i9836.m_useMaxVisibleDescender = !!i9837[78]
  i9836.m_pageToDisplay = i9837[79]
  i9836.m_margin = new pc.Vec4( i9837[80], i9837[81], i9837[82], i9837[83] )
  i9836.m_isUsingLegacyAnimationComponent = !!i9837[84]
  i9836.m_isVolumetricText = !!i9837[85]
  request.r(i9837[86], i9837[87], 0, i9836, 'm_Material')
  i9836.m_EmojiFallbackSupport = !!i9837[88]
  i9836.m_Maskable = !!i9837[89]
  i9836.m_Color = new pc.Color(i9837[90], i9837[91], i9837[92], i9837[93])
  i9836.m_RaycastTarget = !!i9837[94]
  i9836.m_RaycastPadding = new pc.Vec4( i9837[95], i9837[96], i9837[97], i9837[98] )
  return i9836
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i9846 = root || request.c( 'TMPro.VertexGradient' )
  var i9847 = data
  i9846.topLeft = new pc.Color(i9847[0], i9847[1], i9847[2], i9847[3])
  i9846.topRight = new pc.Color(i9847[4], i9847[5], i9847[6], i9847[7])
  i9846.bottomLeft = new pc.Color(i9847[8], i9847[9], i9847[10], i9847[11])
  i9846.bottomRight = new pc.Color(i9847[12], i9847[13], i9847[14], i9847[15])
  return i9846
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i9850 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i9851 = data
  i9850.targetIsSelf = !!i9851[0]
  request.r(i9851[1], i9851[2], 0, i9850, 'targetGO')
  i9850.tweenTargetIsTargetGO = !!i9851[3]
  i9850.delay = i9851[4]
  i9850.duration = i9851[5]
  i9850.easeType = i9851[6]
  i9850.easeCurve = new pc.AnimationCurve( { keys_flow: i9851[7] } )
  i9850.loopType = i9851[8]
  i9850.loops = i9851[9]
  i9850.id = i9851[10]
  i9850.isRelative = !!i9851[11]
  i9850.isFrom = !!i9851[12]
  i9850.isIndependentUpdate = !!i9851[13]
  i9850.autoKill = !!i9851[14]
  i9850.autoGenerate = !!i9851[15]
  i9850.isActive = !!i9851[16]
  i9850.isValid = !!i9851[17]
  request.r(i9851[18], i9851[19], 0, i9850, 'target')
  i9850.animationType = i9851[20]
  i9850.targetType = i9851[21]
  i9850.forcedTargetType = i9851[22]
  i9850.autoPlay = !!i9851[23]
  i9850.useTargetAsV3 = !!i9851[24]
  i9850.endValueFloat = i9851[25]
  i9850.endValueV3 = new pc.Vec3( i9851[26], i9851[27], i9851[28] )
  i9850.endValueV2 = new pc.Vec2( i9851[29], i9851[30] )
  i9850.endValueColor = new pc.Color(i9851[31], i9851[32], i9851[33], i9851[34])
  i9850.endValueString = i9851[35]
  i9850.endValueRect = UnityEngine.Rect.MinMaxRect(i9851[36], i9851[37], i9851[38], i9851[39])
  request.r(i9851[40], i9851[41], 0, i9850, 'endValueTransform')
  i9850.optionalBool0 = !!i9851[42]
  i9850.optionalBool1 = !!i9851[43]
  i9850.optionalFloat0 = i9851[44]
  i9850.optionalInt0 = i9851[45]
  i9850.optionalRotationMode = i9851[46]
  i9850.optionalScrambleMode = i9851[47]
  i9850.optionalShakeRandomnessMode = i9851[48]
  i9850.optionalString = i9851[49]
  i9850.updateType = i9851[50]
  i9850.isSpeedBased = !!i9851[51]
  i9850.hasOnStart = !!i9851[52]
  i9850.hasOnPlay = !!i9851[53]
  i9850.hasOnUpdate = !!i9851[54]
  i9850.hasOnStepComplete = !!i9851[55]
  i9850.hasOnComplete = !!i9851[56]
  i9850.hasOnTweenCreated = !!i9851[57]
  i9850.hasOnRewind = !!i9851[58]
  i9850.onStart = request.d('UnityEngine.Events.UnityEvent', i9851[59], i9850.onStart)
  i9850.onPlay = request.d('UnityEngine.Events.UnityEvent', i9851[60], i9850.onPlay)
  i9850.onUpdate = request.d('UnityEngine.Events.UnityEvent', i9851[61], i9850.onUpdate)
  i9850.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i9851[62], i9850.onStepComplete)
  i9850.onComplete = request.d('UnityEngine.Events.UnityEvent', i9851[63], i9850.onComplete)
  i9850.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i9851[64], i9850.onTweenCreated)
  i9850.onRewind = request.d('UnityEngine.Events.UnityEvent', i9851[65], i9850.onRewind)
  return i9850
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i9852 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i9853 = data
  i9852.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9853[0], i9852.m_PersistentCalls)
  return i9852
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i9854 = root || request.c( 'HideOnPointer' )
  var i9855 = data
  i9854.OnPointerDownEvent = request.d('System.Action', i9855[0], i9854.OnPointerDownEvent)
  return i9854
}

Deserializers["System.Action"] = function (request, data, root) {
  var i9856 = root || request.c( 'System.Action' )
  var i9857 = data
  return i9856
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i9858 = root || request.c( 'UnityEngine.UI.Mask' )
  var i9859 = data
  i9858.m_ShowMaskGraphic = !!i9859[0]
  return i9858
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i9860 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i9861 = data
  i9860.m_AspectMode = i9861[0]
  i9860.m_AspectRatio = i9861[1]
  return i9860
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i9862 = root || request.c( 'SelectPanel' )
  var i9863 = data
  request.r(i9863[0], i9863[1], 0, i9862, '_title')
  var i9865 = i9863[2]
  var i9864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i9865.length; i += 2) {
  request.r(i9865[i + 0], i9865[i + 1], 1, i9864, '')
  }
  i9862._buttons = i9864
  request.r(i9863[3], i9863[4], 0, i9862, '_popupMap')
  request.r(i9863[5], i9863[6], 0, i9862, '_popupMonster')
  request.r(i9863[7], i9863[8], 0, i9862, '_btnFind')
  return i9862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i9868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i9869 = data
  i9868.center = new pc.Vec3( i9869[0], i9869[1], i9869[2] )
  i9868.size = new pc.Vec3( i9869[3], i9869[4], i9869[5] )
  i9868.enabled = !!i9869[6]
  i9868.isTrigger = !!i9869[7]
  request.r(i9869[8], i9869[9], 0, i9868, 'material')
  return i9868
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i9870 = root || request.c( 'CharacterMotor' )
  var i9871 = data
  request.r(i9871[0], i9871[1], 0, i9870, 'characterInput')
  request.r(i9871[2], i9871[3], 0, i9870, 'cameraYawTransform')
  request.r(i9871[4], i9871[5], 0, i9870, '_arrow')
  i9870.moveSpeed = i9871[6]
  i9870.jumpHeight = i9871[7]
  request.r(i9871[8], i9871[9], 0, i9870, 'groundChecker')
  i9870.gravity = i9871[10]
  i9870.enableStepClimb = !!i9871[11]
  i9870.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i9871[12] )
  i9870.maxStepHeight = i9871[13]
  i9870.stepCheckDistance = i9871[14]
  i9870.stepUpSpeed = i9871[15]
  i9870.stepUpAcceleration = i9871[16]
  i9870.minimumStepFacing = i9871[17]
  request.r(i9871[18], i9871[19], 0, i9870, 'controller')
  i9870.autoRun = !!i9871[20]
  return i9870
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i9872 = root || request.c( 'CharacterRotation' )
  var i9873 = data
  request.r(i9873[0], i9873[1], 0, i9872, 'motor')
  i9872.rotationSpeed = i9873[2]
  return i9872
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i9874 = root || request.c( 'CharacterAnimation' )
  var i9875 = data
  request.r(i9875[0], i9875[1], 0, i9874, 'animator')
  request.r(i9875[2], i9875[3], 0, i9874, 'motor')
  i9874.speedChangeRate = i9875[4]
  i9874.groundedGraceTime = i9875[5]
  return i9874
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i9876 = root || request.c( 'CharacterCollect' )
  var i9877 = data
  request.r(i9877[0], i9877[1], 0, i9876, 'motor')
  request.r(i9877[2], i9877[3], 0, i9876, 'avatar')
  return i9876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i9878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i9879 = data
  i9878.mass = i9879[0]
  i9878.drag = i9879[1]
  i9878.angularDrag = i9879[2]
  i9878.useGravity = !!i9879[3]
  i9878.isKinematic = !!i9879[4]
  i9878.constraints = i9879[5]
  i9878.maxAngularVelocity = i9879[6]
  i9878.collisionDetectionMode = i9879[7]
  i9878.interpolation = i9879[8]
  return i9878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i9880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i9881 = data
  i9880.center = new pc.Vec3( i9881[0], i9881[1], i9881[2] )
  i9880.radius = i9881[3]
  i9880.height = i9881[4]
  i9880.direction = i9881[5]
  i9880.enabled = !!i9881[6]
  i9880.isTrigger = !!i9881[7]
  request.r(i9881[8], i9881[9], 0, i9880, 'material')
  return i9880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i9882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i9883 = data
  request.r(i9883[0], i9883[1], 0, i9882, 'animatorController')
  request.r(i9883[2], i9883[3], 0, i9882, 'avatar')
  i9882.updateMode = i9883[4]
  i9882.hasTransformHierarchy = !!i9883[5]
  i9882.applyRootMotion = !!i9883[6]
  var i9885 = i9883[7]
  var i9884 = []
  for(var i = 0; i < i9885.length; i += 2) {
  request.r(i9885[i + 0], i9885[i + 1], 2, i9884, '')
  }
  i9882.humanBones = i9884
  i9882.enabled = !!i9883[8]
  return i9882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i9888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i9889 = data
  request.r(i9889[0], i9889[1], 0, i9888, 'clip')
  request.r(i9889[2], i9889[3], 0, i9888, 'outputAudioMixerGroup')
  i9888.playOnAwake = !!i9889[4]
  i9888.loop = !!i9889[5]
  i9888.time = i9889[6]
  i9888.volume = i9889[7]
  i9888.pitch = i9889[8]
  i9888.enabled = !!i9889[9]
  return i9888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i9890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i9891 = data
  request.r(i9891[0], i9891[1], 0, i9890, 'sharedMesh')
  return i9890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i9892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i9893 = data
  request.r(i9893[0], i9893[1], 0, i9892, 'additionalVertexStreams')
  i9892.enabled = !!i9893[2]
  request.r(i9893[3], i9893[4], 0, i9892, 'sharedMaterial')
  var i9895 = i9893[5]
  var i9894 = []
  for(var i = 0; i < i9895.length; i += 2) {
  request.r(i9895[i + 0], i9895[i + 1], 2, i9894, '')
  }
  i9892.sharedMaterials = i9894
  i9892.receiveShadows = !!i9893[6]
  i9892.shadowCastingMode = i9893[7]
  i9892.sortingLayerID = i9893[8]
  i9892.sortingOrder = i9893[9]
  i9892.lightmapIndex = i9893[10]
  i9892.lightmapSceneIndex = i9893[11]
  i9892.lightmapScaleOffset = new pc.Vec4( i9893[12], i9893[13], i9893[14], i9893[15] )
  i9892.lightProbeUsage = i9893[16]
  i9892.reflectionProbeUsage = i9893[17]
  return i9892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i9896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i9897 = data
  request.r(i9897[0], i9897[1], 0, i9896, 'sharedMesh')
  var i9899 = i9897[2]
  var i9898 = []
  for(var i = 0; i < i9899.length; i += 2) {
  request.r(i9899[i + 0], i9899[i + 1], 2, i9898, '')
  }
  i9896.bones = i9898
  i9896.updateWhenOffscreen = !!i9897[3]
  i9896.localBounds = i9897[4]
  request.r(i9897[5], i9897[6], 0, i9896, 'rootBone')
  var i9901 = i9897[7]
  var i9900 = []
  for(var i = 0; i < i9901.length; i += 1) {
    i9900.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i9901[i + 0]) );
  }
  i9896.blendShapesWeights = i9900
  i9896.enabled = !!i9897[8]
  request.r(i9897[9], i9897[10], 0, i9896, 'sharedMaterial')
  var i9903 = i9897[11]
  var i9902 = []
  for(var i = 0; i < i9903.length; i += 2) {
  request.r(i9903[i + 0], i9903[i + 1], 2, i9902, '')
  }
  i9896.sharedMaterials = i9902
  i9896.receiveShadows = !!i9897[12]
  i9896.shadowCastingMode = i9897[13]
  i9896.sortingLayerID = i9897[14]
  i9896.sortingOrder = i9897[15]
  i9896.lightmapIndex = i9897[16]
  i9896.lightmapSceneIndex = i9897[17]
  i9896.lightmapScaleOffset = new pc.Vec4( i9897[18], i9897[19], i9897[20], i9897[21] )
  i9896.lightProbeUsage = i9897[22]
  i9896.reflectionProbeUsage = i9897[23]
  return i9896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i9906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i9907 = data
  i9906.weight = i9907[0]
  return i9906
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i9908 = root || request.c( 'GroundChecker' )
  var i9909 = data
  request.r(i9909[0], i9909[1], 0, i9908, 'groundPoint')
  i9908.checkRadius = i9909[2]
  i9908.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i9909[3] )
  return i9908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i9910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i9911 = data
  i9910.color = new pc.Color(i9911[0], i9911[1], i9911[2], i9911[3])
  request.r(i9911[4], i9911[5], 0, i9910, 'sprite')
  i9910.flipX = !!i9911[6]
  i9910.flipY = !!i9911[7]
  i9910.drawMode = i9911[8]
  i9910.size = new pc.Vec2( i9911[9], i9911[10] )
  i9910.tileMode = i9911[11]
  i9910.adaptiveModeThreshold = i9911[12]
  i9910.maskInteraction = i9911[13]
  i9910.spriteSortPoint = i9911[14]
  i9910.enabled = !!i9911[15]
  request.r(i9911[16], i9911[17], 0, i9910, 'sharedMaterial')
  var i9913 = i9911[18]
  var i9912 = []
  for(var i = 0; i < i9913.length; i += 2) {
  request.r(i9913[i + 0], i9913[i + 1], 2, i9912, '')
  }
  i9910.sharedMaterials = i9912
  i9910.receiveShadows = !!i9911[19]
  i9910.shadowCastingMode = i9911[20]
  i9910.sortingLayerID = i9911[21]
  i9910.sortingOrder = i9911[22]
  i9910.lightmapIndex = i9911[23]
  i9910.lightmapSceneIndex = i9911[24]
  i9910.lightmapScaleOffset = new pc.Vec4( i9911[25], i9911[26], i9911[27], i9911[28] )
  i9910.lightProbeUsage = i9911[29]
  i9910.reflectionProbeUsage = i9911[30]
  return i9910
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i9914 = root || request.c( 'CameraFollow' )
  var i9915 = data
  request.r(i9915[0], i9915[1], 0, i9914, 'target')
  i9914.smoothTime = i9915[2]
  return i9914
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i9916 = root || request.c( 'CameraLook' )
  var i9917 = data
  request.r(i9917[0], i9917[1], 0, i9916, 'input')
  request.r(i9917[2], i9917[3], 0, i9916, 'yawPivot')
  request.r(i9917[4], i9917[5], 0, i9916, 'pitchPivot')
  i9916.minPitch = i9917[6]
  i9916.maxPitch = i9917[7]
  i9916.yaw = i9917[8]
  i9916.pitch = i9917[9]
  i9916.defaltYaw = i9917[10]
  i9916.defaltPitch = i9917[11]
  return i9916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9919 = data
  i9918.aspect = i9919[0]
  i9918.orthographic = !!i9919[1]
  i9918.orthographicSize = i9919[2]
  i9918.backgroundColor = new pc.Color(i9919[3], i9919[4], i9919[5], i9919[6])
  i9918.nearClipPlane = i9919[7]
  i9918.farClipPlane = i9919[8]
  i9918.fieldOfView = i9919[9]
  i9918.depth = i9919[10]
  i9918.clearFlags = i9919[11]
  i9918.cullingMask = i9919[12]
  i9918.rect = i9919[13]
  request.r(i9919[14], i9919[15], 0, i9918, 'targetTexture')
  i9918.usePhysicalProperties = !!i9919[16]
  i9918.focalLength = i9919[17]
  i9918.sensorSize = new pc.Vec2( i9919[18], i9919[19] )
  i9918.lensShift = new pc.Vec2( i9919[20], i9919[21] )
  i9918.gateFit = i9919[22]
  i9918.commandBufferCount = i9919[23]
  i9918.cameraType = i9919[24]
  i9918.enabled = !!i9919[25]
  return i9918
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i9920 = root || request.c( 'CharacterInput' )
  var i9921 = data
  request.r(i9921[0], i9921[1], 0, i9920, 'joystick')
  request.r(i9921[2], i9921[3], 0, i9920, 'jumpButton')
  return i9920
}

Deserializers["InputManager"] = function (request, data, root) {
  var i9922 = root || request.c( 'InputManager' )
  var i9923 = data
  request.r(i9923[0], i9923[1], 0, i9922, 'worldCamera')
  i9922.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i9923[2] )
  i9922.touchSensitivity = i9923[3]
  i9922.mouseSensitivity = i9923[4]
  i9922.dragThreshold = i9923[5]
  return i9922
}

Deserializers["GameController"] = function (request, data, root) {
  var i9924 = root || request.c( 'GameController' )
  var i9925 = data
  i9924.timeToShowComplete = i9925[0]
  i9924.timeToShowHint = i9925[1]
  i9924.currentProgress = i9925[2]
  i9924.target = i9925[3]
  request.r(i9925[4], i9925[5], 0, i9924, 'progressText')
  request.r(i9925[6], i9925[7], 0, i9924, 'collectText')
  request.r(i9925[8], i9925[9], 0, i9924, 'completeScene')
  var i9927 = i9925[10]
  var i9926 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i9927.length; i += 2) {
  request.r(i9927[i + 0], i9927[i + 1], 1, i9926, '')
  }
  i9924.gifts = i9926
  request.r(i9925[11], i9925[12], 0, i9924, 'collect')
  request.r(i9925[13], i9925[14], 0, i9924, 'tut')
  return i9924
}

Deserializers["AudioController"] = function (request, data, root) {
  var i9930 = root || request.c( 'AudioController' )
  var i9931 = data
  request.r(i9931[0], i9931[1], 0, i9930, 'musicSource')
  request.r(i9931[2], i9931[3], 0, i9930, 'poolParent')
  i9930.startSize = i9931[4]
  return i9930
}

Deserializers["LunaController"] = function (request, data, root) {
  var i9932 = root || request.c( 'LunaController' )
  var i9933 = data
  i9932.LimitTimePlay = !!i9933[0]
  i9932.TimePlay = i9933[1]
  var i9935 = i9933[2]
  var i9934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i9935.length; i += 2) {
  request.r(i9935[i + 0], i9935[i + 1], 1, i9934, '')
  }
  i9932.images = i9934
  request.r(i9933[3], i9933[4], 0, i9932, 'CTA')
  return i9932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i9938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i9939 = data
  i9938.textureMode = i9939[0]
  i9938.alignment = i9939[1]
  i9938.widthCurve = new pc.AnimationCurve( { keys_flow: i9939[2] } )
  i9938.colorGradient = i9939[3] ? new pc.ColorGradient(i9939[3][0], i9939[3][1], i9939[3][2]) : null
  var i9941 = i9939[4]
  var i9940 = []
  for(var i = 0; i < i9941.length; i += 3) {
    i9940.push( new pc.Vec3( i9941[i + 0], i9941[i + 1], i9941[i + 2] ) );
  }
  i9938.positions = i9940
  i9938.positionCount = i9939[5]
  i9938.widthMultiplier = i9939[6]
  i9938.startWidth = i9939[7]
  i9938.endWidth = i9939[8]
  i9938.numCornerVertices = i9939[9]
  i9938.numCapVertices = i9939[10]
  i9938.useWorldSpace = !!i9939[11]
  i9938.loop = !!i9939[12]
  i9938.startColor = new pc.Color(i9939[13], i9939[14], i9939[15], i9939[16])
  i9938.endColor = new pc.Color(i9939[17], i9939[18], i9939[19], i9939[20])
  i9938.generateLightingData = !!i9939[21]
  i9938.enabled = !!i9939[22]
  request.r(i9939[23], i9939[24], 0, i9938, 'sharedMaterial')
  var i9943 = i9939[25]
  var i9942 = []
  for(var i = 0; i < i9943.length; i += 2) {
  request.r(i9943[i + 0], i9943[i + 1], 2, i9942, '')
  }
  i9938.sharedMaterials = i9942
  i9938.receiveShadows = !!i9939[26]
  i9938.shadowCastingMode = i9939[27]
  i9938.sortingLayerID = i9939[28]
  i9938.sortingOrder = i9939[29]
  i9938.lightmapIndex = i9939[30]
  i9938.lightmapSceneIndex = i9939[31]
  i9938.lightmapScaleOffset = new pc.Vec4( i9939[32], i9939[33], i9939[34], i9939[35] )
  i9938.lightProbeUsage = i9939[36]
  i9938.reflectionProbeUsage = i9939[37]
  return i9938
}

Deserializers["Gift"] = function (request, data, root) {
  var i9946 = root || request.c( 'Gift' )
  var i9947 = data
  i9946.collectDone = !!i9947[0]
  var i9949 = i9947[1]
  var i9948 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i9949.length; i += 2) {
  request.r(i9949[i + 0], i9949[i + 1], 1, i9948, '')
  }
  i9946.hints = i9948
  request.r(i9947[2], i9947[3], 0, i9946, 'collectSound')
  request.r(i9947[4], i9947[5], 0, i9946, 'collectEffect')
  request.r(i9947[6], i9947[7], 0, i9946, 'arrow')
  return i9946
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i9952 = root || request.c( 'SoundHint' )
  var i9953 = data
  request.r(i9953[0], i9953[1], 0, i9952, 'Sound')
  request.r(i9953[2], i9953[3], 0, i9952, 'Source')
  return i9952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i9954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i9955 = data
  request.r(i9955[0], i9955[1], 0, i9954, 'mesh')
  i9954.meshCount = i9955[2]
  i9954.activeVertexStreamsCount = i9955[3]
  i9954.alignment = i9955[4]
  i9954.renderMode = i9955[5]
  i9954.sortMode = i9955[6]
  i9954.lengthScale = i9955[7]
  i9954.velocityScale = i9955[8]
  i9954.cameraVelocityScale = i9955[9]
  i9954.normalDirection = i9955[10]
  i9954.sortingFudge = i9955[11]
  i9954.minParticleSize = i9955[12]
  i9954.maxParticleSize = i9955[13]
  i9954.pivot = new pc.Vec3( i9955[14], i9955[15], i9955[16] )
  request.r(i9955[17], i9955[18], 0, i9954, 'trailMaterial')
  i9954.applyActiveColorSpace = !!i9955[19]
  i9954.enabled = !!i9955[20]
  request.r(i9955[21], i9955[22], 0, i9954, 'sharedMaterial')
  var i9957 = i9955[23]
  var i9956 = []
  for(var i = 0; i < i9957.length; i += 2) {
  request.r(i9957[i + 0], i9957[i + 1], 2, i9956, '')
  }
  i9954.sharedMaterials = i9956
  i9954.receiveShadows = !!i9955[24]
  i9954.shadowCastingMode = i9955[25]
  i9954.sortingLayerID = i9955[26]
  i9954.sortingOrder = i9955[27]
  i9954.lightmapIndex = i9955[28]
  i9954.lightmapSceneIndex = i9955[29]
  i9954.lightmapScaleOffset = new pc.Vec4( i9955[30], i9955[31], i9955[32], i9955[33] )
  i9954.lightProbeUsage = i9955[34]
  i9954.reflectionProbeUsage = i9955[35]
  return i9954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i9958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i9959 = data
  i9958.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i9959[0], i9958.main)
  i9958.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i9959[1], i9958.colorBySpeed)
  i9958.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i9959[2], i9958.colorOverLifetime)
  i9958.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i9959[3], i9958.emission)
  i9958.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i9959[4], i9958.rotationBySpeed)
  i9958.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i9959[5], i9958.rotationOverLifetime)
  i9958.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i9959[6], i9958.shape)
  i9958.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i9959[7], i9958.sizeBySpeed)
  i9958.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i9959[8], i9958.sizeOverLifetime)
  i9958.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i9959[9], i9958.textureSheetAnimation)
  i9958.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i9959[10], i9958.velocityOverLifetime)
  i9958.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i9959[11], i9958.noise)
  i9958.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i9959[12], i9958.inheritVelocity)
  i9958.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i9959[13], i9958.forceOverLifetime)
  i9958.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i9959[14], i9958.limitVelocityOverLifetime)
  i9958.useAutoRandomSeed = !!i9959[15]
  i9958.randomSeed = i9959[16]
  return i9958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i9960 = root || new pc.ParticleSystemMain()
  var i9961 = data
  i9960.duration = i9961[0]
  i9960.loop = !!i9961[1]
  i9960.prewarm = !!i9961[2]
  i9960.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[3], i9960.startDelay)
  i9960.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[4], i9960.startLifetime)
  i9960.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[5], i9960.startSpeed)
  i9960.startSize3D = !!i9961[6]
  i9960.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[7], i9960.startSizeX)
  i9960.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[8], i9960.startSizeY)
  i9960.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[9], i9960.startSizeZ)
  i9960.startRotation3D = !!i9961[10]
  i9960.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[11], i9960.startRotationX)
  i9960.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[12], i9960.startRotationY)
  i9960.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[13], i9960.startRotationZ)
  i9960.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9961[14], i9960.startColor)
  i9960.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9961[15], i9960.gravityModifier)
  i9960.simulationSpace = i9961[16]
  request.r(i9961[17], i9961[18], 0, i9960, 'customSimulationSpace')
  i9960.simulationSpeed = i9961[19]
  i9960.useUnscaledTime = !!i9961[20]
  i9960.scalingMode = i9961[21]
  i9960.playOnAwake = !!i9961[22]
  i9960.maxParticles = i9961[23]
  i9960.emitterVelocityMode = i9961[24]
  i9960.stopAction = i9961[25]
  return i9960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i9962 = root || new pc.MinMaxCurve()
  var i9963 = data
  i9962.mode = i9963[0]
  i9962.curveMin = new pc.AnimationCurve( { keys_flow: i9963[1] } )
  i9962.curveMax = new pc.AnimationCurve( { keys_flow: i9963[2] } )
  i9962.curveMultiplier = i9963[3]
  i9962.constantMin = i9963[4]
  i9962.constantMax = i9963[5]
  return i9962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i9964 = root || new pc.MinMaxGradient()
  var i9965 = data
  i9964.mode = i9965[0]
  i9964.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9965[1], i9964.gradientMin)
  i9964.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9965[2], i9964.gradientMax)
  i9964.colorMin = new pc.Color(i9965[3], i9965[4], i9965[5], i9965[6])
  i9964.colorMax = new pc.Color(i9965[7], i9965[8], i9965[9], i9965[10])
  return i9964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i9966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i9967 = data
  i9966.mode = i9967[0]
  var i9969 = i9967[1]
  var i9968 = []
  for(var i = 0; i < i9969.length; i += 1) {
    i9968.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i9969[i + 0]) );
  }
  i9966.colorKeys = i9968
  var i9971 = i9967[2]
  var i9970 = []
  for(var i = 0; i < i9971.length; i += 1) {
    i9970.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i9971[i + 0]) );
  }
  i9966.alphaKeys = i9970
  return i9966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i9972 = root || new pc.ParticleSystemColorBySpeed()
  var i9973 = data
  i9972.enabled = !!i9973[0]
  i9972.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9973[1], i9972.color)
  i9972.range = new pc.Vec2( i9973[2], i9973[3] )
  return i9972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i9976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i9977 = data
  i9976.color = new pc.Color(i9977[0], i9977[1], i9977[2], i9977[3])
  i9976.time = i9977[4]
  return i9976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i9980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i9981 = data
  i9980.alpha = i9981[0]
  i9980.time = i9981[1]
  return i9980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i9982 = root || new pc.ParticleSystemColorOverLifetime()
  var i9983 = data
  i9982.enabled = !!i9983[0]
  i9982.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9983[1], i9982.color)
  return i9982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i9984 = root || new pc.ParticleSystemEmitter()
  var i9985 = data
  i9984.enabled = !!i9985[0]
  i9984.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9985[1], i9984.rateOverTime)
  i9984.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9985[2], i9984.rateOverDistance)
  var i9987 = i9985[3]
  var i9986 = []
  for(var i = 0; i < i9987.length; i += 1) {
    i9986.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i9987[i + 0]) );
  }
  i9984.bursts = i9986
  return i9984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i9990 = root || new pc.ParticleSystemBurst()
  var i9991 = data
  i9990.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9991[0], i9990.count)
  i9990.cycleCount = i9991[1]
  i9990.minCount = i9991[2]
  i9990.maxCount = i9991[3]
  i9990.repeatInterval = i9991[4]
  i9990.time = i9991[5]
  return i9990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i9992 = root || new pc.ParticleSystemRotationBySpeed()
  var i9993 = data
  i9992.enabled = !!i9993[0]
  i9992.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9993[1], i9992.x)
  i9992.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9993[2], i9992.y)
  i9992.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9993[3], i9992.z)
  i9992.separateAxes = !!i9993[4]
  i9992.range = new pc.Vec2( i9993[5], i9993[6] )
  return i9992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i9994 = root || new pc.ParticleSystemRotationOverLifetime()
  var i9995 = data
  i9994.enabled = !!i9995[0]
  i9994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9995[1], i9994.x)
  i9994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9995[2], i9994.y)
  i9994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9995[3], i9994.z)
  i9994.separateAxes = !!i9995[4]
  return i9994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i9996 = root || new pc.ParticleSystemShape()
  var i9997 = data
  i9996.enabled = !!i9997[0]
  i9996.shapeType = i9997[1]
  i9996.randomDirectionAmount = i9997[2]
  i9996.sphericalDirectionAmount = i9997[3]
  i9996.randomPositionAmount = i9997[4]
  i9996.alignToDirection = !!i9997[5]
  i9996.radius = i9997[6]
  i9996.radiusMode = i9997[7]
  i9996.radiusSpread = i9997[8]
  i9996.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9997[9], i9996.radiusSpeed)
  i9996.radiusThickness = i9997[10]
  i9996.angle = i9997[11]
  i9996.length = i9997[12]
  i9996.boxThickness = new pc.Vec3( i9997[13], i9997[14], i9997[15] )
  i9996.meshShapeType = i9997[16]
  request.r(i9997[17], i9997[18], 0, i9996, 'mesh')
  request.r(i9997[19], i9997[20], 0, i9996, 'meshRenderer')
  request.r(i9997[21], i9997[22], 0, i9996, 'skinnedMeshRenderer')
  i9996.useMeshMaterialIndex = !!i9997[23]
  i9996.meshMaterialIndex = i9997[24]
  i9996.useMeshColors = !!i9997[25]
  i9996.normalOffset = i9997[26]
  i9996.arc = i9997[27]
  i9996.arcMode = i9997[28]
  i9996.arcSpread = i9997[29]
  i9996.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9997[30], i9996.arcSpeed)
  i9996.donutRadius = i9997[31]
  i9996.position = new pc.Vec3( i9997[32], i9997[33], i9997[34] )
  i9996.rotation = new pc.Vec3( i9997[35], i9997[36], i9997[37] )
  i9996.scale = new pc.Vec3( i9997[38], i9997[39], i9997[40] )
  return i9996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i9998 = root || new pc.ParticleSystemSizeBySpeed()
  var i9999 = data
  i9998.enabled = !!i9999[0]
  i9998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9999[1], i9998.x)
  i9998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9999[2], i9998.y)
  i9998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9999[3], i9998.z)
  i9998.separateAxes = !!i9999[4]
  i9998.range = new pc.Vec2( i9999[5], i9999[6] )
  return i9998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i10000 = root || new pc.ParticleSystemSizeOverLifetime()
  var i10001 = data
  i10000.enabled = !!i10001[0]
  i10000.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10001[1], i10000.x)
  i10000.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10001[2], i10000.y)
  i10000.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10001[3], i10000.z)
  i10000.separateAxes = !!i10001[4]
  return i10000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i10002 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i10003 = data
  i10002.enabled = !!i10003[0]
  i10002.mode = i10003[1]
  i10002.animation = i10003[2]
  i10002.numTilesX = i10003[3]
  i10002.numTilesY = i10003[4]
  i10002.useRandomRow = !!i10003[5]
  i10002.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10003[6], i10002.frameOverTime)
  i10002.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10003[7], i10002.startFrame)
  i10002.cycleCount = i10003[8]
  i10002.rowIndex = i10003[9]
  i10002.flipU = i10003[10]
  i10002.flipV = i10003[11]
  i10002.spriteCount = i10003[12]
  var i10005 = i10003[13]
  var i10004 = []
  for(var i = 0; i < i10005.length; i += 2) {
  request.r(i10005[i + 0], i10005[i + 1], 2, i10004, '')
  }
  i10002.sprites = i10004
  return i10002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i10008 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i10009 = data
  i10008.enabled = !!i10009[0]
  i10008.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[1], i10008.x)
  i10008.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[2], i10008.y)
  i10008.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[3], i10008.z)
  i10008.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[4], i10008.radial)
  i10008.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[5], i10008.speedModifier)
  i10008.space = i10009[6]
  i10008.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[7], i10008.orbitalX)
  i10008.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[8], i10008.orbitalY)
  i10008.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[9], i10008.orbitalZ)
  i10008.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[10], i10008.orbitalOffsetX)
  i10008.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[11], i10008.orbitalOffsetY)
  i10008.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10009[12], i10008.orbitalOffsetZ)
  return i10008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i10010 = root || new pc.ParticleSystemNoise()
  var i10011 = data
  i10010.enabled = !!i10011[0]
  i10010.separateAxes = !!i10011[1]
  i10010.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[2], i10010.strengthX)
  i10010.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[3], i10010.strengthY)
  i10010.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[4], i10010.strengthZ)
  i10010.frequency = i10011[5]
  i10010.damping = !!i10011[6]
  i10010.octaveCount = i10011[7]
  i10010.octaveMultiplier = i10011[8]
  i10010.octaveScale = i10011[9]
  i10010.quality = i10011[10]
  i10010.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[11], i10010.scrollSpeed)
  i10010.scrollSpeedMultiplier = i10011[12]
  i10010.remapEnabled = !!i10011[13]
  i10010.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[14], i10010.remapX)
  i10010.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[15], i10010.remapY)
  i10010.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[16], i10010.remapZ)
  i10010.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[17], i10010.positionAmount)
  i10010.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[18], i10010.rotationAmount)
  i10010.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10011[19], i10010.sizeAmount)
  return i10010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i10012 = root || new pc.ParticleSystemInheritVelocity()
  var i10013 = data
  i10012.enabled = !!i10013[0]
  i10012.mode = i10013[1]
  i10012.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10013[2], i10012.curve)
  return i10012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i10014 = root || new pc.ParticleSystemForceOverLifetime()
  var i10015 = data
  i10014.enabled = !!i10015[0]
  i10014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10015[1], i10014.x)
  i10014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10015[2], i10014.y)
  i10014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10015[3], i10014.z)
  i10014.space = i10015[4]
  i10014.randomized = !!i10015[5]
  return i10014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i10016 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i10017 = data
  i10016.enabled = !!i10017[0]
  i10016.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10017[1], i10016.limit)
  i10016.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10017[2], i10016.limitX)
  i10016.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10017[3], i10016.limitY)
  i10016.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10017[4], i10016.limitZ)
  i10016.dampen = i10017[5]
  i10016.separateAxes = !!i10017[6]
  i10016.space = i10017[7]
  i10016.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10017[8], i10016.drag)
  i10016.multiplyDragByParticleSize = !!i10017[9]
  i10016.multiplyDragByParticleVelocity = !!i10017[10]
  return i10016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i10018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i10019 = data
  request.r(i10019[0], i10019[1], 0, i10018, 'sharedMesh')
  i10018.convex = !!i10019[2]
  i10018.enabled = !!i10019[3]
  i10018.isTrigger = !!i10019[4]
  request.r(i10019[5], i10019[6], 0, i10018, 'material')
  return i10018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i10020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i10021 = data
  i10020.center = new pc.Vec3( i10021[0], i10021[1], i10021[2] )
  i10020.radius = i10021[3]
  i10020.enabled = !!i10021[4]
  i10020.isTrigger = !!i10021[5]
  request.r(i10021[6], i10021[7], 0, i10020, 'material')
  return i10020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i10022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i10023 = data
  i10022.type = i10023[0]
  i10022.color = new pc.Color(i10023[1], i10023[2], i10023[3], i10023[4])
  i10022.cullingMask = i10023[5]
  i10022.intensity = i10023[6]
  i10022.range = i10023[7]
  i10022.spotAngle = i10023[8]
  i10022.shadows = i10023[9]
  i10022.shadowNormalBias = i10023[10]
  i10022.shadowBias = i10023[11]
  i10022.shadowStrength = i10023[12]
  i10022.shadowResolution = i10023[13]
  i10022.lightmapBakeType = i10023[14]
  i10022.renderMode = i10023[15]
  request.r(i10023[16], i10023[17], 0, i10022, 'cookie')
  i10022.cookieSize = i10023[18]
  i10022.shadowNearPlane = i10023[19]
  i10022.occlusionMaskChannel = i10023[20]
  i10022.isBaked = !!i10023[21]
  i10022.mixedLightingMode = i10023[22]
  i10022.enabled = !!i10023[23]
  return i10022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i10024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i10025 = data
  i10024.ambientIntensity = i10025[0]
  i10024.reflectionIntensity = i10025[1]
  i10024.ambientMode = i10025[2]
  i10024.ambientLight = new pc.Color(i10025[3], i10025[4], i10025[5], i10025[6])
  i10024.ambientSkyColor = new pc.Color(i10025[7], i10025[8], i10025[9], i10025[10])
  i10024.ambientGroundColor = new pc.Color(i10025[11], i10025[12], i10025[13], i10025[14])
  i10024.ambientEquatorColor = new pc.Color(i10025[15], i10025[16], i10025[17], i10025[18])
  i10024.fogColor = new pc.Color(i10025[19], i10025[20], i10025[21], i10025[22])
  i10024.fogEndDistance = i10025[23]
  i10024.fogStartDistance = i10025[24]
  i10024.fogDensity = i10025[25]
  i10024.fog = !!i10025[26]
  request.r(i10025[27], i10025[28], 0, i10024, 'skybox')
  i10024.fogMode = i10025[29]
  var i10027 = i10025[30]
  var i10026 = []
  for(var i = 0; i < i10027.length; i += 1) {
    i10026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i10027[i + 0]) );
  }
  i10024.lightmaps = i10026
  i10024.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i10025[31], i10024.lightProbes)
  i10024.lightmapsMode = i10025[32]
  i10024.mixedBakeMode = i10025[33]
  i10024.environmentLightingMode = i10025[34]
  i10024.ambientProbe = new pc.SphericalHarmonicsL2(i10025[35])
  request.r(i10025[36], i10025[37], 0, i10024, 'customReflection')
  request.r(i10025[38], i10025[39], 0, i10024, 'defaultReflection')
  i10024.defaultReflectionMode = i10025[40]
  i10024.defaultReflectionResolution = i10025[41]
  i10024.sunLightObjectId = i10025[42]
  i10024.pixelLightCount = i10025[43]
  i10024.defaultReflectionHDR = !!i10025[44]
  i10024.hasLightDataAsset = !!i10025[45]
  i10024.hasManualGenerate = !!i10025[46]
  return i10024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i10030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i10031 = data
  request.r(i10031[0], i10031[1], 0, i10030, 'lightmapColor')
  request.r(i10031[2], i10031[3], 0, i10030, 'lightmapDirection')
  request.r(i10031[4], i10031[5], 0, i10030, 'shadowMask')
  return i10030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i10032 = root || new UnityEngine.LightProbes()
  var i10033 = data
  return i10032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i10038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i10039 = data
  var i10041 = i10039[0]
  var i10040 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i10041.length; i += 1) {
    i10040.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i10041[i + 0]));
  }
  i10038.ShaderCompilationErrors = i10040
  i10038.name = i10039[1]
  i10038.guid = i10039[2]
  var i10043 = i10039[3]
  var i10042 = []
  for(var i = 0; i < i10043.length; i += 1) {
    i10042.push( i10043[i + 0] );
  }
  i10038.shaderDefinedKeywords = i10042
  var i10045 = i10039[4]
  var i10044 = []
  for(var i = 0; i < i10045.length; i += 1) {
    i10044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i10045[i + 0]) );
  }
  i10038.passes = i10044
  var i10047 = i10039[5]
  var i10046 = []
  for(var i = 0; i < i10047.length; i += 1) {
    i10046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i10047[i + 0]) );
  }
  i10038.usePasses = i10046
  var i10049 = i10039[6]
  var i10048 = []
  for(var i = 0; i < i10049.length; i += 1) {
    i10048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i10049[i + 0]) );
  }
  i10038.defaultParameterValues = i10048
  request.r(i10039[7], i10039[8], 0, i10038, 'unityFallbackShader')
  i10038.readDepth = !!i10039[9]
  i10038.hasDepthOnlyPass = !!i10039[10]
  i10038.isCreatedByShaderGraph = !!i10039[11]
  i10038.disableBatching = !!i10039[12]
  i10038.compiled = !!i10039[13]
  return i10038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i10052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i10053 = data
  i10052.shaderName = i10053[0]
  i10052.errorMessage = i10053[1]
  return i10052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i10058 = root || new pc.UnityShaderPass()
  var i10059 = data
  i10058.id = i10059[0]
  i10058.subShaderIndex = i10059[1]
  i10058.name = i10059[2]
  i10058.passType = i10059[3]
  i10058.grabPassTextureName = i10059[4]
  i10058.usePass = !!i10059[5]
  i10058.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[6], i10058.zTest)
  i10058.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[7], i10058.zWrite)
  i10058.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[8], i10058.culling)
  i10058.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10059[9], i10058.blending)
  i10058.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10059[10], i10058.alphaBlending)
  i10058.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[11], i10058.colorWriteMask)
  i10058.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[12], i10058.offsetUnits)
  i10058.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[13], i10058.offsetFactor)
  i10058.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[14], i10058.stencilRef)
  i10058.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[15], i10058.stencilReadMask)
  i10058.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10059[16], i10058.stencilWriteMask)
  i10058.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10059[17], i10058.stencilOp)
  i10058.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10059[18], i10058.stencilOpFront)
  i10058.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10059[19], i10058.stencilOpBack)
  var i10061 = i10059[20]
  var i10060 = []
  for(var i = 0; i < i10061.length; i += 1) {
    i10060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i10061[i + 0]) );
  }
  i10058.tags = i10060
  var i10063 = i10059[21]
  var i10062 = []
  for(var i = 0; i < i10063.length; i += 1) {
    i10062.push( i10063[i + 0] );
  }
  i10058.passDefinedKeywords = i10062
  var i10065 = i10059[22]
  var i10064 = []
  for(var i = 0; i < i10065.length; i += 1) {
    i10064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i10065[i + 0]) );
  }
  i10058.passDefinedKeywordGroups = i10064
  var i10067 = i10059[23]
  var i10066 = []
  for(var i = 0; i < i10067.length; i += 1) {
    i10066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10067[i + 0]) );
  }
  i10058.variants = i10066
  var i10069 = i10059[24]
  var i10068 = []
  for(var i = 0; i < i10069.length; i += 1) {
    i10068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10069[i + 0]) );
  }
  i10058.excludedVariants = i10068
  i10058.hasDepthReader = !!i10059[25]
  return i10058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i10070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i10071 = data
  i10070.val = i10071[0]
  i10070.name = i10071[1]
  return i10070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i10072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i10073 = data
  i10072.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10073[0], i10072.src)
  i10072.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10073[1], i10072.dst)
  i10072.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10073[2], i10072.op)
  return i10072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i10074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i10075 = data
  i10074.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10075[0], i10074.pass)
  i10074.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10075[1], i10074.fail)
  i10074.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10075[2], i10074.zFail)
  i10074.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10075[3], i10074.comp)
  return i10074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i10078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i10079 = data
  i10078.name = i10079[0]
  i10078.value = i10079[1]
  return i10078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i10082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i10083 = data
  var i10085 = i10083[0]
  var i10084 = []
  for(var i = 0; i < i10085.length; i += 1) {
    i10084.push( i10085[i + 0] );
  }
  i10082.keywords = i10084
  i10082.hasDiscard = !!i10083[1]
  return i10082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i10088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i10089 = data
  i10088.passId = i10089[0]
  i10088.subShaderIndex = i10089[1]
  var i10091 = i10089[2]
  var i10090 = []
  for(var i = 0; i < i10091.length; i += 1) {
    i10090.push( i10091[i + 0] );
  }
  i10088.keywords = i10090
  i10088.vertexProgram = i10089[3]
  i10088.fragmentProgram = i10089[4]
  i10088.exportedForWebGl2 = !!i10089[5]
  i10088.readDepth = !!i10089[6]
  return i10088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i10094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i10095 = data
  request.r(i10095[0], i10095[1], 0, i10094, 'shader')
  i10094.pass = i10095[2]
  return i10094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i10098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i10099 = data
  i10098.name = i10099[0]
  i10098.type = i10099[1]
  i10098.value = new pc.Vec4( i10099[2], i10099[3], i10099[4], i10099[5] )
  i10098.textureValue = i10099[6]
  i10098.shaderPropertyFlag = i10099[7]
  return i10098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i10100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i10101 = data
  i10100.name = i10101[0]
  request.r(i10101[1], i10101[2], 0, i10100, 'texture')
  i10100.aabb = i10101[3]
  i10100.vertices = i10101[4]
  i10100.triangles = i10101[5]
  i10100.textureRect = UnityEngine.Rect.MinMaxRect(i10101[6], i10101[7], i10101[8], i10101[9])
  i10100.packedRect = UnityEngine.Rect.MinMaxRect(i10101[10], i10101[11], i10101[12], i10101[13])
  i10100.border = new pc.Vec4( i10101[14], i10101[15], i10101[16], i10101[17] )
  i10100.transparency = i10101[18]
  i10100.bounds = i10101[19]
  i10100.pixelsPerUnit = i10101[20]
  i10100.textureWidth = i10101[21]
  i10100.textureHeight = i10101[22]
  i10100.nativeSize = new pc.Vec2( i10101[23], i10101[24] )
  i10100.pivot = new pc.Vec2( i10101[25], i10101[26] )
  i10100.textureRectOffset = new pc.Vec2( i10101[27], i10101[28] )
  return i10100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i10102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i10103 = data
  i10102.name = i10103[0]
  return i10102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i10104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i10105 = data
  i10104.name = i10105[0]
  i10104.wrapMode = i10105[1]
  i10104.isLooping = !!i10105[2]
  i10104.length = i10105[3]
  var i10107 = i10105[4]
  var i10106 = []
  for(var i = 0; i < i10107.length; i += 1) {
    i10106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i10107[i + 0]) );
  }
  i10104.curves = i10106
  var i10109 = i10105[5]
  var i10108 = []
  for(var i = 0; i < i10109.length; i += 1) {
    i10108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i10109[i + 0]) );
  }
  i10104.events = i10108
  i10104.halfPrecision = !!i10105[6]
  i10104._frameRate = i10105[7]
  i10104.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i10105[8], i10104.localBounds)
  i10104.hasMuscleCurves = !!i10105[9]
  var i10111 = i10105[10]
  var i10110 = []
  for(var i = 0; i < i10111.length; i += 1) {
    i10110.push( i10111[i + 0] );
  }
  i10104.clipMuscleConstant = i10110
  i10104.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i10105[11], i10104.clipBindingConstant)
  return i10104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i10114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i10115 = data
  i10114.path = i10115[0]
  i10114.hash = i10115[1]
  i10114.componentType = i10115[2]
  i10114.property = i10115[3]
  i10114.keys = i10115[4]
  var i10117 = i10115[5]
  var i10116 = []
  for(var i = 0; i < i10117.length; i += 1) {
    i10116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i10117[i + 0]) );
  }
  i10114.objectReferenceKeys = i10116
  return i10114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i10120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i10121 = data
  i10120.time = i10121[0]
  request.r(i10121[1], i10121[2], 0, i10120, 'value')
  return i10120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i10124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i10125 = data
  i10124.functionName = i10125[0]
  i10124.floatParameter = i10125[1]
  i10124.intParameter = i10125[2]
  i10124.stringParameter = i10125[3]
  request.r(i10125[4], i10125[5], 0, i10124, 'objectReferenceParameter')
  i10124.time = i10125[6]
  return i10124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i10126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i10127 = data
  i10126.center = new pc.Vec3( i10127[0], i10127[1], i10127[2] )
  i10126.extends = new pc.Vec3( i10127[3], i10127[4], i10127[5] )
  return i10126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i10130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i10131 = data
  var i10133 = i10131[0]
  var i10132 = []
  for(var i = 0; i < i10133.length; i += 1) {
    i10132.push( i10133[i + 0] );
  }
  i10130.genericBindings = i10132
  var i10135 = i10131[1]
  var i10134 = []
  for(var i = 0; i < i10135.length; i += 1) {
    i10134.push( i10135[i + 0] );
  }
  i10130.pptrCurveMapping = i10134
  return i10130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i10136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i10137 = data
  i10136.name = i10137[0]
  var i10139 = i10137[1]
  var i10138 = []
  for(var i = 0; i < i10139.length; i += 1) {
    i10138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i10139[i + 0]) );
  }
  i10136.layers = i10138
  var i10141 = i10137[2]
  var i10140 = []
  for(var i = 0; i < i10141.length; i += 1) {
    i10140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i10141[i + 0]) );
  }
  i10136.parameters = i10140
  i10136.animationClips = i10137[3]
  i10136.avatarUnsupported = i10137[4]
  return i10136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i10144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i10145 = data
  i10144.name = i10145[0]
  i10144.defaultWeight = i10145[1]
  i10144.blendingMode = i10145[2]
  i10144.avatarMask = i10145[3]
  i10144.syncedLayerIndex = i10145[4]
  i10144.syncedLayerAffectsTiming = !!i10145[5]
  i10144.syncedLayers = i10145[6]
  i10144.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10145[7], i10144.stateMachine)
  return i10144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i10146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i10147 = data
  i10146.id = i10147[0]
  i10146.name = i10147[1]
  i10146.path = i10147[2]
  var i10149 = i10147[3]
  var i10148 = []
  for(var i = 0; i < i10149.length; i += 1) {
    i10148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i10149[i + 0]) );
  }
  i10146.states = i10148
  var i10151 = i10147[4]
  var i10150 = []
  for(var i = 0; i < i10151.length; i += 1) {
    i10150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10151[i + 0]) );
  }
  i10146.machines = i10150
  var i10153 = i10147[5]
  var i10152 = []
  for(var i = 0; i < i10153.length; i += 1) {
    i10152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10153[i + 0]) );
  }
  i10146.entryStateTransitions = i10152
  var i10155 = i10147[6]
  var i10154 = []
  for(var i = 0; i < i10155.length; i += 1) {
    i10154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10155[i + 0]) );
  }
  i10146.exitStateTransitions = i10154
  var i10157 = i10147[7]
  var i10156 = []
  for(var i = 0; i < i10157.length; i += 1) {
    i10156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10157[i + 0]) );
  }
  i10146.anyStateTransitions = i10156
  i10146.defaultStateId = i10147[8]
  return i10146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i10160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i10161 = data
  i10160.id = i10161[0]
  i10160.name = i10161[1]
  i10160.cycleOffset = i10161[2]
  i10160.cycleOffsetParameter = i10161[3]
  i10160.cycleOffsetParameterActive = !!i10161[4]
  i10160.mirror = !!i10161[5]
  i10160.mirrorParameter = i10161[6]
  i10160.mirrorParameterActive = !!i10161[7]
  i10160.motionId = i10161[8]
  i10160.nameHash = i10161[9]
  i10160.fullPathHash = i10161[10]
  i10160.speed = i10161[11]
  i10160.speedParameter = i10161[12]
  i10160.speedParameterActive = !!i10161[13]
  i10160.tag = i10161[14]
  i10160.tagHash = i10161[15]
  i10160.writeDefaultValues = !!i10161[16]
  var i10163 = i10161[17]
  var i10162 = []
  for(var i = 0; i < i10163.length; i += 2) {
  request.r(i10163[i + 0], i10163[i + 1], 2, i10162, '')
  }
  i10160.behaviours = i10162
  var i10165 = i10161[18]
  var i10164 = []
  for(var i = 0; i < i10165.length; i += 1) {
    i10164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10165[i + 0]) );
  }
  i10160.transitions = i10164
  return i10160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i10170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i10171 = data
  i10170.fullPath = i10171[0]
  i10170.canTransitionToSelf = !!i10171[1]
  i10170.duration = i10171[2]
  i10170.exitTime = i10171[3]
  i10170.hasExitTime = !!i10171[4]
  i10170.hasFixedDuration = !!i10171[5]
  i10170.interruptionSource = i10171[6]
  i10170.offset = i10171[7]
  i10170.orderedInterruption = !!i10171[8]
  i10170.destinationStateId = i10171[9]
  i10170.isExit = !!i10171[10]
  i10170.mute = !!i10171[11]
  i10170.solo = !!i10171[12]
  var i10173 = i10171[13]
  var i10172 = []
  for(var i = 0; i < i10173.length; i += 1) {
    i10172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10173[i + 0]) );
  }
  i10170.conditions = i10172
  return i10170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i10176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i10177 = data
  i10176.mode = i10177[0]
  i10176.parameter = i10177[1]
  i10176.threshold = i10177[2]
  return i10176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i10182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i10183 = data
  i10182.destinationStateId = i10183[0]
  i10182.isExit = !!i10183[1]
  i10182.mute = !!i10183[2]
  i10182.solo = !!i10183[3]
  var i10185 = i10183[4]
  var i10184 = []
  for(var i = 0; i < i10185.length; i += 1) {
    i10184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10185[i + 0]) );
  }
  i10182.conditions = i10184
  return i10182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i10188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i10189 = data
  i10188.defaultBool = !!i10189[0]
  i10188.defaultFloat = i10189[1]
  i10188.defaultInt = i10189[2]
  i10188.name = i10189[3]
  i10188.nameHash = i10189[4]
  i10188.type = i10189[5]
  return i10188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i10190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i10191 = data
  i10190.name = i10191[0]
  request.r(i10191[1], i10191[2], 0, i10190, '_runtimeAnimatorController')
  var i10193 = i10191[3]
  var i10192 = []
  for(var i = 0; i < i10193.length; i += 2) {
  request.r(i10193[i + 0], i10193[i + 1], 2, i10192, '')
  }
  i10190._originalAnimationClips = i10192
  var i10195 = i10191[4]
  var i10194 = []
  for(var i = 0; i < i10195.length; i += 2) {
  request.r(i10195[i + 0], i10195[i + 1], 2, i10194, '')
  }
  i10190._overrideAnimationClips = i10194
  var i10197 = i10191[5]
  var i10196 = []
  for(var i = 0; i < i10197.length; i += 2) {
  request.r(i10197[i + 0], i10197[i + 1], 2, i10196, '')
  }
  i10190._animationClips = i10196
  var i10199 = i10191[6]
  var i10198 = []
  for(var i = 0; i < i10199.length; i += 1) {
    i10198.push( request.d('UnityEngine.AnimationClipPair', i10199[i + 0]) );
  }
  i10190._animationClipPairs = i10198
  return i10190
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i10204 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i10205 = data
  request.r(i10205[0], i10205[1], 0, i10204, 'originalClip')
  request.r(i10205[2], i10205[3], 0, i10204, 'overrideClip')
  return i10204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10207 = data
  i10206.name = i10207[0]
  i10206.bytes64 = i10207[1]
  i10206.data = i10207[2]
  return i10206
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10208 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10209 = data
  i10208.normalStyle = i10209[0]
  i10208.normalSpacingOffset = i10209[1]
  i10208.boldStyle = i10209[2]
  i10208.boldSpacing = i10209[3]
  i10208.italicStyle = i10209[4]
  i10208.tabSize = i10209[5]
  request.r(i10209[6], i10209[7], 0, i10208, 'atlas')
  i10208.m_SourceFontFileGUID = i10209[8]
  i10208.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10209[9], i10208.m_CreationSettings)
  request.r(i10209[10], i10209[11], 0, i10208, 'm_SourceFontFile')
  i10208.m_SourceFontFilePath = i10209[12]
  i10208.m_AtlasPopulationMode = i10209[13]
  i10208.InternalDynamicOS = !!i10209[14]
  var i10211 = i10209[15]
  var i10210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10211.length; i += 1) {
    i10210.add(request.d('UnityEngine.TextCore.Glyph', i10211[i + 0]));
  }
  i10208.m_GlyphTable = i10210
  var i10213 = i10209[16]
  var i10212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10213.length; i += 1) {
    i10212.add(request.d('TMPro.TMP_Character', i10213[i + 0]));
  }
  i10208.m_CharacterTable = i10212
  var i10215 = i10209[17]
  var i10214 = []
  for(var i = 0; i < i10215.length; i += 2) {
  request.r(i10215[i + 0], i10215[i + 1], 2, i10214, '')
  }
  i10208.m_AtlasTextures = i10214
  i10208.m_AtlasTextureIndex = i10209[18]
  i10208.m_IsMultiAtlasTexturesEnabled = !!i10209[19]
  i10208.m_GetFontFeatures = !!i10209[20]
  i10208.m_ClearDynamicDataOnBuild = !!i10209[21]
  i10208.m_AtlasWidth = i10209[22]
  i10208.m_AtlasHeight = i10209[23]
  i10208.m_AtlasPadding = i10209[24]
  i10208.m_AtlasRenderMode = i10209[25]
  var i10217 = i10209[26]
  var i10216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10217.length; i += 1) {
    i10216.add(request.d('UnityEngine.TextCore.GlyphRect', i10217[i + 0]));
  }
  i10208.m_UsedGlyphRects = i10216
  var i10219 = i10209[27]
  var i10218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10219.length; i += 1) {
    i10218.add(request.d('UnityEngine.TextCore.GlyphRect', i10219[i + 0]));
  }
  i10208.m_FreeGlyphRects = i10218
  i10208.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10209[28], i10208.m_FontFeatureTable)
  i10208.m_ShouldReimportFontFeatures = !!i10209[29]
  var i10221 = i10209[30]
  var i10220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10221.length; i += 2) {
  request.r(i10221[i + 0], i10221[i + 1], 1, i10220, '')
  }
  i10208.m_FallbackFontAssetTable = i10220
  var i10223 = i10209[31]
  var i10222 = []
  for(var i = 0; i < i10223.length; i += 1) {
    i10222.push( request.d('TMPro.TMP_FontWeightPair', i10223[i + 0]) );
  }
  i10208.m_FontWeightTable = i10222
  var i10225 = i10209[32]
  var i10224 = []
  for(var i = 0; i < i10225.length; i += 1) {
    i10224.push( request.d('TMPro.TMP_FontWeightPair', i10225[i + 0]) );
  }
  i10208.fontWeights = i10224
  i10208.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10209[33], i10208.m_fontInfo)
  var i10227 = i10209[34]
  var i10226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10227.length; i += 1) {
    i10226.add(request.d('TMPro.TMP_Glyph', i10227[i + 0]));
  }
  i10208.m_glyphInfoList = i10226
  i10208.m_KerningTable = request.d('TMPro.KerningTable', i10209[35], i10208.m_KerningTable)
  var i10229 = i10209[36]
  var i10228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10229.length; i += 2) {
  request.r(i10229[i + 0], i10229[i + 1], 1, i10228, '')
  }
  i10208.fallbackFontAssets = i10228
  i10208.m_Version = i10209[37]
  i10208.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10209[38], i10208.m_FaceInfo)
  request.r(i10209[39], i10209[40], 0, i10208, 'm_Material')
  return i10208
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10230 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10231 = data
  i10230.sourceFontFileName = i10231[0]
  i10230.sourceFontFileGUID = i10231[1]
  i10230.faceIndex = i10231[2]
  i10230.pointSizeSamplingMode = i10231[3]
  i10230.pointSize = i10231[4]
  i10230.padding = i10231[5]
  i10230.paddingMode = i10231[6]
  i10230.packingMode = i10231[7]
  i10230.atlasWidth = i10231[8]
  i10230.atlasHeight = i10231[9]
  i10230.characterSetSelectionMode = i10231[10]
  i10230.characterSequence = i10231[11]
  i10230.referencedFontAssetGUID = i10231[12]
  i10230.referencedTextAssetGUID = i10231[13]
  i10230.fontStyle = i10231[14]
  i10230.fontStyleModifier = i10231[15]
  i10230.renderMode = i10231[16]
  i10230.includeFontFeatures = !!i10231[17]
  return i10230
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10234 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10235 = data
  i10234.m_Index = i10235[0]
  i10234.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10235[1], i10234.m_Metrics)
  i10234.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10235[2], i10234.m_GlyphRect)
  i10234.m_Scale = i10235[3]
  i10234.m_AtlasIndex = i10235[4]
  i10234.m_ClassDefinitionType = i10235[5]
  return i10234
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10236 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10237 = data
  i10236.m_Width = i10237[0]
  i10236.m_Height = i10237[1]
  i10236.m_HorizontalBearingX = i10237[2]
  i10236.m_HorizontalBearingY = i10237[3]
  i10236.m_HorizontalAdvance = i10237[4]
  return i10236
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10238 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10239 = data
  i10238.m_X = i10239[0]
  i10238.m_Y = i10239[1]
  i10238.m_Width = i10239[2]
  i10238.m_Height = i10239[3]
  return i10238
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10242 = root || request.c( 'TMPro.TMP_Character' )
  var i10243 = data
  i10242.m_ElementType = i10243[0]
  i10242.m_Unicode = i10243[1]
  i10242.m_GlyphIndex = i10243[2]
  i10242.m_Scale = i10243[3]
  return i10242
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10248 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10249 = data
  var i10251 = i10249[0]
  var i10250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i10251.length; i += 1) {
    i10250.add(request.d('TMPro.MultipleSubstitutionRecord', i10251[i + 0]));
  }
  i10248.m_MultipleSubstitutionRecords = i10250
  var i10253 = i10249[1]
  var i10252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i10253.length; i += 1) {
    i10252.add(request.d('TMPro.LigatureSubstitutionRecord', i10253[i + 0]));
  }
  i10248.m_LigatureSubstitutionRecords = i10252
  var i10255 = i10249[2]
  var i10254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10255.length; i += 1) {
    i10254.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i10255[i + 0]));
  }
  i10248.m_GlyphPairAdjustmentRecords = i10254
  var i10257 = i10249[3]
  var i10256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i10257.length; i += 1) {
    i10256.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i10257[i + 0]));
  }
  i10248.m_MarkToBaseAdjustmentRecords = i10256
  var i10259 = i10249[4]
  var i10258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i10259.length; i += 1) {
    i10258.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i10259[i + 0]));
  }
  i10248.m_MarkToMarkAdjustmentRecords = i10258
  return i10248
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i10262 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i10263 = data
  i10262.m_TargetGlyphID = i10263[0]
  i10262.m_SubstituteGlyphIDs = i10263[1]
  return i10262
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i10266 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i10267 = data
  i10266.m_ComponentGlyphIDs = i10267[0]
  i10266.m_LigatureGlyphID = i10267[1]
  return i10266
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10270 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i10271 = data
  i10270.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10271[0], i10270.m_FirstAdjustmentRecord)
  i10270.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10271[1], i10270.m_SecondAdjustmentRecord)
  i10270.m_FeatureLookupFlags = i10271[2]
  return i10270
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i10274 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i10275 = data
  i10274.m_BaseGlyphID = i10275[0]
  i10274.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10275[1], i10274.m_BaseGlyphAnchorPoint)
  i10274.m_MarkGlyphID = i10275[2]
  i10274.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10275[3], i10274.m_MarkPositionAdjustment)
  return i10274
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i10278 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i10279 = data
  i10278.m_BaseMarkGlyphID = i10279[0]
  i10278.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10279[1], i10278.m_BaseMarkGlyphAnchorPoint)
  i10278.m_CombiningMarkGlyphID = i10279[2]
  i10278.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10279[3], i10278.m_CombiningMarkPositionAdjustment)
  return i10278
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10284 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10285 = data
  request.r(i10285[0], i10285[1], 0, i10284, 'regularTypeface')
  request.r(i10285[2], i10285[3], 0, i10284, 'italicTypeface')
  return i10284
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10286 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10287 = data
  i10286.Name = i10287[0]
  i10286.PointSize = i10287[1]
  i10286.Scale = i10287[2]
  i10286.CharacterCount = i10287[3]
  i10286.LineHeight = i10287[4]
  i10286.Baseline = i10287[5]
  i10286.Ascender = i10287[6]
  i10286.CapHeight = i10287[7]
  i10286.Descender = i10287[8]
  i10286.CenterLine = i10287[9]
  i10286.SuperscriptOffset = i10287[10]
  i10286.SubscriptOffset = i10287[11]
  i10286.SubSize = i10287[12]
  i10286.Underline = i10287[13]
  i10286.UnderlineThickness = i10287[14]
  i10286.strikethrough = i10287[15]
  i10286.strikethroughThickness = i10287[16]
  i10286.TabWidth = i10287[17]
  i10286.Padding = i10287[18]
  i10286.AtlasWidth = i10287[19]
  i10286.AtlasHeight = i10287[20]
  return i10286
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10290 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10291 = data
  i10290.id = i10291[0]
  i10290.x = i10291[1]
  i10290.y = i10291[2]
  i10290.width = i10291[3]
  i10290.height = i10291[4]
  i10290.xOffset = i10291[5]
  i10290.yOffset = i10291[6]
  i10290.xAdvance = i10291[7]
  i10290.scale = i10291[8]
  return i10290
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10292 = root || request.c( 'TMPro.KerningTable' )
  var i10293 = data
  var i10295 = i10293[0]
  var i10294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10295.length; i += 1) {
    i10294.add(request.d('TMPro.KerningPair', i10295[i + 0]));
  }
  i10292.kerningPairs = i10294
  return i10292
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10298 = root || request.c( 'TMPro.KerningPair' )
  var i10299 = data
  i10298.xOffset = i10299[0]
  i10298.m_FirstGlyph = i10299[1]
  i10298.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10299[2], i10298.m_FirstGlyphAdjustments)
  i10298.m_SecondGlyph = i10299[3]
  i10298.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10299[4], i10298.m_SecondGlyphAdjustments)
  i10298.m_IgnoreSpacingAdjustments = !!i10299[5]
  return i10298
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10300 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10301 = data
  i10300.m_FaceIndex = i10301[0]
  i10300.m_FamilyName = i10301[1]
  i10300.m_StyleName = i10301[2]
  i10300.m_PointSize = i10301[3]
  i10300.m_Scale = i10301[4]
  i10300.m_UnitsPerEM = i10301[5]
  i10300.m_LineHeight = i10301[6]
  i10300.m_AscentLine = i10301[7]
  i10300.m_CapLine = i10301[8]
  i10300.m_MeanLine = i10301[9]
  i10300.m_Baseline = i10301[10]
  i10300.m_DescentLine = i10301[11]
  i10300.m_SuperscriptOffset = i10301[12]
  i10300.m_SuperscriptSize = i10301[13]
  i10300.m_SubscriptOffset = i10301[14]
  i10300.m_SubscriptSize = i10301[15]
  i10300.m_UnderlineOffset = i10301[16]
  i10300.m_UnderlineThickness = i10301[17]
  i10300.m_StrikethroughOffset = i10301[18]
  i10300.m_StrikethroughThickness = i10301[19]
  i10300.m_TabWidth = i10301[20]
  return i10300
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i10302 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i10303 = data
  i10302.useSafeMode = !!i10303[0]
  i10302.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i10303[1], i10302.safeModeOptions)
  i10302.timeScale = i10303[2]
  i10302.unscaledTimeScale = i10303[3]
  i10302.useSmoothDeltaTime = !!i10303[4]
  i10302.maxSmoothUnscaledTime = i10303[5]
  i10302.rewindCallbackMode = i10303[6]
  i10302.showUnityEditorReport = !!i10303[7]
  i10302.logBehaviour = i10303[8]
  i10302.drawGizmos = !!i10303[9]
  i10302.defaultRecyclable = !!i10303[10]
  i10302.defaultAutoPlay = i10303[11]
  i10302.defaultUpdateType = i10303[12]
  i10302.defaultTimeScaleIndependent = !!i10303[13]
  i10302.defaultEaseType = i10303[14]
  i10302.defaultEaseOvershootOrAmplitude = i10303[15]
  i10302.defaultEasePeriod = i10303[16]
  i10302.defaultAutoKill = !!i10303[17]
  i10302.defaultLoopType = i10303[18]
  i10302.debugMode = !!i10303[19]
  i10302.debugStoreTargetId = !!i10303[20]
  i10302.showPreviewPanel = !!i10303[21]
  i10302.storeSettingsLocation = i10303[22]
  i10302.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i10303[23], i10302.modules)
  i10302.createASMDEF = !!i10303[24]
  i10302.showPlayingTweens = !!i10303[25]
  i10302.showPausedTweens = !!i10303[26]
  return i10302
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i10304 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i10305 = data
  i10304.logBehaviour = i10305[0]
  i10304.nestedTweenFailureBehaviour = i10305[1]
  return i10304
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i10306 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i10307 = data
  i10306.showPanel = !!i10307[0]
  i10306.audioEnabled = !!i10307[1]
  i10306.physicsEnabled = !!i10307[2]
  i10306.physics2DEnabled = !!i10307[3]
  i10306.spriteEnabled = !!i10307[4]
  i10306.uiEnabled = !!i10307[5]
  i10306.textMeshProEnabled = !!i10307[6]
  i10306.tk2DEnabled = !!i10307[7]
  i10306.deAudioEnabled = !!i10307[8]
  i10306.deUnityExtendedEnabled = !!i10307[9]
  i10306.epoOutlineEnabled = !!i10307[10]
  return i10306
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i10308 = root || request.c( 'TMPro.TMP_Settings' )
  var i10309 = data
  i10308.assetVersion = i10309[0]
  i10308.m_TextWrappingMode = i10309[1]
  i10308.m_enableKerning = !!i10309[2]
  var i10311 = i10309[3]
  var i10310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i10311.length; i += 1) {
    i10310.add(i10311[i + 0]);
  }
  i10308.m_ActiveFontFeatures = i10310
  i10308.m_enableExtraPadding = !!i10309[4]
  i10308.m_enableTintAllSprites = !!i10309[5]
  i10308.m_enableParseEscapeCharacters = !!i10309[6]
  i10308.m_EnableRaycastTarget = !!i10309[7]
  i10308.m_GetFontFeaturesAtRuntime = !!i10309[8]
  i10308.m_missingGlyphCharacter = i10309[9]
  i10308.m_ClearDynamicDataOnBuild = !!i10309[10]
  i10308.m_warningsDisabled = !!i10309[11]
  request.r(i10309[12], i10309[13], 0, i10308, 'm_defaultFontAsset')
  i10308.m_defaultFontAssetPath = i10309[14]
  i10308.m_defaultFontSize = i10309[15]
  i10308.m_defaultAutoSizeMinRatio = i10309[16]
  i10308.m_defaultAutoSizeMaxRatio = i10309[17]
  i10308.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i10309[18], i10309[19] )
  i10308.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i10309[20], i10309[21] )
  i10308.m_autoSizeTextContainer = !!i10309[22]
  i10308.m_IsTextObjectScaleStatic = !!i10309[23]
  var i10313 = i10309[24]
  var i10312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10313.length; i += 2) {
  request.r(i10313[i + 0], i10313[i + 1], 1, i10312, '')
  }
  i10308.m_fallbackFontAssets = i10312
  i10308.m_matchMaterialPreset = !!i10309[25]
  i10308.m_HideSubTextObjects = !!i10309[26]
  request.r(i10309[27], i10309[28], 0, i10308, 'm_defaultSpriteAsset')
  i10308.m_defaultSpriteAssetPath = i10309[29]
  i10308.m_enableEmojiSupport = !!i10309[30]
  i10308.m_MissingCharacterSpriteUnicode = i10309[31]
  var i10315 = i10309[32]
  var i10314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i10315.length; i += 2) {
  request.r(i10315[i + 0], i10315[i + 1], 1, i10314, '')
  }
  i10308.m_EmojiFallbackTextAssets = i10314
  i10308.m_defaultColorGradientPresetsPath = i10309[33]
  request.r(i10309[34], i10309[35], 0, i10308, 'm_defaultStyleSheet')
  i10308.m_StyleSheetsResourcePath = i10309[36]
  request.r(i10309[37], i10309[38], 0, i10308, 'm_leadingCharacters')
  request.r(i10309[39], i10309[40], 0, i10308, 'm_followingCharacters')
  i10308.m_UseModernHangulLineBreakingRules = !!i10309[41]
  return i10308
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i10318 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i10319 = data
  request.r(i10319[0], i10319[1], 0, i10318, 'spriteSheet')
  var i10321 = i10319[2]
  var i10320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i10321.length; i += 1) {
    i10320.add(request.d('TMPro.TMP_Sprite', i10321[i + 0]));
  }
  i10318.spriteInfoList = i10320
  var i10323 = i10319[3]
  var i10322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i10323.length; i += 2) {
  request.r(i10323[i + 0], i10323[i + 1], 1, i10322, '')
  }
  i10318.fallbackSpriteAssets = i10322
  var i10325 = i10319[4]
  var i10324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i10325.length; i += 1) {
    i10324.add(request.d('TMPro.TMP_SpriteCharacter', i10325[i + 0]));
  }
  i10318.m_SpriteCharacterTable = i10324
  var i10327 = i10319[5]
  var i10326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i10327.length; i += 1) {
    i10326.add(request.d('TMPro.TMP_SpriteGlyph', i10327[i + 0]));
  }
  i10318.m_GlyphTable = i10326
  i10318.m_Version = i10319[6]
  i10318.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10319[7], i10318.m_FaceInfo)
  request.r(i10319[8], i10319[9], 0, i10318, 'm_Material')
  return i10318
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i10330 = root || request.c( 'TMPro.TMP_Sprite' )
  var i10331 = data
  i10330.name = i10331[0]
  i10330.hashCode = i10331[1]
  i10330.unicode = i10331[2]
  i10330.pivot = new pc.Vec2( i10331[3], i10331[4] )
  request.r(i10331[5], i10331[6], 0, i10330, 'sprite')
  i10330.id = i10331[7]
  i10330.x = i10331[8]
  i10330.y = i10331[9]
  i10330.width = i10331[10]
  i10330.height = i10331[11]
  i10330.xOffset = i10331[12]
  i10330.yOffset = i10331[13]
  i10330.xAdvance = i10331[14]
  i10330.scale = i10331[15]
  return i10330
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i10336 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i10337 = data
  i10336.m_Name = i10337[0]
  i10336.m_ElementType = i10337[1]
  i10336.m_Unicode = i10337[2]
  i10336.m_GlyphIndex = i10337[3]
  i10336.m_Scale = i10337[4]
  return i10336
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i10340 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i10341 = data
  request.r(i10341[0], i10341[1], 0, i10340, 'sprite')
  i10340.m_Index = i10341[2]
  i10340.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10341[3], i10340.m_Metrics)
  i10340.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10341[4], i10340.m_GlyphRect)
  i10340.m_Scale = i10341[5]
  i10340.m_AtlasIndex = i10341[6]
  i10340.m_ClassDefinitionType = i10341[7]
  return i10340
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i10342 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i10343 = data
  var i10345 = i10343[0]
  var i10344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i10345.length; i += 1) {
    i10344.add(request.d('TMPro.TMP_Style', i10345[i + 0]));
  }
  i10342.m_StyleList = i10344
  return i10342
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i10348 = root || request.c( 'TMPro.TMP_Style' )
  var i10349 = data
  i10348.m_Name = i10349[0]
  i10348.m_HashCode = i10349[1]
  i10348.m_OpeningDefinition = i10349[2]
  i10348.m_ClosingDefinition = i10349[3]
  i10348.m_OpeningTagArray = i10349[4]
  i10348.m_ClosingTagArray = i10349[5]
  return i10348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i10350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i10351 = data
  var i10353 = i10351[0]
  var i10352 = []
  for(var i = 0; i < i10353.length; i += 1) {
    i10352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i10353[i + 0]) );
  }
  i10350.files = i10352
  i10350.componentToPrefabIds = i10351[1]
  return i10350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i10356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i10357 = data
  i10356.path = i10357[0]
  request.r(i10357[1], i10357[2], 0, i10356, 'unityObject')
  return i10356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i10358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i10359 = data
  var i10361 = i10359[0]
  var i10360 = []
  for(var i = 0; i < i10361.length; i += 1) {
    i10360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i10361[i + 0]) );
  }
  i10358.scriptsExecutionOrder = i10360
  var i10363 = i10359[1]
  var i10362 = []
  for(var i = 0; i < i10363.length; i += 1) {
    i10362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i10363[i + 0]) );
  }
  i10358.sortingLayers = i10362
  var i10365 = i10359[2]
  var i10364 = []
  for(var i = 0; i < i10365.length; i += 1) {
    i10364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i10365[i + 0]) );
  }
  i10358.cullingLayers = i10364
  i10358.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i10359[3], i10358.timeSettings)
  i10358.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i10359[4], i10358.physicsSettings)
  i10358.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i10359[5], i10358.physics2DSettings)
  i10358.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10359[6], i10358.qualitySettings)
  i10358.enableRealtimeShadows = !!i10359[7]
  i10358.enableAutoInstancing = !!i10359[8]
  i10358.enableStaticBatching = !!i10359[9]
  i10358.enableDynamicBatching = !!i10359[10]
  i10358.usePreservativeDynamicBatching = !!i10359[11]
  i10358.lightmapEncodingQuality = i10359[12]
  i10358.desiredColorSpace = i10359[13]
  var i10367 = i10359[14]
  var i10366 = []
  for(var i = 0; i < i10367.length; i += 1) {
    i10366.push( i10367[i + 0] );
  }
  i10358.allTags = i10366
  return i10358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i10370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i10371 = data
  i10370.name = i10371[0]
  i10370.value = i10371[1]
  return i10370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i10374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i10375 = data
  i10374.id = i10375[0]
  i10374.name = i10375[1]
  i10374.value = i10375[2]
  return i10374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i10378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i10379 = data
  i10378.id = i10379[0]
  i10378.name = i10379[1]
  return i10378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i10380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i10381 = data
  i10380.fixedDeltaTime = i10381[0]
  i10380.maximumDeltaTime = i10381[1]
  i10380.timeScale = i10381[2]
  i10380.maximumParticleTimestep = i10381[3]
  return i10380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i10382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i10383 = data
  i10382.gravity = new pc.Vec3( i10383[0], i10383[1], i10383[2] )
  i10382.defaultSolverIterations = i10383[3]
  i10382.bounceThreshold = i10383[4]
  i10382.autoSyncTransforms = !!i10383[5]
  i10382.autoSimulation = !!i10383[6]
  var i10385 = i10383[7]
  var i10384 = []
  for(var i = 0; i < i10385.length; i += 1) {
    i10384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i10385[i + 0]) );
  }
  i10382.collisionMatrix = i10384
  return i10382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i10388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i10389 = data
  i10388.enabled = !!i10389[0]
  i10388.layerId = i10389[1]
  i10388.otherLayerId = i10389[2]
  return i10388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i10390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i10391 = data
  request.r(i10391[0], i10391[1], 0, i10390, 'material')
  i10390.gravity = new pc.Vec2( i10391[2], i10391[3] )
  i10390.positionIterations = i10391[4]
  i10390.velocityIterations = i10391[5]
  i10390.velocityThreshold = i10391[6]
  i10390.maxLinearCorrection = i10391[7]
  i10390.maxAngularCorrection = i10391[8]
  i10390.maxTranslationSpeed = i10391[9]
  i10390.maxRotationSpeed = i10391[10]
  i10390.baumgarteScale = i10391[11]
  i10390.baumgarteTOIScale = i10391[12]
  i10390.timeToSleep = i10391[13]
  i10390.linearSleepTolerance = i10391[14]
  i10390.angularSleepTolerance = i10391[15]
  i10390.defaultContactOffset = i10391[16]
  i10390.autoSimulation = !!i10391[17]
  i10390.queriesHitTriggers = !!i10391[18]
  i10390.queriesStartInColliders = !!i10391[19]
  i10390.callbacksOnDisable = !!i10391[20]
  i10390.reuseCollisionCallbacks = !!i10391[21]
  i10390.autoSyncTransforms = !!i10391[22]
  var i10393 = i10391[23]
  var i10392 = []
  for(var i = 0; i < i10393.length; i += 1) {
    i10392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i10393[i + 0]) );
  }
  i10390.collisionMatrix = i10392
  return i10390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i10396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i10397 = data
  i10396.enabled = !!i10397[0]
  i10396.layerId = i10397[1]
  i10396.otherLayerId = i10397[2]
  return i10396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i10398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i10399 = data
  var i10401 = i10399[0]
  var i10400 = []
  for(var i = 0; i < i10401.length; i += 1) {
    i10400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10401[i + 0]) );
  }
  i10398.qualityLevels = i10400
  var i10403 = i10399[1]
  var i10402 = []
  for(var i = 0; i < i10403.length; i += 1) {
    i10402.push( i10403[i + 0] );
  }
  i10398.names = i10402
  i10398.shadows = i10399[2]
  i10398.anisotropicFiltering = i10399[3]
  i10398.antiAliasing = i10399[4]
  i10398.lodBias = i10399[5]
  i10398.shadowCascades = i10399[6]
  i10398.shadowDistance = i10399[7]
  i10398.shadowmaskMode = i10399[8]
  i10398.shadowProjection = i10399[9]
  i10398.shadowResolution = i10399[10]
  i10398.softParticles = !!i10399[11]
  i10398.softVegetation = !!i10399[12]
  i10398.activeColorSpace = i10399[13]
  i10398.desiredColorSpace = i10399[14]
  i10398.masterTextureLimit = i10399[15]
  i10398.maxQueuedFrames = i10399[16]
  i10398.particleRaycastBudget = i10399[17]
  i10398.pixelLightCount = i10399[18]
  i10398.realtimeReflectionProbes = !!i10399[19]
  i10398.shadowCascade2Split = i10399[20]
  i10398.shadowCascade4Split = new pc.Vec3( i10399[21], i10399[22], i10399[23] )
  i10398.streamingMipmapsActive = !!i10399[24]
  i10398.vSyncCount = i10399[25]
  i10398.asyncUploadBufferSize = i10399[26]
  i10398.asyncUploadTimeSlice = i10399[27]
  i10398.billboardsFaceCameraPosition = !!i10399[28]
  i10398.shadowNearPlaneOffset = i10399[29]
  i10398.streamingMipmapsMemoryBudget = i10399[30]
  i10398.maximumLODLevel = i10399[31]
  i10398.streamingMipmapsAddAllCameras = !!i10399[32]
  i10398.streamingMipmapsMaxLevelReduction = i10399[33]
  i10398.streamingMipmapsRenderersPerFrame = i10399[34]
  i10398.resolutionScalingFixedDPIFactor = i10399[35]
  i10398.streamingMipmapsMaxFileIORequests = i10399[36]
  i10398.currentQualityLevel = i10399[37]
  return i10398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i10406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i10407 = data
  i10406.name = i10407[0]
  var i10409 = i10407[1]
  var i10408 = []
  for(var i = 0; i < i10409.length; i += 1) {
    i10408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i10409[i + 0]) );
  }
  i10406.tos = i10408
  var i10411 = i10407[2]
  var i10410 = []
  for(var i = 0; i < i10411.length; i += 1) {
    i10410.push( i10411[i + 0] );
  }
  i10406.constant = i10410
  i10406.isValid = !!i10407[3]
  i10406.isHuman = !!i10407[4]
  i10406.hasRootMotion = !!i10407[5]
  return i10406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i10414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i10415 = data
  i10414.hash = i10415[0]
  i10414.path = i10415[1]
  return i10414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i10418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i10419 = data
  i10418.weight = i10419[0]
  i10418.vertices = i10419[1]
  i10418.normals = i10419[2]
  i10418.tangents = i10419[3]
  return i10418
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10420 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10421 = data
  request.r(i10421[0], i10421[1], 0, i10420, 'm_ObjectArgument')
  i10420.m_ObjectArgumentAssemblyTypeName = i10421[2]
  i10420.m_IntArgument = i10421[3]
  i10420.m_FloatArgument = i10421[4]
  i10420.m_StringArgument = i10421[5]
  i10420.m_BoolArgument = !!i10421[6]
  return i10420
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i10422 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i10423 = data
  i10422.m_GlyphIndex = i10423[0]
  i10422.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i10423[1], i10422.m_GlyphValueRecord)
  return i10422
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i10424 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i10425 = data
  i10424.m_XCoordinate = i10425[0]
  i10424.m_YCoordinate = i10425[1]
  return i10424
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i10426 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i10427 = data
  i10426.m_XPositionAdjustment = i10427[0]
  i10426.m_YPositionAdjustment = i10427[1]
  return i10426
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i10428 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i10429 = data
  i10428.xPlacement = i10429[0]
  i10428.yPlacement = i10429[1]
  i10428.xAdvance = i10429[2]
  i10428.yAdvance = i10429[3]
  return i10428
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i10430 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i10431 = data
  i10430.m_XPlacement = i10431[0]
  i10430.m_YPlacement = i10431[1]
  i10430.m_XAdvance = i10431[2]
  i10430.m_YAdvance = i10431[3]
  return i10430
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[45],"78":[50],"79":[32],"80":[32],"81":[32],"82":[32],"83":[32],"84":[32],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[50],"100":[42],"101":[102],"103":[102],"7":[6],"104":[8],"105":[6],"106":[42,6],"20":[6,12],"107":[6],"108":[12,6],"109":[42],"110":[12,6],"111":[6],"112":[113],"114":[113],"115":[113],"116":[6],"117":[6],"9":[7],"13":[12,6],"24":[6],"8":[7],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"124":[6],"23":[6],"125":[6],"126":[12,6],"127":[6],"128":[6],"129":[6],"130":[6],"131":[12,6],"132":[6],"133":[4],"134":[4],"5":[4],"135":[4],"136":[50],"137":[50]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Mask","UnityEngine.UI.AspectRatioFitter","SelectPanel","UnityEngine.GameObject","UnityEngine.BoxCollider","CharacterMotor","CharacterInput","UnityEngine.Transform","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.SpriteRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","Gift","AudioController","LunaController","UnityEngine.LineRenderer","SoundHint","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Light","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Playable.ResponsiveCanvasScaler","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "6.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V03_HoaiTT_HuyNQ";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1663";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4750";

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

Deserializers.buildID = "be82528a-beb1-4d55-ac1a-d7606226b5fa";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

