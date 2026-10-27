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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.atlasId = i2253[1]
  i2252.mipmapCount = i2253[2]
  i2252.hdr = !!i2253[3]
  i2252.size = i2253[4]
  i2252.anisoLevel = i2253[5]
  i2252.filterMode = i2253[6]
  var i2255 = i2253[7]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 4) {
    i2254.push( UnityEngine.Rect.MinMaxRect(i2255[i + 0], i2255[i + 1], i2255[i + 2], i2255[i + 3]) );
  }
  i2252.rects = i2254
  i2252.wrapU = i2253[8]
  i2252.wrapV = i2253[9]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.index = i2259[1]
  i2258.startup = !!i2259[2]
  return i2258
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'm_FirstSelected')
  i2260.m_sendNavigationEvents = !!i2261[2]
  i2260.m_DragThreshold = i2261[3]
  return i2260
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2263 = data
  i2262.m_HorizontalAxis = i2263[0]
  i2262.m_VerticalAxis = i2263[1]
  i2262.m_SubmitButton = i2263[2]
  i2262.m_CancelButton = i2263[3]
  i2262.m_InputActionsPerSecond = i2263[4]
  i2262.m_RepeatDelay = i2263[5]
  i2262.m_ForceModuleActive = !!i2263[6]
  i2262.m_SendPointerHoverToParent = !!i2263[7]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2267 = data
  i2266.pivot = new pc.Vec2( i2267[0], i2267[1] )
  i2266.anchorMin = new pc.Vec2( i2267[2], i2267[3] )
  i2266.anchorMax = new pc.Vec2( i2267[4], i2267[5] )
  i2266.sizeDelta = new pc.Vec2( i2267[6], i2267[7] )
  i2266.anchoredPosition3D = new pc.Vec3( i2267[8], i2267[9], i2267[10] )
  i2266.rotation = new pc.Quat(i2267[11], i2267[12], i2267[13], i2267[14])
  i2266.scale = new pc.Vec3( i2267[15], i2267[16], i2267[17] )
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2269 = data
  i2268.planeDistance = i2269[0]
  i2268.referencePixelsPerUnit = i2269[1]
  i2268.isFallbackOverlay = !!i2269[2]
  i2268.renderMode = i2269[3]
  i2268.renderOrder = i2269[4]
  i2268.sortingLayerName = i2269[5]
  i2268.sortingOrder = i2269[6]
  i2268.scaleFactor = i2269[7]
  request.r(i2269[8], i2269[9], 0, i2268, 'worldCamera')
  i2268.overrideSorting = !!i2269[10]
  i2268.pixelPerfect = !!i2269[11]
  i2268.targetDisplay = i2269[12]
  i2268.overridePixelPerfect = !!i2269[13]
  i2268.enabled = !!i2269[14]
  return i2268
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2271 = data
  i2270.m_UiScaleMode = i2271[0]
  i2270.m_ReferencePixelsPerUnit = i2271[1]
  i2270.m_ScaleFactor = i2271[2]
  i2270.m_ReferenceResolution = new pc.Vec2( i2271[3], i2271[4] )
  i2270.m_ScreenMatchMode = i2271[5]
  i2270.m_MatchWidthOrHeight = i2271[6]
  i2270.m_PhysicalUnit = i2271[7]
  i2270.m_FallbackScreenDPI = i2271[8]
  i2270.m_DefaultSpriteDPI = i2271[9]
  i2270.m_DynamicPixelsPerUnit = i2271[10]
  i2270.m_PresetInfoIsWorld = !!i2271[11]
  return i2270
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2273 = data
  i2272.m_IgnoreReversedGraphics = !!i2273[0]
  i2272.m_BlockingObjects = i2273[1]
  i2272.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2273[2] )
  return i2272
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2274 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2275 = data
  i2274._referenceResolution = new pc.Vec2( i2275[0], i2275[1] )
  i2274._portraitMatch = i2275[2]
  i2274._landscapeMatch = i2275[3]
  i2274._squareMatch = i2275[4]
  i2274._portraitAspectThreshold = i2275[5]
  i2274._landscapeAspectThreshold = i2275[6]
  i2274._aspectEpsilon = i2275[7]
  return i2274
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2276 = root || request.c( 'Joystick' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'background')
  request.r(i2277[2], i2277[3], 0, i2276, 'joy')
  i2276.deadZone = i2277[4]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2279 = data
  i2278.cullTransparentMesh = !!i2279[0]
  return i2278
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.Image' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'm_Sprite')
  i2280.m_Type = i2281[2]
  i2280.m_PreserveAspect = !!i2281[3]
  i2280.m_FillCenter = !!i2281[4]
  i2280.m_FillMethod = i2281[5]
  i2280.m_FillAmount = i2281[6]
  i2280.m_FillClockwise = !!i2281[7]
  i2280.m_FillOrigin = i2281[8]
  i2280.m_UseSpriteMesh = !!i2281[9]
  i2280.m_PixelsPerUnitMultiplier = i2281[10]
  request.r(i2281[11], i2281[12], 0, i2280, 'm_Material')
  i2280.m_Maskable = !!i2281[13]
  i2280.m_Color = new pc.Color(i2281[14], i2281[15], i2281[16], i2281[17])
  i2280.m_RaycastTarget = !!i2281[18]
  i2280.m_RaycastPadding = new pc.Vec4( i2281[19], i2281[20], i2281[21], i2281[22] )
  return i2280
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.Button' )
  var i2283 = data
  i2282.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2283[0], i2282.m_OnClick)
  i2282.m_Navigation = request.d('UnityEngine.UI.Navigation', i2283[1], i2282.m_Navigation)
  i2282.m_Transition = i2283[2]
  i2282.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2283[3], i2282.m_Colors)
  i2282.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2283[4], i2282.m_SpriteState)
  i2282.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2283[5], i2282.m_AnimationTriggers)
  i2282.m_Interactable = !!i2283[6]
  request.r(i2283[7], i2283[8], 0, i2282, 'm_TargetGraphic')
  return i2282
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2285 = data
  i2284.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2285[0], i2284.m_PersistentCalls)
  return i2284
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2287 = data
  var i2289 = i2287[0]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('UnityEngine.Events.PersistentCall', i2289[i + 0]));
  }
  i2286.m_Calls = i2288
  return i2286
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_Target')
  i2292.m_TargetAssemblyTypeName = i2293[2]
  i2292.m_MethodName = i2293[3]
  i2292.m_Mode = i2293[4]
  i2292.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2293[5], i2292.m_Arguments)
  i2292.m_CallState = i2293[6]
  return i2292
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2295 = data
  i2294.m_Mode = i2295[0]
  i2294.m_WrapAround = !!i2295[1]
  request.r(i2295[2], i2295[3], 0, i2294, 'm_SelectOnUp')
  request.r(i2295[4], i2295[5], 0, i2294, 'm_SelectOnDown')
  request.r(i2295[6], i2295[7], 0, i2294, 'm_SelectOnLeft')
  request.r(i2295[8], i2295[9], 0, i2294, 'm_SelectOnRight')
  return i2294
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2297 = data
  i2296.m_NormalColor = new pc.Color(i2297[0], i2297[1], i2297[2], i2297[3])
  i2296.m_HighlightedColor = new pc.Color(i2297[4], i2297[5], i2297[6], i2297[7])
  i2296.m_PressedColor = new pc.Color(i2297[8], i2297[9], i2297[10], i2297[11])
  i2296.m_SelectedColor = new pc.Color(i2297[12], i2297[13], i2297[14], i2297[15])
  i2296.m_DisabledColor = new pc.Color(i2297[16], i2297[17], i2297[18], i2297[19])
  i2296.m_ColorMultiplier = i2297[20]
  i2296.m_FadeDuration = i2297[21]
  return i2296
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'm_HighlightedSprite')
  request.r(i2299[2], i2299[3], 0, i2298, 'm_PressedSprite')
  request.r(i2299[4], i2299[5], 0, i2298, 'm_SelectedSprite')
  request.r(i2299[6], i2299[7], 0, i2298, 'm_DisabledSprite')
  return i2298
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2301 = data
  i2300.m_NormalTrigger = i2301[0]
  i2300.m_HighlightedTrigger = i2301[1]
  i2300.m_PressedTrigger = i2301[2]
  i2300.m_SelectedTrigger = i2301[3]
  i2300.m_DisabledTrigger = i2301[4]
  return i2300
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2302 = root || request.c( 'JumpButton' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'button')
  return i2302
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2305 = data
  i2304.m_ShowMaskGraphic = !!i2305[0]
  return i2304
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2307 = data
  i2306.m_hasFontAssetChanged = !!i2307[0]
  request.r(i2307[1], i2307[2], 0, i2306, 'm_baseMaterial')
  i2306.m_maskOffset = new pc.Vec4( i2307[3], i2307[4], i2307[5], i2307[6] )
  i2306.m_text = i2307[7]
  i2306.m_isRightToLeft = !!i2307[8]
  request.r(i2307[9], i2307[10], 0, i2306, 'm_fontAsset')
  request.r(i2307[11], i2307[12], 0, i2306, 'm_sharedMaterial')
  var i2309 = i2307[13]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 2, i2308, '')
  }
  i2306.m_fontSharedMaterials = i2308
  request.r(i2307[14], i2307[15], 0, i2306, 'm_fontMaterial')
  var i2311 = i2307[16]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2306.m_fontMaterials = i2310
  i2306.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2307[17], i2307[18], i2307[19], i2307[20])
  i2306.m_fontColor = new pc.Color(i2307[21], i2307[22], i2307[23], i2307[24])
  i2306.m_enableVertexGradient = !!i2307[25]
  i2306.m_colorMode = i2307[26]
  i2306.m_fontColorGradient = request.d('TMPro.VertexGradient', i2307[27], i2306.m_fontColorGradient)
  request.r(i2307[28], i2307[29], 0, i2306, 'm_fontColorGradientPreset')
  request.r(i2307[30], i2307[31], 0, i2306, 'm_spriteAsset')
  i2306.m_tintAllSprites = !!i2307[32]
  request.r(i2307[33], i2307[34], 0, i2306, 'm_StyleSheet')
  i2306.m_TextStyleHashCode = i2307[35]
  i2306.m_overrideHtmlColors = !!i2307[36]
  i2306.m_faceColor = UnityEngine.Color32.ConstructColor(i2307[37], i2307[38], i2307[39], i2307[40])
  i2306.m_fontSize = i2307[41]
  i2306.m_fontSizeBase = i2307[42]
  i2306.m_fontWeight = i2307[43]
  i2306.m_enableAutoSizing = !!i2307[44]
  i2306.m_fontSizeMin = i2307[45]
  i2306.m_fontSizeMax = i2307[46]
  i2306.m_fontStyle = i2307[47]
  i2306.m_HorizontalAlignment = i2307[48]
  i2306.m_VerticalAlignment = i2307[49]
  i2306.m_textAlignment = i2307[50]
  i2306.m_characterSpacing = i2307[51]
  i2306.m_characterHorizontalScale = i2307[52]
  i2306.m_wordSpacing = i2307[53]
  i2306.m_lineSpacing = i2307[54]
  i2306.m_lineSpacingMax = i2307[55]
  i2306.m_paragraphSpacing = i2307[56]
  i2306.m_charWidthMaxAdj = i2307[57]
  i2306.m_TextWrappingMode = i2307[58]
  i2306.m_wordWrappingRatios = i2307[59]
  i2306.m_overflowMode = i2307[60]
  request.r(i2307[61], i2307[62], 0, i2306, 'm_linkedTextComponent')
  request.r(i2307[63], i2307[64], 0, i2306, 'parentLinkedComponent')
  i2306.m_enableKerning = !!i2307[65]
  var i2313 = i2307[66]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(i2313[i + 0]);
  }
  i2306.m_ActiveFontFeatures = i2312
  i2306.m_enableExtraPadding = !!i2307[67]
  i2306.checkPaddingRequired = !!i2307[68]
  i2306.m_isRichText = !!i2307[69]
  i2306.m_parseCtrlCharacters = !!i2307[70]
  i2306.m_isOrthographic = !!i2307[71]
  i2306.m_isCullingEnabled = !!i2307[72]
  i2306.m_horizontalMapping = i2307[73]
  i2306.m_verticalMapping = i2307[74]
  i2306.m_uvLineOffset = i2307[75]
  i2306.m_geometrySortingOrder = i2307[76]
  i2306.m_IsTextObjectScaleStatic = !!i2307[77]
  i2306.m_VertexBufferAutoSizeReduction = !!i2307[78]
  i2306.m_useMaxVisibleDescender = !!i2307[79]
  i2306.m_pageToDisplay = i2307[80]
  i2306.m_margin = new pc.Vec4( i2307[81], i2307[82], i2307[83], i2307[84] )
  i2306.m_isUsingLegacyAnimationComponent = !!i2307[85]
  i2306.m_isVolumetricText = !!i2307[86]
  request.r(i2307[87], i2307[88], 0, i2306, 'm_Material')
  i2306.m_EmojiFallbackSupport = !!i2307[89]
  i2306.m_Maskable = !!i2307[90]
  i2306.m_Color = new pc.Color(i2307[91], i2307[92], i2307[93], i2307[94])
  i2306.m_RaycastTarget = !!i2307[95]
  i2306.m_RaycastPadding = new pc.Vec4( i2307[96], i2307[97], i2307[98], i2307[99] )
  return i2306
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2316 = root || request.c( 'TMPro.VertexGradient' )
  var i2317 = data
  i2316.topLeft = new pc.Color(i2317[0], i2317[1], i2317[2], i2317[3])
  i2316.topRight = new pc.Color(i2317[4], i2317[5], i2317[6], i2317[7])
  i2316.bottomLeft = new pc.Color(i2317[8], i2317[9], i2317[10], i2317[11])
  i2316.bottomRight = new pc.Color(i2317[12], i2317[13], i2317[14], i2317[15])
  return i2316
}

