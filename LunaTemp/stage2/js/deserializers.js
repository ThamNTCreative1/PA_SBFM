var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.JointSpring' )
  var i3671 = data
  i3670.spring = i3671[0]
  i3670.damper = i3671[1]
  i3670.targetPosition = i3671[2]
  return i3670
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.JointMotor' )
  var i3673 = data
  i3672.m_TargetVelocity = i3673[0]
  i3672.m_Force = i3673[1]
  i3672.m_FreeSpin = i3673[2]
  return i3672
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.JointLimits' )
  var i3675 = data
  i3674.m_Min = i3675[0]
  i3674.m_Max = i3675[1]
  i3674.m_Bounciness = i3675[2]
  i3674.m_BounceMinVelocity = i3675[3]
  i3674.m_ContactDistance = i3675[4]
  i3674.minBounce = i3675[5]
  i3674.maxBounce = i3675[6]
  return i3674
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.JointDrive' )
  var i3677 = data
  i3676.m_PositionSpring = i3677[0]
  i3676.m_PositionDamper = i3677[1]
  i3676.m_MaximumForce = i3677[2]
  i3676.m_UseAcceleration = i3677[3]
  return i3676
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3678 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3679 = data
  i3678.m_Spring = i3679[0]
  i3678.m_Damper = i3679[1]
  return i3678
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3681 = data
  i3680.m_Limit = i3681[0]
  i3680.m_Bounciness = i3681[1]
  i3680.m_ContactDistance = i3681[2]
  return i3680
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3683 = data
  i3682.m_ExtremumSlip = i3683[0]
  i3682.m_ExtremumValue = i3683[1]
  i3682.m_AsymptoteSlip = i3683[2]
  i3682.m_AsymptoteValue = i3683[3]
  i3682.m_Stiffness = i3683[4]
  return i3682
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3685 = data
  i3684.m_LowerAngle = i3685[0]
  i3684.m_UpperAngle = i3685[1]
  return i3684
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3687 = data
  i3686.m_MotorSpeed = i3687[0]
  i3686.m_MaximumMotorTorque = i3687[1]
  return i3686
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3689 = data
  i3688.m_DampingRatio = i3689[0]
  i3688.m_Frequency = i3689[1]
  i3688.m_Angle = i3689[2]
  return i3688
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3691 = data
  i3690.m_LowerTranslation = i3691[0]
  i3690.m_UpperTranslation = i3691[1]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3693 = data
  i3692.position = new pc.Vec3( i3693[0], i3693[1], i3693[2] )
  i3692.scale = new pc.Vec3( i3693[3], i3693[4], i3693[5] )
  i3692.rotation = new pc.Quat(i3693[6], i3693[7], i3693[8], i3693[9])
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3695 = data
  i3694.type = i3695[0]
  i3694.color = new pc.Color(i3695[1], i3695[2], i3695[3], i3695[4])
  i3694.cullingMask = i3695[5]
  i3694.intensity = i3695[6]
  i3694.range = i3695[7]
  i3694.spotAngle = i3695[8]
  i3694.shadows = i3695[9]
  i3694.shadowNormalBias = i3695[10]
  i3694.shadowBias = i3695[11]
  i3694.shadowStrength = i3695[12]
  i3694.shadowResolution = i3695[13]
  i3694.lightmapBakeType = i3695[14]
  i3694.renderMode = i3695[15]
  request.r(i3695[16], i3695[17], 0, i3694, 'cookie')
  i3694.cookieSize = i3695[18]
  i3694.shadowNearPlane = i3695[19]
  i3694.occlusionMaskChannel = i3695[20]
  i3694.isBaked = !!i3695[21]
  i3694.mixedLightingMode = i3695[22]
  i3694.enabled = !!i3695[23]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3697 = data
  i3696.name = i3697[0]
  i3696.tagId = i3697[1]
  i3696.enabled = !!i3697[2]
  i3696.isStatic = !!i3697[3]
  i3696.layer = i3697[4]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3699 = data
  i3698.center = new pc.Vec3( i3699[0], i3699[1], i3699[2] )
  i3698.size = new pc.Vec3( i3699[3], i3699[4], i3699[5] )
  i3698.enabled = !!i3699[6]
  i3698.isTrigger = !!i3699[7]
  request.r(i3699[8], i3699[9], 0, i3698, 'material')
  return i3698
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i3700 = root || request.c( 'HiddenMonster' )
  var i3701 = data
  request.r(i3701[0], i3701[1], 0, i3700, 'checkMark')
  request.r(i3701[2], i3701[3], 0, i3700, 'claimFx')
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'sharedMesh')
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3705 = data
  request.r(i3705[0], i3705[1], 0, i3704, 'additionalVertexStreams')
  i3704.enabled = !!i3705[2]
  request.r(i3705[3], i3705[4], 0, i3704, 'sharedMaterial')
  var i3707 = i3705[5]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 2, i3706, '')
  }
  i3704.sharedMaterials = i3706
  i3704.receiveShadows = !!i3705[6]
  i3704.shadowCastingMode = i3705[7]
  i3704.sortingLayerID = i3705[8]
  i3704.sortingOrder = i3705[9]
  i3704.lightmapIndex = i3705[10]
  i3704.lightmapSceneIndex = i3705[11]
  i3704.lightmapScaleOffset = new pc.Vec4( i3705[12], i3705[13], i3705[14], i3705[15] )
  i3704.lightProbeUsage = i3705[16]
  i3704.reflectionProbeUsage = i3705[17]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'mesh')
  i3710.meshCount = i3711[2]
  i3710.activeVertexStreamsCount = i3711[3]
  i3710.alignment = i3711[4]
  i3710.renderMode = i3711[5]
  i3710.sortMode = i3711[6]
  i3710.lengthScale = i3711[7]
  i3710.velocityScale = i3711[8]
  i3710.cameraVelocityScale = i3711[9]
  i3710.normalDirection = i3711[10]
  i3710.sortingFudge = i3711[11]
  i3710.minParticleSize = i3711[12]
  i3710.maxParticleSize = i3711[13]
  i3710.pivot = new pc.Vec3( i3711[14], i3711[15], i3711[16] )
  request.r(i3711[17], i3711[18], 0, i3710, 'trailMaterial')
  i3710.applyActiveColorSpace = !!i3711[19]
  i3710.enabled = !!i3711[20]
  request.r(i3711[21], i3711[22], 0, i3710, 'sharedMaterial')
  var i3713 = i3711[23]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 2) {
  request.r(i3713[i + 0], i3713[i + 1], 2, i3712, '')
  }
  i3710.sharedMaterials = i3712
  i3710.receiveShadows = !!i3711[24]
  i3710.shadowCastingMode = i3711[25]
  i3710.sortingLayerID = i3711[26]
  i3710.sortingOrder = i3711[27]
  i3710.lightmapIndex = i3711[28]
  i3710.lightmapSceneIndex = i3711[29]
  i3710.lightmapScaleOffset = new pc.Vec4( i3711[30], i3711[31], i3711[32], i3711[33] )
  i3710.lightProbeUsage = i3711[34]
  i3710.reflectionProbeUsage = i3711[35]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3715 = data
  i3714.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3715[0], i3714.main)
  i3714.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3715[1], i3714.colorBySpeed)
  i3714.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3715[2], i3714.colorOverLifetime)
  i3714.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3715[3], i3714.emission)
  i3714.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3715[4], i3714.rotationBySpeed)
  i3714.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3715[5], i3714.rotationOverLifetime)
  i3714.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3715[6], i3714.shape)
  i3714.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3715[7], i3714.sizeBySpeed)
  i3714.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3715[8], i3714.sizeOverLifetime)
  i3714.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3715[9], i3714.textureSheetAnimation)
  i3714.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3715[10], i3714.velocityOverLifetime)
  i3714.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3715[11], i3714.noise)
  i3714.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3715[12], i3714.inheritVelocity)
  i3714.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3715[13], i3714.forceOverLifetime)
  i3714.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3715[14], i3714.limitVelocityOverLifetime)
  i3714.useAutoRandomSeed = !!i3715[15]
  i3714.randomSeed = i3715[16]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3716 = root || new pc.ParticleSystemMain()
  var i3717 = data
  i3716.duration = i3717[0]
  i3716.loop = !!i3717[1]
  i3716.prewarm = !!i3717[2]
  i3716.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[3], i3716.startDelay)
  i3716.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[4], i3716.startLifetime)
  i3716.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[5], i3716.startSpeed)
  i3716.startSize3D = !!i3717[6]
  i3716.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[7], i3716.startSizeX)
  i3716.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[8], i3716.startSizeY)
  i3716.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[9], i3716.startSizeZ)
  i3716.startRotation3D = !!i3717[10]
  i3716.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[11], i3716.startRotationX)
  i3716.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[12], i3716.startRotationY)
  i3716.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[13], i3716.startRotationZ)
  i3716.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3717[14], i3716.startColor)
  i3716.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3717[15], i3716.gravityModifier)
  i3716.simulationSpace = i3717[16]
  request.r(i3717[17], i3717[18], 0, i3716, 'customSimulationSpace')
  i3716.simulationSpeed = i3717[19]
  i3716.useUnscaledTime = !!i3717[20]
  i3716.scalingMode = i3717[21]
  i3716.playOnAwake = !!i3717[22]
  i3716.maxParticles = i3717[23]
  i3716.emitterVelocityMode = i3717[24]
  i3716.stopAction = i3717[25]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3718 = root || new pc.MinMaxCurve()
  var i3719 = data
  i3718.mode = i3719[0]
  i3718.curveMin = new pc.AnimationCurve( { keys_flow: i3719[1] } )
  i3718.curveMax = new pc.AnimationCurve( { keys_flow: i3719[2] } )
  i3718.curveMultiplier = i3719[3]
  i3718.constantMin = i3719[4]
  i3718.constantMax = i3719[5]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3720 = root || new pc.MinMaxGradient()
  var i3721 = data
  i3720.mode = i3721[0]
  i3720.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3721[1], i3720.gradientMin)
  i3720.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3721[2], i3720.gradientMax)
  i3720.colorMin = new pc.Color(i3721[3], i3721[4], i3721[5], i3721[6])
  i3720.colorMax = new pc.Color(i3721[7], i3721[8], i3721[9], i3721[10])
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3723 = data
  i3722.mode = i3723[0]
  var i3725 = i3723[1]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3725[i + 0]) );
  }
  i3722.colorKeys = i3724
  var i3727 = i3723[2]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3727[i + 0]) );
  }
  i3722.alphaKeys = i3726
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3728 = root || new pc.ParticleSystemColorBySpeed()
  var i3729 = data
  i3728.enabled = !!i3729[0]
  i3728.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3729[1], i3728.color)
  i3728.range = new pc.Vec2( i3729[2], i3729[3] )
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3733 = data
  i3732.color = new pc.Color(i3733[0], i3733[1], i3733[2], i3733[3])
  i3732.time = i3733[4]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3737 = data
  i3736.alpha = i3737[0]
  i3736.time = i3737[1]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3738 = root || new pc.ParticleSystemColorOverLifetime()
  var i3739 = data
  i3738.enabled = !!i3739[0]
  i3738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3739[1], i3738.color)
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3740 = root || new pc.ParticleSystemEmitter()
  var i3741 = data
  i3740.enabled = !!i3741[0]
  i3740.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[1], i3740.rateOverTime)
  i3740.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[2], i3740.rateOverDistance)
  var i3743 = i3741[3]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3743[i + 0]) );
  }
  i3740.bursts = i3742
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3746 = root || new pc.ParticleSystemBurst()
  var i3747 = data
  i3746.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[0], i3746.count)
  i3746.cycleCount = i3747[1]
  i3746.minCount = i3747[2]
  i3746.maxCount = i3747[3]
  i3746.repeatInterval = i3747[4]
  i3746.time = i3747[5]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3748 = root || new pc.ParticleSystemRotationBySpeed()
  var i3749 = data
  i3748.enabled = !!i3749[0]
  i3748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[1], i3748.x)
  i3748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[2], i3748.y)
  i3748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[3], i3748.z)
  i3748.separateAxes = !!i3749[4]
  i3748.range = new pc.Vec2( i3749[5], i3749[6] )
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3750 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3751 = data
  i3750.enabled = !!i3751[0]
  i3750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[1], i3750.x)
  i3750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[2], i3750.y)
  i3750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[3], i3750.z)
  i3750.separateAxes = !!i3751[4]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3752 = root || new pc.ParticleSystemShape()
  var i3753 = data
  i3752.enabled = !!i3753[0]
  i3752.shapeType = i3753[1]
  i3752.randomDirectionAmount = i3753[2]
  i3752.sphericalDirectionAmount = i3753[3]
  i3752.randomPositionAmount = i3753[4]
  i3752.alignToDirection = !!i3753[5]
  i3752.radius = i3753[6]
  i3752.radiusMode = i3753[7]
  i3752.radiusSpread = i3753[8]
  i3752.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[9], i3752.radiusSpeed)
  i3752.radiusThickness = i3753[10]
  i3752.angle = i3753[11]
  i3752.length = i3753[12]
  i3752.boxThickness = new pc.Vec3( i3753[13], i3753[14], i3753[15] )
  i3752.meshShapeType = i3753[16]
  request.r(i3753[17], i3753[18], 0, i3752, 'mesh')
  request.r(i3753[19], i3753[20], 0, i3752, 'meshRenderer')
  request.r(i3753[21], i3753[22], 0, i3752, 'skinnedMeshRenderer')
  i3752.useMeshMaterialIndex = !!i3753[23]
  i3752.meshMaterialIndex = i3753[24]
  i3752.useMeshColors = !!i3753[25]
  i3752.normalOffset = i3753[26]
  i3752.arc = i3753[27]
  i3752.arcMode = i3753[28]
  i3752.arcSpread = i3753[29]
  i3752.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[30], i3752.arcSpeed)
  i3752.donutRadius = i3753[31]
  i3752.position = new pc.Vec3( i3753[32], i3753[33], i3753[34] )
  i3752.rotation = new pc.Vec3( i3753[35], i3753[36], i3753[37] )
  i3752.scale = new pc.Vec3( i3753[38], i3753[39], i3753[40] )
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3754 = root || new pc.ParticleSystemSizeBySpeed()
  var i3755 = data
  i3754.enabled = !!i3755[0]
  i3754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[1], i3754.x)
  i3754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[2], i3754.y)
  i3754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[3], i3754.z)
  i3754.separateAxes = !!i3755[4]
  i3754.range = new pc.Vec2( i3755[5], i3755[6] )
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3756 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3757 = data
  i3756.enabled = !!i3757[0]
  i3756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[1], i3756.x)
  i3756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[2], i3756.y)
  i3756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[3], i3756.z)
  i3756.separateAxes = !!i3757[4]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3758 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3759 = data
  i3758.enabled = !!i3759[0]
  i3758.mode = i3759[1]
  i3758.animation = i3759[2]
  i3758.numTilesX = i3759[3]
  i3758.numTilesY = i3759[4]
  i3758.useRandomRow = !!i3759[5]
  i3758.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3759[6], i3758.frameOverTime)
  i3758.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3759[7], i3758.startFrame)
  i3758.cycleCount = i3759[8]
  i3758.rowIndex = i3759[9]
  i3758.flipU = i3759[10]
  i3758.flipV = i3759[11]
  i3758.spriteCount = i3759[12]
  var i3761 = i3759[13]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 2) {
  request.r(i3761[i + 0], i3761[i + 1], 2, i3760, '')
  }
  i3758.sprites = i3760
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3764 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3765 = data
  i3764.enabled = !!i3765[0]
  i3764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[1], i3764.x)
  i3764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[2], i3764.y)
  i3764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[3], i3764.z)
  i3764.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[4], i3764.radial)
  i3764.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[5], i3764.speedModifier)
  i3764.space = i3765[6]
  i3764.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[7], i3764.orbitalX)
  i3764.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[8], i3764.orbitalY)
  i3764.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[9], i3764.orbitalZ)
  i3764.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[10], i3764.orbitalOffsetX)
  i3764.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[11], i3764.orbitalOffsetY)
  i3764.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[12], i3764.orbitalOffsetZ)
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3766 = root || new pc.ParticleSystemNoise()
  var i3767 = data
  i3766.enabled = !!i3767[0]
  i3766.separateAxes = !!i3767[1]
  i3766.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[2], i3766.strengthX)
  i3766.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[3], i3766.strengthY)
  i3766.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[4], i3766.strengthZ)
  i3766.frequency = i3767[5]
  i3766.damping = !!i3767[6]
  i3766.octaveCount = i3767[7]
  i3766.octaveMultiplier = i3767[8]
  i3766.octaveScale = i3767[9]
  i3766.quality = i3767[10]
  i3766.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[11], i3766.scrollSpeed)
  i3766.scrollSpeedMultiplier = i3767[12]
  i3766.remapEnabled = !!i3767[13]
  i3766.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[14], i3766.remapX)
  i3766.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[15], i3766.remapY)
  i3766.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[16], i3766.remapZ)
  i3766.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[17], i3766.positionAmount)
  i3766.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[18], i3766.rotationAmount)
  i3766.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[19], i3766.sizeAmount)
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3768 = root || new pc.ParticleSystemInheritVelocity()
  var i3769 = data
  i3768.enabled = !!i3769[0]
  i3768.mode = i3769[1]
  i3768.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3769[2], i3768.curve)
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3770 = root || new pc.ParticleSystemForceOverLifetime()
  var i3771 = data
  i3770.enabled = !!i3771[0]
  i3770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3771[1], i3770.x)
  i3770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3771[2], i3770.y)
  i3770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3771[3], i3770.z)
  i3770.space = i3771[4]
  i3770.randomized = !!i3771[5]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3772 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3773 = data
  i3772.enabled = !!i3773[0]
  i3772.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[1], i3772.limit)
  i3772.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[2], i3772.limitX)
  i3772.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[3], i3772.limitY)
  i3772.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[4], i3772.limitZ)
  i3772.dampen = i3773[5]
  i3772.separateAxes = !!i3773[6]
  i3772.space = i3773[7]
  i3772.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[8], i3772.drag)
  i3772.multiplyDragByParticleSize = !!i3773[9]
  i3772.multiplyDragByParticleVelocity = !!i3773[10]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'sharedMesh')
  i3774.convex = !!i3775[2]
  i3774.enabled = !!i3775[3]
  i3774.isTrigger = !!i3775[4]
  request.r(i3775[5], i3775[6], 0, i3774, 'material')
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3777 = data
  i3776.mass = i3777[0]
  i3776.drag = i3777[1]
  i3776.angularDrag = i3777[2]
  i3776.useGravity = !!i3777[3]
  i3776.isKinematic = !!i3777[4]
  i3776.constraints = i3777[5]
  i3776.maxAngularVelocity = i3777[6]
  i3776.collisionDetectionMode = i3777[7]
  i3776.interpolation = i3777[8]
  return i3776
}

