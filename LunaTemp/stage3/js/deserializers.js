var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.JointSpring' )
  var i2251 = data
  i2250.spring = i2251[0]
  i2250.damper = i2251[1]
  i2250.targetPosition = i2251[2]
  return i2250
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.JointMotor' )
  var i2253 = data
  i2252.m_TargetVelocity = i2253[0]
  i2252.m_Force = i2253[1]
  i2252.m_FreeSpin = i2253[2]
  return i2252
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.JointLimits' )
  var i2255 = data
  i2254.m_Min = i2255[0]
  i2254.m_Max = i2255[1]
  i2254.m_Bounciness = i2255[2]
  i2254.m_BounceMinVelocity = i2255[3]
  i2254.m_ContactDistance = i2255[4]
  i2254.minBounce = i2255[5]
  i2254.maxBounce = i2255[6]
  return i2254
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointDrive' )
  var i2257 = data
  i2256.m_PositionSpring = i2257[0]
  i2256.m_PositionDamper = i2257[1]
  i2256.m_MaximumForce = i2257[2]
  i2256.m_UseAcceleration = i2257[3]
  return i2256
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2259 = data
  i2258.m_Spring = i2259[0]
  i2258.m_Damper = i2259[1]
  return i2258
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2261 = data
  i2260.m_Limit = i2261[0]
  i2260.m_Bounciness = i2261[1]
  i2260.m_ContactDistance = i2261[2]
  return i2260
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2263 = data
  i2262.m_ExtremumSlip = i2263[0]
  i2262.m_ExtremumValue = i2263[1]
  i2262.m_AsymptoteSlip = i2263[2]
  i2262.m_AsymptoteValue = i2263[3]
  i2262.m_Stiffness = i2263[4]
  return i2262
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2265 = data
  i2264.m_LowerAngle = i2265[0]
  i2264.m_UpperAngle = i2265[1]
  return i2264
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2267 = data
  i2266.m_MotorSpeed = i2267[0]
  i2266.m_MaximumMotorTorque = i2267[1]
  return i2266
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2269 = data
  i2268.m_DampingRatio = i2269[0]
  i2268.m_Frequency = i2269[1]
  i2268.m_Angle = i2269[2]
  return i2268
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2271 = data
  i2270.m_LowerTranslation = i2271[0]
  i2270.m_UpperTranslation = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2273 = data
  i2272.position = new pc.Vec3( i2273[0], i2273[1], i2273[2] )
  i2272.scale = new pc.Vec3( i2273[3], i2273[4], i2273[5] )
  i2272.rotation = new pc.Quat(i2273[6], i2273[7], i2273[8], i2273[9])
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'sharedMesh')
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'additionalVertexStreams')
  i2276.enabled = !!i2277[2]
  request.r(i2277[3], i2277[4], 0, i2276, 'sharedMaterial')
  var i2279 = i2277[5]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2276.sharedMaterials = i2278
  i2276.receiveShadows = !!i2277[6]
  i2276.shadowCastingMode = i2277[7]
  i2276.sortingLayerID = i2277[8]
  i2276.sortingOrder = i2277[9]
  i2276.lightmapIndex = i2277[10]
  i2276.lightmapSceneIndex = i2277[11]
  i2276.lightmapScaleOffset = new pc.Vec4( i2277[12], i2277[13], i2277[14], i2277[15] )
  i2276.lightProbeUsage = i2277[16]
  i2276.reflectionProbeUsage = i2277[17]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'sharedMesh')
  i2282.convex = !!i2283[2]
  i2282.enabled = !!i2283[3]
  i2282.isTrigger = !!i2283[4]
  request.r(i2283[5], i2283[6], 0, i2282, 'material')
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.tagId = i2285[1]
  i2284.enabled = !!i2285[2]
  i2284.isStatic = !!i2285[3]
  i2284.layer = i2285[4]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2287 = data
  i2286.center = new pc.Vec3( i2287[0], i2287[1], i2287[2] )
  i2286.radius = i2287[3]
  i2286.height = i2287[4]
  i2286.direction = i2287[5]
  i2286.enabled = !!i2287[6]
  i2286.isTrigger = !!i2287[7]
  request.r(i2287[8], i2287[9], 0, i2286, 'material')
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2289 = data
  i2288.center = new pc.Vec3( i2289[0], i2289[1], i2289[2] )
  i2288.size = new pc.Vec3( i2289[3], i2289[4], i2289[5] )
  i2288.enabled = !!i2289[6]
  i2288.isTrigger = !!i2289[7]
  request.r(i2289[8], i2289[9], 0, i2288, 'material')
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2291 = data
  i2290.center = new pc.Vec3( i2291[0], i2291[1], i2291[2] )
  i2290.radius = i2291[3]
  i2290.enabled = !!i2291[4]
  i2290.isTrigger = !!i2291[5]
  request.r(i2291[6], i2291[7], 0, i2290, 'material')
  return i2290
}

