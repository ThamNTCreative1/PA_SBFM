var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSpring' )
  var i747 = data
  i746.spring = i747[0]
  i746.damper = i747[1]
  i746.targetPosition = i747[2]
  return i746
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointMotor' )
  var i749 = data
  i748.m_TargetVelocity = i749[0]
  i748.m_Force = i749[1]
  i748.m_FreeSpin = i749[2]
  return i748
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointLimits' )
  var i751 = data
  i750.m_Min = i751[0]
  i750.m_Max = i751[1]
  i750.m_Bounciness = i751[2]
  i750.m_BounceMinVelocity = i751[3]
  i750.m_ContactDistance = i751[4]
  i750.minBounce = i751[5]
  i750.maxBounce = i751[6]
  return i750
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointDrive' )
  var i753 = data
  i752.m_PositionSpring = i753[0]
  i752.m_PositionDamper = i753[1]
  i752.m_MaximumForce = i753[2]
  i752.m_UseAcceleration = i753[3]
  return i752
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i755 = data
  i754.m_Spring = i755[0]
  i754.m_Damper = i755[1]
  return i754
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i757 = data
  i756.m_Limit = i757[0]
  i756.m_Bounciness = i757[1]
  i756.m_ContactDistance = i757[2]
  return i756
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i759 = data
  i758.m_ExtremumSlip = i759[0]
  i758.m_ExtremumValue = i759[1]
  i758.m_AsymptoteSlip = i759[2]
  i758.m_AsymptoteValue = i759[3]
  i758.m_Stiffness = i759[4]
  return i758
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i761 = data
  i760.m_LowerAngle = i761[0]
  i760.m_UpperAngle = i761[1]
  return i760
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i763 = data
  i762.m_MotorSpeed = i763[0]
  i762.m_MaximumMotorTorque = i763[1]
  return i762
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i765 = data
  i764.m_DampingRatio = i765[0]
  i764.m_Frequency = i765[1]
  i764.m_Angle = i765[2]
  return i764
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i767 = data
  i766.m_LowerTranslation = i767[0]
  i766.m_UpperTranslation = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i769 = data
  i768.name = i769[0]
  i768.width = i769[1]
  i768.height = i769[2]
  i768.mipmapCount = i769[3]
  i768.anisoLevel = i769[4]
  i768.filterMode = i769[5]
  i768.hdr = !!i769[6]
  i768.format = i769[7]
  i768.wrapMode = i769[8]
  i768.alphaIsTransparency = !!i769[9]
  i768.alphaSource = i769[10]
  i768.graphicsFormat = i769[11]
  i768.sRGBTexture = !!i769[12]
  i768.desiredColorSpace = i769[13]
  i768.wrapU = i769[14]
  i768.wrapV = i769[15]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i770 = root || new pc.UnityMaterial()
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'shader')
  i770.renderQueue = i771[3]
  i770.enableInstancing = !!i771[4]
  var i773 = i771[5]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i773[i + 0]) );
  }
  i770.floatParameters = i772
  var i775 = i771[6]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i775[i + 0]) );
  }
  i770.colorParameters = i774
  var i777 = i771[7]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i777[i + 0]) );
  }
  i770.vectorParameters = i776
  var i779 = i771[8]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i779[i + 0]) );
  }
  i770.textureParameters = i778
  var i781 = i771[9]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i781[i + 0]) );
  }
  i770.materialFlags = i780
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i785 = data
  i784.name = i785[0]
  i784.value = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i789 = data
  i788.name = i789[0]
  i788.value = new pc.Color(i789[1], i789[2], i789[3], i789[4])
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i793 = data
  i792.name = i793[0]
  i792.value = new pc.Vec4( i793[1], i793[2], i793[3], i793[4] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i797 = data
  i796.name = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'value')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i801 = data
  i800.name = i801[0]
  i800.enabled = !!i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i803 = data
  i802.position = new pc.Vec3( i803[0], i803[1], i803[2] )
  i802.scale = new pc.Vec3( i803[3], i803[4], i803[5] )
  i802.rotation = new pc.Quat(i803[6], i803[7], i803[8], i803[9])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'sharedMesh')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'additionalVertexStreams')
  i806.enabled = !!i807[2]
  request.r(i807[3], i807[4], 0, i806, 'sharedMaterial')
  var i809 = i807[5]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.sharedMaterials = i808
  i806.receiveShadows = !!i807[6]
  i806.shadowCastingMode = i807[7]
  i806.sortingLayerID = i807[8]
  i806.sortingOrder = i807[9]
  i806.lightmapIndex = i807[10]
  i806.lightmapSceneIndex = i807[11]
  i806.lightmapScaleOffset = new pc.Vec4( i807[12], i807[13], i807[14], i807[15] )
  i806.lightProbeUsage = i807[16]
  i806.reflectionProbeUsage = i807[17]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i813 = data
  i812.name = i813[0]
  i812.tagId = i813[1]
  i812.enabled = !!i813[2]
  i812.isStatic = !!i813[3]
  i812.layer = i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i815 = data
  i814.name = i815[0]
  i814.halfPrecision = !!i815[1]
  i814.useSimplification = !!i815[2]
  i814.useUInt32IndexFormat = !!i815[3]
  i814.vertexCount = i815[4]
  i814.aabb = i815[5]
  var i817 = i815[6]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( !!i817[i + 0] );
  }
  i814.streams = i816
  i814.vertices = i815[7]
  var i819 = i815[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i819[i + 0]) );
  }
  i814.subMeshes = i818
  var i821 = i815[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 16) {
    i820.push( new pc.Mat4().setData(i821[i + 0], i821[i + 1], i821[i + 2], i821[i + 3],  i821[i + 4], i821[i + 5], i821[i + 6], i821[i + 7],  i821[i + 8], i821[i + 9], i821[i + 10], i821[i + 11],  i821[i + 12], i821[i + 13], i821[i + 14], i821[i + 15]) );
  }
  i814.bindposes = i820
  var i823 = i815[10]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i823[i + 0]) );
  }
  i814.blendShapes = i822
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i829 = data
  i828.triangles = i829[0]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i835 = data
  i834.name = i835[0]
  var i837 = i835[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i837[i + 0]) );
  }
  i834.frames = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'animatorController')
  request.r(i839[2], i839[3], 0, i838, 'avatar')
  i838.updateMode = i839[4]
  i838.hasTransformHierarchy = !!i839[5]
  i838.applyRootMotion = !!i839[6]
  var i841 = i839[7]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.humanBones = i840
  i838.enabled = !!i839[8]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'clip')
  request.r(i845[2], i845[3], 0, i844, 'outputAudioMixerGroup')
  i844.playOnAwake = !!i845[4]
  i844.loop = !!i845[5]
  i844.time = i845[6]
  i844.volume = i845[7]
  i844.pitch = i845[8]
  i844.enabled = !!i845[9]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i847 = data
  i846.color = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  request.r(i847[4], i847[5], 0, i846, 'sprite')
  i846.flipX = !!i847[6]
  i846.flipY = !!i847[7]
  i846.drawMode = i847[8]
  i846.size = new pc.Vec2( i847[9], i847[10] )
  i846.tileMode = i847[11]
  i846.adaptiveModeThreshold = i847[12]
  i846.maskInteraction = i847[13]
  i846.spriteSortPoint = i847[14]
  i846.enabled = !!i847[15]
  request.r(i847[16], i847[17], 0, i846, 'sharedMaterial')
  var i849 = i847[18]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.sharedMaterials = i848
  i846.receiveShadows = !!i847[19]
  i846.shadowCastingMode = i847[20]
  i846.sortingLayerID = i847[21]
  i846.sortingOrder = i847[22]
  i846.lightmapIndex = i847[23]
  i846.lightmapSceneIndex = i847[24]
  i846.lightmapScaleOffset = new pc.Vec4( i847[25], i847[26], i847[27], i847[28] )
  i846.lightProbeUsage = i847[29]
  i846.reflectionProbeUsage = i847[30]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i851 = data
  i850.name = i851[0]
  i850.atlasId = i851[1]
  i850.mipmapCount = i851[2]
  i850.hdr = !!i851[3]
  i850.size = i851[4]
  i850.anisoLevel = i851[5]
  i850.filterMode = i851[6]
  var i853 = i851[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 4) {
    i852.push( UnityEngine.Rect.MinMaxRect(i853[i + 0], i853[i + 1], i853[i + 2], i853[i + 3]) );
  }
  i850.rects = i852
  i850.wrapU = i851[8]
  i850.wrapV = i851[9]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i857 = data
  i856.name = i857[0]
  i856.index = i857[1]
  i856.startup = !!i857[2]
  return i856
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_FirstSelected')
  i858.m_sendNavigationEvents = !!i859[2]
  i858.m_DragThreshold = i859[3]
  return i858
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i861 = data
  i860.m_HorizontalAxis = i861[0]
  i860.m_VerticalAxis = i861[1]
  i860.m_SubmitButton = i861[2]
  i860.m_CancelButton = i861[3]
  i860.m_InputActionsPerSecond = i861[4]
  i860.m_RepeatDelay = i861[5]
  i860.m_ForceModuleActive = !!i861[6]
  i860.m_SendPointerHoverToParent = !!i861[7]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i863 = data
  i862.pivot = new pc.Vec2( i863[0], i863[1] )
  i862.anchorMin = new pc.Vec2( i863[2], i863[3] )
  i862.anchorMax = new pc.Vec2( i863[4], i863[5] )
  i862.sizeDelta = new pc.Vec2( i863[6], i863[7] )
  i862.anchoredPosition3D = new pc.Vec3( i863[8], i863[9], i863[10] )
  i862.rotation = new pc.Quat(i863[11], i863[12], i863[13], i863[14])
  i862.scale = new pc.Vec3( i863[15], i863[16], i863[17] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i865 = data
  i864.planeDistance = i865[0]
  i864.referencePixelsPerUnit = i865[1]
  i864.isFallbackOverlay = !!i865[2]
  i864.renderMode = i865[3]
  i864.renderOrder = i865[4]
  i864.sortingLayerName = i865[5]
  i864.sortingOrder = i865[6]
  i864.scaleFactor = i865[7]
  request.r(i865[8], i865[9], 0, i864, 'worldCamera')
  i864.overrideSorting = !!i865[10]
  i864.pixelPerfect = !!i865[11]
  i864.targetDisplay = i865[12]
  i864.overridePixelPerfect = !!i865[13]
  i864.enabled = !!i865[14]
  return i864
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i867 = data
  i866.m_UiScaleMode = i867[0]
  i866.m_ReferencePixelsPerUnit = i867[1]
  i866.m_ScaleFactor = i867[2]
  i866.m_ReferenceResolution = new pc.Vec2( i867[3], i867[4] )
  i866.m_ScreenMatchMode = i867[5]
  i866.m_MatchWidthOrHeight = i867[6]
  i866.m_PhysicalUnit = i867[7]
  i866.m_FallbackScreenDPI = i867[8]
  i866.m_DefaultSpriteDPI = i867[9]
  i866.m_DynamicPixelsPerUnit = i867[10]
  i866.m_PresetInfoIsWorld = !!i867[11]
  return i866
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i869 = data
  i868.m_IgnoreReversedGraphics = !!i869[0]
  i868.m_BlockingObjects = i869[1]
  i868.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i869[2] )
  return i868
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i870 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i871 = data
  i870._referenceResolution = new pc.Vec2( i871[0], i871[1] )
  i870._portraitMatch = i871[2]
  i870._landscapeMatch = i871[3]
  i870._squareMatch = i871[4]
  i870._portraitAspectThreshold = i871[5]
  i870._landscapeAspectThreshold = i871[6]
  i870._aspectEpsilon = i871[7]
  return i870
}

