var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.JointSpring' )
  var i2227 = data
  i2226.spring = i2227[0]
  i2226.damper = i2227[1]
  i2226.targetPosition = i2227[2]
  return i2226
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.JointMotor' )
  var i2229 = data
  i2228.m_TargetVelocity = i2229[0]
  i2228.m_Force = i2229[1]
  i2228.m_FreeSpin = i2229[2]
  return i2228
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.JointLimits' )
  var i2231 = data
  i2230.m_Min = i2231[0]
  i2230.m_Max = i2231[1]
  i2230.m_Bounciness = i2231[2]
  i2230.m_BounceMinVelocity = i2231[3]
  i2230.m_ContactDistance = i2231[4]
  i2230.minBounce = i2231[5]
  i2230.maxBounce = i2231[6]
  return i2230
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.JointDrive' )
  var i2233 = data
  i2232.m_PositionSpring = i2233[0]
  i2232.m_PositionDamper = i2233[1]
  i2232.m_MaximumForce = i2233[2]
  i2232.m_UseAcceleration = i2233[3]
  return i2232
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2235 = data
  i2234.m_Spring = i2235[0]
  i2234.m_Damper = i2235[1]
  return i2234
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2237 = data
  i2236.m_Limit = i2237[0]
  i2236.m_Bounciness = i2237[1]
  i2236.m_ContactDistance = i2237[2]
  return i2236
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2239 = data
  i2238.m_ExtremumSlip = i2239[0]
  i2238.m_ExtremumValue = i2239[1]
  i2238.m_AsymptoteSlip = i2239[2]
  i2238.m_AsymptoteValue = i2239[3]
  i2238.m_Stiffness = i2239[4]
  return i2238
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2241 = data
  i2240.m_LowerAngle = i2241[0]
  i2240.m_UpperAngle = i2241[1]
  return i2240
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2243 = data
  i2242.m_MotorSpeed = i2243[0]
  i2242.m_MaximumMotorTorque = i2243[1]
  return i2242
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2245 = data
  i2244.m_DampingRatio = i2245[0]
  i2244.m_Frequency = i2245[1]
  i2244.m_Angle = i2245[2]
  return i2244
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2247 = data
  i2246.m_LowerTranslation = i2247[0]
  i2246.m_UpperTranslation = i2247[1]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.width = i2249[1]
  i2248.height = i2249[2]
  i2248.mipmapCount = i2249[3]
  i2248.anisoLevel = i2249[4]
  i2248.filterMode = i2249[5]
  i2248.hdr = !!i2249[6]
  i2248.format = i2249[7]
  i2248.wrapMode = i2249[8]
  i2248.alphaIsTransparency = !!i2249[9]
  i2248.alphaSource = i2249[10]
  i2248.graphicsFormat = i2249[11]
  i2248.sRGBTexture = !!i2249[12]
  i2248.desiredColorSpace = i2249[13]
  i2248.wrapU = i2249[14]
  i2248.wrapV = i2249[15]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2250 = root || new pc.UnityMaterial()
  var i2251 = data
  i2250.name = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'shader')
  i2250.renderQueue = i2251[3]
  i2250.enableInstancing = !!i2251[4]
  var i2253 = i2251[5]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2253[i + 0]) );
  }
  i2250.floatParameters = i2252
  var i2255 = i2251[6]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2255[i + 0]) );
  }
  i2250.colorParameters = i2254
  var i2257 = i2251[7]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2257[i + 0]) );
  }
  i2250.vectorParameters = i2256
  var i2259 = i2251[8]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2259[i + 0]) );
  }
  i2250.textureParameters = i2258
  var i2261 = i2251[9]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2261[i + 0]) );
  }
  i2250.materialFlags = i2260
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.value = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.value = new pc.Color(i2269[1], i2269[2], i2269[3], i2269[4])
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.value = new pc.Vec4( i2273[1], i2273[2], i2273[3], i2273[4] )
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2277 = data
  i2276.name = i2277[0]
  request.r(i2277[1], i2277[2], 0, i2276, 'value')
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.enabled = !!i2281[1]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2283 = data
  i2282.position = new pc.Vec3( i2283[0], i2283[1], i2283[2] )
  i2282.scale = new pc.Vec3( i2283[3], i2283[4], i2283[5] )
  i2282.rotation = new pc.Quat(i2283[6], i2283[7], i2283[8], i2283[9])
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'sharedMesh')
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'additionalVertexStreams')
  i2286.enabled = !!i2287[2]
  request.r(i2287[3], i2287[4], 0, i2286, 'sharedMaterial')
  var i2289 = i2287[5]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2286.sharedMaterials = i2288
  i2286.receiveShadows = !!i2287[6]
  i2286.shadowCastingMode = i2287[7]
  i2286.sortingLayerID = i2287[8]
  i2286.sortingOrder = i2287[9]
  i2286.lightmapIndex = i2287[10]
  i2286.lightmapSceneIndex = i2287[11]
  i2286.lightmapScaleOffset = new pc.Vec4( i2287[12], i2287[13], i2287[14], i2287[15] )
  i2286.lightProbeUsage = i2287[16]
  i2286.reflectionProbeUsage = i2287[17]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.tagId = i2293[1]
  i2292.enabled = !!i2293[2]
  i2292.isStatic = !!i2293[3]
  i2292.layer = i2293[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'animatorController')
  request.r(i2319[2], i2319[3], 0, i2318, 'avatar')
  i2318.updateMode = i2319[4]
  i2318.hasTransformHierarchy = !!i2319[5]
  i2318.applyRootMotion = !!i2319[6]
  var i2321 = i2319[7]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 2, i2320, '')
  }
  i2318.humanBones = i2320
  i2318.enabled = !!i2319[8]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'clip')
  request.r(i2325[2], i2325[3], 0, i2324, 'outputAudioMixerGroup')
  i2324.playOnAwake = !!i2325[4]
  i2324.loop = !!i2325[5]
  i2324.time = i2325[6]
  i2324.volume = i2325[7]
  i2324.pitch = i2325[8]
  i2324.enabled = !!i2325[9]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2327 = data
  i2326.color = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  request.r(i2327[4], i2327[5], 0, i2326, 'sprite')
  i2326.flipX = !!i2327[6]
  i2326.flipY = !!i2327[7]
  i2326.drawMode = i2327[8]
  i2326.size = new pc.Vec2( i2327[9], i2327[10] )
  i2326.tileMode = i2327[11]
  i2326.adaptiveModeThreshold = i2327[12]
  i2326.maskInteraction = i2327[13]
  i2326.spriteSortPoint = i2327[14]
  i2326.enabled = !!i2327[15]
  request.r(i2327[16], i2327[17], 0, i2326, 'sharedMaterial')
  var i2329 = i2327[18]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2326.sharedMaterials = i2328
  i2326.receiveShadows = !!i2327[19]
  i2326.shadowCastingMode = i2327[20]
  i2326.sortingLayerID = i2327[21]
  i2326.sortingOrder = i2327[22]
  i2326.lightmapIndex = i2327[23]
  i2326.lightmapSceneIndex = i2327[24]
  i2326.lightmapScaleOffset = new pc.Vec4( i2327[25], i2327[26], i2327[27], i2327[28] )
  i2326.lightProbeUsage = i2327[29]
  i2326.reflectionProbeUsage = i2327[30]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.atlasId = i2331[1]
  i2330.mipmapCount = i2331[2]
  i2330.hdr = !!i2331[3]
  i2330.size = i2331[4]
  i2330.anisoLevel = i2331[5]
  i2330.filterMode = i2331[6]
  var i2333 = i2331[7]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 4) {
    i2332.push( UnityEngine.Rect.MinMaxRect(i2333[i + 0], i2333[i + 1], i2333[i + 2], i2333[i + 3]) );
  }
  i2330.rects = i2332
  i2330.wrapU = i2331[8]
  i2330.wrapV = i2331[9]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.index = i2337[1]
  i2336.startup = !!i2337[2]
  return i2336
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'm_FirstSelected')
  i2338.m_sendNavigationEvents = !!i2339[2]
  i2338.m_DragThreshold = i2339[3]
  return i2338
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2341 = data
  i2340.m_HorizontalAxis = i2341[0]
  i2340.m_VerticalAxis = i2341[1]
  i2340.m_SubmitButton = i2341[2]
  i2340.m_CancelButton = i2341[3]
  i2340.m_InputActionsPerSecond = i2341[4]
  i2340.m_RepeatDelay = i2341[5]
  i2340.m_ForceModuleActive = !!i2341[6]
  i2340.m_SendPointerHoverToParent = !!i2341[7]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2343 = data
  i2342.pivot = new pc.Vec2( i2343[0], i2343[1] )
  i2342.anchorMin = new pc.Vec2( i2343[2], i2343[3] )
  i2342.anchorMax = new pc.Vec2( i2343[4], i2343[5] )
  i2342.sizeDelta = new pc.Vec2( i2343[6], i2343[7] )
  i2342.anchoredPosition3D = new pc.Vec3( i2343[8], i2343[9], i2343[10] )
  i2342.rotation = new pc.Quat(i2343[11], i2343[12], i2343[13], i2343[14])
  i2342.scale = new pc.Vec3( i2343[15], i2343[16], i2343[17] )
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2345 = data
  i2344.planeDistance = i2345[0]
  i2344.referencePixelsPerUnit = i2345[1]
  i2344.isFallbackOverlay = !!i2345[2]
  i2344.renderMode = i2345[3]
  i2344.renderOrder = i2345[4]
  i2344.sortingLayerName = i2345[5]
  i2344.sortingOrder = i2345[6]
  i2344.scaleFactor = i2345[7]
  request.r(i2345[8], i2345[9], 0, i2344, 'worldCamera')
  i2344.overrideSorting = !!i2345[10]
  i2344.pixelPerfect = !!i2345[11]
  i2344.targetDisplay = i2345[12]
  i2344.overridePixelPerfect = !!i2345[13]
  i2344.enabled = !!i2345[14]
  return i2344
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2347 = data
  i2346.m_UiScaleMode = i2347[0]
  i2346.m_ReferencePixelsPerUnit = i2347[1]
  i2346.m_ScaleFactor = i2347[2]
  i2346.m_ReferenceResolution = new pc.Vec2( i2347[3], i2347[4] )
  i2346.m_ScreenMatchMode = i2347[5]
  i2346.m_MatchWidthOrHeight = i2347[6]
  i2346.m_PhysicalUnit = i2347[7]
  i2346.m_FallbackScreenDPI = i2347[8]
  i2346.m_DefaultSpriteDPI = i2347[9]
  i2346.m_DynamicPixelsPerUnit = i2347[10]
  i2346.m_PresetInfoIsWorld = !!i2347[11]
  return i2346
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2349 = data
  i2348.m_IgnoreReversedGraphics = !!i2349[0]
  i2348.m_BlockingObjects = i2349[1]
  i2348.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2349[2] )
  return i2348
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2350 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2351 = data
  i2350._referenceResolution = new pc.Vec2( i2351[0], i2351[1] )
  i2350._portraitMatch = i2351[2]
  i2350._landscapeMatch = i2351[3]
  i2350._squareMatch = i2351[4]
  i2350._portraitAspectThreshold = i2351[5]
  i2350._landscapeAspectThreshold = i2351[6]
  i2350._aspectEpsilon = i2351[7]
  return i2350
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2352 = root || request.c( 'Joystick' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'background')
  request.r(i2353[2], i2353[3], 0, i2352, 'joy')
  i2352.deadZone = i2353[4]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2355 = data
  i2354.cullTransparentMesh = !!i2355[0]
  return i2354
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.UI.Image' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'm_Sprite')
  i2356.m_Type = i2357[2]
  i2356.m_PreserveAspect = !!i2357[3]
  i2356.m_FillCenter = !!i2357[4]
  i2356.m_FillMethod = i2357[5]
  i2356.m_FillAmount = i2357[6]
  i2356.m_FillClockwise = !!i2357[7]
  i2356.m_FillOrigin = i2357[8]
  i2356.m_UseSpriteMesh = !!i2357[9]
  i2356.m_PixelsPerUnitMultiplier = i2357[10]
  request.r(i2357[11], i2357[12], 0, i2356, 'm_Material')
  i2356.m_Maskable = !!i2357[13]
  i2356.m_Color = new pc.Color(i2357[14], i2357[15], i2357[16], i2357[17])
  i2356.m_RaycastTarget = !!i2357[18]
  i2356.m_RaycastPadding = new pc.Vec4( i2357[19], i2357[20], i2357[21], i2357[22] )
  return i2356
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2359 = data
  i2358.m_hasFontAssetChanged = !!i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'm_baseMaterial')
  i2358.m_maskOffset = new pc.Vec4( i2359[3], i2359[4], i2359[5], i2359[6] )
  i2358.m_text = i2359[7]
  i2358.m_isRightToLeft = !!i2359[8]
  request.r(i2359[9], i2359[10], 0, i2358, 'm_fontAsset')
  request.r(i2359[11], i2359[12], 0, i2358, 'm_sharedMaterial')
  var i2361 = i2359[13]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.m_fontSharedMaterials = i2360
  request.r(i2359[14], i2359[15], 0, i2358, 'm_fontMaterial')
  var i2363 = i2359[16]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2358.m_fontMaterials = i2362
  i2358.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2359[17], i2359[18], i2359[19], i2359[20])
  i2358.m_fontColor = new pc.Color(i2359[21], i2359[22], i2359[23], i2359[24])
  i2358.m_enableVertexGradient = !!i2359[25]
  i2358.m_colorMode = i2359[26]
  i2358.m_fontColorGradient = request.d('TMPro.VertexGradient', i2359[27], i2358.m_fontColorGradient)
  request.r(i2359[28], i2359[29], 0, i2358, 'm_fontColorGradientPreset')
  request.r(i2359[30], i2359[31], 0, i2358, 'm_spriteAsset')
  i2358.m_tintAllSprites = !!i2359[32]
  request.r(i2359[33], i2359[34], 0, i2358, 'm_StyleSheet')
  i2358.m_TextStyleHashCode = i2359[35]
  i2358.m_overrideHtmlColors = !!i2359[36]
  i2358.m_faceColor = UnityEngine.Color32.ConstructColor(i2359[37], i2359[38], i2359[39], i2359[40])
  i2358.m_fontSize = i2359[41]
  i2358.m_fontSizeBase = i2359[42]
  i2358.m_fontWeight = i2359[43]
  i2358.m_enableAutoSizing = !!i2359[44]
  i2358.m_fontSizeMin = i2359[45]
  i2358.m_fontSizeMax = i2359[46]
  i2358.m_fontStyle = i2359[47]
  i2358.m_HorizontalAlignment = i2359[48]
  i2358.m_VerticalAlignment = i2359[49]
  i2358.m_textAlignment = i2359[50]
  i2358.m_characterSpacing = i2359[51]
  i2358.m_wordSpacing = i2359[52]
  i2358.m_lineSpacing = i2359[53]
  i2358.m_lineSpacingMax = i2359[54]
  i2358.m_paragraphSpacing = i2359[55]
  i2358.m_charWidthMaxAdj = i2359[56]
  i2358.m_TextWrappingMode = i2359[57]
  i2358.m_wordWrappingRatios = i2359[58]
  i2358.m_overflowMode = i2359[59]
  request.r(i2359[60], i2359[61], 0, i2358, 'm_linkedTextComponent')
  request.r(i2359[62], i2359[63], 0, i2358, 'parentLinkedComponent')
  i2358.m_enableKerning = !!i2359[64]
  var i2365 = i2359[65]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(i2365[i + 0]);
  }
  i2358.m_ActiveFontFeatures = i2364
  i2358.m_enableExtraPadding = !!i2359[66]
  i2358.checkPaddingRequired = !!i2359[67]
  i2358.m_isRichText = !!i2359[68]
  i2358.m_parseCtrlCharacters = !!i2359[69]
  i2358.m_isOrthographic = !!i2359[70]
  i2358.m_isCullingEnabled = !!i2359[71]
  i2358.m_horizontalMapping = i2359[72]
  i2358.m_verticalMapping = i2359[73]
  i2358.m_uvLineOffset = i2359[74]
  i2358.m_geometrySortingOrder = i2359[75]
  i2358.m_IsTextObjectScaleStatic = !!i2359[76]
  i2358.m_VertexBufferAutoSizeReduction = !!i2359[77]
  i2358.m_useMaxVisibleDescender = !!i2359[78]
  i2358.m_pageToDisplay = i2359[79]
  i2358.m_margin = new pc.Vec4( i2359[80], i2359[81], i2359[82], i2359[83] )
  i2358.m_isUsingLegacyAnimationComponent = !!i2359[84]
  i2358.m_isVolumetricText = !!i2359[85]
  request.r(i2359[86], i2359[87], 0, i2358, 'm_Material')
  i2358.m_EmojiFallbackSupport = !!i2359[88]
  i2358.m_Maskable = !!i2359[89]
  i2358.m_Color = new pc.Color(i2359[90], i2359[91], i2359[92], i2359[93])
  i2358.m_RaycastTarget = !!i2359[94]
  i2358.m_RaycastPadding = new pc.Vec4( i2359[95], i2359[96], i2359[97], i2359[98] )
  return i2358
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.VertexGradient' )
  var i2367 = data
  i2366.topLeft = new pc.Color(i2367[0], i2367[1], i2367[2], i2367[3])
  i2366.topRight = new pc.Color(i2367[4], i2367[5], i2367[6], i2367[7])
  i2366.bottomLeft = new pc.Color(i2367[8], i2367[9], i2367[10], i2367[11])
  i2366.bottomRight = new pc.Color(i2367[12], i2367[13], i2367[14], i2367[15])
  return i2366
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.Button' )
  var i2371 = data
  i2370.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2371[0], i2370.m_OnClick)
  i2370.m_Navigation = request.d('UnityEngine.UI.Navigation', i2371[1], i2370.m_Navigation)
  i2370.m_Transition = i2371[2]
  i2370.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2371[3], i2370.m_Colors)
  i2370.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2371[4], i2370.m_SpriteState)
  i2370.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2371[5], i2370.m_AnimationTriggers)
  i2370.m_Interactable = !!i2371[6]
  request.r(i2371[7], i2371[8], 0, i2370, 'm_TargetGraphic')
  return i2370
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2373 = data
  i2372.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2373[0], i2372.m_PersistentCalls)
  return i2372
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('UnityEngine.Events.PersistentCall', i2377[i + 0]));
  }
  i2374.m_Calls = i2376
  return i2374
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_Target')
  i2380.m_TargetAssemblyTypeName = i2381[2]
  i2380.m_MethodName = i2381[3]
  i2380.m_Mode = i2381[4]
  i2380.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2381[5], i2380.m_Arguments)
  i2380.m_CallState = i2381[6]
  return i2380
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2383 = data
  i2382.m_Mode = i2383[0]
  i2382.m_WrapAround = !!i2383[1]
  request.r(i2383[2], i2383[3], 0, i2382, 'm_SelectOnUp')
  request.r(i2383[4], i2383[5], 0, i2382, 'm_SelectOnDown')
  request.r(i2383[6], i2383[7], 0, i2382, 'm_SelectOnLeft')
  request.r(i2383[8], i2383[9], 0, i2382, 'm_SelectOnRight')
  return i2382
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2385 = data
  i2384.m_NormalColor = new pc.Color(i2385[0], i2385[1], i2385[2], i2385[3])
  i2384.m_HighlightedColor = new pc.Color(i2385[4], i2385[5], i2385[6], i2385[7])
  i2384.m_PressedColor = new pc.Color(i2385[8], i2385[9], i2385[10], i2385[11])
  i2384.m_SelectedColor = new pc.Color(i2385[12], i2385[13], i2385[14], i2385[15])
  i2384.m_DisabledColor = new pc.Color(i2385[16], i2385[17], i2385[18], i2385[19])
  i2384.m_ColorMultiplier = i2385[20]
  i2384.m_FadeDuration = i2385[21]
  return i2384
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'm_HighlightedSprite')
  request.r(i2387[2], i2387[3], 0, i2386, 'm_PressedSprite')
  request.r(i2387[4], i2387[5], 0, i2386, 'm_SelectedSprite')
  request.r(i2387[6], i2387[7], 0, i2386, 'm_DisabledSprite')
  return i2386
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2389 = data
  i2388.m_NormalTrigger = i2389[0]
  i2388.m_HighlightedTrigger = i2389[1]
  i2388.m_PressedTrigger = i2389[2]
  i2388.m_SelectedTrigger = i2389[3]
  i2388.m_DisabledTrigger = i2389[4]
  return i2388
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2390 = root || request.c( 'JumpButton' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'button')
  return i2390
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2393 = data
  i2392.m_ShowMaskGraphic = !!i2393[0]
  return i2392
}

