var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i751 = data
  i750.position = new pc.Vec3( i751[0], i751[1], i751[2] )
  i750.scale = new pc.Vec3( i751[3], i751[4], i751[5] )
  i750.rotation = new pc.Quat(i751[6], i751[7], i751[8], i751[9])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i753 = data
  i752.type = i753[0]
  i752.color = new pc.Color(i753[1], i753[2], i753[3], i753[4])
  i752.cullingMask = i753[5]
  i752.intensity = i753[6]
  i752.range = i753[7]
  i752.spotAngle = i753[8]
  i752.shadows = i753[9]
  i752.shadowNormalBias = i753[10]
  i752.shadowBias = i753[11]
  i752.shadowStrength = i753[12]
  i752.shadowResolution = i753[13]
  i752.lightmapBakeType = i753[14]
  i752.renderMode = i753[15]
  request.r(i753[16], i753[17], 0, i752, 'cookie')
  i752.cookieSize = i753[18]
  i752.shadowNearPlane = i753[19]
  i752.occlusionMaskChannel = i753[20]
  i752.isBaked = !!i753[21]
  i752.mixedLightingMode = i753[22]
  i752.enabled = !!i753[23]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i755 = data
  i754.name = i755[0]
  i754.tagId = i755[1]
  i754.enabled = !!i755[2]
  i754.isStatic = !!i755[3]
  i754.layer = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i757 = data
  i756.center = new pc.Vec3( i757[0], i757[1], i757[2] )
  i756.size = new pc.Vec3( i757[3], i757[4], i757[5] )
  i756.enabled = !!i757[6]
  i756.isTrigger = !!i757[7]
  request.r(i757[8], i757[9], 0, i756, 'material')
  return i756
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i758 = root || request.c( 'HiddenMonster' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'checkMark')
  request.r(i759[2], i759[3], 0, i758, 'claimFx')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'sharedMesh')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'additionalVertexStreams')
  i762.enabled = !!i763[2]
  request.r(i763[3], i763[4], 0, i762, 'sharedMaterial')
  var i765 = i763[5]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[6]
  i762.shadowCastingMode = i763[7]
  i762.sortingLayerID = i763[8]
  i762.sortingOrder = i763[9]
  i762.lightmapIndex = i763[10]
  i762.lightmapSceneIndex = i763[11]
  i762.lightmapScaleOffset = new pc.Vec4( i763[12], i763[13], i763[14], i763[15] )
  i762.lightProbeUsage = i763[16]
  i762.reflectionProbeUsage = i763[17]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'mesh')
  i768.meshCount = i769[2]
  i768.activeVertexStreamsCount = i769[3]
  i768.alignment = i769[4]
  i768.renderMode = i769[5]
  i768.sortMode = i769[6]
  i768.lengthScale = i769[7]
  i768.velocityScale = i769[8]
  i768.cameraVelocityScale = i769[9]
  i768.normalDirection = i769[10]
  i768.sortingFudge = i769[11]
  i768.minParticleSize = i769[12]
  i768.maxParticleSize = i769[13]
  i768.pivot = new pc.Vec3( i769[14], i769[15], i769[16] )
  request.r(i769[17], i769[18], 0, i768, 'trailMaterial')
  i768.applyActiveColorSpace = !!i769[19]
  i768.enabled = !!i769[20]
  request.r(i769[21], i769[22], 0, i768, 'sharedMaterial')
  var i771 = i769[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.sharedMaterials = i770
  i768.receiveShadows = !!i769[24]
  i768.shadowCastingMode = i769[25]
  i768.sortingLayerID = i769[26]
  i768.sortingOrder = i769[27]
  i768.lightmapIndex = i769[28]
  i768.lightmapSceneIndex = i769[29]
  i768.lightmapScaleOffset = new pc.Vec4( i769[30], i769[31], i769[32], i769[33] )
  i768.lightProbeUsage = i769[34]
  i768.reflectionProbeUsage = i769[35]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i773 = data
  i772.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i773[0], i772.main)
  i772.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i773[1], i772.colorBySpeed)
  i772.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i773[2], i772.colorOverLifetime)
  i772.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i773[3], i772.emission)
  i772.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i773[4], i772.rotationBySpeed)
  i772.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i773[5], i772.rotationOverLifetime)
  i772.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i773[6], i772.shape)
  i772.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i773[7], i772.sizeBySpeed)
  i772.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i773[8], i772.sizeOverLifetime)
  i772.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i773[9], i772.textureSheetAnimation)
  i772.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i773[10], i772.velocityOverLifetime)
  i772.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i773[11], i772.noise)
  i772.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i773[12], i772.inheritVelocity)
  i772.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i773[13], i772.forceOverLifetime)
  i772.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i773[14], i772.limitVelocityOverLifetime)
  i772.useAutoRandomSeed = !!i773[15]
  i772.randomSeed = i773[16]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemMain()
  var i775 = data
  i774.duration = i775[0]
  i774.loop = !!i775[1]
  i774.prewarm = !!i775[2]
  i774.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.startDelay)
  i774.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.startLifetime)
  i774.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[5], i774.startSpeed)
  i774.startSize3D = !!i775[6]
  i774.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[7], i774.startSizeX)
  i774.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[8], i774.startSizeY)
  i774.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[9], i774.startSizeZ)
  i774.startRotation3D = !!i775[10]
  i774.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[11], i774.startRotationX)
  i774.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[12], i774.startRotationY)
  i774.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[13], i774.startRotationZ)
  i774.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[14], i774.startColor)
  i774.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[15], i774.gravityModifier)
  i774.simulationSpace = i775[16]
  request.r(i775[17], i775[18], 0, i774, 'customSimulationSpace')
  i774.simulationSpeed = i775[19]
  i774.useUnscaledTime = !!i775[20]
  i774.scalingMode = i775[21]
  i774.playOnAwake = !!i775[22]
  i774.maxParticles = i775[23]
  i774.emitterVelocityMode = i775[24]
  i774.stopAction = i775[25]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i776 = root || new pc.MinMaxCurve()
  var i777 = data
  i776.mode = i777[0]
  i776.curveMin = new pc.AnimationCurve( { keys_flow: i777[1] } )
  i776.curveMax = new pc.AnimationCurve( { keys_flow: i777[2] } )
  i776.curveMultiplier = i777[3]
  i776.constantMin = i777[4]
  i776.constantMax = i777[5]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i778 = root || new pc.MinMaxGradient()
  var i779 = data
  i778.mode = i779[0]
  i778.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i779[1], i778.gradientMin)
  i778.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i779[2], i778.gradientMax)
  i778.colorMin = new pc.Color(i779[3], i779[4], i779[5], i779[6])
  i778.colorMax = new pc.Color(i779[7], i779[8], i779[9], i779[10])
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i781 = data
  i780.mode = i781[0]
  var i783 = i781[1]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i783[i + 0]) );
  }
  i780.colorKeys = i782
  var i785 = i781[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i785[i + 0]) );
  }
  i780.alphaKeys = i784
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemColorBySpeed()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i787[1], i786.color)
  i786.range = new pc.Vec2( i787[2], i787[3] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i791 = data
  i790.color = new pc.Color(i791[0], i791[1], i791[2], i791[3])
  i790.time = i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i795 = data
  i794.alpha = i795[0]
  i794.time = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemColorOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i797[1], i796.color)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemEmitter()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.rateOverTime)
  i798.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.rateOverDistance)
  var i801 = i799[3]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i801[i + 0]) );
  }
  i798.bursts = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemBurst()
  var i805 = data
  i804.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[0], i804.count)
  i804.cycleCount = i805[1]
  i804.minCount = i805[2]
  i804.maxCount = i805[3]
  i804.repeatInterval = i805[4]
  i804.time = i805[5]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemRotationBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  i806.range = new pc.Vec2( i807[5], i807[6] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemRotationOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemShape()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.shapeType = i811[1]
  i810.randomDirectionAmount = i811[2]
  i810.sphericalDirectionAmount = i811[3]
  i810.randomPositionAmount = i811[4]
  i810.alignToDirection = !!i811[5]
  i810.radius = i811[6]
  i810.radiusMode = i811[7]
  i810.radiusSpread = i811[8]
  i810.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[9], i810.radiusSpeed)
  i810.radiusThickness = i811[10]
  i810.angle = i811[11]
  i810.length = i811[12]
  i810.boxThickness = new pc.Vec3( i811[13], i811[14], i811[15] )
  i810.meshShapeType = i811[16]
  request.r(i811[17], i811[18], 0, i810, 'mesh')
  request.r(i811[19], i811[20], 0, i810, 'meshRenderer')
  request.r(i811[21], i811[22], 0, i810, 'skinnedMeshRenderer')
  i810.useMeshMaterialIndex = !!i811[23]
  i810.meshMaterialIndex = i811[24]
  i810.useMeshColors = !!i811[25]
  i810.normalOffset = i811[26]
  i810.arc = i811[27]
  i810.arcMode = i811[28]
  i810.arcSpread = i811[29]
  i810.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[30], i810.arcSpeed)
  i810.donutRadius = i811[31]
  i810.position = new pc.Vec3( i811[32], i811[33], i811[34] )
  i810.rotation = new pc.Vec3( i811[35], i811[36], i811[37] )
  i810.scale = new pc.Vec3( i811[38], i811[39], i811[40] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemSizeBySpeed()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  i812.range = new pc.Vec2( i813[5], i813[6] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemSizeOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.separateAxes = !!i815[4]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.mode = i817[1]
  i816.animation = i817[2]
  i816.numTilesX = i817[3]
  i816.numTilesY = i817[4]
  i816.useRandomRow = !!i817[5]
  i816.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[6], i816.frameOverTime)
  i816.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[7], i816.startFrame)
  i816.cycleCount = i817[8]
  i816.rowIndex = i817[9]
  i816.flipU = i817[10]
  i816.flipV = i817[11]
  i816.spriteCount = i817[12]
  var i819 = i817[13]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sprites = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.radial)
  i822.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[5], i822.speedModifier)
  i822.space = i823[6]
  i822.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[7], i822.orbitalX)
  i822.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[8], i822.orbitalY)
  i822.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[9], i822.orbitalZ)
  i822.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[10], i822.orbitalOffsetX)
  i822.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[11], i822.orbitalOffsetY)
  i822.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[12], i822.orbitalOffsetZ)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemNoise()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.separateAxes = !!i825[1]
  i824.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.strengthX)
  i824.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.strengthY)
  i824.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[4], i824.strengthZ)
  i824.frequency = i825[5]
  i824.damping = !!i825[6]
  i824.octaveCount = i825[7]
  i824.octaveMultiplier = i825[8]
  i824.octaveScale = i825[9]
  i824.quality = i825[10]
  i824.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[11], i824.scrollSpeed)
  i824.scrollSpeedMultiplier = i825[12]
  i824.remapEnabled = !!i825[13]
  i824.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[14], i824.remapX)
  i824.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[15], i824.remapY)
  i824.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[16], i824.remapZ)
  i824.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[17], i824.positionAmount)
  i824.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[18], i824.rotationAmount)
  i824.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[19], i824.sizeAmount)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemInheritVelocity()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.mode = i827[1]
  i826.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.curve)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemForceOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.space = i829[4]
  i828.randomized = !!i829[5]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.limit)
  i830.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.limitX)
  i830.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.limitY)
  i830.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[4], i830.limitZ)
  i830.dampen = i831[5]
  i830.separateAxes = !!i831[6]
  i830.space = i831[7]
  i830.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[8], i830.drag)
  i830.multiplyDragByParticleSize = !!i831[9]
  i830.multiplyDragByParticleVelocity = !!i831[10]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'sharedMesh')
  i832.convex = !!i833[2]
  i832.enabled = !!i833[3]
  i832.isTrigger = !!i833[4]
  request.r(i833[5], i833[6], 0, i832, 'material')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i835 = data
  i834.mass = i835[0]
  i834.drag = i835[1]
  i834.angularDrag = i835[2]
  i834.useGravity = !!i835[3]
  i834.isKinematic = !!i835[4]
  i834.constraints = i835[5]
  i834.maxAngularVelocity = i835[6]
  i834.collisionDetectionMode = i835[7]
  i834.interpolation = i835[8]
  return i834
}

