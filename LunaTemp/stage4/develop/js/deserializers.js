var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSpring' )
  var i725 = data
  i724.spring = i725[0]
  i724.damper = i725[1]
  i724.targetPosition = i725[2]
  return i724
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor' )
  var i727 = data
  i726.m_TargetVelocity = i727[0]
  i726.m_Force = i727[1]
  i726.m_FreeSpin = i727[2]
  return i726
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointLimits' )
  var i729 = data
  i728.m_Min = i729[0]
  i728.m_Max = i729[1]
  i728.m_Bounciness = i729[2]
  i728.m_BounceMinVelocity = i729[3]
  i728.m_ContactDistance = i729[4]
  i728.minBounce = i729[5]
  i728.maxBounce = i729[6]
  return i728
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointDrive' )
  var i731 = data
  i730.m_PositionSpring = i731[0]
  i730.m_PositionDamper = i731[1]
  i730.m_MaximumForce = i731[2]
  i730.m_UseAcceleration = i731[3]
  return i730
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i733 = data
  i732.m_Spring = i733[0]
  i732.m_Damper = i733[1]
  return i732
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i735 = data
  i734.m_Limit = i735[0]
  i734.m_Bounciness = i735[1]
  i734.m_ContactDistance = i735[2]
  return i734
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i737 = data
  i736.m_ExtremumSlip = i737[0]
  i736.m_ExtremumValue = i737[1]
  i736.m_AsymptoteSlip = i737[2]
  i736.m_AsymptoteValue = i737[3]
  i736.m_Stiffness = i737[4]
  return i736
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i739 = data
  i738.m_LowerAngle = i739[0]
  i738.m_UpperAngle = i739[1]
  return i738
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i741 = data
  i740.m_MotorSpeed = i741[0]
  i740.m_MaximumMotorTorque = i741[1]
  return i740
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i743 = data
  i742.m_DampingRatio = i743[0]
  i742.m_Frequency = i743[1]
  i742.m_Angle = i743[2]
  return i742
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i745 = data
  i744.m_LowerTranslation = i745[0]
  i744.m_UpperTranslation = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i747 = data
  i746.name = i747[0]
  i746.width = i747[1]
  i746.height = i747[2]
  i746.mipmapCount = i747[3]
  i746.anisoLevel = i747[4]
  i746.filterMode = i747[5]
  i746.hdr = !!i747[6]
  i746.format = i747[7]
  i746.wrapMode = i747[8]
  i746.alphaIsTransparency = !!i747[9]
  i746.alphaSource = i747[10]
  i746.graphicsFormat = i747[11]
  i746.sRGBTexture = !!i747[12]
  i746.desiredColorSpace = i747[13]
  i746.wrapU = i747[14]
  i746.wrapV = i747[15]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i748 = root || new pc.UnityMaterial()
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'shader')
  i748.renderQueue = i749[3]
  i748.enableInstancing = !!i749[4]
  var i751 = i749[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i751[i + 0]) );
  }
  i748.floatParameters = i750
  var i753 = i749[6]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i753[i + 0]) );
  }
  i748.colorParameters = i752
  var i755 = i749[7]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i755[i + 0]) );
  }
  i748.vectorParameters = i754
  var i757 = i749[8]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i757[i + 0]) );
  }
  i748.textureParameters = i756
  var i759 = i749[9]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i759[i + 0]) );
  }
  i748.materialFlags = i758
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Color(i767[1], i767[2], i767[3], i767[4])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = new pc.Vec4( i771[1], i771[2], i771[3], i771[4] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'value')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i779 = data
  i778.name = i779[0]
  i778.enabled = !!i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i781 = data
  i780.name = i781[0]
  i780.halfPrecision = !!i781[1]
  i780.useSimplification = !!i781[2]
  i780.useUInt32IndexFormat = !!i781[3]
  i780.vertexCount = i781[4]
  i780.aabb = i781[5]
  var i783 = i781[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( !!i783[i + 0] );
  }
  i780.streams = i782
  i780.vertices = i781[7]
  var i785 = i781[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i785[i + 0]) );
  }
  i780.subMeshes = i784
  var i787 = i781[9]
  var i786 = []
  for(var i = 0; i < i787.length; i += 16) {
    i786.push( new pc.Mat4().setData(i787[i + 0], i787[i + 1], i787[i + 2], i787[i + 3],  i787[i + 4], i787[i + 5], i787[i + 6], i787[i + 7],  i787[i + 8], i787[i + 9], i787[i + 10], i787[i + 11],  i787[i + 12], i787[i + 13], i787[i + 14], i787[i + 15]) );
  }
  i780.bindposes = i786
  var i789 = i781[10]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i789[i + 0]) );
  }
  i780.blendShapes = i788
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i795 = data
  i794.triangles = i795[0]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i801 = data
  i800.name = i801[0]
  var i803 = i801[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i803[i + 0]) );
  }
  i800.frames = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i805 = data
  i804.position = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.scale = new pc.Vec3( i805[3], i805[4], i805[5] )
  i804.rotation = new pc.Quat(i805[6], i805[7], i805[8], i805[9])
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'sharedMesh')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'additionalVertexStreams')
  i808.enabled = !!i809[2]
  request.r(i809[3], i809[4], 0, i808, 'sharedMaterial')
  var i811 = i809[5]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sharedMaterials = i810
  i808.receiveShadows = !!i809[6]
  i808.shadowCastingMode = i809[7]
  i808.sortingLayerID = i809[8]
  i808.sortingOrder = i809[9]
  i808.lightmapIndex = i809[10]
  i808.lightmapSceneIndex = i809[11]
  i808.lightmapScaleOffset = new pc.Vec4( i809[12], i809[13], i809[14], i809[15] )
  i808.lightProbeUsage = i809[16]
  i808.reflectionProbeUsage = i809[17]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'sharedMesh')
  i814.convex = !!i815[2]
  i814.enabled = !!i815[3]
  i814.isTrigger = !!i815[4]
  request.r(i815[5], i815[6], 0, i814, 'material')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i817 = data
  i816.name = i817[0]
  i816.tagId = i817[1]
  i816.enabled = !!i817[2]
  i816.isStatic = !!i817[3]
  i816.layer = i817[4]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i819 = data
  i818.center = new pc.Vec3( i819[0], i819[1], i819[2] )
  i818.size = new pc.Vec3( i819[3], i819[4], i819[5] )
  i818.enabled = !!i819[6]
  i818.isTrigger = !!i819[7]
  request.r(i819[8], i819[9], 0, i818, 'material')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.radius = i821[3]
  i820.height = i821[4]
  i820.direction = i821[5]
  i820.enabled = !!i821[6]
  i820.isTrigger = !!i821[7]
  request.r(i821[8], i821[9], 0, i820, 'material')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'animatorController')
  request.r(i823[2], i823[3], 0, i822, 'avatar')
  i822.updateMode = i823[4]
  i822.hasTransformHierarchy = !!i823[5]
  i822.applyRootMotion = !!i823[6]
  var i825 = i823[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.humanBones = i824
  i822.enabled = !!i823[8]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'clip')
  request.r(i829[2], i829[3], 0, i828, 'outputAudioMixerGroup')
  i828.playOnAwake = !!i829[4]
  i828.loop = !!i829[5]
  i828.time = i829[6]
  i828.volume = i829[7]
  i828.pitch = i829[8]
  i828.enabled = !!i829[9]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i831 = data
  i830.color = new pc.Color(i831[0], i831[1], i831[2], i831[3])
  request.r(i831[4], i831[5], 0, i830, 'sprite')
  i830.flipX = !!i831[6]
  i830.flipY = !!i831[7]
  i830.drawMode = i831[8]
  i830.size = new pc.Vec2( i831[9], i831[10] )
  i830.tileMode = i831[11]
  i830.adaptiveModeThreshold = i831[12]
  i830.maskInteraction = i831[13]
  i830.spriteSortPoint = i831[14]
  i830.enabled = !!i831[15]
  request.r(i831[16], i831[17], 0, i830, 'sharedMaterial')
  var i833 = i831[18]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sharedMaterials = i832
  i830.receiveShadows = !!i831[19]
  i830.shadowCastingMode = i831[20]
  i830.sortingLayerID = i831[21]
  i830.sortingOrder = i831[22]
  i830.lightmapIndex = i831[23]
  i830.lightmapSceneIndex = i831[24]
  i830.lightmapScaleOffset = new pc.Vec4( i831[25], i831[26], i831[27], i831[28] )
  i830.lightProbeUsage = i831[29]
  i830.reflectionProbeUsage = i831[30]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i835 = data
  i834.name = i835[0]
  i834.atlasId = i835[1]
  i834.mipmapCount = i835[2]
  i834.hdr = !!i835[3]
  i834.size = i835[4]
  i834.anisoLevel = i835[5]
  i834.filterMode = i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 4) {
    i836.push( UnityEngine.Rect.MinMaxRect(i837[i + 0], i837[i + 1], i837[i + 2], i837[i + 3]) );
  }
  i834.rects = i836
  i834.wrapU = i835[8]
  i834.wrapV = i835[9]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i841 = data
  i840.name = i841[0]
  i840.index = i841[1]
  i840.startup = !!i841[2]
  return i840
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_FirstSelected')
  i842.m_sendNavigationEvents = !!i843[2]
  i842.m_DragThreshold = i843[3]
  return i842
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i845 = data
  i844.m_HorizontalAxis = i845[0]
  i844.m_VerticalAxis = i845[1]
  i844.m_SubmitButton = i845[2]
  i844.m_CancelButton = i845[3]
  i844.m_InputActionsPerSecond = i845[4]
  i844.m_RepeatDelay = i845[5]
  i844.m_ForceModuleActive = !!i845[6]
  i844.m_SendPointerHoverToParent = !!i845[7]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i847 = data
  i846.type = i847[0]
  i846.color = new pc.Color(i847[1], i847[2], i847[3], i847[4])
  i846.cullingMask = i847[5]
  i846.intensity = i847[6]
  i846.range = i847[7]
  i846.spotAngle = i847[8]
  i846.shadows = i847[9]
  i846.shadowNormalBias = i847[10]
  i846.shadowBias = i847[11]
  i846.shadowStrength = i847[12]
  i846.shadowResolution = i847[13]
  i846.lightmapBakeType = i847[14]
  i846.renderMode = i847[15]
  request.r(i847[16], i847[17], 0, i846, 'cookie')
  i846.cookieSize = i847[18]
  i846.shadowNearPlane = i847[19]
  i846.occlusionMaskChannel = i847[20]
  i846.isBaked = !!i847[21]
  i846.mixedLightingMode = i847[22]
  i846.enabled = !!i847[23]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i849 = data
  i848.pivot = new pc.Vec2( i849[0], i849[1] )
  i848.anchorMin = new pc.Vec2( i849[2], i849[3] )
  i848.anchorMax = new pc.Vec2( i849[4], i849[5] )
  i848.sizeDelta = new pc.Vec2( i849[6], i849[7] )
  i848.anchoredPosition3D = new pc.Vec3( i849[8], i849[9], i849[10] )
  i848.rotation = new pc.Quat(i849[11], i849[12], i849[13], i849[14])
  i848.scale = new pc.Vec3( i849[15], i849[16], i849[17] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i851 = data
  i850.planeDistance = i851[0]
  i850.referencePixelsPerUnit = i851[1]
  i850.isFallbackOverlay = !!i851[2]
  i850.renderMode = i851[3]
  i850.renderOrder = i851[4]
  i850.sortingLayerName = i851[5]
  i850.sortingOrder = i851[6]
  i850.scaleFactor = i851[7]
  request.r(i851[8], i851[9], 0, i850, 'worldCamera')
  i850.overrideSorting = !!i851[10]
  i850.pixelPerfect = !!i851[11]
  i850.targetDisplay = i851[12]
  i850.overridePixelPerfect = !!i851[13]
  i850.enabled = !!i851[14]
  return i850
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i853 = data
  i852.m_UiScaleMode = i853[0]
  i852.m_ReferencePixelsPerUnit = i853[1]
  i852.m_ScaleFactor = i853[2]
  i852.m_ReferenceResolution = new pc.Vec2( i853[3], i853[4] )
  i852.m_ScreenMatchMode = i853[5]
  i852.m_MatchWidthOrHeight = i853[6]
  i852.m_PhysicalUnit = i853[7]
  i852.m_FallbackScreenDPI = i853[8]
  i852.m_DefaultSpriteDPI = i853[9]
  i852.m_DynamicPixelsPerUnit = i853[10]
  i852.m_PresetInfoIsWorld = !!i853[11]
  return i852
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i855 = data
  i854.m_IgnoreReversedGraphics = !!i855[0]
  i854.m_BlockingObjects = i855[1]
  i854.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i855[2] )
  return i854
}