Deserializers["TutController"] = function (request, data, root) {
  var i2394 = root || request.c( 'TutController' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'tutScene')
  request.r(i2395[2], i2395[3], 0, i2394, 'startTut')
  request.r(i2395[4], i2395[5], 0, i2394, 'playTut')
  request.r(i2395[6], i2395[7], 0, i2394, 'farTut')
  request.r(i2395[8], i2395[9], 0, i2394, 'failTut')
  request.r(i2395[10], i2395[11], 0, i2394, 'joystickTutHand')
  request.r(i2395[12], i2395[13], 0, i2394, 'joystickTutLabel')
  i2394.joystickHandSwipeDistance = i2395[14]
  i2394.joystickHandSwipeDuration = i2395[15]
  return i2394
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2396 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2397 = data
  i2396.targetIsSelf = !!i2397[0]
  request.r(i2397[1], i2397[2], 0, i2396, 'targetGO')
  i2396.tweenTargetIsTargetGO = !!i2397[3]
  i2396.delay = i2397[4]
  i2396.duration = i2397[5]
  i2396.easeType = i2397[6]
  i2396.easeCurve = new pc.AnimationCurve( { keys_flow: i2397[7] } )
  i2396.loopType = i2397[8]
  i2396.loops = i2397[9]
  i2396.id = i2397[10]
  i2396.isRelative = !!i2397[11]
  i2396.isFrom = !!i2397[12]
  i2396.isIndependentUpdate = !!i2397[13]
  i2396.autoKill = !!i2397[14]
  i2396.autoGenerate = !!i2397[15]
  i2396.isActive = !!i2397[16]
  i2396.isValid = !!i2397[17]
  request.r(i2397[18], i2397[19], 0, i2396, 'target')
  i2396.animationType = i2397[20]
  i2396.targetType = i2397[21]
  i2396.forcedTargetType = i2397[22]
  i2396.autoPlay = !!i2397[23]
  i2396.useTargetAsV3 = !!i2397[24]
  i2396.endValueFloat = i2397[25]
  i2396.endValueV3 = new pc.Vec3( i2397[26], i2397[27], i2397[28] )
  i2396.endValueV2 = new pc.Vec2( i2397[29], i2397[30] )
  i2396.endValueColor = new pc.Color(i2397[31], i2397[32], i2397[33], i2397[34])
  i2396.endValueString = i2397[35]
  i2396.endValueRect = UnityEngine.Rect.MinMaxRect(i2397[36], i2397[37], i2397[38], i2397[39])
  request.r(i2397[40], i2397[41], 0, i2396, 'endValueTransform')
  i2396.optionalBool0 = !!i2397[42]
  i2396.optionalBool1 = !!i2397[43]
  i2396.optionalFloat0 = i2397[44]
  i2396.optionalInt0 = i2397[45]
  i2396.optionalRotationMode = i2397[46]
  i2396.optionalScrambleMode = i2397[47]
  i2396.optionalShakeRandomnessMode = i2397[48]
  i2396.optionalString = i2397[49]
  i2396.updateType = i2397[50]
  i2396.isSpeedBased = !!i2397[51]
  i2396.hasOnStart = !!i2397[52]
  i2396.hasOnPlay = !!i2397[53]
  i2396.hasOnUpdate = !!i2397[54]
  i2396.hasOnStepComplete = !!i2397[55]
  i2396.hasOnComplete = !!i2397[56]
  i2396.hasOnTweenCreated = !!i2397[57]
  i2396.hasOnRewind = !!i2397[58]
  i2396.onStart = request.d('UnityEngine.Events.UnityEvent', i2397[59], i2396.onStart)
  i2396.onPlay = request.d('UnityEngine.Events.UnityEvent', i2397[60], i2396.onPlay)
  i2396.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2397[61], i2396.onUpdate)
  i2396.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2397[62], i2396.onStepComplete)
  i2396.onComplete = request.d('UnityEngine.Events.UnityEvent', i2397[63], i2396.onComplete)
  i2396.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2397[64], i2396.onTweenCreated)
  i2396.onRewind = request.d('UnityEngine.Events.UnityEvent', i2397[65], i2396.onRewind)
  return i2396
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2399 = data
  i2398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2399[0], i2398.m_PersistentCalls)
  return i2398
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2400 = root || request.c( 'HideOnPointer' )
  var i2401 = data
  i2400.OnPointerDownEvent = request.d('System.Action', i2401[0], i2400.OnPointerDownEvent)
  return i2400
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2402 = root || request.c( 'System.Action' )
  var i2403 = data
  return i2402
}