Deserializers["PortalGlow"] = function (request, data, root) {
  var i836 = root || request.c( 'PortalGlow' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'surface')
  request.r(i837[2], i837[3], 0, i836, 'swirl')
  i836.glowColor = new pc.Color(i837[4], i837[5], i837[6], i837[7])
  i836.pulseSpeed = i837[8]
  i836.pulseScale = i837[9]
  i836.rampDuration = i837[10]
  return i836
}

Deserializers["TeleportPortal"] = function (request, data, root) {
  var i838 = root || request.c( 'TeleportPortal' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'planet')
  request.r(i839[2], i839[3], 0, i838, 'pos')
  i838.isPlanet = !!i839[4]
  i838.touchPadding = new pc.Vec3( i839[5], i839[6], i839[7] )
  i838.teleportSound = request.d('FMAudio', i839[8], i838.teleportSound)
  return i838
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i840 = root || request.c( 'FMAudio' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'clip')
  i840.channel = i841[2]
  i840.volume = i841[3]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i843 = data
  i842.color = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  request.r(i843[4], i843[5], 0, i842, 'sprite')
  i842.flipX = !!i843[6]
  i842.flipY = !!i843[7]
  i842.drawMode = i843[8]
  i842.size = new pc.Vec2( i843[9], i843[10] )
  i842.tileMode = i843[11]
  i842.adaptiveModeThreshold = i843[12]
  i842.maskInteraction = i843[13]
  i842.spriteSortPoint = i843[14]
  i842.enabled = !!i843[15]
  request.r(i843[16], i843[17], 0, i842, 'sharedMaterial')
  var i845 = i843[18]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[19]
  i842.shadowCastingMode = i843[20]
  i842.sortingLayerID = i843[21]
  i842.sortingOrder = i843[22]
  i842.lightmapIndex = i843[23]
  i842.lightmapSceneIndex = i843[24]
  i842.lightmapScaleOffset = new pc.Vec4( i843[25], i843[26], i843[27], i843[28] )
  i842.lightProbeUsage = i843[29]
  i842.reflectionProbeUsage = i843[30]
  return i842
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i846 = root || request.c( 'ScaleYoyo' )
  var i847 = data
  i846.delay = i847[0]
  i846.duration = i847[1]
  i846.easeType = i847[2]
  i846.loops = i847[3]
  i846.loopType = i847[4]
  i846.animationType = i847[5]
  i846.endValueV3 = new pc.Vec3( i847[6], i847[7], i847[8] )
  i846.isRelative = !!i847[9]
  i846.autoPlay = !!i847[10]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.radius = i849[3]
  i848.enabled = !!i849[4]
  i848.isTrigger = !!i849[5]
  request.r(i849[6], i849[7], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i851 = data
  i850.name = i851[0]
  i850.halfPrecision = !!i851[1]
  i850.useSimplification = !!i851[2]
  i850.useUInt32IndexFormat = !!i851[3]
  i850.vertexCount = i851[4]
  i850.aabb = i851[5]
  var i853 = i851[6]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( !!i853[i + 0] );
  }
  i850.streams = i852
  i850.vertices = i851[7]
  var i855 = i851[8]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i855[i + 0]) );
  }
  i850.subMeshes = i854
  var i857 = i851[9]
  var i856 = []
  for(var i = 0; i < i857.length; i += 16) {
    i856.push( new pc.Mat4().setData(i857[i + 0], i857[i + 1], i857[i + 2], i857[i + 3],  i857[i + 4], i857[i + 5], i857[i + 6], i857[i + 7],  i857[i + 8], i857[i + 9], i857[i + 10], i857[i + 11],  i857[i + 12], i857[i + 13], i857[i + 14], i857[i + 15]) );
  }
  i850.bindposes = i856
  var i859 = i851[10]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i859[i + 0]) );
  }
  i850.blendShapes = i858
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i865 = data
  i864.triangles = i865[0]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i871 = data
  i870.name = i871[0]
  var i873 = i871[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i873[i + 0]) );
  }
  i870.frames = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i874 = root || new pc.UnityMaterial()
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'shader')
  i874.renderQueue = i875[3]
  i874.enableInstancing = !!i875[4]
  var i877 = i875[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i877[i + 0]) );
  }
  i874.floatParameters = i876
  var i879 = i875[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i879[i + 0]) );
  }
  i874.colorParameters = i878
  var i881 = i875[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i881[i + 0]) );
  }
  i874.vectorParameters = i880
  var i883 = i875[8]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i883[i + 0]) );
  }
  i874.textureParameters = i882
  var i885 = i875[9]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i885[i + 0]) );
  }
  i874.materialFlags = i884
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i893 = data
  i892.name = i893[0]
  i892.value = new pc.Color(i893[1], i893[2], i893[3], i893[4])
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i897 = data
  i896.name = i897[0]
  i896.value = new pc.Vec4( i897[1], i897[2], i897[3], i897[4] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i901 = data
  i900.name = i901[0]
  request.r(i901[1], i901[2], 0, i900, 'value')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i905 = data
  i904.name = i905[0]
  i904.enabled = !!i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i907 = data
  i906.name = i907[0]
  i906.width = i907[1]
  i906.height = i907[2]
  i906.mipmapCount = i907[3]
  i906.anisoLevel = i907[4]
  i906.filterMode = i907[5]
  i906.hdr = !!i907[6]
  i906.format = i907[7]
  i906.wrapMode = i907[8]
  i906.alphaIsTransparency = !!i907[9]
  i906.alphaSource = i907[10]
  i906.graphicsFormat = i907[11]
  i906.sRGBTexture = !!i907[12]
  i906.desiredColorSpace = i907[13]
  i906.wrapU = i907[14]
  i906.wrapV = i907[15]
  return i906
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i908 = root || request.c( 'FindMonsterManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'database')
  var i911 = i909[2]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908.listRespawn = i910
  request.r(i909[3], i909[4], 0, i908, 'playerTransform')
  request.r(i909[5], i909[6], 0, i908, 'targetTutorial')
  request.r(i909[7], i909[8], 0, i908, 'arrowTut')
  var i913 = i909[9]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 1, i912, '')
  }
  i908.monsters = i912
  i908.playerTouchSize = new pc.Vec3( i909[10], i909[11], i909[12] )
  request.r(i909[13], i909[14], 0, i908, 'hiddenMonsterPanel')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i919 = data
  i918.textureMode = i919[0]
  i918.alignment = i919[1]
  i918.widthCurve = new pc.AnimationCurve( { keys_flow: i919[2] } )
  i918.colorGradient = i919[3] ? new pc.ColorGradient(i919[3][0], i919[3][1], i919[3][2]) : null
  var i921 = i919[4]
  var i920 = []
  for(var i = 0; i < i921.length; i += 3) {
    i920.push( new pc.Vec3( i921[i + 0], i921[i + 1], i921[i + 2] ) );
  }
  i918.positions = i920
  i918.positionCount = i919[5]
  i918.widthMultiplier = i919[6]
  i918.startWidth = i919[7]
  i918.endWidth = i919[8]
  i918.numCornerVertices = i919[9]
  i918.numCapVertices = i919[10]
  i918.useWorldSpace = !!i919[11]
  i918.loop = !!i919[12]
  i918.startColor = new pc.Color(i919[13], i919[14], i919[15], i919[16])
  i918.endColor = new pc.Color(i919[17], i919[18], i919[19], i919[20])
  i918.generateLightingData = !!i919[21]
  i918.enabled = !!i919[22]
  request.r(i919[23], i919[24], 0, i918, 'sharedMaterial')
  var i923 = i919[25]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i918.sharedMaterials = i922
  i918.receiveShadows = !!i919[26]
  i918.shadowCastingMode = i919[27]
  i918.sortingLayerID = i919[28]
  i918.sortingOrder = i919[29]
  i918.lightmapIndex = i919[30]
  i918.lightmapSceneIndex = i919[31]
  i918.lightmapScaleOffset = new pc.Vec4( i919[32], i919[33], i919[34], i919[35] )
  i918.lightProbeUsage = i919[36]
  i918.reflectionProbeUsage = i919[37]
  return i918
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i926 = root || request.c( 'TurtorialArrow' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'lineRenderer')
  i926.offset = new pc.Vec3( i927[2], i927[3], i927[4] )
  i926.planetSegments = i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i929 = data
  i928.pivot = new pc.Vec2( i929[0], i929[1] )
  i928.anchorMin = new pc.Vec2( i929[2], i929[3] )
  i928.anchorMax = new pc.Vec2( i929[4], i929[5] )
  i928.sizeDelta = new pc.Vec2( i929[6], i929[7] )
  i928.anchoredPosition3D = new pc.Vec3( i929[8], i929[9], i929[10] )
  i928.rotation = new pc.Quat(i929[11], i929[12], i929[13], i929[14])
  i928.scale = new pc.Vec3( i929[15], i929[16], i929[17] )
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i931 = data
  i930.planeDistance = i931[0]
  i930.referencePixelsPerUnit = i931[1]
  i930.isFallbackOverlay = !!i931[2]
  i930.renderMode = i931[3]
  i930.renderOrder = i931[4]
  i930.sortingLayerName = i931[5]
  i930.sortingOrder = i931[6]
  i930.scaleFactor = i931[7]
  request.r(i931[8], i931[9], 0, i930, 'worldCamera')
  i930.overrideSorting = !!i931[10]
  i930.pixelPerfect = !!i931[11]
  i930.targetDisplay = i931[12]
  i930.overridePixelPerfect = !!i931[13]
  i930.enabled = !!i931[14]
  return i930
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i933 = data
  i932.m_UiScaleMode = i933[0]
  i932.m_ReferencePixelsPerUnit = i933[1]
  i932.m_ScaleFactor = i933[2]
  i932.m_ReferenceResolution = new pc.Vec2( i933[3], i933[4] )
  i932.m_ScreenMatchMode = i933[5]
  i932.m_MatchWidthOrHeight = i933[6]
  i932.m_PhysicalUnit = i933[7]
  i932.m_FallbackScreenDPI = i933[8]
  i932.m_DefaultSpriteDPI = i933[9]
  i932.m_DynamicPixelsPerUnit = i933[10]
  i932.m_PresetInfoIsWorld = !!i933[11]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i935 = data
  i934.m_Alpha = i935[0]
  i934.m_Interactable = !!i935[1]
  i934.m_BlocksRaycasts = !!i935[2]
  i934.m_IgnoreParentGroups = !!i935[3]
  i934.enabled = !!i935[4]
  return i934
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i937 = data
  i936.m_IgnoreReversedGraphics = !!i937[0]
  i936.m_BlockingObjects = i937[1]
  i936.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i937[2] )
  return i936
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i938 = root || request.c( 'HiddenMonsterPanel' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'icon')
  i938.openSound = request.d('FMAudio', i939[2], i938.openSound)
  request.r(i939[3], i939[4], 0, i938, 'popRoot')
  i938.popDuration = i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i941 = data
  i940.cullTransparentMesh = !!i941[0]
  return i940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Image' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Sprite')
  i942.m_Type = i943[2]
  i942.m_PreserveAspect = !!i943[3]
  i942.m_FillCenter = !!i943[4]
  i942.m_FillMethod = i943[5]
  i942.m_FillAmount = i943[6]
  i942.m_FillClockwise = !!i943[7]
  i942.m_FillOrigin = i943[8]
  i942.m_UseSpriteMesh = !!i943[9]
  i942.m_PixelsPerUnitMultiplier = i943[10]
  request.r(i943[11], i943[12], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[13]
  i942.m_Color = new pc.Color(i943[14], i943[15], i943[16], i943[17])
  i942.m_RaycastTarget = !!i943[18]
  i942.m_RaycastPadding = new pc.Vec4( i943[19], i943[20], i943[21], i943[22] )
  return i942
}

