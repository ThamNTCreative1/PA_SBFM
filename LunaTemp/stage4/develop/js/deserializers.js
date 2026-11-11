var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.JointSpring' )
  var i3649 = data
  i3648.spring = i3649[0]
  i3648.damper = i3649[1]
  i3648.targetPosition = i3649[2]
  return i3648
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.JointMotor' )
  var i3651 = data
  i3650.m_TargetVelocity = i3651[0]
  i3650.m_Force = i3651[1]
  i3650.m_FreeSpin = i3651[2]
  return i3650
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.JointLimits' )
  var i3653 = data
  i3652.m_Min = i3653[0]
  i3652.m_Max = i3653[1]
  i3652.m_Bounciness = i3653[2]
  i3652.m_BounceMinVelocity = i3653[3]
  i3652.m_ContactDistance = i3653[4]
  i3652.minBounce = i3653[5]
  i3652.maxBounce = i3653[6]
  return i3652
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.JointDrive' )
  var i3655 = data
  i3654.m_PositionSpring = i3655[0]
  i3654.m_PositionDamper = i3655[1]
  i3654.m_MaximumForce = i3655[2]
  i3654.m_UseAcceleration = i3655[3]
  return i3654
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3657 = data
  i3656.m_Spring = i3657[0]
  i3656.m_Damper = i3657[1]
  return i3656
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3659 = data
  i3658.m_Limit = i3659[0]
  i3658.m_Bounciness = i3659[1]
  i3658.m_ContactDistance = i3659[2]
  return i3658
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3661 = data
  i3660.m_ExtremumSlip = i3661[0]
  i3660.m_ExtremumValue = i3661[1]
  i3660.m_AsymptoteSlip = i3661[2]
  i3660.m_AsymptoteValue = i3661[3]
  i3660.m_Stiffness = i3661[4]
  return i3660
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3663 = data
  i3662.m_LowerAngle = i3663[0]
  i3662.m_UpperAngle = i3663[1]
  return i3662
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3665 = data
  i3664.m_MotorSpeed = i3665[0]
  i3664.m_MaximumMotorTorque = i3665[1]
  return i3664
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3667 = data
  i3666.m_DampingRatio = i3667[0]
  i3666.m_Frequency = i3667[1]
  i3666.m_Angle = i3667[2]
  return i3666
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3669 = data
  i3668.m_LowerTranslation = i3669[0]
  i3668.m_UpperTranslation = i3669[1]
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3671 = data
  i3670.name = i3671[0]
  i3670.halfPrecision = !!i3671[1]
  i3670.useSimplification = !!i3671[2]
  i3670.useUInt32IndexFormat = !!i3671[3]
  i3670.vertexCount = i3671[4]
  i3670.aabb = i3671[5]
  var i3673 = i3671[6]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( !!i3673[i + 0] );
  }
  i3670.streams = i3672
  i3670.vertices = i3671[7]
  var i3675 = i3671[8]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3675[i + 0]) );
  }
  i3670.subMeshes = i3674
  var i3677 = i3671[9]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 16) {
    i3676.push( new pc.Mat4().setData(i3677[i + 0], i3677[i + 1], i3677[i + 2], i3677[i + 3],  i3677[i + 4], i3677[i + 5], i3677[i + 6], i3677[i + 7],  i3677[i + 8], i3677[i + 9], i3677[i + 10], i3677[i + 11],  i3677[i + 12], i3677[i + 13], i3677[i + 14], i3677[i + 15]) );
  }
  i3670.bindposes = i3676
  var i3679 = i3671[10]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3679[i + 0]) );
  }
  i3670.blendShapes = i3678
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3685 = data
  i3684.triangles = i3685[0]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3691 = data
  i3690.name = i3691[0]
  var i3693 = i3691[1]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3693[i + 0]) );
  }
  i3690.frames = i3692
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3694 = root || new pc.UnityMaterial()
  var i3695 = data
  i3694.name = i3695[0]
  request.r(i3695[1], i3695[2], 0, i3694, 'shader')
  i3694.renderQueue = i3695[3]
  i3694.enableInstancing = !!i3695[4]
  var i3697 = i3695[5]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3697[i + 0]) );
  }
  i3694.floatParameters = i3696
  var i3699 = i3695[6]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3699[i + 0]) );
  }
  i3694.colorParameters = i3698
  var i3701 = i3695[7]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3701[i + 0]) );
  }
  i3694.vectorParameters = i3700
  var i3703 = i3695[8]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3703[i + 0]) );
  }
  i3694.textureParameters = i3702
  var i3705 = i3695[9]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3705[i + 0]) );
  }
  i3694.materialFlags = i3704
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3709 = data
  i3708.name = i3709[0]
  i3708.value = i3709[1]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3713 = data
  i3712.name = i3713[0]
  i3712.value = new pc.Color(i3713[1], i3713[2], i3713[3], i3713[4])
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3717 = data
  i3716.name = i3717[0]
  i3716.value = new pc.Vec4( i3717[1], i3717[2], i3717[3], i3717[4] )
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3721 = data
  i3720.name = i3721[0]
  request.r(i3721[1], i3721[2], 0, i3720, 'value')
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3725 = data
  i3724.name = i3725[0]
  i3724.enabled = !!i3725[1]
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3727 = data
  i3726.name = i3727[0]
  i3726.width = i3727[1]
  i3726.height = i3727[2]
  i3726.mipmapCount = i3727[3]
  i3726.anisoLevel = i3727[4]
  i3726.filterMode = i3727[5]
  i3726.hdr = !!i3727[6]
  i3726.format = i3727[7]
  i3726.wrapMode = i3727[8]
  i3726.alphaIsTransparency = !!i3727[9]
  i3726.alphaSource = i3727[10]
  i3726.graphicsFormat = i3727[11]
  i3726.sRGBTexture = !!i3727[12]
  i3726.desiredColorSpace = i3727[13]
  i3726.wrapU = i3727[14]
  i3726.wrapV = i3727[15]
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3729 = data
  i3728.position = new pc.Vec3( i3729[0], i3729[1], i3729[2] )
  i3728.scale = new pc.Vec3( i3729[3], i3729[4], i3729[5] )
  i3728.rotation = new pc.Quat(i3729[6], i3729[7], i3729[8], i3729[9])
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3731 = data
  i3730.center = new pc.Vec3( i3731[0], i3731[1], i3731[2] )
  i3730.size = new pc.Vec3( i3731[3], i3731[4], i3731[5] )
  i3730.enabled = !!i3731[6]
  i3730.isTrigger = !!i3731[7]
  request.r(i3731[8], i3731[9], 0, i3730, 'material')
  return i3730
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i3732 = root || request.c( 'HiddenMonster' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'checkMark')
  request.r(i3733[2], i3733[3], 0, i3732, 'claimFx')
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3735 = data
  request.r(i3735[0], i3735[1], 0, i3734, 'sharedMesh')
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'additionalVertexStreams')
  i3736.enabled = !!i3737[2]
  request.r(i3737[3], i3737[4], 0, i3736, 'sharedMaterial')
  var i3739 = i3737[5]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3736.sharedMaterials = i3738
  i3736.receiveShadows = !!i3737[6]
  i3736.shadowCastingMode = i3737[7]
  i3736.sortingLayerID = i3737[8]
  i3736.sortingOrder = i3737[9]
  i3736.lightmapIndex = i3737[10]
  i3736.lightmapSceneIndex = i3737[11]
  i3736.lightmapScaleOffset = new pc.Vec4( i3737[12], i3737[13], i3737[14], i3737[15] )
  i3736.lightProbeUsage = i3737[16]
  i3736.reflectionProbeUsage = i3737[17]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3743 = data
  i3742.name = i3743[0]
  i3742.tagId = i3743[1]
  i3742.enabled = !!i3743[2]
  i3742.isStatic = !!i3743[3]
  i3742.layer = i3743[4]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'mesh')
  i3744.meshCount = i3745[2]
  i3744.activeVertexStreamsCount = i3745[3]
  i3744.alignment = i3745[4]
  i3744.renderMode = i3745[5]
  i3744.sortMode = i3745[6]
  i3744.lengthScale = i3745[7]
  i3744.velocityScale = i3745[8]
  i3744.cameraVelocityScale = i3745[9]
  i3744.normalDirection = i3745[10]
  i3744.sortingFudge = i3745[11]
  i3744.minParticleSize = i3745[12]
  i3744.maxParticleSize = i3745[13]
  i3744.pivot = new pc.Vec3( i3745[14], i3745[15], i3745[16] )
  request.r(i3745[17], i3745[18], 0, i3744, 'trailMaterial')
  i3744.applyActiveColorSpace = !!i3745[19]
  i3744.enabled = !!i3745[20]
  request.r(i3745[21], i3745[22], 0, i3744, 'sharedMaterial')
  var i3747 = i3745[23]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 2) {
  request.r(i3747[i + 0], i3747[i + 1], 2, i3746, '')
  }
  i3744.sharedMaterials = i3746
  i3744.receiveShadows = !!i3745[24]
  i3744.shadowCastingMode = i3745[25]
  i3744.sortingLayerID = i3745[26]
  i3744.sortingOrder = i3745[27]
  i3744.lightmapIndex = i3745[28]
  i3744.lightmapSceneIndex = i3745[29]
  i3744.lightmapScaleOffset = new pc.Vec4( i3745[30], i3745[31], i3745[32], i3745[33] )
  i3744.lightProbeUsage = i3745[34]
  i3744.reflectionProbeUsage = i3745[35]
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3749 = data
  i3748.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3749[0], i3748.main)
  i3748.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3749[1], i3748.colorBySpeed)
  i3748.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3749[2], i3748.colorOverLifetime)
  i3748.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3749[3], i3748.emission)
  i3748.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3749[4], i3748.rotationBySpeed)
  i3748.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3749[5], i3748.rotationOverLifetime)
  i3748.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3749[6], i3748.shape)
  i3748.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3749[7], i3748.sizeBySpeed)
  i3748.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3749[8], i3748.sizeOverLifetime)
  i3748.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3749[9], i3748.textureSheetAnimation)
  i3748.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3749[10], i3748.velocityOverLifetime)
  i3748.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3749[11], i3748.noise)
  i3748.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3749[12], i3748.inheritVelocity)
  i3748.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3749[13], i3748.forceOverLifetime)
  i3748.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3749[14], i3748.limitVelocityOverLifetime)
  i3748.useAutoRandomSeed = !!i3749[15]
  i3748.randomSeed = i3749[16]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3750 = root || new pc.ParticleSystemMain()
  var i3751 = data
  i3750.duration = i3751[0]
  i3750.loop = !!i3751[1]
  i3750.prewarm = !!i3751[2]
  i3750.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[3], i3750.startDelay)
  i3750.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[4], i3750.startLifetime)
  i3750.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[5], i3750.startSpeed)
  i3750.startSize3D = !!i3751[6]
  i3750.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[7], i3750.startSizeX)
  i3750.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[8], i3750.startSizeY)
  i3750.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[9], i3750.startSizeZ)
  i3750.startRotation3D = !!i3751[10]
  i3750.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[11], i3750.startRotationX)
  i3750.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[12], i3750.startRotationY)
  i3750.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[13], i3750.startRotationZ)
  i3750.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3751[14], i3750.startColor)
  i3750.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[15], i3750.gravityModifier)
  i3750.simulationSpace = i3751[16]
  request.r(i3751[17], i3751[18], 0, i3750, 'customSimulationSpace')
  i3750.simulationSpeed = i3751[19]
  i3750.useUnscaledTime = !!i3751[20]
  i3750.scalingMode = i3751[21]
  i3750.playOnAwake = !!i3751[22]
  i3750.maxParticles = i3751[23]
  i3750.emitterVelocityMode = i3751[24]
  i3750.stopAction = i3751[25]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3752 = root || new pc.MinMaxCurve()
  var i3753 = data
  i3752.mode = i3753[0]
  i3752.curveMin = new pc.AnimationCurve( { keys_flow: i3753[1] } )
  i3752.curveMax = new pc.AnimationCurve( { keys_flow: i3753[2] } )
  i3752.curveMultiplier = i3753[3]
  i3752.constantMin = i3753[4]
  i3752.constantMax = i3753[5]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3754 = root || new pc.MinMaxGradient()
  var i3755 = data
  i3754.mode = i3755[0]
  i3754.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3755[1], i3754.gradientMin)
  i3754.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3755[2], i3754.gradientMax)
  i3754.colorMin = new pc.Color(i3755[3], i3755[4], i3755[5], i3755[6])
  i3754.colorMax = new pc.Color(i3755[7], i3755[8], i3755[9], i3755[10])
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3757 = data
  i3756.mode = i3757[0]
  var i3759 = i3757[1]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3759[i + 0]) );
  }
  i3756.colorKeys = i3758
  var i3761 = i3757[2]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3761[i + 0]) );
  }
  i3756.alphaKeys = i3760
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3762 = root || new pc.ParticleSystemColorBySpeed()
  var i3763 = data
  i3762.enabled = !!i3763[0]
  i3762.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3763[1], i3762.color)
  i3762.range = new pc.Vec2( i3763[2], i3763[3] )
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3767 = data
  i3766.color = new pc.Color(i3767[0], i3767[1], i3767[2], i3767[3])
  i3766.time = i3767[4]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3771 = data
  i3770.alpha = i3771[0]
  i3770.time = i3771[1]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3772 = root || new pc.ParticleSystemColorOverLifetime()
  var i3773 = data
  i3772.enabled = !!i3773[0]
  i3772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3773[1], i3772.color)
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3774 = root || new pc.ParticleSystemEmitter()
  var i3775 = data
  i3774.enabled = !!i3775[0]
  i3774.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3775[1], i3774.rateOverTime)
  i3774.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3775[2], i3774.rateOverDistance)
  var i3777 = i3775[3]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3777[i + 0]) );
  }
  i3774.bursts = i3776
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3780 = root || new pc.ParticleSystemBurst()
  var i3781 = data
  i3780.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3781[0], i3780.count)
  i3780.cycleCount = i3781[1]
  i3780.minCount = i3781[2]
  i3780.maxCount = i3781[3]
  i3780.repeatInterval = i3781[4]
  i3780.time = i3781[5]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3782 = root || new pc.ParticleSystemRotationBySpeed()
  var i3783 = data
  i3782.enabled = !!i3783[0]
  i3782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[1], i3782.x)
  i3782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[2], i3782.y)
  i3782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[3], i3782.z)
  i3782.separateAxes = !!i3783[4]
  i3782.range = new pc.Vec2( i3783[5], i3783[6] )
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3784 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3785 = data
  i3784.enabled = !!i3785[0]
  i3784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[1], i3784.x)
  i3784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[2], i3784.y)
  i3784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[3], i3784.z)
  i3784.separateAxes = !!i3785[4]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3786 = root || new pc.ParticleSystemShape()
  var i3787 = data
  i3786.enabled = !!i3787[0]
  i3786.shapeType = i3787[1]
  i3786.randomDirectionAmount = i3787[2]
  i3786.sphericalDirectionAmount = i3787[3]
  i3786.randomPositionAmount = i3787[4]
  i3786.alignToDirection = !!i3787[5]
  i3786.radius = i3787[6]
  i3786.radiusMode = i3787[7]
  i3786.radiusSpread = i3787[8]
  i3786.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[9], i3786.radiusSpeed)
  i3786.radiusThickness = i3787[10]
  i3786.angle = i3787[11]
  i3786.length = i3787[12]
  i3786.boxThickness = new pc.Vec3( i3787[13], i3787[14], i3787[15] )
  i3786.meshShapeType = i3787[16]
  request.r(i3787[17], i3787[18], 0, i3786, 'mesh')
  request.r(i3787[19], i3787[20], 0, i3786, 'meshRenderer')
  request.r(i3787[21], i3787[22], 0, i3786, 'skinnedMeshRenderer')
  i3786.useMeshMaterialIndex = !!i3787[23]
  i3786.meshMaterialIndex = i3787[24]
  i3786.useMeshColors = !!i3787[25]
  i3786.normalOffset = i3787[26]
  i3786.arc = i3787[27]
  i3786.arcMode = i3787[28]
  i3786.arcSpread = i3787[29]
  i3786.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[30], i3786.arcSpeed)
  i3786.donutRadius = i3787[31]
  i3786.position = new pc.Vec3( i3787[32], i3787[33], i3787[34] )
  i3786.rotation = new pc.Vec3( i3787[35], i3787[36], i3787[37] )
  i3786.scale = new pc.Vec3( i3787[38], i3787[39], i3787[40] )
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3788 = root || new pc.ParticleSystemSizeBySpeed()
  var i3789 = data
  i3788.enabled = !!i3789[0]
  i3788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[1], i3788.x)
  i3788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[2], i3788.y)
  i3788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[3], i3788.z)
  i3788.separateAxes = !!i3789[4]
  i3788.range = new pc.Vec2( i3789[5], i3789[6] )
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3790 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3791 = data
  i3790.enabled = !!i3791[0]
  i3790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[1], i3790.x)
  i3790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[2], i3790.y)
  i3790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[3], i3790.z)
  i3790.separateAxes = !!i3791[4]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3792 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3793 = data
  i3792.enabled = !!i3793[0]
  i3792.mode = i3793[1]
  i3792.animation = i3793[2]
  i3792.numTilesX = i3793[3]
  i3792.numTilesY = i3793[4]
  i3792.useRandomRow = !!i3793[5]
  i3792.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3793[6], i3792.frameOverTime)
  i3792.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3793[7], i3792.startFrame)
  i3792.cycleCount = i3793[8]
  i3792.rowIndex = i3793[9]
  i3792.flipU = i3793[10]
  i3792.flipV = i3793[11]
  i3792.spriteCount = i3793[12]
  var i3795 = i3793[13]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 2) {
  request.r(i3795[i + 0], i3795[i + 1], 2, i3794, '')
  }
  i3792.sprites = i3794
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3798 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3799 = data
  i3798.enabled = !!i3799[0]
  i3798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[1], i3798.x)
  i3798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[2], i3798.y)
  i3798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[3], i3798.z)
  i3798.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[4], i3798.radial)
  i3798.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[5], i3798.speedModifier)
  i3798.space = i3799[6]
  i3798.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[7], i3798.orbitalX)
  i3798.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[8], i3798.orbitalY)
  i3798.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[9], i3798.orbitalZ)
  i3798.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[10], i3798.orbitalOffsetX)
  i3798.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[11], i3798.orbitalOffsetY)
  i3798.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3799[12], i3798.orbitalOffsetZ)
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3800 = root || new pc.ParticleSystemNoise()
  var i3801 = data
  i3800.enabled = !!i3801[0]
  i3800.separateAxes = !!i3801[1]
  i3800.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[2], i3800.strengthX)
  i3800.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[3], i3800.strengthY)
  i3800.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[4], i3800.strengthZ)
  i3800.frequency = i3801[5]
  i3800.damping = !!i3801[6]
  i3800.octaveCount = i3801[7]
  i3800.octaveMultiplier = i3801[8]
  i3800.octaveScale = i3801[9]
  i3800.quality = i3801[10]
  i3800.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[11], i3800.scrollSpeed)
  i3800.scrollSpeedMultiplier = i3801[12]
  i3800.remapEnabled = !!i3801[13]
  i3800.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[14], i3800.remapX)
  i3800.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[15], i3800.remapY)
  i3800.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[16], i3800.remapZ)
  i3800.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[17], i3800.positionAmount)
  i3800.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[18], i3800.rotationAmount)
  i3800.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3801[19], i3800.sizeAmount)
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3802 = root || new pc.ParticleSystemInheritVelocity()
  var i3803 = data
  i3802.enabled = !!i3803[0]
  i3802.mode = i3803[1]
  i3802.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3803[2], i3802.curve)
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3804 = root || new pc.ParticleSystemForceOverLifetime()
  var i3805 = data
  i3804.enabled = !!i3805[0]
  i3804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3805[1], i3804.x)
  i3804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3805[2], i3804.y)
  i3804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3805[3], i3804.z)
  i3804.space = i3805[4]
  i3804.randomized = !!i3805[5]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3806 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3807 = data
  i3806.enabled = !!i3807[0]
  i3806.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[1], i3806.limit)
  i3806.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[2], i3806.limitX)
  i3806.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[3], i3806.limitY)
  i3806.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[4], i3806.limitZ)
  i3806.dampen = i3807[5]
  i3806.separateAxes = !!i3807[6]
  i3806.space = i3807[7]
  i3806.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3807[8], i3806.drag)
  i3806.multiplyDragByParticleSize = !!i3807[9]
  i3806.multiplyDragByParticleVelocity = !!i3807[10]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3809 = data
  i3808.name = i3809[0]
  i3808.atlasId = i3809[1]
  i3808.mipmapCount = i3809[2]
  i3808.hdr = !!i3809[3]
  i3808.size = i3809[4]
  i3808.anisoLevel = i3809[5]
  i3808.filterMode = i3809[6]
  var i3811 = i3809[7]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 4) {
    i3810.push( UnityEngine.Rect.MinMaxRect(i3811[i + 0], i3811[i + 1], i3811[i + 2], i3811[i + 3]) );
  }
  i3808.rects = i3810
  i3808.wrapU = i3809[8]
  i3808.wrapV = i3809[9]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3815 = data
  i3814.name = i3815[0]
  i3814.index = i3815[1]
  i3814.startup = !!i3815[2]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3817 = data
  i3816.type = i3817[0]
  i3816.color = new pc.Color(i3817[1], i3817[2], i3817[3], i3817[4])
  i3816.cullingMask = i3817[5]
  i3816.intensity = i3817[6]
  i3816.range = i3817[7]
  i3816.spotAngle = i3817[8]
  i3816.shadows = i3817[9]
  i3816.shadowNormalBias = i3817[10]
  i3816.shadowBias = i3817[11]
  i3816.shadowStrength = i3817[12]
  i3816.shadowResolution = i3817[13]
  i3816.lightmapBakeType = i3817[14]
  i3816.renderMode = i3817[15]
  request.r(i3817[16], i3817[17], 0, i3816, 'cookie')
  i3816.cookieSize = i3817[18]
  i3816.shadowNearPlane = i3817[19]
  i3816.occlusionMaskChannel = i3817[20]
  i3816.isBaked = !!i3817[21]
  i3816.mixedLightingMode = i3817[22]
  i3816.enabled = !!i3817[23]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, 'sharedMesh')
  i3818.convex = !!i3819[2]
  i3818.enabled = !!i3819[3]
  i3818.isTrigger = !!i3819[4]
  request.r(i3819[5], i3819[6], 0, i3818, 'material')
  return i3818
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i3820 = root || request.c( 'ScaleYoyo' )
  var i3821 = data
  i3820.delay = i3821[0]
  i3820.duration = i3821[1]
  i3820.easeType = i3821[2]
  i3820.loops = i3821[3]
  i3820.loopType = i3821[4]
  i3820.animationType = i3821[5]
  i3820.endValueV3 = new pc.Vec3( i3821[6], i3821[7], i3821[8] )
  i3820.isRelative = !!i3821[9]
  i3820.autoPlay = !!i3821[10]
  return i3820
}

