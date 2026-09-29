var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointSpring' )
  var i737 = data
  i736.spring = i737[0]
  i736.damper = i737[1]
  i736.targetPosition = i737[2]
  return i736
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointMotor' )
  var i739 = data
  i738.m_TargetVelocity = i739[0]
  i738.m_Force = i739[1]
  i738.m_FreeSpin = i739[2]
  return i738
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointLimits' )
  var i741 = data
  i740.m_Min = i741[0]
  i740.m_Max = i741[1]
  i740.m_Bounciness = i741[2]
  i740.m_BounceMinVelocity = i741[3]
  i740.m_ContactDistance = i741[4]
  i740.minBounce = i741[5]
  i740.maxBounce = i741[6]
  return i740
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointDrive' )
  var i743 = data
  i742.m_PositionSpring = i743[0]
  i742.m_PositionDamper = i743[1]
  i742.m_MaximumForce = i743[2]
  i742.m_UseAcceleration = i743[3]
  return i742
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i745 = data
  i744.m_Spring = i745[0]
  i744.m_Damper = i745[1]
  return i744
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i747 = data
  i746.m_Limit = i747[0]
  i746.m_Bounciness = i747[1]
  i746.m_ContactDistance = i747[2]
  return i746
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i749 = data
  i748.m_ExtremumSlip = i749[0]
  i748.m_ExtremumValue = i749[1]
  i748.m_AsymptoteSlip = i749[2]
  i748.m_AsymptoteValue = i749[3]
  i748.m_Stiffness = i749[4]
  return i748
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i751 = data
  i750.m_LowerAngle = i751[0]
  i750.m_UpperAngle = i751[1]
  return i750
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i753 = data
  i752.m_MotorSpeed = i753[0]
  i752.m_MaximumMotorTorque = i753[1]
  return i752
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i755 = data
  i754.m_DampingRatio = i755[0]
  i754.m_Frequency = i755[1]
  i754.m_Angle = i755[2]
  return i754
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i757 = data
  i756.m_LowerTranslation = i757[0]
  i756.m_UpperTranslation = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i759 = data
  i758.name = i759[0]
  i758.width = i759[1]
  i758.height = i759[2]
  i758.mipmapCount = i759[3]
  i758.anisoLevel = i759[4]
  i758.filterMode = i759[5]
  i758.hdr = !!i759[6]
  i758.format = i759[7]
  i758.wrapMode = i759[8]
  i758.alphaIsTransparency = !!i759[9]
  i758.alphaSource = i759[10]
  i758.graphicsFormat = i759[11]
  i758.sRGBTexture = !!i759[12]
  i758.desiredColorSpace = i759[13]
  i758.wrapU = i759[14]
  i758.wrapV = i759[15]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i760 = root || new pc.UnityMaterial()
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'shader')
  i760.renderQueue = i761[3]
  i760.enableInstancing = !!i761[4]
  var i763 = i761[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i763[i + 0]) );
  }
  i760.floatParameters = i762
  var i765 = i761[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i765[i + 0]) );
  }
  i760.colorParameters = i764
  var i767 = i761[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i767[i + 0]) );
  }
  i760.vectorParameters = i766
  var i769 = i761[8]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i769[i + 0]) );
  }
  i760.textureParameters = i768
  var i771 = i761[9]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i771[i + 0]) );
  }
  i760.materialFlags = i770
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i779 = data
  i778.name = i779[0]
  i778.value = new pc.Color(i779[1], i779[2], i779[3], i779[4])
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i783 = data
  i782.name = i783[0]
  i782.value = new pc.Vec4( i783[1], i783[2], i783[3], i783[4] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'value')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i791 = data
  i790.name = i791[0]
  i790.enabled = !!i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i793 = data
  i792.name = i793[0]
  i792.halfPrecision = !!i793[1]
  i792.useSimplification = !!i793[2]
  i792.useUInt32IndexFormat = !!i793[3]
  i792.vertexCount = i793[4]
  i792.aabb = i793[5]
  var i795 = i793[6]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( !!i795[i + 0] );
  }
  i792.streams = i794
  i792.vertices = i793[7]
  var i797 = i793[8]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i797[i + 0]) );
  }
  i792.subMeshes = i796
  var i799 = i793[9]
  var i798 = []
  for(var i = 0; i < i799.length; i += 16) {
    i798.push( new pc.Mat4().setData(i799[i + 0], i799[i + 1], i799[i + 2], i799[i + 3],  i799[i + 4], i799[i + 5], i799[i + 6], i799[i + 7],  i799[i + 8], i799[i + 9], i799[i + 10], i799[i + 11],  i799[i + 12], i799[i + 13], i799[i + 14], i799[i + 15]) );
  }
  i792.bindposes = i798
  var i801 = i793[10]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i801[i + 0]) );
  }
  i792.blendShapes = i800
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i807 = data
  i806.triangles = i807[0]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i813 = data
  i812.name = i813[0]
  var i815 = i813[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i815[i + 0]) );
  }
  i812.frames = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i817 = data
  i816.name = i817[0]
  i816.atlasId = i817[1]
  i816.mipmapCount = i817[2]
  i816.hdr = !!i817[3]
  i816.size = i817[4]
  i816.anisoLevel = i817[5]
  i816.filterMode = i817[6]
  var i819 = i817[7]
  var i818 = []
  for(var i = 0; i < i819.length; i += 4) {
    i818.push( UnityEngine.Rect.MinMaxRect(i819[i + 0], i819[i + 1], i819[i + 2], i819[i + 3]) );
  }
  i816.rects = i818
  i816.wrapU = i817[8]
  i816.wrapV = i817[9]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i823 = data
  i822.name = i823[0]
  i822.index = i823[1]
  i822.startup = !!i823[2]
  return i822
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_FirstSelected')
  i824.m_sendNavigationEvents = !!i825[2]
  i824.m_DragThreshold = i825[3]
  return i824
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i827 = data
  i826.m_HorizontalAxis = i827[0]
  i826.m_VerticalAxis = i827[1]
  i826.m_SubmitButton = i827[2]
  i826.m_CancelButton = i827[3]
  i826.m_InputActionsPerSecond = i827[4]
  i826.m_RepeatDelay = i827[5]
  i826.m_ForceModuleActive = !!i827[6]
  i826.m_SendPointerHoverToParent = !!i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i829 = data
  i828.name = i829[0]
  i828.tagId = i829[1]
  i828.enabled = !!i829[2]
  i828.isStatic = !!i829[3]
  i828.layer = i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i831 = data
  i830.pivot = new pc.Vec2( i831[0], i831[1] )
  i830.anchorMin = new pc.Vec2( i831[2], i831[3] )
  i830.anchorMax = new pc.Vec2( i831[4], i831[5] )
  i830.sizeDelta = new pc.Vec2( i831[6], i831[7] )
  i830.anchoredPosition3D = new pc.Vec3( i831[8], i831[9], i831[10] )
  i830.rotation = new pc.Quat(i831[11], i831[12], i831[13], i831[14])
  i830.scale = new pc.Vec3( i831[15], i831[16], i831[17] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i833 = data
  i832.planeDistance = i833[0]
  i832.referencePixelsPerUnit = i833[1]
  i832.isFallbackOverlay = !!i833[2]
  i832.renderMode = i833[3]
  i832.renderOrder = i833[4]
  i832.sortingLayerName = i833[5]
  i832.sortingOrder = i833[6]
  i832.scaleFactor = i833[7]
  request.r(i833[8], i833[9], 0, i832, 'worldCamera')
  i832.overrideSorting = !!i833[10]
  i832.pixelPerfect = !!i833[11]
  i832.targetDisplay = i833[12]
  i832.overridePixelPerfect = !!i833[13]
  i832.enabled = !!i833[14]
  return i832
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i835 = data
  i834.m_UiScaleMode = i835[0]
  i834.m_ReferencePixelsPerUnit = i835[1]
  i834.m_ScaleFactor = i835[2]
  i834.m_ReferenceResolution = new pc.Vec2( i835[3], i835[4] )
  i834.m_ScreenMatchMode = i835[5]
  i834.m_MatchWidthOrHeight = i835[6]
  i834.m_PhysicalUnit = i835[7]
  i834.m_FallbackScreenDPI = i835[8]
  i834.m_DefaultSpriteDPI = i835[9]
  i834.m_DynamicPixelsPerUnit = i835[10]
  i834.m_PresetInfoIsWorld = !!i835[11]
  return i834
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i837 = data
  i836.m_IgnoreReversedGraphics = !!i837[0]
  i836.m_BlockingObjects = i837[1]
  i836.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i837[2] )
  return i836
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i838 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i839 = data
  i838._referenceResolution = new pc.Vec2( i839[0], i839[1] )
  i838._portraitMatch = i839[2]
  i838._landscapeMatch = i839[3]
  i838._squareMatch = i839[4]
  i838._portraitAspectThreshold = i839[5]
  i838._landscapeAspectThreshold = i839[6]
  i838._aspectEpsilon = i839[7]
  return i838
}

