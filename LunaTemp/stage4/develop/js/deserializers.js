var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointSpring' )
  var i733 = data
  i732.spring = i733[0]
  i732.damper = i733[1]
  i732.targetPosition = i733[2]
  return i732
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointMotor' )
  var i735 = data
  i734.m_TargetVelocity = i735[0]
  i734.m_Force = i735[1]
  i734.m_FreeSpin = i735[2]
  return i734
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointLimits' )
  var i737 = data
  i736.m_Min = i737[0]
  i736.m_Max = i737[1]
  i736.m_Bounciness = i737[2]
  i736.m_BounceMinVelocity = i737[3]
  i736.m_ContactDistance = i737[4]
  i736.minBounce = i737[5]
  i736.maxBounce = i737[6]
  return i736
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointDrive' )
  var i739 = data
  i738.m_PositionSpring = i739[0]
  i738.m_PositionDamper = i739[1]
  i738.m_MaximumForce = i739[2]
  i738.m_UseAcceleration = i739[3]
  return i738
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i741 = data
  i740.m_Spring = i741[0]
  i740.m_Damper = i741[1]
  return i740
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i743 = data
  i742.m_Limit = i743[0]
  i742.m_Bounciness = i743[1]
  i742.m_ContactDistance = i743[2]
  return i742
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i745 = data
  i744.m_ExtremumSlip = i745[0]
  i744.m_ExtremumValue = i745[1]
  i744.m_AsymptoteSlip = i745[2]
  i744.m_AsymptoteValue = i745[3]
  i744.m_Stiffness = i745[4]
  return i744
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i747 = data
  i746.m_LowerAngle = i747[0]
  i746.m_UpperAngle = i747[1]
  return i746
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i749 = data
  i748.m_MotorSpeed = i749[0]
  i748.m_MaximumMotorTorque = i749[1]
  return i748
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i751 = data
  i750.m_DampingRatio = i751[0]
  i750.m_Frequency = i751[1]
  i750.m_Angle = i751[2]
  return i750
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i753 = data
  i752.m_LowerTranslation = i753[0]
  i752.m_UpperTranslation = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i755 = data
  i754.name = i755[0]
  i754.width = i755[1]
  i754.height = i755[2]
  i754.mipmapCount = i755[3]
  i754.anisoLevel = i755[4]
  i754.filterMode = i755[5]
  i754.hdr = !!i755[6]
  i754.format = i755[7]
  i754.wrapMode = i755[8]
  i754.alphaIsTransparency = !!i755[9]
  i754.alphaSource = i755[10]
  i754.graphicsFormat = i755[11]
  i754.sRGBTexture = !!i755[12]
  i754.desiredColorSpace = i755[13]
  i754.wrapU = i755[14]
  i754.wrapV = i755[15]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i756 = root || new pc.UnityMaterial()
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'shader')
  i756.renderQueue = i757[3]
  i756.enableInstancing = !!i757[4]
  var i759 = i757[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i759[i + 0]) );
  }
  i756.floatParameters = i758
  var i761 = i757[6]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i761[i + 0]) );
  }
  i756.colorParameters = i760
  var i763 = i757[7]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i763[i + 0]) );
  }
  i756.vectorParameters = i762
  var i765 = i757[8]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i765[i + 0]) );
  }
  i756.textureParameters = i764
  var i767 = i757[9]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i767[i + 0]) );
  }
  i756.materialFlags = i766
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = new pc.Color(i775[1], i775[2], i775[3], i775[4])
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i779 = data
  i778.name = i779[0]
  i778.value = new pc.Vec4( i779[1], i779[2], i779[3], i779[4] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i783 = data
  i782.name = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'value')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i787 = data
  i786.name = i787[0]
  i786.enabled = !!i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i789 = data
  i788.position = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.scale = new pc.Vec3( i789[3], i789[4], i789[5] )
  i788.rotation = new pc.Quat(i789[6], i789[7], i789[8], i789[9])
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'sharedMesh')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'additionalVertexStreams')
  i792.enabled = !!i793[2]
  request.r(i793[3], i793[4], 0, i792, 'sharedMaterial')
  var i795 = i793[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[6]
  i792.shadowCastingMode = i793[7]
  i792.sortingLayerID = i793[8]
  i792.sortingOrder = i793[9]
  i792.lightmapIndex = i793[10]
  i792.lightmapSceneIndex = i793[11]
  i792.lightmapScaleOffset = new pc.Vec4( i793[12], i793[13], i793[14], i793[15] )
  i792.lightProbeUsage = i793[16]
  i792.reflectionProbeUsage = i793[17]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i799 = data
  i798.name = i799[0]
  i798.tagId = i799[1]
  i798.enabled = !!i799[2]
  i798.isStatic = !!i799[3]
  i798.layer = i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i801 = data
  i800.name = i801[0]
  i800.halfPrecision = !!i801[1]
  i800.useSimplification = !!i801[2]
  i800.useUInt32IndexFormat = !!i801[3]
  i800.vertexCount = i801[4]
  i800.aabb = i801[5]
  var i803 = i801[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( !!i803[i + 0] );
  }
  i800.streams = i802
  i800.vertices = i801[7]
  var i805 = i801[8]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i805[i + 0]) );
  }
  i800.subMeshes = i804
  var i807 = i801[9]
  var i806 = []
  for(var i = 0; i < i807.length; i += 16) {
    i806.push( new pc.Mat4().setData(i807[i + 0], i807[i + 1], i807[i + 2], i807[i + 3],  i807[i + 4], i807[i + 5], i807[i + 6], i807[i + 7],  i807[i + 8], i807[i + 9], i807[i + 10], i807[i + 11],  i807[i + 12], i807[i + 13], i807[i + 14], i807[i + 15]) );
  }
  i800.bindposes = i806
  var i809 = i801[10]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i809[i + 0]) );
  }
  i800.blendShapes = i808
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i815 = data
  i814.triangles = i815[0]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i821 = data
  i820.name = i821[0]
  var i823 = i821[1]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i823[i + 0]) );
  }
  i820.frames = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i825 = data
  i824.name = i825[0]
  i824.atlasId = i825[1]
  i824.mipmapCount = i825[2]
  i824.hdr = !!i825[3]
  i824.size = i825[4]
  i824.anisoLevel = i825[5]
  i824.filterMode = i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 4) {
    i826.push( UnityEngine.Rect.MinMaxRect(i827[i + 0], i827[i + 1], i827[i + 2], i827[i + 3]) );
  }
  i824.rects = i826
  i824.wrapU = i825[8]
  i824.wrapV = i825[9]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i831 = data
  i830.name = i831[0]
  i830.index = i831[1]
  i830.startup = !!i831[2]
  return i830
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_FirstSelected')
  i832.m_sendNavigationEvents = !!i833[2]
  i832.m_DragThreshold = i833[3]
  return i832
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i835 = data
  i834.m_HorizontalAxis = i835[0]
  i834.m_VerticalAxis = i835[1]
  i834.m_SubmitButton = i835[2]
  i834.m_CancelButton = i835[3]
  i834.m_InputActionsPerSecond = i835[4]
  i834.m_RepeatDelay = i835[5]
  i834.m_ForceModuleActive = !!i835[6]
  i834.m_SendPointerHoverToParent = !!i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i837 = data
  i836.pivot = new pc.Vec2( i837[0], i837[1] )
  i836.anchorMin = new pc.Vec2( i837[2], i837[3] )
  i836.anchorMax = new pc.Vec2( i837[4], i837[5] )
  i836.sizeDelta = new pc.Vec2( i837[6], i837[7] )
  i836.anchoredPosition3D = new pc.Vec3( i837[8], i837[9], i837[10] )
  i836.rotation = new pc.Quat(i837[11], i837[12], i837[13], i837[14])
  i836.scale = new pc.Vec3( i837[15], i837[16], i837[17] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i839 = data
  i838.planeDistance = i839[0]
  i838.referencePixelsPerUnit = i839[1]
  i838.isFallbackOverlay = !!i839[2]
  i838.renderMode = i839[3]
  i838.renderOrder = i839[4]
  i838.sortingLayerName = i839[5]
  i838.sortingOrder = i839[6]
  i838.scaleFactor = i839[7]
  request.r(i839[8], i839[9], 0, i838, 'worldCamera')
  i838.overrideSorting = !!i839[10]
  i838.pixelPerfect = !!i839[11]
  i838.targetDisplay = i839[12]
  i838.overridePixelPerfect = !!i839[13]
  i838.enabled = !!i839[14]
  return i838
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i841 = data
  i840.m_UiScaleMode = i841[0]
  i840.m_ReferencePixelsPerUnit = i841[1]
  i840.m_ScaleFactor = i841[2]
  i840.m_ReferenceResolution = new pc.Vec2( i841[3], i841[4] )
  i840.m_ScreenMatchMode = i841[5]
  i840.m_MatchWidthOrHeight = i841[6]
  i840.m_PhysicalUnit = i841[7]
  i840.m_FallbackScreenDPI = i841[8]
  i840.m_DefaultSpriteDPI = i841[9]
  i840.m_DynamicPixelsPerUnit = i841[10]
  i840.m_PresetInfoIsWorld = !!i841[11]
  return i840
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i843 = data
  i842.m_IgnoreReversedGraphics = !!i843[0]
  i842.m_BlockingObjects = i843[1]
  i842.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i843[2] )
  return i842
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i844 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i845 = data
  i844._referenceResolution = new pc.Vec2( i845[0], i845[1] )
  i844._portraitMatch = i845[2]
  i844._landscapeMatch = i845[3]
  i844._squareMatch = i845[4]
  i844._portraitAspectThreshold = i845[5]
  i844._landscapeAspectThreshold = i845[6]
  i844._aspectEpsilon = i845[7]
  return i844
}

