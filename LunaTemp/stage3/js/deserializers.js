var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i11160 = root || request.c( 'UnityEngine.JointSpring' )
  var i11161 = data
  i11160.spring = i11161[0]
  i11160.damper = i11161[1]
  i11160.targetPosition = i11161[2]
  return i11160
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i11162 = root || request.c( 'UnityEngine.JointMotor' )
  var i11163 = data
  i11162.m_TargetVelocity = i11163[0]
  i11162.m_Force = i11163[1]
  i11162.m_FreeSpin = i11163[2]
  return i11162
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i11164 = root || request.c( 'UnityEngine.JointLimits' )
  var i11165 = data
  i11164.m_Min = i11165[0]
  i11164.m_Max = i11165[1]
  i11164.m_Bounciness = i11165[2]
  i11164.m_BounceMinVelocity = i11165[3]
  i11164.m_ContactDistance = i11165[4]
  i11164.minBounce = i11165[5]
  i11164.maxBounce = i11165[6]
  return i11164
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i11166 = root || request.c( 'UnityEngine.JointDrive' )
  var i11167 = data
  i11166.m_PositionSpring = i11167[0]
  i11166.m_PositionDamper = i11167[1]
  i11166.m_MaximumForce = i11167[2]
  i11166.m_UseAcceleration = i11167[3]
  return i11166
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i11168 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i11169 = data
  i11168.m_Spring = i11169[0]
  i11168.m_Damper = i11169[1]
  return i11168
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i11170 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i11171 = data
  i11170.m_Limit = i11171[0]
  i11170.m_Bounciness = i11171[1]
  i11170.m_ContactDistance = i11171[2]
  return i11170
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i11172 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i11173 = data
  i11172.m_ExtremumSlip = i11173[0]
  i11172.m_ExtremumValue = i11173[1]
  i11172.m_AsymptoteSlip = i11173[2]
  i11172.m_AsymptoteValue = i11173[3]
  i11172.m_Stiffness = i11173[4]
  return i11172
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i11174 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i11175 = data
  i11174.m_LowerAngle = i11175[0]
  i11174.m_UpperAngle = i11175[1]
  return i11174
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i11176 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i11177 = data
  i11176.m_MotorSpeed = i11177[0]
  i11176.m_MaximumMotorTorque = i11177[1]
  return i11176
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i11178 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i11179 = data
  i11178.m_DampingRatio = i11179[0]
  i11178.m_Frequency = i11179[1]
  i11178.m_Angle = i11179[2]
  return i11178
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i11180 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i11181 = data
  i11180.m_LowerTranslation = i11181[0]
  i11180.m_UpperTranslation = i11181[1]
  return i11180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i11182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i11183 = data
  i11182.name = i11183[0]
  i11182.width = i11183[1]
  i11182.height = i11183[2]
  i11182.mipmapCount = i11183[3]
  i11182.anisoLevel = i11183[4]
  i11182.filterMode = i11183[5]
  i11182.hdr = !!i11183[6]
  i11182.format = i11183[7]
  i11182.wrapMode = i11183[8]
  i11182.alphaIsTransparency = !!i11183[9]
  i11182.alphaSource = i11183[10]
  i11182.graphicsFormat = i11183[11]
  i11182.sRGBTexture = !!i11183[12]
  i11182.desiredColorSpace = i11183[13]
  i11182.wrapU = i11183[14]
  i11182.wrapV = i11183[15]
  return i11182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i11184 = root || new pc.UnityMaterial()
  var i11185 = data
  i11184.name = i11185[0]
  request.r(i11185[1], i11185[2], 0, i11184, 'shader')
  i11184.renderQueue = i11185[3]
  i11184.enableInstancing = !!i11185[4]
  var i11187 = i11185[5]
  var i11186 = []
  for(var i = 0; i < i11187.length; i += 1) {
    i11186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i11187[i + 0]) );
  }
  i11184.floatParameters = i11186
  var i11189 = i11185[6]
  var i11188 = []
  for(var i = 0; i < i11189.length; i += 1) {
    i11188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i11189[i + 0]) );
  }
  i11184.colorParameters = i11188
  var i11191 = i11185[7]
  var i11190 = []
  for(var i = 0; i < i11191.length; i += 1) {
    i11190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i11191[i + 0]) );
  }
  i11184.vectorParameters = i11190
  var i11193 = i11185[8]
  var i11192 = []
  for(var i = 0; i < i11193.length; i += 1) {
    i11192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i11193[i + 0]) );
  }
  i11184.textureParameters = i11192
  var i11195 = i11185[9]
  var i11194 = []
  for(var i = 0; i < i11195.length; i += 1) {
    i11194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i11195[i + 0]) );
  }
  i11184.materialFlags = i11194
  return i11184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i11198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i11199 = data
  i11198.name = i11199[0]
  i11198.value = i11199[1]
  return i11198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i11202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i11203 = data
  i11202.name = i11203[0]
  i11202.value = new pc.Color(i11203[1], i11203[2], i11203[3], i11203[4])
  return i11202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i11206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i11207 = data
  i11206.name = i11207[0]
  i11206.value = new pc.Vec4( i11207[1], i11207[2], i11207[3], i11207[4] )
  return i11206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i11210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i11211 = data
  i11210.name = i11211[0]
  request.r(i11211[1], i11211[2], 0, i11210, 'value')
  return i11210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i11214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i11215 = data
  i11214.name = i11215[0]
  i11214.enabled = !!i11215[1]
  return i11214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i11216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i11217 = data
  i11216.name = i11217[0]
  i11216.halfPrecision = !!i11217[1]
  i11216.useSimplification = !!i11217[2]
  i11216.useUInt32IndexFormat = !!i11217[3]
  i11216.vertexCount = i11217[4]
  i11216.aabb = i11217[5]
  var i11219 = i11217[6]
  var i11218 = []
  for(var i = 0; i < i11219.length; i += 1) {
    i11218.push( !!i11219[i + 0] );
  }
  i11216.streams = i11218
  i11216.vertices = i11217[7]
  var i11221 = i11217[8]
  var i11220 = []
  for(var i = 0; i < i11221.length; i += 1) {
    i11220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i11221[i + 0]) );
  }
  i11216.subMeshes = i11220
  var i11223 = i11217[9]
  var i11222 = []
  for(var i = 0; i < i11223.length; i += 16) {
    i11222.push( new pc.Mat4().setData(i11223[i + 0], i11223[i + 1], i11223[i + 2], i11223[i + 3],  i11223[i + 4], i11223[i + 5], i11223[i + 6], i11223[i + 7],  i11223[i + 8], i11223[i + 9], i11223[i + 10], i11223[i + 11],  i11223[i + 12], i11223[i + 13], i11223[i + 14], i11223[i + 15]) );
  }
  i11216.bindposes = i11222
  var i11225 = i11217[10]
  var i11224 = []
  for(var i = 0; i < i11225.length; i += 1) {
    i11224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i11225[i + 0]) );
  }
  i11216.blendShapes = i11224
  return i11216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i11230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i11231 = data
  i11230.triangles = i11231[0]
  return i11230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i11236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i11237 = data
  i11236.name = i11237[0]
  var i11239 = i11237[1]
  var i11238 = []
  for(var i = 0; i < i11239.length; i += 1) {
    i11238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i11239[i + 0]) );
  }
  i11236.frames = i11238
  return i11236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i11240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i11241 = data
  i11240.name = i11241[0]
  i11240.atlasId = i11241[1]
  i11240.mipmapCount = i11241[2]
  i11240.hdr = !!i11241[3]
  i11240.size = i11241[4]
  i11240.anisoLevel = i11241[5]
  i11240.filterMode = i11241[6]
  var i11243 = i11241[7]
  var i11242 = []
  for(var i = 0; i < i11243.length; i += 4) {
    i11242.push( UnityEngine.Rect.MinMaxRect(i11243[i + 0], i11243[i + 1], i11243[i + 2], i11243[i + 3]) );
  }
  i11240.rects = i11242
  i11240.wrapU = i11241[8]
  i11240.wrapV = i11241[9]
  return i11240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i11246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i11247 = data
  i11246.name = i11247[0]
  i11246.index = i11247[1]
  i11246.startup = !!i11247[2]
  return i11246
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i11248 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i11249 = data
  request.r(i11249[0], i11249[1], 0, i11248, 'm_FirstSelected')
  i11248.m_sendNavigationEvents = !!i11249[2]
  i11248.m_DragThreshold = i11249[3]
  return i11248
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i11250 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i11251 = data
  i11250.m_HorizontalAxis = i11251[0]
  i11250.m_VerticalAxis = i11251[1]
  i11250.m_SubmitButton = i11251[2]
  i11250.m_CancelButton = i11251[3]
  i11250.m_InputActionsPerSecond = i11251[4]
  i11250.m_RepeatDelay = i11251[5]
  i11250.m_ForceModuleActive = !!i11251[6]
  i11250.m_SendPointerHoverToParent = !!i11251[7]
  return i11250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i11252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i11253 = data
  i11252.name = i11253[0]
  i11252.tagId = i11253[1]
  i11252.enabled = !!i11253[2]
  i11252.isStatic = !!i11253[3]
  i11252.layer = i11253[4]
  return i11252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i11254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i11255 = data
  i11254.pivot = new pc.Vec2( i11255[0], i11255[1] )
  i11254.anchorMin = new pc.Vec2( i11255[2], i11255[3] )
  i11254.anchorMax = new pc.Vec2( i11255[4], i11255[5] )
  i11254.sizeDelta = new pc.Vec2( i11255[6], i11255[7] )
  i11254.anchoredPosition3D = new pc.Vec3( i11255[8], i11255[9], i11255[10] )
  i11254.rotation = new pc.Quat(i11255[11], i11255[12], i11255[13], i11255[14])
  i11254.scale = new pc.Vec3( i11255[15], i11255[16], i11255[17] )
  return i11254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i11256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i11257 = data
  i11256.planeDistance = i11257[0]
  i11256.referencePixelsPerUnit = i11257[1]
  i11256.isFallbackOverlay = !!i11257[2]
  i11256.renderMode = i11257[3]
  i11256.renderOrder = i11257[4]
  i11256.sortingLayerName = i11257[5]
  i11256.sortingOrder = i11257[6]
  i11256.scaleFactor = i11257[7]
  request.r(i11257[8], i11257[9], 0, i11256, 'worldCamera')
  i11256.overrideSorting = !!i11257[10]
  i11256.pixelPerfect = !!i11257[11]
  i11256.targetDisplay = i11257[12]
  i11256.overridePixelPerfect = !!i11257[13]
  i11256.enabled = !!i11257[14]
  return i11256
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i11258 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i11259 = data
  i11258.m_UiScaleMode = i11259[0]
  i11258.m_ReferencePixelsPerUnit = i11259[1]
  i11258.m_ScaleFactor = i11259[2]
  i11258.m_ReferenceResolution = new pc.Vec2( i11259[3], i11259[4] )
  i11258.m_ScreenMatchMode = i11259[5]
  i11258.m_MatchWidthOrHeight = i11259[6]
  i11258.m_PhysicalUnit = i11259[7]
  i11258.m_FallbackScreenDPI = i11259[8]
  i11258.m_DefaultSpriteDPI = i11259[9]
  i11258.m_DynamicPixelsPerUnit = i11259[10]
  i11258.m_PresetInfoIsWorld = !!i11259[11]
  return i11258
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i11260 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i11261 = data
  i11260.m_IgnoreReversedGraphics = !!i11261[0]
  i11260.m_BlockingObjects = i11261[1]
  i11260.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i11261[2] )
  return i11260
}