Deserializers["Joystick"] = function (request, data, root) {
  var i872 = root || request.c( 'Joystick' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'background')
  request.r(i873[2], i873[3], 0, i872, 'joy')
  i872.deadZone = i873[4]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i875 = data
  i874.cullTransparentMesh = !!i875[0]
  return i874
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Image' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_Sprite')
  i876.m_Type = i877[2]
  i876.m_PreserveAspect = !!i877[3]
  i876.m_FillCenter = !!i877[4]
  i876.m_FillMethod = i877[5]
  i876.m_FillAmount = i877[6]
  i876.m_FillClockwise = !!i877[7]
  i876.m_FillOrigin = i877[8]
  i876.m_UseSpriteMesh = !!i877[9]
  i876.m_PixelsPerUnitMultiplier = i877[10]
  request.r(i877[11], i877[12], 0, i876, 'm_Material')
  i876.m_Maskable = !!i877[13]
  i876.m_Color = new pc.Color(i877[14], i877[15], i877[16], i877[17])
  i876.m_RaycastTarget = !!i877[18]
  i876.m_RaycastPadding = new pc.Vec4( i877[19], i877[20], i877[21], i877[22] )
  return i876
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i879 = data
  i878.m_hasFontAssetChanged = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'm_baseMaterial')
  i878.m_maskOffset = new pc.Vec4( i879[3], i879[4], i879[5], i879[6] )
  i878.m_text = i879[7]
  i878.m_isRightToLeft = !!i879[8]
  request.r(i879[9], i879[10], 0, i878, 'm_fontAsset')
  request.r(i879[11], i879[12], 0, i878, 'm_sharedMaterial')
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.m_fontSharedMaterials = i880
  request.r(i879[14], i879[15], 0, i878, 'm_fontMaterial')
  var i883 = i879[16]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i878.m_fontMaterials = i882
  i878.m_fontColor32 = UnityEngine.Color32.ConstructColor(i879[17], i879[18], i879[19], i879[20])
  i878.m_fontColor = new pc.Color(i879[21], i879[22], i879[23], i879[24])
  i878.m_enableVertexGradient = !!i879[25]
  i878.m_colorMode = i879[26]
  i878.m_fontColorGradient = request.d('TMPro.VertexGradient', i879[27], i878.m_fontColorGradient)
  request.r(i879[28], i879[29], 0, i878, 'm_fontColorGradientPreset')
  request.r(i879[30], i879[31], 0, i878, 'm_spriteAsset')
  i878.m_tintAllSprites = !!i879[32]
  request.r(i879[33], i879[34], 0, i878, 'm_StyleSheet')
  i878.m_TextStyleHashCode = i879[35]
  i878.m_overrideHtmlColors = !!i879[36]
  i878.m_faceColor = UnityEngine.Color32.ConstructColor(i879[37], i879[38], i879[39], i879[40])
  i878.m_fontSize = i879[41]
  i878.m_fontSizeBase = i879[42]
  i878.m_fontWeight = i879[43]
  i878.m_enableAutoSizing = !!i879[44]
  i878.m_fontSizeMin = i879[45]
  i878.m_fontSizeMax = i879[46]
  i878.m_fontStyle = i879[47]
  i878.m_HorizontalAlignment = i879[48]
  i878.m_VerticalAlignment = i879[49]
  i878.m_textAlignment = i879[50]
  i878.m_characterSpacing = i879[51]
  i878.m_wordSpacing = i879[52]
  i878.m_lineSpacing = i879[53]
  i878.m_lineSpacingMax = i879[54]
  i878.m_paragraphSpacing = i879[55]
  i878.m_charWidthMaxAdj = i879[56]
  i878.m_TextWrappingMode = i879[57]
  i878.m_wordWrappingRatios = i879[58]
  i878.m_overflowMode = i879[59]
  request.r(i879[60], i879[61], 0, i878, 'm_linkedTextComponent')
  request.r(i879[62], i879[63], 0, i878, 'parentLinkedComponent')
  i878.m_enableKerning = !!i879[64]
  var i885 = i879[65]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(i885[i + 0]);
  }
  i878.m_ActiveFontFeatures = i884
  i878.m_enableExtraPadding = !!i879[66]
  i878.checkPaddingRequired = !!i879[67]
  i878.m_isRichText = !!i879[68]
  i878.m_parseCtrlCharacters = !!i879[69]
  i878.m_isOrthographic = !!i879[70]
  i878.m_isCullingEnabled = !!i879[71]
  i878.m_horizontalMapping = i879[72]
  i878.m_verticalMapping = i879[73]
  i878.m_uvLineOffset = i879[74]
  i878.m_geometrySortingOrder = i879[75]
  i878.m_IsTextObjectScaleStatic = !!i879[76]
  i878.m_VertexBufferAutoSizeReduction = !!i879[77]
  i878.m_useMaxVisibleDescender = !!i879[78]
  i878.m_pageToDisplay = i879[79]
  i878.m_margin = new pc.Vec4( i879[80], i879[81], i879[82], i879[83] )
  i878.m_isUsingLegacyAnimationComponent = !!i879[84]
  i878.m_isVolumetricText = !!i879[85]
  request.r(i879[86], i879[87], 0, i878, 'm_Material')
  i878.m_EmojiFallbackSupport = !!i879[88]
  i878.m_Maskable = !!i879[89]
  i878.m_Color = new pc.Color(i879[90], i879[91], i879[92], i879[93])
  i878.m_RaycastTarget = !!i879[94]
  i878.m_RaycastPadding = new pc.Vec4( i879[95], i879[96], i879[97], i879[98] )
  return i878
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.VertexGradient' )
  var i887 = data
  i886.topLeft = new pc.Color(i887[0], i887[1], i887[2], i887[3])
  i886.topRight = new pc.Color(i887[4], i887[5], i887[6], i887[7])
  i886.bottomLeft = new pc.Color(i887[8], i887[9], i887[10], i887[11])
  i886.bottomRight = new pc.Color(i887[12], i887[13], i887[14], i887[15])
  return i886
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Button' )
  var i891 = data
  i890.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i891[0], i890.m_OnClick)
  i890.m_Navigation = request.d('UnityEngine.UI.Navigation', i891[1], i890.m_Navigation)
  i890.m_Transition = i891[2]
  i890.m_Colors = request.d('UnityEngine.UI.ColorBlock', i891[3], i890.m_Colors)
  i890.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i891[4], i890.m_SpriteState)
  i890.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i891[5], i890.m_AnimationTriggers)
  i890.m_Interactable = !!i891[6]
  request.r(i891[7], i891[8], 0, i890, 'm_TargetGraphic')
  return i890
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.Events.PersistentCall', i897[i + 0]));
  }
  i894.m_Calls = i896
  return i894
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Target')
  i900.m_TargetAssemblyTypeName = i901[2]
  i900.m_MethodName = i901[3]
  i900.m_Mode = i901[4]
  i900.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i901[5], i900.m_Arguments)
  i900.m_CallState = i901[6]
  return i900
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i903 = data
  i902.m_Mode = i903[0]
  i902.m_WrapAround = !!i903[1]
  request.r(i903[2], i903[3], 0, i902, 'm_SelectOnUp')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectOnDown')
  request.r(i903[6], i903[7], 0, i902, 'm_SelectOnLeft')
  request.r(i903[8], i903[9], 0, i902, 'm_SelectOnRight')
  return i902
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i905 = data
  i904.m_NormalColor = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.m_HighlightedColor = new pc.Color(i905[4], i905[5], i905[6], i905[7])
  i904.m_PressedColor = new pc.Color(i905[8], i905[9], i905[10], i905[11])
  i904.m_SelectedColor = new pc.Color(i905[12], i905[13], i905[14], i905[15])
  i904.m_DisabledColor = new pc.Color(i905[16], i905[17], i905[18], i905[19])
  i904.m_ColorMultiplier = i905[20]
  i904.m_FadeDuration = i905[21]
  return i904
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'm_HighlightedSprite')
  request.r(i907[2], i907[3], 0, i906, 'm_PressedSprite')
  request.r(i907[4], i907[5], 0, i906, 'm_SelectedSprite')
  request.r(i907[6], i907[7], 0, i906, 'm_DisabledSprite')
  return i906
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i909 = data
  i908.m_NormalTrigger = i909[0]
  i908.m_HighlightedTrigger = i909[1]
  i908.m_PressedTrigger = i909[2]
  i908.m_SelectedTrigger = i909[3]
  i908.m_DisabledTrigger = i909[4]
  return i908
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i910 = root || request.c( 'JumpButton' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'button')
  return i910
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Mask' )
  var i913 = data
  i912.m_ShowMaskGraphic = !!i913[0]
  return i912
}

