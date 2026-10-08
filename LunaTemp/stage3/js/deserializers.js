var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.JointSpring' )
  var i4999 = data
  i4998.spring = i4999[0]
  i4998.damper = i4999[1]
  i4998.targetPosition = i4999[2]
  return i4998
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5000 = root || request.c( 'UnityEngine.JointMotor' )
  var i5001 = data
  i5000.m_TargetVelocity = i5001[0]
  i5000.m_Force = i5001[1]
  i5000.m_FreeSpin = i5001[2]
  return i5000
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.JointLimits' )
  var i5003 = data
  i5002.m_Min = i5003[0]
  i5002.m_Max = i5003[1]
  i5002.m_Bounciness = i5003[2]
  i5002.m_BounceMinVelocity = i5003[3]
  i5002.m_ContactDistance = i5003[4]
  i5002.minBounce = i5003[5]
  i5002.maxBounce = i5003[6]
  return i5002
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5004 = root || request.c( 'UnityEngine.JointDrive' )
  var i5005 = data
  i5004.m_PositionSpring = i5005[0]
  i5004.m_PositionDamper = i5005[1]
  i5004.m_MaximumForce = i5005[2]
  i5004.m_UseAcceleration = i5005[3]
  return i5004
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5006 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5007 = data
  i5006.m_Spring = i5007[0]
  i5006.m_Damper = i5007[1]
  return i5006
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5009 = data
  i5008.m_Limit = i5009[0]
  i5008.m_Bounciness = i5009[1]
  i5008.m_ContactDistance = i5009[2]
  return i5008
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5011 = data
  i5010.m_ExtremumSlip = i5011[0]
  i5010.m_ExtremumValue = i5011[1]
  i5010.m_AsymptoteSlip = i5011[2]
  i5010.m_AsymptoteValue = i5011[3]
  i5010.m_Stiffness = i5011[4]
  return i5010
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5013 = data
  i5012.m_LowerAngle = i5013[0]
  i5012.m_UpperAngle = i5013[1]
  return i5012
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5015 = data
  i5014.m_MotorSpeed = i5015[0]
  i5014.m_MaximumMotorTorque = i5015[1]
  return i5014
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5016 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5017 = data
  i5016.m_DampingRatio = i5017[0]
  i5016.m_Frequency = i5017[1]
  i5016.m_Angle = i5017[2]
  return i5016
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5019 = data
  i5018.m_LowerTranslation = i5019[0]
  i5018.m_UpperTranslation = i5019[1]
  return i5018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5021 = data
  i5020.name = i5021[0]
  i5020.width = i5021[1]
  i5020.height = i5021[2]
  i5020.mipmapCount = i5021[3]
  i5020.anisoLevel = i5021[4]
  i5020.filterMode = i5021[5]
  i5020.hdr = !!i5021[6]
  i5020.format = i5021[7]
  i5020.wrapMode = i5021[8]
  i5020.alphaIsTransparency = !!i5021[9]
  i5020.alphaSource = i5021[10]
  i5020.graphicsFormat = i5021[11]
  i5020.sRGBTexture = !!i5021[12]
  i5020.desiredColorSpace = i5021[13]
  i5020.wrapU = i5021[14]
  i5020.wrapV = i5021[15]
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5022 = root || new pc.UnityMaterial()
  var i5023 = data
  i5022.name = i5023[0]
  request.r(i5023[1], i5023[2], 0, i5022, 'shader')
  i5022.renderQueue = i5023[3]
  i5022.enableInstancing = !!i5023[4]
  var i5025 = i5023[5]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5025[i + 0]) );
  }
  i5022.floatParameters = i5024
  var i5027 = i5023[6]
  var i5026 = []
  for(var i = 0; i < i5027.length; i += 1) {
    i5026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5027[i + 0]) );
  }
  i5022.colorParameters = i5026
  var i5029 = i5023[7]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5029[i + 0]) );
  }
  i5022.vectorParameters = i5028
  var i5031 = i5023[8]
  var i5030 = []
  for(var i = 0; i < i5031.length; i += 1) {
    i5030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5031[i + 0]) );
  }
  i5022.textureParameters = i5030
  var i5033 = i5023[9]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 1) {
    i5032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5033[i + 0]) );
  }
  i5022.materialFlags = i5032
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5037 = data
  i5036.name = i5037[0]
  i5036.value = i5037[1]
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5041 = data
  i5040.name = i5041[0]
  i5040.value = new pc.Color(i5041[1], i5041[2], i5041[3], i5041[4])
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5045 = data
  i5044.name = i5045[0]
  i5044.value = new pc.Vec4( i5045[1], i5045[2], i5045[3], i5045[4] )
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5049 = data
  i5048.name = i5049[0]
  request.r(i5049[1], i5049[2], 0, i5048, 'value')
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5053 = data
  i5052.name = i5053[0]
  i5052.enabled = !!i5053[1]
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5055 = data
  i5054.name = i5055[0]
  i5054.halfPrecision = !!i5055[1]
  i5054.useSimplification = !!i5055[2]
  i5054.useUInt32IndexFormat = !!i5055[3]
  i5054.vertexCount = i5055[4]
  i5054.aabb = i5055[5]
  var i5057 = i5055[6]
  var i5056 = []
  for(var i = 0; i < i5057.length; i += 1) {
    i5056.push( !!i5057[i + 0] );
  }
  i5054.streams = i5056
  i5054.vertices = i5055[7]
  var i5059 = i5055[8]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5059[i + 0]) );
  }
  i5054.subMeshes = i5058
  var i5061 = i5055[9]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 16) {
    i5060.push( new pc.Mat4().setData(i5061[i + 0], i5061[i + 1], i5061[i + 2], i5061[i + 3],  i5061[i + 4], i5061[i + 5], i5061[i + 6], i5061[i + 7],  i5061[i + 8], i5061[i + 9], i5061[i + 10], i5061[i + 11],  i5061[i + 12], i5061[i + 13], i5061[i + 14], i5061[i + 15]) );
  }
  i5054.bindposes = i5060
  var i5063 = i5055[10]
  var i5062 = []
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5063[i + 0]) );
  }
  i5054.blendShapes = i5062
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5069 = data
  i5068.triangles = i5069[0]
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5075 = data
  i5074.name = i5075[0]
  var i5077 = i5075[1]
  var i5076 = []
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5077[i + 0]) );
  }
  i5074.frames = i5076
  return i5074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5079 = data
  i5078.name = i5079[0]
  i5078.atlasId = i5079[1]
  i5078.mipmapCount = i5079[2]
  i5078.hdr = !!i5079[3]
  i5078.size = i5079[4]
  i5078.anisoLevel = i5079[5]
  i5078.filterMode = i5079[6]
  var i5081 = i5079[7]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 4) {
    i5080.push( UnityEngine.Rect.MinMaxRect(i5081[i + 0], i5081[i + 1], i5081[i + 2], i5081[i + 3]) );
  }
  i5078.rects = i5080
  i5078.wrapU = i5079[8]
  i5078.wrapV = i5079[9]
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5085 = data
  i5084.name = i5085[0]
  i5084.index = i5085[1]
  i5084.startup = !!i5085[2]
  return i5084
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5086 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5087 = data
  request.r(i5087[0], i5087[1], 0, i5086, 'm_FirstSelected')
  i5086.m_sendNavigationEvents = !!i5087[2]
  i5086.m_DragThreshold = i5087[3]
  return i5086
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5088 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5089 = data
  i5088.m_HorizontalAxis = i5089[0]
  i5088.m_VerticalAxis = i5089[1]
  i5088.m_SubmitButton = i5089[2]
  i5088.m_CancelButton = i5089[3]
  i5088.m_InputActionsPerSecond = i5089[4]
  i5088.m_RepeatDelay = i5089[5]
  i5088.m_ForceModuleActive = !!i5089[6]
  i5088.m_SendPointerHoverToParent = !!i5089[7]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5091 = data
  i5090.name = i5091[0]
  i5090.tagId = i5091[1]
  i5090.enabled = !!i5091[2]
  i5090.isStatic = !!i5091[3]
  i5090.layer = i5091[4]
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5093 = data
  i5092.pivot = new pc.Vec2( i5093[0], i5093[1] )
  i5092.anchorMin = new pc.Vec2( i5093[2], i5093[3] )
  i5092.anchorMax = new pc.Vec2( i5093[4], i5093[5] )
  i5092.sizeDelta = new pc.Vec2( i5093[6], i5093[7] )
  i5092.anchoredPosition3D = new pc.Vec3( i5093[8], i5093[9], i5093[10] )
  i5092.rotation = new pc.Quat(i5093[11], i5093[12], i5093[13], i5093[14])
  i5092.scale = new pc.Vec3( i5093[15], i5093[16], i5093[17] )
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5095 = data
  i5094.planeDistance = i5095[0]
  i5094.referencePixelsPerUnit = i5095[1]
  i5094.isFallbackOverlay = !!i5095[2]
  i5094.renderMode = i5095[3]
  i5094.renderOrder = i5095[4]
  i5094.sortingLayerName = i5095[5]
  i5094.sortingOrder = i5095[6]
  i5094.scaleFactor = i5095[7]
  request.r(i5095[8], i5095[9], 0, i5094, 'worldCamera')
  i5094.overrideSorting = !!i5095[10]
  i5094.pixelPerfect = !!i5095[11]
  i5094.targetDisplay = i5095[12]
  i5094.overridePixelPerfect = !!i5095[13]
  i5094.enabled = !!i5095[14]
  return i5094
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5097 = data
  i5096.m_UiScaleMode = i5097[0]
  i5096.m_ReferencePixelsPerUnit = i5097[1]
  i5096.m_ScaleFactor = i5097[2]
  i5096.m_ReferenceResolution = new pc.Vec2( i5097[3], i5097[4] )
  i5096.m_ScreenMatchMode = i5097[5]
  i5096.m_MatchWidthOrHeight = i5097[6]
  i5096.m_PhysicalUnit = i5097[7]
  i5096.m_FallbackScreenDPI = i5097[8]
  i5096.m_DefaultSpriteDPI = i5097[9]
  i5096.m_DynamicPixelsPerUnit = i5097[10]
  i5096.m_PresetInfoIsWorld = !!i5097[11]
  return i5096
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5098 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5099 = data
  i5098.m_IgnoreReversedGraphics = !!i5099[0]
  i5098.m_BlockingObjects = i5099[1]
  i5098.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5099[2] )
  return i5098
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i5100 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i5101 = data
  i5100._referenceResolution = new pc.Vec2( i5101[0], i5101[1] )
  i5100._portraitMatch = i5101[2]
  i5100._landscapeMatch = i5101[3]
  i5100._squareMatch = i5101[4]
  i5100._portraitAspectThreshold = i5101[5]
  i5100._landscapeAspectThreshold = i5101[6]
  i5100._aspectEpsilon = i5101[7]
  return i5100
}