Deserializers["SolidBox"] = function (request, data, root) {
  var i2292 = root || request.c( 'SolidBox' )
  var i2293 = data
  i2292.liftOntoTop = i2293[0]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.halfPrecision = !!i2295[1]
  i2294.useSimplification = !!i2295[2]
  i2294.useUInt32IndexFormat = !!i2295[3]
  i2294.vertexCount = i2295[4]
  i2294.aabb = i2295[5]
  var i2297 = i2295[6]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( !!i2297[i + 0] );
  }
  i2294.streams = i2296
  i2294.vertices = i2295[7]
  var i2299 = i2295[8]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2299[i + 0]) );
  }
  i2294.subMeshes = i2298
  var i2301 = i2295[9]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 16) {
    i2300.push( new pc.Mat4().setData(i2301[i + 0], i2301[i + 1], i2301[i + 2], i2301[i + 3],  i2301[i + 4], i2301[i + 5], i2301[i + 6], i2301[i + 7],  i2301[i + 8], i2301[i + 9], i2301[i + 10], i2301[i + 11],  i2301[i + 12], i2301[i + 13], i2301[i + 14], i2301[i + 15]) );
  }
  i2294.bindposes = i2300
  var i2303 = i2295[10]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2303[i + 0]) );
  }
  i2294.blendShapes = i2302
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2309 = data
  i2308.triangles = i2309[0]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2315 = data
  i2314.name = i2315[0]
  var i2317 = i2315[1]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2317[i + 0]) );
  }
  i2314.frames = i2316
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2318 = root || new pc.UnityMaterial()
  var i2319 = data
  i2318.name = i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'shader')
  i2318.renderQueue = i2319[3]
  i2318.enableInstancing = !!i2319[4]
  var i2321 = i2319[5]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2321[i + 0]) );
  }
  i2318.floatParameters = i2320
  var i2323 = i2319[6]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2323[i + 0]) );
  }
  i2318.colorParameters = i2322
  var i2325 = i2319[7]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2325[i + 0]) );
  }
  i2318.vectorParameters = i2324
  var i2327 = i2319[8]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2327[i + 0]) );
  }
  i2318.textureParameters = i2326
  var i2329 = i2319[9]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2329[i + 0]) );
  }
  i2318.materialFlags = i2328
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.value = i2333[1]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.value = new pc.Color(i2337[1], i2337[2], i2337[3], i2337[4])
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.value = new pc.Vec4( i2341[1], i2341[2], i2341[3], i2341[4] )
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2345 = data
  i2344.name = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'value')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.enabled = !!i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.width = i2351[1]
  i2350.height = i2351[2]
  i2350.mipmapCount = i2351[3]
  i2350.anisoLevel = i2351[4]
  i2350.filterMode = i2351[5]
  i2350.hdr = !!i2351[6]
  i2350.format = i2351[7]
  i2350.wrapMode = i2351[8]
  i2350.alphaIsTransparency = !!i2351[9]
  i2350.alphaSource = i2351[10]
  i2350.graphicsFormat = i2351[11]
  i2350.sRGBTexture = !!i2351[12]
  i2350.desiredColorSpace = i2351[13]
  i2350.wrapU = i2351[14]
  i2350.wrapV = i2351[15]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2353 = data
  i2352.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2353[0], i2352.main)
  i2352.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2353[1], i2352.colorBySpeed)
  i2352.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2353[2], i2352.colorOverLifetime)
  i2352.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2353[3], i2352.emission)
  i2352.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2353[4], i2352.rotationBySpeed)
  i2352.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2353[5], i2352.rotationOverLifetime)
  i2352.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2353[6], i2352.shape)
  i2352.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2353[7], i2352.sizeBySpeed)
  i2352.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2353[8], i2352.sizeOverLifetime)
  i2352.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2353[9], i2352.textureSheetAnimation)
  i2352.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2353[10], i2352.velocityOverLifetime)
  i2352.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2353[11], i2352.noise)
  i2352.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2353[12], i2352.inheritVelocity)
  i2352.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2353[13], i2352.forceOverLifetime)
  i2352.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2353[14], i2352.limitVelocityOverLifetime)
  i2352.useAutoRandomSeed = !!i2353[15]
  i2352.randomSeed = i2353[16]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2354 = root || new pc.ParticleSystemMain()
  var i2355 = data
  i2354.duration = i2355[0]
  i2354.loop = !!i2355[1]
  i2354.prewarm = !!i2355[2]
  i2354.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[3], i2354.startDelay)
  i2354.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[4], i2354.startLifetime)
  i2354.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[5], i2354.startSpeed)
  i2354.startSize3D = !!i2355[6]
  i2354.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[7], i2354.startSizeX)
  i2354.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[8], i2354.startSizeY)
  i2354.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[9], i2354.startSizeZ)
  i2354.startRotation3D = !!i2355[10]
  i2354.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[11], i2354.startRotationX)
  i2354.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[12], i2354.startRotationY)
  i2354.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[13], i2354.startRotationZ)
  i2354.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2355[14], i2354.startColor)
  i2354.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[15], i2354.gravityModifier)
  i2354.simulationSpace = i2355[16]
  request.r(i2355[17], i2355[18], 0, i2354, 'customSimulationSpace')
  i2354.simulationSpeed = i2355[19]
  i2354.useUnscaledTime = !!i2355[20]
  i2354.scalingMode = i2355[21]
  i2354.playOnAwake = !!i2355[22]
  i2354.maxParticles = i2355[23]
  i2354.emitterVelocityMode = i2355[24]
  i2354.stopAction = i2355[25]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2356 = root || new pc.MinMaxCurve()
  var i2357 = data
  i2356.mode = i2357[0]
  i2356.curveMin = new pc.AnimationCurve( { keys_flow: i2357[1] } )
  i2356.curveMax = new pc.AnimationCurve( { keys_flow: i2357[2] } )
  i2356.curveMultiplier = i2357[3]
  i2356.constantMin = i2357[4]
  i2356.constantMax = i2357[5]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2358 = root || new pc.MinMaxGradient()
  var i2359 = data
  i2358.mode = i2359[0]
  i2358.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2359[1], i2358.gradientMin)
  i2358.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2359[2], i2358.gradientMax)
  i2358.colorMin = new pc.Color(i2359[3], i2359[4], i2359[5], i2359[6])
  i2358.colorMax = new pc.Color(i2359[7], i2359[8], i2359[9], i2359[10])
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2361 = data
  i2360.mode = i2361[0]
  var i2363 = i2361[1]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2363[i + 0]) );
  }
  i2360.colorKeys = i2362
  var i2365 = i2361[2]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2365[i + 0]) );
  }
  i2360.alphaKeys = i2364
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2366 = root || new pc.ParticleSystemColorBySpeed()
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2367[1], i2366.color)
  i2366.range = new pc.Vec2( i2367[2], i2367[3] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2371 = data
  i2370.color = new pc.Color(i2371[0], i2371[1], i2371[2], i2371[3])
  i2370.time = i2371[4]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2375 = data
  i2374.alpha = i2375[0]
  i2374.time = i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2376 = root || new pc.ParticleSystemColorOverLifetime()
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2377[1], i2376.color)
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemEmitter()
  var i2379 = data
  i2378.enabled = !!i2379[0]
  i2378.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[1], i2378.rateOverTime)
  i2378.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[2], i2378.rateOverDistance)
  var i2381 = i2379[3]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2381[i + 0]) );
  }
  i2378.bursts = i2380
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemBurst()
  var i2385 = data
  i2384.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[0], i2384.count)
  i2384.cycleCount = i2385[1]
  i2384.minCount = i2385[2]
  i2384.maxCount = i2385[3]
  i2384.repeatInterval = i2385[4]
  i2384.time = i2385[5]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemRotationBySpeed()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[1], i2386.x)
  i2386.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[2], i2386.y)
  i2386.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[3], i2386.z)
  i2386.separateAxes = !!i2387[4]
  i2386.range = new pc.Vec2( i2387[5], i2387[6] )
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2389 = data
  i2388.enabled = !!i2389[0]
  i2388.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[1], i2388.x)
  i2388.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[2], i2388.y)
  i2388.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[3], i2388.z)
  i2388.separateAxes = !!i2389[4]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemShape()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.shapeType = i2391[1]
  i2390.randomDirectionAmount = i2391[2]
  i2390.sphericalDirectionAmount = i2391[3]
  i2390.randomPositionAmount = i2391[4]
  i2390.alignToDirection = !!i2391[5]
  i2390.radius = i2391[6]
  i2390.radiusMode = i2391[7]
  i2390.radiusSpread = i2391[8]
  i2390.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[9], i2390.radiusSpeed)
  i2390.radiusThickness = i2391[10]
  i2390.angle = i2391[11]
  i2390.length = i2391[12]
  i2390.boxThickness = new pc.Vec3( i2391[13], i2391[14], i2391[15] )
  i2390.meshShapeType = i2391[16]
  request.r(i2391[17], i2391[18], 0, i2390, 'mesh')
  request.r(i2391[19], i2391[20], 0, i2390, 'meshRenderer')
  request.r(i2391[21], i2391[22], 0, i2390, 'skinnedMeshRenderer')
  i2390.useMeshMaterialIndex = !!i2391[23]
  i2390.meshMaterialIndex = i2391[24]
  i2390.useMeshColors = !!i2391[25]
  i2390.normalOffset = i2391[26]
  i2390.arc = i2391[27]
  i2390.arcMode = i2391[28]
  i2390.arcSpread = i2391[29]
  i2390.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[30], i2390.arcSpeed)
  i2390.donutRadius = i2391[31]
  i2390.position = new pc.Vec3( i2391[32], i2391[33], i2391[34] )
  i2390.rotation = new pc.Vec3( i2391[35], i2391[36], i2391[37] )
  i2390.scale = new pc.Vec3( i2391[38], i2391[39], i2391[40] )
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemSizeBySpeed()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[1], i2392.x)
  i2392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.y)
  i2392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[3], i2392.z)
  i2392.separateAxes = !!i2393[4]
  i2392.range = new pc.Vec2( i2393[5], i2393[6] )
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.x)
  i2394.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.y)
  i2394.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.z)
  i2394.separateAxes = !!i2395[4]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.mode = i2397[1]
  i2396.animation = i2397[2]
  i2396.numTilesX = i2397[3]
  i2396.numTilesY = i2397[4]
  i2396.useRandomRow = !!i2397[5]
  i2396.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[6], i2396.frameOverTime)
  i2396.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[7], i2396.startFrame)
  i2396.cycleCount = i2397[8]
  i2396.rowIndex = i2397[9]
  i2396.flipU = i2397[10]
  i2396.flipV = i2397[11]
  i2396.spriteCount = i2397[12]
  var i2399 = i2397[13]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2396.sprites = i2398
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[4], i2402.radial)
  i2402.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[5], i2402.speedModifier)
  i2402.space = i2403[6]
  i2402.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[7], i2402.orbitalX)
  i2402.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[8], i2402.orbitalY)
  i2402.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[9], i2402.orbitalZ)
  i2402.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[10], i2402.orbitalOffsetX)
  i2402.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[11], i2402.orbitalOffsetY)
  i2402.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[12], i2402.orbitalOffsetZ)
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemNoise()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.separateAxes = !!i2405[1]
  i2404.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[2], i2404.strengthX)
  i2404.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[3], i2404.strengthY)
  i2404.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[4], i2404.strengthZ)
  i2404.frequency = i2405[5]
  i2404.damping = !!i2405[6]
  i2404.octaveCount = i2405[7]
  i2404.octaveMultiplier = i2405[8]
  i2404.octaveScale = i2405[9]
  i2404.quality = i2405[10]
  i2404.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[11], i2404.scrollSpeed)
  i2404.scrollSpeedMultiplier = i2405[12]
  i2404.remapEnabled = !!i2405[13]
  i2404.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[14], i2404.remapX)
  i2404.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[15], i2404.remapY)
  i2404.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[16], i2404.remapZ)
  i2404.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[17], i2404.positionAmount)
  i2404.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[18], i2404.rotationAmount)
  i2404.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[19], i2404.sizeAmount)
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemInheritVelocity()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.mode = i2407[1]
  i2406.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[2], i2406.curve)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemForceOverLifetime()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[1], i2408.x)
  i2408.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.y)
  i2408.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.z)
  i2408.space = i2409[4]
  i2408.randomized = !!i2409[5]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[1], i2410.limit)
  i2410.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.limitX)
  i2410.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[3], i2410.limitY)
  i2410.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[4], i2410.limitZ)
  i2410.dampen = i2411[5]
  i2410.separateAxes = !!i2411[6]
  i2410.space = i2411[7]
  i2410.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[8], i2410.drag)
  i2410.multiplyDragByParticleSize = !!i2411[9]
  i2410.multiplyDragByParticleVelocity = !!i2411[10]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'mesh')
  i2412.meshCount = i2413[2]
  i2412.activeVertexStreamsCount = i2413[3]
  i2412.alignment = i2413[4]
  i2412.renderMode = i2413[5]
  i2412.sortMode = i2413[6]
  i2412.lengthScale = i2413[7]
  i2412.velocityScale = i2413[8]
  i2412.cameraVelocityScale = i2413[9]
  i2412.normalDirection = i2413[10]
  i2412.sortingFudge = i2413[11]
  i2412.minParticleSize = i2413[12]
  i2412.maxParticleSize = i2413[13]
  i2412.pivot = new pc.Vec3( i2413[14], i2413[15], i2413[16] )
  request.r(i2413[17], i2413[18], 0, i2412, 'trailMaterial')
  i2412.applyActiveColorSpace = !!i2413[19]
  i2412.enabled = !!i2413[20]
  request.r(i2413[21], i2413[22], 0, i2412, 'sharedMaterial')
  var i2415 = i2413[23]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2412.sharedMaterials = i2414
  i2412.receiveShadows = !!i2413[24]
  i2412.shadowCastingMode = i2413[25]
  i2412.sortingLayerID = i2413[26]
  i2412.sortingOrder = i2413[27]
  i2412.lightmapIndex = i2413[28]
  i2412.lightmapSceneIndex = i2413[29]
  i2412.lightmapScaleOffset = new pc.Vec4( i2413[30], i2413[31], i2413[32], i2413[33] )
  i2412.lightProbeUsage = i2413[34]
  i2412.reflectionProbeUsage = i2413[35]
  return i2412
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i2416 = root || request.c( 'FindMonsterManager' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'database')
  var i2419 = i2417[2]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 1, i2418, '')
  }
  i2416.listRespawn = i2418
  request.r(i2417[3], i2417[4], 0, i2416, 'playerTransform')
  request.r(i2417[5], i2417[6], 0, i2416, 'targetTutorial')
  request.r(i2417[7], i2417[8], 0, i2416, 'arrowTut')
  i2416.guideToNext = !!i2417[9]
  var i2421 = i2417[10]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 1, i2420, '')
  }
  i2416.monsters = i2420
  i2416.playerTouchSize = new pc.Vec3( i2417[11], i2417[12], i2417[13] )
  request.r(i2417[14], i2417[15], 0, i2416, 'hiddenMonsterPanel')
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2427 = data
  i2426.textureMode = i2427[0]
  i2426.alignment = i2427[1]
  i2426.widthCurve = new pc.AnimationCurve( { keys_flow: i2427[2] } )
  i2426.colorGradient = i2427[3] ? new pc.ColorGradient(i2427[3][0], i2427[3][1], i2427[3][2]) : null
  var i2429 = i2427[4]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 3) {
    i2428.push( new pc.Vec3( i2429[i + 0], i2429[i + 1], i2429[i + 2] ) );
  }
  i2426.positions = i2428
  i2426.positionCount = i2427[5]
  i2426.widthMultiplier = i2427[6]
  i2426.startWidth = i2427[7]
  i2426.endWidth = i2427[8]
  i2426.numCornerVertices = i2427[9]
  i2426.numCapVertices = i2427[10]
  i2426.useWorldSpace = !!i2427[11]
  i2426.loop = !!i2427[12]
  i2426.startColor = new pc.Color(i2427[13], i2427[14], i2427[15], i2427[16])
  i2426.endColor = new pc.Color(i2427[17], i2427[18], i2427[19], i2427[20])
  i2426.generateLightingData = !!i2427[21]
  i2426.enabled = !!i2427[22]
  request.r(i2427[23], i2427[24], 0, i2426, 'sharedMaterial')
  var i2431 = i2427[25]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 2, i2430, '')
  }
  i2426.sharedMaterials = i2430
  i2426.receiveShadows = !!i2427[26]
  i2426.shadowCastingMode = i2427[27]
  i2426.sortingLayerID = i2427[28]
  i2426.sortingOrder = i2427[29]
  i2426.lightmapIndex = i2427[30]
  i2426.lightmapSceneIndex = i2427[31]
  i2426.lightmapScaleOffset = new pc.Vec4( i2427[32], i2427[33], i2427[34], i2427[35] )
  i2426.lightProbeUsage = i2427[36]
  i2426.reflectionProbeUsage = i2427[37]
  return i2426
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i2434 = root || request.c( 'TurtorialArrow' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'lineRenderer')
  i2434.offset = new pc.Vec3( i2435[2], i2435[3], i2435[4] )
  i2434.planetSegments = i2435[5]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'animatorController')
  request.r(i2437[2], i2437[3], 0, i2436, 'avatar')
  i2436.updateMode = i2437[4]
  i2436.hasTransformHierarchy = !!i2437[5]
  i2436.applyRootMotion = !!i2437[6]
  var i2439 = i2437[7]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2436.humanBones = i2438
  i2436.enabled = !!i2437[8]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'clip')
  request.r(i2443[2], i2443[3], 0, i2442, 'outputAudioMixerGroup')
  i2442.playOnAwake = !!i2443[4]
  i2442.loop = !!i2443[5]
  i2442.time = i2443[6]
  i2442.volume = i2443[7]
  i2442.pitch = i2443[8]
  i2442.enabled = !!i2443[9]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2445 = data
  i2444.pivot = new pc.Vec2( i2445[0], i2445[1] )
  i2444.anchorMin = new pc.Vec2( i2445[2], i2445[3] )
  i2444.anchorMax = new pc.Vec2( i2445[4], i2445[5] )
  i2444.sizeDelta = new pc.Vec2( i2445[6], i2445[7] )
  i2444.anchoredPosition3D = new pc.Vec3( i2445[8], i2445[9], i2445[10] )
  i2444.rotation = new pc.Quat(i2445[11], i2445[12], i2445[13], i2445[14])
  i2444.scale = new pc.Vec3( i2445[15], i2445[16], i2445[17] )
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2447 = data
  i2446.planeDistance = i2447[0]
  i2446.referencePixelsPerUnit = i2447[1]
  i2446.isFallbackOverlay = !!i2447[2]
  i2446.renderMode = i2447[3]
  i2446.renderOrder = i2447[4]
  i2446.sortingLayerName = i2447[5]
  i2446.sortingOrder = i2447[6]
  i2446.scaleFactor = i2447[7]
  request.r(i2447[8], i2447[9], 0, i2446, 'worldCamera')
  i2446.overrideSorting = !!i2447[10]
  i2446.pixelPerfect = !!i2447[11]
  i2446.targetDisplay = i2447[12]
  i2446.overridePixelPerfect = !!i2447[13]
  i2446.enabled = !!i2447[14]
  return i2446
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2449 = data
  i2448.m_UiScaleMode = i2449[0]
  i2448.m_ReferencePixelsPerUnit = i2449[1]
  i2448.m_ScaleFactor = i2449[2]
  i2448.m_ReferenceResolution = new pc.Vec2( i2449[3], i2449[4] )
  i2448.m_ScreenMatchMode = i2449[5]
  i2448.m_MatchWidthOrHeight = i2449[6]
  i2448.m_PhysicalUnit = i2449[7]
  i2448.m_FallbackScreenDPI = i2449[8]
  i2448.m_DefaultSpriteDPI = i2449[9]
  i2448.m_DynamicPixelsPerUnit = i2449[10]
  i2448.m_PresetInfoIsWorld = !!i2449[11]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2451 = data
  i2450.m_Alpha = i2451[0]
  i2450.m_Interactable = !!i2451[1]
  i2450.m_BlocksRaycasts = !!i2451[2]
  i2450.m_IgnoreParentGroups = !!i2451[3]
  i2450.enabled = !!i2451[4]
  return i2450
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2453 = data
  i2452.m_IgnoreReversedGraphics = !!i2453[0]
  i2452.m_BlockingObjects = i2453[1]
  i2452.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2453[2] )
  return i2452
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i2454 = root || request.c( 'HiddenMonsterPanel' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'icon')
  request.r(i2455[2], i2455[3], 0, i2454, 'nameText')
  request.r(i2455[4], i2455[5], 0, i2454, 'rarityText')
  request.r(i2455[6], i2455[7], 0, i2454, 'card')
  i2454.openSound = request.d('FMAudio', i2455[8], i2454.openSound)
  i2454.autoHide = i2455[9]
  request.r(i2455[10], i2455[11], 0, i2454, 'tutorFinger')
  request.r(i2455[12], i2455[13], 0, i2454, 'popRoot')
  i2454.popDuration = i2455[14]
  return i2454
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i2456 = root || request.c( 'FMAudio' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'clip')
  i2456.channel = i2457[2]
  i2456.volume = i2457[3]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2459 = data
  i2458.cullTransparentMesh = !!i2459[0]
  return i2458
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.UI.Image' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'm_Sprite')
  i2460.m_Type = i2461[2]
  i2460.m_PreserveAspect = !!i2461[3]
  i2460.m_FillCenter = !!i2461[4]
  i2460.m_FillMethod = i2461[5]
  i2460.m_FillAmount = i2461[6]
  i2460.m_FillClockwise = !!i2461[7]
  i2460.m_FillOrigin = i2461[8]
  i2460.m_UseSpriteMesh = !!i2461[9]
  i2460.m_PixelsPerUnitMultiplier = i2461[10]
  request.r(i2461[11], i2461[12], 0, i2460, 'm_Material')
  i2460.m_Maskable = !!i2461[13]
  i2460.m_Color = new pc.Color(i2461[14], i2461[15], i2461[16], i2461[17])
  i2460.m_RaycastTarget = !!i2461[18]
  i2460.m_RaycastPadding = new pc.Vec4( i2461[19], i2461[20], i2461[21], i2461[22] )
  return i2460
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2463 = data
  i2462.m_hasFontAssetChanged = !!i2463[0]
  request.r(i2463[1], i2463[2], 0, i2462, 'm_baseMaterial')
  i2462.m_maskOffset = new pc.Vec4( i2463[3], i2463[4], i2463[5], i2463[6] )
  i2462.m_text = i2463[7]
  i2462.m_isRightToLeft = !!i2463[8]
  request.r(i2463[9], i2463[10], 0, i2462, 'm_fontAsset')
  request.r(i2463[11], i2463[12], 0, i2462, 'm_sharedMaterial')
  var i2465 = i2463[13]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 2, i2464, '')
  }
  i2462.m_fontSharedMaterials = i2464
  request.r(i2463[14], i2463[15], 0, i2462, 'm_fontMaterial')
  var i2467 = i2463[16]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 2, i2466, '')
  }
  i2462.m_fontMaterials = i2466
  i2462.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2463[17], i2463[18], i2463[19], i2463[20])
  i2462.m_fontColor = new pc.Color(i2463[21], i2463[22], i2463[23], i2463[24])
  i2462.m_enableVertexGradient = !!i2463[25]
  i2462.m_colorMode = i2463[26]
  i2462.m_fontColorGradient = request.d('TMPro.VertexGradient', i2463[27], i2462.m_fontColorGradient)
  request.r(i2463[28], i2463[29], 0, i2462, 'm_fontColorGradientPreset')
  request.r(i2463[30], i2463[31], 0, i2462, 'm_spriteAsset')
  i2462.m_tintAllSprites = !!i2463[32]
  request.r(i2463[33], i2463[34], 0, i2462, 'm_StyleSheet')
  i2462.m_TextStyleHashCode = i2463[35]
  i2462.m_overrideHtmlColors = !!i2463[36]
  i2462.m_faceColor = UnityEngine.Color32.ConstructColor(i2463[37], i2463[38], i2463[39], i2463[40])
  i2462.m_fontSize = i2463[41]
  i2462.m_fontSizeBase = i2463[42]
  i2462.m_fontWeight = i2463[43]
  i2462.m_enableAutoSizing = !!i2463[44]
  i2462.m_fontSizeMin = i2463[45]
  i2462.m_fontSizeMax = i2463[46]
  i2462.m_fontStyle = i2463[47]
  i2462.m_HorizontalAlignment = i2463[48]
  i2462.m_VerticalAlignment = i2463[49]
  i2462.m_textAlignment = i2463[50]
  i2462.m_characterSpacing = i2463[51]
  i2462.m_characterHorizontalScale = i2463[52]
  i2462.m_wordSpacing = i2463[53]
  i2462.m_lineSpacing = i2463[54]
  i2462.m_lineSpacingMax = i2463[55]
  i2462.m_paragraphSpacing = i2463[56]
  i2462.m_charWidthMaxAdj = i2463[57]
  i2462.m_TextWrappingMode = i2463[58]
  i2462.m_wordWrappingRatios = i2463[59]
  i2462.m_overflowMode = i2463[60]
  request.r(i2463[61], i2463[62], 0, i2462, 'm_linkedTextComponent')
  request.r(i2463[63], i2463[64], 0, i2462, 'parentLinkedComponent')
  i2462.m_enableKerning = !!i2463[65]
  var i2469 = i2463[66]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.add(i2469[i + 0]);
  }
  i2462.m_ActiveFontFeatures = i2468
  i2462.m_enableExtraPadding = !!i2463[67]
  i2462.checkPaddingRequired = !!i2463[68]
  i2462.m_isRichText = !!i2463[69]
  i2462.m_parseCtrlCharacters = !!i2463[70]
  i2462.m_isOrthographic = !!i2463[71]
  i2462.m_isCullingEnabled = !!i2463[72]
  i2462.m_horizontalMapping = i2463[73]
  i2462.m_verticalMapping = i2463[74]
  i2462.m_uvLineOffset = i2463[75]
  i2462.m_geometrySortingOrder = i2463[76]
  i2462.m_IsTextObjectScaleStatic = !!i2463[77]
  i2462.m_VertexBufferAutoSizeReduction = !!i2463[78]
  i2462.m_useMaxVisibleDescender = !!i2463[79]
  i2462.m_pageToDisplay = i2463[80]
  i2462.m_margin = new pc.Vec4( i2463[81], i2463[82], i2463[83], i2463[84] )
  i2462.m_isUsingLegacyAnimationComponent = !!i2463[85]
  i2462.m_isVolumetricText = !!i2463[86]
  request.r(i2463[87], i2463[88], 0, i2462, 'm_Material')
  i2462.m_EmojiFallbackSupport = !!i2463[89]
  i2462.m_Maskable = !!i2463[90]
  i2462.m_Color = new pc.Color(i2463[91], i2463[92], i2463[93], i2463[94])
  i2462.m_RaycastTarget = !!i2463[95]
  i2462.m_RaycastPadding = new pc.Vec4( i2463[96], i2463[97], i2463[98], i2463[99] )
  return i2462
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2470 = root || request.c( 'TMPro.VertexGradient' )
  var i2471 = data
  i2470.topLeft = new pc.Color(i2471[0], i2471[1], i2471[2], i2471[3])
  i2470.topRight = new pc.Color(i2471[4], i2471[5], i2471[6], i2471[7])
  i2470.bottomLeft = new pc.Color(i2471[8], i2471[9], i2471[10], i2471[11])
  i2470.bottomRight = new pc.Color(i2471[12], i2471[13], i2471[14], i2471[15])
  return i2470
}