Deserializers["Joystick"] = function (request, data, root) {
  var i11262 = root || request.c( 'Joystick' )
  var i11263 = data
  request.r(i11263[0], i11263[1], 0, i11262, 'background')
  request.r(i11263[2], i11263[3], 0, i11262, 'joy')
  i11262.deadZone = i11263[4]
  return i11262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i11264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i11265 = data
  i11264.cullTransparentMesh = !!i11265[0]
  return i11264
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i11266 = root || request.c( 'UnityEngine.UI.Image' )
  var i11267 = data
  request.r(i11267[0], i11267[1], 0, i11266, 'm_Sprite')
  i11266.m_Type = i11267[2]
  i11266.m_PreserveAspect = !!i11267[3]
  i11266.m_FillCenter = !!i11267[4]
  i11266.m_FillMethod = i11267[5]
  i11266.m_FillAmount = i11267[6]
  i11266.m_FillClockwise = !!i11267[7]
  i11266.m_FillOrigin = i11267[8]
  i11266.m_UseSpriteMesh = !!i11267[9]
  i11266.m_PixelsPerUnitMultiplier = i11267[10]
  request.r(i11267[11], i11267[12], 0, i11266, 'm_Material')
  i11266.m_Maskable = !!i11267[13]
  i11266.m_Color = new pc.Color(i11267[14], i11267[15], i11267[16], i11267[17])
  i11266.m_RaycastTarget = !!i11267[18]
  i11266.m_RaycastPadding = new pc.Vec4( i11267[19], i11267[20], i11267[21], i11267[22] )
  return i11266
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i11268 = root || request.c( 'UnityEngine.UI.Button' )
  var i11269 = data
  i11268.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i11269[0], i11268.m_OnClick)
  i11268.m_Navigation = request.d('UnityEngine.UI.Navigation', i11269[1], i11268.m_Navigation)
  i11268.m_Transition = i11269[2]
  i11268.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11269[3], i11268.m_Colors)
  i11268.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11269[4], i11268.m_SpriteState)
  i11268.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11269[5], i11268.m_AnimationTriggers)
  i11268.m_Interactable = !!i11269[6]
  request.r(i11269[7], i11269[8], 0, i11268, 'm_TargetGraphic')
  return i11268
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i11270 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i11271 = data
  i11270.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11271[0], i11270.m_PersistentCalls)
  return i11270
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i11272 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i11273 = data
  var i11275 = i11273[0]
  var i11274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i11275.length; i += 1) {
    i11274.add(request.d('UnityEngine.Events.PersistentCall', i11275[i + 0]));
  }
  i11272.m_Calls = i11274
  return i11272
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i11278 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i11279 = data
  request.r(i11279[0], i11279[1], 0, i11278, 'm_Target')
  i11278.m_TargetAssemblyTypeName = i11279[2]
  i11278.m_MethodName = i11279[3]
  i11278.m_Mode = i11279[4]
  i11278.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i11279[5], i11278.m_Arguments)
  i11278.m_CallState = i11279[6]
  return i11278
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i11280 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i11281 = data
  i11280.m_Mode = i11281[0]
  i11280.m_WrapAround = !!i11281[1]
  request.r(i11281[2], i11281[3], 0, i11280, 'm_SelectOnUp')
  request.r(i11281[4], i11281[5], 0, i11280, 'm_SelectOnDown')
  request.r(i11281[6], i11281[7], 0, i11280, 'm_SelectOnLeft')
  request.r(i11281[8], i11281[9], 0, i11280, 'm_SelectOnRight')
  return i11280
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i11282 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i11283 = data
  i11282.m_NormalColor = new pc.Color(i11283[0], i11283[1], i11283[2], i11283[3])
  i11282.m_HighlightedColor = new pc.Color(i11283[4], i11283[5], i11283[6], i11283[7])
  i11282.m_PressedColor = new pc.Color(i11283[8], i11283[9], i11283[10], i11283[11])
  i11282.m_SelectedColor = new pc.Color(i11283[12], i11283[13], i11283[14], i11283[15])
  i11282.m_DisabledColor = new pc.Color(i11283[16], i11283[17], i11283[18], i11283[19])
  i11282.m_ColorMultiplier = i11283[20]
  i11282.m_FadeDuration = i11283[21]
  return i11282
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i11284 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i11285 = data
  request.r(i11285[0], i11285[1], 0, i11284, 'm_HighlightedSprite')
  request.r(i11285[2], i11285[3], 0, i11284, 'm_PressedSprite')
  request.r(i11285[4], i11285[5], 0, i11284, 'm_SelectedSprite')
  request.r(i11285[6], i11285[7], 0, i11284, 'm_DisabledSprite')
  return i11284
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i11286 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i11287 = data
  i11286.m_NormalTrigger = i11287[0]
  i11286.m_HighlightedTrigger = i11287[1]
  i11286.m_PressedTrigger = i11287[2]
  i11286.m_SelectedTrigger = i11287[3]
  i11286.m_DisabledTrigger = i11287[4]
  return i11286
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i11288 = root || request.c( 'JumpButton' )
  var i11289 = data
  request.r(i11289[0], i11289[1], 0, i11288, 'button')
  return i11288
}

Deserializers["TutController"] = function (request, data, root) {
  var i11290 = root || request.c( 'TutController' )
  var i11291 = data
  request.r(i11291[0], i11291[1], 0, i11290, 'tutScene')
  request.r(i11291[2], i11291[3], 0, i11290, 'startTut')
  request.r(i11291[4], i11291[5], 0, i11290, 'playTut')
  request.r(i11291[6], i11291[7], 0, i11290, 'farTut')
  request.r(i11291[8], i11291[9], 0, i11290, 'failTut')
  return i11290
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i11292 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i11293 = data
  i11292.m_hasFontAssetChanged = !!i11293[0]
  request.r(i11293[1], i11293[2], 0, i11292, 'm_baseMaterial')
  i11292.m_maskOffset = new pc.Vec4( i11293[3], i11293[4], i11293[5], i11293[6] )
  i11292.m_text = i11293[7]
  i11292.m_isRightToLeft = !!i11293[8]
  request.r(i11293[9], i11293[10], 0, i11292, 'm_fontAsset')
  request.r(i11293[11], i11293[12], 0, i11292, 'm_sharedMaterial')
  var i11295 = i11293[13]
  var i11294 = []
  for(var i = 0; i < i11295.length; i += 2) {
  request.r(i11295[i + 0], i11295[i + 1], 2, i11294, '')
  }
  i11292.m_fontSharedMaterials = i11294
  request.r(i11293[14], i11293[15], 0, i11292, 'm_fontMaterial')
  var i11297 = i11293[16]
  var i11296 = []
  for(var i = 0; i < i11297.length; i += 2) {
  request.r(i11297[i + 0], i11297[i + 1], 2, i11296, '')
  }
  i11292.m_fontMaterials = i11296
  i11292.m_fontColor32 = UnityEngine.Color32.ConstructColor(i11293[17], i11293[18], i11293[19], i11293[20])
  i11292.m_fontColor = new pc.Color(i11293[21], i11293[22], i11293[23], i11293[24])
  i11292.m_enableVertexGradient = !!i11293[25]
  i11292.m_colorMode = i11293[26]
  i11292.m_fontColorGradient = request.d('TMPro.VertexGradient', i11293[27], i11292.m_fontColorGradient)
  request.r(i11293[28], i11293[29], 0, i11292, 'm_fontColorGradientPreset')
  request.r(i11293[30], i11293[31], 0, i11292, 'm_spriteAsset')
  i11292.m_tintAllSprites = !!i11293[32]
  request.r(i11293[33], i11293[34], 0, i11292, 'm_StyleSheet')
  i11292.m_TextStyleHashCode = i11293[35]
  i11292.m_overrideHtmlColors = !!i11293[36]
  i11292.m_faceColor = UnityEngine.Color32.ConstructColor(i11293[37], i11293[38], i11293[39], i11293[40])
  i11292.m_fontSize = i11293[41]
  i11292.m_fontSizeBase = i11293[42]
  i11292.m_fontWeight = i11293[43]
  i11292.m_enableAutoSizing = !!i11293[44]
  i11292.m_fontSizeMin = i11293[45]
  i11292.m_fontSizeMax = i11293[46]
  i11292.m_fontStyle = i11293[47]
  i11292.m_HorizontalAlignment = i11293[48]
  i11292.m_VerticalAlignment = i11293[49]
  i11292.m_textAlignment = i11293[50]
  i11292.m_characterSpacing = i11293[51]
  i11292.m_wordSpacing = i11293[52]
  i11292.m_lineSpacing = i11293[53]
  i11292.m_lineSpacingMax = i11293[54]
  i11292.m_paragraphSpacing = i11293[55]
  i11292.m_charWidthMaxAdj = i11293[56]
  i11292.m_TextWrappingMode = i11293[57]
  i11292.m_wordWrappingRatios = i11293[58]
  i11292.m_overflowMode = i11293[59]
  request.r(i11293[60], i11293[61], 0, i11292, 'm_linkedTextComponent')
  request.r(i11293[62], i11293[63], 0, i11292, 'parentLinkedComponent')
  i11292.m_enableKerning = !!i11293[64]
  var i11299 = i11293[65]
  var i11298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i11299.length; i += 1) {
    i11298.add(i11299[i + 0]);
  }
  i11292.m_ActiveFontFeatures = i11298
  i11292.m_enableExtraPadding = !!i11293[66]
  i11292.checkPaddingRequired = !!i11293[67]
  i11292.m_isRichText = !!i11293[68]
  i11292.m_parseCtrlCharacters = !!i11293[69]
  i11292.m_isOrthographic = !!i11293[70]
  i11292.m_isCullingEnabled = !!i11293[71]
  i11292.m_horizontalMapping = i11293[72]
  i11292.m_verticalMapping = i11293[73]
  i11292.m_uvLineOffset = i11293[74]
  i11292.m_geometrySortingOrder = i11293[75]
  i11292.m_IsTextObjectScaleStatic = !!i11293[76]
  i11292.m_VertexBufferAutoSizeReduction = !!i11293[77]
  i11292.m_useMaxVisibleDescender = !!i11293[78]
  i11292.m_pageToDisplay = i11293[79]
  i11292.m_margin = new pc.Vec4( i11293[80], i11293[81], i11293[82], i11293[83] )
  i11292.m_isUsingLegacyAnimationComponent = !!i11293[84]
  i11292.m_isVolumetricText = !!i11293[85]
  request.r(i11293[86], i11293[87], 0, i11292, 'm_Material')
  i11292.m_EmojiFallbackSupport = !!i11293[88]
  i11292.m_Maskable = !!i11293[89]
  i11292.m_Color = new pc.Color(i11293[90], i11293[91], i11293[92], i11293[93])
  i11292.m_RaycastTarget = !!i11293[94]
  i11292.m_RaycastPadding = new pc.Vec4( i11293[95], i11293[96], i11293[97], i11293[98] )
  return i11292
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i11302 = root || request.c( 'TMPro.VertexGradient' )
  var i11303 = data
  i11302.topLeft = new pc.Color(i11303[0], i11303[1], i11303[2], i11303[3])
  i11302.topRight = new pc.Color(i11303[4], i11303[5], i11303[6], i11303[7])
  i11302.bottomLeft = new pc.Color(i11303[8], i11303[9], i11303[10], i11303[11])
  i11302.bottomRight = new pc.Color(i11303[12], i11303[13], i11303[14], i11303[15])
  return i11302
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i11306 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i11307 = data
  i11306.targetIsSelf = !!i11307[0]
  request.r(i11307[1], i11307[2], 0, i11306, 'targetGO')
  i11306.tweenTargetIsTargetGO = !!i11307[3]
  i11306.delay = i11307[4]
  i11306.duration = i11307[5]
  i11306.easeType = i11307[6]
  i11306.easeCurve = new pc.AnimationCurve( { keys_flow: i11307[7] } )
  i11306.loopType = i11307[8]
  i11306.loops = i11307[9]
  i11306.id = i11307[10]
  i11306.isRelative = !!i11307[11]
  i11306.isFrom = !!i11307[12]
  i11306.isIndependentUpdate = !!i11307[13]
  i11306.autoKill = !!i11307[14]
  i11306.autoGenerate = !!i11307[15]
  i11306.isActive = !!i11307[16]
  i11306.isValid = !!i11307[17]
  request.r(i11307[18], i11307[19], 0, i11306, 'target')
  i11306.animationType = i11307[20]
  i11306.targetType = i11307[21]
  i11306.forcedTargetType = i11307[22]
  i11306.autoPlay = !!i11307[23]
  i11306.useTargetAsV3 = !!i11307[24]
  i11306.endValueFloat = i11307[25]
  i11306.endValueV3 = new pc.Vec3( i11307[26], i11307[27], i11307[28] )
  i11306.endValueV2 = new pc.Vec2( i11307[29], i11307[30] )
  i11306.endValueColor = new pc.Color(i11307[31], i11307[32], i11307[33], i11307[34])
  i11306.endValueString = i11307[35]
  i11306.endValueRect = UnityEngine.Rect.MinMaxRect(i11307[36], i11307[37], i11307[38], i11307[39])
  request.r(i11307[40], i11307[41], 0, i11306, 'endValueTransform')
  i11306.optionalBool0 = !!i11307[42]
  i11306.optionalBool1 = !!i11307[43]
  i11306.optionalFloat0 = i11307[44]
  i11306.optionalInt0 = i11307[45]
  i11306.optionalRotationMode = i11307[46]
  i11306.optionalScrambleMode = i11307[47]
  i11306.optionalShakeRandomnessMode = i11307[48]
  i11306.optionalString = i11307[49]
  i11306.updateType = i11307[50]
  i11306.isSpeedBased = !!i11307[51]
  i11306.hasOnStart = !!i11307[52]
  i11306.hasOnPlay = !!i11307[53]
  i11306.hasOnUpdate = !!i11307[54]
  i11306.hasOnStepComplete = !!i11307[55]
  i11306.hasOnComplete = !!i11307[56]
  i11306.hasOnTweenCreated = !!i11307[57]
  i11306.hasOnRewind = !!i11307[58]
  i11306.onStart = request.d('UnityEngine.Events.UnityEvent', i11307[59], i11306.onStart)
  i11306.onPlay = request.d('UnityEngine.Events.UnityEvent', i11307[60], i11306.onPlay)
  i11306.onUpdate = request.d('UnityEngine.Events.UnityEvent', i11307[61], i11306.onUpdate)
  i11306.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i11307[62], i11306.onStepComplete)
  i11306.onComplete = request.d('UnityEngine.Events.UnityEvent', i11307[63], i11306.onComplete)
  i11306.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i11307[64], i11306.onTweenCreated)
  i11306.onRewind = request.d('UnityEngine.Events.UnityEvent', i11307[65], i11306.onRewind)
  return i11306
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i11308 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i11309 = data
  i11308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11309[0], i11308.m_PersistentCalls)
  return i11308
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i11310 = root || request.c( 'HideOnPointer' )
  var i11311 = data
  i11310.OnPointerDownEvent = request.d('System.Action', i11311[0], i11310.OnPointerDownEvent)
  return i11310
}

