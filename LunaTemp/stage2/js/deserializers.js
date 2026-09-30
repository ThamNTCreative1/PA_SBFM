var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.JointSpring' )
  var i2185 = data
  i2184.spring = i2185[0]
  i2184.damper = i2185[1]
  i2184.targetPosition = i2185[2]
  return i2184
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointMotor' )
  var i2187 = data
  i2186.m_TargetVelocity = i2187[0]
  i2186.m_Force = i2187[1]
  i2186.m_FreeSpin = i2187[2]
  return i2186
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointLimits' )
  var i2189 = data
  i2188.m_Min = i2189[0]
  i2188.m_Max = i2189[1]
  i2188.m_Bounciness = i2189[2]
  i2188.m_BounceMinVelocity = i2189[3]
  i2188.m_ContactDistance = i2189[4]
  i2188.minBounce = i2189[5]
  i2188.maxBounce = i2189[6]
  return i2188
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointDrive' )
  var i2191 = data
  i2190.m_PositionSpring = i2191[0]
  i2190.m_PositionDamper = i2191[1]
  i2190.m_MaximumForce = i2191[2]
  i2190.m_UseAcceleration = i2191[3]
  return i2190
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2193 = data
  i2192.m_Spring = i2193[0]
  i2192.m_Damper = i2193[1]
  return i2192
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2195 = data
  i2194.m_Limit = i2195[0]
  i2194.m_Bounciness = i2195[1]
  i2194.m_ContactDistance = i2195[2]
  return i2194
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2197 = data
  i2196.m_ExtremumSlip = i2197[0]
  i2196.m_ExtremumValue = i2197[1]
  i2196.m_AsymptoteSlip = i2197[2]
  i2196.m_AsymptoteValue = i2197[3]
  i2196.m_Stiffness = i2197[4]
  return i2196
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2199 = data
  i2198.m_LowerAngle = i2199[0]
  i2198.m_UpperAngle = i2199[1]
  return i2198
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2201 = data
  i2200.m_MotorSpeed = i2201[0]
  i2200.m_MaximumMotorTorque = i2201[1]
  return i2200
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2203 = data
  i2202.m_DampingRatio = i2203[0]
  i2202.m_Frequency = i2203[1]
  i2202.m_Angle = i2203[2]
  return i2202
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2205 = data
  i2204.m_LowerTranslation = i2205[0]
  i2204.m_UpperTranslation = i2205[1]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.width = i2207[1]
  i2206.height = i2207[2]
  i2206.mipmapCount = i2207[3]
  i2206.anisoLevel = i2207[4]
  i2206.filterMode = i2207[5]
  i2206.hdr = !!i2207[6]
  i2206.format = i2207[7]
  i2206.wrapMode = i2207[8]
  i2206.alphaIsTransparency = !!i2207[9]
  i2206.alphaSource = i2207[10]
  i2206.graphicsFormat = i2207[11]
  i2206.sRGBTexture = !!i2207[12]
  i2206.desiredColorSpace = i2207[13]
  i2206.wrapU = i2207[14]
  i2206.wrapV = i2207[15]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2208 = root || new pc.UnityMaterial()
  var i2209 = data
  i2208.name = i2209[0]
  request.r(i2209[1], i2209[2], 0, i2208, 'shader')
  i2208.renderQueue = i2209[3]
  i2208.enableInstancing = !!i2209[4]
  var i2211 = i2209[5]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2211[i + 0]) );
  }
  i2208.floatParameters = i2210
  var i2213 = i2209[6]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2213[i + 0]) );
  }
  i2208.colorParameters = i2212
  var i2215 = i2209[7]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2215[i + 0]) );
  }
  i2208.vectorParameters = i2214
  var i2217 = i2209[8]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2217[i + 0]) );
  }
  i2208.textureParameters = i2216
  var i2219 = i2209[9]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2219[i + 0]) );
  }
  i2208.materialFlags = i2218
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2223 = data
  i2222.name = i2223[0]
  i2222.value = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.value = new pc.Color(i2227[1], i2227[2], i2227[3], i2227[4])
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.value = new pc.Vec4( i2231[1], i2231[2], i2231[3], i2231[4] )
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2235 = data
  i2234.name = i2235[0]
  request.r(i2235[1], i2235[2], 0, i2234, 'value')
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.enabled = !!i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.halfPrecision = !!i2241[1]
  i2240.useSimplification = !!i2241[2]
  i2240.useUInt32IndexFormat = !!i2241[3]
  i2240.vertexCount = i2241[4]
  i2240.aabb = i2241[5]
  var i2243 = i2241[6]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( !!i2243[i + 0] );
  }
  i2240.streams = i2242
  i2240.vertices = i2241[7]
  var i2245 = i2241[8]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2245[i + 0]) );
  }
  i2240.subMeshes = i2244
  var i2247 = i2241[9]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 16) {
    i2246.push( new pc.Mat4().setData(i2247[i + 0], i2247[i + 1], i2247[i + 2], i2247[i + 3],  i2247[i + 4], i2247[i + 5], i2247[i + 6], i2247[i + 7],  i2247[i + 8], i2247[i + 9], i2247[i + 10], i2247[i + 11],  i2247[i + 12], i2247[i + 13], i2247[i + 14], i2247[i + 15]) );
  }
  i2240.bindposes = i2246
  var i2249 = i2241[10]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2249[i + 0]) );
  }
  i2240.blendShapes = i2248
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2255 = data
  i2254.triangles = i2255[0]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2261 = data
  i2260.name = i2261[0]
  var i2263 = i2261[1]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2263[i + 0]) );
  }
  i2260.frames = i2262
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.atlasId = i2265[1]
  i2264.mipmapCount = i2265[2]
  i2264.hdr = !!i2265[3]
  i2264.size = i2265[4]
  i2264.anisoLevel = i2265[5]
  i2264.filterMode = i2265[6]
  var i2267 = i2265[7]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 4) {
    i2266.push( UnityEngine.Rect.MinMaxRect(i2267[i + 0], i2267[i + 1], i2267[i + 2], i2267[i + 3]) );
  }
  i2264.rects = i2266
  i2264.wrapU = i2265[8]
  i2264.wrapV = i2265[9]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2271 = data
  i2270.name = i2271[0]
  i2270.index = i2271[1]
  i2270.startup = !!i2271[2]
  return i2270
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'm_FirstSelected')
  i2272.m_sendNavigationEvents = !!i2273[2]
  i2272.m_DragThreshold = i2273[3]
  return i2272
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2275 = data
  i2274.m_HorizontalAxis = i2275[0]
  i2274.m_VerticalAxis = i2275[1]
  i2274.m_SubmitButton = i2275[2]
  i2274.m_CancelButton = i2275[3]
  i2274.m_InputActionsPerSecond = i2275[4]
  i2274.m_RepeatDelay = i2275[5]
  i2274.m_ForceModuleActive = !!i2275[6]
  i2274.m_SendPointerHoverToParent = !!i2275[7]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.tagId = i2277[1]
  i2276.enabled = !!i2277[2]
  i2276.isStatic = !!i2277[3]
  i2276.layer = i2277[4]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2279 = data
  i2278.pivot = new pc.Vec2( i2279[0], i2279[1] )
  i2278.anchorMin = new pc.Vec2( i2279[2], i2279[3] )
  i2278.anchorMax = new pc.Vec2( i2279[4], i2279[5] )
  i2278.sizeDelta = new pc.Vec2( i2279[6], i2279[7] )
  i2278.anchoredPosition3D = new pc.Vec3( i2279[8], i2279[9], i2279[10] )
  i2278.rotation = new pc.Quat(i2279[11], i2279[12], i2279[13], i2279[14])
  i2278.scale = new pc.Vec3( i2279[15], i2279[16], i2279[17] )
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2281 = data
  i2280.planeDistance = i2281[0]
  i2280.referencePixelsPerUnit = i2281[1]
  i2280.isFallbackOverlay = !!i2281[2]
  i2280.renderMode = i2281[3]
  i2280.renderOrder = i2281[4]
  i2280.sortingLayerName = i2281[5]
  i2280.sortingOrder = i2281[6]
  i2280.scaleFactor = i2281[7]
  request.r(i2281[8], i2281[9], 0, i2280, 'worldCamera')
  i2280.overrideSorting = !!i2281[10]
  i2280.pixelPerfect = !!i2281[11]
  i2280.targetDisplay = i2281[12]
  i2280.overridePixelPerfect = !!i2281[13]
  i2280.enabled = !!i2281[14]
  return i2280
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2283 = data
  i2282.m_UiScaleMode = i2283[0]
  i2282.m_ReferencePixelsPerUnit = i2283[1]
  i2282.m_ScaleFactor = i2283[2]
  i2282.m_ReferenceResolution = new pc.Vec2( i2283[3], i2283[4] )
  i2282.m_ScreenMatchMode = i2283[5]
  i2282.m_MatchWidthOrHeight = i2283[6]
  i2282.m_PhysicalUnit = i2283[7]
  i2282.m_FallbackScreenDPI = i2283[8]
  i2282.m_DefaultSpriteDPI = i2283[9]
  i2282.m_DynamicPixelsPerUnit = i2283[10]
  i2282.m_PresetInfoIsWorld = !!i2283[11]
  return i2282
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2285 = data
  i2284.m_IgnoreReversedGraphics = !!i2285[0]
  i2284.m_BlockingObjects = i2285[1]
  i2284.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2285[2] )
  return i2284
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2286 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2287 = data
  i2286._referenceResolution = new pc.Vec2( i2287[0], i2287[1] )
  i2286._portraitMatch = i2287[2]
  i2286._landscapeMatch = i2287[3]
  i2286._squareMatch = i2287[4]
  i2286._portraitAspectThreshold = i2287[5]
  i2286._landscapeAspectThreshold = i2287[6]
  i2286._aspectEpsilon = i2287[7]
  return i2286
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2288 = root || request.c( 'Joystick' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'background')
  request.r(i2289[2], i2289[3], 0, i2288, 'joy')
  i2288.deadZone = i2289[4]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2291 = data
  i2290.cullTransparentMesh = !!i2291[0]
  return i2290
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.Image' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_Sprite')
  i2292.m_Type = i2293[2]
  i2292.m_PreserveAspect = !!i2293[3]
  i2292.m_FillCenter = !!i2293[4]
  i2292.m_FillMethod = i2293[5]
  i2292.m_FillAmount = i2293[6]
  i2292.m_FillClockwise = !!i2293[7]
  i2292.m_FillOrigin = i2293[8]
  i2292.m_UseSpriteMesh = !!i2293[9]
  i2292.m_PixelsPerUnitMultiplier = i2293[10]
  request.r(i2293[11], i2293[12], 0, i2292, 'm_Material')
  i2292.m_Maskable = !!i2293[13]
  i2292.m_Color = new pc.Color(i2293[14], i2293[15], i2293[16], i2293[17])
  i2292.m_RaycastTarget = !!i2293[18]
  i2292.m_RaycastPadding = new pc.Vec4( i2293[19], i2293[20], i2293[21], i2293[22] )
  return i2292
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Button' )
  var i2295 = data
  i2294.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2295[0], i2294.m_OnClick)
  i2294.m_Navigation = request.d('UnityEngine.UI.Navigation', i2295[1], i2294.m_Navigation)
  i2294.m_Transition = i2295[2]
  i2294.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2295[3], i2294.m_Colors)
  i2294.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2295[4], i2294.m_SpriteState)
  i2294.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2295[5], i2294.m_AnimationTriggers)
  i2294.m_Interactable = !!i2295[6]
  request.r(i2295[7], i2295[8], 0, i2294, 'm_TargetGraphic')
  return i2294
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2297 = data
  i2296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2297[0], i2296.m_PersistentCalls)
  return i2296
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('UnityEngine.Events.PersistentCall', i2301[i + 0]));
  }
  i2298.m_Calls = i2300
  return i2298
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'm_Target')
  i2304.m_TargetAssemblyTypeName = i2305[2]
  i2304.m_MethodName = i2305[3]
  i2304.m_Mode = i2305[4]
  i2304.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2305[5], i2304.m_Arguments)
  i2304.m_CallState = i2305[6]
  return i2304
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2307 = data
  i2306.m_Mode = i2307[0]
  i2306.m_WrapAround = !!i2307[1]
  request.r(i2307[2], i2307[3], 0, i2306, 'm_SelectOnUp')
  request.r(i2307[4], i2307[5], 0, i2306, 'm_SelectOnDown')
  request.r(i2307[6], i2307[7], 0, i2306, 'm_SelectOnLeft')
  request.r(i2307[8], i2307[9], 0, i2306, 'm_SelectOnRight')
  return i2306
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2309 = data
  i2308.m_NormalColor = new pc.Color(i2309[0], i2309[1], i2309[2], i2309[3])
  i2308.m_HighlightedColor = new pc.Color(i2309[4], i2309[5], i2309[6], i2309[7])
  i2308.m_PressedColor = new pc.Color(i2309[8], i2309[9], i2309[10], i2309[11])
  i2308.m_SelectedColor = new pc.Color(i2309[12], i2309[13], i2309[14], i2309[15])
  i2308.m_DisabledColor = new pc.Color(i2309[16], i2309[17], i2309[18], i2309[19])
  i2308.m_ColorMultiplier = i2309[20]
  i2308.m_FadeDuration = i2309[21]
  return i2308
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_HighlightedSprite')
  request.r(i2311[2], i2311[3], 0, i2310, 'm_PressedSprite')
  request.r(i2311[4], i2311[5], 0, i2310, 'm_SelectedSprite')
  request.r(i2311[6], i2311[7], 0, i2310, 'm_DisabledSprite')
  return i2310
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2313 = data
  i2312.m_NormalTrigger = i2313[0]
  i2312.m_HighlightedTrigger = i2313[1]
  i2312.m_PressedTrigger = i2313[2]
  i2312.m_SelectedTrigger = i2313[3]
  i2312.m_DisabledTrigger = i2313[4]
  return i2312
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2314 = root || request.c( 'JumpButton' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'button')
  return i2314
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2317 = data
  i2316.m_ShowMaskGraphic = !!i2317[0]
  return i2316
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2318 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2319 = data
  i2318.m_hasFontAssetChanged = !!i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'm_baseMaterial')
  i2318.m_maskOffset = new pc.Vec4( i2319[3], i2319[4], i2319[5], i2319[6] )
  i2318.m_text = i2319[7]
  i2318.m_isRightToLeft = !!i2319[8]
  request.r(i2319[9], i2319[10], 0, i2318, 'm_fontAsset')
  request.r(i2319[11], i2319[12], 0, i2318, 'm_sharedMaterial')
  var i2321 = i2319[13]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 2, i2320, '')
  }
  i2318.m_fontSharedMaterials = i2320
  request.r(i2319[14], i2319[15], 0, i2318, 'm_fontMaterial')
  var i2323 = i2319[16]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2318.m_fontMaterials = i2322
  i2318.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2319[17], i2319[18], i2319[19], i2319[20])
  i2318.m_fontColor = new pc.Color(i2319[21], i2319[22], i2319[23], i2319[24])
  i2318.m_enableVertexGradient = !!i2319[25]
  i2318.m_colorMode = i2319[26]
  i2318.m_fontColorGradient = request.d('TMPro.VertexGradient', i2319[27], i2318.m_fontColorGradient)
  request.r(i2319[28], i2319[29], 0, i2318, 'm_fontColorGradientPreset')
  request.r(i2319[30], i2319[31], 0, i2318, 'm_spriteAsset')
  i2318.m_tintAllSprites = !!i2319[32]
  request.r(i2319[33], i2319[34], 0, i2318, 'm_StyleSheet')
  i2318.m_TextStyleHashCode = i2319[35]
  i2318.m_overrideHtmlColors = !!i2319[36]
  i2318.m_faceColor = UnityEngine.Color32.ConstructColor(i2319[37], i2319[38], i2319[39], i2319[40])
  i2318.m_fontSize = i2319[41]
  i2318.m_fontSizeBase = i2319[42]
  i2318.m_fontWeight = i2319[43]
  i2318.m_enableAutoSizing = !!i2319[44]
  i2318.m_fontSizeMin = i2319[45]
  i2318.m_fontSizeMax = i2319[46]
  i2318.m_fontStyle = i2319[47]
  i2318.m_HorizontalAlignment = i2319[48]
  i2318.m_VerticalAlignment = i2319[49]
  i2318.m_textAlignment = i2319[50]
  i2318.m_characterSpacing = i2319[51]
  i2318.m_wordSpacing = i2319[52]
  i2318.m_lineSpacing = i2319[53]
  i2318.m_lineSpacingMax = i2319[54]
  i2318.m_paragraphSpacing = i2319[55]
  i2318.m_charWidthMaxAdj = i2319[56]
  i2318.m_TextWrappingMode = i2319[57]
  i2318.m_wordWrappingRatios = i2319[58]
  i2318.m_overflowMode = i2319[59]
  request.r(i2319[60], i2319[61], 0, i2318, 'm_linkedTextComponent')
  request.r(i2319[62], i2319[63], 0, i2318, 'parentLinkedComponent')
  i2318.m_enableKerning = !!i2319[64]
  var i2325 = i2319[65]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(i2325[i + 0]);
  }
  i2318.m_ActiveFontFeatures = i2324
  i2318.m_enableExtraPadding = !!i2319[66]
  i2318.checkPaddingRequired = !!i2319[67]
  i2318.m_isRichText = !!i2319[68]
  i2318.m_parseCtrlCharacters = !!i2319[69]
  i2318.m_isOrthographic = !!i2319[70]
  i2318.m_isCullingEnabled = !!i2319[71]
  i2318.m_horizontalMapping = i2319[72]
  i2318.m_verticalMapping = i2319[73]
  i2318.m_uvLineOffset = i2319[74]
  i2318.m_geometrySortingOrder = i2319[75]
  i2318.m_IsTextObjectScaleStatic = !!i2319[76]
  i2318.m_VertexBufferAutoSizeReduction = !!i2319[77]
  i2318.m_useMaxVisibleDescender = !!i2319[78]
  i2318.m_pageToDisplay = i2319[79]
  i2318.m_margin = new pc.Vec4( i2319[80], i2319[81], i2319[82], i2319[83] )
  i2318.m_isUsingLegacyAnimationComponent = !!i2319[84]
  i2318.m_isVolumetricText = !!i2319[85]
  request.r(i2319[86], i2319[87], 0, i2318, 'm_Material')
  i2318.m_EmojiFallbackSupport = !!i2319[88]
  i2318.m_Maskable = !!i2319[89]
  i2318.m_Color = new pc.Color(i2319[90], i2319[91], i2319[92], i2319[93])
  i2318.m_RaycastTarget = !!i2319[94]
  i2318.m_RaycastPadding = new pc.Vec4( i2319[95], i2319[96], i2319[97], i2319[98] )
  return i2318
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.VertexGradient' )
  var i2329 = data
  i2328.topLeft = new pc.Color(i2329[0], i2329[1], i2329[2], i2329[3])
  i2328.topRight = new pc.Color(i2329[4], i2329[5], i2329[6], i2329[7])
  i2328.bottomLeft = new pc.Color(i2329[8], i2329[9], i2329[10], i2329[11])
  i2328.bottomRight = new pc.Color(i2329[12], i2329[13], i2329[14], i2329[15])
  return i2328
}

