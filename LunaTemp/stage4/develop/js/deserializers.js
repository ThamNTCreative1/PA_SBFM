var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSpring' )
  var i721 = data
  i720.spring = i721[0]
  i720.damper = i721[1]
  i720.targetPosition = i721[2]
  return i720
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointMotor' )
  var i723 = data
  i722.m_TargetVelocity = i723[0]
  i722.m_Force = i723[1]
  i722.m_FreeSpin = i723[2]
  return i722
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointLimits' )
  var i725 = data
  i724.m_Min = i725[0]
  i724.m_Max = i725[1]
  i724.m_Bounciness = i725[2]
  i724.m_BounceMinVelocity = i725[3]
  i724.m_ContactDistance = i725[4]
  i724.minBounce = i725[5]
  i724.maxBounce = i725[6]
  return i724
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointDrive' )
  var i727 = data
  i726.m_PositionSpring = i727[0]
  i726.m_PositionDamper = i727[1]
  i726.m_MaximumForce = i727[2]
  i726.m_UseAcceleration = i727[3]
  return i726
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i729 = data
  i728.m_Spring = i729[0]
  i728.m_Damper = i729[1]
  return i728
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i731 = data
  i730.m_Limit = i731[0]
  i730.m_Bounciness = i731[1]
  i730.m_ContactDistance = i731[2]
  return i730
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i733 = data
  i732.m_ExtremumSlip = i733[0]
  i732.m_ExtremumValue = i733[1]
  i732.m_AsymptoteSlip = i733[2]
  i732.m_AsymptoteValue = i733[3]
  i732.m_Stiffness = i733[4]
  return i732
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i735 = data
  i734.m_LowerAngle = i735[0]
  i734.m_UpperAngle = i735[1]
  return i734
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i737 = data
  i736.m_MotorSpeed = i737[0]
  i736.m_MaximumMotorTorque = i737[1]
  return i736
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i739 = data
  i738.m_DampingRatio = i739[0]
  i738.m_Frequency = i739[1]
  i738.m_Angle = i739[2]
  return i738
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i741 = data
  i740.m_LowerTranslation = i741[0]
  i740.m_UpperTranslation = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i743 = data
  i742.name = i743[0]
  i742.width = i743[1]
  i742.height = i743[2]
  i742.mipmapCount = i743[3]
  i742.anisoLevel = i743[4]
  i742.filterMode = i743[5]
  i742.hdr = !!i743[6]
  i742.format = i743[7]
  i742.wrapMode = i743[8]
  i742.alphaIsTransparency = !!i743[9]
  i742.alphaSource = i743[10]
  i742.graphicsFormat = i743[11]
  i742.sRGBTexture = !!i743[12]
  i742.desiredColorSpace = i743[13]
  i742.wrapU = i743[14]
  i742.wrapV = i743[15]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i744 = root || new pc.UnityMaterial()
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'shader')
  i744.renderQueue = i745[3]
  i744.enableInstancing = !!i745[4]
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i747[i + 0]) );
  }
  i744.floatParameters = i746
  var i749 = i745[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i749[i + 0]) );
  }
  i744.colorParameters = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i751[i + 0]) );
  }
  i744.vectorParameters = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i753[i + 0]) );
  }
  i744.textureParameters = i752
  var i755 = i745[9]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i755[i + 0]) );
  }
  i744.materialFlags = i754
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Color(i763[1], i763[2], i763[3], i763[4])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Vec4( i767[1], i767[2], i767[3], i767[4] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i775 = data
  i774.name = i775[0]
  i774.enabled = !!i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i777 = data
  i776.name = i777[0]
  i776.halfPrecision = !!i777[1]
  i776.useSimplification = !!i777[2]
  i776.useUInt32IndexFormat = !!i777[3]
  i776.vertexCount = i777[4]
  i776.aabb = i777[5]
  var i779 = i777[6]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( !!i779[i + 0] );
  }
  i776.streams = i778
  i776.vertices = i777[7]
  var i781 = i777[8]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i781[i + 0]) );
  }
  i776.subMeshes = i780
  var i783 = i777[9]
  var i782 = []
  for(var i = 0; i < i783.length; i += 16) {
    i782.push( new pc.Mat4().setData(i783[i + 0], i783[i + 1], i783[i + 2], i783[i + 3],  i783[i + 4], i783[i + 5], i783[i + 6], i783[i + 7],  i783[i + 8], i783[i + 9], i783[i + 10], i783[i + 11],  i783[i + 12], i783[i + 13], i783[i + 14], i783[i + 15]) );
  }
  i776.bindposes = i782
  var i785 = i777[10]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i785[i + 0]) );
  }
  i776.blendShapes = i784
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i791 = data
  i790.triangles = i791[0]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i797 = data
  i796.name = i797[0]
  var i799 = i797[1]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i799[i + 0]) );
  }
  i796.frames = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i801 = data
  i800.position = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.scale = new pc.Vec3( i801[3], i801[4], i801[5] )
  i800.rotation = new pc.Quat(i801[6], i801[7], i801[8], i801[9])
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'animatorController')
  request.r(i803[2], i803[3], 0, i802, 'avatar')
  i802.updateMode = i803[4]
  i802.hasTransformHierarchy = !!i803[5]
  i802.applyRootMotion = !!i803[6]
  var i805 = i803[7]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.humanBones = i804
  i802.enabled = !!i803[8]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'clip')
  request.r(i809[2], i809[3], 0, i808, 'outputAudioMixerGroup')
  i808.playOnAwake = !!i809[4]
  i808.loop = !!i809[5]
  i808.time = i809[6]
  i808.volume = i809[7]
  i808.pitch = i809[8]
  i808.enabled = !!i809[9]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'sharedMesh')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'additionalVertexStreams')
  i812.enabled = !!i813[2]
  request.r(i813[3], i813[4], 0, i812, 'sharedMaterial')
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[6]
  i812.shadowCastingMode = i813[7]
  i812.sortingLayerID = i813[8]
  i812.sortingOrder = i813[9]
  i812.lightmapIndex = i813[10]
  i812.lightmapSceneIndex = i813[11]
  i812.lightmapScaleOffset = new pc.Vec4( i813[12], i813[13], i813[14], i813[15] )
  i812.lightProbeUsage = i813[16]
  i812.reflectionProbeUsage = i813[17]
  return i812
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i821 = data
  i820.color = new pc.Color(i821[0], i821[1], i821[2], i821[3])
  request.r(i821[4], i821[5], 0, i820, 'sprite')
  i820.flipX = !!i821[6]
  i820.flipY = !!i821[7]
  i820.drawMode = i821[8]
  i820.size = new pc.Vec2( i821[9], i821[10] )
  i820.tileMode = i821[11]
  i820.adaptiveModeThreshold = i821[12]
  i820.maskInteraction = i821[13]
  i820.spriteSortPoint = i821[14]
  i820.enabled = !!i821[15]
  request.r(i821[16], i821[17], 0, i820, 'sharedMaterial')
  var i823 = i821[18]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[19]
  i820.shadowCastingMode = i821[20]
  i820.sortingLayerID = i821[21]
  i820.sortingOrder = i821[22]
  i820.lightmapIndex = i821[23]
  i820.lightmapSceneIndex = i821[24]
  i820.lightmapScaleOffset = new pc.Vec4( i821[25], i821[26], i821[27], i821[28] )
  i820.lightProbeUsage = i821[29]
  i820.reflectionProbeUsage = i821[30]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'sharedMesh')
  i824.convex = !!i825[2]
  i824.enabled = !!i825[3]
  i824.isTrigger = !!i825[4]
  request.r(i825[5], i825[6], 0, i824, 'material')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i827 = data
  i826.center = new pc.Vec3( i827[0], i827[1], i827[2] )
  i826.size = new pc.Vec3( i827[3], i827[4], i827[5] )
  i826.enabled = !!i827[6]
  i826.isTrigger = !!i827[7]
  request.r(i827[8], i827[9], 0, i826, 'material')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i829 = data
  i828.center = new pc.Vec3( i829[0], i829[1], i829[2] )
  i828.radius = i829[3]
  i828.height = i829[4]
  i828.direction = i829[5]
  i828.enabled = !!i829[6]
  i828.isTrigger = !!i829[7]
  request.r(i829[8], i829[9], 0, i828, 'material')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i831 = data
  i830.name = i831[0]
  i830.atlasId = i831[1]
  i830.mipmapCount = i831[2]
  i830.hdr = !!i831[3]
  i830.size = i831[4]
  i830.anisoLevel = i831[5]
  i830.filterMode = i831[6]
  var i833 = i831[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 4) {
    i832.push( UnityEngine.Rect.MinMaxRect(i833[i + 0], i833[i + 1], i833[i + 2], i833[i + 3]) );
  }
  i830.rects = i832
  i830.wrapU = i831[8]
  i830.wrapV = i831[9]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i837 = data
  i836.name = i837[0]
  i836.index = i837[1]
  i836.startup = !!i837[2]
  return i836
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_FirstSelected')
  i838.m_sendNavigationEvents = !!i839[2]
  i838.m_DragThreshold = i839[3]
  return i838
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i841 = data
  i840.m_HorizontalAxis = i841[0]
  i840.m_VerticalAxis = i841[1]
  i840.m_SubmitButton = i841[2]
  i840.m_CancelButton = i841[3]
  i840.m_InputActionsPerSecond = i841[4]
  i840.m_RepeatDelay = i841[5]
  i840.m_ForceModuleActive = !!i841[6]
  i840.m_SendPointerHoverToParent = !!i841[7]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i843 = data
  i842.type = i843[0]
  i842.color = new pc.Color(i843[1], i843[2], i843[3], i843[4])
  i842.cullingMask = i843[5]
  i842.intensity = i843[6]
  i842.range = i843[7]
  i842.spotAngle = i843[8]
  i842.shadows = i843[9]
  i842.shadowNormalBias = i843[10]
  i842.shadowBias = i843[11]
  i842.shadowStrength = i843[12]
  i842.shadowResolution = i843[13]
  i842.lightmapBakeType = i843[14]
  i842.renderMode = i843[15]
  request.r(i843[16], i843[17], 0, i842, 'cookie')
  i842.cookieSize = i843[18]
  i842.shadowNearPlane = i843[19]
  i842.occlusionMaskChannel = i843[20]
  i842.isBaked = !!i843[21]
  i842.mixedLightingMode = i843[22]
  i842.enabled = !!i843[23]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i845 = data
  i844.pivot = new pc.Vec2( i845[0], i845[1] )
  i844.anchorMin = new pc.Vec2( i845[2], i845[3] )
  i844.anchorMax = new pc.Vec2( i845[4], i845[5] )
  i844.sizeDelta = new pc.Vec2( i845[6], i845[7] )
  i844.anchoredPosition3D = new pc.Vec3( i845[8], i845[9], i845[10] )
  i844.rotation = new pc.Quat(i845[11], i845[12], i845[13], i845[14])
  i844.scale = new pc.Vec3( i845[15], i845[16], i845[17] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i847 = data
  i846.planeDistance = i847[0]
  i846.referencePixelsPerUnit = i847[1]
  i846.isFallbackOverlay = !!i847[2]
  i846.renderMode = i847[3]
  i846.renderOrder = i847[4]
  i846.sortingLayerName = i847[5]
  i846.sortingOrder = i847[6]
  i846.scaleFactor = i847[7]
  request.r(i847[8], i847[9], 0, i846, 'worldCamera')
  i846.overrideSorting = !!i847[10]
  i846.pixelPerfect = !!i847[11]
  i846.targetDisplay = i847[12]
  i846.overridePixelPerfect = !!i847[13]
  i846.enabled = !!i847[14]
  return i846
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i849 = data
  i848.m_UiScaleMode = i849[0]
  i848.m_ReferencePixelsPerUnit = i849[1]
  i848.m_ScaleFactor = i849[2]
  i848.m_ReferenceResolution = new pc.Vec2( i849[3], i849[4] )
  i848.m_ScreenMatchMode = i849[5]
  i848.m_MatchWidthOrHeight = i849[6]
  i848.m_PhysicalUnit = i849[7]
  i848.m_FallbackScreenDPI = i849[8]
  i848.m_DefaultSpriteDPI = i849[9]
  i848.m_DynamicPixelsPerUnit = i849[10]
  i848.m_PresetInfoIsWorld = !!i849[11]
  return i848
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i851 = data
  i850.m_IgnoreReversedGraphics = !!i851[0]
  i850.m_BlockingObjects = i851[1]
  i850.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i851[2] )
  return i850
}