Deserializers["Joystick"] = function (request, data, root) {
  var i846 = root || request.c( 'Joystick' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'background')
  request.r(i847[2], i847[3], 0, i846, 'joy')
  i846.deadZone = i847[4]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i849 = data
  i848.cullTransparentMesh = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Image' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Sprite')
  i850.m_Type = i851[2]
  i850.m_PreserveAspect = !!i851[3]
  i850.m_FillCenter = !!i851[4]
  i850.m_FillMethod = i851[5]
  i850.m_FillAmount = i851[6]
  i850.m_FillClockwise = !!i851[7]
  i850.m_FillOrigin = i851[8]
  i850.m_UseSpriteMesh = !!i851[9]
  i850.m_PixelsPerUnitMultiplier = i851[10]
  request.r(i851[11], i851[12], 0, i850, 'm_Material')
  i850.m_Maskable = !!i851[13]
  i850.m_Color = new pc.Color(i851[14], i851[15], i851[16], i851[17])
  i850.m_RaycastTarget = !!i851[18]
  i850.m_RaycastPadding = new pc.Vec4( i851[19], i851[20], i851[21], i851[22] )
  return i850
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Button' )
  var i853 = data
  i852.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i853[0], i852.m_OnClick)
  i852.m_Navigation = request.d('UnityEngine.UI.Navigation', i853[1], i852.m_Navigation)
  i852.m_Transition = i853[2]
  i852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i853[3], i852.m_Colors)
  i852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i853[4], i852.m_SpriteState)
  i852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i853[5], i852.m_AnimationTriggers)
  i852.m_Interactable = !!i853[6]
  request.r(i853[7], i853[8], 0, i852, 'm_TargetGraphic')
  return i852
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i855 = data
  i854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i855[0], i854.m_PersistentCalls)
  return i854
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('UnityEngine.Events.PersistentCall', i859[i + 0]));
  }
  i856.m_Calls = i858
  return i856
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Target')
  i862.m_TargetAssemblyTypeName = i863[2]
  i862.m_MethodName = i863[3]
  i862.m_Mode = i863[4]
  i862.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i863[5], i862.m_Arguments)
  i862.m_CallState = i863[6]
  return i862
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i865 = data
  i864.m_Mode = i865[0]
  i864.m_WrapAround = !!i865[1]
  request.r(i865[2], i865[3], 0, i864, 'm_SelectOnUp')
  request.r(i865[4], i865[5], 0, i864, 'm_SelectOnDown')
  request.r(i865[6], i865[7], 0, i864, 'm_SelectOnLeft')
  request.r(i865[8], i865[9], 0, i864, 'm_SelectOnRight')
  return i864
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i867 = data
  i866.m_NormalColor = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.m_HighlightedColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.m_PressedColor = new pc.Color(i867[8], i867[9], i867[10], i867[11])
  i866.m_SelectedColor = new pc.Color(i867[12], i867[13], i867[14], i867[15])
  i866.m_DisabledColor = new pc.Color(i867[16], i867[17], i867[18], i867[19])
  i866.m_ColorMultiplier = i867[20]
  i866.m_FadeDuration = i867[21]
  return i866
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_HighlightedSprite')
  request.r(i869[2], i869[3], 0, i868, 'm_PressedSprite')
  request.r(i869[4], i869[5], 0, i868, 'm_SelectedSprite')
  request.r(i869[6], i869[7], 0, i868, 'm_DisabledSprite')
  return i868
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i871 = data
  i870.m_NormalTrigger = i871[0]
  i870.m_HighlightedTrigger = i871[1]
  i870.m_PressedTrigger = i871[2]
  i870.m_SelectedTrigger = i871[3]
  i870.m_DisabledTrigger = i871[4]
  return i870
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i872 = root || request.c( 'JumpButton' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'button')
  return i872
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Mask' )
  var i875 = data
  i874.m_ShowMaskGraphic = !!i875[0]
  return i874
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i877 = data
  i876.m_hasFontAssetChanged = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'm_baseMaterial')
  i876.m_maskOffset = new pc.Vec4( i877[3], i877[4], i877[5], i877[6] )
  i876.m_text = i877[7]
  i876.m_isRightToLeft = !!i877[8]
  request.r(i877[9], i877[10], 0, i876, 'm_fontAsset')
  request.r(i877[11], i877[12], 0, i876, 'm_sharedMaterial')
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.m_fontSharedMaterials = i878
  request.r(i877[14], i877[15], 0, i876, 'm_fontMaterial')
  var i881 = i877[16]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i876.m_fontMaterials = i880
  i876.m_fontColor32 = UnityEngine.Color32.ConstructColor(i877[17], i877[18], i877[19], i877[20])
  i876.m_fontColor = new pc.Color(i877[21], i877[22], i877[23], i877[24])
  i876.m_enableVertexGradient = !!i877[25]
  i876.m_colorMode = i877[26]
  i876.m_fontColorGradient = request.d('TMPro.VertexGradient', i877[27], i876.m_fontColorGradient)
  request.r(i877[28], i877[29], 0, i876, 'm_fontColorGradientPreset')
  request.r(i877[30], i877[31], 0, i876, 'm_spriteAsset')
  i876.m_tintAllSprites = !!i877[32]
  request.r(i877[33], i877[34], 0, i876, 'm_StyleSheet')
  i876.m_TextStyleHashCode = i877[35]
  i876.m_overrideHtmlColors = !!i877[36]
  i876.m_faceColor = UnityEngine.Color32.ConstructColor(i877[37], i877[38], i877[39], i877[40])
  i876.m_fontSize = i877[41]
  i876.m_fontSizeBase = i877[42]
  i876.m_fontWeight = i877[43]
  i876.m_enableAutoSizing = !!i877[44]
  i876.m_fontSizeMin = i877[45]
  i876.m_fontSizeMax = i877[46]
  i876.m_fontStyle = i877[47]
  i876.m_HorizontalAlignment = i877[48]
  i876.m_VerticalAlignment = i877[49]
  i876.m_textAlignment = i877[50]
  i876.m_characterSpacing = i877[51]
  i876.m_wordSpacing = i877[52]
  i876.m_lineSpacing = i877[53]
  i876.m_lineSpacingMax = i877[54]
  i876.m_paragraphSpacing = i877[55]
  i876.m_charWidthMaxAdj = i877[56]
  i876.m_TextWrappingMode = i877[57]
  i876.m_wordWrappingRatios = i877[58]
  i876.m_overflowMode = i877[59]
  request.r(i877[60], i877[61], 0, i876, 'm_linkedTextComponent')
  request.r(i877[62], i877[63], 0, i876, 'parentLinkedComponent')
  i876.m_enableKerning = !!i877[64]
  var i883 = i877[65]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(i883[i + 0]);
  }
  i876.m_ActiveFontFeatures = i882
  i876.m_enableExtraPadding = !!i877[66]
  i876.checkPaddingRequired = !!i877[67]
  i876.m_isRichText = !!i877[68]
  i876.m_parseCtrlCharacters = !!i877[69]
  i876.m_isOrthographic = !!i877[70]
  i876.m_isCullingEnabled = !!i877[71]
  i876.m_horizontalMapping = i877[72]
  i876.m_verticalMapping = i877[73]
  i876.m_uvLineOffset = i877[74]
  i876.m_geometrySortingOrder = i877[75]
  i876.m_IsTextObjectScaleStatic = !!i877[76]
  i876.m_VertexBufferAutoSizeReduction = !!i877[77]
  i876.m_useMaxVisibleDescender = !!i877[78]
  i876.m_pageToDisplay = i877[79]
  i876.m_margin = new pc.Vec4( i877[80], i877[81], i877[82], i877[83] )
  i876.m_isUsingLegacyAnimationComponent = !!i877[84]
  i876.m_isVolumetricText = !!i877[85]
  request.r(i877[86], i877[87], 0, i876, 'm_Material')
  i876.m_EmojiFallbackSupport = !!i877[88]
  i876.m_Maskable = !!i877[89]
  i876.m_Color = new pc.Color(i877[90], i877[91], i877[92], i877[93])
  i876.m_RaycastTarget = !!i877[94]
  i876.m_RaycastPadding = new pc.Vec4( i877[95], i877[96], i877[97], i877[98] )
  return i876
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.VertexGradient' )
  var i885 = data
  i884.topLeft = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.topRight = new pc.Color(i885[4], i885[5], i885[6], i885[7])
  i884.bottomLeft = new pc.Color(i885[8], i885[9], i885[10], i885[11])
  i884.bottomRight = new pc.Color(i885[12], i885[13], i885[14], i885[15])
  return i884
}

Deserializers["TutController"] = function (request, data, root) {
  var i888 = root || request.c( 'TutController' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'tutScene')
  request.r(i889[2], i889[3], 0, i888, 'startTut')
  request.r(i889[4], i889[5], 0, i888, 'playTut')
  request.r(i889[6], i889[7], 0, i888, 'farTut')
  request.r(i889[8], i889[9], 0, i888, 'failTut')
  return i888
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i890 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i891 = data
  i890.targetIsSelf = !!i891[0]
  request.r(i891[1], i891[2], 0, i890, 'targetGO')
  i890.tweenTargetIsTargetGO = !!i891[3]
  i890.delay = i891[4]
  i890.duration = i891[5]
  i890.easeType = i891[6]
  i890.easeCurve = new pc.AnimationCurve( { keys_flow: i891[7] } )
  i890.loopType = i891[8]
  i890.loops = i891[9]
  i890.id = i891[10]
  i890.isRelative = !!i891[11]
  i890.isFrom = !!i891[12]
  i890.isIndependentUpdate = !!i891[13]
  i890.autoKill = !!i891[14]
  i890.autoGenerate = !!i891[15]
  i890.isActive = !!i891[16]
  i890.isValid = !!i891[17]
  request.r(i891[18], i891[19], 0, i890, 'target')
  i890.animationType = i891[20]
  i890.targetType = i891[21]
  i890.forcedTargetType = i891[22]
  i890.autoPlay = !!i891[23]
  i890.useTargetAsV3 = !!i891[24]
  i890.endValueFloat = i891[25]
  i890.endValueV3 = new pc.Vec3( i891[26], i891[27], i891[28] )
  i890.endValueV2 = new pc.Vec2( i891[29], i891[30] )
  i890.endValueColor = new pc.Color(i891[31], i891[32], i891[33], i891[34])
  i890.endValueString = i891[35]
  i890.endValueRect = UnityEngine.Rect.MinMaxRect(i891[36], i891[37], i891[38], i891[39])
  request.r(i891[40], i891[41], 0, i890, 'endValueTransform')
  i890.optionalBool0 = !!i891[42]
  i890.optionalBool1 = !!i891[43]
  i890.optionalFloat0 = i891[44]
  i890.optionalInt0 = i891[45]
  i890.optionalRotationMode = i891[46]
  i890.optionalScrambleMode = i891[47]
  i890.optionalShakeRandomnessMode = i891[48]
  i890.optionalString = i891[49]
  i890.updateType = i891[50]
  i890.isSpeedBased = !!i891[51]
  i890.hasOnStart = !!i891[52]
  i890.hasOnPlay = !!i891[53]
  i890.hasOnUpdate = !!i891[54]
  i890.hasOnStepComplete = !!i891[55]
  i890.hasOnComplete = !!i891[56]
  i890.hasOnTweenCreated = !!i891[57]
  i890.hasOnRewind = !!i891[58]
  i890.onStart = request.d('UnityEngine.Events.UnityEvent', i891[59], i890.onStart)
  i890.onPlay = request.d('UnityEngine.Events.UnityEvent', i891[60], i890.onPlay)
  i890.onUpdate = request.d('UnityEngine.Events.UnityEvent', i891[61], i890.onUpdate)
  i890.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i891[62], i890.onStepComplete)
  i890.onComplete = request.d('UnityEngine.Events.UnityEvent', i891[63], i890.onComplete)
  i890.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i891[64], i890.onTweenCreated)
  i890.onRewind = request.d('UnityEngine.Events.UnityEvent', i891[65], i890.onRewind)
  return i890
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i894 = root || request.c( 'HideOnPointer' )
  var i895 = data
  i894.OnPointerDownEvent = request.d('System.Action', i895[0], i894.OnPointerDownEvent)
  return i894
}

