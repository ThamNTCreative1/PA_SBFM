var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointSpring' )
  var i2203 = data
  i2202.spring = i2203[0]
  i2202.damper = i2203[1]
  i2202.targetPosition = i2203[2]
  return i2202
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointMotor' )
  var i2205 = data
  i2204.m_TargetVelocity = i2205[0]
  i2204.m_Force = i2205[1]
  i2204.m_FreeSpin = i2205[2]
  return i2204
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.JointLimits' )
  var i2207 = data
  i2206.m_Min = i2207[0]
  i2206.m_Max = i2207[1]
  i2206.m_Bounciness = i2207[2]
  i2206.m_BounceMinVelocity = i2207[3]
  i2206.m_ContactDistance = i2207[4]
  i2206.minBounce = i2207[5]
  i2206.maxBounce = i2207[6]
  return i2206
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.JointDrive' )
  var i2209 = data
  i2208.m_PositionSpring = i2209[0]
  i2208.m_PositionDamper = i2209[1]
  i2208.m_MaximumForce = i2209[2]
  i2208.m_UseAcceleration = i2209[3]
  return i2208
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2211 = data
  i2210.m_Spring = i2211[0]
  i2210.m_Damper = i2211[1]
  return i2210
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2213 = data
  i2212.m_Limit = i2213[0]
  i2212.m_Bounciness = i2213[1]
  i2212.m_ContactDistance = i2213[2]
  return i2212
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2215 = data
  i2214.m_ExtremumSlip = i2215[0]
  i2214.m_ExtremumValue = i2215[1]
  i2214.m_AsymptoteSlip = i2215[2]
  i2214.m_AsymptoteValue = i2215[3]
  i2214.m_Stiffness = i2215[4]
  return i2214
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2217 = data
  i2216.m_LowerAngle = i2217[0]
  i2216.m_UpperAngle = i2217[1]
  return i2216
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2219 = data
  i2218.m_MotorSpeed = i2219[0]
  i2218.m_MaximumMotorTorque = i2219[1]
  return i2218
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2221 = data
  i2220.m_DampingRatio = i2221[0]
  i2220.m_Frequency = i2221[1]
  i2220.m_Angle = i2221[2]
  return i2220
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2223 = data
  i2222.m_LowerTranslation = i2223[0]
  i2222.m_UpperTranslation = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2225 = data
  i2224.position = new pc.Vec3( i2225[0], i2225[1], i2225[2] )
  i2224.scale = new pc.Vec3( i2225[3], i2225[4], i2225[5] )
  i2224.rotation = new pc.Quat(i2225[6], i2225[7], i2225[8], i2225[9])
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2227 = data
  i2226.type = i2227[0]
  i2226.color = new pc.Color(i2227[1], i2227[2], i2227[3], i2227[4])
  i2226.cullingMask = i2227[5]
  i2226.intensity = i2227[6]
  i2226.range = i2227[7]
  i2226.spotAngle = i2227[8]
  i2226.shadows = i2227[9]
  i2226.shadowNormalBias = i2227[10]
  i2226.shadowBias = i2227[11]
  i2226.shadowStrength = i2227[12]
  i2226.shadowResolution = i2227[13]
  i2226.lightmapBakeType = i2227[14]
  i2226.renderMode = i2227[15]
  request.r(i2227[16], i2227[17], 0, i2226, 'cookie')
  i2226.cookieSize = i2227[18]
  i2226.shadowNearPlane = i2227[19]
  i2226.occlusionMaskChannel = i2227[20]
  i2226.isBaked = !!i2227[21]
  i2226.mixedLightingMode = i2227[22]
  i2226.enabled = !!i2227[23]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.tagId = i2229[1]
  i2228.enabled = !!i2229[2]
  i2228.isStatic = !!i2229[3]
  i2228.layer = i2229[4]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2231 = data
  i2230.center = new pc.Vec3( i2231[0], i2231[1], i2231[2] )
  i2230.size = new pc.Vec3( i2231[3], i2231[4], i2231[5] )
  i2230.enabled = !!i2231[6]
  i2230.isTrigger = !!i2231[7]
  request.r(i2231[8], i2231[9], 0, i2230, 'material')
  return i2230
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i2232 = root || request.c( 'HiddenMonster' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'checkMark')
  request.r(i2233[2], i2233[3], 0, i2232, 'claimFx')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'sharedMesh')
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'additionalVertexStreams')
  i2236.enabled = !!i2237[2]
  request.r(i2237[3], i2237[4], 0, i2236, 'sharedMaterial')
  var i2239 = i2237[5]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2236.sharedMaterials = i2238
  i2236.receiveShadows = !!i2237[6]
  i2236.shadowCastingMode = i2237[7]
  i2236.sortingLayerID = i2237[8]
  i2236.sortingOrder = i2237[9]
  i2236.lightmapIndex = i2237[10]
  i2236.lightmapSceneIndex = i2237[11]
  i2236.lightmapScaleOffset = new pc.Vec4( i2237[12], i2237[13], i2237[14], i2237[15] )
  i2236.lightProbeUsage = i2237[16]
  i2236.reflectionProbeUsage = i2237[17]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'mesh')
  i2242.meshCount = i2243[2]
  i2242.activeVertexStreamsCount = i2243[3]
  i2242.alignment = i2243[4]
  i2242.renderMode = i2243[5]
  i2242.sortMode = i2243[6]
  i2242.lengthScale = i2243[7]
  i2242.velocityScale = i2243[8]
  i2242.cameraVelocityScale = i2243[9]
  i2242.normalDirection = i2243[10]
  i2242.sortingFudge = i2243[11]
  i2242.minParticleSize = i2243[12]
  i2242.maxParticleSize = i2243[13]
  i2242.pivot = new pc.Vec3( i2243[14], i2243[15], i2243[16] )
  request.r(i2243[17], i2243[18], 0, i2242, 'trailMaterial')
  i2242.applyActiveColorSpace = !!i2243[19]
  i2242.enabled = !!i2243[20]
  request.r(i2243[21], i2243[22], 0, i2242, 'sharedMaterial')
  var i2245 = i2243[23]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.sharedMaterials = i2244
  i2242.receiveShadows = !!i2243[24]
  i2242.shadowCastingMode = i2243[25]
  i2242.sortingLayerID = i2243[26]
  i2242.sortingOrder = i2243[27]
  i2242.lightmapIndex = i2243[28]
  i2242.lightmapSceneIndex = i2243[29]
  i2242.lightmapScaleOffset = new pc.Vec4( i2243[30], i2243[31], i2243[32], i2243[33] )
  i2242.lightProbeUsage = i2243[34]
  i2242.reflectionProbeUsage = i2243[35]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2247 = data
  i2246.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2247[0], i2246.main)
  i2246.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2247[1], i2246.colorBySpeed)
  i2246.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2247[2], i2246.colorOverLifetime)
  i2246.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2247[3], i2246.emission)
  i2246.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2247[4], i2246.rotationBySpeed)
  i2246.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2247[5], i2246.rotationOverLifetime)
  i2246.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2247[6], i2246.shape)
  i2246.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2247[7], i2246.sizeBySpeed)
  i2246.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2247[8], i2246.sizeOverLifetime)
  i2246.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2247[9], i2246.textureSheetAnimation)
  i2246.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2247[10], i2246.velocityOverLifetime)
  i2246.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2247[11], i2246.noise)
  i2246.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2247[12], i2246.inheritVelocity)
  i2246.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2247[13], i2246.forceOverLifetime)
  i2246.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2247[14], i2246.limitVelocityOverLifetime)
  i2246.useAutoRandomSeed = !!i2247[15]
  i2246.randomSeed = i2247[16]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemMain()
  var i2249 = data
  i2248.duration = i2249[0]
  i2248.loop = !!i2249[1]
  i2248.prewarm = !!i2249[2]
  i2248.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[3], i2248.startDelay)
  i2248.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[4], i2248.startLifetime)
  i2248.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[5], i2248.startSpeed)
  i2248.startSize3D = !!i2249[6]
  i2248.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[7], i2248.startSizeX)
  i2248.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[8], i2248.startSizeY)
  i2248.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[9], i2248.startSizeZ)
  i2248.startRotation3D = !!i2249[10]
  i2248.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[11], i2248.startRotationX)
  i2248.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[12], i2248.startRotationY)
  i2248.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[13], i2248.startRotationZ)
  i2248.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2249[14], i2248.startColor)
  i2248.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[15], i2248.gravityModifier)
  i2248.simulationSpace = i2249[16]
  request.r(i2249[17], i2249[18], 0, i2248, 'customSimulationSpace')
  i2248.simulationSpeed = i2249[19]
  i2248.useUnscaledTime = !!i2249[20]
  i2248.scalingMode = i2249[21]
  i2248.playOnAwake = !!i2249[22]
  i2248.maxParticles = i2249[23]
  i2248.emitterVelocityMode = i2249[24]
  i2248.stopAction = i2249[25]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2250 = root || new pc.MinMaxCurve()
  var i2251 = data
  i2250.mode = i2251[0]
  i2250.curveMin = new pc.AnimationCurve( { keys_flow: i2251[1] } )
  i2250.curveMax = new pc.AnimationCurve( { keys_flow: i2251[2] } )
  i2250.curveMultiplier = i2251[3]
  i2250.constantMin = i2251[4]
  i2250.constantMax = i2251[5]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2252 = root || new pc.MinMaxGradient()
  var i2253 = data
  i2252.mode = i2253[0]
  i2252.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2253[1], i2252.gradientMin)
  i2252.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2253[2], i2252.gradientMax)
  i2252.colorMin = new pc.Color(i2253[3], i2253[4], i2253[5], i2253[6])
  i2252.colorMax = new pc.Color(i2253[7], i2253[8], i2253[9], i2253[10])
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2255 = data
  i2254.mode = i2255[0]
  var i2257 = i2255[1]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2257[i + 0]) );
  }
  i2254.colorKeys = i2256
  var i2259 = i2255[2]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2259[i + 0]) );
  }
  i2254.alphaKeys = i2258
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2260 = root || new pc.ParticleSystemColorBySpeed()
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2261[1], i2260.color)
  i2260.range = new pc.Vec2( i2261[2], i2261[3] )
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2265 = data
  i2264.color = new pc.Color(i2265[0], i2265[1], i2265[2], i2265[3])
  i2264.time = i2265[4]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2269 = data
  i2268.alpha = i2269[0]
  i2268.time = i2269[1]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2270 = root || new pc.ParticleSystemColorOverLifetime()
  var i2271 = data
  i2270.enabled = !!i2271[0]
  i2270.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2271[1], i2270.color)
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2272 = root || new pc.ParticleSystemEmitter()
  var i2273 = data
  i2272.enabled = !!i2273[0]
  i2272.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[1], i2272.rateOverTime)
  i2272.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[2], i2272.rateOverDistance)
  var i2275 = i2273[3]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2275[i + 0]) );
  }
  i2272.bursts = i2274
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemBurst()
  var i2279 = data
  i2278.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[0], i2278.count)
  i2278.cycleCount = i2279[1]
  i2278.minCount = i2279[2]
  i2278.maxCount = i2279[3]
  i2278.repeatInterval = i2279[4]
  i2278.time = i2279[5]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemRotationBySpeed()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.x)
  i2280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.y)
  i2280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[3], i2280.z)
  i2280.separateAxes = !!i2281[4]
  i2280.range = new pc.Vec2( i2281[5], i2281[6] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2283 = data
  i2282.enabled = !!i2283[0]
  i2282.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[1], i2282.x)
  i2282.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[2], i2282.y)
  i2282.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[3], i2282.z)
  i2282.separateAxes = !!i2283[4]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemShape()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.shapeType = i2285[1]
  i2284.randomDirectionAmount = i2285[2]
  i2284.sphericalDirectionAmount = i2285[3]
  i2284.randomPositionAmount = i2285[4]
  i2284.alignToDirection = !!i2285[5]
  i2284.radius = i2285[6]
  i2284.radiusMode = i2285[7]
  i2284.radiusSpread = i2285[8]
  i2284.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[9], i2284.radiusSpeed)
  i2284.radiusThickness = i2285[10]
  i2284.angle = i2285[11]
  i2284.length = i2285[12]
  i2284.boxThickness = new pc.Vec3( i2285[13], i2285[14], i2285[15] )
  i2284.meshShapeType = i2285[16]
  request.r(i2285[17], i2285[18], 0, i2284, 'mesh')
  request.r(i2285[19], i2285[20], 0, i2284, 'meshRenderer')
  request.r(i2285[21], i2285[22], 0, i2284, 'skinnedMeshRenderer')
  i2284.useMeshMaterialIndex = !!i2285[23]
  i2284.meshMaterialIndex = i2285[24]
  i2284.useMeshColors = !!i2285[25]
  i2284.normalOffset = i2285[26]
  i2284.arc = i2285[27]
  i2284.arcMode = i2285[28]
  i2284.arcSpread = i2285[29]
  i2284.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[30], i2284.arcSpeed)
  i2284.donutRadius = i2285[31]
  i2284.position = new pc.Vec3( i2285[32], i2285[33], i2285[34] )
  i2284.rotation = new pc.Vec3( i2285[35], i2285[36], i2285[37] )
  i2284.scale = new pc.Vec3( i2285[38], i2285[39], i2285[40] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemSizeBySpeed()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[1], i2286.x)
  i2286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[2], i2286.y)
  i2286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[3], i2286.z)
  i2286.separateAxes = !!i2287[4]
  i2286.range = new pc.Vec2( i2287[5], i2287[6] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[1], i2288.x)
  i2288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[2], i2288.y)
  i2288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[3], i2288.z)
  i2288.separateAxes = !!i2289[4]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.mode = i2291[1]
  i2290.animation = i2291[2]
  i2290.numTilesX = i2291[3]
  i2290.numTilesY = i2291[4]
  i2290.useRandomRow = !!i2291[5]
  i2290.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[6], i2290.frameOverTime)
  i2290.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[7], i2290.startFrame)
  i2290.cycleCount = i2291[8]
  i2290.rowIndex = i2291[9]
  i2290.flipU = i2291[10]
  i2290.flipV = i2291[11]
  i2290.spriteCount = i2291[12]
  var i2293 = i2291[13]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.sprites = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[1], i2296.x)
  i2296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.y)
  i2296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[3], i2296.z)
  i2296.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[4], i2296.radial)
  i2296.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[5], i2296.speedModifier)
  i2296.space = i2297[6]
  i2296.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[7], i2296.orbitalX)
  i2296.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[8], i2296.orbitalY)
  i2296.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[9], i2296.orbitalZ)
  i2296.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[10], i2296.orbitalOffsetX)
  i2296.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[11], i2296.orbitalOffsetY)
  i2296.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[12], i2296.orbitalOffsetZ)
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemNoise()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.separateAxes = !!i2299[1]
  i2298.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[2], i2298.strengthX)
  i2298.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[3], i2298.strengthY)
  i2298.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[4], i2298.strengthZ)
  i2298.frequency = i2299[5]
  i2298.damping = !!i2299[6]
  i2298.octaveCount = i2299[7]
  i2298.octaveMultiplier = i2299[8]
  i2298.octaveScale = i2299[9]
  i2298.quality = i2299[10]
  i2298.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[11], i2298.scrollSpeed)
  i2298.scrollSpeedMultiplier = i2299[12]
  i2298.remapEnabled = !!i2299[13]
  i2298.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[14], i2298.remapX)
  i2298.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[15], i2298.remapY)
  i2298.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[16], i2298.remapZ)
  i2298.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[17], i2298.positionAmount)
  i2298.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[18], i2298.rotationAmount)
  i2298.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[19], i2298.sizeAmount)
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemInheritVelocity()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.mode = i2301[1]
  i2300.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.curve)
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemForceOverLifetime()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[1], i2302.x)
  i2302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[2], i2302.y)
  i2302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[3], i2302.z)
  i2302.space = i2303[4]
  i2302.randomized = !!i2303[5]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.limit)
  i2304.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.limitX)
  i2304.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.limitY)
  i2304.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[4], i2304.limitZ)
  i2304.dampen = i2305[5]
  i2304.separateAxes = !!i2305[6]
  i2304.space = i2305[7]
  i2304.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[8], i2304.drag)
  i2304.multiplyDragByParticleSize = !!i2305[9]
  i2304.multiplyDragByParticleVelocity = !!i2305[10]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'sharedMesh')
  i2306.convex = !!i2307[2]
  i2306.enabled = !!i2307[3]
  i2306.isTrigger = !!i2307[4]
  request.r(i2307[5], i2307[6], 0, i2306, 'material')
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2309 = data
  i2308.mass = i2309[0]
  i2308.drag = i2309[1]
  i2308.angularDrag = i2309[2]
  i2308.useGravity = !!i2309[3]
  i2308.isKinematic = !!i2309[4]
  i2308.constraints = i2309[5]
  i2308.maxAngularVelocity = i2309[6]
  i2308.collisionDetectionMode = i2309[7]
  i2308.interpolation = i2309[8]
  return i2308
}