Deserializers["Joystick"] = function (request, data, root) {
  var i852 = root || request.c( 'Joystick' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'background')
  request.r(i853[2], i853[3], 0, i852, 'joy')
  i852.deadZone = i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i855 = data
  i854.cullTransparentMesh = !!i855[0]
  return i854
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Image' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_Sprite')
  i856.m_Type = i857[2]
  i856.m_PreserveAspect = !!i857[3]
  i856.m_FillCenter = !!i857[4]
  i856.m_FillMethod = i857[5]
  i856.m_FillAmount = i857[6]
  i856.m_FillClockwise = !!i857[7]
  i856.m_FillOrigin = i857[8]
  i856.m_UseSpriteMesh = !!i857[9]
  i856.m_PixelsPerUnitMultiplier = i857[10]
  request.r(i857[11], i857[12], 0, i856, 'm_Material')
  i856.m_Maskable = !!i857[13]
  i856.m_Color = new pc.Color(i857[14], i857[15], i857[16], i857[17])
  i856.m_RaycastTarget = !!i857[18]
  i856.m_RaycastPadding = new pc.Vec4( i857[19], i857[20], i857[21], i857[22] )
  return i856
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i858 = root || request.c( 'JumpButton' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'button')
  return i858
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Button' )
  var i861 = data
  i860.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i861[0], i860.m_OnClick)
  i860.m_Navigation = request.d('UnityEngine.UI.Navigation', i861[1], i860.m_Navigation)
  i860.m_Transition = i861[2]
  i860.m_Colors = request.d('UnityEngine.UI.ColorBlock', i861[3], i860.m_Colors)
  i860.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i861[4], i860.m_SpriteState)
  i860.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i861[5], i860.m_AnimationTriggers)
  i860.m_Interactable = !!i861[6]
  request.r(i861[7], i861[8], 0, i860, 'm_TargetGraphic')
  return i860
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i863 = data
  i862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i863[0], i862.m_PersistentCalls)
  return i862
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('UnityEngine.Events.PersistentCall', i867[i + 0]));
  }
  i864.m_Calls = i866
  return i864
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_Target')
  i870.m_TargetAssemblyTypeName = i871[2]
  i870.m_MethodName = i871[3]
  i870.m_Mode = i871[4]
  i870.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i871[5], i870.m_Arguments)
  i870.m_CallState = i871[6]
  return i870
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i873 = data
  i872.m_Mode = i873[0]
  i872.m_WrapAround = !!i873[1]
  request.r(i873[2], i873[3], 0, i872, 'm_SelectOnUp')
  request.r(i873[4], i873[5], 0, i872, 'm_SelectOnDown')
  request.r(i873[6], i873[7], 0, i872, 'm_SelectOnLeft')
  request.r(i873[8], i873[9], 0, i872, 'm_SelectOnRight')
  return i872
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i875 = data
  i874.m_NormalColor = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.m_HighlightedColor = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.m_PressedColor = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  i874.m_SelectedColor = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  i874.m_DisabledColor = new pc.Color(i875[16], i875[17], i875[18], i875[19])
  i874.m_ColorMultiplier = i875[20]
  i874.m_FadeDuration = i875[21]
  return i874
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_HighlightedSprite')
  request.r(i877[2], i877[3], 0, i876, 'm_PressedSprite')
  request.r(i877[4], i877[5], 0, i876, 'm_SelectedSprite')
  request.r(i877[6], i877[7], 0, i876, 'm_DisabledSprite')
  return i876
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i879 = data
  i878.m_NormalTrigger = i879[0]
  i878.m_HighlightedTrigger = i879[1]
  i878.m_PressedTrigger = i879[2]
  i878.m_SelectedTrigger = i879[3]
  i878.m_DisabledTrigger = i879[4]
  return i878
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Mask' )
  var i881 = data
  i880.m_ShowMaskGraphic = !!i881[0]
  return i880
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i883 = data
  i882.m_hasFontAssetChanged = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'm_baseMaterial')
  i882.m_maskOffset = new pc.Vec4( i883[3], i883[4], i883[5], i883[6] )
  i882.m_text = i883[7]
  i882.m_isRightToLeft = !!i883[8]
  request.r(i883[9], i883[10], 0, i882, 'm_fontAsset')
  request.r(i883[11], i883[12], 0, i882, 'm_sharedMaterial')
  var i885 = i883[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.m_fontSharedMaterials = i884
  request.r(i883[14], i883[15], 0, i882, 'm_fontMaterial')
  var i887 = i883[16]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i882.m_fontMaterials = i886
  i882.m_fontColor32 = UnityEngine.Color32.ConstructColor(i883[17], i883[18], i883[19], i883[20])
  i882.m_fontColor = new pc.Color(i883[21], i883[22], i883[23], i883[24])
  i882.m_enableVertexGradient = !!i883[25]
  i882.m_colorMode = i883[26]
  i882.m_fontColorGradient = request.d('TMPro.VertexGradient', i883[27], i882.m_fontColorGradient)
  request.r(i883[28], i883[29], 0, i882, 'm_fontColorGradientPreset')
  request.r(i883[30], i883[31], 0, i882, 'm_spriteAsset')
  i882.m_tintAllSprites = !!i883[32]
  request.r(i883[33], i883[34], 0, i882, 'm_StyleSheet')
  i882.m_TextStyleHashCode = i883[35]
  i882.m_overrideHtmlColors = !!i883[36]
  i882.m_faceColor = UnityEngine.Color32.ConstructColor(i883[37], i883[38], i883[39], i883[40])
  i882.m_fontSize = i883[41]
  i882.m_fontSizeBase = i883[42]
  i882.m_fontWeight = i883[43]
  i882.m_enableAutoSizing = !!i883[44]
  i882.m_fontSizeMin = i883[45]
  i882.m_fontSizeMax = i883[46]
  i882.m_fontStyle = i883[47]
  i882.m_HorizontalAlignment = i883[48]
  i882.m_VerticalAlignment = i883[49]
  i882.m_textAlignment = i883[50]
  i882.m_characterSpacing = i883[51]
  i882.m_characterHorizontalScale = i883[52]
  i882.m_wordSpacing = i883[53]
  i882.m_lineSpacing = i883[54]
  i882.m_lineSpacingMax = i883[55]
  i882.m_paragraphSpacing = i883[56]
  i882.m_charWidthMaxAdj = i883[57]
  i882.m_TextWrappingMode = i883[58]
  i882.m_wordWrappingRatios = i883[59]
  i882.m_overflowMode = i883[60]
  request.r(i883[61], i883[62], 0, i882, 'm_linkedTextComponent')
  request.r(i883[63], i883[64], 0, i882, 'parentLinkedComponent')
  i882.m_enableKerning = !!i883[65]
  var i889 = i883[66]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(i889[i + 0]);
  }
  i882.m_ActiveFontFeatures = i888
  i882.m_enableExtraPadding = !!i883[67]
  i882.checkPaddingRequired = !!i883[68]
  i882.m_isRichText = !!i883[69]
  i882.m_parseCtrlCharacters = !!i883[70]
  i882.m_isOrthographic = !!i883[71]
  i882.m_isCullingEnabled = !!i883[72]
  i882.m_horizontalMapping = i883[73]
  i882.m_verticalMapping = i883[74]
  i882.m_uvLineOffset = i883[75]
  i882.m_geometrySortingOrder = i883[76]
  i882.m_IsTextObjectScaleStatic = !!i883[77]
  i882.m_VertexBufferAutoSizeReduction = !!i883[78]
  i882.m_useMaxVisibleDescender = !!i883[79]
  i882.m_pageToDisplay = i883[80]
  i882.m_margin = new pc.Vec4( i883[81], i883[82], i883[83], i883[84] )
  i882.m_isUsingLegacyAnimationComponent = !!i883[85]
  i882.m_isVolumetricText = !!i883[86]
  request.r(i883[87], i883[88], 0, i882, 'm_Material')
  i882.m_EmojiFallbackSupport = !!i883[89]
  i882.m_Maskable = !!i883[90]
  i882.m_Color = new pc.Color(i883[91], i883[92], i883[93], i883[94])
  i882.m_RaycastTarget = !!i883[95]
  i882.m_RaycastPadding = new pc.Vec4( i883[96], i883[97], i883[98], i883[99] )
  return i882
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.VertexGradient' )
  var i891 = data
  i890.topLeft = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.topRight = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.bottomLeft = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  i890.bottomRight = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  return i890
}

