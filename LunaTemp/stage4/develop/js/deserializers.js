var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointSpring' )
  var i751 = data
  i750.spring = i751[0]
  i750.damper = i751[1]
  i750.targetPosition = i751[2]
  return i750
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointMotor' )
  var i753 = data
  i752.m_TargetVelocity = i753[0]
  i752.m_Force = i753[1]
  i752.m_FreeSpin = i753[2]
  return i752
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointLimits' )
  var i755 = data
  i754.m_Min = i755[0]
  i754.m_Max = i755[1]
  i754.m_Bounciness = i755[2]
  i754.m_BounceMinVelocity = i755[3]
  i754.m_ContactDistance = i755[4]
  i754.minBounce = i755[5]
  i754.maxBounce = i755[6]
  return i754
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointDrive' )
  var i757 = data
  i756.m_PositionSpring = i757[0]
  i756.m_PositionDamper = i757[1]
  i756.m_MaximumForce = i757[2]
  i756.m_UseAcceleration = i757[3]
  return i756
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i759 = data
  i758.m_Spring = i759[0]
  i758.m_Damper = i759[1]
  return i758
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i761 = data
  i760.m_Limit = i761[0]
  i760.m_Bounciness = i761[1]
  i760.m_ContactDistance = i761[2]
  return i760
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i763 = data
  i762.m_ExtremumSlip = i763[0]
  i762.m_ExtremumValue = i763[1]
  i762.m_AsymptoteSlip = i763[2]
  i762.m_AsymptoteValue = i763[3]
  i762.m_Stiffness = i763[4]
  return i762
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i765 = data
  i764.m_LowerAngle = i765[0]
  i764.m_UpperAngle = i765[1]
  return i764
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i767 = data
  i766.m_MotorSpeed = i767[0]
  i766.m_MaximumMotorTorque = i767[1]
  return i766
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i769 = data
  i768.m_DampingRatio = i769[0]
  i768.m_Frequency = i769[1]
  i768.m_Angle = i769[2]
  return i768
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i771 = data
  i770.m_LowerTranslation = i771[0]
  i770.m_UpperTranslation = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i773 = data
  i772.position = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.scale = new pc.Vec3( i773[3], i773[4], i773[5] )
  i772.rotation = new pc.Quat(i773[6], i773[7], i773[8], i773[9])
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'sharedMesh')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'additionalVertexStreams')
  i776.enabled = !!i777[2]
  request.r(i777[3], i777[4], 0, i776, 'sharedMaterial')
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sharedMaterials = i778
  i776.receiveShadows = !!i777[6]
  i776.shadowCastingMode = i777[7]
  i776.sortingLayerID = i777[8]
  i776.sortingOrder = i777[9]
  i776.lightmapIndex = i777[10]
  i776.lightmapSceneIndex = i777[11]
  i776.lightmapScaleOffset = new pc.Vec4( i777[12], i777[13], i777[14], i777[15] )
  i776.lightProbeUsage = i777[16]
  i776.reflectionProbeUsage = i777[17]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'sharedMesh')
  i782.convex = !!i783[2]
  i782.enabled = !!i783[3]
  i782.isTrigger = !!i783[4]
  request.r(i783[5], i783[6], 0, i782, 'material')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i785 = data
  i784.name = i785[0]
  i784.tagId = i785[1]
  i784.enabled = !!i785[2]
  i784.isStatic = !!i785[3]
  i784.layer = i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i787 = data
  i786.center = new pc.Vec3( i787[0], i787[1], i787[2] )
  i786.radius = i787[3]
  i786.height = i787[4]
  i786.direction = i787[5]
  i786.enabled = !!i787[6]
  i786.isTrigger = !!i787[7]
  request.r(i787[8], i787[9], 0, i786, 'material')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i789 = data
  i788.center = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.size = new pc.Vec3( i789[3], i789[4], i789[5] )
  i788.enabled = !!i789[6]
  i788.isTrigger = !!i789[7]
  request.r(i789[8], i789[9], 0, i788, 'material')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i791 = data
  i790.center = new pc.Vec3( i791[0], i791[1], i791[2] )
  i790.radius = i791[3]
  i790.enabled = !!i791[4]
  i790.isTrigger = !!i791[5]
  request.r(i791[6], i791[7], 0, i790, 'material')
  return i790
}

Deserializers["SolidBox"] = function (request, data, root) {
  var i792 = root || request.c( 'SolidBox' )
  var i793 = data
  i792.liftOntoTop = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i795 = data
  i794.name = i795[0]
  i794.halfPrecision = !!i795[1]
  i794.useSimplification = !!i795[2]
  i794.useUInt32IndexFormat = !!i795[3]
  i794.vertexCount = i795[4]
  i794.aabb = i795[5]
  var i797 = i795[6]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( !!i797[i + 0] );
  }
  i794.streams = i796
  i794.vertices = i795[7]
  var i799 = i795[8]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i799[i + 0]) );
  }
  i794.subMeshes = i798
  var i801 = i795[9]
  var i800 = []
  for(var i = 0; i < i801.length; i += 16) {
    i800.push( new pc.Mat4().setData(i801[i + 0], i801[i + 1], i801[i + 2], i801[i + 3],  i801[i + 4], i801[i + 5], i801[i + 6], i801[i + 7],  i801[i + 8], i801[i + 9], i801[i + 10], i801[i + 11],  i801[i + 12], i801[i + 13], i801[i + 14], i801[i + 15]) );
  }
  i794.bindposes = i800
  var i803 = i795[10]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i803[i + 0]) );
  }
  i794.blendShapes = i802
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i809 = data
  i808.triangles = i809[0]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i815 = data
  i814.name = i815[0]
  var i817 = i815[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i817[i + 0]) );
  }
  i814.frames = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i818 = root || new pc.UnityMaterial()
  var i819 = data
  i818.name = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'shader')
  i818.renderQueue = i819[3]
  i818.enableInstancing = !!i819[4]
  var i821 = i819[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i821[i + 0]) );
  }
  i818.floatParameters = i820
  var i823 = i819[6]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i823[i + 0]) );
  }
  i818.colorParameters = i822
  var i825 = i819[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i825[i + 0]) );
  }
  i818.vectorParameters = i824
  var i827 = i819[8]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i827[i + 0]) );
  }
  i818.textureParameters = i826
  var i829 = i819[9]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i829[i + 0]) );
  }
  i818.materialFlags = i828
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i837 = data
  i836.name = i837[0]
  i836.value = new pc.Color(i837[1], i837[2], i837[3], i837[4])
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i841 = data
  i840.name = i841[0]
  i840.value = new pc.Vec4( i841[1], i841[2], i841[3], i841[4] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i845 = data
  i844.name = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'value')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i849 = data
  i848.name = i849[0]
  i848.enabled = !!i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i851 = data
  i850.name = i851[0]
  i850.width = i851[1]
  i850.height = i851[2]
  i850.mipmapCount = i851[3]
  i850.anisoLevel = i851[4]
  i850.filterMode = i851[5]
  i850.hdr = !!i851[6]
  i850.format = i851[7]
  i850.wrapMode = i851[8]
  i850.alphaIsTransparency = !!i851[9]
  i850.alphaSource = i851[10]
  i850.graphicsFormat = i851[11]
  i850.sRGBTexture = !!i851[12]
  i850.desiredColorSpace = i851[13]
  i850.wrapU = i851[14]
  i850.wrapV = i851[15]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i853 = data
  i852.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i853[0], i852.main)
  i852.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i853[1], i852.colorBySpeed)
  i852.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i853[2], i852.colorOverLifetime)
  i852.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i853[3], i852.emission)
  i852.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i853[4], i852.rotationBySpeed)
  i852.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i853[5], i852.rotationOverLifetime)
  i852.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i853[6], i852.shape)
  i852.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i853[7], i852.sizeBySpeed)
  i852.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i853[8], i852.sizeOverLifetime)
  i852.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i853[9], i852.textureSheetAnimation)
  i852.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i853[10], i852.velocityOverLifetime)
  i852.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i853[11], i852.noise)
  i852.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i853[12], i852.inheritVelocity)
  i852.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i853[13], i852.forceOverLifetime)
  i852.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i853[14], i852.limitVelocityOverLifetime)
  i852.useAutoRandomSeed = !!i853[15]
  i852.randomSeed = i853[16]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemMain()
  var i855 = data
  i854.duration = i855[0]
  i854.loop = !!i855[1]
  i854.prewarm = !!i855[2]
  i854.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.startDelay)
  i854.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.startLifetime)
  i854.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[5], i854.startSpeed)
  i854.startSize3D = !!i855[6]
  i854.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.startSizeX)
  i854.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.startSizeY)
  i854.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.startSizeZ)
  i854.startRotation3D = !!i855[10]
  i854.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[11], i854.startRotationX)
  i854.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[12], i854.startRotationY)
  i854.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[13], i854.startRotationZ)
  i854.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i855[14], i854.startColor)
  i854.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[15], i854.gravityModifier)
  i854.simulationSpace = i855[16]
  request.r(i855[17], i855[18], 0, i854, 'customSimulationSpace')
  i854.simulationSpeed = i855[19]
  i854.useUnscaledTime = !!i855[20]
  i854.scalingMode = i855[21]
  i854.playOnAwake = !!i855[22]
  i854.maxParticles = i855[23]
  i854.emitterVelocityMode = i855[24]
  i854.stopAction = i855[25]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxCurve()
  var i857 = data
  i856.mode = i857[0]
  i856.curveMin = new pc.AnimationCurve( { keys_flow: i857[1] } )
  i856.curveMax = new pc.AnimationCurve( { keys_flow: i857[2] } )
  i856.curveMultiplier = i857[3]
  i856.constantMin = i857[4]
  i856.constantMax = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i858 = root || new pc.MinMaxGradient()
  var i859 = data
  i858.mode = i859[0]
  i858.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[1], i858.gradientMin)
  i858.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[2], i858.gradientMax)
  i858.colorMin = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.colorMax = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i861 = data
  i860.mode = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i863[i + 0]) );
  }
  i860.colorKeys = i862
  var i865 = i861[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i865[i + 0]) );
  }
  i860.alphaKeys = i864
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemColorBySpeed()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i867[1], i866.color)
  i866.range = new pc.Vec2( i867[2], i867[3] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i871 = data
  i870.color = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.time = i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i875 = data
  i874.alpha = i875[0]
  i874.time = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemColorOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i877[1], i876.color)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemEmitter()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.rateOverTime)
  i878.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.rateOverDistance)
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i881[i + 0]) );
  }
  i878.bursts = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemBurst()
  var i885 = data
  i884.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[0], i884.count)
  i884.cycleCount = i885[1]
  i884.minCount = i885[2]
  i884.maxCount = i885[3]
  i884.repeatInterval = i885[4]
  i884.time = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  i886.range = new pc.Vec2( i887[5], i887[6] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemRotationOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemShape()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.shapeType = i891[1]
  i890.randomDirectionAmount = i891[2]
  i890.sphericalDirectionAmount = i891[3]
  i890.randomPositionAmount = i891[4]
  i890.alignToDirection = !!i891[5]
  i890.radius = i891[6]
  i890.radiusMode = i891[7]
  i890.radiusSpread = i891[8]
  i890.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[9], i890.radiusSpeed)
  i890.radiusThickness = i891[10]
  i890.angle = i891[11]
  i890.length = i891[12]
  i890.boxThickness = new pc.Vec3( i891[13], i891[14], i891[15] )
  i890.meshShapeType = i891[16]
  request.r(i891[17], i891[18], 0, i890, 'mesh')
  request.r(i891[19], i891[20], 0, i890, 'meshRenderer')
  request.r(i891[21], i891[22], 0, i890, 'skinnedMeshRenderer')
  i890.useMeshMaterialIndex = !!i891[23]
  i890.meshMaterialIndex = i891[24]
  i890.useMeshColors = !!i891[25]
  i890.normalOffset = i891[26]
  i890.arc = i891[27]
  i890.arcMode = i891[28]
  i890.arcSpread = i891[29]
  i890.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[30], i890.arcSpeed)
  i890.donutRadius = i891[31]
  i890.position = new pc.Vec3( i891[32], i891[33], i891[34] )
  i890.rotation = new pc.Vec3( i891[35], i891[36], i891[37] )
  i890.scale = new pc.Vec3( i891[38], i891[39], i891[40] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeBySpeed()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  i892.range = new pc.Vec2( i893[5], i893[6] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemSizeOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.mode = i897[1]
  i896.animation = i897[2]
  i896.numTilesX = i897[3]
  i896.numTilesY = i897[4]
  i896.useRandomRow = !!i897[5]
  i896.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[6], i896.frameOverTime)
  i896.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.startFrame)
  i896.cycleCount = i897[8]
  i896.rowIndex = i897[9]
  i896.flipU = i897[10]
  i896.flipV = i897[11]
  i896.spriteCount = i897[12]
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.sprites = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.radial)
  i902.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[5], i902.speedModifier)
  i902.space = i903[6]
  i902.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[7], i902.orbitalX)
  i902.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[8], i902.orbitalY)
  i902.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[9], i902.orbitalZ)
  i902.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[10], i902.orbitalOffsetX)
  i902.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[11], i902.orbitalOffsetY)
  i902.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[12], i902.orbitalOffsetZ)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemNoise()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.separateAxes = !!i905[1]
  i904.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.strengthX)
  i904.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.strengthY)
  i904.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[4], i904.strengthZ)
  i904.frequency = i905[5]
  i904.damping = !!i905[6]
  i904.octaveCount = i905[7]
  i904.octaveMultiplier = i905[8]
  i904.octaveScale = i905[9]
  i904.quality = i905[10]
  i904.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[11], i904.scrollSpeed)
  i904.scrollSpeedMultiplier = i905[12]
  i904.remapEnabled = !!i905[13]
  i904.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[14], i904.remapX)
  i904.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[15], i904.remapY)
  i904.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[16], i904.remapZ)
  i904.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[17], i904.positionAmount)
  i904.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[18], i904.rotationAmount)
  i904.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[19], i904.sizeAmount)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemInheritVelocity()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.mode = i907[1]
  i906.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.curve)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemForceOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.space = i909[4]
  i908.randomized = !!i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.limit)
  i910.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.limitX)
  i910.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.limitY)
  i910.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.limitZ)
  i910.dampen = i911[5]
  i910.separateAxes = !!i911[6]
  i910.space = i911[7]
  i910.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.drag)
  i910.multiplyDragByParticleSize = !!i911[9]
  i910.multiplyDragByParticleVelocity = !!i911[10]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'mesh')
  i912.meshCount = i913[2]
  i912.activeVertexStreamsCount = i913[3]
  i912.alignment = i913[4]
  i912.renderMode = i913[5]
  i912.sortMode = i913[6]
  i912.lengthScale = i913[7]
  i912.velocityScale = i913[8]
  i912.cameraVelocityScale = i913[9]
  i912.normalDirection = i913[10]
  i912.sortingFudge = i913[11]
  i912.minParticleSize = i913[12]
  i912.maxParticleSize = i913[13]
  i912.pivot = new pc.Vec3( i913[14], i913[15], i913[16] )
  request.r(i913[17], i913[18], 0, i912, 'trailMaterial')
  i912.applyActiveColorSpace = !!i913[19]
  i912.enabled = !!i913[20]
  request.r(i913[21], i913[22], 0, i912, 'sharedMaterial')
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[24]
  i912.shadowCastingMode = i913[25]
  i912.sortingLayerID = i913[26]
  i912.sortingOrder = i913[27]
  i912.lightmapIndex = i913[28]
  i912.lightmapSceneIndex = i913[29]
  i912.lightmapScaleOffset = new pc.Vec4( i913[30], i913[31], i913[32], i913[33] )
  i912.lightProbeUsage = i913[34]
  i912.reflectionProbeUsage = i913[35]
  return i912
}