Deserializers["PortalGlow"] = function (request, data, root) {
  var i2310 = root || request.c( 'PortalGlow' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'surface')
  request.r(i2311[2], i2311[3], 0, i2310, 'swirl')
  i2310.glowColor = new pc.Color(i2311[4], i2311[5], i2311[6], i2311[7])
  i2310.pulseSpeed = i2311[8]
  i2310.pulseScale = i2311[9]
  i2310.rampDuration = i2311[10]
  return i2310
}

Deserializers["TeleportPortal"] = function (request, data, root) {
  var i2312 = root || request.c( 'TeleportPortal' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'planet')
  request.r(i2313[2], i2313[3], 0, i2312, 'pos')
  i2312.isPlanet = !!i2313[4]
  i2312.touchPadding = new pc.Vec3( i2313[5], i2313[6], i2313[7] )
  i2312.teleportSound = request.d('FMAudio', i2313[8], i2312.teleportSound)
  return i2312
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i2314 = root || request.c( 'FMAudio' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'clip')
  i2314.channel = i2315[2]
  i2314.volume = i2315[3]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2317 = data
  i2316.color = new pc.Color(i2317[0], i2317[1], i2317[2], i2317[3])
  request.r(i2317[4], i2317[5], 0, i2316, 'sprite')
  i2316.flipX = !!i2317[6]
  i2316.flipY = !!i2317[7]
  i2316.drawMode = i2317[8]
  i2316.size = new pc.Vec2( i2317[9], i2317[10] )
  i2316.tileMode = i2317[11]
  i2316.adaptiveModeThreshold = i2317[12]
  i2316.maskInteraction = i2317[13]
  i2316.spriteSortPoint = i2317[14]
  i2316.enabled = !!i2317[15]
  request.r(i2317[16], i2317[17], 0, i2316, 'sharedMaterial')
  var i2319 = i2317[18]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2316.sharedMaterials = i2318
  i2316.receiveShadows = !!i2317[19]
  i2316.shadowCastingMode = i2317[20]
  i2316.sortingLayerID = i2317[21]
  i2316.sortingOrder = i2317[22]
  i2316.lightmapIndex = i2317[23]
  i2316.lightmapSceneIndex = i2317[24]
  i2316.lightmapScaleOffset = new pc.Vec4( i2317[25], i2317[26], i2317[27], i2317[28] )
  i2316.lightProbeUsage = i2317[29]
  i2316.reflectionProbeUsage = i2317[30]
  return i2316
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i2320 = root || request.c( 'ScaleYoyo' )
  var i2321 = data
  i2320.delay = i2321[0]
  i2320.duration = i2321[1]
  i2320.easeType = i2321[2]
  i2320.loops = i2321[3]
  i2320.loopType = i2321[4]
  i2320.animationType = i2321[5]
  i2320.endValueV3 = new pc.Vec3( i2321[6], i2321[7], i2321[8] )
  i2320.isRelative = !!i2321[9]
  i2320.autoPlay = !!i2321[10]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2323 = data
  i2322.center = new pc.Vec3( i2323[0], i2323[1], i2323[2] )
  i2322.radius = i2323[3]
  i2322.enabled = !!i2323[4]
  i2322.isTrigger = !!i2323[5]
  request.r(i2323[6], i2323[7], 0, i2322, 'material')
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.halfPrecision = !!i2325[1]
  i2324.useSimplification = !!i2325[2]
  i2324.useUInt32IndexFormat = !!i2325[3]
  i2324.vertexCount = i2325[4]
  i2324.aabb = i2325[5]
  var i2327 = i2325[6]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( !!i2327[i + 0] );
  }
  i2324.streams = i2326
  i2324.vertices = i2325[7]
  var i2329 = i2325[8]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2329[i + 0]) );
  }
  i2324.subMeshes = i2328
  var i2331 = i2325[9]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 16) {
    i2330.push( new pc.Mat4().setData(i2331[i + 0], i2331[i + 1], i2331[i + 2], i2331[i + 3],  i2331[i + 4], i2331[i + 5], i2331[i + 6], i2331[i + 7],  i2331[i + 8], i2331[i + 9], i2331[i + 10], i2331[i + 11],  i2331[i + 12], i2331[i + 13], i2331[i + 14], i2331[i + 15]) );
  }
  i2324.bindposes = i2330
  var i2333 = i2325[10]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2333[i + 0]) );
  }
  i2324.blendShapes = i2332
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2339 = data
  i2338.triangles = i2339[0]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2345 = data
  i2344.name = i2345[0]
  var i2347 = i2345[1]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2347[i + 0]) );
  }
  i2344.frames = i2346
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2348 = root || new pc.UnityMaterial()
  var i2349 = data
  i2348.name = i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'shader')
  i2348.renderQueue = i2349[3]
  i2348.enableInstancing = !!i2349[4]
  var i2351 = i2349[5]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2351[i + 0]) );
  }
  i2348.floatParameters = i2350
  var i2353 = i2349[6]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2353[i + 0]) );
  }
  i2348.colorParameters = i2352
  var i2355 = i2349[7]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2355[i + 0]) );
  }
  i2348.vectorParameters = i2354
  var i2357 = i2349[8]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2357[i + 0]) );
  }
  i2348.textureParameters = i2356
  var i2359 = i2349[9]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2359[i + 0]) );
  }
  i2348.materialFlags = i2358
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.value = i2363[1]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.value = new pc.Color(i2367[1], i2367[2], i2367[3], i2367[4])
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2371 = data
  i2370.name = i2371[0]
  i2370.value = new pc.Vec4( i2371[1], i2371[2], i2371[3], i2371[4] )
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2375 = data
  i2374.name = i2375[0]
  request.r(i2375[1], i2375[2], 0, i2374, 'value')
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2379 = data
  i2378.name = i2379[0]
  i2378.enabled = !!i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.width = i2381[1]
  i2380.height = i2381[2]
  i2380.mipmapCount = i2381[3]
  i2380.anisoLevel = i2381[4]
  i2380.filterMode = i2381[5]
  i2380.hdr = !!i2381[6]
  i2380.format = i2381[7]
  i2380.wrapMode = i2381[8]
  i2380.alphaIsTransparency = !!i2381[9]
  i2380.alphaSource = i2381[10]
  i2380.graphicsFormat = i2381[11]
  i2380.sRGBTexture = !!i2381[12]
  i2380.desiredColorSpace = i2381[13]
  i2380.wrapU = i2381[14]
  i2380.wrapV = i2381[15]
  return i2380
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i2382 = root || request.c( 'FindMonsterManager' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'database')
  var i2385 = i2383[2]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2382.listRespawn = i2384
  request.r(i2383[3], i2383[4], 0, i2382, 'playerTransform')
  request.r(i2383[5], i2383[6], 0, i2382, 'targetTutorial')
  request.r(i2383[7], i2383[8], 0, i2382, 'arrowTut')
  var i2387 = i2383[9]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2382.monsters = i2386
  i2382.playerTouchSize = new pc.Vec3( i2383[10], i2383[11], i2383[12] )
  request.r(i2383[13], i2383[14], 0, i2382, 'hiddenMonsterPanel')
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2393 = data
  i2392.textureMode = i2393[0]
  i2392.alignment = i2393[1]
  i2392.widthCurve = new pc.AnimationCurve( { keys_flow: i2393[2] } )
  i2392.colorGradient = i2393[3] ? new pc.ColorGradient(i2393[3][0], i2393[3][1], i2393[3][2]) : null
  var i2395 = i2393[4]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 3) {
    i2394.push( new pc.Vec3( i2395[i + 0], i2395[i + 1], i2395[i + 2] ) );
  }
  i2392.positions = i2394
  i2392.positionCount = i2393[5]
  i2392.widthMultiplier = i2393[6]
  i2392.startWidth = i2393[7]
  i2392.endWidth = i2393[8]
  i2392.numCornerVertices = i2393[9]
  i2392.numCapVertices = i2393[10]
  i2392.useWorldSpace = !!i2393[11]
  i2392.loop = !!i2393[12]
  i2392.startColor = new pc.Color(i2393[13], i2393[14], i2393[15], i2393[16])
  i2392.endColor = new pc.Color(i2393[17], i2393[18], i2393[19], i2393[20])
  i2392.generateLightingData = !!i2393[21]
  i2392.enabled = !!i2393[22]
  request.r(i2393[23], i2393[24], 0, i2392, 'sharedMaterial')
  var i2397 = i2393[25]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2392.sharedMaterials = i2396
  i2392.receiveShadows = !!i2393[26]
  i2392.shadowCastingMode = i2393[27]
  i2392.sortingLayerID = i2393[28]
  i2392.sortingOrder = i2393[29]
  i2392.lightmapIndex = i2393[30]
  i2392.lightmapSceneIndex = i2393[31]
  i2392.lightmapScaleOffset = new pc.Vec4( i2393[32], i2393[33], i2393[34], i2393[35] )
  i2392.lightProbeUsage = i2393[36]
  i2392.reflectionProbeUsage = i2393[37]
  return i2392
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i2400 = root || request.c( 'TurtorialArrow' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'lineRenderer')
  i2400.offset = new pc.Vec3( i2401[2], i2401[3], i2401[4] )
  i2400.planetSegments = i2401[5]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2403 = data
  i2402.pivot = new pc.Vec2( i2403[0], i2403[1] )
  i2402.anchorMin = new pc.Vec2( i2403[2], i2403[3] )
  i2402.anchorMax = new pc.Vec2( i2403[4], i2403[5] )
  i2402.sizeDelta = new pc.Vec2( i2403[6], i2403[7] )
  i2402.anchoredPosition3D = new pc.Vec3( i2403[8], i2403[9], i2403[10] )
  i2402.rotation = new pc.Quat(i2403[11], i2403[12], i2403[13], i2403[14])
  i2402.scale = new pc.Vec3( i2403[15], i2403[16], i2403[17] )
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2405 = data
  i2404.planeDistance = i2405[0]
  i2404.referencePixelsPerUnit = i2405[1]
  i2404.isFallbackOverlay = !!i2405[2]
  i2404.renderMode = i2405[3]
  i2404.renderOrder = i2405[4]
  i2404.sortingLayerName = i2405[5]
  i2404.sortingOrder = i2405[6]
  i2404.scaleFactor = i2405[7]
  request.r(i2405[8], i2405[9], 0, i2404, 'worldCamera')
  i2404.overrideSorting = !!i2405[10]
  i2404.pixelPerfect = !!i2405[11]
  i2404.targetDisplay = i2405[12]
  i2404.overridePixelPerfect = !!i2405[13]
  i2404.enabled = !!i2405[14]
  return i2404
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2407 = data
  i2406.m_UiScaleMode = i2407[0]
  i2406.m_ReferencePixelsPerUnit = i2407[1]
  i2406.m_ScaleFactor = i2407[2]
  i2406.m_ReferenceResolution = new pc.Vec2( i2407[3], i2407[4] )
  i2406.m_ScreenMatchMode = i2407[5]
  i2406.m_MatchWidthOrHeight = i2407[6]
  i2406.m_PhysicalUnit = i2407[7]
  i2406.m_FallbackScreenDPI = i2407[8]
  i2406.m_DefaultSpriteDPI = i2407[9]
  i2406.m_DynamicPixelsPerUnit = i2407[10]
  i2406.m_PresetInfoIsWorld = !!i2407[11]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2409 = data
  i2408.m_Alpha = i2409[0]
  i2408.m_Interactable = !!i2409[1]
  i2408.m_BlocksRaycasts = !!i2409[2]
  i2408.m_IgnoreParentGroups = !!i2409[3]
  i2408.enabled = !!i2409[4]
  return i2408
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2411 = data
  i2410.m_IgnoreReversedGraphics = !!i2411[0]
  i2410.m_BlockingObjects = i2411[1]
  i2410.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2411[2] )
  return i2410
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i2412 = root || request.c( 'HiddenMonsterPanel' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'icon')
  i2412.openSound = request.d('FMAudio', i2413[2], i2412.openSound)
  request.r(i2413[3], i2413[4], 0, i2412, 'popRoot')
  i2412.popDuration = i2413[5]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2415 = data
  i2414.cullTransparentMesh = !!i2415[0]
  return i2414
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.Image' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_Sprite')
  i2416.m_Type = i2417[2]
  i2416.m_PreserveAspect = !!i2417[3]
  i2416.m_FillCenter = !!i2417[4]
  i2416.m_FillMethod = i2417[5]
  i2416.m_FillAmount = i2417[6]
  i2416.m_FillClockwise = !!i2417[7]
  i2416.m_FillOrigin = i2417[8]
  i2416.m_UseSpriteMesh = !!i2417[9]
  i2416.m_PixelsPerUnitMultiplier = i2417[10]
  request.r(i2417[11], i2417[12], 0, i2416, 'm_Material')
  i2416.m_Maskable = !!i2417[13]
  i2416.m_Color = new pc.Color(i2417[14], i2417[15], i2417[16], i2417[17])
  i2416.m_RaycastTarget = !!i2417[18]
  i2416.m_RaycastPadding = new pc.Vec4( i2417[19], i2417[20], i2417[21], i2417[22] )
  return i2416
}