Deserializers["TutController"] = function (request, data, root) {
  var i894 = root || request.c( 'TutController' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'tutScene')
  request.r(i895[2], i895[3], 0, i894, 'startTut')
  request.r(i895[4], i895[5], 0, i894, 'playTut')
  request.r(i895[6], i895[7], 0, i894, 'farTut')
  request.r(i895[8], i895[9], 0, i894, 'failTut')
  return i894
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i897 = data
  i896.targetIsSelf = !!i897[0]
  request.r(i897[1], i897[2], 0, i896, 'targetGO')
  i896.tweenTargetIsTargetGO = !!i897[3]
  i896.delay = i897[4]
  i896.duration = i897[5]
  i896.easeType = i897[6]
  i896.easeCurve = new pc.AnimationCurve( { keys_flow: i897[7] } )
  i896.loopType = i897[8]
  i896.loops = i897[9]
  i896.id = i897[10]
  i896.isRelative = !!i897[11]
  i896.isFrom = !!i897[12]
  i896.isIndependentUpdate = !!i897[13]
  i896.autoKill = !!i897[14]
  i896.autoGenerate = !!i897[15]
  i896.isActive = !!i897[16]
  i896.isValid = !!i897[17]
  request.r(i897[18], i897[19], 0, i896, 'target')
  i896.animationType = i897[20]
  i896.targetType = i897[21]
  i896.forcedTargetType = i897[22]
  i896.autoPlay = !!i897[23]
  i896.useTargetAsV3 = !!i897[24]
  i896.endValueFloat = i897[25]
  i896.endValueV3 = new pc.Vec3( i897[26], i897[27], i897[28] )
  i896.endValueV2 = new pc.Vec2( i897[29], i897[30] )
  i896.endValueColor = new pc.Color(i897[31], i897[32], i897[33], i897[34])
  i896.endValueString = i897[35]
  i896.endValueRect = UnityEngine.Rect.MinMaxRect(i897[36], i897[37], i897[38], i897[39])
  request.r(i897[40], i897[41], 0, i896, 'endValueTransform')
  i896.optionalBool0 = !!i897[42]
  i896.optionalBool1 = !!i897[43]
  i896.optionalFloat0 = i897[44]
  i896.optionalInt0 = i897[45]
  i896.optionalRotationMode = i897[46]
  i896.optionalScrambleMode = i897[47]
  i896.optionalShakeRandomnessMode = i897[48]
  i896.optionalString = i897[49]
  i896.updateType = i897[50]
  i896.isSpeedBased = !!i897[51]
  i896.hasOnStart = !!i897[52]
  i896.hasOnPlay = !!i897[53]
  i896.hasOnUpdate = !!i897[54]
  i896.hasOnStepComplete = !!i897[55]
  i896.hasOnComplete = !!i897[56]
  i896.hasOnTweenCreated = !!i897[57]
  i896.hasOnRewind = !!i897[58]
  i896.onStart = request.d('UnityEngine.Events.UnityEvent', i897[59], i896.onStart)
  i896.onPlay = request.d('UnityEngine.Events.UnityEvent', i897[60], i896.onPlay)
  i896.onUpdate = request.d('UnityEngine.Events.UnityEvent', i897[61], i896.onUpdate)
  i896.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i897[62], i896.onStepComplete)
  i896.onComplete = request.d('UnityEngine.Events.UnityEvent', i897[63], i896.onComplete)
  i896.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i897[64], i896.onTweenCreated)
  i896.onRewind = request.d('UnityEngine.Events.UnityEvent', i897[65], i896.onRewind)
  return i896
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i899 = data
  i898.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i899[0], i898.m_PersistentCalls)
  return i898
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i900 = root || request.c( 'HideOnPointer' )
  var i901 = data
  i900.OnPointerDownEvent = request.d('System.Action', i901[0], i900.OnPointerDownEvent)
  return i900
}

Deserializers["System.Action"] = function (request, data, root) {
  var i902 = root || request.c( 'System.Action' )
  var i903 = data
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.radius = i905[3]
  i904.enabled = !!i905[4]
  i904.isTrigger = !!i905[5]
  request.r(i905[6], i905[7], 0, i904, 'material')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i907 = data
  i906.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i907[0], i906.main)
  i906.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i907[1], i906.colorBySpeed)
  i906.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i907[2], i906.colorOverLifetime)
  i906.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i907[3], i906.emission)
  i906.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i907[4], i906.rotationBySpeed)
  i906.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i907[5], i906.rotationOverLifetime)
  i906.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i907[6], i906.shape)
  i906.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i907[7], i906.sizeBySpeed)
  i906.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i907[8], i906.sizeOverLifetime)
  i906.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i907[9], i906.textureSheetAnimation)
  i906.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i907[10], i906.velocityOverLifetime)
  i906.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i907[11], i906.noise)
  i906.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i907[12], i906.inheritVelocity)
  i906.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i907[13], i906.forceOverLifetime)
  i906.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i907[14], i906.limitVelocityOverLifetime)
  i906.useAutoRandomSeed = !!i907[15]
  i906.randomSeed = i907[16]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemMain()
  var i909 = data
  i908.duration = i909[0]
  i908.loop = !!i909[1]
  i908.prewarm = !!i909[2]
  i908.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.startDelay)
  i908.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.startLifetime)
  i908.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[5], i908.startSpeed)
  i908.startSize3D = !!i909[6]
  i908.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[7], i908.startSizeX)
  i908.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[8], i908.startSizeY)
  i908.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[9], i908.startSizeZ)
  i908.startRotation3D = !!i909[10]
  i908.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.startRotationX)
  i908.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[12], i908.startRotationY)
  i908.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[13], i908.startRotationZ)
  i908.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i909[14], i908.startColor)
  i908.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[15], i908.gravityModifier)
  i908.simulationSpace = i909[16]
  request.r(i909[17], i909[18], 0, i908, 'customSimulationSpace')
  i908.simulationSpeed = i909[19]
  i908.useUnscaledTime = !!i909[20]
  i908.scalingMode = i909[21]
  i908.playOnAwake = !!i909[22]
  i908.maxParticles = i909[23]
  i908.emitterVelocityMode = i909[24]
  i908.stopAction = i909[25]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i910 = root || new pc.MinMaxCurve()
  var i911 = data
  i910.mode = i911[0]
  i910.curveMin = new pc.AnimationCurve( { keys_flow: i911[1] } )
  i910.curveMax = new pc.AnimationCurve( { keys_flow: i911[2] } )
  i910.curveMultiplier = i911[3]
  i910.constantMin = i911[4]
  i910.constantMax = i911[5]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i912 = root || new pc.MinMaxGradient()
  var i913 = data
  i912.mode = i913[0]
  i912.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i913[1], i912.gradientMin)
  i912.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i913[2], i912.gradientMax)
  i912.colorMin = new pc.Color(i913[3], i913[4], i913[5], i913[6])
  i912.colorMax = new pc.Color(i913[7], i913[8], i913[9], i913[10])
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i915 = data
  i914.mode = i915[0]
  var i917 = i915[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i917[i + 0]) );
  }
  i914.colorKeys = i916
  var i919 = i915[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i919[i + 0]) );
  }
  i914.alphaKeys = i918
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemColorBySpeed()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i921[1], i920.color)
  i920.range = new pc.Vec2( i921[2], i921[3] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i925 = data
  i924.color = new pc.Color(i925[0], i925[1], i925[2], i925[3])
  i924.time = i925[4]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i929 = data
  i928.alpha = i929[0]
  i928.time = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemColorOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i931[1], i930.color)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemEmitter()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[1], i932.rateOverTime)
  i932.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.rateOverDistance)
  var i935 = i933[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i935[i + 0]) );
  }
  i932.bursts = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemBurst()
  var i939 = data
  i938.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[0], i938.count)
  i938.cycleCount = i939[1]
  i938.minCount = i939[2]
  i938.maxCount = i939[3]
  i938.repeatInterval = i939[4]
  i938.time = i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemRotationBySpeed()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[1], i940.x)
  i940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[2], i940.y)
  i940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[3], i940.z)
  i940.separateAxes = !!i941[4]
  i940.range = new pc.Vec2( i941[5], i941[6] )
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemRotationOverLifetime()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.x)
  i942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.y)
  i942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.z)
  i942.separateAxes = !!i943[4]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemShape()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.shapeType = i945[1]
  i944.randomDirectionAmount = i945[2]
  i944.sphericalDirectionAmount = i945[3]
  i944.randomPositionAmount = i945[4]
  i944.alignToDirection = !!i945[5]
  i944.radius = i945[6]
  i944.radiusMode = i945[7]
  i944.radiusSpread = i945[8]
  i944.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[9], i944.radiusSpeed)
  i944.radiusThickness = i945[10]
  i944.angle = i945[11]
  i944.length = i945[12]
  i944.boxThickness = new pc.Vec3( i945[13], i945[14], i945[15] )
  i944.meshShapeType = i945[16]
  request.r(i945[17], i945[18], 0, i944, 'mesh')
  request.r(i945[19], i945[20], 0, i944, 'meshRenderer')
  request.r(i945[21], i945[22], 0, i944, 'skinnedMeshRenderer')
  i944.useMeshMaterialIndex = !!i945[23]
  i944.meshMaterialIndex = i945[24]
  i944.useMeshColors = !!i945[25]
  i944.normalOffset = i945[26]
  i944.arc = i945[27]
  i944.arcMode = i945[28]
  i944.arcSpread = i945[29]
  i944.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[30], i944.arcSpeed)
  i944.donutRadius = i945[31]
  i944.position = new pc.Vec3( i945[32], i945[33], i945[34] )
  i944.rotation = new pc.Vec3( i945[35], i945[36], i945[37] )
  i944.scale = new pc.Vec3( i945[38], i945[39], i945[40] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemSizeBySpeed()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.x)
  i946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.y)
  i946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.z)
  i946.separateAxes = !!i947[4]
  i946.range = new pc.Vec2( i947[5], i947[6] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemSizeOverLifetime()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[1], i948.x)
  i948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.y)
  i948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[3], i948.z)
  i948.separateAxes = !!i949[4]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.mode = i951[1]
  i950.animation = i951[2]
  i950.numTilesX = i951[3]
  i950.numTilesY = i951[4]
  i950.useRandomRow = !!i951[5]
  i950.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[6], i950.frameOverTime)
  i950.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[7], i950.startFrame)
  i950.cycleCount = i951[8]
  i950.rowIndex = i951[9]
  i950.flipU = i951[10]
  i950.flipV = i951[11]
  i950.spriteCount = i951[12]
  var i953 = i951[13]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.sprites = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[4], i956.radial)
  i956.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[5], i956.speedModifier)
  i956.space = i957[6]
  i956.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[7], i956.orbitalX)
  i956.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[8], i956.orbitalY)
  i956.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[9], i956.orbitalZ)
  i956.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[10], i956.orbitalOffsetX)
  i956.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[11], i956.orbitalOffsetY)
  i956.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[12], i956.orbitalOffsetZ)
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemNoise()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.separateAxes = !!i959[1]
  i958.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.strengthX)
  i958.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.strengthY)
  i958.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[4], i958.strengthZ)
  i958.frequency = i959[5]
  i958.damping = !!i959[6]
  i958.octaveCount = i959[7]
  i958.octaveMultiplier = i959[8]
  i958.octaveScale = i959[9]
  i958.quality = i959[10]
  i958.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[11], i958.scrollSpeed)
  i958.scrollSpeedMultiplier = i959[12]
  i958.remapEnabled = !!i959[13]
  i958.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[14], i958.remapX)
  i958.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[15], i958.remapY)
  i958.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[16], i958.remapZ)
  i958.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[17], i958.positionAmount)
  i958.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[18], i958.rotationAmount)
  i958.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[19], i958.sizeAmount)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemInheritVelocity()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.mode = i961[1]
  i960.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.curve)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemForceOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.space = i963[4]
  i962.randomized = !!i963[5]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.limit)
  i964.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.limitX)
  i964.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.limitY)
  i964.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[4], i964.limitZ)
  i964.dampen = i965[5]
  i964.separateAxes = !!i965[6]
  i964.space = i965[7]
  i964.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[8], i964.drag)
  i964.multiplyDragByParticleSize = !!i965[9]
  i964.multiplyDragByParticleVelocity = !!i965[10]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'mesh')
  i966.meshCount = i967[2]
  i966.activeVertexStreamsCount = i967[3]
  i966.alignment = i967[4]
  i966.renderMode = i967[5]
  i966.sortMode = i967[6]
  i966.lengthScale = i967[7]
  i966.velocityScale = i967[8]
  i966.cameraVelocityScale = i967[9]
  i966.normalDirection = i967[10]
  i966.sortingFudge = i967[11]
  i966.minParticleSize = i967[12]
  i966.maxParticleSize = i967[13]
  i966.pivot = new pc.Vec3( i967[14], i967[15], i967[16] )
  request.r(i967[17], i967[18], 0, i966, 'trailMaterial')
  i966.applyActiveColorSpace = !!i967[19]
  i966.enabled = !!i967[20]
  request.r(i967[21], i967[22], 0, i966, 'sharedMaterial')
  var i969 = i967[23]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.sharedMaterials = i968
  i966.receiveShadows = !!i967[24]
  i966.shadowCastingMode = i967[25]
  i966.sortingLayerID = i967[26]
  i966.sortingOrder = i967[27]
  i966.lightmapIndex = i967[28]
  i966.lightmapSceneIndex = i967[29]
  i966.lightmapScaleOffset = new pc.Vec4( i967[30], i967[31], i967[32], i967[33] )
  i966.lightProbeUsage = i967[34]
  i966.reflectionProbeUsage = i967[35]
  return i966
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i970 = root || request.c( 'CharacterMotor' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'characterInput')
  request.r(i971[2], i971[3], 0, i970, 'cameraYawTransform')
  request.r(i971[4], i971[5], 0, i970, '_arrow')
  i970.moveSpeed = i971[6]
  i970.jumpHeight = i971[7]
  request.r(i971[8], i971[9], 0, i970, 'groundChecker')
  i970.gravity = i971[10]
  i970.enableStepClimb = !!i971[11]
  i970.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i971[12] )
  i970.maxStepHeight = i971[13]
  i970.stepCheckDistance = i971[14]
  i970.stepUpSpeed = i971[15]
  i970.stepUpAcceleration = i971[16]
  i970.minimumStepFacing = i971[17]
  request.r(i971[18], i971[19], 0, i970, 'controller')
  i970.autoRun = !!i971[20]
  return i970
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i972 = root || request.c( 'CharacterRotation' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'motor')
  i972.rotationSpeed = i973[2]
  return i972
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i974 = root || request.c( 'CharacterAnimation' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'animator')
  request.r(i975[2], i975[3], 0, i974, 'motor')
  i974.speedChangeRate = i975[4]
  i974.groundedGraceTime = i975[5]
  return i974
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i976 = root || request.c( 'CharacterCollect' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'motor')
  request.r(i977[2], i977[3], 0, i976, 'avatar')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i979 = data
  i978.mass = i979[0]
  i978.drag = i979[1]
  i978.angularDrag = i979[2]
  i978.useGravity = !!i979[3]
  i978.isKinematic = !!i979[4]
  i978.constraints = i979[5]
  i978.maxAngularVelocity = i979[6]
  i978.collisionDetectionMode = i979[7]
  i978.interpolation = i979[8]
  return i978
}