Deserializers["MorphSelectionFlow"] = function (request, data, root) {
  var i2404 = root || request.c( 'MorphSelectionFlow' )
  var i2405 = data
  var i2407 = i2405[0]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('MorphSelectionFlow+Morph', i2407[i + 0]) );
  }
  i2404.morphs = i2406
  request.r(i2405[1], i2405[2], 0, i2404, 'selectionPanel')
  request.r(i2405[3], i2405[4], 0, i2404, 'previewPanel')
  request.r(i2405[5], i2405[6], 0, i2404, 'backdrop')
  request.r(i2405[7], i2405[8], 0, i2404, 'previewImage')
  i2404.previewPortraitSize = new pc.Vec2( i2405[9], i2405[10] )
  request.r(i2405[11], i2405[12], 0, i2404, 'aura')
  request.r(i2405[13], i2405[14], 0, i2404, 'selectButton')
  request.r(i2405[15], i2405[16], 0, i2404, 'unlockedMessage')
  request.r(i2405[17], i2405[18], 0, i2404, 'revealCamera')
  request.r(i2405[19], i2405[20], 0, i2404, 'spawnPoint')
  var i2409 = i2405[21]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2404.hideOnStart = i2408
  var i2411 = i2405[22]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2404.disableOnStart = i2410
  i2404.orbitDuration = i2405[23]
  i2404.unlockedMessageDuration = i2405[24]
  i2404.auraSpeed = i2405[25]
  request.r(i2405[26], i2405[27], 0, i2404, 'auraSfx')
  request.r(i2405[28], i2405[29], 0, i2404, 'orbitSfx')
  return i2404
}

Deserializers["MorphSelectionFlow+Morph"] = function (request, data, root) {
  var i2414 = root || request.c( 'MorphSelectionFlow+Morph' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'prefab')
  request.r(i2415[2], i2415[3], 0, i2414, 'portrait')
  request.r(i2415[4], i2415[5], 0, i2414, 'card')
  request.r(i2415[6], i2415[7], 0, i2414, 'unlockedBadge')
  return i2414
}

Deserializers["MorphTitlePulse"] = function (request, data, root) {
  var i2420 = root || request.c( 'MorphTitlePulse' )
  var i2421 = data
  i2420.scaleMultiplier = i2421[0]
  i2420.duration = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2423 = data
  i2422.center = new pc.Vec3( i2423[0], i2423[1], i2423[2] )
  i2422.size = new pc.Vec3( i2423[3], i2423[4], i2423[5] )
  i2422.enabled = !!i2423[6]
  i2422.isTrigger = !!i2423[7]
  request.r(i2423[8], i2423[9], 0, i2422, 'material')
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2425 = data
  i2424.mass = i2425[0]
  i2424.drag = i2425[1]
  i2424.angularDrag = i2425[2]
  i2424.useGravity = !!i2425[3]
  i2424.isKinematic = !!i2425[4]
  i2424.constraints = i2425[5]
  i2424.maxAngularVelocity = i2425[6]
  i2424.collisionDetectionMode = i2425[7]
  i2424.interpolation = i2425[8]
  return i2424
}

