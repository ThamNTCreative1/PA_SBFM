var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointSpring' )
  var i715 = data
  i714.spring = i715[0]
  i714.damper = i715[1]
  i714.targetPosition = i715[2]
  return i714
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointMotor' )
  var i717 = data
  i716.m_TargetVelocity = i717[0]
  i716.m_Force = i717[1]
  i716.m_FreeSpin = i717[2]
  return i716
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointLimits' )
  var i719 = data
  i718.m_Min = i719[0]
  i718.m_Max = i719[1]
  i718.m_Bounciness = i719[2]
  i718.m_BounceMinVelocity = i719[3]
  i718.m_ContactDistance = i719[4]
  i718.minBounce = i719[5]
  i718.maxBounce = i719[6]
  return i718
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointDrive' )
  var i721 = data
  i720.m_PositionSpring = i721[0]
  i720.m_PositionDamper = i721[1]
  i720.m_MaximumForce = i721[2]
  i720.m_UseAcceleration = i721[3]
  return i720
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i723 = data
  i722.m_Spring = i723[0]
  i722.m_Damper = i723[1]
  return i722
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i725 = data
  i724.m_Limit = i725[0]
  i724.m_Bounciness = i725[1]
  i724.m_ContactDistance = i725[2]
  return i724
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i727 = data
  i726.m_ExtremumSlip = i727[0]
  i726.m_ExtremumValue = i727[1]
  i726.m_AsymptoteSlip = i727[2]
  i726.m_AsymptoteValue = i727[3]
  i726.m_Stiffness = i727[4]
  return i726
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i729 = data
  i728.m_LowerAngle = i729[0]
  i728.m_UpperAngle = i729[1]
  return i728
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i731 = data
  i730.m_MotorSpeed = i731[0]
  i730.m_MaximumMotorTorque = i731[1]
  return i730
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i733 = data
  i732.m_DampingRatio = i733[0]
  i732.m_Frequency = i733[1]
  i732.m_Angle = i733[2]
  return i732
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i735 = data
  i734.m_LowerTranslation = i735[0]
  i734.m_UpperTranslation = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i737 = data
  i736.name = i737[0]
  i736.width = i737[1]
  i736.height = i737[2]
  i736.mipmapCount = i737[3]
  i736.anisoLevel = i737[4]
  i736.filterMode = i737[5]
  i736.hdr = !!i737[6]
  i736.format = i737[7]
  i736.wrapMode = i737[8]
  i736.alphaIsTransparency = !!i737[9]
  i736.alphaSource = i737[10]
  i736.graphicsFormat = i737[11]
  i736.sRGBTexture = !!i737[12]
  i736.desiredColorSpace = i737[13]
  i736.wrapU = i737[14]
  i736.wrapV = i737[15]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i738 = root || new pc.UnityMaterial()
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'shader')
  i738.renderQueue = i739[3]
  i738.enableInstancing = !!i739[4]
  var i741 = i739[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i741[i + 0]) );
  }
  i738.floatParameters = i740
  var i743 = i739[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i743[i + 0]) );
  }
  i738.colorParameters = i742
  var i745 = i739[7]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i745[i + 0]) );
  }
  i738.vectorParameters = i744
  var i747 = i739[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i747[i + 0]) );
  }
  i738.textureParameters = i746
  var i749 = i739[9]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i749[i + 0]) );
  }
  i738.materialFlags = i748
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = new pc.Color(i757[1], i757[2], i757[3], i757[4])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = new pc.Vec4( i761[1], i761[2], i761[3], i761[4] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i765 = data
  i764.name = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'value')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i769 = data
  i768.name = i769[0]
  i768.enabled = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i771 = data
  i770.name = i771[0]
  i770.halfPrecision = !!i771[1]
  i770.useSimplification = !!i771[2]
  i770.useUInt32IndexFormat = !!i771[3]
  i770.vertexCount = i771[4]
  i770.aabb = i771[5]
  var i773 = i771[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( !!i773[i + 0] );
  }
  i770.streams = i772
  i770.vertices = i771[7]
  var i775 = i771[8]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i775[i + 0]) );
  }
  i770.subMeshes = i774
  var i777 = i771[9]
  var i776 = []
  for(var i = 0; i < i777.length; i += 16) {
    i776.push( new pc.Mat4().setData(i777[i + 0], i777[i + 1], i777[i + 2], i777[i + 3],  i777[i + 4], i777[i + 5], i777[i + 6], i777[i + 7],  i777[i + 8], i777[i + 9], i777[i + 10], i777[i + 11],  i777[i + 12], i777[i + 13], i777[i + 14], i777[i + 15]) );
  }
  i770.bindposes = i776
  var i779 = i771[10]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i779[i + 0]) );
  }
  i770.blendShapes = i778
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i785 = data
  i784.triangles = i785[0]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i791 = data
  i790.name = i791[0]
  var i793 = i791[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i793[i + 0]) );
  }
  i790.frames = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i795 = data
  i794.position = new pc.Vec3( i795[0], i795[1], i795[2] )
  i794.scale = new pc.Vec3( i795[3], i795[4], i795[5] )
  i794.rotation = new pc.Quat(i795[6], i795[7], i795[8], i795[9])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'sharedMesh')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'additionalVertexStreams')
  i798.enabled = !!i799[2]
  request.r(i799[3], i799[4], 0, i798, 'sharedMaterial')
  var i801 = i799[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[6]
  i798.shadowCastingMode = i799[7]
  i798.sortingLayerID = i799[8]
  i798.sortingOrder = i799[9]
  i798.lightmapIndex = i799[10]
  i798.lightmapSceneIndex = i799[11]
  i798.lightmapScaleOffset = new pc.Vec4( i799[12], i799[13], i799[14], i799[15] )
  i798.lightProbeUsage = i799[16]
  i798.reflectionProbeUsage = i799[17]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'sharedMesh')
  i804.convex = !!i805[2]
  i804.enabled = !!i805[3]
  i804.isTrigger = !!i805[4]
  request.r(i805[5], i805[6], 0, i804, 'material')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i807 = data
  i806.name = i807[0]
  i806.tagId = i807[1]
  i806.enabled = !!i807[2]
  i806.isStatic = !!i807[3]
  i806.layer = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i809 = data
  i808.center = new pc.Vec3( i809[0], i809[1], i809[2] )
  i808.size = new pc.Vec3( i809[3], i809[4], i809[5] )
  i808.enabled = !!i809[6]
  i808.isTrigger = !!i809[7]
  request.r(i809[8], i809[9], 0, i808, 'material')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i811 = data
  i810.mass = i811[0]
  i810.drag = i811[1]
  i810.angularDrag = i811[2]
  i810.useGravity = !!i811[3]
  i810.isKinematic = !!i811[4]
  i810.constraints = i811[5]
  i810.maxAngularVelocity = i811[6]
  i810.collisionDetectionMode = i811[7]
  i810.interpolation = i811[8]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i813 = data
  i812.name = i813[0]
  i812.atlasId = i813[1]
  i812.mipmapCount = i813[2]
  i812.hdr = !!i813[3]
  i812.size = i813[4]
  i812.anisoLevel = i813[5]
  i812.filterMode = i813[6]
  var i815 = i813[7]
  var i814 = []
  for(var i = 0; i < i815.length; i += 4) {
    i814.push( UnityEngine.Rect.MinMaxRect(i815[i + 0], i815[i + 1], i815[i + 2], i815[i + 3]) );
  }
  i812.rects = i814
  i812.wrapU = i813[8]
  i812.wrapV = i813[9]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i819 = data
  i818.name = i819[0]
  i818.index = i819[1]
  i818.startup = !!i819[2]
  return i818
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'm_FirstSelected')
  i820.m_sendNavigationEvents = !!i821[2]
  i820.m_DragThreshold = i821[3]
  return i820
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i823 = data
  i822.m_HorizontalAxis = i823[0]
  i822.m_VerticalAxis = i823[1]
  i822.m_SubmitButton = i823[2]
  i822.m_CancelButton = i823[3]
  i822.m_InputActionsPerSecond = i823[4]
  i822.m_RepeatDelay = i823[5]
  i822.m_ForceModuleActive = !!i823[6]
  i822.m_SendPointerHoverToParent = !!i823[7]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i825 = data
  i824.type = i825[0]
  i824.color = new pc.Color(i825[1], i825[2], i825[3], i825[4])
  i824.cullingMask = i825[5]
  i824.intensity = i825[6]
  i824.range = i825[7]
  i824.spotAngle = i825[8]
  i824.shadows = i825[9]
  i824.shadowNormalBias = i825[10]
  i824.shadowBias = i825[11]
  i824.shadowStrength = i825[12]
  i824.shadowResolution = i825[13]
  i824.lightmapBakeType = i825[14]
  i824.renderMode = i825[15]
  request.r(i825[16], i825[17], 0, i824, 'cookie')
  i824.cookieSize = i825[18]
  i824.shadowNearPlane = i825[19]
  i824.occlusionMaskChannel = i825[20]
  i824.isBaked = !!i825[21]
  i824.mixedLightingMode = i825[22]
  i824.enabled = !!i825[23]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i827 = data
  i826.pivot = new pc.Vec2( i827[0], i827[1] )
  i826.anchorMin = new pc.Vec2( i827[2], i827[3] )
  i826.anchorMax = new pc.Vec2( i827[4], i827[5] )
  i826.sizeDelta = new pc.Vec2( i827[6], i827[7] )
  i826.anchoredPosition3D = new pc.Vec3( i827[8], i827[9], i827[10] )
  i826.rotation = new pc.Quat(i827[11], i827[12], i827[13], i827[14])
  i826.scale = new pc.Vec3( i827[15], i827[16], i827[17] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i829 = data
  i828.planeDistance = i829[0]
  i828.referencePixelsPerUnit = i829[1]
  i828.isFallbackOverlay = !!i829[2]
  i828.renderMode = i829[3]
  i828.renderOrder = i829[4]
  i828.sortingLayerName = i829[5]
  i828.sortingOrder = i829[6]
  i828.scaleFactor = i829[7]
  request.r(i829[8], i829[9], 0, i828, 'worldCamera')
  i828.overrideSorting = !!i829[10]
  i828.pixelPerfect = !!i829[11]
  i828.targetDisplay = i829[12]
  i828.overridePixelPerfect = !!i829[13]
  i828.enabled = !!i829[14]
  return i828
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i831 = data
  i830.m_UiScaleMode = i831[0]
  i830.m_ReferencePixelsPerUnit = i831[1]
  i830.m_ScaleFactor = i831[2]
  i830.m_ReferenceResolution = new pc.Vec2( i831[3], i831[4] )
  i830.m_ScreenMatchMode = i831[5]
  i830.m_MatchWidthOrHeight = i831[6]
  i830.m_PhysicalUnit = i831[7]
  i830.m_FallbackScreenDPI = i831[8]
  i830.m_DefaultSpriteDPI = i831[9]
  i830.m_DynamicPixelsPerUnit = i831[10]
  i830.m_PresetInfoIsWorld = !!i831[11]
  return i830
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i833 = data
  i832.m_IgnoreReversedGraphics = !!i833[0]
  i832.m_BlockingObjects = i833[1]
  i832.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i833[2] )
  return i832
}

