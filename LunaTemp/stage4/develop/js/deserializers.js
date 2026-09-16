var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5110 = root || request.c( 'UnityEngine.JointSpring' )
  var i5111 = data
  i5110.spring = i5111[0]
  i5110.damper = i5111[1]
  i5110.targetPosition = i5111[2]
  return i5110
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5112 = root || request.c( 'UnityEngine.JointMotor' )
  var i5113 = data
  i5112.m_TargetVelocity = i5113[0]
  i5112.m_Force = i5113[1]
  i5112.m_FreeSpin = i5113[2]
  return i5112
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5114 = root || request.c( 'UnityEngine.JointLimits' )
  var i5115 = data
  i5114.m_Min = i5115[0]
  i5114.m_Max = i5115[1]
  i5114.m_Bounciness = i5115[2]
  i5114.m_BounceMinVelocity = i5115[3]
  i5114.m_ContactDistance = i5115[4]
  i5114.minBounce = i5115[5]
  i5114.maxBounce = i5115[6]
  return i5114
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5116 = root || request.c( 'UnityEngine.JointDrive' )
  var i5117 = data
  i5116.m_PositionSpring = i5117[0]
  i5116.m_PositionDamper = i5117[1]
  i5116.m_MaximumForce = i5117[2]
  i5116.m_UseAcceleration = i5117[3]
  return i5116
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5118 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5119 = data
  i5118.m_Spring = i5119[0]
  i5118.m_Damper = i5119[1]
  return i5118
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5120 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5121 = data
  i5120.m_Limit = i5121[0]
  i5120.m_Bounciness = i5121[1]
  i5120.m_ContactDistance = i5121[2]
  return i5120
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5122 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5123 = data
  i5122.m_ExtremumSlip = i5123[0]
  i5122.m_ExtremumValue = i5123[1]
  i5122.m_AsymptoteSlip = i5123[2]
  i5122.m_AsymptoteValue = i5123[3]
  i5122.m_Stiffness = i5123[4]
  return i5122
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5124 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5125 = data
  i5124.m_LowerAngle = i5125[0]
  i5124.m_UpperAngle = i5125[1]
  return i5124
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5126 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5127 = data
  i5126.m_MotorSpeed = i5127[0]
  i5126.m_MaximumMotorTorque = i5127[1]
  return i5126
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5128 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5129 = data
  i5128.m_DampingRatio = i5129[0]
  i5128.m_Frequency = i5129[1]
  i5128.m_Angle = i5129[2]
  return i5128
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5130 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5131 = data
  i5130.m_LowerTranslation = i5131[0]
  i5130.m_UpperTranslation = i5131[1]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5133 = data
  i5132.name = i5133[0]
  i5132.width = i5133[1]
  i5132.height = i5133[2]
  i5132.mipmapCount = i5133[3]
  i5132.anisoLevel = i5133[4]
  i5132.filterMode = i5133[5]
  i5132.hdr = !!i5133[6]
  i5132.format = i5133[7]
  i5132.wrapMode = i5133[8]
  i5132.alphaIsTransparency = !!i5133[9]
  i5132.alphaSource = i5133[10]
  i5132.graphicsFormat = i5133[11]
  i5132.sRGBTexture = !!i5133[12]
  i5132.desiredColorSpace = i5133[13]
  i5132.wrapU = i5133[14]
  i5132.wrapV = i5133[15]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5134 = root || new pc.UnityMaterial()
  var i5135 = data
  i5134.name = i5135[0]
  request.r(i5135[1], i5135[2], 0, i5134, 'shader')
  i5134.renderQueue = i5135[3]
  i5134.enableInstancing = !!i5135[4]
  var i5137 = i5135[5]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5137[i + 0]) );
  }
  i5134.floatParameters = i5136
  var i5139 = i5135[6]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5139[i + 0]) );
  }
  i5134.colorParameters = i5138
  var i5141 = i5135[7]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5141[i + 0]) );
  }
  i5134.vectorParameters = i5140
  var i5143 = i5135[8]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5143[i + 0]) );
  }
  i5134.textureParameters = i5142
  var i5145 = i5135[9]
  var i5144 = []
  for(var i = 0; i < i5145.length; i += 1) {
    i5144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5145[i + 0]) );
  }
  i5134.materialFlags = i5144
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5149 = data
  i5148.name = i5149[0]
  i5148.value = i5149[1]
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5153 = data
  i5152.name = i5153[0]
  i5152.value = new pc.Color(i5153[1], i5153[2], i5153[3], i5153[4])
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5157 = data
  i5156.name = i5157[0]
  i5156.value = new pc.Vec4( i5157[1], i5157[2], i5157[3], i5157[4] )
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5161 = data
  i5160.name = i5161[0]
  request.r(i5161[1], i5161[2], 0, i5160, 'value')
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5165 = data
  i5164.name = i5165[0]
  i5164.enabled = !!i5165[1]
  return i5164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5167 = data
  i5166.name = i5167[0]
  i5166.halfPrecision = !!i5167[1]
  i5166.useSimplification = !!i5167[2]
  i5166.useUInt32IndexFormat = !!i5167[3]
  i5166.vertexCount = i5167[4]
  i5166.aabb = i5167[5]
  var i5169 = i5167[6]
  var i5168 = []
  for(var i = 0; i < i5169.length; i += 1) {
    i5168.push( !!i5169[i + 0] );
  }
  i5166.streams = i5168
  i5166.vertices = i5167[7]
  var i5171 = i5167[8]
  var i5170 = []
  for(var i = 0; i < i5171.length; i += 1) {
    i5170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5171[i + 0]) );
  }
  i5166.subMeshes = i5170
  var i5173 = i5167[9]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 16) {
    i5172.push( new pc.Mat4().setData(i5173[i + 0], i5173[i + 1], i5173[i + 2], i5173[i + 3],  i5173[i + 4], i5173[i + 5], i5173[i + 6], i5173[i + 7],  i5173[i + 8], i5173[i + 9], i5173[i + 10], i5173[i + 11],  i5173[i + 12], i5173[i + 13], i5173[i + 14], i5173[i + 15]) );
  }
  i5166.bindposes = i5172
  var i5175 = i5167[10]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5175[i + 0]) );
  }
  i5166.blendShapes = i5174
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5181 = data
  i5180.triangles = i5181[0]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5187 = data
  i5186.name = i5187[0]
  var i5189 = i5187[1]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 1) {
    i5188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5189[i + 0]) );
  }
  i5186.frames = i5188
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5191 = data
  i5190.name = i5191[0]
  i5190.atlasId = i5191[1]
  i5190.mipmapCount = i5191[2]
  i5190.hdr = !!i5191[3]
  i5190.size = i5191[4]
  i5190.anisoLevel = i5191[5]
  i5190.filterMode = i5191[6]
  var i5193 = i5191[7]
  var i5192 = []
  for(var i = 0; i < i5193.length; i += 4) {
    i5192.push( UnityEngine.Rect.MinMaxRect(i5193[i + 0], i5193[i + 1], i5193[i + 2], i5193[i + 3]) );
  }
  i5190.rects = i5192
  i5190.wrapU = i5191[8]
  i5190.wrapV = i5191[9]
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5197 = data
  i5196.name = i5197[0]
  i5196.index = i5197[1]
  i5196.startup = !!i5197[2]
  return i5196
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5198 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5199 = data
  request.r(i5199[0], i5199[1], 0, i5198, 'm_FirstSelected')
  i5198.m_sendNavigationEvents = !!i5199[2]
  i5198.m_DragThreshold = i5199[3]
  return i5198
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5200 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5201 = data
  i5200.m_HorizontalAxis = i5201[0]
  i5200.m_VerticalAxis = i5201[1]
  i5200.m_SubmitButton = i5201[2]
  i5200.m_CancelButton = i5201[3]
  i5200.m_InputActionsPerSecond = i5201[4]
  i5200.m_RepeatDelay = i5201[5]
  i5200.m_ForceModuleActive = !!i5201[6]
  i5200.m_SendPointerHoverToParent = !!i5201[7]
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5203 = data
  i5202.name = i5203[0]
  i5202.tagId = i5203[1]
  i5202.enabled = !!i5203[2]
  i5202.isStatic = !!i5203[3]
  i5202.layer = i5203[4]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5205 = data
  i5204.pivot = new pc.Vec2( i5205[0], i5205[1] )
  i5204.anchorMin = new pc.Vec2( i5205[2], i5205[3] )
  i5204.anchorMax = new pc.Vec2( i5205[4], i5205[5] )
  i5204.sizeDelta = new pc.Vec2( i5205[6], i5205[7] )
  i5204.anchoredPosition3D = new pc.Vec3( i5205[8], i5205[9], i5205[10] )
  i5204.rotation = new pc.Quat(i5205[11], i5205[12], i5205[13], i5205[14])
  i5204.scale = new pc.Vec3( i5205[15], i5205[16], i5205[17] )
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5207 = data
  i5206.planeDistance = i5207[0]
  i5206.referencePixelsPerUnit = i5207[1]
  i5206.isFallbackOverlay = !!i5207[2]
  i5206.renderMode = i5207[3]
  i5206.renderOrder = i5207[4]
  i5206.sortingLayerName = i5207[5]
  i5206.sortingOrder = i5207[6]
  i5206.scaleFactor = i5207[7]
  request.r(i5207[8], i5207[9], 0, i5206, 'worldCamera')
  i5206.overrideSorting = !!i5207[10]
  i5206.pixelPerfect = !!i5207[11]
  i5206.targetDisplay = i5207[12]
  i5206.overridePixelPerfect = !!i5207[13]
  i5206.enabled = !!i5207[14]
  return i5206
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5208 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5209 = data
  i5208.m_UiScaleMode = i5209[0]
  i5208.m_ReferencePixelsPerUnit = i5209[1]
  i5208.m_ScaleFactor = i5209[2]
  i5208.m_ReferenceResolution = new pc.Vec2( i5209[3], i5209[4] )
  i5208.m_ScreenMatchMode = i5209[5]
  i5208.m_MatchWidthOrHeight = i5209[6]
  i5208.m_PhysicalUnit = i5209[7]
  i5208.m_FallbackScreenDPI = i5209[8]
  i5208.m_DefaultSpriteDPI = i5209[9]
  i5208.m_DynamicPixelsPerUnit = i5209[10]
  i5208.m_PresetInfoIsWorld = !!i5209[11]
  return i5208
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5210 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5211 = data
  i5210.m_IgnoreReversedGraphics = !!i5211[0]
  i5210.m_BlockingObjects = i5211[1]
  i5210.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5211[2] )
  return i5210
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i5212 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i5213 = data
  i5212._referenceResolution = new pc.Vec2( i5213[0], i5213[1] )
  i5212._portraitMatch = i5213[2]
  i5212._landscapeMatch = i5213[3]
  i5212._squareMatch = i5213[4]
  i5212._portraitAspectThreshold = i5213[5]
  i5212._landscapeAspectThreshold = i5213[6]
  i5212._aspectEpsilon = i5213[7]
  return i5212
}

