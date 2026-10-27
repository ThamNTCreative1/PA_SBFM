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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2267 = data
  i2266.center = new pc.Vec3( i2267[0], i2267[1], i2267[2] )
  i2266.radius = i2267[3]
  i2266.height = i2267[4]
  i2266.direction = i2267[5]
  i2266.enabled = !!i2267[6]
  i2266.isTrigger = !!i2267[7]
  request.r(i2267[8], i2267[9], 0, i2266, 'material')
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2269 = data
  i2268.center = new pc.Vec3( i2269[0], i2269[1], i2269[2] )
  i2268.size = new pc.Vec3( i2269[3], i2269[4], i2269[5] )
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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.atlasId = i2277[1]
  i2276.mipmapCount = i2277[2]
  i2276.hdr = !!i2277[3]
  i2276.size = i2277[4]
  i2276.anisoLevel = i2277[5]
  i2276.filterMode = i2277[6]
  var i2279 = i2277[7]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 4) {
    i2278.push( UnityEngine.Rect.MinMaxRect(i2279[i + 0], i2279[i + 1], i2279[i + 2], i2279[i + 3]) );
  }
  i2276.rects = i2278
  i2276.wrapU = i2277[8]
  i2276.wrapV = i2277[9]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.index = i2283[1]
  i2282.startup = !!i2283[2]
  return i2282
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'm_FirstSelected')
  i2284.m_sendNavigationEvents = !!i2285[2]
  i2284.m_DragThreshold = i2285[3]
  return i2284
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2287 = data
  i2286.m_HorizontalAxis = i2287[0]
  i2286.m_VerticalAxis = i2287[1]
  i2286.m_SubmitButton = i2287[2]
  i2286.m_CancelButton = i2287[3]
  i2286.m_InputActionsPerSecond = i2287[4]
  i2286.m_RepeatDelay = i2287[5]
  i2286.m_ForceModuleActive = !!i2287[6]
  i2286.m_SendPointerHoverToParent = !!i2287[7]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2289 = data
  i2288.pivot = new pc.Vec2( i2289[0], i2289[1] )
  i2288.anchorMin = new pc.Vec2( i2289[2], i2289[3] )
  i2288.anchorMax = new pc.Vec2( i2289[4], i2289[5] )
  i2288.sizeDelta = new pc.Vec2( i2289[6], i2289[7] )
  i2288.anchoredPosition3D = new pc.Vec3( i2289[8], i2289[9], i2289[10] )
  i2288.rotation = new pc.Quat(i2289[11], i2289[12], i2289[13], i2289[14])
  i2288.scale = new pc.Vec3( i2289[15], i2289[16], i2289[17] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2291 = data
  i2290.planeDistance = i2291[0]
  i2290.referencePixelsPerUnit = i2291[1]
  i2290.isFallbackOverlay = !!i2291[2]
  i2290.renderMode = i2291[3]
  i2290.renderOrder = i2291[4]
  i2290.sortingLayerName = i2291[5]
  i2290.sortingOrder = i2291[6]
  i2290.scaleFactor = i2291[7]
  request.r(i2291[8], i2291[9], 0, i2290, 'worldCamera')
  i2290.overrideSorting = !!i2291[10]
  i2290.pixelPerfect = !!i2291[11]
  i2290.targetDisplay = i2291[12]
  i2290.overridePixelPerfect = !!i2291[13]
  i2290.enabled = !!i2291[14]
  return i2290
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2293 = data
  i2292.m_UiScaleMode = i2293[0]
  i2292.m_ReferencePixelsPerUnit = i2293[1]
  i2292.m_ScaleFactor = i2293[2]
  i2292.m_ReferenceResolution = new pc.Vec2( i2293[3], i2293[4] )
  i2292.m_ScreenMatchMode = i2293[5]
  i2292.m_MatchWidthOrHeight = i2293[6]
  i2292.m_PhysicalUnit = i2293[7]
  i2292.m_FallbackScreenDPI = i2293[8]
  i2292.m_DefaultSpriteDPI = i2293[9]
  i2292.m_DynamicPixelsPerUnit = i2293[10]
  i2292.m_PresetInfoIsWorld = !!i2293[11]
  return i2292
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2295 = data
  i2294.m_IgnoreReversedGraphics = !!i2295[0]
  i2294.m_BlockingObjects = i2295[1]
  i2294.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2295[2] )
  return i2294
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2296 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2297 = data
  i2296._referenceResolution = new pc.Vec2( i2297[0], i2297[1] )
  i2296._portraitMatch = i2297[2]
  i2296._landscapeMatch = i2297[3]
  i2296._squareMatch = i2297[4]
  i2296._portraitAspectThreshold = i2297[5]
  i2296._landscapeAspectThreshold = i2297[6]
  i2296._aspectEpsilon = i2297[7]
  return i2296
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2298 = root || request.c( 'Joystick' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'background')
  request.r(i2299[2], i2299[3], 0, i2298, 'joy')
  i2298.deadZone = i2299[4]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2301 = data
  i2300.cullTransparentMesh = !!i2301[0]
  return i2300
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.Image' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'm_Sprite')
  i2302.m_Type = i2303[2]
  i2302.m_PreserveAspect = !!i2303[3]
  i2302.m_FillCenter = !!i2303[4]
  i2302.m_FillMethod = i2303[5]
  i2302.m_FillAmount = i2303[6]
  i2302.m_FillClockwise = !!i2303[7]
  i2302.m_FillOrigin = i2303[8]
  i2302.m_UseSpriteMesh = !!i2303[9]
  i2302.m_PixelsPerUnitMultiplier = i2303[10]
  request.r(i2303[11], i2303[12], 0, i2302, 'm_Material')
  i2302.m_Maskable = !!i2303[13]
  i2302.m_Color = new pc.Color(i2303[14], i2303[15], i2303[16], i2303[17])
  i2302.m_RaycastTarget = !!i2303[18]
  i2302.m_RaycastPadding = new pc.Vec4( i2303[19], i2303[20], i2303[21], i2303[22] )
  return i2302
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.Button' )
  var i2305 = data
  i2304.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2305[0], i2304.m_OnClick)
  i2304.m_Navigation = request.d('UnityEngine.UI.Navigation', i2305[1], i2304.m_Navigation)
  i2304.m_Transition = i2305[2]
  i2304.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2305[3], i2304.m_Colors)
  i2304.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2305[4], i2304.m_SpriteState)
  i2304.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2305[5], i2304.m_AnimationTriggers)
  i2304.m_Interactable = !!i2305[6]
  request.r(i2305[7], i2305[8], 0, i2304, 'm_TargetGraphic')
  return i2304
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2307 = data
  i2306.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2307[0], i2306.m_PersistentCalls)
  return i2306
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('UnityEngine.Events.PersistentCall', i2311[i + 0]));
  }
  i2308.m_Calls = i2310
  return i2308
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'm_Target')
  i2314.m_TargetAssemblyTypeName = i2315[2]
  i2314.m_MethodName = i2315[3]
  i2314.m_Mode = i2315[4]
  i2314.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2315[5], i2314.m_Arguments)
  i2314.m_CallState = i2315[6]
  return i2314
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2317 = data
  i2316.m_Mode = i2317[0]
  i2316.m_WrapAround = !!i2317[1]
  request.r(i2317[2], i2317[3], 0, i2316, 'm_SelectOnUp')
  request.r(i2317[4], i2317[5], 0, i2316, 'm_SelectOnDown')
  request.r(i2317[6], i2317[7], 0, i2316, 'm_SelectOnLeft')
  request.r(i2317[8], i2317[9], 0, i2316, 'm_SelectOnRight')
  return i2316
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2319 = data
  i2318.m_NormalColor = new pc.Color(i2319[0], i2319[1], i2319[2], i2319[3])
  i2318.m_HighlightedColor = new pc.Color(i2319[4], i2319[5], i2319[6], i2319[7])
  i2318.m_PressedColor = new pc.Color(i2319[8], i2319[9], i2319[10], i2319[11])
  i2318.m_SelectedColor = new pc.Color(i2319[12], i2319[13], i2319[14], i2319[15])
  i2318.m_DisabledColor = new pc.Color(i2319[16], i2319[17], i2319[18], i2319[19])
  i2318.m_ColorMultiplier = i2319[20]
  i2318.m_FadeDuration = i2319[21]
  return i2318
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'm_HighlightedSprite')
  request.r(i2321[2], i2321[3], 0, i2320, 'm_PressedSprite')
  request.r(i2321[4], i2321[5], 0, i2320, 'm_SelectedSprite')
  request.r(i2321[6], i2321[7], 0, i2320, 'm_DisabledSprite')
  return i2320
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2323 = data
  i2322.m_NormalTrigger = i2323[0]
  i2322.m_HighlightedTrigger = i2323[1]
  i2322.m_PressedTrigger = i2323[2]
  i2322.m_SelectedTrigger = i2323[3]
  i2322.m_DisabledTrigger = i2323[4]
  return i2322
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2324 = root || request.c( 'JumpButton' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'button')
  return i2324
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2327 = data
  i2326.m_ShowMaskGraphic = !!i2327[0]
  return i2326
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2329 = data
  i2328.m_hasFontAssetChanged = !!i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'm_baseMaterial')
  i2328.m_maskOffset = new pc.Vec4( i2329[3], i2329[4], i2329[5], i2329[6] )
  i2328.m_text = i2329[7]
  i2328.m_isRightToLeft = !!i2329[8]
  request.r(i2329[9], i2329[10], 0, i2328, 'm_fontAsset')
  request.r(i2329[11], i2329[12], 0, i2328, 'm_sharedMaterial')
  var i2331 = i2329[13]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 2, i2330, '')
  }
  i2328.m_fontSharedMaterials = i2330
  request.r(i2329[14], i2329[15], 0, i2328, 'm_fontMaterial')
  var i2333 = i2329[16]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2328.m_fontMaterials = i2332
  i2328.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2329[17], i2329[18], i2329[19], i2329[20])
  i2328.m_fontColor = new pc.Color(i2329[21], i2329[22], i2329[23], i2329[24])
  i2328.m_enableVertexGradient = !!i2329[25]
  i2328.m_colorMode = i2329[26]
  i2328.m_fontColorGradient = request.d('TMPro.VertexGradient', i2329[27], i2328.m_fontColorGradient)
  request.r(i2329[28], i2329[29], 0, i2328, 'm_fontColorGradientPreset')
  request.r(i2329[30], i2329[31], 0, i2328, 'm_spriteAsset')
  i2328.m_tintAllSprites = !!i2329[32]
  request.r(i2329[33], i2329[34], 0, i2328, 'm_StyleSheet')
  i2328.m_TextStyleHashCode = i2329[35]
  i2328.m_overrideHtmlColors = !!i2329[36]
  i2328.m_faceColor = UnityEngine.Color32.ConstructColor(i2329[37], i2329[38], i2329[39], i2329[40])
  i2328.m_fontSize = i2329[41]
  i2328.m_fontSizeBase = i2329[42]
  i2328.m_fontWeight = i2329[43]
  i2328.m_enableAutoSizing = !!i2329[44]
  i2328.m_fontSizeMin = i2329[45]
  i2328.m_fontSizeMax = i2329[46]
  i2328.m_fontStyle = i2329[47]
  i2328.m_HorizontalAlignment = i2329[48]
  i2328.m_VerticalAlignment = i2329[49]
  i2328.m_textAlignment = i2329[50]
  i2328.m_characterSpacing = i2329[51]
  i2328.m_characterHorizontalScale = i2329[52]
  i2328.m_wordSpacing = i2329[53]
  i2328.m_lineSpacing = i2329[54]
  i2328.m_lineSpacingMax = i2329[55]
  i2328.m_paragraphSpacing = i2329[56]
  i2328.m_charWidthMaxAdj = i2329[57]
  i2328.m_TextWrappingMode = i2329[58]
  i2328.m_wordWrappingRatios = i2329[59]
  i2328.m_overflowMode = i2329[60]
  request.r(i2329[61], i2329[62], 0, i2328, 'm_linkedTextComponent')
  request.r(i2329[63], i2329[64], 0, i2328, 'parentLinkedComponent')
  i2328.m_enableKerning = !!i2329[65]
  var i2335 = i2329[66]
  var i2334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.add(i2335[i + 0]);
  }
  i2328.m_ActiveFontFeatures = i2334
  i2328.m_enableExtraPadding = !!i2329[67]
  i2328.checkPaddingRequired = !!i2329[68]
  i2328.m_isRichText = !!i2329[69]
  i2328.m_parseCtrlCharacters = !!i2329[70]
  i2328.m_isOrthographic = !!i2329[71]
  i2328.m_isCullingEnabled = !!i2329[72]
  i2328.m_horizontalMapping = i2329[73]
  i2328.m_verticalMapping = i2329[74]
  i2328.m_uvLineOffset = i2329[75]
  i2328.m_geometrySortingOrder = i2329[76]
  i2328.m_IsTextObjectScaleStatic = !!i2329[77]
  i2328.m_VertexBufferAutoSizeReduction = !!i2329[78]
  i2328.m_useMaxVisibleDescender = !!i2329[79]
  i2328.m_pageToDisplay = i2329[80]
  i2328.m_margin = new pc.Vec4( i2329[81], i2329[82], i2329[83], i2329[84] )
  i2328.m_isUsingLegacyAnimationComponent = !!i2329[85]
  i2328.m_isVolumetricText = !!i2329[86]
  request.r(i2329[87], i2329[88], 0, i2328, 'm_Material')
  i2328.m_EmojiFallbackSupport = !!i2329[89]
  i2328.m_Maskable = !!i2329[90]
  i2328.m_Color = new pc.Color(i2329[91], i2329[92], i2329[93], i2329[94])
  i2328.m_RaycastTarget = !!i2329[95]
  i2328.m_RaycastPadding = new pc.Vec4( i2329[96], i2329[97], i2329[98], i2329[99] )
  return i2328
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.VertexGradient' )
  var i2337 = data
  i2336.topLeft = new pc.Color(i2337[0], i2337[1], i2337[2], i2337[3])
  i2336.topRight = new pc.Color(i2337[4], i2337[5], i2337[6], i2337[7])
  i2336.bottomLeft = new pc.Color(i2337[8], i2337[9], i2337[10], i2337[11])
  i2336.bottomRight = new pc.Color(i2337[12], i2337[13], i2337[14], i2337[15])
  return i2336
}

