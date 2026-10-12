var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointSpring' )
  var i2197 = data
  i2196.spring = i2197[0]
  i2196.damper = i2197[1]
  i2196.targetPosition = i2197[2]
  return i2196
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointMotor' )
  var i2199 = data
  i2198.m_TargetVelocity = i2199[0]
  i2198.m_Force = i2199[1]
  i2198.m_FreeSpin = i2199[2]
  return i2198
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointLimits' )
  var i2201 = data
  i2200.m_Min = i2201[0]
  i2200.m_Max = i2201[1]
  i2200.m_Bounciness = i2201[2]
  i2200.m_BounceMinVelocity = i2201[3]
  i2200.m_ContactDistance = i2201[4]
  i2200.minBounce = i2201[5]
  i2200.maxBounce = i2201[6]
  return i2200
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointDrive' )
  var i2203 = data
  i2202.m_PositionSpring = i2203[0]
  i2202.m_PositionDamper = i2203[1]
  i2202.m_MaximumForce = i2203[2]
  i2202.m_UseAcceleration = i2203[3]
  return i2202
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2205 = data
  i2204.m_Spring = i2205[0]
  i2204.m_Damper = i2205[1]
  return i2204
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2207 = data
  i2206.m_Limit = i2207[0]
  i2206.m_Bounciness = i2207[1]
  i2206.m_ContactDistance = i2207[2]
  return i2206
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2209 = data
  i2208.m_ExtremumSlip = i2209[0]
  i2208.m_ExtremumValue = i2209[1]
  i2208.m_AsymptoteSlip = i2209[2]
  i2208.m_AsymptoteValue = i2209[3]
  i2208.m_Stiffness = i2209[4]
  return i2208
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2211 = data
  i2210.m_LowerAngle = i2211[0]
  i2210.m_UpperAngle = i2211[1]
  return i2210
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2213 = data
  i2212.m_MotorSpeed = i2213[0]
  i2212.m_MaximumMotorTorque = i2213[1]
  return i2212
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2215 = data
  i2214.m_DampingRatio = i2215[0]
  i2214.m_Frequency = i2215[1]
  i2214.m_Angle = i2215[2]
  return i2214
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2217 = data
  i2216.m_LowerTranslation = i2217[0]
  i2216.m_UpperTranslation = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.width = i2219[1]
  i2218.height = i2219[2]
  i2218.mipmapCount = i2219[3]
  i2218.anisoLevel = i2219[4]
  i2218.filterMode = i2219[5]
  i2218.hdr = !!i2219[6]
  i2218.format = i2219[7]
  i2218.wrapMode = i2219[8]
  i2218.alphaIsTransparency = !!i2219[9]
  i2218.alphaSource = i2219[10]
  i2218.graphicsFormat = i2219[11]
  i2218.sRGBTexture = !!i2219[12]
  i2218.desiredColorSpace = i2219[13]
  i2218.wrapU = i2219[14]
  i2218.wrapV = i2219[15]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2220 = root || new pc.UnityMaterial()
  var i2221 = data
  i2220.name = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'shader')
  i2220.renderQueue = i2221[3]
  i2220.enableInstancing = !!i2221[4]
  var i2223 = i2221[5]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2223[i + 0]) );
  }
  i2220.floatParameters = i2222
  var i2225 = i2221[6]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2225[i + 0]) );
  }
  i2220.colorParameters = i2224
  var i2227 = i2221[7]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2227[i + 0]) );
  }
  i2220.vectorParameters = i2226
  var i2229 = i2221[8]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2229[i + 0]) );
  }
  i2220.textureParameters = i2228
  var i2231 = i2221[9]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2231[i + 0]) );
  }
  i2220.materialFlags = i2230
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.value = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.value = new pc.Color(i2239[1], i2239[2], i2239[3], i2239[4])
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.value = new pc.Vec4( i2243[1], i2243[2], i2243[3], i2243[4] )
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2247 = data
  i2246.name = i2247[0]
  request.r(i2247[1], i2247[2], 0, i2246, 'value')
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.enabled = !!i2251[1]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2253 = data
  i2252.position = new pc.Vec3( i2253[0], i2253[1], i2253[2] )
  i2252.scale = new pc.Vec3( i2253[3], i2253[4], i2253[5] )
  i2252.rotation = new pc.Quat(i2253[6], i2253[7], i2253[8], i2253[9])
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'sharedMesh')
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'additionalVertexStreams')
  i2256.enabled = !!i2257[2]
  request.r(i2257[3], i2257[4], 0, i2256, 'sharedMaterial')
  var i2259 = i2257[5]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.sharedMaterials = i2258
  i2256.receiveShadows = !!i2257[6]
  i2256.shadowCastingMode = i2257[7]
  i2256.sortingLayerID = i2257[8]
  i2256.sortingOrder = i2257[9]
  i2256.lightmapIndex = i2257[10]
  i2256.lightmapSceneIndex = i2257[11]
  i2256.lightmapScaleOffset = new pc.Vec4( i2257[12], i2257[13], i2257[14], i2257[15] )
  i2256.lightProbeUsage = i2257[16]
  i2256.reflectionProbeUsage = i2257[17]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.tagId = i2263[1]
  i2262.enabled = !!i2263[2]
  i2262.isStatic = !!i2263[3]
  i2262.layer = i2263[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2301 = data
  i2300.pivot = new pc.Vec2( i2301[0], i2301[1] )
  i2300.anchorMin = new pc.Vec2( i2301[2], i2301[3] )
  i2300.anchorMax = new pc.Vec2( i2301[4], i2301[5] )
  i2300.sizeDelta = new pc.Vec2( i2301[6], i2301[7] )
  i2300.anchoredPosition3D = new pc.Vec3( i2301[8], i2301[9], i2301[10] )
  i2300.rotation = new pc.Quat(i2301[11], i2301[12], i2301[13], i2301[14])
  i2300.scale = new pc.Vec3( i2301[15], i2301[16], i2301[17] )
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2303 = data
  i2302.planeDistance = i2303[0]
  i2302.referencePixelsPerUnit = i2303[1]
  i2302.isFallbackOverlay = !!i2303[2]
  i2302.renderMode = i2303[3]
  i2302.renderOrder = i2303[4]
  i2302.sortingLayerName = i2303[5]
  i2302.sortingOrder = i2303[6]
  i2302.scaleFactor = i2303[7]
  request.r(i2303[8], i2303[9], 0, i2302, 'worldCamera')
  i2302.overrideSorting = !!i2303[10]
  i2302.pixelPerfect = !!i2303[11]
  i2302.targetDisplay = i2303[12]
  i2302.overridePixelPerfect = !!i2303[13]
  i2302.enabled = !!i2303[14]
  return i2302
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2305 = data
  i2304.m_UiScaleMode = i2305[0]
  i2304.m_ReferencePixelsPerUnit = i2305[1]
  i2304.m_ScaleFactor = i2305[2]
  i2304.m_ReferenceResolution = new pc.Vec2( i2305[3], i2305[4] )
  i2304.m_ScreenMatchMode = i2305[5]
  i2304.m_MatchWidthOrHeight = i2305[6]
  i2304.m_PhysicalUnit = i2305[7]
  i2304.m_FallbackScreenDPI = i2305[8]
  i2304.m_DefaultSpriteDPI = i2305[9]
  i2304.m_DynamicPixelsPerUnit = i2305[10]
  i2304.m_PresetInfoIsWorld = !!i2305[11]
  return i2304
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2307 = data
  i2306.m_IgnoreReversedGraphics = !!i2307[0]
  i2306.m_BlockingObjects = i2307[1]
  i2306.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2307[2] )
  return i2306
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2308 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2309 = data
  i2308._referenceResolution = new pc.Vec2( i2309[0], i2309[1] )
  i2308._portraitMatch = i2309[2]
  i2308._landscapeMatch = i2309[3]
  i2308._squareMatch = i2309[4]
  i2308._portraitAspectThreshold = i2309[5]
  i2308._landscapeAspectThreshold = i2309[6]
  i2308._aspectEpsilon = i2309[7]
  return i2308
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2310 = root || request.c( 'Joystick' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'background')
  request.r(i2311[2], i2311[3], 0, i2310, 'joy')
  i2310.deadZone = i2311[4]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2313 = data
  i2312.cullTransparentMesh = !!i2313[0]
  return i2312
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.Image' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'm_Sprite')
  i2314.m_Type = i2315[2]
  i2314.m_PreserveAspect = !!i2315[3]
  i2314.m_FillCenter = !!i2315[4]
  i2314.m_FillMethod = i2315[5]
  i2314.m_FillAmount = i2315[6]
  i2314.m_FillClockwise = !!i2315[7]
  i2314.m_FillOrigin = i2315[8]
  i2314.m_UseSpriteMesh = !!i2315[9]
  i2314.m_PixelsPerUnitMultiplier = i2315[10]
  request.r(i2315[11], i2315[12], 0, i2314, 'm_Material')
  i2314.m_Maskable = !!i2315[13]
  i2314.m_Color = new pc.Color(i2315[14], i2315[15], i2315[16], i2315[17])
  i2314.m_RaycastTarget = !!i2315[18]
  i2314.m_RaycastPadding = new pc.Vec4( i2315[19], i2315[20], i2315[21], i2315[22] )
  return i2314
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.Button' )
  var i2317 = data
  i2316.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2317[0], i2316.m_OnClick)
  i2316.m_Navigation = request.d('UnityEngine.UI.Navigation', i2317[1], i2316.m_Navigation)
  i2316.m_Transition = i2317[2]
  i2316.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2317[3], i2316.m_Colors)
  i2316.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2317[4], i2316.m_SpriteState)
  i2316.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2317[5], i2316.m_AnimationTriggers)
  i2316.m_Interactable = !!i2317[6]
  request.r(i2317[7], i2317[8], 0, i2316, 'm_TargetGraphic')
  return i2316
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2319 = data
  i2318.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2319[0], i2318.m_PersistentCalls)
  return i2318
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.add(request.d('UnityEngine.Events.PersistentCall', i2323[i + 0]));
  }
  i2320.m_Calls = i2322
  return i2320
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_Target')
  i2326.m_TargetAssemblyTypeName = i2327[2]
  i2326.m_MethodName = i2327[3]
  i2326.m_Mode = i2327[4]
  i2326.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2327[5], i2326.m_Arguments)
  i2326.m_CallState = i2327[6]
  return i2326
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2329 = data
  i2328.m_Mode = i2329[0]
  i2328.m_WrapAround = !!i2329[1]
  request.r(i2329[2], i2329[3], 0, i2328, 'm_SelectOnUp')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_SelectOnDown')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_SelectOnLeft')
  request.r(i2329[8], i2329[9], 0, i2328, 'm_SelectOnRight')
  return i2328
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2331 = data
  i2330.m_NormalColor = new pc.Color(i2331[0], i2331[1], i2331[2], i2331[3])
  i2330.m_HighlightedColor = new pc.Color(i2331[4], i2331[5], i2331[6], i2331[7])
  i2330.m_PressedColor = new pc.Color(i2331[8], i2331[9], i2331[10], i2331[11])
  i2330.m_SelectedColor = new pc.Color(i2331[12], i2331[13], i2331[14], i2331[15])
  i2330.m_DisabledColor = new pc.Color(i2331[16], i2331[17], i2331[18], i2331[19])
  i2330.m_ColorMultiplier = i2331[20]
  i2330.m_FadeDuration = i2331[21]
  return i2330
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_HighlightedSprite')
  request.r(i2333[2], i2333[3], 0, i2332, 'm_PressedSprite')
  request.r(i2333[4], i2333[5], 0, i2332, 'm_SelectedSprite')
  request.r(i2333[6], i2333[7], 0, i2332, 'm_DisabledSprite')
  return i2332
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2335 = data
  i2334.m_NormalTrigger = i2335[0]
  i2334.m_HighlightedTrigger = i2335[1]
  i2334.m_PressedTrigger = i2335[2]
  i2334.m_SelectedTrigger = i2335[3]
  i2334.m_DisabledTrigger = i2335[4]
  return i2334
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2336 = root || request.c( 'JumpButton' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'button')
  return i2336
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2339 = data
  i2338.m_ShowMaskGraphic = !!i2339[0]
  return i2338
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2340 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2341 = data
  i2340.m_hasFontAssetChanged = !!i2341[0]
  request.r(i2341[1], i2341[2], 0, i2340, 'm_baseMaterial')
  i2340.m_maskOffset = new pc.Vec4( i2341[3], i2341[4], i2341[5], i2341[6] )
  i2340.m_text = i2341[7]
  i2340.m_isRightToLeft = !!i2341[8]
  request.r(i2341[9], i2341[10], 0, i2340, 'm_fontAsset')
  request.r(i2341[11], i2341[12], 0, i2340, 'm_sharedMaterial')
  var i2343 = i2341[13]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2340.m_fontSharedMaterials = i2342
  request.r(i2341[14], i2341[15], 0, i2340, 'm_fontMaterial')
  var i2345 = i2341[16]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 2, i2344, '')
  }
  i2340.m_fontMaterials = i2344
  i2340.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2341[17], i2341[18], i2341[19], i2341[20])
  i2340.m_fontColor = new pc.Color(i2341[21], i2341[22], i2341[23], i2341[24])
  i2340.m_enableVertexGradient = !!i2341[25]
  i2340.m_colorMode = i2341[26]
  i2340.m_fontColorGradient = request.d('TMPro.VertexGradient', i2341[27], i2340.m_fontColorGradient)
  request.r(i2341[28], i2341[29], 0, i2340, 'm_fontColorGradientPreset')
  request.r(i2341[30], i2341[31], 0, i2340, 'm_spriteAsset')
  i2340.m_tintAllSprites = !!i2341[32]
  request.r(i2341[33], i2341[34], 0, i2340, 'm_StyleSheet')
  i2340.m_TextStyleHashCode = i2341[35]
  i2340.m_overrideHtmlColors = !!i2341[36]
  i2340.m_faceColor = UnityEngine.Color32.ConstructColor(i2341[37], i2341[38], i2341[39], i2341[40])
  i2340.m_fontSize = i2341[41]
  i2340.m_fontSizeBase = i2341[42]
  i2340.m_fontWeight = i2341[43]
  i2340.m_enableAutoSizing = !!i2341[44]
  i2340.m_fontSizeMin = i2341[45]
  i2340.m_fontSizeMax = i2341[46]
  i2340.m_fontStyle = i2341[47]
  i2340.m_HorizontalAlignment = i2341[48]
  i2340.m_VerticalAlignment = i2341[49]
  i2340.m_textAlignment = i2341[50]
  i2340.m_characterSpacing = i2341[51]
  i2340.m_wordSpacing = i2341[52]
  i2340.m_lineSpacing = i2341[53]
  i2340.m_lineSpacingMax = i2341[54]
  i2340.m_paragraphSpacing = i2341[55]
  i2340.m_charWidthMaxAdj = i2341[56]
  i2340.m_TextWrappingMode = i2341[57]
  i2340.m_wordWrappingRatios = i2341[58]
  i2340.m_overflowMode = i2341[59]
  request.r(i2341[60], i2341[61], 0, i2340, 'm_linkedTextComponent')
  request.r(i2341[62], i2341[63], 0, i2340, 'parentLinkedComponent')
  i2340.m_enableKerning = !!i2341[64]
  var i2347 = i2341[65]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(i2347[i + 0]);
  }
  i2340.m_ActiveFontFeatures = i2346
  i2340.m_enableExtraPadding = !!i2341[66]
  i2340.checkPaddingRequired = !!i2341[67]
  i2340.m_isRichText = !!i2341[68]
  i2340.m_parseCtrlCharacters = !!i2341[69]
  i2340.m_isOrthographic = !!i2341[70]
  i2340.m_isCullingEnabled = !!i2341[71]
  i2340.m_horizontalMapping = i2341[72]
  i2340.m_verticalMapping = i2341[73]
  i2340.m_uvLineOffset = i2341[74]
  i2340.m_geometrySortingOrder = i2341[75]
  i2340.m_IsTextObjectScaleStatic = !!i2341[76]
  i2340.m_VertexBufferAutoSizeReduction = !!i2341[77]
  i2340.m_useMaxVisibleDescender = !!i2341[78]
  i2340.m_pageToDisplay = i2341[79]
  i2340.m_margin = new pc.Vec4( i2341[80], i2341[81], i2341[82], i2341[83] )
  i2340.m_isUsingLegacyAnimationComponent = !!i2341[84]
  i2340.m_isVolumetricText = !!i2341[85]
  request.r(i2341[86], i2341[87], 0, i2340, 'm_Material')
  i2340.m_EmojiFallbackSupport = !!i2341[88]
  i2340.m_Maskable = !!i2341[89]
  i2340.m_Color = new pc.Color(i2341[90], i2341[91], i2341[92], i2341[93])
  i2340.m_RaycastTarget = !!i2341[94]
  i2340.m_RaycastPadding = new pc.Vec4( i2341[95], i2341[96], i2341[97], i2341[98] )
  return i2340
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2348 = root || request.c( 'TMPro.VertexGradient' )
  var i2349 = data
  i2348.topLeft = new pc.Color(i2349[0], i2349[1], i2349[2], i2349[3])
  i2348.topRight = new pc.Color(i2349[4], i2349[5], i2349[6], i2349[7])
  i2348.bottomLeft = new pc.Color(i2349[8], i2349[9], i2349[10], i2349[11])
  i2348.bottomRight = new pc.Color(i2349[12], i2349[13], i2349[14], i2349[15])
  return i2348
}

