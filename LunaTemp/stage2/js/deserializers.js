var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointSpring' )
  var i2173 = data
  i2172.spring = i2173[0]
  i2172.damper = i2173[1]
  i2172.targetPosition = i2173[2]
  return i2172
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointMotor' )
  var i2175 = data
  i2174.m_TargetVelocity = i2175[0]
  i2174.m_Force = i2175[1]
  i2174.m_FreeSpin = i2175[2]
  return i2174
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointLimits' )
  var i2177 = data
  i2176.m_Min = i2177[0]
  i2176.m_Max = i2177[1]
  i2176.m_Bounciness = i2177[2]
  i2176.m_BounceMinVelocity = i2177[3]
  i2176.m_ContactDistance = i2177[4]
  i2176.minBounce = i2177[5]
  i2176.maxBounce = i2177[6]
  return i2176
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointDrive' )
  var i2179 = data
  i2178.m_PositionSpring = i2179[0]
  i2178.m_PositionDamper = i2179[1]
  i2178.m_MaximumForce = i2179[2]
  i2178.m_UseAcceleration = i2179[3]
  return i2178
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2181 = data
  i2180.m_Spring = i2181[0]
  i2180.m_Damper = i2181[1]
  return i2180
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2183 = data
  i2182.m_Limit = i2183[0]
  i2182.m_Bounciness = i2183[1]
  i2182.m_ContactDistance = i2183[2]
  return i2182
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2185 = data
  i2184.m_ExtremumSlip = i2185[0]
  i2184.m_ExtremumValue = i2185[1]
  i2184.m_AsymptoteSlip = i2185[2]
  i2184.m_AsymptoteValue = i2185[3]
  i2184.m_Stiffness = i2185[4]
  return i2184
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2187 = data
  i2186.m_LowerAngle = i2187[0]
  i2186.m_UpperAngle = i2187[1]
  return i2186
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2189 = data
  i2188.m_MotorSpeed = i2189[0]
  i2188.m_MaximumMotorTorque = i2189[1]
  return i2188
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2191 = data
  i2190.m_DampingRatio = i2191[0]
  i2190.m_Frequency = i2191[1]
  i2190.m_Angle = i2191[2]
  return i2190
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2193 = data
  i2192.m_LowerTranslation = i2193[0]
  i2192.m_UpperTranslation = i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.width = i2195[1]
  i2194.height = i2195[2]
  i2194.mipmapCount = i2195[3]
  i2194.anisoLevel = i2195[4]
  i2194.filterMode = i2195[5]
  i2194.hdr = !!i2195[6]
  i2194.format = i2195[7]
  i2194.wrapMode = i2195[8]
  i2194.alphaIsTransparency = !!i2195[9]
  i2194.alphaSource = i2195[10]
  i2194.graphicsFormat = i2195[11]
  i2194.sRGBTexture = !!i2195[12]
  i2194.desiredColorSpace = i2195[13]
  i2194.wrapU = i2195[14]
  i2194.wrapV = i2195[15]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2196 = root || new pc.UnityMaterial()
  var i2197 = data
  i2196.name = i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'shader')
  i2196.renderQueue = i2197[3]
  i2196.enableInstancing = !!i2197[4]
  var i2199 = i2197[5]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2199[i + 0]) );
  }
  i2196.floatParameters = i2198
  var i2201 = i2197[6]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2201[i + 0]) );
  }
  i2196.colorParameters = i2200
  var i2203 = i2197[7]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2203[i + 0]) );
  }
  i2196.vectorParameters = i2202
  var i2205 = i2197[8]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2205[i + 0]) );
  }
  i2196.textureParameters = i2204
  var i2207 = i2197[9]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2207[i + 0]) );
  }
  i2196.materialFlags = i2206
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.value = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.value = new pc.Color(i2215[1], i2215[2], i2215[3], i2215[4])
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.value = new pc.Vec4( i2219[1], i2219[2], i2219[3], i2219[4] )
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2223 = data
  i2222.name = i2223[0]
  request.r(i2223[1], i2223[2], 0, i2222, 'value')
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.enabled = !!i2227[1]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.halfPrecision = !!i2229[1]
  i2228.useSimplification = !!i2229[2]
  i2228.useUInt32IndexFormat = !!i2229[3]
  i2228.vertexCount = i2229[4]
  i2228.aabb = i2229[5]
  var i2231 = i2229[6]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( !!i2231[i + 0] );
  }
  i2228.streams = i2230
  i2228.vertices = i2229[7]
  var i2233 = i2229[8]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2233[i + 0]) );
  }
  i2228.subMeshes = i2232
  var i2235 = i2229[9]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 16) {
    i2234.push( new pc.Mat4().setData(i2235[i + 0], i2235[i + 1], i2235[i + 2], i2235[i + 3],  i2235[i + 4], i2235[i + 5], i2235[i + 6], i2235[i + 7],  i2235[i + 8], i2235[i + 9], i2235[i + 10], i2235[i + 11],  i2235[i + 12], i2235[i + 13], i2235[i + 14], i2235[i + 15]) );
  }
  i2228.bindposes = i2234
  var i2237 = i2229[10]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2237[i + 0]) );
  }
  i2228.blendShapes = i2236
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2243 = data
  i2242.triangles = i2243[0]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2249 = data
  i2248.name = i2249[0]
  var i2251 = i2249[1]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2251[i + 0]) );
  }
  i2248.frames = i2250
  return i2248
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'sharedMesh')
  i2262.convex = !!i2263[2]
  i2262.enabled = !!i2263[3]
  i2262.isTrigger = !!i2263[4]
  request.r(i2263[5], i2263[6], 0, i2262, 'material')
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.tagId = i2265[1]
  i2264.enabled = !!i2265[2]
  i2264.isStatic = !!i2265[3]
  i2264.layer = i2265[4]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2267 = data
  i2266.center = new pc.Vec3( i2267[0], i2267[1], i2267[2] )
  i2266.size = new pc.Vec3( i2267[3], i2267[4], i2267[5] )
  i2266.enabled = !!i2267[6]
  i2266.isTrigger = !!i2267[7]
  request.r(i2267[8], i2267[9], 0, i2266, 'material')
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2269 = data
  i2268.center = new pc.Vec3( i2269[0], i2269[1], i2269[2] )
  i2268.radius = i2269[3]
  i2268.height = i2269[4]
  i2268.direction = i2269[5]
  i2268.enabled = !!i2269[6]
  i2268.isTrigger = !!i2269[7]
  request.r(i2269[8], i2269[9], 0, i2268, 'material')
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'animatorController')
  request.r(i2271[2], i2271[3], 0, i2270, 'avatar')
  i2270.updateMode = i2271[4]
  i2270.hasTransformHierarchy = !!i2271[5]
  i2270.applyRootMotion = !!i2271[6]
  var i2273 = i2271[7]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.humanBones = i2272
  i2270.enabled = !!i2271[8]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'clip')
  request.r(i2277[2], i2277[3], 0, i2276, 'outputAudioMixerGroup')
  i2276.playOnAwake = !!i2277[4]
  i2276.loop = !!i2277[5]
  i2276.time = i2277[6]
  i2276.volume = i2277[7]
  i2276.pitch = i2277[8]
  i2276.enabled = !!i2277[9]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2279 = data
  i2278.color = new pc.Color(i2279[0], i2279[1], i2279[2], i2279[3])
  request.r(i2279[4], i2279[5], 0, i2278, 'sprite')
  i2278.flipX = !!i2279[6]
  i2278.flipY = !!i2279[7]
  i2278.drawMode = i2279[8]
  i2278.size = new pc.Vec2( i2279[9], i2279[10] )
  i2278.tileMode = i2279[11]
  i2278.adaptiveModeThreshold = i2279[12]
  i2278.maskInteraction = i2279[13]
  i2278.spriteSortPoint = i2279[14]
  i2278.enabled = !!i2279[15]
  request.r(i2279[16], i2279[17], 0, i2278, 'sharedMaterial')
  var i2281 = i2279[18]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2278.sharedMaterials = i2280
  i2278.receiveShadows = !!i2279[19]
  i2278.shadowCastingMode = i2279[20]
  i2278.sortingLayerID = i2279[21]
  i2278.sortingOrder = i2279[22]
  i2278.lightmapIndex = i2279[23]
  i2278.lightmapSceneIndex = i2279[24]
  i2278.lightmapScaleOffset = new pc.Vec4( i2279[25], i2279[26], i2279[27], i2279[28] )
  i2278.lightProbeUsage = i2279[29]
  i2278.reflectionProbeUsage = i2279[30]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.atlasId = i2283[1]
  i2282.mipmapCount = i2283[2]
  i2282.hdr = !!i2283[3]
  i2282.size = i2283[4]
  i2282.anisoLevel = i2283[5]
  i2282.filterMode = i2283[6]
  var i2285 = i2283[7]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 4) {
    i2284.push( UnityEngine.Rect.MinMaxRect(i2285[i + 0], i2285[i + 1], i2285[i + 2], i2285[i + 3]) );
  }
  i2282.rects = i2284
  i2282.wrapU = i2283[8]
  i2282.wrapV = i2283[9]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.index = i2289[1]
  i2288.startup = !!i2289[2]
  return i2288
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_FirstSelected')
  i2290.m_sendNavigationEvents = !!i2291[2]
  i2290.m_DragThreshold = i2291[3]
  return i2290
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2293 = data
  i2292.m_HorizontalAxis = i2293[0]
  i2292.m_VerticalAxis = i2293[1]
  i2292.m_SubmitButton = i2293[2]
  i2292.m_CancelButton = i2293[3]
  i2292.m_InputActionsPerSecond = i2293[4]
  i2292.m_RepeatDelay = i2293[5]
  i2292.m_ForceModuleActive = !!i2293[6]
  i2292.m_SendPointerHoverToParent = !!i2293[7]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2295 = data
  i2294.type = i2295[0]
  i2294.color = new pc.Color(i2295[1], i2295[2], i2295[3], i2295[4])
  i2294.cullingMask = i2295[5]
  i2294.intensity = i2295[6]
  i2294.range = i2295[7]
  i2294.spotAngle = i2295[8]
  i2294.shadows = i2295[9]
  i2294.shadowNormalBias = i2295[10]
  i2294.shadowBias = i2295[11]
  i2294.shadowStrength = i2295[12]
  i2294.shadowResolution = i2295[13]
  i2294.lightmapBakeType = i2295[14]
  i2294.renderMode = i2295[15]
  request.r(i2295[16], i2295[17], 0, i2294, 'cookie')
  i2294.cookieSize = i2295[18]
  i2294.shadowNearPlane = i2295[19]
  i2294.occlusionMaskChannel = i2295[20]
  i2294.isBaked = !!i2295[21]
  i2294.mixedLightingMode = i2295[22]
  i2294.enabled = !!i2295[23]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2297 = data
  i2296.pivot = new pc.Vec2( i2297[0], i2297[1] )
  i2296.anchorMin = new pc.Vec2( i2297[2], i2297[3] )
  i2296.anchorMax = new pc.Vec2( i2297[4], i2297[5] )
  i2296.sizeDelta = new pc.Vec2( i2297[6], i2297[7] )
  i2296.anchoredPosition3D = new pc.Vec3( i2297[8], i2297[9], i2297[10] )
  i2296.rotation = new pc.Quat(i2297[11], i2297[12], i2297[13], i2297[14])
  i2296.scale = new pc.Vec3( i2297[15], i2297[16], i2297[17] )
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2299 = data
  i2298.planeDistance = i2299[0]
  i2298.referencePixelsPerUnit = i2299[1]
  i2298.isFallbackOverlay = !!i2299[2]
  i2298.renderMode = i2299[3]
  i2298.renderOrder = i2299[4]
  i2298.sortingLayerName = i2299[5]
  i2298.sortingOrder = i2299[6]
  i2298.scaleFactor = i2299[7]
  request.r(i2299[8], i2299[9], 0, i2298, 'worldCamera')
  i2298.overrideSorting = !!i2299[10]
  i2298.pixelPerfect = !!i2299[11]
  i2298.targetDisplay = i2299[12]
  i2298.overridePixelPerfect = !!i2299[13]
  i2298.enabled = !!i2299[14]
  return i2298
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2301 = data
  i2300.m_UiScaleMode = i2301[0]
  i2300.m_ReferencePixelsPerUnit = i2301[1]
  i2300.m_ScaleFactor = i2301[2]
  i2300.m_ReferenceResolution = new pc.Vec2( i2301[3], i2301[4] )
  i2300.m_ScreenMatchMode = i2301[5]
  i2300.m_MatchWidthOrHeight = i2301[6]
  i2300.m_PhysicalUnit = i2301[7]
  i2300.m_FallbackScreenDPI = i2301[8]
  i2300.m_DefaultSpriteDPI = i2301[9]
  i2300.m_DynamicPixelsPerUnit = i2301[10]
  i2300.m_PresetInfoIsWorld = !!i2301[11]
  return i2300
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2303 = data
  i2302.m_IgnoreReversedGraphics = !!i2303[0]
  i2302.m_BlockingObjects = i2303[1]
  i2302.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2303[2] )
  return i2302
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2304 = root || request.c( 'Joystick' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'background')
  request.r(i2305[2], i2305[3], 0, i2304, 'joy')
  i2304.deadZone = i2305[4]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2307 = data
  i2306.cullTransparentMesh = !!i2307[0]
  return i2306
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Image' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'm_Sprite')
  i2308.m_Type = i2309[2]
  i2308.m_PreserveAspect = !!i2309[3]
  i2308.m_FillCenter = !!i2309[4]
  i2308.m_FillMethod = i2309[5]
  i2308.m_FillAmount = i2309[6]
  i2308.m_FillClockwise = !!i2309[7]
  i2308.m_FillOrigin = i2309[8]
  i2308.m_UseSpriteMesh = !!i2309[9]
  i2308.m_PixelsPerUnitMultiplier = i2309[10]
  request.r(i2309[11], i2309[12], 0, i2308, 'm_Material')
  i2308.m_Maskable = !!i2309[13]
  i2308.m_Color = new pc.Color(i2309[14], i2309[15], i2309[16], i2309[17])
  i2308.m_RaycastTarget = !!i2309[18]
  i2308.m_RaycastPadding = new pc.Vec4( i2309[19], i2309[20], i2309[21], i2309[22] )
  return i2308
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2310 = root || request.c( 'JumpButton' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'button')
  return i2310
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Button' )
  var i2313 = data
  i2312.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2313[0], i2312.m_OnClick)
  i2312.m_Navigation = request.d('UnityEngine.UI.Navigation', i2313[1], i2312.m_Navigation)
  i2312.m_Transition = i2313[2]
  i2312.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2313[3], i2312.m_Colors)
  i2312.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2313[4], i2312.m_SpriteState)
  i2312.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2313[5], i2312.m_AnimationTriggers)
  i2312.m_Interactable = !!i2313[6]
  request.r(i2313[7], i2313[8], 0, i2312, 'm_TargetGraphic')
  return i2312
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2315 = data
  i2314.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2315[0], i2314.m_PersistentCalls)
  return i2314
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('UnityEngine.Events.PersistentCall', i2319[i + 0]));
  }
  i2316.m_Calls = i2318
  return i2316
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_Target')
  i2322.m_TargetAssemblyTypeName = i2323[2]
  i2322.m_MethodName = i2323[3]
  i2322.m_Mode = i2323[4]
  i2322.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2323[5], i2322.m_Arguments)
  i2322.m_CallState = i2323[6]
  return i2322
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2325 = data
  i2324.m_Mode = i2325[0]
  i2324.m_WrapAround = !!i2325[1]
  request.r(i2325[2], i2325[3], 0, i2324, 'm_SelectOnUp')
  request.r(i2325[4], i2325[5], 0, i2324, 'm_SelectOnDown')
  request.r(i2325[6], i2325[7], 0, i2324, 'm_SelectOnLeft')
  request.r(i2325[8], i2325[9], 0, i2324, 'm_SelectOnRight')
  return i2324
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2327 = data
  i2326.m_NormalColor = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  i2326.m_HighlightedColor = new pc.Color(i2327[4], i2327[5], i2327[6], i2327[7])
  i2326.m_PressedColor = new pc.Color(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.m_SelectedColor = new pc.Color(i2327[12], i2327[13], i2327[14], i2327[15])
  i2326.m_DisabledColor = new pc.Color(i2327[16], i2327[17], i2327[18], i2327[19])
  i2326.m_ColorMultiplier = i2327[20]
  i2326.m_FadeDuration = i2327[21]
  return i2326
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_HighlightedSprite')
  request.r(i2329[2], i2329[3], 0, i2328, 'm_PressedSprite')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_SelectedSprite')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_DisabledSprite')
  return i2328
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2331 = data
  i2330.m_NormalTrigger = i2331[0]
  i2330.m_HighlightedTrigger = i2331[1]
  i2330.m_PressedTrigger = i2331[2]
  i2330.m_SelectedTrigger = i2331[3]
  i2330.m_DisabledTrigger = i2331[4]
  return i2330
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2333 = data
  i2332.m_ShowMaskGraphic = !!i2333[0]
  return i2332
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2335 = data
  i2334.m_hasFontAssetChanged = !!i2335[0]
  request.r(i2335[1], i2335[2], 0, i2334, 'm_baseMaterial')
  i2334.m_maskOffset = new pc.Vec4( i2335[3], i2335[4], i2335[5], i2335[6] )
  i2334.m_text = i2335[7]
  i2334.m_isRightToLeft = !!i2335[8]
  request.r(i2335[9], i2335[10], 0, i2334, 'm_fontAsset')
  request.r(i2335[11], i2335[12], 0, i2334, 'm_sharedMaterial')
  var i2337 = i2335[13]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.m_fontSharedMaterials = i2336
  request.r(i2335[14], i2335[15], 0, i2334, 'm_fontMaterial')
  var i2339 = i2335[16]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2334.m_fontMaterials = i2338
  i2334.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2335[17], i2335[18], i2335[19], i2335[20])
  i2334.m_fontColor = new pc.Color(i2335[21], i2335[22], i2335[23], i2335[24])
  i2334.m_enableVertexGradient = !!i2335[25]
  i2334.m_colorMode = i2335[26]
  i2334.m_fontColorGradient = request.d('TMPro.VertexGradient', i2335[27], i2334.m_fontColorGradient)
  request.r(i2335[28], i2335[29], 0, i2334, 'm_fontColorGradientPreset')
  request.r(i2335[30], i2335[31], 0, i2334, 'm_spriteAsset')
  i2334.m_tintAllSprites = !!i2335[32]
  request.r(i2335[33], i2335[34], 0, i2334, 'm_StyleSheet')
  i2334.m_TextStyleHashCode = i2335[35]
  i2334.m_overrideHtmlColors = !!i2335[36]
  i2334.m_faceColor = UnityEngine.Color32.ConstructColor(i2335[37], i2335[38], i2335[39], i2335[40])
  i2334.m_fontSize = i2335[41]
  i2334.m_fontSizeBase = i2335[42]
  i2334.m_fontWeight = i2335[43]
  i2334.m_enableAutoSizing = !!i2335[44]
  i2334.m_fontSizeMin = i2335[45]
  i2334.m_fontSizeMax = i2335[46]
  i2334.m_fontStyle = i2335[47]
  i2334.m_HorizontalAlignment = i2335[48]
  i2334.m_VerticalAlignment = i2335[49]
  i2334.m_textAlignment = i2335[50]
  i2334.m_characterSpacing = i2335[51]
  i2334.m_characterHorizontalScale = i2335[52]
  i2334.m_wordSpacing = i2335[53]
  i2334.m_lineSpacing = i2335[54]
  i2334.m_lineSpacingMax = i2335[55]
  i2334.m_paragraphSpacing = i2335[56]
  i2334.m_charWidthMaxAdj = i2335[57]
  i2334.m_TextWrappingMode = i2335[58]
  i2334.m_wordWrappingRatios = i2335[59]
  i2334.m_overflowMode = i2335[60]
  request.r(i2335[61], i2335[62], 0, i2334, 'm_linkedTextComponent')
  request.r(i2335[63], i2335[64], 0, i2334, 'parentLinkedComponent')
  i2334.m_enableKerning = !!i2335[65]
  var i2341 = i2335[66]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(i2341[i + 0]);
  }
  i2334.m_ActiveFontFeatures = i2340
  i2334.m_enableExtraPadding = !!i2335[67]
  i2334.checkPaddingRequired = !!i2335[68]
  i2334.m_isRichText = !!i2335[69]
  i2334.m_parseCtrlCharacters = !!i2335[70]
  i2334.m_isOrthographic = !!i2335[71]
  i2334.m_isCullingEnabled = !!i2335[72]
  i2334.m_horizontalMapping = i2335[73]
  i2334.m_verticalMapping = i2335[74]
  i2334.m_uvLineOffset = i2335[75]
  i2334.m_geometrySortingOrder = i2335[76]
  i2334.m_IsTextObjectScaleStatic = !!i2335[77]
  i2334.m_VertexBufferAutoSizeReduction = !!i2335[78]
  i2334.m_useMaxVisibleDescender = !!i2335[79]
  i2334.m_pageToDisplay = i2335[80]
  i2334.m_margin = new pc.Vec4( i2335[81], i2335[82], i2335[83], i2335[84] )
  i2334.m_isUsingLegacyAnimationComponent = !!i2335[85]
  i2334.m_isVolumetricText = !!i2335[86]
  request.r(i2335[87], i2335[88], 0, i2334, 'm_Material')
  i2334.m_EmojiFallbackSupport = !!i2335[89]
  i2334.m_Maskable = !!i2335[90]
  i2334.m_Color = new pc.Color(i2335[91], i2335[92], i2335[93], i2335[94])
  i2334.m_RaycastTarget = !!i2335[95]
  i2334.m_RaycastPadding = new pc.Vec4( i2335[96], i2335[97], i2335[98], i2335[99] )
  return i2334
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.VertexGradient' )
  var i2343 = data
  i2342.topLeft = new pc.Color(i2343[0], i2343[1], i2343[2], i2343[3])
  i2342.topRight = new pc.Color(i2343[4], i2343[5], i2343[6], i2343[7])
  i2342.bottomLeft = new pc.Color(i2343[8], i2343[9], i2343[10], i2343[11])
  i2342.bottomRight = new pc.Color(i2343[12], i2343[13], i2343[14], i2343[15])
  return i2342
}

