var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointSpring' )
  var i727 = data
  i726.spring = i727[0]
  i726.damper = i727[1]
  i726.targetPosition = i727[2]
  return i726
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointMotor' )
  var i729 = data
  i728.m_TargetVelocity = i729[0]
  i728.m_Force = i729[1]
  i728.m_FreeSpin = i729[2]
  return i728
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointLimits' )
  var i731 = data
  i730.m_Min = i731[0]
  i730.m_Max = i731[1]
  i730.m_Bounciness = i731[2]
  i730.m_BounceMinVelocity = i731[3]
  i730.m_ContactDistance = i731[4]
  i730.minBounce = i731[5]
  i730.maxBounce = i731[6]
  return i730
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointDrive' )
  var i733 = data
  i732.m_PositionSpring = i733[0]
  i732.m_PositionDamper = i733[1]
  i732.m_MaximumForce = i733[2]
  i732.m_UseAcceleration = i733[3]
  return i732
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i735 = data
  i734.m_Spring = i735[0]
  i734.m_Damper = i735[1]
  return i734
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i737 = data
  i736.m_Limit = i737[0]
  i736.m_Bounciness = i737[1]
  i736.m_ContactDistance = i737[2]
  return i736
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i739 = data
  i738.m_ExtremumSlip = i739[0]
  i738.m_ExtremumValue = i739[1]
  i738.m_AsymptoteSlip = i739[2]
  i738.m_AsymptoteValue = i739[3]
  i738.m_Stiffness = i739[4]
  return i738
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i741 = data
  i740.m_LowerAngle = i741[0]
  i740.m_UpperAngle = i741[1]
  return i740
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i743 = data
  i742.m_MotorSpeed = i743[0]
  i742.m_MaximumMotorTorque = i743[1]
  return i742
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i745 = data
  i744.m_DampingRatio = i745[0]
  i744.m_Frequency = i745[1]
  i744.m_Angle = i745[2]
  return i744
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i747 = data
  i746.m_LowerTranslation = i747[0]
  i746.m_UpperTranslation = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i749 = data
  i748.name = i749[0]
  i748.width = i749[1]
  i748.height = i749[2]
  i748.mipmapCount = i749[3]
  i748.anisoLevel = i749[4]
  i748.filterMode = i749[5]
  i748.hdr = !!i749[6]
  i748.format = i749[7]
  i748.wrapMode = i749[8]
  i748.alphaIsTransparency = !!i749[9]
  i748.alphaSource = i749[10]
  i748.graphicsFormat = i749[11]
  i748.sRGBTexture = !!i749[12]
  i748.desiredColorSpace = i749[13]
  i748.wrapU = i749[14]
  i748.wrapV = i749[15]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i750 = root || new pc.UnityMaterial()
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'shader')
  i750.renderQueue = i751[3]
  i750.enableInstancing = !!i751[4]
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i753[i + 0]) );
  }
  i750.floatParameters = i752
  var i755 = i751[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i755[i + 0]) );
  }
  i750.colorParameters = i754
  var i757 = i751[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i757[i + 0]) );
  }
  i750.vectorParameters = i756
  var i759 = i751[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i759[i + 0]) );
  }
  i750.textureParameters = i758
  var i761 = i751[9]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i761[i + 0]) );
  }
  i750.materialFlags = i760
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Color(i769[1], i769[2], i769[3], i769[4])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = new pc.Vec4( i773[1], i773[2], i773[3], i773[4] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'value')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i781 = data
  i780.name = i781[0]
  i780.enabled = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i783 = data
  i782.name = i783[0]
  i782.halfPrecision = !!i783[1]
  i782.useSimplification = !!i783[2]
  i782.useUInt32IndexFormat = !!i783[3]
  i782.vertexCount = i783[4]
  i782.aabb = i783[5]
  var i785 = i783[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( !!i785[i + 0] );
  }
  i782.streams = i784
  i782.vertices = i783[7]
  var i787 = i783[8]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i787[i + 0]) );
  }
  i782.subMeshes = i786
  var i789 = i783[9]
  var i788 = []
  for(var i = 0; i < i789.length; i += 16) {
    i788.push( new pc.Mat4().setData(i789[i + 0], i789[i + 1], i789[i + 2], i789[i + 3],  i789[i + 4], i789[i + 5], i789[i + 6], i789[i + 7],  i789[i + 8], i789[i + 9], i789[i + 10], i789[i + 11],  i789[i + 12], i789[i + 13], i789[i + 14], i789[i + 15]) );
  }
  i782.bindposes = i788
  var i791 = i783[10]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i791[i + 0]) );
  }
  i782.blendShapes = i790
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i797 = data
  i796.triangles = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i803 = data
  i802.name = i803[0]
  var i805 = i803[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i805[i + 0]) );
  }
  i802.frames = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i807 = data
  i806.position = new pc.Vec3( i807[0], i807[1], i807[2] )
  i806.scale = new pc.Vec3( i807[3], i807[4], i807[5] )
  i806.rotation = new pc.Quat(i807[6], i807[7], i807[8], i807[9])
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'sharedMesh')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'additionalVertexStreams')
  i810.enabled = !!i811[2]
  request.r(i811[3], i811[4], 0, i810, 'sharedMaterial')
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sharedMaterials = i812
  i810.receiveShadows = !!i811[6]
  i810.shadowCastingMode = i811[7]
  i810.sortingLayerID = i811[8]
  i810.sortingOrder = i811[9]
  i810.lightmapIndex = i811[10]
  i810.lightmapSceneIndex = i811[11]
  i810.lightmapScaleOffset = new pc.Vec4( i811[12], i811[13], i811[14], i811[15] )
  i810.lightProbeUsage = i811[16]
  i810.reflectionProbeUsage = i811[17]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'sharedMesh')
  i816.convex = !!i817[2]
  i816.enabled = !!i817[3]
  i816.isTrigger = !!i817[4]
  request.r(i817[5], i817[6], 0, i816, 'material')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i819 = data
  i818.name = i819[0]
  i818.tagId = i819[1]
  i818.enabled = !!i819[2]
  i818.isStatic = !!i819[3]
  i818.layer = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.size = new pc.Vec3( i821[3], i821[4], i821[5] )
  i820.enabled = !!i821[6]
  i820.isTrigger = !!i821[7]
  request.r(i821[8], i821[9], 0, i820, 'material')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i823 = data
  i822.center = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.radius = i823[3]
  i822.height = i823[4]
  i822.direction = i823[5]
  i822.enabled = !!i823[6]
  i822.isTrigger = !!i823[7]
  request.r(i823[8], i823[9], 0, i822, 'material')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'animatorController')
  request.r(i825[2], i825[3], 0, i824, 'avatar')
  i824.updateMode = i825[4]
  i824.hasTransformHierarchy = !!i825[5]
  i824.applyRootMotion = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.humanBones = i826
  i824.enabled = !!i825[8]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'clip')
  request.r(i831[2], i831[3], 0, i830, 'outputAudioMixerGroup')
  i830.playOnAwake = !!i831[4]
  i830.loop = !!i831[5]
  i830.time = i831[6]
  i830.volume = i831[7]
  i830.pitch = i831[8]
  i830.enabled = !!i831[9]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i833 = data
  i832.color = new pc.Color(i833[0], i833[1], i833[2], i833[3])
  request.r(i833[4], i833[5], 0, i832, 'sprite')
  i832.flipX = !!i833[6]
  i832.flipY = !!i833[7]
  i832.drawMode = i833[8]
  i832.size = new pc.Vec2( i833[9], i833[10] )
  i832.tileMode = i833[11]
  i832.adaptiveModeThreshold = i833[12]
  i832.maskInteraction = i833[13]
  i832.spriteSortPoint = i833[14]
  i832.enabled = !!i833[15]
  request.r(i833[16], i833[17], 0, i832, 'sharedMaterial')
  var i835 = i833[18]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.sharedMaterials = i834
  i832.receiveShadows = !!i833[19]
  i832.shadowCastingMode = i833[20]
  i832.sortingLayerID = i833[21]
  i832.sortingOrder = i833[22]
  i832.lightmapIndex = i833[23]
  i832.lightmapSceneIndex = i833[24]
  i832.lightmapScaleOffset = new pc.Vec4( i833[25], i833[26], i833[27], i833[28] )
  i832.lightProbeUsage = i833[29]
  i832.reflectionProbeUsage = i833[30]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i837 = data
  i836.name = i837[0]
  i836.atlasId = i837[1]
  i836.mipmapCount = i837[2]
  i836.hdr = !!i837[3]
  i836.size = i837[4]
  i836.anisoLevel = i837[5]
  i836.filterMode = i837[6]
  var i839 = i837[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 4) {
    i838.push( UnityEngine.Rect.MinMaxRect(i839[i + 0], i839[i + 1], i839[i + 2], i839[i + 3]) );
  }
  i836.rects = i838
  i836.wrapU = i837[8]
  i836.wrapV = i837[9]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i843 = data
  i842.name = i843[0]
  i842.index = i843[1]
  i842.startup = !!i843[2]
  return i842
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_FirstSelected')
  i844.m_sendNavigationEvents = !!i845[2]
  i844.m_DragThreshold = i845[3]
  return i844
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i847 = data
  i846.m_HorizontalAxis = i847[0]
  i846.m_VerticalAxis = i847[1]
  i846.m_SubmitButton = i847[2]
  i846.m_CancelButton = i847[3]
  i846.m_InputActionsPerSecond = i847[4]
  i846.m_RepeatDelay = i847[5]
  i846.m_ForceModuleActive = !!i847[6]
  i846.m_SendPointerHoverToParent = !!i847[7]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i849 = data
  i848.type = i849[0]
  i848.color = new pc.Color(i849[1], i849[2], i849[3], i849[4])
  i848.cullingMask = i849[5]
  i848.intensity = i849[6]
  i848.range = i849[7]
  i848.spotAngle = i849[8]
  i848.shadows = i849[9]
  i848.shadowNormalBias = i849[10]
  i848.shadowBias = i849[11]
  i848.shadowStrength = i849[12]
  i848.shadowResolution = i849[13]
  i848.lightmapBakeType = i849[14]
  i848.renderMode = i849[15]
  request.r(i849[16], i849[17], 0, i848, 'cookie')
  i848.cookieSize = i849[18]
  i848.shadowNearPlane = i849[19]
  i848.occlusionMaskChannel = i849[20]
  i848.isBaked = !!i849[21]
  i848.mixedLightingMode = i849[22]
  i848.enabled = !!i849[23]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i851 = data
  i850.pivot = new pc.Vec2( i851[0], i851[1] )
  i850.anchorMin = new pc.Vec2( i851[2], i851[3] )
  i850.anchorMax = new pc.Vec2( i851[4], i851[5] )
  i850.sizeDelta = new pc.Vec2( i851[6], i851[7] )
  i850.anchoredPosition3D = new pc.Vec3( i851[8], i851[9], i851[10] )
  i850.rotation = new pc.Quat(i851[11], i851[12], i851[13], i851[14])
  i850.scale = new pc.Vec3( i851[15], i851[16], i851[17] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i853 = data
  i852.planeDistance = i853[0]
  i852.referencePixelsPerUnit = i853[1]
  i852.isFallbackOverlay = !!i853[2]
  i852.renderMode = i853[3]
  i852.renderOrder = i853[4]
  i852.sortingLayerName = i853[5]
  i852.sortingOrder = i853[6]
  i852.scaleFactor = i853[7]
  request.r(i853[8], i853[9], 0, i852, 'worldCamera')
  i852.overrideSorting = !!i853[10]
  i852.pixelPerfect = !!i853[11]
  i852.targetDisplay = i853[12]
  i852.overridePixelPerfect = !!i853[13]
  i852.enabled = !!i853[14]
  return i852
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i855 = data
  i854.m_UiScaleMode = i855[0]
  i854.m_ReferencePixelsPerUnit = i855[1]
  i854.m_ScaleFactor = i855[2]
  i854.m_ReferenceResolution = new pc.Vec2( i855[3], i855[4] )
  i854.m_ScreenMatchMode = i855[5]
  i854.m_MatchWidthOrHeight = i855[6]
  i854.m_PhysicalUnit = i855[7]
  i854.m_FallbackScreenDPI = i855[8]
  i854.m_DefaultSpriteDPI = i855[9]
  i854.m_DynamicPixelsPerUnit = i855[10]
  i854.m_PresetInfoIsWorld = !!i855[11]
  return i854
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i857 = data
  i856.m_IgnoreReversedGraphics = !!i857[0]
  i856.m_BlockingObjects = i857[1]
  i856.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i857[2] )
  return i856
}