Deserializers["FindMonsterManager"] = function (request, data, root) {
  var i916 = root || request.c( 'FindMonsterManager' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'database')
  var i919 = i917[2]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i916.listRespawn = i918
  request.r(i917[3], i917[4], 0, i916, 'playerTransform')
  request.r(i917[5], i917[6], 0, i916, 'targetTutorial')
  request.r(i917[7], i917[8], 0, i916, 'arrowTut')
  i916.guideToNext = !!i917[9]
  var i921 = i917[10]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('HiddenMonster')))
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 1, i920, '')
  }
  i916.monsters = i920
  i916.playerTouchSize = new pc.Vec3( i917[11], i917[12], i917[13] )
  request.r(i917[14], i917[15], 0, i916, 'hiddenMonsterPanel')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i927 = data
  i926.textureMode = i927[0]
  i926.alignment = i927[1]
  i926.widthCurve = new pc.AnimationCurve( { keys_flow: i927[2] } )
  i926.colorGradient = i927[3] ? new pc.ColorGradient(i927[3][0], i927[3][1], i927[3][2]) : null
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 3) {
    i928.push( new pc.Vec3( i929[i + 0], i929[i + 1], i929[i + 2] ) );
  }
  i926.positions = i928
  i926.positionCount = i927[5]
  i926.widthMultiplier = i927[6]
  i926.startWidth = i927[7]
  i926.endWidth = i927[8]
  i926.numCornerVertices = i927[9]
  i926.numCapVertices = i927[10]
  i926.useWorldSpace = !!i927[11]
  i926.loop = !!i927[12]
  i926.startColor = new pc.Color(i927[13], i927[14], i927[15], i927[16])
  i926.endColor = new pc.Color(i927[17], i927[18], i927[19], i927[20])
  i926.generateLightingData = !!i927[21]
  i926.enabled = !!i927[22]
  request.r(i927[23], i927[24], 0, i926, 'sharedMaterial')
  var i931 = i927[25]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i926.sharedMaterials = i930
  i926.receiveShadows = !!i927[26]
  i926.shadowCastingMode = i927[27]
  i926.sortingLayerID = i927[28]
  i926.sortingOrder = i927[29]
  i926.lightmapIndex = i927[30]
  i926.lightmapSceneIndex = i927[31]
  i926.lightmapScaleOffset = new pc.Vec4( i927[32], i927[33], i927[34], i927[35] )
  i926.lightProbeUsage = i927[36]
  i926.reflectionProbeUsage = i927[37]
  return i926
}

Deserializers["TurtorialArrow"] = function (request, data, root) {
  var i934 = root || request.c( 'TurtorialArrow' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'lineRenderer')
  i934.offset = new pc.Vec3( i935[2], i935[3], i935[4] )
  i934.planetSegments = i935[5]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'animatorController')
  request.r(i937[2], i937[3], 0, i936, 'avatar')
  i936.updateMode = i937[4]
  i936.hasTransformHierarchy = !!i937[5]
  i936.applyRootMotion = !!i937[6]
  var i939 = i937[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.humanBones = i938
  i936.enabled = !!i937[8]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'clip')
  request.r(i943[2], i943[3], 0, i942, 'outputAudioMixerGroup')
  i942.playOnAwake = !!i943[4]
  i942.loop = !!i943[5]
  i942.time = i943[6]
  i942.volume = i943[7]
  i942.pitch = i943[8]
  i942.enabled = !!i943[9]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i945 = data
  i944.pivot = new pc.Vec2( i945[0], i945[1] )
  i944.anchorMin = new pc.Vec2( i945[2], i945[3] )
  i944.anchorMax = new pc.Vec2( i945[4], i945[5] )
  i944.sizeDelta = new pc.Vec2( i945[6], i945[7] )
  i944.anchoredPosition3D = new pc.Vec3( i945[8], i945[9], i945[10] )
  i944.rotation = new pc.Quat(i945[11], i945[12], i945[13], i945[14])
  i944.scale = new pc.Vec3( i945[15], i945[16], i945[17] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i947 = data
  i946.planeDistance = i947[0]
  i946.referencePixelsPerUnit = i947[1]
  i946.isFallbackOverlay = !!i947[2]
  i946.renderMode = i947[3]
  i946.renderOrder = i947[4]
  i946.sortingLayerName = i947[5]
  i946.sortingOrder = i947[6]
  i946.scaleFactor = i947[7]
  request.r(i947[8], i947[9], 0, i946, 'worldCamera')
  i946.overrideSorting = !!i947[10]
  i946.pixelPerfect = !!i947[11]
  i946.targetDisplay = i947[12]
  i946.overridePixelPerfect = !!i947[13]
  i946.enabled = !!i947[14]
  return i946
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i949 = data
  i948.m_UiScaleMode = i949[0]
  i948.m_ReferencePixelsPerUnit = i949[1]
  i948.m_ScaleFactor = i949[2]
  i948.m_ReferenceResolution = new pc.Vec2( i949[3], i949[4] )
  i948.m_ScreenMatchMode = i949[5]
  i948.m_MatchWidthOrHeight = i949[6]
  i948.m_PhysicalUnit = i949[7]
  i948.m_FallbackScreenDPI = i949[8]
  i948.m_DefaultSpriteDPI = i949[9]
  i948.m_DynamicPixelsPerUnit = i949[10]
  i948.m_PresetInfoIsWorld = !!i949[11]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i951 = data
  i950.m_Alpha = i951[0]
  i950.m_Interactable = !!i951[1]
  i950.m_BlocksRaycasts = !!i951[2]
  i950.m_IgnoreParentGroups = !!i951[3]
  i950.enabled = !!i951[4]
  return i950
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i953 = data
  i952.m_IgnoreReversedGraphics = !!i953[0]
  i952.m_BlockingObjects = i953[1]
  i952.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i953[2] )
  return i952
}

