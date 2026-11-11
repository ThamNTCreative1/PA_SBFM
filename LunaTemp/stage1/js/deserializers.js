var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.JointSpring' )
  var i2269 = data
  i2268.spring = i2269[0]
  i2268.damper = i2269[1]
  i2268.targetPosition = i2269[2]
  return i2268
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointMotor' )
  var i2271 = data
  i2270.m_TargetVelocity = i2271[0]
  i2270.m_Force = i2271[1]
  i2270.m_FreeSpin = i2271[2]
  return i2270
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.JointLimits' )
  var i2273 = data
  i2272.m_Min = i2273[0]
  i2272.m_Max = i2273[1]
  i2272.m_Bounciness = i2273[2]
  i2272.m_BounceMinVelocity = i2273[3]
  i2272.m_ContactDistance = i2273[4]
  i2272.minBounce = i2273[5]
  i2272.maxBounce = i2273[6]
  return i2272
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.JointDrive' )
  var i2275 = data
  i2274.m_PositionSpring = i2275[0]
  i2274.m_PositionDamper = i2275[1]
  i2274.m_MaximumForce = i2275[2]
  i2274.m_UseAcceleration = i2275[3]
  return i2274
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2277 = data
  i2276.m_Spring = i2277[0]
  i2276.m_Damper = i2277[1]
  return i2276
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2279 = data
  i2278.m_Limit = i2279[0]
  i2278.m_Bounciness = i2279[1]
  i2278.m_ContactDistance = i2279[2]
  return i2278
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2281 = data
  i2280.m_ExtremumSlip = i2281[0]
  i2280.m_ExtremumValue = i2281[1]
  i2280.m_AsymptoteSlip = i2281[2]
  i2280.m_AsymptoteValue = i2281[3]
  i2280.m_Stiffness = i2281[4]
  return i2280
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2283 = data
  i2282.m_LowerAngle = i2283[0]
  i2282.m_UpperAngle = i2283[1]
  return i2282
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2285 = data
  i2284.m_MotorSpeed = i2285[0]
  i2284.m_MaximumMotorTorque = i2285[1]
  return i2284
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2287 = data
  i2286.m_DampingRatio = i2287[0]
  i2286.m_Frequency = i2287[1]
  i2286.m_Angle = i2287[2]
  return i2286
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2289 = data
  i2288.m_LowerTranslation = i2289[0]
  i2288.m_UpperTranslation = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2291 = data
  i2290.name = i2291[0]
  i2290.halfPrecision = !!i2291[1]
  i2290.useSimplification = !!i2291[2]
  i2290.useUInt32IndexFormat = !!i2291[3]
  i2290.vertexCount = i2291[4]
  i2290.aabb = i2291[5]
  var i2293 = i2291[6]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( !!i2293[i + 0] );
  }
  i2290.streams = i2292
  i2290.vertices = i2291[7]
  var i2295 = i2291[8]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2295[i + 0]) );
  }
  i2290.subMeshes = i2294
  var i2297 = i2291[9]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 16) {
    i2296.push( new pc.Mat4().setData(i2297[i + 0], i2297[i + 1], i2297[i + 2], i2297[i + 3],  i2297[i + 4], i2297[i + 5], i2297[i + 6], i2297[i + 7],  i2297[i + 8], i2297[i + 9], i2297[i + 10], i2297[i + 11],  i2297[i + 12], i2297[i + 13], i2297[i + 14], i2297[i + 15]) );
  }
  i2290.bindposes = i2296
  var i2299 = i2291[10]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2299[i + 0]) );
  }
  i2290.blendShapes = i2298
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2305 = data
  i2304.triangles = i2305[0]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2311 = data
  i2310.name = i2311[0]
  var i2313 = i2311[1]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2313[i + 0]) );
  }
  i2310.frames = i2312
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2315 = data
  i2314.name = i2315[0]
  i2314.width = i2315[1]
  i2314.height = i2315[2]
  i2314.mipmapCount = i2315[3]
  i2314.anisoLevel = i2315[4]
  i2314.filterMode = i2315[5]
  i2314.hdr = !!i2315[6]
  i2314.format = i2315[7]
  i2314.wrapMode = i2315[8]
  i2314.alphaIsTransparency = !!i2315[9]
  i2314.alphaSource = i2315[10]
  i2314.graphicsFormat = i2315[11]
  i2314.sRGBTexture = !!i2315[12]
  i2314.desiredColorSpace = i2315[13]
  i2314.wrapU = i2315[14]
  i2314.wrapV = i2315[15]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2316 = root || new pc.UnityMaterial()
  var i2317 = data
  i2316.name = i2317[0]
  request.r(i2317[1], i2317[2], 0, i2316, 'shader')
  i2316.renderQueue = i2317[3]
  i2316.enableInstancing = !!i2317[4]
  var i2319 = i2317[5]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2319[i + 0]) );
  }
  i2316.floatParameters = i2318
  var i2321 = i2317[6]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2321[i + 0]) );
  }
  i2316.colorParameters = i2320
  var i2323 = i2317[7]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2323[i + 0]) );
  }
  i2316.vectorParameters = i2322
  var i2325 = i2317[8]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2325[i + 0]) );
  }
  i2316.textureParameters = i2324
  var i2327 = i2317[9]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2327[i + 0]) );
  }
  i2316.materialFlags = i2326
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.value = i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2335 = data
  i2334.name = i2335[0]
  i2334.value = new pc.Color(i2335[1], i2335[2], i2335[3], i2335[4])
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.value = new pc.Vec4( i2339[1], i2339[2], i2339[3], i2339[4] )
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2343 = data
  i2342.name = i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'value')
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2347 = data
  i2346.name = i2347[0]
  i2346.enabled = !!i2347[1]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2349 = data
  i2348.position = new pc.Vec3( i2349[0], i2349[1], i2349[2] )
  i2348.scale = new pc.Vec3( i2349[3], i2349[4], i2349[5] )
  i2348.rotation = new pc.Quat(i2349[6], i2349[7], i2349[8], i2349[9])
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'sharedMesh')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'additionalVertexStreams')
  i2352.enabled = !!i2353[2]
  request.r(i2353[3], i2353[4], 0, i2352, 'sharedMaterial')
  var i2355 = i2353[5]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 2, i2354, '')
  }
  i2352.sharedMaterials = i2354
  i2352.receiveShadows = !!i2353[6]
  i2352.shadowCastingMode = i2353[7]
  i2352.sortingLayerID = i2353[8]
  i2352.sortingOrder = i2353[9]
  i2352.lightmapIndex = i2353[10]
  i2352.lightmapSceneIndex = i2353[11]
  i2352.lightmapScaleOffset = new pc.Vec4( i2353[12], i2353[13], i2353[14], i2353[15] )
  i2352.lightProbeUsage = i2353[16]
  i2352.reflectionProbeUsage = i2353[17]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'sharedMesh')
  i2358.convex = !!i2359[2]
  i2358.enabled = !!i2359[3]
  i2358.isTrigger = !!i2359[4]
  request.r(i2359[5], i2359[6], 0, i2358, 'material')
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.tagId = i2361[1]
  i2360.enabled = !!i2361[2]
  i2360.isStatic = !!i2361[3]
  i2360.layer = i2361[4]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2363 = data
  i2362.center = new pc.Vec3( i2363[0], i2363[1], i2363[2] )
  i2362.radius = i2363[3]
  i2362.height = i2363[4]
  i2362.direction = i2363[5]
  i2362.enabled = !!i2363[6]
  i2362.isTrigger = !!i2363[7]
  request.r(i2363[8], i2363[9], 0, i2362, 'material')
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2365 = data
  i2364.center = new pc.Vec3( i2365[0], i2365[1], i2365[2] )
  i2364.size = new pc.Vec3( i2365[3], i2365[4], i2365[5] )
  i2364.enabled = !!i2365[6]
  i2364.isTrigger = !!i2365[7]
  request.r(i2365[8], i2365[9], 0, i2364, 'material')
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2367 = data
  i2366.center = new pc.Vec3( i2367[0], i2367[1], i2367[2] )
  i2366.radius = i2367[3]
  i2366.enabled = !!i2367[4]
  i2366.isTrigger = !!i2367[5]
  request.r(i2367[6], i2367[7], 0, i2366, 'material')
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2369 = data
  i2368.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2369[0], i2368.main)
  i2368.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2369[1], i2368.colorBySpeed)
  i2368.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2369[2], i2368.colorOverLifetime)
  i2368.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2369[3], i2368.emission)
  i2368.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2369[4], i2368.rotationBySpeed)
  i2368.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2369[5], i2368.rotationOverLifetime)
  i2368.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2369[6], i2368.shape)
  i2368.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2369[7], i2368.sizeBySpeed)
  i2368.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2369[8], i2368.sizeOverLifetime)
  i2368.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2369[9], i2368.textureSheetAnimation)
  i2368.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2369[10], i2368.velocityOverLifetime)
  i2368.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2369[11], i2368.noise)
  i2368.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2369[12], i2368.inheritVelocity)
  i2368.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2369[13], i2368.forceOverLifetime)
  i2368.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2369[14], i2368.limitVelocityOverLifetime)
  i2368.useAutoRandomSeed = !!i2369[15]
  i2368.randomSeed = i2369[16]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemMain()
  var i2371 = data
  i2370.duration = i2371[0]
  i2370.loop = !!i2371[1]
  i2370.prewarm = !!i2371[2]
  i2370.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[3], i2370.startDelay)
  i2370.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[4], i2370.startLifetime)
  i2370.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[5], i2370.startSpeed)
  i2370.startSize3D = !!i2371[6]
  i2370.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[7], i2370.startSizeX)
  i2370.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[8], i2370.startSizeY)
  i2370.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[9], i2370.startSizeZ)
  i2370.startRotation3D = !!i2371[10]
  i2370.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[11], i2370.startRotationX)
  i2370.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[12], i2370.startRotationY)
  i2370.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[13], i2370.startRotationZ)
  i2370.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2371[14], i2370.startColor)
  i2370.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[15], i2370.gravityModifier)
  i2370.simulationSpace = i2371[16]
  request.r(i2371[17], i2371[18], 0, i2370, 'customSimulationSpace')
  i2370.simulationSpeed = i2371[19]
  i2370.useUnscaledTime = !!i2371[20]
  i2370.scalingMode = i2371[21]
  i2370.playOnAwake = !!i2371[22]
  i2370.maxParticles = i2371[23]
  i2370.emitterVelocityMode = i2371[24]
  i2370.stopAction = i2371[25]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2372 = root || new pc.MinMaxCurve()
  var i2373 = data
  i2372.mode = i2373[0]
  i2372.curveMin = new pc.AnimationCurve( { keys_flow: i2373[1] } )
  i2372.curveMax = new pc.AnimationCurve( { keys_flow: i2373[2] } )
  i2372.curveMultiplier = i2373[3]
  i2372.constantMin = i2373[4]
  i2372.constantMax = i2373[5]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2374 = root || new pc.MinMaxGradient()
  var i2375 = data
  i2374.mode = i2375[0]
  i2374.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2375[1], i2374.gradientMin)
  i2374.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2375[2], i2374.gradientMax)
  i2374.colorMin = new pc.Color(i2375[3], i2375[4], i2375[5], i2375[6])
  i2374.colorMax = new pc.Color(i2375[7], i2375[8], i2375[9], i2375[10])
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2377 = data
  i2376.mode = i2377[0]
  var i2379 = i2377[1]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2379[i + 0]) );
  }
  i2376.colorKeys = i2378
  var i2381 = i2377[2]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2381[i + 0]) );
  }
  i2376.alphaKeys = i2380
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemColorBySpeed()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2383[1], i2382.color)
  i2382.range = new pc.Vec2( i2383[2], i2383[3] )
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2387 = data
  i2386.color = new pc.Color(i2387[0], i2387[1], i2387[2], i2387[3])
  i2386.time = i2387[4]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2391 = data
  i2390.alpha = i2391[0]
  i2390.time = i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemColorOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2393[1], i2392.color)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemEmitter()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.rateOverTime)
  i2394.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.rateOverDistance)
  var i2397 = i2395[3]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2397[i + 0]) );
  }
  i2394.bursts = i2396
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemBurst()
  var i2401 = data
  i2400.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[0], i2400.count)
  i2400.cycleCount = i2401[1]
  i2400.minCount = i2401[2]
  i2400.maxCount = i2401[3]
  i2400.repeatInterval = i2401[4]
  i2400.time = i2401[5]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemRotationBySpeed()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.separateAxes = !!i2403[4]
  i2402.range = new pc.Vec2( i2403[5], i2403[6] )
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[1], i2404.x)
  i2404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[2], i2404.y)
  i2404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[3], i2404.z)
  i2404.separateAxes = !!i2405[4]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemShape()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.shapeType = i2407[1]
  i2406.randomDirectionAmount = i2407[2]
  i2406.sphericalDirectionAmount = i2407[3]
  i2406.randomPositionAmount = i2407[4]
  i2406.alignToDirection = !!i2407[5]
  i2406.radius = i2407[6]
  i2406.radiusMode = i2407[7]
  i2406.radiusSpread = i2407[8]
  i2406.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[9], i2406.radiusSpeed)
  i2406.radiusThickness = i2407[10]
  i2406.angle = i2407[11]
  i2406.length = i2407[12]
  i2406.boxThickness = new pc.Vec3( i2407[13], i2407[14], i2407[15] )
  i2406.meshShapeType = i2407[16]
  request.r(i2407[17], i2407[18], 0, i2406, 'mesh')
  request.r(i2407[19], i2407[20], 0, i2406, 'meshRenderer')
  request.r(i2407[21], i2407[22], 0, i2406, 'skinnedMeshRenderer')
  i2406.useMeshMaterialIndex = !!i2407[23]
  i2406.meshMaterialIndex = i2407[24]
  i2406.useMeshColors = !!i2407[25]
  i2406.normalOffset = i2407[26]
  i2406.arc = i2407[27]
  i2406.arcMode = i2407[28]
  i2406.arcSpread = i2407[29]
  i2406.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[30], i2406.arcSpeed)
  i2406.donutRadius = i2407[31]
  i2406.position = new pc.Vec3( i2407[32], i2407[33], i2407[34] )
  i2406.rotation = new pc.Vec3( i2407[35], i2407[36], i2407[37] )
  i2406.scale = new pc.Vec3( i2407[38], i2407[39], i2407[40] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemSizeBySpeed()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[1], i2408.x)
  i2408.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.y)
  i2408.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.z)
  i2408.separateAxes = !!i2409[4]
  i2408.range = new pc.Vec2( i2409[5], i2409[6] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[1], i2410.x)
  i2410.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.y)
  i2410.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[3], i2410.z)
  i2410.separateAxes = !!i2411[4]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.mode = i2413[1]
  i2412.animation = i2413[2]
  i2412.numTilesX = i2413[3]
  i2412.numTilesY = i2413[4]
  i2412.useRandomRow = !!i2413[5]
  i2412.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[6], i2412.frameOverTime)
  i2412.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[7], i2412.startFrame)
  i2412.cycleCount = i2413[8]
  i2412.rowIndex = i2413[9]
  i2412.flipU = i2413[10]
  i2412.flipV = i2413[11]
  i2412.spriteCount = i2413[12]
  var i2415 = i2413[13]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2412.sprites = i2414
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[1], i2418.x)
  i2418.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[2], i2418.y)
  i2418.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.z)
  i2418.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.radial)
  i2418.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[5], i2418.speedModifier)
  i2418.space = i2419[6]
  i2418.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[7], i2418.orbitalX)
  i2418.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[8], i2418.orbitalY)
  i2418.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[9], i2418.orbitalZ)
  i2418.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[10], i2418.orbitalOffsetX)
  i2418.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[11], i2418.orbitalOffsetY)
  i2418.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[12], i2418.orbitalOffsetZ)
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2420 = root || new pc.ParticleSystemNoise()
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.separateAxes = !!i2421[1]
  i2420.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[2], i2420.strengthX)
  i2420.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[3], i2420.strengthY)
  i2420.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[4], i2420.strengthZ)
  i2420.frequency = i2421[5]
  i2420.damping = !!i2421[6]
  i2420.octaveCount = i2421[7]
  i2420.octaveMultiplier = i2421[8]
  i2420.octaveScale = i2421[9]
  i2420.quality = i2421[10]
  i2420.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[11], i2420.scrollSpeed)
  i2420.scrollSpeedMultiplier = i2421[12]
  i2420.remapEnabled = !!i2421[13]
  i2420.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[14], i2420.remapX)
  i2420.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[15], i2420.remapY)
  i2420.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[16], i2420.remapZ)
  i2420.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[17], i2420.positionAmount)
  i2420.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[18], i2420.rotationAmount)
  i2420.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[19], i2420.sizeAmount)
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemInheritVelocity()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.mode = i2423[1]
  i2422.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[2], i2422.curve)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemForceOverLifetime()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[1], i2424.x)
  i2424.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.y)
  i2424.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[3], i2424.z)
  i2424.space = i2425[4]
  i2424.randomized = !!i2425[5]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2427 = data
  i2426.enabled = !!i2427[0]
  i2426.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[1], i2426.limit)
  i2426.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[2], i2426.limitX)
  i2426.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[3], i2426.limitY)
  i2426.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[4], i2426.limitZ)
  i2426.dampen = i2427[5]
  i2426.separateAxes = !!i2427[6]
  i2426.space = i2427[7]
  i2426.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[8], i2426.drag)
  i2426.multiplyDragByParticleSize = !!i2427[9]
  i2426.multiplyDragByParticleVelocity = !!i2427[10]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'mesh')
  i2428.meshCount = i2429[2]
  i2428.activeVertexStreamsCount = i2429[3]
  i2428.alignment = i2429[4]
  i2428.renderMode = i2429[5]
  i2428.sortMode = i2429[6]
  i2428.lengthScale = i2429[7]
  i2428.velocityScale = i2429[8]
  i2428.cameraVelocityScale = i2429[9]
  i2428.normalDirection = i2429[10]
  i2428.sortingFudge = i2429[11]
  i2428.minParticleSize = i2429[12]
  i2428.maxParticleSize = i2429[13]
  i2428.pivot = new pc.Vec3( i2429[14], i2429[15], i2429[16] )
  request.r(i2429[17], i2429[18], 0, i2428, 'trailMaterial')
  i2428.applyActiveColorSpace = !!i2429[19]
  i2428.enabled = !!i2429[20]
  request.r(i2429[21], i2429[22], 0, i2428, 'sharedMaterial')
  var i2431 = i2429[23]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 2, i2430, '')
  }
  i2428.sharedMaterials = i2430
  i2428.receiveShadows = !!i2429[24]
  i2428.shadowCastingMode = i2429[25]
  i2428.sortingLayerID = i2429[26]
  i2428.sortingOrder = i2429[27]
  i2428.lightmapIndex = i2429[28]
  i2428.lightmapSceneIndex = i2429[29]
  i2428.lightmapScaleOffset = new pc.Vec4( i2429[30], i2429[31], i2429[32], i2429[33] )
  i2428.lightProbeUsage = i2429[34]
  i2428.reflectionProbeUsage = i2429[35]
  return i2428
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i2432 = root || request.c( 'FindMonsterManager' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'database')
  var i2435 = i2433[2]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 1, i2434, '')
  }
  i2432.listRespawn = i2434
  request.r(i2433[3], i2433[4], 0, i2432, 'playerTransform')
  request.r(i2433[5], i2433[6], 0, i2432, 'targetTutorial')
  request.r(i2433[7], i2433[8], 0, i2432, 'arrowTut')
  i2432.guideToNext = !!i2433[9]
  var i2437 = i2433[10]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 1, i2436, '')
  }
  i2432.monsters = i2436
  i2432.playerTouchSize = new pc.Vec3( i2433[11], i2433[12], i2433[13] )
  request.r(i2433[14], i2433[15], 0, i2432, 'hiddenMonsterPanel')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2443 = data
  i2442.textureMode = i2443[0]
  i2442.alignment = i2443[1]
  i2442.widthCurve = new pc.AnimationCurve( { keys_flow: i2443[2] } )
  i2442.colorGradient = i2443[3] ? new pc.ColorGradient(i2443[3][0], i2443[3][1], i2443[3][2]) : null
  var i2445 = i2443[4]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 3) {
    i2444.push( new pc.Vec3( i2445[i + 0], i2445[i + 1], i2445[i + 2] ) );
  }
  i2442.positions = i2444
  i2442.positionCount = i2443[5]
  i2442.widthMultiplier = i2443[6]
  i2442.startWidth = i2443[7]
  i2442.endWidth = i2443[8]
  i2442.numCornerVertices = i2443[9]
  i2442.numCapVertices = i2443[10]
  i2442.useWorldSpace = !!i2443[11]
  i2442.loop = !!i2443[12]
  i2442.startColor = new pc.Color(i2443[13], i2443[14], i2443[15], i2443[16])
  i2442.endColor = new pc.Color(i2443[17], i2443[18], i2443[19], i2443[20])
  i2442.generateLightingData = !!i2443[21]
  i2442.enabled = !!i2443[22]
  request.r(i2443[23], i2443[24], 0, i2442, 'sharedMaterial')
  var i2447 = i2443[25]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 2, i2446, '')
  }
  i2442.sharedMaterials = i2446
  i2442.receiveShadows = !!i2443[26]
  i2442.shadowCastingMode = i2443[27]
  i2442.sortingLayerID = i2443[28]
  i2442.sortingOrder = i2443[29]
  i2442.lightmapIndex = i2443[30]
  i2442.lightmapSceneIndex = i2443[31]
  i2442.lightmapScaleOffset = new pc.Vec4( i2443[32], i2443[33], i2443[34], i2443[35] )
  i2442.lightProbeUsage = i2443[36]
  i2442.reflectionProbeUsage = i2443[37]
  return i2442
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i2450 = root || request.c( 'TurtorialArrow' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'lineRenderer')
  i2450.offset = new pc.Vec3( i2451[2], i2451[3], i2451[4] )
  i2450.planetSegments = i2451[5]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'animatorController')
  request.r(i2453[2], i2453[3], 0, i2452, 'avatar')
  i2452.updateMode = i2453[4]
  i2452.hasTransformHierarchy = !!i2453[5]
  i2452.applyRootMotion = !!i2453[6]
  var i2455 = i2453[7]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2452.humanBones = i2454
  i2452.enabled = !!i2453[8]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2459 = data
  i2458.pivot = new pc.Vec2( i2459[0], i2459[1] )
  i2458.anchorMin = new pc.Vec2( i2459[2], i2459[3] )
  i2458.anchorMax = new pc.Vec2( i2459[4], i2459[5] )
  i2458.sizeDelta = new pc.Vec2( i2459[6], i2459[7] )
  i2458.anchoredPosition3D = new pc.Vec3( i2459[8], i2459[9], i2459[10] )
  i2458.rotation = new pc.Quat(i2459[11], i2459[12], i2459[13], i2459[14])
  i2458.scale = new pc.Vec3( i2459[15], i2459[16], i2459[17] )
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2461 = data
  i2460.planeDistance = i2461[0]
  i2460.referencePixelsPerUnit = i2461[1]
  i2460.isFallbackOverlay = !!i2461[2]
  i2460.renderMode = i2461[3]
  i2460.renderOrder = i2461[4]
  i2460.sortingLayerName = i2461[5]
  i2460.sortingOrder = i2461[6]
  i2460.scaleFactor = i2461[7]
  request.r(i2461[8], i2461[9], 0, i2460, 'worldCamera')
  i2460.overrideSorting = !!i2461[10]
  i2460.pixelPerfect = !!i2461[11]
  i2460.targetDisplay = i2461[12]
  i2460.overridePixelPerfect = !!i2461[13]
  i2460.enabled = !!i2461[14]
  return i2460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2463 = data
  i2462.m_UiScaleMode = i2463[0]
  i2462.m_ReferencePixelsPerUnit = i2463[1]
  i2462.m_ScaleFactor = i2463[2]
  i2462.m_ReferenceResolution = new pc.Vec2( i2463[3], i2463[4] )
  i2462.m_ScreenMatchMode = i2463[5]
  i2462.m_MatchWidthOrHeight = i2463[6]
  i2462.m_PhysicalUnit = i2463[7]
  i2462.m_FallbackScreenDPI = i2463[8]
  i2462.m_DefaultSpriteDPI = i2463[9]
  i2462.m_DynamicPixelsPerUnit = i2463[10]
  i2462.m_PresetInfoIsWorld = !!i2463[11]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2465 = data
  i2464.m_Alpha = i2465[0]
  i2464.m_Interactable = !!i2465[1]
  i2464.m_BlocksRaycasts = !!i2465[2]
  i2464.m_IgnoreParentGroups = !!i2465[3]
  i2464.enabled = !!i2465[4]
  return i2464
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2467 = data
  i2466.m_IgnoreReversedGraphics = !!i2467[0]
  i2466.m_BlockingObjects = i2467[1]
  i2466.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2467[2] )
  return i2466
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i2468 = root || request.c( 'HiddenMonsterPanel' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'icon')
  request.r(i2469[2], i2469[3], 0, i2468, 'nameText')
  request.r(i2469[4], i2469[5], 0, i2468, 'rarityText')
  request.r(i2469[6], i2469[7], 0, i2468, 'card')
  i2468.openSound = request.d('FMAudio', i2469[8], i2468.openSound)
  i2468.autoHide = i2469[9]
  request.r(i2469[10], i2469[11], 0, i2468, 'tutorFinger')
  request.r(i2469[12], i2469[13], 0, i2468, 'popRoot')
  i2468.popDuration = i2469[14]
  return i2468
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i2470 = root || request.c( 'FMAudio' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'clip')
  i2470.channel = i2471[2]
  i2470.volume = i2471[3]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2473 = data
  i2472.cullTransparentMesh = !!i2473[0]
  return i2472
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.Image' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'm_Sprite')
  i2474.m_Type = i2475[2]
  i2474.m_PreserveAspect = !!i2475[3]
  i2474.m_FillCenter = !!i2475[4]
  i2474.m_FillMethod = i2475[5]
  i2474.m_FillAmount = i2475[6]
  i2474.m_FillClockwise = !!i2475[7]
  i2474.m_FillOrigin = i2475[8]
  i2474.m_UseSpriteMesh = !!i2475[9]
  i2474.m_PixelsPerUnitMultiplier = i2475[10]
  request.r(i2475[11], i2475[12], 0, i2474, 'm_Material')
  i2474.m_Maskable = !!i2475[13]
  i2474.m_Color = new pc.Color(i2475[14], i2475[15], i2475[16], i2475[17])
  i2474.m_RaycastTarget = !!i2475[18]
  i2474.m_RaycastPadding = new pc.Vec4( i2475[19], i2475[20], i2475[21], i2475[22] )
  return i2474
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2476 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2477 = data
  i2476.m_hasFontAssetChanged = !!i2477[0]
  request.r(i2477[1], i2477[2], 0, i2476, 'm_baseMaterial')
  i2476.m_maskOffset = new pc.Vec4( i2477[3], i2477[4], i2477[5], i2477[6] )
  i2476.m_text = i2477[7]
  i2476.m_isRightToLeft = !!i2477[8]
  request.r(i2477[9], i2477[10], 0, i2476, 'm_fontAsset')
  request.r(i2477[11], i2477[12], 0, i2476, 'm_sharedMaterial')
  var i2479 = i2477[13]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.m_fontSharedMaterials = i2478
  request.r(i2477[14], i2477[15], 0, i2476, 'm_fontMaterial')
  var i2481 = i2477[16]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2476.m_fontMaterials = i2480
  i2476.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2477[17], i2477[18], i2477[19], i2477[20])
  i2476.m_fontColor = new pc.Color(i2477[21], i2477[22], i2477[23], i2477[24])
  i2476.m_enableVertexGradient = !!i2477[25]
  i2476.m_colorMode = i2477[26]
  i2476.m_fontColorGradient = request.d('TMPro.VertexGradient', i2477[27], i2476.m_fontColorGradient)
  request.r(i2477[28], i2477[29], 0, i2476, 'm_fontColorGradientPreset')
  request.r(i2477[30], i2477[31], 0, i2476, 'm_spriteAsset')
  i2476.m_tintAllSprites = !!i2477[32]
  request.r(i2477[33], i2477[34], 0, i2476, 'm_StyleSheet')
  i2476.m_TextStyleHashCode = i2477[35]
  i2476.m_overrideHtmlColors = !!i2477[36]
  i2476.m_faceColor = UnityEngine.Color32.ConstructColor(i2477[37], i2477[38], i2477[39], i2477[40])
  i2476.m_fontSize = i2477[41]
  i2476.m_fontSizeBase = i2477[42]
  i2476.m_fontWeight = i2477[43]
  i2476.m_enableAutoSizing = !!i2477[44]
  i2476.m_fontSizeMin = i2477[45]
  i2476.m_fontSizeMax = i2477[46]
  i2476.m_fontStyle = i2477[47]
  i2476.m_HorizontalAlignment = i2477[48]
  i2476.m_VerticalAlignment = i2477[49]
  i2476.m_textAlignment = i2477[50]
  i2476.m_characterSpacing = i2477[51]
  i2476.m_characterHorizontalScale = i2477[52]
  i2476.m_wordSpacing = i2477[53]
  i2476.m_lineSpacing = i2477[54]
  i2476.m_lineSpacingMax = i2477[55]
  i2476.m_paragraphSpacing = i2477[56]
  i2476.m_charWidthMaxAdj = i2477[57]
  i2476.m_TextWrappingMode = i2477[58]
  i2476.m_wordWrappingRatios = i2477[59]
  i2476.m_overflowMode = i2477[60]
  request.r(i2477[61], i2477[62], 0, i2476, 'm_linkedTextComponent')
  request.r(i2477[63], i2477[64], 0, i2476, 'parentLinkedComponent')
  i2476.m_enableKerning = !!i2477[65]
  var i2483 = i2477[66]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(i2483[i + 0]);
  }
  i2476.m_ActiveFontFeatures = i2482
  i2476.m_enableExtraPadding = !!i2477[67]
  i2476.checkPaddingRequired = !!i2477[68]
  i2476.m_isRichText = !!i2477[69]
  i2476.m_parseCtrlCharacters = !!i2477[70]
  i2476.m_isOrthographic = !!i2477[71]
  i2476.m_isCullingEnabled = !!i2477[72]
  i2476.m_horizontalMapping = i2477[73]
  i2476.m_verticalMapping = i2477[74]
  i2476.m_uvLineOffset = i2477[75]
  i2476.m_geometrySortingOrder = i2477[76]
  i2476.m_IsTextObjectScaleStatic = !!i2477[77]
  i2476.m_VertexBufferAutoSizeReduction = !!i2477[78]
  i2476.m_useMaxVisibleDescender = !!i2477[79]
  i2476.m_pageToDisplay = i2477[80]
  i2476.m_margin = new pc.Vec4( i2477[81], i2477[82], i2477[83], i2477[84] )
  i2476.m_isUsingLegacyAnimationComponent = !!i2477[85]
  i2476.m_isVolumetricText = !!i2477[86]
  request.r(i2477[87], i2477[88], 0, i2476, 'm_Material')
  i2476.m_EmojiFallbackSupport = !!i2477[89]
  i2476.m_Maskable = !!i2477[90]
  i2476.m_Color = new pc.Color(i2477[91], i2477[92], i2477[93], i2477[94])
  i2476.m_RaycastTarget = !!i2477[95]
  i2476.m_RaycastPadding = new pc.Vec4( i2477[96], i2477[97], i2477[98], i2477[99] )
  return i2476
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.VertexGradient' )
  var i2485 = data
  i2484.topLeft = new pc.Color(i2485[0], i2485[1], i2485[2], i2485[3])
  i2484.topRight = new pc.Color(i2485[4], i2485[5], i2485[6], i2485[7])
  i2484.bottomLeft = new pc.Color(i2485[8], i2485[9], i2485[10], i2485[11])
  i2484.bottomRight = new pc.Color(i2485[12], i2485[13], i2485[14], i2485[15])
  return i2484
}