Deserializers["FerrisCabin"] = function (request, data, root) {
  var i3822 = root || request.c( 'FerrisCabin' )
  var i3823 = data
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'animatorController')
  request.r(i3825[2], i3825[3], 0, i3824, 'avatar')
  i3824.updateMode = i3825[4]
  i3824.hasTransformHierarchy = !!i3825[5]
  i3824.applyRootMotion = !!i3825[6]
  var i3827 = i3825[7]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 2) {
  request.r(i3827[i + 0], i3827[i + 1], 2, i3826, '')
  }
  i3824.humanBones = i3826
  i3824.enabled = !!i3825[8]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3831 = data
  i3830.mass = i3831[0]
  i3830.drag = i3831[1]
  i3830.angularDrag = i3831[2]
  i3830.useGravity = !!i3831[3]
  i3830.isKinematic = !!i3831[4]
  i3830.constraints = i3831[5]
  i3830.maxAngularVelocity = i3831[6]
  i3830.collisionDetectionMode = i3831[7]
  i3830.interpolation = i3831[8]
  return i3830
}

Deserializers["WaterRide"] = function (request, data, root) {
  var i3832 = root || request.c( 'WaterRide' )
  var i3833 = data
  var i3835 = i3833[0]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 2, i3834, '')
  }
  i3832.waypoints = i3834
  i3832.speed = i3833[1]
  i3832.arrivalDistance = i3833[2]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3837 = data
  i3836.center = new pc.Vec3( i3837[0], i3837[1], i3837[2] )
  i3836.radius = i3837[3]
  i3836.height = i3837[4]
  i3836.direction = i3837[5]
  i3836.enabled = !!i3837[6]
  i3836.isTrigger = !!i3837[7]
  request.r(i3837[8], i3837[9], 0, i3836, 'material')
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3839 = data
  i3838.aspect = i3839[0]
  i3838.orthographic = !!i3839[1]
  i3838.orthographicSize = i3839[2]
  i3838.backgroundColor = new pc.Color(i3839[3], i3839[4], i3839[5], i3839[6])
  i3838.nearClipPlane = i3839[7]
  i3838.farClipPlane = i3839[8]
  i3838.fieldOfView = i3839[9]
  i3838.depth = i3839[10]
  i3838.clearFlags = i3839[11]
  i3838.cullingMask = i3839[12]
  i3838.rect = i3839[13]
  request.r(i3839[14], i3839[15], 0, i3838, 'targetTexture')
  i3838.usePhysicalProperties = !!i3839[16]
  i3838.focalLength = i3839[17]
  i3838.sensorSize = new pc.Vec2( i3839[18], i3839[19] )
  i3838.lensShift = new pc.Vec2( i3839[20], i3839[21] )
  i3838.gateFit = i3839[22]
  i3838.commandBufferCount = i3839[23]
  i3838.cameraType = i3839[24]
  i3838.enabled = !!i3839[25]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i3841 = data
  i3840.enabled = !!i3841[0]
  i3840.center = new pc.Vec3( i3841[1], i3841[2], i3841[3] )
  i3840.radius = i3841[4]
  i3840.height = i3841[5]
  i3840.minMoveDistance = i3841[6]
  i3840.skinWidth = i3841[7]
  i3840.enableOverlapRecovery = !!i3841[8]
  return i3840
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i3842 = root || request.c( 'FMCharacter' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'planetTransform')
  request.r(i3843[2], i3843[3], 0, i3842, 'animator')
  request.r(i3843[4], i3843[5], 0, i3842, 'joystick')
  i3842._rotationRate = i3843[6]
  i3842._maxWalkSpeed = i3843[7]
  i3842._maxAcceleration = i3843[8]
  i3842._brakingDecelerationWalking = i3843[9]
  i3842._airControl = i3843[10]
  i3842._jumpImpulse = i3843[11]
  i3842._gravity = new pc.Vec3( i3843[12], i3843[13], i3843[14] )
  i3842._gravityScale = i3843[15]
  request.r(i3843[16], i3843[17], 0, i3842, '_camera')
  i3842.jumpSound = request.d('FMAudio', i3843[18], i3842.jumpSound)
  i3842.stepHeight = i3843[19]
  return i3842
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i3844 = root || request.c( 'FMAudio' )
  var i3845 = data
  request.r(i3845[0], i3845[1], 0, i3844, 'clip')
  i3844.channel = i3845[2]
  i3844.volume = i3845[3]
  return i3844
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i3846 = root || request.c( 'FM3rdInput' )
  var i3847 = data
  request.r(i3847[0], i3847[1], 0, i3846, 'followTarget')
  i3846.followDistance = i3847[2]
  i3846.followMinDistance = i3847[3]
  i3846.followMaxDistance = i3847[4]
  i3846.maxPitch = i3847[5]
  i3846.minPitch = i3847[6]
  i3846.invertLook = !!i3847[7]
  i3846.lookSensitivity = new pc.Vec2( i3847[8], i3847[9] )
  request.r(i3847[10], i3847[11], 0, i3846, 'planetTransform')
  i3846.cameraDistance = i3847[12]
  i3846.cameraRadius = i3847[13]
  i3846.minCameraDistance = i3847[14]
  i3846.cameraReturnSpeed = i3847[15]
  request.r(i3847[16], i3847[17], 0, i3846, 'cam')
  request.r(i3847[18], i3847[19], 0, i3846, 'lookArea')
  i3846.extraRoll = i3847[20]
  i3846.autoReturnDelay = i3847[21]
  i3846.autoReturnSpeed = i3847[22]
  i3846.defaultPitch = i3847[23]
  i3846.enableAutoReturn = !!i3847[24]
  i3846.forwardSpeedMultiplier = i3847[25]
  i3846.backwardSpeedMultiplier = i3847[26]
  return i3846
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i3848 = root || request.c( 'FindMonsterPlayerControl' )
  var i3849 = data
  request.r(i3849[0], i3849[1], 0, i3848, 'playerSO')
  request.r(i3849[2], i3849[3], 0, i3848, 'playerBase')
  request.r(i3849[4], i3849[5], 0, i3848, 'morphRoot')
  request.r(i3849[6], i3849[7], 0, i3848, 'poopFx')
  request.r(i3849[8], i3849[9], 0, i3848, 'poopRoot')
  request.r(i3849[10], i3849[11], 0, i3848, 'trailSpeed')
  i3848.popSound = request.d('FMAudio', i3849[12], i3848.popSound)
  return i3848
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i3850 = root || request.c( 'CharacterFootstep' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'ecmCharacter')
  i3850.audioSource = request.d('FMAudio', i3851[2], i3850.audioSource)
  i3850.speed = i3851[3]
  request.r(i3851[4], i3851[5], 0, i3850, 'loopSource')
  i3850.loopVolume = i3851[6]
  i3850.maxPitch = i3851[7]
  i3850.minPitch = i3851[8]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'clip')
  request.r(i3853[2], i3853[3], 0, i3852, 'outputAudioMixerGroup')
  i3852.playOnAwake = !!i3853[4]
  i3852.loop = !!i3853[5]
  i3852.time = i3853[6]
  i3852.volume = i3853[7]
  i3852.pitch = i3853[8]
  i3852.enabled = !!i3853[9]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3855 = data
  i3854.pivot = new pc.Vec2( i3855[0], i3855[1] )
  i3854.anchorMin = new pc.Vec2( i3855[2], i3855[3] )
  i3854.anchorMax = new pc.Vec2( i3855[4], i3855[5] )
  i3854.sizeDelta = new pc.Vec2( i3855[6], i3855[7] )
  i3854.anchoredPosition3D = new pc.Vec3( i3855[8], i3855[9], i3855[10] )
  i3854.rotation = new pc.Quat(i3855[11], i3855[12], i3855[13], i3855[14])
  i3854.scale = new pc.Vec3( i3855[15], i3855[16], i3855[17] )
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3857 = data
  i3856.planeDistance = i3857[0]
  i3856.referencePixelsPerUnit = i3857[1]
  i3856.isFallbackOverlay = !!i3857[2]
  i3856.renderMode = i3857[3]
  i3856.renderOrder = i3857[4]
  i3856.sortingLayerName = i3857[5]
  i3856.sortingOrder = i3857[6]
  i3856.scaleFactor = i3857[7]
  request.r(i3857[8], i3857[9], 0, i3856, 'worldCamera')
  i3856.overrideSorting = !!i3857[10]
  i3856.pixelPerfect = !!i3857[11]
  i3856.targetDisplay = i3857[12]
  i3856.overridePixelPerfect = !!i3857[13]
  i3856.enabled = !!i3857[14]
  return i3856
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3858 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3859 = data
  i3858.m_UiScaleMode = i3859[0]
  i3858.m_ReferencePixelsPerUnit = i3859[1]
  i3858.m_ScaleFactor = i3859[2]
  i3858.m_ReferenceResolution = new pc.Vec2( i3859[3], i3859[4] )
  i3858.m_ScreenMatchMode = i3859[5]
  i3858.m_MatchWidthOrHeight = i3859[6]
  i3858.m_PhysicalUnit = i3859[7]
  i3858.m_FallbackScreenDPI = i3859[8]
  i3858.m_DefaultSpriteDPI = i3859[9]
  i3858.m_DynamicPixelsPerUnit = i3859[10]
  i3858.m_PresetInfoIsWorld = !!i3859[11]
  return i3858
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3860 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3861 = data
  i3860.m_IgnoreReversedGraphics = !!i3861[0]
  i3860.m_BlockingObjects = i3861[1]
  i3860.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3861[2] )
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3863 = data
  i3862.cullTransparentMesh = !!i3863[0]
  return i3862
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.UI.Image' )
  var i3865 = data
  request.r(i3865[0], i3865[1], 0, i3864, 'm_Sprite')
  i3864.m_Type = i3865[2]
  i3864.m_PreserveAspect = !!i3865[3]
  i3864.m_FillCenter = !!i3865[4]
  i3864.m_FillMethod = i3865[5]
  i3864.m_FillAmount = i3865[6]
  i3864.m_FillClockwise = !!i3865[7]
  i3864.m_FillOrigin = i3865[8]
  i3864.m_UseSpriteMesh = !!i3865[9]
  i3864.m_PixelsPerUnitMultiplier = i3865[10]
  request.r(i3865[11], i3865[12], 0, i3864, 'm_Material')
  i3864.m_Maskable = !!i3865[13]
  i3864.m_Color = new pc.Color(i3865[14], i3865[15], i3865[16], i3865[17])
  i3864.m_RaycastTarget = !!i3865[18]
  i3864.m_RaycastPadding = new pc.Vec4( i3865[19], i3865[20], i3865[21], i3865[22] )
  return i3864
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i3866 = root || request.c( 'ScreenDeltaInputSystem' )
  var i3867 = data
  return i3866
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i3868 = root || request.c( 'MonsterProgressBar' )
  var i3869 = data
  i3868.countSceneMonsters = !!i3869[0]
  i3868.startFound = i3869[1]
  i3868.total = i3869[2]
  request.r(i3869[3], i3869[4], 0, i3868, 'fill')
  request.r(i3869[5], i3869[6], 0, i3868, 'countText')
  request.r(i3869[7], i3869[8], 0, i3868, 'icon')
  i3868.fillSpeed = i3869[9]
  return i3868
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3871 = data
  i3870.m_ShowMaskGraphic = !!i3871[0]
  return i3870
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3873 = data
  i3872.m_hasFontAssetChanged = !!i3873[0]
  request.r(i3873[1], i3873[2], 0, i3872, 'm_baseMaterial')
  i3872.m_maskOffset = new pc.Vec4( i3873[3], i3873[4], i3873[5], i3873[6] )
  i3872.m_text = i3873[7]
  i3872.m_isRightToLeft = !!i3873[8]
  request.r(i3873[9], i3873[10], 0, i3872, 'm_fontAsset')
  request.r(i3873[11], i3873[12], 0, i3872, 'm_sharedMaterial')
  var i3875 = i3873[13]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 2, i3874, '')
  }
  i3872.m_fontSharedMaterials = i3874
  request.r(i3873[14], i3873[15], 0, i3872, 'm_fontMaterial')
  var i3877 = i3873[16]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 2) {
  request.r(i3877[i + 0], i3877[i + 1], 2, i3876, '')
  }
  i3872.m_fontMaterials = i3876
  i3872.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3873[17], i3873[18], i3873[19], i3873[20])
  i3872.m_fontColor = new pc.Color(i3873[21], i3873[22], i3873[23], i3873[24])
  i3872.m_enableVertexGradient = !!i3873[25]
  i3872.m_colorMode = i3873[26]
  i3872.m_fontColorGradient = request.d('TMPro.VertexGradient', i3873[27], i3872.m_fontColorGradient)
  request.r(i3873[28], i3873[29], 0, i3872, 'm_fontColorGradientPreset')
  request.r(i3873[30], i3873[31], 0, i3872, 'm_spriteAsset')
  i3872.m_tintAllSprites = !!i3873[32]
  request.r(i3873[33], i3873[34], 0, i3872, 'm_StyleSheet')
  i3872.m_TextStyleHashCode = i3873[35]
  i3872.m_overrideHtmlColors = !!i3873[36]
  i3872.m_faceColor = UnityEngine.Color32.ConstructColor(i3873[37], i3873[38], i3873[39], i3873[40])
  i3872.m_fontSize = i3873[41]
  i3872.m_fontSizeBase = i3873[42]
  i3872.m_fontWeight = i3873[43]
  i3872.m_enableAutoSizing = !!i3873[44]
  i3872.m_fontSizeMin = i3873[45]
  i3872.m_fontSizeMax = i3873[46]
  i3872.m_fontStyle = i3873[47]
  i3872.m_HorizontalAlignment = i3873[48]
  i3872.m_VerticalAlignment = i3873[49]
  i3872.m_textAlignment = i3873[50]
  i3872.m_characterSpacing = i3873[51]
  i3872.m_characterHorizontalScale = i3873[52]
  i3872.m_wordSpacing = i3873[53]
  i3872.m_lineSpacing = i3873[54]
  i3872.m_lineSpacingMax = i3873[55]
  i3872.m_paragraphSpacing = i3873[56]
  i3872.m_charWidthMaxAdj = i3873[57]
  i3872.m_TextWrappingMode = i3873[58]
  i3872.m_wordWrappingRatios = i3873[59]
  i3872.m_overflowMode = i3873[60]
  request.r(i3873[61], i3873[62], 0, i3872, 'm_linkedTextComponent')
  request.r(i3873[63], i3873[64], 0, i3872, 'parentLinkedComponent')
  i3872.m_enableKerning = !!i3873[65]
  var i3879 = i3873[66]
  var i3878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.add(i3879[i + 0]);
  }
  i3872.m_ActiveFontFeatures = i3878
  i3872.m_enableExtraPadding = !!i3873[67]
  i3872.checkPaddingRequired = !!i3873[68]
  i3872.m_isRichText = !!i3873[69]
  i3872.m_parseCtrlCharacters = !!i3873[70]
  i3872.m_isOrthographic = !!i3873[71]
  i3872.m_isCullingEnabled = !!i3873[72]
  i3872.m_horizontalMapping = i3873[73]
  i3872.m_verticalMapping = i3873[74]
  i3872.m_uvLineOffset = i3873[75]
  i3872.m_geometrySortingOrder = i3873[76]
  i3872.m_IsTextObjectScaleStatic = !!i3873[77]
  i3872.m_VertexBufferAutoSizeReduction = !!i3873[78]
  i3872.m_useMaxVisibleDescender = !!i3873[79]
  i3872.m_pageToDisplay = i3873[80]
  i3872.m_margin = new pc.Vec4( i3873[81], i3873[82], i3873[83], i3873[84] )
  i3872.m_isUsingLegacyAnimationComponent = !!i3873[85]
  i3872.m_isVolumetricText = !!i3873[86]
  request.r(i3873[87], i3873[88], 0, i3872, 'm_Material')
  i3872.m_EmojiFallbackSupport = !!i3873[89]
  i3872.m_Maskable = !!i3873[90]
  i3872.m_Color = new pc.Color(i3873[91], i3873[92], i3873[93], i3873[94])
  i3872.m_RaycastTarget = !!i3873[95]
  i3872.m_RaycastPadding = new pc.Vec4( i3873[96], i3873[97], i3873[98], i3873[99] )
  return i3872
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3880 = root || request.c( 'TMPro.VertexGradient' )
  var i3881 = data
  i3880.topLeft = new pc.Color(i3881[0], i3881[1], i3881[2], i3881[3])
  i3880.topRight = new pc.Color(i3881[4], i3881[5], i3881[6], i3881[7])
  i3880.bottomLeft = new pc.Color(i3881[8], i3881[9], i3881[10], i3881[11])
  i3880.bottomRight = new pc.Color(i3881[12], i3881[13], i3881[14], i3881[15])
  return i3880
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i3884 = root || request.c( 'JumpButton' )
  var i3885 = data
  request.r(i3885[0], i3885[1], 0, i3884, 'character')
  return i3884
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i3886 = root || request.c( 'PlayableJoystick' )
  var i3887 = data
  i3886.handleRange = i3887[0]
  i3886.deadZone = i3887[1]
  i3886.floating = !!i3887[2]
  request.r(i3887[3], i3887[4], 0, i3886, 'background')
  request.r(i3887[5], i3887[6], 0, i3886, 'knob')
  return i3886
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i3888 = root || request.c( 'StoryTextView' )
  var i3889 = data
  request.r(i3889[0], i3889[1], 0, i3888, 'label')
  i3888.popDuration = i3889[2]
  i3888.pulseAmount = i3889[3]
  i3888.pulseSpeed = i3889[4]
  i3888.fadeDuration = i3889[5]
  return i3888
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i3890 = root || request.c( 'HiddenMonsterPanel' )
  var i3891 = data
  request.r(i3891[0], i3891[1], 0, i3890, 'icon')
  i3890.openSound = request.d('FMAudio', i3891[2], i3890.openSound)
  request.r(i3891[3], i3891[4], 0, i3890, 'popRoot')
  i3890.popDuration = i3891[5]
  return i3890
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3892 = root || request.c( 'UnityEngine.UI.Button' )
  var i3893 = data
  i3892.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3893[0], i3892.m_OnClick)
  i3892.m_Navigation = request.d('UnityEngine.UI.Navigation', i3893[1], i3892.m_Navigation)
  i3892.m_Transition = i3893[2]
  i3892.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3893[3], i3892.m_Colors)
  i3892.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3893[4], i3892.m_SpriteState)
  i3892.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3893[5], i3892.m_AnimationTriggers)
  i3892.m_Interactable = !!i3893[6]
  request.r(i3893[7], i3893[8], 0, i3892, 'm_TargetGraphic')
  return i3892
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3895 = data
  i3894.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3895[0], i3894.m_PersistentCalls)
  return i3894
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3897 = data
  var i3899 = i3897[0]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.add(request.d('UnityEngine.Events.PersistentCall', i3899[i + 0]));
  }
  i3896.m_Calls = i3898
  return i3896
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3903 = data
  request.r(i3903[0], i3903[1], 0, i3902, 'm_Target')
  i3902.m_TargetAssemblyTypeName = i3903[2]
  i3902.m_MethodName = i3903[3]
  i3902.m_Mode = i3903[4]
  i3902.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3903[5], i3902.m_Arguments)
  i3902.m_CallState = i3903[6]
  return i3902
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3904 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3905 = data
  request.r(i3905[0], i3905[1], 0, i3904, 'm_ObjectArgument')
  i3904.m_ObjectArgumentAssemblyTypeName = i3905[2]
  i3904.m_IntArgument = i3905[3]
  i3904.m_FloatArgument = i3905[4]
  i3904.m_StringArgument = i3905[5]
  i3904.m_BoolArgument = !!i3905[6]
  return i3904
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3906 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3907 = data
  i3906.m_Mode = i3907[0]
  i3906.m_WrapAround = !!i3907[1]
  request.r(i3907[2], i3907[3], 0, i3906, 'm_SelectOnUp')
  request.r(i3907[4], i3907[5], 0, i3906, 'm_SelectOnDown')
  request.r(i3907[6], i3907[7], 0, i3906, 'm_SelectOnLeft')
  request.r(i3907[8], i3907[9], 0, i3906, 'm_SelectOnRight')
  return i3906
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3909 = data
  i3908.m_NormalColor = new pc.Color(i3909[0], i3909[1], i3909[2], i3909[3])
  i3908.m_HighlightedColor = new pc.Color(i3909[4], i3909[5], i3909[6], i3909[7])
  i3908.m_PressedColor = new pc.Color(i3909[8], i3909[9], i3909[10], i3909[11])
  i3908.m_SelectedColor = new pc.Color(i3909[12], i3909[13], i3909[14], i3909[15])
  i3908.m_DisabledColor = new pc.Color(i3909[16], i3909[17], i3909[18], i3909[19])
  i3908.m_ColorMultiplier = i3909[20]
  i3908.m_FadeDuration = i3909[21]
  return i3908
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3911 = data
  request.r(i3911[0], i3911[1], 0, i3910, 'm_HighlightedSprite')
  request.r(i3911[2], i3911[3], 0, i3910, 'm_PressedSprite')
  request.r(i3911[4], i3911[5], 0, i3910, 'm_SelectedSprite')
  request.r(i3911[6], i3911[7], 0, i3910, 'm_DisabledSprite')
  return i3910
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3912 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3913 = data
  i3912.m_NormalTrigger = i3913[0]
  i3912.m_HighlightedTrigger = i3913[1]
  i3912.m_PressedTrigger = i3913[2]
  i3912.m_SelectedTrigger = i3913[3]
  i3912.m_DisabledTrigger = i3913[4]
  return i3912
}