Deserializers["HiddenMonsterPanel"] = function (request, data, root) {
  var i954 = root || request.c( 'HiddenMonsterPanel' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'icon')
  request.r(i955[2], i955[3], 0, i954, 'nameText')
  request.r(i955[4], i955[5], 0, i954, 'rarityText')
  request.r(i955[6], i955[7], 0, i954, 'card')
  i954.openSound = request.d('FMAudio', i955[8], i954.openSound)
  i954.autoHide = i955[9]
  request.r(i955[10], i955[11], 0, i954, 'tutorFinger')
  request.r(i955[12], i955[13], 0, i954, 'popRoot')
  i954.popDuration = i955[14]
  return i954
}

Deserializers["FMAudio"] = function (request, data, root) {
  var i956 = root || request.c( 'FMAudio' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'clip')
  i956.channel = i957[2]
  i956.volume = i957[3]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i959 = data
  i958.cullTransparentMesh = !!i959[0]
  return i958
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Image' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_Sprite')
  i960.m_Type = i961[2]
  i960.m_PreserveAspect = !!i961[3]
  i960.m_FillCenter = !!i961[4]
  i960.m_FillMethod = i961[5]
  i960.m_FillAmount = i961[6]
  i960.m_FillClockwise = !!i961[7]
  i960.m_FillOrigin = i961[8]
  i960.m_UseSpriteMesh = !!i961[9]
  i960.m_PixelsPerUnitMultiplier = i961[10]
  request.r(i961[11], i961[12], 0, i960, 'm_Material')
  i960.m_Maskable = !!i961[13]
  i960.m_Color = new pc.Color(i961[14], i961[15], i961[16], i961[17])
  i960.m_RaycastTarget = !!i961[18]
  i960.m_RaycastPadding = new pc.Vec4( i961[19], i961[20], i961[21], i961[22] )
  return i960
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i963 = data
  i962.m_hasFontAssetChanged = !!i963[0]
  request.r(i963[1], i963[2], 0, i962, 'm_baseMaterial')
  i962.m_maskOffset = new pc.Vec4( i963[3], i963[4], i963[5], i963[6] )
  i962.m_text = i963[7]
  i962.m_isRightToLeft = !!i963[8]
  request.r(i963[9], i963[10], 0, i962, 'm_fontAsset')
  request.r(i963[11], i963[12], 0, i962, 'm_sharedMaterial')
  var i965 = i963[13]
  var i964 = []
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 2, i964, '')
  }
  i962.m_fontSharedMaterials = i964
  request.r(i963[14], i963[15], 0, i962, 'm_fontMaterial')
  var i967 = i963[16]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i962.m_fontMaterials = i966
  i962.m_fontColor32 = UnityEngine.Color32.ConstructColor(i963[17], i963[18], i963[19], i963[20])
  i962.m_fontColor = new pc.Color(i963[21], i963[22], i963[23], i963[24])
  i962.m_enableVertexGradient = !!i963[25]
  i962.m_colorMode = i963[26]
  i962.m_fontColorGradient = request.d('TMPro.VertexGradient', i963[27], i962.m_fontColorGradient)
  request.r(i963[28], i963[29], 0, i962, 'm_fontColorGradientPreset')
  request.r(i963[30], i963[31], 0, i962, 'm_spriteAsset')
  i962.m_tintAllSprites = !!i963[32]
  request.r(i963[33], i963[34], 0, i962, 'm_StyleSheet')
  i962.m_TextStyleHashCode = i963[35]
  i962.m_overrideHtmlColors = !!i963[36]
  i962.m_faceColor = UnityEngine.Color32.ConstructColor(i963[37], i963[38], i963[39], i963[40])
  i962.m_fontSize = i963[41]
  i962.m_fontSizeBase = i963[42]
  i962.m_fontWeight = i963[43]
  i962.m_enableAutoSizing = !!i963[44]
  i962.m_fontSizeMin = i963[45]
  i962.m_fontSizeMax = i963[46]
  i962.m_fontStyle = i963[47]
  i962.m_HorizontalAlignment = i963[48]
  i962.m_VerticalAlignment = i963[49]
  i962.m_textAlignment = i963[50]
  i962.m_characterSpacing = i963[51]
  i962.m_characterHorizontalScale = i963[52]
  i962.m_wordSpacing = i963[53]
  i962.m_lineSpacing = i963[54]
  i962.m_lineSpacingMax = i963[55]
  i962.m_paragraphSpacing = i963[56]
  i962.m_charWidthMaxAdj = i963[57]
  i962.m_TextWrappingMode = i963[58]
  i962.m_wordWrappingRatios = i963[59]
  i962.m_overflowMode = i963[60]
  request.r(i963[61], i963[62], 0, i962, 'm_linkedTextComponent')
  request.r(i963[63], i963[64], 0, i962, 'parentLinkedComponent')
  i962.m_enableKerning = !!i963[65]
  var i969 = i963[66]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(i969[i + 0]);
  }
  i962.m_ActiveFontFeatures = i968
  i962.m_enableExtraPadding = !!i963[67]
  i962.checkPaddingRequired = !!i963[68]
  i962.m_isRichText = !!i963[69]
  i962.m_parseCtrlCharacters = !!i963[70]
  i962.m_isOrthographic = !!i963[71]
  i962.m_isCullingEnabled = !!i963[72]
  i962.m_horizontalMapping = i963[73]
  i962.m_verticalMapping = i963[74]
  i962.m_uvLineOffset = i963[75]
  i962.m_geometrySortingOrder = i963[76]
  i962.m_IsTextObjectScaleStatic = !!i963[77]
  i962.m_VertexBufferAutoSizeReduction = !!i963[78]
  i962.m_useMaxVisibleDescender = !!i963[79]
  i962.m_pageToDisplay = i963[80]
  i962.m_margin = new pc.Vec4( i963[81], i963[82], i963[83], i963[84] )
  i962.m_isUsingLegacyAnimationComponent = !!i963[85]
  i962.m_isVolumetricText = !!i963[86]
  request.r(i963[87], i963[88], 0, i962, 'm_Material')
  i962.m_EmojiFallbackSupport = !!i963[89]
  i962.m_Maskable = !!i963[90]
  i962.m_Color = new pc.Color(i963[91], i963[92], i963[93], i963[94])
  i962.m_RaycastTarget = !!i963[95]
  i962.m_RaycastPadding = new pc.Vec4( i963[96], i963[97], i963[98], i963[99] )
  return i962
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.VertexGradient' )
  var i971 = data
  i970.topLeft = new pc.Color(i971[0], i971[1], i971[2], i971[3])
  i970.topRight = new pc.Color(i971[4], i971[5], i971[6], i971[7])
  i970.bottomLeft = new pc.Color(i971[8], i971[9], i971[10], i971[11])
  i970.bottomRight = new pc.Color(i971[12], i971[13], i971[14], i971[15])
  return i970
}

Deserializers["UIRays"] = function (request, data, root) {
  var i974 = root || request.c( 'UIRays' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.rays = i976
  i974.lifetime = i975[1]
  i974.rate = i975[2]
  i974.startScale = i975[3]
  i974.maxAlpha = i975[4]
  return i974
}

Deserializers["GameButton"] = function (request, data, root) {
  var i980 = root || request.c( 'GameButton' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'background')
  request.r(i981[2], i981[3], 0, i980, 'icon')
  request.r(i981[4], i981[5], 0, i980, 'title')
  i980.scale = new pc.Vec3( i981[6], i981[7], i981[8] )
  i980.pressAudio = request.d('FMAudio', i981[9], i980.pressAudio)
  i980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i981[10], i980.m_OnClick)
  i980.m_Navigation = request.d('UnityEngine.UI.Navigation', i981[11], i980.m_Navigation)
  i980.m_Transition = i981[12]
  i980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i981[13], i980.m_Colors)
  i980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i981[14], i980.m_SpriteState)
  i980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i981[15], i980.m_AnimationTriggers)
  i980.m_Interactable = !!i981[16]
  request.r(i981[17], i981[18], 0, i980, 'm_TargetGraphic')
  return i980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i983 = data
  i982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i983[0], i982.m_PersistentCalls)
  return i982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('UnityEngine.Events.PersistentCall', i987[i + 0]));
  }
  i984.m_Calls = i986
  return i984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'm_Target')
  i990.m_TargetAssemblyTypeName = i991[2]
  i990.m_MethodName = i991[3]
  i990.m_Mode = i991[4]
  i990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i991[5], i990.m_Arguments)
  i990.m_CallState = i991[6]
  return i990
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'm_ObjectArgument')
  i992.m_ObjectArgumentAssemblyTypeName = i993[2]
  i992.m_IntArgument = i993[3]
  i992.m_FloatArgument = i993[4]
  i992.m_StringArgument = i993[5]
  i992.m_BoolArgument = !!i993[6]
  return i992
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i995 = data
  i994.m_Mode = i995[0]
  i994.m_WrapAround = !!i995[1]
  request.r(i995[2], i995[3], 0, i994, 'm_SelectOnUp')
  request.r(i995[4], i995[5], 0, i994, 'm_SelectOnDown')
  request.r(i995[6], i995[7], 0, i994, 'm_SelectOnLeft')
  request.r(i995[8], i995[9], 0, i994, 'm_SelectOnRight')
  return i994
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i997 = data
  i996.m_NormalColor = new pc.Color(i997[0], i997[1], i997[2], i997[3])
  i996.m_HighlightedColor = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  i996.m_PressedColor = new pc.Color(i997[8], i997[9], i997[10], i997[11])
  i996.m_SelectedColor = new pc.Color(i997[12], i997[13], i997[14], i997[15])
  i996.m_DisabledColor = new pc.Color(i997[16], i997[17], i997[18], i997[19])
  i996.m_ColorMultiplier = i997[20]
  i996.m_FadeDuration = i997[21]
  return i996
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'm_HighlightedSprite')
  request.r(i999[2], i999[3], 0, i998, 'm_PressedSprite')
  request.r(i999[4], i999[5], 0, i998, 'm_SelectedSprite')
  request.r(i999[6], i999[7], 0, i998, 'm_DisabledSprite')
  return i998
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1001 = data
  i1000.m_NormalTrigger = i1001[0]
  i1000.m_HighlightedTrigger = i1001[1]
  i1000.m_PressedTrigger = i1001[2]
  i1000.m_SelectedTrigger = i1001[3]
  i1000.m_DisabledTrigger = i1001[4]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.atlasId = i1003[1]
  i1002.mipmapCount = i1003[2]
  i1002.hdr = !!i1003[3]
  i1002.size = i1003[4]
  i1002.anisoLevel = i1003[5]
  i1002.filterMode = i1003[6]
  var i1005 = i1003[7]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 4) {
    i1004.push( UnityEngine.Rect.MinMaxRect(i1005[i + 0], i1005[i + 1], i1005[i + 2], i1005[i + 3]) );
  }
  i1002.rects = i1004
  i1002.wrapU = i1003[8]
  i1002.wrapV = i1003[9]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.index = i1009[1]
  i1008.startup = !!i1009[2]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1011 = data
  i1010.type = i1011[0]
  i1010.color = new pc.Color(i1011[1], i1011[2], i1011[3], i1011[4])
  i1010.cullingMask = i1011[5]
  i1010.intensity = i1011[6]
  i1010.range = i1011[7]
  i1010.spotAngle = i1011[8]
  i1010.shadows = i1011[9]
  i1010.shadowNormalBias = i1011[10]
  i1010.shadowBias = i1011[11]
  i1010.shadowStrength = i1011[12]
  i1010.shadowResolution = i1011[13]
  i1010.lightmapBakeType = i1011[14]
  i1010.renderMode = i1011[15]
  request.r(i1011[16], i1011[17], 0, i1010, 'cookie')
  i1010.cookieSize = i1011[18]
  i1010.shadowNearPlane = i1011[19]
  i1010.occlusionMaskChannel = i1011[20]
  i1010.isBaked = !!i1011[21]
  i1010.mixedLightingMode = i1011[22]
  i1010.enabled = !!i1011[23]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1013 = data
  i1012.aspect = i1013[0]
  i1012.orthographic = !!i1013[1]
  i1012.orthographicSize = i1013[2]
  i1012.backgroundColor = new pc.Color(i1013[3], i1013[4], i1013[5], i1013[6])
  i1012.nearClipPlane = i1013[7]
  i1012.farClipPlane = i1013[8]
  i1012.fieldOfView = i1013[9]
  i1012.depth = i1013[10]
  i1012.clearFlags = i1013[11]
  i1012.cullingMask = i1013[12]
  i1012.rect = i1013[13]
  request.r(i1013[14], i1013[15], 0, i1012, 'targetTexture')
  i1012.usePhysicalProperties = !!i1013[16]
  i1012.focalLength = i1013[17]
  i1012.sensorSize = new pc.Vec2( i1013[18], i1013[19] )
  i1012.lensShift = new pc.Vec2( i1013[20], i1013[21] )
  i1012.gateFit = i1013[22]
  i1012.commandBufferCount = i1013[23]
  i1012.cameraType = i1013[24]
  i1012.enabled = !!i1013[25]
  return i1012
}

