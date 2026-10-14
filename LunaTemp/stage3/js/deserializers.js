var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointSpring' )
  var i2161 = data
  i2160.spring = i2161[0]
  i2160.damper = i2161[1]
  i2160.targetPosition = i2161[2]
  return i2160
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointMotor' )
  var i2163 = data
  i2162.m_TargetVelocity = i2163[0]
  i2162.m_Force = i2163[1]
  i2162.m_FreeSpin = i2163[2]
  return i2162
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointLimits' )
  var i2165 = data
  i2164.m_Min = i2165[0]
  i2164.m_Max = i2165[1]
  i2164.m_Bounciness = i2165[2]
  i2164.m_BounceMinVelocity = i2165[3]
  i2164.m_ContactDistance = i2165[4]
  i2164.minBounce = i2165[5]
  i2164.maxBounce = i2165[6]
  return i2164
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.JointDrive' )
  var i2167 = data
  i2166.m_PositionSpring = i2167[0]
  i2166.m_PositionDamper = i2167[1]
  i2166.m_MaximumForce = i2167[2]
  i2166.m_UseAcceleration = i2167[3]
  return i2166
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2169 = data
  i2168.m_Spring = i2169[0]
  i2168.m_Damper = i2169[1]
  return i2168
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2171 = data
  i2170.m_Limit = i2171[0]
  i2170.m_Bounciness = i2171[1]
  i2170.m_ContactDistance = i2171[2]
  return i2170
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2173 = data
  i2172.m_ExtremumSlip = i2173[0]
  i2172.m_ExtremumValue = i2173[1]
  i2172.m_AsymptoteSlip = i2173[2]
  i2172.m_AsymptoteValue = i2173[3]
  i2172.m_Stiffness = i2173[4]
  return i2172
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2175 = data
  i2174.m_LowerAngle = i2175[0]
  i2174.m_UpperAngle = i2175[1]
  return i2174
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2177 = data
  i2176.m_MotorSpeed = i2177[0]
  i2176.m_MaximumMotorTorque = i2177[1]
  return i2176
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2179 = data
  i2178.m_DampingRatio = i2179[0]
  i2178.m_Frequency = i2179[1]
  i2178.m_Angle = i2179[2]
  return i2178
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2181 = data
  i2180.m_LowerTranslation = i2181[0]
  i2180.m_UpperTranslation = i2181[1]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.width = i2183[1]
  i2182.height = i2183[2]
  i2182.mipmapCount = i2183[3]
  i2182.anisoLevel = i2183[4]
  i2182.filterMode = i2183[5]
  i2182.hdr = !!i2183[6]
  i2182.format = i2183[7]
  i2182.wrapMode = i2183[8]
  i2182.alphaIsTransparency = !!i2183[9]
  i2182.alphaSource = i2183[10]
  i2182.graphicsFormat = i2183[11]
  i2182.sRGBTexture = !!i2183[12]
  i2182.desiredColorSpace = i2183[13]
  i2182.wrapU = i2183[14]
  i2182.wrapV = i2183[15]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2184 = root || new pc.UnityMaterial()
  var i2185 = data
  i2184.name = i2185[0]
  request.r(i2185[1], i2185[2], 0, i2184, 'shader')
  i2184.renderQueue = i2185[3]
  i2184.enableInstancing = !!i2185[4]
  var i2187 = i2185[5]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2187[i + 0]) );
  }
  i2184.floatParameters = i2186
  var i2189 = i2185[6]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2189[i + 0]) );
  }
  i2184.colorParameters = i2188
  var i2191 = i2185[7]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2191[i + 0]) );
  }
  i2184.vectorParameters = i2190
  var i2193 = i2185[8]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2193[i + 0]) );
  }
  i2184.textureParameters = i2192
  var i2195 = i2185[9]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2195[i + 0]) );
  }
  i2184.materialFlags = i2194
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.value = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.value = new pc.Color(i2203[1], i2203[2], i2203[3], i2203[4])
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.value = new pc.Vec4( i2207[1], i2207[2], i2207[3], i2207[4] )
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2211 = data
  i2210.name = i2211[0]
  request.r(i2211[1], i2211[2], 0, i2210, 'value')
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.enabled = !!i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.halfPrecision = !!i2217[1]
  i2216.useSimplification = !!i2217[2]
  i2216.useUInt32IndexFormat = !!i2217[3]
  i2216.vertexCount = i2217[4]
  i2216.aabb = i2217[5]
  var i2219 = i2217[6]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( !!i2219[i + 0] );
  }
  i2216.streams = i2218
  i2216.vertices = i2217[7]
  var i2221 = i2217[8]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2221[i + 0]) );
  }
  i2216.subMeshes = i2220
  var i2223 = i2217[9]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 16) {
    i2222.push( new pc.Mat4().setData(i2223[i + 0], i2223[i + 1], i2223[i + 2], i2223[i + 3],  i2223[i + 4], i2223[i + 5], i2223[i + 6], i2223[i + 7],  i2223[i + 8], i2223[i + 9], i2223[i + 10], i2223[i + 11],  i2223[i + 12], i2223[i + 13], i2223[i + 14], i2223[i + 15]) );
  }
  i2216.bindposes = i2222
  var i2225 = i2217[10]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2225[i + 0]) );
  }
  i2216.blendShapes = i2224
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2231 = data
  i2230.triangles = i2231[0]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2237 = data
  i2236.name = i2237[0]
  var i2239 = i2237[1]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2239[i + 0]) );
  }
  i2236.frames = i2238
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2241 = data
  i2240.position = new pc.Vec3( i2241[0], i2241[1], i2241[2] )
  i2240.scale = new pc.Vec3( i2241[3], i2241[4], i2241[5] )
  i2240.rotation = new pc.Quat(i2241[6], i2241[7], i2241[8], i2241[9])
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'animatorController')
  request.r(i2243[2], i2243[3], 0, i2242, 'avatar')
  i2242.updateMode = i2243[4]
  i2242.hasTransformHierarchy = !!i2243[5]
  i2242.applyRootMotion = !!i2243[6]
  var i2245 = i2243[7]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.humanBones = i2244
  i2242.enabled = !!i2243[8]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'clip')
  request.r(i2249[2], i2249[3], 0, i2248, 'outputAudioMixerGroup')
  i2248.playOnAwake = !!i2249[4]
  i2248.loop = !!i2249[5]
  i2248.time = i2249[6]
  i2248.volume = i2249[7]
  i2248.pitch = i2249[8]
  i2248.enabled = !!i2249[9]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'sharedMesh')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'additionalVertexStreams')
  i2252.enabled = !!i2253[2]
  request.r(i2253[3], i2253[4], 0, i2252, 'sharedMaterial')
  var i2255 = i2253[5]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.sharedMaterials = i2254
  i2252.receiveShadows = !!i2253[6]
  i2252.shadowCastingMode = i2253[7]
  i2252.sortingLayerID = i2253[8]
  i2252.sortingOrder = i2253[9]
  i2252.lightmapIndex = i2253[10]
  i2252.lightmapSceneIndex = i2253[11]
  i2252.lightmapScaleOffset = new pc.Vec4( i2253[12], i2253[13], i2253[14], i2253[15] )
  i2252.lightProbeUsage = i2253[16]
  i2252.reflectionProbeUsage = i2253[17]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.tagId = i2259[1]
  i2258.enabled = !!i2259[2]
  i2258.isStatic = !!i2259[3]
  i2258.layer = i2259[4]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2261 = data
  i2260.color = new pc.Color(i2261[0], i2261[1], i2261[2], i2261[3])
  request.r(i2261[4], i2261[5], 0, i2260, 'sprite')
  i2260.flipX = !!i2261[6]
  i2260.flipY = !!i2261[7]
  i2260.drawMode = i2261[8]
  i2260.size = new pc.Vec2( i2261[9], i2261[10] )
  i2260.tileMode = i2261[11]
  i2260.adaptiveModeThreshold = i2261[12]
  i2260.maskInteraction = i2261[13]
  i2260.spriteSortPoint = i2261[14]
  i2260.enabled = !!i2261[15]
  request.r(i2261[16], i2261[17], 0, i2260, 'sharedMaterial')
  var i2263 = i2261[18]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 2) {
  request.r(i2263[i + 0], i2263[i + 1], 2, i2262, '')
  }
  i2260.sharedMaterials = i2262
  i2260.receiveShadows = !!i2261[19]
  i2260.shadowCastingMode = i2261[20]
  i2260.sortingLayerID = i2261[21]
  i2260.sortingOrder = i2261[22]
  i2260.lightmapIndex = i2261[23]
  i2260.lightmapSceneIndex = i2261[24]
  i2260.lightmapScaleOffset = new pc.Vec4( i2261[25], i2261[26], i2261[27], i2261[28] )
  i2260.lightProbeUsage = i2261[29]
  i2260.reflectionProbeUsage = i2261[30]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'sharedMesh')
  i2264.convex = !!i2265[2]
  i2264.enabled = !!i2265[3]
  i2264.isTrigger = !!i2265[4]
  request.r(i2265[5], i2265[6], 0, i2264, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2271 = data
  i2270.name = i2271[0]
  i2270.atlasId = i2271[1]
  i2270.mipmapCount = i2271[2]
  i2270.hdr = !!i2271[3]
  i2270.size = i2271[4]
  i2270.anisoLevel = i2271[5]
  i2270.filterMode = i2271[6]
  var i2273 = i2271[7]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 4) {
    i2272.push( UnityEngine.Rect.MinMaxRect(i2273[i + 0], i2273[i + 1], i2273[i + 2], i2273[i + 3]) );
  }
  i2270.rects = i2272
  i2270.wrapU = i2271[8]
  i2270.wrapV = i2271[9]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.index = i2277[1]
  i2276.startup = !!i2277[2]
  return i2276
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'm_FirstSelected')
  i2278.m_sendNavigationEvents = !!i2279[2]
  i2278.m_DragThreshold = i2279[3]
  return i2278
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2281 = data
  i2280.m_HorizontalAxis = i2281[0]
  i2280.m_VerticalAxis = i2281[1]
  i2280.m_SubmitButton = i2281[2]
  i2280.m_CancelButton = i2281[3]
  i2280.m_InputActionsPerSecond = i2281[4]
  i2280.m_RepeatDelay = i2281[5]
  i2280.m_ForceModuleActive = !!i2281[6]
  i2280.m_SendPointerHoverToParent = !!i2281[7]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2283 = data
  i2282.type = i2283[0]
  i2282.color = new pc.Color(i2283[1], i2283[2], i2283[3], i2283[4])
  i2282.cullingMask = i2283[5]
  i2282.intensity = i2283[6]
  i2282.range = i2283[7]
  i2282.spotAngle = i2283[8]
  i2282.shadows = i2283[9]
  i2282.shadowNormalBias = i2283[10]
  i2282.shadowBias = i2283[11]
  i2282.shadowStrength = i2283[12]
  i2282.shadowResolution = i2283[13]
  i2282.lightmapBakeType = i2283[14]
  i2282.renderMode = i2283[15]
  request.r(i2283[16], i2283[17], 0, i2282, 'cookie')
  i2282.cookieSize = i2283[18]
  i2282.shadowNearPlane = i2283[19]
  i2282.occlusionMaskChannel = i2283[20]
  i2282.isBaked = !!i2283[21]
  i2282.mixedLightingMode = i2283[22]
  i2282.enabled = !!i2283[23]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2285 = data
  i2284.pivot = new pc.Vec2( i2285[0], i2285[1] )
  i2284.anchorMin = new pc.Vec2( i2285[2], i2285[3] )
  i2284.anchorMax = new pc.Vec2( i2285[4], i2285[5] )
  i2284.sizeDelta = new pc.Vec2( i2285[6], i2285[7] )
  i2284.anchoredPosition3D = new pc.Vec3( i2285[8], i2285[9], i2285[10] )
  i2284.rotation = new pc.Quat(i2285[11], i2285[12], i2285[13], i2285[14])
  i2284.scale = new pc.Vec3( i2285[15], i2285[16], i2285[17] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2287 = data
  i2286.planeDistance = i2287[0]
  i2286.referencePixelsPerUnit = i2287[1]
  i2286.isFallbackOverlay = !!i2287[2]
  i2286.renderMode = i2287[3]
  i2286.renderOrder = i2287[4]
  i2286.sortingLayerName = i2287[5]
  i2286.sortingOrder = i2287[6]
  i2286.scaleFactor = i2287[7]
  request.r(i2287[8], i2287[9], 0, i2286, 'worldCamera')
  i2286.overrideSorting = !!i2287[10]
  i2286.pixelPerfect = !!i2287[11]
  i2286.targetDisplay = i2287[12]
  i2286.overridePixelPerfect = !!i2287[13]
  i2286.enabled = !!i2287[14]
  return i2286
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2289 = data
  i2288.m_UiScaleMode = i2289[0]
  i2288.m_ReferencePixelsPerUnit = i2289[1]
  i2288.m_ScaleFactor = i2289[2]
  i2288.m_ReferenceResolution = new pc.Vec2( i2289[3], i2289[4] )
  i2288.m_ScreenMatchMode = i2289[5]
  i2288.m_MatchWidthOrHeight = i2289[6]
  i2288.m_PhysicalUnit = i2289[7]
  i2288.m_FallbackScreenDPI = i2289[8]
  i2288.m_DefaultSpriteDPI = i2289[9]
  i2288.m_DynamicPixelsPerUnit = i2289[10]
  i2288.m_PresetInfoIsWorld = !!i2289[11]
  return i2288
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2291 = data
  i2290.m_IgnoreReversedGraphics = !!i2291[0]
  i2290.m_BlockingObjects = i2291[1]
  i2290.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2291[2] )
  return i2290
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2292 = root || request.c( 'Joystick' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'background')
  request.r(i2293[2], i2293[3], 0, i2292, 'joy')
  i2292.deadZone = i2293[4]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2295 = data
  i2294.cullTransparentMesh = !!i2295[0]
  return i2294
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Image' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'm_Sprite')
  i2296.m_Type = i2297[2]
  i2296.m_PreserveAspect = !!i2297[3]
  i2296.m_FillCenter = !!i2297[4]
  i2296.m_FillMethod = i2297[5]
  i2296.m_FillAmount = i2297[6]
  i2296.m_FillClockwise = !!i2297[7]
  i2296.m_FillOrigin = i2297[8]
  i2296.m_UseSpriteMesh = !!i2297[9]
  i2296.m_PixelsPerUnitMultiplier = i2297[10]
  request.r(i2297[11], i2297[12], 0, i2296, 'm_Material')
  i2296.m_Maskable = !!i2297[13]
  i2296.m_Color = new pc.Color(i2297[14], i2297[15], i2297[16], i2297[17])
  i2296.m_RaycastTarget = !!i2297[18]
  i2296.m_RaycastPadding = new pc.Vec4( i2297[19], i2297[20], i2297[21], i2297[22] )
  return i2296
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2298 = root || request.c( 'JumpButton' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'button')
  return i2298
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.Button' )
  var i2301 = data
  i2300.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2301[0], i2300.m_OnClick)
  i2300.m_Navigation = request.d('UnityEngine.UI.Navigation', i2301[1], i2300.m_Navigation)
  i2300.m_Transition = i2301[2]
  i2300.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2301[3], i2300.m_Colors)
  i2300.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2301[4], i2300.m_SpriteState)
  i2300.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2301[5], i2300.m_AnimationTriggers)
  i2300.m_Interactable = !!i2301[6]
  request.r(i2301[7], i2301[8], 0, i2300, 'm_TargetGraphic')
  return i2300
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2303 = data
  i2302.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2303[0], i2302.m_PersistentCalls)
  return i2302
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2305 = data
  var i2307 = i2305[0]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('UnityEngine.Events.PersistentCall', i2307[i + 0]));
  }
  i2304.m_Calls = i2306
  return i2304
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_Target')
  i2310.m_TargetAssemblyTypeName = i2311[2]
  i2310.m_MethodName = i2311[3]
  i2310.m_Mode = i2311[4]
  i2310.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2311[5], i2310.m_Arguments)
  i2310.m_CallState = i2311[6]
  return i2310
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2313 = data
  i2312.m_Mode = i2313[0]
  i2312.m_WrapAround = !!i2313[1]
  request.r(i2313[2], i2313[3], 0, i2312, 'm_SelectOnUp')
  request.r(i2313[4], i2313[5], 0, i2312, 'm_SelectOnDown')
  request.r(i2313[6], i2313[7], 0, i2312, 'm_SelectOnLeft')
  request.r(i2313[8], i2313[9], 0, i2312, 'm_SelectOnRight')
  return i2312
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2315 = data
  i2314.m_NormalColor = new pc.Color(i2315[0], i2315[1], i2315[2], i2315[3])
  i2314.m_HighlightedColor = new pc.Color(i2315[4], i2315[5], i2315[6], i2315[7])
  i2314.m_PressedColor = new pc.Color(i2315[8], i2315[9], i2315[10], i2315[11])
  i2314.m_SelectedColor = new pc.Color(i2315[12], i2315[13], i2315[14], i2315[15])
  i2314.m_DisabledColor = new pc.Color(i2315[16], i2315[17], i2315[18], i2315[19])
  i2314.m_ColorMultiplier = i2315[20]
  i2314.m_FadeDuration = i2315[21]
  return i2314
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_HighlightedSprite')
  request.r(i2317[2], i2317[3], 0, i2316, 'm_PressedSprite')
  request.r(i2317[4], i2317[5], 0, i2316, 'm_SelectedSprite')
  request.r(i2317[6], i2317[7], 0, i2316, 'm_DisabledSprite')
  return i2316
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2319 = data
  i2318.m_NormalTrigger = i2319[0]
  i2318.m_HighlightedTrigger = i2319[1]
  i2318.m_PressedTrigger = i2319[2]
  i2318.m_SelectedTrigger = i2319[3]
  i2318.m_DisabledTrigger = i2319[4]
  return i2318
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2321 = data
  i2320.m_ShowMaskGraphic = !!i2321[0]
  return i2320
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2323 = data
  i2322.m_hasFontAssetChanged = !!i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'm_baseMaterial')
  i2322.m_maskOffset = new pc.Vec4( i2323[3], i2323[4], i2323[5], i2323[6] )
  i2322.m_text = i2323[7]
  i2322.m_isRightToLeft = !!i2323[8]
  request.r(i2323[9], i2323[10], 0, i2322, 'm_fontAsset')
  request.r(i2323[11], i2323[12], 0, i2322, 'm_sharedMaterial')
  var i2325 = i2323[13]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2322.m_fontSharedMaterials = i2324
  request.r(i2323[14], i2323[15], 0, i2322, 'm_fontMaterial')
  var i2327 = i2323[16]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2322.m_fontMaterials = i2326
  i2322.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2323[17], i2323[18], i2323[19], i2323[20])
  i2322.m_fontColor = new pc.Color(i2323[21], i2323[22], i2323[23], i2323[24])
  i2322.m_enableVertexGradient = !!i2323[25]
  i2322.m_colorMode = i2323[26]
  i2322.m_fontColorGradient = request.d('TMPro.VertexGradient', i2323[27], i2322.m_fontColorGradient)
  request.r(i2323[28], i2323[29], 0, i2322, 'm_fontColorGradientPreset')
  request.r(i2323[30], i2323[31], 0, i2322, 'm_spriteAsset')
  i2322.m_tintAllSprites = !!i2323[32]
  request.r(i2323[33], i2323[34], 0, i2322, 'm_StyleSheet')
  i2322.m_TextStyleHashCode = i2323[35]
  i2322.m_overrideHtmlColors = !!i2323[36]
  i2322.m_faceColor = UnityEngine.Color32.ConstructColor(i2323[37], i2323[38], i2323[39], i2323[40])
  i2322.m_fontSize = i2323[41]
  i2322.m_fontSizeBase = i2323[42]
  i2322.m_fontWeight = i2323[43]
  i2322.m_enableAutoSizing = !!i2323[44]
  i2322.m_fontSizeMin = i2323[45]
  i2322.m_fontSizeMax = i2323[46]
  i2322.m_fontStyle = i2323[47]
  i2322.m_HorizontalAlignment = i2323[48]
  i2322.m_VerticalAlignment = i2323[49]
  i2322.m_textAlignment = i2323[50]
  i2322.m_characterSpacing = i2323[51]
  i2322.m_characterHorizontalScale = i2323[52]
  i2322.m_wordSpacing = i2323[53]
  i2322.m_lineSpacing = i2323[54]
  i2322.m_lineSpacingMax = i2323[55]
  i2322.m_paragraphSpacing = i2323[56]
  i2322.m_charWidthMaxAdj = i2323[57]
  i2322.m_TextWrappingMode = i2323[58]
  i2322.m_wordWrappingRatios = i2323[59]
  i2322.m_overflowMode = i2323[60]
  request.r(i2323[61], i2323[62], 0, i2322, 'm_linkedTextComponent')
  request.r(i2323[63], i2323[64], 0, i2322, 'parentLinkedComponent')
  i2322.m_enableKerning = !!i2323[65]
  var i2329 = i2323[66]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.add(i2329[i + 0]);
  }
  i2322.m_ActiveFontFeatures = i2328
  i2322.m_enableExtraPadding = !!i2323[67]
  i2322.checkPaddingRequired = !!i2323[68]
  i2322.m_isRichText = !!i2323[69]
  i2322.m_parseCtrlCharacters = !!i2323[70]
  i2322.m_isOrthographic = !!i2323[71]
  i2322.m_isCullingEnabled = !!i2323[72]
  i2322.m_horizontalMapping = i2323[73]
  i2322.m_verticalMapping = i2323[74]
  i2322.m_uvLineOffset = i2323[75]
  i2322.m_geometrySortingOrder = i2323[76]
  i2322.m_IsTextObjectScaleStatic = !!i2323[77]
  i2322.m_VertexBufferAutoSizeReduction = !!i2323[78]
  i2322.m_useMaxVisibleDescender = !!i2323[79]
  i2322.m_pageToDisplay = i2323[80]
  i2322.m_margin = new pc.Vec4( i2323[81], i2323[82], i2323[83], i2323[84] )
  i2322.m_isUsingLegacyAnimationComponent = !!i2323[85]
  i2322.m_isVolumetricText = !!i2323[86]
  request.r(i2323[87], i2323[88], 0, i2322, 'm_Material')
  i2322.m_EmojiFallbackSupport = !!i2323[89]
  i2322.m_Maskable = !!i2323[90]
  i2322.m_Color = new pc.Color(i2323[91], i2323[92], i2323[93], i2323[94])
  i2322.m_RaycastTarget = !!i2323[95]
  i2322.m_RaycastPadding = new pc.Vec4( i2323[96], i2323[97], i2323[98], i2323[99] )
  return i2322
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.VertexGradient' )
  var i2331 = data
  i2330.topLeft = new pc.Color(i2331[0], i2331[1], i2331[2], i2331[3])
  i2330.topRight = new pc.Color(i2331[4], i2331[5], i2331[6], i2331[7])
  i2330.bottomLeft = new pc.Color(i2331[8], i2331[9], i2331[10], i2331[11])
  i2330.bottomRight = new pc.Color(i2331[12], i2331[13], i2331[14], i2331[15])
  return i2330
}

