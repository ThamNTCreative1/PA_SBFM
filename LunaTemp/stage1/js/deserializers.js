var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7968 = root || request.c( 'UnityEngine.JointSpring' )
  var i7969 = data
  i7968.spring = i7969[0]
  i7968.damper = i7969[1]
  i7968.targetPosition = i7969[2]
  return i7968
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7970 = root || request.c( 'UnityEngine.JointMotor' )
  var i7971 = data
  i7970.m_TargetVelocity = i7971[0]
  i7970.m_Force = i7971[1]
  i7970.m_FreeSpin = i7971[2]
  return i7970
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7972 = root || request.c( 'UnityEngine.JointLimits' )
  var i7973 = data
  i7972.m_Min = i7973[0]
  i7972.m_Max = i7973[1]
  i7972.m_Bounciness = i7973[2]
  i7972.m_BounceMinVelocity = i7973[3]
  i7972.m_ContactDistance = i7973[4]
  i7972.minBounce = i7973[5]
  i7972.maxBounce = i7973[6]
  return i7972
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7974 = root || request.c( 'UnityEngine.JointDrive' )
  var i7975 = data
  i7974.m_PositionSpring = i7975[0]
  i7974.m_PositionDamper = i7975[1]
  i7974.m_MaximumForce = i7975[2]
  i7974.m_UseAcceleration = i7975[3]
  return i7974
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7976 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7977 = data
  i7976.m_Spring = i7977[0]
  i7976.m_Damper = i7977[1]
  return i7976
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7978 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7979 = data
  i7978.m_Limit = i7979[0]
  i7978.m_Bounciness = i7979[1]
  i7978.m_ContactDistance = i7979[2]
  return i7978
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7980 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7981 = data
  i7980.m_ExtremumSlip = i7981[0]
  i7980.m_ExtremumValue = i7981[1]
  i7980.m_AsymptoteSlip = i7981[2]
  i7980.m_AsymptoteValue = i7981[3]
  i7980.m_Stiffness = i7981[4]
  return i7980
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7982 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7983 = data
  i7982.m_LowerAngle = i7983[0]
  i7982.m_UpperAngle = i7983[1]
  return i7982
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7984 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7985 = data
  i7984.m_MotorSpeed = i7985[0]
  i7984.m_MaximumMotorTorque = i7985[1]
  return i7984
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7986 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7987 = data
  i7986.m_DampingRatio = i7987[0]
  i7986.m_Frequency = i7987[1]
  i7986.m_Angle = i7987[2]
  return i7986
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7988 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7989 = data
  i7988.m_LowerTranslation = i7989[0]
  i7988.m_UpperTranslation = i7989[1]
  return i7988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7991 = data
  i7990.name = i7991[0]
  i7990.halfPrecision = !!i7991[1]
  i7990.useSimplification = !!i7991[2]
  i7990.useUInt32IndexFormat = !!i7991[3]
  i7990.vertexCount = i7991[4]
  i7990.aabb = i7991[5]
  var i7993 = i7991[6]
  var i7992 = []
  for(var i = 0; i < i7993.length; i += 1) {
    i7992.push( !!i7993[i + 0] );
  }
  i7990.streams = i7992
  i7990.vertices = i7991[7]
  var i7995 = i7991[8]
  var i7994 = []
  for(var i = 0; i < i7995.length; i += 1) {
    i7994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7995[i + 0]) );
  }
  i7990.subMeshes = i7994
  var i7997 = i7991[9]
  var i7996 = []
  for(var i = 0; i < i7997.length; i += 16) {
    i7996.push( new pc.Mat4().setData(i7997[i + 0], i7997[i + 1], i7997[i + 2], i7997[i + 3],  i7997[i + 4], i7997[i + 5], i7997[i + 6], i7997[i + 7],  i7997[i + 8], i7997[i + 9], i7997[i + 10], i7997[i + 11],  i7997[i + 12], i7997[i + 13], i7997[i + 14], i7997[i + 15]) );
  }
  i7990.bindposes = i7996
  var i7999 = i7991[10]
  var i7998 = []
  for(var i = 0; i < i7999.length; i += 1) {
    i7998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7999[i + 0]) );
  }
  i7990.blendShapes = i7998
  return i7990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8005 = data
  i8004.triangles = i8005[0]
  return i8004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8011 = data
  i8010.name = i8011[0]
  var i8013 = i8011[1]
  var i8012 = []
  for(var i = 0; i < i8013.length; i += 1) {
    i8012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8013[i + 0]) );
  }
  i8010.frames = i8012
  return i8010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8014 = root || new pc.UnityMaterial()
  var i8015 = data
  i8014.name = i8015[0]
  request.r(i8015[1], i8015[2], 0, i8014, 'shader')
  i8014.renderQueue = i8015[3]
  i8014.enableInstancing = !!i8015[4]
  var i8017 = i8015[5]
  var i8016 = []
  for(var i = 0; i < i8017.length; i += 1) {
    i8016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8017[i + 0]) );
  }
  i8014.floatParameters = i8016
  var i8019 = i8015[6]
  var i8018 = []
  for(var i = 0; i < i8019.length; i += 1) {
    i8018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8019[i + 0]) );
  }
  i8014.colorParameters = i8018
  var i8021 = i8015[7]
  var i8020 = []
  for(var i = 0; i < i8021.length; i += 1) {
    i8020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8021[i + 0]) );
  }
  i8014.vectorParameters = i8020
  var i8023 = i8015[8]
  var i8022 = []
  for(var i = 0; i < i8023.length; i += 1) {
    i8022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8023[i + 0]) );
  }
  i8014.textureParameters = i8022
  var i8025 = i8015[9]
  var i8024 = []
  for(var i = 0; i < i8025.length; i += 1) {
    i8024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8025[i + 0]) );
  }
  i8014.materialFlags = i8024
  return i8014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8029 = data
  i8028.name = i8029[0]
  i8028.value = i8029[1]
  return i8028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8033 = data
  i8032.name = i8033[0]
  i8032.value = new pc.Color(i8033[1], i8033[2], i8033[3], i8033[4])
  return i8032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8037 = data
  i8036.name = i8037[0]
  i8036.value = new pc.Vec4( i8037[1], i8037[2], i8037[3], i8037[4] )
  return i8036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8041 = data
  i8040.name = i8041[0]
  request.r(i8041[1], i8041[2], 0, i8040, 'value')
  return i8040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8045 = data
  i8044.name = i8045[0]
  i8044.enabled = !!i8045[1]
  return i8044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8047 = data
  i8046.name = i8047[0]
  i8046.width = i8047[1]
  i8046.height = i8047[2]
  i8046.mipmapCount = i8047[3]
  i8046.anisoLevel = i8047[4]
  i8046.filterMode = i8047[5]
  i8046.hdr = !!i8047[6]
  i8046.format = i8047[7]
  i8046.wrapMode = i8047[8]
  i8046.alphaIsTransparency = !!i8047[9]
  i8046.alphaSource = i8047[10]
  i8046.graphicsFormat = i8047[11]
  i8046.sRGBTexture = !!i8047[12]
  i8046.desiredColorSpace = i8047[13]
  i8046.wrapU = i8047[14]
  i8046.wrapV = i8047[15]
  return i8046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8049 = data
  i8048.position = new pc.Vec3( i8049[0], i8049[1], i8049[2] )
  i8048.scale = new pc.Vec3( i8049[3], i8049[4], i8049[5] )
  i8048.rotation = new pc.Quat(i8049[6], i8049[7], i8049[8], i8049[9])
  return i8048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i8050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i8051 = data
  i8050.center = new pc.Vec3( i8051[0], i8051[1], i8051[2] )
  i8050.size = new pc.Vec3( i8051[3], i8051[4], i8051[5] )
  i8050.enabled = !!i8051[6]
  i8050.isTrigger = !!i8051[7]
  request.r(i8051[8], i8051[9], 0, i8050, 'material')
  return i8050
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i8052 = root || request.c( 'HiddenMonster' )
  var i8053 = data
  request.r(i8053[0], i8053[1], 0, i8052, 'checkMark')
  request.r(i8053[2], i8053[3], 0, i8052, 'claimFx')
  return i8052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8055 = data
  request.r(i8055[0], i8055[1], 0, i8054, 'sharedMesh')
  return i8054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8057 = data
  request.r(i8057[0], i8057[1], 0, i8056, 'additionalVertexStreams')
  i8056.enabled = !!i8057[2]
  request.r(i8057[3], i8057[4], 0, i8056, 'sharedMaterial')
  var i8059 = i8057[5]
  var i8058 = []
  for(var i = 0; i < i8059.length; i += 2) {
  request.r(i8059[i + 0], i8059[i + 1], 2, i8058, '')
  }
  i8056.sharedMaterials = i8058
  i8056.receiveShadows = !!i8057[6]
  i8056.shadowCastingMode = i8057[7]
  i8056.sortingLayerID = i8057[8]
  i8056.sortingOrder = i8057[9]
  i8056.lightmapIndex = i8057[10]
  i8056.lightmapSceneIndex = i8057[11]
  i8056.lightmapScaleOffset = new pc.Vec4( i8057[12], i8057[13], i8057[14], i8057[15] )
  i8056.lightProbeUsage = i8057[16]
  i8056.reflectionProbeUsage = i8057[17]
  return i8056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8063 = data
  i8062.name = i8063[0]
  i8062.tagId = i8063[1]
  i8062.enabled = !!i8063[2]
  i8062.isStatic = !!i8063[3]
  i8062.layer = i8063[4]
  return i8062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8065 = data
  request.r(i8065[0], i8065[1], 0, i8064, 'mesh')
  i8064.meshCount = i8065[2]
  i8064.activeVertexStreamsCount = i8065[3]
  i8064.alignment = i8065[4]
  i8064.renderMode = i8065[5]
  i8064.sortMode = i8065[6]
  i8064.lengthScale = i8065[7]
  i8064.velocityScale = i8065[8]
  i8064.cameraVelocityScale = i8065[9]
  i8064.normalDirection = i8065[10]
  i8064.sortingFudge = i8065[11]
  i8064.minParticleSize = i8065[12]
  i8064.maxParticleSize = i8065[13]
  i8064.pivot = new pc.Vec3( i8065[14], i8065[15], i8065[16] )
  request.r(i8065[17], i8065[18], 0, i8064, 'trailMaterial')
  i8064.applyActiveColorSpace = !!i8065[19]
  i8064.enabled = !!i8065[20]
  request.r(i8065[21], i8065[22], 0, i8064, 'sharedMaterial')
  var i8067 = i8065[23]
  var i8066 = []
  for(var i = 0; i < i8067.length; i += 2) {
  request.r(i8067[i + 0], i8067[i + 1], 2, i8066, '')
  }
  i8064.sharedMaterials = i8066
  i8064.receiveShadows = !!i8065[24]
  i8064.shadowCastingMode = i8065[25]
  i8064.sortingLayerID = i8065[26]
  i8064.sortingOrder = i8065[27]
  i8064.lightmapIndex = i8065[28]
  i8064.lightmapSceneIndex = i8065[29]
  i8064.lightmapScaleOffset = new pc.Vec4( i8065[30], i8065[31], i8065[32], i8065[33] )
  i8064.lightProbeUsage = i8065[34]
  i8064.reflectionProbeUsage = i8065[35]
  return i8064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8069 = data
  i8068.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8069[0], i8068.main)
  i8068.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8069[1], i8068.colorBySpeed)
  i8068.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8069[2], i8068.colorOverLifetime)
  i8068.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8069[3], i8068.emission)
  i8068.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8069[4], i8068.rotationBySpeed)
  i8068.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8069[5], i8068.rotationOverLifetime)
  i8068.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8069[6], i8068.shape)
  i8068.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8069[7], i8068.sizeBySpeed)
  i8068.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8069[8], i8068.sizeOverLifetime)
  i8068.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8069[9], i8068.textureSheetAnimation)
  i8068.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8069[10], i8068.velocityOverLifetime)
  i8068.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8069[11], i8068.noise)
  i8068.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8069[12], i8068.inheritVelocity)
  i8068.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8069[13], i8068.forceOverLifetime)
  i8068.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8069[14], i8068.limitVelocityOverLifetime)
  i8068.useAutoRandomSeed = !!i8069[15]
  i8068.randomSeed = i8069[16]
  return i8068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8070 = root || new pc.ParticleSystemMain()
  var i8071 = data
  i8070.duration = i8071[0]
  i8070.loop = !!i8071[1]
  i8070.prewarm = !!i8071[2]
  i8070.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[3], i8070.startDelay)
  i8070.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[4], i8070.startLifetime)
  i8070.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[5], i8070.startSpeed)
  i8070.startSize3D = !!i8071[6]
  i8070.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[7], i8070.startSizeX)
  i8070.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[8], i8070.startSizeY)
  i8070.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[9], i8070.startSizeZ)
  i8070.startRotation3D = !!i8071[10]
  i8070.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[11], i8070.startRotationX)
  i8070.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[12], i8070.startRotationY)
  i8070.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[13], i8070.startRotationZ)
  i8070.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8071[14], i8070.startColor)
  i8070.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8071[15], i8070.gravityModifier)
  i8070.simulationSpace = i8071[16]
  request.r(i8071[17], i8071[18], 0, i8070, 'customSimulationSpace')
  i8070.simulationSpeed = i8071[19]
  i8070.useUnscaledTime = !!i8071[20]
  i8070.scalingMode = i8071[21]
  i8070.playOnAwake = !!i8071[22]
  i8070.maxParticles = i8071[23]
  i8070.emitterVelocityMode = i8071[24]
  i8070.stopAction = i8071[25]
  return i8070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8072 = root || new pc.MinMaxCurve()
  var i8073 = data
  i8072.mode = i8073[0]
  i8072.curveMin = new pc.AnimationCurve( { keys_flow: i8073[1] } )
  i8072.curveMax = new pc.AnimationCurve( { keys_flow: i8073[2] } )
  i8072.curveMultiplier = i8073[3]
  i8072.constantMin = i8073[4]
  i8072.constantMax = i8073[5]
  return i8072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8074 = root || new pc.MinMaxGradient()
  var i8075 = data
  i8074.mode = i8075[0]
  i8074.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8075[1], i8074.gradientMin)
  i8074.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8075[2], i8074.gradientMax)
  i8074.colorMin = new pc.Color(i8075[3], i8075[4], i8075[5], i8075[6])
  i8074.colorMax = new pc.Color(i8075[7], i8075[8], i8075[9], i8075[10])
  return i8074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8077 = data
  i8076.mode = i8077[0]
  var i8079 = i8077[1]
  var i8078 = []
  for(var i = 0; i < i8079.length; i += 1) {
    i8078.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8079[i + 0]) );
  }
  i8076.colorKeys = i8078
  var i8081 = i8077[2]
  var i8080 = []
  for(var i = 0; i < i8081.length; i += 1) {
    i8080.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8081[i + 0]) );
  }
  i8076.alphaKeys = i8080
  return i8076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8082 = root || new pc.ParticleSystemColorBySpeed()
  var i8083 = data
  i8082.enabled = !!i8083[0]
  i8082.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8083[1], i8082.color)
  i8082.range = new pc.Vec2( i8083[2], i8083[3] )
  return i8082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8087 = data
  i8086.color = new pc.Color(i8087[0], i8087[1], i8087[2], i8087[3])
  i8086.time = i8087[4]
  return i8086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8091 = data
  i8090.alpha = i8091[0]
  i8090.time = i8091[1]
  return i8090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8092 = root || new pc.ParticleSystemColorOverLifetime()
  var i8093 = data
  i8092.enabled = !!i8093[0]
  i8092.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8093[1], i8092.color)
  return i8092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8094 = root || new pc.ParticleSystemEmitter()
  var i8095 = data
  i8094.enabled = !!i8095[0]
  i8094.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8095[1], i8094.rateOverTime)
  i8094.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8095[2], i8094.rateOverDistance)
  var i8097 = i8095[3]
  var i8096 = []
  for(var i = 0; i < i8097.length; i += 1) {
    i8096.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8097[i + 0]) );
  }
  i8094.bursts = i8096
  return i8094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8100 = root || new pc.ParticleSystemBurst()
  var i8101 = data
  i8100.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8101[0], i8100.count)
  i8100.cycleCount = i8101[1]
  i8100.minCount = i8101[2]
  i8100.maxCount = i8101[3]
  i8100.repeatInterval = i8101[4]
  i8100.time = i8101[5]
  return i8100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8102 = root || new pc.ParticleSystemRotationBySpeed()
  var i8103 = data
  i8102.enabled = !!i8103[0]
  i8102.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[1], i8102.x)
  i8102.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[2], i8102.y)
  i8102.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[3], i8102.z)
  i8102.separateAxes = !!i8103[4]
  i8102.range = new pc.Vec2( i8103[5], i8103[6] )
  return i8102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8104 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8105 = data
  i8104.enabled = !!i8105[0]
  i8104.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[1], i8104.x)
  i8104.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[2], i8104.y)
  i8104.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[3], i8104.z)
  i8104.separateAxes = !!i8105[4]
  return i8104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8106 = root || new pc.ParticleSystemShape()
  var i8107 = data
  i8106.enabled = !!i8107[0]
  i8106.shapeType = i8107[1]
  i8106.randomDirectionAmount = i8107[2]
  i8106.sphericalDirectionAmount = i8107[3]
  i8106.randomPositionAmount = i8107[4]
  i8106.alignToDirection = !!i8107[5]
  i8106.radius = i8107[6]
  i8106.radiusMode = i8107[7]
  i8106.radiusSpread = i8107[8]
  i8106.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8107[9], i8106.radiusSpeed)
  i8106.radiusThickness = i8107[10]
  i8106.angle = i8107[11]
  i8106.length = i8107[12]
  i8106.boxThickness = new pc.Vec3( i8107[13], i8107[14], i8107[15] )
  i8106.meshShapeType = i8107[16]
  request.r(i8107[17], i8107[18], 0, i8106, 'mesh')
  request.r(i8107[19], i8107[20], 0, i8106, 'meshRenderer')
  request.r(i8107[21], i8107[22], 0, i8106, 'skinnedMeshRenderer')
  i8106.useMeshMaterialIndex = !!i8107[23]
  i8106.meshMaterialIndex = i8107[24]
  i8106.useMeshColors = !!i8107[25]
  i8106.normalOffset = i8107[26]
  i8106.arc = i8107[27]
  i8106.arcMode = i8107[28]
  i8106.arcSpread = i8107[29]
  i8106.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8107[30], i8106.arcSpeed)
  i8106.donutRadius = i8107[31]
  i8106.position = new pc.Vec3( i8107[32], i8107[33], i8107[34] )
  i8106.rotation = new pc.Vec3( i8107[35], i8107[36], i8107[37] )
  i8106.scale = new pc.Vec3( i8107[38], i8107[39], i8107[40] )
  return i8106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8108 = root || new pc.ParticleSystemSizeBySpeed()
  var i8109 = data
  i8108.enabled = !!i8109[0]
  i8108.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8109[1], i8108.x)
  i8108.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8109[2], i8108.y)
  i8108.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8109[3], i8108.z)
  i8108.separateAxes = !!i8109[4]
  i8108.range = new pc.Vec2( i8109[5], i8109[6] )
  return i8108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8110 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8111 = data
  i8110.enabled = !!i8111[0]
  i8110.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8111[1], i8110.x)
  i8110.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8111[2], i8110.y)
  i8110.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8111[3], i8110.z)
  i8110.separateAxes = !!i8111[4]
  return i8110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8112 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8113 = data
  i8112.enabled = !!i8113[0]
  i8112.mode = i8113[1]
  i8112.animation = i8113[2]
  i8112.numTilesX = i8113[3]
  i8112.numTilesY = i8113[4]
  i8112.useRandomRow = !!i8113[5]
  i8112.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8113[6], i8112.frameOverTime)
  i8112.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8113[7], i8112.startFrame)
  i8112.cycleCount = i8113[8]
  i8112.rowIndex = i8113[9]
  i8112.flipU = i8113[10]
  i8112.flipV = i8113[11]
  i8112.spriteCount = i8113[12]
  var i8115 = i8113[13]
  var i8114 = []
  for(var i = 0; i < i8115.length; i += 2) {
  request.r(i8115[i + 0], i8115[i + 1], 2, i8114, '')
  }
  i8112.sprites = i8114
  return i8112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8118 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8119 = data
  i8118.enabled = !!i8119[0]
  i8118.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[1], i8118.x)
  i8118.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[2], i8118.y)
  i8118.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[3], i8118.z)
  i8118.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[4], i8118.radial)
  i8118.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[5], i8118.speedModifier)
  i8118.space = i8119[6]
  i8118.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[7], i8118.orbitalX)
  i8118.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[8], i8118.orbitalY)
  i8118.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[9], i8118.orbitalZ)
  i8118.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[10], i8118.orbitalOffsetX)
  i8118.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[11], i8118.orbitalOffsetY)
  i8118.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8119[12], i8118.orbitalOffsetZ)
  return i8118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8120 = root || new pc.ParticleSystemNoise()
  var i8121 = data
  i8120.enabled = !!i8121[0]
  i8120.separateAxes = !!i8121[1]
  i8120.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[2], i8120.strengthX)
  i8120.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[3], i8120.strengthY)
  i8120.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[4], i8120.strengthZ)
  i8120.frequency = i8121[5]
  i8120.damping = !!i8121[6]
  i8120.octaveCount = i8121[7]
  i8120.octaveMultiplier = i8121[8]
  i8120.octaveScale = i8121[9]
  i8120.quality = i8121[10]
  i8120.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[11], i8120.scrollSpeed)
  i8120.scrollSpeedMultiplier = i8121[12]
  i8120.remapEnabled = !!i8121[13]
  i8120.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[14], i8120.remapX)
  i8120.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[15], i8120.remapY)
  i8120.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[16], i8120.remapZ)
  i8120.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[17], i8120.positionAmount)
  i8120.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[18], i8120.rotationAmount)
  i8120.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8121[19], i8120.sizeAmount)
  return i8120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8122 = root || new pc.ParticleSystemInheritVelocity()
  var i8123 = data
  i8122.enabled = !!i8123[0]
  i8122.mode = i8123[1]
  i8122.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8123[2], i8122.curve)
  return i8122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8124 = root || new pc.ParticleSystemForceOverLifetime()
  var i8125 = data
  i8124.enabled = !!i8125[0]
  i8124.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8125[1], i8124.x)
  i8124.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8125[2], i8124.y)
  i8124.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8125[3], i8124.z)
  i8124.space = i8125[4]
  i8124.randomized = !!i8125[5]
  return i8124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8126 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8127 = data
  i8126.enabled = !!i8127[0]
  i8126.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8127[1], i8126.limit)
  i8126.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8127[2], i8126.limitX)
  i8126.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8127[3], i8126.limitY)
  i8126.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8127[4], i8126.limitZ)
  i8126.dampen = i8127[5]
  i8126.separateAxes = !!i8127[6]
  i8126.space = i8127[7]
  i8126.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8127[8], i8126.drag)
  i8126.multiplyDragByParticleSize = !!i8127[9]
  i8126.multiplyDragByParticleVelocity = !!i8127[10]
  return i8126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8129 = data
  i8128.name = i8129[0]
  i8128.atlasId = i8129[1]
  i8128.mipmapCount = i8129[2]
  i8128.hdr = !!i8129[3]
  i8128.size = i8129[4]
  i8128.anisoLevel = i8129[5]
  i8128.filterMode = i8129[6]
  var i8131 = i8129[7]
  var i8130 = []
  for(var i = 0; i < i8131.length; i += 4) {
    i8130.push( UnityEngine.Rect.MinMaxRect(i8131[i + 0], i8131[i + 1], i8131[i + 2], i8131[i + 3]) );
  }
  i8128.rects = i8130
  i8128.wrapU = i8129[8]
  i8128.wrapV = i8129[9]
  return i8128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8135 = data
  i8134.name = i8135[0]
  i8134.index = i8135[1]
  i8134.startup = !!i8135[2]
  return i8134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8137 = data
  i8136.type = i8137[0]
  i8136.color = new pc.Color(i8137[1], i8137[2], i8137[3], i8137[4])
  i8136.cullingMask = i8137[5]
  i8136.intensity = i8137[6]
  i8136.range = i8137[7]
  i8136.spotAngle = i8137[8]
  i8136.shadows = i8137[9]
  i8136.shadowNormalBias = i8137[10]
  i8136.shadowBias = i8137[11]
  i8136.shadowStrength = i8137[12]
  i8136.shadowResolution = i8137[13]
  i8136.lightmapBakeType = i8137[14]
  i8136.renderMode = i8137[15]
  request.r(i8137[16], i8137[17], 0, i8136, 'cookie')
  i8136.cookieSize = i8137[18]
  i8136.shadowNearPlane = i8137[19]
  i8136.occlusionMaskChannel = i8137[20]
  i8136.isBaked = !!i8137[21]
  i8136.mixedLightingMode = i8137[22]
  i8136.enabled = !!i8137[23]
  return i8136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i8138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i8139 = data
  request.r(i8139[0], i8139[1], 0, i8138, 'sharedMesh')
  i8138.convex = !!i8139[2]
  i8138.enabled = !!i8139[3]
  i8138.isTrigger = !!i8139[4]
  request.r(i8139[5], i8139[6], 0, i8138, 'material')
  return i8138
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i8140 = root || request.c( 'ScaleYoyo' )
  var i8141 = data
  i8140.delay = i8141[0]
  i8140.duration = i8141[1]
  i8140.easeType = i8141[2]
  i8140.loops = i8141[3]
  i8140.loopType = i8141[4]
  i8140.animationType = i8141[5]
  i8140.endValueV3 = new pc.Vec3( i8141[6], i8141[7], i8141[8] )
  i8140.isRelative = !!i8141[9]
  i8140.autoPlay = !!i8141[10]
  return i8140
}

