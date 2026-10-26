var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointSpring' )
  var i743 = data
  i742.spring = i743[0]
  i742.damper = i743[1]
  i742.targetPosition = i743[2]
  return i742
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor' )
  var i745 = data
  i744.m_TargetVelocity = i745[0]
  i744.m_Force = i745[1]
  i744.m_FreeSpin = i745[2]
  return i744
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointLimits' )
  var i747 = data
  i746.m_Min = i747[0]
  i746.m_Max = i747[1]
  i746.m_Bounciness = i747[2]
  i746.m_BounceMinVelocity = i747[3]
  i746.m_ContactDistance = i747[4]
  i746.minBounce = i747[5]
  i746.maxBounce = i747[6]
  return i746
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointDrive' )
  var i749 = data
  i748.m_PositionSpring = i749[0]
  i748.m_PositionDamper = i749[1]
  i748.m_MaximumForce = i749[2]
  i748.m_UseAcceleration = i749[3]
  return i748
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i751 = data
  i750.m_Spring = i751[0]
  i750.m_Damper = i751[1]
  return i750
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i753 = data
  i752.m_Limit = i753[0]
  i752.m_Bounciness = i753[1]
  i752.m_ContactDistance = i753[2]
  return i752
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i755 = data
  i754.m_ExtremumSlip = i755[0]
  i754.m_ExtremumValue = i755[1]
  i754.m_AsymptoteSlip = i755[2]
  i754.m_AsymptoteValue = i755[3]
  i754.m_Stiffness = i755[4]
  return i754
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i757 = data
  i756.m_LowerAngle = i757[0]
  i756.m_UpperAngle = i757[1]
  return i756
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i759 = data
  i758.m_MotorSpeed = i759[0]
  i758.m_MaximumMotorTorque = i759[1]
  return i758
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i761 = data
  i760.m_DampingRatio = i761[0]
  i760.m_Frequency = i761[1]
  i760.m_Angle = i761[2]
  return i760
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i763 = data
  i762.m_LowerTranslation = i763[0]
  i762.m_UpperTranslation = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i765 = data
  i764.name = i765[0]
  i764.width = i765[1]
  i764.height = i765[2]
  i764.mipmapCount = i765[3]
  i764.anisoLevel = i765[4]
  i764.filterMode = i765[5]
  i764.hdr = !!i765[6]
  i764.format = i765[7]
  i764.wrapMode = i765[8]
  i764.alphaIsTransparency = !!i765[9]
  i764.alphaSource = i765[10]
  i764.graphicsFormat = i765[11]
  i764.sRGBTexture = !!i765[12]
  i764.desiredColorSpace = i765[13]
  i764.wrapU = i765[14]
  i764.wrapV = i765[15]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i766 = root || new pc.UnityMaterial()
  var i767 = data
  i766.name = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'shader')
  i766.renderQueue = i767[3]
  i766.enableInstancing = !!i767[4]
  var i769 = i767[5]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i769[i + 0]) );
  }
  i766.floatParameters = i768
  var i771 = i767[6]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i771[i + 0]) );
  }
  i766.colorParameters = i770
  var i773 = i767[7]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i773[i + 0]) );
  }
  i766.vectorParameters = i772
  var i775 = i767[8]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i775[i + 0]) );
  }
  i766.textureParameters = i774
  var i777 = i767[9]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i777[i + 0]) );
  }
  i766.materialFlags = i776
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i785 = data
  i784.name = i785[0]
  i784.value = new pc.Color(i785[1], i785[2], i785[3], i785[4])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i789 = data
  i788.name = i789[0]
  i788.value = new pc.Vec4( i789[1], i789[2], i789[3], i789[4] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i793 = data
  i792.name = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'value')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i797 = data
  i796.name = i797[0]
  i796.enabled = !!i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i799 = data
  i798.position = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.scale = new pc.Vec3( i799[3], i799[4], i799[5] )
  i798.rotation = new pc.Quat(i799[6], i799[7], i799[8], i799[9])
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'sharedMesh')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'additionalVertexStreams')
  i802.enabled = !!i803[2]
  request.r(i803[3], i803[4], 0, i802, 'sharedMaterial')
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sharedMaterials = i804
  i802.receiveShadows = !!i803[6]
  i802.shadowCastingMode = i803[7]
  i802.sortingLayerID = i803[8]
  i802.sortingOrder = i803[9]
  i802.lightmapIndex = i803[10]
  i802.lightmapSceneIndex = i803[11]
  i802.lightmapScaleOffset = new pc.Vec4( i803[12], i803[13], i803[14], i803[15] )
  i802.lightProbeUsage = i803[16]
  i802.reflectionProbeUsage = i803[17]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i809 = data
  i808.name = i809[0]
  i808.tagId = i809[1]
  i808.enabled = !!i809[2]
  i808.isStatic = !!i809[3]
  i808.layer = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i811 = data
  i810.name = i811[0]
  i810.halfPrecision = !!i811[1]
  i810.useSimplification = !!i811[2]
  i810.useUInt32IndexFormat = !!i811[3]
  i810.vertexCount = i811[4]
  i810.aabb = i811[5]
  var i813 = i811[6]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( !!i813[i + 0] );
  }
  i810.streams = i812
  i810.vertices = i811[7]
  var i815 = i811[8]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i815[i + 0]) );
  }
  i810.subMeshes = i814
  var i817 = i811[9]
  var i816 = []
  for(var i = 0; i < i817.length; i += 16) {
    i816.push( new pc.Mat4().setData(i817[i + 0], i817[i + 1], i817[i + 2], i817[i + 3],  i817[i + 4], i817[i + 5], i817[i + 6], i817[i + 7],  i817[i + 8], i817[i + 9], i817[i + 10], i817[i + 11],  i817[i + 12], i817[i + 13], i817[i + 14], i817[i + 15]) );
  }
  i810.bindposes = i816
  var i819 = i811[10]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i819[i + 0]) );
  }
  i810.blendShapes = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i825 = data
  i824.triangles = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i833[i + 0]) );
  }
  i830.frames = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'animatorController')
  request.r(i835[2], i835[3], 0, i834, 'avatar')
  i834.updateMode = i835[4]
  i834.hasTransformHierarchy = !!i835[5]
  i834.applyRootMotion = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.humanBones = i836
  i834.enabled = !!i835[8]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'clip')
  request.r(i841[2], i841[3], 0, i840, 'outputAudioMixerGroup')
  i840.playOnAwake = !!i841[4]
  i840.loop = !!i841[5]
  i840.time = i841[6]
  i840.volume = i841[7]
  i840.pitch = i841[8]
  i840.enabled = !!i841[9]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i843 = data
  i842.color = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  request.r(i843[4], i843[5], 0, i842, 'sprite')
  i842.flipX = !!i843[6]
  i842.flipY = !!i843[7]
  i842.drawMode = i843[8]
  i842.size = new pc.Vec2( i843[9], i843[10] )
  i842.tileMode = i843[11]
  i842.adaptiveModeThreshold = i843[12]
  i842.maskInteraction = i843[13]
  i842.spriteSortPoint = i843[14]
  i842.enabled = !!i843[15]
  request.r(i843[16], i843[17], 0, i842, 'sharedMaterial')
  var i845 = i843[18]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[19]
  i842.shadowCastingMode = i843[20]
  i842.sortingLayerID = i843[21]
  i842.sortingOrder = i843[22]
  i842.lightmapIndex = i843[23]
  i842.lightmapSceneIndex = i843[24]
  i842.lightmapScaleOffset = new pc.Vec4( i843[25], i843[26], i843[27], i843[28] )
  i842.lightProbeUsage = i843[29]
  i842.reflectionProbeUsage = i843[30]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i847 = data
  i846.name = i847[0]
  i846.atlasId = i847[1]
  i846.mipmapCount = i847[2]
  i846.hdr = !!i847[3]
  i846.size = i847[4]
  i846.anisoLevel = i847[5]
  i846.filterMode = i847[6]
  var i849 = i847[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 4) {
    i848.push( UnityEngine.Rect.MinMaxRect(i849[i + 0], i849[i + 1], i849[i + 2], i849[i + 3]) );
  }
  i846.rects = i848
  i846.wrapU = i847[8]
  i846.wrapV = i847[9]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i853 = data
  i852.name = i853[0]
  i852.index = i853[1]
  i852.startup = !!i853[2]
  return i852
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_FirstSelected')
  i854.m_sendNavigationEvents = !!i855[2]
  i854.m_DragThreshold = i855[3]
  return i854
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i857 = data
  i856.m_HorizontalAxis = i857[0]
  i856.m_VerticalAxis = i857[1]
  i856.m_SubmitButton = i857[2]
  i856.m_CancelButton = i857[3]
  i856.m_InputActionsPerSecond = i857[4]
  i856.m_RepeatDelay = i857[5]
  i856.m_ForceModuleActive = !!i857[6]
  i856.m_SendPointerHoverToParent = !!i857[7]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i859 = data
  i858.pivot = new pc.Vec2( i859[0], i859[1] )
  i858.anchorMin = new pc.Vec2( i859[2], i859[3] )
  i858.anchorMax = new pc.Vec2( i859[4], i859[5] )
  i858.sizeDelta = new pc.Vec2( i859[6], i859[7] )
  i858.anchoredPosition3D = new pc.Vec3( i859[8], i859[9], i859[10] )
  i858.rotation = new pc.Quat(i859[11], i859[12], i859[13], i859[14])
  i858.scale = new pc.Vec3( i859[15], i859[16], i859[17] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i861 = data
  i860.planeDistance = i861[0]
  i860.referencePixelsPerUnit = i861[1]
  i860.isFallbackOverlay = !!i861[2]
  i860.renderMode = i861[3]
  i860.renderOrder = i861[4]
  i860.sortingLayerName = i861[5]
  i860.sortingOrder = i861[6]
  i860.scaleFactor = i861[7]
  request.r(i861[8], i861[9], 0, i860, 'worldCamera')
  i860.overrideSorting = !!i861[10]
  i860.pixelPerfect = !!i861[11]
  i860.targetDisplay = i861[12]
  i860.overridePixelPerfect = !!i861[13]
  i860.enabled = !!i861[14]
  return i860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i863 = data
  i862.m_UiScaleMode = i863[0]
  i862.m_ReferencePixelsPerUnit = i863[1]
  i862.m_ScaleFactor = i863[2]
  i862.m_ReferenceResolution = new pc.Vec2( i863[3], i863[4] )
  i862.m_ScreenMatchMode = i863[5]
  i862.m_MatchWidthOrHeight = i863[6]
  i862.m_PhysicalUnit = i863[7]
  i862.m_FallbackScreenDPI = i863[8]
  i862.m_DefaultSpriteDPI = i863[9]
  i862.m_DynamicPixelsPerUnit = i863[10]
  i862.m_PresetInfoIsWorld = !!i863[11]
  return i862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i865 = data
  i864.m_IgnoreReversedGraphics = !!i865[0]
  i864.m_BlockingObjects = i865[1]
  i864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i865[2] )
  return i864
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i866 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i867 = data
  i866._referenceResolution = new pc.Vec2( i867[0], i867[1] )
  i866._portraitMatch = i867[2]
  i866._landscapeMatch = i867[3]
  i866._squareMatch = i867[4]
  i866._portraitAspectThreshold = i867[5]
  i866._landscapeAspectThreshold = i867[6]
  i866._aspectEpsilon = i867[7]
  return i866
}