Deserializers["TutController"] = function (request, data, root) {
  var i2334 = root || request.c( 'TutController' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'tutScene')
  request.r(i2335[2], i2335[3], 0, i2334, 'startTut')
  request.r(i2335[4], i2335[5], 0, i2334, 'playTut')
  request.r(i2335[6], i2335[7], 0, i2334, 'farTut')
  request.r(i2335[8], i2335[9], 0, i2334, 'failTut')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2345 = data
  i2344.center = new pc.Vec3( i2345[0], i2345[1], i2345[2] )
  i2344.radius = i2345[3]
  i2344.enabled = !!i2345[4]
  i2344.isTrigger = !!i2345[5]
  request.r(i2345[6], i2345[7], 0, i2344, 'material')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2347 = data
  i2346.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2347[0], i2346.main)
  i2346.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2347[1], i2346.colorBySpeed)
  i2346.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2347[2], i2346.colorOverLifetime)
  i2346.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2347[3], i2346.emission)
  i2346.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2347[4], i2346.rotationBySpeed)
  i2346.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2347[5], i2346.rotationOverLifetime)
  i2346.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2347[6], i2346.shape)
  i2346.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2347[7], i2346.sizeBySpeed)
  i2346.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2347[8], i2346.sizeOverLifetime)
  i2346.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2347[9], i2346.textureSheetAnimation)
  i2346.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2347[10], i2346.velocityOverLifetime)
  i2346.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2347[11], i2346.noise)
  i2346.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2347[12], i2346.inheritVelocity)
  i2346.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2347[13], i2346.forceOverLifetime)
  i2346.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2347[14], i2346.limitVelocityOverLifetime)
  i2346.useAutoRandomSeed = !!i2347[15]
  i2346.randomSeed = i2347[16]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemMain()
  var i2349 = data
  i2348.duration = i2349[0]
  i2348.loop = !!i2349[1]
  i2348.prewarm = !!i2349[2]
  i2348.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[3], i2348.startDelay)
  i2348.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[4], i2348.startLifetime)
  i2348.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[5], i2348.startSpeed)
  i2348.startSize3D = !!i2349[6]
  i2348.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[7], i2348.startSizeX)
  i2348.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[8], i2348.startSizeY)
  i2348.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[9], i2348.startSizeZ)
  i2348.startRotation3D = !!i2349[10]
  i2348.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[11], i2348.startRotationX)
  i2348.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[12], i2348.startRotationY)
  i2348.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[13], i2348.startRotationZ)
  i2348.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2349[14], i2348.startColor)
  i2348.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[15], i2348.gravityModifier)
  i2348.simulationSpace = i2349[16]
  request.r(i2349[17], i2349[18], 0, i2348, 'customSimulationSpace')
  i2348.simulationSpeed = i2349[19]
  i2348.useUnscaledTime = !!i2349[20]
  i2348.scalingMode = i2349[21]
  i2348.playOnAwake = !!i2349[22]
  i2348.maxParticles = i2349[23]
  i2348.emitterVelocityMode = i2349[24]
  i2348.stopAction = i2349[25]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2350 = root || new pc.MinMaxCurve()
  var i2351 = data
  i2350.mode = i2351[0]
  i2350.curveMin = new pc.AnimationCurve( { keys_flow: i2351[1] } )
  i2350.curveMax = new pc.AnimationCurve( { keys_flow: i2351[2] } )
  i2350.curveMultiplier = i2351[3]
  i2350.constantMin = i2351[4]
  i2350.constantMax = i2351[5]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2352 = root || new pc.MinMaxGradient()
  var i2353 = data
  i2352.mode = i2353[0]
  i2352.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2353[1], i2352.gradientMin)
  i2352.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2353[2], i2352.gradientMax)
  i2352.colorMin = new pc.Color(i2353[3], i2353[4], i2353[5], i2353[6])
  i2352.colorMax = new pc.Color(i2353[7], i2353[8], i2353[9], i2353[10])
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2355 = data
  i2354.mode = i2355[0]
  var i2357 = i2355[1]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2357[i + 0]) );
  }
  i2354.colorKeys = i2356
  var i2359 = i2355[2]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2359[i + 0]) );
  }
  i2354.alphaKeys = i2358
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2360 = root || new pc.ParticleSystemColorBySpeed()
  var i2361 = data
  i2360.enabled = !!i2361[0]
  i2360.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2361[1], i2360.color)
  i2360.range = new pc.Vec2( i2361[2], i2361[3] )
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2365 = data
  i2364.color = new pc.Color(i2365[0], i2365[1], i2365[2], i2365[3])
  i2364.time = i2365[4]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2369 = data
  i2368.alpha = i2369[0]
  i2368.time = i2369[1]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemColorOverLifetime()
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2371[1], i2370.color)
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2372 = root || new pc.ParticleSystemEmitter()
  var i2373 = data
  i2372.enabled = !!i2373[0]
  i2372.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[1], i2372.rateOverTime)
  i2372.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[2], i2372.rateOverDistance)
  var i2375 = i2373[3]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2375[i + 0]) );
  }
  i2372.bursts = i2374
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemBurst()
  var i2379 = data
  i2378.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[0], i2378.count)
  i2378.cycleCount = i2379[1]
  i2378.minCount = i2379[2]
  i2378.maxCount = i2379[3]
  i2378.repeatInterval = i2379[4]
  i2378.time = i2379[5]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemRotationBySpeed()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[1], i2380.x)
  i2380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[2], i2380.y)
  i2380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[3], i2380.z)
  i2380.separateAxes = !!i2381[4]
  i2380.range = new pc.Vec2( i2381[5], i2381[6] )
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[1], i2382.x)
  i2382.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[2], i2382.y)
  i2382.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[3], i2382.z)
  i2382.separateAxes = !!i2383[4]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemShape()
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.shapeType = i2385[1]
  i2384.randomDirectionAmount = i2385[2]
  i2384.sphericalDirectionAmount = i2385[3]
  i2384.randomPositionAmount = i2385[4]
  i2384.alignToDirection = !!i2385[5]
  i2384.radius = i2385[6]
  i2384.radiusMode = i2385[7]
  i2384.radiusSpread = i2385[8]
  i2384.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[9], i2384.radiusSpeed)
  i2384.radiusThickness = i2385[10]
  i2384.angle = i2385[11]
  i2384.length = i2385[12]
  i2384.boxThickness = new pc.Vec3( i2385[13], i2385[14], i2385[15] )
  i2384.meshShapeType = i2385[16]
  request.r(i2385[17], i2385[18], 0, i2384, 'mesh')
  request.r(i2385[19], i2385[20], 0, i2384, 'meshRenderer')
  request.r(i2385[21], i2385[22], 0, i2384, 'skinnedMeshRenderer')
  i2384.useMeshMaterialIndex = !!i2385[23]
  i2384.meshMaterialIndex = i2385[24]
  i2384.useMeshColors = !!i2385[25]
  i2384.normalOffset = i2385[26]
  i2384.arc = i2385[27]
  i2384.arcMode = i2385[28]
  i2384.arcSpread = i2385[29]
  i2384.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[30], i2384.arcSpeed)
  i2384.donutRadius = i2385[31]
  i2384.position = new pc.Vec3( i2385[32], i2385[33], i2385[34] )
  i2384.rotation = new pc.Vec3( i2385[35], i2385[36], i2385[37] )
  i2384.scale = new pc.Vec3( i2385[38], i2385[39], i2385[40] )
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemSizeBySpeed()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[1], i2386.x)
  i2386.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[2], i2386.y)
  i2386.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[3], i2386.z)
  i2386.separateAxes = !!i2387[4]
  i2386.range = new pc.Vec2( i2387[5], i2387[6] )
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2389 = data
  i2388.enabled = !!i2389[0]
  i2388.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[1], i2388.x)
  i2388.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[2], i2388.y)
  i2388.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[3], i2388.z)
  i2388.separateAxes = !!i2389[4]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.mode = i2391[1]
  i2390.animation = i2391[2]
  i2390.numTilesX = i2391[3]
  i2390.numTilesY = i2391[4]
  i2390.useRandomRow = !!i2391[5]
  i2390.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[6], i2390.frameOverTime)
  i2390.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[7], i2390.startFrame)
  i2390.cycleCount = i2391[8]
  i2390.rowIndex = i2391[9]
  i2390.flipU = i2391[10]
  i2390.flipV = i2391[11]
  i2390.spriteCount = i2391[12]
  var i2393 = i2391[13]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.sprites = i2392
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.x)
  i2396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.y)
  i2396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.z)
  i2396.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[4], i2396.radial)
  i2396.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[5], i2396.speedModifier)
  i2396.space = i2397[6]
  i2396.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[7], i2396.orbitalX)
  i2396.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[8], i2396.orbitalY)
  i2396.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[9], i2396.orbitalZ)
  i2396.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[10], i2396.orbitalOffsetX)
  i2396.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[11], i2396.orbitalOffsetY)
  i2396.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[12], i2396.orbitalOffsetZ)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemNoise()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.separateAxes = !!i2399[1]
  i2398.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.strengthX)
  i2398.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[3], i2398.strengthY)
  i2398.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[4], i2398.strengthZ)
  i2398.frequency = i2399[5]
  i2398.damping = !!i2399[6]
  i2398.octaveCount = i2399[7]
  i2398.octaveMultiplier = i2399[8]
  i2398.octaveScale = i2399[9]
  i2398.quality = i2399[10]
  i2398.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[11], i2398.scrollSpeed)
  i2398.scrollSpeedMultiplier = i2399[12]
  i2398.remapEnabled = !!i2399[13]
  i2398.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[14], i2398.remapX)
  i2398.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[15], i2398.remapY)
  i2398.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[16], i2398.remapZ)
  i2398.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[17], i2398.positionAmount)
  i2398.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[18], i2398.rotationAmount)
  i2398.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[19], i2398.sizeAmount)
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemInheritVelocity()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.mode = i2401[1]
  i2400.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[2], i2400.curve)
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemForceOverLifetime()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.space = i2403[4]
  i2402.randomized = !!i2403[5]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[1], i2404.limit)
  i2404.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[2], i2404.limitX)
  i2404.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[3], i2404.limitY)
  i2404.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[4], i2404.limitZ)
  i2404.dampen = i2405[5]
  i2404.separateAxes = !!i2405[6]
  i2404.space = i2405[7]
  i2404.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[8], i2404.drag)
  i2404.multiplyDragByParticleSize = !!i2405[9]
  i2404.multiplyDragByParticleVelocity = !!i2405[10]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'mesh')
  i2406.meshCount = i2407[2]
  i2406.activeVertexStreamsCount = i2407[3]
  i2406.alignment = i2407[4]
  i2406.renderMode = i2407[5]
  i2406.sortMode = i2407[6]
  i2406.lengthScale = i2407[7]
  i2406.velocityScale = i2407[8]
  i2406.cameraVelocityScale = i2407[9]
  i2406.normalDirection = i2407[10]
  i2406.sortingFudge = i2407[11]
  i2406.minParticleSize = i2407[12]
  i2406.maxParticleSize = i2407[13]
  i2406.pivot = new pc.Vec3( i2407[14], i2407[15], i2407[16] )
  request.r(i2407[17], i2407[18], 0, i2406, 'trailMaterial')
  i2406.applyActiveColorSpace = !!i2407[19]
  i2406.enabled = !!i2407[20]
  request.r(i2407[21], i2407[22], 0, i2406, 'sharedMaterial')
  var i2409 = i2407[23]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2406.sharedMaterials = i2408
  i2406.receiveShadows = !!i2407[24]
  i2406.shadowCastingMode = i2407[25]
  i2406.sortingLayerID = i2407[26]
  i2406.sortingOrder = i2407[27]
  i2406.lightmapIndex = i2407[28]
  i2406.lightmapSceneIndex = i2407[29]
  i2406.lightmapScaleOffset = new pc.Vec4( i2407[30], i2407[31], i2407[32], i2407[33] )
  i2406.lightProbeUsage = i2407[34]
  i2406.reflectionProbeUsage = i2407[35]
  return i2406
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2410 = root || request.c( 'CharacterMotor' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'characterInput')
  request.r(i2411[2], i2411[3], 0, i2410, 'cameraYawTransform')
  request.r(i2411[4], i2411[5], 0, i2410, '_arrow')
  i2410.moveSpeed = i2411[6]
  i2410.jumpHeight = i2411[7]
  request.r(i2411[8], i2411[9], 0, i2410, 'groundChecker')
  i2410.gravity = i2411[10]
  i2410.enableStepClimb = !!i2411[11]
  i2410.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2411[12] )
  i2410.maxStepHeight = i2411[13]
  i2410.stepCheckDistance = i2411[14]
  i2410.stepUpSpeed = i2411[15]
  i2410.stepUpAcceleration = i2411[16]
  i2410.minimumStepFacing = i2411[17]
  request.r(i2411[18], i2411[19], 0, i2410, 'controller')
  i2410.autoRun = !!i2411[20]
  return i2410
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2412 = root || request.c( 'CharacterRotation' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'motor')
  i2412.rotationSpeed = i2413[2]
  return i2412
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2414 = root || request.c( 'CharacterAnimation' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'animator')
  request.r(i2415[2], i2415[3], 0, i2414, 'motor')
  i2414.speedChangeRate = i2415[4]
  i2414.groundedGraceTime = i2415[5]
  return i2414
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2416 = root || request.c( 'CharacterCollect' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'motor')
  request.r(i2417[2], i2417[3], 0, i2416, 'avatar')
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2419 = data
  i2418.mass = i2419[0]
  i2418.drag = i2419[1]
  i2418.angularDrag = i2419[2]
  i2418.useGravity = !!i2419[3]
  i2418.isKinematic = !!i2419[4]
  i2418.constraints = i2419[5]
  i2418.maxAngularVelocity = i2419[6]
  i2418.collisionDetectionMode = i2419[7]
  i2418.interpolation = i2419[8]
  return i2418
}