Deserializers["System.Action"] = function (request, data, root) {
  var i11312 = root || request.c( 'System.Action' )
  var i11313 = data
  return i11312
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i11314 = root || request.c( 'UnityEngine.UI.Mask' )
  var i11315 = data
  i11314.m_ShowMaskGraphic = !!i11315[0]
  return i11314
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i11316 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i11317 = data
  i11316.m_AspectMode = i11317[0]
  i11316.m_AspectRatio = i11317[1]
  return i11316
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i11318 = root || request.c( 'SelectPanel' )
  var i11319 = data
  request.r(i11319[0], i11319[1], 0, i11318, '_title')
  var i11321 = i11319[2]
  var i11320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i11321.length; i += 2) {
  request.r(i11321[i + 0], i11321[i + 1], 1, i11320, '')
  }
  i11318._buttons = i11320
  request.r(i11319[3], i11319[4], 0, i11318, '_popupMap')
  request.r(i11319[5], i11319[6], 0, i11318, '_popupMonster')
  request.r(i11319[7], i11319[8], 0, i11318, '_btnFind')
  return i11318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i11324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i11325 = data
  i11324.center = new pc.Vec3( i11325[0], i11325[1], i11325[2] )
  i11324.size = new pc.Vec3( i11325[3], i11325[4], i11325[5] )
  i11324.enabled = !!i11325[6]
  i11324.isTrigger = !!i11325[7]
  request.r(i11325[8], i11325[9], 0, i11324, 'material')
  return i11324
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i11326 = root || request.c( 'CharacterMotor' )
  var i11327 = data
  request.r(i11327[0], i11327[1], 0, i11326, 'characterInput')
  request.r(i11327[2], i11327[3], 0, i11326, 'cameraYawTransform')
  request.r(i11327[4], i11327[5], 0, i11326, '_arrow')
  i11326.moveSpeed = i11327[6]
  i11326.jumpHeight = i11327[7]
  request.r(i11327[8], i11327[9], 0, i11326, 'groundChecker')
  i11326.gravity = i11327[10]
  i11326.enableStepClimb = !!i11327[11]
  i11326.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i11327[12] )
  i11326.maxStepHeight = i11327[13]
  i11326.stepCheckDistance = i11327[14]
  i11326.stepUpSpeed = i11327[15]
  i11326.stepUpAcceleration = i11327[16]
  i11326.minimumStepFacing = i11327[17]
  request.r(i11327[18], i11327[19], 0, i11326, 'controller')
  i11326.autoRun = !!i11327[20]
  return i11326
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i11328 = root || request.c( 'CharacterRotation' )
  var i11329 = data
  request.r(i11329[0], i11329[1], 0, i11328, 'motor')
  i11328.rotationSpeed = i11329[2]
  return i11328
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i11330 = root || request.c( 'CharacterAnimation' )
  var i11331 = data
  request.r(i11331[0], i11331[1], 0, i11330, 'animator')
  request.r(i11331[2], i11331[3], 0, i11330, 'motor')
  i11330.speedChangeRate = i11331[4]
  i11330.groundedGraceTime = i11331[5]
  return i11330
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i11332 = root || request.c( 'CharacterCollect' )
  var i11333 = data
  request.r(i11333[0], i11333[1], 0, i11332, 'motor')
  request.r(i11333[2], i11333[3], 0, i11332, 'avatar')
  return i11332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i11334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i11335 = data
  i11334.mass = i11335[0]
  i11334.drag = i11335[1]
  i11334.angularDrag = i11335[2]
  i11334.useGravity = !!i11335[3]
  i11334.isKinematic = !!i11335[4]
  i11334.constraints = i11335[5]
  i11334.maxAngularVelocity = i11335[6]
  i11334.collisionDetectionMode = i11335[7]
  i11334.interpolation = i11335[8]
  return i11334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i11336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i11337 = data
  i11336.center = new pc.Vec3( i11337[0], i11337[1], i11337[2] )
  i11336.radius = i11337[3]
  i11336.height = i11337[4]
  i11336.direction = i11337[5]
  i11336.enabled = !!i11337[6]
  i11336.isTrigger = !!i11337[7]
  request.r(i11337[8], i11337[9], 0, i11336, 'material')
  return i11336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i11338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i11339 = data
  request.r(i11339[0], i11339[1], 0, i11338, 'animatorController')
  request.r(i11339[2], i11339[3], 0, i11338, 'avatar')
  i11338.updateMode = i11339[4]
  i11338.hasTransformHierarchy = !!i11339[5]
  i11338.applyRootMotion = !!i11339[6]
  var i11341 = i11339[7]
  var i11340 = []
  for(var i = 0; i < i11341.length; i += 2) {
  request.r(i11341[i + 0], i11341[i + 1], 2, i11340, '')
  }
  i11338.humanBones = i11340
  i11338.enabled = !!i11339[8]
  return i11338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i11344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i11345 = data
  request.r(i11345[0], i11345[1], 0, i11344, 'clip')
  request.r(i11345[2], i11345[3], 0, i11344, 'outputAudioMixerGroup')
  i11344.playOnAwake = !!i11345[4]
  i11344.loop = !!i11345[5]
  i11344.time = i11345[6]
  i11344.volume = i11345[7]
  i11344.pitch = i11345[8]
  i11344.enabled = !!i11345[9]
  return i11344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i11346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i11347 = data
  request.r(i11347[0], i11347[1], 0, i11346, 'sharedMesh')
  return i11346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i11348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i11349 = data
  request.r(i11349[0], i11349[1], 0, i11348, 'additionalVertexStreams')
  i11348.enabled = !!i11349[2]
  request.r(i11349[3], i11349[4], 0, i11348, 'sharedMaterial')
  var i11351 = i11349[5]
  var i11350 = []
  for(var i = 0; i < i11351.length; i += 2) {
  request.r(i11351[i + 0], i11351[i + 1], 2, i11350, '')
  }
  i11348.sharedMaterials = i11350
  i11348.receiveShadows = !!i11349[6]
  i11348.shadowCastingMode = i11349[7]
  i11348.sortingLayerID = i11349[8]
  i11348.sortingOrder = i11349[9]
  i11348.lightmapIndex = i11349[10]
  i11348.lightmapSceneIndex = i11349[11]
  i11348.lightmapScaleOffset = new pc.Vec4( i11349[12], i11349[13], i11349[14], i11349[15] )
  i11348.lightProbeUsage = i11349[16]
  i11348.reflectionProbeUsage = i11349[17]
  return i11348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i11352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i11353 = data
  request.r(i11353[0], i11353[1], 0, i11352, 'sharedMesh')
  var i11355 = i11353[2]
  var i11354 = []
  for(var i = 0; i < i11355.length; i += 2) {
  request.r(i11355[i + 0], i11355[i + 1], 2, i11354, '')
  }
  i11352.bones = i11354
  i11352.updateWhenOffscreen = !!i11353[3]
  i11352.localBounds = i11353[4]
  request.r(i11353[5], i11353[6], 0, i11352, 'rootBone')
  var i11357 = i11353[7]
  var i11356 = []
  for(var i = 0; i < i11357.length; i += 1) {
    i11356.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i11357[i + 0]) );
  }
  i11352.blendShapesWeights = i11356
  i11352.enabled = !!i11353[8]
  request.r(i11353[9], i11353[10], 0, i11352, 'sharedMaterial')
  var i11359 = i11353[11]
  var i11358 = []
  for(var i = 0; i < i11359.length; i += 2) {
  request.r(i11359[i + 0], i11359[i + 1], 2, i11358, '')
  }
  i11352.sharedMaterials = i11358
  i11352.receiveShadows = !!i11353[12]
  i11352.shadowCastingMode = i11353[13]
  i11352.sortingLayerID = i11353[14]
  i11352.sortingOrder = i11353[15]
  i11352.lightmapIndex = i11353[16]
  i11352.lightmapSceneIndex = i11353[17]
  i11352.lightmapScaleOffset = new pc.Vec4( i11353[18], i11353[19], i11353[20], i11353[21] )
  i11352.lightProbeUsage = i11353[22]
  i11352.reflectionProbeUsage = i11353[23]
  return i11352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i11362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i11363 = data
  i11362.weight = i11363[0]
  return i11362
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i11364 = root || request.c( 'GroundChecker' )
  var i11365 = data
  request.r(i11365[0], i11365[1], 0, i11364, 'groundPoint')
  i11364.checkRadius = i11365[2]
  i11364.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i11365[3] )
  return i11364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i11366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i11367 = data
  i11366.color = new pc.Color(i11367[0], i11367[1], i11367[2], i11367[3])
  request.r(i11367[4], i11367[5], 0, i11366, 'sprite')
  i11366.flipX = !!i11367[6]
  i11366.flipY = !!i11367[7]
  i11366.drawMode = i11367[8]
  i11366.size = new pc.Vec2( i11367[9], i11367[10] )
  i11366.tileMode = i11367[11]
  i11366.adaptiveModeThreshold = i11367[12]
  i11366.maskInteraction = i11367[13]
  i11366.spriteSortPoint = i11367[14]
  i11366.enabled = !!i11367[15]
  request.r(i11367[16], i11367[17], 0, i11366, 'sharedMaterial')
  var i11369 = i11367[18]
  var i11368 = []
  for(var i = 0; i < i11369.length; i += 2) {
  request.r(i11369[i + 0], i11369[i + 1], 2, i11368, '')
  }
  i11366.sharedMaterials = i11368
  i11366.receiveShadows = !!i11367[19]
  i11366.shadowCastingMode = i11367[20]
  i11366.sortingLayerID = i11367[21]
  i11366.sortingOrder = i11367[22]
  i11366.lightmapIndex = i11367[23]
  i11366.lightmapSceneIndex = i11367[24]
  i11366.lightmapScaleOffset = new pc.Vec4( i11367[25], i11367[26], i11367[27], i11367[28] )
  i11366.lightProbeUsage = i11367[29]
  i11366.reflectionProbeUsage = i11367[30]
  return i11366
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i11370 = root || request.c( 'CameraFollow' )
  var i11371 = data
  request.r(i11371[0], i11371[1], 0, i11370, 'target')
  i11370.smoothTime = i11371[2]
  return i11370
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i11372 = root || request.c( 'CameraLook' )
  var i11373 = data
  request.r(i11373[0], i11373[1], 0, i11372, 'input')
  request.r(i11373[2], i11373[3], 0, i11372, 'yawPivot')
  request.r(i11373[4], i11373[5], 0, i11372, 'pitchPivot')
  i11372.minPitch = i11373[6]
  i11372.maxPitch = i11373[7]
  i11372.yaw = i11373[8]
  i11372.pitch = i11373[9]
  i11372.defaltYaw = i11373[10]
  i11372.defaltPitch = i11373[11]
  return i11372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i11374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i11375 = data
  i11374.aspect = i11375[0]
  i11374.orthographic = !!i11375[1]
  i11374.orthographicSize = i11375[2]
  i11374.backgroundColor = new pc.Color(i11375[3], i11375[4], i11375[5], i11375[6])
  i11374.nearClipPlane = i11375[7]
  i11374.farClipPlane = i11375[8]
  i11374.fieldOfView = i11375[9]
  i11374.depth = i11375[10]
  i11374.clearFlags = i11375[11]
  i11374.cullingMask = i11375[12]
  i11374.rect = i11375[13]
  request.r(i11375[14], i11375[15], 0, i11374, 'targetTexture')
  i11374.usePhysicalProperties = !!i11375[16]
  i11374.focalLength = i11375[17]
  i11374.sensorSize = new pc.Vec2( i11375[18], i11375[19] )
  i11374.lensShift = new pc.Vec2( i11375[20], i11375[21] )
  i11374.gateFit = i11375[22]
  i11374.commandBufferCount = i11375[23]
  i11374.cameraType = i11375[24]
  i11374.enabled = !!i11375[25]
  return i11374
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i11376 = root || request.c( 'CharacterInput' )
  var i11377 = data
  request.r(i11377[0], i11377[1], 0, i11376, 'joystick')
  request.r(i11377[2], i11377[3], 0, i11376, 'jumpButton')
  return i11376
}

Deserializers["InputManager"] = function (request, data, root) {
  var i11378 = root || request.c( 'InputManager' )
  var i11379 = data
  request.r(i11379[0], i11379[1], 0, i11378, 'worldCamera')
  i11378.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i11379[2] )
  i11378.touchSensitivity = i11379[3]
  i11378.mouseSensitivity = i11379[4]
  i11378.dragThreshold = i11379[5]
  return i11378
}

Deserializers["GameController"] = function (request, data, root) {
  var i11380 = root || request.c( 'GameController' )
  var i11381 = data
  i11380.timeToShowComplete = i11381[0]
  i11380.timeToShowHint = i11381[1]
  i11380.currentProgress = i11381[2]
  i11380.target = i11381[3]
  request.r(i11381[4], i11381[5], 0, i11380, 'progressText')
  request.r(i11381[6], i11381[7], 0, i11380, 'collectText')
  request.r(i11381[8], i11381[9], 0, i11380, 'completeScene')
  var i11383 = i11381[10]
  var i11382 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i11383.length; i += 2) {
  request.r(i11383[i + 0], i11383[i + 1], 1, i11382, '')
  }
  i11380.gifts = i11382
  request.r(i11381[11], i11381[12], 0, i11380, 'collect')
  request.r(i11381[13], i11381[14], 0, i11380, 'tut')
  return i11380
}

Deserializers["AudioController"] = function (request, data, root) {
  var i11386 = root || request.c( 'AudioController' )
  var i11387 = data
  request.r(i11387[0], i11387[1], 0, i11386, 'musicSource')
  request.r(i11387[2], i11387[3], 0, i11386, 'poolParent')
  i11386.startSize = i11387[4]
  return i11386
}

