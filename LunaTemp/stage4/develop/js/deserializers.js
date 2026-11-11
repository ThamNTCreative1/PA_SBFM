var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointSpring' )
  var i757 = data
  i756.spring = i757[0]
  i756.damper = i757[1]
  i756.targetPosition = i757[2]
  return i756
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointMotor' )
  var i759 = data
  i758.m_TargetVelocity = i759[0]
  i758.m_Force = i759[1]
  i758.m_FreeSpin = i759[2]
  return i758
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointLimits' )
  var i761 = data
  i760.m_Min = i761[0]
  i760.m_Max = i761[1]
  i760.m_Bounciness = i761[2]
  i760.m_BounceMinVelocity = i761[3]
  i760.m_ContactDistance = i761[4]
  i760.minBounce = i761[5]
  i760.maxBounce = i761[6]
  return i760
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointDrive' )
  var i763 = data
  i762.m_PositionSpring = i763[0]
  i762.m_PositionDamper = i763[1]
  i762.m_MaximumForce = i763[2]
  i762.m_UseAcceleration = i763[3]
  return i762
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i765 = data
  i764.m_Spring = i765[0]
  i764.m_Damper = i765[1]
  return i764
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i767 = data
  i766.m_Limit = i767[0]
  i766.m_Bounciness = i767[1]
  i766.m_ContactDistance = i767[2]
  return i766
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i769 = data
  i768.m_ExtremumSlip = i769[0]
  i768.m_ExtremumValue = i769[1]
  i768.m_AsymptoteSlip = i769[2]
  i768.m_AsymptoteValue = i769[3]
  i768.m_Stiffness = i769[4]
  return i768
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i771 = data
  i770.m_LowerAngle = i771[0]
  i770.m_UpperAngle = i771[1]
  return i770
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i773 = data
  i772.m_MotorSpeed = i773[0]
  i772.m_MaximumMotorTorque = i773[1]
  return i772
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i775 = data
  i774.m_DampingRatio = i775[0]
  i774.m_Frequency = i775[1]
  i774.m_Angle = i775[2]
  return i774
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i777 = data
  i776.m_LowerTranslation = i777[0]
  i776.m_UpperTranslation = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i779 = data
  i778.name = i779[0]
  i778.halfPrecision = !!i779[1]
  i778.useSimplification = !!i779[2]
  i778.useUInt32IndexFormat = !!i779[3]
  i778.vertexCount = i779[4]
  i778.aabb = i779[5]
  var i781 = i779[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( !!i781[i + 0] );
  }
  i778.streams = i780
  i778.vertices = i779[7]
  var i783 = i779[8]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i783[i + 0]) );
  }
  i778.subMeshes = i782
  var i785 = i779[9]
  var i784 = []
  for(var i = 0; i < i785.length; i += 16) {
    i784.push( new pc.Mat4().setData(i785[i + 0], i785[i + 1], i785[i + 2], i785[i + 3],  i785[i + 4], i785[i + 5], i785[i + 6], i785[i + 7],  i785[i + 8], i785[i + 9], i785[i + 10], i785[i + 11],  i785[i + 12], i785[i + 13], i785[i + 14], i785[i + 15]) );
  }
  i778.bindposes = i784
  var i787 = i779[10]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i787[i + 0]) );
  }
  i778.blendShapes = i786
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i793 = data
  i792.triangles = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i799 = data
  i798.name = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i801[i + 0]) );
  }
  i798.frames = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i803 = data
  i802.name = i803[0]
  i802.width = i803[1]
  i802.height = i803[2]
  i802.mipmapCount = i803[3]
  i802.anisoLevel = i803[4]
  i802.filterMode = i803[5]
  i802.hdr = !!i803[6]
  i802.format = i803[7]
  i802.wrapMode = i803[8]
  i802.alphaIsTransparency = !!i803[9]
  i802.alphaSource = i803[10]
  i802.graphicsFormat = i803[11]
  i802.sRGBTexture = !!i803[12]
  i802.desiredColorSpace = i803[13]
  i802.wrapU = i803[14]
  i802.wrapV = i803[15]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i804 = root || new pc.UnityMaterial()
  var i805 = data
  i804.name = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'shader')
  i804.renderQueue = i805[3]
  i804.enableInstancing = !!i805[4]
  var i807 = i805[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i807[i + 0]) );
  }
  i804.floatParameters = i806
  var i809 = i805[6]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i809[i + 0]) );
  }
  i804.colorParameters = i808
  var i811 = i805[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i811[i + 0]) );
  }
  i804.vectorParameters = i810
  var i813 = i805[8]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i813[i + 0]) );
  }
  i804.textureParameters = i812
  var i815 = i805[9]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i815[i + 0]) );
  }
  i804.materialFlags = i814
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i823 = data
  i822.name = i823[0]
  i822.value = new pc.Color(i823[1], i823[2], i823[3], i823[4])
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i827 = data
  i826.name = i827[0]
  i826.value = new pc.Vec4( i827[1], i827[2], i827[3], i827[4] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i831 = data
  i830.name = i831[0]
  request.r(i831[1], i831[2], 0, i830, 'value')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i835 = data
  i834.name = i835[0]
  i834.enabled = !!i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i837 = data
  i836.position = new pc.Vec3( i837[0], i837[1], i837[2] )
  i836.scale = new pc.Vec3( i837[3], i837[4], i837[5] )
  i836.rotation = new pc.Quat(i837[6], i837[7], i837[8], i837[9])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'sharedMesh')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'additionalVertexStreams')
  i840.enabled = !!i841[2]
  request.r(i841[3], i841[4], 0, i840, 'sharedMaterial')
  var i843 = i841[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sharedMaterials = i842
  i840.receiveShadows = !!i841[6]
  i840.shadowCastingMode = i841[7]
  i840.sortingLayerID = i841[8]
  i840.sortingOrder = i841[9]
  i840.lightmapIndex = i841[10]
  i840.lightmapSceneIndex = i841[11]
  i840.lightmapScaleOffset = new pc.Vec4( i841[12], i841[13], i841[14], i841[15] )
  i840.lightProbeUsage = i841[16]
  i840.reflectionProbeUsage = i841[17]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'sharedMesh')
  i846.convex = !!i847[2]
  i846.enabled = !!i847[3]
  i846.isTrigger = !!i847[4]
  request.r(i847[5], i847[6], 0, i846, 'material')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i849 = data
  i848.name = i849[0]
  i848.tagId = i849[1]
  i848.enabled = !!i849[2]
  i848.isStatic = !!i849[3]
  i848.layer = i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i851 = data
  i850.center = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.radius = i851[3]
  i850.height = i851[4]
  i850.direction = i851[5]
  i850.enabled = !!i851[6]
  i850.isTrigger = !!i851[7]
  request.r(i851[8], i851[9], 0, i850, 'material')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i853 = data
  i852.center = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.size = new pc.Vec3( i853[3], i853[4], i853[5] )
  i852.enabled = !!i853[6]
  i852.isTrigger = !!i853[7]
  request.r(i853[8], i853[9], 0, i852, 'material')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i855 = data
  i854.center = new pc.Vec3( i855[0], i855[1], i855[2] )
  i854.radius = i855[3]
  i854.enabled = !!i855[4]
  i854.isTrigger = !!i855[5]
  request.r(i855[6], i855[7], 0, i854, 'material')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i857 = data
  i856.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i857[0], i856.main)
  i856.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i857[1], i856.colorBySpeed)
  i856.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i857[2], i856.colorOverLifetime)
  i856.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i857[3], i856.emission)
  i856.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i857[4], i856.rotationBySpeed)
  i856.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i857[5], i856.rotationOverLifetime)
  i856.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i857[6], i856.shape)
  i856.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i857[7], i856.sizeBySpeed)
  i856.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i857[8], i856.sizeOverLifetime)
  i856.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i857[9], i856.textureSheetAnimation)
  i856.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i857[10], i856.velocityOverLifetime)
  i856.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i857[11], i856.noise)
  i856.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i857[12], i856.inheritVelocity)
  i856.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i857[13], i856.forceOverLifetime)
  i856.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i857[14], i856.limitVelocityOverLifetime)
  i856.useAutoRandomSeed = !!i857[15]
  i856.randomSeed = i857[16]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemMain()
  var i859 = data
  i858.duration = i859[0]
  i858.loop = !!i859[1]
  i858.prewarm = !!i859[2]
  i858.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.startDelay)
  i858.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.startLifetime)
  i858.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[5], i858.startSpeed)
  i858.startSize3D = !!i859[6]
  i858.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[7], i858.startSizeX)
  i858.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.startSizeY)
  i858.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[9], i858.startSizeZ)
  i858.startRotation3D = !!i859[10]
  i858.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[11], i858.startRotationX)
  i858.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[12], i858.startRotationY)
  i858.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[13], i858.startRotationZ)
  i858.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[14], i858.startColor)
  i858.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[15], i858.gravityModifier)
  i858.simulationSpace = i859[16]
  request.r(i859[17], i859[18], 0, i858, 'customSimulationSpace')
  i858.simulationSpeed = i859[19]
  i858.useUnscaledTime = !!i859[20]
  i858.scalingMode = i859[21]
  i858.playOnAwake = !!i859[22]
  i858.maxParticles = i859[23]
  i858.emitterVelocityMode = i859[24]
  i858.stopAction = i859[25]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i860 = root || new pc.MinMaxCurve()
  var i861 = data
  i860.mode = i861[0]
  i860.curveMin = new pc.AnimationCurve( { keys_flow: i861[1] } )
  i860.curveMax = new pc.AnimationCurve( { keys_flow: i861[2] } )
  i860.curveMultiplier = i861[3]
  i860.constantMin = i861[4]
  i860.constantMax = i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i862 = root || new pc.MinMaxGradient()
  var i863 = data
  i862.mode = i863[0]
  i862.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[1], i862.gradientMin)
  i862.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[2], i862.gradientMax)
  i862.colorMin = new pc.Color(i863[3], i863[4], i863[5], i863[6])
  i862.colorMax = new pc.Color(i863[7], i863[8], i863[9], i863[10])
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i865 = data
  i864.mode = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i867[i + 0]) );
  }
  i864.colorKeys = i866
  var i869 = i865[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i869[i + 0]) );
  }
  i864.alphaKeys = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  i870.range = new pc.Vec2( i871[2], i871[3] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i875 = data
  i874.color = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.time = i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i879 = data
  i878.alpha = i879[0]
  i878.time = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemColorOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i881[1], i880.color)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemEmitter()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.rateOverTime)
  i882.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.rateOverDistance)
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i885[i + 0]) );
  }
  i882.bursts = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemBurst()
  var i889 = data
  i888.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[0], i888.count)
  i888.cycleCount = i889[1]
  i888.minCount = i889[2]
  i888.maxCount = i889[3]
  i888.repeatInterval = i889[4]
  i888.time = i889[5]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemRotationBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemRotationOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemShape()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.shapeType = i895[1]
  i894.randomDirectionAmount = i895[2]
  i894.sphericalDirectionAmount = i895[3]
  i894.randomPositionAmount = i895[4]
  i894.alignToDirection = !!i895[5]
  i894.radius = i895[6]
  i894.radiusMode = i895[7]
  i894.radiusSpread = i895[8]
  i894.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[9], i894.radiusSpeed)
  i894.radiusThickness = i895[10]
  i894.angle = i895[11]
  i894.length = i895[12]
  i894.boxThickness = new pc.Vec3( i895[13], i895[14], i895[15] )
  i894.meshShapeType = i895[16]
  request.r(i895[17], i895[18], 0, i894, 'mesh')
  request.r(i895[19], i895[20], 0, i894, 'meshRenderer')
  request.r(i895[21], i895[22], 0, i894, 'skinnedMeshRenderer')
  i894.useMeshMaterialIndex = !!i895[23]
  i894.meshMaterialIndex = i895[24]
  i894.useMeshColors = !!i895[25]
  i894.normalOffset = i895[26]
  i894.arc = i895[27]
  i894.arcMode = i895[28]
  i894.arcSpread = i895[29]
  i894.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[30], i894.arcSpeed)
  i894.donutRadius = i895[31]
  i894.position = new pc.Vec3( i895[32], i895[33], i895[34] )
  i894.rotation = new pc.Vec3( i895[35], i895[36], i895[37] )
  i894.scale = new pc.Vec3( i895[38], i895[39], i895[40] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemSizeBySpeed()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.separateAxes = !!i897[4]
  i896.range = new pc.Vec2( i897[5], i897[6] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemSizeOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.separateAxes = !!i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.mode = i901[1]
  i900.animation = i901[2]
  i900.numTilesX = i901[3]
  i900.numTilesY = i901[4]
  i900.useRandomRow = !!i901[5]
  i900.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[6], i900.frameOverTime)
  i900.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[7], i900.startFrame)
  i900.cycleCount = i901[8]
  i900.rowIndex = i901[9]
  i900.flipU = i901[10]
  i900.flipV = i901[11]
  i900.spriteCount = i901[12]
  var i903 = i901[13]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sprites = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.radial)
  i906.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[5], i906.speedModifier)
  i906.space = i907[6]
  i906.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[7], i906.orbitalX)
  i906.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.orbitalY)
  i906.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[9], i906.orbitalZ)
  i906.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[10], i906.orbitalOffsetX)
  i906.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[11], i906.orbitalOffsetY)
  i906.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[12], i906.orbitalOffsetZ)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemNoise()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.separateAxes = !!i909[1]
  i908.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.strengthX)
  i908.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.strengthY)
  i908.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.strengthZ)
  i908.frequency = i909[5]
  i908.damping = !!i909[6]
  i908.octaveCount = i909[7]
  i908.octaveMultiplier = i909[8]
  i908.octaveScale = i909[9]
  i908.quality = i909[10]
  i908.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.scrollSpeed)
  i908.scrollSpeedMultiplier = i909[12]
  i908.remapEnabled = !!i909[13]
  i908.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[14], i908.remapX)
  i908.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[15], i908.remapY)
  i908.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[16], i908.remapZ)
  i908.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[17], i908.positionAmount)
  i908.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[18], i908.rotationAmount)
  i908.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[19], i908.sizeAmount)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemInheritVelocity()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.mode = i911[1]
  i910.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.curve)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemForceOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.space = i913[4]
  i912.randomized = !!i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.limit)
  i914.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.limitX)
  i914.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.limitY)
  i914.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[4], i914.limitZ)
  i914.dampen = i915[5]
  i914.separateAxes = !!i915[6]
  i914.space = i915[7]
  i914.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[8], i914.drag)
  i914.multiplyDragByParticleSize = !!i915[9]
  i914.multiplyDragByParticleVelocity = !!i915[10]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'mesh')
  i916.meshCount = i917[2]
  i916.activeVertexStreamsCount = i917[3]
  i916.alignment = i917[4]
  i916.renderMode = i917[5]
  i916.sortMode = i917[6]
  i916.lengthScale = i917[7]
  i916.velocityScale = i917[8]
  i916.cameraVelocityScale = i917[9]
  i916.normalDirection = i917[10]
  i916.sortingFudge = i917[11]
  i916.minParticleSize = i917[12]
  i916.maxParticleSize = i917[13]
  i916.pivot = new pc.Vec3( i917[14], i917[15], i917[16] )
  request.r(i917[17], i917[18], 0, i916, 'trailMaterial')
  i916.applyActiveColorSpace = !!i917[19]
  i916.enabled = !!i917[20]
  request.r(i917[21], i917[22], 0, i916, 'sharedMaterial')
  var i919 = i917[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sharedMaterials = i918
  i916.receiveShadows = !!i917[24]
  i916.shadowCastingMode = i917[25]
  i916.sortingLayerID = i917[26]
  i916.sortingOrder = i917[27]
  i916.lightmapIndex = i917[28]
  i916.lightmapSceneIndex = i917[29]
  i916.lightmapScaleOffset = new pc.Vec4( i917[30], i917[31], i917[32], i917[33] )
  i916.lightProbeUsage = i917[34]
  i916.reflectionProbeUsage = i917[35]
  return i916
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i920 = root || request.c( 'FindMonsterManager' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'database')
  var i923 = i921[2]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.listRespawn = i922
  request.r(i921[3], i921[4], 0, i920, 'playerTransform')
  request.r(i921[5], i921[6], 0, i920, 'targetTutorial')
  request.r(i921[7], i921[8], 0, i920, 'arrowTut')
  i920.guideToNext = !!i921[9]
  var i925 = i921[10]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 1, i924, '')
  }
  i920.monsters = i924
  i920.playerTouchSize = new pc.Vec3( i921[11], i921[12], i921[13] )
  request.r(i921[14], i921[15], 0, i920, 'hiddenMonsterPanel')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i931 = data
  i930.textureMode = i931[0]
  i930.alignment = i931[1]
  i930.widthCurve = new pc.AnimationCurve( { keys_flow: i931[2] } )
  i930.colorGradient = i931[3] ? new pc.ColorGradient(i931[3][0], i931[3][1], i931[3][2]) : null
  var i933 = i931[4]
  var i932 = []
  for(var i = 0; i < i933.length; i += 3) {
    i932.push( new pc.Vec3( i933[i + 0], i933[i + 1], i933[i + 2] ) );
  }
  i930.positions = i932
  i930.positionCount = i931[5]
  i930.widthMultiplier = i931[6]
  i930.startWidth = i931[7]
  i930.endWidth = i931[8]
  i930.numCornerVertices = i931[9]
  i930.numCapVertices = i931[10]
  i930.useWorldSpace = !!i931[11]
  i930.loop = !!i931[12]
  i930.startColor = new pc.Color(i931[13], i931[14], i931[15], i931[16])
  i930.endColor = new pc.Color(i931[17], i931[18], i931[19], i931[20])
  i930.generateLightingData = !!i931[21]
  i930.enabled = !!i931[22]
  request.r(i931[23], i931[24], 0, i930, 'sharedMaterial')
  var i935 = i931[25]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i930.sharedMaterials = i934
  i930.receiveShadows = !!i931[26]
  i930.shadowCastingMode = i931[27]
  i930.sortingLayerID = i931[28]
  i930.sortingOrder = i931[29]
  i930.lightmapIndex = i931[30]
  i930.lightmapSceneIndex = i931[31]
  i930.lightmapScaleOffset = new pc.Vec4( i931[32], i931[33], i931[34], i931[35] )
  i930.lightProbeUsage = i931[36]
  i930.reflectionProbeUsage = i931[37]
  return i930
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i938 = root || request.c( 'TurtorialArrow' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'lineRenderer')
  i938.offset = new pc.Vec3( i939[2], i939[3], i939[4] )
  i938.planetSegments = i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'animatorController')
  request.r(i941[2], i941[3], 0, i940, 'avatar')
  i940.updateMode = i941[4]
  i940.hasTransformHierarchy = !!i941[5]
  i940.applyRootMotion = !!i941[6]
  var i943 = i941[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.humanBones = i942
  i940.enabled = !!i941[8]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i947 = data
  i946.pivot = new pc.Vec2( i947[0], i947[1] )
  i946.anchorMin = new pc.Vec2( i947[2], i947[3] )
  i946.anchorMax = new pc.Vec2( i947[4], i947[5] )
  i946.sizeDelta = new pc.Vec2( i947[6], i947[7] )
  i946.anchoredPosition3D = new pc.Vec3( i947[8], i947[9], i947[10] )
  i946.rotation = new pc.Quat(i947[11], i947[12], i947[13], i947[14])
  i946.scale = new pc.Vec3( i947[15], i947[16], i947[17] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i949 = data
  i948.planeDistance = i949[0]
  i948.referencePixelsPerUnit = i949[1]
  i948.isFallbackOverlay = !!i949[2]
  i948.renderMode = i949[3]
  i948.renderOrder = i949[4]
  i948.sortingLayerName = i949[5]
  i948.sortingOrder = i949[6]
  i948.scaleFactor = i949[7]
  request.r(i949[8], i949[9], 0, i948, 'worldCamera')
  i948.overrideSorting = !!i949[10]
  i948.pixelPerfect = !!i949[11]
  i948.targetDisplay = i949[12]
  i948.overridePixelPerfect = !!i949[13]
  i948.enabled = !!i949[14]
  return i948
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i951 = data
  i950.m_UiScaleMode = i951[0]
  i950.m_ReferencePixelsPerUnit = i951[1]
  i950.m_ScaleFactor = i951[2]
  i950.m_ReferenceResolution = new pc.Vec2( i951[3], i951[4] )
  i950.m_ScreenMatchMode = i951[5]
  i950.m_MatchWidthOrHeight = i951[6]
  i950.m_PhysicalUnit = i951[7]
  i950.m_FallbackScreenDPI = i951[8]
  i950.m_DefaultSpriteDPI = i951[9]
  i950.m_DynamicPixelsPerUnit = i951[10]
  i950.m_PresetInfoIsWorld = !!i951[11]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i953 = data
  i952.m_Alpha = i953[0]
  i952.m_Interactable = !!i953[1]
  i952.m_BlocksRaycasts = !!i953[2]
  i952.m_IgnoreParentGroups = !!i953[3]
  i952.enabled = !!i953[4]
  return i952
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i955 = data
  i954.m_IgnoreReversedGraphics = !!i955[0]
  i954.m_BlockingObjects = i955[1]
  i954.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i955[2] )
  return i954
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i956 = root || request.c( 'HiddenMonsterPanel' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'icon')
  request.r(i957[2], i957[3], 0, i956, 'nameText')
  request.r(i957[4], i957[5], 0, i956, 'rarityText')
  request.r(i957[6], i957[7], 0, i956, 'card')
  i956.openSound = request.d('FMAudio', i957[8], i956.openSound)
  i956.autoHide = i957[9]
  request.r(i957[10], i957[11], 0, i956, 'tutorFinger')
  request.r(i957[12], i957[13], 0, i956, 'popRoot')
  i956.popDuration = i957[14]
  return i956
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i958 = root || request.c( 'FMAudio' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'clip')
  i958.channel = i959[2]
  i958.volume = i959[3]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i961 = data
  i960.cullTransparentMesh = !!i961[0]
  return i960
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Image' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_Sprite')
  i962.m_Type = i963[2]
  i962.m_PreserveAspect = !!i963[3]
  i962.m_FillCenter = !!i963[4]
  i962.m_FillMethod = i963[5]
  i962.m_FillAmount = i963[6]
  i962.m_FillClockwise = !!i963[7]
  i962.m_FillOrigin = i963[8]
  i962.m_UseSpriteMesh = !!i963[9]
  i962.m_PixelsPerUnitMultiplier = i963[10]
  request.r(i963[11], i963[12], 0, i962, 'm_Material')
  i962.m_Maskable = !!i963[13]
  i962.m_Color = new pc.Color(i963[14], i963[15], i963[16], i963[17])
  i962.m_RaycastTarget = !!i963[18]
  i962.m_RaycastPadding = new pc.Vec4( i963[19], i963[20], i963[21], i963[22] )
  return i962
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i965 = data
  i964.m_hasFontAssetChanged = !!i965[0]
  request.r(i965[1], i965[2], 0, i964, 'm_baseMaterial')
  i964.m_maskOffset = new pc.Vec4( i965[3], i965[4], i965[5], i965[6] )
  i964.m_text = i965[7]
  i964.m_isRightToLeft = !!i965[8]
  request.r(i965[9], i965[10], 0, i964, 'm_fontAsset')
  request.r(i965[11], i965[12], 0, i964, 'm_sharedMaterial')
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.m_fontSharedMaterials = i966
  request.r(i965[14], i965[15], 0, i964, 'm_fontMaterial')
  var i969 = i965[16]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i964.m_fontMaterials = i968
  i964.m_fontColor32 = UnityEngine.Color32.ConstructColor(i965[17], i965[18], i965[19], i965[20])
  i964.m_fontColor = new pc.Color(i965[21], i965[22], i965[23], i965[24])
  i964.m_enableVertexGradient = !!i965[25]
  i964.m_colorMode = i965[26]
  i964.m_fontColorGradient = request.d('TMPro.VertexGradient', i965[27], i964.m_fontColorGradient)
  request.r(i965[28], i965[29], 0, i964, 'm_fontColorGradientPreset')
  request.r(i965[30], i965[31], 0, i964, 'm_spriteAsset')
  i964.m_tintAllSprites = !!i965[32]
  request.r(i965[33], i965[34], 0, i964, 'm_StyleSheet')
  i964.m_TextStyleHashCode = i965[35]
  i964.m_overrideHtmlColors = !!i965[36]
  i964.m_faceColor = UnityEngine.Color32.ConstructColor(i965[37], i965[38], i965[39], i965[40])
  i964.m_fontSize = i965[41]
  i964.m_fontSizeBase = i965[42]
  i964.m_fontWeight = i965[43]
  i964.m_enableAutoSizing = !!i965[44]
  i964.m_fontSizeMin = i965[45]
  i964.m_fontSizeMax = i965[46]
  i964.m_fontStyle = i965[47]
  i964.m_HorizontalAlignment = i965[48]
  i964.m_VerticalAlignment = i965[49]
  i964.m_textAlignment = i965[50]
  i964.m_characterSpacing = i965[51]
  i964.m_characterHorizontalScale = i965[52]
  i964.m_wordSpacing = i965[53]
  i964.m_lineSpacing = i965[54]
  i964.m_lineSpacingMax = i965[55]
  i964.m_paragraphSpacing = i965[56]
  i964.m_charWidthMaxAdj = i965[57]
  i964.m_TextWrappingMode = i965[58]
  i964.m_wordWrappingRatios = i965[59]
  i964.m_overflowMode = i965[60]
  request.r(i965[61], i965[62], 0, i964, 'm_linkedTextComponent')
  request.r(i965[63], i965[64], 0, i964, 'parentLinkedComponent')
  i964.m_enableKerning = !!i965[65]
  var i971 = i965[66]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(i971[i + 0]);
  }
  i964.m_ActiveFontFeatures = i970
  i964.m_enableExtraPadding = !!i965[67]
  i964.checkPaddingRequired = !!i965[68]
  i964.m_isRichText = !!i965[69]
  i964.m_parseCtrlCharacters = !!i965[70]
  i964.m_isOrthographic = !!i965[71]
  i964.m_isCullingEnabled = !!i965[72]
  i964.m_horizontalMapping = i965[73]
  i964.m_verticalMapping = i965[74]
  i964.m_uvLineOffset = i965[75]
  i964.m_geometrySortingOrder = i965[76]
  i964.m_IsTextObjectScaleStatic = !!i965[77]
  i964.m_VertexBufferAutoSizeReduction = !!i965[78]
  i964.m_useMaxVisibleDescender = !!i965[79]
  i964.m_pageToDisplay = i965[80]
  i964.m_margin = new pc.Vec4( i965[81], i965[82], i965[83], i965[84] )
  i964.m_isUsingLegacyAnimationComponent = !!i965[85]
  i964.m_isVolumetricText = !!i965[86]
  request.r(i965[87], i965[88], 0, i964, 'm_Material')
  i964.m_EmojiFallbackSupport = !!i965[89]
  i964.m_Maskable = !!i965[90]
  i964.m_Color = new pc.Color(i965[91], i965[92], i965[93], i965[94])
  i964.m_RaycastTarget = !!i965[95]
  i964.m_RaycastPadding = new pc.Vec4( i965[96], i965[97], i965[98], i965[99] )
  return i964
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.VertexGradient' )
  var i973 = data
  i972.topLeft = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  i972.topRight = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.bottomLeft = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  i972.bottomRight = new pc.Color(i973[12], i973[13], i973[14], i973[15])
  return i972
}