Deserializers["Joystick"] = function (request, data, root) {
  var i868 = root || request.c( 'Joystick' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'background')
  request.r(i869[2], i869[3], 0, i868, 'joy')
  i868.deadZone = i869[4]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i871 = data
  i870.cullTransparentMesh = !!i871[0]
  return i870
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Image' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_Sprite')
  i872.m_Type = i873[2]
  i872.m_PreserveAspect = !!i873[3]
  i872.m_FillCenter = !!i873[4]
  i872.m_FillMethod = i873[5]
  i872.m_FillAmount = i873[6]
  i872.m_FillClockwise = !!i873[7]
  i872.m_FillOrigin = i873[8]
  i872.m_UseSpriteMesh = !!i873[9]
  i872.m_PixelsPerUnitMultiplier = i873[10]
  request.r(i873[11], i873[12], 0, i872, 'm_Material')
  i872.m_Maskable = !!i873[13]
  i872.m_Color = new pc.Color(i873[14], i873[15], i873[16], i873[17])
  i872.m_RaycastTarget = !!i873[18]
  i872.m_RaycastPadding = new pc.Vec4( i873[19], i873[20], i873[21], i873[22] )
  return i872
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i875 = data
  i874.m_hasFontAssetChanged = !!i875[0]
  request.r(i875[1], i875[2], 0, i874, 'm_baseMaterial')
  i874.m_maskOffset = new pc.Vec4( i875[3], i875[4], i875[5], i875[6] )
  i874.m_text = i875[7]
  i874.m_isRightToLeft = !!i875[8]
  request.r(i875[9], i875[10], 0, i874, 'm_fontAsset')
  request.r(i875[11], i875[12], 0, i874, 'm_sharedMaterial')
  var i877 = i875[13]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.m_fontSharedMaterials = i876
  request.r(i875[14], i875[15], 0, i874, 'm_fontMaterial')
  var i879 = i875[16]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i874.m_fontMaterials = i878
  i874.m_fontColor32 = UnityEngine.Color32.ConstructColor(i875[17], i875[18], i875[19], i875[20])
  i874.m_fontColor = new pc.Color(i875[21], i875[22], i875[23], i875[24])
  i874.m_enableVertexGradient = !!i875[25]
  i874.m_colorMode = i875[26]
  i874.m_fontColorGradient = request.d('TMPro.VertexGradient', i875[27], i874.m_fontColorGradient)
  request.r(i875[28], i875[29], 0, i874, 'm_fontColorGradientPreset')
  request.r(i875[30], i875[31], 0, i874, 'm_spriteAsset')
  i874.m_tintAllSprites = !!i875[32]
  request.r(i875[33], i875[34], 0, i874, 'm_StyleSheet')
  i874.m_TextStyleHashCode = i875[35]
  i874.m_overrideHtmlColors = !!i875[36]
  i874.m_faceColor = UnityEngine.Color32.ConstructColor(i875[37], i875[38], i875[39], i875[40])
  i874.m_fontSize = i875[41]
  i874.m_fontSizeBase = i875[42]
  i874.m_fontWeight = i875[43]
  i874.m_enableAutoSizing = !!i875[44]
  i874.m_fontSizeMin = i875[45]
  i874.m_fontSizeMax = i875[46]
  i874.m_fontStyle = i875[47]
  i874.m_HorizontalAlignment = i875[48]
  i874.m_VerticalAlignment = i875[49]
  i874.m_textAlignment = i875[50]
  i874.m_characterSpacing = i875[51]
  i874.m_wordSpacing = i875[52]
  i874.m_lineSpacing = i875[53]
  i874.m_lineSpacingMax = i875[54]
  i874.m_paragraphSpacing = i875[55]
  i874.m_charWidthMaxAdj = i875[56]
  i874.m_TextWrappingMode = i875[57]
  i874.m_wordWrappingRatios = i875[58]
  i874.m_overflowMode = i875[59]
  request.r(i875[60], i875[61], 0, i874, 'm_linkedTextComponent')
  request.r(i875[62], i875[63], 0, i874, 'parentLinkedComponent')
  i874.m_enableKerning = !!i875[64]
  var i881 = i875[65]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(i881[i + 0]);
  }
  i874.m_ActiveFontFeatures = i880
  i874.m_enableExtraPadding = !!i875[66]
  i874.checkPaddingRequired = !!i875[67]
  i874.m_isRichText = !!i875[68]
  i874.m_parseCtrlCharacters = !!i875[69]
  i874.m_isOrthographic = !!i875[70]
  i874.m_isCullingEnabled = !!i875[71]
  i874.m_horizontalMapping = i875[72]
  i874.m_verticalMapping = i875[73]
  i874.m_uvLineOffset = i875[74]
  i874.m_geometrySortingOrder = i875[75]
  i874.m_IsTextObjectScaleStatic = !!i875[76]
  i874.m_VertexBufferAutoSizeReduction = !!i875[77]
  i874.m_useMaxVisibleDescender = !!i875[78]
  i874.m_pageToDisplay = i875[79]
  i874.m_margin = new pc.Vec4( i875[80], i875[81], i875[82], i875[83] )
  i874.m_isUsingLegacyAnimationComponent = !!i875[84]
  i874.m_isVolumetricText = !!i875[85]
  request.r(i875[86], i875[87], 0, i874, 'm_Material')
  i874.m_EmojiFallbackSupport = !!i875[88]
  i874.m_Maskable = !!i875[89]
  i874.m_Color = new pc.Color(i875[90], i875[91], i875[92], i875[93])
  i874.m_RaycastTarget = !!i875[94]
  i874.m_RaycastPadding = new pc.Vec4( i875[95], i875[96], i875[97], i875[98] )
  return i874
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.VertexGradient' )
  var i883 = data
  i882.topLeft = new pc.Color(i883[0], i883[1], i883[2], i883[3])
  i882.topRight = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.bottomLeft = new pc.Color(i883[8], i883[9], i883[10], i883[11])
  i882.bottomRight = new pc.Color(i883[12], i883[13], i883[14], i883[15])
  return i882
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Button' )
  var i887 = data
  i886.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i887[0], i886.m_OnClick)
  i886.m_Navigation = request.d('UnityEngine.UI.Navigation', i887[1], i886.m_Navigation)
  i886.m_Transition = i887[2]
  i886.m_Colors = request.d('UnityEngine.UI.ColorBlock', i887[3], i886.m_Colors)
  i886.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i887[4], i886.m_SpriteState)
  i886.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i887[5], i886.m_AnimationTriggers)
  i886.m_Interactable = !!i887[6]
  request.r(i887[7], i887[8], 0, i886, 'm_TargetGraphic')
  return i886
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i889 = data
  i888.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i889[0], i888.m_PersistentCalls)
  return i888
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.Events.PersistentCall', i893[i + 0]));
  }
  i890.m_Calls = i892
  return i890
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_Target')
  i896.m_TargetAssemblyTypeName = i897[2]
  i896.m_MethodName = i897[3]
  i896.m_Mode = i897[4]
  i896.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i897[5], i896.m_Arguments)
  i896.m_CallState = i897[6]
  return i896
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i899 = data
  i898.m_Mode = i899[0]
  i898.m_WrapAround = !!i899[1]
  request.r(i899[2], i899[3], 0, i898, 'm_SelectOnUp')
  request.r(i899[4], i899[5], 0, i898, 'm_SelectOnDown')
  request.r(i899[6], i899[7], 0, i898, 'm_SelectOnLeft')
  request.r(i899[8], i899[9], 0, i898, 'm_SelectOnRight')
  return i898
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i901 = data
  i900.m_NormalColor = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.m_HighlightedColor = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.m_PressedColor = new pc.Color(i901[8], i901[9], i901[10], i901[11])
  i900.m_SelectedColor = new pc.Color(i901[12], i901[13], i901[14], i901[15])
  i900.m_DisabledColor = new pc.Color(i901[16], i901[17], i901[18], i901[19])
  i900.m_ColorMultiplier = i901[20]
  i900.m_FadeDuration = i901[21]
  return i900
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_HighlightedSprite')
  request.r(i903[2], i903[3], 0, i902, 'm_PressedSprite')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectedSprite')
  request.r(i903[6], i903[7], 0, i902, 'm_DisabledSprite')
  return i902
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i905 = data
  i904.m_NormalTrigger = i905[0]
  i904.m_HighlightedTrigger = i905[1]
  i904.m_PressedTrigger = i905[2]
  i904.m_SelectedTrigger = i905[3]
  i904.m_DisabledTrigger = i905[4]
  return i904
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i906 = root || request.c( 'JumpButton' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'button')
  return i906
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Mask' )
  var i909 = data
  i908.m_ShowMaskGraphic = !!i909[0]
  return i908
}

