var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.JointSpring' )
  var i2209 = data
  i2208.spring = i2209[0]
  i2208.damper = i2209[1]
  i2208.targetPosition = i2209[2]
  return i2208
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointMotor' )
  var i2211 = data
  i2210.m_TargetVelocity = i2211[0]
  i2210.m_Force = i2211[1]
  i2210.m_FreeSpin = i2211[2]
  return i2210
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.JointLimits' )
  var i2213 = data
  i2212.m_Min = i2213[0]
  i2212.m_Max = i2213[1]
  i2212.m_Bounciness = i2213[2]
  i2212.m_BounceMinVelocity = i2213[3]
  i2212.m_ContactDistance = i2213[4]
  i2212.minBounce = i2213[5]
  i2212.maxBounce = i2213[6]
  return i2212
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.JointDrive' )
  var i2215 = data
  i2214.m_PositionSpring = i2215[0]
  i2214.m_PositionDamper = i2215[1]
  i2214.m_MaximumForce = i2215[2]
  i2214.m_UseAcceleration = i2215[3]
  return i2214
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2217 = data
  i2216.m_Spring = i2217[0]
  i2216.m_Damper = i2217[1]
  return i2216
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2219 = data
  i2218.m_Limit = i2219[0]
  i2218.m_Bounciness = i2219[1]
  i2218.m_ContactDistance = i2219[2]
  return i2218
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2221 = data
  i2220.m_ExtremumSlip = i2221[0]
  i2220.m_ExtremumValue = i2221[1]
  i2220.m_AsymptoteSlip = i2221[2]
  i2220.m_AsymptoteValue = i2221[3]
  i2220.m_Stiffness = i2221[4]
  return i2220
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2223 = data
  i2222.m_LowerAngle = i2223[0]
  i2222.m_UpperAngle = i2223[1]
  return i2222
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2225 = data
  i2224.m_MotorSpeed = i2225[0]
  i2224.m_MaximumMotorTorque = i2225[1]
  return i2224
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2227 = data
  i2226.m_DampingRatio = i2227[0]
  i2226.m_Frequency = i2227[1]
  i2226.m_Angle = i2227[2]
  return i2226
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2229 = data
  i2228.m_LowerTranslation = i2229[0]
  i2228.m_UpperTranslation = i2229[1]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.width = i2231[1]
  i2230.height = i2231[2]
  i2230.mipmapCount = i2231[3]
  i2230.anisoLevel = i2231[4]
  i2230.filterMode = i2231[5]
  i2230.hdr = !!i2231[6]
  i2230.format = i2231[7]
  i2230.wrapMode = i2231[8]
  i2230.alphaIsTransparency = !!i2231[9]
  i2230.alphaSource = i2231[10]
  i2230.graphicsFormat = i2231[11]
  i2230.sRGBTexture = !!i2231[12]
  i2230.desiredColorSpace = i2231[13]
  i2230.wrapU = i2231[14]
  i2230.wrapV = i2231[15]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2232 = root || new pc.UnityMaterial()
  var i2233 = data
  i2232.name = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'shader')
  i2232.renderQueue = i2233[3]
  i2232.enableInstancing = !!i2233[4]
  var i2235 = i2233[5]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2235[i + 0]) );
  }
  i2232.floatParameters = i2234
  var i2237 = i2233[6]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2237[i + 0]) );
  }
  i2232.colorParameters = i2236
  var i2239 = i2233[7]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2239[i + 0]) );
  }
  i2232.vectorParameters = i2238
  var i2241 = i2233[8]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2241[i + 0]) );
  }
  i2232.textureParameters = i2240
  var i2243 = i2233[9]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2243[i + 0]) );
  }
  i2232.materialFlags = i2242
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2247 = data
  i2246.name = i2247[0]
  i2246.value = i2247[1]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.value = new pc.Color(i2251[1], i2251[2], i2251[3], i2251[4])
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2255 = data
  i2254.name = i2255[0]
  i2254.value = new pc.Vec4( i2255[1], i2255[2], i2255[3], i2255[4] )
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2259 = data
  i2258.name = i2259[0]
  request.r(i2259[1], i2259[2], 0, i2258, 'value')
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.enabled = !!i2263[1]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.halfPrecision = !!i2265[1]
  i2264.useSimplification = !!i2265[2]
  i2264.useUInt32IndexFormat = !!i2265[3]
  i2264.vertexCount = i2265[4]
  i2264.aabb = i2265[5]
  var i2267 = i2265[6]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( !!i2267[i + 0] );
  }
  i2264.streams = i2266
  i2264.vertices = i2265[7]
  var i2269 = i2265[8]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2269[i + 0]) );
  }
  i2264.subMeshes = i2268
  var i2271 = i2265[9]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 16) {
    i2270.push( new pc.Mat4().setData(i2271[i + 0], i2271[i + 1], i2271[i + 2], i2271[i + 3],  i2271[i + 4], i2271[i + 5], i2271[i + 6], i2271[i + 7],  i2271[i + 8], i2271[i + 9], i2271[i + 10], i2271[i + 11],  i2271[i + 12], i2271[i + 13], i2271[i + 14], i2271[i + 15]) );
  }
  i2264.bindposes = i2270
  var i2273 = i2265[10]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2273[i + 0]) );
  }
  i2264.blendShapes = i2272
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2279 = data
  i2278.triangles = i2279[0]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2285 = data
  i2284.name = i2285[0]
  var i2287 = i2285[1]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2287[i + 0]) );
  }
  i2284.frames = i2286
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.atlasId = i2289[1]
  i2288.mipmapCount = i2289[2]
  i2288.hdr = !!i2289[3]
  i2288.size = i2289[4]
  i2288.anisoLevel = i2289[5]
  i2288.filterMode = i2289[6]
  var i2291 = i2289[7]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 4) {
    i2290.push( UnityEngine.Rect.MinMaxRect(i2291[i + 0], i2291[i + 1], i2291[i + 2], i2291[i + 3]) );
  }
  i2288.rects = i2290
  i2288.wrapU = i2289[8]
  i2288.wrapV = i2289[9]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.index = i2295[1]
  i2294.startup = !!i2295[2]
  return i2294
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'm_FirstSelected')
  i2296.m_sendNavigationEvents = !!i2297[2]
  i2296.m_DragThreshold = i2297[3]
  return i2296
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2299 = data
  i2298.m_HorizontalAxis = i2299[0]
  i2298.m_VerticalAxis = i2299[1]
  i2298.m_SubmitButton = i2299[2]
  i2298.m_CancelButton = i2299[3]
  i2298.m_InputActionsPerSecond = i2299[4]
  i2298.m_RepeatDelay = i2299[5]
  i2298.m_ForceModuleActive = !!i2299[6]
  i2298.m_SendPointerHoverToParent = !!i2299[7]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2301 = data
  i2300.name = i2301[0]
  i2300.tagId = i2301[1]
  i2300.enabled = !!i2301[2]
  i2300.isStatic = !!i2301[3]
  i2300.layer = i2301[4]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2303 = data
  i2302.pivot = new pc.Vec2( i2303[0], i2303[1] )
  i2302.anchorMin = new pc.Vec2( i2303[2], i2303[3] )
  i2302.anchorMax = new pc.Vec2( i2303[4], i2303[5] )
  i2302.sizeDelta = new pc.Vec2( i2303[6], i2303[7] )
  i2302.anchoredPosition3D = new pc.Vec3( i2303[8], i2303[9], i2303[10] )
  i2302.rotation = new pc.Quat(i2303[11], i2303[12], i2303[13], i2303[14])
  i2302.scale = new pc.Vec3( i2303[15], i2303[16], i2303[17] )
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2305 = data
  i2304.planeDistance = i2305[0]
  i2304.referencePixelsPerUnit = i2305[1]
  i2304.isFallbackOverlay = !!i2305[2]
  i2304.renderMode = i2305[3]
  i2304.renderOrder = i2305[4]
  i2304.sortingLayerName = i2305[5]
  i2304.sortingOrder = i2305[6]
  i2304.scaleFactor = i2305[7]
  request.r(i2305[8], i2305[9], 0, i2304, 'worldCamera')
  i2304.overrideSorting = !!i2305[10]
  i2304.pixelPerfect = !!i2305[11]
  i2304.targetDisplay = i2305[12]
  i2304.overridePixelPerfect = !!i2305[13]
  i2304.enabled = !!i2305[14]
  return i2304
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2307 = data
  i2306.m_UiScaleMode = i2307[0]
  i2306.m_ReferencePixelsPerUnit = i2307[1]
  i2306.m_ScaleFactor = i2307[2]
  i2306.m_ReferenceResolution = new pc.Vec2( i2307[3], i2307[4] )
  i2306.m_ScreenMatchMode = i2307[5]
  i2306.m_MatchWidthOrHeight = i2307[6]
  i2306.m_PhysicalUnit = i2307[7]
  i2306.m_FallbackScreenDPI = i2307[8]
  i2306.m_DefaultSpriteDPI = i2307[9]
  i2306.m_DynamicPixelsPerUnit = i2307[10]
  i2306.m_PresetInfoIsWorld = !!i2307[11]
  return i2306
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2309 = data
  i2308.m_IgnoreReversedGraphics = !!i2309[0]
  i2308.m_BlockingObjects = i2309[1]
  i2308.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2309[2] )
  return i2308
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2310 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2311 = data
  i2310._referenceResolution = new pc.Vec2( i2311[0], i2311[1] )
  i2310._portraitMatch = i2311[2]
  i2310._landscapeMatch = i2311[3]
  i2310._squareMatch = i2311[4]
  i2310._portraitAspectThreshold = i2311[5]
  i2310._landscapeAspectThreshold = i2311[6]
  i2310._aspectEpsilon = i2311[7]
  return i2310
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2312 = root || request.c( 'Joystick' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'background')
  request.r(i2313[2], i2313[3], 0, i2312, 'joy')
  i2312.deadZone = i2313[4]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2315 = data
  i2314.cullTransparentMesh = !!i2315[0]
  return i2314
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.Image' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_Sprite')
  i2316.m_Type = i2317[2]
  i2316.m_PreserveAspect = !!i2317[3]
  i2316.m_FillCenter = !!i2317[4]
  i2316.m_FillMethod = i2317[5]
  i2316.m_FillAmount = i2317[6]
  i2316.m_FillClockwise = !!i2317[7]
  i2316.m_FillOrigin = i2317[8]
  i2316.m_UseSpriteMesh = !!i2317[9]
  i2316.m_PixelsPerUnitMultiplier = i2317[10]
  request.r(i2317[11], i2317[12], 0, i2316, 'm_Material')
  i2316.m_Maskable = !!i2317[13]
  i2316.m_Color = new pc.Color(i2317[14], i2317[15], i2317[16], i2317[17])
  i2316.m_RaycastTarget = !!i2317[18]
  i2316.m_RaycastPadding = new pc.Vec4( i2317[19], i2317[20], i2317[21], i2317[22] )
  return i2316
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.Button' )
  var i2319 = data
  i2318.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2319[0], i2318.m_OnClick)
  i2318.m_Navigation = request.d('UnityEngine.UI.Navigation', i2319[1], i2318.m_Navigation)
  i2318.m_Transition = i2319[2]
  i2318.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2319[3], i2318.m_Colors)
  i2318.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2319[4], i2318.m_SpriteState)
  i2318.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2319[5], i2318.m_AnimationTriggers)
  i2318.m_Interactable = !!i2319[6]
  request.r(i2319[7], i2319[8], 0, i2318, 'm_TargetGraphic')
  return i2318
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2321 = data
  i2320.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2321[0], i2320.m_PersistentCalls)
  return i2320
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2323 = data
  var i2325 = i2323[0]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(request.d('UnityEngine.Events.PersistentCall', i2325[i + 0]));
  }
  i2322.m_Calls = i2324
  return i2322
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_Target')
  i2328.m_TargetAssemblyTypeName = i2329[2]
  i2328.m_MethodName = i2329[3]
  i2328.m_Mode = i2329[4]
  i2328.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2329[5], i2328.m_Arguments)
  i2328.m_CallState = i2329[6]
  return i2328
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2331 = data
  i2330.m_Mode = i2331[0]
  i2330.m_WrapAround = !!i2331[1]
  request.r(i2331[2], i2331[3], 0, i2330, 'm_SelectOnUp')
  request.r(i2331[4], i2331[5], 0, i2330, 'm_SelectOnDown')
  request.r(i2331[6], i2331[7], 0, i2330, 'm_SelectOnLeft')
  request.r(i2331[8], i2331[9], 0, i2330, 'm_SelectOnRight')
  return i2330
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2333 = data
  i2332.m_NormalColor = new pc.Color(i2333[0], i2333[1], i2333[2], i2333[3])
  i2332.m_HighlightedColor = new pc.Color(i2333[4], i2333[5], i2333[6], i2333[7])
  i2332.m_PressedColor = new pc.Color(i2333[8], i2333[9], i2333[10], i2333[11])
  i2332.m_SelectedColor = new pc.Color(i2333[12], i2333[13], i2333[14], i2333[15])
  i2332.m_DisabledColor = new pc.Color(i2333[16], i2333[17], i2333[18], i2333[19])
  i2332.m_ColorMultiplier = i2333[20]
  i2332.m_FadeDuration = i2333[21]
  return i2332
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'm_HighlightedSprite')
  request.r(i2335[2], i2335[3], 0, i2334, 'm_PressedSprite')
  request.r(i2335[4], i2335[5], 0, i2334, 'm_SelectedSprite')
  request.r(i2335[6], i2335[7], 0, i2334, 'm_DisabledSprite')
  return i2334
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2337 = data
  i2336.m_NormalTrigger = i2337[0]
  i2336.m_HighlightedTrigger = i2337[1]
  i2336.m_PressedTrigger = i2337[2]
  i2336.m_SelectedTrigger = i2337[3]
  i2336.m_DisabledTrigger = i2337[4]
  return i2336
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2338 = root || request.c( 'JumpButton' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'button')
  return i2338
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2341 = data
  i2340.m_ShowMaskGraphic = !!i2341[0]
  return i2340
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2343 = data
  i2342.m_hasFontAssetChanged = !!i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'm_baseMaterial')
  i2342.m_maskOffset = new pc.Vec4( i2343[3], i2343[4], i2343[5], i2343[6] )
  i2342.m_text = i2343[7]
  i2342.m_isRightToLeft = !!i2343[8]
  request.r(i2343[9], i2343[10], 0, i2342, 'm_fontAsset')
  request.r(i2343[11], i2343[12], 0, i2342, 'm_sharedMaterial')
  var i2345 = i2343[13]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 2, i2344, '')
  }
  i2342.m_fontSharedMaterials = i2344
  request.r(i2343[14], i2343[15], 0, i2342, 'm_fontMaterial')
  var i2347 = i2343[16]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 2) {
  request.r(i2347[i + 0], i2347[i + 1], 2, i2346, '')
  }
  i2342.m_fontMaterials = i2346
  i2342.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2343[17], i2343[18], i2343[19], i2343[20])
  i2342.m_fontColor = new pc.Color(i2343[21], i2343[22], i2343[23], i2343[24])
  i2342.m_enableVertexGradient = !!i2343[25]
  i2342.m_colorMode = i2343[26]
  i2342.m_fontColorGradient = request.d('TMPro.VertexGradient', i2343[27], i2342.m_fontColorGradient)
  request.r(i2343[28], i2343[29], 0, i2342, 'm_fontColorGradientPreset')
  request.r(i2343[30], i2343[31], 0, i2342, 'm_spriteAsset')
  i2342.m_tintAllSprites = !!i2343[32]
  request.r(i2343[33], i2343[34], 0, i2342, 'm_StyleSheet')
  i2342.m_TextStyleHashCode = i2343[35]
  i2342.m_overrideHtmlColors = !!i2343[36]
  i2342.m_faceColor = UnityEngine.Color32.ConstructColor(i2343[37], i2343[38], i2343[39], i2343[40])
  i2342.m_fontSize = i2343[41]
  i2342.m_fontSizeBase = i2343[42]
  i2342.m_fontWeight = i2343[43]
  i2342.m_enableAutoSizing = !!i2343[44]
  i2342.m_fontSizeMin = i2343[45]
  i2342.m_fontSizeMax = i2343[46]
  i2342.m_fontStyle = i2343[47]
  i2342.m_HorizontalAlignment = i2343[48]
  i2342.m_VerticalAlignment = i2343[49]
  i2342.m_textAlignment = i2343[50]
  i2342.m_characterSpacing = i2343[51]
  i2342.m_wordSpacing = i2343[52]
  i2342.m_lineSpacing = i2343[53]
  i2342.m_lineSpacingMax = i2343[54]
  i2342.m_paragraphSpacing = i2343[55]
  i2342.m_charWidthMaxAdj = i2343[56]
  i2342.m_TextWrappingMode = i2343[57]
  i2342.m_wordWrappingRatios = i2343[58]
  i2342.m_overflowMode = i2343[59]
  request.r(i2343[60], i2343[61], 0, i2342, 'm_linkedTextComponent')
  request.r(i2343[62], i2343[63], 0, i2342, 'parentLinkedComponent')
  i2342.m_enableKerning = !!i2343[64]
  var i2349 = i2343[65]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(i2349[i + 0]);
  }
  i2342.m_ActiveFontFeatures = i2348
  i2342.m_enableExtraPadding = !!i2343[66]
  i2342.checkPaddingRequired = !!i2343[67]
  i2342.m_isRichText = !!i2343[68]
  i2342.m_parseCtrlCharacters = !!i2343[69]
  i2342.m_isOrthographic = !!i2343[70]
  i2342.m_isCullingEnabled = !!i2343[71]
  i2342.m_horizontalMapping = i2343[72]
  i2342.m_verticalMapping = i2343[73]
  i2342.m_uvLineOffset = i2343[74]
  i2342.m_geometrySortingOrder = i2343[75]
  i2342.m_IsTextObjectScaleStatic = !!i2343[76]
  i2342.m_VertexBufferAutoSizeReduction = !!i2343[77]
  i2342.m_useMaxVisibleDescender = !!i2343[78]
  i2342.m_pageToDisplay = i2343[79]
  i2342.m_margin = new pc.Vec4( i2343[80], i2343[81], i2343[82], i2343[83] )
  i2342.m_isUsingLegacyAnimationComponent = !!i2343[84]
  i2342.m_isVolumetricText = !!i2343[85]
  request.r(i2343[86], i2343[87], 0, i2342, 'm_Material')
  i2342.m_EmojiFallbackSupport = !!i2343[88]
  i2342.m_Maskable = !!i2343[89]
  i2342.m_Color = new pc.Color(i2343[90], i2343[91], i2343[92], i2343[93])
  i2342.m_RaycastTarget = !!i2343[94]
  i2342.m_RaycastPadding = new pc.Vec4( i2343[95], i2343[96], i2343[97], i2343[98] )
  return i2342
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2352 = root || request.c( 'TMPro.VertexGradient' )
  var i2353 = data
  i2352.topLeft = new pc.Color(i2353[0], i2353[1], i2353[2], i2353[3])
  i2352.topRight = new pc.Color(i2353[4], i2353[5], i2353[6], i2353[7])
  i2352.bottomLeft = new pc.Color(i2353[8], i2353[9], i2353[10], i2353[11])
  i2352.bottomRight = new pc.Color(i2353[12], i2353[13], i2353[14], i2353[15])
  return i2352
}