Deserializers["UIRays"] = function (request, data, root) {
  var i976 = root || request.c( 'UIRays' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.rays = i978
  i976.lifetime = i977[1]
  i976.rate = i977[2]
  i976.startScale = i977[3]
  i976.maxAlpha = i977[4]
  return i976
}

Deserializers["GameButton"] = function (request, data, root) {
  var i982 = root || request.c( 'GameButton' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'background')
  request.r(i983[2], i983[3], 0, i982, 'icon')
  request.r(i983[4], i983[5], 0, i982, 'title')
  i982.scale = new pc.Vec3( i983[6], i983[7], i983[8] )
  i982.pressAudio = request.d('FMAudio', i983[9], i982.pressAudio)
  i982.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i983[10], i982.m_OnClick)
  i982.m_Navigation = request.d('UnityEngine.UI.Navigation', i983[11], i982.m_Navigation)
  i982.m_Transition = i983[12]
  i982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i983[13], i982.m_Colors)
  i982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i983[14], i982.m_SpriteState)
  i982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i983[15], i982.m_AnimationTriggers)
  i982.m_Interactable = !!i983[16]
  request.r(i983[17], i983[18], 0, i982, 'm_TargetGraphic')
  return i982
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i985 = data
  i984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i985[0], i984.m_PersistentCalls)
  return i984
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('UnityEngine.Events.PersistentCall', i989[i + 0]));
  }
  i986.m_Calls = i988
  return i986
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'm_Target')
  i992.m_TargetAssemblyTypeName = i993[2]
  i992.m_MethodName = i993[3]
  i992.m_Mode = i993[4]
  i992.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i993[5], i992.m_Arguments)
  i992.m_CallState = i993[6]
  return i992
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'm_ObjectArgument')
  i994.m_ObjectArgumentAssemblyTypeName = i995[2]
  i994.m_IntArgument = i995[3]
  i994.m_FloatArgument = i995[4]
  i994.m_StringArgument = i995[5]
  i994.m_BoolArgument = !!i995[6]
  return i994
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i997 = data
  i996.m_Mode = i997[0]
  i996.m_WrapAround = !!i997[1]
  request.r(i997[2], i997[3], 0, i996, 'm_SelectOnUp')
  request.r(i997[4], i997[5], 0, i996, 'm_SelectOnDown')
  request.r(i997[6], i997[7], 0, i996, 'm_SelectOnLeft')
  request.r(i997[8], i997[9], 0, i996, 'm_SelectOnRight')
  return i996
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i999 = data
  i998.m_NormalColor = new pc.Color(i999[0], i999[1], i999[2], i999[3])
  i998.m_HighlightedColor = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.m_PressedColor = new pc.Color(i999[8], i999[9], i999[10], i999[11])
  i998.m_SelectedColor = new pc.Color(i999[12], i999[13], i999[14], i999[15])
  i998.m_DisabledColor = new pc.Color(i999[16], i999[17], i999[18], i999[19])
  i998.m_ColorMultiplier = i999[20]
  i998.m_FadeDuration = i999[21]
  return i998
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_HighlightedSprite')
  request.r(i1001[2], i1001[3], 0, i1000, 'm_PressedSprite')
  request.r(i1001[4], i1001[5], 0, i1000, 'm_SelectedSprite')
  request.r(i1001[6], i1001[7], 0, i1000, 'm_DisabledSprite')
  return i1000
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1003 = data
  i1002.m_NormalTrigger = i1003[0]
  i1002.m_HighlightedTrigger = i1003[1]
  i1002.m_PressedTrigger = i1003[2]
  i1002.m_SelectedTrigger = i1003[3]
  i1002.m_DisabledTrigger = i1003[4]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.atlasId = i1005[1]
  i1004.mipmapCount = i1005[2]
  i1004.hdr = !!i1005[3]
  i1004.size = i1005[4]
  i1004.anisoLevel = i1005[5]
  i1004.filterMode = i1005[6]
  var i1007 = i1005[7]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 4) {
    i1006.push( UnityEngine.Rect.MinMaxRect(i1007[i + 0], i1007[i + 1], i1007[i + 2], i1007[i + 3]) );
  }
  i1004.rects = i1006
  i1004.wrapU = i1005[8]
  i1004.wrapV = i1005[9]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.index = i1011[1]
  i1010.startup = !!i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1013 = data
  i1012.type = i1013[0]
  i1012.color = new pc.Color(i1013[1], i1013[2], i1013[3], i1013[4])
  i1012.cullingMask = i1013[5]
  i1012.intensity = i1013[6]
  i1012.range = i1013[7]
  i1012.spotAngle = i1013[8]
  i1012.shadows = i1013[9]
  i1012.shadowNormalBias = i1013[10]
  i1012.shadowBias = i1013[11]
  i1012.shadowStrength = i1013[12]
  i1012.shadowResolution = i1013[13]
  i1012.lightmapBakeType = i1013[14]
  i1012.renderMode = i1013[15]
  request.r(i1013[16], i1013[17], 0, i1012, 'cookie')
  i1012.cookieSize = i1013[18]
  i1012.shadowNearPlane = i1013[19]
  i1012.occlusionMaskChannel = i1013[20]
  i1012.isBaked = !!i1013[21]
  i1012.mixedLightingMode = i1013[22]
  i1012.enabled = !!i1013[23]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1015 = data
  i1014.aspect = i1015[0]
  i1014.orthographic = !!i1015[1]
  i1014.orthographicSize = i1015[2]
  i1014.backgroundColor = new pc.Color(i1015[3], i1015[4], i1015[5], i1015[6])
  i1014.nearClipPlane = i1015[7]
  i1014.farClipPlane = i1015[8]
  i1014.fieldOfView = i1015[9]
  i1014.depth = i1015[10]
  i1014.clearFlags = i1015[11]
  i1014.cullingMask = i1015[12]
  i1014.rect = i1015[13]
  request.r(i1015[14], i1015[15], 0, i1014, 'targetTexture')
  i1014.usePhysicalProperties = !!i1015[16]
  i1014.focalLength = i1015[17]
  i1014.sensorSize = new pc.Vec2( i1015[18], i1015[19] )
  i1014.lensShift = new pc.Vec2( i1015[20], i1015[21] )
  i1014.gateFit = i1015[22]
  i1014.commandBufferCount = i1015[23]
  i1014.cameraType = i1015[24]
  i1014.enabled = !!i1015[25]
  return i1014
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i1016 = root || request.c( 'ScreenDeltaInputSystem' )
  var i1017 = data
  return i1016
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i1018 = root || request.c( 'MonsterProgressBar' )
  var i1019 = data
  i1018.countSceneMonsters = !!i1019[0]
  i1018.startFound = i1019[1]
  i1018.total = i1019[2]
  request.r(i1019[3], i1019[4], 0, i1018, 'fill')
  request.r(i1019[5], i1019[6], 0, i1018, 'countText')
  request.r(i1019[7], i1019[8], 0, i1018, 'icon')
  i1018.fillSpeed = i1019[9]
  return i1018
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i1020 = root || request.c( 'StoryTextView' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'label')
  i1020.popDuration = i1021[2]
  i1020.pulseAmount = i1021[3]
  i1020.pulseSpeed = i1021[4]
  i1020.fadeDuration = i1021[5]
  return i1020
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.Button' )
  var i1023 = data
  i1022.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1023[0], i1022.m_OnClick)
  i1022.m_Navigation = request.d('UnityEngine.UI.Navigation', i1023[1], i1022.m_Navigation)
  i1022.m_Transition = i1023[2]
  i1022.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1023[3], i1022.m_Colors)
  i1022.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1023[4], i1022.m_SpriteState)
  i1022.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1023[5], i1022.m_AnimationTriggers)
  i1022.m_Interactable = !!i1023[6]
  request.r(i1023[7], i1023[8], 0, i1022, 'm_TargetGraphic')
  return i1022
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i1024 = root || request.c( 'JumpButton' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'character')
  return i1024
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i1026 = root || request.c( 'PlayableJoystick' )
  var i1027 = data
  i1026.handleRange = i1027[0]
  i1026.deadZone = i1027[1]
  i1026.floating = !!i1027[2]
  request.r(i1027[3], i1027[4], 0, i1026, 'background')
  request.r(i1027[5], i1027[6], 0, i1026, 'knob')
  return i1026
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i1028 = root || request.c( 'FMCharacter' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'planetTransform')
  request.r(i1029[2], i1029[3], 0, i1028, 'animator')
  request.r(i1029[4], i1029[5], 0, i1028, 'joystick')
  i1028._rotationRate = i1029[6]
  i1028._maxWalkSpeed = i1029[7]
  i1028._maxAcceleration = i1029[8]
  i1028._brakingDecelerationWalking = i1029[9]
  i1028._airControl = i1029[10]
  i1028._jumpImpulse = i1029[11]
  i1028._gravity = new pc.Vec3( i1029[12], i1029[13], i1029[14] )
  i1028._gravityScale = i1029[15]
  request.r(i1029[16], i1029[17], 0, i1028, '_camera')
  i1028.jumpSound = request.d('FMAudio', i1029[18], i1028.jumpSound)
  i1028.stepHeight = i1029[19]
  return i1028
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i1030 = root || request.c( 'FM3rdInput' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'followTarget')
  i1030.followDistance = i1031[2]
  i1030.followMinDistance = i1031[3]
  i1030.followMaxDistance = i1031[4]
  i1030.maxPitch = i1031[5]
  i1030.minPitch = i1031[6]
  i1030.invertLook = !!i1031[7]
  i1030.lookSensitivity = new pc.Vec2( i1031[8], i1031[9] )
  request.r(i1031[10], i1031[11], 0, i1030, 'planetTransform')
  i1030.cameraDistance = i1031[12]
  i1030.cameraRadius = i1031[13]
  i1030.cameraReturnSpeed = i1031[14]
  request.r(i1031[15], i1031[16], 0, i1030, 'cam')
  request.r(i1031[17], i1031[18], 0, i1030, 'lookArea')
  i1030.extraRoll = i1031[19]
  i1030.autoReturnDelay = i1031[20]
  i1030.autoReturnSpeed = i1031[21]
  i1030.defaultPitch = i1031[22]
  i1030.enableAutoReturn = !!i1031[23]
  i1030.forwardSpeedMultiplier = i1031[24]
  i1030.backwardSpeedMultiplier = i1031[25]
  return i1030
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i1032 = root || request.c( 'FindMonsterPlayerControl' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'playerSO')
  request.r(i1033[2], i1033[3], 0, i1032, 'playerBase')
  request.r(i1033[4], i1033[5], 0, i1032, 'morphRoot')
  request.r(i1033[6], i1033[7], 0, i1032, 'poopFx')
  request.r(i1033[8], i1033[9], 0, i1032, 'poopRoot')
  request.r(i1033[10], i1033[11], 0, i1032, 'trailSpeed')
  i1032.popSound = request.d('FMAudio', i1033[12], i1032.popSound)
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.center = new pc.Vec3( i1035[1], i1035[2], i1035[3] )
  i1034.radius = i1035[4]
  i1034.height = i1035[5]
  i1034.minMoveDistance = i1035[6]
  i1034.skinWidth = i1035[7]
  i1034.enableOverlapRecovery = !!i1035[8]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'sharedMesh')
  var i1039 = i1037[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.bones = i1038
  i1036.updateWhenOffscreen = !!i1037[3]
  i1036.localBounds = i1037[4]
  request.r(i1037[5], i1037[6], 0, i1036, 'rootBone')
  var i1041 = i1037[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1041[i + 0]) );
  }
  i1036.blendShapesWeights = i1040
  i1036.enabled = !!i1037[8]
  request.r(i1037[9], i1037[10], 0, i1036, 'sharedMaterial')
  var i1043 = i1037[11]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1036.sharedMaterials = i1042
  i1036.receiveShadows = !!i1037[12]
  i1036.shadowCastingMode = i1037[13]
  i1036.sortingLayerID = i1037[14]
  i1036.sortingOrder = i1037[15]
  i1036.lightmapIndex = i1037[16]
  i1036.lightmapSceneIndex = i1037[17]
  i1036.lightmapScaleOffset = new pc.Vec4( i1037[18], i1037[19], i1037[20], i1037[21] )
  i1036.lightProbeUsage = i1037[22]
  i1036.reflectionProbeUsage = i1037[23]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1047 = data
  i1046.weight = i1047[0]
  return i1046
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i1048 = root || request.c( 'CharacterFootstep' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'ecmCharacter')
  i1048.audioSource = request.d('FMAudio', i1049[2], i1048.audioSource)
  i1048.speed = i1049[3]
  return i1048
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'm_FirstSelected')
  i1050.m_sendNavigationEvents = !!i1051[2]
  i1050.m_DragThreshold = i1051[3]
  return i1050
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1053 = data
  i1052.m_HorizontalAxis = i1053[0]
  i1052.m_VerticalAxis = i1053[1]
  i1052.m_SubmitButton = i1053[2]
  i1052.m_CancelButton = i1053[3]
  i1052.m_InputActionsPerSecond = i1053[4]
  i1052.m_RepeatDelay = i1053[5]
  i1052.m_ForceModuleActive = !!i1053[6]
  i1052.m_SendPointerHoverToParent = !!i1053[7]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'clip')
  request.r(i1055[2], i1055[3], 0, i1054, 'outputAudioMixerGroup')
  i1054.playOnAwake = !!i1055[4]
  i1054.loop = !!i1055[5]
  i1054.time = i1055[6]
  i1054.volume = i1055[7]
  i1054.pitch = i1055[8]
  i1054.enabled = !!i1055[9]
  return i1054
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i1056 = root || request.c( 'PlayableAudio' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'source')
  request.r(i1057[2], i1057[3], 0, i1056, 'buttonClick')
  return i1056
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1058 = root || request.c( 'LunaController' )
  var i1059 = data
  i1058.LimitTimePlay = !!i1059[0]
  i1058.TimePlay = i1059[1]
  i1058.TypeMorph1 = i1059[2]
  i1058.TypeMorph2 = i1059[3]
  i1058.LimitClick = !!i1059[4]
  i1058.MaxClick = i1059[5]
  request.r(i1059[6], i1059[7], 0, i1058, 'BGM')
  request.r(i1059[8], i1059[9], 0, i1058, 'musicSource')
  i1058.musicVolume = i1059[10]
  var i1061 = i1059[11]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1058.CTA = i1060
  request.r(i1059[12], i1059[13], 0, i1058, 'endUI')
  request.r(i1059[14], i1059[15], 0, i1058, 'endCard')
  return i1058
}

