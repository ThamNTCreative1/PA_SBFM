var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.JointSpring' )
  var i2233 = data
  i2232.spring = i2233[0]
  i2232.damper = i2233[1]
  i2232.targetPosition = i2233[2]
  return i2232
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.JointMotor' )
  var i2235 = data
  i2234.m_TargetVelocity = i2235[0]
  i2234.m_Force = i2235[1]
  i2234.m_FreeSpin = i2235[2]
  return i2234
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.JointLimits' )
  var i2237 = data
  i2236.m_Min = i2237[0]
  i2236.m_Max = i2237[1]
  i2236.m_Bounciness = i2237[2]
  i2236.m_BounceMinVelocity = i2237[3]
  i2236.m_ContactDistance = i2237[4]
  i2236.minBounce = i2237[5]
  i2236.maxBounce = i2237[6]
  return i2236
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.JointDrive' )
  var i2239 = data
  i2238.m_PositionSpring = i2239[0]
  i2238.m_PositionDamper = i2239[1]
  i2238.m_MaximumForce = i2239[2]
  i2238.m_UseAcceleration = i2239[3]
  return i2238
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2241 = data
  i2240.m_Spring = i2241[0]
  i2240.m_Damper = i2241[1]
  return i2240
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2243 = data
  i2242.m_Limit = i2243[0]
  i2242.m_Bounciness = i2243[1]
  i2242.m_ContactDistance = i2243[2]
  return i2242
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2245 = data
  i2244.m_ExtremumSlip = i2245[0]
  i2244.m_ExtremumValue = i2245[1]
  i2244.m_AsymptoteSlip = i2245[2]
  i2244.m_AsymptoteValue = i2245[3]
  i2244.m_Stiffness = i2245[4]
  return i2244
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2247 = data
  i2246.m_LowerAngle = i2247[0]
  i2246.m_UpperAngle = i2247[1]
  return i2246
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2249 = data
  i2248.m_MotorSpeed = i2249[0]
  i2248.m_MaximumMotorTorque = i2249[1]
  return i2248
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2251 = data
  i2250.m_DampingRatio = i2251[0]
  i2250.m_Frequency = i2251[1]
  i2250.m_Angle = i2251[2]
  return i2250
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2253 = data
  i2252.m_LowerTranslation = i2253[0]
  i2252.m_UpperTranslation = i2253[1]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2255 = data
  i2254.name = i2255[0]
  i2254.width = i2255[1]
  i2254.height = i2255[2]
  i2254.mipmapCount = i2255[3]
  i2254.anisoLevel = i2255[4]
  i2254.filterMode = i2255[5]
  i2254.hdr = !!i2255[6]
  i2254.format = i2255[7]
  i2254.wrapMode = i2255[8]
  i2254.alphaIsTransparency = !!i2255[9]
  i2254.alphaSource = i2255[10]
  i2254.graphicsFormat = i2255[11]
  i2254.sRGBTexture = !!i2255[12]
  i2254.desiredColorSpace = i2255[13]
  i2254.wrapU = i2255[14]
  i2254.wrapV = i2255[15]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2256 = root || new pc.UnityMaterial()
  var i2257 = data
  i2256.name = i2257[0]
  request.r(i2257[1], i2257[2], 0, i2256, 'shader')
  i2256.renderQueue = i2257[3]
  i2256.enableInstancing = !!i2257[4]
  var i2259 = i2257[5]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2259[i + 0]) );
  }
  i2256.floatParameters = i2258
  var i2261 = i2257[6]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2261[i + 0]) );
  }
  i2256.colorParameters = i2260
  var i2263 = i2257[7]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2263[i + 0]) );
  }
  i2256.vectorParameters = i2262
  var i2265 = i2257[8]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2265[i + 0]) );
  }
  i2256.textureParameters = i2264
  var i2267 = i2257[9]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2267[i + 0]) );
  }
  i2256.materialFlags = i2266
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2271 = data
  i2270.name = i2271[0]
  i2270.value = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.value = new pc.Color(i2275[1], i2275[2], i2275[3], i2275[4])
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = new pc.Vec4( i2279[1], i2279[2], i2279[3], i2279[4] )
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2283 = data
  i2282.name = i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'value')
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.enabled = !!i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.halfPrecision = !!i2289[1]
  i2288.useSimplification = !!i2289[2]
  i2288.useUInt32IndexFormat = !!i2289[3]
  i2288.vertexCount = i2289[4]
  i2288.aabb = i2289[5]
  var i2291 = i2289[6]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( !!i2291[i + 0] );
  }
  i2288.streams = i2290
  i2288.vertices = i2289[7]
  var i2293 = i2289[8]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2293[i + 0]) );
  }
  i2288.subMeshes = i2292
  var i2295 = i2289[9]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 16) {
    i2294.push( new pc.Mat4().setData(i2295[i + 0], i2295[i + 1], i2295[i + 2], i2295[i + 3],  i2295[i + 4], i2295[i + 5], i2295[i + 6], i2295[i + 7],  i2295[i + 8], i2295[i + 9], i2295[i + 10], i2295[i + 11],  i2295[i + 12], i2295[i + 13], i2295[i + 14], i2295[i + 15]) );
  }
  i2288.bindposes = i2294
  var i2297 = i2289[10]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2297[i + 0]) );
  }
  i2288.blendShapes = i2296
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2303 = data
  i2302.triangles = i2303[0]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2309 = data
  i2308.name = i2309[0]
  var i2311 = i2309[1]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2311[i + 0]) );
  }
  i2308.frames = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2313 = data
  i2312.position = new pc.Vec3( i2313[0], i2313[1], i2313[2] )
  i2312.scale = new pc.Vec3( i2313[3], i2313[4], i2313[5] )
  i2312.rotation = new pc.Quat(i2313[6], i2313[7], i2313[8], i2313[9])
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'sharedMesh')
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'additionalVertexStreams')
  i2316.enabled = !!i2317[2]
  request.r(i2317[3], i2317[4], 0, i2316, 'sharedMaterial')
  var i2319 = i2317[5]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2316.sharedMaterials = i2318
  i2316.receiveShadows = !!i2317[6]
  i2316.shadowCastingMode = i2317[7]
  i2316.sortingLayerID = i2317[8]
  i2316.sortingOrder = i2317[9]
  i2316.lightmapIndex = i2317[10]
  i2316.lightmapSceneIndex = i2317[11]
  i2316.lightmapScaleOffset = new pc.Vec4( i2317[12], i2317[13], i2317[14], i2317[15] )
  i2316.lightProbeUsage = i2317[16]
  i2316.reflectionProbeUsage = i2317[17]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'sharedMesh')
  i2322.convex = !!i2323[2]
  i2322.enabled = !!i2323[3]
  i2322.isTrigger = !!i2323[4]
  request.r(i2323[5], i2323[6], 0, i2322, 'material')
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.tagId = i2325[1]
  i2324.enabled = !!i2325[2]
  i2324.isStatic = !!i2325[3]
  i2324.layer = i2325[4]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2327 = data
  i2326.center = new pc.Vec3( i2327[0], i2327[1], i2327[2] )
  i2326.size = new pc.Vec3( i2327[3], i2327[4], i2327[5] )
  i2326.enabled = !!i2327[6]
  i2326.isTrigger = !!i2327[7]
  request.r(i2327[8], i2327[9], 0, i2326, 'material')
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2329 = data
  i2328.center = new pc.Vec3( i2329[0], i2329[1], i2329[2] )
  i2328.radius = i2329[3]
  i2328.height = i2329[4]
  i2328.direction = i2329[5]
  i2328.enabled = !!i2329[6]
  i2328.isTrigger = !!i2329[7]
  request.r(i2329[8], i2329[9], 0, i2328, 'material')
  return i2328
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2355 = data
  i2354.type = i2355[0]
  i2354.color = new pc.Color(i2355[1], i2355[2], i2355[3], i2355[4])
  i2354.cullingMask = i2355[5]
  i2354.intensity = i2355[6]
  i2354.range = i2355[7]
  i2354.spotAngle = i2355[8]
  i2354.shadows = i2355[9]
  i2354.shadowNormalBias = i2355[10]
  i2354.shadowBias = i2355[11]
  i2354.shadowStrength = i2355[12]
  i2354.shadowResolution = i2355[13]
  i2354.lightmapBakeType = i2355[14]
  i2354.renderMode = i2355[15]
  request.r(i2355[16], i2355[17], 0, i2354, 'cookie')
  i2354.cookieSize = i2355[18]
  i2354.shadowNearPlane = i2355[19]
  i2354.occlusionMaskChannel = i2355[20]
  i2354.isBaked = !!i2355[21]
  i2354.mixedLightingMode = i2355[22]
  i2354.enabled = !!i2355[23]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2357 = data
  i2356.pivot = new pc.Vec2( i2357[0], i2357[1] )
  i2356.anchorMin = new pc.Vec2( i2357[2], i2357[3] )
  i2356.anchorMax = new pc.Vec2( i2357[4], i2357[5] )
  i2356.sizeDelta = new pc.Vec2( i2357[6], i2357[7] )
  i2356.anchoredPosition3D = new pc.Vec3( i2357[8], i2357[9], i2357[10] )
  i2356.rotation = new pc.Quat(i2357[11], i2357[12], i2357[13], i2357[14])
  i2356.scale = new pc.Vec3( i2357[15], i2357[16], i2357[17] )
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2359 = data
  i2358.planeDistance = i2359[0]
  i2358.referencePixelsPerUnit = i2359[1]
  i2358.isFallbackOverlay = !!i2359[2]
  i2358.renderMode = i2359[3]
  i2358.renderOrder = i2359[4]
  i2358.sortingLayerName = i2359[5]
  i2358.sortingOrder = i2359[6]
  i2358.scaleFactor = i2359[7]
  request.r(i2359[8], i2359[9], 0, i2358, 'worldCamera')
  i2358.overrideSorting = !!i2359[10]
  i2358.pixelPerfect = !!i2359[11]
  i2358.targetDisplay = i2359[12]
  i2358.overridePixelPerfect = !!i2359[13]
  i2358.enabled = !!i2359[14]
  return i2358
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2361 = data
  i2360.m_UiScaleMode = i2361[0]
  i2360.m_ReferencePixelsPerUnit = i2361[1]
  i2360.m_ScaleFactor = i2361[2]
  i2360.m_ReferenceResolution = new pc.Vec2( i2361[3], i2361[4] )
  i2360.m_ScreenMatchMode = i2361[5]
  i2360.m_MatchWidthOrHeight = i2361[6]
  i2360.m_PhysicalUnit = i2361[7]
  i2360.m_FallbackScreenDPI = i2361[8]
  i2360.m_DefaultSpriteDPI = i2361[9]
  i2360.m_DynamicPixelsPerUnit = i2361[10]
  i2360.m_PresetInfoIsWorld = !!i2361[11]
  return i2360
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2363 = data
  i2362.m_IgnoreReversedGraphics = !!i2363[0]
  i2362.m_BlockingObjects = i2363[1]
  i2362.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2363[2] )
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