Deserializers["TutController"] = function (request, data, root) {
  var i2352 = root || request.c( 'TutController' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'tutScene')
  request.r(i2353[2], i2353[3], 0, i2352, 'startTut')
  request.r(i2353[4], i2353[5], 0, i2352, 'playTut')
  request.r(i2353[6], i2353[7], 0, i2352, 'farTut')
  request.r(i2353[8], i2353[9], 0, i2352, 'failTut')
  return i2352
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2354 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2355 = data
  i2354.targetIsSelf = !!i2355[0]
  request.r(i2355[1], i2355[2], 0, i2354, 'targetGO')
  i2354.tweenTargetIsTargetGO = !!i2355[3]
  i2354.delay = i2355[4]
  i2354.duration = i2355[5]
  i2354.easeType = i2355[6]
  i2354.easeCurve = new pc.AnimationCurve( { keys_flow: i2355[7] } )
  i2354.loopType = i2355[8]
  i2354.loops = i2355[9]
  i2354.id = i2355[10]
  i2354.isRelative = !!i2355[11]
  i2354.isFrom = !!i2355[12]
  i2354.isIndependentUpdate = !!i2355[13]
  i2354.autoKill = !!i2355[14]
  i2354.autoGenerate = !!i2355[15]
  i2354.isActive = !!i2355[16]
  i2354.isValid = !!i2355[17]
  request.r(i2355[18], i2355[19], 0, i2354, 'target')
  i2354.animationType = i2355[20]
  i2354.targetType = i2355[21]
  i2354.forcedTargetType = i2355[22]
  i2354.autoPlay = !!i2355[23]
  i2354.useTargetAsV3 = !!i2355[24]
  i2354.endValueFloat = i2355[25]
  i2354.endValueV3 = new pc.Vec3( i2355[26], i2355[27], i2355[28] )
  i2354.endValueV2 = new pc.Vec2( i2355[29], i2355[30] )
  i2354.endValueColor = new pc.Color(i2355[31], i2355[32], i2355[33], i2355[34])
  i2354.endValueString = i2355[35]
  i2354.endValueRect = UnityEngine.Rect.MinMaxRect(i2355[36], i2355[37], i2355[38], i2355[39])
  request.r(i2355[40], i2355[41], 0, i2354, 'endValueTransform')
  i2354.optionalBool0 = !!i2355[42]
  i2354.optionalBool1 = !!i2355[43]
  i2354.optionalFloat0 = i2355[44]
  i2354.optionalInt0 = i2355[45]
  i2354.optionalRotationMode = i2355[46]
  i2354.optionalScrambleMode = i2355[47]
  i2354.optionalShakeRandomnessMode = i2355[48]
  i2354.optionalString = i2355[49]
  i2354.updateType = i2355[50]
  i2354.isSpeedBased = !!i2355[51]
  i2354.hasOnStart = !!i2355[52]
  i2354.hasOnPlay = !!i2355[53]
  i2354.hasOnUpdate = !!i2355[54]
  i2354.hasOnStepComplete = !!i2355[55]
  i2354.hasOnComplete = !!i2355[56]
  i2354.hasOnTweenCreated = !!i2355[57]
  i2354.hasOnRewind = !!i2355[58]
  i2354.onStart = request.d('UnityEngine.Events.UnityEvent', i2355[59], i2354.onStart)
  i2354.onPlay = request.d('UnityEngine.Events.UnityEvent', i2355[60], i2354.onPlay)
  i2354.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2355[61], i2354.onUpdate)
  i2354.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2355[62], i2354.onStepComplete)
  i2354.onComplete = request.d('UnityEngine.Events.UnityEvent', i2355[63], i2354.onComplete)
  i2354.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2355[64], i2354.onTweenCreated)
  i2354.onRewind = request.d('UnityEngine.Events.UnityEvent', i2355[65], i2354.onRewind)
  return i2354
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2357 = data
  i2356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2357[0], i2356.m_PersistentCalls)
  return i2356
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2358 = root || request.c( 'HideOnPointer' )
  var i2359 = data
  i2358.OnPointerDownEvent = request.d('System.Action', i2359[0], i2358.OnPointerDownEvent)
  return i2358
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2360 = root || request.c( 'System.Action' )
  var i2361 = data
  return i2360
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i2362 = root || request.c( 'MorphSelectionFlow' )
  var i2363 = data
  var i2365 = i2363[0]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('MorphSelectionFlow+Morph', i2365[i + 0]) );
  }
  i2362.morphs = i2364
  request.r(i2363[1], i2363[2], 0, i2362, 'selectionPanel')
  request.r(i2363[3], i2363[4], 0, i2362, 'previewPanel')
  request.r(i2363[5], i2363[6], 0, i2362, 'backdrop')
  request.r(i2363[7], i2363[8], 0, i2362, 'previewImage')
  i2362.previewPortraitSize = new pc.Vec2( i2363[9], i2363[10] )
  request.r(i2363[11], i2363[12], 0, i2362, 'aura')
  request.r(i2363[13], i2363[14], 0, i2362, 'selectButton')
  request.r(i2363[15], i2363[16], 0, i2362, 'unlockedMessage')
  request.r(i2363[17], i2363[18], 0, i2362, 'revealCamera')
  request.r(i2363[19], i2363[20], 0, i2362, 'spawnPoint')
  var i2367 = i2363[21]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2362.hideOnStart = i2366
  var i2369 = i2363[22]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 2, i2368, '')
  }
  i2362.disableOnStart = i2368
  i2362.orbitDuration = i2363[23]
  i2362.unlockedMessageDuration = i2363[24]
  i2362.auraSpeed = i2363[25]
  request.r(i2363[26], i2363[27], 0, i2362, 'auraSfx')
  request.r(i2363[28], i2363[29], 0, i2362, 'orbitSfx')
  return i2362
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i2372 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'prefab')
  request.r(i2373[2], i2373[3], 0, i2372, 'portrait')
  request.r(i2373[4], i2373[5], 0, i2372, 'card')
  request.r(i2373[6], i2373[7], 0, i2372, 'unlockedBadge')
  return i2372
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i2378 = root || request.c( 'MorphTitlePulse' )
  var i2379 = data
  i2378.scaleMultiplier = i2379[0]
  i2378.duration = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2381 = data
  i2380.center = new pc.Vec3( i2381[0], i2381[1], i2381[2] )
  i2380.size = new pc.Vec3( i2381[3], i2381[4], i2381[5] )
  i2380.enabled = !!i2381[6]
  i2380.isTrigger = !!i2381[7]
  request.r(i2381[8], i2381[9], 0, i2380, 'material')
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2383 = data
  i2382.mass = i2383[0]
  i2382.drag = i2383[1]
  i2382.angularDrag = i2383[2]
  i2382.useGravity = !!i2383[3]
  i2382.isKinematic = !!i2383[4]
  i2382.constraints = i2383[5]
  i2382.maxAngularVelocity = i2383[6]
  i2382.collisionDetectionMode = i2383[7]
  i2382.interpolation = i2383[8]
  return i2382
}