Deserializers["UIRays"] = function (request, data, root) {
  var i2474 = root || request.c( 'UIRays' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 2, i2476, '')
  }
  i2474.rays = i2476
  i2474.lifetime = i2475[1]
  i2474.rate = i2475[2]
  i2474.startScale = i2475[3]
  i2474.maxAlpha = i2475[4]
  return i2474
}

Deserializers["GameButton"] = function (request, data, root) {
  var i2480 = root || request.c( 'GameButton' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'background')
  request.r(i2481[2], i2481[3], 0, i2480, 'icon')
  request.r(i2481[4], i2481[5], 0, i2480, 'title')
  i2480.scale = new pc.Vec3( i2481[6], i2481[7], i2481[8] )
  i2480.pressAudio = request.d('FMAudio', i2481[9], i2480.pressAudio)
  i2480.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2481[10], i2480.m_OnClick)
  i2480.m_Navigation = request.d('UnityEngine.UI.Navigation', i2481[11], i2480.m_Navigation)
  i2480.m_Transition = i2481[12]
  i2480.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2481[13], i2480.m_Colors)
  i2480.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2481[14], i2480.m_SpriteState)
  i2480.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2481[15], i2480.m_AnimationTriggers)
  i2480.m_Interactable = !!i2481[16]
  request.r(i2481[17], i2481[18], 0, i2480, 'm_TargetGraphic')
  return i2480
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2483 = data
  i2482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2483[0], i2482.m_PersistentCalls)
  return i2482
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2485 = data
  var i2487 = i2485[0]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.add(request.d('UnityEngine.Events.PersistentCall', i2487[i + 0]));
  }
  i2484.m_Calls = i2486
  return i2484
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'm_Target')
  i2490.m_TargetAssemblyTypeName = i2491[2]
  i2490.m_MethodName = i2491[3]
  i2490.m_Mode = i2491[4]
  i2490.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2491[5], i2490.m_Arguments)
  i2490.m_CallState = i2491[6]
  return i2490
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'm_ObjectArgument')
  i2492.m_ObjectArgumentAssemblyTypeName = i2493[2]
  i2492.m_IntArgument = i2493[3]
  i2492.m_FloatArgument = i2493[4]
  i2492.m_StringArgument = i2493[5]
  i2492.m_BoolArgument = !!i2493[6]
  return i2492
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2495 = data
  i2494.m_Mode = i2495[0]
  i2494.m_WrapAround = !!i2495[1]
  request.r(i2495[2], i2495[3], 0, i2494, 'm_SelectOnUp')
  request.r(i2495[4], i2495[5], 0, i2494, 'm_SelectOnDown')
  request.r(i2495[6], i2495[7], 0, i2494, 'm_SelectOnLeft')
  request.r(i2495[8], i2495[9], 0, i2494, 'm_SelectOnRight')
  return i2494
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2497 = data
  i2496.m_NormalColor = new pc.Color(i2497[0], i2497[1], i2497[2], i2497[3])
  i2496.m_HighlightedColor = new pc.Color(i2497[4], i2497[5], i2497[6], i2497[7])
  i2496.m_PressedColor = new pc.Color(i2497[8], i2497[9], i2497[10], i2497[11])
  i2496.m_SelectedColor = new pc.Color(i2497[12], i2497[13], i2497[14], i2497[15])
  i2496.m_DisabledColor = new pc.Color(i2497[16], i2497[17], i2497[18], i2497[19])
  i2496.m_ColorMultiplier = i2497[20]
  i2496.m_FadeDuration = i2497[21]
  return i2496
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'm_HighlightedSprite')
  request.r(i2499[2], i2499[3], 0, i2498, 'm_PressedSprite')
  request.r(i2499[4], i2499[5], 0, i2498, 'm_SelectedSprite')
  request.r(i2499[6], i2499[7], 0, i2498, 'm_DisabledSprite')
  return i2498
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2501 = data
  i2500.m_NormalTrigger = i2501[0]
  i2500.m_HighlightedTrigger = i2501[1]
  i2500.m_PressedTrigger = i2501[2]
  i2500.m_SelectedTrigger = i2501[3]
  i2500.m_DisabledTrigger = i2501[4]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.atlasId = i2503[1]
  i2502.mipmapCount = i2503[2]
  i2502.hdr = !!i2503[3]
  i2502.size = i2503[4]
  i2502.anisoLevel = i2503[5]
  i2502.filterMode = i2503[6]
  var i2505 = i2503[7]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 4) {
    i2504.push( UnityEngine.Rect.MinMaxRect(i2505[i + 0], i2505[i + 1], i2505[i + 2], i2505[i + 3]) );
  }
  i2502.rects = i2504
  i2502.wrapU = i2503[8]
  i2502.wrapV = i2503[9]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.index = i2509[1]
  i2508.startup = !!i2509[2]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2511 = data
  i2510.type = i2511[0]
  i2510.color = new pc.Color(i2511[1], i2511[2], i2511[3], i2511[4])
  i2510.cullingMask = i2511[5]
  i2510.intensity = i2511[6]
  i2510.range = i2511[7]
  i2510.spotAngle = i2511[8]
  i2510.shadows = i2511[9]
  i2510.shadowNormalBias = i2511[10]
  i2510.shadowBias = i2511[11]
  i2510.shadowStrength = i2511[12]
  i2510.shadowResolution = i2511[13]
  i2510.lightmapBakeType = i2511[14]
  i2510.renderMode = i2511[15]
  request.r(i2511[16], i2511[17], 0, i2510, 'cookie')
  i2510.cookieSize = i2511[18]
  i2510.shadowNearPlane = i2511[19]
  i2510.occlusionMaskChannel = i2511[20]
  i2510.isBaked = !!i2511[21]
  i2510.mixedLightingMode = i2511[22]
  i2510.enabled = !!i2511[23]
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

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i2514 = root || request.c( 'ScreenDeltaInputSystem' )
  var i2515 = data
  return i2514
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i2516 = root || request.c( 'MonsterProgressBar' )
  var i2517 = data
  i2516.countSceneMonsters = !!i2517[0]
  i2516.startFound = i2517[1]
  i2516.total = i2517[2]
  request.r(i2517[3], i2517[4], 0, i2516, 'fill')
  request.r(i2517[5], i2517[6], 0, i2516, 'countText')
  request.r(i2517[7], i2517[8], 0, i2516, 'icon')
  i2516.fillSpeed = i2517[9]
  return i2516
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i2518 = root || request.c( 'StoryTextView' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'label')
  i2518.popDuration = i2519[2]
  i2518.pulseAmount = i2519[3]
  i2518.pulseSpeed = i2519[4]
  i2518.fadeDuration = i2519[5]
  return i2518
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.UI.Button' )
  var i2521 = data
  i2520.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2521[0], i2520.m_OnClick)
  i2520.m_Navigation = request.d('UnityEngine.UI.Navigation', i2521[1], i2520.m_Navigation)
  i2520.m_Transition = i2521[2]
  i2520.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2521[3], i2520.m_Colors)
  i2520.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2521[4], i2520.m_SpriteState)
  i2520.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2521[5], i2520.m_AnimationTriggers)
  i2520.m_Interactable = !!i2521[6]
  request.r(i2521[7], i2521[8], 0, i2520, 'm_TargetGraphic')
  return i2520
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2522 = root || request.c( 'JumpButton' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'character')
  return i2522
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i2524 = root || request.c( 'PlayableJoystick' )
  var i2525 = data
  i2524.handleRange = i2525[0]
  i2524.deadZone = i2525[1]
  i2524.floating = !!i2525[2]
  request.r(i2525[3], i2525[4], 0, i2524, 'background')
  request.r(i2525[5], i2525[6], 0, i2524, 'knob')
  return i2524
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i2526 = root || request.c( 'FMCharacter' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'planetTransform')
  request.r(i2527[2], i2527[3], 0, i2526, 'animator')
  request.r(i2527[4], i2527[5], 0, i2526, 'joystick')
  i2526._rotationRate = i2527[6]
  i2526._maxWalkSpeed = i2527[7]
  i2526._maxAcceleration = i2527[8]
  i2526._brakingDecelerationWalking = i2527[9]
  i2526._airControl = i2527[10]
  i2526._jumpImpulse = i2527[11]
  i2526._gravity = new pc.Vec3( i2527[12], i2527[13], i2527[14] )
  i2526._gravityScale = i2527[15]
  request.r(i2527[16], i2527[17], 0, i2526, '_camera')
  i2526.jumpSound = request.d('FMAudio', i2527[18], i2526.jumpSound)
  i2526.stepHeight = i2527[19]
  return i2526
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i2528 = root || request.c( 'FM3rdInput' )
  var i2529 = data
  request.r(i2529[0], i2529[1], 0, i2528, 'followTarget')
  i2528.followDistance = i2529[2]
  i2528.followMinDistance = i2529[3]
  i2528.followMaxDistance = i2529[4]
  i2528.maxPitch = i2529[5]
  i2528.minPitch = i2529[6]
  i2528.invertLook = !!i2529[7]
  i2528.lookSensitivity = new pc.Vec2( i2529[8], i2529[9] )
  request.r(i2529[10], i2529[11], 0, i2528, 'planetTransform')
  i2528.cameraDistance = i2529[12]
  i2528.cameraRadius = i2529[13]
  i2528.cameraReturnSpeed = i2529[14]
  request.r(i2529[15], i2529[16], 0, i2528, 'cam')
  request.r(i2529[17], i2529[18], 0, i2528, 'lookArea')
  i2528.extraRoll = i2529[19]
  i2528.autoReturnDelay = i2529[20]
  i2528.autoReturnSpeed = i2529[21]
  i2528.defaultPitch = i2529[22]
  i2528.enableAutoReturn = !!i2529[23]
  i2528.forwardSpeedMultiplier = i2529[24]
  i2528.backwardSpeedMultiplier = i2529[25]
  return i2528
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i2530 = root || request.c( 'FindMonsterPlayerControl' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'playerSO')
  request.r(i2531[2], i2531[3], 0, i2530, 'playerBase')
  request.r(i2531[4], i2531[5], 0, i2530, 'morphRoot')
  request.r(i2531[6], i2531[7], 0, i2530, 'poopFx')
  request.r(i2531[8], i2531[9], 0, i2530, 'poopRoot')
  request.r(i2531[10], i2531[11], 0, i2530, 'trailSpeed')
  i2530.popSound = request.d('FMAudio', i2531[12], i2530.popSound)
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2533 = data
  i2532.enabled = !!i2533[0]
  i2532.center = new pc.Vec3( i2533[1], i2533[2], i2533[3] )
  i2532.radius = i2533[4]
  i2532.height = i2533[5]
  i2532.minMoveDistance = i2533[6]
  i2532.skinWidth = i2533[7]
  i2532.enableOverlapRecovery = !!i2533[8]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'sharedMesh')
  var i2537 = i2535[2]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2534.bones = i2536
  i2534.updateWhenOffscreen = !!i2535[3]
  i2534.localBounds = i2535[4]
  request.r(i2535[5], i2535[6], 0, i2534, 'rootBone')
  var i2539 = i2535[7]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2539[i + 0]) );
  }
  i2534.blendShapesWeights = i2538
  i2534.enabled = !!i2535[8]
  request.r(i2535[9], i2535[10], 0, i2534, 'sharedMaterial')
  var i2541 = i2535[11]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 2, i2540, '')
  }
  i2534.sharedMaterials = i2540
  i2534.receiveShadows = !!i2535[12]
  i2534.shadowCastingMode = i2535[13]
  i2534.sortingLayerID = i2535[14]
  i2534.sortingOrder = i2535[15]
  i2534.lightmapIndex = i2535[16]
  i2534.lightmapSceneIndex = i2535[17]
  i2534.lightmapScaleOffset = new pc.Vec4( i2535[18], i2535[19], i2535[20], i2535[21] )
  i2534.lightProbeUsage = i2535[22]
  i2534.reflectionProbeUsage = i2535[23]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2545 = data
  i2544.weight = i2545[0]
  return i2544
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i2546 = root || request.c( 'CharacterFootstep' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'ecmCharacter')
  i2546.audioSource = request.d('FMAudio', i2547[2], i2546.audioSource)
  i2546.speed = i2547[3]
  return i2546
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2548 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'm_FirstSelected')
  i2548.m_sendNavigationEvents = !!i2549[2]
  i2548.m_DragThreshold = i2549[3]
  return i2548
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2551 = data
  i2550.m_HorizontalAxis = i2551[0]
  i2550.m_VerticalAxis = i2551[1]
  i2550.m_SubmitButton = i2551[2]
  i2550.m_CancelButton = i2551[3]
  i2550.m_InputActionsPerSecond = i2551[4]
  i2550.m_RepeatDelay = i2551[5]
  i2550.m_ForceModuleActive = !!i2551[6]
  i2550.m_SendPointerHoverToParent = !!i2551[7]
  return i2550
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i2552 = root || request.c( 'PlayableAudio' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'source')
  request.r(i2553[2], i2553[3], 0, i2552, 'buttonClick')
  return i2552
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2554 = root || request.c( 'LunaController' )
  var i2555 = data
  i2554.LimitTimePlay = !!i2555[0]
  i2554.TimePlay = i2555[1]
  i2554.TypeMorph = i2555[2]
  i2554.LimitClick = !!i2555[3]
  i2554.MaxClick = i2555[4]
  request.r(i2555[5], i2555[6], 0, i2554, 'BGM')
  request.r(i2555[7], i2555[8], 0, i2554, 'musicSource')
  i2554.musicVolume = i2555[9]
  var i2557 = i2555[10]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2557.length; i += 2) {
  request.r(i2557[i + 0], i2557[i + 1], 1, i2556, '')
  }
  i2554.CTA = i2556
  request.r(i2555[11], i2555[12], 0, i2554, 'endUI')
  request.r(i2555[13], i2555[14], 0, i2554, 'endCard')
  return i2554
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i2560 = root || request.c( 'ControlsTutorial' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'player')
  request.r(i2561[2], i2561[3], 0, i2560, 'look')
  request.r(i2561[4], i2561[5], 0, i2560, 'hand')
  request.r(i2561[6], i2561[7], 0, i2560, 'text')
  request.r(i2561[8], i2561[9], 0, i2560, 'viewFrom')
  request.r(i2561[10], i2561[11], 0, i2560, 'viewTo')
  request.r(i2561[12], i2561[13], 0, i2560, 'joystickRing')
  request.r(i2561[14], i2561[15], 0, i2560, 'jumpButton')
  i2560.viewText = i2561[16]
  i2560.moveText = i2561[17]
  i2560.jumpText = i2561[18]
  i2560.lookDegrees = i2561[19]
  i2560.moveDistance = i2561[20]
  i2560.jumps = i2561[21]
  i2560.jumpStep = !!i2561[22]
  i2560.startDelay = i2561[23]
  i2560.stepGap = i2561[24]
  i2560.swipeDuration = i2561[25]
  i2560.joystickSwipe = i2561[26]
  return i2560
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i2562 = root || request.c( 'HiddenMonster' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'checkMark')
  request.r(i2563[2], i2563[3], 0, i2562, 'claimFx')
  return i2562
}

