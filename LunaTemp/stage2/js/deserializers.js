var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.JointSpring' )
  var i2239 = data
  i2238.spring = i2239[0]
  i2238.damper = i2239[1]
  i2238.targetPosition = i2239[2]
  return i2238
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.JointMotor' )
  var i2241 = data
  i2240.m_TargetVelocity = i2241[0]
  i2240.m_Force = i2241[1]
  i2240.m_FreeSpin = i2241[2]
  return i2240
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.JointLimits' )
  var i2243 = data
  i2242.m_Min = i2243[0]
  i2242.m_Max = i2243[1]
  i2242.m_Bounciness = i2243[2]
  i2242.m_BounceMinVelocity = i2243[3]
  i2242.m_ContactDistance = i2243[4]
  i2242.minBounce = i2243[5]
  i2242.maxBounce = i2243[6]
  return i2242
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.JointDrive' )
  var i2245 = data
  i2244.m_PositionSpring = i2245[0]
  i2244.m_PositionDamper = i2245[1]
  i2244.m_MaximumForce = i2245[2]
  i2244.m_UseAcceleration = i2245[3]
  return i2244
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2247 = data
  i2246.m_Spring = i2247[0]
  i2246.m_Damper = i2247[1]
  return i2246
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2249 = data
  i2248.m_Limit = i2249[0]
  i2248.m_Bounciness = i2249[1]
  i2248.m_ContactDistance = i2249[2]
  return i2248
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2251 = data
  i2250.m_ExtremumSlip = i2251[0]
  i2250.m_ExtremumValue = i2251[1]
  i2250.m_AsymptoteSlip = i2251[2]
  i2250.m_AsymptoteValue = i2251[3]
  i2250.m_Stiffness = i2251[4]
  return i2250
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2253 = data
  i2252.m_LowerAngle = i2253[0]
  i2252.m_UpperAngle = i2253[1]
  return i2252
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2255 = data
  i2254.m_MotorSpeed = i2255[0]
  i2254.m_MaximumMotorTorque = i2255[1]
  return i2254
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2257 = data
  i2256.m_DampingRatio = i2257[0]
  i2256.m_Frequency = i2257[1]
  i2256.m_Angle = i2257[2]
  return i2256
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2259 = data
  i2258.m_LowerTranslation = i2259[0]
  i2258.m_UpperTranslation = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.width = i2261[1]
  i2260.height = i2261[2]
  i2260.mipmapCount = i2261[3]
  i2260.anisoLevel = i2261[4]
  i2260.filterMode = i2261[5]
  i2260.hdr = !!i2261[6]
  i2260.format = i2261[7]
  i2260.wrapMode = i2261[8]
  i2260.alphaIsTransparency = !!i2261[9]
  i2260.alphaSource = i2261[10]
  i2260.graphicsFormat = i2261[11]
  i2260.sRGBTexture = !!i2261[12]
  i2260.desiredColorSpace = i2261[13]
  i2260.wrapU = i2261[14]
  i2260.wrapV = i2261[15]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2262 = root || new pc.UnityMaterial()
  var i2263 = data
  i2262.name = i2263[0]
  request.r(i2263[1], i2263[2], 0, i2262, 'shader')
  i2262.renderQueue = i2263[3]
  i2262.enableInstancing = !!i2263[4]
  var i2265 = i2263[5]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2265[i + 0]) );
  }
  i2262.floatParameters = i2264
  var i2267 = i2263[6]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2267[i + 0]) );
  }
  i2262.colorParameters = i2266
  var i2269 = i2263[7]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2269[i + 0]) );
  }
  i2262.vectorParameters = i2268
  var i2271 = i2263[8]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2271[i + 0]) );
  }
  i2262.textureParameters = i2270
  var i2273 = i2263[9]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2273[i + 0]) );
  }
  i2262.materialFlags = i2272
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.value = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.value = new pc.Color(i2281[1], i2281[2], i2281[3], i2281[4])
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.value = new pc.Vec4( i2285[1], i2285[2], i2285[3], i2285[4] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2289 = data
  i2288.name = i2289[0]
  request.r(i2289[1], i2289[2], 0, i2288, 'value')
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.enabled = !!i2293[1]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2295 = data
  i2294.position = new pc.Vec3( i2295[0], i2295[1], i2295[2] )
  i2294.scale = new pc.Vec3( i2295[3], i2295[4], i2295[5] )
  i2294.rotation = new pc.Quat(i2295[6], i2295[7], i2295[8], i2295[9])
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'sharedMesh')
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'additionalVertexStreams')
  i2298.enabled = !!i2299[2]
  request.r(i2299[3], i2299[4], 0, i2298, 'sharedMaterial')
  var i2301 = i2299[5]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.sharedMaterials = i2300
  i2298.receiveShadows = !!i2299[6]
  i2298.shadowCastingMode = i2299[7]
  i2298.sortingLayerID = i2299[8]
  i2298.sortingOrder = i2299[9]
  i2298.lightmapIndex = i2299[10]
  i2298.lightmapSceneIndex = i2299[11]
  i2298.lightmapScaleOffset = new pc.Vec4( i2299[12], i2299[13], i2299[14], i2299[15] )
  i2298.lightProbeUsage = i2299[16]
  i2298.reflectionProbeUsage = i2299[17]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2305 = data
  i2304.name = i2305[0]
  i2304.tagId = i2305[1]
  i2304.enabled = !!i2305[2]
  i2304.isStatic = !!i2305[3]
  i2304.layer = i2305[4]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2307 = data
  i2306.name = i2307[0]
  i2306.halfPrecision = !!i2307[1]
  i2306.useSimplification = !!i2307[2]
  i2306.useUInt32IndexFormat = !!i2307[3]
  i2306.vertexCount = i2307[4]
  i2306.aabb = i2307[5]
  var i2309 = i2307[6]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( !!i2309[i + 0] );
  }
  i2306.streams = i2308
  i2306.vertices = i2307[7]
  var i2311 = i2307[8]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2311[i + 0]) );
  }
  i2306.subMeshes = i2310
  var i2313 = i2307[9]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 16) {
    i2312.push( new pc.Mat4().setData(i2313[i + 0], i2313[i + 1], i2313[i + 2], i2313[i + 3],  i2313[i + 4], i2313[i + 5], i2313[i + 6], i2313[i + 7],  i2313[i + 8], i2313[i + 9], i2313[i + 10], i2313[i + 11],  i2313[i + 12], i2313[i + 13], i2313[i + 14], i2313[i + 15]) );
  }
  i2306.bindposes = i2312
  var i2315 = i2307[10]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2315[i + 0]) );
  }
  i2306.blendShapes = i2314
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2321 = data
  i2320.triangles = i2321[0]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2327 = data
  i2326.name = i2327[0]
  var i2329 = i2327[1]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2329[i + 0]) );
  }
  i2326.frames = i2328
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'animatorController')
  request.r(i2331[2], i2331[3], 0, i2330, 'avatar')
  i2330.updateMode = i2331[4]
  i2330.hasTransformHierarchy = !!i2331[5]
  i2330.applyRootMotion = !!i2331[6]
  var i2333 = i2331[7]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2330.humanBones = i2332
  i2330.enabled = !!i2331[8]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'clip')
  request.r(i2337[2], i2337[3], 0, i2336, 'outputAudioMixerGroup')
  i2336.playOnAwake = !!i2337[4]
  i2336.loop = !!i2337[5]
  i2336.time = i2337[6]
  i2336.volume = i2337[7]
  i2336.pitch = i2337[8]
  i2336.enabled = !!i2337[9]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2339 = data
  i2338.color = new pc.Color(i2339[0], i2339[1], i2339[2], i2339[3])
  request.r(i2339[4], i2339[5], 0, i2338, 'sprite')
  i2338.flipX = !!i2339[6]
  i2338.flipY = !!i2339[7]
  i2338.drawMode = i2339[8]
  i2338.size = new pc.Vec2( i2339[9], i2339[10] )
  i2338.tileMode = i2339[11]
  i2338.adaptiveModeThreshold = i2339[12]
  i2338.maskInteraction = i2339[13]
  i2338.spriteSortPoint = i2339[14]
  i2338.enabled = !!i2339[15]
  request.r(i2339[16], i2339[17], 0, i2338, 'sharedMaterial')
  var i2341 = i2339[18]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 2, i2340, '')
  }
  i2338.sharedMaterials = i2340
  i2338.receiveShadows = !!i2339[19]
  i2338.shadowCastingMode = i2339[20]
  i2338.sortingLayerID = i2339[21]
  i2338.sortingOrder = i2339[22]
  i2338.lightmapIndex = i2339[23]
  i2338.lightmapSceneIndex = i2339[24]
  i2338.lightmapScaleOffset = new pc.Vec4( i2339[25], i2339[26], i2339[27], i2339[28] )
  i2338.lightProbeUsage = i2339[29]
  i2338.reflectionProbeUsage = i2339[30]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2343 = data
  i2342.name = i2343[0]
  i2342.atlasId = i2343[1]
  i2342.mipmapCount = i2343[2]
  i2342.hdr = !!i2343[3]
  i2342.size = i2343[4]
  i2342.anisoLevel = i2343[5]
  i2342.filterMode = i2343[6]
  var i2345 = i2343[7]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 4) {
    i2344.push( UnityEngine.Rect.MinMaxRect(i2345[i + 0], i2345[i + 1], i2345[i + 2], i2345[i + 3]) );
  }
  i2342.rects = i2344
  i2342.wrapU = i2343[8]
  i2342.wrapV = i2343[9]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.index = i2349[1]
  i2348.startup = !!i2349[2]
  return i2348
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'm_FirstSelected')
  i2350.m_sendNavigationEvents = !!i2351[2]
  i2350.m_DragThreshold = i2351[3]
  return i2350
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2353 = data
  i2352.m_HorizontalAxis = i2353[0]
  i2352.m_VerticalAxis = i2353[1]
  i2352.m_SubmitButton = i2353[2]
  i2352.m_CancelButton = i2353[3]
  i2352.m_InputActionsPerSecond = i2353[4]
  i2352.m_RepeatDelay = i2353[5]
  i2352.m_ForceModuleActive = !!i2353[6]
  i2352.m_SendPointerHoverToParent = !!i2353[7]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2355 = data
  i2354.pivot = new pc.Vec2( i2355[0], i2355[1] )
  i2354.anchorMin = new pc.Vec2( i2355[2], i2355[3] )
  i2354.anchorMax = new pc.Vec2( i2355[4], i2355[5] )
  i2354.sizeDelta = new pc.Vec2( i2355[6], i2355[7] )
  i2354.anchoredPosition3D = new pc.Vec3( i2355[8], i2355[9], i2355[10] )
  i2354.rotation = new pc.Quat(i2355[11], i2355[12], i2355[13], i2355[14])
  i2354.scale = new pc.Vec3( i2355[15], i2355[16], i2355[17] )
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2357 = data
  i2356.planeDistance = i2357[0]
  i2356.referencePixelsPerUnit = i2357[1]
  i2356.isFallbackOverlay = !!i2357[2]
  i2356.renderMode = i2357[3]
  i2356.renderOrder = i2357[4]
  i2356.sortingLayerName = i2357[5]
  i2356.sortingOrder = i2357[6]
  i2356.scaleFactor = i2357[7]
  request.r(i2357[8], i2357[9], 0, i2356, 'worldCamera')
  i2356.overrideSorting = !!i2357[10]
  i2356.pixelPerfect = !!i2357[11]
  i2356.targetDisplay = i2357[12]
  i2356.overridePixelPerfect = !!i2357[13]
  i2356.enabled = !!i2357[14]
  return i2356
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2359 = data
  i2358.m_UiScaleMode = i2359[0]
  i2358.m_ReferencePixelsPerUnit = i2359[1]
  i2358.m_ScaleFactor = i2359[2]
  i2358.m_ReferenceResolution = new pc.Vec2( i2359[3], i2359[4] )
  i2358.m_ScreenMatchMode = i2359[5]
  i2358.m_MatchWidthOrHeight = i2359[6]
  i2358.m_PhysicalUnit = i2359[7]
  i2358.m_FallbackScreenDPI = i2359[8]
  i2358.m_DefaultSpriteDPI = i2359[9]
  i2358.m_DynamicPixelsPerUnit = i2359[10]
  i2358.m_PresetInfoIsWorld = !!i2359[11]
  return i2358
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2361 = data
  i2360.m_IgnoreReversedGraphics = !!i2361[0]
  i2360.m_BlockingObjects = i2361[1]
  i2360.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2361[2] )
  return i2360
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2362 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2363 = data
  i2362._referenceResolution = new pc.Vec2( i2363[0], i2363[1] )
  i2362._portraitMatch = i2363[2]
  i2362._landscapeMatch = i2363[3]
  i2362._squareMatch = i2363[4]
  i2362._portraitAspectThreshold = i2363[5]
  i2362._landscapeAspectThreshold = i2363[6]
  i2362._aspectEpsilon = i2363[7]
  return i2362
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2364 = root || request.c( 'Joystick' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'background')
  request.r(i2365[2], i2365[3], 0, i2364, 'joy')
  i2364.deadZone = i2365[4]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2367 = data
  i2366.cullTransparentMesh = !!i2367[0]
  return i2366
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.UI.Image' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'm_Sprite')
  i2368.m_Type = i2369[2]
  i2368.m_PreserveAspect = !!i2369[3]
  i2368.m_FillCenter = !!i2369[4]
  i2368.m_FillMethod = i2369[5]
  i2368.m_FillAmount = i2369[6]
  i2368.m_FillClockwise = !!i2369[7]
  i2368.m_FillOrigin = i2369[8]
  i2368.m_UseSpriteMesh = !!i2369[9]
  i2368.m_PixelsPerUnitMultiplier = i2369[10]
  request.r(i2369[11], i2369[12], 0, i2368, 'm_Material')
  i2368.m_Maskable = !!i2369[13]
  i2368.m_Color = new pc.Color(i2369[14], i2369[15], i2369[16], i2369[17])
  i2368.m_RaycastTarget = !!i2369[18]
  i2368.m_RaycastPadding = new pc.Vec4( i2369[19], i2369[20], i2369[21], i2369[22] )
  return i2368
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2370 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2371 = data
  i2370.m_hasFontAssetChanged = !!i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'm_baseMaterial')
  i2370.m_maskOffset = new pc.Vec4( i2371[3], i2371[4], i2371[5], i2371[6] )
  i2370.m_text = i2371[7]
  i2370.m_isRightToLeft = !!i2371[8]
  request.r(i2371[9], i2371[10], 0, i2370, 'm_fontAsset')
  request.r(i2371[11], i2371[12], 0, i2370, 'm_sharedMaterial')
  var i2373 = i2371[13]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2370.m_fontSharedMaterials = i2372
  request.r(i2371[14], i2371[15], 0, i2370, 'm_fontMaterial')
  var i2375 = i2371[16]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2370.m_fontMaterials = i2374
  i2370.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2371[17], i2371[18], i2371[19], i2371[20])
  i2370.m_fontColor = new pc.Color(i2371[21], i2371[22], i2371[23], i2371[24])
  i2370.m_enableVertexGradient = !!i2371[25]
  i2370.m_colorMode = i2371[26]
  i2370.m_fontColorGradient = request.d('TMPro.VertexGradient', i2371[27], i2370.m_fontColorGradient)
  request.r(i2371[28], i2371[29], 0, i2370, 'm_fontColorGradientPreset')
  request.r(i2371[30], i2371[31], 0, i2370, 'm_spriteAsset')
  i2370.m_tintAllSprites = !!i2371[32]
  request.r(i2371[33], i2371[34], 0, i2370, 'm_StyleSheet')
  i2370.m_TextStyleHashCode = i2371[35]
  i2370.m_overrideHtmlColors = !!i2371[36]
  i2370.m_faceColor = UnityEngine.Color32.ConstructColor(i2371[37], i2371[38], i2371[39], i2371[40])
  i2370.m_fontSize = i2371[41]
  i2370.m_fontSizeBase = i2371[42]
  i2370.m_fontWeight = i2371[43]
  i2370.m_enableAutoSizing = !!i2371[44]
  i2370.m_fontSizeMin = i2371[45]
  i2370.m_fontSizeMax = i2371[46]
  i2370.m_fontStyle = i2371[47]
  i2370.m_HorizontalAlignment = i2371[48]
  i2370.m_VerticalAlignment = i2371[49]
  i2370.m_textAlignment = i2371[50]
  i2370.m_characterSpacing = i2371[51]
  i2370.m_wordSpacing = i2371[52]
  i2370.m_lineSpacing = i2371[53]
  i2370.m_lineSpacingMax = i2371[54]
  i2370.m_paragraphSpacing = i2371[55]
  i2370.m_charWidthMaxAdj = i2371[56]
  i2370.m_TextWrappingMode = i2371[57]
  i2370.m_wordWrappingRatios = i2371[58]
  i2370.m_overflowMode = i2371[59]
  request.r(i2371[60], i2371[61], 0, i2370, 'm_linkedTextComponent')
  request.r(i2371[62], i2371[63], 0, i2370, 'parentLinkedComponent')
  i2370.m_enableKerning = !!i2371[64]
  var i2377 = i2371[65]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(i2377[i + 0]);
  }
  i2370.m_ActiveFontFeatures = i2376
  i2370.m_enableExtraPadding = !!i2371[66]
  i2370.checkPaddingRequired = !!i2371[67]
  i2370.m_isRichText = !!i2371[68]
  i2370.m_parseCtrlCharacters = !!i2371[69]
  i2370.m_isOrthographic = !!i2371[70]
  i2370.m_isCullingEnabled = !!i2371[71]
  i2370.m_horizontalMapping = i2371[72]
  i2370.m_verticalMapping = i2371[73]
  i2370.m_uvLineOffset = i2371[74]
  i2370.m_geometrySortingOrder = i2371[75]
  i2370.m_IsTextObjectScaleStatic = !!i2371[76]
  i2370.m_VertexBufferAutoSizeReduction = !!i2371[77]
  i2370.m_useMaxVisibleDescender = !!i2371[78]
  i2370.m_pageToDisplay = i2371[79]
  i2370.m_margin = new pc.Vec4( i2371[80], i2371[81], i2371[82], i2371[83] )
  i2370.m_isUsingLegacyAnimationComponent = !!i2371[84]
  i2370.m_isVolumetricText = !!i2371[85]
  request.r(i2371[86], i2371[87], 0, i2370, 'm_Material')
  i2370.m_EmojiFallbackSupport = !!i2371[88]
  i2370.m_Maskable = !!i2371[89]
  i2370.m_Color = new pc.Color(i2371[90], i2371[91], i2371[92], i2371[93])
  i2370.m_RaycastTarget = !!i2371[94]
  i2370.m_RaycastPadding = new pc.Vec4( i2371[95], i2371[96], i2371[97], i2371[98] )
  return i2370
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2378 = root || request.c( 'TMPro.VertexGradient' )
  var i2379 = data
  i2378.topLeft = new pc.Color(i2379[0], i2379[1], i2379[2], i2379[3])
  i2378.topRight = new pc.Color(i2379[4], i2379[5], i2379[6], i2379[7])
  i2378.bottomLeft = new pc.Color(i2379[8], i2379[9], i2379[10], i2379[11])
  i2378.bottomRight = new pc.Color(i2379[12], i2379[13], i2379[14], i2379[15])
  return i2378
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.Button' )
  var i2383 = data
  i2382.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2383[0], i2382.m_OnClick)
  i2382.m_Navigation = request.d('UnityEngine.UI.Navigation', i2383[1], i2382.m_Navigation)
  i2382.m_Transition = i2383[2]
  i2382.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2383[3], i2382.m_Colors)
  i2382.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2383[4], i2382.m_SpriteState)
  i2382.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2383[5], i2382.m_AnimationTriggers)
  i2382.m_Interactable = !!i2383[6]
  request.r(i2383[7], i2383[8], 0, i2382, 'm_TargetGraphic')
  return i2382
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2385 = data
  i2384.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2385[0], i2384.m_PersistentCalls)
  return i2384
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(request.d('UnityEngine.Events.PersistentCall', i2389[i + 0]));
  }
  i2386.m_Calls = i2388
  return i2386
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'm_Target')
  i2392.m_TargetAssemblyTypeName = i2393[2]
  i2392.m_MethodName = i2393[3]
  i2392.m_Mode = i2393[4]
  i2392.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2393[5], i2392.m_Arguments)
  i2392.m_CallState = i2393[6]
  return i2392
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2395 = data
  i2394.m_Mode = i2395[0]
  i2394.m_WrapAround = !!i2395[1]
  request.r(i2395[2], i2395[3], 0, i2394, 'm_SelectOnUp')
  request.r(i2395[4], i2395[5], 0, i2394, 'm_SelectOnDown')
  request.r(i2395[6], i2395[7], 0, i2394, 'm_SelectOnLeft')
  request.r(i2395[8], i2395[9], 0, i2394, 'm_SelectOnRight')
  return i2394
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2397 = data
  i2396.m_NormalColor = new pc.Color(i2397[0], i2397[1], i2397[2], i2397[3])
  i2396.m_HighlightedColor = new pc.Color(i2397[4], i2397[5], i2397[6], i2397[7])
  i2396.m_PressedColor = new pc.Color(i2397[8], i2397[9], i2397[10], i2397[11])
  i2396.m_SelectedColor = new pc.Color(i2397[12], i2397[13], i2397[14], i2397[15])
  i2396.m_DisabledColor = new pc.Color(i2397[16], i2397[17], i2397[18], i2397[19])
  i2396.m_ColorMultiplier = i2397[20]
  i2396.m_FadeDuration = i2397[21]
  return i2396
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'm_HighlightedSprite')
  request.r(i2399[2], i2399[3], 0, i2398, 'm_PressedSprite')
  request.r(i2399[4], i2399[5], 0, i2398, 'm_SelectedSprite')
  request.r(i2399[6], i2399[7], 0, i2398, 'm_DisabledSprite')
  return i2398
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2401 = data
  i2400.m_NormalTrigger = i2401[0]
  i2400.m_HighlightedTrigger = i2401[1]
  i2400.m_PressedTrigger = i2401[2]
  i2400.m_SelectedTrigger = i2401[3]
  i2400.m_DisabledTrigger = i2401[4]
  return i2400
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2402 = root || request.c( 'JumpButton' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'button')
  return i2402
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2405 = data
  i2404.m_ShowMaskGraphic = !!i2405[0]
  return i2404
}