Deserializers["TutController"] = function (request, data, root) {
  var i2356 = root || request.c( 'TutController' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'tutScene')
  request.r(i2357[2], i2357[3], 0, i2356, 'startTut')
  request.r(i2357[4], i2357[5], 0, i2356, 'playTut')
  request.r(i2357[6], i2357[7], 0, i2356, 'farTut')
  request.r(i2357[8], i2357[9], 0, i2356, 'failTut')
  return i2356
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2358 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2359 = data
  i2358.targetIsSelf = !!i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'targetGO')
  i2358.tweenTargetIsTargetGO = !!i2359[3]
  i2358.delay = i2359[4]
  i2358.duration = i2359[5]
  i2358.easeType = i2359[6]
  i2358.easeCurve = new pc.AnimationCurve( { keys_flow: i2359[7] } )
  i2358.loopType = i2359[8]
  i2358.loops = i2359[9]
  i2358.id = i2359[10]
  i2358.isRelative = !!i2359[11]
  i2358.isFrom = !!i2359[12]
  i2358.isIndependentUpdate = !!i2359[13]
  i2358.autoKill = !!i2359[14]
  i2358.autoGenerate = !!i2359[15]
  i2358.isActive = !!i2359[16]
  i2358.isValid = !!i2359[17]
  request.r(i2359[18], i2359[19], 0, i2358, 'target')
  i2358.animationType = i2359[20]
  i2358.targetType = i2359[21]
  i2358.forcedTargetType = i2359[22]
  i2358.autoPlay = !!i2359[23]
  i2358.useTargetAsV3 = !!i2359[24]
  i2358.endValueFloat = i2359[25]
  i2358.endValueV3 = new pc.Vec3( i2359[26], i2359[27], i2359[28] )
  i2358.endValueV2 = new pc.Vec2( i2359[29], i2359[30] )
  i2358.endValueColor = new pc.Color(i2359[31], i2359[32], i2359[33], i2359[34])
  i2358.endValueString = i2359[35]
  i2358.endValueRect = UnityEngine.Rect.MinMaxRect(i2359[36], i2359[37], i2359[38], i2359[39])
  request.r(i2359[40], i2359[41], 0, i2358, 'endValueTransform')
  i2358.optionalBool0 = !!i2359[42]
  i2358.optionalBool1 = !!i2359[43]
  i2358.optionalFloat0 = i2359[44]
  i2358.optionalInt0 = i2359[45]
  i2358.optionalRotationMode = i2359[46]
  i2358.optionalScrambleMode = i2359[47]
  i2358.optionalShakeRandomnessMode = i2359[48]
  i2358.optionalString = i2359[49]
  i2358.updateType = i2359[50]
  i2358.isSpeedBased = !!i2359[51]
  i2358.hasOnStart = !!i2359[52]
  i2358.hasOnPlay = !!i2359[53]
  i2358.hasOnUpdate = !!i2359[54]
  i2358.hasOnStepComplete = !!i2359[55]
  i2358.hasOnComplete = !!i2359[56]
  i2358.hasOnTweenCreated = !!i2359[57]
  i2358.hasOnRewind = !!i2359[58]
  i2358.onStart = request.d('UnityEngine.Events.UnityEvent', i2359[59], i2358.onStart)
  i2358.onPlay = request.d('UnityEngine.Events.UnityEvent', i2359[60], i2358.onPlay)
  i2358.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2359[61], i2358.onUpdate)
  i2358.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2359[62], i2358.onStepComplete)
  i2358.onComplete = request.d('UnityEngine.Events.UnityEvent', i2359[63], i2358.onComplete)
  i2358.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2359[64], i2358.onTweenCreated)
  i2358.onRewind = request.d('UnityEngine.Events.UnityEvent', i2359[65], i2358.onRewind)
  return i2358
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2361 = data
  i2360.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2361[0], i2360.m_PersistentCalls)
  return i2360
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2362 = root || request.c( 'HideOnPointer' )
  var i2363 = data
  i2362.OnPointerDownEvent = request.d('System.Action', i2363[0], i2362.OnPointerDownEvent)
  return i2362
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2364 = root || request.c( 'System.Action' )
  var i2365 = data
  return i2364
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i2366 = root || request.c( 'SelectPanel' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, '_title')
  var i2369 = i2367[2]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 1, i2368, '')
  }
  i2366._buttonsSelectMap = i2368
  var i2371 = i2367[3]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 1, i2370, '')
  }
  i2366._buttonsCTA = i2370
  request.r(i2367[4], i2367[5], 0, i2366, '_lock')
  return i2366
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2375 = data
  i2374.m_AspectMode = i2375[0]
  i2374.m_AspectRatio = i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2377 = data
  i2376.center = new pc.Vec3( i2377[0], i2377[1], i2377[2] )
  i2376.size = new pc.Vec3( i2377[3], i2377[4], i2377[5] )
  i2376.enabled = !!i2377[6]
  i2376.isTrigger = !!i2377[7]
  request.r(i2377[8], i2377[9], 0, i2376, 'material')
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2379 = data
  i2378.mass = i2379[0]
  i2378.drag = i2379[1]
  i2378.angularDrag = i2379[2]
  i2378.useGravity = !!i2379[3]
  i2378.isKinematic = !!i2379[4]
  i2378.constraints = i2379[5]
  i2378.maxAngularVelocity = i2379[6]
  i2378.collisionDetectionMode = i2379[7]
  i2378.interpolation = i2379[8]
  return i2378
}