Deserializers["Billboard"] = function (request, data, root) {
  var i2564 = root || request.c( 'Billboard' )
  var i2565 = data
  i2564.distanceToBillborad = i2565[0]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2567 = data
  i2566.color = new pc.Color(i2567[0], i2567[1], i2567[2], i2567[3])
  request.r(i2567[4], i2567[5], 0, i2566, 'sprite')
  i2566.flipX = !!i2567[6]
  i2566.flipY = !!i2567[7]
  i2566.drawMode = i2567[8]
  i2566.size = new pc.Vec2( i2567[9], i2567[10] )
  i2566.tileMode = i2567[11]
  i2566.adaptiveModeThreshold = i2567[12]
  i2566.maskInteraction = i2567[13]
  i2566.spriteSortPoint = i2567[14]
  i2566.enabled = !!i2567[15]
  request.r(i2567[16], i2567[17], 0, i2566, 'sharedMaterial')
  var i2569 = i2567[18]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2566.sharedMaterials = i2568
  i2566.receiveShadows = !!i2567[19]
  i2566.shadowCastingMode = i2567[20]
  i2566.sortingLayerID = i2567[21]
  i2566.sortingOrder = i2567[22]
  i2566.lightmapIndex = i2567[23]
  i2566.lightmapSceneIndex = i2567[24]
  i2566.lightmapScaleOffset = new pc.Vec4( i2567[25], i2567[26], i2567[27], i2567[28] )
  i2566.lightProbeUsage = i2567[29]
  i2566.reflectionProbeUsage = i2567[30]
  return i2566
}