Deserializers["CharacterTrigger"] = function (request, data, root) {
  var i2420 = root || request.c( 'CharacterTrigger' )
  var i2421 = data
  i2420.onTrigger1 = !!i2421[0]
  i2420.completeGift1 = !!i2421[1]
  i2420.onTrigger2 = !!i2421[2]
  i2420.completeGift2 = !!i2421[3]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'sharedMesh')
  var i2425 = i2423[2]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 2, i2424, '')
  }
  i2422.bones = i2424
  i2422.updateWhenOffscreen = !!i2423[3]
  i2422.localBounds = i2423[4]
  request.r(i2423[5], i2423[6], 0, i2422, 'rootBone')
  var i2427 = i2423[7]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2427[i + 0]) );
  }
  i2422.blendShapesWeights = i2426
  i2422.enabled = !!i2423[8]
  request.r(i2423[9], i2423[10], 0, i2422, 'sharedMaterial')
  var i2429 = i2423[11]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 2, i2428, '')
  }
  i2422.sharedMaterials = i2428
  i2422.receiveShadows = !!i2423[12]
  i2422.shadowCastingMode = i2423[13]
  i2422.sortingLayerID = i2423[14]
  i2422.sortingOrder = i2423[15]
  i2422.lightmapIndex = i2423[16]
  i2422.lightmapSceneIndex = i2423[17]
  i2422.lightmapScaleOffset = new pc.Vec4( i2423[18], i2423[19], i2423[20], i2423[21] )
  i2422.lightProbeUsage = i2423[22]
  i2422.reflectionProbeUsage = i2423[23]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2433 = data
  i2432.weight = i2433[0]
  return i2432
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2434 = root || request.c( 'GroundChecker' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'groundPoint')
  i2434.half = new pc.Vec3( i2435[2], i2435[3], i2435[4] )
  i2434.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2435[5] )
  return i2434
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2436 = root || request.c( 'CameraFollow' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'target')
  i2436.smoothTime = i2437[2]
  return i2436
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2438 = root || request.c( 'CameraLook' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'input')
  request.r(i2439[2], i2439[3], 0, i2438, 'yawPivot')
  request.r(i2439[4], i2439[5], 0, i2438, 'pitchPivot')
  i2438.minPitch = i2439[6]
  i2438.maxPitch = i2439[7]
  i2438.yaw = i2439[8]
  i2438.pitch = i2439[9]
  i2438.defaltYaw = i2439[10]
  i2438.defaltPitch = i2439[11]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2441 = data
  i2440.aspect = i2441[0]
  i2440.orthographic = !!i2441[1]
  i2440.orthographicSize = i2441[2]
  i2440.backgroundColor = new pc.Color(i2441[3], i2441[4], i2441[5], i2441[6])
  i2440.nearClipPlane = i2441[7]
  i2440.farClipPlane = i2441[8]
  i2440.fieldOfView = i2441[9]
  i2440.depth = i2441[10]
  i2440.clearFlags = i2441[11]
  i2440.cullingMask = i2441[12]
  i2440.rect = i2441[13]
  request.r(i2441[14], i2441[15], 0, i2440, 'targetTexture')
  i2440.usePhysicalProperties = !!i2441[16]
  i2440.focalLength = i2441[17]
  i2440.sensorSize = new pc.Vec2( i2441[18], i2441[19] )
  i2440.lensShift = new pc.Vec2( i2441[20], i2441[21] )
  i2440.gateFit = i2441[22]
  i2440.commandBufferCount = i2441[23]
  i2440.cameraType = i2441[24]
  i2440.enabled = !!i2441[25]
  return i2440
}