Deserializers["Joystick"] = function (request, data, root) {
  var i5102 = root || request.c( 'Joystick' )
  var i5103 = data
  request.r(i5103[0], i5103[1], 0, i5102, 'background')
  request.r(i5103[2], i5103[3], 0, i5102, 'joy')
  i5102.deadZone = i5103[4]
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5105 = data
  i5104.cullTransparentMesh = !!i5105[0]
  return i5104
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5106 = root || request.c( 'UnityEngine.UI.Image' )
  var i5107 = data
  request.r(i5107[0], i5107[1], 0, i5106, 'm_Sprite')
  i5106.m_Type = i5107[2]
  i5106.m_PreserveAspect = !!i5107[3]
  i5106.m_FillCenter = !!i5107[4]
  i5106.m_FillMethod = i5107[5]
  i5106.m_FillAmount = i5107[6]
  i5106.m_FillClockwise = !!i5107[7]
  i5106.m_FillOrigin = i5107[8]
  i5106.m_UseSpriteMesh = !!i5107[9]
  i5106.m_PixelsPerUnitMultiplier = i5107[10]
  request.r(i5107[11], i5107[12], 0, i5106, 'm_Material')
  i5106.m_Maskable = !!i5107[13]
  i5106.m_Color = new pc.Color(i5107[14], i5107[15], i5107[16], i5107[17])
  i5106.m_RaycastTarget = !!i5107[18]
  i5106.m_RaycastPadding = new pc.Vec4( i5107[19], i5107[20], i5107[21], i5107[22] )
  return i5106
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5108 = root || request.c( 'UnityEngine.UI.Button' )
  var i5109 = data
  i5108.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5109[0], i5108.m_OnClick)
  i5108.m_Navigation = request.d('UnityEngine.UI.Navigation', i5109[1], i5108.m_Navigation)
  i5108.m_Transition = i5109[2]
  i5108.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5109[3], i5108.m_Colors)
  i5108.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5109[4], i5108.m_SpriteState)
  i5108.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5109[5], i5108.m_AnimationTriggers)
  i5108.m_Interactable = !!i5109[6]
  request.r(i5109[7], i5109[8], 0, i5108, 'm_TargetGraphic')
  return i5108
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5110 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5111 = data
  i5110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5111[0], i5110.m_PersistentCalls)
  return i5110
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5112 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5113 = data
  var i5115 = i5113[0]
  var i5114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.add(request.d('UnityEngine.Events.PersistentCall', i5115[i + 0]));
  }
  i5112.m_Calls = i5114
  return i5112
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5118 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5119 = data
  request.r(i5119[0], i5119[1], 0, i5118, 'm_Target')
  i5118.m_TargetAssemblyTypeName = i5119[2]
  i5118.m_MethodName = i5119[3]
  i5118.m_Mode = i5119[4]
  i5118.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5119[5], i5118.m_Arguments)
  i5118.m_CallState = i5119[6]
  return i5118
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5120 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5121 = data
  i5120.m_Mode = i5121[0]
  i5120.m_WrapAround = !!i5121[1]
  request.r(i5121[2], i5121[3], 0, i5120, 'm_SelectOnUp')
  request.r(i5121[4], i5121[5], 0, i5120, 'm_SelectOnDown')
  request.r(i5121[6], i5121[7], 0, i5120, 'm_SelectOnLeft')
  request.r(i5121[8], i5121[9], 0, i5120, 'm_SelectOnRight')
  return i5120
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5122 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5123 = data
  i5122.m_NormalColor = new pc.Color(i5123[0], i5123[1], i5123[2], i5123[3])
  i5122.m_HighlightedColor = new pc.Color(i5123[4], i5123[5], i5123[6], i5123[7])
  i5122.m_PressedColor = new pc.Color(i5123[8], i5123[9], i5123[10], i5123[11])
  i5122.m_SelectedColor = new pc.Color(i5123[12], i5123[13], i5123[14], i5123[15])
  i5122.m_DisabledColor = new pc.Color(i5123[16], i5123[17], i5123[18], i5123[19])
  i5122.m_ColorMultiplier = i5123[20]
  i5122.m_FadeDuration = i5123[21]
  return i5122
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5124 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5125 = data
  request.r(i5125[0], i5125[1], 0, i5124, 'm_HighlightedSprite')
  request.r(i5125[2], i5125[3], 0, i5124, 'm_PressedSprite')
  request.r(i5125[4], i5125[5], 0, i5124, 'm_SelectedSprite')
  request.r(i5125[6], i5125[7], 0, i5124, 'm_DisabledSprite')
  return i5124
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5126 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5127 = data
  i5126.m_NormalTrigger = i5127[0]
  i5126.m_HighlightedTrigger = i5127[1]
  i5126.m_PressedTrigger = i5127[2]
  i5126.m_SelectedTrigger = i5127[3]
  i5126.m_DisabledTrigger = i5127[4]
  return i5126
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i5128 = root || request.c( 'JumpButton' )
  var i5129 = data
  request.r(i5129[0], i5129[1], 0, i5128, 'button')
  return i5128
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5130 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5131 = data
  i5130.m_ShowMaskGraphic = !!i5131[0]
  return i5130
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5132 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5133 = data
  i5132.m_hasFontAssetChanged = !!i5133[0]
  request.r(i5133[1], i5133[2], 0, i5132, 'm_baseMaterial')
  i5132.m_maskOffset = new pc.Vec4( i5133[3], i5133[4], i5133[5], i5133[6] )
  i5132.m_text = i5133[7]
  i5132.m_isRightToLeft = !!i5133[8]
  request.r(i5133[9], i5133[10], 0, i5132, 'm_fontAsset')
  request.r(i5133[11], i5133[12], 0, i5132, 'm_sharedMaterial')
  var i5135 = i5133[13]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 2) {
  request.r(i5135[i + 0], i5135[i + 1], 2, i5134, '')
  }
  i5132.m_fontSharedMaterials = i5134
  request.r(i5133[14], i5133[15], 0, i5132, 'm_fontMaterial')
  var i5137 = i5133[16]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 2) {
  request.r(i5137[i + 0], i5137[i + 1], 2, i5136, '')
  }
  i5132.m_fontMaterials = i5136
  i5132.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5133[17], i5133[18], i5133[19], i5133[20])
  i5132.m_fontColor = new pc.Color(i5133[21], i5133[22], i5133[23], i5133[24])
  i5132.m_enableVertexGradient = !!i5133[25]
  i5132.m_colorMode = i5133[26]
  i5132.m_fontColorGradient = request.d('TMPro.VertexGradient', i5133[27], i5132.m_fontColorGradient)
  request.r(i5133[28], i5133[29], 0, i5132, 'm_fontColorGradientPreset')
  request.r(i5133[30], i5133[31], 0, i5132, 'm_spriteAsset')
  i5132.m_tintAllSprites = !!i5133[32]
  request.r(i5133[33], i5133[34], 0, i5132, 'm_StyleSheet')
  i5132.m_TextStyleHashCode = i5133[35]
  i5132.m_overrideHtmlColors = !!i5133[36]
  i5132.m_faceColor = UnityEngine.Color32.ConstructColor(i5133[37], i5133[38], i5133[39], i5133[40])
  i5132.m_fontSize = i5133[41]
  i5132.m_fontSizeBase = i5133[42]
  i5132.m_fontWeight = i5133[43]
  i5132.m_enableAutoSizing = !!i5133[44]
  i5132.m_fontSizeMin = i5133[45]
  i5132.m_fontSizeMax = i5133[46]
  i5132.m_fontStyle = i5133[47]
  i5132.m_HorizontalAlignment = i5133[48]
  i5132.m_VerticalAlignment = i5133[49]
  i5132.m_textAlignment = i5133[50]
  i5132.m_characterSpacing = i5133[51]
  i5132.m_wordSpacing = i5133[52]
  i5132.m_lineSpacing = i5133[53]
  i5132.m_lineSpacingMax = i5133[54]
  i5132.m_paragraphSpacing = i5133[55]
  i5132.m_charWidthMaxAdj = i5133[56]
  i5132.m_TextWrappingMode = i5133[57]
  i5132.m_wordWrappingRatios = i5133[58]
  i5132.m_overflowMode = i5133[59]
  request.r(i5133[60], i5133[61], 0, i5132, 'm_linkedTextComponent')
  request.r(i5133[62], i5133[63], 0, i5132, 'parentLinkedComponent')
  i5132.m_enableKerning = !!i5133[64]
  var i5139 = i5133[65]
  var i5138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.add(i5139[i + 0]);
  }
  i5132.m_ActiveFontFeatures = i5138
  i5132.m_enableExtraPadding = !!i5133[66]
  i5132.checkPaddingRequired = !!i5133[67]
  i5132.m_isRichText = !!i5133[68]
  i5132.m_parseCtrlCharacters = !!i5133[69]
  i5132.m_isOrthographic = !!i5133[70]
  i5132.m_isCullingEnabled = !!i5133[71]
  i5132.m_horizontalMapping = i5133[72]
  i5132.m_verticalMapping = i5133[73]
  i5132.m_uvLineOffset = i5133[74]
  i5132.m_geometrySortingOrder = i5133[75]
  i5132.m_IsTextObjectScaleStatic = !!i5133[76]
  i5132.m_VertexBufferAutoSizeReduction = !!i5133[77]
  i5132.m_useMaxVisibleDescender = !!i5133[78]
  i5132.m_pageToDisplay = i5133[79]
  i5132.m_margin = new pc.Vec4( i5133[80], i5133[81], i5133[82], i5133[83] )
  i5132.m_isUsingLegacyAnimationComponent = !!i5133[84]
  i5132.m_isVolumetricText = !!i5133[85]
  request.r(i5133[86], i5133[87], 0, i5132, 'm_Material')
  i5132.m_EmojiFallbackSupport = !!i5133[88]
  i5132.m_Maskable = !!i5133[89]
  i5132.m_Color = new pc.Color(i5133[90], i5133[91], i5133[92], i5133[93])
  i5132.m_RaycastTarget = !!i5133[94]
  i5132.m_RaycastPadding = new pc.Vec4( i5133[95], i5133[96], i5133[97], i5133[98] )
  return i5132
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5142 = root || request.c( 'TMPro.VertexGradient' )
  var i5143 = data
  i5142.topLeft = new pc.Color(i5143[0], i5143[1], i5143[2], i5143[3])
  i5142.topRight = new pc.Color(i5143[4], i5143[5], i5143[6], i5143[7])
  i5142.bottomLeft = new pc.Color(i5143[8], i5143[9], i5143[10], i5143[11])
  i5142.bottomRight = new pc.Color(i5143[12], i5143[13], i5143[14], i5143[15])
  return i5142
}

Deserializers["TutController"] = function (request, data, root) {
  var i5146 = root || request.c( 'TutController' )
  var i5147 = data
  request.r(i5147[0], i5147[1], 0, i5146, 'tutScene')
  request.r(i5147[2], i5147[3], 0, i5146, 'startTut')
  request.r(i5147[4], i5147[5], 0, i5146, 'playTut')
  request.r(i5147[6], i5147[7], 0, i5146, 'farTut')
  request.r(i5147[8], i5147[9], 0, i5146, 'failTut')
  return i5146
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i5148 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i5149 = data
  i5148.targetIsSelf = !!i5149[0]
  request.r(i5149[1], i5149[2], 0, i5148, 'targetGO')
  i5148.tweenTargetIsTargetGO = !!i5149[3]
  i5148.delay = i5149[4]
  i5148.duration = i5149[5]
  i5148.easeType = i5149[6]
  i5148.easeCurve = new pc.AnimationCurve( { keys_flow: i5149[7] } )
  i5148.loopType = i5149[8]
  i5148.loops = i5149[9]
  i5148.id = i5149[10]
  i5148.isRelative = !!i5149[11]
  i5148.isFrom = !!i5149[12]
  i5148.isIndependentUpdate = !!i5149[13]
  i5148.autoKill = !!i5149[14]
  i5148.autoGenerate = !!i5149[15]
  i5148.isActive = !!i5149[16]
  i5148.isValid = !!i5149[17]
  request.r(i5149[18], i5149[19], 0, i5148, 'target')
  i5148.animationType = i5149[20]
  i5148.targetType = i5149[21]
  i5148.forcedTargetType = i5149[22]
  i5148.autoPlay = !!i5149[23]
  i5148.useTargetAsV3 = !!i5149[24]
  i5148.endValueFloat = i5149[25]
  i5148.endValueV3 = new pc.Vec3( i5149[26], i5149[27], i5149[28] )
  i5148.endValueV2 = new pc.Vec2( i5149[29], i5149[30] )
  i5148.endValueColor = new pc.Color(i5149[31], i5149[32], i5149[33], i5149[34])
  i5148.endValueString = i5149[35]
  i5148.endValueRect = UnityEngine.Rect.MinMaxRect(i5149[36], i5149[37], i5149[38], i5149[39])
  request.r(i5149[40], i5149[41], 0, i5148, 'endValueTransform')
  i5148.optionalBool0 = !!i5149[42]
  i5148.optionalBool1 = !!i5149[43]
  i5148.optionalFloat0 = i5149[44]
  i5148.optionalInt0 = i5149[45]
  i5148.optionalRotationMode = i5149[46]
  i5148.optionalScrambleMode = i5149[47]
  i5148.optionalShakeRandomnessMode = i5149[48]
  i5148.optionalString = i5149[49]
  i5148.updateType = i5149[50]
  i5148.isSpeedBased = !!i5149[51]
  i5148.hasOnStart = !!i5149[52]
  i5148.hasOnPlay = !!i5149[53]
  i5148.hasOnUpdate = !!i5149[54]
  i5148.hasOnStepComplete = !!i5149[55]
  i5148.hasOnComplete = !!i5149[56]
  i5148.hasOnTweenCreated = !!i5149[57]
  i5148.hasOnRewind = !!i5149[58]
  i5148.onStart = request.d('UnityEngine.Events.UnityEvent', i5149[59], i5148.onStart)
  i5148.onPlay = request.d('UnityEngine.Events.UnityEvent', i5149[60], i5148.onPlay)
  i5148.onUpdate = request.d('UnityEngine.Events.UnityEvent', i5149[61], i5148.onUpdate)
  i5148.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i5149[62], i5148.onStepComplete)
  i5148.onComplete = request.d('UnityEngine.Events.UnityEvent', i5149[63], i5148.onComplete)
  i5148.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i5149[64], i5148.onTweenCreated)
  i5148.onRewind = request.d('UnityEngine.Events.UnityEvent', i5149[65], i5148.onRewind)
  return i5148
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5150 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5151 = data
  i5150.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5151[0], i5150.m_PersistentCalls)
  return i5150
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i5152 = root || request.c( 'HideOnPointer' )
  var i5153 = data
  i5152.OnPointerDownEvent = request.d('System.Action', i5153[0], i5152.OnPointerDownEvent)
  return i5152
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5154 = root || request.c( 'System.Action' )
  var i5155 = data
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5157 = data
  i5156.center = new pc.Vec3( i5157[0], i5157[1], i5157[2] )
  i5156.size = new pc.Vec3( i5157[3], i5157[4], i5157[5] )
  i5156.enabled = !!i5157[6]
  i5156.isTrigger = !!i5157[7]
  request.r(i5157[8], i5157[9], 0, i5156, 'material')
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5159 = data
  i5158.mass = i5159[0]
  i5158.drag = i5159[1]
  i5158.angularDrag = i5159[2]
  i5158.useGravity = !!i5159[3]
  i5158.isKinematic = !!i5159[4]
  i5158.constraints = i5159[5]
  i5158.maxAngularVelocity = i5159[6]
  i5158.collisionDetectionMode = i5159[7]
  i5158.interpolation = i5159[8]
  return i5158
}