Deserializers["GameButton"] = function (request, data, root) {
  var i2418 = root || request.c( 'GameButton' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'background')
  request.r(i2419[2], i2419[3], 0, i2418, 'icon')
  request.r(i2419[4], i2419[5], 0, i2418, 'title')
  i2418.scale = new pc.Vec3( i2419[6], i2419[7], i2419[8] )
  i2418.pressAudio = request.d('FMAudio', i2419[9], i2418.pressAudio)
  i2418.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2419[10], i2418.m_OnClick)
  i2418.m_Navigation = request.d('UnityEngine.UI.Navigation', i2419[11], i2418.m_Navigation)
  i2418.m_Transition = i2419[12]
  i2418.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2419[13], i2418.m_Colors)
  i2418.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2419[14], i2418.m_SpriteState)
  i2418.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2419[15], i2418.m_AnimationTriggers)
  i2418.m_Interactable = !!i2419[16]
  request.r(i2419[17], i2419[18], 0, i2418, 'm_TargetGraphic')
  return i2418
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2421 = data
  i2420.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2421[0], i2420.m_PersistentCalls)
  return i2420
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('UnityEngine.Events.PersistentCall', i2425[i + 0]));
  }
  i2422.m_Calls = i2424
  return i2422
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'm_Target')
  i2428.m_TargetAssemblyTypeName = i2429[2]
  i2428.m_MethodName = i2429[3]
  i2428.m_Mode = i2429[4]
  i2428.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2429[5], i2428.m_Arguments)
  i2428.m_CallState = i2429[6]
  return i2428
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2431 = data
  i2430.m_Mode = i2431[0]
  i2430.m_WrapAround = !!i2431[1]
  request.r(i2431[2], i2431[3], 0, i2430, 'm_SelectOnUp')
  request.r(i2431[4], i2431[5], 0, i2430, 'm_SelectOnDown')
  request.r(i2431[6], i2431[7], 0, i2430, 'm_SelectOnLeft')
  request.r(i2431[8], i2431[9], 0, i2430, 'm_SelectOnRight')
  return i2430
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2433 = data
  i2432.m_NormalColor = new pc.Color(i2433[0], i2433[1], i2433[2], i2433[3])
  i2432.m_HighlightedColor = new pc.Color(i2433[4], i2433[5], i2433[6], i2433[7])
  i2432.m_PressedColor = new pc.Color(i2433[8], i2433[9], i2433[10], i2433[11])
  i2432.m_SelectedColor = new pc.Color(i2433[12], i2433[13], i2433[14], i2433[15])
  i2432.m_DisabledColor = new pc.Color(i2433[16], i2433[17], i2433[18], i2433[19])
  i2432.m_ColorMultiplier = i2433[20]
  i2432.m_FadeDuration = i2433[21]
  return i2432
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'm_HighlightedSprite')
  request.r(i2435[2], i2435[3], 0, i2434, 'm_PressedSprite')
  request.r(i2435[4], i2435[5], 0, i2434, 'm_SelectedSprite')
  request.r(i2435[6], i2435[7], 0, i2434, 'm_DisabledSprite')
  return i2434
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2437 = data
  i2436.m_NormalTrigger = i2437[0]
  i2436.m_HighlightedTrigger = i2437[1]
  i2436.m_PressedTrigger = i2437[2]
  i2436.m_SelectedTrigger = i2437[3]
  i2436.m_DisabledTrigger = i2437[4]
  return i2436
}