Deserializers["GameButton"] = function (request, data, root) {
  var i944 = root || request.c( 'GameButton' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'background')
  request.r(i945[2], i945[3], 0, i944, 'icon')
  request.r(i945[4], i945[5], 0, i944, 'title')
  i944.scale = new pc.Vec3( i945[6], i945[7], i945[8] )
  i944.pressAudio = request.d('FMAudio', i945[9], i944.pressAudio)
  i944.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i945[10], i944.m_OnClick)
  i944.m_Navigation = request.d('UnityEngine.UI.Navigation', i945[11], i944.m_Navigation)
  i944.m_Transition = i945[12]
  i944.m_Colors = request.d('UnityEngine.UI.ColorBlock', i945[13], i944.m_Colors)
  i944.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i945[14], i944.m_SpriteState)
  i944.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i945[15], i944.m_AnimationTriggers)
  i944.m_Interactable = !!i945[16]
  request.r(i945[17], i945[18], 0, i944, 'm_TargetGraphic')
  return i944
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i947 = data
  i946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i947[0], i946.m_PersistentCalls)
  return i946
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('UnityEngine.Events.PersistentCall', i951[i + 0]));
  }
  i948.m_Calls = i950
  return i948
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'm_Target')
  i954.m_TargetAssemblyTypeName = i955[2]
  i954.m_MethodName = i955[3]
  i954.m_Mode = i955[4]
  i954.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i955[5], i954.m_Arguments)
  i954.m_CallState = i955[6]
  return i954
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i957 = data
  i956.m_Mode = i957[0]
  i956.m_WrapAround = !!i957[1]
  request.r(i957[2], i957[3], 0, i956, 'm_SelectOnUp')
  request.r(i957[4], i957[5], 0, i956, 'm_SelectOnDown')
  request.r(i957[6], i957[7], 0, i956, 'm_SelectOnLeft')
  request.r(i957[8], i957[9], 0, i956, 'm_SelectOnRight')
  return i956
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i959 = data
  i958.m_NormalColor = new pc.Color(i959[0], i959[1], i959[2], i959[3])
  i958.m_HighlightedColor = new pc.Color(i959[4], i959[5], i959[6], i959[7])
  i958.m_PressedColor = new pc.Color(i959[8], i959[9], i959[10], i959[11])
  i958.m_SelectedColor = new pc.Color(i959[12], i959[13], i959[14], i959[15])
  i958.m_DisabledColor = new pc.Color(i959[16], i959[17], i959[18], i959[19])
  i958.m_ColorMultiplier = i959[20]
  i958.m_FadeDuration = i959[21]
  return i958
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_HighlightedSprite')
  request.r(i961[2], i961[3], 0, i960, 'm_PressedSprite')
  request.r(i961[4], i961[5], 0, i960, 'm_SelectedSprite')
  request.r(i961[6], i961[7], 0, i960, 'm_DisabledSprite')
  return i960
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i963 = data
  i962.m_NormalTrigger = i963[0]
  i962.m_HighlightedTrigger = i963[1]
  i962.m_PressedTrigger = i963[2]
  i962.m_SelectedTrigger = i963[3]
  i962.m_DisabledTrigger = i963[4]
  return i962
}