Deserializers["Joystick"] = function (request, data, root) {
  var i858 = root || request.c( 'Joystick' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'background')
  request.r(i859[2], i859[3], 0, i858, 'joy')
  i858.deadZone = i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i861 = data
  i860.cullTransparentMesh = !!i861[0]
  return i860
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Image' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Sprite')
  i862.m_Type = i863[2]
  i862.m_PreserveAspect = !!i863[3]
  i862.m_FillCenter = !!i863[4]
  i862.m_FillMethod = i863[5]
  i862.m_FillAmount = i863[6]
  i862.m_FillClockwise = !!i863[7]
  i862.m_FillOrigin = i863[8]
  i862.m_UseSpriteMesh = !!i863[9]
  i862.m_PixelsPerUnitMultiplier = i863[10]
  request.r(i863[11], i863[12], 0, i862, 'm_Material')
  i862.m_Maskable = !!i863[13]
  i862.m_Color = new pc.Color(i863[14], i863[15], i863[16], i863[17])
  i862.m_RaycastTarget = !!i863[18]
  i862.m_RaycastPadding = new pc.Vec4( i863[19], i863[20], i863[21], i863[22] )
  return i862
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i864 = root || request.c( 'JumpButton' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'button')
  return i864
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Button' )
  var i867 = data
  i866.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i867[0], i866.m_OnClick)
  i866.m_Navigation = request.d('UnityEngine.UI.Navigation', i867[1], i866.m_Navigation)
  i866.m_Transition = i867[2]
  i866.m_Colors = request.d('UnityEngine.UI.ColorBlock', i867[3], i866.m_Colors)
  i866.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i867[4], i866.m_SpriteState)
  i866.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i867[5], i866.m_AnimationTriggers)
  i866.m_Interactable = !!i867[6]
  request.r(i867[7], i867[8], 0, i866, 'm_TargetGraphic')
  return i866
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i869 = data
  i868.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i869[0], i868.m_PersistentCalls)
  return i868
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i871 = data
  var i873 = i871[0]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.Events.PersistentCall', i873[i + 0]));
  }
  i870.m_Calls = i872
  return i870
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_Target')
  i876.m_TargetAssemblyTypeName = i877[2]
  i876.m_MethodName = i877[3]
  i876.m_Mode = i877[4]
  i876.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i877[5], i876.m_Arguments)
  i876.m_CallState = i877[6]
  return i876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i879 = data
  i878.m_Mode = i879[0]
  i878.m_WrapAround = !!i879[1]
  request.r(i879[2], i879[3], 0, i878, 'm_SelectOnUp')
  request.r(i879[4], i879[5], 0, i878, 'm_SelectOnDown')
  request.r(i879[6], i879[7], 0, i878, 'm_SelectOnLeft')
  request.r(i879[8], i879[9], 0, i878, 'm_SelectOnRight')
  return i878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i881 = data
  i880.m_NormalColor = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.m_HighlightedColor = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.m_PressedColor = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.m_SelectedColor = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  i880.m_DisabledColor = new pc.Color(i881[16], i881[17], i881[18], i881[19])
  i880.m_ColorMultiplier = i881[20]
  i880.m_FadeDuration = i881[21]
  return i880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_HighlightedSprite')
  request.r(i883[2], i883[3], 0, i882, 'm_PressedSprite')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectedSprite')
  request.r(i883[6], i883[7], 0, i882, 'm_DisabledSprite')
  return i882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i885 = data
  i884.m_NormalTrigger = i885[0]
  i884.m_HighlightedTrigger = i885[1]
  i884.m_PressedTrigger = i885[2]
  i884.m_SelectedTrigger = i885[3]
  i884.m_DisabledTrigger = i885[4]
  return i884
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Mask' )
  var i887 = data
  i886.m_ShowMaskGraphic = !!i887[0]
  return i886
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i889 = data
  i888.m_hasFontAssetChanged = !!i889[0]
  request.r(i889[1], i889[2], 0, i888, 'm_baseMaterial')
  i888.m_maskOffset = new pc.Vec4( i889[3], i889[4], i889[5], i889[6] )
  i888.m_text = i889[7]
  i888.m_isRightToLeft = !!i889[8]
  request.r(i889[9], i889[10], 0, i888, 'm_fontAsset')
  request.r(i889[11], i889[12], 0, i888, 'm_sharedMaterial')
  var i891 = i889[13]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.m_fontSharedMaterials = i890
  request.r(i889[14], i889[15], 0, i888, 'm_fontMaterial')
  var i893 = i889[16]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i888.m_fontMaterials = i892
  i888.m_fontColor32 = UnityEngine.Color32.ConstructColor(i889[17], i889[18], i889[19], i889[20])
  i888.m_fontColor = new pc.Color(i889[21], i889[22], i889[23], i889[24])
  i888.m_enableVertexGradient = !!i889[25]
  i888.m_colorMode = i889[26]
  i888.m_fontColorGradient = request.d('TMPro.VertexGradient', i889[27], i888.m_fontColorGradient)
  request.r(i889[28], i889[29], 0, i888, 'm_fontColorGradientPreset')
  request.r(i889[30], i889[31], 0, i888, 'm_spriteAsset')
  i888.m_tintAllSprites = !!i889[32]
  request.r(i889[33], i889[34], 0, i888, 'm_StyleSheet')
  i888.m_TextStyleHashCode = i889[35]
  i888.m_overrideHtmlColors = !!i889[36]
  i888.m_faceColor = UnityEngine.Color32.ConstructColor(i889[37], i889[38], i889[39], i889[40])
  i888.m_fontSize = i889[41]
  i888.m_fontSizeBase = i889[42]
  i888.m_fontWeight = i889[43]
  i888.m_enableAutoSizing = !!i889[44]
  i888.m_fontSizeMin = i889[45]
  i888.m_fontSizeMax = i889[46]
  i888.m_fontStyle = i889[47]
  i888.m_HorizontalAlignment = i889[48]
  i888.m_VerticalAlignment = i889[49]
  i888.m_textAlignment = i889[50]
  i888.m_characterSpacing = i889[51]
  i888.m_characterHorizontalScale = i889[52]
  i888.m_wordSpacing = i889[53]
  i888.m_lineSpacing = i889[54]
  i888.m_lineSpacingMax = i889[55]
  i888.m_paragraphSpacing = i889[56]
  i888.m_charWidthMaxAdj = i889[57]
  i888.m_TextWrappingMode = i889[58]
  i888.m_wordWrappingRatios = i889[59]
  i888.m_overflowMode = i889[60]
  request.r(i889[61], i889[62], 0, i888, 'm_linkedTextComponent')
  request.r(i889[63], i889[64], 0, i888, 'parentLinkedComponent')
  i888.m_enableKerning = !!i889[65]
  var i895 = i889[66]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(i895[i + 0]);
  }
  i888.m_ActiveFontFeatures = i894
  i888.m_enableExtraPadding = !!i889[67]
  i888.checkPaddingRequired = !!i889[68]
  i888.m_isRichText = !!i889[69]
  i888.m_parseCtrlCharacters = !!i889[70]
  i888.m_isOrthographic = !!i889[71]
  i888.m_isCullingEnabled = !!i889[72]
  i888.m_horizontalMapping = i889[73]
  i888.m_verticalMapping = i889[74]
  i888.m_uvLineOffset = i889[75]
  i888.m_geometrySortingOrder = i889[76]
  i888.m_IsTextObjectScaleStatic = !!i889[77]
  i888.m_VertexBufferAutoSizeReduction = !!i889[78]
  i888.m_useMaxVisibleDescender = !!i889[79]
  i888.m_pageToDisplay = i889[80]
  i888.m_margin = new pc.Vec4( i889[81], i889[82], i889[83], i889[84] )
  i888.m_isUsingLegacyAnimationComponent = !!i889[85]
  i888.m_isVolumetricText = !!i889[86]
  request.r(i889[87], i889[88], 0, i888, 'm_Material')
  i888.m_EmojiFallbackSupport = !!i889[89]
  i888.m_Maskable = !!i889[90]
  i888.m_Color = new pc.Color(i889[91], i889[92], i889[93], i889[94])
  i888.m_RaycastTarget = !!i889[95]
  i888.m_RaycastPadding = new pc.Vec4( i889[96], i889[97], i889[98], i889[99] )
  return i888
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.VertexGradient' )
  var i897 = data
  i896.topLeft = new pc.Color(i897[0], i897[1], i897[2], i897[3])
  i896.topRight = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  i896.bottomLeft = new pc.Color(i897[8], i897[9], i897[10], i897[11])
  i896.bottomRight = new pc.Color(i897[12], i897[13], i897[14], i897[15])
  return i896
}