Deserializers["TutController"] = function (request, data, root) {
  var i2332 = root || request.c( 'TutController' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'tutScene')
  request.r(i2333[2], i2333[3], 0, i2332, 'startTut')
  request.r(i2333[4], i2333[5], 0, i2332, 'playTut')
  request.r(i2333[6], i2333[7], 0, i2332, 'farTut')
  request.r(i2333[8], i2333[9], 0, i2332, 'failTut')
  return i2332
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2334 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2335 = data
  i2334.targetIsSelf = !!i2335[0]
  request.r(i2335[1], i2335[2], 0, i2334, 'targetGO')
  i2334.tweenTargetIsTargetGO = !!i2335[3]
  i2334.delay = i2335[4]
  i2334.duration = i2335[5]
  i2334.easeType = i2335[6]
  i2334.easeCurve = new pc.AnimationCurve( { keys_flow: i2335[7] } )
  i2334.loopType = i2335[8]
  i2334.loops = i2335[9]
  i2334.id = i2335[10]
  i2334.isRelative = !!i2335[11]
  i2334.isFrom = !!i2335[12]
  i2334.isIndependentUpdate = !!i2335[13]
  i2334.autoKill = !!i2335[14]
  i2334.autoGenerate = !!i2335[15]
  i2334.isActive = !!i2335[16]
  i2334.isValid = !!i2335[17]
  request.r(i2335[18], i2335[19], 0, i2334, 'target')
  i2334.animationType = i2335[20]
  i2334.targetType = i2335[21]
  i2334.forcedTargetType = i2335[22]
  i2334.autoPlay = !!i2335[23]
  i2334.useTargetAsV3 = !!i2335[24]
  i2334.endValueFloat = i2335[25]
  i2334.endValueV3 = new pc.Vec3( i2335[26], i2335[27], i2335[28] )
  i2334.endValueV2 = new pc.Vec2( i2335[29], i2335[30] )
  i2334.endValueColor = new pc.Color(i2335[31], i2335[32], i2335[33], i2335[34])
  i2334.endValueString = i2335[35]
  i2334.endValueRect = UnityEngine.Rect.MinMaxRect(i2335[36], i2335[37], i2335[38], i2335[39])
  request.r(i2335[40], i2335[41], 0, i2334, 'endValueTransform')
  i2334.optionalBool0 = !!i2335[42]
  i2334.optionalBool1 = !!i2335[43]
  i2334.optionalFloat0 = i2335[44]
  i2334.optionalInt0 = i2335[45]
  i2334.optionalRotationMode = i2335[46]
  i2334.optionalScrambleMode = i2335[47]
  i2334.optionalShakeRandomnessMode = i2335[48]
  i2334.optionalString = i2335[49]
  i2334.updateType = i2335[50]
  i2334.isSpeedBased = !!i2335[51]
  i2334.hasOnStart = !!i2335[52]
  i2334.hasOnPlay = !!i2335[53]
  i2334.hasOnUpdate = !!i2335[54]
  i2334.hasOnStepComplete = !!i2335[55]
  i2334.hasOnComplete = !!i2335[56]
  i2334.hasOnTweenCreated = !!i2335[57]
  i2334.hasOnRewind = !!i2335[58]
  i2334.onStart = request.d('UnityEngine.Events.UnityEvent', i2335[59], i2334.onStart)
  i2334.onPlay = request.d('UnityEngine.Events.UnityEvent', i2335[60], i2334.onPlay)
  i2334.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2335[61], i2334.onUpdate)
  i2334.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2335[62], i2334.onStepComplete)
  i2334.onComplete = request.d('UnityEngine.Events.UnityEvent', i2335[63], i2334.onComplete)
  i2334.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2335[64], i2334.onTweenCreated)
  i2334.onRewind = request.d('UnityEngine.Events.UnityEvent', i2335[65], i2334.onRewind)
  return i2334
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2337 = data
  i2336.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2337[0], i2336.m_PersistentCalls)
  return i2336
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2338 = root || request.c( 'HideOnPointer' )
  var i2339 = data
  i2338.OnPointerDownEvent = request.d('System.Action', i2339[0], i2338.OnPointerDownEvent)
  return i2338
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2340 = root || request.c( 'System.Action' )
  var i2341 = data
  return i2340
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i2342 = root || request.c( 'SelectPanel' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, '_title')
  var i2345 = i2343[2]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 1, i2344, '')
  }
  i2342._buttonsSelectMap = i2344
  return i2342
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2349 = data
  i2348.m_AspectMode = i2349[0]
  i2348.m_AspectRatio = i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2351 = data
  i2350.center = new pc.Vec3( i2351[0], i2351[1], i2351[2] )
  i2350.size = new pc.Vec3( i2351[3], i2351[4], i2351[5] )
  i2350.enabled = !!i2351[6]
  i2350.isTrigger = !!i2351[7]
  request.r(i2351[8], i2351[9], 0, i2350, 'material')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2353 = data
  i2352.mass = i2353[0]
  i2352.drag = i2353[1]
  i2352.angularDrag = i2353[2]
  i2352.useGravity = !!i2353[3]
  i2352.isKinematic = !!i2353[4]
  i2352.constraints = i2353[5]
  i2352.maxAngularVelocity = i2353[6]
  i2352.collisionDetectionMode = i2353[7]
  i2352.interpolation = i2353[8]
  return i2352
}