Deserializers["Joystick"] = function (request, data, root) {
  var i856 = root || request.c( 'Joystick' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'background')
  request.r(i857[2], i857[3], 0, i856, 'joy')
  i856.deadZone = i857[4]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i859 = data
  i858.cullTransparentMesh = !!i859[0]
  return i858
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Image' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_Sprite')
  i860.m_Type = i861[2]
  i860.m_PreserveAspect = !!i861[3]
  i860.m_FillCenter = !!i861[4]
  i860.m_FillMethod = i861[5]
  i860.m_FillAmount = i861[6]
  i860.m_FillClockwise = !!i861[7]
  i860.m_FillOrigin = i861[8]
  i860.m_UseSpriteMesh = !!i861[9]
  i860.m_PixelsPerUnitMultiplier = i861[10]
  request.r(i861[11], i861[12], 0, i860, 'm_Material')
  i860.m_Maskable = !!i861[13]
  i860.m_Color = new pc.Color(i861[14], i861[15], i861[16], i861[17])
  i860.m_RaycastTarget = !!i861[18]
  i860.m_RaycastPadding = new pc.Vec4( i861[19], i861[20], i861[21], i861[22] )
  return i860
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i862 = root || request.c( 'JumpButton' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'button')
  return i862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Button' )
  var i865 = data
  i864.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i865[0], i864.m_OnClick)
  i864.m_Navigation = request.d('UnityEngine.UI.Navigation', i865[1], i864.m_Navigation)
  i864.m_Transition = i865[2]
  i864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i865[3], i864.m_Colors)
  i864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i865[4], i864.m_SpriteState)
  i864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i865[5], i864.m_AnimationTriggers)
  i864.m_Interactable = !!i865[6]
  request.r(i865[7], i865[8], 0, i864, 'm_TargetGraphic')
  return i864
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i867 = data
  i866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i867[0], i866.m_PersistentCalls)
  return i866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('UnityEngine.Events.PersistentCall', i871[i + 0]));
  }
  i868.m_Calls = i870
  return i868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_Target')
  i874.m_TargetAssemblyTypeName = i875[2]
  i874.m_MethodName = i875[3]
  i874.m_Mode = i875[4]
  i874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i875[5], i874.m_Arguments)
  i874.m_CallState = i875[6]
  return i874
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i877 = data
  i876.m_Mode = i877[0]
  i876.m_WrapAround = !!i877[1]
  request.r(i877[2], i877[3], 0, i876, 'm_SelectOnUp')
  request.r(i877[4], i877[5], 0, i876, 'm_SelectOnDown')
  request.r(i877[6], i877[7], 0, i876, 'm_SelectOnLeft')
  request.r(i877[8], i877[9], 0, i876, 'm_SelectOnRight')
  return i876
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i879 = data
  i878.m_NormalColor = new pc.Color(i879[0], i879[1], i879[2], i879[3])
  i878.m_HighlightedColor = new pc.Color(i879[4], i879[5], i879[6], i879[7])
  i878.m_PressedColor = new pc.Color(i879[8], i879[9], i879[10], i879[11])
  i878.m_SelectedColor = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  i878.m_DisabledColor = new pc.Color(i879[16], i879[17], i879[18], i879[19])
  i878.m_ColorMultiplier = i879[20]
  i878.m_FadeDuration = i879[21]
  return i878
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_HighlightedSprite')
  request.r(i881[2], i881[3], 0, i880, 'm_PressedSprite')
  request.r(i881[4], i881[5], 0, i880, 'm_SelectedSprite')
  request.r(i881[6], i881[7], 0, i880, 'm_DisabledSprite')
  return i880
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i883 = data
  i882.m_NormalTrigger = i883[0]
  i882.m_HighlightedTrigger = i883[1]
  i882.m_PressedTrigger = i883[2]
  i882.m_SelectedTrigger = i883[3]
  i882.m_DisabledTrigger = i883[4]
  return i882
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Mask' )
  var i885 = data
  i884.m_ShowMaskGraphic = !!i885[0]
  return i884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i887 = data
  i886.m_hasFontAssetChanged = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'm_baseMaterial')
  i886.m_maskOffset = new pc.Vec4( i887[3], i887[4], i887[5], i887[6] )
  i886.m_text = i887[7]
  i886.m_isRightToLeft = !!i887[8]
  request.r(i887[9], i887[10], 0, i886, 'm_fontAsset')
  request.r(i887[11], i887[12], 0, i886, 'm_sharedMaterial')
  var i889 = i887[13]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.m_fontSharedMaterials = i888
  request.r(i887[14], i887[15], 0, i886, 'm_fontMaterial')
  var i891 = i887[16]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.m_fontMaterials = i890
  i886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i887[17], i887[18], i887[19], i887[20])
  i886.m_fontColor = new pc.Color(i887[21], i887[22], i887[23], i887[24])
  i886.m_enableVertexGradient = !!i887[25]
  i886.m_colorMode = i887[26]
  i886.m_fontColorGradient = request.d('TMPro.VertexGradient', i887[27], i886.m_fontColorGradient)
  request.r(i887[28], i887[29], 0, i886, 'm_fontColorGradientPreset')
  request.r(i887[30], i887[31], 0, i886, 'm_spriteAsset')
  i886.m_tintAllSprites = !!i887[32]
  request.r(i887[33], i887[34], 0, i886, 'm_StyleSheet')
  i886.m_TextStyleHashCode = i887[35]
  i886.m_overrideHtmlColors = !!i887[36]
  i886.m_faceColor = UnityEngine.Color32.ConstructColor(i887[37], i887[38], i887[39], i887[40])
  i886.m_fontSize = i887[41]
  i886.m_fontSizeBase = i887[42]
  i886.m_fontWeight = i887[43]
  i886.m_enableAutoSizing = !!i887[44]
  i886.m_fontSizeMin = i887[45]
  i886.m_fontSizeMax = i887[46]
  i886.m_fontStyle = i887[47]
  i886.m_HorizontalAlignment = i887[48]
  i886.m_VerticalAlignment = i887[49]
  i886.m_textAlignment = i887[50]
  i886.m_characterSpacing = i887[51]
  i886.m_characterHorizontalScale = i887[52]
  i886.m_wordSpacing = i887[53]
  i886.m_lineSpacing = i887[54]
  i886.m_lineSpacingMax = i887[55]
  i886.m_paragraphSpacing = i887[56]
  i886.m_charWidthMaxAdj = i887[57]
  i886.m_TextWrappingMode = i887[58]
  i886.m_wordWrappingRatios = i887[59]
  i886.m_overflowMode = i887[60]
  request.r(i887[61], i887[62], 0, i886, 'm_linkedTextComponent')
  request.r(i887[63], i887[64], 0, i886, 'parentLinkedComponent')
  i886.m_enableKerning = !!i887[65]
  var i893 = i887[66]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(i893[i + 0]);
  }
  i886.m_ActiveFontFeatures = i892
  i886.m_enableExtraPadding = !!i887[67]
  i886.checkPaddingRequired = !!i887[68]
  i886.m_isRichText = !!i887[69]
  i886.m_parseCtrlCharacters = !!i887[70]
  i886.m_isOrthographic = !!i887[71]
  i886.m_isCullingEnabled = !!i887[72]
  i886.m_horizontalMapping = i887[73]
  i886.m_verticalMapping = i887[74]
  i886.m_uvLineOffset = i887[75]
  i886.m_geometrySortingOrder = i887[76]
  i886.m_IsTextObjectScaleStatic = !!i887[77]
  i886.m_VertexBufferAutoSizeReduction = !!i887[78]
  i886.m_useMaxVisibleDescender = !!i887[79]
  i886.m_pageToDisplay = i887[80]
  i886.m_margin = new pc.Vec4( i887[81], i887[82], i887[83], i887[84] )
  i886.m_isUsingLegacyAnimationComponent = !!i887[85]
  i886.m_isVolumetricText = !!i887[86]
  request.r(i887[87], i887[88], 0, i886, 'm_Material')
  i886.m_EmojiFallbackSupport = !!i887[89]
  i886.m_Maskable = !!i887[90]
  i886.m_Color = new pc.Color(i887[91], i887[92], i887[93], i887[94])
  i886.m_RaycastTarget = !!i887[95]
  i886.m_RaycastPadding = new pc.Vec4( i887[96], i887[97], i887[98], i887[99] )
  return i886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.VertexGradient' )
  var i895 = data
  i894.topLeft = new pc.Color(i895[0], i895[1], i895[2], i895[3])
  i894.topRight = new pc.Color(i895[4], i895[5], i895[6], i895[7])
  i894.bottomLeft = new pc.Color(i895[8], i895[9], i895[10], i895[11])
  i894.bottomRight = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  return i894
}