Deserializers["TutController"] = function (request, data, root) {
  var i914 = root || request.c( 'TutController' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'tutScene')
  request.r(i915[2], i915[3], 0, i914, 'startTut')
  request.r(i915[4], i915[5], 0, i914, 'playTut')
  request.r(i915[6], i915[7], 0, i914, 'farTut')
  request.r(i915[8], i915[9], 0, i914, 'failTut')
  request.r(i915[10], i915[11], 0, i914, 'joystickTutHand')
  request.r(i915[12], i915[13], 0, i914, 'joystickTutLabel')
  i914.joystickHandSwipeDistance = i915[14]
  i914.joystickHandSwipeDuration = i915[15]
  return i914
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i916 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i917 = data
  i916.targetIsSelf = !!i917[0]
  request.r(i917[1], i917[2], 0, i916, 'targetGO')
  i916.tweenTargetIsTargetGO = !!i917[3]
  i916.delay = i917[4]
  i916.duration = i917[5]
  i916.easeType = i917[6]
  i916.easeCurve = new pc.AnimationCurve( { keys_flow: i917[7] } )
  i916.loopType = i917[8]
  i916.loops = i917[9]
  i916.id = i917[10]
  i916.isRelative = !!i917[11]
  i916.isFrom = !!i917[12]
  i916.isIndependentUpdate = !!i917[13]
  i916.autoKill = !!i917[14]
  i916.autoGenerate = !!i917[15]
  i916.isActive = !!i917[16]
  i916.isValid = !!i917[17]
  request.r(i917[18], i917[19], 0, i916, 'target')
  i916.animationType = i917[20]
  i916.targetType = i917[21]
  i916.forcedTargetType = i917[22]
  i916.autoPlay = !!i917[23]
  i916.useTargetAsV3 = !!i917[24]
  i916.endValueFloat = i917[25]
  i916.endValueV3 = new pc.Vec3( i917[26], i917[27], i917[28] )
  i916.endValueV2 = new pc.Vec2( i917[29], i917[30] )
  i916.endValueColor = new pc.Color(i917[31], i917[32], i917[33], i917[34])
  i916.endValueString = i917[35]
  i916.endValueRect = UnityEngine.Rect.MinMaxRect(i917[36], i917[37], i917[38], i917[39])
  request.r(i917[40], i917[41], 0, i916, 'endValueTransform')
  i916.optionalBool0 = !!i917[42]
  i916.optionalBool1 = !!i917[43]
  i916.optionalFloat0 = i917[44]
  i916.optionalInt0 = i917[45]
  i916.optionalRotationMode = i917[46]
  i916.optionalScrambleMode = i917[47]
  i916.optionalShakeRandomnessMode = i917[48]
  i916.optionalString = i917[49]
  i916.updateType = i917[50]
  i916.isSpeedBased = !!i917[51]
  i916.hasOnStart = !!i917[52]
  i916.hasOnPlay = !!i917[53]
  i916.hasOnUpdate = !!i917[54]
  i916.hasOnStepComplete = !!i917[55]
  i916.hasOnComplete = !!i917[56]
  i916.hasOnTweenCreated = !!i917[57]
  i916.hasOnRewind = !!i917[58]
  i916.onStart = request.d('UnityEngine.Events.UnityEvent', i917[59], i916.onStart)
  i916.onPlay = request.d('UnityEngine.Events.UnityEvent', i917[60], i916.onPlay)
  i916.onUpdate = request.d('UnityEngine.Events.UnityEvent', i917[61], i916.onUpdate)
  i916.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i917[62], i916.onStepComplete)
  i916.onComplete = request.d('UnityEngine.Events.UnityEvent', i917[63], i916.onComplete)
  i916.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i917[64], i916.onTweenCreated)
  i916.onRewind = request.d('UnityEngine.Events.UnityEvent', i917[65], i916.onRewind)
  return i916
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i919 = data
  i918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i919[0], i918.m_PersistentCalls)
  return i918
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i920 = root || request.c( 'HideOnPointer' )
  var i921 = data
  i920.OnPointerDownEvent = request.d('System.Action', i921[0], i920.OnPointerDownEvent)
  return i920
}

Deserializers["System.Action"] = function (request, data, root) {
  var i922 = root || request.c( 'System.Action' )
  var i923 = data
  return i922
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i924 = root || request.c( 'MorphSelectionFlow' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('MorphSelectionFlow+Morph', i927[i + 0]) );
  }
  i924.morphs = i926
  request.r(i925[1], i925[2], 0, i924, 'selectionPanel')
  request.r(i925[3], i925[4], 0, i924, 'previewPanel')
  request.r(i925[5], i925[6], 0, i924, 'backdrop')
  request.r(i925[7], i925[8], 0, i924, 'previewImage')
  i924.previewPortraitSize = new pc.Vec2( i925[9], i925[10] )
  request.r(i925[11], i925[12], 0, i924, 'aura')
  request.r(i925[13], i925[14], 0, i924, 'selectButton')
  request.r(i925[15], i925[16], 0, i924, 'unlockedMessage')
  request.r(i925[17], i925[18], 0, i924, 'revealCamera')
  request.r(i925[19], i925[20], 0, i924, 'spawnPoint')
  var i929 = i925[21]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i924.hideOnStart = i928
  var i931 = i925[22]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i924.disableOnStart = i930
  i924.orbitDuration = i925[23]
  i924.unlockedMessageDuration = i925[24]
  i924.auraSpeed = i925[25]
  request.r(i925[26], i925[27], 0, i924, 'auraSfx')
  request.r(i925[28], i925[29], 0, i924, 'orbitSfx')
  return i924
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i934 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'prefab')
  request.r(i935[2], i935[3], 0, i934, 'portrait')
  request.r(i935[4], i935[5], 0, i934, 'card')
  request.r(i935[6], i935[7], 0, i934, 'unlockedBadge')
  return i934
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i940 = root || request.c( 'MorphTitlePulse' )
  var i941 = data
  i940.scaleMultiplier = i941[0]
  i940.duration = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i943 = data
  i942.center = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.size = new pc.Vec3( i943[3], i943[4], i943[5] )
  i942.enabled = !!i943[6]
  i942.isTrigger = !!i943[7]
  request.r(i943[8], i943[9], 0, i942, 'material')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i945 = data
  i944.mass = i945[0]
  i944.drag = i945[1]
  i944.angularDrag = i945[2]
  i944.useGravity = !!i945[3]
  i944.isKinematic = !!i945[4]
  i944.constraints = i945[5]
  i944.maxAngularVelocity = i945[6]
  i944.collisionDetectionMode = i945[7]
  i944.interpolation = i945[8]
  return i944
}

