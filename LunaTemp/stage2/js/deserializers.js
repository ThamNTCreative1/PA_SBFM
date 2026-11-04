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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2295 = data
  i2294.m_Alpha = i2295[0]
  i2294.m_Interactable = !!i2295[1]
  i2294.m_BlocksRaycasts = !!i2295[2]
  i2294.m_IgnoreParentGroups = !!i2295[3]
  i2294.enabled = !!i2295[4]
  return i2294
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2297 = data
  i2296.m_hasFontAssetChanged = !!i2297[0]
  request.r(i2297[1], i2297[2], 0, i2296, 'm_baseMaterial')
  i2296.m_maskOffset = new pc.Vec4( i2297[3], i2297[4], i2297[5], i2297[6] )
  i2296.m_text = i2297[7]
  i2296.m_isRightToLeft = !!i2297[8]
  request.r(i2297[9], i2297[10], 0, i2296, 'm_fontAsset')
  request.r(i2297[11], i2297[12], 0, i2296, 'm_sharedMaterial')
  var i2299 = i2297[13]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.m_fontSharedMaterials = i2298
  request.r(i2297[14], i2297[15], 0, i2296, 'm_fontMaterial')
  var i2301 = i2297[16]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2296.m_fontMaterials = i2300
  i2296.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2297[17], i2297[18], i2297[19], i2297[20])
  i2296.m_fontColor = new pc.Color(i2297[21], i2297[22], i2297[23], i2297[24])
  i2296.m_enableVertexGradient = !!i2297[25]
  i2296.m_colorMode = i2297[26]
  i2296.m_fontColorGradient = request.d('TMPro.VertexGradient', i2297[27], i2296.m_fontColorGradient)
  request.r(i2297[28], i2297[29], 0, i2296, 'm_fontColorGradientPreset')
  request.r(i2297[30], i2297[31], 0, i2296, 'm_spriteAsset')
  i2296.m_tintAllSprites = !!i2297[32]
  request.r(i2297[33], i2297[34], 0, i2296, 'm_StyleSheet')
  i2296.m_TextStyleHashCode = i2297[35]
  i2296.m_overrideHtmlColors = !!i2297[36]
  i2296.m_faceColor = UnityEngine.Color32.ConstructColor(i2297[37], i2297[38], i2297[39], i2297[40])
  i2296.m_fontSize = i2297[41]
  i2296.m_fontSizeBase = i2297[42]
  i2296.m_fontWeight = i2297[43]
  i2296.m_enableAutoSizing = !!i2297[44]
  i2296.m_fontSizeMin = i2297[45]
  i2296.m_fontSizeMax = i2297[46]
  i2296.m_fontStyle = i2297[47]
  i2296.m_HorizontalAlignment = i2297[48]
  i2296.m_VerticalAlignment = i2297[49]
  i2296.m_textAlignment = i2297[50]
  i2296.m_characterSpacing = i2297[51]
  i2296.m_wordSpacing = i2297[52]
  i2296.m_lineSpacing = i2297[53]
  i2296.m_lineSpacingMax = i2297[54]
  i2296.m_paragraphSpacing = i2297[55]
  i2296.m_charWidthMaxAdj = i2297[56]
  i2296.m_TextWrappingMode = i2297[57]
  i2296.m_wordWrappingRatios = i2297[58]
  i2296.m_overflowMode = i2297[59]
  request.r(i2297[60], i2297[61], 0, i2296, 'm_linkedTextComponent')
  request.r(i2297[62], i2297[63], 0, i2296, 'parentLinkedComponent')
  i2296.m_enableKerning = !!i2297[64]
  var i2303 = i2297[65]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(i2303[i + 0]);
  }
  i2296.m_ActiveFontFeatures = i2302
  i2296.m_enableExtraPadding = !!i2297[66]
  i2296.checkPaddingRequired = !!i2297[67]
  i2296.m_isRichText = !!i2297[68]
  i2296.m_parseCtrlCharacters = !!i2297[69]
  i2296.m_isOrthographic = !!i2297[70]
  i2296.m_isCullingEnabled = !!i2297[71]
  i2296.m_horizontalMapping = i2297[72]
  i2296.m_verticalMapping = i2297[73]
  i2296.m_uvLineOffset = i2297[74]
  i2296.m_geometrySortingOrder = i2297[75]
  i2296.m_IsTextObjectScaleStatic = !!i2297[76]
  i2296.m_VertexBufferAutoSizeReduction = !!i2297[77]
  i2296.m_useMaxVisibleDescender = !!i2297[78]
  i2296.m_pageToDisplay = i2297[79]
  i2296.m_margin = new pc.Vec4( i2297[80], i2297[81], i2297[82], i2297[83] )
  i2296.m_isUsingLegacyAnimationComponent = !!i2297[84]
  i2296.m_isVolumetricText = !!i2297[85]
  request.r(i2297[86], i2297[87], 0, i2296, 'm_Material')
  i2296.m_EmojiFallbackSupport = !!i2297[88]
  i2296.m_Maskable = !!i2297[89]
  i2296.m_Color = new pc.Color(i2297[90], i2297[91], i2297[92], i2297[93])
  i2296.m_RaycastTarget = !!i2297[94]
  i2296.m_RaycastPadding = new pc.Vec4( i2297[95], i2297[96], i2297[97], i2297[98] )
  return i2296
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.VertexGradient' )
  var i2307 = data
  i2306.topLeft = new pc.Color(i2307[0], i2307[1], i2307[2], i2307[3])
  i2306.topRight = new pc.Color(i2307[4], i2307[5], i2307[6], i2307[7])
  i2306.bottomLeft = new pc.Color(i2307[8], i2307[9], i2307[10], i2307[11])
  i2306.bottomRight = new pc.Color(i2307[12], i2307[13], i2307[14], i2307[15])
  return i2306
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.Button' )
  var i2311 = data
  i2310.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2311[0], i2310.m_OnClick)
  i2310.m_Navigation = request.d('UnityEngine.UI.Navigation', i2311[1], i2310.m_Navigation)
  i2310.m_Transition = i2311[2]
  i2310.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2311[3], i2310.m_Colors)
  i2310.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2311[4], i2310.m_SpriteState)
  i2310.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2311[5], i2310.m_AnimationTriggers)
  i2310.m_Interactable = !!i2311[6]
  request.r(i2311[7], i2311[8], 0, i2310, 'm_TargetGraphic')
  return i2310
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2313 = data
  i2312.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2313[0], i2312.m_PersistentCalls)
  return i2312
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2315 = data
  var i2317 = i2315[0]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('UnityEngine.Events.PersistentCall', i2317[i + 0]));
  }
  i2314.m_Calls = i2316
  return i2314
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'm_Target')
  i2320.m_TargetAssemblyTypeName = i2321[2]
  i2320.m_MethodName = i2321[3]
  i2320.m_Mode = i2321[4]
  i2320.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2321[5], i2320.m_Arguments)
  i2320.m_CallState = i2321[6]
  return i2320
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2323 = data
  i2322.m_Mode = i2323[0]
  i2322.m_WrapAround = !!i2323[1]
  request.r(i2323[2], i2323[3], 0, i2322, 'm_SelectOnUp')
  request.r(i2323[4], i2323[5], 0, i2322, 'm_SelectOnDown')
  request.r(i2323[6], i2323[7], 0, i2322, 'm_SelectOnLeft')
  request.r(i2323[8], i2323[9], 0, i2322, 'm_SelectOnRight')
  return i2322
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2325 = data
  i2324.m_NormalColor = new pc.Color(i2325[0], i2325[1], i2325[2], i2325[3])
  i2324.m_HighlightedColor = new pc.Color(i2325[4], i2325[5], i2325[6], i2325[7])
  i2324.m_PressedColor = new pc.Color(i2325[8], i2325[9], i2325[10], i2325[11])
  i2324.m_SelectedColor = new pc.Color(i2325[12], i2325[13], i2325[14], i2325[15])
  i2324.m_DisabledColor = new pc.Color(i2325[16], i2325[17], i2325[18], i2325[19])
  i2324.m_ColorMultiplier = i2325[20]
  i2324.m_FadeDuration = i2325[21]
  return i2324
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_HighlightedSprite')
  request.r(i2327[2], i2327[3], 0, i2326, 'm_PressedSprite')
  request.r(i2327[4], i2327[5], 0, i2326, 'm_SelectedSprite')
  request.r(i2327[6], i2327[7], 0, i2326, 'm_DisabledSprite')
  return i2326
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2329 = data
  i2328.m_NormalTrigger = i2329[0]
  i2328.m_HighlightedTrigger = i2329[1]
  i2328.m_PressedTrigger = i2329[2]
  i2328.m_SelectedTrigger = i2329[3]
  i2328.m_DisabledTrigger = i2329[4]
  return i2328
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2330 = root || request.c( 'JumpButton' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'button')
  return i2330
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2333 = data
  i2332.m_ShowMaskGraphic = !!i2333[0]
  return i2332
}