Deserializers["PortalGlow"] = function (request, data, root) {
  var i3778 = root || request.c( 'PortalGlow' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'surface')
  request.r(i3779[2], i3779[3], 0, i3778, 'swirl')
  i3778.glowColor = new pc.Color(i3779[4], i3779[5], i3779[6], i3779[7])
  i3778.pulseSpeed = i3779[8]
  i3778.pulseScale = i3779[9]
  i3778.rampDuration = i3779[10]
  return i3778
}

Deserializers["TeleportPortal"] = function (request, data, root) {
  var i3780 = root || request.c( 'TeleportPortal' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'planet')
  request.r(i3781[2], i3781[3], 0, i3780, 'pos')
  i3780.isPlanet = !!i3781[4]
  i3780.touchPadding = new pc.Vec3( i3781[5], i3781[6], i3781[7] )
  i3780.teleportSound = request.d('FMAudio', i3781[8], i3780.teleportSound)
  return i3780
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i3782 = root || request.c( 'FMAudio' )
  var i3783 = data
  request.r(i3783[0], i3783[1], 0, i3782, 'clip')
  i3782.channel = i3783[2]
  i3782.volume = i3783[3]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3785 = data
  i3784.color = new pc.Color(i3785[0], i3785[1], i3785[2], i3785[3])
  request.r(i3785[4], i3785[5], 0, i3784, 'sprite')
  i3784.flipX = !!i3785[6]
  i3784.flipY = !!i3785[7]
  i3784.drawMode = i3785[8]
  i3784.size = new pc.Vec2( i3785[9], i3785[10] )
  i3784.tileMode = i3785[11]
  i3784.adaptiveModeThreshold = i3785[12]
  i3784.maskInteraction = i3785[13]
  i3784.spriteSortPoint = i3785[14]
  i3784.enabled = !!i3785[15]
  request.r(i3785[16], i3785[17], 0, i3784, 'sharedMaterial')
  var i3787 = i3785[18]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 2) {
  request.r(i3787[i + 0], i3787[i + 1], 2, i3786, '')
  }
  i3784.sharedMaterials = i3786
  i3784.receiveShadows = !!i3785[19]
  i3784.shadowCastingMode = i3785[20]
  i3784.sortingLayerID = i3785[21]
  i3784.sortingOrder = i3785[22]
  i3784.lightmapIndex = i3785[23]
  i3784.lightmapSceneIndex = i3785[24]
  i3784.lightmapScaleOffset = new pc.Vec4( i3785[25], i3785[26], i3785[27], i3785[28] )
  i3784.lightProbeUsage = i3785[29]
  i3784.reflectionProbeUsage = i3785[30]
  return i3784
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i3788 = root || request.c( 'ScaleYoyo' )
  var i3789 = data
  i3788.delay = i3789[0]
  i3788.duration = i3789[1]
  i3788.easeType = i3789[2]
  i3788.loops = i3789[3]
  i3788.loopType = i3789[4]
  i3788.animationType = i3789[5]
  i3788.endValueV3 = new pc.Vec3( i3789[6], i3789[7], i3789[8] )
  i3788.isRelative = !!i3789[9]
  i3788.autoPlay = !!i3789[10]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3791 = data
  i3790.center = new pc.Vec3( i3791[0], i3791[1], i3791[2] )
  i3790.radius = i3791[3]
  i3790.enabled = !!i3791[4]
  i3790.isTrigger = !!i3791[5]
  request.r(i3791[6], i3791[7], 0, i3790, 'material')
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3793 = data
  i3792.name = i3793[0]
  i3792.halfPrecision = !!i3793[1]
  i3792.useSimplification = !!i3793[2]
  i3792.useUInt32IndexFormat = !!i3793[3]
  i3792.vertexCount = i3793[4]
  i3792.aabb = i3793[5]
  var i3795 = i3793[6]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( !!i3795[i + 0] );
  }
  i3792.streams = i3794
  i3792.vertices = i3793[7]
  var i3797 = i3793[8]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 1) {
    i3796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3797[i + 0]) );
  }
  i3792.subMeshes = i3796
  var i3799 = i3793[9]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 16) {
    i3798.push( new pc.Mat4().setData(i3799[i + 0], i3799[i + 1], i3799[i + 2], i3799[i + 3],  i3799[i + 4], i3799[i + 5], i3799[i + 6], i3799[i + 7],  i3799[i + 8], i3799[i + 9], i3799[i + 10], i3799[i + 11],  i3799[i + 12], i3799[i + 13], i3799[i + 14], i3799[i + 15]) );
  }
  i3792.bindposes = i3798
  var i3801 = i3793[10]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3801[i + 0]) );
  }
  i3792.blendShapes = i3800
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3807 = data
  i3806.triangles = i3807[0]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3813 = data
  i3812.name = i3813[0]
  var i3815 = i3813[1]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3815[i + 0]) );
  }
  i3812.frames = i3814
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3816 = root || new pc.UnityMaterial()
  var i3817 = data
  i3816.name = i3817[0]
  request.r(i3817[1], i3817[2], 0, i3816, 'shader')
  i3816.renderQueue = i3817[3]
  i3816.enableInstancing = !!i3817[4]
  var i3819 = i3817[5]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3819[i + 0]) );
  }
  i3816.floatParameters = i3818
  var i3821 = i3817[6]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3821[i + 0]) );
  }
  i3816.colorParameters = i3820
  var i3823 = i3817[7]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3823[i + 0]) );
  }
  i3816.vectorParameters = i3822
  var i3825 = i3817[8]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3825[i + 0]) );
  }
  i3816.textureParameters = i3824
  var i3827 = i3817[9]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3827[i + 0]) );
  }
  i3816.materialFlags = i3826
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3831 = data
  i3830.name = i3831[0]
  i3830.value = i3831[1]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3835 = data
  i3834.name = i3835[0]
  i3834.value = new pc.Color(i3835[1], i3835[2], i3835[3], i3835[4])
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.value = new pc.Vec4( i3839[1], i3839[2], i3839[3], i3839[4] )
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3843 = data
  i3842.name = i3843[0]
  request.r(i3843[1], i3843[2], 0, i3842, 'value')
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3847 = data
  i3846.name = i3847[0]
  i3846.enabled = !!i3847[1]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3849 = data
  i3848.name = i3849[0]
  i3848.width = i3849[1]
  i3848.height = i3849[2]
  i3848.mipmapCount = i3849[3]
  i3848.anisoLevel = i3849[4]
  i3848.filterMode = i3849[5]
  i3848.hdr = !!i3849[6]
  i3848.format = i3849[7]
  i3848.wrapMode = i3849[8]
  i3848.alphaIsTransparency = !!i3849[9]
  i3848.alphaSource = i3849[10]
  i3848.graphicsFormat = i3849[11]
  i3848.sRGBTexture = !!i3849[12]
  i3848.desiredColorSpace = i3849[13]
  i3848.wrapU = i3849[14]
  i3848.wrapV = i3849[15]
  return i3848
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i3850 = root || request.c( 'FindMonsterManager' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'database')
  var i3853 = i3851[2]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3853.length; i += 2) {
  request.r(i3853[i + 0], i3853[i + 1], 1, i3852, '')
  }
  i3850.listRespawn = i3852
  request.r(i3851[3], i3851[4], 0, i3850, 'playerTransform')
  request.r(i3851[5], i3851[6], 0, i3850, 'targetTutorial')
  request.r(i3851[7], i3851[8], 0, i3850, 'arrowTut')
  var i3855 = i3851[9]
  var i3854 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 1, i3854, '')
  }
  i3850.monsters = i3854
  i3850.playerTouchSize = new pc.Vec3( i3851[10], i3851[11], i3851[12] )
  request.r(i3851[13], i3851[14], 0, i3850, 'hiddenMonsterPanel')
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3861 = data
  i3860.textureMode = i3861[0]
  i3860.alignment = i3861[1]
  i3860.widthCurve = new pc.AnimationCurve( { keys_flow: i3861[2] } )
  i3860.colorGradient = i3861[3] ? new pc.ColorGradient(i3861[3][0], i3861[3][1], i3861[3][2]) : null
  var i3863 = i3861[4]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 3) {
    i3862.push( new pc.Vec3( i3863[i + 0], i3863[i + 1], i3863[i + 2] ) );
  }
  i3860.positions = i3862
  i3860.positionCount = i3861[5]
  i3860.widthMultiplier = i3861[6]
  i3860.startWidth = i3861[7]
  i3860.endWidth = i3861[8]
  i3860.numCornerVertices = i3861[9]
  i3860.numCapVertices = i3861[10]
  i3860.useWorldSpace = !!i3861[11]
  i3860.loop = !!i3861[12]
  i3860.startColor = new pc.Color(i3861[13], i3861[14], i3861[15], i3861[16])
  i3860.endColor = new pc.Color(i3861[17], i3861[18], i3861[19], i3861[20])
  i3860.generateLightingData = !!i3861[21]
  i3860.enabled = !!i3861[22]
  request.r(i3861[23], i3861[24], 0, i3860, 'sharedMaterial')
  var i3865 = i3861[25]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 2) {
  request.r(i3865[i + 0], i3865[i + 1], 2, i3864, '')
  }
  i3860.sharedMaterials = i3864
  i3860.receiveShadows = !!i3861[26]
  i3860.shadowCastingMode = i3861[27]
  i3860.sortingLayerID = i3861[28]
  i3860.sortingOrder = i3861[29]
  i3860.lightmapIndex = i3861[30]
  i3860.lightmapSceneIndex = i3861[31]
  i3860.lightmapScaleOffset = new pc.Vec4( i3861[32], i3861[33], i3861[34], i3861[35] )
  i3860.lightProbeUsage = i3861[36]
  i3860.reflectionProbeUsage = i3861[37]
  return i3860
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i3868 = root || request.c( 'TurtorialArrow' )
  var i3869 = data
  request.r(i3869[0], i3869[1], 0, i3868, 'lineRenderer')
  i3868.offset = new pc.Vec3( i3869[2], i3869[3], i3869[4] )
  i3868.planetSegments = i3869[5]
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3871 = data
  i3870.pivot = new pc.Vec2( i3871[0], i3871[1] )
  i3870.anchorMin = new pc.Vec2( i3871[2], i3871[3] )
  i3870.anchorMax = new pc.Vec2( i3871[4], i3871[5] )
  i3870.sizeDelta = new pc.Vec2( i3871[6], i3871[7] )
  i3870.anchoredPosition3D = new pc.Vec3( i3871[8], i3871[9], i3871[10] )
  i3870.rotation = new pc.Quat(i3871[11], i3871[12], i3871[13], i3871[14])
  i3870.scale = new pc.Vec3( i3871[15], i3871[16], i3871[17] )
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3873 = data
  i3872.planeDistance = i3873[0]
  i3872.referencePixelsPerUnit = i3873[1]
  i3872.isFallbackOverlay = !!i3873[2]
  i3872.renderMode = i3873[3]
  i3872.renderOrder = i3873[4]
  i3872.sortingLayerName = i3873[5]
  i3872.sortingOrder = i3873[6]
  i3872.scaleFactor = i3873[7]
  request.r(i3873[8], i3873[9], 0, i3872, 'worldCamera')
  i3872.overrideSorting = !!i3873[10]
  i3872.pixelPerfect = !!i3873[11]
  i3872.targetDisplay = i3873[12]
  i3872.overridePixelPerfect = !!i3873[13]
  i3872.enabled = !!i3873[14]
  return i3872
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3875 = data
  i3874.m_UiScaleMode = i3875[0]
  i3874.m_ReferencePixelsPerUnit = i3875[1]
  i3874.m_ScaleFactor = i3875[2]
  i3874.m_ReferenceResolution = new pc.Vec2( i3875[3], i3875[4] )
  i3874.m_ScreenMatchMode = i3875[5]
  i3874.m_MatchWidthOrHeight = i3875[6]
  i3874.m_PhysicalUnit = i3875[7]
  i3874.m_FallbackScreenDPI = i3875[8]
  i3874.m_DefaultSpriteDPI = i3875[9]
  i3874.m_DynamicPixelsPerUnit = i3875[10]
  i3874.m_PresetInfoIsWorld = !!i3875[11]
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3877 = data
  i3876.m_Alpha = i3877[0]
  i3876.m_Interactable = !!i3877[1]
  i3876.m_BlocksRaycasts = !!i3877[2]
  i3876.m_IgnoreParentGroups = !!i3877[3]
  i3876.enabled = !!i3877[4]
  return i3876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3879 = data
  i3878.m_IgnoreReversedGraphics = !!i3879[0]
  i3878.m_BlockingObjects = i3879[1]
  i3878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3879[2] )
  return i3878
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i3880 = root || request.c( 'HiddenMonsterPanel' )
  var i3881 = data
  request.r(i3881[0], i3881[1], 0, i3880, 'icon')
  i3880.openSound = request.d('FMAudio', i3881[2], i3880.openSound)
  request.r(i3881[3], i3881[4], 0, i3880, 'popRoot')
  i3880.popDuration = i3881[5]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3883 = data
  i3882.cullTransparentMesh = !!i3883[0]
  return i3882
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.UI.Image' )
  var i3885 = data
  request.r(i3885[0], i3885[1], 0, i3884, 'm_Sprite')
  i3884.m_Type = i3885[2]
  i3884.m_PreserveAspect = !!i3885[3]
  i3884.m_FillCenter = !!i3885[4]
  i3884.m_FillMethod = i3885[5]
  i3884.m_FillAmount = i3885[6]
  i3884.m_FillClockwise = !!i3885[7]
  i3884.m_FillOrigin = i3885[8]
  i3884.m_UseSpriteMesh = !!i3885[9]
  i3884.m_PixelsPerUnitMultiplier = i3885[10]
  request.r(i3885[11], i3885[12], 0, i3884, 'm_Material')
  i3884.m_Maskable = !!i3885[13]
  i3884.m_Color = new pc.Color(i3885[14], i3885[15], i3885[16], i3885[17])
  i3884.m_RaycastTarget = !!i3885[18]
  i3884.m_RaycastPadding = new pc.Vec4( i3885[19], i3885[20], i3885[21], i3885[22] )
  return i3884
}