Deserializers["TutController"] = function (request, data, root) {
  var i2346 = root || request.c( 'TutController' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'tutScene')
  request.r(i2347[2], i2347[3], 0, i2346, 'startTut')
  request.r(i2347[4], i2347[5], 0, i2346, 'playTut')
  request.r(i2347[6], i2347[7], 0, i2346, 'farTut')
  request.r(i2347[8], i2347[9], 0, i2346, 'failTut')
  return i2346
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2348 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2349 = data
  i2348.targetIsSelf = !!i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'targetGO')
  i2348.tweenTargetIsTargetGO = !!i2349[3]
  i2348.delay = i2349[4]
  i2348.duration = i2349[5]
  i2348.easeType = i2349[6]
  i2348.easeCurve = new pc.AnimationCurve( { keys_flow: i2349[7] } )
  i2348.loopType = i2349[8]
  i2348.loops = i2349[9]
  i2348.id = i2349[10]
  i2348.isRelative = !!i2349[11]
  i2348.isFrom = !!i2349[12]
  i2348.isIndependentUpdate = !!i2349[13]
  i2348.autoKill = !!i2349[14]
  i2348.autoGenerate = !!i2349[15]
  i2348.isActive = !!i2349[16]
  i2348.isValid = !!i2349[17]
  request.r(i2349[18], i2349[19], 0, i2348, 'target')
  i2348.animationType = i2349[20]
  i2348.targetType = i2349[21]
  i2348.forcedTargetType = i2349[22]
  i2348.autoPlay = !!i2349[23]
  i2348.useTargetAsV3 = !!i2349[24]
  i2348.endValueFloat = i2349[25]
  i2348.endValueV3 = new pc.Vec3( i2349[26], i2349[27], i2349[28] )
  i2348.endValueV2 = new pc.Vec2( i2349[29], i2349[30] )
  i2348.endValueColor = new pc.Color(i2349[31], i2349[32], i2349[33], i2349[34])
  i2348.endValueString = i2349[35]
  i2348.endValueRect = UnityEngine.Rect.MinMaxRect(i2349[36], i2349[37], i2349[38], i2349[39])
  request.r(i2349[40], i2349[41], 0, i2348, 'endValueTransform')
  i2348.optionalBool0 = !!i2349[42]
  i2348.optionalBool1 = !!i2349[43]
  i2348.optionalFloat0 = i2349[44]
  i2348.optionalInt0 = i2349[45]
  i2348.optionalRotationMode = i2349[46]
  i2348.optionalScrambleMode = i2349[47]
  i2348.optionalShakeRandomnessMode = i2349[48]
  i2348.optionalString = i2349[49]
  i2348.updateType = i2349[50]
  i2348.isSpeedBased = !!i2349[51]
  i2348.hasOnStart = !!i2349[52]
  i2348.hasOnPlay = !!i2349[53]
  i2348.hasOnUpdate = !!i2349[54]
  i2348.hasOnStepComplete = !!i2349[55]
  i2348.hasOnComplete = !!i2349[56]
  i2348.hasOnTweenCreated = !!i2349[57]
  i2348.hasOnRewind = !!i2349[58]
  i2348.onStart = request.d('UnityEngine.Events.UnityEvent', i2349[59], i2348.onStart)
  i2348.onPlay = request.d('UnityEngine.Events.UnityEvent', i2349[60], i2348.onPlay)
  i2348.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2349[61], i2348.onUpdate)
  i2348.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2349[62], i2348.onStepComplete)
  i2348.onComplete = request.d('UnityEngine.Events.UnityEvent', i2349[63], i2348.onComplete)
  i2348.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2349[64], i2348.onTweenCreated)
  i2348.onRewind = request.d('UnityEngine.Events.UnityEvent', i2349[65], i2348.onRewind)
  return i2348
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2351 = data
  i2350.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2351[0], i2350.m_PersistentCalls)
  return i2350
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2352 = root || request.c( 'HideOnPointer' )
  var i2353 = data
  i2352.OnPointerDownEvent = request.d('System.Action', i2353[0], i2352.OnPointerDownEvent)
  return i2352
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2354 = root || request.c( 'System.Action' )
  var i2355 = data
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2357 = data
  i2356.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2357[0], i2356.main)
  i2356.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2357[1], i2356.colorBySpeed)
  i2356.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2357[2], i2356.colorOverLifetime)
  i2356.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2357[3], i2356.emission)
  i2356.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2357[4], i2356.rotationBySpeed)
  i2356.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2357[5], i2356.rotationOverLifetime)
  i2356.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2357[6], i2356.shape)
  i2356.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2357[7], i2356.sizeBySpeed)
  i2356.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2357[8], i2356.sizeOverLifetime)
  i2356.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2357[9], i2356.textureSheetAnimation)
  i2356.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2357[10], i2356.velocityOverLifetime)
  i2356.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2357[11], i2356.noise)
  i2356.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2357[12], i2356.inheritVelocity)
  i2356.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2357[13], i2356.forceOverLifetime)
  i2356.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2357[14], i2356.limitVelocityOverLifetime)
  i2356.useAutoRandomSeed = !!i2357[15]
  i2356.randomSeed = i2357[16]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2358 = root || new pc.ParticleSystemMain()
  var i2359 = data
  i2358.duration = i2359[0]
  i2358.loop = !!i2359[1]
  i2358.prewarm = !!i2359[2]
  i2358.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[3], i2358.startDelay)
  i2358.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[4], i2358.startLifetime)
  i2358.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[5], i2358.startSpeed)
  i2358.startSize3D = !!i2359[6]
  i2358.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[7], i2358.startSizeX)
  i2358.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[8], i2358.startSizeY)
  i2358.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[9], i2358.startSizeZ)
  i2358.startRotation3D = !!i2359[10]
  i2358.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[11], i2358.startRotationX)
  i2358.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[12], i2358.startRotationY)
  i2358.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[13], i2358.startRotationZ)
  i2358.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2359[14], i2358.startColor)
  i2358.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[15], i2358.gravityModifier)
  i2358.simulationSpace = i2359[16]
  request.r(i2359[17], i2359[18], 0, i2358, 'customSimulationSpace')
  i2358.simulationSpeed = i2359[19]
  i2358.useUnscaledTime = !!i2359[20]
  i2358.scalingMode = i2359[21]
  i2358.playOnAwake = !!i2359[22]
  i2358.maxParticles = i2359[23]
  i2358.emitterVelocityMode = i2359[24]
  i2358.stopAction = i2359[25]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2360 = root || new pc.MinMaxCurve()
  var i2361 = data
  i2360.mode = i2361[0]
  i2360.curveMin = new pc.AnimationCurve( { keys_flow: i2361[1] } )
  i2360.curveMax = new pc.AnimationCurve( { keys_flow: i2361[2] } )
  i2360.curveMultiplier = i2361[3]
  i2360.constantMin = i2361[4]
  i2360.constantMax = i2361[5]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2362 = root || new pc.MinMaxGradient()
  var i2363 = data
  i2362.mode = i2363[0]
  i2362.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2363[1], i2362.gradientMin)
  i2362.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2363[2], i2362.gradientMax)
  i2362.colorMin = new pc.Color(i2363[3], i2363[4], i2363[5], i2363[6])
  i2362.colorMax = new pc.Color(i2363[7], i2363[8], i2363[9], i2363[10])
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2365 = data
  i2364.mode = i2365[0]
  var i2367 = i2365[1]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2367[i + 0]) );
  }
  i2364.colorKeys = i2366
  var i2369 = i2365[2]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2369[i + 0]) );
  }
  i2364.alphaKeys = i2368
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemColorBySpeed()
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2371[1], i2370.color)
  i2370.range = new pc.Vec2( i2371[2], i2371[3] )
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2375 = data
  i2374.color = new pc.Color(i2375[0], i2375[1], i2375[2], i2375[3])
  i2374.time = i2375[4]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2379 = data
  i2378.alpha = i2379[0]
  i2378.time = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemColorOverLifetime()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2381[1], i2380.color)
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemEmitter()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[1], i2382.rateOverTime)
  i2382.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[2], i2382.rateOverDistance)
  var i2385 = i2383[3]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2385[i + 0]) );
  }
  i2382.bursts = i2384
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemBurst()
  var i2389 = data
  i2388.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[0], i2388.count)
  i2388.cycleCount = i2389[1]
  i2388.minCount = i2389[2]
  i2388.maxCount = i2389[3]
  i2388.repeatInterval = i2389[4]
  i2388.time = i2389[5]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemRotationBySpeed()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[1], i2390.x)
  i2390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[2], i2390.y)
  i2390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[3], i2390.z)
  i2390.separateAxes = !!i2391[4]
  i2390.range = new pc.Vec2( i2391[5], i2391[6] )
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[1], i2392.x)
  i2392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.y)
  i2392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[3], i2392.z)
  i2392.separateAxes = !!i2393[4]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemShape()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.shapeType = i2395[1]
  i2394.randomDirectionAmount = i2395[2]
  i2394.sphericalDirectionAmount = i2395[3]
  i2394.randomPositionAmount = i2395[4]
  i2394.alignToDirection = !!i2395[5]
  i2394.radius = i2395[6]
  i2394.radiusMode = i2395[7]
  i2394.radiusSpread = i2395[8]
  i2394.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[9], i2394.radiusSpeed)
  i2394.radiusThickness = i2395[10]
  i2394.angle = i2395[11]
  i2394.length = i2395[12]
  i2394.boxThickness = new pc.Vec3( i2395[13], i2395[14], i2395[15] )
  i2394.meshShapeType = i2395[16]
  request.r(i2395[17], i2395[18], 0, i2394, 'mesh')
  request.r(i2395[19], i2395[20], 0, i2394, 'meshRenderer')
  request.r(i2395[21], i2395[22], 0, i2394, 'skinnedMeshRenderer')
  i2394.useMeshMaterialIndex = !!i2395[23]
  i2394.meshMaterialIndex = i2395[24]
  i2394.useMeshColors = !!i2395[25]
  i2394.normalOffset = i2395[26]
  i2394.arc = i2395[27]
  i2394.arcMode = i2395[28]
  i2394.arcSpread = i2395[29]
  i2394.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[30], i2394.arcSpeed)
  i2394.donutRadius = i2395[31]
  i2394.position = new pc.Vec3( i2395[32], i2395[33], i2395[34] )
  i2394.rotation = new pc.Vec3( i2395[35], i2395[36], i2395[37] )
  i2394.scale = new pc.Vec3( i2395[38], i2395[39], i2395[40] )
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemSizeBySpeed()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.x)
  i2396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.y)
  i2396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.z)
  i2396.separateAxes = !!i2397[4]
  i2396.range = new pc.Vec2( i2397[5], i2397[6] )
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[1], i2398.x)
  i2398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.y)
  i2398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[3], i2398.z)
  i2398.separateAxes = !!i2399[4]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.mode = i2401[1]
  i2400.animation = i2401[2]
  i2400.numTilesX = i2401[3]
  i2400.numTilesY = i2401[4]
  i2400.useRandomRow = !!i2401[5]
  i2400.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[6], i2400.frameOverTime)
  i2400.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[7], i2400.startFrame)
  i2400.cycleCount = i2401[8]
  i2400.rowIndex = i2401[9]
  i2400.flipU = i2401[10]
  i2400.flipV = i2401[11]
  i2400.spriteCount = i2401[12]
  var i2403 = i2401[13]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.sprites = i2402
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[1], i2406.x)
  i2406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[2], i2406.y)
  i2406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[3], i2406.z)
  i2406.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[4], i2406.radial)
  i2406.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[5], i2406.speedModifier)
  i2406.space = i2407[6]
  i2406.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[7], i2406.orbitalX)
  i2406.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[8], i2406.orbitalY)
  i2406.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[9], i2406.orbitalZ)
  i2406.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[10], i2406.orbitalOffsetX)
  i2406.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[11], i2406.orbitalOffsetY)
  i2406.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[12], i2406.orbitalOffsetZ)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemNoise()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.separateAxes = !!i2409[1]
  i2408.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.strengthX)
  i2408.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.strengthY)
  i2408.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[4], i2408.strengthZ)
  i2408.frequency = i2409[5]
  i2408.damping = !!i2409[6]
  i2408.octaveCount = i2409[7]
  i2408.octaveMultiplier = i2409[8]
  i2408.octaveScale = i2409[9]
  i2408.quality = i2409[10]
  i2408.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[11], i2408.scrollSpeed)
  i2408.scrollSpeedMultiplier = i2409[12]
  i2408.remapEnabled = !!i2409[13]
  i2408.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[14], i2408.remapX)
  i2408.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[15], i2408.remapY)
  i2408.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[16], i2408.remapZ)
  i2408.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[17], i2408.positionAmount)
  i2408.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[18], i2408.rotationAmount)
  i2408.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[19], i2408.sizeAmount)
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemInheritVelocity()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.mode = i2411[1]
  i2410.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.curve)
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemForceOverLifetime()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[1], i2412.x)
  i2412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.y)
  i2412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.z)
  i2412.space = i2413[4]
  i2412.randomized = !!i2413[5]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[1], i2414.limit)
  i2414.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.limitX)
  i2414.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[3], i2414.limitY)
  i2414.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[4], i2414.limitZ)
  i2414.dampen = i2415[5]
  i2414.separateAxes = !!i2415[6]
  i2414.space = i2415[7]
  i2414.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[8], i2414.drag)
  i2414.multiplyDragByParticleSize = !!i2415[9]
  i2414.multiplyDragByParticleVelocity = !!i2415[10]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'mesh')
  i2416.meshCount = i2417[2]
  i2416.activeVertexStreamsCount = i2417[3]
  i2416.alignment = i2417[4]
  i2416.renderMode = i2417[5]
  i2416.sortMode = i2417[6]
  i2416.lengthScale = i2417[7]
  i2416.velocityScale = i2417[8]
  i2416.cameraVelocityScale = i2417[9]
  i2416.normalDirection = i2417[10]
  i2416.sortingFudge = i2417[11]
  i2416.minParticleSize = i2417[12]
  i2416.maxParticleSize = i2417[13]
  i2416.pivot = new pc.Vec3( i2417[14], i2417[15], i2417[16] )
  request.r(i2417[17], i2417[18], 0, i2416, 'trailMaterial')
  i2416.applyActiveColorSpace = !!i2417[19]
  i2416.enabled = !!i2417[20]
  request.r(i2417[21], i2417[22], 0, i2416, 'sharedMaterial')
  var i2419 = i2417[23]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 2, i2418, '')
  }
  i2416.sharedMaterials = i2418
  i2416.receiveShadows = !!i2417[24]
  i2416.shadowCastingMode = i2417[25]
  i2416.sortingLayerID = i2417[26]
  i2416.sortingOrder = i2417[27]
  i2416.lightmapIndex = i2417[28]
  i2416.lightmapSceneIndex = i2417[29]
  i2416.lightmapScaleOffset = new pc.Vec4( i2417[30], i2417[31], i2417[32], i2417[33] )
  i2416.lightProbeUsage = i2417[34]
  i2416.reflectionProbeUsage = i2417[35]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2421 = data
  i2420.center = new pc.Vec3( i2421[0], i2421[1], i2421[2] )
  i2420.radius = i2421[3]
  i2420.enabled = !!i2421[4]
  i2420.isTrigger = !!i2421[5]
  request.r(i2421[6], i2421[7], 0, i2420, 'material')
  return i2420
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2422 = root || request.c( 'CharacterMotor' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'characterInput')
  request.r(i2423[2], i2423[3], 0, i2422, 'cameraYawTransform')
  request.r(i2423[4], i2423[5], 0, i2422, '_arrow')
  i2422.moveSpeed = i2423[6]
  i2422.jumpHeight = i2423[7]
  request.r(i2423[8], i2423[9], 0, i2422, 'groundChecker')
  i2422.gravity = i2423[10]
  i2422.enableStepClimb = !!i2423[11]
  i2422.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2423[12] )
  i2422.maxStepHeight = i2423[13]
  i2422.stepCheckDistance = i2423[14]
  i2422.stepUpSpeed = i2423[15]
  i2422.stepUpAcceleration = i2423[16]
  i2422.minimumStepFacing = i2423[17]
  request.r(i2423[18], i2423[19], 0, i2422, 'controller')
  i2422.autoRun = !!i2423[20]
  return i2422
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2424 = root || request.c( 'CharacterRotation' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'motor')
  i2424.rotationSpeed = i2425[2]
  return i2424
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2426 = root || request.c( 'CharacterAnimation' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'animator')
  request.r(i2427[2], i2427[3], 0, i2426, 'motor')
  i2426.speedChangeRate = i2427[4]
  i2426.groundedGraceTime = i2427[5]
  return i2426
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2428 = root || request.c( 'CharacterCollect' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'motor')
  request.r(i2429[2], i2429[3], 0, i2428, 'avatar')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2431 = data
  i2430.mass = i2431[0]
  i2430.drag = i2431[1]
  i2430.angularDrag = i2431[2]
  i2430.useGravity = !!i2431[3]
  i2430.isKinematic = !!i2431[4]
  i2430.constraints = i2431[5]
  i2430.maxAngularVelocity = i2431[6]
  i2430.collisionDetectionMode = i2431[7]
  i2430.interpolation = i2431[8]
  return i2430
}