Deserializers["JumpButton"] = function (request, data, root) {
  var i2370 = root || request.c( 'JumpButton' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'button')
  return i2370
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.UI.Button' )
  var i2373 = data
  i2372.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2373[0], i2372.m_OnClick)
  i2372.m_Navigation = request.d('UnityEngine.UI.Navigation', i2373[1], i2372.m_Navigation)
  i2372.m_Transition = i2373[2]
  i2372.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2373[3], i2372.m_Colors)
  i2372.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2373[4], i2372.m_SpriteState)
  i2372.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2373[5], i2372.m_AnimationTriggers)
  i2372.m_Interactable = !!i2373[6]
  request.r(i2373[7], i2373[8], 0, i2372, 'm_TargetGraphic')
  return i2372
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2375 = data
  i2374.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2375[0], i2374.m_PersistentCalls)
  return i2374
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2377 = data
  var i2379 = i2377[0]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.add(request.d('UnityEngine.Events.PersistentCall', i2379[i + 0]));
  }
  i2376.m_Calls = i2378
  return i2376
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'm_Target')
  i2382.m_TargetAssemblyTypeName = i2383[2]
  i2382.m_MethodName = i2383[3]
  i2382.m_Mode = i2383[4]
  i2382.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2383[5], i2382.m_Arguments)
  i2382.m_CallState = i2383[6]
  return i2382
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2385 = data
  i2384.m_Mode = i2385[0]
  i2384.m_WrapAround = !!i2385[1]
  request.r(i2385[2], i2385[3], 0, i2384, 'm_SelectOnUp')
  request.r(i2385[4], i2385[5], 0, i2384, 'm_SelectOnDown')
  request.r(i2385[6], i2385[7], 0, i2384, 'm_SelectOnLeft')
  request.r(i2385[8], i2385[9], 0, i2384, 'm_SelectOnRight')
  return i2384
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2387 = data
  i2386.m_NormalColor = new pc.Color(i2387[0], i2387[1], i2387[2], i2387[3])
  i2386.m_HighlightedColor = new pc.Color(i2387[4], i2387[5], i2387[6], i2387[7])
  i2386.m_PressedColor = new pc.Color(i2387[8], i2387[9], i2387[10], i2387[11])
  i2386.m_SelectedColor = new pc.Color(i2387[12], i2387[13], i2387[14], i2387[15])
  i2386.m_DisabledColor = new pc.Color(i2387[16], i2387[17], i2387[18], i2387[19])
  i2386.m_ColorMultiplier = i2387[20]
  i2386.m_FadeDuration = i2387[21]
  return i2386
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'm_HighlightedSprite')
  request.r(i2389[2], i2389[3], 0, i2388, 'm_PressedSprite')
  request.r(i2389[4], i2389[5], 0, i2388, 'm_SelectedSprite')
  request.r(i2389[6], i2389[7], 0, i2388, 'm_DisabledSprite')
  return i2388
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2391 = data
  i2390.m_NormalTrigger = i2391[0]
  i2390.m_HighlightedTrigger = i2391[1]
  i2390.m_PressedTrigger = i2391[2]
  i2390.m_SelectedTrigger = i2391[3]
  i2390.m_DisabledTrigger = i2391[4]
  return i2390
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2393 = data
  i2392.m_ShowMaskGraphic = !!i2393[0]
  return i2392
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2394 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2395 = data
  i2394.m_hasFontAssetChanged = !!i2395[0]
  request.r(i2395[1], i2395[2], 0, i2394, 'm_baseMaterial')
  i2394.m_maskOffset = new pc.Vec4( i2395[3], i2395[4], i2395[5], i2395[6] )
  i2394.m_text = i2395[7]
  i2394.m_isRightToLeft = !!i2395[8]
  request.r(i2395[9], i2395[10], 0, i2394, 'm_fontAsset')
  request.r(i2395[11], i2395[12], 0, i2394, 'm_sharedMaterial')
  var i2397 = i2395[13]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2394.m_fontSharedMaterials = i2396
  request.r(i2395[14], i2395[15], 0, i2394, 'm_fontMaterial')
  var i2399 = i2395[16]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2394.m_fontMaterials = i2398
  i2394.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2395[17], i2395[18], i2395[19], i2395[20])
  i2394.m_fontColor = new pc.Color(i2395[21], i2395[22], i2395[23], i2395[24])
  i2394.m_enableVertexGradient = !!i2395[25]
  i2394.m_colorMode = i2395[26]
  i2394.m_fontColorGradient = request.d('TMPro.VertexGradient', i2395[27], i2394.m_fontColorGradient)
  request.r(i2395[28], i2395[29], 0, i2394, 'm_fontColorGradientPreset')
  request.r(i2395[30], i2395[31], 0, i2394, 'm_spriteAsset')
  i2394.m_tintAllSprites = !!i2395[32]
  request.r(i2395[33], i2395[34], 0, i2394, 'm_StyleSheet')
  i2394.m_TextStyleHashCode = i2395[35]
  i2394.m_overrideHtmlColors = !!i2395[36]
  i2394.m_faceColor = UnityEngine.Color32.ConstructColor(i2395[37], i2395[38], i2395[39], i2395[40])
  i2394.m_fontSize = i2395[41]
  i2394.m_fontSizeBase = i2395[42]
  i2394.m_fontWeight = i2395[43]
  i2394.m_enableAutoSizing = !!i2395[44]
  i2394.m_fontSizeMin = i2395[45]
  i2394.m_fontSizeMax = i2395[46]
  i2394.m_fontStyle = i2395[47]
  i2394.m_HorizontalAlignment = i2395[48]
  i2394.m_VerticalAlignment = i2395[49]
  i2394.m_textAlignment = i2395[50]
  i2394.m_characterSpacing = i2395[51]
  i2394.m_characterHorizontalScale = i2395[52]
  i2394.m_wordSpacing = i2395[53]
  i2394.m_lineSpacing = i2395[54]
  i2394.m_lineSpacingMax = i2395[55]
  i2394.m_paragraphSpacing = i2395[56]
  i2394.m_charWidthMaxAdj = i2395[57]
  i2394.m_TextWrappingMode = i2395[58]
  i2394.m_wordWrappingRatios = i2395[59]
  i2394.m_overflowMode = i2395[60]
  request.r(i2395[61], i2395[62], 0, i2394, 'm_linkedTextComponent')
  request.r(i2395[63], i2395[64], 0, i2394, 'parentLinkedComponent')
  i2394.m_enableKerning = !!i2395[65]
  var i2401 = i2395[66]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(i2401[i + 0]);
  }
  i2394.m_ActiveFontFeatures = i2400
  i2394.m_enableExtraPadding = !!i2395[67]
  i2394.checkPaddingRequired = !!i2395[68]
  i2394.m_isRichText = !!i2395[69]
  i2394.m_parseCtrlCharacters = !!i2395[70]
  i2394.m_isOrthographic = !!i2395[71]
  i2394.m_isCullingEnabled = !!i2395[72]
  i2394.m_horizontalMapping = i2395[73]
  i2394.m_verticalMapping = i2395[74]
  i2394.m_uvLineOffset = i2395[75]
  i2394.m_geometrySortingOrder = i2395[76]
  i2394.m_IsTextObjectScaleStatic = !!i2395[77]
  i2394.m_VertexBufferAutoSizeReduction = !!i2395[78]
  i2394.m_useMaxVisibleDescender = !!i2395[79]
  i2394.m_pageToDisplay = i2395[80]
  i2394.m_margin = new pc.Vec4( i2395[81], i2395[82], i2395[83], i2395[84] )
  i2394.m_isUsingLegacyAnimationComponent = !!i2395[85]
  i2394.m_isVolumetricText = !!i2395[86]
  request.r(i2395[87], i2395[88], 0, i2394, 'm_Material')
  i2394.m_EmojiFallbackSupport = !!i2395[89]
  i2394.m_Maskable = !!i2395[90]
  i2394.m_Color = new pc.Color(i2395[91], i2395[92], i2395[93], i2395[94])
  i2394.m_RaycastTarget = !!i2395[95]
  i2394.m_RaycastPadding = new pc.Vec4( i2395[96], i2395[97], i2395[98], i2395[99] )
  return i2394
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2402 = root || request.c( 'TMPro.VertexGradient' )
  var i2403 = data
  i2402.topLeft = new pc.Color(i2403[0], i2403[1], i2403[2], i2403[3])
  i2402.topRight = new pc.Color(i2403[4], i2403[5], i2403[6], i2403[7])
  i2402.bottomLeft = new pc.Color(i2403[8], i2403[9], i2403[10], i2403[11])
  i2402.bottomRight = new pc.Color(i2403[12], i2403[13], i2403[14], i2403[15])
  return i2402
}