Deserializers["UIRays"] = function (request, data, root) {
  var i2488 = root || request.c( 'UIRays' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 2, i2490, '')
  }
  i2488.rays = i2490
  i2488.lifetime = i2489[1]
  i2488.rate = i2489[2]
  i2488.startScale = i2489[3]
  i2488.maxAlpha = i2489[4]
  return i2488
}

Deserializers["GameButton"] = function (request, data, root) {
  var i2494 = root || request.c( 'GameButton' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'background')
  request.r(i2495[2], i2495[3], 0, i2494, 'icon')
  request.r(i2495[4], i2495[5], 0, i2494, 'title')
  i2494.scale = new pc.Vec3( i2495[6], i2495[7], i2495[8] )
  i2494.pressAudio = request.d('FMAudio', i2495[9], i2494.pressAudio)
  i2494.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2495[10], i2494.m_OnClick)
  i2494.m_Navigation = request.d('UnityEngine.UI.Navigation', i2495[11], i2494.m_Navigation)
  i2494.m_Transition = i2495[12]
  i2494.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2495[13], i2494.m_Colors)
  i2494.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2495[14], i2494.m_SpriteState)
  i2494.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2495[15], i2494.m_AnimationTriggers)
  i2494.m_Interactable = !!i2495[16]
  request.r(i2495[17], i2495[18], 0, i2494, 'm_TargetGraphic')
  return i2494
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2497 = data
  i2496.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2497[0], i2496.m_PersistentCalls)
  return i2496
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2499 = data
  var i2501 = i2499[0]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('UnityEngine.Events.PersistentCall', i2501[i + 0]));
  }
  i2498.m_Calls = i2500
  return i2498
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'm_Target')
  i2504.m_TargetAssemblyTypeName = i2505[2]
  i2504.m_MethodName = i2505[3]
  i2504.m_Mode = i2505[4]
  i2504.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2505[5], i2504.m_Arguments)
  i2504.m_CallState = i2505[6]
  return i2504
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'm_ObjectArgument')
  i2506.m_ObjectArgumentAssemblyTypeName = i2507[2]
  i2506.m_IntArgument = i2507[3]
  i2506.m_FloatArgument = i2507[4]
  i2506.m_StringArgument = i2507[5]
  i2506.m_BoolArgument = !!i2507[6]
  return i2506
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2509 = data
  i2508.m_Mode = i2509[0]
  i2508.m_WrapAround = !!i2509[1]
  request.r(i2509[2], i2509[3], 0, i2508, 'm_SelectOnUp')
  request.r(i2509[4], i2509[5], 0, i2508, 'm_SelectOnDown')
  request.r(i2509[6], i2509[7], 0, i2508, 'm_SelectOnLeft')
  request.r(i2509[8], i2509[9], 0, i2508, 'm_SelectOnRight')
  return i2508
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2511 = data
  i2510.m_NormalColor = new pc.Color(i2511[0], i2511[1], i2511[2], i2511[3])
  i2510.m_HighlightedColor = new pc.Color(i2511[4], i2511[5], i2511[6], i2511[7])
  i2510.m_PressedColor = new pc.Color(i2511[8], i2511[9], i2511[10], i2511[11])
  i2510.m_SelectedColor = new pc.Color(i2511[12], i2511[13], i2511[14], i2511[15])
  i2510.m_DisabledColor = new pc.Color(i2511[16], i2511[17], i2511[18], i2511[19])
  i2510.m_ColorMultiplier = i2511[20]
  i2510.m_FadeDuration = i2511[21]
  return i2510
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'm_HighlightedSprite')
  request.r(i2513[2], i2513[3], 0, i2512, 'm_PressedSprite')
  request.r(i2513[4], i2513[5], 0, i2512, 'm_SelectedSprite')
  request.r(i2513[6], i2513[7], 0, i2512, 'm_DisabledSprite')
  return i2512
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2515 = data
  i2514.m_NormalTrigger = i2515[0]
  i2514.m_HighlightedTrigger = i2515[1]
  i2514.m_PressedTrigger = i2515[2]
  i2514.m_SelectedTrigger = i2515[3]
  i2514.m_DisabledTrigger = i2515[4]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.atlasId = i2517[1]
  i2516.mipmapCount = i2517[2]
  i2516.hdr = !!i2517[3]
  i2516.size = i2517[4]
  i2516.anisoLevel = i2517[5]
  i2516.filterMode = i2517[6]
  var i2519 = i2517[7]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 4) {
    i2518.push( UnityEngine.Rect.MinMaxRect(i2519[i + 0], i2519[i + 1], i2519[i + 2], i2519[i + 3]) );
  }
  i2516.rects = i2518
  i2516.wrapU = i2517[8]
  i2516.wrapV = i2517[9]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.index = i2523[1]
  i2522.startup = !!i2523[2]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2525 = data
  i2524.type = i2525[0]
  i2524.color = new pc.Color(i2525[1], i2525[2], i2525[3], i2525[4])
  i2524.cullingMask = i2525[5]
  i2524.intensity = i2525[6]
  i2524.range = i2525[7]
  i2524.spotAngle = i2525[8]
  i2524.shadows = i2525[9]
  i2524.shadowNormalBias = i2525[10]
  i2524.shadowBias = i2525[11]
  i2524.shadowStrength = i2525[12]
  i2524.shadowResolution = i2525[13]
  i2524.lightmapBakeType = i2525[14]
  i2524.renderMode = i2525[15]
  request.r(i2525[16], i2525[17], 0, i2524, 'cookie')
  i2524.cookieSize = i2525[18]
  i2524.shadowNearPlane = i2525[19]
  i2524.occlusionMaskChannel = i2525[20]
  i2524.isBaked = !!i2525[21]
  i2524.mixedLightingMode = i2525[22]
  i2524.enabled = !!i2525[23]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2527 = data
  i2526.aspect = i2527[0]
  i2526.orthographic = !!i2527[1]
  i2526.orthographicSize = i2527[2]
  i2526.backgroundColor = new pc.Color(i2527[3], i2527[4], i2527[5], i2527[6])
  i2526.nearClipPlane = i2527[7]
  i2526.farClipPlane = i2527[8]
  i2526.fieldOfView = i2527[9]
  i2526.depth = i2527[10]
  i2526.clearFlags = i2527[11]
  i2526.cullingMask = i2527[12]
  i2526.rect = i2527[13]
  request.r(i2527[14], i2527[15], 0, i2526, 'targetTexture')
  i2526.usePhysicalProperties = !!i2527[16]
  i2526.focalLength = i2527[17]
  i2526.sensorSize = new pc.Vec2( i2527[18], i2527[19] )
  i2526.lensShift = new pc.Vec2( i2527[20], i2527[21] )
  i2526.gateFit = i2527[22]
  i2526.commandBufferCount = i2527[23]
  i2526.cameraType = i2527[24]
  i2526.enabled = !!i2527[25]
  return i2526
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i2528 = root || request.c( 'ScreenDeltaInputSystem' )
  var i2529 = data
  return i2528
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i2530 = root || request.c( 'MonsterProgressBar' )
  var i2531 = data
  i2530.countSceneMonsters = !!i2531[0]
  i2530.startFound = i2531[1]
  i2530.total = i2531[2]
  request.r(i2531[3], i2531[4], 0, i2530, 'fill')
  request.r(i2531[5], i2531[6], 0, i2530, 'countText')
  request.r(i2531[7], i2531[8], 0, i2530, 'icon')
  i2530.fillSpeed = i2531[9]
  return i2530
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i2532 = root || request.c( 'StoryTextView' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'label')
  i2532.popDuration = i2533[2]
  i2532.pulseAmount = i2533[3]
  i2532.pulseSpeed = i2533[4]
  i2532.fadeDuration = i2533[5]
  return i2532
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.UI.Button' )
  var i2535 = data
  i2534.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2535[0], i2534.m_OnClick)
  i2534.m_Navigation = request.d('UnityEngine.UI.Navigation', i2535[1], i2534.m_Navigation)
  i2534.m_Transition = i2535[2]
  i2534.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2535[3], i2534.m_Colors)
  i2534.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2535[4], i2534.m_SpriteState)
  i2534.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2535[5], i2534.m_AnimationTriggers)
  i2534.m_Interactable = !!i2535[6]
  request.r(i2535[7], i2535[8], 0, i2534, 'm_TargetGraphic')
  return i2534
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2536 = root || request.c( 'JumpButton' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'character')
  return i2536
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i2538 = root || request.c( 'PlayableJoystick' )
  var i2539 = data
  i2538.handleRange = i2539[0]
  i2538.deadZone = i2539[1]
  i2538.floating = !!i2539[2]
  request.r(i2539[3], i2539[4], 0, i2538, 'background')
  request.r(i2539[5], i2539[6], 0, i2538, 'knob')
  return i2538
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i2540 = root || request.c( 'FMCharacter' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'planetTransform')
  request.r(i2541[2], i2541[3], 0, i2540, 'animator')
  request.r(i2541[4], i2541[5], 0, i2540, 'joystick')
  i2540._rotationRate = i2541[6]
  i2540._maxWalkSpeed = i2541[7]
  i2540._maxAcceleration = i2541[8]
  i2540._brakingDecelerationWalking = i2541[9]
  i2540._airControl = i2541[10]
  i2540._jumpImpulse = i2541[11]
  i2540._gravity = new pc.Vec3( i2541[12], i2541[13], i2541[14] )
  i2540._gravityScale = i2541[15]
  request.r(i2541[16], i2541[17], 0, i2540, '_camera')
  i2540.jumpSound = request.d('FMAudio', i2541[18], i2540.jumpSound)
  i2540.stepHeight = i2541[19]
  return i2540
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i2542 = root || request.c( 'FM3rdInput' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'followTarget')
  i2542.followDistance = i2543[2]
  i2542.followMinDistance = i2543[3]
  i2542.followMaxDistance = i2543[4]
  i2542.maxPitch = i2543[5]
  i2542.minPitch = i2543[6]
  i2542.invertLook = !!i2543[7]
  i2542.lookSensitivity = new pc.Vec2( i2543[8], i2543[9] )
  request.r(i2543[10], i2543[11], 0, i2542, 'planetTransform')
  i2542.cameraDistance = i2543[12]
  i2542.cameraRadius = i2543[13]
  i2542.cameraReturnSpeed = i2543[14]
  request.r(i2543[15], i2543[16], 0, i2542, 'cam')
  request.r(i2543[17], i2543[18], 0, i2542, 'lookArea')
  i2542.extraRoll = i2543[19]
  i2542.autoReturnDelay = i2543[20]
  i2542.autoReturnSpeed = i2543[21]
  i2542.defaultPitch = i2543[22]
  i2542.enableAutoReturn = !!i2543[23]
  i2542.forwardSpeedMultiplier = i2543[24]
  i2542.backwardSpeedMultiplier = i2543[25]
  return i2542
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i2544 = root || request.c( 'FindMonsterPlayerControl' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'playerSO')
  request.r(i2545[2], i2545[3], 0, i2544, 'playerBase')
  request.r(i2545[4], i2545[5], 0, i2544, 'morphRoot')
  request.r(i2545[6], i2545[7], 0, i2544, 'poopFx')
  request.r(i2545[8], i2545[9], 0, i2544, 'poopRoot')
  request.r(i2545[10], i2545[11], 0, i2544, 'trailSpeed')
  i2544.popSound = request.d('FMAudio', i2545[12], i2544.popSound)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2547 = data
  i2546.enabled = !!i2547[0]
  i2546.center = new pc.Vec3( i2547[1], i2547[2], i2547[3] )
  i2546.radius = i2547[4]
  i2546.height = i2547[5]
  i2546.minMoveDistance = i2547[6]
  i2546.skinWidth = i2547[7]
  i2546.enableOverlapRecovery = !!i2547[8]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'sharedMesh')
  var i2551 = i2549[2]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 2) {
  request.r(i2551[i + 0], i2551[i + 1], 2, i2550, '')
  }
  i2548.bones = i2550
  i2548.updateWhenOffscreen = !!i2549[3]
  i2548.localBounds = i2549[4]
  request.r(i2549[5], i2549[6], 0, i2548, 'rootBone')
  var i2553 = i2549[7]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2553[i + 0]) );
  }
  i2548.blendShapesWeights = i2552
  i2548.enabled = !!i2549[8]
  request.r(i2549[9], i2549[10], 0, i2548, 'sharedMaterial')
  var i2555 = i2549[11]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2548.sharedMaterials = i2554
  i2548.receiveShadows = !!i2549[12]
  i2548.shadowCastingMode = i2549[13]
  i2548.sortingLayerID = i2549[14]
  i2548.sortingOrder = i2549[15]
  i2548.lightmapIndex = i2549[16]
  i2548.lightmapSceneIndex = i2549[17]
  i2548.lightmapScaleOffset = new pc.Vec4( i2549[18], i2549[19], i2549[20], i2549[21] )
  i2548.lightProbeUsage = i2549[22]
  i2548.reflectionProbeUsage = i2549[23]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2559 = data
  i2558.weight = i2559[0]
  return i2558
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i2560 = root || request.c( 'CharacterFootstep' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'ecmCharacter')
  i2560.audioSource = request.d('FMAudio', i2561[2], i2560.audioSource)
  i2560.speed = i2561[3]
  return i2560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'm_FirstSelected')
  i2562.m_sendNavigationEvents = !!i2563[2]
  i2562.m_DragThreshold = i2563[3]
  return i2562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2565 = data
  i2564.m_HorizontalAxis = i2565[0]
  i2564.m_VerticalAxis = i2565[1]
  i2564.m_SubmitButton = i2565[2]
  i2564.m_CancelButton = i2565[3]
  i2564.m_InputActionsPerSecond = i2565[4]
  i2564.m_RepeatDelay = i2565[5]
  i2564.m_ForceModuleActive = !!i2565[6]
  i2564.m_SendPointerHoverToParent = !!i2565[7]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'clip')
  request.r(i2567[2], i2567[3], 0, i2566, 'outputAudioMixerGroup')
  i2566.playOnAwake = !!i2567[4]
  i2566.loop = !!i2567[5]
  i2566.time = i2567[6]
  i2566.volume = i2567[7]
  i2566.pitch = i2567[8]
  i2566.enabled = !!i2567[9]
  return i2566
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i2568 = root || request.c( 'PlayableAudio' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'source')
  request.r(i2569[2], i2569[3], 0, i2568, 'buttonClick')
  return i2568
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2570 = root || request.c( 'LunaController' )
  var i2571 = data
  i2570.LimitTimePlay = !!i2571[0]
  i2570.TimePlay = i2571[1]
  i2570.TypeMorph1 = i2571[2]
  i2570.TypeMorph2 = i2571[3]
  i2570.LimitClick = !!i2571[4]
  i2570.MaxClick = i2571[5]
  request.r(i2571[6], i2571[7], 0, i2570, 'BGM')
  request.r(i2571[8], i2571[9], 0, i2570, 'musicSource')
  i2570.musicVolume = i2571[10]
  var i2573 = i2571[11]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2570.CTA = i2572
  request.r(i2571[12], i2571[13], 0, i2570, 'endUI')
  request.r(i2571[14], i2571[15], 0, i2570, 'endCard')
  return i2570
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i2576 = root || request.c( 'ControlsTutorial' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'player')
  request.r(i2577[2], i2577[3], 0, i2576, 'look')
  request.r(i2577[4], i2577[5], 0, i2576, 'hand')
  request.r(i2577[6], i2577[7], 0, i2576, 'text')
  request.r(i2577[8], i2577[9], 0, i2576, 'viewFrom')
  request.r(i2577[10], i2577[11], 0, i2576, 'viewTo')
  request.r(i2577[12], i2577[13], 0, i2576, 'joystickRing')
  request.r(i2577[14], i2577[15], 0, i2576, 'jumpButton')
  i2576.viewText = i2577[16]
  i2576.moveText = i2577[17]
  i2576.jumpText = i2577[18]
  i2576.lookDegrees = i2577[19]
  i2576.moveDistance = i2577[20]
  i2576.jumps = i2577[21]
  i2576.jumpStep = !!i2577[22]
  i2576.startDelay = i2577[23]
  i2576.stepGap = i2577[24]
  i2576.swipeDuration = i2577[25]
  i2576.joystickSwipe = i2577[26]
  return i2576
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i2578 = root || request.c( 'HiddenMonster' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'checkMark')
  request.r(i2579[2], i2579[3], 0, i2578, 'claimFx')
  return i2578
}