Deserializers["Joystick"] = function (request, data, root) {
  var i5214 = root || request.c( 'Joystick' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'background')
  request.r(i5215[2], i5215[3], 0, i5214, 'joy')
  i5214.deadZone = i5215[4]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5217 = data
  i5216.cullTransparentMesh = !!i5217[0]
  return i5216
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.UI.Image' )
  var i5219 = data
  request.r(i5219[0], i5219[1], 0, i5218, 'm_Sprite')
  i5218.m_Type = i5219[2]
  i5218.m_PreserveAspect = !!i5219[3]
  i5218.m_FillCenter = !!i5219[4]
  i5218.m_FillMethod = i5219[5]
  i5218.m_FillAmount = i5219[6]
  i5218.m_FillClockwise = !!i5219[7]
  i5218.m_FillOrigin = i5219[8]
  i5218.m_UseSpriteMesh = !!i5219[9]
  i5218.m_PixelsPerUnitMultiplier = i5219[10]
  request.r(i5219[11], i5219[12], 0, i5218, 'm_Material')
  i5218.m_Maskable = !!i5219[13]
  i5218.m_Color = new pc.Color(i5219[14], i5219[15], i5219[16], i5219[17])
  i5218.m_RaycastTarget = !!i5219[18]
  i5218.m_RaycastPadding = new pc.Vec4( i5219[19], i5219[20], i5219[21], i5219[22] )
  return i5218
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5220 = root || request.c( 'UnityEngine.UI.Button' )
  var i5221 = data
  i5220.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5221[0], i5220.m_OnClick)
  i5220.m_Navigation = request.d('UnityEngine.UI.Navigation', i5221[1], i5220.m_Navigation)
  i5220.m_Transition = i5221[2]
  i5220.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5221[3], i5220.m_Colors)
  i5220.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5221[4], i5220.m_SpriteState)
  i5220.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5221[5], i5220.m_AnimationTriggers)
  i5220.m_Interactable = !!i5221[6]
  request.r(i5221[7], i5221[8], 0, i5220, 'm_TargetGraphic')
  return i5220
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5222 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5223 = data
  i5222.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5223[0], i5222.m_PersistentCalls)
  return i5222
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5224 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5225 = data
  var i5227 = i5225[0]
  var i5226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.add(request.d('UnityEngine.Events.PersistentCall', i5227[i + 0]));
  }
  i5224.m_Calls = i5226
  return i5224
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5230 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5231 = data
  request.r(i5231[0], i5231[1], 0, i5230, 'm_Target')
  i5230.m_TargetAssemblyTypeName = i5231[2]
  i5230.m_MethodName = i5231[3]
  i5230.m_Mode = i5231[4]
  i5230.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5231[5], i5230.m_Arguments)
  i5230.m_CallState = i5231[6]
  return i5230
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5232 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5233 = data
  i5232.m_Mode = i5233[0]
  i5232.m_WrapAround = !!i5233[1]
  request.r(i5233[2], i5233[3], 0, i5232, 'm_SelectOnUp')
  request.r(i5233[4], i5233[5], 0, i5232, 'm_SelectOnDown')
  request.r(i5233[6], i5233[7], 0, i5232, 'm_SelectOnLeft')
  request.r(i5233[8], i5233[9], 0, i5232, 'm_SelectOnRight')
  return i5232
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5234 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5235 = data
  i5234.m_NormalColor = new pc.Color(i5235[0], i5235[1], i5235[2], i5235[3])
  i5234.m_HighlightedColor = new pc.Color(i5235[4], i5235[5], i5235[6], i5235[7])
  i5234.m_PressedColor = new pc.Color(i5235[8], i5235[9], i5235[10], i5235[11])
  i5234.m_SelectedColor = new pc.Color(i5235[12], i5235[13], i5235[14], i5235[15])
  i5234.m_DisabledColor = new pc.Color(i5235[16], i5235[17], i5235[18], i5235[19])
  i5234.m_ColorMultiplier = i5235[20]
  i5234.m_FadeDuration = i5235[21]
  return i5234
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5236 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5237 = data
  request.r(i5237[0], i5237[1], 0, i5236, 'm_HighlightedSprite')
  request.r(i5237[2], i5237[3], 0, i5236, 'm_PressedSprite')
  request.r(i5237[4], i5237[5], 0, i5236, 'm_SelectedSprite')
  request.r(i5237[6], i5237[7], 0, i5236, 'm_DisabledSprite')
  return i5236
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5239 = data
  i5238.m_NormalTrigger = i5239[0]
  i5238.m_HighlightedTrigger = i5239[1]
  i5238.m_PressedTrigger = i5239[2]
  i5238.m_SelectedTrigger = i5239[3]
  i5238.m_DisabledTrigger = i5239[4]
  return i5238
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i5240 = root || request.c( 'JumpButton' )
  var i5241 = data
  request.r(i5241[0], i5241[1], 0, i5240, 'button')
  return i5240
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5242 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5243 = data
  i5242.m_ShowMaskGraphic = !!i5243[0]
  return i5242
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5244 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5245 = data
  i5244.m_hasFontAssetChanged = !!i5245[0]
  request.r(i5245[1], i5245[2], 0, i5244, 'm_baseMaterial')
  i5244.m_maskOffset = new pc.Vec4( i5245[3], i5245[4], i5245[5], i5245[6] )
  i5244.m_text = i5245[7]
  i5244.m_isRightToLeft = !!i5245[8]
  request.r(i5245[9], i5245[10], 0, i5244, 'm_fontAsset')
  request.r(i5245[11], i5245[12], 0, i5244, 'm_sharedMaterial')
  var i5247 = i5245[13]
  var i5246 = []
  for(var i = 0; i < i5247.length; i += 2) {
  request.r(i5247[i + 0], i5247[i + 1], 2, i5246, '')
  }
  i5244.m_fontSharedMaterials = i5246
  request.r(i5245[14], i5245[15], 0, i5244, 'm_fontMaterial')
  var i5249 = i5245[16]
  var i5248 = []
  for(var i = 0; i < i5249.length; i += 2) {
  request.r(i5249[i + 0], i5249[i + 1], 2, i5248, '')
  }
  i5244.m_fontMaterials = i5248
  i5244.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5245[17], i5245[18], i5245[19], i5245[20])
  i5244.m_fontColor = new pc.Color(i5245[21], i5245[22], i5245[23], i5245[24])
  i5244.m_enableVertexGradient = !!i5245[25]
  i5244.m_colorMode = i5245[26]
  i5244.m_fontColorGradient = request.d('TMPro.VertexGradient', i5245[27], i5244.m_fontColorGradient)
  request.r(i5245[28], i5245[29], 0, i5244, 'm_fontColorGradientPreset')
  request.r(i5245[30], i5245[31], 0, i5244, 'm_spriteAsset')
  i5244.m_tintAllSprites = !!i5245[32]
  request.r(i5245[33], i5245[34], 0, i5244, 'm_StyleSheet')
  i5244.m_TextStyleHashCode = i5245[35]
  i5244.m_overrideHtmlColors = !!i5245[36]
  i5244.m_faceColor = UnityEngine.Color32.ConstructColor(i5245[37], i5245[38], i5245[39], i5245[40])
  i5244.m_fontSize = i5245[41]
  i5244.m_fontSizeBase = i5245[42]
  i5244.m_fontWeight = i5245[43]
  i5244.m_enableAutoSizing = !!i5245[44]
  i5244.m_fontSizeMin = i5245[45]
  i5244.m_fontSizeMax = i5245[46]
  i5244.m_fontStyle = i5245[47]
  i5244.m_HorizontalAlignment = i5245[48]
  i5244.m_VerticalAlignment = i5245[49]
  i5244.m_textAlignment = i5245[50]
  i5244.m_characterSpacing = i5245[51]
  i5244.m_wordSpacing = i5245[52]
  i5244.m_lineSpacing = i5245[53]
  i5244.m_lineSpacingMax = i5245[54]
  i5244.m_paragraphSpacing = i5245[55]
  i5244.m_charWidthMaxAdj = i5245[56]
  i5244.m_TextWrappingMode = i5245[57]
  i5244.m_wordWrappingRatios = i5245[58]
  i5244.m_overflowMode = i5245[59]
  request.r(i5245[60], i5245[61], 0, i5244, 'm_linkedTextComponent')
  request.r(i5245[62], i5245[63], 0, i5244, 'parentLinkedComponent')
  i5244.m_enableKerning = !!i5245[64]
  var i5251 = i5245[65]
  var i5250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.add(i5251[i + 0]);
  }
  i5244.m_ActiveFontFeatures = i5250
  i5244.m_enableExtraPadding = !!i5245[66]
  i5244.checkPaddingRequired = !!i5245[67]
  i5244.m_isRichText = !!i5245[68]
  i5244.m_parseCtrlCharacters = !!i5245[69]
  i5244.m_isOrthographic = !!i5245[70]
  i5244.m_isCullingEnabled = !!i5245[71]
  i5244.m_horizontalMapping = i5245[72]
  i5244.m_verticalMapping = i5245[73]
  i5244.m_uvLineOffset = i5245[74]
  i5244.m_geometrySortingOrder = i5245[75]
  i5244.m_IsTextObjectScaleStatic = !!i5245[76]
  i5244.m_VertexBufferAutoSizeReduction = !!i5245[77]
  i5244.m_useMaxVisibleDescender = !!i5245[78]
  i5244.m_pageToDisplay = i5245[79]
  i5244.m_margin = new pc.Vec4( i5245[80], i5245[81], i5245[82], i5245[83] )
  i5244.m_isUsingLegacyAnimationComponent = !!i5245[84]
  i5244.m_isVolumetricText = !!i5245[85]
  request.r(i5245[86], i5245[87], 0, i5244, 'm_Material')
  i5244.m_EmojiFallbackSupport = !!i5245[88]
  i5244.m_Maskable = !!i5245[89]
  i5244.m_Color = new pc.Color(i5245[90], i5245[91], i5245[92], i5245[93])
  i5244.m_RaycastTarget = !!i5245[94]
  i5244.m_RaycastPadding = new pc.Vec4( i5245[95], i5245[96], i5245[97], i5245[98] )
  return i5244
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5254 = root || request.c( 'TMPro.VertexGradient' )
  var i5255 = data
  i5254.topLeft = new pc.Color(i5255[0], i5255[1], i5255[2], i5255[3])
  i5254.topRight = new pc.Color(i5255[4], i5255[5], i5255[6], i5255[7])
  i5254.bottomLeft = new pc.Color(i5255[8], i5255[9], i5255[10], i5255[11])
  i5254.bottomRight = new pc.Color(i5255[12], i5255[13], i5255[14], i5255[15])
  return i5254
}

Deserializers["TutController"] = function (request, data, root) {
  var i5258 = root || request.c( 'TutController' )
  var i5259 = data
  request.r(i5259[0], i5259[1], 0, i5258, 'tutScene')
  request.r(i5259[2], i5259[3], 0, i5258, 'startTut')
  request.r(i5259[4], i5259[5], 0, i5258, 'playTut')
  request.r(i5259[6], i5259[7], 0, i5258, 'farTut')
  request.r(i5259[8], i5259[9], 0, i5258, 'failTut')
  return i5258
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i5260 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i5261 = data
  i5260.targetIsSelf = !!i5261[0]
  request.r(i5261[1], i5261[2], 0, i5260, 'targetGO')
  i5260.tweenTargetIsTargetGO = !!i5261[3]
  i5260.delay = i5261[4]
  i5260.duration = i5261[5]
  i5260.easeType = i5261[6]
  i5260.easeCurve = new pc.AnimationCurve( { keys_flow: i5261[7] } )
  i5260.loopType = i5261[8]
  i5260.loops = i5261[9]
  i5260.id = i5261[10]
  i5260.isRelative = !!i5261[11]
  i5260.isFrom = !!i5261[12]
  i5260.isIndependentUpdate = !!i5261[13]
  i5260.autoKill = !!i5261[14]
  i5260.autoGenerate = !!i5261[15]
  i5260.isActive = !!i5261[16]
  i5260.isValid = !!i5261[17]
  request.r(i5261[18], i5261[19], 0, i5260, 'target')
  i5260.animationType = i5261[20]
  i5260.targetType = i5261[21]
  i5260.forcedTargetType = i5261[22]
  i5260.autoPlay = !!i5261[23]
  i5260.useTargetAsV3 = !!i5261[24]
  i5260.endValueFloat = i5261[25]
  i5260.endValueV3 = new pc.Vec3( i5261[26], i5261[27], i5261[28] )
  i5260.endValueV2 = new pc.Vec2( i5261[29], i5261[30] )
  i5260.endValueColor = new pc.Color(i5261[31], i5261[32], i5261[33], i5261[34])
  i5260.endValueString = i5261[35]
  i5260.endValueRect = UnityEngine.Rect.MinMaxRect(i5261[36], i5261[37], i5261[38], i5261[39])
  request.r(i5261[40], i5261[41], 0, i5260, 'endValueTransform')
  i5260.optionalBool0 = !!i5261[42]
  i5260.optionalBool1 = !!i5261[43]
  i5260.optionalFloat0 = i5261[44]
  i5260.optionalInt0 = i5261[45]
  i5260.optionalRotationMode = i5261[46]
  i5260.optionalScrambleMode = i5261[47]
  i5260.optionalShakeRandomnessMode = i5261[48]
  i5260.optionalString = i5261[49]
  i5260.updateType = i5261[50]
  i5260.isSpeedBased = !!i5261[51]
  i5260.hasOnStart = !!i5261[52]
  i5260.hasOnPlay = !!i5261[53]
  i5260.hasOnUpdate = !!i5261[54]
  i5260.hasOnStepComplete = !!i5261[55]
  i5260.hasOnComplete = !!i5261[56]
  i5260.hasOnTweenCreated = !!i5261[57]
  i5260.hasOnRewind = !!i5261[58]
  i5260.onStart = request.d('UnityEngine.Events.UnityEvent', i5261[59], i5260.onStart)
  i5260.onPlay = request.d('UnityEngine.Events.UnityEvent', i5261[60], i5260.onPlay)
  i5260.onUpdate = request.d('UnityEngine.Events.UnityEvent', i5261[61], i5260.onUpdate)
  i5260.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i5261[62], i5260.onStepComplete)
  i5260.onComplete = request.d('UnityEngine.Events.UnityEvent', i5261[63], i5260.onComplete)
  i5260.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i5261[64], i5260.onTweenCreated)
  i5260.onRewind = request.d('UnityEngine.Events.UnityEvent', i5261[65], i5260.onRewind)
  return i5260
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5262 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5263 = data
  i5262.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5263[0], i5262.m_PersistentCalls)
  return i5262
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i5264 = root || request.c( 'HideOnPointer' )
  var i5265 = data
  i5264.OnPointerDownEvent = request.d('System.Action', i5265[0], i5264.OnPointerDownEvent)
  return i5264
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5266 = root || request.c( 'System.Action' )
  var i5267 = data
  return i5266
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i5268 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i5269 = data
  i5268.m_AspectMode = i5269[0]
  i5268.m_AspectRatio = i5269[1]
  return i5268
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i5270 = root || request.c( 'SelectPanel' )
  var i5271 = data
  request.r(i5271[0], i5271[1], 0, i5270, '_title')
  var i5273 = i5271[2]
  var i5272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i5273.length; i += 2) {
  request.r(i5273[i + 0], i5273[i + 1], 1, i5272, '')
  }
  i5270._buttonsSelectMap = i5272
  var i5275 = i5271[3]
  var i5274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i5275.length; i += 2) {
  request.r(i5275[i + 0], i5275[i + 1], 1, i5274, '')
  }
  i5270._buttonsCTA = i5274
  request.r(i5271[4], i5271[5], 0, i5270, '_lock')
  return i5270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5279 = data
  i5278.center = new pc.Vec3( i5279[0], i5279[1], i5279[2] )
  i5278.size = new pc.Vec3( i5279[3], i5279[4], i5279[5] )
  i5278.enabled = !!i5279[6]
  i5278.isTrigger = !!i5279[7]
  request.r(i5279[8], i5279[9], 0, i5278, 'material')
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5281 = data
  i5280.mass = i5281[0]
  i5280.drag = i5281[1]
  i5280.angularDrag = i5281[2]
  i5280.useGravity = !!i5281[3]
  i5280.isKinematic = !!i5281[4]
  i5280.constraints = i5281[5]
  i5280.maxAngularVelocity = i5281[6]
  i5280.collisionDetectionMode = i5281[7]
  i5280.interpolation = i5281[8]
  return i5280
}