Deserializers["Gift"] = function (request, data, root) {
  var i2380 = root || request.c( 'Gift' )
  var i2381 = data
  i2380.collectDone = !!i2381[0]
  var i2383 = i2381[1]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2380.hints = i2382
  request.r(i2381[2], i2381[3], 0, i2380, 'collectSound')
  request.r(i2381[4], i2381[5], 0, i2380, 'collectEffect')
  request.r(i2381[6], i2381[7], 0, i2380, 'arrow')
  return i2380
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2386 = root || request.c( 'SoundHint' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'Sound')
  request.r(i2387[2], i2387[3], 0, i2386, 'Source')
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'sharedMesh')
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'additionalVertexStreams')
  i2390.enabled = !!i2391[2]
  request.r(i2391[3], i2391[4], 0, i2390, 'sharedMaterial')
  var i2393 = i2391[5]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.sharedMaterials = i2392
  i2390.receiveShadows = !!i2391[6]
  i2390.shadowCastingMode = i2391[7]
  i2390.sortingLayerID = i2391[8]
  i2390.sortingOrder = i2391[9]
  i2390.lightmapIndex = i2391[10]
  i2390.lightmapSceneIndex = i2391[11]
  i2390.lightmapScaleOffset = new pc.Vec4( i2391[12], i2391[13], i2391[14], i2391[15] )
  i2390.lightProbeUsage = i2391[16]
  i2390.reflectionProbeUsage = i2391[17]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'mesh')
  i2394.meshCount = i2395[2]
  i2394.activeVertexStreamsCount = i2395[3]
  i2394.alignment = i2395[4]
  i2394.renderMode = i2395[5]
  i2394.sortMode = i2395[6]
  i2394.lengthScale = i2395[7]
  i2394.velocityScale = i2395[8]
  i2394.cameraVelocityScale = i2395[9]
  i2394.normalDirection = i2395[10]
  i2394.sortingFudge = i2395[11]
  i2394.minParticleSize = i2395[12]
  i2394.maxParticleSize = i2395[13]
  i2394.pivot = new pc.Vec3( i2395[14], i2395[15], i2395[16] )
  request.r(i2395[17], i2395[18], 0, i2394, 'trailMaterial')
  i2394.applyActiveColorSpace = !!i2395[19]
  i2394.enabled = !!i2395[20]
  request.r(i2395[21], i2395[22], 0, i2394, 'sharedMaterial')
  var i2397 = i2395[23]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2394.sharedMaterials = i2396
  i2394.receiveShadows = !!i2395[24]
  i2394.shadowCastingMode = i2395[25]
  i2394.sortingLayerID = i2395[26]
  i2394.sortingOrder = i2395[27]
  i2394.lightmapIndex = i2395[28]
  i2394.lightmapSceneIndex = i2395[29]
  i2394.lightmapScaleOffset = new pc.Vec4( i2395[30], i2395[31], i2395[32], i2395[33] )
  i2394.lightProbeUsage = i2395[34]
  i2394.reflectionProbeUsage = i2395[35]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2399 = data
  i2398.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2399[0], i2398.main)
  i2398.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2399[1], i2398.colorBySpeed)
  i2398.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2399[2], i2398.colorOverLifetime)
  i2398.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2399[3], i2398.emission)
  i2398.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2399[4], i2398.rotationBySpeed)
  i2398.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2399[5], i2398.rotationOverLifetime)
  i2398.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2399[6], i2398.shape)
  i2398.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2399[7], i2398.sizeBySpeed)
  i2398.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2399[8], i2398.sizeOverLifetime)
  i2398.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2399[9], i2398.textureSheetAnimation)
  i2398.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2399[10], i2398.velocityOverLifetime)
  i2398.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2399[11], i2398.noise)
  i2398.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2399[12], i2398.inheritVelocity)
  i2398.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2399[13], i2398.forceOverLifetime)
  i2398.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2399[14], i2398.limitVelocityOverLifetime)
  i2398.useAutoRandomSeed = !!i2399[15]
  i2398.randomSeed = i2399[16]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemMain()
  var i2401 = data
  i2400.duration = i2401[0]
  i2400.loop = !!i2401[1]
  i2400.prewarm = !!i2401[2]
  i2400.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[3], i2400.startDelay)
  i2400.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[4], i2400.startLifetime)
  i2400.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[5], i2400.startSpeed)
  i2400.startSize3D = !!i2401[6]
  i2400.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[7], i2400.startSizeX)
  i2400.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[8], i2400.startSizeY)
  i2400.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[9], i2400.startSizeZ)
  i2400.startRotation3D = !!i2401[10]
  i2400.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[11], i2400.startRotationX)
  i2400.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[12], i2400.startRotationY)
  i2400.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[13], i2400.startRotationZ)
  i2400.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2401[14], i2400.startColor)
  i2400.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[15], i2400.gravityModifier)
  i2400.simulationSpace = i2401[16]
  request.r(i2401[17], i2401[18], 0, i2400, 'customSimulationSpace')
  i2400.simulationSpeed = i2401[19]
  i2400.useUnscaledTime = !!i2401[20]
  i2400.scalingMode = i2401[21]
  i2400.playOnAwake = !!i2401[22]
  i2400.maxParticles = i2401[23]
  i2400.emitterVelocityMode = i2401[24]
  i2400.stopAction = i2401[25]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2402 = root || new pc.MinMaxCurve()
  var i2403 = data
  i2402.mode = i2403[0]
  i2402.curveMin = new pc.AnimationCurve( { keys_flow: i2403[1] } )
  i2402.curveMax = new pc.AnimationCurve( { keys_flow: i2403[2] } )
  i2402.curveMultiplier = i2403[3]
  i2402.constantMin = i2403[4]
  i2402.constantMax = i2403[5]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2404 = root || new pc.MinMaxGradient()
  var i2405 = data
  i2404.mode = i2405[0]
  i2404.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2405[1], i2404.gradientMin)
  i2404.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2405[2], i2404.gradientMax)
  i2404.colorMin = new pc.Color(i2405[3], i2405[4], i2405[5], i2405[6])
  i2404.colorMax = new pc.Color(i2405[7], i2405[8], i2405[9], i2405[10])
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2407 = data
  i2406.mode = i2407[0]
  var i2409 = i2407[1]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2409[i + 0]) );
  }
  i2406.colorKeys = i2408
  var i2411 = i2407[2]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2411[i + 0]) );
  }
  i2406.alphaKeys = i2410
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemColorBySpeed()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2413[1], i2412.color)
  i2412.range = new pc.Vec2( i2413[2], i2413[3] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2417 = data
  i2416.color = new pc.Color(i2417[0], i2417[1], i2417[2], i2417[3])
  i2416.time = i2417[4]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2421 = data
  i2420.alpha = i2421[0]
  i2420.time = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemColorOverLifetime()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2423[1], i2422.color)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemEmitter()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[1], i2424.rateOverTime)
  i2424.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.rateOverDistance)
  var i2427 = i2425[3]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2427[i + 0]) );
  }
  i2424.bursts = i2426
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemBurst()
  var i2431 = data
  i2430.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[0], i2430.count)
  i2430.cycleCount = i2431[1]
  i2430.minCount = i2431[2]
  i2430.maxCount = i2431[3]
  i2430.repeatInterval = i2431[4]
  i2430.time = i2431[5]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2432 = root || new pc.ParticleSystemRotationBySpeed()
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[1], i2432.x)
  i2432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[2], i2432.y)
  i2432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[3], i2432.z)
  i2432.separateAxes = !!i2433[4]
  i2432.range = new pc.Vec2( i2433[5], i2433[6] )
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2434 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2435 = data
  i2434.enabled = !!i2435[0]
  i2434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[1], i2434.x)
  i2434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[2], i2434.y)
  i2434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[3], i2434.z)
  i2434.separateAxes = !!i2435[4]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemShape()
  var i2437 = data
  i2436.enabled = !!i2437[0]
  i2436.shapeType = i2437[1]
  i2436.randomDirectionAmount = i2437[2]
  i2436.sphericalDirectionAmount = i2437[3]
  i2436.randomPositionAmount = i2437[4]
  i2436.alignToDirection = !!i2437[5]
  i2436.radius = i2437[6]
  i2436.radiusMode = i2437[7]
  i2436.radiusSpread = i2437[8]
  i2436.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[9], i2436.radiusSpeed)
  i2436.radiusThickness = i2437[10]
  i2436.angle = i2437[11]
  i2436.length = i2437[12]
  i2436.boxThickness = new pc.Vec3( i2437[13], i2437[14], i2437[15] )
  i2436.meshShapeType = i2437[16]
  request.r(i2437[17], i2437[18], 0, i2436, 'mesh')
  request.r(i2437[19], i2437[20], 0, i2436, 'meshRenderer')
  request.r(i2437[21], i2437[22], 0, i2436, 'skinnedMeshRenderer')
  i2436.useMeshMaterialIndex = !!i2437[23]
  i2436.meshMaterialIndex = i2437[24]
  i2436.useMeshColors = !!i2437[25]
  i2436.normalOffset = i2437[26]
  i2436.arc = i2437[27]
  i2436.arcMode = i2437[28]
  i2436.arcSpread = i2437[29]
  i2436.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[30], i2436.arcSpeed)
  i2436.donutRadius = i2437[31]
  i2436.position = new pc.Vec3( i2437[32], i2437[33], i2437[34] )
  i2436.rotation = new pc.Vec3( i2437[35], i2437[36], i2437[37] )
  i2436.scale = new pc.Vec3( i2437[38], i2437[39], i2437[40] )
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2438 = root || new pc.ParticleSystemSizeBySpeed()
  var i2439 = data
  i2438.enabled = !!i2439[0]
  i2438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[1], i2438.x)
  i2438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[2], i2438.y)
  i2438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[3], i2438.z)
  i2438.separateAxes = !!i2439[4]
  i2438.range = new pc.Vec2( i2439[5], i2439[6] )
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[1], i2440.x)
  i2440.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[2], i2440.y)
  i2440.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[3], i2440.z)
  i2440.separateAxes = !!i2441[4]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.mode = i2443[1]
  i2442.animation = i2443[2]
  i2442.numTilesX = i2443[3]
  i2442.numTilesY = i2443[4]
  i2442.useRandomRow = !!i2443[5]
  i2442.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[6], i2442.frameOverTime)
  i2442.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[7], i2442.startFrame)
  i2442.cycleCount = i2443[8]
  i2442.rowIndex = i2443[9]
  i2442.flipU = i2443[10]
  i2442.flipV = i2443[11]
  i2442.spriteCount = i2443[12]
  var i2445 = i2443[13]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.sprites = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[1], i2448.x)
  i2448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.y)
  i2448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[3], i2448.z)
  i2448.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[4], i2448.radial)
  i2448.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[5], i2448.speedModifier)
  i2448.space = i2449[6]
  i2448.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[7], i2448.orbitalX)
  i2448.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[8], i2448.orbitalY)
  i2448.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[9], i2448.orbitalZ)
  i2448.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[10], i2448.orbitalOffsetX)
  i2448.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[11], i2448.orbitalOffsetY)
  i2448.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[12], i2448.orbitalOffsetZ)
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemNoise()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.separateAxes = !!i2451[1]
  i2450.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.strengthX)
  i2450.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.strengthY)
  i2450.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[4], i2450.strengthZ)
  i2450.frequency = i2451[5]
  i2450.damping = !!i2451[6]
  i2450.octaveCount = i2451[7]
  i2450.octaveMultiplier = i2451[8]
  i2450.octaveScale = i2451[9]
  i2450.quality = i2451[10]
  i2450.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[11], i2450.scrollSpeed)
  i2450.scrollSpeedMultiplier = i2451[12]
  i2450.remapEnabled = !!i2451[13]
  i2450.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[14], i2450.remapX)
  i2450.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[15], i2450.remapY)
  i2450.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[16], i2450.remapZ)
  i2450.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[17], i2450.positionAmount)
  i2450.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[18], i2450.rotationAmount)
  i2450.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[19], i2450.sizeAmount)
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemInheritVelocity()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.mode = i2453[1]
  i2452.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[2], i2452.curve)
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemForceOverLifetime()
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[1], i2454.x)
  i2454.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[2], i2454.y)
  i2454.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[3], i2454.z)
  i2454.space = i2455[4]
  i2454.randomized = !!i2455[5]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2456 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[1], i2456.limit)
  i2456.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[2], i2456.limitX)
  i2456.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[3], i2456.limitY)
  i2456.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[4], i2456.limitZ)
  i2456.dampen = i2457[5]
  i2456.separateAxes = !!i2457[6]
  i2456.space = i2457[7]
  i2456.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[8], i2456.drag)
  i2456.multiplyDragByParticleSize = !!i2457[9]
  i2456.multiplyDragByParticleVelocity = !!i2457[10]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2459 = data
  i2458.color = new pc.Color(i2459[0], i2459[1], i2459[2], i2459[3])
  request.r(i2459[4], i2459[5], 0, i2458, 'sprite')
  i2458.flipX = !!i2459[6]
  i2458.flipY = !!i2459[7]
  i2458.drawMode = i2459[8]
  i2458.size = new pc.Vec2( i2459[9], i2459[10] )
  i2458.tileMode = i2459[11]
  i2458.adaptiveModeThreshold = i2459[12]
  i2458.maskInteraction = i2459[13]
  i2458.spriteSortPoint = i2459[14]
  i2458.enabled = !!i2459[15]
  request.r(i2459[16], i2459[17], 0, i2458, 'sharedMaterial')
  var i2461 = i2459[18]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 2, i2460, '')
  }
  i2458.sharedMaterials = i2460
  i2458.receiveShadows = !!i2459[19]
  i2458.shadowCastingMode = i2459[20]
  i2458.sortingLayerID = i2459[21]
  i2458.sortingOrder = i2459[22]
  i2458.lightmapIndex = i2459[23]
  i2458.lightmapSceneIndex = i2459[24]
  i2458.lightmapScaleOffset = new pc.Vec4( i2459[25], i2459[26], i2459[27], i2459[28] )
  i2458.lightProbeUsage = i2459[29]
  i2458.reflectionProbeUsage = i2459[30]
  return i2458
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2462 = root || request.c( 'CharacterMotor' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'characterInput')
  request.r(i2463[2], i2463[3], 0, i2462, 'cameraYawTransform')
  request.r(i2463[4], i2463[5], 0, i2462, '_arrow')
  i2462.moveSpeed = i2463[6]
  i2462.jumpHeight = i2463[7]
  request.r(i2463[8], i2463[9], 0, i2462, 'groundChecker')
  i2462.gravity = i2463[10]
  i2462.enableStepClimb = !!i2463[11]
  i2462.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2463[12] )
  i2462.maxStepHeight = i2463[13]
  i2462.stepCheckDistance = i2463[14]
  i2462.stepUpSpeed = i2463[15]
  i2462.stepUpAcceleration = i2463[16]
  i2462.minimumStepFacing = i2463[17]
  request.r(i2463[18], i2463[19], 0, i2462, 'controller')
  i2462.autoRun = !!i2463[20]
  return i2462
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2464 = root || request.c( 'CharacterRotation' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'motor')
  i2464.rotationSpeed = i2465[2]
  return i2464
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2466 = root || request.c( 'CharacterAnimation' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'animator')
  request.r(i2467[2], i2467[3], 0, i2466, 'motor')
  i2466.speedChangeRate = i2467[4]
  i2466.groundedGraceTime = i2467[5]
  return i2466
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2468 = root || request.c( 'CharacterCollect' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'motor')
  request.r(i2469[2], i2469[3], 0, i2468, 'avatar')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2471 = data
  i2470.center = new pc.Vec3( i2471[0], i2471[1], i2471[2] )
  i2470.radius = i2471[3]
  i2470.height = i2471[4]
  i2470.direction = i2471[5]
  i2470.enabled = !!i2471[6]
  i2470.isTrigger = !!i2471[7]
  request.r(i2471[8], i2471[9], 0, i2470, 'material')
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'animatorController')
  request.r(i2473[2], i2473[3], 0, i2472, 'avatar')
  i2472.updateMode = i2473[4]
  i2472.hasTransformHierarchy = !!i2473[5]
  i2472.applyRootMotion = !!i2473[6]
  var i2475 = i2473[7]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 2) {
  request.r(i2475[i + 0], i2475[i + 1], 2, i2474, '')
  }
  i2472.humanBones = i2474
  i2472.enabled = !!i2473[8]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'clip')
  request.r(i2479[2], i2479[3], 0, i2478, 'outputAudioMixerGroup')
  i2478.playOnAwake = !!i2479[4]
  i2478.loop = !!i2479[5]
  i2478.time = i2479[6]
  i2478.volume = i2479[7]
  i2478.pitch = i2479[8]
  i2478.enabled = !!i2479[9]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'sharedMesh')
  var i2483 = i2481[2]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 2, i2482, '')
  }
  i2480.bones = i2482
  i2480.updateWhenOffscreen = !!i2481[3]
  i2480.localBounds = i2481[4]
  request.r(i2481[5], i2481[6], 0, i2480, 'rootBone')
  var i2485 = i2481[7]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2485[i + 0]) );
  }
  i2480.blendShapesWeights = i2484
  i2480.enabled = !!i2481[8]
  request.r(i2481[9], i2481[10], 0, i2480, 'sharedMaterial')
  var i2487 = i2481[11]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2480.sharedMaterials = i2486
  i2480.receiveShadows = !!i2481[12]
  i2480.shadowCastingMode = i2481[13]
  i2480.sortingLayerID = i2481[14]
  i2480.sortingOrder = i2481[15]
  i2480.lightmapIndex = i2481[16]
  i2480.lightmapSceneIndex = i2481[17]
  i2480.lightmapScaleOffset = new pc.Vec4( i2481[18], i2481[19], i2481[20], i2481[21] )
  i2480.lightProbeUsage = i2481[22]
  i2480.reflectionProbeUsage = i2481[23]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2491 = data
  i2490.weight = i2491[0]
  return i2490
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2492 = root || request.c( 'GroundChecker' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'groundPoint')
  i2492.checkRadius = i2493[2]
  i2492.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2493[3] )
  return i2492
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2494 = root || request.c( 'CameraFollow' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'target')
  i2494.smoothTime = i2495[2]
  return i2494
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2496 = root || request.c( 'CameraLook' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'input')
  request.r(i2497[2], i2497[3], 0, i2496, 'yawPivot')
  request.r(i2497[4], i2497[5], 0, i2496, 'pitchPivot')
  i2496.minPitch = i2497[6]
  i2496.maxPitch = i2497[7]
  i2496.yaw = i2497[8]
  i2496.pitch = i2497[9]
  i2496.defaltYaw = i2497[10]
  i2496.defaltPitch = i2497[11]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2499 = data
  i2498.aspect = i2499[0]
  i2498.orthographic = !!i2499[1]
  i2498.orthographicSize = i2499[2]
  i2498.backgroundColor = new pc.Color(i2499[3], i2499[4], i2499[5], i2499[6])
  i2498.nearClipPlane = i2499[7]
  i2498.farClipPlane = i2499[8]
  i2498.fieldOfView = i2499[9]
  i2498.depth = i2499[10]
  i2498.clearFlags = i2499[11]
  i2498.cullingMask = i2499[12]
  i2498.rect = i2499[13]
  request.r(i2499[14], i2499[15], 0, i2498, 'targetTexture')
  i2498.usePhysicalProperties = !!i2499[16]
  i2498.focalLength = i2499[17]
  i2498.sensorSize = new pc.Vec2( i2499[18], i2499[19] )
  i2498.lensShift = new pc.Vec2( i2499[20], i2499[21] )
  i2498.gateFit = i2499[22]
  i2498.commandBufferCount = i2499[23]
  i2498.cameraType = i2499[24]
  i2498.enabled = !!i2499[25]
  return i2498
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2500 = root || request.c( 'CharacterInput' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'joystick')
  request.r(i2501[2], i2501[3], 0, i2500, 'jumpButton')
  return i2500
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2502 = root || request.c( 'InputManager' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'worldCamera')
  i2502.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2503[2] )
  i2502.touchSensitivity = i2503[3]
  i2502.mouseSensitivity = i2503[4]
  i2502.dragThreshold = i2503[5]
  return i2502
}