Deserializers["CharacterTrigger"] = function (request, data, root) {
  var i2432 = root || request.c( 'CharacterTrigger' )
  var i2433 = data
  i2432.onTrigger1 = !!i2433[0]
  i2432.completeGift1 = !!i2433[1]
  i2432.onTrigger2 = !!i2433[2]
  i2432.completeGift2 = !!i2433[3]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'sharedMesh')
  var i2437 = i2435[2]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.bones = i2436
  i2434.updateWhenOffscreen = !!i2435[3]
  i2434.localBounds = i2435[4]
  request.r(i2435[5], i2435[6], 0, i2434, 'rootBone')
  var i2439 = i2435[7]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2439[i + 0]) );
  }
  i2434.blendShapesWeights = i2438
  i2434.enabled = !!i2435[8]
  request.r(i2435[9], i2435[10], 0, i2434, 'sharedMaterial')
  var i2441 = i2435[11]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2434.sharedMaterials = i2440
  i2434.receiveShadows = !!i2435[12]
  i2434.shadowCastingMode = i2435[13]
  i2434.sortingLayerID = i2435[14]
  i2434.sortingOrder = i2435[15]
  i2434.lightmapIndex = i2435[16]
  i2434.lightmapSceneIndex = i2435[17]
  i2434.lightmapScaleOffset = new pc.Vec4( i2435[18], i2435[19], i2435[20], i2435[21] )
  i2434.lightProbeUsage = i2435[22]
  i2434.reflectionProbeUsage = i2435[23]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2445 = data
  i2444.weight = i2445[0]
  return i2444
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2446 = root || request.c( 'GroundChecker' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'groundPoint')
  i2446.half = new pc.Vec3( i2447[2], i2447[3], i2447[4] )
  i2446.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2447[5] )
  return i2446
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2448 = root || request.c( 'CameraFollow' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'target')
  i2448.smoothTime = i2449[2]
  return i2448
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2450 = root || request.c( 'CameraLook' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'input')
  request.r(i2451[2], i2451[3], 0, i2450, 'yawPivot')
  request.r(i2451[4], i2451[5], 0, i2450, 'pitchPivot')
  i2450.minPitch = i2451[6]
  i2450.maxPitch = i2451[7]
  i2450.yaw = i2451[8]
  i2450.pitch = i2451[9]
  i2450.defaltYaw = i2451[10]
  i2450.defaltPitch = i2451[11]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2453 = data
  i2452.aspect = i2453[0]
  i2452.orthographic = !!i2453[1]
  i2452.orthographicSize = i2453[2]
  i2452.backgroundColor = new pc.Color(i2453[3], i2453[4], i2453[5], i2453[6])
  i2452.nearClipPlane = i2453[7]
  i2452.farClipPlane = i2453[8]
  i2452.fieldOfView = i2453[9]
  i2452.depth = i2453[10]
  i2452.clearFlags = i2453[11]
  i2452.cullingMask = i2453[12]
  i2452.rect = i2453[13]
  request.r(i2453[14], i2453[15], 0, i2452, 'targetTexture')
  i2452.usePhysicalProperties = !!i2453[16]
  i2452.focalLength = i2453[17]
  i2452.sensorSize = new pc.Vec2( i2453[18], i2453[19] )
  i2452.lensShift = new pc.Vec2( i2453[20], i2453[21] )
  i2452.gateFit = i2453[22]
  i2452.commandBufferCount = i2453[23]
  i2452.cameraType = i2453[24]
  i2452.enabled = !!i2453[25]
  return i2452
}