Deserializers["Joystick"] = function (request, data, root) {
  var i834 = root || request.c( 'Joystick' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'background')
  request.r(i835[2], i835[3], 0, i834, 'joy')
  i834.deadZone = i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i837 = data
  i836.cullTransparentMesh = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Image' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Sprite')
  i838.m_Type = i839[2]
  i838.m_PreserveAspect = !!i839[3]
  i838.m_FillCenter = !!i839[4]
  i838.m_FillMethod = i839[5]
  i838.m_FillAmount = i839[6]
  i838.m_FillClockwise = !!i839[7]
  i838.m_FillOrigin = i839[8]
  i838.m_UseSpriteMesh = !!i839[9]
  i838.m_PixelsPerUnitMultiplier = i839[10]
  request.r(i839[11], i839[12], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[13]
  i838.m_Color = new pc.Color(i839[14], i839[15], i839[16], i839[17])
  i838.m_RaycastTarget = !!i839[18]
  i838.m_RaycastPadding = new pc.Vec4( i839[19], i839[20], i839[21], i839[22] )
  return i838
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i840 = root || request.c( 'JumpButton' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'button')
  return i840
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Button' )
  var i843 = data
  i842.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i843[0], i842.m_OnClick)
  i842.m_Navigation = request.d('UnityEngine.UI.Navigation', i843[1], i842.m_Navigation)
  i842.m_Transition = i843[2]
  i842.m_Colors = request.d('UnityEngine.UI.ColorBlock', i843[3], i842.m_Colors)
  i842.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i843[4], i842.m_SpriteState)
  i842.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i843[5], i842.m_AnimationTriggers)
  i842.m_Interactable = !!i843[6]
  request.r(i843[7], i843[8], 0, i842, 'm_TargetGraphic')
  return i842
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i845 = data
  i844.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i845[0], i844.m_PersistentCalls)
  return i844
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('UnityEngine.Events.PersistentCall', i849[i + 0]));
  }
  i846.m_Calls = i848
  return i846
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Target')
  i852.m_TargetAssemblyTypeName = i853[2]
  i852.m_MethodName = i853[3]
  i852.m_Mode = i853[4]
  i852.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i853[5], i852.m_Arguments)
  i852.m_CallState = i853[6]
  return i852
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i855 = data
  i854.m_Mode = i855[0]
  i854.m_WrapAround = !!i855[1]
  request.r(i855[2], i855[3], 0, i854, 'm_SelectOnUp')
  request.r(i855[4], i855[5], 0, i854, 'm_SelectOnDown')
  request.r(i855[6], i855[7], 0, i854, 'm_SelectOnLeft')
  request.r(i855[8], i855[9], 0, i854, 'm_SelectOnRight')
  return i854
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i857 = data
  i856.m_NormalColor = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  i856.m_HighlightedColor = new pc.Color(i857[4], i857[5], i857[6], i857[7])
  i856.m_PressedColor = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  i856.m_SelectedColor = new pc.Color(i857[12], i857[13], i857[14], i857[15])
  i856.m_DisabledColor = new pc.Color(i857[16], i857[17], i857[18], i857[19])
  i856.m_ColorMultiplier = i857[20]
  i856.m_FadeDuration = i857[21]
  return i856
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_HighlightedSprite')
  request.r(i859[2], i859[3], 0, i858, 'm_PressedSprite')
  request.r(i859[4], i859[5], 0, i858, 'm_SelectedSprite')
  request.r(i859[6], i859[7], 0, i858, 'm_DisabledSprite')
  return i858
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i861 = data
  i860.m_NormalTrigger = i861[0]
  i860.m_HighlightedTrigger = i861[1]
  i860.m_PressedTrigger = i861[2]
  i860.m_SelectedTrigger = i861[3]
  i860.m_DisabledTrigger = i861[4]
  return i860
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Mask' )
  var i863 = data
  i862.m_ShowMaskGraphic = !!i863[0]
  return i862
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i865 = data
  i864.m_hasFontAssetChanged = !!i865[0]
  request.r(i865[1], i865[2], 0, i864, 'm_baseMaterial')
  i864.m_maskOffset = new pc.Vec4( i865[3], i865[4], i865[5], i865[6] )
  i864.m_text = i865[7]
  i864.m_isRightToLeft = !!i865[8]
  request.r(i865[9], i865[10], 0, i864, 'm_fontAsset')
  request.r(i865[11], i865[12], 0, i864, 'm_sharedMaterial')
  var i867 = i865[13]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.m_fontSharedMaterials = i866
  request.r(i865[14], i865[15], 0, i864, 'm_fontMaterial')
  var i869 = i865[16]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i864.m_fontMaterials = i868
  i864.m_fontColor32 = UnityEngine.Color32.ConstructColor(i865[17], i865[18], i865[19], i865[20])
  i864.m_fontColor = new pc.Color(i865[21], i865[22], i865[23], i865[24])
  i864.m_enableVertexGradient = !!i865[25]
  i864.m_colorMode = i865[26]
  i864.m_fontColorGradient = request.d('TMPro.VertexGradient', i865[27], i864.m_fontColorGradient)
  request.r(i865[28], i865[29], 0, i864, 'm_fontColorGradientPreset')
  request.r(i865[30], i865[31], 0, i864, 'm_spriteAsset')
  i864.m_tintAllSprites = !!i865[32]
  request.r(i865[33], i865[34], 0, i864, 'm_StyleSheet')
  i864.m_TextStyleHashCode = i865[35]
  i864.m_overrideHtmlColors = !!i865[36]
  i864.m_faceColor = UnityEngine.Color32.ConstructColor(i865[37], i865[38], i865[39], i865[40])
  i864.m_fontSize = i865[41]
  i864.m_fontSizeBase = i865[42]
  i864.m_fontWeight = i865[43]
  i864.m_enableAutoSizing = !!i865[44]
  i864.m_fontSizeMin = i865[45]
  i864.m_fontSizeMax = i865[46]
  i864.m_fontStyle = i865[47]
  i864.m_HorizontalAlignment = i865[48]
  i864.m_VerticalAlignment = i865[49]
  i864.m_textAlignment = i865[50]
  i864.m_characterSpacing = i865[51]
  i864.m_characterHorizontalScale = i865[52]
  i864.m_wordSpacing = i865[53]
  i864.m_lineSpacing = i865[54]
  i864.m_lineSpacingMax = i865[55]
  i864.m_paragraphSpacing = i865[56]
  i864.m_charWidthMaxAdj = i865[57]
  i864.m_TextWrappingMode = i865[58]
  i864.m_wordWrappingRatios = i865[59]
  i864.m_overflowMode = i865[60]
  request.r(i865[61], i865[62], 0, i864, 'm_linkedTextComponent')
  request.r(i865[63], i865[64], 0, i864, 'parentLinkedComponent')
  i864.m_enableKerning = !!i865[65]
  var i871 = i865[66]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(i871[i + 0]);
  }
  i864.m_ActiveFontFeatures = i870
  i864.m_enableExtraPadding = !!i865[67]
  i864.checkPaddingRequired = !!i865[68]
  i864.m_isRichText = !!i865[69]
  i864.m_parseCtrlCharacters = !!i865[70]
  i864.m_isOrthographic = !!i865[71]
  i864.m_isCullingEnabled = !!i865[72]
  i864.m_horizontalMapping = i865[73]
  i864.m_verticalMapping = i865[74]
  i864.m_uvLineOffset = i865[75]
  i864.m_geometrySortingOrder = i865[76]
  i864.m_IsTextObjectScaleStatic = !!i865[77]
  i864.m_VertexBufferAutoSizeReduction = !!i865[78]
  i864.m_useMaxVisibleDescender = !!i865[79]
  i864.m_pageToDisplay = i865[80]
  i864.m_margin = new pc.Vec4( i865[81], i865[82], i865[83], i865[84] )
  i864.m_isUsingLegacyAnimationComponent = !!i865[85]
  i864.m_isVolumetricText = !!i865[86]
  request.r(i865[87], i865[88], 0, i864, 'm_Material')
  i864.m_EmojiFallbackSupport = !!i865[89]
  i864.m_Maskable = !!i865[90]
  i864.m_Color = new pc.Color(i865[91], i865[92], i865[93], i865[94])
  i864.m_RaycastTarget = !!i865[95]
  i864.m_RaycastPadding = new pc.Vec4( i865[96], i865[97], i865[98], i865[99] )
  return i864
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

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i886 = root || request.c( 'CharacterMotor' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'characterInput')
  request.r(i887[2], i887[3], 0, i886, 'cameraYawTransform')
  i886.moveSpeed = i887[4]
  i886.jumpHeight = i887[5]
  request.r(i887[6], i887[7], 0, i886, 'groundChecker')
  i886.gravity = i887[8]
  request.r(i887[9], i887[10], 0, i886, 'controller')
  i886.autoRun = !!i887[11]
  return i886
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i888 = root || request.c( 'CharacterRotation' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'motor')
  i888.rotationSpeed = i889[2]
  return i888
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i890 = root || request.c( 'CharacterAnimation' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'animator')
  request.r(i891[2], i891[3], 0, i890, 'motor')
  return i890
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i892 = root || request.c( 'CharacterCollect' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'motor')
  request.r(i893[2], i893[3], 0, i892, 'avatar')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i895 = data
  i894.center = new pc.Vec3( i895[0], i895[1], i895[2] )
  i894.radius = i895[3]
  i894.height = i895[4]
  i894.direction = i895[5]
  i894.enabled = !!i895[6]
  i894.isTrigger = !!i895[7]
  request.r(i895[8], i895[9], 0, i894, 'material')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'animatorController')
  request.r(i897[2], i897[3], 0, i896, 'avatar')
  i896.updateMode = i897[4]
  i896.hasTransformHierarchy = !!i897[5]
  i896.applyRootMotion = !!i897[6]
  var i899 = i897[7]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.humanBones = i898
  i896.enabled = !!i897[8]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'clip')
  request.r(i903[2], i903[3], 0, i902, 'outputAudioMixerGroup')
  i902.playOnAwake = !!i903[4]
  i902.loop = !!i903[5]
  i902.time = i903[6]
  i902.volume = i903[7]
  i902.pitch = i903[8]
  i902.enabled = !!i903[9]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'sharedMesh')
  var i907 = i905[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.bones = i906
  i904.updateWhenOffscreen = !!i905[3]
  i904.localBounds = i905[4]
  request.r(i905[5], i905[6], 0, i904, 'rootBone')
  var i909 = i905[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i909[i + 0]) );
  }
  i904.blendShapesWeights = i908
  i904.enabled = !!i905[8]
  request.r(i905[9], i905[10], 0, i904, 'sharedMaterial')
  var i911 = i905[11]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i904.sharedMaterials = i910
  i904.receiveShadows = !!i905[12]
  i904.shadowCastingMode = i905[13]
  i904.sortingLayerID = i905[14]
  i904.sortingOrder = i905[15]
  i904.lightmapIndex = i905[16]
  i904.lightmapSceneIndex = i905[17]
  i904.lightmapScaleOffset = new pc.Vec4( i905[18], i905[19], i905[20], i905[21] )
  i904.lightProbeUsage = i905[22]
  i904.reflectionProbeUsage = i905[23]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i915 = data
  i914.weight = i915[0]
  return i914
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i916 = root || request.c( 'GroundChecker' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'groundPoint')
  i916.checkRadius = i917[2]
  i916.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i917[3] )
  return i916
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i918 = root || request.c( 'CameraFollow' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'target')
  i918.smoothTime = i919[2]
  return i918
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i920 = root || request.c( 'CameraLook' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'input')
  request.r(i921[2], i921[3], 0, i920, 'yawPivot')
  request.r(i921[4], i921[5], 0, i920, 'pitchPivot')
  i920.minPitch = i921[6]
  i920.maxPitch = i921[7]
  i920.yaw = i921[8]
  i920.pitch = i921[9]
  i920.defaltYaw = i921[10]
  i920.defaltPitch = i921[11]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i923 = data
  i922.aspect = i923[0]
  i922.orthographic = !!i923[1]
  i922.orthographicSize = i923[2]
  i922.backgroundColor = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.nearClipPlane = i923[7]
  i922.farClipPlane = i923[8]
  i922.fieldOfView = i923[9]
  i922.depth = i923[10]
  i922.clearFlags = i923[11]
  i922.cullingMask = i923[12]
  i922.rect = i923[13]
  request.r(i923[14], i923[15], 0, i922, 'targetTexture')
  i922.usePhysicalProperties = !!i923[16]
  i922.focalLength = i923[17]
  i922.sensorSize = new pc.Vec2( i923[18], i923[19] )
  i922.lensShift = new pc.Vec2( i923[20], i923[21] )
  i922.gateFit = i923[22]
  i922.commandBufferCount = i923[23]
  i922.cameraType = i923[24]
  i922.enabled = !!i923[25]
  return i922
}