Deserializers["GameButton"] = function (request, data, root) {
  var i3886 = root || request.c( 'GameButton' )
  var i3887 = data
  request.r(i3887[0], i3887[1], 0, i3886, 'background')
  request.r(i3887[2], i3887[3], 0, i3886, 'icon')
  request.r(i3887[4], i3887[5], 0, i3886, 'title')
  i3886.scale = new pc.Vec3( i3887[6], i3887[7], i3887[8] )
  i3886.pressAudio = request.d('FMAudio', i3887[9], i3886.pressAudio)
  i3886.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3887[10], i3886.m_OnClick)
  i3886.m_Navigation = request.d('UnityEngine.UI.Navigation', i3887[11], i3886.m_Navigation)
  i3886.m_Transition = i3887[12]
  i3886.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3887[13], i3886.m_Colors)
  i3886.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3887[14], i3886.m_SpriteState)
  i3886.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3887[15], i3886.m_AnimationTriggers)
  i3886.m_Interactable = !!i3887[16]
  request.r(i3887[17], i3887[18], 0, i3886, 'm_TargetGraphic')
  return i3886
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3888 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3889 = data
  i3888.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3889[0], i3888.m_PersistentCalls)
  return i3888
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3890 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3891 = data
  var i3893 = i3891[0]
  var i3892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.add(request.d('UnityEngine.Events.PersistentCall', i3893[i + 0]));
  }
  i3890.m_Calls = i3892
  return i3890
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3897 = data
  request.r(i3897[0], i3897[1], 0, i3896, 'm_Target')
  i3896.m_TargetAssemblyTypeName = i3897[2]
  i3896.m_MethodName = i3897[3]
  i3896.m_Mode = i3897[4]
  i3896.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3897[5], i3896.m_Arguments)
  i3896.m_CallState = i3897[6]
  return i3896
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3898 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3899 = data
  i3898.m_Mode = i3899[0]
  i3898.m_WrapAround = !!i3899[1]
  request.r(i3899[2], i3899[3], 0, i3898, 'm_SelectOnUp')
  request.r(i3899[4], i3899[5], 0, i3898, 'm_SelectOnDown')
  request.r(i3899[6], i3899[7], 0, i3898, 'm_SelectOnLeft')
  request.r(i3899[8], i3899[9], 0, i3898, 'm_SelectOnRight')
  return i3898
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3900 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3901 = data
  i3900.m_NormalColor = new pc.Color(i3901[0], i3901[1], i3901[2], i3901[3])
  i3900.m_HighlightedColor = new pc.Color(i3901[4], i3901[5], i3901[6], i3901[7])
  i3900.m_PressedColor = new pc.Color(i3901[8], i3901[9], i3901[10], i3901[11])
  i3900.m_SelectedColor = new pc.Color(i3901[12], i3901[13], i3901[14], i3901[15])
  i3900.m_DisabledColor = new pc.Color(i3901[16], i3901[17], i3901[18], i3901[19])
  i3900.m_ColorMultiplier = i3901[20]
  i3900.m_FadeDuration = i3901[21]
  return i3900
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3903 = data
  request.r(i3903[0], i3903[1], 0, i3902, 'm_HighlightedSprite')
  request.r(i3903[2], i3903[3], 0, i3902, 'm_PressedSprite')
  request.r(i3903[4], i3903[5], 0, i3902, 'm_SelectedSprite')
  request.r(i3903[6], i3903[7], 0, i3902, 'm_DisabledSprite')
  return i3902
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3904 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3905 = data
  i3904.m_NormalTrigger = i3905[0]
  i3904.m_HighlightedTrigger = i3905[1]
  i3904.m_PressedTrigger = i3905[2]
  i3904.m_SelectedTrigger = i3905[3]
  i3904.m_DisabledTrigger = i3905[4]
  return i3904
}