Deserializers["HideButton"] = function (request, data, root) {
  var i2438 = root || request.c( 'HideButton' )
  var i2439 = data
  return i2438
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'm_ObjectArgument')
  i2440.m_ObjectArgumentAssemblyTypeName = i2441[2]
  i2440.m_IntArgument = i2441[3]
  i2440.m_FloatArgument = i2441[4]
  i2440.m_StringArgument = i2441[5]
  i2440.m_BoolArgument = !!i2441[6]
  return i2440
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2442 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2443 = data
  i2442.m_hasFontAssetChanged = !!i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'm_baseMaterial')
  i2442.m_maskOffset = new pc.Vec4( i2443[3], i2443[4], i2443[5], i2443[6] )
  i2442.m_text = i2443[7]
  i2442.m_isRightToLeft = !!i2443[8]
  request.r(i2443[9], i2443[10], 0, i2442, 'm_fontAsset')
  request.r(i2443[11], i2443[12], 0, i2442, 'm_sharedMaterial')
  var i2445 = i2443[13]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.m_fontSharedMaterials = i2444
  request.r(i2443[14], i2443[15], 0, i2442, 'm_fontMaterial')
  var i2447 = i2443[16]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 2, i2446, '')
  }
  i2442.m_fontMaterials = i2446
  i2442.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2443[17], i2443[18], i2443[19], i2443[20])
  i2442.m_fontColor = new pc.Color(i2443[21], i2443[22], i2443[23], i2443[24])
  i2442.m_enableVertexGradient = !!i2443[25]
  i2442.m_colorMode = i2443[26]
  i2442.m_fontColorGradient = request.d('TMPro.VertexGradient', i2443[27], i2442.m_fontColorGradient)
  request.r(i2443[28], i2443[29], 0, i2442, 'm_fontColorGradientPreset')
  request.r(i2443[30], i2443[31], 0, i2442, 'm_spriteAsset')
  i2442.m_tintAllSprites = !!i2443[32]
  request.r(i2443[33], i2443[34], 0, i2442, 'm_StyleSheet')
  i2442.m_TextStyleHashCode = i2443[35]
  i2442.m_overrideHtmlColors = !!i2443[36]
  i2442.m_faceColor = UnityEngine.Color32.ConstructColor(i2443[37], i2443[38], i2443[39], i2443[40])
  i2442.m_fontSize = i2443[41]
  i2442.m_fontSizeBase = i2443[42]
  i2442.m_fontWeight = i2443[43]
  i2442.m_enableAutoSizing = !!i2443[44]
  i2442.m_fontSizeMin = i2443[45]
  i2442.m_fontSizeMax = i2443[46]
  i2442.m_fontStyle = i2443[47]
  i2442.m_HorizontalAlignment = i2443[48]
  i2442.m_VerticalAlignment = i2443[49]
  i2442.m_textAlignment = i2443[50]
  i2442.m_characterSpacing = i2443[51]
  i2442.m_characterHorizontalScale = i2443[52]
  i2442.m_wordSpacing = i2443[53]
  i2442.m_lineSpacing = i2443[54]
  i2442.m_lineSpacingMax = i2443[55]
  i2442.m_paragraphSpacing = i2443[56]
  i2442.m_charWidthMaxAdj = i2443[57]
  i2442.m_TextWrappingMode = i2443[58]
  i2442.m_wordWrappingRatios = i2443[59]
  i2442.m_overflowMode = i2443[60]
  request.r(i2443[61], i2443[62], 0, i2442, 'm_linkedTextComponent')
  request.r(i2443[63], i2443[64], 0, i2442, 'parentLinkedComponent')
  i2442.m_enableKerning = !!i2443[65]
  var i2449 = i2443[66]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.add(i2449[i + 0]);
  }
  i2442.m_ActiveFontFeatures = i2448
  i2442.m_enableExtraPadding = !!i2443[67]
  i2442.checkPaddingRequired = !!i2443[68]
  i2442.m_isRichText = !!i2443[69]
  i2442.m_parseCtrlCharacters = !!i2443[70]
  i2442.m_isOrthographic = !!i2443[71]
  i2442.m_isCullingEnabled = !!i2443[72]
  i2442.m_horizontalMapping = i2443[73]
  i2442.m_verticalMapping = i2443[74]
  i2442.m_uvLineOffset = i2443[75]
  i2442.m_geometrySortingOrder = i2443[76]
  i2442.m_IsTextObjectScaleStatic = !!i2443[77]
  i2442.m_VertexBufferAutoSizeReduction = !!i2443[78]
  i2442.m_useMaxVisibleDescender = !!i2443[79]
  i2442.m_pageToDisplay = i2443[80]
  i2442.m_margin = new pc.Vec4( i2443[81], i2443[82], i2443[83], i2443[84] )
  i2442.m_isUsingLegacyAnimationComponent = !!i2443[85]
  i2442.m_isVolumetricText = !!i2443[86]
  request.r(i2443[87], i2443[88], 0, i2442, 'm_Material')
  i2442.m_EmojiFallbackSupport = !!i2443[89]
  i2442.m_Maskable = !!i2443[90]
  i2442.m_Color = new pc.Color(i2443[91], i2443[92], i2443[93], i2443[94])
  i2442.m_RaycastTarget = !!i2443[95]
  i2442.m_RaycastPadding = new pc.Vec4( i2443[96], i2443[97], i2443[98], i2443[99] )
  return i2442
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2450 = root || request.c( 'TMPro.VertexGradient' )
  var i2451 = data
  i2450.topLeft = new pc.Color(i2451[0], i2451[1], i2451[2], i2451[3])
  i2450.topRight = new pc.Color(i2451[4], i2451[5], i2451[6], i2451[7])
  i2450.bottomLeft = new pc.Color(i2451[8], i2451[9], i2451[10], i2451[11])
  i2450.bottomRight = new pc.Color(i2451[12], i2451[13], i2451[14], i2451[15])
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.atlasId = i2455[1]
  i2454.mipmapCount = i2455[2]
  i2454.hdr = !!i2455[3]
  i2454.size = i2455[4]
  i2454.anisoLevel = i2455[5]
  i2454.filterMode = i2455[6]
  var i2457 = i2455[7]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 4) {
    i2456.push( UnityEngine.Rect.MinMaxRect(i2457[i + 0], i2457[i + 1], i2457[i + 2], i2457[i + 3]) );
  }
  i2454.rects = i2456
  i2454.wrapU = i2455[8]
  i2454.wrapV = i2455[9]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.index = i2461[1]
  i2460.startup = !!i2461[2]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2463 = data
  i2462.aspect = i2463[0]
  i2462.orthographic = !!i2463[1]
  i2462.orthographicSize = i2463[2]
  i2462.backgroundColor = new pc.Color(i2463[3], i2463[4], i2463[5], i2463[6])
  i2462.nearClipPlane = i2463[7]
  i2462.farClipPlane = i2463[8]
  i2462.fieldOfView = i2463[9]
  i2462.depth = i2463[10]
  i2462.clearFlags = i2463[11]
  i2462.cullingMask = i2463[12]
  i2462.rect = i2463[13]
  request.r(i2463[14], i2463[15], 0, i2462, 'targetTexture')
  i2462.usePhysicalProperties = !!i2463[16]
  i2462.focalLength = i2463[17]
  i2462.sensorSize = new pc.Vec2( i2463[18], i2463[19] )
  i2462.lensShift = new pc.Vec2( i2463[20], i2463[21] )
  i2462.gateFit = i2463[22]
  i2462.commandBufferCount = i2463[23]
  i2462.cameraType = i2463[24]
  i2462.enabled = !!i2463[25]
  return i2462
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i2464 = root || request.c( 'ScreenDeltaInputSystem' )
  var i2465 = data
  return i2464
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i2466 = root || request.c( 'MonsterProgressBar' )
  var i2467 = data
  i2466.countSceneMonsters = !!i2467[0]
  i2466.startFound = i2467[1]
  i2466.total = i2467[2]
  request.r(i2467[3], i2467[4], 0, i2466, 'fill')
  request.r(i2467[5], i2467[6], 0, i2466, 'countText')
  request.r(i2467[7], i2467[8], 0, i2466, 'icon')
  i2466.fillSpeed = i2467[9]
  return i2466
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2469 = data
  i2468.m_ShowMaskGraphic = !!i2469[0]
  return i2468
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i2470 = root || request.c( 'StoryTextView' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'label')
  i2470.popDuration = i2471[2]
  i2470.pulseAmount = i2471[3]
  i2470.pulseSpeed = i2471[4]
  i2470.fadeDuration = i2471[5]
  return i2470
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.UI.Button' )
  var i2473 = data
  i2472.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2473[0], i2472.m_OnClick)
  i2472.m_Navigation = request.d('UnityEngine.UI.Navigation', i2473[1], i2472.m_Navigation)
  i2472.m_Transition = i2473[2]
  i2472.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2473[3], i2472.m_Colors)
  i2472.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2473[4], i2472.m_SpriteState)
  i2472.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2473[5], i2472.m_AnimationTriggers)
  i2472.m_Interactable = !!i2473[6]
  request.r(i2473[7], i2473[8], 0, i2472, 'm_TargetGraphic')
  return i2472
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2474 = root || request.c( 'JumpButton' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'character')
  return i2474
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i2476 = root || request.c( 'PlayableJoystick' )
  var i2477 = data
  i2476.handleRange = i2477[0]
  i2476.deadZone = i2477[1]
  i2476.floating = !!i2477[2]
  request.r(i2477[3], i2477[4], 0, i2476, 'background')
  request.r(i2477[5], i2477[6], 0, i2476, 'knob')
  return i2476
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i2478 = root || request.c( 'FMCharacter' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'planetTransform')
  request.r(i2479[2], i2479[3], 0, i2478, 'animator')
  request.r(i2479[4], i2479[5], 0, i2478, 'joystick')
  i2478._rotationRate = i2479[6]
  i2478._maxWalkSpeed = i2479[7]
  i2478._maxAcceleration = i2479[8]
  i2478._brakingDecelerationWalking = i2479[9]
  i2478._airControl = i2479[10]
  i2478._jumpImpulse = i2479[11]
  i2478._gravity = new pc.Vec3( i2479[12], i2479[13], i2479[14] )
  i2478._gravityScale = i2479[15]
  request.r(i2479[16], i2479[17], 0, i2478, '_camera')
  i2478.jumpSound = request.d('FMAudio', i2479[18], i2478.jumpSound)
  i2478.stepHeight = i2479[19]
  return i2478
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i2480 = root || request.c( 'FM3rdInput' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'followTarget')
  i2480.followDistance = i2481[2]
  i2480.followMinDistance = i2481[3]
  i2480.followMaxDistance = i2481[4]
  i2480.maxPitch = i2481[5]
  i2480.minPitch = i2481[6]
  i2480.invertLook = !!i2481[7]
  i2480.lookSensitivity = new pc.Vec2( i2481[8], i2481[9] )
  request.r(i2481[10], i2481[11], 0, i2480, 'planetTransform')
  i2480.cameraDistance = i2481[12]
  i2480.cameraRadius = i2481[13]
  request.r(i2481[14], i2481[15], 0, i2480, 'cam')
  request.r(i2481[16], i2481[17], 0, i2480, 'lookArea')
  i2480.extraRoll = i2481[18]
  i2480.autoReturnDelay = i2481[19]
  i2480.autoReturnSpeed = i2481[20]
  i2480.defaultPitch = i2481[21]
  i2480.enableAutoReturn = !!i2481[22]
  i2480.forwardSpeedMultiplier = i2481[23]
  i2480.backwardSpeedMultiplier = i2481[24]
  return i2480
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i2482 = root || request.c( 'FindMonsterPlayerControl' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'playerSO')
  request.r(i2483[2], i2483[3], 0, i2482, 'playerBase')
  request.r(i2483[4], i2483[5], 0, i2482, 'morphRoot')
  request.r(i2483[6], i2483[7], 0, i2482, 'poopFx')
  request.r(i2483[8], i2483[9], 0, i2482, 'poopRoot')
  request.r(i2483[10], i2483[11], 0, i2482, 'trailSpeed')
  i2482.popSound = request.d('FMAudio', i2483[12], i2482.popSound)
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2485 = data
  i2484.enabled = !!i2485[0]
  i2484.center = new pc.Vec3( i2485[1], i2485[2], i2485[3] )
  i2484.radius = i2485[4]
  i2484.height = i2485[5]
  i2484.minMoveDistance = i2485[6]
  i2484.skinWidth = i2485[7]
  i2484.enableOverlapRecovery = !!i2485[8]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'animatorController')
  request.r(i2487[2], i2487[3], 0, i2486, 'avatar')
  i2486.updateMode = i2487[4]
  i2486.hasTransformHierarchy = !!i2487[5]
  i2486.applyRootMotion = !!i2487[6]
  var i2489 = i2487[7]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 2, i2488, '')
  }
  i2486.humanBones = i2488
  i2486.enabled = !!i2487[8]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'sharedMesh')
  var i2495 = i2493[2]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 2) {
  request.r(i2495[i + 0], i2495[i + 1], 2, i2494, '')
  }
  i2492.bones = i2494
  i2492.updateWhenOffscreen = !!i2493[3]
  i2492.localBounds = i2493[4]
  request.r(i2493[5], i2493[6], 0, i2492, 'rootBone')
  var i2497 = i2493[7]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2497[i + 0]) );
  }
  i2492.blendShapesWeights = i2496
  i2492.enabled = !!i2493[8]
  request.r(i2493[9], i2493[10], 0, i2492, 'sharedMaterial')
  var i2499 = i2493[11]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2492.sharedMaterials = i2498
  i2492.receiveShadows = !!i2493[12]
  i2492.shadowCastingMode = i2493[13]
  i2492.sortingLayerID = i2493[14]
  i2492.sortingOrder = i2493[15]
  i2492.lightmapIndex = i2493[16]
  i2492.lightmapSceneIndex = i2493[17]
  i2492.lightmapScaleOffset = new pc.Vec4( i2493[18], i2493[19], i2493[20], i2493[21] )
  i2492.lightProbeUsage = i2493[22]
  i2492.reflectionProbeUsage = i2493[23]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2503 = data
  i2502.weight = i2503[0]
  return i2502
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i2504 = root || request.c( 'CharacterFootstep' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'ecmCharacter')
  i2504.audioSource = request.d('FMAudio', i2505[2], i2504.audioSource)
  i2504.speed = i2505[3]
  return i2504
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'm_FirstSelected')
  i2506.m_sendNavigationEvents = !!i2507[2]
  i2506.m_DragThreshold = i2507[3]
  return i2506
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2509 = data
  i2508.m_HorizontalAxis = i2509[0]
  i2508.m_VerticalAxis = i2509[1]
  i2508.m_SubmitButton = i2509[2]
  i2508.m_CancelButton = i2509[3]
  i2508.m_InputActionsPerSecond = i2509[4]
  i2508.m_RepeatDelay = i2509[5]
  i2508.m_ForceModuleActive = !!i2509[6]
  i2508.m_SendPointerHoverToParent = !!i2509[7]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'clip')
  request.r(i2511[2], i2511[3], 0, i2510, 'outputAudioMixerGroup')
  i2510.playOnAwake = !!i2511[4]
  i2510.loop = !!i2511[5]
  i2510.time = i2511[6]
  i2510.volume = i2511[7]
  i2510.pitch = i2511[8]
  i2510.enabled = !!i2511[9]
  return i2510
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i2512 = root || request.c( 'PlayableAudio' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'source')
  request.r(i2513[2], i2513[3], 0, i2512, 'buttonClick')
  return i2512
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2514 = root || request.c( 'LunaController' )
  var i2515 = data
  i2514.LimitTimePlay = !!i2515[0]
  i2514.TimePlay = i2515[1]
  i2514.UseHand = !!i2515[2]
  request.r(i2515[3], i2515[4], 0, i2514, 'BGM')
  request.r(i2515[5], i2515[6], 0, i2514, 'musicSource')
  i2514.musicVolume = i2515[7]
  var i2517 = i2515[8]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 1, i2516, '')
  }
  i2514.CTA = i2516
  request.r(i2515[9], i2515[10], 0, i2514, 'endCard')
  return i2514
}