Deserializers["Joystick"] = function (request, data, root) {
  var i840 = root || request.c( 'Joystick' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'background')
  request.r(i841[2], i841[3], 0, i840, 'joy')
  i840.deadZone = i841[4]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i843 = data
  i842.cullTransparentMesh = !!i843[0]
  return i842
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Image' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_Sprite')
  i844.m_Type = i845[2]
  i844.m_PreserveAspect = !!i845[3]
  i844.m_FillCenter = !!i845[4]
  i844.m_FillMethod = i845[5]
  i844.m_FillAmount = i845[6]
  i844.m_FillClockwise = !!i845[7]
  i844.m_FillOrigin = i845[8]
  i844.m_UseSpriteMesh = !!i845[9]
  i844.m_PixelsPerUnitMultiplier = i845[10]
  request.r(i845[11], i845[12], 0, i844, 'm_Material')
  i844.m_Maskable = !!i845[13]
  i844.m_Color = new pc.Color(i845[14], i845[15], i845[16], i845[17])
  i844.m_RaycastTarget = !!i845[18]
  i844.m_RaycastPadding = new pc.Vec4( i845[19], i845[20], i845[21], i845[22] )
  return i844
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Button' )
  var i847 = data
  i846.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i847[0], i846.m_OnClick)
  i846.m_Navigation = request.d('UnityEngine.UI.Navigation', i847[1], i846.m_Navigation)
  i846.m_Transition = i847[2]
  i846.m_Colors = request.d('UnityEngine.UI.ColorBlock', i847[3], i846.m_Colors)
  i846.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i847[4], i846.m_SpriteState)
  i846.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i847[5], i846.m_AnimationTriggers)
  i846.m_Interactable = !!i847[6]
  request.r(i847[7], i847[8], 0, i846, 'm_TargetGraphic')
  return i846
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i849 = data
  i848.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i849[0], i848.m_PersistentCalls)
  return i848
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('UnityEngine.Events.PersistentCall', i853[i + 0]));
  }
  i850.m_Calls = i852
  return i850
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_Target')
  i856.m_TargetAssemblyTypeName = i857[2]
  i856.m_MethodName = i857[3]
  i856.m_Mode = i857[4]
  i856.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i857[5], i856.m_Arguments)
  i856.m_CallState = i857[6]
  return i856
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i859 = data
  i858.m_Mode = i859[0]
  i858.m_WrapAround = !!i859[1]
  request.r(i859[2], i859[3], 0, i858, 'm_SelectOnUp')
  request.r(i859[4], i859[5], 0, i858, 'm_SelectOnDown')
  request.r(i859[6], i859[7], 0, i858, 'm_SelectOnLeft')
  request.r(i859[8], i859[9], 0, i858, 'm_SelectOnRight')
  return i858
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i861 = data
  i860.m_NormalColor = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  i860.m_HighlightedColor = new pc.Color(i861[4], i861[5], i861[6], i861[7])
  i860.m_PressedColor = new pc.Color(i861[8], i861[9], i861[10], i861[11])
  i860.m_SelectedColor = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  i860.m_DisabledColor = new pc.Color(i861[16], i861[17], i861[18], i861[19])
  i860.m_ColorMultiplier = i861[20]
  i860.m_FadeDuration = i861[21]
  return i860
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_HighlightedSprite')
  request.r(i863[2], i863[3], 0, i862, 'm_PressedSprite')
  request.r(i863[4], i863[5], 0, i862, 'm_SelectedSprite')
  request.r(i863[6], i863[7], 0, i862, 'm_DisabledSprite')
  return i862
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i865 = data
  i864.m_NormalTrigger = i865[0]
  i864.m_HighlightedTrigger = i865[1]
  i864.m_PressedTrigger = i865[2]
  i864.m_SelectedTrigger = i865[3]
  i864.m_DisabledTrigger = i865[4]
  return i864
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i866 = root || request.c( 'JumpButton' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'button')
  return i866
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Mask' )
  var i869 = data
  i868.m_ShowMaskGraphic = !!i869[0]
  return i868
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i871 = data
  i870.m_hasFontAssetChanged = !!i871[0]
  request.r(i871[1], i871[2], 0, i870, 'm_baseMaterial')
  i870.m_maskOffset = new pc.Vec4( i871[3], i871[4], i871[5], i871[6] )
  i870.m_text = i871[7]
  i870.m_isRightToLeft = !!i871[8]
  request.r(i871[9], i871[10], 0, i870, 'm_fontAsset')
  request.r(i871[11], i871[12], 0, i870, 'm_sharedMaterial')
  var i873 = i871[13]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.m_fontSharedMaterials = i872
  request.r(i871[14], i871[15], 0, i870, 'm_fontMaterial')
  var i875 = i871[16]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.m_fontMaterials = i874
  i870.m_fontColor32 = UnityEngine.Color32.ConstructColor(i871[17], i871[18], i871[19], i871[20])
  i870.m_fontColor = new pc.Color(i871[21], i871[22], i871[23], i871[24])
  i870.m_enableVertexGradient = !!i871[25]
  i870.m_colorMode = i871[26]
  i870.m_fontColorGradient = request.d('TMPro.VertexGradient', i871[27], i870.m_fontColorGradient)
  request.r(i871[28], i871[29], 0, i870, 'm_fontColorGradientPreset')
  request.r(i871[30], i871[31], 0, i870, 'm_spriteAsset')
  i870.m_tintAllSprites = !!i871[32]
  request.r(i871[33], i871[34], 0, i870, 'm_StyleSheet')
  i870.m_TextStyleHashCode = i871[35]
  i870.m_overrideHtmlColors = !!i871[36]
  i870.m_faceColor = UnityEngine.Color32.ConstructColor(i871[37], i871[38], i871[39], i871[40])
  i870.m_fontSize = i871[41]
  i870.m_fontSizeBase = i871[42]
  i870.m_fontWeight = i871[43]
  i870.m_enableAutoSizing = !!i871[44]
  i870.m_fontSizeMin = i871[45]
  i870.m_fontSizeMax = i871[46]
  i870.m_fontStyle = i871[47]
  i870.m_HorizontalAlignment = i871[48]
  i870.m_VerticalAlignment = i871[49]
  i870.m_textAlignment = i871[50]
  i870.m_characterSpacing = i871[51]
  i870.m_wordSpacing = i871[52]
  i870.m_lineSpacing = i871[53]
  i870.m_lineSpacingMax = i871[54]
  i870.m_paragraphSpacing = i871[55]
  i870.m_charWidthMaxAdj = i871[56]
  i870.m_TextWrappingMode = i871[57]
  i870.m_wordWrappingRatios = i871[58]
  i870.m_overflowMode = i871[59]
  request.r(i871[60], i871[61], 0, i870, 'm_linkedTextComponent')
  request.r(i871[62], i871[63], 0, i870, 'parentLinkedComponent')
  i870.m_enableKerning = !!i871[64]
  var i877 = i871[65]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(i877[i + 0]);
  }
  i870.m_ActiveFontFeatures = i876
  i870.m_enableExtraPadding = !!i871[66]
  i870.checkPaddingRequired = !!i871[67]
  i870.m_isRichText = !!i871[68]
  i870.m_parseCtrlCharacters = !!i871[69]
  i870.m_isOrthographic = !!i871[70]
  i870.m_isCullingEnabled = !!i871[71]
  i870.m_horizontalMapping = i871[72]
  i870.m_verticalMapping = i871[73]
  i870.m_uvLineOffset = i871[74]
  i870.m_geometrySortingOrder = i871[75]
  i870.m_IsTextObjectScaleStatic = !!i871[76]
  i870.m_VertexBufferAutoSizeReduction = !!i871[77]
  i870.m_useMaxVisibleDescender = !!i871[78]
  i870.m_pageToDisplay = i871[79]
  i870.m_margin = new pc.Vec4( i871[80], i871[81], i871[82], i871[83] )
  i870.m_isUsingLegacyAnimationComponent = !!i871[84]
  i870.m_isVolumetricText = !!i871[85]
  request.r(i871[86], i871[87], 0, i870, 'm_Material')
  i870.m_EmojiFallbackSupport = !!i871[88]
  i870.m_Maskable = !!i871[89]
  i870.m_Color = new pc.Color(i871[90], i871[91], i871[92], i871[93])
  i870.m_RaycastTarget = !!i871[94]
  i870.m_RaycastPadding = new pc.Vec4( i871[95], i871[96], i871[97], i871[98] )
  return i870
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.VertexGradient' )
  var i881 = data
  i880.topLeft = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.topRight = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.bottomLeft = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.bottomRight = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  return i880
}

Deserializers["TutController"] = function (request, data, root) {
  var i884 = root || request.c( 'TutController' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'tutScene')
  request.r(i885[2], i885[3], 0, i884, 'startTut')
  request.r(i885[4], i885[5], 0, i884, 'playTut')
  request.r(i885[6], i885[7], 0, i884, 'farTut')
  request.r(i885[8], i885[9], 0, i884, 'failTut')
  return i884
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i886 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i887 = data
  i886.targetIsSelf = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'targetGO')
  i886.tweenTargetIsTargetGO = !!i887[3]
  i886.delay = i887[4]
  i886.duration = i887[5]
  i886.easeType = i887[6]
  i886.easeCurve = new pc.AnimationCurve( { keys_flow: i887[7] } )
  i886.loopType = i887[8]
  i886.loops = i887[9]
  i886.id = i887[10]
  i886.isRelative = !!i887[11]
  i886.isFrom = !!i887[12]
  i886.isIndependentUpdate = !!i887[13]
  i886.autoKill = !!i887[14]
  i886.autoGenerate = !!i887[15]
  i886.isActive = !!i887[16]
  i886.isValid = !!i887[17]
  request.r(i887[18], i887[19], 0, i886, 'target')
  i886.animationType = i887[20]
  i886.targetType = i887[21]
  i886.forcedTargetType = i887[22]
  i886.autoPlay = !!i887[23]
  i886.useTargetAsV3 = !!i887[24]
  i886.endValueFloat = i887[25]
  i886.endValueV3 = new pc.Vec3( i887[26], i887[27], i887[28] )
  i886.endValueV2 = new pc.Vec2( i887[29], i887[30] )
  i886.endValueColor = new pc.Color(i887[31], i887[32], i887[33], i887[34])
  i886.endValueString = i887[35]
  i886.endValueRect = UnityEngine.Rect.MinMaxRect(i887[36], i887[37], i887[38], i887[39])
  request.r(i887[40], i887[41], 0, i886, 'endValueTransform')
  i886.optionalBool0 = !!i887[42]
  i886.optionalBool1 = !!i887[43]
  i886.optionalFloat0 = i887[44]
  i886.optionalInt0 = i887[45]
  i886.optionalRotationMode = i887[46]
  i886.optionalScrambleMode = i887[47]
  i886.optionalShakeRandomnessMode = i887[48]
  i886.optionalString = i887[49]
  i886.updateType = i887[50]
  i886.isSpeedBased = !!i887[51]
  i886.hasOnStart = !!i887[52]
  i886.hasOnPlay = !!i887[53]
  i886.hasOnUpdate = !!i887[54]
  i886.hasOnStepComplete = !!i887[55]
  i886.hasOnComplete = !!i887[56]
  i886.hasOnTweenCreated = !!i887[57]
  i886.hasOnRewind = !!i887[58]
  i886.onStart = request.d('UnityEngine.Events.UnityEvent', i887[59], i886.onStart)
  i886.onPlay = request.d('UnityEngine.Events.UnityEvent', i887[60], i886.onPlay)
  i886.onUpdate = request.d('UnityEngine.Events.UnityEvent', i887[61], i886.onUpdate)
  i886.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i887[62], i886.onStepComplete)
  i886.onComplete = request.d('UnityEngine.Events.UnityEvent', i887[63], i886.onComplete)
  i886.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i887[64], i886.onTweenCreated)
  i886.onRewind = request.d('UnityEngine.Events.UnityEvent', i887[65], i886.onRewind)
  return i886
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i889 = data
  i888.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i889[0], i888.m_PersistentCalls)
  return i888
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i890 = root || request.c( 'HideOnPointer' )
  var i891 = data
  i890.OnPointerDownEvent = request.d('System.Action', i891[0], i890.OnPointerDownEvent)
  return i890
}