Deserializers["TutController"] = function (request, data, root) {
  var i2334 = root || request.c( 'TutController' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'tutScene')
  request.r(i2335[2], i2335[3], 0, i2334, 'startTut')
  request.r(i2335[4], i2335[5], 0, i2334, 'playTut')
  request.r(i2335[6], i2335[7], 0, i2334, 'farTut')
  request.r(i2335[8], i2335[9], 0, i2334, 'failTut')
  request.r(i2335[10], i2335[11], 0, i2334, 'joystick')
  request.r(i2335[12], i2335[13], 0, i2334, 'moveTut')
  request.r(i2335[14], i2335[15], 0, i2334, 'moveHand')
  request.r(i2335[16], i2335[17], 0, i2334, 'cameraHand')
  request.r(i2335[18], i2335[19], 0, i2334, 'jumpTut')
  request.r(i2335[20], i2335[21], 0, i2334, 'jumpHand')
  request.r(i2335[22], i2335[23], 0, i2334, 'jumpButton')
  i2334.swipeDistance = i2335[24]
  i2334.swipeDuration = i2335[25]
  i2334.swipePause = i2335[26]
  return i2334
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2336 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2337 = data
  i2336.targetIsSelf = !!i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'targetGO')
  i2336.tweenTargetIsTargetGO = !!i2337[3]
  i2336.delay = i2337[4]
  i2336.duration = i2337[5]
  i2336.easeType = i2337[6]
  i2336.easeCurve = new pc.AnimationCurve( { keys_flow: i2337[7] } )
  i2336.loopType = i2337[8]
  i2336.loops = i2337[9]
  i2336.id = i2337[10]
  i2336.isRelative = !!i2337[11]
  i2336.isFrom = !!i2337[12]
  i2336.isIndependentUpdate = !!i2337[13]
  i2336.autoKill = !!i2337[14]
  i2336.autoGenerate = !!i2337[15]
  i2336.isActive = !!i2337[16]
  i2336.isValid = !!i2337[17]
  request.r(i2337[18], i2337[19], 0, i2336, 'target')
  i2336.animationType = i2337[20]
  i2336.targetType = i2337[21]
  i2336.forcedTargetType = i2337[22]
  i2336.autoPlay = !!i2337[23]
  i2336.useTargetAsV3 = !!i2337[24]
  i2336.endValueFloat = i2337[25]
  i2336.endValueV3 = new pc.Vec3( i2337[26], i2337[27], i2337[28] )
  i2336.endValueV2 = new pc.Vec2( i2337[29], i2337[30] )
  i2336.endValueColor = new pc.Color(i2337[31], i2337[32], i2337[33], i2337[34])
  i2336.endValueString = i2337[35]
  i2336.endValueRect = UnityEngine.Rect.MinMaxRect(i2337[36], i2337[37], i2337[38], i2337[39])
  request.r(i2337[40], i2337[41], 0, i2336, 'endValueTransform')
  i2336.optionalBool0 = !!i2337[42]
  i2336.optionalBool1 = !!i2337[43]
  i2336.optionalFloat0 = i2337[44]
  i2336.optionalInt0 = i2337[45]
  i2336.optionalRotationMode = i2337[46]
  i2336.optionalScrambleMode = i2337[47]
  i2336.optionalShakeRandomnessMode = i2337[48]
  i2336.optionalString = i2337[49]
  i2336.updateType = i2337[50]
  i2336.isSpeedBased = !!i2337[51]
  i2336.hasOnStart = !!i2337[52]
  i2336.hasOnPlay = !!i2337[53]
  i2336.hasOnUpdate = !!i2337[54]
  i2336.hasOnStepComplete = !!i2337[55]
  i2336.hasOnComplete = !!i2337[56]
  i2336.hasOnTweenCreated = !!i2337[57]
  i2336.hasOnRewind = !!i2337[58]
  i2336.onStart = request.d('UnityEngine.Events.UnityEvent', i2337[59], i2336.onStart)
  i2336.onPlay = request.d('UnityEngine.Events.UnityEvent', i2337[60], i2336.onPlay)
  i2336.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2337[61], i2336.onUpdate)
  i2336.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2337[62], i2336.onStepComplete)
  i2336.onComplete = request.d('UnityEngine.Events.UnityEvent', i2337[63], i2336.onComplete)
  i2336.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2337[64], i2336.onTweenCreated)
  i2336.onRewind = request.d('UnityEngine.Events.UnityEvent', i2337[65], i2336.onRewind)
  return i2336
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2339 = data
  i2338.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2339[0], i2338.m_PersistentCalls)
  return i2338
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2340 = root || request.c( 'HideOnPointer' )
  var i2341 = data
  i2340.OnPointerDownEvent = request.d('System.Action', i2341[0], i2340.OnPointerDownEvent)
  return i2340
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2342 = root || request.c( 'System.Action' )
  var i2343 = data
  return i2342
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i2344 = root || request.c( 'SelectPanel' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'startButton')
  request.r(i2345[2], i2345[3], 0, i2344, 'startSound')
  return i2344
}