Deserializers["ScreenDeltaInputSystem"] = function (request, data, root) {
  var i1014 = root || request.c( 'ScreenDeltaInputSystem' )
  var i1015 = data
  return i1014
}

Deserializers["MonsterProgressBar"] = function (request, data, root) {
  var i1016 = root || request.c( 'MonsterProgressBar' )
  var i1017 = data
  i1016.countSceneMonsters = !!i1017[0]
  i1016.startFound = i1017[1]
  i1016.total = i1017[2]
  request.r(i1017[3], i1017[4], 0, i1016, 'fill')
  request.r(i1017[5], i1017[6], 0, i1016, 'countText')
  request.r(i1017[7], i1017[8], 0, i1016, 'icon')
  i1016.fillSpeed = i1017[9]
  return i1016
}

Deserializers["StoryTextView"] = function (request, data, root) {
  var i1018 = root || request.c( 'StoryTextView' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'label')
  i1018.popDuration = i1019[2]
  i1018.pulseAmount = i1019[3]
  i1018.pulseSpeed = i1019[4]
  i1018.fadeDuration = i1019[5]
  return i1018
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.Button' )
  var i1021 = data
  i1020.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1021[0], i1020.m_OnClick)
  i1020.m_Navigation = request.d('UnityEngine.UI.Navigation', i1021[1], i1020.m_Navigation)
  i1020.m_Transition = i1021[2]
  i1020.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1021[3], i1020.m_Colors)
  i1020.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1021[4], i1020.m_SpriteState)
  i1020.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1021[5], i1020.m_AnimationTriggers)
  i1020.m_Interactable = !!i1021[6]
  request.r(i1021[7], i1021[8], 0, i1020, 'm_TargetGraphic')
  return i1020
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i1022 = root || request.c( 'JumpButton' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'character')
  return i1022
}

Deserializers["PlayableJoystick"] = function (request, data, root) {
  var i1024 = root || request.c( 'PlayableJoystick' )
  var i1025 = data
  i1024.handleRange = i1025[0]
  i1024.deadZone = i1025[1]
  i1024.floating = !!i1025[2]
  request.r(i1025[3], i1025[4], 0, i1024, 'background')
  request.r(i1025[5], i1025[6], 0, i1024, 'knob')
  return i1024
}

Deserializers["FMCharacter"] = function (request, data, root) {
  var i1026 = root || request.c( 'FMCharacter' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'planetTransform')
  request.r(i1027[2], i1027[3], 0, i1026, 'animator')
  request.r(i1027[4], i1027[5], 0, i1026, 'joystick')
  i1026._rotationRate = i1027[6]
  i1026._maxWalkSpeed = i1027[7]
  i1026._maxAcceleration = i1027[8]
  i1026._brakingDecelerationWalking = i1027[9]
  i1026._airControl = i1027[10]
  i1026._jumpImpulse = i1027[11]
  i1026._gravity = new pc.Vec3( i1027[12], i1027[13], i1027[14] )
  i1026._gravityScale = i1027[15]
  request.r(i1027[16], i1027[17], 0, i1026, '_camera')
  i1026.jumpSound = request.d('FMAudio', i1027[18], i1026.jumpSound)
  i1026.stepHeight = i1027[19]
  return i1026
}

Deserializers["FM3rdInput"] = function (request, data, root) {
  var i1028 = root || request.c( 'FM3rdInput' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'followTarget')
  i1028.followDistance = i1029[2]
  i1028.followMinDistance = i1029[3]
  i1028.followMaxDistance = i1029[4]
  i1028.maxPitch = i1029[5]
  i1028.minPitch = i1029[6]
  i1028.invertLook = !!i1029[7]
  i1028.lookSensitivity = new pc.Vec2( i1029[8], i1029[9] )
  request.r(i1029[10], i1029[11], 0, i1028, 'planetTransform')
  i1028.cameraDistance = i1029[12]
  i1028.cameraRadius = i1029[13]
  i1028.cameraReturnSpeed = i1029[14]
  request.r(i1029[15], i1029[16], 0, i1028, 'cam')
  request.r(i1029[17], i1029[18], 0, i1028, 'lookArea')
  i1028.extraRoll = i1029[19]
  i1028.autoReturnDelay = i1029[20]
  i1028.autoReturnSpeed = i1029[21]
  i1028.defaultPitch = i1029[22]
  i1028.enableAutoReturn = !!i1029[23]
  i1028.forwardSpeedMultiplier = i1029[24]
  i1028.backwardSpeedMultiplier = i1029[25]
  return i1028
}

Deserializers["FindMonsterPlayerControl"] = function (request, data, root) {
  var i1030 = root || request.c( 'FindMonsterPlayerControl' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'playerSO')
  request.r(i1031[2], i1031[3], 0, i1030, 'playerBase')
  request.r(i1031[4], i1031[5], 0, i1030, 'morphRoot')
  request.r(i1031[6], i1031[7], 0, i1030, 'poopFx')
  request.r(i1031[8], i1031[9], 0, i1030, 'poopRoot')
  request.r(i1031[10], i1031[11], 0, i1030, 'trailSpeed')
  i1030.popSound = request.d('FMAudio', i1031[12], i1030.popSound)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.center = new pc.Vec3( i1033[1], i1033[2], i1033[3] )
  i1032.radius = i1033[4]
  i1032.height = i1033[5]
  i1032.minMoveDistance = i1033[6]
  i1032.skinWidth = i1033[7]
  i1032.enableOverlapRecovery = !!i1033[8]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'sharedMesh')
  var i1037 = i1035[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.bones = i1036
  i1034.updateWhenOffscreen = !!i1035[3]
  i1034.localBounds = i1035[4]
  request.r(i1035[5], i1035[6], 0, i1034, 'rootBone')
  var i1039 = i1035[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1039[i + 0]) );
  }
  i1034.blendShapesWeights = i1038
  i1034.enabled = !!i1035[8]
  request.r(i1035[9], i1035[10], 0, i1034, 'sharedMaterial')
  var i1041 = i1035[11]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1034.sharedMaterials = i1040
  i1034.receiveShadows = !!i1035[12]
  i1034.shadowCastingMode = i1035[13]
  i1034.sortingLayerID = i1035[14]
  i1034.sortingOrder = i1035[15]
  i1034.lightmapIndex = i1035[16]
  i1034.lightmapSceneIndex = i1035[17]
  i1034.lightmapScaleOffset = new pc.Vec4( i1035[18], i1035[19], i1035[20], i1035[21] )
  i1034.lightProbeUsage = i1035[22]
  i1034.reflectionProbeUsage = i1035[23]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1045 = data
  i1044.weight = i1045[0]
  return i1044
}

Deserializers["CharacterFootstep"] = function (request, data, root) {
  var i1046 = root || request.c( 'CharacterFootstep' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'ecmCharacter')
  i1046.audioSource = request.d('FMAudio', i1047[2], i1046.audioSource)
  i1046.speed = i1047[3]
  return i1046
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_FirstSelected')
  i1048.m_sendNavigationEvents = !!i1049[2]
  i1048.m_DragThreshold = i1049[3]
  return i1048
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1051 = data
  i1050.m_HorizontalAxis = i1051[0]
  i1050.m_VerticalAxis = i1051[1]
  i1050.m_SubmitButton = i1051[2]
  i1050.m_CancelButton = i1051[3]
  i1050.m_InputActionsPerSecond = i1051[4]
  i1050.m_RepeatDelay = i1051[5]
  i1050.m_ForceModuleActive = !!i1051[6]
  i1050.m_SendPointerHoverToParent = !!i1051[7]
  return i1050
}