Deserializers["System.Action"] = function (request, data, root) {
  var i892 = root || request.c( 'System.Action' )
  var i893 = data
  return i892
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i894 = root || request.c( 'SelectPanel' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, '_title')
  var i897 = i895[2]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i894._buttonsSelectMap = i896
  var i899 = i895[3]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i894._buttonsCTA = i898
  request.r(i895[4], i895[5], 0, i894, '_lock')
  return i894
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i903 = data
  i902.m_AspectMode = i903[0]
  i902.m_AspectRatio = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.size = new pc.Vec3( i905[3], i905[4], i905[5] )
  i904.enabled = !!i905[6]
  i904.isTrigger = !!i905[7]
  request.r(i905[8], i905[9], 0, i904, 'material')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i907 = data
  i906.mass = i907[0]
  i906.drag = i907[1]
  i906.angularDrag = i907[2]
  i906.useGravity = !!i907[3]
  i906.isKinematic = !!i907[4]
  i906.constraints = i907[5]
  i906.maxAngularVelocity = i907[6]
  i906.collisionDetectionMode = i907[7]
  i906.interpolation = i907[8]
  return i906
}

Deserializers["Gift"] = function (request, data, root) {
  var i908 = root || request.c( 'Gift' )
  var i909 = data
  i908.collectDone = !!i909[0]
  var i911 = i909[1]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908.hints = i910
  request.r(i909[2], i909[3], 0, i908, 'collectSound')
  request.r(i909[4], i909[5], 0, i908, 'collectEffect')
  request.r(i909[6], i909[7], 0, i908, 'arrow')
  return i908
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i914 = root || request.c( 'SoundHint' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'Sound')
  request.r(i915[2], i915[3], 0, i914, 'Source')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'sharedMesh')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'additionalVertexStreams')
  i918.enabled = !!i919[2]
  request.r(i919[3], i919[4], 0, i918, 'sharedMaterial')
  var i921 = i919[5]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.sharedMaterials = i920
  i918.receiveShadows = !!i919[6]
  i918.shadowCastingMode = i919[7]
  i918.sortingLayerID = i919[8]
  i918.sortingOrder = i919[9]
  i918.lightmapIndex = i919[10]
  i918.lightmapSceneIndex = i919[11]
  i918.lightmapScaleOffset = new pc.Vec4( i919[12], i919[13], i919[14], i919[15] )
  i918.lightProbeUsage = i919[16]
  i918.reflectionProbeUsage = i919[17]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'mesh')
  i922.meshCount = i923[2]
  i922.activeVertexStreamsCount = i923[3]
  i922.alignment = i923[4]
  i922.renderMode = i923[5]
  i922.sortMode = i923[6]
  i922.lengthScale = i923[7]
  i922.velocityScale = i923[8]
  i922.cameraVelocityScale = i923[9]
  i922.normalDirection = i923[10]
  i922.sortingFudge = i923[11]
  i922.minParticleSize = i923[12]
  i922.maxParticleSize = i923[13]
  i922.pivot = new pc.Vec3( i923[14], i923[15], i923[16] )
  request.r(i923[17], i923[18], 0, i922, 'trailMaterial')
  i922.applyActiveColorSpace = !!i923[19]
  i922.enabled = !!i923[20]
  request.r(i923[21], i923[22], 0, i922, 'sharedMaterial')
  var i925 = i923[23]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.sharedMaterials = i924
  i922.receiveShadows = !!i923[24]
  i922.shadowCastingMode = i923[25]
  i922.sortingLayerID = i923[26]
  i922.sortingOrder = i923[27]
  i922.lightmapIndex = i923[28]
  i922.lightmapSceneIndex = i923[29]
  i922.lightmapScaleOffset = new pc.Vec4( i923[30], i923[31], i923[32], i923[33] )
  i922.lightProbeUsage = i923[34]
  i922.reflectionProbeUsage = i923[35]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i927 = data
  i926.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i927[0], i926.main)
  i926.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i927[1], i926.colorBySpeed)
  i926.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i927[2], i926.colorOverLifetime)
  i926.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i927[3], i926.emission)
  i926.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i927[4], i926.rotationBySpeed)
  i926.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i927[5], i926.rotationOverLifetime)
  i926.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i927[6], i926.shape)
  i926.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i927[7], i926.sizeBySpeed)
  i926.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i927[8], i926.sizeOverLifetime)
  i926.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i927[9], i926.textureSheetAnimation)
  i926.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i927[10], i926.velocityOverLifetime)
  i926.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i927[11], i926.noise)
  i926.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i927[12], i926.inheritVelocity)
  i926.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i927[13], i926.forceOverLifetime)
  i926.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i927[14], i926.limitVelocityOverLifetime)
  i926.useAutoRandomSeed = !!i927[15]
  i926.randomSeed = i927[16]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemMain()
  var i929 = data
  i928.duration = i929[0]
  i928.loop = !!i929[1]
  i928.prewarm = !!i929[2]
  i928.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.startDelay)
  i928.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[4], i928.startLifetime)
  i928.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[5], i928.startSpeed)
  i928.startSize3D = !!i929[6]
  i928.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[7], i928.startSizeX)
  i928.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[8], i928.startSizeY)
  i928.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[9], i928.startSizeZ)
  i928.startRotation3D = !!i929[10]
  i928.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[11], i928.startRotationX)
  i928.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[12], i928.startRotationY)
  i928.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[13], i928.startRotationZ)
  i928.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i929[14], i928.startColor)
  i928.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[15], i928.gravityModifier)
  i928.simulationSpace = i929[16]
  request.r(i929[17], i929[18], 0, i928, 'customSimulationSpace')
  i928.simulationSpeed = i929[19]
  i928.useUnscaledTime = !!i929[20]
  i928.scalingMode = i929[21]
  i928.playOnAwake = !!i929[22]
  i928.maxParticles = i929[23]
  i928.emitterVelocityMode = i929[24]
  i928.stopAction = i929[25]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i930 = root || new pc.MinMaxCurve()
  var i931 = data
  i930.mode = i931[0]
  i930.curveMin = new pc.AnimationCurve( { keys_flow: i931[1] } )
  i930.curveMax = new pc.AnimationCurve( { keys_flow: i931[2] } )
  i930.curveMultiplier = i931[3]
  i930.constantMin = i931[4]
  i930.constantMax = i931[5]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i932 = root || new pc.MinMaxGradient()
  var i933 = data
  i932.mode = i933[0]
  i932.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i933[1], i932.gradientMin)
  i932.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i933[2], i932.gradientMax)
  i932.colorMin = new pc.Color(i933[3], i933[4], i933[5], i933[6])
  i932.colorMax = new pc.Color(i933[7], i933[8], i933[9], i933[10])
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i935 = data
  i934.mode = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i937[i + 0]) );
  }
  i934.colorKeys = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i939[i + 0]) );
  }
  i934.alphaKeys = i938
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemColorBySpeed()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i941[1], i940.color)
  i940.range = new pc.Vec2( i941[2], i941[3] )
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i945 = data
  i944.color = new pc.Color(i945[0], i945[1], i945[2], i945[3])
  i944.time = i945[4]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i949 = data
  i948.alpha = i949[0]
  i948.time = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemColorOverLifetime()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i951[1], i950.color)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemEmitter()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.rateOverTime)
  i952.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.rateOverDistance)
  var i955 = i953[3]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i955[i + 0]) );
  }
  i952.bursts = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemBurst()
  var i959 = data
  i958.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[0], i958.count)
  i958.cycleCount = i959[1]
  i958.minCount = i959[2]
  i958.maxCount = i959[3]
  i958.repeatInterval = i959[4]
  i958.time = i959[5]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemRotationBySpeed()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.separateAxes = !!i961[4]
  i960.range = new pc.Vec2( i961[5], i961[6] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemRotationOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.separateAxes = !!i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemShape()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.shapeType = i965[1]
  i964.randomDirectionAmount = i965[2]
  i964.sphericalDirectionAmount = i965[3]
  i964.randomPositionAmount = i965[4]
  i964.alignToDirection = !!i965[5]
  i964.radius = i965[6]
  i964.radiusMode = i965[7]
  i964.radiusSpread = i965[8]
  i964.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[9], i964.radiusSpeed)
  i964.radiusThickness = i965[10]
  i964.angle = i965[11]
  i964.length = i965[12]
  i964.boxThickness = new pc.Vec3( i965[13], i965[14], i965[15] )
  i964.meshShapeType = i965[16]
  request.r(i965[17], i965[18], 0, i964, 'mesh')
  request.r(i965[19], i965[20], 0, i964, 'meshRenderer')
  request.r(i965[21], i965[22], 0, i964, 'skinnedMeshRenderer')
  i964.useMeshMaterialIndex = !!i965[23]
  i964.meshMaterialIndex = i965[24]
  i964.useMeshColors = !!i965[25]
  i964.normalOffset = i965[26]
  i964.arc = i965[27]
  i964.arcMode = i965[28]
  i964.arcSpread = i965[29]
  i964.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[30], i964.arcSpeed)
  i964.donutRadius = i965[31]
  i964.position = new pc.Vec3( i965[32], i965[33], i965[34] )
  i964.rotation = new pc.Vec3( i965[35], i965[36], i965[37] )
  i964.scale = new pc.Vec3( i965[38], i965[39], i965[40] )
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemSizeBySpeed()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.separateAxes = !!i967[4]
  i966.range = new pc.Vec2( i967[5], i967[6] )
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemSizeOverLifetime()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[1], i968.x)
  i968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.y)
  i968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.z)
  i968.separateAxes = !!i969[4]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.mode = i971[1]
  i970.animation = i971[2]
  i970.numTilesX = i971[3]
  i970.numTilesY = i971[4]
  i970.useRandomRow = !!i971[5]
  i970.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[6], i970.frameOverTime)
  i970.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[7], i970.startFrame)
  i970.cycleCount = i971[8]
  i970.rowIndex = i971[9]
  i970.flipU = i971[10]
  i970.flipV = i971[11]
  i970.spriteCount = i971[12]
  var i973 = i971[13]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i970.sprites = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[1], i976.x)
  i976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.y)
  i976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.z)
  i976.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[4], i976.radial)
  i976.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[5], i976.speedModifier)
  i976.space = i977[6]
  i976.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[7], i976.orbitalX)
  i976.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[8], i976.orbitalY)
  i976.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[9], i976.orbitalZ)
  i976.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[10], i976.orbitalOffsetX)
  i976.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[11], i976.orbitalOffsetY)
  i976.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[12], i976.orbitalOffsetZ)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemNoise()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.separateAxes = !!i979[1]
  i978.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.strengthX)
  i978.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.strengthY)
  i978.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[4], i978.strengthZ)
  i978.frequency = i979[5]
  i978.damping = !!i979[6]
  i978.octaveCount = i979[7]
  i978.octaveMultiplier = i979[8]
  i978.octaveScale = i979[9]
  i978.quality = i979[10]
  i978.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[11], i978.scrollSpeed)
  i978.scrollSpeedMultiplier = i979[12]
  i978.remapEnabled = !!i979[13]
  i978.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[14], i978.remapX)
  i978.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[15], i978.remapY)
  i978.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[16], i978.remapZ)
  i978.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[17], i978.positionAmount)
  i978.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[18], i978.rotationAmount)
  i978.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[19], i978.sizeAmount)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemInheritVelocity()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.mode = i981[1]
  i980.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.curve)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemForceOverLifetime()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[1], i982.x)
  i982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[2], i982.y)
  i982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[3], i982.z)
  i982.space = i983[4]
  i982.randomized = !!i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i984 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i985 = data
  i984.enabled = !!i985[0]
  i984.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[1], i984.limit)
  i984.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[2], i984.limitX)
  i984.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[3], i984.limitY)
  i984.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[4], i984.limitZ)
  i984.dampen = i985[5]
  i984.separateAxes = !!i985[6]
  i984.space = i985[7]
  i984.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[8], i984.drag)
  i984.multiplyDragByParticleSize = !!i985[9]
  i984.multiplyDragByParticleVelocity = !!i985[10]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i987 = data
  i986.color = new pc.Color(i987[0], i987[1], i987[2], i987[3])
  request.r(i987[4], i987[5], 0, i986, 'sprite')
  i986.flipX = !!i987[6]
  i986.flipY = !!i987[7]
  i986.drawMode = i987[8]
  i986.size = new pc.Vec2( i987[9], i987[10] )
  i986.tileMode = i987[11]
  i986.adaptiveModeThreshold = i987[12]
  i986.maskInteraction = i987[13]
  i986.spriteSortPoint = i987[14]
  i986.enabled = !!i987[15]
  request.r(i987[16], i987[17], 0, i986, 'sharedMaterial')
  var i989 = i987[18]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.sharedMaterials = i988
  i986.receiveShadows = !!i987[19]
  i986.shadowCastingMode = i987[20]
  i986.sortingLayerID = i987[21]
  i986.sortingOrder = i987[22]
  i986.lightmapIndex = i987[23]
  i986.lightmapSceneIndex = i987[24]
  i986.lightmapScaleOffset = new pc.Vec4( i987[25], i987[26], i987[27], i987[28] )
  i986.lightProbeUsage = i987[29]
  i986.reflectionProbeUsage = i987[30]
  return i986
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i990 = root || request.c( 'CharacterMotor' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'characterInput')
  request.r(i991[2], i991[3], 0, i990, 'cameraYawTransform')
  request.r(i991[4], i991[5], 0, i990, '_arrow')
  i990.moveSpeed = i991[6]
  i990.jumpHeight = i991[7]
  request.r(i991[8], i991[9], 0, i990, 'groundChecker')
  i990.gravity = i991[10]
  i990.enableStepClimb = !!i991[11]
  i990.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i991[12] )
  i990.maxStepHeight = i991[13]
  i990.stepCheckDistance = i991[14]
  i990.stepUpSpeed = i991[15]
  i990.stepUpAcceleration = i991[16]
  i990.minimumStepFacing = i991[17]
  request.r(i991[18], i991[19], 0, i990, 'controller')
  i990.autoRun = !!i991[20]
  return i990
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i992 = root || request.c( 'CharacterRotation' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'motor')
  i992.rotationSpeed = i993[2]
  return i992
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i994 = root || request.c( 'CharacterAnimation' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'animator')
  request.r(i995[2], i995[3], 0, i994, 'motor')
  i994.speedChangeRate = i995[4]
  i994.groundedGraceTime = i995[5]
  return i994
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i996 = root || request.c( 'CharacterCollect' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'motor')
  request.r(i997[2], i997[3], 0, i996, 'avatar')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i999 = data
  i998.center = new pc.Vec3( i999[0], i999[1], i999[2] )
  i998.radius = i999[3]
  i998.height = i999[4]
  i998.direction = i999[5]
  i998.enabled = !!i999[6]
  i998.isTrigger = !!i999[7]
  request.r(i999[8], i999[9], 0, i998, 'material')
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'animatorController')
  request.r(i1001[2], i1001[3], 0, i1000, 'avatar')
  i1000.updateMode = i1001[4]
  i1000.hasTransformHierarchy = !!i1001[5]
  i1000.applyRootMotion = !!i1001[6]
  var i1003 = i1001[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.humanBones = i1002
  i1000.enabled = !!i1001[8]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'clip')
  request.r(i1007[2], i1007[3], 0, i1006, 'outputAudioMixerGroup')
  i1006.playOnAwake = !!i1007[4]
  i1006.loop = !!i1007[5]
  i1006.time = i1007[6]
  i1006.volume = i1007[7]
  i1006.pitch = i1007[8]
  i1006.enabled = !!i1007[9]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sharedMesh')
  var i1011 = i1009[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.bones = i1010
  i1008.updateWhenOffscreen = !!i1009[3]
  i1008.localBounds = i1009[4]
  request.r(i1009[5], i1009[6], 0, i1008, 'rootBone')
  var i1013 = i1009[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1013[i + 0]) );
  }
  i1008.blendShapesWeights = i1012
  i1008.enabled = !!i1009[8]
  request.r(i1009[9], i1009[10], 0, i1008, 'sharedMaterial')
  var i1015 = i1009[11]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1008.sharedMaterials = i1014
  i1008.receiveShadows = !!i1009[12]
  i1008.shadowCastingMode = i1009[13]
  i1008.sortingLayerID = i1009[14]
  i1008.sortingOrder = i1009[15]
  i1008.lightmapIndex = i1009[16]
  i1008.lightmapSceneIndex = i1009[17]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[18], i1009[19], i1009[20], i1009[21] )
  i1008.lightProbeUsage = i1009[22]
  i1008.reflectionProbeUsage = i1009[23]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1019 = data
  i1018.weight = i1019[0]
  return i1018
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i1020 = root || request.c( 'GroundChecker' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'groundPoint')
  i1020.checkRadius = i1021[2]
  i1020.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1021[3] )
  return i1020
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1022 = root || request.c( 'CameraFollow' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'target')
  i1022.smoothTime = i1023[2]
  return i1022
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1024 = root || request.c( 'CameraLook' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'input')
  request.r(i1025[2], i1025[3], 0, i1024, 'yawPivot')
  request.r(i1025[4], i1025[5], 0, i1024, 'pitchPivot')
  i1024.minPitch = i1025[6]
  i1024.maxPitch = i1025[7]
  i1024.yaw = i1025[8]
  i1024.pitch = i1025[9]
  i1024.defaltYaw = i1025[10]
  i1024.defaltPitch = i1025[11]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1027 = data
  i1026.aspect = i1027[0]
  i1026.orthographic = !!i1027[1]
  i1026.orthographicSize = i1027[2]
  i1026.backgroundColor = new pc.Color(i1027[3], i1027[4], i1027[5], i1027[6])
  i1026.nearClipPlane = i1027[7]
  i1026.farClipPlane = i1027[8]
  i1026.fieldOfView = i1027[9]
  i1026.depth = i1027[10]
  i1026.clearFlags = i1027[11]
  i1026.cullingMask = i1027[12]
  i1026.rect = i1027[13]
  request.r(i1027[14], i1027[15], 0, i1026, 'targetTexture')
  i1026.usePhysicalProperties = !!i1027[16]
  i1026.focalLength = i1027[17]
  i1026.sensorSize = new pc.Vec2( i1027[18], i1027[19] )
  i1026.lensShift = new pc.Vec2( i1027[20], i1027[21] )
  i1026.gateFit = i1027[22]
  i1026.commandBufferCount = i1027[23]
  i1026.cameraType = i1027[24]
  i1026.enabled = !!i1027[25]
  return i1026
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1028 = root || request.c( 'CharacterInput' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'joystick')
  request.r(i1029[2], i1029[3], 0, i1028, 'jumpButton')
  return i1028
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1030 = root || request.c( 'InputManager' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'worldCamera')
  i1030.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1031[2] )
  i1030.touchSensitivity = i1031[3]
  i1030.mouseSensitivity = i1031[4]
  i1030.dragThreshold = i1031[5]
  return i1030
}