Deserializers["TutController"] = function (request, data, root) {
  var i900 = root || request.c( 'TutController' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'tutScene')
  request.r(i901[2], i901[3], 0, i900, 'startTut')
  request.r(i901[4], i901[5], 0, i900, 'playTut')
  request.r(i901[6], i901[7], 0, i900, 'farTut')
  request.r(i901[8], i901[9], 0, i900, 'failTut')
  return i900
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i902 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i903 = data
  i902.targetIsSelf = !!i903[0]
  request.r(i903[1], i903[2], 0, i902, 'targetGO')
  i902.tweenTargetIsTargetGO = !!i903[3]
  i902.delay = i903[4]
  i902.duration = i903[5]
  i902.easeType = i903[6]
  i902.easeCurve = new pc.AnimationCurve( { keys_flow: i903[7] } )
  i902.loopType = i903[8]
  i902.loops = i903[9]
  i902.id = i903[10]
  i902.isRelative = !!i903[11]
  i902.isFrom = !!i903[12]
  i902.isIndependentUpdate = !!i903[13]
  i902.autoKill = !!i903[14]
  i902.autoGenerate = !!i903[15]
  i902.isActive = !!i903[16]
  i902.isValid = !!i903[17]
  request.r(i903[18], i903[19], 0, i902, 'target')
  i902.animationType = i903[20]
  i902.targetType = i903[21]
  i902.forcedTargetType = i903[22]
  i902.autoPlay = !!i903[23]
  i902.useTargetAsV3 = !!i903[24]
  i902.endValueFloat = i903[25]
  i902.endValueV3 = new pc.Vec3( i903[26], i903[27], i903[28] )
  i902.endValueV2 = new pc.Vec2( i903[29], i903[30] )
  i902.endValueColor = new pc.Color(i903[31], i903[32], i903[33], i903[34])
  i902.endValueString = i903[35]
  i902.endValueRect = UnityEngine.Rect.MinMaxRect(i903[36], i903[37], i903[38], i903[39])
  request.r(i903[40], i903[41], 0, i902, 'endValueTransform')
  i902.optionalBool0 = !!i903[42]
  i902.optionalBool1 = !!i903[43]
  i902.optionalFloat0 = i903[44]
  i902.optionalInt0 = i903[45]
  i902.optionalRotationMode = i903[46]
  i902.optionalScrambleMode = i903[47]
  i902.optionalShakeRandomnessMode = i903[48]
  i902.optionalString = i903[49]
  i902.updateType = i903[50]
  i902.isSpeedBased = !!i903[51]
  i902.hasOnStart = !!i903[52]
  i902.hasOnPlay = !!i903[53]
  i902.hasOnUpdate = !!i903[54]
  i902.hasOnStepComplete = !!i903[55]
  i902.hasOnComplete = !!i903[56]
  i902.hasOnTweenCreated = !!i903[57]
  i902.hasOnRewind = !!i903[58]
  i902.onStart = request.d('UnityEngine.Events.UnityEvent', i903[59], i902.onStart)
  i902.onPlay = request.d('UnityEngine.Events.UnityEvent', i903[60], i902.onPlay)
  i902.onUpdate = request.d('UnityEngine.Events.UnityEvent', i903[61], i902.onUpdate)
  i902.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i903[62], i902.onStepComplete)
  i902.onComplete = request.d('UnityEngine.Events.UnityEvent', i903[63], i902.onComplete)
  i902.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i903[64], i902.onTweenCreated)
  i902.onRewind = request.d('UnityEngine.Events.UnityEvent', i903[65], i902.onRewind)
  return i902
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i905 = data
  i904.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i905[0], i904.m_PersistentCalls)
  return i904
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i906 = root || request.c( 'HideOnPointer' )
  var i907 = data
  i906.OnPointerDownEvent = request.d('System.Action', i907[0], i906.OnPointerDownEvent)
  return i906
}