Deserializers["TutController"] = function (request, data, root) {
  var i2406 = root || request.c( 'TutController' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'tutScene')
  request.r(i2407[2], i2407[3], 0, i2406, 'startTut')
  request.r(i2407[4], i2407[5], 0, i2406, 'playTut')
  request.r(i2407[6], i2407[7], 0, i2406, 'farTut')
  request.r(i2407[8], i2407[9], 0, i2406, 'failTut')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2417 = data
  i2416.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2417[0], i2416.main)
  i2416.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2417[1], i2416.colorBySpeed)
  i2416.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2417[2], i2416.colorOverLifetime)
  i2416.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2417[3], i2416.emission)
  i2416.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2417[4], i2416.rotationBySpeed)
  i2416.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2417[5], i2416.rotationOverLifetime)
  i2416.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2417[6], i2416.shape)
  i2416.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2417[7], i2416.sizeBySpeed)
  i2416.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2417[8], i2416.sizeOverLifetime)
  i2416.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2417[9], i2416.textureSheetAnimation)
  i2416.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2417[10], i2416.velocityOverLifetime)
  i2416.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2417[11], i2416.noise)
  i2416.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2417[12], i2416.inheritVelocity)
  i2416.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2417[13], i2416.forceOverLifetime)
  i2416.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2417[14], i2416.limitVelocityOverLifetime)
  i2416.useAutoRandomSeed = !!i2417[15]
  i2416.randomSeed = i2417[16]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemMain()
  var i2419 = data
  i2418.duration = i2419[0]
  i2418.loop = !!i2419[1]
  i2418.prewarm = !!i2419[2]
  i2418.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.startDelay)
  i2418.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.startLifetime)
  i2418.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[5], i2418.startSpeed)
  i2418.startSize3D = !!i2419[6]
  i2418.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[7], i2418.startSizeX)
  i2418.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[8], i2418.startSizeY)
  i2418.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[9], i2418.startSizeZ)
  i2418.startRotation3D = !!i2419[10]
  i2418.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[11], i2418.startRotationX)
  i2418.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[12], i2418.startRotationY)
  i2418.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[13], i2418.startRotationZ)
  i2418.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2419[14], i2418.startColor)
  i2418.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[15], i2418.gravityModifier)
  i2418.simulationSpace = i2419[16]
  request.r(i2419[17], i2419[18], 0, i2418, 'customSimulationSpace')
  i2418.simulationSpeed = i2419[19]
  i2418.useUnscaledTime = !!i2419[20]
  i2418.scalingMode = i2419[21]
  i2418.playOnAwake = !!i2419[22]
  i2418.maxParticles = i2419[23]
  i2418.emitterVelocityMode = i2419[24]
  i2418.stopAction = i2419[25]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2420 = root || new pc.MinMaxCurve()
  var i2421 = data
  i2420.mode = i2421[0]
  i2420.curveMin = new pc.AnimationCurve( { keys_flow: i2421[1] } )
  i2420.curveMax = new pc.AnimationCurve( { keys_flow: i2421[2] } )
  i2420.curveMultiplier = i2421[3]
  i2420.constantMin = i2421[4]
  i2420.constantMax = i2421[5]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2422 = root || new pc.MinMaxGradient()
  var i2423 = data
  i2422.mode = i2423[0]
  i2422.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2423[1], i2422.gradientMin)
  i2422.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2423[2], i2422.gradientMax)
  i2422.colorMin = new pc.Color(i2423[3], i2423[4], i2423[5], i2423[6])
  i2422.colorMax = new pc.Color(i2423[7], i2423[8], i2423[9], i2423[10])
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2425 = data
  i2424.mode = i2425[0]
  var i2427 = i2425[1]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2427[i + 0]) );
  }
  i2424.colorKeys = i2426
  var i2429 = i2425[2]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2429[i + 0]) );
  }
  i2424.alphaKeys = i2428
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemColorBySpeed()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2431[1], i2430.color)
  i2430.range = new pc.Vec2( i2431[2], i2431[3] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2435 = data
  i2434.color = new pc.Color(i2435[0], i2435[1], i2435[2], i2435[3])
  i2434.time = i2435[4]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2439 = data
  i2438.alpha = i2439[0]
  i2438.time = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemColorOverLifetime()
  var i2441 = data
  i2440.enabled = !!i2441[0]
  i2440.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2441[1], i2440.color)
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemEmitter()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[1], i2442.rateOverTime)
  i2442.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[2], i2442.rateOverDistance)
  var i2445 = i2443[3]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2445[i + 0]) );
  }
  i2442.bursts = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemBurst()
  var i2449 = data
  i2448.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[0], i2448.count)
  i2448.cycleCount = i2449[1]
  i2448.minCount = i2449[2]
  i2448.maxCount = i2449[3]
  i2448.repeatInterval = i2449[4]
  i2448.time = i2449[5]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemRotationBySpeed()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[1], i2450.x)
  i2450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.y)
  i2450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.z)
  i2450.separateAxes = !!i2451[4]
  i2450.range = new pc.Vec2( i2451[5], i2451[6] )
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[1], i2452.x)
  i2452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[2], i2452.y)
  i2452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2453[3], i2452.z)
  i2452.separateAxes = !!i2453[4]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemShape()
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.shapeType = i2455[1]
  i2454.randomDirectionAmount = i2455[2]
  i2454.sphericalDirectionAmount = i2455[3]
  i2454.randomPositionAmount = i2455[4]
  i2454.alignToDirection = !!i2455[5]
  i2454.radius = i2455[6]
  i2454.radiusMode = i2455[7]
  i2454.radiusSpread = i2455[8]
  i2454.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[9], i2454.radiusSpeed)
  i2454.radiusThickness = i2455[10]
  i2454.angle = i2455[11]
  i2454.length = i2455[12]
  i2454.boxThickness = new pc.Vec3( i2455[13], i2455[14], i2455[15] )
  i2454.meshShapeType = i2455[16]
  request.r(i2455[17], i2455[18], 0, i2454, 'mesh')
  request.r(i2455[19], i2455[20], 0, i2454, 'meshRenderer')
  request.r(i2455[21], i2455[22], 0, i2454, 'skinnedMeshRenderer')
  i2454.useMeshMaterialIndex = !!i2455[23]
  i2454.meshMaterialIndex = i2455[24]
  i2454.useMeshColors = !!i2455[25]
  i2454.normalOffset = i2455[26]
  i2454.arc = i2455[27]
  i2454.arcMode = i2455[28]
  i2454.arcSpread = i2455[29]
  i2454.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[30], i2454.arcSpeed)
  i2454.donutRadius = i2455[31]
  i2454.position = new pc.Vec3( i2455[32], i2455[33], i2455[34] )
  i2454.rotation = new pc.Vec3( i2455[35], i2455[36], i2455[37] )
  i2454.scale = new pc.Vec3( i2455[38], i2455[39], i2455[40] )
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2456 = root || new pc.ParticleSystemSizeBySpeed()
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[1], i2456.x)
  i2456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[2], i2456.y)
  i2456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[3], i2456.z)
  i2456.separateAxes = !!i2457[4]
  i2456.range = new pc.Vec2( i2457[5], i2457[6] )
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2458 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2459 = data
  i2458.enabled = !!i2459[0]
  i2458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[1], i2458.x)
  i2458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[2], i2458.y)
  i2458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[3], i2458.z)
  i2458.separateAxes = !!i2459[4]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2460 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.mode = i2461[1]
  i2460.animation = i2461[2]
  i2460.numTilesX = i2461[3]
  i2460.numTilesY = i2461[4]
  i2460.useRandomRow = !!i2461[5]
  i2460.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[6], i2460.frameOverTime)
  i2460.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[7], i2460.startFrame)
  i2460.cycleCount = i2461[8]
  i2460.rowIndex = i2461[9]
  i2460.flipU = i2461[10]
  i2460.flipV = i2461[11]
  i2460.spriteCount = i2461[12]
  var i2463 = i2461[13]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460.sprites = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2466 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2467 = data
  i2466.enabled = !!i2467[0]
  i2466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[1], i2466.x)
  i2466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[2], i2466.y)
  i2466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[3], i2466.z)
  i2466.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[4], i2466.radial)
  i2466.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[5], i2466.speedModifier)
  i2466.space = i2467[6]
  i2466.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[7], i2466.orbitalX)
  i2466.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[8], i2466.orbitalY)
  i2466.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[9], i2466.orbitalZ)
  i2466.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[10], i2466.orbitalOffsetX)
  i2466.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[11], i2466.orbitalOffsetY)
  i2466.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[12], i2466.orbitalOffsetZ)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2468 = root || new pc.ParticleSystemNoise()
  var i2469 = data
  i2468.enabled = !!i2469[0]
  i2468.separateAxes = !!i2469[1]
  i2468.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[2], i2468.strengthX)
  i2468.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[3], i2468.strengthY)
  i2468.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[4], i2468.strengthZ)
  i2468.frequency = i2469[5]
  i2468.damping = !!i2469[6]
  i2468.octaveCount = i2469[7]
  i2468.octaveMultiplier = i2469[8]
  i2468.octaveScale = i2469[9]
  i2468.quality = i2469[10]
  i2468.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[11], i2468.scrollSpeed)
  i2468.scrollSpeedMultiplier = i2469[12]
  i2468.remapEnabled = !!i2469[13]
  i2468.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[14], i2468.remapX)
  i2468.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[15], i2468.remapY)
  i2468.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[16], i2468.remapZ)
  i2468.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[17], i2468.positionAmount)
  i2468.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[18], i2468.rotationAmount)
  i2468.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[19], i2468.sizeAmount)
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2470 = root || new pc.ParticleSystemInheritVelocity()
  var i2471 = data
  i2470.enabled = !!i2471[0]
  i2470.mode = i2471[1]
  i2470.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[2], i2470.curve)
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2472 = root || new pc.ParticleSystemForceOverLifetime()
  var i2473 = data
  i2472.enabled = !!i2473[0]
  i2472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[1], i2472.x)
  i2472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[2], i2472.y)
  i2472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[3], i2472.z)
  i2472.space = i2473[4]
  i2472.randomized = !!i2473[5]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[1], i2474.limit)
  i2474.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[2], i2474.limitX)
  i2474.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[3], i2474.limitY)
  i2474.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[4], i2474.limitZ)
  i2474.dampen = i2475[5]
  i2474.separateAxes = !!i2475[6]
  i2474.space = i2475[7]
  i2474.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[8], i2474.drag)
  i2474.multiplyDragByParticleSize = !!i2475[9]
  i2474.multiplyDragByParticleVelocity = !!i2475[10]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'mesh')
  i2476.meshCount = i2477[2]
  i2476.activeVertexStreamsCount = i2477[3]
  i2476.alignment = i2477[4]
  i2476.renderMode = i2477[5]
  i2476.sortMode = i2477[6]
  i2476.lengthScale = i2477[7]
  i2476.velocityScale = i2477[8]
  i2476.cameraVelocityScale = i2477[9]
  i2476.normalDirection = i2477[10]
  i2476.sortingFudge = i2477[11]
  i2476.minParticleSize = i2477[12]
  i2476.maxParticleSize = i2477[13]
  i2476.pivot = new pc.Vec3( i2477[14], i2477[15], i2477[16] )
  request.r(i2477[17], i2477[18], 0, i2476, 'trailMaterial')
  i2476.applyActiveColorSpace = !!i2477[19]
  i2476.enabled = !!i2477[20]
  request.r(i2477[21], i2477[22], 0, i2476, 'sharedMaterial')
  var i2479 = i2477[23]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.sharedMaterials = i2478
  i2476.receiveShadows = !!i2477[24]
  i2476.shadowCastingMode = i2477[25]
  i2476.sortingLayerID = i2477[26]
  i2476.sortingOrder = i2477[27]
  i2476.lightmapIndex = i2477[28]
  i2476.lightmapSceneIndex = i2477[29]
  i2476.lightmapScaleOffset = new pc.Vec4( i2477[30], i2477[31], i2477[32], i2477[33] )
  i2476.lightProbeUsage = i2477[34]
  i2476.reflectionProbeUsage = i2477[35]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2481 = data
  i2480.center = new pc.Vec3( i2481[0], i2481[1], i2481[2] )
  i2480.radius = i2481[3]
  i2480.enabled = !!i2481[4]
  i2480.isTrigger = !!i2481[5]
  request.r(i2481[6], i2481[7], 0, i2480, 'material')
  return i2480
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2482 = root || request.c( 'CharacterMotor' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'characterInput')
  request.r(i2483[2], i2483[3], 0, i2482, 'cameraYawTransform')
  request.r(i2483[4], i2483[5], 0, i2482, '_arrow')
  i2482.moveSpeed = i2483[6]
  i2482.jumpHeight = i2483[7]
  request.r(i2483[8], i2483[9], 0, i2482, 'groundChecker')
  i2482.gravity = i2483[10]
  i2482.enableStepClimb = !!i2483[11]
  i2482.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2483[12] )
  i2482.maxStepHeight = i2483[13]
  i2482.stepCheckDistance = i2483[14]
  i2482.stepUpSpeed = i2483[15]
  i2482.stepUpAcceleration = i2483[16]
  i2482.minimumStepFacing = i2483[17]
  request.r(i2483[18], i2483[19], 0, i2482, 'controller')
  i2482.autoRun = !!i2483[20]
  return i2482
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2484 = root || request.c( 'CharacterRotation' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'motor')
  i2484.rotationSpeed = i2485[2]
  return i2484
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2486 = root || request.c( 'CharacterAnimation' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'animator')
  request.r(i2487[2], i2487[3], 0, i2486, 'motor')
  i2486.speedChangeRate = i2487[4]
  i2486.groundedGraceTime = i2487[5]
  return i2486
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2488 = root || request.c( 'CharacterCollect' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'motor')
  request.r(i2489[2], i2489[3], 0, i2488, 'avatar')
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2491 = data
  i2490.mass = i2491[0]
  i2490.drag = i2491[1]
  i2490.angularDrag = i2491[2]
  i2490.useGravity = !!i2491[3]
  i2490.isKinematic = !!i2491[4]
  i2490.constraints = i2491[5]
  i2490.maxAngularVelocity = i2491[6]
  i2490.collisionDetectionMode = i2491[7]
  i2490.interpolation = i2491[8]
  return i2490
}