Deserializers["MorphUnlockedPanel"] = function (request, data, root) {
  var i2570 = root || request.c( 'MorphUnlockedPanel' )
  var i2571 = data
  var i2573 = i2571[0]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('MorphUnlockedPanel+Card', i2573[i + 0]) );
  }
  i2570.cards = i2572
  request.r(i2571[1], i2571[2], 0, i2570, 'popRoot')
  i2570.popDuration = i2571[3]
  return i2570
}

Deserializers["MorphUnlockedPanel+Card"] = function (request, data, root) {
  var i2576 = root || request.c( 'MorphUnlockedPanel+Card' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'background')
  request.r(i2577[2], i2577[3], 0, i2576, 'icon')
  request.r(i2577[4], i2577[5], 0, i2576, 'nameText')
  request.r(i2577[6], i2577[7], 0, i2576, 'rarityText')
  return i2576
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i2578 = root || request.c( 'MorphHuntStory' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'player')
  request.r(i2579[2], i2579[3], 0, i2578, 'look')
  var i2581 = i2579[4]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 2, i2580, '')
  }
  i2578.morphs = i2580
  var i2583 = i2579[5]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 2, i2582, '')
  }
  i2578.morphOptions = i2582
  request.r(i2579[6], i2579[7], 0, i2578, 'startLookAt')
  i2578.startPitch = i2579[8]
  request.r(i2579[9], i2579[10], 0, i2578, 'hand')
  i2578.handOffset = new pc.Vec3( i2579[11], i2579[12], i2579[13] )
  request.r(i2579[14], i2579[15], 0, i2578, 'guideAnchor')
  request.r(i2579[16], i2579[17], 0, i2578, 'arrowAnchor')
  request.r(i2579[18], i2579[19], 0, i2578, 'guideLabel')
  request.r(i2579[20], i2579[21], 0, i2578, 'storyText')
  request.r(i2579[22], i2579[23], 0, i2578, 'unlockText')
  request.r(i2579[24], i2579[25], 0, i2578, 'shine')
  request.r(i2579[26], i2579[27], 0, i2578, 'finalPanel')
  i2578.introText = i2579[28]
  i2578.almostText = i2579[29]
  i2578.unlockedFormat = i2579[30]
  i2578.oneMoreText = i2579[31]
  i2578.introDelay = i2579[32]
  i2578.handHideDistance = i2579[33]
  i2578.almostDistance = i2579[34]
  i2578.almostHeight = i2579[35]
  i2578.cameraTurnDuration = i2579[36]
  i2578.finalDuration = i2579[37]
  i2578.arrowSwitchBelow = i2579[38]
  return i2578
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i2588 = root || request.c( 'ScaleYoyo' )
  var i2589 = data
  i2588.delay = i2589[0]
  i2588.duration = i2589[1]
  i2588.easeType = i2589[2]
  i2588.loops = i2589[3]
  i2588.loopType = i2589[4]
  i2588.animationType = i2589[5]
  i2588.endValueV3 = new pc.Vec3( i2589[6], i2589[7], i2589[8] )
  i2588.isRelative = !!i2589[9]
  i2588.autoPlay = !!i2589[10]
  return i2588
}