Deserializers["HideButton"] = function (request, data, root) {
  var i3914 = root || request.c( 'HideButton' )
  var i3915 = data
  return i3914
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i3916 = root || request.c( 'FindMonsterManager' )
  var i3917 = data
  request.r(i3917[0], i3917[1], 0, i3916, 'database')
  var i3919 = i3917[2]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 1, i3918, '')
  }
  i3916.listRespawn = i3918
  request.r(i3917[3], i3917[4], 0, i3916, 'playerTransform')
  request.r(i3917[5], i3917[6], 0, i3916, 'targetTutorial')
  request.r(i3917[7], i3917[8], 0, i3916, 'arrowTut')
  i3916.autoHintNext = !!i3917[9]
  var i3921 = i3917[10]
  var i3920 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i3921.length; i += 2) {
  request.r(i3921[i + 0], i3921[i + 1], 1, i3920, '')
  }
  i3916.monsters = i3920
  i3916.playerTouchSize = new pc.Vec3( i3917[11], i3917[12], i3917[13] )
  request.r(i3917[14], i3917[15], 0, i3916, 'hiddenMonsterPanel')
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3927 = data
  i3926.textureMode = i3927[0]
  i3926.alignment = i3927[1]
  i3926.widthCurve = new pc.AnimationCurve( { keys_flow: i3927[2] } )
  i3926.colorGradient = i3927[3] ? new pc.ColorGradient(i3927[3][0], i3927[3][1], i3927[3][2]) : null
  var i3929 = i3927[4]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 3) {
    i3928.push( new pc.Vec3( i3929[i + 0], i3929[i + 1], i3929[i + 2] ) );
  }
  i3926.positions = i3928
  i3926.positionCount = i3927[5]
  i3926.widthMultiplier = i3927[6]
  i3926.startWidth = i3927[7]
  i3926.endWidth = i3927[8]
  i3926.numCornerVertices = i3927[9]
  i3926.numCapVertices = i3927[10]
  i3926.useWorldSpace = !!i3927[11]
  i3926.loop = !!i3927[12]
  i3926.startColor = new pc.Color(i3927[13], i3927[14], i3927[15], i3927[16])
  i3926.endColor = new pc.Color(i3927[17], i3927[18], i3927[19], i3927[20])
  i3926.generateLightingData = !!i3927[21]
  i3926.enabled = !!i3927[22]
  request.r(i3927[23], i3927[24], 0, i3926, 'sharedMaterial')
  var i3931 = i3927[25]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 2) {
  request.r(i3931[i + 0], i3931[i + 1], 2, i3930, '')
  }
  i3926.sharedMaterials = i3930
  i3926.receiveShadows = !!i3927[26]
  i3926.shadowCastingMode = i3927[27]
  i3926.sortingLayerID = i3927[28]
  i3926.sortingOrder = i3927[29]
  i3926.lightmapIndex = i3927[30]
  i3926.lightmapSceneIndex = i3927[31]
  i3926.lightmapScaleOffset = new pc.Vec4( i3927[32], i3927[33], i3927[34], i3927[35] )
  i3926.lightProbeUsage = i3927[36]
  i3926.reflectionProbeUsage = i3927[37]
  return i3926
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i3934 = root || request.c( 'TurtorialArrow' )
  var i3935 = data
  request.r(i3935[0], i3935[1], 0, i3934, 'lineRenderer')
  i3934.offset = new pc.Vec3( i3935[2], i3935[3], i3935[4] )
  i3934.planetSegments = i3935[5]
  return i3934
}