Deserializers["System.Action"] = function (request, data, root) {
  var i896 = root || request.c( 'System.Action' )
  var i897 = data
  return i896
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i898 = root || request.c( 'MorphSelectionFlow' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('MorphSelectionFlow+Morph', i901[i + 0]) );
  }
  i898.morphs = i900
  request.r(i899[1], i899[2], 0, i898, 'selectionPanel')
  request.r(i899[3], i899[4], 0, i898, 'previewPanel')
  request.r(i899[5], i899[6], 0, i898, 'backdrop')
  request.r(i899[7], i899[8], 0, i898, 'previewImage')
  i898.previewPortraitSize = new pc.Vec2( i899[9], i899[10] )
  request.r(i899[11], i899[12], 0, i898, 'aura')
  request.r(i899[13], i899[14], 0, i898, 'selectButton')
  request.r(i899[15], i899[16], 0, i898, 'unlockedMessage')
  request.r(i899[17], i899[18], 0, i898, 'revealCamera')
  request.r(i899[19], i899[20], 0, i898, 'spawnPoint')
  var i903 = i899[21]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i898.hideOnStart = i902
  var i905 = i899[22]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i898.disableOnStart = i904
  i898.orbitDuration = i899[23]
  i898.unlockedMessageDuration = i899[24]
  i898.auraSpeed = i899[25]
  request.r(i899[26], i899[27], 0, i898, 'auraSfx')
  request.r(i899[28], i899[29], 0, i898, 'orbitSfx')
  return i898
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i908 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'prefab')
  request.r(i909[2], i909[3], 0, i908, 'portrait')
  request.r(i909[4], i909[5], 0, i908, 'card')
  request.r(i909[6], i909[7], 0, i908, 'unlockedBadge')
  return i908
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i914 = root || request.c( 'MorphTitlePulse' )
  var i915 = data
  i914.scaleMultiplier = i915[0]
  i914.duration = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i917 = data
  i916.center = new pc.Vec3( i917[0], i917[1], i917[2] )
  i916.size = new pc.Vec3( i917[3], i917[4], i917[5] )
  i916.enabled = !!i917[6]
  i916.isTrigger = !!i917[7]
  request.r(i917[8], i917[9], 0, i916, 'material')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i919 = data
  i918.mass = i919[0]
  i918.drag = i919[1]
  i918.angularDrag = i919[2]
  i918.useGravity = !!i919[3]
  i918.isKinematic = !!i919[4]
  i918.constraints = i919[5]
  i918.maxAngularVelocity = i919[6]
  i918.collisionDetectionMode = i919[7]
  i918.interpolation = i919[8]
  return i918
}