Deserializers["PointerHand"] = function (request, data, root) {
  var i2590 = root || request.c( 'PointerHand' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'pivot')
  request.r(i2591[2], i2591[3], 0, i2590, 'visual')
  request.r(i2591[4], i2591[5], 0, i2590, 'ripple')
  i2590.height = i2591[6]
  i2590.fingerDirection = new pc.Vec2( i2591[7], i2591[8] )
  i2590.cycle = i2591[9]
  i2590.pause = i2591[10]
  i2590.liftDistance = i2591[11]
  i2590.rippleScale = i2591[12]
  i2590.appearDuration = i2591[13]
  i2590.bob = !!i2591[14]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2593 = data
  i2592.ambientIntensity = i2593[0]
  i2592.reflectionIntensity = i2593[1]
  i2592.ambientMode = i2593[2]
  i2592.ambientLight = new pc.Color(i2593[3], i2593[4], i2593[5], i2593[6])
  i2592.ambientSkyColor = new pc.Color(i2593[7], i2593[8], i2593[9], i2593[10])
  i2592.ambientGroundColor = new pc.Color(i2593[11], i2593[12], i2593[13], i2593[14])
  i2592.ambientEquatorColor = new pc.Color(i2593[15], i2593[16], i2593[17], i2593[18])
  i2592.fogColor = new pc.Color(i2593[19], i2593[20], i2593[21], i2593[22])
  i2592.fogEndDistance = i2593[23]
  i2592.fogStartDistance = i2593[24]
  i2592.fogDensity = i2593[25]
  i2592.fog = !!i2593[26]
  request.r(i2593[27], i2593[28], 0, i2592, 'skybox')
  i2592.fogMode = i2593[29]
  var i2595 = i2593[30]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2595[i + 0]) );
  }
  i2592.lightmaps = i2594
  i2592.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2593[31], i2592.lightProbes)
  i2592.lightmapsMode = i2593[32]
  i2592.mixedBakeMode = i2593[33]
  i2592.environmentLightingMode = i2593[34]
  i2592.ambientProbe = new pc.SphericalHarmonicsL2(i2593[35])
  request.r(i2593[36], i2593[37], 0, i2592, 'customReflection')
  request.r(i2593[38], i2593[39], 0, i2592, 'defaultReflection')
  i2592.defaultReflectionMode = i2593[40]
  i2592.defaultReflectionResolution = i2593[41]
  i2592.sunLightObjectId = i2593[42]
  i2592.pixelLightCount = i2593[43]
  i2592.defaultReflectionHDR = !!i2593[44]
  i2592.hasLightDataAsset = !!i2593[45]
  i2592.hasManualGenerate = !!i2593[46]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2599 = data
  request.r(i2599[0], i2599[1], 0, i2598, 'lightmapColor')
  request.r(i2599[2], i2599[3], 0, i2598, 'lightmapDirection')
  request.r(i2599[4], i2599[5], 0, i2598, 'shadowMask')
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2600 = root || new UnityEngine.LightProbes()
  var i2601 = data
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2607 = data
  var i2609 = i2607[0]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2609[i + 0]));
  }
  i2606.ShaderCompilationErrors = i2608
  i2606.name = i2607[1]
  i2606.guid = i2607[2]
  var i2611 = i2607[3]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( i2611[i + 0] );
  }
  i2606.shaderDefinedKeywords = i2610
  var i2613 = i2607[4]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2613[i + 0]) );
  }
  i2606.passes = i2612
  var i2615 = i2607[5]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2615[i + 0]) );
  }
  i2606.usePasses = i2614
  var i2617 = i2607[6]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2617[i + 0]) );
  }
  i2606.defaultParameterValues = i2616
  request.r(i2607[7], i2607[8], 0, i2606, 'unityFallbackShader')
  i2606.readDepth = !!i2607[9]
  i2606.hasDepthOnlyPass = !!i2607[10]
  i2606.isCreatedByShaderGraph = !!i2607[11]
  i2606.disableBatching = !!i2607[12]
  i2606.compiled = !!i2607[13]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2621 = data
  i2620.shaderName = i2621[0]
  i2620.errorMessage = i2621[1]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2626 = root || new pc.UnityShaderPass()
  var i2627 = data
  i2626.id = i2627[0]
  i2626.subShaderIndex = i2627[1]
  i2626.name = i2627[2]
  i2626.passType = i2627[3]
  i2626.grabPassTextureName = i2627[4]
  i2626.usePass = !!i2627[5]
  i2626.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[6], i2626.zTest)
  i2626.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[7], i2626.zWrite)
  i2626.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[8], i2626.culling)
  i2626.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2627[9], i2626.blending)
  i2626.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2627[10], i2626.alphaBlending)
  i2626.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[11], i2626.colorWriteMask)
  i2626.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[12], i2626.offsetUnits)
  i2626.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[13], i2626.offsetFactor)
  i2626.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[14], i2626.stencilRef)
  i2626.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[15], i2626.stencilReadMask)
  i2626.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[16], i2626.stencilWriteMask)
  i2626.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2627[17], i2626.stencilOp)
  i2626.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2627[18], i2626.stencilOpFront)
  i2626.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2627[19], i2626.stencilOpBack)
  var i2629 = i2627[20]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2629[i + 0]) );
  }
  i2626.tags = i2628
  var i2631 = i2627[21]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( i2631[i + 0] );
  }
  i2626.passDefinedKeywords = i2630
  var i2633 = i2627[22]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2633[i + 0]) );
  }
  i2626.passDefinedKeywordGroups = i2632
  var i2635 = i2627[23]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2635[i + 0]) );
  }
  i2626.variants = i2634
  var i2637 = i2627[24]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2637[i + 0]) );
  }
  i2626.excludedVariants = i2636
  i2626.hasDepthReader = !!i2627[25]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2639 = data
  i2638.val = i2639[0]
  i2638.name = i2639[1]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2641 = data
  i2640.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[0], i2640.src)
  i2640.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[1], i2640.dst)
  i2640.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[2], i2640.op)
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2643 = data
  i2642.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2643[0], i2642.pass)
  i2642.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2643[1], i2642.fail)
  i2642.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2643[2], i2642.zFail)
  i2642.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2643[3], i2642.comp)
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.value = i2647[1]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( i2653[i + 0] );
  }
  i2650.keywords = i2652
  i2650.hasDiscard = !!i2651[1]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2657 = data
  i2656.passId = i2657[0]
  i2656.subShaderIndex = i2657[1]
  var i2659 = i2657[2]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( i2659[i + 0] );
  }
  i2656.keywords = i2658
  i2656.vertexProgram = i2657[3]
  i2656.fragmentProgram = i2657[4]
  i2656.exportedForWebGl2 = !!i2657[5]
  i2656.readDepth = !!i2657[6]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'shader')
  i2662.pass = i2663[2]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2667 = data
  i2666.name = i2667[0]
  i2666.type = i2667[1]
  i2666.value = new pc.Vec4( i2667[2], i2667[3], i2667[4], i2667[5] )
  i2666.textureValue = i2667[6]
  i2666.shaderPropertyFlag = i2667[7]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2669 = data
  i2668.name = i2669[0]
  request.r(i2669[1], i2669[2], 0, i2668, 'texture')
  i2668.aabb = i2669[3]
  i2668.vertices = i2669[4]
  i2668.triangles = i2669[5]
  i2668.textureRect = UnityEngine.Rect.MinMaxRect(i2669[6], i2669[7], i2669[8], i2669[9])
  i2668.packedRect = UnityEngine.Rect.MinMaxRect(i2669[10], i2669[11], i2669[12], i2669[13])
  i2668.border = new pc.Vec4( i2669[14], i2669[15], i2669[16], i2669[17] )
  i2668.transparency = i2669[18]
  i2668.bounds = i2669[19]
  i2668.pixelsPerUnit = i2669[20]
  i2668.textureWidth = i2669[21]
  i2668.textureHeight = i2669[22]
  i2668.nativeSize = new pc.Vec2( i2669[23], i2669[24] )
  i2668.pivot = new pc.Vec2( i2669[25], i2669[26] )
  i2668.textureRectOffset = new pc.Vec2( i2669[27], i2669[28] )
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2671 = data
  i2670.name = i2671[0]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2673 = data
  i2672.name = i2673[0]
  i2672.wrapMode = i2673[1]
  i2672.isLooping = !!i2673[2]
  i2672.length = i2673[3]
  var i2675 = i2673[4]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2675[i + 0]) );
  }
  i2672.curves = i2674
  var i2677 = i2673[5]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2677[i + 0]) );
  }
  i2672.events = i2676
  i2672.halfPrecision = !!i2673[6]
  i2672._frameRate = i2673[7]
  i2672.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2673[8], i2672.localBounds)
  i2672.hasMuscleCurves = !!i2673[9]
  var i2679 = i2673[10]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( i2679[i + 0] );
  }
  i2672.clipMuscleConstant = i2678
  i2672.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2673[11], i2672.clipBindingConstant)
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2683 = data
  i2682.path = i2683[0]
  i2682.hash = i2683[1]
  i2682.componentType = i2683[2]
  i2682.property = i2683[3]
  i2682.keys = i2683[4]
  var i2685 = i2683[5]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2685[i + 0]) );
  }
  i2682.objectReferenceKeys = i2684
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2689 = data
  i2688.time = i2689[0]
  request.r(i2689[1], i2689[2], 0, i2688, 'value')
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2693 = data
  i2692.functionName = i2693[0]
  i2692.floatParameter = i2693[1]
  i2692.intParameter = i2693[2]
  i2692.stringParameter = i2693[3]
  request.r(i2693[4], i2693[5], 0, i2692, 'objectReferenceParameter')
  i2692.time = i2693[6]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2695 = data
  i2694.center = new pc.Vec3( i2695[0], i2695[1], i2695[2] )
  i2694.extends = new pc.Vec3( i2695[3], i2695[4], i2695[5] )
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( i2701[i + 0] );
  }
  i2698.genericBindings = i2700
  var i2703 = i2699[1]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2698.pptrCurveMapping = i2702
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2705 = data
  i2704.name = i2705[0]
  i2704.blendParameter = i2705[1]
  i2704.blendParameterY = i2705[2]
  i2704.blendType = i2705[3]
  var i2707 = i2705[4]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2707[i + 0]) );
  }
  i2704.children = i2706
  i2704.useAutomaticThresholds = !!i2705[5]
  i2704.minThreshold = i2705[6]
  i2704.maxThreshold = i2705[7]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2711 = data
  request.r(i2711[0], i2711[1], 0, i2710, 'motion')
  i2710.threshold = i2711[2]
  i2710.position = new pc.Vec2( i2711[3], i2711[4] )
  i2710.timeScale = i2711[5]
  i2710.cycleOffset = i2711[6]
  i2710.directBlendParameter = i2711[7]
  i2710.mirror = !!i2711[8]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2713 = data
  i2712.name = i2713[0]
  var i2715 = i2713[1]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2715[i + 0]) );
  }
  i2712.layers = i2714
  var i2717 = i2713[2]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2717[i + 0]) );
  }
  i2712.parameters = i2716
  i2712.animationClips = i2713[3]
  i2712.avatarUnsupported = i2713[4]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.defaultWeight = i2721[1]
  i2720.blendingMode = i2721[2]
  i2720.avatarMask = i2721[3]
  i2720.syncedLayerIndex = i2721[4]
  i2720.syncedLayerAffectsTiming = !!i2721[5]
  i2720.syncedLayers = i2721[6]
  i2720.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2721[7], i2720.stateMachine)
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2723 = data
  i2722.id = i2723[0]
  i2722.name = i2723[1]
  i2722.path = i2723[2]
  var i2725 = i2723[3]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2725[i + 0]) );
  }
  i2722.states = i2724
  var i2727 = i2723[4]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2727[i + 0]) );
  }
  i2722.machines = i2726
  var i2729 = i2723[5]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2729[i + 0]) );
  }
  i2722.entryStateTransitions = i2728
  var i2731 = i2723[6]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2731[i + 0]) );
  }
  i2722.exitStateTransitions = i2730
  var i2733 = i2723[7]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2733[i + 0]) );
  }
  i2722.anyStateTransitions = i2732
  i2722.defaultStateId = i2723[8]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2737 = data
  i2736.id = i2737[0]
  i2736.name = i2737[1]
  i2736.cycleOffset = i2737[2]
  i2736.cycleOffsetParameter = i2737[3]
  i2736.cycleOffsetParameterActive = !!i2737[4]
  i2736.mirror = !!i2737[5]
  i2736.mirrorParameter = i2737[6]
  i2736.mirrorParameterActive = !!i2737[7]
  i2736.motionId = i2737[8]
  i2736.nameHash = i2737[9]
  i2736.fullPathHash = i2737[10]
  i2736.speed = i2737[11]
  i2736.speedParameter = i2737[12]
  i2736.speedParameterActive = !!i2737[13]
  i2736.tag = i2737[14]
  i2736.tagHash = i2737[15]
  i2736.writeDefaultValues = !!i2737[16]
  var i2739 = i2737[17]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2736.behaviours = i2738
  var i2741 = i2737[18]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2741[i + 0]) );
  }
  i2736.transitions = i2740
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2747 = data
  i2746.fullPath = i2747[0]
  i2746.canTransitionToSelf = !!i2747[1]
  i2746.duration = i2747[2]
  i2746.exitTime = i2747[3]
  i2746.hasExitTime = !!i2747[4]
  i2746.hasFixedDuration = !!i2747[5]
  i2746.interruptionSource = i2747[6]
  i2746.offset = i2747[7]
  i2746.orderedInterruption = !!i2747[8]
  i2746.destinationStateId = i2747[9]
  i2746.isExit = !!i2747[10]
  i2746.mute = !!i2747[11]
  i2746.solo = !!i2747[12]
  var i2749 = i2747[13]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2749[i + 0]) );
  }
  i2746.conditions = i2748
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2753 = data
  i2752.mode = i2753[0]
  i2752.parameter = i2753[1]
  i2752.threshold = i2753[2]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2759 = data
  i2758.destinationStateId = i2759[0]
  i2758.isExit = !!i2759[1]
  i2758.mute = !!i2759[2]
  i2758.solo = !!i2759[3]
  var i2761 = i2759[4]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2761[i + 0]) );
  }
  i2758.conditions = i2760
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2765 = data
  i2764.defaultBool = !!i2765[0]
  i2764.defaultFloat = i2765[1]
  i2764.defaultInt = i2765[2]
  i2764.name = i2765[3]
  i2764.nameHash = i2765[4]
  i2764.type = i2765[5]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2767 = data
  i2766.name = i2767[0]
  request.r(i2767[1], i2767[2], 0, i2766, '_runtimeAnimatorController')
  var i2769 = i2767[3]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 2, i2768, '')
  }
  i2766._originalAnimationClips = i2768
  var i2771 = i2767[4]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 2, i2770, '')
  }
  i2766._overrideAnimationClips = i2770
  var i2773 = i2767[5]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 2, i2772, '')
  }
  i2766._animationClips = i2772
  var i2775 = i2767[6]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('UnityEngine.AnimationClipPair', i2775[i + 0]) );
  }
  i2766._animationClipPairs = i2774
  return i2766
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2781 = data
  request.r(i2781[0], i2781[1], 0, i2780, 'originalClip')
  request.r(i2781[2], i2781[3], 0, i2780, 'overrideClip')
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2783 = data
  i2782.name = i2783[0]
  i2782.bytes64 = i2783[1]
  i2782.data = i2783[2]
  return i2782
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2785 = data
  i2784.normalStyle = i2785[0]
  i2784.normalSpacingOffset = i2785[1]
  i2784.boldStyle = i2785[2]
  i2784.boldSpacing = i2785[3]
  i2784.italicStyle = i2785[4]
  i2784.tabSize = i2785[5]
  request.r(i2785[6], i2785[7], 0, i2784, 'atlas')
  i2784.m_SourceFontFileGUID = i2785[8]
  i2784.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2785[9], i2784.m_CreationSettings)
  request.r(i2785[10], i2785[11], 0, i2784, 'm_SourceFontFile')
  i2784.m_SourceFontFilePath = i2785[12]
  i2784.m_AtlasPopulationMode = i2785[13]
  i2784.InternalDynamicOS = !!i2785[14]
  var i2787 = i2785[15]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('UnityEngine.TextCore.Glyph', i2787[i + 0]));
  }
  i2784.m_GlyphTable = i2786
  var i2789 = i2785[16]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.TMP_Character', i2789[i + 0]));
  }
  i2784.m_CharacterTable = i2788
  var i2791 = i2785[17]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 2) {
  request.r(i2791[i + 0], i2791[i + 1], 2, i2790, '')
  }
  i2784.m_AtlasTextures = i2790
  i2784.m_AtlasTextureIndex = i2785[18]
  i2784.m_IsMultiAtlasTexturesEnabled = !!i2785[19]
  i2784.m_GetFontFeatures = !!i2785[20]
  i2784.m_ClearDynamicDataOnBuild = !!i2785[21]
  i2784.m_AtlasWidth = i2785[22]
  i2784.m_AtlasHeight = i2785[23]
  i2784.m_AtlasPadding = i2785[24]
  i2784.m_AtlasRenderMode = i2785[25]
  var i2793 = i2785[26]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('UnityEngine.TextCore.GlyphRect', i2793[i + 0]));
  }
  i2784.m_UsedGlyphRects = i2792
  var i2795 = i2785[27]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('UnityEngine.TextCore.GlyphRect', i2795[i + 0]));
  }
  i2784.m_FreeGlyphRects = i2794
  i2784.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2785[28], i2784.m_FontFeatureTable)
  i2784.m_ShouldReimportFontFeatures = !!i2785[29]
  var i2797 = i2785[30]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 1, i2796, '')
  }
  i2784.m_FallbackFontAssetTable = i2796
  var i2799 = i2785[31]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('TMPro.TMP_FontWeightPair', i2799[i + 0]) );
  }
  i2784.m_FontWeightTable = i2798
  var i2801 = i2785[32]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('TMPro.TMP_FontWeightPair', i2801[i + 0]) );
  }
  i2784.fontWeights = i2800
  i2784.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2785[33], i2784.m_fontInfo)
  var i2803 = i2785[34]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('TMPro.TMP_Glyph', i2803[i + 0]));
  }
  i2784.m_glyphInfoList = i2802
  i2784.m_KerningTable = request.d('TMPro.KerningTable', i2785[35], i2784.m_KerningTable)
  var i2805 = i2785[36]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2805.length; i += 2) {
  request.r(i2805[i + 0], i2805[i + 1], 1, i2804, '')
  }
  i2784.fallbackFontAssets = i2804
  i2784.m_Version = i2785[37]
  i2784.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2785[38], i2784.m_FaceInfo)
  request.r(i2785[39], i2785[40], 0, i2784, 'm_Material')
  return i2784
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2807 = data
  i2806.sourceFontFileName = i2807[0]
  i2806.sourceFontFileGUID = i2807[1]
  i2806.faceIndex = i2807[2]
  i2806.pointSizeSamplingMode = i2807[3]
  i2806.pointSize = i2807[4]
  i2806.padding = i2807[5]
  i2806.paddingMode = i2807[6]
  i2806.packingMode = i2807[7]
  i2806.atlasWidth = i2807[8]
  i2806.atlasHeight = i2807[9]
  i2806.characterSetSelectionMode = i2807[10]
  i2806.characterSequence = i2807[11]
  i2806.referencedFontAssetGUID = i2807[12]
  i2806.referencedTextAssetGUID = i2807[13]
  i2806.fontStyle = i2807[14]
  i2806.fontStyleModifier = i2807[15]
  i2806.renderMode = i2807[16]
  i2806.includeFontFeatures = !!i2807[17]
  return i2806
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2811 = data
  i2810.m_Index = i2811[0]
  i2810.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2811[1], i2810.m_Metrics)
  i2810.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2811[2], i2810.m_GlyphRect)
  i2810.m_Scale = i2811[3]
  i2810.m_AtlasIndex = i2811[4]
  i2810.m_ClassDefinitionType = i2811[5]
  return i2810
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2813 = data
  i2812.m_Width = i2813[0]
  i2812.m_Height = i2813[1]
  i2812.m_HorizontalBearingX = i2813[2]
  i2812.m_HorizontalBearingY = i2813[3]
  i2812.m_HorizontalAdvance = i2813[4]
  return i2812
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2815 = data
  i2814.m_X = i2815[0]
  i2814.m_Y = i2815[1]
  i2814.m_Width = i2815[2]
  i2814.m_Height = i2815[3]
  return i2814
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_Character' )
  var i2819 = data
  i2818.m_ElementType = i2819[0]
  i2818.m_Unicode = i2819[1]
  i2818.m_GlyphIndex = i2819[2]
  i2818.m_Scale = i2819[3]
  return i2818
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2825 = data
  var i2827 = i2825[0]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.add(request.d('TMPro.MultipleSubstitutionRecord', i2827[i + 0]));
  }
  i2824.m_MultipleSubstitutionRecords = i2826
  var i2829 = i2825[1]
  var i2828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.add(request.d('TMPro.LigatureSubstitutionRecord', i2829[i + 0]));
  }
  i2824.m_LigatureSubstitutionRecords = i2828
  var i2831 = i2825[2]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2831[i + 0]));
  }
  i2824.m_GlyphPairAdjustmentRecords = i2830
  var i2833 = i2825[3]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2833[i + 0]));
  }
  i2824.m_MarkToBaseAdjustmentRecords = i2832
  var i2835 = i2825[4]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2835[i + 0]));
  }
  i2824.m_MarkToMarkAdjustmentRecords = i2834
  return i2824
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2839 = data
  i2838.m_TargetGlyphID = i2839[0]
  i2838.m_SubstituteGlyphIDs = i2839[1]
  return i2838
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2843 = data
  i2842.m_ComponentGlyphIDs = i2843[0]
  i2842.m_LigatureGlyphID = i2843[1]
  return i2842
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2847 = data
  i2846.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2847[0], i2846.m_FirstAdjustmentRecord)
  i2846.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2847[1], i2846.m_SecondAdjustmentRecord)
  i2846.m_FeatureLookupFlags = i2847[2]
  return i2846
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2849 = data
  i2848.m_GlyphIndex = i2849[0]
  i2848.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2849[1], i2848.m_GlyphValueRecord)
  return i2848
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2851 = data
  i2850.m_XPlacement = i2851[0]
  i2850.m_YPlacement = i2851[1]
  i2850.m_XAdvance = i2851[2]
  i2850.m_YAdvance = i2851[3]
  return i2850
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2855 = data
  i2854.m_BaseGlyphID = i2855[0]
  i2854.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2855[1], i2854.m_BaseGlyphAnchorPoint)
  i2854.m_MarkGlyphID = i2855[2]
  i2854.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2855[3], i2854.m_MarkPositionAdjustment)
  return i2854
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2857 = data
  i2856.m_XCoordinate = i2857[0]
  i2856.m_YCoordinate = i2857[1]
  return i2856
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2859 = data
  i2858.m_XPositionAdjustment = i2859[0]
  i2858.m_YPositionAdjustment = i2859[1]
  return i2858
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2863 = data
  i2862.m_BaseMarkGlyphID = i2863[0]
  i2862.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2863[1], i2862.m_BaseMarkGlyphAnchorPoint)
  i2862.m_CombiningMarkGlyphID = i2863[2]
  i2862.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2863[3], i2862.m_CombiningMarkPositionAdjustment)
  return i2862
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2868 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2869 = data
  request.r(i2869[0], i2869[1], 0, i2868, 'regularTypeface')
  request.r(i2869[2], i2869[3], 0, i2868, 'italicTypeface')
  return i2868
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2871 = data
  i2870.Name = i2871[0]
  i2870.PointSize = i2871[1]
  i2870.Scale = i2871[2]
  i2870.CharacterCount = i2871[3]
  i2870.LineHeight = i2871[4]
  i2870.Baseline = i2871[5]
  i2870.Ascender = i2871[6]
  i2870.CapHeight = i2871[7]
  i2870.Descender = i2871[8]
  i2870.CenterLine = i2871[9]
  i2870.SuperscriptOffset = i2871[10]
  i2870.SubscriptOffset = i2871[11]
  i2870.SubSize = i2871[12]
  i2870.Underline = i2871[13]
  i2870.UnderlineThickness = i2871[14]
  i2870.strikethrough = i2871[15]
  i2870.strikethroughThickness = i2871[16]
  i2870.TabWidth = i2871[17]
  i2870.Padding = i2871[18]
  i2870.AtlasWidth = i2871[19]
  i2870.AtlasHeight = i2871[20]
  return i2870
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2874 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2875 = data
  i2874.id = i2875[0]
  i2874.x = i2875[1]
  i2874.y = i2875[2]
  i2874.width = i2875[3]
  i2874.height = i2875[4]
  i2874.xOffset = i2875[5]
  i2874.yOffset = i2875[6]
  i2874.xAdvance = i2875[7]
  i2874.scale = i2875[8]
  return i2874
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.KerningTable' )
  var i2877 = data
  var i2879 = i2877[0]
  var i2878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.add(request.d('TMPro.KerningPair', i2879[i + 0]));
  }
  i2876.kerningPairs = i2878
  return i2876
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.KerningPair' )
  var i2883 = data
  i2882.xOffset = i2883[0]
  i2882.m_FirstGlyph = i2883[1]
  i2882.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2883[2], i2882.m_FirstGlyphAdjustments)
  i2882.m_SecondGlyph = i2883[3]
  i2882.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2883[4], i2882.m_SecondGlyphAdjustments)
  i2882.m_IgnoreSpacingAdjustments = !!i2883[5]
  return i2882
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2885 = data
  i2884.m_FaceIndex = i2885[0]
  i2884.m_FamilyName = i2885[1]
  i2884.m_StyleName = i2885[2]
  i2884.m_PointSize = i2885[3]
  i2884.m_Scale = i2885[4]
  i2884.m_UnitsPerEM = i2885[5]
  i2884.m_LineHeight = i2885[6]
  i2884.m_AscentLine = i2885[7]
  i2884.m_CapLine = i2885[8]
  i2884.m_MeanLine = i2885[9]
  i2884.m_Baseline = i2885[10]
  i2884.m_DescentLine = i2885[11]
  i2884.m_SuperscriptOffset = i2885[12]
  i2884.m_SuperscriptSize = i2885[13]
  i2884.m_SubscriptOffset = i2885[14]
  i2884.m_SubscriptSize = i2885[15]
  i2884.m_UnderlineOffset = i2885[16]
  i2884.m_UnderlineThickness = i2885[17]
  i2884.m_StrikethroughOffset = i2885[18]
  i2884.m_StrikethroughThickness = i2885[19]
  i2884.m_TabWidth = i2885[20]
  return i2884
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i2886 = root || request.c( 'PlayerSO' )
  var i2887 = data
  i2886.maxSpeed = i2887[0]
  i2886.jumpImpulse = i2887[1]
  return i2886
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i2888 = root || request.c( 'FindMonsterDatabase' )
  var i2889 = data
  var i2891 = i2889[0]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 1, i2890, '')
  }
  i2888.database = i2890
  return i2888
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i2894 = root || request.c( 'MonsterSO' )
  var i2895 = data
  i2894.id = i2895[0]
  i2894.displayName = i2895[1]
  request.r(i2895[2], i2895[3], 0, i2894, 'icon')
  request.r(i2895[4], i2895[5], 0, i2894, 'prefab')
  i2894.rarity = i2895[6]
  i2894.rarityColor = new pc.Color(i2895[7], i2895[8], i2895[9], i2895[10])
  return i2894
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2896 = root || request.c( 'TMPro.TMP_Settings' )
  var i2897 = data
  i2896.assetVersion = i2897[0]
  i2896.m_TextWrappingMode = i2897[1]
  i2896.m_enableKerning = !!i2897[2]
  var i2899 = i2897[3]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.add(i2899[i + 0]);
  }
  i2896.m_ActiveFontFeatures = i2898
  i2896.m_enableExtraPadding = !!i2897[4]
  i2896.m_enableTintAllSprites = !!i2897[5]
  i2896.m_enableParseEscapeCharacters = !!i2897[6]
  i2896.m_EnableRaycastTarget = !!i2897[7]
  i2896.m_GetFontFeaturesAtRuntime = !!i2897[8]
  i2896.m_missingGlyphCharacter = i2897[9]
  i2896.m_ClearDynamicDataOnBuild = !!i2897[10]
  i2896.m_warningsDisabled = !!i2897[11]
  request.r(i2897[12], i2897[13], 0, i2896, 'm_defaultFontAsset')
  i2896.m_defaultFontAssetPath = i2897[14]
  i2896.m_defaultFontSize = i2897[15]
  i2896.m_defaultAutoSizeMinRatio = i2897[16]
  i2896.m_defaultAutoSizeMaxRatio = i2897[17]
  i2896.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2897[18], i2897[19] )
  i2896.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2897[20], i2897[21] )
  i2896.m_autoSizeTextContainer = !!i2897[22]
  i2896.m_IsTextObjectScaleStatic = !!i2897[23]
  var i2901 = i2897[24]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2901.length; i += 2) {
  request.r(i2901[i + 0], i2901[i + 1], 1, i2900, '')
  }
  i2896.m_fallbackFontAssets = i2900
  i2896.m_matchMaterialPreset = !!i2897[25]
  i2896.m_HideSubTextObjects = !!i2897[26]
  request.r(i2897[27], i2897[28], 0, i2896, 'm_defaultSpriteAsset')
  i2896.m_defaultSpriteAssetPath = i2897[29]
  i2896.m_enableEmojiSupport = !!i2897[30]
  i2896.m_MissingCharacterSpriteUnicode = i2897[31]
  var i2903 = i2897[32]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 1, i2902, '')
  }
  i2896.m_EmojiFallbackTextAssets = i2902
  i2896.m_defaultColorGradientPresetsPath = i2897[33]
  request.r(i2897[34], i2897[35], 0, i2896, 'm_defaultStyleSheet')
  i2896.m_StyleSheetsResourcePath = i2897[36]
  request.r(i2897[37], i2897[38], 0, i2896, 'm_leadingCharacters')
  request.r(i2897[39], i2897[40], 0, i2896, 'm_followingCharacters')
  i2896.m_UseModernHangulLineBreakingRules = !!i2897[41]
  return i2896
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2907 = data
  request.r(i2907[0], i2907[1], 0, i2906, 'spriteSheet')
  var i2909 = i2907[2]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.add(request.d('TMPro.TMP_Sprite', i2909[i + 0]));
  }
  i2906.spriteInfoList = i2908
  var i2911 = i2907[3]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2911.length; i += 2) {
  request.r(i2911[i + 0], i2911[i + 1], 1, i2910, '')
  }
  i2906.fallbackSpriteAssets = i2910
  var i2913 = i2907[4]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(request.d('TMPro.TMP_SpriteCharacter', i2913[i + 0]));
  }
  i2906.m_SpriteCharacterTable = i2912
  var i2915 = i2907[5]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.add(request.d('TMPro.TMP_SpriteGlyph', i2915[i + 0]));
  }
  i2906.m_GlyphTable = i2914
  i2906.m_Version = i2907[6]
  i2906.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2907[7], i2906.m_FaceInfo)
  request.r(i2907[8], i2907[9], 0, i2906, 'm_Material')
  return i2906
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2919 = data
  i2918.name = i2919[0]
  i2918.hashCode = i2919[1]
  i2918.unicode = i2919[2]
  i2918.pivot = new pc.Vec2( i2919[3], i2919[4] )
  request.r(i2919[5], i2919[6], 0, i2918, 'sprite')
  i2918.id = i2919[7]
  i2918.x = i2919[8]
  i2918.y = i2919[9]
  i2918.width = i2919[10]
  i2918.height = i2919[11]
  i2918.xOffset = i2919[12]
  i2918.yOffset = i2919[13]
  i2918.xAdvance = i2919[14]
  i2918.scale = i2919[15]
  return i2918
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2924 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2925 = data
  i2924.m_Name = i2925[0]
  i2924.m_ElementType = i2925[1]
  i2924.m_Unicode = i2925[2]
  i2924.m_GlyphIndex = i2925[3]
  i2924.m_Scale = i2925[4]
  return i2924
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2928 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2929 = data
  request.r(i2929[0], i2929[1], 0, i2928, 'sprite')
  i2928.m_Index = i2929[2]
  i2928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2929[3], i2928.m_Metrics)
  i2928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2929[4], i2928.m_GlyphRect)
  i2928.m_Scale = i2929[5]
  i2928.m_AtlasIndex = i2929[6]
  i2928.m_ClassDefinitionType = i2929[7]
  return i2928
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2931 = data
  var i2933 = i2931[0]
  var i2932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.add(request.d('TMPro.TMP_Style', i2933[i + 0]));
  }
  i2930.m_StyleList = i2932
  return i2930
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.TMP_Style' )
  var i2937 = data
  i2936.m_Name = i2937[0]
  i2936.m_HashCode = i2937[1]
  i2936.m_OpeningDefinition = i2937[2]
  i2936.m_ClosingDefinition = i2937[3]
  i2936.m_OpeningTagArray = i2937[4]
  i2936.m_ClosingTagArray = i2937[5]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2939 = data
  var i2941 = i2939[0]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2941[i + 0]) );
  }
  i2938.files = i2940
  i2938.componentToPrefabIds = i2939[1]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2945 = data
  i2944.path = i2945[0]
  request.r(i2945[1], i2945[2], 0, i2944, 'unityObject')
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2947 = data
  var i2949 = i2947[0]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2949[i + 0]) );
  }
  i2946.scriptsExecutionOrder = i2948
  var i2951 = i2947[1]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2951[i + 0]) );
  }
  i2946.sortingLayers = i2950
  var i2953 = i2947[2]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2953[i + 0]) );
  }
  i2946.cullingLayers = i2952
  i2946.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2947[3], i2946.timeSettings)
  i2946.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2947[4], i2946.physicsSettings)
  i2946.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2947[5], i2946.physics2DSettings)
  i2946.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2947[6], i2946.qualitySettings)
  i2946.enableRealtimeShadows = !!i2947[7]
  i2946.enableAutoInstancing = !!i2947[8]
  i2946.enableStaticBatching = !!i2947[9]
  i2946.enableDynamicBatching = !!i2947[10]
  i2946.usePreservativeDynamicBatching = !!i2947[11]
  i2946.lightmapEncodingQuality = i2947[12]
  i2946.desiredColorSpace = i2947[13]
  var i2955 = i2947[14]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( i2955[i + 0] );
  }
  i2946.allTags = i2954
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2959 = data
  i2958.name = i2959[0]
  i2958.value = i2959[1]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2963 = data
  i2962.id = i2963[0]
  i2962.name = i2963[1]
  i2962.value = i2963[2]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2967 = data
  i2966.id = i2967[0]
  i2966.name = i2967[1]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2969 = data
  i2968.fixedDeltaTime = i2969[0]
  i2968.maximumDeltaTime = i2969[1]
  i2968.timeScale = i2969[2]
  i2968.maximumParticleTimestep = i2969[3]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2971 = data
  i2970.gravity = new pc.Vec3( i2971[0], i2971[1], i2971[2] )
  i2970.defaultSolverIterations = i2971[3]
  i2970.bounceThreshold = i2971[4]
  i2970.autoSyncTransforms = !!i2971[5]
  i2970.autoSimulation = !!i2971[6]
  var i2973 = i2971[7]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2973[i + 0]) );
  }
  i2970.collisionMatrix = i2972
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2977 = data
  i2976.enabled = !!i2977[0]
  i2976.layerId = i2977[1]
  i2976.otherLayerId = i2977[2]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2979 = data
  request.r(i2979[0], i2979[1], 0, i2978, 'material')
  i2978.gravity = new pc.Vec2( i2979[2], i2979[3] )
  i2978.positionIterations = i2979[4]
  i2978.velocityIterations = i2979[5]
  i2978.velocityThreshold = i2979[6]
  i2978.maxLinearCorrection = i2979[7]
  i2978.maxAngularCorrection = i2979[8]
  i2978.maxTranslationSpeed = i2979[9]
  i2978.maxRotationSpeed = i2979[10]
  i2978.baumgarteScale = i2979[11]
  i2978.baumgarteTOIScale = i2979[12]
  i2978.timeToSleep = i2979[13]
  i2978.linearSleepTolerance = i2979[14]
  i2978.angularSleepTolerance = i2979[15]
  i2978.defaultContactOffset = i2979[16]
  i2978.autoSimulation = !!i2979[17]
  i2978.queriesHitTriggers = !!i2979[18]
  i2978.queriesStartInColliders = !!i2979[19]
  i2978.callbacksOnDisable = !!i2979[20]
  i2978.reuseCollisionCallbacks = !!i2979[21]
  i2978.autoSyncTransforms = !!i2979[22]
  var i2981 = i2979[23]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2981[i + 0]) );
  }
  i2978.collisionMatrix = i2980
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2985 = data
  i2984.enabled = !!i2985[0]
  i2984.layerId = i2985[1]
  i2984.otherLayerId = i2985[2]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2987 = data
  var i2989 = i2987[0]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2989[i + 0]) );
  }
  i2986.qualityLevels = i2988
  var i2991 = i2987[1]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( i2991[i + 0] );
  }
  i2986.names = i2990
  i2986.shadows = i2987[2]
  i2986.anisotropicFiltering = i2987[3]
  i2986.antiAliasing = i2987[4]
  i2986.lodBias = i2987[5]
  i2986.shadowCascades = i2987[6]
  i2986.shadowDistance = i2987[7]
  i2986.shadowmaskMode = i2987[8]
  i2986.shadowProjection = i2987[9]
  i2986.shadowResolution = i2987[10]
  i2986.softParticles = !!i2987[11]
  i2986.softVegetation = !!i2987[12]
  i2986.activeColorSpace = i2987[13]
  i2986.desiredColorSpace = i2987[14]
  i2986.masterTextureLimit = i2987[15]
  i2986.maxQueuedFrames = i2987[16]
  i2986.particleRaycastBudget = i2987[17]
  i2986.pixelLightCount = i2987[18]
  i2986.realtimeReflectionProbes = !!i2987[19]
  i2986.shadowCascade2Split = i2987[20]
  i2986.shadowCascade4Split = new pc.Vec3( i2987[21], i2987[22], i2987[23] )
  i2986.streamingMipmapsActive = !!i2987[24]
  i2986.vSyncCount = i2987[25]
  i2986.asyncUploadBufferSize = i2987[26]
  i2986.asyncUploadTimeSlice = i2987[27]
  i2986.billboardsFaceCameraPosition = !!i2987[28]
  i2986.shadowNearPlaneOffset = i2987[29]
  i2986.streamingMipmapsMemoryBudget = i2987[30]
  i2986.maximumLODLevel = i2987[31]
  i2986.streamingMipmapsAddAllCameras = !!i2987[32]
  i2986.streamingMipmapsMaxLevelReduction = i2987[33]
  i2986.streamingMipmapsRenderersPerFrame = i2987[34]
  i2986.resolutionScalingFixedDPIFactor = i2987[35]
  i2986.streamingMipmapsMaxFileIORequests = i2987[36]
  i2986.currentQualityLevel = i2987[37]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2997 = data
  i2996.weight = i2997[0]
  i2996.vertices = i2997[1]
  i2996.normals = i2997[2]
  i2996.tangents = i2997[3]
  return i2996
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2998 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2999 = data
  i2998.xPlacement = i2999[0]
  i2998.yPlacement = i2999[1]
  i2998.xAdvance = i2999[2]
  i2998.yAdvance = i2999[3]
  return i2998
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[53],"83":[39],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[39],"106":[3],"107":[108],"109":[108],"25":[24],"46":[52],"10":[7],"110":[27],"111":[24],"112":[33,24],"113":[3],"114":[33,24],"115":[24],"116":[24],"117":[3,24],"31":[24,33],"118":[119],"120":[119],"121":[119],"122":[24],"123":[24],"29":[25],"30":[33,24],"124":[24],"27":[25],"125":[24],"126":[24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"134":[33,24],"135":[24],"136":[24],"137":[24],"138":[24],"139":[33,24],"140":[24],"141":[55],"142":[55],"56":[55],"143":[55],"144":[39],"145":[39]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","SolidBox","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.AudioClip","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UIRays","GameButton","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","FM3rdInput","UnityEngine.GameObject","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableAudio","LunaController","ControlsTutorial","HiddenMonster","Billboard","UnityEngine.SpriteRenderer","MorphUnlockedPanel","MorphHuntStory","MonsterSO","PointerHand","ScaleYoyo","UnityEngine.Cubemap","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BAH_V04";

Deserializers.lunaInitializationTime = "11/10/2026 04:13:27";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_BAH_V05_HoaiTT";

Deserializers.lunaAppID = "43843";

Deserializers.projectId = "21ebec284f99a524b91c2dde2f1e39ec";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1650";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4229";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BAH_V04";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "15183fd9-06ea-4cb4-a282-3daae18d197f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