Deserializers["TutController"] = function (request, data, root) {
  var i2320 = root || request.c( 'TutController' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'tutScene')
  request.r(i2321[2], i2321[3], 0, i2320, 'startTut')
  request.r(i2321[4], i2321[5], 0, i2320, 'playTut')
  request.r(i2321[6], i2321[7], 0, i2320, 'farTut')
  request.r(i2321[8], i2321[9], 0, i2320, 'failTut')
  return i2320
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2322 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2323 = data
  i2322.targetIsSelf = !!i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'targetGO')
  i2322.tweenTargetIsTargetGO = !!i2323[3]
  i2322.delay = i2323[4]
  i2322.duration = i2323[5]
  i2322.easeType = i2323[6]
  i2322.easeCurve = new pc.AnimationCurve( { keys_flow: i2323[7] } )
  i2322.loopType = i2323[8]
  i2322.loops = i2323[9]
  i2322.id = i2323[10]
  i2322.isRelative = !!i2323[11]
  i2322.isFrom = !!i2323[12]
  i2322.isIndependentUpdate = !!i2323[13]
  i2322.autoKill = !!i2323[14]
  i2322.autoGenerate = !!i2323[15]
  i2322.isActive = !!i2323[16]
  i2322.isValid = !!i2323[17]
  request.r(i2323[18], i2323[19], 0, i2322, 'target')
  i2322.animationType = i2323[20]
  i2322.targetType = i2323[21]
  i2322.forcedTargetType = i2323[22]
  i2322.autoPlay = !!i2323[23]
  i2322.useTargetAsV3 = !!i2323[24]
  i2322.endValueFloat = i2323[25]
  i2322.endValueV3 = new pc.Vec3( i2323[26], i2323[27], i2323[28] )
  i2322.endValueV2 = new pc.Vec2( i2323[29], i2323[30] )
  i2322.endValueColor = new pc.Color(i2323[31], i2323[32], i2323[33], i2323[34])
  i2322.endValueString = i2323[35]
  i2322.endValueRect = UnityEngine.Rect.MinMaxRect(i2323[36], i2323[37], i2323[38], i2323[39])
  request.r(i2323[40], i2323[41], 0, i2322, 'endValueTransform')
  i2322.optionalBool0 = !!i2323[42]
  i2322.optionalBool1 = !!i2323[43]
  i2322.optionalFloat0 = i2323[44]
  i2322.optionalInt0 = i2323[45]
  i2322.optionalRotationMode = i2323[46]
  i2322.optionalScrambleMode = i2323[47]
  i2322.optionalShakeRandomnessMode = i2323[48]
  i2322.optionalString = i2323[49]
  i2322.updateType = i2323[50]
  i2322.isSpeedBased = !!i2323[51]
  i2322.hasOnStart = !!i2323[52]
  i2322.hasOnPlay = !!i2323[53]
  i2322.hasOnUpdate = !!i2323[54]
  i2322.hasOnStepComplete = !!i2323[55]
  i2322.hasOnComplete = !!i2323[56]
  i2322.hasOnTweenCreated = !!i2323[57]
  i2322.hasOnRewind = !!i2323[58]
  i2322.onStart = request.d('UnityEngine.Events.UnityEvent', i2323[59], i2322.onStart)
  i2322.onPlay = request.d('UnityEngine.Events.UnityEvent', i2323[60], i2322.onPlay)
  i2322.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2323[61], i2322.onUpdate)
  i2322.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2323[62], i2322.onStepComplete)
  i2322.onComplete = request.d('UnityEngine.Events.UnityEvent', i2323[63], i2322.onComplete)
  i2322.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2323[64], i2322.onTweenCreated)
  i2322.onRewind = request.d('UnityEngine.Events.UnityEvent', i2323[65], i2322.onRewind)
  return i2322
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2325 = data
  i2324.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2325[0], i2324.m_PersistentCalls)
  return i2324
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2326 = root || request.c( 'HideOnPointer' )
  var i2327 = data
  i2326.OnPointerDownEvent = request.d('System.Action', i2327[0], i2326.OnPointerDownEvent)
  return i2326
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2328 = root || request.c( 'System.Action' )
  var i2329 = data
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2331 = data
  i2330.center = new pc.Vec3( i2331[0], i2331[1], i2331[2] )
  i2330.size = new pc.Vec3( i2331[3], i2331[4], i2331[5] )
  i2330.enabled = !!i2331[6]
  i2330.isTrigger = !!i2331[7]
  request.r(i2331[8], i2331[9], 0, i2330, 'material')
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2333 = data
  i2332.mass = i2333[0]
  i2332.drag = i2333[1]
  i2332.angularDrag = i2333[2]
  i2332.useGravity = !!i2333[3]
  i2332.isKinematic = !!i2333[4]
  i2332.constraints = i2333[5]
  i2332.maxAngularVelocity = i2333[6]
  i2332.collisionDetectionMode = i2333[7]
  i2332.interpolation = i2333[8]
  return i2332
}