Deserializers["GameController"] = function (request, data, root) {
  var i1032 = root || request.c( 'GameController' )
  var i1033 = data
  i1032.timeToShowComplete = i1033[0]
  i1032.timeToShowHint = i1033[1]
  i1032.currentProgress = i1033[2]
  i1032.target = i1033[3]
  request.r(i1033[4], i1033[5], 0, i1032, 'progressText')
  request.r(i1033[6], i1033[7], 0, i1032, 'collectText')
  request.r(i1033[8], i1033[9], 0, i1032, 'completeScene')
  i1032._indexGift = i1033[10]
  var i1035 = i1033[11]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+GiftGroup')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('GameController+GiftGroup', i1035[i + 0]));
  }
  i1032.giftGroups = i1034
  request.r(i1033[12], i1033[13], 0, i1032, 'collect')
  request.r(i1033[14], i1033[15], 0, i1032, 'tut')
  return i1032
}

Deserializers["GameController+GiftGroup"] = function (request, data, root) {
  var i1038 = root || request.c( 'GameController+GiftGroup' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1038.gifts = i1040
  return i1038
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1044 = root || request.c( 'AudioController' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'musicSource')
  request.r(i1045[2], i1045[3], 0, i1044, 'poolParent')
  i1044.startSize = i1045[4]
  return i1044
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1046 = root || request.c( 'LunaController' )
  var i1047 = data
  i1046.LimitTimePlay = !!i1047[0]
  i1046.TimePlay = i1047[1]
  var i1049 = i1047[2]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1046.images = i1048
  request.r(i1047[3], i1047[4], 0, i1046, 'CTA')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1053 = data
  i1052.textureMode = i1053[0]
  i1052.alignment = i1053[1]
  i1052.widthCurve = new pc.AnimationCurve( { keys_flow: i1053[2] } )
  i1052.colorGradient = i1053[3] ? new pc.ColorGradient(i1053[3][0], i1053[3][1], i1053[3][2]) : null
  var i1055 = i1053[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 3) {
    i1054.push( new pc.Vec3( i1055[i + 0], i1055[i + 1], i1055[i + 2] ) );
  }
  i1052.positions = i1054
  i1052.positionCount = i1053[5]
  i1052.widthMultiplier = i1053[6]
  i1052.startWidth = i1053[7]
  i1052.endWidth = i1053[8]
  i1052.numCornerVertices = i1053[9]
  i1052.numCapVertices = i1053[10]
  i1052.useWorldSpace = !!i1053[11]
  i1052.loop = !!i1053[12]
  i1052.startColor = new pc.Color(i1053[13], i1053[14], i1053[15], i1053[16])
  i1052.endColor = new pc.Color(i1053[17], i1053[18], i1053[19], i1053[20])
  i1052.generateLightingData = !!i1053[21]
  i1052.enabled = !!i1053[22]
  request.r(i1053[23], i1053[24], 0, i1052, 'sharedMaterial')
  var i1057 = i1053[25]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1052.sharedMaterials = i1056
  i1052.receiveShadows = !!i1053[26]
  i1052.shadowCastingMode = i1053[27]
  i1052.sortingLayerID = i1053[28]
  i1052.sortingOrder = i1053[29]
  i1052.lightmapIndex = i1053[30]
  i1052.lightmapSceneIndex = i1053[31]
  i1052.lightmapScaleOffset = new pc.Vec4( i1053[32], i1053[33], i1053[34], i1053[35] )
  i1052.lightProbeUsage = i1053[36]
  i1052.reflectionProbeUsage = i1053[37]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'sharedMesh')
  i1060.convex = !!i1061[2]
  i1060.enabled = !!i1061[3]
  i1060.isTrigger = !!i1061[4]
  request.r(i1061[5], i1061[6], 0, i1060, 'material')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1063 = data
  i1062.center = new pc.Vec3( i1063[0], i1063[1], i1063[2] )
  i1062.radius = i1063[3]
  i1062.enabled = !!i1063[4]
  i1062.isTrigger = !!i1063[5]
  request.r(i1063[6], i1063[7], 0, i1062, 'material')
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1065 = data
  i1064.ambientIntensity = i1065[0]
  i1064.reflectionIntensity = i1065[1]
  i1064.ambientMode = i1065[2]
  i1064.ambientLight = new pc.Color(i1065[3], i1065[4], i1065[5], i1065[6])
  i1064.ambientSkyColor = new pc.Color(i1065[7], i1065[8], i1065[9], i1065[10])
  i1064.ambientGroundColor = new pc.Color(i1065[11], i1065[12], i1065[13], i1065[14])
  i1064.ambientEquatorColor = new pc.Color(i1065[15], i1065[16], i1065[17], i1065[18])
  i1064.fogColor = new pc.Color(i1065[19], i1065[20], i1065[21], i1065[22])
  i1064.fogEndDistance = i1065[23]
  i1064.fogStartDistance = i1065[24]
  i1064.fogDensity = i1065[25]
  i1064.fog = !!i1065[26]
  request.r(i1065[27], i1065[28], 0, i1064, 'skybox')
  i1064.fogMode = i1065[29]
  var i1067 = i1065[30]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1067[i + 0]) );
  }
  i1064.lightmaps = i1066
  i1064.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1065[31], i1064.lightProbes)
  i1064.lightmapsMode = i1065[32]
  i1064.mixedBakeMode = i1065[33]
  i1064.environmentLightingMode = i1065[34]
  i1064.ambientProbe = new pc.SphericalHarmonicsL2(i1065[35])
  request.r(i1065[36], i1065[37], 0, i1064, 'customReflection')
  request.r(i1065[38], i1065[39], 0, i1064, 'defaultReflection')
  i1064.defaultReflectionMode = i1065[40]
  i1064.defaultReflectionResolution = i1065[41]
  i1064.sunLightObjectId = i1065[42]
  i1064.pixelLightCount = i1065[43]
  i1064.defaultReflectionHDR = !!i1065[44]
  i1064.hasLightDataAsset = !!i1065[45]
  i1064.hasManualGenerate = !!i1065[46]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'lightmapColor')
  request.r(i1071[2], i1071[3], 0, i1070, 'lightmapDirection')
  request.r(i1071[4], i1071[5], 0, i1070, 'shadowMask')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1072 = root || new UnityEngine.LightProbes()
  var i1073 = data
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1081[i + 0]));
  }
  i1078.ShaderCompilationErrors = i1080
  i1078.name = i1079[1]
  i1078.guid = i1079[2]
  var i1083 = i1079[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.shaderDefinedKeywords = i1082
  var i1085 = i1079[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1085[i + 0]) );
  }
  i1078.passes = i1084
  var i1087 = i1079[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1087[i + 0]) );
  }
  i1078.usePasses = i1086
  var i1089 = i1079[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1089[i + 0]) );
  }
  i1078.defaultParameterValues = i1088
  request.r(i1079[7], i1079[8], 0, i1078, 'unityFallbackShader')
  i1078.readDepth = !!i1079[9]
  i1078.hasDepthOnlyPass = !!i1079[10]
  i1078.isCreatedByShaderGraph = !!i1079[11]
  i1078.disableBatching = !!i1079[12]
  i1078.compiled = !!i1079[13]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1093 = data
  i1092.shaderName = i1093[0]
  i1092.errorMessage = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1098 = root || new pc.UnityShaderPass()
  var i1099 = data
  i1098.id = i1099[0]
  i1098.subShaderIndex = i1099[1]
  i1098.name = i1099[2]
  i1098.passType = i1099[3]
  i1098.grabPassTextureName = i1099[4]
  i1098.usePass = !!i1099[5]
  i1098.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[6], i1098.zTest)
  i1098.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[7], i1098.zWrite)
  i1098.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[8], i1098.culling)
  i1098.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1099[9], i1098.blending)
  i1098.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1099[10], i1098.alphaBlending)
  i1098.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[11], i1098.colorWriteMask)
  i1098.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[12], i1098.offsetUnits)
  i1098.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[13], i1098.offsetFactor)
  i1098.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[14], i1098.stencilRef)
  i1098.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[15], i1098.stencilReadMask)
  i1098.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[16], i1098.stencilWriteMask)
  i1098.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[17], i1098.stencilOp)
  i1098.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[18], i1098.stencilOpFront)
  i1098.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[19], i1098.stencilOpBack)
  var i1101 = i1099[20]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1101[i + 0]) );
  }
  i1098.tags = i1100
  var i1103 = i1099[21]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1098.passDefinedKeywords = i1102
  var i1105 = i1099[22]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1105[i + 0]) );
  }
  i1098.passDefinedKeywordGroups = i1104
  var i1107 = i1099[23]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1107[i + 0]) );
  }
  i1098.variants = i1106
  var i1109 = i1099[24]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1109[i + 0]) );
  }
  i1098.excludedVariants = i1108
  i1098.hasDepthReader = !!i1099[25]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1111 = data
  i1110.val = i1111[0]
  i1110.name = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1113 = data
  i1112.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[0], i1112.src)
  i1112.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[1], i1112.dst)
  i1112.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[2], i1112.op)
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1115 = data
  i1114.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[0], i1114.pass)
  i1114.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[1], i1114.fail)
  i1114.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[2], i1114.zFail)
  i1114.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[3], i1114.comp)
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.value = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1122.keywords = i1124
  i1122.hasDiscard = !!i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1129 = data
  i1128.passId = i1129[0]
  i1128.subShaderIndex = i1129[1]
  var i1131 = i1129[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1128.keywords = i1130
  i1128.vertexProgram = i1129[3]
  i1128.fragmentProgram = i1129[4]
  i1128.exportedForWebGl2 = !!i1129[5]
  i1128.readDepth = !!i1129[6]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'shader')
  i1134.pass = i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.type = i1139[1]
  i1138.value = new pc.Vec4( i1139[2], i1139[3], i1139[4], i1139[5] )
  i1138.textureValue = i1139[6]
  i1138.shaderPropertyFlag = i1139[7]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1141 = data
  i1140.name = i1141[0]
  request.r(i1141[1], i1141[2], 0, i1140, 'texture')
  i1140.aabb = i1141[3]
  i1140.vertices = i1141[4]
  i1140.triangles = i1141[5]
  i1140.textureRect = UnityEngine.Rect.MinMaxRect(i1141[6], i1141[7], i1141[8], i1141[9])
  i1140.packedRect = UnityEngine.Rect.MinMaxRect(i1141[10], i1141[11], i1141[12], i1141[13])
  i1140.border = new pc.Vec4( i1141[14], i1141[15], i1141[16], i1141[17] )
  i1140.transparency = i1141[18]
  i1140.bounds = i1141[19]
  i1140.pixelsPerUnit = i1141[20]
  i1140.textureWidth = i1141[21]
  i1140.textureHeight = i1141[22]
  i1140.nativeSize = new pc.Vec2( i1141[23], i1141[24] )
  i1140.pivot = new pc.Vec2( i1141[25], i1141[26] )
  i1140.textureRectOffset = new pc.Vec2( i1141[27], i1141[28] )
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1143 = data
  i1142.name = i1143[0]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.wrapMode = i1145[1]
  i1144.isLooping = !!i1145[2]
  i1144.length = i1145[3]
  var i1147 = i1145[4]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1147[i + 0]) );
  }
  i1144.curves = i1146
  var i1149 = i1145[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1149[i + 0]) );
  }
  i1144.events = i1148
  i1144.halfPrecision = !!i1145[6]
  i1144._frameRate = i1145[7]
  i1144.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1145[8], i1144.localBounds)
  i1144.hasMuscleCurves = !!i1145[9]
  var i1151 = i1145[10]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1144.clipMuscleConstant = i1150
  i1144.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1145[11], i1144.clipBindingConstant)
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1155 = data
  i1154.path = i1155[0]
  i1154.hash = i1155[1]
  i1154.componentType = i1155[2]
  i1154.property = i1155[3]
  i1154.keys = i1155[4]
  var i1157 = i1155[5]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1157[i + 0]) );
  }
  i1154.objectReferenceKeys = i1156
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1161 = data
  i1160.time = i1161[0]
  request.r(i1161[1], i1161[2], 0, i1160, 'value')
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1165 = data
  i1164.functionName = i1165[0]
  i1164.floatParameter = i1165[1]
  i1164.intParameter = i1165[2]
  i1164.stringParameter = i1165[3]
  request.r(i1165[4], i1165[5], 0, i1164, 'objectReferenceParameter')
  i1164.time = i1165[6]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1167 = data
  i1166.center = new pc.Vec3( i1167[0], i1167[1], i1167[2] )
  i1166.extends = new pc.Vec3( i1167[3], i1167[4], i1167[5] )
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1170.genericBindings = i1172
  var i1175 = i1171[1]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1170.pptrCurveMapping = i1174
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1177 = data
  i1176.name = i1177[0]
  var i1179 = i1177[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1179[i + 0]) );
  }
  i1176.layers = i1178
  var i1181 = i1177[2]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1181[i + 0]) );
  }
  i1176.parameters = i1180
  i1176.animationClips = i1177[3]
  i1176.avatarUnsupported = i1177[4]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.defaultWeight = i1185[1]
  i1184.blendingMode = i1185[2]
  i1184.avatarMask = i1185[3]
  i1184.syncedLayerIndex = i1185[4]
  i1184.syncedLayerAffectsTiming = !!i1185[5]
  i1184.syncedLayers = i1185[6]
  i1184.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1185[7], i1184.stateMachine)
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  i1186.path = i1187[2]
  var i1189 = i1187[3]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1189[i + 0]) );
  }
  i1186.states = i1188
  var i1191 = i1187[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1191[i + 0]) );
  }
  i1186.machines = i1190
  var i1193 = i1187[5]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1193[i + 0]) );
  }
  i1186.entryStateTransitions = i1192
  var i1195 = i1187[6]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1195[i + 0]) );
  }
  i1186.exitStateTransitions = i1194
  var i1197 = i1187[7]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1197[i + 0]) );
  }
  i1186.anyStateTransitions = i1196
  i1186.defaultStateId = i1187[8]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  i1200.cycleOffset = i1201[2]
  i1200.cycleOffsetParameter = i1201[3]
  i1200.cycleOffsetParameterActive = !!i1201[4]
  i1200.mirror = !!i1201[5]
  i1200.mirrorParameter = i1201[6]
  i1200.mirrorParameterActive = !!i1201[7]
  i1200.motionId = i1201[8]
  i1200.nameHash = i1201[9]
  i1200.fullPathHash = i1201[10]
  i1200.speed = i1201[11]
  i1200.speedParameter = i1201[12]
  i1200.speedParameterActive = !!i1201[13]
  i1200.tag = i1201[14]
  i1200.tagHash = i1201[15]
  i1200.writeDefaultValues = !!i1201[16]
  var i1203 = i1201[17]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1200.behaviours = i1202
  var i1205 = i1201[18]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1205[i + 0]) );
  }
  i1200.transitions = i1204
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1211 = data
  i1210.fullPath = i1211[0]
  i1210.canTransitionToSelf = !!i1211[1]
  i1210.duration = i1211[2]
  i1210.exitTime = i1211[3]
  i1210.hasExitTime = !!i1211[4]
  i1210.hasFixedDuration = !!i1211[5]
  i1210.interruptionSource = i1211[6]
  i1210.offset = i1211[7]
  i1210.orderedInterruption = !!i1211[8]
  i1210.destinationStateId = i1211[9]
  i1210.isExit = !!i1211[10]
  i1210.mute = !!i1211[11]
  i1210.solo = !!i1211[12]
  var i1213 = i1211[13]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1213[i + 0]) );
  }
  i1210.conditions = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1217 = data
  i1216.mode = i1217[0]
  i1216.parameter = i1217[1]
  i1216.threshold = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1223 = data
  i1222.destinationStateId = i1223[0]
  i1222.isExit = !!i1223[1]
  i1222.mute = !!i1223[2]
  i1222.solo = !!i1223[3]
  var i1225 = i1223[4]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1225[i + 0]) );
  }
  i1222.conditions = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1229 = data
  i1228.defaultBool = !!i1229[0]
  i1228.defaultFloat = i1229[1]
  i1228.defaultInt = i1229[2]
  i1228.name = i1229[3]
  i1228.nameHash = i1229[4]
  i1228.type = i1229[5]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1231 = data
  i1230.name = i1231[0]
  request.r(i1231[1], i1231[2], 0, i1230, '_runtimeAnimatorController')
  var i1233 = i1231[3]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1230._originalAnimationClips = i1232
  var i1235 = i1231[4]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 2, i1234, '')
  }
  i1230._overrideAnimationClips = i1234
  var i1237 = i1231[5]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 2, i1236, '')
  }
  i1230._animationClips = i1236
  var i1239 = i1231[6]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('UnityEngine.AnimationClipPair', i1239[i + 0]) );
  }
  i1230._animationClipPairs = i1238
  return i1230
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'originalClip')
  request.r(i1245[2], i1245[3], 0, i1244, 'overrideClip')
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.bytes64 = i1247[1]
  i1246.data = i1247[2]
  return i1246
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1249 = data
  i1248.normalStyle = i1249[0]
  i1248.normalSpacingOffset = i1249[1]
  i1248.boldStyle = i1249[2]
  i1248.boldSpacing = i1249[3]
  i1248.italicStyle = i1249[4]
  i1248.tabSize = i1249[5]
  request.r(i1249[6], i1249[7], 0, i1248, 'atlas')
  i1248.m_SourceFontFileGUID = i1249[8]
  i1248.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1249[9], i1248.m_CreationSettings)
  request.r(i1249[10], i1249[11], 0, i1248, 'm_SourceFontFile')
  i1248.m_SourceFontFilePath = i1249[12]
  i1248.m_AtlasPopulationMode = i1249[13]
  i1248.InternalDynamicOS = !!i1249[14]
  var i1251 = i1249[15]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.Glyph', i1251[i + 0]));
  }
  i1248.m_GlyphTable = i1250
  var i1253 = i1249[16]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_Character', i1253[i + 0]));
  }
  i1248.m_CharacterTable = i1252
  var i1255 = i1249[17]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 2, i1254, '')
  }
  i1248.m_AtlasTextures = i1254
  i1248.m_AtlasTextureIndex = i1249[18]
  i1248.m_IsMultiAtlasTexturesEnabled = !!i1249[19]
  i1248.m_GetFontFeatures = !!i1249[20]
  i1248.m_ClearDynamicDataOnBuild = !!i1249[21]
  i1248.m_AtlasWidth = i1249[22]
  i1248.m_AtlasHeight = i1249[23]
  i1248.m_AtlasPadding = i1249[24]
  i1248.m_AtlasRenderMode = i1249[25]
  var i1257 = i1249[26]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('UnityEngine.TextCore.GlyphRect', i1257[i + 0]));
  }
  i1248.m_UsedGlyphRects = i1256
  var i1259 = i1249[27]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('UnityEngine.TextCore.GlyphRect', i1259[i + 0]));
  }
  i1248.m_FreeGlyphRects = i1258
  i1248.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1249[28], i1248.m_FontFeatureTable)
  i1248.m_ShouldReimportFontFeatures = !!i1249[29]
  var i1261 = i1249[30]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1248.m_FallbackFontAssetTable = i1260
  var i1263 = i1249[31]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('TMPro.TMP_FontWeightPair', i1263[i + 0]) );
  }
  i1248.m_FontWeightTable = i1262
  var i1265 = i1249[32]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('TMPro.TMP_FontWeightPair', i1265[i + 0]) );
  }
  i1248.fontWeights = i1264
  i1248.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1249[33], i1248.m_fontInfo)
  var i1267 = i1249[34]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.TMP_Glyph', i1267[i + 0]));
  }
  i1248.m_glyphInfoList = i1266
  i1248.m_KerningTable = request.d('TMPro.KerningTable', i1249[35], i1248.m_KerningTable)
  var i1269 = i1249[36]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 1, i1268, '')
  }
  i1248.fallbackFontAssets = i1268
  i1248.m_Version = i1249[37]
  i1248.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1249[38], i1248.m_FaceInfo)
  request.r(i1249[39], i1249[40], 0, i1248, 'm_Material')
  return i1248
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1271 = data
  i1270.sourceFontFileName = i1271[0]
  i1270.sourceFontFileGUID = i1271[1]
  i1270.faceIndex = i1271[2]
  i1270.pointSizeSamplingMode = i1271[3]
  i1270.pointSize = i1271[4]
  i1270.padding = i1271[5]
  i1270.paddingMode = i1271[6]
  i1270.packingMode = i1271[7]
  i1270.atlasWidth = i1271[8]
  i1270.atlasHeight = i1271[9]
  i1270.characterSetSelectionMode = i1271[10]
  i1270.characterSequence = i1271[11]
  i1270.referencedFontAssetGUID = i1271[12]
  i1270.referencedTextAssetGUID = i1271[13]
  i1270.fontStyle = i1271[14]
  i1270.fontStyleModifier = i1271[15]
  i1270.renderMode = i1271[16]
  i1270.includeFontFeatures = !!i1271[17]
  return i1270
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1275 = data
  i1274.m_Index = i1275[0]
  i1274.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1275[1], i1274.m_Metrics)
  i1274.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1275[2], i1274.m_GlyphRect)
  i1274.m_Scale = i1275[3]
  i1274.m_AtlasIndex = i1275[4]
  i1274.m_ClassDefinitionType = i1275[5]
  return i1274
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1277 = data
  i1276.m_Width = i1277[0]
  i1276.m_Height = i1277[1]
  i1276.m_HorizontalBearingX = i1277[2]
  i1276.m_HorizontalBearingY = i1277[3]
  i1276.m_HorizontalAdvance = i1277[4]
  return i1276
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1279 = data
  i1278.m_X = i1279[0]
  i1278.m_Y = i1279[1]
  i1278.m_Width = i1279[2]
  i1278.m_Height = i1279[3]
  return i1278
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Character' )
  var i1283 = data
  i1282.m_ElementType = i1283[0]
  i1282.m_Unicode = i1283[1]
  i1282.m_GlyphIndex = i1283[2]
  i1282.m_Scale = i1283[3]
  return i1282
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.MultipleSubstitutionRecord', i1291[i + 0]));
  }
  i1288.m_MultipleSubstitutionRecords = i1290
  var i1293 = i1289[1]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.LigatureSubstitutionRecord', i1293[i + 0]));
  }
  i1288.m_LigatureSubstitutionRecords = i1292
  var i1295 = i1289[2]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1295[i + 0]));
  }
  i1288.m_GlyphPairAdjustmentRecords = i1294
  var i1297 = i1289[3]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1297[i + 0]));
  }
  i1288.m_MarkToBaseAdjustmentRecords = i1296
  var i1299 = i1289[4]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1299[i + 0]));
  }
  i1288.m_MarkToMarkAdjustmentRecords = i1298
  return i1288
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1303 = data
  i1302.m_TargetGlyphID = i1303[0]
  i1302.m_SubstituteGlyphIDs = i1303[1]
  return i1302
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1307 = data
  i1306.m_ComponentGlyphIDs = i1307[0]
  i1306.m_LigatureGlyphID = i1307[1]
  return i1306
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1311 = data
  i1310.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1311[0], i1310.m_FirstAdjustmentRecord)
  i1310.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1311[1], i1310.m_SecondAdjustmentRecord)
  i1310.m_FeatureLookupFlags = i1311[2]
  return i1310
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1315 = data
  i1314.m_BaseGlyphID = i1315[0]
  i1314.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1315[1], i1314.m_BaseGlyphAnchorPoint)
  i1314.m_MarkGlyphID = i1315[2]
  i1314.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1315[3], i1314.m_MarkPositionAdjustment)
  return i1314
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1319 = data
  i1318.m_BaseMarkGlyphID = i1319[0]
  i1318.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1319[1], i1318.m_BaseMarkGlyphAnchorPoint)
  i1318.m_CombiningMarkGlyphID = i1319[2]
  i1318.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1319[3], i1318.m_CombiningMarkPositionAdjustment)
  return i1318
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'regularTypeface')
  request.r(i1325[2], i1325[3], 0, i1324, 'italicTypeface')
  return i1324
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1327 = data
  i1326.Name = i1327[0]
  i1326.PointSize = i1327[1]
  i1326.Scale = i1327[2]
  i1326.CharacterCount = i1327[3]
  i1326.LineHeight = i1327[4]
  i1326.Baseline = i1327[5]
  i1326.Ascender = i1327[6]
  i1326.CapHeight = i1327[7]
  i1326.Descender = i1327[8]
  i1326.CenterLine = i1327[9]
  i1326.SuperscriptOffset = i1327[10]
  i1326.SubscriptOffset = i1327[11]
  i1326.SubSize = i1327[12]
  i1326.Underline = i1327[13]
  i1326.UnderlineThickness = i1327[14]
  i1326.strikethrough = i1327[15]
  i1326.strikethroughThickness = i1327[16]
  i1326.TabWidth = i1327[17]
  i1326.Padding = i1327[18]
  i1326.AtlasWidth = i1327[19]
  i1326.AtlasHeight = i1327[20]
  return i1326
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1331 = data
  i1330.id = i1331[0]
  i1330.x = i1331[1]
  i1330.y = i1331[2]
  i1330.width = i1331[3]
  i1330.height = i1331[4]
  i1330.xOffset = i1331[5]
  i1330.yOffset = i1331[6]
  i1330.xAdvance = i1331[7]
  i1330.scale = i1331[8]
  return i1330
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.KerningTable' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.KerningPair', i1335[i + 0]));
  }
  i1332.kerningPairs = i1334
  return i1332
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.KerningPair' )
  var i1339 = data
  i1338.xOffset = i1339[0]
  i1338.m_FirstGlyph = i1339[1]
  i1338.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1339[2], i1338.m_FirstGlyphAdjustments)
  i1338.m_SecondGlyph = i1339[3]
  i1338.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1339[4], i1338.m_SecondGlyphAdjustments)
  i1338.m_IgnoreSpacingAdjustments = !!i1339[5]
  return i1338
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1341 = data
  i1340.m_FaceIndex = i1341[0]
  i1340.m_FamilyName = i1341[1]
  i1340.m_StyleName = i1341[2]
  i1340.m_PointSize = i1341[3]
  i1340.m_Scale = i1341[4]
  i1340.m_UnitsPerEM = i1341[5]
  i1340.m_LineHeight = i1341[6]
  i1340.m_AscentLine = i1341[7]
  i1340.m_CapLine = i1341[8]
  i1340.m_MeanLine = i1341[9]
  i1340.m_Baseline = i1341[10]
  i1340.m_DescentLine = i1341[11]
  i1340.m_SuperscriptOffset = i1341[12]
  i1340.m_SuperscriptSize = i1341[13]
  i1340.m_SubscriptOffset = i1341[14]
  i1340.m_SubscriptSize = i1341[15]
  i1340.m_UnderlineOffset = i1341[16]
  i1340.m_UnderlineThickness = i1341[17]
  i1340.m_StrikethroughOffset = i1341[18]
  i1340.m_StrikethroughThickness = i1341[19]
  i1340.m_TabWidth = i1341[20]
  return i1340
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1343 = data
  i1342.useSafeMode = !!i1343[0]
  i1342.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1343[1], i1342.safeModeOptions)
  i1342.timeScale = i1343[2]
  i1342.unscaledTimeScale = i1343[3]
  i1342.useSmoothDeltaTime = !!i1343[4]
  i1342.maxSmoothUnscaledTime = i1343[5]
  i1342.rewindCallbackMode = i1343[6]
  i1342.showUnityEditorReport = !!i1343[7]
  i1342.logBehaviour = i1343[8]
  i1342.drawGizmos = !!i1343[9]
  i1342.defaultRecyclable = !!i1343[10]
  i1342.defaultAutoPlay = i1343[11]
  i1342.defaultUpdateType = i1343[12]
  i1342.defaultTimeScaleIndependent = !!i1343[13]
  i1342.defaultEaseType = i1343[14]
  i1342.defaultEaseOvershootOrAmplitude = i1343[15]
  i1342.defaultEasePeriod = i1343[16]
  i1342.defaultAutoKill = !!i1343[17]
  i1342.defaultLoopType = i1343[18]
  i1342.debugMode = !!i1343[19]
  i1342.debugStoreTargetId = !!i1343[20]
  i1342.showPreviewPanel = !!i1343[21]
  i1342.storeSettingsLocation = i1343[22]
  i1342.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1343[23], i1342.modules)
  i1342.createASMDEF = !!i1343[24]
  i1342.showPlayingTweens = !!i1343[25]
  i1342.showPausedTweens = !!i1343[26]
  return i1342
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1344 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1345 = data
  i1344.logBehaviour = i1345[0]
  i1344.nestedTweenFailureBehaviour = i1345[1]
  return i1344
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1346 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1347 = data
  i1346.showPanel = !!i1347[0]
  i1346.audioEnabled = !!i1347[1]
  i1346.physicsEnabled = !!i1347[2]
  i1346.physics2DEnabled = !!i1347[3]
  i1346.spriteEnabled = !!i1347[4]
  i1346.uiEnabled = !!i1347[5]
  i1346.textMeshProEnabled = !!i1347[6]
  i1346.tk2DEnabled = !!i1347[7]
  i1346.deAudioEnabled = !!i1347[8]
  i1346.deUnityExtendedEnabled = !!i1347[9]
  i1346.epoOutlineEnabled = !!i1347[10]
  return i1346
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_Settings' )
  var i1349 = data
  i1348.assetVersion = i1349[0]
  i1348.m_TextWrappingMode = i1349[1]
  i1348.m_enableKerning = !!i1349[2]
  var i1351 = i1349[3]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(i1351[i + 0]);
  }
  i1348.m_ActiveFontFeatures = i1350
  i1348.m_enableExtraPadding = !!i1349[4]
  i1348.m_enableTintAllSprites = !!i1349[5]
  i1348.m_enableParseEscapeCharacters = !!i1349[6]
  i1348.m_EnableRaycastTarget = !!i1349[7]
  i1348.m_GetFontFeaturesAtRuntime = !!i1349[8]
  i1348.m_missingGlyphCharacter = i1349[9]
  i1348.m_ClearDynamicDataOnBuild = !!i1349[10]
  i1348.m_warningsDisabled = !!i1349[11]
  request.r(i1349[12], i1349[13], 0, i1348, 'm_defaultFontAsset')
  i1348.m_defaultFontAssetPath = i1349[14]
  i1348.m_defaultFontSize = i1349[15]
  i1348.m_defaultAutoSizeMinRatio = i1349[16]
  i1348.m_defaultAutoSizeMaxRatio = i1349[17]
  i1348.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1349[18], i1349[19] )
  i1348.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1349[20], i1349[21] )
  i1348.m_autoSizeTextContainer = !!i1349[22]
  i1348.m_IsTextObjectScaleStatic = !!i1349[23]
  var i1353 = i1349[24]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1348.m_fallbackFontAssets = i1352
  i1348.m_matchMaterialPreset = !!i1349[25]
  i1348.m_HideSubTextObjects = !!i1349[26]
  request.r(i1349[27], i1349[28], 0, i1348, 'm_defaultSpriteAsset')
  i1348.m_defaultSpriteAssetPath = i1349[29]
  i1348.m_enableEmojiSupport = !!i1349[30]
  i1348.m_MissingCharacterSpriteUnicode = i1349[31]
  var i1355 = i1349[32]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1348.m_EmojiFallbackTextAssets = i1354
  i1348.m_defaultColorGradientPresetsPath = i1349[33]
  request.r(i1349[34], i1349[35], 0, i1348, 'm_defaultStyleSheet')
  i1348.m_StyleSheetsResourcePath = i1349[36]
  request.r(i1349[37], i1349[38], 0, i1348, 'm_leadingCharacters')
  request.r(i1349[39], i1349[40], 0, i1348, 'm_followingCharacters')
  i1348.m_UseModernHangulLineBreakingRules = !!i1349[41]
  return i1348
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'spriteSheet')
  var i1361 = i1359[2]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.TMP_Sprite', i1361[i + 0]));
  }
  i1358.spriteInfoList = i1360
  var i1363 = i1359[3]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 1, i1362, '')
  }
  i1358.fallbackSpriteAssets = i1362
  var i1365 = i1359[4]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_SpriteCharacter', i1365[i + 0]));
  }
  i1358.m_SpriteCharacterTable = i1364
  var i1367 = i1359[5]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('TMPro.TMP_SpriteGlyph', i1367[i + 0]));
  }
  i1358.m_GlyphTable = i1366
  i1358.m_Version = i1359[6]
  i1358.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1359[7], i1358.m_FaceInfo)
  request.r(i1359[8], i1359[9], 0, i1358, 'm_Material')
  return i1358
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.hashCode = i1371[1]
  i1370.unicode = i1371[2]
  i1370.pivot = new pc.Vec2( i1371[3], i1371[4] )
  request.r(i1371[5], i1371[6], 0, i1370, 'sprite')
  i1370.id = i1371[7]
  i1370.x = i1371[8]
  i1370.y = i1371[9]
  i1370.width = i1371[10]
  i1370.height = i1371[11]
  i1370.xOffset = i1371[12]
  i1370.yOffset = i1371[13]
  i1370.xAdvance = i1371[14]
  i1370.scale = i1371[15]
  return i1370
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1377 = data
  i1376.m_Name = i1377[0]
  i1376.m_ElementType = i1377[1]
  i1376.m_Unicode = i1377[2]
  i1376.m_GlyphIndex = i1377[3]
  i1376.m_Scale = i1377[4]
  return i1376
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'sprite')
  i1380.m_Index = i1381[2]
  i1380.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1381[3], i1380.m_Metrics)
  i1380.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1381[4], i1380.m_GlyphRect)
  i1380.m_Scale = i1381[5]
  i1380.m_AtlasIndex = i1381[6]
  i1380.m_ClassDefinitionType = i1381[7]
  return i1380
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('TMPro.TMP_Style', i1385[i + 0]));
  }
  i1382.m_StyleList = i1384
  return i1382
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.TMP_Style' )
  var i1389 = data
  i1388.m_Name = i1389[0]
  i1388.m_HashCode = i1389[1]
  i1388.m_OpeningDefinition = i1389[2]
  i1388.m_ClosingDefinition = i1389[3]
  i1388.m_OpeningTagArray = i1389[4]
  i1388.m_ClosingTagArray = i1389[5]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1393[i + 0]) );
  }
  i1390.files = i1392
  i1390.componentToPrefabIds = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1397 = data
  i1396.path = i1397[0]
  request.r(i1397[1], i1397[2], 0, i1396, 'unityObject')
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1401[i + 0]) );
  }
  i1398.scriptsExecutionOrder = i1400
  var i1403 = i1399[1]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1403[i + 0]) );
  }
  i1398.sortingLayers = i1402
  var i1405 = i1399[2]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1405[i + 0]) );
  }
  i1398.cullingLayers = i1404
  i1398.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1399[3], i1398.timeSettings)
  i1398.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1399[4], i1398.physicsSettings)
  i1398.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1399[5], i1398.physics2DSettings)
  i1398.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1399[6], i1398.qualitySettings)
  i1398.enableRealtimeShadows = !!i1399[7]
  i1398.enableAutoInstancing = !!i1399[8]
  i1398.enableStaticBatching = !!i1399[9]
  i1398.enableDynamicBatching = !!i1399[10]
  i1398.usePreservativeDynamicBatching = !!i1399[11]
  i1398.lightmapEncodingQuality = i1399[12]
  i1398.desiredColorSpace = i1399[13]
  var i1407 = i1399[14]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1398.allTags = i1406
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1411 = data
  i1410.name = i1411[0]
  i1410.value = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1415 = data
  i1414.id = i1415[0]
  i1414.name = i1415[1]
  i1414.value = i1415[2]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1419 = data
  i1418.id = i1419[0]
  i1418.name = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1421 = data
  i1420.fixedDeltaTime = i1421[0]
  i1420.maximumDeltaTime = i1421[1]
  i1420.timeScale = i1421[2]
  i1420.maximumParticleTimestep = i1421[3]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1423 = data
  i1422.gravity = new pc.Vec3( i1423[0], i1423[1], i1423[2] )
  i1422.defaultSolverIterations = i1423[3]
  i1422.bounceThreshold = i1423[4]
  i1422.autoSyncTransforms = !!i1423[5]
  i1422.autoSimulation = !!i1423[6]
  var i1425 = i1423[7]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'material')
  i1430.gravity = new pc.Vec2( i1431[2], i1431[3] )
  i1430.positionIterations = i1431[4]
  i1430.velocityIterations = i1431[5]
  i1430.velocityThreshold = i1431[6]
  i1430.maxLinearCorrection = i1431[7]
  i1430.maxAngularCorrection = i1431[8]
  i1430.maxTranslationSpeed = i1431[9]
  i1430.maxRotationSpeed = i1431[10]
  i1430.baumgarteScale = i1431[11]
  i1430.baumgarteTOIScale = i1431[12]
  i1430.timeToSleep = i1431[13]
  i1430.linearSleepTolerance = i1431[14]
  i1430.angularSleepTolerance = i1431[15]
  i1430.defaultContactOffset = i1431[16]
  i1430.autoSimulation = !!i1431[17]
  i1430.queriesHitTriggers = !!i1431[18]
  i1430.queriesStartInColliders = !!i1431[19]
  i1430.callbacksOnDisable = !!i1431[20]
  i1430.reuseCollisionCallbacks = !!i1431[21]
  i1430.autoSyncTransforms = !!i1431[22]
  var i1433 = i1431[23]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1433[i + 0]) );
  }
  i1430.collisionMatrix = i1432
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1437 = data
  i1436.enabled = !!i1437[0]
  i1436.layerId = i1437[1]
  i1436.otherLayerId = i1437[2]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1441[i + 0]) );
  }
  i1438.qualityLevels = i1440
  var i1443 = i1439[1]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( i1443[i + 0] );
  }
  i1438.names = i1442
  i1438.shadows = i1439[2]
  i1438.anisotropicFiltering = i1439[3]
  i1438.antiAliasing = i1439[4]
  i1438.lodBias = i1439[5]
  i1438.shadowCascades = i1439[6]
  i1438.shadowDistance = i1439[7]
  i1438.shadowmaskMode = i1439[8]
  i1438.shadowProjection = i1439[9]
  i1438.shadowResolution = i1439[10]
  i1438.softParticles = !!i1439[11]
  i1438.softVegetation = !!i1439[12]
  i1438.activeColorSpace = i1439[13]
  i1438.desiredColorSpace = i1439[14]
  i1438.masterTextureLimit = i1439[15]
  i1438.maxQueuedFrames = i1439[16]
  i1438.particleRaycastBudget = i1439[17]
  i1438.pixelLightCount = i1439[18]
  i1438.realtimeReflectionProbes = !!i1439[19]
  i1438.shadowCascade2Split = i1439[20]
  i1438.shadowCascade4Split = new pc.Vec3( i1439[21], i1439[22], i1439[23] )
  i1438.streamingMipmapsActive = !!i1439[24]
  i1438.vSyncCount = i1439[25]
  i1438.asyncUploadBufferSize = i1439[26]
  i1438.asyncUploadTimeSlice = i1439[27]
  i1438.billboardsFaceCameraPosition = !!i1439[28]
  i1438.shadowNearPlaneOffset = i1439[29]
  i1438.streamingMipmapsMemoryBudget = i1439[30]
  i1438.maximumLODLevel = i1439[31]
  i1438.streamingMipmapsAddAllCameras = !!i1439[32]
  i1438.streamingMipmapsMaxLevelReduction = i1439[33]
  i1438.streamingMipmapsRenderersPerFrame = i1439[34]
  i1438.resolutionScalingFixedDPIFactor = i1439[35]
  i1438.streamingMipmapsMaxFileIORequests = i1439[36]
  i1438.currentQualityLevel = i1439[37]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1447 = data
  i1446.name = i1447[0]
  var i1449 = i1447[1]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1449[i + 0]) );
  }
  i1446.tos = i1448
  var i1451 = i1447[2]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1446.constant = i1450
  i1446.isValid = !!i1447[3]
  i1446.isHuman = !!i1447[4]
  i1446.hasRootMotion = !!i1447[5]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1455 = data
  i1454.hash = i1455[0]
  i1454.path = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1459 = data
  i1458.weight = i1459[0]
  i1458.vertices = i1459[1]
  i1458.normals = i1459[2]
  i1458.tangents = i1459[3]
  return i1458
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'm_ObjectArgument')
  i1460.m_ObjectArgumentAssemblyTypeName = i1461[2]
  i1460.m_IntArgument = i1461[3]
  i1460.m_FloatArgument = i1461[4]
  i1460.m_StringArgument = i1461[5]
  i1460.m_BoolArgument = !!i1461[6]
  return i1460
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1463 = data
  i1462.m_GlyphIndex = i1463[0]
  i1462.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1463[1], i1462.m_GlyphValueRecord)
  return i1462
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1464 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1465 = data
  i1464.m_XCoordinate = i1465[0]
  i1464.m_YCoordinate = i1465[1]
  return i1464
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1466 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1467 = data
  i1466.m_XPositionAdjustment = i1467[0]
  i1466.m_YPositionAdjustment = i1467[1]
  return i1466
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1469 = data
  i1468.xPlacement = i1469[0]
  i1468.yPlacement = i1469[1]
  i1468.xAdvance = i1469[2]
  i1468.yAdvance = i1469[3]
  return i1468
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1471 = data
  i1470.m_XPlacement = i1471[0]
  i1470.m_YPlacement = i1471[1]
  i1470.m_XAdvance = i1471[2]
  i1470.m_YAdvance = i1471[3]
  return i1470
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[52],"78":[56],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[56],"100":[37],"101":[102],"103":[102],"7":[6],"11":[8],"104":[6],"105":[37,6],"19":[6,13],"106":[6],"107":[13,6],"108":[37],"109":[13,6],"110":[6],"111":[112],"113":[112],"114":[112],"115":[6],"116":[6],"9":[7],"14":[13,6],"27":[6],"8":[7],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"18":[6],"124":[6],"125":[13,6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[13,6],"131":[6],"132":[4],"133":[4],"5":[4],"134":[4],"135":[56],"136":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","SelectPanel","UnityEngine.GameObject","UnityEngine.UI.AspectRatioFitter","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "21.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V06_HoaiTT_HuyNQ";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4791";

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

Deserializers.buildID = "f362ad2c-7abb-4b6e-81eb-489e1691d88f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