Deserializers["System.Action"] = function (request, data, root) {
  var i908 = root || request.c( 'System.Action' )
  var i909 = data
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i911 = data
  i910.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i911[0], i910.main)
  i910.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i911[1], i910.colorBySpeed)
  i910.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i911[2], i910.colorOverLifetime)
  i910.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i911[3], i910.emission)
  i910.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i911[4], i910.rotationBySpeed)
  i910.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i911[5], i910.rotationOverLifetime)
  i910.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i911[6], i910.shape)
  i910.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i911[7], i910.sizeBySpeed)
  i910.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i911[8], i910.sizeOverLifetime)
  i910.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i911[9], i910.textureSheetAnimation)
  i910.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i911[10], i910.velocityOverLifetime)
  i910.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i911[11], i910.noise)
  i910.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i911[12], i910.inheritVelocity)
  i910.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i911[13], i910.forceOverLifetime)
  i910.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i911[14], i910.limitVelocityOverLifetime)
  i910.useAutoRandomSeed = !!i911[15]
  i910.randomSeed = i911[16]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemMain()
  var i913 = data
  i912.duration = i913[0]
  i912.loop = !!i913[1]
  i912.prewarm = !!i913[2]
  i912.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.startDelay)
  i912.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[4], i912.startLifetime)
  i912.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[5], i912.startSpeed)
  i912.startSize3D = !!i913[6]
  i912.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[7], i912.startSizeX)
  i912.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[8], i912.startSizeY)
  i912.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[9], i912.startSizeZ)
  i912.startRotation3D = !!i913[10]
  i912.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[11], i912.startRotationX)
  i912.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[12], i912.startRotationY)
  i912.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[13], i912.startRotationZ)
  i912.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i913[14], i912.startColor)
  i912.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[15], i912.gravityModifier)
  i912.simulationSpace = i913[16]
  request.r(i913[17], i913[18], 0, i912, 'customSimulationSpace')
  i912.simulationSpeed = i913[19]
  i912.useUnscaledTime = !!i913[20]
  i912.scalingMode = i913[21]
  i912.playOnAwake = !!i913[22]
  i912.maxParticles = i913[23]
  i912.emitterVelocityMode = i913[24]
  i912.stopAction = i913[25]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i914 = root || new pc.MinMaxCurve()
  var i915 = data
  i914.mode = i915[0]
  i914.curveMin = new pc.AnimationCurve( { keys_flow: i915[1] } )
  i914.curveMax = new pc.AnimationCurve( { keys_flow: i915[2] } )
  i914.curveMultiplier = i915[3]
  i914.constantMin = i915[4]
  i914.constantMax = i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i916 = root || new pc.MinMaxGradient()
  var i917 = data
  i916.mode = i917[0]
  i916.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i917[1], i916.gradientMin)
  i916.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i917[2], i916.gradientMax)
  i916.colorMin = new pc.Color(i917[3], i917[4], i917[5], i917[6])
  i916.colorMax = new pc.Color(i917[7], i917[8], i917[9], i917[10])
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i919 = data
  i918.mode = i919[0]
  var i921 = i919[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i921[i + 0]) );
  }
  i918.colorKeys = i920
  var i923 = i919[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i923[i + 0]) );
  }
  i918.alphaKeys = i922
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemColorBySpeed()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i925[1], i924.color)
  i924.range = new pc.Vec2( i925[2], i925[3] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i929 = data
  i928.color = new pc.Color(i929[0], i929[1], i929[2], i929[3])
  i928.time = i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i933 = data
  i932.alpha = i933[0]
  i932.time = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemColorOverLifetime()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i935[1], i934.color)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemEmitter()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.rateOverTime)
  i936.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.rateOverDistance)
  var i939 = i937[3]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i939[i + 0]) );
  }
  i936.bursts = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemBurst()
  var i943 = data
  i942.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[0], i942.count)
  i942.cycleCount = i943[1]
  i942.minCount = i943[2]
  i942.maxCount = i943[3]
  i942.repeatInterval = i943[4]
  i942.time = i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemRotationBySpeed()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.x)
  i944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.y)
  i944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.z)
  i944.separateAxes = !!i945[4]
  i944.range = new pc.Vec2( i945[5], i945[6] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemRotationOverLifetime()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.x)
  i946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.y)
  i946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.z)
  i946.separateAxes = !!i947[4]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemShape()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.shapeType = i949[1]
  i948.randomDirectionAmount = i949[2]
  i948.sphericalDirectionAmount = i949[3]
  i948.randomPositionAmount = i949[4]
  i948.alignToDirection = !!i949[5]
  i948.radius = i949[6]
  i948.radiusMode = i949[7]
  i948.radiusSpread = i949[8]
  i948.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[9], i948.radiusSpeed)
  i948.radiusThickness = i949[10]
  i948.angle = i949[11]
  i948.length = i949[12]
  i948.boxThickness = new pc.Vec3( i949[13], i949[14], i949[15] )
  i948.meshShapeType = i949[16]
  request.r(i949[17], i949[18], 0, i948, 'mesh')
  request.r(i949[19], i949[20], 0, i948, 'meshRenderer')
  request.r(i949[21], i949[22], 0, i948, 'skinnedMeshRenderer')
  i948.useMeshMaterialIndex = !!i949[23]
  i948.meshMaterialIndex = i949[24]
  i948.useMeshColors = !!i949[25]
  i948.normalOffset = i949[26]
  i948.arc = i949[27]
  i948.arcMode = i949[28]
  i948.arcSpread = i949[29]
  i948.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[30], i948.arcSpeed)
  i948.donutRadius = i949[31]
  i948.position = new pc.Vec3( i949[32], i949[33], i949[34] )
  i948.rotation = new pc.Vec3( i949[35], i949[36], i949[37] )
  i948.scale = new pc.Vec3( i949[38], i949[39], i949[40] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemSizeBySpeed()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  i950.range = new pc.Vec2( i951[5], i951[6] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemSizeOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.separateAxes = !!i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.mode = i955[1]
  i954.animation = i955[2]
  i954.numTilesX = i955[3]
  i954.numTilesY = i955[4]
  i954.useRandomRow = !!i955[5]
  i954.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[6], i954.frameOverTime)
  i954.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[7], i954.startFrame)
  i954.cycleCount = i955[8]
  i954.rowIndex = i955[9]
  i954.flipU = i955[10]
  i954.flipV = i955[11]
  i954.spriteCount = i955[12]
  var i957 = i955[13]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sprites = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[4], i960.radial)
  i960.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[5], i960.speedModifier)
  i960.space = i961[6]
  i960.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[7], i960.orbitalX)
  i960.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[8], i960.orbitalY)
  i960.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[9], i960.orbitalZ)
  i960.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[10], i960.orbitalOffsetX)
  i960.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[11], i960.orbitalOffsetY)
  i960.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[12], i960.orbitalOffsetZ)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemNoise()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.separateAxes = !!i963[1]
  i962.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.strengthX)
  i962.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.strengthY)
  i962.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[4], i962.strengthZ)
  i962.frequency = i963[5]
  i962.damping = !!i963[6]
  i962.octaveCount = i963[7]
  i962.octaveMultiplier = i963[8]
  i962.octaveScale = i963[9]
  i962.quality = i963[10]
  i962.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[11], i962.scrollSpeed)
  i962.scrollSpeedMultiplier = i963[12]
  i962.remapEnabled = !!i963[13]
  i962.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[14], i962.remapX)
  i962.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[15], i962.remapY)
  i962.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[16], i962.remapZ)
  i962.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[17], i962.positionAmount)
  i962.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[18], i962.rotationAmount)
  i962.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[19], i962.sizeAmount)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemInheritVelocity()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.mode = i965[1]
  i964.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.curve)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemForceOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.space = i967[4]
  i966.randomized = !!i967[5]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[1], i968.limit)
  i968.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.limitX)
  i968.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.limitY)
  i968.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[4], i968.limitZ)
  i968.dampen = i969[5]
  i968.separateAxes = !!i969[6]
  i968.space = i969[7]
  i968.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[8], i968.drag)
  i968.multiplyDragByParticleSize = !!i969[9]
  i968.multiplyDragByParticleVelocity = !!i969[10]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'mesh')
  i970.meshCount = i971[2]
  i970.activeVertexStreamsCount = i971[3]
  i970.alignment = i971[4]
  i970.renderMode = i971[5]
  i970.sortMode = i971[6]
  i970.lengthScale = i971[7]
  i970.velocityScale = i971[8]
  i970.cameraVelocityScale = i971[9]
  i970.normalDirection = i971[10]
  i970.sortingFudge = i971[11]
  i970.minParticleSize = i971[12]
  i970.maxParticleSize = i971[13]
  i970.pivot = new pc.Vec3( i971[14], i971[15], i971[16] )
  request.r(i971[17], i971[18], 0, i970, 'trailMaterial')
  i970.applyActiveColorSpace = !!i971[19]
  i970.enabled = !!i971[20]
  request.r(i971[21], i971[22], 0, i970, 'sharedMaterial')
  var i973 = i971[23]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i970.sharedMaterials = i972
  i970.receiveShadows = !!i971[24]
  i970.shadowCastingMode = i971[25]
  i970.sortingLayerID = i971[26]
  i970.sortingOrder = i971[27]
  i970.lightmapIndex = i971[28]
  i970.lightmapSceneIndex = i971[29]
  i970.lightmapScaleOffset = new pc.Vec4( i971[30], i971[31], i971[32], i971[33] )
  i970.lightProbeUsage = i971[34]
  i970.reflectionProbeUsage = i971[35]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i975 = data
  i974.center = new pc.Vec3( i975[0], i975[1], i975[2] )
  i974.radius = i975[3]
  i974.enabled = !!i975[4]
  i974.isTrigger = !!i975[5]
  request.r(i975[6], i975[7], 0, i974, 'material')
  return i974
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i976 = root || request.c( 'CharacterMotor' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'characterInput')
  request.r(i977[2], i977[3], 0, i976, 'cameraYawTransform')
  request.r(i977[4], i977[5], 0, i976, '_arrow')
  i976.moveSpeed = i977[6]
  i976.jumpHeight = i977[7]
  request.r(i977[8], i977[9], 0, i976, 'groundChecker')
  i976.gravity = i977[10]
  i976.enableStepClimb = !!i977[11]
  i976.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i977[12] )
  i976.maxStepHeight = i977[13]
  i976.stepCheckDistance = i977[14]
  i976.stepUpSpeed = i977[15]
  i976.stepUpAcceleration = i977[16]
  i976.minimumStepFacing = i977[17]
  request.r(i977[18], i977[19], 0, i976, 'controller')
  i976.autoRun = !!i977[20]
  return i976
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i978 = root || request.c( 'CharacterRotation' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'motor')
  i978.rotationSpeed = i979[2]
  return i978
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i980 = root || request.c( 'CharacterAnimation' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'animator')
  request.r(i981[2], i981[3], 0, i980, 'motor')
  i980.speedChangeRate = i981[4]
  i980.groundedGraceTime = i981[5]
  return i980
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i982 = root || request.c( 'CharacterCollect' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'motor')
  request.r(i983[2], i983[3], 0, i982, 'avatar')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i985 = data
  i984.mass = i985[0]
  i984.drag = i985[1]
  i984.angularDrag = i985[2]
  i984.useGravity = !!i985[3]
  i984.isKinematic = !!i985[4]
  i984.constraints = i985[5]
  i984.maxAngularVelocity = i985[6]
  i984.collisionDetectionMode = i985[7]
  i984.interpolation = i985[8]
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
  i1030.TutorialTextBeforeHorror = i1031[4]
  i1030.TutorialTextAfterHorror = i1031[5]
  i1030.TutorialTextAfterSecondHorror = i1031[6]
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

