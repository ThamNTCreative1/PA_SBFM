var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i751 = data
  i750.name = i751[0]
  i750.width = i751[1]
  i750.height = i751[2]
  i750.mipmapCount = i751[3]
  i750.anisoLevel = i751[4]
  i750.filterMode = i751[5]
  i750.hdr = !!i751[6]
  i750.format = i751[7]
  i750.wrapMode = i751[8]
  i750.alphaIsTransparency = !!i751[9]
  i750.alphaSource = i751[10]
  i750.graphicsFormat = i751[11]
  i750.sRGBTexture = !!i751[12]
  i750.desiredColorSpace = i751[13]
  i750.wrapU = i751[14]
  i750.wrapV = i751[15]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i752 = root || new pc.UnityMaterial()
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'shader')
  i752.renderQueue = i753[3]
  i752.enableInstancing = !!i753[4]
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i755[i + 0]) );
  }
  i752.floatParameters = i754
  var i757 = i753[6]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i757[i + 0]) );
  }
  i752.colorParameters = i756
  var i759 = i753[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i759[i + 0]) );
  }
  i752.vectorParameters = i758
  var i761 = i753[8]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i761[i + 0]) );
  }
  i752.textureParameters = i760
  var i763 = i753[9]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i763[i + 0]) );
  }
  i752.materialFlags = i762
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = new pc.Color(i771[1], i771[2], i771[3], i771[4])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = new pc.Vec4( i775[1], i775[2], i775[3], i775[4] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'value')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i783 = data
  i782.name = i783[0]
  i782.enabled = !!i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i785 = data
  i784.name = i785[0]
  i784.halfPrecision = !!i785[1]
  i784.useSimplification = !!i785[2]
  i784.useUInt32IndexFormat = !!i785[3]
  i784.vertexCount = i785[4]
  i784.aabb = i785[5]
  var i787 = i785[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( !!i787[i + 0] );
  }
  i784.streams = i786
  i784.vertices = i785[7]
  var i789 = i785[8]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i789[i + 0]) );
  }
  i784.subMeshes = i788
  var i791 = i785[9]
  var i790 = []
  for(var i = 0; i < i791.length; i += 16) {
    i790.push( new pc.Mat4().setData(i791[i + 0], i791[i + 1], i791[i + 2], i791[i + 3],  i791[i + 4], i791[i + 5], i791[i + 6], i791[i + 7],  i791[i + 8], i791[i + 9], i791[i + 10], i791[i + 11],  i791[i + 12], i791[i + 13], i791[i + 14], i791[i + 15]) );
  }
  i784.bindposes = i790
  var i793 = i785[10]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i793[i + 0]) );
  }
  i784.blendShapes = i792
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i799 = data
  i798.triangles = i799[0]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i805 = data
  i804.name = i805[0]
  var i807 = i805[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i807[i + 0]) );
  }
  i804.frames = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i809 = data
  i808.name = i809[0]
  i808.atlasId = i809[1]
  i808.mipmapCount = i809[2]
  i808.hdr = !!i809[3]
  i808.size = i809[4]
  i808.anisoLevel = i809[5]
  i808.filterMode = i809[6]
  var i811 = i809[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 4) {
    i810.push( UnityEngine.Rect.MinMaxRect(i811[i + 0], i811[i + 1], i811[i + 2], i811[i + 3]) );
  }
  i808.rects = i810
  i808.wrapU = i809[8]
  i808.wrapV = i809[9]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i815 = data
  i814.name = i815[0]
  i814.index = i815[1]
  i814.startup = !!i815[2]
  return i814
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_FirstSelected')
  i816.m_sendNavigationEvents = !!i817[2]
  i816.m_DragThreshold = i817[3]
  return i816
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i819 = data
  i818.m_HorizontalAxis = i819[0]
  i818.m_VerticalAxis = i819[1]
  i818.m_SubmitButton = i819[2]
  i818.m_CancelButton = i819[3]
  i818.m_InputActionsPerSecond = i819[4]
  i818.m_RepeatDelay = i819[5]
  i818.m_ForceModuleActive = !!i819[6]
  i818.m_SendPointerHoverToParent = !!i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tagId = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i823 = data
  i822.pivot = new pc.Vec2( i823[0], i823[1] )
  i822.anchorMin = new pc.Vec2( i823[2], i823[3] )
  i822.anchorMax = new pc.Vec2( i823[4], i823[5] )
  i822.sizeDelta = new pc.Vec2( i823[6], i823[7] )
  i822.anchoredPosition3D = new pc.Vec3( i823[8], i823[9], i823[10] )
  i822.rotation = new pc.Quat(i823[11], i823[12], i823[13], i823[14])
  i822.scale = new pc.Vec3( i823[15], i823[16], i823[17] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i825 = data
  i824.planeDistance = i825[0]
  i824.referencePixelsPerUnit = i825[1]
  i824.isFallbackOverlay = !!i825[2]
  i824.renderMode = i825[3]
  i824.renderOrder = i825[4]
  i824.sortingLayerName = i825[5]
  i824.sortingOrder = i825[6]
  i824.scaleFactor = i825[7]
  request.r(i825[8], i825[9], 0, i824, 'worldCamera')
  i824.overrideSorting = !!i825[10]
  i824.pixelPerfect = !!i825[11]
  i824.targetDisplay = i825[12]
  i824.overridePixelPerfect = !!i825[13]
  i824.enabled = !!i825[14]
  return i824
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i827 = data
  i826.m_UiScaleMode = i827[0]
  i826.m_ReferencePixelsPerUnit = i827[1]
  i826.m_ScaleFactor = i827[2]
  i826.m_ReferenceResolution = new pc.Vec2( i827[3], i827[4] )
  i826.m_ScreenMatchMode = i827[5]
  i826.m_MatchWidthOrHeight = i827[6]
  i826.m_PhysicalUnit = i827[7]
  i826.m_FallbackScreenDPI = i827[8]
  i826.m_DefaultSpriteDPI = i827[9]
  i826.m_DynamicPixelsPerUnit = i827[10]
  i826.m_PresetInfoIsWorld = !!i827[11]
  return i826
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i829 = data
  i828.m_IgnoreReversedGraphics = !!i829[0]
  i828.m_BlockingObjects = i829[1]
  i828.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i829[2] )
  return i828
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i830 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i831 = data
  i830._referenceResolution = new pc.Vec2( i831[0], i831[1] )
  i830._portraitMatch = i831[2]
  i830._landscapeMatch = i831[3]
  i830._squareMatch = i831[4]
  i830._portraitAspectThreshold = i831[5]
  i830._landscapeAspectThreshold = i831[6]
  i830._aspectEpsilon = i831[7]
  return i830
}