Deserializers["Gift"] = function (request, data, root) {
  var i2334 = root || request.c( 'Gift' )
  var i2335 = data
  i2334.collectDone = !!i2335[0]
  var i2337 = i2335[1]
  var i2336 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 1, i2336, '')
  }
  i2334.hints = i2336
  request.r(i2335[2], i2335[3], 0, i2334, 'collectSound')
  request.r(i2335[4], i2335[5], 0, i2334, 'collectEffect')
  request.r(i2335[6], i2335[7], 0, i2334, 'arrow')
  return i2334
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2340 = root || request.c( 'SoundHint' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'Sound')
  request.r(i2341[2], i2341[3], 0, i2340, 'Source')
  return i2340
}

Deserializers["MonsterSelector"] = function (request, data, root) {
  var i2342 = root || request.c( 'MonsterSelector' )
  var i2343 = data
  i2342.monsterIndex = i2343[0]
  var i2345 = i2343[1]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('MonsterSelector+MonsterEntry', i2345[i + 0]) );
  }
  i2342.monsters = i2344
  request.r(i2343[2], i2343[3], 0, i2342, 'hudIcon')
  request.r(i2343[4], i2343[5], 0, i2342, 'hudName')
  request.r(i2343[6], i2343[7], 0, i2342, 'unlockIcon')
  i2342.driveHud = !!i2343[8]
  return i2342
}