Deserializers["Gift"] = function (request, data, root) {
  var i5282 = root || request.c( 'Gift' )
  var i5283 = data
  i5282.collectDone = !!i5283[0]
  var i5285 = i5283[1]
  var i5284 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i5285.length; i += 2) {
  request.r(i5285[i + 0], i5285[i + 1], 1, i5284, '')
  }
  i5282.hints = i5284
  request.r(i5283[2], i5283[3], 0, i5282, 'collectSound')
  request.r(i5283[4], i5283[5], 0, i5282, 'collectEffect')
  request.r(i5283[6], i5283[7], 0, i5282, 'arrow')
  return i5282
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i5288 = root || request.c( 'SoundHint' )
  var i5289 = data
  request.r(i5289[0], i5289[1], 0, i5288, 'Sound')
  request.r(i5289[2], i5289[3], 0, i5288, 'Source')
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5291 = data
  request.r(i5291[0], i5291[1], 0, i5290, 'sharedMesh')
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5293 = data
  request.r(i5293[0], i5293[1], 0, i5292, 'additionalVertexStreams')
  i5292.enabled = !!i5293[2]
  request.r(i5293[3], i5293[4], 0, i5292, 'sharedMaterial')
  var i5295 = i5293[5]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 2) {
  request.r(i5295[i + 0], i5295[i + 1], 2, i5294, '')
  }
  i5292.sharedMaterials = i5294
  i5292.receiveShadows = !!i5293[6]
  i5292.shadowCastingMode = i5293[7]
  i5292.sortingLayerID = i5293[8]
  i5292.sortingOrder = i5293[9]
  i5292.lightmapIndex = i5293[10]
  i5292.lightmapSceneIndex = i5293[11]
  i5292.lightmapScaleOffset = new pc.Vec4( i5293[12], i5293[13], i5293[14], i5293[15] )
  i5292.lightProbeUsage = i5293[16]
  i5292.reflectionProbeUsage = i5293[17]
  return i5292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5297 = data
  request.r(i5297[0], i5297[1], 0, i5296, 'mesh')
  i5296.meshCount = i5297[2]
  i5296.activeVertexStreamsCount = i5297[3]
  i5296.alignment = i5297[4]
  i5296.renderMode = i5297[5]
  i5296.sortMode = i5297[6]
  i5296.lengthScale = i5297[7]
  i5296.velocityScale = i5297[8]
  i5296.cameraVelocityScale = i5297[9]
  i5296.normalDirection = i5297[10]
  i5296.sortingFudge = i5297[11]
  i5296.minParticleSize = i5297[12]
  i5296.maxParticleSize = i5297[13]
  i5296.pivot = new pc.Vec3( i5297[14], i5297[15], i5297[16] )
  request.r(i5297[17], i5297[18], 0, i5296, 'trailMaterial')
  i5296.applyActiveColorSpace = !!i5297[19]
  i5296.enabled = !!i5297[20]
  request.r(i5297[21], i5297[22], 0, i5296, 'sharedMaterial')
  var i5299 = i5297[23]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 2) {
  request.r(i5299[i + 0], i5299[i + 1], 2, i5298, '')
  }
  i5296.sharedMaterials = i5298
  i5296.receiveShadows = !!i5297[24]
  i5296.shadowCastingMode = i5297[25]
  i5296.sortingLayerID = i5297[26]
  i5296.sortingOrder = i5297[27]
  i5296.lightmapIndex = i5297[28]
  i5296.lightmapSceneIndex = i5297[29]
  i5296.lightmapScaleOffset = new pc.Vec4( i5297[30], i5297[31], i5297[32], i5297[33] )
  i5296.lightProbeUsage = i5297[34]
  i5296.reflectionProbeUsage = i5297[35]
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5301 = data
  i5300.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5301[0], i5300.main)
  i5300.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5301[1], i5300.colorBySpeed)
  i5300.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5301[2], i5300.colorOverLifetime)
  i5300.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5301[3], i5300.emission)
  i5300.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5301[4], i5300.rotationBySpeed)
  i5300.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5301[5], i5300.rotationOverLifetime)
  i5300.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5301[6], i5300.shape)
  i5300.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5301[7], i5300.sizeBySpeed)
  i5300.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5301[8], i5300.sizeOverLifetime)
  i5300.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5301[9], i5300.textureSheetAnimation)
  i5300.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5301[10], i5300.velocityOverLifetime)
  i5300.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5301[11], i5300.noise)
  i5300.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5301[12], i5300.inheritVelocity)
  i5300.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5301[13], i5300.forceOverLifetime)
  i5300.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5301[14], i5300.limitVelocityOverLifetime)
  i5300.useAutoRandomSeed = !!i5301[15]
  i5300.randomSeed = i5301[16]
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5302 = root || new pc.ParticleSystemMain()
  var i5303 = data
  i5302.duration = i5303[0]
  i5302.loop = !!i5303[1]
  i5302.prewarm = !!i5303[2]
  i5302.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[3], i5302.startDelay)
  i5302.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[4], i5302.startLifetime)
  i5302.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[5], i5302.startSpeed)
  i5302.startSize3D = !!i5303[6]
  i5302.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[7], i5302.startSizeX)
  i5302.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[8], i5302.startSizeY)
  i5302.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[9], i5302.startSizeZ)
  i5302.startRotation3D = !!i5303[10]
  i5302.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[11], i5302.startRotationX)
  i5302.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[12], i5302.startRotationY)
  i5302.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[13], i5302.startRotationZ)
  i5302.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5303[14], i5302.startColor)
  i5302.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5303[15], i5302.gravityModifier)
  i5302.simulationSpace = i5303[16]
  request.r(i5303[17], i5303[18], 0, i5302, 'customSimulationSpace')
  i5302.simulationSpeed = i5303[19]
  i5302.useUnscaledTime = !!i5303[20]
  i5302.scalingMode = i5303[21]
  i5302.playOnAwake = !!i5303[22]
  i5302.maxParticles = i5303[23]
  i5302.emitterVelocityMode = i5303[24]
  i5302.stopAction = i5303[25]
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5304 = root || new pc.MinMaxCurve()
  var i5305 = data
  i5304.mode = i5305[0]
  i5304.curveMin = new pc.AnimationCurve( { keys_flow: i5305[1] } )
  i5304.curveMax = new pc.AnimationCurve( { keys_flow: i5305[2] } )
  i5304.curveMultiplier = i5305[3]
  i5304.constantMin = i5305[4]
  i5304.constantMax = i5305[5]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5306 = root || new pc.MinMaxGradient()
  var i5307 = data
  i5306.mode = i5307[0]
  i5306.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5307[1], i5306.gradientMin)
  i5306.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5307[2], i5306.gradientMax)
  i5306.colorMin = new pc.Color(i5307[3], i5307[4], i5307[5], i5307[6])
  i5306.colorMax = new pc.Color(i5307[7], i5307[8], i5307[9], i5307[10])
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5309 = data
  i5308.mode = i5309[0]
  var i5311 = i5309[1]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 1) {
    i5310.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5311[i + 0]) );
  }
  i5308.colorKeys = i5310
  var i5313 = i5309[2]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5313[i + 0]) );
  }
  i5308.alphaKeys = i5312
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5314 = root || new pc.ParticleSystemColorBySpeed()
  var i5315 = data
  i5314.enabled = !!i5315[0]
  i5314.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5315[1], i5314.color)
  i5314.range = new pc.Vec2( i5315[2], i5315[3] )
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5319 = data
  i5318.color = new pc.Color(i5319[0], i5319[1], i5319[2], i5319[3])
  i5318.time = i5319[4]
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5323 = data
  i5322.alpha = i5323[0]
  i5322.time = i5323[1]
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5324 = root || new pc.ParticleSystemColorOverLifetime()
  var i5325 = data
  i5324.enabled = !!i5325[0]
  i5324.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5325[1], i5324.color)
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5326 = root || new pc.ParticleSystemEmitter()
  var i5327 = data
  i5326.enabled = !!i5327[0]
  i5326.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5327[1], i5326.rateOverTime)
  i5326.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5327[2], i5326.rateOverDistance)
  var i5329 = i5327[3]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5329[i + 0]) );
  }
  i5326.bursts = i5328
  return i5326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5332 = root || new pc.ParticleSystemBurst()
  var i5333 = data
  i5332.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[0], i5332.count)
  i5332.cycleCount = i5333[1]
  i5332.minCount = i5333[2]
  i5332.maxCount = i5333[3]
  i5332.repeatInterval = i5333[4]
  i5332.time = i5333[5]
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5334 = root || new pc.ParticleSystemRotationBySpeed()
  var i5335 = data
  i5334.enabled = !!i5335[0]
  i5334.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5335[1], i5334.x)
  i5334.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5335[2], i5334.y)
  i5334.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5335[3], i5334.z)
  i5334.separateAxes = !!i5335[4]
  i5334.range = new pc.Vec2( i5335[5], i5335[6] )
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5336 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5337 = data
  i5336.enabled = !!i5337[0]
  i5336.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5337[1], i5336.x)
  i5336.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5337[2], i5336.y)
  i5336.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5337[3], i5336.z)
  i5336.separateAxes = !!i5337[4]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5338 = root || new pc.ParticleSystemShape()
  var i5339 = data
  i5338.enabled = !!i5339[0]
  i5338.shapeType = i5339[1]
  i5338.randomDirectionAmount = i5339[2]
  i5338.sphericalDirectionAmount = i5339[3]
  i5338.randomPositionAmount = i5339[4]
  i5338.alignToDirection = !!i5339[5]
  i5338.radius = i5339[6]
  i5338.radiusMode = i5339[7]
  i5338.radiusSpread = i5339[8]
  i5338.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5339[9], i5338.radiusSpeed)
  i5338.radiusThickness = i5339[10]
  i5338.angle = i5339[11]
  i5338.length = i5339[12]
  i5338.boxThickness = new pc.Vec3( i5339[13], i5339[14], i5339[15] )
  i5338.meshShapeType = i5339[16]
  request.r(i5339[17], i5339[18], 0, i5338, 'mesh')
  request.r(i5339[19], i5339[20], 0, i5338, 'meshRenderer')
  request.r(i5339[21], i5339[22], 0, i5338, 'skinnedMeshRenderer')
  i5338.useMeshMaterialIndex = !!i5339[23]
  i5338.meshMaterialIndex = i5339[24]
  i5338.useMeshColors = !!i5339[25]
  i5338.normalOffset = i5339[26]
  i5338.arc = i5339[27]
  i5338.arcMode = i5339[28]
  i5338.arcSpread = i5339[29]
  i5338.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5339[30], i5338.arcSpeed)
  i5338.donutRadius = i5339[31]
  i5338.position = new pc.Vec3( i5339[32], i5339[33], i5339[34] )
  i5338.rotation = new pc.Vec3( i5339[35], i5339[36], i5339[37] )
  i5338.scale = new pc.Vec3( i5339[38], i5339[39], i5339[40] )
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5340 = root || new pc.ParticleSystemSizeBySpeed()
  var i5341 = data
  i5340.enabled = !!i5341[0]
  i5340.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5341[1], i5340.x)
  i5340.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5341[2], i5340.y)
  i5340.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5341[3], i5340.z)
  i5340.separateAxes = !!i5341[4]
  i5340.range = new pc.Vec2( i5341[5], i5341[6] )
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5342 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5343 = data
  i5342.enabled = !!i5343[0]
  i5342.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5343[1], i5342.x)
  i5342.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5343[2], i5342.y)
  i5342.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5343[3], i5342.z)
  i5342.separateAxes = !!i5343[4]
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5344 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5345 = data
  i5344.enabled = !!i5345[0]
  i5344.mode = i5345[1]
  i5344.animation = i5345[2]
  i5344.numTilesX = i5345[3]
  i5344.numTilesY = i5345[4]
  i5344.useRandomRow = !!i5345[5]
  i5344.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5345[6], i5344.frameOverTime)
  i5344.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5345[7], i5344.startFrame)
  i5344.cycleCount = i5345[8]
  i5344.rowIndex = i5345[9]
  i5344.flipU = i5345[10]
  i5344.flipV = i5345[11]
  i5344.spriteCount = i5345[12]
  var i5347 = i5345[13]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 2) {
  request.r(i5347[i + 0], i5347[i + 1], 2, i5346, '')
  }
  i5344.sprites = i5346
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5350 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5351 = data
  i5350.enabled = !!i5351[0]
  i5350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[1], i5350.x)
  i5350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[2], i5350.y)
  i5350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[3], i5350.z)
  i5350.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[4], i5350.radial)
  i5350.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[5], i5350.speedModifier)
  i5350.space = i5351[6]
  i5350.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[7], i5350.orbitalX)
  i5350.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[8], i5350.orbitalY)
  i5350.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[9], i5350.orbitalZ)
  i5350.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[10], i5350.orbitalOffsetX)
  i5350.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[11], i5350.orbitalOffsetY)
  i5350.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5351[12], i5350.orbitalOffsetZ)
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5352 = root || new pc.ParticleSystemNoise()
  var i5353 = data
  i5352.enabled = !!i5353[0]
  i5352.separateAxes = !!i5353[1]
  i5352.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[2], i5352.strengthX)
  i5352.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[3], i5352.strengthY)
  i5352.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[4], i5352.strengthZ)
  i5352.frequency = i5353[5]
  i5352.damping = !!i5353[6]
  i5352.octaveCount = i5353[7]
  i5352.octaveMultiplier = i5353[8]
  i5352.octaveScale = i5353[9]
  i5352.quality = i5353[10]
  i5352.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[11], i5352.scrollSpeed)
  i5352.scrollSpeedMultiplier = i5353[12]
  i5352.remapEnabled = !!i5353[13]
  i5352.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[14], i5352.remapX)
  i5352.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[15], i5352.remapY)
  i5352.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[16], i5352.remapZ)
  i5352.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[17], i5352.positionAmount)
  i5352.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[18], i5352.rotationAmount)
  i5352.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5353[19], i5352.sizeAmount)
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5354 = root || new pc.ParticleSystemInheritVelocity()
  var i5355 = data
  i5354.enabled = !!i5355[0]
  i5354.mode = i5355[1]
  i5354.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5355[2], i5354.curve)
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5356 = root || new pc.ParticleSystemForceOverLifetime()
  var i5357 = data
  i5356.enabled = !!i5357[0]
  i5356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[1], i5356.x)
  i5356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[2], i5356.y)
  i5356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[3], i5356.z)
  i5356.space = i5357[4]
  i5356.randomized = !!i5357[5]
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5358 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5359 = data
  i5358.enabled = !!i5359[0]
  i5358.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5359[1], i5358.limit)
  i5358.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5359[2], i5358.limitX)
  i5358.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5359[3], i5358.limitY)
  i5358.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5359[4], i5358.limitZ)
  i5358.dampen = i5359[5]
  i5358.separateAxes = !!i5359[6]
  i5358.space = i5359[7]
  i5358.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5359[8], i5358.drag)
  i5358.multiplyDragByParticleSize = !!i5359[9]
  i5358.multiplyDragByParticleVelocity = !!i5359[10]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5361 = data
  i5360.color = new pc.Color(i5361[0], i5361[1], i5361[2], i5361[3])
  request.r(i5361[4], i5361[5], 0, i5360, 'sprite')
  i5360.flipX = !!i5361[6]
  i5360.flipY = !!i5361[7]
  i5360.drawMode = i5361[8]
  i5360.size = new pc.Vec2( i5361[9], i5361[10] )
  i5360.tileMode = i5361[11]
  i5360.adaptiveModeThreshold = i5361[12]
  i5360.maskInteraction = i5361[13]
  i5360.spriteSortPoint = i5361[14]
  i5360.enabled = !!i5361[15]
  request.r(i5361[16], i5361[17], 0, i5360, 'sharedMaterial')
  var i5363 = i5361[18]
  var i5362 = []
  for(var i = 0; i < i5363.length; i += 2) {
  request.r(i5363[i + 0], i5363[i + 1], 2, i5362, '')
  }
  i5360.sharedMaterials = i5362
  i5360.receiveShadows = !!i5361[19]
  i5360.shadowCastingMode = i5361[20]
  i5360.sortingLayerID = i5361[21]
  i5360.sortingOrder = i5361[22]
  i5360.lightmapIndex = i5361[23]
  i5360.lightmapSceneIndex = i5361[24]
  i5360.lightmapScaleOffset = new pc.Vec4( i5361[25], i5361[26], i5361[27], i5361[28] )
  i5360.lightProbeUsage = i5361[29]
  i5360.reflectionProbeUsage = i5361[30]
  return i5360
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i5364 = root || request.c( 'CharacterMotor' )
  var i5365 = data
  request.r(i5365[0], i5365[1], 0, i5364, 'characterInput')
  request.r(i5365[2], i5365[3], 0, i5364, 'cameraYawTransform')
  request.r(i5365[4], i5365[5], 0, i5364, '_arrow')
  i5364.moveSpeed = i5365[6]
  i5364.jumpHeight = i5365[7]
  request.r(i5365[8], i5365[9], 0, i5364, 'groundChecker')
  i5364.gravity = i5365[10]
  i5364.enableStepClimb = !!i5365[11]
  i5364.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i5365[12] )
  i5364.maxStepHeight = i5365[13]
  i5364.stepCheckDistance = i5365[14]
  i5364.stepUpSpeed = i5365[15]
  i5364.stepUpAcceleration = i5365[16]
  i5364.minimumStepFacing = i5365[17]
  request.r(i5365[18], i5365[19], 0, i5364, 'controller')
  i5364.autoRun = !!i5365[20]
  return i5364
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i5366 = root || request.c( 'CharacterRotation' )
  var i5367 = data
  request.r(i5367[0], i5367[1], 0, i5366, 'motor')
  i5366.rotationSpeed = i5367[2]
  return i5366
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i5368 = root || request.c( 'CharacterAnimation' )
  var i5369 = data
  request.r(i5369[0], i5369[1], 0, i5368, 'animator')
  request.r(i5369[2], i5369[3], 0, i5368, 'motor')
  i5368.speedChangeRate = i5369[4]
  i5368.groundedGraceTime = i5369[5]
  return i5368
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i5370 = root || request.c( 'CharacterCollect' )
  var i5371 = data
  request.r(i5371[0], i5371[1], 0, i5370, 'motor')
  request.r(i5371[2], i5371[3], 0, i5370, 'avatar')
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5373 = data
  i5372.center = new pc.Vec3( i5373[0], i5373[1], i5373[2] )
  i5372.radius = i5373[3]
  i5372.height = i5373[4]
  i5372.direction = i5373[5]
  i5372.enabled = !!i5373[6]
  i5372.isTrigger = !!i5373[7]
  request.r(i5373[8], i5373[9], 0, i5372, 'material')
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'animatorController')
  request.r(i5375[2], i5375[3], 0, i5374, 'avatar')
  i5374.updateMode = i5375[4]
  i5374.hasTransformHierarchy = !!i5375[5]
  i5374.applyRootMotion = !!i5375[6]
  var i5377 = i5375[7]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 2) {
  request.r(i5377[i + 0], i5377[i + 1], 2, i5376, '')
  }
  i5374.humanBones = i5376
  i5374.enabled = !!i5375[8]
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5381 = data
  request.r(i5381[0], i5381[1], 0, i5380, 'clip')
  request.r(i5381[2], i5381[3], 0, i5380, 'outputAudioMixerGroup')
  i5380.playOnAwake = !!i5381[4]
  i5380.loop = !!i5381[5]
  i5380.time = i5381[6]
  i5380.volume = i5381[7]
  i5380.pitch = i5381[8]
  i5380.enabled = !!i5381[9]
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5383 = data
  request.r(i5383[0], i5383[1], 0, i5382, 'sharedMesh')
  var i5385 = i5383[2]
  var i5384 = []
  for(var i = 0; i < i5385.length; i += 2) {
  request.r(i5385[i + 0], i5385[i + 1], 2, i5384, '')
  }
  i5382.bones = i5384
  i5382.updateWhenOffscreen = !!i5383[3]
  i5382.localBounds = i5383[4]
  request.r(i5383[5], i5383[6], 0, i5382, 'rootBone')
  var i5387 = i5383[7]
  var i5386 = []
  for(var i = 0; i < i5387.length; i += 1) {
    i5386.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5387[i + 0]) );
  }
  i5382.blendShapesWeights = i5386
  i5382.enabled = !!i5383[8]
  request.r(i5383[9], i5383[10], 0, i5382, 'sharedMaterial')
  var i5389 = i5383[11]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 2) {
  request.r(i5389[i + 0], i5389[i + 1], 2, i5388, '')
  }
  i5382.sharedMaterials = i5388
  i5382.receiveShadows = !!i5383[12]
  i5382.shadowCastingMode = i5383[13]
  i5382.sortingLayerID = i5383[14]
  i5382.sortingOrder = i5383[15]
  i5382.lightmapIndex = i5383[16]
  i5382.lightmapSceneIndex = i5383[17]
  i5382.lightmapScaleOffset = new pc.Vec4( i5383[18], i5383[19], i5383[20], i5383[21] )
  i5382.lightProbeUsage = i5383[22]
  i5382.reflectionProbeUsage = i5383[23]
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5393 = data
  i5392.weight = i5393[0]
  return i5392
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i5394 = root || request.c( 'GroundChecker' )
  var i5395 = data
  request.r(i5395[0], i5395[1], 0, i5394, 'groundPoint')
  i5394.checkRadius = i5395[2]
  i5394.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i5395[3] )
  return i5394
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i5396 = root || request.c( 'CameraFollow' )
  var i5397 = data
  request.r(i5397[0], i5397[1], 0, i5396, 'target')
  i5396.smoothTime = i5397[2]
  return i5396
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i5398 = root || request.c( 'CameraLook' )
  var i5399 = data
  request.r(i5399[0], i5399[1], 0, i5398, 'input')
  request.r(i5399[2], i5399[3], 0, i5398, 'yawPivot')
  request.r(i5399[4], i5399[5], 0, i5398, 'pitchPivot')
  i5398.minPitch = i5399[6]
  i5398.maxPitch = i5399[7]
  i5398.yaw = i5399[8]
  i5398.pitch = i5399[9]
  i5398.defaltYaw = i5399[10]
  i5398.defaltPitch = i5399[11]
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5401 = data
  i5400.aspect = i5401[0]
  i5400.orthographic = !!i5401[1]
  i5400.orthographicSize = i5401[2]
  i5400.backgroundColor = new pc.Color(i5401[3], i5401[4], i5401[5], i5401[6])
  i5400.nearClipPlane = i5401[7]
  i5400.farClipPlane = i5401[8]
  i5400.fieldOfView = i5401[9]
  i5400.depth = i5401[10]
  i5400.clearFlags = i5401[11]
  i5400.cullingMask = i5401[12]
  i5400.rect = i5401[13]
  request.r(i5401[14], i5401[15], 0, i5400, 'targetTexture')
  i5400.usePhysicalProperties = !!i5401[16]
  i5400.focalLength = i5401[17]
  i5400.sensorSize = new pc.Vec2( i5401[18], i5401[19] )
  i5400.lensShift = new pc.Vec2( i5401[20], i5401[21] )
  i5400.gateFit = i5401[22]
  i5400.commandBufferCount = i5401[23]
  i5400.cameraType = i5401[24]
  i5400.enabled = !!i5401[25]
  return i5400
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i5402 = root || request.c( 'CharacterInput' )
  var i5403 = data
  request.r(i5403[0], i5403[1], 0, i5402, 'joystick')
  request.r(i5403[2], i5403[3], 0, i5402, 'jumpButton')
  return i5402
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5404 = root || request.c( 'InputManager' )
  var i5405 = data
  request.r(i5405[0], i5405[1], 0, i5404, 'worldCamera')
  i5404.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i5405[2] )
  i5404.touchSensitivity = i5405[3]
  i5404.mouseSensitivity = i5405[4]
  i5404.dragThreshold = i5405[5]
  return i5404
}