Deserializers["Gift"] = function (request, data, root) {
  var i5160 = root || request.c( 'Gift' )
  var i5161 = data
  i5160.collectDone = !!i5161[0]
  var i5163 = i5161[1]
  var i5162 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i5163.length; i += 2) {
  request.r(i5163[i + 0], i5163[i + 1], 1, i5162, '')
  }
  i5160.hints = i5162
  request.r(i5161[2], i5161[3], 0, i5160, 'collectSound')
  request.r(i5161[4], i5161[5], 0, i5160, 'collectEffect')
  request.r(i5161[6], i5161[7], 0, i5160, 'arrow')
  return i5160
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i5166 = root || request.c( 'SoundHint' )
  var i5167 = data
  request.r(i5167[0], i5167[1], 0, i5166, 'Sound')
  request.r(i5167[2], i5167[3], 0, i5166, 'Source')
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5169 = data
  request.r(i5169[0], i5169[1], 0, i5168, 'sharedMesh')
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5171 = data
  request.r(i5171[0], i5171[1], 0, i5170, 'additionalVertexStreams')
  i5170.enabled = !!i5171[2]
  request.r(i5171[3], i5171[4], 0, i5170, 'sharedMaterial')
  var i5173 = i5171[5]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 2) {
  request.r(i5173[i + 0], i5173[i + 1], 2, i5172, '')
  }
  i5170.sharedMaterials = i5172
  i5170.receiveShadows = !!i5171[6]
  i5170.shadowCastingMode = i5171[7]
  i5170.sortingLayerID = i5171[8]
  i5170.sortingOrder = i5171[9]
  i5170.lightmapIndex = i5171[10]
  i5170.lightmapSceneIndex = i5171[11]
  i5170.lightmapScaleOffset = new pc.Vec4( i5171[12], i5171[13], i5171[14], i5171[15] )
  i5170.lightProbeUsage = i5171[16]
  i5170.reflectionProbeUsage = i5171[17]
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5175 = data
  request.r(i5175[0], i5175[1], 0, i5174, 'mesh')
  i5174.meshCount = i5175[2]
  i5174.activeVertexStreamsCount = i5175[3]
  i5174.alignment = i5175[4]
  i5174.renderMode = i5175[5]
  i5174.sortMode = i5175[6]
  i5174.lengthScale = i5175[7]
  i5174.velocityScale = i5175[8]
  i5174.cameraVelocityScale = i5175[9]
  i5174.normalDirection = i5175[10]
  i5174.sortingFudge = i5175[11]
  i5174.minParticleSize = i5175[12]
  i5174.maxParticleSize = i5175[13]
  i5174.pivot = new pc.Vec3( i5175[14], i5175[15], i5175[16] )
  request.r(i5175[17], i5175[18], 0, i5174, 'trailMaterial')
  i5174.applyActiveColorSpace = !!i5175[19]
  i5174.enabled = !!i5175[20]
  request.r(i5175[21], i5175[22], 0, i5174, 'sharedMaterial')
  var i5177 = i5175[23]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 2) {
  request.r(i5177[i + 0], i5177[i + 1], 2, i5176, '')
  }
  i5174.sharedMaterials = i5176
  i5174.receiveShadows = !!i5175[24]
  i5174.shadowCastingMode = i5175[25]
  i5174.sortingLayerID = i5175[26]
  i5174.sortingOrder = i5175[27]
  i5174.lightmapIndex = i5175[28]
  i5174.lightmapSceneIndex = i5175[29]
  i5174.lightmapScaleOffset = new pc.Vec4( i5175[30], i5175[31], i5175[32], i5175[33] )
  i5174.lightProbeUsage = i5175[34]
  i5174.reflectionProbeUsage = i5175[35]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5179 = data
  i5178.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5179[0], i5178.main)
  i5178.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5179[1], i5178.colorBySpeed)
  i5178.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5179[2], i5178.colorOverLifetime)
  i5178.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5179[3], i5178.emission)
  i5178.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5179[4], i5178.rotationBySpeed)
  i5178.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5179[5], i5178.rotationOverLifetime)
  i5178.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5179[6], i5178.shape)
  i5178.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5179[7], i5178.sizeBySpeed)
  i5178.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5179[8], i5178.sizeOverLifetime)
  i5178.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5179[9], i5178.textureSheetAnimation)
  i5178.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5179[10], i5178.velocityOverLifetime)
  i5178.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5179[11], i5178.noise)
  i5178.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5179[12], i5178.inheritVelocity)
  i5178.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5179[13], i5178.forceOverLifetime)
  i5178.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5179[14], i5178.limitVelocityOverLifetime)
  i5178.useAutoRandomSeed = !!i5179[15]
  i5178.randomSeed = i5179[16]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5180 = root || new pc.ParticleSystemMain()
  var i5181 = data
  i5180.duration = i5181[0]
  i5180.loop = !!i5181[1]
  i5180.prewarm = !!i5181[2]
  i5180.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[3], i5180.startDelay)
  i5180.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[4], i5180.startLifetime)
  i5180.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[5], i5180.startSpeed)
  i5180.startSize3D = !!i5181[6]
  i5180.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[7], i5180.startSizeX)
  i5180.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[8], i5180.startSizeY)
  i5180.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[9], i5180.startSizeZ)
  i5180.startRotation3D = !!i5181[10]
  i5180.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[11], i5180.startRotationX)
  i5180.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[12], i5180.startRotationY)
  i5180.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[13], i5180.startRotationZ)
  i5180.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5181[14], i5180.startColor)
  i5180.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[15], i5180.gravityModifier)
  i5180.simulationSpace = i5181[16]
  request.r(i5181[17], i5181[18], 0, i5180, 'customSimulationSpace')
  i5180.simulationSpeed = i5181[19]
  i5180.useUnscaledTime = !!i5181[20]
  i5180.scalingMode = i5181[21]
  i5180.playOnAwake = !!i5181[22]
  i5180.maxParticles = i5181[23]
  i5180.emitterVelocityMode = i5181[24]
  i5180.stopAction = i5181[25]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5182 = root || new pc.MinMaxCurve()
  var i5183 = data
  i5182.mode = i5183[0]
  i5182.curveMin = new pc.AnimationCurve( { keys_flow: i5183[1] } )
  i5182.curveMax = new pc.AnimationCurve( { keys_flow: i5183[2] } )
  i5182.curveMultiplier = i5183[3]
  i5182.constantMin = i5183[4]
  i5182.constantMax = i5183[5]
  return i5182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5184 = root || new pc.MinMaxGradient()
  var i5185 = data
  i5184.mode = i5185[0]
  i5184.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5185[1], i5184.gradientMin)
  i5184.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5185[2], i5184.gradientMax)
  i5184.colorMin = new pc.Color(i5185[3], i5185[4], i5185[5], i5185[6])
  i5184.colorMax = new pc.Color(i5185[7], i5185[8], i5185[9], i5185[10])
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5187 = data
  i5186.mode = i5187[0]
  var i5189 = i5187[1]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 1) {
    i5188.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5189[i + 0]) );
  }
  i5186.colorKeys = i5188
  var i5191 = i5187[2]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 1) {
    i5190.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5191[i + 0]) );
  }
  i5186.alphaKeys = i5190
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5192 = root || new pc.ParticleSystemColorBySpeed()
  var i5193 = data
  i5192.enabled = !!i5193[0]
  i5192.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5193[1], i5192.color)
  i5192.range = new pc.Vec2( i5193[2], i5193[3] )
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5197 = data
  i5196.color = new pc.Color(i5197[0], i5197[1], i5197[2], i5197[3])
  i5196.time = i5197[4]
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5201 = data
  i5200.alpha = i5201[0]
  i5200.time = i5201[1]
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5202 = root || new pc.ParticleSystemColorOverLifetime()
  var i5203 = data
  i5202.enabled = !!i5203[0]
  i5202.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5203[1], i5202.color)
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5204 = root || new pc.ParticleSystemEmitter()
  var i5205 = data
  i5204.enabled = !!i5205[0]
  i5204.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[1], i5204.rateOverTime)
  i5204.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[2], i5204.rateOverDistance)
  var i5207 = i5205[3]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5207[i + 0]) );
  }
  i5204.bursts = i5206
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5210 = root || new pc.ParticleSystemBurst()
  var i5211 = data
  i5210.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[0], i5210.count)
  i5210.cycleCount = i5211[1]
  i5210.minCount = i5211[2]
  i5210.maxCount = i5211[3]
  i5210.repeatInterval = i5211[4]
  i5210.time = i5211[5]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5212 = root || new pc.ParticleSystemRotationBySpeed()
  var i5213 = data
  i5212.enabled = !!i5213[0]
  i5212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5213[1], i5212.x)
  i5212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5213[2], i5212.y)
  i5212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5213[3], i5212.z)
  i5212.separateAxes = !!i5213[4]
  i5212.range = new pc.Vec2( i5213[5], i5213[6] )
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5214 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5215 = data
  i5214.enabled = !!i5215[0]
  i5214.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5215[1], i5214.x)
  i5214.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5215[2], i5214.y)
  i5214.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5215[3], i5214.z)
  i5214.separateAxes = !!i5215[4]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5216 = root || new pc.ParticleSystemShape()
  var i5217 = data
  i5216.enabled = !!i5217[0]
  i5216.shapeType = i5217[1]
  i5216.randomDirectionAmount = i5217[2]
  i5216.sphericalDirectionAmount = i5217[3]
  i5216.randomPositionAmount = i5217[4]
  i5216.alignToDirection = !!i5217[5]
  i5216.radius = i5217[6]
  i5216.radiusMode = i5217[7]
  i5216.radiusSpread = i5217[8]
  i5216.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5217[9], i5216.radiusSpeed)
  i5216.radiusThickness = i5217[10]
  i5216.angle = i5217[11]
  i5216.length = i5217[12]
  i5216.boxThickness = new pc.Vec3( i5217[13], i5217[14], i5217[15] )
  i5216.meshShapeType = i5217[16]
  request.r(i5217[17], i5217[18], 0, i5216, 'mesh')
  request.r(i5217[19], i5217[20], 0, i5216, 'meshRenderer')
  request.r(i5217[21], i5217[22], 0, i5216, 'skinnedMeshRenderer')
  i5216.useMeshMaterialIndex = !!i5217[23]
  i5216.meshMaterialIndex = i5217[24]
  i5216.useMeshColors = !!i5217[25]
  i5216.normalOffset = i5217[26]
  i5216.arc = i5217[27]
  i5216.arcMode = i5217[28]
  i5216.arcSpread = i5217[29]
  i5216.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5217[30], i5216.arcSpeed)
  i5216.donutRadius = i5217[31]
  i5216.position = new pc.Vec3( i5217[32], i5217[33], i5217[34] )
  i5216.rotation = new pc.Vec3( i5217[35], i5217[36], i5217[37] )
  i5216.scale = new pc.Vec3( i5217[38], i5217[39], i5217[40] )
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5218 = root || new pc.ParticleSystemSizeBySpeed()
  var i5219 = data
  i5218.enabled = !!i5219[0]
  i5218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5219[1], i5218.x)
  i5218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5219[2], i5218.y)
  i5218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5219[3], i5218.z)
  i5218.separateAxes = !!i5219[4]
  i5218.range = new pc.Vec2( i5219[5], i5219[6] )
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5220 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5221 = data
  i5220.enabled = !!i5221[0]
  i5220.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5221[1], i5220.x)
  i5220.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5221[2], i5220.y)
  i5220.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5221[3], i5220.z)
  i5220.separateAxes = !!i5221[4]
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5222 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5223 = data
  i5222.enabled = !!i5223[0]
  i5222.mode = i5223[1]
  i5222.animation = i5223[2]
  i5222.numTilesX = i5223[3]
  i5222.numTilesY = i5223[4]
  i5222.useRandomRow = !!i5223[5]
  i5222.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5223[6], i5222.frameOverTime)
  i5222.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5223[7], i5222.startFrame)
  i5222.cycleCount = i5223[8]
  i5222.rowIndex = i5223[9]
  i5222.flipU = i5223[10]
  i5222.flipV = i5223[11]
  i5222.spriteCount = i5223[12]
  var i5225 = i5223[13]
  var i5224 = []
  for(var i = 0; i < i5225.length; i += 2) {
  request.r(i5225[i + 0], i5225[i + 1], 2, i5224, '')
  }
  i5222.sprites = i5224
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5228 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5229 = data
  i5228.enabled = !!i5229[0]
  i5228.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[1], i5228.x)
  i5228.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[2], i5228.y)
  i5228.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[3], i5228.z)
  i5228.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[4], i5228.radial)
  i5228.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[5], i5228.speedModifier)
  i5228.space = i5229[6]
  i5228.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[7], i5228.orbitalX)
  i5228.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[8], i5228.orbitalY)
  i5228.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[9], i5228.orbitalZ)
  i5228.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[10], i5228.orbitalOffsetX)
  i5228.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[11], i5228.orbitalOffsetY)
  i5228.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5229[12], i5228.orbitalOffsetZ)
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5230 = root || new pc.ParticleSystemNoise()
  var i5231 = data
  i5230.enabled = !!i5231[0]
  i5230.separateAxes = !!i5231[1]
  i5230.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[2], i5230.strengthX)
  i5230.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[3], i5230.strengthY)
  i5230.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[4], i5230.strengthZ)
  i5230.frequency = i5231[5]
  i5230.damping = !!i5231[6]
  i5230.octaveCount = i5231[7]
  i5230.octaveMultiplier = i5231[8]
  i5230.octaveScale = i5231[9]
  i5230.quality = i5231[10]
  i5230.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[11], i5230.scrollSpeed)
  i5230.scrollSpeedMultiplier = i5231[12]
  i5230.remapEnabled = !!i5231[13]
  i5230.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[14], i5230.remapX)
  i5230.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[15], i5230.remapY)
  i5230.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[16], i5230.remapZ)
  i5230.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[17], i5230.positionAmount)
  i5230.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[18], i5230.rotationAmount)
  i5230.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5231[19], i5230.sizeAmount)
  return i5230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5232 = root || new pc.ParticleSystemInheritVelocity()
  var i5233 = data
  i5232.enabled = !!i5233[0]
  i5232.mode = i5233[1]
  i5232.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5233[2], i5232.curve)
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5234 = root || new pc.ParticleSystemForceOverLifetime()
  var i5235 = data
  i5234.enabled = !!i5235[0]
  i5234.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5235[1], i5234.x)
  i5234.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5235[2], i5234.y)
  i5234.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5235[3], i5234.z)
  i5234.space = i5235[4]
  i5234.randomized = !!i5235[5]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5236 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5237 = data
  i5236.enabled = !!i5237[0]
  i5236.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[1], i5236.limit)
  i5236.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[2], i5236.limitX)
  i5236.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[3], i5236.limitY)
  i5236.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[4], i5236.limitZ)
  i5236.dampen = i5237[5]
  i5236.separateAxes = !!i5237[6]
  i5236.space = i5237[7]
  i5236.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[8], i5236.drag)
  i5236.multiplyDragByParticleSize = !!i5237[9]
  i5236.multiplyDragByParticleVelocity = !!i5237[10]
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5239 = data
  i5238.color = new pc.Color(i5239[0], i5239[1], i5239[2], i5239[3])
  request.r(i5239[4], i5239[5], 0, i5238, 'sprite')
  i5238.flipX = !!i5239[6]
  i5238.flipY = !!i5239[7]
  i5238.drawMode = i5239[8]
  i5238.size = new pc.Vec2( i5239[9], i5239[10] )
  i5238.tileMode = i5239[11]
  i5238.adaptiveModeThreshold = i5239[12]
  i5238.maskInteraction = i5239[13]
  i5238.spriteSortPoint = i5239[14]
  i5238.enabled = !!i5239[15]
  request.r(i5239[16], i5239[17], 0, i5238, 'sharedMaterial')
  var i5241 = i5239[18]
  var i5240 = []
  for(var i = 0; i < i5241.length; i += 2) {
  request.r(i5241[i + 0], i5241[i + 1], 2, i5240, '')
  }
  i5238.sharedMaterials = i5240
  i5238.receiveShadows = !!i5239[19]
  i5238.shadowCastingMode = i5239[20]
  i5238.sortingLayerID = i5239[21]
  i5238.sortingOrder = i5239[22]
  i5238.lightmapIndex = i5239[23]
  i5238.lightmapSceneIndex = i5239[24]
  i5238.lightmapScaleOffset = new pc.Vec4( i5239[25], i5239[26], i5239[27], i5239[28] )
  i5238.lightProbeUsage = i5239[29]
  i5238.reflectionProbeUsage = i5239[30]
  return i5238
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i5242 = root || request.c( 'CharacterMotor' )
  var i5243 = data
  request.r(i5243[0], i5243[1], 0, i5242, 'characterInput')
  request.r(i5243[2], i5243[3], 0, i5242, 'cameraYawTransform')
  request.r(i5243[4], i5243[5], 0, i5242, '_arrow')
  i5242.moveSpeed = i5243[6]
  i5242.jumpHeight = i5243[7]
  request.r(i5243[8], i5243[9], 0, i5242, 'groundChecker')
  i5242.gravity = i5243[10]
  i5242.enableStepClimb = !!i5243[11]
  i5242.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i5243[12] )
  i5242.maxStepHeight = i5243[13]
  i5242.stepCheckDistance = i5243[14]
  i5242.stepUpSpeed = i5243[15]
  i5242.stepUpAcceleration = i5243[16]
  i5242.minimumStepFacing = i5243[17]
  request.r(i5243[18], i5243[19], 0, i5242, 'controller')
  i5242.autoRun = !!i5243[20]
  return i5242
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i5244 = root || request.c( 'CharacterRotation' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, 'motor')
  i5244.rotationSpeed = i5245[2]
  return i5244
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i5246 = root || request.c( 'CharacterAnimation' )
  var i5247 = data
  request.r(i5247[0], i5247[1], 0, i5246, 'animator')
  request.r(i5247[2], i5247[3], 0, i5246, 'motor')
  i5246.speedChangeRate = i5247[4]
  i5246.groundedGraceTime = i5247[5]
  return i5246
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i5248 = root || request.c( 'CharacterCollect' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'motor')
  request.r(i5249[2], i5249[3], 0, i5248, 'avatar')
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5251 = data
  i5250.center = new pc.Vec3( i5251[0], i5251[1], i5251[2] )
  i5250.radius = i5251[3]
  i5250.height = i5251[4]
  i5250.direction = i5251[5]
  i5250.enabled = !!i5251[6]
  i5250.isTrigger = !!i5251[7]
  request.r(i5251[8], i5251[9], 0, i5250, 'material')
  return i5250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5253 = data
  request.r(i5253[0], i5253[1], 0, i5252, 'animatorController')
  request.r(i5253[2], i5253[3], 0, i5252, 'avatar')
  i5252.updateMode = i5253[4]
  i5252.hasTransformHierarchy = !!i5253[5]
  i5252.applyRootMotion = !!i5253[6]
  var i5255 = i5253[7]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 2) {
  request.r(i5255[i + 0], i5255[i + 1], 2, i5254, '')
  }
  i5252.humanBones = i5254
  i5252.enabled = !!i5253[8]
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5259 = data
  request.r(i5259[0], i5259[1], 0, i5258, 'clip')
  request.r(i5259[2], i5259[3], 0, i5258, 'outputAudioMixerGroup')
  i5258.playOnAwake = !!i5259[4]
  i5258.loop = !!i5259[5]
  i5258.time = i5259[6]
  i5258.volume = i5259[7]
  i5258.pitch = i5259[8]
  i5258.enabled = !!i5259[9]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5261 = data
  request.r(i5261[0], i5261[1], 0, i5260, 'sharedMesh')
  var i5263 = i5261[2]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 2) {
  request.r(i5263[i + 0], i5263[i + 1], 2, i5262, '')
  }
  i5260.bones = i5262
  i5260.updateWhenOffscreen = !!i5261[3]
  i5260.localBounds = i5261[4]
  request.r(i5261[5], i5261[6], 0, i5260, 'rootBone')
  var i5265 = i5261[7]
  var i5264 = []
  for(var i = 0; i < i5265.length; i += 1) {
    i5264.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5265[i + 0]) );
  }
  i5260.blendShapesWeights = i5264
  i5260.enabled = !!i5261[8]
  request.r(i5261[9], i5261[10], 0, i5260, 'sharedMaterial')
  var i5267 = i5261[11]
  var i5266 = []
  for(var i = 0; i < i5267.length; i += 2) {
  request.r(i5267[i + 0], i5267[i + 1], 2, i5266, '')
  }
  i5260.sharedMaterials = i5266
  i5260.receiveShadows = !!i5261[12]
  i5260.shadowCastingMode = i5261[13]
  i5260.sortingLayerID = i5261[14]
  i5260.sortingOrder = i5261[15]
  i5260.lightmapIndex = i5261[16]
  i5260.lightmapSceneIndex = i5261[17]
  i5260.lightmapScaleOffset = new pc.Vec4( i5261[18], i5261[19], i5261[20], i5261[21] )
  i5260.lightProbeUsage = i5261[22]
  i5260.reflectionProbeUsage = i5261[23]
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5271 = data
  i5270.weight = i5271[0]
  return i5270
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i5272 = root || request.c( 'GroundChecker' )
  var i5273 = data
  request.r(i5273[0], i5273[1], 0, i5272, 'groundPoint')
  i5272.checkRadius = i5273[2]
  i5272.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i5273[3] )
  return i5272
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i5274 = root || request.c( 'CameraFollow' )
  var i5275 = data
  request.r(i5275[0], i5275[1], 0, i5274, 'target')
  i5274.smoothTime = i5275[2]
  return i5274
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i5276 = root || request.c( 'CameraLook' )
  var i5277 = data
  request.r(i5277[0], i5277[1], 0, i5276, 'input')
  request.r(i5277[2], i5277[3], 0, i5276, 'yawPivot')
  request.r(i5277[4], i5277[5], 0, i5276, 'pitchPivot')
  i5276.minPitch = i5277[6]
  i5276.maxPitch = i5277[7]
  i5276.yaw = i5277[8]
  i5276.pitch = i5277[9]
  i5276.defaltYaw = i5277[10]
  i5276.defaltPitch = i5277[11]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5279 = data
  i5278.aspect = i5279[0]
  i5278.orthographic = !!i5279[1]
  i5278.orthographicSize = i5279[2]
  i5278.backgroundColor = new pc.Color(i5279[3], i5279[4], i5279[5], i5279[6])
  i5278.nearClipPlane = i5279[7]
  i5278.farClipPlane = i5279[8]
  i5278.fieldOfView = i5279[9]
  i5278.depth = i5279[10]
  i5278.clearFlags = i5279[11]
  i5278.cullingMask = i5279[12]
  i5278.rect = i5279[13]
  request.r(i5279[14], i5279[15], 0, i5278, 'targetTexture')
  i5278.usePhysicalProperties = !!i5279[16]
  i5278.focalLength = i5279[17]
  i5278.sensorSize = new pc.Vec2( i5279[18], i5279[19] )
  i5278.lensShift = new pc.Vec2( i5279[20], i5279[21] )
  i5278.gateFit = i5279[22]
  i5278.commandBufferCount = i5279[23]
  i5278.cameraType = i5279[24]
  i5278.enabled = !!i5279[25]
  return i5278
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i5280 = root || request.c( 'CharacterInput' )
  var i5281 = data
  request.r(i5281[0], i5281[1], 0, i5280, 'joystick')
  request.r(i5281[2], i5281[3], 0, i5280, 'jumpButton')
  return i5280
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5282 = root || request.c( 'InputManager' )
  var i5283 = data
  request.r(i5283[0], i5283[1], 0, i5282, 'worldCamera')
  i5282.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i5283[2] )
  i5282.touchSensitivity = i5283[3]
  i5282.mouseSensitivity = i5283[4]
  i5282.dragThreshold = i5283[5]
  return i5282
}