Deserializers["Billboard"] = function (request, data, root) {
  var i2580 = root || request.c( 'Billboard' )
  var i2581 = data
  i2580.distanceToBillborad = i2581[0]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2583 = data
  i2582.color = new pc.Color(i2583[0], i2583[1], i2583[2], i2583[3])
  request.r(i2583[4], i2583[5], 0, i2582, 'sprite')
  i2582.flipX = !!i2583[6]
  i2582.flipY = !!i2583[7]
  i2582.drawMode = i2583[8]
  i2582.size = new pc.Vec2( i2583[9], i2583[10] )
  i2582.tileMode = i2583[11]
  i2582.adaptiveModeThreshold = i2583[12]
  i2582.maskInteraction = i2583[13]
  i2582.spriteSortPoint = i2583[14]
  i2582.enabled = !!i2583[15]
  request.r(i2583[16], i2583[17], 0, i2582, 'sharedMaterial')
  var i2585 = i2583[18]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 2, i2584, '')
  }
  i2582.sharedMaterials = i2584
  i2582.receiveShadows = !!i2583[19]
  i2582.shadowCastingMode = i2583[20]
  i2582.sortingLayerID = i2583[21]
  i2582.sortingOrder = i2583[22]
  i2582.lightmapIndex = i2583[23]
  i2582.lightmapSceneIndex = i2583[24]
  i2582.lightmapScaleOffset = new pc.Vec4( i2583[25], i2583[26], i2583[27], i2583[28] )
  i2582.lightProbeUsage = i2583[29]
  i2582.reflectionProbeUsage = i2583[30]
  return i2582
}