Deserializers["FerrisCabin"] = function (request, data, root) {
  var i8142 = root || request.c( 'FerrisCabin' )
  var i8143 = data
  return i8142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8145 = data
  request.r(i8145[0], i8145[1], 0, i8144, 'animatorController')
  request.r(i8145[2], i8145[3], 0, i8144, 'avatar')
  i8144.updateMode = i8145[4]
  i8144.hasTransformHierarchy = !!i8145[5]
  i8144.applyRootMotion = !!i8145[6]
  var i8147 = i8145[7]
  var i8146 = []
  for(var i = 0; i < i8147.length; i += 2) {
  request.r(i8147[i + 0], i8147[i + 1], 2, i8146, '')
  }
  i8144.humanBones = i8146
  i8144.enabled = !!i8145[8]
  return i8144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i8150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i8151 = data
  i8150.mass = i8151[0]
  i8150.drag = i8151[1]
  i8150.angularDrag = i8151[2]
  i8150.useGravity = !!i8151[3]
  i8150.isKinematic = !!i8151[4]
  i8150.constraints = i8151[5]
  i8150.maxAngularVelocity = i8151[6]
  i8150.collisionDetectionMode = i8151[7]
  i8150.interpolation = i8151[8]
  return i8150
}

Deserializers["WaterRide"] = function (request, data, root) {
  var i8152 = root || request.c( 'WaterRide' )
  var i8153 = data
  var i8155 = i8153[0]
  var i8154 = []
  for(var i = 0; i < i8155.length; i += 2) {
  request.r(i8155[i + 0], i8155[i + 1], 2, i8154, '')
  }
  i8152.waypoints = i8154
  i8152.speed = i8153[1]
  i8152.arrivalDistance = i8153[2]
  return i8152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i8156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i8157 = data
  i8156.center = new pc.Vec3( i8157[0], i8157[1], i8157[2] )
  i8156.radius = i8157[3]
  i8156.height = i8157[4]
  i8156.direction = i8157[5]
  i8156.enabled = !!i8157[6]
  i8156.isTrigger = !!i8157[7]
  request.r(i8157[8], i8157[9], 0, i8156, 'material')
  return i8156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8159 = data
  i8158.aspect = i8159[0]
  i8158.orthographic = !!i8159[1]
  i8158.orthographicSize = i8159[2]
  i8158.backgroundColor = new pc.Color(i8159[3], i8159[4], i8159[5], i8159[6])
  i8158.nearClipPlane = i8159[7]
  i8158.farClipPlane = i8159[8]
  i8158.fieldOfView = i8159[9]
  i8158.depth = i8159[10]
  i8158.clearFlags = i8159[11]
  i8158.cullingMask = i8159[12]
  i8158.rect = i8159[13]
  request.r(i8159[14], i8159[15], 0, i8158, 'targetTexture')
  i8158.usePhysicalProperties = !!i8159[16]
  i8158.focalLength = i8159[17]
  i8158.sensorSize = new pc.Vec2( i8159[18], i8159[19] )
  i8158.lensShift = new pc.Vec2( i8159[20], i8159[21] )
  i8158.gateFit = i8159[22]
  i8158.commandBufferCount = i8159[23]
  i8158.cameraType = i8159[24]
  i8158.enabled = !!i8159[25]
  return i8158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i8160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i8161 = data
  i8160.enabled = !!i8161[0]
  i8160.center = new pc.Vec3( i8161[1], i8161[2], i8161[3] )
  i8160.radius = i8161[4]
  i8160.height = i8161[5]
  i8160.minMoveDistance = i8161[6]
  i8160.skinWidth = i8161[7]
  i8160.enableOverlapRecovery = !!i8161[8]
  return i8160
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i8162 = root || request.c( 'FMCharacter' )
  var i8163 = data
  request.r(i8163[0], i8163[1], 0, i8162, 'planetTransform')
  request.r(i8163[2], i8163[3], 0, i8162, 'animator')
  request.r(i8163[4], i8163[5], 0, i8162, 'joystick')
  i8162._rotationRate = i8163[6]
  i8162._maxWalkSpeed = i8163[7]
  i8162._maxAcceleration = i8163[8]
  i8162._brakingDecelerationWalking = i8163[9]
  i8162._airControl = i8163[10]
  i8162._jumpImpulse = i8163[11]
  i8162._gravity = new pc.Vec3( i8163[12], i8163[13], i8163[14] )
  i8162._gravityScale = i8163[15]
  request.r(i8163[16], i8163[17], 0, i8162, '_camera')
  i8162.jumpSound = request.d('FMAudio', i8163[18], i8162.jumpSound)
  i8162.stepHeight = i8163[19]
  return i8162
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i8164 = root || request.c( 'FMAudio' )
  var i8165 = data
  request.r(i8165[0], i8165[1], 0, i8164, 'clip')
  i8164.channel = i8165[2]
  i8164.volume = i8165[3]
  return i8164
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i8166 = root || request.c( 'FM3rdInput' )
  var i8167 = data
  request.r(i8167[0], i8167[1], 0, i8166, 'followTarget')
  i8166.followDistance = i8167[2]
  i8166.followMinDistance = i8167[3]
  i8166.followMaxDistance = i8167[4]
  i8166.maxPitch = i8167[5]
  i8166.minPitch = i8167[6]
  i8166.invertLook = !!i8167[7]
  i8166.lookSensitivity = new pc.Vec2( i8167[8], i8167[9] )
  request.r(i8167[10], i8167[11], 0, i8166, 'planetTransform')
  i8166.cameraDistance = i8167[12]
  i8166.cameraRadius = i8167[13]
  i8166.minCameraDistance = i8167[14]
  i8166.cameraReturnSpeed = i8167[15]
  request.r(i8167[16], i8167[17], 0, i8166, 'cam')
  request.r(i8167[18], i8167[19], 0, i8166, 'lookArea')
  i8166.extraRoll = i8167[20]
  i8166.autoReturnDelay = i8167[21]
  i8166.autoReturnSpeed = i8167[22]
  i8166.defaultPitch = i8167[23]
  i8166.enableAutoReturn = !!i8167[24]
  i8166.forwardSpeedMultiplier = i8167[25]
  i8166.backwardSpeedMultiplier = i8167[26]
  return i8166
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i8168 = root || request.c( 'FindMonsterPlayerControl' )
  var i8169 = data
  request.r(i8169[0], i8169[1], 0, i8168, 'playerSO')
  request.r(i8169[2], i8169[3], 0, i8168, 'playerBase')
  request.r(i8169[4], i8169[5], 0, i8168, 'morphRoot')
  request.r(i8169[6], i8169[7], 0, i8168, 'poopFx')
  request.r(i8169[8], i8169[9], 0, i8168, 'poopRoot')
  request.r(i8169[10], i8169[11], 0, i8168, 'trailSpeed')
  i8168.popSound = request.d('FMAudio', i8169[12], i8168.popSound)
  return i8168
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i8170 = root || request.c( 'CharacterFootstep' )
  var i8171 = data
  request.r(i8171[0], i8171[1], 0, i8170, 'ecmCharacter')
  i8170.audioSource = request.d('FMAudio', i8171[2], i8170.audioSource)
  i8170.speed = i8171[3]
  request.r(i8171[4], i8171[5], 0, i8170, 'loopSource')
  i8170.loopVolume = i8171[6]
  i8170.maxPitch = i8171[7]
  i8170.minPitch = i8171[8]
  return i8170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8173 = data
  request.r(i8173[0], i8173[1], 0, i8172, 'clip')
  request.r(i8173[2], i8173[3], 0, i8172, 'outputAudioMixerGroup')
  i8172.playOnAwake = !!i8173[4]
  i8172.loop = !!i8173[5]
  i8172.time = i8173[6]
  i8172.volume = i8173[7]
  i8172.pitch = i8173[8]
  i8172.enabled = !!i8173[9]
  return i8172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8175 = data
  i8174.pivot = new pc.Vec2( i8175[0], i8175[1] )
  i8174.anchorMin = new pc.Vec2( i8175[2], i8175[3] )
  i8174.anchorMax = new pc.Vec2( i8175[4], i8175[5] )
  i8174.sizeDelta = new pc.Vec2( i8175[6], i8175[7] )
  i8174.anchoredPosition3D = new pc.Vec3( i8175[8], i8175[9], i8175[10] )
  i8174.rotation = new pc.Quat(i8175[11], i8175[12], i8175[13], i8175[14])
  i8174.scale = new pc.Vec3( i8175[15], i8175[16], i8175[17] )
  return i8174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8177 = data
  i8176.planeDistance = i8177[0]
  i8176.referencePixelsPerUnit = i8177[1]
  i8176.isFallbackOverlay = !!i8177[2]
  i8176.renderMode = i8177[3]
  i8176.renderOrder = i8177[4]
  i8176.sortingLayerName = i8177[5]
  i8176.sortingOrder = i8177[6]
  i8176.scaleFactor = i8177[7]
  request.r(i8177[8], i8177[9], 0, i8176, 'worldCamera')
  i8176.overrideSorting = !!i8177[10]
  i8176.pixelPerfect = !!i8177[11]
  i8176.targetDisplay = i8177[12]
  i8176.overridePixelPerfect = !!i8177[13]
  i8176.enabled = !!i8177[14]
  return i8176
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8178 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8179 = data
  i8178.m_UiScaleMode = i8179[0]
  i8178.m_ReferencePixelsPerUnit = i8179[1]
  i8178.m_ScaleFactor = i8179[2]
  i8178.m_ReferenceResolution = new pc.Vec2( i8179[3], i8179[4] )
  i8178.m_ScreenMatchMode = i8179[5]
  i8178.m_MatchWidthOrHeight = i8179[6]
  i8178.m_PhysicalUnit = i8179[7]
  i8178.m_FallbackScreenDPI = i8179[8]
  i8178.m_DefaultSpriteDPI = i8179[9]
  i8178.m_DynamicPixelsPerUnit = i8179[10]
  i8178.m_PresetInfoIsWorld = !!i8179[11]
  return i8178
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8180 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8181 = data
  i8180.m_IgnoreReversedGraphics = !!i8181[0]
  i8180.m_BlockingObjects = i8181[1]
  i8180.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8181[2] )
  return i8180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8183 = data
  i8182.cullTransparentMesh = !!i8183[0]
  return i8182
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8184 = root || request.c( 'UnityEngine.UI.Image' )
  var i8185 = data
  request.r(i8185[0], i8185[1], 0, i8184, 'm_Sprite')
  i8184.m_Type = i8185[2]
  i8184.m_PreserveAspect = !!i8185[3]
  i8184.m_FillCenter = !!i8185[4]
  i8184.m_FillMethod = i8185[5]
  i8184.m_FillAmount = i8185[6]
  i8184.m_FillClockwise = !!i8185[7]
  i8184.m_FillOrigin = i8185[8]
  i8184.m_UseSpriteMesh = !!i8185[9]
  i8184.m_PixelsPerUnitMultiplier = i8185[10]
  request.r(i8185[11], i8185[12], 0, i8184, 'm_Material')
  i8184.m_Maskable = !!i8185[13]
  i8184.m_Color = new pc.Color(i8185[14], i8185[15], i8185[16], i8185[17])
  i8184.m_RaycastTarget = !!i8185[18]
  i8184.m_RaycastPadding = new pc.Vec4( i8185[19], i8185[20], i8185[21], i8185[22] )
  return i8184
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i8186 = root || request.c( 'ScreenDeltaInputSystem' )
  var i8187 = data
  return i8186
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i8188 = root || request.c( 'MonsterProgressBar' )
  var i8189 = data
  i8188.countSceneMonsters = !!i8189[0]
  i8188.startFound = i8189[1]
  i8188.total = i8189[2]
  request.r(i8189[3], i8189[4], 0, i8188, 'fill')
  request.r(i8189[5], i8189[6], 0, i8188, 'countText')
  request.r(i8189[7], i8189[8], 0, i8188, 'icon')
  i8188.fillSpeed = i8189[9]
  return i8188
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8190 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8191 = data
  i8190.m_ShowMaskGraphic = !!i8191[0]
  return i8190
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8192 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8193 = data
  i8192.m_hasFontAssetChanged = !!i8193[0]
  request.r(i8193[1], i8193[2], 0, i8192, 'm_baseMaterial')
  i8192.m_maskOffset = new pc.Vec4( i8193[3], i8193[4], i8193[5], i8193[6] )
  i8192.m_text = i8193[7]
  i8192.m_isRightToLeft = !!i8193[8]
  request.r(i8193[9], i8193[10], 0, i8192, 'm_fontAsset')
  request.r(i8193[11], i8193[12], 0, i8192, 'm_sharedMaterial')
  var i8195 = i8193[13]
  var i8194 = []
  for(var i = 0; i < i8195.length; i += 2) {
  request.r(i8195[i + 0], i8195[i + 1], 2, i8194, '')
  }
  i8192.m_fontSharedMaterials = i8194
  request.r(i8193[14], i8193[15], 0, i8192, 'm_fontMaterial')
  var i8197 = i8193[16]
  var i8196 = []
  for(var i = 0; i < i8197.length; i += 2) {
  request.r(i8197[i + 0], i8197[i + 1], 2, i8196, '')
  }
  i8192.m_fontMaterials = i8196
  i8192.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8193[17], i8193[18], i8193[19], i8193[20])
  i8192.m_fontColor = new pc.Color(i8193[21], i8193[22], i8193[23], i8193[24])
  i8192.m_enableVertexGradient = !!i8193[25]
  i8192.m_colorMode = i8193[26]
  i8192.m_fontColorGradient = request.d('TMPro.VertexGradient', i8193[27], i8192.m_fontColorGradient)
  request.r(i8193[28], i8193[29], 0, i8192, 'm_fontColorGradientPreset')
  request.r(i8193[30], i8193[31], 0, i8192, 'm_spriteAsset')
  i8192.m_tintAllSprites = !!i8193[32]
  request.r(i8193[33], i8193[34], 0, i8192, 'm_StyleSheet')
  i8192.m_TextStyleHashCode = i8193[35]
  i8192.m_overrideHtmlColors = !!i8193[36]
  i8192.m_faceColor = UnityEngine.Color32.ConstructColor(i8193[37], i8193[38], i8193[39], i8193[40])
  i8192.m_fontSize = i8193[41]
  i8192.m_fontSizeBase = i8193[42]
  i8192.m_fontWeight = i8193[43]
  i8192.m_enableAutoSizing = !!i8193[44]
  i8192.m_fontSizeMin = i8193[45]
  i8192.m_fontSizeMax = i8193[46]
  i8192.m_fontStyle = i8193[47]
  i8192.m_HorizontalAlignment = i8193[48]
  i8192.m_VerticalAlignment = i8193[49]
  i8192.m_textAlignment = i8193[50]
  i8192.m_characterSpacing = i8193[51]
  i8192.m_characterHorizontalScale = i8193[52]
  i8192.m_wordSpacing = i8193[53]
  i8192.m_lineSpacing = i8193[54]
  i8192.m_lineSpacingMax = i8193[55]
  i8192.m_paragraphSpacing = i8193[56]
  i8192.m_charWidthMaxAdj = i8193[57]
  i8192.m_TextWrappingMode = i8193[58]
  i8192.m_wordWrappingRatios = i8193[59]
  i8192.m_overflowMode = i8193[60]
  request.r(i8193[61], i8193[62], 0, i8192, 'm_linkedTextComponent')
  request.r(i8193[63], i8193[64], 0, i8192, 'parentLinkedComponent')
  i8192.m_enableKerning = !!i8193[65]
  var i8199 = i8193[66]
  var i8198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i8199.length; i += 1) {
    i8198.add(i8199[i + 0]);
  }
  i8192.m_ActiveFontFeatures = i8198
  i8192.m_enableExtraPadding = !!i8193[67]
  i8192.checkPaddingRequired = !!i8193[68]
  i8192.m_isRichText = !!i8193[69]
  i8192.m_parseCtrlCharacters = !!i8193[70]
  i8192.m_isOrthographic = !!i8193[71]
  i8192.m_isCullingEnabled = !!i8193[72]
  i8192.m_horizontalMapping = i8193[73]
  i8192.m_verticalMapping = i8193[74]
  i8192.m_uvLineOffset = i8193[75]
  i8192.m_geometrySortingOrder = i8193[76]
  i8192.m_IsTextObjectScaleStatic = !!i8193[77]
  i8192.m_VertexBufferAutoSizeReduction = !!i8193[78]
  i8192.m_useMaxVisibleDescender = !!i8193[79]
  i8192.m_pageToDisplay = i8193[80]
  i8192.m_margin = new pc.Vec4( i8193[81], i8193[82], i8193[83], i8193[84] )
  i8192.m_isUsingLegacyAnimationComponent = !!i8193[85]
  i8192.m_isVolumetricText = !!i8193[86]
  request.r(i8193[87], i8193[88], 0, i8192, 'm_Material')
  i8192.m_EmojiFallbackSupport = !!i8193[89]
  i8192.m_Maskable = !!i8193[90]
  i8192.m_Color = new pc.Color(i8193[91], i8193[92], i8193[93], i8193[94])
  i8192.m_RaycastTarget = !!i8193[95]
  i8192.m_RaycastPadding = new pc.Vec4( i8193[96], i8193[97], i8193[98], i8193[99] )
  return i8192
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8200 = root || request.c( 'TMPro.VertexGradient' )
  var i8201 = data
  i8200.topLeft = new pc.Color(i8201[0], i8201[1], i8201[2], i8201[3])
  i8200.topRight = new pc.Color(i8201[4], i8201[5], i8201[6], i8201[7])
  i8200.bottomLeft = new pc.Color(i8201[8], i8201[9], i8201[10], i8201[11])
  i8200.bottomRight = new pc.Color(i8201[12], i8201[13], i8201[14], i8201[15])
  return i8200
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i8204 = root || request.c( 'JumpButton' )
  var i8205 = data
  request.r(i8205[0], i8205[1], 0, i8204, 'character')
  return i8204
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i8206 = root || request.c( 'PlayableJoystick' )
  var i8207 = data
  i8206.handleRange = i8207[0]
  i8206.deadZone = i8207[1]
  i8206.floating = !!i8207[2]
  request.r(i8207[3], i8207[4], 0, i8206, 'background')
  request.r(i8207[5], i8207[6], 0, i8206, 'knob')
  return i8206
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i8208 = root || request.c( 'StoryTextView' )
  var i8209 = data
  request.r(i8209[0], i8209[1], 0, i8208, 'label')
  i8208.popDuration = i8209[2]
  i8208.pulseAmount = i8209[3]
  i8208.pulseSpeed = i8209[4]
  i8208.fadeDuration = i8209[5]
  return i8208
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i8210 = root || request.c( 'HiddenMonsterPanel' )
  var i8211 = data
  request.r(i8211[0], i8211[1], 0, i8210, 'icon')
  i8210.openSound = request.d('FMAudio', i8211[2], i8210.openSound)
  request.r(i8211[3], i8211[4], 0, i8210, 'popRoot')
  i8210.popDuration = i8211[5]
  return i8210
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8212 = root || request.c( 'UnityEngine.UI.Button' )
  var i8213 = data
  i8212.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8213[0], i8212.m_OnClick)
  i8212.m_Navigation = request.d('UnityEngine.UI.Navigation', i8213[1], i8212.m_Navigation)
  i8212.m_Transition = i8213[2]
  i8212.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8213[3], i8212.m_Colors)
  i8212.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8213[4], i8212.m_SpriteState)
  i8212.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8213[5], i8212.m_AnimationTriggers)
  i8212.m_Interactable = !!i8213[6]
  request.r(i8213[7], i8213[8], 0, i8212, 'm_TargetGraphic')
  return i8212
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8214 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8215 = data
  i8214.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8215[0], i8214.m_PersistentCalls)
  return i8214
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8216 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8217 = data
  var i8219 = i8217[0]
  var i8218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8219.length; i += 1) {
    i8218.add(request.d('UnityEngine.Events.PersistentCall', i8219[i + 0]));
  }
  i8216.m_Calls = i8218
  return i8216
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8222 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8223 = data
  request.r(i8223[0], i8223[1], 0, i8222, 'm_Target')
  i8222.m_TargetAssemblyTypeName = i8223[2]
  i8222.m_MethodName = i8223[3]
  i8222.m_Mode = i8223[4]
  i8222.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8223[5], i8222.m_Arguments)
  i8222.m_CallState = i8223[6]
  return i8222
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8224 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8225 = data
  request.r(i8225[0], i8225[1], 0, i8224, 'm_ObjectArgument')
  i8224.m_ObjectArgumentAssemblyTypeName = i8225[2]
  i8224.m_IntArgument = i8225[3]
  i8224.m_FloatArgument = i8225[4]
  i8224.m_StringArgument = i8225[5]
  i8224.m_BoolArgument = !!i8225[6]
  return i8224
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8226 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8227 = data
  i8226.m_Mode = i8227[0]
  i8226.m_WrapAround = !!i8227[1]
  request.r(i8227[2], i8227[3], 0, i8226, 'm_SelectOnUp')
  request.r(i8227[4], i8227[5], 0, i8226, 'm_SelectOnDown')
  request.r(i8227[6], i8227[7], 0, i8226, 'm_SelectOnLeft')
  request.r(i8227[8], i8227[9], 0, i8226, 'm_SelectOnRight')
  return i8226
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8228 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8229 = data
  i8228.m_NormalColor = new pc.Color(i8229[0], i8229[1], i8229[2], i8229[3])
  i8228.m_HighlightedColor = new pc.Color(i8229[4], i8229[5], i8229[6], i8229[7])
  i8228.m_PressedColor = new pc.Color(i8229[8], i8229[9], i8229[10], i8229[11])
  i8228.m_SelectedColor = new pc.Color(i8229[12], i8229[13], i8229[14], i8229[15])
  i8228.m_DisabledColor = new pc.Color(i8229[16], i8229[17], i8229[18], i8229[19])
  i8228.m_ColorMultiplier = i8229[20]
  i8228.m_FadeDuration = i8229[21]
  return i8228
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8230 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8231 = data
  request.r(i8231[0], i8231[1], 0, i8230, 'm_HighlightedSprite')
  request.r(i8231[2], i8231[3], 0, i8230, 'm_PressedSprite')
  request.r(i8231[4], i8231[5], 0, i8230, 'm_SelectedSprite')
  request.r(i8231[6], i8231[7], 0, i8230, 'm_DisabledSprite')
  return i8230
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8232 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8233 = data
  i8232.m_NormalTrigger = i8233[0]
  i8232.m_HighlightedTrigger = i8233[1]
  i8232.m_PressedTrigger = i8233[2]
  i8232.m_SelectedTrigger = i8233[3]
  i8232.m_DisabledTrigger = i8233[4]
  return i8232
}