Deserializers["SprunkiHunt"] = function (request, data, root) {
  var i3936 = root || request.c( 'SprunkiHunt' )
  var i3937 = data
  request.r(i3937[0], i3937[1], 0, i3936, 'player')
  i3936.resetPlayerPosition = !!i3937[2]
  request.r(i3937[3], i3937[4], 0, i3936, 'startPoint')
  request.r(i3937[5], i3937[6], 0, i3936, 'collection')
  var i3939 = i3937[7]
  var i3938 = new (System.Collections.Generic.List$1(Bridge.ns('SprunkiCard')))
  for(var i = 0; i < i3939.length; i += 2) {
  request.r(i3939[i + 0], i3939[i + 1], 1, i3938, '')
  }
  i3936.cards = i3938
  request.r(i3937[8], i3937[9], 0, i3936, 'targetView')
  request.r(i3937[10], i3937[11], 0, i3936, 'targetIcon')
  request.r(i3937[12], i3937[13], 0, i3936, 'targetName')
  request.r(i3937[14], i3937[15], 0, i3936, 'foundPanel')
  request.r(i3937[16], i3937[17], 0, i3936, 'foundIcon')
  request.r(i3937[18], i3937[19], 0, i3936, 'foundName')
  request.r(i3937[20], i3937[21], 0, i3936, 'failPanel')
  request.r(i3937[22], i3937[23], 0, i3936, 'failIcon')
  request.r(i3937[24], i3937[25], 0, i3936, 'failName')
  i3936.foundSound = request.d('FMAudio', i3937[26], i3936.foundSound)
  i3936.failSound = request.d('FMAudio', i3937[27], i3936.failSound)
  request.r(i3937[28], i3937[29], 0, i3936, 'confetti')
  i3936.guideToTarget = !!i3937[30]
  request.r(i3937[31], i3937[32], 0, i3936, 'followText')
  i3936.followMessage = i3937[33]
  request.r(i3937[34], i3937[35], 0, i3936, 'horrorSky')
  return i3936
}