Deserializers["Gift"] = function (request, data, root) {
  var i2442 = root || request.c( 'Gift' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'hint')
  i2442.onCollect = request.d('UnityEngine.Events.UnityEvent', i2443[2], i2442.onCollect)
  i2442.collectDone = !!i2443[3]
  request.r(i2443[4], i2443[5], 0, i2442, 'collectSound')
  request.r(i2443[6], i2443[7], 0, i2442, 'effect')
  request.r(i2443[8], i2443[9], 0, i2442, 'complete')
  return i2442
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'm_ObjectArgument')
  i2444.m_ObjectArgumentAssemblyTypeName = i2445[2]
  i2444.m_IntArgument = i2445[3]
  i2444.m_FloatArgument = i2445[4]
  i2444.m_StringArgument = i2445[5]
  i2444.m_BoolArgument = !!i2445[6]
  return i2444
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2446 = root || request.c( 'SoundHint' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'Sound')
  request.r(i2447[2], i2447[3], 0, i2446, 'Source')
  return i2446
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i2448 = root || request.c( 'JumpHint' )
  var i2449 = data
  i2448.JumpForce = new pc.Vec3( i2449[0], i2449[1], i2449[2] )
  request.r(i2449[3], i2449[4], 0, i2448, 'Rigidbody')
  return i2448
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2450 = root || request.c( 'CharacterInput' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'joystick')
  request.r(i2451[2], i2451[3], 0, i2450, 'jumpButton')
  return i2450
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2452 = root || request.c( 'InputManager' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'worldCamera')
  i2452.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2453[2] )
  i2452.touchSensitivity = i2453[3]
  i2452.mouseSensitivity = i2453[4]
  i2452.dragThreshold = i2453[5]
  return i2452
}