Deserializers["PointerHand"] = function (request, data, root) {
  var i2520 = root || request.c( 'PointerHand' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'pivot')
  request.r(i2521[2], i2521[3], 0, i2520, 'visual')
  request.r(i2521[4], i2521[5], 0, i2520, 'ripple')
  i2520.height = i2521[6]
  i2520.fingerDirection = new pc.Vec2( i2521[7], i2521[8] )
  i2520.cycle = i2521[9]
  i2520.pause = i2521[10]
  i2520.liftDistance = i2521[11]
  i2520.rippleScale = i2521[12]
  i2520.appearDuration = i2521[13]
  return i2520
}

Deserializers["ShineBurst"] = function (request, data, root) {
  var i2522 = root || request.c( 'ShineBurst' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'sprite')
  i2522.duration = i2523[2]
  i2522.startScale = i2523[3]
  i2522.endScale = i2523[4]
  return i2522
}

Deserializers["ScreenTransition"] = function (request, data, root) {
  var i2524 = root || request.c( 'ScreenTransition' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'overlay')
  request.r(i2525[2], i2525[3], 0, i2524, 'glow')
  request.r(i2525[4], i2525[5], 0, i2524, 'swirl')
  request.r(i2525[6], i2525[7], 0, i2524, 'swirlInner')
  request.r(i2525[8], i2525[9], 0, i2524, 'flash')
  var i2527 = i2525[10]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 1, i2526, '')
  }
  i2524.sparkles = i2526
  request.r(i2525[11], i2525[12], 0, i2524, 'vortex')
  var i2529 = i2525[13]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 1, i2528, '')
  }
  i2524.vortexArms = i2528
  i2524.coverDuration = i2525[14]
  i2524.holdDuration = i2525[15]
  i2524.revealDuration = i2525[16]
  i2524.swirlSpeed = i2525[17]
  i2524.swirlMaxScale = i2525[18]
  i2524.sparkleRadius = i2525[19]
  i2524.sparkleInnerRadius = i2525[20]
  i2524.overlayPulseColor = new pc.Color(i2525[21], i2525[22], i2525[23], i2525[24])
  i2524.vortexSpeed = i2525[25]
  i2524.sparkleSpin = i2525[26]
  request.r(i2525[27], i2525[28], 0, i2524, 'warpCamera')
  i2524.warpFov = i2525[29]
  request.r(i2525[30], i2525[31], 0, i2524, 'cameraRig')
  i2524.rollDegrees = i2525[32]
  return i2524
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i2532 = root || request.c( 'MorphHuntStory' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'player')
  request.r(i2533[2], i2533[3], 0, i2532, 'look')
  var i2535 = i2533[4]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2532.morphs = i2534
  request.r(i2533[5], i2533[6], 0, i2532, 'startLookAt')
  i2532.startPitch = i2533[7]
  request.r(i2533[8], i2533[9], 0, i2532, 'hand')
  i2532.handOffset = new pc.Vec3( i2533[10], i2533[11], i2533[12] )
  request.r(i2533[13], i2533[14], 0, i2532, 'storyText')
  request.r(i2533[15], i2533[16], 0, i2532, 'unlockText')
  request.r(i2533[17], i2533[18], 0, i2532, 'shine')
  request.r(i2533[19], i2533[20], 0, i2532, 'finalPanel')
  i2532.introText = i2533[21]
  i2532.unlockedFormat = i2533[22]
  i2532.oneMoreText = i2533[23]
  i2532.introDelay = i2533[24]
  i2532.handHideDistance = i2533[25]
  i2532.cameraTurnDuration = i2533[26]
  i2532.finalDuration = i2533[27]
  return i2532
}