Deserializers["Joystick"] = function (request, data, root) {
  var i832 = root || request.c( 'Joystick' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'background')
  request.r(i833[2], i833[3], 0, i832, 'joy')
  i832.deadZone = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i835 = data
  i834.cullTransparentMesh = !!i835[0]
  return i834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Image' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_Sprite')
  i836.m_Type = i837[2]
  i836.m_PreserveAspect = !!i837[3]
  i836.m_FillCenter = !!i837[4]
  i836.m_FillMethod = i837[5]
  i836.m_FillAmount = i837[6]
  i836.m_FillClockwise = !!i837[7]
  i836.m_FillOrigin = i837[8]
  i836.m_UseSpriteMesh = !!i837[9]
  i836.m_PixelsPerUnitMultiplier = i837[10]
  request.r(i837[11], i837[12], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[13]
  i836.m_Color = new pc.Color(i837[14], i837[15], i837[16], i837[17])
  i836.m_RaycastTarget = !!i837[18]
  i836.m_RaycastPadding = new pc.Vec4( i837[19], i837[20], i837[21], i837[22] )
  return i836
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Button' )
  var i839 = data
  i838.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i839[0], i838.m_OnClick)
  i838.m_Navigation = request.d('UnityEngine.UI.Navigation', i839[1], i838.m_Navigation)
  i838.m_Transition = i839[2]
  i838.m_Colors = request.d('UnityEngine.UI.ColorBlock', i839[3], i838.m_Colors)
  i838.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i839[4], i838.m_SpriteState)
  i838.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i839[5], i838.m_AnimationTriggers)
  i838.m_Interactable = !!i839[6]
  request.r(i839[7], i839[8], 0, i838, 'm_TargetGraphic')
  return i838
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i841 = data
  i840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i841[0], i840.m_PersistentCalls)
  return i840
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i843 = data
  var i845 = i843[0]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('UnityEngine.Events.PersistentCall', i845[i + 0]));
  }
  i842.m_Calls = i844
  return i842
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'm_Target')
  i848.m_TargetAssemblyTypeName = i849[2]
  i848.m_MethodName = i849[3]
  i848.m_Mode = i849[4]
  i848.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i849[5], i848.m_Arguments)
  i848.m_CallState = i849[6]
  return i848
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i851 = data
  i850.m_Mode = i851[0]
  i850.m_WrapAround = !!i851[1]
  request.r(i851[2], i851[3], 0, i850, 'm_SelectOnUp')
  request.r(i851[4], i851[5], 0, i850, 'm_SelectOnDown')
  request.r(i851[6], i851[7], 0, i850, 'm_SelectOnLeft')
  request.r(i851[8], i851[9], 0, i850, 'm_SelectOnRight')
  return i850
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i853 = data
  i852.m_NormalColor = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.m_HighlightedColor = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.m_PressedColor = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  i852.m_SelectedColor = new pc.Color(i853[12], i853[13], i853[14], i853[15])
  i852.m_DisabledColor = new pc.Color(i853[16], i853[17], i853[18], i853[19])
  i852.m_ColorMultiplier = i853[20]
  i852.m_FadeDuration = i853[21]
  return i852
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_HighlightedSprite')
  request.r(i855[2], i855[3], 0, i854, 'm_PressedSprite')
  request.r(i855[4], i855[5], 0, i854, 'm_SelectedSprite')
  request.r(i855[6], i855[7], 0, i854, 'm_DisabledSprite')
  return i854
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i857 = data
  i856.m_NormalTrigger = i857[0]
  i856.m_HighlightedTrigger = i857[1]
  i856.m_PressedTrigger = i857[2]
  i856.m_SelectedTrigger = i857[3]
  i856.m_DisabledTrigger = i857[4]
  return i856
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i858 = root || request.c( 'JumpButton' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'button')
  return i858
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Mask' )
  var i861 = data
  i860.m_ShowMaskGraphic = !!i861[0]
  return i860
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i863 = data
  i862.m_hasFontAssetChanged = !!i863[0]
  request.r(i863[1], i863[2], 0, i862, 'm_baseMaterial')
  i862.m_maskOffset = new pc.Vec4( i863[3], i863[4], i863[5], i863[6] )
  i862.m_text = i863[7]
  i862.m_isRightToLeft = !!i863[8]
  request.r(i863[9], i863[10], 0, i862, 'm_fontAsset')
  request.r(i863[11], i863[12], 0, i862, 'm_sharedMaterial')
  var i865 = i863[13]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.m_fontSharedMaterials = i864
  request.r(i863[14], i863[15], 0, i862, 'm_fontMaterial')
  var i867 = i863[16]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.m_fontMaterials = i866
  i862.m_fontColor32 = UnityEngine.Color32.ConstructColor(i863[17], i863[18], i863[19], i863[20])
  i862.m_fontColor = new pc.Color(i863[21], i863[22], i863[23], i863[24])
  i862.m_enableVertexGradient = !!i863[25]
  i862.m_colorMode = i863[26]
  i862.m_fontColorGradient = request.d('TMPro.VertexGradient', i863[27], i862.m_fontColorGradient)
  request.r(i863[28], i863[29], 0, i862, 'm_fontColorGradientPreset')
  request.r(i863[30], i863[31], 0, i862, 'm_spriteAsset')
  i862.m_tintAllSprites = !!i863[32]
  request.r(i863[33], i863[34], 0, i862, 'm_StyleSheet')
  i862.m_TextStyleHashCode = i863[35]
  i862.m_overrideHtmlColors = !!i863[36]
  i862.m_faceColor = UnityEngine.Color32.ConstructColor(i863[37], i863[38], i863[39], i863[40])
  i862.m_fontSize = i863[41]
  i862.m_fontSizeBase = i863[42]
  i862.m_fontWeight = i863[43]
  i862.m_enableAutoSizing = !!i863[44]
  i862.m_fontSizeMin = i863[45]
  i862.m_fontSizeMax = i863[46]
  i862.m_fontStyle = i863[47]
  i862.m_HorizontalAlignment = i863[48]
  i862.m_VerticalAlignment = i863[49]
  i862.m_textAlignment = i863[50]
  i862.m_characterSpacing = i863[51]
  i862.m_wordSpacing = i863[52]
  i862.m_lineSpacing = i863[53]
  i862.m_lineSpacingMax = i863[54]
  i862.m_paragraphSpacing = i863[55]
  i862.m_charWidthMaxAdj = i863[56]
  i862.m_TextWrappingMode = i863[57]
  i862.m_wordWrappingRatios = i863[58]
  i862.m_overflowMode = i863[59]
  request.r(i863[60], i863[61], 0, i862, 'm_linkedTextComponent')
  request.r(i863[62], i863[63], 0, i862, 'parentLinkedComponent')
  i862.m_enableKerning = !!i863[64]
  var i869 = i863[65]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(i869[i + 0]);
  }
  i862.m_ActiveFontFeatures = i868
  i862.m_enableExtraPadding = !!i863[66]
  i862.checkPaddingRequired = !!i863[67]
  i862.m_isRichText = !!i863[68]
  i862.m_parseCtrlCharacters = !!i863[69]
  i862.m_isOrthographic = !!i863[70]
  i862.m_isCullingEnabled = !!i863[71]
  i862.m_horizontalMapping = i863[72]
  i862.m_verticalMapping = i863[73]
  i862.m_uvLineOffset = i863[74]
  i862.m_geometrySortingOrder = i863[75]
  i862.m_IsTextObjectScaleStatic = !!i863[76]
  i862.m_VertexBufferAutoSizeReduction = !!i863[77]
  i862.m_useMaxVisibleDescender = !!i863[78]
  i862.m_pageToDisplay = i863[79]
  i862.m_margin = new pc.Vec4( i863[80], i863[81], i863[82], i863[83] )
  i862.m_isUsingLegacyAnimationComponent = !!i863[84]
  i862.m_isVolumetricText = !!i863[85]
  request.r(i863[86], i863[87], 0, i862, 'm_Material')
  i862.m_EmojiFallbackSupport = !!i863[88]
  i862.m_Maskable = !!i863[89]
  i862.m_Color = new pc.Color(i863[90], i863[91], i863[92], i863[93])
  i862.m_RaycastTarget = !!i863[94]
  i862.m_RaycastPadding = new pc.Vec4( i863[95], i863[96], i863[97], i863[98] )
  return i862
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.VertexGradient' )
  var i873 = data
  i872.topLeft = new pc.Color(i873[0], i873[1], i873[2], i873[3])
  i872.topRight = new pc.Color(i873[4], i873[5], i873[6], i873[7])
  i872.bottomLeft = new pc.Color(i873[8], i873[9], i873[10], i873[11])
  i872.bottomRight = new pc.Color(i873[12], i873[13], i873[14], i873[15])
  return i872
}

Deserializers["TutController"] = function (request, data, root) {
  var i876 = root || request.c( 'TutController' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'tutScene')
  request.r(i877[2], i877[3], 0, i876, 'startTut')
  request.r(i877[4], i877[5], 0, i876, 'playTut')
  request.r(i877[6], i877[7], 0, i876, 'farTut')
  request.r(i877[8], i877[9], 0, i876, 'failTut')
  return i876
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i878 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i879 = data
  i878.targetIsSelf = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'targetGO')
  i878.tweenTargetIsTargetGO = !!i879[3]
  i878.delay = i879[4]
  i878.duration = i879[5]
  i878.easeType = i879[6]
  i878.easeCurve = new pc.AnimationCurve( { keys_flow: i879[7] } )
  i878.loopType = i879[8]
  i878.loops = i879[9]
  i878.id = i879[10]
  i878.isRelative = !!i879[11]
  i878.isFrom = !!i879[12]
  i878.isIndependentUpdate = !!i879[13]
  i878.autoKill = !!i879[14]
  i878.autoGenerate = !!i879[15]
  i878.isActive = !!i879[16]
  i878.isValid = !!i879[17]
  request.r(i879[18], i879[19], 0, i878, 'target')
  i878.animationType = i879[20]
  i878.targetType = i879[21]
  i878.forcedTargetType = i879[22]
  i878.autoPlay = !!i879[23]
  i878.useTargetAsV3 = !!i879[24]
  i878.endValueFloat = i879[25]
  i878.endValueV3 = new pc.Vec3( i879[26], i879[27], i879[28] )
  i878.endValueV2 = new pc.Vec2( i879[29], i879[30] )
  i878.endValueColor = new pc.Color(i879[31], i879[32], i879[33], i879[34])
  i878.endValueString = i879[35]
  i878.endValueRect = UnityEngine.Rect.MinMaxRect(i879[36], i879[37], i879[38], i879[39])
  request.r(i879[40], i879[41], 0, i878, 'endValueTransform')
  i878.optionalBool0 = !!i879[42]
  i878.optionalBool1 = !!i879[43]
  i878.optionalFloat0 = i879[44]
  i878.optionalInt0 = i879[45]
  i878.optionalRotationMode = i879[46]
  i878.optionalScrambleMode = i879[47]
  i878.optionalShakeRandomnessMode = i879[48]
  i878.optionalString = i879[49]
  i878.updateType = i879[50]
  i878.isSpeedBased = !!i879[51]
  i878.hasOnStart = !!i879[52]
  i878.hasOnPlay = !!i879[53]
  i878.hasOnUpdate = !!i879[54]
  i878.hasOnStepComplete = !!i879[55]
  i878.hasOnComplete = !!i879[56]
  i878.hasOnTweenCreated = !!i879[57]
  i878.hasOnRewind = !!i879[58]
  i878.onStart = request.d('UnityEngine.Events.UnityEvent', i879[59], i878.onStart)
  i878.onPlay = request.d('UnityEngine.Events.UnityEvent', i879[60], i878.onPlay)
  i878.onUpdate = request.d('UnityEngine.Events.UnityEvent', i879[61], i878.onUpdate)
  i878.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i879[62], i878.onStepComplete)
  i878.onComplete = request.d('UnityEngine.Events.UnityEvent', i879[63], i878.onComplete)
  i878.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i879[64], i878.onTweenCreated)
  i878.onRewind = request.d('UnityEngine.Events.UnityEvent', i879[65], i878.onRewind)
  return i878
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i881 = data
  i880.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i881[0], i880.m_PersistentCalls)
  return i880
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i882 = root || request.c( 'HideOnPointer' )
  var i883 = data
  i882.OnPointerDownEvent = request.d('System.Action', i883[0], i882.OnPointerDownEvent)
  return i882
}

Deserializers["System.Action"] = function (request, data, root) {
  var i884 = root || request.c( 'System.Action' )
  var i885 = data
  return i884
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i886 = root || request.c( 'SelectPanel' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, '_title')
  var i889 = i887[2]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i886._buttonsSelectMap = i888
  return i886
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i893 = data
  i892.m_AspectMode = i893[0]
  i892.m_AspectRatio = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i895 = data
  i894.center = new pc.Vec3( i895[0], i895[1], i895[2] )
  i894.size = new pc.Vec3( i895[3], i895[4], i895[5] )
  i894.enabled = !!i895[6]
  i894.isTrigger = !!i895[7]
  request.r(i895[8], i895[9], 0, i894, 'material')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i897 = data
  i896.mass = i897[0]
  i896.drag = i897[1]
  i896.angularDrag = i897[2]
  i896.useGravity = !!i897[3]
  i896.isKinematic = !!i897[4]
  i896.constraints = i897[5]
  i896.maxAngularVelocity = i897[6]
  i896.collisionDetectionMode = i897[7]
  i896.interpolation = i897[8]
  return i896
}