Deserializers["PlayableAudio"] = function (request, data, root) {
  var i1052 = root || request.c( 'PlayableAudio' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'source')
  request.r(i1053[2], i1053[3], 0, i1052, 'buttonClick')
  return i1052
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1054 = root || request.c( 'LunaController' )
  var i1055 = data
  i1054.LimitTimePlay = !!i1055[0]
  i1054.TimePlay = i1055[1]
  i1054.TypeMorph = i1055[2]
  i1054.LimitClick = !!i1055[3]
  i1054.MaxClick = i1055[4]
  request.r(i1055[5], i1055[6], 0, i1054, 'BGM')
  request.r(i1055[7], i1055[8], 0, i1054, 'musicSource')
  i1054.musicVolume = i1055[9]
  var i1057 = i1055[10]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1054.CTA = i1056
  request.r(i1055[11], i1055[12], 0, i1054, 'endUI')
  request.r(i1055[13], i1055[14], 0, i1054, 'endCard')
  return i1054
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

Deserializers["HiddenMonster"] = function (request, data, root) {
  var i1062 = root || request.c( 'HiddenMonster' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'checkMark')
  request.r(i1063[2], i1063[3], 0, i1062, 'claimFx')
  return i1062
}

Deserializers["Billboard"] = function (request, data, root) {
  var i1064 = root || request.c( 'Billboard' )
  var i1065 = data
  i1064.distanceToBillborad = i1065[0]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1067 = data
  i1066.color = new pc.Color(i1067[0], i1067[1], i1067[2], i1067[3])
  request.r(i1067[4], i1067[5], 0, i1066, 'sprite')
  i1066.flipX = !!i1067[6]
  i1066.flipY = !!i1067[7]
  i1066.drawMode = i1067[8]
  i1066.size = new pc.Vec2( i1067[9], i1067[10] )
  i1066.tileMode = i1067[11]
  i1066.adaptiveModeThreshold = i1067[12]
  i1066.maskInteraction = i1067[13]
  i1066.spriteSortPoint = i1067[14]
  i1066.enabled = !!i1067[15]
  request.r(i1067[16], i1067[17], 0, i1066, 'sharedMaterial')
  var i1069 = i1067[18]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1066.sharedMaterials = i1068
  i1066.receiveShadows = !!i1067[19]
  i1066.shadowCastingMode = i1067[20]
  i1066.sortingLayerID = i1067[21]
  i1066.sortingOrder = i1067[22]
  i1066.lightmapIndex = i1067[23]
  i1066.lightmapSceneIndex = i1067[24]
  i1066.lightmapScaleOffset = new pc.Vec4( i1067[25], i1067[26], i1067[27], i1067[28] )
  i1066.lightProbeUsage = i1067[29]
  i1066.reflectionProbeUsage = i1067[30]
  return i1066
}

Deserializers["MorphUnlockedPanel"] = function (request, data, root) {
  var i1070 = root || request.c( 'MorphUnlockedPanel' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('MorphUnlockedPanel+Card', i1073[i + 0]) );
  }
  i1070.cards = i1072
  request.r(i1071[1], i1071[2], 0, i1070, 'popRoot')
  i1070.popDuration = i1071[3]
  return i1070
}

Deserializers["MorphUnlockedPanel+Card"] = function (request, data, root) {
  var i1076 = root || request.c( 'MorphUnlockedPanel+Card' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'background')
  request.r(i1077[2], i1077[3], 0, i1076, 'icon')
  request.r(i1077[4], i1077[5], 0, i1076, 'nameText')
  request.r(i1077[6], i1077[7], 0, i1076, 'rarityText')
  return i1076
}