Deserializers["PlayableFrame"] = function (request, data, root) {
  var i2538 = root || request.c( 'PlayableFrame' )
  var i2539 = data
  request.r(i2539[0], i2539[1], 0, i2538, 'popRoot')
  i2538.popDuration = i2539[2]
  return i2538
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i2540 = root || request.c( 'ControlsTutorial' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'player')
  request.r(i2541[2], i2541[3], 0, i2540, 'look')
  request.r(i2541[4], i2541[5], 0, i2540, 'hand')
  request.r(i2541[6], i2541[7], 0, i2540, 'text')
  request.r(i2541[8], i2541[9], 0, i2540, 'viewFrom')
  request.r(i2541[10], i2541[11], 0, i2540, 'viewTo')
  request.r(i2541[12], i2541[13], 0, i2540, 'joystickRing')
  request.r(i2541[14], i2541[15], 0, i2540, 'jumpButton')
  i2540.viewText = i2541[16]
  i2540.moveText = i2541[17]
  i2540.jumpText = i2541[18]
  i2540.lookDegrees = i2541[19]
  i2540.moveDistance = i2541[20]
  i2540.jumps = i2541[21]
  i2540.jumpStep = !!i2541[22]
  i2540.startDelay = i2541[23]
  i2540.stepGap = i2541[24]
  i2540.swipeDuration = i2541[25]
  i2540.joystickSwipe = i2541[26]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2543 = data
  i2542.ambientIntensity = i2543[0]
  i2542.reflectionIntensity = i2543[1]
  i2542.ambientMode = i2543[2]
  i2542.ambientLight = new pc.Color(i2543[3], i2543[4], i2543[5], i2543[6])
  i2542.ambientSkyColor = new pc.Color(i2543[7], i2543[8], i2543[9], i2543[10])
  i2542.ambientGroundColor = new pc.Color(i2543[11], i2543[12], i2543[13], i2543[14])
  i2542.ambientEquatorColor = new pc.Color(i2543[15], i2543[16], i2543[17], i2543[18])
  i2542.fogColor = new pc.Color(i2543[19], i2543[20], i2543[21], i2543[22])
  i2542.fogEndDistance = i2543[23]
  i2542.fogStartDistance = i2543[24]
  i2542.fogDensity = i2543[25]
  i2542.fog = !!i2543[26]
  request.r(i2543[27], i2543[28], 0, i2542, 'skybox')
  i2542.fogMode = i2543[29]
  var i2545 = i2543[30]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2545[i + 0]) );
  }
  i2542.lightmaps = i2544
  i2542.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2543[31], i2542.lightProbes)
  i2542.lightmapsMode = i2543[32]
  i2542.mixedBakeMode = i2543[33]
  i2542.environmentLightingMode = i2543[34]
  i2542.ambientProbe = new pc.SphericalHarmonicsL2(i2543[35])
  request.r(i2543[36], i2543[37], 0, i2542, 'customReflection')
  request.r(i2543[38], i2543[39], 0, i2542, 'defaultReflection')
  i2542.defaultReflectionMode = i2543[40]
  i2542.defaultReflectionResolution = i2543[41]
  i2542.sunLightObjectId = i2543[42]
  i2542.pixelLightCount = i2543[43]
  i2542.defaultReflectionHDR = !!i2543[44]
  i2542.hasLightDataAsset = !!i2543[45]
  i2542.hasManualGenerate = !!i2543[46]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'lightmapColor')
  request.r(i2549[2], i2549[3], 0, i2548, 'lightmapDirection')
  request.r(i2549[4], i2549[5], 0, i2548, 'shadowMask')
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2550 = root || new UnityEngine.LightProbes()
  var i2551 = data
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2557 = data
  var i2559 = i2557[0]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2559[i + 0]));
  }
  i2556.ShaderCompilationErrors = i2558
  i2556.name = i2557[1]
  i2556.guid = i2557[2]
  var i2561 = i2557[3]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( i2561[i + 0] );
  }
  i2556.shaderDefinedKeywords = i2560
  var i2563 = i2557[4]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2563[i + 0]) );
  }
  i2556.passes = i2562
  var i2565 = i2557[5]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2565[i + 0]) );
  }
  i2556.usePasses = i2564
  var i2567 = i2557[6]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2567[i + 0]) );
  }
  i2556.defaultParameterValues = i2566
  request.r(i2557[7], i2557[8], 0, i2556, 'unityFallbackShader')
  i2556.readDepth = !!i2557[9]
  i2556.hasDepthOnlyPass = !!i2557[10]
  i2556.isCreatedByShaderGraph = !!i2557[11]
  i2556.disableBatching = !!i2557[12]
  i2556.compiled = !!i2557[13]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2571 = data
  i2570.shaderName = i2571[0]
  i2570.errorMessage = i2571[1]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2576 = root || new pc.UnityShaderPass()
  var i2577 = data
  i2576.id = i2577[0]
  i2576.subShaderIndex = i2577[1]
  i2576.name = i2577[2]
  i2576.passType = i2577[3]
  i2576.grabPassTextureName = i2577[4]
  i2576.usePass = !!i2577[5]
  i2576.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[6], i2576.zTest)
  i2576.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[7], i2576.zWrite)
  i2576.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[8], i2576.culling)
  i2576.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2577[9], i2576.blending)
  i2576.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2577[10], i2576.alphaBlending)
  i2576.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[11], i2576.colorWriteMask)
  i2576.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[12], i2576.offsetUnits)
  i2576.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[13], i2576.offsetFactor)
  i2576.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[14], i2576.stencilRef)
  i2576.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[15], i2576.stencilReadMask)
  i2576.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[16], i2576.stencilWriteMask)
  i2576.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2577[17], i2576.stencilOp)
  i2576.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2577[18], i2576.stencilOpFront)
  i2576.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2577[19], i2576.stencilOpBack)
  var i2579 = i2577[20]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2579[i + 0]) );
  }
  i2576.tags = i2578
  var i2581 = i2577[21]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( i2581[i + 0] );
  }
  i2576.passDefinedKeywords = i2580
  var i2583 = i2577[22]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2583[i + 0]) );
  }
  i2576.passDefinedKeywordGroups = i2582
  var i2585 = i2577[23]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2585[i + 0]) );
  }
  i2576.variants = i2584
  var i2587 = i2577[24]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2587[i + 0]) );
  }
  i2576.excludedVariants = i2586
  i2576.hasDepthReader = !!i2577[25]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2589 = data
  i2588.val = i2589[0]
  i2588.name = i2589[1]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2591 = data
  i2590.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[0], i2590.src)
  i2590.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[1], i2590.dst)
  i2590.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[2], i2590.op)
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2593 = data
  i2592.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[0], i2592.pass)
  i2592.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[1], i2592.fail)
  i2592.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[2], i2592.zFail)
  i2592.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2593[3], i2592.comp)
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2597 = data
  i2596.name = i2597[0]
  i2596.value = i2597[1]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2601 = data
  var i2603 = i2601[0]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( i2603[i + 0] );
  }
  i2600.keywords = i2602
  i2600.hasDiscard = !!i2601[1]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2607 = data
  i2606.passId = i2607[0]
  i2606.subShaderIndex = i2607[1]
  var i2609 = i2607[2]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( i2609[i + 0] );
  }
  i2606.keywords = i2608
  i2606.vertexProgram = i2607[3]
  i2606.fragmentProgram = i2607[4]
  i2606.exportedForWebGl2 = !!i2607[5]
  i2606.readDepth = !!i2607[6]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'shader')
  i2612.pass = i2613[2]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.type = i2617[1]
  i2616.value = new pc.Vec4( i2617[2], i2617[3], i2617[4], i2617[5] )
  i2616.textureValue = i2617[6]
  i2616.shaderPropertyFlag = i2617[7]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2619 = data
  i2618.name = i2619[0]
  request.r(i2619[1], i2619[2], 0, i2618, 'texture')
  i2618.aabb = i2619[3]
  i2618.vertices = i2619[4]
  i2618.triangles = i2619[5]
  i2618.textureRect = UnityEngine.Rect.MinMaxRect(i2619[6], i2619[7], i2619[8], i2619[9])
  i2618.packedRect = UnityEngine.Rect.MinMaxRect(i2619[10], i2619[11], i2619[12], i2619[13])
  i2618.border = new pc.Vec4( i2619[14], i2619[15], i2619[16], i2619[17] )
  i2618.transparency = i2619[18]
  i2618.bounds = i2619[19]
  i2618.pixelsPerUnit = i2619[20]
  i2618.textureWidth = i2619[21]
  i2618.textureHeight = i2619[22]
  i2618.nativeSize = new pc.Vec2( i2619[23], i2619[24] )
  i2618.pivot = new pc.Vec2( i2619[25], i2619[26] )
  i2618.textureRectOffset = new pc.Vec2( i2619[27], i2619[28] )
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2621 = data
  i2620.name = i2621[0]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.wrapMode = i2623[1]
  i2622.isLooping = !!i2623[2]
  i2622.length = i2623[3]
  var i2625 = i2623[4]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2625[i + 0]) );
  }
  i2622.curves = i2624
  var i2627 = i2623[5]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2627[i + 0]) );
  }
  i2622.events = i2626
  i2622.halfPrecision = !!i2623[6]
  i2622._frameRate = i2623[7]
  i2622.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2623[8], i2622.localBounds)
  i2622.hasMuscleCurves = !!i2623[9]
  var i2629 = i2623[10]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( i2629[i + 0] );
  }
  i2622.clipMuscleConstant = i2628
  i2622.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2623[11], i2622.clipBindingConstant)
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2633 = data
  i2632.path = i2633[0]
  i2632.hash = i2633[1]
  i2632.componentType = i2633[2]
  i2632.property = i2633[3]
  i2632.keys = i2633[4]
  var i2635 = i2633[5]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2635[i + 0]) );
  }
  i2632.objectReferenceKeys = i2634
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2639 = data
  i2638.functionName = i2639[0]
  i2638.floatParameter = i2639[1]
  i2638.intParameter = i2639[2]
  i2638.stringParameter = i2639[3]
  request.r(i2639[4], i2639[5], 0, i2638, 'objectReferenceParameter')
  i2638.time = i2639[6]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2641 = data
  i2640.center = new pc.Vec3( i2641[0], i2641[1], i2641[2] )
  i2640.extends = new pc.Vec3( i2641[3], i2641[4], i2641[5] )
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2645 = data
  var i2647 = i2645[0]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( i2647[i + 0] );
  }
  i2644.genericBindings = i2646
  var i2649 = i2645[1]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2644.pptrCurveMapping = i2648
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2651 = data
  i2650.name = i2651[0]
  var i2653 = i2651[1]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2653[i + 0]) );
  }
  i2650.layers = i2652
  var i2655 = i2651[2]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2655[i + 0]) );
  }
  i2650.parameters = i2654
  i2650.animationClips = i2651[3]
  i2650.avatarUnsupported = i2651[4]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2659 = data
  i2658.name = i2659[0]
  i2658.defaultWeight = i2659[1]
  i2658.blendingMode = i2659[2]
  i2658.avatarMask = i2659[3]
  i2658.syncedLayerIndex = i2659[4]
  i2658.syncedLayerAffectsTiming = !!i2659[5]
  i2658.syncedLayers = i2659[6]
  i2658.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2659[7], i2658.stateMachine)
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2661 = data
  i2660.id = i2661[0]
  i2660.name = i2661[1]
  i2660.path = i2661[2]
  var i2663 = i2661[3]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2663[i + 0]) );
  }
  i2660.states = i2662
  var i2665 = i2661[4]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2665[i + 0]) );
  }
  i2660.machines = i2664
  var i2667 = i2661[5]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2667[i + 0]) );
  }
  i2660.entryStateTransitions = i2666
  var i2669 = i2661[6]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2669[i + 0]) );
  }
  i2660.exitStateTransitions = i2668
  var i2671 = i2661[7]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2671[i + 0]) );
  }
  i2660.anyStateTransitions = i2670
  i2660.defaultStateId = i2661[8]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2675 = data
  i2674.id = i2675[0]
  i2674.name = i2675[1]
  i2674.cycleOffset = i2675[2]
  i2674.cycleOffsetParameter = i2675[3]
  i2674.cycleOffsetParameterActive = !!i2675[4]
  i2674.mirror = !!i2675[5]
  i2674.mirrorParameter = i2675[6]
  i2674.mirrorParameterActive = !!i2675[7]
  i2674.motionId = i2675[8]
  i2674.nameHash = i2675[9]
  i2674.fullPathHash = i2675[10]
  i2674.speed = i2675[11]
  i2674.speedParameter = i2675[12]
  i2674.speedParameterActive = !!i2675[13]
  i2674.tag = i2675[14]
  i2674.tagHash = i2675[15]
  i2674.writeDefaultValues = !!i2675[16]
  var i2677 = i2675[17]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 2, i2676, '')
  }
  i2674.behaviours = i2676
  var i2679 = i2675[18]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2679[i + 0]) );
  }
  i2674.transitions = i2678
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2685 = data
  i2684.fullPath = i2685[0]
  i2684.canTransitionToSelf = !!i2685[1]
  i2684.duration = i2685[2]
  i2684.exitTime = i2685[3]
  i2684.hasExitTime = !!i2685[4]
  i2684.hasFixedDuration = !!i2685[5]
  i2684.interruptionSource = i2685[6]
  i2684.offset = i2685[7]
  i2684.orderedInterruption = !!i2685[8]
  i2684.destinationStateId = i2685[9]
  i2684.isExit = !!i2685[10]
  i2684.mute = !!i2685[11]
  i2684.solo = !!i2685[12]
  var i2687 = i2685[13]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2687[i + 0]) );
  }
  i2684.conditions = i2686
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2691 = data
  i2690.mode = i2691[0]
  i2690.parameter = i2691[1]
  i2690.threshold = i2691[2]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2697 = data
  i2696.destinationStateId = i2697[0]
  i2696.isExit = !!i2697[1]
  i2696.mute = !!i2697[2]
  i2696.solo = !!i2697[3]
  var i2699 = i2697[4]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2699[i + 0]) );
  }
  i2696.conditions = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2703 = data
  i2702.defaultBool = !!i2703[0]
  i2702.defaultFloat = i2703[1]
  i2702.defaultInt = i2703[2]
  i2702.name = i2703[3]
  i2702.nameHash = i2703[4]
  i2702.type = i2703[5]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2705 = data
  i2704.name = i2705[0]
  i2704.bytes64 = i2705[1]
  i2704.data = i2705[2]
  return i2704
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2707 = data
  i2706.normalStyle = i2707[0]
  i2706.normalSpacingOffset = i2707[1]
  i2706.boldStyle = i2707[2]
  i2706.boldSpacing = i2707[3]
  i2706.italicStyle = i2707[4]
  i2706.tabSize = i2707[5]
  request.r(i2707[6], i2707[7], 0, i2706, 'atlas')
  i2706.m_SourceFontFileGUID = i2707[8]
  i2706.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2707[9], i2706.m_CreationSettings)
  request.r(i2707[10], i2707[11], 0, i2706, 'm_SourceFontFile')
  i2706.m_SourceFontFilePath = i2707[12]
  i2706.m_AtlasPopulationMode = i2707[13]
  i2706.InternalDynamicOS = !!i2707[14]
  var i2709 = i2707[15]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.add(request.d('UnityEngine.TextCore.Glyph', i2709[i + 0]));
  }
  i2706.m_GlyphTable = i2708
  var i2711 = i2707[16]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.add(request.d('TMPro.TMP_Character', i2711[i + 0]));
  }
  i2706.m_CharacterTable = i2710
  var i2713 = i2707[17]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 2) {
  request.r(i2713[i + 0], i2713[i + 1], 2, i2712, '')
  }
  i2706.m_AtlasTextures = i2712
  i2706.m_AtlasTextureIndex = i2707[18]
  i2706.m_IsMultiAtlasTexturesEnabled = !!i2707[19]
  i2706.m_GetFontFeatures = !!i2707[20]
  i2706.m_ClearDynamicDataOnBuild = !!i2707[21]
  i2706.m_AtlasWidth = i2707[22]
  i2706.m_AtlasHeight = i2707[23]
  i2706.m_AtlasPadding = i2707[24]
  i2706.m_AtlasRenderMode = i2707[25]
  var i2715 = i2707[26]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('UnityEngine.TextCore.GlyphRect', i2715[i + 0]));
  }
  i2706.m_UsedGlyphRects = i2714
  var i2717 = i2707[27]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('UnityEngine.TextCore.GlyphRect', i2717[i + 0]));
  }
  i2706.m_FreeGlyphRects = i2716
  i2706.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2707[28], i2706.m_FontFeatureTable)
  i2706.m_ShouldReimportFontFeatures = !!i2707[29]
  var i2719 = i2707[30]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 1, i2718, '')
  }
  i2706.m_FallbackFontAssetTable = i2718
  var i2721 = i2707[31]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('TMPro.TMP_FontWeightPair', i2721[i + 0]) );
  }
  i2706.m_FontWeightTable = i2720
  var i2723 = i2707[32]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('TMPro.TMP_FontWeightPair', i2723[i + 0]) );
  }
  i2706.fontWeights = i2722
  i2706.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2707[33], i2706.m_fontInfo)
  var i2725 = i2707[34]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.TMP_Glyph', i2725[i + 0]));
  }
  i2706.m_glyphInfoList = i2724
  i2706.m_KerningTable = request.d('TMPro.KerningTable', i2707[35], i2706.m_KerningTable)
  var i2727 = i2707[36]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 1, i2726, '')
  }
  i2706.fallbackFontAssets = i2726
  i2706.m_Version = i2707[37]
  i2706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2707[38], i2706.m_FaceInfo)
  request.r(i2707[39], i2707[40], 0, i2706, 'm_Material')
  return i2706
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2729 = data
  i2728.sourceFontFileName = i2729[0]
  i2728.sourceFontFileGUID = i2729[1]
  i2728.faceIndex = i2729[2]
  i2728.pointSizeSamplingMode = i2729[3]
  i2728.pointSize = i2729[4]
  i2728.padding = i2729[5]
  i2728.paddingMode = i2729[6]
  i2728.packingMode = i2729[7]
  i2728.atlasWidth = i2729[8]
  i2728.atlasHeight = i2729[9]
  i2728.characterSetSelectionMode = i2729[10]
  i2728.characterSequence = i2729[11]
  i2728.referencedFontAssetGUID = i2729[12]
  i2728.referencedTextAssetGUID = i2729[13]
  i2728.fontStyle = i2729[14]
  i2728.fontStyleModifier = i2729[15]
  i2728.renderMode = i2729[16]
  i2728.includeFontFeatures = !!i2729[17]
  return i2728
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2733 = data
  i2732.m_Index = i2733[0]
  i2732.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2733[1], i2732.m_Metrics)
  i2732.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2733[2], i2732.m_GlyphRect)
  i2732.m_Scale = i2733[3]
  i2732.m_AtlasIndex = i2733[4]
  i2732.m_ClassDefinitionType = i2733[5]
  return i2732
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2735 = data
  i2734.m_Width = i2735[0]
  i2734.m_Height = i2735[1]
  i2734.m_HorizontalBearingX = i2735[2]
  i2734.m_HorizontalBearingY = i2735[3]
  i2734.m_HorizontalAdvance = i2735[4]
  return i2734
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2737 = data
  i2736.m_X = i2737[0]
  i2736.m_Y = i2737[1]
  i2736.m_Width = i2737[2]
  i2736.m_Height = i2737[3]
  return i2736
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.TMP_Character' )
  var i2741 = data
  i2740.m_ElementType = i2741[0]
  i2740.m_Unicode = i2741[1]
  i2740.m_GlyphIndex = i2741[2]
  i2740.m_Scale = i2741[3]
  return i2740
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2747 = data
  var i2749 = i2747[0]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('TMPro.MultipleSubstitutionRecord', i2749[i + 0]));
  }
  i2746.m_MultipleSubstitutionRecords = i2748
  var i2751 = i2747[1]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('TMPro.LigatureSubstitutionRecord', i2751[i + 0]));
  }
  i2746.m_LigatureSubstitutionRecords = i2750
  var i2753 = i2747[2]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2753[i + 0]));
  }
  i2746.m_GlyphPairAdjustmentRecords = i2752
  var i2755 = i2747[3]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2755[i + 0]));
  }
  i2746.m_MarkToBaseAdjustmentRecords = i2754
  var i2757 = i2747[4]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2757[i + 0]));
  }
  i2746.m_MarkToMarkAdjustmentRecords = i2756
  return i2746
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2761 = data
  i2760.m_TargetGlyphID = i2761[0]
  i2760.m_SubstituteGlyphIDs = i2761[1]
  return i2760
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2765 = data
  i2764.m_ComponentGlyphIDs = i2765[0]
  i2764.m_LigatureGlyphID = i2765[1]
  return i2764
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2769 = data
  i2768.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2769[0], i2768.m_FirstAdjustmentRecord)
  i2768.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2769[1], i2768.m_SecondAdjustmentRecord)
  i2768.m_FeatureLookupFlags = i2769[2]
  return i2768
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2770 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2771 = data
  i2770.m_GlyphIndex = i2771[0]
  i2770.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2771[1], i2770.m_GlyphValueRecord)
  return i2770
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2773 = data
  i2772.m_XPlacement = i2773[0]
  i2772.m_YPlacement = i2773[1]
  i2772.m_XAdvance = i2773[2]
  i2772.m_YAdvance = i2773[3]
  return i2772
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2776 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2777 = data
  i2776.m_BaseGlyphID = i2777[0]
  i2776.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2777[1], i2776.m_BaseGlyphAnchorPoint)
  i2776.m_MarkGlyphID = i2777[2]
  i2776.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2777[3], i2776.m_MarkPositionAdjustment)
  return i2776
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2779 = data
  i2778.m_XCoordinate = i2779[0]
  i2778.m_YCoordinate = i2779[1]
  return i2778
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2781 = data
  i2780.m_XPositionAdjustment = i2781[0]
  i2780.m_YPositionAdjustment = i2781[1]
  return i2780
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2785 = data
  i2784.m_BaseMarkGlyphID = i2785[0]
  i2784.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2785[1], i2784.m_BaseMarkGlyphAnchorPoint)
  i2784.m_CombiningMarkGlyphID = i2785[2]
  i2784.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2785[3], i2784.m_CombiningMarkPositionAdjustment)
  return i2784
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'regularTypeface')
  request.r(i2791[2], i2791[3], 0, i2790, 'italicTypeface')
  return i2790
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2793 = data
  i2792.Name = i2793[0]
  i2792.PointSize = i2793[1]
  i2792.Scale = i2793[2]
  i2792.CharacterCount = i2793[3]
  i2792.LineHeight = i2793[4]
  i2792.Baseline = i2793[5]
  i2792.Ascender = i2793[6]
  i2792.CapHeight = i2793[7]
  i2792.Descender = i2793[8]
  i2792.CenterLine = i2793[9]
  i2792.SuperscriptOffset = i2793[10]
  i2792.SubscriptOffset = i2793[11]
  i2792.SubSize = i2793[12]
  i2792.Underline = i2793[13]
  i2792.UnderlineThickness = i2793[14]
  i2792.strikethrough = i2793[15]
  i2792.strikethroughThickness = i2793[16]
  i2792.TabWidth = i2793[17]
  i2792.Padding = i2793[18]
  i2792.AtlasWidth = i2793[19]
  i2792.AtlasHeight = i2793[20]
  return i2792
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2797 = data
  i2796.id = i2797[0]
  i2796.x = i2797[1]
  i2796.y = i2797[2]
  i2796.width = i2797[3]
  i2796.height = i2797[4]
  i2796.xOffset = i2797[5]
  i2796.yOffset = i2797[6]
  i2796.xAdvance = i2797[7]
  i2796.scale = i2797[8]
  return i2796
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.KerningTable' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('TMPro.KerningPair', i2801[i + 0]));
  }
  i2798.kerningPairs = i2800
  return i2798
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.KerningPair' )
  var i2805 = data
  i2804.xOffset = i2805[0]
  i2804.m_FirstGlyph = i2805[1]
  i2804.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2805[2], i2804.m_FirstGlyphAdjustments)
  i2804.m_SecondGlyph = i2805[3]
  i2804.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2805[4], i2804.m_SecondGlyphAdjustments)
  i2804.m_IgnoreSpacingAdjustments = !!i2805[5]
  return i2804
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2807 = data
  i2806.m_FaceIndex = i2807[0]
  i2806.m_FamilyName = i2807[1]
  i2806.m_StyleName = i2807[2]
  i2806.m_PointSize = i2807[3]
  i2806.m_Scale = i2807[4]
  i2806.m_UnitsPerEM = i2807[5]
  i2806.m_LineHeight = i2807[6]
  i2806.m_AscentLine = i2807[7]
  i2806.m_CapLine = i2807[8]
  i2806.m_MeanLine = i2807[9]
  i2806.m_Baseline = i2807[10]
  i2806.m_DescentLine = i2807[11]
  i2806.m_SuperscriptOffset = i2807[12]
  i2806.m_SuperscriptSize = i2807[13]
  i2806.m_SubscriptOffset = i2807[14]
  i2806.m_SubscriptSize = i2807[15]
  i2806.m_UnderlineOffset = i2807[16]
  i2806.m_UnderlineThickness = i2807[17]
  i2806.m_StrikethroughOffset = i2807[18]
  i2806.m_StrikethroughThickness = i2807[19]
  i2806.m_TabWidth = i2807[20]
  return i2806
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i2808 = root || request.c( 'PlayerSO' )
  var i2809 = data
  i2808.maxSpeed = i2809[0]
  i2808.jumpImpulse = i2809[1]
  return i2808
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i2810 = root || request.c( 'FindMonsterDatabase' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i2813.length; i += 2) {
  request.r(i2813[i + 0], i2813[i + 1], 1, i2812, '')
  }
  i2810.database = i2812
  return i2810
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i2816 = root || request.c( 'MonsterSO' )
  var i2817 = data
  i2816.id = i2817[0]
  i2816.displayName = i2817[1]
  request.r(i2817[2], i2817[3], 0, i2816, 'icon')
  request.r(i2817[4], i2817[5], 0, i2816, 'prefab')
  return i2816
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_Settings' )
  var i2819 = data
  i2818.assetVersion = i2819[0]
  i2818.m_TextWrappingMode = i2819[1]
  i2818.m_enableKerning = !!i2819[2]
  var i2821 = i2819[3]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(i2821[i + 0]);
  }
  i2818.m_ActiveFontFeatures = i2820
  i2818.m_enableExtraPadding = !!i2819[4]
  i2818.m_enableTintAllSprites = !!i2819[5]
  i2818.m_enableParseEscapeCharacters = !!i2819[6]
  i2818.m_EnableRaycastTarget = !!i2819[7]
  i2818.m_GetFontFeaturesAtRuntime = !!i2819[8]
  i2818.m_missingGlyphCharacter = i2819[9]
  i2818.m_ClearDynamicDataOnBuild = !!i2819[10]
  i2818.m_warningsDisabled = !!i2819[11]
  request.r(i2819[12], i2819[13], 0, i2818, 'm_defaultFontAsset')
  i2818.m_defaultFontAssetPath = i2819[14]
  i2818.m_defaultFontSize = i2819[15]
  i2818.m_defaultAutoSizeMinRatio = i2819[16]
  i2818.m_defaultAutoSizeMaxRatio = i2819[17]
  i2818.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2819[18], i2819[19] )
  i2818.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2819[20], i2819[21] )
  i2818.m_autoSizeTextContainer = !!i2819[22]
  i2818.m_IsTextObjectScaleStatic = !!i2819[23]
  var i2823 = i2819[24]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2823.length; i += 2) {
  request.r(i2823[i + 0], i2823[i + 1], 1, i2822, '')
  }
  i2818.m_fallbackFontAssets = i2822
  i2818.m_matchMaterialPreset = !!i2819[25]
  i2818.m_HideSubTextObjects = !!i2819[26]
  request.r(i2819[27], i2819[28], 0, i2818, 'm_defaultSpriteAsset')
  i2818.m_defaultSpriteAssetPath = i2819[29]
  i2818.m_enableEmojiSupport = !!i2819[30]
  i2818.m_MissingCharacterSpriteUnicode = i2819[31]
  var i2825 = i2819[32]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 1, i2824, '')
  }
  i2818.m_EmojiFallbackTextAssets = i2824
  i2818.m_defaultColorGradientPresetsPath = i2819[33]
  request.r(i2819[34], i2819[35], 0, i2818, 'm_defaultStyleSheet')
  i2818.m_StyleSheetsResourcePath = i2819[36]
  request.r(i2819[37], i2819[38], 0, i2818, 'm_leadingCharacters')
  request.r(i2819[39], i2819[40], 0, i2818, 'm_followingCharacters')
  i2818.m_UseModernHangulLineBreakingRules = !!i2819[41]
  return i2818
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2829 = data
  request.r(i2829[0], i2829[1], 0, i2828, 'spriteSheet')
  var i2831 = i2829[2]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('TMPro.TMP_Sprite', i2831[i + 0]));
  }
  i2828.spriteInfoList = i2830
  var i2833 = i2829[3]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 1, i2832, '')
  }
  i2828.fallbackSpriteAssets = i2832
  var i2835 = i2829[4]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(request.d('TMPro.TMP_SpriteCharacter', i2835[i + 0]));
  }
  i2828.m_SpriteCharacterTable = i2834
  var i2837 = i2829[5]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.add(request.d('TMPro.TMP_SpriteGlyph', i2837[i + 0]));
  }
  i2828.m_GlyphTable = i2836
  i2828.m_Version = i2829[6]
  i2828.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2829[7], i2828.m_FaceInfo)
  request.r(i2829[8], i2829[9], 0, i2828, 'm_Material')
  return i2828
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2841 = data
  i2840.name = i2841[0]
  i2840.hashCode = i2841[1]
  i2840.unicode = i2841[2]
  i2840.pivot = new pc.Vec2( i2841[3], i2841[4] )
  request.r(i2841[5], i2841[6], 0, i2840, 'sprite')
  i2840.id = i2841[7]
  i2840.x = i2841[8]
  i2840.y = i2841[9]
  i2840.width = i2841[10]
  i2840.height = i2841[11]
  i2840.xOffset = i2841[12]
  i2840.yOffset = i2841[13]
  i2840.xAdvance = i2841[14]
  i2840.scale = i2841[15]
  return i2840
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2846 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2847 = data
  i2846.m_Name = i2847[0]
  i2846.m_ElementType = i2847[1]
  i2846.m_Unicode = i2847[2]
  i2846.m_GlyphIndex = i2847[3]
  i2846.m_Scale = i2847[4]
  return i2846
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2850 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'sprite')
  i2850.m_Index = i2851[2]
  i2850.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2851[3], i2850.m_Metrics)
  i2850.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2851[4], i2850.m_GlyphRect)
  i2850.m_Scale = i2851[5]
  i2850.m_AtlasIndex = i2851[6]
  i2850.m_ClassDefinitionType = i2851[7]
  return i2850
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2852 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2853 = data
  var i2855 = i2853[0]
  var i2854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.add(request.d('TMPro.TMP_Style', i2855[i + 0]));
  }
  i2852.m_StyleList = i2854
  return i2852
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.TMP_Style' )
  var i2859 = data
  i2858.m_Name = i2859[0]
  i2858.m_HashCode = i2859[1]
  i2858.m_OpeningDefinition = i2859[2]
  i2858.m_ClosingDefinition = i2859[3]
  i2858.m_OpeningTagArray = i2859[4]
  i2858.m_ClosingTagArray = i2859[5]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2861 = data
  var i2863 = i2861[0]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2863[i + 0]) );
  }
  i2860.files = i2862
  i2860.componentToPrefabIds = i2861[1]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2867 = data
  i2866.path = i2867[0]
  request.r(i2867[1], i2867[2], 0, i2866, 'unityObject')
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2871[i + 0]) );
  }
  i2868.scriptsExecutionOrder = i2870
  var i2873 = i2869[1]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2873[i + 0]) );
  }
  i2868.sortingLayers = i2872
  var i2875 = i2869[2]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2875[i + 0]) );
  }
  i2868.cullingLayers = i2874
  i2868.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2869[3], i2868.timeSettings)
  i2868.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2869[4], i2868.physicsSettings)
  i2868.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2869[5], i2868.physics2DSettings)
  i2868.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2869[6], i2868.qualitySettings)
  i2868.enableRealtimeShadows = !!i2869[7]
  i2868.enableAutoInstancing = !!i2869[8]
  i2868.enableStaticBatching = !!i2869[9]
  i2868.enableDynamicBatching = !!i2869[10]
  i2868.usePreservativeDynamicBatching = !!i2869[11]
  i2868.lightmapEncodingQuality = i2869[12]
  i2868.desiredColorSpace = i2869[13]
  var i2877 = i2869[14]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2868.allTags = i2876
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2881 = data
  i2880.name = i2881[0]
  i2880.value = i2881[1]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2885 = data
  i2884.id = i2885[0]
  i2884.name = i2885[1]
  i2884.value = i2885[2]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2889 = data
  i2888.id = i2889[0]
  i2888.name = i2889[1]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2891 = data
  i2890.fixedDeltaTime = i2891[0]
  i2890.maximumDeltaTime = i2891[1]
  i2890.timeScale = i2891[2]
  i2890.maximumParticleTimestep = i2891[3]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2893 = data
  i2892.gravity = new pc.Vec3( i2893[0], i2893[1], i2893[2] )
  i2892.defaultSolverIterations = i2893[3]
  i2892.bounceThreshold = i2893[4]
  i2892.autoSyncTransforms = !!i2893[5]
  i2892.autoSimulation = !!i2893[6]
  var i2895 = i2893[7]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2895[i + 0]) );
  }
  i2892.collisionMatrix = i2894
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2899 = data
  i2898.enabled = !!i2899[0]
  i2898.layerId = i2899[1]
  i2898.otherLayerId = i2899[2]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'material')
  i2900.gravity = new pc.Vec2( i2901[2], i2901[3] )
  i2900.positionIterations = i2901[4]
  i2900.velocityIterations = i2901[5]
  i2900.velocityThreshold = i2901[6]
  i2900.maxLinearCorrection = i2901[7]
  i2900.maxAngularCorrection = i2901[8]
  i2900.maxTranslationSpeed = i2901[9]
  i2900.maxRotationSpeed = i2901[10]
  i2900.baumgarteScale = i2901[11]
  i2900.baumgarteTOIScale = i2901[12]
  i2900.timeToSleep = i2901[13]
  i2900.linearSleepTolerance = i2901[14]
  i2900.angularSleepTolerance = i2901[15]
  i2900.defaultContactOffset = i2901[16]
  i2900.autoSimulation = !!i2901[17]
  i2900.queriesHitTriggers = !!i2901[18]
  i2900.queriesStartInColliders = !!i2901[19]
  i2900.callbacksOnDisable = !!i2901[20]
  i2900.reuseCollisionCallbacks = !!i2901[21]
  i2900.autoSyncTransforms = !!i2901[22]
  var i2903 = i2901[23]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2903[i + 0]) );
  }
  i2900.collisionMatrix = i2902
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2907 = data
  i2906.enabled = !!i2907[0]
  i2906.layerId = i2907[1]
  i2906.otherLayerId = i2907[2]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2909 = data
  var i2911 = i2909[0]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2911[i + 0]) );
  }
  i2908.qualityLevels = i2910
  var i2913 = i2909[1]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( i2913[i + 0] );
  }
  i2908.names = i2912
  i2908.shadows = i2909[2]
  i2908.anisotropicFiltering = i2909[3]
  i2908.antiAliasing = i2909[4]
  i2908.lodBias = i2909[5]
  i2908.shadowCascades = i2909[6]
  i2908.shadowDistance = i2909[7]
  i2908.shadowmaskMode = i2909[8]
  i2908.shadowProjection = i2909[9]
  i2908.shadowResolution = i2909[10]
  i2908.softParticles = !!i2909[11]
  i2908.softVegetation = !!i2909[12]
  i2908.activeColorSpace = i2909[13]
  i2908.desiredColorSpace = i2909[14]
  i2908.masterTextureLimit = i2909[15]
  i2908.maxQueuedFrames = i2909[16]
  i2908.particleRaycastBudget = i2909[17]
  i2908.pixelLightCount = i2909[18]
  i2908.realtimeReflectionProbes = !!i2909[19]
  i2908.shadowCascade2Split = i2909[20]
  i2908.shadowCascade4Split = new pc.Vec3( i2909[21], i2909[22], i2909[23] )
  i2908.streamingMipmapsActive = !!i2909[24]
  i2908.vSyncCount = i2909[25]
  i2908.asyncUploadBufferSize = i2909[26]
  i2908.asyncUploadTimeSlice = i2909[27]
  i2908.billboardsFaceCameraPosition = !!i2909[28]
  i2908.shadowNearPlaneOffset = i2909[29]
  i2908.streamingMipmapsMemoryBudget = i2909[30]
  i2908.maximumLODLevel = i2909[31]
  i2908.streamingMipmapsAddAllCameras = !!i2909[32]
  i2908.streamingMipmapsMaxLevelReduction = i2909[33]
  i2908.streamingMipmapsRenderersPerFrame = i2909[34]
  i2908.resolutionScalingFixedDPIFactor = i2909[35]
  i2908.streamingMipmapsMaxFileIORequests = i2909[36]
  i2908.currentQualityLevel = i2909[37]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2917 = data
  i2916.name = i2917[0]
  var i2919 = i2917[1]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2919[i + 0]) );
  }
  i2916.tos = i2918
  var i2921 = i2917[2]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( i2921[i + 0] );
  }
  i2916.constant = i2920
  i2916.isValid = !!i2917[3]
  i2916.isHuman = !!i2917[4]
  i2916.hasRootMotion = !!i2917[5]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2925 = data
  i2924.hash = i2925[0]
  i2924.path = i2925[1]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2929 = data
  i2928.weight = i2929[0]
  i2928.vertices = i2929[1]
  i2928.normals = i2929[2]
  i2928.tangents = i2929[3]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2933 = data
  i2932.time = i2933[0]
  request.r(i2933[1], i2933[2], 0, i2932, 'value')
  return i2932
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2934 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2935 = data
  i2934.xPlacement = i2935[0]
  i2934.yPlacement = i2935[1]
  i2934.xAdvance = i2935[2]
  i2934.yAdvance = i2935[3]
  return i2934
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[57],"84":[40],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[40],"106":[9],"107":[108],"109":[108],"29":[28],"48":[54],"110":[31],"111":[28],"112":[35,28],"113":[9],"114":[35,28],"115":[28],"116":[28],"117":[9,28],"38":[28,35],"118":[119],"120":[119],"121":[119],"122":[28],"123":[28],"33":[29],"34":[35,28],"124":[28],"31":[29],"125":[28],"126":[28],"127":[28],"128":[28],"129":[28],"130":[28],"131":[28],"44":[28],"132":[28],"133":[35,28],"134":[28],"135":[28],"136":[28],"137":[28],"138":[35,28],"139":[28],"140":[59],"141":[59],"60":[59],"142":[59],"143":[40],"144":[40]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","HiddenMonster","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshCollider","UnityEngine.Rigidbody","PortalGlow","UnityEngine.SpriteRenderer","TeleportPortal","UnityEngine.AudioClip","UnityEngine.Sprite","ScaleYoyo","UnityEngine.SphereCollider","UnityEngine.Shader","UnityEngine.Texture2D","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","GameButton","HideButton","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","UnityEngine.UI.Mask","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","UnityEngine.Animator","FM3rdInput","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","PlayableAudio","LunaController","PointerHand","ShineBurst","ScreenTransition","MorphHuntStory","PlayableFrame","ControlsTutorial","UnityEngine.Cubemap","MonsterSO","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "FSAHM_V12";

Deserializers.lunaInitializationTime = "11/04/2026 09:24:18";

Deserializers.lunaDaysRunning = "1.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_FSAHM_V12_HoaiTT";

Deserializers.lunaAppID = "42700";

Deserializers.projectId = "83b351e714daeb74c83c822ea4d255be";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1642";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4150";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.FSAHM_V12";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e33b9ddd-0481-44e1-ab47-f2b9b7da316d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