Deserializers["HorrorSky"] = function (request, data, root) {
  var i3942 = root || request.c( 'HorrorSky' )
  var i3943 = data
  request.r(i3943[0], i3943[1], 0, i3942, 'cam')
  request.r(i3943[2], i3943[3], 0, i3942, 'sun')
  var i3945 = i3943[4]
  var i3944 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i3945.length; i += 2) {
  request.r(i3945[i + 0], i3945[i + 1], 1, i3944, '')
  }
  i3942.horrorMonsters = i3944
  request.r(i3943[5], i3943[6], 0, i3942, 'skyDome')
  request.r(i3943[7], i3943[8], 0, i3942, 'sunSprite')
  i3942.domeRadius = i3943[9]
  i3942.sunSize = i3943[10]
  i3942.sunElevation = i3943[11]
  i3942.fogColor = new pc.Color(i3943[12], i3943[13], i3943[14], i3943[15])
  i3942.sunColor = new pc.Color(i3943[16], i3943[17], i3943[18], i3943[19])
  i3942.sunIntensity = i3943[20]
  i3942.ambientColor = new pc.Color(i3943[21], i3943[22], i3943[23], i3943[24])
  i3942.dayAmbientColor = new pc.Color(i3943[25], i3943[26], i3943[27], i3943[28])
  i3942.duration = i3943[29]
  request.r(i3943[30], i3943[31], 0, i3942, 'dayMusic')
  request.r(i3943[32], i3943[33], 0, i3942, 'horrorMusicSource')
  request.r(i3943[34], i3943[35], 0, i3942, 'horrorMusic')
  i3942.horrorMusicVolume = i3943[36]
  i3942.musicFade = i3943[37]
  return i3942
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i3948 = root || request.c( 'PlayableAudio' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'source')
  request.r(i3949[2], i3949[3], 0, i3948, 'buttonClick')
  return i3948
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3950 = root || request.c( 'LunaController' )
  var i3951 = data
  i3950.LimitTimePlay = !!i3951[0]
  i3950.TimePlay = i3951[1]
  i3950.LimitCountPlay = !!i3951[2]
  i3950.CountPlay = i3951[3]
  i3950.LimitClick = !!i3951[4]
  i3950.MaxClick = i3951[5]
  request.r(i3951[6], i3951[7], 0, i3950, 'BGM')
  request.r(i3951[8], i3951[9], 0, i3950, 'musicSource')
  i3950.musicVolume = i3951[10]
  var i3953 = i3951[11]
  var i3952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3953.length; i += 2) {
  request.r(i3953[i + 0], i3953[i + 1], 1, i3952, '')
  }
  i3950.CTA = i3952
  request.r(i3951[12], i3951[13], 0, i3950, 'endCard')
  return i3950
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3957 = data
  request.r(i3957[0], i3957[1], 0, i3956, 'm_FirstSelected')
  i3956.m_sendNavigationEvents = !!i3957[2]
  i3956.m_DragThreshold = i3957[3]
  return i3956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3959 = data
  i3958.m_HorizontalAxis = i3959[0]
  i3958.m_VerticalAxis = i3959[1]
  i3958.m_SubmitButton = i3959[2]
  i3958.m_CancelButton = i3959[3]
  i3958.m_InputActionsPerSecond = i3959[4]
  i3958.m_RepeatDelay = i3959[5]
  i3958.m_ForceModuleActive = !!i3959[6]
  i3958.m_SendPointerHoverToParent = !!i3959[7]
  return i3958
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i3960 = root || request.c( 'ControlsTutorial' )
  var i3961 = data
  request.r(i3961[0], i3961[1], 0, i3960, 'player')
  request.r(i3961[2], i3961[3], 0, i3960, 'look')
  request.r(i3961[4], i3961[5], 0, i3960, 'hand')
  request.r(i3961[6], i3961[7], 0, i3960, 'text')
  request.r(i3961[8], i3961[9], 0, i3960, 'viewFrom')
  request.r(i3961[10], i3961[11], 0, i3960, 'viewTo')
  request.r(i3961[12], i3961[13], 0, i3960, 'joystickRing')
  request.r(i3961[14], i3961[15], 0, i3960, 'jumpButton')
  i3960.viewText = i3961[16]
  i3960.moveText = i3961[17]
  i3960.jumpText = i3961[18]
  i3960.lookDegrees = i3961[19]
  i3960.moveDistance = i3961[20]
  i3960.jumps = i3961[21]
  i3960.jumpStep = !!i3961[22]
  i3960.startDelay = i3961[23]
  i3960.stepGap = i3961[24]
  i3960.swipeDuration = i3961[25]
  i3960.joystickSwipe = i3961[26]
  return i3960
}

Deserializers["PlayableFrame"] = function (request, data, root) {
  var i3962 = root || request.c( 'PlayableFrame' )
  var i3963 = data
  request.r(i3963[0], i3963[1], 0, i3962, 'popRoot')
  i3962.popDuration = i3963[2]
  return i3962
}

Deserializers["DragScroll"] = function (request, data, root) {
  var i3964 = root || request.c( 'DragScroll' )
  var i3965 = data
  request.r(i3965[0], i3965[1], 0, i3964, 'content')
  request.r(i3965[2], i3965[3], 0, i3964, 'viewport')
  request.r(i3965[4], i3965[5], 0, i3964, 'scrollbarArea')
  request.r(i3965[6], i3965[7], 0, i3964, 'scrollbarHandle')
  i3964.decelerationRate = i3965[8]
  i3964.elasticity = i3965[9]
  i3964.scrollSensitivity = i3965[10]
  return i3964
}

Deserializers["SprunkiCard"] = function (request, data, root) {
  var i3966 = root || request.c( 'SprunkiCard' )
  var i3967 = data
  request.r(i3967[0], i3967[1], 0, i3966, 'monster')
  request.r(i3967[2], i3967[3], 0, i3966, 'background')
  request.r(i3967[4], i3967[5], 0, i3966, 'icon')
  request.r(i3967[6], i3967[7], 0, i3966, 'nameText')
  request.r(i3967[8], i3967[9], 0, i3966, 'selectButton')
  request.r(i3967[10], i3967[11], 0, i3966, 'buttonImage')
  request.r(i3967[12], i3967[13], 0, i3966, 'buttonText')
  request.r(i3967[14], i3967[15], 0, i3966, 'foundMark')
  i3966.normalColor = new pc.Color(i3967[16], i3967[17], i3967[18], i3967[19])
  i3966.foundColor = new pc.Color(i3967[20], i3967[21], i3967[22], i3967[23])
  i3966.buttonColor = new pc.Color(i3967[24], i3967[25], i3967[26], i3967[27])
  i3966.foundButtonColor = new pc.Color(i3967[28], i3967[29], i3967[30], i3967[31])
  i3966.lockedIconColor = new pc.Color(i3967[32], i3967[33], i3967[34], i3967[35])
  i3966.nameColor = new pc.Color(i3967[36], i3967[37], i3967[38], i3967[39])
  i3966.foundNameColor = new pc.Color(i3967[40], i3967[41], i3967[42], i3967[43])
  i3966.selectLabel = i3967[44]
  i3966.foundLabel = i3967[45]
  return i3966
}

Deserializers["ScrollbarArea"] = function (request, data, root) {
  var i3968 = root || request.c( 'ScrollbarArea' )
  var i3969 = data
  request.r(i3969[0], i3969[1], 0, i3968, 'scroll')
  return i3968
}

Deserializers["SelectHandHint"] = function (request, data, root) {
  var i3970 = root || request.c( 'SelectHandHint' )
  var i3971 = data
  request.r(i3971[0], i3971[1], 0, i3970, 'hand')
  request.r(i3971[2], i3971[3], 0, i3970, 'scroll')
  var i3973 = i3971[4]
  var i3972 = new (System.Collections.Generic.List$1(Bridge.ns('SprunkiCard')))
  for(var i = 0; i < i3973.length; i += 2) {
  request.r(i3973[i + 0], i3973[i + 1], 1, i3972, '')
  }
  i3970.cards = i3972
  i3970.startDelay = i3971[5]
  i3970.moveDuration = i3971[6]
  i3970.pressDuration = i3971[7]
  i3970.holdDuration = i3971[8]
  i3970.scrollSpeed = i3971[9]
  i3970.pressScale = i3971[10]
  return i3970
}