Deserializers["Gift"] = function (request, data, root) {
  var i2454 = root || request.c( 'Gift' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'hint')
  i2454.onCollect = request.d('UnityEngine.Events.UnityEvent', i2455[2], i2454.onCollect)
  i2454.collectDone = !!i2455[3]
  request.r(i2455[4], i2455[5], 0, i2454, 'collectSound')
  request.r(i2455[6], i2455[7], 0, i2454, 'effect')
  request.r(i2455[8], i2455[9], 0, i2454, 'complete')
  return i2454
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'm_ObjectArgument')
  i2456.m_ObjectArgumentAssemblyTypeName = i2457[2]
  i2456.m_IntArgument = i2457[3]
  i2456.m_FloatArgument = i2457[4]
  i2456.m_StringArgument = i2457[5]
  i2456.m_BoolArgument = !!i2457[6]
  return i2456
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2458 = root || request.c( 'SoundHint' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'Sound')
  request.r(i2459[2], i2459[3], 0, i2458, 'Source')
  return i2458
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i2460 = root || request.c( 'JumpHint' )
  var i2461 = data
  i2460.JumpForce = new pc.Vec3( i2461[0], i2461[1], i2461[2] )
  request.r(i2461[3], i2461[4], 0, i2460, 'Rigidbody')
  return i2460
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2462 = root || request.c( 'CharacterInput' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'joystick')
  request.r(i2463[2], i2463[3], 0, i2462, 'jumpButton')
  return i2462
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2464 = root || request.c( 'InputManager' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'worldCamera')
  i2464.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2465[2] )
  i2464.touchSensitivity = i2465[3]
  i2464.mouseSensitivity = i2465[4]
  i2464.dragThreshold = i2465[5]
  return i2464
}