Deserializers["TutController"] = function (request, data, root) {
  var i2340 = root || request.c( 'TutController' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'tutScene')
  request.r(i2341[2], i2341[3], 0, i2340, 'startTut')
  request.r(i2341[4], i2341[5], 0, i2340, 'playTut')
  request.r(i2341[6], i2341[7], 0, i2340, 'farTut')
  request.r(i2341[8], i2341[9], 0, i2340, 'failTut')
  return i2340
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2342 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2343 = data
  i2342.targetIsSelf = !!i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'targetGO')
  i2342.tweenTargetIsTargetGO = !!i2343[3]
  i2342.delay = i2343[4]
  i2342.duration = i2343[5]
  i2342.easeType = i2343[6]
  i2342.easeCurve = new pc.AnimationCurve( { keys_flow: i2343[7] } )
  i2342.loopType = i2343[8]
  i2342.loops = i2343[9]
  i2342.id = i2343[10]
  i2342.isRelative = !!i2343[11]
  i2342.isFrom = !!i2343[12]
  i2342.isIndependentUpdate = !!i2343[13]
  i2342.autoKill = !!i2343[14]
  i2342.autoGenerate = !!i2343[15]
  i2342.isActive = !!i2343[16]
  i2342.isValid = !!i2343[17]
  request.r(i2343[18], i2343[19], 0, i2342, 'target')
  i2342.animationType = i2343[20]
  i2342.targetType = i2343[21]
  i2342.forcedTargetType = i2343[22]
  i2342.autoPlay = !!i2343[23]
  i2342.useTargetAsV3 = !!i2343[24]
  i2342.endValueFloat = i2343[25]
  i2342.endValueV3 = new pc.Vec3( i2343[26], i2343[27], i2343[28] )
  i2342.endValueV2 = new pc.Vec2( i2343[29], i2343[30] )
  i2342.endValueColor = new pc.Color(i2343[31], i2343[32], i2343[33], i2343[34])
  i2342.endValueString = i2343[35]
  i2342.endValueRect = UnityEngine.Rect.MinMaxRect(i2343[36], i2343[37], i2343[38], i2343[39])
  request.r(i2343[40], i2343[41], 0, i2342, 'endValueTransform')
  i2342.optionalBool0 = !!i2343[42]
  i2342.optionalBool1 = !!i2343[43]
  i2342.optionalFloat0 = i2343[44]
  i2342.optionalInt0 = i2343[45]
  i2342.optionalRotationMode = i2343[46]
  i2342.optionalScrambleMode = i2343[47]
  i2342.optionalShakeRandomnessMode = i2343[48]
  i2342.optionalString = i2343[49]
  i2342.updateType = i2343[50]
  i2342.isSpeedBased = !!i2343[51]
  i2342.hasOnStart = !!i2343[52]
  i2342.hasOnPlay = !!i2343[53]
  i2342.hasOnUpdate = !!i2343[54]
  i2342.hasOnStepComplete = !!i2343[55]
  i2342.hasOnComplete = !!i2343[56]
  i2342.hasOnTweenCreated = !!i2343[57]
  i2342.hasOnRewind = !!i2343[58]
  i2342.onStart = request.d('UnityEngine.Events.UnityEvent', i2343[59], i2342.onStart)
  i2342.onPlay = request.d('UnityEngine.Events.UnityEvent', i2343[60], i2342.onPlay)
  i2342.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2343[61], i2342.onUpdate)
  i2342.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2343[62], i2342.onStepComplete)
  i2342.onComplete = request.d('UnityEngine.Events.UnityEvent', i2343[63], i2342.onComplete)
  i2342.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2343[64], i2342.onTweenCreated)
  i2342.onRewind = request.d('UnityEngine.Events.UnityEvent', i2343[65], i2342.onRewind)
  return i2342
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2345 = data
  i2344.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2345[0], i2344.m_PersistentCalls)
  return i2344
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2346 = root || request.c( 'HideOnPointer' )
  var i2347 = data
  i2346.OnPointerDownEvent = request.d('System.Action', i2347[0], i2346.OnPointerDownEvent)
  return i2346
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2348 = root || request.c( 'System.Action' )
  var i2349 = data
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2351 = data
  i2350.mass = i2351[0]
  i2350.drag = i2351[1]
  i2350.angularDrag = i2351[2]
  i2350.useGravity = !!i2351[3]
  i2350.isKinematic = !!i2351[4]
  i2350.constraints = i2351[5]
  i2350.maxAngularVelocity = i2351[6]
  i2350.collisionDetectionMode = i2351[7]
  i2350.interpolation = i2351[8]
  return i2350
}

Deserializers["Gift"] = function (request, data, root) {
  var i2352 = root || request.c( 'Gift' )
  var i2353 = data
  i2352.collectDone = !!i2353[0]
  var i2355 = i2353[1]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 1, i2354, '')
  }
  i2352.hints = i2354
  request.r(i2353[2], i2353[3], 0, i2352, 'collectSound')
  request.r(i2353[4], i2353[5], 0, i2352, 'collectEffect')
  request.r(i2353[6], i2353[7], 0, i2352, 'arrow')
  return i2352
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2358 = root || request.c( 'SoundHint' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'Sound')
  request.r(i2359[2], i2359[3], 0, i2358, 'Source')
  return i2358
}

Deserializers["MonsterSelector"] = function (request, data, root) {
  var i2360 = root || request.c( 'MonsterSelector' )
  var i2361 = data
  i2360.monsterIndex = i2361[0]
  var i2363 = i2361[1]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('MonsterSelector+MonsterEntry', i2363[i + 0]) );
  }
  i2360.monsters = i2362
  request.r(i2361[2], i2361[3], 0, i2360, 'hudIcon')
  request.r(i2361[4], i2361[5], 0, i2360, 'hudName')
  request.r(i2361[6], i2361[7], 0, i2360, 'unlockIcon')
  i2360.driveHud = !!i2361[8]
  return i2360
}