Deserializers["TutController"] = function (request, data, root) {
  var i898 = root || request.c( 'TutController' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'tutScene')
  request.r(i899[2], i899[3], 0, i898, 'startTut')
  request.r(i899[4], i899[5], 0, i898, 'playTut')
  request.r(i899[6], i899[7], 0, i898, 'farTut')
  request.r(i899[8], i899[9], 0, i898, 'failTut')
  return i898
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i900 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i901 = data
  i900.targetIsSelf = !!i901[0]
  request.r(i901[1], i901[2], 0, i900, 'targetGO')
  i900.tweenTargetIsTargetGO = !!i901[3]
  i900.delay = i901[4]
  i900.duration = i901[5]
  i900.easeType = i901[6]
  i900.easeCurve = new pc.AnimationCurve( { keys_flow: i901[7] } )
  i900.loopType = i901[8]
  i900.loops = i901[9]
  i900.id = i901[10]
  i900.isRelative = !!i901[11]
  i900.isFrom = !!i901[12]
  i900.isIndependentUpdate = !!i901[13]
  i900.autoKill = !!i901[14]
  i900.autoGenerate = !!i901[15]
  i900.isActive = !!i901[16]
  i900.isValid = !!i901[17]
  request.r(i901[18], i901[19], 0, i900, 'target')
  i900.animationType = i901[20]
  i900.targetType = i901[21]
  i900.forcedTargetType = i901[22]
  i900.autoPlay = !!i901[23]
  i900.useTargetAsV3 = !!i901[24]
  i900.endValueFloat = i901[25]
  i900.endValueV3 = new pc.Vec3( i901[26], i901[27], i901[28] )
  i900.endValueV2 = new pc.Vec2( i901[29], i901[30] )
  i900.endValueColor = new pc.Color(i901[31], i901[32], i901[33], i901[34])
  i900.endValueString = i901[35]
  i900.endValueRect = UnityEngine.Rect.MinMaxRect(i901[36], i901[37], i901[38], i901[39])
  request.r(i901[40], i901[41], 0, i900, 'endValueTransform')
  i900.optionalBool0 = !!i901[42]
  i900.optionalBool1 = !!i901[43]
  i900.optionalFloat0 = i901[44]
  i900.optionalInt0 = i901[45]
  i900.optionalRotationMode = i901[46]
  i900.optionalScrambleMode = i901[47]
  i900.optionalShakeRandomnessMode = i901[48]
  i900.optionalString = i901[49]
  i900.updateType = i901[50]
  i900.isSpeedBased = !!i901[51]
  i900.hasOnStart = !!i901[52]
  i900.hasOnPlay = !!i901[53]
  i900.hasOnUpdate = !!i901[54]
  i900.hasOnStepComplete = !!i901[55]
  i900.hasOnComplete = !!i901[56]
  i900.hasOnTweenCreated = !!i901[57]
  i900.hasOnRewind = !!i901[58]
  i900.onStart = request.d('UnityEngine.Events.UnityEvent', i901[59], i900.onStart)
  i900.onPlay = request.d('UnityEngine.Events.UnityEvent', i901[60], i900.onPlay)
  i900.onUpdate = request.d('UnityEngine.Events.UnityEvent', i901[61], i900.onUpdate)
  i900.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i901[62], i900.onStepComplete)
  i900.onComplete = request.d('UnityEngine.Events.UnityEvent', i901[63], i900.onComplete)
  i900.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i901[64], i900.onTweenCreated)
  i900.onRewind = request.d('UnityEngine.Events.UnityEvent', i901[65], i900.onRewind)
  return i900
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i903 = data
  i902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i903[0], i902.m_PersistentCalls)
  return i902
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i904 = root || request.c( 'HideOnPointer' )
  var i905 = data
  i904.OnPointerDownEvent = request.d('System.Action', i905[0], i904.OnPointerDownEvent)
  return i904
}