Deserializers["Gift"] = function (request, data, root) {
  var i2354 = root || request.c( 'Gift' )
  var i2355 = data
  i2354.collectDone = !!i2355[0]
  var i2357 = i2355[1]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 1, i2356, '')
  }
  i2354.hints = i2356
  request.r(i2355[2], i2355[3], 0, i2354, 'collectSound')
  request.r(i2355[4], i2355[5], 0, i2354, 'collectEffect')
  request.r(i2355[6], i2355[7], 0, i2354, 'arrow')
  return i2354
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2360 = root || request.c( 'SoundHint' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'Sound')
  request.r(i2361[2], i2361[3], 0, i2360, 'Source')
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'sharedMesh')
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'additionalVertexStreams')
  i2364.enabled = !!i2365[2]
  request.r(i2365[3], i2365[4], 0, i2364, 'sharedMaterial')
  var i2367 = i2365[5]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.sharedMaterials = i2366
  i2364.receiveShadows = !!i2365[6]
  i2364.shadowCastingMode = i2365[7]
  i2364.sortingLayerID = i2365[8]
  i2364.sortingOrder = i2365[9]
  i2364.lightmapIndex = i2365[10]
  i2364.lightmapSceneIndex = i2365[11]
  i2364.lightmapScaleOffset = new pc.Vec4( i2365[12], i2365[13], i2365[14], i2365[15] )
  i2364.lightProbeUsage = i2365[16]
  i2364.reflectionProbeUsage = i2365[17]
  return i2364
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
  request.r(i2437[18], i2437[19], 0, i2436, 'controller')
  i2436.autoRun = !!i2437[20]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2445 = data
  i2444.center = new pc.Vec3( i2445[0], i2445[1], i2445[2] )
  i2444.radius = i2445[3]
  i2444.height = i2445[4]
  i2444.direction = i2445[5]
  i2444.enabled = !!i2445[6]
  i2444.isTrigger = !!i2445[7]
  request.r(i2445[8], i2445[9], 0, i2444, 'material')
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'animatorController')
  request.r(i2447[2], i2447[3], 0, i2446, 'avatar')
  i2446.updateMode = i2447[4]
  i2446.hasTransformHierarchy = !!i2447[5]
  i2446.applyRootMotion = !!i2447[6]
  var i2449 = i2447[7]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2446.humanBones = i2448
  i2446.enabled = !!i2447[8]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'clip')
  request.r(i2453[2], i2453[3], 0, i2452, 'outputAudioMixerGroup')
  i2452.playOnAwake = !!i2453[4]
  i2452.loop = !!i2453[5]
  i2452.time = i2453[6]
  i2452.volume = i2453[7]
  i2452.pitch = i2453[8]
  i2452.enabled = !!i2453[9]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'sharedMesh')
  var i2457 = i2455[2]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 2, i2456, '')
  }
  i2454.bones = i2456
  i2454.updateWhenOffscreen = !!i2455[3]
  i2454.localBounds = i2455[4]
  request.r(i2455[5], i2455[6], 0, i2454, 'rootBone')
  var i2459 = i2455[7]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2459[i + 0]) );
  }
  i2454.blendShapesWeights = i2458
  i2454.enabled = !!i2455[8]
  request.r(i2455[9], i2455[10], 0, i2454, 'sharedMaterial')
  var i2461 = i2455[11]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 2, i2460, '')
  }
  i2454.sharedMaterials = i2460
  i2454.receiveShadows = !!i2455[12]
  i2454.shadowCastingMode = i2455[13]
  i2454.sortingLayerID = i2455[14]
  i2454.sortingOrder = i2455[15]
  i2454.lightmapIndex = i2455[16]
  i2454.lightmapSceneIndex = i2455[17]
  i2454.lightmapScaleOffset = new pc.Vec4( i2455[18], i2455[19], i2455[20], i2455[21] )
  i2454.lightProbeUsage = i2455[22]
  i2454.reflectionProbeUsage = i2455[23]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2465 = data
  i2464.weight = i2465[0]
  return i2464
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2466 = root || request.c( 'GroundChecker' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'groundPoint')
  i2466.checkRadius = i2467[2]
  i2466.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2467[3] )
  return i2466
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2468 = root || request.c( 'CameraFollow' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'target')
  i2468.smoothTime = i2469[2]
  return i2468
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2470 = root || request.c( 'CameraLook' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'input')
  request.r(i2471[2], i2471[3], 0, i2470, 'yawPivot')
  request.r(i2471[4], i2471[5], 0, i2470, 'pitchPivot')
  i2470.minPitch = i2471[6]
  i2470.maxPitch = i2471[7]
  i2470.yaw = i2471[8]
  i2470.pitch = i2471[9]
  i2470.defaltYaw = i2471[10]
  i2470.defaltPitch = i2471[11]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2473 = data
  i2472.aspect = i2473[0]
  i2472.orthographic = !!i2473[1]
  i2472.orthographicSize = i2473[2]
  i2472.backgroundColor = new pc.Color(i2473[3], i2473[4], i2473[5], i2473[6])
  i2472.nearClipPlane = i2473[7]
  i2472.farClipPlane = i2473[8]
  i2472.fieldOfView = i2473[9]
  i2472.depth = i2473[10]
  i2472.clearFlags = i2473[11]
  i2472.cullingMask = i2473[12]
  i2472.rect = i2473[13]
  request.r(i2473[14], i2473[15], 0, i2472, 'targetTexture')
  i2472.usePhysicalProperties = !!i2473[16]
  i2472.focalLength = i2473[17]
  i2472.sensorSize = new pc.Vec2( i2473[18], i2473[19] )
  i2472.lensShift = new pc.Vec2( i2473[20], i2473[21] )
  i2472.gateFit = i2473[22]
  i2472.commandBufferCount = i2473[23]
  i2472.cameraType = i2473[24]
  i2472.enabled = !!i2473[25]
  return i2472
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2474 = root || request.c( 'CharacterInput' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'joystick')
  request.r(i2475[2], i2475[3], 0, i2474, 'jumpButton')
  return i2474
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2476 = root || request.c( 'InputManager' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'worldCamera')
  i2476.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2477[2] )
  i2476.touchSensitivity = i2477[3]
  i2476.mouseSensitivity = i2477[4]
  i2476.dragThreshold = i2477[5]
  return i2476
}