Deserializers["GameController"] = function (request, data, root) {
  var i5284 = root || request.c( 'GameController' )
  var i5285 = data
  i5284.timeToShowComplete = i5285[0]
  i5284.currentProgress = i5285[1]
  i5284.target = i5285[2]
  request.r(i5285[3], i5285[4], 0, i5284, 'progressText')
  request.r(i5285[5], i5285[6], 0, i5284, 'collectText')
  request.r(i5285[7], i5285[8], 0, i5284, '_cta')
  var i5287 = i5285[9]
  var i5286 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i5287.length; i += 2) {
  request.r(i5287[i + 0], i5287[i + 1], 1, i5286, '')
  }
  i5284.gifts = i5286
  request.r(i5285[10], i5285[11], 0, i5284, 'collect')
  request.r(i5285[12], i5285[13], 0, i5284, 'tut')
  request.r(i5285[14], i5285[15], 0, i5284, 'playerSpawn')
  request.r(i5285[16], i5285[17], 0, i5284, 'giftSpawn')
  request.r(i5285[18], i5285[19], 0, i5284, 'failUI')
  request.r(i5285[20], i5285[21], 0, i5284, 'playerMotor')
  i5284.failHeight = i5285[22]
  return i5284
}

Deserializers["AudioController"] = function (request, data, root) {
  var i5290 = root || request.c( 'AudioController' )
  var i5291 = data
  request.r(i5291[0], i5291[1], 0, i5290, 'musicSource')
  request.r(i5291[2], i5291[3], 0, i5290, 'poolParent')
  i5290.startSize = i5291[4]
  return i5290
}