Deserializers["WorldController"] = function (request, data, root) {
  var i1040 = root || request.c( 'WorldController' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'worldCamera')
  request.r(i1041[2], i1041[3], 0, i1040, 'directionalLight')
  request.r(i1041[4], i1041[5], 0, i1040, 'tutorialText')
  i1040.cameraBackgroundColor = new pc.Color(i1041[6], i1041[7], i1041[8], i1041[9])
  i1040.enableFog = !!i1041[10]
  i1040.fogColor = new pc.Color(i1041[11], i1041[12], i1041[13], i1041[14])
  i1040.horrorCameraColor = new pc.Color(i1041[15], i1041[16], i1041[17], i1041[18])
  i1040.horrorFogColor = new pc.Color(i1041[19], i1041[20], i1041[21], i1041[22])
  i1040.horrorDirectionalLightColor = new pc.Color(i1041[23], i1041[24], i1041[25], i1041[26])
  request.r(i1041[27], i1041[28], 0, i1040, 'horrorMusic')
  i1040.horrorColorFadeDuration = i1041[29]
  i1040.horrorMusicFadeDuration = i1041[30]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1043 = data
  i1042.ambientIntensity = i1043[0]
  i1042.reflectionIntensity = i1043[1]
  i1042.ambientMode = i1043[2]
  i1042.ambientLight = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.ambientSkyColor = new pc.Color(i1043[7], i1043[8], i1043[9], i1043[10])
  i1042.ambientGroundColor = new pc.Color(i1043[11], i1043[12], i1043[13], i1043[14])
  i1042.ambientEquatorColor = new pc.Color(i1043[15], i1043[16], i1043[17], i1043[18])
  i1042.fogColor = new pc.Color(i1043[19], i1043[20], i1043[21], i1043[22])
  i1042.fogEndDistance = i1043[23]
  i1042.fogStartDistance = i1043[24]
  i1042.fogDensity = i1043[25]
  i1042.fog = !!i1043[26]
  request.r(i1043[27], i1043[28], 0, i1042, 'skybox')
  i1042.fogMode = i1043[29]
  var i1045 = i1043[30]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1045[i + 0]) );
  }
  i1042.lightmaps = i1044
  i1042.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1043[31], i1042.lightProbes)
  i1042.lightmapsMode = i1043[32]
  i1042.mixedBakeMode = i1043[33]
  i1042.environmentLightingMode = i1043[34]
  i1042.ambientProbe = new pc.SphericalHarmonicsL2(i1043[35])
  request.r(i1043[36], i1043[37], 0, i1042, 'customReflection')
  request.r(i1043[38], i1043[39], 0, i1042, 'defaultReflection')
  i1042.defaultReflectionMode = i1043[40]
  i1042.defaultReflectionResolution = i1043[41]
  i1042.sunLightObjectId = i1043[42]
  i1042.pixelLightCount = i1043[43]
  i1042.defaultReflectionHDR = !!i1043[44]
  i1042.hasLightDataAsset = !!i1043[45]
  i1042.hasManualGenerate = !!i1043[46]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'lightmapColor')
  request.r(i1049[2], i1049[3], 0, i1048, 'lightmapDirection')
  request.r(i1049[4], i1049[5], 0, i1048, 'shadowMask')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1050 = root || new UnityEngine.LightProbes()
  var i1051 = data
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.bounciness = i1059[1]
  i1058.dynamicFriction = i1059[2]
  i1058.staticFriction = i1059[3]
  i1058.frictionCombine = i1059[4]
  i1058.bounceCombine = i1059[5]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1063[i + 0]));
  }
  i1060.ShaderCompilationErrors = i1062
  i1060.name = i1061[1]
  i1060.guid = i1061[2]
  var i1065 = i1061[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.shaderDefinedKeywords = i1064
  var i1067 = i1061[4]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1067[i + 0]) );
  }
  i1060.passes = i1066
  var i1069 = i1061[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1069[i + 0]) );
  }
  i1060.usePasses = i1068
  var i1071 = i1061[6]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1071[i + 0]) );
  }
  i1060.defaultParameterValues = i1070
  request.r(i1061[7], i1061[8], 0, i1060, 'unityFallbackShader')
  i1060.readDepth = !!i1061[9]
  i1060.hasDepthOnlyPass = !!i1061[10]
  i1060.isCreatedByShaderGraph = !!i1061[11]
  i1060.disableBatching = !!i1061[12]
  i1060.compiled = !!i1061[13]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1075 = data
  i1074.shaderName = i1075[0]
  i1074.errorMessage = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1080 = root || new pc.UnityShaderPass()
  var i1081 = data
  i1080.id = i1081[0]
  i1080.subShaderIndex = i1081[1]
  i1080.name = i1081[2]
  i1080.passType = i1081[3]
  i1080.grabPassTextureName = i1081[4]
  i1080.usePass = !!i1081[5]
  i1080.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[6], i1080.zTest)
  i1080.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[7], i1080.zWrite)
  i1080.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[8], i1080.culling)
  i1080.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[9], i1080.blending)
  i1080.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[10], i1080.alphaBlending)
  i1080.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[11], i1080.colorWriteMask)
  i1080.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[12], i1080.offsetUnits)
  i1080.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[13], i1080.offsetFactor)
  i1080.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[14], i1080.stencilRef)
  i1080.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[15], i1080.stencilReadMask)
  i1080.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[16], i1080.stencilWriteMask)
  i1080.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[17], i1080.stencilOp)
  i1080.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[18], i1080.stencilOpFront)
  i1080.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[19], i1080.stencilOpBack)
  var i1083 = i1081[20]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1083[i + 0]) );
  }
  i1080.tags = i1082
  var i1085 = i1081[21]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.passDefinedKeywords = i1084
  var i1087 = i1081[22]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1087[i + 0]) );
  }
  i1080.passDefinedKeywordGroups = i1086
  var i1089 = i1081[23]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1080.variants = i1088
  var i1091 = i1081[24]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1091[i + 0]) );
  }
  i1080.excludedVariants = i1090
  i1080.hasDepthReader = !!i1081[25]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1093 = data
  i1092.val = i1093[0]
  i1092.name = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1095 = data
  i1094.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.src)
  i1094.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.dst)
  i1094.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.op)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1097 = data
  i1096.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[0], i1096.pass)
  i1096.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[1], i1096.fail)
  i1096.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[2], i1096.zFail)
  i1096.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[3], i1096.comp)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.value = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1105 = data
  var i1107 = i1105[0]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1104.keywords = i1106
  i1104.hasDiscard = !!i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1111 = data
  i1110.passId = i1111[0]
  i1110.subShaderIndex = i1111[1]
  var i1113 = i1111[2]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.vertexProgram = i1111[3]
  i1110.fragmentProgram = i1111[4]
  i1110.exportedForWebGl2 = !!i1111[5]
  i1110.readDepth = !!i1111[6]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'shader')
  i1116.pass = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.type = i1121[1]
  i1120.value = new pc.Vec4( i1121[2], i1121[3], i1121[4], i1121[5] )
  i1120.textureValue = i1121[6]
  i1120.shaderPropertyFlag = i1121[7]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1123 = data
  i1122.name = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'texture')
  i1122.aabb = i1123[3]
  i1122.vertices = i1123[4]
  i1122.triangles = i1123[5]
  i1122.textureRect = UnityEngine.Rect.MinMaxRect(i1123[6], i1123[7], i1123[8], i1123[9])
  i1122.packedRect = UnityEngine.Rect.MinMaxRect(i1123[10], i1123[11], i1123[12], i1123[13])
  i1122.border = new pc.Vec4( i1123[14], i1123[15], i1123[16], i1123[17] )
  i1122.transparency = i1123[18]
  i1122.bounds = i1123[19]
  i1122.pixelsPerUnit = i1123[20]
  i1122.textureWidth = i1123[21]
  i1122.textureHeight = i1123[22]
  i1122.nativeSize = new pc.Vec2( i1123[23], i1123[24] )
  i1122.pivot = new pc.Vec2( i1123[25], i1123[26] )
  i1122.textureRectOffset = new pc.Vec2( i1123[27], i1123[28] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1125 = data
  i1124.name = i1125[0]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.wrapMode = i1127[1]
  i1126.isLooping = !!i1127[2]
  i1126.length = i1127[3]
  var i1129 = i1127[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1129[i + 0]) );
  }
  i1126.curves = i1128
  var i1131 = i1127[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1131[i + 0]) );
  }
  i1126.events = i1130
  i1126.halfPrecision = !!i1127[6]
  i1126._frameRate = i1127[7]
  i1126.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1127[8], i1126.localBounds)
  i1126.hasMuscleCurves = !!i1127[9]
  var i1133 = i1127[10]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1126.clipMuscleConstant = i1132
  i1126.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1127[11], i1126.clipBindingConstant)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1137 = data
  i1136.path = i1137[0]
  i1136.hash = i1137[1]
  i1136.componentType = i1137[2]
  i1136.property = i1137[3]
  i1136.keys = i1137[4]
  var i1139 = i1137[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1139[i + 0]) );
  }
  i1136.objectReferenceKeys = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1143 = data
  i1142.time = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'value')
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1147 = data
  i1146.functionName = i1147[0]
  i1146.floatParameter = i1147[1]
  i1146.intParameter = i1147[2]
  i1146.stringParameter = i1147[3]
  request.r(i1147[4], i1147[5], 0, i1146, 'objectReferenceParameter')
  i1146.time = i1147[6]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1149 = data
  i1148.center = new pc.Vec3( i1149[0], i1149[1], i1149[2] )
  i1148.extends = new pc.Vec3( i1149[3], i1149[4], i1149[5] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.genericBindings = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1152.pptrCurveMapping = i1156
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1159 = data
  i1158.name = i1159[0]
  var i1161 = i1159[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1161[i + 0]) );
  }
  i1158.layers = i1160
  var i1163 = i1159[2]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1163[i + 0]) );
  }
  i1158.parameters = i1162
  i1158.animationClips = i1159[3]
  i1158.avatarUnsupported = i1159[4]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.defaultWeight = i1167[1]
  i1166.blendingMode = i1167[2]
  i1166.avatarMask = i1167[3]
  i1166.syncedLayerIndex = i1167[4]
  i1166.syncedLayerAffectsTiming = !!i1167[5]
  i1166.syncedLayers = i1167[6]
  i1166.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1167[7], i1166.stateMachine)
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.name = i1169[1]
  i1168.path = i1169[2]
  var i1171 = i1169[3]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1171[i + 0]) );
  }
  i1168.states = i1170
  var i1173 = i1169[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1173[i + 0]) );
  }
  i1168.machines = i1172
  var i1175 = i1169[5]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1175[i + 0]) );
  }
  i1168.entryStateTransitions = i1174
  var i1177 = i1169[6]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1177[i + 0]) );
  }
  i1168.exitStateTransitions = i1176
  var i1179 = i1169[7]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1179[i + 0]) );
  }
  i1168.anyStateTransitions = i1178
  i1168.defaultStateId = i1169[8]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  i1182.cycleOffset = i1183[2]
  i1182.cycleOffsetParameter = i1183[3]
  i1182.cycleOffsetParameterActive = !!i1183[4]
  i1182.mirror = !!i1183[5]
  i1182.mirrorParameter = i1183[6]
  i1182.mirrorParameterActive = !!i1183[7]
  i1182.motionId = i1183[8]
  i1182.nameHash = i1183[9]
  i1182.fullPathHash = i1183[10]
  i1182.speed = i1183[11]
  i1182.speedParameter = i1183[12]
  i1182.speedParameterActive = !!i1183[13]
  i1182.tag = i1183[14]
  i1182.tagHash = i1183[15]
  i1182.writeDefaultValues = !!i1183[16]
  var i1185 = i1183[17]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 2, i1184, '')
  }
  i1182.behaviours = i1184
  var i1187 = i1183[18]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1187[i + 0]) );
  }
  i1182.transitions = i1186
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1193 = data
  i1192.fullPath = i1193[0]
  i1192.canTransitionToSelf = !!i1193[1]
  i1192.duration = i1193[2]
  i1192.exitTime = i1193[3]
  i1192.hasExitTime = !!i1193[4]
  i1192.hasFixedDuration = !!i1193[5]
  i1192.interruptionSource = i1193[6]
  i1192.offset = i1193[7]
  i1192.orderedInterruption = !!i1193[8]
  i1192.destinationStateId = i1193[9]
  i1192.isExit = !!i1193[10]
  i1192.mute = !!i1193[11]
  i1192.solo = !!i1193[12]
  var i1195 = i1193[13]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1195[i + 0]) );
  }
  i1192.conditions = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1199 = data
  i1198.mode = i1199[0]
  i1198.parameter = i1199[1]
  i1198.threshold = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1205 = data
  i1204.destinationStateId = i1205[0]
  i1204.isExit = !!i1205[1]
  i1204.mute = !!i1205[2]
  i1204.solo = !!i1205[3]
  var i1207 = i1205[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1211 = data
  i1210.defaultBool = !!i1211[0]
  i1210.defaultFloat = i1211[1]
  i1210.defaultInt = i1211[2]
  i1210.name = i1211[3]
  i1210.nameHash = i1211[4]
  i1210.type = i1211[5]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1213 = data
  i1212.name = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, '_runtimeAnimatorController')
  var i1215 = i1213[3]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1212._originalAnimationClips = i1214
  var i1217 = i1213[4]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1212._overrideAnimationClips = i1216
  var i1219 = i1213[5]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 2, i1218, '')
  }
  i1212._animationClips = i1218
  var i1221 = i1213[6]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('UnityEngine.AnimationClipPair', i1221[i + 0]) );
  }
  i1212._animationClipPairs = i1220
  return i1212
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'originalClip')
  request.r(i1227[2], i1227[3], 0, i1226, 'overrideClip')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1229 = data
  i1228.name = i1229[0]
  i1228.bytes64 = i1229[1]
  i1228.data = i1229[2]
  return i1228
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1231 = data
  i1230.normalStyle = i1231[0]
  i1230.normalSpacingOffset = i1231[1]
  i1230.boldStyle = i1231[2]
  i1230.boldSpacing = i1231[3]
  i1230.italicStyle = i1231[4]
  i1230.tabSize = i1231[5]
  request.r(i1231[6], i1231[7], 0, i1230, 'atlas')
  i1230.m_SourceFontFileGUID = i1231[8]
  i1230.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1231[9], i1230.m_CreationSettings)
  request.r(i1231[10], i1231[11], 0, i1230, 'm_SourceFontFile')
  i1230.m_SourceFontFilePath = i1231[12]
  i1230.m_AtlasPopulationMode = i1231[13]
  i1230.InternalDynamicOS = !!i1231[14]
  var i1233 = i1231[15]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('UnityEngine.TextCore.Glyph', i1233[i + 0]));
  }
  i1230.m_GlyphTable = i1232
  var i1235 = i1231[16]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.TMP_Character', i1235[i + 0]));
  }
  i1230.m_CharacterTable = i1234
  var i1237 = i1231[17]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 2, i1236, '')
  }
  i1230.m_AtlasTextures = i1236
  i1230.m_AtlasTextureIndex = i1231[18]
  i1230.m_IsMultiAtlasTexturesEnabled = !!i1231[19]
  i1230.m_GetFontFeatures = !!i1231[20]
  i1230.m_ClearDynamicDataOnBuild = !!i1231[21]
  i1230.m_AtlasWidth = i1231[22]
  i1230.m_AtlasHeight = i1231[23]
  i1230.m_AtlasPadding = i1231[24]
  i1230.m_AtlasRenderMode = i1231[25]
  var i1239 = i1231[26]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('UnityEngine.TextCore.GlyphRect', i1239[i + 0]));
  }
  i1230.m_UsedGlyphRects = i1238
  var i1241 = i1231[27]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('UnityEngine.TextCore.GlyphRect', i1241[i + 0]));
  }
  i1230.m_FreeGlyphRects = i1240
  i1230.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1231[28], i1230.m_FontFeatureTable)
  i1230.m_ShouldReimportFontFeatures = !!i1231[29]
  var i1243 = i1231[30]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1230.m_FallbackFontAssetTable = i1242
  var i1245 = i1231[31]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('TMPro.TMP_FontWeightPair', i1245[i + 0]) );
  }
  i1230.m_FontWeightTable = i1244
  var i1247 = i1231[32]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1230.fontWeights = i1246
  i1230.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1231[33], i1230.m_fontInfo)
  var i1249 = i1231[34]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('TMPro.TMP_Glyph', i1249[i + 0]));
  }
  i1230.m_glyphInfoList = i1248
  i1230.m_KerningTable = request.d('TMPro.KerningTable', i1231[35], i1230.m_KerningTable)
  var i1251 = i1231[36]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1251.length; i += 2) {
  request.r(i1251[i + 0], i1251[i + 1], 1, i1250, '')
  }
  i1230.fallbackFontAssets = i1250
  i1230.m_Version = i1231[37]
  i1230.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1231[38], i1230.m_FaceInfo)
  request.r(i1231[39], i1231[40], 0, i1230, 'm_Material')
  return i1230
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1253 = data
  i1252.sourceFontFileName = i1253[0]
  i1252.sourceFontFileGUID = i1253[1]
  i1252.faceIndex = i1253[2]
  i1252.pointSizeSamplingMode = i1253[3]
  i1252.pointSize = i1253[4]
  i1252.padding = i1253[5]
  i1252.paddingMode = i1253[6]
  i1252.packingMode = i1253[7]
  i1252.atlasWidth = i1253[8]
  i1252.atlasHeight = i1253[9]
  i1252.characterSetSelectionMode = i1253[10]
  i1252.characterSequence = i1253[11]
  i1252.referencedFontAssetGUID = i1253[12]
  i1252.referencedTextAssetGUID = i1253[13]
  i1252.fontStyle = i1253[14]
  i1252.fontStyleModifier = i1253[15]
  i1252.renderMode = i1253[16]
  i1252.includeFontFeatures = !!i1253[17]
  return i1252
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1257 = data
  i1256.m_Index = i1257[0]
  i1256.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1257[1], i1256.m_Metrics)
  i1256.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1257[2], i1256.m_GlyphRect)
  i1256.m_Scale = i1257[3]
  i1256.m_AtlasIndex = i1257[4]
  i1256.m_ClassDefinitionType = i1257[5]
  return i1256
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1259 = data
  i1258.m_Width = i1259[0]
  i1258.m_Height = i1259[1]
  i1258.m_HorizontalBearingX = i1259[2]
  i1258.m_HorizontalBearingY = i1259[3]
  i1258.m_HorizontalAdvance = i1259[4]
  return i1258
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1261 = data
  i1260.m_X = i1261[0]
  i1260.m_Y = i1261[1]
  i1260.m_Width = i1261[2]
  i1260.m_Height = i1261[3]
  return i1260
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_Character' )
  var i1265 = data
  i1264.m_ElementType = i1265[0]
  i1264.m_Unicode = i1265[1]
  i1264.m_GlyphIndex = i1265[2]
  i1264.m_Scale = i1265[3]
  return i1264
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.MultipleSubstitutionRecord', i1273[i + 0]));
  }
  i1270.m_MultipleSubstitutionRecords = i1272
  var i1275 = i1271[1]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.LigatureSubstitutionRecord', i1275[i + 0]));
  }
  i1270.m_LigatureSubstitutionRecords = i1274
  var i1277 = i1271[2]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1277[i + 0]));
  }
  i1270.m_GlyphPairAdjustmentRecords = i1276
  var i1279 = i1271[3]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1279[i + 0]));
  }
  i1270.m_MarkToBaseAdjustmentRecords = i1278
  var i1281 = i1271[4]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1281[i + 0]));
  }
  i1270.m_MarkToMarkAdjustmentRecords = i1280
  return i1270
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1285 = data
  i1284.m_TargetGlyphID = i1285[0]
  i1284.m_SubstituteGlyphIDs = i1285[1]
  return i1284
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1289 = data
  i1288.m_ComponentGlyphIDs = i1289[0]
  i1288.m_LigatureGlyphID = i1289[1]
  return i1288
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1293 = data
  i1292.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1293[0], i1292.m_FirstAdjustmentRecord)
  i1292.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1293[1], i1292.m_SecondAdjustmentRecord)
  i1292.m_FeatureLookupFlags = i1293[2]
  return i1292
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1297 = data
  i1296.m_BaseGlyphID = i1297[0]
  i1296.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1297[1], i1296.m_BaseGlyphAnchorPoint)
  i1296.m_MarkGlyphID = i1297[2]
  i1296.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1297[3], i1296.m_MarkPositionAdjustment)
  return i1296
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1301 = data
  i1300.m_BaseMarkGlyphID = i1301[0]
  i1300.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1301[1], i1300.m_BaseMarkGlyphAnchorPoint)
  i1300.m_CombiningMarkGlyphID = i1301[2]
  i1300.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1301[3], i1300.m_CombiningMarkPositionAdjustment)
  return i1300
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'regularTypeface')
  request.r(i1307[2], i1307[3], 0, i1306, 'italicTypeface')
  return i1306
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1309 = data
  i1308.Name = i1309[0]
  i1308.PointSize = i1309[1]
  i1308.Scale = i1309[2]
  i1308.CharacterCount = i1309[3]
  i1308.LineHeight = i1309[4]
  i1308.Baseline = i1309[5]
  i1308.Ascender = i1309[6]
  i1308.CapHeight = i1309[7]
  i1308.Descender = i1309[8]
  i1308.CenterLine = i1309[9]
  i1308.SuperscriptOffset = i1309[10]
  i1308.SubscriptOffset = i1309[11]
  i1308.SubSize = i1309[12]
  i1308.Underline = i1309[13]
  i1308.UnderlineThickness = i1309[14]
  i1308.strikethrough = i1309[15]
  i1308.strikethroughThickness = i1309[16]
  i1308.TabWidth = i1309[17]
  i1308.Padding = i1309[18]
  i1308.AtlasWidth = i1309[19]
  i1308.AtlasHeight = i1309[20]
  return i1308
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1313 = data
  i1312.id = i1313[0]
  i1312.x = i1313[1]
  i1312.y = i1313[2]
  i1312.width = i1313[3]
  i1312.height = i1313[4]
  i1312.xOffset = i1313[5]
  i1312.yOffset = i1313[6]
  i1312.xAdvance = i1313[7]
  i1312.scale = i1313[8]
  return i1312
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.KerningTable' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.KerningPair', i1317[i + 0]));
  }
  i1314.kerningPairs = i1316
  return i1314
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.KerningPair' )
  var i1321 = data
  i1320.xOffset = i1321[0]
  i1320.m_FirstGlyph = i1321[1]
  i1320.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1321[2], i1320.m_FirstGlyphAdjustments)
  i1320.m_SecondGlyph = i1321[3]
  i1320.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1321[4], i1320.m_SecondGlyphAdjustments)
  i1320.m_IgnoreSpacingAdjustments = !!i1321[5]
  return i1320
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1323 = data
  i1322.m_FaceIndex = i1323[0]
  i1322.m_FamilyName = i1323[1]
  i1322.m_StyleName = i1323[2]
  i1322.m_PointSize = i1323[3]
  i1322.m_Scale = i1323[4]
  i1322.m_UnitsPerEM = i1323[5]
  i1322.m_LineHeight = i1323[6]
  i1322.m_AscentLine = i1323[7]
  i1322.m_CapLine = i1323[8]
  i1322.m_MeanLine = i1323[9]
  i1322.m_Baseline = i1323[10]
  i1322.m_DescentLine = i1323[11]
  i1322.m_SuperscriptOffset = i1323[12]
  i1322.m_SuperscriptSize = i1323[13]
  i1322.m_SubscriptOffset = i1323[14]
  i1322.m_SubscriptSize = i1323[15]
  i1322.m_UnderlineOffset = i1323[16]
  i1322.m_UnderlineThickness = i1323[17]
  i1322.m_StrikethroughOffset = i1323[18]
  i1322.m_StrikethroughThickness = i1323[19]
  i1322.m_TabWidth = i1323[20]
  return i1322
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1325 = data
  i1324.useSafeMode = !!i1325[0]
  i1324.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1325[1], i1324.safeModeOptions)
  i1324.timeScale = i1325[2]
  i1324.unscaledTimeScale = i1325[3]
  i1324.useSmoothDeltaTime = !!i1325[4]
  i1324.maxSmoothUnscaledTime = i1325[5]
  i1324.rewindCallbackMode = i1325[6]
  i1324.showUnityEditorReport = !!i1325[7]
  i1324.logBehaviour = i1325[8]
  i1324.drawGizmos = !!i1325[9]
  i1324.defaultRecyclable = !!i1325[10]
  i1324.defaultAutoPlay = i1325[11]
  i1324.defaultUpdateType = i1325[12]
  i1324.defaultTimeScaleIndependent = !!i1325[13]
  i1324.defaultEaseType = i1325[14]
  i1324.defaultEaseOvershootOrAmplitude = i1325[15]
  i1324.defaultEasePeriod = i1325[16]
  i1324.defaultAutoKill = !!i1325[17]
  i1324.defaultLoopType = i1325[18]
  i1324.debugMode = !!i1325[19]
  i1324.debugStoreTargetId = !!i1325[20]
  i1324.showPreviewPanel = !!i1325[21]
  i1324.storeSettingsLocation = i1325[22]
  i1324.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1325[23], i1324.modules)
  i1324.createASMDEF = !!i1325[24]
  i1324.showPlayingTweens = !!i1325[25]
  i1324.showPausedTweens = !!i1325[26]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1327 = data
  i1326.logBehaviour = i1327[0]
  i1326.nestedTweenFailureBehaviour = i1327[1]
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1329 = data
  i1328.showPanel = !!i1329[0]
  i1328.audioEnabled = !!i1329[1]
  i1328.physicsEnabled = !!i1329[2]
  i1328.physics2DEnabled = !!i1329[3]
  i1328.spriteEnabled = !!i1329[4]
  i1328.uiEnabled = !!i1329[5]
  i1328.textMeshProEnabled = !!i1329[6]
  i1328.tk2DEnabled = !!i1329[7]
  i1328.deAudioEnabled = !!i1329[8]
  i1328.deUnityExtendedEnabled = !!i1329[9]
  i1328.epoOutlineEnabled = !!i1329[10]
  return i1328
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_Settings' )
  var i1331 = data
  i1330.assetVersion = i1331[0]
  i1330.m_TextWrappingMode = i1331[1]
  i1330.m_enableKerning = !!i1331[2]
  var i1333 = i1331[3]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(i1333[i + 0]);
  }
  i1330.m_ActiveFontFeatures = i1332
  i1330.m_enableExtraPadding = !!i1331[4]
  i1330.m_enableTintAllSprites = !!i1331[5]
  i1330.m_enableParseEscapeCharacters = !!i1331[6]
  i1330.m_EnableRaycastTarget = !!i1331[7]
  i1330.m_GetFontFeaturesAtRuntime = !!i1331[8]
  i1330.m_missingGlyphCharacter = i1331[9]
  i1330.m_ClearDynamicDataOnBuild = !!i1331[10]
  i1330.m_warningsDisabled = !!i1331[11]
  request.r(i1331[12], i1331[13], 0, i1330, 'm_defaultFontAsset')
  i1330.m_defaultFontAssetPath = i1331[14]
  i1330.m_defaultFontSize = i1331[15]
  i1330.m_defaultAutoSizeMinRatio = i1331[16]
  i1330.m_defaultAutoSizeMaxRatio = i1331[17]
  i1330.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1331[18], i1331[19] )
  i1330.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1331[20], i1331[21] )
  i1330.m_autoSizeTextContainer = !!i1331[22]
  i1330.m_IsTextObjectScaleStatic = !!i1331[23]
  var i1335 = i1331[24]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 1, i1334, '')
  }
  i1330.m_fallbackFontAssets = i1334
  i1330.m_matchMaterialPreset = !!i1331[25]
  i1330.m_HideSubTextObjects = !!i1331[26]
  request.r(i1331[27], i1331[28], 0, i1330, 'm_defaultSpriteAsset')
  i1330.m_defaultSpriteAssetPath = i1331[29]
  i1330.m_enableEmojiSupport = !!i1331[30]
  i1330.m_MissingCharacterSpriteUnicode = i1331[31]
  var i1337 = i1331[32]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1330.m_EmojiFallbackTextAssets = i1336
  i1330.m_defaultColorGradientPresetsPath = i1331[33]
  request.r(i1331[34], i1331[35], 0, i1330, 'm_defaultStyleSheet')
  i1330.m_StyleSheetsResourcePath = i1331[36]
  request.r(i1331[37], i1331[38], 0, i1330, 'm_leadingCharacters')
  request.r(i1331[39], i1331[40], 0, i1330, 'm_followingCharacters')
  i1330.m_UseModernHangulLineBreakingRules = !!i1331[41]
  return i1330
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'spriteSheet')
  var i1343 = i1341[2]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.TMP_Sprite', i1343[i + 0]));
  }
  i1340.spriteInfoList = i1342
  var i1345 = i1341[3]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1340.fallbackSpriteAssets = i1344
  var i1347 = i1341[4]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.TMP_SpriteCharacter', i1347[i + 0]));
  }
  i1340.m_SpriteCharacterTable = i1346
  var i1349 = i1341[5]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.TMP_SpriteGlyph', i1349[i + 0]));
  }
  i1340.m_GlyphTable = i1348
  i1340.m_Version = i1341[6]
  i1340.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1341[7], i1340.m_FaceInfo)
  request.r(i1341[8], i1341[9], 0, i1340, 'm_Material')
  return i1340
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.hashCode = i1353[1]
  i1352.unicode = i1353[2]
  i1352.pivot = new pc.Vec2( i1353[3], i1353[4] )
  request.r(i1353[5], i1353[6], 0, i1352, 'sprite')
  i1352.id = i1353[7]
  i1352.x = i1353[8]
  i1352.y = i1353[9]
  i1352.width = i1353[10]
  i1352.height = i1353[11]
  i1352.xOffset = i1353[12]
  i1352.yOffset = i1353[13]
  i1352.xAdvance = i1353[14]
  i1352.scale = i1353[15]
  return i1352
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1359 = data
  i1358.m_Name = i1359[0]
  i1358.m_ElementType = i1359[1]
  i1358.m_Unicode = i1359[2]
  i1358.m_GlyphIndex = i1359[3]
  i1358.m_Scale = i1359[4]
  return i1358
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'sprite')
  i1362.m_Index = i1363[2]
  i1362.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1363[3], i1362.m_Metrics)
  i1362.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1363[4], i1362.m_GlyphRect)
  i1362.m_Scale = i1363[5]
  i1362.m_AtlasIndex = i1363[6]
  i1362.m_ClassDefinitionType = i1363[7]
  return i1362
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1365 = data
  var i1367 = i1365[0]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('TMPro.TMP_Style', i1367[i + 0]));
  }
  i1364.m_StyleList = i1366
  return i1364
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_Style' )
  var i1371 = data
  i1370.m_Name = i1371[0]
  i1370.m_HashCode = i1371[1]
  i1370.m_OpeningDefinition = i1371[2]
  i1370.m_ClosingDefinition = i1371[3]
  i1370.m_OpeningTagArray = i1371[4]
  i1370.m_ClosingTagArray = i1371[5]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1373 = data
  var i1375 = i1373[0]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1375[i + 0]) );
  }
  i1372.files = i1374
  i1372.componentToPrefabIds = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1379 = data
  i1378.path = i1379[0]
  request.r(i1379[1], i1379[2], 0, i1378, 'unityObject')
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1381 = data
  var i1383 = i1381[0]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1383[i + 0]) );
  }
  i1380.scriptsExecutionOrder = i1382
  var i1385 = i1381[1]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1385[i + 0]) );
  }
  i1380.sortingLayers = i1384
  var i1387 = i1381[2]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1387[i + 0]) );
  }
  i1380.cullingLayers = i1386
  i1380.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1381[3], i1380.timeSettings)
  i1380.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1381[4], i1380.physicsSettings)
  i1380.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1381[5], i1380.physics2DSettings)
  i1380.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1381[6], i1380.qualitySettings)
  i1380.enableRealtimeShadows = !!i1381[7]
  i1380.enableAutoInstancing = !!i1381[8]
  i1380.enableStaticBatching = !!i1381[9]
  i1380.enableDynamicBatching = !!i1381[10]
  i1380.usePreservativeDynamicBatching = !!i1381[11]
  i1380.lightmapEncodingQuality = i1381[12]
  i1380.desiredColorSpace = i1381[13]
  var i1389 = i1381[14]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( i1389[i + 0] );
  }
  i1380.allTags = i1388
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1393 = data
  i1392.name = i1393[0]
  i1392.value = i1393[1]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1397 = data
  i1396.id = i1397[0]
  i1396.name = i1397[1]
  i1396.value = i1397[2]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1401 = data
  i1400.id = i1401[0]
  i1400.name = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1403 = data
  i1402.fixedDeltaTime = i1403[0]
  i1402.maximumDeltaTime = i1403[1]
  i1402.timeScale = i1403[2]
  i1402.maximumParticleTimestep = i1403[3]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1405 = data
  i1404.gravity = new pc.Vec3( i1405[0], i1405[1], i1405[2] )
  i1404.defaultSolverIterations = i1405[3]
  i1404.bounceThreshold = i1405[4]
  i1404.autoSyncTransforms = !!i1405[5]
  i1404.autoSimulation = !!i1405[6]
  var i1407 = i1405[7]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1407[i + 0]) );
  }
  i1404.collisionMatrix = i1406
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1411 = data
  i1410.enabled = !!i1411[0]
  i1410.layerId = i1411[1]
  i1410.otherLayerId = i1411[2]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'material')
  i1412.gravity = new pc.Vec2( i1413[2], i1413[3] )
  i1412.positionIterations = i1413[4]
  i1412.velocityIterations = i1413[5]
  i1412.velocityThreshold = i1413[6]
  i1412.maxLinearCorrection = i1413[7]
  i1412.maxAngularCorrection = i1413[8]
  i1412.maxTranslationSpeed = i1413[9]
  i1412.maxRotationSpeed = i1413[10]
  i1412.baumgarteScale = i1413[11]
  i1412.baumgarteTOIScale = i1413[12]
  i1412.timeToSleep = i1413[13]
  i1412.linearSleepTolerance = i1413[14]
  i1412.angularSleepTolerance = i1413[15]
  i1412.defaultContactOffset = i1413[16]
  i1412.autoSimulation = !!i1413[17]
  i1412.queriesHitTriggers = !!i1413[18]
  i1412.queriesStartInColliders = !!i1413[19]
  i1412.callbacksOnDisable = !!i1413[20]
  i1412.reuseCollisionCallbacks = !!i1413[21]
  i1412.autoSyncTransforms = !!i1413[22]
  var i1415 = i1413[23]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1415[i + 0]) );
  }
  i1412.collisionMatrix = i1414
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1419 = data
  i1418.enabled = !!i1419[0]
  i1418.layerId = i1419[1]
  i1418.otherLayerId = i1419[2]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1421 = data
  var i1423 = i1421[0]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1423[i + 0]) );
  }
  i1420.qualityLevels = i1422
  var i1425 = i1421[1]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( i1425[i + 0] );
  }
  i1420.names = i1424
  i1420.shadows = i1421[2]
  i1420.anisotropicFiltering = i1421[3]
  i1420.antiAliasing = i1421[4]
  i1420.lodBias = i1421[5]
  i1420.shadowCascades = i1421[6]
  i1420.shadowDistance = i1421[7]
  i1420.shadowmaskMode = i1421[8]
  i1420.shadowProjection = i1421[9]
  i1420.shadowResolution = i1421[10]
  i1420.softParticles = !!i1421[11]
  i1420.softVegetation = !!i1421[12]
  i1420.activeColorSpace = i1421[13]
  i1420.desiredColorSpace = i1421[14]
  i1420.masterTextureLimit = i1421[15]
  i1420.maxQueuedFrames = i1421[16]
  i1420.particleRaycastBudget = i1421[17]
  i1420.pixelLightCount = i1421[18]
  i1420.realtimeReflectionProbes = !!i1421[19]
  i1420.shadowCascade2Split = i1421[20]
  i1420.shadowCascade4Split = new pc.Vec3( i1421[21], i1421[22], i1421[23] )
  i1420.streamingMipmapsActive = !!i1421[24]
  i1420.vSyncCount = i1421[25]
  i1420.asyncUploadBufferSize = i1421[26]
  i1420.asyncUploadTimeSlice = i1421[27]
  i1420.billboardsFaceCameraPosition = !!i1421[28]
  i1420.shadowNearPlaneOffset = i1421[29]
  i1420.streamingMipmapsMemoryBudget = i1421[30]
  i1420.maximumLODLevel = i1421[31]
  i1420.streamingMipmapsAddAllCameras = !!i1421[32]
  i1420.streamingMipmapsMaxLevelReduction = i1421[33]
  i1420.streamingMipmapsRenderersPerFrame = i1421[34]
  i1420.resolutionScalingFixedDPIFactor = i1421[35]
  i1420.streamingMipmapsMaxFileIORequests = i1421[36]
  i1420.currentQualityLevel = i1421[37]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1429 = data
  i1428.name = i1429[0]
  var i1431 = i1429[1]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1431[i + 0]) );
  }
  i1428.tos = i1430
  var i1433 = i1429[2]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( i1433[i + 0] );
  }
  i1428.constant = i1432
  i1428.isValid = !!i1429[3]
  i1428.isHuman = !!i1429[4]
  i1428.hasRootMotion = !!i1429[5]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1437 = data
  i1436.hash = i1437[0]
  i1436.path = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1441 = data
  i1440.weight = i1441[0]
  i1440.vertices = i1441[1]
  i1440.normals = i1441[2]
  i1440.tangents = i1441[3]
  return i1440
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1443 = data
  i1442.m_GlyphIndex = i1443[0]
  i1442.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1443[1], i1442.m_GlyphValueRecord)
  return i1442
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1445 = data
  i1444.m_XCoordinate = i1445[0]
  i1444.m_YCoordinate = i1445[1]
  return i1444
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1447 = data
  i1446.m_XPositionAdjustment = i1447[0]
  i1446.m_YPositionAdjustment = i1447[1]
  return i1446
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1449 = data
  i1448.xPlacement = i1449[0]
  i1448.yPlacement = i1449[1]
  i1448.xAdvance = i1449[2]
  i1448.yAdvance = i1449[3]
  return i1448
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1451 = data
  i1450.m_XPlacement = i1451[0]
  i1450.m_YPlacement = i1451[1]
  i1450.m_XAdvance = i1451[2]
  i1450.m_YAdvance = i1451[3]
  return i1450
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[50],"78":[36],"79":[43],"80":[43],"81":[43],"82":[43],"83":[43],"84":[43],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[36],"100":[5],"101":[102],"103":[102],"20":[19],"104":[40,9],"105":[19],"106":[25,19],"107":[5],"108":[25,19],"109":[19],"110":[19],"111":[5,19],"30":[19,25],"112":[113],"114":[113],"115":[113],"116":[19],"117":[19],"22":[20],"26":[25,19],"118":[19],"21":[20],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"124":[19],"125":[19],"29":[19],"126":[19],"127":[25,19],"128":[19],"129":[19],"130":[19],"131":[19],"132":[25,19],"133":[19],"134":[16],"135":[16],"17":[16],"136":[16],"137":[36],"138":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AnimatorOverrideController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.SphereCollider","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","UnityEngine.PhysicsMaterial","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","WorldController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoJumpObstacle","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/27/2026 01:47:47";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SBFM_V08_TamNTM";

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

Deserializers.buildID = "79f5f188-3c22-4bfa-a087-fc621a4f3051";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