Deserializers["SearchPromptPulse"] = function (request, data, root) {
  var i2346 = root || request.c( 'SearchPromptPulse' )
  var i2347 = data
  return i2346
}

Deserializers["ResponsiveResultLayout"] = function (request, data, root) {
  var i2348 = root || request.c( 'ResponsiveResultLayout' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'title')
  request.r(i2349[2], i2349[3], 0, i2348, 'action')
  i2348.titleArtwork = UnityEngine.Rect.MinMaxRect(i2349[4], i2349[5], i2349[6], i2349[7])
  i2348.actionArtwork = UnityEngine.Rect.MinMaxRect(i2349[8], i2349[9], i2349[10], i2349[11])
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

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2352 = root || request.c( 'CharacterMotor' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'characterInput')
  request.r(i2353[2], i2353[3], 0, i2352, 'cameraYawTransform')
  request.r(i2353[4], i2353[5], 0, i2352, '_arrow')
  i2352.moveSpeed = i2353[6]
  i2352.jumpHeight = i2353[7]
  request.r(i2353[8], i2353[9], 0, i2352, 'groundChecker')
  i2352.gravity = i2353[10]
  i2352.enableStepClimb = !!i2353[11]
  i2352.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2353[12] )
  i2352.maxStepHeight = i2353[13]
  i2352.stepCheckDistance = i2353[14]
  i2352.stepUpSpeed = i2353[15]
  i2352.stepUpAcceleration = i2353[16]
  i2352.minimumStepFacing = i2353[17]
  request.r(i2353[18], i2353[19], 0, i2352, 'controller')
  i2352.autoRun = !!i2353[20]
  return i2352
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2354 = root || request.c( 'CharacterRotation' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'motor')
  i2354.rotationSpeed = i2355[2]
  return i2354
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2356 = root || request.c( 'CharacterAnimation' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'animator')
  request.r(i2357[2], i2357[3], 0, i2356, 'motor')
  i2356.speedChangeRate = i2357[4]
  i2356.groundedGraceTime = i2357[5]
  return i2356
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2358 = root || request.c( 'CharacterCollect' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'motor')
  request.r(i2359[2], i2359[3], 0, i2358, 'avatar')
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2361 = data
  i2360.mass = i2361[0]
  i2360.drag = i2361[1]
  i2360.angularDrag = i2361[2]
  i2360.useGravity = !!i2361[3]
  i2360.isKinematic = !!i2361[4]
  i2360.constraints = i2361[5]
  i2360.maxAngularVelocity = i2361[6]
  i2360.collisionDetectionMode = i2361[7]
  i2360.interpolation = i2361[8]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'animatorController')
  request.r(i2365[2], i2365[3], 0, i2364, 'avatar')
  i2364.updateMode = i2365[4]
  i2364.hasTransformHierarchy = !!i2365[5]
  i2364.applyRootMotion = !!i2365[6]
  var i2367 = i2365[7]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.humanBones = i2366
  i2364.enabled = !!i2365[8]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'clip')
  request.r(i2371[2], i2371[3], 0, i2370, 'outputAudioMixerGroup')
  i2370.playOnAwake = !!i2371[4]
  i2370.loop = !!i2371[5]
  i2370.time = i2371[6]
  i2370.volume = i2371[7]
  i2370.pitch = i2371[8]
  i2370.enabled = !!i2371[9]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'sharedMesh')
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'additionalVertexStreams')
  i2374.enabled = !!i2375[2]
  request.r(i2375[3], i2375[4], 0, i2374, 'sharedMaterial')
  var i2377 = i2375[5]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2374.sharedMaterials = i2376
  i2374.receiveShadows = !!i2375[6]
  i2374.shadowCastingMode = i2375[7]
  i2374.sortingLayerID = i2375[8]
  i2374.sortingOrder = i2375[9]
  i2374.lightmapIndex = i2375[10]
  i2374.lightmapSceneIndex = i2375[11]
  i2374.lightmapScaleOffset = new pc.Vec4( i2375[12], i2375[13], i2375[14], i2375[15] )
  i2374.lightProbeUsage = i2375[16]
  i2374.reflectionProbeUsage = i2375[17]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'sharedMesh')
  var i2381 = i2379[2]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2378.bones = i2380
  i2378.updateWhenOffscreen = !!i2379[3]
  i2378.localBounds = i2379[4]
  request.r(i2379[5], i2379[6], 0, i2378, 'rootBone')
  var i2383 = i2379[7]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2383[i + 0]) );
  }
  i2378.blendShapesWeights = i2382
  i2378.enabled = !!i2379[8]
  request.r(i2379[9], i2379[10], 0, i2378, 'sharedMaterial')
  var i2385 = i2379[11]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 2, i2384, '')
  }
  i2378.sharedMaterials = i2384
  i2378.receiveShadows = !!i2379[12]
  i2378.shadowCastingMode = i2379[13]
  i2378.sortingLayerID = i2379[14]
  i2378.sortingOrder = i2379[15]
  i2378.lightmapIndex = i2379[16]
  i2378.lightmapSceneIndex = i2379[17]
  i2378.lightmapScaleOffset = new pc.Vec4( i2379[18], i2379[19], i2379[20], i2379[21] )
  i2378.lightProbeUsage = i2379[22]
  i2378.reflectionProbeUsage = i2379[23]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2389 = data
  i2388.weight = i2389[0]
  return i2388
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2390 = root || request.c( 'GroundChecker' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'groundPoint')
  i2390.checkRadius = i2391[2]
  i2390.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2391[3] )
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2393 = data
  i2392.color = new pc.Color(i2393[0], i2393[1], i2393[2], i2393[3])
  request.r(i2393[4], i2393[5], 0, i2392, 'sprite')
  i2392.flipX = !!i2393[6]
  i2392.flipY = !!i2393[7]
  i2392.drawMode = i2393[8]
  i2392.size = new pc.Vec2( i2393[9], i2393[10] )
  i2392.tileMode = i2393[11]
  i2392.adaptiveModeThreshold = i2393[12]
  i2392.maskInteraction = i2393[13]
  i2392.spriteSortPoint = i2393[14]
  i2392.enabled = !!i2393[15]
  request.r(i2393[16], i2393[17], 0, i2392, 'sharedMaterial')
  var i2395 = i2393[18]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2392.sharedMaterials = i2394
  i2392.receiveShadows = !!i2393[19]
  i2392.shadowCastingMode = i2393[20]
  i2392.sortingLayerID = i2393[21]
  i2392.sortingOrder = i2393[22]
  i2392.lightmapIndex = i2393[23]
  i2392.lightmapSceneIndex = i2393[24]
  i2392.lightmapScaleOffset = new pc.Vec4( i2393[25], i2393[26], i2393[27], i2393[28] )
  i2392.lightProbeUsage = i2393[29]
  i2392.reflectionProbeUsage = i2393[30]
  return i2392
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2396 = root || request.c( 'CameraFollow' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'target')
  i2396.smoothTime = i2397[2]
  return i2396
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2398 = root || request.c( 'CameraLook' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'input')
  request.r(i2399[2], i2399[3], 0, i2398, 'yawPivot')
  request.r(i2399[4], i2399[5], 0, i2398, 'pitchPivot')
  i2398.minPitch = i2399[6]
  i2398.maxPitch = i2399[7]
  i2398.yaw = i2399[8]
  i2398.pitch = i2399[9]
  i2398.defaltYaw = i2399[10]
  i2398.defaltPitch = i2399[11]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2401 = data
  i2400.aspect = i2401[0]
  i2400.orthographic = !!i2401[1]
  i2400.orthographicSize = i2401[2]
  i2400.backgroundColor = new pc.Color(i2401[3], i2401[4], i2401[5], i2401[6])
  i2400.nearClipPlane = i2401[7]
  i2400.farClipPlane = i2401[8]
  i2400.fieldOfView = i2401[9]
  i2400.depth = i2401[10]
  i2400.clearFlags = i2401[11]
  i2400.cullingMask = i2401[12]
  i2400.rect = i2401[13]
  request.r(i2401[14], i2401[15], 0, i2400, 'targetTexture')
  i2400.usePhysicalProperties = !!i2401[16]
  i2400.focalLength = i2401[17]
  i2400.sensorSize = new pc.Vec2( i2401[18], i2401[19] )
  i2400.lensShift = new pc.Vec2( i2401[20], i2401[21] )
  i2400.gateFit = i2401[22]
  i2400.commandBufferCount = i2401[23]
  i2400.cameraType = i2401[24]
  i2400.enabled = !!i2401[25]
  return i2400
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2402 = root || request.c( 'CharacterInput' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'joystick')
  request.r(i2403[2], i2403[3], 0, i2402, 'jumpButton')
  return i2402
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2404 = root || request.c( 'InputManager' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'worldCamera')
  i2404.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2405[2] )
  i2404.touchSensitivity = i2405[3]
  i2404.mouseSensitivity = i2405[4]
  i2404.dragThreshold = i2405[5]
  return i2404
}