Deserializers["TutController"] = function (request, data, root) {
  var i910 = root || request.c( 'TutController' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'tutScene')
  request.r(i911[2], i911[3], 0, i910, 'startTut')
  request.r(i911[4], i911[5], 0, i910, 'playTut')
  request.r(i911[6], i911[7], 0, i910, 'farTut')
  request.r(i911[8], i911[9], 0, i910, 'failTut')
  request.r(i911[10], i911[11], 0, i910, 'joystickTutHand')
  request.r(i911[12], i911[13], 0, i910, 'joystickTutLabel')
  i910.joystickHandSwipeDistance = i911[14]
  i910.joystickHandSwipeDuration = i911[15]
  return i910
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i912 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i913 = data
  i912.targetIsSelf = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'targetGO')
  i912.tweenTargetIsTargetGO = !!i913[3]
  i912.delay = i913[4]
  i912.duration = i913[5]
  i912.easeType = i913[6]
  i912.easeCurve = new pc.AnimationCurve( { keys_flow: i913[7] } )
  i912.loopType = i913[8]
  i912.loops = i913[9]
  i912.id = i913[10]
  i912.isRelative = !!i913[11]
  i912.isFrom = !!i913[12]
  i912.isIndependentUpdate = !!i913[13]
  i912.autoKill = !!i913[14]
  i912.autoGenerate = !!i913[15]
  i912.isActive = !!i913[16]
  i912.isValid = !!i913[17]
  request.r(i913[18], i913[19], 0, i912, 'target')
  i912.animationType = i913[20]
  i912.targetType = i913[21]
  i912.forcedTargetType = i913[22]
  i912.autoPlay = !!i913[23]
  i912.useTargetAsV3 = !!i913[24]
  i912.endValueFloat = i913[25]
  i912.endValueV3 = new pc.Vec3( i913[26], i913[27], i913[28] )
  i912.endValueV2 = new pc.Vec2( i913[29], i913[30] )
  i912.endValueColor = new pc.Color(i913[31], i913[32], i913[33], i913[34])
  i912.endValueString = i913[35]
  i912.endValueRect = UnityEngine.Rect.MinMaxRect(i913[36], i913[37], i913[38], i913[39])
  request.r(i913[40], i913[41], 0, i912, 'endValueTransform')
  i912.optionalBool0 = !!i913[42]
  i912.optionalBool1 = !!i913[43]
  i912.optionalFloat0 = i913[44]
  i912.optionalInt0 = i913[45]
  i912.optionalRotationMode = i913[46]
  i912.optionalScrambleMode = i913[47]
  i912.optionalShakeRandomnessMode = i913[48]
  i912.optionalString = i913[49]
  i912.updateType = i913[50]
  i912.isSpeedBased = !!i913[51]
  i912.hasOnStart = !!i913[52]
  i912.hasOnPlay = !!i913[53]
  i912.hasOnUpdate = !!i913[54]
  i912.hasOnStepComplete = !!i913[55]
  i912.hasOnComplete = !!i913[56]
  i912.hasOnTweenCreated = !!i913[57]
  i912.hasOnRewind = !!i913[58]
  i912.onStart = request.d('UnityEngine.Events.UnityEvent', i913[59], i912.onStart)
  i912.onPlay = request.d('UnityEngine.Events.UnityEvent', i913[60], i912.onPlay)
  i912.onUpdate = request.d('UnityEngine.Events.UnityEvent', i913[61], i912.onUpdate)
  i912.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i913[62], i912.onStepComplete)
  i912.onComplete = request.d('UnityEngine.Events.UnityEvent', i913[63], i912.onComplete)
  i912.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i913[64], i912.onTweenCreated)
  i912.onRewind = request.d('UnityEngine.Events.UnityEvent', i913[65], i912.onRewind)
  return i912
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i915 = data
  i914.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i915[0], i914.m_PersistentCalls)
  return i914
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i916 = root || request.c( 'HideOnPointer' )
  var i917 = data
  i916.OnPointerDownEvent = request.d('System.Action', i917[0], i916.OnPointerDownEvent)
  return i916
}

Deserializers["System.Action"] = function (request, data, root) {
  var i918 = root || request.c( 'System.Action' )
  var i919 = data
  return i918
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i920 = root || request.c( 'MorphSelectionFlow' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('MorphSelectionFlow+Morph', i923[i + 0]) );
  }
  i920.morphs = i922
  request.r(i921[1], i921[2], 0, i920, 'selectionPanel')
  request.r(i921[3], i921[4], 0, i920, 'previewPanel')
  request.r(i921[5], i921[6], 0, i920, 'backdrop')
  request.r(i921[7], i921[8], 0, i920, 'previewImage')
  i920.previewPortraitSize = new pc.Vec2( i921[9], i921[10] )
  request.r(i921[11], i921[12], 0, i920, 'aura')
  request.r(i921[13], i921[14], 0, i920, 'selectButton')
  request.r(i921[15], i921[16], 0, i920, 'unlockedMessage')
  request.r(i921[17], i921[18], 0, i920, 'revealCamera')
  request.r(i921[19], i921[20], 0, i920, 'spawnPoint')
  var i925 = i921[21]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i920.hideOnStart = i924
  var i927 = i921[22]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i920.disableOnStart = i926
  i920.orbitDuration = i921[23]
  i920.unlockedMessageDuration = i921[24]
  i920.auraSpeed = i921[25]
  request.r(i921[26], i921[27], 0, i920, 'auraSfx')
  request.r(i921[28], i921[29], 0, i920, 'orbitSfx')
  return i920
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i930 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'prefab')
  request.r(i931[2], i931[3], 0, i930, 'portrait')
  request.r(i931[4], i931[5], 0, i930, 'card')
  request.r(i931[6], i931[7], 0, i930, 'unlockedBadge')
  return i930
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i936 = root || request.c( 'MorphTitlePulse' )
  var i937 = data
  i936.scaleMultiplier = i937[0]
  i936.duration = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i939 = data
  i938.center = new pc.Vec3( i939[0], i939[1], i939[2] )
  i938.size = new pc.Vec3( i939[3], i939[4], i939[5] )
  i938.enabled = !!i939[6]
  i938.isTrigger = !!i939[7]
  request.r(i939[8], i939[9], 0, i938, 'material')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i941 = data
  i940.mass = i941[0]
  i940.drag = i941[1]
  i940.angularDrag = i941[2]
  i940.useGravity = !!i941[3]
  i940.isKinematic = !!i941[4]
  i940.constraints = i941[5]
  i940.maxAngularVelocity = i941[6]
  i940.collisionDetectionMode = i941[7]
  i940.interpolation = i941[8]
  return i940
}