Deserializers["HideButton"] = function (request, data, root) {
  var i964 = root || request.c( 'HideButton' )
  var i965 = data
  return i964
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_ObjectArgument')
  i966.m_ObjectArgumentAssemblyTypeName = i967[2]
  i966.m_IntArgument = i967[3]
  i966.m_FloatArgument = i967[4]
  i966.m_StringArgument = i967[5]
  i966.m_BoolArgument = !!i967[6]
  return i966
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i969 = data
  i968.m_hasFontAssetChanged = !!i969[0]
  request.r(i969[1], i969[2], 0, i968, 'm_baseMaterial')
  i968.m_maskOffset = new pc.Vec4( i969[3], i969[4], i969[5], i969[6] )
  i968.m_text = i969[7]
  i968.m_isRightToLeft = !!i969[8]
  request.r(i969[9], i969[10], 0, i968, 'm_fontAsset')
  request.r(i969[11], i969[12], 0, i968, 'm_sharedMaterial')
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.m_fontSharedMaterials = i970
  request.r(i969[14], i969[15], 0, i968, 'm_fontMaterial')
  var i973 = i969[16]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i968.m_fontMaterials = i972
  i968.m_fontColor32 = UnityEngine.Color32.ConstructColor(i969[17], i969[18], i969[19], i969[20])
  i968.m_fontColor = new pc.Color(i969[21], i969[22], i969[23], i969[24])
  i968.m_enableVertexGradient = !!i969[25]
  i968.m_colorMode = i969[26]
  i968.m_fontColorGradient = request.d('TMPro.VertexGradient', i969[27], i968.m_fontColorGradient)
  request.r(i969[28], i969[29], 0, i968, 'm_fontColorGradientPreset')
  request.r(i969[30], i969[31], 0, i968, 'm_spriteAsset')
  i968.m_tintAllSprites = !!i969[32]
  request.r(i969[33], i969[34], 0, i968, 'm_StyleSheet')
  i968.m_TextStyleHashCode = i969[35]
  i968.m_overrideHtmlColors = !!i969[36]
  i968.m_faceColor = UnityEngine.Color32.ConstructColor(i969[37], i969[38], i969[39], i969[40])
  i968.m_fontSize = i969[41]
  i968.m_fontSizeBase = i969[42]
  i968.m_fontWeight = i969[43]
  i968.m_enableAutoSizing = !!i969[44]
  i968.m_fontSizeMin = i969[45]
  i968.m_fontSizeMax = i969[46]
  i968.m_fontStyle = i969[47]
  i968.m_HorizontalAlignment = i969[48]
  i968.m_VerticalAlignment = i969[49]
  i968.m_textAlignment = i969[50]
  i968.m_characterSpacing = i969[51]
  i968.m_characterHorizontalScale = i969[52]
  i968.m_wordSpacing = i969[53]
  i968.m_lineSpacing = i969[54]
  i968.m_lineSpacingMax = i969[55]
  i968.m_paragraphSpacing = i969[56]
  i968.m_charWidthMaxAdj = i969[57]
  i968.m_TextWrappingMode = i969[58]
  i968.m_wordWrappingRatios = i969[59]
  i968.m_overflowMode = i969[60]
  request.r(i969[61], i969[62], 0, i968, 'm_linkedTextComponent')
  request.r(i969[63], i969[64], 0, i968, 'parentLinkedComponent')
  i968.m_enableKerning = !!i969[65]
  var i975 = i969[66]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(i975[i + 0]);
  }
  i968.m_ActiveFontFeatures = i974
  i968.m_enableExtraPadding = !!i969[67]
  i968.checkPaddingRequired = !!i969[68]
  i968.m_isRichText = !!i969[69]
  i968.m_parseCtrlCharacters = !!i969[70]
  i968.m_isOrthographic = !!i969[71]
  i968.m_isCullingEnabled = !!i969[72]
  i968.m_horizontalMapping = i969[73]
  i968.m_verticalMapping = i969[74]
  i968.m_uvLineOffset = i969[75]
  i968.m_geometrySortingOrder = i969[76]
  i968.m_IsTextObjectScaleStatic = !!i969[77]
  i968.m_VertexBufferAutoSizeReduction = !!i969[78]
  i968.m_useMaxVisibleDescender = !!i969[79]
  i968.m_pageToDisplay = i969[80]
  i968.m_margin = new pc.Vec4( i969[81], i969[82], i969[83], i969[84] )
  i968.m_isUsingLegacyAnimationComponent = !!i969[85]
  i968.m_isVolumetricText = !!i969[86]
  request.r(i969[87], i969[88], 0, i968, 'm_Material')
  i968.m_EmojiFallbackSupport = !!i969[89]
  i968.m_Maskable = !!i969[90]
  i968.m_Color = new pc.Color(i969[91], i969[92], i969[93], i969[94])
  i968.m_RaycastTarget = !!i969[95]
  i968.m_RaycastPadding = new pc.Vec4( i969[96], i969[97], i969[98], i969[99] )
  return i968
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.VertexGradient' )
  var i977 = data
  i976.topLeft = new pc.Color(i977[0], i977[1], i977[2], i977[3])
  i976.topRight = new pc.Color(i977[4], i977[5], i977[6], i977[7])
  i976.bottomLeft = new pc.Color(i977[8], i977[9], i977[10], i977[11])
  i976.bottomRight = new pc.Color(i977[12], i977[13], i977[14], i977[15])
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i981 = data
  i980.name = i981[0]
  i980.atlasId = i981[1]
  i980.mipmapCount = i981[2]
  i980.hdr = !!i981[3]
  i980.size = i981[4]
  i980.anisoLevel = i981[5]
  i980.filterMode = i981[6]
  var i983 = i981[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 4) {
    i982.push( UnityEngine.Rect.MinMaxRect(i983[i + 0], i983[i + 1], i983[i + 2], i983[i + 3]) );
  }
  i980.rects = i982
  i980.wrapU = i981[8]
  i980.wrapV = i981[9]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i987 = data
  i986.name = i987[0]
  i986.index = i987[1]
  i986.startup = !!i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i989 = data
  i988.aspect = i989[0]
  i988.orthographic = !!i989[1]
  i988.orthographicSize = i989[2]
  i988.backgroundColor = new pc.Color(i989[3], i989[4], i989[5], i989[6])
  i988.nearClipPlane = i989[7]
  i988.farClipPlane = i989[8]
  i988.fieldOfView = i989[9]
  i988.depth = i989[10]
  i988.clearFlags = i989[11]
  i988.cullingMask = i989[12]
  i988.rect = i989[13]
  request.r(i989[14], i989[15], 0, i988, 'targetTexture')
  i988.usePhysicalProperties = !!i989[16]
  i988.focalLength = i989[17]
  i988.sensorSize = new pc.Vec2( i989[18], i989[19] )
  i988.lensShift = new pc.Vec2( i989[20], i989[21] )
  i988.gateFit = i989[22]
  i988.commandBufferCount = i989[23]
  i988.cameraType = i989[24]
  i988.enabled = !!i989[25]
  return i988
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i990 = root || request.c( 'ScreenDeltaInputSystem' )
  var i991 = data
  return i990
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i992 = root || request.c( 'MonsterProgressBar' )
  var i993 = data
  i992.countSceneMonsters = !!i993[0]
  i992.startFound = i993[1]
  i992.total = i993[2]
  request.r(i993[3], i993[4], 0, i992, 'fill')
  request.r(i993[5], i993[6], 0, i992, 'countText')
  request.r(i993[7], i993[8], 0, i992, 'icon')
  i992.fillSpeed = i993[9]
  return i992
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Mask' )
  var i995 = data
  i994.m_ShowMaskGraphic = !!i995[0]
  return i994
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i996 = root || request.c( 'StoryTextView' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'label')
  i996.popDuration = i997[2]
  i996.pulseAmount = i997[3]
  i996.pulseSpeed = i997[4]
  i996.fadeDuration = i997[5]
  return i996
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Button' )
  var i999 = data
  i998.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i999[0], i998.m_OnClick)
  i998.m_Navigation = request.d('UnityEngine.UI.Navigation', i999[1], i998.m_Navigation)
  i998.m_Transition = i999[2]
  i998.m_Colors = request.d('UnityEngine.UI.ColorBlock', i999[3], i998.m_Colors)
  i998.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i999[4], i998.m_SpriteState)
  i998.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i999[5], i998.m_AnimationTriggers)
  i998.m_Interactable = !!i999[6]
  request.r(i999[7], i999[8], 0, i998, 'm_TargetGraphic')
  return i998
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i1000 = root || request.c( 'JumpButton' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'character')
  return i1000
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i1002 = root || request.c( 'PlayableJoystick' )
  var i1003 = data
  i1002.handleRange = i1003[0]
  i1002.deadZone = i1003[1]
  i1002.floating = !!i1003[2]
  request.r(i1003[3], i1003[4], 0, i1002, 'background')
  request.r(i1003[5], i1003[6], 0, i1002, 'knob')
  return i1002
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i1004 = root || request.c( 'FMCharacter' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'planetTransform')
  request.r(i1005[2], i1005[3], 0, i1004, 'animator')
  request.r(i1005[4], i1005[5], 0, i1004, 'joystick')
  i1004._rotationRate = i1005[6]
  i1004._maxWalkSpeed = i1005[7]
  i1004._maxAcceleration = i1005[8]
  i1004._brakingDecelerationWalking = i1005[9]
  i1004._airControl = i1005[10]
  i1004._jumpImpulse = i1005[11]
  i1004._gravity = new pc.Vec3( i1005[12], i1005[13], i1005[14] )
  i1004._gravityScale = i1005[15]
  request.r(i1005[16], i1005[17], 0, i1004, '_camera')
  i1004.jumpSound = request.d('FMAudio', i1005[18], i1004.jumpSound)
  i1004.stepHeight = i1005[19]
  return i1004
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i1006 = root || request.c( 'FM3rdInput' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'followTarget')
  i1006.followDistance = i1007[2]
  i1006.followMinDistance = i1007[3]
  i1006.followMaxDistance = i1007[4]
  i1006.maxPitch = i1007[5]
  i1006.minPitch = i1007[6]
  i1006.invertLook = !!i1007[7]
  i1006.lookSensitivity = new pc.Vec2( i1007[8], i1007[9] )
  request.r(i1007[10], i1007[11], 0, i1006, 'planetTransform')
  i1006.cameraDistance = i1007[12]
  i1006.cameraRadius = i1007[13]
  request.r(i1007[14], i1007[15], 0, i1006, 'cam')
  request.r(i1007[16], i1007[17], 0, i1006, 'lookArea')
  i1006.extraRoll = i1007[18]
  i1006.autoReturnDelay = i1007[19]
  i1006.autoReturnSpeed = i1007[20]
  i1006.defaultPitch = i1007[21]
  i1006.enableAutoReturn = !!i1007[22]
  i1006.forwardSpeedMultiplier = i1007[23]
  i1006.backwardSpeedMultiplier = i1007[24]
  return i1006
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i1008 = root || request.c( 'FindMonsterPlayerControl' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'playerSO')
  request.r(i1009[2], i1009[3], 0, i1008, 'playerBase')
  request.r(i1009[4], i1009[5], 0, i1008, 'morphRoot')
  request.r(i1009[6], i1009[7], 0, i1008, 'poopFx')
  request.r(i1009[8], i1009[9], 0, i1008, 'poopRoot')
  request.r(i1009[10], i1009[11], 0, i1008, 'trailSpeed')
  i1008.popSound = request.d('FMAudio', i1009[12], i1008.popSound)
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.center = new pc.Vec3( i1011[1], i1011[2], i1011[3] )
  i1010.radius = i1011[4]
  i1010.height = i1011[5]
  i1010.minMoveDistance = i1011[6]
  i1010.skinWidth = i1011[7]
  i1010.enableOverlapRecovery = !!i1011[8]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'animatorController')
  request.r(i1013[2], i1013[3], 0, i1012, 'avatar')
  i1012.updateMode = i1013[4]
  i1012.hasTransformHierarchy = !!i1013[5]
  i1012.applyRootMotion = !!i1013[6]
  var i1015 = i1013[7]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1012.humanBones = i1014
  i1012.enabled = !!i1013[8]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'sharedMesh')
  var i1021 = i1019[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.bones = i1020
  i1018.updateWhenOffscreen = !!i1019[3]
  i1018.localBounds = i1019[4]
  request.r(i1019[5], i1019[6], 0, i1018, 'rootBone')
  var i1023 = i1019[7]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1023[i + 0]) );
  }
  i1018.blendShapesWeights = i1022
  i1018.enabled = !!i1019[8]
  request.r(i1019[9], i1019[10], 0, i1018, 'sharedMaterial')
  var i1025 = i1019[11]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1018.sharedMaterials = i1024
  i1018.receiveShadows = !!i1019[12]
  i1018.shadowCastingMode = i1019[13]
  i1018.sortingLayerID = i1019[14]
  i1018.sortingOrder = i1019[15]
  i1018.lightmapIndex = i1019[16]
  i1018.lightmapSceneIndex = i1019[17]
  i1018.lightmapScaleOffset = new pc.Vec4( i1019[18], i1019[19], i1019[20], i1019[21] )
  i1018.lightProbeUsage = i1019[22]
  i1018.reflectionProbeUsage = i1019[23]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1029 = data
  i1028.weight = i1029[0]
  return i1028
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i1030 = root || request.c( 'CharacterFootstep' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'ecmCharacter')
  i1030.audioSource = request.d('FMAudio', i1031[2], i1030.audioSource)
  i1030.speed = i1031[3]
  return i1030
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_FirstSelected')
  i1032.m_sendNavigationEvents = !!i1033[2]
  i1032.m_DragThreshold = i1033[3]
  return i1032
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1035 = data
  i1034.m_HorizontalAxis = i1035[0]
  i1034.m_VerticalAxis = i1035[1]
  i1034.m_SubmitButton = i1035[2]
  i1034.m_CancelButton = i1035[3]
  i1034.m_InputActionsPerSecond = i1035[4]
  i1034.m_RepeatDelay = i1035[5]
  i1034.m_ForceModuleActive = !!i1035[6]
  i1034.m_SendPointerHoverToParent = !!i1035[7]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'clip')
  request.r(i1037[2], i1037[3], 0, i1036, 'outputAudioMixerGroup')
  i1036.playOnAwake = !!i1037[4]
  i1036.loop = !!i1037[5]
  i1036.time = i1037[6]
  i1036.volume = i1037[7]
  i1036.pitch = i1037[8]
  i1036.enabled = !!i1037[9]
  return i1036
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i1038 = root || request.c( 'PlayableAudio' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'source')
  request.r(i1039[2], i1039[3], 0, i1038, 'buttonClick')
  return i1038
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1040 = root || request.c( 'LunaController' )
  var i1041 = data
  i1040.LimitTimePlay = !!i1041[0]
  i1040.TimePlay = i1041[1]
  request.r(i1041[2], i1041[3], 0, i1040, 'BGM')
  request.r(i1041[4], i1041[5], 0, i1040, 'musicSource')
  i1040.musicVolume = i1041[6]
  var i1043 = i1041[7]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1040.CTA = i1042
  request.r(i1041[8], i1041[9], 0, i1040, 'endCard')
  return i1040
}