Deserializers["MonsterSelector+MonsterEntry"] = function (request, data, root) {
  var i2366 = root || request.c( 'MonsterSelector+MonsterEntry' )
  var i2367 = data
  i2366.displayName = i2367[0]
  request.r(i2367[1], i2367[2], 0, i2366, 'model')
  request.r(i2367[3], i2367[4], 0, i2366, 'icon')
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'mesh')
  i2368.meshCount = i2369[2]
  i2368.activeVertexStreamsCount = i2369[3]
  i2368.alignment = i2369[4]
  i2368.renderMode = i2369[5]
  i2368.sortMode = i2369[6]
  i2368.lengthScale = i2369[7]
  i2368.velocityScale = i2369[8]
  i2368.cameraVelocityScale = i2369[9]
  i2368.normalDirection = i2369[10]
  i2368.sortingFudge = i2369[11]
  i2368.minParticleSize = i2369[12]
  i2368.maxParticleSize = i2369[13]
  i2368.pivot = new pc.Vec3( i2369[14], i2369[15], i2369[16] )
  request.r(i2369[17], i2369[18], 0, i2368, 'trailMaterial')
  i2368.applyActiveColorSpace = !!i2369[19]
  i2368.enabled = !!i2369[20]
  request.r(i2369[21], i2369[22], 0, i2368, 'sharedMaterial')
  var i2371 = i2369[23]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2368.sharedMaterials = i2370
  i2368.receiveShadows = !!i2369[24]
  i2368.shadowCastingMode = i2369[25]
  i2368.sortingLayerID = i2369[26]
  i2368.sortingOrder = i2369[27]
  i2368.lightmapIndex = i2369[28]
  i2368.lightmapSceneIndex = i2369[29]
  i2368.lightmapScaleOffset = new pc.Vec4( i2369[30], i2369[31], i2369[32], i2369[33] )
  i2368.lightProbeUsage = i2369[34]
  i2368.reflectionProbeUsage = i2369[35]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2373 = data
  i2372.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2373[0], i2372.main)
  i2372.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2373[1], i2372.colorBySpeed)
  i2372.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2373[2], i2372.colorOverLifetime)
  i2372.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2373[3], i2372.emission)
  i2372.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2373[4], i2372.rotationBySpeed)
  i2372.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2373[5], i2372.rotationOverLifetime)
  i2372.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2373[6], i2372.shape)
  i2372.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2373[7], i2372.sizeBySpeed)
  i2372.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2373[8], i2372.sizeOverLifetime)
  i2372.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2373[9], i2372.textureSheetAnimation)
  i2372.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2373[10], i2372.velocityOverLifetime)
  i2372.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2373[11], i2372.noise)
  i2372.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2373[12], i2372.inheritVelocity)
  i2372.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2373[13], i2372.forceOverLifetime)
  i2372.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2373[14], i2372.limitVelocityOverLifetime)
  i2372.useAutoRandomSeed = !!i2373[15]
  i2372.randomSeed = i2373[16]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemMain()
  var i2375 = data
  i2374.duration = i2375[0]
  i2374.loop = !!i2375[1]
  i2374.prewarm = !!i2375[2]
  i2374.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.startDelay)
  i2374.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[4], i2374.startLifetime)
  i2374.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[5], i2374.startSpeed)
  i2374.startSize3D = !!i2375[6]
  i2374.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[7], i2374.startSizeX)
  i2374.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[8], i2374.startSizeY)
  i2374.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[9], i2374.startSizeZ)
  i2374.startRotation3D = !!i2375[10]
  i2374.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[11], i2374.startRotationX)
  i2374.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[12], i2374.startRotationY)
  i2374.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[13], i2374.startRotationZ)
  i2374.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2375[14], i2374.startColor)
  i2374.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[15], i2374.gravityModifier)
  i2374.simulationSpace = i2375[16]
  request.r(i2375[17], i2375[18], 0, i2374, 'customSimulationSpace')
  i2374.simulationSpeed = i2375[19]
  i2374.useUnscaledTime = !!i2375[20]
  i2374.scalingMode = i2375[21]
  i2374.playOnAwake = !!i2375[22]
  i2374.maxParticles = i2375[23]
  i2374.emitterVelocityMode = i2375[24]
  i2374.stopAction = i2375[25]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2376 = root || new pc.MinMaxCurve()
  var i2377 = data
  i2376.mode = i2377[0]
  i2376.curveMin = new pc.AnimationCurve( { keys_flow: i2377[1] } )
  i2376.curveMax = new pc.AnimationCurve( { keys_flow: i2377[2] } )
  i2376.curveMultiplier = i2377[3]
  i2376.constantMin = i2377[4]
  i2376.constantMax = i2377[5]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2378 = root || new pc.MinMaxGradient()
  var i2379 = data
  i2378.mode = i2379[0]
  i2378.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2379[1], i2378.gradientMin)
  i2378.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2379[2], i2378.gradientMax)
  i2378.colorMin = new pc.Color(i2379[3], i2379[4], i2379[5], i2379[6])
  i2378.colorMax = new pc.Color(i2379[7], i2379[8], i2379[9], i2379[10])
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2381 = data
  i2380.mode = i2381[0]
  var i2383 = i2381[1]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2383[i + 0]) );
  }
  i2380.colorKeys = i2382
  var i2385 = i2381[2]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2385[i + 0]) );
  }
  i2380.alphaKeys = i2384
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemColorBySpeed()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2387[1], i2386.color)
  i2386.range = new pc.Vec2( i2387[2], i2387[3] )
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2391 = data
  i2390.color = new pc.Color(i2391[0], i2391[1], i2391[2], i2391[3])
  i2390.time = i2391[4]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2395 = data
  i2394.alpha = i2395[0]
  i2394.time = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemColorOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2397[1], i2396.color)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemEmitter()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[1], i2398.rateOverTime)
  i2398.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.rateOverDistance)
  var i2401 = i2399[3]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2401[i + 0]) );
  }
  i2398.bursts = i2400
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemBurst()
  var i2405 = data
  i2404.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[0], i2404.count)
  i2404.cycleCount = i2405[1]
  i2404.minCount = i2405[2]
  i2404.maxCount = i2405[3]
  i2404.repeatInterval = i2405[4]
  i2404.time = i2405[5]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemRotationBySpeed()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[1], i2406.x)
  i2406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[2], i2406.y)
  i2406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[3], i2406.z)
  i2406.separateAxes = !!i2407[4]
  i2406.range = new pc.Vec2( i2407[5], i2407[6] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[1], i2408.x)
  i2408.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.y)
  i2408.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.z)
  i2408.separateAxes = !!i2409[4]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemShape()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.shapeType = i2411[1]
  i2410.randomDirectionAmount = i2411[2]
  i2410.sphericalDirectionAmount = i2411[3]
  i2410.randomPositionAmount = i2411[4]
  i2410.alignToDirection = !!i2411[5]
  i2410.radius = i2411[6]
  i2410.radiusMode = i2411[7]
  i2410.radiusSpread = i2411[8]
  i2410.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[9], i2410.radiusSpeed)
  i2410.radiusThickness = i2411[10]
  i2410.angle = i2411[11]
  i2410.length = i2411[12]
  i2410.boxThickness = new pc.Vec3( i2411[13], i2411[14], i2411[15] )
  i2410.meshShapeType = i2411[16]
  request.r(i2411[17], i2411[18], 0, i2410, 'mesh')
  request.r(i2411[19], i2411[20], 0, i2410, 'meshRenderer')
  request.r(i2411[21], i2411[22], 0, i2410, 'skinnedMeshRenderer')
  i2410.useMeshMaterialIndex = !!i2411[23]
  i2410.meshMaterialIndex = i2411[24]
  i2410.useMeshColors = !!i2411[25]
  i2410.normalOffset = i2411[26]
  i2410.arc = i2411[27]
  i2410.arcMode = i2411[28]
  i2410.arcSpread = i2411[29]
  i2410.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[30], i2410.arcSpeed)
  i2410.donutRadius = i2411[31]
  i2410.position = new pc.Vec3( i2411[32], i2411[33], i2411[34] )
  i2410.rotation = new pc.Vec3( i2411[35], i2411[36], i2411[37] )
  i2410.scale = new pc.Vec3( i2411[38], i2411[39], i2411[40] )
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemSizeBySpeed()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[1], i2412.x)
  i2412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.y)
  i2412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.z)
  i2412.separateAxes = !!i2413[4]
  i2412.range = new pc.Vec2( i2413[5], i2413[6] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[1], i2414.x)
  i2414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.y)
  i2414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[3], i2414.z)
  i2414.separateAxes = !!i2415[4]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2416 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.mode = i2417[1]
  i2416.animation = i2417[2]
  i2416.numTilesX = i2417[3]
  i2416.numTilesY = i2417[4]
  i2416.useRandomRow = !!i2417[5]
  i2416.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[6], i2416.frameOverTime)
  i2416.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[7], i2416.startFrame)
  i2416.cycleCount = i2417[8]
  i2416.rowIndex = i2417[9]
  i2416.flipU = i2417[10]
  i2416.flipV = i2417[11]
  i2416.spriteCount = i2417[12]
  var i2419 = i2417[13]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 2, i2418, '')
  }
  i2416.sprites = i2418
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[1], i2422.x)
  i2422.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[2], i2422.y)
  i2422.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[3], i2422.z)
  i2422.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[4], i2422.radial)
  i2422.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[5], i2422.speedModifier)
  i2422.space = i2423[6]
  i2422.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[7], i2422.orbitalX)
  i2422.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[8], i2422.orbitalY)
  i2422.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[9], i2422.orbitalZ)
  i2422.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[10], i2422.orbitalOffsetX)
  i2422.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[11], i2422.orbitalOffsetY)
  i2422.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[12], i2422.orbitalOffsetZ)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemNoise()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.separateAxes = !!i2425[1]
  i2424.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.strengthX)
  i2424.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[3], i2424.strengthY)
  i2424.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[4], i2424.strengthZ)
  i2424.frequency = i2425[5]
  i2424.damping = !!i2425[6]
  i2424.octaveCount = i2425[7]
  i2424.octaveMultiplier = i2425[8]
  i2424.octaveScale = i2425[9]
  i2424.quality = i2425[10]
  i2424.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[11], i2424.scrollSpeed)
  i2424.scrollSpeedMultiplier = i2425[12]
  i2424.remapEnabled = !!i2425[13]
  i2424.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[14], i2424.remapX)
  i2424.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[15], i2424.remapY)
  i2424.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[16], i2424.remapZ)
  i2424.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[17], i2424.positionAmount)
  i2424.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[18], i2424.rotationAmount)
  i2424.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[19], i2424.sizeAmount)
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemInheritVelocity()
  var i2427 = data
  i2426.enabled = !!i2427[0]
  i2426.mode = i2427[1]
  i2426.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[2], i2426.curve)
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2428 = root || new pc.ParticleSystemForceOverLifetime()
  var i2429 = data
  i2428.enabled = !!i2429[0]
  i2428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[1], i2428.x)
  i2428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[2], i2428.y)
  i2428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[3], i2428.z)
  i2428.space = i2429[4]
  i2428.randomized = !!i2429[5]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[1], i2430.limit)
  i2430.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[2], i2430.limitX)
  i2430.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[3], i2430.limitY)
  i2430.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[4], i2430.limitZ)
  i2430.dampen = i2431[5]
  i2430.separateAxes = !!i2431[6]
  i2430.space = i2431[7]
  i2430.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[8], i2430.drag)
  i2430.multiplyDragByParticleSize = !!i2431[9]
  i2430.multiplyDragByParticleVelocity = !!i2431[10]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2433 = data
  i2432.color = new pc.Color(i2433[0], i2433[1], i2433[2], i2433[3])
  request.r(i2433[4], i2433[5], 0, i2432, 'sprite')
  i2432.flipX = !!i2433[6]
  i2432.flipY = !!i2433[7]
  i2432.drawMode = i2433[8]
  i2432.size = new pc.Vec2( i2433[9], i2433[10] )
  i2432.tileMode = i2433[11]
  i2432.adaptiveModeThreshold = i2433[12]
  i2432.maskInteraction = i2433[13]
  i2432.spriteSortPoint = i2433[14]
  i2432.enabled = !!i2433[15]
  request.r(i2433[16], i2433[17], 0, i2432, 'sharedMaterial')
  var i2435 = i2433[18]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2432.sharedMaterials = i2434
  i2432.receiveShadows = !!i2433[19]
  i2432.shadowCastingMode = i2433[20]
  i2432.sortingLayerID = i2433[21]
  i2432.sortingOrder = i2433[22]
  i2432.lightmapIndex = i2433[23]
  i2432.lightmapSceneIndex = i2433[24]
  i2432.lightmapScaleOffset = new pc.Vec4( i2433[25], i2433[26], i2433[27], i2433[28] )
  i2432.lightProbeUsage = i2433[29]
  i2432.reflectionProbeUsage = i2433[30]
  return i2432
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2436 = root || request.c( 'CharacterMotor' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'characterInput')
  request.r(i2437[2], i2437[3], 0, i2436, 'cameraYawTransform')
  request.r(i2437[4], i2437[5], 0, i2436, '_arrow')
  i2436.moveSpeed = i2437[6]
  i2436.jumpHeight = i2437[7]
  request.r(i2437[8], i2437[9], 0, i2436, 'groundChecker')
  i2436.gravity = i2437[10]
  i2436.enableStepClimb = !!i2437[11]
  i2436.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2437[12] )
  i2436.maxStepHeight = i2437[13]
  i2436.stepCheckDistance = i2437[14]
  i2436.stepUpSpeed = i2437[15]
  i2436.stepUpAcceleration = i2437[16]
  i2436.minimumStepFacing = i2437[17]
  i2436.climbSpeed = i2437[18]
  i2436.ladderSnapStrength = i2437[19]
  request.r(i2437[20], i2437[21], 0, i2436, 'controller')
  i2436.autoRun = !!i2437[22]
  return i2436
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2438 = root || request.c( 'CharacterRotation' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'motor')
  i2438.rotationSpeed = i2439[2]
  return i2438
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2440 = root || request.c( 'CharacterAnimation' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'animator')
  request.r(i2441[2], i2441[3], 0, i2440, 'motor')
  i2440.speedChangeRate = i2441[4]
  i2440.groundedGraceTime = i2441[5]
  return i2440
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2442 = root || request.c( 'CharacterCollect' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'motor')
  request.r(i2443[2], i2443[3], 0, i2442, 'avatar')
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'clip')
  request.r(i2445[2], i2445[3], 0, i2444, 'outputAudioMixerGroup')
  i2444.playOnAwake = !!i2445[4]
  i2444.loop = !!i2445[5]
  i2444.time = i2445[6]
  i2444.volume = i2445[7]
  i2444.pitch = i2445[8]
  i2444.enabled = !!i2445[9]
  return i2444
}