Deserializers["HideButton"] = function (request, data, root) {
  var i8234 = root || request.c( 'HideButton' )
  var i8235 = data
  return i8234
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i8236 = root || request.c( 'FindMonsterManager' )
  var i8237 = data
  request.r(i8237[0], i8237[1], 0, i8236, 'database')
  var i8239 = i8237[2]
  var i8238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8239.length; i += 2) {
  request.r(i8239[i + 0], i8239[i + 1], 1, i8238, '')
  }
  i8236.listRespawn = i8238
  request.r(i8237[3], i8237[4], 0, i8236, 'playerTransform')
  request.r(i8237[5], i8237[6], 0, i8236, 'targetTutorial')
  request.r(i8237[7], i8237[8], 0, i8236, 'arrowTut')
  i8236.autoHintNext = !!i8237[9]
  var i8241 = i8237[10]
  var i8240 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i8241.length; i += 2) {
  request.r(i8241[i + 0], i8241[i + 1], 1, i8240, '')
  }
  i8236.monsters = i8240
  i8236.playerTouchSize = new pc.Vec3( i8237[11], i8237[12], i8237[13] )
  request.r(i8237[14], i8237[15], 0, i8236, 'hiddenMonsterPanel')
  return i8236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i8246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i8247 = data
  i8246.textureMode = i8247[0]
  i8246.alignment = i8247[1]
  i8246.widthCurve = new pc.AnimationCurve( { keys_flow: i8247[2] } )
  i8246.colorGradient = i8247[3] ? new pc.ColorGradient(i8247[3][0], i8247[3][1], i8247[3][2]) : null
  var i8249 = i8247[4]
  var i8248 = []
  for(var i = 0; i < i8249.length; i += 3) {
    i8248.push( new pc.Vec3( i8249[i + 0], i8249[i + 1], i8249[i + 2] ) );
  }
  i8246.positions = i8248
  i8246.positionCount = i8247[5]
  i8246.widthMultiplier = i8247[6]
  i8246.startWidth = i8247[7]
  i8246.endWidth = i8247[8]
  i8246.numCornerVertices = i8247[9]
  i8246.numCapVertices = i8247[10]
  i8246.useWorldSpace = !!i8247[11]
  i8246.loop = !!i8247[12]
  i8246.startColor = new pc.Color(i8247[13], i8247[14], i8247[15], i8247[16])
  i8246.endColor = new pc.Color(i8247[17], i8247[18], i8247[19], i8247[20])
  i8246.generateLightingData = !!i8247[21]
  i8246.enabled = !!i8247[22]
  request.r(i8247[23], i8247[24], 0, i8246, 'sharedMaterial')
  var i8251 = i8247[25]
  var i8250 = []
  for(var i = 0; i < i8251.length; i += 2) {
  request.r(i8251[i + 0], i8251[i + 1], 2, i8250, '')
  }
  i8246.sharedMaterials = i8250
  i8246.receiveShadows = !!i8247[26]
  i8246.shadowCastingMode = i8247[27]
  i8246.sortingLayerID = i8247[28]
  i8246.sortingOrder = i8247[29]
  i8246.lightmapIndex = i8247[30]
  i8246.lightmapSceneIndex = i8247[31]
  i8246.lightmapScaleOffset = new pc.Vec4( i8247[32], i8247[33], i8247[34], i8247[35] )
  i8246.lightProbeUsage = i8247[36]
  i8246.reflectionProbeUsage = i8247[37]
  return i8246
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i8254 = root || request.c( 'TurtorialArrow' )
  var i8255 = data
  request.r(i8255[0], i8255[1], 0, i8254, 'lineRenderer')
  i8254.offset = new pc.Vec3( i8255[2], i8255[3], i8255[4] )
  i8254.planetSegments = i8255[5]
  return i8254
}