Deserializers["GameController"] = function (request, data, root) {
  var i2466 = root || request.c( 'GameController' )
  var i2467 = data
  i2466.timeToShowEnd = i2467[0]
  i2466.currentProgress = i2467[1]
  i2466.target = i2467[2]
  i2466.maxProgress = i2467[3]
  request.r(i2467[4], i2467[5], 0, i2466, 'progressText')
  request.r(i2467[6], i2467[7], 0, i2466, 'doneScene')
  var i2469 = i2467[8]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 1, i2468, '')
  }
  i2466.confetti = i2468
  request.r(i2467[9], i2467[10], 0, i2466, 'completeScene')
  request.r(i2467[11], i2467[12], 0, i2466, 'failScene')
  request.r(i2467[13], i2467[14], 0, i2466, 'collect')
  request.r(i2467[15], i2467[16], 0, i2466, 'tut')
  var i2471 = i2467[17]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 1, i2470, '')
  }
  i2466.gifts = i2470
  return i2466
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2476 = root || request.c( 'AudioController' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'musicSource')
  request.r(i2477[2], i2477[3], 0, i2476, 'poolParent')
  i2476.startSize = i2477[4]
  return i2476
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2478 = root || request.c( 'LunaController' )
  var i2479 = data
  i2478.LimitTimePlay = !!i2479[0]
  i2478.TimePlay = i2479[1]
  i2478.LimitClick = !!i2479[2]
  i2478.MaxClick = i2479[3]
  i2478.TypeMonster1 = i2479[4]
  request.r(i2479[5], i2479[6], 0, i2478, 'gift1')
  var i2481 = i2479[7]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 1, i2480, '')
  }
  i2478.monsters = i2480
  var i2483 = i2479[8]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 1, i2482, '')
  }
  i2478.CTA = i2482
  request.r(i2479[9], i2479[10], 0, i2478, 'endCard')
  i2478.currentClick = i2479[11]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2489 = data
  i2488.ambientIntensity = i2489[0]
  i2488.reflectionIntensity = i2489[1]
  i2488.ambientMode = i2489[2]
  i2488.ambientLight = new pc.Color(i2489[3], i2489[4], i2489[5], i2489[6])
  i2488.ambientSkyColor = new pc.Color(i2489[7], i2489[8], i2489[9], i2489[10])
  i2488.ambientGroundColor = new pc.Color(i2489[11], i2489[12], i2489[13], i2489[14])
  i2488.ambientEquatorColor = new pc.Color(i2489[15], i2489[16], i2489[17], i2489[18])
  i2488.fogColor = new pc.Color(i2489[19], i2489[20], i2489[21], i2489[22])
  i2488.fogEndDistance = i2489[23]
  i2488.fogStartDistance = i2489[24]
  i2488.fogDensity = i2489[25]
  i2488.fog = !!i2489[26]
  request.r(i2489[27], i2489[28], 0, i2488, 'skybox')
  i2488.fogMode = i2489[29]
  var i2491 = i2489[30]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2491[i + 0]) );
  }
  i2488.lightmaps = i2490
  i2488.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2489[31], i2488.lightProbes)
  i2488.lightmapsMode = i2489[32]
  i2488.mixedBakeMode = i2489[33]
  i2488.environmentLightingMode = i2489[34]
  i2488.ambientProbe = new pc.SphericalHarmonicsL2(i2489[35])
  request.r(i2489[36], i2489[37], 0, i2488, 'customReflection')
  request.r(i2489[38], i2489[39], 0, i2488, 'defaultReflection')
  i2488.defaultReflectionMode = i2489[40]
  i2488.defaultReflectionResolution = i2489[41]
  i2488.sunLightObjectId = i2489[42]
  i2488.pixelLightCount = i2489[43]
  i2488.defaultReflectionHDR = !!i2489[44]
  i2488.hasLightDataAsset = !!i2489[45]
  i2488.hasManualGenerate = !!i2489[46]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'lightmapColor')
  request.r(i2495[2], i2495[3], 0, i2494, 'lightmapDirection')
  request.r(i2495[4], i2495[5], 0, i2494, 'shadowMask')
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2496 = root || new UnityEngine.LightProbes()
  var i2497 = data
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2505 = data
  var i2507 = i2505[0]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2507[i + 0]));
  }
  i2504.ShaderCompilationErrors = i2506
  i2504.name = i2505[1]
  i2504.guid = i2505[2]
  var i2509 = i2505[3]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2504.shaderDefinedKeywords = i2508
  var i2511 = i2505[4]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2511[i + 0]) );
  }
  i2504.passes = i2510
  var i2513 = i2505[5]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2513[i + 0]) );
  }
  i2504.usePasses = i2512
  var i2515 = i2505[6]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2515[i + 0]) );
  }
  i2504.defaultParameterValues = i2514
  request.r(i2505[7], i2505[8], 0, i2504, 'unityFallbackShader')
  i2504.readDepth = !!i2505[9]
  i2504.hasDepthOnlyPass = !!i2505[10]
  i2504.isCreatedByShaderGraph = !!i2505[11]
  i2504.disableBatching = !!i2505[12]
  i2504.compiled = !!i2505[13]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2519 = data
  i2518.shaderName = i2519[0]
  i2518.errorMessage = i2519[1]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2524 = root || new pc.UnityShaderPass()
  var i2525 = data
  i2524.id = i2525[0]
  i2524.subShaderIndex = i2525[1]
  i2524.name = i2525[2]
  i2524.passType = i2525[3]
  i2524.grabPassTextureName = i2525[4]
  i2524.usePass = !!i2525[5]
  i2524.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[6], i2524.zTest)
  i2524.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[7], i2524.zWrite)
  i2524.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[8], i2524.culling)
  i2524.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2525[9], i2524.blending)
  i2524.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2525[10], i2524.alphaBlending)
  i2524.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[11], i2524.colorWriteMask)
  i2524.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[12], i2524.offsetUnits)
  i2524.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[13], i2524.offsetFactor)
  i2524.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[14], i2524.stencilRef)
  i2524.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[15], i2524.stencilReadMask)
  i2524.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[16], i2524.stencilWriteMask)
  i2524.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[17], i2524.stencilOp)
  i2524.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[18], i2524.stencilOpFront)
  i2524.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[19], i2524.stencilOpBack)
  var i2527 = i2525[20]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2527[i + 0]) );
  }
  i2524.tags = i2526
  var i2529 = i2525[21]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2524.passDefinedKeywords = i2528
  var i2531 = i2525[22]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2531[i + 0]) );
  }
  i2524.passDefinedKeywordGroups = i2530
  var i2533 = i2525[23]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2533[i + 0]) );
  }
  i2524.variants = i2532
  var i2535 = i2525[24]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2535[i + 0]) );
  }
  i2524.excludedVariants = i2534
  i2524.hasDepthReader = !!i2525[25]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2537 = data
  i2536.val = i2537[0]
  i2536.name = i2537[1]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2539 = data
  i2538.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[0], i2538.src)
  i2538.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[1], i2538.dst)
  i2538.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[2], i2538.op)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2541 = data
  i2540.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[0], i2540.pass)
  i2540.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[1], i2540.fail)
  i2540.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[2], i2540.zFail)
  i2540.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[3], i2540.comp)
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.value = i2545[1]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2549 = data
  var i2551 = i2549[0]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( i2551[i + 0] );
  }
  i2548.keywords = i2550
  i2548.hasDiscard = !!i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2555 = data
  i2554.passId = i2555[0]
  i2554.subShaderIndex = i2555[1]
  var i2557 = i2555[2]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2554.keywords = i2556
  i2554.vertexProgram = i2555[3]
  i2554.fragmentProgram = i2555[4]
  i2554.exportedForWebGl2 = !!i2555[5]
  i2554.readDepth = !!i2555[6]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'shader')
  i2560.pass = i2561[2]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2565 = data
  i2564.name = i2565[0]
  i2564.type = i2565[1]
  i2564.value = new pc.Vec4( i2565[2], i2565[3], i2565[4], i2565[5] )
  i2564.textureValue = i2565[6]
  i2564.shaderPropertyFlag = i2565[7]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2567 = data
  i2566.name = i2567[0]
  request.r(i2567[1], i2567[2], 0, i2566, 'texture')
  i2566.aabb = i2567[3]
  i2566.vertices = i2567[4]
  i2566.triangles = i2567[5]
  i2566.textureRect = UnityEngine.Rect.MinMaxRect(i2567[6], i2567[7], i2567[8], i2567[9])
  i2566.packedRect = UnityEngine.Rect.MinMaxRect(i2567[10], i2567[11], i2567[12], i2567[13])
  i2566.border = new pc.Vec4( i2567[14], i2567[15], i2567[16], i2567[17] )
  i2566.transparency = i2567[18]
  i2566.bounds = i2567[19]
  i2566.pixelsPerUnit = i2567[20]
  i2566.textureWidth = i2567[21]
  i2566.textureHeight = i2567[22]
  i2566.nativeSize = new pc.Vec2( i2567[23], i2567[24] )
  i2566.pivot = new pc.Vec2( i2567[25], i2567[26] )
  i2566.textureRectOffset = new pc.Vec2( i2567[27], i2567[28] )
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2569 = data
  i2568.name = i2569[0]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.wrapMode = i2571[1]
  i2570.isLooping = !!i2571[2]
  i2570.length = i2571[3]
  var i2573 = i2571[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2573[i + 0]) );
  }
  i2570.curves = i2572
  var i2575 = i2571[5]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2575[i + 0]) );
  }
  i2570.events = i2574
  i2570.halfPrecision = !!i2571[6]
  i2570._frameRate = i2571[7]
  i2570.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2571[8], i2570.localBounds)
  i2570.hasMuscleCurves = !!i2571[9]
  var i2577 = i2571[10]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( i2577[i + 0] );
  }
  i2570.clipMuscleConstant = i2576
  i2570.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2571[11], i2570.clipBindingConstant)
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2581 = data
  i2580.path = i2581[0]
  i2580.hash = i2581[1]
  i2580.componentType = i2581[2]
  i2580.property = i2581[3]
  i2580.keys = i2581[4]
  var i2583 = i2581[5]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2583[i + 0]) );
  }
  i2580.objectReferenceKeys = i2582
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2587 = data
  i2586.time = i2587[0]
  request.r(i2587[1], i2587[2], 0, i2586, 'value')
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2591 = data
  i2590.functionName = i2591[0]
  i2590.floatParameter = i2591[1]
  i2590.intParameter = i2591[2]
  i2590.stringParameter = i2591[3]
  request.r(i2591[4], i2591[5], 0, i2590, 'objectReferenceParameter')
  i2590.time = i2591[6]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2593 = data
  i2592.center = new pc.Vec3( i2593[0], i2593[1], i2593[2] )
  i2592.extends = new pc.Vec3( i2593[3], i2593[4], i2593[5] )
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2597 = data
  var i2599 = i2597[0]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2596.genericBindings = i2598
  var i2601 = i2597[1]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( i2601[i + 0] );
  }
  i2596.pptrCurveMapping = i2600
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2603 = data
  i2602.name = i2603[0]
  var i2605 = i2603[1]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2605[i + 0]) );
  }
  i2602.layers = i2604
  var i2607 = i2603[2]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2607[i + 0]) );
  }
  i2602.parameters = i2606
  i2602.animationClips = i2603[3]
  i2602.avatarUnsupported = i2603[4]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.defaultWeight = i2611[1]
  i2610.blendingMode = i2611[2]
  i2610.avatarMask = i2611[3]
  i2610.syncedLayerIndex = i2611[4]
  i2610.syncedLayerAffectsTiming = !!i2611[5]
  i2610.syncedLayers = i2611[6]
  i2610.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2611[7], i2610.stateMachine)
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2613 = data
  i2612.id = i2613[0]
  i2612.name = i2613[1]
  i2612.path = i2613[2]
  var i2615 = i2613[3]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2615[i + 0]) );
  }
  i2612.states = i2614
  var i2617 = i2613[4]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2617[i + 0]) );
  }
  i2612.machines = i2616
  var i2619 = i2613[5]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2619[i + 0]) );
  }
  i2612.entryStateTransitions = i2618
  var i2621 = i2613[6]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2621[i + 0]) );
  }
  i2612.exitStateTransitions = i2620
  var i2623 = i2613[7]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2623[i + 0]) );
  }
  i2612.anyStateTransitions = i2622
  i2612.defaultStateId = i2613[8]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2627 = data
  i2626.id = i2627[0]
  i2626.name = i2627[1]
  i2626.cycleOffset = i2627[2]
  i2626.cycleOffsetParameter = i2627[3]
  i2626.cycleOffsetParameterActive = !!i2627[4]
  i2626.mirror = !!i2627[5]
  i2626.mirrorParameter = i2627[6]
  i2626.mirrorParameterActive = !!i2627[7]
  i2626.motionId = i2627[8]
  i2626.nameHash = i2627[9]
  i2626.fullPathHash = i2627[10]
  i2626.speed = i2627[11]
  i2626.speedParameter = i2627[12]
  i2626.speedParameterActive = !!i2627[13]
  i2626.tag = i2627[14]
  i2626.tagHash = i2627[15]
  i2626.writeDefaultValues = !!i2627[16]
  var i2629 = i2627[17]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 2) {
  request.r(i2629[i + 0], i2629[i + 1], 2, i2628, '')
  }
  i2626.behaviours = i2628
  var i2631 = i2627[18]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2631[i + 0]) );
  }
  i2626.transitions = i2630
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2637 = data
  i2636.fullPath = i2637[0]
  i2636.canTransitionToSelf = !!i2637[1]
  i2636.duration = i2637[2]
  i2636.exitTime = i2637[3]
  i2636.hasExitTime = !!i2637[4]
  i2636.hasFixedDuration = !!i2637[5]
  i2636.interruptionSource = i2637[6]
  i2636.offset = i2637[7]
  i2636.orderedInterruption = !!i2637[8]
  i2636.destinationStateId = i2637[9]
  i2636.isExit = !!i2637[10]
  i2636.mute = !!i2637[11]
  i2636.solo = !!i2637[12]
  var i2639 = i2637[13]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2639[i + 0]) );
  }
  i2636.conditions = i2638
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2643 = data
  i2642.mode = i2643[0]
  i2642.parameter = i2643[1]
  i2642.threshold = i2643[2]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2649 = data
  i2648.destinationStateId = i2649[0]
  i2648.isExit = !!i2649[1]
  i2648.mute = !!i2649[2]
  i2648.solo = !!i2649[3]
  var i2651 = i2649[4]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2651[i + 0]) );
  }
  i2648.conditions = i2650
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2655 = data
  i2654.defaultBool = !!i2655[0]
  i2654.defaultFloat = i2655[1]
  i2654.defaultInt = i2655[2]
  i2654.name = i2655[3]
  i2654.nameHash = i2655[4]
  i2654.type = i2655[5]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2657 = data
  i2656.name = i2657[0]
  request.r(i2657[1], i2657[2], 0, i2656, '_runtimeAnimatorController')
  var i2659 = i2657[3]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2656._originalAnimationClips = i2658
  var i2661 = i2657[4]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 2, i2660, '')
  }
  i2656._overrideAnimationClips = i2660
  var i2663 = i2657[5]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 2, i2662, '')
  }
  i2656._animationClips = i2662
  var i2665 = i2657[6]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('UnityEngine.AnimationClipPair', i2665[i + 0]) );
  }
  i2656._animationClipPairs = i2664
  return i2656
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'originalClip')
  request.r(i2671[2], i2671[3], 0, i2670, 'overrideClip')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2673 = data
  i2672.name = i2673[0]
  i2672.bytes64 = i2673[1]
  i2672.data = i2673[2]
  return i2672
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2675 = data
  i2674.normalStyle = i2675[0]
  i2674.normalSpacingOffset = i2675[1]
  i2674.boldStyle = i2675[2]
  i2674.boldSpacing = i2675[3]
  i2674.italicStyle = i2675[4]
  i2674.tabSize = i2675[5]
  request.r(i2675[6], i2675[7], 0, i2674, 'atlas')
  i2674.m_SourceFontFileGUID = i2675[8]
  i2674.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2675[9], i2674.m_CreationSettings)
  request.r(i2675[10], i2675[11], 0, i2674, 'm_SourceFontFile')
  i2674.m_SourceFontFilePath = i2675[12]
  i2674.m_AtlasPopulationMode = i2675[13]
  i2674.InternalDynamicOS = !!i2675[14]
  var i2677 = i2675[15]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('UnityEngine.TextCore.Glyph', i2677[i + 0]));
  }
  i2674.m_GlyphTable = i2676
  var i2679 = i2675[16]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('TMPro.TMP_Character', i2679[i + 0]));
  }
  i2674.m_CharacterTable = i2678
  var i2681 = i2675[17]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 2) {
  request.r(i2681[i + 0], i2681[i + 1], 2, i2680, '')
  }
  i2674.m_AtlasTextures = i2680
  i2674.m_AtlasTextureIndex = i2675[18]
  i2674.m_IsMultiAtlasTexturesEnabled = !!i2675[19]
  i2674.m_GetFontFeatures = !!i2675[20]
  i2674.m_ClearDynamicDataOnBuild = !!i2675[21]
  i2674.m_AtlasWidth = i2675[22]
  i2674.m_AtlasHeight = i2675[23]
  i2674.m_AtlasPadding = i2675[24]
  i2674.m_AtlasRenderMode = i2675[25]
  var i2683 = i2675[26]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('UnityEngine.TextCore.GlyphRect', i2683[i + 0]));
  }
  i2674.m_UsedGlyphRects = i2682
  var i2685 = i2675[27]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('UnityEngine.TextCore.GlyphRect', i2685[i + 0]));
  }
  i2674.m_FreeGlyphRects = i2684
  i2674.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2675[28], i2674.m_FontFeatureTable)
  i2674.m_ShouldReimportFontFeatures = !!i2675[29]
  var i2687 = i2675[30]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 1, i2686, '')
  }
  i2674.m_FallbackFontAssetTable = i2686
  var i2689 = i2675[31]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('TMPro.TMP_FontWeightPair', i2689[i + 0]) );
  }
  i2674.m_FontWeightTable = i2688
  var i2691 = i2675[32]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('TMPro.TMP_FontWeightPair', i2691[i + 0]) );
  }
  i2674.fontWeights = i2690
  i2674.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2675[33], i2674.m_fontInfo)
  var i2693 = i2675[34]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Glyph', i2693[i + 0]));
  }
  i2674.m_glyphInfoList = i2692
  i2674.m_KerningTable = request.d('TMPro.KerningTable', i2675[35], i2674.m_KerningTable)
  var i2695 = i2675[36]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 1, i2694, '')
  }
  i2674.fallbackFontAssets = i2694
  i2674.m_Version = i2675[37]
  i2674.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2675[38], i2674.m_FaceInfo)
  request.r(i2675[39], i2675[40], 0, i2674, 'm_Material')
  return i2674
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2697 = data
  i2696.sourceFontFileName = i2697[0]
  i2696.sourceFontFileGUID = i2697[1]
  i2696.faceIndex = i2697[2]
  i2696.pointSizeSamplingMode = i2697[3]
  i2696.pointSize = i2697[4]
  i2696.padding = i2697[5]
  i2696.paddingMode = i2697[6]
  i2696.packingMode = i2697[7]
  i2696.atlasWidth = i2697[8]
  i2696.atlasHeight = i2697[9]
  i2696.characterSetSelectionMode = i2697[10]
  i2696.characterSequence = i2697[11]
  i2696.referencedFontAssetGUID = i2697[12]
  i2696.referencedTextAssetGUID = i2697[13]
  i2696.fontStyle = i2697[14]
  i2696.fontStyleModifier = i2697[15]
  i2696.renderMode = i2697[16]
  i2696.includeFontFeatures = !!i2697[17]
  return i2696
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2701 = data
  i2700.m_Index = i2701[0]
  i2700.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2701[1], i2700.m_Metrics)
  i2700.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2701[2], i2700.m_GlyphRect)
  i2700.m_Scale = i2701[3]
  i2700.m_AtlasIndex = i2701[4]
  i2700.m_ClassDefinitionType = i2701[5]
  return i2700
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2703 = data
  i2702.m_Width = i2703[0]
  i2702.m_Height = i2703[1]
  i2702.m_HorizontalBearingX = i2703[2]
  i2702.m_HorizontalBearingY = i2703[3]
  i2702.m_HorizontalAdvance = i2703[4]
  return i2702
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2705 = data
  i2704.m_X = i2705[0]
  i2704.m_Y = i2705[1]
  i2704.m_Width = i2705[2]
  i2704.m_Height = i2705[3]
  return i2704
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TMP_Character' )
  var i2709 = data
  i2708.m_ElementType = i2709[0]
  i2708.m_Unicode = i2709[1]
  i2708.m_GlyphIndex = i2709[2]
  i2708.m_Scale = i2709[3]
  return i2708
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2715 = data
  var i2717 = i2715[0]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('TMPro.MultipleSubstitutionRecord', i2717[i + 0]));
  }
  i2714.m_MultipleSubstitutionRecords = i2716
  var i2719 = i2715[1]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('TMPro.LigatureSubstitutionRecord', i2719[i + 0]));
  }
  i2714.m_LigatureSubstitutionRecords = i2718
  var i2721 = i2715[2]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2721[i + 0]));
  }
  i2714.m_GlyphPairAdjustmentRecords = i2720
  var i2723 = i2715[3]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2723[i + 0]));
  }
  i2714.m_MarkToBaseAdjustmentRecords = i2722
  var i2725 = i2715[4]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2725[i + 0]));
  }
  i2714.m_MarkToMarkAdjustmentRecords = i2724
  return i2714
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2729 = data
  i2728.m_TargetGlyphID = i2729[0]
  i2728.m_SubstituteGlyphIDs = i2729[1]
  return i2728
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2733 = data
  i2732.m_ComponentGlyphIDs = i2733[0]
  i2732.m_LigatureGlyphID = i2733[1]
  return i2732
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2737 = data
  i2736.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2737[0], i2736.m_FirstAdjustmentRecord)
  i2736.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2737[1], i2736.m_SecondAdjustmentRecord)
  i2736.m_FeatureLookupFlags = i2737[2]
  return i2736
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2741 = data
  i2740.m_BaseGlyphID = i2741[0]
  i2740.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2741[1], i2740.m_BaseGlyphAnchorPoint)
  i2740.m_MarkGlyphID = i2741[2]
  i2740.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2741[3], i2740.m_MarkPositionAdjustment)
  return i2740
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2745 = data
  i2744.m_BaseMarkGlyphID = i2745[0]
  i2744.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2745[1], i2744.m_BaseMarkGlyphAnchorPoint)
  i2744.m_CombiningMarkGlyphID = i2745[2]
  i2744.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2745[3], i2744.m_CombiningMarkPositionAdjustment)
  return i2744
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'regularTypeface')
  request.r(i2751[2], i2751[3], 0, i2750, 'italicTypeface')
  return i2750
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2752 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2753 = data
  i2752.Name = i2753[0]
  i2752.PointSize = i2753[1]
  i2752.Scale = i2753[2]
  i2752.CharacterCount = i2753[3]
  i2752.LineHeight = i2753[4]
  i2752.Baseline = i2753[5]
  i2752.Ascender = i2753[6]
  i2752.CapHeight = i2753[7]
  i2752.Descender = i2753[8]
  i2752.CenterLine = i2753[9]
  i2752.SuperscriptOffset = i2753[10]
  i2752.SubscriptOffset = i2753[11]
  i2752.SubSize = i2753[12]
  i2752.Underline = i2753[13]
  i2752.UnderlineThickness = i2753[14]
  i2752.strikethrough = i2753[15]
  i2752.strikethroughThickness = i2753[16]
  i2752.TabWidth = i2753[17]
  i2752.Padding = i2753[18]
  i2752.AtlasWidth = i2753[19]
  i2752.AtlasHeight = i2753[20]
  return i2752
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2757 = data
  i2756.id = i2757[0]
  i2756.x = i2757[1]
  i2756.y = i2757[2]
  i2756.width = i2757[3]
  i2756.height = i2757[4]
  i2756.xOffset = i2757[5]
  i2756.yOffset = i2757[6]
  i2756.xAdvance = i2757[7]
  i2756.scale = i2757[8]
  return i2756
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.KerningTable' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.add(request.d('TMPro.KerningPair', i2761[i + 0]));
  }
  i2758.kerningPairs = i2760
  return i2758
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.KerningPair' )
  var i2765 = data
  i2764.xOffset = i2765[0]
  i2764.m_FirstGlyph = i2765[1]
  i2764.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2765[2], i2764.m_FirstGlyphAdjustments)
  i2764.m_SecondGlyph = i2765[3]
  i2764.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2765[4], i2764.m_SecondGlyphAdjustments)
  i2764.m_IgnoreSpacingAdjustments = !!i2765[5]
  return i2764
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2767 = data
  i2766.m_FaceIndex = i2767[0]
  i2766.m_FamilyName = i2767[1]
  i2766.m_StyleName = i2767[2]
  i2766.m_PointSize = i2767[3]
  i2766.m_Scale = i2767[4]
  i2766.m_UnitsPerEM = i2767[5]
  i2766.m_LineHeight = i2767[6]
  i2766.m_AscentLine = i2767[7]
  i2766.m_CapLine = i2767[8]
  i2766.m_MeanLine = i2767[9]
  i2766.m_Baseline = i2767[10]
  i2766.m_DescentLine = i2767[11]
  i2766.m_SuperscriptOffset = i2767[12]
  i2766.m_SuperscriptSize = i2767[13]
  i2766.m_SubscriptOffset = i2767[14]
  i2766.m_SubscriptSize = i2767[15]
  i2766.m_UnderlineOffset = i2767[16]
  i2766.m_UnderlineThickness = i2767[17]
  i2766.m_StrikethroughOffset = i2767[18]
  i2766.m_StrikethroughThickness = i2767[19]
  i2766.m_TabWidth = i2767[20]
  return i2766
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2769 = data
  i2768.useSafeMode = !!i2769[0]
  i2768.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2769[1], i2768.safeModeOptions)
  i2768.timeScale = i2769[2]
  i2768.unscaledTimeScale = i2769[3]
  i2768.useSmoothDeltaTime = !!i2769[4]
  i2768.maxSmoothUnscaledTime = i2769[5]
  i2768.rewindCallbackMode = i2769[6]
  i2768.showUnityEditorReport = !!i2769[7]
  i2768.logBehaviour = i2769[8]
  i2768.drawGizmos = !!i2769[9]
  i2768.defaultRecyclable = !!i2769[10]
  i2768.defaultAutoPlay = i2769[11]
  i2768.defaultUpdateType = i2769[12]
  i2768.defaultTimeScaleIndependent = !!i2769[13]
  i2768.defaultEaseType = i2769[14]
  i2768.defaultEaseOvershootOrAmplitude = i2769[15]
  i2768.defaultEasePeriod = i2769[16]
  i2768.defaultAutoKill = !!i2769[17]
  i2768.defaultLoopType = i2769[18]
  i2768.debugMode = !!i2769[19]
  i2768.debugStoreTargetId = !!i2769[20]
  i2768.showPreviewPanel = !!i2769[21]
  i2768.storeSettingsLocation = i2769[22]
  i2768.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2769[23], i2768.modules)
  i2768.createASMDEF = !!i2769[24]
  i2768.showPlayingTweens = !!i2769[25]
  i2768.showPausedTweens = !!i2769[26]
  return i2768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2771 = data
  i2770.logBehaviour = i2771[0]
  i2770.nestedTweenFailureBehaviour = i2771[1]
  return i2770
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2772 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2773 = data
  i2772.showPanel = !!i2773[0]
  i2772.audioEnabled = !!i2773[1]
  i2772.physicsEnabled = !!i2773[2]
  i2772.physics2DEnabled = !!i2773[3]
  i2772.spriteEnabled = !!i2773[4]
  i2772.uiEnabled = !!i2773[5]
  i2772.textMeshProEnabled = !!i2773[6]
  i2772.tk2DEnabled = !!i2773[7]
  i2772.deAudioEnabled = !!i2773[8]
  i2772.deUnityExtendedEnabled = !!i2773[9]
  i2772.epoOutlineEnabled = !!i2773[10]
  return i2772
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_Settings' )
  var i2775 = data
  i2774.assetVersion = i2775[0]
  i2774.m_TextWrappingMode = i2775[1]
  i2774.m_enableKerning = !!i2775[2]
  var i2777 = i2775[3]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(i2777[i + 0]);
  }
  i2774.m_ActiveFontFeatures = i2776
  i2774.m_enableExtraPadding = !!i2775[4]
  i2774.m_enableTintAllSprites = !!i2775[5]
  i2774.m_enableParseEscapeCharacters = !!i2775[6]
  i2774.m_EnableRaycastTarget = !!i2775[7]
  i2774.m_GetFontFeaturesAtRuntime = !!i2775[8]
  i2774.m_missingGlyphCharacter = i2775[9]
  i2774.m_ClearDynamicDataOnBuild = !!i2775[10]
  i2774.m_warningsDisabled = !!i2775[11]
  request.r(i2775[12], i2775[13], 0, i2774, 'm_defaultFontAsset')
  i2774.m_defaultFontAssetPath = i2775[14]
  i2774.m_defaultFontSize = i2775[15]
  i2774.m_defaultAutoSizeMinRatio = i2775[16]
  i2774.m_defaultAutoSizeMaxRatio = i2775[17]
  i2774.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2775[18], i2775[19] )
  i2774.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2775[20], i2775[21] )
  i2774.m_autoSizeTextContainer = !!i2775[22]
  i2774.m_IsTextObjectScaleStatic = !!i2775[23]
  var i2779 = i2775[24]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 1, i2778, '')
  }
  i2774.m_fallbackFontAssets = i2778
  i2774.m_matchMaterialPreset = !!i2775[25]
  i2774.m_HideSubTextObjects = !!i2775[26]
  request.r(i2775[27], i2775[28], 0, i2774, 'm_defaultSpriteAsset')
  i2774.m_defaultSpriteAssetPath = i2775[29]
  i2774.m_enableEmojiSupport = !!i2775[30]
  i2774.m_MissingCharacterSpriteUnicode = i2775[31]
  var i2781 = i2775[32]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2774.m_EmojiFallbackTextAssets = i2780
  i2774.m_defaultColorGradientPresetsPath = i2775[33]
  request.r(i2775[34], i2775[35], 0, i2774, 'm_defaultStyleSheet')
  i2774.m_StyleSheetsResourcePath = i2775[36]
  request.r(i2775[37], i2775[38], 0, i2774, 'm_leadingCharacters')
  request.r(i2775[39], i2775[40], 0, i2774, 'm_followingCharacters')
  i2774.m_UseModernHangulLineBreakingRules = !!i2775[41]
  return i2774
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'spriteSheet')
  var i2787 = i2785[2]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('TMPro.TMP_Sprite', i2787[i + 0]));
  }
  i2784.spriteInfoList = i2786
  var i2789 = i2785[3]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2789.length; i += 2) {
  request.r(i2789[i + 0], i2789[i + 1], 1, i2788, '')
  }
  i2784.fallbackSpriteAssets = i2788
  var i2791 = i2785[4]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('TMPro.TMP_SpriteCharacter', i2791[i + 0]));
  }
  i2784.m_SpriteCharacterTable = i2790
  var i2793 = i2785[5]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_SpriteGlyph', i2793[i + 0]));
  }
  i2784.m_GlyphTable = i2792
  i2784.m_Version = i2785[6]
  i2784.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2785[7], i2784.m_FaceInfo)
  request.r(i2785[8], i2785[9], 0, i2784, 'm_Material')
  return i2784
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2797 = data
  i2796.name = i2797[0]
  i2796.hashCode = i2797[1]
  i2796.unicode = i2797[2]
  i2796.pivot = new pc.Vec2( i2797[3], i2797[4] )
  request.r(i2797[5], i2797[6], 0, i2796, 'sprite')
  i2796.id = i2797[7]
  i2796.x = i2797[8]
  i2796.y = i2797[9]
  i2796.width = i2797[10]
  i2796.height = i2797[11]
  i2796.xOffset = i2797[12]
  i2796.yOffset = i2797[13]
  i2796.xAdvance = i2797[14]
  i2796.scale = i2797[15]
  return i2796
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2803 = data
  i2802.m_Name = i2803[0]
  i2802.m_ElementType = i2803[1]
  i2802.m_Unicode = i2803[2]
  i2802.m_GlyphIndex = i2803[3]
  i2802.m_Scale = i2803[4]
  return i2802
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'sprite')
  i2806.m_Index = i2807[2]
  i2806.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2807[3], i2806.m_Metrics)
  i2806.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2807[4], i2806.m_GlyphRect)
  i2806.m_Scale = i2807[5]
  i2806.m_AtlasIndex = i2807[6]
  i2806.m_ClassDefinitionType = i2807[7]
  return i2806
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2809 = data
  var i2811 = i2809[0]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('TMPro.TMP_Style', i2811[i + 0]));
  }
  i2808.m_StyleList = i2810
  return i2808
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_Style' )
  var i2815 = data
  i2814.m_Name = i2815[0]
  i2814.m_HashCode = i2815[1]
  i2814.m_OpeningDefinition = i2815[2]
  i2814.m_ClosingDefinition = i2815[3]
  i2814.m_OpeningTagArray = i2815[4]
  i2814.m_ClosingTagArray = i2815[5]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2819[i + 0]) );
  }
  i2816.files = i2818
  i2816.componentToPrefabIds = i2817[1]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2823 = data
  i2822.path = i2823[0]
  request.r(i2823[1], i2823[2], 0, i2822, 'unityObject')
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2825 = data
  var i2827 = i2825[0]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2827[i + 0]) );
  }
  i2824.scriptsExecutionOrder = i2826
  var i2829 = i2825[1]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2829[i + 0]) );
  }
  i2824.sortingLayers = i2828
  var i2831 = i2825[2]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2831[i + 0]) );
  }
  i2824.cullingLayers = i2830
  i2824.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2825[3], i2824.timeSettings)
  i2824.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2825[4], i2824.physicsSettings)
  i2824.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2825[5], i2824.physics2DSettings)
  i2824.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2825[6], i2824.qualitySettings)
  i2824.enableRealtimeShadows = !!i2825[7]
  i2824.enableAutoInstancing = !!i2825[8]
  i2824.enableStaticBatching = !!i2825[9]
  i2824.enableDynamicBatching = !!i2825[10]
  i2824.usePreservativeDynamicBatching = !!i2825[11]
  i2824.lightmapEncodingQuality = i2825[12]
  i2824.desiredColorSpace = i2825[13]
  var i2833 = i2825[14]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( i2833[i + 0] );
  }
  i2824.allTags = i2832
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.value = i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2841 = data
  i2840.id = i2841[0]
  i2840.name = i2841[1]
  i2840.value = i2841[2]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2845 = data
  i2844.id = i2845[0]
  i2844.name = i2845[1]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2847 = data
  i2846.fixedDeltaTime = i2847[0]
  i2846.maximumDeltaTime = i2847[1]
  i2846.timeScale = i2847[2]
  i2846.maximumParticleTimestep = i2847[3]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2849 = data
  i2848.gravity = new pc.Vec3( i2849[0], i2849[1], i2849[2] )
  i2848.defaultSolverIterations = i2849[3]
  i2848.bounceThreshold = i2849[4]
  i2848.autoSyncTransforms = !!i2849[5]
  i2848.autoSimulation = !!i2849[6]
  var i2851 = i2849[7]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2851[i + 0]) );
  }
  i2848.collisionMatrix = i2850
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2855 = data
  i2854.enabled = !!i2855[0]
  i2854.layerId = i2855[1]
  i2854.otherLayerId = i2855[2]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2857 = data
  request.r(i2857[0], i2857[1], 0, i2856, 'material')
  i2856.gravity = new pc.Vec2( i2857[2], i2857[3] )
  i2856.positionIterations = i2857[4]
  i2856.velocityIterations = i2857[5]
  i2856.velocityThreshold = i2857[6]
  i2856.maxLinearCorrection = i2857[7]
  i2856.maxAngularCorrection = i2857[8]
  i2856.maxTranslationSpeed = i2857[9]
  i2856.maxRotationSpeed = i2857[10]
  i2856.baumgarteScale = i2857[11]
  i2856.baumgarteTOIScale = i2857[12]
  i2856.timeToSleep = i2857[13]
  i2856.linearSleepTolerance = i2857[14]
  i2856.angularSleepTolerance = i2857[15]
  i2856.defaultContactOffset = i2857[16]
  i2856.autoSimulation = !!i2857[17]
  i2856.queriesHitTriggers = !!i2857[18]
  i2856.queriesStartInColliders = !!i2857[19]
  i2856.callbacksOnDisable = !!i2857[20]
  i2856.reuseCollisionCallbacks = !!i2857[21]
  i2856.autoSyncTransforms = !!i2857[22]
  var i2859 = i2857[23]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2859[i + 0]) );
  }
  i2856.collisionMatrix = i2858
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2863 = data
  i2862.enabled = !!i2863[0]
  i2862.layerId = i2863[1]
  i2862.otherLayerId = i2863[2]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2865 = data
  var i2867 = i2865[0]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2867[i + 0]) );
  }
  i2864.qualityLevels = i2866
  var i2869 = i2865[1]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( i2869[i + 0] );
  }
  i2864.names = i2868
  i2864.shadows = i2865[2]
  i2864.anisotropicFiltering = i2865[3]
  i2864.antiAliasing = i2865[4]
  i2864.lodBias = i2865[5]
  i2864.shadowCascades = i2865[6]
  i2864.shadowDistance = i2865[7]
  i2864.shadowmaskMode = i2865[8]
  i2864.shadowProjection = i2865[9]
  i2864.shadowResolution = i2865[10]
  i2864.softParticles = !!i2865[11]
  i2864.softVegetation = !!i2865[12]
  i2864.activeColorSpace = i2865[13]
  i2864.desiredColorSpace = i2865[14]
  i2864.masterTextureLimit = i2865[15]
  i2864.maxQueuedFrames = i2865[16]
  i2864.particleRaycastBudget = i2865[17]
  i2864.pixelLightCount = i2865[18]
  i2864.realtimeReflectionProbes = !!i2865[19]
  i2864.shadowCascade2Split = i2865[20]
  i2864.shadowCascade4Split = new pc.Vec3( i2865[21], i2865[22], i2865[23] )
  i2864.streamingMipmapsActive = !!i2865[24]
  i2864.vSyncCount = i2865[25]
  i2864.asyncUploadBufferSize = i2865[26]
  i2864.asyncUploadTimeSlice = i2865[27]
  i2864.billboardsFaceCameraPosition = !!i2865[28]
  i2864.shadowNearPlaneOffset = i2865[29]
  i2864.streamingMipmapsMemoryBudget = i2865[30]
  i2864.maximumLODLevel = i2865[31]
  i2864.streamingMipmapsAddAllCameras = !!i2865[32]
  i2864.streamingMipmapsMaxLevelReduction = i2865[33]
  i2864.streamingMipmapsRenderersPerFrame = i2865[34]
  i2864.resolutionScalingFixedDPIFactor = i2865[35]
  i2864.streamingMipmapsMaxFileIORequests = i2865[36]
  i2864.currentQualityLevel = i2865[37]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2873 = data
  i2872.name = i2873[0]
  var i2875 = i2873[1]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2875[i + 0]) );
  }
  i2872.tos = i2874
  var i2877 = i2873[2]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2872.constant = i2876
  i2872.isValid = !!i2873[3]
  i2872.isHuman = !!i2873[4]
  i2872.hasRootMotion = !!i2873[5]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2881 = data
  i2880.hash = i2881[0]
  i2880.path = i2881[1]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2885 = data
  i2884.weight = i2885[0]
  i2884.vertices = i2885[1]
  i2884.normals = i2885[2]
  i2884.tangents = i2885[3]
  return i2884
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2887 = data
  i2886.m_GlyphIndex = i2887[0]
  i2886.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2887[1], i2886.m_GlyphValueRecord)
  return i2886
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2889 = data
  i2888.m_XCoordinate = i2889[0]
  i2888.m_YCoordinate = i2889[1]
  return i2888
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2891 = data
  i2890.m_XPositionAdjustment = i2891[0]
  i2890.m_YPositionAdjustment = i2891[1]
  return i2890
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2893 = data
  i2892.xPlacement = i2893[0]
  i2892.yPlacement = i2893[1]
  i2892.xAdvance = i2893[2]
  i2892.yAdvance = i2893[3]
  return i2892
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2895 = data
  i2894.m_XPlacement = i2895[0]
  i2894.m_YPlacement = i2895[1]
  i2894.m_XAdvance = i2895[2]
  i2894.m_YAdvance = i2895[3]
  return i2894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[50],"77":[36],"78":[43],"79":[43],"80":[43],"81":[43],"82":[43],"83":[43],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[36],"99":[5],"100":[101],"102":[101],"20":[19],"103":[19],"104":[25,19],"105":[5],"106":[25,19],"107":[19],"108":[19],"109":[5,19],"30":[19,25],"110":[111],"112":[111],"113":[111],"114":[19],"115":[19],"22":[20],"26":[25,19],"116":[19],"21":[20],"117":[19],"118":[19],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"29":[19],"124":[19],"125":[25,19],"126":[19],"127":[19],"128":[19],"129":[19],"130":[25,19],"131":[19],"132":[16],"133":[16],"17":[16],"134":[16],"135":[36],"136":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AnimatorOverrideController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.SphereCollider","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","CharacterTrigger","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/21/2026 06:16:51";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SBFM_V07_HoaiTT";

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

Deserializers.buildID = "4944076f-2127-45e2-84ee-e01c3fc31435";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