Deserializers["MorphHuntStory"] = function (request, data, root) {
  var i1078 = root || request.c( 'MorphHuntStory' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'player')
  request.r(i1079[2], i1079[3], 0, i1078, 'look')
  var i1081 = i1079[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.morphs = i1080
  var i1083 = i1079[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1078.morphOptions = i1082
  request.r(i1079[6], i1079[7], 0, i1078, 'startLookAt')
  i1078.startPitch = i1079[8]
  request.r(i1079[9], i1079[10], 0, i1078, 'hand')
  i1078.handOffset = new pc.Vec3( i1079[11], i1079[12], i1079[13] )
  request.r(i1079[14], i1079[15], 0, i1078, 'guideAnchor')
  request.r(i1079[16], i1079[17], 0, i1078, 'arrowAnchor')
  request.r(i1079[18], i1079[19], 0, i1078, 'guideLabel')
  request.r(i1079[20], i1079[21], 0, i1078, 'storyText')
  request.r(i1079[22], i1079[23], 0, i1078, 'unlockText')
  request.r(i1079[24], i1079[25], 0, i1078, 'shine')
  request.r(i1079[26], i1079[27], 0, i1078, 'finalPanel')
  i1078.introText = i1079[28]
  i1078.almostText = i1079[29]
  i1078.unlockedFormat = i1079[30]
  i1078.oneMoreText = i1079[31]
  i1078.introDelay = i1079[32]
  i1078.handHideDistance = i1079[33]
  i1078.almostDistance = i1079[34]
  i1078.almostHeight = i1079[35]
  i1078.cameraTurnDuration = i1079[36]
  i1078.finalDuration = i1079[37]
  i1078.arrowSwitchBelow = i1079[38]
  return i1078
}

Deserializers["ScaleYoyo"] = function (request, data, root) {
  var i1088 = root || request.c( 'ScaleYoyo' )
  var i1089 = data
  i1088.delay = i1089[0]
  i1088.duration = i1089[1]
  i1088.easeType = i1089[2]
  i1088.loops = i1089[3]
  i1088.loopType = i1089[4]
  i1088.animationType = i1089[5]
  i1088.endValueV3 = new pc.Vec3( i1089[6], i1089[7], i1089[8] )
  i1088.isRelative = !!i1089[9]
  i1088.autoPlay = !!i1089[10]
  return i1088
}

Deserializers["PointerHand"] = function (request, data, root) {
  var i1090 = root || request.c( 'PointerHand' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'pivot')
  request.r(i1091[2], i1091[3], 0, i1090, 'visual')
  request.r(i1091[4], i1091[5], 0, i1090, 'ripple')
  i1090.height = i1091[6]
  i1090.fingerDirection = new pc.Vec2( i1091[7], i1091[8] )
  i1090.cycle = i1091[9]
  i1090.pause = i1091[10]
  i1090.liftDistance = i1091[11]
  i1090.rippleScale = i1091[12]
  i1090.appearDuration = i1091[13]
  i1090.bob = !!i1091[14]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1093 = data
  i1092.ambientIntensity = i1093[0]
  i1092.reflectionIntensity = i1093[1]
  i1092.ambientMode = i1093[2]
  i1092.ambientLight = new pc.Color(i1093[3], i1093[4], i1093[5], i1093[6])
  i1092.ambientSkyColor = new pc.Color(i1093[7], i1093[8], i1093[9], i1093[10])
  i1092.ambientGroundColor = new pc.Color(i1093[11], i1093[12], i1093[13], i1093[14])
  i1092.ambientEquatorColor = new pc.Color(i1093[15], i1093[16], i1093[17], i1093[18])
  i1092.fogColor = new pc.Color(i1093[19], i1093[20], i1093[21], i1093[22])
  i1092.fogEndDistance = i1093[23]
  i1092.fogStartDistance = i1093[24]
  i1092.fogDensity = i1093[25]
  i1092.fog = !!i1093[26]
  request.r(i1093[27], i1093[28], 0, i1092, 'skybox')
  i1092.fogMode = i1093[29]
  var i1095 = i1093[30]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1095[i + 0]) );
  }
  i1092.lightmaps = i1094
  i1092.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1093[31], i1092.lightProbes)
  i1092.lightmapsMode = i1093[32]
  i1092.mixedBakeMode = i1093[33]
  i1092.environmentLightingMode = i1093[34]
  i1092.ambientProbe = new pc.SphericalHarmonicsL2(i1093[35])
  request.r(i1093[36], i1093[37], 0, i1092, 'customReflection')
  request.r(i1093[38], i1093[39], 0, i1092, 'defaultReflection')
  i1092.defaultReflectionMode = i1093[40]
  i1092.defaultReflectionResolution = i1093[41]
  i1092.sunLightObjectId = i1093[42]
  i1092.pixelLightCount = i1093[43]
  i1092.defaultReflectionHDR = !!i1093[44]
  i1092.hasLightDataAsset = !!i1093[45]
  i1092.hasManualGenerate = !!i1093[46]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'lightmapColor')
  request.r(i1099[2], i1099[3], 0, i1098, 'lightmapDirection')
  request.r(i1099[4], i1099[5], 0, i1098, 'shadowMask')
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1100 = root || new UnityEngine.LightProbes()
  var i1101 = data
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1109[i + 0]));
  }
  i1106.ShaderCompilationErrors = i1108
  i1106.name = i1107[1]
  i1106.guid = i1107[2]
  var i1111 = i1107[3]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.shaderDefinedKeywords = i1110
  var i1113 = i1107[4]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1113[i + 0]) );
  }
  i1106.passes = i1112
  var i1115 = i1107[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1115[i + 0]) );
  }
  i1106.usePasses = i1114
  var i1117 = i1107[6]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1117[i + 0]) );
  }
  i1106.defaultParameterValues = i1116
  request.r(i1107[7], i1107[8], 0, i1106, 'unityFallbackShader')
  i1106.readDepth = !!i1107[9]
  i1106.hasDepthOnlyPass = !!i1107[10]
  i1106.isCreatedByShaderGraph = !!i1107[11]
  i1106.disableBatching = !!i1107[12]
  i1106.compiled = !!i1107[13]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1121 = data
  i1120.shaderName = i1121[0]
  i1120.errorMessage = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1126 = root || new pc.UnityShaderPass()
  var i1127 = data
  i1126.id = i1127[0]
  i1126.subShaderIndex = i1127[1]
  i1126.name = i1127[2]
  i1126.passType = i1127[3]
  i1126.grabPassTextureName = i1127[4]
  i1126.usePass = !!i1127[5]
  i1126.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[6], i1126.zTest)
  i1126.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[7], i1126.zWrite)
  i1126.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[8], i1126.culling)
  i1126.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1127[9], i1126.blending)
  i1126.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1127[10], i1126.alphaBlending)
  i1126.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[11], i1126.colorWriteMask)
  i1126.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[12], i1126.offsetUnits)
  i1126.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[13], i1126.offsetFactor)
  i1126.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[14], i1126.stencilRef)
  i1126.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[15], i1126.stencilReadMask)
  i1126.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[16], i1126.stencilWriteMask)
  i1126.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[17], i1126.stencilOp)
  i1126.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[18], i1126.stencilOpFront)
  i1126.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[19], i1126.stencilOpBack)
  var i1129 = i1127[20]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1129[i + 0]) );
  }
  i1126.tags = i1128
  var i1131 = i1127[21]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.passDefinedKeywords = i1130
  var i1133 = i1127[22]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1133[i + 0]) );
  }
  i1126.passDefinedKeywordGroups = i1132
  var i1135 = i1127[23]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1135[i + 0]) );
  }
  i1126.variants = i1134
  var i1137 = i1127[24]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1137[i + 0]) );
  }
  i1126.excludedVariants = i1136
  i1126.hasDepthReader = !!i1127[25]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1139 = data
  i1138.val = i1139[0]
  i1138.name = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1141 = data
  i1140.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[0], i1140.src)
  i1140.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[1], i1140.dst)
  i1140.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[2], i1140.op)
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1143 = data
  i1142.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[0], i1142.pass)
  i1142.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[1], i1142.fail)
  i1142.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[2], i1142.zFail)
  i1142.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[3], i1142.comp)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.value = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1150.keywords = i1152
  i1150.hasDiscard = !!i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1157 = data
  i1156.passId = i1157[0]
  i1156.subShaderIndex = i1157[1]
  var i1159 = i1157[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.keywords = i1158
  i1156.vertexProgram = i1157[3]
  i1156.fragmentProgram = i1157[4]
  i1156.exportedForWebGl2 = !!i1157[5]
  i1156.readDepth = !!i1157[6]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'shader')
  i1162.pass = i1163[2]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.type = i1167[1]
  i1166.value = new pc.Vec4( i1167[2], i1167[3], i1167[4], i1167[5] )
  i1166.textureValue = i1167[6]
  i1166.shaderPropertyFlag = i1167[7]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1169 = data
  i1168.name = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'texture')
  i1168.aabb = i1169[3]
  i1168.vertices = i1169[4]
  i1168.triangles = i1169[5]
  i1168.textureRect = UnityEngine.Rect.MinMaxRect(i1169[6], i1169[7], i1169[8], i1169[9])
  i1168.packedRect = UnityEngine.Rect.MinMaxRect(i1169[10], i1169[11], i1169[12], i1169[13])
  i1168.border = new pc.Vec4( i1169[14], i1169[15], i1169[16], i1169[17] )
  i1168.transparency = i1169[18]
  i1168.bounds = i1169[19]
  i1168.pixelsPerUnit = i1169[20]
  i1168.textureWidth = i1169[21]
  i1168.textureHeight = i1169[22]
  i1168.nativeSize = new pc.Vec2( i1169[23], i1169[24] )
  i1168.pivot = new pc.Vec2( i1169[25], i1169[26] )
  i1168.textureRectOffset = new pc.Vec2( i1169[27], i1169[28] )
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1171 = data
  i1170.name = i1171[0]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.wrapMode = i1173[1]
  i1172.isLooping = !!i1173[2]
  i1172.length = i1173[3]
  var i1175 = i1173[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1175[i + 0]) );
  }
  i1172.curves = i1174
  var i1177 = i1173[5]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1177[i + 0]) );
  }
  i1172.events = i1176
  i1172.halfPrecision = !!i1173[6]
  i1172._frameRate = i1173[7]
  i1172.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1173[8], i1172.localBounds)
  i1172.hasMuscleCurves = !!i1173[9]
  var i1179 = i1173[10]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1172.clipMuscleConstant = i1178
  i1172.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1173[11], i1172.clipBindingConstant)
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1183 = data
  i1182.path = i1183[0]
  i1182.hash = i1183[1]
  i1182.componentType = i1183[2]
  i1182.property = i1183[3]
  i1182.keys = i1183[4]
  var i1185 = i1183[5]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1185[i + 0]) );
  }
  i1182.objectReferenceKeys = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1189 = data
  i1188.time = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'value')
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1193 = data
  i1192.functionName = i1193[0]
  i1192.floatParameter = i1193[1]
  i1192.intParameter = i1193[2]
  i1192.stringParameter = i1193[3]
  request.r(i1193[4], i1193[5], 0, i1192, 'objectReferenceParameter')
  i1192.time = i1193[6]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1195 = data
  i1194.center = new pc.Vec3( i1195[0], i1195[1], i1195[2] )
  i1194.extends = new pc.Vec3( i1195[3], i1195[4], i1195[5] )
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( i1201[i + 0] );
  }
  i1198.genericBindings = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.pptrCurveMapping = i1202
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1205 = data
  i1204.name = i1205[0]
  i1204.blendParameter = i1205[1]
  i1204.blendParameterY = i1205[2]
  i1204.blendType = i1205[3]
  var i1207 = i1205[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1207[i + 0]) );
  }
  i1204.children = i1206
  i1204.useAutomaticThresholds = !!i1205[5]
  i1204.minThreshold = i1205[6]
  i1204.maxThreshold = i1205[7]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'motion')
  i1210.threshold = i1211[2]
  i1210.position = new pc.Vec2( i1211[3], i1211[4] )
  i1210.timeScale = i1211[5]
  i1210.cycleOffset = i1211[6]
  i1210.directBlendParameter = i1211[7]
  i1210.mirror = !!i1211[8]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1213 = data
  i1212.name = i1213[0]
  var i1215 = i1213[1]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1215[i + 0]) );
  }
  i1212.layers = i1214
  var i1217 = i1213[2]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1217[i + 0]) );
  }
  i1212.parameters = i1216
  i1212.animationClips = i1213[3]
  i1212.avatarUnsupported = i1213[4]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.defaultWeight = i1221[1]
  i1220.blendingMode = i1221[2]
  i1220.avatarMask = i1221[3]
  i1220.syncedLayerIndex = i1221[4]
  i1220.syncedLayerAffectsTiming = !!i1221[5]
  i1220.syncedLayers = i1221[6]
  i1220.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1221[7], i1220.stateMachine)
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1223 = data
  i1222.id = i1223[0]
  i1222.name = i1223[1]
  i1222.path = i1223[2]
  var i1225 = i1223[3]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1225[i + 0]) );
  }
  i1222.states = i1224
  var i1227 = i1223[4]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1227[i + 0]) );
  }
  i1222.machines = i1226
  var i1229 = i1223[5]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1229[i + 0]) );
  }
  i1222.entryStateTransitions = i1228
  var i1231 = i1223[6]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1231[i + 0]) );
  }
  i1222.exitStateTransitions = i1230
  var i1233 = i1223[7]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1233[i + 0]) );
  }
  i1222.anyStateTransitions = i1232
  i1222.defaultStateId = i1223[8]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1237 = data
  i1236.id = i1237[0]
  i1236.name = i1237[1]
  i1236.cycleOffset = i1237[2]
  i1236.cycleOffsetParameter = i1237[3]
  i1236.cycleOffsetParameterActive = !!i1237[4]
  i1236.mirror = !!i1237[5]
  i1236.mirrorParameter = i1237[6]
  i1236.mirrorParameterActive = !!i1237[7]
  i1236.motionId = i1237[8]
  i1236.nameHash = i1237[9]
  i1236.fullPathHash = i1237[10]
  i1236.speed = i1237[11]
  i1236.speedParameter = i1237[12]
  i1236.speedParameterActive = !!i1237[13]
  i1236.tag = i1237[14]
  i1236.tagHash = i1237[15]
  i1236.writeDefaultValues = !!i1237[16]
  var i1239 = i1237[17]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1236.behaviours = i1238
  var i1241 = i1237[18]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1241[i + 0]) );
  }
  i1236.transitions = i1240
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1247 = data
  i1246.fullPath = i1247[0]
  i1246.canTransitionToSelf = !!i1247[1]
  i1246.duration = i1247[2]
  i1246.exitTime = i1247[3]
  i1246.hasExitTime = !!i1247[4]
  i1246.hasFixedDuration = !!i1247[5]
  i1246.interruptionSource = i1247[6]
  i1246.offset = i1247[7]
  i1246.orderedInterruption = !!i1247[8]
  i1246.destinationStateId = i1247[9]
  i1246.isExit = !!i1247[10]
  i1246.mute = !!i1247[11]
  i1246.solo = !!i1247[12]
  var i1249 = i1247[13]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1249[i + 0]) );
  }
  i1246.conditions = i1248
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1253 = data
  i1252.mode = i1253[0]
  i1252.parameter = i1253[1]
  i1252.threshold = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1259 = data
  i1258.destinationStateId = i1259[0]
  i1258.isExit = !!i1259[1]
  i1258.mute = !!i1259[2]
  i1258.solo = !!i1259[3]
  var i1261 = i1259[4]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1261[i + 0]) );
  }
  i1258.conditions = i1260
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1265 = data
  i1264.defaultBool = !!i1265[0]
  i1264.defaultFloat = i1265[1]
  i1264.defaultInt = i1265[2]
  i1264.name = i1265[3]
  i1264.nameHash = i1265[4]
  i1264.type = i1265[5]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1267 = data
  i1266.name = i1267[0]
  request.r(i1267[1], i1267[2], 0, i1266, '_runtimeAnimatorController')
  var i1269 = i1267[3]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 2, i1268, '')
  }
  i1266._originalAnimationClips = i1268
  var i1271 = i1267[4]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 2, i1270, '')
  }
  i1266._overrideAnimationClips = i1270
  var i1273 = i1267[5]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 2, i1272, '')
  }
  i1266._animationClips = i1272
  var i1275 = i1267[6]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('UnityEngine.AnimationClipPair', i1275[i + 0]) );
  }
  i1266._animationClipPairs = i1274
  return i1266
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'originalClip')
  request.r(i1281[2], i1281[3], 0, i1280, 'overrideClip')
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.bytes64 = i1283[1]
  i1282.data = i1283[2]
  return i1282
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1285 = data
  i1284.normalStyle = i1285[0]
  i1284.normalSpacingOffset = i1285[1]
  i1284.boldStyle = i1285[2]
  i1284.boldSpacing = i1285[3]
  i1284.italicStyle = i1285[4]
  i1284.tabSize = i1285[5]
  request.r(i1285[6], i1285[7], 0, i1284, 'atlas')
  i1284.m_SourceFontFileGUID = i1285[8]
  i1284.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1285[9], i1284.m_CreationSettings)
  request.r(i1285[10], i1285[11], 0, i1284, 'm_SourceFontFile')
  i1284.m_SourceFontFilePath = i1285[12]
  i1284.m_AtlasPopulationMode = i1285[13]
  i1284.InternalDynamicOS = !!i1285[14]
  var i1287 = i1285[15]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('UnityEngine.TextCore.Glyph', i1287[i + 0]));
  }
  i1284.m_GlyphTable = i1286
  var i1289 = i1285[16]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_Character', i1289[i + 0]));
  }
  i1284.m_CharacterTable = i1288
  var i1291 = i1285[17]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 2, i1290, '')
  }
  i1284.m_AtlasTextures = i1290
  i1284.m_AtlasTextureIndex = i1285[18]
  i1284.m_IsMultiAtlasTexturesEnabled = !!i1285[19]
  i1284.m_GetFontFeatures = !!i1285[20]
  i1284.m_ClearDynamicDataOnBuild = !!i1285[21]
  i1284.m_AtlasWidth = i1285[22]
  i1284.m_AtlasHeight = i1285[23]
  i1284.m_AtlasPadding = i1285[24]
  i1284.m_AtlasRenderMode = i1285[25]
  var i1293 = i1285[26]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('UnityEngine.TextCore.GlyphRect', i1293[i + 0]));
  }
  i1284.m_UsedGlyphRects = i1292
  var i1295 = i1285[27]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('UnityEngine.TextCore.GlyphRect', i1295[i + 0]));
  }
  i1284.m_FreeGlyphRects = i1294
  i1284.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1285[28], i1284.m_FontFeatureTable)
  i1284.m_ShouldReimportFontFeatures = !!i1285[29]
  var i1297 = i1285[30]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1284.m_FallbackFontAssetTable = i1296
  var i1299 = i1285[31]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('TMPro.TMP_FontWeightPair', i1299[i + 0]) );
  }
  i1284.m_FontWeightTable = i1298
  var i1301 = i1285[32]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('TMPro.TMP_FontWeightPair', i1301[i + 0]) );
  }
  i1284.fontWeights = i1300
  i1284.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1285[33], i1284.m_fontInfo)
  var i1303 = i1285[34]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.TMP_Glyph', i1303[i + 0]));
  }
  i1284.m_glyphInfoList = i1302
  i1284.m_KerningTable = request.d('TMPro.KerningTable', i1285[35], i1284.m_KerningTable)
  var i1305 = i1285[36]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 1, i1304, '')
  }
  i1284.fallbackFontAssets = i1304
  i1284.m_Version = i1285[37]
  i1284.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1285[38], i1284.m_FaceInfo)
  request.r(i1285[39], i1285[40], 0, i1284, 'm_Material')
  return i1284
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1307 = data
  i1306.sourceFontFileName = i1307[0]
  i1306.sourceFontFileGUID = i1307[1]
  i1306.faceIndex = i1307[2]
  i1306.pointSizeSamplingMode = i1307[3]
  i1306.pointSize = i1307[4]
  i1306.padding = i1307[5]
  i1306.paddingMode = i1307[6]
  i1306.packingMode = i1307[7]
  i1306.atlasWidth = i1307[8]
  i1306.atlasHeight = i1307[9]
  i1306.characterSetSelectionMode = i1307[10]
  i1306.characterSequence = i1307[11]
  i1306.referencedFontAssetGUID = i1307[12]
  i1306.referencedTextAssetGUID = i1307[13]
  i1306.fontStyle = i1307[14]
  i1306.fontStyleModifier = i1307[15]
  i1306.renderMode = i1307[16]
  i1306.includeFontFeatures = !!i1307[17]
  return i1306
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1311 = data
  i1310.m_Index = i1311[0]
  i1310.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1311[1], i1310.m_Metrics)
  i1310.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1311[2], i1310.m_GlyphRect)
  i1310.m_Scale = i1311[3]
  i1310.m_AtlasIndex = i1311[4]
  i1310.m_ClassDefinitionType = i1311[5]
  return i1310
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1313 = data
  i1312.m_Width = i1313[0]
  i1312.m_Height = i1313[1]
  i1312.m_HorizontalBearingX = i1313[2]
  i1312.m_HorizontalBearingY = i1313[3]
  i1312.m_HorizontalAdvance = i1313[4]
  return i1312
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1315 = data
  i1314.m_X = i1315[0]
  i1314.m_Y = i1315[1]
  i1314.m_Width = i1315[2]
  i1314.m_Height = i1315[3]
  return i1314
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_Character' )
  var i1319 = data
  i1318.m_ElementType = i1319[0]
  i1318.m_Unicode = i1319[1]
  i1318.m_GlyphIndex = i1319[2]
  i1318.m_Scale = i1319[3]
  return i1318
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.MultipleSubstitutionRecord', i1327[i + 0]));
  }
  i1324.m_MultipleSubstitutionRecords = i1326
  var i1329 = i1325[1]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.LigatureSubstitutionRecord', i1329[i + 0]));
  }
  i1324.m_LigatureSubstitutionRecords = i1328
  var i1331 = i1325[2]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1331[i + 0]));
  }
  i1324.m_GlyphPairAdjustmentRecords = i1330
  var i1333 = i1325[3]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1333[i + 0]));
  }
  i1324.m_MarkToBaseAdjustmentRecords = i1332
  var i1335 = i1325[4]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1335[i + 0]));
  }
  i1324.m_MarkToMarkAdjustmentRecords = i1334
  return i1324
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1339 = data
  i1338.m_TargetGlyphID = i1339[0]
  i1338.m_SubstituteGlyphIDs = i1339[1]
  return i1338
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1343 = data
  i1342.m_ComponentGlyphIDs = i1343[0]
  i1342.m_LigatureGlyphID = i1343[1]
  return i1342
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1347 = data
  i1346.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1347[0], i1346.m_FirstAdjustmentRecord)
  i1346.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1347[1], i1346.m_SecondAdjustmentRecord)
  i1346.m_FeatureLookupFlags = i1347[2]
  return i1346
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1349 = data
  i1348.m_GlyphIndex = i1349[0]
  i1348.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1349[1], i1348.m_GlyphValueRecord)
  return i1348
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1351 = data
  i1350.m_XPlacement = i1351[0]
  i1350.m_YPlacement = i1351[1]
  i1350.m_XAdvance = i1351[2]
  i1350.m_YAdvance = i1351[3]
  return i1350
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1355 = data
  i1354.m_BaseGlyphID = i1355[0]
  i1354.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1355[1], i1354.m_BaseGlyphAnchorPoint)
  i1354.m_MarkGlyphID = i1355[2]
  i1354.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1355[3], i1354.m_MarkPositionAdjustment)
  return i1354
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1357 = data
  i1356.m_XCoordinate = i1357[0]
  i1356.m_YCoordinate = i1357[1]
  return i1356
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1359 = data
  i1358.m_XPositionAdjustment = i1359[0]
  i1358.m_YPositionAdjustment = i1359[1]
  return i1358
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1363 = data
  i1362.m_BaseMarkGlyphID = i1363[0]
  i1362.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1363[1], i1362.m_BaseMarkGlyphAnchorPoint)
  i1362.m_CombiningMarkGlyphID = i1363[2]
  i1362.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1363[3], i1362.m_CombiningMarkPositionAdjustment)
  return i1362
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1369 = data
  request.r(i1369[0], i1369[1], 0, i1368, 'regularTypeface')
  request.r(i1369[2], i1369[3], 0, i1368, 'italicTypeface')
  return i1368
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1371 = data
  i1370.Name = i1371[0]
  i1370.PointSize = i1371[1]
  i1370.Scale = i1371[2]
  i1370.CharacterCount = i1371[3]
  i1370.LineHeight = i1371[4]
  i1370.Baseline = i1371[5]
  i1370.Ascender = i1371[6]
  i1370.CapHeight = i1371[7]
  i1370.Descender = i1371[8]
  i1370.CenterLine = i1371[9]
  i1370.SuperscriptOffset = i1371[10]
  i1370.SubscriptOffset = i1371[11]
  i1370.SubSize = i1371[12]
  i1370.Underline = i1371[13]
  i1370.UnderlineThickness = i1371[14]
  i1370.strikethrough = i1371[15]
  i1370.strikethroughThickness = i1371[16]
  i1370.TabWidth = i1371[17]
  i1370.Padding = i1371[18]
  i1370.AtlasWidth = i1371[19]
  i1370.AtlasHeight = i1371[20]
  return i1370
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.x = i1375[1]
  i1374.y = i1375[2]
  i1374.width = i1375[3]
  i1374.height = i1375[4]
  i1374.xOffset = i1375[5]
  i1374.yOffset = i1375[6]
  i1374.xAdvance = i1375[7]
  i1374.scale = i1375[8]
  return i1374
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.KerningTable' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('TMPro.KerningPair', i1379[i + 0]));
  }
  i1376.kerningPairs = i1378
  return i1376
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.KerningPair' )
  var i1383 = data
  i1382.xOffset = i1383[0]
  i1382.m_FirstGlyph = i1383[1]
  i1382.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1383[2], i1382.m_FirstGlyphAdjustments)
  i1382.m_SecondGlyph = i1383[3]
  i1382.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1383[4], i1382.m_SecondGlyphAdjustments)
  i1382.m_IgnoreSpacingAdjustments = !!i1383[5]
  return i1382
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1385 = data
  i1384.m_FaceIndex = i1385[0]
  i1384.m_FamilyName = i1385[1]
  i1384.m_StyleName = i1385[2]
  i1384.m_PointSize = i1385[3]
  i1384.m_Scale = i1385[4]
  i1384.m_UnitsPerEM = i1385[5]
  i1384.m_LineHeight = i1385[6]
  i1384.m_AscentLine = i1385[7]
  i1384.m_CapLine = i1385[8]
  i1384.m_MeanLine = i1385[9]
  i1384.m_Baseline = i1385[10]
  i1384.m_DescentLine = i1385[11]
  i1384.m_SuperscriptOffset = i1385[12]
  i1384.m_SuperscriptSize = i1385[13]
  i1384.m_SubscriptOffset = i1385[14]
  i1384.m_SubscriptSize = i1385[15]
  i1384.m_UnderlineOffset = i1385[16]
  i1384.m_UnderlineThickness = i1385[17]
  i1384.m_StrikethroughOffset = i1385[18]
  i1384.m_StrikethroughThickness = i1385[19]
  i1384.m_TabWidth = i1385[20]
  return i1384
}