Deserializers["Gift"] = function (request, data, root) {
  var i942 = root || request.c( 'Gift' )
  var i943 = data
  i942.collectDone = !!i943[0]
  var i945 = i943[1]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.hints = i944
  request.r(i943[2], i943[3], 0, i942, 'collectSound')
  request.r(i943[4], i943[5], 0, i942, 'collectEffect')
  request.r(i943[6], i943[7], 0, i942, 'arrow')
  return i942
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i948 = root || request.c( 'SoundHint' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'Sound')
  request.r(i949[2], i949[3], 0, i948, 'Source')
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'mesh')
  i950.meshCount = i951[2]
  i950.activeVertexStreamsCount = i951[3]
  i950.alignment = i951[4]
  i950.renderMode = i951[5]
  i950.sortMode = i951[6]
  i950.lengthScale = i951[7]
  i950.velocityScale = i951[8]
  i950.cameraVelocityScale = i951[9]
  i950.normalDirection = i951[10]
  i950.sortingFudge = i951[11]
  i950.minParticleSize = i951[12]
  i950.maxParticleSize = i951[13]
  i950.pivot = new pc.Vec3( i951[14], i951[15], i951[16] )
  request.r(i951[17], i951[18], 0, i950, 'trailMaterial')
  i950.applyActiveColorSpace = !!i951[19]
  i950.enabled = !!i951[20]
  request.r(i951[21], i951[22], 0, i950, 'sharedMaterial')
  var i953 = i951[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.sharedMaterials = i952
  i950.receiveShadows = !!i951[24]
  i950.shadowCastingMode = i951[25]
  i950.sortingLayerID = i951[26]
  i950.sortingOrder = i951[27]
  i950.lightmapIndex = i951[28]
  i950.lightmapSceneIndex = i951[29]
  i950.lightmapScaleOffset = new pc.Vec4( i951[30], i951[31], i951[32], i951[33] )
  i950.lightProbeUsage = i951[34]
  i950.reflectionProbeUsage = i951[35]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i955 = data
  i954.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i955[0], i954.main)
  i954.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i955[1], i954.colorBySpeed)
  i954.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i955[2], i954.colorOverLifetime)
  i954.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i955[3], i954.emission)
  i954.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i955[4], i954.rotationBySpeed)
  i954.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i955[5], i954.rotationOverLifetime)
  i954.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i955[6], i954.shape)
  i954.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i955[7], i954.sizeBySpeed)
  i954.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i955[8], i954.sizeOverLifetime)
  i954.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i955[9], i954.textureSheetAnimation)
  i954.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i955[10], i954.velocityOverLifetime)
  i954.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i955[11], i954.noise)
  i954.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i955[12], i954.inheritVelocity)
  i954.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i955[13], i954.forceOverLifetime)
  i954.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i955[14], i954.limitVelocityOverLifetime)
  i954.useAutoRandomSeed = !!i955[15]
  i954.randomSeed = i955[16]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemMain()
  var i957 = data
  i956.duration = i957[0]
  i956.loop = !!i957[1]
  i956.prewarm = !!i957[2]
  i956.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.startDelay)
  i956.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[4], i956.startLifetime)
  i956.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[5], i956.startSpeed)
  i956.startSize3D = !!i957[6]
  i956.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[7], i956.startSizeX)
  i956.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[8], i956.startSizeY)
  i956.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[9], i956.startSizeZ)
  i956.startRotation3D = !!i957[10]
  i956.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[11], i956.startRotationX)
  i956.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[12], i956.startRotationY)
  i956.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[13], i956.startRotationZ)
  i956.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i957[14], i956.startColor)
  i956.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[15], i956.gravityModifier)
  i956.simulationSpace = i957[16]
  request.r(i957[17], i957[18], 0, i956, 'customSimulationSpace')
  i956.simulationSpeed = i957[19]
  i956.useUnscaledTime = !!i957[20]
  i956.scalingMode = i957[21]
  i956.playOnAwake = !!i957[22]
  i956.maxParticles = i957[23]
  i956.emitterVelocityMode = i957[24]
  i956.stopAction = i957[25]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i958 = root || new pc.MinMaxCurve()
  var i959 = data
  i958.mode = i959[0]
  i958.curveMin = new pc.AnimationCurve( { keys_flow: i959[1] } )
  i958.curveMax = new pc.AnimationCurve( { keys_flow: i959[2] } )
  i958.curveMultiplier = i959[3]
  i958.constantMin = i959[4]
  i958.constantMax = i959[5]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i960 = root || new pc.MinMaxGradient()
  var i961 = data
  i960.mode = i961[0]
  i960.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i961[1], i960.gradientMin)
  i960.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i961[2], i960.gradientMax)
  i960.colorMin = new pc.Color(i961[3], i961[4], i961[5], i961[6])
  i960.colorMax = new pc.Color(i961[7], i961[8], i961[9], i961[10])
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i963 = data
  i962.mode = i963[0]
  var i965 = i963[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i965[i + 0]) );
  }
  i962.colorKeys = i964
  var i967 = i963[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i967[i + 0]) );
  }
  i962.alphaKeys = i966
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemColorBySpeed()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i969[1], i968.color)
  i968.range = new pc.Vec2( i969[2], i969[3] )
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i973 = data
  i972.color = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  i972.time = i973[4]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i977 = data
  i976.alpha = i977[0]
  i976.time = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemColorOverLifetime()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i979[1], i978.color)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemEmitter()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[1], i980.rateOverTime)
  i980.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.rateOverDistance)
  var i983 = i981[3]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i983[i + 0]) );
  }
  i980.bursts = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i986 = root || new pc.ParticleSystemBurst()
  var i987 = data
  i986.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[0], i986.count)
  i986.cycleCount = i987[1]
  i986.minCount = i987[2]
  i986.maxCount = i987[3]
  i986.repeatInterval = i987[4]
  i986.time = i987[5]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemRotationBySpeed()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[1], i988.x)
  i988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[2], i988.y)
  i988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[3], i988.z)
  i988.separateAxes = !!i989[4]
  i988.range = new pc.Vec2( i989[5], i989[6] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemRotationOverLifetime()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[1], i990.x)
  i990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.y)
  i990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[3], i990.z)
  i990.separateAxes = !!i991[4]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemShape()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.shapeType = i993[1]
  i992.randomDirectionAmount = i993[2]
  i992.sphericalDirectionAmount = i993[3]
  i992.randomPositionAmount = i993[4]
  i992.alignToDirection = !!i993[5]
  i992.radius = i993[6]
  i992.radiusMode = i993[7]
  i992.radiusSpread = i993[8]
  i992.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[9], i992.radiusSpeed)
  i992.radiusThickness = i993[10]
  i992.angle = i993[11]
  i992.length = i993[12]
  i992.boxThickness = new pc.Vec3( i993[13], i993[14], i993[15] )
  i992.meshShapeType = i993[16]
  request.r(i993[17], i993[18], 0, i992, 'mesh')
  request.r(i993[19], i993[20], 0, i992, 'meshRenderer')
  request.r(i993[21], i993[22], 0, i992, 'skinnedMeshRenderer')
  i992.useMeshMaterialIndex = !!i993[23]
  i992.meshMaterialIndex = i993[24]
  i992.useMeshColors = !!i993[25]
  i992.normalOffset = i993[26]
  i992.arc = i993[27]
  i992.arcMode = i993[28]
  i992.arcSpread = i993[29]
  i992.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[30], i992.arcSpeed)
  i992.donutRadius = i993[31]
  i992.position = new pc.Vec3( i993[32], i993[33], i993[34] )
  i992.rotation = new pc.Vec3( i993[35], i993[36], i993[37] )
  i992.scale = new pc.Vec3( i993[38], i993[39], i993[40] )
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i994 = root || new pc.ParticleSystemSizeBySpeed()
  var i995 = data
  i994.enabled = !!i995[0]
  i994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[1], i994.x)
  i994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[2], i994.y)
  i994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[3], i994.z)
  i994.separateAxes = !!i995[4]
  i994.range = new pc.Vec2( i995[5], i995[6] )
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i996 = root || new pc.ParticleSystemSizeOverLifetime()
  var i997 = data
  i996.enabled = !!i997[0]
  i996.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[1], i996.x)
  i996.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[2], i996.y)
  i996.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[3], i996.z)
  i996.separateAxes = !!i997[4]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i998 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i999 = data
  i998.enabled = !!i999[0]
  i998.mode = i999[1]
  i998.animation = i999[2]
  i998.numTilesX = i999[3]
  i998.numTilesY = i999[4]
  i998.useRandomRow = !!i999[5]
  i998.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[6], i998.frameOverTime)
  i998.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[7], i998.startFrame)
  i998.cycleCount = i999[8]
  i998.rowIndex = i999[9]
  i998.flipU = i999[10]
  i998.flipV = i999[11]
  i998.spriteCount = i999[12]
  var i1001 = i999[13]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.sprites = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1004 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[1], i1004.x)
  i1004.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[2], i1004.y)
  i1004.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[3], i1004.z)
  i1004.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[4], i1004.radial)
  i1004.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[5], i1004.speedModifier)
  i1004.space = i1005[6]
  i1004.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[7], i1004.orbitalX)
  i1004.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[8], i1004.orbitalY)
  i1004.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[9], i1004.orbitalZ)
  i1004.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[10], i1004.orbitalOffsetX)
  i1004.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[11], i1004.orbitalOffsetY)
  i1004.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[12], i1004.orbitalOffsetZ)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1006 = root || new pc.ParticleSystemNoise()
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.separateAxes = !!i1007[1]
  i1006.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[2], i1006.strengthX)
  i1006.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[3], i1006.strengthY)
  i1006.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[4], i1006.strengthZ)
  i1006.frequency = i1007[5]
  i1006.damping = !!i1007[6]
  i1006.octaveCount = i1007[7]
  i1006.octaveMultiplier = i1007[8]
  i1006.octaveScale = i1007[9]
  i1006.quality = i1007[10]
  i1006.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[11], i1006.scrollSpeed)
  i1006.scrollSpeedMultiplier = i1007[12]
  i1006.remapEnabled = !!i1007[13]
  i1006.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[14], i1006.remapX)
  i1006.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[15], i1006.remapY)
  i1006.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[16], i1006.remapZ)
  i1006.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[17], i1006.positionAmount)
  i1006.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[18], i1006.rotationAmount)
  i1006.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[19], i1006.sizeAmount)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1008 = root || new pc.ParticleSystemInheritVelocity()
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.mode = i1009[1]
  i1008.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[2], i1008.curve)
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1010 = root || new pc.ParticleSystemForceOverLifetime()
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[1], i1010.x)
  i1010.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[2], i1010.y)
  i1010.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[3], i1010.z)
  i1010.space = i1011[4]
  i1010.randomized = !!i1011[5]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1012 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[1], i1012.limit)
  i1012.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[2], i1012.limitX)
  i1012.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[3], i1012.limitY)
  i1012.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[4], i1012.limitZ)
  i1012.dampen = i1013[5]
  i1012.separateAxes = !!i1013[6]
  i1012.space = i1013[7]
  i1012.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[8], i1012.drag)
  i1012.multiplyDragByParticleSize = !!i1013[9]
  i1012.multiplyDragByParticleVelocity = !!i1013[10]
  return i1012
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i1014 = root || request.c( 'CharacterMotor' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'characterInput')
  request.r(i1015[2], i1015[3], 0, i1014, 'cameraYawTransform')
  request.r(i1015[4], i1015[5], 0, i1014, '_arrow')
  i1014.moveSpeed = i1015[6]
  i1014.jumpHeight = i1015[7]
  request.r(i1015[8], i1015[9], 0, i1014, 'groundChecker')
  i1014.gravity = i1015[10]
  i1014.enableStepClimb = !!i1015[11]
  i1014.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i1015[12] )
  i1014.maxStepHeight = i1015[13]
  i1014.stepCheckDistance = i1015[14]
  i1014.stepUpSpeed = i1015[15]
  i1014.stepUpAcceleration = i1015[16]
  i1014.minimumStepFacing = i1015[17]
  request.r(i1015[18], i1015[19], 0, i1014, 'controller')
  i1014.autoRun = !!i1015[20]
  return i1014
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i1016 = root || request.c( 'CharacterRotation' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'motor')
  i1016.rotationSpeed = i1017[2]
  return i1016
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i1018 = root || request.c( 'CharacterAnimation' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'animator')
  request.r(i1019[2], i1019[3], 0, i1018, 'motor')
  i1018.speedChangeRate = i1019[4]
  i1018.groundedGraceTime = i1019[5]
  return i1018
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i1020 = root || request.c( 'CharacterCollect' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'motor')
  request.r(i1021[2], i1021[3], 0, i1020, 'avatar')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1023 = data
  i1022.center = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.radius = i1023[3]
  i1022.height = i1023[4]
  i1022.direction = i1023[5]
  i1022.enabled = !!i1023[6]
  i1022.isTrigger = !!i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'material')
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sharedMesh')
  var i1027 = i1025[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1024.bones = i1026
  i1024.updateWhenOffscreen = !!i1025[3]
  i1024.localBounds = i1025[4]
  request.r(i1025[5], i1025[6], 0, i1024, 'rootBone')
  var i1029 = i1025[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1029[i + 0]) );
  }
  i1024.blendShapesWeights = i1028
  i1024.enabled = !!i1025[8]
  request.r(i1025[9], i1025[10], 0, i1024, 'sharedMaterial')
  var i1031 = i1025[11]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1024.sharedMaterials = i1030
  i1024.receiveShadows = !!i1025[12]
  i1024.shadowCastingMode = i1025[13]
  i1024.sortingLayerID = i1025[14]
  i1024.sortingOrder = i1025[15]
  i1024.lightmapIndex = i1025[16]
  i1024.lightmapSceneIndex = i1025[17]
  i1024.lightmapScaleOffset = new pc.Vec4( i1025[18], i1025[19], i1025[20], i1025[21] )
  i1024.lightProbeUsage = i1025[22]
  i1024.reflectionProbeUsage = i1025[23]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1035 = data
  i1034.weight = i1035[0]
  return i1034
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i1036 = root || request.c( 'GroundChecker' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'groundPoint')
  i1036.checkRadius = i1037[2]
  i1036.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1037[3] )
  return i1036
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1038 = root || request.c( 'CameraFollow' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'target')
  request.r(i1039[2], i1039[3], 0, i1038, 'pitchPivot')
  i1038.smoothTime = i1039[4]
  i1038.minimumPitch = i1039[5]
  i1038.maximumPitch = i1039[6]
  return i1038
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1040 = root || request.c( 'CameraLook' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'input')
  request.r(i1041[2], i1041[3], 0, i1040, 'yawPivot')
  request.r(i1041[4], i1041[5], 0, i1040, 'pitchPivot')
  i1040.minPitch = i1041[6]
  i1040.maxPitch = i1041[7]
  i1040.yaw = i1041[8]
  i1040.pitch = i1041[9]
  i1040.defaltYaw = i1041[10]
  i1040.defaltPitch = i1041[11]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1043 = data
  i1042.aspect = i1043[0]
  i1042.orthographic = !!i1043[1]
  i1042.orthographicSize = i1043[2]
  i1042.backgroundColor = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.nearClipPlane = i1043[7]
  i1042.farClipPlane = i1043[8]
  i1042.fieldOfView = i1043[9]
  i1042.depth = i1043[10]
  i1042.clearFlags = i1043[11]
  i1042.cullingMask = i1043[12]
  i1042.rect = i1043[13]
  request.r(i1043[14], i1043[15], 0, i1042, 'targetTexture')
  i1042.usePhysicalProperties = !!i1043[16]
  i1042.focalLength = i1043[17]
  i1042.sensorSize = new pc.Vec2( i1043[18], i1043[19] )
  i1042.lensShift = new pc.Vec2( i1043[20], i1043[21] )
  i1042.gateFit = i1043[22]
  i1042.commandBufferCount = i1043[23]
  i1042.cameraType = i1043[24]
  i1042.enabled = !!i1043[25]
  return i1042
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1044 = root || request.c( 'CharacterInput' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'joystick')
  request.r(i1045[2], i1045[3], 0, i1044, 'jumpButton')
  return i1044
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1046 = root || request.c( 'InputManager' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'worldCamera')
  i1046.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1047[2] )
  i1046.touchSensitivity = i1047[3]
  i1046.mouseSensitivity = i1047[4]
  i1046.dragThreshold = i1047[5]
  return i1046
}