Deserializers["SprunkiHunt"] = function (request, data, root) {
  var i8256 = root || request.c( 'SprunkiHunt' )
  var i8257 = data
  request.r(i8257[0], i8257[1], 0, i8256, 'player')
  i8256.resetPlayerPosition = !!i8257[2]
  request.r(i8257[3], i8257[4], 0, i8256, 'startPoint')
  request.r(i8257[5], i8257[6], 0, i8256, 'collection')
  var i8259 = i8257[7]
  var i8258 = new (System.Collections.Generic.List$1(Bridge.ns('SprunkiCard')))
  for(var i = 0; i < i8259.length; i += 2) {
  request.r(i8259[i + 0], i8259[i + 1], 1, i8258, '')
  }
  i8256.cards = i8258
  request.r(i8257[8], i8257[9], 0, i8256, 'targetView')
  request.r(i8257[10], i8257[11], 0, i8256, 'targetIcon')
  request.r(i8257[12], i8257[13], 0, i8256, 'targetName')
  request.r(i8257[14], i8257[15], 0, i8256, 'foundPanel')
  request.r(i8257[16], i8257[17], 0, i8256, 'foundIcon')
  request.r(i8257[18], i8257[19], 0, i8256, 'foundName')
  request.r(i8257[20], i8257[21], 0, i8256, 'failPanel')
  request.r(i8257[22], i8257[23], 0, i8256, 'failIcon')
  request.r(i8257[24], i8257[25], 0, i8256, 'failName')
  i8256.foundSound = request.d('FMAudio', i8257[26], i8256.foundSound)
  i8256.failSound = request.d('FMAudio', i8257[27], i8256.failSound)
  request.r(i8257[28], i8257[29], 0, i8256, 'confetti')
  i8256.guideToTarget = !!i8257[30]
  request.r(i8257[31], i8257[32], 0, i8256, 'followText')
  i8256.followMessage = i8257[33]
  request.r(i8257[34], i8257[35], 0, i8256, 'horrorSky')
  return i8256
}