Deserializers["PlayerSO"] = function (request, data, root) {
  var i1386 = root || request.c( 'PlayerSO' )
  var i1387 = data
  i1386.maxSpeed = i1387[0]
  i1386.jumpImpulse = i1387[1]
  return i1386
}

Deserializers["FindMonsterDatabase"] = function (request, data, root) {
  var i1388 = root || request.c( 'FindMonsterDatabase' )
  var i1389 = data
  var i1391 = i1389[0]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterSO')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1388.database = i1390
  return i1388
}

Deserializers["MonsterSO"] = function (request, data, root) {
  var i1394 = root || request.c( 'MonsterSO' )
  var i1395 = data
  i1394.id = i1395[0]
  i1394.displayName = i1395[1]
  request.r(i1395[2], i1395[3], 0, i1394, 'icon')
  request.r(i1395[4], i1395[5], 0, i1394, 'prefab')
  i1394.rarity = i1395[6]
  i1394.rarityColor = new pc.Color(i1395[7], i1395[8], i1395[9], i1395[10])
  return i1394
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_Settings' )
  var i1397 = data
  i1396.assetVersion = i1397[0]
  i1396.m_TextWrappingMode = i1397[1]
  i1396.m_enableKerning = !!i1397[2]
  var i1399 = i1397[3]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.add(i1399[i + 0]);
  }
  i1396.m_ActiveFontFeatures = i1398
  i1396.m_enableExtraPadding = !!i1397[4]
  i1396.m_enableTintAllSprites = !!i1397[5]
  i1396.m_enableParseEscapeCharacters = !!i1397[6]
  i1396.m_EnableRaycastTarget = !!i1397[7]
  i1396.m_GetFontFeaturesAtRuntime = !!i1397[8]
  i1396.m_missingGlyphCharacter = i1397[9]
  i1396.m_ClearDynamicDataOnBuild = !!i1397[10]
  i1396.m_warningsDisabled = !!i1397[11]
  request.r(i1397[12], i1397[13], 0, i1396, 'm_defaultFontAsset')
  i1396.m_defaultFontAssetPath = i1397[14]
  i1396.m_defaultFontSize = i1397[15]
  i1396.m_defaultAutoSizeMinRatio = i1397[16]
  i1396.m_defaultAutoSizeMaxRatio = i1397[17]
  i1396.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1397[18], i1397[19] )
  i1396.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1397[20], i1397[21] )
  i1396.m_autoSizeTextContainer = !!i1397[22]
  i1396.m_IsTextObjectScaleStatic = !!i1397[23]
  var i1401 = i1397[24]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1401.length; i += 2) {
  request.r(i1401[i + 0], i1401[i + 1], 1, i1400, '')
  }
  i1396.m_fallbackFontAssets = i1400
  i1396.m_matchMaterialPreset = !!i1397[25]
  i1396.m_HideSubTextObjects = !!i1397[26]
  request.r(i1397[27], i1397[28], 0, i1396, 'm_defaultSpriteAsset')
  i1396.m_defaultSpriteAssetPath = i1397[29]
  i1396.m_enableEmojiSupport = !!i1397[30]
  i1396.m_MissingCharacterSpriteUnicode = i1397[31]
  var i1403 = i1397[32]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 1, i1402, '')
  }
  i1396.m_EmojiFallbackTextAssets = i1402
  i1396.m_defaultColorGradientPresetsPath = i1397[33]
  request.r(i1397[34], i1397[35], 0, i1396, 'm_defaultStyleSheet')
  i1396.m_StyleSheetsResourcePath = i1397[36]
  request.r(i1397[37], i1397[38], 0, i1396, 'm_leadingCharacters')
  request.r(i1397[39], i1397[40], 0, i1396, 'm_followingCharacters')
  i1396.m_UseModernHangulLineBreakingRules = !!i1397[41]
  return i1396
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'spriteSheet')
  var i1409 = i1407[2]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('TMPro.TMP_Sprite', i1409[i + 0]));
  }
  i1406.spriteInfoList = i1408
  var i1411 = i1407[3]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.fallbackSpriteAssets = i1410
  var i1413 = i1407[4]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('TMPro.TMP_SpriteCharacter', i1413[i + 0]));
  }
  i1406.m_SpriteCharacterTable = i1412
  var i1415 = i1407[5]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('TMPro.TMP_SpriteGlyph', i1415[i + 0]));
  }
  i1406.m_GlyphTable = i1414
  i1406.m_Version = i1407[6]
  i1406.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1407[7], i1406.m_FaceInfo)
  request.r(i1407[8], i1407[9], 0, i1406, 'm_Material')
  return i1406
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.hashCode = i1419[1]
  i1418.unicode = i1419[2]
  i1418.pivot = new pc.Vec2( i1419[3], i1419[4] )
  request.r(i1419[5], i1419[6], 0, i1418, 'sprite')
  i1418.id = i1419[7]
  i1418.x = i1419[8]
  i1418.y = i1419[9]
  i1418.width = i1419[10]
  i1418.height = i1419[11]
  i1418.xOffset = i1419[12]
  i1418.yOffset = i1419[13]
  i1418.xAdvance = i1419[14]
  i1418.scale = i1419[15]
  return i1418
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1425 = data
  i1424.m_Name = i1425[0]
  i1424.m_ElementType = i1425[1]
  i1424.m_Unicode = i1425[2]
  i1424.m_GlyphIndex = i1425[3]
  i1424.m_Scale = i1425[4]
  return i1424
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'sprite')
  i1428.m_Index = i1429[2]
  i1428.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1429[3], i1428.m_Metrics)
  i1428.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1429[4], i1428.m_GlyphRect)
  i1428.m_Scale = i1429[5]
  i1428.m_AtlasIndex = i1429[6]
  i1428.m_ClassDefinitionType = i1429[7]
  return i1428
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.add(request.d('TMPro.TMP_Style', i1433[i + 0]));
  }
  i1430.m_StyleList = i1432
  return i1430
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Style' )
  var i1437 = data
  i1436.m_Name = i1437[0]
  i1436.m_HashCode = i1437[1]
  i1436.m_OpeningDefinition = i1437[2]
  i1436.m_ClosingDefinition = i1437[3]
  i1436.m_OpeningTagArray = i1437[4]
  i1436.m_ClosingTagArray = i1437[5]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1441[i + 0]) );
  }
  i1438.files = i1440
  i1438.componentToPrefabIds = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1445 = data
  i1444.path = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'unityObject')
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1449[i + 0]) );
  }
  i1446.scriptsExecutionOrder = i1448
  var i1451 = i1447[1]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1451[i + 0]) );
  }
  i1446.sortingLayers = i1450
  var i1453 = i1447[2]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1453[i + 0]) );
  }
  i1446.cullingLayers = i1452
  i1446.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1447[3], i1446.timeSettings)
  i1446.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1447[4], i1446.physicsSettings)
  i1446.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1447[5], i1446.physics2DSettings)
  i1446.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1447[6], i1446.qualitySettings)
  i1446.enableRealtimeShadows = !!i1447[7]
  i1446.enableAutoInstancing = !!i1447[8]
  i1446.enableStaticBatching = !!i1447[9]
  i1446.enableDynamicBatching = !!i1447[10]
  i1446.usePreservativeDynamicBatching = !!i1447[11]
  i1446.lightmapEncodingQuality = i1447[12]
  i1446.desiredColorSpace = i1447[13]
  var i1455 = i1447[14]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1446.allTags = i1454
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.value = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1463 = data
  i1462.id = i1463[0]
  i1462.name = i1463[1]
  i1462.value = i1463[2]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1467 = data
  i1466.id = i1467[0]
  i1466.name = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1469 = data
  i1468.fixedDeltaTime = i1469[0]
  i1468.maximumDeltaTime = i1469[1]
  i1468.timeScale = i1469[2]
  i1468.maximumParticleTimestep = i1469[3]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1471 = data
  i1470.gravity = new pc.Vec3( i1471[0], i1471[1], i1471[2] )
  i1470.defaultSolverIterations = i1471[3]
  i1470.bounceThreshold = i1471[4]
  i1470.autoSyncTransforms = !!i1471[5]
  i1470.autoSimulation = !!i1471[6]
  var i1473 = i1471[7]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1473[i + 0]) );
  }
  i1470.collisionMatrix = i1472
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.layerId = i1477[1]
  i1476.otherLayerId = i1477[2]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'material')
  i1478.gravity = new pc.Vec2( i1479[2], i1479[3] )
  i1478.positionIterations = i1479[4]
  i1478.velocityIterations = i1479[5]
  i1478.velocityThreshold = i1479[6]
  i1478.maxLinearCorrection = i1479[7]
  i1478.maxAngularCorrection = i1479[8]
  i1478.maxTranslationSpeed = i1479[9]
  i1478.maxRotationSpeed = i1479[10]
  i1478.baumgarteScale = i1479[11]
  i1478.baumgarteTOIScale = i1479[12]
  i1478.timeToSleep = i1479[13]
  i1478.linearSleepTolerance = i1479[14]
  i1478.angularSleepTolerance = i1479[15]
  i1478.defaultContactOffset = i1479[16]
  i1478.autoSimulation = !!i1479[17]
  i1478.queriesHitTriggers = !!i1479[18]
  i1478.queriesStartInColliders = !!i1479[19]
  i1478.callbacksOnDisable = !!i1479[20]
  i1478.reuseCollisionCallbacks = !!i1479[21]
  i1478.autoSyncTransforms = !!i1479[22]
  var i1481 = i1479[23]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1481[i + 0]) );
  }
  i1478.collisionMatrix = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.layerId = i1485[1]
  i1484.otherLayerId = i1485[2]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1489[i + 0]) );
  }
  i1486.qualityLevels = i1488
  var i1491 = i1487[1]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( i1491[i + 0] );
  }
  i1486.names = i1490
  i1486.shadows = i1487[2]
  i1486.anisotropicFiltering = i1487[3]
  i1486.antiAliasing = i1487[4]
  i1486.lodBias = i1487[5]
  i1486.shadowCascades = i1487[6]
  i1486.shadowDistance = i1487[7]
  i1486.shadowmaskMode = i1487[8]
  i1486.shadowProjection = i1487[9]
  i1486.shadowResolution = i1487[10]
  i1486.softParticles = !!i1487[11]
  i1486.softVegetation = !!i1487[12]
  i1486.activeColorSpace = i1487[13]
  i1486.desiredColorSpace = i1487[14]
  i1486.masterTextureLimit = i1487[15]
  i1486.maxQueuedFrames = i1487[16]
  i1486.particleRaycastBudget = i1487[17]
  i1486.pixelLightCount = i1487[18]
  i1486.realtimeReflectionProbes = !!i1487[19]
  i1486.shadowCascade2Split = i1487[20]
  i1486.shadowCascade4Split = new pc.Vec3( i1487[21], i1487[22], i1487[23] )
  i1486.streamingMipmapsActive = !!i1487[24]
  i1486.vSyncCount = i1487[25]
  i1486.asyncUploadBufferSize = i1487[26]
  i1486.asyncUploadTimeSlice = i1487[27]
  i1486.billboardsFaceCameraPosition = !!i1487[28]
  i1486.shadowNearPlaneOffset = i1487[29]
  i1486.streamingMipmapsMemoryBudget = i1487[30]
  i1486.maximumLODLevel = i1487[31]
  i1486.streamingMipmapsAddAllCameras = !!i1487[32]
  i1486.streamingMipmapsMaxLevelReduction = i1487[33]
  i1486.streamingMipmapsRenderersPerFrame = i1487[34]
  i1486.resolutionScalingFixedDPIFactor = i1487[35]
  i1486.streamingMipmapsMaxFileIORequests = i1487[36]
  i1486.currentQualityLevel = i1487[37]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1497 = data
  i1496.weight = i1497[0]
  i1496.vertices = i1497[1]
  i1496.normals = i1497[2]
  i1496.tangents = i1497[3]
  return i1496
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1498 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1499 = data
  i1498.xPlacement = i1499[0]
  i1498.yPlacement = i1499[1]
  i1498.xAdvance = i1499[2]
  i1498.yAdvance = i1499[3]
  return i1498
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[53],"83":[39],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[92],"100":[92],"101":[92],"102":[92],"103":[92],"104":[92],"105":[39],"106":[3],"107":[108],"109":[108],"25":[24],"46":[52],"10":[7],"110":[27],"111":[24],"112":[33,24],"113":[3],"114":[33,24],"115":[24],"116":[24],"117":[3,24],"31":[24,33],"118":[119],"120":[119],"121":[119],"122":[24],"123":[24],"29":[25],"30":[33,24],"124":[24],"27":[25],"125":[24],"126":[24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"134":[33,24],"135":[24],"136":[24],"137":[24],"138":[24],"139":[33,24],"140":[24],"141":[55],"142":[55],"56":[55],"143":[55],"144":[39],"145":[39]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","SolidBox","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","FindMonsterManager","FindMonsterDatabase","TurtorialArrow","HiddenMonsterPanel","UnityEngine.LineRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.AudioClip","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UIRays","GameButton","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","ScreenDeltaInputSystem","MonsterProgressBar","StoryTextView","UnityEngine.UI.Button","JumpButton","FMCharacter","PlayableJoystick","FM3rdInput","UnityEngine.GameObject","FindMonsterPlayerControl","PlayerSO","UnityEngine.CharacterController","UnityEngine.SkinnedMeshRenderer","CharacterFootstep","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableAudio","LunaController","ControlsTutorial","HiddenMonster","Billboard","UnityEngine.SpriteRenderer","MorphUnlockedPanel","MorphHuntStory","MonsterSO","PointerHand","ScaleYoyo","UnityEngine.Cubemap","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoCanvasScaler","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BAH_V04";

Deserializers.lunaInitializationTime = "11/10/2026 04:13:27";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_BAH_V05_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1650";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4228";

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

Deserializers.buildID = "c771ae69-e849-400c-910a-e84e87ce89df";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