Deserializers["MorphUnlockedPanel"] = function (request, data, root) {
  var i2586 = root || request.c( 'MorphUnlockedPanel' )
  var i2587 = data
  var i2589 = i2587[0]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('MorphUnlockedPanel+Card', i2589[i + 0]) );
  }
  i2586.cards = i2588
  request.r(i2587[1], i2587[2], 0, i2586, 'popRoot')
  i2586.popDuration = i2587[3]
  return i2586
}

Deserializers["MorphUnlockedPanel+Card"] = function (request, data, root) {
  var i2592 = root || request.c( 'MorphUnlockedPanel+Card' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'background')
  request.r(i2593[2], i2593[3], 0, i2592, 'icon')
  request.r(i2593[4], i2593[5], 0, i2592, 'nameText')
  request.r(i2593[6], i2593[7], 0, i2592, 'rarityText')
  return i2592
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i2594 = root || request.c( 'MorphHuntStory' )
  var i2595 = data
  request.r(i2595[0], i2595[1], 0, i2594, 'player')
  request.r(i2595[2], i2595[3], 0, i2594, 'look')
  var i2597 = i2595[4]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2594.morphs = i2596
  var i2599 = i2595[5]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2594.morphOptions = i2598
  request.r(i2595[6], i2595[7], 0, i2594, 'startLookAt')
  i2594.startPitch = i2595[8]
  request.r(i2595[9], i2595[10], 0, i2594, 'hand')
  i2594.handOffset = new pc.Vec3( i2595[11], i2595[12], i2595[13] )
  request.r(i2595[14], i2595[15], 0, i2594, 'storyText')
  request.r(i2595[16], i2595[17], 0, i2594, 'unlockText')
  request.r(i2595[18], i2595[19], 0, i2594, 'shine')
  request.r(i2595[20], i2595[21], 0, i2594, 'finalPanel')
  i2594.introText = i2595[22]
  i2594.unlockedFormat = i2595[23]
  i2594.oneMoreText = i2595[24]
  i2594.introDelay = i2595[25]
  i2594.handHideDistance = i2595[26]
  i2594.cameraTurnDuration = i2595[27]
  i2594.finalDuration = i2595[28]
  return i2594
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i2604 = root || request.c( 'ScaleYoyo' )
  var i2605 = data
  i2604.delay = i2605[0]
  i2604.duration = i2605[1]
  i2604.easeType = i2605[2]
  i2604.loops = i2605[3]
  i2604.loopType = i2605[4]
  i2604.animationType = i2605[5]
  i2604.endValueV3 = new pc.Vec3( i2605[6], i2605[7], i2605[8] )
  i2604.isRelative = !!i2605[9]
  i2604.autoPlay = !!i2605[10]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2607 = data
  i2606.ambientIntensity = i2607[0]
  i2606.reflectionIntensity = i2607[1]
  i2606.ambientMode = i2607[2]
  i2606.ambientLight = new pc.Color(i2607[3], i2607[4], i2607[5], i2607[6])
  i2606.ambientSkyColor = new pc.Color(i2607[7], i2607[8], i2607[9], i2607[10])
  i2606.ambientGroundColor = new pc.Color(i2607[11], i2607[12], i2607[13], i2607[14])
  i2606.ambientEquatorColor = new pc.Color(i2607[15], i2607[16], i2607[17], i2607[18])
  i2606.fogColor = new pc.Color(i2607[19], i2607[20], i2607[21], i2607[22])
  i2606.fogEndDistance = i2607[23]
  i2606.fogStartDistance = i2607[24]
  i2606.fogDensity = i2607[25]
  i2606.fog = !!i2607[26]
  request.r(i2607[27], i2607[28], 0, i2606, 'skybox')
  i2606.fogMode = i2607[29]
  var i2609 = i2607[30]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2609[i + 0]) );
  }
  i2606.lightmaps = i2608
  i2606.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2607[31], i2606.lightProbes)
  i2606.lightmapsMode = i2607[32]
  i2606.mixedBakeMode = i2607[33]
  i2606.environmentLightingMode = i2607[34]
  i2606.ambientProbe = new pc.SphericalHarmonicsL2(i2607[35])
  request.r(i2607[36], i2607[37], 0, i2606, 'customReflection')
  request.r(i2607[38], i2607[39], 0, i2606, 'defaultReflection')
  i2606.defaultReflectionMode = i2607[40]
  i2606.defaultReflectionResolution = i2607[41]
  i2606.sunLightObjectId = i2607[42]
  i2606.pixelLightCount = i2607[43]
  i2606.defaultReflectionHDR = !!i2607[44]
  i2606.hasLightDataAsset = !!i2607[45]
  i2606.hasManualGenerate = !!i2607[46]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'lightmapColor')
  request.r(i2613[2], i2613[3], 0, i2612, 'lightmapDirection')
  request.r(i2613[4], i2613[5], 0, i2612, 'shadowMask')
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2614 = root || new UnityEngine.LightProbes()
  var i2615 = data
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2621 = data
  var i2623 = i2621[0]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2623[i + 0]));
  }
  i2620.ShaderCompilationErrors = i2622
  i2620.name = i2621[1]
  i2620.guid = i2621[2]
  var i2625 = i2621[3]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2620.shaderDefinedKeywords = i2624
  var i2627 = i2621[4]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2627[i + 0]) );
  }
  i2620.passes = i2626
  var i2629 = i2621[5]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2629[i + 0]) );
  }
  i2620.usePasses = i2628
  var i2631 = i2621[6]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2631[i + 0]) );
  }
  i2620.defaultParameterValues = i2630
  request.r(i2621[7], i2621[8], 0, i2620, 'unityFallbackShader')
  i2620.readDepth = !!i2621[9]
  i2620.hasDepthOnlyPass = !!i2621[10]
  i2620.isCreatedByShaderGraph = !!i2621[11]
  i2620.disableBatching = !!i2621[12]
  i2620.compiled = !!i2621[13]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2635 = data
  i2634.shaderName = i2635[0]
  i2634.errorMessage = i2635[1]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2640 = root || new pc.UnityShaderPass()
  var i2641 = data
  i2640.id = i2641[0]
  i2640.subShaderIndex = i2641[1]
  i2640.name = i2641[2]
  i2640.passType = i2641[3]
  i2640.grabPassTextureName = i2641[4]
  i2640.usePass = !!i2641[5]
  i2640.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[6], i2640.zTest)
  i2640.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[7], i2640.zWrite)
  i2640.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[8], i2640.culling)
  i2640.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2641[9], i2640.blending)
  i2640.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2641[10], i2640.alphaBlending)
  i2640.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[11], i2640.colorWriteMask)
  i2640.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[12], i2640.offsetUnits)
  i2640.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[13], i2640.offsetFactor)
  i2640.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[14], i2640.stencilRef)
  i2640.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[15], i2640.stencilReadMask)
  i2640.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2641[16], i2640.stencilWriteMask)
  i2640.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2641[17], i2640.stencilOp)
  i2640.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2641[18], i2640.stencilOpFront)
  i2640.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2641[19], i2640.stencilOpBack)
  var i2643 = i2641[20]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2643[i + 0]) );
  }
  i2640.tags = i2642
  var i2645 = i2641[21]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( i2645[i + 0] );
  }
  i2640.passDefinedKeywords = i2644
  var i2647 = i2641[22]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2647[i + 0]) );
  }
  i2640.passDefinedKeywordGroups = i2646
  var i2649 = i2641[23]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2649[i + 0]) );
  }
  i2640.variants = i2648
  var i2651 = i2641[24]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2651[i + 0]) );
  }
  i2640.excludedVariants = i2650
  i2640.hasDepthReader = !!i2641[25]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2653 = data
  i2652.val = i2653[0]
  i2652.name = i2653[1]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2655 = data
  i2654.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2655[0], i2654.src)
  i2654.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2655[1], i2654.dst)
  i2654.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2655[2], i2654.op)
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2657 = data
  i2656.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2657[0], i2656.pass)
  i2656.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2657[1], i2656.fail)
  i2656.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2657[2], i2656.zFail)
  i2656.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2657[3], i2656.comp)
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2661 = data
  i2660.name = i2661[0]
  i2660.value = i2661[1]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( i2667[i + 0] );
  }
  i2664.keywords = i2666
  i2664.hasDiscard = !!i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2671 = data
  i2670.passId = i2671[0]
  i2670.subShaderIndex = i2671[1]
  var i2673 = i2671[2]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( i2673[i + 0] );
  }
  i2670.keywords = i2672
  i2670.vertexProgram = i2671[3]
  i2670.fragmentProgram = i2671[4]
  i2670.exportedForWebGl2 = !!i2671[5]
  i2670.readDepth = !!i2671[6]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2677 = data
  request.r(i2677[0], i2677[1], 0, i2676, 'shader')
  i2676.pass = i2677[2]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2681 = data
  i2680.name = i2681[0]
  i2680.type = i2681[1]
  i2680.value = new pc.Vec4( i2681[2], i2681[3], i2681[4], i2681[5] )
  i2680.textureValue = i2681[6]
  i2680.shaderPropertyFlag = i2681[7]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2683 = data
  i2682.name = i2683[0]
  request.r(i2683[1], i2683[2], 0, i2682, 'texture')
  i2682.aabb = i2683[3]
  i2682.vertices = i2683[4]
  i2682.triangles = i2683[5]
  i2682.textureRect = UnityEngine.Rect.MinMaxRect(i2683[6], i2683[7], i2683[8], i2683[9])
  i2682.packedRect = UnityEngine.Rect.MinMaxRect(i2683[10], i2683[11], i2683[12], i2683[13])
  i2682.border = new pc.Vec4( i2683[14], i2683[15], i2683[16], i2683[17] )
  i2682.transparency = i2683[18]
  i2682.bounds = i2683[19]
  i2682.pixelsPerUnit = i2683[20]
  i2682.textureWidth = i2683[21]
  i2682.textureHeight = i2683[22]
  i2682.nativeSize = new pc.Vec2( i2683[23], i2683[24] )
  i2682.pivot = new pc.Vec2( i2683[25], i2683[26] )
  i2682.textureRectOffset = new pc.Vec2( i2683[27], i2683[28] )
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2685 = data
  i2684.name = i2685[0]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.wrapMode = i2687[1]
  i2686.isLooping = !!i2687[2]
  i2686.length = i2687[3]
  var i2689 = i2687[4]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2689[i + 0]) );
  }
  i2686.curves = i2688
  var i2691 = i2687[5]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2691[i + 0]) );
  }
  i2686.events = i2690
  i2686.halfPrecision = !!i2687[6]
  i2686._frameRate = i2687[7]
  i2686.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2687[8], i2686.localBounds)
  i2686.hasMuscleCurves = !!i2687[9]
  var i2693 = i2687[10]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( i2693[i + 0] );
  }
  i2686.clipMuscleConstant = i2692
  i2686.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2687[11], i2686.clipBindingConstant)
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2697 = data
  i2696.path = i2697[0]
  i2696.hash = i2697[1]
  i2696.componentType = i2697[2]
  i2696.property = i2697[3]
  i2696.keys = i2697[4]
  var i2699 = i2697[5]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2699[i + 0]) );
  }
  i2696.objectReferenceKeys = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2703 = data
  i2702.time = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, 'value')
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2707 = data
  i2706.functionName = i2707[0]
  i2706.floatParameter = i2707[1]
  i2706.intParameter = i2707[2]
  i2706.stringParameter = i2707[3]
  request.r(i2707[4], i2707[5], 0, i2706, 'objectReferenceParameter')
  i2706.time = i2707[6]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2709 = data
  i2708.center = new pc.Vec3( i2709[0], i2709[1], i2709[2] )
  i2708.extends = new pc.Vec3( i2709[3], i2709[4], i2709[5] )
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2712.genericBindings = i2714
  var i2717 = i2713[1]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( i2717[i + 0] );
  }
  i2712.pptrCurveMapping = i2716
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.blendParameter = i2719[1]
  i2718.blendParameterY = i2719[2]
  i2718.blendType = i2719[3]
  var i2721 = i2719[4]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2721[i + 0]) );
  }
  i2718.children = i2720
  i2718.useAutomaticThresholds = !!i2719[5]
  i2718.minThreshold = i2719[6]
  i2718.maxThreshold = i2719[7]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'motion')
  i2724.threshold = i2725[2]
  i2724.position = new pc.Vec2( i2725[3], i2725[4] )
  i2724.timeScale = i2725[5]
  i2724.cycleOffset = i2725[6]
  i2724.directBlendParameter = i2725[7]
  i2724.mirror = !!i2725[8]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2727 = data
  i2726.name = i2727[0]
  var i2729 = i2727[1]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2729[i + 0]) );
  }
  i2726.layers = i2728
  var i2731 = i2727[2]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2731[i + 0]) );
  }
  i2726.parameters = i2730
  i2726.animationClips = i2727[3]
  i2726.avatarUnsupported = i2727[4]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.defaultWeight = i2735[1]
  i2734.blendingMode = i2735[2]
  i2734.avatarMask = i2735[3]
  i2734.syncedLayerIndex = i2735[4]
  i2734.syncedLayerAffectsTiming = !!i2735[5]
  i2734.syncedLayers = i2735[6]
  i2734.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2735[7], i2734.stateMachine)
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2737 = data
  i2736.id = i2737[0]
  i2736.name = i2737[1]
  i2736.path = i2737[2]
  var i2739 = i2737[3]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2739[i + 0]) );
  }
  i2736.states = i2738
  var i2741 = i2737[4]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2741[i + 0]) );
  }
  i2736.machines = i2740
  var i2743 = i2737[5]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2743[i + 0]) );
  }
  i2736.entryStateTransitions = i2742
  var i2745 = i2737[6]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2745[i + 0]) );
  }
  i2736.exitStateTransitions = i2744
  var i2747 = i2737[7]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2747[i + 0]) );
  }
  i2736.anyStateTransitions = i2746
  i2736.defaultStateId = i2737[8]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2751 = data
  i2750.id = i2751[0]
  i2750.name = i2751[1]
  i2750.cycleOffset = i2751[2]
  i2750.cycleOffsetParameter = i2751[3]
  i2750.cycleOffsetParameterActive = !!i2751[4]
  i2750.mirror = !!i2751[5]
  i2750.mirrorParameter = i2751[6]
  i2750.mirrorParameterActive = !!i2751[7]
  i2750.motionId = i2751[8]
  i2750.nameHash = i2751[9]
  i2750.fullPathHash = i2751[10]
  i2750.speed = i2751[11]
  i2750.speedParameter = i2751[12]
  i2750.speedParameterActive = !!i2751[13]
  i2750.tag = i2751[14]
  i2750.tagHash = i2751[15]
  i2750.writeDefaultValues = !!i2751[16]
  var i2753 = i2751[17]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 2) {
  request.r(i2753[i + 0], i2753[i + 1], 2, i2752, '')
  }
  i2750.behaviours = i2752
  var i2755 = i2751[18]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2755[i + 0]) );
  }
  i2750.transitions = i2754
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2761 = data
  i2760.fullPath = i2761[0]
  i2760.canTransitionToSelf = !!i2761[1]
  i2760.duration = i2761[2]
  i2760.exitTime = i2761[3]
  i2760.hasExitTime = !!i2761[4]
  i2760.hasFixedDuration = !!i2761[5]
  i2760.interruptionSource = i2761[6]
  i2760.offset = i2761[7]
  i2760.orderedInterruption = !!i2761[8]
  i2760.destinationStateId = i2761[9]
  i2760.isExit = !!i2761[10]
  i2760.mute = !!i2761[11]
  i2760.solo = !!i2761[12]
  var i2763 = i2761[13]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2763[i + 0]) );
  }
  i2760.conditions = i2762
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2767 = data
  i2766.mode = i2767[0]
  i2766.parameter = i2767[1]
  i2766.threshold = i2767[2]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2773 = data
  i2772.destinationStateId = i2773[0]
  i2772.isExit = !!i2773[1]
  i2772.mute = !!i2773[2]
  i2772.solo = !!i2773[3]
  var i2775 = i2773[4]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2775[i + 0]) );
  }
  i2772.conditions = i2774
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2779 = data
  i2778.defaultBool = !!i2779[0]
  i2778.defaultFloat = i2779[1]
  i2778.defaultInt = i2779[2]
  i2778.name = i2779[3]
  i2778.nameHash = i2779[4]
  i2778.type = i2779[5]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2781 = data
  i2780.name = i2781[0]
  request.r(i2781[1], i2781[2], 0, i2780, '_runtimeAnimatorController')
  var i2783 = i2781[3]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 2) {
  request.r(i2783[i + 0], i2783[i + 1], 2, i2782, '')
  }
  i2780._originalAnimationClips = i2782
  var i2785 = i2781[4]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 2, i2784, '')
  }
  i2780._overrideAnimationClips = i2784
  var i2787 = i2781[5]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2780._animationClips = i2786
  var i2789 = i2781[6]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('UnityEngine.AnimationClipPair', i2789[i + 0]) );
  }
  i2780._animationClipPairs = i2788
  return i2780
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'originalClip')
  request.r(i2795[2], i2795[3], 0, i2794, 'overrideClip')
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2797 = data
  i2796.name = i2797[0]
  i2796.bytes64 = i2797[1]
  i2796.data = i2797[2]
  return i2796
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2799 = data
  i2798.normalStyle = i2799[0]
  i2798.normalSpacingOffset = i2799[1]
  i2798.boldStyle = i2799[2]
  i2798.boldSpacing = i2799[3]
  i2798.italicStyle = i2799[4]
  i2798.tabSize = i2799[5]
  request.r(i2799[6], i2799[7], 0, i2798, 'atlas')
  i2798.m_SourceFontFileGUID = i2799[8]
  i2798.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2799[9], i2798.m_CreationSettings)
  request.r(i2799[10], i2799[11], 0, i2798, 'm_SourceFontFile')
  i2798.m_SourceFontFilePath = i2799[12]
  i2798.m_AtlasPopulationMode = i2799[13]
  i2798.InternalDynamicOS = !!i2799[14]
  var i2801 = i2799[15]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('UnityEngine.TextCore.Glyph', i2801[i + 0]));
  }
  i2798.m_GlyphTable = i2800
  var i2803 = i2799[16]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('TMPro.TMP_Character', i2803[i + 0]));
  }
  i2798.m_CharacterTable = i2802
  var i2805 = i2799[17]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 2) {
  request.r(i2805[i + 0], i2805[i + 1], 2, i2804, '')
  }
  i2798.m_AtlasTextures = i2804
  i2798.m_AtlasTextureIndex = i2799[18]
  i2798.m_IsMultiAtlasTexturesEnabled = !!i2799[19]
  i2798.m_GetFontFeatures = !!i2799[20]
  i2798.m_ClearDynamicDataOnBuild = !!i2799[21]
  i2798.m_AtlasWidth = i2799[22]
  i2798.m_AtlasHeight = i2799[23]
  i2798.m_AtlasPadding = i2799[24]
  i2798.m_AtlasRenderMode = i2799[25]
  var i2807 = i2799[26]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('UnityEngine.TextCore.GlyphRect', i2807[i + 0]));
  }
  i2798.m_UsedGlyphRects = i2806
  var i2809 = i2799[27]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('UnityEngine.TextCore.GlyphRect', i2809[i + 0]));
  }
  i2798.m_FreeGlyphRects = i2808
  i2798.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2799[28], i2798.m_FontFeatureTable)
  i2798.m_ShouldReimportFontFeatures = !!i2799[29]
  var i2811 = i2799[30]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2811.length; i += 2) {
  request.r(i2811[i + 0], i2811[i + 1], 1, i2810, '')
  }
  i2798.m_FallbackFontAssetTable = i2810
  var i2813 = i2799[31]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('TMPro.TMP_FontWeightPair', i2813[i + 0]) );
  }
  i2798.m_FontWeightTable = i2812
  var i2815 = i2799[32]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('TMPro.TMP_FontWeightPair', i2815[i + 0]) );
  }
  i2798.fontWeights = i2814
  i2798.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2799[33], i2798.m_fontInfo)
  var i2817 = i2799[34]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('TMPro.TMP_Glyph', i2817[i + 0]));
  }
  i2798.m_glyphInfoList = i2816
  i2798.m_KerningTable = request.d('TMPro.KerningTable', i2799[35], i2798.m_KerningTable)
  var i2819 = i2799[36]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2819.length; i += 2) {
  request.r(i2819[i + 0], i2819[i + 1], 1, i2818, '')
  }
  i2798.fallbackFontAssets = i2818
  i2798.m_Version = i2799[37]
  i2798.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2799[38], i2798.m_FaceInfo)
  request.r(i2799[39], i2799[40], 0, i2798, 'm_Material')
  return i2798
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2821 = data
  i2820.sourceFontFileName = i2821[0]
  i2820.sourceFontFileGUID = i2821[1]
  i2820.faceIndex = i2821[2]
  i2820.pointSizeSamplingMode = i2821[3]
  i2820.pointSize = i2821[4]
  i2820.padding = i2821[5]
  i2820.paddingMode = i2821[6]
  i2820.packingMode = i2821[7]
  i2820.atlasWidth = i2821[8]
  i2820.atlasHeight = i2821[9]
  i2820.characterSetSelectionMode = i2821[10]
  i2820.characterSequence = i2821[11]
  i2820.referencedFontAssetGUID = i2821[12]
  i2820.referencedTextAssetGUID = i2821[13]
  i2820.fontStyle = i2821[14]
  i2820.fontStyleModifier = i2821[15]
  i2820.renderMode = i2821[16]
  i2820.includeFontFeatures = !!i2821[17]
  return i2820
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2825 = data
  i2824.m_Index = i2825[0]
  i2824.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2825[1], i2824.m_Metrics)
  i2824.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2825[2], i2824.m_GlyphRect)
  i2824.m_Scale = i2825[3]
  i2824.m_AtlasIndex = i2825[4]
  i2824.m_ClassDefinitionType = i2825[5]
  return i2824
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2827 = data
  i2826.m_Width = i2827[0]
  i2826.m_Height = i2827[1]
  i2826.m_HorizontalBearingX = i2827[2]
  i2826.m_HorizontalBearingY = i2827[3]
  i2826.m_HorizontalAdvance = i2827[4]
  return i2826
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2829 = data
  i2828.m_X = i2829[0]
  i2828.m_Y = i2829[1]
  i2828.m_Width = i2829[2]
  i2828.m_Height = i2829[3]
  return i2828
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2832 = root || request.c( 'TMPro.TMP_Character' )
  var i2833 = data
  i2832.m_ElementType = i2833[0]
  i2832.m_Unicode = i2833[1]
  i2832.m_GlyphIndex = i2833[2]
  i2832.m_Scale = i2833[3]
  return i2832
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.add(request.d('TMPro.MultipleSubstitutionRecord', i2841[i + 0]));
  }
  i2838.m_MultipleSubstitutionRecords = i2840
  var i2843 = i2839[1]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.add(request.d('TMPro.LigatureSubstitutionRecord', i2843[i + 0]));
  }
  i2838.m_LigatureSubstitutionRecords = i2842
  var i2845 = i2839[2]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2845[i + 0]));
  }
  i2838.m_GlyphPairAdjustmentRecords = i2844
  var i2847 = i2839[3]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2847[i + 0]));
  }
  i2838.m_MarkToBaseAdjustmentRecords = i2846
  var i2849 = i2839[4]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2849[i + 0]));
  }
  i2838.m_MarkToMarkAdjustmentRecords = i2848
  return i2838
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2852 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2853 = data
  i2852.m_TargetGlyphID = i2853[0]
  i2852.m_SubstituteGlyphIDs = i2853[1]
  return i2852
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2857 = data
  i2856.m_ComponentGlyphIDs = i2857[0]
  i2856.m_LigatureGlyphID = i2857[1]
  return i2856
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2860 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2861 = data
  i2860.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2861[0], i2860.m_FirstAdjustmentRecord)
  i2860.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2861[1], i2860.m_SecondAdjustmentRecord)
  i2860.m_FeatureLookupFlags = i2861[2]
  return i2860
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2863 = data
  i2862.m_GlyphIndex = i2863[0]
  i2862.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2863[1], i2862.m_GlyphValueRecord)
  return i2862
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2864 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2865 = data
  i2864.m_XPlacement = i2865[0]
  i2864.m_YPlacement = i2865[1]
  i2864.m_XAdvance = i2865[2]
  i2864.m_YAdvance = i2865[3]
  return i2864
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2868 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2869 = data
  i2868.m_BaseGlyphID = i2869[0]
  i2868.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2869[1], i2868.m_BaseGlyphAnchorPoint)
  i2868.m_MarkGlyphID = i2869[2]
  i2868.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2869[3], i2868.m_MarkPositionAdjustment)
  return i2868
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2871 = data
  i2870.m_XCoordinate = i2871[0]
  i2870.m_YCoordinate = i2871[1]
  return i2870
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2872 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2873 = data
  i2872.m_XPositionAdjustment = i2873[0]
  i2872.m_YPositionAdjustment = i2873[1]
  return i2872
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2877 = data
  i2876.m_BaseMarkGlyphID = i2877[0]
  i2876.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2877[1], i2876.m_BaseMarkGlyphAnchorPoint)
  i2876.m_CombiningMarkGlyphID = i2877[2]
  i2876.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2877[3], i2876.m_CombiningMarkPositionAdjustment)
  return i2876
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2883 = data
  request.r(i2883[0], i2883[1], 0, i2882, 'regularTypeface')
  request.r(i2883[2], i2883[3], 0, i2882, 'italicTypeface')
  return i2882
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2885 = data
  i2884.Name = i2885[0]
  i2884.PointSize = i2885[1]
  i2884.Scale = i2885[2]
  i2884.CharacterCount = i2885[3]
  i2884.LineHeight = i2885[4]
  i2884.Baseline = i2885[5]
  i2884.Ascender = i2885[6]
  i2884.CapHeight = i2885[7]
  i2884.Descender = i2885[8]
  i2884.CenterLine = i2885[9]
  i2884.SuperscriptOffset = i2885[10]
  i2884.SubscriptOffset = i2885[11]
  i2884.SubSize = i2885[12]
  i2884.Underline = i2885[13]
  i2884.UnderlineThickness = i2885[14]
  i2884.strikethrough = i2885[15]
  i2884.strikethroughThickness = i2885[16]
  i2884.TabWidth = i2885[17]
  i2884.Padding = i2885[18]
  i2884.AtlasWidth = i2885[19]
  i2884.AtlasHeight = i2885[20]
  return i2884
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2889 = data
  i2888.id = i2889[0]
  i2888.x = i2889[1]
  i2888.y = i2889[2]
  i2888.width = i2889[3]
  i2888.height = i2889[4]
  i2888.xOffset = i2889[5]
  i2888.yOffset = i2889[6]
  i2888.xAdvance = i2889[7]
  i2888.scale = i2889[8]
  return i2888
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.KerningTable' )
  var i2891 = data
  var i2893 = i2891[0]
  var i2892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.add(request.d('TMPro.KerningPair', i2893[i + 0]));
  }
  i2890.kerningPairs = i2892
  return i2890
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2896 = root || request.c( 'TMPro.KerningPair' )
  var i2897 = data
  i2896.xOffset = i2897[0]
  i2896.m_FirstGlyph = i2897[1]
  i2896.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2897[2], i2896.m_FirstGlyphAdjustments)
  i2896.m_SecondGlyph = i2897[3]
  i2896.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2897[4], i2896.m_SecondGlyphAdjustments)
  i2896.m_IgnoreSpacingAdjustments = !!i2897[5]
  return i2896
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2898 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2899 = data
  i2898.m_FaceIndex = i2899[0]
  i2898.m_FamilyName = i2899[1]
  i2898.m_StyleName = i2899[2]
  i2898.m_PointSize = i2899[3]
  i2898.m_Scale = i2899[4]
  i2898.m_UnitsPerEM = i2899[5]
  i2898.m_LineHeight = i2899[6]
  i2898.m_AscentLine = i2899[7]
  i2898.m_CapLine = i2899[8]
  i2898.m_MeanLine = i2899[9]
  i2898.m_Baseline = i2899[10]
  i2898.m_DescentLine = i2899[11]
  i2898.m_SuperscriptOffset = i2899[12]
  i2898.m_SuperscriptSize = i2899[13]
  i2898.m_SubscriptOffset = i2899[14]
  i2898.m_SubscriptSize = i2899[15]
  i2898.m_UnderlineOffset = i2899[16]
  i2898.m_UnderlineThickness = i2899[17]
  i2898.m_StrikethroughOffset = i2899[18]
  i2898.m_StrikethroughThickness = i2899[19]
  i2898.m_TabWidth = i2899[20]
  return i2898
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i2900 = root || request.c( 'PlayerSO' )
  var i2901 = data
  i2900.maxSpeed = i2901[0]
  i2900.jumpImpulse = i2901[1]
  return i2900
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i2902 = root || request.c( 'FindMonsterDatabase' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i2905.length; i += 2) {
  request.r(i2905[i + 0], i2905[i + 1], 1, i2904, '')
  }
  i2902.database = i2904
  return i2902
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i2908 = root || request.c( 'MonsterSO' )
  var i2909 = data
  i2908.id = i2909[0]
  i2908.displayName = i2909[1]
  request.r(i2909[2], i2909[3], 0, i2908, 'icon')
  request.r(i2909[4], i2909[5], 0, i2908, 'prefab')
  i2908.rarity = i2909[6]
  i2908.rarityColor = new pc.Color(i2909[7], i2909[8], i2909[9], i2909[10])
  return i2908
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_Settings' )
  var i2911 = data
  i2910.assetVersion = i2911[0]
  i2910.m_TextWrappingMode = i2911[1]
  i2910.m_enableKerning = !!i2911[2]
  var i2913 = i2911[3]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(i2913[i + 0]);
  }
  i2910.m_ActiveFontFeatures = i2912
  i2910.m_enableExtraPadding = !!i2911[4]
  i2910.m_enableTintAllSprites = !!i2911[5]
  i2910.m_enableParseEscapeCharacters = !!i2911[6]
  i2910.m_EnableRaycastTarget = !!i2911[7]
  i2910.m_GetFontFeaturesAtRuntime = !!i2911[8]
  i2910.m_missingGlyphCharacter = i2911[9]
  i2910.m_ClearDynamicDataOnBuild = !!i2911[10]
  i2910.m_warningsDisabled = !!i2911[11]
  request.r(i2911[12], i2911[13], 0, i2910, 'm_defaultFontAsset')
  i2910.m_defaultFontAssetPath = i2911[14]
  i2910.m_defaultFontSize = i2911[15]
  i2910.m_defaultAutoSizeMinRatio = i2911[16]
  i2910.m_defaultAutoSizeMaxRatio = i2911[17]
  i2910.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2911[18], i2911[19] )
  i2910.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2911[20], i2911[21] )
  i2910.m_autoSizeTextContainer = !!i2911[22]
  i2910.m_IsTextObjectScaleStatic = !!i2911[23]
  var i2915 = i2911[24]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2915.length; i += 2) {
  request.r(i2915[i + 0], i2915[i + 1], 1, i2914, '')
  }
  i2910.m_fallbackFontAssets = i2914
  i2910.m_matchMaterialPreset = !!i2911[25]
  i2910.m_HideSubTextObjects = !!i2911[26]
  request.r(i2911[27], i2911[28], 0, i2910, 'm_defaultSpriteAsset')
  i2910.m_defaultSpriteAssetPath = i2911[29]
  i2910.m_enableEmojiSupport = !!i2911[30]
  i2910.m_MissingCharacterSpriteUnicode = i2911[31]
  var i2917 = i2911[32]
  var i2916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 1, i2916, '')
  }
  i2910.m_EmojiFallbackTextAssets = i2916
  i2910.m_defaultColorGradientPresetsPath = i2911[33]
  request.r(i2911[34], i2911[35], 0, i2910, 'm_defaultStyleSheet')
  i2910.m_StyleSheetsResourcePath = i2911[36]
  request.r(i2911[37], i2911[38], 0, i2910, 'm_leadingCharacters')
  request.r(i2911[39], i2911[40], 0, i2910, 'm_followingCharacters')
  i2910.m_UseModernHangulLineBreakingRules = !!i2911[41]
  return i2910
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'spriteSheet')
  var i2923 = i2921[2]
  var i2922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.add(request.d('TMPro.TMP_Sprite', i2923[i + 0]));
  }
  i2920.spriteInfoList = i2922
  var i2925 = i2921[3]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2925.length; i += 2) {
  request.r(i2925[i + 0], i2925[i + 1], 1, i2924, '')
  }
  i2920.fallbackSpriteAssets = i2924
  var i2927 = i2921[4]
  var i2926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.add(request.d('TMPro.TMP_SpriteCharacter', i2927[i + 0]));
  }
  i2920.m_SpriteCharacterTable = i2926
  var i2929 = i2921[5]
  var i2928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.add(request.d('TMPro.TMP_SpriteGlyph', i2929[i + 0]));
  }
  i2920.m_GlyphTable = i2928
  i2920.m_Version = i2921[6]
  i2920.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2921[7], i2920.m_FaceInfo)
  request.r(i2921[8], i2921[9], 0, i2920, 'm_Material')
  return i2920
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2933 = data
  i2932.name = i2933[0]
  i2932.hashCode = i2933[1]
  i2932.unicode = i2933[2]
  i2932.pivot = new pc.Vec2( i2933[3], i2933[4] )
  request.r(i2933[5], i2933[6], 0, i2932, 'sprite')
  i2932.id = i2933[7]
  i2932.x = i2933[8]
  i2932.y = i2933[9]
  i2932.width = i2933[10]
  i2932.height = i2933[11]
  i2932.xOffset = i2933[12]
  i2932.yOffset = i2933[13]
  i2932.xAdvance = i2933[14]
  i2932.scale = i2933[15]
  return i2932
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2939 = data
  i2938.m_Name = i2939[0]
  i2938.m_ElementType = i2939[1]
  i2938.m_Unicode = i2939[2]
  i2938.m_GlyphIndex = i2939[3]
  i2938.m_Scale = i2939[4]
  return i2938
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2943 = data
  request.r(i2943[0], i2943[1], 0, i2942, 'sprite')
  i2942.m_Index = i2943[2]
  i2942.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2943[3], i2942.m_Metrics)
  i2942.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2943[4], i2942.m_GlyphRect)
  i2942.m_Scale = i2943[5]
  i2942.m_AtlasIndex = i2943[6]
  i2942.m_ClassDefinitionType = i2943[7]
  return i2942
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2945 = data
  var i2947 = i2945[0]
  var i2946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.add(request.d('TMPro.TMP_Style', i2947[i + 0]));
  }
  i2944.m_StyleList = i2946
  return i2944
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2950 = root || request.c( 'TMPro.TMP_Style' )
  var i2951 = data
  i2950.m_Name = i2951[0]
  i2950.m_HashCode = i2951[1]
  i2950.m_OpeningDefinition = i2951[2]
  i2950.m_ClosingDefinition = i2951[3]
  i2950.m_OpeningTagArray = i2951[4]
  i2950.m_ClosingTagArray = i2951[5]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2953 = data
  var i2955 = i2953[0]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2955[i + 0]) );
  }
  i2952.files = i2954
  i2952.componentToPrefabIds = i2953[1]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2959 = data
  i2958.path = i2959[0]
  request.r(i2959[1], i2959[2], 0, i2958, 'unityObject')
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2961 = data
  var i2963 = i2961[0]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2963[i + 0]) );
  }
  i2960.scriptsExecutionOrder = i2962
  var i2965 = i2961[1]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2965[i + 0]) );
  }
  i2960.sortingLayers = i2964
  var i2967 = i2961[2]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2967[i + 0]) );
  }
  i2960.cullingLayers = i2966
  i2960.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2961[3], i2960.timeSettings)
  i2960.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2961[4], i2960.physicsSettings)
  i2960.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2961[5], i2960.physics2DSettings)
  i2960.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2961[6], i2960.qualitySettings)
  i2960.enableRealtimeShadows = !!i2961[7]
  i2960.enableAutoInstancing = !!i2961[8]
  i2960.enableStaticBatching = !!i2961[9]
  i2960.enableDynamicBatching = !!i2961[10]
  i2960.usePreservativeDynamicBatching = !!i2961[11]
  i2960.lightmapEncodingQuality = i2961[12]
  i2960.desiredColorSpace = i2961[13]
  var i2969 = i2961[14]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( i2969[i + 0] );
  }
  i2960.allTags = i2968
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2973 = data
  i2972.name = i2973[0]
  i2972.value = i2973[1]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2977 = data
  i2976.id = i2977[0]
  i2976.name = i2977[1]
  i2976.value = i2977[2]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2981 = data
  i2980.id = i2981[0]
  i2980.name = i2981[1]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2983 = data
  i2982.fixedDeltaTime = i2983[0]
  i2982.maximumDeltaTime = i2983[1]
  i2982.timeScale = i2983[2]
  i2982.maximumParticleTimestep = i2983[3]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2985 = data
  i2984.gravity = new pc.Vec3( i2985[0], i2985[1], i2985[2] )
  i2984.defaultSolverIterations = i2985[3]
  i2984.bounceThreshold = i2985[4]
  i2984.autoSyncTransforms = !!i2985[5]
  i2984.autoSimulation = !!i2985[6]
  var i2987 = i2985[7]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2987[i + 0]) );
  }
  i2984.collisionMatrix = i2986
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2991 = data
  i2990.enabled = !!i2991[0]
  i2990.layerId = i2991[1]
  i2990.otherLayerId = i2991[2]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2993 = data
  request.r(i2993[0], i2993[1], 0, i2992, 'material')
  i2992.gravity = new pc.Vec2( i2993[2], i2993[3] )
  i2992.positionIterations = i2993[4]
  i2992.velocityIterations = i2993[5]
  i2992.velocityThreshold = i2993[6]
  i2992.maxLinearCorrection = i2993[7]
  i2992.maxAngularCorrection = i2993[8]
  i2992.maxTranslationSpeed = i2993[9]
  i2992.maxRotationSpeed = i2993[10]
  i2992.baumgarteScale = i2993[11]
  i2992.baumgarteTOIScale = i2993[12]
  i2992.timeToSleep = i2993[13]
  i2992.linearSleepTolerance = i2993[14]
  i2992.angularSleepTolerance = i2993[15]
  i2992.defaultContactOffset = i2993[16]
  i2992.autoSimulation = !!i2993[17]
  i2992.queriesHitTriggers = !!i2993[18]
  i2992.queriesStartInColliders = !!i2993[19]
  i2992.callbacksOnDisable = !!i2993[20]
  i2992.reuseCollisionCallbacks = !!i2993[21]
  i2992.autoSyncTransforms = !!i2993[22]
  var i2995 = i2993[23]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2995[i + 0]) );
  }
  i2992.collisionMatrix = i2994
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2999 = data
  i2998.enabled = !!i2999[0]
  i2998.layerId = i2999[1]
  i2998.otherLayerId = i2999[2]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3001 = data
  var i3003 = i3001[0]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3003[i + 0]) );
  }
  i3000.qualityLevels = i3002
  var i3005 = i3001[1]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( i3005[i + 0] );
  }
  i3000.names = i3004
  i3000.shadows = i3001[2]
  i3000.anisotropicFiltering = i3001[3]
  i3000.antiAliasing = i3001[4]
  i3000.lodBias = i3001[5]
  i3000.shadowCascades = i3001[6]
  i3000.shadowDistance = i3001[7]
  i3000.shadowmaskMode = i3001[8]
  i3000.shadowProjection = i3001[9]
  i3000.shadowResolution = i3001[10]
  i3000.softParticles = !!i3001[11]
  i3000.softVegetation = !!i3001[12]
  i3000.activeColorSpace = i3001[13]
  i3000.desiredColorSpace = i3001[14]
  i3000.masterTextureLimit = i3001[15]
  i3000.maxQueuedFrames = i3001[16]
  i3000.particleRaycastBudget = i3001[17]
  i3000.pixelLightCount = i3001[18]
  i3000.realtimeReflectionProbes = !!i3001[19]
  i3000.shadowCascade2Split = i3001[20]
  i3000.shadowCascade4Split = new pc.Vec3( i3001[21], i3001[22], i3001[23] )
  i3000.streamingMipmapsActive = !!i3001[24]
  i3000.vSyncCount = i3001[25]
  i3000.asyncUploadBufferSize = i3001[26]
  i3000.asyncUploadTimeSlice = i3001[27]
  i3000.billboardsFaceCameraPosition = !!i3001[28]
  i3000.shadowNearPlaneOffset = i3001[29]
  i3000.streamingMipmapsMemoryBudget = i3001[30]
  i3000.maximumLODLevel = i3001[31]
  i3000.streamingMipmapsAddAllCameras = !!i3001[32]
  i3000.streamingMipmapsMaxLevelReduction = i3001[33]
  i3000.streamingMipmapsRenderersPerFrame = i3001[34]
  i3000.resolutionScalingFixedDPIFactor = i3001[35]
  i3000.streamingMipmapsMaxFileIORequests = i3001[36]
  i3000.currentQualityLevel = i3001[37]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i3009 = data
  i3008.name = i3009[0]
  var i3011 = i3009[1]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i3011[i + 0]) );
  }
  i3008.tos = i3010
  var i3013 = i3009[2]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( i3013[i + 0] );
  }
  i3008.constant = i3012
  i3008.isValid = !!i3009[3]
  i3008.isHuman = !!i3009[4]
  i3008.hasRootMotion = !!i3009[5]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i3017 = data
  i3016.hash = i3017[0]
  i3016.path = i3017[1]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3021 = data
  i3020.weight = i3021[0]
  i3020.vertices = i3021[1]
  i3020.normals = i3021[2]
  i3020.tangents = i3021[3]
  return i3020
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3022 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3023 = data
  i3022.xPlacement = i3023[0]
  i3022.yPlacement = i3023[1]
  i3022.xAdvance = i3023[2]
  i3022.yAdvance = i3023[3]
  return i3022
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[50],"80":[36],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[89],"97":[89],"98":[89],"99":[89],"100":[89],"101":[89],"102":[36],"103":[5],"104":[105],"106":[105],"22":[21],"43":[49],"107":[24],"108":[21],"109":[30,21],"110":[5],"111":[30,21],"112":[21],"113":[21],"114":[5,21],"28":[21,30],"115":[116],"117":[116],"118":[116],"119":[21],"120":[21],"26":[22],"27":[30,21],"121":[21],"24":[22],"122":[21],"123":[21],"124":[21],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[30,21],"132":[21],"133":[21],"134":[21],"135":[21],"136":[30,21],"137":[21],"138":[52],"139":[52],"53":[52],"140":[52],"141":[36],"142":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MonoBehaviour","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.AudioClip","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UIRays","GameButton","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","FM3rdInput","UnityEngine.GameObject","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","PlayableAudio","LunaController","ControlsTutorial","HiddenMonster","Billboard","UnityEngine.SpriteRenderer","MorphUnlockedPanel","MorphHuntStory","MonsterSO","ScaleYoyo","UnityEngine.Cubemap","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BAH_V04";

Deserializers.lunaInitializationTime = "11/10/2026 04:13:27";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_BAH_V04_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1651";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4239";

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

Deserializers.buildID = "0b3d0fc5-a37e-45ae-9c0f-e38ca8d3bc3f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