Deserializers["CharacterTrigger"] = function (request, data, root) {
  var i980 = root || request.c( 'CharacterTrigger' )
  var i981 = data
  i980.onTrigger1 = !!i981[0]
  i980.completeGift1 = !!i981[1]
  i980.onTrigger2 = !!i981[2]
  i980.completeGift2 = !!i981[3]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'sharedMesh')
  var i985 = i983[2]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.bones = i984
  i982.updateWhenOffscreen = !!i983[3]
  i982.localBounds = i983[4]
  request.r(i983[5], i983[6], 0, i982, 'rootBone')
  var i987 = i983[7]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i987[i + 0]) );
  }
  i982.blendShapesWeights = i986
  i982.enabled = !!i983[8]
  request.r(i983[9], i983[10], 0, i982, 'sharedMaterial')
  var i989 = i983[11]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i982.sharedMaterials = i988
  i982.receiveShadows = !!i983[12]
  i982.shadowCastingMode = i983[13]
  i982.sortingLayerID = i983[14]
  i982.sortingOrder = i983[15]
  i982.lightmapIndex = i983[16]
  i982.lightmapSceneIndex = i983[17]
  i982.lightmapScaleOffset = new pc.Vec4( i983[18], i983[19], i983[20], i983[21] )
  i982.lightProbeUsage = i983[22]
  i982.reflectionProbeUsage = i983[23]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i993 = data
  i992.weight = i993[0]
  return i992
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i994 = root || request.c( 'GroundChecker' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'groundPoint')
  i994.half = new pc.Vec3( i995[2], i995[3], i995[4] )
  i994.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i995[5] )
  return i994
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i996 = root || request.c( 'CameraFollow' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'target')
  i996.smoothTime = i997[2]
  return i996
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i998 = root || request.c( 'CameraLook' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'input')
  request.r(i999[2], i999[3], 0, i998, 'yawPivot')
  request.r(i999[4], i999[5], 0, i998, 'pitchPivot')
  i998.minPitch = i999[6]
  i998.maxPitch = i999[7]
  i998.yaw = i999[8]
  i998.pitch = i999[9]
  i998.defaltYaw = i999[10]
  i998.defaltPitch = i999[11]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1001 = data
  i1000.aspect = i1001[0]
  i1000.orthographic = !!i1001[1]
  i1000.orthographicSize = i1001[2]
  i1000.backgroundColor = new pc.Color(i1001[3], i1001[4], i1001[5], i1001[6])
  i1000.nearClipPlane = i1001[7]
  i1000.farClipPlane = i1001[8]
  i1000.fieldOfView = i1001[9]
  i1000.depth = i1001[10]
  i1000.clearFlags = i1001[11]
  i1000.cullingMask = i1001[12]
  i1000.rect = i1001[13]
  request.r(i1001[14], i1001[15], 0, i1000, 'targetTexture')
  i1000.usePhysicalProperties = !!i1001[16]
  i1000.focalLength = i1001[17]
  i1000.sensorSize = new pc.Vec2( i1001[18], i1001[19] )
  i1000.lensShift = new pc.Vec2( i1001[20], i1001[21] )
  i1000.gateFit = i1001[22]
  i1000.commandBufferCount = i1001[23]
  i1000.cameraType = i1001[24]
  i1000.enabled = !!i1001[25]
  return i1000
}

Deserializers["Gift"] = function (request, data, root) {
  var i1002 = root || request.c( 'Gift' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'hint')
  i1002.onCollect = request.d('UnityEngine.Events.UnityEvent', i1003[2], i1002.onCollect)
  i1002.collectDone = !!i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'collectSound')
  request.r(i1003[6], i1003[7], 0, i1002, 'effect')
  request.r(i1003[8], i1003[9], 0, i1002, 'complete')
  return i1002
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'm_ObjectArgument')
  i1004.m_ObjectArgumentAssemblyTypeName = i1005[2]
  i1004.m_IntArgument = i1005[3]
  i1004.m_FloatArgument = i1005[4]
  i1004.m_StringArgument = i1005[5]
  i1004.m_BoolArgument = !!i1005[6]
  return i1004
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i1006 = root || request.c( 'SoundHint' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'Sound')
  request.r(i1007[2], i1007[3], 0, i1006, 'Source')
  return i1006
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i1008 = root || request.c( 'JumpHint' )
  var i1009 = data
  i1008.JumpForce = new pc.Vec3( i1009[0], i1009[1], i1009[2] )
  request.r(i1009[3], i1009[4], 0, i1008, 'Rigidbody')
  return i1008
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1010 = root || request.c( 'CharacterInput' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'joystick')
  request.r(i1011[2], i1011[3], 0, i1010, 'jumpButton')
  return i1010
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1012 = root || request.c( 'InputManager' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'worldCamera')
  i1012.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1013[2] )
  i1012.touchSensitivity = i1013[3]
  i1012.mouseSensitivity = i1013[4]
  i1012.dragThreshold = i1013[5]
  return i1012
}