Deserializers["Gift"] = function (request, data, root) {
  var i898 = root || request.c( 'Gift' )
  var i899 = data
  i898.collectDone = !!i899[0]
  var i901 = i899[1]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i898.hints = i900
  request.r(i899[2], i899[3], 0, i898, 'collectSound')
  request.r(i899[4], i899[5], 0, i898, 'collectEffect')
  request.r(i899[6], i899[7], 0, i898, 'arrow')
  return i898
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i904 = root || request.c( 'SoundHint' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'Sound')
  request.r(i905[2], i905[3], 0, i904, 'Source')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'sharedMesh')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'additionalVertexStreams')
  i908.enabled = !!i909[2]
  request.r(i909[3], i909[4], 0, i908, 'sharedMaterial')
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[6]
  i908.shadowCastingMode = i909[7]
  i908.sortingLayerID = i909[8]
  i908.sortingOrder = i909[9]
  i908.lightmapIndex = i909[10]
  i908.lightmapSceneIndex = i909[11]
  i908.lightmapScaleOffset = new pc.Vec4( i909[12], i909[13], i909[14], i909[15] )
  i908.lightProbeUsage = i909[16]
  i908.reflectionProbeUsage = i909[17]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'mesh')
  i912.meshCount = i913[2]
  i912.activeVertexStreamsCount = i913[3]
  i912.alignment = i913[4]
  i912.renderMode = i913[5]
  i912.sortMode = i913[6]
  i912.lengthScale = i913[7]
  i912.velocityScale = i913[8]
  i912.cameraVelocityScale = i913[9]
  i912.normalDirection = i913[10]
  i912.sortingFudge = i913[11]
  i912.minParticleSize = i913[12]
  i912.maxParticleSize = i913[13]
  i912.pivot = new pc.Vec3( i913[14], i913[15], i913[16] )
  request.r(i913[17], i913[18], 0, i912, 'trailMaterial')
  i912.applyActiveColorSpace = !!i913[19]
  i912.enabled = !!i913[20]
  request.r(i913[21], i913[22], 0, i912, 'sharedMaterial')
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[24]
  i912.shadowCastingMode = i913[25]
  i912.sortingLayerID = i913[26]
  i912.sortingOrder = i913[27]
  i912.lightmapIndex = i913[28]
  i912.lightmapSceneIndex = i913[29]
  i912.lightmapScaleOffset = new pc.Vec4( i913[30], i913[31], i913[32], i913[33] )
  i912.lightProbeUsage = i913[34]
  i912.reflectionProbeUsage = i913[35]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i917 = data
  i916.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i917[0], i916.main)
  i916.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i917[1], i916.colorBySpeed)
  i916.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i917[2], i916.colorOverLifetime)
  i916.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i917[3], i916.emission)
  i916.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i917[4], i916.rotationBySpeed)
  i916.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i917[5], i916.rotationOverLifetime)
  i916.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i917[6], i916.shape)
  i916.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i917[7], i916.sizeBySpeed)
  i916.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i917[8], i916.sizeOverLifetime)
  i916.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i917[9], i916.textureSheetAnimation)
  i916.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i917[10], i916.velocityOverLifetime)
  i916.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i917[11], i916.noise)
  i916.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i917[12], i916.inheritVelocity)
  i916.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i917[13], i916.forceOverLifetime)
  i916.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i917[14], i916.limitVelocityOverLifetime)
  i916.useAutoRandomSeed = !!i917[15]
  i916.randomSeed = i917[16]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemMain()
  var i919 = data
  i918.duration = i919[0]
  i918.loop = !!i919[1]
  i918.prewarm = !!i919[2]
  i918.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.startDelay)
  i918.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[4], i918.startLifetime)
  i918.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[5], i918.startSpeed)
  i918.startSize3D = !!i919[6]
  i918.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[7], i918.startSizeX)
  i918.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[8], i918.startSizeY)
  i918.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[9], i918.startSizeZ)
  i918.startRotation3D = !!i919[10]
  i918.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[11], i918.startRotationX)
  i918.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[12], i918.startRotationY)
  i918.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[13], i918.startRotationZ)
  i918.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i919[14], i918.startColor)
  i918.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[15], i918.gravityModifier)
  i918.simulationSpace = i919[16]
  request.r(i919[17], i919[18], 0, i918, 'customSimulationSpace')
  i918.simulationSpeed = i919[19]
  i918.useUnscaledTime = !!i919[20]
  i918.scalingMode = i919[21]
  i918.playOnAwake = !!i919[22]
  i918.maxParticles = i919[23]
  i918.emitterVelocityMode = i919[24]
  i918.stopAction = i919[25]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i920 = root || new pc.MinMaxCurve()
  var i921 = data
  i920.mode = i921[0]
  i920.curveMin = new pc.AnimationCurve( { keys_flow: i921[1] } )
  i920.curveMax = new pc.AnimationCurve( { keys_flow: i921[2] } )
  i920.curveMultiplier = i921[3]
  i920.constantMin = i921[4]
  i920.constantMax = i921[5]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i922 = root || new pc.MinMaxGradient()
  var i923 = data
  i922.mode = i923[0]
  i922.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i923[1], i922.gradientMin)
  i922.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i923[2], i922.gradientMax)
  i922.colorMin = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.colorMax = new pc.Color(i923[7], i923[8], i923[9], i923[10])
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i925 = data
  i924.mode = i925[0]
  var i927 = i925[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i927[i + 0]) );
  }
  i924.colorKeys = i926
  var i929 = i925[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i929[i + 0]) );
  }
  i924.alphaKeys = i928
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemColorBySpeed()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i931[1], i930.color)
  i930.range = new pc.Vec2( i931[2], i931[3] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i935 = data
  i934.color = new pc.Color(i935[0], i935[1], i935[2], i935[3])
  i934.time = i935[4]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i939 = data
  i938.alpha = i939[0]
  i938.time = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemColorOverLifetime()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i941[1], i940.color)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemEmitter()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.rateOverTime)
  i942.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.rateOverDistance)
  var i945 = i943[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i945[i + 0]) );
  }
  i942.bursts = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemBurst()
  var i949 = data
  i948.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[0], i948.count)
  i948.cycleCount = i949[1]
  i948.minCount = i949[2]
  i948.maxCount = i949[3]
  i948.repeatInterval = i949[4]
  i948.time = i949[5]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemRotationBySpeed()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  i950.range = new pc.Vec2( i951[5], i951[6] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemRotationOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.separateAxes = !!i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemShape()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.shapeType = i955[1]
  i954.randomDirectionAmount = i955[2]
  i954.sphericalDirectionAmount = i955[3]
  i954.randomPositionAmount = i955[4]
  i954.alignToDirection = !!i955[5]
  i954.radius = i955[6]
  i954.radiusMode = i955[7]
  i954.radiusSpread = i955[8]
  i954.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[9], i954.radiusSpeed)
  i954.radiusThickness = i955[10]
  i954.angle = i955[11]
  i954.length = i955[12]
  i954.boxThickness = new pc.Vec3( i955[13], i955[14], i955[15] )
  i954.meshShapeType = i955[16]
  request.r(i955[17], i955[18], 0, i954, 'mesh')
  request.r(i955[19], i955[20], 0, i954, 'meshRenderer')
  request.r(i955[21], i955[22], 0, i954, 'skinnedMeshRenderer')
  i954.useMeshMaterialIndex = !!i955[23]
  i954.meshMaterialIndex = i955[24]
  i954.useMeshColors = !!i955[25]
  i954.normalOffset = i955[26]
  i954.arc = i955[27]
  i954.arcMode = i955[28]
  i954.arcSpread = i955[29]
  i954.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[30], i954.arcSpeed)
  i954.donutRadius = i955[31]
  i954.position = new pc.Vec3( i955[32], i955[33], i955[34] )
  i954.rotation = new pc.Vec3( i955[35], i955[36], i955[37] )
  i954.scale = new pc.Vec3( i955[38], i955[39], i955[40] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemSizeBySpeed()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.separateAxes = !!i957[4]
  i956.range = new pc.Vec2( i957[5], i957[6] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemSizeOverLifetime()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.separateAxes = !!i959[4]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.mode = i961[1]
  i960.animation = i961[2]
  i960.numTilesX = i961[3]
  i960.numTilesY = i961[4]
  i960.useRandomRow = !!i961[5]
  i960.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[6], i960.frameOverTime)
  i960.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[7], i960.startFrame)
  i960.cycleCount = i961[8]
  i960.rowIndex = i961[9]
  i960.flipU = i961[10]
  i960.flipV = i961[11]
  i960.spriteCount = i961[12]
  var i963 = i961[13]
  var i962 = []
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 2, i962, '')
  }
  i960.sprites = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[4], i966.radial)
  i966.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[5], i966.speedModifier)
  i966.space = i967[6]
  i966.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[7], i966.orbitalX)
  i966.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[8], i966.orbitalY)
  i966.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[9], i966.orbitalZ)
  i966.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[10], i966.orbitalOffsetX)
  i966.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[11], i966.orbitalOffsetY)
  i966.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[12], i966.orbitalOffsetZ)
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemNoise()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.separateAxes = !!i969[1]
  i968.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.strengthX)
  i968.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.strengthY)
  i968.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[4], i968.strengthZ)
  i968.frequency = i969[5]
  i968.damping = !!i969[6]
  i968.octaveCount = i969[7]
  i968.octaveMultiplier = i969[8]
  i968.octaveScale = i969[9]
  i968.quality = i969[10]
  i968.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[11], i968.scrollSpeed)
  i968.scrollSpeedMultiplier = i969[12]
  i968.remapEnabled = !!i969[13]
  i968.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[14], i968.remapX)
  i968.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[15], i968.remapY)
  i968.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[16], i968.remapZ)
  i968.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[17], i968.positionAmount)
  i968.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[18], i968.rotationAmount)
  i968.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[19], i968.sizeAmount)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemInheritVelocity()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.mode = i971[1]
  i970.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.curve)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemForceOverLifetime()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.space = i973[4]
  i972.randomized = !!i973[5]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.limit)
  i974.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.limitX)
  i974.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.limitY)
  i974.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[4], i974.limitZ)
  i974.dampen = i975[5]
  i974.separateAxes = !!i975[6]
  i974.space = i975[7]
  i974.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[8], i974.drag)
  i974.multiplyDragByParticleSize = !!i975[9]
  i974.multiplyDragByParticleVelocity = !!i975[10]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i977 = data
  i976.color = new pc.Color(i977[0], i977[1], i977[2], i977[3])
  request.r(i977[4], i977[5], 0, i976, 'sprite')
  i976.flipX = !!i977[6]
  i976.flipY = !!i977[7]
  i976.drawMode = i977[8]
  i976.size = new pc.Vec2( i977[9], i977[10] )
  i976.tileMode = i977[11]
  i976.adaptiveModeThreshold = i977[12]
  i976.maskInteraction = i977[13]
  i976.spriteSortPoint = i977[14]
  i976.enabled = !!i977[15]
  request.r(i977[16], i977[17], 0, i976, 'sharedMaterial')
  var i979 = i977[18]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.sharedMaterials = i978
  i976.receiveShadows = !!i977[19]
  i976.shadowCastingMode = i977[20]
  i976.sortingLayerID = i977[21]
  i976.sortingOrder = i977[22]
  i976.lightmapIndex = i977[23]
  i976.lightmapSceneIndex = i977[24]
  i976.lightmapScaleOffset = new pc.Vec4( i977[25], i977[26], i977[27], i977[28] )
  i976.lightProbeUsage = i977[29]
  i976.reflectionProbeUsage = i977[30]
  return i976
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i980 = root || request.c( 'CharacterMotor' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'characterInput')
  request.r(i981[2], i981[3], 0, i980, 'cameraYawTransform')
  request.r(i981[4], i981[5], 0, i980, '_arrow')
  i980.moveSpeed = i981[6]
  i980.jumpHeight = i981[7]
  request.r(i981[8], i981[9], 0, i980, 'groundChecker')
  i980.gravity = i981[10]
  i980.enableStepClimb = !!i981[11]
  i980.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i981[12] )
  i980.maxStepHeight = i981[13]
  i980.stepCheckDistance = i981[14]
  i980.stepUpSpeed = i981[15]
  i980.stepUpAcceleration = i981[16]
  i980.minimumStepFacing = i981[17]
  request.r(i981[18], i981[19], 0, i980, 'controller')
  i980.autoRun = !!i981[20]
  return i980
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i982 = root || request.c( 'CharacterRotation' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'motor')
  i982.rotationSpeed = i983[2]
  return i982
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i984 = root || request.c( 'CharacterAnimation' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'animator')
  request.r(i985[2], i985[3], 0, i984, 'motor')
  i984.speedChangeRate = i985[4]
  i984.groundedGraceTime = i985[5]
  return i984
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i986 = root || request.c( 'CharacterCollect' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'motor')
  request.r(i987[2], i987[3], 0, i986, 'avatar')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i989 = data
  i988.center = new pc.Vec3( i989[0], i989[1], i989[2] )
  i988.radius = i989[3]
  i988.height = i989[4]
  i988.direction = i989[5]
  i988.enabled = !!i989[6]
  i988.isTrigger = !!i989[7]
  request.r(i989[8], i989[9], 0, i988, 'material')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'animatorController')
  request.r(i991[2], i991[3], 0, i990, 'avatar')
  i990.updateMode = i991[4]
  i990.hasTransformHierarchy = !!i991[5]
  i990.applyRootMotion = !!i991[6]
  var i993 = i991[7]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.humanBones = i992
  i990.enabled = !!i991[8]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'clip')
  request.r(i997[2], i997[3], 0, i996, 'outputAudioMixerGroup')
  i996.playOnAwake = !!i997[4]
  i996.loop = !!i997[5]
  i996.time = i997[6]
  i996.volume = i997[7]
  i996.pitch = i997[8]
  i996.enabled = !!i997[9]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'sharedMesh')
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.bones = i1000
  i998.updateWhenOffscreen = !!i999[3]
  i998.localBounds = i999[4]
  request.r(i999[5], i999[6], 0, i998, 'rootBone')
  var i1003 = i999[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1003[i + 0]) );
  }
  i998.blendShapesWeights = i1002
  i998.enabled = !!i999[8]
  request.r(i999[9], i999[10], 0, i998, 'sharedMaterial')
  var i1005 = i999[11]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i998.sharedMaterials = i1004
  i998.receiveShadows = !!i999[12]
  i998.shadowCastingMode = i999[13]
  i998.sortingLayerID = i999[14]
  i998.sortingOrder = i999[15]
  i998.lightmapIndex = i999[16]
  i998.lightmapSceneIndex = i999[17]
  i998.lightmapScaleOffset = new pc.Vec4( i999[18], i999[19], i999[20], i999[21] )
  i998.lightProbeUsage = i999[22]
  i998.reflectionProbeUsage = i999[23]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1009 = data
  i1008.weight = i1009[0]
  return i1008
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i1010 = root || request.c( 'GroundChecker' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'groundPoint')
  i1010.checkRadius = i1011[2]
  i1010.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1011[3] )
  return i1010
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1012 = root || request.c( 'CameraFollow' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'target')
  i1012.smoothTime = i1013[2]
  return i1012
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1014 = root || request.c( 'CameraLook' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'input')
  request.r(i1015[2], i1015[3], 0, i1014, 'yawPivot')
  request.r(i1015[4], i1015[5], 0, i1014, 'pitchPivot')
  i1014.minPitch = i1015[6]
  i1014.maxPitch = i1015[7]
  i1014.yaw = i1015[8]
  i1014.pitch = i1015[9]
  i1014.defaltYaw = i1015[10]
  i1014.defaltPitch = i1015[11]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1017 = data
  i1016.aspect = i1017[0]
  i1016.orthographic = !!i1017[1]
  i1016.orthographicSize = i1017[2]
  i1016.backgroundColor = new pc.Color(i1017[3], i1017[4], i1017[5], i1017[6])
  i1016.nearClipPlane = i1017[7]
  i1016.farClipPlane = i1017[8]
  i1016.fieldOfView = i1017[9]
  i1016.depth = i1017[10]
  i1016.clearFlags = i1017[11]
  i1016.cullingMask = i1017[12]
  i1016.rect = i1017[13]
  request.r(i1017[14], i1017[15], 0, i1016, 'targetTexture')
  i1016.usePhysicalProperties = !!i1017[16]
  i1016.focalLength = i1017[17]
  i1016.sensorSize = new pc.Vec2( i1017[18], i1017[19] )
  i1016.lensShift = new pc.Vec2( i1017[20], i1017[21] )
  i1016.gateFit = i1017[22]
  i1016.commandBufferCount = i1017[23]
  i1016.cameraType = i1017[24]
  i1016.enabled = !!i1017[25]
  return i1016
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1018 = root || request.c( 'CharacterInput' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'joystick')
  request.r(i1019[2], i1019[3], 0, i1018, 'jumpButton')
  return i1018
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1020 = root || request.c( 'InputManager' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'worldCamera')
  i1020.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1021[2] )
  i1020.touchSensitivity = i1021[3]
  i1020.mouseSensitivity = i1021[4]
  i1020.dragThreshold = i1021[5]
  return i1020
}