Deserializers["Gift"] = function (request, data, root) {
  var i924 = root || request.c( 'Gift' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'avatar')
  i924.collectDone = !!i925[2]
  var i927 = i925[3]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 1, i926, '')
  }
  i924.hints = i926
  request.r(i925[4], i925[5], 0, i924, 'collectSound')
  request.r(i925[6], i925[7], 0, i924, 'collectEffect')
  request.r(i925[8], i925[9], 0, i924, 'action')
  return i924
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i930 = root || request.c( 'SoundHint' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'Sound')
  request.r(i931[2], i931[3], 0, i930, 'Source')
  return i930
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i932 = root || request.c( 'JumpHint' )
  var i933 = data
  i932.JumpForce = new pc.Vec3( i933[0], i933[1], i933[2] )
  request.r(i933[3], i933[4], 0, i932, 'Rigidbody')
  return i932
}

Deserializers["RunEffect"] = function (request, data, root) {
  var i934 = root || request.c( 'RunEffect' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'controller')
  request.r(i935[2], i935[3], 0, i934, 'targetPos')
  request.r(i935[4], i935[5], 0, i934, 'look')
  i934.moveSpeed = i935[6]
  i934.rotateSpeed = i935[7]
  i934.stopDistance = i935[8]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i937 = data
  i936.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i937[0], i936.main)
  i936.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i937[1], i936.colorBySpeed)
  i936.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i937[2], i936.colorOverLifetime)
  i936.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i937[3], i936.emission)
  i936.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i937[4], i936.rotationBySpeed)
  i936.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i937[5], i936.rotationOverLifetime)
  i936.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i937[6], i936.shape)
  i936.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i937[7], i936.sizeBySpeed)
  i936.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i937[8], i936.sizeOverLifetime)
  i936.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i937[9], i936.textureSheetAnimation)
  i936.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i937[10], i936.velocityOverLifetime)
  i936.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i937[11], i936.noise)
  i936.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i937[12], i936.inheritVelocity)
  i936.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i937[13], i936.forceOverLifetime)
  i936.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i937[14], i936.limitVelocityOverLifetime)
  i936.useAutoRandomSeed = !!i937[15]
  i936.randomSeed = i937[16]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemMain()
  var i939 = data
  i938.duration = i939[0]
  i938.loop = !!i939[1]
  i938.prewarm = !!i939[2]
  i938.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.startDelay)
  i938.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[4], i938.startLifetime)
  i938.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[5], i938.startSpeed)
  i938.startSize3D = !!i939[6]
  i938.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[7], i938.startSizeX)
  i938.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[8], i938.startSizeY)
  i938.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[9], i938.startSizeZ)
  i938.startRotation3D = !!i939[10]
  i938.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[11], i938.startRotationX)
  i938.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[12], i938.startRotationY)
  i938.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[13], i938.startRotationZ)
  i938.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i939[14], i938.startColor)
  i938.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[15], i938.gravityModifier)
  i938.simulationSpace = i939[16]
  request.r(i939[17], i939[18], 0, i938, 'customSimulationSpace')
  i938.simulationSpeed = i939[19]
  i938.useUnscaledTime = !!i939[20]
  i938.scalingMode = i939[21]
  i938.playOnAwake = !!i939[22]
  i938.maxParticles = i939[23]
  i938.emitterVelocityMode = i939[24]
  i938.stopAction = i939[25]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i940 = root || new pc.MinMaxCurve()
  var i941 = data
  i940.mode = i941[0]
  i940.curveMin = new pc.AnimationCurve( { keys_flow: i941[1] } )
  i940.curveMax = new pc.AnimationCurve( { keys_flow: i941[2] } )
  i940.curveMultiplier = i941[3]
  i940.constantMin = i941[4]
  i940.constantMax = i941[5]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i942 = root || new pc.MinMaxGradient()
  var i943 = data
  i942.mode = i943[0]
  i942.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i943[1], i942.gradientMin)
  i942.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i943[2], i942.gradientMax)
  i942.colorMin = new pc.Color(i943[3], i943[4], i943[5], i943[6])
  i942.colorMax = new pc.Color(i943[7], i943[8], i943[9], i943[10])
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i945 = data
  i944.mode = i945[0]
  var i947 = i945[1]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i947[i + 0]) );
  }
  i944.colorKeys = i946
  var i949 = i945[2]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i949[i + 0]) );
  }
  i944.alphaKeys = i948
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i953 = data
  i952.color = new pc.Color(i953[0], i953[1], i953[2], i953[3])
  i952.time = i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i957 = data
  i956.alpha = i957[0]
  i956.time = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemColorBySpeed()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i959[1], i958.color)
  i958.range = new pc.Vec2( i959[2], i959[3] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemColorOverLifetime()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i961[1], i960.color)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemEmitter()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.rateOverTime)
  i962.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.rateOverDistance)
  var i965 = i963[3]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i965[i + 0]) );
  }
  i962.bursts = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemBurst()
  var i969 = data
  i968.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[0], i968.count)
  i968.cycleCount = i969[1]
  i968.minCount = i969[2]
  i968.maxCount = i969[3]
  i968.repeatInterval = i969[4]
  i968.time = i969[5]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemRotationBySpeed()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[1], i970.x)
  i970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.y)
  i970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[3], i970.z)
  i970.separateAxes = !!i971[4]
  i970.range = new pc.Vec2( i971[5], i971[6] )
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemRotationOverLifetime()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.separateAxes = !!i973[4]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemShape()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.shapeType = i975[1]
  i974.randomDirectionAmount = i975[2]
  i974.sphericalDirectionAmount = i975[3]
  i974.randomPositionAmount = i975[4]
  i974.alignToDirection = !!i975[5]
  i974.radius = i975[6]
  i974.radiusMode = i975[7]
  i974.radiusSpread = i975[8]
  i974.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[9], i974.radiusSpeed)
  i974.radiusThickness = i975[10]
  i974.angle = i975[11]
  i974.length = i975[12]
  i974.boxThickness = new pc.Vec3( i975[13], i975[14], i975[15] )
  i974.meshShapeType = i975[16]
  request.r(i975[17], i975[18], 0, i974, 'mesh')
  request.r(i975[19], i975[20], 0, i974, 'meshRenderer')
  request.r(i975[21], i975[22], 0, i974, 'skinnedMeshRenderer')
  i974.useMeshMaterialIndex = !!i975[23]
  i974.meshMaterialIndex = i975[24]
  i974.useMeshColors = !!i975[25]
  i974.normalOffset = i975[26]
  i974.arc = i975[27]
  i974.arcMode = i975[28]
  i974.arcSpread = i975[29]
  i974.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[30], i974.arcSpeed)
  i974.donutRadius = i975[31]
  i974.position = new pc.Vec3( i975[32], i975[33], i975[34] )
  i974.rotation = new pc.Vec3( i975[35], i975[36], i975[37] )
  i974.scale = new pc.Vec3( i975[38], i975[39], i975[40] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemSizeBySpeed()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[1], i976.x)
  i976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.y)
  i976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.z)
  i976.separateAxes = !!i977[4]
  i976.range = new pc.Vec2( i977[5], i977[6] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemSizeOverLifetime()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[1], i978.x)
  i978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.y)
  i978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.z)
  i978.separateAxes = !!i979[4]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.mode = i981[1]
  i980.animation = i981[2]
  i980.numTilesX = i981[3]
  i980.numTilesY = i981[4]
  i980.useRandomRow = !!i981[5]
  i980.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[6], i980.frameOverTime)
  i980.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[7], i980.startFrame)
  i980.cycleCount = i981[8]
  i980.rowIndex = i981[9]
  i980.flipU = i981[10]
  i980.flipV = i981[11]
  i980.spriteCount = i981[12]
  var i983 = i981[13]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.sprites = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i986 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i987 = data
  i986.enabled = !!i987[0]
  i986.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[1], i986.x)
  i986.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[2], i986.y)
  i986.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[3], i986.z)
  i986.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[4], i986.radial)
  i986.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[5], i986.speedModifier)
  i986.space = i987[6]
  i986.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[7], i986.orbitalX)
  i986.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[8], i986.orbitalY)
  i986.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[9], i986.orbitalZ)
  i986.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[10], i986.orbitalOffsetX)
  i986.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[11], i986.orbitalOffsetY)
  i986.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[12], i986.orbitalOffsetZ)
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemNoise()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.separateAxes = !!i989[1]
  i988.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[2], i988.strengthX)
  i988.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[3], i988.strengthY)
  i988.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[4], i988.strengthZ)
  i988.frequency = i989[5]
  i988.damping = !!i989[6]
  i988.octaveCount = i989[7]
  i988.octaveMultiplier = i989[8]
  i988.octaveScale = i989[9]
  i988.quality = i989[10]
  i988.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[11], i988.scrollSpeed)
  i988.scrollSpeedMultiplier = i989[12]
  i988.remapEnabled = !!i989[13]
  i988.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[14], i988.remapX)
  i988.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[15], i988.remapY)
  i988.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[16], i988.remapZ)
  i988.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[17], i988.positionAmount)
  i988.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[18], i988.rotationAmount)
  i988.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[19], i988.sizeAmount)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemInheritVelocity()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.mode = i991[1]
  i990.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.curve)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemForceOverLifetime()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[1], i992.x)
  i992.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[2], i992.y)
  i992.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[3], i992.z)
  i992.space = i993[4]
  i992.randomized = !!i993[5]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i994 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i995 = data
  i994.enabled = !!i995[0]
  i994.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[1], i994.limit)
  i994.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[2], i994.limitX)
  i994.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[3], i994.limitY)
  i994.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[4], i994.limitZ)
  i994.dampen = i995[5]
  i994.separateAxes = !!i995[6]
  i994.space = i995[7]
  i994.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[8], i994.drag)
  i994.multiplyDragByParticleSize = !!i995[9]
  i994.multiplyDragByParticleVelocity = !!i995[10]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'mesh')
  i996.meshCount = i997[2]
  i996.activeVertexStreamsCount = i997[3]
  i996.alignment = i997[4]
  i996.renderMode = i997[5]
  i996.sortMode = i997[6]
  i996.lengthScale = i997[7]
  i996.velocityScale = i997[8]
  i996.cameraVelocityScale = i997[9]
  i996.normalDirection = i997[10]
  i996.sortingFudge = i997[11]
  i996.minParticleSize = i997[12]
  i996.maxParticleSize = i997[13]
  i996.pivot = new pc.Vec3( i997[14], i997[15], i997[16] )
  request.r(i997[17], i997[18], 0, i996, 'trailMaterial')
  i996.applyActiveColorSpace = !!i997[19]
  i996.enabled = !!i997[20]
  request.r(i997[21], i997[22], 0, i996, 'sharedMaterial')
  var i999 = i997[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i996.sharedMaterials = i998
  i996.receiveShadows = !!i997[24]
  i996.shadowCastingMode = i997[25]
  i996.sortingLayerID = i997[26]
  i996.sortingOrder = i997[27]
  i996.lightmapIndex = i997[28]
  i996.lightmapSceneIndex = i997[29]
  i996.lightmapScaleOffset = new pc.Vec4( i997[30], i997[31], i997[32], i997[33] )
  i996.lightProbeUsage = i997[34]
  i996.reflectionProbeUsage = i997[35]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1001 = data
  i1000.color = new pc.Color(i1001[0], i1001[1], i1001[2], i1001[3])
  request.r(i1001[4], i1001[5], 0, i1000, 'sprite')
  i1000.flipX = !!i1001[6]
  i1000.flipY = !!i1001[7]
  i1000.drawMode = i1001[8]
  i1000.size = new pc.Vec2( i1001[9], i1001[10] )
  i1000.tileMode = i1001[11]
  i1000.adaptiveModeThreshold = i1001[12]
  i1000.maskInteraction = i1001[13]
  i1000.spriteSortPoint = i1001[14]
  i1000.enabled = !!i1001[15]
  request.r(i1001[16], i1001[17], 0, i1000, 'sharedMaterial')
  var i1003 = i1001[18]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.sharedMaterials = i1002
  i1000.receiveShadows = !!i1001[19]
  i1000.shadowCastingMode = i1001[20]
  i1000.sortingLayerID = i1001[21]
  i1000.sortingOrder = i1001[22]
  i1000.lightmapIndex = i1001[23]
  i1000.lightmapSceneIndex = i1001[24]
  i1000.lightmapScaleOffset = new pc.Vec4( i1001[25], i1001[26], i1001[27], i1001[28] )
  i1000.lightProbeUsage = i1001[29]
  i1000.reflectionProbeUsage = i1001[30]
  return i1000
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1004 = root || request.c( 'CharacterInput' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'joystick')
  request.r(i1005[2], i1005[3], 0, i1004, 'jumpButton')
  return i1004
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'InputManager' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'worldCamera')
  i1006.touchSensitivity = i1007[2]
  i1006.mouseSensitivity = i1007[3]
  i1006.dragThreshold = i1007[4]
  return i1006
}