Deserializers["Gift"] = function (request, data, root) {
  var i2384 = root || request.c( 'Gift' )
  var i2385 = data
  i2384.collectDone = !!i2385[0]
  var i2387 = i2385[1]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2384.hints = i2386
  request.r(i2385[2], i2385[3], 0, i2384, 'collectSound')
  request.r(i2385[4], i2385[5], 0, i2384, 'collectEffect')
  request.r(i2385[6], i2385[7], 0, i2384, 'arrow')
  return i2384
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2390 = root || request.c( 'SoundHint' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'Sound')
  request.r(i2391[2], i2391[3], 0, i2390, 'Source')
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'mesh')
  i2392.meshCount = i2393[2]
  i2392.activeVertexStreamsCount = i2393[3]
  i2392.alignment = i2393[4]
  i2392.renderMode = i2393[5]
  i2392.sortMode = i2393[6]
  i2392.lengthScale = i2393[7]
  i2392.velocityScale = i2393[8]
  i2392.cameraVelocityScale = i2393[9]
  i2392.normalDirection = i2393[10]
  i2392.sortingFudge = i2393[11]
  i2392.minParticleSize = i2393[12]
  i2392.maxParticleSize = i2393[13]
  i2392.pivot = new pc.Vec3( i2393[14], i2393[15], i2393[16] )
  request.r(i2393[17], i2393[18], 0, i2392, 'trailMaterial')
  i2392.applyActiveColorSpace = !!i2393[19]
  i2392.enabled = !!i2393[20]
  request.r(i2393[21], i2393[22], 0, i2392, 'sharedMaterial')
  var i2395 = i2393[23]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2392.sharedMaterials = i2394
  i2392.receiveShadows = !!i2393[24]
  i2392.shadowCastingMode = i2393[25]
  i2392.sortingLayerID = i2393[26]
  i2392.sortingOrder = i2393[27]
  i2392.lightmapIndex = i2393[28]
  i2392.lightmapSceneIndex = i2393[29]
  i2392.lightmapScaleOffset = new pc.Vec4( i2393[30], i2393[31], i2393[32], i2393[33] )
  i2392.lightProbeUsage = i2393[34]
  i2392.reflectionProbeUsage = i2393[35]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2397 = data
  i2396.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2397[0], i2396.main)
  i2396.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2397[1], i2396.colorBySpeed)
  i2396.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2397[2], i2396.colorOverLifetime)
  i2396.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2397[3], i2396.emission)
  i2396.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2397[4], i2396.rotationBySpeed)
  i2396.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2397[5], i2396.rotationOverLifetime)
  i2396.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2397[6], i2396.shape)
  i2396.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2397[7], i2396.sizeBySpeed)
  i2396.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2397[8], i2396.sizeOverLifetime)
  i2396.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2397[9], i2396.textureSheetAnimation)
  i2396.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2397[10], i2396.velocityOverLifetime)
  i2396.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2397[11], i2396.noise)
  i2396.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2397[12], i2396.inheritVelocity)
  i2396.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2397[13], i2396.forceOverLifetime)
  i2396.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2397[14], i2396.limitVelocityOverLifetime)
  i2396.useAutoRandomSeed = !!i2397[15]
  i2396.randomSeed = i2397[16]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemMain()
  var i2399 = data
  i2398.duration = i2399[0]
  i2398.loop = !!i2399[1]
  i2398.prewarm = !!i2399[2]
  i2398.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[3], i2398.startDelay)
  i2398.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[4], i2398.startLifetime)
  i2398.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[5], i2398.startSpeed)
  i2398.startSize3D = !!i2399[6]
  i2398.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[7], i2398.startSizeX)
  i2398.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[8], i2398.startSizeY)
  i2398.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[9], i2398.startSizeZ)
  i2398.startRotation3D = !!i2399[10]
  i2398.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[11], i2398.startRotationX)
  i2398.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[12], i2398.startRotationY)
  i2398.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[13], i2398.startRotationZ)
  i2398.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2399[14], i2398.startColor)
  i2398.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[15], i2398.gravityModifier)
  i2398.simulationSpace = i2399[16]
  request.r(i2399[17], i2399[18], 0, i2398, 'customSimulationSpace')
  i2398.simulationSpeed = i2399[19]
  i2398.useUnscaledTime = !!i2399[20]
  i2398.scalingMode = i2399[21]
  i2398.playOnAwake = !!i2399[22]
  i2398.maxParticles = i2399[23]
  i2398.emitterVelocityMode = i2399[24]
  i2398.stopAction = i2399[25]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2400 = root || new pc.MinMaxCurve()
  var i2401 = data
  i2400.mode = i2401[0]
  i2400.curveMin = new pc.AnimationCurve( { keys_flow: i2401[1] } )
  i2400.curveMax = new pc.AnimationCurve( { keys_flow: i2401[2] } )
  i2400.curveMultiplier = i2401[3]
  i2400.constantMin = i2401[4]
  i2400.constantMax = i2401[5]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2402 = root || new pc.MinMaxGradient()
  var i2403 = data
  i2402.mode = i2403[0]
  i2402.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2403[1], i2402.gradientMin)
  i2402.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2403[2], i2402.gradientMax)
  i2402.colorMin = new pc.Color(i2403[3], i2403[4], i2403[5], i2403[6])
  i2402.colorMax = new pc.Color(i2403[7], i2403[8], i2403[9], i2403[10])
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2405 = data
  i2404.mode = i2405[0]
  var i2407 = i2405[1]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2407[i + 0]) );
  }
  i2404.colorKeys = i2406
  var i2409 = i2405[2]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2409[i + 0]) );
  }
  i2404.alphaKeys = i2408
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemColorBySpeed()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2411[1], i2410.color)
  i2410.range = new pc.Vec2( i2411[2], i2411[3] )
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2415 = data
  i2414.color = new pc.Color(i2415[0], i2415[1], i2415[2], i2415[3])
  i2414.time = i2415[4]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2419 = data
  i2418.alpha = i2419[0]
  i2418.time = i2419[1]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2420 = root || new pc.ParticleSystemColorOverLifetime()
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2421[1], i2420.color)
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemEmitter()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[1], i2422.rateOverTime)
  i2422.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[2], i2422.rateOverDistance)
  var i2425 = i2423[3]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2425[i + 0]) );
  }
  i2422.bursts = i2424
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2428 = root || new pc.ParticleSystemBurst()
  var i2429 = data
  i2428.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[0], i2428.count)
  i2428.cycleCount = i2429[1]
  i2428.minCount = i2429[2]
  i2428.maxCount = i2429[3]
  i2428.repeatInterval = i2429[4]
  i2428.time = i2429[5]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemRotationBySpeed()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[1], i2430.x)
  i2430.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[2], i2430.y)
  i2430.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[3], i2430.z)
  i2430.separateAxes = !!i2431[4]
  i2430.range = new pc.Vec2( i2431[5], i2431[6] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2432 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[1], i2432.x)
  i2432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[2], i2432.y)
  i2432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[3], i2432.z)
  i2432.separateAxes = !!i2433[4]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2434 = root || new pc.ParticleSystemShape()
  var i2435 = data
  i2434.enabled = !!i2435[0]
  i2434.shapeType = i2435[1]
  i2434.randomDirectionAmount = i2435[2]
  i2434.sphericalDirectionAmount = i2435[3]
  i2434.randomPositionAmount = i2435[4]
  i2434.alignToDirection = !!i2435[5]
  i2434.radius = i2435[6]
  i2434.radiusMode = i2435[7]
  i2434.radiusSpread = i2435[8]
  i2434.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[9], i2434.radiusSpeed)
  i2434.radiusThickness = i2435[10]
  i2434.angle = i2435[11]
  i2434.length = i2435[12]
  i2434.boxThickness = new pc.Vec3( i2435[13], i2435[14], i2435[15] )
  i2434.meshShapeType = i2435[16]
  request.r(i2435[17], i2435[18], 0, i2434, 'mesh')
  request.r(i2435[19], i2435[20], 0, i2434, 'meshRenderer')
  request.r(i2435[21], i2435[22], 0, i2434, 'skinnedMeshRenderer')
  i2434.useMeshMaterialIndex = !!i2435[23]
  i2434.meshMaterialIndex = i2435[24]
  i2434.useMeshColors = !!i2435[25]
  i2434.normalOffset = i2435[26]
  i2434.arc = i2435[27]
  i2434.arcMode = i2435[28]
  i2434.arcSpread = i2435[29]
  i2434.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[30], i2434.arcSpeed)
  i2434.donutRadius = i2435[31]
  i2434.position = new pc.Vec3( i2435[32], i2435[33], i2435[34] )
  i2434.rotation = new pc.Vec3( i2435[35], i2435[36], i2435[37] )
  i2434.scale = new pc.Vec3( i2435[38], i2435[39], i2435[40] )
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemSizeBySpeed()
  var i2437 = data
  i2436.enabled = !!i2437[0]
  i2436.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[1], i2436.x)
  i2436.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[2], i2436.y)
  i2436.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[3], i2436.z)
  i2436.separateAxes = !!i2437[4]
  i2436.range = new pc.Vec2( i2437[5], i2437[6] )
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2438 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2439 = data
  i2438.enabled = !!i2439[0]
  i2438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[1], i2438.x)
  i2438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[2], i2438.y)
  i2438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2439[3], i2438.z)
  i2438.separateAxes = !!i2439[4]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.mode = i2441[1]
  i2440.animation = i2441[2]
  i2440.numTilesX = i2441[3]
  i2440.numTilesY = i2441[4]
  i2440.useRandomRow = !!i2441[5]
  i2440.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[6], i2440.frameOverTime)
  i2440.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[7], i2440.startFrame)
  i2440.cycleCount = i2441[8]
  i2440.rowIndex = i2441[9]
  i2440.flipU = i2441[10]
  i2440.flipV = i2441[11]
  i2440.spriteCount = i2441[12]
  var i2443 = i2441[13]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2440.sprites = i2442
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2446 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2447 = data
  i2446.enabled = !!i2447[0]
  i2446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[1], i2446.x)
  i2446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[2], i2446.y)
  i2446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[3], i2446.z)
  i2446.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[4], i2446.radial)
  i2446.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[5], i2446.speedModifier)
  i2446.space = i2447[6]
  i2446.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[7], i2446.orbitalX)
  i2446.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[8], i2446.orbitalY)
  i2446.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[9], i2446.orbitalZ)
  i2446.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[10], i2446.orbitalOffsetX)
  i2446.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[11], i2446.orbitalOffsetY)
  i2446.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[12], i2446.orbitalOffsetZ)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemNoise()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.separateAxes = !!i2449[1]
  i2448.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.strengthX)
  i2448.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[3], i2448.strengthY)
  i2448.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[4], i2448.strengthZ)
  i2448.frequency = i2449[5]
  i2448.damping = !!i2449[6]
  i2448.octaveCount = i2449[7]
  i2448.octaveMultiplier = i2449[8]
  i2448.octaveScale = i2449[9]
  i2448.quality = i2449[10]
  i2448.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[11], i2448.scrollSpeed)
  i2448.scrollSpeedMultiplier = i2449[12]
  i2448.remapEnabled = !!i2449[13]
  i2448.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[14], i2448.remapX)
  i2448.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[15], i2448.remapY)
  i2448.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[16], i2448.remapZ)
  i2448.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[17], i2448.positionAmount)
  i2448.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[18], i2448.rotationAmount)
  i2448.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[19], i2448.sizeAmount)
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemInheritVelocity()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.mode = i2451[1]
  i2450.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.curve)
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemForceOverLifetime()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[1], i2452.x)
  i2452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[2], i2452.y)
  i2452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[3], i2452.z)
  i2452.space = i2453[4]
  i2452.randomized = !!i2453[5]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[1], i2454.limit)
  i2454.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[2], i2454.limitX)
  i2454.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[3], i2454.limitY)
  i2454.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[4], i2454.limitZ)
  i2454.dampen = i2455[5]
  i2454.separateAxes = !!i2455[6]
  i2454.space = i2455[7]
  i2454.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[8], i2454.drag)
  i2454.multiplyDragByParticleSize = !!i2455[9]
  i2454.multiplyDragByParticleVelocity = !!i2455[10]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2457 = data
  i2456.color = new pc.Color(i2457[0], i2457[1], i2457[2], i2457[3])
  request.r(i2457[4], i2457[5], 0, i2456, 'sprite')
  i2456.flipX = !!i2457[6]
  i2456.flipY = !!i2457[7]
  i2456.drawMode = i2457[8]
  i2456.size = new pc.Vec2( i2457[9], i2457[10] )
  i2456.tileMode = i2457[11]
  i2456.adaptiveModeThreshold = i2457[12]
  i2456.maskInteraction = i2457[13]
  i2456.spriteSortPoint = i2457[14]
  i2456.enabled = !!i2457[15]
  request.r(i2457[16], i2457[17], 0, i2456, 'sharedMaterial')
  var i2459 = i2457[18]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2456.sharedMaterials = i2458
  i2456.receiveShadows = !!i2457[19]
  i2456.shadowCastingMode = i2457[20]
  i2456.sortingLayerID = i2457[21]
  i2456.sortingOrder = i2457[22]
  i2456.lightmapIndex = i2457[23]
  i2456.lightmapSceneIndex = i2457[24]
  i2456.lightmapScaleOffset = new pc.Vec4( i2457[25], i2457[26], i2457[27], i2457[28] )
  i2456.lightProbeUsage = i2457[29]
  i2456.reflectionProbeUsage = i2457[30]
  return i2456
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2460 = root || request.c( 'CharacterMotor' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'characterInput')
  request.r(i2461[2], i2461[3], 0, i2460, 'cameraYawTransform')
  request.r(i2461[4], i2461[5], 0, i2460, '_arrow')
  i2460.moveSpeed = i2461[6]
  i2460.jumpHeight = i2461[7]
  request.r(i2461[8], i2461[9], 0, i2460, 'groundChecker')
  i2460.gravity = i2461[10]
  i2460.enableStepClimb = !!i2461[11]
  i2460.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2461[12] )
  i2460.maxStepHeight = i2461[13]
  i2460.stepCheckDistance = i2461[14]
  i2460.stepUpSpeed = i2461[15]
  i2460.stepUpAcceleration = i2461[16]
  i2460.minimumStepFacing = i2461[17]
  request.r(i2461[18], i2461[19], 0, i2460, 'controller')
  i2460.autoRun = !!i2461[20]
  return i2460
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2462 = root || request.c( 'CharacterRotation' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'motor')
  i2462.rotationSpeed = i2463[2]
  return i2462
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2464 = root || request.c( 'CharacterAnimation' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'animator')
  request.r(i2465[2], i2465[3], 0, i2464, 'motor')
  i2464.speedChangeRate = i2465[4]
  i2464.groundedGraceTime = i2465[5]
  return i2464
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2466 = root || request.c( 'CharacterCollect' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'motor')
  request.r(i2467[2], i2467[3], 0, i2466, 'avatar')
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2469 = data
  i2468.center = new pc.Vec3( i2469[0], i2469[1], i2469[2] )
  i2468.radius = i2469[3]
  i2468.height = i2469[4]
  i2468.direction = i2469[5]
  i2468.enabled = !!i2469[6]
  i2468.isTrigger = !!i2469[7]
  request.r(i2469[8], i2469[9], 0, i2468, 'material')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'animatorController')
  request.r(i2471[2], i2471[3], 0, i2470, 'avatar')
  i2470.updateMode = i2471[4]
  i2470.hasTransformHierarchy = !!i2471[5]
  i2470.applyRootMotion = !!i2471[6]
  var i2473 = i2471[7]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 2) {
  request.r(i2473[i + 0], i2473[i + 1], 2, i2472, '')
  }
  i2470.humanBones = i2472
  i2470.enabled = !!i2471[8]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'clip')
  request.r(i2477[2], i2477[3], 0, i2476, 'outputAudioMixerGroup')
  i2476.playOnAwake = !!i2477[4]
  i2476.loop = !!i2477[5]
  i2476.time = i2477[6]
  i2476.volume = i2477[7]
  i2476.pitch = i2477[8]
  i2476.enabled = !!i2477[9]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'sharedMesh')
  var i2481 = i2479[2]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2478.bones = i2480
  i2478.updateWhenOffscreen = !!i2479[3]
  i2478.localBounds = i2479[4]
  request.r(i2479[5], i2479[6], 0, i2478, 'rootBone')
  var i2483 = i2479[7]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2483[i + 0]) );
  }
  i2478.blendShapesWeights = i2482
  i2478.enabled = !!i2479[8]
  request.r(i2479[9], i2479[10], 0, i2478, 'sharedMaterial')
  var i2485 = i2479[11]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2478.sharedMaterials = i2484
  i2478.receiveShadows = !!i2479[12]
  i2478.shadowCastingMode = i2479[13]
  i2478.sortingLayerID = i2479[14]
  i2478.sortingOrder = i2479[15]
  i2478.lightmapIndex = i2479[16]
  i2478.lightmapSceneIndex = i2479[17]
  i2478.lightmapScaleOffset = new pc.Vec4( i2479[18], i2479[19], i2479[20], i2479[21] )
  i2478.lightProbeUsage = i2479[22]
  i2478.reflectionProbeUsage = i2479[23]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2489 = data
  i2488.weight = i2489[0]
  return i2488
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2490 = root || request.c( 'GroundChecker' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'groundPoint')
  i2490.checkRadius = i2491[2]
  i2490.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2491[3] )
  return i2490
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2492 = root || request.c( 'CameraFollow' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'target')
  i2492.smoothTime = i2493[2]
  return i2492
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2494 = root || request.c( 'CameraLook' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'input')
  request.r(i2495[2], i2495[3], 0, i2494, 'yawPivot')
  request.r(i2495[4], i2495[5], 0, i2494, 'pitchPivot')
  i2494.minPitch = i2495[6]
  i2494.maxPitch = i2495[7]
  i2494.yaw = i2495[8]
  i2494.pitch = i2495[9]
  i2494.defaltYaw = i2495[10]
  i2494.defaltPitch = i2495[11]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2497 = data
  i2496.aspect = i2497[0]
  i2496.orthographic = !!i2497[1]
  i2496.orthographicSize = i2497[2]
  i2496.backgroundColor = new pc.Color(i2497[3], i2497[4], i2497[5], i2497[6])
  i2496.nearClipPlane = i2497[7]
  i2496.farClipPlane = i2497[8]
  i2496.fieldOfView = i2497[9]
  i2496.depth = i2497[10]
  i2496.clearFlags = i2497[11]
  i2496.cullingMask = i2497[12]
  i2496.rect = i2497[13]
  request.r(i2497[14], i2497[15], 0, i2496, 'targetTexture')
  i2496.usePhysicalProperties = !!i2497[16]
  i2496.focalLength = i2497[17]
  i2496.sensorSize = new pc.Vec2( i2497[18], i2497[19] )
  i2496.lensShift = new pc.Vec2( i2497[20], i2497[21] )
  i2496.gateFit = i2497[22]
  i2496.commandBufferCount = i2497[23]
  i2496.cameraType = i2497[24]
  i2496.enabled = !!i2497[25]
  return i2496
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2498 = root || request.c( 'CharacterInput' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'joystick')
  request.r(i2499[2], i2499[3], 0, i2498, 'jumpButton')
  return i2498
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2500 = root || request.c( 'InputManager' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'worldCamera')
  i2500.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2501[2] )
  i2500.touchSensitivity = i2501[3]
  i2500.mouseSensitivity = i2501[4]
  i2500.dragThreshold = i2501[5]
  return i2500
}