Deserializers["HideButton"] = function (request, data, root) {
  var i3906 = root || request.c( 'HideButton' )
  var i3907 = data
  return i3906
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, 'm_ObjectArgument')
  i3908.m_ObjectArgumentAssemblyTypeName = i3909[2]
  i3908.m_IntArgument = i3909[3]
  i3908.m_FloatArgument = i3909[4]
  i3908.m_StringArgument = i3909[5]
  i3908.m_BoolArgument = !!i3909[6]
  return i3908
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3911 = data
  i3910.m_hasFontAssetChanged = !!i3911[0]
  request.r(i3911[1], i3911[2], 0, i3910, 'm_baseMaterial')
  i3910.m_maskOffset = new pc.Vec4( i3911[3], i3911[4], i3911[5], i3911[6] )
  i3910.m_text = i3911[7]
  i3910.m_isRightToLeft = !!i3911[8]
  request.r(i3911[9], i3911[10], 0, i3910, 'm_fontAsset')
  request.r(i3911[11], i3911[12], 0, i3910, 'm_sharedMaterial')
  var i3913 = i3911[13]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 2) {
  request.r(i3913[i + 0], i3913[i + 1], 2, i3912, '')
  }
  i3910.m_fontSharedMaterials = i3912
  request.r(i3911[14], i3911[15], 0, i3910, 'm_fontMaterial')
  var i3915 = i3911[16]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 2) {
  request.r(i3915[i + 0], i3915[i + 1], 2, i3914, '')
  }
  i3910.m_fontMaterials = i3914
  i3910.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3911[17], i3911[18], i3911[19], i3911[20])
  i3910.m_fontColor = new pc.Color(i3911[21], i3911[22], i3911[23], i3911[24])
  i3910.m_enableVertexGradient = !!i3911[25]
  i3910.m_colorMode = i3911[26]
  i3910.m_fontColorGradient = request.d('TMPro.VertexGradient', i3911[27], i3910.m_fontColorGradient)
  request.r(i3911[28], i3911[29], 0, i3910, 'm_fontColorGradientPreset')
  request.r(i3911[30], i3911[31], 0, i3910, 'm_spriteAsset')
  i3910.m_tintAllSprites = !!i3911[32]
  request.r(i3911[33], i3911[34], 0, i3910, 'm_StyleSheet')
  i3910.m_TextStyleHashCode = i3911[35]
  i3910.m_overrideHtmlColors = !!i3911[36]
  i3910.m_faceColor = UnityEngine.Color32.ConstructColor(i3911[37], i3911[38], i3911[39], i3911[40])
  i3910.m_fontSize = i3911[41]
  i3910.m_fontSizeBase = i3911[42]
  i3910.m_fontWeight = i3911[43]
  i3910.m_enableAutoSizing = !!i3911[44]
  i3910.m_fontSizeMin = i3911[45]
  i3910.m_fontSizeMax = i3911[46]
  i3910.m_fontStyle = i3911[47]
  i3910.m_HorizontalAlignment = i3911[48]
  i3910.m_VerticalAlignment = i3911[49]
  i3910.m_textAlignment = i3911[50]
  i3910.m_characterSpacing = i3911[51]
  i3910.m_characterHorizontalScale = i3911[52]
  i3910.m_wordSpacing = i3911[53]
  i3910.m_lineSpacing = i3911[54]
  i3910.m_lineSpacingMax = i3911[55]
  i3910.m_paragraphSpacing = i3911[56]
  i3910.m_charWidthMaxAdj = i3911[57]
  i3910.m_TextWrappingMode = i3911[58]
  i3910.m_wordWrappingRatios = i3911[59]
  i3910.m_overflowMode = i3911[60]
  request.r(i3911[61], i3911[62], 0, i3910, 'm_linkedTextComponent')
  request.r(i3911[63], i3911[64], 0, i3910, 'parentLinkedComponent')
  i3910.m_enableKerning = !!i3911[65]
  var i3917 = i3911[66]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.add(i3917[i + 0]);
  }
  i3910.m_ActiveFontFeatures = i3916
  i3910.m_enableExtraPadding = !!i3911[67]
  i3910.checkPaddingRequired = !!i3911[68]
  i3910.m_isRichText = !!i3911[69]
  i3910.m_parseCtrlCharacters = !!i3911[70]
  i3910.m_isOrthographic = !!i3911[71]
  i3910.m_isCullingEnabled = !!i3911[72]
  i3910.m_horizontalMapping = i3911[73]
  i3910.m_verticalMapping = i3911[74]
  i3910.m_uvLineOffset = i3911[75]
  i3910.m_geometrySortingOrder = i3911[76]
  i3910.m_IsTextObjectScaleStatic = !!i3911[77]
  i3910.m_VertexBufferAutoSizeReduction = !!i3911[78]
  i3910.m_useMaxVisibleDescender = !!i3911[79]
  i3910.m_pageToDisplay = i3911[80]
  i3910.m_margin = new pc.Vec4( i3911[81], i3911[82], i3911[83], i3911[84] )
  i3910.m_isUsingLegacyAnimationComponent = !!i3911[85]
  i3910.m_isVolumetricText = !!i3911[86]
  request.r(i3911[87], i3911[88], 0, i3910, 'm_Material')
  i3910.m_EmojiFallbackSupport = !!i3911[89]
  i3910.m_Maskable = !!i3911[90]
  i3910.m_Color = new pc.Color(i3911[91], i3911[92], i3911[93], i3911[94])
  i3910.m_RaycastTarget = !!i3911[95]
  i3910.m_RaycastPadding = new pc.Vec4( i3911[96], i3911[97], i3911[98], i3911[99] )
  return i3910
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3918 = root || request.c( 'TMPro.VertexGradient' )
  var i3919 = data
  i3918.topLeft = new pc.Color(i3919[0], i3919[1], i3919[2], i3919[3])
  i3918.topRight = new pc.Color(i3919[4], i3919[5], i3919[6], i3919[7])
  i3918.bottomLeft = new pc.Color(i3919[8], i3919[9], i3919[10], i3919[11])
  i3918.bottomRight = new pc.Color(i3919[12], i3919[13], i3919[14], i3919[15])
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3923 = data
  i3922.name = i3923[0]
  i3922.atlasId = i3923[1]
  i3922.mipmapCount = i3923[2]
  i3922.hdr = !!i3923[3]
  i3922.size = i3923[4]
  i3922.anisoLevel = i3923[5]
  i3922.filterMode = i3923[6]
  var i3925 = i3923[7]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 4) {
    i3924.push( UnityEngine.Rect.MinMaxRect(i3925[i + 0], i3925[i + 1], i3925[i + 2], i3925[i + 3]) );
  }
  i3922.rects = i3924
  i3922.wrapU = i3923[8]
  i3922.wrapV = i3923[9]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3929 = data
  i3928.name = i3929[0]
  i3928.index = i3929[1]
  i3928.startup = !!i3929[2]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3931 = data
  i3930.aspect = i3931[0]
  i3930.orthographic = !!i3931[1]
  i3930.orthographicSize = i3931[2]
  i3930.backgroundColor = new pc.Color(i3931[3], i3931[4], i3931[5], i3931[6])
  i3930.nearClipPlane = i3931[7]
  i3930.farClipPlane = i3931[8]
  i3930.fieldOfView = i3931[9]
  i3930.depth = i3931[10]
  i3930.clearFlags = i3931[11]
  i3930.cullingMask = i3931[12]
  i3930.rect = i3931[13]
  request.r(i3931[14], i3931[15], 0, i3930, 'targetTexture')
  i3930.usePhysicalProperties = !!i3931[16]
  i3930.focalLength = i3931[17]
  i3930.sensorSize = new pc.Vec2( i3931[18], i3931[19] )
  i3930.lensShift = new pc.Vec2( i3931[20], i3931[21] )
  i3930.gateFit = i3931[22]
  i3930.commandBufferCount = i3931[23]
  i3930.cameraType = i3931[24]
  i3930.enabled = !!i3931[25]
  return i3930
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i3932 = root || request.c( 'ScreenDeltaInputSystem' )
  var i3933 = data
  return i3932
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i3934 = root || request.c( 'MonsterProgressBar' )
  var i3935 = data
  i3934.countSceneMonsters = !!i3935[0]
  i3934.startFound = i3935[1]
  i3934.total = i3935[2]
  request.r(i3935[3], i3935[4], 0, i3934, 'fill')
  request.r(i3935[5], i3935[6], 0, i3934, 'countText')
  request.r(i3935[7], i3935[8], 0, i3934, 'icon')
  i3934.fillSpeed = i3935[9]
  return i3934
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3936 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3937 = data
  i3936.m_ShowMaskGraphic = !!i3937[0]
  return i3936
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i3938 = root || request.c( 'StoryTextView' )
  var i3939 = data
  request.r(i3939[0], i3939[1], 0, i3938, 'label')
  i3938.popDuration = i3939[2]
  i3938.pulseAmount = i3939[3]
  i3938.pulseSpeed = i3939[4]
  i3938.fadeDuration = i3939[5]
  return i3938
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3940 = root || request.c( 'UnityEngine.UI.Button' )
  var i3941 = data
  i3940.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3941[0], i3940.m_OnClick)
  i3940.m_Navigation = request.d('UnityEngine.UI.Navigation', i3941[1], i3940.m_Navigation)
  i3940.m_Transition = i3941[2]
  i3940.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3941[3], i3940.m_Colors)
  i3940.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3941[4], i3940.m_SpriteState)
  i3940.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3941[5], i3940.m_AnimationTriggers)
  i3940.m_Interactable = !!i3941[6]
  request.r(i3941[7], i3941[8], 0, i3940, 'm_TargetGraphic')
  return i3940
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i3942 = root || request.c( 'JumpButton' )
  var i3943 = data
  request.r(i3943[0], i3943[1], 0, i3942, 'character')
  return i3942
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i3944 = root || request.c( 'PlayableJoystick' )
  var i3945 = data
  i3944.handleRange = i3945[0]
  i3944.deadZone = i3945[1]
  i3944.floating = !!i3945[2]
  request.r(i3945[3], i3945[4], 0, i3944, 'background')
  request.r(i3945[5], i3945[6], 0, i3944, 'knob')
  return i3944
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i3946 = root || request.c( 'FMCharacter' )
  var i3947 = data
  request.r(i3947[0], i3947[1], 0, i3946, 'planetTransform')
  request.r(i3947[2], i3947[3], 0, i3946, 'animator')
  request.r(i3947[4], i3947[5], 0, i3946, 'joystick')
  i3946._rotationRate = i3947[6]
  i3946._maxWalkSpeed = i3947[7]
  i3946._maxAcceleration = i3947[8]
  i3946._brakingDecelerationWalking = i3947[9]
  i3946._airControl = i3947[10]
  i3946._jumpImpulse = i3947[11]
  i3946._gravity = new pc.Vec3( i3947[12], i3947[13], i3947[14] )
  i3946._gravityScale = i3947[15]
  request.r(i3947[16], i3947[17], 0, i3946, '_camera')
  i3946.jumpSound = request.d('FMAudio', i3947[18], i3946.jumpSound)
  i3946.stepHeight = i3947[19]
  return i3946
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i3948 = root || request.c( 'FM3rdInput' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'followTarget')
  i3948.followDistance = i3949[2]
  i3948.followMinDistance = i3949[3]
  i3948.followMaxDistance = i3949[4]
  i3948.maxPitch = i3949[5]
  i3948.minPitch = i3949[6]
  i3948.invertLook = !!i3949[7]
  i3948.lookSensitivity = new pc.Vec2( i3949[8], i3949[9] )
  request.r(i3949[10], i3949[11], 0, i3948, 'planetTransform')
  i3948.cameraDistance = i3949[12]
  i3948.cameraRadius = i3949[13]
  request.r(i3949[14], i3949[15], 0, i3948, 'cam')
  request.r(i3949[16], i3949[17], 0, i3948, 'lookArea')
  i3948.extraRoll = i3949[18]
  i3948.autoReturnDelay = i3949[19]
  i3948.autoReturnSpeed = i3949[20]
  i3948.defaultPitch = i3949[21]
  i3948.enableAutoReturn = !!i3949[22]
  i3948.forwardSpeedMultiplier = i3949[23]
  i3948.backwardSpeedMultiplier = i3949[24]
  return i3948
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i3950 = root || request.c( 'FindMonsterPlayerControl' )
  var i3951 = data
  request.r(i3951[0], i3951[1], 0, i3950, 'playerSO')
  request.r(i3951[2], i3951[3], 0, i3950, 'playerBase')
  request.r(i3951[4], i3951[5], 0, i3950, 'morphRoot')
  request.r(i3951[6], i3951[7], 0, i3950, 'poopFx')
  request.r(i3951[8], i3951[9], 0, i3950, 'poopRoot')
  request.r(i3951[10], i3951[11], 0, i3950, 'trailSpeed')
  i3950.popSound = request.d('FMAudio', i3951[12], i3950.popSound)
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i3953 = data
  i3952.enabled = !!i3953[0]
  i3952.center = new pc.Vec3( i3953[1], i3953[2], i3953[3] )
  i3952.radius = i3953[4]
  i3952.height = i3953[5]
  i3952.minMoveDistance = i3953[6]
  i3952.skinWidth = i3953[7]
  i3952.enableOverlapRecovery = !!i3953[8]
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3955 = data
  request.r(i3955[0], i3955[1], 0, i3954, 'animatorController')
  request.r(i3955[2], i3955[3], 0, i3954, 'avatar')
  i3954.updateMode = i3955[4]
  i3954.hasTransformHierarchy = !!i3955[5]
  i3954.applyRootMotion = !!i3955[6]
  var i3957 = i3955[7]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 2) {
  request.r(i3957[i + 0], i3957[i + 1], 2, i3956, '')
  }
  i3954.humanBones = i3956
  i3954.enabled = !!i3955[8]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3961 = data
  request.r(i3961[0], i3961[1], 0, i3960, 'sharedMesh')
  var i3963 = i3961[2]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 2) {
  request.r(i3963[i + 0], i3963[i + 1], 2, i3962, '')
  }
  i3960.bones = i3962
  i3960.updateWhenOffscreen = !!i3961[3]
  i3960.localBounds = i3961[4]
  request.r(i3961[5], i3961[6], 0, i3960, 'rootBone')
  var i3965 = i3961[7]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3965[i + 0]) );
  }
  i3960.blendShapesWeights = i3964
  i3960.enabled = !!i3961[8]
  request.r(i3961[9], i3961[10], 0, i3960, 'sharedMaterial')
  var i3967 = i3961[11]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 2) {
  request.r(i3967[i + 0], i3967[i + 1], 2, i3966, '')
  }
  i3960.sharedMaterials = i3966
  i3960.receiveShadows = !!i3961[12]
  i3960.shadowCastingMode = i3961[13]
  i3960.sortingLayerID = i3961[14]
  i3960.sortingOrder = i3961[15]
  i3960.lightmapIndex = i3961[16]
  i3960.lightmapSceneIndex = i3961[17]
  i3960.lightmapScaleOffset = new pc.Vec4( i3961[18], i3961[19], i3961[20], i3961[21] )
  i3960.lightProbeUsage = i3961[22]
  i3960.reflectionProbeUsage = i3961[23]
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3971 = data
  i3970.weight = i3971[0]
  return i3970
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i3972 = root || request.c( 'CharacterFootstep' )
  var i3973 = data
  request.r(i3973[0], i3973[1], 0, i3972, 'ecmCharacter')
  i3972.audioSource = request.d('FMAudio', i3973[2], i3972.audioSource)
  i3972.speed = i3973[3]
  return i3972
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3974 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3975 = data
  request.r(i3975[0], i3975[1], 0, i3974, 'm_FirstSelected')
  i3974.m_sendNavigationEvents = !!i3975[2]
  i3974.m_DragThreshold = i3975[3]
  return i3974
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3976 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3977 = data
  i3976.m_HorizontalAxis = i3977[0]
  i3976.m_VerticalAxis = i3977[1]
  i3976.m_SubmitButton = i3977[2]
  i3976.m_CancelButton = i3977[3]
  i3976.m_InputActionsPerSecond = i3977[4]
  i3976.m_RepeatDelay = i3977[5]
  i3976.m_ForceModuleActive = !!i3977[6]
  i3976.m_SendPointerHoverToParent = !!i3977[7]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3979 = data
  request.r(i3979[0], i3979[1], 0, i3978, 'clip')
  request.r(i3979[2], i3979[3], 0, i3978, 'outputAudioMixerGroup')
  i3978.playOnAwake = !!i3979[4]
  i3978.loop = !!i3979[5]
  i3978.time = i3979[6]
  i3978.volume = i3979[7]
  i3978.pitch = i3979[8]
  i3978.enabled = !!i3979[9]
  return i3978
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i3980 = root || request.c( 'PlayableAudio' )
  var i3981 = data
  request.r(i3981[0], i3981[1], 0, i3980, 'source')
  request.r(i3981[2], i3981[3], 0, i3980, 'buttonClick')
  return i3980
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3982 = root || request.c( 'LunaController' )
  var i3983 = data
  i3982.LimitTimePlay = !!i3983[0]
  i3982.TimePlay = i3983[1]
  i3982.UseHand = !!i3983[2]
  request.r(i3983[3], i3983[4], 0, i3982, 'BGM')
  request.r(i3983[5], i3983[6], 0, i3982, 'musicSource')
  i3982.musicVolume = i3983[7]
  var i3985 = i3983[8]
  var i3984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3985.length; i += 2) {
  request.r(i3985[i + 0], i3985[i + 1], 1, i3984, '')
  }
  i3982.CTA = i3984
  request.r(i3983[9], i3983[10], 0, i3982, 'endCard')
  return i3982
}