Deserializers["System.Action"] = function (request, data, root) {
  var i906 = root || request.c( 'System.Action' )
  var i907 = data
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i909 = data
  i908.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i909[0], i908.main)
  i908.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i909[1], i908.colorBySpeed)
  i908.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i909[2], i908.colorOverLifetime)
  i908.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i909[3], i908.emission)
  i908.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i909[4], i908.rotationBySpeed)
  i908.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i909[5], i908.rotationOverLifetime)
  i908.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i909[6], i908.shape)
  i908.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i909[7], i908.sizeBySpeed)
  i908.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i909[8], i908.sizeOverLifetime)
  i908.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i909[9], i908.textureSheetAnimation)
  i908.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i909[10], i908.velocityOverLifetime)
  i908.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i909[11], i908.noise)
  i908.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i909[12], i908.inheritVelocity)
  i908.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i909[13], i908.forceOverLifetime)
  i908.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i909[14], i908.limitVelocityOverLifetime)
  i908.useAutoRandomSeed = !!i909[15]
  i908.randomSeed = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemMain()
  var i911 = data
  i910.duration = i911[0]
  i910.loop = !!i911[1]
  i910.prewarm = !!i911[2]
  i910.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.startDelay)
  i910.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.startLifetime)
  i910.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[5], i910.startSpeed)
  i910.startSize3D = !!i911[6]
  i910.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[7], i910.startSizeX)
  i910.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.startSizeY)
  i910.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[9], i910.startSizeZ)
  i910.startRotation3D = !!i911[10]
  i910.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[11], i910.startRotationX)
  i910.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[12], i910.startRotationY)
  i910.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[13], i910.startRotationZ)
  i910.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i911[14], i910.startColor)
  i910.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[15], i910.gravityModifier)
  i910.simulationSpace = i911[16]
  request.r(i911[17], i911[18], 0, i910, 'customSimulationSpace')
  i910.simulationSpeed = i911[19]
  i910.useUnscaledTime = !!i911[20]
  i910.scalingMode = i911[21]
  i910.playOnAwake = !!i911[22]
  i910.maxParticles = i911[23]
  i910.emitterVelocityMode = i911[24]
  i910.stopAction = i911[25]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i912 = root || new pc.MinMaxCurve()
  var i913 = data
  i912.mode = i913[0]
  i912.curveMin = new pc.AnimationCurve( { keys_flow: i913[1] } )
  i912.curveMax = new pc.AnimationCurve( { keys_flow: i913[2] } )
  i912.curveMultiplier = i913[3]
  i912.constantMin = i913[4]
  i912.constantMax = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i914 = root || new pc.MinMaxGradient()
  var i915 = data
  i914.mode = i915[0]
  i914.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i915[1], i914.gradientMin)
  i914.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i915[2], i914.gradientMax)
  i914.colorMin = new pc.Color(i915[3], i915[4], i915[5], i915[6])
  i914.colorMax = new pc.Color(i915[7], i915[8], i915[9], i915[10])
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i917 = data
  i916.mode = i917[0]
  var i919 = i917[1]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i919[i + 0]) );
  }
  i916.colorKeys = i918
  var i921 = i917[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i921[i + 0]) );
  }
  i916.alphaKeys = i920
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemColorBySpeed()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i923[1], i922.color)
  i922.range = new pc.Vec2( i923[2], i923[3] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i927 = data
  i926.color = new pc.Color(i927[0], i927[1], i927[2], i927[3])
  i926.time = i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i931 = data
  i930.alpha = i931[0]
  i930.time = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemColorOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i933[1], i932.color)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemEmitter()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[1], i934.rateOverTime)
  i934.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.rateOverDistance)
  var i937 = i935[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i937[i + 0]) );
  }
  i934.bursts = i936
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemBurst()
  var i941 = data
  i940.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[0], i940.count)
  i940.cycleCount = i941[1]
  i940.minCount = i941[2]
  i940.maxCount = i941[3]
  i940.repeatInterval = i941[4]
  i940.time = i941[5]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemRotationBySpeed()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.x)
  i942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.y)
  i942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.z)
  i942.separateAxes = !!i943[4]
  i942.range = new pc.Vec2( i943[5], i943[6] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemRotationOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.x)
  i944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.y)
  i944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.z)
  i944.separateAxes = !!i945[4]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemShape()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.shapeType = i947[1]
  i946.randomDirectionAmount = i947[2]
  i946.sphericalDirectionAmount = i947[3]
  i946.randomPositionAmount = i947[4]
  i946.alignToDirection = !!i947[5]
  i946.radius = i947[6]
  i946.radiusMode = i947[7]
  i946.radiusSpread = i947[8]
  i946.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[9], i946.radiusSpeed)
  i946.radiusThickness = i947[10]
  i946.angle = i947[11]
  i946.length = i947[12]
  i946.boxThickness = new pc.Vec3( i947[13], i947[14], i947[15] )
  i946.meshShapeType = i947[16]
  request.r(i947[17], i947[18], 0, i946, 'mesh')
  request.r(i947[19], i947[20], 0, i946, 'meshRenderer')
  request.r(i947[21], i947[22], 0, i946, 'skinnedMeshRenderer')
  i946.useMeshMaterialIndex = !!i947[23]
  i946.meshMaterialIndex = i947[24]
  i946.useMeshColors = !!i947[25]
  i946.normalOffset = i947[26]
  i946.arc = i947[27]
  i946.arcMode = i947[28]
  i946.arcSpread = i947[29]
  i946.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[30], i946.arcSpeed)
  i946.donutRadius = i947[31]
  i946.position = new pc.Vec3( i947[32], i947[33], i947[34] )
  i946.rotation = new pc.Vec3( i947[35], i947[36], i947[37] )
  i946.scale = new pc.Vec3( i947[38], i947[39], i947[40] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemSizeBySpeed()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[1], i948.x)
  i948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.y)
  i948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[3], i948.z)
  i948.separateAxes = !!i949[4]
  i948.range = new pc.Vec2( i949[5], i949[6] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemSizeOverLifetime()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.mode = i953[1]
  i952.animation = i953[2]
  i952.numTilesX = i953[3]
  i952.numTilesY = i953[4]
  i952.useRandomRow = !!i953[5]
  i952.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[6], i952.frameOverTime)
  i952.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[7], i952.startFrame)
  i952.cycleCount = i953[8]
  i952.rowIndex = i953[9]
  i952.flipU = i953[10]
  i952.flipV = i953[11]
  i952.spriteCount = i953[12]
  var i955 = i953[13]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.sprites = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[4], i958.radial)
  i958.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[5], i958.speedModifier)
  i958.space = i959[6]
  i958.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[7], i958.orbitalX)
  i958.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[8], i958.orbitalY)
  i958.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[9], i958.orbitalZ)
  i958.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[10], i958.orbitalOffsetX)
  i958.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[11], i958.orbitalOffsetY)
  i958.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[12], i958.orbitalOffsetZ)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemNoise()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.separateAxes = !!i961[1]
  i960.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.strengthX)
  i960.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.strengthY)
  i960.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[4], i960.strengthZ)
  i960.frequency = i961[5]
  i960.damping = !!i961[6]
  i960.octaveCount = i961[7]
  i960.octaveMultiplier = i961[8]
  i960.octaveScale = i961[9]
  i960.quality = i961[10]
  i960.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[11], i960.scrollSpeed)
  i960.scrollSpeedMultiplier = i961[12]
  i960.remapEnabled = !!i961[13]
  i960.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[14], i960.remapX)
  i960.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[15], i960.remapY)
  i960.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[16], i960.remapZ)
  i960.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[17], i960.positionAmount)
  i960.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[18], i960.rotationAmount)
  i960.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[19], i960.sizeAmount)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemInheritVelocity()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.mode = i963[1]
  i962.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.curve)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemForceOverLifetime()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.x)
  i964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.y)
  i964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.z)
  i964.space = i965[4]
  i964.randomized = !!i965[5]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.limit)
  i966.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.limitX)
  i966.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.limitY)
  i966.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[4], i966.limitZ)
  i966.dampen = i967[5]
  i966.separateAxes = !!i967[6]
  i966.space = i967[7]
  i966.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[8], i966.drag)
  i966.multiplyDragByParticleSize = !!i967[9]
  i966.multiplyDragByParticleVelocity = !!i967[10]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'mesh')
  i968.meshCount = i969[2]
  i968.activeVertexStreamsCount = i969[3]
  i968.alignment = i969[4]
  i968.renderMode = i969[5]
  i968.sortMode = i969[6]
  i968.lengthScale = i969[7]
  i968.velocityScale = i969[8]
  i968.cameraVelocityScale = i969[9]
  i968.normalDirection = i969[10]
  i968.sortingFudge = i969[11]
  i968.minParticleSize = i969[12]
  i968.maxParticleSize = i969[13]
  i968.pivot = new pc.Vec3( i969[14], i969[15], i969[16] )
  request.r(i969[17], i969[18], 0, i968, 'trailMaterial')
  i968.applyActiveColorSpace = !!i969[19]
  i968.enabled = !!i969[20]
  request.r(i969[21], i969[22], 0, i968, 'sharedMaterial')
  var i971 = i969[23]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.sharedMaterials = i970
  i968.receiveShadows = !!i969[24]
  i968.shadowCastingMode = i969[25]
  i968.sortingLayerID = i969[26]
  i968.sortingOrder = i969[27]
  i968.lightmapIndex = i969[28]
  i968.lightmapSceneIndex = i969[29]
  i968.lightmapScaleOffset = new pc.Vec4( i969[30], i969[31], i969[32], i969[33] )
  i968.lightProbeUsage = i969[34]
  i968.reflectionProbeUsage = i969[35]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i973 = data
  i972.center = new pc.Vec3( i973[0], i973[1], i973[2] )
  i972.radius = i973[3]
  i972.enabled = !!i973[4]
  i972.isTrigger = !!i973[5]
  request.r(i973[6], i973[7], 0, i972, 'material')
  return i972
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i974 = root || request.c( 'CharacterMotor' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'characterInput')
  request.r(i975[2], i975[3], 0, i974, 'cameraYawTransform')
  request.r(i975[4], i975[5], 0, i974, '_arrow')
  i974.moveSpeed = i975[6]
  i974.jumpHeight = i975[7]
  request.r(i975[8], i975[9], 0, i974, 'groundChecker')
  i974.gravity = i975[10]
  i974.enableStepClimb = !!i975[11]
  i974.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i975[12] )
  i974.maxStepHeight = i975[13]
  i974.stepCheckDistance = i975[14]
  i974.stepUpSpeed = i975[15]
  i974.stepUpAcceleration = i975[16]
  i974.minimumStepFacing = i975[17]
  request.r(i975[18], i975[19], 0, i974, 'controller')
  i974.autoRun = !!i975[20]
  return i974
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i976 = root || request.c( 'CharacterRotation' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'motor')
  i976.rotationSpeed = i977[2]
  return i976
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i978 = root || request.c( 'CharacterAnimation' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'animator')
  request.r(i979[2], i979[3], 0, i978, 'motor')
  i978.speedChangeRate = i979[4]
  i978.groundedGraceTime = i979[5]
  return i978
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i980 = root || request.c( 'CharacterCollect' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'motor')
  request.r(i981[2], i981[3], 0, i980, 'avatar')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i983 = data
  i982.mass = i983[0]
  i982.drag = i983[1]
  i982.angularDrag = i983[2]
  i982.useGravity = !!i983[3]
  i982.isKinematic = !!i983[4]
  i982.constraints = i983[5]
  i982.maxAngularVelocity = i983[6]
  i982.collisionDetectionMode = i983[7]
  i982.interpolation = i983[8]
  return i982
}

Deserializers["CharacterTrigger"] = function (request, data, root) {
  var i984 = root || request.c( 'CharacterTrigger' )
  var i985 = data
  i984.onTrigger1 = !!i985[0]
  i984.completeGift1 = !!i985[1]
  i984.onTrigger2 = !!i985[2]
  i984.completeGift2 = !!i985[3]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'sharedMesh')
  var i989 = i987[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.bones = i988
  i986.updateWhenOffscreen = !!i987[3]
  i986.localBounds = i987[4]
  request.r(i987[5], i987[6], 0, i986, 'rootBone')
  var i991 = i987[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i991[i + 0]) );
  }
  i986.blendShapesWeights = i990
  i986.enabled = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'sharedMaterial')
  var i993 = i987[11]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i986.sharedMaterials = i992
  i986.receiveShadows = !!i987[12]
  i986.shadowCastingMode = i987[13]
  i986.sortingLayerID = i987[14]
  i986.sortingOrder = i987[15]
  i986.lightmapIndex = i987[16]
  i986.lightmapSceneIndex = i987[17]
  i986.lightmapScaleOffset = new pc.Vec4( i987[18], i987[19], i987[20], i987[21] )
  i986.lightProbeUsage = i987[22]
  i986.reflectionProbeUsage = i987[23]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i997 = data
  i996.weight = i997[0]
  return i996
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i998 = root || request.c( 'GroundChecker' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'groundPoint')
  i998.half = new pc.Vec3( i999[2], i999[3], i999[4] )
  i998.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i999[5] )
  return i998
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1000 = root || request.c( 'CameraFollow' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'target')
  i1000.smoothTime = i1001[2]
  return i1000
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1002 = root || request.c( 'CameraLook' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'input')
  request.r(i1003[2], i1003[3], 0, i1002, 'yawPivot')
  request.r(i1003[4], i1003[5], 0, i1002, 'pitchPivot')
  i1002.minPitch = i1003[6]
  i1002.maxPitch = i1003[7]
  i1002.yaw = i1003[8]
  i1002.pitch = i1003[9]
  i1002.defaltYaw = i1003[10]
  i1002.defaltPitch = i1003[11]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1005 = data
  i1004.aspect = i1005[0]
  i1004.orthographic = !!i1005[1]
  i1004.orthographicSize = i1005[2]
  i1004.backgroundColor = new pc.Color(i1005[3], i1005[4], i1005[5], i1005[6])
  i1004.nearClipPlane = i1005[7]
  i1004.farClipPlane = i1005[8]
  i1004.fieldOfView = i1005[9]
  i1004.depth = i1005[10]
  i1004.clearFlags = i1005[11]
  i1004.cullingMask = i1005[12]
  i1004.rect = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'targetTexture')
  i1004.usePhysicalProperties = !!i1005[16]
  i1004.focalLength = i1005[17]
  i1004.sensorSize = new pc.Vec2( i1005[18], i1005[19] )
  i1004.lensShift = new pc.Vec2( i1005[20], i1005[21] )
  i1004.gateFit = i1005[22]
  i1004.commandBufferCount = i1005[23]
  i1004.cameraType = i1005[24]
  i1004.enabled = !!i1005[25]
  return i1004
}