Deserializers["Gift"] = function (request, data, root) {
  var i920 = root || request.c( 'Gift' )
  var i921 = data
  i920.collectDone = !!i921[0]
  var i923 = i921[1]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.hints = i922
  request.r(i921[2], i921[3], 0, i920, 'collectSound')
  request.r(i921[4], i921[5], 0, i920, 'collectEffect')
  request.r(i921[6], i921[7], 0, i920, 'arrow')
  return i920
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i926 = root || request.c( 'SoundHint' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'Sound')
  request.r(i927[2], i927[3], 0, i926, 'Source')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'mesh')
  i928.meshCount = i929[2]
  i928.activeVertexStreamsCount = i929[3]
  i928.alignment = i929[4]
  i928.renderMode = i929[5]
  i928.sortMode = i929[6]
  i928.lengthScale = i929[7]
  i928.velocityScale = i929[8]
  i928.cameraVelocityScale = i929[9]
  i928.normalDirection = i929[10]
  i928.sortingFudge = i929[11]
  i928.minParticleSize = i929[12]
  i928.maxParticleSize = i929[13]
  i928.pivot = new pc.Vec3( i929[14], i929[15], i929[16] )
  request.r(i929[17], i929[18], 0, i928, 'trailMaterial')
  i928.applyActiveColorSpace = !!i929[19]
  i928.enabled = !!i929[20]
  request.r(i929[21], i929[22], 0, i928, 'sharedMaterial')
  var i931 = i929[23]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.sharedMaterials = i930
  i928.receiveShadows = !!i929[24]
  i928.shadowCastingMode = i929[25]
  i928.sortingLayerID = i929[26]
  i928.sortingOrder = i929[27]
  i928.lightmapIndex = i929[28]
  i928.lightmapSceneIndex = i929[29]
  i928.lightmapScaleOffset = new pc.Vec4( i929[30], i929[31], i929[32], i929[33] )
  i928.lightProbeUsage = i929[34]
  i928.reflectionProbeUsage = i929[35]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i933 = data
  i932.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i933[0], i932.main)
  i932.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i933[1], i932.colorBySpeed)
  i932.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i933[2], i932.colorOverLifetime)
  i932.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i933[3], i932.emission)
  i932.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i933[4], i932.rotationBySpeed)
  i932.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i933[5], i932.rotationOverLifetime)
  i932.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i933[6], i932.shape)
  i932.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i933[7], i932.sizeBySpeed)
  i932.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i933[8], i932.sizeOverLifetime)
  i932.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i933[9], i932.textureSheetAnimation)
  i932.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i933[10], i932.velocityOverLifetime)
  i932.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i933[11], i932.noise)
  i932.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i933[12], i932.inheritVelocity)
  i932.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i933[13], i932.forceOverLifetime)
  i932.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i933[14], i932.limitVelocityOverLifetime)
  i932.useAutoRandomSeed = !!i933[15]
  i932.randomSeed = i933[16]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemMain()
  var i935 = data
  i934.duration = i935[0]
  i934.loop = !!i935[1]
  i934.prewarm = !!i935[2]
  i934.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[3], i934.startDelay)
  i934.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[4], i934.startLifetime)
  i934.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[5], i934.startSpeed)
  i934.startSize3D = !!i935[6]
  i934.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[7], i934.startSizeX)
  i934.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[8], i934.startSizeY)
  i934.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[9], i934.startSizeZ)
  i934.startRotation3D = !!i935[10]
  i934.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[11], i934.startRotationX)
  i934.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[12], i934.startRotationY)
  i934.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[13], i934.startRotationZ)
  i934.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i935[14], i934.startColor)
  i934.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[15], i934.gravityModifier)
  i934.simulationSpace = i935[16]
  request.r(i935[17], i935[18], 0, i934, 'customSimulationSpace')
  i934.simulationSpeed = i935[19]
  i934.useUnscaledTime = !!i935[20]
  i934.scalingMode = i935[21]
  i934.playOnAwake = !!i935[22]
  i934.maxParticles = i935[23]
  i934.emitterVelocityMode = i935[24]
  i934.stopAction = i935[25]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i936 = root || new pc.MinMaxCurve()
  var i937 = data
  i936.mode = i937[0]
  i936.curveMin = new pc.AnimationCurve( { keys_flow: i937[1] } )
  i936.curveMax = new pc.AnimationCurve( { keys_flow: i937[2] } )
  i936.curveMultiplier = i937[3]
  i936.constantMin = i937[4]
  i936.constantMax = i937[5]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i938 = root || new pc.MinMaxGradient()
  var i939 = data
  i938.mode = i939[0]
  i938.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i939[1], i938.gradientMin)
  i938.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i939[2], i938.gradientMax)
  i938.colorMin = new pc.Color(i939[3], i939[4], i939[5], i939[6])
  i938.colorMax = new pc.Color(i939[7], i939[8], i939[9], i939[10])
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i941 = data
  i940.mode = i941[0]
  var i943 = i941[1]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i943[i + 0]) );
  }
  i940.colorKeys = i942
  var i945 = i941[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i945[i + 0]) );
  }
  i940.alphaKeys = i944
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemColorBySpeed()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i947[1], i946.color)
  i946.range = new pc.Vec2( i947[2], i947[3] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i951 = data
  i950.color = new pc.Color(i951[0], i951[1], i951[2], i951[3])
  i950.time = i951[4]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i955 = data
  i954.alpha = i955[0]
  i954.time = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemColorOverLifetime()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i957[1], i956.color)
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemEmitter()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.rateOverTime)
  i958.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.rateOverDistance)
  var i961 = i959[3]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i961[i + 0]) );
  }
  i958.bursts = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemBurst()
  var i965 = data
  i964.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[0], i964.count)
  i964.cycleCount = i965[1]
  i964.minCount = i965[2]
  i964.maxCount = i965[3]
  i964.repeatInterval = i965[4]
  i964.time = i965[5]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemRotationBySpeed()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.separateAxes = !!i967[4]
  i966.range = new pc.Vec2( i967[5], i967[6] )
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemRotationOverLifetime()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[1], i968.x)
  i968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.y)
  i968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.z)
  i968.separateAxes = !!i969[4]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemShape()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.shapeType = i971[1]
  i970.randomDirectionAmount = i971[2]
  i970.sphericalDirectionAmount = i971[3]
  i970.randomPositionAmount = i971[4]
  i970.alignToDirection = !!i971[5]
  i970.radius = i971[6]
  i970.radiusMode = i971[7]
  i970.radiusSpread = i971[8]
  i970.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[9], i970.radiusSpeed)
  i970.radiusThickness = i971[10]
  i970.angle = i971[11]
  i970.length = i971[12]
  i970.boxThickness = new pc.Vec3( i971[13], i971[14], i971[15] )
  i970.meshShapeType = i971[16]
  request.r(i971[17], i971[18], 0, i970, 'mesh')
  request.r(i971[19], i971[20], 0, i970, 'meshRenderer')
  request.r(i971[21], i971[22], 0, i970, 'skinnedMeshRenderer')
  i970.useMeshMaterialIndex = !!i971[23]
  i970.meshMaterialIndex = i971[24]
  i970.useMeshColors = !!i971[25]
  i970.normalOffset = i971[26]
  i970.arc = i971[27]
  i970.arcMode = i971[28]
  i970.arcSpread = i971[29]
  i970.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[30], i970.arcSpeed)
  i970.donutRadius = i971[31]
  i970.position = new pc.Vec3( i971[32], i971[33], i971[34] )
  i970.rotation = new pc.Vec3( i971[35], i971[36], i971[37] )
  i970.scale = new pc.Vec3( i971[38], i971[39], i971[40] )
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemSizeBySpeed()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.separateAxes = !!i973[4]
  i972.range = new pc.Vec2( i973[5], i973[6] )
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemSizeOverLifetime()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.x)
  i974.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.y)
  i974.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.z)
  i974.separateAxes = !!i975[4]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.mode = i977[1]
  i976.animation = i977[2]
  i976.numTilesX = i977[3]
  i976.numTilesY = i977[4]
  i976.useRandomRow = !!i977[5]
  i976.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[6], i976.frameOverTime)
  i976.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[7], i976.startFrame)
  i976.cycleCount = i977[8]
  i976.rowIndex = i977[9]
  i976.flipU = i977[10]
  i976.flipV = i977[11]
  i976.spriteCount = i977[12]
  var i979 = i977[13]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.sprites = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[1], i982.x)
  i982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[2], i982.y)
  i982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[3], i982.z)
  i982.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[4], i982.radial)
  i982.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[5], i982.speedModifier)
  i982.space = i983[6]
  i982.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[7], i982.orbitalX)
  i982.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[8], i982.orbitalY)
  i982.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[9], i982.orbitalZ)
  i982.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[10], i982.orbitalOffsetX)
  i982.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[11], i982.orbitalOffsetY)
  i982.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[12], i982.orbitalOffsetZ)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i984 = root || new pc.ParticleSystemNoise()
  var i985 = data
  i984.enabled = !!i985[0]
  i984.separateAxes = !!i985[1]
  i984.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[2], i984.strengthX)
  i984.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[3], i984.strengthY)
  i984.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[4], i984.strengthZ)
  i984.frequency = i985[5]
  i984.damping = !!i985[6]
  i984.octaveCount = i985[7]
  i984.octaveMultiplier = i985[8]
  i984.octaveScale = i985[9]
  i984.quality = i985[10]
  i984.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[11], i984.scrollSpeed)
  i984.scrollSpeedMultiplier = i985[12]
  i984.remapEnabled = !!i985[13]
  i984.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[14], i984.remapX)
  i984.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[15], i984.remapY)
  i984.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[16], i984.remapZ)
  i984.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[17], i984.positionAmount)
  i984.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[18], i984.rotationAmount)
  i984.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[19], i984.sizeAmount)
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i986 = root || new pc.ParticleSystemInheritVelocity()
  var i987 = data
  i986.enabled = !!i987[0]
  i986.mode = i987[1]
  i986.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[2], i986.curve)
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemForceOverLifetime()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[1], i988.x)
  i988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[2], i988.y)
  i988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[3], i988.z)
  i988.space = i989[4]
  i988.randomized = !!i989[5]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[1], i990.limit)
  i990.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.limitX)
  i990.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[3], i990.limitY)
  i990.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[4], i990.limitZ)
  i990.dampen = i991[5]
  i990.separateAxes = !!i991[6]
  i990.space = i991[7]
  i990.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[8], i990.drag)
  i990.multiplyDragByParticleSize = !!i991[9]
  i990.multiplyDragByParticleVelocity = !!i991[10]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i993 = data
  i992.color = new pc.Color(i993[0], i993[1], i993[2], i993[3])
  request.r(i993[4], i993[5], 0, i992, 'sprite')
  i992.flipX = !!i993[6]
  i992.flipY = !!i993[7]
  i992.drawMode = i993[8]
  i992.size = new pc.Vec2( i993[9], i993[10] )
  i992.tileMode = i993[11]
  i992.adaptiveModeThreshold = i993[12]
  i992.maskInteraction = i993[13]
  i992.spriteSortPoint = i993[14]
  i992.enabled = !!i993[15]
  request.r(i993[16], i993[17], 0, i992, 'sharedMaterial')
  var i995 = i993[18]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sharedMaterials = i994
  i992.receiveShadows = !!i993[19]
  i992.shadowCastingMode = i993[20]
  i992.sortingLayerID = i993[21]
  i992.sortingOrder = i993[22]
  i992.lightmapIndex = i993[23]
  i992.lightmapSceneIndex = i993[24]
  i992.lightmapScaleOffset = new pc.Vec4( i993[25], i993[26], i993[27], i993[28] )
  i992.lightProbeUsage = i993[29]
  i992.reflectionProbeUsage = i993[30]
  return i992
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i996 = root || request.c( 'CharacterMotor' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'characterInput')
  request.r(i997[2], i997[3], 0, i996, 'cameraYawTransform')
  request.r(i997[4], i997[5], 0, i996, '_arrow')
  i996.moveSpeed = i997[6]
  i996.jumpHeight = i997[7]
  request.r(i997[8], i997[9], 0, i996, 'groundChecker')
  i996.gravity = i997[10]
  i996.enableStepClimb = !!i997[11]
  i996.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i997[12] )
  i996.maxStepHeight = i997[13]
  i996.stepCheckDistance = i997[14]
  i996.stepUpSpeed = i997[15]
  i996.stepUpAcceleration = i997[16]
  i996.minimumStepFacing = i997[17]
  request.r(i997[18], i997[19], 0, i996, 'controller')
  i996.autoRun = !!i997[20]
  return i996
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i998 = root || request.c( 'CharacterRotation' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'motor')
  i998.rotationSpeed = i999[2]
  return i998
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i1000 = root || request.c( 'CharacterAnimation' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'animator')
  request.r(i1001[2], i1001[3], 0, i1000, 'motor')
  i1000.speedChangeRate = i1001[4]
  i1000.groundedGraceTime = i1001[5]
  return i1000
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i1002 = root || request.c( 'CharacterCollect' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'motor')
  request.r(i1003[2], i1003[3], 0, i1002, 'avatar')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1005 = data
  i1004.center = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.radius = i1005[3]
  i1004.height = i1005[4]
  i1004.direction = i1005[5]
  i1004.enabled = !!i1005[6]
  i1004.isTrigger = !!i1005[7]
  request.r(i1005[8], i1005[9], 0, i1004, 'material')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'animatorController')
  request.r(i1007[2], i1007[3], 0, i1006, 'avatar')
  i1006.updateMode = i1007[4]
  i1006.hasTransformHierarchy = !!i1007[5]
  i1006.applyRootMotion = !!i1007[6]
  var i1009 = i1007[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1006.humanBones = i1008
  i1006.enabled = !!i1007[8]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'clip')
  request.r(i1013[2], i1013[3], 0, i1012, 'outputAudioMixerGroup')
  i1012.playOnAwake = !!i1013[4]
  i1012.loop = !!i1013[5]
  i1012.time = i1013[6]
  i1012.volume = i1013[7]
  i1012.pitch = i1013[8]
  i1012.enabled = !!i1013[9]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'sharedMesh')
  var i1017 = i1015[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.bones = i1016
  i1014.updateWhenOffscreen = !!i1015[3]
  i1014.localBounds = i1015[4]
  request.r(i1015[5], i1015[6], 0, i1014, 'rootBone')
  var i1019 = i1015[7]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1019[i + 0]) );
  }
  i1014.blendShapesWeights = i1018
  i1014.enabled = !!i1015[8]
  request.r(i1015[9], i1015[10], 0, i1014, 'sharedMaterial')
  var i1021 = i1015[11]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1014.sharedMaterials = i1020
  i1014.receiveShadows = !!i1015[12]
  i1014.shadowCastingMode = i1015[13]
  i1014.sortingLayerID = i1015[14]
  i1014.sortingOrder = i1015[15]
  i1014.lightmapIndex = i1015[16]
  i1014.lightmapSceneIndex = i1015[17]
  i1014.lightmapScaleOffset = new pc.Vec4( i1015[18], i1015[19], i1015[20], i1015[21] )
  i1014.lightProbeUsage = i1015[22]
  i1014.reflectionProbeUsage = i1015[23]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1025 = data
  i1024.weight = i1025[0]
  return i1024
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i1026 = root || request.c( 'GroundChecker' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'groundPoint')
  i1026.checkRadius = i1027[2]
  i1026.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1027[3] )
  return i1026
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1028 = root || request.c( 'CameraFollow' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'target')
  i1028.smoothTime = i1029[2]
  return i1028
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1030 = root || request.c( 'CameraLook' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'input')
  request.r(i1031[2], i1031[3], 0, i1030, 'yawPivot')
  request.r(i1031[4], i1031[5], 0, i1030, 'pitchPivot')
  i1030.minPitch = i1031[6]
  i1030.maxPitch = i1031[7]
  i1030.yaw = i1031[8]
  i1030.pitch = i1031[9]
  i1030.defaltYaw = i1031[10]
  i1030.defaltPitch = i1031[11]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1033 = data
  i1032.aspect = i1033[0]
  i1032.orthographic = !!i1033[1]
  i1032.orthographicSize = i1033[2]
  i1032.backgroundColor = new pc.Color(i1033[3], i1033[4], i1033[5], i1033[6])
  i1032.nearClipPlane = i1033[7]
  i1032.farClipPlane = i1033[8]
  i1032.fieldOfView = i1033[9]
  i1032.depth = i1033[10]
  i1032.clearFlags = i1033[11]
  i1032.cullingMask = i1033[12]
  i1032.rect = i1033[13]
  request.r(i1033[14], i1033[15], 0, i1032, 'targetTexture')
  i1032.usePhysicalProperties = !!i1033[16]
  i1032.focalLength = i1033[17]
  i1032.sensorSize = new pc.Vec2( i1033[18], i1033[19] )
  i1032.lensShift = new pc.Vec2( i1033[20], i1033[21] )
  i1032.gateFit = i1033[22]
  i1032.commandBufferCount = i1033[23]
  i1032.cameraType = i1033[24]
  i1032.enabled = !!i1033[25]
  return i1032
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1034 = root || request.c( 'CharacterInput' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'joystick')
  request.r(i1035[2], i1035[3], 0, i1034, 'jumpButton')
  return i1034
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1036 = root || request.c( 'InputManager' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'worldCamera')
  i1036.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1037[2] )
  i1036.touchSensitivity = i1037[3]
  i1036.mouseSensitivity = i1037[4]
  i1036.dragThreshold = i1037[5]
  return i1036
}