Deserializers["AutoJumpObstacle"] = function (request, data, root) {
  var i2492 = root || request.c( 'AutoJumpObstacle' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'motor')
  request.r(i2493[2], i2493[3], 0, i2492, 'capsuleCollider')
  i2492.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i2493[4] )
  i2492.checkDistance = i2493[5]
  i2492.lowerRayHeight = i2493[6]
  i2492.maxObstacleHeight = i2493[7]
  i2492.jumpCooldown = i2493[8]
  i2492.jumpBufferDuration = i2493[9]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'sharedMesh')
  var i2497 = i2495[2]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494.bones = i2496
  i2494.updateWhenOffscreen = !!i2495[3]
  i2494.localBounds = i2495[4]
  request.r(i2495[5], i2495[6], 0, i2494, 'rootBone')
  var i2499 = i2495[7]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2499[i + 0]) );
  }
  i2494.blendShapesWeights = i2498
  i2494.enabled = !!i2495[8]
  request.r(i2495[9], i2495[10], 0, i2494, 'sharedMaterial')
  var i2501 = i2495[11]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2494.sharedMaterials = i2500
  i2494.receiveShadows = !!i2495[12]
  i2494.shadowCastingMode = i2495[13]
  i2494.sortingLayerID = i2495[14]
  i2494.sortingOrder = i2495[15]
  i2494.lightmapIndex = i2495[16]
  i2494.lightmapSceneIndex = i2495[17]
  i2494.lightmapScaleOffset = new pc.Vec4( i2495[18], i2495[19], i2495[20], i2495[21] )
  i2494.lightProbeUsage = i2495[22]
  i2494.reflectionProbeUsage = i2495[23]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2505 = data
  i2504.weight = i2505[0]
  return i2504
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2506 = root || request.c( 'GroundChecker' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'groundPoint')
  i2506.half = new pc.Vec3( i2507[2], i2507[3], i2507[4] )
  i2506.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2507[5] )
  return i2506
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2508 = root || request.c( 'CameraFollow' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'target')
  i2508.smoothTime = i2509[2]
  return i2508
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2510 = root || request.c( 'CameraLook' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'input')
  request.r(i2511[2], i2511[3], 0, i2510, 'yawPivot')
  request.r(i2511[4], i2511[5], 0, i2510, 'pitchPivot')
  i2510.minPitch = i2511[6]
  i2510.maxPitch = i2511[7]
  i2510.yaw = i2511[8]
  i2510.pitch = i2511[9]
  i2510.defaltYaw = i2511[10]
  i2510.defaltPitch = i2511[11]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2513 = data
  i2512.aspect = i2513[0]
  i2512.orthographic = !!i2513[1]
  i2512.orthographicSize = i2513[2]
  i2512.backgroundColor = new pc.Color(i2513[3], i2513[4], i2513[5], i2513[6])
  i2512.nearClipPlane = i2513[7]
  i2512.farClipPlane = i2513[8]
  i2512.fieldOfView = i2513[9]
  i2512.depth = i2513[10]
  i2512.clearFlags = i2513[11]
  i2512.cullingMask = i2513[12]
  i2512.rect = i2513[13]
  request.r(i2513[14], i2513[15], 0, i2512, 'targetTexture')
  i2512.usePhysicalProperties = !!i2513[16]
  i2512.focalLength = i2513[17]
  i2512.sensorSize = new pc.Vec2( i2513[18], i2513[19] )
  i2512.lensShift = new pc.Vec2( i2513[20], i2513[21] )
  i2512.gateFit = i2513[22]
  i2512.commandBufferCount = i2513[23]
  i2512.cameraType = i2513[24]
  i2512.enabled = !!i2513[25]
  return i2512
}

Deserializers["Gift"] = function (request, data, root) {
  var i2514 = root || request.c( 'Gift' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'hint')
  i2514.onCollect = request.d('UnityEngine.Events.UnityEvent', i2515[2], i2514.onCollect)
  i2514.collectDone = !!i2515[3]
  request.r(i2515[4], i2515[5], 0, i2514, 'collectSound')
  request.r(i2515[6], i2515[7], 0, i2514, 'effect')
  request.r(i2515[8], i2515[9], 0, i2514, 'complete')
  return i2514
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'm_ObjectArgument')
  i2516.m_ObjectArgumentAssemblyTypeName = i2517[2]
  i2516.m_IntArgument = i2517[3]
  i2516.m_FloatArgument = i2517[4]
  i2516.m_StringArgument = i2517[5]
  i2516.m_BoolArgument = !!i2517[6]
  return i2516
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2518 = root || request.c( 'SoundHint' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'Sound')
  request.r(i2519[2], i2519[3], 0, i2518, 'Source')
  return i2518
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i2520 = root || request.c( 'JumpHint' )
  var i2521 = data
  i2520.JumpForce = new pc.Vec3( i2521[0], i2521[1], i2521[2] )
  request.r(i2521[3], i2521[4], 0, i2520, 'Rigidbody')
  return i2520
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2522 = root || request.c( 'CharacterInput' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'joystick')
  request.r(i2523[2], i2523[3], 0, i2522, 'jumpButton')
  return i2522
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2524 = root || request.c( 'InputManager' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'worldCamera')
  i2524.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2525[2] )
  i2524.touchSensitivity = i2525[3]
  i2524.mouseSensitivity = i2525[4]
  i2524.dragThreshold = i2525[5]
  return i2524
}

Deserializers["GameController"] = function (request, data, root) {
  var i2526 = root || request.c( 'GameController' )
  var i2527 = data
  i2526.timeToShowEnd = i2527[0]
  i2526.currentProgress = i2527[1]
  i2526.target = i2527[2]
  i2526.maxProgress = i2527[3]
  request.r(i2527[4], i2527[5], 0, i2526, 'progressText')
  request.r(i2527[6], i2527[7], 0, i2526, 'doneScene')
  var i2529 = i2527[8]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 1, i2528, '')
  }
  i2526.confetti = i2528
  request.r(i2527[9], i2527[10], 0, i2526, 'completeScene')
  request.r(i2527[11], i2527[12], 0, i2526, 'failScene')
  request.r(i2527[13], i2527[14], 0, i2526, 'collect')
  request.r(i2527[15], i2527[16], 0, i2526, 'tut')
  var i2531 = i2527[17]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 1, i2530, '')
  }
  i2526.gifts = i2530
  return i2526
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2536 = root || request.c( 'AudioController' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'musicSource')
  request.r(i2537[2], i2537[3], 0, i2536, 'poolParent')
  i2536.startSize = i2537[4]
  return i2536
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2538 = root || request.c( 'LunaController' )
  var i2539 = data
  i2538.LimitTimePlay = !!i2539[0]
  i2538.TimePlay = i2539[1]
  i2538.LimitClick = !!i2539[2]
  i2538.MaxClick = i2539[3]
  i2538.TutorialTextBeforeHorror = i2539[4]
  i2538.TutorialTextAfterHorror = i2539[5]
  i2538.TutorialTextAfterSecondHorror = i2539[6]
  var i2541 = i2539[7]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 1, i2540, '')
  }
  i2538.monsters = i2540
  var i2543 = i2539[8]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2543.length; i += 2) {
  request.r(i2543[i + 0], i2543[i + 1], 1, i2542, '')
  }
  i2538.CTA = i2542
  request.r(i2539[9], i2539[10], 0, i2538, 'endCard')
  i2538.currentClick = i2539[11]
  return i2538
}