Deserializers["PointerHand"] = function (request, data, root) {
  var i3988 = root || request.c( 'PointerHand' )
  var i3989 = data
  request.r(i3989[0], i3989[1], 0, i3988, 'pivot')
  request.r(i3989[2], i3989[3], 0, i3988, 'visual')
  request.r(i3989[4], i3989[5], 0, i3988, 'ripple')
  i3988.height = i3989[6]
  i3988.fingerDirection = new pc.Vec2( i3989[7], i3989[8] )
  i3988.cycle = i3989[9]
  i3988.pause = i3989[10]
  i3988.liftDistance = i3989[11]
  i3988.rippleScale = i3989[12]
  i3988.appearDuration = i3989[13]
  return i3988
}

Deserializers["ShineBurst"] = function (request, data, root) {
  var i3990 = root || request.c( 'ShineBurst' )
  var i3991 = data
  request.r(i3991[0], i3991[1], 0, i3990, 'sprite')
  i3990.duration = i3991[2]
  i3990.startScale = i3991[3]
  i3990.endScale = i3991[4]
  return i3990
}

Deserializers["ScreenTransition"] = function (request, data, root) {
  var i3992 = root || request.c( 'ScreenTransition' )
  var i3993 = data
  request.r(i3993[0], i3993[1], 0, i3992, 'overlay')
  request.r(i3993[2], i3993[3], 0, i3992, 'glow')
  request.r(i3993[4], i3993[5], 0, i3992, 'swirl')
  request.r(i3993[6], i3993[7], 0, i3992, 'swirlInner')
  request.r(i3993[8], i3993[9], 0, i3992, 'flash')
  var i3995 = i3993[10]
  var i3994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i3995.length; i += 2) {
  request.r(i3995[i + 0], i3995[i + 1], 1, i3994, '')
  }
  i3992.sparkles = i3994
  request.r(i3993[11], i3993[12], 0, i3992, 'vortex')
  var i3997 = i3993[13]
  var i3996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i3997.length; i += 2) {
  request.r(i3997[i + 0], i3997[i + 1], 1, i3996, '')
  }
  i3992.vortexArms = i3996
  i3992.coverDuration = i3993[14]
  i3992.holdDuration = i3993[15]
  i3992.revealDuration = i3993[16]
  i3992.swirlSpeed = i3993[17]
  i3992.swirlMaxScale = i3993[18]
  i3992.sparkleRadius = i3993[19]
  i3992.sparkleInnerRadius = i3993[20]
  i3992.overlayPulseColor = new pc.Color(i3993[21], i3993[22], i3993[23], i3993[24])
  i3992.vortexSpeed = i3993[25]
  i3992.sparkleSpin = i3993[26]
  request.r(i3993[27], i3993[28], 0, i3992, 'warpCamera')
  i3992.warpFov = i3993[29]
  request.r(i3993[30], i3993[31], 0, i3992, 'cameraRig')
  i3992.rollDegrees = i3993[32]
  return i3992
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i4000 = root || request.c( 'MorphHuntStory' )
  var i4001 = data
  request.r(i4001[0], i4001[1], 0, i4000, 'player')
  request.r(i4001[2], i4001[3], 0, i4000, 'look')
  var i4003 = i4001[4]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 2) {
  request.r(i4003[i + 0], i4003[i + 1], 2, i4002, '')
  }
  i4000.morphs = i4002
  request.r(i4001[5], i4001[6], 0, i4000, 'startLookAt')
  i4000.startPitch = i4001[7]
  request.r(i4001[8], i4001[9], 0, i4000, 'hand')
  i4000.handOffset = new pc.Vec3( i4001[10], i4001[11], i4001[12] )
  request.r(i4001[13], i4001[14], 0, i4000, 'storyText')
  request.r(i4001[15], i4001[16], 0, i4000, 'unlockText')
  request.r(i4001[17], i4001[18], 0, i4000, 'shine')
  request.r(i4001[19], i4001[20], 0, i4000, 'finalPanel')
  i4000.introText = i4001[21]
  i4000.unlockedFormat = i4001[22]
  i4000.oneMoreText = i4001[23]
  i4000.introDelay = i4001[24]
  i4000.handHideDistance = i4001[25]
  i4000.cameraTurnDuration = i4001[26]
  i4000.finalDuration = i4001[27]
  return i4000
}