Deserializers["ControlsTutorial"] = function (request, data, root) {
  var i1064 = root || request.c( 'ControlsTutorial' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'player')
  request.r(i1065[2], i1065[3], 0, i1064, 'look')
  request.r(i1065[4], i1065[5], 0, i1064, 'hand')
  request.r(i1065[6], i1065[7], 0, i1064, 'text')
  request.r(i1065[8], i1065[9], 0, i1064, 'viewFrom')
  request.r(i1065[10], i1065[11], 0, i1064, 'viewTo')
  request.r(i1065[12], i1065[13], 0, i1064, 'joystickRing')
  request.r(i1065[14], i1065[15], 0, i1064, 'jumpButton')
  i1064.viewText = i1065[16]
  i1064.moveText = i1065[17]
  i1064.jumpText = i1065[18]
  i1064.lookDegrees = i1065[19]
  i1064.moveDistance = i1065[20]
  i1064.jumps = i1065[21]
  i1064.jumpStep = !!i1065[22]
  i1064.startDelay = i1065[23]
  i1064.stepGap = i1065[24]
  i1064.swipeDuration = i1065[25]
  i1064.joystickSwipe = i1065[26]
  return i1064
}

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i1066 = root || request.c( 'HiddenMonster' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'checkMark')
  request.r(i1067[2], i1067[3], 0, i1066, 'claimFx')
  return i1066
}