Deserializers["GameController"] = function (request, data, root) {
  var i2454 = root || request.c( 'GameController' )
  var i2455 = data
  i2454.timeToShowEnd = i2455[0]
  i2454.currentProgress = i2455[1]
  i2454.target = i2455[2]
  i2454.maxProgress = i2455[3]
  request.r(i2455[4], i2455[5], 0, i2454, 'progressText')
  request.r(i2455[6], i2455[7], 0, i2454, 'completeScene')
  request.r(i2455[8], i2455[9], 0, i2454, 'failScene')
  request.r(i2455[10], i2455[11], 0, i2454, 'collect')
  request.r(i2455[12], i2455[13], 0, i2454, 'tut')
  var i2457 = i2455[14]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 1, i2456, '')
  }
  i2454.gifts = i2456
  return i2454
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2460 = root || request.c( 'AudioController' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'musicSource')
  request.r(i2461[2], i2461[3], 0, i2460, 'poolParent')
  i2460.startSize = i2461[4]
  return i2460
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2462 = root || request.c( 'LunaController' )
  var i2463 = data
  i2462.LimitTimePlay = !!i2463[0]
  i2462.TimePlay = i2463[1]
  i2462.TypeMonster1 = i2463[2]
  i2462.TypeMonster2 = i2463[3]
  request.r(i2463[4], i2463[5], 0, i2462, 'gift1')
  request.r(i2463[6], i2463[7], 0, i2462, 'gift2')
  var i2465 = i2463[8]
  var i2464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 1, i2464, '')
  }
  i2462.monsters = i2464
  var i2467 = i2463[9]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 1, i2466, '')
  }
  i2462.CTA = i2466
  request.r(i2463[10], i2463[11], 0, i2462, 'endCard')
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2473 = data
  i2472.ambientIntensity = i2473[0]
  i2472.reflectionIntensity = i2473[1]
  i2472.ambientMode = i2473[2]
  i2472.ambientLight = new pc.Color(i2473[3], i2473[4], i2473[5], i2473[6])
  i2472.ambientSkyColor = new pc.Color(i2473[7], i2473[8], i2473[9], i2473[10])
  i2472.ambientGroundColor = new pc.Color(i2473[11], i2473[12], i2473[13], i2473[14])
  i2472.ambientEquatorColor = new pc.Color(i2473[15], i2473[16], i2473[17], i2473[18])
  i2472.fogColor = new pc.Color(i2473[19], i2473[20], i2473[21], i2473[22])
  i2472.fogEndDistance = i2473[23]
  i2472.fogStartDistance = i2473[24]
  i2472.fogDensity = i2473[25]
  i2472.fog = !!i2473[26]
  request.r(i2473[27], i2473[28], 0, i2472, 'skybox')
  i2472.fogMode = i2473[29]
  var i2475 = i2473[30]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2475[i + 0]) );
  }
  i2472.lightmaps = i2474
  i2472.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2473[31], i2472.lightProbes)
  i2472.lightmapsMode = i2473[32]
  i2472.mixedBakeMode = i2473[33]
  i2472.environmentLightingMode = i2473[34]
  i2472.ambientProbe = new pc.SphericalHarmonicsL2(i2473[35])
  request.r(i2473[36], i2473[37], 0, i2472, 'customReflection')
  request.r(i2473[38], i2473[39], 0, i2472, 'defaultReflection')
  i2472.defaultReflectionMode = i2473[40]
  i2472.defaultReflectionResolution = i2473[41]
  i2472.sunLightObjectId = i2473[42]
  i2472.pixelLightCount = i2473[43]
  i2472.defaultReflectionHDR = !!i2473[44]
  i2472.hasLightDataAsset = !!i2473[45]
  i2472.hasManualGenerate = !!i2473[46]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'lightmapColor')
  request.r(i2479[2], i2479[3], 0, i2478, 'lightmapDirection')
  request.r(i2479[4], i2479[5], 0, i2478, 'shadowMask')
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2480 = root || new UnityEngine.LightProbes()
  var i2481 = data
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2491[i + 0]));
  }
  i2488.ShaderCompilationErrors = i2490
  i2488.name = i2489[1]
  i2488.guid = i2489[2]
  var i2493 = i2489[3]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( i2493[i + 0] );
  }
  i2488.shaderDefinedKeywords = i2492
  var i2495 = i2489[4]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2495[i + 0]) );
  }
  i2488.passes = i2494
  var i2497 = i2489[5]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2497[i + 0]) );
  }
  i2488.usePasses = i2496
  var i2499 = i2489[6]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2499[i + 0]) );
  }
  i2488.defaultParameterValues = i2498
  request.r(i2489[7], i2489[8], 0, i2488, 'unityFallbackShader')
  i2488.readDepth = !!i2489[9]
  i2488.hasDepthOnlyPass = !!i2489[10]
  i2488.isCreatedByShaderGraph = !!i2489[11]
  i2488.disableBatching = !!i2489[12]
  i2488.compiled = !!i2489[13]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2503 = data
  i2502.shaderName = i2503[0]
  i2502.errorMessage = i2503[1]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2508 = root || new pc.UnityShaderPass()
  var i2509 = data
  i2508.id = i2509[0]
  i2508.subShaderIndex = i2509[1]
  i2508.name = i2509[2]
  i2508.passType = i2509[3]
  i2508.grabPassTextureName = i2509[4]
  i2508.usePass = !!i2509[5]
  i2508.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[6], i2508.zTest)
  i2508.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[7], i2508.zWrite)
  i2508.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[8], i2508.culling)
  i2508.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2509[9], i2508.blending)
  i2508.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2509[10], i2508.alphaBlending)
  i2508.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[11], i2508.colorWriteMask)
  i2508.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[12], i2508.offsetUnits)
  i2508.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[13], i2508.offsetFactor)
  i2508.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[14], i2508.stencilRef)
  i2508.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[15], i2508.stencilReadMask)
  i2508.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[16], i2508.stencilWriteMask)
  i2508.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2509[17], i2508.stencilOp)
  i2508.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2509[18], i2508.stencilOpFront)
  i2508.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2509[19], i2508.stencilOpBack)
  var i2511 = i2509[20]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2511[i + 0]) );
  }
  i2508.tags = i2510
  var i2513 = i2509[21]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( i2513[i + 0] );
  }
  i2508.passDefinedKeywords = i2512
  var i2515 = i2509[22]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2515[i + 0]) );
  }
  i2508.passDefinedKeywordGroups = i2514
  var i2517 = i2509[23]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2517[i + 0]) );
  }
  i2508.variants = i2516
  var i2519 = i2509[24]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2519[i + 0]) );
  }
  i2508.excludedVariants = i2518
  i2508.hasDepthReader = !!i2509[25]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2521 = data
  i2520.val = i2521[0]
  i2520.name = i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2523 = data
  i2522.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[0], i2522.src)
  i2522.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[1], i2522.dst)
  i2522.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[2], i2522.op)
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2525 = data
  i2524.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[0], i2524.pass)
  i2524.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[1], i2524.fail)
  i2524.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[2], i2524.zFail)
  i2524.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[3], i2524.comp)
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2529 = data
  i2528.name = i2529[0]
  i2528.value = i2529[1]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2533 = data
  var i2535 = i2533[0]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2532.keywords = i2534
  i2532.hasDiscard = !!i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2539 = data
  i2538.passId = i2539[0]
  i2538.subShaderIndex = i2539[1]
  var i2541 = i2539[2]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( i2541[i + 0] );
  }
  i2538.keywords = i2540
  i2538.vertexProgram = i2539[3]
  i2538.fragmentProgram = i2539[4]
  i2538.exportedForWebGl2 = !!i2539[5]
  i2538.readDepth = !!i2539[6]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'shader')
  i2544.pass = i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.type = i2549[1]
  i2548.value = new pc.Vec4( i2549[2], i2549[3], i2549[4], i2549[5] )
  i2548.textureValue = i2549[6]
  i2548.shaderPropertyFlag = i2549[7]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2551 = data
  i2550.name = i2551[0]
  request.r(i2551[1], i2551[2], 0, i2550, 'texture')
  i2550.aabb = i2551[3]
  i2550.vertices = i2551[4]
  i2550.triangles = i2551[5]
  i2550.textureRect = UnityEngine.Rect.MinMaxRect(i2551[6], i2551[7], i2551[8], i2551[9])
  i2550.packedRect = UnityEngine.Rect.MinMaxRect(i2551[10], i2551[11], i2551[12], i2551[13])
  i2550.border = new pc.Vec4( i2551[14], i2551[15], i2551[16], i2551[17] )
  i2550.transparency = i2551[18]
  i2550.bounds = i2551[19]
  i2550.pixelsPerUnit = i2551[20]
  i2550.textureWidth = i2551[21]
  i2550.textureHeight = i2551[22]
  i2550.nativeSize = new pc.Vec2( i2551[23], i2551[24] )
  i2550.pivot = new pc.Vec2( i2551[25], i2551[26] )
  i2550.textureRectOffset = new pc.Vec2( i2551[27], i2551[28] )
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2553 = data
  i2552.name = i2553[0]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2555 = data
  i2554.name = i2555[0]
  i2554.wrapMode = i2555[1]
  i2554.isLooping = !!i2555[2]
  i2554.length = i2555[3]
  var i2557 = i2555[4]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2557[i + 0]) );
  }
  i2554.curves = i2556
  var i2559 = i2555[5]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2559[i + 0]) );
  }
  i2554.events = i2558
  i2554.halfPrecision = !!i2555[6]
  i2554._frameRate = i2555[7]
  i2554.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2555[8], i2554.localBounds)
  i2554.hasMuscleCurves = !!i2555[9]
  var i2561 = i2555[10]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( i2561[i + 0] );
  }
  i2554.clipMuscleConstant = i2560
  i2554.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2555[11], i2554.clipBindingConstant)
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2565 = data
  i2564.path = i2565[0]
  i2564.hash = i2565[1]
  i2564.componentType = i2565[2]
  i2564.property = i2565[3]
  i2564.keys = i2565[4]
  var i2567 = i2565[5]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2567[i + 0]) );
  }
  i2564.objectReferenceKeys = i2566
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2571 = data
  i2570.time = i2571[0]
  request.r(i2571[1], i2571[2], 0, i2570, 'value')
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2575 = data
  i2574.functionName = i2575[0]
  i2574.floatParameter = i2575[1]
  i2574.intParameter = i2575[2]
  i2574.stringParameter = i2575[3]
  request.r(i2575[4], i2575[5], 0, i2574, 'objectReferenceParameter')
  i2574.time = i2575[6]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2577 = data
  i2576.center = new pc.Vec3( i2577[0], i2577[1], i2577[2] )
  i2576.extends = new pc.Vec3( i2577[3], i2577[4], i2577[5] )
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2581 = data
  var i2583 = i2581[0]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2580.genericBindings = i2582
  var i2585 = i2581[1]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( i2585[i + 0] );
  }
  i2580.pptrCurveMapping = i2584
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2587 = data
  i2586.name = i2587[0]
  var i2589 = i2587[1]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2589[i + 0]) );
  }
  i2586.layers = i2588
  var i2591 = i2587[2]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2591[i + 0]) );
  }
  i2586.parameters = i2590
  i2586.animationClips = i2587[3]
  i2586.avatarUnsupported = i2587[4]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2595 = data
  i2594.name = i2595[0]
  i2594.defaultWeight = i2595[1]
  i2594.blendingMode = i2595[2]
  i2594.avatarMask = i2595[3]
  i2594.syncedLayerIndex = i2595[4]
  i2594.syncedLayerAffectsTiming = !!i2595[5]
  i2594.syncedLayers = i2595[6]
  i2594.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2595[7], i2594.stateMachine)
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2597 = data
  i2596.id = i2597[0]
  i2596.name = i2597[1]
  i2596.path = i2597[2]
  var i2599 = i2597[3]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2599[i + 0]) );
  }
  i2596.states = i2598
  var i2601 = i2597[4]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2601[i + 0]) );
  }
  i2596.machines = i2600
  var i2603 = i2597[5]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2603[i + 0]) );
  }
  i2596.entryStateTransitions = i2602
  var i2605 = i2597[6]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2605[i + 0]) );
  }
  i2596.exitStateTransitions = i2604
  var i2607 = i2597[7]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2607[i + 0]) );
  }
  i2596.anyStateTransitions = i2606
  i2596.defaultStateId = i2597[8]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2611 = data
  i2610.id = i2611[0]
  i2610.name = i2611[1]
  i2610.cycleOffset = i2611[2]
  i2610.cycleOffsetParameter = i2611[3]
  i2610.cycleOffsetParameterActive = !!i2611[4]
  i2610.mirror = !!i2611[5]
  i2610.mirrorParameter = i2611[6]
  i2610.mirrorParameterActive = !!i2611[7]
  i2610.motionId = i2611[8]
  i2610.nameHash = i2611[9]
  i2610.fullPathHash = i2611[10]
  i2610.speed = i2611[11]
  i2610.speedParameter = i2611[12]
  i2610.speedParameterActive = !!i2611[13]
  i2610.tag = i2611[14]
  i2610.tagHash = i2611[15]
  i2610.writeDefaultValues = !!i2611[16]
  var i2613 = i2611[17]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 2) {
  request.r(i2613[i + 0], i2613[i + 1], 2, i2612, '')
  }
  i2610.behaviours = i2612
  var i2615 = i2611[18]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2615[i + 0]) );
  }
  i2610.transitions = i2614
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2621 = data
  i2620.fullPath = i2621[0]
  i2620.canTransitionToSelf = !!i2621[1]
  i2620.duration = i2621[2]
  i2620.exitTime = i2621[3]
  i2620.hasExitTime = !!i2621[4]
  i2620.hasFixedDuration = !!i2621[5]
  i2620.interruptionSource = i2621[6]
  i2620.offset = i2621[7]
  i2620.orderedInterruption = !!i2621[8]
  i2620.destinationStateId = i2621[9]
  i2620.isExit = !!i2621[10]
  i2620.mute = !!i2621[11]
  i2620.solo = !!i2621[12]
  var i2623 = i2621[13]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2623[i + 0]) );
  }
  i2620.conditions = i2622
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2627 = data
  i2626.mode = i2627[0]
  i2626.parameter = i2627[1]
  i2626.threshold = i2627[2]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2633 = data
  i2632.destinationStateId = i2633[0]
  i2632.isExit = !!i2633[1]
  i2632.mute = !!i2633[2]
  i2632.solo = !!i2633[3]
  var i2635 = i2633[4]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2635[i + 0]) );
  }
  i2632.conditions = i2634
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2639 = data
  i2638.defaultBool = !!i2639[0]
  i2638.defaultFloat = i2639[1]
  i2638.defaultInt = i2639[2]
  i2638.name = i2639[3]
  i2638.nameHash = i2639[4]
  i2638.type = i2639[5]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2641 = data
  i2640.name = i2641[0]
  request.r(i2641[1], i2641[2], 0, i2640, '_runtimeAnimatorController')
  var i2643 = i2641[3]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2640._originalAnimationClips = i2642
  var i2645 = i2641[4]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 2, i2644, '')
  }
  i2640._overrideAnimationClips = i2644
  var i2647 = i2641[5]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 2, i2646, '')
  }
  i2640._animationClips = i2646
  var i2649 = i2641[6]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('UnityEngine.AnimationClipPair', i2649[i + 0]) );
  }
  i2640._animationClipPairs = i2648
  return i2640
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'originalClip')
  request.r(i2655[2], i2655[3], 0, i2654, 'overrideClip')
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2657 = data
  i2656.name = i2657[0]
  i2656.bytes64 = i2657[1]
  i2656.data = i2657[2]
  return i2656
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2659 = data
  i2658.normalStyle = i2659[0]
  i2658.normalSpacingOffset = i2659[1]
  i2658.boldStyle = i2659[2]
  i2658.boldSpacing = i2659[3]
  i2658.italicStyle = i2659[4]
  i2658.tabSize = i2659[5]
  request.r(i2659[6], i2659[7], 0, i2658, 'atlas')
  i2658.m_SourceFontFileGUID = i2659[8]
  i2658.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2659[9], i2658.m_CreationSettings)
  request.r(i2659[10], i2659[11], 0, i2658, 'm_SourceFontFile')
  i2658.m_SourceFontFilePath = i2659[12]
  i2658.m_AtlasPopulationMode = i2659[13]
  i2658.InternalDynamicOS = !!i2659[14]
  var i2661 = i2659[15]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.add(request.d('UnityEngine.TextCore.Glyph', i2661[i + 0]));
  }
  i2658.m_GlyphTable = i2660
  var i2663 = i2659[16]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.add(request.d('TMPro.TMP_Character', i2663[i + 0]));
  }
  i2658.m_CharacterTable = i2662
  var i2665 = i2659[17]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 2, i2664, '')
  }
  i2658.m_AtlasTextures = i2664
  i2658.m_AtlasTextureIndex = i2659[18]
  i2658.m_IsMultiAtlasTexturesEnabled = !!i2659[19]
  i2658.m_GetFontFeatures = !!i2659[20]
  i2658.m_ClearDynamicDataOnBuild = !!i2659[21]
  i2658.m_AtlasWidth = i2659[22]
  i2658.m_AtlasHeight = i2659[23]
  i2658.m_AtlasPadding = i2659[24]
  i2658.m_AtlasRenderMode = i2659[25]
  var i2667 = i2659[26]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('UnityEngine.TextCore.GlyphRect', i2667[i + 0]));
  }
  i2658.m_UsedGlyphRects = i2666
  var i2669 = i2659[27]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('UnityEngine.TextCore.GlyphRect', i2669[i + 0]));
  }
  i2658.m_FreeGlyphRects = i2668
  i2658.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2659[28], i2658.m_FontFeatureTable)
  i2658.m_ShouldReimportFontFeatures = !!i2659[29]
  var i2671 = i2659[30]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 1, i2670, '')
  }
  i2658.m_FallbackFontAssetTable = i2670
  var i2673 = i2659[31]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('TMPro.TMP_FontWeightPair', i2673[i + 0]) );
  }
  i2658.m_FontWeightTable = i2672
  var i2675 = i2659[32]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('TMPro.TMP_FontWeightPair', i2675[i + 0]) );
  }
  i2658.fontWeights = i2674
  i2658.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2659[33], i2658.m_fontInfo)
  var i2677 = i2659[34]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('TMPro.TMP_Glyph', i2677[i + 0]));
  }
  i2658.m_glyphInfoList = i2676
  i2658.m_KerningTable = request.d('TMPro.KerningTable', i2659[35], i2658.m_KerningTable)
  var i2679 = i2659[36]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2679.length; i += 2) {
  request.r(i2679[i + 0], i2679[i + 1], 1, i2678, '')
  }
  i2658.fallbackFontAssets = i2678
  i2658.m_Version = i2659[37]
  i2658.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2659[38], i2658.m_FaceInfo)
  request.r(i2659[39], i2659[40], 0, i2658, 'm_Material')
  return i2658
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2681 = data
  i2680.sourceFontFileName = i2681[0]
  i2680.sourceFontFileGUID = i2681[1]
  i2680.faceIndex = i2681[2]
  i2680.pointSizeSamplingMode = i2681[3]
  i2680.pointSize = i2681[4]
  i2680.padding = i2681[5]
  i2680.paddingMode = i2681[6]
  i2680.packingMode = i2681[7]
  i2680.atlasWidth = i2681[8]
  i2680.atlasHeight = i2681[9]
  i2680.characterSetSelectionMode = i2681[10]
  i2680.characterSequence = i2681[11]
  i2680.referencedFontAssetGUID = i2681[12]
  i2680.referencedTextAssetGUID = i2681[13]
  i2680.fontStyle = i2681[14]
  i2680.fontStyleModifier = i2681[15]
  i2680.renderMode = i2681[16]
  i2680.includeFontFeatures = !!i2681[17]
  return i2680
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2685 = data
  i2684.m_Index = i2685[0]
  i2684.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2685[1], i2684.m_Metrics)
  i2684.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2685[2], i2684.m_GlyphRect)
  i2684.m_Scale = i2685[3]
  i2684.m_AtlasIndex = i2685[4]
  i2684.m_ClassDefinitionType = i2685[5]
  return i2684
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2687 = data
  i2686.m_Width = i2687[0]
  i2686.m_Height = i2687[1]
  i2686.m_HorizontalBearingX = i2687[2]
  i2686.m_HorizontalBearingY = i2687[3]
  i2686.m_HorizontalAdvance = i2687[4]
  return i2686
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2689 = data
  i2688.m_X = i2689[0]
  i2688.m_Y = i2689[1]
  i2688.m_Width = i2689[2]
  i2688.m_Height = i2689[3]
  return i2688
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.TMP_Character' )
  var i2693 = data
  i2692.m_ElementType = i2693[0]
  i2692.m_Unicode = i2693[1]
  i2692.m_GlyphIndex = i2693[2]
  i2692.m_Scale = i2693[3]
  return i2692
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2698 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('TMPro.MultipleSubstitutionRecord', i2701[i + 0]));
  }
  i2698.m_MultipleSubstitutionRecords = i2700
  var i2703 = i2699[1]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('TMPro.LigatureSubstitutionRecord', i2703[i + 0]));
  }
  i2698.m_LigatureSubstitutionRecords = i2702
  var i2705 = i2699[2]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2705[i + 0]));
  }
  i2698.m_GlyphPairAdjustmentRecords = i2704
  var i2707 = i2699[3]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2707[i + 0]));
  }
  i2698.m_MarkToBaseAdjustmentRecords = i2706
  var i2709 = i2699[4]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2709[i + 0]));
  }
  i2698.m_MarkToMarkAdjustmentRecords = i2708
  return i2698
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2712 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2713 = data
  i2712.m_TargetGlyphID = i2713[0]
  i2712.m_SubstituteGlyphIDs = i2713[1]
  return i2712
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2717 = data
  i2716.m_ComponentGlyphIDs = i2717[0]
  i2716.m_LigatureGlyphID = i2717[1]
  return i2716
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2721 = data
  i2720.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2721[0], i2720.m_FirstAdjustmentRecord)
  i2720.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2721[1], i2720.m_SecondAdjustmentRecord)
  i2720.m_FeatureLookupFlags = i2721[2]
  return i2720
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2725 = data
  i2724.m_BaseGlyphID = i2725[0]
  i2724.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2725[1], i2724.m_BaseGlyphAnchorPoint)
  i2724.m_MarkGlyphID = i2725[2]
  i2724.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2725[3], i2724.m_MarkPositionAdjustment)
  return i2724
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2729 = data
  i2728.m_BaseMarkGlyphID = i2729[0]
  i2728.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2729[1], i2728.m_BaseMarkGlyphAnchorPoint)
  i2728.m_CombiningMarkGlyphID = i2729[2]
  i2728.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2729[3], i2728.m_CombiningMarkPositionAdjustment)
  return i2728
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'regularTypeface')
  request.r(i2735[2], i2735[3], 0, i2734, 'italicTypeface')
  return i2734
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2737 = data
  i2736.Name = i2737[0]
  i2736.PointSize = i2737[1]
  i2736.Scale = i2737[2]
  i2736.CharacterCount = i2737[3]
  i2736.LineHeight = i2737[4]
  i2736.Baseline = i2737[5]
  i2736.Ascender = i2737[6]
  i2736.CapHeight = i2737[7]
  i2736.Descender = i2737[8]
  i2736.CenterLine = i2737[9]
  i2736.SuperscriptOffset = i2737[10]
  i2736.SubscriptOffset = i2737[11]
  i2736.SubSize = i2737[12]
  i2736.Underline = i2737[13]
  i2736.UnderlineThickness = i2737[14]
  i2736.strikethrough = i2737[15]
  i2736.strikethroughThickness = i2737[16]
  i2736.TabWidth = i2737[17]
  i2736.Padding = i2737[18]
  i2736.AtlasWidth = i2737[19]
  i2736.AtlasHeight = i2737[20]
  return i2736
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2741 = data
  i2740.id = i2741[0]
  i2740.x = i2741[1]
  i2740.y = i2741[2]
  i2740.width = i2741[3]
  i2740.height = i2741[4]
  i2740.xOffset = i2741[5]
  i2740.yOffset = i2741[6]
  i2740.xAdvance = i2741[7]
  i2740.scale = i2741[8]
  return i2740
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.KerningTable' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.add(request.d('TMPro.KerningPair', i2745[i + 0]));
  }
  i2742.kerningPairs = i2744
  return i2742
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.KerningPair' )
  var i2749 = data
  i2748.xOffset = i2749[0]
  i2748.m_FirstGlyph = i2749[1]
  i2748.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2749[2], i2748.m_FirstGlyphAdjustments)
  i2748.m_SecondGlyph = i2749[3]
  i2748.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2749[4], i2748.m_SecondGlyphAdjustments)
  i2748.m_IgnoreSpacingAdjustments = !!i2749[5]
  return i2748
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2751 = data
  i2750.m_FaceIndex = i2751[0]
  i2750.m_FamilyName = i2751[1]
  i2750.m_StyleName = i2751[2]
  i2750.m_PointSize = i2751[3]
  i2750.m_Scale = i2751[4]
  i2750.m_UnitsPerEM = i2751[5]
  i2750.m_LineHeight = i2751[6]
  i2750.m_AscentLine = i2751[7]
  i2750.m_CapLine = i2751[8]
  i2750.m_MeanLine = i2751[9]
  i2750.m_Baseline = i2751[10]
  i2750.m_DescentLine = i2751[11]
  i2750.m_SuperscriptOffset = i2751[12]
  i2750.m_SuperscriptSize = i2751[13]
  i2750.m_SubscriptOffset = i2751[14]
  i2750.m_SubscriptSize = i2751[15]
  i2750.m_UnderlineOffset = i2751[16]
  i2750.m_UnderlineThickness = i2751[17]
  i2750.m_StrikethroughOffset = i2751[18]
  i2750.m_StrikethroughThickness = i2751[19]
  i2750.m_TabWidth = i2751[20]
  return i2750
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2753 = data
  i2752.useSafeMode = !!i2753[0]
  i2752.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2753[1], i2752.safeModeOptions)
  i2752.timeScale = i2753[2]
  i2752.unscaledTimeScale = i2753[3]
  i2752.useSmoothDeltaTime = !!i2753[4]
  i2752.maxSmoothUnscaledTime = i2753[5]
  i2752.rewindCallbackMode = i2753[6]
  i2752.showUnityEditorReport = !!i2753[7]
  i2752.logBehaviour = i2753[8]
  i2752.drawGizmos = !!i2753[9]
  i2752.defaultRecyclable = !!i2753[10]
  i2752.defaultAutoPlay = i2753[11]
  i2752.defaultUpdateType = i2753[12]
  i2752.defaultTimeScaleIndependent = !!i2753[13]
  i2752.defaultEaseType = i2753[14]
  i2752.defaultEaseOvershootOrAmplitude = i2753[15]
  i2752.defaultEasePeriod = i2753[16]
  i2752.defaultAutoKill = !!i2753[17]
  i2752.defaultLoopType = i2753[18]
  i2752.debugMode = !!i2753[19]
  i2752.debugStoreTargetId = !!i2753[20]
  i2752.showPreviewPanel = !!i2753[21]
  i2752.storeSettingsLocation = i2753[22]
  i2752.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2753[23], i2752.modules)
  i2752.createASMDEF = !!i2753[24]
  i2752.showPlayingTweens = !!i2753[25]
  i2752.showPausedTweens = !!i2753[26]
  return i2752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2755 = data
  i2754.logBehaviour = i2755[0]
  i2754.nestedTweenFailureBehaviour = i2755[1]
  return i2754
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2757 = data
  i2756.showPanel = !!i2757[0]
  i2756.audioEnabled = !!i2757[1]
  i2756.physicsEnabled = !!i2757[2]
  i2756.physics2DEnabled = !!i2757[3]
  i2756.spriteEnabled = !!i2757[4]
  i2756.uiEnabled = !!i2757[5]
  i2756.textMeshProEnabled = !!i2757[6]
  i2756.tk2DEnabled = !!i2757[7]
  i2756.deAudioEnabled = !!i2757[8]
  i2756.deUnityExtendedEnabled = !!i2757[9]
  i2756.epoOutlineEnabled = !!i2757[10]
  return i2756
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.TMP_Settings' )
  var i2759 = data
  i2758.assetVersion = i2759[0]
  i2758.m_TextWrappingMode = i2759[1]
  i2758.m_enableKerning = !!i2759[2]
  var i2761 = i2759[3]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.add(i2761[i + 0]);
  }
  i2758.m_ActiveFontFeatures = i2760
  i2758.m_enableExtraPadding = !!i2759[4]
  i2758.m_enableTintAllSprites = !!i2759[5]
  i2758.m_enableParseEscapeCharacters = !!i2759[6]
  i2758.m_EnableRaycastTarget = !!i2759[7]
  i2758.m_GetFontFeaturesAtRuntime = !!i2759[8]
  i2758.m_missingGlyphCharacter = i2759[9]
  i2758.m_ClearDynamicDataOnBuild = !!i2759[10]
  i2758.m_warningsDisabled = !!i2759[11]
  request.r(i2759[12], i2759[13], 0, i2758, 'm_defaultFontAsset')
  i2758.m_defaultFontAssetPath = i2759[14]
  i2758.m_defaultFontSize = i2759[15]
  i2758.m_defaultAutoSizeMinRatio = i2759[16]
  i2758.m_defaultAutoSizeMaxRatio = i2759[17]
  i2758.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2759[18], i2759[19] )
  i2758.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2759[20], i2759[21] )
  i2758.m_autoSizeTextContainer = !!i2759[22]
  i2758.m_IsTextObjectScaleStatic = !!i2759[23]
  var i2763 = i2759[24]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 1, i2762, '')
  }
  i2758.m_fallbackFontAssets = i2762
  i2758.m_matchMaterialPreset = !!i2759[25]
  i2758.m_HideSubTextObjects = !!i2759[26]
  request.r(i2759[27], i2759[28], 0, i2758, 'm_defaultSpriteAsset')
  i2758.m_defaultSpriteAssetPath = i2759[29]
  i2758.m_enableEmojiSupport = !!i2759[30]
  i2758.m_MissingCharacterSpriteUnicode = i2759[31]
  var i2765 = i2759[32]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 1, i2764, '')
  }
  i2758.m_EmojiFallbackTextAssets = i2764
  i2758.m_defaultColorGradientPresetsPath = i2759[33]
  request.r(i2759[34], i2759[35], 0, i2758, 'm_defaultStyleSheet')
  i2758.m_StyleSheetsResourcePath = i2759[36]
  request.r(i2759[37], i2759[38], 0, i2758, 'm_leadingCharacters')
  request.r(i2759[39], i2759[40], 0, i2758, 'm_followingCharacters')
  i2758.m_UseModernHangulLineBreakingRules = !!i2759[41]
  return i2758
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2769 = data
  request.r(i2769[0], i2769[1], 0, i2768, 'spriteSheet')
  var i2771 = i2769[2]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('TMPro.TMP_Sprite', i2771[i + 0]));
  }
  i2768.spriteInfoList = i2770
  var i2773 = i2769[3]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 1, i2772, '')
  }
  i2768.fallbackSpriteAssets = i2772
  var i2775 = i2769[4]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('TMPro.TMP_SpriteCharacter', i2775[i + 0]));
  }
  i2768.m_SpriteCharacterTable = i2774
  var i2777 = i2769[5]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('TMPro.TMP_SpriteGlyph', i2777[i + 0]));
  }
  i2768.m_GlyphTable = i2776
  i2768.m_Version = i2769[6]
  i2768.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2769[7], i2768.m_FaceInfo)
  request.r(i2769[8], i2769[9], 0, i2768, 'm_Material')
  return i2768
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2781 = data
  i2780.name = i2781[0]
  i2780.hashCode = i2781[1]
  i2780.unicode = i2781[2]
  i2780.pivot = new pc.Vec2( i2781[3], i2781[4] )
  request.r(i2781[5], i2781[6], 0, i2780, 'sprite')
  i2780.id = i2781[7]
  i2780.x = i2781[8]
  i2780.y = i2781[9]
  i2780.width = i2781[10]
  i2780.height = i2781[11]
  i2780.xOffset = i2781[12]
  i2780.yOffset = i2781[13]
  i2780.xAdvance = i2781[14]
  i2780.scale = i2781[15]
  return i2780
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2787 = data
  i2786.m_Name = i2787[0]
  i2786.m_ElementType = i2787[1]
  i2786.m_Unicode = i2787[2]
  i2786.m_GlyphIndex = i2787[3]
  i2786.m_Scale = i2787[4]
  return i2786
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'sprite')
  i2790.m_Index = i2791[2]
  i2790.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2791[3], i2790.m_Metrics)
  i2790.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2791[4], i2790.m_GlyphRect)
  i2790.m_Scale = i2791[5]
  i2790.m_AtlasIndex = i2791[6]
  i2790.m_ClassDefinitionType = i2791[7]
  return i2790
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2793 = data
  var i2795 = i2793[0]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('TMPro.TMP_Style', i2795[i + 0]));
  }
  i2792.m_StyleList = i2794
  return i2792
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_Style' )
  var i2799 = data
  i2798.m_Name = i2799[0]
  i2798.m_HashCode = i2799[1]
  i2798.m_OpeningDefinition = i2799[2]
  i2798.m_ClosingDefinition = i2799[3]
  i2798.m_OpeningTagArray = i2799[4]
  i2798.m_ClosingTagArray = i2799[5]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2801 = data
  var i2803 = i2801[0]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2803[i + 0]) );
  }
  i2800.files = i2802
  i2800.componentToPrefabIds = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2807 = data
  i2806.path = i2807[0]
  request.r(i2807[1], i2807[2], 0, i2806, 'unityObject')
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2809 = data
  var i2811 = i2809[0]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2811[i + 0]) );
  }
  i2808.scriptsExecutionOrder = i2810
  var i2813 = i2809[1]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2813[i + 0]) );
  }
  i2808.sortingLayers = i2812
  var i2815 = i2809[2]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2815[i + 0]) );
  }
  i2808.cullingLayers = i2814
  i2808.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2809[3], i2808.timeSettings)
  i2808.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2809[4], i2808.physicsSettings)
  i2808.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2809[5], i2808.physics2DSettings)
  i2808.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2809[6], i2808.qualitySettings)
  i2808.enableRealtimeShadows = !!i2809[7]
  i2808.enableAutoInstancing = !!i2809[8]
  i2808.enableStaticBatching = !!i2809[9]
  i2808.enableDynamicBatching = !!i2809[10]
  i2808.usePreservativeDynamicBatching = !!i2809[11]
  i2808.lightmapEncodingQuality = i2809[12]
  i2808.desiredColorSpace = i2809[13]
  var i2817 = i2809[14]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( i2817[i + 0] );
  }
  i2808.allTags = i2816
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2821 = data
  i2820.name = i2821[0]
  i2820.value = i2821[1]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2825 = data
  i2824.id = i2825[0]
  i2824.name = i2825[1]
  i2824.value = i2825[2]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2829 = data
  i2828.id = i2829[0]
  i2828.name = i2829[1]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2831 = data
  i2830.fixedDeltaTime = i2831[0]
  i2830.maximumDeltaTime = i2831[1]
  i2830.timeScale = i2831[2]
  i2830.maximumParticleTimestep = i2831[3]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2833 = data
  i2832.gravity = new pc.Vec3( i2833[0], i2833[1], i2833[2] )
  i2832.defaultSolverIterations = i2833[3]
  i2832.bounceThreshold = i2833[4]
  i2832.autoSyncTransforms = !!i2833[5]
  i2832.autoSimulation = !!i2833[6]
  var i2835 = i2833[7]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2835[i + 0]) );
  }
  i2832.collisionMatrix = i2834
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2839 = data
  i2838.enabled = !!i2839[0]
  i2838.layerId = i2839[1]
  i2838.otherLayerId = i2839[2]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'material')
  i2840.gravity = new pc.Vec2( i2841[2], i2841[3] )
  i2840.positionIterations = i2841[4]
  i2840.velocityIterations = i2841[5]
  i2840.velocityThreshold = i2841[6]
  i2840.maxLinearCorrection = i2841[7]
  i2840.maxAngularCorrection = i2841[8]
  i2840.maxTranslationSpeed = i2841[9]
  i2840.maxRotationSpeed = i2841[10]
  i2840.baumgarteScale = i2841[11]
  i2840.baumgarteTOIScale = i2841[12]
  i2840.timeToSleep = i2841[13]
  i2840.linearSleepTolerance = i2841[14]
  i2840.angularSleepTolerance = i2841[15]
  i2840.defaultContactOffset = i2841[16]
  i2840.autoSimulation = !!i2841[17]
  i2840.queriesHitTriggers = !!i2841[18]
  i2840.queriesStartInColliders = !!i2841[19]
  i2840.callbacksOnDisable = !!i2841[20]
  i2840.reuseCollisionCallbacks = !!i2841[21]
  i2840.autoSyncTransforms = !!i2841[22]
  var i2843 = i2841[23]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2843[i + 0]) );
  }
  i2840.collisionMatrix = i2842
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2847 = data
  i2846.enabled = !!i2847[0]
  i2846.layerId = i2847[1]
  i2846.otherLayerId = i2847[2]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2849 = data
  var i2851 = i2849[0]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2851[i + 0]) );
  }
  i2848.qualityLevels = i2850
  var i2853 = i2849[1]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( i2853[i + 0] );
  }
  i2848.names = i2852
  i2848.shadows = i2849[2]
  i2848.anisotropicFiltering = i2849[3]
  i2848.antiAliasing = i2849[4]
  i2848.lodBias = i2849[5]
  i2848.shadowCascades = i2849[6]
  i2848.shadowDistance = i2849[7]
  i2848.shadowmaskMode = i2849[8]
  i2848.shadowProjection = i2849[9]
  i2848.shadowResolution = i2849[10]
  i2848.softParticles = !!i2849[11]
  i2848.softVegetation = !!i2849[12]
  i2848.activeColorSpace = i2849[13]
  i2848.desiredColorSpace = i2849[14]
  i2848.masterTextureLimit = i2849[15]
  i2848.maxQueuedFrames = i2849[16]
  i2848.particleRaycastBudget = i2849[17]
  i2848.pixelLightCount = i2849[18]
  i2848.realtimeReflectionProbes = !!i2849[19]
  i2848.shadowCascade2Split = i2849[20]
  i2848.shadowCascade4Split = new pc.Vec3( i2849[21], i2849[22], i2849[23] )
  i2848.streamingMipmapsActive = !!i2849[24]
  i2848.vSyncCount = i2849[25]
  i2848.asyncUploadBufferSize = i2849[26]
  i2848.asyncUploadTimeSlice = i2849[27]
  i2848.billboardsFaceCameraPosition = !!i2849[28]
  i2848.shadowNearPlaneOffset = i2849[29]
  i2848.streamingMipmapsMemoryBudget = i2849[30]
  i2848.maximumLODLevel = i2849[31]
  i2848.streamingMipmapsAddAllCameras = !!i2849[32]
  i2848.streamingMipmapsMaxLevelReduction = i2849[33]
  i2848.streamingMipmapsRenderersPerFrame = i2849[34]
  i2848.resolutionScalingFixedDPIFactor = i2849[35]
  i2848.streamingMipmapsMaxFileIORequests = i2849[36]
  i2848.currentQualityLevel = i2849[37]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2857 = data
  i2856.name = i2857[0]
  var i2859 = i2857[1]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2859[i + 0]) );
  }
  i2856.tos = i2858
  var i2861 = i2857[2]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( i2861[i + 0] );
  }
  i2856.constant = i2860
  i2856.isValid = !!i2857[3]
  i2856.isHuman = !!i2857[4]
  i2856.hasRootMotion = !!i2857[5]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2865 = data
  i2864.hash = i2865[0]
  i2864.path = i2865[1]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2869 = data
  i2868.weight = i2869[0]
  i2868.vertices = i2869[1]
  i2868.normals = i2869[2]
  i2868.tangents = i2869[3]
  return i2868
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2870 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2871 = data
  i2870.m_GlyphIndex = i2871[0]
  i2870.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2871[1], i2870.m_GlyphValueRecord)
  return i2870
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2872 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2873 = data
  i2872.m_XCoordinate = i2873[0]
  i2872.m_YCoordinate = i2873[1]
  return i2872
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2874 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2875 = data
  i2874.m_XPositionAdjustment = i2875[0]
  i2874.m_YPositionAdjustment = i2875[1]
  return i2874
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2877 = data
  i2876.xPlacement = i2877[0]
  i2876.yPlacement = i2877[1]
  i2876.xAdvance = i2877[2]
  i2876.yAdvance = i2877[3]
  return i2876
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2879 = data
  i2878.m_XPlacement = i2879[0]
  i2878.m_YPlacement = i2879[1]
  i2878.m_XAdvance = i2879[2]
  i2878.m_YAdvance = i2879[3]
  return i2878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[49],"77":[53],"78":[42],"79":[42],"80":[42],"81":[42],"82":[42],"83":[42],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[53],"99":[7],"100":[101],"102":[101],"20":[19],"103":[19],"104":[25,19],"105":[7],"106":[25,19],"107":[19],"108":[19],"109":[7,19],"30":[19,25],"110":[111],"112":[111],"113":[111],"114":[19],"115":[19],"22":[20],"26":[25,19],"116":[19],"21":[20],"117":[19],"118":[19],"119":[19],"120":[19],"121":[19],"122":[19],"123":[19],"29":[19],"124":[19],"125":[25,19],"126":[19],"127":[19],"128":[19],"129":[19],"130":[25,19],"131":[19],"132":[16],"133":[16],"17":[16],"134":[16],"135":[53],"136":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.AnimatorOverrideController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.AudioClip","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","CharacterTrigger","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","Gift","UnityEngine.GameObject","GameController","SoundHint","JumpHint","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "10/14/2026 07:20:52";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SBFM_V06_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4700";

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

Deserializers.buildID = "c04b0c5f-8759-45df-a048-fa531aa49afc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