Deserializers["LunaController"] = function (request, data, root) {
  var i11388 = root || request.c( 'LunaController' )
  var i11389 = data
  i11388.LimitTimePlay = !!i11389[0]
  i11388.TimePlay = i11389[1]
  var i11391 = i11389[2]
  var i11390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i11391.length; i += 2) {
  request.r(i11391[i + 0], i11391[i + 1], 1, i11390, '')
  }
  i11388.images = i11390
  request.r(i11389[3], i11389[4], 0, i11388, 'CTA')
  return i11388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i11394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i11395 = data
  i11394.textureMode = i11395[0]
  i11394.alignment = i11395[1]
  i11394.widthCurve = new pc.AnimationCurve( { keys_flow: i11395[2] } )
  i11394.colorGradient = i11395[3] ? new pc.ColorGradient(i11395[3][0], i11395[3][1], i11395[3][2]) : null
  var i11397 = i11395[4]
  var i11396 = []
  for(var i = 0; i < i11397.length; i += 3) {
    i11396.push( new pc.Vec3( i11397[i + 0], i11397[i + 1], i11397[i + 2] ) );
  }
  i11394.positions = i11396
  i11394.positionCount = i11395[5]
  i11394.widthMultiplier = i11395[6]
  i11394.startWidth = i11395[7]
  i11394.endWidth = i11395[8]
  i11394.numCornerVertices = i11395[9]
  i11394.numCapVertices = i11395[10]
  i11394.useWorldSpace = !!i11395[11]
  i11394.loop = !!i11395[12]
  i11394.startColor = new pc.Color(i11395[13], i11395[14], i11395[15], i11395[16])
  i11394.endColor = new pc.Color(i11395[17], i11395[18], i11395[19], i11395[20])
  i11394.generateLightingData = !!i11395[21]
  i11394.enabled = !!i11395[22]
  request.r(i11395[23], i11395[24], 0, i11394, 'sharedMaterial')
  var i11399 = i11395[25]
  var i11398 = []
  for(var i = 0; i < i11399.length; i += 2) {
  request.r(i11399[i + 0], i11399[i + 1], 2, i11398, '')
  }
  i11394.sharedMaterials = i11398
  i11394.receiveShadows = !!i11395[26]
  i11394.shadowCastingMode = i11395[27]
  i11394.sortingLayerID = i11395[28]
  i11394.sortingOrder = i11395[29]
  i11394.lightmapIndex = i11395[30]
  i11394.lightmapSceneIndex = i11395[31]
  i11394.lightmapScaleOffset = new pc.Vec4( i11395[32], i11395[33], i11395[34], i11395[35] )
  i11394.lightProbeUsage = i11395[36]
  i11394.reflectionProbeUsage = i11395[37]
  return i11394
}