Deserializers["Billboard"] = function (request, data, root) {
  var i1068 = root || request.c( 'Billboard' )
  var i1069 = data
  i1068.distanceToBillborad = i1069[0]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1071 = data
  i1070.color = new pc.Color(i1071[0], i1071[1], i1071[2], i1071[3])
  request.r(i1071[4], i1071[5], 0, i1070, 'sprite')
  i1070.flipX = !!i1071[6]
  i1070.flipY = !!i1071[7]
  i1070.drawMode = i1071[8]
  i1070.size = new pc.Vec2( i1071[9], i1071[10] )
  i1070.tileMode = i1071[11]
  i1070.adaptiveModeThreshold = i1071[12]
  i1070.maskInteraction = i1071[13]
  i1070.spriteSortPoint = i1071[14]
  i1070.enabled = !!i1071[15]
  request.r(i1071[16], i1071[17], 0, i1070, 'sharedMaterial')
  var i1073 = i1071[18]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.sharedMaterials = i1072
  i1070.receiveShadows = !!i1071[19]
  i1070.shadowCastingMode = i1071[20]
  i1070.sortingLayerID = i1071[21]
  i1070.sortingOrder = i1071[22]
  i1070.lightmapIndex = i1071[23]
  i1070.lightmapSceneIndex = i1071[24]
  i1070.lightmapScaleOffset = new pc.Vec4( i1071[25], i1071[26], i1071[27], i1071[28] )
  i1070.lightProbeUsage = i1071[29]
  i1070.reflectionProbeUsage = i1071[30]
  return i1070
}