Deserializers["GameController"] = function (request, data, root) {
  var i5406 = root || request.c( 'GameController' )
  var i5407 = data
  i5406.timeToShowComplete = i5407[0]
  i5406.timeToShowHint = i5407[1]
  i5406.currentProgress = i5407[2]
  i5406.target = i5407[3]
  request.r(i5407[4], i5407[5], 0, i5406, 'progressText')
  request.r(i5407[6], i5407[7], 0, i5406, 'collectText')
  request.r(i5407[8], i5407[9], 0, i5406, 'completeScene')
  var i5409 = i5407[10]
  var i5408 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i5409.length; i += 2) {
  request.r(i5409[i + 0], i5409[i + 1], 1, i5408, '')
  }
  i5406.gifts = i5408
  request.r(i5407[11], i5407[12], 0, i5406, 'collect')
  request.r(i5407[13], i5407[14], 0, i5406, 'tut')
  return i5406
}

Deserializers["AudioController"] = function (request, data, root) {
  var i5412 = root || request.c( 'AudioController' )
  var i5413 = data
  request.r(i5413[0], i5413[1], 0, i5412, 'musicSource')
  request.r(i5413[2], i5413[3], 0, i5412, 'poolParent')
  i5412.startSize = i5413[4]
  return i5412
}