Deserializers["Gift"] = function (request, data, root) {
  var i946 = root || request.c( 'Gift' )
  var i947 = data
  i946.collectDone = !!i947[0]
  var i949 = i947[1]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i946.hints = i948
  request.r(i947[2], i947[3], 0, i946, 'collectSound')
  request.r(i947[4], i947[5], 0, i946, 'collectEffect')
  request.r(i947[6], i947[7], 0, i946, 'arrow')
  return i946
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i952 = root || request.c( 'SoundHint' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'Sound')
  request.r(i953[2], i953[3], 0, i952, 'Source')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'mesh')
  i954.meshCount = i955[2]
  i954.activeVertexStreamsCount = i955[3]
  i954.alignment = i955[4]
  i954.renderMode = i955[5]
  i954.sortMode = i955[6]
  i954.lengthScale = i955[7]
  i954.velocityScale = i955[8]
  i954.cameraVelocityScale = i955[9]
  i954.normalDirection = i955[10]
  i954.sortingFudge = i955[11]
  i954.minParticleSize = i955[12]
  i954.maxParticleSize = i955[13]
  i954.pivot = new pc.Vec3( i955[14], i955[15], i955[16] )
  request.r(i955[17], i955[18], 0, i954, 'trailMaterial')
  i954.applyActiveColorSpace = !!i955[19]
  i954.enabled = !!i955[20]
  request.r(i955[21], i955[22], 0, i954, 'sharedMaterial')
  var i957 = i955[23]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sharedMaterials = i956
  i954.receiveShadows = !!i955[24]
  i954.shadowCastingMode = i955[25]
  i954.sortingLayerID = i955[26]
  i954.sortingOrder = i955[27]
  i954.lightmapIndex = i955[28]
  i954.lightmapSceneIndex = i955[29]
  i954.lightmapScaleOffset = new pc.Vec4( i955[30], i955[31], i955[32], i955[33] )
  i954.lightProbeUsage = i955[34]
  i954.reflectionProbeUsage = i955[35]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i959 = data
  i958.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i959[0], i958.main)
  i958.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i959[1], i958.colorBySpeed)
  i958.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i959[2], i958.colorOverLifetime)
  i958.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i959[3], i958.emission)
  i958.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i959[4], i958.rotationBySpeed)
  i958.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i959[5], i958.rotationOverLifetime)
  i958.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i959[6], i958.shape)
  i958.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i959[7], i958.sizeBySpeed)
  i958.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i959[8], i958.sizeOverLifetime)
  i958.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i959[9], i958.textureSheetAnimation)
  i958.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i959[10], i958.velocityOverLifetime)
  i958.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i959[11], i958.noise)
  i958.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i959[12], i958.inheritVelocity)
  i958.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i959[13], i958.forceOverLifetime)
  i958.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i959[14], i958.limitVelocityOverLifetime)
  i958.useAutoRandomSeed = !!i959[15]
  i958.randomSeed = i959[16]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemMain()
  var i961 = data
  i960.duration = i961[0]
  i960.loop = !!i961[1]
  i960.prewarm = !!i961[2]
  i960.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.startDelay)
  i960.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[4], i960.startLifetime)
  i960.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[5], i960.startSpeed)
  i960.startSize3D = !!i961[6]
  i960.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[7], i960.startSizeX)
  i960.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[8], i960.startSizeY)
  i960.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[9], i960.startSizeZ)
  i960.startRotation3D = !!i961[10]
  i960.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[11], i960.startRotationX)
  i960.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[12], i960.startRotationY)
  i960.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[13], i960.startRotationZ)
  i960.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i961[14], i960.startColor)
  i960.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[15], i960.gravityModifier)
  i960.simulationSpace = i961[16]
  request.r(i961[17], i961[18], 0, i960, 'customSimulationSpace')
  i960.simulationSpeed = i961[19]
  i960.useUnscaledTime = !!i961[20]
  i960.scalingMode = i961[21]
  i960.playOnAwake = !!i961[22]
  i960.maxParticles = i961[23]
  i960.emitterVelocityMode = i961[24]
  i960.stopAction = i961[25]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i962 = root || new pc.MinMaxCurve()
  var i963 = data
  i962.mode = i963[0]
  i962.curveMin = new pc.AnimationCurve( { keys_flow: i963[1] } )
  i962.curveMax = new pc.AnimationCurve( { keys_flow: i963[2] } )
  i962.curveMultiplier = i963[3]
  i962.constantMin = i963[4]
  i962.constantMax = i963[5]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i964 = root || new pc.MinMaxGradient()
  var i965 = data
  i964.mode = i965[0]
  i964.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i965[1], i964.gradientMin)
  i964.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i965[2], i964.gradientMax)
  i964.colorMin = new pc.Color(i965[3], i965[4], i965[5], i965[6])
  i964.colorMax = new pc.Color(i965[7], i965[8], i965[9], i965[10])
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i967 = data
  i966.mode = i967[0]
  var i969 = i967[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i969[i + 0]) );
  }
  i966.colorKeys = i968
  var i971 = i967[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i971[i + 0]) );
  }
  i966.alphaKeys = i970
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemColorBySpeed()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i973[1], i972.color)
  i972.range = new pc.Vec2( i973[2], i973[3] )
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i977 = data
  i976.color = new pc.Color(i977[0], i977[1], i977[2], i977[3])
  i976.time = i977[4]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i981 = data
  i980.alpha = i981[0]
  i980.time = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemColorOverLifetime()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i983[1], i982.color)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i984 = root || new pc.ParticleSystemEmitter()
  var i985 = data
  i984.enabled = !!i985[0]
  i984.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[1], i984.rateOverTime)
  i984.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[2], i984.rateOverDistance)
  var i987 = i985[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i987[i + 0]) );
  }
  i984.bursts = i986
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemBurst()
  var i991 = data
  i990.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[0], i990.count)
  i990.cycleCount = i991[1]
  i990.minCount = i991[2]
  i990.maxCount = i991[3]
  i990.repeatInterval = i991[4]
  i990.time = i991[5]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemRotationBySpeed()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[1], i992.x)
  i992.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[2], i992.y)
  i992.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[3], i992.z)
  i992.separateAxes = !!i993[4]
  i992.range = new pc.Vec2( i993[5], i993[6] )
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i994 = root || new pc.ParticleSystemRotationOverLifetime()
  var i995 = data
  i994.enabled = !!i995[0]
  i994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[1], i994.x)
  i994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[2], i994.y)
  i994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[3], i994.z)
  i994.separateAxes = !!i995[4]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i996 = root || new pc.ParticleSystemShape()
  var i997 = data
  i996.enabled = !!i997[0]
  i996.shapeType = i997[1]
  i996.randomDirectionAmount = i997[2]
  i996.sphericalDirectionAmount = i997[3]
  i996.randomPositionAmount = i997[4]
  i996.alignToDirection = !!i997[5]
  i996.radius = i997[6]
  i996.radiusMode = i997[7]
  i996.radiusSpread = i997[8]
  i996.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[9], i996.radiusSpeed)
  i996.radiusThickness = i997[10]
  i996.angle = i997[11]
  i996.length = i997[12]
  i996.boxThickness = new pc.Vec3( i997[13], i997[14], i997[15] )
  i996.meshShapeType = i997[16]
  request.r(i997[17], i997[18], 0, i996, 'mesh')
  request.r(i997[19], i997[20], 0, i996, 'meshRenderer')
  request.r(i997[21], i997[22], 0, i996, 'skinnedMeshRenderer')
  i996.useMeshMaterialIndex = !!i997[23]
  i996.meshMaterialIndex = i997[24]
  i996.useMeshColors = !!i997[25]
  i996.normalOffset = i997[26]
  i996.arc = i997[27]
  i996.arcMode = i997[28]
  i996.arcSpread = i997[29]
  i996.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[30], i996.arcSpeed)
  i996.donutRadius = i997[31]
  i996.position = new pc.Vec3( i997[32], i997[33], i997[34] )
  i996.rotation = new pc.Vec3( i997[35], i997[36], i997[37] )
  i996.scale = new pc.Vec3( i997[38], i997[39], i997[40] )
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i998 = root || new pc.ParticleSystemSizeBySpeed()
  var i999 = data
  i998.enabled = !!i999[0]
  i998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[1], i998.x)
  i998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[2], i998.y)
  i998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[3], i998.z)
  i998.separateAxes = !!i999[4]
  i998.range = new pc.Vec2( i999[5], i999[6] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1000 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1001 = data
  i1000.enabled = !!i1001[0]
  i1000.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[1], i1000.x)
  i1000.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[2], i1000.y)
  i1000.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[3], i1000.z)
  i1000.separateAxes = !!i1001[4]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1002 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.mode = i1003[1]
  i1002.animation = i1003[2]
  i1002.numTilesX = i1003[3]
  i1002.numTilesY = i1003[4]
  i1002.useRandomRow = !!i1003[5]
  i1002.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1003[6], i1002.frameOverTime)
  i1002.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1003[7], i1002.startFrame)
  i1002.cycleCount = i1003[8]
  i1002.rowIndex = i1003[9]
  i1002.flipU = i1003[10]
  i1002.flipV = i1003[11]
  i1002.spriteCount = i1003[12]
  var i1005 = i1003[13]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.sprites = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1008 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[1], i1008.x)
  i1008.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[2], i1008.y)
  i1008.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[3], i1008.z)
  i1008.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[4], i1008.radial)
  i1008.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[5], i1008.speedModifier)
  i1008.space = i1009[6]
  i1008.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[7], i1008.orbitalX)
  i1008.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[8], i1008.orbitalY)
  i1008.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[9], i1008.orbitalZ)
  i1008.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[10], i1008.orbitalOffsetX)
  i1008.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[11], i1008.orbitalOffsetY)
  i1008.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[12], i1008.orbitalOffsetZ)
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1010 = root || new pc.ParticleSystemNoise()
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.separateAxes = !!i1011[1]
  i1010.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[2], i1010.strengthX)
  i1010.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[3], i1010.strengthY)
  i1010.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[4], i1010.strengthZ)
  i1010.frequency = i1011[5]
  i1010.damping = !!i1011[6]
  i1010.octaveCount = i1011[7]
  i1010.octaveMultiplier = i1011[8]
  i1010.octaveScale = i1011[9]
  i1010.quality = i1011[10]
  i1010.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[11], i1010.scrollSpeed)
  i1010.scrollSpeedMultiplier = i1011[12]
  i1010.remapEnabled = !!i1011[13]
  i1010.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[14], i1010.remapX)
  i1010.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[15], i1010.remapY)
  i1010.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[16], i1010.remapZ)
  i1010.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[17], i1010.positionAmount)
  i1010.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[18], i1010.rotationAmount)
  i1010.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[19], i1010.sizeAmount)
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1012 = root || new pc.ParticleSystemInheritVelocity()
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.mode = i1013[1]
  i1012.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[2], i1012.curve)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1014 = root || new pc.ParticleSystemForceOverLifetime()
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[1], i1014.x)
  i1014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[2], i1014.y)
  i1014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[3], i1014.z)
  i1014.space = i1015[4]
  i1014.randomized = !!i1015[5]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1016 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[1], i1016.limit)
  i1016.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[2], i1016.limitX)
  i1016.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[3], i1016.limitY)
  i1016.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[4], i1016.limitZ)
  i1016.dampen = i1017[5]
  i1016.separateAxes = !!i1017[6]
  i1016.space = i1017[7]
  i1016.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[8], i1016.drag)
  i1016.multiplyDragByParticleSize = !!i1017[9]
  i1016.multiplyDragByParticleVelocity = !!i1017[10]
  return i1016
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i1018 = root || request.c( 'CharacterMotor' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'characterInput')
  request.r(i1019[2], i1019[3], 0, i1018, 'cameraYawTransform')
  request.r(i1019[4], i1019[5], 0, i1018, '_arrow')
  i1018.moveSpeed = i1019[6]
  i1018.jumpHeight = i1019[7]
  request.r(i1019[8], i1019[9], 0, i1018, 'groundChecker')
  i1018.gravity = i1019[10]
  i1018.enableStepClimb = !!i1019[11]
  i1018.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i1019[12] )
  i1018.maxStepHeight = i1019[13]
  i1018.stepCheckDistance = i1019[14]
  i1018.stepUpSpeed = i1019[15]
  i1018.stepUpAcceleration = i1019[16]
  i1018.minimumStepFacing = i1019[17]
  request.r(i1019[18], i1019[19], 0, i1018, 'controller')
  i1018.autoRun = !!i1019[20]
  return i1018
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i1020 = root || request.c( 'CharacterRotation' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'motor')
  i1020.rotationSpeed = i1021[2]
  return i1020
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i1022 = root || request.c( 'CharacterAnimation' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'animator')
  request.r(i1023[2], i1023[3], 0, i1022, 'motor')
  i1022.speedChangeRate = i1023[4]
  i1022.groundedGraceTime = i1023[5]
  return i1022
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i1024 = root || request.c( 'CharacterCollect' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'motor')
  request.r(i1025[2], i1025[3], 0, i1024, 'avatar')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1027 = data
  i1026.center = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.radius = i1027[3]
  i1026.height = i1027[4]
  i1026.direction = i1027[5]
  i1026.enabled = !!i1027[6]
  i1026.isTrigger = !!i1027[7]
  request.r(i1027[8], i1027[9], 0, i1026, 'material')
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'sharedMesh')
  var i1031 = i1029[2]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.bones = i1030
  i1028.updateWhenOffscreen = !!i1029[3]
  i1028.localBounds = i1029[4]
  request.r(i1029[5], i1029[6], 0, i1028, 'rootBone')
  var i1033 = i1029[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1033[i + 0]) );
  }
  i1028.blendShapesWeights = i1032
  i1028.enabled = !!i1029[8]
  request.r(i1029[9], i1029[10], 0, i1028, 'sharedMaterial')
  var i1035 = i1029[11]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1028.sharedMaterials = i1034
  i1028.receiveShadows = !!i1029[12]
  i1028.shadowCastingMode = i1029[13]
  i1028.sortingLayerID = i1029[14]
  i1028.sortingOrder = i1029[15]
  i1028.lightmapIndex = i1029[16]
  i1028.lightmapSceneIndex = i1029[17]
  i1028.lightmapScaleOffset = new pc.Vec4( i1029[18], i1029[19], i1029[20], i1029[21] )
  i1028.lightProbeUsage = i1029[22]
  i1028.reflectionProbeUsage = i1029[23]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1039 = data
  i1038.weight = i1039[0]
  return i1038
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i1040 = root || request.c( 'GroundChecker' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'groundPoint')
  i1040.checkRadius = i1041[2]
  i1040.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1041[3] )
  return i1040
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1042 = root || request.c( 'CameraFollow' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'target')
  request.r(i1043[2], i1043[3], 0, i1042, 'pitchPivot')
  i1042.smoothTime = i1043[4]
  i1042.minimumPitch = i1043[5]
  i1042.maximumPitch = i1043[6]
  return i1042
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1044 = root || request.c( 'CameraLook' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'input')
  request.r(i1045[2], i1045[3], 0, i1044, 'yawPivot')
  request.r(i1045[4], i1045[5], 0, i1044, 'pitchPivot')
  i1044.minPitch = i1045[6]
  i1044.maxPitch = i1045[7]
  i1044.yaw = i1045[8]
  i1044.pitch = i1045[9]
  i1044.defaltYaw = i1045[10]
  i1044.defaltPitch = i1045[11]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1047 = data
  i1046.aspect = i1047[0]
  i1046.orthographic = !!i1047[1]
  i1046.orthographicSize = i1047[2]
  i1046.backgroundColor = new pc.Color(i1047[3], i1047[4], i1047[5], i1047[6])
  i1046.nearClipPlane = i1047[7]
  i1046.farClipPlane = i1047[8]
  i1046.fieldOfView = i1047[9]
  i1046.depth = i1047[10]
  i1046.clearFlags = i1047[11]
  i1046.cullingMask = i1047[12]
  i1046.rect = i1047[13]
  request.r(i1047[14], i1047[15], 0, i1046, 'targetTexture')
  i1046.usePhysicalProperties = !!i1047[16]
  i1046.focalLength = i1047[17]
  i1046.sensorSize = new pc.Vec2( i1047[18], i1047[19] )
  i1046.lensShift = new pc.Vec2( i1047[20], i1047[21] )
  i1046.gateFit = i1047[22]
  i1046.commandBufferCount = i1047[23]
  i1046.cameraType = i1047[24]
  i1046.enabled = !!i1047[25]
  return i1046
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1048 = root || request.c( 'CharacterInput' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'joystick')
  request.r(i1049[2], i1049[3], 0, i1048, 'jumpButton')
  return i1048
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1050 = root || request.c( 'InputManager' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'worldCamera')
  i1050.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1051[2] )
  i1050.touchSensitivity = i1051[3]
  i1050.mouseSensitivity = i1051[4]
  i1050.dragThreshold = i1051[5]
  return i1050
}