Deserializers["MonsterSelector+MonsterEntry"] = function (request, data, root) {
  var i2348 = root || request.c( 'MonsterSelector+MonsterEntry' )
  var i2349 = data
  i2348.displayName = i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'model')
  request.r(i2349[3], i2349[4], 0, i2348, 'icon')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'mesh')
  i2356.meshCount = i2357[2]
  i2356.activeVertexStreamsCount = i2357[3]
  i2356.alignment = i2357[4]
  i2356.renderMode = i2357[5]
  i2356.sortMode = i2357[6]
  i2356.lengthScale = i2357[7]
  i2356.velocityScale = i2357[8]
  i2356.cameraVelocityScale = i2357[9]
  i2356.normalDirection = i2357[10]
  i2356.sortingFudge = i2357[11]
  i2356.minParticleSize = i2357[12]
  i2356.maxParticleSize = i2357[13]
  i2356.pivot = new pc.Vec3( i2357[14], i2357[15], i2357[16] )
  request.r(i2357[17], i2357[18], 0, i2356, 'trailMaterial')
  i2356.applyActiveColorSpace = !!i2357[19]
  i2356.enabled = !!i2357[20]
  request.r(i2357[21], i2357[22], 0, i2356, 'sharedMaterial')
  var i2359 = i2357[23]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 2) {
  request.r(i2359[i + 0], i2359[i + 1], 2, i2358, '')
  }
  i2356.sharedMaterials = i2358
  i2356.receiveShadows = !!i2357[24]
  i2356.shadowCastingMode = i2357[25]
  i2356.sortingLayerID = i2357[26]
  i2356.sortingOrder = i2357[27]
  i2356.lightmapIndex = i2357[28]
  i2356.lightmapSceneIndex = i2357[29]
  i2356.lightmapScaleOffset = new pc.Vec4( i2357[30], i2357[31], i2357[32], i2357[33] )
  i2356.lightProbeUsage = i2357[34]
  i2356.reflectionProbeUsage = i2357[35]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2361 = data
  i2360.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2361[0], i2360.main)
  i2360.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2361[1], i2360.colorBySpeed)
  i2360.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2361[2], i2360.colorOverLifetime)
  i2360.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2361[3], i2360.emission)
  i2360.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2361[4], i2360.rotationBySpeed)
  i2360.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2361[5], i2360.rotationOverLifetime)
  i2360.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2361[6], i2360.shape)
  i2360.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2361[7], i2360.sizeBySpeed)
  i2360.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2361[8], i2360.sizeOverLifetime)
  i2360.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2361[9], i2360.textureSheetAnimation)
  i2360.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2361[10], i2360.velocityOverLifetime)
  i2360.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2361[11], i2360.noise)
  i2360.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2361[12], i2360.inheritVelocity)
  i2360.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2361[13], i2360.forceOverLifetime)
  i2360.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2361[14], i2360.limitVelocityOverLifetime)
  i2360.useAutoRandomSeed = !!i2361[15]
  i2360.randomSeed = i2361[16]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2362 = root || new pc.ParticleSystemMain()
  var i2363 = data
  i2362.duration = i2363[0]
  i2362.loop = !!i2363[1]
  i2362.prewarm = !!i2363[2]
  i2362.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[3], i2362.startDelay)
  i2362.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[4], i2362.startLifetime)
  i2362.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[5], i2362.startSpeed)
  i2362.startSize3D = !!i2363[6]
  i2362.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[7], i2362.startSizeX)
  i2362.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[8], i2362.startSizeY)
  i2362.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[9], i2362.startSizeZ)
  i2362.startRotation3D = !!i2363[10]
  i2362.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[11], i2362.startRotationX)
  i2362.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[12], i2362.startRotationY)
  i2362.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[13], i2362.startRotationZ)
  i2362.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2363[14], i2362.startColor)
  i2362.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[15], i2362.gravityModifier)
  i2362.simulationSpace = i2363[16]
  request.r(i2363[17], i2363[18], 0, i2362, 'customSimulationSpace')
  i2362.simulationSpeed = i2363[19]
  i2362.useUnscaledTime = !!i2363[20]
  i2362.scalingMode = i2363[21]
  i2362.playOnAwake = !!i2363[22]
  i2362.maxParticles = i2363[23]
  i2362.emitterVelocityMode = i2363[24]
  i2362.stopAction = i2363[25]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2364 = root || new pc.MinMaxCurve()
  var i2365 = data
  i2364.mode = i2365[0]
  i2364.curveMin = new pc.AnimationCurve( { keys_flow: i2365[1] } )
  i2364.curveMax = new pc.AnimationCurve( { keys_flow: i2365[2] } )
  i2364.curveMultiplier = i2365[3]
  i2364.constantMin = i2365[4]
  i2364.constantMax = i2365[5]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2366 = root || new pc.MinMaxGradient()
  var i2367 = data
  i2366.mode = i2367[0]
  i2366.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2367[1], i2366.gradientMin)
  i2366.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2367[2], i2366.gradientMax)
  i2366.colorMin = new pc.Color(i2367[3], i2367[4], i2367[5], i2367[6])
  i2366.colorMax = new pc.Color(i2367[7], i2367[8], i2367[9], i2367[10])
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2369 = data
  i2368.mode = i2369[0]
  var i2371 = i2369[1]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2371[i + 0]) );
  }
  i2368.colorKeys = i2370
  var i2373 = i2369[2]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2373[i + 0]) );
  }
  i2368.alphaKeys = i2372
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemColorBySpeed()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2375[1], i2374.color)
  i2374.range = new pc.Vec2( i2375[2], i2375[3] )
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2379 = data
  i2378.color = new pc.Color(i2379[0], i2379[1], i2379[2], i2379[3])
  i2378.time = i2379[4]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2383 = data
  i2382.alpha = i2383[0]
  i2382.time = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemColorOverLifetime()
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2385[1], i2384.color)
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemEmitter()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[1], i2386.rateOverTime)
  i2386.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[2], i2386.rateOverDistance)
  var i2389 = i2387[3]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2389[i + 0]) );
  }
  i2386.bursts = i2388
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemBurst()
  var i2393 = data
  i2392.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[0], i2392.count)
  i2392.cycleCount = i2393[1]
  i2392.minCount = i2393[2]
  i2392.maxCount = i2393[3]
  i2392.repeatInterval = i2393[4]
  i2392.time = i2393[5]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemRotationBySpeed()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.x)
  i2394.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.y)
  i2394.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.z)
  i2394.separateAxes = !!i2395[4]
  i2394.range = new pc.Vec2( i2395[5], i2395[6] )
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.x)
  i2396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.y)
  i2396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.z)
  i2396.separateAxes = !!i2397[4]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemShape()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.shapeType = i2399[1]
  i2398.randomDirectionAmount = i2399[2]
  i2398.sphericalDirectionAmount = i2399[3]
  i2398.randomPositionAmount = i2399[4]
  i2398.alignToDirection = !!i2399[5]
  i2398.radius = i2399[6]
  i2398.radiusMode = i2399[7]
  i2398.radiusSpread = i2399[8]
  i2398.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[9], i2398.radiusSpeed)
  i2398.radiusThickness = i2399[10]
  i2398.angle = i2399[11]
  i2398.length = i2399[12]
  i2398.boxThickness = new pc.Vec3( i2399[13], i2399[14], i2399[15] )
  i2398.meshShapeType = i2399[16]
  request.r(i2399[17], i2399[18], 0, i2398, 'mesh')
  request.r(i2399[19], i2399[20], 0, i2398, 'meshRenderer')
  request.r(i2399[21], i2399[22], 0, i2398, 'skinnedMeshRenderer')
  i2398.useMeshMaterialIndex = !!i2399[23]
  i2398.meshMaterialIndex = i2399[24]
  i2398.useMeshColors = !!i2399[25]
  i2398.normalOffset = i2399[26]
  i2398.arc = i2399[27]
  i2398.arcMode = i2399[28]
  i2398.arcSpread = i2399[29]
  i2398.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[30], i2398.arcSpeed)
  i2398.donutRadius = i2399[31]
  i2398.position = new pc.Vec3( i2399[32], i2399[33], i2399[34] )
  i2398.rotation = new pc.Vec3( i2399[35], i2399[36], i2399[37] )
  i2398.scale = new pc.Vec3( i2399[38], i2399[39], i2399[40] )
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemSizeBySpeed()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[1], i2400.x)
  i2400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[2], i2400.y)
  i2400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[3], i2400.z)
  i2400.separateAxes = !!i2401[4]
  i2400.range = new pc.Vec2( i2401[5], i2401[6] )
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.separateAxes = !!i2403[4]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.mode = i2405[1]
  i2404.animation = i2405[2]
  i2404.numTilesX = i2405[3]
  i2404.numTilesY = i2405[4]
  i2404.useRandomRow = !!i2405[5]
  i2404.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[6], i2404.frameOverTime)
  i2404.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[7], i2404.startFrame)
  i2404.cycleCount = i2405[8]
  i2404.rowIndex = i2405[9]
  i2404.flipU = i2405[10]
  i2404.flipV = i2405[11]
  i2404.spriteCount = i2405[12]
  var i2407 = i2405[13]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.sprites = i2406
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[1], i2410.x)
  i2410.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.y)
  i2410.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[3], i2410.z)
  i2410.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[4], i2410.radial)
  i2410.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[5], i2410.speedModifier)
  i2410.space = i2411[6]
  i2410.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[7], i2410.orbitalX)
  i2410.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[8], i2410.orbitalY)
  i2410.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[9], i2410.orbitalZ)
  i2410.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[10], i2410.orbitalOffsetX)
  i2410.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[11], i2410.orbitalOffsetY)
  i2410.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[12], i2410.orbitalOffsetZ)
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemNoise()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.separateAxes = !!i2413[1]
  i2412.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.strengthX)
  i2412.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.strengthY)
  i2412.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[4], i2412.strengthZ)
  i2412.frequency = i2413[5]
  i2412.damping = !!i2413[6]
  i2412.octaveCount = i2413[7]
  i2412.octaveMultiplier = i2413[8]
  i2412.octaveScale = i2413[9]
  i2412.quality = i2413[10]
  i2412.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[11], i2412.scrollSpeed)
  i2412.scrollSpeedMultiplier = i2413[12]
  i2412.remapEnabled = !!i2413[13]
  i2412.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[14], i2412.remapX)
  i2412.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[15], i2412.remapY)
  i2412.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[16], i2412.remapZ)
  i2412.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[17], i2412.positionAmount)
  i2412.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[18], i2412.rotationAmount)
  i2412.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[19], i2412.sizeAmount)
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemInheritVelocity()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.mode = i2415[1]
  i2414.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.curve)
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2416 = root || new pc.ParticleSystemForceOverLifetime()
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[1], i2416.x)
  i2416.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[2], i2416.y)
  i2416.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[3], i2416.z)
  i2416.space = i2417[4]
  i2416.randomized = !!i2417[5]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[1], i2418.limit)
  i2418.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[2], i2418.limitX)
  i2418.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.limitY)
  i2418.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.limitZ)
  i2418.dampen = i2419[5]
  i2418.separateAxes = !!i2419[6]
  i2418.space = i2419[7]
  i2418.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[8], i2418.drag)
  i2418.multiplyDragByParticleSize = !!i2419[9]
  i2418.multiplyDragByParticleVelocity = !!i2419[10]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2421 = data
  i2420.color = new pc.Color(i2421[0], i2421[1], i2421[2], i2421[3])
  request.r(i2421[4], i2421[5], 0, i2420, 'sprite')
  i2420.flipX = !!i2421[6]
  i2420.flipY = !!i2421[7]
  i2420.drawMode = i2421[8]
  i2420.size = new pc.Vec2( i2421[9], i2421[10] )
  i2420.tileMode = i2421[11]
  i2420.adaptiveModeThreshold = i2421[12]
  i2420.maskInteraction = i2421[13]
  i2420.spriteSortPoint = i2421[14]
  i2420.enabled = !!i2421[15]
  request.r(i2421[16], i2421[17], 0, i2420, 'sharedMaterial')
  var i2423 = i2421[18]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 2, i2422, '')
  }
  i2420.sharedMaterials = i2422
  i2420.receiveShadows = !!i2421[19]
  i2420.shadowCastingMode = i2421[20]
  i2420.sortingLayerID = i2421[21]
  i2420.sortingOrder = i2421[22]
  i2420.lightmapIndex = i2421[23]
  i2420.lightmapSceneIndex = i2421[24]
  i2420.lightmapScaleOffset = new pc.Vec4( i2421[25], i2421[26], i2421[27], i2421[28] )
  i2420.lightProbeUsage = i2421[29]
  i2420.reflectionProbeUsage = i2421[30]
  return i2420
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2424 = root || request.c( 'CharacterMotor' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'characterInput')
  request.r(i2425[2], i2425[3], 0, i2424, 'cameraYawTransform')
  request.r(i2425[4], i2425[5], 0, i2424, '_arrow')
  i2424.moveSpeed = i2425[6]
  i2424.jumpHeight = i2425[7]
  request.r(i2425[8], i2425[9], 0, i2424, 'groundChecker')
  i2424.gravity = i2425[10]
  i2424.enableStepClimb = !!i2425[11]
  i2424.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2425[12] )
  i2424.maxStepHeight = i2425[13]
  i2424.stepCheckDistance = i2425[14]
  i2424.stepUpSpeed = i2425[15]
  i2424.stepUpAcceleration = i2425[16]
  i2424.minimumStepFacing = i2425[17]
  i2424.climbSpeed = i2425[18]
  i2424.ladderSnapStrength = i2425[19]
  request.r(i2425[20], i2425[21], 0, i2424, 'controller')
  i2424.autoRun = !!i2425[22]
  return i2424
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2426 = root || request.c( 'CharacterRotation' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'motor')
  i2426.rotationSpeed = i2427[2]
  return i2426
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2428 = root || request.c( 'CharacterAnimation' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'animator')
  request.r(i2429[2], i2429[3], 0, i2428, 'motor')
  i2428.speedChangeRate = i2429[4]
  i2428.groundedGraceTime = i2429[5]
  return i2428
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2430 = root || request.c( 'CharacterCollect' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'motor')
  request.r(i2431[2], i2431[3], 0, i2430, 'avatar')
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2433 = data
  i2432.center = new pc.Vec3( i2433[0], i2433[1], i2433[2] )
  i2432.radius = i2433[3]
  i2432.height = i2433[4]
  i2432.direction = i2433[5]
  i2432.enabled = !!i2433[6]
  i2432.isTrigger = !!i2433[7]
  request.r(i2433[8], i2433[9], 0, i2432, 'material')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'clip')
  request.r(i2435[2], i2435[3], 0, i2434, 'outputAudioMixerGroup')
  i2434.playOnAwake = !!i2435[4]
  i2434.loop = !!i2435[5]
  i2434.time = i2435[6]
  i2434.volume = i2435[7]
  i2434.pitch = i2435[8]
  i2434.enabled = !!i2435[9]
  return i2434
}