Deserializers["GameController"] = function (request, data, root) {
  var i1022 = root || request.c( 'GameController' )
  var i1023 = data
  i1022.timeToShowComplete = i1023[0]
  i1022.timeToShowHint = i1023[1]
  i1022.currentProgress = i1023[2]
  i1022.target = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'progressText')
  request.r(i1023[6], i1023[7], 0, i1022, 'collectText')
  request.r(i1023[8], i1023[9], 0, i1022, 'completeScene')
  var i1025 = i1023[10]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1022.gifts = i1024
  request.r(i1023[11], i1023[12], 0, i1022, 'collect')
  request.r(i1023[13], i1023[14], 0, i1022, 'tut')
  return i1022
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1028 = root || request.c( 'AudioController' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'musicSource')
  request.r(i1029[2], i1029[3], 0, i1028, 'poolParent')
  i1028.startSize = i1029[4]
  return i1028
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1030 = root || request.c( 'LunaController' )
  var i1031 = data
  i1030.LimitTimePlay = !!i1031[0]
  i1030.TimePlay = i1031[1]
  var i1033 = i1031[2]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1030.images = i1032
  request.r(i1031[3], i1031[4], 0, i1030, 'CTA')
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1037 = data
  i1036.type = i1037[0]
  i1036.color = new pc.Color(i1037[1], i1037[2], i1037[3], i1037[4])
  i1036.cullingMask = i1037[5]
  i1036.intensity = i1037[6]
  i1036.range = i1037[7]
  i1036.spotAngle = i1037[8]
  i1036.shadows = i1037[9]
  i1036.shadowNormalBias = i1037[10]
  i1036.shadowBias = i1037[11]
  i1036.shadowStrength = i1037[12]
  i1036.shadowResolution = i1037[13]
  i1036.lightmapBakeType = i1037[14]
  i1036.renderMode = i1037[15]
  request.r(i1037[16], i1037[17], 0, i1036, 'cookie')
  i1036.cookieSize = i1037[18]
  i1036.shadowNearPlane = i1037[19]
  i1036.occlusionMaskChannel = i1037[20]
  i1036.isBaked = !!i1037[21]
  i1036.mixedLightingMode = i1037[22]
  i1036.enabled = !!i1037[23]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1039 = data
  i1038.textureMode = i1039[0]
  i1038.alignment = i1039[1]
  i1038.widthCurve = new pc.AnimationCurve( { keys_flow: i1039[2] } )
  i1038.colorGradient = i1039[3] ? new pc.ColorGradient(i1039[3][0], i1039[3][1], i1039[3][2]) : null
  var i1041 = i1039[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 3) {
    i1040.push( new pc.Vec3( i1041[i + 0], i1041[i + 1], i1041[i + 2] ) );
  }
  i1038.positions = i1040
  i1038.positionCount = i1039[5]
  i1038.widthMultiplier = i1039[6]
  i1038.startWidth = i1039[7]
  i1038.endWidth = i1039[8]
  i1038.numCornerVertices = i1039[9]
  i1038.numCapVertices = i1039[10]
  i1038.useWorldSpace = !!i1039[11]
  i1038.loop = !!i1039[12]
  i1038.startColor = new pc.Color(i1039[13], i1039[14], i1039[15], i1039[16])
  i1038.endColor = new pc.Color(i1039[17], i1039[18], i1039[19], i1039[20])
  i1038.generateLightingData = !!i1039[21]
  i1038.enabled = !!i1039[22]
  request.r(i1039[23], i1039[24], 0, i1038, 'sharedMaterial')
  var i1043 = i1039[25]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1038.sharedMaterials = i1042
  i1038.receiveShadows = !!i1039[26]
  i1038.shadowCastingMode = i1039[27]
  i1038.sortingLayerID = i1039[28]
  i1038.sortingOrder = i1039[29]
  i1038.lightmapIndex = i1039[30]
  i1038.lightmapSceneIndex = i1039[31]
  i1038.lightmapScaleOffset = new pc.Vec4( i1039[32], i1039[33], i1039[34], i1039[35] )
  i1038.lightProbeUsage = i1039[36]
  i1038.reflectionProbeUsage = i1039[37]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'sharedMesh')
  i1046.convex = !!i1047[2]
  i1046.enabled = !!i1047[3]
  i1046.isTrigger = !!i1047[4]
  request.r(i1047[5], i1047[6], 0, i1046, 'material')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1049 = data
  i1048.ambientIntensity = i1049[0]
  i1048.reflectionIntensity = i1049[1]
  i1048.ambientMode = i1049[2]
  i1048.ambientLight = new pc.Color(i1049[3], i1049[4], i1049[5], i1049[6])
  i1048.ambientSkyColor = new pc.Color(i1049[7], i1049[8], i1049[9], i1049[10])
  i1048.ambientGroundColor = new pc.Color(i1049[11], i1049[12], i1049[13], i1049[14])
  i1048.ambientEquatorColor = new pc.Color(i1049[15], i1049[16], i1049[17], i1049[18])
  i1048.fogColor = new pc.Color(i1049[19], i1049[20], i1049[21], i1049[22])
  i1048.fogEndDistance = i1049[23]
  i1048.fogStartDistance = i1049[24]
  i1048.fogDensity = i1049[25]
  i1048.fog = !!i1049[26]
  request.r(i1049[27], i1049[28], 0, i1048, 'skybox')
  i1048.fogMode = i1049[29]
  var i1051 = i1049[30]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1051[i + 0]) );
  }
  i1048.lightmaps = i1050
  i1048.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1049[31], i1048.lightProbes)
  i1048.lightmapsMode = i1049[32]
  i1048.mixedBakeMode = i1049[33]
  i1048.environmentLightingMode = i1049[34]
  i1048.ambientProbe = new pc.SphericalHarmonicsL2(i1049[35])
  request.r(i1049[36], i1049[37], 0, i1048, 'customReflection')
  request.r(i1049[38], i1049[39], 0, i1048, 'defaultReflection')
  i1048.defaultReflectionMode = i1049[40]
  i1048.defaultReflectionResolution = i1049[41]
  i1048.sunLightObjectId = i1049[42]
  i1048.pixelLightCount = i1049[43]
  i1048.defaultReflectionHDR = !!i1049[44]
  i1048.hasLightDataAsset = !!i1049[45]
  i1048.hasManualGenerate = !!i1049[46]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'lightmapColor')
  request.r(i1055[2], i1055[3], 0, i1054, 'lightmapDirection')
  request.r(i1055[4], i1055[5], 0, i1054, 'shadowMask')
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1056 = root || new UnityEngine.LightProbes()
  var i1057 = data
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1065[i + 0]));
  }
  i1062.ShaderCompilationErrors = i1064
  i1062.name = i1063[1]
  i1062.guid = i1063[2]
  var i1067 = i1063[3]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.shaderDefinedKeywords = i1066
  var i1069 = i1063[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1069[i + 0]) );
  }
  i1062.passes = i1068
  var i1071 = i1063[5]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1071[i + 0]) );
  }
  i1062.usePasses = i1070
  var i1073 = i1063[6]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1073[i + 0]) );
  }
  i1062.defaultParameterValues = i1072
  request.r(i1063[7], i1063[8], 0, i1062, 'unityFallbackShader')
  i1062.readDepth = !!i1063[9]
  i1062.hasDepthOnlyPass = !!i1063[10]
  i1062.isCreatedByShaderGraph = !!i1063[11]
  i1062.disableBatching = !!i1063[12]
  i1062.compiled = !!i1063[13]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1077 = data
  i1076.shaderName = i1077[0]
  i1076.errorMessage = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1082 = root || new pc.UnityShaderPass()
  var i1083 = data
  i1082.id = i1083[0]
  i1082.subShaderIndex = i1083[1]
  i1082.name = i1083[2]
  i1082.passType = i1083[3]
  i1082.grabPassTextureName = i1083[4]
  i1082.usePass = !!i1083[5]
  i1082.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[6], i1082.zTest)
  i1082.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[7], i1082.zWrite)
  i1082.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[8], i1082.culling)
  i1082.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1083[9], i1082.blending)
  i1082.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1083[10], i1082.alphaBlending)
  i1082.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[11], i1082.colorWriteMask)
  i1082.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[12], i1082.offsetUnits)
  i1082.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[13], i1082.offsetFactor)
  i1082.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[14], i1082.stencilRef)
  i1082.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[15], i1082.stencilReadMask)
  i1082.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[16], i1082.stencilWriteMask)
  i1082.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1083[17], i1082.stencilOp)
  i1082.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1083[18], i1082.stencilOpFront)
  i1082.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1083[19], i1082.stencilOpBack)
  var i1085 = i1083[20]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1085[i + 0]) );
  }
  i1082.tags = i1084
  var i1087 = i1083[21]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.passDefinedKeywords = i1086
  var i1089 = i1083[22]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1089[i + 0]) );
  }
  i1082.passDefinedKeywordGroups = i1088
  var i1091 = i1083[23]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1091[i + 0]) );
  }
  i1082.variants = i1090
  var i1093 = i1083[24]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1093[i + 0]) );
  }
  i1082.excludedVariants = i1092
  i1082.hasDepthReader = !!i1083[25]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1095 = data
  i1094.val = i1095[0]
  i1094.name = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1097 = data
  i1096.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[0], i1096.src)
  i1096.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[1], i1096.dst)
  i1096.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[2], i1096.op)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1099 = data
  i1098.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[0], i1098.pass)
  i1098.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[1], i1098.fail)
  i1098.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[2], i1098.zFail)
  i1098.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[3], i1098.comp)
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.value = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1106.keywords = i1108
  i1106.hasDiscard = !!i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1113 = data
  i1112.passId = i1113[0]
  i1112.subShaderIndex = i1113[1]
  var i1115 = i1113[2]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.keywords = i1114
  i1112.vertexProgram = i1113[3]
  i1112.fragmentProgram = i1113[4]
  i1112.exportedForWebGl2 = !!i1113[5]
  i1112.readDepth = !!i1113[6]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'shader')
  i1118.pass = i1119[2]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.type = i1123[1]
  i1122.value = new pc.Vec4( i1123[2], i1123[3], i1123[4], i1123[5] )
  i1122.textureValue = i1123[6]
  i1122.shaderPropertyFlag = i1123[7]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1125 = data
  i1124.name = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'texture')
  i1124.aabb = i1125[3]
  i1124.vertices = i1125[4]
  i1124.triangles = i1125[5]
  i1124.textureRect = UnityEngine.Rect.MinMaxRect(i1125[6], i1125[7], i1125[8], i1125[9])
  i1124.packedRect = UnityEngine.Rect.MinMaxRect(i1125[10], i1125[11], i1125[12], i1125[13])
  i1124.border = new pc.Vec4( i1125[14], i1125[15], i1125[16], i1125[17] )
  i1124.transparency = i1125[18]
  i1124.bounds = i1125[19]
  i1124.pixelsPerUnit = i1125[20]
  i1124.textureWidth = i1125[21]
  i1124.textureHeight = i1125[22]
  i1124.nativeSize = new pc.Vec2( i1125[23], i1125[24] )
  i1124.pivot = new pc.Vec2( i1125[25], i1125[26] )
  i1124.textureRectOffset = new pc.Vec2( i1125[27], i1125[28] )
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1127 = data
  i1126.name = i1127[0]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.wrapMode = i1129[1]
  i1128.isLooping = !!i1129[2]
  i1128.length = i1129[3]
  var i1131 = i1129[4]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1131[i + 0]) );
  }
  i1128.curves = i1130
  var i1133 = i1129[5]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1133[i + 0]) );
  }
  i1128.events = i1132
  i1128.halfPrecision = !!i1129[6]
  i1128._frameRate = i1129[7]
  i1128.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1129[8], i1128.localBounds)
  i1128.hasMuscleCurves = !!i1129[9]
  var i1135 = i1129[10]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1128.clipMuscleConstant = i1134
  i1128.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1129[11], i1128.clipBindingConstant)
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1139 = data
  i1138.path = i1139[0]
  i1138.hash = i1139[1]
  i1138.componentType = i1139[2]
  i1138.property = i1139[3]
  i1138.keys = i1139[4]
  var i1141 = i1139[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1141[i + 0]) );
  }
  i1138.objectReferenceKeys = i1140
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1145 = data
  i1144.time = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'value')
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1149 = data
  i1148.functionName = i1149[0]
  i1148.floatParameter = i1149[1]
  i1148.intParameter = i1149[2]
  i1148.stringParameter = i1149[3]
  request.r(i1149[4], i1149[5], 0, i1148, 'objectReferenceParameter')
  i1148.time = i1149[6]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1151 = data
  i1150.center = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.extends = new pc.Vec3( i1151[3], i1151[4], i1151[5] )
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1154.genericBindings = i1156
  var i1159 = i1155[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1154.pptrCurveMapping = i1158
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1161 = data
  i1160.name = i1161[0]
  var i1163 = i1161[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1163[i + 0]) );
  }
  i1160.layers = i1162
  var i1165 = i1161[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1165[i + 0]) );
  }
  i1160.parameters = i1164
  i1160.animationClips = i1161[3]
  i1160.avatarUnsupported = i1161[4]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.defaultWeight = i1169[1]
  i1168.blendingMode = i1169[2]
  i1168.avatarMask = i1169[3]
  i1168.syncedLayerIndex = i1169[4]
  i1168.syncedLayerAffectsTiming = !!i1169[5]
  i1168.syncedLayers = i1169[6]
  i1168.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1169[7], i1168.stateMachine)
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.path = i1171[2]
  var i1173 = i1171[3]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1173[i + 0]) );
  }
  i1170.states = i1172
  var i1175 = i1171[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1175[i + 0]) );
  }
  i1170.machines = i1174
  var i1177 = i1171[5]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1177[i + 0]) );
  }
  i1170.entryStateTransitions = i1176
  var i1179 = i1171[6]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1170.exitStateTransitions = i1178
  var i1181 = i1171[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1181[i + 0]) );
  }
  i1170.anyStateTransitions = i1180
  i1170.defaultStateId = i1171[8]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  i1184.cycleOffset = i1185[2]
  i1184.cycleOffsetParameter = i1185[3]
  i1184.cycleOffsetParameterActive = !!i1185[4]
  i1184.mirror = !!i1185[5]
  i1184.mirrorParameter = i1185[6]
  i1184.mirrorParameterActive = !!i1185[7]
  i1184.motionId = i1185[8]
  i1184.nameHash = i1185[9]
  i1184.fullPathHash = i1185[10]
  i1184.speed = i1185[11]
  i1184.speedParameter = i1185[12]
  i1184.speedParameterActive = !!i1185[13]
  i1184.tag = i1185[14]
  i1184.tagHash = i1185[15]
  i1184.writeDefaultValues = !!i1185[16]
  var i1187 = i1185[17]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1184.behaviours = i1186
  var i1189 = i1185[18]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1184.transitions = i1188
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1195 = data
  i1194.fullPath = i1195[0]
  i1194.canTransitionToSelf = !!i1195[1]
  i1194.duration = i1195[2]
  i1194.exitTime = i1195[3]
  i1194.hasExitTime = !!i1195[4]
  i1194.hasFixedDuration = !!i1195[5]
  i1194.interruptionSource = i1195[6]
  i1194.offset = i1195[7]
  i1194.orderedInterruption = !!i1195[8]
  i1194.destinationStateId = i1195[9]
  i1194.isExit = !!i1195[10]
  i1194.mute = !!i1195[11]
  i1194.solo = !!i1195[12]
  var i1197 = i1195[13]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1197[i + 0]) );
  }
  i1194.conditions = i1196
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1201 = data
  i1200.mode = i1201[0]
  i1200.parameter = i1201[1]
  i1200.threshold = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1207 = data
  i1206.destinationStateId = i1207[0]
  i1206.isExit = !!i1207[1]
  i1206.mute = !!i1207[2]
  i1206.solo = !!i1207[3]
  var i1209 = i1207[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1209[i + 0]) );
  }
  i1206.conditions = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1213 = data
  i1212.defaultBool = !!i1213[0]
  i1212.defaultFloat = i1213[1]
  i1212.defaultInt = i1213[2]
  i1212.name = i1213[3]
  i1212.nameHash = i1213[4]
  i1212.type = i1213[5]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1215 = data
  i1214.name = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, '_runtimeAnimatorController')
  var i1217 = i1215[3]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1214._originalAnimationClips = i1216
  var i1219 = i1215[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 2, i1218, '')
  }
  i1214._overrideAnimationClips = i1218
  var i1221 = i1215[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1214._animationClips = i1220
  var i1223 = i1215[6]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('UnityEngine.AnimationClipPair', i1223[i + 0]) );
  }
  i1214._animationClipPairs = i1222
  return i1214
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'originalClip')
  request.r(i1229[2], i1229[3], 0, i1228, 'overrideClip')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.bytes64 = i1231[1]
  i1230.data = i1231[2]
  return i1230
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1233 = data
  i1232.normalStyle = i1233[0]
  i1232.normalSpacingOffset = i1233[1]
  i1232.boldStyle = i1233[2]
  i1232.boldSpacing = i1233[3]
  i1232.italicStyle = i1233[4]
  i1232.tabSize = i1233[5]
  request.r(i1233[6], i1233[7], 0, i1232, 'atlas')
  i1232.m_SourceFontFileGUID = i1233[8]
  i1232.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1233[9], i1232.m_CreationSettings)
  request.r(i1233[10], i1233[11], 0, i1232, 'm_SourceFontFile')
  i1232.m_SourceFontFilePath = i1233[12]
  i1232.m_AtlasPopulationMode = i1233[13]
  i1232.InternalDynamicOS = !!i1233[14]
  var i1235 = i1233[15]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.Glyph', i1235[i + 0]));
  }
  i1232.m_GlyphTable = i1234
  var i1237 = i1233[16]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Character', i1237[i + 0]));
  }
  i1232.m_CharacterTable = i1236
  var i1239 = i1233[17]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1232.m_AtlasTextures = i1238
  i1232.m_AtlasTextureIndex = i1233[18]
  i1232.m_IsMultiAtlasTexturesEnabled = !!i1233[19]
  i1232.m_GetFontFeatures = !!i1233[20]
  i1232.m_ClearDynamicDataOnBuild = !!i1233[21]
  i1232.m_AtlasWidth = i1233[22]
  i1232.m_AtlasHeight = i1233[23]
  i1232.m_AtlasPadding = i1233[24]
  i1232.m_AtlasRenderMode = i1233[25]
  var i1241 = i1233[26]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('UnityEngine.TextCore.GlyphRect', i1241[i + 0]));
  }
  i1232.m_UsedGlyphRects = i1240
  var i1243 = i1233[27]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.GlyphRect', i1243[i + 0]));
  }
  i1232.m_FreeGlyphRects = i1242
  i1232.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1233[28], i1232.m_FontFeatureTable)
  i1232.m_ShouldReimportFontFeatures = !!i1233[29]
  var i1245 = i1233[30]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1232.m_FallbackFontAssetTable = i1244
  var i1247 = i1233[31]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1232.m_FontWeightTable = i1246
  var i1249 = i1233[32]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('TMPro.TMP_FontWeightPair', i1249[i + 0]) );
  }
  i1232.fontWeights = i1248
  i1232.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1233[33], i1232.m_fontInfo)
  var i1251 = i1233[34]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_Glyph', i1251[i + 0]));
  }
  i1232.m_glyphInfoList = i1250
  i1232.m_KerningTable = request.d('TMPro.KerningTable', i1233[35], i1232.m_KerningTable)
  var i1253 = i1233[36]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1232.fallbackFontAssets = i1252
  i1232.m_Version = i1233[37]
  i1232.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1233[38], i1232.m_FaceInfo)
  request.r(i1233[39], i1233[40], 0, i1232, 'm_Material')
  return i1232
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1255 = data
  i1254.sourceFontFileName = i1255[0]
  i1254.sourceFontFileGUID = i1255[1]
  i1254.faceIndex = i1255[2]
  i1254.pointSizeSamplingMode = i1255[3]
  i1254.pointSize = i1255[4]
  i1254.padding = i1255[5]
  i1254.paddingMode = i1255[6]
  i1254.packingMode = i1255[7]
  i1254.atlasWidth = i1255[8]
  i1254.atlasHeight = i1255[9]
  i1254.characterSetSelectionMode = i1255[10]
  i1254.characterSequence = i1255[11]
  i1254.referencedFontAssetGUID = i1255[12]
  i1254.referencedTextAssetGUID = i1255[13]
  i1254.fontStyle = i1255[14]
  i1254.fontStyleModifier = i1255[15]
  i1254.renderMode = i1255[16]
  i1254.includeFontFeatures = !!i1255[17]
  return i1254
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1259 = data
  i1258.m_Index = i1259[0]
  i1258.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1259[1], i1258.m_Metrics)
  i1258.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1259[2], i1258.m_GlyphRect)
  i1258.m_Scale = i1259[3]
  i1258.m_AtlasIndex = i1259[4]
  i1258.m_ClassDefinitionType = i1259[5]
  return i1258
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1261 = data
  i1260.m_Width = i1261[0]
  i1260.m_Height = i1261[1]
  i1260.m_HorizontalBearingX = i1261[2]
  i1260.m_HorizontalBearingY = i1261[3]
  i1260.m_HorizontalAdvance = i1261[4]
  return i1260
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1263 = data
  i1262.m_X = i1263[0]
  i1262.m_Y = i1263[1]
  i1262.m_Width = i1263[2]
  i1262.m_Height = i1263[3]
  return i1262
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Character' )
  var i1267 = data
  i1266.m_ElementType = i1267[0]
  i1266.m_Unicode = i1267[1]
  i1266.m_GlyphIndex = i1267[2]
  i1266.m_Scale = i1267[3]
  return i1266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MultipleSubstitutionRecord', i1275[i + 0]));
  }
  i1272.m_MultipleSubstitutionRecords = i1274
  var i1277 = i1273[1]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.LigatureSubstitutionRecord', i1277[i + 0]));
  }
  i1272.m_LigatureSubstitutionRecords = i1276
  var i1279 = i1273[2]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1279[i + 0]));
  }
  i1272.m_GlyphPairAdjustmentRecords = i1278
  var i1281 = i1273[3]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1281[i + 0]));
  }
  i1272.m_MarkToBaseAdjustmentRecords = i1280
  var i1283 = i1273[4]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1283[i + 0]));
  }
  i1272.m_MarkToMarkAdjustmentRecords = i1282
  return i1272
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1287 = data
  i1286.m_TargetGlyphID = i1287[0]
  i1286.m_SubstituteGlyphIDs = i1287[1]
  return i1286
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1291 = data
  i1290.m_ComponentGlyphIDs = i1291[0]
  i1290.m_LigatureGlyphID = i1291[1]
  return i1290
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1295 = data
  i1294.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[0], i1294.m_FirstAdjustmentRecord)
  i1294.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[1], i1294.m_SecondAdjustmentRecord)
  i1294.m_FeatureLookupFlags = i1295[2]
  return i1294
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1299 = data
  i1298.m_BaseGlyphID = i1299[0]
  i1298.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1299[1], i1298.m_BaseGlyphAnchorPoint)
  i1298.m_MarkGlyphID = i1299[2]
  i1298.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1299[3], i1298.m_MarkPositionAdjustment)
  return i1298
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1303 = data
  i1302.m_BaseMarkGlyphID = i1303[0]
  i1302.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1303[1], i1302.m_BaseMarkGlyphAnchorPoint)
  i1302.m_CombiningMarkGlyphID = i1303[2]
  i1302.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1303[3], i1302.m_CombiningMarkPositionAdjustment)
  return i1302
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'regularTypeface')
  request.r(i1309[2], i1309[3], 0, i1308, 'italicTypeface')
  return i1308
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1311 = data
  i1310.Name = i1311[0]
  i1310.PointSize = i1311[1]
  i1310.Scale = i1311[2]
  i1310.CharacterCount = i1311[3]
  i1310.LineHeight = i1311[4]
  i1310.Baseline = i1311[5]
  i1310.Ascender = i1311[6]
  i1310.CapHeight = i1311[7]
  i1310.Descender = i1311[8]
  i1310.CenterLine = i1311[9]
  i1310.SuperscriptOffset = i1311[10]
  i1310.SubscriptOffset = i1311[11]
  i1310.SubSize = i1311[12]
  i1310.Underline = i1311[13]
  i1310.UnderlineThickness = i1311[14]
  i1310.strikethrough = i1311[15]
  i1310.strikethroughThickness = i1311[16]
  i1310.TabWidth = i1311[17]
  i1310.Padding = i1311[18]
  i1310.AtlasWidth = i1311[19]
  i1310.AtlasHeight = i1311[20]
  return i1310
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.x = i1315[1]
  i1314.y = i1315[2]
  i1314.width = i1315[3]
  i1314.height = i1315[4]
  i1314.xOffset = i1315[5]
  i1314.yOffset = i1315[6]
  i1314.xAdvance = i1315[7]
  i1314.scale = i1315[8]
  return i1314
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.KerningTable' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.KerningPair', i1319[i + 0]));
  }
  i1316.kerningPairs = i1318
  return i1316
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.KerningPair' )
  var i1323 = data
  i1322.xOffset = i1323[0]
  i1322.m_FirstGlyph = i1323[1]
  i1322.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[2], i1322.m_FirstGlyphAdjustments)
  i1322.m_SecondGlyph = i1323[3]
  i1322.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[4], i1322.m_SecondGlyphAdjustments)
  i1322.m_IgnoreSpacingAdjustments = !!i1323[5]
  return i1322
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1325 = data
  i1324.m_FaceIndex = i1325[0]
  i1324.m_FamilyName = i1325[1]
  i1324.m_StyleName = i1325[2]
  i1324.m_PointSize = i1325[3]
  i1324.m_Scale = i1325[4]
  i1324.m_UnitsPerEM = i1325[5]
  i1324.m_LineHeight = i1325[6]
  i1324.m_AscentLine = i1325[7]
  i1324.m_CapLine = i1325[8]
  i1324.m_MeanLine = i1325[9]
  i1324.m_Baseline = i1325[10]
  i1324.m_DescentLine = i1325[11]
  i1324.m_SuperscriptOffset = i1325[12]
  i1324.m_SuperscriptSize = i1325[13]
  i1324.m_SubscriptOffset = i1325[14]
  i1324.m_SubscriptSize = i1325[15]
  i1324.m_UnderlineOffset = i1325[16]
  i1324.m_UnderlineThickness = i1325[17]
  i1324.m_StrikethroughOffset = i1325[18]
  i1324.m_StrikethroughThickness = i1325[19]
  i1324.m_TabWidth = i1325[20]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1327 = data
  i1326.useSafeMode = !!i1327[0]
  i1326.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1327[1], i1326.safeModeOptions)
  i1326.timeScale = i1327[2]
  i1326.unscaledTimeScale = i1327[3]
  i1326.useSmoothDeltaTime = !!i1327[4]
  i1326.maxSmoothUnscaledTime = i1327[5]
  i1326.rewindCallbackMode = i1327[6]
  i1326.showUnityEditorReport = !!i1327[7]
  i1326.logBehaviour = i1327[8]
  i1326.drawGizmos = !!i1327[9]
  i1326.defaultRecyclable = !!i1327[10]
  i1326.defaultAutoPlay = i1327[11]
  i1326.defaultUpdateType = i1327[12]
  i1326.defaultTimeScaleIndependent = !!i1327[13]
  i1326.defaultEaseType = i1327[14]
  i1326.defaultEaseOvershootOrAmplitude = i1327[15]
  i1326.defaultEasePeriod = i1327[16]
  i1326.defaultAutoKill = !!i1327[17]
  i1326.defaultLoopType = i1327[18]
  i1326.debugMode = !!i1327[19]
  i1326.debugStoreTargetId = !!i1327[20]
  i1326.showPreviewPanel = !!i1327[21]
  i1326.storeSettingsLocation = i1327[22]
  i1326.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1327[23], i1326.modules)
  i1326.createASMDEF = !!i1327[24]
  i1326.showPlayingTweens = !!i1327[25]
  i1326.showPausedTweens = !!i1327[26]
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1329 = data
  i1328.logBehaviour = i1329[0]
  i1328.nestedTweenFailureBehaviour = i1329[1]
  return i1328
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1331 = data
  i1330.showPanel = !!i1331[0]
  i1330.audioEnabled = !!i1331[1]
  i1330.physicsEnabled = !!i1331[2]
  i1330.physics2DEnabled = !!i1331[3]
  i1330.spriteEnabled = !!i1331[4]
  i1330.uiEnabled = !!i1331[5]
  i1330.textMeshProEnabled = !!i1331[6]
  i1330.tk2DEnabled = !!i1331[7]
  i1330.deAudioEnabled = !!i1331[8]
  i1330.deUnityExtendedEnabled = !!i1331[9]
  i1330.epoOutlineEnabled = !!i1331[10]
  return i1330
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_Settings' )
  var i1333 = data
  i1332.assetVersion = i1333[0]
  i1332.m_TextWrappingMode = i1333[1]
  i1332.m_enableKerning = !!i1333[2]
  var i1335 = i1333[3]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(i1335[i + 0]);
  }
  i1332.m_ActiveFontFeatures = i1334
  i1332.m_enableExtraPadding = !!i1333[4]
  i1332.m_enableTintAllSprites = !!i1333[5]
  i1332.m_enableParseEscapeCharacters = !!i1333[6]
  i1332.m_EnableRaycastTarget = !!i1333[7]
  i1332.m_GetFontFeaturesAtRuntime = !!i1333[8]
  i1332.m_missingGlyphCharacter = i1333[9]
  i1332.m_ClearDynamicDataOnBuild = !!i1333[10]
  i1332.m_warningsDisabled = !!i1333[11]
  request.r(i1333[12], i1333[13], 0, i1332, 'm_defaultFontAsset')
  i1332.m_defaultFontAssetPath = i1333[14]
  i1332.m_defaultFontSize = i1333[15]
  i1332.m_defaultAutoSizeMinRatio = i1333[16]
  i1332.m_defaultAutoSizeMaxRatio = i1333[17]
  i1332.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1333[18], i1333[19] )
  i1332.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1333[20], i1333[21] )
  i1332.m_autoSizeTextContainer = !!i1333[22]
  i1332.m_IsTextObjectScaleStatic = !!i1333[23]
  var i1337 = i1333[24]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1332.m_fallbackFontAssets = i1336
  i1332.m_matchMaterialPreset = !!i1333[25]
  i1332.m_HideSubTextObjects = !!i1333[26]
  request.r(i1333[27], i1333[28], 0, i1332, 'm_defaultSpriteAsset')
  i1332.m_defaultSpriteAssetPath = i1333[29]
  i1332.m_enableEmojiSupport = !!i1333[30]
  i1332.m_MissingCharacterSpriteUnicode = i1333[31]
  var i1339 = i1333[32]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1332.m_EmojiFallbackTextAssets = i1338
  i1332.m_defaultColorGradientPresetsPath = i1333[33]
  request.r(i1333[34], i1333[35], 0, i1332, 'm_defaultStyleSheet')
  i1332.m_StyleSheetsResourcePath = i1333[36]
  request.r(i1333[37], i1333[38], 0, i1332, 'm_leadingCharacters')
  request.r(i1333[39], i1333[40], 0, i1332, 'm_followingCharacters')
  i1332.m_UseModernHangulLineBreakingRules = !!i1333[41]
  return i1332
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'spriteSheet')
  var i1345 = i1343[2]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_Sprite', i1345[i + 0]));
  }
  i1342.spriteInfoList = i1344
  var i1347 = i1343[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1342.fallbackSpriteAssets = i1346
  var i1349 = i1343[4]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.TMP_SpriteCharacter', i1349[i + 0]));
  }
  i1342.m_SpriteCharacterTable = i1348
  var i1351 = i1343[5]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_SpriteGlyph', i1351[i + 0]));
  }
  i1342.m_GlyphTable = i1350
  i1342.m_Version = i1343[6]
  i1342.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1343[7], i1342.m_FaceInfo)
  request.r(i1343[8], i1343[9], 0, i1342, 'm_Material')
  return i1342
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.hashCode = i1355[1]
  i1354.unicode = i1355[2]
  i1354.pivot = new pc.Vec2( i1355[3], i1355[4] )
  request.r(i1355[5], i1355[6], 0, i1354, 'sprite')
  i1354.id = i1355[7]
  i1354.x = i1355[8]
  i1354.y = i1355[9]
  i1354.width = i1355[10]
  i1354.height = i1355[11]
  i1354.xOffset = i1355[12]
  i1354.yOffset = i1355[13]
  i1354.xAdvance = i1355[14]
  i1354.scale = i1355[15]
  return i1354
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1361 = data
  i1360.m_Name = i1361[0]
  i1360.m_ElementType = i1361[1]
  i1360.m_Unicode = i1361[2]
  i1360.m_GlyphIndex = i1361[3]
  i1360.m_Scale = i1361[4]
  return i1360
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'sprite')
  i1364.m_Index = i1365[2]
  i1364.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1365[3], i1364.m_Metrics)
  i1364.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1365[4], i1364.m_GlyphRect)
  i1364.m_Scale = i1365[5]
  i1364.m_AtlasIndex = i1365[6]
  i1364.m_ClassDefinitionType = i1365[7]
  return i1364
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_Style', i1369[i + 0]));
  }
  i1366.m_StyleList = i1368
  return i1366
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_Style' )
  var i1373 = data
  i1372.m_Name = i1373[0]
  i1372.m_HashCode = i1373[1]
  i1372.m_OpeningDefinition = i1373[2]
  i1372.m_ClosingDefinition = i1373[3]
  i1372.m_OpeningTagArray = i1373[4]
  i1372.m_ClosingTagArray = i1373[5]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1377[i + 0]) );
  }
  i1374.files = i1376
  i1374.componentToPrefabIds = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1381 = data
  i1380.path = i1381[0]
  request.r(i1381[1], i1381[2], 0, i1380, 'unityObject')
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1385[i + 0]) );
  }
  i1382.scriptsExecutionOrder = i1384
  var i1387 = i1383[1]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1387[i + 0]) );
  }
  i1382.sortingLayers = i1386
  var i1389 = i1383[2]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1389[i + 0]) );
  }
  i1382.cullingLayers = i1388
  i1382.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1383[3], i1382.timeSettings)
  i1382.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1383[4], i1382.physicsSettings)
  i1382.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1383[5], i1382.physics2DSettings)
  i1382.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1383[6], i1382.qualitySettings)
  i1382.enableRealtimeShadows = !!i1383[7]
  i1382.enableAutoInstancing = !!i1383[8]
  i1382.enableStaticBatching = !!i1383[9]
  i1382.enableDynamicBatching = !!i1383[10]
  i1382.usePreservativeDynamicBatching = !!i1383[11]
  i1382.lightmapEncodingQuality = i1383[12]
  i1382.desiredColorSpace = i1383[13]
  var i1391 = i1383[14]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1382.allTags = i1390
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.value = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  i1398.value = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1403 = data
  i1402.id = i1403[0]
  i1402.name = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1405 = data
  i1404.fixedDeltaTime = i1405[0]
  i1404.maximumDeltaTime = i1405[1]
  i1404.timeScale = i1405[2]
  i1404.maximumParticleTimestep = i1405[3]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1407 = data
  i1406.gravity = new pc.Vec3( i1407[0], i1407[1], i1407[2] )
  i1406.defaultSolverIterations = i1407[3]
  i1406.bounceThreshold = i1407[4]
  i1406.autoSyncTransforms = !!i1407[5]
  i1406.autoSimulation = !!i1407[6]
  var i1409 = i1407[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1409[i + 0]) );
  }
  i1406.collisionMatrix = i1408
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.layerId = i1413[1]
  i1412.otherLayerId = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'material')
  i1414.gravity = new pc.Vec2( i1415[2], i1415[3] )
  i1414.positionIterations = i1415[4]
  i1414.velocityIterations = i1415[5]
  i1414.velocityThreshold = i1415[6]
  i1414.maxLinearCorrection = i1415[7]
  i1414.maxAngularCorrection = i1415[8]
  i1414.maxTranslationSpeed = i1415[9]
  i1414.maxRotationSpeed = i1415[10]
  i1414.baumgarteScale = i1415[11]
  i1414.baumgarteTOIScale = i1415[12]
  i1414.timeToSleep = i1415[13]
  i1414.linearSleepTolerance = i1415[14]
  i1414.angularSleepTolerance = i1415[15]
  i1414.defaultContactOffset = i1415[16]
  i1414.autoSimulation = !!i1415[17]
  i1414.queriesHitTriggers = !!i1415[18]
  i1414.queriesStartInColliders = !!i1415[19]
  i1414.callbacksOnDisable = !!i1415[20]
  i1414.reuseCollisionCallbacks = !!i1415[21]
  i1414.autoSyncTransforms = !!i1415[22]
  var i1417 = i1415[23]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1423 = data
  var i1425 = i1423[0]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1425[i + 0]) );
  }
  i1422.qualityLevels = i1424
  var i1427 = i1423[1]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1422.names = i1426
  i1422.shadows = i1423[2]
  i1422.anisotropicFiltering = i1423[3]
  i1422.antiAliasing = i1423[4]
  i1422.lodBias = i1423[5]
  i1422.shadowCascades = i1423[6]
  i1422.shadowDistance = i1423[7]
  i1422.shadowmaskMode = i1423[8]
  i1422.shadowProjection = i1423[9]
  i1422.shadowResolution = i1423[10]
  i1422.softParticles = !!i1423[11]
  i1422.softVegetation = !!i1423[12]
  i1422.activeColorSpace = i1423[13]
  i1422.desiredColorSpace = i1423[14]
  i1422.masterTextureLimit = i1423[15]
  i1422.maxQueuedFrames = i1423[16]
  i1422.particleRaycastBudget = i1423[17]
  i1422.pixelLightCount = i1423[18]
  i1422.realtimeReflectionProbes = !!i1423[19]
  i1422.shadowCascade2Split = i1423[20]
  i1422.shadowCascade4Split = new pc.Vec3( i1423[21], i1423[22], i1423[23] )
  i1422.streamingMipmapsActive = !!i1423[24]
  i1422.vSyncCount = i1423[25]
  i1422.asyncUploadBufferSize = i1423[26]
  i1422.asyncUploadTimeSlice = i1423[27]
  i1422.billboardsFaceCameraPosition = !!i1423[28]
  i1422.shadowNearPlaneOffset = i1423[29]
  i1422.streamingMipmapsMemoryBudget = i1423[30]
  i1422.maximumLODLevel = i1423[31]
  i1422.streamingMipmapsAddAllCameras = !!i1423[32]
  i1422.streamingMipmapsMaxLevelReduction = i1423[33]
  i1422.streamingMipmapsRenderersPerFrame = i1423[34]
  i1422.resolutionScalingFixedDPIFactor = i1423[35]
  i1422.streamingMipmapsMaxFileIORequests = i1423[36]
  i1422.currentQualityLevel = i1423[37]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1431 = data
  i1430.name = i1431[0]
  var i1433 = i1431[1]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1433[i + 0]) );
  }
  i1430.tos = i1432
  var i1435 = i1431[2]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.constant = i1434
  i1430.isValid = !!i1431[3]
  i1430.isHuman = !!i1431[4]
  i1430.hasRootMotion = !!i1431[5]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1439 = data
  i1438.hash = i1439[0]
  i1438.path = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1443 = data
  i1442.weight = i1443[0]
  i1442.vertices = i1443[1]
  i1442.normals = i1443[2]
  i1442.tangents = i1443[3]
  return i1442
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1445 = data
  request.r(i1445[0], i1445[1], 0, i1444, 'm_ObjectArgument')
  i1444.m_ObjectArgumentAssemblyTypeName = i1445[2]
  i1444.m_IntArgument = i1445[3]
  i1444.m_FloatArgument = i1445[4]
  i1444.m_StringArgument = i1445[5]
  i1444.m_BoolArgument = !!i1445[6]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1447 = data
  i1446.m_GlyphIndex = i1447[0]
  i1446.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1447[1], i1446.m_GlyphValueRecord)
  return i1446
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1449 = data
  i1448.m_XCoordinate = i1449[0]
  i1448.m_YCoordinate = i1449[1]
  return i1448
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1451 = data
  i1450.m_XPositionAdjustment = i1451[0]
  i1450.m_YPositionAdjustment = i1451[1]
  return i1450
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1453 = data
  i1452.xPlacement = i1453[0]
  i1452.yPlacement = i1453[1]
  i1452.xAdvance = i1453[2]
  i1452.yAdvance = i1453[3]
  return i1452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1455 = data
  i1454.m_XPlacement = i1455[0]
  i1454.m_YPlacement = i1455[1]
  i1454.m_XAdvance = i1455[2]
  i1454.m_YAdvance = i1455[3]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[51],"77":[55],"78":[28],"79":[28],"80":[28],"81":[28],"82":[28],"83":[28],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[55],"99":[36],"100":[101],"102":[101],"7":[6],"11":[8],"103":[6],"104":[36,6],"19":[6,13],"105":[6],"106":[13,6],"107":[36],"108":[13,6],"109":[6],"110":[111],"112":[111],"113":[111],"114":[6],"115":[6],"9":[7],"14":[13,6],"26":[6],"8":[7],"116":[6],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"18":[6],"123":[6],"124":[13,6],"125":[6],"126":[6],"127":[6],"128":[6],"129":[13,6],"130":[6],"131":[4],"132":[4],"5":[4],"133":[4],"134":[55],"135":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","SelectPanel","UnityEngine.UI.AspectRatioFitter","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.Light","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "22.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V07_HoaiTT_HuyNQ";

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

Deserializers.buildID = "83203ed6-771a-4fda-9720-b1d2d6083062";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