Deserializers["MorphUnlockedPanel"] = function (request, data, root) {
  var i1074 = root || request.c( 'MorphUnlockedPanel' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('MorphUnlockedPanel+Card', i1077[i + 0]) );
  }
  i1074.cards = i1076
  request.r(i1075[1], i1075[2], 0, i1074, 'popRoot')
  i1074.popDuration = i1075[3]
  return i1074
}

Deserializers["MorphUnlockedPanel+Card"] = function (request, data, root) {
  var i1080 = root || request.c( 'MorphUnlockedPanel+Card' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'background')
  request.r(i1081[2], i1081[3], 0, i1080, 'icon')
  request.r(i1081[4], i1081[5], 0, i1080, 'nameText')
  request.r(i1081[6], i1081[7], 0, i1080, 'rarityText')
  return i1080
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i1082 = root || request.c( 'MorphHuntStory' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'player')
  request.r(i1083[2], i1083[3], 0, i1082, 'look')
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1082.morphs = i1084
  var i1087 = i1083[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1082.morphOptions = i1086
  request.r(i1083[6], i1083[7], 0, i1082, 'startLookAt')
  i1082.startPitch = i1083[8]
  request.r(i1083[9], i1083[10], 0, i1082, 'hand')
  i1082.handOffset = new pc.Vec3( i1083[11], i1083[12], i1083[13] )
  request.r(i1083[14], i1083[15], 0, i1082, 'storyText')
  request.r(i1083[16], i1083[17], 0, i1082, 'unlockText')
  request.r(i1083[18], i1083[19], 0, i1082, 'shine')
  request.r(i1083[20], i1083[21], 0, i1082, 'finalPanel')
  i1082.introText = i1083[22]
  i1082.unlockedFormat = i1083[23]
  i1082.oneMoreText = i1083[24]
  i1082.introDelay = i1083[25]
  i1082.handHideDistance = i1083[26]
  i1082.cameraTurnDuration = i1083[27]
  i1082.finalDuration = i1083[28]
  return i1082
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i1092 = root || request.c( 'ScaleYoyo' )
  var i1093 = data
  i1092.delay = i1093[0]
  i1092.duration = i1093[1]
  i1092.easeType = i1093[2]
  i1092.loops = i1093[3]
  i1092.loopType = i1093[4]
  i1092.animationType = i1093[5]
  i1092.endValueV3 = new pc.Vec3( i1093[6], i1093[7], i1093[8] )
  i1092.isRelative = !!i1093[9]
  i1092.autoPlay = !!i1093[10]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1095 = data
  i1094.ambientIntensity = i1095[0]
  i1094.reflectionIntensity = i1095[1]
  i1094.ambientMode = i1095[2]
  i1094.ambientLight = new pc.Color(i1095[3], i1095[4], i1095[5], i1095[6])
  i1094.ambientSkyColor = new pc.Color(i1095[7], i1095[8], i1095[9], i1095[10])
  i1094.ambientGroundColor = new pc.Color(i1095[11], i1095[12], i1095[13], i1095[14])
  i1094.ambientEquatorColor = new pc.Color(i1095[15], i1095[16], i1095[17], i1095[18])
  i1094.fogColor = new pc.Color(i1095[19], i1095[20], i1095[21], i1095[22])
  i1094.fogEndDistance = i1095[23]
  i1094.fogStartDistance = i1095[24]
  i1094.fogDensity = i1095[25]
  i1094.fog = !!i1095[26]
  request.r(i1095[27], i1095[28], 0, i1094, 'skybox')
  i1094.fogMode = i1095[29]
  var i1097 = i1095[30]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1097[i + 0]) );
  }
  i1094.lightmaps = i1096
  i1094.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1095[31], i1094.lightProbes)
  i1094.lightmapsMode = i1095[32]
  i1094.mixedBakeMode = i1095[33]
  i1094.environmentLightingMode = i1095[34]
  i1094.ambientProbe = new pc.SphericalHarmonicsL2(i1095[35])
  request.r(i1095[36], i1095[37], 0, i1094, 'customReflection')
  request.r(i1095[38], i1095[39], 0, i1094, 'defaultReflection')
  i1094.defaultReflectionMode = i1095[40]
  i1094.defaultReflectionResolution = i1095[41]
  i1094.sunLightObjectId = i1095[42]
  i1094.pixelLightCount = i1095[43]
  i1094.defaultReflectionHDR = !!i1095[44]
  i1094.hasLightDataAsset = !!i1095[45]
  i1094.hasManualGenerate = !!i1095[46]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'lightmapColor')
  request.r(i1101[2], i1101[3], 0, i1100, 'lightmapDirection')
  request.r(i1101[4], i1101[5], 0, i1100, 'shadowMask')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1102 = root || new UnityEngine.LightProbes()
  var i1103 = data
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1111[i + 0]));
  }
  i1108.ShaderCompilationErrors = i1110
  i1108.name = i1109[1]
  i1108.guid = i1109[2]
  var i1113 = i1109[3]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1108.shaderDefinedKeywords = i1112
  var i1115 = i1109[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1115[i + 0]) );
  }
  i1108.passes = i1114
  var i1117 = i1109[5]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1117[i + 0]) );
  }
  i1108.usePasses = i1116
  var i1119 = i1109[6]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1119[i + 0]) );
  }
  i1108.defaultParameterValues = i1118
  request.r(i1109[7], i1109[8], 0, i1108, 'unityFallbackShader')
  i1108.readDepth = !!i1109[9]
  i1108.hasDepthOnlyPass = !!i1109[10]
  i1108.isCreatedByShaderGraph = !!i1109[11]
  i1108.disableBatching = !!i1109[12]
  i1108.compiled = !!i1109[13]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1123 = data
  i1122.shaderName = i1123[0]
  i1122.errorMessage = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1128 = root || new pc.UnityShaderPass()
  var i1129 = data
  i1128.id = i1129[0]
  i1128.subShaderIndex = i1129[1]
  i1128.name = i1129[2]
  i1128.passType = i1129[3]
  i1128.grabPassTextureName = i1129[4]
  i1128.usePass = !!i1129[5]
  i1128.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[6], i1128.zTest)
  i1128.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[7], i1128.zWrite)
  i1128.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[8], i1128.culling)
  i1128.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1129[9], i1128.blending)
  i1128.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1129[10], i1128.alphaBlending)
  i1128.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[11], i1128.colorWriteMask)
  i1128.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[12], i1128.offsetUnits)
  i1128.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[13], i1128.offsetFactor)
  i1128.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[14], i1128.stencilRef)
  i1128.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[15], i1128.stencilReadMask)
  i1128.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[16], i1128.stencilWriteMask)
  i1128.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1129[17], i1128.stencilOp)
  i1128.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1129[18], i1128.stencilOpFront)
  i1128.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1129[19], i1128.stencilOpBack)
  var i1131 = i1129[20]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1131[i + 0]) );
  }
  i1128.tags = i1130
  var i1133 = i1129[21]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1128.passDefinedKeywords = i1132
  var i1135 = i1129[22]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1135[i + 0]) );
  }
  i1128.passDefinedKeywordGroups = i1134
  var i1137 = i1129[23]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1137[i + 0]) );
  }
  i1128.variants = i1136
  var i1139 = i1129[24]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1139[i + 0]) );
  }
  i1128.excludedVariants = i1138
  i1128.hasDepthReader = !!i1129[25]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1141 = data
  i1140.val = i1141[0]
  i1140.name = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1143 = data
  i1142.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[0], i1142.src)
  i1142.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[1], i1142.dst)
  i1142.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[2], i1142.op)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1145 = data
  i1144.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[0], i1144.pass)
  i1144.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[1], i1144.fail)
  i1144.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[2], i1144.zFail)
  i1144.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[3], i1144.comp)
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.value = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.keywords = i1154
  i1152.hasDiscard = !!i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1159 = data
  i1158.passId = i1159[0]
  i1158.subShaderIndex = i1159[1]
  var i1161 = i1159[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1158.keywords = i1160
  i1158.vertexProgram = i1159[3]
  i1158.fragmentProgram = i1159[4]
  i1158.exportedForWebGl2 = !!i1159[5]
  i1158.readDepth = !!i1159[6]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'shader')
  i1164.pass = i1165[2]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.type = i1169[1]
  i1168.value = new pc.Vec4( i1169[2], i1169[3], i1169[4], i1169[5] )
  i1168.textureValue = i1169[6]
  i1168.shaderPropertyFlag = i1169[7]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1171 = data
  i1170.name = i1171[0]
  request.r(i1171[1], i1171[2], 0, i1170, 'texture')
  i1170.aabb = i1171[3]
  i1170.vertices = i1171[4]
  i1170.triangles = i1171[5]
  i1170.textureRect = UnityEngine.Rect.MinMaxRect(i1171[6], i1171[7], i1171[8], i1171[9])
  i1170.packedRect = UnityEngine.Rect.MinMaxRect(i1171[10], i1171[11], i1171[12], i1171[13])
  i1170.border = new pc.Vec4( i1171[14], i1171[15], i1171[16], i1171[17] )
  i1170.transparency = i1171[18]
  i1170.bounds = i1171[19]
  i1170.pixelsPerUnit = i1171[20]
  i1170.textureWidth = i1171[21]
  i1170.textureHeight = i1171[22]
  i1170.nativeSize = new pc.Vec2( i1171[23], i1171[24] )
  i1170.pivot = new pc.Vec2( i1171[25], i1171[26] )
  i1170.textureRectOffset = new pc.Vec2( i1171[27], i1171[28] )
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1173 = data
  i1172.name = i1173[0]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.wrapMode = i1175[1]
  i1174.isLooping = !!i1175[2]
  i1174.length = i1175[3]
  var i1177 = i1175[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1177[i + 0]) );
  }
  i1174.curves = i1176
  var i1179 = i1175[5]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1179[i + 0]) );
  }
  i1174.events = i1178
  i1174.halfPrecision = !!i1175[6]
  i1174._frameRate = i1175[7]
  i1174.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1175[8], i1174.localBounds)
  i1174.hasMuscleCurves = !!i1175[9]
  var i1181 = i1175[10]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1174.clipMuscleConstant = i1180
  i1174.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1175[11], i1174.clipBindingConstant)
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1185 = data
  i1184.path = i1185[0]
  i1184.hash = i1185[1]
  i1184.componentType = i1185[2]
  i1184.property = i1185[3]
  i1184.keys = i1185[4]
  var i1187 = i1185[5]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1187[i + 0]) );
  }
  i1184.objectReferenceKeys = i1186
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1191 = data
  i1190.time = i1191[0]
  request.r(i1191[1], i1191[2], 0, i1190, 'value')
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1195 = data
  i1194.functionName = i1195[0]
  i1194.floatParameter = i1195[1]
  i1194.intParameter = i1195[2]
  i1194.stringParameter = i1195[3]
  request.r(i1195[4], i1195[5], 0, i1194, 'objectReferenceParameter')
  i1194.time = i1195[6]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1197 = data
  i1196.center = new pc.Vec3( i1197[0], i1197[1], i1197[2] )
  i1196.extends = new pc.Vec3( i1197[3], i1197[4], i1197[5] )
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1201 = data
  var i1203 = i1201[0]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1200.genericBindings = i1202
  var i1205 = i1201[1]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1200.pptrCurveMapping = i1204
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1207 = data
  i1206.name = i1207[0]
  i1206.blendParameter = i1207[1]
  i1206.blendParameterY = i1207[2]
  i1206.blendType = i1207[3]
  var i1209 = i1207[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1209[i + 0]) );
  }
  i1206.children = i1208
  i1206.useAutomaticThresholds = !!i1207[5]
  i1206.minThreshold = i1207[6]
  i1206.maxThreshold = i1207[7]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'motion')
  i1212.threshold = i1213[2]
  i1212.position = new pc.Vec2( i1213[3], i1213[4] )
  i1212.timeScale = i1213[5]
  i1212.cycleOffset = i1213[6]
  i1212.directBlendParameter = i1213[7]
  i1212.mirror = !!i1213[8]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1215 = data
  i1214.name = i1215[0]
  var i1217 = i1215[1]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1217[i + 0]) );
  }
  i1214.layers = i1216
  var i1219 = i1215[2]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1219[i + 0]) );
  }
  i1214.parameters = i1218
  i1214.animationClips = i1215[3]
  i1214.avatarUnsupported = i1215[4]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.defaultWeight = i1223[1]
  i1222.blendingMode = i1223[2]
  i1222.avatarMask = i1223[3]
  i1222.syncedLayerIndex = i1223[4]
  i1222.syncedLayerAffectsTiming = !!i1223[5]
  i1222.syncedLayers = i1223[6]
  i1222.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1223[7], i1222.stateMachine)
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1225 = data
  i1224.id = i1225[0]
  i1224.name = i1225[1]
  i1224.path = i1225[2]
  var i1227 = i1225[3]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1227[i + 0]) );
  }
  i1224.states = i1226
  var i1229 = i1225[4]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1229[i + 0]) );
  }
  i1224.machines = i1228
  var i1231 = i1225[5]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1231[i + 0]) );
  }
  i1224.entryStateTransitions = i1230
  var i1233 = i1225[6]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1233[i + 0]) );
  }
  i1224.exitStateTransitions = i1232
  var i1235 = i1225[7]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1235[i + 0]) );
  }
  i1224.anyStateTransitions = i1234
  i1224.defaultStateId = i1225[8]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1239 = data
  i1238.id = i1239[0]
  i1238.name = i1239[1]
  i1238.cycleOffset = i1239[2]
  i1238.cycleOffsetParameter = i1239[3]
  i1238.cycleOffsetParameterActive = !!i1239[4]
  i1238.mirror = !!i1239[5]
  i1238.mirrorParameter = i1239[6]
  i1238.mirrorParameterActive = !!i1239[7]
  i1238.motionId = i1239[8]
  i1238.nameHash = i1239[9]
  i1238.fullPathHash = i1239[10]
  i1238.speed = i1239[11]
  i1238.speedParameter = i1239[12]
  i1238.speedParameterActive = !!i1239[13]
  i1238.tag = i1239[14]
  i1238.tagHash = i1239[15]
  i1238.writeDefaultValues = !!i1239[16]
  var i1241 = i1239[17]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 2, i1240, '')
  }
  i1238.behaviours = i1240
  var i1243 = i1239[18]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1243[i + 0]) );
  }
  i1238.transitions = i1242
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1249 = data
  i1248.fullPath = i1249[0]
  i1248.canTransitionToSelf = !!i1249[1]
  i1248.duration = i1249[2]
  i1248.exitTime = i1249[3]
  i1248.hasExitTime = !!i1249[4]
  i1248.hasFixedDuration = !!i1249[5]
  i1248.interruptionSource = i1249[6]
  i1248.offset = i1249[7]
  i1248.orderedInterruption = !!i1249[8]
  i1248.destinationStateId = i1249[9]
  i1248.isExit = !!i1249[10]
  i1248.mute = !!i1249[11]
  i1248.solo = !!i1249[12]
  var i1251 = i1249[13]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1251[i + 0]) );
  }
  i1248.conditions = i1250
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1255 = data
  i1254.mode = i1255[0]
  i1254.parameter = i1255[1]
  i1254.threshold = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1261 = data
  i1260.destinationStateId = i1261[0]
  i1260.isExit = !!i1261[1]
  i1260.mute = !!i1261[2]
  i1260.solo = !!i1261[3]
  var i1263 = i1261[4]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1263[i + 0]) );
  }
  i1260.conditions = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1267 = data
  i1266.defaultBool = !!i1267[0]
  i1266.defaultFloat = i1267[1]
  i1266.defaultInt = i1267[2]
  i1266.name = i1267[3]
  i1266.nameHash = i1267[4]
  i1266.type = i1267[5]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1269 = data
  i1268.name = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, '_runtimeAnimatorController')
  var i1271 = i1269[3]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 2, i1270, '')
  }
  i1268._originalAnimationClips = i1270
  var i1273 = i1269[4]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 2, i1272, '')
  }
  i1268._overrideAnimationClips = i1272
  var i1275 = i1269[5]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1268._animationClips = i1274
  var i1277 = i1269[6]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('UnityEngine.AnimationClipPair', i1277[i + 0]) );
  }
  i1268._animationClipPairs = i1276
  return i1268
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'originalClip')
  request.r(i1283[2], i1283[3], 0, i1282, 'overrideClip')
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1285 = data
  i1284.name = i1285[0]
  i1284.bytes64 = i1285[1]
  i1284.data = i1285[2]
  return i1284
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1287 = data
  i1286.normalStyle = i1287[0]
  i1286.normalSpacingOffset = i1287[1]
  i1286.boldStyle = i1287[2]
  i1286.boldSpacing = i1287[3]
  i1286.italicStyle = i1287[4]
  i1286.tabSize = i1287[5]
  request.r(i1287[6], i1287[7], 0, i1286, 'atlas')
  i1286.m_SourceFontFileGUID = i1287[8]
  i1286.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1287[9], i1286.m_CreationSettings)
  request.r(i1287[10], i1287[11], 0, i1286, 'm_SourceFontFile')
  i1286.m_SourceFontFilePath = i1287[12]
  i1286.m_AtlasPopulationMode = i1287[13]
  i1286.InternalDynamicOS = !!i1287[14]
  var i1289 = i1287[15]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('UnityEngine.TextCore.Glyph', i1289[i + 0]));
  }
  i1286.m_GlyphTable = i1288
  var i1291 = i1287[16]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.TMP_Character', i1291[i + 0]));
  }
  i1286.m_CharacterTable = i1290
  var i1293 = i1287[17]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 2, i1292, '')
  }
  i1286.m_AtlasTextures = i1292
  i1286.m_AtlasTextureIndex = i1287[18]
  i1286.m_IsMultiAtlasTexturesEnabled = !!i1287[19]
  i1286.m_GetFontFeatures = !!i1287[20]
  i1286.m_ClearDynamicDataOnBuild = !!i1287[21]
  i1286.m_AtlasWidth = i1287[22]
  i1286.m_AtlasHeight = i1287[23]
  i1286.m_AtlasPadding = i1287[24]
  i1286.m_AtlasRenderMode = i1287[25]
  var i1295 = i1287[26]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('UnityEngine.TextCore.GlyphRect', i1295[i + 0]));
  }
  i1286.m_UsedGlyphRects = i1294
  var i1297 = i1287[27]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('UnityEngine.TextCore.GlyphRect', i1297[i + 0]));
  }
  i1286.m_FreeGlyphRects = i1296
  i1286.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1287[28], i1286.m_FontFeatureTable)
  i1286.m_ShouldReimportFontFeatures = !!i1287[29]
  var i1299 = i1287[30]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1299.length; i += 2) {
  request.r(i1299[i + 0], i1299[i + 1], 1, i1298, '')
  }
  i1286.m_FallbackFontAssetTable = i1298
  var i1301 = i1287[31]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('TMPro.TMP_FontWeightPair', i1301[i + 0]) );
  }
  i1286.m_FontWeightTable = i1300
  var i1303 = i1287[32]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('TMPro.TMP_FontWeightPair', i1303[i + 0]) );
  }
  i1286.fontWeights = i1302
  i1286.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1287[33], i1286.m_fontInfo)
  var i1305 = i1287[34]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.TMP_Glyph', i1305[i + 0]));
  }
  i1286.m_glyphInfoList = i1304
  i1286.m_KerningTable = request.d('TMPro.KerningTable', i1287[35], i1286.m_KerningTable)
  var i1307 = i1287[36]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 1, i1306, '')
  }
  i1286.fallbackFontAssets = i1306
  i1286.m_Version = i1287[37]
  i1286.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1287[38], i1286.m_FaceInfo)
  request.r(i1287[39], i1287[40], 0, i1286, 'm_Material')
  return i1286
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1309 = data
  i1308.sourceFontFileName = i1309[0]
  i1308.sourceFontFileGUID = i1309[1]
  i1308.faceIndex = i1309[2]
  i1308.pointSizeSamplingMode = i1309[3]
  i1308.pointSize = i1309[4]
  i1308.padding = i1309[5]
  i1308.paddingMode = i1309[6]
  i1308.packingMode = i1309[7]
  i1308.atlasWidth = i1309[8]
  i1308.atlasHeight = i1309[9]
  i1308.characterSetSelectionMode = i1309[10]
  i1308.characterSequence = i1309[11]
  i1308.referencedFontAssetGUID = i1309[12]
  i1308.referencedTextAssetGUID = i1309[13]
  i1308.fontStyle = i1309[14]
  i1308.fontStyleModifier = i1309[15]
  i1308.renderMode = i1309[16]
  i1308.includeFontFeatures = !!i1309[17]
  return i1308
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1313 = data
  i1312.m_Index = i1313[0]
  i1312.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1313[1], i1312.m_Metrics)
  i1312.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1313[2], i1312.m_GlyphRect)
  i1312.m_Scale = i1313[3]
  i1312.m_AtlasIndex = i1313[4]
  i1312.m_ClassDefinitionType = i1313[5]
  return i1312
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1315 = data
  i1314.m_Width = i1315[0]
  i1314.m_Height = i1315[1]
  i1314.m_HorizontalBearingX = i1315[2]
  i1314.m_HorizontalBearingY = i1315[3]
  i1314.m_HorizontalAdvance = i1315[4]
  return i1314
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1317 = data
  i1316.m_X = i1317[0]
  i1316.m_Y = i1317[1]
  i1316.m_Width = i1317[2]
  i1316.m_Height = i1317[3]
  return i1316
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Character' )
  var i1321 = data
  i1320.m_ElementType = i1321[0]
  i1320.m_Unicode = i1321[1]
  i1320.m_GlyphIndex = i1321[2]
  i1320.m_Scale = i1321[3]
  return i1320
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.MultipleSubstitutionRecord', i1329[i + 0]));
  }
  i1326.m_MultipleSubstitutionRecords = i1328
  var i1331 = i1327[1]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.LigatureSubstitutionRecord', i1331[i + 0]));
  }
  i1326.m_LigatureSubstitutionRecords = i1330
  var i1333 = i1327[2]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1333[i + 0]));
  }
  i1326.m_GlyphPairAdjustmentRecords = i1332
  var i1335 = i1327[3]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1335[i + 0]));
  }
  i1326.m_MarkToBaseAdjustmentRecords = i1334
  var i1337 = i1327[4]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1337[i + 0]));
  }
  i1326.m_MarkToMarkAdjustmentRecords = i1336
  return i1326
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1341 = data
  i1340.m_TargetGlyphID = i1341[0]
  i1340.m_SubstituteGlyphIDs = i1341[1]
  return i1340
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1345 = data
  i1344.m_ComponentGlyphIDs = i1345[0]
  i1344.m_LigatureGlyphID = i1345[1]
  return i1344
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1349 = data
  i1348.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1349[0], i1348.m_FirstAdjustmentRecord)
  i1348.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1349[1], i1348.m_SecondAdjustmentRecord)
  i1348.m_FeatureLookupFlags = i1349[2]
  return i1348
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1351 = data
  i1350.m_GlyphIndex = i1351[0]
  i1350.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1351[1], i1350.m_GlyphValueRecord)
  return i1350
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1353 = data
  i1352.m_XPlacement = i1353[0]
  i1352.m_YPlacement = i1353[1]
  i1352.m_XAdvance = i1353[2]
  i1352.m_YAdvance = i1353[3]
  return i1352
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1357 = data
  i1356.m_BaseGlyphID = i1357[0]
  i1356.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1357[1], i1356.m_BaseGlyphAnchorPoint)
  i1356.m_MarkGlyphID = i1357[2]
  i1356.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1357[3], i1356.m_MarkPositionAdjustment)
  return i1356
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1359 = data
  i1358.m_XCoordinate = i1359[0]
  i1358.m_YCoordinate = i1359[1]
  return i1358
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1361 = data
  i1360.m_XPositionAdjustment = i1361[0]
  i1360.m_YPositionAdjustment = i1361[1]
  return i1360
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1365 = data
  i1364.m_BaseMarkGlyphID = i1365[0]
  i1364.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1365[1], i1364.m_BaseMarkGlyphAnchorPoint)
  i1364.m_CombiningMarkGlyphID = i1365[2]
  i1364.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1365[3], i1364.m_CombiningMarkPositionAdjustment)
  return i1364
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'regularTypeface')
  request.r(i1371[2], i1371[3], 0, i1370, 'italicTypeface')
  return i1370
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1373 = data
  i1372.Name = i1373[0]
  i1372.PointSize = i1373[1]
  i1372.Scale = i1373[2]
  i1372.CharacterCount = i1373[3]
  i1372.LineHeight = i1373[4]
  i1372.Baseline = i1373[5]
  i1372.Ascender = i1373[6]
  i1372.CapHeight = i1373[7]
  i1372.Descender = i1373[8]
  i1372.CenterLine = i1373[9]
  i1372.SuperscriptOffset = i1373[10]
  i1372.SubscriptOffset = i1373[11]
  i1372.SubSize = i1373[12]
  i1372.Underline = i1373[13]
  i1372.UnderlineThickness = i1373[14]
  i1372.strikethrough = i1373[15]
  i1372.strikethroughThickness = i1373[16]
  i1372.TabWidth = i1373[17]
  i1372.Padding = i1373[18]
  i1372.AtlasWidth = i1373[19]
  i1372.AtlasHeight = i1373[20]
  return i1372
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1377 = data
  i1376.id = i1377[0]
  i1376.x = i1377[1]
  i1376.y = i1377[2]
  i1376.width = i1377[3]
  i1376.height = i1377[4]
  i1376.xOffset = i1377[5]
  i1376.yOffset = i1377[6]
  i1376.xAdvance = i1377[7]
  i1376.scale = i1377[8]
  return i1376
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.KerningTable' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('TMPro.KerningPair', i1381[i + 0]));
  }
  i1378.kerningPairs = i1380
  return i1378
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.KerningPair' )
  var i1385 = data
  i1384.xOffset = i1385[0]
  i1384.m_FirstGlyph = i1385[1]
  i1384.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1385[2], i1384.m_FirstGlyphAdjustments)
  i1384.m_SecondGlyph = i1385[3]
  i1384.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1385[4], i1384.m_SecondGlyphAdjustments)
  i1384.m_IgnoreSpacingAdjustments = !!i1385[5]
  return i1384
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1387 = data
  i1386.m_FaceIndex = i1387[0]
  i1386.m_FamilyName = i1387[1]
  i1386.m_StyleName = i1387[2]
  i1386.m_PointSize = i1387[3]
  i1386.m_Scale = i1387[4]
  i1386.m_UnitsPerEM = i1387[5]
  i1386.m_LineHeight = i1387[6]
  i1386.m_AscentLine = i1387[7]
  i1386.m_CapLine = i1387[8]
  i1386.m_MeanLine = i1387[9]
  i1386.m_Baseline = i1387[10]
  i1386.m_DescentLine = i1387[11]
  i1386.m_SuperscriptOffset = i1387[12]
  i1386.m_SuperscriptSize = i1387[13]
  i1386.m_SubscriptOffset = i1387[14]
  i1386.m_SubscriptSize = i1387[15]
  i1386.m_UnderlineOffset = i1387[16]
  i1386.m_UnderlineThickness = i1387[17]
  i1386.m_StrikethroughOffset = i1387[18]
  i1386.m_StrikethroughThickness = i1387[19]
  i1386.m_TabWidth = i1387[20]
  return i1386
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i1388 = root || request.c( 'PlayerSO' )
  var i1389 = data
  i1388.maxSpeed = i1389[0]
  i1388.jumpImpulse = i1389[1]
  return i1388
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i1390 = root || request.c( 'FindMonsterDatabase' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i1393.length; i += 2) {
  request.r(i1393[i + 0], i1393[i + 1], 1, i1392, '')
  }
  i1390.database = i1392
  return i1390
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i1396 = root || request.c( 'MonsterSO' )
  var i1397 = data
  i1396.id = i1397[0]
  i1396.displayName = i1397[1]
  request.r(i1397[2], i1397[3], 0, i1396, 'icon')
  request.r(i1397[4], i1397[5], 0, i1396, 'prefab')
  i1396.rarity = i1397[6]
  i1396.rarityColor = new pc.Color(i1397[7], i1397[8], i1397[9], i1397[10])
  return i1396
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.TMP_Settings' )
  var i1399 = data
  i1398.assetVersion = i1399[0]
  i1398.m_TextWrappingMode = i1399[1]
  i1398.m_enableKerning = !!i1399[2]
  var i1401 = i1399[3]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(i1401[i + 0]);
  }
  i1398.m_ActiveFontFeatures = i1400
  i1398.m_enableExtraPadding = !!i1399[4]
  i1398.m_enableTintAllSprites = !!i1399[5]
  i1398.m_enableParseEscapeCharacters = !!i1399[6]
  i1398.m_EnableRaycastTarget = !!i1399[7]
  i1398.m_GetFontFeaturesAtRuntime = !!i1399[8]
  i1398.m_missingGlyphCharacter = i1399[9]
  i1398.m_ClearDynamicDataOnBuild = !!i1399[10]
  i1398.m_warningsDisabled = !!i1399[11]
  request.r(i1399[12], i1399[13], 0, i1398, 'm_defaultFontAsset')
  i1398.m_defaultFontAssetPath = i1399[14]
  i1398.m_defaultFontSize = i1399[15]
  i1398.m_defaultAutoSizeMinRatio = i1399[16]
  i1398.m_defaultAutoSizeMaxRatio = i1399[17]
  i1398.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1399[18], i1399[19] )
  i1398.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1399[20], i1399[21] )
  i1398.m_autoSizeTextContainer = !!i1399[22]
  i1398.m_IsTextObjectScaleStatic = !!i1399[23]
  var i1403 = i1399[24]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 1, i1402, '')
  }
  i1398.m_fallbackFontAssets = i1402
  i1398.m_matchMaterialPreset = !!i1399[25]
  i1398.m_HideSubTextObjects = !!i1399[26]
  request.r(i1399[27], i1399[28], 0, i1398, 'm_defaultSpriteAsset')
  i1398.m_defaultSpriteAssetPath = i1399[29]
  i1398.m_enableEmojiSupport = !!i1399[30]
  i1398.m_MissingCharacterSpriteUnicode = i1399[31]
  var i1405 = i1399[32]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1405.length; i += 2) {
  request.r(i1405[i + 0], i1405[i + 1], 1, i1404, '')
  }
  i1398.m_EmojiFallbackTextAssets = i1404
  i1398.m_defaultColorGradientPresetsPath = i1399[33]
  request.r(i1399[34], i1399[35], 0, i1398, 'm_defaultStyleSheet')
  i1398.m_StyleSheetsResourcePath = i1399[36]
  request.r(i1399[37], i1399[38], 0, i1398, 'm_leadingCharacters')
  request.r(i1399[39], i1399[40], 0, i1398, 'm_followingCharacters')
  i1398.m_UseModernHangulLineBreakingRules = !!i1399[41]
  return i1398
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'spriteSheet')
  var i1411 = i1409[2]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(request.d('TMPro.TMP_Sprite', i1411[i + 0]));
  }
  i1408.spriteInfoList = i1410
  var i1413 = i1409[3]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 1, i1412, '')
  }
  i1408.fallbackSpriteAssets = i1412
  var i1415 = i1409[4]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('TMPro.TMP_SpriteCharacter', i1415[i + 0]));
  }
  i1408.m_SpriteCharacterTable = i1414
  var i1417 = i1409[5]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('TMPro.TMP_SpriteGlyph', i1417[i + 0]));
  }
  i1408.m_GlyphTable = i1416
  i1408.m_Version = i1409[6]
  i1408.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1409[7], i1408.m_FaceInfo)
  request.r(i1409[8], i1409[9], 0, i1408, 'm_Material')
  return i1408
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1420 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.hashCode = i1421[1]
  i1420.unicode = i1421[2]
  i1420.pivot = new pc.Vec2( i1421[3], i1421[4] )
  request.r(i1421[5], i1421[6], 0, i1420, 'sprite')
  i1420.id = i1421[7]
  i1420.x = i1421[8]
  i1420.y = i1421[9]
  i1420.width = i1421[10]
  i1420.height = i1421[11]
  i1420.xOffset = i1421[12]
  i1420.yOffset = i1421[13]
  i1420.xAdvance = i1421[14]
  i1420.scale = i1421[15]
  return i1420
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1427 = data
  i1426.m_Name = i1427[0]
  i1426.m_ElementType = i1427[1]
  i1426.m_Unicode = i1427[2]
  i1426.m_GlyphIndex = i1427[3]
  i1426.m_Scale = i1427[4]
  return i1426
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'sprite')
  i1430.m_Index = i1431[2]
  i1430.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1431[3], i1430.m_Metrics)
  i1430.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1431[4], i1430.m_GlyphRect)
  i1430.m_Scale = i1431[5]
  i1430.m_AtlasIndex = i1431[6]
  i1430.m_ClassDefinitionType = i1431[7]
  return i1430
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.add(request.d('TMPro.TMP_Style', i1435[i + 0]));
  }
  i1432.m_StyleList = i1434
  return i1432
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.TMP_Style' )
  var i1439 = data
  i1438.m_Name = i1439[0]
  i1438.m_HashCode = i1439[1]
  i1438.m_OpeningDefinition = i1439[2]
  i1438.m_ClosingDefinition = i1439[3]
  i1438.m_OpeningTagArray = i1439[4]
  i1438.m_ClosingTagArray = i1439[5]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1441 = data
  var i1443 = i1441[0]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1443[i + 0]) );
  }
  i1440.files = i1442
  i1440.componentToPrefabIds = i1441[1]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1447 = data
  i1446.path = i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'unityObject')
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1451[i + 0]) );
  }
  i1448.scriptsExecutionOrder = i1450
  var i1453 = i1449[1]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1453[i + 0]) );
  }
  i1448.sortingLayers = i1452
  var i1455 = i1449[2]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1455[i + 0]) );
  }
  i1448.cullingLayers = i1454
  i1448.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1449[3], i1448.timeSettings)
  i1448.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1449[4], i1448.physicsSettings)
  i1448.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1449[5], i1448.physics2DSettings)
  i1448.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1449[6], i1448.qualitySettings)
  i1448.enableRealtimeShadows = !!i1449[7]
  i1448.enableAutoInstancing = !!i1449[8]
  i1448.enableStaticBatching = !!i1449[9]
  i1448.enableDynamicBatching = !!i1449[10]
  i1448.usePreservativeDynamicBatching = !!i1449[11]
  i1448.lightmapEncodingQuality = i1449[12]
  i1448.desiredColorSpace = i1449[13]
  var i1457 = i1449[14]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( i1457[i + 0] );
  }
  i1448.allTags = i1456
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1465 = data
  i1464.id = i1465[0]
  i1464.name = i1465[1]
  i1464.value = i1465[2]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1469 = data
  i1468.id = i1469[0]
  i1468.name = i1469[1]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1471 = data
  i1470.fixedDeltaTime = i1471[0]
  i1470.maximumDeltaTime = i1471[1]
  i1470.timeScale = i1471[2]
  i1470.maximumParticleTimestep = i1471[3]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1473 = data
  i1472.gravity = new pc.Vec3( i1473[0], i1473[1], i1473[2] )
  i1472.defaultSolverIterations = i1473[3]
  i1472.bounceThreshold = i1473[4]
  i1472.autoSyncTransforms = !!i1473[5]
  i1472.autoSimulation = !!i1473[6]
  var i1475 = i1473[7]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1475[i + 0]) );
  }
  i1472.collisionMatrix = i1474
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1479 = data
  i1478.enabled = !!i1479[0]
  i1478.layerId = i1479[1]
  i1478.otherLayerId = i1479[2]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'material')
  i1480.gravity = new pc.Vec2( i1481[2], i1481[3] )
  i1480.positionIterations = i1481[4]
  i1480.velocityIterations = i1481[5]
  i1480.velocityThreshold = i1481[6]
  i1480.maxLinearCorrection = i1481[7]
  i1480.maxAngularCorrection = i1481[8]
  i1480.maxTranslationSpeed = i1481[9]
  i1480.maxRotationSpeed = i1481[10]
  i1480.baumgarteScale = i1481[11]
  i1480.baumgarteTOIScale = i1481[12]
  i1480.timeToSleep = i1481[13]
  i1480.linearSleepTolerance = i1481[14]
  i1480.angularSleepTolerance = i1481[15]
  i1480.defaultContactOffset = i1481[16]
  i1480.autoSimulation = !!i1481[17]
  i1480.queriesHitTriggers = !!i1481[18]
  i1480.queriesStartInColliders = !!i1481[19]
  i1480.callbacksOnDisable = !!i1481[20]
  i1480.reuseCollisionCallbacks = !!i1481[21]
  i1480.autoSyncTransforms = !!i1481[22]
  var i1483 = i1481[23]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1483[i + 0]) );
  }
  i1480.collisionMatrix = i1482
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.layerId = i1487[1]
  i1486.otherLayerId = i1487[2]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1489 = data
  var i1491 = i1489[0]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1491[i + 0]) );
  }
  i1488.qualityLevels = i1490
  var i1493 = i1489[1]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1488.names = i1492
  i1488.shadows = i1489[2]
  i1488.anisotropicFiltering = i1489[3]
  i1488.antiAliasing = i1489[4]
  i1488.lodBias = i1489[5]
  i1488.shadowCascades = i1489[6]
  i1488.shadowDistance = i1489[7]
  i1488.shadowmaskMode = i1489[8]
  i1488.shadowProjection = i1489[9]
  i1488.shadowResolution = i1489[10]
  i1488.softParticles = !!i1489[11]
  i1488.softVegetation = !!i1489[12]
  i1488.activeColorSpace = i1489[13]
  i1488.desiredColorSpace = i1489[14]
  i1488.masterTextureLimit = i1489[15]
  i1488.maxQueuedFrames = i1489[16]
  i1488.particleRaycastBudget = i1489[17]
  i1488.pixelLightCount = i1489[18]
  i1488.realtimeReflectionProbes = !!i1489[19]
  i1488.shadowCascade2Split = i1489[20]
  i1488.shadowCascade4Split = new pc.Vec3( i1489[21], i1489[22], i1489[23] )
  i1488.streamingMipmapsActive = !!i1489[24]
  i1488.vSyncCount = i1489[25]
  i1488.asyncUploadBufferSize = i1489[26]
  i1488.asyncUploadTimeSlice = i1489[27]
  i1488.billboardsFaceCameraPosition = !!i1489[28]
  i1488.shadowNearPlaneOffset = i1489[29]
  i1488.streamingMipmapsMemoryBudget = i1489[30]
  i1488.maximumLODLevel = i1489[31]
  i1488.streamingMipmapsAddAllCameras = !!i1489[32]
  i1488.streamingMipmapsMaxLevelReduction = i1489[33]
  i1488.streamingMipmapsRenderersPerFrame = i1489[34]
  i1488.resolutionScalingFixedDPIFactor = i1489[35]
  i1488.streamingMipmapsMaxFileIORequests = i1489[36]
  i1488.currentQualityLevel = i1489[37]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1497 = data
  i1496.name = i1497[0]
  var i1499 = i1497[1]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1499[i + 0]) );
  }
  i1496.tos = i1498
  var i1501 = i1497[2]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( i1501[i + 0] );
  }
  i1496.constant = i1500
  i1496.isValid = !!i1497[3]
  i1496.isHuman = !!i1497[4]
  i1496.hasRootMotion = !!i1497[5]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1505 = data
  i1504.hash = i1505[0]
  i1504.path = i1505[1]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1509 = data
  i1508.weight = i1509[0]
  i1508.vertices = i1509[1]
  i1508.normals = i1509[2]
  i1508.tangents = i1509[3]
  return i1508
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1510 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1511 = data
  i1510.xPlacement = i1511[0]
  i1510.yPlacement = i1511[1]
  i1510.xAdvance = i1511[2]
  i1510.yAdvance = i1511[3]
  return i1510
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[50],"80":[36],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[89],"97":[89],"98":[89],"99":[89],"100":[89],"101":[89],"102":[36],"103":[5],"104":[105],"106":[105],"22":[21],"43":[49],"107":[24],"108":[21],"109":[30,21],"110":[5],"111":[30,21],"112":[21],"113":[21],"114":[5,21],"28":[21,30],"115":[116],"117":[116],"118":[116],"119":[21],"120":[21],"26":[22],"27":[30,21],"121":[21],"24":[22],"122":[21],"123":[21],"124":[21],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[30,21],"132":[21],"133":[21],"134":[21],"135":[21],"136":[30,21],"137":[21],"138":[52],"139":[52],"53":[52],"140":[52],"141":[36],"142":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MonoBehaviour","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.AudioClip","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UIRays","GameButton","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","FM3rdInput","UnityEngine.GameObject","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","PlayableAudio","LunaController","ControlsTutorial","HiddenMonster","Billboard","UnityEngine.SpriteRenderer","MorphUnlockedPanel","MorphHuntStory","MonsterSO","ScaleYoyo","UnityEngine.Cubemap","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BAH_V04";

Deserializers.lunaInitializationTime = "11/10/2026 04:13:27";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_BAH_V04_HoaiTT";

Deserializers.lunaAppID = "43843";

Deserializers.projectId = "21ebec284f99a524b91c2dde2f1e39ec";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1651";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4239";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BAH_V04";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "0682d7e5-8cb8-4cd9-ae66-b115f68be931";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