Deserializers["GameController"] = function (request, data, root) {
  var i1014 = root || request.c( 'GameController' )
  var i1015 = data
  i1014.timeToShowEnd = i1015[0]
  i1014.currentProgress = i1015[1]
  i1014.target = i1015[2]
  i1014.maxProgress = i1015[3]
  request.r(i1015[4], i1015[5], 0, i1014, 'progressText')
  request.r(i1015[6], i1015[7], 0, i1014, 'completeScene')
  request.r(i1015[8], i1015[9], 0, i1014, 'failScene')
  request.r(i1015[10], i1015[11], 0, i1014, 'collect')
  request.r(i1015[12], i1015[13], 0, i1014, 'tut')
  var i1017 = i1015[14]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1014.gifts = i1016
  return i1014
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1020 = root || request.c( 'AudioController' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'musicSource')
  request.r(i1021[2], i1021[3], 0, i1020, 'poolParent')
  i1020.startSize = i1021[4]
  return i1020
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1022 = root || request.c( 'LunaController' )
  var i1023 = data
  i1022.LimitTimePlay = !!i1023[0]
  i1022.TimePlay = i1023[1]
  i1022.TypeMonster1 = i1023[2]
  i1022.TypeMonster2 = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'gift1')
  request.r(i1023[6], i1023[7], 0, i1022, 'gift2')
  var i1025 = i1023[8]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1022.monsters = i1024
  var i1027 = i1023[9]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1022.CTA = i1026
  request.r(i1023[10], i1023[11], 0, i1022, 'endCard')
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1033 = data
  i1032.ambientIntensity = i1033[0]
  i1032.reflectionIntensity = i1033[1]
  i1032.ambientMode = i1033[2]
  i1032.ambientLight = new pc.Color(i1033[3], i1033[4], i1033[5], i1033[6])
  i1032.ambientSkyColor = new pc.Color(i1033[7], i1033[8], i1033[9], i1033[10])
  i1032.ambientGroundColor = new pc.Color(i1033[11], i1033[12], i1033[13], i1033[14])
  i1032.ambientEquatorColor = new pc.Color(i1033[15], i1033[16], i1033[17], i1033[18])
  i1032.fogColor = new pc.Color(i1033[19], i1033[20], i1033[21], i1033[22])
  i1032.fogEndDistance = i1033[23]
  i1032.fogStartDistance = i1033[24]
  i1032.fogDensity = i1033[25]
  i1032.fog = !!i1033[26]
  request.r(i1033[27], i1033[28], 0, i1032, 'skybox')
  i1032.fogMode = i1033[29]
  var i1035 = i1033[30]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1035[i + 0]) );
  }
  i1032.lightmaps = i1034
  i1032.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1033[31], i1032.lightProbes)
  i1032.lightmapsMode = i1033[32]
  i1032.mixedBakeMode = i1033[33]
  i1032.environmentLightingMode = i1033[34]
  i1032.ambientProbe = new pc.SphericalHarmonicsL2(i1033[35])
  request.r(i1033[36], i1033[37], 0, i1032, 'customReflection')
  request.r(i1033[38], i1033[39], 0, i1032, 'defaultReflection')
  i1032.defaultReflectionMode = i1033[40]
  i1032.defaultReflectionResolution = i1033[41]
  i1032.sunLightObjectId = i1033[42]
  i1032.pixelLightCount = i1033[43]
  i1032.defaultReflectionHDR = !!i1033[44]
  i1032.hasLightDataAsset = !!i1033[45]
  i1032.hasManualGenerate = !!i1033[46]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'lightmapColor')
  request.r(i1039[2], i1039[3], 0, i1038, 'lightmapDirection')
  request.r(i1039[4], i1039[5], 0, i1038, 'shadowMask')
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1040 = root || new UnityEngine.LightProbes()
  var i1041 = data
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1051[i + 0]));
  }
  i1048.ShaderCompilationErrors = i1050
  i1048.name = i1049[1]
  i1048.guid = i1049[2]
  var i1053 = i1049[3]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( i1053[i + 0] );
  }
  i1048.shaderDefinedKeywords = i1052
  var i1055 = i1049[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1055[i + 0]) );
  }
  i1048.passes = i1054
  var i1057 = i1049[5]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1057[i + 0]) );
  }
  i1048.usePasses = i1056
  var i1059 = i1049[6]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1059[i + 0]) );
  }
  i1048.defaultParameterValues = i1058
  request.r(i1049[7], i1049[8], 0, i1048, 'unityFallbackShader')
  i1048.readDepth = !!i1049[9]
  i1048.hasDepthOnlyPass = !!i1049[10]
  i1048.isCreatedByShaderGraph = !!i1049[11]
  i1048.disableBatching = !!i1049[12]
  i1048.compiled = !!i1049[13]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1063 = data
  i1062.shaderName = i1063[0]
  i1062.errorMessage = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1068 = root || new pc.UnityShaderPass()
  var i1069 = data
  i1068.id = i1069[0]
  i1068.subShaderIndex = i1069[1]
  i1068.name = i1069[2]
  i1068.passType = i1069[3]
  i1068.grabPassTextureName = i1069[4]
  i1068.usePass = !!i1069[5]
  i1068.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[6], i1068.zTest)
  i1068.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[7], i1068.zWrite)
  i1068.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[8], i1068.culling)
  i1068.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1069[9], i1068.blending)
  i1068.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1069[10], i1068.alphaBlending)
  i1068.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[11], i1068.colorWriteMask)
  i1068.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[12], i1068.offsetUnits)
  i1068.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[13], i1068.offsetFactor)
  i1068.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[14], i1068.stencilRef)
  i1068.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[15], i1068.stencilReadMask)
  i1068.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[16], i1068.stencilWriteMask)
  i1068.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1069[17], i1068.stencilOp)
  i1068.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1069[18], i1068.stencilOpFront)
  i1068.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1069[19], i1068.stencilOpBack)
  var i1071 = i1069[20]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1071[i + 0]) );
  }
  i1068.tags = i1070
  var i1073 = i1069[21]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1068.passDefinedKeywords = i1072
  var i1075 = i1069[22]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1075[i + 0]) );
  }
  i1068.passDefinedKeywordGroups = i1074
  var i1077 = i1069[23]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1077[i + 0]) );
  }
  i1068.variants = i1076
  var i1079 = i1069[24]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1079[i + 0]) );
  }
  i1068.excludedVariants = i1078
  i1068.hasDepthReader = !!i1069[25]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1081 = data
  i1080.val = i1081[0]
  i1080.name = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1083 = data
  i1082.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[0], i1082.src)
  i1082.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[1], i1082.dst)
  i1082.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1083[2], i1082.op)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1085 = data
  i1084.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[0], i1084.pass)
  i1084.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[1], i1084.fail)
  i1084.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[2], i1084.zFail)
  i1084.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[3], i1084.comp)
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.value = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1092.keywords = i1094
  i1092.hasDiscard = !!i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1099 = data
  i1098.passId = i1099[0]
  i1098.subShaderIndex = i1099[1]
  var i1101 = i1099[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1098.keywords = i1100
  i1098.vertexProgram = i1099[3]
  i1098.fragmentProgram = i1099[4]
  i1098.exportedForWebGl2 = !!i1099[5]
  i1098.readDepth = !!i1099[6]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'shader')
  i1104.pass = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.type = i1109[1]
  i1108.value = new pc.Vec4( i1109[2], i1109[3], i1109[4], i1109[5] )
  i1108.textureValue = i1109[6]
  i1108.shaderPropertyFlag = i1109[7]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1111 = data
  i1110.name = i1111[0]
  request.r(i1111[1], i1111[2], 0, i1110, 'texture')
  i1110.aabb = i1111[3]
  i1110.vertices = i1111[4]
  i1110.triangles = i1111[5]
  i1110.textureRect = UnityEngine.Rect.MinMaxRect(i1111[6], i1111[7], i1111[8], i1111[9])
  i1110.packedRect = UnityEngine.Rect.MinMaxRect(i1111[10], i1111[11], i1111[12], i1111[13])
  i1110.border = new pc.Vec4( i1111[14], i1111[15], i1111[16], i1111[17] )
  i1110.transparency = i1111[18]
  i1110.bounds = i1111[19]
  i1110.pixelsPerUnit = i1111[20]
  i1110.textureWidth = i1111[21]
  i1110.textureHeight = i1111[22]
  i1110.nativeSize = new pc.Vec2( i1111[23], i1111[24] )
  i1110.pivot = new pc.Vec2( i1111[25], i1111[26] )
  i1110.textureRectOffset = new pc.Vec2( i1111[27], i1111[28] )
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1113 = data
  i1112.name = i1113[0]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.wrapMode = i1115[1]
  i1114.isLooping = !!i1115[2]
  i1114.length = i1115[3]
  var i1117 = i1115[4]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1117[i + 0]) );
  }
  i1114.curves = i1116
  var i1119 = i1115[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1119[i + 0]) );
  }
  i1114.events = i1118
  i1114.halfPrecision = !!i1115[6]
  i1114._frameRate = i1115[7]
  i1114.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1115[8], i1114.localBounds)
  i1114.hasMuscleCurves = !!i1115[9]
  var i1121 = i1115[10]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1114.clipMuscleConstant = i1120
  i1114.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1115[11], i1114.clipBindingConstant)
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1125 = data
  i1124.path = i1125[0]
  i1124.hash = i1125[1]
  i1124.componentType = i1125[2]
  i1124.property = i1125[3]
  i1124.keys = i1125[4]
  var i1127 = i1125[5]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1127[i + 0]) );
  }
  i1124.objectReferenceKeys = i1126
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1131 = data
  i1130.time = i1131[0]
  request.r(i1131[1], i1131[2], 0, i1130, 'value')
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1135 = data
  i1134.functionName = i1135[0]
  i1134.floatParameter = i1135[1]
  i1134.intParameter = i1135[2]
  i1134.stringParameter = i1135[3]
  request.r(i1135[4], i1135[5], 0, i1134, 'objectReferenceParameter')
  i1134.time = i1135[6]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1137 = data
  i1136.center = new pc.Vec3( i1137[0], i1137[1], i1137[2] )
  i1136.extends = new pc.Vec3( i1137[3], i1137[4], i1137[5] )
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1140.genericBindings = i1142
  var i1145 = i1141[1]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1140.pptrCurveMapping = i1144
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1147 = data
  i1146.name = i1147[0]
  var i1149 = i1147[1]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1149[i + 0]) );
  }
  i1146.layers = i1148
  var i1151 = i1147[2]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1151[i + 0]) );
  }
  i1146.parameters = i1150
  i1146.animationClips = i1147[3]
  i1146.avatarUnsupported = i1147[4]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.defaultWeight = i1155[1]
  i1154.blendingMode = i1155[2]
  i1154.avatarMask = i1155[3]
  i1154.syncedLayerIndex = i1155[4]
  i1154.syncedLayerAffectsTiming = !!i1155[5]
  i1154.syncedLayers = i1155[6]
  i1154.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1155[7], i1154.stateMachine)
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.name = i1157[1]
  i1156.path = i1157[2]
  var i1159 = i1157[3]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1159[i + 0]) );
  }
  i1156.states = i1158
  var i1161 = i1157[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1161[i + 0]) );
  }
  i1156.machines = i1160
  var i1163 = i1157[5]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1163[i + 0]) );
  }
  i1156.entryStateTransitions = i1162
  var i1165 = i1157[6]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1165[i + 0]) );
  }
  i1156.exitStateTransitions = i1164
  var i1167 = i1157[7]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1167[i + 0]) );
  }
  i1156.anyStateTransitions = i1166
  i1156.defaultStateId = i1157[8]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.cycleOffset = i1171[2]
  i1170.cycleOffsetParameter = i1171[3]
  i1170.cycleOffsetParameterActive = !!i1171[4]
  i1170.mirror = !!i1171[5]
  i1170.mirrorParameter = i1171[6]
  i1170.mirrorParameterActive = !!i1171[7]
  i1170.motionId = i1171[8]
  i1170.nameHash = i1171[9]
  i1170.fullPathHash = i1171[10]
  i1170.speed = i1171[11]
  i1170.speedParameter = i1171[12]
  i1170.speedParameterActive = !!i1171[13]
  i1170.tag = i1171[14]
  i1170.tagHash = i1171[15]
  i1170.writeDefaultValues = !!i1171[16]
  var i1173 = i1171[17]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 2, i1172, '')
  }
  i1170.behaviours = i1172
  var i1175 = i1171[18]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1175[i + 0]) );
  }
  i1170.transitions = i1174
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1181 = data
  i1180.fullPath = i1181[0]
  i1180.canTransitionToSelf = !!i1181[1]
  i1180.duration = i1181[2]
  i1180.exitTime = i1181[3]
  i1180.hasExitTime = !!i1181[4]
  i1180.hasFixedDuration = !!i1181[5]
  i1180.interruptionSource = i1181[6]
  i1180.offset = i1181[7]
  i1180.orderedInterruption = !!i1181[8]
  i1180.destinationStateId = i1181[9]
  i1180.isExit = !!i1181[10]
  i1180.mute = !!i1181[11]
  i1180.solo = !!i1181[12]
  var i1183 = i1181[13]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1183[i + 0]) );
  }
  i1180.conditions = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1187 = data
  i1186.mode = i1187[0]
  i1186.parameter = i1187[1]
  i1186.threshold = i1187[2]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1193 = data
  i1192.destinationStateId = i1193[0]
  i1192.isExit = !!i1193[1]
  i1192.mute = !!i1193[2]
  i1192.solo = !!i1193[3]
  var i1195 = i1193[4]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1195[i + 0]) );
  }
  i1192.conditions = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1199 = data
  i1198.defaultBool = !!i1199[0]
  i1198.defaultFloat = i1199[1]
  i1198.defaultInt = i1199[2]
  i1198.name = i1199[3]
  i1198.nameHash = i1199[4]
  i1198.type = i1199[5]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1201 = data
  i1200.name = i1201[0]
  request.r(i1201[1], i1201[2], 0, i1200, '_runtimeAnimatorController')
  var i1203 = i1201[3]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1200._originalAnimationClips = i1202
  var i1205 = i1201[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 2, i1204, '')
  }
  i1200._overrideAnimationClips = i1204
  var i1207 = i1201[5]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 2, i1206, '')
  }
  i1200._animationClips = i1206
  var i1209 = i1201[6]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('UnityEngine.AnimationClipPair', i1209[i + 0]) );
  }
  i1200._animationClipPairs = i1208
  return i1200
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'originalClip')
  request.r(i1215[2], i1215[3], 0, i1214, 'overrideClip')
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.bytes64 = i1217[1]
  i1216.data = i1217[2]
  return i1216
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1219 = data
  i1218.normalStyle = i1219[0]
  i1218.normalSpacingOffset = i1219[1]
  i1218.boldStyle = i1219[2]
  i1218.boldSpacing = i1219[3]
  i1218.italicStyle = i1219[4]
  i1218.tabSize = i1219[5]
  request.r(i1219[6], i1219[7], 0, i1218, 'atlas')
  i1218.m_SourceFontFileGUID = i1219[8]
  i1218.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1219[9], i1218.m_CreationSettings)
  request.r(i1219[10], i1219[11], 0, i1218, 'm_SourceFontFile')
  i1218.m_SourceFontFilePath = i1219[12]
  i1218.m_AtlasPopulationMode = i1219[13]
  i1218.InternalDynamicOS = !!i1219[14]
  var i1221 = i1219[15]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.Glyph', i1221[i + 0]));
  }
  i1218.m_GlyphTable = i1220
  var i1223 = i1219[16]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_Character', i1223[i + 0]));
  }
  i1218.m_CharacterTable = i1222
  var i1225 = i1219[17]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1218.m_AtlasTextures = i1224
  i1218.m_AtlasTextureIndex = i1219[18]
  i1218.m_IsMultiAtlasTexturesEnabled = !!i1219[19]
  i1218.m_GetFontFeatures = !!i1219[20]
  i1218.m_ClearDynamicDataOnBuild = !!i1219[21]
  i1218.m_AtlasWidth = i1219[22]
  i1218.m_AtlasHeight = i1219[23]
  i1218.m_AtlasPadding = i1219[24]
  i1218.m_AtlasRenderMode = i1219[25]
  var i1227 = i1219[26]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.GlyphRect', i1227[i + 0]));
  }
  i1218.m_UsedGlyphRects = i1226
  var i1229 = i1219[27]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.GlyphRect', i1229[i + 0]));
  }
  i1218.m_FreeGlyphRects = i1228
  i1218.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1219[28], i1218.m_FontFeatureTable)
  i1218.m_ShouldReimportFontFeatures = !!i1219[29]
  var i1231 = i1219[30]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1218.m_FallbackFontAssetTable = i1230
  var i1233 = i1219[31]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('TMPro.TMP_FontWeightPair', i1233[i + 0]) );
  }
  i1218.m_FontWeightTable = i1232
  var i1235 = i1219[32]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('TMPro.TMP_FontWeightPair', i1235[i + 0]) );
  }
  i1218.fontWeights = i1234
  i1218.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1219[33], i1218.m_fontInfo)
  var i1237 = i1219[34]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Glyph', i1237[i + 0]));
  }
  i1218.m_glyphInfoList = i1236
  i1218.m_KerningTable = request.d('TMPro.KerningTable', i1219[35], i1218.m_KerningTable)
  var i1239 = i1219[36]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1218.fallbackFontAssets = i1238
  i1218.m_Version = i1219[37]
  i1218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1219[38], i1218.m_FaceInfo)
  request.r(i1219[39], i1219[40], 0, i1218, 'm_Material')
  return i1218
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1241 = data
  i1240.sourceFontFileName = i1241[0]
  i1240.sourceFontFileGUID = i1241[1]
  i1240.faceIndex = i1241[2]
  i1240.pointSizeSamplingMode = i1241[3]
  i1240.pointSize = i1241[4]
  i1240.padding = i1241[5]
  i1240.paddingMode = i1241[6]
  i1240.packingMode = i1241[7]
  i1240.atlasWidth = i1241[8]
  i1240.atlasHeight = i1241[9]
  i1240.characterSetSelectionMode = i1241[10]
  i1240.characterSequence = i1241[11]
  i1240.referencedFontAssetGUID = i1241[12]
  i1240.referencedTextAssetGUID = i1241[13]
  i1240.fontStyle = i1241[14]
  i1240.fontStyleModifier = i1241[15]
  i1240.renderMode = i1241[16]
  i1240.includeFontFeatures = !!i1241[17]
  return i1240
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1245 = data
  i1244.m_Index = i1245[0]
  i1244.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1245[1], i1244.m_Metrics)
  i1244.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1245[2], i1244.m_GlyphRect)
  i1244.m_Scale = i1245[3]
  i1244.m_AtlasIndex = i1245[4]
  i1244.m_ClassDefinitionType = i1245[5]
  return i1244
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1247 = data
  i1246.m_Width = i1247[0]
  i1246.m_Height = i1247[1]
  i1246.m_HorizontalBearingX = i1247[2]
  i1246.m_HorizontalBearingY = i1247[3]
  i1246.m_HorizontalAdvance = i1247[4]
  return i1246
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1249 = data
  i1248.m_X = i1249[0]
  i1248.m_Y = i1249[1]
  i1248.m_Width = i1249[2]
  i1248.m_Height = i1249[3]
  return i1248
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Character' )
  var i1253 = data
  i1252.m_ElementType = i1253[0]
  i1252.m_Unicode = i1253[1]
  i1252.m_GlyphIndex = i1253[2]
  i1252.m_Scale = i1253[3]
  return i1252
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.MultipleSubstitutionRecord', i1261[i + 0]));
  }
  i1258.m_MultipleSubstitutionRecords = i1260
  var i1263 = i1259[1]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.LigatureSubstitutionRecord', i1263[i + 0]));
  }
  i1258.m_LigatureSubstitutionRecords = i1262
  var i1265 = i1259[2]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1265[i + 0]));
  }
  i1258.m_GlyphPairAdjustmentRecords = i1264
  var i1267 = i1259[3]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1267[i + 0]));
  }
  i1258.m_MarkToBaseAdjustmentRecords = i1266
  var i1269 = i1259[4]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1269[i + 0]));
  }
  i1258.m_MarkToMarkAdjustmentRecords = i1268
  return i1258
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1273 = data
  i1272.m_TargetGlyphID = i1273[0]
  i1272.m_SubstituteGlyphIDs = i1273[1]
  return i1272
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1277 = data
  i1276.m_ComponentGlyphIDs = i1277[0]
  i1276.m_LigatureGlyphID = i1277[1]
  return i1276
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1281 = data
  i1280.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1281[0], i1280.m_FirstAdjustmentRecord)
  i1280.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1281[1], i1280.m_SecondAdjustmentRecord)
  i1280.m_FeatureLookupFlags = i1281[2]
  return i1280
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1285 = data
  i1284.m_BaseGlyphID = i1285[0]
  i1284.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1285[1], i1284.m_BaseGlyphAnchorPoint)
  i1284.m_MarkGlyphID = i1285[2]
  i1284.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1285[3], i1284.m_MarkPositionAdjustment)
  return i1284
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1289 = data
  i1288.m_BaseMarkGlyphID = i1289[0]
  i1288.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1289[1], i1288.m_BaseMarkGlyphAnchorPoint)
  i1288.m_CombiningMarkGlyphID = i1289[2]
  i1288.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1289[3], i1288.m_CombiningMarkPositionAdjustment)
  return i1288
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'regularTypeface')
  request.r(i1295[2], i1295[3], 0, i1294, 'italicTypeface')
  return i1294
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1297 = data
  i1296.Name = i1297[0]
  i1296.PointSize = i1297[1]
  i1296.Scale = i1297[2]
  i1296.CharacterCount = i1297[3]
  i1296.LineHeight = i1297[4]
  i1296.Baseline = i1297[5]
  i1296.Ascender = i1297[6]
  i1296.CapHeight = i1297[7]
  i1296.Descender = i1297[8]
  i1296.CenterLine = i1297[9]
  i1296.SuperscriptOffset = i1297[10]
  i1296.SubscriptOffset = i1297[11]
  i1296.SubSize = i1297[12]
  i1296.Underline = i1297[13]
  i1296.UnderlineThickness = i1297[14]
  i1296.strikethrough = i1297[15]
  i1296.strikethroughThickness = i1297[16]
  i1296.TabWidth = i1297[17]
  i1296.Padding = i1297[18]
  i1296.AtlasWidth = i1297[19]
  i1296.AtlasHeight = i1297[20]
  return i1296
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1301 = data
  i1300.id = i1301[0]
  i1300.x = i1301[1]
  i1300.y = i1301[2]
  i1300.width = i1301[3]
  i1300.height = i1301[4]
  i1300.xOffset = i1301[5]
  i1300.yOffset = i1301[6]
  i1300.xAdvance = i1301[7]
  i1300.scale = i1301[8]
  return i1300
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.KerningTable' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.KerningPair', i1305[i + 0]));
  }
  i1302.kerningPairs = i1304
  return i1302
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.KerningPair' )
  var i1309 = data
  i1308.xOffset = i1309[0]
  i1308.m_FirstGlyph = i1309[1]
  i1308.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1309[2], i1308.m_FirstGlyphAdjustments)
  i1308.m_SecondGlyph = i1309[3]
  i1308.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1309[4], i1308.m_SecondGlyphAdjustments)
  i1308.m_IgnoreSpacingAdjustments = !!i1309[5]
  return i1308
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1311 = data
  i1310.m_FaceIndex = i1311[0]
  i1310.m_FamilyName = i1311[1]
  i1310.m_StyleName = i1311[2]
  i1310.m_PointSize = i1311[3]
  i1310.m_Scale = i1311[4]
  i1310.m_UnitsPerEM = i1311[5]
  i1310.m_LineHeight = i1311[6]
  i1310.m_AscentLine = i1311[7]
  i1310.m_CapLine = i1311[8]
  i1310.m_MeanLine = i1311[9]
  i1310.m_Baseline = i1311[10]
  i1310.m_DescentLine = i1311[11]
  i1310.m_SuperscriptOffset = i1311[12]
  i1310.m_SuperscriptSize = i1311[13]
  i1310.m_SubscriptOffset = i1311[14]
  i1310.m_SubscriptSize = i1311[15]
  i1310.m_UnderlineOffset = i1311[16]
  i1310.m_UnderlineThickness = i1311[17]
  i1310.m_StrikethroughOffset = i1311[18]
  i1310.m_StrikethroughThickness = i1311[19]
  i1310.m_TabWidth = i1311[20]
  return i1310
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1313 = data
  i1312.useSafeMode = !!i1313[0]
  i1312.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1313[1], i1312.safeModeOptions)
  i1312.timeScale = i1313[2]
  i1312.unscaledTimeScale = i1313[3]
  i1312.useSmoothDeltaTime = !!i1313[4]
  i1312.maxSmoothUnscaledTime = i1313[5]
  i1312.rewindCallbackMode = i1313[6]
  i1312.showUnityEditorReport = !!i1313[7]
  i1312.logBehaviour = i1313[8]
  i1312.drawGizmos = !!i1313[9]
  i1312.defaultRecyclable = !!i1313[10]
  i1312.defaultAutoPlay = i1313[11]
  i1312.defaultUpdateType = i1313[12]
  i1312.defaultTimeScaleIndependent = !!i1313[13]
  i1312.defaultEaseType = i1313[14]
  i1312.defaultEaseOvershootOrAmplitude = i1313[15]
  i1312.defaultEasePeriod = i1313[16]
  i1312.defaultAutoKill = !!i1313[17]
  i1312.defaultLoopType = i1313[18]
  i1312.debugMode = !!i1313[19]
  i1312.debugStoreTargetId = !!i1313[20]
  i1312.showPreviewPanel = !!i1313[21]
  i1312.storeSettingsLocation = i1313[22]
  i1312.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1313[23], i1312.modules)
  i1312.createASMDEF = !!i1313[24]
  i1312.showPlayingTweens = !!i1313[25]
  i1312.showPausedTweens = !!i1313[26]
  return i1312
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1314 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1315 = data
  i1314.logBehaviour = i1315[0]
  i1314.nestedTweenFailureBehaviour = i1315[1]
  return i1314
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1317 = data
  i1316.showPanel = !!i1317[0]
  i1316.audioEnabled = !!i1317[1]
  i1316.physicsEnabled = !!i1317[2]
  i1316.physics2DEnabled = !!i1317[3]
  i1316.spriteEnabled = !!i1317[4]
  i1316.uiEnabled = !!i1317[5]
  i1316.textMeshProEnabled = !!i1317[6]
  i1316.tk2DEnabled = !!i1317[7]
  i1316.deAudioEnabled = !!i1317[8]
  i1316.deUnityExtendedEnabled = !!i1317[9]
  i1316.epoOutlineEnabled = !!i1317[10]
  return i1316
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_Settings' )
  var i1319 = data
  i1318.assetVersion = i1319[0]
  i1318.m_TextWrappingMode = i1319[1]
  i1318.m_enableKerning = !!i1319[2]
  var i1321 = i1319[3]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(i1321[i + 0]);
  }
  i1318.m_ActiveFontFeatures = i1320
  i1318.m_enableExtraPadding = !!i1319[4]
  i1318.m_enableTintAllSprites = !!i1319[5]
  i1318.m_enableParseEscapeCharacters = !!i1319[6]
  i1318.m_EnableRaycastTarget = !!i1319[7]
  i1318.m_GetFontFeaturesAtRuntime = !!i1319[8]
  i1318.m_missingGlyphCharacter = i1319[9]
  i1318.m_ClearDynamicDataOnBuild = !!i1319[10]
  i1318.m_warningsDisabled = !!i1319[11]
  request.r(i1319[12], i1319[13], 0, i1318, 'm_defaultFontAsset')
  i1318.m_defaultFontAssetPath = i1319[14]
  i1318.m_defaultFontSize = i1319[15]
  i1318.m_defaultAutoSizeMinRatio = i1319[16]
  i1318.m_defaultAutoSizeMaxRatio = i1319[17]
  i1318.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1319[18], i1319[19] )
  i1318.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1319[20], i1319[21] )
  i1318.m_autoSizeTextContainer = !!i1319[22]
  i1318.m_IsTextObjectScaleStatic = !!i1319[23]
  var i1323 = i1319[24]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 1, i1322, '')
  }
  i1318.m_fallbackFontAssets = i1322
  i1318.m_matchMaterialPreset = !!i1319[25]
  i1318.m_HideSubTextObjects = !!i1319[26]
  request.r(i1319[27], i1319[28], 0, i1318, 'm_defaultSpriteAsset')
  i1318.m_defaultSpriteAssetPath = i1319[29]
  i1318.m_enableEmojiSupport = !!i1319[30]
  i1318.m_MissingCharacterSpriteUnicode = i1319[31]
  var i1325 = i1319[32]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1318.m_EmojiFallbackTextAssets = i1324
  i1318.m_defaultColorGradientPresetsPath = i1319[33]
  request.r(i1319[34], i1319[35], 0, i1318, 'm_defaultStyleSheet')
  i1318.m_StyleSheetsResourcePath = i1319[36]
  request.r(i1319[37], i1319[38], 0, i1318, 'm_leadingCharacters')
  request.r(i1319[39], i1319[40], 0, i1318, 'm_followingCharacters')
  i1318.m_UseModernHangulLineBreakingRules = !!i1319[41]
  return i1318
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'spriteSheet')
  var i1331 = i1329[2]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.TMP_Sprite', i1331[i + 0]));
  }
  i1328.spriteInfoList = i1330
  var i1333 = i1329[3]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1328.fallbackSpriteAssets = i1332
  var i1335 = i1329[4]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.TMP_SpriteCharacter', i1335[i + 0]));
  }
  i1328.m_SpriteCharacterTable = i1334
  var i1337 = i1329[5]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_SpriteGlyph', i1337[i + 0]));
  }
  i1328.m_GlyphTable = i1336
  i1328.m_Version = i1329[6]
  i1328.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1329[7], i1328.m_FaceInfo)
  request.r(i1329[8], i1329[9], 0, i1328, 'm_Material')
  return i1328
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.hashCode = i1341[1]
  i1340.unicode = i1341[2]
  i1340.pivot = new pc.Vec2( i1341[3], i1341[4] )
  request.r(i1341[5], i1341[6], 0, i1340, 'sprite')
  i1340.id = i1341[7]
  i1340.x = i1341[8]
  i1340.y = i1341[9]
  i1340.width = i1341[10]
  i1340.height = i1341[11]
  i1340.xOffset = i1341[12]
  i1340.yOffset = i1341[13]
  i1340.xAdvance = i1341[14]
  i1340.scale = i1341[15]
  return i1340
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1347 = data
  i1346.m_Name = i1347[0]
  i1346.m_ElementType = i1347[1]
  i1346.m_Unicode = i1347[2]
  i1346.m_GlyphIndex = i1347[3]
  i1346.m_Scale = i1347[4]
  return i1346
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'sprite')
  i1350.m_Index = i1351[2]
  i1350.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1351[3], i1350.m_Metrics)
  i1350.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1351[4], i1350.m_GlyphRect)
  i1350.m_Scale = i1351[5]
  i1350.m_AtlasIndex = i1351[6]
  i1350.m_ClassDefinitionType = i1351[7]
  return i1350
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.TMP_Style', i1355[i + 0]));
  }
  i1352.m_StyleList = i1354
  return i1352
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_Style' )
  var i1359 = data
  i1358.m_Name = i1359[0]
  i1358.m_HashCode = i1359[1]
  i1358.m_OpeningDefinition = i1359[2]
  i1358.m_ClosingDefinition = i1359[3]
  i1358.m_OpeningTagArray = i1359[4]
  i1358.m_ClosingTagArray = i1359[5]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1363[i + 0]) );
  }
  i1360.files = i1362
  i1360.componentToPrefabIds = i1361[1]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1367 = data
  i1366.path = i1367[0]
  request.r(i1367[1], i1367[2], 0, i1366, 'unityObject')
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1371[i + 0]) );
  }
  i1368.scriptsExecutionOrder = i1370
  var i1373 = i1369[1]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1373[i + 0]) );
  }
  i1368.sortingLayers = i1372
  var i1375 = i1369[2]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1375[i + 0]) );
  }
  i1368.cullingLayers = i1374
  i1368.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1369[3], i1368.timeSettings)
  i1368.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1369[4], i1368.physicsSettings)
  i1368.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1369[5], i1368.physics2DSettings)
  i1368.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1369[6], i1368.qualitySettings)
  i1368.enableRealtimeShadows = !!i1369[7]
  i1368.enableAutoInstancing = !!i1369[8]
  i1368.enableStaticBatching = !!i1369[9]
  i1368.enableDynamicBatching = !!i1369[10]
  i1368.usePreservativeDynamicBatching = !!i1369[11]
  i1368.lightmapEncodingQuality = i1369[12]
  i1368.desiredColorSpace = i1369[13]
  var i1377 = i1369[14]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( i1377[i + 0] );
  }
  i1368.allTags = i1376
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.value = i1381[1]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1385 = data
  i1384.id = i1385[0]
  i1384.name = i1385[1]
  i1384.value = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1389 = data
  i1388.id = i1389[0]
  i1388.name = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1391 = data
  i1390.fixedDeltaTime = i1391[0]
  i1390.maximumDeltaTime = i1391[1]
  i1390.timeScale = i1391[2]
  i1390.maximumParticleTimestep = i1391[3]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1393 = data
  i1392.gravity = new pc.Vec3( i1393[0], i1393[1], i1393[2] )
  i1392.defaultSolverIterations = i1393[3]
  i1392.bounceThreshold = i1393[4]
  i1392.autoSyncTransforms = !!i1393[5]
  i1392.autoSimulation = !!i1393[6]
  var i1395 = i1393[7]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1395[i + 0]) );
  }
  i1392.collisionMatrix = i1394
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.layerId = i1399[1]
  i1398.otherLayerId = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'material')
  i1400.gravity = new pc.Vec2( i1401[2], i1401[3] )
  i1400.positionIterations = i1401[4]
  i1400.velocityIterations = i1401[5]
  i1400.velocityThreshold = i1401[6]
  i1400.maxLinearCorrection = i1401[7]
  i1400.maxAngularCorrection = i1401[8]
  i1400.maxTranslationSpeed = i1401[9]
  i1400.maxRotationSpeed = i1401[10]
  i1400.baumgarteScale = i1401[11]
  i1400.baumgarteTOIScale = i1401[12]
  i1400.timeToSleep = i1401[13]
  i1400.linearSleepTolerance = i1401[14]
  i1400.angularSleepTolerance = i1401[15]
  i1400.defaultContactOffset = i1401[16]
  i1400.autoSimulation = !!i1401[17]
  i1400.queriesHitTriggers = !!i1401[18]
  i1400.queriesStartInColliders = !!i1401[19]
  i1400.callbacksOnDisable = !!i1401[20]
  i1400.reuseCollisionCallbacks = !!i1401[21]
  i1400.autoSyncTransforms = !!i1401[22]
  var i1403 = i1401[23]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1403[i + 0]) );
  }
  i1400.collisionMatrix = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.layerId = i1407[1]
  i1406.otherLayerId = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1409 = data
  var i1411 = i1409[0]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1411[i + 0]) );
  }
  i1408.qualityLevels = i1410
  var i1413 = i1409[1]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( i1413[i + 0] );
  }
  i1408.names = i1412
  i1408.shadows = i1409[2]
  i1408.anisotropicFiltering = i1409[3]
  i1408.antiAliasing = i1409[4]
  i1408.lodBias = i1409[5]
  i1408.shadowCascades = i1409[6]
  i1408.shadowDistance = i1409[7]
  i1408.shadowmaskMode = i1409[8]
  i1408.shadowProjection = i1409[9]
  i1408.shadowResolution = i1409[10]
  i1408.softParticles = !!i1409[11]
  i1408.softVegetation = !!i1409[12]
  i1408.activeColorSpace = i1409[13]
  i1408.desiredColorSpace = i1409[14]
  i1408.masterTextureLimit = i1409[15]
  i1408.maxQueuedFrames = i1409[16]
  i1408.particleRaycastBudget = i1409[17]
  i1408.pixelLightCount = i1409[18]
  i1408.realtimeReflectionProbes = !!i1409[19]
  i1408.shadowCascade2Split = i1409[20]
  i1408.shadowCascade4Split = new pc.Vec3( i1409[21], i1409[22], i1409[23] )
  i1408.streamingMipmapsActive = !!i1409[24]
  i1408.vSyncCount = i1409[25]
  i1408.asyncUploadBufferSize = i1409[26]
  i1408.asyncUploadTimeSlice = i1409[27]
  i1408.billboardsFaceCameraPosition = !!i1409[28]
  i1408.shadowNearPlaneOffset = i1409[29]
  i1408.streamingMipmapsMemoryBudget = i1409[30]
  i1408.maximumLODLevel = i1409[31]
  i1408.streamingMipmapsAddAllCameras = !!i1409[32]
  i1408.streamingMipmapsMaxLevelReduction = i1409[33]
  i1408.streamingMipmapsRenderersPerFrame = i1409[34]
  i1408.resolutionScalingFixedDPIFactor = i1409[35]
  i1408.streamingMipmapsMaxFileIORequests = i1409[36]
  i1408.currentQualityLevel = i1409[37]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1417 = data
  i1416.name = i1417[0]
  var i1419 = i1417[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1419[i + 0]) );
  }
  i1416.tos = i1418
  var i1421 = i1417[2]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1416.constant = i1420
  i1416.isValid = !!i1417[3]
  i1416.isHuman = !!i1417[4]
  i1416.hasRootMotion = !!i1417[5]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1425 = data
  i1424.hash = i1425[0]
  i1424.path = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1429 = data
  i1428.weight = i1429[0]
  i1428.vertices = i1429[1]
  i1428.normals = i1429[2]
  i1428.tangents = i1429[3]
  return i1428
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1431 = data
  i1430.m_GlyphIndex = i1431[0]
  i1430.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1431[1], i1430.m_GlyphValueRecord)
  return i1430
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1433 = data
  i1432.m_XCoordinate = i1433[0]
  i1432.m_YCoordinate = i1433[1]
  return i1432
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1434 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1435 = data
  i1434.m_XPositionAdjustment = i1435[0]
  i1434.m_YPositionAdjustment = i1435[1]
  return i1434
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1437 = data
  i1436.xPlacement = i1437[0]
  i1436.yPlacement = i1437[1]
  i1436.xAdvance = i1437[2]
  i1436.yAdvance = i1437[3]
  return i1436
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1439 = data
  i1438.m_XPlacement = i1439[0]
  i1438.m_YPlacement = i1439[1]
  i1438.m_XAdvance = i1439[2]
  i1438.m_YAdvance = i1439[3]
  return i1438
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[49],"77":[53],"78":[42],"79":[42],"80":[42],"81":[42],"82":[42],"83":[42],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[53],"99":[7],"100":[101],"102":[101],"20":[19],"103":[19],"104":[25,19],"105":[7],"106":[25,19],"107":[19],"108":[19],"109":[7,19],"30":[19,25],"110":[111],"112":[111],"113":[111],"114":[19],"115":[19],"22":[20],"26":[25,19],"116":[19],"21":[20],"117":[19],"118":[19],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"29":[19],"124":[19],"125":[25,19],"126":[19],"127":[19],"128":[19],"129":[19],"130":[25,19],"131":[19],"132":[16],"133":[16],"17":[16],"134":[16],"135":[53],"136":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.AnimatorOverrideController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","CharacterTrigger","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/14/2026 07:20:52";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SBFM_V06_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4702";

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

Deserializers.buildID = "d303abd4-f6d5-4452-9555-c864125740e4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