Deserializers["GameController"] = function (request, data, root) {
  var i2504 = root || request.c( 'GameController' )
  var i2505 = data
  i2504.timeToShowComplete = i2505[0]
  i2504.timeToShowHint = i2505[1]
  i2504.currentProgress = i2505[2]
  i2504.target = i2505[3]
  request.r(i2505[4], i2505[5], 0, i2504, 'progressText')
  request.r(i2505[6], i2505[7], 0, i2504, 'collectText')
  request.r(i2505[8], i2505[9], 0, i2504, 'completeScene')
  i2504._indexGift = i2505[10]
  var i2507 = i2505[11]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+GiftGroup')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('GameController+GiftGroup', i2507[i + 0]));
  }
  i2504.giftGroups = i2506
  request.r(i2505[12], i2505[13], 0, i2504, 'collect')
  request.r(i2505[14], i2505[15], 0, i2504, 'tut')
  return i2504
}

Deserializers["GameController+GiftGroup"] = function (request, data, root) {
  var i2510 = root || request.c( 'GameController+GiftGroup' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2513.length; i += 2) {
  request.r(i2513[i + 0], i2513[i + 1], 1, i2512, '')
  }
  i2510.gifts = i2512
  return i2510
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2516 = root || request.c( 'AudioController' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'musicSource')
  request.r(i2517[2], i2517[3], 0, i2516, 'poolParent')
  i2516.startSize = i2517[4]
  return i2516
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2518 = root || request.c( 'LunaController' )
  var i2519 = data
  i2518.LimitTimePlay = !!i2519[0]
  i2518.TimePlay = i2519[1]
  var i2521 = i2519[2]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 1, i2520, '')
  }
  i2518.images = i2520
  request.r(i2519[3], i2519[4], 0, i2518, 'CTA')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2525 = data
  i2524.textureMode = i2525[0]
  i2524.alignment = i2525[1]
  i2524.widthCurve = new pc.AnimationCurve( { keys_flow: i2525[2] } )
  i2524.colorGradient = i2525[3] ? new pc.ColorGradient(i2525[3][0], i2525[3][1], i2525[3][2]) : null
  var i2527 = i2525[4]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 3) {
    i2526.push( new pc.Vec3( i2527[i + 0], i2527[i + 1], i2527[i + 2] ) );
  }
  i2524.positions = i2526
  i2524.positionCount = i2525[5]
  i2524.widthMultiplier = i2525[6]
  i2524.startWidth = i2525[7]
  i2524.endWidth = i2525[8]
  i2524.numCornerVertices = i2525[9]
  i2524.numCapVertices = i2525[10]
  i2524.useWorldSpace = !!i2525[11]
  i2524.loop = !!i2525[12]
  i2524.startColor = new pc.Color(i2525[13], i2525[14], i2525[15], i2525[16])
  i2524.endColor = new pc.Color(i2525[17], i2525[18], i2525[19], i2525[20])
  i2524.generateLightingData = !!i2525[21]
  i2524.enabled = !!i2525[22]
  request.r(i2525[23], i2525[24], 0, i2524, 'sharedMaterial')
  var i2529 = i2525[25]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 2, i2528, '')
  }
  i2524.sharedMaterials = i2528
  i2524.receiveShadows = !!i2525[26]
  i2524.shadowCastingMode = i2525[27]
  i2524.sortingLayerID = i2525[28]
  i2524.sortingOrder = i2525[29]
  i2524.lightmapIndex = i2525[30]
  i2524.lightmapSceneIndex = i2525[31]
  i2524.lightmapScaleOffset = new pc.Vec4( i2525[32], i2525[33], i2525[34], i2525[35] )
  i2524.lightProbeUsage = i2525[36]
  i2524.reflectionProbeUsage = i2525[37]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'sharedMesh')
  i2532.convex = !!i2533[2]
  i2532.enabled = !!i2533[3]
  i2532.isTrigger = !!i2533[4]
  request.r(i2533[5], i2533[6], 0, i2532, 'material')
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2535 = data
  i2534.center = new pc.Vec3( i2535[0], i2535[1], i2535[2] )
  i2534.radius = i2535[3]
  i2534.enabled = !!i2535[4]
  i2534.isTrigger = !!i2535[5]
  request.r(i2535[6], i2535[7], 0, i2534, 'material')
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2537 = data
  i2536.ambientIntensity = i2537[0]
  i2536.reflectionIntensity = i2537[1]
  i2536.ambientMode = i2537[2]
  i2536.ambientLight = new pc.Color(i2537[3], i2537[4], i2537[5], i2537[6])
  i2536.ambientSkyColor = new pc.Color(i2537[7], i2537[8], i2537[9], i2537[10])
  i2536.ambientGroundColor = new pc.Color(i2537[11], i2537[12], i2537[13], i2537[14])
  i2536.ambientEquatorColor = new pc.Color(i2537[15], i2537[16], i2537[17], i2537[18])
  i2536.fogColor = new pc.Color(i2537[19], i2537[20], i2537[21], i2537[22])
  i2536.fogEndDistance = i2537[23]
  i2536.fogStartDistance = i2537[24]
  i2536.fogDensity = i2537[25]
  i2536.fog = !!i2537[26]
  request.r(i2537[27], i2537[28], 0, i2536, 'skybox')
  i2536.fogMode = i2537[29]
  var i2539 = i2537[30]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2539[i + 0]) );
  }
  i2536.lightmaps = i2538
  i2536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2537[31], i2536.lightProbes)
  i2536.lightmapsMode = i2537[32]
  i2536.mixedBakeMode = i2537[33]
  i2536.environmentLightingMode = i2537[34]
  i2536.ambientProbe = new pc.SphericalHarmonicsL2(i2537[35])
  request.r(i2537[36], i2537[37], 0, i2536, 'customReflection')
  request.r(i2537[38], i2537[39], 0, i2536, 'defaultReflection')
  i2536.defaultReflectionMode = i2537[40]
  i2536.defaultReflectionResolution = i2537[41]
  i2536.sunLightObjectId = i2537[42]
  i2536.pixelLightCount = i2537[43]
  i2536.defaultReflectionHDR = !!i2537[44]
  i2536.hasLightDataAsset = !!i2537[45]
  i2536.hasManualGenerate = !!i2537[46]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'lightmapColor')
  request.r(i2543[2], i2543[3], 0, i2542, 'lightmapDirection')
  request.r(i2543[4], i2543[5], 0, i2542, 'shadowMask')
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2544 = root || new UnityEngine.LightProbes()
  var i2545 = data
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2553[i + 0]));
  }
  i2550.ShaderCompilationErrors = i2552
  i2550.name = i2551[1]
  i2550.guid = i2551[2]
  var i2555 = i2551[3]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( i2555[i + 0] );
  }
  i2550.shaderDefinedKeywords = i2554
  var i2557 = i2551[4]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2557[i + 0]) );
  }
  i2550.passes = i2556
  var i2559 = i2551[5]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2559[i + 0]) );
  }
  i2550.usePasses = i2558
  var i2561 = i2551[6]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2561[i + 0]) );
  }
  i2550.defaultParameterValues = i2560
  request.r(i2551[7], i2551[8], 0, i2550, 'unityFallbackShader')
  i2550.readDepth = !!i2551[9]
  i2550.hasDepthOnlyPass = !!i2551[10]
  i2550.isCreatedByShaderGraph = !!i2551[11]
  i2550.disableBatching = !!i2551[12]
  i2550.compiled = !!i2551[13]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2565 = data
  i2564.shaderName = i2565[0]
  i2564.errorMessage = i2565[1]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2570 = root || new pc.UnityShaderPass()
  var i2571 = data
  i2570.id = i2571[0]
  i2570.subShaderIndex = i2571[1]
  i2570.name = i2571[2]
  i2570.passType = i2571[3]
  i2570.grabPassTextureName = i2571[4]
  i2570.usePass = !!i2571[5]
  i2570.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[6], i2570.zTest)
  i2570.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[7], i2570.zWrite)
  i2570.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[8], i2570.culling)
  i2570.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2571[9], i2570.blending)
  i2570.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2571[10], i2570.alphaBlending)
  i2570.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[11], i2570.colorWriteMask)
  i2570.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[12], i2570.offsetUnits)
  i2570.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[13], i2570.offsetFactor)
  i2570.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[14], i2570.stencilRef)
  i2570.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[15], i2570.stencilReadMask)
  i2570.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[16], i2570.stencilWriteMask)
  i2570.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2571[17], i2570.stencilOp)
  i2570.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2571[18], i2570.stencilOpFront)
  i2570.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2571[19], i2570.stencilOpBack)
  var i2573 = i2571[20]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2573[i + 0]) );
  }
  i2570.tags = i2572
  var i2575 = i2571[21]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2570.passDefinedKeywords = i2574
  var i2577 = i2571[22]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2577[i + 0]) );
  }
  i2570.passDefinedKeywordGroups = i2576
  var i2579 = i2571[23]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2579[i + 0]) );
  }
  i2570.variants = i2578
  var i2581 = i2571[24]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2581[i + 0]) );
  }
  i2570.excludedVariants = i2580
  i2570.hasDepthReader = !!i2571[25]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2583 = data
  i2582.val = i2583[0]
  i2582.name = i2583[1]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2585 = data
  i2584.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[0], i2584.src)
  i2584.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[1], i2584.dst)
  i2584.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[2], i2584.op)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2587 = data
  i2586.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[0], i2586.pass)
  i2586.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[1], i2586.fail)
  i2586.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[2], i2586.zFail)
  i2586.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[3], i2586.comp)
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.value = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( i2597[i + 0] );
  }
  i2594.keywords = i2596
  i2594.hasDiscard = !!i2595[1]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2601 = data
  i2600.passId = i2601[0]
  i2600.subShaderIndex = i2601[1]
  var i2603 = i2601[2]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( i2603[i + 0] );
  }
  i2600.keywords = i2602
  i2600.vertexProgram = i2601[3]
  i2600.fragmentProgram = i2601[4]
  i2600.exportedForWebGl2 = !!i2601[5]
  i2600.readDepth = !!i2601[6]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'shader')
  i2606.pass = i2607[2]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.type = i2611[1]
  i2610.value = new pc.Vec4( i2611[2], i2611[3], i2611[4], i2611[5] )
  i2610.textureValue = i2611[6]
  i2610.shaderPropertyFlag = i2611[7]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2613 = data
  i2612.name = i2613[0]
  request.r(i2613[1], i2613[2], 0, i2612, 'texture')
  i2612.aabb = i2613[3]
  i2612.vertices = i2613[4]
  i2612.triangles = i2613[5]
  i2612.textureRect = UnityEngine.Rect.MinMaxRect(i2613[6], i2613[7], i2613[8], i2613[9])
  i2612.packedRect = UnityEngine.Rect.MinMaxRect(i2613[10], i2613[11], i2613[12], i2613[13])
  i2612.border = new pc.Vec4( i2613[14], i2613[15], i2613[16], i2613[17] )
  i2612.transparency = i2613[18]
  i2612.bounds = i2613[19]
  i2612.pixelsPerUnit = i2613[20]
  i2612.textureWidth = i2613[21]
  i2612.textureHeight = i2613[22]
  i2612.nativeSize = new pc.Vec2( i2613[23], i2613[24] )
  i2612.pivot = new pc.Vec2( i2613[25], i2613[26] )
  i2612.textureRectOffset = new pc.Vec2( i2613[27], i2613[28] )
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2615 = data
  i2614.name = i2615[0]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.wrapMode = i2617[1]
  i2616.isLooping = !!i2617[2]
  i2616.length = i2617[3]
  var i2619 = i2617[4]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2619[i + 0]) );
  }
  i2616.curves = i2618
  var i2621 = i2617[5]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2621[i + 0]) );
  }
  i2616.events = i2620
  i2616.halfPrecision = !!i2617[6]
  i2616._frameRate = i2617[7]
  i2616.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2617[8], i2616.localBounds)
  i2616.hasMuscleCurves = !!i2617[9]
  var i2623 = i2617[10]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( i2623[i + 0] );
  }
  i2616.clipMuscleConstant = i2622
  i2616.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2617[11], i2616.clipBindingConstant)
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2627 = data
  i2626.path = i2627[0]
  i2626.hash = i2627[1]
  i2626.componentType = i2627[2]
  i2626.property = i2627[3]
  i2626.keys = i2627[4]
  var i2629 = i2627[5]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2629[i + 0]) );
  }
  i2626.objectReferenceKeys = i2628
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2633 = data
  i2632.time = i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, 'value')
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2637 = data
  i2636.functionName = i2637[0]
  i2636.floatParameter = i2637[1]
  i2636.intParameter = i2637[2]
  i2636.stringParameter = i2637[3]
  request.r(i2637[4], i2637[5], 0, i2636, 'objectReferenceParameter')
  i2636.time = i2637[6]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2639 = data
  i2638.center = new pc.Vec3( i2639[0], i2639[1], i2639[2] )
  i2638.extends = new pc.Vec3( i2639[3], i2639[4], i2639[5] )
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2643 = data
  var i2645 = i2643[0]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( i2645[i + 0] );
  }
  i2642.genericBindings = i2644
  var i2647 = i2643[1]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( i2647[i + 0] );
  }
  i2642.pptrCurveMapping = i2646
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2649 = data
  i2648.name = i2649[0]
  var i2651 = i2649[1]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2651[i + 0]) );
  }
  i2648.layers = i2650
  var i2653 = i2649[2]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2653[i + 0]) );
  }
  i2648.parameters = i2652
  i2648.animationClips = i2649[3]
  i2648.avatarUnsupported = i2649[4]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2657 = data
  i2656.name = i2657[0]
  i2656.defaultWeight = i2657[1]
  i2656.blendingMode = i2657[2]
  i2656.avatarMask = i2657[3]
  i2656.syncedLayerIndex = i2657[4]
  i2656.syncedLayerAffectsTiming = !!i2657[5]
  i2656.syncedLayers = i2657[6]
  i2656.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2657[7], i2656.stateMachine)
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2659 = data
  i2658.id = i2659[0]
  i2658.name = i2659[1]
  i2658.path = i2659[2]
  var i2661 = i2659[3]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2661[i + 0]) );
  }
  i2658.states = i2660
  var i2663 = i2659[4]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2663[i + 0]) );
  }
  i2658.machines = i2662
  var i2665 = i2659[5]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2665[i + 0]) );
  }
  i2658.entryStateTransitions = i2664
  var i2667 = i2659[6]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2667[i + 0]) );
  }
  i2658.exitStateTransitions = i2666
  var i2669 = i2659[7]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2669[i + 0]) );
  }
  i2658.anyStateTransitions = i2668
  i2658.defaultStateId = i2659[8]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2673 = data
  i2672.id = i2673[0]
  i2672.name = i2673[1]
  i2672.cycleOffset = i2673[2]
  i2672.cycleOffsetParameter = i2673[3]
  i2672.cycleOffsetParameterActive = !!i2673[4]
  i2672.mirror = !!i2673[5]
  i2672.mirrorParameter = i2673[6]
  i2672.mirrorParameterActive = !!i2673[7]
  i2672.motionId = i2673[8]
  i2672.nameHash = i2673[9]
  i2672.fullPathHash = i2673[10]
  i2672.speed = i2673[11]
  i2672.speedParameter = i2673[12]
  i2672.speedParameterActive = !!i2673[13]
  i2672.tag = i2673[14]
  i2672.tagHash = i2673[15]
  i2672.writeDefaultValues = !!i2673[16]
  var i2675 = i2673[17]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 2, i2674, '')
  }
  i2672.behaviours = i2674
  var i2677 = i2673[18]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2677[i + 0]) );
  }
  i2672.transitions = i2676
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2683 = data
  i2682.fullPath = i2683[0]
  i2682.canTransitionToSelf = !!i2683[1]
  i2682.duration = i2683[2]
  i2682.exitTime = i2683[3]
  i2682.hasExitTime = !!i2683[4]
  i2682.hasFixedDuration = !!i2683[5]
  i2682.interruptionSource = i2683[6]
  i2682.offset = i2683[7]
  i2682.orderedInterruption = !!i2683[8]
  i2682.destinationStateId = i2683[9]
  i2682.isExit = !!i2683[10]
  i2682.mute = !!i2683[11]
  i2682.solo = !!i2683[12]
  var i2685 = i2683[13]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2685[i + 0]) );
  }
  i2682.conditions = i2684
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2689 = data
  i2688.mode = i2689[0]
  i2688.parameter = i2689[1]
  i2688.threshold = i2689[2]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2695 = data
  i2694.destinationStateId = i2695[0]
  i2694.isExit = !!i2695[1]
  i2694.mute = !!i2695[2]
  i2694.solo = !!i2695[3]
  var i2697 = i2695[4]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2697[i + 0]) );
  }
  i2694.conditions = i2696
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2701 = data
  i2700.defaultBool = !!i2701[0]
  i2700.defaultFloat = i2701[1]
  i2700.defaultInt = i2701[2]
  i2700.name = i2701[3]
  i2700.nameHash = i2701[4]
  i2700.type = i2701[5]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2703 = data
  i2702.name = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, '_runtimeAnimatorController')
  var i2705 = i2703[3]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 2) {
  request.r(i2705[i + 0], i2705[i + 1], 2, i2704, '')
  }
  i2702._originalAnimationClips = i2704
  var i2707 = i2703[4]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 2, i2706, '')
  }
  i2702._overrideAnimationClips = i2706
  var i2709 = i2703[5]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 2, i2708, '')
  }
  i2702._animationClips = i2708
  var i2711 = i2703[6]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('UnityEngine.AnimationClipPair', i2711[i + 0]) );
  }
  i2702._animationClipPairs = i2710
  return i2702
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'originalClip')
  request.r(i2717[2], i2717[3], 0, i2716, 'overrideClip')
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.bytes64 = i2719[1]
  i2718.data = i2719[2]
  return i2718
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2721 = data
  i2720.normalStyle = i2721[0]
  i2720.normalSpacingOffset = i2721[1]
  i2720.boldStyle = i2721[2]
  i2720.boldSpacing = i2721[3]
  i2720.italicStyle = i2721[4]
  i2720.tabSize = i2721[5]
  request.r(i2721[6], i2721[7], 0, i2720, 'atlas')
  i2720.m_SourceFontFileGUID = i2721[8]
  i2720.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2721[9], i2720.m_CreationSettings)
  request.r(i2721[10], i2721[11], 0, i2720, 'm_SourceFontFile')
  i2720.m_SourceFontFilePath = i2721[12]
  i2720.m_AtlasPopulationMode = i2721[13]
  i2720.InternalDynamicOS = !!i2721[14]
  var i2723 = i2721[15]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('UnityEngine.TextCore.Glyph', i2723[i + 0]));
  }
  i2720.m_GlyphTable = i2722
  var i2725 = i2721[16]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.TMP_Character', i2725[i + 0]));
  }
  i2720.m_CharacterTable = i2724
  var i2727 = i2721[17]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 2, i2726, '')
  }
  i2720.m_AtlasTextures = i2726
  i2720.m_AtlasTextureIndex = i2721[18]
  i2720.m_IsMultiAtlasTexturesEnabled = !!i2721[19]
  i2720.m_GetFontFeatures = !!i2721[20]
  i2720.m_ClearDynamicDataOnBuild = !!i2721[21]
  i2720.m_AtlasWidth = i2721[22]
  i2720.m_AtlasHeight = i2721[23]
  i2720.m_AtlasPadding = i2721[24]
  i2720.m_AtlasRenderMode = i2721[25]
  var i2729 = i2721[26]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('UnityEngine.TextCore.GlyphRect', i2729[i + 0]));
  }
  i2720.m_UsedGlyphRects = i2728
  var i2731 = i2721[27]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('UnityEngine.TextCore.GlyphRect', i2731[i + 0]));
  }
  i2720.m_FreeGlyphRects = i2730
  i2720.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2721[28], i2720.m_FontFeatureTable)
  i2720.m_ShouldReimportFontFeatures = !!i2721[29]
  var i2733 = i2721[30]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2733.length; i += 2) {
  request.r(i2733[i + 0], i2733[i + 1], 1, i2732, '')
  }
  i2720.m_FallbackFontAssetTable = i2732
  var i2735 = i2721[31]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('TMPro.TMP_FontWeightPair', i2735[i + 0]) );
  }
  i2720.m_FontWeightTable = i2734
  var i2737 = i2721[32]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('TMPro.TMP_FontWeightPair', i2737[i + 0]) );
  }
  i2720.fontWeights = i2736
  i2720.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2721[33], i2720.m_fontInfo)
  var i2739 = i2721[34]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('TMPro.TMP_Glyph', i2739[i + 0]));
  }
  i2720.m_glyphInfoList = i2738
  i2720.m_KerningTable = request.d('TMPro.KerningTable', i2721[35], i2720.m_KerningTable)
  var i2741 = i2721[36]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 1, i2740, '')
  }
  i2720.fallbackFontAssets = i2740
  i2720.m_Version = i2721[37]
  i2720.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2721[38], i2720.m_FaceInfo)
  request.r(i2721[39], i2721[40], 0, i2720, 'm_Material')
  return i2720
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2743 = data
  i2742.sourceFontFileName = i2743[0]
  i2742.sourceFontFileGUID = i2743[1]
  i2742.faceIndex = i2743[2]
  i2742.pointSizeSamplingMode = i2743[3]
  i2742.pointSize = i2743[4]
  i2742.padding = i2743[5]
  i2742.paddingMode = i2743[6]
  i2742.packingMode = i2743[7]
  i2742.atlasWidth = i2743[8]
  i2742.atlasHeight = i2743[9]
  i2742.characterSetSelectionMode = i2743[10]
  i2742.characterSequence = i2743[11]
  i2742.referencedFontAssetGUID = i2743[12]
  i2742.referencedTextAssetGUID = i2743[13]
  i2742.fontStyle = i2743[14]
  i2742.fontStyleModifier = i2743[15]
  i2742.renderMode = i2743[16]
  i2742.includeFontFeatures = !!i2743[17]
  return i2742
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2746 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2747 = data
  i2746.m_Index = i2747[0]
  i2746.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2747[1], i2746.m_Metrics)
  i2746.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2747[2], i2746.m_GlyphRect)
  i2746.m_Scale = i2747[3]
  i2746.m_AtlasIndex = i2747[4]
  i2746.m_ClassDefinitionType = i2747[5]
  return i2746
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2749 = data
  i2748.m_Width = i2749[0]
  i2748.m_Height = i2749[1]
  i2748.m_HorizontalBearingX = i2749[2]
  i2748.m_HorizontalBearingY = i2749[3]
  i2748.m_HorizontalAdvance = i2749[4]
  return i2748
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2751 = data
  i2750.m_X = i2751[0]
  i2750.m_Y = i2751[1]
  i2750.m_Width = i2751[2]
  i2750.m_Height = i2751[3]
  return i2750
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_Character' )
  var i2755 = data
  i2754.m_ElementType = i2755[0]
  i2754.m_Unicode = i2755[1]
  i2754.m_GlyphIndex = i2755[2]
  i2754.m_Scale = i2755[3]
  return i2754
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2761 = data
  var i2763 = i2761[0]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.add(request.d('TMPro.MultipleSubstitutionRecord', i2763[i + 0]));
  }
  i2760.m_MultipleSubstitutionRecords = i2762
  var i2765 = i2761[1]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.add(request.d('TMPro.LigatureSubstitutionRecord', i2765[i + 0]));
  }
  i2760.m_LigatureSubstitutionRecords = i2764
  var i2767 = i2761[2]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2767[i + 0]));
  }
  i2760.m_GlyphPairAdjustmentRecords = i2766
  var i2769 = i2761[3]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2769[i + 0]));
  }
  i2760.m_MarkToBaseAdjustmentRecords = i2768
  var i2771 = i2761[4]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2771[i + 0]));
  }
  i2760.m_MarkToMarkAdjustmentRecords = i2770
  return i2760
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2775 = data
  i2774.m_TargetGlyphID = i2775[0]
  i2774.m_SubstituteGlyphIDs = i2775[1]
  return i2774
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2779 = data
  i2778.m_ComponentGlyphIDs = i2779[0]
  i2778.m_LigatureGlyphID = i2779[1]
  return i2778
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2783 = data
  i2782.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2783[0], i2782.m_FirstAdjustmentRecord)
  i2782.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2783[1], i2782.m_SecondAdjustmentRecord)
  i2782.m_FeatureLookupFlags = i2783[2]
  return i2782
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2787 = data
  i2786.m_BaseGlyphID = i2787[0]
  i2786.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2787[1], i2786.m_BaseGlyphAnchorPoint)
  i2786.m_MarkGlyphID = i2787[2]
  i2786.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2787[3], i2786.m_MarkPositionAdjustment)
  return i2786
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2791 = data
  i2790.m_BaseMarkGlyphID = i2791[0]
  i2790.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2791[1], i2790.m_BaseMarkGlyphAnchorPoint)
  i2790.m_CombiningMarkGlyphID = i2791[2]
  i2790.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2791[3], i2790.m_CombiningMarkPositionAdjustment)
  return i2790
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'regularTypeface')
  request.r(i2797[2], i2797[3], 0, i2796, 'italicTypeface')
  return i2796
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2799 = data
  i2798.Name = i2799[0]
  i2798.PointSize = i2799[1]
  i2798.Scale = i2799[2]
  i2798.CharacterCount = i2799[3]
  i2798.LineHeight = i2799[4]
  i2798.Baseline = i2799[5]
  i2798.Ascender = i2799[6]
  i2798.CapHeight = i2799[7]
  i2798.Descender = i2799[8]
  i2798.CenterLine = i2799[9]
  i2798.SuperscriptOffset = i2799[10]
  i2798.SubscriptOffset = i2799[11]
  i2798.SubSize = i2799[12]
  i2798.Underline = i2799[13]
  i2798.UnderlineThickness = i2799[14]
  i2798.strikethrough = i2799[15]
  i2798.strikethroughThickness = i2799[16]
  i2798.TabWidth = i2799[17]
  i2798.Padding = i2799[18]
  i2798.AtlasWidth = i2799[19]
  i2798.AtlasHeight = i2799[20]
  return i2798
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2803 = data
  i2802.id = i2803[0]
  i2802.x = i2803[1]
  i2802.y = i2803[2]
  i2802.width = i2803[3]
  i2802.height = i2803[4]
  i2802.xOffset = i2803[5]
  i2802.yOffset = i2803[6]
  i2802.xAdvance = i2803[7]
  i2802.scale = i2803[8]
  return i2802
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.KerningTable' )
  var i2805 = data
  var i2807 = i2805[0]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('TMPro.KerningPair', i2807[i + 0]));
  }
  i2804.kerningPairs = i2806
  return i2804
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2810 = root || request.c( 'TMPro.KerningPair' )
  var i2811 = data
  i2810.xOffset = i2811[0]
  i2810.m_FirstGlyph = i2811[1]
  i2810.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2811[2], i2810.m_FirstGlyphAdjustments)
  i2810.m_SecondGlyph = i2811[3]
  i2810.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2811[4], i2810.m_SecondGlyphAdjustments)
  i2810.m_IgnoreSpacingAdjustments = !!i2811[5]
  return i2810
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2813 = data
  i2812.m_FaceIndex = i2813[0]
  i2812.m_FamilyName = i2813[1]
  i2812.m_StyleName = i2813[2]
  i2812.m_PointSize = i2813[3]
  i2812.m_Scale = i2813[4]
  i2812.m_UnitsPerEM = i2813[5]
  i2812.m_LineHeight = i2813[6]
  i2812.m_AscentLine = i2813[7]
  i2812.m_CapLine = i2813[8]
  i2812.m_MeanLine = i2813[9]
  i2812.m_Baseline = i2813[10]
  i2812.m_DescentLine = i2813[11]
  i2812.m_SuperscriptOffset = i2813[12]
  i2812.m_SuperscriptSize = i2813[13]
  i2812.m_SubscriptOffset = i2813[14]
  i2812.m_SubscriptSize = i2813[15]
  i2812.m_UnderlineOffset = i2813[16]
  i2812.m_UnderlineThickness = i2813[17]
  i2812.m_StrikethroughOffset = i2813[18]
  i2812.m_StrikethroughThickness = i2813[19]
  i2812.m_TabWidth = i2813[20]
  return i2812
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2815 = data
  i2814.useSafeMode = !!i2815[0]
  i2814.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2815[1], i2814.safeModeOptions)
  i2814.timeScale = i2815[2]
  i2814.unscaledTimeScale = i2815[3]
  i2814.useSmoothDeltaTime = !!i2815[4]
  i2814.maxSmoothUnscaledTime = i2815[5]
  i2814.rewindCallbackMode = i2815[6]
  i2814.showUnityEditorReport = !!i2815[7]
  i2814.logBehaviour = i2815[8]
  i2814.drawGizmos = !!i2815[9]
  i2814.defaultRecyclable = !!i2815[10]
  i2814.defaultAutoPlay = i2815[11]
  i2814.defaultUpdateType = i2815[12]
  i2814.defaultTimeScaleIndependent = !!i2815[13]
  i2814.defaultEaseType = i2815[14]
  i2814.defaultEaseOvershootOrAmplitude = i2815[15]
  i2814.defaultEasePeriod = i2815[16]
  i2814.defaultAutoKill = !!i2815[17]
  i2814.defaultLoopType = i2815[18]
  i2814.debugMode = !!i2815[19]
  i2814.debugStoreTargetId = !!i2815[20]
  i2814.showPreviewPanel = !!i2815[21]
  i2814.storeSettingsLocation = i2815[22]
  i2814.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2815[23], i2814.modules)
  i2814.createASMDEF = !!i2815[24]
  i2814.showPlayingTweens = !!i2815[25]
  i2814.showPausedTweens = !!i2815[26]
  return i2814
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2816 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2817 = data
  i2816.logBehaviour = i2817[0]
  i2816.nestedTweenFailureBehaviour = i2817[1]
  return i2816
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2819 = data
  i2818.showPanel = !!i2819[0]
  i2818.audioEnabled = !!i2819[1]
  i2818.physicsEnabled = !!i2819[2]
  i2818.physics2DEnabled = !!i2819[3]
  i2818.spriteEnabled = !!i2819[4]
  i2818.uiEnabled = !!i2819[5]
  i2818.textMeshProEnabled = !!i2819[6]
  i2818.tk2DEnabled = !!i2819[7]
  i2818.deAudioEnabled = !!i2819[8]
  i2818.deUnityExtendedEnabled = !!i2819[9]
  i2818.epoOutlineEnabled = !!i2819[10]
  return i2818
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_Settings' )
  var i2821 = data
  i2820.assetVersion = i2821[0]
  i2820.m_TextWrappingMode = i2821[1]
  i2820.m_enableKerning = !!i2821[2]
  var i2823 = i2821[3]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.add(i2823[i + 0]);
  }
  i2820.m_ActiveFontFeatures = i2822
  i2820.m_enableExtraPadding = !!i2821[4]
  i2820.m_enableTintAllSprites = !!i2821[5]
  i2820.m_enableParseEscapeCharacters = !!i2821[6]
  i2820.m_EnableRaycastTarget = !!i2821[7]
  i2820.m_GetFontFeaturesAtRuntime = !!i2821[8]
  i2820.m_missingGlyphCharacter = i2821[9]
  i2820.m_ClearDynamicDataOnBuild = !!i2821[10]
  i2820.m_warningsDisabled = !!i2821[11]
  request.r(i2821[12], i2821[13], 0, i2820, 'm_defaultFontAsset')
  i2820.m_defaultFontAssetPath = i2821[14]
  i2820.m_defaultFontSize = i2821[15]
  i2820.m_defaultAutoSizeMinRatio = i2821[16]
  i2820.m_defaultAutoSizeMaxRatio = i2821[17]
  i2820.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2821[18], i2821[19] )
  i2820.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2821[20], i2821[21] )
  i2820.m_autoSizeTextContainer = !!i2821[22]
  i2820.m_IsTextObjectScaleStatic = !!i2821[23]
  var i2825 = i2821[24]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 1, i2824, '')
  }
  i2820.m_fallbackFontAssets = i2824
  i2820.m_matchMaterialPreset = !!i2821[25]
  i2820.m_HideSubTextObjects = !!i2821[26]
  request.r(i2821[27], i2821[28], 0, i2820, 'm_defaultSpriteAsset')
  i2820.m_defaultSpriteAssetPath = i2821[29]
  i2820.m_enableEmojiSupport = !!i2821[30]
  i2820.m_MissingCharacterSpriteUnicode = i2821[31]
  var i2827 = i2821[32]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 1, i2826, '')
  }
  i2820.m_EmojiFallbackTextAssets = i2826
  i2820.m_defaultColorGradientPresetsPath = i2821[33]
  request.r(i2821[34], i2821[35], 0, i2820, 'm_defaultStyleSheet')
  i2820.m_StyleSheetsResourcePath = i2821[36]
  request.r(i2821[37], i2821[38], 0, i2820, 'm_leadingCharacters')
  request.r(i2821[39], i2821[40], 0, i2820, 'm_followingCharacters')
  i2820.m_UseModernHangulLineBreakingRules = !!i2821[41]
  return i2820
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'spriteSheet')
  var i2833 = i2831[2]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('TMPro.TMP_Sprite', i2833[i + 0]));
  }
  i2830.spriteInfoList = i2832
  var i2835 = i2831[3]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 1, i2834, '')
  }
  i2830.fallbackSpriteAssets = i2834
  var i2837 = i2831[4]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.add(request.d('TMPro.TMP_SpriteCharacter', i2837[i + 0]));
  }
  i2830.m_SpriteCharacterTable = i2836
  var i2839 = i2831[5]
  var i2838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.add(request.d('TMPro.TMP_SpriteGlyph', i2839[i + 0]));
  }
  i2830.m_GlyphTable = i2838
  i2830.m_Version = i2831[6]
  i2830.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2831[7], i2830.m_FaceInfo)
  request.r(i2831[8], i2831[9], 0, i2830, 'm_Material')
  return i2830
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2843 = data
  i2842.name = i2843[0]
  i2842.hashCode = i2843[1]
  i2842.unicode = i2843[2]
  i2842.pivot = new pc.Vec2( i2843[3], i2843[4] )
  request.r(i2843[5], i2843[6], 0, i2842, 'sprite')
  i2842.id = i2843[7]
  i2842.x = i2843[8]
  i2842.y = i2843[9]
  i2842.width = i2843[10]
  i2842.height = i2843[11]
  i2842.xOffset = i2843[12]
  i2842.yOffset = i2843[13]
  i2842.xAdvance = i2843[14]
  i2842.scale = i2843[15]
  return i2842
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2848 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2849 = data
  i2848.m_Name = i2849[0]
  i2848.m_ElementType = i2849[1]
  i2848.m_Unicode = i2849[2]
  i2848.m_GlyphIndex = i2849[3]
  i2848.m_Scale = i2849[4]
  return i2848
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2852 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2853 = data
  request.r(i2853[0], i2853[1], 0, i2852, 'sprite')
  i2852.m_Index = i2853[2]
  i2852.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2853[3], i2852.m_Metrics)
  i2852.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2853[4], i2852.m_GlyphRect)
  i2852.m_Scale = i2853[5]
  i2852.m_AtlasIndex = i2853[6]
  i2852.m_ClassDefinitionType = i2853[7]
  return i2852
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('TMPro.TMP_Style', i2857[i + 0]));
  }
  i2854.m_StyleList = i2856
  return i2854
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.TMP_Style' )
  var i2861 = data
  i2860.m_Name = i2861[0]
  i2860.m_HashCode = i2861[1]
  i2860.m_OpeningDefinition = i2861[2]
  i2860.m_ClosingDefinition = i2861[3]
  i2860.m_OpeningTagArray = i2861[4]
  i2860.m_ClosingTagArray = i2861[5]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2863 = data
  var i2865 = i2863[0]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2865[i + 0]) );
  }
  i2862.files = i2864
  i2862.componentToPrefabIds = i2863[1]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2869 = data
  i2868.path = i2869[0]
  request.r(i2869[1], i2869[2], 0, i2868, 'unityObject')
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2873[i + 0]) );
  }
  i2870.scriptsExecutionOrder = i2872
  var i2875 = i2871[1]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2875[i + 0]) );
  }
  i2870.sortingLayers = i2874
  var i2877 = i2871[2]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2877[i + 0]) );
  }
  i2870.cullingLayers = i2876
  i2870.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2871[3], i2870.timeSettings)
  i2870.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2871[4], i2870.physicsSettings)
  i2870.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2871[5], i2870.physics2DSettings)
  i2870.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2871[6], i2870.qualitySettings)
  i2870.enableRealtimeShadows = !!i2871[7]
  i2870.enableAutoInstancing = !!i2871[8]
  i2870.enableStaticBatching = !!i2871[9]
  i2870.enableDynamicBatching = !!i2871[10]
  i2870.usePreservativeDynamicBatching = !!i2871[11]
  i2870.lightmapEncodingQuality = i2871[12]
  i2870.desiredColorSpace = i2871[13]
  var i2879 = i2871[14]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( i2879[i + 0] );
  }
  i2870.allTags = i2878
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2883 = data
  i2882.name = i2883[0]
  i2882.value = i2883[1]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2887 = data
  i2886.id = i2887[0]
  i2886.name = i2887[1]
  i2886.value = i2887[2]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2891 = data
  i2890.id = i2891[0]
  i2890.name = i2891[1]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2893 = data
  i2892.fixedDeltaTime = i2893[0]
  i2892.maximumDeltaTime = i2893[1]
  i2892.timeScale = i2893[2]
  i2892.maximumParticleTimestep = i2893[3]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2895 = data
  i2894.gravity = new pc.Vec3( i2895[0], i2895[1], i2895[2] )
  i2894.defaultSolverIterations = i2895[3]
  i2894.bounceThreshold = i2895[4]
  i2894.autoSyncTransforms = !!i2895[5]
  i2894.autoSimulation = !!i2895[6]
  var i2897 = i2895[7]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2897[i + 0]) );
  }
  i2894.collisionMatrix = i2896
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.layerId = i2901[1]
  i2900.otherLayerId = i2901[2]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2903 = data
  request.r(i2903[0], i2903[1], 0, i2902, 'material')
  i2902.gravity = new pc.Vec2( i2903[2], i2903[3] )
  i2902.positionIterations = i2903[4]
  i2902.velocityIterations = i2903[5]
  i2902.velocityThreshold = i2903[6]
  i2902.maxLinearCorrection = i2903[7]
  i2902.maxAngularCorrection = i2903[8]
  i2902.maxTranslationSpeed = i2903[9]
  i2902.maxRotationSpeed = i2903[10]
  i2902.baumgarteScale = i2903[11]
  i2902.baumgarteTOIScale = i2903[12]
  i2902.timeToSleep = i2903[13]
  i2902.linearSleepTolerance = i2903[14]
  i2902.angularSleepTolerance = i2903[15]
  i2902.defaultContactOffset = i2903[16]
  i2902.autoSimulation = !!i2903[17]
  i2902.queriesHitTriggers = !!i2903[18]
  i2902.queriesStartInColliders = !!i2903[19]
  i2902.callbacksOnDisable = !!i2903[20]
  i2902.reuseCollisionCallbacks = !!i2903[21]
  i2902.autoSyncTransforms = !!i2903[22]
  var i2905 = i2903[23]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2905[i + 0]) );
  }
  i2902.collisionMatrix = i2904
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2909 = data
  i2908.enabled = !!i2909[0]
  i2908.layerId = i2909[1]
  i2908.otherLayerId = i2909[2]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2911 = data
  var i2913 = i2911[0]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2913[i + 0]) );
  }
  i2910.qualityLevels = i2912
  var i2915 = i2911[1]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( i2915[i + 0] );
  }
  i2910.names = i2914
  i2910.shadows = i2911[2]
  i2910.anisotropicFiltering = i2911[3]
  i2910.antiAliasing = i2911[4]
  i2910.lodBias = i2911[5]
  i2910.shadowCascades = i2911[6]
  i2910.shadowDistance = i2911[7]
  i2910.shadowmaskMode = i2911[8]
  i2910.shadowProjection = i2911[9]
  i2910.shadowResolution = i2911[10]
  i2910.softParticles = !!i2911[11]
  i2910.softVegetation = !!i2911[12]
  i2910.activeColorSpace = i2911[13]
  i2910.desiredColorSpace = i2911[14]
  i2910.masterTextureLimit = i2911[15]
  i2910.maxQueuedFrames = i2911[16]
  i2910.particleRaycastBudget = i2911[17]
  i2910.pixelLightCount = i2911[18]
  i2910.realtimeReflectionProbes = !!i2911[19]
  i2910.shadowCascade2Split = i2911[20]
  i2910.shadowCascade4Split = new pc.Vec3( i2911[21], i2911[22], i2911[23] )
  i2910.streamingMipmapsActive = !!i2911[24]
  i2910.vSyncCount = i2911[25]
  i2910.asyncUploadBufferSize = i2911[26]
  i2910.asyncUploadTimeSlice = i2911[27]
  i2910.billboardsFaceCameraPosition = !!i2911[28]
  i2910.shadowNearPlaneOffset = i2911[29]
  i2910.streamingMipmapsMemoryBudget = i2911[30]
  i2910.maximumLODLevel = i2911[31]
  i2910.streamingMipmapsAddAllCameras = !!i2911[32]
  i2910.streamingMipmapsMaxLevelReduction = i2911[33]
  i2910.streamingMipmapsRenderersPerFrame = i2911[34]
  i2910.resolutionScalingFixedDPIFactor = i2911[35]
  i2910.streamingMipmapsMaxFileIORequests = i2911[36]
  i2910.currentQualityLevel = i2911[37]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2919 = data
  i2918.name = i2919[0]
  var i2921 = i2919[1]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2921[i + 0]) );
  }
  i2918.tos = i2920
  var i2923 = i2919[2]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( i2923[i + 0] );
  }
  i2918.constant = i2922
  i2918.isValid = !!i2919[3]
  i2918.isHuman = !!i2919[4]
  i2918.hasRootMotion = !!i2919[5]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2927 = data
  i2926.hash = i2927[0]
  i2926.path = i2927[1]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2931 = data
  i2930.weight = i2931[0]
  i2930.vertices = i2931[1]
  i2930.normals = i2931[2]
  i2930.tangents = i2931[3]
  return i2930
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2933 = data
  request.r(i2933[0], i2933[1], 0, i2932, 'm_ObjectArgument')
  i2932.m_ObjectArgumentAssemblyTypeName = i2933[2]
  i2932.m_IntArgument = i2933[3]
  i2932.m_FloatArgument = i2933[4]
  i2932.m_StringArgument = i2933[5]
  i2932.m_BoolArgument = !!i2933[6]
  return i2932
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2934 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2935 = data
  i2934.m_GlyphIndex = i2935[0]
  i2934.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2935[1], i2934.m_GlyphValueRecord)
  return i2934
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2937 = data
  i2936.m_XCoordinate = i2937[0]
  i2936.m_YCoordinate = i2937[1]
  return i2936
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2939 = data
  i2938.m_XPositionAdjustment = i2939[0]
  i2938.m_YPositionAdjustment = i2939[1]
  return i2938
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2940 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2941 = data
  i2940.xPlacement = i2941[0]
  i2940.yPlacement = i2941[1]
  i2940.xAdvance = i2941[2]
  i2940.yAdvance = i2941[3]
  return i2940
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2942 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2943 = data
  i2942.m_XPlacement = i2943[0]
  i2942.m_YPlacement = i2943[1]
  i2942.m_XAdvance = i2943[2]
  i2942.m_YAdvance = i2943[3]
  return i2942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[52],"78":[56],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[56],"100":[37],"101":[102],"103":[102],"7":[6],"11":[8],"104":[6],"105":[37,6],"19":[6,13],"106":[6],"107":[13,6],"108":[37],"109":[13,6],"110":[6],"111":[112],"113":[112],"114":[112],"115":[6],"116":[6],"9":[7],"14":[13,6],"27":[6],"8":[7],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"18":[6],"124":[6],"125":[13,6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[13,6],"131":[6],"132":[4],"133":[4],"5":[4],"134":[4],"135":[56],"136":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","SelectPanel","UnityEngine.GameObject","UnityEngine.UI.AspectRatioFitter","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "21.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V06_HoaiTT_HuyNQ";

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

Deserializers.buildID = "b879382a-7711-4ec7-a3f2-4137370461c3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