Deserializers["PointerHand"] = function (request, data, root) {
  var i1046 = root || request.c( 'PointerHand' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'pivot')
  request.r(i1047[2], i1047[3], 0, i1046, 'visual')
  request.r(i1047[4], i1047[5], 0, i1046, 'ripple')
  i1046.height = i1047[6]
  i1046.fingerDirection = new pc.Vec2( i1047[7], i1047[8] )
  i1046.cycle = i1047[9]
  i1046.pause = i1047[10]
  i1046.liftDistance = i1047[11]
  i1046.rippleScale = i1047[12]
  i1046.appearDuration = i1047[13]
  return i1046
}

Deserializers["ShineBurst"] = function (request, data, root) {
  var i1048 = root || request.c( 'ShineBurst' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'sprite')
  i1048.duration = i1049[2]
  i1048.startScale = i1049[3]
  i1048.endScale = i1049[4]
  return i1048
}

Deserializers["ScreenTransition"] = function (request, data, root) {
  var i1050 = root || request.c( 'ScreenTransition' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'overlay')
  request.r(i1051[2], i1051[3], 0, i1050, 'glow')
  request.r(i1051[4], i1051[5], 0, i1050, 'swirl')
  request.r(i1051[6], i1051[7], 0, i1050, 'swirlInner')
  request.r(i1051[8], i1051[9], 0, i1050, 'flash')
  var i1053 = i1051[10]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1050.sparkles = i1052
  request.r(i1051[11], i1051[12], 0, i1050, 'vortex')
  var i1055 = i1051[13]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1050.vortexArms = i1054
  i1050.coverDuration = i1051[14]
  i1050.holdDuration = i1051[15]
  i1050.revealDuration = i1051[16]
  i1050.swirlSpeed = i1051[17]
  i1050.swirlMaxScale = i1051[18]
  i1050.sparkleRadius = i1051[19]
  i1050.sparkleInnerRadius = i1051[20]
  i1050.overlayPulseColor = new pc.Color(i1051[21], i1051[22], i1051[23], i1051[24])
  i1050.vortexSpeed = i1051[25]
  i1050.sparkleSpin = i1051[26]
  request.r(i1051[27], i1051[28], 0, i1050, 'warpCamera')
  i1050.warpFov = i1051[29]
  request.r(i1051[30], i1051[31], 0, i1050, 'cameraRig')
  i1050.rollDegrees = i1051[32]
  return i1050
}