Deserializers["Gift"] = function (request, data, root) {
  var i2426 = root || request.c( 'Gift' )
  var i2427 = data
  i2426.collectDone = !!i2427[0]
  var i2429 = i2427[1]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 1, i2428, '')
  }
  i2426.hints = i2428
  request.r(i2427[2], i2427[3], 0, i2426, 'collectSound')
  request.r(i2427[4], i2427[5], 0, i2426, 'collectEffect')
  request.r(i2427[6], i2427[7], 0, i2426, 'arrow')
  return i2426
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2432 = root || request.c( 'SoundHint' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'Sound')
  request.r(i2433[2], i2433[3], 0, i2432, 'Source')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'mesh')
  i2434.meshCount = i2435[2]
  i2434.activeVertexStreamsCount = i2435[3]
  i2434.alignment = i2435[4]
  i2434.renderMode = i2435[5]
  i2434.sortMode = i2435[6]
  i2434.lengthScale = i2435[7]
  i2434.velocityScale = i2435[8]
  i2434.cameraVelocityScale = i2435[9]
  i2434.normalDirection = i2435[10]
  i2434.sortingFudge = i2435[11]
  i2434.minParticleSize = i2435[12]
  i2434.maxParticleSize = i2435[13]
  i2434.pivot = new pc.Vec3( i2435[14], i2435[15], i2435[16] )
  request.r(i2435[17], i2435[18], 0, i2434, 'trailMaterial')
  i2434.applyActiveColorSpace = !!i2435[19]
  i2434.enabled = !!i2435[20]
  request.r(i2435[21], i2435[22], 0, i2434, 'sharedMaterial')
  var i2437 = i2435[23]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.sharedMaterials = i2436
  i2434.receiveShadows = !!i2435[24]
  i2434.shadowCastingMode = i2435[25]
  i2434.sortingLayerID = i2435[26]
  i2434.sortingOrder = i2435[27]
  i2434.lightmapIndex = i2435[28]
  i2434.lightmapSceneIndex = i2435[29]
  i2434.lightmapScaleOffset = new pc.Vec4( i2435[30], i2435[31], i2435[32], i2435[33] )
  i2434.lightProbeUsage = i2435[34]
  i2434.reflectionProbeUsage = i2435[35]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2439 = data
  i2438.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2439[0], i2438.main)
  i2438.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2439[1], i2438.colorBySpeed)
  i2438.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2439[2], i2438.colorOverLifetime)
  i2438.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2439[3], i2438.emission)
  i2438.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2439[4], i2438.rotationBySpeed)
  i2438.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2439[5], i2438.rotationOverLifetime)
  i2438.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2439[6], i2438.shape)
  i2438.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2439[7], i2438.sizeBySpeed)
  i2438.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2439[8], i2438.sizeOverLifetime)
  i2438.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2439[9], i2438.textureSheetAnimation)
  i2438.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2439[10], i2438.velocityOverLifetime)
  i2438.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2439[11], i2438.noise)
  i2438.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2439[12], i2438.inheritVelocity)
  i2438.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2439[13], i2438.forceOverLifetime)
  i2438.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2439[14], i2438.limitVelocityOverLifetime)
  i2438.useAutoRandomSeed = !!i2439[15]
  i2438.randomSeed = i2439[16]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2440 = root || new pc.ParticleSystemMain()
  var i2441 = data
  i2440.duration = i2441[0]
  i2440.loop = !!i2441[1]
  i2440.prewarm = !!i2441[2]
  i2440.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[3], i2440.startDelay)
  i2440.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[4], i2440.startLifetime)
  i2440.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[5], i2440.startSpeed)
  i2440.startSize3D = !!i2441[6]
  i2440.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[7], i2440.startSizeX)
  i2440.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[8], i2440.startSizeY)
  i2440.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[9], i2440.startSizeZ)
  i2440.startRotation3D = !!i2441[10]
  i2440.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[11], i2440.startRotationX)
  i2440.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[12], i2440.startRotationY)
  i2440.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[13], i2440.startRotationZ)
  i2440.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2441[14], i2440.startColor)
  i2440.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2441[15], i2440.gravityModifier)
  i2440.simulationSpace = i2441[16]
  request.r(i2441[17], i2441[18], 0, i2440, 'customSimulationSpace')
  i2440.simulationSpeed = i2441[19]
  i2440.useUnscaledTime = !!i2441[20]
  i2440.scalingMode = i2441[21]
  i2440.playOnAwake = !!i2441[22]
  i2440.maxParticles = i2441[23]
  i2440.emitterVelocityMode = i2441[24]
  i2440.stopAction = i2441[25]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2442 = root || new pc.MinMaxCurve()
  var i2443 = data
  i2442.mode = i2443[0]
  i2442.curveMin = new pc.AnimationCurve( { keys_flow: i2443[1] } )
  i2442.curveMax = new pc.AnimationCurve( { keys_flow: i2443[2] } )
  i2442.curveMultiplier = i2443[3]
  i2442.constantMin = i2443[4]
  i2442.constantMax = i2443[5]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2444 = root || new pc.MinMaxGradient()
  var i2445 = data
  i2444.mode = i2445[0]
  i2444.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2445[1], i2444.gradientMin)
  i2444.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2445[2], i2444.gradientMax)
  i2444.colorMin = new pc.Color(i2445[3], i2445[4], i2445[5], i2445[6])
  i2444.colorMax = new pc.Color(i2445[7], i2445[8], i2445[9], i2445[10])
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2447 = data
  i2446.mode = i2447[0]
  var i2449 = i2447[1]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2449[i + 0]) );
  }
  i2446.colorKeys = i2448
  var i2451 = i2447[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2451[i + 0]) );
  }
  i2446.alphaKeys = i2450
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2452 = root || new pc.ParticleSystemColorBySpeed()
  var i2453 = data
  i2452.enabled = !!i2453[0]
  i2452.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2453[1], i2452.color)
  i2452.range = new pc.Vec2( i2453[2], i2453[3] )
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2457 = data
  i2456.color = new pc.Color(i2457[0], i2457[1], i2457[2], i2457[3])
  i2456.time = i2457[4]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2461 = data
  i2460.alpha = i2461[0]
  i2460.time = i2461[1]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2462 = root || new pc.ParticleSystemColorOverLifetime()
  var i2463 = data
  i2462.enabled = !!i2463[0]
  i2462.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2463[1], i2462.color)
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2464 = root || new pc.ParticleSystemEmitter()
  var i2465 = data
  i2464.enabled = !!i2465[0]
  i2464.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2465[1], i2464.rateOverTime)
  i2464.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2465[2], i2464.rateOverDistance)
  var i2467 = i2465[3]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2467[i + 0]) );
  }
  i2464.bursts = i2466
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2470 = root || new pc.ParticleSystemBurst()
  var i2471 = data
  i2470.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[0], i2470.count)
  i2470.cycleCount = i2471[1]
  i2470.minCount = i2471[2]
  i2470.maxCount = i2471[3]
  i2470.repeatInterval = i2471[4]
  i2470.time = i2471[5]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2472 = root || new pc.ParticleSystemRotationBySpeed()
  var i2473 = data
  i2472.enabled = !!i2473[0]
  i2472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[1], i2472.x)
  i2472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[2], i2472.y)
  i2472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[3], i2472.z)
  i2472.separateAxes = !!i2473[4]
  i2472.range = new pc.Vec2( i2473[5], i2473[6] )
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[1], i2474.x)
  i2474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[2], i2474.y)
  i2474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[3], i2474.z)
  i2474.separateAxes = !!i2475[4]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2476 = root || new pc.ParticleSystemShape()
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.shapeType = i2477[1]
  i2476.randomDirectionAmount = i2477[2]
  i2476.sphericalDirectionAmount = i2477[3]
  i2476.randomPositionAmount = i2477[4]
  i2476.alignToDirection = !!i2477[5]
  i2476.radius = i2477[6]
  i2476.radiusMode = i2477[7]
  i2476.radiusSpread = i2477[8]
  i2476.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[9], i2476.radiusSpeed)
  i2476.radiusThickness = i2477[10]
  i2476.angle = i2477[11]
  i2476.length = i2477[12]
  i2476.boxThickness = new pc.Vec3( i2477[13], i2477[14], i2477[15] )
  i2476.meshShapeType = i2477[16]
  request.r(i2477[17], i2477[18], 0, i2476, 'mesh')
  request.r(i2477[19], i2477[20], 0, i2476, 'meshRenderer')
  request.r(i2477[21], i2477[22], 0, i2476, 'skinnedMeshRenderer')
  i2476.useMeshMaterialIndex = !!i2477[23]
  i2476.meshMaterialIndex = i2477[24]
  i2476.useMeshColors = !!i2477[25]
  i2476.normalOffset = i2477[26]
  i2476.arc = i2477[27]
  i2476.arcMode = i2477[28]
  i2476.arcSpread = i2477[29]
  i2476.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[30], i2476.arcSpeed)
  i2476.donutRadius = i2477[31]
  i2476.position = new pc.Vec3( i2477[32], i2477[33], i2477[34] )
  i2476.rotation = new pc.Vec3( i2477[35], i2477[36], i2477[37] )
  i2476.scale = new pc.Vec3( i2477[38], i2477[39], i2477[40] )
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2478 = root || new pc.ParticleSystemSizeBySpeed()
  var i2479 = data
  i2478.enabled = !!i2479[0]
  i2478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[1], i2478.x)
  i2478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[2], i2478.y)
  i2478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[3], i2478.z)
  i2478.separateAxes = !!i2479[4]
  i2478.range = new pc.Vec2( i2479[5], i2479[6] )
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2480 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2481 = data
  i2480.enabled = !!i2481[0]
  i2480.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[1], i2480.x)
  i2480.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[2], i2480.y)
  i2480.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[3], i2480.z)
  i2480.separateAxes = !!i2481[4]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2482 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2483 = data
  i2482.enabled = !!i2483[0]
  i2482.mode = i2483[1]
  i2482.animation = i2483[2]
  i2482.numTilesX = i2483[3]
  i2482.numTilesY = i2483[4]
  i2482.useRandomRow = !!i2483[5]
  i2482.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2483[6], i2482.frameOverTime)
  i2482.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2483[7], i2482.startFrame)
  i2482.cycleCount = i2483[8]
  i2482.rowIndex = i2483[9]
  i2482.flipU = i2483[10]
  i2482.flipV = i2483[11]
  i2482.spriteCount = i2483[12]
  var i2485 = i2483[13]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2482.sprites = i2484
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2488 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2489 = data
  i2488.enabled = !!i2489[0]
  i2488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[1], i2488.x)
  i2488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[2], i2488.y)
  i2488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[3], i2488.z)
  i2488.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[4], i2488.radial)
  i2488.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[5], i2488.speedModifier)
  i2488.space = i2489[6]
  i2488.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[7], i2488.orbitalX)
  i2488.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[8], i2488.orbitalY)
  i2488.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[9], i2488.orbitalZ)
  i2488.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[10], i2488.orbitalOffsetX)
  i2488.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[11], i2488.orbitalOffsetY)
  i2488.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[12], i2488.orbitalOffsetZ)
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2490 = root || new pc.ParticleSystemNoise()
  var i2491 = data
  i2490.enabled = !!i2491[0]
  i2490.separateAxes = !!i2491[1]
  i2490.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[2], i2490.strengthX)
  i2490.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[3], i2490.strengthY)
  i2490.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[4], i2490.strengthZ)
  i2490.frequency = i2491[5]
  i2490.damping = !!i2491[6]
  i2490.octaveCount = i2491[7]
  i2490.octaveMultiplier = i2491[8]
  i2490.octaveScale = i2491[9]
  i2490.quality = i2491[10]
  i2490.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[11], i2490.scrollSpeed)
  i2490.scrollSpeedMultiplier = i2491[12]
  i2490.remapEnabled = !!i2491[13]
  i2490.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[14], i2490.remapX)
  i2490.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[15], i2490.remapY)
  i2490.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[16], i2490.remapZ)
  i2490.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[17], i2490.positionAmount)
  i2490.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[18], i2490.rotationAmount)
  i2490.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[19], i2490.sizeAmount)
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2492 = root || new pc.ParticleSystemInheritVelocity()
  var i2493 = data
  i2492.enabled = !!i2493[0]
  i2492.mode = i2493[1]
  i2492.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[2], i2492.curve)
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2494 = root || new pc.ParticleSystemForceOverLifetime()
  var i2495 = data
  i2494.enabled = !!i2495[0]
  i2494.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[1], i2494.x)
  i2494.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[2], i2494.y)
  i2494.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2495[3], i2494.z)
  i2494.space = i2495[4]
  i2494.randomized = !!i2495[5]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2496 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2497 = data
  i2496.enabled = !!i2497[0]
  i2496.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[1], i2496.limit)
  i2496.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[2], i2496.limitX)
  i2496.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[3], i2496.limitY)
  i2496.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[4], i2496.limitZ)
  i2496.dampen = i2497[5]
  i2496.separateAxes = !!i2497[6]
  i2496.space = i2497[7]
  i2496.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[8], i2496.drag)
  i2496.multiplyDragByParticleSize = !!i2497[9]
  i2496.multiplyDragByParticleVelocity = !!i2497[10]
  return i2496
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2498 = root || request.c( 'CharacterMotor' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'characterInput')
  request.r(i2499[2], i2499[3], 0, i2498, 'cameraYawTransform')
  request.r(i2499[4], i2499[5], 0, i2498, '_arrow')
  i2498.moveSpeed = i2499[6]
  i2498.jumpHeight = i2499[7]
  request.r(i2499[8], i2499[9], 0, i2498, 'groundChecker')
  i2498.gravity = i2499[10]
  i2498.enableStepClimb = !!i2499[11]
  i2498.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2499[12] )
  i2498.maxStepHeight = i2499[13]
  i2498.stepCheckDistance = i2499[14]
  i2498.stepUpSpeed = i2499[15]
  i2498.stepUpAcceleration = i2499[16]
  i2498.minimumStepFacing = i2499[17]
  request.r(i2499[18], i2499[19], 0, i2498, 'controller')
  i2498.autoRun = !!i2499[20]
  return i2498
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2500 = root || request.c( 'CharacterRotation' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'motor')
  i2500.rotationSpeed = i2501[2]
  return i2500
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2502 = root || request.c( 'CharacterAnimation' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'animator')
  request.r(i2503[2], i2503[3], 0, i2502, 'motor')
  i2502.speedChangeRate = i2503[4]
  i2502.groundedGraceTime = i2503[5]
  return i2502
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2504 = root || request.c( 'CharacterCollect' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'motor')
  request.r(i2505[2], i2505[3], 0, i2504, 'avatar')
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2507 = data
  i2506.center = new pc.Vec3( i2507[0], i2507[1], i2507[2] )
  i2506.radius = i2507[3]
  i2506.height = i2507[4]
  i2506.direction = i2507[5]
  i2506.enabled = !!i2507[6]
  i2506.isTrigger = !!i2507[7]
  request.r(i2507[8], i2507[9], 0, i2506, 'material')
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'sharedMesh')
  var i2511 = i2509[2]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 2) {
  request.r(i2511[i + 0], i2511[i + 1], 2, i2510, '')
  }
  i2508.bones = i2510
  i2508.updateWhenOffscreen = !!i2509[3]
  i2508.localBounds = i2509[4]
  request.r(i2509[5], i2509[6], 0, i2508, 'rootBone')
  var i2513 = i2509[7]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2513[i + 0]) );
  }
  i2508.blendShapesWeights = i2512
  i2508.enabled = !!i2509[8]
  request.r(i2509[9], i2509[10], 0, i2508, 'sharedMaterial')
  var i2515 = i2509[11]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 2) {
  request.r(i2515[i + 0], i2515[i + 1], 2, i2514, '')
  }
  i2508.sharedMaterials = i2514
  i2508.receiveShadows = !!i2509[12]
  i2508.shadowCastingMode = i2509[13]
  i2508.sortingLayerID = i2509[14]
  i2508.sortingOrder = i2509[15]
  i2508.lightmapIndex = i2509[16]
  i2508.lightmapSceneIndex = i2509[17]
  i2508.lightmapScaleOffset = new pc.Vec4( i2509[18], i2509[19], i2509[20], i2509[21] )
  i2508.lightProbeUsage = i2509[22]
  i2508.reflectionProbeUsage = i2509[23]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2519 = data
  i2518.weight = i2519[0]
  return i2518
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2520 = root || request.c( 'GroundChecker' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'groundPoint')
  i2520.checkRadius = i2521[2]
  i2520.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2521[3] )
  return i2520
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2522 = root || request.c( 'CameraFollow' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'target')
  request.r(i2523[2], i2523[3], 0, i2522, 'pitchPivot')
  i2522.smoothTime = i2523[4]
  i2522.minimumPitch = i2523[5]
  i2522.maximumPitch = i2523[6]
  return i2522
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2524 = root || request.c( 'CameraLook' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'input')
  request.r(i2525[2], i2525[3], 0, i2524, 'yawPivot')
  request.r(i2525[4], i2525[5], 0, i2524, 'pitchPivot')
  i2524.minPitch = i2525[6]
  i2524.maxPitch = i2525[7]
  i2524.yaw = i2525[8]
  i2524.pitch = i2525[9]
  i2524.defaltYaw = i2525[10]
  i2524.defaltPitch = i2525[11]
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

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2528 = root || request.c( 'CharacterInput' )
  var i2529 = data
  request.r(i2529[0], i2529[1], 0, i2528, 'joystick')
  request.r(i2529[2], i2529[3], 0, i2528, 'jumpButton')
  return i2528
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2530 = root || request.c( 'InputManager' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'worldCamera')
  i2530.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2531[2] )
  i2530.touchSensitivity = i2531[3]
  i2530.mouseSensitivity = i2531[4]
  i2530.dragThreshold = i2531[5]
  return i2530
}