Deserializers["HorrorSky"] = function (request, data, root) {
  var i8262 = root || request.c( 'HorrorSky' )
  var i8263 = data
  request.r(i8263[0], i8263[1], 0, i8262, 'cam')
  request.r(i8263[2], i8263[3], 0, i8262, 'sun')
  var i8265 = i8263[4]
  var i8264 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i8265.length; i += 2) {
  request.r(i8265[i + 0], i8265[i + 1], 1, i8264, '')
  }
  i8262.horrorMonsters = i8264
  request.r(i8263[5], i8263[6], 0, i8262, 'skyDome')
  request.r(i8263[7], i8263[8], 0, i8262, 'sunSprite')
  i8262.domeRadius = i8263[9]
  i8262.sunSize = i8263[10]
  i8262.sunElevation = i8263[11]
  i8262.fogColor = new pc.Color(i8263[12], i8263[13], i8263[14], i8263[15])
  i8262.sunColor = new pc.Color(i8263[16], i8263[17], i8263[18], i8263[19])
  i8262.sunIntensity = i8263[20]
  i8262.ambientColor = new pc.Color(i8263[21], i8263[22], i8263[23], i8263[24])
  i8262.dayAmbientColor = new pc.Color(i8263[25], i8263[26], i8263[27], i8263[28])
  i8262.duration = i8263[29]
  request.r(i8263[30], i8263[31], 0, i8262, 'dayMusic')
  request.r(i8263[32], i8263[33], 0, i8262, 'horrorMusicSource')
  request.r(i8263[34], i8263[35], 0, i8262, 'horrorMusic')
  i8262.horrorMusicVolume = i8263[36]
  i8262.musicFade = i8263[37]
  return i8262
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i8268 = root || request.c( 'PlayableAudio' )
  var i8269 = data
  request.r(i8269[0], i8269[1], 0, i8268, 'source')
  request.r(i8269[2], i8269[3], 0, i8268, 'buttonClick')
  return i8268
}

Deserializers["LunaController"] = function (request, data, root) {
  var i8270 = root || request.c( 'LunaController' )
  var i8271 = data
  i8270.LimitTimePlay = !!i8271[0]
  i8270.TimePlay = i8271[1]
  i8270.LimitCountPlay = !!i8271[2]
  i8270.CountPlay = i8271[3]
  i8270.LimitClick = !!i8271[4]
  i8270.MaxClick = i8271[5]
  request.r(i8271[6], i8271[7], 0, i8270, 'BGM')
  request.r(i8271[8], i8271[9], 0, i8270, 'musicSource')
  i8270.musicVolume = i8271[10]
  var i8273 = i8271[11]
  var i8272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i8273.length; i += 2) {
  request.r(i8273[i + 0], i8273[i + 1], 1, i8272, '')
  }
  i8270.CTA = i8272
  request.r(i8271[12], i8271[13], 0, i8270, 'endCard')
  return i8270
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8276 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8277 = data
  request.r(i8277[0], i8277[1], 0, i8276, 'm_FirstSelected')
  i8276.m_sendNavigationEvents = !!i8277[2]
  i8276.m_DragThreshold = i8277[3]
  return i8276
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8278 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8279 = data
  i8278.m_HorizontalAxis = i8279[0]
  i8278.m_VerticalAxis = i8279[1]
  i8278.m_SubmitButton = i8279[2]
  i8278.m_CancelButton = i8279[3]
  i8278.m_InputActionsPerSecond = i8279[4]
  i8278.m_RepeatDelay = i8279[5]
  i8278.m_ForceModuleActive = !!i8279[6]
  i8278.m_SendPointerHoverToParent = !!i8279[7]
  return i8278
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i8280 = root || request.c( 'ControlsTutorial' )
  var i8281 = data
  request.r(i8281[0], i8281[1], 0, i8280, 'player')
  request.r(i8281[2], i8281[3], 0, i8280, 'look')
  request.r(i8281[4], i8281[5], 0, i8280, 'hand')
  request.r(i8281[6], i8281[7], 0, i8280, 'text')
  request.r(i8281[8], i8281[9], 0, i8280, 'viewFrom')
  request.r(i8281[10], i8281[11], 0, i8280, 'viewTo')
  request.r(i8281[12], i8281[13], 0, i8280, 'joystickRing')
  request.r(i8281[14], i8281[15], 0, i8280, 'jumpButton')
  i8280.viewText = i8281[16]
  i8280.moveText = i8281[17]
  i8280.jumpText = i8281[18]
  i8280.lookDegrees = i8281[19]
  i8280.moveDistance = i8281[20]
  i8280.jumps = i8281[21]
  i8280.jumpStep = !!i8281[22]
  i8280.startDelay = i8281[23]
  i8280.stepGap = i8281[24]
  i8280.swipeDuration = i8281[25]
  i8280.joystickSwipe = i8281[26]
  return i8280
}

Deserializers["PlayableFrame"] = function (request, data, root) {
  var i8282 = root || request.c( 'PlayableFrame' )
  var i8283 = data
  request.r(i8283[0], i8283[1], 0, i8282, 'popRoot')
  i8282.popDuration = i8283[2]
  return i8282
}

Deserializers["DragScroll"] = function (request, data, root) {
  var i8284 = root || request.c( 'DragScroll' )
  var i8285 = data
  request.r(i8285[0], i8285[1], 0, i8284, 'content')
  request.r(i8285[2], i8285[3], 0, i8284, 'viewport')
  request.r(i8285[4], i8285[5], 0, i8284, 'scrollbarArea')
  request.r(i8285[6], i8285[7], 0, i8284, 'scrollbarHandle')
  i8284.decelerationRate = i8285[8]
  i8284.elasticity = i8285[9]
  i8284.scrollSensitivity = i8285[10]
  return i8284
}

Deserializers["SprunkiCard"] = function (request, data, root) {
  var i8286 = root || request.c( 'SprunkiCard' )
  var i8287 = data
  request.r(i8287[0], i8287[1], 0, i8286, 'monster')
  request.r(i8287[2], i8287[3], 0, i8286, 'background')
  request.r(i8287[4], i8287[5], 0, i8286, 'icon')
  request.r(i8287[6], i8287[7], 0, i8286, 'nameText')
  request.r(i8287[8], i8287[9], 0, i8286, 'selectButton')
  request.r(i8287[10], i8287[11], 0, i8286, 'buttonImage')
  request.r(i8287[12], i8287[13], 0, i8286, 'buttonText')
  request.r(i8287[14], i8287[15], 0, i8286, 'foundMark')
  i8286.normalColor = new pc.Color(i8287[16], i8287[17], i8287[18], i8287[19])
  i8286.foundColor = new pc.Color(i8287[20], i8287[21], i8287[22], i8287[23])
  i8286.buttonColor = new pc.Color(i8287[24], i8287[25], i8287[26], i8287[27])
  i8286.foundButtonColor = new pc.Color(i8287[28], i8287[29], i8287[30], i8287[31])
  i8286.lockedIconColor = new pc.Color(i8287[32], i8287[33], i8287[34], i8287[35])
  i8286.nameColor = new pc.Color(i8287[36], i8287[37], i8287[38], i8287[39])
  i8286.foundNameColor = new pc.Color(i8287[40], i8287[41], i8287[42], i8287[43])
  i8286.selectLabel = i8287[44]
  i8286.foundLabel = i8287[45]
  return i8286
}

Deserializers["ScrollbarArea"] = function (request, data, root) {
  var i8288 = root || request.c( 'ScrollbarArea' )
  var i8289 = data
  request.r(i8289[0], i8289[1], 0, i8288, 'scroll')
  return i8288
}

Deserializers["SelectHandHint"] = function (request, data, root) {
  var i8290 = root || request.c( 'SelectHandHint' )
  var i8291 = data
  request.r(i8291[0], i8291[1], 0, i8290, 'hand')
  request.r(i8291[2], i8291[3], 0, i8290, 'scroll')
  var i8293 = i8291[4]
  var i8292 = new (System.Collections.Generic.List$1(Bridge.ns('SprunkiCard')))
  for(var i = 0; i < i8293.length; i += 2) {
  request.r(i8293[i + 0], i8293[i + 1], 1, i8292, '')
  }
  i8290.cards = i8292
  i8290.startDelay = i8291[5]
  i8290.moveDuration = i8291[6]
  i8290.pressDuration = i8291[7]
  i8290.holdDuration = i8291[8]
  i8290.scrollSpeed = i8291[9]
  i8290.pressScale = i8291[10]
  return i8290
}