Deserializers["FootstepAudio"] = function (request, data, root) {
  var i2446 = root || request.c( 'FootstepAudio' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'motor')
  request.r(i2447[2], i2447[3], 0, i2446, 'footstepClip')
  i2446.volume = i2447[4]
  i2446.pitchAtFullSpeed = i2447[5]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'sharedMesh')
  var i2451 = i2449[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2448.bones = i2450
  i2448.updateWhenOffscreen = !!i2449[3]
  i2448.localBounds = i2449[4]
  request.r(i2449[5], i2449[6], 0, i2448, 'rootBone')
  var i2453 = i2449[7]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2453[i + 0]) );
  }
  i2448.blendShapesWeights = i2452
  i2448.enabled = !!i2449[8]
  request.r(i2449[9], i2449[10], 0, i2448, 'sharedMaterial')
  var i2455 = i2449[11]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2448.sharedMaterials = i2454
  i2448.receiveShadows = !!i2449[12]
  i2448.shadowCastingMode = i2449[13]
  i2448.sortingLayerID = i2449[14]
  i2448.sortingOrder = i2449[15]
  i2448.lightmapIndex = i2449[16]
  i2448.lightmapSceneIndex = i2449[17]
  i2448.lightmapScaleOffset = new pc.Vec4( i2449[18], i2449[19], i2449[20], i2449[21] )
  i2448.lightProbeUsage = i2449[22]
  i2448.reflectionProbeUsage = i2449[23]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2459 = data
  i2458.weight = i2459[0]
  return i2458
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2460 = root || request.c( 'GroundChecker' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'groundPoint')
  i2460.checkRadius = i2461[2]
  i2460.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2461[3] )
  return i2460
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2462 = root || request.c( 'CameraFollow' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'target')
  i2462.smoothTime = i2463[2]
  return i2462
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2464 = root || request.c( 'CameraLook' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'input')
  request.r(i2465[2], i2465[3], 0, i2464, 'yawPivot')
  request.r(i2465[4], i2465[5], 0, i2464, 'pitchPivot')
  i2464.minPitch = i2465[6]
  i2464.maxPitch = i2465[7]
  i2464.yaw = i2465[8]
  i2464.pitch = i2465[9]
  i2464.defaltYaw = i2465[10]
  i2464.defaltPitch = i2465[11]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2467 = data
  i2466.aspect = i2467[0]
  i2466.orthographic = !!i2467[1]
  i2466.orthographicSize = i2467[2]
  i2466.backgroundColor = new pc.Color(i2467[3], i2467[4], i2467[5], i2467[6])
  i2466.nearClipPlane = i2467[7]
  i2466.farClipPlane = i2467[8]
  i2466.fieldOfView = i2467[9]
  i2466.depth = i2467[10]
  i2466.clearFlags = i2467[11]
  i2466.cullingMask = i2467[12]
  i2466.rect = i2467[13]
  request.r(i2467[14], i2467[15], 0, i2466, 'targetTexture')
  i2466.usePhysicalProperties = !!i2467[16]
  i2466.focalLength = i2467[17]
  i2466.sensorSize = new pc.Vec2( i2467[18], i2467[19] )
  i2466.lensShift = new pc.Vec2( i2467[20], i2467[21] )
  i2466.gateFit = i2467[22]
  i2466.commandBufferCount = i2467[23]
  i2466.cameraType = i2467[24]
  i2466.enabled = !!i2467[25]
  return i2466
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2468 = root || request.c( 'CharacterInput' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'joystick')
  request.r(i2469[2], i2469[3], 0, i2468, 'jumpButton')
  return i2468
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2470 = root || request.c( 'InputManager' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'worldCamera')
  i2470.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2471[2] )
  i2470.touchSensitivity = i2471[3]
  i2470.mouseSensitivity = i2471[4]
  i2470.dragThreshold = i2471[5]
  return i2470
}