Deserializers["Gift"] = function (request, data, root) {
  var i1006 = root || request.c( 'Gift' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'hint')
  i1006.onCollect = request.d('UnityEngine.Events.UnityEvent', i1007[2], i1006.onCollect)
  i1006.collectDone = !!i1007[3]
  request.r(i1007[4], i1007[5], 0, i1006, 'collectSound')
  request.r(i1007[6], i1007[7], 0, i1006, 'effect')
  request.r(i1007[8], i1007[9], 0, i1006, 'complete')
  return i1006
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_ObjectArgument')
  i1008.m_ObjectArgumentAssemblyTypeName = i1009[2]
  i1008.m_IntArgument = i1009[3]
  i1008.m_FloatArgument = i1009[4]
  i1008.m_StringArgument = i1009[5]
  i1008.m_BoolArgument = !!i1009[6]
  return i1008
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i1010 = root || request.c( 'SoundHint' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'Sound')
  request.r(i1011[2], i1011[3], 0, i1010, 'Source')
  return i1010
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i1012 = root || request.c( 'JumpHint' )
  var i1013 = data
  i1012.JumpForce = new pc.Vec3( i1013[0], i1013[1], i1013[2] )
  request.r(i1013[3], i1013[4], 0, i1012, 'Rigidbody')
  return i1012
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1014 = root || request.c( 'CharacterInput' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'joystick')
  request.r(i1015[2], i1015[3], 0, i1014, 'jumpButton')
  return i1014
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1016 = root || request.c( 'InputManager' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'worldCamera')
  i1016.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1017[2] )
  i1016.touchSensitivity = i1017[3]
  i1016.mouseSensitivity = i1017[4]
  i1016.dragThreshold = i1017[5]
  return i1016
}