Deserializers["ConfettiBurst"] = function (request, data, root) {
  var i8294 = root || request.c( 'ConfettiBurst' )
  var i8295 = data
  request.r(i8295[0], i8295[1], 0, i8294, 'area')
  var i8297 = i8295[2]
  var i8296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i8297.length; i += 2) {
  request.r(i8297[i + 0], i8297[i + 1], 1, i8296, '')
  }
  i8294.pieces = i8296
  var i8299 = i8295[3]
  var i8298 = []
  for(var i = 0; i < i8299.length; i += 4) {
    i8298.push( new pc.Color(i8299[i + 0], i8299[i + 1], i8299[i + 2], i8299[i + 3]) );
  }
  i8294.pastel = i8298
  var i8301 = i8295[4]
  var i8300 = []
  for(var i = 0; i < i8301.length; i += 4) {
    i8300.push( new pc.Color(i8301[i + 0], i8301[i + 1], i8301[i + 2], i8301[i + 3]) );
  }
  i8294.vivid = i8300
  i8294.vividChance = i8295[5]
  i8294.speed = new pc.Vec2( i8295[6], i8295[7] )
  i8294.angle = new pc.Vec2( i8295[8], i8295[9] )
  i8294.startHeight = new pc.Vec2( i8295[10], i8295[11] )
  i8294.gravity = i8295[12]
  i8294.drag = i8295[13]
  i8294.lifetime = new pc.Vec2( i8295[14], i8295[15] )
  i8294.fadeTime = i8295[16]
  i8294.spinSpeed = new pc.Vec2( i8295[17], i8295[18] )
  i8294.flipSpeed = new pc.Vec2( i8295[19], i8295[20] )
  return i8294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8307 = data
  i8306.ambientIntensity = i8307[0]
  i8306.reflectionIntensity = i8307[1]
  i8306.ambientMode = i8307[2]
  i8306.ambientLight = new pc.Color(i8307[3], i8307[4], i8307[5], i8307[6])
  i8306.ambientSkyColor = new pc.Color(i8307[7], i8307[8], i8307[9], i8307[10])
  i8306.ambientGroundColor = new pc.Color(i8307[11], i8307[12], i8307[13], i8307[14])
  i8306.ambientEquatorColor = new pc.Color(i8307[15], i8307[16], i8307[17], i8307[18])
  i8306.fogColor = new pc.Color(i8307[19], i8307[20], i8307[21], i8307[22])
  i8306.fogEndDistance = i8307[23]
  i8306.fogStartDistance = i8307[24]
  i8306.fogDensity = i8307[25]
  i8306.fog = !!i8307[26]
  request.r(i8307[27], i8307[28], 0, i8306, 'skybox')
  i8306.fogMode = i8307[29]
  var i8309 = i8307[30]
  var i8308 = []
  for(var i = 0; i < i8309.length; i += 1) {
    i8308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8309[i + 0]) );
  }
  i8306.lightmaps = i8308
  i8306.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8307[31], i8306.lightProbes)
  i8306.lightmapsMode = i8307[32]
  i8306.mixedBakeMode = i8307[33]
  i8306.environmentLightingMode = i8307[34]
  i8306.ambientProbe = new pc.SphericalHarmonicsL2(i8307[35])
  request.r(i8307[36], i8307[37], 0, i8306, 'customReflection')
  request.r(i8307[38], i8307[39], 0, i8306, 'defaultReflection')
  i8306.defaultReflectionMode = i8307[40]
  i8306.defaultReflectionResolution = i8307[41]
  i8306.sunLightObjectId = i8307[42]
  i8306.pixelLightCount = i8307[43]
  i8306.defaultReflectionHDR = !!i8307[44]
  i8306.hasLightDataAsset = !!i8307[45]
  i8306.hasManualGenerate = !!i8307[46]
  return i8306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8313 = data
  request.r(i8313[0], i8313[1], 0, i8312, 'lightmapColor')
  request.r(i8313[2], i8313[3], 0, i8312, 'lightmapDirection')
  request.r(i8313[4], i8313[5], 0, i8312, 'shadowMask')
  return i8312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8314 = root || new UnityEngine.LightProbes()
  var i8315 = data
  return i8314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8321 = data
  var i8323 = i8321[0]
  var i8322 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8323.length; i += 1) {
    i8322.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8323[i + 0]));
  }
  i8320.ShaderCompilationErrors = i8322
  i8320.name = i8321[1]
  i8320.guid = i8321[2]
  var i8325 = i8321[3]
  var i8324 = []
  for(var i = 0; i < i8325.length; i += 1) {
    i8324.push( i8325[i + 0] );
  }
  i8320.shaderDefinedKeywords = i8324
  var i8327 = i8321[4]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 1) {
    i8326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8327[i + 0]) );
  }
  i8320.passes = i8326
  var i8329 = i8321[5]
  var i8328 = []
  for(var i = 0; i < i8329.length; i += 1) {
    i8328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8329[i + 0]) );
  }
  i8320.usePasses = i8328
  var i8331 = i8321[6]
  var i8330 = []
  for(var i = 0; i < i8331.length; i += 1) {
    i8330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8331[i + 0]) );
  }
  i8320.defaultParameterValues = i8330
  request.r(i8321[7], i8321[8], 0, i8320, 'unityFallbackShader')
  i8320.readDepth = !!i8321[9]
  i8320.hasDepthOnlyPass = !!i8321[10]
  i8320.isCreatedByShaderGraph = !!i8321[11]
  i8320.disableBatching = !!i8321[12]
  i8320.compiled = !!i8321[13]
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8335 = data
  i8334.shaderName = i8335[0]
  i8334.errorMessage = i8335[1]
  return i8334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8340 = root || new pc.UnityShaderPass()
  var i8341 = data
  i8340.id = i8341[0]
  i8340.subShaderIndex = i8341[1]
  i8340.name = i8341[2]
  i8340.passType = i8341[3]
  i8340.grabPassTextureName = i8341[4]
  i8340.usePass = !!i8341[5]
  i8340.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[6], i8340.zTest)
  i8340.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[7], i8340.zWrite)
  i8340.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[8], i8340.culling)
  i8340.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8341[9], i8340.blending)
  i8340.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8341[10], i8340.alphaBlending)
  i8340.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[11], i8340.colorWriteMask)
  i8340.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[12], i8340.offsetUnits)
  i8340.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[13], i8340.offsetFactor)
  i8340.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[14], i8340.stencilRef)
  i8340.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[15], i8340.stencilReadMask)
  i8340.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8341[16], i8340.stencilWriteMask)
  i8340.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8341[17], i8340.stencilOp)
  i8340.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8341[18], i8340.stencilOpFront)
  i8340.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8341[19], i8340.stencilOpBack)
  var i8343 = i8341[20]
  var i8342 = []
  for(var i = 0; i < i8343.length; i += 1) {
    i8342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8343[i + 0]) );
  }
  i8340.tags = i8342
  var i8345 = i8341[21]
  var i8344 = []
  for(var i = 0; i < i8345.length; i += 1) {
    i8344.push( i8345[i + 0] );
  }
  i8340.passDefinedKeywords = i8344
  var i8347 = i8341[22]
  var i8346 = []
  for(var i = 0; i < i8347.length; i += 1) {
    i8346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8347[i + 0]) );
  }
  i8340.passDefinedKeywordGroups = i8346
  var i8349 = i8341[23]
  var i8348 = []
  for(var i = 0; i < i8349.length; i += 1) {
    i8348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8349[i + 0]) );
  }
  i8340.variants = i8348
  var i8351 = i8341[24]
  var i8350 = []
  for(var i = 0; i < i8351.length; i += 1) {
    i8350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8351[i + 0]) );
  }
  i8340.excludedVariants = i8350
  i8340.hasDepthReader = !!i8341[25]
  return i8340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8353 = data
  i8352.val = i8353[0]
  i8352.name = i8353[1]
  return i8352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8355 = data
  i8354.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8355[0], i8354.src)
  i8354.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8355[1], i8354.dst)
  i8354.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8355[2], i8354.op)
  return i8354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8357 = data
  i8356.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8357[0], i8356.pass)
  i8356.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8357[1], i8356.fail)
  i8356.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8357[2], i8356.zFail)
  i8356.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8357[3], i8356.comp)
  return i8356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8361 = data
  i8360.name = i8361[0]
  i8360.value = i8361[1]
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8365 = data
  var i8367 = i8365[0]
  var i8366 = []
  for(var i = 0; i < i8367.length; i += 1) {
    i8366.push( i8367[i + 0] );
  }
  i8364.keywords = i8366
  i8364.hasDiscard = !!i8365[1]
  return i8364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8371 = data
  i8370.passId = i8371[0]
  i8370.subShaderIndex = i8371[1]
  var i8373 = i8371[2]
  var i8372 = []
  for(var i = 0; i < i8373.length; i += 1) {
    i8372.push( i8373[i + 0] );
  }
  i8370.keywords = i8372
  i8370.vertexProgram = i8371[3]
  i8370.fragmentProgram = i8371[4]
  i8370.exportedForWebGl2 = !!i8371[5]
  i8370.readDepth = !!i8371[6]
  return i8370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8377 = data
  request.r(i8377[0], i8377[1], 0, i8376, 'shader')
  i8376.pass = i8377[2]
  return i8376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8381 = data
  i8380.name = i8381[0]
  i8380.type = i8381[1]
  i8380.value = new pc.Vec4( i8381[2], i8381[3], i8381[4], i8381[5] )
  i8380.textureValue = i8381[6]
  i8380.shaderPropertyFlag = i8381[7]
  return i8380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8383 = data
  i8382.name = i8383[0]
  request.r(i8383[1], i8383[2], 0, i8382, 'texture')
  i8382.aabb = i8383[3]
  i8382.vertices = i8383[4]
  i8382.triangles = i8383[5]
  i8382.textureRect = UnityEngine.Rect.MinMaxRect(i8383[6], i8383[7], i8383[8], i8383[9])
  i8382.packedRect = UnityEngine.Rect.MinMaxRect(i8383[10], i8383[11], i8383[12], i8383[13])
  i8382.border = new pc.Vec4( i8383[14], i8383[15], i8383[16], i8383[17] )
  i8382.transparency = i8383[18]
  i8382.bounds = i8383[19]
  i8382.pixelsPerUnit = i8383[20]
  i8382.textureWidth = i8383[21]
  i8382.textureHeight = i8383[22]
  i8382.nativeSize = new pc.Vec2( i8383[23], i8383[24] )
  i8382.pivot = new pc.Vec2( i8383[25], i8383[26] )
  i8382.textureRectOffset = new pc.Vec2( i8383[27], i8383[28] )
  return i8382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8385 = data
  i8384.name = i8385[0]
  return i8384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8387 = data
  i8386.name = i8387[0]
  i8386.wrapMode = i8387[1]
  i8386.isLooping = !!i8387[2]
  i8386.length = i8387[3]
  var i8389 = i8387[4]
  var i8388 = []
  for(var i = 0; i < i8389.length; i += 1) {
    i8388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8389[i + 0]) );
  }
  i8386.curves = i8388
  var i8391 = i8387[5]
  var i8390 = []
  for(var i = 0; i < i8391.length; i += 1) {
    i8390.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8391[i + 0]) );
  }
  i8386.events = i8390
  i8386.halfPrecision = !!i8387[6]
  i8386._frameRate = i8387[7]
  i8386.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8387[8], i8386.localBounds)
  i8386.hasMuscleCurves = !!i8387[9]
  var i8393 = i8387[10]
  var i8392 = []
  for(var i = 0; i < i8393.length; i += 1) {
    i8392.push( i8393[i + 0] );
  }
  i8386.clipMuscleConstant = i8392
  i8386.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8387[11], i8386.clipBindingConstant)
  return i8386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8397 = data
  i8396.path = i8397[0]
  i8396.hash = i8397[1]
  i8396.componentType = i8397[2]
  i8396.property = i8397[3]
  i8396.keys = i8397[4]
  var i8399 = i8397[5]
  var i8398 = []
  for(var i = 0; i < i8399.length; i += 1) {
    i8398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8399[i + 0]) );
  }
  i8396.objectReferenceKeys = i8398
  return i8396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8403 = data
  i8402.time = i8403[0]
  request.r(i8403[1], i8403[2], 0, i8402, 'value')
  return i8402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8407 = data
  i8406.functionName = i8407[0]
  i8406.floatParameter = i8407[1]
  i8406.intParameter = i8407[2]
  i8406.stringParameter = i8407[3]
  request.r(i8407[4], i8407[5], 0, i8406, 'objectReferenceParameter')
  i8406.time = i8407[6]
  return i8406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8409 = data
  i8408.center = new pc.Vec3( i8409[0], i8409[1], i8409[2] )
  i8408.extends = new pc.Vec3( i8409[3], i8409[4], i8409[5] )
  return i8408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8413 = data
  var i8415 = i8413[0]
  var i8414 = []
  for(var i = 0; i < i8415.length; i += 1) {
    i8414.push( i8415[i + 0] );
  }
  i8412.genericBindings = i8414
  var i8417 = i8413[1]
  var i8416 = []
  for(var i = 0; i < i8417.length; i += 1) {
    i8416.push( i8417[i + 0] );
  }
  i8412.pptrCurveMapping = i8416
  return i8412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8419 = data
  i8418.name = i8419[0]
  var i8421 = i8419[1]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8421[i + 0]) );
  }
  i8418.layers = i8420
  var i8423 = i8419[2]
  var i8422 = []
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8423[i + 0]) );
  }
  i8418.parameters = i8422
  i8418.animationClips = i8419[3]
  i8418.avatarUnsupported = i8419[4]
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8427 = data
  i8426.name = i8427[0]
  i8426.defaultWeight = i8427[1]
  i8426.blendingMode = i8427[2]
  i8426.avatarMask = i8427[3]
  i8426.syncedLayerIndex = i8427[4]
  i8426.syncedLayerAffectsTiming = !!i8427[5]
  i8426.syncedLayers = i8427[6]
  i8426.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8427[7], i8426.stateMachine)
  return i8426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8429 = data
  i8428.id = i8429[0]
  i8428.name = i8429[1]
  i8428.path = i8429[2]
  var i8431 = i8429[3]
  var i8430 = []
  for(var i = 0; i < i8431.length; i += 1) {
    i8430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8431[i + 0]) );
  }
  i8428.states = i8430
  var i8433 = i8429[4]
  var i8432 = []
  for(var i = 0; i < i8433.length; i += 1) {
    i8432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8433[i + 0]) );
  }
  i8428.machines = i8432
  var i8435 = i8429[5]
  var i8434 = []
  for(var i = 0; i < i8435.length; i += 1) {
    i8434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8435[i + 0]) );
  }
  i8428.entryStateTransitions = i8434
  var i8437 = i8429[6]
  var i8436 = []
  for(var i = 0; i < i8437.length; i += 1) {
    i8436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8437[i + 0]) );
  }
  i8428.exitStateTransitions = i8436
  var i8439 = i8429[7]
  var i8438 = []
  for(var i = 0; i < i8439.length; i += 1) {
    i8438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8439[i + 0]) );
  }
  i8428.anyStateTransitions = i8438
  i8428.defaultStateId = i8429[8]
  return i8428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8443 = data
  i8442.id = i8443[0]
  i8442.name = i8443[1]
  i8442.cycleOffset = i8443[2]
  i8442.cycleOffsetParameter = i8443[3]
  i8442.cycleOffsetParameterActive = !!i8443[4]
  i8442.mirror = !!i8443[5]
  i8442.mirrorParameter = i8443[6]
  i8442.mirrorParameterActive = !!i8443[7]
  i8442.motionId = i8443[8]
  i8442.nameHash = i8443[9]
  i8442.fullPathHash = i8443[10]
  i8442.speed = i8443[11]
  i8442.speedParameter = i8443[12]
  i8442.speedParameterActive = !!i8443[13]
  i8442.tag = i8443[14]
  i8442.tagHash = i8443[15]
  i8442.writeDefaultValues = !!i8443[16]
  var i8445 = i8443[17]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 2) {
  request.r(i8445[i + 0], i8445[i + 1], 2, i8444, '')
  }
  i8442.behaviours = i8444
  var i8447 = i8443[18]
  var i8446 = []
  for(var i = 0; i < i8447.length; i += 1) {
    i8446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8447[i + 0]) );
  }
  i8442.transitions = i8446
  return i8442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8453 = data
  i8452.fullPath = i8453[0]
  i8452.canTransitionToSelf = !!i8453[1]
  i8452.duration = i8453[2]
  i8452.exitTime = i8453[3]
  i8452.hasExitTime = !!i8453[4]
  i8452.hasFixedDuration = !!i8453[5]
  i8452.interruptionSource = i8453[6]
  i8452.offset = i8453[7]
  i8452.orderedInterruption = !!i8453[8]
  i8452.destinationStateId = i8453[9]
  i8452.isExit = !!i8453[10]
  i8452.mute = !!i8453[11]
  i8452.solo = !!i8453[12]
  var i8455 = i8453[13]
  var i8454 = []
  for(var i = 0; i < i8455.length; i += 1) {
    i8454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8455[i + 0]) );
  }
  i8452.conditions = i8454
  return i8452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8461 = data
  i8460.destinationStateId = i8461[0]
  i8460.isExit = !!i8461[1]
  i8460.mute = !!i8461[2]
  i8460.solo = !!i8461[3]
  var i8463 = i8461[4]
  var i8462 = []
  for(var i = 0; i < i8463.length; i += 1) {
    i8462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8463[i + 0]) );
  }
  i8460.conditions = i8462
  return i8460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8467 = data
  i8466.defaultBool = !!i8467[0]
  i8466.defaultFloat = i8467[1]
  i8466.defaultInt = i8467[2]
  i8466.name = i8467[3]
  i8466.nameHash = i8467[4]
  i8466.type = i8467[5]
  return i8466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8471 = data
  i8470.mode = i8471[0]
  i8470.parameter = i8471[1]
  i8470.threshold = i8471[2]
  return i8470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8473 = data
  i8472.name = i8473[0]
  i8472.bytes64 = i8473[1]
  i8472.data = i8473[2]
  return i8472
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8474 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8475 = data
  i8474.normalStyle = i8475[0]
  i8474.normalSpacingOffset = i8475[1]
  i8474.boldStyle = i8475[2]
  i8474.boldSpacing = i8475[3]
  i8474.italicStyle = i8475[4]
  i8474.tabSize = i8475[5]
  request.r(i8475[6], i8475[7], 0, i8474, 'atlas')
  i8474.m_SourceFontFileGUID = i8475[8]
  i8474.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8475[9], i8474.m_CreationSettings)
  request.r(i8475[10], i8475[11], 0, i8474, 'm_SourceFontFile')
  i8474.m_SourceFontFilePath = i8475[12]
  i8474.m_AtlasPopulationMode = i8475[13]
  i8474.InternalDynamicOS = !!i8475[14]
  var i8477 = i8475[15]
  var i8476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8477.length; i += 1) {
    i8476.add(request.d('UnityEngine.TextCore.Glyph', i8477[i + 0]));
  }
  i8474.m_GlyphTable = i8476
  var i8479 = i8475[16]
  var i8478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8479.length; i += 1) {
    i8478.add(request.d('TMPro.TMP_Character', i8479[i + 0]));
  }
  i8474.m_CharacterTable = i8478
  var i8481 = i8475[17]
  var i8480 = []
  for(var i = 0; i < i8481.length; i += 2) {
  request.r(i8481[i + 0], i8481[i + 1], 2, i8480, '')
  }
  i8474.m_AtlasTextures = i8480
  i8474.m_AtlasTextureIndex = i8475[18]
  i8474.m_IsMultiAtlasTexturesEnabled = !!i8475[19]
  i8474.m_GetFontFeatures = !!i8475[20]
  i8474.m_ClearDynamicDataOnBuild = !!i8475[21]
  i8474.m_AtlasWidth = i8475[22]
  i8474.m_AtlasHeight = i8475[23]
  i8474.m_AtlasPadding = i8475[24]
  i8474.m_AtlasRenderMode = i8475[25]
  var i8483 = i8475[26]
  var i8482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8483.length; i += 1) {
    i8482.add(request.d('UnityEngine.TextCore.GlyphRect', i8483[i + 0]));
  }
  i8474.m_UsedGlyphRects = i8482
  var i8485 = i8475[27]
  var i8484 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8485.length; i += 1) {
    i8484.add(request.d('UnityEngine.TextCore.GlyphRect', i8485[i + 0]));
  }
  i8474.m_FreeGlyphRects = i8484
  i8474.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8475[28], i8474.m_FontFeatureTable)
  i8474.m_ShouldReimportFontFeatures = !!i8475[29]
  var i8487 = i8475[30]
  var i8486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8487.length; i += 2) {
  request.r(i8487[i + 0], i8487[i + 1], 1, i8486, '')
  }
  i8474.m_FallbackFontAssetTable = i8486
  var i8489 = i8475[31]
  var i8488 = []
  for(var i = 0; i < i8489.length; i += 1) {
    i8488.push( request.d('TMPro.TMP_FontWeightPair', i8489[i + 0]) );
  }
  i8474.m_FontWeightTable = i8488
  var i8491 = i8475[32]
  var i8490 = []
  for(var i = 0; i < i8491.length; i += 1) {
    i8490.push( request.d('TMPro.TMP_FontWeightPair', i8491[i + 0]) );
  }
  i8474.fontWeights = i8490
  i8474.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8475[33], i8474.m_fontInfo)
  var i8493 = i8475[34]
  var i8492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8493.length; i += 1) {
    i8492.add(request.d('TMPro.TMP_Glyph', i8493[i + 0]));
  }
  i8474.m_glyphInfoList = i8492
  i8474.m_KerningTable = request.d('TMPro.KerningTable', i8475[35], i8474.m_KerningTable)
  var i8495 = i8475[36]
  var i8494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8495.length; i += 2) {
  request.r(i8495[i + 0], i8495[i + 1], 1, i8494, '')
  }
  i8474.fallbackFontAssets = i8494
  i8474.m_Version = i8475[37]
  i8474.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8475[38], i8474.m_FaceInfo)
  request.r(i8475[39], i8475[40], 0, i8474, 'm_Material')
  return i8474
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8496 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8497 = data
  i8496.sourceFontFileName = i8497[0]
  i8496.sourceFontFileGUID = i8497[1]
  i8496.faceIndex = i8497[2]
  i8496.pointSizeSamplingMode = i8497[3]
  i8496.pointSize = i8497[4]
  i8496.padding = i8497[5]
  i8496.paddingMode = i8497[6]
  i8496.packingMode = i8497[7]
  i8496.atlasWidth = i8497[8]
  i8496.atlasHeight = i8497[9]
  i8496.characterSetSelectionMode = i8497[10]
  i8496.characterSequence = i8497[11]
  i8496.referencedFontAssetGUID = i8497[12]
  i8496.referencedTextAssetGUID = i8497[13]
  i8496.fontStyle = i8497[14]
  i8496.fontStyleModifier = i8497[15]
  i8496.renderMode = i8497[16]
  i8496.includeFontFeatures = !!i8497[17]
  return i8496
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8500 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8501 = data
  i8500.m_Index = i8501[0]
  i8500.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8501[1], i8500.m_Metrics)
  i8500.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8501[2], i8500.m_GlyphRect)
  i8500.m_Scale = i8501[3]
  i8500.m_AtlasIndex = i8501[4]
  i8500.m_ClassDefinitionType = i8501[5]
  return i8500
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8502 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8503 = data
  i8502.m_Width = i8503[0]
  i8502.m_Height = i8503[1]
  i8502.m_HorizontalBearingX = i8503[2]
  i8502.m_HorizontalBearingY = i8503[3]
  i8502.m_HorizontalAdvance = i8503[4]
  return i8502
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8504 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8505 = data
  i8504.m_X = i8505[0]
  i8504.m_Y = i8505[1]
  i8504.m_Width = i8505[2]
  i8504.m_Height = i8505[3]
  return i8504
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8508 = root || request.c( 'TMPro.TMP_Character' )
  var i8509 = data
  i8508.m_ElementType = i8509[0]
  i8508.m_Unicode = i8509[1]
  i8508.m_GlyphIndex = i8509[2]
  i8508.m_Scale = i8509[3]
  return i8508
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8514 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8515 = data
  var i8517 = i8515[0]
  var i8516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i8517.length; i += 1) {
    i8516.add(request.d('TMPro.MultipleSubstitutionRecord', i8517[i + 0]));
  }
  i8514.m_MultipleSubstitutionRecords = i8516
  var i8519 = i8515[1]
  var i8518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i8519.length; i += 1) {
    i8518.add(request.d('TMPro.LigatureSubstitutionRecord', i8519[i + 0]));
  }
  i8514.m_LigatureSubstitutionRecords = i8518
  var i8521 = i8515[2]
  var i8520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8521.length; i += 1) {
    i8520.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i8521[i + 0]));
  }
  i8514.m_GlyphPairAdjustmentRecords = i8520
  var i8523 = i8515[3]
  var i8522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i8523.length; i += 1) {
    i8522.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i8523[i + 0]));
  }
  i8514.m_MarkToBaseAdjustmentRecords = i8522
  var i8525 = i8515[4]
  var i8524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i8525.length; i += 1) {
    i8524.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i8525[i + 0]));
  }
  i8514.m_MarkToMarkAdjustmentRecords = i8524
  return i8514
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i8528 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i8529 = data
  i8528.m_TargetGlyphID = i8529[0]
  i8528.m_SubstituteGlyphIDs = i8529[1]
  return i8528
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i8532 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i8533 = data
  i8532.m_ComponentGlyphIDs = i8533[0]
  i8532.m_LigatureGlyphID = i8533[1]
  return i8532
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8536 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i8537 = data
  i8536.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i8537[0], i8536.m_FirstAdjustmentRecord)
  i8536.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i8537[1], i8536.m_SecondAdjustmentRecord)
  i8536.m_FeatureLookupFlags = i8537[2]
  return i8536
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8538 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i8539 = data
  i8538.m_GlyphIndex = i8539[0]
  i8538.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i8539[1], i8538.m_GlyphValueRecord)
  return i8538
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i8540 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i8541 = data
  i8540.m_XPlacement = i8541[0]
  i8540.m_YPlacement = i8541[1]
  i8540.m_XAdvance = i8541[2]
  i8540.m_YAdvance = i8541[3]
  return i8540
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i8544 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i8545 = data
  i8544.m_BaseGlyphID = i8545[0]
  i8544.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i8545[1], i8544.m_BaseGlyphAnchorPoint)
  i8544.m_MarkGlyphID = i8545[2]
  i8544.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i8545[3], i8544.m_MarkPositionAdjustment)
  return i8544
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i8546 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i8547 = data
  i8546.m_XCoordinate = i8547[0]
  i8546.m_YCoordinate = i8547[1]
  return i8546
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i8548 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i8549 = data
  i8548.m_XPositionAdjustment = i8549[0]
  i8548.m_YPositionAdjustment = i8549[1]
  return i8548
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i8552 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i8553 = data
  i8552.m_BaseMarkGlyphID = i8553[0]
  i8552.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i8553[1], i8552.m_BaseMarkGlyphAnchorPoint)
  i8552.m_CombiningMarkGlyphID = i8553[2]
  i8552.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i8553[3], i8552.m_CombiningMarkPositionAdjustment)
  return i8552
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8558 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8559 = data
  request.r(i8559[0], i8559[1], 0, i8558, 'regularTypeface')
  request.r(i8559[2], i8559[3], 0, i8558, 'italicTypeface')
  return i8558
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8560 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8561 = data
  i8560.Name = i8561[0]
  i8560.PointSize = i8561[1]
  i8560.Scale = i8561[2]
  i8560.CharacterCount = i8561[3]
  i8560.LineHeight = i8561[4]
  i8560.Baseline = i8561[5]
  i8560.Ascender = i8561[6]
  i8560.CapHeight = i8561[7]
  i8560.Descender = i8561[8]
  i8560.CenterLine = i8561[9]
  i8560.SuperscriptOffset = i8561[10]
  i8560.SubscriptOffset = i8561[11]
  i8560.SubSize = i8561[12]
  i8560.Underline = i8561[13]
  i8560.UnderlineThickness = i8561[14]
  i8560.strikethrough = i8561[15]
  i8560.strikethroughThickness = i8561[16]
  i8560.TabWidth = i8561[17]
  i8560.Padding = i8561[18]
  i8560.AtlasWidth = i8561[19]
  i8560.AtlasHeight = i8561[20]
  return i8560
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8564 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8565 = data
  i8564.id = i8565[0]
  i8564.x = i8565[1]
  i8564.y = i8565[2]
  i8564.width = i8565[3]
  i8564.height = i8565[4]
  i8564.xOffset = i8565[5]
  i8564.yOffset = i8565[6]
  i8564.xAdvance = i8565[7]
  i8564.scale = i8565[8]
  return i8564
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8566 = root || request.c( 'TMPro.KerningTable' )
  var i8567 = data
  var i8569 = i8567[0]
  var i8568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8569.length; i += 1) {
    i8568.add(request.d('TMPro.KerningPair', i8569[i + 0]));
  }
  i8566.kerningPairs = i8568
  return i8566
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8572 = root || request.c( 'TMPro.KerningPair' )
  var i8573 = data
  i8572.xOffset = i8573[0]
  i8572.m_FirstGlyph = i8573[1]
  i8572.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8573[2], i8572.m_FirstGlyphAdjustments)
  i8572.m_SecondGlyph = i8573[3]
  i8572.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8573[4], i8572.m_SecondGlyphAdjustments)
  i8572.m_IgnoreSpacingAdjustments = !!i8573[5]
  return i8572
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8574 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8575 = data
  i8574.m_FaceIndex = i8575[0]
  i8574.m_FamilyName = i8575[1]
  i8574.m_StyleName = i8575[2]
  i8574.m_PointSize = i8575[3]
  i8574.m_Scale = i8575[4]
  i8574.m_UnitsPerEM = i8575[5]
  i8574.m_LineHeight = i8575[6]
  i8574.m_AscentLine = i8575[7]
  i8574.m_CapLine = i8575[8]
  i8574.m_MeanLine = i8575[9]
  i8574.m_Baseline = i8575[10]
  i8574.m_DescentLine = i8575[11]
  i8574.m_SuperscriptOffset = i8575[12]
  i8574.m_SuperscriptSize = i8575[13]
  i8574.m_SubscriptOffset = i8575[14]
  i8574.m_SubscriptSize = i8575[15]
  i8574.m_UnderlineOffset = i8575[16]
  i8574.m_UnderlineThickness = i8575[17]
  i8574.m_StrikethroughOffset = i8575[18]
  i8574.m_StrikethroughThickness = i8575[19]
  i8574.m_TabWidth = i8575[20]
  return i8574
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i8576 = root || request.c( 'PlayerSO' )
  var i8577 = data
  i8576.maxSpeed = i8577[0]
  i8576.jumpImpulse = i8577[1]
  return i8576
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i8578 = root || request.c( 'FindMonsterDatabase' )
  var i8579 = data
  var i8581 = i8579[0]
  var i8580 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i8581.length; i += 2) {
  request.r(i8581[i + 0], i8581[i + 1], 1, i8580, '')
  }
  i8578.database = i8580
  return i8578
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i8582 = root || request.c( 'MonsterSO' )
  var i8583 = data
  i8582.id = i8583[0]
  i8582.displayName = i8583[1]
  request.r(i8583[2], i8583[3], 0, i8582, 'icon')
  request.r(i8583[4], i8583[5], 0, i8582, 'prefab')
  return i8582
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8584 = root || request.c( 'TMPro.TMP_Settings' )
  var i8585 = data
  i8584.assetVersion = i8585[0]
  i8584.m_TextWrappingMode = i8585[1]
  i8584.m_enableKerning = !!i8585[2]
  var i8587 = i8585[3]
  var i8586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i8587.length; i += 1) {
    i8586.add(i8587[i + 0]);
  }
  i8584.m_ActiveFontFeatures = i8586
  i8584.m_enableExtraPadding = !!i8585[4]
  i8584.m_enableTintAllSprites = !!i8585[5]
  i8584.m_enableParseEscapeCharacters = !!i8585[6]
  i8584.m_EnableRaycastTarget = !!i8585[7]
  i8584.m_GetFontFeaturesAtRuntime = !!i8585[8]
  i8584.m_missingGlyphCharacter = i8585[9]
  i8584.m_ClearDynamicDataOnBuild = !!i8585[10]
  i8584.m_warningsDisabled = !!i8585[11]
  request.r(i8585[12], i8585[13], 0, i8584, 'm_defaultFontAsset')
  i8584.m_defaultFontAssetPath = i8585[14]
  i8584.m_defaultFontSize = i8585[15]
  i8584.m_defaultAutoSizeMinRatio = i8585[16]
  i8584.m_defaultAutoSizeMaxRatio = i8585[17]
  i8584.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8585[18], i8585[19] )
  i8584.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8585[20], i8585[21] )
  i8584.m_autoSizeTextContainer = !!i8585[22]
  i8584.m_IsTextObjectScaleStatic = !!i8585[23]
  var i8589 = i8585[24]
  var i8588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8589.length; i += 2) {
  request.r(i8589[i + 0], i8589[i + 1], 1, i8588, '')
  }
  i8584.m_fallbackFontAssets = i8588
  i8584.m_matchMaterialPreset = !!i8585[25]
  i8584.m_HideSubTextObjects = !!i8585[26]
  request.r(i8585[27], i8585[28], 0, i8584, 'm_defaultSpriteAsset')
  i8584.m_defaultSpriteAssetPath = i8585[29]
  i8584.m_enableEmojiSupport = !!i8585[30]
  i8584.m_MissingCharacterSpriteUnicode = i8585[31]
  var i8591 = i8585[32]
  var i8590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i8591.length; i += 2) {
  request.r(i8591[i + 0], i8591[i + 1], 1, i8590, '')
  }
  i8584.m_EmojiFallbackTextAssets = i8590
  i8584.m_defaultColorGradientPresetsPath = i8585[33]
  request.r(i8585[34], i8585[35], 0, i8584, 'm_defaultStyleSheet')
  i8584.m_StyleSheetsResourcePath = i8585[36]
  request.r(i8585[37], i8585[38], 0, i8584, 'm_leadingCharacters')
  request.r(i8585[39], i8585[40], 0, i8584, 'm_followingCharacters')
  i8584.m_UseModernHangulLineBreakingRules = !!i8585[41]
  return i8584
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8594 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8595 = data
  request.r(i8595[0], i8595[1], 0, i8594, 'spriteSheet')
  var i8597 = i8595[2]
  var i8596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8597.length; i += 1) {
    i8596.add(request.d('TMPro.TMP_Sprite', i8597[i + 0]));
  }
  i8594.spriteInfoList = i8596
  var i8599 = i8595[3]
  var i8598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8599.length; i += 2) {
  request.r(i8599[i + 0], i8599[i + 1], 1, i8598, '')
  }
  i8594.fallbackSpriteAssets = i8598
  var i8601 = i8595[4]
  var i8600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8601.length; i += 1) {
    i8600.add(request.d('TMPro.TMP_SpriteCharacter', i8601[i + 0]));
  }
  i8594.m_SpriteCharacterTable = i8600
  var i8603 = i8595[5]
  var i8602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8603.length; i += 1) {
    i8602.add(request.d('TMPro.TMP_SpriteGlyph', i8603[i + 0]));
  }
  i8594.m_GlyphTable = i8602
  i8594.m_Version = i8595[6]
  i8594.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8595[7], i8594.m_FaceInfo)
  request.r(i8595[8], i8595[9], 0, i8594, 'm_Material')
  return i8594
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8606 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8607 = data
  i8606.name = i8607[0]
  i8606.hashCode = i8607[1]
  i8606.unicode = i8607[2]
  i8606.pivot = new pc.Vec2( i8607[3], i8607[4] )
  request.r(i8607[5], i8607[6], 0, i8606, 'sprite')
  i8606.id = i8607[7]
  i8606.x = i8607[8]
  i8606.y = i8607[9]
  i8606.width = i8607[10]
  i8606.height = i8607[11]
  i8606.xOffset = i8607[12]
  i8606.yOffset = i8607[13]
  i8606.xAdvance = i8607[14]
  i8606.scale = i8607[15]
  return i8606
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8612 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8613 = data
  i8612.m_Name = i8613[0]
  i8612.m_ElementType = i8613[1]
  i8612.m_Unicode = i8613[2]
  i8612.m_GlyphIndex = i8613[3]
  i8612.m_Scale = i8613[4]
  return i8612
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8616 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8617 = data
  request.r(i8617[0], i8617[1], 0, i8616, 'sprite')
  i8616.m_Index = i8617[2]
  i8616.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8617[3], i8616.m_Metrics)
  i8616.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8617[4], i8616.m_GlyphRect)
  i8616.m_Scale = i8617[5]
  i8616.m_AtlasIndex = i8617[6]
  i8616.m_ClassDefinitionType = i8617[7]
  return i8616
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8618 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8619 = data
  var i8621 = i8619[0]
  var i8620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8621.length; i += 1) {
    i8620.add(request.d('TMPro.TMP_Style', i8621[i + 0]));
  }
  i8618.m_StyleList = i8620
  return i8618
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8624 = root || request.c( 'TMPro.TMP_Style' )
  var i8625 = data
  i8624.m_Name = i8625[0]
  i8624.m_HashCode = i8625[1]
  i8624.m_OpeningDefinition = i8625[2]
  i8624.m_ClosingDefinition = i8625[3]
  i8624.m_OpeningTagArray = i8625[4]
  i8624.m_ClosingTagArray = i8625[5]
  return i8624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8627 = data
  var i8629 = i8627[0]
  var i8628 = []
  for(var i = 0; i < i8629.length; i += 1) {
    i8628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8629[i + 0]) );
  }
  i8626.files = i8628
  i8626.componentToPrefabIds = i8627[1]
  return i8626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8633 = data
  i8632.path = i8633[0]
  request.r(i8633[1], i8633[2], 0, i8632, 'unityObject')
  return i8632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8635 = data
  var i8637 = i8635[0]
  var i8636 = []
  for(var i = 0; i < i8637.length; i += 1) {
    i8636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8637[i + 0]) );
  }
  i8634.scriptsExecutionOrder = i8636
  var i8639 = i8635[1]
  var i8638 = []
  for(var i = 0; i < i8639.length; i += 1) {
    i8638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8639[i + 0]) );
  }
  i8634.sortingLayers = i8638
  var i8641 = i8635[2]
  var i8640 = []
  for(var i = 0; i < i8641.length; i += 1) {
    i8640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8641[i + 0]) );
  }
  i8634.cullingLayers = i8640
  i8634.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8635[3], i8634.timeSettings)
  i8634.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8635[4], i8634.physicsSettings)
  i8634.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8635[5], i8634.physics2DSettings)
  i8634.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8635[6], i8634.qualitySettings)
  i8634.enableRealtimeShadows = !!i8635[7]
  i8634.enableAutoInstancing = !!i8635[8]
  i8634.enableStaticBatching = !!i8635[9]
  i8634.enableDynamicBatching = !!i8635[10]
  i8634.usePreservativeDynamicBatching = !!i8635[11]
  i8634.lightmapEncodingQuality = i8635[12]
  i8634.desiredColorSpace = i8635[13]
  var i8643 = i8635[14]
  var i8642 = []
  for(var i = 0; i < i8643.length; i += 1) {
    i8642.push( i8643[i + 0] );
  }
  i8634.allTags = i8642
  return i8634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8647 = data
  i8646.name = i8647[0]
  i8646.value = i8647[1]
  return i8646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8651 = data
  i8650.id = i8651[0]
  i8650.name = i8651[1]
  i8650.value = i8651[2]
  return i8650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8655 = data
  i8654.id = i8655[0]
  i8654.name = i8655[1]
  return i8654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8657 = data
  i8656.fixedDeltaTime = i8657[0]
  i8656.maximumDeltaTime = i8657[1]
  i8656.timeScale = i8657[2]
  i8656.maximumParticleTimestep = i8657[3]
  return i8656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8659 = data
  i8658.gravity = new pc.Vec3( i8659[0], i8659[1], i8659[2] )
  i8658.defaultSolverIterations = i8659[3]
  i8658.bounceThreshold = i8659[4]
  i8658.autoSyncTransforms = !!i8659[5]
  i8658.autoSimulation = !!i8659[6]
  var i8661 = i8659[7]
  var i8660 = []
  for(var i = 0; i < i8661.length; i += 1) {
    i8660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8661[i + 0]) );
  }
  i8658.collisionMatrix = i8660
  return i8658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8665 = data
  i8664.enabled = !!i8665[0]
  i8664.layerId = i8665[1]
  i8664.otherLayerId = i8665[2]
  return i8664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8667 = data
  request.r(i8667[0], i8667[1], 0, i8666, 'material')
  i8666.gravity = new pc.Vec2( i8667[2], i8667[3] )
  i8666.positionIterations = i8667[4]
  i8666.velocityIterations = i8667[5]
  i8666.velocityThreshold = i8667[6]
  i8666.maxLinearCorrection = i8667[7]
  i8666.maxAngularCorrection = i8667[8]
  i8666.maxTranslationSpeed = i8667[9]
  i8666.maxRotationSpeed = i8667[10]
  i8666.baumgarteScale = i8667[11]
  i8666.baumgarteTOIScale = i8667[12]
  i8666.timeToSleep = i8667[13]
  i8666.linearSleepTolerance = i8667[14]
  i8666.angularSleepTolerance = i8667[15]
  i8666.defaultContactOffset = i8667[16]
  i8666.autoSimulation = !!i8667[17]
  i8666.queriesHitTriggers = !!i8667[18]
  i8666.queriesStartInColliders = !!i8667[19]
  i8666.callbacksOnDisable = !!i8667[20]
  i8666.reuseCollisionCallbacks = !!i8667[21]
  i8666.autoSyncTransforms = !!i8667[22]
  var i8669 = i8667[23]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8669[i + 0]) );
  }
  i8666.collisionMatrix = i8668
  return i8666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8673 = data
  i8672.enabled = !!i8673[0]
  i8672.layerId = i8673[1]
  i8672.otherLayerId = i8673[2]
  return i8672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8675 = data
  var i8677 = i8675[0]
  var i8676 = []
  for(var i = 0; i < i8677.length; i += 1) {
    i8676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8677[i + 0]) );
  }
  i8674.qualityLevels = i8676
  var i8679 = i8675[1]
  var i8678 = []
  for(var i = 0; i < i8679.length; i += 1) {
    i8678.push( i8679[i + 0] );
  }
  i8674.names = i8678
  i8674.shadows = i8675[2]
  i8674.anisotropicFiltering = i8675[3]
  i8674.antiAliasing = i8675[4]
  i8674.lodBias = i8675[5]
  i8674.shadowCascades = i8675[6]
  i8674.shadowDistance = i8675[7]
  i8674.shadowmaskMode = i8675[8]
  i8674.shadowProjection = i8675[9]
  i8674.shadowResolution = i8675[10]
  i8674.softParticles = !!i8675[11]
  i8674.softVegetation = !!i8675[12]
  i8674.activeColorSpace = i8675[13]
  i8674.desiredColorSpace = i8675[14]
  i8674.masterTextureLimit = i8675[15]
  i8674.maxQueuedFrames = i8675[16]
  i8674.particleRaycastBudget = i8675[17]
  i8674.pixelLightCount = i8675[18]
  i8674.realtimeReflectionProbes = !!i8675[19]
  i8674.shadowCascade2Split = i8675[20]
  i8674.shadowCascade4Split = new pc.Vec3( i8675[21], i8675[22], i8675[23] )
  i8674.streamingMipmapsActive = !!i8675[24]
  i8674.vSyncCount = i8675[25]
  i8674.asyncUploadBufferSize = i8675[26]
  i8674.asyncUploadTimeSlice = i8675[27]
  i8674.billboardsFaceCameraPosition = !!i8675[28]
  i8674.shadowNearPlaneOffset = i8675[29]
  i8674.streamingMipmapsMemoryBudget = i8675[30]
  i8674.maximumLODLevel = i8675[31]
  i8674.streamingMipmapsAddAllCameras = !!i8675[32]
  i8674.streamingMipmapsMaxLevelReduction = i8675[33]
  i8674.streamingMipmapsRenderersPerFrame = i8675[34]
  i8674.resolutionScalingFixedDPIFactor = i8675[35]
  i8674.streamingMipmapsMaxFileIORequests = i8675[36]
  i8674.currentQualityLevel = i8675[37]
  return i8674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8685 = data
  i8684.weight = i8685[0]
  i8684.vertices = i8685[1]
  i8684.normals = i8685[2]
  i8684.tangents = i8685[3]
  return i8684
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8686 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8687 = data
  i8686.xPlacement = i8687[0]
  i8686.yPlacement = i8687[1]
  i8686.xAdvance = i8687[2]
  i8686.yAdvance = i8687[3]
  return i8686
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[22],"84":[19],"85":[19],"86":[19],"87":[19],"88":[19],"89":[19],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[22],"105":[10],"106":[107],"108":[107],"35":[34],"25":[24],"109":[37],"110":[34],"111":[39,34],"112":[10],"113":[39,34],"114":[34],"115":[34],"116":[10,34],"42":[34,39],"117":[118],"119":[118],"120":[118],"121":[34],"122":[34],"38":[35],"40":[39,34],"123":[34],"37":[35],"124":[34],"125":[34],"126":[34],"127":[34],"128":[34],"129":[34],"130":[34],"44":[34],"131":[34],"132":[39,34],"133":[34],"134":[34],"135":[34],"136":[34],"137":[39,34],"138":[34],"139":[63],"140":[63],"64":[63],"141":[63],"142":[22],"143":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","HiddenMonster","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","ScaleYoyo","FerrisCabin","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody","WaterRide","UnityEngine.CapsuleCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.CharacterController","FMCharacter","PlayableJoystick","UnityEngine.AudioClip","FM3rdInput","ScreenDeltaInputSystem","FindMonsterPlayerControl","PlayerSO","CharacterFootstep","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","MonsterProgressBar","TMPro.TextMeshProUGUI","UnityEngine.Sprite","UnityEngine.UI.Mask","TMPro.TMP_FontAsset","JumpButton","StoryTextView","HiddenMonsterPanel","UnityEngine.UI.Button","HideButton","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","UnityEngine.LineRenderer","SprunkiHunt","PlayableFrame","SprunkiCard","ConfettiBurst","HorrorSky","MonsterSO","PlayableAudio","LunaController","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ControlsTutorial","DragScroll","ScrollbarArea","SelectHandHint","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "MCH_V02";

Deserializers.lunaInitializationTime = "11/06/2026 06:47:31";

Deserializers.lunaDaysRunning = "2.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_MCH_V02_TrangHTT";

Deserializers.lunaAppID = "43709";

Deserializers.projectId = "3b10544f109594c4dadc61825e5d173f";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1656";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4180";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.MCH_V02";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "0d51a246-a9f2-4dc2-aef9-950efab5f308";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