Deserializers["TutController"] = function (request, data, root) {
  var i2406 = root || request.c( 'TutController' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'tutScene')
  request.r(i2407[2], i2407[3], 0, i2406, 'startTut')
  request.r(i2407[4], i2407[5], 0, i2406, 'playTut')
  request.r(i2407[6], i2407[7], 0, i2406, 'farTut')
  request.r(i2407[8], i2407[9], 0, i2406, 'failTut')
  request.r(i2407[10], i2407[11], 0, i2406, 'joystickTutHand')
  request.r(i2407[12], i2407[13], 0, i2406, 'joystickTutLabel')
  i2406.joystickHandSwipeDistance = i2407[14]
  i2406.joystickHandSwipeDuration = i2407[15]
  return i2406
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2408 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2409 = data
  i2408.targetIsSelf = !!i2409[0]
  request.r(i2409[1], i2409[2], 0, i2408, 'targetGO')
  i2408.tweenTargetIsTargetGO = !!i2409[3]
  i2408.delay = i2409[4]
  i2408.duration = i2409[5]
  i2408.easeType = i2409[6]
  i2408.easeCurve = new pc.AnimationCurve( { keys_flow: i2409[7] } )
  i2408.loopType = i2409[8]
  i2408.loops = i2409[9]
  i2408.id = i2409[10]
  i2408.isRelative = !!i2409[11]
  i2408.isFrom = !!i2409[12]
  i2408.isIndependentUpdate = !!i2409[13]
  i2408.autoKill = !!i2409[14]
  i2408.autoGenerate = !!i2409[15]
  i2408.isActive = !!i2409[16]
  i2408.isValid = !!i2409[17]
  request.r(i2409[18], i2409[19], 0, i2408, 'target')
  i2408.animationType = i2409[20]
  i2408.targetType = i2409[21]
  i2408.forcedTargetType = i2409[22]
  i2408.autoPlay = !!i2409[23]
  i2408.useTargetAsV3 = !!i2409[24]
  i2408.endValueFloat = i2409[25]
  i2408.endValueV3 = new pc.Vec3( i2409[26], i2409[27], i2409[28] )
  i2408.endValueV2 = new pc.Vec2( i2409[29], i2409[30] )
  i2408.endValueColor = new pc.Color(i2409[31], i2409[32], i2409[33], i2409[34])
  i2408.endValueString = i2409[35]
  i2408.endValueRect = UnityEngine.Rect.MinMaxRect(i2409[36], i2409[37], i2409[38], i2409[39])
  request.r(i2409[40], i2409[41], 0, i2408, 'endValueTransform')
  i2408.optionalBool0 = !!i2409[42]
  i2408.optionalBool1 = !!i2409[43]
  i2408.optionalFloat0 = i2409[44]
  i2408.optionalInt0 = i2409[45]
  i2408.optionalRotationMode = i2409[46]
  i2408.optionalScrambleMode = i2409[47]
  i2408.optionalShakeRandomnessMode = i2409[48]
  i2408.optionalString = i2409[49]
  i2408.updateType = i2409[50]
  i2408.isSpeedBased = !!i2409[51]
  i2408.hasOnStart = !!i2409[52]
  i2408.hasOnPlay = !!i2409[53]
  i2408.hasOnUpdate = !!i2409[54]
  i2408.hasOnStepComplete = !!i2409[55]
  i2408.hasOnComplete = !!i2409[56]
  i2408.hasOnTweenCreated = !!i2409[57]
  i2408.hasOnRewind = !!i2409[58]
  i2408.onStart = request.d('UnityEngine.Events.UnityEvent', i2409[59], i2408.onStart)
  i2408.onPlay = request.d('UnityEngine.Events.UnityEvent', i2409[60], i2408.onPlay)
  i2408.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2409[61], i2408.onUpdate)
  i2408.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2409[62], i2408.onStepComplete)
  i2408.onComplete = request.d('UnityEngine.Events.UnityEvent', i2409[63], i2408.onComplete)
  i2408.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2409[64], i2408.onTweenCreated)
  i2408.onRewind = request.d('UnityEngine.Events.UnityEvent', i2409[65], i2408.onRewind)
  return i2408
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2411 = data
  i2410.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2411[0], i2410.m_PersistentCalls)
  return i2410
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2412 = root || request.c( 'HideOnPointer' )
  var i2413 = data
  i2412.OnPointerDownEvent = request.d('System.Action', i2413[0], i2412.OnPointerDownEvent)
  return i2412
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2414 = root || request.c( 'System.Action' )
  var i2415 = data
  return i2414
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i2416 = root || request.c( 'MorphSelectionFlow' )
  var i2417 = data
  var i2419 = i2417[0]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('MorphSelectionFlow+Morph', i2419[i + 0]) );
  }
  i2416.morphs = i2418
  request.r(i2417[1], i2417[2], 0, i2416, 'selectionPanel')
  request.r(i2417[3], i2417[4], 0, i2416, 'previewPanel')
  request.r(i2417[5], i2417[6], 0, i2416, 'backdrop')
  request.r(i2417[7], i2417[8], 0, i2416, 'previewImage')
  i2416.previewPortraitSize = new pc.Vec2( i2417[9], i2417[10] )
  request.r(i2417[11], i2417[12], 0, i2416, 'aura')
  request.r(i2417[13], i2417[14], 0, i2416, 'selectButton')
  request.r(i2417[15], i2417[16], 0, i2416, 'unlockedMessage')
  request.r(i2417[17], i2417[18], 0, i2416, 'revealCamera')
  request.r(i2417[19], i2417[20], 0, i2416, 'spawnPoint')
  var i2421 = i2417[21]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 2, i2420, '')
  }
  i2416.hideOnStart = i2420
  var i2423 = i2417[22]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 2, i2422, '')
  }
  i2416.disableOnStart = i2422
  i2416.orbitDuration = i2417[23]
  i2416.unlockedMessageDuration = i2417[24]
  i2416.auraSpeed = i2417[25]
  request.r(i2417[26], i2417[27], 0, i2416, 'auraSfx')
  request.r(i2417[28], i2417[29], 0, i2416, 'orbitSfx')
  return i2416
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i2426 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'prefab')
  request.r(i2427[2], i2427[3], 0, i2426, 'portrait')
  request.r(i2427[4], i2427[5], 0, i2426, 'card')
  request.r(i2427[6], i2427[7], 0, i2426, 'unlockedBadge')
  return i2426
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i2432 = root || request.c( 'MorphTitlePulse' )
  var i2433 = data
  i2432.scaleMultiplier = i2433[0]
  i2432.duration = i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2435 = data
  i2434.center = new pc.Vec3( i2435[0], i2435[1], i2435[2] )
  i2434.size = new pc.Vec3( i2435[3], i2435[4], i2435[5] )
  i2434.enabled = !!i2435[6]
  i2434.isTrigger = !!i2435[7]
  request.r(i2435[8], i2435[9], 0, i2434, 'material')
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2437 = data
  i2436.mass = i2437[0]
  i2436.drag = i2437[1]
  i2436.angularDrag = i2437[2]
  i2436.useGravity = !!i2437[3]
  i2436.isKinematic = !!i2437[4]
  i2436.constraints = i2437[5]
  i2436.maxAngularVelocity = i2437[6]
  i2436.collisionDetectionMode = i2437[7]
  i2436.interpolation = i2437[8]
  return i2436
}