Deserializers["WorldController"] = function (request, data, root) {
  var i2548 = root || request.c( 'WorldController' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'worldCamera')
  request.r(i2549[2], i2549[3], 0, i2548, 'tutorialText')
  i2548.cameraBackgroundColor = new pc.Color(i2549[4], i2549[5], i2549[6], i2549[7])
  i2548.enableFog = !!i2549[8]
  i2548.fogColor = new pc.Color(i2549[9], i2549[10], i2549[11], i2549[12])
  i2548.horrorCameraColor = new pc.Color(i2549[13], i2549[14], i2549[15], i2549[16])
  i2548.horrorFogColor = new pc.Color(i2549[17], i2549[18], i2549[19], i2549[20])
  request.r(i2549[21], i2549[22], 0, i2548, 'horrorMusic')
  i2548.horrorColorFadeDuration = i2549[23]
  i2548.horrorMusicFadeDuration = i2549[24]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2551 = data
  i2550.ambientIntensity = i2551[0]
  i2550.reflectionIntensity = i2551[1]
  i2550.ambientMode = i2551[2]
  i2550.ambientLight = new pc.Color(i2551[3], i2551[4], i2551[5], i2551[6])
  i2550.ambientSkyColor = new pc.Color(i2551[7], i2551[8], i2551[9], i2551[10])
  i2550.ambientGroundColor = new pc.Color(i2551[11], i2551[12], i2551[13], i2551[14])
  i2550.ambientEquatorColor = new pc.Color(i2551[15], i2551[16], i2551[17], i2551[18])
  i2550.fogColor = new pc.Color(i2551[19], i2551[20], i2551[21], i2551[22])
  i2550.fogEndDistance = i2551[23]
  i2550.fogStartDistance = i2551[24]
  i2550.fogDensity = i2551[25]
  i2550.fog = !!i2551[26]
  request.r(i2551[27], i2551[28], 0, i2550, 'skybox')
  i2550.fogMode = i2551[29]
  var i2553 = i2551[30]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2553[i + 0]) );
  }
  i2550.lightmaps = i2552
  i2550.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2551[31], i2550.lightProbes)
  i2550.lightmapsMode = i2551[32]
  i2550.mixedBakeMode = i2551[33]
  i2550.environmentLightingMode = i2551[34]
  i2550.ambientProbe = new pc.SphericalHarmonicsL2(i2551[35])
  request.r(i2551[36], i2551[37], 0, i2550, 'customReflection')
  request.r(i2551[38], i2551[39], 0, i2550, 'defaultReflection')
  i2550.defaultReflectionMode = i2551[40]
  i2550.defaultReflectionResolution = i2551[41]
  i2550.sunLightObjectId = i2551[42]
  i2550.pixelLightCount = i2551[43]
  i2550.defaultReflectionHDR = !!i2551[44]
  i2550.hasLightDataAsset = !!i2551[45]
  i2550.hasManualGenerate = !!i2551[46]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'lightmapColor')
  request.r(i2557[2], i2557[3], 0, i2556, 'lightmapDirection')
  request.r(i2557[4], i2557[5], 0, i2556, 'shadowMask')
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2558 = root || new UnityEngine.LightProbes()
  var i2559 = data
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.bounciness = i2567[1]
  i2566.dynamicFriction = i2567[2]
  i2566.staticFriction = i2567[3]
  i2566.frictionCombine = i2567[4]
  i2566.bounceCombine = i2567[5]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2569 = data
  var i2571 = i2569[0]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2571[i + 0]));
  }
  i2568.ShaderCompilationErrors = i2570
  i2568.name = i2569[1]
  i2568.guid = i2569[2]
  var i2573 = i2569[3]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2568.shaderDefinedKeywords = i2572
  var i2575 = i2569[4]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2575[i + 0]) );
  }
  i2568.passes = i2574
  var i2577 = i2569[5]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2577[i + 0]) );
  }
  i2568.usePasses = i2576
  var i2579 = i2569[6]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2579[i + 0]) );
  }
  i2568.defaultParameterValues = i2578
  request.r(i2569[7], i2569[8], 0, i2568, 'unityFallbackShader')
  i2568.readDepth = !!i2569[9]
  i2568.hasDepthOnlyPass = !!i2569[10]
  i2568.isCreatedByShaderGraph = !!i2569[11]
  i2568.disableBatching = !!i2569[12]
  i2568.compiled = !!i2569[13]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2583 = data
  i2582.shaderName = i2583[0]
  i2582.errorMessage = i2583[1]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2588 = root || new pc.UnityShaderPass()
  var i2589 = data
  i2588.id = i2589[0]
  i2588.subShaderIndex = i2589[1]
  i2588.name = i2589[2]
  i2588.passType = i2589[3]
  i2588.grabPassTextureName = i2589[4]
  i2588.usePass = !!i2589[5]
  i2588.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[6], i2588.zTest)
  i2588.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[7], i2588.zWrite)
  i2588.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[8], i2588.culling)
  i2588.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2589[9], i2588.blending)
  i2588.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2589[10], i2588.alphaBlending)
  i2588.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[11], i2588.colorWriteMask)
  i2588.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[12], i2588.offsetUnits)
  i2588.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[13], i2588.offsetFactor)
  i2588.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[14], i2588.stencilRef)
  i2588.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[15], i2588.stencilReadMask)
  i2588.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[16], i2588.stencilWriteMask)
  i2588.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2589[17], i2588.stencilOp)
  i2588.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2589[18], i2588.stencilOpFront)
  i2588.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2589[19], i2588.stencilOpBack)
  var i2591 = i2589[20]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2591[i + 0]) );
  }
  i2588.tags = i2590
  var i2593 = i2589[21]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( i2593[i + 0] );
  }
  i2588.passDefinedKeywords = i2592
  var i2595 = i2589[22]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2595[i + 0]) );
  }
  i2588.passDefinedKeywordGroups = i2594
  var i2597 = i2589[23]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2597[i + 0]) );
  }
  i2588.variants = i2596
  var i2599 = i2589[24]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2599[i + 0]) );
  }
  i2588.excludedVariants = i2598
  i2588.hasDepthReader = !!i2589[25]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2601 = data
  i2600.val = i2601[0]
  i2600.name = i2601[1]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2603 = data
  i2602.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[0], i2602.src)
  i2602.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[1], i2602.dst)
  i2602.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[2], i2602.op)
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2605 = data
  i2604.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2605[0], i2604.pass)
  i2604.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2605[1], i2604.fail)
  i2604.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2605[2], i2604.zFail)
  i2604.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2605[3], i2604.comp)
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.value = i2609[1]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2613 = data
  var i2615 = i2613[0]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( i2615[i + 0] );
  }
  i2612.keywords = i2614
  i2612.hasDiscard = !!i2613[1]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2619 = data
  i2618.passId = i2619[0]
  i2618.subShaderIndex = i2619[1]
  var i2621 = i2619[2]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( i2621[i + 0] );
  }
  i2618.keywords = i2620
  i2618.vertexProgram = i2619[3]
  i2618.fragmentProgram = i2619[4]
  i2618.exportedForWebGl2 = !!i2619[5]
  i2618.readDepth = !!i2619[6]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'shader')
  i2624.pass = i2625[2]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2629 = data
  i2628.name = i2629[0]
  i2628.type = i2629[1]
  i2628.value = new pc.Vec4( i2629[2], i2629[3], i2629[4], i2629[5] )
  i2628.textureValue = i2629[6]
  i2628.shaderPropertyFlag = i2629[7]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2631 = data
  i2630.name = i2631[0]
  request.r(i2631[1], i2631[2], 0, i2630, 'texture')
  i2630.aabb = i2631[3]
  i2630.vertices = i2631[4]
  i2630.triangles = i2631[5]
  i2630.textureRect = UnityEngine.Rect.MinMaxRect(i2631[6], i2631[7], i2631[8], i2631[9])
  i2630.packedRect = UnityEngine.Rect.MinMaxRect(i2631[10], i2631[11], i2631[12], i2631[13])
  i2630.border = new pc.Vec4( i2631[14], i2631[15], i2631[16], i2631[17] )
  i2630.transparency = i2631[18]
  i2630.bounds = i2631[19]
  i2630.pixelsPerUnit = i2631[20]
  i2630.textureWidth = i2631[21]
  i2630.textureHeight = i2631[22]
  i2630.nativeSize = new pc.Vec2( i2631[23], i2631[24] )
  i2630.pivot = new pc.Vec2( i2631[25], i2631[26] )
  i2630.textureRectOffset = new pc.Vec2( i2631[27], i2631[28] )
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2633 = data
  i2632.name = i2633[0]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2635 = data
  i2634.name = i2635[0]
  i2634.wrapMode = i2635[1]
  i2634.isLooping = !!i2635[2]
  i2634.length = i2635[3]
  var i2637 = i2635[4]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2637[i + 0]) );
  }
  i2634.curves = i2636
  var i2639 = i2635[5]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2639[i + 0]) );
  }
  i2634.events = i2638
  i2634.halfPrecision = !!i2635[6]
  i2634._frameRate = i2635[7]
  i2634.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2635[8], i2634.localBounds)
  i2634.hasMuscleCurves = !!i2635[9]
  var i2641 = i2635[10]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( i2641[i + 0] );
  }
  i2634.clipMuscleConstant = i2640
  i2634.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2635[11], i2634.clipBindingConstant)
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2645 = data
  i2644.path = i2645[0]
  i2644.hash = i2645[1]
  i2644.componentType = i2645[2]
  i2644.property = i2645[3]
  i2644.keys = i2645[4]
  var i2647 = i2645[5]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2647[i + 0]) );
  }
  i2644.objectReferenceKeys = i2646
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2651 = data
  i2650.time = i2651[0]
  request.r(i2651[1], i2651[2], 0, i2650, 'value')
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2655 = data
  i2654.functionName = i2655[0]
  i2654.floatParameter = i2655[1]
  i2654.intParameter = i2655[2]
  i2654.stringParameter = i2655[3]
  request.r(i2655[4], i2655[5], 0, i2654, 'objectReferenceParameter')
  i2654.time = i2655[6]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2657 = data
  i2656.center = new pc.Vec3( i2657[0], i2657[1], i2657[2] )
  i2656.extends = new pc.Vec3( i2657[3], i2657[4], i2657[5] )
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2661 = data
  var i2663 = i2661[0]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( i2663[i + 0] );
  }
  i2660.genericBindings = i2662
  var i2665 = i2661[1]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( i2665[i + 0] );
  }
  i2660.pptrCurveMapping = i2664
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2667 = data
  i2666.name = i2667[0]
  var i2669 = i2667[1]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2669[i + 0]) );
  }
  i2666.layers = i2668
  var i2671 = i2667[2]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2671[i + 0]) );
  }
  i2666.parameters = i2670
  i2666.animationClips = i2667[3]
  i2666.avatarUnsupported = i2667[4]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.defaultWeight = i2675[1]
  i2674.blendingMode = i2675[2]
  i2674.avatarMask = i2675[3]
  i2674.syncedLayerIndex = i2675[4]
  i2674.syncedLayerAffectsTiming = !!i2675[5]
  i2674.syncedLayers = i2675[6]
  i2674.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2675[7], i2674.stateMachine)
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2677 = data
  i2676.id = i2677[0]
  i2676.name = i2677[1]
  i2676.path = i2677[2]
  var i2679 = i2677[3]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2679[i + 0]) );
  }
  i2676.states = i2678
  var i2681 = i2677[4]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2681[i + 0]) );
  }
  i2676.machines = i2680
  var i2683 = i2677[5]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2683[i + 0]) );
  }
  i2676.entryStateTransitions = i2682
  var i2685 = i2677[6]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2685[i + 0]) );
  }
  i2676.exitStateTransitions = i2684
  var i2687 = i2677[7]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2687[i + 0]) );
  }
  i2676.anyStateTransitions = i2686
  i2676.defaultStateId = i2677[8]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2691 = data
  i2690.id = i2691[0]
  i2690.name = i2691[1]
  i2690.cycleOffset = i2691[2]
  i2690.cycleOffsetParameter = i2691[3]
  i2690.cycleOffsetParameterActive = !!i2691[4]
  i2690.mirror = !!i2691[5]
  i2690.mirrorParameter = i2691[6]
  i2690.mirrorParameterActive = !!i2691[7]
  i2690.motionId = i2691[8]
  i2690.nameHash = i2691[9]
  i2690.fullPathHash = i2691[10]
  i2690.speed = i2691[11]
  i2690.speedParameter = i2691[12]
  i2690.speedParameterActive = !!i2691[13]
  i2690.tag = i2691[14]
  i2690.tagHash = i2691[15]
  i2690.writeDefaultValues = !!i2691[16]
  var i2693 = i2691[17]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2690.behaviours = i2692
  var i2695 = i2691[18]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2695[i + 0]) );
  }
  i2690.transitions = i2694
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2701 = data
  i2700.fullPath = i2701[0]
  i2700.canTransitionToSelf = !!i2701[1]
  i2700.duration = i2701[2]
  i2700.exitTime = i2701[3]
  i2700.hasExitTime = !!i2701[4]
  i2700.hasFixedDuration = !!i2701[5]
  i2700.interruptionSource = i2701[6]
  i2700.offset = i2701[7]
  i2700.orderedInterruption = !!i2701[8]
  i2700.destinationStateId = i2701[9]
  i2700.isExit = !!i2701[10]
  i2700.mute = !!i2701[11]
  i2700.solo = !!i2701[12]
  var i2703 = i2701[13]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2703[i + 0]) );
  }
  i2700.conditions = i2702
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2707 = data
  i2706.mode = i2707[0]
  i2706.parameter = i2707[1]
  i2706.threshold = i2707[2]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2713 = data
  i2712.destinationStateId = i2713[0]
  i2712.isExit = !!i2713[1]
  i2712.mute = !!i2713[2]
  i2712.solo = !!i2713[3]
  var i2715 = i2713[4]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2715[i + 0]) );
  }
  i2712.conditions = i2714
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2719 = data
  i2718.defaultBool = !!i2719[0]
  i2718.defaultFloat = i2719[1]
  i2718.defaultInt = i2719[2]
  i2718.name = i2719[3]
  i2718.nameHash = i2719[4]
  i2718.type = i2719[5]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2721 = data
  i2720.name = i2721[0]
  request.r(i2721[1], i2721[2], 0, i2720, '_runtimeAnimatorController')
  var i2723 = i2721[3]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 2, i2722, '')
  }
  i2720._originalAnimationClips = i2722
  var i2725 = i2721[4]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 2, i2724, '')
  }
  i2720._overrideAnimationClips = i2724
  var i2727 = i2721[5]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 2, i2726, '')
  }
  i2720._animationClips = i2726
  var i2729 = i2721[6]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('UnityEngine.AnimationClipPair', i2729[i + 0]) );
  }
  i2720._animationClipPairs = i2728
  return i2720
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'originalClip')
  request.r(i2735[2], i2735[3], 0, i2734, 'overrideClip')
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.bytes64 = i2737[1]
  i2736.data = i2737[2]
  return i2736
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2739 = data
  i2738.normalStyle = i2739[0]
  i2738.normalSpacingOffset = i2739[1]
  i2738.boldStyle = i2739[2]
  i2738.boldSpacing = i2739[3]
  i2738.italicStyle = i2739[4]
  i2738.tabSize = i2739[5]
  request.r(i2739[6], i2739[7], 0, i2738, 'atlas')
  i2738.m_SourceFontFileGUID = i2739[8]
  i2738.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2739[9], i2738.m_CreationSettings)
  request.r(i2739[10], i2739[11], 0, i2738, 'm_SourceFontFile')
  i2738.m_SourceFontFilePath = i2739[12]
  i2738.m_AtlasPopulationMode = i2739[13]
  i2738.InternalDynamicOS = !!i2739[14]
  var i2741 = i2739[15]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('UnityEngine.TextCore.Glyph', i2741[i + 0]));
  }
  i2738.m_GlyphTable = i2740
  var i2743 = i2739[16]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.TMP_Character', i2743[i + 0]));
  }
  i2738.m_CharacterTable = i2742
  var i2745 = i2739[17]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2738.m_AtlasTextures = i2744
  i2738.m_AtlasTextureIndex = i2739[18]
  i2738.m_IsMultiAtlasTexturesEnabled = !!i2739[19]
  i2738.m_GetFontFeatures = !!i2739[20]
  i2738.m_ClearDynamicDataOnBuild = !!i2739[21]
  i2738.m_AtlasWidth = i2739[22]
  i2738.m_AtlasHeight = i2739[23]
  i2738.m_AtlasPadding = i2739[24]
  i2738.m_AtlasRenderMode = i2739[25]
  var i2747 = i2739[26]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.add(request.d('UnityEngine.TextCore.GlyphRect', i2747[i + 0]));
  }
  i2738.m_UsedGlyphRects = i2746
  var i2749 = i2739[27]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('UnityEngine.TextCore.GlyphRect', i2749[i + 0]));
  }
  i2738.m_FreeGlyphRects = i2748
  i2738.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2739[28], i2738.m_FontFeatureTable)
  i2738.m_ShouldReimportFontFeatures = !!i2739[29]
  var i2751 = i2739[30]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 1, i2750, '')
  }
  i2738.m_FallbackFontAssetTable = i2750
  var i2753 = i2739[31]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('TMPro.TMP_FontWeightPair', i2753[i + 0]) );
  }
  i2738.m_FontWeightTable = i2752
  var i2755 = i2739[32]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('TMPro.TMP_FontWeightPair', i2755[i + 0]) );
  }
  i2738.fontWeights = i2754
  i2738.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2739[33], i2738.m_fontInfo)
  var i2757 = i2739[34]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.add(request.d('TMPro.TMP_Glyph', i2757[i + 0]));
  }
  i2738.m_glyphInfoList = i2756
  i2738.m_KerningTable = request.d('TMPro.KerningTable', i2739[35], i2738.m_KerningTable)
  var i2759 = i2739[36]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 1, i2758, '')
  }
  i2738.fallbackFontAssets = i2758
  i2738.m_Version = i2739[37]
  i2738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2739[38], i2738.m_FaceInfo)
  request.r(i2739[39], i2739[40], 0, i2738, 'm_Material')
  return i2738
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2761 = data
  i2760.sourceFontFileName = i2761[0]
  i2760.sourceFontFileGUID = i2761[1]
  i2760.faceIndex = i2761[2]
  i2760.pointSizeSamplingMode = i2761[3]
  i2760.pointSize = i2761[4]
  i2760.padding = i2761[5]
  i2760.paddingMode = i2761[6]
  i2760.packingMode = i2761[7]
  i2760.atlasWidth = i2761[8]
  i2760.atlasHeight = i2761[9]
  i2760.characterSetSelectionMode = i2761[10]
  i2760.characterSequence = i2761[11]
  i2760.referencedFontAssetGUID = i2761[12]
  i2760.referencedTextAssetGUID = i2761[13]
  i2760.fontStyle = i2761[14]
  i2760.fontStyleModifier = i2761[15]
  i2760.renderMode = i2761[16]
  i2760.includeFontFeatures = !!i2761[17]
  return i2760
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2765 = data
  i2764.m_Index = i2765[0]
  i2764.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2765[1], i2764.m_Metrics)
  i2764.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2765[2], i2764.m_GlyphRect)
  i2764.m_Scale = i2765[3]
  i2764.m_AtlasIndex = i2765[4]
  i2764.m_ClassDefinitionType = i2765[5]
  return i2764
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2767 = data
  i2766.m_Width = i2767[0]
  i2766.m_Height = i2767[1]
  i2766.m_HorizontalBearingX = i2767[2]
  i2766.m_HorizontalBearingY = i2767[3]
  i2766.m_HorizontalAdvance = i2767[4]
  return i2766
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2769 = data
  i2768.m_X = i2769[0]
  i2768.m_Y = i2769[1]
  i2768.m_Width = i2769[2]
  i2768.m_Height = i2769[3]
  return i2768
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.TMP_Character' )
  var i2773 = data
  i2772.m_ElementType = i2773[0]
  i2772.m_Unicode = i2773[1]
  i2772.m_GlyphIndex = i2773[2]
  i2772.m_Scale = i2773[3]
  return i2772
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2779 = data
  var i2781 = i2779[0]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.add(request.d('TMPro.MultipleSubstitutionRecord', i2781[i + 0]));
  }
  i2778.m_MultipleSubstitutionRecords = i2780
  var i2783 = i2779[1]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(request.d('TMPro.LigatureSubstitutionRecord', i2783[i + 0]));
  }
  i2778.m_LigatureSubstitutionRecords = i2782
  var i2785 = i2779[2]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2785[i + 0]));
  }
  i2778.m_GlyphPairAdjustmentRecords = i2784
  var i2787 = i2779[3]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2787[i + 0]));
  }
  i2778.m_MarkToBaseAdjustmentRecords = i2786
  var i2789 = i2779[4]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2789[i + 0]));
  }
  i2778.m_MarkToMarkAdjustmentRecords = i2788
  return i2778
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2793 = data
  i2792.m_TargetGlyphID = i2793[0]
  i2792.m_SubstituteGlyphIDs = i2793[1]
  return i2792
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2797 = data
  i2796.m_ComponentGlyphIDs = i2797[0]
  i2796.m_LigatureGlyphID = i2797[1]
  return i2796
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2801 = data
  i2800.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2801[0], i2800.m_FirstAdjustmentRecord)
  i2800.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2801[1], i2800.m_SecondAdjustmentRecord)
  i2800.m_FeatureLookupFlags = i2801[2]
  return i2800
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2805 = data
  i2804.m_BaseGlyphID = i2805[0]
  i2804.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2805[1], i2804.m_BaseGlyphAnchorPoint)
  i2804.m_MarkGlyphID = i2805[2]
  i2804.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2805[3], i2804.m_MarkPositionAdjustment)
  return i2804
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2809 = data
  i2808.m_BaseMarkGlyphID = i2809[0]
  i2808.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2809[1], i2808.m_BaseMarkGlyphAnchorPoint)
  i2808.m_CombiningMarkGlyphID = i2809[2]
  i2808.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2809[3], i2808.m_CombiningMarkPositionAdjustment)
  return i2808
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'regularTypeface')
  request.r(i2815[2], i2815[3], 0, i2814, 'italicTypeface')
  return i2814
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2817 = data
  i2816.Name = i2817[0]
  i2816.PointSize = i2817[1]
  i2816.Scale = i2817[2]
  i2816.CharacterCount = i2817[3]
  i2816.LineHeight = i2817[4]
  i2816.Baseline = i2817[5]
  i2816.Ascender = i2817[6]
  i2816.CapHeight = i2817[7]
  i2816.Descender = i2817[8]
  i2816.CenterLine = i2817[9]
  i2816.SuperscriptOffset = i2817[10]
  i2816.SubscriptOffset = i2817[11]
  i2816.SubSize = i2817[12]
  i2816.Underline = i2817[13]
  i2816.UnderlineThickness = i2817[14]
  i2816.strikethrough = i2817[15]
  i2816.strikethroughThickness = i2817[16]
  i2816.TabWidth = i2817[17]
  i2816.Padding = i2817[18]
  i2816.AtlasWidth = i2817[19]
  i2816.AtlasHeight = i2817[20]
  return i2816
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2821 = data
  i2820.id = i2821[0]
  i2820.x = i2821[1]
  i2820.y = i2821[2]
  i2820.width = i2821[3]
  i2820.height = i2821[4]
  i2820.xOffset = i2821[5]
  i2820.yOffset = i2821[6]
  i2820.xAdvance = i2821[7]
  i2820.scale = i2821[8]
  return i2820
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.KerningTable' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.KerningPair', i2825[i + 0]));
  }
  i2822.kerningPairs = i2824
  return i2822
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.KerningPair' )
  var i2829 = data
  i2828.xOffset = i2829[0]
  i2828.m_FirstGlyph = i2829[1]
  i2828.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2829[2], i2828.m_FirstGlyphAdjustments)
  i2828.m_SecondGlyph = i2829[3]
  i2828.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2829[4], i2828.m_SecondGlyphAdjustments)
  i2828.m_IgnoreSpacingAdjustments = !!i2829[5]
  return i2828
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2831 = data
  i2830.m_FaceIndex = i2831[0]
  i2830.m_FamilyName = i2831[1]
  i2830.m_StyleName = i2831[2]
  i2830.m_PointSize = i2831[3]
  i2830.m_Scale = i2831[4]
  i2830.m_UnitsPerEM = i2831[5]
  i2830.m_LineHeight = i2831[6]
  i2830.m_AscentLine = i2831[7]
  i2830.m_CapLine = i2831[8]
  i2830.m_MeanLine = i2831[9]
  i2830.m_Baseline = i2831[10]
  i2830.m_DescentLine = i2831[11]
  i2830.m_SuperscriptOffset = i2831[12]
  i2830.m_SuperscriptSize = i2831[13]
  i2830.m_SubscriptOffset = i2831[14]
  i2830.m_SubscriptSize = i2831[15]
  i2830.m_UnderlineOffset = i2831[16]
  i2830.m_UnderlineThickness = i2831[17]
  i2830.m_StrikethroughOffset = i2831[18]
  i2830.m_StrikethroughThickness = i2831[19]
  i2830.m_TabWidth = i2831[20]
  return i2830
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2833 = data
  i2832.useSafeMode = !!i2833[0]
  i2832.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2833[1], i2832.safeModeOptions)
  i2832.timeScale = i2833[2]
  i2832.unscaledTimeScale = i2833[3]
  i2832.useSmoothDeltaTime = !!i2833[4]
  i2832.maxSmoothUnscaledTime = i2833[5]
  i2832.rewindCallbackMode = i2833[6]
  i2832.showUnityEditorReport = !!i2833[7]
  i2832.logBehaviour = i2833[8]
  i2832.drawGizmos = !!i2833[9]
  i2832.defaultRecyclable = !!i2833[10]
  i2832.defaultAutoPlay = i2833[11]
  i2832.defaultUpdateType = i2833[12]
  i2832.defaultTimeScaleIndependent = !!i2833[13]
  i2832.defaultEaseType = i2833[14]
  i2832.defaultEaseOvershootOrAmplitude = i2833[15]
  i2832.defaultEasePeriod = i2833[16]
  i2832.defaultAutoKill = !!i2833[17]
  i2832.defaultLoopType = i2833[18]
  i2832.debugMode = !!i2833[19]
  i2832.debugStoreTargetId = !!i2833[20]
  i2832.showPreviewPanel = !!i2833[21]
  i2832.storeSettingsLocation = i2833[22]
  i2832.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2833[23], i2832.modules)
  i2832.createASMDEF = !!i2833[24]
  i2832.showPlayingTweens = !!i2833[25]
  i2832.showPausedTweens = !!i2833[26]
  return i2832
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2835 = data
  i2834.logBehaviour = i2835[0]
  i2834.nestedTweenFailureBehaviour = i2835[1]
  return i2834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2837 = data
  i2836.showPanel = !!i2837[0]
  i2836.audioEnabled = !!i2837[1]
  i2836.physicsEnabled = !!i2837[2]
  i2836.physics2DEnabled = !!i2837[3]
  i2836.spriteEnabled = !!i2837[4]
  i2836.uiEnabled = !!i2837[5]
  i2836.textMeshProEnabled = !!i2837[6]
  i2836.tk2DEnabled = !!i2837[7]
  i2836.deAudioEnabled = !!i2837[8]
  i2836.deUnityExtendedEnabled = !!i2837[9]
  i2836.epoOutlineEnabled = !!i2837[10]
  return i2836
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.TMP_Settings' )
  var i2839 = data
  i2838.assetVersion = i2839[0]
  i2838.m_TextWrappingMode = i2839[1]
  i2838.m_enableKerning = !!i2839[2]
  var i2841 = i2839[3]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.add(i2841[i + 0]);
  }
  i2838.m_ActiveFontFeatures = i2840
  i2838.m_enableExtraPadding = !!i2839[4]
  i2838.m_enableTintAllSprites = !!i2839[5]
  i2838.m_enableParseEscapeCharacters = !!i2839[6]
  i2838.m_EnableRaycastTarget = !!i2839[7]
  i2838.m_GetFontFeaturesAtRuntime = !!i2839[8]
  i2838.m_missingGlyphCharacter = i2839[9]
  i2838.m_ClearDynamicDataOnBuild = !!i2839[10]
  i2838.m_warningsDisabled = !!i2839[11]
  request.r(i2839[12], i2839[13], 0, i2838, 'm_defaultFontAsset')
  i2838.m_defaultFontAssetPath = i2839[14]
  i2838.m_defaultFontSize = i2839[15]
  i2838.m_defaultAutoSizeMinRatio = i2839[16]
  i2838.m_defaultAutoSizeMaxRatio = i2839[17]
  i2838.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2839[18], i2839[19] )
  i2838.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2839[20], i2839[21] )
  i2838.m_autoSizeTextContainer = !!i2839[22]
  i2838.m_IsTextObjectScaleStatic = !!i2839[23]
  var i2843 = i2839[24]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2843.length; i += 2) {
  request.r(i2843[i + 0], i2843[i + 1], 1, i2842, '')
  }
  i2838.m_fallbackFontAssets = i2842
  i2838.m_matchMaterialPreset = !!i2839[25]
  i2838.m_HideSubTextObjects = !!i2839[26]
  request.r(i2839[27], i2839[28], 0, i2838, 'm_defaultSpriteAsset')
  i2838.m_defaultSpriteAssetPath = i2839[29]
  i2838.m_enableEmojiSupport = !!i2839[30]
  i2838.m_MissingCharacterSpriteUnicode = i2839[31]
  var i2845 = i2839[32]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2845.length; i += 2) {
  request.r(i2845[i + 0], i2845[i + 1], 1, i2844, '')
  }
  i2838.m_EmojiFallbackTextAssets = i2844
  i2838.m_defaultColorGradientPresetsPath = i2839[33]
  request.r(i2839[34], i2839[35], 0, i2838, 'm_defaultStyleSheet')
  i2838.m_StyleSheetsResourcePath = i2839[36]
  request.r(i2839[37], i2839[38], 0, i2838, 'm_leadingCharacters')
  request.r(i2839[39], i2839[40], 0, i2838, 'm_followingCharacters')
  i2838.m_UseModernHangulLineBreakingRules = !!i2839[41]
  return i2838
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2848 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'spriteSheet')
  var i2851 = i2849[2]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.TMP_Sprite', i2851[i + 0]));
  }
  i2848.spriteInfoList = i2850
  var i2853 = i2849[3]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2853.length; i += 2) {
  request.r(i2853[i + 0], i2853[i + 1], 1, i2852, '')
  }
  i2848.fallbackSpriteAssets = i2852
  var i2855 = i2849[4]
  var i2854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.add(request.d('TMPro.TMP_SpriteCharacter', i2855[i + 0]));
  }
  i2848.m_SpriteCharacterTable = i2854
  var i2857 = i2849[5]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('TMPro.TMP_SpriteGlyph', i2857[i + 0]));
  }
  i2848.m_GlyphTable = i2856
  i2848.m_Version = i2849[6]
  i2848.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2849[7], i2848.m_FaceInfo)
  request.r(i2849[8], i2849[9], 0, i2848, 'm_Material')
  return i2848
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2861 = data
  i2860.name = i2861[0]
  i2860.hashCode = i2861[1]
  i2860.unicode = i2861[2]
  i2860.pivot = new pc.Vec2( i2861[3], i2861[4] )
  request.r(i2861[5], i2861[6], 0, i2860, 'sprite')
  i2860.id = i2861[7]
  i2860.x = i2861[8]
  i2860.y = i2861[9]
  i2860.width = i2861[10]
  i2860.height = i2861[11]
  i2860.xOffset = i2861[12]
  i2860.yOffset = i2861[13]
  i2860.xAdvance = i2861[14]
  i2860.scale = i2861[15]
  return i2860
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2867 = data
  i2866.m_Name = i2867[0]
  i2866.m_ElementType = i2867[1]
  i2866.m_Unicode = i2867[2]
  i2866.m_GlyphIndex = i2867[3]
  i2866.m_Scale = i2867[4]
  return i2866
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'sprite')
  i2870.m_Index = i2871[2]
  i2870.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2871[3], i2870.m_Metrics)
  i2870.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2871[4], i2870.m_GlyphRect)
  i2870.m_Scale = i2871[5]
  i2870.m_AtlasIndex = i2871[6]
  i2870.m_ClassDefinitionType = i2871[7]
  return i2870
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2872 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2873 = data
  var i2875 = i2873[0]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.add(request.d('TMPro.TMP_Style', i2875[i + 0]));
  }
  i2872.m_StyleList = i2874
  return i2872
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_Style' )
  var i2879 = data
  i2878.m_Name = i2879[0]
  i2878.m_HashCode = i2879[1]
  i2878.m_OpeningDefinition = i2879[2]
  i2878.m_ClosingDefinition = i2879[3]
  i2878.m_OpeningTagArray = i2879[4]
  i2878.m_ClosingTagArray = i2879[5]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2881 = data
  var i2883 = i2881[0]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2883[i + 0]) );
  }
  i2880.files = i2882
  i2880.componentToPrefabIds = i2881[1]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2887 = data
  i2886.path = i2887[0]
  request.r(i2887[1], i2887[2], 0, i2886, 'unityObject')
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2889 = data
  var i2891 = i2889[0]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2891[i + 0]) );
  }
  i2888.scriptsExecutionOrder = i2890
  var i2893 = i2889[1]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2893[i + 0]) );
  }
  i2888.sortingLayers = i2892
  var i2895 = i2889[2]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2895[i + 0]) );
  }
  i2888.cullingLayers = i2894
  i2888.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2889[3], i2888.timeSettings)
  i2888.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2889[4], i2888.physicsSettings)
  i2888.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2889[5], i2888.physics2DSettings)
  i2888.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2889[6], i2888.qualitySettings)
  i2888.enableRealtimeShadows = !!i2889[7]
  i2888.enableAutoInstancing = !!i2889[8]
  i2888.enableStaticBatching = !!i2889[9]
  i2888.enableDynamicBatching = !!i2889[10]
  i2888.usePreservativeDynamicBatching = !!i2889[11]
  i2888.lightmapEncodingQuality = i2889[12]
  i2888.desiredColorSpace = i2889[13]
  var i2897 = i2889[14]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( i2897[i + 0] );
  }
  i2888.allTags = i2896
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2901 = data
  i2900.name = i2901[0]
  i2900.value = i2901[1]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2905 = data
  i2904.id = i2905[0]
  i2904.name = i2905[1]
  i2904.value = i2905[2]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2909 = data
  i2908.id = i2909[0]
  i2908.name = i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2911 = data
  i2910.fixedDeltaTime = i2911[0]
  i2910.maximumDeltaTime = i2911[1]
  i2910.timeScale = i2911[2]
  i2910.maximumParticleTimestep = i2911[3]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2913 = data
  i2912.gravity = new pc.Vec3( i2913[0], i2913[1], i2913[2] )
  i2912.defaultSolverIterations = i2913[3]
  i2912.bounceThreshold = i2913[4]
  i2912.autoSyncTransforms = !!i2913[5]
  i2912.autoSimulation = !!i2913[6]
  var i2915 = i2913[7]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2915[i + 0]) );
  }
  i2912.collisionMatrix = i2914
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2919 = data
  i2918.enabled = !!i2919[0]
  i2918.layerId = i2919[1]
  i2918.otherLayerId = i2919[2]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'material')
  i2920.gravity = new pc.Vec2( i2921[2], i2921[3] )
  i2920.positionIterations = i2921[4]
  i2920.velocityIterations = i2921[5]
  i2920.velocityThreshold = i2921[6]
  i2920.maxLinearCorrection = i2921[7]
  i2920.maxAngularCorrection = i2921[8]
  i2920.maxTranslationSpeed = i2921[9]
  i2920.maxRotationSpeed = i2921[10]
  i2920.baumgarteScale = i2921[11]
  i2920.baumgarteTOIScale = i2921[12]
  i2920.timeToSleep = i2921[13]
  i2920.linearSleepTolerance = i2921[14]
  i2920.angularSleepTolerance = i2921[15]
  i2920.defaultContactOffset = i2921[16]
  i2920.autoSimulation = !!i2921[17]
  i2920.queriesHitTriggers = !!i2921[18]
  i2920.queriesStartInColliders = !!i2921[19]
  i2920.callbacksOnDisable = !!i2921[20]
  i2920.reuseCollisionCallbacks = !!i2921[21]
  i2920.autoSyncTransforms = !!i2921[22]
  var i2923 = i2921[23]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2923[i + 0]) );
  }
  i2920.collisionMatrix = i2922
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2927 = data
  i2926.enabled = !!i2927[0]
  i2926.layerId = i2927[1]
  i2926.otherLayerId = i2927[2]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2929 = data
  var i2931 = i2929[0]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2931[i + 0]) );
  }
  i2928.qualityLevels = i2930
  var i2933 = i2929[1]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( i2933[i + 0] );
  }
  i2928.names = i2932
  i2928.shadows = i2929[2]
  i2928.anisotropicFiltering = i2929[3]
  i2928.antiAliasing = i2929[4]
  i2928.lodBias = i2929[5]
  i2928.shadowCascades = i2929[6]
  i2928.shadowDistance = i2929[7]
  i2928.shadowmaskMode = i2929[8]
  i2928.shadowProjection = i2929[9]
  i2928.shadowResolution = i2929[10]
  i2928.softParticles = !!i2929[11]
  i2928.softVegetation = !!i2929[12]
  i2928.activeColorSpace = i2929[13]
  i2928.desiredColorSpace = i2929[14]
  i2928.masterTextureLimit = i2929[15]
  i2928.maxQueuedFrames = i2929[16]
  i2928.particleRaycastBudget = i2929[17]
  i2928.pixelLightCount = i2929[18]
  i2928.realtimeReflectionProbes = !!i2929[19]
  i2928.shadowCascade2Split = i2929[20]
  i2928.shadowCascade4Split = new pc.Vec3( i2929[21], i2929[22], i2929[23] )
  i2928.streamingMipmapsActive = !!i2929[24]
  i2928.vSyncCount = i2929[25]
  i2928.asyncUploadBufferSize = i2929[26]
  i2928.asyncUploadTimeSlice = i2929[27]
  i2928.billboardsFaceCameraPosition = !!i2929[28]
  i2928.shadowNearPlaneOffset = i2929[29]
  i2928.streamingMipmapsMemoryBudget = i2929[30]
  i2928.maximumLODLevel = i2929[31]
  i2928.streamingMipmapsAddAllCameras = !!i2929[32]
  i2928.streamingMipmapsMaxLevelReduction = i2929[33]
  i2928.streamingMipmapsRenderersPerFrame = i2929[34]
  i2928.resolutionScalingFixedDPIFactor = i2929[35]
  i2928.streamingMipmapsMaxFileIORequests = i2929[36]
  i2928.currentQualityLevel = i2929[37]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2937 = data
  i2936.name = i2937[0]
  var i2939 = i2937[1]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2939[i + 0]) );
  }
  i2936.tos = i2938
  var i2941 = i2937[2]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( i2941[i + 0] );
  }
  i2936.constant = i2940
  i2936.isValid = !!i2937[3]
  i2936.isHuman = !!i2937[4]
  i2936.hasRootMotion = !!i2937[5]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2945 = data
  i2944.hash = i2945[0]
  i2944.path = i2945[1]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2949 = data
  i2948.weight = i2949[0]
  i2948.vertices = i2949[1]
  i2948.normals = i2949[2]
  i2948.tangents = i2949[3]
  return i2948
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2950 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2951 = data
  i2950.m_GlyphIndex = i2951[0]
  i2950.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2951[1], i2950.m_GlyphValueRecord)
  return i2950
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2952 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2953 = data
  i2952.m_XCoordinate = i2953[0]
  i2952.m_YCoordinate = i2953[1]
  return i2952
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2955 = data
  i2954.m_XPositionAdjustment = i2955[0]
  i2954.m_YPositionAdjustment = i2955[1]
  return i2954
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2956 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2957 = data
  i2956.xPlacement = i2957[0]
  i2956.yPlacement = i2957[1]
  i2956.xAdvance = i2957[2]
  i2956.yAdvance = i2957[3]
  return i2956
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2959 = data
  i2958.m_XPlacement = i2959[0]
  i2958.m_YPlacement = i2959[1]
  i2958.m_XAdvance = i2959[2]
  i2958.m_YAdvance = i2959[3]
  return i2958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[51],"79":[36],"80":[43],"81":[43],"82":[43],"83":[43],"84":[43],"85":[43],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[36],"101":[5],"102":[103],"104":[103],"20":[19],"48":[40,9],"105":[19],"106":[25,19],"107":[5],"108":[25,19],"109":[19],"110":[19],"111":[5,19],"30":[19,25],"112":[113],"114":[113],"115":[113],"116":[19],"117":[19],"22":[20],"26":[25,19],"118":[19],"21":[20],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"124":[19],"125":[19],"29":[19],"126":[19],"127":[25,19],"128":[19],"129":[19],"130":[19],"131":[19],"132":[25,19],"133":[19],"134":[16],"135":[16],"17":[16],"136":[16],"137":[36],"138":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AnimatorOverrideController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.SphereCollider","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","UnityEngine.PhysicsMaterial","AutoJumpObstacle","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","WorldController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/27/2026 01:47:47";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "e3c247c2-dd70-4e98-8e28-015bf537ed0a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