Deserializers["ConfettiBurst"] = function (request, data, root) {
  var i3974 = root || request.c( 'ConfettiBurst' )
  var i3975 = data
  request.r(i3975[0], i3975[1], 0, i3974, 'area')
  var i3977 = i3975[2]
  var i3976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i3977.length; i += 2) {
  request.r(i3977[i + 0], i3977[i + 1], 1, i3976, '')
  }
  i3974.pieces = i3976
  var i3979 = i3975[3]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 4) {
    i3978.push( new pc.Color(i3979[i + 0], i3979[i + 1], i3979[i + 2], i3979[i + 3]) );
  }
  i3974.pastel = i3978
  var i3981 = i3975[4]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 4) {
    i3980.push( new pc.Color(i3981[i + 0], i3981[i + 1], i3981[i + 2], i3981[i + 3]) );
  }
  i3974.vivid = i3980
  i3974.vividChance = i3975[5]
  i3974.speed = new pc.Vec2( i3975[6], i3975[7] )
  i3974.angle = new pc.Vec2( i3975[8], i3975[9] )
  i3974.startHeight = new pc.Vec2( i3975[10], i3975[11] )
  i3974.gravity = i3975[12]
  i3974.drag = i3975[13]
  i3974.lifetime = new pc.Vec2( i3975[14], i3975[15] )
  i3974.fadeTime = i3975[16]
  i3974.spinSpeed = new pc.Vec2( i3975[17], i3975[18] )
  i3974.flipSpeed = new pc.Vec2( i3975[19], i3975[20] )
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3987 = data
  i3986.ambientIntensity = i3987[0]
  i3986.reflectionIntensity = i3987[1]
  i3986.ambientMode = i3987[2]
  i3986.ambientLight = new pc.Color(i3987[3], i3987[4], i3987[5], i3987[6])
  i3986.ambientSkyColor = new pc.Color(i3987[7], i3987[8], i3987[9], i3987[10])
  i3986.ambientGroundColor = new pc.Color(i3987[11], i3987[12], i3987[13], i3987[14])
  i3986.ambientEquatorColor = new pc.Color(i3987[15], i3987[16], i3987[17], i3987[18])
  i3986.fogColor = new pc.Color(i3987[19], i3987[20], i3987[21], i3987[22])
  i3986.fogEndDistance = i3987[23]
  i3986.fogStartDistance = i3987[24]
  i3986.fogDensity = i3987[25]
  i3986.fog = !!i3987[26]
  request.r(i3987[27], i3987[28], 0, i3986, 'skybox')
  i3986.fogMode = i3987[29]
  var i3989 = i3987[30]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3989[i + 0]) );
  }
  i3986.lightmaps = i3988
  i3986.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3987[31], i3986.lightProbes)
  i3986.lightmapsMode = i3987[32]
  i3986.mixedBakeMode = i3987[33]
  i3986.environmentLightingMode = i3987[34]
  i3986.ambientProbe = new pc.SphericalHarmonicsL2(i3987[35])
  request.r(i3987[36], i3987[37], 0, i3986, 'customReflection')
  request.r(i3987[38], i3987[39], 0, i3986, 'defaultReflection')
  i3986.defaultReflectionMode = i3987[40]
  i3986.defaultReflectionResolution = i3987[41]
  i3986.sunLightObjectId = i3987[42]
  i3986.pixelLightCount = i3987[43]
  i3986.defaultReflectionHDR = !!i3987[44]
  i3986.hasLightDataAsset = !!i3987[45]
  i3986.hasManualGenerate = !!i3987[46]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3993 = data
  request.r(i3993[0], i3993[1], 0, i3992, 'lightmapColor')
  request.r(i3993[2], i3993[3], 0, i3992, 'lightmapDirection')
  request.r(i3993[4], i3993[5], 0, i3992, 'shadowMask')
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3994 = root || new UnityEngine.LightProbes()
  var i3995 = data
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4001 = data
  var i4003 = i4001[0]
  var i4002 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4003[i + 0]));
  }
  i4000.ShaderCompilationErrors = i4002
  i4000.name = i4001[1]
  i4000.guid = i4001[2]
  var i4005 = i4001[3]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( i4005[i + 0] );
  }
  i4000.shaderDefinedKeywords = i4004
  var i4007 = i4001[4]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4007[i + 0]) );
  }
  i4000.passes = i4006
  var i4009 = i4001[5]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4009[i + 0]) );
  }
  i4000.usePasses = i4008
  var i4011 = i4001[6]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4011[i + 0]) );
  }
  i4000.defaultParameterValues = i4010
  request.r(i4001[7], i4001[8], 0, i4000, 'unityFallbackShader')
  i4000.readDepth = !!i4001[9]
  i4000.hasDepthOnlyPass = !!i4001[10]
  i4000.isCreatedByShaderGraph = !!i4001[11]
  i4000.disableBatching = !!i4001[12]
  i4000.compiled = !!i4001[13]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4015 = data
  i4014.shaderName = i4015[0]
  i4014.errorMessage = i4015[1]
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4020 = root || new pc.UnityShaderPass()
  var i4021 = data
  i4020.id = i4021[0]
  i4020.subShaderIndex = i4021[1]
  i4020.name = i4021[2]
  i4020.passType = i4021[3]
  i4020.grabPassTextureName = i4021[4]
  i4020.usePass = !!i4021[5]
  i4020.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[6], i4020.zTest)
  i4020.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[7], i4020.zWrite)
  i4020.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[8], i4020.culling)
  i4020.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4021[9], i4020.blending)
  i4020.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4021[10], i4020.alphaBlending)
  i4020.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[11], i4020.colorWriteMask)
  i4020.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[12], i4020.offsetUnits)
  i4020.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[13], i4020.offsetFactor)
  i4020.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[14], i4020.stencilRef)
  i4020.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[15], i4020.stencilReadMask)
  i4020.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4021[16], i4020.stencilWriteMask)
  i4020.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4021[17], i4020.stencilOp)
  i4020.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4021[18], i4020.stencilOpFront)
  i4020.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4021[19], i4020.stencilOpBack)
  var i4023 = i4021[20]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4023[i + 0]) );
  }
  i4020.tags = i4022
  var i4025 = i4021[21]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( i4025[i + 0] );
  }
  i4020.passDefinedKeywords = i4024
  var i4027 = i4021[22]
  var i4026 = []
  for(var i = 0; i < i4027.length; i += 1) {
    i4026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4027[i + 0]) );
  }
  i4020.passDefinedKeywordGroups = i4026
  var i4029 = i4021[23]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4029[i + 0]) );
  }
  i4020.variants = i4028
  var i4031 = i4021[24]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4031[i + 0]) );
  }
  i4020.excludedVariants = i4030
  i4020.hasDepthReader = !!i4021[25]
  return i4020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4033 = data
  i4032.val = i4033[0]
  i4032.name = i4033[1]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4035 = data
  i4034.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4035[0], i4034.src)
  i4034.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4035[1], i4034.dst)
  i4034.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4035[2], i4034.op)
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4037 = data
  i4036.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4037[0], i4036.pass)
  i4036.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4037[1], i4036.fail)
  i4036.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4037[2], i4036.zFail)
  i4036.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4037[3], i4036.comp)
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4041 = data
  i4040.name = i4041[0]
  i4040.value = i4041[1]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4045 = data
  var i4047 = i4045[0]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( i4047[i + 0] );
  }
  i4044.keywords = i4046
  i4044.hasDiscard = !!i4045[1]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4051 = data
  i4050.passId = i4051[0]
  i4050.subShaderIndex = i4051[1]
  var i4053 = i4051[2]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( i4053[i + 0] );
  }
  i4050.keywords = i4052
  i4050.vertexProgram = i4051[3]
  i4050.fragmentProgram = i4051[4]
  i4050.exportedForWebGl2 = !!i4051[5]
  i4050.readDepth = !!i4051[6]
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4057 = data
  request.r(i4057[0], i4057[1], 0, i4056, 'shader')
  i4056.pass = i4057[2]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4061 = data
  i4060.name = i4061[0]
  i4060.type = i4061[1]
  i4060.value = new pc.Vec4( i4061[2], i4061[3], i4061[4], i4061[5] )
  i4060.textureValue = i4061[6]
  i4060.shaderPropertyFlag = i4061[7]
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4063 = data
  i4062.name = i4063[0]
  request.r(i4063[1], i4063[2], 0, i4062, 'texture')
  i4062.aabb = i4063[3]
  i4062.vertices = i4063[4]
  i4062.triangles = i4063[5]
  i4062.textureRect = UnityEngine.Rect.MinMaxRect(i4063[6], i4063[7], i4063[8], i4063[9])
  i4062.packedRect = UnityEngine.Rect.MinMaxRect(i4063[10], i4063[11], i4063[12], i4063[13])
  i4062.border = new pc.Vec4( i4063[14], i4063[15], i4063[16], i4063[17] )
  i4062.transparency = i4063[18]
  i4062.bounds = i4063[19]
  i4062.pixelsPerUnit = i4063[20]
  i4062.textureWidth = i4063[21]
  i4062.textureHeight = i4063[22]
  i4062.nativeSize = new pc.Vec2( i4063[23], i4063[24] )
  i4062.pivot = new pc.Vec2( i4063[25], i4063[26] )
  i4062.textureRectOffset = new pc.Vec2( i4063[27], i4063[28] )
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4065 = data
  i4064.name = i4065[0]
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4067 = data
  i4066.name = i4067[0]
  i4066.wrapMode = i4067[1]
  i4066.isLooping = !!i4067[2]
  i4066.length = i4067[3]
  var i4069 = i4067[4]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4069[i + 0]) );
  }
  i4066.curves = i4068
  var i4071 = i4067[5]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4071[i + 0]) );
  }
  i4066.events = i4070
  i4066.halfPrecision = !!i4067[6]
  i4066._frameRate = i4067[7]
  i4066.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4067[8], i4066.localBounds)
  i4066.hasMuscleCurves = !!i4067[9]
  var i4073 = i4067[10]
  var i4072 = []
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.push( i4073[i + 0] );
  }
  i4066.clipMuscleConstant = i4072
  i4066.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4067[11], i4066.clipBindingConstant)
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4077 = data
  i4076.path = i4077[0]
  i4076.hash = i4077[1]
  i4076.componentType = i4077[2]
  i4076.property = i4077[3]
  i4076.keys = i4077[4]
  var i4079 = i4077[5]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4079[i + 0]) );
  }
  i4076.objectReferenceKeys = i4078
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4083 = data
  i4082.time = i4083[0]
  request.r(i4083[1], i4083[2], 0, i4082, 'value')
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4087 = data
  i4086.functionName = i4087[0]
  i4086.floatParameter = i4087[1]
  i4086.intParameter = i4087[2]
  i4086.stringParameter = i4087[3]
  request.r(i4087[4], i4087[5], 0, i4086, 'objectReferenceParameter')
  i4086.time = i4087[6]
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4089 = data
  i4088.center = new pc.Vec3( i4089[0], i4089[1], i4089[2] )
  i4088.extends = new pc.Vec3( i4089[3], i4089[4], i4089[5] )
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4093 = data
  var i4095 = i4093[0]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( i4095[i + 0] );
  }
  i4092.genericBindings = i4094
  var i4097 = i4093[1]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( i4097[i + 0] );
  }
  i4092.pptrCurveMapping = i4096
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4099 = data
  i4098.name = i4099[0]
  var i4101 = i4099[1]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4101[i + 0]) );
  }
  i4098.layers = i4100
  var i4103 = i4099[2]
  var i4102 = []
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4103[i + 0]) );
  }
  i4098.parameters = i4102
  i4098.animationClips = i4099[3]
  i4098.avatarUnsupported = i4099[4]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4107 = data
  i4106.name = i4107[0]
  i4106.defaultWeight = i4107[1]
  i4106.blendingMode = i4107[2]
  i4106.avatarMask = i4107[3]
  i4106.syncedLayerIndex = i4107[4]
  i4106.syncedLayerAffectsTiming = !!i4107[5]
  i4106.syncedLayers = i4107[6]
  i4106.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4107[7], i4106.stateMachine)
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4109 = data
  i4108.id = i4109[0]
  i4108.name = i4109[1]
  i4108.path = i4109[2]
  var i4111 = i4109[3]
  var i4110 = []
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4111[i + 0]) );
  }
  i4108.states = i4110
  var i4113 = i4109[4]
  var i4112 = []
  for(var i = 0; i < i4113.length; i += 1) {
    i4112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4113[i + 0]) );
  }
  i4108.machines = i4112
  var i4115 = i4109[5]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 1) {
    i4114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4115[i + 0]) );
  }
  i4108.entryStateTransitions = i4114
  var i4117 = i4109[6]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4117[i + 0]) );
  }
  i4108.exitStateTransitions = i4116
  var i4119 = i4109[7]
  var i4118 = []
  for(var i = 0; i < i4119.length; i += 1) {
    i4118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4119[i + 0]) );
  }
  i4108.anyStateTransitions = i4118
  i4108.defaultStateId = i4109[8]
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4123 = data
  i4122.id = i4123[0]
  i4122.name = i4123[1]
  i4122.cycleOffset = i4123[2]
  i4122.cycleOffsetParameter = i4123[3]
  i4122.cycleOffsetParameterActive = !!i4123[4]
  i4122.mirror = !!i4123[5]
  i4122.mirrorParameter = i4123[6]
  i4122.mirrorParameterActive = !!i4123[7]
  i4122.motionId = i4123[8]
  i4122.nameHash = i4123[9]
  i4122.fullPathHash = i4123[10]
  i4122.speed = i4123[11]
  i4122.speedParameter = i4123[12]
  i4122.speedParameterActive = !!i4123[13]
  i4122.tag = i4123[14]
  i4122.tagHash = i4123[15]
  i4122.writeDefaultValues = !!i4123[16]
  var i4125 = i4123[17]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 2) {
  request.r(i4125[i + 0], i4125[i + 1], 2, i4124, '')
  }
  i4122.behaviours = i4124
  var i4127 = i4123[18]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4127[i + 0]) );
  }
  i4122.transitions = i4126
  return i4122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4133 = data
  i4132.fullPath = i4133[0]
  i4132.canTransitionToSelf = !!i4133[1]
  i4132.duration = i4133[2]
  i4132.exitTime = i4133[3]
  i4132.hasExitTime = !!i4133[4]
  i4132.hasFixedDuration = !!i4133[5]
  i4132.interruptionSource = i4133[6]
  i4132.offset = i4133[7]
  i4132.orderedInterruption = !!i4133[8]
  i4132.destinationStateId = i4133[9]
  i4132.isExit = !!i4133[10]
  i4132.mute = !!i4133[11]
  i4132.solo = !!i4133[12]
  var i4135 = i4133[13]
  var i4134 = []
  for(var i = 0; i < i4135.length; i += 1) {
    i4134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4135[i + 0]) );
  }
  i4132.conditions = i4134
  return i4132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4141 = data
  i4140.destinationStateId = i4141[0]
  i4140.isExit = !!i4141[1]
  i4140.mute = !!i4141[2]
  i4140.solo = !!i4141[3]
  var i4143 = i4141[4]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4143[i + 0]) );
  }
  i4140.conditions = i4142
  return i4140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4147 = data
  i4146.defaultBool = !!i4147[0]
  i4146.defaultFloat = i4147[1]
  i4146.defaultInt = i4147[2]
  i4146.name = i4147[3]
  i4146.nameHash = i4147[4]
  i4146.type = i4147[5]
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4151 = data
  i4150.mode = i4151[0]
  i4150.parameter = i4151[1]
  i4150.threshold = i4151[2]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4153 = data
  i4152.name = i4153[0]
  i4152.bytes64 = i4153[1]
  i4152.data = i4153[2]
  return i4152
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4154 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4155 = data
  i4154.normalStyle = i4155[0]
  i4154.normalSpacingOffset = i4155[1]
  i4154.boldStyle = i4155[2]
  i4154.boldSpacing = i4155[3]
  i4154.italicStyle = i4155[4]
  i4154.tabSize = i4155[5]
  request.r(i4155[6], i4155[7], 0, i4154, 'atlas')
  i4154.m_SourceFontFileGUID = i4155[8]
  i4154.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4155[9], i4154.m_CreationSettings)
  request.r(i4155[10], i4155[11], 0, i4154, 'm_SourceFontFile')
  i4154.m_SourceFontFilePath = i4155[12]
  i4154.m_AtlasPopulationMode = i4155[13]
  i4154.InternalDynamicOS = !!i4155[14]
  var i4157 = i4155[15]
  var i4156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.add(request.d('UnityEngine.TextCore.Glyph', i4157[i + 0]));
  }
  i4154.m_GlyphTable = i4156
  var i4159 = i4155[16]
  var i4158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.add(request.d('TMPro.TMP_Character', i4159[i + 0]));
  }
  i4154.m_CharacterTable = i4158
  var i4161 = i4155[17]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 2) {
  request.r(i4161[i + 0], i4161[i + 1], 2, i4160, '')
  }
  i4154.m_AtlasTextures = i4160
  i4154.m_AtlasTextureIndex = i4155[18]
  i4154.m_IsMultiAtlasTexturesEnabled = !!i4155[19]
  i4154.m_GetFontFeatures = !!i4155[20]
  i4154.m_ClearDynamicDataOnBuild = !!i4155[21]
  i4154.m_AtlasWidth = i4155[22]
  i4154.m_AtlasHeight = i4155[23]
  i4154.m_AtlasPadding = i4155[24]
  i4154.m_AtlasRenderMode = i4155[25]
  var i4163 = i4155[26]
  var i4162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.add(request.d('UnityEngine.TextCore.GlyphRect', i4163[i + 0]));
  }
  i4154.m_UsedGlyphRects = i4162
  var i4165 = i4155[27]
  var i4164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.add(request.d('UnityEngine.TextCore.GlyphRect', i4165[i + 0]));
  }
  i4154.m_FreeGlyphRects = i4164
  i4154.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4155[28], i4154.m_FontFeatureTable)
  i4154.m_ShouldReimportFontFeatures = !!i4155[29]
  var i4167 = i4155[30]
  var i4166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4167.length; i += 2) {
  request.r(i4167[i + 0], i4167[i + 1], 1, i4166, '')
  }
  i4154.m_FallbackFontAssetTable = i4166
  var i4169 = i4155[31]
  var i4168 = []
  for(var i = 0; i < i4169.length; i += 1) {
    i4168.push( request.d('TMPro.TMP_FontWeightPair', i4169[i + 0]) );
  }
  i4154.m_FontWeightTable = i4168
  var i4171 = i4155[32]
  var i4170 = []
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.push( request.d('TMPro.TMP_FontWeightPair', i4171[i + 0]) );
  }
  i4154.fontWeights = i4170
  i4154.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4155[33], i4154.m_fontInfo)
  var i4173 = i4155[34]
  var i4172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.add(request.d('TMPro.TMP_Glyph', i4173[i + 0]));
  }
  i4154.m_glyphInfoList = i4172
  i4154.m_KerningTable = request.d('TMPro.KerningTable', i4155[35], i4154.m_KerningTable)
  var i4175 = i4155[36]
  var i4174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4175.length; i += 2) {
  request.r(i4175[i + 0], i4175[i + 1], 1, i4174, '')
  }
  i4154.fallbackFontAssets = i4174
  i4154.m_Version = i4155[37]
  i4154.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4155[38], i4154.m_FaceInfo)
  request.r(i4155[39], i4155[40], 0, i4154, 'm_Material')
  return i4154
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4176 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4177 = data
  i4176.sourceFontFileName = i4177[0]
  i4176.sourceFontFileGUID = i4177[1]
  i4176.faceIndex = i4177[2]
  i4176.pointSizeSamplingMode = i4177[3]
  i4176.pointSize = i4177[4]
  i4176.padding = i4177[5]
  i4176.paddingMode = i4177[6]
  i4176.packingMode = i4177[7]
  i4176.atlasWidth = i4177[8]
  i4176.atlasHeight = i4177[9]
  i4176.characterSetSelectionMode = i4177[10]
  i4176.characterSequence = i4177[11]
  i4176.referencedFontAssetGUID = i4177[12]
  i4176.referencedTextAssetGUID = i4177[13]
  i4176.fontStyle = i4177[14]
  i4176.fontStyleModifier = i4177[15]
  i4176.renderMode = i4177[16]
  i4176.includeFontFeatures = !!i4177[17]
  return i4176
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4180 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4181 = data
  i4180.m_Index = i4181[0]
  i4180.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4181[1], i4180.m_Metrics)
  i4180.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4181[2], i4180.m_GlyphRect)
  i4180.m_Scale = i4181[3]
  i4180.m_AtlasIndex = i4181[4]
  i4180.m_ClassDefinitionType = i4181[5]
  return i4180
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4182 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4183 = data
  i4182.m_Width = i4183[0]
  i4182.m_Height = i4183[1]
  i4182.m_HorizontalBearingX = i4183[2]
  i4182.m_HorizontalBearingY = i4183[3]
  i4182.m_HorizontalAdvance = i4183[4]
  return i4182
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4184 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4185 = data
  i4184.m_X = i4185[0]
  i4184.m_Y = i4185[1]
  i4184.m_Width = i4185[2]
  i4184.m_Height = i4185[3]
  return i4184
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4188 = root || request.c( 'TMPro.TMP_Character' )
  var i4189 = data
  i4188.m_ElementType = i4189[0]
  i4188.m_Unicode = i4189[1]
  i4188.m_GlyphIndex = i4189[2]
  i4188.m_Scale = i4189[3]
  return i4188
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4194 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4195 = data
  var i4197 = i4195[0]
  var i4196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.add(request.d('TMPro.MultipleSubstitutionRecord', i4197[i + 0]));
  }
  i4194.m_MultipleSubstitutionRecords = i4196
  var i4199 = i4195[1]
  var i4198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.add(request.d('TMPro.LigatureSubstitutionRecord', i4199[i + 0]));
  }
  i4194.m_LigatureSubstitutionRecords = i4198
  var i4201 = i4195[2]
  var i4200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4201[i + 0]));
  }
  i4194.m_GlyphPairAdjustmentRecords = i4200
  var i4203 = i4195[3]
  var i4202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4203[i + 0]));
  }
  i4194.m_MarkToBaseAdjustmentRecords = i4202
  var i4205 = i4195[4]
  var i4204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4205[i + 0]));
  }
  i4194.m_MarkToMarkAdjustmentRecords = i4204
  return i4194
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4208 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4209 = data
  i4208.m_TargetGlyphID = i4209[0]
  i4208.m_SubstituteGlyphIDs = i4209[1]
  return i4208
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4212 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4213 = data
  i4212.m_ComponentGlyphIDs = i4213[0]
  i4212.m_LigatureGlyphID = i4213[1]
  return i4212
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4216 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4217 = data
  i4216.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4217[0], i4216.m_FirstAdjustmentRecord)
  i4216.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4217[1], i4216.m_SecondAdjustmentRecord)
  i4216.m_FeatureLookupFlags = i4217[2]
  return i4216
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4218 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4219 = data
  i4218.m_GlyphIndex = i4219[0]
  i4218.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4219[1], i4218.m_GlyphValueRecord)
  return i4218
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4220 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4221 = data
  i4220.m_XPlacement = i4221[0]
  i4220.m_YPlacement = i4221[1]
  i4220.m_XAdvance = i4221[2]
  i4220.m_YAdvance = i4221[3]
  return i4220
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4224 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4225 = data
  i4224.m_BaseGlyphID = i4225[0]
  i4224.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4225[1], i4224.m_BaseGlyphAnchorPoint)
  i4224.m_MarkGlyphID = i4225[2]
  i4224.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4225[3], i4224.m_MarkPositionAdjustment)
  return i4224
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4226 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4227 = data
  i4226.m_XCoordinate = i4227[0]
  i4226.m_YCoordinate = i4227[1]
  return i4226
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4228 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4229 = data
  i4228.m_XPositionAdjustment = i4229[0]
  i4228.m_YPositionAdjustment = i4229[1]
  return i4228
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4232 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4233 = data
  i4232.m_BaseMarkGlyphID = i4233[0]
  i4232.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4233[1], i4232.m_BaseMarkGlyphAnchorPoint)
  i4232.m_CombiningMarkGlyphID = i4233[2]
  i4232.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4233[3], i4232.m_CombiningMarkPositionAdjustment)
  return i4232
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4238 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4239 = data
  request.r(i4239[0], i4239[1], 0, i4238, 'regularTypeface')
  request.r(i4239[2], i4239[3], 0, i4238, 'italicTypeface')
  return i4238
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4240 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4241 = data
  i4240.Name = i4241[0]
  i4240.PointSize = i4241[1]
  i4240.Scale = i4241[2]
  i4240.CharacterCount = i4241[3]
  i4240.LineHeight = i4241[4]
  i4240.Baseline = i4241[5]
  i4240.Ascender = i4241[6]
  i4240.CapHeight = i4241[7]
  i4240.Descender = i4241[8]
  i4240.CenterLine = i4241[9]
  i4240.SuperscriptOffset = i4241[10]
  i4240.SubscriptOffset = i4241[11]
  i4240.SubSize = i4241[12]
  i4240.Underline = i4241[13]
  i4240.UnderlineThickness = i4241[14]
  i4240.strikethrough = i4241[15]
  i4240.strikethroughThickness = i4241[16]
  i4240.TabWidth = i4241[17]
  i4240.Padding = i4241[18]
  i4240.AtlasWidth = i4241[19]
  i4240.AtlasHeight = i4241[20]
  return i4240
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4244 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4245 = data
  i4244.id = i4245[0]
  i4244.x = i4245[1]
  i4244.y = i4245[2]
  i4244.width = i4245[3]
  i4244.height = i4245[4]
  i4244.xOffset = i4245[5]
  i4244.yOffset = i4245[6]
  i4244.xAdvance = i4245[7]
  i4244.scale = i4245[8]
  return i4244
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4246 = root || request.c( 'TMPro.KerningTable' )
  var i4247 = data
  var i4249 = i4247[0]
  var i4248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.add(request.d('TMPro.KerningPair', i4249[i + 0]));
  }
  i4246.kerningPairs = i4248
  return i4246
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4252 = root || request.c( 'TMPro.KerningPair' )
  var i4253 = data
  i4252.xOffset = i4253[0]
  i4252.m_FirstGlyph = i4253[1]
  i4252.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4253[2], i4252.m_FirstGlyphAdjustments)
  i4252.m_SecondGlyph = i4253[3]
  i4252.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4253[4], i4252.m_SecondGlyphAdjustments)
  i4252.m_IgnoreSpacingAdjustments = !!i4253[5]
  return i4252
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4254 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4255 = data
  i4254.m_FaceIndex = i4255[0]
  i4254.m_FamilyName = i4255[1]
  i4254.m_StyleName = i4255[2]
  i4254.m_PointSize = i4255[3]
  i4254.m_Scale = i4255[4]
  i4254.m_UnitsPerEM = i4255[5]
  i4254.m_LineHeight = i4255[6]
  i4254.m_AscentLine = i4255[7]
  i4254.m_CapLine = i4255[8]
  i4254.m_MeanLine = i4255[9]
  i4254.m_Baseline = i4255[10]
  i4254.m_DescentLine = i4255[11]
  i4254.m_SuperscriptOffset = i4255[12]
  i4254.m_SuperscriptSize = i4255[13]
  i4254.m_SubscriptOffset = i4255[14]
  i4254.m_SubscriptSize = i4255[15]
  i4254.m_UnderlineOffset = i4255[16]
  i4254.m_UnderlineThickness = i4255[17]
  i4254.m_StrikethroughOffset = i4255[18]
  i4254.m_StrikethroughThickness = i4255[19]
  i4254.m_TabWidth = i4255[20]
  return i4254
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i4256 = root || request.c( 'PlayerSO' )
  var i4257 = data
  i4256.maxSpeed = i4257[0]
  i4256.jumpImpulse = i4257[1]
  return i4256
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i4258 = root || request.c( 'FindMonsterDatabase' )
  var i4259 = data
  var i4261 = i4259[0]
  var i4260 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i4261.length; i += 2) {
  request.r(i4261[i + 0], i4261[i + 1], 1, i4260, '')
  }
  i4258.database = i4260
  return i4258
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i4262 = root || request.c( 'MonsterSO' )
  var i4263 = data
  i4262.id = i4263[0]
  i4262.displayName = i4263[1]
  request.r(i4263[2], i4263[3], 0, i4262, 'icon')
  request.r(i4263[4], i4263[5], 0, i4262, 'prefab')
  return i4262
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4264 = root || request.c( 'TMPro.TMP_Settings' )
  var i4265 = data
  i4264.assetVersion = i4265[0]
  i4264.m_TextWrappingMode = i4265[1]
  i4264.m_enableKerning = !!i4265[2]
  var i4267 = i4265[3]
  var i4266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.add(i4267[i + 0]);
  }
  i4264.m_ActiveFontFeatures = i4266
  i4264.m_enableExtraPadding = !!i4265[4]
  i4264.m_enableTintAllSprites = !!i4265[5]
  i4264.m_enableParseEscapeCharacters = !!i4265[6]
  i4264.m_EnableRaycastTarget = !!i4265[7]
  i4264.m_GetFontFeaturesAtRuntime = !!i4265[8]
  i4264.m_missingGlyphCharacter = i4265[9]
  i4264.m_ClearDynamicDataOnBuild = !!i4265[10]
  i4264.m_warningsDisabled = !!i4265[11]
  request.r(i4265[12], i4265[13], 0, i4264, 'm_defaultFontAsset')
  i4264.m_defaultFontAssetPath = i4265[14]
  i4264.m_defaultFontSize = i4265[15]
  i4264.m_defaultAutoSizeMinRatio = i4265[16]
  i4264.m_defaultAutoSizeMaxRatio = i4265[17]
  i4264.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4265[18], i4265[19] )
  i4264.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4265[20], i4265[21] )
  i4264.m_autoSizeTextContainer = !!i4265[22]
  i4264.m_IsTextObjectScaleStatic = !!i4265[23]
  var i4269 = i4265[24]
  var i4268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4269.length; i += 2) {
  request.r(i4269[i + 0], i4269[i + 1], 1, i4268, '')
  }
  i4264.m_fallbackFontAssets = i4268
  i4264.m_matchMaterialPreset = !!i4265[25]
  i4264.m_HideSubTextObjects = !!i4265[26]
  request.r(i4265[27], i4265[28], 0, i4264, 'm_defaultSpriteAsset')
  i4264.m_defaultSpriteAssetPath = i4265[29]
  i4264.m_enableEmojiSupport = !!i4265[30]
  i4264.m_MissingCharacterSpriteUnicode = i4265[31]
  var i4271 = i4265[32]
  var i4270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4271.length; i += 2) {
  request.r(i4271[i + 0], i4271[i + 1], 1, i4270, '')
  }
  i4264.m_EmojiFallbackTextAssets = i4270
  i4264.m_defaultColorGradientPresetsPath = i4265[33]
  request.r(i4265[34], i4265[35], 0, i4264, 'm_defaultStyleSheet')
  i4264.m_StyleSheetsResourcePath = i4265[36]
  request.r(i4265[37], i4265[38], 0, i4264, 'm_leadingCharacters')
  request.r(i4265[39], i4265[40], 0, i4264, 'm_followingCharacters')
  i4264.m_UseModernHangulLineBreakingRules = !!i4265[41]
  return i4264
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4274 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4275 = data
  request.r(i4275[0], i4275[1], 0, i4274, 'spriteSheet')
  var i4277 = i4275[2]
  var i4276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4277.length; i += 1) {
    i4276.add(request.d('TMPro.TMP_Sprite', i4277[i + 0]));
  }
  i4274.spriteInfoList = i4276
  var i4279 = i4275[3]
  var i4278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4279.length; i += 2) {
  request.r(i4279[i + 0], i4279[i + 1], 1, i4278, '')
  }
  i4274.fallbackSpriteAssets = i4278
  var i4281 = i4275[4]
  var i4280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.add(request.d('TMPro.TMP_SpriteCharacter', i4281[i + 0]));
  }
  i4274.m_SpriteCharacterTable = i4280
  var i4283 = i4275[5]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4283.length; i += 1) {
    i4282.add(request.d('TMPro.TMP_SpriteGlyph', i4283[i + 0]));
  }
  i4274.m_GlyphTable = i4282
  i4274.m_Version = i4275[6]
  i4274.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4275[7], i4274.m_FaceInfo)
  request.r(i4275[8], i4275[9], 0, i4274, 'm_Material')
  return i4274
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4286 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4287 = data
  i4286.name = i4287[0]
  i4286.hashCode = i4287[1]
  i4286.unicode = i4287[2]
  i4286.pivot = new pc.Vec2( i4287[3], i4287[4] )
  request.r(i4287[5], i4287[6], 0, i4286, 'sprite')
  i4286.id = i4287[7]
  i4286.x = i4287[8]
  i4286.y = i4287[9]
  i4286.width = i4287[10]
  i4286.height = i4287[11]
  i4286.xOffset = i4287[12]
  i4286.yOffset = i4287[13]
  i4286.xAdvance = i4287[14]
  i4286.scale = i4287[15]
  return i4286
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4292 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4293 = data
  i4292.m_Name = i4293[0]
  i4292.m_ElementType = i4293[1]
  i4292.m_Unicode = i4293[2]
  i4292.m_GlyphIndex = i4293[3]
  i4292.m_Scale = i4293[4]
  return i4292
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4296 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4297 = data
  request.r(i4297[0], i4297[1], 0, i4296, 'sprite')
  i4296.m_Index = i4297[2]
  i4296.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4297[3], i4296.m_Metrics)
  i4296.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4297[4], i4296.m_GlyphRect)
  i4296.m_Scale = i4297[5]
  i4296.m_AtlasIndex = i4297[6]
  i4296.m_ClassDefinitionType = i4297[7]
  return i4296
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4298 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4299 = data
  var i4301 = i4299[0]
  var i4300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4301.length; i += 1) {
    i4300.add(request.d('TMPro.TMP_Style', i4301[i + 0]));
  }
  i4298.m_StyleList = i4300
  return i4298
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4304 = root || request.c( 'TMPro.TMP_Style' )
  var i4305 = data
  i4304.m_Name = i4305[0]
  i4304.m_HashCode = i4305[1]
  i4304.m_OpeningDefinition = i4305[2]
  i4304.m_ClosingDefinition = i4305[3]
  i4304.m_OpeningTagArray = i4305[4]
  i4304.m_ClosingTagArray = i4305[5]
  return i4304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4307 = data
  var i4309 = i4307[0]
  var i4308 = []
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4309[i + 0]) );
  }
  i4306.files = i4308
  i4306.componentToPrefabIds = i4307[1]
  return i4306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4313 = data
  i4312.path = i4313[0]
  request.r(i4313[1], i4313[2], 0, i4312, 'unityObject')
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4315 = data
  var i4317 = i4315[0]
  var i4316 = []
  for(var i = 0; i < i4317.length; i += 1) {
    i4316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4317[i + 0]) );
  }
  i4314.scriptsExecutionOrder = i4316
  var i4319 = i4315[1]
  var i4318 = []
  for(var i = 0; i < i4319.length; i += 1) {
    i4318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4319[i + 0]) );
  }
  i4314.sortingLayers = i4318
  var i4321 = i4315[2]
  var i4320 = []
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4321[i + 0]) );
  }
  i4314.cullingLayers = i4320
  i4314.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4315[3], i4314.timeSettings)
  i4314.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4315[4], i4314.physicsSettings)
  i4314.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4315[5], i4314.physics2DSettings)
  i4314.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4315[6], i4314.qualitySettings)
  i4314.enableRealtimeShadows = !!i4315[7]
  i4314.enableAutoInstancing = !!i4315[8]
  i4314.enableStaticBatching = !!i4315[9]
  i4314.enableDynamicBatching = !!i4315[10]
  i4314.usePreservativeDynamicBatching = !!i4315[11]
  i4314.lightmapEncodingQuality = i4315[12]
  i4314.desiredColorSpace = i4315[13]
  var i4323 = i4315[14]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( i4323[i + 0] );
  }
  i4314.allTags = i4322
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4327 = data
  i4326.name = i4327[0]
  i4326.value = i4327[1]
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4331 = data
  i4330.id = i4331[0]
  i4330.name = i4331[1]
  i4330.value = i4331[2]
  return i4330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4335 = data
  i4334.id = i4335[0]
  i4334.name = i4335[1]
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4337 = data
  i4336.fixedDeltaTime = i4337[0]
  i4336.maximumDeltaTime = i4337[1]
  i4336.timeScale = i4337[2]
  i4336.maximumParticleTimestep = i4337[3]
  return i4336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4339 = data
  i4338.gravity = new pc.Vec3( i4339[0], i4339[1], i4339[2] )
  i4338.defaultSolverIterations = i4339[3]
  i4338.bounceThreshold = i4339[4]
  i4338.autoSyncTransforms = !!i4339[5]
  i4338.autoSimulation = !!i4339[6]
  var i4341 = i4339[7]
  var i4340 = []
  for(var i = 0; i < i4341.length; i += 1) {
    i4340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4341[i + 0]) );
  }
  i4338.collisionMatrix = i4340
  return i4338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4345 = data
  i4344.enabled = !!i4345[0]
  i4344.layerId = i4345[1]
  i4344.otherLayerId = i4345[2]
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4347 = data
  request.r(i4347[0], i4347[1], 0, i4346, 'material')
  i4346.gravity = new pc.Vec2( i4347[2], i4347[3] )
  i4346.positionIterations = i4347[4]
  i4346.velocityIterations = i4347[5]
  i4346.velocityThreshold = i4347[6]
  i4346.maxLinearCorrection = i4347[7]
  i4346.maxAngularCorrection = i4347[8]
  i4346.maxTranslationSpeed = i4347[9]
  i4346.maxRotationSpeed = i4347[10]
  i4346.baumgarteScale = i4347[11]
  i4346.baumgarteTOIScale = i4347[12]
  i4346.timeToSleep = i4347[13]
  i4346.linearSleepTolerance = i4347[14]
  i4346.angularSleepTolerance = i4347[15]
  i4346.defaultContactOffset = i4347[16]
  i4346.autoSimulation = !!i4347[17]
  i4346.queriesHitTriggers = !!i4347[18]
  i4346.queriesStartInColliders = !!i4347[19]
  i4346.callbacksOnDisable = !!i4347[20]
  i4346.reuseCollisionCallbacks = !!i4347[21]
  i4346.autoSyncTransforms = !!i4347[22]
  var i4349 = i4347[23]
  var i4348 = []
  for(var i = 0; i < i4349.length; i += 1) {
    i4348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4349[i + 0]) );
  }
  i4346.collisionMatrix = i4348
  return i4346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4353 = data
  i4352.enabled = !!i4353[0]
  i4352.layerId = i4353[1]
  i4352.otherLayerId = i4353[2]
  return i4352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4355 = data
  var i4357 = i4355[0]
  var i4356 = []
  for(var i = 0; i < i4357.length; i += 1) {
    i4356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4357[i + 0]) );
  }
  i4354.qualityLevels = i4356
  var i4359 = i4355[1]
  var i4358 = []
  for(var i = 0; i < i4359.length; i += 1) {
    i4358.push( i4359[i + 0] );
  }
  i4354.names = i4358
  i4354.shadows = i4355[2]
  i4354.anisotropicFiltering = i4355[3]
  i4354.antiAliasing = i4355[4]
  i4354.lodBias = i4355[5]
  i4354.shadowCascades = i4355[6]
  i4354.shadowDistance = i4355[7]
  i4354.shadowmaskMode = i4355[8]
  i4354.shadowProjection = i4355[9]
  i4354.shadowResolution = i4355[10]
  i4354.softParticles = !!i4355[11]
  i4354.softVegetation = !!i4355[12]
  i4354.activeColorSpace = i4355[13]
  i4354.desiredColorSpace = i4355[14]
  i4354.masterTextureLimit = i4355[15]
  i4354.maxQueuedFrames = i4355[16]
  i4354.particleRaycastBudget = i4355[17]
  i4354.pixelLightCount = i4355[18]
  i4354.realtimeReflectionProbes = !!i4355[19]
  i4354.shadowCascade2Split = i4355[20]
  i4354.shadowCascade4Split = new pc.Vec3( i4355[21], i4355[22], i4355[23] )
  i4354.streamingMipmapsActive = !!i4355[24]
  i4354.vSyncCount = i4355[25]
  i4354.asyncUploadBufferSize = i4355[26]
  i4354.asyncUploadTimeSlice = i4355[27]
  i4354.billboardsFaceCameraPosition = !!i4355[28]
  i4354.shadowNearPlaneOffset = i4355[29]
  i4354.streamingMipmapsMemoryBudget = i4355[30]
  i4354.maximumLODLevel = i4355[31]
  i4354.streamingMipmapsAddAllCameras = !!i4355[32]
  i4354.streamingMipmapsMaxLevelReduction = i4355[33]
  i4354.streamingMipmapsRenderersPerFrame = i4355[34]
  i4354.resolutionScalingFixedDPIFactor = i4355[35]
  i4354.streamingMipmapsMaxFileIORequests = i4355[36]
  i4354.currentQualityLevel = i4355[37]
  return i4354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4365 = data
  i4364.weight = i4365[0]
  i4364.vertices = i4365[1]
  i4364.normals = i4365[2]
  i4364.tangents = i4365[3]
  return i4364
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4366 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4367 = data
  i4366.xPlacement = i4367[0]
  i4366.yPlacement = i4367[1]
  i4366.xAdvance = i4367[2]
  i4366.yAdvance = i4367[3]
  return i4366
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

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.buildID = "5f32524f-fd34-4f41-8309-5912a4920fe3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