Deserializers["GameController"] = function (request, data, root) {
  var i2472 = root || request.c( 'GameController' )
  var i2473 = data
  i2472.timeToShowComplete = i2473[0]
  i2472.currentProgress = i2473[1]
  i2472.target = i2473[2]
  request.r(i2473[3], i2473[4], 0, i2472, 'progressText')
  request.r(i2473[5], i2473[6], 0, i2472, 'collectText')
  request.r(i2473[7], i2473[8], 0, i2472, '_cta')
  var i2475 = i2473[9]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2475.length; i += 2) {
  request.r(i2475[i + 0], i2475[i + 1], 1, i2474, '')
  }
  i2472.gifts = i2474
  request.r(i2473[10], i2473[11], 0, i2472, 'collect')
  request.r(i2473[12], i2473[13], 0, i2472, 'tut')
  request.r(i2473[14], i2473[15], 0, i2472, 'playerSpawn')
  request.r(i2473[16], i2473[17], 0, i2472, 'giftSpawn')
  request.r(i2473[18], i2473[19], 0, i2472, 'failUI')
  request.r(i2473[20], i2473[21], 0, i2472, 'playerMotor')
  i2472.failHeight = i2473[22]
  i2472.failOnlyAfterClimb = !!i2473[23]
  i2472.alwaysFailDepth = i2473[24]
  request.r(i2473[25], i2473[26], 0, i2472, 'winSound')
  request.r(i2473[27], i2473[28], 0, i2472, 'loseSound')
  i2472.failByFallDistance = !!i2473[29]
  i2472.maxSafeFall = i2473[30]
  request.r(i2473[31], i2473[32], 0, i2472, 'winEffect')
  i2472.sequentialGifts = !!i2473[33]
  i2472.progressOffset = i2473[34]
  i2472.progressTotal = i2473[35]
  request.r(i2473[36], i2473[37], 0, i2472, 'unlockPanel')
  request.r(i2473[38], i2473[39], 0, i2472, 'unlockCTA')
  i2472.unlockAutoInstallDelay = i2473[40]
  return i2472
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2478 = root || request.c( 'AudioController' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'musicSource')
  request.r(i2479[2], i2479[3], 0, i2478, 'poolParent')
  i2478.startSize = i2479[4]
  i2478.sfxVolumeScale = i2479[5]
  return i2478
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2480 = root || request.c( 'LunaController' )
  var i2481 = data
  i2480.LimitTimePlay = !!i2481[0]
  i2480.TimePlay = i2481[1]
  i2480.MonsterIndex = i2481[2]
  i2480.MonsterIndex2 = i2481[3]
  request.r(i2481[4], i2481[5], 0, i2480, 'monsterSelector')
  request.r(i2481[6], i2481[7], 0, i2480, 'monsterSelector2')
  var i2483 = i2481[8]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 1, i2482, '')
  }
  i2480.images = i2482
  request.r(i2481[9], i2481[10], 0, i2480, 'CTA')
  request.r(i2481[11], i2481[12], 0, i2480, 'clickOverlay')
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2487 = data
  i2486.ambientIntensity = i2487[0]
  i2486.reflectionIntensity = i2487[1]
  i2486.ambientMode = i2487[2]
  i2486.ambientLight = new pc.Color(i2487[3], i2487[4], i2487[5], i2487[6])
  i2486.ambientSkyColor = new pc.Color(i2487[7], i2487[8], i2487[9], i2487[10])
  i2486.ambientGroundColor = new pc.Color(i2487[11], i2487[12], i2487[13], i2487[14])
  i2486.ambientEquatorColor = new pc.Color(i2487[15], i2487[16], i2487[17], i2487[18])
  i2486.fogColor = new pc.Color(i2487[19], i2487[20], i2487[21], i2487[22])
  i2486.fogEndDistance = i2487[23]
  i2486.fogStartDistance = i2487[24]
  i2486.fogDensity = i2487[25]
  i2486.fog = !!i2487[26]
  request.r(i2487[27], i2487[28], 0, i2486, 'skybox')
  i2486.fogMode = i2487[29]
  var i2489 = i2487[30]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2489[i + 0]) );
  }
  i2486.lightmaps = i2488
  i2486.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2487[31], i2486.lightProbes)
  i2486.lightmapsMode = i2487[32]
  i2486.mixedBakeMode = i2487[33]
  i2486.environmentLightingMode = i2487[34]
  i2486.ambientProbe = new pc.SphericalHarmonicsL2(i2487[35])
  request.r(i2487[36], i2487[37], 0, i2486, 'customReflection')
  request.r(i2487[38], i2487[39], 0, i2486, 'defaultReflection')
  i2486.defaultReflectionMode = i2487[40]
  i2486.defaultReflectionResolution = i2487[41]
  i2486.sunLightObjectId = i2487[42]
  i2486.pixelLightCount = i2487[43]
  i2486.defaultReflectionHDR = !!i2487[44]
  i2486.hasLightDataAsset = !!i2487[45]
  i2486.hasManualGenerate = !!i2487[46]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'lightmapColor')
  request.r(i2493[2], i2493[3], 0, i2492, 'lightmapDirection')
  request.r(i2493[4], i2493[5], 0, i2492, 'shadowMask')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2494 = root || new UnityEngine.LightProbes()
  var i2495 = data
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2505[i + 0]));
  }
  i2502.ShaderCompilationErrors = i2504
  i2502.name = i2503[1]
  i2502.guid = i2503[2]
  var i2507 = i2503[3]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2502.shaderDefinedKeywords = i2506
  var i2509 = i2503[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2509[i + 0]) );
  }
  i2502.passes = i2508
  var i2511 = i2503[5]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2511[i + 0]) );
  }
  i2502.usePasses = i2510
  var i2513 = i2503[6]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2513[i + 0]) );
  }
  i2502.defaultParameterValues = i2512
  request.r(i2503[7], i2503[8], 0, i2502, 'unityFallbackShader')
  i2502.readDepth = !!i2503[9]
  i2502.hasDepthOnlyPass = !!i2503[10]
  i2502.isCreatedByShaderGraph = !!i2503[11]
  i2502.disableBatching = !!i2503[12]
  i2502.compiled = !!i2503[13]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2517 = data
  i2516.shaderName = i2517[0]
  i2516.errorMessage = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2522 = root || new pc.UnityShaderPass()
  var i2523 = data
  i2522.id = i2523[0]
  i2522.subShaderIndex = i2523[1]
  i2522.name = i2523[2]
  i2522.passType = i2523[3]
  i2522.grabPassTextureName = i2523[4]
  i2522.usePass = !!i2523[5]
  i2522.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[6], i2522.zTest)
  i2522.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[7], i2522.zWrite)
  i2522.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[8], i2522.culling)
  i2522.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[9], i2522.blending)
  i2522.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[10], i2522.alphaBlending)
  i2522.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[11], i2522.colorWriteMask)
  i2522.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[12], i2522.offsetUnits)
  i2522.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[13], i2522.offsetFactor)
  i2522.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[14], i2522.stencilRef)
  i2522.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[15], i2522.stencilReadMask)
  i2522.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[16], i2522.stencilWriteMask)
  i2522.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[17], i2522.stencilOp)
  i2522.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[18], i2522.stencilOpFront)
  i2522.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[19], i2522.stencilOpBack)
  var i2525 = i2523[20]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2525[i + 0]) );
  }
  i2522.tags = i2524
  var i2527 = i2523[21]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2522.passDefinedKeywords = i2526
  var i2529 = i2523[22]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2529[i + 0]) );
  }
  i2522.passDefinedKeywordGroups = i2528
  var i2531 = i2523[23]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2531[i + 0]) );
  }
  i2522.variants = i2530
  var i2533 = i2523[24]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2533[i + 0]) );
  }
  i2522.excludedVariants = i2532
  i2522.hasDepthReader = !!i2523[25]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2535 = data
  i2534.val = i2535[0]
  i2534.name = i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2537 = data
  i2536.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[0], i2536.src)
  i2536.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[1], i2536.dst)
  i2536.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[2], i2536.op)
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2539 = data
  i2538.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[0], i2538.pass)
  i2538.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[1], i2538.fail)
  i2538.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[2], i2538.zFail)
  i2538.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[3], i2538.comp)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.value = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( i2549[i + 0] );
  }
  i2546.keywords = i2548
  i2546.hasDiscard = !!i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2553 = data
  i2552.passId = i2553[0]
  i2552.subShaderIndex = i2553[1]
  var i2555 = i2553[2]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( i2555[i + 0] );
  }
  i2552.keywords = i2554
  i2552.vertexProgram = i2553[3]
  i2552.fragmentProgram = i2553[4]
  i2552.exportedForWebGl2 = !!i2553[5]
  i2552.readDepth = !!i2553[6]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'shader')
  i2558.pass = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2563 = data
  i2562.name = i2563[0]
  i2562.type = i2563[1]
  i2562.value = new pc.Vec4( i2563[2], i2563[3], i2563[4], i2563[5] )
  i2562.textureValue = i2563[6]
  i2562.shaderPropertyFlag = i2563[7]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2565 = data
  i2564.name = i2565[0]
  request.r(i2565[1], i2565[2], 0, i2564, 'texture')
  i2564.aabb = i2565[3]
  i2564.vertices = i2565[4]
  i2564.triangles = i2565[5]
  i2564.textureRect = UnityEngine.Rect.MinMaxRect(i2565[6], i2565[7], i2565[8], i2565[9])
  i2564.packedRect = UnityEngine.Rect.MinMaxRect(i2565[10], i2565[11], i2565[12], i2565[13])
  i2564.border = new pc.Vec4( i2565[14], i2565[15], i2565[16], i2565[17] )
  i2564.transparency = i2565[18]
  i2564.bounds = i2565[19]
  i2564.pixelsPerUnit = i2565[20]
  i2564.textureWidth = i2565[21]
  i2564.textureHeight = i2565[22]
  i2564.nativeSize = new pc.Vec2( i2565[23], i2565[24] )
  i2564.pivot = new pc.Vec2( i2565[25], i2565[26] )
  i2564.textureRectOffset = new pc.Vec2( i2565[27], i2565[28] )
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2567 = data
  i2566.name = i2567[0]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2569 = data
  i2568.name = i2569[0]
  i2568.wrapMode = i2569[1]
  i2568.isLooping = !!i2569[2]
  i2568.length = i2569[3]
  var i2571 = i2569[4]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2571[i + 0]) );
  }
  i2568.curves = i2570
  var i2573 = i2569[5]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2573[i + 0]) );
  }
  i2568.events = i2572
  i2568.halfPrecision = !!i2569[6]
  i2568._frameRate = i2569[7]
  i2568.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2569[8], i2568.localBounds)
  i2568.hasMuscleCurves = !!i2569[9]
  var i2575 = i2569[10]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2568.clipMuscleConstant = i2574
  i2568.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2569[11], i2568.clipBindingConstant)
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2579 = data
  i2578.path = i2579[0]
  i2578.hash = i2579[1]
  i2578.componentType = i2579[2]
  i2578.property = i2579[3]
  i2578.keys = i2579[4]
  var i2581 = i2579[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2581[i + 0]) );
  }
  i2578.objectReferenceKeys = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2585 = data
  i2584.time = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'value')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2589 = data
  i2588.functionName = i2589[0]
  i2588.floatParameter = i2589[1]
  i2588.intParameter = i2589[2]
  i2588.stringParameter = i2589[3]
  request.r(i2589[4], i2589[5], 0, i2588, 'objectReferenceParameter')
  i2588.time = i2589[6]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2591 = data
  i2590.center = new pc.Vec3( i2591[0], i2591[1], i2591[2] )
  i2590.extends = new pc.Vec3( i2591[3], i2591[4], i2591[5] )
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( i2597[i + 0] );
  }
  i2594.genericBindings = i2596
  var i2599 = i2595[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.pptrCurveMapping = i2598
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2601 = data
  i2600.name = i2601[0]
  var i2603 = i2601[1]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2603[i + 0]) );
  }
  i2600.layers = i2602
  var i2605 = i2601[2]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2605[i + 0]) );
  }
  i2600.parameters = i2604
  i2600.animationClips = i2601[3]
  i2600.avatarUnsupported = i2601[4]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.defaultWeight = i2609[1]
  i2608.blendingMode = i2609[2]
  i2608.avatarMask = i2609[3]
  i2608.syncedLayerIndex = i2609[4]
  i2608.syncedLayerAffectsTiming = !!i2609[5]
  i2608.syncedLayers = i2609[6]
  i2608.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2609[7], i2608.stateMachine)
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2611 = data
  i2610.id = i2611[0]
  i2610.name = i2611[1]
  i2610.path = i2611[2]
  var i2613 = i2611[3]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2613[i + 0]) );
  }
  i2610.states = i2612
  var i2615 = i2611[4]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2615[i + 0]) );
  }
  i2610.machines = i2614
  var i2617 = i2611[5]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2617[i + 0]) );
  }
  i2610.entryStateTransitions = i2616
  var i2619 = i2611[6]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2619[i + 0]) );
  }
  i2610.exitStateTransitions = i2618
  var i2621 = i2611[7]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2621[i + 0]) );
  }
  i2610.anyStateTransitions = i2620
  i2610.defaultStateId = i2611[8]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2625 = data
  i2624.id = i2625[0]
  i2624.name = i2625[1]
  i2624.cycleOffset = i2625[2]
  i2624.cycleOffsetParameter = i2625[3]
  i2624.cycleOffsetParameterActive = !!i2625[4]
  i2624.mirror = !!i2625[5]
  i2624.mirrorParameter = i2625[6]
  i2624.mirrorParameterActive = !!i2625[7]
  i2624.motionId = i2625[8]
  i2624.nameHash = i2625[9]
  i2624.fullPathHash = i2625[10]
  i2624.speed = i2625[11]
  i2624.speedParameter = i2625[12]
  i2624.speedParameterActive = !!i2625[13]
  i2624.tag = i2625[14]
  i2624.tagHash = i2625[15]
  i2624.writeDefaultValues = !!i2625[16]
  var i2627 = i2625[17]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 2, i2626, '')
  }
  i2624.behaviours = i2626
  var i2629 = i2625[18]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2629[i + 0]) );
  }
  i2624.transitions = i2628
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2635 = data
  i2634.fullPath = i2635[0]
  i2634.canTransitionToSelf = !!i2635[1]
  i2634.duration = i2635[2]
  i2634.exitTime = i2635[3]
  i2634.hasExitTime = !!i2635[4]
  i2634.hasFixedDuration = !!i2635[5]
  i2634.interruptionSource = i2635[6]
  i2634.offset = i2635[7]
  i2634.orderedInterruption = !!i2635[8]
  i2634.destinationStateId = i2635[9]
  i2634.isExit = !!i2635[10]
  i2634.mute = !!i2635[11]
  i2634.solo = !!i2635[12]
  var i2637 = i2635[13]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2637[i + 0]) );
  }
  i2634.conditions = i2636
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2641 = data
  i2640.mode = i2641[0]
  i2640.parameter = i2641[1]
  i2640.threshold = i2641[2]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2647 = data
  i2646.destinationStateId = i2647[0]
  i2646.isExit = !!i2647[1]
  i2646.mute = !!i2647[2]
  i2646.solo = !!i2647[3]
  var i2649 = i2647[4]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2649[i + 0]) );
  }
  i2646.conditions = i2648
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2653 = data
  i2652.defaultBool = !!i2653[0]
  i2652.defaultFloat = i2653[1]
  i2652.defaultInt = i2653[2]
  i2652.name = i2653[3]
  i2652.nameHash = i2653[4]
  i2652.type = i2653[5]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2655 = data
  i2654.name = i2655[0]
  request.r(i2655[1], i2655[2], 0, i2654, '_runtimeAnimatorController')
  var i2657 = i2655[3]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2654._originalAnimationClips = i2656
  var i2659 = i2655[4]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2654._overrideAnimationClips = i2658
  var i2661 = i2655[5]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 2, i2660, '')
  }
  i2654._animationClips = i2660
  var i2663 = i2655[6]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('UnityEngine.AnimationClipPair', i2663[i + 0]) );
  }
  i2654._animationClipPairs = i2662
  return i2654
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'originalClip')
  request.r(i2669[2], i2669[3], 0, i2668, 'overrideClip')
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.bytes64 = i2671[1]
  i2670.data = i2671[2]
  return i2670
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2672 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2673 = data
  i2672.normalStyle = i2673[0]
  i2672.normalSpacingOffset = i2673[1]
  i2672.boldStyle = i2673[2]
  i2672.boldSpacing = i2673[3]
  i2672.italicStyle = i2673[4]
  i2672.tabSize = i2673[5]
  request.r(i2673[6], i2673[7], 0, i2672, 'atlas')
  i2672.m_SourceFontFileGUID = i2673[8]
  i2672.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2673[9], i2672.m_CreationSettings)
  request.r(i2673[10], i2673[11], 0, i2672, 'm_SourceFontFile')
  i2672.m_SourceFontFilePath = i2673[12]
  i2672.m_AtlasPopulationMode = i2673[13]
  i2672.InternalDynamicOS = !!i2673[14]
  var i2675 = i2673[15]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('UnityEngine.TextCore.Glyph', i2675[i + 0]));
  }
  i2672.m_GlyphTable = i2674
  var i2677 = i2673[16]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('TMPro.TMP_Character', i2677[i + 0]));
  }
  i2672.m_CharacterTable = i2676
  var i2679 = i2673[17]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 2) {
  request.r(i2679[i + 0], i2679[i + 1], 2, i2678, '')
  }
  i2672.m_AtlasTextures = i2678
  i2672.m_AtlasTextureIndex = i2673[18]
  i2672.m_IsMultiAtlasTexturesEnabled = !!i2673[19]
  i2672.m_GetFontFeatures = !!i2673[20]
  i2672.m_ClearDynamicDataOnBuild = !!i2673[21]
  i2672.m_AtlasWidth = i2673[22]
  i2672.m_AtlasHeight = i2673[23]
  i2672.m_AtlasPadding = i2673[24]
  i2672.m_AtlasRenderMode = i2673[25]
  var i2681 = i2673[26]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('UnityEngine.TextCore.GlyphRect', i2681[i + 0]));
  }
  i2672.m_UsedGlyphRects = i2680
  var i2683 = i2673[27]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('UnityEngine.TextCore.GlyphRect', i2683[i + 0]));
  }
  i2672.m_FreeGlyphRects = i2682
  i2672.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2673[28], i2672.m_FontFeatureTable)
  i2672.m_ShouldReimportFontFeatures = !!i2673[29]
  var i2685 = i2673[30]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 1, i2684, '')
  }
  i2672.m_FallbackFontAssetTable = i2684
  var i2687 = i2673[31]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('TMPro.TMP_FontWeightPair', i2687[i + 0]) );
  }
  i2672.m_FontWeightTable = i2686
  var i2689 = i2673[32]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('TMPro.TMP_FontWeightPair', i2689[i + 0]) );
  }
  i2672.fontWeights = i2688
  i2672.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2673[33], i2672.m_fontInfo)
  var i2691 = i2673[34]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('TMPro.TMP_Glyph', i2691[i + 0]));
  }
  i2672.m_glyphInfoList = i2690
  i2672.m_KerningTable = request.d('TMPro.KerningTable', i2673[35], i2672.m_KerningTable)
  var i2693 = i2673[36]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 1, i2692, '')
  }
  i2672.fallbackFontAssets = i2692
  i2672.m_Version = i2673[37]
  i2672.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2673[38], i2672.m_FaceInfo)
  request.r(i2673[39], i2673[40], 0, i2672, 'm_Material')
  return i2672
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2695 = data
  i2694.sourceFontFileName = i2695[0]
  i2694.sourceFontFileGUID = i2695[1]
  i2694.faceIndex = i2695[2]
  i2694.pointSizeSamplingMode = i2695[3]
  i2694.pointSize = i2695[4]
  i2694.padding = i2695[5]
  i2694.paddingMode = i2695[6]
  i2694.packingMode = i2695[7]
  i2694.atlasWidth = i2695[8]
  i2694.atlasHeight = i2695[9]
  i2694.characterSetSelectionMode = i2695[10]
  i2694.characterSequence = i2695[11]
  i2694.referencedFontAssetGUID = i2695[12]
  i2694.referencedTextAssetGUID = i2695[13]
  i2694.fontStyle = i2695[14]
  i2694.fontStyleModifier = i2695[15]
  i2694.renderMode = i2695[16]
  i2694.includeFontFeatures = !!i2695[17]
  return i2694
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2699 = data
  i2698.m_Index = i2699[0]
  i2698.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2699[1], i2698.m_Metrics)
  i2698.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2699[2], i2698.m_GlyphRect)
  i2698.m_Scale = i2699[3]
  i2698.m_AtlasIndex = i2699[4]
  i2698.m_ClassDefinitionType = i2699[5]
  return i2698
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2701 = data
  i2700.m_Width = i2701[0]
  i2700.m_Height = i2701[1]
  i2700.m_HorizontalBearingX = i2701[2]
  i2700.m_HorizontalBearingY = i2701[3]
  i2700.m_HorizontalAdvance = i2701[4]
  return i2700
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2703 = data
  i2702.m_X = i2703[0]
  i2702.m_Y = i2703[1]
  i2702.m_Width = i2703[2]
  i2702.m_Height = i2703[3]
  return i2702
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_Character' )
  var i2707 = data
  i2706.m_ElementType = i2707[0]
  i2706.m_Unicode = i2707[1]
  i2706.m_GlyphIndex = i2707[2]
  i2706.m_Scale = i2707[3]
  return i2706
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2712 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('TMPro.MultipleSubstitutionRecord', i2715[i + 0]));
  }
  i2712.m_MultipleSubstitutionRecords = i2714
  var i2717 = i2713[1]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('TMPro.LigatureSubstitutionRecord', i2717[i + 0]));
  }
  i2712.m_LigatureSubstitutionRecords = i2716
  var i2719 = i2713[2]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2719[i + 0]));
  }
  i2712.m_GlyphPairAdjustmentRecords = i2718
  var i2721 = i2713[3]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2721[i + 0]));
  }
  i2712.m_MarkToBaseAdjustmentRecords = i2720
  var i2723 = i2713[4]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2723[i + 0]));
  }
  i2712.m_MarkToMarkAdjustmentRecords = i2722
  return i2712
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2727 = data
  i2726.m_TargetGlyphID = i2727[0]
  i2726.m_SubstituteGlyphIDs = i2727[1]
  return i2726
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2730 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2731 = data
  i2730.m_ComponentGlyphIDs = i2731[0]
  i2730.m_LigatureGlyphID = i2731[1]
  return i2730
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2735 = data
  i2734.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2735[0], i2734.m_FirstAdjustmentRecord)
  i2734.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2735[1], i2734.m_SecondAdjustmentRecord)
  i2734.m_FeatureLookupFlags = i2735[2]
  return i2734
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2739 = data
  i2738.m_BaseGlyphID = i2739[0]
  i2738.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2739[1], i2738.m_BaseGlyphAnchorPoint)
  i2738.m_MarkGlyphID = i2739[2]
  i2738.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2739[3], i2738.m_MarkPositionAdjustment)
  return i2738
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2743 = data
  i2742.m_BaseMarkGlyphID = i2743[0]
  i2742.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2743[1], i2742.m_BaseMarkGlyphAnchorPoint)
  i2742.m_CombiningMarkGlyphID = i2743[2]
  i2742.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2743[3], i2742.m_CombiningMarkPositionAdjustment)
  return i2742
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'regularTypeface')
  request.r(i2749[2], i2749[3], 0, i2748, 'italicTypeface')
  return i2748
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2751 = data
  i2750.Name = i2751[0]
  i2750.PointSize = i2751[1]
  i2750.Scale = i2751[2]
  i2750.CharacterCount = i2751[3]
  i2750.LineHeight = i2751[4]
  i2750.Baseline = i2751[5]
  i2750.Ascender = i2751[6]
  i2750.CapHeight = i2751[7]
  i2750.Descender = i2751[8]
  i2750.CenterLine = i2751[9]
  i2750.SuperscriptOffset = i2751[10]
  i2750.SubscriptOffset = i2751[11]
  i2750.SubSize = i2751[12]
  i2750.Underline = i2751[13]
  i2750.UnderlineThickness = i2751[14]
  i2750.strikethrough = i2751[15]
  i2750.strikethroughThickness = i2751[16]
  i2750.TabWidth = i2751[17]
  i2750.Padding = i2751[18]
  i2750.AtlasWidth = i2751[19]
  i2750.AtlasHeight = i2751[20]
  return i2750
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2755 = data
  i2754.id = i2755[0]
  i2754.x = i2755[1]
  i2754.y = i2755[2]
  i2754.width = i2755[3]
  i2754.height = i2755[4]
  i2754.xOffset = i2755[5]
  i2754.yOffset = i2755[6]
  i2754.xAdvance = i2755[7]
  i2754.scale = i2755[8]
  return i2754
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.KerningTable' )
  var i2757 = data
  var i2759 = i2757[0]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(request.d('TMPro.KerningPair', i2759[i + 0]));
  }
  i2756.kerningPairs = i2758
  return i2756
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.KerningPair' )
  var i2763 = data
  i2762.xOffset = i2763[0]
  i2762.m_FirstGlyph = i2763[1]
  i2762.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2763[2], i2762.m_FirstGlyphAdjustments)
  i2762.m_SecondGlyph = i2763[3]
  i2762.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2763[4], i2762.m_SecondGlyphAdjustments)
  i2762.m_IgnoreSpacingAdjustments = !!i2763[5]
  return i2762
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2765 = data
  i2764.m_FaceIndex = i2765[0]
  i2764.m_FamilyName = i2765[1]
  i2764.m_StyleName = i2765[2]
  i2764.m_PointSize = i2765[3]
  i2764.m_Scale = i2765[4]
  i2764.m_UnitsPerEM = i2765[5]
  i2764.m_LineHeight = i2765[6]
  i2764.m_AscentLine = i2765[7]
  i2764.m_CapLine = i2765[8]
  i2764.m_MeanLine = i2765[9]
  i2764.m_Baseline = i2765[10]
  i2764.m_DescentLine = i2765[11]
  i2764.m_SuperscriptOffset = i2765[12]
  i2764.m_SuperscriptSize = i2765[13]
  i2764.m_SubscriptOffset = i2765[14]
  i2764.m_SubscriptSize = i2765[15]
  i2764.m_UnderlineOffset = i2765[16]
  i2764.m_UnderlineThickness = i2765[17]
  i2764.m_StrikethroughOffset = i2765[18]
  i2764.m_StrikethroughThickness = i2765[19]
  i2764.m_TabWidth = i2765[20]
  return i2764
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2767 = data
  i2766.useSafeMode = !!i2767[0]
  i2766.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2767[1], i2766.safeModeOptions)
  i2766.timeScale = i2767[2]
  i2766.unscaledTimeScale = i2767[3]
  i2766.useSmoothDeltaTime = !!i2767[4]
  i2766.maxSmoothUnscaledTime = i2767[5]
  i2766.rewindCallbackMode = i2767[6]
  i2766.showUnityEditorReport = !!i2767[7]
  i2766.logBehaviour = i2767[8]
  i2766.drawGizmos = !!i2767[9]
  i2766.defaultRecyclable = !!i2767[10]
  i2766.defaultAutoPlay = i2767[11]
  i2766.defaultUpdateType = i2767[12]
  i2766.defaultTimeScaleIndependent = !!i2767[13]
  i2766.defaultEaseType = i2767[14]
  i2766.defaultEaseOvershootOrAmplitude = i2767[15]
  i2766.defaultEasePeriod = i2767[16]
  i2766.defaultAutoKill = !!i2767[17]
  i2766.defaultLoopType = i2767[18]
  i2766.debugMode = !!i2767[19]
  i2766.debugStoreTargetId = !!i2767[20]
  i2766.showPreviewPanel = !!i2767[21]
  i2766.storeSettingsLocation = i2767[22]
  i2766.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2767[23], i2766.modules)
  i2766.createASMDEF = !!i2767[24]
  i2766.showPlayingTweens = !!i2767[25]
  i2766.showPausedTweens = !!i2767[26]
  return i2766
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2769 = data
  i2768.logBehaviour = i2769[0]
  i2768.nestedTweenFailureBehaviour = i2769[1]
  return i2768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2771 = data
  i2770.showPanel = !!i2771[0]
  i2770.audioEnabled = !!i2771[1]
  i2770.physicsEnabled = !!i2771[2]
  i2770.physics2DEnabled = !!i2771[3]
  i2770.spriteEnabled = !!i2771[4]
  i2770.uiEnabled = !!i2771[5]
  i2770.textMeshProEnabled = !!i2771[6]
  i2770.tk2DEnabled = !!i2771[7]
  i2770.deAudioEnabled = !!i2771[8]
  i2770.deUnityExtendedEnabled = !!i2771[9]
  i2770.epoOutlineEnabled = !!i2771[10]
  return i2770
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.TMP_Settings' )
  var i2773 = data
  i2772.assetVersion = i2773[0]
  i2772.m_TextWrappingMode = i2773[1]
  i2772.m_enableKerning = !!i2773[2]
  var i2775 = i2773[3]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(i2775[i + 0]);
  }
  i2772.m_ActiveFontFeatures = i2774
  i2772.m_enableExtraPadding = !!i2773[4]
  i2772.m_enableTintAllSprites = !!i2773[5]
  i2772.m_enableParseEscapeCharacters = !!i2773[6]
  i2772.m_EnableRaycastTarget = !!i2773[7]
  i2772.m_GetFontFeaturesAtRuntime = !!i2773[8]
  i2772.m_missingGlyphCharacter = i2773[9]
  i2772.m_ClearDynamicDataOnBuild = !!i2773[10]
  i2772.m_warningsDisabled = !!i2773[11]
  request.r(i2773[12], i2773[13], 0, i2772, 'm_defaultFontAsset')
  i2772.m_defaultFontAssetPath = i2773[14]
  i2772.m_defaultFontSize = i2773[15]
  i2772.m_defaultAutoSizeMinRatio = i2773[16]
  i2772.m_defaultAutoSizeMaxRatio = i2773[17]
  i2772.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2773[18], i2773[19] )
  i2772.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2773[20], i2773[21] )
  i2772.m_autoSizeTextContainer = !!i2773[22]
  i2772.m_IsTextObjectScaleStatic = !!i2773[23]
  var i2777 = i2773[24]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2777.length; i += 2) {
  request.r(i2777[i + 0], i2777[i + 1], 1, i2776, '')
  }
  i2772.m_fallbackFontAssets = i2776
  i2772.m_matchMaterialPreset = !!i2773[25]
  i2772.m_HideSubTextObjects = !!i2773[26]
  request.r(i2773[27], i2773[28], 0, i2772, 'm_defaultSpriteAsset')
  i2772.m_defaultSpriteAssetPath = i2773[29]
  i2772.m_enableEmojiSupport = !!i2773[30]
  i2772.m_MissingCharacterSpriteUnicode = i2773[31]
  var i2779 = i2773[32]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 1, i2778, '')
  }
  i2772.m_EmojiFallbackTextAssets = i2778
  i2772.m_defaultColorGradientPresetsPath = i2773[33]
  request.r(i2773[34], i2773[35], 0, i2772, 'm_defaultStyleSheet')
  i2772.m_StyleSheetsResourcePath = i2773[36]
  request.r(i2773[37], i2773[38], 0, i2772, 'm_leadingCharacters')
  request.r(i2773[39], i2773[40], 0, i2772, 'm_followingCharacters')
  i2772.m_UseModernHangulLineBreakingRules = !!i2773[41]
  return i2772
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2783 = data
  request.r(i2783[0], i2783[1], 0, i2782, 'spriteSheet')
  var i2785 = i2783[2]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.add(request.d('TMPro.TMP_Sprite', i2785[i + 0]));
  }
  i2782.spriteInfoList = i2784
  var i2787 = i2783[3]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 1, i2786, '')
  }
  i2782.fallbackSpriteAssets = i2786
  var i2789 = i2783[4]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.TMP_SpriteCharacter', i2789[i + 0]));
  }
  i2782.m_SpriteCharacterTable = i2788
  var i2791 = i2783[5]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('TMPro.TMP_SpriteGlyph', i2791[i + 0]));
  }
  i2782.m_GlyphTable = i2790
  i2782.m_Version = i2783[6]
  i2782.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2783[7], i2782.m_FaceInfo)
  request.r(i2783[8], i2783[9], 0, i2782, 'm_Material')
  return i2782
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2795 = data
  i2794.name = i2795[0]
  i2794.hashCode = i2795[1]
  i2794.unicode = i2795[2]
  i2794.pivot = new pc.Vec2( i2795[3], i2795[4] )
  request.r(i2795[5], i2795[6], 0, i2794, 'sprite')
  i2794.id = i2795[7]
  i2794.x = i2795[8]
  i2794.y = i2795[9]
  i2794.width = i2795[10]
  i2794.height = i2795[11]
  i2794.xOffset = i2795[12]
  i2794.yOffset = i2795[13]
  i2794.xAdvance = i2795[14]
  i2794.scale = i2795[15]
  return i2794
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2800 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2801 = data
  i2800.m_Name = i2801[0]
  i2800.m_ElementType = i2801[1]
  i2800.m_Unicode = i2801[2]
  i2800.m_GlyphIndex = i2801[3]
  i2800.m_Scale = i2801[4]
  return i2800
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'sprite')
  i2804.m_Index = i2805[2]
  i2804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2805[3], i2804.m_Metrics)
  i2804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2805[4], i2804.m_GlyphRect)
  i2804.m_Scale = i2805[5]
  i2804.m_AtlasIndex = i2805[6]
  i2804.m_ClassDefinitionType = i2805[7]
  return i2804
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('TMPro.TMP_Style', i2809[i + 0]));
  }
  i2806.m_StyleList = i2808
  return i2806
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_Style' )
  var i2813 = data
  i2812.m_Name = i2813[0]
  i2812.m_HashCode = i2813[1]
  i2812.m_OpeningDefinition = i2813[2]
  i2812.m_ClosingDefinition = i2813[3]
  i2812.m_OpeningTagArray = i2813[4]
  i2812.m_ClosingTagArray = i2813[5]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2817[i + 0]) );
  }
  i2814.files = i2816
  i2814.componentToPrefabIds = i2815[1]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2821 = data
  i2820.path = i2821[0]
  request.r(i2821[1], i2821[2], 0, i2820, 'unityObject')
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2825[i + 0]) );
  }
  i2822.scriptsExecutionOrder = i2824
  var i2827 = i2823[1]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2827[i + 0]) );
  }
  i2822.sortingLayers = i2826
  var i2829 = i2823[2]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2829[i + 0]) );
  }
  i2822.cullingLayers = i2828
  i2822.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2823[3], i2822.timeSettings)
  i2822.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2823[4], i2822.physicsSettings)
  i2822.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2823[5], i2822.physics2DSettings)
  i2822.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2823[6], i2822.qualitySettings)
  i2822.enableRealtimeShadows = !!i2823[7]
  i2822.enableAutoInstancing = !!i2823[8]
  i2822.enableStaticBatching = !!i2823[9]
  i2822.enableDynamicBatching = !!i2823[10]
  i2822.usePreservativeDynamicBatching = !!i2823[11]
  i2822.lightmapEncodingQuality = i2823[12]
  i2822.desiredColorSpace = i2823[13]
  var i2831 = i2823[14]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( i2831[i + 0] );
  }
  i2822.allTags = i2830
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2835 = data
  i2834.name = i2835[0]
  i2834.value = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2839 = data
  i2838.id = i2839[0]
  i2838.name = i2839[1]
  i2838.value = i2839[2]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2843 = data
  i2842.id = i2843[0]
  i2842.name = i2843[1]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2845 = data
  i2844.fixedDeltaTime = i2845[0]
  i2844.maximumDeltaTime = i2845[1]
  i2844.timeScale = i2845[2]
  i2844.maximumParticleTimestep = i2845[3]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2847 = data
  i2846.gravity = new pc.Vec3( i2847[0], i2847[1], i2847[2] )
  i2846.defaultSolverIterations = i2847[3]
  i2846.bounceThreshold = i2847[4]
  i2846.autoSyncTransforms = !!i2847[5]
  i2846.autoSimulation = !!i2847[6]
  var i2849 = i2847[7]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2849[i + 0]) );
  }
  i2846.collisionMatrix = i2848
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2853 = data
  i2852.enabled = !!i2853[0]
  i2852.layerId = i2853[1]
  i2852.otherLayerId = i2853[2]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2855 = data
  request.r(i2855[0], i2855[1], 0, i2854, 'material')
  i2854.gravity = new pc.Vec2( i2855[2], i2855[3] )
  i2854.positionIterations = i2855[4]
  i2854.velocityIterations = i2855[5]
  i2854.velocityThreshold = i2855[6]
  i2854.maxLinearCorrection = i2855[7]
  i2854.maxAngularCorrection = i2855[8]
  i2854.maxTranslationSpeed = i2855[9]
  i2854.maxRotationSpeed = i2855[10]
  i2854.baumgarteScale = i2855[11]
  i2854.baumgarteTOIScale = i2855[12]
  i2854.timeToSleep = i2855[13]
  i2854.linearSleepTolerance = i2855[14]
  i2854.angularSleepTolerance = i2855[15]
  i2854.defaultContactOffset = i2855[16]
  i2854.autoSimulation = !!i2855[17]
  i2854.queriesHitTriggers = !!i2855[18]
  i2854.queriesStartInColliders = !!i2855[19]
  i2854.callbacksOnDisable = !!i2855[20]
  i2854.reuseCollisionCallbacks = !!i2855[21]
  i2854.autoSyncTransforms = !!i2855[22]
  var i2857 = i2855[23]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2857[i + 0]) );
  }
  i2854.collisionMatrix = i2856
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.layerId = i2861[1]
  i2860.otherLayerId = i2861[2]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2863 = data
  var i2865 = i2863[0]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2865[i + 0]) );
  }
  i2862.qualityLevels = i2864
  var i2867 = i2863[1]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( i2867[i + 0] );
  }
  i2862.names = i2866
  i2862.shadows = i2863[2]
  i2862.anisotropicFiltering = i2863[3]
  i2862.antiAliasing = i2863[4]
  i2862.lodBias = i2863[5]
  i2862.shadowCascades = i2863[6]
  i2862.shadowDistance = i2863[7]
  i2862.shadowmaskMode = i2863[8]
  i2862.shadowProjection = i2863[9]
  i2862.shadowResolution = i2863[10]
  i2862.softParticles = !!i2863[11]
  i2862.softVegetation = !!i2863[12]
  i2862.activeColorSpace = i2863[13]
  i2862.desiredColorSpace = i2863[14]
  i2862.masterTextureLimit = i2863[15]
  i2862.maxQueuedFrames = i2863[16]
  i2862.particleRaycastBudget = i2863[17]
  i2862.pixelLightCount = i2863[18]
  i2862.realtimeReflectionProbes = !!i2863[19]
  i2862.shadowCascade2Split = i2863[20]
  i2862.shadowCascade4Split = new pc.Vec3( i2863[21], i2863[22], i2863[23] )
  i2862.streamingMipmapsActive = !!i2863[24]
  i2862.vSyncCount = i2863[25]
  i2862.asyncUploadBufferSize = i2863[26]
  i2862.asyncUploadTimeSlice = i2863[27]
  i2862.billboardsFaceCameraPosition = !!i2863[28]
  i2862.shadowNearPlaneOffset = i2863[29]
  i2862.streamingMipmapsMemoryBudget = i2863[30]
  i2862.maximumLODLevel = i2863[31]
  i2862.streamingMipmapsAddAllCameras = !!i2863[32]
  i2862.streamingMipmapsMaxLevelReduction = i2863[33]
  i2862.streamingMipmapsRenderersPerFrame = i2863[34]
  i2862.resolutionScalingFixedDPIFactor = i2863[35]
  i2862.streamingMipmapsMaxFileIORequests = i2863[36]
  i2862.currentQualityLevel = i2863[37]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2871 = data
  i2870.name = i2871[0]
  var i2873 = i2871[1]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2873[i + 0]) );
  }
  i2870.tos = i2872
  var i2875 = i2871[2]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2870.constant = i2874
  i2870.isValid = !!i2871[3]
  i2870.isHuman = !!i2871[4]
  i2870.hasRootMotion = !!i2871[5]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2879 = data
  i2878.hash = i2879[0]
  i2878.path = i2879[1]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2883 = data
  i2882.weight = i2883[0]
  i2882.vertices = i2883[1]
  i2882.normals = i2883[2]
  i2882.tangents = i2883[3]
  return i2882
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'm_ObjectArgument')
  i2884.m_ObjectArgumentAssemblyTypeName = i2885[2]
  i2884.m_IntArgument = i2885[3]
  i2884.m_FloatArgument = i2885[4]
  i2884.m_StringArgument = i2885[5]
  i2884.m_BoolArgument = !!i2885[6]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[53],"76":[57],"77":[33],"78":[33],"79":[33],"80":[33],"81":[33],"82":[33],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[57],"98":[5],"99":[100],"101":[100],"16":[15],"49":[48],"102":[33],"103":[104],"20":[17],"105":[15],"106":[22,15],"107":[5],"108":[22,15],"109":[15],"110":[15],"111":[5,15],"28":[15,22],"112":[113],"114":[113],"115":[113],"116":[15],"117":[15],"18":[16],"23":[22,15],"118":[15],"17":[16],"119":[15],"120":[15],"121":[15],"122":[15],"123":[15],"124":[15],"125":[15],"27":[15],"126":[15],"127":[22,15],"128":[15],"129":[15],"130":[15],"131":[15],"132":[22,15],"133":[15],"134":[13],"135":[13],"14":[13],"136":[13],"137":[57],"138":[57]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","SoundHint","MonsterSelector","UnityEngine.GameObject","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","CharacterCollect","UnityEngine.AudioSource","FootstepAudio","UnityEngine.AnimatorOverrideController","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Elevator","Ladder","UnityEngine.Collider","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/12/2026 10:20:45";

Deserializers.lunaDaysRunning = "14.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_DatDV_FSAHM_V11_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1675";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4824";

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

Deserializers.buildID = "24d74b66-1ec7-4c7c-a133-eb72264f203b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