Deserializers["PlayableFrame"] = function (request, data, root) {
  var i4006 = root || request.c( 'PlayableFrame' )
  var i4007 = data
  request.r(i4007[0], i4007[1], 0, i4006, 'popRoot')
  i4006.popDuration = i4007[2]
  return i4006
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i4008 = root || request.c( 'ControlsTutorial' )
  var i4009 = data
  request.r(i4009[0], i4009[1], 0, i4008, 'player')
  request.r(i4009[2], i4009[3], 0, i4008, 'look')
  request.r(i4009[4], i4009[5], 0, i4008, 'hand')
  request.r(i4009[6], i4009[7], 0, i4008, 'text')
  request.r(i4009[8], i4009[9], 0, i4008, 'viewFrom')
  request.r(i4009[10], i4009[11], 0, i4008, 'viewTo')
  request.r(i4009[12], i4009[13], 0, i4008, 'joystickRing')
  request.r(i4009[14], i4009[15], 0, i4008, 'jumpButton')
  i4008.viewText = i4009[16]
  i4008.moveText = i4009[17]
  i4008.jumpText = i4009[18]
  i4008.lookDegrees = i4009[19]
  i4008.moveDistance = i4009[20]
  i4008.jumps = i4009[21]
  i4008.jumpStep = !!i4009[22]
  i4008.startDelay = i4009[23]
  i4008.stepGap = i4009[24]
  i4008.swipeDuration = i4009[25]
  i4008.joystickSwipe = i4009[26]
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4011 = data
  i4010.ambientIntensity = i4011[0]
  i4010.reflectionIntensity = i4011[1]
  i4010.ambientMode = i4011[2]
  i4010.ambientLight = new pc.Color(i4011[3], i4011[4], i4011[5], i4011[6])
  i4010.ambientSkyColor = new pc.Color(i4011[7], i4011[8], i4011[9], i4011[10])
  i4010.ambientGroundColor = new pc.Color(i4011[11], i4011[12], i4011[13], i4011[14])
  i4010.ambientEquatorColor = new pc.Color(i4011[15], i4011[16], i4011[17], i4011[18])
  i4010.fogColor = new pc.Color(i4011[19], i4011[20], i4011[21], i4011[22])
  i4010.fogEndDistance = i4011[23]
  i4010.fogStartDistance = i4011[24]
  i4010.fogDensity = i4011[25]
  i4010.fog = !!i4011[26]
  request.r(i4011[27], i4011[28], 0, i4010, 'skybox')
  i4010.fogMode = i4011[29]
  var i4013 = i4011[30]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4013[i + 0]) );
  }
  i4010.lightmaps = i4012
  i4010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4011[31], i4010.lightProbes)
  i4010.lightmapsMode = i4011[32]
  i4010.mixedBakeMode = i4011[33]
  i4010.environmentLightingMode = i4011[34]
  i4010.ambientProbe = new pc.SphericalHarmonicsL2(i4011[35])
  request.r(i4011[36], i4011[37], 0, i4010, 'customReflection')
  request.r(i4011[38], i4011[39], 0, i4010, 'defaultReflection')
  i4010.defaultReflectionMode = i4011[40]
  i4010.defaultReflectionResolution = i4011[41]
  i4010.sunLightObjectId = i4011[42]
  i4010.pixelLightCount = i4011[43]
  i4010.defaultReflectionHDR = !!i4011[44]
  i4010.hasLightDataAsset = !!i4011[45]
  i4010.hasManualGenerate = !!i4011[46]
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4017 = data
  request.r(i4017[0], i4017[1], 0, i4016, 'lightmapColor')
  request.r(i4017[2], i4017[3], 0, i4016, 'lightmapDirection')
  request.r(i4017[4], i4017[5], 0, i4016, 'shadowMask')
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4018 = root || new UnityEngine.LightProbes()
  var i4019 = data
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4025 = data
  var i4027 = i4025[0]
  var i4026 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4027.length; i += 1) {
    i4026.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4027[i + 0]));
  }
  i4024.ShaderCompilationErrors = i4026
  i4024.name = i4025[1]
  i4024.guid = i4025[2]
  var i4029 = i4025[3]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( i4029[i + 0] );
  }
  i4024.shaderDefinedKeywords = i4028
  var i4031 = i4025[4]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4031[i + 0]) );
  }
  i4024.passes = i4030
  var i4033 = i4025[5]
  var i4032 = []
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4033[i + 0]) );
  }
  i4024.usePasses = i4032
  var i4035 = i4025[6]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4035[i + 0]) );
  }
  i4024.defaultParameterValues = i4034
  request.r(i4025[7], i4025[8], 0, i4024, 'unityFallbackShader')
  i4024.readDepth = !!i4025[9]
  i4024.hasDepthOnlyPass = !!i4025[10]
  i4024.isCreatedByShaderGraph = !!i4025[11]
  i4024.disableBatching = !!i4025[12]
  i4024.compiled = !!i4025[13]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4039 = data
  i4038.shaderName = i4039[0]
  i4038.errorMessage = i4039[1]
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4044 = root || new pc.UnityShaderPass()
  var i4045 = data
  i4044.id = i4045[0]
  i4044.subShaderIndex = i4045[1]
  i4044.name = i4045[2]
  i4044.passType = i4045[3]
  i4044.grabPassTextureName = i4045[4]
  i4044.usePass = !!i4045[5]
  i4044.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[6], i4044.zTest)
  i4044.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[7], i4044.zWrite)
  i4044.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[8], i4044.culling)
  i4044.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4045[9], i4044.blending)
  i4044.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4045[10], i4044.alphaBlending)
  i4044.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[11], i4044.colorWriteMask)
  i4044.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[12], i4044.offsetUnits)
  i4044.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[13], i4044.offsetFactor)
  i4044.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[14], i4044.stencilRef)
  i4044.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[15], i4044.stencilReadMask)
  i4044.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4045[16], i4044.stencilWriteMask)
  i4044.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4045[17], i4044.stencilOp)
  i4044.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4045[18], i4044.stencilOpFront)
  i4044.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4045[19], i4044.stencilOpBack)
  var i4047 = i4045[20]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4047[i + 0]) );
  }
  i4044.tags = i4046
  var i4049 = i4045[21]
  var i4048 = []
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.push( i4049[i + 0] );
  }
  i4044.passDefinedKeywords = i4048
  var i4051 = i4045[22]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4051[i + 0]) );
  }
  i4044.passDefinedKeywordGroups = i4050
  var i4053 = i4045[23]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4053[i + 0]) );
  }
  i4044.variants = i4052
  var i4055 = i4045[24]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4055[i + 0]) );
  }
  i4044.excludedVariants = i4054
  i4044.hasDepthReader = !!i4045[25]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4057 = data
  i4056.val = i4057[0]
  i4056.name = i4057[1]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4059 = data
  i4058.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4059[0], i4058.src)
  i4058.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4059[1], i4058.dst)
  i4058.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4059[2], i4058.op)
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4061 = data
  i4060.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4061[0], i4060.pass)
  i4060.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4061[1], i4060.fail)
  i4060.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4061[2], i4060.zFail)
  i4060.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4061[3], i4060.comp)
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4065 = data
  i4064.name = i4065[0]
  i4064.value = i4065[1]
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4069 = data
  var i4071 = i4069[0]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( i4071[i + 0] );
  }
  i4068.keywords = i4070
  i4068.hasDiscard = !!i4069[1]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4075 = data
  i4074.passId = i4075[0]
  i4074.subShaderIndex = i4075[1]
  var i4077 = i4075[2]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( i4077[i + 0] );
  }
  i4074.keywords = i4076
  i4074.vertexProgram = i4075[3]
  i4074.fragmentProgram = i4075[4]
  i4074.exportedForWebGl2 = !!i4075[5]
  i4074.readDepth = !!i4075[6]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4081 = data
  request.r(i4081[0], i4081[1], 0, i4080, 'shader')
  i4080.pass = i4081[2]
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4085 = data
  i4084.name = i4085[0]
  i4084.type = i4085[1]
  i4084.value = new pc.Vec4( i4085[2], i4085[3], i4085[4], i4085[5] )
  i4084.textureValue = i4085[6]
  i4084.shaderPropertyFlag = i4085[7]
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4087 = data
  i4086.name = i4087[0]
  request.r(i4087[1], i4087[2], 0, i4086, 'texture')
  i4086.aabb = i4087[3]
  i4086.vertices = i4087[4]
  i4086.triangles = i4087[5]
  i4086.textureRect = UnityEngine.Rect.MinMaxRect(i4087[6], i4087[7], i4087[8], i4087[9])
  i4086.packedRect = UnityEngine.Rect.MinMaxRect(i4087[10], i4087[11], i4087[12], i4087[13])
  i4086.border = new pc.Vec4( i4087[14], i4087[15], i4087[16], i4087[17] )
  i4086.transparency = i4087[18]
  i4086.bounds = i4087[19]
  i4086.pixelsPerUnit = i4087[20]
  i4086.textureWidth = i4087[21]
  i4086.textureHeight = i4087[22]
  i4086.nativeSize = new pc.Vec2( i4087[23], i4087[24] )
  i4086.pivot = new pc.Vec2( i4087[25], i4087[26] )
  i4086.textureRectOffset = new pc.Vec2( i4087[27], i4087[28] )
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4089 = data
  i4088.name = i4089[0]
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4091 = data
  i4090.name = i4091[0]
  i4090.wrapMode = i4091[1]
  i4090.isLooping = !!i4091[2]
  i4090.length = i4091[3]
  var i4093 = i4091[4]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4093[i + 0]) );
  }
  i4090.curves = i4092
  var i4095 = i4091[5]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4095[i + 0]) );
  }
  i4090.events = i4094
  i4090.halfPrecision = !!i4091[6]
  i4090._frameRate = i4091[7]
  i4090.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4091[8], i4090.localBounds)
  i4090.hasMuscleCurves = !!i4091[9]
  var i4097 = i4091[10]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( i4097[i + 0] );
  }
  i4090.clipMuscleConstant = i4096
  i4090.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4091[11], i4090.clipBindingConstant)
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4101 = data
  i4100.path = i4101[0]
  i4100.hash = i4101[1]
  i4100.componentType = i4101[2]
  i4100.property = i4101[3]
  i4100.keys = i4101[4]
  var i4103 = i4101[5]
  var i4102 = []
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4103[i + 0]) );
  }
  i4100.objectReferenceKeys = i4102
  return i4100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4107 = data
  i4106.functionName = i4107[0]
  i4106.floatParameter = i4107[1]
  i4106.intParameter = i4107[2]
  i4106.stringParameter = i4107[3]
  request.r(i4107[4], i4107[5], 0, i4106, 'objectReferenceParameter')
  i4106.time = i4107[6]
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4109 = data
  i4108.center = new pc.Vec3( i4109[0], i4109[1], i4109[2] )
  i4108.extends = new pc.Vec3( i4109[3], i4109[4], i4109[5] )
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4113 = data
  var i4115 = i4113[0]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 1) {
    i4114.push( i4115[i + 0] );
  }
  i4112.genericBindings = i4114
  var i4117 = i4113[1]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( i4117[i + 0] );
  }
  i4112.pptrCurveMapping = i4116
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4119 = data
  i4118.name = i4119[0]
  var i4121 = i4119[1]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4121[i + 0]) );
  }
  i4118.layers = i4120
  var i4123 = i4119[2]
  var i4122 = []
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4123[i + 0]) );
  }
  i4118.parameters = i4122
  i4118.animationClips = i4119[3]
  i4118.avatarUnsupported = i4119[4]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4127 = data
  i4126.name = i4127[0]
  i4126.defaultWeight = i4127[1]
  i4126.blendingMode = i4127[2]
  i4126.avatarMask = i4127[3]
  i4126.syncedLayerIndex = i4127[4]
  i4126.syncedLayerAffectsTiming = !!i4127[5]
  i4126.syncedLayers = i4127[6]
  i4126.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4127[7], i4126.stateMachine)
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4129 = data
  i4128.id = i4129[0]
  i4128.name = i4129[1]
  i4128.path = i4129[2]
  var i4131 = i4129[3]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 1) {
    i4130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4131[i + 0]) );
  }
  i4128.states = i4130
  var i4133 = i4129[4]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4133[i + 0]) );
  }
  i4128.machines = i4132
  var i4135 = i4129[5]
  var i4134 = []
  for(var i = 0; i < i4135.length; i += 1) {
    i4134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4135[i + 0]) );
  }
  i4128.entryStateTransitions = i4134
  var i4137 = i4129[6]
  var i4136 = []
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4137[i + 0]) );
  }
  i4128.exitStateTransitions = i4136
  var i4139 = i4129[7]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4139[i + 0]) );
  }
  i4128.anyStateTransitions = i4138
  i4128.defaultStateId = i4129[8]
  return i4128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4143 = data
  i4142.id = i4143[0]
  i4142.name = i4143[1]
  i4142.cycleOffset = i4143[2]
  i4142.cycleOffsetParameter = i4143[3]
  i4142.cycleOffsetParameterActive = !!i4143[4]
  i4142.mirror = !!i4143[5]
  i4142.mirrorParameter = i4143[6]
  i4142.mirrorParameterActive = !!i4143[7]
  i4142.motionId = i4143[8]
  i4142.nameHash = i4143[9]
  i4142.fullPathHash = i4143[10]
  i4142.speed = i4143[11]
  i4142.speedParameter = i4143[12]
  i4142.speedParameterActive = !!i4143[13]
  i4142.tag = i4143[14]
  i4142.tagHash = i4143[15]
  i4142.writeDefaultValues = !!i4143[16]
  var i4145 = i4143[17]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 2) {
  request.r(i4145[i + 0], i4145[i + 1], 2, i4144, '')
  }
  i4142.behaviours = i4144
  var i4147 = i4143[18]
  var i4146 = []
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4147[i + 0]) );
  }
  i4142.transitions = i4146
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4153 = data
  i4152.fullPath = i4153[0]
  i4152.canTransitionToSelf = !!i4153[1]
  i4152.duration = i4153[2]
  i4152.exitTime = i4153[3]
  i4152.hasExitTime = !!i4153[4]
  i4152.hasFixedDuration = !!i4153[5]
  i4152.interruptionSource = i4153[6]
  i4152.offset = i4153[7]
  i4152.orderedInterruption = !!i4153[8]
  i4152.destinationStateId = i4153[9]
  i4152.isExit = !!i4153[10]
  i4152.mute = !!i4153[11]
  i4152.solo = !!i4153[12]
  var i4155 = i4153[13]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4155[i + 0]) );
  }
  i4152.conditions = i4154
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4159 = data
  i4158.mode = i4159[0]
  i4158.parameter = i4159[1]
  i4158.threshold = i4159[2]
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4165 = data
  i4164.destinationStateId = i4165[0]
  i4164.isExit = !!i4165[1]
  i4164.mute = !!i4165[2]
  i4164.solo = !!i4165[3]
  var i4167 = i4165[4]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4167[i + 0]) );
  }
  i4164.conditions = i4166
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4171 = data
  i4170.defaultBool = !!i4171[0]
  i4170.defaultFloat = i4171[1]
  i4170.defaultInt = i4171[2]
  i4170.name = i4171[3]
  i4170.nameHash = i4171[4]
  i4170.type = i4171[5]
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4173 = data
  i4172.name = i4173[0]
  i4172.bytes64 = i4173[1]
  i4172.data = i4173[2]
  return i4172
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4174 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4175 = data
  i4174.normalStyle = i4175[0]
  i4174.normalSpacingOffset = i4175[1]
  i4174.boldStyle = i4175[2]
  i4174.boldSpacing = i4175[3]
  i4174.italicStyle = i4175[4]
  i4174.tabSize = i4175[5]
  request.r(i4175[6], i4175[7], 0, i4174, 'atlas')
  i4174.m_SourceFontFileGUID = i4175[8]
  i4174.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4175[9], i4174.m_CreationSettings)
  request.r(i4175[10], i4175[11], 0, i4174, 'm_SourceFontFile')
  i4174.m_SourceFontFilePath = i4175[12]
  i4174.m_AtlasPopulationMode = i4175[13]
  i4174.InternalDynamicOS = !!i4175[14]
  var i4177 = i4175[15]
  var i4176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4177.length; i += 1) {
    i4176.add(request.d('UnityEngine.TextCore.Glyph', i4177[i + 0]));
  }
  i4174.m_GlyphTable = i4176
  var i4179 = i4175[16]
  var i4178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.add(request.d('TMPro.TMP_Character', i4179[i + 0]));
  }
  i4174.m_CharacterTable = i4178
  var i4181 = i4175[17]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 2) {
  request.r(i4181[i + 0], i4181[i + 1], 2, i4180, '')
  }
  i4174.m_AtlasTextures = i4180
  i4174.m_AtlasTextureIndex = i4175[18]
  i4174.m_IsMultiAtlasTexturesEnabled = !!i4175[19]
  i4174.m_GetFontFeatures = !!i4175[20]
  i4174.m_ClearDynamicDataOnBuild = !!i4175[21]
  i4174.m_AtlasWidth = i4175[22]
  i4174.m_AtlasHeight = i4175[23]
  i4174.m_AtlasPadding = i4175[24]
  i4174.m_AtlasRenderMode = i4175[25]
  var i4183 = i4175[26]
  var i4182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.add(request.d('UnityEngine.TextCore.GlyphRect', i4183[i + 0]));
  }
  i4174.m_UsedGlyphRects = i4182
  var i4185 = i4175[27]
  var i4184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.add(request.d('UnityEngine.TextCore.GlyphRect', i4185[i + 0]));
  }
  i4174.m_FreeGlyphRects = i4184
  i4174.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4175[28], i4174.m_FontFeatureTable)
  i4174.m_ShouldReimportFontFeatures = !!i4175[29]
  var i4187 = i4175[30]
  var i4186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4187.length; i += 2) {
  request.r(i4187[i + 0], i4187[i + 1], 1, i4186, '')
  }
  i4174.m_FallbackFontAssetTable = i4186
  var i4189 = i4175[31]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.push( request.d('TMPro.TMP_FontWeightPair', i4189[i + 0]) );
  }
  i4174.m_FontWeightTable = i4188
  var i4191 = i4175[32]
  var i4190 = []
  for(var i = 0; i < i4191.length; i += 1) {
    i4190.push( request.d('TMPro.TMP_FontWeightPair', i4191[i + 0]) );
  }
  i4174.fontWeights = i4190
  i4174.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4175[33], i4174.m_fontInfo)
  var i4193 = i4175[34]
  var i4192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.add(request.d('TMPro.TMP_Glyph', i4193[i + 0]));
  }
  i4174.m_glyphInfoList = i4192
  i4174.m_KerningTable = request.d('TMPro.KerningTable', i4175[35], i4174.m_KerningTable)
  var i4195 = i4175[36]
  var i4194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4195.length; i += 2) {
  request.r(i4195[i + 0], i4195[i + 1], 1, i4194, '')
  }
  i4174.fallbackFontAssets = i4194
  i4174.m_Version = i4175[37]
  i4174.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4175[38], i4174.m_FaceInfo)
  request.r(i4175[39], i4175[40], 0, i4174, 'm_Material')
  return i4174
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4196 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4197 = data
  i4196.sourceFontFileName = i4197[0]
  i4196.sourceFontFileGUID = i4197[1]
  i4196.faceIndex = i4197[2]
  i4196.pointSizeSamplingMode = i4197[3]
  i4196.pointSize = i4197[4]
  i4196.padding = i4197[5]
  i4196.paddingMode = i4197[6]
  i4196.packingMode = i4197[7]
  i4196.atlasWidth = i4197[8]
  i4196.atlasHeight = i4197[9]
  i4196.characterSetSelectionMode = i4197[10]
  i4196.characterSequence = i4197[11]
  i4196.referencedFontAssetGUID = i4197[12]
  i4196.referencedTextAssetGUID = i4197[13]
  i4196.fontStyle = i4197[14]
  i4196.fontStyleModifier = i4197[15]
  i4196.renderMode = i4197[16]
  i4196.includeFontFeatures = !!i4197[17]
  return i4196
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4200 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4201 = data
  i4200.m_Index = i4201[0]
  i4200.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4201[1], i4200.m_Metrics)
  i4200.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4201[2], i4200.m_GlyphRect)
  i4200.m_Scale = i4201[3]
  i4200.m_AtlasIndex = i4201[4]
  i4200.m_ClassDefinitionType = i4201[5]
  return i4200
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4202 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4203 = data
  i4202.m_Width = i4203[0]
  i4202.m_Height = i4203[1]
  i4202.m_HorizontalBearingX = i4203[2]
  i4202.m_HorizontalBearingY = i4203[3]
  i4202.m_HorizontalAdvance = i4203[4]
  return i4202
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4204 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4205 = data
  i4204.m_X = i4205[0]
  i4204.m_Y = i4205[1]
  i4204.m_Width = i4205[2]
  i4204.m_Height = i4205[3]
  return i4204
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4208 = root || request.c( 'TMPro.TMP_Character' )
  var i4209 = data
  i4208.m_ElementType = i4209[0]
  i4208.m_Unicode = i4209[1]
  i4208.m_GlyphIndex = i4209[2]
  i4208.m_Scale = i4209[3]
  return i4208
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4214 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4215 = data
  var i4217 = i4215[0]
  var i4216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.add(request.d('TMPro.MultipleSubstitutionRecord', i4217[i + 0]));
  }
  i4214.m_MultipleSubstitutionRecords = i4216
  var i4219 = i4215[1]
  var i4218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4219.length; i += 1) {
    i4218.add(request.d('TMPro.LigatureSubstitutionRecord', i4219[i + 0]));
  }
  i4214.m_LigatureSubstitutionRecords = i4218
  var i4221 = i4215[2]
  var i4220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4221.length; i += 1) {
    i4220.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4221[i + 0]));
  }
  i4214.m_GlyphPairAdjustmentRecords = i4220
  var i4223 = i4215[3]
  var i4222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4223[i + 0]));
  }
  i4214.m_MarkToBaseAdjustmentRecords = i4222
  var i4225 = i4215[4]
  var i4224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4225[i + 0]));
  }
  i4214.m_MarkToMarkAdjustmentRecords = i4224
  return i4214
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4228 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4229 = data
  i4228.m_TargetGlyphID = i4229[0]
  i4228.m_SubstituteGlyphIDs = i4229[1]
  return i4228
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4232 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4233 = data
  i4232.m_ComponentGlyphIDs = i4233[0]
  i4232.m_LigatureGlyphID = i4233[1]
  return i4232
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4236 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4237 = data
  i4236.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4237[0], i4236.m_FirstAdjustmentRecord)
  i4236.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4237[1], i4236.m_SecondAdjustmentRecord)
  i4236.m_FeatureLookupFlags = i4237[2]
  return i4236
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4238 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4239 = data
  i4238.m_GlyphIndex = i4239[0]
  i4238.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4239[1], i4238.m_GlyphValueRecord)
  return i4238
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4240 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4241 = data
  i4240.m_XPlacement = i4241[0]
  i4240.m_YPlacement = i4241[1]
  i4240.m_XAdvance = i4241[2]
  i4240.m_YAdvance = i4241[3]
  return i4240
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4244 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4245 = data
  i4244.m_BaseGlyphID = i4245[0]
  i4244.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4245[1], i4244.m_BaseGlyphAnchorPoint)
  i4244.m_MarkGlyphID = i4245[2]
  i4244.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4245[3], i4244.m_MarkPositionAdjustment)
  return i4244
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4246 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4247 = data
  i4246.m_XCoordinate = i4247[0]
  i4246.m_YCoordinate = i4247[1]
  return i4246
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4248 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4249 = data
  i4248.m_XPositionAdjustment = i4249[0]
  i4248.m_YPositionAdjustment = i4249[1]
  return i4248
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4252 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4253 = data
  i4252.m_BaseMarkGlyphID = i4253[0]
  i4252.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4253[1], i4252.m_BaseMarkGlyphAnchorPoint)
  i4252.m_CombiningMarkGlyphID = i4253[2]
  i4252.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4253[3], i4252.m_CombiningMarkPositionAdjustment)
  return i4252
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4258 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4259 = data
  request.r(i4259[0], i4259[1], 0, i4258, 'regularTypeface')
  request.r(i4259[2], i4259[3], 0, i4258, 'italicTypeface')
  return i4258
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4260 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4261 = data
  i4260.Name = i4261[0]
  i4260.PointSize = i4261[1]
  i4260.Scale = i4261[2]
  i4260.CharacterCount = i4261[3]
  i4260.LineHeight = i4261[4]
  i4260.Baseline = i4261[5]
  i4260.Ascender = i4261[6]
  i4260.CapHeight = i4261[7]
  i4260.Descender = i4261[8]
  i4260.CenterLine = i4261[9]
  i4260.SuperscriptOffset = i4261[10]
  i4260.SubscriptOffset = i4261[11]
  i4260.SubSize = i4261[12]
  i4260.Underline = i4261[13]
  i4260.UnderlineThickness = i4261[14]
  i4260.strikethrough = i4261[15]
  i4260.strikethroughThickness = i4261[16]
  i4260.TabWidth = i4261[17]
  i4260.Padding = i4261[18]
  i4260.AtlasWidth = i4261[19]
  i4260.AtlasHeight = i4261[20]
  return i4260
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4264 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4265 = data
  i4264.id = i4265[0]
  i4264.x = i4265[1]
  i4264.y = i4265[2]
  i4264.width = i4265[3]
  i4264.height = i4265[4]
  i4264.xOffset = i4265[5]
  i4264.yOffset = i4265[6]
  i4264.xAdvance = i4265[7]
  i4264.scale = i4265[8]
  return i4264
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4266 = root || request.c( 'TMPro.KerningTable' )
  var i4267 = data
  var i4269 = i4267[0]
  var i4268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.add(request.d('TMPro.KerningPair', i4269[i + 0]));
  }
  i4266.kerningPairs = i4268
  return i4266
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4272 = root || request.c( 'TMPro.KerningPair' )
  var i4273 = data
  i4272.xOffset = i4273[0]
  i4272.m_FirstGlyph = i4273[1]
  i4272.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4273[2], i4272.m_FirstGlyphAdjustments)
  i4272.m_SecondGlyph = i4273[3]
  i4272.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4273[4], i4272.m_SecondGlyphAdjustments)
  i4272.m_IgnoreSpacingAdjustments = !!i4273[5]
  return i4272
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4274 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4275 = data
  i4274.m_FaceIndex = i4275[0]
  i4274.m_FamilyName = i4275[1]
  i4274.m_StyleName = i4275[2]
  i4274.m_PointSize = i4275[3]
  i4274.m_Scale = i4275[4]
  i4274.m_UnitsPerEM = i4275[5]
  i4274.m_LineHeight = i4275[6]
  i4274.m_AscentLine = i4275[7]
  i4274.m_CapLine = i4275[8]
  i4274.m_MeanLine = i4275[9]
  i4274.m_Baseline = i4275[10]
  i4274.m_DescentLine = i4275[11]
  i4274.m_SuperscriptOffset = i4275[12]
  i4274.m_SuperscriptSize = i4275[13]
  i4274.m_SubscriptOffset = i4275[14]
  i4274.m_SubscriptSize = i4275[15]
  i4274.m_UnderlineOffset = i4275[16]
  i4274.m_UnderlineThickness = i4275[17]
  i4274.m_StrikethroughOffset = i4275[18]
  i4274.m_StrikethroughThickness = i4275[19]
  i4274.m_TabWidth = i4275[20]
  return i4274
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i4276 = root || request.c( 'PlayerSO' )
  var i4277 = data
  i4276.maxSpeed = i4277[0]
  i4276.jumpImpulse = i4277[1]
  return i4276
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i4278 = root || request.c( 'FindMonsterDatabase' )
  var i4279 = data
  var i4281 = i4279[0]
  var i4280 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i4281.length; i += 2) {
  request.r(i4281[i + 0], i4281[i + 1], 1, i4280, '')
  }
  i4278.database = i4280
  return i4278
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i4284 = root || request.c( 'MonsterSO' )
  var i4285 = data
  i4284.id = i4285[0]
  i4284.displayName = i4285[1]
  request.r(i4285[2], i4285[3], 0, i4284, 'icon')
  request.r(i4285[4], i4285[5], 0, i4284, 'prefab')
  return i4284
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4286 = root || request.c( 'TMPro.TMP_Settings' )
  var i4287 = data
  i4286.assetVersion = i4287[0]
  i4286.m_TextWrappingMode = i4287[1]
  i4286.m_enableKerning = !!i4287[2]
  var i4289 = i4287[3]
  var i4288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4289.length; i += 1) {
    i4288.add(i4289[i + 0]);
  }
  i4286.m_ActiveFontFeatures = i4288
  i4286.m_enableExtraPadding = !!i4287[4]
  i4286.m_enableTintAllSprites = !!i4287[5]
  i4286.m_enableParseEscapeCharacters = !!i4287[6]
  i4286.m_EnableRaycastTarget = !!i4287[7]
  i4286.m_GetFontFeaturesAtRuntime = !!i4287[8]
  i4286.m_missingGlyphCharacter = i4287[9]
  i4286.m_ClearDynamicDataOnBuild = !!i4287[10]
  i4286.m_warningsDisabled = !!i4287[11]
  request.r(i4287[12], i4287[13], 0, i4286, 'm_defaultFontAsset')
  i4286.m_defaultFontAssetPath = i4287[14]
  i4286.m_defaultFontSize = i4287[15]
  i4286.m_defaultAutoSizeMinRatio = i4287[16]
  i4286.m_defaultAutoSizeMaxRatio = i4287[17]
  i4286.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4287[18], i4287[19] )
  i4286.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4287[20], i4287[21] )
  i4286.m_autoSizeTextContainer = !!i4287[22]
  i4286.m_IsTextObjectScaleStatic = !!i4287[23]
  var i4291 = i4287[24]
  var i4290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4291.length; i += 2) {
  request.r(i4291[i + 0], i4291[i + 1], 1, i4290, '')
  }
  i4286.m_fallbackFontAssets = i4290
  i4286.m_matchMaterialPreset = !!i4287[25]
  i4286.m_HideSubTextObjects = !!i4287[26]
  request.r(i4287[27], i4287[28], 0, i4286, 'm_defaultSpriteAsset')
  i4286.m_defaultSpriteAssetPath = i4287[29]
  i4286.m_enableEmojiSupport = !!i4287[30]
  i4286.m_MissingCharacterSpriteUnicode = i4287[31]
  var i4293 = i4287[32]
  var i4292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4293.length; i += 2) {
  request.r(i4293[i + 0], i4293[i + 1], 1, i4292, '')
  }
  i4286.m_EmojiFallbackTextAssets = i4292
  i4286.m_defaultColorGradientPresetsPath = i4287[33]
  request.r(i4287[34], i4287[35], 0, i4286, 'm_defaultStyleSheet')
  i4286.m_StyleSheetsResourcePath = i4287[36]
  request.r(i4287[37], i4287[38], 0, i4286, 'm_leadingCharacters')
  request.r(i4287[39], i4287[40], 0, i4286, 'm_followingCharacters')
  i4286.m_UseModernHangulLineBreakingRules = !!i4287[41]
  return i4286
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4296 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4297 = data
  request.r(i4297[0], i4297[1], 0, i4296, 'spriteSheet')
  var i4299 = i4297[2]
  var i4298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.add(request.d('TMPro.TMP_Sprite', i4299[i + 0]));
  }
  i4296.spriteInfoList = i4298
  var i4301 = i4297[3]
  var i4300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4301.length; i += 2) {
  request.r(i4301[i + 0], i4301[i + 1], 1, i4300, '')
  }
  i4296.fallbackSpriteAssets = i4300
  var i4303 = i4297[4]
  var i4302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4303.length; i += 1) {
    i4302.add(request.d('TMPro.TMP_SpriteCharacter', i4303[i + 0]));
  }
  i4296.m_SpriteCharacterTable = i4302
  var i4305 = i4297[5]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.add(request.d('TMPro.TMP_SpriteGlyph', i4305[i + 0]));
  }
  i4296.m_GlyphTable = i4304
  i4296.m_Version = i4297[6]
  i4296.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4297[7], i4296.m_FaceInfo)
  request.r(i4297[8], i4297[9], 0, i4296, 'm_Material')
  return i4296
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4308 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4309 = data
  i4308.name = i4309[0]
  i4308.hashCode = i4309[1]
  i4308.unicode = i4309[2]
  i4308.pivot = new pc.Vec2( i4309[3], i4309[4] )
  request.r(i4309[5], i4309[6], 0, i4308, 'sprite')
  i4308.id = i4309[7]
  i4308.x = i4309[8]
  i4308.y = i4309[9]
  i4308.width = i4309[10]
  i4308.height = i4309[11]
  i4308.xOffset = i4309[12]
  i4308.yOffset = i4309[13]
  i4308.xAdvance = i4309[14]
  i4308.scale = i4309[15]
  return i4308
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4314 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4315 = data
  i4314.m_Name = i4315[0]
  i4314.m_ElementType = i4315[1]
  i4314.m_Unicode = i4315[2]
  i4314.m_GlyphIndex = i4315[3]
  i4314.m_Scale = i4315[4]
  return i4314
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4318 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4319 = data
  request.r(i4319[0], i4319[1], 0, i4318, 'sprite')
  i4318.m_Index = i4319[2]
  i4318.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4319[3], i4318.m_Metrics)
  i4318.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4319[4], i4318.m_GlyphRect)
  i4318.m_Scale = i4319[5]
  i4318.m_AtlasIndex = i4319[6]
  i4318.m_ClassDefinitionType = i4319[7]
  return i4318
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4320 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4321 = data
  var i4323 = i4321[0]
  var i4322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.add(request.d('TMPro.TMP_Style', i4323[i + 0]));
  }
  i4320.m_StyleList = i4322
  return i4320
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4326 = root || request.c( 'TMPro.TMP_Style' )
  var i4327 = data
  i4326.m_Name = i4327[0]
  i4326.m_HashCode = i4327[1]
  i4326.m_OpeningDefinition = i4327[2]
  i4326.m_ClosingDefinition = i4327[3]
  i4326.m_OpeningTagArray = i4327[4]
  i4326.m_ClosingTagArray = i4327[5]
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4329 = data
  var i4331 = i4329[0]
  var i4330 = []
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4331[i + 0]) );
  }
  i4328.files = i4330
  i4328.componentToPrefabIds = i4329[1]
  return i4328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4335 = data
  i4334.path = i4335[0]
  request.r(i4335[1], i4335[2], 0, i4334, 'unityObject')
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4337 = data
  var i4339 = i4337[0]
  var i4338 = []
  for(var i = 0; i < i4339.length; i += 1) {
    i4338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4339[i + 0]) );
  }
  i4336.scriptsExecutionOrder = i4338
  var i4341 = i4337[1]
  var i4340 = []
  for(var i = 0; i < i4341.length; i += 1) {
    i4340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4341[i + 0]) );
  }
  i4336.sortingLayers = i4340
  var i4343 = i4337[2]
  var i4342 = []
  for(var i = 0; i < i4343.length; i += 1) {
    i4342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4343[i + 0]) );
  }
  i4336.cullingLayers = i4342
  i4336.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4337[3], i4336.timeSettings)
  i4336.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4337[4], i4336.physicsSettings)
  i4336.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4337[5], i4336.physics2DSettings)
  i4336.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4337[6], i4336.qualitySettings)
  i4336.enableRealtimeShadows = !!i4337[7]
  i4336.enableAutoInstancing = !!i4337[8]
  i4336.enableStaticBatching = !!i4337[9]
  i4336.enableDynamicBatching = !!i4337[10]
  i4336.usePreservativeDynamicBatching = !!i4337[11]
  i4336.lightmapEncodingQuality = i4337[12]
  i4336.desiredColorSpace = i4337[13]
  var i4345 = i4337[14]
  var i4344 = []
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.push( i4345[i + 0] );
  }
  i4336.allTags = i4344
  return i4336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4349 = data
  i4348.name = i4349[0]
  i4348.value = i4349[1]
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4353 = data
  i4352.id = i4353[0]
  i4352.name = i4353[1]
  i4352.value = i4353[2]
  return i4352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4357 = data
  i4356.id = i4357[0]
  i4356.name = i4357[1]
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4359 = data
  i4358.fixedDeltaTime = i4359[0]
  i4358.maximumDeltaTime = i4359[1]
  i4358.timeScale = i4359[2]
  i4358.maximumParticleTimestep = i4359[3]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4361 = data
  i4360.gravity = new pc.Vec3( i4361[0], i4361[1], i4361[2] )
  i4360.defaultSolverIterations = i4361[3]
  i4360.bounceThreshold = i4361[4]
  i4360.autoSyncTransforms = !!i4361[5]
  i4360.autoSimulation = !!i4361[6]
  var i4363 = i4361[7]
  var i4362 = []
  for(var i = 0; i < i4363.length; i += 1) {
    i4362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4363[i + 0]) );
  }
  i4360.collisionMatrix = i4362
  return i4360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4367 = data
  i4366.enabled = !!i4367[0]
  i4366.layerId = i4367[1]
  i4366.otherLayerId = i4367[2]
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4369 = data
  request.r(i4369[0], i4369[1], 0, i4368, 'material')
  i4368.gravity = new pc.Vec2( i4369[2], i4369[3] )
  i4368.positionIterations = i4369[4]
  i4368.velocityIterations = i4369[5]
  i4368.velocityThreshold = i4369[6]
  i4368.maxLinearCorrection = i4369[7]
  i4368.maxAngularCorrection = i4369[8]
  i4368.maxTranslationSpeed = i4369[9]
  i4368.maxRotationSpeed = i4369[10]
  i4368.baumgarteScale = i4369[11]
  i4368.baumgarteTOIScale = i4369[12]
  i4368.timeToSleep = i4369[13]
  i4368.linearSleepTolerance = i4369[14]
  i4368.angularSleepTolerance = i4369[15]
  i4368.defaultContactOffset = i4369[16]
  i4368.autoSimulation = !!i4369[17]
  i4368.queriesHitTriggers = !!i4369[18]
  i4368.queriesStartInColliders = !!i4369[19]
  i4368.callbacksOnDisable = !!i4369[20]
  i4368.reuseCollisionCallbacks = !!i4369[21]
  i4368.autoSyncTransforms = !!i4369[22]
  var i4371 = i4369[23]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4371[i + 0]) );
  }
  i4368.collisionMatrix = i4370
  return i4368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4375 = data
  i4374.enabled = !!i4375[0]
  i4374.layerId = i4375[1]
  i4374.otherLayerId = i4375[2]
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4377 = data
  var i4379 = i4377[0]
  var i4378 = []
  for(var i = 0; i < i4379.length; i += 1) {
    i4378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4379[i + 0]) );
  }
  i4376.qualityLevels = i4378
  var i4381 = i4377[1]
  var i4380 = []
  for(var i = 0; i < i4381.length; i += 1) {
    i4380.push( i4381[i + 0] );
  }
  i4376.names = i4380
  i4376.shadows = i4377[2]
  i4376.anisotropicFiltering = i4377[3]
  i4376.antiAliasing = i4377[4]
  i4376.lodBias = i4377[5]
  i4376.shadowCascades = i4377[6]
  i4376.shadowDistance = i4377[7]
  i4376.shadowmaskMode = i4377[8]
  i4376.shadowProjection = i4377[9]
  i4376.shadowResolution = i4377[10]
  i4376.softParticles = !!i4377[11]
  i4376.softVegetation = !!i4377[12]
  i4376.activeColorSpace = i4377[13]
  i4376.desiredColorSpace = i4377[14]
  i4376.masterTextureLimit = i4377[15]
  i4376.maxQueuedFrames = i4377[16]
  i4376.particleRaycastBudget = i4377[17]
  i4376.pixelLightCount = i4377[18]
  i4376.realtimeReflectionProbes = !!i4377[19]
  i4376.shadowCascade2Split = i4377[20]
  i4376.shadowCascade4Split = new pc.Vec3( i4377[21], i4377[22], i4377[23] )
  i4376.streamingMipmapsActive = !!i4377[24]
  i4376.vSyncCount = i4377[25]
  i4376.asyncUploadBufferSize = i4377[26]
  i4376.asyncUploadTimeSlice = i4377[27]
  i4376.billboardsFaceCameraPosition = !!i4377[28]
  i4376.shadowNearPlaneOffset = i4377[29]
  i4376.streamingMipmapsMemoryBudget = i4377[30]
  i4376.maximumLODLevel = i4377[31]
  i4376.streamingMipmapsAddAllCameras = !!i4377[32]
  i4376.streamingMipmapsMaxLevelReduction = i4377[33]
  i4376.streamingMipmapsRenderersPerFrame = i4377[34]
  i4376.resolutionScalingFixedDPIFactor = i4377[35]
  i4376.streamingMipmapsMaxFileIORequests = i4377[36]
  i4376.currentQualityLevel = i4377[37]
  return i4376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i4385 = data
  i4384.name = i4385[0]
  var i4387 = i4385[1]
  var i4386 = []
  for(var i = 0; i < i4387.length; i += 1) {
    i4386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i4387[i + 0]) );
  }
  i4384.tos = i4386
  var i4389 = i4385[2]
  var i4388 = []
  for(var i = 0; i < i4389.length; i += 1) {
    i4388.push( i4389[i + 0] );
  }
  i4384.constant = i4388
  i4384.isValid = !!i4385[3]
  i4384.isHuman = !!i4385[4]
  i4384.hasRootMotion = !!i4385[5]
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i4393 = data
  i4392.hash = i4393[0]
  i4392.path = i4393[1]
  return i4392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4397 = data
  i4396.weight = i4397[0]
  i4396.vertices = i4397[1]
  i4396.normals = i4397[2]
  i4396.tangents = i4397[3]
  return i4396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4401 = data
  i4400.time = i4401[0]
  request.r(i4401[1], i4401[2], 0, i4400, 'value')
  return i4400
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4402 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4403 = data
  i4402.xPlacement = i4403[0]
  i4402.yPlacement = i4403[1]
  i4402.xAdvance = i4403[2]
  i4402.yAdvance = i4403[3]
  return i4402
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

Deserializers.creativeName = "C1_2611_TamNTM_FSAHM_V13_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4146";

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

Deserializers.buildID = "b6a8f26f-9692-4e51-9200-8f04b985dbc2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