Deserializers["LunaController"] = function (request, data, root) {
  var i5292 = root || request.c( 'LunaController' )
  var i5293 = data
  i5292.LimitTimePlay = !!i5293[0]
  i5292.TimePlay = i5293[1]
  var i5295 = i5293[2]
  var i5294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i5295.length; i += 2) {
  request.r(i5295[i + 0], i5295[i + 1], 1, i5294, '')
  }
  i5292.images = i5294
  request.r(i5293[3], i5293[4], 0, i5292, 'CTA')
  return i5292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5299 = data
  request.r(i5299[0], i5299[1], 0, i5298, 'sharedMesh')
  i5298.convex = !!i5299[2]
  i5298.enabled = !!i5299[3]
  i5298.isTrigger = !!i5299[4]
  request.r(i5299[5], i5299[6], 0, i5298, 'material')
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5301 = data
  i5300.center = new pc.Vec3( i5301[0], i5301[1], i5301[2] )
  i5300.radius = i5301[3]
  i5300.enabled = !!i5301[4]
  i5300.isTrigger = !!i5301[5]
  request.r(i5301[6], i5301[7], 0, i5300, 'material')
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5303 = data
  i5302.ambientIntensity = i5303[0]
  i5302.reflectionIntensity = i5303[1]
  i5302.ambientMode = i5303[2]
  i5302.ambientLight = new pc.Color(i5303[3], i5303[4], i5303[5], i5303[6])
  i5302.ambientSkyColor = new pc.Color(i5303[7], i5303[8], i5303[9], i5303[10])
  i5302.ambientGroundColor = new pc.Color(i5303[11], i5303[12], i5303[13], i5303[14])
  i5302.ambientEquatorColor = new pc.Color(i5303[15], i5303[16], i5303[17], i5303[18])
  i5302.fogColor = new pc.Color(i5303[19], i5303[20], i5303[21], i5303[22])
  i5302.fogEndDistance = i5303[23]
  i5302.fogStartDistance = i5303[24]
  i5302.fogDensity = i5303[25]
  i5302.fog = !!i5303[26]
  request.r(i5303[27], i5303[28], 0, i5302, 'skybox')
  i5302.fogMode = i5303[29]
  var i5305 = i5303[30]
  var i5304 = []
  for(var i = 0; i < i5305.length; i += 1) {
    i5304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5305[i + 0]) );
  }
  i5302.lightmaps = i5304
  i5302.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5303[31], i5302.lightProbes)
  i5302.lightmapsMode = i5303[32]
  i5302.mixedBakeMode = i5303[33]
  i5302.environmentLightingMode = i5303[34]
  i5302.ambientProbe = new pc.SphericalHarmonicsL2(i5303[35])
  request.r(i5303[36], i5303[37], 0, i5302, 'customReflection')
  request.r(i5303[38], i5303[39], 0, i5302, 'defaultReflection')
  i5302.defaultReflectionMode = i5303[40]
  i5302.defaultReflectionResolution = i5303[41]
  i5302.sunLightObjectId = i5303[42]
  i5302.pixelLightCount = i5303[43]
  i5302.defaultReflectionHDR = !!i5303[44]
  i5302.hasLightDataAsset = !!i5303[45]
  i5302.hasManualGenerate = !!i5303[46]
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5309 = data
  request.r(i5309[0], i5309[1], 0, i5308, 'lightmapColor')
  request.r(i5309[2], i5309[3], 0, i5308, 'lightmapDirection')
  request.r(i5309[4], i5309[5], 0, i5308, 'shadowMask')
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5310 = root || new UnityEngine.LightProbes()
  var i5311 = data
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5319 = data
  var i5321 = i5319[0]
  var i5320 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5321[i + 0]));
  }
  i5318.ShaderCompilationErrors = i5320
  i5318.name = i5319[1]
  i5318.guid = i5319[2]
  var i5323 = i5319[3]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.push( i5323[i + 0] );
  }
  i5318.shaderDefinedKeywords = i5322
  var i5325 = i5319[4]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5325[i + 0]) );
  }
  i5318.passes = i5324
  var i5327 = i5319[5]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5327[i + 0]) );
  }
  i5318.usePasses = i5326
  var i5329 = i5319[6]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5329[i + 0]) );
  }
  i5318.defaultParameterValues = i5328
  request.r(i5319[7], i5319[8], 0, i5318, 'unityFallbackShader')
  i5318.readDepth = !!i5319[9]
  i5318.hasDepthOnlyPass = !!i5319[10]
  i5318.isCreatedByShaderGraph = !!i5319[11]
  i5318.disableBatching = !!i5319[12]
  i5318.compiled = !!i5319[13]
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5333 = data
  i5332.shaderName = i5333[0]
  i5332.errorMessage = i5333[1]
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5338 = root || new pc.UnityShaderPass()
  var i5339 = data
  i5338.id = i5339[0]
  i5338.subShaderIndex = i5339[1]
  i5338.name = i5339[2]
  i5338.passType = i5339[3]
  i5338.grabPassTextureName = i5339[4]
  i5338.usePass = !!i5339[5]
  i5338.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[6], i5338.zTest)
  i5338.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[7], i5338.zWrite)
  i5338.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[8], i5338.culling)
  i5338.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5339[9], i5338.blending)
  i5338.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5339[10], i5338.alphaBlending)
  i5338.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[11], i5338.colorWriteMask)
  i5338.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[12], i5338.offsetUnits)
  i5338.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[13], i5338.offsetFactor)
  i5338.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[14], i5338.stencilRef)
  i5338.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[15], i5338.stencilReadMask)
  i5338.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[16], i5338.stencilWriteMask)
  i5338.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5339[17], i5338.stencilOp)
  i5338.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5339[18], i5338.stencilOpFront)
  i5338.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5339[19], i5338.stencilOpBack)
  var i5341 = i5339[20]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5341[i + 0]) );
  }
  i5338.tags = i5340
  var i5343 = i5339[21]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( i5343[i + 0] );
  }
  i5338.passDefinedKeywords = i5342
  var i5345 = i5339[22]
  var i5344 = []
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5345[i + 0]) );
  }
  i5338.passDefinedKeywordGroups = i5344
  var i5347 = i5339[23]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5347[i + 0]) );
  }
  i5338.variants = i5346
  var i5349 = i5339[24]
  var i5348 = []
  for(var i = 0; i < i5349.length; i += 1) {
    i5348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5349[i + 0]) );
  }
  i5338.excludedVariants = i5348
  i5338.hasDepthReader = !!i5339[25]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5351 = data
  i5350.val = i5351[0]
  i5350.name = i5351[1]
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5353 = data
  i5352.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5353[0], i5352.src)
  i5352.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5353[1], i5352.dst)
  i5352.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5353[2], i5352.op)
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5355 = data
  i5354.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5355[0], i5354.pass)
  i5354.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5355[1], i5354.fail)
  i5354.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5355[2], i5354.zFail)
  i5354.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5355[3], i5354.comp)
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5359 = data
  i5358.name = i5359[0]
  i5358.value = i5359[1]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5363 = data
  var i5365 = i5363[0]
  var i5364 = []
  for(var i = 0; i < i5365.length; i += 1) {
    i5364.push( i5365[i + 0] );
  }
  i5362.keywords = i5364
  i5362.hasDiscard = !!i5363[1]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5369 = data
  i5368.passId = i5369[0]
  i5368.subShaderIndex = i5369[1]
  var i5371 = i5369[2]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( i5371[i + 0] );
  }
  i5368.keywords = i5370
  i5368.vertexProgram = i5369[3]
  i5368.fragmentProgram = i5369[4]
  i5368.exportedForWebGl2 = !!i5369[5]
  i5368.readDepth = !!i5369[6]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'shader')
  i5374.pass = i5375[2]
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5379 = data
  i5378.name = i5379[0]
  i5378.type = i5379[1]
  i5378.value = new pc.Vec4( i5379[2], i5379[3], i5379[4], i5379[5] )
  i5378.textureValue = i5379[6]
  i5378.shaderPropertyFlag = i5379[7]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5381 = data
  i5380.name = i5381[0]
  request.r(i5381[1], i5381[2], 0, i5380, 'texture')
  i5380.aabb = i5381[3]
  i5380.vertices = i5381[4]
  i5380.triangles = i5381[5]
  i5380.textureRect = UnityEngine.Rect.MinMaxRect(i5381[6], i5381[7], i5381[8], i5381[9])
  i5380.packedRect = UnityEngine.Rect.MinMaxRect(i5381[10], i5381[11], i5381[12], i5381[13])
  i5380.border = new pc.Vec4( i5381[14], i5381[15], i5381[16], i5381[17] )
  i5380.transparency = i5381[18]
  i5380.bounds = i5381[19]
  i5380.pixelsPerUnit = i5381[20]
  i5380.textureWidth = i5381[21]
  i5380.textureHeight = i5381[22]
  i5380.nativeSize = new pc.Vec2( i5381[23], i5381[24] )
  i5380.pivot = new pc.Vec2( i5381[25], i5381[26] )
  i5380.textureRectOffset = new pc.Vec2( i5381[27], i5381[28] )
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5383 = data
  i5382.name = i5383[0]
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5385 = data
  i5384.name = i5385[0]
  i5384.wrapMode = i5385[1]
  i5384.isLooping = !!i5385[2]
  i5384.length = i5385[3]
  var i5387 = i5385[4]
  var i5386 = []
  for(var i = 0; i < i5387.length; i += 1) {
    i5386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5387[i + 0]) );
  }
  i5384.curves = i5386
  var i5389 = i5385[5]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5389[i + 0]) );
  }
  i5384.events = i5388
  i5384.halfPrecision = !!i5385[6]
  i5384._frameRate = i5385[7]
  i5384.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5385[8], i5384.localBounds)
  i5384.hasMuscleCurves = !!i5385[9]
  var i5391 = i5385[10]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( i5391[i + 0] );
  }
  i5384.clipMuscleConstant = i5390
  i5384.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5385[11], i5384.clipBindingConstant)
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5395 = data
  i5394.path = i5395[0]
  i5394.hash = i5395[1]
  i5394.componentType = i5395[2]
  i5394.property = i5395[3]
  i5394.keys = i5395[4]
  var i5397 = i5395[5]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5397[i + 0]) );
  }
  i5394.objectReferenceKeys = i5396
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5401 = data
  i5400.time = i5401[0]
  request.r(i5401[1], i5401[2], 0, i5400, 'value')
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5405 = data
  i5404.functionName = i5405[0]
  i5404.floatParameter = i5405[1]
  i5404.intParameter = i5405[2]
  i5404.stringParameter = i5405[3]
  request.r(i5405[4], i5405[5], 0, i5404, 'objectReferenceParameter')
  i5404.time = i5405[6]
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5407 = data
  i5406.center = new pc.Vec3( i5407[0], i5407[1], i5407[2] )
  i5406.extends = new pc.Vec3( i5407[3], i5407[4], i5407[5] )
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5411 = data
  var i5413 = i5411[0]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.push( i5413[i + 0] );
  }
  i5410.genericBindings = i5412
  var i5415 = i5411[1]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.push( i5415[i + 0] );
  }
  i5410.pptrCurveMapping = i5414
  return i5410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5417 = data
  i5416.name = i5417[0]
  var i5419 = i5417[1]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5419[i + 0]) );
  }
  i5416.layers = i5418
  var i5421 = i5417[2]
  var i5420 = []
  for(var i = 0; i < i5421.length; i += 1) {
    i5420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5421[i + 0]) );
  }
  i5416.parameters = i5420
  i5416.animationClips = i5417[3]
  i5416.avatarUnsupported = i5417[4]
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5425 = data
  i5424.name = i5425[0]
  i5424.defaultWeight = i5425[1]
  i5424.blendingMode = i5425[2]
  i5424.avatarMask = i5425[3]
  i5424.syncedLayerIndex = i5425[4]
  i5424.syncedLayerAffectsTiming = !!i5425[5]
  i5424.syncedLayers = i5425[6]
  i5424.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5425[7], i5424.stateMachine)
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5427 = data
  i5426.id = i5427[0]
  i5426.name = i5427[1]
  i5426.path = i5427[2]
  var i5429 = i5427[3]
  var i5428 = []
  for(var i = 0; i < i5429.length; i += 1) {
    i5428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5429[i + 0]) );
  }
  i5426.states = i5428
  var i5431 = i5427[4]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5431[i + 0]) );
  }
  i5426.machines = i5430
  var i5433 = i5427[5]
  var i5432 = []
  for(var i = 0; i < i5433.length; i += 1) {
    i5432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5433[i + 0]) );
  }
  i5426.entryStateTransitions = i5432
  var i5435 = i5427[6]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5435[i + 0]) );
  }
  i5426.exitStateTransitions = i5434
  var i5437 = i5427[7]
  var i5436 = []
  for(var i = 0; i < i5437.length; i += 1) {
    i5436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5437[i + 0]) );
  }
  i5426.anyStateTransitions = i5436
  i5426.defaultStateId = i5427[8]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5441 = data
  i5440.id = i5441[0]
  i5440.name = i5441[1]
  i5440.cycleOffset = i5441[2]
  i5440.cycleOffsetParameter = i5441[3]
  i5440.cycleOffsetParameterActive = !!i5441[4]
  i5440.mirror = !!i5441[5]
  i5440.mirrorParameter = i5441[6]
  i5440.mirrorParameterActive = !!i5441[7]
  i5440.motionId = i5441[8]
  i5440.nameHash = i5441[9]
  i5440.fullPathHash = i5441[10]
  i5440.speed = i5441[11]
  i5440.speedParameter = i5441[12]
  i5440.speedParameterActive = !!i5441[13]
  i5440.tag = i5441[14]
  i5440.tagHash = i5441[15]
  i5440.writeDefaultValues = !!i5441[16]
  var i5443 = i5441[17]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 2) {
  request.r(i5443[i + 0], i5443[i + 1], 2, i5442, '')
  }
  i5440.behaviours = i5442
  var i5445 = i5441[18]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 1) {
    i5444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5445[i + 0]) );
  }
  i5440.transitions = i5444
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5451 = data
  i5450.fullPath = i5451[0]
  i5450.canTransitionToSelf = !!i5451[1]
  i5450.duration = i5451[2]
  i5450.exitTime = i5451[3]
  i5450.hasExitTime = !!i5451[4]
  i5450.hasFixedDuration = !!i5451[5]
  i5450.interruptionSource = i5451[6]
  i5450.offset = i5451[7]
  i5450.orderedInterruption = !!i5451[8]
  i5450.destinationStateId = i5451[9]
  i5450.isExit = !!i5451[10]
  i5450.mute = !!i5451[11]
  i5450.solo = !!i5451[12]
  var i5453 = i5451[13]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5453[i + 0]) );
  }
  i5450.conditions = i5452
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5457 = data
  i5456.mode = i5457[0]
  i5456.parameter = i5457[1]
  i5456.threshold = i5457[2]
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5463 = data
  i5462.destinationStateId = i5463[0]
  i5462.isExit = !!i5463[1]
  i5462.mute = !!i5463[2]
  i5462.solo = !!i5463[3]
  var i5465 = i5463[4]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 1) {
    i5464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5465[i + 0]) );
  }
  i5462.conditions = i5464
  return i5462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5469 = data
  i5468.defaultBool = !!i5469[0]
  i5468.defaultFloat = i5469[1]
  i5468.defaultInt = i5469[2]
  i5468.name = i5469[3]
  i5468.nameHash = i5469[4]
  i5468.type = i5469[5]
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i5471 = data
  i5470.name = i5471[0]
  request.r(i5471[1], i5471[2], 0, i5470, '_runtimeAnimatorController')
  var i5473 = i5471[3]
  var i5472 = []
  for(var i = 0; i < i5473.length; i += 2) {
  request.r(i5473[i + 0], i5473[i + 1], 2, i5472, '')
  }
  i5470._originalAnimationClips = i5472
  var i5475 = i5471[4]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 2) {
  request.r(i5475[i + 0], i5475[i + 1], 2, i5474, '')
  }
  i5470._overrideAnimationClips = i5474
  var i5477 = i5471[5]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 2) {
  request.r(i5477[i + 0], i5477[i + 1], 2, i5476, '')
  }
  i5470._animationClips = i5476
  var i5479 = i5471[6]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('UnityEngine.AnimationClipPair', i5479[i + 0]) );
  }
  i5470._animationClipPairs = i5478
  return i5470
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i5484 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i5485 = data
  request.r(i5485[0], i5485[1], 0, i5484, 'originalClip')
  request.r(i5485[2], i5485[3], 0, i5484, 'overrideClip')
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5487 = data
  i5486.name = i5487[0]
  i5486.bytes64 = i5487[1]
  i5486.data = i5487[2]
  return i5486
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5488 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5489 = data
  i5488.normalStyle = i5489[0]
  i5488.normalSpacingOffset = i5489[1]
  i5488.boldStyle = i5489[2]
  i5488.boldSpacing = i5489[3]
  i5488.italicStyle = i5489[4]
  i5488.tabSize = i5489[5]
  request.r(i5489[6], i5489[7], 0, i5488, 'atlas')
  i5488.m_SourceFontFileGUID = i5489[8]
  i5488.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5489[9], i5488.m_CreationSettings)
  request.r(i5489[10], i5489[11], 0, i5488, 'm_SourceFontFile')
  i5488.m_SourceFontFilePath = i5489[12]
  i5488.m_AtlasPopulationMode = i5489[13]
  i5488.InternalDynamicOS = !!i5489[14]
  var i5491 = i5489[15]
  var i5490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.add(request.d('UnityEngine.TextCore.Glyph', i5491[i + 0]));
  }
  i5488.m_GlyphTable = i5490
  var i5493 = i5489[16]
  var i5492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.add(request.d('TMPro.TMP_Character', i5493[i + 0]));
  }
  i5488.m_CharacterTable = i5492
  var i5495 = i5489[17]
  var i5494 = []
  for(var i = 0; i < i5495.length; i += 2) {
  request.r(i5495[i + 0], i5495[i + 1], 2, i5494, '')
  }
  i5488.m_AtlasTextures = i5494
  i5488.m_AtlasTextureIndex = i5489[18]
  i5488.m_IsMultiAtlasTexturesEnabled = !!i5489[19]
  i5488.m_GetFontFeatures = !!i5489[20]
  i5488.m_ClearDynamicDataOnBuild = !!i5489[21]
  i5488.m_AtlasWidth = i5489[22]
  i5488.m_AtlasHeight = i5489[23]
  i5488.m_AtlasPadding = i5489[24]
  i5488.m_AtlasRenderMode = i5489[25]
  var i5497 = i5489[26]
  var i5496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.add(request.d('UnityEngine.TextCore.GlyphRect', i5497[i + 0]));
  }
  i5488.m_UsedGlyphRects = i5496
  var i5499 = i5489[27]
  var i5498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.add(request.d('UnityEngine.TextCore.GlyphRect', i5499[i + 0]));
  }
  i5488.m_FreeGlyphRects = i5498
  i5488.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5489[28], i5488.m_FontFeatureTable)
  i5488.m_ShouldReimportFontFeatures = !!i5489[29]
  var i5501 = i5489[30]
  var i5500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5501.length; i += 2) {
  request.r(i5501[i + 0], i5501[i + 1], 1, i5500, '')
  }
  i5488.m_FallbackFontAssetTable = i5500
  var i5503 = i5489[31]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 1) {
    i5502.push( request.d('TMPro.TMP_FontWeightPair', i5503[i + 0]) );
  }
  i5488.m_FontWeightTable = i5502
  var i5505 = i5489[32]
  var i5504 = []
  for(var i = 0; i < i5505.length; i += 1) {
    i5504.push( request.d('TMPro.TMP_FontWeightPair', i5505[i + 0]) );
  }
  i5488.fontWeights = i5504
  i5488.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5489[33], i5488.m_fontInfo)
  var i5507 = i5489[34]
  var i5506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5507.length; i += 1) {
    i5506.add(request.d('TMPro.TMP_Glyph', i5507[i + 0]));
  }
  i5488.m_glyphInfoList = i5506
  i5488.m_KerningTable = request.d('TMPro.KerningTable', i5489[35], i5488.m_KerningTable)
  var i5509 = i5489[36]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 1, i5508, '')
  }
  i5488.fallbackFontAssets = i5508
  i5488.m_Version = i5489[37]
  i5488.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5489[38], i5488.m_FaceInfo)
  request.r(i5489[39], i5489[40], 0, i5488, 'm_Material')
  return i5488
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5510 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5511 = data
  i5510.sourceFontFileName = i5511[0]
  i5510.sourceFontFileGUID = i5511[1]
  i5510.faceIndex = i5511[2]
  i5510.pointSizeSamplingMode = i5511[3]
  i5510.pointSize = i5511[4]
  i5510.padding = i5511[5]
  i5510.paddingMode = i5511[6]
  i5510.packingMode = i5511[7]
  i5510.atlasWidth = i5511[8]
  i5510.atlasHeight = i5511[9]
  i5510.characterSetSelectionMode = i5511[10]
  i5510.characterSequence = i5511[11]
  i5510.referencedFontAssetGUID = i5511[12]
  i5510.referencedTextAssetGUID = i5511[13]
  i5510.fontStyle = i5511[14]
  i5510.fontStyleModifier = i5511[15]
  i5510.renderMode = i5511[16]
  i5510.includeFontFeatures = !!i5511[17]
  return i5510
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5515 = data
  i5514.m_Index = i5515[0]
  i5514.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5515[1], i5514.m_Metrics)
  i5514.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5515[2], i5514.m_GlyphRect)
  i5514.m_Scale = i5515[3]
  i5514.m_AtlasIndex = i5515[4]
  i5514.m_ClassDefinitionType = i5515[5]
  return i5514
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5516 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5517 = data
  i5516.m_Width = i5517[0]
  i5516.m_Height = i5517[1]
  i5516.m_HorizontalBearingX = i5517[2]
  i5516.m_HorizontalBearingY = i5517[3]
  i5516.m_HorizontalAdvance = i5517[4]
  return i5516
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5518 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5519 = data
  i5518.m_X = i5519[0]
  i5518.m_Y = i5519[1]
  i5518.m_Width = i5519[2]
  i5518.m_Height = i5519[3]
  return i5518
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5522 = root || request.c( 'TMPro.TMP_Character' )
  var i5523 = data
  i5522.m_ElementType = i5523[0]
  i5522.m_Unicode = i5523[1]
  i5522.m_GlyphIndex = i5523[2]
  i5522.m_Scale = i5523[3]
  return i5522
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5528 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5529 = data
  var i5531 = i5529[0]
  var i5530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5531.length; i += 1) {
    i5530.add(request.d('TMPro.MultipleSubstitutionRecord', i5531[i + 0]));
  }
  i5528.m_MultipleSubstitutionRecords = i5530
  var i5533 = i5529[1]
  var i5532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5533.length; i += 1) {
    i5532.add(request.d('TMPro.LigatureSubstitutionRecord', i5533[i + 0]));
  }
  i5528.m_LigatureSubstitutionRecords = i5532
  var i5535 = i5529[2]
  var i5534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5535.length; i += 1) {
    i5534.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5535[i + 0]));
  }
  i5528.m_GlyphPairAdjustmentRecords = i5534
  var i5537 = i5529[3]
  var i5536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5537[i + 0]));
  }
  i5528.m_MarkToBaseAdjustmentRecords = i5536
  var i5539 = i5529[4]
  var i5538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5539[i + 0]));
  }
  i5528.m_MarkToMarkAdjustmentRecords = i5538
  return i5528
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5542 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5543 = data
  i5542.m_TargetGlyphID = i5543[0]
  i5542.m_SubstituteGlyphIDs = i5543[1]
  return i5542
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5546 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5547 = data
  i5546.m_ComponentGlyphIDs = i5547[0]
  i5546.m_LigatureGlyphID = i5547[1]
  return i5546
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5550 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5551 = data
  i5550.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5551[0], i5550.m_FirstAdjustmentRecord)
  i5550.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5551[1], i5550.m_SecondAdjustmentRecord)
  i5550.m_FeatureLookupFlags = i5551[2]
  return i5550
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5554 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5555 = data
  i5554.m_BaseGlyphID = i5555[0]
  i5554.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5555[1], i5554.m_BaseGlyphAnchorPoint)
  i5554.m_MarkGlyphID = i5555[2]
  i5554.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5555[3], i5554.m_MarkPositionAdjustment)
  return i5554
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5558 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5559 = data
  i5558.m_BaseMarkGlyphID = i5559[0]
  i5558.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5559[1], i5558.m_BaseMarkGlyphAnchorPoint)
  i5558.m_CombiningMarkGlyphID = i5559[2]
  i5558.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5559[3], i5558.m_CombiningMarkPositionAdjustment)
  return i5558
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5564 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5565 = data
  request.r(i5565[0], i5565[1], 0, i5564, 'regularTypeface')
  request.r(i5565[2], i5565[3], 0, i5564, 'italicTypeface')
  return i5564
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5566 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5567 = data
  i5566.Name = i5567[0]
  i5566.PointSize = i5567[1]
  i5566.Scale = i5567[2]
  i5566.CharacterCount = i5567[3]
  i5566.LineHeight = i5567[4]
  i5566.Baseline = i5567[5]
  i5566.Ascender = i5567[6]
  i5566.CapHeight = i5567[7]
  i5566.Descender = i5567[8]
  i5566.CenterLine = i5567[9]
  i5566.SuperscriptOffset = i5567[10]
  i5566.SubscriptOffset = i5567[11]
  i5566.SubSize = i5567[12]
  i5566.Underline = i5567[13]
  i5566.UnderlineThickness = i5567[14]
  i5566.strikethrough = i5567[15]
  i5566.strikethroughThickness = i5567[16]
  i5566.TabWidth = i5567[17]
  i5566.Padding = i5567[18]
  i5566.AtlasWidth = i5567[19]
  i5566.AtlasHeight = i5567[20]
  return i5566
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5570 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5571 = data
  i5570.id = i5571[0]
  i5570.x = i5571[1]
  i5570.y = i5571[2]
  i5570.width = i5571[3]
  i5570.height = i5571[4]
  i5570.xOffset = i5571[5]
  i5570.yOffset = i5571[6]
  i5570.xAdvance = i5571[7]
  i5570.scale = i5571[8]
  return i5570
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5572 = root || request.c( 'TMPro.KerningTable' )
  var i5573 = data
  var i5575 = i5573[0]
  var i5574 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5575.length; i += 1) {
    i5574.add(request.d('TMPro.KerningPair', i5575[i + 0]));
  }
  i5572.kerningPairs = i5574
  return i5572
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5578 = root || request.c( 'TMPro.KerningPair' )
  var i5579 = data
  i5578.xOffset = i5579[0]
  i5578.m_FirstGlyph = i5579[1]
  i5578.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5579[2], i5578.m_FirstGlyphAdjustments)
  i5578.m_SecondGlyph = i5579[3]
  i5578.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5579[4], i5578.m_SecondGlyphAdjustments)
  i5578.m_IgnoreSpacingAdjustments = !!i5579[5]
  return i5578
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5580 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5581 = data
  i5580.m_FaceIndex = i5581[0]
  i5580.m_FamilyName = i5581[1]
  i5580.m_StyleName = i5581[2]
  i5580.m_PointSize = i5581[3]
  i5580.m_Scale = i5581[4]
  i5580.m_UnitsPerEM = i5581[5]
  i5580.m_LineHeight = i5581[6]
  i5580.m_AscentLine = i5581[7]
  i5580.m_CapLine = i5581[8]
  i5580.m_MeanLine = i5581[9]
  i5580.m_Baseline = i5581[10]
  i5580.m_DescentLine = i5581[11]
  i5580.m_SuperscriptOffset = i5581[12]
  i5580.m_SuperscriptSize = i5581[13]
  i5580.m_SubscriptOffset = i5581[14]
  i5580.m_SubscriptSize = i5581[15]
  i5580.m_UnderlineOffset = i5581[16]
  i5580.m_UnderlineThickness = i5581[17]
  i5580.m_StrikethroughOffset = i5581[18]
  i5580.m_StrikethroughThickness = i5581[19]
  i5580.m_TabWidth = i5581[20]
  return i5580
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5582 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5583 = data
  i5582.useSafeMode = !!i5583[0]
  i5582.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5583[1], i5582.safeModeOptions)
  i5582.timeScale = i5583[2]
  i5582.unscaledTimeScale = i5583[3]
  i5582.useSmoothDeltaTime = !!i5583[4]
  i5582.maxSmoothUnscaledTime = i5583[5]
  i5582.rewindCallbackMode = i5583[6]
  i5582.showUnityEditorReport = !!i5583[7]
  i5582.logBehaviour = i5583[8]
  i5582.drawGizmos = !!i5583[9]
  i5582.defaultRecyclable = !!i5583[10]
  i5582.defaultAutoPlay = i5583[11]
  i5582.defaultUpdateType = i5583[12]
  i5582.defaultTimeScaleIndependent = !!i5583[13]
  i5582.defaultEaseType = i5583[14]
  i5582.defaultEaseOvershootOrAmplitude = i5583[15]
  i5582.defaultEasePeriod = i5583[16]
  i5582.defaultAutoKill = !!i5583[17]
  i5582.defaultLoopType = i5583[18]
  i5582.debugMode = !!i5583[19]
  i5582.debugStoreTargetId = !!i5583[20]
  i5582.showPreviewPanel = !!i5583[21]
  i5582.storeSettingsLocation = i5583[22]
  i5582.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5583[23], i5582.modules)
  i5582.createASMDEF = !!i5583[24]
  i5582.showPlayingTweens = !!i5583[25]
  i5582.showPausedTweens = !!i5583[26]
  return i5582
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5584 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5585 = data
  i5584.logBehaviour = i5585[0]
  i5584.nestedTweenFailureBehaviour = i5585[1]
  return i5584
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5587 = data
  i5586.showPanel = !!i5587[0]
  i5586.audioEnabled = !!i5587[1]
  i5586.physicsEnabled = !!i5587[2]
  i5586.physics2DEnabled = !!i5587[3]
  i5586.spriteEnabled = !!i5587[4]
  i5586.uiEnabled = !!i5587[5]
  i5586.textMeshProEnabled = !!i5587[6]
  i5586.tk2DEnabled = !!i5587[7]
  i5586.deAudioEnabled = !!i5587[8]
  i5586.deUnityExtendedEnabled = !!i5587[9]
  i5586.epoOutlineEnabled = !!i5587[10]
  return i5586
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5588 = root || request.c( 'TMPro.TMP_Settings' )
  var i5589 = data
  i5588.assetVersion = i5589[0]
  i5588.m_TextWrappingMode = i5589[1]
  i5588.m_enableKerning = !!i5589[2]
  var i5591 = i5589[3]
  var i5590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5591.length; i += 1) {
    i5590.add(i5591[i + 0]);
  }
  i5588.m_ActiveFontFeatures = i5590
  i5588.m_enableExtraPadding = !!i5589[4]
  i5588.m_enableTintAllSprites = !!i5589[5]
  i5588.m_enableParseEscapeCharacters = !!i5589[6]
  i5588.m_EnableRaycastTarget = !!i5589[7]
  i5588.m_GetFontFeaturesAtRuntime = !!i5589[8]
  i5588.m_missingGlyphCharacter = i5589[9]
  i5588.m_ClearDynamicDataOnBuild = !!i5589[10]
  i5588.m_warningsDisabled = !!i5589[11]
  request.r(i5589[12], i5589[13], 0, i5588, 'm_defaultFontAsset')
  i5588.m_defaultFontAssetPath = i5589[14]
  i5588.m_defaultFontSize = i5589[15]
  i5588.m_defaultAutoSizeMinRatio = i5589[16]
  i5588.m_defaultAutoSizeMaxRatio = i5589[17]
  i5588.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5589[18], i5589[19] )
  i5588.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5589[20], i5589[21] )
  i5588.m_autoSizeTextContainer = !!i5589[22]
  i5588.m_IsTextObjectScaleStatic = !!i5589[23]
  var i5593 = i5589[24]
  var i5592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5593.length; i += 2) {
  request.r(i5593[i + 0], i5593[i + 1], 1, i5592, '')
  }
  i5588.m_fallbackFontAssets = i5592
  i5588.m_matchMaterialPreset = !!i5589[25]
  i5588.m_HideSubTextObjects = !!i5589[26]
  request.r(i5589[27], i5589[28], 0, i5588, 'm_defaultSpriteAsset')
  i5588.m_defaultSpriteAssetPath = i5589[29]
  i5588.m_enableEmojiSupport = !!i5589[30]
  i5588.m_MissingCharacterSpriteUnicode = i5589[31]
  var i5595 = i5589[32]
  var i5594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5595.length; i += 2) {
  request.r(i5595[i + 0], i5595[i + 1], 1, i5594, '')
  }
  i5588.m_EmojiFallbackTextAssets = i5594
  i5588.m_defaultColorGradientPresetsPath = i5589[33]
  request.r(i5589[34], i5589[35], 0, i5588, 'm_defaultStyleSheet')
  i5588.m_StyleSheetsResourcePath = i5589[36]
  request.r(i5589[37], i5589[38], 0, i5588, 'm_leadingCharacters')
  request.r(i5589[39], i5589[40], 0, i5588, 'm_followingCharacters')
  i5588.m_UseModernHangulLineBreakingRules = !!i5589[41]
  return i5588
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5598 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5599 = data
  request.r(i5599[0], i5599[1], 0, i5598, 'spriteSheet')
  var i5601 = i5599[2]
  var i5600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.add(request.d('TMPro.TMP_Sprite', i5601[i + 0]));
  }
  i5598.spriteInfoList = i5600
  var i5603 = i5599[3]
  var i5602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5603.length; i += 2) {
  request.r(i5603[i + 0], i5603[i + 1], 1, i5602, '')
  }
  i5598.fallbackSpriteAssets = i5602
  var i5605 = i5599[4]
  var i5604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5605.length; i += 1) {
    i5604.add(request.d('TMPro.TMP_SpriteCharacter', i5605[i + 0]));
  }
  i5598.m_SpriteCharacterTable = i5604
  var i5607 = i5599[5]
  var i5606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.add(request.d('TMPro.TMP_SpriteGlyph', i5607[i + 0]));
  }
  i5598.m_GlyphTable = i5606
  i5598.m_Version = i5599[6]
  i5598.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5599[7], i5598.m_FaceInfo)
  request.r(i5599[8], i5599[9], 0, i5598, 'm_Material')
  return i5598
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5610 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5611 = data
  i5610.name = i5611[0]
  i5610.hashCode = i5611[1]
  i5610.unicode = i5611[2]
  i5610.pivot = new pc.Vec2( i5611[3], i5611[4] )
  request.r(i5611[5], i5611[6], 0, i5610, 'sprite')
  i5610.id = i5611[7]
  i5610.x = i5611[8]
  i5610.y = i5611[9]
  i5610.width = i5611[10]
  i5610.height = i5611[11]
  i5610.xOffset = i5611[12]
  i5610.yOffset = i5611[13]
  i5610.xAdvance = i5611[14]
  i5610.scale = i5611[15]
  return i5610
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5616 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5617 = data
  i5616.m_Name = i5617[0]
  i5616.m_ElementType = i5617[1]
  i5616.m_Unicode = i5617[2]
  i5616.m_GlyphIndex = i5617[3]
  i5616.m_Scale = i5617[4]
  return i5616
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5620 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5621 = data
  request.r(i5621[0], i5621[1], 0, i5620, 'sprite')
  i5620.m_Index = i5621[2]
  i5620.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5621[3], i5620.m_Metrics)
  i5620.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5621[4], i5620.m_GlyphRect)
  i5620.m_Scale = i5621[5]
  i5620.m_AtlasIndex = i5621[6]
  i5620.m_ClassDefinitionType = i5621[7]
  return i5620
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5622 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5623 = data
  var i5625 = i5623[0]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.add(request.d('TMPro.TMP_Style', i5625[i + 0]));
  }
  i5622.m_StyleList = i5624
  return i5622
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5628 = root || request.c( 'TMPro.TMP_Style' )
  var i5629 = data
  i5628.m_Name = i5629[0]
  i5628.m_HashCode = i5629[1]
  i5628.m_OpeningDefinition = i5629[2]
  i5628.m_ClosingDefinition = i5629[3]
  i5628.m_OpeningTagArray = i5629[4]
  i5628.m_ClosingTagArray = i5629[5]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5631 = data
  var i5633 = i5631[0]
  var i5632 = []
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5633[i + 0]) );
  }
  i5630.files = i5632
  i5630.componentToPrefabIds = i5631[1]
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5637 = data
  i5636.path = i5637[0]
  request.r(i5637[1], i5637[2], 0, i5636, 'unityObject')
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5639 = data
  var i5641 = i5639[0]
  var i5640 = []
  for(var i = 0; i < i5641.length; i += 1) {
    i5640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5641[i + 0]) );
  }
  i5638.scriptsExecutionOrder = i5640
  var i5643 = i5639[1]
  var i5642 = []
  for(var i = 0; i < i5643.length; i += 1) {
    i5642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5643[i + 0]) );
  }
  i5638.sortingLayers = i5642
  var i5645 = i5639[2]
  var i5644 = []
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5645[i + 0]) );
  }
  i5638.cullingLayers = i5644
  i5638.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5639[3], i5638.timeSettings)
  i5638.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5639[4], i5638.physicsSettings)
  i5638.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5639[5], i5638.physics2DSettings)
  i5638.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5639[6], i5638.qualitySettings)
  i5638.enableRealtimeShadows = !!i5639[7]
  i5638.enableAutoInstancing = !!i5639[8]
  i5638.enableStaticBatching = !!i5639[9]
  i5638.enableDynamicBatching = !!i5639[10]
  i5638.usePreservativeDynamicBatching = !!i5639[11]
  i5638.lightmapEncodingQuality = i5639[12]
  i5638.desiredColorSpace = i5639[13]
  var i5647 = i5639[14]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.push( i5647[i + 0] );
  }
  i5638.allTags = i5646
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5651 = data
  i5650.name = i5651[0]
  i5650.value = i5651[1]
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5655 = data
  i5654.id = i5655[0]
  i5654.name = i5655[1]
  i5654.value = i5655[2]
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5659 = data
  i5658.id = i5659[0]
  i5658.name = i5659[1]
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5661 = data
  i5660.fixedDeltaTime = i5661[0]
  i5660.maximumDeltaTime = i5661[1]
  i5660.timeScale = i5661[2]
  i5660.maximumParticleTimestep = i5661[3]
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5663 = data
  i5662.gravity = new pc.Vec3( i5663[0], i5663[1], i5663[2] )
  i5662.defaultSolverIterations = i5663[3]
  i5662.bounceThreshold = i5663[4]
  i5662.autoSyncTransforms = !!i5663[5]
  i5662.autoSimulation = !!i5663[6]
  var i5665 = i5663[7]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5665[i + 0]) );
  }
  i5662.collisionMatrix = i5664
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5669 = data
  i5668.enabled = !!i5669[0]
  i5668.layerId = i5669[1]
  i5668.otherLayerId = i5669[2]
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5671 = data
  request.r(i5671[0], i5671[1], 0, i5670, 'material')
  i5670.gravity = new pc.Vec2( i5671[2], i5671[3] )
  i5670.positionIterations = i5671[4]
  i5670.velocityIterations = i5671[5]
  i5670.velocityThreshold = i5671[6]
  i5670.maxLinearCorrection = i5671[7]
  i5670.maxAngularCorrection = i5671[8]
  i5670.maxTranslationSpeed = i5671[9]
  i5670.maxRotationSpeed = i5671[10]
  i5670.baumgarteScale = i5671[11]
  i5670.baumgarteTOIScale = i5671[12]
  i5670.timeToSleep = i5671[13]
  i5670.linearSleepTolerance = i5671[14]
  i5670.angularSleepTolerance = i5671[15]
  i5670.defaultContactOffset = i5671[16]
  i5670.autoSimulation = !!i5671[17]
  i5670.queriesHitTriggers = !!i5671[18]
  i5670.queriesStartInColliders = !!i5671[19]
  i5670.callbacksOnDisable = !!i5671[20]
  i5670.reuseCollisionCallbacks = !!i5671[21]
  i5670.autoSyncTransforms = !!i5671[22]
  var i5673 = i5671[23]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5673[i + 0]) );
  }
  i5670.collisionMatrix = i5672
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5677 = data
  i5676.enabled = !!i5677[0]
  i5676.layerId = i5677[1]
  i5676.otherLayerId = i5677[2]
  return i5676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5679 = data
  var i5681 = i5679[0]
  var i5680 = []
  for(var i = 0; i < i5681.length; i += 1) {
    i5680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5681[i + 0]) );
  }
  i5678.qualityLevels = i5680
  var i5683 = i5679[1]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( i5683[i + 0] );
  }
  i5678.names = i5682
  i5678.shadows = i5679[2]
  i5678.anisotropicFiltering = i5679[3]
  i5678.antiAliasing = i5679[4]
  i5678.lodBias = i5679[5]
  i5678.shadowCascades = i5679[6]
  i5678.shadowDistance = i5679[7]
  i5678.shadowmaskMode = i5679[8]
  i5678.shadowProjection = i5679[9]
  i5678.shadowResolution = i5679[10]
  i5678.softParticles = !!i5679[11]
  i5678.softVegetation = !!i5679[12]
  i5678.activeColorSpace = i5679[13]
  i5678.desiredColorSpace = i5679[14]
  i5678.masterTextureLimit = i5679[15]
  i5678.maxQueuedFrames = i5679[16]
  i5678.particleRaycastBudget = i5679[17]
  i5678.pixelLightCount = i5679[18]
  i5678.realtimeReflectionProbes = !!i5679[19]
  i5678.shadowCascade2Split = i5679[20]
  i5678.shadowCascade4Split = new pc.Vec3( i5679[21], i5679[22], i5679[23] )
  i5678.streamingMipmapsActive = !!i5679[24]
  i5678.vSyncCount = i5679[25]
  i5678.asyncUploadBufferSize = i5679[26]
  i5678.asyncUploadTimeSlice = i5679[27]
  i5678.billboardsFaceCameraPosition = !!i5679[28]
  i5678.shadowNearPlaneOffset = i5679[29]
  i5678.streamingMipmapsMemoryBudget = i5679[30]
  i5678.maximumLODLevel = i5679[31]
  i5678.streamingMipmapsAddAllCameras = !!i5679[32]
  i5678.streamingMipmapsMaxLevelReduction = i5679[33]
  i5678.streamingMipmapsRenderersPerFrame = i5679[34]
  i5678.resolutionScalingFixedDPIFactor = i5679[35]
  i5678.streamingMipmapsMaxFileIORequests = i5679[36]
  i5678.currentQualityLevel = i5679[37]
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i5687 = data
  i5686.name = i5687[0]
  var i5689 = i5687[1]
  var i5688 = []
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i5689[i + 0]) );
  }
  i5686.tos = i5688
  var i5691 = i5687[2]
  var i5690 = []
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.push( i5691[i + 0] );
  }
  i5686.constant = i5690
  i5686.isValid = !!i5687[3]
  i5686.isHuman = !!i5687[4]
  i5686.hasRootMotion = !!i5687[5]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i5695 = data
  i5694.hash = i5695[0]
  i5694.path = i5695[1]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5699 = data
  i5698.weight = i5699[0]
  i5698.vertices = i5699[1]
  i5698.normals = i5699[2]
  i5698.tangents = i5699[3]
  return i5698
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5700 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5701 = data
  request.r(i5701[0], i5701[1], 0, i5700, 'm_ObjectArgument')
  i5700.m_ObjectArgumentAssemblyTypeName = i5701[2]
  i5700.m_IntArgument = i5701[3]
  i5700.m_FloatArgument = i5701[4]
  i5700.m_StringArgument = i5701[5]
  i5700.m_BoolArgument = !!i5701[6]
  return i5700
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5702 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5703 = data
  i5702.m_GlyphIndex = i5703[0]
  i5702.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5703[1], i5702.m_GlyphValueRecord)
  return i5702
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5704 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5705 = data
  i5704.m_XCoordinate = i5705[0]
  i5704.m_YCoordinate = i5705[1]
  return i5704
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5706 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5707 = data
  i5706.m_XPositionAdjustment = i5707[0]
  i5706.m_YPositionAdjustment = i5707[1]
  return i5706
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5708 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5709 = data
  i5708.xPlacement = i5709[0]
  i5708.yPlacement = i5709[1]
  i5708.xAdvance = i5709[2]
  i5708.yAdvance = i5709[3]
  return i5708
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5710 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5711 = data
  i5710.m_XPlacement = i5711[0]
  i5710.m_YPlacement = i5711[1]
  i5710.m_XAdvance = i5711[2]
  i5710.m_YAdvance = i5711[3]
  return i5710
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[49],"75":[53],"76":[26],"77":[26],"78":[26],"79":[26],"80":[26],"81":[26],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[53],"97":[34],"98":[99],"100":[99],"7":[6],"11":[8],"101":[6],"102":[34,6],"19":[6,13],"103":[6],"104":[13,6],"105":[34],"106":[13,6],"107":[6],"108":[109],"110":[109],"111":[109],"112":[6],"113":[6],"9":[7],"14":[13,6],"114":[6],"8":[7],"115":[6],"116":[6],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"18":[6],"122":[6],"123":[13,6],"124":[6],"125":[6],"126":[6],"127":[6],"128":[13,6],"129":[6],"130":[4],"131":[4],"5":[4],"132":[4],"133":[53],"134":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","UnityEngine.GameObject","AudioController","LunaController","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "30.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_0810_HuyNQ_SBFM_V04_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1675";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4820";

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

Deserializers.buildID = "d5eea27d-96a6-4d43-b8b9-e826633a4767";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