Deserializers["GameController"] = function (request, data, root) {
  var i2406 = root || request.c( 'GameController' )
  var i2407 = data
  i2406.timeToShowComplete = i2407[0]
  request.r(i2407[1], i2407[2], 0, i2406, 'selectPanel')
  request.r(i2407[3], i2407[4], 0, i2406, 'inputUI')
  request.r(i2407[5], i2407[6], 0, i2406, 'inputManager')
  request.r(i2407[7], i2407[8], 0, i2406, 'failSound')
  i2406.searchDuration = i2407[9]
  request.r(i2407[10], i2407[11], 0, i2406, 'countdownText')
  i2406.currentProgress = i2407[12]
  i2406.target = i2407[13]
  request.r(i2407[14], i2407[15], 0, i2406, 'progressText')
  request.r(i2407[16], i2407[17], 0, i2406, 'collectText')
  request.r(i2407[18], i2407[19], 0, i2406, '_cta')
  var i2409 = i2407[20]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 1, i2408, '')
  }
  i2406.gifts = i2408
  request.r(i2407[21], i2407[22], 0, i2406, 'collect')
  request.r(i2407[23], i2407[24], 0, i2406, 'tut')
  request.r(i2407[25], i2407[26], 0, i2406, 'playerSpawn')
  request.r(i2407[27], i2407[28], 0, i2406, 'failUI')
  request.r(i2407[29], i2407[30], 0, i2406, 'playerMotor')
  i2406.failHeight = i2407[31]
  return i2406
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2412 = root || request.c( 'AudioController' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'musicSource')
  request.r(i2413[2], i2413[3], 0, i2412, 'poolParent')
  i2412.startSize = i2413[4]
  return i2412
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2414 = root || request.c( 'LunaController' )
  var i2415 = data
  i2414.LimitTimePlay = !!i2415[0]
  i2414.TimePlay = i2415[1]
  i2414.MorphIndex = i2415[2]
  var i2417 = i2415[3]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2414.images = i2416
  request.r(i2415[4], i2415[5], 0, i2414, 'CTA')
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'sharedMesh')
  i2420.convex = !!i2421[2]
  i2420.enabled = !!i2421[3]
  i2420.isTrigger = !!i2421[4]
  request.r(i2421[5], i2421[6], 0, i2420, 'material')
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2423 = data
  i2422.center = new pc.Vec3( i2423[0], i2423[1], i2423[2] )
  i2422.radius = i2423[3]
  i2422.enabled = !!i2423[4]
  i2422.isTrigger = !!i2423[5]
  request.r(i2423[6], i2423[7], 0, i2422, 'material')
  return i2422
}