Deserializers["GameController"] = function (request, data, root) {
  var i2532 = root || request.c( 'GameController' )
  var i2533 = data
  i2532.luna = i2533[0]
  i2532.applovin = !!i2533[1]
  i2532.countEvent = i2533[2]
  request.r(i2533[3], i2533[4], 0, i2532, 'morphSelection')
  var i2535 = i2533[5]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2532.skiSections = i2534
  request.r(i2533[6], i2533[7], 0, i2532, 'playerMotor')
  request.r(i2533[8], i2533[9], 0, i2532, 'playerSpawn')
  request.r(i2533[10], i2533[11], 0, i2532, 'morphPosition')
  var i2537 = i2533[12]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2532.morphPrefabs = i2536
  request.r(i2533[13], i2533[14], 0, i2532, 'failUI')
  request.r(i2533[15], i2533[16], 0, i2532, 'endCard')
  request.r(i2533[17], i2533[18], 0, i2532, 'cameraYaw')
  i2532.fallConfirmationTime = i2533[19]
  return i2532
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2540 = root || request.c( 'AudioController' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'musicSource')
  request.r(i2541[2], i2541[3], 0, i2540, 'poolParent')
  i2540.startSize = i2541[4]
  return i2540
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2542 = root || request.c( 'LunaController' )
  var i2543 = data
  i2542.LimitTimePlay = !!i2543[0]
  i2542.TimePlay = i2543[1]
  var i2545 = i2543[2]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2545.length; i += 2) {
  request.r(i2545[i + 0], i2545[i + 1], 1, i2544, '')
  }
  i2542.images = i2544
  request.r(i2543[3], i2543[4], 0, i2542, 'CTA')
  request.r(i2543[5], i2543[6], 0, i2542, 'endCardRoot')
  request.r(i2543[7], i2543[8], 0, i2542, 'retryButtonLine')
  request.r(i2543[9], i2543[10], 0, i2542, 'ctaButtonLine')
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2549 = data
  i2548.center = new pc.Vec3( i2549[0], i2549[1], i2549[2] )
  i2548.radius = i2549[3]
  i2548.enabled = !!i2549[4]
  i2548.isTrigger = !!i2549[5]
  request.r(i2549[6], i2549[7], 0, i2548, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2569[i + 0]));
  }
  i2566.ShaderCompilationErrors = i2568
  i2566.name = i2567[1]
  i2566.guid = i2567[2]
  var i2571 = i2567[3]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2566.shaderDefinedKeywords = i2570
  var i2573 = i2567[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2573[i + 0]) );
  }
  i2566.passes = i2572
  var i2575 = i2567[5]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2575[i + 0]) );
  }
  i2566.usePasses = i2574
  var i2577 = i2567[6]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2577[i + 0]) );
  }
  i2566.defaultParameterValues = i2576
  request.r(i2567[7], i2567[8], 0, i2566, 'unityFallbackShader')
  i2566.readDepth = !!i2567[9]
  i2566.hasDepthOnlyPass = !!i2567[10]
  i2566.isCreatedByShaderGraph = !!i2567[11]
  i2566.disableBatching = !!i2567[12]
  i2566.compiled = !!i2567[13]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2581 = data
  i2580.shaderName = i2581[0]
  i2580.errorMessage = i2581[1]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2586 = root || new pc.UnityShaderPass()
  var i2587 = data
  i2586.id = i2587[0]
  i2586.subShaderIndex = i2587[1]
  i2586.name = i2587[2]
  i2586.passType = i2587[3]
  i2586.grabPassTextureName = i2587[4]
  i2586.usePass = !!i2587[5]
  i2586.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[6], i2586.zTest)
  i2586.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[7], i2586.zWrite)
  i2586.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[8], i2586.culling)
  i2586.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2587[9], i2586.blending)
  i2586.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2587[10], i2586.alphaBlending)
  i2586.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[11], i2586.colorWriteMask)
  i2586.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[12], i2586.offsetUnits)
  i2586.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[13], i2586.offsetFactor)
  i2586.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[14], i2586.stencilRef)
  i2586.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[15], i2586.stencilReadMask)
  i2586.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2587[16], i2586.stencilWriteMask)
  i2586.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2587[17], i2586.stencilOp)
  i2586.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2587[18], i2586.stencilOpFront)
  i2586.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2587[19], i2586.stencilOpBack)
  var i2589 = i2587[20]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2589[i + 0]) );
  }
  i2586.tags = i2588
  var i2591 = i2587[21]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( i2591[i + 0] );
  }
  i2586.passDefinedKeywords = i2590
  var i2593 = i2587[22]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2593[i + 0]) );
  }
  i2586.passDefinedKeywordGroups = i2592
  var i2595 = i2587[23]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2595[i + 0]) );
  }
  i2586.variants = i2594
  var i2597 = i2587[24]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2597[i + 0]) );
  }
  i2586.excludedVariants = i2596
  i2586.hasDepthReader = !!i2587[25]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2599 = data
  i2598.val = i2599[0]
  i2598.name = i2599[1]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2601 = data
  i2600.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[0], i2600.src)
  i2600.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[1], i2600.dst)
  i2600.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[2], i2600.op)
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2603 = data
  i2602.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[0], i2602.pass)
  i2602.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[1], i2602.fail)
  i2602.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[2], i2602.zFail)
  i2602.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2603[3], i2602.comp)
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.value = i2607[1]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2611 = data
  var i2613 = i2611[0]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( i2613[i + 0] );
  }
  i2610.keywords = i2612
  i2610.hasDiscard = !!i2611[1]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2617 = data
  i2616.passId = i2617[0]
  i2616.subShaderIndex = i2617[1]
  var i2619 = i2617[2]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( i2619[i + 0] );
  }
  i2616.keywords = i2618
  i2616.vertexProgram = i2617[3]
  i2616.fragmentProgram = i2617[4]
  i2616.exportedForWebGl2 = !!i2617[5]
  i2616.readDepth = !!i2617[6]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2623 = data
  request.r(i2623[0], i2623[1], 0, i2622, 'shader')
  i2622.pass = i2623[2]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2627 = data
  i2626.name = i2627[0]
  i2626.type = i2627[1]
  i2626.value = new pc.Vec4( i2627[2], i2627[3], i2627[4], i2627[5] )
  i2626.textureValue = i2627[6]
  i2626.shaderPropertyFlag = i2627[7]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2629 = data
  i2628.name = i2629[0]
  request.r(i2629[1], i2629[2], 0, i2628, 'texture')
  i2628.aabb = i2629[3]
  i2628.vertices = i2629[4]
  i2628.triangles = i2629[5]
  i2628.textureRect = UnityEngine.Rect.MinMaxRect(i2629[6], i2629[7], i2629[8], i2629[9])
  i2628.packedRect = UnityEngine.Rect.MinMaxRect(i2629[10], i2629[11], i2629[12], i2629[13])
  i2628.border = new pc.Vec4( i2629[14], i2629[15], i2629[16], i2629[17] )
  i2628.transparency = i2629[18]
  i2628.bounds = i2629[19]
  i2628.pixelsPerUnit = i2629[20]
  i2628.textureWidth = i2629[21]
  i2628.textureHeight = i2629[22]
  i2628.nativeSize = new pc.Vec2( i2629[23], i2629[24] )
  i2628.pivot = new pc.Vec2( i2629[25], i2629[26] )
  i2628.textureRectOffset = new pc.Vec2( i2629[27], i2629[28] )
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2631 = data
  i2630.name = i2631[0]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.wrapMode = i2633[1]
  i2632.isLooping = !!i2633[2]
  i2632.length = i2633[3]
  var i2635 = i2633[4]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2635[i + 0]) );
  }
  i2632.curves = i2634
  var i2637 = i2633[5]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2637[i + 0]) );
  }
  i2632.events = i2636
  i2632.halfPrecision = !!i2633[6]
  i2632._frameRate = i2633[7]
  i2632.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2633[8], i2632.localBounds)
  i2632.hasMuscleCurves = !!i2633[9]
  var i2639 = i2633[10]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( i2639[i + 0] );
  }
  i2632.clipMuscleConstant = i2638
  i2632.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2633[11], i2632.clipBindingConstant)
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2643 = data
  i2642.path = i2643[0]
  i2642.hash = i2643[1]
  i2642.componentType = i2643[2]
  i2642.property = i2643[3]
  i2642.keys = i2643[4]
  var i2645 = i2643[5]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2645[i + 0]) );
  }
  i2642.objectReferenceKeys = i2644
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2649 = data
  i2648.time = i2649[0]
  request.r(i2649[1], i2649[2], 0, i2648, 'value')
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2653 = data
  i2652.functionName = i2653[0]
  i2652.floatParameter = i2653[1]
  i2652.intParameter = i2653[2]
  i2652.stringParameter = i2653[3]
  request.r(i2653[4], i2653[5], 0, i2652, 'objectReferenceParameter')
  i2652.time = i2653[6]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2655 = data
  i2654.center = new pc.Vec3( i2655[0], i2655[1], i2655[2] )
  i2654.extends = new pc.Vec3( i2655[3], i2655[4], i2655[5] )
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2659 = data
  var i2661 = i2659[0]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( i2661[i + 0] );
  }
  i2658.genericBindings = i2660
  var i2663 = i2659[1]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( i2663[i + 0] );
  }
  i2658.pptrCurveMapping = i2662
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2665 = data
  i2664.name = i2665[0]
  i2664.blendParameter = i2665[1]
  i2664.blendParameterY = i2665[2]
  i2664.blendType = i2665[3]
  var i2667 = i2665[4]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2667[i + 0]) );
  }
  i2664.children = i2666
  i2664.useAutomaticThresholds = !!i2665[5]
  i2664.minThreshold = i2665[6]
  i2664.maxThreshold = i2665[7]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'motion')
  i2670.threshold = i2671[2]
  i2670.position = new pc.Vec2( i2671[3], i2671[4] )
  i2670.timeScale = i2671[5]
  i2670.cycleOffset = i2671[6]
  i2670.directBlendParameter = i2671[7]
  i2670.mirror = !!i2671[8]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2673 = data
  i2672.name = i2673[0]
  var i2675 = i2673[1]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2675[i + 0]) );
  }
  i2672.layers = i2674
  var i2677 = i2673[2]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2677[i + 0]) );
  }
  i2672.parameters = i2676
  i2672.animationClips = i2673[3]
  i2672.avatarUnsupported = i2673[4]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2681 = data
  i2680.name = i2681[0]
  i2680.defaultWeight = i2681[1]
  i2680.blendingMode = i2681[2]
  i2680.avatarMask = i2681[3]
  i2680.syncedLayerIndex = i2681[4]
  i2680.syncedLayerAffectsTiming = !!i2681[5]
  i2680.syncedLayers = i2681[6]
  i2680.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2681[7], i2680.stateMachine)
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2683 = data
  i2682.id = i2683[0]
  i2682.name = i2683[1]
  i2682.path = i2683[2]
  var i2685 = i2683[3]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2685[i + 0]) );
  }
  i2682.states = i2684
  var i2687 = i2683[4]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2687[i + 0]) );
  }
  i2682.machines = i2686
  var i2689 = i2683[5]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2689[i + 0]) );
  }
  i2682.entryStateTransitions = i2688
  var i2691 = i2683[6]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2691[i + 0]) );
  }
  i2682.exitStateTransitions = i2690
  var i2693 = i2683[7]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2693[i + 0]) );
  }
  i2682.anyStateTransitions = i2692
  i2682.defaultStateId = i2683[8]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2697 = data
  i2696.id = i2697[0]
  i2696.name = i2697[1]
  i2696.cycleOffset = i2697[2]
  i2696.cycleOffsetParameter = i2697[3]
  i2696.cycleOffsetParameterActive = !!i2697[4]
  i2696.mirror = !!i2697[5]
  i2696.mirrorParameter = i2697[6]
  i2696.mirrorParameterActive = !!i2697[7]
  i2696.motionId = i2697[8]
  i2696.nameHash = i2697[9]
  i2696.fullPathHash = i2697[10]
  i2696.speed = i2697[11]
  i2696.speedParameter = i2697[12]
  i2696.speedParameterActive = !!i2697[13]
  i2696.tag = i2697[14]
  i2696.tagHash = i2697[15]
  i2696.writeDefaultValues = !!i2697[16]
  var i2699 = i2697[17]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 2) {
  request.r(i2699[i + 0], i2699[i + 1], 2, i2698, '')
  }
  i2696.behaviours = i2698
  var i2701 = i2697[18]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2701[i + 0]) );
  }
  i2696.transitions = i2700
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2707 = data
  i2706.fullPath = i2707[0]
  i2706.canTransitionToSelf = !!i2707[1]
  i2706.duration = i2707[2]
  i2706.exitTime = i2707[3]
  i2706.hasExitTime = !!i2707[4]
  i2706.hasFixedDuration = !!i2707[5]
  i2706.interruptionSource = i2707[6]
  i2706.offset = i2707[7]
  i2706.orderedInterruption = !!i2707[8]
  i2706.destinationStateId = i2707[9]
  i2706.isExit = !!i2707[10]
  i2706.mute = !!i2707[11]
  i2706.solo = !!i2707[12]
  var i2709 = i2707[13]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2709[i + 0]) );
  }
  i2706.conditions = i2708
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2713 = data
  i2712.mode = i2713[0]
  i2712.parameter = i2713[1]
  i2712.threshold = i2713[2]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2719 = data
  i2718.destinationStateId = i2719[0]
  i2718.isExit = !!i2719[1]
  i2718.mute = !!i2719[2]
  i2718.solo = !!i2719[3]
  var i2721 = i2719[4]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2721[i + 0]) );
  }
  i2718.conditions = i2720
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2725 = data
  i2724.defaultBool = !!i2725[0]
  i2724.defaultFloat = i2725[1]
  i2724.defaultInt = i2725[2]
  i2724.name = i2725[3]
  i2724.nameHash = i2725[4]
  i2724.type = i2725[5]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2727 = data
  i2726.name = i2727[0]
  request.r(i2727[1], i2727[2], 0, i2726, '_runtimeAnimatorController')
  var i2729 = i2727[3]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 2, i2728, '')
  }
  i2726._originalAnimationClips = i2728
  var i2731 = i2727[4]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 2, i2730, '')
  }
  i2726._overrideAnimationClips = i2730
  var i2733 = i2727[5]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 2) {
  request.r(i2733[i + 0], i2733[i + 1], 2, i2732, '')
  }
  i2726._animationClips = i2732
  var i2735 = i2727[6]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('UnityEngine.AnimationClipPair', i2735[i + 0]) );
  }
  i2726._animationClipPairs = i2734
  return i2726
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'originalClip')
  request.r(i2741[2], i2741[3], 0, i2740, 'overrideClip')
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.bytes64 = i2743[1]
  i2742.data = i2743[2]
  return i2742
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2745 = data
  i2744.normalStyle = i2745[0]
  i2744.normalSpacingOffset = i2745[1]
  i2744.boldStyle = i2745[2]
  i2744.boldSpacing = i2745[3]
  i2744.italicStyle = i2745[4]
  i2744.tabSize = i2745[5]
  request.r(i2745[6], i2745[7], 0, i2744, 'atlas')
  i2744.m_SourceFontFileGUID = i2745[8]
  i2744.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2745[9], i2744.m_CreationSettings)
  request.r(i2745[10], i2745[11], 0, i2744, 'm_SourceFontFile')
  i2744.m_SourceFontFilePath = i2745[12]
  i2744.m_AtlasPopulationMode = i2745[13]
  i2744.InternalDynamicOS = !!i2745[14]
  var i2747 = i2745[15]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.add(request.d('UnityEngine.TextCore.Glyph', i2747[i + 0]));
  }
  i2744.m_GlyphTable = i2746
  var i2749 = i2745[16]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('TMPro.TMP_Character', i2749[i + 0]));
  }
  i2744.m_CharacterTable = i2748
  var i2751 = i2745[17]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 2, i2750, '')
  }
  i2744.m_AtlasTextures = i2750
  i2744.m_AtlasTextureIndex = i2745[18]
  i2744.m_IsMultiAtlasTexturesEnabled = !!i2745[19]
  i2744.m_GetFontFeatures = !!i2745[20]
  i2744.m_ClearDynamicDataOnBuild = !!i2745[21]
  i2744.m_AtlasWidth = i2745[22]
  i2744.m_AtlasHeight = i2745[23]
  i2744.m_AtlasPadding = i2745[24]
  i2744.m_AtlasRenderMode = i2745[25]
  var i2753 = i2745[26]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('UnityEngine.TextCore.GlyphRect', i2753[i + 0]));
  }
  i2744.m_UsedGlyphRects = i2752
  var i2755 = i2745[27]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.add(request.d('UnityEngine.TextCore.GlyphRect', i2755[i + 0]));
  }
  i2744.m_FreeGlyphRects = i2754
  i2744.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2745[28], i2744.m_FontFeatureTable)
  i2744.m_ShouldReimportFontFeatures = !!i2745[29]
  var i2757 = i2745[30]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2757.length; i += 2) {
  request.r(i2757[i + 0], i2757[i + 1], 1, i2756, '')
  }
  i2744.m_FallbackFontAssetTable = i2756
  var i2759 = i2745[31]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('TMPro.TMP_FontWeightPair', i2759[i + 0]) );
  }
  i2744.m_FontWeightTable = i2758
  var i2761 = i2745[32]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('TMPro.TMP_FontWeightPair', i2761[i + 0]) );
  }
  i2744.fontWeights = i2760
  i2744.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2745[33], i2744.m_fontInfo)
  var i2763 = i2745[34]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.add(request.d('TMPro.TMP_Glyph', i2763[i + 0]));
  }
  i2744.m_glyphInfoList = i2762
  i2744.m_KerningTable = request.d('TMPro.KerningTable', i2745[35], i2744.m_KerningTable)
  var i2765 = i2745[36]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 1, i2764, '')
  }
  i2744.fallbackFontAssets = i2764
  i2744.m_Version = i2745[37]
  i2744.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2745[38], i2744.m_FaceInfo)
  request.r(i2745[39], i2745[40], 0, i2744, 'm_Material')
  return i2744
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2767 = data
  i2766.sourceFontFileName = i2767[0]
  i2766.sourceFontFileGUID = i2767[1]
  i2766.faceIndex = i2767[2]
  i2766.pointSizeSamplingMode = i2767[3]
  i2766.pointSize = i2767[4]
  i2766.padding = i2767[5]
  i2766.paddingMode = i2767[6]
  i2766.packingMode = i2767[7]
  i2766.atlasWidth = i2767[8]
  i2766.atlasHeight = i2767[9]
  i2766.characterSetSelectionMode = i2767[10]
  i2766.characterSequence = i2767[11]
  i2766.referencedFontAssetGUID = i2767[12]
  i2766.referencedTextAssetGUID = i2767[13]
  i2766.fontStyle = i2767[14]
  i2766.fontStyleModifier = i2767[15]
  i2766.renderMode = i2767[16]
  i2766.includeFontFeatures = !!i2767[17]
  return i2766
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2770 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2771 = data
  i2770.m_Index = i2771[0]
  i2770.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2771[1], i2770.m_Metrics)
  i2770.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2771[2], i2770.m_GlyphRect)
  i2770.m_Scale = i2771[3]
  i2770.m_AtlasIndex = i2771[4]
  i2770.m_ClassDefinitionType = i2771[5]
  return i2770
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2773 = data
  i2772.m_Width = i2773[0]
  i2772.m_Height = i2773[1]
  i2772.m_HorizontalBearingX = i2773[2]
  i2772.m_HorizontalBearingY = i2773[3]
  i2772.m_HorizontalAdvance = i2773[4]
  return i2772
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2775 = data
  i2774.m_X = i2775[0]
  i2774.m_Y = i2775[1]
  i2774.m_Width = i2775[2]
  i2774.m_Height = i2775[3]
  return i2774
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.TMP_Character' )
  var i2779 = data
  i2778.m_ElementType = i2779[0]
  i2778.m_Unicode = i2779[1]
  i2778.m_GlyphIndex = i2779[2]
  i2778.m_Scale = i2779[3]
  return i2778
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2785 = data
  var i2787 = i2785[0]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('TMPro.MultipleSubstitutionRecord', i2787[i + 0]));
  }
  i2784.m_MultipleSubstitutionRecords = i2786
  var i2789 = i2785[1]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.LigatureSubstitutionRecord', i2789[i + 0]));
  }
  i2784.m_LigatureSubstitutionRecords = i2788
  var i2791 = i2785[2]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2791[i + 0]));
  }
  i2784.m_GlyphPairAdjustmentRecords = i2790
  var i2793 = i2785[3]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2793[i + 0]));
  }
  i2784.m_MarkToBaseAdjustmentRecords = i2792
  var i2795 = i2785[4]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2795[i + 0]));
  }
  i2784.m_MarkToMarkAdjustmentRecords = i2794
  return i2784
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2799 = data
  i2798.m_TargetGlyphID = i2799[0]
  i2798.m_SubstituteGlyphIDs = i2799[1]
  return i2798
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2803 = data
  i2802.m_ComponentGlyphIDs = i2803[0]
  i2802.m_LigatureGlyphID = i2803[1]
  return i2802
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2807 = data
  i2806.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2807[0], i2806.m_FirstAdjustmentRecord)
  i2806.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2807[1], i2806.m_SecondAdjustmentRecord)
  i2806.m_FeatureLookupFlags = i2807[2]
  return i2806
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2810 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2811 = data
  i2810.m_BaseGlyphID = i2811[0]
  i2810.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2811[1], i2810.m_BaseGlyphAnchorPoint)
  i2810.m_MarkGlyphID = i2811[2]
  i2810.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2811[3], i2810.m_MarkPositionAdjustment)
  return i2810
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2815 = data
  i2814.m_BaseMarkGlyphID = i2815[0]
  i2814.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2815[1], i2814.m_BaseMarkGlyphAnchorPoint)
  i2814.m_CombiningMarkGlyphID = i2815[2]
  i2814.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2815[3], i2814.m_CombiningMarkPositionAdjustment)
  return i2814
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2821 = data
  request.r(i2821[0], i2821[1], 0, i2820, 'regularTypeface')
  request.r(i2821[2], i2821[3], 0, i2820, 'italicTypeface')
  return i2820
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2823 = data
  i2822.Name = i2823[0]
  i2822.PointSize = i2823[1]
  i2822.Scale = i2823[2]
  i2822.CharacterCount = i2823[3]
  i2822.LineHeight = i2823[4]
  i2822.Baseline = i2823[5]
  i2822.Ascender = i2823[6]
  i2822.CapHeight = i2823[7]
  i2822.Descender = i2823[8]
  i2822.CenterLine = i2823[9]
  i2822.SuperscriptOffset = i2823[10]
  i2822.SubscriptOffset = i2823[11]
  i2822.SubSize = i2823[12]
  i2822.Underline = i2823[13]
  i2822.UnderlineThickness = i2823[14]
  i2822.strikethrough = i2823[15]
  i2822.strikethroughThickness = i2823[16]
  i2822.TabWidth = i2823[17]
  i2822.Padding = i2823[18]
  i2822.AtlasWidth = i2823[19]
  i2822.AtlasHeight = i2823[20]
  return i2822
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2827 = data
  i2826.id = i2827[0]
  i2826.x = i2827[1]
  i2826.y = i2827[2]
  i2826.width = i2827[3]
  i2826.height = i2827[4]
  i2826.xOffset = i2827[5]
  i2826.yOffset = i2827[6]
  i2826.xAdvance = i2827[7]
  i2826.scale = i2827[8]
  return i2826
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.KerningTable' )
  var i2829 = data
  var i2831 = i2829[0]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('TMPro.KerningPair', i2831[i + 0]));
  }
  i2828.kerningPairs = i2830
  return i2828
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2834 = root || request.c( 'TMPro.KerningPair' )
  var i2835 = data
  i2834.xOffset = i2835[0]
  i2834.m_FirstGlyph = i2835[1]
  i2834.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2835[2], i2834.m_FirstGlyphAdjustments)
  i2834.m_SecondGlyph = i2835[3]
  i2834.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2835[4], i2834.m_SecondGlyphAdjustments)
  i2834.m_IgnoreSpacingAdjustments = !!i2835[5]
  return i2834
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2837 = data
  i2836.m_FaceIndex = i2837[0]
  i2836.m_FamilyName = i2837[1]
  i2836.m_StyleName = i2837[2]
  i2836.m_PointSize = i2837[3]
  i2836.m_Scale = i2837[4]
  i2836.m_UnitsPerEM = i2837[5]
  i2836.m_LineHeight = i2837[6]
  i2836.m_AscentLine = i2837[7]
  i2836.m_CapLine = i2837[8]
  i2836.m_MeanLine = i2837[9]
  i2836.m_Baseline = i2837[10]
  i2836.m_DescentLine = i2837[11]
  i2836.m_SuperscriptOffset = i2837[12]
  i2836.m_SuperscriptSize = i2837[13]
  i2836.m_SubscriptOffset = i2837[14]
  i2836.m_SubscriptSize = i2837[15]
  i2836.m_UnderlineOffset = i2837[16]
  i2836.m_UnderlineThickness = i2837[17]
  i2836.m_StrikethroughOffset = i2837[18]
  i2836.m_StrikethroughThickness = i2837[19]
  i2836.m_TabWidth = i2837[20]
  return i2836
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2839 = data
  i2838.useSafeMode = !!i2839[0]
  i2838.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2839[1], i2838.safeModeOptions)
  i2838.timeScale = i2839[2]
  i2838.unscaledTimeScale = i2839[3]
  i2838.useSmoothDeltaTime = !!i2839[4]
  i2838.maxSmoothUnscaledTime = i2839[5]
  i2838.rewindCallbackMode = i2839[6]
  i2838.showUnityEditorReport = !!i2839[7]
  i2838.logBehaviour = i2839[8]
  i2838.drawGizmos = !!i2839[9]
  i2838.defaultRecyclable = !!i2839[10]
  i2838.defaultAutoPlay = i2839[11]
  i2838.defaultUpdateType = i2839[12]
  i2838.defaultTimeScaleIndependent = !!i2839[13]
  i2838.defaultEaseType = i2839[14]
  i2838.defaultEaseOvershootOrAmplitude = i2839[15]
  i2838.defaultEasePeriod = i2839[16]
  i2838.defaultAutoKill = !!i2839[17]
  i2838.defaultLoopType = i2839[18]
  i2838.debugMode = !!i2839[19]
  i2838.debugStoreTargetId = !!i2839[20]
  i2838.showPreviewPanel = !!i2839[21]
  i2838.storeSettingsLocation = i2839[22]
  i2838.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2839[23], i2838.modules)
  i2838.createASMDEF = !!i2839[24]
  i2838.showPlayingTweens = !!i2839[25]
  i2838.showPausedTweens = !!i2839[26]
  return i2838
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2841 = data
  i2840.logBehaviour = i2841[0]
  i2840.nestedTweenFailureBehaviour = i2841[1]
  return i2840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2843 = data
  i2842.showPanel = !!i2843[0]
  i2842.audioEnabled = !!i2843[1]
  i2842.physicsEnabled = !!i2843[2]
  i2842.physics2DEnabled = !!i2843[3]
  i2842.spriteEnabled = !!i2843[4]
  i2842.uiEnabled = !!i2843[5]
  i2842.textMeshProEnabled = !!i2843[6]
  i2842.tk2DEnabled = !!i2843[7]
  i2842.deAudioEnabled = !!i2843[8]
  i2842.deUnityExtendedEnabled = !!i2843[9]
  i2842.epoOutlineEnabled = !!i2843[10]
  return i2842
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.TMP_Settings' )
  var i2845 = data
  i2844.assetVersion = i2845[0]
  i2844.m_TextWrappingMode = i2845[1]
  i2844.m_enableKerning = !!i2845[2]
  var i2847 = i2845[3]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(i2847[i + 0]);
  }
  i2844.m_ActiveFontFeatures = i2846
  i2844.m_enableExtraPadding = !!i2845[4]
  i2844.m_enableTintAllSprites = !!i2845[5]
  i2844.m_enableParseEscapeCharacters = !!i2845[6]
  i2844.m_EnableRaycastTarget = !!i2845[7]
  i2844.m_GetFontFeaturesAtRuntime = !!i2845[8]
  i2844.m_missingGlyphCharacter = i2845[9]
  i2844.m_ClearDynamicDataOnBuild = !!i2845[10]
  i2844.m_warningsDisabled = !!i2845[11]
  request.r(i2845[12], i2845[13], 0, i2844, 'm_defaultFontAsset')
  i2844.m_defaultFontAssetPath = i2845[14]
  i2844.m_defaultFontSize = i2845[15]
  i2844.m_defaultAutoSizeMinRatio = i2845[16]
  i2844.m_defaultAutoSizeMaxRatio = i2845[17]
  i2844.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2845[18], i2845[19] )
  i2844.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2845[20], i2845[21] )
  i2844.m_autoSizeTextContainer = !!i2845[22]
  i2844.m_IsTextObjectScaleStatic = !!i2845[23]
  var i2849 = i2845[24]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2849.length; i += 2) {
  request.r(i2849[i + 0], i2849[i + 1], 1, i2848, '')
  }
  i2844.m_fallbackFontAssets = i2848
  i2844.m_matchMaterialPreset = !!i2845[25]
  i2844.m_HideSubTextObjects = !!i2845[26]
  request.r(i2845[27], i2845[28], 0, i2844, 'm_defaultSpriteAsset')
  i2844.m_defaultSpriteAssetPath = i2845[29]
  i2844.m_enableEmojiSupport = !!i2845[30]
  i2844.m_MissingCharacterSpriteUnicode = i2845[31]
  var i2851 = i2845[32]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2851.length; i += 2) {
  request.r(i2851[i + 0], i2851[i + 1], 1, i2850, '')
  }
  i2844.m_EmojiFallbackTextAssets = i2850
  i2844.m_defaultColorGradientPresetsPath = i2845[33]
  request.r(i2845[34], i2845[35], 0, i2844, 'm_defaultStyleSheet')
  i2844.m_StyleSheetsResourcePath = i2845[36]
  request.r(i2845[37], i2845[38], 0, i2844, 'm_leadingCharacters')
  request.r(i2845[39], i2845[40], 0, i2844, 'm_followingCharacters')
  i2844.m_UseModernHangulLineBreakingRules = !!i2845[41]
  return i2844
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2855 = data
  request.r(i2855[0], i2855[1], 0, i2854, 'spriteSheet')
  var i2857 = i2855[2]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(request.d('TMPro.TMP_Sprite', i2857[i + 0]));
  }
  i2854.spriteInfoList = i2856
  var i2859 = i2855[3]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2859.length; i += 2) {
  request.r(i2859[i + 0], i2859[i + 1], 1, i2858, '')
  }
  i2854.fallbackSpriteAssets = i2858
  var i2861 = i2855[4]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.add(request.d('TMPro.TMP_SpriteCharacter', i2861[i + 0]));
  }
  i2854.m_SpriteCharacterTable = i2860
  var i2863 = i2855[5]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.add(request.d('TMPro.TMP_SpriteGlyph', i2863[i + 0]));
  }
  i2854.m_GlyphTable = i2862
  i2854.m_Version = i2855[6]
  i2854.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2855[7], i2854.m_FaceInfo)
  request.r(i2855[8], i2855[9], 0, i2854, 'm_Material')
  return i2854
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2867 = data
  i2866.name = i2867[0]
  i2866.hashCode = i2867[1]
  i2866.unicode = i2867[2]
  i2866.pivot = new pc.Vec2( i2867[3], i2867[4] )
  request.r(i2867[5], i2867[6], 0, i2866, 'sprite')
  i2866.id = i2867[7]
  i2866.x = i2867[8]
  i2866.y = i2867[9]
  i2866.width = i2867[10]
  i2866.height = i2867[11]
  i2866.xOffset = i2867[12]
  i2866.yOffset = i2867[13]
  i2866.xAdvance = i2867[14]
  i2866.scale = i2867[15]
  return i2866
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2872 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2873 = data
  i2872.m_Name = i2873[0]
  i2872.m_ElementType = i2873[1]
  i2872.m_Unicode = i2873[2]
  i2872.m_GlyphIndex = i2873[3]
  i2872.m_Scale = i2873[4]
  return i2872
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'sprite')
  i2876.m_Index = i2877[2]
  i2876.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2877[3], i2876.m_Metrics)
  i2876.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2877[4], i2876.m_GlyphRect)
  i2876.m_Scale = i2877[5]
  i2876.m_AtlasIndex = i2877[6]
  i2876.m_ClassDefinitionType = i2877[7]
  return i2876
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2879 = data
  var i2881 = i2879[0]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.add(request.d('TMPro.TMP_Style', i2881[i + 0]));
  }
  i2878.m_StyleList = i2880
  return i2878
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.TMP_Style' )
  var i2885 = data
  i2884.m_Name = i2885[0]
  i2884.m_HashCode = i2885[1]
  i2884.m_OpeningDefinition = i2885[2]
  i2884.m_ClosingDefinition = i2885[3]
  i2884.m_OpeningTagArray = i2885[4]
  i2884.m_ClosingTagArray = i2885[5]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2887 = data
  var i2889 = i2887[0]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2889[i + 0]) );
  }
  i2886.files = i2888
  i2886.componentToPrefabIds = i2887[1]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2893 = data
  i2892.path = i2893[0]
  request.r(i2893[1], i2893[2], 0, i2892, 'unityObject')
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2897[i + 0]) );
  }
  i2894.scriptsExecutionOrder = i2896
  var i2899 = i2895[1]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2899[i + 0]) );
  }
  i2894.sortingLayers = i2898
  var i2901 = i2895[2]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2901[i + 0]) );
  }
  i2894.cullingLayers = i2900
  i2894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2895[3], i2894.timeSettings)
  i2894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2895[4], i2894.physicsSettings)
  i2894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2895[5], i2894.physics2DSettings)
  i2894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2895[6], i2894.qualitySettings)
  i2894.enableRealtimeShadows = !!i2895[7]
  i2894.enableAutoInstancing = !!i2895[8]
  i2894.enableStaticBatching = !!i2895[9]
  i2894.enableDynamicBatching = !!i2895[10]
  i2894.usePreservativeDynamicBatching = !!i2895[11]
  i2894.lightmapEncodingQuality = i2895[12]
  i2894.desiredColorSpace = i2895[13]
  var i2903 = i2895[14]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( i2903[i + 0] );
  }
  i2894.allTags = i2902
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2907 = data
  i2906.name = i2907[0]
  i2906.value = i2907[1]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2911 = data
  i2910.id = i2911[0]
  i2910.name = i2911[1]
  i2910.value = i2911[2]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2915 = data
  i2914.id = i2915[0]
  i2914.name = i2915[1]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2917 = data
  i2916.fixedDeltaTime = i2917[0]
  i2916.maximumDeltaTime = i2917[1]
  i2916.timeScale = i2917[2]
  i2916.maximumParticleTimestep = i2917[3]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2919 = data
  i2918.gravity = new pc.Vec3( i2919[0], i2919[1], i2919[2] )
  i2918.defaultSolverIterations = i2919[3]
  i2918.bounceThreshold = i2919[4]
  i2918.autoSyncTransforms = !!i2919[5]
  i2918.autoSimulation = !!i2919[6]
  var i2921 = i2919[7]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2921[i + 0]) );
  }
  i2918.collisionMatrix = i2920
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2925 = data
  i2924.enabled = !!i2925[0]
  i2924.layerId = i2925[1]
  i2924.otherLayerId = i2925[2]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2927 = data
  request.r(i2927[0], i2927[1], 0, i2926, 'material')
  i2926.gravity = new pc.Vec2( i2927[2], i2927[3] )
  i2926.positionIterations = i2927[4]
  i2926.velocityIterations = i2927[5]
  i2926.velocityThreshold = i2927[6]
  i2926.maxLinearCorrection = i2927[7]
  i2926.maxAngularCorrection = i2927[8]
  i2926.maxTranslationSpeed = i2927[9]
  i2926.maxRotationSpeed = i2927[10]
  i2926.baumgarteScale = i2927[11]
  i2926.baumgarteTOIScale = i2927[12]
  i2926.timeToSleep = i2927[13]
  i2926.linearSleepTolerance = i2927[14]
  i2926.angularSleepTolerance = i2927[15]
  i2926.defaultContactOffset = i2927[16]
  i2926.autoSimulation = !!i2927[17]
  i2926.queriesHitTriggers = !!i2927[18]
  i2926.queriesStartInColliders = !!i2927[19]
  i2926.callbacksOnDisable = !!i2927[20]
  i2926.reuseCollisionCallbacks = !!i2927[21]
  i2926.autoSyncTransforms = !!i2927[22]
  var i2929 = i2927[23]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2929[i + 0]) );
  }
  i2926.collisionMatrix = i2928
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2933 = data
  i2932.enabled = !!i2933[0]
  i2932.layerId = i2933[1]
  i2932.otherLayerId = i2933[2]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2935 = data
  var i2937 = i2935[0]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2937[i + 0]) );
  }
  i2934.qualityLevels = i2936
  var i2939 = i2935[1]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( i2939[i + 0] );
  }
  i2934.names = i2938
  i2934.shadows = i2935[2]
  i2934.anisotropicFiltering = i2935[3]
  i2934.antiAliasing = i2935[4]
  i2934.lodBias = i2935[5]
  i2934.shadowCascades = i2935[6]
  i2934.shadowDistance = i2935[7]
  i2934.shadowmaskMode = i2935[8]
  i2934.shadowProjection = i2935[9]
  i2934.shadowResolution = i2935[10]
  i2934.softParticles = !!i2935[11]
  i2934.softVegetation = !!i2935[12]
  i2934.activeColorSpace = i2935[13]
  i2934.desiredColorSpace = i2935[14]
  i2934.masterTextureLimit = i2935[15]
  i2934.maxQueuedFrames = i2935[16]
  i2934.particleRaycastBudget = i2935[17]
  i2934.pixelLightCount = i2935[18]
  i2934.realtimeReflectionProbes = !!i2935[19]
  i2934.shadowCascade2Split = i2935[20]
  i2934.shadowCascade4Split = new pc.Vec3( i2935[21], i2935[22], i2935[23] )
  i2934.streamingMipmapsActive = !!i2935[24]
  i2934.vSyncCount = i2935[25]
  i2934.asyncUploadBufferSize = i2935[26]
  i2934.asyncUploadTimeSlice = i2935[27]
  i2934.billboardsFaceCameraPosition = !!i2935[28]
  i2934.shadowNearPlaneOffset = i2935[29]
  i2934.streamingMipmapsMemoryBudget = i2935[30]
  i2934.maximumLODLevel = i2935[31]
  i2934.streamingMipmapsAddAllCameras = !!i2935[32]
  i2934.streamingMipmapsMaxLevelReduction = i2935[33]
  i2934.streamingMipmapsRenderersPerFrame = i2935[34]
  i2934.resolutionScalingFixedDPIFactor = i2935[35]
  i2934.streamingMipmapsMaxFileIORequests = i2935[36]
  i2934.currentQualityLevel = i2935[37]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2943 = data
  i2942.name = i2943[0]
  var i2945 = i2943[1]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2945[i + 0]) );
  }
  i2942.tos = i2944
  var i2947 = i2943[2]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( i2947[i + 0] );
  }
  i2942.constant = i2946
  i2942.isValid = !!i2943[3]
  i2942.isHuman = !!i2943[4]
  i2942.hasRootMotion = !!i2943[5]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2951 = data
  i2950.hash = i2951[0]
  i2950.path = i2951[1]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2955 = data
  i2954.weight = i2955[0]
  i2954.vertices = i2955[1]
  i2954.normals = i2955[2]
  i2954.tangents = i2955[3]
  return i2954
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2956 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2957 = data
  request.r(i2957[0], i2957[1], 0, i2956, 'm_ObjectArgument')
  i2956.m_ObjectArgumentAssemblyTypeName = i2957[2]
  i2956.m_IntArgument = i2957[3]
  i2956.m_FloatArgument = i2957[4]
  i2956.m_StringArgument = i2957[5]
  i2956.m_BoolArgument = !!i2957[6]
  return i2956
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2959 = data
  i2958.m_GlyphIndex = i2959[0]
  i2958.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2959[1], i2958.m_GlyphValueRecord)
  return i2958
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2960 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2961 = data
  i2960.m_XCoordinate = i2961[0]
  i2960.m_YCoordinate = i2961[1]
  return i2960
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2963 = data
  i2962.m_XPositionAdjustment = i2963[0]
  i2962.m_YPositionAdjustment = i2963[1]
  return i2962
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2964 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2965 = data
  i2964.xPlacement = i2965[0]
  i2964.yPlacement = i2965[1]
  i2964.xAdvance = i2965[2]
  i2964.yAdvance = i2965[3]
  return i2964
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2967 = data
  i2966.m_XPlacement = i2967[0]
  i2966.m_YPlacement = i2967[1]
  i2966.m_XAdvance = i2967[2]
  i2966.m_YAdvance = i2967[3]
  return i2966
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4801";

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

Deserializers.buildID = "b2e2ec53-1fa3-44f3-92e0-fbe8d3bf3ae5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