Deserializers["Gift"] = function (request, data, root) {
  var i2438 = root || request.c( 'Gift' )
  var i2439 = data
  i2438.collectDone = !!i2439[0]
  var i2441 = i2439[1]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 1, i2440, '')
  }
  i2438.hints = i2440
  request.r(i2439[2], i2439[3], 0, i2438, 'collectSound')
  request.r(i2439[4], i2439[5], 0, i2438, 'collectEffect')
  request.r(i2439[6], i2439[7], 0, i2438, 'arrow')
  return i2438
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2444 = root || request.c( 'SoundHint' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'Sound')
  request.r(i2445[2], i2445[3], 0, i2444, 'Source')
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'mesh')
  i2446.meshCount = i2447[2]
  i2446.activeVertexStreamsCount = i2447[3]
  i2446.alignment = i2447[4]
  i2446.renderMode = i2447[5]
  i2446.sortMode = i2447[6]
  i2446.lengthScale = i2447[7]
  i2446.velocityScale = i2447[8]
  i2446.cameraVelocityScale = i2447[9]
  i2446.normalDirection = i2447[10]
  i2446.sortingFudge = i2447[11]
  i2446.minParticleSize = i2447[12]
  i2446.maxParticleSize = i2447[13]
  i2446.pivot = new pc.Vec3( i2447[14], i2447[15], i2447[16] )
  request.r(i2447[17], i2447[18], 0, i2446, 'trailMaterial')
  i2446.applyActiveColorSpace = !!i2447[19]
  i2446.enabled = !!i2447[20]
  request.r(i2447[21], i2447[22], 0, i2446, 'sharedMaterial')
  var i2449 = i2447[23]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2446.sharedMaterials = i2448
  i2446.receiveShadows = !!i2447[24]
  i2446.shadowCastingMode = i2447[25]
  i2446.sortingLayerID = i2447[26]
  i2446.sortingOrder = i2447[27]
  i2446.lightmapIndex = i2447[28]
  i2446.lightmapSceneIndex = i2447[29]
  i2446.lightmapScaleOffset = new pc.Vec4( i2447[30], i2447[31], i2447[32], i2447[33] )
  i2446.lightProbeUsage = i2447[34]
  i2446.reflectionProbeUsage = i2447[35]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2451 = data
  i2450.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2451[0], i2450.main)
  i2450.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2451[1], i2450.colorBySpeed)
  i2450.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2451[2], i2450.colorOverLifetime)
  i2450.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2451[3], i2450.emission)
  i2450.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2451[4], i2450.rotationBySpeed)
  i2450.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2451[5], i2450.rotationOverLifetime)
  i2450.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2451[6], i2450.shape)
  i2450.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2451[7], i2450.sizeBySpeed)
  i2450.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2451[8], i2450.sizeOverLifetime)
  i2450.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2451[9], i2450.textureSheetAnimation)
  i2450.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2451[10], i2450.velocityOverLifetime)
  i2450.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2451[11], i2450.noise)
  i2450.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2451[12], i2450.inheritVelocity)
  i2450.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2451[13], i2450.forceOverLifetime)
  i2450.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2451[14], i2450.limitVelocityOverLifetime)
  i2450.useAutoRandomSeed = !!i2451[15]
  i2450.randomSeed = i2451[16]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemMain()
  var i2453 = data
  i2452.duration = i2453[0]
  i2452.loop = !!i2453[1]
  i2452.prewarm = !!i2453[2]
  i2452.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[3], i2452.startDelay)
  i2452.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[4], i2452.startLifetime)
  i2452.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[5], i2452.startSpeed)
  i2452.startSize3D = !!i2453[6]
  i2452.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[7], i2452.startSizeX)
  i2452.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[8], i2452.startSizeY)
  i2452.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[9], i2452.startSizeZ)
  i2452.startRotation3D = !!i2453[10]
  i2452.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[11], i2452.startRotationX)
  i2452.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[12], i2452.startRotationY)
  i2452.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[13], i2452.startRotationZ)
  i2452.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2453[14], i2452.startColor)
  i2452.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[15], i2452.gravityModifier)
  i2452.simulationSpace = i2453[16]
  request.r(i2453[17], i2453[18], 0, i2452, 'customSimulationSpace')
  i2452.simulationSpeed = i2453[19]
  i2452.useUnscaledTime = !!i2453[20]
  i2452.scalingMode = i2453[21]
  i2452.playOnAwake = !!i2453[22]
  i2452.maxParticles = i2453[23]
  i2452.emitterVelocityMode = i2453[24]
  i2452.stopAction = i2453[25]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2454 = root || new pc.MinMaxCurve()
  var i2455 = data
  i2454.mode = i2455[0]
  i2454.curveMin = new pc.AnimationCurve( { keys_flow: i2455[1] } )
  i2454.curveMax = new pc.AnimationCurve( { keys_flow: i2455[2] } )
  i2454.curveMultiplier = i2455[3]
  i2454.constantMin = i2455[4]
  i2454.constantMax = i2455[5]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2456 = root || new pc.MinMaxGradient()
  var i2457 = data
  i2456.mode = i2457[0]
  i2456.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2457[1], i2456.gradientMin)
  i2456.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2457[2], i2456.gradientMax)
  i2456.colorMin = new pc.Color(i2457[3], i2457[4], i2457[5], i2457[6])
  i2456.colorMax = new pc.Color(i2457[7], i2457[8], i2457[9], i2457[10])
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2459 = data
  i2458.mode = i2459[0]
  var i2461 = i2459[1]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2461[i + 0]) );
  }
  i2458.colorKeys = i2460
  var i2463 = i2459[2]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2463[i + 0]) );
  }
  i2458.alphaKeys = i2462
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2464 = root || new pc.ParticleSystemColorBySpeed()
  var i2465 = data
  i2464.enabled = !!i2465[0]
  i2464.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2465[1], i2464.color)
  i2464.range = new pc.Vec2( i2465[2], i2465[3] )
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2469 = data
  i2468.color = new pc.Color(i2469[0], i2469[1], i2469[2], i2469[3])
  i2468.time = i2469[4]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2473 = data
  i2472.alpha = i2473[0]
  i2472.time = i2473[1]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemColorOverLifetime()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2475[1], i2474.color)
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2476 = root || new pc.ParticleSystemEmitter()
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[1], i2476.rateOverTime)
  i2476.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[2], i2476.rateOverDistance)
  var i2479 = i2477[3]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2479[i + 0]) );
  }
  i2476.bursts = i2478
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2482 = root || new pc.ParticleSystemBurst()
  var i2483 = data
  i2482.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2483[0], i2482.count)
  i2482.cycleCount = i2483[1]
  i2482.minCount = i2483[2]
  i2482.maxCount = i2483[3]
  i2482.repeatInterval = i2483[4]
  i2482.time = i2483[5]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2484 = root || new pc.ParticleSystemRotationBySpeed()
  var i2485 = data
  i2484.enabled = !!i2485[0]
  i2484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[1], i2484.x)
  i2484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[2], i2484.y)
  i2484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[3], i2484.z)
  i2484.separateAxes = !!i2485[4]
  i2484.range = new pc.Vec2( i2485[5], i2485[6] )
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2486 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2487 = data
  i2486.enabled = !!i2487[0]
  i2486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[1], i2486.x)
  i2486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[2], i2486.y)
  i2486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[3], i2486.z)
  i2486.separateAxes = !!i2487[4]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2488 = root || new pc.ParticleSystemShape()
  var i2489 = data
  i2488.enabled = !!i2489[0]
  i2488.shapeType = i2489[1]
  i2488.randomDirectionAmount = i2489[2]
  i2488.sphericalDirectionAmount = i2489[3]
  i2488.randomPositionAmount = i2489[4]
  i2488.alignToDirection = !!i2489[5]
  i2488.radius = i2489[6]
  i2488.radiusMode = i2489[7]
  i2488.radiusSpread = i2489[8]
  i2488.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[9], i2488.radiusSpeed)
  i2488.radiusThickness = i2489[10]
  i2488.angle = i2489[11]
  i2488.length = i2489[12]
  i2488.boxThickness = new pc.Vec3( i2489[13], i2489[14], i2489[15] )
  i2488.meshShapeType = i2489[16]
  request.r(i2489[17], i2489[18], 0, i2488, 'mesh')
  request.r(i2489[19], i2489[20], 0, i2488, 'meshRenderer')
  request.r(i2489[21], i2489[22], 0, i2488, 'skinnedMeshRenderer')
  i2488.useMeshMaterialIndex = !!i2489[23]
  i2488.meshMaterialIndex = i2489[24]
  i2488.useMeshColors = !!i2489[25]
  i2488.normalOffset = i2489[26]
  i2488.arc = i2489[27]
  i2488.arcMode = i2489[28]
  i2488.arcSpread = i2489[29]
  i2488.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[30], i2488.arcSpeed)
  i2488.donutRadius = i2489[31]
  i2488.position = new pc.Vec3( i2489[32], i2489[33], i2489[34] )
  i2488.rotation = new pc.Vec3( i2489[35], i2489[36], i2489[37] )
  i2488.scale = new pc.Vec3( i2489[38], i2489[39], i2489[40] )
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2490 = root || new pc.ParticleSystemSizeBySpeed()
  var i2491 = data
  i2490.enabled = !!i2491[0]
  i2490.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[1], i2490.x)
  i2490.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[2], i2490.y)
  i2490.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[3], i2490.z)
  i2490.separateAxes = !!i2491[4]
  i2490.range = new pc.Vec2( i2491[5], i2491[6] )
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2492 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2493 = data
  i2492.enabled = !!i2493[0]
  i2492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[1], i2492.x)
  i2492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[2], i2492.y)
  i2492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[3], i2492.z)
  i2492.separateAxes = !!i2493[4]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2494 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2495 = data
  i2494.enabled = !!i2495[0]
  i2494.mode = i2495[1]
  i2494.animation = i2495[2]
  i2494.numTilesX = i2495[3]
  i2494.numTilesY = i2495[4]
  i2494.useRandomRow = !!i2495[5]
  i2494.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[6], i2494.frameOverTime)
  i2494.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[7], i2494.startFrame)
  i2494.cycleCount = i2495[8]
  i2494.rowIndex = i2495[9]
  i2494.flipU = i2495[10]
  i2494.flipV = i2495[11]
  i2494.spriteCount = i2495[12]
  var i2497 = i2495[13]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494.sprites = i2496
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2500 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2501 = data
  i2500.enabled = !!i2501[0]
  i2500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[1], i2500.x)
  i2500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[2], i2500.y)
  i2500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[3], i2500.z)
  i2500.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[4], i2500.radial)
  i2500.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[5], i2500.speedModifier)
  i2500.space = i2501[6]
  i2500.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[7], i2500.orbitalX)
  i2500.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[8], i2500.orbitalY)
  i2500.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[9], i2500.orbitalZ)
  i2500.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[10], i2500.orbitalOffsetX)
  i2500.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[11], i2500.orbitalOffsetY)
  i2500.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2501[12], i2500.orbitalOffsetZ)
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2502 = root || new pc.ParticleSystemNoise()
  var i2503 = data
  i2502.enabled = !!i2503[0]
  i2502.separateAxes = !!i2503[1]
  i2502.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[2], i2502.strengthX)
  i2502.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[3], i2502.strengthY)
  i2502.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[4], i2502.strengthZ)
  i2502.frequency = i2503[5]
  i2502.damping = !!i2503[6]
  i2502.octaveCount = i2503[7]
  i2502.octaveMultiplier = i2503[8]
  i2502.octaveScale = i2503[9]
  i2502.quality = i2503[10]
  i2502.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[11], i2502.scrollSpeed)
  i2502.scrollSpeedMultiplier = i2503[12]
  i2502.remapEnabled = !!i2503[13]
  i2502.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[14], i2502.remapX)
  i2502.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[15], i2502.remapY)
  i2502.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[16], i2502.remapZ)
  i2502.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[17], i2502.positionAmount)
  i2502.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[18], i2502.rotationAmount)
  i2502.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[19], i2502.sizeAmount)
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2504 = root || new pc.ParticleSystemInheritVelocity()
  var i2505 = data
  i2504.enabled = !!i2505[0]
  i2504.mode = i2505[1]
  i2504.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2505[2], i2504.curve)
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2506 = root || new pc.ParticleSystemForceOverLifetime()
  var i2507 = data
  i2506.enabled = !!i2507[0]
  i2506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2507[1], i2506.x)
  i2506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2507[2], i2506.y)
  i2506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2507[3], i2506.z)
  i2506.space = i2507[4]
  i2506.randomized = !!i2507[5]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2508 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2509 = data
  i2508.enabled = !!i2509[0]
  i2508.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2509[1], i2508.limit)
  i2508.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2509[2], i2508.limitX)
  i2508.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2509[3], i2508.limitY)
  i2508.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2509[4], i2508.limitZ)
  i2508.dampen = i2509[5]
  i2508.separateAxes = !!i2509[6]
  i2508.space = i2509[7]
  i2508.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2509[8], i2508.drag)
  i2508.multiplyDragByParticleSize = !!i2509[9]
  i2508.multiplyDragByParticleVelocity = !!i2509[10]
  return i2508
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2510 = root || request.c( 'CharacterMotor' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'characterInput')
  request.r(i2511[2], i2511[3], 0, i2510, 'cameraYawTransform')
  request.r(i2511[4], i2511[5], 0, i2510, '_arrow')
  i2510.moveSpeed = i2511[6]
  i2510.jumpHeight = i2511[7]
  request.r(i2511[8], i2511[9], 0, i2510, 'groundChecker')
  i2510.gravity = i2511[10]
  i2510.enableStepClimb = !!i2511[11]
  i2510.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2511[12] )
  i2510.maxStepHeight = i2511[13]
  i2510.stepCheckDistance = i2511[14]
  i2510.stepUpSpeed = i2511[15]
  i2510.stepUpAcceleration = i2511[16]
  i2510.minimumStepFacing = i2511[17]
  request.r(i2511[18], i2511[19], 0, i2510, 'controller')
  i2510.autoRun = !!i2511[20]
  return i2510
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2512 = root || request.c( 'CharacterRotation' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'motor')
  i2512.rotationSpeed = i2513[2]
  return i2512
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2514 = root || request.c( 'CharacterAnimation' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'animator')
  request.r(i2515[2], i2515[3], 0, i2514, 'motor')
  i2514.speedChangeRate = i2515[4]
  i2514.groundedGraceTime = i2515[5]
  return i2514
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2516 = root || request.c( 'CharacterCollect' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'motor')
  request.r(i2517[2], i2517[3], 0, i2516, 'avatar')
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2519 = data
  i2518.center = new pc.Vec3( i2519[0], i2519[1], i2519[2] )
  i2518.radius = i2519[3]
  i2518.height = i2519[4]
  i2518.direction = i2519[5]
  i2518.enabled = !!i2519[6]
  i2518.isTrigger = !!i2519[7]
  request.r(i2519[8], i2519[9], 0, i2518, 'material')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'sharedMesh')
  var i2523 = i2521[2]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2520.bones = i2522
  i2520.updateWhenOffscreen = !!i2521[3]
  i2520.localBounds = i2521[4]
  request.r(i2521[5], i2521[6], 0, i2520, 'rootBone')
  var i2525 = i2521[7]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2525[i + 0]) );
  }
  i2520.blendShapesWeights = i2524
  i2520.enabled = !!i2521[8]
  request.r(i2521[9], i2521[10], 0, i2520, 'sharedMaterial')
  var i2527 = i2521[11]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2520.sharedMaterials = i2526
  i2520.receiveShadows = !!i2521[12]
  i2520.shadowCastingMode = i2521[13]
  i2520.sortingLayerID = i2521[14]
  i2520.sortingOrder = i2521[15]
  i2520.lightmapIndex = i2521[16]
  i2520.lightmapSceneIndex = i2521[17]
  i2520.lightmapScaleOffset = new pc.Vec4( i2521[18], i2521[19], i2521[20], i2521[21] )
  i2520.lightProbeUsage = i2521[22]
  i2520.reflectionProbeUsage = i2521[23]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2531 = data
  i2530.weight = i2531[0]
  return i2530
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2532 = root || request.c( 'GroundChecker' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'groundPoint')
  i2532.checkRadius = i2533[2]
  i2532.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2533[3] )
  return i2532
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2534 = root || request.c( 'CameraFollow' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'target')
  request.r(i2535[2], i2535[3], 0, i2534, 'pitchPivot')
  i2534.smoothTime = i2535[4]
  i2534.minimumPitch = i2535[5]
  i2534.maximumPitch = i2535[6]
  return i2534
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2536 = root || request.c( 'CameraLook' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'input')
  request.r(i2537[2], i2537[3], 0, i2536, 'yawPivot')
  request.r(i2537[4], i2537[5], 0, i2536, 'pitchPivot')
  i2536.minPitch = i2537[6]
  i2536.maxPitch = i2537[7]
  i2536.yaw = i2537[8]
  i2536.pitch = i2537[9]
  i2536.defaltYaw = i2537[10]
  i2536.defaltPitch = i2537[11]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2539 = data
  i2538.aspect = i2539[0]
  i2538.orthographic = !!i2539[1]
  i2538.orthographicSize = i2539[2]
  i2538.backgroundColor = new pc.Color(i2539[3], i2539[4], i2539[5], i2539[6])
  i2538.nearClipPlane = i2539[7]
  i2538.farClipPlane = i2539[8]
  i2538.fieldOfView = i2539[9]
  i2538.depth = i2539[10]
  i2538.clearFlags = i2539[11]
  i2538.cullingMask = i2539[12]
  i2538.rect = i2539[13]
  request.r(i2539[14], i2539[15], 0, i2538, 'targetTexture')
  i2538.usePhysicalProperties = !!i2539[16]
  i2538.focalLength = i2539[17]
  i2538.sensorSize = new pc.Vec2( i2539[18], i2539[19] )
  i2538.lensShift = new pc.Vec2( i2539[20], i2539[21] )
  i2538.gateFit = i2539[22]
  i2538.commandBufferCount = i2539[23]
  i2538.cameraType = i2539[24]
  i2538.enabled = !!i2539[25]
  return i2538
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2540 = root || request.c( 'CharacterInput' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'joystick')
  request.r(i2541[2], i2541[3], 0, i2540, 'jumpButton')
  return i2540
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2542 = root || request.c( 'InputManager' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'worldCamera')
  i2542.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2543[2] )
  i2542.touchSensitivity = i2543[3]
  i2542.mouseSensitivity = i2543[4]
  i2542.dragThreshold = i2543[5]
  return i2542
}