Deserializers["Gift"] = function (request, data, root) {
  var i11402 = root || request.c( 'Gift' )
  var i11403 = data
  i11402.collectDone = !!i11403[0]
  var i11405 = i11403[1]
  var i11404 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i11405.length; i += 2) {
  request.r(i11405[i + 0], i11405[i + 1], 1, i11404, '')
  }
  i11402.hints = i11404
  request.r(i11403[2], i11403[3], 0, i11402, 'collectSound')
  request.r(i11403[4], i11403[5], 0, i11402, 'collectEffect')
  request.r(i11403[6], i11403[7], 0, i11402, 'arrow')
  return i11402
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i11408 = root || request.c( 'SoundHint' )
  var i11409 = data
  request.r(i11409[0], i11409[1], 0, i11408, 'Sound')
  request.r(i11409[2], i11409[3], 0, i11408, 'Source')
  return i11408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i11410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i11411 = data
  request.r(i11411[0], i11411[1], 0, i11410, 'mesh')
  i11410.meshCount = i11411[2]
  i11410.activeVertexStreamsCount = i11411[3]
  i11410.alignment = i11411[4]
  i11410.renderMode = i11411[5]
  i11410.sortMode = i11411[6]
  i11410.lengthScale = i11411[7]
  i11410.velocityScale = i11411[8]
  i11410.cameraVelocityScale = i11411[9]
  i11410.normalDirection = i11411[10]
  i11410.sortingFudge = i11411[11]
  i11410.minParticleSize = i11411[12]
  i11410.maxParticleSize = i11411[13]
  i11410.pivot = new pc.Vec3( i11411[14], i11411[15], i11411[16] )
  request.r(i11411[17], i11411[18], 0, i11410, 'trailMaterial')
  i11410.applyActiveColorSpace = !!i11411[19]
  i11410.enabled = !!i11411[20]
  request.r(i11411[21], i11411[22], 0, i11410, 'sharedMaterial')
  var i11413 = i11411[23]
  var i11412 = []
  for(var i = 0; i < i11413.length; i += 2) {
  request.r(i11413[i + 0], i11413[i + 1], 2, i11412, '')
  }
  i11410.sharedMaterials = i11412
  i11410.receiveShadows = !!i11411[24]
  i11410.shadowCastingMode = i11411[25]
  i11410.sortingLayerID = i11411[26]
  i11410.sortingOrder = i11411[27]
  i11410.lightmapIndex = i11411[28]
  i11410.lightmapSceneIndex = i11411[29]
  i11410.lightmapScaleOffset = new pc.Vec4( i11411[30], i11411[31], i11411[32], i11411[33] )
  i11410.lightProbeUsage = i11411[34]
  i11410.reflectionProbeUsage = i11411[35]
  return i11410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i11414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i11415 = data
  i11414.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i11415[0], i11414.main)
  i11414.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i11415[1], i11414.colorBySpeed)
  i11414.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i11415[2], i11414.colorOverLifetime)
  i11414.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i11415[3], i11414.emission)
  i11414.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i11415[4], i11414.rotationBySpeed)
  i11414.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i11415[5], i11414.rotationOverLifetime)
  i11414.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i11415[6], i11414.shape)
  i11414.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i11415[7], i11414.sizeBySpeed)
  i11414.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i11415[8], i11414.sizeOverLifetime)
  i11414.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i11415[9], i11414.textureSheetAnimation)
  i11414.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i11415[10], i11414.velocityOverLifetime)
  i11414.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i11415[11], i11414.noise)
  i11414.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i11415[12], i11414.inheritVelocity)
  i11414.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i11415[13], i11414.forceOverLifetime)
  i11414.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i11415[14], i11414.limitVelocityOverLifetime)
  i11414.useAutoRandomSeed = !!i11415[15]
  i11414.randomSeed = i11415[16]
  return i11414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i11416 = root || new pc.ParticleSystemMain()
  var i11417 = data
  i11416.duration = i11417[0]
  i11416.loop = !!i11417[1]
  i11416.prewarm = !!i11417[2]
  i11416.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[3], i11416.startDelay)
  i11416.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[4], i11416.startLifetime)
  i11416.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[5], i11416.startSpeed)
  i11416.startSize3D = !!i11417[6]
  i11416.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[7], i11416.startSizeX)
  i11416.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[8], i11416.startSizeY)
  i11416.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[9], i11416.startSizeZ)
  i11416.startRotation3D = !!i11417[10]
  i11416.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[11], i11416.startRotationX)
  i11416.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[12], i11416.startRotationY)
  i11416.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[13], i11416.startRotationZ)
  i11416.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11417[14], i11416.startColor)
  i11416.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[15], i11416.gravityModifier)
  i11416.simulationSpace = i11417[16]
  request.r(i11417[17], i11417[18], 0, i11416, 'customSimulationSpace')
  i11416.simulationSpeed = i11417[19]
  i11416.useUnscaledTime = !!i11417[20]
  i11416.scalingMode = i11417[21]
  i11416.playOnAwake = !!i11417[22]
  i11416.maxParticles = i11417[23]
  i11416.emitterVelocityMode = i11417[24]
  i11416.stopAction = i11417[25]
  return i11416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i11418 = root || new pc.MinMaxCurve()
  var i11419 = data
  i11418.mode = i11419[0]
  i11418.curveMin = new pc.AnimationCurve( { keys_flow: i11419[1] } )
  i11418.curveMax = new pc.AnimationCurve( { keys_flow: i11419[2] } )
  i11418.curveMultiplier = i11419[3]
  i11418.constantMin = i11419[4]
  i11418.constantMax = i11419[5]
  return i11418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i11420 = root || new pc.MinMaxGradient()
  var i11421 = data
  i11420.mode = i11421[0]
  i11420.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11421[1], i11420.gradientMin)
  i11420.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11421[2], i11420.gradientMax)
  i11420.colorMin = new pc.Color(i11421[3], i11421[4], i11421[5], i11421[6])
  i11420.colorMax = new pc.Color(i11421[7], i11421[8], i11421[9], i11421[10])
  return i11420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i11422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i11423 = data
  i11422.mode = i11423[0]
  var i11425 = i11423[1]
  var i11424 = []
  for(var i = 0; i < i11425.length; i += 1) {
    i11424.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i11425[i + 0]) );
  }
  i11422.colorKeys = i11424
  var i11427 = i11423[2]
  var i11426 = []
  for(var i = 0; i < i11427.length; i += 1) {
    i11426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i11427[i + 0]) );
  }
  i11422.alphaKeys = i11426
  return i11422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i11428 = root || new pc.ParticleSystemColorBySpeed()
  var i11429 = data
  i11428.enabled = !!i11429[0]
  i11428.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11429[1], i11428.color)
  i11428.range = new pc.Vec2( i11429[2], i11429[3] )
  return i11428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i11432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i11433 = data
  i11432.color = new pc.Color(i11433[0], i11433[1], i11433[2], i11433[3])
  i11432.time = i11433[4]
  return i11432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i11436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i11437 = data
  i11436.alpha = i11437[0]
  i11436.time = i11437[1]
  return i11436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i11438 = root || new pc.ParticleSystemColorOverLifetime()
  var i11439 = data
  i11438.enabled = !!i11439[0]
  i11438.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11439[1], i11438.color)
  return i11438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i11440 = root || new pc.ParticleSystemEmitter()
  var i11441 = data
  i11440.enabled = !!i11441[0]
  i11440.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[1], i11440.rateOverTime)
  i11440.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[2], i11440.rateOverDistance)
  var i11443 = i11441[3]
  var i11442 = []
  for(var i = 0; i < i11443.length; i += 1) {
    i11442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i11443[i + 0]) );
  }
  i11440.bursts = i11442
  return i11440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i11446 = root || new pc.ParticleSystemBurst()
  var i11447 = data
  i11446.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11447[0], i11446.count)
  i11446.cycleCount = i11447[1]
  i11446.minCount = i11447[2]
  i11446.maxCount = i11447[3]
  i11446.repeatInterval = i11447[4]
  i11446.time = i11447[5]
  return i11446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i11448 = root || new pc.ParticleSystemRotationBySpeed()
  var i11449 = data
  i11448.enabled = !!i11449[0]
  i11448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11449[1], i11448.x)
  i11448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11449[2], i11448.y)
  i11448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11449[3], i11448.z)
  i11448.separateAxes = !!i11449[4]
  i11448.range = new pc.Vec2( i11449[5], i11449[6] )
  return i11448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i11450 = root || new pc.ParticleSystemRotationOverLifetime()
  var i11451 = data
  i11450.enabled = !!i11451[0]
  i11450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11451[1], i11450.x)
  i11450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11451[2], i11450.y)
  i11450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11451[3], i11450.z)
  i11450.separateAxes = !!i11451[4]
  return i11450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i11452 = root || new pc.ParticleSystemShape()
  var i11453 = data
  i11452.enabled = !!i11453[0]
  i11452.shapeType = i11453[1]
  i11452.randomDirectionAmount = i11453[2]
  i11452.sphericalDirectionAmount = i11453[3]
  i11452.randomPositionAmount = i11453[4]
  i11452.alignToDirection = !!i11453[5]
  i11452.radius = i11453[6]
  i11452.radiusMode = i11453[7]
  i11452.radiusSpread = i11453[8]
  i11452.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11453[9], i11452.radiusSpeed)
  i11452.radiusThickness = i11453[10]
  i11452.angle = i11453[11]
  i11452.length = i11453[12]
  i11452.boxThickness = new pc.Vec3( i11453[13], i11453[14], i11453[15] )
  i11452.meshShapeType = i11453[16]
  request.r(i11453[17], i11453[18], 0, i11452, 'mesh')
  request.r(i11453[19], i11453[20], 0, i11452, 'meshRenderer')
  request.r(i11453[21], i11453[22], 0, i11452, 'skinnedMeshRenderer')
  i11452.useMeshMaterialIndex = !!i11453[23]
  i11452.meshMaterialIndex = i11453[24]
  i11452.useMeshColors = !!i11453[25]
  i11452.normalOffset = i11453[26]
  i11452.arc = i11453[27]
  i11452.arcMode = i11453[28]
  i11452.arcSpread = i11453[29]
  i11452.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11453[30], i11452.arcSpeed)
  i11452.donutRadius = i11453[31]
  i11452.position = new pc.Vec3( i11453[32], i11453[33], i11453[34] )
  i11452.rotation = new pc.Vec3( i11453[35], i11453[36], i11453[37] )
  i11452.scale = new pc.Vec3( i11453[38], i11453[39], i11453[40] )
  return i11452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i11454 = root || new pc.ParticleSystemSizeBySpeed()
  var i11455 = data
  i11454.enabled = !!i11455[0]
  i11454.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11455[1], i11454.x)
  i11454.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11455[2], i11454.y)
  i11454.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11455[3], i11454.z)
  i11454.separateAxes = !!i11455[4]
  i11454.range = new pc.Vec2( i11455[5], i11455[6] )
  return i11454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i11456 = root || new pc.ParticleSystemSizeOverLifetime()
  var i11457 = data
  i11456.enabled = !!i11457[0]
  i11456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11457[1], i11456.x)
  i11456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11457[2], i11456.y)
  i11456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11457[3], i11456.z)
  i11456.separateAxes = !!i11457[4]
  return i11456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i11458 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i11459 = data
  i11458.enabled = !!i11459[0]
  i11458.mode = i11459[1]
  i11458.animation = i11459[2]
  i11458.numTilesX = i11459[3]
  i11458.numTilesY = i11459[4]
  i11458.useRandomRow = !!i11459[5]
  i11458.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11459[6], i11458.frameOverTime)
  i11458.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11459[7], i11458.startFrame)
  i11458.cycleCount = i11459[8]
  i11458.rowIndex = i11459[9]
  i11458.flipU = i11459[10]
  i11458.flipV = i11459[11]
  i11458.spriteCount = i11459[12]
  var i11461 = i11459[13]
  var i11460 = []
  for(var i = 0; i < i11461.length; i += 2) {
  request.r(i11461[i + 0], i11461[i + 1], 2, i11460, '')
  }
  i11458.sprites = i11460
  return i11458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i11464 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i11465 = data
  i11464.enabled = !!i11465[0]
  i11464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[1], i11464.x)
  i11464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[2], i11464.y)
  i11464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[3], i11464.z)
  i11464.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[4], i11464.radial)
  i11464.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[5], i11464.speedModifier)
  i11464.space = i11465[6]
  i11464.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[7], i11464.orbitalX)
  i11464.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[8], i11464.orbitalY)
  i11464.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[9], i11464.orbitalZ)
  i11464.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[10], i11464.orbitalOffsetX)
  i11464.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[11], i11464.orbitalOffsetY)
  i11464.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11465[12], i11464.orbitalOffsetZ)
  return i11464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i11466 = root || new pc.ParticleSystemNoise()
  var i11467 = data
  i11466.enabled = !!i11467[0]
  i11466.separateAxes = !!i11467[1]
  i11466.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[2], i11466.strengthX)
  i11466.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[3], i11466.strengthY)
  i11466.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[4], i11466.strengthZ)
  i11466.frequency = i11467[5]
  i11466.damping = !!i11467[6]
  i11466.octaveCount = i11467[7]
  i11466.octaveMultiplier = i11467[8]
  i11466.octaveScale = i11467[9]
  i11466.quality = i11467[10]
  i11466.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[11], i11466.scrollSpeed)
  i11466.scrollSpeedMultiplier = i11467[12]
  i11466.remapEnabled = !!i11467[13]
  i11466.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[14], i11466.remapX)
  i11466.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[15], i11466.remapY)
  i11466.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[16], i11466.remapZ)
  i11466.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[17], i11466.positionAmount)
  i11466.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[18], i11466.rotationAmount)
  i11466.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11467[19], i11466.sizeAmount)
  return i11466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i11468 = root || new pc.ParticleSystemInheritVelocity()
  var i11469 = data
  i11468.enabled = !!i11469[0]
  i11468.mode = i11469[1]
  i11468.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11469[2], i11468.curve)
  return i11468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i11470 = root || new pc.ParticleSystemForceOverLifetime()
  var i11471 = data
  i11470.enabled = !!i11471[0]
  i11470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11471[1], i11470.x)
  i11470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11471[2], i11470.y)
  i11470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11471[3], i11470.z)
  i11470.space = i11471[4]
  i11470.randomized = !!i11471[5]
  return i11470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i11472 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i11473 = data
  i11472.enabled = !!i11473[0]
  i11472.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11473[1], i11472.limit)
  i11472.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11473[2], i11472.limitX)
  i11472.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11473[3], i11472.limitY)
  i11472.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11473[4], i11472.limitZ)
  i11472.dampen = i11473[5]
  i11472.separateAxes = !!i11473[6]
  i11472.space = i11473[7]
  i11472.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11473[8], i11472.drag)
  i11472.multiplyDragByParticleSize = !!i11473[9]
  i11472.multiplyDragByParticleVelocity = !!i11473[10]
  return i11472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i11474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i11475 = data
  request.r(i11475[0], i11475[1], 0, i11474, 'sharedMesh')
  i11474.convex = !!i11475[2]
  i11474.enabled = !!i11475[3]
  i11474.isTrigger = !!i11475[4]
  request.r(i11475[5], i11475[6], 0, i11474, 'material')
  return i11474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i11476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i11477 = data
  i11476.center = new pc.Vec3( i11477[0], i11477[1], i11477[2] )
  i11476.radius = i11477[3]
  i11476.enabled = !!i11477[4]
  i11476.isTrigger = !!i11477[5]
  request.r(i11477[6], i11477[7], 0, i11476, 'material')
  return i11476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i11478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i11479 = data
  i11478.type = i11479[0]
  i11478.color = new pc.Color(i11479[1], i11479[2], i11479[3], i11479[4])
  i11478.cullingMask = i11479[5]
  i11478.intensity = i11479[6]
  i11478.range = i11479[7]
  i11478.spotAngle = i11479[8]
  i11478.shadows = i11479[9]
  i11478.shadowNormalBias = i11479[10]
  i11478.shadowBias = i11479[11]
  i11478.shadowStrength = i11479[12]
  i11478.shadowResolution = i11479[13]
  i11478.lightmapBakeType = i11479[14]
  i11478.renderMode = i11479[15]
  request.r(i11479[16], i11479[17], 0, i11478, 'cookie')
  i11478.cookieSize = i11479[18]
  i11478.shadowNearPlane = i11479[19]
  i11478.occlusionMaskChannel = i11479[20]
  i11478.isBaked = !!i11479[21]
  i11478.mixedLightingMode = i11479[22]
  i11478.enabled = !!i11479[23]
  return i11478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i11480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i11481 = data
  i11480.ambientIntensity = i11481[0]
  i11480.reflectionIntensity = i11481[1]
  i11480.ambientMode = i11481[2]
  i11480.ambientLight = new pc.Color(i11481[3], i11481[4], i11481[5], i11481[6])
  i11480.ambientSkyColor = new pc.Color(i11481[7], i11481[8], i11481[9], i11481[10])
  i11480.ambientGroundColor = new pc.Color(i11481[11], i11481[12], i11481[13], i11481[14])
  i11480.ambientEquatorColor = new pc.Color(i11481[15], i11481[16], i11481[17], i11481[18])
  i11480.fogColor = new pc.Color(i11481[19], i11481[20], i11481[21], i11481[22])
  i11480.fogEndDistance = i11481[23]
  i11480.fogStartDistance = i11481[24]
  i11480.fogDensity = i11481[25]
  i11480.fog = !!i11481[26]
  request.r(i11481[27], i11481[28], 0, i11480, 'skybox')
  i11480.fogMode = i11481[29]
  var i11483 = i11481[30]
  var i11482 = []
  for(var i = 0; i < i11483.length; i += 1) {
    i11482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i11483[i + 0]) );
  }
  i11480.lightmaps = i11482
  i11480.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i11481[31], i11480.lightProbes)
  i11480.lightmapsMode = i11481[32]
  i11480.mixedBakeMode = i11481[33]
  i11480.environmentLightingMode = i11481[34]
  i11480.ambientProbe = new pc.SphericalHarmonicsL2(i11481[35])
  request.r(i11481[36], i11481[37], 0, i11480, 'customReflection')
  request.r(i11481[38], i11481[39], 0, i11480, 'defaultReflection')
  i11480.defaultReflectionMode = i11481[40]
  i11480.defaultReflectionResolution = i11481[41]
  i11480.sunLightObjectId = i11481[42]
  i11480.pixelLightCount = i11481[43]
  i11480.defaultReflectionHDR = !!i11481[44]
  i11480.hasLightDataAsset = !!i11481[45]
  i11480.hasManualGenerate = !!i11481[46]
  return i11480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i11486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i11487 = data
  request.r(i11487[0], i11487[1], 0, i11486, 'lightmapColor')
  request.r(i11487[2], i11487[3], 0, i11486, 'lightmapDirection')
  request.r(i11487[4], i11487[5], 0, i11486, 'shadowMask')
  return i11486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i11488 = root || new UnityEngine.LightProbes()
  var i11489 = data
  return i11488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i11494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i11495 = data
  var i11497 = i11495[0]
  var i11496 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i11497.length; i += 1) {
    i11496.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i11497[i + 0]));
  }
  i11494.ShaderCompilationErrors = i11496
  i11494.name = i11495[1]
  i11494.guid = i11495[2]
  var i11499 = i11495[3]
  var i11498 = []
  for(var i = 0; i < i11499.length; i += 1) {
    i11498.push( i11499[i + 0] );
  }
  i11494.shaderDefinedKeywords = i11498
  var i11501 = i11495[4]
  var i11500 = []
  for(var i = 0; i < i11501.length; i += 1) {
    i11500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i11501[i + 0]) );
  }
  i11494.passes = i11500
  var i11503 = i11495[5]
  var i11502 = []
  for(var i = 0; i < i11503.length; i += 1) {
    i11502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i11503[i + 0]) );
  }
  i11494.usePasses = i11502
  var i11505 = i11495[6]
  var i11504 = []
  for(var i = 0; i < i11505.length; i += 1) {
    i11504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i11505[i + 0]) );
  }
  i11494.defaultParameterValues = i11504
  request.r(i11495[7], i11495[8], 0, i11494, 'unityFallbackShader')
  i11494.readDepth = !!i11495[9]
  i11494.hasDepthOnlyPass = !!i11495[10]
  i11494.isCreatedByShaderGraph = !!i11495[11]
  i11494.disableBatching = !!i11495[12]
  i11494.compiled = !!i11495[13]
  return i11494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i11508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i11509 = data
  i11508.shaderName = i11509[0]
  i11508.errorMessage = i11509[1]
  return i11508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i11514 = root || new pc.UnityShaderPass()
  var i11515 = data
  i11514.id = i11515[0]
  i11514.subShaderIndex = i11515[1]
  i11514.name = i11515[2]
  i11514.passType = i11515[3]
  i11514.grabPassTextureName = i11515[4]
  i11514.usePass = !!i11515[5]
  i11514.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[6], i11514.zTest)
  i11514.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[7], i11514.zWrite)
  i11514.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[8], i11514.culling)
  i11514.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11515[9], i11514.blending)
  i11514.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11515[10], i11514.alphaBlending)
  i11514.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[11], i11514.colorWriteMask)
  i11514.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[12], i11514.offsetUnits)
  i11514.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[13], i11514.offsetFactor)
  i11514.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[14], i11514.stencilRef)
  i11514.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[15], i11514.stencilReadMask)
  i11514.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11515[16], i11514.stencilWriteMask)
  i11514.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11515[17], i11514.stencilOp)
  i11514.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11515[18], i11514.stencilOpFront)
  i11514.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11515[19], i11514.stencilOpBack)
  var i11517 = i11515[20]
  var i11516 = []
  for(var i = 0; i < i11517.length; i += 1) {
    i11516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i11517[i + 0]) );
  }
  i11514.tags = i11516
  var i11519 = i11515[21]
  var i11518 = []
  for(var i = 0; i < i11519.length; i += 1) {
    i11518.push( i11519[i + 0] );
  }
  i11514.passDefinedKeywords = i11518
  var i11521 = i11515[22]
  var i11520 = []
  for(var i = 0; i < i11521.length; i += 1) {
    i11520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i11521[i + 0]) );
  }
  i11514.passDefinedKeywordGroups = i11520
  var i11523 = i11515[23]
  var i11522 = []
  for(var i = 0; i < i11523.length; i += 1) {
    i11522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11523[i + 0]) );
  }
  i11514.variants = i11522
  var i11525 = i11515[24]
  var i11524 = []
  for(var i = 0; i < i11525.length; i += 1) {
    i11524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11525[i + 0]) );
  }
  i11514.excludedVariants = i11524
  i11514.hasDepthReader = !!i11515[25]
  return i11514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i11526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i11527 = data
  i11526.val = i11527[0]
  i11526.name = i11527[1]
  return i11526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i11528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i11529 = data
  i11528.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11529[0], i11528.src)
  i11528.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11529[1], i11528.dst)
  i11528.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11529[2], i11528.op)
  return i11528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i11530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i11531 = data
  i11530.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11531[0], i11530.pass)
  i11530.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11531[1], i11530.fail)
  i11530.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11531[2], i11530.zFail)
  i11530.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11531[3], i11530.comp)
  return i11530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i11534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i11535 = data
  i11534.name = i11535[0]
  i11534.value = i11535[1]
  return i11534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i11538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i11539 = data
  var i11541 = i11539[0]
  var i11540 = []
  for(var i = 0; i < i11541.length; i += 1) {
    i11540.push( i11541[i + 0] );
  }
  i11538.keywords = i11540
  i11538.hasDiscard = !!i11539[1]
  return i11538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i11544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i11545 = data
  i11544.passId = i11545[0]
  i11544.subShaderIndex = i11545[1]
  var i11547 = i11545[2]
  var i11546 = []
  for(var i = 0; i < i11547.length; i += 1) {
    i11546.push( i11547[i + 0] );
  }
  i11544.keywords = i11546
  i11544.vertexProgram = i11545[3]
  i11544.fragmentProgram = i11545[4]
  i11544.exportedForWebGl2 = !!i11545[5]
  i11544.readDepth = !!i11545[6]
  return i11544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i11550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i11551 = data
  request.r(i11551[0], i11551[1], 0, i11550, 'shader')
  i11550.pass = i11551[2]
  return i11550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i11554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i11555 = data
  i11554.name = i11555[0]
  i11554.type = i11555[1]
  i11554.value = new pc.Vec4( i11555[2], i11555[3], i11555[4], i11555[5] )
  i11554.textureValue = i11555[6]
  i11554.shaderPropertyFlag = i11555[7]
  return i11554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i11556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i11557 = data
  i11556.name = i11557[0]
  request.r(i11557[1], i11557[2], 0, i11556, 'texture')
  i11556.aabb = i11557[3]
  i11556.vertices = i11557[4]
  i11556.triangles = i11557[5]
  i11556.textureRect = UnityEngine.Rect.MinMaxRect(i11557[6], i11557[7], i11557[8], i11557[9])
  i11556.packedRect = UnityEngine.Rect.MinMaxRect(i11557[10], i11557[11], i11557[12], i11557[13])
  i11556.border = new pc.Vec4( i11557[14], i11557[15], i11557[16], i11557[17] )
  i11556.transparency = i11557[18]
  i11556.bounds = i11557[19]
  i11556.pixelsPerUnit = i11557[20]
  i11556.textureWidth = i11557[21]
  i11556.textureHeight = i11557[22]
  i11556.nativeSize = new pc.Vec2( i11557[23], i11557[24] )
  i11556.pivot = new pc.Vec2( i11557[25], i11557[26] )
  i11556.textureRectOffset = new pc.Vec2( i11557[27], i11557[28] )
  return i11556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i11558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i11559 = data
  i11558.name = i11559[0]
  return i11558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i11560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i11561 = data
  i11560.name = i11561[0]
  i11560.wrapMode = i11561[1]
  i11560.isLooping = !!i11561[2]
  i11560.length = i11561[3]
  var i11563 = i11561[4]
  var i11562 = []
  for(var i = 0; i < i11563.length; i += 1) {
    i11562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i11563[i + 0]) );
  }
  i11560.curves = i11562
  var i11565 = i11561[5]
  var i11564 = []
  for(var i = 0; i < i11565.length; i += 1) {
    i11564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i11565[i + 0]) );
  }
  i11560.events = i11564
  i11560.halfPrecision = !!i11561[6]
  i11560._frameRate = i11561[7]
  i11560.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i11561[8], i11560.localBounds)
  i11560.hasMuscleCurves = !!i11561[9]
  var i11567 = i11561[10]
  var i11566 = []
  for(var i = 0; i < i11567.length; i += 1) {
    i11566.push( i11567[i + 0] );
  }
  i11560.clipMuscleConstant = i11566
  i11560.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i11561[11], i11560.clipBindingConstant)
  return i11560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i11570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i11571 = data
  i11570.path = i11571[0]
  i11570.hash = i11571[1]
  i11570.componentType = i11571[2]
  i11570.property = i11571[3]
  i11570.keys = i11571[4]
  var i11573 = i11571[5]
  var i11572 = []
  for(var i = 0; i < i11573.length; i += 1) {
    i11572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i11573[i + 0]) );
  }
  i11570.objectReferenceKeys = i11572
  return i11570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i11576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i11577 = data
  i11576.time = i11577[0]
  request.r(i11577[1], i11577[2], 0, i11576, 'value')
  return i11576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i11580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i11581 = data
  i11580.functionName = i11581[0]
  i11580.floatParameter = i11581[1]
  i11580.intParameter = i11581[2]
  i11580.stringParameter = i11581[3]
  request.r(i11581[4], i11581[5], 0, i11580, 'objectReferenceParameter')
  i11580.time = i11581[6]
  return i11580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i11582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i11583 = data
  i11582.center = new pc.Vec3( i11583[0], i11583[1], i11583[2] )
  i11582.extends = new pc.Vec3( i11583[3], i11583[4], i11583[5] )
  return i11582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i11586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i11587 = data
  var i11589 = i11587[0]
  var i11588 = []
  for(var i = 0; i < i11589.length; i += 1) {
    i11588.push( i11589[i + 0] );
  }
  i11586.genericBindings = i11588
  var i11591 = i11587[1]
  var i11590 = []
  for(var i = 0; i < i11591.length; i += 1) {
    i11590.push( i11591[i + 0] );
  }
  i11586.pptrCurveMapping = i11590
  return i11586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i11592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i11593 = data
  i11592.name = i11593[0]
  var i11595 = i11593[1]
  var i11594 = []
  for(var i = 0; i < i11595.length; i += 1) {
    i11594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i11595[i + 0]) );
  }
  i11592.layers = i11594
  var i11597 = i11593[2]
  var i11596 = []
  for(var i = 0; i < i11597.length; i += 1) {
    i11596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i11597[i + 0]) );
  }
  i11592.parameters = i11596
  i11592.animationClips = i11593[3]
  i11592.avatarUnsupported = i11593[4]
  return i11592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i11600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i11601 = data
  i11600.name = i11601[0]
  i11600.defaultWeight = i11601[1]
  i11600.blendingMode = i11601[2]
  i11600.avatarMask = i11601[3]
  i11600.syncedLayerIndex = i11601[4]
  i11600.syncedLayerAffectsTiming = !!i11601[5]
  i11600.syncedLayers = i11601[6]
  i11600.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11601[7], i11600.stateMachine)
  return i11600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i11602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i11603 = data
  i11602.id = i11603[0]
  i11602.name = i11603[1]
  i11602.path = i11603[2]
  var i11605 = i11603[3]
  var i11604 = []
  for(var i = 0; i < i11605.length; i += 1) {
    i11604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i11605[i + 0]) );
  }
  i11602.states = i11604
  var i11607 = i11603[4]
  var i11606 = []
  for(var i = 0; i < i11607.length; i += 1) {
    i11606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11607[i + 0]) );
  }
  i11602.machines = i11606
  var i11609 = i11603[5]
  var i11608 = []
  for(var i = 0; i < i11609.length; i += 1) {
    i11608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11609[i + 0]) );
  }
  i11602.entryStateTransitions = i11608
  var i11611 = i11603[6]
  var i11610 = []
  for(var i = 0; i < i11611.length; i += 1) {
    i11610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11611[i + 0]) );
  }
  i11602.exitStateTransitions = i11610
  var i11613 = i11603[7]
  var i11612 = []
  for(var i = 0; i < i11613.length; i += 1) {
    i11612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11613[i + 0]) );
  }
  i11602.anyStateTransitions = i11612
  i11602.defaultStateId = i11603[8]
  return i11602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i11616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i11617 = data
  i11616.id = i11617[0]
  i11616.name = i11617[1]
  i11616.cycleOffset = i11617[2]
  i11616.cycleOffsetParameter = i11617[3]
  i11616.cycleOffsetParameterActive = !!i11617[4]
  i11616.mirror = !!i11617[5]
  i11616.mirrorParameter = i11617[6]
  i11616.mirrorParameterActive = !!i11617[7]
  i11616.motionId = i11617[8]
  i11616.nameHash = i11617[9]
  i11616.fullPathHash = i11617[10]
  i11616.speed = i11617[11]
  i11616.speedParameter = i11617[12]
  i11616.speedParameterActive = !!i11617[13]
  i11616.tag = i11617[14]
  i11616.tagHash = i11617[15]
  i11616.writeDefaultValues = !!i11617[16]
  var i11619 = i11617[17]
  var i11618 = []
  for(var i = 0; i < i11619.length; i += 2) {
  request.r(i11619[i + 0], i11619[i + 1], 2, i11618, '')
  }
  i11616.behaviours = i11618
  var i11621 = i11617[18]
  var i11620 = []
  for(var i = 0; i < i11621.length; i += 1) {
    i11620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11621[i + 0]) );
  }
  i11616.transitions = i11620
  return i11616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i11626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i11627 = data
  i11626.fullPath = i11627[0]
  i11626.canTransitionToSelf = !!i11627[1]
  i11626.duration = i11627[2]
  i11626.exitTime = i11627[3]
  i11626.hasExitTime = !!i11627[4]
  i11626.hasFixedDuration = !!i11627[5]
  i11626.interruptionSource = i11627[6]
  i11626.offset = i11627[7]
  i11626.orderedInterruption = !!i11627[8]
  i11626.destinationStateId = i11627[9]
  i11626.isExit = !!i11627[10]
  i11626.mute = !!i11627[11]
  i11626.solo = !!i11627[12]
  var i11629 = i11627[13]
  var i11628 = []
  for(var i = 0; i < i11629.length; i += 1) {
    i11628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11629[i + 0]) );
  }
  i11626.conditions = i11628
  return i11626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i11632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i11633 = data
  i11632.mode = i11633[0]
  i11632.parameter = i11633[1]
  i11632.threshold = i11633[2]
  return i11632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i11638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i11639 = data
  i11638.destinationStateId = i11639[0]
  i11638.isExit = !!i11639[1]
  i11638.mute = !!i11639[2]
  i11638.solo = !!i11639[3]
  var i11641 = i11639[4]
  var i11640 = []
  for(var i = 0; i < i11641.length; i += 1) {
    i11640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11641[i + 0]) );
  }
  i11638.conditions = i11640
  return i11638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i11644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i11645 = data
  i11644.defaultBool = !!i11645[0]
  i11644.defaultFloat = i11645[1]
  i11644.defaultInt = i11645[2]
  i11644.name = i11645[3]
  i11644.nameHash = i11645[4]
  i11644.type = i11645[5]
  return i11644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i11646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i11647 = data
  i11646.name = i11647[0]
  request.r(i11647[1], i11647[2], 0, i11646, '_runtimeAnimatorController')
  var i11649 = i11647[3]
  var i11648 = []
  for(var i = 0; i < i11649.length; i += 2) {
  request.r(i11649[i + 0], i11649[i + 1], 2, i11648, '')
  }
  i11646._originalAnimationClips = i11648
  var i11651 = i11647[4]
  var i11650 = []
  for(var i = 0; i < i11651.length; i += 2) {
  request.r(i11651[i + 0], i11651[i + 1], 2, i11650, '')
  }
  i11646._overrideAnimationClips = i11650
  var i11653 = i11647[5]
  var i11652 = []
  for(var i = 0; i < i11653.length; i += 2) {
  request.r(i11653[i + 0], i11653[i + 1], 2, i11652, '')
  }
  i11646._animationClips = i11652
  var i11655 = i11647[6]
  var i11654 = []
  for(var i = 0; i < i11655.length; i += 1) {
    i11654.push( request.d('UnityEngine.AnimationClipPair', i11655[i + 0]) );
  }
  i11646._animationClipPairs = i11654
  return i11646
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i11660 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i11661 = data
  request.r(i11661[0], i11661[1], 0, i11660, 'originalClip')
  request.r(i11661[2], i11661[3], 0, i11660, 'overrideClip')
  return i11660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i11662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i11663 = data
  i11662.name = i11663[0]
  i11662.bytes64 = i11663[1]
  i11662.data = i11663[2]
  return i11662
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i11664 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i11665 = data
  i11664.normalStyle = i11665[0]
  i11664.normalSpacingOffset = i11665[1]
  i11664.boldStyle = i11665[2]
  i11664.boldSpacing = i11665[3]
  i11664.italicStyle = i11665[4]
  i11664.tabSize = i11665[5]
  request.r(i11665[6], i11665[7], 0, i11664, 'atlas')
  i11664.m_SourceFontFileGUID = i11665[8]
  i11664.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i11665[9], i11664.m_CreationSettings)
  request.r(i11665[10], i11665[11], 0, i11664, 'm_SourceFontFile')
  i11664.m_SourceFontFilePath = i11665[12]
  i11664.m_AtlasPopulationMode = i11665[13]
  i11664.InternalDynamicOS = !!i11665[14]
  var i11667 = i11665[15]
  var i11666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i11667.length; i += 1) {
    i11666.add(request.d('UnityEngine.TextCore.Glyph', i11667[i + 0]));
  }
  i11664.m_GlyphTable = i11666
  var i11669 = i11665[16]
  var i11668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i11669.length; i += 1) {
    i11668.add(request.d('TMPro.TMP_Character', i11669[i + 0]));
  }
  i11664.m_CharacterTable = i11668
  var i11671 = i11665[17]
  var i11670 = []
  for(var i = 0; i < i11671.length; i += 2) {
  request.r(i11671[i + 0], i11671[i + 1], 2, i11670, '')
  }
  i11664.m_AtlasTextures = i11670
  i11664.m_AtlasTextureIndex = i11665[18]
  i11664.m_IsMultiAtlasTexturesEnabled = !!i11665[19]
  i11664.m_GetFontFeatures = !!i11665[20]
  i11664.m_ClearDynamicDataOnBuild = !!i11665[21]
  i11664.m_AtlasWidth = i11665[22]
  i11664.m_AtlasHeight = i11665[23]
  i11664.m_AtlasPadding = i11665[24]
  i11664.m_AtlasRenderMode = i11665[25]
  var i11673 = i11665[26]
  var i11672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i11673.length; i += 1) {
    i11672.add(request.d('UnityEngine.TextCore.GlyphRect', i11673[i + 0]));
  }
  i11664.m_UsedGlyphRects = i11672
  var i11675 = i11665[27]
  var i11674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i11675.length; i += 1) {
    i11674.add(request.d('UnityEngine.TextCore.GlyphRect', i11675[i + 0]));
  }
  i11664.m_FreeGlyphRects = i11674
  i11664.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i11665[28], i11664.m_FontFeatureTable)
  i11664.m_ShouldReimportFontFeatures = !!i11665[29]
  var i11677 = i11665[30]
  var i11676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11677.length; i += 2) {
  request.r(i11677[i + 0], i11677[i + 1], 1, i11676, '')
  }
  i11664.m_FallbackFontAssetTable = i11676
  var i11679 = i11665[31]
  var i11678 = []
  for(var i = 0; i < i11679.length; i += 1) {
    i11678.push( request.d('TMPro.TMP_FontWeightPair', i11679[i + 0]) );
  }
  i11664.m_FontWeightTable = i11678
  var i11681 = i11665[32]
  var i11680 = []
  for(var i = 0; i < i11681.length; i += 1) {
    i11680.push( request.d('TMPro.TMP_FontWeightPair', i11681[i + 0]) );
  }
  i11664.fontWeights = i11680
  i11664.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i11665[33], i11664.m_fontInfo)
  var i11683 = i11665[34]
  var i11682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i11683.length; i += 1) {
    i11682.add(request.d('TMPro.TMP_Glyph', i11683[i + 0]));
  }
  i11664.m_glyphInfoList = i11682
  i11664.m_KerningTable = request.d('TMPro.KerningTable', i11665[35], i11664.m_KerningTable)
  var i11685 = i11665[36]
  var i11684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11685.length; i += 2) {
  request.r(i11685[i + 0], i11685[i + 1], 1, i11684, '')
  }
  i11664.fallbackFontAssets = i11684
  i11664.m_Version = i11665[37]
  i11664.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11665[38], i11664.m_FaceInfo)
  request.r(i11665[39], i11665[40], 0, i11664, 'm_Material')
  return i11664
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i11686 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i11687 = data
  i11686.sourceFontFileName = i11687[0]
  i11686.sourceFontFileGUID = i11687[1]
  i11686.faceIndex = i11687[2]
  i11686.pointSizeSamplingMode = i11687[3]
  i11686.pointSize = i11687[4]
  i11686.padding = i11687[5]
  i11686.paddingMode = i11687[6]
  i11686.packingMode = i11687[7]
  i11686.atlasWidth = i11687[8]
  i11686.atlasHeight = i11687[9]
  i11686.characterSetSelectionMode = i11687[10]
  i11686.characterSequence = i11687[11]
  i11686.referencedFontAssetGUID = i11687[12]
  i11686.referencedTextAssetGUID = i11687[13]
  i11686.fontStyle = i11687[14]
  i11686.fontStyleModifier = i11687[15]
  i11686.renderMode = i11687[16]
  i11686.includeFontFeatures = !!i11687[17]
  return i11686
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i11690 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i11691 = data
  i11690.m_Index = i11691[0]
  i11690.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11691[1], i11690.m_Metrics)
  i11690.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11691[2], i11690.m_GlyphRect)
  i11690.m_Scale = i11691[3]
  i11690.m_AtlasIndex = i11691[4]
  i11690.m_ClassDefinitionType = i11691[5]
  return i11690
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i11692 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i11693 = data
  i11692.m_Width = i11693[0]
  i11692.m_Height = i11693[1]
  i11692.m_HorizontalBearingX = i11693[2]
  i11692.m_HorizontalBearingY = i11693[3]
  i11692.m_HorizontalAdvance = i11693[4]
  return i11692
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i11694 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i11695 = data
  i11694.m_X = i11695[0]
  i11694.m_Y = i11695[1]
  i11694.m_Width = i11695[2]
  i11694.m_Height = i11695[3]
  return i11694
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i11698 = root || request.c( 'TMPro.TMP_Character' )
  var i11699 = data
  i11698.m_ElementType = i11699[0]
  i11698.m_Unicode = i11699[1]
  i11698.m_GlyphIndex = i11699[2]
  i11698.m_Scale = i11699[3]
  return i11698
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i11704 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i11705 = data
  var i11707 = i11705[0]
  var i11706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i11707.length; i += 1) {
    i11706.add(request.d('TMPro.MultipleSubstitutionRecord', i11707[i + 0]));
  }
  i11704.m_MultipleSubstitutionRecords = i11706
  var i11709 = i11705[1]
  var i11708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i11709.length; i += 1) {
    i11708.add(request.d('TMPro.LigatureSubstitutionRecord', i11709[i + 0]));
  }
  i11704.m_LigatureSubstitutionRecords = i11708
  var i11711 = i11705[2]
  var i11710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i11711.length; i += 1) {
    i11710.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i11711[i + 0]));
  }
  i11704.m_GlyphPairAdjustmentRecords = i11710
  var i11713 = i11705[3]
  var i11712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i11713.length; i += 1) {
    i11712.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i11713[i + 0]));
  }
  i11704.m_MarkToBaseAdjustmentRecords = i11712
  var i11715 = i11705[4]
  var i11714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i11715.length; i += 1) {
    i11714.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i11715[i + 0]));
  }
  i11704.m_MarkToMarkAdjustmentRecords = i11714
  return i11704
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i11718 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i11719 = data
  i11718.m_TargetGlyphID = i11719[0]
  i11718.m_SubstituteGlyphIDs = i11719[1]
  return i11718
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i11722 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i11723 = data
  i11722.m_ComponentGlyphIDs = i11723[0]
  i11722.m_LigatureGlyphID = i11723[1]
  return i11722
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i11726 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i11727 = data
  i11726.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i11727[0], i11726.m_FirstAdjustmentRecord)
  i11726.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i11727[1], i11726.m_SecondAdjustmentRecord)
  i11726.m_FeatureLookupFlags = i11727[2]
  return i11726
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i11730 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i11731 = data
  i11730.m_BaseGlyphID = i11731[0]
  i11730.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i11731[1], i11730.m_BaseGlyphAnchorPoint)
  i11730.m_MarkGlyphID = i11731[2]
  i11730.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i11731[3], i11730.m_MarkPositionAdjustment)
  return i11730
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i11734 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i11735 = data
  i11734.m_BaseMarkGlyphID = i11735[0]
  i11734.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i11735[1], i11734.m_BaseMarkGlyphAnchorPoint)
  i11734.m_CombiningMarkGlyphID = i11735[2]
  i11734.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i11735[3], i11734.m_CombiningMarkPositionAdjustment)
  return i11734
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i11740 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i11741 = data
  request.r(i11741[0], i11741[1], 0, i11740, 'regularTypeface')
  request.r(i11741[2], i11741[3], 0, i11740, 'italicTypeface')
  return i11740
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i11742 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i11743 = data
  i11742.Name = i11743[0]
  i11742.PointSize = i11743[1]
  i11742.Scale = i11743[2]
  i11742.CharacterCount = i11743[3]
  i11742.LineHeight = i11743[4]
  i11742.Baseline = i11743[5]
  i11742.Ascender = i11743[6]
  i11742.CapHeight = i11743[7]
  i11742.Descender = i11743[8]
  i11742.CenterLine = i11743[9]
  i11742.SuperscriptOffset = i11743[10]
  i11742.SubscriptOffset = i11743[11]
  i11742.SubSize = i11743[12]
  i11742.Underline = i11743[13]
  i11742.UnderlineThickness = i11743[14]
  i11742.strikethrough = i11743[15]
  i11742.strikethroughThickness = i11743[16]
  i11742.TabWidth = i11743[17]
  i11742.Padding = i11743[18]
  i11742.AtlasWidth = i11743[19]
  i11742.AtlasHeight = i11743[20]
  return i11742
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i11746 = root || request.c( 'TMPro.TMP_Glyph' )
  var i11747 = data
  i11746.id = i11747[0]
  i11746.x = i11747[1]
  i11746.y = i11747[2]
  i11746.width = i11747[3]
  i11746.height = i11747[4]
  i11746.xOffset = i11747[5]
  i11746.yOffset = i11747[6]
  i11746.xAdvance = i11747[7]
  i11746.scale = i11747[8]
  return i11746
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i11748 = root || request.c( 'TMPro.KerningTable' )
  var i11749 = data
  var i11751 = i11749[0]
  var i11750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i11751.length; i += 1) {
    i11750.add(request.d('TMPro.KerningPair', i11751[i + 0]));
  }
  i11748.kerningPairs = i11750
  return i11748
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i11754 = root || request.c( 'TMPro.KerningPair' )
  var i11755 = data
  i11754.xOffset = i11755[0]
  i11754.m_FirstGlyph = i11755[1]
  i11754.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i11755[2], i11754.m_FirstGlyphAdjustments)
  i11754.m_SecondGlyph = i11755[3]
  i11754.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i11755[4], i11754.m_SecondGlyphAdjustments)
  i11754.m_IgnoreSpacingAdjustments = !!i11755[5]
  return i11754
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i11756 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i11757 = data
  i11756.m_FaceIndex = i11757[0]
  i11756.m_FamilyName = i11757[1]
  i11756.m_StyleName = i11757[2]
  i11756.m_PointSize = i11757[3]
  i11756.m_Scale = i11757[4]
  i11756.m_UnitsPerEM = i11757[5]
  i11756.m_LineHeight = i11757[6]
  i11756.m_AscentLine = i11757[7]
  i11756.m_CapLine = i11757[8]
  i11756.m_MeanLine = i11757[9]
  i11756.m_Baseline = i11757[10]
  i11756.m_DescentLine = i11757[11]
  i11756.m_SuperscriptOffset = i11757[12]
  i11756.m_SuperscriptSize = i11757[13]
  i11756.m_SubscriptOffset = i11757[14]
  i11756.m_SubscriptSize = i11757[15]
  i11756.m_UnderlineOffset = i11757[16]
  i11756.m_UnderlineThickness = i11757[17]
  i11756.m_StrikethroughOffset = i11757[18]
  i11756.m_StrikethroughThickness = i11757[19]
  i11756.m_TabWidth = i11757[20]
  return i11756
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11759 = data
  i11758.useSafeMode = !!i11759[0]
  i11758.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11759[1], i11758.safeModeOptions)
  i11758.timeScale = i11759[2]
  i11758.unscaledTimeScale = i11759[3]
  i11758.useSmoothDeltaTime = !!i11759[4]
  i11758.maxSmoothUnscaledTime = i11759[5]
  i11758.rewindCallbackMode = i11759[6]
  i11758.showUnityEditorReport = !!i11759[7]
  i11758.logBehaviour = i11759[8]
  i11758.drawGizmos = !!i11759[9]
  i11758.defaultRecyclable = !!i11759[10]
  i11758.defaultAutoPlay = i11759[11]
  i11758.defaultUpdateType = i11759[12]
  i11758.defaultTimeScaleIndependent = !!i11759[13]
  i11758.defaultEaseType = i11759[14]
  i11758.defaultEaseOvershootOrAmplitude = i11759[15]
  i11758.defaultEasePeriod = i11759[16]
  i11758.defaultAutoKill = !!i11759[17]
  i11758.defaultLoopType = i11759[18]
  i11758.debugMode = !!i11759[19]
  i11758.debugStoreTargetId = !!i11759[20]
  i11758.showPreviewPanel = !!i11759[21]
  i11758.storeSettingsLocation = i11759[22]
  i11758.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11759[23], i11758.modules)
  i11758.createASMDEF = !!i11759[24]
  i11758.showPlayingTweens = !!i11759[25]
  i11758.showPausedTweens = !!i11759[26]
  return i11758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11761 = data
  i11760.logBehaviour = i11761[0]
  i11760.nestedTweenFailureBehaviour = i11761[1]
  return i11760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11763 = data
  i11762.showPanel = !!i11763[0]
  i11762.audioEnabled = !!i11763[1]
  i11762.physicsEnabled = !!i11763[2]
  i11762.physics2DEnabled = !!i11763[3]
  i11762.spriteEnabled = !!i11763[4]
  i11762.uiEnabled = !!i11763[5]
  i11762.textMeshProEnabled = !!i11763[6]
  i11762.tk2DEnabled = !!i11763[7]
  i11762.deAudioEnabled = !!i11763[8]
  i11762.deUnityExtendedEnabled = !!i11763[9]
  i11762.epoOutlineEnabled = !!i11763[10]
  return i11762
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i11764 = root || request.c( 'TMPro.TMP_Settings' )
  var i11765 = data
  i11764.assetVersion = i11765[0]
  i11764.m_TextWrappingMode = i11765[1]
  i11764.m_enableKerning = !!i11765[2]
  var i11767 = i11765[3]
  var i11766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i11767.length; i += 1) {
    i11766.add(i11767[i + 0]);
  }
  i11764.m_ActiveFontFeatures = i11766
  i11764.m_enableExtraPadding = !!i11765[4]
  i11764.m_enableTintAllSprites = !!i11765[5]
  i11764.m_enableParseEscapeCharacters = !!i11765[6]
  i11764.m_EnableRaycastTarget = !!i11765[7]
  i11764.m_GetFontFeaturesAtRuntime = !!i11765[8]
  i11764.m_missingGlyphCharacter = i11765[9]
  i11764.m_ClearDynamicDataOnBuild = !!i11765[10]
  i11764.m_warningsDisabled = !!i11765[11]
  request.r(i11765[12], i11765[13], 0, i11764, 'm_defaultFontAsset')
  i11764.m_defaultFontAssetPath = i11765[14]
  i11764.m_defaultFontSize = i11765[15]
  i11764.m_defaultAutoSizeMinRatio = i11765[16]
  i11764.m_defaultAutoSizeMaxRatio = i11765[17]
  i11764.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i11765[18], i11765[19] )
  i11764.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i11765[20], i11765[21] )
  i11764.m_autoSizeTextContainer = !!i11765[22]
  i11764.m_IsTextObjectScaleStatic = !!i11765[23]
  var i11769 = i11765[24]
  var i11768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11769.length; i += 2) {
  request.r(i11769[i + 0], i11769[i + 1], 1, i11768, '')
  }
  i11764.m_fallbackFontAssets = i11768
  i11764.m_matchMaterialPreset = !!i11765[25]
  i11764.m_HideSubTextObjects = !!i11765[26]
  request.r(i11765[27], i11765[28], 0, i11764, 'm_defaultSpriteAsset')
  i11764.m_defaultSpriteAssetPath = i11765[29]
  i11764.m_enableEmojiSupport = !!i11765[30]
  i11764.m_MissingCharacterSpriteUnicode = i11765[31]
  var i11771 = i11765[32]
  var i11770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i11771.length; i += 2) {
  request.r(i11771[i + 0], i11771[i + 1], 1, i11770, '')
  }
  i11764.m_EmojiFallbackTextAssets = i11770
  i11764.m_defaultColorGradientPresetsPath = i11765[33]
  request.r(i11765[34], i11765[35], 0, i11764, 'm_defaultStyleSheet')
  i11764.m_StyleSheetsResourcePath = i11765[36]
  request.r(i11765[37], i11765[38], 0, i11764, 'm_leadingCharacters')
  request.r(i11765[39], i11765[40], 0, i11764, 'm_followingCharacters')
  i11764.m_UseModernHangulLineBreakingRules = !!i11765[41]
  return i11764
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i11774 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i11775 = data
  request.r(i11775[0], i11775[1], 0, i11774, 'spriteSheet')
  var i11777 = i11775[2]
  var i11776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i11777.length; i += 1) {
    i11776.add(request.d('TMPro.TMP_Sprite', i11777[i + 0]));
  }
  i11774.spriteInfoList = i11776
  var i11779 = i11775[3]
  var i11778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i11779.length; i += 2) {
  request.r(i11779[i + 0], i11779[i + 1], 1, i11778, '')
  }
  i11774.fallbackSpriteAssets = i11778
  var i11781 = i11775[4]
  var i11780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i11781.length; i += 1) {
    i11780.add(request.d('TMPro.TMP_SpriteCharacter', i11781[i + 0]));
  }
  i11774.m_SpriteCharacterTable = i11780
  var i11783 = i11775[5]
  var i11782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i11783.length; i += 1) {
    i11782.add(request.d('TMPro.TMP_SpriteGlyph', i11783[i + 0]));
  }
  i11774.m_GlyphTable = i11782
  i11774.m_Version = i11775[6]
  i11774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11775[7], i11774.m_FaceInfo)
  request.r(i11775[8], i11775[9], 0, i11774, 'm_Material')
  return i11774
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i11786 = root || request.c( 'TMPro.TMP_Sprite' )
  var i11787 = data
  i11786.name = i11787[0]
  i11786.hashCode = i11787[1]
  i11786.unicode = i11787[2]
  i11786.pivot = new pc.Vec2( i11787[3], i11787[4] )
  request.r(i11787[5], i11787[6], 0, i11786, 'sprite')
  i11786.id = i11787[7]
  i11786.x = i11787[8]
  i11786.y = i11787[9]
  i11786.width = i11787[10]
  i11786.height = i11787[11]
  i11786.xOffset = i11787[12]
  i11786.yOffset = i11787[13]
  i11786.xAdvance = i11787[14]
  i11786.scale = i11787[15]
  return i11786
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i11792 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i11793 = data
  i11792.m_Name = i11793[0]
  i11792.m_ElementType = i11793[1]
  i11792.m_Unicode = i11793[2]
  i11792.m_GlyphIndex = i11793[3]
  i11792.m_Scale = i11793[4]
  return i11792
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i11796 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i11797 = data
  request.r(i11797[0], i11797[1], 0, i11796, 'sprite')
  i11796.m_Index = i11797[2]
  i11796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11797[3], i11796.m_Metrics)
  i11796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11797[4], i11796.m_GlyphRect)
  i11796.m_Scale = i11797[5]
  i11796.m_AtlasIndex = i11797[6]
  i11796.m_ClassDefinitionType = i11797[7]
  return i11796
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i11798 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i11799 = data
  var i11801 = i11799[0]
  var i11800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i11801.length; i += 1) {
    i11800.add(request.d('TMPro.TMP_Style', i11801[i + 0]));
  }
  i11798.m_StyleList = i11800
  return i11798
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i11804 = root || request.c( 'TMPro.TMP_Style' )
  var i11805 = data
  i11804.m_Name = i11805[0]
  i11804.m_HashCode = i11805[1]
  i11804.m_OpeningDefinition = i11805[2]
  i11804.m_ClosingDefinition = i11805[3]
  i11804.m_OpeningTagArray = i11805[4]
  i11804.m_ClosingTagArray = i11805[5]
  return i11804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11807 = data
  var i11809 = i11807[0]
  var i11808 = []
  for(var i = 0; i < i11809.length; i += 1) {
    i11808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11809[i + 0]) );
  }
  i11806.files = i11808
  i11806.componentToPrefabIds = i11807[1]
  return i11806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11813 = data
  i11812.path = i11813[0]
  request.r(i11813[1], i11813[2], 0, i11812, 'unityObject')
  return i11812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11815 = data
  var i11817 = i11815[0]
  var i11816 = []
  for(var i = 0; i < i11817.length; i += 1) {
    i11816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11817[i + 0]) );
  }
  i11814.scriptsExecutionOrder = i11816
  var i11819 = i11815[1]
  var i11818 = []
  for(var i = 0; i < i11819.length; i += 1) {
    i11818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11819[i + 0]) );
  }
  i11814.sortingLayers = i11818
  var i11821 = i11815[2]
  var i11820 = []
  for(var i = 0; i < i11821.length; i += 1) {
    i11820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11821[i + 0]) );
  }
  i11814.cullingLayers = i11820
  i11814.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11815[3], i11814.timeSettings)
  i11814.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11815[4], i11814.physicsSettings)
  i11814.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11815[5], i11814.physics2DSettings)
  i11814.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11815[6], i11814.qualitySettings)
  i11814.enableRealtimeShadows = !!i11815[7]
  i11814.enableAutoInstancing = !!i11815[8]
  i11814.enableStaticBatching = !!i11815[9]
  i11814.enableDynamicBatching = !!i11815[10]
  i11814.usePreservativeDynamicBatching = !!i11815[11]
  i11814.lightmapEncodingQuality = i11815[12]
  i11814.desiredColorSpace = i11815[13]
  var i11823 = i11815[14]
  var i11822 = []
  for(var i = 0; i < i11823.length; i += 1) {
    i11822.push( i11823[i + 0] );
  }
  i11814.allTags = i11822
  return i11814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11827 = data
  i11826.name = i11827[0]
  i11826.value = i11827[1]
  return i11826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11831 = data
  i11830.id = i11831[0]
  i11830.name = i11831[1]
  i11830.value = i11831[2]
  return i11830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11835 = data
  i11834.id = i11835[0]
  i11834.name = i11835[1]
  return i11834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11837 = data
  i11836.fixedDeltaTime = i11837[0]
  i11836.maximumDeltaTime = i11837[1]
  i11836.timeScale = i11837[2]
  i11836.maximumParticleTimestep = i11837[3]
  return i11836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11839 = data
  i11838.gravity = new pc.Vec3( i11839[0], i11839[1], i11839[2] )
  i11838.defaultSolverIterations = i11839[3]
  i11838.bounceThreshold = i11839[4]
  i11838.autoSyncTransforms = !!i11839[5]
  i11838.autoSimulation = !!i11839[6]
  var i11841 = i11839[7]
  var i11840 = []
  for(var i = 0; i < i11841.length; i += 1) {
    i11840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11841[i + 0]) );
  }
  i11838.collisionMatrix = i11840
  return i11838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11845 = data
  i11844.enabled = !!i11845[0]
  i11844.layerId = i11845[1]
  i11844.otherLayerId = i11845[2]
  return i11844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11847 = data
  request.r(i11847[0], i11847[1], 0, i11846, 'material')
  i11846.gravity = new pc.Vec2( i11847[2], i11847[3] )
  i11846.positionIterations = i11847[4]
  i11846.velocityIterations = i11847[5]
  i11846.velocityThreshold = i11847[6]
  i11846.maxLinearCorrection = i11847[7]
  i11846.maxAngularCorrection = i11847[8]
  i11846.maxTranslationSpeed = i11847[9]
  i11846.maxRotationSpeed = i11847[10]
  i11846.baumgarteScale = i11847[11]
  i11846.baumgarteTOIScale = i11847[12]
  i11846.timeToSleep = i11847[13]
  i11846.linearSleepTolerance = i11847[14]
  i11846.angularSleepTolerance = i11847[15]
  i11846.defaultContactOffset = i11847[16]
  i11846.autoSimulation = !!i11847[17]
  i11846.queriesHitTriggers = !!i11847[18]
  i11846.queriesStartInColliders = !!i11847[19]
  i11846.callbacksOnDisable = !!i11847[20]
  i11846.reuseCollisionCallbacks = !!i11847[21]
  i11846.autoSyncTransforms = !!i11847[22]
  var i11849 = i11847[23]
  var i11848 = []
  for(var i = 0; i < i11849.length; i += 1) {
    i11848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11849[i + 0]) );
  }
  i11846.collisionMatrix = i11848
  return i11846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11853 = data
  i11852.enabled = !!i11853[0]
  i11852.layerId = i11853[1]
  i11852.otherLayerId = i11853[2]
  return i11852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11855 = data
  var i11857 = i11855[0]
  var i11856 = []
  for(var i = 0; i < i11857.length; i += 1) {
    i11856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11857[i + 0]) );
  }
  i11854.qualityLevels = i11856
  var i11859 = i11855[1]
  var i11858 = []
  for(var i = 0; i < i11859.length; i += 1) {
    i11858.push( i11859[i + 0] );
  }
  i11854.names = i11858
  i11854.shadows = i11855[2]
  i11854.anisotropicFiltering = i11855[3]
  i11854.antiAliasing = i11855[4]
  i11854.lodBias = i11855[5]
  i11854.shadowCascades = i11855[6]
  i11854.shadowDistance = i11855[7]
  i11854.shadowmaskMode = i11855[8]
  i11854.shadowProjection = i11855[9]
  i11854.shadowResolution = i11855[10]
  i11854.softParticles = !!i11855[11]
  i11854.softVegetation = !!i11855[12]
  i11854.activeColorSpace = i11855[13]
  i11854.desiredColorSpace = i11855[14]
  i11854.masterTextureLimit = i11855[15]
  i11854.maxQueuedFrames = i11855[16]
  i11854.particleRaycastBudget = i11855[17]
  i11854.pixelLightCount = i11855[18]
  i11854.realtimeReflectionProbes = !!i11855[19]
  i11854.shadowCascade2Split = i11855[20]
  i11854.shadowCascade4Split = new pc.Vec3( i11855[21], i11855[22], i11855[23] )
  i11854.streamingMipmapsActive = !!i11855[24]
  i11854.vSyncCount = i11855[25]
  i11854.asyncUploadBufferSize = i11855[26]
  i11854.asyncUploadTimeSlice = i11855[27]
  i11854.billboardsFaceCameraPosition = !!i11855[28]
  i11854.shadowNearPlaneOffset = i11855[29]
  i11854.streamingMipmapsMemoryBudget = i11855[30]
  i11854.maximumLODLevel = i11855[31]
  i11854.streamingMipmapsAddAllCameras = !!i11855[32]
  i11854.streamingMipmapsMaxLevelReduction = i11855[33]
  i11854.streamingMipmapsRenderersPerFrame = i11855[34]
  i11854.resolutionScalingFixedDPIFactor = i11855[35]
  i11854.streamingMipmapsMaxFileIORequests = i11855[36]
  i11854.currentQualityLevel = i11855[37]
  return i11854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i11862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i11863 = data
  i11862.name = i11863[0]
  var i11865 = i11863[1]
  var i11864 = []
  for(var i = 0; i < i11865.length; i += 1) {
    i11864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i11865[i + 0]) );
  }
  i11862.tos = i11864
  var i11867 = i11863[2]
  var i11866 = []
  for(var i = 0; i < i11867.length; i += 1) {
    i11866.push( i11867[i + 0] );
  }
  i11862.constant = i11866
  i11862.isValid = !!i11863[3]
  i11862.isHuman = !!i11863[4]
  i11862.hasRootMotion = !!i11863[5]
  return i11862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i11870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i11871 = data
  i11870.hash = i11871[0]
  i11870.path = i11871[1]
  return i11870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11875 = data
  i11874.weight = i11875[0]
  i11874.vertices = i11875[1]
  i11874.normals = i11875[2]
  i11874.tangents = i11875[3]
  return i11874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i11876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i11877 = data
  request.r(i11877[0], i11877[1], 0, i11876, 'm_ObjectArgument')
  i11876.m_ObjectArgumentAssemblyTypeName = i11877[2]
  i11876.m_IntArgument = i11877[3]
  i11876.m_FloatArgument = i11877[4]
  i11876.m_StringArgument = i11877[5]
  i11876.m_BoolArgument = !!i11877[6]
  return i11876
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i11878 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i11879 = data
  i11878.m_GlyphIndex = i11879[0]
  i11878.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i11879[1], i11878.m_GlyphValueRecord)
  return i11878
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i11880 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i11881 = data
  i11880.m_XCoordinate = i11881[0]
  i11880.m_YCoordinate = i11881[1]
  return i11880
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i11882 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i11883 = data
  i11882.m_XPositionAdjustment = i11883[0]
  i11882.m_YPositionAdjustment = i11883[1]
  return i11882
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i11884 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i11885 = data
  i11884.xPlacement = i11885[0]
  i11884.yPlacement = i11885[1]
  i11884.xAdvance = i11885[2]
  i11884.yAdvance = i11885[3]
  return i11884
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i11886 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i11887 = data
  i11886.m_XPlacement = i11887[0]
  i11886.m_YPlacement = i11887[1]
  i11886.m_XAdvance = i11887[2]
  i11886.m_YAdvance = i11887[3]
  return i11886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[45],"78":[50],"79":[32],"80":[32],"81":[32],"82":[32],"83":[32],"84":[32],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[50],"100":[42],"101":[102],"103":[102],"7":[6],"104":[8],"105":[6],"106":[42,6],"20":[6,12],"107":[6],"108":[12,6],"109":[42],"110":[12,6],"111":[6],"112":[113],"114":[113],"115":[113],"116":[6],"117":[6],"9":[7],"13":[12,6],"24":[6],"8":[7],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"124":[6],"23":[6],"125":[6],"126":[12,6],"127":[6],"128":[6],"129":[6],"130":[6],"131":[12,6],"132":[6],"133":[4],"134":[4],"5":[4],"135":[4],"136":[50],"137":[50]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Mask","UnityEngine.UI.AspectRatioFitter","SelectPanel","UnityEngine.GameObject","UnityEngine.BoxCollider","CharacterMotor","CharacterInput","UnityEngine.Transform","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.SpriteRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","Gift","AudioController","LunaController","UnityEngine.LineRenderer","SoundHint","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Light","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Playable.ResponsiveCanvasScaler","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "6.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V03_HoaiTT_HuyNQ";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1663";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4750";

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

Deserializers.buildID = "bcfd22ba-9dcd-426c-a3e1-cfeca256cfd4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