Deserializers["GameController"] = function (request, data, root) {
  var i2502 = root || request.c( 'GameController' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'morphSelection')
  i2502.timeToShowComplete = i2503[2]
  i2502.currentProgress = i2503[3]
  i2502.target = i2503[4]
  request.r(i2503[5], i2503[6], 0, i2502, 'progressText')
  request.r(i2503[7], i2503[8], 0, i2502, 'collectText')
  request.r(i2503[9], i2503[10], 0, i2502, '_cta')
  var i2505 = i2503[11]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 1, i2504, '')
  }
  i2502.gifts = i2504
  request.r(i2503[12], i2503[13], 0, i2502, 'collect')
  request.r(i2503[14], i2503[15], 0, i2502, 'tut')
  request.r(i2503[16], i2503[17], 0, i2502, 'playerSpawn')
  request.r(i2503[18], i2503[19], 0, i2502, 'giftSpawn')
  request.r(i2503[20], i2503[21], 0, i2502, 'failUI')
  request.r(i2503[22], i2503[23], 0, i2502, 'playerMotor')
  i2502.failHeight = i2503[24]
  return i2502
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2508 = root || request.c( 'AudioController' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'musicSource')
  request.r(i2509[2], i2509[3], 0, i2508, 'poolParent')
  i2508.startSize = i2509[4]
  return i2508
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2510 = root || request.c( 'LunaController' )
  var i2511 = data
  i2510.LimitTimePlay = !!i2511[0]
  i2510.TimePlay = i2511[1]
  var i2513 = i2511[2]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2513.length; i += 2) {
  request.r(i2513[i + 0], i2513[i + 1], 1, i2512, '')
  }
  i2510.images = i2512
  request.r(i2511[3], i2511[4], 0, i2510, 'CTA')
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'sharedMesh')
  i2516.convex = !!i2517[2]
  i2516.enabled = !!i2517[3]
  i2516.isTrigger = !!i2517[4]
  request.r(i2517[5], i2517[6], 0, i2516, 'material')
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2519 = data
  i2518.ambientIntensity = i2519[0]
  i2518.reflectionIntensity = i2519[1]
  i2518.ambientMode = i2519[2]
  i2518.ambientLight = new pc.Color(i2519[3], i2519[4], i2519[5], i2519[6])
  i2518.ambientSkyColor = new pc.Color(i2519[7], i2519[8], i2519[9], i2519[10])
  i2518.ambientGroundColor = new pc.Color(i2519[11], i2519[12], i2519[13], i2519[14])
  i2518.ambientEquatorColor = new pc.Color(i2519[15], i2519[16], i2519[17], i2519[18])
  i2518.fogColor = new pc.Color(i2519[19], i2519[20], i2519[21], i2519[22])
  i2518.fogEndDistance = i2519[23]
  i2518.fogStartDistance = i2519[24]
  i2518.fogDensity = i2519[25]
  i2518.fog = !!i2519[26]
  request.r(i2519[27], i2519[28], 0, i2518, 'skybox')
  i2518.fogMode = i2519[29]
  var i2521 = i2519[30]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2521[i + 0]) );
  }
  i2518.lightmaps = i2520
  i2518.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2519[31], i2518.lightProbes)
  i2518.lightmapsMode = i2519[32]
  i2518.mixedBakeMode = i2519[33]
  i2518.environmentLightingMode = i2519[34]
  i2518.ambientProbe = new pc.SphericalHarmonicsL2(i2519[35])
  request.r(i2519[36], i2519[37], 0, i2518, 'customReflection')
  request.r(i2519[38], i2519[39], 0, i2518, 'defaultReflection')
  i2518.defaultReflectionMode = i2519[40]
  i2518.defaultReflectionResolution = i2519[41]
  i2518.sunLightObjectId = i2519[42]
  i2518.pixelLightCount = i2519[43]
  i2518.defaultReflectionHDR = !!i2519[44]
  i2518.hasLightDataAsset = !!i2519[45]
  i2518.hasManualGenerate = !!i2519[46]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'lightmapColor')
  request.r(i2525[2], i2525[3], 0, i2524, 'lightmapDirection')
  request.r(i2525[4], i2525[5], 0, i2524, 'shadowMask')
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2526 = root || new UnityEngine.LightProbes()
  var i2527 = data
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2537[i + 0]));
  }
  i2534.ShaderCompilationErrors = i2536
  i2534.name = i2535[1]
  i2534.guid = i2535[2]
  var i2539 = i2535[3]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( i2539[i + 0] );
  }
  i2534.shaderDefinedKeywords = i2538
  var i2541 = i2535[4]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2541[i + 0]) );
  }
  i2534.passes = i2540
  var i2543 = i2535[5]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2543[i + 0]) );
  }
  i2534.usePasses = i2542
  var i2545 = i2535[6]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2545[i + 0]) );
  }
  i2534.defaultParameterValues = i2544
  request.r(i2535[7], i2535[8], 0, i2534, 'unityFallbackShader')
  i2534.readDepth = !!i2535[9]
  i2534.hasDepthOnlyPass = !!i2535[10]
  i2534.isCreatedByShaderGraph = !!i2535[11]
  i2534.disableBatching = !!i2535[12]
  i2534.compiled = !!i2535[13]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2549 = data
  i2548.shaderName = i2549[0]
  i2548.errorMessage = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2554 = root || new pc.UnityShaderPass()
  var i2555 = data
  i2554.id = i2555[0]
  i2554.subShaderIndex = i2555[1]
  i2554.name = i2555[2]
  i2554.passType = i2555[3]
  i2554.grabPassTextureName = i2555[4]
  i2554.usePass = !!i2555[5]
  i2554.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[6], i2554.zTest)
  i2554.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[7], i2554.zWrite)
  i2554.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[8], i2554.culling)
  i2554.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2555[9], i2554.blending)
  i2554.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2555[10], i2554.alphaBlending)
  i2554.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[11], i2554.colorWriteMask)
  i2554.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[12], i2554.offsetUnits)
  i2554.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[13], i2554.offsetFactor)
  i2554.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[14], i2554.stencilRef)
  i2554.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[15], i2554.stencilReadMask)
  i2554.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[16], i2554.stencilWriteMask)
  i2554.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2555[17], i2554.stencilOp)
  i2554.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2555[18], i2554.stencilOpFront)
  i2554.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2555[19], i2554.stencilOpBack)
  var i2557 = i2555[20]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2557[i + 0]) );
  }
  i2554.tags = i2556
  var i2559 = i2555[21]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2554.passDefinedKeywords = i2558
  var i2561 = i2555[22]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2561[i + 0]) );
  }
  i2554.passDefinedKeywordGroups = i2560
  var i2563 = i2555[23]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2563[i + 0]) );
  }
  i2554.variants = i2562
  var i2565 = i2555[24]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2565[i + 0]) );
  }
  i2554.excludedVariants = i2564
  i2554.hasDepthReader = !!i2555[25]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2567 = data
  i2566.val = i2567[0]
  i2566.name = i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2569 = data
  i2568.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[0], i2568.src)
  i2568.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[1], i2568.dst)
  i2568.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[2], i2568.op)
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2571 = data
  i2570.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[0], i2570.pass)
  i2570.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[1], i2570.fail)
  i2570.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[2], i2570.zFail)
  i2570.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2571[3], i2570.comp)
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2575 = data
  i2574.name = i2575[0]
  i2574.value = i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2579 = data
  var i2581 = i2579[0]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( i2581[i + 0] );
  }
  i2578.keywords = i2580
  i2578.hasDiscard = !!i2579[1]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2585 = data
  i2584.passId = i2585[0]
  i2584.subShaderIndex = i2585[1]
  var i2587 = i2585[2]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2584.keywords = i2586
  i2584.vertexProgram = i2585[3]
  i2584.fragmentProgram = i2585[4]
  i2584.exportedForWebGl2 = !!i2585[5]
  i2584.readDepth = !!i2585[6]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'shader')
  i2590.pass = i2591[2]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2595 = data
  i2594.name = i2595[0]
  i2594.type = i2595[1]
  i2594.value = new pc.Vec4( i2595[2], i2595[3], i2595[4], i2595[5] )
  i2594.textureValue = i2595[6]
  i2594.shaderPropertyFlag = i2595[7]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2597 = data
  i2596.name = i2597[0]
  request.r(i2597[1], i2597[2], 0, i2596, 'texture')
  i2596.aabb = i2597[3]
  i2596.vertices = i2597[4]
  i2596.triangles = i2597[5]
  i2596.textureRect = UnityEngine.Rect.MinMaxRect(i2597[6], i2597[7], i2597[8], i2597[9])
  i2596.packedRect = UnityEngine.Rect.MinMaxRect(i2597[10], i2597[11], i2597[12], i2597[13])
  i2596.border = new pc.Vec4( i2597[14], i2597[15], i2597[16], i2597[17] )
  i2596.transparency = i2597[18]
  i2596.bounds = i2597[19]
  i2596.pixelsPerUnit = i2597[20]
  i2596.textureWidth = i2597[21]
  i2596.textureHeight = i2597[22]
  i2596.nativeSize = new pc.Vec2( i2597[23], i2597[24] )
  i2596.pivot = new pc.Vec2( i2597[25], i2597[26] )
  i2596.textureRectOffset = new pc.Vec2( i2597[27], i2597[28] )
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2599 = data
  i2598.name = i2599[0]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2601 = data
  i2600.name = i2601[0]
  i2600.wrapMode = i2601[1]
  i2600.isLooping = !!i2601[2]
  i2600.length = i2601[3]
  var i2603 = i2601[4]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2603[i + 0]) );
  }
  i2600.curves = i2602
  var i2605 = i2601[5]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2605[i + 0]) );
  }
  i2600.events = i2604
  i2600.halfPrecision = !!i2601[6]
  i2600._frameRate = i2601[7]
  i2600.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2601[8], i2600.localBounds)
  i2600.hasMuscleCurves = !!i2601[9]
  var i2607 = i2601[10]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2600.clipMuscleConstant = i2606
  i2600.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2601[11], i2600.clipBindingConstant)
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2611 = data
  i2610.path = i2611[0]
  i2610.hash = i2611[1]
  i2610.componentType = i2611[2]
  i2610.property = i2611[3]
  i2610.keys = i2611[4]
  var i2613 = i2611[5]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2613[i + 0]) );
  }
  i2610.objectReferenceKeys = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2617 = data
  i2616.time = i2617[0]
  request.r(i2617[1], i2617[2], 0, i2616, 'value')
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2621 = data
  i2620.functionName = i2621[0]
  i2620.floatParameter = i2621[1]
  i2620.intParameter = i2621[2]
  i2620.stringParameter = i2621[3]
  request.r(i2621[4], i2621[5], 0, i2620, 'objectReferenceParameter')
  i2620.time = i2621[6]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2623 = data
  i2622.center = new pc.Vec3( i2623[0], i2623[1], i2623[2] )
  i2622.extends = new pc.Vec3( i2623[3], i2623[4], i2623[5] )
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( i2629[i + 0] );
  }
  i2626.genericBindings = i2628
  var i2631 = i2627[1]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( i2631[i + 0] );
  }
  i2626.pptrCurveMapping = i2630
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2633 = data
  i2632.name = i2633[0]
  var i2635 = i2633[1]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2635[i + 0]) );
  }
  i2632.layers = i2634
  var i2637 = i2633[2]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2637[i + 0]) );
  }
  i2632.parameters = i2636
  i2632.animationClips = i2633[3]
  i2632.avatarUnsupported = i2633[4]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2641 = data
  i2640.name = i2641[0]
  i2640.defaultWeight = i2641[1]
  i2640.blendingMode = i2641[2]
  i2640.avatarMask = i2641[3]
  i2640.syncedLayerIndex = i2641[4]
  i2640.syncedLayerAffectsTiming = !!i2641[5]
  i2640.syncedLayers = i2641[6]
  i2640.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2641[7], i2640.stateMachine)
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2643 = data
  i2642.id = i2643[0]
  i2642.name = i2643[1]
  i2642.path = i2643[2]
  var i2645 = i2643[3]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2645[i + 0]) );
  }
  i2642.states = i2644
  var i2647 = i2643[4]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2647[i + 0]) );
  }
  i2642.machines = i2646
  var i2649 = i2643[5]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2649[i + 0]) );
  }
  i2642.entryStateTransitions = i2648
  var i2651 = i2643[6]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2651[i + 0]) );
  }
  i2642.exitStateTransitions = i2650
  var i2653 = i2643[7]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2653[i + 0]) );
  }
  i2642.anyStateTransitions = i2652
  i2642.defaultStateId = i2643[8]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2657 = data
  i2656.id = i2657[0]
  i2656.name = i2657[1]
  i2656.cycleOffset = i2657[2]
  i2656.cycleOffsetParameter = i2657[3]
  i2656.cycleOffsetParameterActive = !!i2657[4]
  i2656.mirror = !!i2657[5]
  i2656.mirrorParameter = i2657[6]
  i2656.mirrorParameterActive = !!i2657[7]
  i2656.motionId = i2657[8]
  i2656.nameHash = i2657[9]
  i2656.fullPathHash = i2657[10]
  i2656.speed = i2657[11]
  i2656.speedParameter = i2657[12]
  i2656.speedParameterActive = !!i2657[13]
  i2656.tag = i2657[14]
  i2656.tagHash = i2657[15]
  i2656.writeDefaultValues = !!i2657[16]
  var i2659 = i2657[17]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2656.behaviours = i2658
  var i2661 = i2657[18]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2661[i + 0]) );
  }
  i2656.transitions = i2660
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2667 = data
  i2666.fullPath = i2667[0]
  i2666.canTransitionToSelf = !!i2667[1]
  i2666.duration = i2667[2]
  i2666.exitTime = i2667[3]
  i2666.hasExitTime = !!i2667[4]
  i2666.hasFixedDuration = !!i2667[5]
  i2666.interruptionSource = i2667[6]
  i2666.offset = i2667[7]
  i2666.orderedInterruption = !!i2667[8]
  i2666.destinationStateId = i2667[9]
  i2666.isExit = !!i2667[10]
  i2666.mute = !!i2667[11]
  i2666.solo = !!i2667[12]
  var i2669 = i2667[13]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2669[i + 0]) );
  }
  i2666.conditions = i2668
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2673 = data
  i2672.mode = i2673[0]
  i2672.parameter = i2673[1]
  i2672.threshold = i2673[2]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2679 = data
  i2678.destinationStateId = i2679[0]
  i2678.isExit = !!i2679[1]
  i2678.mute = !!i2679[2]
  i2678.solo = !!i2679[3]
  var i2681 = i2679[4]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2681[i + 0]) );
  }
  i2678.conditions = i2680
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2685 = data
  i2684.defaultBool = !!i2685[0]
  i2684.defaultFloat = i2685[1]
  i2684.defaultInt = i2685[2]
  i2684.name = i2685[3]
  i2684.nameHash = i2685[4]
  i2684.type = i2685[5]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2687 = data
  i2686.name = i2687[0]
  request.r(i2687[1], i2687[2], 0, i2686, '_runtimeAnimatorController')
  var i2689 = i2687[3]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 2) {
  request.r(i2689[i + 0], i2689[i + 1], 2, i2688, '')
  }
  i2686._originalAnimationClips = i2688
  var i2691 = i2687[4]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 2, i2690, '')
  }
  i2686._overrideAnimationClips = i2690
  var i2693 = i2687[5]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2686._animationClips = i2692
  var i2695 = i2687[6]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('UnityEngine.AnimationClipPair', i2695[i + 0]) );
  }
  i2686._animationClipPairs = i2694
  return i2686
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2701 = data
  request.r(i2701[0], i2701[1], 0, i2700, 'originalClip')
  request.r(i2701[2], i2701[3], 0, i2700, 'overrideClip')
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.bytes64 = i2703[1]
  i2702.data = i2703[2]
  return i2702
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2705 = data
  i2704.normalStyle = i2705[0]
  i2704.normalSpacingOffset = i2705[1]
  i2704.boldStyle = i2705[2]
  i2704.boldSpacing = i2705[3]
  i2704.italicStyle = i2705[4]
  i2704.tabSize = i2705[5]
  request.r(i2705[6], i2705[7], 0, i2704, 'atlas')
  i2704.m_SourceFontFileGUID = i2705[8]
  i2704.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2705[9], i2704.m_CreationSettings)
  request.r(i2705[10], i2705[11], 0, i2704, 'm_SourceFontFile')
  i2704.m_SourceFontFilePath = i2705[12]
  i2704.m_AtlasPopulationMode = i2705[13]
  i2704.InternalDynamicOS = !!i2705[14]
  var i2707 = i2705[15]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('UnityEngine.TextCore.Glyph', i2707[i + 0]));
  }
  i2704.m_GlyphTable = i2706
  var i2709 = i2705[16]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.add(request.d('TMPro.TMP_Character', i2709[i + 0]));
  }
  i2704.m_CharacterTable = i2708
  var i2711 = i2705[17]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 2, i2710, '')
  }
  i2704.m_AtlasTextures = i2710
  i2704.m_AtlasTextureIndex = i2705[18]
  i2704.m_IsMultiAtlasTexturesEnabled = !!i2705[19]
  i2704.m_GetFontFeatures = !!i2705[20]
  i2704.m_ClearDynamicDataOnBuild = !!i2705[21]
  i2704.m_AtlasWidth = i2705[22]
  i2704.m_AtlasHeight = i2705[23]
  i2704.m_AtlasPadding = i2705[24]
  i2704.m_AtlasRenderMode = i2705[25]
  var i2713 = i2705[26]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('UnityEngine.TextCore.GlyphRect', i2713[i + 0]));
  }
  i2704.m_UsedGlyphRects = i2712
  var i2715 = i2705[27]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('UnityEngine.TextCore.GlyphRect', i2715[i + 0]));
  }
  i2704.m_FreeGlyphRects = i2714
  i2704.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2705[28], i2704.m_FontFeatureTable)
  i2704.m_ShouldReimportFontFeatures = !!i2705[29]
  var i2717 = i2705[30]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2717.length; i += 2) {
  request.r(i2717[i + 0], i2717[i + 1], 1, i2716, '')
  }
  i2704.m_FallbackFontAssetTable = i2716
  var i2719 = i2705[31]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('TMPro.TMP_FontWeightPair', i2719[i + 0]) );
  }
  i2704.m_FontWeightTable = i2718
  var i2721 = i2705[32]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('TMPro.TMP_FontWeightPair', i2721[i + 0]) );
  }
  i2704.fontWeights = i2720
  i2704.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2705[33], i2704.m_fontInfo)
  var i2723 = i2705[34]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.TMP_Glyph', i2723[i + 0]));
  }
  i2704.m_glyphInfoList = i2722
  i2704.m_KerningTable = request.d('TMPro.KerningTable', i2705[35], i2704.m_KerningTable)
  var i2725 = i2705[36]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 1, i2724, '')
  }
  i2704.fallbackFontAssets = i2724
  i2704.m_Version = i2705[37]
  i2704.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2705[38], i2704.m_FaceInfo)
  request.r(i2705[39], i2705[40], 0, i2704, 'm_Material')
  return i2704
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2727 = data
  i2726.sourceFontFileName = i2727[0]
  i2726.sourceFontFileGUID = i2727[1]
  i2726.faceIndex = i2727[2]
  i2726.pointSizeSamplingMode = i2727[3]
  i2726.pointSize = i2727[4]
  i2726.padding = i2727[5]
  i2726.paddingMode = i2727[6]
  i2726.packingMode = i2727[7]
  i2726.atlasWidth = i2727[8]
  i2726.atlasHeight = i2727[9]
  i2726.characterSetSelectionMode = i2727[10]
  i2726.characterSequence = i2727[11]
  i2726.referencedFontAssetGUID = i2727[12]
  i2726.referencedTextAssetGUID = i2727[13]
  i2726.fontStyle = i2727[14]
  i2726.fontStyleModifier = i2727[15]
  i2726.renderMode = i2727[16]
  i2726.includeFontFeatures = !!i2727[17]
  return i2726
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2731 = data
  i2730.m_Index = i2731[0]
  i2730.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2731[1], i2730.m_Metrics)
  i2730.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2731[2], i2730.m_GlyphRect)
  i2730.m_Scale = i2731[3]
  i2730.m_AtlasIndex = i2731[4]
  i2730.m_ClassDefinitionType = i2731[5]
  return i2730
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2733 = data
  i2732.m_Width = i2733[0]
  i2732.m_Height = i2733[1]
  i2732.m_HorizontalBearingX = i2733[2]
  i2732.m_HorizontalBearingY = i2733[3]
  i2732.m_HorizontalAdvance = i2733[4]
  return i2732
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2735 = data
  i2734.m_X = i2735[0]
  i2734.m_Y = i2735[1]
  i2734.m_Width = i2735[2]
  i2734.m_Height = i2735[3]
  return i2734
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_Character' )
  var i2739 = data
  i2738.m_ElementType = i2739[0]
  i2738.m_Unicode = i2739[1]
  i2738.m_GlyphIndex = i2739[2]
  i2738.m_Scale = i2739[3]
  return i2738
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.add(request.d('TMPro.MultipleSubstitutionRecord', i2747[i + 0]));
  }
  i2744.m_MultipleSubstitutionRecords = i2746
  var i2749 = i2745[1]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('TMPro.LigatureSubstitutionRecord', i2749[i + 0]));
  }
  i2744.m_LigatureSubstitutionRecords = i2748
  var i2751 = i2745[2]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2751[i + 0]));
  }
  i2744.m_GlyphPairAdjustmentRecords = i2750
  var i2753 = i2745[3]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2753[i + 0]));
  }
  i2744.m_MarkToBaseAdjustmentRecords = i2752
  var i2755 = i2745[4]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2755[i + 0]));
  }
  i2744.m_MarkToMarkAdjustmentRecords = i2754
  return i2744
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2759 = data
  i2758.m_TargetGlyphID = i2759[0]
  i2758.m_SubstituteGlyphIDs = i2759[1]
  return i2758
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2763 = data
  i2762.m_ComponentGlyphIDs = i2763[0]
  i2762.m_LigatureGlyphID = i2763[1]
  return i2762
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2767 = data
  i2766.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2767[0], i2766.m_FirstAdjustmentRecord)
  i2766.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2767[1], i2766.m_SecondAdjustmentRecord)
  i2766.m_FeatureLookupFlags = i2767[2]
  return i2766
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2771 = data
  i2770.m_BaseGlyphID = i2771[0]
  i2770.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2771[1], i2770.m_BaseGlyphAnchorPoint)
  i2770.m_MarkGlyphID = i2771[2]
  i2770.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2771[3], i2770.m_MarkPositionAdjustment)
  return i2770
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2775 = data
  i2774.m_BaseMarkGlyphID = i2775[0]
  i2774.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2775[1], i2774.m_BaseMarkGlyphAnchorPoint)
  i2774.m_CombiningMarkGlyphID = i2775[2]
  i2774.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2775[3], i2774.m_CombiningMarkPositionAdjustment)
  return i2774
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2781 = data
  request.r(i2781[0], i2781[1], 0, i2780, 'regularTypeface')
  request.r(i2781[2], i2781[3], 0, i2780, 'italicTypeface')
  return i2780
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2783 = data
  i2782.Name = i2783[0]
  i2782.PointSize = i2783[1]
  i2782.Scale = i2783[2]
  i2782.CharacterCount = i2783[3]
  i2782.LineHeight = i2783[4]
  i2782.Baseline = i2783[5]
  i2782.Ascender = i2783[6]
  i2782.CapHeight = i2783[7]
  i2782.Descender = i2783[8]
  i2782.CenterLine = i2783[9]
  i2782.SuperscriptOffset = i2783[10]
  i2782.SubscriptOffset = i2783[11]
  i2782.SubSize = i2783[12]
  i2782.Underline = i2783[13]
  i2782.UnderlineThickness = i2783[14]
  i2782.strikethrough = i2783[15]
  i2782.strikethroughThickness = i2783[16]
  i2782.TabWidth = i2783[17]
  i2782.Padding = i2783[18]
  i2782.AtlasWidth = i2783[19]
  i2782.AtlasHeight = i2783[20]
  return i2782
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2787 = data
  i2786.id = i2787[0]
  i2786.x = i2787[1]
  i2786.y = i2787[2]
  i2786.width = i2787[3]
  i2786.height = i2787[4]
  i2786.xOffset = i2787[5]
  i2786.yOffset = i2787[6]
  i2786.xAdvance = i2787[7]
  i2786.scale = i2787[8]
  return i2786
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.KerningTable' )
  var i2789 = data
  var i2791 = i2789[0]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('TMPro.KerningPair', i2791[i + 0]));
  }
  i2788.kerningPairs = i2790
  return i2788
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.KerningPair' )
  var i2795 = data
  i2794.xOffset = i2795[0]
  i2794.m_FirstGlyph = i2795[1]
  i2794.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2795[2], i2794.m_FirstGlyphAdjustments)
  i2794.m_SecondGlyph = i2795[3]
  i2794.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2795[4], i2794.m_SecondGlyphAdjustments)
  i2794.m_IgnoreSpacingAdjustments = !!i2795[5]
  return i2794
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2797 = data
  i2796.m_FaceIndex = i2797[0]
  i2796.m_FamilyName = i2797[1]
  i2796.m_StyleName = i2797[2]
  i2796.m_PointSize = i2797[3]
  i2796.m_Scale = i2797[4]
  i2796.m_UnitsPerEM = i2797[5]
  i2796.m_LineHeight = i2797[6]
  i2796.m_AscentLine = i2797[7]
  i2796.m_CapLine = i2797[8]
  i2796.m_MeanLine = i2797[9]
  i2796.m_Baseline = i2797[10]
  i2796.m_DescentLine = i2797[11]
  i2796.m_SuperscriptOffset = i2797[12]
  i2796.m_SuperscriptSize = i2797[13]
  i2796.m_SubscriptOffset = i2797[14]
  i2796.m_SubscriptSize = i2797[15]
  i2796.m_UnderlineOffset = i2797[16]
  i2796.m_UnderlineThickness = i2797[17]
  i2796.m_StrikethroughOffset = i2797[18]
  i2796.m_StrikethroughThickness = i2797[19]
  i2796.m_TabWidth = i2797[20]
  return i2796
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2799 = data
  i2798.useSafeMode = !!i2799[0]
  i2798.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2799[1], i2798.safeModeOptions)
  i2798.timeScale = i2799[2]
  i2798.unscaledTimeScale = i2799[3]
  i2798.useSmoothDeltaTime = !!i2799[4]
  i2798.maxSmoothUnscaledTime = i2799[5]
  i2798.rewindCallbackMode = i2799[6]
  i2798.showUnityEditorReport = !!i2799[7]
  i2798.logBehaviour = i2799[8]
  i2798.drawGizmos = !!i2799[9]
  i2798.defaultRecyclable = !!i2799[10]
  i2798.defaultAutoPlay = i2799[11]
  i2798.defaultUpdateType = i2799[12]
  i2798.defaultTimeScaleIndependent = !!i2799[13]
  i2798.defaultEaseType = i2799[14]
  i2798.defaultEaseOvershootOrAmplitude = i2799[15]
  i2798.defaultEasePeriod = i2799[16]
  i2798.defaultAutoKill = !!i2799[17]
  i2798.defaultLoopType = i2799[18]
  i2798.debugMode = !!i2799[19]
  i2798.debugStoreTargetId = !!i2799[20]
  i2798.showPreviewPanel = !!i2799[21]
  i2798.storeSettingsLocation = i2799[22]
  i2798.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2799[23], i2798.modules)
  i2798.createASMDEF = !!i2799[24]
  i2798.showPlayingTweens = !!i2799[25]
  i2798.showPausedTweens = !!i2799[26]
  return i2798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2801 = data
  i2800.logBehaviour = i2801[0]
  i2800.nestedTweenFailureBehaviour = i2801[1]
  return i2800
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2803 = data
  i2802.showPanel = !!i2803[0]
  i2802.audioEnabled = !!i2803[1]
  i2802.physicsEnabled = !!i2803[2]
  i2802.physics2DEnabled = !!i2803[3]
  i2802.spriteEnabled = !!i2803[4]
  i2802.uiEnabled = !!i2803[5]
  i2802.textMeshProEnabled = !!i2803[6]
  i2802.tk2DEnabled = !!i2803[7]
  i2802.deAudioEnabled = !!i2803[8]
  i2802.deUnityExtendedEnabled = !!i2803[9]
  i2802.epoOutlineEnabled = !!i2803[10]
  return i2802
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.TMP_Settings' )
  var i2805 = data
  i2804.assetVersion = i2805[0]
  i2804.m_TextWrappingMode = i2805[1]
  i2804.m_enableKerning = !!i2805[2]
  var i2807 = i2805[3]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(i2807[i + 0]);
  }
  i2804.m_ActiveFontFeatures = i2806
  i2804.m_enableExtraPadding = !!i2805[4]
  i2804.m_enableTintAllSprites = !!i2805[5]
  i2804.m_enableParseEscapeCharacters = !!i2805[6]
  i2804.m_EnableRaycastTarget = !!i2805[7]
  i2804.m_GetFontFeaturesAtRuntime = !!i2805[8]
  i2804.m_missingGlyphCharacter = i2805[9]
  i2804.m_ClearDynamicDataOnBuild = !!i2805[10]
  i2804.m_warningsDisabled = !!i2805[11]
  request.r(i2805[12], i2805[13], 0, i2804, 'm_defaultFontAsset')
  i2804.m_defaultFontAssetPath = i2805[14]
  i2804.m_defaultFontSize = i2805[15]
  i2804.m_defaultAutoSizeMinRatio = i2805[16]
  i2804.m_defaultAutoSizeMaxRatio = i2805[17]
  i2804.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2805[18], i2805[19] )
  i2804.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2805[20], i2805[21] )
  i2804.m_autoSizeTextContainer = !!i2805[22]
  i2804.m_IsTextObjectScaleStatic = !!i2805[23]
  var i2809 = i2805[24]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2809.length; i += 2) {
  request.r(i2809[i + 0], i2809[i + 1], 1, i2808, '')
  }
  i2804.m_fallbackFontAssets = i2808
  i2804.m_matchMaterialPreset = !!i2805[25]
  i2804.m_HideSubTextObjects = !!i2805[26]
  request.r(i2805[27], i2805[28], 0, i2804, 'm_defaultSpriteAsset')
  i2804.m_defaultSpriteAssetPath = i2805[29]
  i2804.m_enableEmojiSupport = !!i2805[30]
  i2804.m_MissingCharacterSpriteUnicode = i2805[31]
  var i2811 = i2805[32]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2811.length; i += 2) {
  request.r(i2811[i + 0], i2811[i + 1], 1, i2810, '')
  }
  i2804.m_EmojiFallbackTextAssets = i2810
  i2804.m_defaultColorGradientPresetsPath = i2805[33]
  request.r(i2805[34], i2805[35], 0, i2804, 'm_defaultStyleSheet')
  i2804.m_StyleSheetsResourcePath = i2805[36]
  request.r(i2805[37], i2805[38], 0, i2804, 'm_leadingCharacters')
  request.r(i2805[39], i2805[40], 0, i2804, 'm_followingCharacters')
  i2804.m_UseModernHangulLineBreakingRules = !!i2805[41]
  return i2804
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'spriteSheet')
  var i2817 = i2815[2]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('TMPro.TMP_Sprite', i2817[i + 0]));
  }
  i2814.spriteInfoList = i2816
  var i2819 = i2815[3]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2819.length; i += 2) {
  request.r(i2819[i + 0], i2819[i + 1], 1, i2818, '')
  }
  i2814.fallbackSpriteAssets = i2818
  var i2821 = i2815[4]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('TMPro.TMP_SpriteCharacter', i2821[i + 0]));
  }
  i2814.m_SpriteCharacterTable = i2820
  var i2823 = i2815[5]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.add(request.d('TMPro.TMP_SpriteGlyph', i2823[i + 0]));
  }
  i2814.m_GlyphTable = i2822
  i2814.m_Version = i2815[6]
  i2814.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2815[7], i2814.m_FaceInfo)
  request.r(i2815[8], i2815[9], 0, i2814, 'm_Material')
  return i2814
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2827 = data
  i2826.name = i2827[0]
  i2826.hashCode = i2827[1]
  i2826.unicode = i2827[2]
  i2826.pivot = new pc.Vec2( i2827[3], i2827[4] )
  request.r(i2827[5], i2827[6], 0, i2826, 'sprite')
  i2826.id = i2827[7]
  i2826.x = i2827[8]
  i2826.y = i2827[9]
  i2826.width = i2827[10]
  i2826.height = i2827[11]
  i2826.xOffset = i2827[12]
  i2826.yOffset = i2827[13]
  i2826.xAdvance = i2827[14]
  i2826.scale = i2827[15]
  return i2826
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2832 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2833 = data
  i2832.m_Name = i2833[0]
  i2832.m_ElementType = i2833[1]
  i2832.m_Unicode = i2833[2]
  i2832.m_GlyphIndex = i2833[3]
  i2832.m_Scale = i2833[4]
  return i2832
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2837 = data
  request.r(i2837[0], i2837[1], 0, i2836, 'sprite')
  i2836.m_Index = i2837[2]
  i2836.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2837[3], i2836.m_Metrics)
  i2836.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2837[4], i2836.m_GlyphRect)
  i2836.m_Scale = i2837[5]
  i2836.m_AtlasIndex = i2837[6]
  i2836.m_ClassDefinitionType = i2837[7]
  return i2836
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.add(request.d('TMPro.TMP_Style', i2841[i + 0]));
  }
  i2838.m_StyleList = i2840
  return i2838
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.TMP_Style' )
  var i2845 = data
  i2844.m_Name = i2845[0]
  i2844.m_HashCode = i2845[1]
  i2844.m_OpeningDefinition = i2845[2]
  i2844.m_ClosingDefinition = i2845[3]
  i2844.m_OpeningTagArray = i2845[4]
  i2844.m_ClosingTagArray = i2845[5]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2849[i + 0]) );
  }
  i2846.files = i2848
  i2846.componentToPrefabIds = i2847[1]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2853 = data
  i2852.path = i2853[0]
  request.r(i2853[1], i2853[2], 0, i2852, 'unityObject')
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2857[i + 0]) );
  }
  i2854.scriptsExecutionOrder = i2856
  var i2859 = i2855[1]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2859[i + 0]) );
  }
  i2854.sortingLayers = i2858
  var i2861 = i2855[2]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2861[i + 0]) );
  }
  i2854.cullingLayers = i2860
  i2854.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2855[3], i2854.timeSettings)
  i2854.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2855[4], i2854.physicsSettings)
  i2854.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2855[5], i2854.physics2DSettings)
  i2854.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2855[6], i2854.qualitySettings)
  i2854.enableRealtimeShadows = !!i2855[7]
  i2854.enableAutoInstancing = !!i2855[8]
  i2854.enableStaticBatching = !!i2855[9]
  i2854.enableDynamicBatching = !!i2855[10]
  i2854.usePreservativeDynamicBatching = !!i2855[11]
  i2854.lightmapEncodingQuality = i2855[12]
  i2854.desiredColorSpace = i2855[13]
  var i2863 = i2855[14]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( i2863[i + 0] );
  }
  i2854.allTags = i2862
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2867 = data
  i2866.name = i2867[0]
  i2866.value = i2867[1]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2871 = data
  i2870.id = i2871[0]
  i2870.name = i2871[1]
  i2870.value = i2871[2]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2875 = data
  i2874.id = i2875[0]
  i2874.name = i2875[1]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2877 = data
  i2876.fixedDeltaTime = i2877[0]
  i2876.maximumDeltaTime = i2877[1]
  i2876.timeScale = i2877[2]
  i2876.maximumParticleTimestep = i2877[3]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2879 = data
  i2878.gravity = new pc.Vec3( i2879[0], i2879[1], i2879[2] )
  i2878.defaultSolverIterations = i2879[3]
  i2878.bounceThreshold = i2879[4]
  i2878.autoSyncTransforms = !!i2879[5]
  i2878.autoSimulation = !!i2879[6]
  var i2881 = i2879[7]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2881[i + 0]) );
  }
  i2878.collisionMatrix = i2880
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2885 = data
  i2884.enabled = !!i2885[0]
  i2884.layerId = i2885[1]
  i2884.otherLayerId = i2885[2]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2887 = data
  request.r(i2887[0], i2887[1], 0, i2886, 'material')
  i2886.gravity = new pc.Vec2( i2887[2], i2887[3] )
  i2886.positionIterations = i2887[4]
  i2886.velocityIterations = i2887[5]
  i2886.velocityThreshold = i2887[6]
  i2886.maxLinearCorrection = i2887[7]
  i2886.maxAngularCorrection = i2887[8]
  i2886.maxTranslationSpeed = i2887[9]
  i2886.maxRotationSpeed = i2887[10]
  i2886.baumgarteScale = i2887[11]
  i2886.baumgarteTOIScale = i2887[12]
  i2886.timeToSleep = i2887[13]
  i2886.linearSleepTolerance = i2887[14]
  i2886.angularSleepTolerance = i2887[15]
  i2886.defaultContactOffset = i2887[16]
  i2886.autoSimulation = !!i2887[17]
  i2886.queriesHitTriggers = !!i2887[18]
  i2886.queriesStartInColliders = !!i2887[19]
  i2886.callbacksOnDisable = !!i2887[20]
  i2886.reuseCollisionCallbacks = !!i2887[21]
  i2886.autoSyncTransforms = !!i2887[22]
  var i2889 = i2887[23]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2889[i + 0]) );
  }
  i2886.collisionMatrix = i2888
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2893 = data
  i2892.enabled = !!i2893[0]
  i2892.layerId = i2893[1]
  i2892.otherLayerId = i2893[2]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2897[i + 0]) );
  }
  i2894.qualityLevels = i2896
  var i2899 = i2895[1]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( i2899[i + 0] );
  }
  i2894.names = i2898
  i2894.shadows = i2895[2]
  i2894.anisotropicFiltering = i2895[3]
  i2894.antiAliasing = i2895[4]
  i2894.lodBias = i2895[5]
  i2894.shadowCascades = i2895[6]
  i2894.shadowDistance = i2895[7]
  i2894.shadowmaskMode = i2895[8]
  i2894.shadowProjection = i2895[9]
  i2894.shadowResolution = i2895[10]
  i2894.softParticles = !!i2895[11]
  i2894.softVegetation = !!i2895[12]
  i2894.activeColorSpace = i2895[13]
  i2894.desiredColorSpace = i2895[14]
  i2894.masterTextureLimit = i2895[15]
  i2894.maxQueuedFrames = i2895[16]
  i2894.particleRaycastBudget = i2895[17]
  i2894.pixelLightCount = i2895[18]
  i2894.realtimeReflectionProbes = !!i2895[19]
  i2894.shadowCascade2Split = i2895[20]
  i2894.shadowCascade4Split = new pc.Vec3( i2895[21], i2895[22], i2895[23] )
  i2894.streamingMipmapsActive = !!i2895[24]
  i2894.vSyncCount = i2895[25]
  i2894.asyncUploadBufferSize = i2895[26]
  i2894.asyncUploadTimeSlice = i2895[27]
  i2894.billboardsFaceCameraPosition = !!i2895[28]
  i2894.shadowNearPlaneOffset = i2895[29]
  i2894.streamingMipmapsMemoryBudget = i2895[30]
  i2894.maximumLODLevel = i2895[31]
  i2894.streamingMipmapsAddAllCameras = !!i2895[32]
  i2894.streamingMipmapsMaxLevelReduction = i2895[33]
  i2894.streamingMipmapsRenderersPerFrame = i2895[34]
  i2894.resolutionScalingFixedDPIFactor = i2895[35]
  i2894.streamingMipmapsMaxFileIORequests = i2895[36]
  i2894.currentQualityLevel = i2895[37]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2903 = data
  i2902.name = i2903[0]
  var i2905 = i2903[1]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2905[i + 0]) );
  }
  i2902.tos = i2904
  var i2907 = i2903[2]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2902.constant = i2906
  i2902.isValid = !!i2903[3]
  i2902.isHuman = !!i2903[4]
  i2902.hasRootMotion = !!i2903[5]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2911 = data
  i2910.hash = i2911[0]
  i2910.path = i2911[1]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2915 = data
  i2914.weight = i2915[0]
  i2914.vertices = i2915[1]
  i2914.normals = i2915[2]
  i2914.tangents = i2915[3]
  return i2914
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2916 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2917 = data
  request.r(i2917[0], i2917[1], 0, i2916, 'm_ObjectArgument')
  i2916.m_ObjectArgumentAssemblyTypeName = i2917[2]
  i2916.m_IntArgument = i2917[3]
  i2916.m_FloatArgument = i2917[4]
  i2916.m_StringArgument = i2917[5]
  i2916.m_BoolArgument = !!i2917[6]
  return i2916
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2918 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2919 = data
  i2918.m_GlyphIndex = i2919[0]
  i2918.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2919[1], i2918.m_GlyphValueRecord)
  return i2918
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2921 = data
  i2920.m_XCoordinate = i2921[0]
  i2920.m_YCoordinate = i2921[1]
  return i2920
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2923 = data
  i2922.m_XPositionAdjustment = i2923[0]
  i2922.m_YPositionAdjustment = i2923[1]
  return i2922
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2924 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2925 = data
  i2924.xPlacement = i2925[0]
  i2924.yPlacement = i2925[1]
  i2924.xAdvance = i2925[2]
  i2924.yAdvance = i2925[3]
  return i2924
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2927 = data
  i2926.m_XPlacement = i2927[0]
  i2926.m_YPlacement = i2927[1]
  i2926.m_XAdvance = i2927[2]
  i2926.m_YAdvance = i2927[3]
  return i2926
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[55],"76":[31],"77":[37],"78":[37],"79":[37],"80":[37],"81":[37],"82":[37],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[31],"98":[5],"99":[100],"101":[100],"12":[11],"102":[11],"16":[13],"103":[11],"104":[5,11],"24":[11,18],"105":[11],"106":[18,11],"107":[5],"108":[18,11],"109":[11],"110":[111],"112":[111],"113":[111],"114":[11],"115":[11],"14":[12],"19":[18,11],"116":[11],"13":[12],"117":[11],"118":[11],"119":[11],"120":[11],"121":[11],"122":[11],"123":[11],"23":[11],"124":[11],"125":[18,11],"126":[11],"127":[11],"128":[11],"129":[11],"130":[18,11],"131":[11],"132":[9],"133":[9],"10":[9],"134":[9],"135":[31],"136":[31]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","MorphSelectionFlow","UnityEngine.GameObject","UnityEngine.Camera","CameraFollow","CameraLook","UnityEngine.AudioClip","MorphTitlePulse","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.ParticleSystem","SoundHint","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","InputManager","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.MeshCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MorphSelectionLayout","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "31.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_HuyNQ_FSAHM_V08_HoaiTT_applovin";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1674";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4802";

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

Deserializers.buildID = "269b20b3-cd3a-405c-b4ae-6df680b3e04f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