Deserializers["GameController"] = function (request, data, root) {
  var i1052 = root || request.c( 'GameController' )
  var i1053 = data
  i1052.luna = i1053[0]
  i1052.applovin = !!i1053[1]
  i1052.countEvent = i1053[2]
  request.r(i1053[3], i1053[4], 0, i1052, 'morphSelection')
  var i1055 = i1053[5]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.skiSections = i1054
  var i1057 = i1053[6]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1052.safeLandingSurfaces = i1056
  request.r(i1053[7], i1053[8], 0, i1052, 'playerMotor')
  request.r(i1053[9], i1053[10], 0, i1052, 'playerSpawn')
  request.r(i1053[11], i1053[12], 0, i1052, 'morphPosition')
  var i1059 = i1053[13]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1052.morphPrefabs = i1058
  request.r(i1053[14], i1053[15], 0, i1052, 'failUI')
  request.r(i1053[16], i1053[17], 0, i1052, 'endCard')
  request.r(i1053[18], i1053[19], 0, i1052, 'cameraYaw')
  i1052.fallConfirmationTime = i1053[20]
  return i1052
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1064 = root || request.c( 'AudioController' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'musicSource')
  request.r(i1065[2], i1065[3], 0, i1064, 'poolParent')
  i1064.startSize = i1065[4]
  return i1064
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1066 = root || request.c( 'LunaController' )
  var i1067 = data
  i1066.LimitTimePlay = !!i1067[0]
  i1066.TimePlay = i1067[1]
  var i1069 = i1067[2]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 1, i1068, '')
  }
  i1066.images = i1068
  request.r(i1067[3], i1067[4], 0, i1066, 'CTA')
  request.r(i1067[5], i1067[6], 0, i1066, 'endCardRoot')
  request.r(i1067[7], i1067[8], 0, i1066, 'retryButtonLine')
  request.r(i1067[9], i1067[10], 0, i1066, 'ctaButtonLine')
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1073 = data
  i1072.center = new pc.Vec3( i1073[0], i1073[1], i1073[2] )
  i1072.radius = i1073[3]
  i1072.enabled = !!i1073[4]
  i1072.isTrigger = !!i1073[5]
  request.r(i1073[6], i1073[7], 0, i1072, 'material')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1075 = data
  i1074.ambientIntensity = i1075[0]
  i1074.reflectionIntensity = i1075[1]
  i1074.ambientMode = i1075[2]
  i1074.ambientLight = new pc.Color(i1075[3], i1075[4], i1075[5], i1075[6])
  i1074.ambientSkyColor = new pc.Color(i1075[7], i1075[8], i1075[9], i1075[10])
  i1074.ambientGroundColor = new pc.Color(i1075[11], i1075[12], i1075[13], i1075[14])
  i1074.ambientEquatorColor = new pc.Color(i1075[15], i1075[16], i1075[17], i1075[18])
  i1074.fogColor = new pc.Color(i1075[19], i1075[20], i1075[21], i1075[22])
  i1074.fogEndDistance = i1075[23]
  i1074.fogStartDistance = i1075[24]
  i1074.fogDensity = i1075[25]
  i1074.fog = !!i1075[26]
  request.r(i1075[27], i1075[28], 0, i1074, 'skybox')
  i1074.fogMode = i1075[29]
  var i1077 = i1075[30]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1077[i + 0]) );
  }
  i1074.lightmaps = i1076
  i1074.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1075[31], i1074.lightProbes)
  i1074.lightmapsMode = i1075[32]
  i1074.mixedBakeMode = i1075[33]
  i1074.environmentLightingMode = i1075[34]
  i1074.ambientProbe = new pc.SphericalHarmonicsL2(i1075[35])
  request.r(i1075[36], i1075[37], 0, i1074, 'customReflection')
  request.r(i1075[38], i1075[39], 0, i1074, 'defaultReflection')
  i1074.defaultReflectionMode = i1075[40]
  i1074.defaultReflectionResolution = i1075[41]
  i1074.sunLightObjectId = i1075[42]
  i1074.pixelLightCount = i1075[43]
  i1074.defaultReflectionHDR = !!i1075[44]
  i1074.hasLightDataAsset = !!i1075[45]
  i1074.hasManualGenerate = !!i1075[46]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'lightmapColor')
  request.r(i1081[2], i1081[3], 0, i1080, 'lightmapDirection')
  request.r(i1081[4], i1081[5], 0, i1080, 'shadowMask')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1082 = root || new UnityEngine.LightProbes()
  var i1083 = data
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1093[i + 0]));
  }
  i1090.ShaderCompilationErrors = i1092
  i1090.name = i1091[1]
  i1090.guid = i1091[2]
  var i1095 = i1091[3]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1090.shaderDefinedKeywords = i1094
  var i1097 = i1091[4]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1097[i + 0]) );
  }
  i1090.passes = i1096
  var i1099 = i1091[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1099[i + 0]) );
  }
  i1090.usePasses = i1098
  var i1101 = i1091[6]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1101[i + 0]) );
  }
  i1090.defaultParameterValues = i1100
  request.r(i1091[7], i1091[8], 0, i1090, 'unityFallbackShader')
  i1090.readDepth = !!i1091[9]
  i1090.hasDepthOnlyPass = !!i1091[10]
  i1090.isCreatedByShaderGraph = !!i1091[11]
  i1090.disableBatching = !!i1091[12]
  i1090.compiled = !!i1091[13]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1105 = data
  i1104.shaderName = i1105[0]
  i1104.errorMessage = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1110 = root || new pc.UnityShaderPass()
  var i1111 = data
  i1110.id = i1111[0]
  i1110.subShaderIndex = i1111[1]
  i1110.name = i1111[2]
  i1110.passType = i1111[3]
  i1110.grabPassTextureName = i1111[4]
  i1110.usePass = !!i1111[5]
  i1110.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[6], i1110.zTest)
  i1110.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[7], i1110.zWrite)
  i1110.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[8], i1110.culling)
  i1110.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1111[9], i1110.blending)
  i1110.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1111[10], i1110.alphaBlending)
  i1110.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[11], i1110.colorWriteMask)
  i1110.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[12], i1110.offsetUnits)
  i1110.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[13], i1110.offsetFactor)
  i1110.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[14], i1110.stencilRef)
  i1110.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[15], i1110.stencilReadMask)
  i1110.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[16], i1110.stencilWriteMask)
  i1110.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[17], i1110.stencilOp)
  i1110.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[18], i1110.stencilOpFront)
  i1110.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[19], i1110.stencilOpBack)
  var i1113 = i1111[20]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1113[i + 0]) );
  }
  i1110.tags = i1112
  var i1115 = i1111[21]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.passDefinedKeywords = i1114
  var i1117 = i1111[22]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1117[i + 0]) );
  }
  i1110.passDefinedKeywordGroups = i1116
  var i1119 = i1111[23]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1119[i + 0]) );
  }
  i1110.variants = i1118
  var i1121 = i1111[24]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1121[i + 0]) );
  }
  i1110.excludedVariants = i1120
  i1110.hasDepthReader = !!i1111[25]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1123 = data
  i1122.val = i1123[0]
  i1122.name = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1125 = data
  i1124.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[0], i1124.src)
  i1124.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[1], i1124.dst)
  i1124.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[2], i1124.op)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1127 = data
  i1126.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[0], i1126.pass)
  i1126.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[1], i1126.fail)
  i1126.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[2], i1126.zFail)
  i1126.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[3], i1126.comp)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.value = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1134.keywords = i1136
  i1134.hasDiscard = !!i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1141 = data
  i1140.passId = i1141[0]
  i1140.subShaderIndex = i1141[1]
  var i1143 = i1141[2]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1140.keywords = i1142
  i1140.vertexProgram = i1141[3]
  i1140.fragmentProgram = i1141[4]
  i1140.exportedForWebGl2 = !!i1141[5]
  i1140.readDepth = !!i1141[6]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'shader')
  i1146.pass = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.type = i1151[1]
  i1150.value = new pc.Vec4( i1151[2], i1151[3], i1151[4], i1151[5] )
  i1150.textureValue = i1151[6]
  i1150.shaderPropertyFlag = i1151[7]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1153 = data
  i1152.name = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'texture')
  i1152.aabb = i1153[3]
  i1152.vertices = i1153[4]
  i1152.triangles = i1153[5]
  i1152.textureRect = UnityEngine.Rect.MinMaxRect(i1153[6], i1153[7], i1153[8], i1153[9])
  i1152.packedRect = UnityEngine.Rect.MinMaxRect(i1153[10], i1153[11], i1153[12], i1153[13])
  i1152.border = new pc.Vec4( i1153[14], i1153[15], i1153[16], i1153[17] )
  i1152.transparency = i1153[18]
  i1152.bounds = i1153[19]
  i1152.pixelsPerUnit = i1153[20]
  i1152.textureWidth = i1153[21]
  i1152.textureHeight = i1153[22]
  i1152.nativeSize = new pc.Vec2( i1153[23], i1153[24] )
  i1152.pivot = new pc.Vec2( i1153[25], i1153[26] )
  i1152.textureRectOffset = new pc.Vec2( i1153[27], i1153[28] )
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1155 = data
  i1154.name = i1155[0]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.wrapMode = i1157[1]
  i1156.isLooping = !!i1157[2]
  i1156.length = i1157[3]
  var i1159 = i1157[4]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1159[i + 0]) );
  }
  i1156.curves = i1158
  var i1161 = i1157[5]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1161[i + 0]) );
  }
  i1156.events = i1160
  i1156.halfPrecision = !!i1157[6]
  i1156._frameRate = i1157[7]
  i1156.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1157[8], i1156.localBounds)
  i1156.hasMuscleCurves = !!i1157[9]
  var i1163 = i1157[10]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1156.clipMuscleConstant = i1162
  i1156.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1157[11], i1156.clipBindingConstant)
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1167 = data
  i1166.path = i1167[0]
  i1166.hash = i1167[1]
  i1166.componentType = i1167[2]
  i1166.property = i1167[3]
  i1166.keys = i1167[4]
  var i1169 = i1167[5]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1169[i + 0]) );
  }
  i1166.objectReferenceKeys = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1173 = data
  i1172.time = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'value')
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1177 = data
  i1176.functionName = i1177[0]
  i1176.floatParameter = i1177[1]
  i1176.intParameter = i1177[2]
  i1176.stringParameter = i1177[3]
  request.r(i1177[4], i1177[5], 0, i1176, 'objectReferenceParameter')
  i1176.time = i1177[6]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1179 = data
  i1178.center = new pc.Vec3( i1179[0], i1179[1], i1179[2] )
  i1178.extends = new pc.Vec3( i1179[3], i1179[4], i1179[5] )
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1182.genericBindings = i1184
  var i1187 = i1183[1]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1182.pptrCurveMapping = i1186
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.blendParameter = i1189[1]
  i1188.blendParameterY = i1189[2]
  i1188.blendType = i1189[3]
  var i1191 = i1189[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1191[i + 0]) );
  }
  i1188.children = i1190
  i1188.useAutomaticThresholds = !!i1189[5]
  i1188.minThreshold = i1189[6]
  i1188.maxThreshold = i1189[7]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'motion')
  i1194.threshold = i1195[2]
  i1194.position = new pc.Vec2( i1195[3], i1195[4] )
  i1194.timeScale = i1195[5]
  i1194.cycleOffset = i1195[6]
  i1194.directBlendParameter = i1195[7]
  i1194.mirror = !!i1195[8]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1197 = data
  i1196.name = i1197[0]
  var i1199 = i1197[1]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1199[i + 0]) );
  }
  i1196.layers = i1198
  var i1201 = i1197[2]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1201[i + 0]) );
  }
  i1196.parameters = i1200
  i1196.animationClips = i1197[3]
  i1196.avatarUnsupported = i1197[4]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1205 = data
  i1204.name = i1205[0]
  i1204.defaultWeight = i1205[1]
  i1204.blendingMode = i1205[2]
  i1204.avatarMask = i1205[3]
  i1204.syncedLayerIndex = i1205[4]
  i1204.syncedLayerAffectsTiming = !!i1205[5]
  i1204.syncedLayers = i1205[6]
  i1204.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1205[7], i1204.stateMachine)
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1207 = data
  i1206.id = i1207[0]
  i1206.name = i1207[1]
  i1206.path = i1207[2]
  var i1209 = i1207[3]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1209[i + 0]) );
  }
  i1206.states = i1208
  var i1211 = i1207[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1211[i + 0]) );
  }
  i1206.machines = i1210
  var i1213 = i1207[5]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1213[i + 0]) );
  }
  i1206.entryStateTransitions = i1212
  var i1215 = i1207[6]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1215[i + 0]) );
  }
  i1206.exitStateTransitions = i1214
  var i1217 = i1207[7]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1217[i + 0]) );
  }
  i1206.anyStateTransitions = i1216
  i1206.defaultStateId = i1207[8]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1221 = data
  i1220.id = i1221[0]
  i1220.name = i1221[1]
  i1220.cycleOffset = i1221[2]
  i1220.cycleOffsetParameter = i1221[3]
  i1220.cycleOffsetParameterActive = !!i1221[4]
  i1220.mirror = !!i1221[5]
  i1220.mirrorParameter = i1221[6]
  i1220.mirrorParameterActive = !!i1221[7]
  i1220.motionId = i1221[8]
  i1220.nameHash = i1221[9]
  i1220.fullPathHash = i1221[10]
  i1220.speed = i1221[11]
  i1220.speedParameter = i1221[12]
  i1220.speedParameterActive = !!i1221[13]
  i1220.tag = i1221[14]
  i1220.tagHash = i1221[15]
  i1220.writeDefaultValues = !!i1221[16]
  var i1223 = i1221[17]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 2, i1222, '')
  }
  i1220.behaviours = i1222
  var i1225 = i1221[18]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1225[i + 0]) );
  }
  i1220.transitions = i1224
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1231 = data
  i1230.fullPath = i1231[0]
  i1230.canTransitionToSelf = !!i1231[1]
  i1230.duration = i1231[2]
  i1230.exitTime = i1231[3]
  i1230.hasExitTime = !!i1231[4]
  i1230.hasFixedDuration = !!i1231[5]
  i1230.interruptionSource = i1231[6]
  i1230.offset = i1231[7]
  i1230.orderedInterruption = !!i1231[8]
  i1230.destinationStateId = i1231[9]
  i1230.isExit = !!i1231[10]
  i1230.mute = !!i1231[11]
  i1230.solo = !!i1231[12]
  var i1233 = i1231[13]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1233[i + 0]) );
  }
  i1230.conditions = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1237 = data
  i1236.mode = i1237[0]
  i1236.parameter = i1237[1]
  i1236.threshold = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1243 = data
  i1242.destinationStateId = i1243[0]
  i1242.isExit = !!i1243[1]
  i1242.mute = !!i1243[2]
  i1242.solo = !!i1243[3]
  var i1245 = i1243[4]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1245[i + 0]) );
  }
  i1242.conditions = i1244
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1249 = data
  i1248.defaultBool = !!i1249[0]
  i1248.defaultFloat = i1249[1]
  i1248.defaultInt = i1249[2]
  i1248.name = i1249[3]
  i1248.nameHash = i1249[4]
  i1248.type = i1249[5]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1251 = data
  i1250.name = i1251[0]
  request.r(i1251[1], i1251[2], 0, i1250, '_runtimeAnimatorController')
  var i1253 = i1251[3]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1250._originalAnimationClips = i1252
  var i1255 = i1251[4]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 2, i1254, '')
  }
  i1250._overrideAnimationClips = i1254
  var i1257 = i1251[5]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 2, i1256, '')
  }
  i1250._animationClips = i1256
  var i1259 = i1251[6]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('UnityEngine.AnimationClipPair', i1259[i + 0]) );
  }
  i1250._animationClipPairs = i1258
  return i1250
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'originalClip')
  request.r(i1265[2], i1265[3], 0, i1264, 'overrideClip')
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.bytes64 = i1267[1]
  i1266.data = i1267[2]
  return i1266
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1269 = data
  i1268.normalStyle = i1269[0]
  i1268.normalSpacingOffset = i1269[1]
  i1268.boldStyle = i1269[2]
  i1268.boldSpacing = i1269[3]
  i1268.italicStyle = i1269[4]
  i1268.tabSize = i1269[5]
  request.r(i1269[6], i1269[7], 0, i1268, 'atlas')
  i1268.m_SourceFontFileGUID = i1269[8]
  i1268.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1269[9], i1268.m_CreationSettings)
  request.r(i1269[10], i1269[11], 0, i1268, 'm_SourceFontFile')
  i1268.m_SourceFontFilePath = i1269[12]
  i1268.m_AtlasPopulationMode = i1269[13]
  i1268.InternalDynamicOS = !!i1269[14]
  var i1271 = i1269[15]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('UnityEngine.TextCore.Glyph', i1271[i + 0]));
  }
  i1268.m_GlyphTable = i1270
  var i1273 = i1269[16]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.TMP_Character', i1273[i + 0]));
  }
  i1268.m_CharacterTable = i1272
  var i1275 = i1269[17]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1268.m_AtlasTextures = i1274
  i1268.m_AtlasTextureIndex = i1269[18]
  i1268.m_IsMultiAtlasTexturesEnabled = !!i1269[19]
  i1268.m_GetFontFeatures = !!i1269[20]
  i1268.m_ClearDynamicDataOnBuild = !!i1269[21]
  i1268.m_AtlasWidth = i1269[22]
  i1268.m_AtlasHeight = i1269[23]
  i1268.m_AtlasPadding = i1269[24]
  i1268.m_AtlasRenderMode = i1269[25]
  var i1277 = i1269[26]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('UnityEngine.TextCore.GlyphRect', i1277[i + 0]));
  }
  i1268.m_UsedGlyphRects = i1276
  var i1279 = i1269[27]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('UnityEngine.TextCore.GlyphRect', i1279[i + 0]));
  }
  i1268.m_FreeGlyphRects = i1278
  i1268.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1269[28], i1268.m_FontFeatureTable)
  i1268.m_ShouldReimportFontFeatures = !!i1269[29]
  var i1281 = i1269[30]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1281.length; i += 2) {
  request.r(i1281[i + 0], i1281[i + 1], 1, i1280, '')
  }
  i1268.m_FallbackFontAssetTable = i1280
  var i1283 = i1269[31]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('TMPro.TMP_FontWeightPair', i1283[i + 0]) );
  }
  i1268.m_FontWeightTable = i1282
  var i1285 = i1269[32]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('TMPro.TMP_FontWeightPair', i1285[i + 0]) );
  }
  i1268.fontWeights = i1284
  i1268.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1269[33], i1268.m_fontInfo)
  var i1287 = i1269[34]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.TMP_Glyph', i1287[i + 0]));
  }
  i1268.m_glyphInfoList = i1286
  i1268.m_KerningTable = request.d('TMPro.KerningTable', i1269[35], i1268.m_KerningTable)
  var i1289 = i1269[36]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 1, i1288, '')
  }
  i1268.fallbackFontAssets = i1288
  i1268.m_Version = i1269[37]
  i1268.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1269[38], i1268.m_FaceInfo)
  request.r(i1269[39], i1269[40], 0, i1268, 'm_Material')
  return i1268
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1291 = data
  i1290.sourceFontFileName = i1291[0]
  i1290.sourceFontFileGUID = i1291[1]
  i1290.faceIndex = i1291[2]
  i1290.pointSizeSamplingMode = i1291[3]
  i1290.pointSize = i1291[4]
  i1290.padding = i1291[5]
  i1290.paddingMode = i1291[6]
  i1290.packingMode = i1291[7]
  i1290.atlasWidth = i1291[8]
  i1290.atlasHeight = i1291[9]
  i1290.characterSetSelectionMode = i1291[10]
  i1290.characterSequence = i1291[11]
  i1290.referencedFontAssetGUID = i1291[12]
  i1290.referencedTextAssetGUID = i1291[13]
  i1290.fontStyle = i1291[14]
  i1290.fontStyleModifier = i1291[15]
  i1290.renderMode = i1291[16]
  i1290.includeFontFeatures = !!i1291[17]
  return i1290
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1295 = data
  i1294.m_Index = i1295[0]
  i1294.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1295[1], i1294.m_Metrics)
  i1294.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1295[2], i1294.m_GlyphRect)
  i1294.m_Scale = i1295[3]
  i1294.m_AtlasIndex = i1295[4]
  i1294.m_ClassDefinitionType = i1295[5]
  return i1294
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1297 = data
  i1296.m_Width = i1297[0]
  i1296.m_Height = i1297[1]
  i1296.m_HorizontalBearingX = i1297[2]
  i1296.m_HorizontalBearingY = i1297[3]
  i1296.m_HorizontalAdvance = i1297[4]
  return i1296
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1299 = data
  i1298.m_X = i1299[0]
  i1298.m_Y = i1299[1]
  i1298.m_Width = i1299[2]
  i1298.m_Height = i1299[3]
  return i1298
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_Character' )
  var i1303 = data
  i1302.m_ElementType = i1303[0]
  i1302.m_Unicode = i1303[1]
  i1302.m_GlyphIndex = i1303[2]
  i1302.m_Scale = i1303[3]
  return i1302
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.MultipleSubstitutionRecord', i1311[i + 0]));
  }
  i1308.m_MultipleSubstitutionRecords = i1310
  var i1313 = i1309[1]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.LigatureSubstitutionRecord', i1313[i + 0]));
  }
  i1308.m_LigatureSubstitutionRecords = i1312
  var i1315 = i1309[2]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1315[i + 0]));
  }
  i1308.m_GlyphPairAdjustmentRecords = i1314
  var i1317 = i1309[3]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1317[i + 0]));
  }
  i1308.m_MarkToBaseAdjustmentRecords = i1316
  var i1319 = i1309[4]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1319[i + 0]));
  }
  i1308.m_MarkToMarkAdjustmentRecords = i1318
  return i1308
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1323 = data
  i1322.m_TargetGlyphID = i1323[0]
  i1322.m_SubstituteGlyphIDs = i1323[1]
  return i1322
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1327 = data
  i1326.m_ComponentGlyphIDs = i1327[0]
  i1326.m_LigatureGlyphID = i1327[1]
  return i1326
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1331 = data
  i1330.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1331[0], i1330.m_FirstAdjustmentRecord)
  i1330.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1331[1], i1330.m_SecondAdjustmentRecord)
  i1330.m_FeatureLookupFlags = i1331[2]
  return i1330
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1335 = data
  i1334.m_BaseGlyphID = i1335[0]
  i1334.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1335[1], i1334.m_BaseGlyphAnchorPoint)
  i1334.m_MarkGlyphID = i1335[2]
  i1334.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1335[3], i1334.m_MarkPositionAdjustment)
  return i1334
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1339 = data
  i1338.m_BaseMarkGlyphID = i1339[0]
  i1338.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1339[1], i1338.m_BaseMarkGlyphAnchorPoint)
  i1338.m_CombiningMarkGlyphID = i1339[2]
  i1338.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1339[3], i1338.m_CombiningMarkPositionAdjustment)
  return i1338
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1345 = data
  request.r(i1345[0], i1345[1], 0, i1344, 'regularTypeface')
  request.r(i1345[2], i1345[3], 0, i1344, 'italicTypeface')
  return i1344
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1347 = data
  i1346.Name = i1347[0]
  i1346.PointSize = i1347[1]
  i1346.Scale = i1347[2]
  i1346.CharacterCount = i1347[3]
  i1346.LineHeight = i1347[4]
  i1346.Baseline = i1347[5]
  i1346.Ascender = i1347[6]
  i1346.CapHeight = i1347[7]
  i1346.Descender = i1347[8]
  i1346.CenterLine = i1347[9]
  i1346.SuperscriptOffset = i1347[10]
  i1346.SubscriptOffset = i1347[11]
  i1346.SubSize = i1347[12]
  i1346.Underline = i1347[13]
  i1346.UnderlineThickness = i1347[14]
  i1346.strikethrough = i1347[15]
  i1346.strikethroughThickness = i1347[16]
  i1346.TabWidth = i1347[17]
  i1346.Padding = i1347[18]
  i1346.AtlasWidth = i1347[19]
  i1346.AtlasHeight = i1347[20]
  return i1346
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1351 = data
  i1350.id = i1351[0]
  i1350.x = i1351[1]
  i1350.y = i1351[2]
  i1350.width = i1351[3]
  i1350.height = i1351[4]
  i1350.xOffset = i1351[5]
  i1350.yOffset = i1351[6]
  i1350.xAdvance = i1351[7]
  i1350.scale = i1351[8]
  return i1350
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.KerningTable' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.KerningPair', i1355[i + 0]));
  }
  i1352.kerningPairs = i1354
  return i1352
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.KerningPair' )
  var i1359 = data
  i1358.xOffset = i1359[0]
  i1358.m_FirstGlyph = i1359[1]
  i1358.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1359[2], i1358.m_FirstGlyphAdjustments)
  i1358.m_SecondGlyph = i1359[3]
  i1358.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1359[4], i1358.m_SecondGlyphAdjustments)
  i1358.m_IgnoreSpacingAdjustments = !!i1359[5]
  return i1358
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1361 = data
  i1360.m_FaceIndex = i1361[0]
  i1360.m_FamilyName = i1361[1]
  i1360.m_StyleName = i1361[2]
  i1360.m_PointSize = i1361[3]
  i1360.m_Scale = i1361[4]
  i1360.m_UnitsPerEM = i1361[5]
  i1360.m_LineHeight = i1361[6]
  i1360.m_AscentLine = i1361[7]
  i1360.m_CapLine = i1361[8]
  i1360.m_MeanLine = i1361[9]
  i1360.m_Baseline = i1361[10]
  i1360.m_DescentLine = i1361[11]
  i1360.m_SuperscriptOffset = i1361[12]
  i1360.m_SuperscriptSize = i1361[13]
  i1360.m_SubscriptOffset = i1361[14]
  i1360.m_SubscriptSize = i1361[15]
  i1360.m_UnderlineOffset = i1361[16]
  i1360.m_UnderlineThickness = i1361[17]
  i1360.m_StrikethroughOffset = i1361[18]
  i1360.m_StrikethroughThickness = i1361[19]
  i1360.m_TabWidth = i1361[20]
  return i1360
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1363 = data
  i1362.useSafeMode = !!i1363[0]
  i1362.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1363[1], i1362.safeModeOptions)
  i1362.timeScale = i1363[2]
  i1362.unscaledTimeScale = i1363[3]
  i1362.useSmoothDeltaTime = !!i1363[4]
  i1362.maxSmoothUnscaledTime = i1363[5]
  i1362.rewindCallbackMode = i1363[6]
  i1362.showUnityEditorReport = !!i1363[7]
  i1362.logBehaviour = i1363[8]
  i1362.drawGizmos = !!i1363[9]
  i1362.defaultRecyclable = !!i1363[10]
  i1362.defaultAutoPlay = i1363[11]
  i1362.defaultUpdateType = i1363[12]
  i1362.defaultTimeScaleIndependent = !!i1363[13]
  i1362.defaultEaseType = i1363[14]
  i1362.defaultEaseOvershootOrAmplitude = i1363[15]
  i1362.defaultEasePeriod = i1363[16]
  i1362.defaultAutoKill = !!i1363[17]
  i1362.defaultLoopType = i1363[18]
  i1362.debugMode = !!i1363[19]
  i1362.debugStoreTargetId = !!i1363[20]
  i1362.showPreviewPanel = !!i1363[21]
  i1362.storeSettingsLocation = i1363[22]
  i1362.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1363[23], i1362.modules)
  i1362.createASMDEF = !!i1363[24]
  i1362.showPlayingTweens = !!i1363[25]
  i1362.showPausedTweens = !!i1363[26]
  return i1362
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1364 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1365 = data
  i1364.logBehaviour = i1365[0]
  i1364.nestedTweenFailureBehaviour = i1365[1]
  return i1364
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1366 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1367 = data
  i1366.showPanel = !!i1367[0]
  i1366.audioEnabled = !!i1367[1]
  i1366.physicsEnabled = !!i1367[2]
  i1366.physics2DEnabled = !!i1367[3]
  i1366.spriteEnabled = !!i1367[4]
  i1366.uiEnabled = !!i1367[5]
  i1366.textMeshProEnabled = !!i1367[6]
  i1366.tk2DEnabled = !!i1367[7]
  i1366.deAudioEnabled = !!i1367[8]
  i1366.deUnityExtendedEnabled = !!i1367[9]
  i1366.epoOutlineEnabled = !!i1367[10]
  return i1366
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_Settings' )
  var i1369 = data
  i1368.assetVersion = i1369[0]
  i1368.m_TextWrappingMode = i1369[1]
  i1368.m_enableKerning = !!i1369[2]
  var i1371 = i1369[3]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(i1371[i + 0]);
  }
  i1368.m_ActiveFontFeatures = i1370
  i1368.m_enableExtraPadding = !!i1369[4]
  i1368.m_enableTintAllSprites = !!i1369[5]
  i1368.m_enableParseEscapeCharacters = !!i1369[6]
  i1368.m_EnableRaycastTarget = !!i1369[7]
  i1368.m_GetFontFeaturesAtRuntime = !!i1369[8]
  i1368.m_missingGlyphCharacter = i1369[9]
  i1368.m_ClearDynamicDataOnBuild = !!i1369[10]
  i1368.m_warningsDisabled = !!i1369[11]
  request.r(i1369[12], i1369[13], 0, i1368, 'm_defaultFontAsset')
  i1368.m_defaultFontAssetPath = i1369[14]
  i1368.m_defaultFontSize = i1369[15]
  i1368.m_defaultAutoSizeMinRatio = i1369[16]
  i1368.m_defaultAutoSizeMaxRatio = i1369[17]
  i1368.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1369[18], i1369[19] )
  i1368.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1369[20], i1369[21] )
  i1368.m_autoSizeTextContainer = !!i1369[22]
  i1368.m_IsTextObjectScaleStatic = !!i1369[23]
  var i1373 = i1369[24]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1373.length; i += 2) {
  request.r(i1373[i + 0], i1373[i + 1], 1, i1372, '')
  }
  i1368.m_fallbackFontAssets = i1372
  i1368.m_matchMaterialPreset = !!i1369[25]
  i1368.m_HideSubTextObjects = !!i1369[26]
  request.r(i1369[27], i1369[28], 0, i1368, 'm_defaultSpriteAsset')
  i1368.m_defaultSpriteAssetPath = i1369[29]
  i1368.m_enableEmojiSupport = !!i1369[30]
  i1368.m_MissingCharacterSpriteUnicode = i1369[31]
  var i1375 = i1369[32]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1375.length; i += 2) {
  request.r(i1375[i + 0], i1375[i + 1], 1, i1374, '')
  }
  i1368.m_EmojiFallbackTextAssets = i1374
  i1368.m_defaultColorGradientPresetsPath = i1369[33]
  request.r(i1369[34], i1369[35], 0, i1368, 'm_defaultStyleSheet')
  i1368.m_StyleSheetsResourcePath = i1369[36]
  request.r(i1369[37], i1369[38], 0, i1368, 'm_leadingCharacters')
  request.r(i1369[39], i1369[40], 0, i1368, 'm_followingCharacters')
  i1368.m_UseModernHangulLineBreakingRules = !!i1369[41]
  return i1368
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'spriteSheet')
  var i1381 = i1379[2]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('TMPro.TMP_Sprite', i1381[i + 0]));
  }
  i1378.spriteInfoList = i1380
  var i1383 = i1379[3]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1378.fallbackSpriteAssets = i1382
  var i1385 = i1379[4]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('TMPro.TMP_SpriteCharacter', i1385[i + 0]));
  }
  i1378.m_SpriteCharacterTable = i1384
  var i1387 = i1379[5]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('TMPro.TMP_SpriteGlyph', i1387[i + 0]));
  }
  i1378.m_GlyphTable = i1386
  i1378.m_Version = i1379[6]
  i1378.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1379[7], i1378.m_FaceInfo)
  request.r(i1379[8], i1379[9], 0, i1378, 'm_Material')
  return i1378
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.hashCode = i1391[1]
  i1390.unicode = i1391[2]
  i1390.pivot = new pc.Vec2( i1391[3], i1391[4] )
  request.r(i1391[5], i1391[6], 0, i1390, 'sprite')
  i1390.id = i1391[7]
  i1390.x = i1391[8]
  i1390.y = i1391[9]
  i1390.width = i1391[10]
  i1390.height = i1391[11]
  i1390.xOffset = i1391[12]
  i1390.yOffset = i1391[13]
  i1390.xAdvance = i1391[14]
  i1390.scale = i1391[15]
  return i1390
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1397 = data
  i1396.m_Name = i1397[0]
  i1396.m_ElementType = i1397[1]
  i1396.m_Unicode = i1397[2]
  i1396.m_GlyphIndex = i1397[3]
  i1396.m_Scale = i1397[4]
  return i1396
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'sprite')
  i1400.m_Index = i1401[2]
  i1400.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1401[3], i1400.m_Metrics)
  i1400.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1401[4], i1400.m_GlyphRect)
  i1400.m_Scale = i1401[5]
  i1400.m_AtlasIndex = i1401[6]
  i1400.m_ClassDefinitionType = i1401[7]
  return i1400
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('TMPro.TMP_Style', i1405[i + 0]));
  }
  i1402.m_StyleList = i1404
  return i1402
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.TMP_Style' )
  var i1409 = data
  i1408.m_Name = i1409[0]
  i1408.m_HashCode = i1409[1]
  i1408.m_OpeningDefinition = i1409[2]
  i1408.m_ClosingDefinition = i1409[3]
  i1408.m_OpeningTagArray = i1409[4]
  i1408.m_ClosingTagArray = i1409[5]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1413[i + 0]) );
  }
  i1410.files = i1412
  i1410.componentToPrefabIds = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1417 = data
  i1416.path = i1417[0]
  request.r(i1417[1], i1417[2], 0, i1416, 'unityObject')
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1421[i + 0]) );
  }
  i1418.scriptsExecutionOrder = i1420
  var i1423 = i1419[1]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1423[i + 0]) );
  }
  i1418.sortingLayers = i1422
  var i1425 = i1419[2]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1425[i + 0]) );
  }
  i1418.cullingLayers = i1424
  i1418.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1419[3], i1418.timeSettings)
  i1418.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1419[4], i1418.physicsSettings)
  i1418.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1419[5], i1418.physics2DSettings)
  i1418.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1419[6], i1418.qualitySettings)
  i1418.enableRealtimeShadows = !!i1419[7]
  i1418.enableAutoInstancing = !!i1419[8]
  i1418.enableStaticBatching = !!i1419[9]
  i1418.enableDynamicBatching = !!i1419[10]
  i1418.usePreservativeDynamicBatching = !!i1419[11]
  i1418.lightmapEncodingQuality = i1419[12]
  i1418.desiredColorSpace = i1419[13]
  var i1427 = i1419[14]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1418.allTags = i1426
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.value = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1435 = data
  i1434.id = i1435[0]
  i1434.name = i1435[1]
  i1434.value = i1435[2]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1439 = data
  i1438.id = i1439[0]
  i1438.name = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1441 = data
  i1440.fixedDeltaTime = i1441[0]
  i1440.maximumDeltaTime = i1441[1]
  i1440.timeScale = i1441[2]
  i1440.maximumParticleTimestep = i1441[3]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1443 = data
  i1442.gravity = new pc.Vec3( i1443[0], i1443[1], i1443[2] )
  i1442.defaultSolverIterations = i1443[3]
  i1442.bounceThreshold = i1443[4]
  i1442.autoSyncTransforms = !!i1443[5]
  i1442.autoSimulation = !!i1443[6]
  var i1445 = i1443[7]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1445[i + 0]) );
  }
  i1442.collisionMatrix = i1444
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.layerId = i1449[1]
  i1448.otherLayerId = i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1451 = data
  request.r(i1451[0], i1451[1], 0, i1450, 'material')
  i1450.gravity = new pc.Vec2( i1451[2], i1451[3] )
  i1450.positionIterations = i1451[4]
  i1450.velocityIterations = i1451[5]
  i1450.velocityThreshold = i1451[6]
  i1450.maxLinearCorrection = i1451[7]
  i1450.maxAngularCorrection = i1451[8]
  i1450.maxTranslationSpeed = i1451[9]
  i1450.maxRotationSpeed = i1451[10]
  i1450.baumgarteScale = i1451[11]
  i1450.baumgarteTOIScale = i1451[12]
  i1450.timeToSleep = i1451[13]
  i1450.linearSleepTolerance = i1451[14]
  i1450.angularSleepTolerance = i1451[15]
  i1450.defaultContactOffset = i1451[16]
  i1450.autoSimulation = !!i1451[17]
  i1450.queriesHitTriggers = !!i1451[18]
  i1450.queriesStartInColliders = !!i1451[19]
  i1450.callbacksOnDisable = !!i1451[20]
  i1450.reuseCollisionCallbacks = !!i1451[21]
  i1450.autoSyncTransforms = !!i1451[22]
  var i1453 = i1451[23]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1453[i + 0]) );
  }
  i1450.collisionMatrix = i1452
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1457 = data
  i1456.enabled = !!i1457[0]
  i1456.layerId = i1457[1]
  i1456.otherLayerId = i1457[2]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1461[i + 0]) );
  }
  i1458.qualityLevels = i1460
  var i1463 = i1459[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1458.names = i1462
  i1458.shadows = i1459[2]
  i1458.anisotropicFiltering = i1459[3]
  i1458.antiAliasing = i1459[4]
  i1458.lodBias = i1459[5]
  i1458.shadowCascades = i1459[6]
  i1458.shadowDistance = i1459[7]
  i1458.shadowmaskMode = i1459[8]
  i1458.shadowProjection = i1459[9]
  i1458.shadowResolution = i1459[10]
  i1458.softParticles = !!i1459[11]
  i1458.softVegetation = !!i1459[12]
  i1458.activeColorSpace = i1459[13]
  i1458.desiredColorSpace = i1459[14]
  i1458.masterTextureLimit = i1459[15]
  i1458.maxQueuedFrames = i1459[16]
  i1458.particleRaycastBudget = i1459[17]
  i1458.pixelLightCount = i1459[18]
  i1458.realtimeReflectionProbes = !!i1459[19]
  i1458.shadowCascade2Split = i1459[20]
  i1458.shadowCascade4Split = new pc.Vec3( i1459[21], i1459[22], i1459[23] )
  i1458.streamingMipmapsActive = !!i1459[24]
  i1458.vSyncCount = i1459[25]
  i1458.asyncUploadBufferSize = i1459[26]
  i1458.asyncUploadTimeSlice = i1459[27]
  i1458.billboardsFaceCameraPosition = !!i1459[28]
  i1458.shadowNearPlaneOffset = i1459[29]
  i1458.streamingMipmapsMemoryBudget = i1459[30]
  i1458.maximumLODLevel = i1459[31]
  i1458.streamingMipmapsAddAllCameras = !!i1459[32]
  i1458.streamingMipmapsMaxLevelReduction = i1459[33]
  i1458.streamingMipmapsRenderersPerFrame = i1459[34]
  i1458.resolutionScalingFixedDPIFactor = i1459[35]
  i1458.streamingMipmapsMaxFileIORequests = i1459[36]
  i1458.currentQualityLevel = i1459[37]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1467 = data
  i1466.name = i1467[0]
  var i1469 = i1467[1]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1469[i + 0]) );
  }
  i1466.tos = i1468
  var i1471 = i1467[2]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( i1471[i + 0] );
  }
  i1466.constant = i1470
  i1466.isValid = !!i1467[3]
  i1466.isHuman = !!i1467[4]
  i1466.hasRootMotion = !!i1467[5]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1475 = data
  i1474.hash = i1475[0]
  i1474.path = i1475[1]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1479 = data
  i1478.weight = i1479[0]
  i1478.vertices = i1479[1]
  i1478.normals = i1479[2]
  i1478.tangents = i1479[3]
  return i1478
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'm_ObjectArgument')
  i1480.m_ObjectArgumentAssemblyTypeName = i1481[2]
  i1480.m_IntArgument = i1481[3]
  i1480.m_FloatArgument = i1481[4]
  i1480.m_StringArgument = i1481[5]
  i1480.m_BoolArgument = !!i1481[6]
  return i1480
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1483 = data
  i1482.m_GlyphIndex = i1483[0]
  i1482.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1483[1], i1482.m_GlyphValueRecord)
  return i1482
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1484 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1485 = data
  i1484.m_XCoordinate = i1485[0]
  i1484.m_YCoordinate = i1485[1]
  return i1484
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1486 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1487 = data
  i1486.m_XPositionAdjustment = i1487[0]
  i1486.m_YPositionAdjustment = i1487[1]
  return i1486
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1489 = data
  i1488.xPlacement = i1489[0]
  i1488.yPlacement = i1489[1]
  i1488.xAdvance = i1489[2]
  i1488.yAdvance = i1489[3]
  return i1488
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1491 = data
  i1490.m_XPlacement = i1491[0]
  i1490.m_YPlacement = i1491[1]
  i1490.m_XAdvance = i1491[2]
  i1490.m_YAdvance = i1491[3]
  return i1490
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4801";

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

Deserializers.buildID = "cd51395b-98ac-4beb-bd54-6aac7c027332";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