Deserializers["GameController"] = function (request, data, root) {
  var i2544 = root || request.c( 'GameController' )
  var i2545 = data
  i2544.luna = i2545[0]
  i2544.applovin = !!i2545[1]
  i2544.countEvent = i2545[2]
  request.r(i2545[3], i2545[4], 0, i2544, 'morphSelection')
  var i2547 = i2545[5]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 2, i2546, '')
  }
  i2544.skiSections = i2546
  var i2549 = i2545[6]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 2, i2548, '')
  }
  i2544.safeLandingSurfaces = i2548
  request.r(i2545[7], i2545[8], 0, i2544, 'playerMotor')
  request.r(i2545[9], i2545[10], 0, i2544, 'playerSpawn')
  request.r(i2545[11], i2545[12], 0, i2544, 'morphPosition')
  var i2551 = i2545[13]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 2, i2550, '')
  }
  i2544.morphPrefabs = i2550
  request.r(i2545[14], i2545[15], 0, i2544, 'failUI')
  request.r(i2545[16], i2545[17], 0, i2544, 'endCard')
  request.r(i2545[18], i2545[19], 0, i2544, 'cameraYaw')
  i2544.fallConfirmationTime = i2545[20]
  return i2544
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2556 = root || request.c( 'AudioController' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'musicSource')
  request.r(i2557[2], i2557[3], 0, i2556, 'poolParent')
  i2556.startSize = i2557[4]
  return i2556
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2558 = root || request.c( 'LunaController' )
  var i2559 = data
  i2558.LimitTimePlay = !!i2559[0]
  i2558.TimePlay = i2559[1]
  var i2561 = i2559[2]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2561.length; i += 2) {
  request.r(i2561[i + 0], i2561[i + 1], 1, i2560, '')
  }
  i2558.images = i2560
  request.r(i2559[3], i2559[4], 0, i2558, 'CTA')
  request.r(i2559[5], i2559[6], 0, i2558, 'endCardRoot')
  request.r(i2559[7], i2559[8], 0, i2558, 'retryButtonLine')
  request.r(i2559[9], i2559[10], 0, i2558, 'ctaButtonLine')
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2565 = data
  i2564.center = new pc.Vec3( i2565[0], i2565[1], i2565[2] )
  i2564.radius = i2565[3]
  i2564.enabled = !!i2565[4]
  i2564.isTrigger = !!i2565[5]
  request.r(i2565[6], i2565[7], 0, i2564, 'material')
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2567 = data
  i2566.ambientIntensity = i2567[0]
  i2566.reflectionIntensity = i2567[1]
  i2566.ambientMode = i2567[2]
  i2566.ambientLight = new pc.Color(i2567[3], i2567[4], i2567[5], i2567[6])
  i2566.ambientSkyColor = new pc.Color(i2567[7], i2567[8], i2567[9], i2567[10])
  i2566.ambientGroundColor = new pc.Color(i2567[11], i2567[12], i2567[13], i2567[14])
  i2566.ambientEquatorColor = new pc.Color(i2567[15], i2567[16], i2567[17], i2567[18])
  i2566.fogColor = new pc.Color(i2567[19], i2567[20], i2567[21], i2567[22])
  i2566.fogEndDistance = i2567[23]
  i2566.fogStartDistance = i2567[24]
  i2566.fogDensity = i2567[25]
  i2566.fog = !!i2567[26]
  request.r(i2567[27], i2567[28], 0, i2566, 'skybox')
  i2566.fogMode = i2567[29]
  var i2569 = i2567[30]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2569[i + 0]) );
  }
  i2566.lightmaps = i2568
  i2566.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2567[31], i2566.lightProbes)
  i2566.lightmapsMode = i2567[32]
  i2566.mixedBakeMode = i2567[33]
  i2566.environmentLightingMode = i2567[34]
  i2566.ambientProbe = new pc.SphericalHarmonicsL2(i2567[35])
  request.r(i2567[36], i2567[37], 0, i2566, 'customReflection')
  request.r(i2567[38], i2567[39], 0, i2566, 'defaultReflection')
  i2566.defaultReflectionMode = i2567[40]
  i2566.defaultReflectionResolution = i2567[41]
  i2566.sunLightObjectId = i2567[42]
  i2566.pixelLightCount = i2567[43]
  i2566.defaultReflectionHDR = !!i2567[44]
  i2566.hasLightDataAsset = !!i2567[45]
  i2566.hasManualGenerate = !!i2567[46]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, 'lightmapColor')
  request.r(i2573[2], i2573[3], 0, i2572, 'lightmapDirection')
  request.r(i2573[4], i2573[5], 0, i2572, 'shadowMask')
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2574 = root || new UnityEngine.LightProbes()
  var i2575 = data
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2583 = data
  var i2585 = i2583[0]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2585[i + 0]));
  }
  i2582.ShaderCompilationErrors = i2584
  i2582.name = i2583[1]
  i2582.guid = i2583[2]
  var i2587 = i2583[3]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2582.shaderDefinedKeywords = i2586
  var i2589 = i2583[4]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2589[i + 0]) );
  }
  i2582.passes = i2588
  var i2591 = i2583[5]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2591[i + 0]) );
  }
  i2582.usePasses = i2590
  var i2593 = i2583[6]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2593[i + 0]) );
  }
  i2582.defaultParameterValues = i2592
  request.r(i2583[7], i2583[8], 0, i2582, 'unityFallbackShader')
  i2582.readDepth = !!i2583[9]
  i2582.hasDepthOnlyPass = !!i2583[10]
  i2582.isCreatedByShaderGraph = !!i2583[11]
  i2582.disableBatching = !!i2583[12]
  i2582.compiled = !!i2583[13]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2597 = data
  i2596.shaderName = i2597[0]
  i2596.errorMessage = i2597[1]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2602 = root || new pc.UnityShaderPass()
  var i2603 = data
  i2602.id = i2603[0]
  i2602.subShaderIndex = i2603[1]
  i2602.name = i2603[2]
  i2602.passType = i2603[3]
  i2602.grabPassTextureName = i2603[4]
  i2602.usePass = !!i2603[5]
  i2602.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[6], i2602.zTest)
  i2602.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[7], i2602.zWrite)
  i2602.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[8], i2602.culling)
  i2602.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2603[9], i2602.blending)
  i2602.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2603[10], i2602.alphaBlending)
  i2602.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[11], i2602.colorWriteMask)
  i2602.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[12], i2602.offsetUnits)
  i2602.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[13], i2602.offsetFactor)
  i2602.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[14], i2602.stencilRef)
  i2602.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[15], i2602.stencilReadMask)
  i2602.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[16], i2602.stencilWriteMask)
  i2602.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2603[17], i2602.stencilOp)
  i2602.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2603[18], i2602.stencilOpFront)
  i2602.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2603[19], i2602.stencilOpBack)
  var i2605 = i2603[20]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2605[i + 0]) );
  }
  i2602.tags = i2604
  var i2607 = i2603[21]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2602.passDefinedKeywords = i2606
  var i2609 = i2603[22]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2609[i + 0]) );
  }
  i2602.passDefinedKeywordGroups = i2608
  var i2611 = i2603[23]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2611[i + 0]) );
  }
  i2602.variants = i2610
  var i2613 = i2603[24]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2613[i + 0]) );
  }
  i2602.excludedVariants = i2612
  i2602.hasDepthReader = !!i2603[25]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2615 = data
  i2614.val = i2615[0]
  i2614.name = i2615[1]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2617 = data
  i2616.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[0], i2616.src)
  i2616.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[1], i2616.dst)
  i2616.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[2], i2616.op)
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2619 = data
  i2618.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2619[0], i2618.pass)
  i2618.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2619[1], i2618.fail)
  i2618.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2619[2], i2618.zFail)
  i2618.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2619[3], i2618.comp)
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.value = i2623[1]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( i2629[i + 0] );
  }
  i2626.keywords = i2628
  i2626.hasDiscard = !!i2627[1]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2633 = data
  i2632.passId = i2633[0]
  i2632.subShaderIndex = i2633[1]
  var i2635 = i2633[2]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( i2635[i + 0] );
  }
  i2632.keywords = i2634
  i2632.vertexProgram = i2633[3]
  i2632.fragmentProgram = i2633[4]
  i2632.exportedForWebGl2 = !!i2633[5]
  i2632.readDepth = !!i2633[6]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2639 = data
  request.r(i2639[0], i2639[1], 0, i2638, 'shader')
  i2638.pass = i2639[2]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2643 = data
  i2642.name = i2643[0]
  i2642.type = i2643[1]
  i2642.value = new pc.Vec4( i2643[2], i2643[3], i2643[4], i2643[5] )
  i2642.textureValue = i2643[6]
  i2642.shaderPropertyFlag = i2643[7]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2645 = data
  i2644.name = i2645[0]
  request.r(i2645[1], i2645[2], 0, i2644, 'texture')
  i2644.aabb = i2645[3]
  i2644.vertices = i2645[4]
  i2644.triangles = i2645[5]
  i2644.textureRect = UnityEngine.Rect.MinMaxRect(i2645[6], i2645[7], i2645[8], i2645[9])
  i2644.packedRect = UnityEngine.Rect.MinMaxRect(i2645[10], i2645[11], i2645[12], i2645[13])
  i2644.border = new pc.Vec4( i2645[14], i2645[15], i2645[16], i2645[17] )
  i2644.transparency = i2645[18]
  i2644.bounds = i2645[19]
  i2644.pixelsPerUnit = i2645[20]
  i2644.textureWidth = i2645[21]
  i2644.textureHeight = i2645[22]
  i2644.nativeSize = new pc.Vec2( i2645[23], i2645[24] )
  i2644.pivot = new pc.Vec2( i2645[25], i2645[26] )
  i2644.textureRectOffset = new pc.Vec2( i2645[27], i2645[28] )
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2647 = data
  i2646.name = i2647[0]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.wrapMode = i2649[1]
  i2648.isLooping = !!i2649[2]
  i2648.length = i2649[3]
  var i2651 = i2649[4]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2651[i + 0]) );
  }
  i2648.curves = i2650
  var i2653 = i2649[5]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2653[i + 0]) );
  }
  i2648.events = i2652
  i2648.halfPrecision = !!i2649[6]
  i2648._frameRate = i2649[7]
  i2648.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2649[8], i2648.localBounds)
  i2648.hasMuscleCurves = !!i2649[9]
  var i2655 = i2649[10]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( i2655[i + 0] );
  }
  i2648.clipMuscleConstant = i2654
  i2648.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2649[11], i2648.clipBindingConstant)
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2659 = data
  i2658.path = i2659[0]
  i2658.hash = i2659[1]
  i2658.componentType = i2659[2]
  i2658.property = i2659[3]
  i2658.keys = i2659[4]
  var i2661 = i2659[5]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2661[i + 0]) );
  }
  i2658.objectReferenceKeys = i2660
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2665 = data
  i2664.time = i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'value')
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2669 = data
  i2668.functionName = i2669[0]
  i2668.floatParameter = i2669[1]
  i2668.intParameter = i2669[2]
  i2668.stringParameter = i2669[3]
  request.r(i2669[4], i2669[5], 0, i2668, 'objectReferenceParameter')
  i2668.time = i2669[6]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2671 = data
  i2670.center = new pc.Vec3( i2671[0], i2671[1], i2671[2] )
  i2670.extends = new pc.Vec3( i2671[3], i2671[4], i2671[5] )
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( i2677[i + 0] );
  }
  i2674.genericBindings = i2676
  var i2679 = i2675[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( i2679[i + 0] );
  }
  i2674.pptrCurveMapping = i2678
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2681 = data
  i2680.name = i2681[0]
  i2680.blendParameter = i2681[1]
  i2680.blendParameterY = i2681[2]
  i2680.blendType = i2681[3]
  var i2683 = i2681[4]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2683[i + 0]) );
  }
  i2680.children = i2682
  i2680.useAutomaticThresholds = !!i2681[5]
  i2680.minThreshold = i2681[6]
  i2680.maxThreshold = i2681[7]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2687 = data
  request.r(i2687[0], i2687[1], 0, i2686, 'motion')
  i2686.threshold = i2687[2]
  i2686.position = new pc.Vec2( i2687[3], i2687[4] )
  i2686.timeScale = i2687[5]
  i2686.cycleOffset = i2687[6]
  i2686.directBlendParameter = i2687[7]
  i2686.mirror = !!i2687[8]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2689 = data
  i2688.name = i2689[0]
  var i2691 = i2689[1]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2691[i + 0]) );
  }
  i2688.layers = i2690
  var i2693 = i2689[2]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2693[i + 0]) );
  }
  i2688.parameters = i2692
  i2688.animationClips = i2689[3]
  i2688.avatarUnsupported = i2689[4]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2697 = data
  i2696.name = i2697[0]
  i2696.defaultWeight = i2697[1]
  i2696.blendingMode = i2697[2]
  i2696.avatarMask = i2697[3]
  i2696.syncedLayerIndex = i2697[4]
  i2696.syncedLayerAffectsTiming = !!i2697[5]
  i2696.syncedLayers = i2697[6]
  i2696.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2697[7], i2696.stateMachine)
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2699 = data
  i2698.id = i2699[0]
  i2698.name = i2699[1]
  i2698.path = i2699[2]
  var i2701 = i2699[3]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2701[i + 0]) );
  }
  i2698.states = i2700
  var i2703 = i2699[4]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2703[i + 0]) );
  }
  i2698.machines = i2702
  var i2705 = i2699[5]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2705[i + 0]) );
  }
  i2698.entryStateTransitions = i2704
  var i2707 = i2699[6]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2707[i + 0]) );
  }
  i2698.exitStateTransitions = i2706
  var i2709 = i2699[7]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2709[i + 0]) );
  }
  i2698.anyStateTransitions = i2708
  i2698.defaultStateId = i2699[8]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2713 = data
  i2712.id = i2713[0]
  i2712.name = i2713[1]
  i2712.cycleOffset = i2713[2]
  i2712.cycleOffsetParameter = i2713[3]
  i2712.cycleOffsetParameterActive = !!i2713[4]
  i2712.mirror = !!i2713[5]
  i2712.mirrorParameter = i2713[6]
  i2712.mirrorParameterActive = !!i2713[7]
  i2712.motionId = i2713[8]
  i2712.nameHash = i2713[9]
  i2712.fullPathHash = i2713[10]
  i2712.speed = i2713[11]
  i2712.speedParameter = i2713[12]
  i2712.speedParameterActive = !!i2713[13]
  i2712.tag = i2713[14]
  i2712.tagHash = i2713[15]
  i2712.writeDefaultValues = !!i2713[16]
  var i2715 = i2713[17]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 2) {
  request.r(i2715[i + 0], i2715[i + 1], 2, i2714, '')
  }
  i2712.behaviours = i2714
  var i2717 = i2713[18]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2717[i + 0]) );
  }
  i2712.transitions = i2716
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2723 = data
  i2722.fullPath = i2723[0]
  i2722.canTransitionToSelf = !!i2723[1]
  i2722.duration = i2723[2]
  i2722.exitTime = i2723[3]
  i2722.hasExitTime = !!i2723[4]
  i2722.hasFixedDuration = !!i2723[5]
  i2722.interruptionSource = i2723[6]
  i2722.offset = i2723[7]
  i2722.orderedInterruption = !!i2723[8]
  i2722.destinationStateId = i2723[9]
  i2722.isExit = !!i2723[10]
  i2722.mute = !!i2723[11]
  i2722.solo = !!i2723[12]
  var i2725 = i2723[13]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2725[i + 0]) );
  }
  i2722.conditions = i2724
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2729 = data
  i2728.mode = i2729[0]
  i2728.parameter = i2729[1]
  i2728.threshold = i2729[2]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2735 = data
  i2734.destinationStateId = i2735[0]
  i2734.isExit = !!i2735[1]
  i2734.mute = !!i2735[2]
  i2734.solo = !!i2735[3]
  var i2737 = i2735[4]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2737[i + 0]) );
  }
  i2734.conditions = i2736
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2741 = data
  i2740.defaultBool = !!i2741[0]
  i2740.defaultFloat = i2741[1]
  i2740.defaultInt = i2741[2]
  i2740.name = i2741[3]
  i2740.nameHash = i2741[4]
  i2740.type = i2741[5]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2743 = data
  i2742.name = i2743[0]
  request.r(i2743[1], i2743[2], 0, i2742, '_runtimeAnimatorController')
  var i2745 = i2743[3]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2742._originalAnimationClips = i2744
  var i2747 = i2743[4]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 2, i2746, '')
  }
  i2742._overrideAnimationClips = i2746
  var i2749 = i2743[5]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 2) {
  request.r(i2749[i + 0], i2749[i + 1], 2, i2748, '')
  }
  i2742._animationClips = i2748
  var i2751 = i2743[6]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('UnityEngine.AnimationClipPair', i2751[i + 0]) );
  }
  i2742._animationClipPairs = i2750
  return i2742
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2756 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'originalClip')
  request.r(i2757[2], i2757[3], 0, i2756, 'overrideClip')
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2759 = data
  i2758.name = i2759[0]
  i2758.bytes64 = i2759[1]
  i2758.data = i2759[2]
  return i2758
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2761 = data
  i2760.normalStyle = i2761[0]
  i2760.normalSpacingOffset = i2761[1]
  i2760.boldStyle = i2761[2]
  i2760.boldSpacing = i2761[3]
  i2760.italicStyle = i2761[4]
  i2760.tabSize = i2761[5]
  request.r(i2761[6], i2761[7], 0, i2760, 'atlas')
  i2760.m_SourceFontFileGUID = i2761[8]
  i2760.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2761[9], i2760.m_CreationSettings)
  request.r(i2761[10], i2761[11], 0, i2760, 'm_SourceFontFile')
  i2760.m_SourceFontFilePath = i2761[12]
  i2760.m_AtlasPopulationMode = i2761[13]
  i2760.InternalDynamicOS = !!i2761[14]
  var i2763 = i2761[15]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.add(request.d('UnityEngine.TextCore.Glyph', i2763[i + 0]));
  }
  i2760.m_GlyphTable = i2762
  var i2765 = i2761[16]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.add(request.d('TMPro.TMP_Character', i2765[i + 0]));
  }
  i2760.m_CharacterTable = i2764
  var i2767 = i2761[17]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 2) {
  request.r(i2767[i + 0], i2767[i + 1], 2, i2766, '')
  }
  i2760.m_AtlasTextures = i2766
  i2760.m_AtlasTextureIndex = i2761[18]
  i2760.m_IsMultiAtlasTexturesEnabled = !!i2761[19]
  i2760.m_GetFontFeatures = !!i2761[20]
  i2760.m_ClearDynamicDataOnBuild = !!i2761[21]
  i2760.m_AtlasWidth = i2761[22]
  i2760.m_AtlasHeight = i2761[23]
  i2760.m_AtlasPadding = i2761[24]
  i2760.m_AtlasRenderMode = i2761[25]
  var i2769 = i2761[26]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('UnityEngine.TextCore.GlyphRect', i2769[i + 0]));
  }
  i2760.m_UsedGlyphRects = i2768
  var i2771 = i2761[27]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('UnityEngine.TextCore.GlyphRect', i2771[i + 0]));
  }
  i2760.m_FreeGlyphRects = i2770
  i2760.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2761[28], i2760.m_FontFeatureTable)
  i2760.m_ShouldReimportFontFeatures = !!i2761[29]
  var i2773 = i2761[30]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 1, i2772, '')
  }
  i2760.m_FallbackFontAssetTable = i2772
  var i2775 = i2761[31]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('TMPro.TMP_FontWeightPair', i2775[i + 0]) );
  }
  i2760.m_FontWeightTable = i2774
  var i2777 = i2761[32]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('TMPro.TMP_FontWeightPair', i2777[i + 0]) );
  }
  i2760.fontWeights = i2776
  i2760.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2761[33], i2760.m_fontInfo)
  var i2779 = i2761[34]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('TMPro.TMP_Glyph', i2779[i + 0]));
  }
  i2760.m_glyphInfoList = i2778
  i2760.m_KerningTable = request.d('TMPro.KerningTable', i2761[35], i2760.m_KerningTable)
  var i2781 = i2761[36]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2760.fallbackFontAssets = i2780
  i2760.m_Version = i2761[37]
  i2760.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2761[38], i2760.m_FaceInfo)
  request.r(i2761[39], i2761[40], 0, i2760, 'm_Material')
  return i2760
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2783 = data
  i2782.sourceFontFileName = i2783[0]
  i2782.sourceFontFileGUID = i2783[1]
  i2782.faceIndex = i2783[2]
  i2782.pointSizeSamplingMode = i2783[3]
  i2782.pointSize = i2783[4]
  i2782.padding = i2783[5]
  i2782.paddingMode = i2783[6]
  i2782.packingMode = i2783[7]
  i2782.atlasWidth = i2783[8]
  i2782.atlasHeight = i2783[9]
  i2782.characterSetSelectionMode = i2783[10]
  i2782.characterSequence = i2783[11]
  i2782.referencedFontAssetGUID = i2783[12]
  i2782.referencedTextAssetGUID = i2783[13]
  i2782.fontStyle = i2783[14]
  i2782.fontStyleModifier = i2783[15]
  i2782.renderMode = i2783[16]
  i2782.includeFontFeatures = !!i2783[17]
  return i2782
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2787 = data
  i2786.m_Index = i2787[0]
  i2786.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2787[1], i2786.m_Metrics)
  i2786.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2787[2], i2786.m_GlyphRect)
  i2786.m_Scale = i2787[3]
  i2786.m_AtlasIndex = i2787[4]
  i2786.m_ClassDefinitionType = i2787[5]
  return i2786
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2789 = data
  i2788.m_Width = i2789[0]
  i2788.m_Height = i2789[1]
  i2788.m_HorizontalBearingX = i2789[2]
  i2788.m_HorizontalBearingY = i2789[3]
  i2788.m_HorizontalAdvance = i2789[4]
  return i2788
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2791 = data
  i2790.m_X = i2791[0]
  i2790.m_Y = i2791[1]
  i2790.m_Width = i2791[2]
  i2790.m_Height = i2791[3]
  return i2790
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.TMP_Character' )
  var i2795 = data
  i2794.m_ElementType = i2795[0]
  i2794.m_Unicode = i2795[1]
  i2794.m_GlyphIndex = i2795[2]
  i2794.m_Scale = i2795[3]
  return i2794
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2800 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2801 = data
  var i2803 = i2801[0]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('TMPro.MultipleSubstitutionRecord', i2803[i + 0]));
  }
  i2800.m_MultipleSubstitutionRecords = i2802
  var i2805 = i2801[1]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.add(request.d('TMPro.LigatureSubstitutionRecord', i2805[i + 0]));
  }
  i2800.m_LigatureSubstitutionRecords = i2804
  var i2807 = i2801[2]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2807[i + 0]));
  }
  i2800.m_GlyphPairAdjustmentRecords = i2806
  var i2809 = i2801[3]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2809[i + 0]));
  }
  i2800.m_MarkToBaseAdjustmentRecords = i2808
  var i2811 = i2801[4]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2811[i + 0]));
  }
  i2800.m_MarkToMarkAdjustmentRecords = i2810
  return i2800
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2815 = data
  i2814.m_TargetGlyphID = i2815[0]
  i2814.m_SubstituteGlyphIDs = i2815[1]
  return i2814
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2819 = data
  i2818.m_ComponentGlyphIDs = i2819[0]
  i2818.m_LigatureGlyphID = i2819[1]
  return i2818
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2823 = data
  i2822.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2823[0], i2822.m_FirstAdjustmentRecord)
  i2822.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2823[1], i2822.m_SecondAdjustmentRecord)
  i2822.m_FeatureLookupFlags = i2823[2]
  return i2822
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2827 = data
  i2826.m_BaseGlyphID = i2827[0]
  i2826.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2827[1], i2826.m_BaseGlyphAnchorPoint)
  i2826.m_MarkGlyphID = i2827[2]
  i2826.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2827[3], i2826.m_MarkPositionAdjustment)
  return i2826
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2831 = data
  i2830.m_BaseMarkGlyphID = i2831[0]
  i2830.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2831[1], i2830.m_BaseMarkGlyphAnchorPoint)
  i2830.m_CombiningMarkGlyphID = i2831[2]
  i2830.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2831[3], i2830.m_CombiningMarkPositionAdjustment)
  return i2830
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2837 = data
  request.r(i2837[0], i2837[1], 0, i2836, 'regularTypeface')
  request.r(i2837[2], i2837[3], 0, i2836, 'italicTypeface')
  return i2836
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2839 = data
  i2838.Name = i2839[0]
  i2838.PointSize = i2839[1]
  i2838.Scale = i2839[2]
  i2838.CharacterCount = i2839[3]
  i2838.LineHeight = i2839[4]
  i2838.Baseline = i2839[5]
  i2838.Ascender = i2839[6]
  i2838.CapHeight = i2839[7]
  i2838.Descender = i2839[8]
  i2838.CenterLine = i2839[9]
  i2838.SuperscriptOffset = i2839[10]
  i2838.SubscriptOffset = i2839[11]
  i2838.SubSize = i2839[12]
  i2838.Underline = i2839[13]
  i2838.UnderlineThickness = i2839[14]
  i2838.strikethrough = i2839[15]
  i2838.strikethroughThickness = i2839[16]
  i2838.TabWidth = i2839[17]
  i2838.Padding = i2839[18]
  i2838.AtlasWidth = i2839[19]
  i2838.AtlasHeight = i2839[20]
  return i2838
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2843 = data
  i2842.id = i2843[0]
  i2842.x = i2843[1]
  i2842.y = i2843[2]
  i2842.width = i2843[3]
  i2842.height = i2843[4]
  i2842.xOffset = i2843[5]
  i2842.yOffset = i2843[6]
  i2842.xAdvance = i2843[7]
  i2842.scale = i2843[8]
  return i2842
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.KerningTable' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('TMPro.KerningPair', i2847[i + 0]));
  }
  i2844.kerningPairs = i2846
  return i2844
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2850 = root || request.c( 'TMPro.KerningPair' )
  var i2851 = data
  i2850.xOffset = i2851[0]
  i2850.m_FirstGlyph = i2851[1]
  i2850.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2851[2], i2850.m_FirstGlyphAdjustments)
  i2850.m_SecondGlyph = i2851[3]
  i2850.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2851[4], i2850.m_SecondGlyphAdjustments)
  i2850.m_IgnoreSpacingAdjustments = !!i2851[5]
  return i2850
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2853 = data
  i2852.m_FaceIndex = i2853[0]
  i2852.m_FamilyName = i2853[1]
  i2852.m_StyleName = i2853[2]
  i2852.m_PointSize = i2853[3]
  i2852.m_Scale = i2853[4]
  i2852.m_UnitsPerEM = i2853[5]
  i2852.m_LineHeight = i2853[6]
  i2852.m_AscentLine = i2853[7]
  i2852.m_CapLine = i2853[8]
  i2852.m_MeanLine = i2853[9]
  i2852.m_Baseline = i2853[10]
  i2852.m_DescentLine = i2853[11]
  i2852.m_SuperscriptOffset = i2853[12]
  i2852.m_SuperscriptSize = i2853[13]
  i2852.m_SubscriptOffset = i2853[14]
  i2852.m_SubscriptSize = i2853[15]
  i2852.m_UnderlineOffset = i2853[16]
  i2852.m_UnderlineThickness = i2853[17]
  i2852.m_StrikethroughOffset = i2853[18]
  i2852.m_StrikethroughThickness = i2853[19]
  i2852.m_TabWidth = i2853[20]
  return i2852
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2855 = data
  i2854.useSafeMode = !!i2855[0]
  i2854.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2855[1], i2854.safeModeOptions)
  i2854.timeScale = i2855[2]
  i2854.unscaledTimeScale = i2855[3]
  i2854.useSmoothDeltaTime = !!i2855[4]
  i2854.maxSmoothUnscaledTime = i2855[5]
  i2854.rewindCallbackMode = i2855[6]
  i2854.showUnityEditorReport = !!i2855[7]
  i2854.logBehaviour = i2855[8]
  i2854.drawGizmos = !!i2855[9]
  i2854.defaultRecyclable = !!i2855[10]
  i2854.defaultAutoPlay = i2855[11]
  i2854.defaultUpdateType = i2855[12]
  i2854.defaultTimeScaleIndependent = !!i2855[13]
  i2854.defaultEaseType = i2855[14]
  i2854.defaultEaseOvershootOrAmplitude = i2855[15]
  i2854.defaultEasePeriod = i2855[16]
  i2854.defaultAutoKill = !!i2855[17]
  i2854.defaultLoopType = i2855[18]
  i2854.debugMode = !!i2855[19]
  i2854.debugStoreTargetId = !!i2855[20]
  i2854.showPreviewPanel = !!i2855[21]
  i2854.storeSettingsLocation = i2855[22]
  i2854.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2855[23], i2854.modules)
  i2854.createASMDEF = !!i2855[24]
  i2854.showPlayingTweens = !!i2855[25]
  i2854.showPausedTweens = !!i2855[26]
  return i2854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2857 = data
  i2856.logBehaviour = i2857[0]
  i2856.nestedTweenFailureBehaviour = i2857[1]
  return i2856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2859 = data
  i2858.showPanel = !!i2859[0]
  i2858.audioEnabled = !!i2859[1]
  i2858.physicsEnabled = !!i2859[2]
  i2858.physics2DEnabled = !!i2859[3]
  i2858.spriteEnabled = !!i2859[4]
  i2858.uiEnabled = !!i2859[5]
  i2858.textMeshProEnabled = !!i2859[6]
  i2858.tk2DEnabled = !!i2859[7]
  i2858.deAudioEnabled = !!i2859[8]
  i2858.deUnityExtendedEnabled = !!i2859[9]
  i2858.epoOutlineEnabled = !!i2859[10]
  return i2858
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.TMP_Settings' )
  var i2861 = data
  i2860.assetVersion = i2861[0]
  i2860.m_TextWrappingMode = i2861[1]
  i2860.m_enableKerning = !!i2861[2]
  var i2863 = i2861[3]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.add(i2863[i + 0]);
  }
  i2860.m_ActiveFontFeatures = i2862
  i2860.m_enableExtraPadding = !!i2861[4]
  i2860.m_enableTintAllSprites = !!i2861[5]
  i2860.m_enableParseEscapeCharacters = !!i2861[6]
  i2860.m_EnableRaycastTarget = !!i2861[7]
  i2860.m_GetFontFeaturesAtRuntime = !!i2861[8]
  i2860.m_missingGlyphCharacter = i2861[9]
  i2860.m_ClearDynamicDataOnBuild = !!i2861[10]
  i2860.m_warningsDisabled = !!i2861[11]
  request.r(i2861[12], i2861[13], 0, i2860, 'm_defaultFontAsset')
  i2860.m_defaultFontAssetPath = i2861[14]
  i2860.m_defaultFontSize = i2861[15]
  i2860.m_defaultAutoSizeMinRatio = i2861[16]
  i2860.m_defaultAutoSizeMaxRatio = i2861[17]
  i2860.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2861[18], i2861[19] )
  i2860.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2861[20], i2861[21] )
  i2860.m_autoSizeTextContainer = !!i2861[22]
  i2860.m_IsTextObjectScaleStatic = !!i2861[23]
  var i2865 = i2861[24]
  var i2864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2865.length; i += 2) {
  request.r(i2865[i + 0], i2865[i + 1], 1, i2864, '')
  }
  i2860.m_fallbackFontAssets = i2864
  i2860.m_matchMaterialPreset = !!i2861[25]
  i2860.m_HideSubTextObjects = !!i2861[26]
  request.r(i2861[27], i2861[28], 0, i2860, 'm_defaultSpriteAsset')
  i2860.m_defaultSpriteAssetPath = i2861[29]
  i2860.m_enableEmojiSupport = !!i2861[30]
  i2860.m_MissingCharacterSpriteUnicode = i2861[31]
  var i2867 = i2861[32]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2867.length; i += 2) {
  request.r(i2867[i + 0], i2867[i + 1], 1, i2866, '')
  }
  i2860.m_EmojiFallbackTextAssets = i2866
  i2860.m_defaultColorGradientPresetsPath = i2861[33]
  request.r(i2861[34], i2861[35], 0, i2860, 'm_defaultStyleSheet')
  i2860.m_StyleSheetsResourcePath = i2861[36]
  request.r(i2861[37], i2861[38], 0, i2860, 'm_leadingCharacters')
  request.r(i2861[39], i2861[40], 0, i2860, 'm_followingCharacters')
  i2860.m_UseModernHangulLineBreakingRules = !!i2861[41]
  return i2860
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'spriteSheet')
  var i2873 = i2871[2]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('TMPro.TMP_Sprite', i2873[i + 0]));
  }
  i2870.spriteInfoList = i2872
  var i2875 = i2871[3]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2875.length; i += 2) {
  request.r(i2875[i + 0], i2875[i + 1], 1, i2874, '')
  }
  i2870.fallbackSpriteAssets = i2874
  var i2877 = i2871[4]
  var i2876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.add(request.d('TMPro.TMP_SpriteCharacter', i2877[i + 0]));
  }
  i2870.m_SpriteCharacterTable = i2876
  var i2879 = i2871[5]
  var i2878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.add(request.d('TMPro.TMP_SpriteGlyph', i2879[i + 0]));
  }
  i2870.m_GlyphTable = i2878
  i2870.m_Version = i2871[6]
  i2870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2871[7], i2870.m_FaceInfo)
  request.r(i2871[8], i2871[9], 0, i2870, 'm_Material')
  return i2870
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2883 = data
  i2882.name = i2883[0]
  i2882.hashCode = i2883[1]
  i2882.unicode = i2883[2]
  i2882.pivot = new pc.Vec2( i2883[3], i2883[4] )
  request.r(i2883[5], i2883[6], 0, i2882, 'sprite')
  i2882.id = i2883[7]
  i2882.x = i2883[8]
  i2882.y = i2883[9]
  i2882.width = i2883[10]
  i2882.height = i2883[11]
  i2882.xOffset = i2883[12]
  i2882.yOffset = i2883[13]
  i2882.xAdvance = i2883[14]
  i2882.scale = i2883[15]
  return i2882
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2889 = data
  i2888.m_Name = i2889[0]
  i2888.m_ElementType = i2889[1]
  i2888.m_Unicode = i2889[2]
  i2888.m_GlyphIndex = i2889[3]
  i2888.m_Scale = i2889[4]
  return i2888
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'sprite')
  i2892.m_Index = i2893[2]
  i2892.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2893[3], i2892.m_Metrics)
  i2892.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2893[4], i2892.m_GlyphRect)
  i2892.m_Scale = i2893[5]
  i2892.m_AtlasIndex = i2893[6]
  i2892.m_ClassDefinitionType = i2893[7]
  return i2892
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.add(request.d('TMPro.TMP_Style', i2897[i + 0]));
  }
  i2894.m_StyleList = i2896
  return i2894
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.TMP_Style' )
  var i2901 = data
  i2900.m_Name = i2901[0]
  i2900.m_HashCode = i2901[1]
  i2900.m_OpeningDefinition = i2901[2]
  i2900.m_ClosingDefinition = i2901[3]
  i2900.m_OpeningTagArray = i2901[4]
  i2900.m_ClosingTagArray = i2901[5]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2905[i + 0]) );
  }
  i2902.files = i2904
  i2902.componentToPrefabIds = i2903[1]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2909 = data
  i2908.path = i2909[0]
  request.r(i2909[1], i2909[2], 0, i2908, 'unityObject')
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2911 = data
  var i2913 = i2911[0]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2913[i + 0]) );
  }
  i2910.scriptsExecutionOrder = i2912
  var i2915 = i2911[1]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2915[i + 0]) );
  }
  i2910.sortingLayers = i2914
  var i2917 = i2911[2]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2917[i + 0]) );
  }
  i2910.cullingLayers = i2916
  i2910.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2911[3], i2910.timeSettings)
  i2910.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2911[4], i2910.physicsSettings)
  i2910.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2911[5], i2910.physics2DSettings)
  i2910.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2911[6], i2910.qualitySettings)
  i2910.enableRealtimeShadows = !!i2911[7]
  i2910.enableAutoInstancing = !!i2911[8]
  i2910.enableStaticBatching = !!i2911[9]
  i2910.enableDynamicBatching = !!i2911[10]
  i2910.usePreservativeDynamicBatching = !!i2911[11]
  i2910.lightmapEncodingQuality = i2911[12]
  i2910.desiredColorSpace = i2911[13]
  var i2919 = i2911[14]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( i2919[i + 0] );
  }
  i2910.allTags = i2918
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2923 = data
  i2922.name = i2923[0]
  i2922.value = i2923[1]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2927 = data
  i2926.id = i2927[0]
  i2926.name = i2927[1]
  i2926.value = i2927[2]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2931 = data
  i2930.id = i2931[0]
  i2930.name = i2931[1]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2933 = data
  i2932.fixedDeltaTime = i2933[0]
  i2932.maximumDeltaTime = i2933[1]
  i2932.timeScale = i2933[2]
  i2932.maximumParticleTimestep = i2933[3]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2935 = data
  i2934.gravity = new pc.Vec3( i2935[0], i2935[1], i2935[2] )
  i2934.defaultSolverIterations = i2935[3]
  i2934.bounceThreshold = i2935[4]
  i2934.autoSyncTransforms = !!i2935[5]
  i2934.autoSimulation = !!i2935[6]
  var i2937 = i2935[7]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2937[i + 0]) );
  }
  i2934.collisionMatrix = i2936
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.layerId = i2941[1]
  i2940.otherLayerId = i2941[2]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2943 = data
  request.r(i2943[0], i2943[1], 0, i2942, 'material')
  i2942.gravity = new pc.Vec2( i2943[2], i2943[3] )
  i2942.positionIterations = i2943[4]
  i2942.velocityIterations = i2943[5]
  i2942.velocityThreshold = i2943[6]
  i2942.maxLinearCorrection = i2943[7]
  i2942.maxAngularCorrection = i2943[8]
  i2942.maxTranslationSpeed = i2943[9]
  i2942.maxRotationSpeed = i2943[10]
  i2942.baumgarteScale = i2943[11]
  i2942.baumgarteTOIScale = i2943[12]
  i2942.timeToSleep = i2943[13]
  i2942.linearSleepTolerance = i2943[14]
  i2942.angularSleepTolerance = i2943[15]
  i2942.defaultContactOffset = i2943[16]
  i2942.autoSimulation = !!i2943[17]
  i2942.queriesHitTriggers = !!i2943[18]
  i2942.queriesStartInColliders = !!i2943[19]
  i2942.callbacksOnDisable = !!i2943[20]
  i2942.reuseCollisionCallbacks = !!i2943[21]
  i2942.autoSyncTransforms = !!i2943[22]
  var i2945 = i2943[23]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2945[i + 0]) );
  }
  i2942.collisionMatrix = i2944
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2949 = data
  i2948.enabled = !!i2949[0]
  i2948.layerId = i2949[1]
  i2948.otherLayerId = i2949[2]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2951 = data
  var i2953 = i2951[0]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2953[i + 0]) );
  }
  i2950.qualityLevels = i2952
  var i2955 = i2951[1]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( i2955[i + 0] );
  }
  i2950.names = i2954
  i2950.shadows = i2951[2]
  i2950.anisotropicFiltering = i2951[3]
  i2950.antiAliasing = i2951[4]
  i2950.lodBias = i2951[5]
  i2950.shadowCascades = i2951[6]
  i2950.shadowDistance = i2951[7]
  i2950.shadowmaskMode = i2951[8]
  i2950.shadowProjection = i2951[9]
  i2950.shadowResolution = i2951[10]
  i2950.softParticles = !!i2951[11]
  i2950.softVegetation = !!i2951[12]
  i2950.activeColorSpace = i2951[13]
  i2950.desiredColorSpace = i2951[14]
  i2950.masterTextureLimit = i2951[15]
  i2950.maxQueuedFrames = i2951[16]
  i2950.particleRaycastBudget = i2951[17]
  i2950.pixelLightCount = i2951[18]
  i2950.realtimeReflectionProbes = !!i2951[19]
  i2950.shadowCascade2Split = i2951[20]
  i2950.shadowCascade4Split = new pc.Vec3( i2951[21], i2951[22], i2951[23] )
  i2950.streamingMipmapsActive = !!i2951[24]
  i2950.vSyncCount = i2951[25]
  i2950.asyncUploadBufferSize = i2951[26]
  i2950.asyncUploadTimeSlice = i2951[27]
  i2950.billboardsFaceCameraPosition = !!i2951[28]
  i2950.shadowNearPlaneOffset = i2951[29]
  i2950.streamingMipmapsMemoryBudget = i2951[30]
  i2950.maximumLODLevel = i2951[31]
  i2950.streamingMipmapsAddAllCameras = !!i2951[32]
  i2950.streamingMipmapsMaxLevelReduction = i2951[33]
  i2950.streamingMipmapsRenderersPerFrame = i2951[34]
  i2950.resolutionScalingFixedDPIFactor = i2951[35]
  i2950.streamingMipmapsMaxFileIORequests = i2951[36]
  i2950.currentQualityLevel = i2951[37]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2959 = data
  i2958.name = i2959[0]
  var i2961 = i2959[1]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2961[i + 0]) );
  }
  i2958.tos = i2960
  var i2963 = i2959[2]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( i2963[i + 0] );
  }
  i2958.constant = i2962
  i2958.isValid = !!i2959[3]
  i2958.isHuman = !!i2959[4]
  i2958.hasRootMotion = !!i2959[5]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2967 = data
  i2966.hash = i2967[0]
  i2966.path = i2967[1]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2971 = data
  i2970.weight = i2971[0]
  i2970.vertices = i2971[1]
  i2970.normals = i2971[2]
  i2970.tangents = i2971[3]
  return i2970
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2973 = data
  request.r(i2973[0], i2973[1], 0, i2972, 'm_ObjectArgument')
  i2972.m_ObjectArgumentAssemblyTypeName = i2973[2]
  i2972.m_IntArgument = i2973[3]
  i2972.m_FloatArgument = i2973[4]
  i2972.m_StringArgument = i2973[5]
  i2972.m_BoolArgument = !!i2973[6]
  return i2972
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2975 = data
  i2974.m_GlyphIndex = i2975[0]
  i2974.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2975[1], i2974.m_GlyphValueRecord)
  return i2974
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2976 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2977 = data
  i2976.m_XCoordinate = i2977[0]
  i2976.m_YCoordinate = i2977[1]
  return i2976
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2978 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2979 = data
  i2978.m_XPositionAdjustment = i2979[0]
  i2978.m_YPositionAdjustment = i2979[1]
  return i2978
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2980 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2981 = data
  i2980.xPlacement = i2981[0]
  i2980.yPlacement = i2981[1]
  i2980.xAdvance = i2981[2]
  i2980.yAdvance = i2981[3]
  return i2980
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2983 = data
  i2982.m_XPlacement = i2983[0]
  i2982.m_YPlacement = i2983[1]
  i2982.m_XAdvance = i2983[2]
  i2982.m_YAdvance = i2983[3]
  return i2982
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4798";

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

Deserializers.buildID = "017185fd-ae57-4f61-a6e5-c04a0c16607c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