Deserializers["GameController"] = function (request, data, root) {
  var i1008 = root || request.c( 'GameController' )
  var i1009 = data
  i1008.timeToShowComplete = i1009[0]
  i1008.timeToShowHint = i1009[1]
  i1008.currentProgress = i1009[2]
  i1008.target = i1009[3]
  request.r(i1009[4], i1009[5], 0, i1008, 'progressText')
  request.r(i1009[6], i1009[7], 0, i1008, 'tut')
  request.r(i1009[8], i1009[9], 0, i1008, 'inputUI')
  request.r(i1009[10], i1009[11], 0, i1008, 'completeScene')
  request.r(i1009[12], i1009[13], 0, i1008, 'collector')
  return i1008
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1010 = root || request.c( 'AudioController' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'musicSource')
  request.r(i1011[2], i1011[3], 0, i1010, 'poolParent')
  i1010.startSize = i1011[4]
  return i1010
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1012 = root || request.c( 'LunaController' )
  var i1013 = data
  i1012.LimitTimePlay = !!i1013[0]
  i1012.TimePlay = i1013[1]
  var i1015 = i1013[2]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 1, i1014, '')
  }
  i1012.CTA = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1019 = data
  i1018.ambientIntensity = i1019[0]
  i1018.reflectionIntensity = i1019[1]
  i1018.ambientMode = i1019[2]
  i1018.ambientLight = new pc.Color(i1019[3], i1019[4], i1019[5], i1019[6])
  i1018.ambientSkyColor = new pc.Color(i1019[7], i1019[8], i1019[9], i1019[10])
  i1018.ambientGroundColor = new pc.Color(i1019[11], i1019[12], i1019[13], i1019[14])
  i1018.ambientEquatorColor = new pc.Color(i1019[15], i1019[16], i1019[17], i1019[18])
  i1018.fogColor = new pc.Color(i1019[19], i1019[20], i1019[21], i1019[22])
  i1018.fogEndDistance = i1019[23]
  i1018.fogStartDistance = i1019[24]
  i1018.fogDensity = i1019[25]
  i1018.fog = !!i1019[26]
  request.r(i1019[27], i1019[28], 0, i1018, 'skybox')
  i1018.fogMode = i1019[29]
  var i1021 = i1019[30]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1021[i + 0]) );
  }
  i1018.lightmaps = i1020
  i1018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1019[31], i1018.lightProbes)
  i1018.lightmapsMode = i1019[32]
  i1018.mixedBakeMode = i1019[33]
  i1018.environmentLightingMode = i1019[34]
  i1018.ambientProbe = new pc.SphericalHarmonicsL2(i1019[35])
  request.r(i1019[36], i1019[37], 0, i1018, 'customReflection')
  request.r(i1019[38], i1019[39], 0, i1018, 'defaultReflection')
  i1018.defaultReflectionMode = i1019[40]
  i1018.defaultReflectionResolution = i1019[41]
  i1018.sunLightObjectId = i1019[42]
  i1018.pixelLightCount = i1019[43]
  i1018.defaultReflectionHDR = !!i1019[44]
  i1018.hasLightDataAsset = !!i1019[45]
  i1018.hasManualGenerate = !!i1019[46]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'lightmapColor')
  request.r(i1025[2], i1025[3], 0, i1024, 'lightmapDirection')
  request.r(i1025[4], i1025[5], 0, i1024, 'shadowMask')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1026 = root || new UnityEngine.LightProbes()
  var i1027 = data
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1037[i + 0]));
  }
  i1034.ShaderCompilationErrors = i1036
  i1034.name = i1035[1]
  i1034.guid = i1035[2]
  var i1039 = i1035[3]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.shaderDefinedKeywords = i1038
  var i1041 = i1035[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1041[i + 0]) );
  }
  i1034.passes = i1040
  var i1043 = i1035[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1043[i + 0]) );
  }
  i1034.usePasses = i1042
  var i1045 = i1035[6]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1045[i + 0]) );
  }
  i1034.defaultParameterValues = i1044
  request.r(i1035[7], i1035[8], 0, i1034, 'unityFallbackShader')
  i1034.readDepth = !!i1035[9]
  i1034.hasDepthOnlyPass = !!i1035[10]
  i1034.isCreatedByShaderGraph = !!i1035[11]
  i1034.disableBatching = !!i1035[12]
  i1034.compiled = !!i1035[13]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1049 = data
  i1048.shaderName = i1049[0]
  i1048.errorMessage = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1054 = root || new pc.UnityShaderPass()
  var i1055 = data
  i1054.id = i1055[0]
  i1054.subShaderIndex = i1055[1]
  i1054.name = i1055[2]
  i1054.passType = i1055[3]
  i1054.grabPassTextureName = i1055[4]
  i1054.usePass = !!i1055[5]
  i1054.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[6], i1054.zTest)
  i1054.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[7], i1054.zWrite)
  i1054.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[8], i1054.culling)
  i1054.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[9], i1054.blending)
  i1054.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[10], i1054.alphaBlending)
  i1054.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[11], i1054.colorWriteMask)
  i1054.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[12], i1054.offsetUnits)
  i1054.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[13], i1054.offsetFactor)
  i1054.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[14], i1054.stencilRef)
  i1054.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[15], i1054.stencilReadMask)
  i1054.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[16], i1054.stencilWriteMask)
  i1054.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[17], i1054.stencilOp)
  i1054.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[18], i1054.stencilOpFront)
  i1054.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[19], i1054.stencilOpBack)
  var i1057 = i1055[20]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1057[i + 0]) );
  }
  i1054.tags = i1056
  var i1059 = i1055[21]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.passDefinedKeywords = i1058
  var i1061 = i1055[22]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1061[i + 0]) );
  }
  i1054.passDefinedKeywordGroups = i1060
  var i1063 = i1055[23]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1063[i + 0]) );
  }
  i1054.variants = i1062
  var i1065 = i1055[24]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1065[i + 0]) );
  }
  i1054.excludedVariants = i1064
  i1054.hasDepthReader = !!i1055[25]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1067 = data
  i1066.val = i1067[0]
  i1066.name = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1069 = data
  i1068.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[0], i1068.src)
  i1068.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[1], i1068.dst)
  i1068.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[2], i1068.op)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1071 = data
  i1070.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[0], i1070.pass)
  i1070.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[1], i1070.fail)
  i1070.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[2], i1070.zFail)
  i1070.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[3], i1070.comp)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.value = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.keywords = i1080
  i1078.hasDiscard = !!i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1085 = data
  i1084.passId = i1085[0]
  i1084.subShaderIndex = i1085[1]
  var i1087 = i1085[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1084.keywords = i1086
  i1084.vertexProgram = i1085[3]
  i1084.fragmentProgram = i1085[4]
  i1084.exportedForWebGl2 = !!i1085[5]
  i1084.readDepth = !!i1085[6]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'shader')
  i1090.pass = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.type = i1095[1]
  i1094.value = new pc.Vec4( i1095[2], i1095[3], i1095[4], i1095[5] )
  i1094.textureValue = i1095[6]
  i1094.shaderPropertyFlag = i1095[7]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1097 = data
  i1096.name = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'texture')
  i1096.aabb = i1097[3]
  i1096.vertices = i1097[4]
  i1096.triangles = i1097[5]
  i1096.textureRect = UnityEngine.Rect.MinMaxRect(i1097[6], i1097[7], i1097[8], i1097[9])
  i1096.packedRect = UnityEngine.Rect.MinMaxRect(i1097[10], i1097[11], i1097[12], i1097[13])
  i1096.border = new pc.Vec4( i1097[14], i1097[15], i1097[16], i1097[17] )
  i1096.transparency = i1097[18]
  i1096.bounds = i1097[19]
  i1096.pixelsPerUnit = i1097[20]
  i1096.textureWidth = i1097[21]
  i1096.textureHeight = i1097[22]
  i1096.nativeSize = new pc.Vec2( i1097[23], i1097[24] )
  i1096.pivot = new pc.Vec2( i1097[25], i1097[26] )
  i1096.textureRectOffset = new pc.Vec2( i1097[27], i1097[28] )
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1099 = data
  i1098.name = i1099[0]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.wrapMode = i1101[1]
  i1100.isLooping = !!i1101[2]
  i1100.length = i1101[3]
  var i1103 = i1101[4]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1103[i + 0]) );
  }
  i1100.curves = i1102
  var i1105 = i1101[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1105[i + 0]) );
  }
  i1100.events = i1104
  i1100.halfPrecision = !!i1101[6]
  i1100._frameRate = i1101[7]
  i1100.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1101[8], i1100.localBounds)
  i1100.hasMuscleCurves = !!i1101[9]
  var i1107 = i1101[10]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1100.clipMuscleConstant = i1106
  i1100.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1101[11], i1100.clipBindingConstant)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1111 = data
  i1110.path = i1111[0]
  i1110.hash = i1111[1]
  i1110.componentType = i1111[2]
  i1110.property = i1111[3]
  i1110.keys = i1111[4]
  var i1113 = i1111[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1113[i + 0]) );
  }
  i1110.objectReferenceKeys = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1117 = data
  i1116.time = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'value')
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1121 = data
  i1120.functionName = i1121[0]
  i1120.floatParameter = i1121[1]
  i1120.intParameter = i1121[2]
  i1120.stringParameter = i1121[3]
  request.r(i1121[4], i1121[5], 0, i1120, 'objectReferenceParameter')
  i1120.time = i1121[6]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1123 = data
  i1122.center = new pc.Vec3( i1123[0], i1123[1], i1123[2] )
  i1122.extends = new pc.Vec3( i1123[3], i1123[4], i1123[5] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.genericBindings = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.pptrCurveMapping = i1130
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1133 = data
  i1132.name = i1133[0]
  var i1135 = i1133[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1135[i + 0]) );
  }
  i1132.layers = i1134
  var i1137 = i1133[2]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1137[i + 0]) );
  }
  i1132.parameters = i1136
  i1132.animationClips = i1133[3]
  i1132.avatarUnsupported = i1133[4]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.defaultWeight = i1141[1]
  i1140.blendingMode = i1141[2]
  i1140.avatarMask = i1141[3]
  i1140.syncedLayerIndex = i1141[4]
  i1140.syncedLayerAffectsTiming = !!i1141[5]
  i1140.syncedLayers = i1141[6]
  i1140.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1141[7], i1140.stateMachine)
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1143 = data
  i1142.id = i1143[0]
  i1142.name = i1143[1]
  i1142.path = i1143[2]
  var i1145 = i1143[3]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1145[i + 0]) );
  }
  i1142.states = i1144
  var i1147 = i1143[4]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1147[i + 0]) );
  }
  i1142.machines = i1146
  var i1149 = i1143[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1149[i + 0]) );
  }
  i1142.entryStateTransitions = i1148
  var i1151 = i1143[6]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1151[i + 0]) );
  }
  i1142.exitStateTransitions = i1150
  var i1153 = i1143[7]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1153[i + 0]) );
  }
  i1142.anyStateTransitions = i1152
  i1142.defaultStateId = i1143[8]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.name = i1157[1]
  i1156.cycleOffset = i1157[2]
  i1156.cycleOffsetParameter = i1157[3]
  i1156.cycleOffsetParameterActive = !!i1157[4]
  i1156.mirror = !!i1157[5]
  i1156.mirrorParameter = i1157[6]
  i1156.mirrorParameterActive = !!i1157[7]
  i1156.motionId = i1157[8]
  i1156.nameHash = i1157[9]
  i1156.fullPathHash = i1157[10]
  i1156.speed = i1157[11]
  i1156.speedParameter = i1157[12]
  i1156.speedParameterActive = !!i1157[13]
  i1156.tag = i1157[14]
  i1156.tagHash = i1157[15]
  i1156.writeDefaultValues = !!i1157[16]
  var i1159 = i1157[17]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1156.behaviours = i1158
  var i1161 = i1157[18]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1161[i + 0]) );
  }
  i1156.transitions = i1160
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1167 = data
  i1166.fullPath = i1167[0]
  i1166.canTransitionToSelf = !!i1167[1]
  i1166.duration = i1167[2]
  i1166.exitTime = i1167[3]
  i1166.hasExitTime = !!i1167[4]
  i1166.hasFixedDuration = !!i1167[5]
  i1166.interruptionSource = i1167[6]
  i1166.offset = i1167[7]
  i1166.orderedInterruption = !!i1167[8]
  i1166.destinationStateId = i1167[9]
  i1166.isExit = !!i1167[10]
  i1166.mute = !!i1167[11]
  i1166.solo = !!i1167[12]
  var i1169 = i1167[13]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1169[i + 0]) );
  }
  i1166.conditions = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1173 = data
  i1172.mode = i1173[0]
  i1172.parameter = i1173[1]
  i1172.threshold = i1173[2]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1179 = data
  i1178.destinationStateId = i1179[0]
  i1178.isExit = !!i1179[1]
  i1178.mute = !!i1179[2]
  i1178.solo = !!i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1181[i + 0]) );
  }
  i1178.conditions = i1180
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1185 = data
  i1184.defaultBool = !!i1185[0]
  i1184.defaultFloat = i1185[1]
  i1184.defaultInt = i1185[2]
  i1184.name = i1185[3]
  i1184.nameHash = i1185[4]
  i1184.type = i1185[5]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1187 = data
  i1186.name = i1187[0]
  request.r(i1187[1], i1187[2], 0, i1186, '_runtimeAnimatorController')
  var i1189 = i1187[3]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1186._originalAnimationClips = i1188
  var i1191 = i1187[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 2, i1190, '')
  }
  i1186._overrideAnimationClips = i1190
  var i1193 = i1187[5]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 2, i1192, '')
  }
  i1186._animationClips = i1192
  var i1195 = i1187[6]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('UnityEngine.AnimationClipPair', i1195[i + 0]) );
  }
  i1186._animationClipPairs = i1194
  return i1186
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'originalClip')
  request.r(i1201[2], i1201[3], 0, i1200, 'overrideClip')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.bytes64 = i1203[1]
  i1202.data = i1203[2]
  return i1202
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1205 = data
  i1204.normalStyle = i1205[0]
  i1204.normalSpacingOffset = i1205[1]
  i1204.boldStyle = i1205[2]
  i1204.boldSpacing = i1205[3]
  i1204.italicStyle = i1205[4]
  i1204.tabSize = i1205[5]
  request.r(i1205[6], i1205[7], 0, i1204, 'atlas')
  i1204.m_SourceFontFileGUID = i1205[8]
  i1204.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1205[9], i1204.m_CreationSettings)
  request.r(i1205[10], i1205[11], 0, i1204, 'm_SourceFontFile')
  i1204.m_SourceFontFilePath = i1205[12]
  i1204.m_AtlasPopulationMode = i1205[13]
  i1204.InternalDynamicOS = !!i1205[14]
  var i1207 = i1205[15]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('UnityEngine.TextCore.Glyph', i1207[i + 0]));
  }
  i1204.m_GlyphTable = i1206
  var i1209 = i1205[16]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Character', i1209[i + 0]));
  }
  i1204.m_CharacterTable = i1208
  var i1211 = i1205[17]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 2, i1210, '')
  }
  i1204.m_AtlasTextures = i1210
  i1204.m_AtlasTextureIndex = i1205[18]
  i1204.m_IsMultiAtlasTexturesEnabled = !!i1205[19]
  i1204.m_GetFontFeatures = !!i1205[20]
  i1204.m_ClearDynamicDataOnBuild = !!i1205[21]
  i1204.m_AtlasWidth = i1205[22]
  i1204.m_AtlasHeight = i1205[23]
  i1204.m_AtlasPadding = i1205[24]
  i1204.m_AtlasRenderMode = i1205[25]
  var i1213 = i1205[26]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('UnityEngine.TextCore.GlyphRect', i1213[i + 0]));
  }
  i1204.m_UsedGlyphRects = i1212
  var i1215 = i1205[27]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('UnityEngine.TextCore.GlyphRect', i1215[i + 0]));
  }
  i1204.m_FreeGlyphRects = i1214
  i1204.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1205[28], i1204.m_FontFeatureTable)
  i1204.m_ShouldReimportFontFeatures = !!i1205[29]
  var i1217 = i1205[30]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 1, i1216, '')
  }
  i1204.m_FallbackFontAssetTable = i1216
  var i1219 = i1205[31]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('TMPro.TMP_FontWeightPair', i1219[i + 0]) );
  }
  i1204.m_FontWeightTable = i1218
  var i1221 = i1205[32]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('TMPro.TMP_FontWeightPair', i1221[i + 0]) );
  }
  i1204.fontWeights = i1220
  i1204.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1205[33], i1204.m_fontInfo)
  var i1223 = i1205[34]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_Glyph', i1223[i + 0]));
  }
  i1204.m_glyphInfoList = i1222
  i1204.m_KerningTable = request.d('TMPro.KerningTable', i1205[35], i1204.m_KerningTable)
  var i1225 = i1205[36]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1204.fallbackFontAssets = i1224
  i1204.m_Version = i1205[37]
  i1204.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1205[38], i1204.m_FaceInfo)
  request.r(i1205[39], i1205[40], 0, i1204, 'm_Material')
  return i1204
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1227 = data
  i1226.sourceFontFileName = i1227[0]
  i1226.sourceFontFileGUID = i1227[1]
  i1226.faceIndex = i1227[2]
  i1226.pointSizeSamplingMode = i1227[3]
  i1226.pointSize = i1227[4]
  i1226.padding = i1227[5]
  i1226.paddingMode = i1227[6]
  i1226.packingMode = i1227[7]
  i1226.atlasWidth = i1227[8]
  i1226.atlasHeight = i1227[9]
  i1226.characterSetSelectionMode = i1227[10]
  i1226.characterSequence = i1227[11]
  i1226.referencedFontAssetGUID = i1227[12]
  i1226.referencedTextAssetGUID = i1227[13]
  i1226.fontStyle = i1227[14]
  i1226.fontStyleModifier = i1227[15]
  i1226.renderMode = i1227[16]
  i1226.includeFontFeatures = !!i1227[17]
  return i1226
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1231 = data
  i1230.m_Index = i1231[0]
  i1230.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1231[1], i1230.m_Metrics)
  i1230.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1231[2], i1230.m_GlyphRect)
  i1230.m_Scale = i1231[3]
  i1230.m_AtlasIndex = i1231[4]
  i1230.m_ClassDefinitionType = i1231[5]
  return i1230
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1233 = data
  i1232.m_Width = i1233[0]
  i1232.m_Height = i1233[1]
  i1232.m_HorizontalBearingX = i1233[2]
  i1232.m_HorizontalBearingY = i1233[3]
  i1232.m_HorizontalAdvance = i1233[4]
  return i1232
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1235 = data
  i1234.m_X = i1235[0]
  i1234.m_Y = i1235[1]
  i1234.m_Width = i1235[2]
  i1234.m_Height = i1235[3]
  return i1234
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_Character' )
  var i1239 = data
  i1238.m_ElementType = i1239[0]
  i1238.m_Unicode = i1239[1]
  i1238.m_GlyphIndex = i1239[2]
  i1238.m_Scale = i1239[3]
  return i1238
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.MultipleSubstitutionRecord', i1247[i + 0]));
  }
  i1244.m_MultipleSubstitutionRecords = i1246
  var i1249 = i1245[1]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('TMPro.LigatureSubstitutionRecord', i1249[i + 0]));
  }
  i1244.m_LigatureSubstitutionRecords = i1248
  var i1251 = i1245[2]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1251[i + 0]));
  }
  i1244.m_GlyphPairAdjustmentRecords = i1250
  var i1253 = i1245[3]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1253[i + 0]));
  }
  i1244.m_MarkToBaseAdjustmentRecords = i1252
  var i1255 = i1245[4]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1255[i + 0]));
  }
  i1244.m_MarkToMarkAdjustmentRecords = i1254
  return i1244
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1259 = data
  i1258.m_TargetGlyphID = i1259[0]
  i1258.m_SubstituteGlyphIDs = i1259[1]
  return i1258
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1263 = data
  i1262.m_ComponentGlyphIDs = i1263[0]
  i1262.m_LigatureGlyphID = i1263[1]
  return i1262
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1267 = data
  i1266.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1267[0], i1266.m_FirstAdjustmentRecord)
  i1266.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1267[1], i1266.m_SecondAdjustmentRecord)
  i1266.m_FeatureLookupFlags = i1267[2]
  return i1266
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1271 = data
  i1270.m_BaseGlyphID = i1271[0]
  i1270.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1271[1], i1270.m_BaseGlyphAnchorPoint)
  i1270.m_MarkGlyphID = i1271[2]
  i1270.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1271[3], i1270.m_MarkPositionAdjustment)
  return i1270
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1275 = data
  i1274.m_BaseMarkGlyphID = i1275[0]
  i1274.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1275[1], i1274.m_BaseMarkGlyphAnchorPoint)
  i1274.m_CombiningMarkGlyphID = i1275[2]
  i1274.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1275[3], i1274.m_CombiningMarkPositionAdjustment)
  return i1274
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'regularTypeface')
  request.r(i1281[2], i1281[3], 0, i1280, 'italicTypeface')
  return i1280
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1283 = data
  i1282.Name = i1283[0]
  i1282.PointSize = i1283[1]
  i1282.Scale = i1283[2]
  i1282.CharacterCount = i1283[3]
  i1282.LineHeight = i1283[4]
  i1282.Baseline = i1283[5]
  i1282.Ascender = i1283[6]
  i1282.CapHeight = i1283[7]
  i1282.Descender = i1283[8]
  i1282.CenterLine = i1283[9]
  i1282.SuperscriptOffset = i1283[10]
  i1282.SubscriptOffset = i1283[11]
  i1282.SubSize = i1283[12]
  i1282.Underline = i1283[13]
  i1282.UnderlineThickness = i1283[14]
  i1282.strikethrough = i1283[15]
  i1282.strikethroughThickness = i1283[16]
  i1282.TabWidth = i1283[17]
  i1282.Padding = i1283[18]
  i1282.AtlasWidth = i1283[19]
  i1282.AtlasHeight = i1283[20]
  return i1282
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.x = i1287[1]
  i1286.y = i1287[2]
  i1286.width = i1287[3]
  i1286.height = i1287[4]
  i1286.xOffset = i1287[5]
  i1286.yOffset = i1287[6]
  i1286.xAdvance = i1287[7]
  i1286.scale = i1287[8]
  return i1286
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.KerningTable' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.KerningPair', i1291[i + 0]));
  }
  i1288.kerningPairs = i1290
  return i1288
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.KerningPair' )
  var i1295 = data
  i1294.xOffset = i1295[0]
  i1294.m_FirstGlyph = i1295[1]
  i1294.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[2], i1294.m_FirstGlyphAdjustments)
  i1294.m_SecondGlyph = i1295[3]
  i1294.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[4], i1294.m_SecondGlyphAdjustments)
  i1294.m_IgnoreSpacingAdjustments = !!i1295[5]
  return i1294
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1297 = data
  i1296.m_FaceIndex = i1297[0]
  i1296.m_FamilyName = i1297[1]
  i1296.m_StyleName = i1297[2]
  i1296.m_PointSize = i1297[3]
  i1296.m_Scale = i1297[4]
  i1296.m_UnitsPerEM = i1297[5]
  i1296.m_LineHeight = i1297[6]
  i1296.m_AscentLine = i1297[7]
  i1296.m_CapLine = i1297[8]
  i1296.m_MeanLine = i1297[9]
  i1296.m_Baseline = i1297[10]
  i1296.m_DescentLine = i1297[11]
  i1296.m_SuperscriptOffset = i1297[12]
  i1296.m_SuperscriptSize = i1297[13]
  i1296.m_SubscriptOffset = i1297[14]
  i1296.m_SubscriptSize = i1297[15]
  i1296.m_UnderlineOffset = i1297[16]
  i1296.m_UnderlineThickness = i1297[17]
  i1296.m_StrikethroughOffset = i1297[18]
  i1296.m_StrikethroughThickness = i1297[19]
  i1296.m_TabWidth = i1297[20]
  return i1296
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1299 = data
  i1298.useSafeMode = !!i1299[0]
  i1298.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1299[1], i1298.safeModeOptions)
  i1298.timeScale = i1299[2]
  i1298.unscaledTimeScale = i1299[3]
  i1298.useSmoothDeltaTime = !!i1299[4]
  i1298.maxSmoothUnscaledTime = i1299[5]
  i1298.rewindCallbackMode = i1299[6]
  i1298.showUnityEditorReport = !!i1299[7]
  i1298.logBehaviour = i1299[8]
  i1298.drawGizmos = !!i1299[9]
  i1298.defaultRecyclable = !!i1299[10]
  i1298.defaultAutoPlay = i1299[11]
  i1298.defaultUpdateType = i1299[12]
  i1298.defaultTimeScaleIndependent = !!i1299[13]
  i1298.defaultEaseType = i1299[14]
  i1298.defaultEaseOvershootOrAmplitude = i1299[15]
  i1298.defaultEasePeriod = i1299[16]
  i1298.defaultAutoKill = !!i1299[17]
  i1298.defaultLoopType = i1299[18]
  i1298.debugMode = !!i1299[19]
  i1298.debugStoreTargetId = !!i1299[20]
  i1298.showPreviewPanel = !!i1299[21]
  i1298.storeSettingsLocation = i1299[22]
  i1298.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1299[23], i1298.modules)
  i1298.createASMDEF = !!i1299[24]
  i1298.showPlayingTweens = !!i1299[25]
  i1298.showPausedTweens = !!i1299[26]
  return i1298
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1300 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1301 = data
  i1300.logBehaviour = i1301[0]
  i1300.nestedTweenFailureBehaviour = i1301[1]
  return i1300
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1302 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1303 = data
  i1302.showPanel = !!i1303[0]
  i1302.audioEnabled = !!i1303[1]
  i1302.physicsEnabled = !!i1303[2]
  i1302.physics2DEnabled = !!i1303[3]
  i1302.spriteEnabled = !!i1303[4]
  i1302.uiEnabled = !!i1303[5]
  i1302.textMeshProEnabled = !!i1303[6]
  i1302.tk2DEnabled = !!i1303[7]
  i1302.deAudioEnabled = !!i1303[8]
  i1302.deUnityExtendedEnabled = !!i1303[9]
  i1302.epoOutlineEnabled = !!i1303[10]
  return i1302
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_Settings' )
  var i1305 = data
  i1304.assetVersion = i1305[0]
  i1304.m_TextWrappingMode = i1305[1]
  i1304.m_enableKerning = !!i1305[2]
  var i1307 = i1305[3]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(i1307[i + 0]);
  }
  i1304.m_ActiveFontFeatures = i1306
  i1304.m_enableExtraPadding = !!i1305[4]
  i1304.m_enableTintAllSprites = !!i1305[5]
  i1304.m_enableParseEscapeCharacters = !!i1305[6]
  i1304.m_EnableRaycastTarget = !!i1305[7]
  i1304.m_GetFontFeaturesAtRuntime = !!i1305[8]
  i1304.m_missingGlyphCharacter = i1305[9]
  i1304.m_ClearDynamicDataOnBuild = !!i1305[10]
  i1304.m_warningsDisabled = !!i1305[11]
  request.r(i1305[12], i1305[13], 0, i1304, 'm_defaultFontAsset')
  i1304.m_defaultFontAssetPath = i1305[14]
  i1304.m_defaultFontSize = i1305[15]
  i1304.m_defaultAutoSizeMinRatio = i1305[16]
  i1304.m_defaultAutoSizeMaxRatio = i1305[17]
  i1304.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1305[18], i1305[19] )
  i1304.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1305[20], i1305[21] )
  i1304.m_autoSizeTextContainer = !!i1305[22]
  i1304.m_IsTextObjectScaleStatic = !!i1305[23]
  var i1309 = i1305[24]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1304.m_fallbackFontAssets = i1308
  i1304.m_matchMaterialPreset = !!i1305[25]
  i1304.m_HideSubTextObjects = !!i1305[26]
  request.r(i1305[27], i1305[28], 0, i1304, 'm_defaultSpriteAsset')
  i1304.m_defaultSpriteAssetPath = i1305[29]
  i1304.m_enableEmojiSupport = !!i1305[30]
  i1304.m_MissingCharacterSpriteUnicode = i1305[31]
  var i1311 = i1305[32]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1304.m_EmojiFallbackTextAssets = i1310
  i1304.m_defaultColorGradientPresetsPath = i1305[33]
  request.r(i1305[34], i1305[35], 0, i1304, 'm_defaultStyleSheet')
  i1304.m_StyleSheetsResourcePath = i1305[36]
  request.r(i1305[37], i1305[38], 0, i1304, 'm_leadingCharacters')
  request.r(i1305[39], i1305[40], 0, i1304, 'm_followingCharacters')
  i1304.m_UseModernHangulLineBreakingRules = !!i1305[41]
  return i1304
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'spriteSheet')
  var i1317 = i1315[2]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Sprite', i1317[i + 0]));
  }
  i1314.spriteInfoList = i1316
  var i1319 = i1315[3]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1314.fallbackSpriteAssets = i1318
  var i1321 = i1315[4]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('TMPro.TMP_SpriteCharacter', i1321[i + 0]));
  }
  i1314.m_SpriteCharacterTable = i1320
  var i1323 = i1315[5]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_SpriteGlyph', i1323[i + 0]));
  }
  i1314.m_GlyphTable = i1322
  i1314.m_Version = i1315[6]
  i1314.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1315[7], i1314.m_FaceInfo)
  request.r(i1315[8], i1315[9], 0, i1314, 'm_Material')
  return i1314
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.hashCode = i1327[1]
  i1326.unicode = i1327[2]
  i1326.pivot = new pc.Vec2( i1327[3], i1327[4] )
  request.r(i1327[5], i1327[6], 0, i1326, 'sprite')
  i1326.id = i1327[7]
  i1326.x = i1327[8]
  i1326.y = i1327[9]
  i1326.width = i1327[10]
  i1326.height = i1327[11]
  i1326.xOffset = i1327[12]
  i1326.yOffset = i1327[13]
  i1326.xAdvance = i1327[14]
  i1326.scale = i1327[15]
  return i1326
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1333 = data
  i1332.m_Name = i1333[0]
  i1332.m_ElementType = i1333[1]
  i1332.m_Unicode = i1333[2]
  i1332.m_GlyphIndex = i1333[3]
  i1332.m_Scale = i1333[4]
  return i1332
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'sprite')
  i1336.m_Index = i1337[2]
  i1336.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1337[3], i1336.m_Metrics)
  i1336.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1337[4], i1336.m_GlyphRect)
  i1336.m_Scale = i1337[5]
  i1336.m_AtlasIndex = i1337[6]
  i1336.m_ClassDefinitionType = i1337[7]
  return i1336
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_Style', i1341[i + 0]));
  }
  i1338.m_StyleList = i1340
  return i1338
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Style' )
  var i1345 = data
  i1344.m_Name = i1345[0]
  i1344.m_HashCode = i1345[1]
  i1344.m_OpeningDefinition = i1345[2]
  i1344.m_ClosingDefinition = i1345[3]
  i1344.m_OpeningTagArray = i1345[4]
  i1344.m_ClosingTagArray = i1345[5]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1349[i + 0]) );
  }
  i1346.files = i1348
  i1346.componentToPrefabIds = i1347[1]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1353 = data
  i1352.path = i1353[0]
  request.r(i1353[1], i1353[2], 0, i1352, 'unityObject')
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1357[i + 0]) );
  }
  i1354.scriptsExecutionOrder = i1356
  var i1359 = i1355[1]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1359[i + 0]) );
  }
  i1354.sortingLayers = i1358
  var i1361 = i1355[2]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1361[i + 0]) );
  }
  i1354.cullingLayers = i1360
  i1354.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1355[3], i1354.timeSettings)
  i1354.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1355[4], i1354.physicsSettings)
  i1354.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1355[5], i1354.physics2DSettings)
  i1354.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1355[6], i1354.qualitySettings)
  i1354.enableRealtimeShadows = !!i1355[7]
  i1354.enableAutoInstancing = !!i1355[8]
  i1354.enableStaticBatching = !!i1355[9]
  i1354.enableDynamicBatching = !!i1355[10]
  i1354.usePreservativeDynamicBatching = !!i1355[11]
  i1354.lightmapEncodingQuality = i1355[12]
  i1354.desiredColorSpace = i1355[13]
  var i1363 = i1355[14]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1354.allTags = i1362
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.value = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1371 = data
  i1370.id = i1371[0]
  i1370.name = i1371[1]
  i1370.value = i1371[2]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.name = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1377 = data
  i1376.fixedDeltaTime = i1377[0]
  i1376.maximumDeltaTime = i1377[1]
  i1376.timeScale = i1377[2]
  i1376.maximumParticleTimestep = i1377[3]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1379 = data
  i1378.gravity = new pc.Vec3( i1379[0], i1379[1], i1379[2] )
  i1378.defaultSolverIterations = i1379[3]
  i1378.bounceThreshold = i1379[4]
  i1378.autoSyncTransforms = !!i1379[5]
  i1378.autoSimulation = !!i1379[6]
  var i1381 = i1379[7]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'material')
  i1386.gravity = new pc.Vec2( i1387[2], i1387[3] )
  i1386.positionIterations = i1387[4]
  i1386.velocityIterations = i1387[5]
  i1386.velocityThreshold = i1387[6]
  i1386.maxLinearCorrection = i1387[7]
  i1386.maxAngularCorrection = i1387[8]
  i1386.maxTranslationSpeed = i1387[9]
  i1386.maxRotationSpeed = i1387[10]
  i1386.baumgarteScale = i1387[11]
  i1386.baumgarteTOIScale = i1387[12]
  i1386.timeToSleep = i1387[13]
  i1386.linearSleepTolerance = i1387[14]
  i1386.angularSleepTolerance = i1387[15]
  i1386.defaultContactOffset = i1387[16]
  i1386.autoSimulation = !!i1387[17]
  i1386.queriesHitTriggers = !!i1387[18]
  i1386.queriesStartInColliders = !!i1387[19]
  i1386.callbacksOnDisable = !!i1387[20]
  i1386.reuseCollisionCallbacks = !!i1387[21]
  i1386.autoSyncTransforms = !!i1387[22]
  var i1389 = i1387[23]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1389[i + 0]) );
  }
  i1386.collisionMatrix = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.layerId = i1393[1]
  i1392.otherLayerId = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1397[i + 0]) );
  }
  i1394.qualityLevels = i1396
  var i1399 = i1395[1]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1394.names = i1398
  i1394.shadows = i1395[2]
  i1394.anisotropicFiltering = i1395[3]
  i1394.antiAliasing = i1395[4]
  i1394.lodBias = i1395[5]
  i1394.shadowCascades = i1395[6]
  i1394.shadowDistance = i1395[7]
  i1394.shadowmaskMode = i1395[8]
  i1394.shadowProjection = i1395[9]
  i1394.shadowResolution = i1395[10]
  i1394.softParticles = !!i1395[11]
  i1394.softVegetation = !!i1395[12]
  i1394.activeColorSpace = i1395[13]
  i1394.desiredColorSpace = i1395[14]
  i1394.masterTextureLimit = i1395[15]
  i1394.maxQueuedFrames = i1395[16]
  i1394.particleRaycastBudget = i1395[17]
  i1394.pixelLightCount = i1395[18]
  i1394.realtimeReflectionProbes = !!i1395[19]
  i1394.shadowCascade2Split = i1395[20]
  i1394.shadowCascade4Split = new pc.Vec3( i1395[21], i1395[22], i1395[23] )
  i1394.streamingMipmapsActive = !!i1395[24]
  i1394.vSyncCount = i1395[25]
  i1394.asyncUploadBufferSize = i1395[26]
  i1394.asyncUploadTimeSlice = i1395[27]
  i1394.billboardsFaceCameraPosition = !!i1395[28]
  i1394.shadowNearPlaneOffset = i1395[29]
  i1394.streamingMipmapsMemoryBudget = i1395[30]
  i1394.maximumLODLevel = i1395[31]
  i1394.streamingMipmapsAddAllCameras = !!i1395[32]
  i1394.streamingMipmapsMaxLevelReduction = i1395[33]
  i1394.streamingMipmapsRenderersPerFrame = i1395[34]
  i1394.resolutionScalingFixedDPIFactor = i1395[35]
  i1394.streamingMipmapsMaxFileIORequests = i1395[36]
  i1394.currentQualityLevel = i1395[37]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1403 = data
  i1402.name = i1403[0]
  var i1405 = i1403[1]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1405[i + 0]) );
  }
  i1402.tos = i1404
  var i1407 = i1403[2]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1402.constant = i1406
  i1402.isValid = !!i1403[3]
  i1402.isHuman = !!i1403[4]
  i1402.hasRootMotion = !!i1403[5]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1411 = data
  i1410.hash = i1411[0]
  i1410.path = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1415 = data
  i1414.weight = i1415[0]
  i1414.vertices = i1415[1]
  i1414.normals = i1415[2]
  i1414.tangents = i1415[3]
  return i1414
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'm_ObjectArgument')
  i1416.m_ObjectArgumentAssemblyTypeName = i1417[2]
  i1416.m_IntArgument = i1417[3]
  i1416.m_FloatArgument = i1417[4]
  i1416.m_StringArgument = i1417[5]
  i1416.m_BoolArgument = !!i1417[6]
  return i1416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1419 = data
  i1418.m_GlyphIndex = i1419[0]
  i1418.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1419[1], i1418.m_GlyphValueRecord)
  return i1418
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1420 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1421 = data
  i1420.m_XCoordinate = i1421[0]
  i1420.m_YCoordinate = i1421[1]
  return i1420
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1422 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1423 = data
  i1422.m_XPositionAdjustment = i1423[0]
  i1422.m_YPositionAdjustment = i1423[1]
  return i1422
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1425 = data
  i1424.xPlacement = i1425[0]
  i1424.yPlacement = i1425[1]
  i1424.xAdvance = i1425[2]
  i1424.yAdvance = i1425[3]
  return i1424
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1427 = data
  i1426.m_XPlacement = i1427[0]
  i1426.m_YPlacement = i1427[1]
  i1426.m_XAdvance = i1427[2]
  i1426.m_YAdvance = i1427[3]
  return i1426
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[43],"75":[47],"76":[9],"77":[9],"78":[9],"79":[9],"80":[9],"81":[9],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[47],"97":[5],"98":[99],"100":[99],"15":[14],"101":[14],"102":[20,14],"103":[5],"104":[20,14],"105":[14],"106":[14],"107":[5,14],"26":[14,20],"108":[109],"110":[109],"111":[109],"112":[14],"113":[14],"17":[15],"21":[20,14],"114":[14],"16":[15],"115":[14],"116":[14],"117":[14],"118":[14],"119":[14],"120":[14],"121":[14],"25":[14],"122":[14],"123":[20,14],"124":[14],"125":[14],"126":[14],"127":[14],"128":[20,14],"129":[14],"130":[11],"131":[11],"12":[11],"132":[11],"133":[47],"134":[47]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","Gift","SoundHint","JumpHint","UnityEngine.AudioClip","UnityEngine.ParticleSystem","RunEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","GameController","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/22/2026 08:10:22";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SBFM_V01_HoaiTT_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1680";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4700";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SBFM_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "77ff2946-4d06-44e5-b149-35bcf3158ea9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