Deserializers["PortalStory"] = function (request, data, root) {
  var i1058 = root || request.c( 'PortalStory' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'player')
  request.r(i1059[2], i1059[3], 0, i1058, 'portal')
  request.r(i1059[4], i1059[5], 0, i1058, 'portalAnchor')
  request.r(i1059[6], i1059[7], 0, i1058, 'portalGlow')
  request.r(i1059[8], i1059[9], 0, i1058, 'secretMonster')
  request.r(i1059[10], i1059[11], 0, i1058, 'secretModel')
  request.r(i1059[12], i1059[13], 0, i1058, 'hand')
  i1058.portalHandOffset = new pc.Vec3( i1059[14], i1059[15], i1059[16] )
  request.r(i1059[17], i1059[18], 0, i1058, 'storyText')
  request.r(i1059[19], i1059[20], 0, i1058, 'unlockTextView')
  request.r(i1059[21], i1059[22], 0, i1058, 'shine')
  request.r(i1059[23], i1059[24], 0, i1058, 'appearFx')
  i1058.awaitText = i1059[25]
  i1058.enterText = i1059[26]
  i1058.unlockedText = i1059[27]
  i1058.introDelay = i1059[28]
  i1058.nearDistance = i1059[29]
  i1058.handHideDistance = i1059[30]
  i1058.appearDuration = i1059[31]
  i1058.endCardDelay = i1059[32]
  return i1058
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i1060 = root || request.c( 'ControlsTutorial' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'player')
  request.r(i1061[2], i1061[3], 0, i1060, 'look')
  request.r(i1061[4], i1061[5], 0, i1060, 'hand')
  request.r(i1061[6], i1061[7], 0, i1060, 'text')
  request.r(i1061[8], i1061[9], 0, i1060, 'viewFrom')
  request.r(i1061[10], i1061[11], 0, i1060, 'viewTo')
  request.r(i1061[12], i1061[13], 0, i1060, 'joystickRing')
  request.r(i1061[14], i1061[15], 0, i1060, 'jumpButton')
  i1060.viewText = i1061[16]
  i1060.moveText = i1061[17]
  i1060.jumpText = i1061[18]
  i1060.lookDegrees = i1061[19]
  i1060.moveDistance = i1061[20]
  i1060.jumps = i1061[21]
  i1060.jumpStep = !!i1061[22]
  i1060.startDelay = i1061[23]
  i1060.stepGap = i1061[24]
  i1060.swipeDuration = i1061[25]
  i1060.joystickSwipe = i1061[26]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1063 = data
  i1062.ambientIntensity = i1063[0]
  i1062.reflectionIntensity = i1063[1]
  i1062.ambientMode = i1063[2]
  i1062.ambientLight = new pc.Color(i1063[3], i1063[4], i1063[5], i1063[6])
  i1062.ambientSkyColor = new pc.Color(i1063[7], i1063[8], i1063[9], i1063[10])
  i1062.ambientGroundColor = new pc.Color(i1063[11], i1063[12], i1063[13], i1063[14])
  i1062.ambientEquatorColor = new pc.Color(i1063[15], i1063[16], i1063[17], i1063[18])
  i1062.fogColor = new pc.Color(i1063[19], i1063[20], i1063[21], i1063[22])
  i1062.fogEndDistance = i1063[23]
  i1062.fogStartDistance = i1063[24]
  i1062.fogDensity = i1063[25]
  i1062.fog = !!i1063[26]
  request.r(i1063[27], i1063[28], 0, i1062, 'skybox')
  i1062.fogMode = i1063[29]
  var i1065 = i1063[30]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1065[i + 0]) );
  }
  i1062.lightmaps = i1064
  i1062.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1063[31], i1062.lightProbes)
  i1062.lightmapsMode = i1063[32]
  i1062.mixedBakeMode = i1063[33]
  i1062.environmentLightingMode = i1063[34]
  i1062.ambientProbe = new pc.SphericalHarmonicsL2(i1063[35])
  request.r(i1063[36], i1063[37], 0, i1062, 'customReflection')
  request.r(i1063[38], i1063[39], 0, i1062, 'defaultReflection')
  i1062.defaultReflectionMode = i1063[40]
  i1062.defaultReflectionResolution = i1063[41]
  i1062.sunLightObjectId = i1063[42]
  i1062.pixelLightCount = i1063[43]
  i1062.defaultReflectionHDR = !!i1063[44]
  i1062.hasLightDataAsset = !!i1063[45]
  i1062.hasManualGenerate = !!i1063[46]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'lightmapColor')
  request.r(i1069[2], i1069[3], 0, i1068, 'lightmapDirection')
  request.r(i1069[4], i1069[5], 0, i1068, 'shadowMask')
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1070 = root || new UnityEngine.LightProbes()
  var i1071 = data
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1079[i + 0]));
  }
  i1076.ShaderCompilationErrors = i1078
  i1076.name = i1077[1]
  i1076.guid = i1077[2]
  var i1081 = i1077[3]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1076.shaderDefinedKeywords = i1080
  var i1083 = i1077[4]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1083[i + 0]) );
  }
  i1076.passes = i1082
  var i1085 = i1077[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1085[i + 0]) );
  }
  i1076.usePasses = i1084
  var i1087 = i1077[6]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1087[i + 0]) );
  }
  i1076.defaultParameterValues = i1086
  request.r(i1077[7], i1077[8], 0, i1076, 'unityFallbackShader')
  i1076.readDepth = !!i1077[9]
  i1076.hasDepthOnlyPass = !!i1077[10]
  i1076.isCreatedByShaderGraph = !!i1077[11]
  i1076.disableBatching = !!i1077[12]
  i1076.compiled = !!i1077[13]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1091 = data
  i1090.shaderName = i1091[0]
  i1090.errorMessage = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1096 = root || new pc.UnityShaderPass()
  var i1097 = data
  i1096.id = i1097[0]
  i1096.subShaderIndex = i1097[1]
  i1096.name = i1097[2]
  i1096.passType = i1097[3]
  i1096.grabPassTextureName = i1097[4]
  i1096.usePass = !!i1097[5]
  i1096.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[6], i1096.zTest)
  i1096.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[7], i1096.zWrite)
  i1096.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[8], i1096.culling)
  i1096.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1097[9], i1096.blending)
  i1096.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1097[10], i1096.alphaBlending)
  i1096.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[11], i1096.colorWriteMask)
  i1096.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[12], i1096.offsetUnits)
  i1096.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[13], i1096.offsetFactor)
  i1096.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[14], i1096.stencilRef)
  i1096.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[15], i1096.stencilReadMask)
  i1096.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[16], i1096.stencilWriteMask)
  i1096.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[17], i1096.stencilOp)
  i1096.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[18], i1096.stencilOpFront)
  i1096.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[19], i1096.stencilOpBack)
  var i1099 = i1097[20]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1099[i + 0]) );
  }
  i1096.tags = i1098
  var i1101 = i1097[21]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1096.passDefinedKeywords = i1100
  var i1103 = i1097[22]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1103[i + 0]) );
  }
  i1096.passDefinedKeywordGroups = i1102
  var i1105 = i1097[23]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1105[i + 0]) );
  }
  i1096.variants = i1104
  var i1107 = i1097[24]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1107[i + 0]) );
  }
  i1096.excludedVariants = i1106
  i1096.hasDepthReader = !!i1097[25]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1109 = data
  i1108.val = i1109[0]
  i1108.name = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1111 = data
  i1110.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[0], i1110.src)
  i1110.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[1], i1110.dst)
  i1110.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[2], i1110.op)
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1113 = data
  i1112.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[0], i1112.pass)
  i1112.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[1], i1112.fail)
  i1112.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[2], i1112.zFail)
  i1112.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[3], i1112.comp)
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.value = i1117[1]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1120.keywords = i1122
  i1120.hasDiscard = !!i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1127 = data
  i1126.passId = i1127[0]
  i1126.subShaderIndex = i1127[1]
  var i1129 = i1127[2]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.keywords = i1128
  i1126.vertexProgram = i1127[3]
  i1126.fragmentProgram = i1127[4]
  i1126.exportedForWebGl2 = !!i1127[5]
  i1126.readDepth = !!i1127[6]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'shader')
  i1132.pass = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.type = i1137[1]
  i1136.value = new pc.Vec4( i1137[2], i1137[3], i1137[4], i1137[5] )
  i1136.textureValue = i1137[6]
  i1136.shaderPropertyFlag = i1137[7]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1139 = data
  i1138.name = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'texture')
  i1138.aabb = i1139[3]
  i1138.vertices = i1139[4]
  i1138.triangles = i1139[5]
  i1138.textureRect = UnityEngine.Rect.MinMaxRect(i1139[6], i1139[7], i1139[8], i1139[9])
  i1138.packedRect = UnityEngine.Rect.MinMaxRect(i1139[10], i1139[11], i1139[12], i1139[13])
  i1138.border = new pc.Vec4( i1139[14], i1139[15], i1139[16], i1139[17] )
  i1138.transparency = i1139[18]
  i1138.bounds = i1139[19]
  i1138.pixelsPerUnit = i1139[20]
  i1138.textureWidth = i1139[21]
  i1138.textureHeight = i1139[22]
  i1138.nativeSize = new pc.Vec2( i1139[23], i1139[24] )
  i1138.pivot = new pc.Vec2( i1139[25], i1139[26] )
  i1138.textureRectOffset = new pc.Vec2( i1139[27], i1139[28] )
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1141 = data
  i1140.name = i1141[0]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.wrapMode = i1143[1]
  i1142.isLooping = !!i1143[2]
  i1142.length = i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1145[i + 0]) );
  }
  i1142.curves = i1144
  var i1147 = i1143[5]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1147[i + 0]) );
  }
  i1142.events = i1146
  i1142.halfPrecision = !!i1143[6]
  i1142._frameRate = i1143[7]
  i1142.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1143[8], i1142.localBounds)
  i1142.hasMuscleCurves = !!i1143[9]
  var i1149 = i1143[10]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1142.clipMuscleConstant = i1148
  i1142.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1143[11], i1142.clipBindingConstant)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1153 = data
  i1152.path = i1153[0]
  i1152.hash = i1153[1]
  i1152.componentType = i1153[2]
  i1152.property = i1153[3]
  i1152.keys = i1153[4]
  var i1155 = i1153[5]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1155[i + 0]) );
  }
  i1152.objectReferenceKeys = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1159 = data
  i1158.functionName = i1159[0]
  i1158.floatParameter = i1159[1]
  i1158.intParameter = i1159[2]
  i1158.stringParameter = i1159[3]
  request.r(i1159[4], i1159[5], 0, i1158, 'objectReferenceParameter')
  i1158.time = i1159[6]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1161 = data
  i1160.center = new pc.Vec3( i1161[0], i1161[1], i1161[2] )
  i1160.extends = new pc.Vec3( i1161[3], i1161[4], i1161[5] )
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1164.genericBindings = i1166
  var i1169 = i1165[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( i1169[i + 0] );
  }
  i1164.pptrCurveMapping = i1168
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1171 = data
  i1170.name = i1171[0]
  var i1173 = i1171[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1173[i + 0]) );
  }
  i1170.layers = i1172
  var i1175 = i1171[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1175[i + 0]) );
  }
  i1170.parameters = i1174
  i1170.animationClips = i1171[3]
  i1170.avatarUnsupported = i1171[4]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.defaultWeight = i1179[1]
  i1178.blendingMode = i1179[2]
  i1178.avatarMask = i1179[3]
  i1178.syncedLayerIndex = i1179[4]
  i1178.syncedLayerAffectsTiming = !!i1179[5]
  i1178.syncedLayers = i1179[6]
  i1178.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1179[7], i1178.stateMachine)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.path = i1181[2]
  var i1183 = i1181[3]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1183[i + 0]) );
  }
  i1180.states = i1182
  var i1185 = i1181[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1185[i + 0]) );
  }
  i1180.machines = i1184
  var i1187 = i1181[5]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1187[i + 0]) );
  }
  i1180.entryStateTransitions = i1186
  var i1189 = i1181[6]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1189[i + 0]) );
  }
  i1180.exitStateTransitions = i1188
  var i1191 = i1181[7]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1191[i + 0]) );
  }
  i1180.anyStateTransitions = i1190
  i1180.defaultStateId = i1181[8]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1195 = data
  i1194.id = i1195[0]
  i1194.name = i1195[1]
  i1194.cycleOffset = i1195[2]
  i1194.cycleOffsetParameter = i1195[3]
  i1194.cycleOffsetParameterActive = !!i1195[4]
  i1194.mirror = !!i1195[5]
  i1194.mirrorParameter = i1195[6]
  i1194.mirrorParameterActive = !!i1195[7]
  i1194.motionId = i1195[8]
  i1194.nameHash = i1195[9]
  i1194.fullPathHash = i1195[10]
  i1194.speed = i1195[11]
  i1194.speedParameter = i1195[12]
  i1194.speedParameterActive = !!i1195[13]
  i1194.tag = i1195[14]
  i1194.tagHash = i1195[15]
  i1194.writeDefaultValues = !!i1195[16]
  var i1197 = i1195[17]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1194.behaviours = i1196
  var i1199 = i1195[18]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1199[i + 0]) );
  }
  i1194.transitions = i1198
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1205 = data
  i1204.fullPath = i1205[0]
  i1204.canTransitionToSelf = !!i1205[1]
  i1204.duration = i1205[2]
  i1204.exitTime = i1205[3]
  i1204.hasExitTime = !!i1205[4]
  i1204.hasFixedDuration = !!i1205[5]
  i1204.interruptionSource = i1205[6]
  i1204.offset = i1205[7]
  i1204.orderedInterruption = !!i1205[8]
  i1204.destinationStateId = i1205[9]
  i1204.isExit = !!i1205[10]
  i1204.mute = !!i1205[11]
  i1204.solo = !!i1205[12]
  var i1207 = i1205[13]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1211 = data
  i1210.mode = i1211[0]
  i1210.parameter = i1211[1]
  i1210.threshold = i1211[2]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1217 = data
  i1216.destinationStateId = i1217[0]
  i1216.isExit = !!i1217[1]
  i1216.mute = !!i1217[2]
  i1216.solo = !!i1217[3]
  var i1219 = i1217[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1219[i + 0]) );
  }
  i1216.conditions = i1218
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1223 = data
  i1222.defaultBool = !!i1223[0]
  i1222.defaultFloat = i1223[1]
  i1222.defaultInt = i1223[2]
  i1222.name = i1223[3]
  i1222.nameHash = i1223[4]
  i1222.type = i1223[5]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.bytes64 = i1225[1]
  i1224.data = i1225[2]
  return i1224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1227 = data
  i1226.normalStyle = i1227[0]
  i1226.normalSpacingOffset = i1227[1]
  i1226.boldStyle = i1227[2]
  i1226.boldSpacing = i1227[3]
  i1226.italicStyle = i1227[4]
  i1226.tabSize = i1227[5]
  request.r(i1227[6], i1227[7], 0, i1226, 'atlas')
  i1226.m_SourceFontFileGUID = i1227[8]
  i1226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1227[9], i1226.m_CreationSettings)
  request.r(i1227[10], i1227[11], 0, i1226, 'm_SourceFontFile')
  i1226.m_SourceFontFilePath = i1227[12]
  i1226.m_AtlasPopulationMode = i1227[13]
  i1226.InternalDynamicOS = !!i1227[14]
  var i1229 = i1227[15]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.Glyph', i1229[i + 0]));
  }
  i1226.m_GlyphTable = i1228
  var i1231 = i1227[16]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Character', i1231[i + 0]));
  }
  i1226.m_CharacterTable = i1230
  var i1233 = i1227[17]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1226.m_AtlasTextures = i1232
  i1226.m_AtlasTextureIndex = i1227[18]
  i1226.m_IsMultiAtlasTexturesEnabled = !!i1227[19]
  i1226.m_GetFontFeatures = !!i1227[20]
  i1226.m_ClearDynamicDataOnBuild = !!i1227[21]
  i1226.m_AtlasWidth = i1227[22]
  i1226.m_AtlasHeight = i1227[23]
  i1226.m_AtlasPadding = i1227[24]
  i1226.m_AtlasRenderMode = i1227[25]
  var i1235 = i1227[26]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.GlyphRect', i1235[i + 0]));
  }
  i1226.m_UsedGlyphRects = i1234
  var i1237 = i1227[27]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.GlyphRect', i1237[i + 0]));
  }
  i1226.m_FreeGlyphRects = i1236
  i1226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1227[28], i1226.m_FontFeatureTable)
  i1226.m_ShouldReimportFontFeatures = !!i1227[29]
  var i1239 = i1227[30]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1226.m_FallbackFontAssetTable = i1238
  var i1241 = i1227[31]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('TMPro.TMP_FontWeightPair', i1241[i + 0]) );
  }
  i1226.m_FontWeightTable = i1240
  var i1243 = i1227[32]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('TMPro.TMP_FontWeightPair', i1243[i + 0]) );
  }
  i1226.fontWeights = i1242
  i1226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1227[33], i1226.m_fontInfo)
  var i1245 = i1227[34]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Glyph', i1245[i + 0]));
  }
  i1226.m_glyphInfoList = i1244
  i1226.m_KerningTable = request.d('TMPro.KerningTable', i1227[35], i1226.m_KerningTable)
  var i1247 = i1227[36]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1226.fallbackFontAssets = i1246
  i1226.m_Version = i1227[37]
  i1226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1227[38], i1226.m_FaceInfo)
  request.r(i1227[39], i1227[40], 0, i1226, 'm_Material')
  return i1226
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1249 = data
  i1248.sourceFontFileName = i1249[0]
  i1248.sourceFontFileGUID = i1249[1]
  i1248.faceIndex = i1249[2]
  i1248.pointSizeSamplingMode = i1249[3]
  i1248.pointSize = i1249[4]
  i1248.padding = i1249[5]
  i1248.paddingMode = i1249[6]
  i1248.packingMode = i1249[7]
  i1248.atlasWidth = i1249[8]
  i1248.atlasHeight = i1249[9]
  i1248.characterSetSelectionMode = i1249[10]
  i1248.characterSequence = i1249[11]
  i1248.referencedFontAssetGUID = i1249[12]
  i1248.referencedTextAssetGUID = i1249[13]
  i1248.fontStyle = i1249[14]
  i1248.fontStyleModifier = i1249[15]
  i1248.renderMode = i1249[16]
  i1248.includeFontFeatures = !!i1249[17]
  return i1248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1253 = data
  i1252.m_Index = i1253[0]
  i1252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1253[1], i1252.m_Metrics)
  i1252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1253[2], i1252.m_GlyphRect)
  i1252.m_Scale = i1253[3]
  i1252.m_AtlasIndex = i1253[4]
  i1252.m_ClassDefinitionType = i1253[5]
  return i1252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1255 = data
  i1254.m_Width = i1255[0]
  i1254.m_Height = i1255[1]
  i1254.m_HorizontalBearingX = i1255[2]
  i1254.m_HorizontalBearingY = i1255[3]
  i1254.m_HorizontalAdvance = i1255[4]
  return i1254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1257 = data
  i1256.m_X = i1257[0]
  i1256.m_Y = i1257[1]
  i1256.m_Width = i1257[2]
  i1256.m_Height = i1257[3]
  return i1256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_Character' )
  var i1261 = data
  i1260.m_ElementType = i1261[0]
  i1260.m_Unicode = i1261[1]
  i1260.m_GlyphIndex = i1261[2]
  i1260.m_Scale = i1261[3]
  return i1260
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.MultipleSubstitutionRecord', i1269[i + 0]));
  }
  i1266.m_MultipleSubstitutionRecords = i1268
  var i1271 = i1267[1]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.LigatureSubstitutionRecord', i1271[i + 0]));
  }
  i1266.m_LigatureSubstitutionRecords = i1270
  var i1273 = i1267[2]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1273[i + 0]));
  }
  i1266.m_GlyphPairAdjustmentRecords = i1272
  var i1275 = i1267[3]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1275[i + 0]));
  }
  i1266.m_MarkToBaseAdjustmentRecords = i1274
  var i1277 = i1267[4]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1277[i + 0]));
  }
  i1266.m_MarkToMarkAdjustmentRecords = i1276
  return i1266
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1281 = data
  i1280.m_TargetGlyphID = i1281[0]
  i1280.m_SubstituteGlyphIDs = i1281[1]
  return i1280
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1285 = data
  i1284.m_ComponentGlyphIDs = i1285[0]
  i1284.m_LigatureGlyphID = i1285[1]
  return i1284
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1289 = data
  i1288.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1289[0], i1288.m_FirstAdjustmentRecord)
  i1288.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1289[1], i1288.m_SecondAdjustmentRecord)
  i1288.m_FeatureLookupFlags = i1289[2]
  return i1288
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1291 = data
  i1290.m_GlyphIndex = i1291[0]
  i1290.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1291[1], i1290.m_GlyphValueRecord)
  return i1290
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1293 = data
  i1292.m_XPlacement = i1293[0]
  i1292.m_YPlacement = i1293[1]
  i1292.m_XAdvance = i1293[2]
  i1292.m_YAdvance = i1293[3]
  return i1292
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1297 = data
  i1296.m_BaseGlyphID = i1297[0]
  i1296.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1297[1], i1296.m_BaseGlyphAnchorPoint)
  i1296.m_MarkGlyphID = i1297[2]
  i1296.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1297[3], i1296.m_MarkPositionAdjustment)
  return i1296
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1299 = data
  i1298.m_XCoordinate = i1299[0]
  i1298.m_YCoordinate = i1299[1]
  return i1298
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1301 = data
  i1300.m_XPositionAdjustment = i1301[0]
  i1300.m_YPositionAdjustment = i1301[1]
  return i1300
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1305 = data
  i1304.m_BaseMarkGlyphID = i1305[0]
  i1304.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1305[1], i1304.m_BaseMarkGlyphAnchorPoint)
  i1304.m_CombiningMarkGlyphID = i1305[2]
  i1304.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1305[3], i1304.m_CombiningMarkPositionAdjustment)
  return i1304
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'regularTypeface')
  request.r(i1311[2], i1311[3], 0, i1310, 'italicTypeface')
  return i1310
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1313 = data
  i1312.Name = i1313[0]
  i1312.PointSize = i1313[1]
  i1312.Scale = i1313[2]
  i1312.CharacterCount = i1313[3]
  i1312.LineHeight = i1313[4]
  i1312.Baseline = i1313[5]
  i1312.Ascender = i1313[6]
  i1312.CapHeight = i1313[7]
  i1312.Descender = i1313[8]
  i1312.CenterLine = i1313[9]
  i1312.SuperscriptOffset = i1313[10]
  i1312.SubscriptOffset = i1313[11]
  i1312.SubSize = i1313[12]
  i1312.Underline = i1313[13]
  i1312.UnderlineThickness = i1313[14]
  i1312.strikethrough = i1313[15]
  i1312.strikethroughThickness = i1313[16]
  i1312.TabWidth = i1313[17]
  i1312.Padding = i1313[18]
  i1312.AtlasWidth = i1313[19]
  i1312.AtlasHeight = i1313[20]
  return i1312
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1317 = data
  i1316.id = i1317[0]
  i1316.x = i1317[1]
  i1316.y = i1317[2]
  i1316.width = i1317[3]
  i1316.height = i1317[4]
  i1316.xOffset = i1317[5]
  i1316.yOffset = i1317[6]
  i1316.xAdvance = i1317[7]
  i1316.scale = i1317[8]
  return i1316
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.KerningTable' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('TMPro.KerningPair', i1321[i + 0]));
  }
  i1318.kerningPairs = i1320
  return i1318
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.KerningPair' )
  var i1325 = data
  i1324.xOffset = i1325[0]
  i1324.m_FirstGlyph = i1325[1]
  i1324.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1325[2], i1324.m_FirstGlyphAdjustments)
  i1324.m_SecondGlyph = i1325[3]
  i1324.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1325[4], i1324.m_SecondGlyphAdjustments)
  i1324.m_IgnoreSpacingAdjustments = !!i1325[5]
  return i1324
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1327 = data
  i1326.m_FaceIndex = i1327[0]
  i1326.m_FamilyName = i1327[1]
  i1326.m_StyleName = i1327[2]
  i1326.m_PointSize = i1327[3]
  i1326.m_Scale = i1327[4]
  i1326.m_UnitsPerEM = i1327[5]
  i1326.m_LineHeight = i1327[6]
  i1326.m_AscentLine = i1327[7]
  i1326.m_CapLine = i1327[8]
  i1326.m_MeanLine = i1327[9]
  i1326.m_Baseline = i1327[10]
  i1326.m_DescentLine = i1327[11]
  i1326.m_SuperscriptOffset = i1327[12]
  i1326.m_SuperscriptSize = i1327[13]
  i1326.m_SubscriptOffset = i1327[14]
  i1326.m_SubscriptSize = i1327[15]
  i1326.m_UnderlineOffset = i1327[16]
  i1326.m_UnderlineThickness = i1327[17]
  i1326.m_StrikethroughOffset = i1327[18]
  i1326.m_StrikethroughThickness = i1327[19]
  i1326.m_TabWidth = i1327[20]
  return i1326
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i1328 = root || request.c( 'PlayerSO' )
  var i1329 = data
  i1328.maxSpeed = i1329[0]
  i1328.jumpImpulse = i1329[1]
  return i1328
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i1330 = root || request.c( 'FindMonsterDatabase' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1330.database = i1332
  return i1330
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i1336 = root || request.c( 'MonsterSO' )
  var i1337 = data
  i1336.id = i1337[0]
  i1336.displayName = i1337[1]
  request.r(i1337[2], i1337[3], 0, i1336, 'icon')
  request.r(i1337[4], i1337[5], 0, i1336, 'prefab')
  return i1336
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_Settings' )
  var i1339 = data
  i1338.assetVersion = i1339[0]
  i1338.m_TextWrappingMode = i1339[1]
  i1338.m_enableKerning = !!i1339[2]
  var i1341 = i1339[3]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(i1341[i + 0]);
  }
  i1338.m_ActiveFontFeatures = i1340
  i1338.m_enableExtraPadding = !!i1339[4]
  i1338.m_enableTintAllSprites = !!i1339[5]
  i1338.m_enableParseEscapeCharacters = !!i1339[6]
  i1338.m_EnableRaycastTarget = !!i1339[7]
  i1338.m_GetFontFeaturesAtRuntime = !!i1339[8]
  i1338.m_missingGlyphCharacter = i1339[9]
  i1338.m_ClearDynamicDataOnBuild = !!i1339[10]
  i1338.m_warningsDisabled = !!i1339[11]
  request.r(i1339[12], i1339[13], 0, i1338, 'm_defaultFontAsset')
  i1338.m_defaultFontAssetPath = i1339[14]
  i1338.m_defaultFontSize = i1339[15]
  i1338.m_defaultAutoSizeMinRatio = i1339[16]
  i1338.m_defaultAutoSizeMaxRatio = i1339[17]
  i1338.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1339[18], i1339[19] )
  i1338.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1339[20], i1339[21] )
  i1338.m_autoSizeTextContainer = !!i1339[22]
  i1338.m_IsTextObjectScaleStatic = !!i1339[23]
  var i1343 = i1339[24]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 1, i1342, '')
  }
  i1338.m_fallbackFontAssets = i1342
  i1338.m_matchMaterialPreset = !!i1339[25]
  i1338.m_HideSubTextObjects = !!i1339[26]
  request.r(i1339[27], i1339[28], 0, i1338, 'm_defaultSpriteAsset')
  i1338.m_defaultSpriteAssetPath = i1339[29]
  i1338.m_enableEmojiSupport = !!i1339[30]
  i1338.m_MissingCharacterSpriteUnicode = i1339[31]
  var i1345 = i1339[32]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1338.m_EmojiFallbackTextAssets = i1344
  i1338.m_defaultColorGradientPresetsPath = i1339[33]
  request.r(i1339[34], i1339[35], 0, i1338, 'm_defaultStyleSheet')
  i1338.m_StyleSheetsResourcePath = i1339[36]
  request.r(i1339[37], i1339[38], 0, i1338, 'm_leadingCharacters')
  request.r(i1339[39], i1339[40], 0, i1338, 'm_followingCharacters')
  i1338.m_UseModernHangulLineBreakingRules = !!i1339[41]
  return i1338
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1349 = data
  request.r(i1349[0], i1349[1], 0, i1348, 'spriteSheet')
  var i1351 = i1349[2]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_Sprite', i1351[i + 0]));
  }
  i1348.spriteInfoList = i1350
  var i1353 = i1349[3]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1348.fallbackSpriteAssets = i1352
  var i1355 = i1349[4]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.TMP_SpriteCharacter', i1355[i + 0]));
  }
  i1348.m_SpriteCharacterTable = i1354
  var i1357 = i1349[5]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteGlyph', i1357[i + 0]));
  }
  i1348.m_GlyphTable = i1356
  i1348.m_Version = i1349[6]
  i1348.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1349[7], i1348.m_FaceInfo)
  request.r(i1349[8], i1349[9], 0, i1348, 'm_Material')
  return i1348
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.hashCode = i1361[1]
  i1360.unicode = i1361[2]
  i1360.pivot = new pc.Vec2( i1361[3], i1361[4] )
  request.r(i1361[5], i1361[6], 0, i1360, 'sprite')
  i1360.id = i1361[7]
  i1360.x = i1361[8]
  i1360.y = i1361[9]
  i1360.width = i1361[10]
  i1360.height = i1361[11]
  i1360.xOffset = i1361[12]
  i1360.yOffset = i1361[13]
  i1360.xAdvance = i1361[14]
  i1360.scale = i1361[15]
  return i1360
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1367 = data
  i1366.m_Name = i1367[0]
  i1366.m_ElementType = i1367[1]
  i1366.m_Unicode = i1367[2]
  i1366.m_GlyphIndex = i1367[3]
  i1366.m_Scale = i1367[4]
  return i1366
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'sprite')
  i1370.m_Index = i1371[2]
  i1370.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1371[3], i1370.m_Metrics)
  i1370.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1371[4], i1370.m_GlyphRect)
  i1370.m_Scale = i1371[5]
  i1370.m_AtlasIndex = i1371[6]
  i1370.m_ClassDefinitionType = i1371[7]
  return i1370
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1373 = data
  var i1375 = i1373[0]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('TMPro.TMP_Style', i1375[i + 0]));
  }
  i1372.m_StyleList = i1374
  return i1372
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_Style' )
  var i1379 = data
  i1378.m_Name = i1379[0]
  i1378.m_HashCode = i1379[1]
  i1378.m_OpeningDefinition = i1379[2]
  i1378.m_ClosingDefinition = i1379[3]
  i1378.m_OpeningTagArray = i1379[4]
  i1378.m_ClosingTagArray = i1379[5]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1381 = data
  var i1383 = i1381[0]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1383[i + 0]) );
  }
  i1380.files = i1382
  i1380.componentToPrefabIds = i1381[1]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1387 = data
  i1386.path = i1387[0]
  request.r(i1387[1], i1387[2], 0, i1386, 'unityObject')
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1389 = data
  var i1391 = i1389[0]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1391[i + 0]) );
  }
  i1388.scriptsExecutionOrder = i1390
  var i1393 = i1389[1]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1393[i + 0]) );
  }
  i1388.sortingLayers = i1392
  var i1395 = i1389[2]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1395[i + 0]) );
  }
  i1388.cullingLayers = i1394
  i1388.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1389[3], i1388.timeSettings)
  i1388.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1389[4], i1388.physicsSettings)
  i1388.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1389[5], i1388.physics2DSettings)
  i1388.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1389[6], i1388.qualitySettings)
  i1388.enableRealtimeShadows = !!i1389[7]
  i1388.enableAutoInstancing = !!i1389[8]
  i1388.enableStaticBatching = !!i1389[9]
  i1388.enableDynamicBatching = !!i1389[10]
  i1388.usePreservativeDynamicBatching = !!i1389[11]
  i1388.lightmapEncodingQuality = i1389[12]
  i1388.desiredColorSpace = i1389[13]
  var i1397 = i1389[14]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( i1397[i + 0] );
  }
  i1388.allTags = i1396
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.value = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1405 = data
  i1404.id = i1405[0]
  i1404.name = i1405[1]
  i1404.value = i1405[2]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1409 = data
  i1408.id = i1409[0]
  i1408.name = i1409[1]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1411 = data
  i1410.fixedDeltaTime = i1411[0]
  i1410.maximumDeltaTime = i1411[1]
  i1410.timeScale = i1411[2]
  i1410.maximumParticleTimestep = i1411[3]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1413 = data
  i1412.gravity = new pc.Vec3( i1413[0], i1413[1], i1413[2] )
  i1412.defaultSolverIterations = i1413[3]
  i1412.bounceThreshold = i1413[4]
  i1412.autoSyncTransforms = !!i1413[5]
  i1412.autoSimulation = !!i1413[6]
  var i1415 = i1413[7]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1415[i + 0]) );
  }
  i1412.collisionMatrix = i1414
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1419 = data
  i1418.enabled = !!i1419[0]
  i1418.layerId = i1419[1]
  i1418.otherLayerId = i1419[2]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'material')
  i1420.gravity = new pc.Vec2( i1421[2], i1421[3] )
  i1420.positionIterations = i1421[4]
  i1420.velocityIterations = i1421[5]
  i1420.velocityThreshold = i1421[6]
  i1420.maxLinearCorrection = i1421[7]
  i1420.maxAngularCorrection = i1421[8]
  i1420.maxTranslationSpeed = i1421[9]
  i1420.maxRotationSpeed = i1421[10]
  i1420.baumgarteScale = i1421[11]
  i1420.baumgarteTOIScale = i1421[12]
  i1420.timeToSleep = i1421[13]
  i1420.linearSleepTolerance = i1421[14]
  i1420.angularSleepTolerance = i1421[15]
  i1420.defaultContactOffset = i1421[16]
  i1420.autoSimulation = !!i1421[17]
  i1420.queriesHitTriggers = !!i1421[18]
  i1420.queriesStartInColliders = !!i1421[19]
  i1420.callbacksOnDisable = !!i1421[20]
  i1420.reuseCollisionCallbacks = !!i1421[21]
  i1420.autoSyncTransforms = !!i1421[22]
  var i1423 = i1421[23]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1423[i + 0]) );
  }
  i1420.collisionMatrix = i1422
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1427 = data
  i1426.enabled = !!i1427[0]
  i1426.layerId = i1427[1]
  i1426.otherLayerId = i1427[2]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1429 = data
  var i1431 = i1429[0]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1431[i + 0]) );
  }
  i1428.qualityLevels = i1430
  var i1433 = i1429[1]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( i1433[i + 0] );
  }
  i1428.names = i1432
  i1428.shadows = i1429[2]
  i1428.anisotropicFiltering = i1429[3]
  i1428.antiAliasing = i1429[4]
  i1428.lodBias = i1429[5]
  i1428.shadowCascades = i1429[6]
  i1428.shadowDistance = i1429[7]
  i1428.shadowmaskMode = i1429[8]
  i1428.shadowProjection = i1429[9]
  i1428.shadowResolution = i1429[10]
  i1428.softParticles = !!i1429[11]
  i1428.softVegetation = !!i1429[12]
  i1428.activeColorSpace = i1429[13]
  i1428.desiredColorSpace = i1429[14]
  i1428.masterTextureLimit = i1429[15]
  i1428.maxQueuedFrames = i1429[16]
  i1428.particleRaycastBudget = i1429[17]
  i1428.pixelLightCount = i1429[18]
  i1428.realtimeReflectionProbes = !!i1429[19]
  i1428.shadowCascade2Split = i1429[20]
  i1428.shadowCascade4Split = new pc.Vec3( i1429[21], i1429[22], i1429[23] )
  i1428.streamingMipmapsActive = !!i1429[24]
  i1428.vSyncCount = i1429[25]
  i1428.asyncUploadBufferSize = i1429[26]
  i1428.asyncUploadTimeSlice = i1429[27]
  i1428.billboardsFaceCameraPosition = !!i1429[28]
  i1428.shadowNearPlaneOffset = i1429[29]
  i1428.streamingMipmapsMemoryBudget = i1429[30]
  i1428.maximumLODLevel = i1429[31]
  i1428.streamingMipmapsAddAllCameras = !!i1429[32]
  i1428.streamingMipmapsMaxLevelReduction = i1429[33]
  i1428.streamingMipmapsRenderersPerFrame = i1429[34]
  i1428.resolutionScalingFixedDPIFactor = i1429[35]
  i1428.streamingMipmapsMaxFileIORequests = i1429[36]
  i1428.currentQualityLevel = i1429[37]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1437 = data
  i1436.name = i1437[0]
  var i1439 = i1437[1]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1439[i + 0]) );
  }
  i1436.tos = i1438
  var i1441 = i1437[2]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( i1441[i + 0] );
  }
  i1436.constant = i1440
  i1436.isValid = !!i1437[3]
  i1436.isHuman = !!i1437[4]
  i1436.hasRootMotion = !!i1437[5]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1445 = data
  i1444.hash = i1445[0]
  i1444.path = i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1449 = data
  i1448.weight = i1449[0]
  i1448.vertices = i1449[1]
  i1448.normals = i1449[2]
  i1448.tangents = i1449[3]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1453 = data
  i1452.time = i1453[0]
  request.r(i1453[1], i1453[2], 0, i1452, 'value')
  return i1452
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1455 = data
  i1454.xPlacement = i1455[0]
  i1454.yPlacement = i1455[1]
  i1454.xAdvance = i1455[2]
  i1454.yAdvance = i1455[3]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[57],"83":[40],"84":[13],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[40],"105":[9],"106":[107],"108":[107],"29":[28],"48":[54],"109":[31],"110":[28],"111":[35,28],"112":[9],"113":[35,28],"114":[28],"115":[28],"116":[9,28],"38":[28,35],"117":[118],"119":[118],"120":[118],"121":[28],"122":[28],"33":[29],"34":[35,28],"123":[28],"31":[29],"124":[28],"125":[28],"126":[28],"127":[28],"128":[28],"129":[28],"130":[28],"44":[28],"131":[28],"132":[35,28],"133":[28],"134":[28],"135":[28],"136":[28],"137":[35,28],"138":[28],"139":[59],"140":[59],"60":[59],"141":[59],"142":[40],"143":[40]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","HiddenMonster","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshCollider","UnityEngine.Rigidbody","PortalGlow","UnityEngine.SpriteRenderer","TeleportPortal","UnityEngine.AudioClip","UnityEngine.Sprite","ScaleYoyo","UnityEngine.SphereCollider","UnityEngine.Shader","UnityEngine.Texture2D","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","GameButton","HideButton","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","UnityEngine.UI.Mask","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","UnityEngine.Animator","FM3rdInput","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","PlayableAudio","LunaController","PointerHand","ShineBurst","ScreenTransition","PortalStory","ControlsTutorial","UnityEngine.Cubemap","MonsterSO","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "FSAHM_V12";

Deserializers.lunaInitializationTime = "11/04/2026 09:24:18";

Deserializers.lunaDaysRunning = "0.9";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4161";

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

Deserializers.buildID = "e7b3e1b8-08dd-4f59-8cd5-a5eb05904551";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