Deserializers["GameController"] = function (request, data, root) {
  var i2478 = root || request.c( 'GameController' )
  var i2479 = data
  i2478.timeToShowComplete = i2479[0]
  i2478.timeToShowHint = i2479[1]
  i2478.currentProgress = i2479[2]
  i2478.target = i2479[3]
  request.r(i2479[4], i2479[5], 0, i2478, 'progressText')
  request.r(i2479[6], i2479[7], 0, i2478, 'collectText')
  request.r(i2479[8], i2479[9], 0, i2478, 'completeScene')
  var i2481 = i2479[10]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 1, i2480, '')
  }
  i2478.gifts = i2480
  request.r(i2479[11], i2479[12], 0, i2478, 'collect')
  request.r(i2479[13], i2479[14], 0, i2478, 'tut')
  return i2478
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2484 = root || request.c( 'AudioController' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'musicSource')
  request.r(i2485[2], i2485[3], 0, i2484, 'poolParent')
  i2484.startSize = i2485[4]
  return i2484
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2486 = root || request.c( 'LunaController' )
  var i2487 = data
  i2486.LimitTimePlay = !!i2487[0]
  i2486.TimePlay = i2487[1]
  var i2489 = i2487[2]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2486.images = i2488
  request.r(i2487[3], i2487[4], 0, i2486, 'CTA')
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2493 = data
  i2492.type = i2493[0]
  i2492.color = new pc.Color(i2493[1], i2493[2], i2493[3], i2493[4])
  i2492.cullingMask = i2493[5]
  i2492.intensity = i2493[6]
  i2492.range = i2493[7]
  i2492.spotAngle = i2493[8]
  i2492.shadows = i2493[9]
  i2492.shadowNormalBias = i2493[10]
  i2492.shadowBias = i2493[11]
  i2492.shadowStrength = i2493[12]
  i2492.shadowResolution = i2493[13]
  i2492.lightmapBakeType = i2493[14]
  i2492.renderMode = i2493[15]
  request.r(i2493[16], i2493[17], 0, i2492, 'cookie')
  i2492.cookieSize = i2493[18]
  i2492.shadowNearPlane = i2493[19]
  i2492.occlusionMaskChannel = i2493[20]
  i2492.isBaked = !!i2493[21]
  i2492.mixedLightingMode = i2493[22]
  i2492.enabled = !!i2493[23]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2495 = data
  i2494.textureMode = i2495[0]
  i2494.alignment = i2495[1]
  i2494.widthCurve = new pc.AnimationCurve( { keys_flow: i2495[2] } )
  i2494.colorGradient = i2495[3] ? new pc.ColorGradient(i2495[3][0], i2495[3][1], i2495[3][2]) : null
  var i2497 = i2495[4]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 3) {
    i2496.push( new pc.Vec3( i2497[i + 0], i2497[i + 1], i2497[i + 2] ) );
  }
  i2494.positions = i2496
  i2494.positionCount = i2495[5]
  i2494.widthMultiplier = i2495[6]
  i2494.startWidth = i2495[7]
  i2494.endWidth = i2495[8]
  i2494.numCornerVertices = i2495[9]
  i2494.numCapVertices = i2495[10]
  i2494.useWorldSpace = !!i2495[11]
  i2494.loop = !!i2495[12]
  i2494.startColor = new pc.Color(i2495[13], i2495[14], i2495[15], i2495[16])
  i2494.endColor = new pc.Color(i2495[17], i2495[18], i2495[19], i2495[20])
  i2494.generateLightingData = !!i2495[21]
  i2494.enabled = !!i2495[22]
  request.r(i2495[23], i2495[24], 0, i2494, 'sharedMaterial')
  var i2499 = i2495[25]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2494.sharedMaterials = i2498
  i2494.receiveShadows = !!i2495[26]
  i2494.shadowCastingMode = i2495[27]
  i2494.sortingLayerID = i2495[28]
  i2494.sortingOrder = i2495[29]
  i2494.lightmapIndex = i2495[30]
  i2494.lightmapSceneIndex = i2495[31]
  i2494.lightmapScaleOffset = new pc.Vec4( i2495[32], i2495[33], i2495[34], i2495[35] )
  i2494.lightProbeUsage = i2495[36]
  i2494.reflectionProbeUsage = i2495[37]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'sharedMesh')
  i2502.convex = !!i2503[2]
  i2502.enabled = !!i2503[3]
  i2502.isTrigger = !!i2503[4]
  request.r(i2503[5], i2503[6], 0, i2502, 'material')
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2505 = data
  i2504.ambientIntensity = i2505[0]
  i2504.reflectionIntensity = i2505[1]
  i2504.ambientMode = i2505[2]
  i2504.ambientLight = new pc.Color(i2505[3], i2505[4], i2505[5], i2505[6])
  i2504.ambientSkyColor = new pc.Color(i2505[7], i2505[8], i2505[9], i2505[10])
  i2504.ambientGroundColor = new pc.Color(i2505[11], i2505[12], i2505[13], i2505[14])
  i2504.ambientEquatorColor = new pc.Color(i2505[15], i2505[16], i2505[17], i2505[18])
  i2504.fogColor = new pc.Color(i2505[19], i2505[20], i2505[21], i2505[22])
  i2504.fogEndDistance = i2505[23]
  i2504.fogStartDistance = i2505[24]
  i2504.fogDensity = i2505[25]
  i2504.fog = !!i2505[26]
  request.r(i2505[27], i2505[28], 0, i2504, 'skybox')
  i2504.fogMode = i2505[29]
  var i2507 = i2505[30]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2507[i + 0]) );
  }
  i2504.lightmaps = i2506
  i2504.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2505[31], i2504.lightProbes)
  i2504.lightmapsMode = i2505[32]
  i2504.mixedBakeMode = i2505[33]
  i2504.environmentLightingMode = i2505[34]
  i2504.ambientProbe = new pc.SphericalHarmonicsL2(i2505[35])
  request.r(i2505[36], i2505[37], 0, i2504, 'customReflection')
  request.r(i2505[38], i2505[39], 0, i2504, 'defaultReflection')
  i2504.defaultReflectionMode = i2505[40]
  i2504.defaultReflectionResolution = i2505[41]
  i2504.sunLightObjectId = i2505[42]
  i2504.pixelLightCount = i2505[43]
  i2504.defaultReflectionHDR = !!i2505[44]
  i2504.hasLightDataAsset = !!i2505[45]
  i2504.hasManualGenerate = !!i2505[46]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'lightmapColor')
  request.r(i2511[2], i2511[3], 0, i2510, 'lightmapDirection')
  request.r(i2511[4], i2511[5], 0, i2510, 'shadowMask')
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2512 = root || new UnityEngine.LightProbes()
  var i2513 = data
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2521[i + 0]));
  }
  i2518.ShaderCompilationErrors = i2520
  i2518.name = i2519[1]
  i2518.guid = i2519[2]
  var i2523 = i2519[3]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2518.shaderDefinedKeywords = i2522
  var i2525 = i2519[4]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2525[i + 0]) );
  }
  i2518.passes = i2524
  var i2527 = i2519[5]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2527[i + 0]) );
  }
  i2518.usePasses = i2526
  var i2529 = i2519[6]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2529[i + 0]) );
  }
  i2518.defaultParameterValues = i2528
  request.r(i2519[7], i2519[8], 0, i2518, 'unityFallbackShader')
  i2518.readDepth = !!i2519[9]
  i2518.hasDepthOnlyPass = !!i2519[10]
  i2518.isCreatedByShaderGraph = !!i2519[11]
  i2518.disableBatching = !!i2519[12]
  i2518.compiled = !!i2519[13]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2533 = data
  i2532.shaderName = i2533[0]
  i2532.errorMessage = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2538 = root || new pc.UnityShaderPass()
  var i2539 = data
  i2538.id = i2539[0]
  i2538.subShaderIndex = i2539[1]
  i2538.name = i2539[2]
  i2538.passType = i2539[3]
  i2538.grabPassTextureName = i2539[4]
  i2538.usePass = !!i2539[5]
  i2538.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[6], i2538.zTest)
  i2538.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[7], i2538.zWrite)
  i2538.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[8], i2538.culling)
  i2538.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2539[9], i2538.blending)
  i2538.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2539[10], i2538.alphaBlending)
  i2538.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[11], i2538.colorWriteMask)
  i2538.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[12], i2538.offsetUnits)
  i2538.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[13], i2538.offsetFactor)
  i2538.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[14], i2538.stencilRef)
  i2538.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[15], i2538.stencilReadMask)
  i2538.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[16], i2538.stencilWriteMask)
  i2538.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2539[17], i2538.stencilOp)
  i2538.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2539[18], i2538.stencilOpFront)
  i2538.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2539[19], i2538.stencilOpBack)
  var i2541 = i2539[20]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2541[i + 0]) );
  }
  i2538.tags = i2540
  var i2543 = i2539[21]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2538.passDefinedKeywords = i2542
  var i2545 = i2539[22]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2545[i + 0]) );
  }
  i2538.passDefinedKeywordGroups = i2544
  var i2547 = i2539[23]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2547[i + 0]) );
  }
  i2538.variants = i2546
  var i2549 = i2539[24]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2549[i + 0]) );
  }
  i2538.excludedVariants = i2548
  i2538.hasDepthReader = !!i2539[25]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2551 = data
  i2550.val = i2551[0]
  i2550.name = i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2553 = data
  i2552.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[0], i2552.src)
  i2552.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[1], i2552.dst)
  i2552.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[2], i2552.op)
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2555 = data
  i2554.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[0], i2554.pass)
  i2554.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[1], i2554.fail)
  i2554.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[2], i2554.zFail)
  i2554.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2555[3], i2554.comp)
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2559 = data
  i2558.name = i2559[0]
  i2558.value = i2559[1]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2563 = data
  var i2565 = i2563[0]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2562.keywords = i2564
  i2562.hasDiscard = !!i2563[1]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2569 = data
  i2568.passId = i2569[0]
  i2568.subShaderIndex = i2569[1]
  var i2571 = i2569[2]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2568.keywords = i2570
  i2568.vertexProgram = i2569[3]
  i2568.fragmentProgram = i2569[4]
  i2568.exportedForWebGl2 = !!i2569[5]
  i2568.readDepth = !!i2569[6]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2575 = data
  request.r(i2575[0], i2575[1], 0, i2574, 'shader')
  i2574.pass = i2575[2]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2579 = data
  i2578.name = i2579[0]
  i2578.type = i2579[1]
  i2578.value = new pc.Vec4( i2579[2], i2579[3], i2579[4], i2579[5] )
  i2578.textureValue = i2579[6]
  i2578.shaderPropertyFlag = i2579[7]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2581 = data
  i2580.name = i2581[0]
  request.r(i2581[1], i2581[2], 0, i2580, 'texture')
  i2580.aabb = i2581[3]
  i2580.vertices = i2581[4]
  i2580.triangles = i2581[5]
  i2580.textureRect = UnityEngine.Rect.MinMaxRect(i2581[6], i2581[7], i2581[8], i2581[9])
  i2580.packedRect = UnityEngine.Rect.MinMaxRect(i2581[10], i2581[11], i2581[12], i2581[13])
  i2580.border = new pc.Vec4( i2581[14], i2581[15], i2581[16], i2581[17] )
  i2580.transparency = i2581[18]
  i2580.bounds = i2581[19]
  i2580.pixelsPerUnit = i2581[20]
  i2580.textureWidth = i2581[21]
  i2580.textureHeight = i2581[22]
  i2580.nativeSize = new pc.Vec2( i2581[23], i2581[24] )
  i2580.pivot = new pc.Vec2( i2581[25], i2581[26] )
  i2580.textureRectOffset = new pc.Vec2( i2581[27], i2581[28] )
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2583 = data
  i2582.name = i2583[0]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2585 = data
  i2584.name = i2585[0]
  i2584.wrapMode = i2585[1]
  i2584.isLooping = !!i2585[2]
  i2584.length = i2585[3]
  var i2587 = i2585[4]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2587[i + 0]) );
  }
  i2584.curves = i2586
  var i2589 = i2585[5]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2589[i + 0]) );
  }
  i2584.events = i2588
  i2584.halfPrecision = !!i2585[6]
  i2584._frameRate = i2585[7]
  i2584.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2585[8], i2584.localBounds)
  i2584.hasMuscleCurves = !!i2585[9]
  var i2591 = i2585[10]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( i2591[i + 0] );
  }
  i2584.clipMuscleConstant = i2590
  i2584.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2585[11], i2584.clipBindingConstant)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2595 = data
  i2594.path = i2595[0]
  i2594.hash = i2595[1]
  i2594.componentType = i2595[2]
  i2594.property = i2595[3]
  i2594.keys = i2595[4]
  var i2597 = i2595[5]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2597[i + 0]) );
  }
  i2594.objectReferenceKeys = i2596
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2601 = data
  i2600.time = i2601[0]
  request.r(i2601[1], i2601[2], 0, i2600, 'value')
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2605 = data
  i2604.functionName = i2605[0]
  i2604.floatParameter = i2605[1]
  i2604.intParameter = i2605[2]
  i2604.stringParameter = i2605[3]
  request.r(i2605[4], i2605[5], 0, i2604, 'objectReferenceParameter')
  i2604.time = i2605[6]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2607 = data
  i2606.center = new pc.Vec3( i2607[0], i2607[1], i2607[2] )
  i2606.extends = new pc.Vec3( i2607[3], i2607[4], i2607[5] )
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2611 = data
  var i2613 = i2611[0]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( i2613[i + 0] );
  }
  i2610.genericBindings = i2612
  var i2615 = i2611[1]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( i2615[i + 0] );
  }
  i2610.pptrCurveMapping = i2614
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2617 = data
  i2616.name = i2617[0]
  var i2619 = i2617[1]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2619[i + 0]) );
  }
  i2616.layers = i2618
  var i2621 = i2617[2]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2621[i + 0]) );
  }
  i2616.parameters = i2620
  i2616.animationClips = i2617[3]
  i2616.avatarUnsupported = i2617[4]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.defaultWeight = i2625[1]
  i2624.blendingMode = i2625[2]
  i2624.avatarMask = i2625[3]
  i2624.syncedLayerIndex = i2625[4]
  i2624.syncedLayerAffectsTiming = !!i2625[5]
  i2624.syncedLayers = i2625[6]
  i2624.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2625[7], i2624.stateMachine)
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2627 = data
  i2626.id = i2627[0]
  i2626.name = i2627[1]
  i2626.path = i2627[2]
  var i2629 = i2627[3]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2629[i + 0]) );
  }
  i2626.states = i2628
  var i2631 = i2627[4]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2631[i + 0]) );
  }
  i2626.machines = i2630
  var i2633 = i2627[5]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2633[i + 0]) );
  }
  i2626.entryStateTransitions = i2632
  var i2635 = i2627[6]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2635[i + 0]) );
  }
  i2626.exitStateTransitions = i2634
  var i2637 = i2627[7]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2637[i + 0]) );
  }
  i2626.anyStateTransitions = i2636
  i2626.defaultStateId = i2627[8]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2641 = data
  i2640.id = i2641[0]
  i2640.name = i2641[1]
  i2640.cycleOffset = i2641[2]
  i2640.cycleOffsetParameter = i2641[3]
  i2640.cycleOffsetParameterActive = !!i2641[4]
  i2640.mirror = !!i2641[5]
  i2640.mirrorParameter = i2641[6]
  i2640.mirrorParameterActive = !!i2641[7]
  i2640.motionId = i2641[8]
  i2640.nameHash = i2641[9]
  i2640.fullPathHash = i2641[10]
  i2640.speed = i2641[11]
  i2640.speedParameter = i2641[12]
  i2640.speedParameterActive = !!i2641[13]
  i2640.tag = i2641[14]
  i2640.tagHash = i2641[15]
  i2640.writeDefaultValues = !!i2641[16]
  var i2643 = i2641[17]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2640.behaviours = i2642
  var i2645 = i2641[18]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2645[i + 0]) );
  }
  i2640.transitions = i2644
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2651 = data
  i2650.fullPath = i2651[0]
  i2650.canTransitionToSelf = !!i2651[1]
  i2650.duration = i2651[2]
  i2650.exitTime = i2651[3]
  i2650.hasExitTime = !!i2651[4]
  i2650.hasFixedDuration = !!i2651[5]
  i2650.interruptionSource = i2651[6]
  i2650.offset = i2651[7]
  i2650.orderedInterruption = !!i2651[8]
  i2650.destinationStateId = i2651[9]
  i2650.isExit = !!i2651[10]
  i2650.mute = !!i2651[11]
  i2650.solo = !!i2651[12]
  var i2653 = i2651[13]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2653[i + 0]) );
  }
  i2650.conditions = i2652
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2657 = data
  i2656.mode = i2657[0]
  i2656.parameter = i2657[1]
  i2656.threshold = i2657[2]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2663 = data
  i2662.destinationStateId = i2663[0]
  i2662.isExit = !!i2663[1]
  i2662.mute = !!i2663[2]
  i2662.solo = !!i2663[3]
  var i2665 = i2663[4]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2665[i + 0]) );
  }
  i2662.conditions = i2664
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2669 = data
  i2668.defaultBool = !!i2669[0]
  i2668.defaultFloat = i2669[1]
  i2668.defaultInt = i2669[2]
  i2668.name = i2669[3]
  i2668.nameHash = i2669[4]
  i2668.type = i2669[5]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2671 = data
  i2670.name = i2671[0]
  request.r(i2671[1], i2671[2], 0, i2670, '_runtimeAnimatorController')
  var i2673 = i2671[3]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 2, i2672, '')
  }
  i2670._originalAnimationClips = i2672
  var i2675 = i2671[4]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 2, i2674, '')
  }
  i2670._overrideAnimationClips = i2674
  var i2677 = i2671[5]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 2, i2676, '')
  }
  i2670._animationClips = i2676
  var i2679 = i2671[6]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('UnityEngine.AnimationClipPair', i2679[i + 0]) );
  }
  i2670._animationClipPairs = i2678
  return i2670
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2685 = data
  request.r(i2685[0], i2685[1], 0, i2684, 'originalClip')
  request.r(i2685[2], i2685[3], 0, i2684, 'overrideClip')
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.bytes64 = i2687[1]
  i2686.data = i2687[2]
  return i2686
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2689 = data
  i2688.normalStyle = i2689[0]
  i2688.normalSpacingOffset = i2689[1]
  i2688.boldStyle = i2689[2]
  i2688.boldSpacing = i2689[3]
  i2688.italicStyle = i2689[4]
  i2688.tabSize = i2689[5]
  request.r(i2689[6], i2689[7], 0, i2688, 'atlas')
  i2688.m_SourceFontFileGUID = i2689[8]
  i2688.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2689[9], i2688.m_CreationSettings)
  request.r(i2689[10], i2689[11], 0, i2688, 'm_SourceFontFile')
  i2688.m_SourceFontFilePath = i2689[12]
  i2688.m_AtlasPopulationMode = i2689[13]
  i2688.InternalDynamicOS = !!i2689[14]
  var i2691 = i2689[15]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('UnityEngine.TextCore.Glyph', i2691[i + 0]));
  }
  i2688.m_GlyphTable = i2690
  var i2693 = i2689[16]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Character', i2693[i + 0]));
  }
  i2688.m_CharacterTable = i2692
  var i2695 = i2689[17]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2688.m_AtlasTextures = i2694
  i2688.m_AtlasTextureIndex = i2689[18]
  i2688.m_IsMultiAtlasTexturesEnabled = !!i2689[19]
  i2688.m_GetFontFeatures = !!i2689[20]
  i2688.m_ClearDynamicDataOnBuild = !!i2689[21]
  i2688.m_AtlasWidth = i2689[22]
  i2688.m_AtlasHeight = i2689[23]
  i2688.m_AtlasPadding = i2689[24]
  i2688.m_AtlasRenderMode = i2689[25]
  var i2697 = i2689[26]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('UnityEngine.TextCore.GlyphRect', i2697[i + 0]));
  }
  i2688.m_UsedGlyphRects = i2696
  var i2699 = i2689[27]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('UnityEngine.TextCore.GlyphRect', i2699[i + 0]));
  }
  i2688.m_FreeGlyphRects = i2698
  i2688.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2689[28], i2688.m_FontFeatureTable)
  i2688.m_ShouldReimportFontFeatures = !!i2689[29]
  var i2701 = i2689[30]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2701.length; i += 2) {
  request.r(i2701[i + 0], i2701[i + 1], 1, i2700, '')
  }
  i2688.m_FallbackFontAssetTable = i2700
  var i2703 = i2689[31]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('TMPro.TMP_FontWeightPair', i2703[i + 0]) );
  }
  i2688.m_FontWeightTable = i2702
  var i2705 = i2689[32]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('TMPro.TMP_FontWeightPair', i2705[i + 0]) );
  }
  i2688.fontWeights = i2704
  i2688.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2689[33], i2688.m_fontInfo)
  var i2707 = i2689[34]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('TMPro.TMP_Glyph', i2707[i + 0]));
  }
  i2688.m_glyphInfoList = i2706
  i2688.m_KerningTable = request.d('TMPro.KerningTable', i2689[35], i2688.m_KerningTable)
  var i2709 = i2689[36]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 1, i2708, '')
  }
  i2688.fallbackFontAssets = i2708
  i2688.m_Version = i2689[37]
  i2688.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2689[38], i2688.m_FaceInfo)
  request.r(i2689[39], i2689[40], 0, i2688, 'm_Material')
  return i2688
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2711 = data
  i2710.sourceFontFileName = i2711[0]
  i2710.sourceFontFileGUID = i2711[1]
  i2710.faceIndex = i2711[2]
  i2710.pointSizeSamplingMode = i2711[3]
  i2710.pointSize = i2711[4]
  i2710.padding = i2711[5]
  i2710.paddingMode = i2711[6]
  i2710.packingMode = i2711[7]
  i2710.atlasWidth = i2711[8]
  i2710.atlasHeight = i2711[9]
  i2710.characterSetSelectionMode = i2711[10]
  i2710.characterSequence = i2711[11]
  i2710.referencedFontAssetGUID = i2711[12]
  i2710.referencedTextAssetGUID = i2711[13]
  i2710.fontStyle = i2711[14]
  i2710.fontStyleModifier = i2711[15]
  i2710.renderMode = i2711[16]
  i2710.includeFontFeatures = !!i2711[17]
  return i2710
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2715 = data
  i2714.m_Index = i2715[0]
  i2714.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2715[1], i2714.m_Metrics)
  i2714.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2715[2], i2714.m_GlyphRect)
  i2714.m_Scale = i2715[3]
  i2714.m_AtlasIndex = i2715[4]
  i2714.m_ClassDefinitionType = i2715[5]
  return i2714
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2717 = data
  i2716.m_Width = i2717[0]
  i2716.m_Height = i2717[1]
  i2716.m_HorizontalBearingX = i2717[2]
  i2716.m_HorizontalBearingY = i2717[3]
  i2716.m_HorizontalAdvance = i2717[4]
  return i2716
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2719 = data
  i2718.m_X = i2719[0]
  i2718.m_Y = i2719[1]
  i2718.m_Width = i2719[2]
  i2718.m_Height = i2719[3]
  return i2718
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.TMP_Character' )
  var i2723 = data
  i2722.m_ElementType = i2723[0]
  i2722.m_Unicode = i2723[1]
  i2722.m_GlyphIndex = i2723[2]
  i2722.m_Scale = i2723[3]
  return i2722
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.MultipleSubstitutionRecord', i2731[i + 0]));
  }
  i2728.m_MultipleSubstitutionRecords = i2730
  var i2733 = i2729[1]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.LigatureSubstitutionRecord', i2733[i + 0]));
  }
  i2728.m_LigatureSubstitutionRecords = i2732
  var i2735 = i2729[2]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2735[i + 0]));
  }
  i2728.m_GlyphPairAdjustmentRecords = i2734
  var i2737 = i2729[3]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2737[i + 0]));
  }
  i2728.m_MarkToBaseAdjustmentRecords = i2736
  var i2739 = i2729[4]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2739[i + 0]));
  }
  i2728.m_MarkToMarkAdjustmentRecords = i2738
  return i2728
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2743 = data
  i2742.m_TargetGlyphID = i2743[0]
  i2742.m_SubstituteGlyphIDs = i2743[1]
  return i2742
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2747 = data
  i2746.m_ComponentGlyphIDs = i2747[0]
  i2746.m_LigatureGlyphID = i2747[1]
  return i2746
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2751 = data
  i2750.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2751[0], i2750.m_FirstAdjustmentRecord)
  i2750.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2751[1], i2750.m_SecondAdjustmentRecord)
  i2750.m_FeatureLookupFlags = i2751[2]
  return i2750
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2755 = data
  i2754.m_BaseGlyphID = i2755[0]
  i2754.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2755[1], i2754.m_BaseGlyphAnchorPoint)
  i2754.m_MarkGlyphID = i2755[2]
  i2754.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2755[3], i2754.m_MarkPositionAdjustment)
  return i2754
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2759 = data
  i2758.m_BaseMarkGlyphID = i2759[0]
  i2758.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2759[1], i2758.m_BaseMarkGlyphAnchorPoint)
  i2758.m_CombiningMarkGlyphID = i2759[2]
  i2758.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2759[3], i2758.m_CombiningMarkPositionAdjustment)
  return i2758
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2765 = data
  request.r(i2765[0], i2765[1], 0, i2764, 'regularTypeface')
  request.r(i2765[2], i2765[3], 0, i2764, 'italicTypeface')
  return i2764
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2767 = data
  i2766.Name = i2767[0]
  i2766.PointSize = i2767[1]
  i2766.Scale = i2767[2]
  i2766.CharacterCount = i2767[3]
  i2766.LineHeight = i2767[4]
  i2766.Baseline = i2767[5]
  i2766.Ascender = i2767[6]
  i2766.CapHeight = i2767[7]
  i2766.Descender = i2767[8]
  i2766.CenterLine = i2767[9]
  i2766.SuperscriptOffset = i2767[10]
  i2766.SubscriptOffset = i2767[11]
  i2766.SubSize = i2767[12]
  i2766.Underline = i2767[13]
  i2766.UnderlineThickness = i2767[14]
  i2766.strikethrough = i2767[15]
  i2766.strikethroughThickness = i2767[16]
  i2766.TabWidth = i2767[17]
  i2766.Padding = i2767[18]
  i2766.AtlasWidth = i2767[19]
  i2766.AtlasHeight = i2767[20]
  return i2766
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2771 = data
  i2770.id = i2771[0]
  i2770.x = i2771[1]
  i2770.y = i2771[2]
  i2770.width = i2771[3]
  i2770.height = i2771[4]
  i2770.xOffset = i2771[5]
  i2770.yOffset = i2771[6]
  i2770.xAdvance = i2771[7]
  i2770.scale = i2771[8]
  return i2770
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.KerningTable' )
  var i2773 = data
  var i2775 = i2773[0]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('TMPro.KerningPair', i2775[i + 0]));
  }
  i2772.kerningPairs = i2774
  return i2772
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.KerningPair' )
  var i2779 = data
  i2778.xOffset = i2779[0]
  i2778.m_FirstGlyph = i2779[1]
  i2778.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2779[2], i2778.m_FirstGlyphAdjustments)
  i2778.m_SecondGlyph = i2779[3]
  i2778.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2779[4], i2778.m_SecondGlyphAdjustments)
  i2778.m_IgnoreSpacingAdjustments = !!i2779[5]
  return i2778
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2781 = data
  i2780.m_FaceIndex = i2781[0]
  i2780.m_FamilyName = i2781[1]
  i2780.m_StyleName = i2781[2]
  i2780.m_PointSize = i2781[3]
  i2780.m_Scale = i2781[4]
  i2780.m_UnitsPerEM = i2781[5]
  i2780.m_LineHeight = i2781[6]
  i2780.m_AscentLine = i2781[7]
  i2780.m_CapLine = i2781[8]
  i2780.m_MeanLine = i2781[9]
  i2780.m_Baseline = i2781[10]
  i2780.m_DescentLine = i2781[11]
  i2780.m_SuperscriptOffset = i2781[12]
  i2780.m_SuperscriptSize = i2781[13]
  i2780.m_SubscriptOffset = i2781[14]
  i2780.m_SubscriptSize = i2781[15]
  i2780.m_UnderlineOffset = i2781[16]
  i2780.m_UnderlineThickness = i2781[17]
  i2780.m_StrikethroughOffset = i2781[18]
  i2780.m_StrikethroughThickness = i2781[19]
  i2780.m_TabWidth = i2781[20]
  return i2780
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2782 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2783 = data
  i2782.useSafeMode = !!i2783[0]
  i2782.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2783[1], i2782.safeModeOptions)
  i2782.timeScale = i2783[2]
  i2782.unscaledTimeScale = i2783[3]
  i2782.useSmoothDeltaTime = !!i2783[4]
  i2782.maxSmoothUnscaledTime = i2783[5]
  i2782.rewindCallbackMode = i2783[6]
  i2782.showUnityEditorReport = !!i2783[7]
  i2782.logBehaviour = i2783[8]
  i2782.drawGizmos = !!i2783[9]
  i2782.defaultRecyclable = !!i2783[10]
  i2782.defaultAutoPlay = i2783[11]
  i2782.defaultUpdateType = i2783[12]
  i2782.defaultTimeScaleIndependent = !!i2783[13]
  i2782.defaultEaseType = i2783[14]
  i2782.defaultEaseOvershootOrAmplitude = i2783[15]
  i2782.defaultEasePeriod = i2783[16]
  i2782.defaultAutoKill = !!i2783[17]
  i2782.defaultLoopType = i2783[18]
  i2782.debugMode = !!i2783[19]
  i2782.debugStoreTargetId = !!i2783[20]
  i2782.showPreviewPanel = !!i2783[21]
  i2782.storeSettingsLocation = i2783[22]
  i2782.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2783[23], i2782.modules)
  i2782.createASMDEF = !!i2783[24]
  i2782.showPlayingTweens = !!i2783[25]
  i2782.showPausedTweens = !!i2783[26]
  return i2782
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2785 = data
  i2784.logBehaviour = i2785[0]
  i2784.nestedTweenFailureBehaviour = i2785[1]
  return i2784
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2786 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2787 = data
  i2786.showPanel = !!i2787[0]
  i2786.audioEnabled = !!i2787[1]
  i2786.physicsEnabled = !!i2787[2]
  i2786.physics2DEnabled = !!i2787[3]
  i2786.spriteEnabled = !!i2787[4]
  i2786.uiEnabled = !!i2787[5]
  i2786.textMeshProEnabled = !!i2787[6]
  i2786.tk2DEnabled = !!i2787[7]
  i2786.deAudioEnabled = !!i2787[8]
  i2786.deUnityExtendedEnabled = !!i2787[9]
  i2786.epoOutlineEnabled = !!i2787[10]
  return i2786
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.TMP_Settings' )
  var i2789 = data
  i2788.assetVersion = i2789[0]
  i2788.m_TextWrappingMode = i2789[1]
  i2788.m_enableKerning = !!i2789[2]
  var i2791 = i2789[3]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(i2791[i + 0]);
  }
  i2788.m_ActiveFontFeatures = i2790
  i2788.m_enableExtraPadding = !!i2789[4]
  i2788.m_enableTintAllSprites = !!i2789[5]
  i2788.m_enableParseEscapeCharacters = !!i2789[6]
  i2788.m_EnableRaycastTarget = !!i2789[7]
  i2788.m_GetFontFeaturesAtRuntime = !!i2789[8]
  i2788.m_missingGlyphCharacter = i2789[9]
  i2788.m_ClearDynamicDataOnBuild = !!i2789[10]
  i2788.m_warningsDisabled = !!i2789[11]
  request.r(i2789[12], i2789[13], 0, i2788, 'm_defaultFontAsset')
  i2788.m_defaultFontAssetPath = i2789[14]
  i2788.m_defaultFontSize = i2789[15]
  i2788.m_defaultAutoSizeMinRatio = i2789[16]
  i2788.m_defaultAutoSizeMaxRatio = i2789[17]
  i2788.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2789[18], i2789[19] )
  i2788.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2789[20], i2789[21] )
  i2788.m_autoSizeTextContainer = !!i2789[22]
  i2788.m_IsTextObjectScaleStatic = !!i2789[23]
  var i2793 = i2789[24]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2793.length; i += 2) {
  request.r(i2793[i + 0], i2793[i + 1], 1, i2792, '')
  }
  i2788.m_fallbackFontAssets = i2792
  i2788.m_matchMaterialPreset = !!i2789[25]
  i2788.m_HideSubTextObjects = !!i2789[26]
  request.r(i2789[27], i2789[28], 0, i2788, 'm_defaultSpriteAsset')
  i2788.m_defaultSpriteAssetPath = i2789[29]
  i2788.m_enableEmojiSupport = !!i2789[30]
  i2788.m_MissingCharacterSpriteUnicode = i2789[31]
  var i2795 = i2789[32]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 1, i2794, '')
  }
  i2788.m_EmojiFallbackTextAssets = i2794
  i2788.m_defaultColorGradientPresetsPath = i2789[33]
  request.r(i2789[34], i2789[35], 0, i2788, 'm_defaultStyleSheet')
  i2788.m_StyleSheetsResourcePath = i2789[36]
  request.r(i2789[37], i2789[38], 0, i2788, 'm_leadingCharacters')
  request.r(i2789[39], i2789[40], 0, i2788, 'm_followingCharacters')
  i2788.m_UseModernHangulLineBreakingRules = !!i2789[41]
  return i2788
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'spriteSheet')
  var i2801 = i2799[2]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('TMPro.TMP_Sprite', i2801[i + 0]));
  }
  i2798.spriteInfoList = i2800
  var i2803 = i2799[3]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2803.length; i += 2) {
  request.r(i2803[i + 0], i2803[i + 1], 1, i2802, '')
  }
  i2798.fallbackSpriteAssets = i2802
  var i2805 = i2799[4]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.add(request.d('TMPro.TMP_SpriteCharacter', i2805[i + 0]));
  }
  i2798.m_SpriteCharacterTable = i2804
  var i2807 = i2799[5]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('TMPro.TMP_SpriteGlyph', i2807[i + 0]));
  }
  i2798.m_GlyphTable = i2806
  i2798.m_Version = i2799[6]
  i2798.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2799[7], i2798.m_FaceInfo)
  request.r(i2799[8], i2799[9], 0, i2798, 'm_Material')
  return i2798
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2810 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2811 = data
  i2810.name = i2811[0]
  i2810.hashCode = i2811[1]
  i2810.unicode = i2811[2]
  i2810.pivot = new pc.Vec2( i2811[3], i2811[4] )
  request.r(i2811[5], i2811[6], 0, i2810, 'sprite')
  i2810.id = i2811[7]
  i2810.x = i2811[8]
  i2810.y = i2811[9]
  i2810.width = i2811[10]
  i2810.height = i2811[11]
  i2810.xOffset = i2811[12]
  i2810.yOffset = i2811[13]
  i2810.xAdvance = i2811[14]
  i2810.scale = i2811[15]
  return i2810
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2817 = data
  i2816.m_Name = i2817[0]
  i2816.m_ElementType = i2817[1]
  i2816.m_Unicode = i2817[2]
  i2816.m_GlyphIndex = i2817[3]
  i2816.m_Scale = i2817[4]
  return i2816
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2821 = data
  request.r(i2821[0], i2821[1], 0, i2820, 'sprite')
  i2820.m_Index = i2821[2]
  i2820.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2821[3], i2820.m_Metrics)
  i2820.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2821[4], i2820.m_GlyphRect)
  i2820.m_Scale = i2821[5]
  i2820.m_AtlasIndex = i2821[6]
  i2820.m_ClassDefinitionType = i2821[7]
  return i2820
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.TMP_Style', i2825[i + 0]));
  }
  i2822.m_StyleList = i2824
  return i2822
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_Style' )
  var i2829 = data
  i2828.m_Name = i2829[0]
  i2828.m_HashCode = i2829[1]
  i2828.m_OpeningDefinition = i2829[2]
  i2828.m_ClosingDefinition = i2829[3]
  i2828.m_OpeningTagArray = i2829[4]
  i2828.m_ClosingTagArray = i2829[5]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2833[i + 0]) );
  }
  i2830.files = i2832
  i2830.componentToPrefabIds = i2831[1]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2837 = data
  i2836.path = i2837[0]
  request.r(i2837[1], i2837[2], 0, i2836, 'unityObject')
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2841[i + 0]) );
  }
  i2838.scriptsExecutionOrder = i2840
  var i2843 = i2839[1]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2843[i + 0]) );
  }
  i2838.sortingLayers = i2842
  var i2845 = i2839[2]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2845[i + 0]) );
  }
  i2838.cullingLayers = i2844
  i2838.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2839[3], i2838.timeSettings)
  i2838.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2839[4], i2838.physicsSettings)
  i2838.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2839[5], i2838.physics2DSettings)
  i2838.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2839[6], i2838.qualitySettings)
  i2838.enableRealtimeShadows = !!i2839[7]
  i2838.enableAutoInstancing = !!i2839[8]
  i2838.enableStaticBatching = !!i2839[9]
  i2838.enableDynamicBatching = !!i2839[10]
  i2838.usePreservativeDynamicBatching = !!i2839[11]
  i2838.lightmapEncodingQuality = i2839[12]
  i2838.desiredColorSpace = i2839[13]
  var i2847 = i2839[14]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( i2847[i + 0] );
  }
  i2838.allTags = i2846
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2851 = data
  i2850.name = i2851[0]
  i2850.value = i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2855 = data
  i2854.id = i2855[0]
  i2854.name = i2855[1]
  i2854.value = i2855[2]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2859 = data
  i2858.id = i2859[0]
  i2858.name = i2859[1]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2861 = data
  i2860.fixedDeltaTime = i2861[0]
  i2860.maximumDeltaTime = i2861[1]
  i2860.timeScale = i2861[2]
  i2860.maximumParticleTimestep = i2861[3]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2863 = data
  i2862.gravity = new pc.Vec3( i2863[0], i2863[1], i2863[2] )
  i2862.defaultSolverIterations = i2863[3]
  i2862.bounceThreshold = i2863[4]
  i2862.autoSyncTransforms = !!i2863[5]
  i2862.autoSimulation = !!i2863[6]
  var i2865 = i2863[7]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2865[i + 0]) );
  }
  i2862.collisionMatrix = i2864
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2869 = data
  i2868.enabled = !!i2869[0]
  i2868.layerId = i2869[1]
  i2868.otherLayerId = i2869[2]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'material')
  i2870.gravity = new pc.Vec2( i2871[2], i2871[3] )
  i2870.positionIterations = i2871[4]
  i2870.velocityIterations = i2871[5]
  i2870.velocityThreshold = i2871[6]
  i2870.maxLinearCorrection = i2871[7]
  i2870.maxAngularCorrection = i2871[8]
  i2870.maxTranslationSpeed = i2871[9]
  i2870.maxRotationSpeed = i2871[10]
  i2870.baumgarteScale = i2871[11]
  i2870.baumgarteTOIScale = i2871[12]
  i2870.timeToSleep = i2871[13]
  i2870.linearSleepTolerance = i2871[14]
  i2870.angularSleepTolerance = i2871[15]
  i2870.defaultContactOffset = i2871[16]
  i2870.autoSimulation = !!i2871[17]
  i2870.queriesHitTriggers = !!i2871[18]
  i2870.queriesStartInColliders = !!i2871[19]
  i2870.callbacksOnDisable = !!i2871[20]
  i2870.reuseCollisionCallbacks = !!i2871[21]
  i2870.autoSyncTransforms = !!i2871[22]
  var i2873 = i2871[23]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2873[i + 0]) );
  }
  i2870.collisionMatrix = i2872
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2877 = data
  i2876.enabled = !!i2877[0]
  i2876.layerId = i2877[1]
  i2876.otherLayerId = i2877[2]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2879 = data
  var i2881 = i2879[0]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2881[i + 0]) );
  }
  i2878.qualityLevels = i2880
  var i2883 = i2879[1]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( i2883[i + 0] );
  }
  i2878.names = i2882
  i2878.shadows = i2879[2]
  i2878.anisotropicFiltering = i2879[3]
  i2878.antiAliasing = i2879[4]
  i2878.lodBias = i2879[5]
  i2878.shadowCascades = i2879[6]
  i2878.shadowDistance = i2879[7]
  i2878.shadowmaskMode = i2879[8]
  i2878.shadowProjection = i2879[9]
  i2878.shadowResolution = i2879[10]
  i2878.softParticles = !!i2879[11]
  i2878.softVegetation = !!i2879[12]
  i2878.activeColorSpace = i2879[13]
  i2878.desiredColorSpace = i2879[14]
  i2878.masterTextureLimit = i2879[15]
  i2878.maxQueuedFrames = i2879[16]
  i2878.particleRaycastBudget = i2879[17]
  i2878.pixelLightCount = i2879[18]
  i2878.realtimeReflectionProbes = !!i2879[19]
  i2878.shadowCascade2Split = i2879[20]
  i2878.shadowCascade4Split = new pc.Vec3( i2879[21], i2879[22], i2879[23] )
  i2878.streamingMipmapsActive = !!i2879[24]
  i2878.vSyncCount = i2879[25]
  i2878.asyncUploadBufferSize = i2879[26]
  i2878.asyncUploadTimeSlice = i2879[27]
  i2878.billboardsFaceCameraPosition = !!i2879[28]
  i2878.shadowNearPlaneOffset = i2879[29]
  i2878.streamingMipmapsMemoryBudget = i2879[30]
  i2878.maximumLODLevel = i2879[31]
  i2878.streamingMipmapsAddAllCameras = !!i2879[32]
  i2878.streamingMipmapsMaxLevelReduction = i2879[33]
  i2878.streamingMipmapsRenderersPerFrame = i2879[34]
  i2878.resolutionScalingFixedDPIFactor = i2879[35]
  i2878.streamingMipmapsMaxFileIORequests = i2879[36]
  i2878.currentQualityLevel = i2879[37]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2887 = data
  i2886.name = i2887[0]
  var i2889 = i2887[1]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2889[i + 0]) );
  }
  i2886.tos = i2888
  var i2891 = i2887[2]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( i2891[i + 0] );
  }
  i2886.constant = i2890
  i2886.isValid = !!i2887[3]
  i2886.isHuman = !!i2887[4]
  i2886.hasRootMotion = !!i2887[5]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2895 = data
  i2894.hash = i2895[0]
  i2894.path = i2895[1]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2899 = data
  i2898.weight = i2899[0]
  i2898.vertices = i2899[1]
  i2898.normals = i2899[2]
  i2898.tangents = i2899[3]
  return i2898
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2900 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'm_ObjectArgument')
  i2900.m_ObjectArgumentAssemblyTypeName = i2901[2]
  i2900.m_IntArgument = i2901[3]
  i2900.m_FloatArgument = i2901[4]
  i2900.m_StringArgument = i2901[5]
  i2900.m_BoolArgument = !!i2901[6]
  return i2900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2903 = data
  i2902.m_GlyphIndex = i2903[0]
  i2902.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2903[1], i2902.m_GlyphValueRecord)
  return i2902
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2904 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2905 = data
  i2904.m_XCoordinate = i2905[0]
  i2904.m_YCoordinate = i2905[1]
  return i2904
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2907 = data
  i2906.m_XPositionAdjustment = i2907[0]
  i2906.m_YPositionAdjustment = i2907[1]
  return i2906
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2909 = data
  i2908.xPlacement = i2909[0]
  i2908.yPlacement = i2909[1]
  i2908.xAdvance = i2909[2]
  i2908.yAdvance = i2909[3]
  return i2908
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2910 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2911 = data
  i2910.m_XPlacement = i2911[0]
  i2910.m_YPlacement = i2911[1]
  i2910.m_XAdvance = i2911[2]
  i2910.m_YAdvance = i2911[3]
  return i2910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[51],"77":[55],"78":[28],"79":[28],"80":[28],"81":[28],"82":[28],"83":[28],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[55],"99":[36],"100":[101],"102":[101],"7":[6],"11":[8],"103":[6],"104":[36,6],"19":[6,13],"105":[6],"106":[13,6],"107":[36],"108":[13,6],"109":[6],"110":[111],"112":[111],"113":[111],"114":[6],"115":[6],"9":[7],"14":[13,6],"26":[6],"8":[7],"116":[6],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"18":[6],"123":[6],"124":[13,6],"125":[6],"126":[6],"127":[6],"128":[6],"129":[13,6],"130":[6],"131":[4],"132":[4],"5":[4],"133":[4],"134":[55],"135":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","SelectPanel","UnityEngine.UI.AspectRatioFitter","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.Light","UnityEngine.LineRenderer","UnityEngine.MeshCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "22.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V07_HoaiTT_HuyNQ";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4791";

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

Deserializers.buildID = "d60dbfd2-040e-40fb-a9a0-d71163d40493";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