Deserializers["GameController"] = function (request, data, root) {
  var i1038 = root || request.c( 'GameController' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'morphSelection')
  i1038.timeToShowComplete = i1039[2]
  i1038.currentProgress = i1039[3]
  i1038.target = i1039[4]
  request.r(i1039[5], i1039[6], 0, i1038, 'progressText')
  request.r(i1039[7], i1039[8], 0, i1038, 'collectText')
  request.r(i1039[9], i1039[10], 0, i1038, '_cta')
  var i1041 = i1039[11]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1038.gifts = i1040
  request.r(i1039[12], i1039[13], 0, i1038, 'collect')
  request.r(i1039[14], i1039[15], 0, i1038, 'tut')
  request.r(i1039[16], i1039[17], 0, i1038, 'playerSpawn')
  request.r(i1039[18], i1039[19], 0, i1038, 'giftSpawn')
  request.r(i1039[20], i1039[21], 0, i1038, 'failUI')
  request.r(i1039[22], i1039[23], 0, i1038, 'playerMotor')
  i1038.failHeight = i1039[24]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'sharedMesh')
  i1052.convex = !!i1053[2]
  i1052.enabled = !!i1053[3]
  i1052.isTrigger = !!i1053[4]
  request.r(i1053[5], i1053[6], 0, i1052, 'material')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1055 = data
  i1054.ambientIntensity = i1055[0]
  i1054.reflectionIntensity = i1055[1]
  i1054.ambientMode = i1055[2]
  i1054.ambientLight = new pc.Color(i1055[3], i1055[4], i1055[5], i1055[6])
  i1054.ambientSkyColor = new pc.Color(i1055[7], i1055[8], i1055[9], i1055[10])
  i1054.ambientGroundColor = new pc.Color(i1055[11], i1055[12], i1055[13], i1055[14])
  i1054.ambientEquatorColor = new pc.Color(i1055[15], i1055[16], i1055[17], i1055[18])
  i1054.fogColor = new pc.Color(i1055[19], i1055[20], i1055[21], i1055[22])
  i1054.fogEndDistance = i1055[23]
  i1054.fogStartDistance = i1055[24]
  i1054.fogDensity = i1055[25]
  i1054.fog = !!i1055[26]
  request.r(i1055[27], i1055[28], 0, i1054, 'skybox')
  i1054.fogMode = i1055[29]
  var i1057 = i1055[30]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1057[i + 0]) );
  }
  i1054.lightmaps = i1056
  i1054.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1055[31], i1054.lightProbes)
  i1054.lightmapsMode = i1055[32]
  i1054.mixedBakeMode = i1055[33]
  i1054.environmentLightingMode = i1055[34]
  i1054.ambientProbe = new pc.SphericalHarmonicsL2(i1055[35])
  request.r(i1055[36], i1055[37], 0, i1054, 'customReflection')
  request.r(i1055[38], i1055[39], 0, i1054, 'defaultReflection')
  i1054.defaultReflectionMode = i1055[40]
  i1054.defaultReflectionResolution = i1055[41]
  i1054.sunLightObjectId = i1055[42]
  i1054.pixelLightCount = i1055[43]
  i1054.defaultReflectionHDR = !!i1055[44]
  i1054.hasLightDataAsset = !!i1055[45]
  i1054.hasManualGenerate = !!i1055[46]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'lightmapColor')
  request.r(i1061[2], i1061[3], 0, i1060, 'lightmapDirection')
  request.r(i1061[4], i1061[5], 0, i1060, 'shadowMask')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1062 = root || new UnityEngine.LightProbes()
  var i1063 = data
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1073[i + 0]));
  }
  i1070.ShaderCompilationErrors = i1072
  i1070.name = i1071[1]
  i1070.guid = i1071[2]
  var i1075 = i1071[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.shaderDefinedKeywords = i1074
  var i1077 = i1071[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1077[i + 0]) );
  }
  i1070.passes = i1076
  var i1079 = i1071[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1079[i + 0]) );
  }
  i1070.usePasses = i1078
  var i1081 = i1071[6]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1081[i + 0]) );
  }
  i1070.defaultParameterValues = i1080
  request.r(i1071[7], i1071[8], 0, i1070, 'unityFallbackShader')
  i1070.readDepth = !!i1071[9]
  i1070.hasDepthOnlyPass = !!i1071[10]
  i1070.isCreatedByShaderGraph = !!i1071[11]
  i1070.disableBatching = !!i1071[12]
  i1070.compiled = !!i1071[13]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1085 = data
  i1084.shaderName = i1085[0]
  i1084.errorMessage = i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1090 = root || new pc.UnityShaderPass()
  var i1091 = data
  i1090.id = i1091[0]
  i1090.subShaderIndex = i1091[1]
  i1090.name = i1091[2]
  i1090.passType = i1091[3]
  i1090.grabPassTextureName = i1091[4]
  i1090.usePass = !!i1091[5]
  i1090.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[6], i1090.zTest)
  i1090.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[7], i1090.zWrite)
  i1090.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[8], i1090.culling)
  i1090.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1091[9], i1090.blending)
  i1090.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1091[10], i1090.alphaBlending)
  i1090.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[11], i1090.colorWriteMask)
  i1090.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[12], i1090.offsetUnits)
  i1090.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[13], i1090.offsetFactor)
  i1090.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[14], i1090.stencilRef)
  i1090.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[15], i1090.stencilReadMask)
  i1090.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[16], i1090.stencilWriteMask)
  i1090.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[17], i1090.stencilOp)
  i1090.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[18], i1090.stencilOpFront)
  i1090.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1091[19], i1090.stencilOpBack)
  var i1093 = i1091[20]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1093[i + 0]) );
  }
  i1090.tags = i1092
  var i1095 = i1091[21]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1090.passDefinedKeywords = i1094
  var i1097 = i1091[22]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1097[i + 0]) );
  }
  i1090.passDefinedKeywordGroups = i1096
  var i1099 = i1091[23]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1099[i + 0]) );
  }
  i1090.variants = i1098
  var i1101 = i1091[24]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1101[i + 0]) );
  }
  i1090.excludedVariants = i1100
  i1090.hasDepthReader = !!i1091[25]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1103 = data
  i1102.val = i1103[0]
  i1102.name = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1105 = data
  i1104.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[0], i1104.src)
  i1104.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[1], i1104.dst)
  i1104.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[2], i1104.op)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1107 = data
  i1106.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[0], i1106.pass)
  i1106.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[1], i1106.fail)
  i1106.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[2], i1106.zFail)
  i1106.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[3], i1106.comp)
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.value = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1115 = data
  var i1117 = i1115[0]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1114.keywords = i1116
  i1114.hasDiscard = !!i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1121 = data
  i1120.passId = i1121[0]
  i1120.subShaderIndex = i1121[1]
  var i1123 = i1121[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1120.keywords = i1122
  i1120.vertexProgram = i1121[3]
  i1120.fragmentProgram = i1121[4]
  i1120.exportedForWebGl2 = !!i1121[5]
  i1120.readDepth = !!i1121[6]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'shader')
  i1126.pass = i1127[2]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.type = i1131[1]
  i1130.value = new pc.Vec4( i1131[2], i1131[3], i1131[4], i1131[5] )
  i1130.textureValue = i1131[6]
  i1130.shaderPropertyFlag = i1131[7]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1133 = data
  i1132.name = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'texture')
  i1132.aabb = i1133[3]
  i1132.vertices = i1133[4]
  i1132.triangles = i1133[5]
  i1132.textureRect = UnityEngine.Rect.MinMaxRect(i1133[6], i1133[7], i1133[8], i1133[9])
  i1132.packedRect = UnityEngine.Rect.MinMaxRect(i1133[10], i1133[11], i1133[12], i1133[13])
  i1132.border = new pc.Vec4( i1133[14], i1133[15], i1133[16], i1133[17] )
  i1132.transparency = i1133[18]
  i1132.bounds = i1133[19]
  i1132.pixelsPerUnit = i1133[20]
  i1132.textureWidth = i1133[21]
  i1132.textureHeight = i1133[22]
  i1132.nativeSize = new pc.Vec2( i1133[23], i1133[24] )
  i1132.pivot = new pc.Vec2( i1133[25], i1133[26] )
  i1132.textureRectOffset = new pc.Vec2( i1133[27], i1133[28] )
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1135 = data
  i1134.name = i1135[0]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.wrapMode = i1137[1]
  i1136.isLooping = !!i1137[2]
  i1136.length = i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1139[i + 0]) );
  }
  i1136.curves = i1138
  var i1141 = i1137[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1141[i + 0]) );
  }
  i1136.events = i1140
  i1136.halfPrecision = !!i1137[6]
  i1136._frameRate = i1137[7]
  i1136.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1137[8], i1136.localBounds)
  i1136.hasMuscleCurves = !!i1137[9]
  var i1143 = i1137[10]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1136.clipMuscleConstant = i1142
  i1136.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1137[11], i1136.clipBindingConstant)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1147 = data
  i1146.path = i1147[0]
  i1146.hash = i1147[1]
  i1146.componentType = i1147[2]
  i1146.property = i1147[3]
  i1146.keys = i1147[4]
  var i1149 = i1147[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1149[i + 0]) );
  }
  i1146.objectReferenceKeys = i1148
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1153 = data
  i1152.time = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'value')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1157 = data
  i1156.functionName = i1157[0]
  i1156.floatParameter = i1157[1]
  i1156.intParameter = i1157[2]
  i1156.stringParameter = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'objectReferenceParameter')
  i1156.time = i1157[6]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1159 = data
  i1158.center = new pc.Vec3( i1159[0], i1159[1], i1159[2] )
  i1158.extends = new pc.Vec3( i1159[3], i1159[4], i1159[5] )
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.genericBindings = i1164
  var i1167 = i1163[1]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1162.pptrCurveMapping = i1166
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1169 = data
  i1168.name = i1169[0]
  var i1171 = i1169[1]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1171[i + 0]) );
  }
  i1168.layers = i1170
  var i1173 = i1169[2]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1173[i + 0]) );
  }
  i1168.parameters = i1172
  i1168.animationClips = i1169[3]
  i1168.avatarUnsupported = i1169[4]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.defaultWeight = i1177[1]
  i1176.blendingMode = i1177[2]
  i1176.avatarMask = i1177[3]
  i1176.syncedLayerIndex = i1177[4]
  i1176.syncedLayerAffectsTiming = !!i1177[5]
  i1176.syncedLayers = i1177[6]
  i1176.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1177[7], i1176.stateMachine)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  i1178.path = i1179[2]
  var i1181 = i1179[3]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1181[i + 0]) );
  }
  i1178.states = i1180
  var i1183 = i1179[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1183[i + 0]) );
  }
  i1178.machines = i1182
  var i1185 = i1179[5]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1185[i + 0]) );
  }
  i1178.entryStateTransitions = i1184
  var i1187 = i1179[6]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1187[i + 0]) );
  }
  i1178.exitStateTransitions = i1186
  var i1189 = i1179[7]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1178.anyStateTransitions = i1188
  i1178.defaultStateId = i1179[8]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1193 = data
  i1192.id = i1193[0]
  i1192.name = i1193[1]
  i1192.cycleOffset = i1193[2]
  i1192.cycleOffsetParameter = i1193[3]
  i1192.cycleOffsetParameterActive = !!i1193[4]
  i1192.mirror = !!i1193[5]
  i1192.mirrorParameter = i1193[6]
  i1192.mirrorParameterActive = !!i1193[7]
  i1192.motionId = i1193[8]
  i1192.nameHash = i1193[9]
  i1192.fullPathHash = i1193[10]
  i1192.speed = i1193[11]
  i1192.speedParameter = i1193[12]
  i1192.speedParameterActive = !!i1193[13]
  i1192.tag = i1193[14]
  i1192.tagHash = i1193[15]
  i1192.writeDefaultValues = !!i1193[16]
  var i1195 = i1193[17]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 2, i1194, '')
  }
  i1192.behaviours = i1194
  var i1197 = i1193[18]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1197[i + 0]) );
  }
  i1192.transitions = i1196
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1203 = data
  i1202.fullPath = i1203[0]
  i1202.canTransitionToSelf = !!i1203[1]
  i1202.duration = i1203[2]
  i1202.exitTime = i1203[3]
  i1202.hasExitTime = !!i1203[4]
  i1202.hasFixedDuration = !!i1203[5]
  i1202.interruptionSource = i1203[6]
  i1202.offset = i1203[7]
  i1202.orderedInterruption = !!i1203[8]
  i1202.destinationStateId = i1203[9]
  i1202.isExit = !!i1203[10]
  i1202.mute = !!i1203[11]
  i1202.solo = !!i1203[12]
  var i1205 = i1203[13]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1205[i + 0]) );
  }
  i1202.conditions = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1209 = data
  i1208.mode = i1209[0]
  i1208.parameter = i1209[1]
  i1208.threshold = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1215 = data
  i1214.destinationStateId = i1215[0]
  i1214.isExit = !!i1215[1]
  i1214.mute = !!i1215[2]
  i1214.solo = !!i1215[3]
  var i1217 = i1215[4]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1217[i + 0]) );
  }
  i1214.conditions = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1221 = data
  i1220.defaultBool = !!i1221[0]
  i1220.defaultFloat = i1221[1]
  i1220.defaultInt = i1221[2]
  i1220.name = i1221[3]
  i1220.nameHash = i1221[4]
  i1220.type = i1221[5]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1223 = data
  i1222.name = i1223[0]
  request.r(i1223[1], i1223[2], 0, i1222, '_runtimeAnimatorController')
  var i1225 = i1223[3]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1222._originalAnimationClips = i1224
  var i1227 = i1223[4]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 2, i1226, '')
  }
  i1222._overrideAnimationClips = i1226
  var i1229 = i1223[5]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 2, i1228, '')
  }
  i1222._animationClips = i1228
  var i1231 = i1223[6]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('UnityEngine.AnimationClipPair', i1231[i + 0]) );
  }
  i1222._animationClipPairs = i1230
  return i1222
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'originalClip')
  request.r(i1237[2], i1237[3], 0, i1236, 'overrideClip')
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.bytes64 = i1239[1]
  i1238.data = i1239[2]
  return i1238
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1241 = data
  i1240.normalStyle = i1241[0]
  i1240.normalSpacingOffset = i1241[1]
  i1240.boldStyle = i1241[2]
  i1240.boldSpacing = i1241[3]
  i1240.italicStyle = i1241[4]
  i1240.tabSize = i1241[5]
  request.r(i1241[6], i1241[7], 0, i1240, 'atlas')
  i1240.m_SourceFontFileGUID = i1241[8]
  i1240.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1241[9], i1240.m_CreationSettings)
  request.r(i1241[10], i1241[11], 0, i1240, 'm_SourceFontFile')
  i1240.m_SourceFontFilePath = i1241[12]
  i1240.m_AtlasPopulationMode = i1241[13]
  i1240.InternalDynamicOS = !!i1241[14]
  var i1243 = i1241[15]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.Glyph', i1243[i + 0]));
  }
  i1240.m_GlyphTable = i1242
  var i1245 = i1241[16]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Character', i1245[i + 0]));
  }
  i1240.m_CharacterTable = i1244
  var i1247 = i1241[17]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 2, i1246, '')
  }
  i1240.m_AtlasTextures = i1246
  i1240.m_AtlasTextureIndex = i1241[18]
  i1240.m_IsMultiAtlasTexturesEnabled = !!i1241[19]
  i1240.m_GetFontFeatures = !!i1241[20]
  i1240.m_ClearDynamicDataOnBuild = !!i1241[21]
  i1240.m_AtlasWidth = i1241[22]
  i1240.m_AtlasHeight = i1241[23]
  i1240.m_AtlasPadding = i1241[24]
  i1240.m_AtlasRenderMode = i1241[25]
  var i1249 = i1241[26]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('UnityEngine.TextCore.GlyphRect', i1249[i + 0]));
  }
  i1240.m_UsedGlyphRects = i1248
  var i1251 = i1241[27]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.GlyphRect', i1251[i + 0]));
  }
  i1240.m_FreeGlyphRects = i1250
  i1240.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1241[28], i1240.m_FontFeatureTable)
  i1240.m_ShouldReimportFontFeatures = !!i1241[29]
  var i1253 = i1241[30]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1240.m_FallbackFontAssetTable = i1252
  var i1255 = i1241[31]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('TMPro.TMP_FontWeightPair', i1255[i + 0]) );
  }
  i1240.m_FontWeightTable = i1254
  var i1257 = i1241[32]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('TMPro.TMP_FontWeightPair', i1257[i + 0]) );
  }
  i1240.fontWeights = i1256
  i1240.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1241[33], i1240.m_fontInfo)
  var i1259 = i1241[34]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_Glyph', i1259[i + 0]));
  }
  i1240.m_glyphInfoList = i1258
  i1240.m_KerningTable = request.d('TMPro.KerningTable', i1241[35], i1240.m_KerningTable)
  var i1261 = i1241[36]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1240.fallbackFontAssets = i1260
  i1240.m_Version = i1241[37]
  i1240.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1241[38], i1240.m_FaceInfo)
  request.r(i1241[39], i1241[40], 0, i1240, 'm_Material')
  return i1240
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1263 = data
  i1262.sourceFontFileName = i1263[0]
  i1262.sourceFontFileGUID = i1263[1]
  i1262.faceIndex = i1263[2]
  i1262.pointSizeSamplingMode = i1263[3]
  i1262.pointSize = i1263[4]
  i1262.padding = i1263[5]
  i1262.paddingMode = i1263[6]
  i1262.packingMode = i1263[7]
  i1262.atlasWidth = i1263[8]
  i1262.atlasHeight = i1263[9]
  i1262.characterSetSelectionMode = i1263[10]
  i1262.characterSequence = i1263[11]
  i1262.referencedFontAssetGUID = i1263[12]
  i1262.referencedTextAssetGUID = i1263[13]
  i1262.fontStyle = i1263[14]
  i1262.fontStyleModifier = i1263[15]
  i1262.renderMode = i1263[16]
  i1262.includeFontFeatures = !!i1263[17]
  return i1262
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1267 = data
  i1266.m_Index = i1267[0]
  i1266.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1267[1], i1266.m_Metrics)
  i1266.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1267[2], i1266.m_GlyphRect)
  i1266.m_Scale = i1267[3]
  i1266.m_AtlasIndex = i1267[4]
  i1266.m_ClassDefinitionType = i1267[5]
  return i1266
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1269 = data
  i1268.m_Width = i1269[0]
  i1268.m_Height = i1269[1]
  i1268.m_HorizontalBearingX = i1269[2]
  i1268.m_HorizontalBearingY = i1269[3]
  i1268.m_HorizontalAdvance = i1269[4]
  return i1268
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1271 = data
  i1270.m_X = i1271[0]
  i1270.m_Y = i1271[1]
  i1270.m_Width = i1271[2]
  i1270.m_Height = i1271[3]
  return i1270
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_Character' )
  var i1275 = data
  i1274.m_ElementType = i1275[0]
  i1274.m_Unicode = i1275[1]
  i1274.m_GlyphIndex = i1275[2]
  i1274.m_Scale = i1275[3]
  return i1274
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.MultipleSubstitutionRecord', i1283[i + 0]));
  }
  i1280.m_MultipleSubstitutionRecords = i1282
  var i1285 = i1281[1]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.LigatureSubstitutionRecord', i1285[i + 0]));
  }
  i1280.m_LigatureSubstitutionRecords = i1284
  var i1287 = i1281[2]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1287[i + 0]));
  }
  i1280.m_GlyphPairAdjustmentRecords = i1286
  var i1289 = i1281[3]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1289[i + 0]));
  }
  i1280.m_MarkToBaseAdjustmentRecords = i1288
  var i1291 = i1281[4]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1291[i + 0]));
  }
  i1280.m_MarkToMarkAdjustmentRecords = i1290
  return i1280
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1295 = data
  i1294.m_TargetGlyphID = i1295[0]
  i1294.m_SubstituteGlyphIDs = i1295[1]
  return i1294
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1299 = data
  i1298.m_ComponentGlyphIDs = i1299[0]
  i1298.m_LigatureGlyphID = i1299[1]
  return i1298
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1303 = data
  i1302.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1303[0], i1302.m_FirstAdjustmentRecord)
  i1302.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1303[1], i1302.m_SecondAdjustmentRecord)
  i1302.m_FeatureLookupFlags = i1303[2]
  return i1302
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1307 = data
  i1306.m_BaseGlyphID = i1307[0]
  i1306.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1307[1], i1306.m_BaseGlyphAnchorPoint)
  i1306.m_MarkGlyphID = i1307[2]
  i1306.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1307[3], i1306.m_MarkPositionAdjustment)
  return i1306
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1311 = data
  i1310.m_BaseMarkGlyphID = i1311[0]
  i1310.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1311[1], i1310.m_BaseMarkGlyphAnchorPoint)
  i1310.m_CombiningMarkGlyphID = i1311[2]
  i1310.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1311[3], i1310.m_CombiningMarkPositionAdjustment)
  return i1310
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'regularTypeface')
  request.r(i1317[2], i1317[3], 0, i1316, 'italicTypeface')
  return i1316
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1319 = data
  i1318.Name = i1319[0]
  i1318.PointSize = i1319[1]
  i1318.Scale = i1319[2]
  i1318.CharacterCount = i1319[3]
  i1318.LineHeight = i1319[4]
  i1318.Baseline = i1319[5]
  i1318.Ascender = i1319[6]
  i1318.CapHeight = i1319[7]
  i1318.Descender = i1319[8]
  i1318.CenterLine = i1319[9]
  i1318.SuperscriptOffset = i1319[10]
  i1318.SubscriptOffset = i1319[11]
  i1318.SubSize = i1319[12]
  i1318.Underline = i1319[13]
  i1318.UnderlineThickness = i1319[14]
  i1318.strikethrough = i1319[15]
  i1318.strikethroughThickness = i1319[16]
  i1318.TabWidth = i1319[17]
  i1318.Padding = i1319[18]
  i1318.AtlasWidth = i1319[19]
  i1318.AtlasHeight = i1319[20]
  return i1318
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.x = i1323[1]
  i1322.y = i1323[2]
  i1322.width = i1323[3]
  i1322.height = i1323[4]
  i1322.xOffset = i1323[5]
  i1322.yOffset = i1323[6]
  i1322.xAdvance = i1323[7]
  i1322.scale = i1323[8]
  return i1322
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.KerningTable' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.KerningPair', i1327[i + 0]));
  }
  i1324.kerningPairs = i1326
  return i1324
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.KerningPair' )
  var i1331 = data
  i1330.xOffset = i1331[0]
  i1330.m_FirstGlyph = i1331[1]
  i1330.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1331[2], i1330.m_FirstGlyphAdjustments)
  i1330.m_SecondGlyph = i1331[3]
  i1330.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1331[4], i1330.m_SecondGlyphAdjustments)
  i1330.m_IgnoreSpacingAdjustments = !!i1331[5]
  return i1330
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1333 = data
  i1332.m_FaceIndex = i1333[0]
  i1332.m_FamilyName = i1333[1]
  i1332.m_StyleName = i1333[2]
  i1332.m_PointSize = i1333[3]
  i1332.m_Scale = i1333[4]
  i1332.m_UnitsPerEM = i1333[5]
  i1332.m_LineHeight = i1333[6]
  i1332.m_AscentLine = i1333[7]
  i1332.m_CapLine = i1333[8]
  i1332.m_MeanLine = i1333[9]
  i1332.m_Baseline = i1333[10]
  i1332.m_DescentLine = i1333[11]
  i1332.m_SuperscriptOffset = i1333[12]
  i1332.m_SuperscriptSize = i1333[13]
  i1332.m_SubscriptOffset = i1333[14]
  i1332.m_SubscriptSize = i1333[15]
  i1332.m_UnderlineOffset = i1333[16]
  i1332.m_UnderlineThickness = i1333[17]
  i1332.m_StrikethroughOffset = i1333[18]
  i1332.m_StrikethroughThickness = i1333[19]
  i1332.m_TabWidth = i1333[20]
  return i1332
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1335 = data
  i1334.useSafeMode = !!i1335[0]
  i1334.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1335[1], i1334.safeModeOptions)
  i1334.timeScale = i1335[2]
  i1334.unscaledTimeScale = i1335[3]
  i1334.useSmoothDeltaTime = !!i1335[4]
  i1334.maxSmoothUnscaledTime = i1335[5]
  i1334.rewindCallbackMode = i1335[6]
  i1334.showUnityEditorReport = !!i1335[7]
  i1334.logBehaviour = i1335[8]
  i1334.drawGizmos = !!i1335[9]
  i1334.defaultRecyclable = !!i1335[10]
  i1334.defaultAutoPlay = i1335[11]
  i1334.defaultUpdateType = i1335[12]
  i1334.defaultTimeScaleIndependent = !!i1335[13]
  i1334.defaultEaseType = i1335[14]
  i1334.defaultEaseOvershootOrAmplitude = i1335[15]
  i1334.defaultEasePeriod = i1335[16]
  i1334.defaultAutoKill = !!i1335[17]
  i1334.defaultLoopType = i1335[18]
  i1334.debugMode = !!i1335[19]
  i1334.debugStoreTargetId = !!i1335[20]
  i1334.showPreviewPanel = !!i1335[21]
  i1334.storeSettingsLocation = i1335[22]
  i1334.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1335[23], i1334.modules)
  i1334.createASMDEF = !!i1335[24]
  i1334.showPlayingTweens = !!i1335[25]
  i1334.showPausedTweens = !!i1335[26]
  return i1334
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1337 = data
  i1336.logBehaviour = i1337[0]
  i1336.nestedTweenFailureBehaviour = i1337[1]
  return i1336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1339 = data
  i1338.showPanel = !!i1339[0]
  i1338.audioEnabled = !!i1339[1]
  i1338.physicsEnabled = !!i1339[2]
  i1338.physics2DEnabled = !!i1339[3]
  i1338.spriteEnabled = !!i1339[4]
  i1338.uiEnabled = !!i1339[5]
  i1338.textMeshProEnabled = !!i1339[6]
  i1338.tk2DEnabled = !!i1339[7]
  i1338.deAudioEnabled = !!i1339[8]
  i1338.deUnityExtendedEnabled = !!i1339[9]
  i1338.epoOutlineEnabled = !!i1339[10]
  return i1338
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Settings' )
  var i1341 = data
  i1340.assetVersion = i1341[0]
  i1340.m_TextWrappingMode = i1341[1]
  i1340.m_enableKerning = !!i1341[2]
  var i1343 = i1341[3]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(i1343[i + 0]);
  }
  i1340.m_ActiveFontFeatures = i1342
  i1340.m_enableExtraPadding = !!i1341[4]
  i1340.m_enableTintAllSprites = !!i1341[5]
  i1340.m_enableParseEscapeCharacters = !!i1341[6]
  i1340.m_EnableRaycastTarget = !!i1341[7]
  i1340.m_GetFontFeaturesAtRuntime = !!i1341[8]
  i1340.m_missingGlyphCharacter = i1341[9]
  i1340.m_ClearDynamicDataOnBuild = !!i1341[10]
  i1340.m_warningsDisabled = !!i1341[11]
  request.r(i1341[12], i1341[13], 0, i1340, 'm_defaultFontAsset')
  i1340.m_defaultFontAssetPath = i1341[14]
  i1340.m_defaultFontSize = i1341[15]
  i1340.m_defaultAutoSizeMinRatio = i1341[16]
  i1340.m_defaultAutoSizeMaxRatio = i1341[17]
  i1340.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1341[18], i1341[19] )
  i1340.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1341[20], i1341[21] )
  i1340.m_autoSizeTextContainer = !!i1341[22]
  i1340.m_IsTextObjectScaleStatic = !!i1341[23]
  var i1345 = i1341[24]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1340.m_fallbackFontAssets = i1344
  i1340.m_matchMaterialPreset = !!i1341[25]
  i1340.m_HideSubTextObjects = !!i1341[26]
  request.r(i1341[27], i1341[28], 0, i1340, 'm_defaultSpriteAsset')
  i1340.m_defaultSpriteAssetPath = i1341[29]
  i1340.m_enableEmojiSupport = !!i1341[30]
  i1340.m_MissingCharacterSpriteUnicode = i1341[31]
  var i1347 = i1341[32]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1340.m_EmojiFallbackTextAssets = i1346
  i1340.m_defaultColorGradientPresetsPath = i1341[33]
  request.r(i1341[34], i1341[35], 0, i1340, 'm_defaultStyleSheet')
  i1340.m_StyleSheetsResourcePath = i1341[36]
  request.r(i1341[37], i1341[38], 0, i1340, 'm_leadingCharacters')
  request.r(i1341[39], i1341[40], 0, i1340, 'm_followingCharacters')
  i1340.m_UseModernHangulLineBreakingRules = !!i1341[41]
  return i1340
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'spriteSheet')
  var i1353 = i1351[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.TMP_Sprite', i1353[i + 0]));
  }
  i1350.spriteInfoList = i1352
  var i1355 = i1351[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1350.fallbackSpriteAssets = i1354
  var i1357 = i1351[4]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteCharacter', i1357[i + 0]));
  }
  i1350.m_SpriteCharacterTable = i1356
  var i1359 = i1351[5]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('TMPro.TMP_SpriteGlyph', i1359[i + 0]));
  }
  i1350.m_GlyphTable = i1358
  i1350.m_Version = i1351[6]
  i1350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1351[7], i1350.m_FaceInfo)
  request.r(i1351[8], i1351[9], 0, i1350, 'm_Material')
  return i1350
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.hashCode = i1363[1]
  i1362.unicode = i1363[2]
  i1362.pivot = new pc.Vec2( i1363[3], i1363[4] )
  request.r(i1363[5], i1363[6], 0, i1362, 'sprite')
  i1362.id = i1363[7]
  i1362.x = i1363[8]
  i1362.y = i1363[9]
  i1362.width = i1363[10]
  i1362.height = i1363[11]
  i1362.xOffset = i1363[12]
  i1362.yOffset = i1363[13]
  i1362.xAdvance = i1363[14]
  i1362.scale = i1363[15]
  return i1362
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_ElementType = i1369[1]
  i1368.m_Unicode = i1369[2]
  i1368.m_GlyphIndex = i1369[3]
  i1368.m_Scale = i1369[4]
  return i1368
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'sprite')
  i1372.m_Index = i1373[2]
  i1372.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1373[3], i1372.m_Metrics)
  i1372.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1373[4], i1372.m_GlyphRect)
  i1372.m_Scale = i1373[5]
  i1372.m_AtlasIndex = i1373[6]
  i1372.m_ClassDefinitionType = i1373[7]
  return i1372
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_Style', i1377[i + 0]));
  }
  i1374.m_StyleList = i1376
  return i1374
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_Style' )
  var i1381 = data
  i1380.m_Name = i1381[0]
  i1380.m_HashCode = i1381[1]
  i1380.m_OpeningDefinition = i1381[2]
  i1380.m_ClosingDefinition = i1381[3]
  i1380.m_OpeningTagArray = i1381[4]
  i1380.m_ClosingTagArray = i1381[5]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1385[i + 0]) );
  }
  i1382.files = i1384
  i1382.componentToPrefabIds = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1389 = data
  i1388.path = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'unityObject')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1393[i + 0]) );
  }
  i1390.scriptsExecutionOrder = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1395[i + 0]) );
  }
  i1390.sortingLayers = i1394
  var i1397 = i1391[2]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1397[i + 0]) );
  }
  i1390.cullingLayers = i1396
  i1390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1391[3], i1390.timeSettings)
  i1390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1391[4], i1390.physicsSettings)
  i1390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1391[5], i1390.physics2DSettings)
  i1390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1391[6], i1390.qualitySettings)
  i1390.enableRealtimeShadows = !!i1391[7]
  i1390.enableAutoInstancing = !!i1391[8]
  i1390.enableStaticBatching = !!i1391[9]
  i1390.enableDynamicBatching = !!i1391[10]
  i1390.usePreservativeDynamicBatching = !!i1391[11]
  i1390.lightmapEncodingQuality = i1391[12]
  i1390.desiredColorSpace = i1391[13]
  var i1399 = i1391[14]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1390.allTags = i1398
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.value = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1407 = data
  i1406.id = i1407[0]
  i1406.name = i1407[1]
  i1406.value = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1413 = data
  i1412.fixedDeltaTime = i1413[0]
  i1412.maximumDeltaTime = i1413[1]
  i1412.timeScale = i1413[2]
  i1412.maximumParticleTimestep = i1413[3]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1415 = data
  i1414.gravity = new pc.Vec3( i1415[0], i1415[1], i1415[2] )
  i1414.defaultSolverIterations = i1415[3]
  i1414.bounceThreshold = i1415[4]
  i1414.autoSyncTransforms = !!i1415[5]
  i1414.autoSimulation = !!i1415[6]
  var i1417 = i1415[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'material')
  i1422.gravity = new pc.Vec2( i1423[2], i1423[3] )
  i1422.positionIterations = i1423[4]
  i1422.velocityIterations = i1423[5]
  i1422.velocityThreshold = i1423[6]
  i1422.maxLinearCorrection = i1423[7]
  i1422.maxAngularCorrection = i1423[8]
  i1422.maxTranslationSpeed = i1423[9]
  i1422.maxRotationSpeed = i1423[10]
  i1422.baumgarteScale = i1423[11]
  i1422.baumgarteTOIScale = i1423[12]
  i1422.timeToSleep = i1423[13]
  i1422.linearSleepTolerance = i1423[14]
  i1422.angularSleepTolerance = i1423[15]
  i1422.defaultContactOffset = i1423[16]
  i1422.autoSimulation = !!i1423[17]
  i1422.queriesHitTriggers = !!i1423[18]
  i1422.queriesStartInColliders = !!i1423[19]
  i1422.callbacksOnDisable = !!i1423[20]
  i1422.reuseCollisionCallbacks = !!i1423[21]
  i1422.autoSyncTransforms = !!i1423[22]
  var i1425 = i1423[23]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[i + 0]) );
  }
  i1430.qualityLevels = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.names = i1434
  i1430.shadows = i1431[2]
  i1430.anisotropicFiltering = i1431[3]
  i1430.antiAliasing = i1431[4]
  i1430.lodBias = i1431[5]
  i1430.shadowCascades = i1431[6]
  i1430.shadowDistance = i1431[7]
  i1430.shadowmaskMode = i1431[8]
  i1430.shadowProjection = i1431[9]
  i1430.shadowResolution = i1431[10]
  i1430.softParticles = !!i1431[11]
  i1430.softVegetation = !!i1431[12]
  i1430.activeColorSpace = i1431[13]
  i1430.desiredColorSpace = i1431[14]
  i1430.masterTextureLimit = i1431[15]
  i1430.maxQueuedFrames = i1431[16]
  i1430.particleRaycastBudget = i1431[17]
  i1430.pixelLightCount = i1431[18]
  i1430.realtimeReflectionProbes = !!i1431[19]
  i1430.shadowCascade2Split = i1431[20]
  i1430.shadowCascade4Split = new pc.Vec3( i1431[21], i1431[22], i1431[23] )
  i1430.streamingMipmapsActive = !!i1431[24]
  i1430.vSyncCount = i1431[25]
  i1430.asyncUploadBufferSize = i1431[26]
  i1430.asyncUploadTimeSlice = i1431[27]
  i1430.billboardsFaceCameraPosition = !!i1431[28]
  i1430.shadowNearPlaneOffset = i1431[29]
  i1430.streamingMipmapsMemoryBudget = i1431[30]
  i1430.maximumLODLevel = i1431[31]
  i1430.streamingMipmapsAddAllCameras = !!i1431[32]
  i1430.streamingMipmapsMaxLevelReduction = i1431[33]
  i1430.streamingMipmapsRenderersPerFrame = i1431[34]
  i1430.resolutionScalingFixedDPIFactor = i1431[35]
  i1430.streamingMipmapsMaxFileIORequests = i1431[36]
  i1430.currentQualityLevel = i1431[37]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1439 = data
  i1438.name = i1439[0]
  var i1441 = i1439[1]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1441[i + 0]) );
  }
  i1438.tos = i1440
  var i1443 = i1439[2]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( i1443[i + 0] );
  }
  i1438.constant = i1442
  i1438.isValid = !!i1439[3]
  i1438.isHuman = !!i1439[4]
  i1438.hasRootMotion = !!i1439[5]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1447 = data
  i1446.hash = i1447[0]
  i1446.path = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1451 = data
  i1450.weight = i1451[0]
  i1450.vertices = i1451[1]
  i1450.normals = i1451[2]
  i1450.tangents = i1451[3]
  return i1450
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1453 = data
  request.r(i1453[0], i1453[1], 0, i1452, 'm_ObjectArgument')
  i1452.m_ObjectArgumentAssemblyTypeName = i1453[2]
  i1452.m_IntArgument = i1453[3]
  i1452.m_FloatArgument = i1453[4]
  i1452.m_StringArgument = i1453[5]
  i1452.m_BoolArgument = !!i1453[6]
  return i1452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1455 = data
  i1454.m_GlyphIndex = i1455[0]
  i1454.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1455[1], i1454.m_GlyphValueRecord)
  return i1454
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1456 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1457 = data
  i1456.m_XCoordinate = i1457[0]
  i1456.m_YCoordinate = i1457[1]
  return i1456
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1459 = data
  i1458.m_XPositionAdjustment = i1459[0]
  i1458.m_YPositionAdjustment = i1459[1]
  return i1458
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1461 = data
  i1460.xPlacement = i1461[0]
  i1460.yPlacement = i1461[1]
  i1460.xAdvance = i1461[2]
  i1460.yAdvance = i1461[3]
  return i1460
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1463 = data
  i1462.m_XPlacement = i1463[0]
  i1462.m_YPlacement = i1463[1]
  i1462.m_XAdvance = i1463[2]
  i1462.m_YAdvance = i1463[3]
  return i1462
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[55],"76":[31],"77":[37],"78":[37],"79":[37],"80":[37],"81":[37],"82":[37],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[31],"98":[5],"99":[100],"101":[100],"12":[11],"102":[11],"16":[13],"103":[11],"104":[5,11],"24":[11,18],"105":[11],"106":[18,11],"107":[5],"108":[18,11],"109":[11],"110":[111],"112":[111],"113":[111],"114":[11],"115":[11],"14":[12],"19":[18,11],"116":[11],"13":[12],"117":[11],"118":[11],"119":[11],"120":[11],"121":[11],"122":[11],"123":[11],"23":[11],"124":[11],"125":[18,11],"126":[11],"127":[11],"128":[11],"129":[11],"130":[18,11],"131":[11],"132":[9],"133":[9],"10":[9],"134":[9],"135":[31],"136":[31]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","MorphSelectionFlow","UnityEngine.GameObject","UnityEngine.Camera","CameraFollow","CameraLook","UnityEngine.AudioClip","MorphTitlePulse","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.ParticleSystem","SoundHint","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","InputManager","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.MeshCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MorphSelectionLayout","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "31.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_HuyNQ_FSAHM_V08_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1674";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4802";

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

Deserializers.buildID = "7cf84313-e2f1-4dc2-9efe-6892800f8f19";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