Deserializers["GameController"] = function (request, data, root) {
  var i1048 = root || request.c( 'GameController' )
  var i1049 = data
  i1048.luna = i1049[0]
  i1048.applovin = !!i1049[1]
  i1048.countEvent = i1049[2]
  request.r(i1049[3], i1049[4], 0, i1048, 'morphSelection')
  var i1051 = i1049[5]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048.skiSections = i1050
  request.r(i1049[6], i1049[7], 0, i1048, 'playerMotor')
  request.r(i1049[8], i1049[9], 0, i1048, 'playerSpawn')
  request.r(i1049[10], i1049[11], 0, i1048, 'morphPosition')
  var i1053 = i1049[12]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1048.morphPrefabs = i1052
  request.r(i1049[13], i1049[14], 0, i1048, 'failUI')
  request.r(i1049[15], i1049[16], 0, i1048, 'endCard')
  request.r(i1049[17], i1049[18], 0, i1048, 'cameraYaw')
  i1048.fallConfirmationTime = i1049[19]
  return i1048
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1056 = root || request.c( 'AudioController' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'musicSource')
  request.r(i1057[2], i1057[3], 0, i1056, 'poolParent')
  i1056.startSize = i1057[4]
  return i1056
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1058 = root || request.c( 'LunaController' )
  var i1059 = data
  i1058.LimitTimePlay = !!i1059[0]
  i1058.TimePlay = i1059[1]
  var i1061 = i1059[2]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1058.images = i1060
  request.r(i1059[3], i1059[4], 0, i1058, 'CTA')
  request.r(i1059[5], i1059[6], 0, i1058, 'endCardRoot')
  request.r(i1059[7], i1059[8], 0, i1058, 'retryButtonLine')
  request.r(i1059[9], i1059[10], 0, i1058, 'ctaButtonLine')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1065 = data
  i1064.center = new pc.Vec3( i1065[0], i1065[1], i1065[2] )
  i1064.radius = i1065[3]
  i1064.enabled = !!i1065[4]
  i1064.isTrigger = !!i1065[5]
  request.r(i1065[6], i1065[7], 0, i1064, 'material')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1067 = data
  i1066.ambientIntensity = i1067[0]
  i1066.reflectionIntensity = i1067[1]
  i1066.ambientMode = i1067[2]
  i1066.ambientLight = new pc.Color(i1067[3], i1067[4], i1067[5], i1067[6])
  i1066.ambientSkyColor = new pc.Color(i1067[7], i1067[8], i1067[9], i1067[10])
  i1066.ambientGroundColor = new pc.Color(i1067[11], i1067[12], i1067[13], i1067[14])
  i1066.ambientEquatorColor = new pc.Color(i1067[15], i1067[16], i1067[17], i1067[18])
  i1066.fogColor = new pc.Color(i1067[19], i1067[20], i1067[21], i1067[22])
  i1066.fogEndDistance = i1067[23]
  i1066.fogStartDistance = i1067[24]
  i1066.fogDensity = i1067[25]
  i1066.fog = !!i1067[26]
  request.r(i1067[27], i1067[28], 0, i1066, 'skybox')
  i1066.fogMode = i1067[29]
  var i1069 = i1067[30]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1069[i + 0]) );
  }
  i1066.lightmaps = i1068
  i1066.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1067[31], i1066.lightProbes)
  i1066.lightmapsMode = i1067[32]
  i1066.mixedBakeMode = i1067[33]
  i1066.environmentLightingMode = i1067[34]
  i1066.ambientProbe = new pc.SphericalHarmonicsL2(i1067[35])
  request.r(i1067[36], i1067[37], 0, i1066, 'customReflection')
  request.r(i1067[38], i1067[39], 0, i1066, 'defaultReflection')
  i1066.defaultReflectionMode = i1067[40]
  i1066.defaultReflectionResolution = i1067[41]
  i1066.sunLightObjectId = i1067[42]
  i1066.pixelLightCount = i1067[43]
  i1066.defaultReflectionHDR = !!i1067[44]
  i1066.hasLightDataAsset = !!i1067[45]
  i1066.hasManualGenerate = !!i1067[46]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'lightmapColor')
  request.r(i1073[2], i1073[3], 0, i1072, 'lightmapDirection')
  request.r(i1073[4], i1073[5], 0, i1072, 'shadowMask')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1074 = root || new UnityEngine.LightProbes()
  var i1075 = data
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1085[i + 0]));
  }
  i1082.ShaderCompilationErrors = i1084
  i1082.name = i1083[1]
  i1082.guid = i1083[2]
  var i1087 = i1083[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.shaderDefinedKeywords = i1086
  var i1089 = i1083[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1089[i + 0]) );
  }
  i1082.passes = i1088
  var i1091 = i1083[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1091[i + 0]) );
  }
  i1082.usePasses = i1090
  var i1093 = i1083[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1093[i + 0]) );
  }
  i1082.defaultParameterValues = i1092
  request.r(i1083[7], i1083[8], 0, i1082, 'unityFallbackShader')
  i1082.readDepth = !!i1083[9]
  i1082.hasDepthOnlyPass = !!i1083[10]
  i1082.isCreatedByShaderGraph = !!i1083[11]
  i1082.disableBatching = !!i1083[12]
  i1082.compiled = !!i1083[13]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1097 = data
  i1096.shaderName = i1097[0]
  i1096.errorMessage = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1102 = root || new pc.UnityShaderPass()
  var i1103 = data
  i1102.id = i1103[0]
  i1102.subShaderIndex = i1103[1]
  i1102.name = i1103[2]
  i1102.passType = i1103[3]
  i1102.grabPassTextureName = i1103[4]
  i1102.usePass = !!i1103[5]
  i1102.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[6], i1102.zTest)
  i1102.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[7], i1102.zWrite)
  i1102.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[8], i1102.culling)
  i1102.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[9], i1102.blending)
  i1102.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[10], i1102.alphaBlending)
  i1102.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[11], i1102.colorWriteMask)
  i1102.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[12], i1102.offsetUnits)
  i1102.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[13], i1102.offsetFactor)
  i1102.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[14], i1102.stencilRef)
  i1102.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[15], i1102.stencilReadMask)
  i1102.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[16], i1102.stencilWriteMask)
  i1102.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[17], i1102.stencilOp)
  i1102.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[18], i1102.stencilOpFront)
  i1102.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[19], i1102.stencilOpBack)
  var i1105 = i1103[20]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1105[i + 0]) );
  }
  i1102.tags = i1104
  var i1107 = i1103[21]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.passDefinedKeywords = i1106
  var i1109 = i1103[22]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1109[i + 0]) );
  }
  i1102.passDefinedKeywordGroups = i1108
  var i1111 = i1103[23]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1111[i + 0]) );
  }
  i1102.variants = i1110
  var i1113 = i1103[24]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1113[i + 0]) );
  }
  i1102.excludedVariants = i1112
  i1102.hasDepthReader = !!i1103[25]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1115 = data
  i1114.val = i1115[0]
  i1114.name = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1117 = data
  i1116.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[0], i1116.src)
  i1116.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[1], i1116.dst)
  i1116.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[2], i1116.op)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1119 = data
  i1118.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[0], i1118.pass)
  i1118.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[1], i1118.fail)
  i1118.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[2], i1118.zFail)
  i1118.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[3], i1118.comp)
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.value = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.keywords = i1128
  i1126.hasDiscard = !!i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1133 = data
  i1132.passId = i1133[0]
  i1132.subShaderIndex = i1133[1]
  var i1135 = i1133[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1132.keywords = i1134
  i1132.vertexProgram = i1133[3]
  i1132.fragmentProgram = i1133[4]
  i1132.exportedForWebGl2 = !!i1133[5]
  i1132.readDepth = !!i1133[6]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'shader')
  i1138.pass = i1139[2]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.type = i1143[1]
  i1142.value = new pc.Vec4( i1143[2], i1143[3], i1143[4], i1143[5] )
  i1142.textureValue = i1143[6]
  i1142.shaderPropertyFlag = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1145 = data
  i1144.name = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'texture')
  i1144.aabb = i1145[3]
  i1144.vertices = i1145[4]
  i1144.triangles = i1145[5]
  i1144.textureRect = UnityEngine.Rect.MinMaxRect(i1145[6], i1145[7], i1145[8], i1145[9])
  i1144.packedRect = UnityEngine.Rect.MinMaxRect(i1145[10], i1145[11], i1145[12], i1145[13])
  i1144.border = new pc.Vec4( i1145[14], i1145[15], i1145[16], i1145[17] )
  i1144.transparency = i1145[18]
  i1144.bounds = i1145[19]
  i1144.pixelsPerUnit = i1145[20]
  i1144.textureWidth = i1145[21]
  i1144.textureHeight = i1145[22]
  i1144.nativeSize = new pc.Vec2( i1145[23], i1145[24] )
  i1144.pivot = new pc.Vec2( i1145[25], i1145[26] )
  i1144.textureRectOffset = new pc.Vec2( i1145[27], i1145[28] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1147 = data
  i1146.name = i1147[0]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.wrapMode = i1149[1]
  i1148.isLooping = !!i1149[2]
  i1148.length = i1149[3]
  var i1151 = i1149[4]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1151[i + 0]) );
  }
  i1148.curves = i1150
  var i1153 = i1149[5]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1153[i + 0]) );
  }
  i1148.events = i1152
  i1148.halfPrecision = !!i1149[6]
  i1148._frameRate = i1149[7]
  i1148.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1149[8], i1148.localBounds)
  i1148.hasMuscleCurves = !!i1149[9]
  var i1155 = i1149[10]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1148.clipMuscleConstant = i1154
  i1148.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1149[11], i1148.clipBindingConstant)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1159 = data
  i1158.path = i1159[0]
  i1158.hash = i1159[1]
  i1158.componentType = i1159[2]
  i1158.property = i1159[3]
  i1158.keys = i1159[4]
  var i1161 = i1159[5]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1161[i + 0]) );
  }
  i1158.objectReferenceKeys = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1165 = data
  i1164.time = i1165[0]
  request.r(i1165[1], i1165[2], 0, i1164, 'value')
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1169 = data
  i1168.functionName = i1169[0]
  i1168.floatParameter = i1169[1]
  i1168.intParameter = i1169[2]
  i1168.stringParameter = i1169[3]
  request.r(i1169[4], i1169[5], 0, i1168, 'objectReferenceParameter')
  i1168.time = i1169[6]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1171 = data
  i1170.center = new pc.Vec3( i1171[0], i1171[1], i1171[2] )
  i1170.extends = new pc.Vec3( i1171[3], i1171[4], i1171[5] )
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1174.genericBindings = i1176
  var i1179 = i1175[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1174.pptrCurveMapping = i1178
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.blendParameter = i1181[1]
  i1180.blendParameterY = i1181[2]
  i1180.blendType = i1181[3]
  var i1183 = i1181[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1183[i + 0]) );
  }
  i1180.children = i1182
  i1180.useAutomaticThresholds = !!i1181[5]
  i1180.minThreshold = i1181[6]
  i1180.maxThreshold = i1181[7]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'motion')
  i1186.threshold = i1187[2]
  i1186.position = new pc.Vec2( i1187[3], i1187[4] )
  i1186.timeScale = i1187[5]
  i1186.cycleOffset = i1187[6]
  i1186.directBlendParameter = i1187[7]
  i1186.mirror = !!i1187[8]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1189 = data
  i1188.name = i1189[0]
  var i1191 = i1189[1]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1191[i + 0]) );
  }
  i1188.layers = i1190
  var i1193 = i1189[2]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1193[i + 0]) );
  }
  i1188.parameters = i1192
  i1188.animationClips = i1189[3]
  i1188.avatarUnsupported = i1189[4]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.defaultWeight = i1197[1]
  i1196.blendingMode = i1197[2]
  i1196.avatarMask = i1197[3]
  i1196.syncedLayerIndex = i1197[4]
  i1196.syncedLayerAffectsTiming = !!i1197[5]
  i1196.syncedLayers = i1197[6]
  i1196.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1197[7], i1196.stateMachine)
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.name = i1199[1]
  i1198.path = i1199[2]
  var i1201 = i1199[3]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1201[i + 0]) );
  }
  i1198.states = i1200
  var i1203 = i1199[4]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1203[i + 0]) );
  }
  i1198.machines = i1202
  var i1205 = i1199[5]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1205[i + 0]) );
  }
  i1198.entryStateTransitions = i1204
  var i1207 = i1199[6]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1207[i + 0]) );
  }
  i1198.exitStateTransitions = i1206
  var i1209 = i1199[7]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1209[i + 0]) );
  }
  i1198.anyStateTransitions = i1208
  i1198.defaultStateId = i1199[8]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1213 = data
  i1212.id = i1213[0]
  i1212.name = i1213[1]
  i1212.cycleOffset = i1213[2]
  i1212.cycleOffsetParameter = i1213[3]
  i1212.cycleOffsetParameterActive = !!i1213[4]
  i1212.mirror = !!i1213[5]
  i1212.mirrorParameter = i1213[6]
  i1212.mirrorParameterActive = !!i1213[7]
  i1212.motionId = i1213[8]
  i1212.nameHash = i1213[9]
  i1212.fullPathHash = i1213[10]
  i1212.speed = i1213[11]
  i1212.speedParameter = i1213[12]
  i1212.speedParameterActive = !!i1213[13]
  i1212.tag = i1213[14]
  i1212.tagHash = i1213[15]
  i1212.writeDefaultValues = !!i1213[16]
  var i1215 = i1213[17]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1212.behaviours = i1214
  var i1217 = i1213[18]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1217[i + 0]) );
  }
  i1212.transitions = i1216
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1223 = data
  i1222.fullPath = i1223[0]
  i1222.canTransitionToSelf = !!i1223[1]
  i1222.duration = i1223[2]
  i1222.exitTime = i1223[3]
  i1222.hasExitTime = !!i1223[4]
  i1222.hasFixedDuration = !!i1223[5]
  i1222.interruptionSource = i1223[6]
  i1222.offset = i1223[7]
  i1222.orderedInterruption = !!i1223[8]
  i1222.destinationStateId = i1223[9]
  i1222.isExit = !!i1223[10]
  i1222.mute = !!i1223[11]
  i1222.solo = !!i1223[12]
  var i1225 = i1223[13]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1225[i + 0]) );
  }
  i1222.conditions = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1229 = data
  i1228.mode = i1229[0]
  i1228.parameter = i1229[1]
  i1228.threshold = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1235 = data
  i1234.destinationStateId = i1235[0]
  i1234.isExit = !!i1235[1]
  i1234.mute = !!i1235[2]
  i1234.solo = !!i1235[3]
  var i1237 = i1235[4]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1237[i + 0]) );
  }
  i1234.conditions = i1236
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1241 = data
  i1240.defaultBool = !!i1241[0]
  i1240.defaultFloat = i1241[1]
  i1240.defaultInt = i1241[2]
  i1240.name = i1241[3]
  i1240.nameHash = i1241[4]
  i1240.type = i1241[5]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1243 = data
  i1242.name = i1243[0]
  request.r(i1243[1], i1243[2], 0, i1242, '_runtimeAnimatorController')
  var i1245 = i1243[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 2, i1244, '')
  }
  i1242._originalAnimationClips = i1244
  var i1247 = i1243[4]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 2, i1246, '')
  }
  i1242._overrideAnimationClips = i1246
  var i1249 = i1243[5]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1242._animationClips = i1248
  var i1251 = i1243[6]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('UnityEngine.AnimationClipPair', i1251[i + 0]) );
  }
  i1242._animationClipPairs = i1250
  return i1242
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'originalClip')
  request.r(i1257[2], i1257[3], 0, i1256, 'overrideClip')
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.bytes64 = i1259[1]
  i1258.data = i1259[2]
  return i1258
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1261 = data
  i1260.normalStyle = i1261[0]
  i1260.normalSpacingOffset = i1261[1]
  i1260.boldStyle = i1261[2]
  i1260.boldSpacing = i1261[3]
  i1260.italicStyle = i1261[4]
  i1260.tabSize = i1261[5]
  request.r(i1261[6], i1261[7], 0, i1260, 'atlas')
  i1260.m_SourceFontFileGUID = i1261[8]
  i1260.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1261[9], i1260.m_CreationSettings)
  request.r(i1261[10], i1261[11], 0, i1260, 'm_SourceFontFile')
  i1260.m_SourceFontFilePath = i1261[12]
  i1260.m_AtlasPopulationMode = i1261[13]
  i1260.InternalDynamicOS = !!i1261[14]
  var i1263 = i1261[15]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('UnityEngine.TextCore.Glyph', i1263[i + 0]));
  }
  i1260.m_GlyphTable = i1262
  var i1265 = i1261[16]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_Character', i1265[i + 0]));
  }
  i1260.m_CharacterTable = i1264
  var i1267 = i1261[17]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 2, i1266, '')
  }
  i1260.m_AtlasTextures = i1266
  i1260.m_AtlasTextureIndex = i1261[18]
  i1260.m_IsMultiAtlasTexturesEnabled = !!i1261[19]
  i1260.m_GetFontFeatures = !!i1261[20]
  i1260.m_ClearDynamicDataOnBuild = !!i1261[21]
  i1260.m_AtlasWidth = i1261[22]
  i1260.m_AtlasHeight = i1261[23]
  i1260.m_AtlasPadding = i1261[24]
  i1260.m_AtlasRenderMode = i1261[25]
  var i1269 = i1261[26]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('UnityEngine.TextCore.GlyphRect', i1269[i + 0]));
  }
  i1260.m_UsedGlyphRects = i1268
  var i1271 = i1261[27]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('UnityEngine.TextCore.GlyphRect', i1271[i + 0]));
  }
  i1260.m_FreeGlyphRects = i1270
  i1260.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1261[28], i1260.m_FontFeatureTable)
  i1260.m_ShouldReimportFontFeatures = !!i1261[29]
  var i1273 = i1261[30]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1260.m_FallbackFontAssetTable = i1272
  var i1275 = i1261[31]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('TMPro.TMP_FontWeightPair', i1275[i + 0]) );
  }
  i1260.m_FontWeightTable = i1274
  var i1277 = i1261[32]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('TMPro.TMP_FontWeightPair', i1277[i + 0]) );
  }
  i1260.fontWeights = i1276
  i1260.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1261[33], i1260.m_fontInfo)
  var i1279 = i1261[34]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('TMPro.TMP_Glyph', i1279[i + 0]));
  }
  i1260.m_glyphInfoList = i1278
  i1260.m_KerningTable = request.d('TMPro.KerningTable', i1261[35], i1260.m_KerningTable)
  var i1281 = i1261[36]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1281.length; i += 2) {
  request.r(i1281[i + 0], i1281[i + 1], 1, i1280, '')
  }
  i1260.fallbackFontAssets = i1280
  i1260.m_Version = i1261[37]
  i1260.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1261[38], i1260.m_FaceInfo)
  request.r(i1261[39], i1261[40], 0, i1260, 'm_Material')
  return i1260
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1283 = data
  i1282.sourceFontFileName = i1283[0]
  i1282.sourceFontFileGUID = i1283[1]
  i1282.faceIndex = i1283[2]
  i1282.pointSizeSamplingMode = i1283[3]
  i1282.pointSize = i1283[4]
  i1282.padding = i1283[5]
  i1282.paddingMode = i1283[6]
  i1282.packingMode = i1283[7]
  i1282.atlasWidth = i1283[8]
  i1282.atlasHeight = i1283[9]
  i1282.characterSetSelectionMode = i1283[10]
  i1282.characterSequence = i1283[11]
  i1282.referencedFontAssetGUID = i1283[12]
  i1282.referencedTextAssetGUID = i1283[13]
  i1282.fontStyle = i1283[14]
  i1282.fontStyleModifier = i1283[15]
  i1282.renderMode = i1283[16]
  i1282.includeFontFeatures = !!i1283[17]
  return i1282
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1287 = data
  i1286.m_Index = i1287[0]
  i1286.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1287[1], i1286.m_Metrics)
  i1286.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1287[2], i1286.m_GlyphRect)
  i1286.m_Scale = i1287[3]
  i1286.m_AtlasIndex = i1287[4]
  i1286.m_ClassDefinitionType = i1287[5]
  return i1286
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1289 = data
  i1288.m_Width = i1289[0]
  i1288.m_Height = i1289[1]
  i1288.m_HorizontalBearingX = i1289[2]
  i1288.m_HorizontalBearingY = i1289[3]
  i1288.m_HorizontalAdvance = i1289[4]
  return i1288
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1291 = data
  i1290.m_X = i1291[0]
  i1290.m_Y = i1291[1]
  i1290.m_Width = i1291[2]
  i1290.m_Height = i1291[3]
  return i1290
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_Character' )
  var i1295 = data
  i1294.m_ElementType = i1295[0]
  i1294.m_Unicode = i1295[1]
  i1294.m_GlyphIndex = i1295[2]
  i1294.m_Scale = i1295[3]
  return i1294
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.MultipleSubstitutionRecord', i1303[i + 0]));
  }
  i1300.m_MultipleSubstitutionRecords = i1302
  var i1305 = i1301[1]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.LigatureSubstitutionRecord', i1305[i + 0]));
  }
  i1300.m_LigatureSubstitutionRecords = i1304
  var i1307 = i1301[2]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1307[i + 0]));
  }
  i1300.m_GlyphPairAdjustmentRecords = i1306
  var i1309 = i1301[3]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1309[i + 0]));
  }
  i1300.m_MarkToBaseAdjustmentRecords = i1308
  var i1311 = i1301[4]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1311[i + 0]));
  }
  i1300.m_MarkToMarkAdjustmentRecords = i1310
  return i1300
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1315 = data
  i1314.m_TargetGlyphID = i1315[0]
  i1314.m_SubstituteGlyphIDs = i1315[1]
  return i1314
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1319 = data
  i1318.m_ComponentGlyphIDs = i1319[0]
  i1318.m_LigatureGlyphID = i1319[1]
  return i1318
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1323 = data
  i1322.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1323[0], i1322.m_FirstAdjustmentRecord)
  i1322.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1323[1], i1322.m_SecondAdjustmentRecord)
  i1322.m_FeatureLookupFlags = i1323[2]
  return i1322
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1327 = data
  i1326.m_BaseGlyphID = i1327[0]
  i1326.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1327[1], i1326.m_BaseGlyphAnchorPoint)
  i1326.m_MarkGlyphID = i1327[2]
  i1326.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1327[3], i1326.m_MarkPositionAdjustment)
  return i1326
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1331 = data
  i1330.m_BaseMarkGlyphID = i1331[0]
  i1330.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1331[1], i1330.m_BaseMarkGlyphAnchorPoint)
  i1330.m_CombiningMarkGlyphID = i1331[2]
  i1330.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1331[3], i1330.m_CombiningMarkPositionAdjustment)
  return i1330
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'regularTypeface')
  request.r(i1337[2], i1337[3], 0, i1336, 'italicTypeface')
  return i1336
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1339 = data
  i1338.Name = i1339[0]
  i1338.PointSize = i1339[1]
  i1338.Scale = i1339[2]
  i1338.CharacterCount = i1339[3]
  i1338.LineHeight = i1339[4]
  i1338.Baseline = i1339[5]
  i1338.Ascender = i1339[6]
  i1338.CapHeight = i1339[7]
  i1338.Descender = i1339[8]
  i1338.CenterLine = i1339[9]
  i1338.SuperscriptOffset = i1339[10]
  i1338.SubscriptOffset = i1339[11]
  i1338.SubSize = i1339[12]
  i1338.Underline = i1339[13]
  i1338.UnderlineThickness = i1339[14]
  i1338.strikethrough = i1339[15]
  i1338.strikethroughThickness = i1339[16]
  i1338.TabWidth = i1339[17]
  i1338.Padding = i1339[18]
  i1338.AtlasWidth = i1339[19]
  i1338.AtlasHeight = i1339[20]
  return i1338
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.x = i1343[1]
  i1342.y = i1343[2]
  i1342.width = i1343[3]
  i1342.height = i1343[4]
  i1342.xOffset = i1343[5]
  i1342.yOffset = i1343[6]
  i1342.xAdvance = i1343[7]
  i1342.scale = i1343[8]
  return i1342
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.KerningTable' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.KerningPair', i1347[i + 0]));
  }
  i1344.kerningPairs = i1346
  return i1344
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.KerningPair' )
  var i1351 = data
  i1350.xOffset = i1351[0]
  i1350.m_FirstGlyph = i1351[1]
  i1350.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1351[2], i1350.m_FirstGlyphAdjustments)
  i1350.m_SecondGlyph = i1351[3]
  i1350.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1351[4], i1350.m_SecondGlyphAdjustments)
  i1350.m_IgnoreSpacingAdjustments = !!i1351[5]
  return i1350
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1353 = data
  i1352.m_FaceIndex = i1353[0]
  i1352.m_FamilyName = i1353[1]
  i1352.m_StyleName = i1353[2]
  i1352.m_PointSize = i1353[3]
  i1352.m_Scale = i1353[4]
  i1352.m_UnitsPerEM = i1353[5]
  i1352.m_LineHeight = i1353[6]
  i1352.m_AscentLine = i1353[7]
  i1352.m_CapLine = i1353[8]
  i1352.m_MeanLine = i1353[9]
  i1352.m_Baseline = i1353[10]
  i1352.m_DescentLine = i1353[11]
  i1352.m_SuperscriptOffset = i1353[12]
  i1352.m_SuperscriptSize = i1353[13]
  i1352.m_SubscriptOffset = i1353[14]
  i1352.m_SubscriptSize = i1353[15]
  i1352.m_UnderlineOffset = i1353[16]
  i1352.m_UnderlineThickness = i1353[17]
  i1352.m_StrikethroughOffset = i1353[18]
  i1352.m_StrikethroughThickness = i1353[19]
  i1352.m_TabWidth = i1353[20]
  return i1352
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1355 = data
  i1354.useSafeMode = !!i1355[0]
  i1354.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1355[1], i1354.safeModeOptions)
  i1354.timeScale = i1355[2]
  i1354.unscaledTimeScale = i1355[3]
  i1354.useSmoothDeltaTime = !!i1355[4]
  i1354.maxSmoothUnscaledTime = i1355[5]
  i1354.rewindCallbackMode = i1355[6]
  i1354.showUnityEditorReport = !!i1355[7]
  i1354.logBehaviour = i1355[8]
  i1354.drawGizmos = !!i1355[9]
  i1354.defaultRecyclable = !!i1355[10]
  i1354.defaultAutoPlay = i1355[11]
  i1354.defaultUpdateType = i1355[12]
  i1354.defaultTimeScaleIndependent = !!i1355[13]
  i1354.defaultEaseType = i1355[14]
  i1354.defaultEaseOvershootOrAmplitude = i1355[15]
  i1354.defaultEasePeriod = i1355[16]
  i1354.defaultAutoKill = !!i1355[17]
  i1354.defaultLoopType = i1355[18]
  i1354.debugMode = !!i1355[19]
  i1354.debugStoreTargetId = !!i1355[20]
  i1354.showPreviewPanel = !!i1355[21]
  i1354.storeSettingsLocation = i1355[22]
  i1354.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1355[23], i1354.modules)
  i1354.createASMDEF = !!i1355[24]
  i1354.showPlayingTweens = !!i1355[25]
  i1354.showPausedTweens = !!i1355[26]
  return i1354
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1356 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1357 = data
  i1356.logBehaviour = i1357[0]
  i1356.nestedTweenFailureBehaviour = i1357[1]
  return i1356
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1358 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1359 = data
  i1358.showPanel = !!i1359[0]
  i1358.audioEnabled = !!i1359[1]
  i1358.physicsEnabled = !!i1359[2]
  i1358.physics2DEnabled = !!i1359[3]
  i1358.spriteEnabled = !!i1359[4]
  i1358.uiEnabled = !!i1359[5]
  i1358.textMeshProEnabled = !!i1359[6]
  i1358.tk2DEnabled = !!i1359[7]
  i1358.deAudioEnabled = !!i1359[8]
  i1358.deUnityExtendedEnabled = !!i1359[9]
  i1358.epoOutlineEnabled = !!i1359[10]
  return i1358
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_Settings' )
  var i1361 = data
  i1360.assetVersion = i1361[0]
  i1360.m_TextWrappingMode = i1361[1]
  i1360.m_enableKerning = !!i1361[2]
  var i1363 = i1361[3]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(i1363[i + 0]);
  }
  i1360.m_ActiveFontFeatures = i1362
  i1360.m_enableExtraPadding = !!i1361[4]
  i1360.m_enableTintAllSprites = !!i1361[5]
  i1360.m_enableParseEscapeCharacters = !!i1361[6]
  i1360.m_EnableRaycastTarget = !!i1361[7]
  i1360.m_GetFontFeaturesAtRuntime = !!i1361[8]
  i1360.m_missingGlyphCharacter = i1361[9]
  i1360.m_ClearDynamicDataOnBuild = !!i1361[10]
  i1360.m_warningsDisabled = !!i1361[11]
  request.r(i1361[12], i1361[13], 0, i1360, 'm_defaultFontAsset')
  i1360.m_defaultFontAssetPath = i1361[14]
  i1360.m_defaultFontSize = i1361[15]
  i1360.m_defaultAutoSizeMinRatio = i1361[16]
  i1360.m_defaultAutoSizeMaxRatio = i1361[17]
  i1360.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1361[18], i1361[19] )
  i1360.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1361[20], i1361[21] )
  i1360.m_autoSizeTextContainer = !!i1361[22]
  i1360.m_IsTextObjectScaleStatic = !!i1361[23]
  var i1365 = i1361[24]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 1, i1364, '')
  }
  i1360.m_fallbackFontAssets = i1364
  i1360.m_matchMaterialPreset = !!i1361[25]
  i1360.m_HideSubTextObjects = !!i1361[26]
  request.r(i1361[27], i1361[28], 0, i1360, 'm_defaultSpriteAsset')
  i1360.m_defaultSpriteAssetPath = i1361[29]
  i1360.m_enableEmojiSupport = !!i1361[30]
  i1360.m_MissingCharacterSpriteUnicode = i1361[31]
  var i1367 = i1361[32]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 1, i1366, '')
  }
  i1360.m_EmojiFallbackTextAssets = i1366
  i1360.m_defaultColorGradientPresetsPath = i1361[33]
  request.r(i1361[34], i1361[35], 0, i1360, 'm_defaultStyleSheet')
  i1360.m_StyleSheetsResourcePath = i1361[36]
  request.r(i1361[37], i1361[38], 0, i1360, 'm_leadingCharacters')
  request.r(i1361[39], i1361[40], 0, i1360, 'm_followingCharacters')
  i1360.m_UseModernHangulLineBreakingRules = !!i1361[41]
  return i1360
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'spriteSheet')
  var i1373 = i1371[2]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.add(request.d('TMPro.TMP_Sprite', i1373[i + 0]));
  }
  i1370.spriteInfoList = i1372
  var i1375 = i1371[3]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1375.length; i += 2) {
  request.r(i1375[i + 0], i1375[i + 1], 1, i1374, '')
  }
  i1370.fallbackSpriteAssets = i1374
  var i1377 = i1371[4]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_SpriteCharacter', i1377[i + 0]));
  }
  i1370.m_SpriteCharacterTable = i1376
  var i1379 = i1371[5]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('TMPro.TMP_SpriteGlyph', i1379[i + 0]));
  }
  i1370.m_GlyphTable = i1378
  i1370.m_Version = i1371[6]
  i1370.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1371[7], i1370.m_FaceInfo)
  request.r(i1371[8], i1371[9], 0, i1370, 'm_Material')
  return i1370
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.hashCode = i1383[1]
  i1382.unicode = i1383[2]
  i1382.pivot = new pc.Vec2( i1383[3], i1383[4] )
  request.r(i1383[5], i1383[6], 0, i1382, 'sprite')
  i1382.id = i1383[7]
  i1382.x = i1383[8]
  i1382.y = i1383[9]
  i1382.width = i1383[10]
  i1382.height = i1383[11]
  i1382.xOffset = i1383[12]
  i1382.yOffset = i1383[13]
  i1382.xAdvance = i1383[14]
  i1382.scale = i1383[15]
  return i1382
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1389 = data
  i1388.m_Name = i1389[0]
  i1388.m_ElementType = i1389[1]
  i1388.m_Unicode = i1389[2]
  i1388.m_GlyphIndex = i1389[3]
  i1388.m_Scale = i1389[4]
  return i1388
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'sprite')
  i1392.m_Index = i1393[2]
  i1392.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1393[3], i1392.m_Metrics)
  i1392.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1393[4], i1392.m_GlyphRect)
  i1392.m_Scale = i1393[5]
  i1392.m_AtlasIndex = i1393[6]
  i1392.m_ClassDefinitionType = i1393[7]
  return i1392
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.add(request.d('TMPro.TMP_Style', i1397[i + 0]));
  }
  i1394.m_StyleList = i1396
  return i1394
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.TMP_Style' )
  var i1401 = data
  i1400.m_Name = i1401[0]
  i1400.m_HashCode = i1401[1]
  i1400.m_OpeningDefinition = i1401[2]
  i1400.m_ClosingDefinition = i1401[3]
  i1400.m_OpeningTagArray = i1401[4]
  i1400.m_ClosingTagArray = i1401[5]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1405[i + 0]) );
  }
  i1402.files = i1404
  i1402.componentToPrefabIds = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1409 = data
  i1408.path = i1409[0]
  request.r(i1409[1], i1409[2], 0, i1408, 'unityObject')
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1413[i + 0]) );
  }
  i1410.scriptsExecutionOrder = i1412
  var i1415 = i1411[1]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1415[i + 0]) );
  }
  i1410.sortingLayers = i1414
  var i1417 = i1411[2]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1417[i + 0]) );
  }
  i1410.cullingLayers = i1416
  i1410.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1411[3], i1410.timeSettings)
  i1410.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1411[4], i1410.physicsSettings)
  i1410.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1411[5], i1410.physics2DSettings)
  i1410.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1411[6], i1410.qualitySettings)
  i1410.enableRealtimeShadows = !!i1411[7]
  i1410.enableAutoInstancing = !!i1411[8]
  i1410.enableStaticBatching = !!i1411[9]
  i1410.enableDynamicBatching = !!i1411[10]
  i1410.usePreservativeDynamicBatching = !!i1411[11]
  i1410.lightmapEncodingQuality = i1411[12]
  i1410.desiredColorSpace = i1411[13]
  var i1419 = i1411[14]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1410.allTags = i1418
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.value = i1423[1]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1427 = data
  i1426.id = i1427[0]
  i1426.name = i1427[1]
  i1426.value = i1427[2]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1431 = data
  i1430.id = i1431[0]
  i1430.name = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1433 = data
  i1432.fixedDeltaTime = i1433[0]
  i1432.maximumDeltaTime = i1433[1]
  i1432.timeScale = i1433[2]
  i1432.maximumParticleTimestep = i1433[3]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1435 = data
  i1434.gravity = new pc.Vec3( i1435[0], i1435[1], i1435[2] )
  i1434.defaultSolverIterations = i1435[3]
  i1434.bounceThreshold = i1435[4]
  i1434.autoSyncTransforms = !!i1435[5]
  i1434.autoSimulation = !!i1435[6]
  var i1437 = i1435[7]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1437[i + 0]) );
  }
  i1434.collisionMatrix = i1436
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1441 = data
  i1440.enabled = !!i1441[0]
  i1440.layerId = i1441[1]
  i1440.otherLayerId = i1441[2]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1443 = data
  request.r(i1443[0], i1443[1], 0, i1442, 'material')
  i1442.gravity = new pc.Vec2( i1443[2], i1443[3] )
  i1442.positionIterations = i1443[4]
  i1442.velocityIterations = i1443[5]
  i1442.velocityThreshold = i1443[6]
  i1442.maxLinearCorrection = i1443[7]
  i1442.maxAngularCorrection = i1443[8]
  i1442.maxTranslationSpeed = i1443[9]
  i1442.maxRotationSpeed = i1443[10]
  i1442.baumgarteScale = i1443[11]
  i1442.baumgarteTOIScale = i1443[12]
  i1442.timeToSleep = i1443[13]
  i1442.linearSleepTolerance = i1443[14]
  i1442.angularSleepTolerance = i1443[15]
  i1442.defaultContactOffset = i1443[16]
  i1442.autoSimulation = !!i1443[17]
  i1442.queriesHitTriggers = !!i1443[18]
  i1442.queriesStartInColliders = !!i1443[19]
  i1442.callbacksOnDisable = !!i1443[20]
  i1442.reuseCollisionCallbacks = !!i1443[21]
  i1442.autoSyncTransforms = !!i1443[22]
  var i1445 = i1443[23]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1445[i + 0]) );
  }
  i1442.collisionMatrix = i1444
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.layerId = i1449[1]
  i1448.otherLayerId = i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1451 = data
  var i1453 = i1451[0]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1453[i + 0]) );
  }
  i1450.qualityLevels = i1452
  var i1455 = i1451[1]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1450.names = i1454
  i1450.shadows = i1451[2]
  i1450.anisotropicFiltering = i1451[3]
  i1450.antiAliasing = i1451[4]
  i1450.lodBias = i1451[5]
  i1450.shadowCascades = i1451[6]
  i1450.shadowDistance = i1451[7]
  i1450.shadowmaskMode = i1451[8]
  i1450.shadowProjection = i1451[9]
  i1450.shadowResolution = i1451[10]
  i1450.softParticles = !!i1451[11]
  i1450.softVegetation = !!i1451[12]
  i1450.activeColorSpace = i1451[13]
  i1450.desiredColorSpace = i1451[14]
  i1450.masterTextureLimit = i1451[15]
  i1450.maxQueuedFrames = i1451[16]
  i1450.particleRaycastBudget = i1451[17]
  i1450.pixelLightCount = i1451[18]
  i1450.realtimeReflectionProbes = !!i1451[19]
  i1450.shadowCascade2Split = i1451[20]
  i1450.shadowCascade4Split = new pc.Vec3( i1451[21], i1451[22], i1451[23] )
  i1450.streamingMipmapsActive = !!i1451[24]
  i1450.vSyncCount = i1451[25]
  i1450.asyncUploadBufferSize = i1451[26]
  i1450.asyncUploadTimeSlice = i1451[27]
  i1450.billboardsFaceCameraPosition = !!i1451[28]
  i1450.shadowNearPlaneOffset = i1451[29]
  i1450.streamingMipmapsMemoryBudget = i1451[30]
  i1450.maximumLODLevel = i1451[31]
  i1450.streamingMipmapsAddAllCameras = !!i1451[32]
  i1450.streamingMipmapsMaxLevelReduction = i1451[33]
  i1450.streamingMipmapsRenderersPerFrame = i1451[34]
  i1450.resolutionScalingFixedDPIFactor = i1451[35]
  i1450.streamingMipmapsMaxFileIORequests = i1451[36]
  i1450.currentQualityLevel = i1451[37]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1459 = data
  i1458.name = i1459[0]
  var i1461 = i1459[1]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1461[i + 0]) );
  }
  i1458.tos = i1460
  var i1463 = i1459[2]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1458.constant = i1462
  i1458.isValid = !!i1459[3]
  i1458.isHuman = !!i1459[4]
  i1458.hasRootMotion = !!i1459[5]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1467 = data
  i1466.hash = i1467[0]
  i1466.path = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1471 = data
  i1470.weight = i1471[0]
  i1470.vertices = i1471[1]
  i1470.normals = i1471[2]
  i1470.tangents = i1471[3]
  return i1470
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1473 = data
  request.r(i1473[0], i1473[1], 0, i1472, 'm_ObjectArgument')
  i1472.m_ObjectArgumentAssemblyTypeName = i1473[2]
  i1472.m_IntArgument = i1473[3]
  i1472.m_FloatArgument = i1473[4]
  i1472.m_StringArgument = i1473[5]
  i1472.m_BoolArgument = !!i1473[6]
  return i1472
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1475 = data
  i1474.m_GlyphIndex = i1475[0]
  i1474.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1475[1], i1474.m_GlyphValueRecord)
  return i1474
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1476 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1477 = data
  i1476.m_XCoordinate = i1477[0]
  i1476.m_YCoordinate = i1477[1]
  return i1476
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1478 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1479 = data
  i1478.m_XPositionAdjustment = i1479[0]
  i1478.m_YPositionAdjustment = i1479[1]
  return i1478
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1481 = data
  i1480.xPlacement = i1481[0]
  i1480.yPlacement = i1481[1]
  i1480.xAdvance = i1481[2]
  i1480.yAdvance = i1481[3]
  return i1480
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1483 = data
  i1482.m_XPlacement = i1483[0]
  i1482.m_YPlacement = i1483[1]
  i1482.m_XAdvance = i1483[2]
  i1482.m_YAdvance = i1483[3]
  return i1482
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[55],"77":[35],"78":[41],"79":[41],"80":[41],"81":[41],"82":[41],"83":[41],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[35],"99":[5],"100":[101],"102":[101],"17":[16],"103":[16],"21":[18],"104":[16],"105":[5,16],"25":[16,23],"106":[16],"107":[23,16],"108":[5],"109":[23,16],"110":[16],"111":[112],"113":[112],"114":[112],"115":[16],"116":[16],"19":[17],"24":[23,16],"117":[16],"18":[17],"118":[16],"119":[16],"120":[16],"121":[16],"122":[16],"123":[16],"124":[16],"29":[16],"125":[16],"126":[23,16],"127":[16],"128":[16],"129":[16],"130":[16],"131":[23,16],"132":[16],"133":[14],"134":[14],"15":[14],"135":[14],"136":[35],"137":[35]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","MorphSelectionFlow","UnityEngine.GameObject","UnityEngine.Camera","CameraFollow","CameraLook","UnityEngine.AudioClip","MorphTitlePulse","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.ParticleSystem","SoundHint","UnityEngine.ParticleSystemRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","CharacterCollect","UnityEngine.CapsuleCollider","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","InputManager","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.SphereCollider","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MorphSelectionLayout","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "48.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_HuyNQ_SBFM_V08_HoaiTT";

Deserializers.lunaAppID = "41535";

Deserializers.projectId = "1cbfda1e906e7db4a9fd3c53e24fceff";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1672";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4800";

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

Deserializers.buildID = "0a32c9ad-05d4-43c8-aa09-a454bcdf8bdd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