Deserializers["FootstepAudio"] = function (request, data, root) {
  var i2436 = root || request.c( 'FootstepAudio' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'motor')
  request.r(i2437[2], i2437[3], 0, i2436, 'footstepClip')
  i2436.volume = i2437[4]
  i2436.pitchAtFullSpeed = i2437[5]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'animatorController')
  request.r(i2439[2], i2439[3], 0, i2438, 'avatar')
  i2438.updateMode = i2439[4]
  i2438.hasTransformHierarchy = !!i2439[5]
  i2438.applyRootMotion = !!i2439[6]
  var i2441 = i2439[7]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2438.humanBones = i2440
  i2438.enabled = !!i2439[8]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'sharedMesh')
  var i2447 = i2445[2]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 2, i2446, '')
  }
  i2444.bones = i2446
  i2444.updateWhenOffscreen = !!i2445[3]
  i2444.localBounds = i2445[4]
  request.r(i2445[5], i2445[6], 0, i2444, 'rootBone')
  var i2449 = i2445[7]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2449[i + 0]) );
  }
  i2444.blendShapesWeights = i2448
  i2444.enabled = !!i2445[8]
  request.r(i2445[9], i2445[10], 0, i2444, 'sharedMaterial')
  var i2451 = i2445[11]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2444.sharedMaterials = i2450
  i2444.receiveShadows = !!i2445[12]
  i2444.shadowCastingMode = i2445[13]
  i2444.sortingLayerID = i2445[14]
  i2444.sortingOrder = i2445[15]
  i2444.lightmapIndex = i2445[16]
  i2444.lightmapSceneIndex = i2445[17]
  i2444.lightmapScaleOffset = new pc.Vec4( i2445[18], i2445[19], i2445[20], i2445[21] )
  i2444.lightProbeUsage = i2445[22]
  i2444.reflectionProbeUsage = i2445[23]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2455 = data
  i2454.weight = i2455[0]
  return i2454
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2456 = root || request.c( 'GroundChecker' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'groundPoint')
  i2456.checkRadius = i2457[2]
  i2456.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2457[3] )
  return i2456
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2458 = root || request.c( 'CameraFollow' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'target')
  i2458.smoothTime = i2459[2]
  return i2458
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2460 = root || request.c( 'CameraLook' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'input')
  request.r(i2461[2], i2461[3], 0, i2460, 'yawPivot')
  request.r(i2461[4], i2461[5], 0, i2460, 'pitchPivot')
  i2460.minPitch = i2461[6]
  i2460.maxPitch = i2461[7]
  i2460.yaw = i2461[8]
  i2460.pitch = i2461[9]
  i2460.defaltYaw = i2461[10]
  i2460.defaltPitch = i2461[11]
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

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2464 = root || request.c( 'CharacterInput' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'joystick')
  request.r(i2465[2], i2465[3], 0, i2464, 'jumpButton')
  return i2464
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2466 = root || request.c( 'InputManager' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'worldCamera')
  i2466.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2467[2] )
  i2466.touchSensitivity = i2467[3]
  i2466.mouseSensitivity = i2467[4]
  i2466.dragThreshold = i2467[5]
  return i2466
}