Deserializers["LunaController"] = function (request, data, root) {
  var i5414 = root || request.c( 'LunaController' )
  var i5415 = data
  i5414.LimitTimePlay = !!i5415[0]
  i5414.TimePlay = i5415[1]
  var i5417 = i5415[2]
  var i5416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i5417.length; i += 2) {
  request.r(i5417[i + 0], i5417[i + 1], 1, i5416, '')
  }
  i5414.images = i5416
  request.r(i5415[3], i5415[4], 0, i5414, 'CTA')
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5421 = data
  i5420.textureMode = i5421[0]
  i5420.alignment = i5421[1]
  i5420.widthCurve = new pc.AnimationCurve( { keys_flow: i5421[2] } )
  i5420.colorGradient = i5421[3] ? new pc.ColorGradient(i5421[3][0], i5421[3][1], i5421[3][2]) : null
  var i5423 = i5421[4]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 3) {
    i5422.push( new pc.Vec3( i5423[i + 0], i5423[i + 1], i5423[i + 2] ) );
  }
  i5420.positions = i5422
  i5420.positionCount = i5421[5]
  i5420.widthMultiplier = i5421[6]
  i5420.startWidth = i5421[7]
  i5420.endWidth = i5421[8]
  i5420.numCornerVertices = i5421[9]
  i5420.numCapVertices = i5421[10]
  i5420.useWorldSpace = !!i5421[11]
  i5420.loop = !!i5421[12]
  i5420.startColor = new pc.Color(i5421[13], i5421[14], i5421[15], i5421[16])
  i5420.endColor = new pc.Color(i5421[17], i5421[18], i5421[19], i5421[20])
  i5420.generateLightingData = !!i5421[21]
  i5420.enabled = !!i5421[22]
  request.r(i5421[23], i5421[24], 0, i5420, 'sharedMaterial')
  var i5425 = i5421[25]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 2) {
  request.r(i5425[i + 0], i5425[i + 1], 2, i5424, '')
  }
  i5420.sharedMaterials = i5424
  i5420.receiveShadows = !!i5421[26]
  i5420.shadowCastingMode = i5421[27]
  i5420.sortingLayerID = i5421[28]
  i5420.sortingOrder = i5421[29]
  i5420.lightmapIndex = i5421[30]
  i5420.lightmapSceneIndex = i5421[31]
  i5420.lightmapScaleOffset = new pc.Vec4( i5421[32], i5421[33], i5421[34], i5421[35] )
  i5420.lightProbeUsage = i5421[36]
  i5420.reflectionProbeUsage = i5421[37]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5429 = data
  request.r(i5429[0], i5429[1], 0, i5428, 'sharedMesh')
  i5428.convex = !!i5429[2]
  i5428.enabled = !!i5429[3]
  i5428.isTrigger = !!i5429[4]
  request.r(i5429[5], i5429[6], 0, i5428, 'material')
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5431 = data
  i5430.center = new pc.Vec3( i5431[0], i5431[1], i5431[2] )
  i5430.radius = i5431[3]
  i5430.enabled = !!i5431[4]
  i5430.isTrigger = !!i5431[5]
  request.r(i5431[6], i5431[7], 0, i5430, 'material')
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5433 = data
  i5432.ambientIntensity = i5433[0]
  i5432.reflectionIntensity = i5433[1]
  i5432.ambientMode = i5433[2]
  i5432.ambientLight = new pc.Color(i5433[3], i5433[4], i5433[5], i5433[6])
  i5432.ambientSkyColor = new pc.Color(i5433[7], i5433[8], i5433[9], i5433[10])
  i5432.ambientGroundColor = new pc.Color(i5433[11], i5433[12], i5433[13], i5433[14])
  i5432.ambientEquatorColor = new pc.Color(i5433[15], i5433[16], i5433[17], i5433[18])
  i5432.fogColor = new pc.Color(i5433[19], i5433[20], i5433[21], i5433[22])
  i5432.fogEndDistance = i5433[23]
  i5432.fogStartDistance = i5433[24]
  i5432.fogDensity = i5433[25]
  i5432.fog = !!i5433[26]
  request.r(i5433[27], i5433[28], 0, i5432, 'skybox')
  i5432.fogMode = i5433[29]
  var i5435 = i5433[30]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5435[i + 0]) );
  }
  i5432.lightmaps = i5434
  i5432.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5433[31], i5432.lightProbes)
  i5432.lightmapsMode = i5433[32]
  i5432.mixedBakeMode = i5433[33]
  i5432.environmentLightingMode = i5433[34]
  i5432.ambientProbe = new pc.SphericalHarmonicsL2(i5433[35])
  request.r(i5433[36], i5433[37], 0, i5432, 'customReflection')
  request.r(i5433[38], i5433[39], 0, i5432, 'defaultReflection')
  i5432.defaultReflectionMode = i5433[40]
  i5432.defaultReflectionResolution = i5433[41]
  i5432.sunLightObjectId = i5433[42]
  i5432.pixelLightCount = i5433[43]
  i5432.defaultReflectionHDR = !!i5433[44]
  i5432.hasLightDataAsset = !!i5433[45]
  i5432.hasManualGenerate = !!i5433[46]
  return i5432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5439 = data
  request.r(i5439[0], i5439[1], 0, i5438, 'lightmapColor')
  request.r(i5439[2], i5439[3], 0, i5438, 'lightmapDirection')
  request.r(i5439[4], i5439[5], 0, i5438, 'shadowMask')
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5440 = root || new UnityEngine.LightProbes()
  var i5441 = data
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5447 = data
  var i5449 = i5447[0]
  var i5448 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5449.length; i += 1) {
    i5448.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5449[i + 0]));
  }
  i5446.ShaderCompilationErrors = i5448
  i5446.name = i5447[1]
  i5446.guid = i5447[2]
  var i5451 = i5447[3]
  var i5450 = []
  for(var i = 0; i < i5451.length; i += 1) {
    i5450.push( i5451[i + 0] );
  }
  i5446.shaderDefinedKeywords = i5450
  var i5453 = i5447[4]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5453[i + 0]) );
  }
  i5446.passes = i5452
  var i5455 = i5447[5]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5455[i + 0]) );
  }
  i5446.usePasses = i5454
  var i5457 = i5447[6]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5457[i + 0]) );
  }
  i5446.defaultParameterValues = i5456
  request.r(i5447[7], i5447[8], 0, i5446, 'unityFallbackShader')
  i5446.readDepth = !!i5447[9]
  i5446.hasDepthOnlyPass = !!i5447[10]
  i5446.isCreatedByShaderGraph = !!i5447[11]
  i5446.disableBatching = !!i5447[12]
  i5446.compiled = !!i5447[13]
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5461 = data
  i5460.shaderName = i5461[0]
  i5460.errorMessage = i5461[1]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5466 = root || new pc.UnityShaderPass()
  var i5467 = data
  i5466.id = i5467[0]
  i5466.subShaderIndex = i5467[1]
  i5466.name = i5467[2]
  i5466.passType = i5467[3]
  i5466.grabPassTextureName = i5467[4]
  i5466.usePass = !!i5467[5]
  i5466.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[6], i5466.zTest)
  i5466.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[7], i5466.zWrite)
  i5466.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[8], i5466.culling)
  i5466.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5467[9], i5466.blending)
  i5466.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5467[10], i5466.alphaBlending)
  i5466.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[11], i5466.colorWriteMask)
  i5466.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[12], i5466.offsetUnits)
  i5466.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[13], i5466.offsetFactor)
  i5466.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[14], i5466.stencilRef)
  i5466.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[15], i5466.stencilReadMask)
  i5466.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5467[16], i5466.stencilWriteMask)
  i5466.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5467[17], i5466.stencilOp)
  i5466.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5467[18], i5466.stencilOpFront)
  i5466.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5467[19], i5466.stencilOpBack)
  var i5469 = i5467[20]
  var i5468 = []
  for(var i = 0; i < i5469.length; i += 1) {
    i5468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5469[i + 0]) );
  }
  i5466.tags = i5468
  var i5471 = i5467[21]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.push( i5471[i + 0] );
  }
  i5466.passDefinedKeywords = i5470
  var i5473 = i5467[22]
  var i5472 = []
  for(var i = 0; i < i5473.length; i += 1) {
    i5472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5473[i + 0]) );
  }
  i5466.passDefinedKeywordGroups = i5472
  var i5475 = i5467[23]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 1) {
    i5474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5475[i + 0]) );
  }
  i5466.variants = i5474
  var i5477 = i5467[24]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 1) {
    i5476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5477[i + 0]) );
  }
  i5466.excludedVariants = i5476
  i5466.hasDepthReader = !!i5467[25]
  return i5466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5479 = data
  i5478.val = i5479[0]
  i5478.name = i5479[1]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5481 = data
  i5480.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5481[0], i5480.src)
  i5480.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5481[1], i5480.dst)
  i5480.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5481[2], i5480.op)
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5483 = data
  i5482.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5483[0], i5482.pass)
  i5482.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5483[1], i5482.fail)
  i5482.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5483[2], i5482.zFail)
  i5482.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5483[3], i5482.comp)
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5487 = data
  i5486.name = i5487[0]
  i5486.value = i5487[1]
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5491 = data
  var i5493 = i5491[0]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( i5493[i + 0] );
  }
  i5490.keywords = i5492
  i5490.hasDiscard = !!i5491[1]
  return i5490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5497 = data
  i5496.passId = i5497[0]
  i5496.subShaderIndex = i5497[1]
  var i5499 = i5497[2]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.push( i5499[i + 0] );
  }
  i5496.keywords = i5498
  i5496.vertexProgram = i5497[3]
  i5496.fragmentProgram = i5497[4]
  i5496.exportedForWebGl2 = !!i5497[5]
  i5496.readDepth = !!i5497[6]
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5503 = data
  request.r(i5503[0], i5503[1], 0, i5502, 'shader')
  i5502.pass = i5503[2]
  return i5502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5507 = data
  i5506.name = i5507[0]
  i5506.type = i5507[1]
  i5506.value = new pc.Vec4( i5507[2], i5507[3], i5507[4], i5507[5] )
  i5506.textureValue = i5507[6]
  i5506.shaderPropertyFlag = i5507[7]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5509 = data
  i5508.name = i5509[0]
  request.r(i5509[1], i5509[2], 0, i5508, 'texture')
  i5508.aabb = i5509[3]
  i5508.vertices = i5509[4]
  i5508.triangles = i5509[5]
  i5508.textureRect = UnityEngine.Rect.MinMaxRect(i5509[6], i5509[7], i5509[8], i5509[9])
  i5508.packedRect = UnityEngine.Rect.MinMaxRect(i5509[10], i5509[11], i5509[12], i5509[13])
  i5508.border = new pc.Vec4( i5509[14], i5509[15], i5509[16], i5509[17] )
  i5508.transparency = i5509[18]
  i5508.bounds = i5509[19]
  i5508.pixelsPerUnit = i5509[20]
  i5508.textureWidth = i5509[21]
  i5508.textureHeight = i5509[22]
  i5508.nativeSize = new pc.Vec2( i5509[23], i5509[24] )
  i5508.pivot = new pc.Vec2( i5509[25], i5509[26] )
  i5508.textureRectOffset = new pc.Vec2( i5509[27], i5509[28] )
  return i5508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5511 = data
  i5510.name = i5511[0]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5513 = data
  i5512.name = i5513[0]
  i5512.wrapMode = i5513[1]
  i5512.isLooping = !!i5513[2]
  i5512.length = i5513[3]
  var i5515 = i5513[4]
  var i5514 = []
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5515[i + 0]) );
  }
  i5512.curves = i5514
  var i5517 = i5513[5]
  var i5516 = []
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5517[i + 0]) );
  }
  i5512.events = i5516
  i5512.halfPrecision = !!i5513[6]
  i5512._frameRate = i5513[7]
  i5512.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5513[8], i5512.localBounds)
  i5512.hasMuscleCurves = !!i5513[9]
  var i5519 = i5513[10]
  var i5518 = []
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.push( i5519[i + 0] );
  }
  i5512.clipMuscleConstant = i5518
  i5512.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5513[11], i5512.clipBindingConstant)
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5523 = data
  i5522.path = i5523[0]
  i5522.hash = i5523[1]
  i5522.componentType = i5523[2]
  i5522.property = i5523[3]
  i5522.keys = i5523[4]
  var i5525 = i5523[5]
  var i5524 = []
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5525[i + 0]) );
  }
  i5522.objectReferenceKeys = i5524
  return i5522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5529 = data
  i5528.time = i5529[0]
  request.r(i5529[1], i5529[2], 0, i5528, 'value')
  return i5528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5533 = data
  i5532.functionName = i5533[0]
  i5532.floatParameter = i5533[1]
  i5532.intParameter = i5533[2]
  i5532.stringParameter = i5533[3]
  request.r(i5533[4], i5533[5], 0, i5532, 'objectReferenceParameter')
  i5532.time = i5533[6]
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5535 = data
  i5534.center = new pc.Vec3( i5535[0], i5535[1], i5535[2] )
  i5534.extends = new pc.Vec3( i5535[3], i5535[4], i5535[5] )
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5539 = data
  var i5541 = i5539[0]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 1) {
    i5540.push( i5541[i + 0] );
  }
  i5538.genericBindings = i5540
  var i5543 = i5539[1]
  var i5542 = []
  for(var i = 0; i < i5543.length; i += 1) {
    i5542.push( i5543[i + 0] );
  }
  i5538.pptrCurveMapping = i5542
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5545 = data
  i5544.name = i5545[0]
  var i5547 = i5545[1]
  var i5546 = []
  for(var i = 0; i < i5547.length; i += 1) {
    i5546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5547[i + 0]) );
  }
  i5544.layers = i5546
  var i5549 = i5545[2]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5549[i + 0]) );
  }
  i5544.parameters = i5548
  i5544.animationClips = i5545[3]
  i5544.avatarUnsupported = i5545[4]
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5553 = data
  i5552.name = i5553[0]
  i5552.defaultWeight = i5553[1]
  i5552.blendingMode = i5553[2]
  i5552.avatarMask = i5553[3]
  i5552.syncedLayerIndex = i5553[4]
  i5552.syncedLayerAffectsTiming = !!i5553[5]
  i5552.syncedLayers = i5553[6]
  i5552.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5553[7], i5552.stateMachine)
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5555 = data
  i5554.id = i5555[0]
  i5554.name = i5555[1]
  i5554.path = i5555[2]
  var i5557 = i5555[3]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5557[i + 0]) );
  }
  i5554.states = i5556
  var i5559 = i5555[4]
  var i5558 = []
  for(var i = 0; i < i5559.length; i += 1) {
    i5558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5559[i + 0]) );
  }
  i5554.machines = i5558
  var i5561 = i5555[5]
  var i5560 = []
  for(var i = 0; i < i5561.length; i += 1) {
    i5560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5561[i + 0]) );
  }
  i5554.entryStateTransitions = i5560
  var i5563 = i5555[6]
  var i5562 = []
  for(var i = 0; i < i5563.length; i += 1) {
    i5562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5563[i + 0]) );
  }
  i5554.exitStateTransitions = i5562
  var i5565 = i5555[7]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5565[i + 0]) );
  }
  i5554.anyStateTransitions = i5564
  i5554.defaultStateId = i5555[8]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5569 = data
  i5568.id = i5569[0]
  i5568.name = i5569[1]
  i5568.cycleOffset = i5569[2]
  i5568.cycleOffsetParameter = i5569[3]
  i5568.cycleOffsetParameterActive = !!i5569[4]
  i5568.mirror = !!i5569[5]
  i5568.mirrorParameter = i5569[6]
  i5568.mirrorParameterActive = !!i5569[7]
  i5568.motionId = i5569[8]
  i5568.nameHash = i5569[9]
  i5568.fullPathHash = i5569[10]
  i5568.speed = i5569[11]
  i5568.speedParameter = i5569[12]
  i5568.speedParameterActive = !!i5569[13]
  i5568.tag = i5569[14]
  i5568.tagHash = i5569[15]
  i5568.writeDefaultValues = !!i5569[16]
  var i5571 = i5569[17]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 2) {
  request.r(i5571[i + 0], i5571[i + 1], 2, i5570, '')
  }
  i5568.behaviours = i5570
  var i5573 = i5569[18]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 1) {
    i5572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5573[i + 0]) );
  }
  i5568.transitions = i5572
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5579 = data
  i5578.fullPath = i5579[0]
  i5578.canTransitionToSelf = !!i5579[1]
  i5578.duration = i5579[2]
  i5578.exitTime = i5579[3]
  i5578.hasExitTime = !!i5579[4]
  i5578.hasFixedDuration = !!i5579[5]
  i5578.interruptionSource = i5579[6]
  i5578.offset = i5579[7]
  i5578.orderedInterruption = !!i5579[8]
  i5578.destinationStateId = i5579[9]
  i5578.isExit = !!i5579[10]
  i5578.mute = !!i5579[11]
  i5578.solo = !!i5579[12]
  var i5581 = i5579[13]
  var i5580 = []
  for(var i = 0; i < i5581.length; i += 1) {
    i5580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5581[i + 0]) );
  }
  i5578.conditions = i5580
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5585 = data
  i5584.mode = i5585[0]
  i5584.parameter = i5585[1]
  i5584.threshold = i5585[2]
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5591 = data
  i5590.destinationStateId = i5591[0]
  i5590.isExit = !!i5591[1]
  i5590.mute = !!i5591[2]
  i5590.solo = !!i5591[3]
  var i5593 = i5591[4]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5593[i + 0]) );
  }
  i5590.conditions = i5592
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5597 = data
  i5596.defaultBool = !!i5597[0]
  i5596.defaultFloat = i5597[1]
  i5596.defaultInt = i5597[2]
  i5596.name = i5597[3]
  i5596.nameHash = i5597[4]
  i5596.type = i5597[5]
  return i5596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i5598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i5599 = data
  i5598.name = i5599[0]
  request.r(i5599[1], i5599[2], 0, i5598, '_runtimeAnimatorController')
  var i5601 = i5599[3]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 2) {
  request.r(i5601[i + 0], i5601[i + 1], 2, i5600, '')
  }
  i5598._originalAnimationClips = i5600
  var i5603 = i5599[4]
  var i5602 = []
  for(var i = 0; i < i5603.length; i += 2) {
  request.r(i5603[i + 0], i5603[i + 1], 2, i5602, '')
  }
  i5598._overrideAnimationClips = i5602
  var i5605 = i5599[5]
  var i5604 = []
  for(var i = 0; i < i5605.length; i += 2) {
  request.r(i5605[i + 0], i5605[i + 1], 2, i5604, '')
  }
  i5598._animationClips = i5604
  var i5607 = i5599[6]
  var i5606 = []
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.push( request.d('UnityEngine.AnimationClipPair', i5607[i + 0]) );
  }
  i5598._animationClipPairs = i5606
  return i5598
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i5613 = data
  request.r(i5613[0], i5613[1], 0, i5612, 'originalClip')
  request.r(i5613[2], i5613[3], 0, i5612, 'overrideClip')
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5615 = data
  i5614.name = i5615[0]
  i5614.bytes64 = i5615[1]
  i5614.data = i5615[2]
  return i5614
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5616 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5617 = data
  i5616.normalStyle = i5617[0]
  i5616.normalSpacingOffset = i5617[1]
  i5616.boldStyle = i5617[2]
  i5616.boldSpacing = i5617[3]
  i5616.italicStyle = i5617[4]
  i5616.tabSize = i5617[5]
  request.r(i5617[6], i5617[7], 0, i5616, 'atlas')
  i5616.m_SourceFontFileGUID = i5617[8]
  i5616.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5617[9], i5616.m_CreationSettings)
  request.r(i5617[10], i5617[11], 0, i5616, 'm_SourceFontFile')
  i5616.m_SourceFontFilePath = i5617[12]
  i5616.m_AtlasPopulationMode = i5617[13]
  i5616.InternalDynamicOS = !!i5617[14]
  var i5619 = i5617[15]
  var i5618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.add(request.d('UnityEngine.TextCore.Glyph', i5619[i + 0]));
  }
  i5616.m_GlyphTable = i5618
  var i5621 = i5617[16]
  var i5620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.add(request.d('TMPro.TMP_Character', i5621[i + 0]));
  }
  i5616.m_CharacterTable = i5620
  var i5623 = i5617[17]
  var i5622 = []
  for(var i = 0; i < i5623.length; i += 2) {
  request.r(i5623[i + 0], i5623[i + 1], 2, i5622, '')
  }
  i5616.m_AtlasTextures = i5622
  i5616.m_AtlasTextureIndex = i5617[18]
  i5616.m_IsMultiAtlasTexturesEnabled = !!i5617[19]
  i5616.m_GetFontFeatures = !!i5617[20]
  i5616.m_ClearDynamicDataOnBuild = !!i5617[21]
  i5616.m_AtlasWidth = i5617[22]
  i5616.m_AtlasHeight = i5617[23]
  i5616.m_AtlasPadding = i5617[24]
  i5616.m_AtlasRenderMode = i5617[25]
  var i5625 = i5617[26]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.add(request.d('UnityEngine.TextCore.GlyphRect', i5625[i + 0]));
  }
  i5616.m_UsedGlyphRects = i5624
  var i5627 = i5617[27]
  var i5626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.add(request.d('UnityEngine.TextCore.GlyphRect', i5627[i + 0]));
  }
  i5616.m_FreeGlyphRects = i5626
  i5616.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5617[28], i5616.m_FontFeatureTable)
  i5616.m_ShouldReimportFontFeatures = !!i5617[29]
  var i5629 = i5617[30]
  var i5628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5629.length; i += 2) {
  request.r(i5629[i + 0], i5629[i + 1], 1, i5628, '')
  }
  i5616.m_FallbackFontAssetTable = i5628
  var i5631 = i5617[31]
  var i5630 = []
  for(var i = 0; i < i5631.length; i += 1) {
    i5630.push( request.d('TMPro.TMP_FontWeightPair', i5631[i + 0]) );
  }
  i5616.m_FontWeightTable = i5630
  var i5633 = i5617[32]
  var i5632 = []
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.push( request.d('TMPro.TMP_FontWeightPair', i5633[i + 0]) );
  }
  i5616.fontWeights = i5632
  i5616.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5617[33], i5616.m_fontInfo)
  var i5635 = i5617[34]
  var i5634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.add(request.d('TMPro.TMP_Glyph', i5635[i + 0]));
  }
  i5616.m_glyphInfoList = i5634
  i5616.m_KerningTable = request.d('TMPro.KerningTable', i5617[35], i5616.m_KerningTable)
  var i5637 = i5617[36]
  var i5636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5637.length; i += 2) {
  request.r(i5637[i + 0], i5637[i + 1], 1, i5636, '')
  }
  i5616.fallbackFontAssets = i5636
  i5616.m_Version = i5617[37]
  i5616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5617[38], i5616.m_FaceInfo)
  request.r(i5617[39], i5617[40], 0, i5616, 'm_Material')
  return i5616
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5638 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5639 = data
  i5638.sourceFontFileName = i5639[0]
  i5638.sourceFontFileGUID = i5639[1]
  i5638.faceIndex = i5639[2]
  i5638.pointSizeSamplingMode = i5639[3]
  i5638.pointSize = i5639[4]
  i5638.padding = i5639[5]
  i5638.paddingMode = i5639[6]
  i5638.packingMode = i5639[7]
  i5638.atlasWidth = i5639[8]
  i5638.atlasHeight = i5639[9]
  i5638.characterSetSelectionMode = i5639[10]
  i5638.characterSequence = i5639[11]
  i5638.referencedFontAssetGUID = i5639[12]
  i5638.referencedTextAssetGUID = i5639[13]
  i5638.fontStyle = i5639[14]
  i5638.fontStyleModifier = i5639[15]
  i5638.renderMode = i5639[16]
  i5638.includeFontFeatures = !!i5639[17]
  return i5638
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5642 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5643 = data
  i5642.m_Index = i5643[0]
  i5642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5643[1], i5642.m_Metrics)
  i5642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5643[2], i5642.m_GlyphRect)
  i5642.m_Scale = i5643[3]
  i5642.m_AtlasIndex = i5643[4]
  i5642.m_ClassDefinitionType = i5643[5]
  return i5642
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5644 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5645 = data
  i5644.m_Width = i5645[0]
  i5644.m_Height = i5645[1]
  i5644.m_HorizontalBearingX = i5645[2]
  i5644.m_HorizontalBearingY = i5645[3]
  i5644.m_HorizontalAdvance = i5645[4]
  return i5644
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5646 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5647 = data
  i5646.m_X = i5647[0]
  i5646.m_Y = i5647[1]
  i5646.m_Width = i5647[2]
  i5646.m_Height = i5647[3]
  return i5646
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5650 = root || request.c( 'TMPro.TMP_Character' )
  var i5651 = data
  i5650.m_ElementType = i5651[0]
  i5650.m_Unicode = i5651[1]
  i5650.m_GlyphIndex = i5651[2]
  i5650.m_Scale = i5651[3]
  return i5650
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5656 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5657 = data
  var i5659 = i5657[0]
  var i5658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5659.length; i += 1) {
    i5658.add(request.d('TMPro.MultipleSubstitutionRecord', i5659[i + 0]));
  }
  i5656.m_MultipleSubstitutionRecords = i5658
  var i5661 = i5657[1]
  var i5660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.add(request.d('TMPro.LigatureSubstitutionRecord', i5661[i + 0]));
  }
  i5656.m_LigatureSubstitutionRecords = i5660
  var i5663 = i5657[2]
  var i5662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5663.length; i += 1) {
    i5662.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5663[i + 0]));
  }
  i5656.m_GlyphPairAdjustmentRecords = i5662
  var i5665 = i5657[3]
  var i5664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5665[i + 0]));
  }
  i5656.m_MarkToBaseAdjustmentRecords = i5664
  var i5667 = i5657[4]
  var i5666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5667[i + 0]));
  }
  i5656.m_MarkToMarkAdjustmentRecords = i5666
  return i5656
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5670 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5671 = data
  i5670.m_TargetGlyphID = i5671[0]
  i5670.m_SubstituteGlyphIDs = i5671[1]
  return i5670
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5674 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5675 = data
  i5674.m_ComponentGlyphIDs = i5675[0]
  i5674.m_LigatureGlyphID = i5675[1]
  return i5674
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5678 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5679 = data
  i5678.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5679[0], i5678.m_FirstAdjustmentRecord)
  i5678.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5679[1], i5678.m_SecondAdjustmentRecord)
  i5678.m_FeatureLookupFlags = i5679[2]
  return i5678
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5682 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5683 = data
  i5682.m_BaseGlyphID = i5683[0]
  i5682.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5683[1], i5682.m_BaseGlyphAnchorPoint)
  i5682.m_MarkGlyphID = i5683[2]
  i5682.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5683[3], i5682.m_MarkPositionAdjustment)
  return i5682
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5686 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5687 = data
  i5686.m_BaseMarkGlyphID = i5687[0]
  i5686.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5687[1], i5686.m_BaseMarkGlyphAnchorPoint)
  i5686.m_CombiningMarkGlyphID = i5687[2]
  i5686.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5687[3], i5686.m_CombiningMarkPositionAdjustment)
  return i5686
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5692 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5693 = data
  request.r(i5693[0], i5693[1], 0, i5692, 'regularTypeface')
  request.r(i5693[2], i5693[3], 0, i5692, 'italicTypeface')
  return i5692
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5694 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5695 = data
  i5694.Name = i5695[0]
  i5694.PointSize = i5695[1]
  i5694.Scale = i5695[2]
  i5694.CharacterCount = i5695[3]
  i5694.LineHeight = i5695[4]
  i5694.Baseline = i5695[5]
  i5694.Ascender = i5695[6]
  i5694.CapHeight = i5695[7]
  i5694.Descender = i5695[8]
  i5694.CenterLine = i5695[9]
  i5694.SuperscriptOffset = i5695[10]
  i5694.SubscriptOffset = i5695[11]
  i5694.SubSize = i5695[12]
  i5694.Underline = i5695[13]
  i5694.UnderlineThickness = i5695[14]
  i5694.strikethrough = i5695[15]
  i5694.strikethroughThickness = i5695[16]
  i5694.TabWidth = i5695[17]
  i5694.Padding = i5695[18]
  i5694.AtlasWidth = i5695[19]
  i5694.AtlasHeight = i5695[20]
  return i5694
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5698 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5699 = data
  i5698.id = i5699[0]
  i5698.x = i5699[1]
  i5698.y = i5699[2]
  i5698.width = i5699[3]
  i5698.height = i5699[4]
  i5698.xOffset = i5699[5]
  i5698.yOffset = i5699[6]
  i5698.xAdvance = i5699[7]
  i5698.scale = i5699[8]
  return i5698
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5700 = root || request.c( 'TMPro.KerningTable' )
  var i5701 = data
  var i5703 = i5701[0]
  var i5702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.add(request.d('TMPro.KerningPair', i5703[i + 0]));
  }
  i5700.kerningPairs = i5702
  return i5700
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5706 = root || request.c( 'TMPro.KerningPair' )
  var i5707 = data
  i5706.xOffset = i5707[0]
  i5706.m_FirstGlyph = i5707[1]
  i5706.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5707[2], i5706.m_FirstGlyphAdjustments)
  i5706.m_SecondGlyph = i5707[3]
  i5706.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5707[4], i5706.m_SecondGlyphAdjustments)
  i5706.m_IgnoreSpacingAdjustments = !!i5707[5]
  return i5706
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5708 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5709 = data
  i5708.m_FaceIndex = i5709[0]
  i5708.m_FamilyName = i5709[1]
  i5708.m_StyleName = i5709[2]
  i5708.m_PointSize = i5709[3]
  i5708.m_Scale = i5709[4]
  i5708.m_UnitsPerEM = i5709[5]
  i5708.m_LineHeight = i5709[6]
  i5708.m_AscentLine = i5709[7]
  i5708.m_CapLine = i5709[8]
  i5708.m_MeanLine = i5709[9]
  i5708.m_Baseline = i5709[10]
  i5708.m_DescentLine = i5709[11]
  i5708.m_SuperscriptOffset = i5709[12]
  i5708.m_SuperscriptSize = i5709[13]
  i5708.m_SubscriptOffset = i5709[14]
  i5708.m_SubscriptSize = i5709[15]
  i5708.m_UnderlineOffset = i5709[16]
  i5708.m_UnderlineThickness = i5709[17]
  i5708.m_StrikethroughOffset = i5709[18]
  i5708.m_StrikethroughThickness = i5709[19]
  i5708.m_TabWidth = i5709[20]
  return i5708
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5711 = data
  i5710.useSafeMode = !!i5711[0]
  i5710.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5711[1], i5710.safeModeOptions)
  i5710.timeScale = i5711[2]
  i5710.unscaledTimeScale = i5711[3]
  i5710.useSmoothDeltaTime = !!i5711[4]
  i5710.maxSmoothUnscaledTime = i5711[5]
  i5710.rewindCallbackMode = i5711[6]
  i5710.showUnityEditorReport = !!i5711[7]
  i5710.logBehaviour = i5711[8]
  i5710.drawGizmos = !!i5711[9]
  i5710.defaultRecyclable = !!i5711[10]
  i5710.defaultAutoPlay = i5711[11]
  i5710.defaultUpdateType = i5711[12]
  i5710.defaultTimeScaleIndependent = !!i5711[13]
  i5710.defaultEaseType = i5711[14]
  i5710.defaultEaseOvershootOrAmplitude = i5711[15]
  i5710.defaultEasePeriod = i5711[16]
  i5710.defaultAutoKill = !!i5711[17]
  i5710.defaultLoopType = i5711[18]
  i5710.debugMode = !!i5711[19]
  i5710.debugStoreTargetId = !!i5711[20]
  i5710.showPreviewPanel = !!i5711[21]
  i5710.storeSettingsLocation = i5711[22]
  i5710.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5711[23], i5710.modules)
  i5710.createASMDEF = !!i5711[24]
  i5710.showPlayingTweens = !!i5711[25]
  i5710.showPausedTweens = !!i5711[26]
  return i5710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5713 = data
  i5712.logBehaviour = i5713[0]
  i5712.nestedTweenFailureBehaviour = i5713[1]
  return i5712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5715 = data
  i5714.showPanel = !!i5715[0]
  i5714.audioEnabled = !!i5715[1]
  i5714.physicsEnabled = !!i5715[2]
  i5714.physics2DEnabled = !!i5715[3]
  i5714.spriteEnabled = !!i5715[4]
  i5714.uiEnabled = !!i5715[5]
  i5714.textMeshProEnabled = !!i5715[6]
  i5714.tk2DEnabled = !!i5715[7]
  i5714.deAudioEnabled = !!i5715[8]
  i5714.deUnityExtendedEnabled = !!i5715[9]
  i5714.epoOutlineEnabled = !!i5715[10]
  return i5714
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5716 = root || request.c( 'TMPro.TMP_Settings' )
  var i5717 = data
  i5716.assetVersion = i5717[0]
  i5716.m_TextWrappingMode = i5717[1]
  i5716.m_enableKerning = !!i5717[2]
  var i5719 = i5717[3]
  var i5718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.add(i5719[i + 0]);
  }
  i5716.m_ActiveFontFeatures = i5718
  i5716.m_enableExtraPadding = !!i5717[4]
  i5716.m_enableTintAllSprites = !!i5717[5]
  i5716.m_enableParseEscapeCharacters = !!i5717[6]
  i5716.m_EnableRaycastTarget = !!i5717[7]
  i5716.m_GetFontFeaturesAtRuntime = !!i5717[8]
  i5716.m_missingGlyphCharacter = i5717[9]
  i5716.m_ClearDynamicDataOnBuild = !!i5717[10]
  i5716.m_warningsDisabled = !!i5717[11]
  request.r(i5717[12], i5717[13], 0, i5716, 'm_defaultFontAsset')
  i5716.m_defaultFontAssetPath = i5717[14]
  i5716.m_defaultFontSize = i5717[15]
  i5716.m_defaultAutoSizeMinRatio = i5717[16]
  i5716.m_defaultAutoSizeMaxRatio = i5717[17]
  i5716.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5717[18], i5717[19] )
  i5716.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5717[20], i5717[21] )
  i5716.m_autoSizeTextContainer = !!i5717[22]
  i5716.m_IsTextObjectScaleStatic = !!i5717[23]
  var i5721 = i5717[24]
  var i5720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5721.length; i += 2) {
  request.r(i5721[i + 0], i5721[i + 1], 1, i5720, '')
  }
  i5716.m_fallbackFontAssets = i5720
  i5716.m_matchMaterialPreset = !!i5717[25]
  i5716.m_HideSubTextObjects = !!i5717[26]
  request.r(i5717[27], i5717[28], 0, i5716, 'm_defaultSpriteAsset')
  i5716.m_defaultSpriteAssetPath = i5717[29]
  i5716.m_enableEmojiSupport = !!i5717[30]
  i5716.m_MissingCharacterSpriteUnicode = i5717[31]
  var i5723 = i5717[32]
  var i5722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5723.length; i += 2) {
  request.r(i5723[i + 0], i5723[i + 1], 1, i5722, '')
  }
  i5716.m_EmojiFallbackTextAssets = i5722
  i5716.m_defaultColorGradientPresetsPath = i5717[33]
  request.r(i5717[34], i5717[35], 0, i5716, 'm_defaultStyleSheet')
  i5716.m_StyleSheetsResourcePath = i5717[36]
  request.r(i5717[37], i5717[38], 0, i5716, 'm_leadingCharacters')
  request.r(i5717[39], i5717[40], 0, i5716, 'm_followingCharacters')
  i5716.m_UseModernHangulLineBreakingRules = !!i5717[41]
  return i5716
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5726 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5727 = data
  request.r(i5727[0], i5727[1], 0, i5726, 'spriteSheet')
  var i5729 = i5727[2]
  var i5728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5729.length; i += 1) {
    i5728.add(request.d('TMPro.TMP_Sprite', i5729[i + 0]));
  }
  i5726.spriteInfoList = i5728
  var i5731 = i5727[3]
  var i5730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5731.length; i += 2) {
  request.r(i5731[i + 0], i5731[i + 1], 1, i5730, '')
  }
  i5726.fallbackSpriteAssets = i5730
  var i5733 = i5727[4]
  var i5732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.add(request.d('TMPro.TMP_SpriteCharacter', i5733[i + 0]));
  }
  i5726.m_SpriteCharacterTable = i5732
  var i5735 = i5727[5]
  var i5734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5735.length; i += 1) {
    i5734.add(request.d('TMPro.TMP_SpriteGlyph', i5735[i + 0]));
  }
  i5726.m_GlyphTable = i5734
  i5726.m_Version = i5727[6]
  i5726.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5727[7], i5726.m_FaceInfo)
  request.r(i5727[8], i5727[9], 0, i5726, 'm_Material')
  return i5726
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5738 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5739 = data
  i5738.name = i5739[0]
  i5738.hashCode = i5739[1]
  i5738.unicode = i5739[2]
  i5738.pivot = new pc.Vec2( i5739[3], i5739[4] )
  request.r(i5739[5], i5739[6], 0, i5738, 'sprite')
  i5738.id = i5739[7]
  i5738.x = i5739[8]
  i5738.y = i5739[9]
  i5738.width = i5739[10]
  i5738.height = i5739[11]
  i5738.xOffset = i5739[12]
  i5738.yOffset = i5739[13]
  i5738.xAdvance = i5739[14]
  i5738.scale = i5739[15]
  return i5738
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5744 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5745 = data
  i5744.m_Name = i5745[0]
  i5744.m_ElementType = i5745[1]
  i5744.m_Unicode = i5745[2]
  i5744.m_GlyphIndex = i5745[3]
  i5744.m_Scale = i5745[4]
  return i5744
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5748 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5749 = data
  request.r(i5749[0], i5749[1], 0, i5748, 'sprite')
  i5748.m_Index = i5749[2]
  i5748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5749[3], i5748.m_Metrics)
  i5748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5749[4], i5748.m_GlyphRect)
  i5748.m_Scale = i5749[5]
  i5748.m_AtlasIndex = i5749[6]
  i5748.m_ClassDefinitionType = i5749[7]
  return i5748
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5750 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5751 = data
  var i5753 = i5751[0]
  var i5752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.add(request.d('TMPro.TMP_Style', i5753[i + 0]));
  }
  i5750.m_StyleList = i5752
  return i5750
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5756 = root || request.c( 'TMPro.TMP_Style' )
  var i5757 = data
  i5756.m_Name = i5757[0]
  i5756.m_HashCode = i5757[1]
  i5756.m_OpeningDefinition = i5757[2]
  i5756.m_ClosingDefinition = i5757[3]
  i5756.m_OpeningTagArray = i5757[4]
  i5756.m_ClosingTagArray = i5757[5]
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5759 = data
  var i5761 = i5759[0]
  var i5760 = []
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5761[i + 0]) );
  }
  i5758.files = i5760
  i5758.componentToPrefabIds = i5759[1]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5765 = data
  i5764.path = i5765[0]
  request.r(i5765[1], i5765[2], 0, i5764, 'unityObject')
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5767 = data
  var i5769 = i5767[0]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5769[i + 0]) );
  }
  i5766.scriptsExecutionOrder = i5768
  var i5771 = i5767[1]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 1) {
    i5770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5771[i + 0]) );
  }
  i5766.sortingLayers = i5770
  var i5773 = i5767[2]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 1) {
    i5772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5773[i + 0]) );
  }
  i5766.cullingLayers = i5772
  i5766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5767[3], i5766.timeSettings)
  i5766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5767[4], i5766.physicsSettings)
  i5766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5767[5], i5766.physics2DSettings)
  i5766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5767[6], i5766.qualitySettings)
  i5766.enableRealtimeShadows = !!i5767[7]
  i5766.enableAutoInstancing = !!i5767[8]
  i5766.enableStaticBatching = !!i5767[9]
  i5766.enableDynamicBatching = !!i5767[10]
  i5766.usePreservativeDynamicBatching = !!i5767[11]
  i5766.lightmapEncodingQuality = i5767[12]
  i5766.desiredColorSpace = i5767[13]
  var i5775 = i5767[14]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( i5775[i + 0] );
  }
  i5766.allTags = i5774
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5779 = data
  i5778.name = i5779[0]
  i5778.value = i5779[1]
  return i5778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5783 = data
  i5782.id = i5783[0]
  i5782.name = i5783[1]
  i5782.value = i5783[2]
  return i5782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5787 = data
  i5786.id = i5787[0]
  i5786.name = i5787[1]
  return i5786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5789 = data
  i5788.fixedDeltaTime = i5789[0]
  i5788.maximumDeltaTime = i5789[1]
  i5788.timeScale = i5789[2]
  i5788.maximumParticleTimestep = i5789[3]
  return i5788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5791 = data
  i5790.gravity = new pc.Vec3( i5791[0], i5791[1], i5791[2] )
  i5790.defaultSolverIterations = i5791[3]
  i5790.bounceThreshold = i5791[4]
  i5790.autoSyncTransforms = !!i5791[5]
  i5790.autoSimulation = !!i5791[6]
  var i5793 = i5791[7]
  var i5792 = []
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5793[i + 0]) );
  }
  i5790.collisionMatrix = i5792
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5797 = data
  i5796.enabled = !!i5797[0]
  i5796.layerId = i5797[1]
  i5796.otherLayerId = i5797[2]
  return i5796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5799 = data
  request.r(i5799[0], i5799[1], 0, i5798, 'material')
  i5798.gravity = new pc.Vec2( i5799[2], i5799[3] )
  i5798.positionIterations = i5799[4]
  i5798.velocityIterations = i5799[5]
  i5798.velocityThreshold = i5799[6]
  i5798.maxLinearCorrection = i5799[7]
  i5798.maxAngularCorrection = i5799[8]
  i5798.maxTranslationSpeed = i5799[9]
  i5798.maxRotationSpeed = i5799[10]
  i5798.baumgarteScale = i5799[11]
  i5798.baumgarteTOIScale = i5799[12]
  i5798.timeToSleep = i5799[13]
  i5798.linearSleepTolerance = i5799[14]
  i5798.angularSleepTolerance = i5799[15]
  i5798.defaultContactOffset = i5799[16]
  i5798.autoSimulation = !!i5799[17]
  i5798.queriesHitTriggers = !!i5799[18]
  i5798.queriesStartInColliders = !!i5799[19]
  i5798.callbacksOnDisable = !!i5799[20]
  i5798.reuseCollisionCallbacks = !!i5799[21]
  i5798.autoSyncTransforms = !!i5799[22]
  var i5801 = i5799[23]
  var i5800 = []
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5801[i + 0]) );
  }
  i5798.collisionMatrix = i5800
  return i5798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5805 = data
  i5804.enabled = !!i5805[0]
  i5804.layerId = i5805[1]
  i5804.otherLayerId = i5805[2]
  return i5804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5807 = data
  var i5809 = i5807[0]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 1) {
    i5808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5809[i + 0]) );
  }
  i5806.qualityLevels = i5808
  var i5811 = i5807[1]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 1) {
    i5810.push( i5811[i + 0] );
  }
  i5806.names = i5810
  i5806.shadows = i5807[2]
  i5806.anisotropicFiltering = i5807[3]
  i5806.antiAliasing = i5807[4]
  i5806.lodBias = i5807[5]
  i5806.shadowCascades = i5807[6]
  i5806.shadowDistance = i5807[7]
  i5806.shadowmaskMode = i5807[8]
  i5806.shadowProjection = i5807[9]
  i5806.shadowResolution = i5807[10]
  i5806.softParticles = !!i5807[11]
  i5806.softVegetation = !!i5807[12]
  i5806.activeColorSpace = i5807[13]
  i5806.desiredColorSpace = i5807[14]
  i5806.masterTextureLimit = i5807[15]
  i5806.maxQueuedFrames = i5807[16]
  i5806.particleRaycastBudget = i5807[17]
  i5806.pixelLightCount = i5807[18]
  i5806.realtimeReflectionProbes = !!i5807[19]
  i5806.shadowCascade2Split = i5807[20]
  i5806.shadowCascade4Split = new pc.Vec3( i5807[21], i5807[22], i5807[23] )
  i5806.streamingMipmapsActive = !!i5807[24]
  i5806.vSyncCount = i5807[25]
  i5806.asyncUploadBufferSize = i5807[26]
  i5806.asyncUploadTimeSlice = i5807[27]
  i5806.billboardsFaceCameraPosition = !!i5807[28]
  i5806.shadowNearPlaneOffset = i5807[29]
  i5806.streamingMipmapsMemoryBudget = i5807[30]
  i5806.maximumLODLevel = i5807[31]
  i5806.streamingMipmapsAddAllCameras = !!i5807[32]
  i5806.streamingMipmapsMaxLevelReduction = i5807[33]
  i5806.streamingMipmapsRenderersPerFrame = i5807[34]
  i5806.resolutionScalingFixedDPIFactor = i5807[35]
  i5806.streamingMipmapsMaxFileIORequests = i5807[36]
  i5806.currentQualityLevel = i5807[37]
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i5814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i5815 = data
  i5814.name = i5815[0]
  var i5817 = i5815[1]
  var i5816 = []
  for(var i = 0; i < i5817.length; i += 1) {
    i5816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i5817[i + 0]) );
  }
  i5814.tos = i5816
  var i5819 = i5815[2]
  var i5818 = []
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.push( i5819[i + 0] );
  }
  i5814.constant = i5818
  i5814.isValid = !!i5815[3]
  i5814.isHuman = !!i5815[4]
  i5814.hasRootMotion = !!i5815[5]
  return i5814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i5823 = data
  i5822.hash = i5823[0]
  i5822.path = i5823[1]
  return i5822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5827 = data
  i5826.weight = i5827[0]
  i5826.vertices = i5827[1]
  i5826.normals = i5827[2]
  i5826.tangents = i5827[3]
  return i5826
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5828 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5829 = data
  request.r(i5829[0], i5829[1], 0, i5828, 'm_ObjectArgument')
  i5828.m_ObjectArgumentAssemblyTypeName = i5829[2]
  i5828.m_IntArgument = i5829[3]
  i5828.m_FloatArgument = i5829[4]
  i5828.m_StringArgument = i5829[5]
  i5828.m_BoolArgument = !!i5829[6]
  return i5828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5831 = data
  i5830.m_GlyphIndex = i5831[0]
  i5830.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5831[1], i5830.m_GlyphValueRecord)
  return i5830
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5833 = data
  i5832.m_XCoordinate = i5833[0]
  i5832.m_YCoordinate = i5833[1]
  return i5832
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5834 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5835 = data
  i5834.m_XPositionAdjustment = i5835[0]
  i5834.m_YPositionAdjustment = i5835[1]
  return i5834
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5836 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5837 = data
  i5836.xPlacement = i5837[0]
  i5836.yPlacement = i5837[1]
  i5836.xAdvance = i5837[2]
  i5836.yAdvance = i5837[3]
  return i5836
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5838 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5839 = data
  i5838.m_XPlacement = i5839[0]
  i5838.m_YPlacement = i5839[1]
  i5838.m_XAdvance = i5839[2]
  i5838.m_YAdvance = i5839[3]
  return i5838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[52],"78":[56],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[56],"100":[37],"101":[102],"103":[102],"7":[6],"11":[8],"104":[6],"105":[37,6],"19":[6,13],"106":[6],"107":[13,6],"108":[37],"109":[13,6],"110":[6],"111":[112],"113":[112],"114":[112],"115":[6],"116":[6],"9":[7],"14":[13,6],"25":[6],"8":[7],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"18":[6],"124":[6],"125":[13,6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[13,6],"131":[6],"132":[4],"133":[4],"5":[4],"134":[4],"135":[56],"136":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.AspectRatioFitter","SelectPanel","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "8.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V04_HoaiTT_HuyNQ";

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

Deserializers.buildID = "208ce86a-4c8f-4f70-9148-ad4309938bd5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