Deserializers["Gift"] = function (request, data, root) {
  var i2424 = root || request.c( 'Gift' )
  var i2425 = data
  i2424.collectDone = !!i2425[0]
  var i2427 = i2425[1]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 1, i2426, '')
  }
  i2424.hints = i2426
  request.r(i2425[2], i2425[3], 0, i2424, 'collectSound')
  request.r(i2425[4], i2425[5], 0, i2424, 'collectEffect')
  request.r(i2425[6], i2425[7], 0, i2424, 'arrow')
  request.r(i2425[8], i2425[9], 0, i2424, 'morphVisual')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'mesh')
  i2430.meshCount = i2431[2]
  i2430.activeVertexStreamsCount = i2431[3]
  i2430.alignment = i2431[4]
  i2430.renderMode = i2431[5]
  i2430.sortMode = i2431[6]
  i2430.lengthScale = i2431[7]
  i2430.velocityScale = i2431[8]
  i2430.cameraVelocityScale = i2431[9]
  i2430.normalDirection = i2431[10]
  i2430.sortingFudge = i2431[11]
  i2430.minParticleSize = i2431[12]
  i2430.maxParticleSize = i2431[13]
  i2430.pivot = new pc.Vec3( i2431[14], i2431[15], i2431[16] )
  request.r(i2431[17], i2431[18], 0, i2430, 'trailMaterial')
  i2430.applyActiveColorSpace = !!i2431[19]
  i2430.enabled = !!i2431[20]
  request.r(i2431[21], i2431[22], 0, i2430, 'sharedMaterial')
  var i2433 = i2431[23]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 2, i2432, '')
  }
  i2430.sharedMaterials = i2432
  i2430.receiveShadows = !!i2431[24]
  i2430.shadowCastingMode = i2431[25]
  i2430.sortingLayerID = i2431[26]
  i2430.sortingOrder = i2431[27]
  i2430.lightmapIndex = i2431[28]
  i2430.lightmapSceneIndex = i2431[29]
  i2430.lightmapScaleOffset = new pc.Vec4( i2431[30], i2431[31], i2431[32], i2431[33] )
  i2430.lightProbeUsage = i2431[34]
  i2430.reflectionProbeUsage = i2431[35]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2435 = data
  i2434.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2435[0], i2434.main)
  i2434.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2435[1], i2434.colorBySpeed)
  i2434.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2435[2], i2434.colorOverLifetime)
  i2434.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2435[3], i2434.emission)
  i2434.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2435[4], i2434.rotationBySpeed)
  i2434.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2435[5], i2434.rotationOverLifetime)
  i2434.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2435[6], i2434.shape)
  i2434.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2435[7], i2434.sizeBySpeed)
  i2434.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2435[8], i2434.sizeOverLifetime)
  i2434.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2435[9], i2434.textureSheetAnimation)
  i2434.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2435[10], i2434.velocityOverLifetime)
  i2434.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2435[11], i2434.noise)
  i2434.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2435[12], i2434.inheritVelocity)
  i2434.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2435[13], i2434.forceOverLifetime)
  i2434.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2435[14], i2434.limitVelocityOverLifetime)
  i2434.useAutoRandomSeed = !!i2435[15]
  i2434.randomSeed = i2435[16]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemMain()
  var i2437 = data
  i2436.duration = i2437[0]
  i2436.loop = !!i2437[1]
  i2436.prewarm = !!i2437[2]
  i2436.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[3], i2436.startDelay)
  i2436.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[4], i2436.startLifetime)
  i2436.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[5], i2436.startSpeed)
  i2436.startSize3D = !!i2437[6]
  i2436.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[7], i2436.startSizeX)
  i2436.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[8], i2436.startSizeY)
  i2436.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[9], i2436.startSizeZ)
  i2436.startRotation3D = !!i2437[10]
  i2436.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[11], i2436.startRotationX)
  i2436.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[12], i2436.startRotationY)
  i2436.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[13], i2436.startRotationZ)
  i2436.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2437[14], i2436.startColor)
  i2436.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[15], i2436.gravityModifier)
  i2436.simulationSpace = i2437[16]
  request.r(i2437[17], i2437[18], 0, i2436, 'customSimulationSpace')
  i2436.simulationSpeed = i2437[19]
  i2436.useUnscaledTime = !!i2437[20]
  i2436.scalingMode = i2437[21]
  i2436.playOnAwake = !!i2437[22]
  i2436.maxParticles = i2437[23]
  i2436.emitterVelocityMode = i2437[24]
  i2436.stopAction = i2437[25]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2438 = root || new pc.MinMaxCurve()
  var i2439 = data
  i2438.mode = i2439[0]
  i2438.curveMin = new pc.AnimationCurve( { keys_flow: i2439[1] } )
  i2438.curveMax = new pc.AnimationCurve( { keys_flow: i2439[2] } )
  i2438.curveMultiplier = i2439[3]
  i2438.constantMin = i2439[4]
  i2438.constantMax = i2439[5]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2440 = root || new pc.MinMaxGradient()
  var i2441 = data
  i2440.mode = i2441[0]
  i2440.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2441[1], i2440.gradientMin)
  i2440.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2441[2], i2440.gradientMax)
  i2440.colorMin = new pc.Color(i2441[3], i2441[4], i2441[5], i2441[6])
  i2440.colorMax = new pc.Color(i2441[7], i2441[8], i2441[9], i2441[10])
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2443 = data
  i2442.mode = i2443[0]
  var i2445 = i2443[1]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2445[i + 0]) );
  }
  i2442.colorKeys = i2444
  var i2447 = i2443[2]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2447[i + 0]) );
  }
  i2442.alphaKeys = i2446
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemColorBySpeed()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2449[1], i2448.color)
  i2448.range = new pc.Vec2( i2449[2], i2449[3] )
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2453 = data
  i2452.color = new pc.Color(i2453[0], i2453[1], i2453[2], i2453[3])
  i2452.time = i2453[4]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2457 = data
  i2456.alpha = i2457[0]
  i2456.time = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2458 = root || new pc.ParticleSystemColorOverLifetime()
  var i2459 = data
  i2458.enabled = !!i2459[0]
  i2458.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2459[1], i2458.color)
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2460 = root || new pc.ParticleSystemEmitter()
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[1], i2460.rateOverTime)
  i2460.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[2], i2460.rateOverDistance)
  var i2463 = i2461[3]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2463[i + 0]) );
  }
  i2460.bursts = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2466 = root || new pc.ParticleSystemBurst()
  var i2467 = data
  i2466.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[0], i2466.count)
  i2466.cycleCount = i2467[1]
  i2466.minCount = i2467[2]
  i2466.maxCount = i2467[3]
  i2466.repeatInterval = i2467[4]
  i2466.time = i2467[5]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2468 = root || new pc.ParticleSystemRotationBySpeed()
  var i2469 = data
  i2468.enabled = !!i2469[0]
  i2468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[1], i2468.x)
  i2468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[2], i2468.y)
  i2468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2469[3], i2468.z)
  i2468.separateAxes = !!i2469[4]
  i2468.range = new pc.Vec2( i2469[5], i2469[6] )
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2470 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2471 = data
  i2470.enabled = !!i2471[0]
  i2470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[1], i2470.x)
  i2470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[2], i2470.y)
  i2470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2471[3], i2470.z)
  i2470.separateAxes = !!i2471[4]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2472 = root || new pc.ParticleSystemShape()
  var i2473 = data
  i2472.enabled = !!i2473[0]
  i2472.shapeType = i2473[1]
  i2472.randomDirectionAmount = i2473[2]
  i2472.sphericalDirectionAmount = i2473[3]
  i2472.randomPositionAmount = i2473[4]
  i2472.alignToDirection = !!i2473[5]
  i2472.radius = i2473[6]
  i2472.radiusMode = i2473[7]
  i2472.radiusSpread = i2473[8]
  i2472.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[9], i2472.radiusSpeed)
  i2472.radiusThickness = i2473[10]
  i2472.angle = i2473[11]
  i2472.length = i2473[12]
  i2472.boxThickness = new pc.Vec3( i2473[13], i2473[14], i2473[15] )
  i2472.meshShapeType = i2473[16]
  request.r(i2473[17], i2473[18], 0, i2472, 'mesh')
  request.r(i2473[19], i2473[20], 0, i2472, 'meshRenderer')
  request.r(i2473[21], i2473[22], 0, i2472, 'skinnedMeshRenderer')
  i2472.useMeshMaterialIndex = !!i2473[23]
  i2472.meshMaterialIndex = i2473[24]
  i2472.useMeshColors = !!i2473[25]
  i2472.normalOffset = i2473[26]
  i2472.arc = i2473[27]
  i2472.arcMode = i2473[28]
  i2472.arcSpread = i2473[29]
  i2472.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[30], i2472.arcSpeed)
  i2472.donutRadius = i2473[31]
  i2472.position = new pc.Vec3( i2473[32], i2473[33], i2473[34] )
  i2472.rotation = new pc.Vec3( i2473[35], i2473[36], i2473[37] )
  i2472.scale = new pc.Vec3( i2473[38], i2473[39], i2473[40] )
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemSizeBySpeed()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[1], i2474.x)
  i2474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[2], i2474.y)
  i2474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[3], i2474.z)
  i2474.separateAxes = !!i2475[4]
  i2474.range = new pc.Vec2( i2475[5], i2475[6] )
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2476 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[1], i2476.x)
  i2476.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[2], i2476.y)
  i2476.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[3], i2476.z)
  i2476.separateAxes = !!i2477[4]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2478 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2479 = data
  i2478.enabled = !!i2479[0]
  i2478.mode = i2479[1]
  i2478.animation = i2479[2]
  i2478.numTilesX = i2479[3]
  i2478.numTilesY = i2479[4]
  i2478.useRandomRow = !!i2479[5]
  i2478.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[6], i2478.frameOverTime)
  i2478.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[7], i2478.startFrame)
  i2478.cycleCount = i2479[8]
  i2478.rowIndex = i2479[9]
  i2478.flipU = i2479[10]
  i2478.flipV = i2479[11]
  i2478.spriteCount = i2479[12]
  var i2481 = i2479[13]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2478.sprites = i2480
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2484 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2485 = data
  i2484.enabled = !!i2485[0]
  i2484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[1], i2484.x)
  i2484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[2], i2484.y)
  i2484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[3], i2484.z)
  i2484.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[4], i2484.radial)
  i2484.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[5], i2484.speedModifier)
  i2484.space = i2485[6]
  i2484.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[7], i2484.orbitalX)
  i2484.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[8], i2484.orbitalY)
  i2484.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[9], i2484.orbitalZ)
  i2484.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[10], i2484.orbitalOffsetX)
  i2484.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[11], i2484.orbitalOffsetY)
  i2484.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2485[12], i2484.orbitalOffsetZ)
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2486 = root || new pc.ParticleSystemNoise()
  var i2487 = data
  i2486.enabled = !!i2487[0]
  i2486.separateAxes = !!i2487[1]
  i2486.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[2], i2486.strengthX)
  i2486.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[3], i2486.strengthY)
  i2486.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[4], i2486.strengthZ)
  i2486.frequency = i2487[5]
  i2486.damping = !!i2487[6]
  i2486.octaveCount = i2487[7]
  i2486.octaveMultiplier = i2487[8]
  i2486.octaveScale = i2487[9]
  i2486.quality = i2487[10]
  i2486.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[11], i2486.scrollSpeed)
  i2486.scrollSpeedMultiplier = i2487[12]
  i2486.remapEnabled = !!i2487[13]
  i2486.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[14], i2486.remapX)
  i2486.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[15], i2486.remapY)
  i2486.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[16], i2486.remapZ)
  i2486.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[17], i2486.positionAmount)
  i2486.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[18], i2486.rotationAmount)
  i2486.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2487[19], i2486.sizeAmount)
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2488 = root || new pc.ParticleSystemInheritVelocity()
  var i2489 = data
  i2488.enabled = !!i2489[0]
  i2488.mode = i2489[1]
  i2488.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2489[2], i2488.curve)
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2490 = root || new pc.ParticleSystemForceOverLifetime()
  var i2491 = data
  i2490.enabled = !!i2491[0]
  i2490.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[1], i2490.x)
  i2490.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[2], i2490.y)
  i2490.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2491[3], i2490.z)
  i2490.space = i2491[4]
  i2490.randomized = !!i2491[5]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2492 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2493 = data
  i2492.enabled = !!i2493[0]
  i2492.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[1], i2492.limit)
  i2492.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[2], i2492.limitX)
  i2492.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[3], i2492.limitY)
  i2492.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[4], i2492.limitZ)
  i2492.dampen = i2493[5]
  i2492.separateAxes = !!i2493[6]
  i2492.space = i2493[7]
  i2492.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2493[8], i2492.drag)
  i2492.multiplyDragByParticleSize = !!i2493[9]
  i2492.multiplyDragByParticleVelocity = !!i2493[10]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2495 = data
  i2494.ambientIntensity = i2495[0]
  i2494.reflectionIntensity = i2495[1]
  i2494.ambientMode = i2495[2]
  i2494.ambientLight = new pc.Color(i2495[3], i2495[4], i2495[5], i2495[6])
  i2494.ambientSkyColor = new pc.Color(i2495[7], i2495[8], i2495[9], i2495[10])
  i2494.ambientGroundColor = new pc.Color(i2495[11], i2495[12], i2495[13], i2495[14])
  i2494.ambientEquatorColor = new pc.Color(i2495[15], i2495[16], i2495[17], i2495[18])
  i2494.fogColor = new pc.Color(i2495[19], i2495[20], i2495[21], i2495[22])
  i2494.fogEndDistance = i2495[23]
  i2494.fogStartDistance = i2495[24]
  i2494.fogDensity = i2495[25]
  i2494.fog = !!i2495[26]
  request.r(i2495[27], i2495[28], 0, i2494, 'skybox')
  i2494.fogMode = i2495[29]
  var i2497 = i2495[30]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2497[i + 0]) );
  }
  i2494.lightmaps = i2496
  i2494.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2495[31], i2494.lightProbes)
  i2494.lightmapsMode = i2495[32]
  i2494.mixedBakeMode = i2495[33]
  i2494.environmentLightingMode = i2495[34]
  i2494.ambientProbe = new pc.SphericalHarmonicsL2(i2495[35])
  request.r(i2495[36], i2495[37], 0, i2494, 'customReflection')
  request.r(i2495[38], i2495[39], 0, i2494, 'defaultReflection')
  i2494.defaultReflectionMode = i2495[40]
  i2494.defaultReflectionResolution = i2495[41]
  i2494.sunLightObjectId = i2495[42]
  i2494.pixelLightCount = i2495[43]
  i2494.defaultReflectionHDR = !!i2495[44]
  i2494.hasLightDataAsset = !!i2495[45]
  i2494.hasManualGenerate = !!i2495[46]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'lightmapColor')
  request.r(i2501[2], i2501[3], 0, i2500, 'lightmapDirection')
  request.r(i2501[4], i2501[5], 0, i2500, 'shadowMask')
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2502 = root || new UnityEngine.LightProbes()
  var i2503 = data
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2513[i + 0]));
  }
  i2510.ShaderCompilationErrors = i2512
  i2510.name = i2511[1]
  i2510.guid = i2511[2]
  var i2515 = i2511[3]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( i2515[i + 0] );
  }
  i2510.shaderDefinedKeywords = i2514
  var i2517 = i2511[4]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2517[i + 0]) );
  }
  i2510.passes = i2516
  var i2519 = i2511[5]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2519[i + 0]) );
  }
  i2510.usePasses = i2518
  var i2521 = i2511[6]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2521[i + 0]) );
  }
  i2510.defaultParameterValues = i2520
  request.r(i2511[7], i2511[8], 0, i2510, 'unityFallbackShader')
  i2510.readDepth = !!i2511[9]
  i2510.hasDepthOnlyPass = !!i2511[10]
  i2510.isCreatedByShaderGraph = !!i2511[11]
  i2510.disableBatching = !!i2511[12]
  i2510.compiled = !!i2511[13]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2525 = data
  i2524.shaderName = i2525[0]
  i2524.errorMessage = i2525[1]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2530 = root || new pc.UnityShaderPass()
  var i2531 = data
  i2530.id = i2531[0]
  i2530.subShaderIndex = i2531[1]
  i2530.name = i2531[2]
  i2530.passType = i2531[3]
  i2530.grabPassTextureName = i2531[4]
  i2530.usePass = !!i2531[5]
  i2530.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[6], i2530.zTest)
  i2530.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[7], i2530.zWrite)
  i2530.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[8], i2530.culling)
  i2530.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2531[9], i2530.blending)
  i2530.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2531[10], i2530.alphaBlending)
  i2530.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[11], i2530.colorWriteMask)
  i2530.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[12], i2530.offsetUnits)
  i2530.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[13], i2530.offsetFactor)
  i2530.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[14], i2530.stencilRef)
  i2530.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[15], i2530.stencilReadMask)
  i2530.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[16], i2530.stencilWriteMask)
  i2530.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[17], i2530.stencilOp)
  i2530.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[18], i2530.stencilOpFront)
  i2530.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[19], i2530.stencilOpBack)
  var i2533 = i2531[20]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2533[i + 0]) );
  }
  i2530.tags = i2532
  var i2535 = i2531[21]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2530.passDefinedKeywords = i2534
  var i2537 = i2531[22]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2537[i + 0]) );
  }
  i2530.passDefinedKeywordGroups = i2536
  var i2539 = i2531[23]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2539[i + 0]) );
  }
  i2530.variants = i2538
  var i2541 = i2531[24]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2541[i + 0]) );
  }
  i2530.excludedVariants = i2540
  i2530.hasDepthReader = !!i2531[25]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2543 = data
  i2542.val = i2543[0]
  i2542.name = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2545 = data
  i2544.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[0], i2544.src)
  i2544.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[1], i2544.dst)
  i2544.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[2], i2544.op)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2547 = data
  i2546.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[0], i2546.pass)
  i2546.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[1], i2546.fail)
  i2546.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[2], i2546.zFail)
  i2546.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[3], i2546.comp)
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.value = i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2554.keywords = i2556
  i2554.hasDiscard = !!i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2561 = data
  i2560.passId = i2561[0]
  i2560.subShaderIndex = i2561[1]
  var i2563 = i2561[2]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2560.keywords = i2562
  i2560.vertexProgram = i2561[3]
  i2560.fragmentProgram = i2561[4]
  i2560.exportedForWebGl2 = !!i2561[5]
  i2560.readDepth = !!i2561[6]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'shader')
  i2566.pass = i2567[2]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.type = i2571[1]
  i2570.value = new pc.Vec4( i2571[2], i2571[3], i2571[4], i2571[5] )
  i2570.textureValue = i2571[6]
  i2570.shaderPropertyFlag = i2571[7]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2573 = data
  i2572.name = i2573[0]
  request.r(i2573[1], i2573[2], 0, i2572, 'texture')
  i2572.aabb = i2573[3]
  i2572.vertices = i2573[4]
  i2572.triangles = i2573[5]
  i2572.textureRect = UnityEngine.Rect.MinMaxRect(i2573[6], i2573[7], i2573[8], i2573[9])
  i2572.packedRect = UnityEngine.Rect.MinMaxRect(i2573[10], i2573[11], i2573[12], i2573[13])
  i2572.border = new pc.Vec4( i2573[14], i2573[15], i2573[16], i2573[17] )
  i2572.transparency = i2573[18]
  i2572.bounds = i2573[19]
  i2572.pixelsPerUnit = i2573[20]
  i2572.textureWidth = i2573[21]
  i2572.textureHeight = i2573[22]
  i2572.nativeSize = new pc.Vec2( i2573[23], i2573[24] )
  i2572.pivot = new pc.Vec2( i2573[25], i2573[26] )
  i2572.textureRectOffset = new pc.Vec2( i2573[27], i2573[28] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2575 = data
  i2574.name = i2575[0]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.wrapMode = i2577[1]
  i2576.isLooping = !!i2577[2]
  i2576.length = i2577[3]
  var i2579 = i2577[4]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2579[i + 0]) );
  }
  i2576.curves = i2578
  var i2581 = i2577[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2581[i + 0]) );
  }
  i2576.events = i2580
  i2576.halfPrecision = !!i2577[6]
  i2576._frameRate = i2577[7]
  i2576.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2577[8], i2576.localBounds)
  i2576.hasMuscleCurves = !!i2577[9]
  var i2583 = i2577[10]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2576.clipMuscleConstant = i2582
  i2576.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2577[11], i2576.clipBindingConstant)
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2587 = data
  i2586.path = i2587[0]
  i2586.hash = i2587[1]
  i2586.componentType = i2587[2]
  i2586.property = i2587[3]
  i2586.keys = i2587[4]
  var i2589 = i2587[5]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2589[i + 0]) );
  }
  i2586.objectReferenceKeys = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2593 = data
  i2592.time = i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'value')
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2597 = data
  i2596.functionName = i2597[0]
  i2596.floatParameter = i2597[1]
  i2596.intParameter = i2597[2]
  i2596.stringParameter = i2597[3]
  request.r(i2597[4], i2597[5], 0, i2596, 'objectReferenceParameter')
  i2596.time = i2597[6]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2599 = data
  i2598.center = new pc.Vec3( i2599[0], i2599[1], i2599[2] )
  i2598.extends = new pc.Vec3( i2599[3], i2599[4], i2599[5] )
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( i2605[i + 0] );
  }
  i2602.genericBindings = i2604
  var i2607 = i2603[1]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2602.pptrCurveMapping = i2606
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.blendParameter = i2609[1]
  i2608.blendParameterY = i2609[2]
  i2608.blendType = i2609[3]
  var i2611 = i2609[4]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2611[i + 0]) );
  }
  i2608.children = i2610
  i2608.useAutomaticThresholds = !!i2609[5]
  i2608.minThreshold = i2609[6]
  i2608.maxThreshold = i2609[7]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2615 = data
  request.r(i2615[0], i2615[1], 0, i2614, 'motion')
  i2614.threshold = i2615[2]
  i2614.position = new pc.Vec2( i2615[3], i2615[4] )
  i2614.timeScale = i2615[5]
  i2614.cycleOffset = i2615[6]
  i2614.directBlendParameter = i2615[7]
  i2614.mirror = !!i2615[8]
  return i2614
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[48],"79":[53],"80":[35],"81":[35],"82":[35],"83":[35],"84":[35],"85":[35],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[53],"101":[45],"102":[103],"104":[103],"7":[6],"29":[6],"11":[8],"105":[6],"106":[45,6],"17":[6,13],"107":[6],"108":[13,6],"109":[45],"110":[13,6],"111":[6],"112":[113],"114":[113],"115":[113],"116":[6],"117":[6],"9":[7],"14":[13,6],"118":[6],"8":[7],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"124":[6],"125":[6],"22":[6],"126":[6],"127":[13,6],"128":[6],"129":[6],"130":[6],"131":[6],"132":[13,6],"133":[6],"134":[4],"135":[4],"5":[4],"136":[4],"137":[53],"138":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Button","JumpButton","UnityEngine.UI.Mask","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","SelectPanel","UnityEngine.AudioClip","SearchPromptPulse","ResponsiveResultLayout","UnityEngine.BoxCollider","CharacterMotor","CharacterInput","UnityEngine.Transform","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.SpriteRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","UnityEngine.GameObject","Gift","AudioController","LunaController","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "57.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_MCH_V01_TrangHTT";

Deserializers.lunaAppID = "43709";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1674";

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

Deserializers.buildID = "2032aba2-b20e-47b6-a33d-c683d8241a32";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