Deserializers["GameController"] = function (request, data, root) {
  var i2468 = root || request.c( 'GameController' )
  var i2469 = data
  i2468.timeToShowComplete = i2469[0]
  i2468.currentProgress = i2469[1]
  i2468.target = i2469[2]
  request.r(i2469[3], i2469[4], 0, i2468, 'progressText')
  request.r(i2469[5], i2469[6], 0, i2468, 'collectText')
  request.r(i2469[7], i2469[8], 0, i2468, '_cta')
  var i2471 = i2469[9]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 1, i2470, '')
  }
  i2468.gifts = i2470
  request.r(i2469[10], i2469[11], 0, i2468, 'collect')
  request.r(i2469[12], i2469[13], 0, i2468, 'tut')
  request.r(i2469[14], i2469[15], 0, i2468, 'playerSpawn')
  request.r(i2469[16], i2469[17], 0, i2468, 'giftSpawn')
  request.r(i2469[18], i2469[19], 0, i2468, 'failUI')
  request.r(i2469[20], i2469[21], 0, i2468, 'playerMotor')
  i2468.failHeight = i2469[22]
  i2468.failOnlyAfterClimb = !!i2469[23]
  i2468.alwaysFailDepth = i2469[24]
  request.r(i2469[25], i2469[26], 0, i2468, 'winSound')
  request.r(i2469[27], i2469[28], 0, i2468, 'loseSound')
  i2468.failByFallDistance = !!i2469[29]
  i2468.maxSafeFall = i2469[30]
  request.r(i2469[31], i2469[32], 0, i2468, 'winEffect')
  i2468.sequentialGifts = !!i2469[33]
  i2468.progressOffset = i2469[34]
  i2468.progressTotal = i2469[35]
  request.r(i2469[36], i2469[37], 0, i2468, 'unlockPanel')
  request.r(i2469[38], i2469[39], 0, i2468, 'unlockCTA')
  i2468.unlockAutoInstallDelay = i2469[40]
  return i2468
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2474 = root || request.c( 'AudioController' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'musicSource')
  request.r(i2475[2], i2475[3], 0, i2474, 'poolParent')
  i2474.startSize = i2475[4]
  i2474.sfxVolumeScale = i2475[5]
  return i2474
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2476 = root || request.c( 'LunaController' )
  var i2477 = data
  i2476.LimitTimePlay = !!i2477[0]
  i2476.TimePlay = i2477[1]
  i2476.MonsterIndex = i2477[2]
  i2476.MonsterIndex2 = i2477[3]
  request.r(i2477[4], i2477[5], 0, i2476, 'monsterSelector')
  request.r(i2477[6], i2477[7], 0, i2476, 'monsterSelector2')
  var i2479 = i2477[8]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2476.images = i2478
  request.r(i2477[9], i2477[10], 0, i2476, 'CTA')
  request.r(i2477[11], i2477[12], 0, i2476, 'clickOverlay')
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2483 = data
  i2482.type = i2483[0]
  i2482.color = new pc.Color(i2483[1], i2483[2], i2483[3], i2483[4])
  i2482.cullingMask = i2483[5]
  i2482.intensity = i2483[6]
  i2482.range = i2483[7]
  i2482.spotAngle = i2483[8]
  i2482.shadows = i2483[9]
  i2482.shadowNormalBias = i2483[10]
  i2482.shadowBias = i2483[11]
  i2482.shadowStrength = i2483[12]
  i2482.shadowResolution = i2483[13]
  i2482.lightmapBakeType = i2483[14]
  i2482.renderMode = i2483[15]
  request.r(i2483[16], i2483[17], 0, i2482, 'cookie')
  i2482.cookieSize = i2483[18]
  i2482.shadowNearPlane = i2483[19]
  i2482.occlusionMaskChannel = i2483[20]
  i2482.isBaked = !!i2483[21]
  i2482.mixedLightingMode = i2483[22]
  i2482.enabled = !!i2483[23]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'sharedMesh')
  i2484.convex = !!i2485[2]
  i2484.enabled = !!i2485[3]
  i2484.isTrigger = !!i2485[4]
  request.r(i2485[5], i2485[6], 0, i2484, 'material')
  return i2484
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[52],"77":[56],"78":[26],"79":[26],"80":[26],"81":[26],"82":[26],"83":[26],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[56],"99":[36],"100":[101],"102":[101],"7":[6],"48":[47],"103":[26],"104":[105],"11":[8],"106":[6],"107":[13,6],"108":[36],"109":[13,6],"110":[6],"111":[6],"112":[36,6],"19":[6,13],"113":[114],"115":[114],"116":[114],"117":[6],"118":[6],"9":[7],"14":[13,6],"119":[6],"8":[7],"120":[6],"121":[6],"122":[6],"123":[6],"124":[6],"125":[6],"126":[6],"18":[6],"127":[6],"128":[13,6],"129":[6],"130":[6],"131":[6],"132":[6],"133":[13,6],"134":[6],"135":[4],"136":[4],"5":[4],"137":[4],"138":[56],"139":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Gift","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.Transform","SoundHint","MonsterSelector","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AudioSource","FootstepAudio","UnityEngine.AnimatorOverrideController","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","AudioController","LunaController","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Elevator","Ladder","UnityEngine.Collider","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/12/2026 10:20:45";

Deserializers.lunaDaysRunning = "14.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_DatDV_BAH_V02_HoaiTT";

Deserializers.lunaAppID = "43843";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1678";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4835";

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

Deserializers.buildID = "be97a683-aea3-4208-995f-ec4c5d019798";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