Deserializers["GameController"] = function (request, data, root) {
  var i1018 = root || request.c( 'GameController' )
  var i1019 = data
  i1018.timeToShowEnd = i1019[0]
  i1018.currentProgress = i1019[1]
  i1018.target = i1019[2]
  i1018.maxProgress = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'progressText')
  request.r(i1019[6], i1019[7], 0, i1018, 'doneScene')
  var i1021 = i1019[8]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.confetti = i1020
  request.r(i1019[9], i1019[10], 0, i1018, 'completeScene')
  request.r(i1019[11], i1019[12], 0, i1018, 'failScene')
  request.r(i1019[13], i1019[14], 0, i1018, 'collect')
  request.r(i1019[15], i1019[16], 0, i1018, 'tut')
  var i1023 = i1019[17]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.gifts = i1022
  return i1018
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
  i1030.LimitClick = !!i1031[2]
  i1030.MaxClick = i1031[3]
  i1030.TypeMonster1 = i1031[4]
  request.r(i1031[5], i1031[6], 0, i1030, 'gift1')
  var i1033 = i1031[7]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1030.monsters = i1032
  var i1035 = i1031[8]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1030.CTA = i1034
  request.r(i1031[9], i1031[10], 0, i1030, 'endCard')
  i1030.currentClick = i1031[11]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1041 = data
  i1040.ambientIntensity = i1041[0]
  i1040.reflectionIntensity = i1041[1]
  i1040.ambientMode = i1041[2]
  i1040.ambientLight = new pc.Color(i1041[3], i1041[4], i1041[5], i1041[6])
  i1040.ambientSkyColor = new pc.Color(i1041[7], i1041[8], i1041[9], i1041[10])
  i1040.ambientGroundColor = new pc.Color(i1041[11], i1041[12], i1041[13], i1041[14])
  i1040.ambientEquatorColor = new pc.Color(i1041[15], i1041[16], i1041[17], i1041[18])
  i1040.fogColor = new pc.Color(i1041[19], i1041[20], i1041[21], i1041[22])
  i1040.fogEndDistance = i1041[23]
  i1040.fogStartDistance = i1041[24]
  i1040.fogDensity = i1041[25]
  i1040.fog = !!i1041[26]
  request.r(i1041[27], i1041[28], 0, i1040, 'skybox')
  i1040.fogMode = i1041[29]
  var i1043 = i1041[30]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1043[i + 0]) );
  }
  i1040.lightmaps = i1042
  i1040.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1041[31], i1040.lightProbes)
  i1040.lightmapsMode = i1041[32]
  i1040.mixedBakeMode = i1041[33]
  i1040.environmentLightingMode = i1041[34]
  i1040.ambientProbe = new pc.SphericalHarmonicsL2(i1041[35])
  request.r(i1041[36], i1041[37], 0, i1040, 'customReflection')
  request.r(i1041[38], i1041[39], 0, i1040, 'defaultReflection')
  i1040.defaultReflectionMode = i1041[40]
  i1040.defaultReflectionResolution = i1041[41]
  i1040.sunLightObjectId = i1041[42]
  i1040.pixelLightCount = i1041[43]
  i1040.defaultReflectionHDR = !!i1041[44]
  i1040.hasLightDataAsset = !!i1041[45]
  i1040.hasManualGenerate = !!i1041[46]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'lightmapColor')
  request.r(i1047[2], i1047[3], 0, i1046, 'lightmapDirection')
  request.r(i1047[4], i1047[5], 0, i1046, 'shadowMask')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1048 = root || new UnityEngine.LightProbes()
  var i1049 = data
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1059[i + 0]));
  }
  i1056.ShaderCompilationErrors = i1058
  i1056.name = i1057[1]
  i1056.guid = i1057[2]
  var i1061 = i1057[3]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.shaderDefinedKeywords = i1060
  var i1063 = i1057[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1063[i + 0]) );
  }
  i1056.passes = i1062
  var i1065 = i1057[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1065[i + 0]) );
  }
  i1056.usePasses = i1064
  var i1067 = i1057[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1067[i + 0]) );
  }
  i1056.defaultParameterValues = i1066
  request.r(i1057[7], i1057[8], 0, i1056, 'unityFallbackShader')
  i1056.readDepth = !!i1057[9]
  i1056.hasDepthOnlyPass = !!i1057[10]
  i1056.isCreatedByShaderGraph = !!i1057[11]
  i1056.disableBatching = !!i1057[12]
  i1056.compiled = !!i1057[13]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1071 = data
  i1070.shaderName = i1071[0]
  i1070.errorMessage = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1076 = root || new pc.UnityShaderPass()
  var i1077 = data
  i1076.id = i1077[0]
  i1076.subShaderIndex = i1077[1]
  i1076.name = i1077[2]
  i1076.passType = i1077[3]
  i1076.grabPassTextureName = i1077[4]
  i1076.usePass = !!i1077[5]
  i1076.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[6], i1076.zTest)
  i1076.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[7], i1076.zWrite)
  i1076.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[8], i1076.culling)
  i1076.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1077[9], i1076.blending)
  i1076.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1077[10], i1076.alphaBlending)
  i1076.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[11], i1076.colorWriteMask)
  i1076.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[12], i1076.offsetUnits)
  i1076.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[13], i1076.offsetFactor)
  i1076.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[14], i1076.stencilRef)
  i1076.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[15], i1076.stencilReadMask)
  i1076.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[16], i1076.stencilWriteMask)
  i1076.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[17], i1076.stencilOp)
  i1076.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[18], i1076.stencilOpFront)
  i1076.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[19], i1076.stencilOpBack)
  var i1079 = i1077[20]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1079[i + 0]) );
  }
  i1076.tags = i1078
  var i1081 = i1077[21]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1076.passDefinedKeywords = i1080
  var i1083 = i1077[22]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1083[i + 0]) );
  }
  i1076.passDefinedKeywordGroups = i1082
  var i1085 = i1077[23]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1085[i + 0]) );
  }
  i1076.variants = i1084
  var i1087 = i1077[24]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1087[i + 0]) );
  }
  i1076.excludedVariants = i1086
  i1076.hasDepthReader = !!i1077[25]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1089 = data
  i1088.val = i1089[0]
  i1088.name = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1091 = data
  i1090.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[0], i1090.src)
  i1090.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[1], i1090.dst)
  i1090.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[2], i1090.op)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1093 = data
  i1092.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[0], i1092.pass)
  i1092.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[1], i1092.fail)
  i1092.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[2], i1092.zFail)
  i1092.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[3], i1092.comp)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.value = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1100.keywords = i1102
  i1100.hasDiscard = !!i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1107 = data
  i1106.passId = i1107[0]
  i1106.subShaderIndex = i1107[1]
  var i1109 = i1107[2]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1106.keywords = i1108
  i1106.vertexProgram = i1107[3]
  i1106.fragmentProgram = i1107[4]
  i1106.exportedForWebGl2 = !!i1107[5]
  i1106.readDepth = !!i1107[6]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'shader')
  i1112.pass = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.type = i1117[1]
  i1116.value = new pc.Vec4( i1117[2], i1117[3], i1117[4], i1117[5] )
  i1116.textureValue = i1117[6]
  i1116.shaderPropertyFlag = i1117[7]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1119 = data
  i1118.name = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'texture')
  i1118.aabb = i1119[3]
  i1118.vertices = i1119[4]
  i1118.triangles = i1119[5]
  i1118.textureRect = UnityEngine.Rect.MinMaxRect(i1119[6], i1119[7], i1119[8], i1119[9])
  i1118.packedRect = UnityEngine.Rect.MinMaxRect(i1119[10], i1119[11], i1119[12], i1119[13])
  i1118.border = new pc.Vec4( i1119[14], i1119[15], i1119[16], i1119[17] )
  i1118.transparency = i1119[18]
  i1118.bounds = i1119[19]
  i1118.pixelsPerUnit = i1119[20]
  i1118.textureWidth = i1119[21]
  i1118.textureHeight = i1119[22]
  i1118.nativeSize = new pc.Vec2( i1119[23], i1119[24] )
  i1118.pivot = new pc.Vec2( i1119[25], i1119[26] )
  i1118.textureRectOffset = new pc.Vec2( i1119[27], i1119[28] )
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1121 = data
  i1120.name = i1121[0]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.wrapMode = i1123[1]
  i1122.isLooping = !!i1123[2]
  i1122.length = i1123[3]
  var i1125 = i1123[4]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1125[i + 0]) );
  }
  i1122.curves = i1124
  var i1127 = i1123[5]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1127[i + 0]) );
  }
  i1122.events = i1126
  i1122.halfPrecision = !!i1123[6]
  i1122._frameRate = i1123[7]
  i1122.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1123[8], i1122.localBounds)
  i1122.hasMuscleCurves = !!i1123[9]
  var i1129 = i1123[10]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1122.clipMuscleConstant = i1128
  i1122.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1123[11], i1122.clipBindingConstant)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1133 = data
  i1132.path = i1133[0]
  i1132.hash = i1133[1]
  i1132.componentType = i1133[2]
  i1132.property = i1133[3]
  i1132.keys = i1133[4]
  var i1135 = i1133[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1135[i + 0]) );
  }
  i1132.objectReferenceKeys = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1139 = data
  i1138.time = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'value')
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1143 = data
  i1142.functionName = i1143[0]
  i1142.floatParameter = i1143[1]
  i1142.intParameter = i1143[2]
  i1142.stringParameter = i1143[3]
  request.r(i1143[4], i1143[5], 0, i1142, 'objectReferenceParameter')
  i1142.time = i1143[6]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1145 = data
  i1144.center = new pc.Vec3( i1145[0], i1145[1], i1145[2] )
  i1144.extends = new pc.Vec3( i1145[3], i1145[4], i1145[5] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1148.genericBindings = i1150
  var i1153 = i1149[1]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1148.pptrCurveMapping = i1152
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1155 = data
  i1154.name = i1155[0]
  var i1157 = i1155[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1157[i + 0]) );
  }
  i1154.layers = i1156
  var i1159 = i1155[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1159[i + 0]) );
  }
  i1154.parameters = i1158
  i1154.animationClips = i1155[3]
  i1154.avatarUnsupported = i1155[4]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.defaultWeight = i1163[1]
  i1162.blendingMode = i1163[2]
  i1162.avatarMask = i1163[3]
  i1162.syncedLayerIndex = i1163[4]
  i1162.syncedLayerAffectsTiming = !!i1163[5]
  i1162.syncedLayers = i1163[6]
  i1162.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1163[7], i1162.stateMachine)
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  i1164.path = i1165[2]
  var i1167 = i1165[3]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1167[i + 0]) );
  }
  i1164.states = i1166
  var i1169 = i1165[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1169[i + 0]) );
  }
  i1164.machines = i1168
  var i1171 = i1165[5]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1171[i + 0]) );
  }
  i1164.entryStateTransitions = i1170
  var i1173 = i1165[6]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1173[i + 0]) );
  }
  i1164.exitStateTransitions = i1172
  var i1175 = i1165[7]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1175[i + 0]) );
  }
  i1164.anyStateTransitions = i1174
  i1164.defaultStateId = i1165[8]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  i1178.cycleOffset = i1179[2]
  i1178.cycleOffsetParameter = i1179[3]
  i1178.cycleOffsetParameterActive = !!i1179[4]
  i1178.mirror = !!i1179[5]
  i1178.mirrorParameter = i1179[6]
  i1178.mirrorParameterActive = !!i1179[7]
  i1178.motionId = i1179[8]
  i1178.nameHash = i1179[9]
  i1178.fullPathHash = i1179[10]
  i1178.speed = i1179[11]
  i1178.speedParameter = i1179[12]
  i1178.speedParameterActive = !!i1179[13]
  i1178.tag = i1179[14]
  i1178.tagHash = i1179[15]
  i1178.writeDefaultValues = !!i1179[16]
  var i1181 = i1179[17]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 2, i1180, '')
  }
  i1178.behaviours = i1180
  var i1183 = i1179[18]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1183[i + 0]) );
  }
  i1178.transitions = i1182
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1189 = data
  i1188.fullPath = i1189[0]
  i1188.canTransitionToSelf = !!i1189[1]
  i1188.duration = i1189[2]
  i1188.exitTime = i1189[3]
  i1188.hasExitTime = !!i1189[4]
  i1188.hasFixedDuration = !!i1189[5]
  i1188.interruptionSource = i1189[6]
  i1188.offset = i1189[7]
  i1188.orderedInterruption = !!i1189[8]
  i1188.destinationStateId = i1189[9]
  i1188.isExit = !!i1189[10]
  i1188.mute = !!i1189[11]
  i1188.solo = !!i1189[12]
  var i1191 = i1189[13]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1191[i + 0]) );
  }
  i1188.conditions = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1195 = data
  i1194.mode = i1195[0]
  i1194.parameter = i1195[1]
  i1194.threshold = i1195[2]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1201 = data
  i1200.destinationStateId = i1201[0]
  i1200.isExit = !!i1201[1]
  i1200.mute = !!i1201[2]
  i1200.solo = !!i1201[3]
  var i1203 = i1201[4]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1203[i + 0]) );
  }
  i1200.conditions = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1207 = data
  i1206.defaultBool = !!i1207[0]
  i1206.defaultFloat = i1207[1]
  i1206.defaultInt = i1207[2]
  i1206.name = i1207[3]
  i1206.nameHash = i1207[4]
  i1206.type = i1207[5]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1209 = data
  i1208.name = i1209[0]
  request.r(i1209[1], i1209[2], 0, i1208, '_runtimeAnimatorController')
  var i1211 = i1209[3]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 2, i1210, '')
  }
  i1208._originalAnimationClips = i1210
  var i1213 = i1209[4]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 2, i1212, '')
  }
  i1208._overrideAnimationClips = i1212
  var i1215 = i1209[5]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1208._animationClips = i1214
  var i1217 = i1209[6]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('UnityEngine.AnimationClipPair', i1217[i + 0]) );
  }
  i1208._animationClipPairs = i1216
  return i1208
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'originalClip')
  request.r(i1223[2], i1223[3], 0, i1222, 'overrideClip')
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.bytes64 = i1225[1]
  i1224.data = i1225[2]
  return i1224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1227 = data
  i1226.normalStyle = i1227[0]
  i1226.normalSpacingOffset = i1227[1]
  i1226.boldStyle = i1227[2]
  i1226.boldSpacing = i1227[3]
  i1226.italicStyle = i1227[4]
  i1226.tabSize = i1227[5]
  request.r(i1227[6], i1227[7], 0, i1226, 'atlas')
  i1226.m_SourceFontFileGUID = i1227[8]
  i1226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1227[9], i1226.m_CreationSettings)
  request.r(i1227[10], i1227[11], 0, i1226, 'm_SourceFontFile')
  i1226.m_SourceFontFilePath = i1227[12]
  i1226.m_AtlasPopulationMode = i1227[13]
  i1226.InternalDynamicOS = !!i1227[14]
  var i1229 = i1227[15]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.Glyph', i1229[i + 0]));
  }
  i1226.m_GlyphTable = i1228
  var i1231 = i1227[16]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Character', i1231[i + 0]));
  }
  i1226.m_CharacterTable = i1230
  var i1233 = i1227[17]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1226.m_AtlasTextures = i1232
  i1226.m_AtlasTextureIndex = i1227[18]
  i1226.m_IsMultiAtlasTexturesEnabled = !!i1227[19]
  i1226.m_GetFontFeatures = !!i1227[20]
  i1226.m_ClearDynamicDataOnBuild = !!i1227[21]
  i1226.m_AtlasWidth = i1227[22]
  i1226.m_AtlasHeight = i1227[23]
  i1226.m_AtlasPadding = i1227[24]
  i1226.m_AtlasRenderMode = i1227[25]
  var i1235 = i1227[26]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.GlyphRect', i1235[i + 0]));
  }
  i1226.m_UsedGlyphRects = i1234
  var i1237 = i1227[27]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.GlyphRect', i1237[i + 0]));
  }
  i1226.m_FreeGlyphRects = i1236
  i1226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1227[28], i1226.m_FontFeatureTable)
  i1226.m_ShouldReimportFontFeatures = !!i1227[29]
  var i1239 = i1227[30]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1226.m_FallbackFontAssetTable = i1238
  var i1241 = i1227[31]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('TMPro.TMP_FontWeightPair', i1241[i + 0]) );
  }
  i1226.m_FontWeightTable = i1240
  var i1243 = i1227[32]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('TMPro.TMP_FontWeightPair', i1243[i + 0]) );
  }
  i1226.fontWeights = i1242
  i1226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1227[33], i1226.m_fontInfo)
  var i1245 = i1227[34]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Glyph', i1245[i + 0]));
  }
  i1226.m_glyphInfoList = i1244
  i1226.m_KerningTable = request.d('TMPro.KerningTable', i1227[35], i1226.m_KerningTable)
  var i1247 = i1227[36]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1226.fallbackFontAssets = i1246
  i1226.m_Version = i1227[37]
  i1226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1227[38], i1226.m_FaceInfo)
  request.r(i1227[39], i1227[40], 0, i1226, 'm_Material')
  return i1226
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1249 = data
  i1248.sourceFontFileName = i1249[0]
  i1248.sourceFontFileGUID = i1249[1]
  i1248.faceIndex = i1249[2]
  i1248.pointSizeSamplingMode = i1249[3]
  i1248.pointSize = i1249[4]
  i1248.padding = i1249[5]
  i1248.paddingMode = i1249[6]
  i1248.packingMode = i1249[7]
  i1248.atlasWidth = i1249[8]
  i1248.atlasHeight = i1249[9]
  i1248.characterSetSelectionMode = i1249[10]
  i1248.characterSequence = i1249[11]
  i1248.referencedFontAssetGUID = i1249[12]
  i1248.referencedTextAssetGUID = i1249[13]
  i1248.fontStyle = i1249[14]
  i1248.fontStyleModifier = i1249[15]
  i1248.renderMode = i1249[16]
  i1248.includeFontFeatures = !!i1249[17]
  return i1248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1253 = data
  i1252.m_Index = i1253[0]
  i1252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1253[1], i1252.m_Metrics)
  i1252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1253[2], i1252.m_GlyphRect)
  i1252.m_Scale = i1253[3]
  i1252.m_AtlasIndex = i1253[4]
  i1252.m_ClassDefinitionType = i1253[5]
  return i1252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1255 = data
  i1254.m_Width = i1255[0]
  i1254.m_Height = i1255[1]
  i1254.m_HorizontalBearingX = i1255[2]
  i1254.m_HorizontalBearingY = i1255[3]
  i1254.m_HorizontalAdvance = i1255[4]
  return i1254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1257 = data
  i1256.m_X = i1257[0]
  i1256.m_Y = i1257[1]
  i1256.m_Width = i1257[2]
  i1256.m_Height = i1257[3]
  return i1256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_Character' )
  var i1261 = data
  i1260.m_ElementType = i1261[0]
  i1260.m_Unicode = i1261[1]
  i1260.m_GlyphIndex = i1261[2]
  i1260.m_Scale = i1261[3]
  return i1260
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.MultipleSubstitutionRecord', i1269[i + 0]));
  }
  i1266.m_MultipleSubstitutionRecords = i1268
  var i1271 = i1267[1]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.LigatureSubstitutionRecord', i1271[i + 0]));
  }
  i1266.m_LigatureSubstitutionRecords = i1270
  var i1273 = i1267[2]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1273[i + 0]));
  }
  i1266.m_GlyphPairAdjustmentRecords = i1272
  var i1275 = i1267[3]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1275[i + 0]));
  }
  i1266.m_MarkToBaseAdjustmentRecords = i1274
  var i1277 = i1267[4]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1277[i + 0]));
  }
  i1266.m_MarkToMarkAdjustmentRecords = i1276
  return i1266
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1281 = data
  i1280.m_TargetGlyphID = i1281[0]
  i1280.m_SubstituteGlyphIDs = i1281[1]
  return i1280
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1285 = data
  i1284.m_ComponentGlyphIDs = i1285[0]
  i1284.m_LigatureGlyphID = i1285[1]
  return i1284
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1289 = data
  i1288.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1289[0], i1288.m_FirstAdjustmentRecord)
  i1288.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1289[1], i1288.m_SecondAdjustmentRecord)
  i1288.m_FeatureLookupFlags = i1289[2]
  return i1288
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1293 = data
  i1292.m_BaseGlyphID = i1293[0]
  i1292.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1293[1], i1292.m_BaseGlyphAnchorPoint)
  i1292.m_MarkGlyphID = i1293[2]
  i1292.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1293[3], i1292.m_MarkPositionAdjustment)
  return i1292
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1297 = data
  i1296.m_BaseMarkGlyphID = i1297[0]
  i1296.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1297[1], i1296.m_BaseMarkGlyphAnchorPoint)
  i1296.m_CombiningMarkGlyphID = i1297[2]
  i1296.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1297[3], i1296.m_CombiningMarkPositionAdjustment)
  return i1296
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'regularTypeface')
  request.r(i1303[2], i1303[3], 0, i1302, 'italicTypeface')
  return i1302
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1305 = data
  i1304.Name = i1305[0]
  i1304.PointSize = i1305[1]
  i1304.Scale = i1305[2]
  i1304.CharacterCount = i1305[3]
  i1304.LineHeight = i1305[4]
  i1304.Baseline = i1305[5]
  i1304.Ascender = i1305[6]
  i1304.CapHeight = i1305[7]
  i1304.Descender = i1305[8]
  i1304.CenterLine = i1305[9]
  i1304.SuperscriptOffset = i1305[10]
  i1304.SubscriptOffset = i1305[11]
  i1304.SubSize = i1305[12]
  i1304.Underline = i1305[13]
  i1304.UnderlineThickness = i1305[14]
  i1304.strikethrough = i1305[15]
  i1304.strikethroughThickness = i1305[16]
  i1304.TabWidth = i1305[17]
  i1304.Padding = i1305[18]
  i1304.AtlasWidth = i1305[19]
  i1304.AtlasHeight = i1305[20]
  return i1304
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1309 = data
  i1308.id = i1309[0]
  i1308.x = i1309[1]
  i1308.y = i1309[2]
  i1308.width = i1309[3]
  i1308.height = i1309[4]
  i1308.xOffset = i1309[5]
  i1308.yOffset = i1309[6]
  i1308.xAdvance = i1309[7]
  i1308.scale = i1309[8]
  return i1308
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.KerningTable' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.KerningPair', i1313[i + 0]));
  }
  i1310.kerningPairs = i1312
  return i1310
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.KerningPair' )
  var i1317 = data
  i1316.xOffset = i1317[0]
  i1316.m_FirstGlyph = i1317[1]
  i1316.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1317[2], i1316.m_FirstGlyphAdjustments)
  i1316.m_SecondGlyph = i1317[3]
  i1316.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1317[4], i1316.m_SecondGlyphAdjustments)
  i1316.m_IgnoreSpacingAdjustments = !!i1317[5]
  return i1316
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1319 = data
  i1318.m_FaceIndex = i1319[0]
  i1318.m_FamilyName = i1319[1]
  i1318.m_StyleName = i1319[2]
  i1318.m_PointSize = i1319[3]
  i1318.m_Scale = i1319[4]
  i1318.m_UnitsPerEM = i1319[5]
  i1318.m_LineHeight = i1319[6]
  i1318.m_AscentLine = i1319[7]
  i1318.m_CapLine = i1319[8]
  i1318.m_MeanLine = i1319[9]
  i1318.m_Baseline = i1319[10]
  i1318.m_DescentLine = i1319[11]
  i1318.m_SuperscriptOffset = i1319[12]
  i1318.m_SuperscriptSize = i1319[13]
  i1318.m_SubscriptOffset = i1319[14]
  i1318.m_SubscriptSize = i1319[15]
  i1318.m_UnderlineOffset = i1319[16]
  i1318.m_UnderlineThickness = i1319[17]
  i1318.m_StrikethroughOffset = i1319[18]
  i1318.m_StrikethroughThickness = i1319[19]
  i1318.m_TabWidth = i1319[20]
  return i1318
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1321 = data
  i1320.useSafeMode = !!i1321[0]
  i1320.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1321[1], i1320.safeModeOptions)
  i1320.timeScale = i1321[2]
  i1320.unscaledTimeScale = i1321[3]
  i1320.useSmoothDeltaTime = !!i1321[4]
  i1320.maxSmoothUnscaledTime = i1321[5]
  i1320.rewindCallbackMode = i1321[6]
  i1320.showUnityEditorReport = !!i1321[7]
  i1320.logBehaviour = i1321[8]
  i1320.drawGizmos = !!i1321[9]
  i1320.defaultRecyclable = !!i1321[10]
  i1320.defaultAutoPlay = i1321[11]
  i1320.defaultUpdateType = i1321[12]
  i1320.defaultTimeScaleIndependent = !!i1321[13]
  i1320.defaultEaseType = i1321[14]
  i1320.defaultEaseOvershootOrAmplitude = i1321[15]
  i1320.defaultEasePeriod = i1321[16]
  i1320.defaultAutoKill = !!i1321[17]
  i1320.defaultLoopType = i1321[18]
  i1320.debugMode = !!i1321[19]
  i1320.debugStoreTargetId = !!i1321[20]
  i1320.showPreviewPanel = !!i1321[21]
  i1320.storeSettingsLocation = i1321[22]
  i1320.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1321[23], i1320.modules)
  i1320.createASMDEF = !!i1321[24]
  i1320.showPlayingTweens = !!i1321[25]
  i1320.showPausedTweens = !!i1321[26]
  return i1320
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1322 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1323 = data
  i1322.logBehaviour = i1323[0]
  i1322.nestedTweenFailureBehaviour = i1323[1]
  return i1322
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1324 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1325 = data
  i1324.showPanel = !!i1325[0]
  i1324.audioEnabled = !!i1325[1]
  i1324.physicsEnabled = !!i1325[2]
  i1324.physics2DEnabled = !!i1325[3]
  i1324.spriteEnabled = !!i1325[4]
  i1324.uiEnabled = !!i1325[5]
  i1324.textMeshProEnabled = !!i1325[6]
  i1324.tk2DEnabled = !!i1325[7]
  i1324.deAudioEnabled = !!i1325[8]
  i1324.deUnityExtendedEnabled = !!i1325[9]
  i1324.epoOutlineEnabled = !!i1325[10]
  return i1324
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_Settings' )
  var i1327 = data
  i1326.assetVersion = i1327[0]
  i1326.m_TextWrappingMode = i1327[1]
  i1326.m_enableKerning = !!i1327[2]
  var i1329 = i1327[3]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(i1329[i + 0]);
  }
  i1326.m_ActiveFontFeatures = i1328
  i1326.m_enableExtraPadding = !!i1327[4]
  i1326.m_enableTintAllSprites = !!i1327[5]
  i1326.m_enableParseEscapeCharacters = !!i1327[6]
  i1326.m_EnableRaycastTarget = !!i1327[7]
  i1326.m_GetFontFeaturesAtRuntime = !!i1327[8]
  i1326.m_missingGlyphCharacter = i1327[9]
  i1326.m_ClearDynamicDataOnBuild = !!i1327[10]
  i1326.m_warningsDisabled = !!i1327[11]
  request.r(i1327[12], i1327[13], 0, i1326, 'm_defaultFontAsset')
  i1326.m_defaultFontAssetPath = i1327[14]
  i1326.m_defaultFontSize = i1327[15]
  i1326.m_defaultAutoSizeMinRatio = i1327[16]
  i1326.m_defaultAutoSizeMaxRatio = i1327[17]
  i1326.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1327[18], i1327[19] )
  i1326.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1327[20], i1327[21] )
  i1326.m_autoSizeTextContainer = !!i1327[22]
  i1326.m_IsTextObjectScaleStatic = !!i1327[23]
  var i1331 = i1327[24]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 1, i1330, '')
  }
  i1326.m_fallbackFontAssets = i1330
  i1326.m_matchMaterialPreset = !!i1327[25]
  i1326.m_HideSubTextObjects = !!i1327[26]
  request.r(i1327[27], i1327[28], 0, i1326, 'm_defaultSpriteAsset')
  i1326.m_defaultSpriteAssetPath = i1327[29]
  i1326.m_enableEmojiSupport = !!i1327[30]
  i1326.m_MissingCharacterSpriteUnicode = i1327[31]
  var i1333 = i1327[32]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1326.m_EmojiFallbackTextAssets = i1332
  i1326.m_defaultColorGradientPresetsPath = i1327[33]
  request.r(i1327[34], i1327[35], 0, i1326, 'm_defaultStyleSheet')
  i1326.m_StyleSheetsResourcePath = i1327[36]
  request.r(i1327[37], i1327[38], 0, i1326, 'm_leadingCharacters')
  request.r(i1327[39], i1327[40], 0, i1326, 'm_followingCharacters')
  i1326.m_UseModernHangulLineBreakingRules = !!i1327[41]
  return i1326
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'spriteSheet')
  var i1339 = i1337[2]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('TMPro.TMP_Sprite', i1339[i + 0]));
  }
  i1336.spriteInfoList = i1338
  var i1341 = i1337[3]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 1, i1340, '')
  }
  i1336.fallbackSpriteAssets = i1340
  var i1343 = i1337[4]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.TMP_SpriteCharacter', i1343[i + 0]));
  }
  i1336.m_SpriteCharacterTable = i1342
  var i1345 = i1337[5]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_SpriteGlyph', i1345[i + 0]));
  }
  i1336.m_GlyphTable = i1344
  i1336.m_Version = i1337[6]
  i1336.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1337[7], i1336.m_FaceInfo)
  request.r(i1337[8], i1337[9], 0, i1336, 'm_Material')
  return i1336
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.hashCode = i1349[1]
  i1348.unicode = i1349[2]
  i1348.pivot = new pc.Vec2( i1349[3], i1349[4] )
  request.r(i1349[5], i1349[6], 0, i1348, 'sprite')
  i1348.id = i1349[7]
  i1348.x = i1349[8]
  i1348.y = i1349[9]
  i1348.width = i1349[10]
  i1348.height = i1349[11]
  i1348.xOffset = i1349[12]
  i1348.yOffset = i1349[13]
  i1348.xAdvance = i1349[14]
  i1348.scale = i1349[15]
  return i1348
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1355 = data
  i1354.m_Name = i1355[0]
  i1354.m_ElementType = i1355[1]
  i1354.m_Unicode = i1355[2]
  i1354.m_GlyphIndex = i1355[3]
  i1354.m_Scale = i1355[4]
  return i1354
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'sprite')
  i1358.m_Index = i1359[2]
  i1358.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1359[3], i1358.m_Metrics)
  i1358.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1359[4], i1358.m_GlyphRect)
  i1358.m_Scale = i1359[5]
  i1358.m_AtlasIndex = i1359[6]
  i1358.m_ClassDefinitionType = i1359[7]
  return i1358
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('TMPro.TMP_Style', i1363[i + 0]));
  }
  i1360.m_StyleList = i1362
  return i1360
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_Style' )
  var i1367 = data
  i1366.m_Name = i1367[0]
  i1366.m_HashCode = i1367[1]
  i1366.m_OpeningDefinition = i1367[2]
  i1366.m_ClosingDefinition = i1367[3]
  i1366.m_OpeningTagArray = i1367[4]
  i1366.m_ClosingTagArray = i1367[5]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1371[i + 0]) );
  }
  i1368.files = i1370
  i1368.componentToPrefabIds = i1369[1]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1375 = data
  i1374.path = i1375[0]
  request.r(i1375[1], i1375[2], 0, i1374, 'unityObject')
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1379[i + 0]) );
  }
  i1376.scriptsExecutionOrder = i1378
  var i1381 = i1377[1]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1381[i + 0]) );
  }
  i1376.sortingLayers = i1380
  var i1383 = i1377[2]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1383[i + 0]) );
  }
  i1376.cullingLayers = i1382
  i1376.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1377[3], i1376.timeSettings)
  i1376.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1377[4], i1376.physicsSettings)
  i1376.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1377[5], i1376.physics2DSettings)
  i1376.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1377[6], i1376.qualitySettings)
  i1376.enableRealtimeShadows = !!i1377[7]
  i1376.enableAutoInstancing = !!i1377[8]
  i1376.enableStaticBatching = !!i1377[9]
  i1376.enableDynamicBatching = !!i1377[10]
  i1376.usePreservativeDynamicBatching = !!i1377[11]
  i1376.lightmapEncodingQuality = i1377[12]
  i1376.desiredColorSpace = i1377[13]
  var i1385 = i1377[14]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1376.allTags = i1384
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.value = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1393 = data
  i1392.id = i1393[0]
  i1392.name = i1393[1]
  i1392.value = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1397 = data
  i1396.id = i1397[0]
  i1396.name = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1399 = data
  i1398.fixedDeltaTime = i1399[0]
  i1398.maximumDeltaTime = i1399[1]
  i1398.timeScale = i1399[2]
  i1398.maximumParticleTimestep = i1399[3]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1401 = data
  i1400.gravity = new pc.Vec3( i1401[0], i1401[1], i1401[2] )
  i1400.defaultSolverIterations = i1401[3]
  i1400.bounceThreshold = i1401[4]
  i1400.autoSyncTransforms = !!i1401[5]
  i1400.autoSimulation = !!i1401[6]
  var i1403 = i1401[7]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1403[i + 0]) );
  }
  i1400.collisionMatrix = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.layerId = i1407[1]
  i1406.otherLayerId = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'material')
  i1408.gravity = new pc.Vec2( i1409[2], i1409[3] )
  i1408.positionIterations = i1409[4]
  i1408.velocityIterations = i1409[5]
  i1408.velocityThreshold = i1409[6]
  i1408.maxLinearCorrection = i1409[7]
  i1408.maxAngularCorrection = i1409[8]
  i1408.maxTranslationSpeed = i1409[9]
  i1408.maxRotationSpeed = i1409[10]
  i1408.baumgarteScale = i1409[11]
  i1408.baumgarteTOIScale = i1409[12]
  i1408.timeToSleep = i1409[13]
  i1408.linearSleepTolerance = i1409[14]
  i1408.angularSleepTolerance = i1409[15]
  i1408.defaultContactOffset = i1409[16]
  i1408.autoSimulation = !!i1409[17]
  i1408.queriesHitTriggers = !!i1409[18]
  i1408.queriesStartInColliders = !!i1409[19]
  i1408.callbacksOnDisable = !!i1409[20]
  i1408.reuseCollisionCallbacks = !!i1409[21]
  i1408.autoSyncTransforms = !!i1409[22]
  var i1411 = i1409[23]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1411[i + 0]) );
  }
  i1408.collisionMatrix = i1410
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.layerId = i1415[1]
  i1414.otherLayerId = i1415[2]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1419[i + 0]) );
  }
  i1416.qualityLevels = i1418
  var i1421 = i1417[1]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1416.names = i1420
  i1416.shadows = i1417[2]
  i1416.anisotropicFiltering = i1417[3]
  i1416.antiAliasing = i1417[4]
  i1416.lodBias = i1417[5]
  i1416.shadowCascades = i1417[6]
  i1416.shadowDistance = i1417[7]
  i1416.shadowmaskMode = i1417[8]
  i1416.shadowProjection = i1417[9]
  i1416.shadowResolution = i1417[10]
  i1416.softParticles = !!i1417[11]
  i1416.softVegetation = !!i1417[12]
  i1416.activeColorSpace = i1417[13]
  i1416.desiredColorSpace = i1417[14]
  i1416.masterTextureLimit = i1417[15]
  i1416.maxQueuedFrames = i1417[16]
  i1416.particleRaycastBudget = i1417[17]
  i1416.pixelLightCount = i1417[18]
  i1416.realtimeReflectionProbes = !!i1417[19]
  i1416.shadowCascade2Split = i1417[20]
  i1416.shadowCascade4Split = new pc.Vec3( i1417[21], i1417[22], i1417[23] )
  i1416.streamingMipmapsActive = !!i1417[24]
  i1416.vSyncCount = i1417[25]
  i1416.asyncUploadBufferSize = i1417[26]
  i1416.asyncUploadTimeSlice = i1417[27]
  i1416.billboardsFaceCameraPosition = !!i1417[28]
  i1416.shadowNearPlaneOffset = i1417[29]
  i1416.streamingMipmapsMemoryBudget = i1417[30]
  i1416.maximumLODLevel = i1417[31]
  i1416.streamingMipmapsAddAllCameras = !!i1417[32]
  i1416.streamingMipmapsMaxLevelReduction = i1417[33]
  i1416.streamingMipmapsRenderersPerFrame = i1417[34]
  i1416.resolutionScalingFixedDPIFactor = i1417[35]
  i1416.streamingMipmapsMaxFileIORequests = i1417[36]
  i1416.currentQualityLevel = i1417[37]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1425 = data
  i1424.name = i1425[0]
  var i1427 = i1425[1]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1427[i + 0]) );
  }
  i1424.tos = i1426
  var i1429 = i1425[2]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( i1429[i + 0] );
  }
  i1424.constant = i1428
  i1424.isValid = !!i1425[3]
  i1424.isHuman = !!i1425[4]
  i1424.hasRootMotion = !!i1425[5]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1433 = data
  i1432.hash = i1433[0]
  i1432.path = i1433[1]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1437 = data
  i1436.weight = i1437[0]
  i1436.vertices = i1437[1]
  i1436.normals = i1437[2]
  i1436.tangents = i1437[3]
  return i1436
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1439 = data
  i1438.m_GlyphIndex = i1439[0]
  i1438.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1439[1], i1438.m_GlyphValueRecord)
  return i1438
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1441 = data
  i1440.m_XCoordinate = i1441[0]
  i1440.m_YCoordinate = i1441[1]
  return i1440
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1443 = data
  i1442.m_XPositionAdjustment = i1443[0]
  i1442.m_YPositionAdjustment = i1443[1]
  return i1442
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1445 = data
  i1444.xPlacement = i1445[0]
  i1444.yPlacement = i1445[1]
  i1444.xAdvance = i1445[2]
  i1444.yAdvance = i1445[3]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1447 = data
  i1446.m_XPlacement = i1447[0]
  i1446.m_YPlacement = i1447[1]
  i1446.m_XAdvance = i1447[2]
  i1446.m_YAdvance = i1447[3]
  return i1446
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[50],"77":[36],"78":[43],"79":[43],"80":[43],"81":[43],"82":[43],"83":[43],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[36],"99":[5],"100":[101],"102":[101],"20":[19],"103":[19],"104":[25,19],"105":[5],"106":[25,19],"107":[19],"108":[19],"109":[5,19],"30":[19,25],"110":[111],"112":[111],"113":[111],"114":[19],"115":[19],"22":[20],"26":[25,19],"116":[19],"21":[20],"117":[19],"118":[19],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"29":[19],"124":[19],"125":[25,19],"126":[19],"127":[19],"128":[19],"129":[19],"130":[25,19],"131":[19],"132":[16],"133":[16],"17":[16],"134":[16],"135":[36],"136":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AnimatorOverrideController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.SphereCollider","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","CharacterTrigger","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/21/2026 06:16:51";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SBFM_V07_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1679";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4697";

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

Deserializers.buildID = "e7cc7cd2-cf09-41a2-8fcf-6930f6352908";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

