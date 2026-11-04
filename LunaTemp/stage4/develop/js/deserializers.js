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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i751 = data
  i750.name = i751[0]
  i750.width = i751[1]
  i750.height = i751[2]
  i750.mipmapCount = i751[3]
  i750.anisoLevel = i751[4]
  i750.filterMode = i751[5]
  i750.hdr = !!i751[6]
  i750.format = i751[7]
  i750.wrapMode = i751[8]
  i750.alphaIsTransparency = !!i751[9]
  i750.alphaSource = i751[10]
  i750.graphicsFormat = i751[11]
  i750.sRGBTexture = !!i751[12]
  i750.desiredColorSpace = i751[13]
  i750.wrapU = i751[14]
  i750.wrapV = i751[15]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i752 = root || new pc.UnityMaterial()
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'shader')
  i752.renderQueue = i753[3]
  i752.enableInstancing = !!i753[4]
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i755[i + 0]) );
  }
  i752.floatParameters = i754
  var i757 = i753[6]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i757[i + 0]) );
  }
  i752.colorParameters = i756
  var i759 = i753[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i759[i + 0]) );
  }
  i752.vectorParameters = i758
  var i761 = i753[8]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i761[i + 0]) );
  }
  i752.textureParameters = i760
  var i763 = i753[9]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i763[i + 0]) );
  }
  i752.materialFlags = i762
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = new pc.Color(i771[1], i771[2], i771[3], i771[4])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = new pc.Vec4( i775[1], i775[2], i775[3], i775[4] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'value')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i783 = data
  i782.name = i783[0]
  i782.enabled = !!i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i785 = data
  i784.name = i785[0]
  i784.halfPrecision = !!i785[1]
  i784.useSimplification = !!i785[2]
  i784.useUInt32IndexFormat = !!i785[3]
  i784.vertexCount = i785[4]
  i784.aabb = i785[5]
  var i787 = i785[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( !!i787[i + 0] );
  }
  i784.streams = i786
  i784.vertices = i785[7]
  var i789 = i785[8]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i789[i + 0]) );
  }
  i784.subMeshes = i788
  var i791 = i785[9]
  var i790 = []
  for(var i = 0; i < i791.length; i += 16) {
    i790.push( new pc.Mat4().setData(i791[i + 0], i791[i + 1], i791[i + 2], i791[i + 3],  i791[i + 4], i791[i + 5], i791[i + 6], i791[i + 7],  i791[i + 8], i791[i + 9], i791[i + 10], i791[i + 11],  i791[i + 12], i791[i + 13], i791[i + 14], i791[i + 15]) );
  }
  i784.bindposes = i790
  var i793 = i785[10]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i793[i + 0]) );
  }
  i784.blendShapes = i792
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i799 = data
  i798.triangles = i799[0]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i805 = data
  i804.name = i805[0]
  var i807 = i805[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i807[i + 0]) );
  }
  i804.frames = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i809 = data
  i808.name = i809[0]
  i808.atlasId = i809[1]
  i808.mipmapCount = i809[2]
  i808.hdr = !!i809[3]
  i808.size = i809[4]
  i808.anisoLevel = i809[5]
  i808.filterMode = i809[6]
  var i811 = i809[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 4) {
    i810.push( UnityEngine.Rect.MinMaxRect(i811[i + 0], i811[i + 1], i811[i + 2], i811[i + 3]) );
  }
  i808.rects = i810
  i808.wrapU = i809[8]
  i808.wrapV = i809[9]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i815 = data
  i814.name = i815[0]
  i814.index = i815[1]
  i814.startup = !!i815[2]
  return i814
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_FirstSelected')
  i816.m_sendNavigationEvents = !!i817[2]
  i816.m_DragThreshold = i817[3]
  return i816
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i819 = data
  i818.m_HorizontalAxis = i819[0]
  i818.m_VerticalAxis = i819[1]
  i818.m_SubmitButton = i819[2]
  i818.m_CancelButton = i819[3]
  i818.m_InputActionsPerSecond = i819[4]
  i818.m_RepeatDelay = i819[5]
  i818.m_ForceModuleActive = !!i819[6]
  i818.m_SendPointerHoverToParent = !!i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tagId = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i823 = data
  i822.pivot = new pc.Vec2( i823[0], i823[1] )
  i822.anchorMin = new pc.Vec2( i823[2], i823[3] )
  i822.anchorMax = new pc.Vec2( i823[4], i823[5] )
  i822.sizeDelta = new pc.Vec2( i823[6], i823[7] )
  i822.anchoredPosition3D = new pc.Vec3( i823[8], i823[9], i823[10] )
  i822.rotation = new pc.Quat(i823[11], i823[12], i823[13], i823[14])
  i822.scale = new pc.Vec3( i823[15], i823[16], i823[17] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i825 = data
  i824.planeDistance = i825[0]
  i824.referencePixelsPerUnit = i825[1]
  i824.isFallbackOverlay = !!i825[2]
  i824.renderMode = i825[3]
  i824.renderOrder = i825[4]
  i824.sortingLayerName = i825[5]
  i824.sortingOrder = i825[6]
  i824.scaleFactor = i825[7]
  request.r(i825[8], i825[9], 0, i824, 'worldCamera')
  i824.overrideSorting = !!i825[10]
  i824.pixelPerfect = !!i825[11]
  i824.targetDisplay = i825[12]
  i824.overridePixelPerfect = !!i825[13]
  i824.enabled = !!i825[14]
  return i824
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i827 = data
  i826.m_UiScaleMode = i827[0]
  i826.m_ReferencePixelsPerUnit = i827[1]
  i826.m_ScaleFactor = i827[2]
  i826.m_ReferenceResolution = new pc.Vec2( i827[3], i827[4] )
  i826.m_ScreenMatchMode = i827[5]
  i826.m_MatchWidthOrHeight = i827[6]
  i826.m_PhysicalUnit = i827[7]
  i826.m_FallbackScreenDPI = i827[8]
  i826.m_DefaultSpriteDPI = i827[9]
  i826.m_DynamicPixelsPerUnit = i827[10]
  i826.m_PresetInfoIsWorld = !!i827[11]
  return i826
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i829 = data
  i828.m_IgnoreReversedGraphics = !!i829[0]
  i828.m_BlockingObjects = i829[1]
  i828.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i829[2] )
  return i828
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i830 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i831 = data
  i830._referenceResolution = new pc.Vec2( i831[0], i831[1] )
  i830._portraitMatch = i831[2]
  i830._landscapeMatch = i831[3]
  i830._squareMatch = i831[4]
  i830._portraitAspectThreshold = i831[5]
  i830._landscapeAspectThreshold = i831[6]
  i830._aspectEpsilon = i831[7]
  return i830
}

Deserializers["Joystick"] = function (request, data, root) {
  var i832 = root || request.c( 'Joystick' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'background')
  request.r(i833[2], i833[3], 0, i832, 'joy')
  i832.deadZone = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i835 = data
  i834.cullTransparentMesh = !!i835[0]
  return i834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Image' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_Sprite')
  i836.m_Type = i837[2]
  i836.m_PreserveAspect = !!i837[3]
  i836.m_FillCenter = !!i837[4]
  i836.m_FillMethod = i837[5]
  i836.m_FillAmount = i837[6]
  i836.m_FillClockwise = !!i837[7]
  i836.m_FillOrigin = i837[8]
  i836.m_UseSpriteMesh = !!i837[9]
  i836.m_PixelsPerUnitMultiplier = i837[10]
  request.r(i837[11], i837[12], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[13]
  i836.m_Color = new pc.Color(i837[14], i837[15], i837[16], i837[17])
  i836.m_RaycastTarget = !!i837[18]
  i836.m_RaycastPadding = new pc.Vec4( i837[19], i837[20], i837[21], i837[22] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i839 = data
  i838.m_Alpha = i839[0]
  i838.m_Interactable = !!i839[1]
  i838.m_BlocksRaycasts = !!i839[2]
  i838.m_IgnoreParentGroups = !!i839[3]
  i838.enabled = !!i839[4]
  return i838
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i841 = data
  i840.m_hasFontAssetChanged = !!i841[0]
  request.r(i841[1], i841[2], 0, i840, 'm_baseMaterial')
  i840.m_maskOffset = new pc.Vec4( i841[3], i841[4], i841[5], i841[6] )
  i840.m_text = i841[7]
  i840.m_isRightToLeft = !!i841[8]
  request.r(i841[9], i841[10], 0, i840, 'm_fontAsset')
  request.r(i841[11], i841[12], 0, i840, 'm_sharedMaterial')
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.m_fontSharedMaterials = i842
  request.r(i841[14], i841[15], 0, i840, 'm_fontMaterial')
  var i845 = i841[16]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i840.m_fontMaterials = i844
  i840.m_fontColor32 = UnityEngine.Color32.ConstructColor(i841[17], i841[18], i841[19], i841[20])
  i840.m_fontColor = new pc.Color(i841[21], i841[22], i841[23], i841[24])
  i840.m_enableVertexGradient = !!i841[25]
  i840.m_colorMode = i841[26]
  i840.m_fontColorGradient = request.d('TMPro.VertexGradient', i841[27], i840.m_fontColorGradient)
  request.r(i841[28], i841[29], 0, i840, 'm_fontColorGradientPreset')
  request.r(i841[30], i841[31], 0, i840, 'm_spriteAsset')
  i840.m_tintAllSprites = !!i841[32]
  request.r(i841[33], i841[34], 0, i840, 'm_StyleSheet')
  i840.m_TextStyleHashCode = i841[35]
  i840.m_overrideHtmlColors = !!i841[36]
  i840.m_faceColor = UnityEngine.Color32.ConstructColor(i841[37], i841[38], i841[39], i841[40])
  i840.m_fontSize = i841[41]
  i840.m_fontSizeBase = i841[42]
  i840.m_fontWeight = i841[43]
  i840.m_enableAutoSizing = !!i841[44]
  i840.m_fontSizeMin = i841[45]
  i840.m_fontSizeMax = i841[46]
  i840.m_fontStyle = i841[47]
  i840.m_HorizontalAlignment = i841[48]
  i840.m_VerticalAlignment = i841[49]
  i840.m_textAlignment = i841[50]
  i840.m_characterSpacing = i841[51]
  i840.m_wordSpacing = i841[52]
  i840.m_lineSpacing = i841[53]
  i840.m_lineSpacingMax = i841[54]
  i840.m_paragraphSpacing = i841[55]
  i840.m_charWidthMaxAdj = i841[56]
  i840.m_TextWrappingMode = i841[57]
  i840.m_wordWrappingRatios = i841[58]
  i840.m_overflowMode = i841[59]
  request.r(i841[60], i841[61], 0, i840, 'm_linkedTextComponent')
  request.r(i841[62], i841[63], 0, i840, 'parentLinkedComponent')
  i840.m_enableKerning = !!i841[64]
  var i847 = i841[65]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(i847[i + 0]);
  }
  i840.m_ActiveFontFeatures = i846
  i840.m_enableExtraPadding = !!i841[66]
  i840.checkPaddingRequired = !!i841[67]
  i840.m_isRichText = !!i841[68]
  i840.m_parseCtrlCharacters = !!i841[69]
  i840.m_isOrthographic = !!i841[70]
  i840.m_isCullingEnabled = !!i841[71]
  i840.m_horizontalMapping = i841[72]
  i840.m_verticalMapping = i841[73]
  i840.m_uvLineOffset = i841[74]
  i840.m_geometrySortingOrder = i841[75]
  i840.m_IsTextObjectScaleStatic = !!i841[76]
  i840.m_VertexBufferAutoSizeReduction = !!i841[77]
  i840.m_useMaxVisibleDescender = !!i841[78]
  i840.m_pageToDisplay = i841[79]
  i840.m_margin = new pc.Vec4( i841[80], i841[81], i841[82], i841[83] )
  i840.m_isUsingLegacyAnimationComponent = !!i841[84]
  i840.m_isVolumetricText = !!i841[85]
  request.r(i841[86], i841[87], 0, i840, 'm_Material')
  i840.m_EmojiFallbackSupport = !!i841[88]
  i840.m_Maskable = !!i841[89]
  i840.m_Color = new pc.Color(i841[90], i841[91], i841[92], i841[93])
  i840.m_RaycastTarget = !!i841[94]
  i840.m_RaycastPadding = new pc.Vec4( i841[95], i841[96], i841[97], i841[98] )
  return i840
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.VertexGradient' )
  var i851 = data
  i850.topLeft = new pc.Color(i851[0], i851[1], i851[2], i851[3])
  i850.topRight = new pc.Color(i851[4], i851[5], i851[6], i851[7])
  i850.bottomLeft = new pc.Color(i851[8], i851[9], i851[10], i851[11])
  i850.bottomRight = new pc.Color(i851[12], i851[13], i851[14], i851[15])
  return i850
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button' )
  var i855 = data
  i854.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i855[0], i854.m_OnClick)
  i854.m_Navigation = request.d('UnityEngine.UI.Navigation', i855[1], i854.m_Navigation)
  i854.m_Transition = i855[2]
  i854.m_Colors = request.d('UnityEngine.UI.ColorBlock', i855[3], i854.m_Colors)
  i854.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i855[4], i854.m_SpriteState)
  i854.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i855[5], i854.m_AnimationTriggers)
  i854.m_Interactable = !!i855[6]
  request.r(i855[7], i855[8], 0, i854, 'm_TargetGraphic')
  return i854
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i857 = data
  i856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i857[0], i856.m_PersistentCalls)
  return i856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('UnityEngine.Events.PersistentCall', i861[i + 0]));
  }
  i858.m_Calls = i860
  return i858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Target')
  i864.m_TargetAssemblyTypeName = i865[2]
  i864.m_MethodName = i865[3]
  i864.m_Mode = i865[4]
  i864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i865[5], i864.m_Arguments)
  i864.m_CallState = i865[6]
  return i864
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i867 = data
  i866.m_Mode = i867[0]
  i866.m_WrapAround = !!i867[1]
  request.r(i867[2], i867[3], 0, i866, 'm_SelectOnUp')
  request.r(i867[4], i867[5], 0, i866, 'm_SelectOnDown')
  request.r(i867[6], i867[7], 0, i866, 'm_SelectOnLeft')
  request.r(i867[8], i867[9], 0, i866, 'm_SelectOnRight')
  return i866
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i869 = data
  i868.m_NormalColor = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.m_HighlightedColor = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.m_PressedColor = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  i868.m_SelectedColor = new pc.Color(i869[12], i869[13], i869[14], i869[15])
  i868.m_DisabledColor = new pc.Color(i869[16], i869[17], i869[18], i869[19])
  i868.m_ColorMultiplier = i869[20]
  i868.m_FadeDuration = i869[21]
  return i868
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_HighlightedSprite')
  request.r(i871[2], i871[3], 0, i870, 'm_PressedSprite')
  request.r(i871[4], i871[5], 0, i870, 'm_SelectedSprite')
  request.r(i871[6], i871[7], 0, i870, 'm_DisabledSprite')
  return i870
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i873 = data
  i872.m_NormalTrigger = i873[0]
  i872.m_HighlightedTrigger = i873[1]
  i872.m_PressedTrigger = i873[2]
  i872.m_SelectedTrigger = i873[3]
  i872.m_DisabledTrigger = i873[4]
  return i872
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i874 = root || request.c( 'JumpButton' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'button')
  return i874
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Mask' )
  var i877 = data
  i876.m_ShowMaskGraphic = !!i877[0]
  return i876
}

Deserializers["TutController"] = function (request, data, root) {
  var i878 = root || request.c( 'TutController' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'tutScene')
  request.r(i879[2], i879[3], 0, i878, 'startTut')
  request.r(i879[4], i879[5], 0, i878, 'playTut')
  request.r(i879[6], i879[7], 0, i878, 'farTut')
  request.r(i879[8], i879[9], 0, i878, 'failTut')
  request.r(i879[10], i879[11], 0, i878, 'joystick')
  request.r(i879[12], i879[13], 0, i878, 'moveTut')
  request.r(i879[14], i879[15], 0, i878, 'moveHand')
  request.r(i879[16], i879[17], 0, i878, 'cameraHand')
  request.r(i879[18], i879[19], 0, i878, 'jumpTut')
  request.r(i879[20], i879[21], 0, i878, 'jumpHand')
  request.r(i879[22], i879[23], 0, i878, 'jumpButton')
  i878.swipeDistance = i879[24]
  i878.swipeDuration = i879[25]
  i878.swipePause = i879[26]
  return i878
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i880 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i881 = data
  i880.targetIsSelf = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'targetGO')
  i880.tweenTargetIsTargetGO = !!i881[3]
  i880.delay = i881[4]
  i880.duration = i881[5]
  i880.easeType = i881[6]
  i880.easeCurve = new pc.AnimationCurve( { keys_flow: i881[7] } )
  i880.loopType = i881[8]
  i880.loops = i881[9]
  i880.id = i881[10]
  i880.isRelative = !!i881[11]
  i880.isFrom = !!i881[12]
  i880.isIndependentUpdate = !!i881[13]
  i880.autoKill = !!i881[14]
  i880.autoGenerate = !!i881[15]
  i880.isActive = !!i881[16]
  i880.isValid = !!i881[17]
  request.r(i881[18], i881[19], 0, i880, 'target')
  i880.animationType = i881[20]
  i880.targetType = i881[21]
  i880.forcedTargetType = i881[22]
  i880.autoPlay = !!i881[23]
  i880.useTargetAsV3 = !!i881[24]
  i880.endValueFloat = i881[25]
  i880.endValueV3 = new pc.Vec3( i881[26], i881[27], i881[28] )
  i880.endValueV2 = new pc.Vec2( i881[29], i881[30] )
  i880.endValueColor = new pc.Color(i881[31], i881[32], i881[33], i881[34])
  i880.endValueString = i881[35]
  i880.endValueRect = UnityEngine.Rect.MinMaxRect(i881[36], i881[37], i881[38], i881[39])
  request.r(i881[40], i881[41], 0, i880, 'endValueTransform')
  i880.optionalBool0 = !!i881[42]
  i880.optionalBool1 = !!i881[43]
  i880.optionalFloat0 = i881[44]
  i880.optionalInt0 = i881[45]
  i880.optionalRotationMode = i881[46]
  i880.optionalScrambleMode = i881[47]
  i880.optionalShakeRandomnessMode = i881[48]
  i880.optionalString = i881[49]
  i880.updateType = i881[50]
  i880.isSpeedBased = !!i881[51]
  i880.hasOnStart = !!i881[52]
  i880.hasOnPlay = !!i881[53]
  i880.hasOnUpdate = !!i881[54]
  i880.hasOnStepComplete = !!i881[55]
  i880.hasOnComplete = !!i881[56]
  i880.hasOnTweenCreated = !!i881[57]
  i880.hasOnRewind = !!i881[58]
  i880.onStart = request.d('UnityEngine.Events.UnityEvent', i881[59], i880.onStart)
  i880.onPlay = request.d('UnityEngine.Events.UnityEvent', i881[60], i880.onPlay)
  i880.onUpdate = request.d('UnityEngine.Events.UnityEvent', i881[61], i880.onUpdate)
  i880.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i881[62], i880.onStepComplete)
  i880.onComplete = request.d('UnityEngine.Events.UnityEvent', i881[63], i880.onComplete)
  i880.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i881[64], i880.onTweenCreated)
  i880.onRewind = request.d('UnityEngine.Events.UnityEvent', i881[65], i880.onRewind)
  return i880
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i883 = data
  i882.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i883[0], i882.m_PersistentCalls)
  return i882
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i884 = root || request.c( 'HideOnPointer' )
  var i885 = data
  i884.OnPointerDownEvent = request.d('System.Action', i885[0], i884.OnPointerDownEvent)
  return i884
}

Deserializers["System.Action"] = function (request, data, root) {
  var i886 = root || request.c( 'System.Action' )
  var i887 = data
  return i886
}

Deserializers["SelectPanel"] = function (request, data, root) {
  var i888 = root || request.c( 'SelectPanel' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'startButton')
  request.r(i889[2], i889[3], 0, i888, 'startSound')
  return i888
}

Deserializers["SearchPromptPulse"] = function (request, data, root) {
  var i890 = root || request.c( 'SearchPromptPulse' )
  var i891 = data
  return i890
}

Deserializers["ResponsiveResultLayout"] = function (request, data, root) {
  var i892 = root || request.c( 'ResponsiveResultLayout' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'title')
  request.r(i893[2], i893[3], 0, i892, 'action')
  i892.titleArtwork = UnityEngine.Rect.MinMaxRect(i893[4], i893[5], i893[6], i893[7])
  i892.actionArtwork = UnityEngine.Rect.MinMaxRect(i893[8], i893[9], i893[10], i893[11])
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i895 = data
  i894.center = new pc.Vec3( i895[0], i895[1], i895[2] )
  i894.size = new pc.Vec3( i895[3], i895[4], i895[5] )
  i894.enabled = !!i895[6]
  i894.isTrigger = !!i895[7]
  request.r(i895[8], i895[9], 0, i894, 'material')
  return i894
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i896 = root || request.c( 'CharacterMotor' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'characterInput')
  request.r(i897[2], i897[3], 0, i896, 'cameraYawTransform')
  request.r(i897[4], i897[5], 0, i896, '_arrow')
  i896.moveSpeed = i897[6]
  i896.jumpHeight = i897[7]
  request.r(i897[8], i897[9], 0, i896, 'groundChecker')
  i896.gravity = i897[10]
  i896.enableStepClimb = !!i897[11]
  i896.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i897[12] )
  i896.maxStepHeight = i897[13]
  i896.stepCheckDistance = i897[14]
  i896.stepUpSpeed = i897[15]
  i896.stepUpAcceleration = i897[16]
  i896.minimumStepFacing = i897[17]
  request.r(i897[18], i897[19], 0, i896, 'controller')
  i896.autoRun = !!i897[20]
  return i896
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i898 = root || request.c( 'CharacterRotation' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'motor')
  i898.rotationSpeed = i899[2]
  return i898
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i900 = root || request.c( 'CharacterAnimation' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'animator')
  request.r(i901[2], i901[3], 0, i900, 'motor')
  i900.speedChangeRate = i901[4]
  i900.groundedGraceTime = i901[5]
  return i900
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i902 = root || request.c( 'CharacterCollect' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'motor')
  request.r(i903[2], i903[3], 0, i902, 'avatar')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i905 = data
  i904.mass = i905[0]
  i904.drag = i905[1]
  i904.angularDrag = i905[2]
  i904.useGravity = !!i905[3]
  i904.isKinematic = !!i905[4]
  i904.constraints = i905[5]
  i904.maxAngularVelocity = i905[6]
  i904.collisionDetectionMode = i905[7]
  i904.interpolation = i905[8]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i907 = data
  i906.center = new pc.Vec3( i907[0], i907[1], i907[2] )
  i906.radius = i907[3]
  i906.height = i907[4]
  i906.direction = i907[5]
  i906.enabled = !!i907[6]
  i906.isTrigger = !!i907[7]
  request.r(i907[8], i907[9], 0, i906, 'material')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'animatorController')
  request.r(i909[2], i909[3], 0, i908, 'avatar')
  i908.updateMode = i909[4]
  i908.hasTransformHierarchy = !!i909[5]
  i908.applyRootMotion = !!i909[6]
  var i911 = i909[7]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.humanBones = i910
  i908.enabled = !!i909[8]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'clip')
  request.r(i915[2], i915[3], 0, i914, 'outputAudioMixerGroup')
  i914.playOnAwake = !!i915[4]
  i914.loop = !!i915[5]
  i914.time = i915[6]
  i914.volume = i915[7]
  i914.pitch = i915[8]
  i914.enabled = !!i915[9]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'sharedMesh')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'additionalVertexStreams')
  i918.enabled = !!i919[2]
  request.r(i919[3], i919[4], 0, i918, 'sharedMaterial')
  var i921 = i919[5]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.sharedMaterials = i920
  i918.receiveShadows = !!i919[6]
  i918.shadowCastingMode = i919[7]
  i918.sortingLayerID = i919[8]
  i918.sortingOrder = i919[9]
  i918.lightmapIndex = i919[10]
  i918.lightmapSceneIndex = i919[11]
  i918.lightmapScaleOffset = new pc.Vec4( i919[12], i919[13], i919[14], i919[15] )
  i918.lightProbeUsage = i919[16]
  i918.reflectionProbeUsage = i919[17]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'sharedMesh')
  var i925 = i923[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.bones = i924
  i922.updateWhenOffscreen = !!i923[3]
  i922.localBounds = i923[4]
  request.r(i923[5], i923[6], 0, i922, 'rootBone')
  var i927 = i923[7]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i927[i + 0]) );
  }
  i922.blendShapesWeights = i926
  i922.enabled = !!i923[8]
  request.r(i923[9], i923[10], 0, i922, 'sharedMaterial')
  var i929 = i923[11]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i922.sharedMaterials = i928
  i922.receiveShadows = !!i923[12]
  i922.shadowCastingMode = i923[13]
  i922.sortingLayerID = i923[14]
  i922.sortingOrder = i923[15]
  i922.lightmapIndex = i923[16]
  i922.lightmapSceneIndex = i923[17]
  i922.lightmapScaleOffset = new pc.Vec4( i923[18], i923[19], i923[20], i923[21] )
  i922.lightProbeUsage = i923[22]
  i922.reflectionProbeUsage = i923[23]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i933 = data
  i932.weight = i933[0]
  return i932
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i934 = root || request.c( 'GroundChecker' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'groundPoint')
  i934.checkRadius = i935[2]
  i934.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i935[3] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i937 = data
  i936.color = new pc.Color(i937[0], i937[1], i937[2], i937[3])
  request.r(i937[4], i937[5], 0, i936, 'sprite')
  i936.flipX = !!i937[6]
  i936.flipY = !!i937[7]
  i936.drawMode = i937[8]
  i936.size = new pc.Vec2( i937[9], i937[10] )
  i936.tileMode = i937[11]
  i936.adaptiveModeThreshold = i937[12]
  i936.maskInteraction = i937[13]
  i936.spriteSortPoint = i937[14]
  i936.enabled = !!i937[15]
  request.r(i937[16], i937[17], 0, i936, 'sharedMaterial')
  var i939 = i937[18]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.sharedMaterials = i938
  i936.receiveShadows = !!i937[19]
  i936.shadowCastingMode = i937[20]
  i936.sortingLayerID = i937[21]
  i936.sortingOrder = i937[22]
  i936.lightmapIndex = i937[23]
  i936.lightmapSceneIndex = i937[24]
  i936.lightmapScaleOffset = new pc.Vec4( i937[25], i937[26], i937[27], i937[28] )
  i936.lightProbeUsage = i937[29]
  i936.reflectionProbeUsage = i937[30]
  return i936
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i940 = root || request.c( 'CameraFollow' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'target')
  i940.smoothTime = i941[2]
  return i940
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i942 = root || request.c( 'CameraLook' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'input')
  request.r(i943[2], i943[3], 0, i942, 'yawPivot')
  request.r(i943[4], i943[5], 0, i942, 'pitchPivot')
  i942.minPitch = i943[6]
  i942.maxPitch = i943[7]
  i942.yaw = i943[8]
  i942.pitch = i943[9]
  i942.defaltYaw = i943[10]
  i942.defaltPitch = i943[11]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i945 = data
  i944.aspect = i945[0]
  i944.orthographic = !!i945[1]
  i944.orthographicSize = i945[2]
  i944.backgroundColor = new pc.Color(i945[3], i945[4], i945[5], i945[6])
  i944.nearClipPlane = i945[7]
  i944.farClipPlane = i945[8]
  i944.fieldOfView = i945[9]
  i944.depth = i945[10]
  i944.clearFlags = i945[11]
  i944.cullingMask = i945[12]
  i944.rect = i945[13]
  request.r(i945[14], i945[15], 0, i944, 'targetTexture')
  i944.usePhysicalProperties = !!i945[16]
  i944.focalLength = i945[17]
  i944.sensorSize = new pc.Vec2( i945[18], i945[19] )
  i944.lensShift = new pc.Vec2( i945[20], i945[21] )
  i944.gateFit = i945[22]
  i944.commandBufferCount = i945[23]
  i944.cameraType = i945[24]
  i944.enabled = !!i945[25]
  return i944
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i946 = root || request.c( 'CharacterInput' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'joystick')
  request.r(i947[2], i947[3], 0, i946, 'jumpButton')
  return i946
}

Deserializers["InputManager"] = function (request, data, root) {
  var i948 = root || request.c( 'InputManager' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'worldCamera')
  i948.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i949[2] )
  i948.touchSensitivity = i949[3]
  i948.mouseSensitivity = i949[4]
  i948.dragThreshold = i949[5]
  return i948
}

Deserializers["GameController"] = function (request, data, root) {
  var i950 = root || request.c( 'GameController' )
  var i951 = data
  i950.timeToShowComplete = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'selectPanel')
  request.r(i951[3], i951[4], 0, i950, 'inputUI')
  request.r(i951[5], i951[6], 0, i950, 'inputManager')
  request.r(i951[7], i951[8], 0, i950, 'failSound')
  i950.searchDuration = i951[9]
  request.r(i951[10], i951[11], 0, i950, 'countdownText')
  i950.currentProgress = i951[12]
  i950.target = i951[13]
  request.r(i951[14], i951[15], 0, i950, 'progressText')
  request.r(i951[16], i951[17], 0, i950, 'collectText')
  request.r(i951[18], i951[19], 0, i950, '_cta')
  var i953 = i951[20]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.gifts = i952
  request.r(i951[21], i951[22], 0, i950, 'collect')
  request.r(i951[23], i951[24], 0, i950, 'tut')
  request.r(i951[25], i951[26], 0, i950, 'playerSpawn')
  request.r(i951[27], i951[28], 0, i950, 'failUI')
  request.r(i951[29], i951[30], 0, i950, 'playerMotor')
  i950.failHeight = i951[31]
  return i950
}

Deserializers["AudioController"] = function (request, data, root) {
  var i956 = root || request.c( 'AudioController' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'musicSource')
  request.r(i957[2], i957[3], 0, i956, 'poolParent')
  i956.startSize = i957[4]
  return i956
}

Deserializers["LunaController"] = function (request, data, root) {
  var i958 = root || request.c( 'LunaController' )
  var i959 = data
  i958.LimitTimePlay = !!i959[0]
  i958.TimePlay = i959[1]
  i958.MorphIndex = i959[2]
  var i961 = i959[3]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.images = i960
  request.r(i959[4], i959[5], 0, i958, 'CTA')
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'sharedMesh')
  i964.convex = !!i965[2]
  i964.enabled = !!i965[3]
  i964.isTrigger = !!i965[4]
  request.r(i965[5], i965[6], 0, i964, 'material')
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i967 = data
  i966.center = new pc.Vec3( i967[0], i967[1], i967[2] )
  i966.radius = i967[3]
  i966.enabled = !!i967[4]
  i966.isTrigger = !!i967[5]
  request.r(i967[6], i967[7], 0, i966, 'material')
  return i966
}

Deserializers["Gift"] = function (request, data, root) {
  var i968 = root || request.c( 'Gift' )
  var i969 = data
  i968.collectDone = !!i969[0]
  var i971 = i969[1]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i968.hints = i970
  request.r(i969[2], i969[3], 0, i968, 'collectSound')
  request.r(i969[4], i969[5], 0, i968, 'collectEffect')
  request.r(i969[6], i969[7], 0, i968, 'arrow')
  request.r(i969[8], i969[9], 0, i968, 'morphVisual')
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'mesh')
  i974.meshCount = i975[2]
  i974.activeVertexStreamsCount = i975[3]
  i974.alignment = i975[4]
  i974.renderMode = i975[5]
  i974.sortMode = i975[6]
  i974.lengthScale = i975[7]
  i974.velocityScale = i975[8]
  i974.cameraVelocityScale = i975[9]
  i974.normalDirection = i975[10]
  i974.sortingFudge = i975[11]
  i974.minParticleSize = i975[12]
  i974.maxParticleSize = i975[13]
  i974.pivot = new pc.Vec3( i975[14], i975[15], i975[16] )
  request.r(i975[17], i975[18], 0, i974, 'trailMaterial')
  i974.applyActiveColorSpace = !!i975[19]
  i974.enabled = !!i975[20]
  request.r(i975[21], i975[22], 0, i974, 'sharedMaterial')
  var i977 = i975[23]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.sharedMaterials = i976
  i974.receiveShadows = !!i975[24]
  i974.shadowCastingMode = i975[25]
  i974.sortingLayerID = i975[26]
  i974.sortingOrder = i975[27]
  i974.lightmapIndex = i975[28]
  i974.lightmapSceneIndex = i975[29]
  i974.lightmapScaleOffset = new pc.Vec4( i975[30], i975[31], i975[32], i975[33] )
  i974.lightProbeUsage = i975[34]
  i974.reflectionProbeUsage = i975[35]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i979 = data
  i978.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i979[0], i978.main)
  i978.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i979[1], i978.colorBySpeed)
  i978.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i979[2], i978.colorOverLifetime)
  i978.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i979[3], i978.emission)
  i978.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i979[4], i978.rotationBySpeed)
  i978.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i979[5], i978.rotationOverLifetime)
  i978.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i979[6], i978.shape)
  i978.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i979[7], i978.sizeBySpeed)
  i978.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i979[8], i978.sizeOverLifetime)
  i978.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i979[9], i978.textureSheetAnimation)
  i978.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i979[10], i978.velocityOverLifetime)
  i978.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i979[11], i978.noise)
  i978.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i979[12], i978.inheritVelocity)
  i978.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i979[13], i978.forceOverLifetime)
  i978.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i979[14], i978.limitVelocityOverLifetime)
  i978.useAutoRandomSeed = !!i979[15]
  i978.randomSeed = i979[16]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemMain()
  var i981 = data
  i980.duration = i981[0]
  i980.loop = !!i981[1]
  i980.prewarm = !!i981[2]
  i980.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[3], i980.startDelay)
  i980.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[4], i980.startLifetime)
  i980.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[5], i980.startSpeed)
  i980.startSize3D = !!i981[6]
  i980.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[7], i980.startSizeX)
  i980.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[8], i980.startSizeY)
  i980.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[9], i980.startSizeZ)
  i980.startRotation3D = !!i981[10]
  i980.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[11], i980.startRotationX)
  i980.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[12], i980.startRotationY)
  i980.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[13], i980.startRotationZ)
  i980.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i981[14], i980.startColor)
  i980.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[15], i980.gravityModifier)
  i980.simulationSpace = i981[16]
  request.r(i981[17], i981[18], 0, i980, 'customSimulationSpace')
  i980.simulationSpeed = i981[19]
  i980.useUnscaledTime = !!i981[20]
  i980.scalingMode = i981[21]
  i980.playOnAwake = !!i981[22]
  i980.maxParticles = i981[23]
  i980.emitterVelocityMode = i981[24]
  i980.stopAction = i981[25]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i982 = root || new pc.MinMaxCurve()
  var i983 = data
  i982.mode = i983[0]
  i982.curveMin = new pc.AnimationCurve( { keys_flow: i983[1] } )
  i982.curveMax = new pc.AnimationCurve( { keys_flow: i983[2] } )
  i982.curveMultiplier = i983[3]
  i982.constantMin = i983[4]
  i982.constantMax = i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i984 = root || new pc.MinMaxGradient()
  var i985 = data
  i984.mode = i985[0]
  i984.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i985[1], i984.gradientMin)
  i984.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i985[2], i984.gradientMax)
  i984.colorMin = new pc.Color(i985[3], i985[4], i985[5], i985[6])
  i984.colorMax = new pc.Color(i985[7], i985[8], i985[9], i985[10])
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i987 = data
  i986.mode = i987[0]
  var i989 = i987[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i989[i + 0]) );
  }
  i986.colorKeys = i988
  var i991 = i987[2]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i991[i + 0]) );
  }
  i986.alphaKeys = i990
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemColorBySpeed()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i993[1], i992.color)
  i992.range = new pc.Vec2( i993[2], i993[3] )
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i997 = data
  i996.color = new pc.Color(i997[0], i997[1], i997[2], i997[3])
  i996.time = i997[4]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1001 = data
  i1000.alpha = i1001[0]
  i1000.time = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1002 = root || new pc.ParticleSystemColorOverLifetime()
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1003[1], i1002.color)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1004 = root || new pc.ParticleSystemEmitter()
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[1], i1004.rateOverTime)
  i1004.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[2], i1004.rateOverDistance)
  var i1007 = i1005[3]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1007[i + 0]) );
  }
  i1004.bursts = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1010 = root || new pc.ParticleSystemBurst()
  var i1011 = data
  i1010.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1011[0], i1010.count)
  i1010.cycleCount = i1011[1]
  i1010.minCount = i1011[2]
  i1010.maxCount = i1011[3]
  i1010.repeatInterval = i1011[4]
  i1010.time = i1011[5]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1012 = root || new pc.ParticleSystemRotationBySpeed()
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[1], i1012.x)
  i1012.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[2], i1012.y)
  i1012.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[3], i1012.z)
  i1012.separateAxes = !!i1013[4]
  i1012.range = new pc.Vec2( i1013[5], i1013[6] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1014 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[1], i1014.x)
  i1014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[2], i1014.y)
  i1014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[3], i1014.z)
  i1014.separateAxes = !!i1015[4]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1016 = root || new pc.ParticleSystemShape()
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.shapeType = i1017[1]
  i1016.randomDirectionAmount = i1017[2]
  i1016.sphericalDirectionAmount = i1017[3]
  i1016.randomPositionAmount = i1017[4]
  i1016.alignToDirection = !!i1017[5]
  i1016.radius = i1017[6]
  i1016.radiusMode = i1017[7]
  i1016.radiusSpread = i1017[8]
  i1016.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[9], i1016.radiusSpeed)
  i1016.radiusThickness = i1017[10]
  i1016.angle = i1017[11]
  i1016.length = i1017[12]
  i1016.boxThickness = new pc.Vec3( i1017[13], i1017[14], i1017[15] )
  i1016.meshShapeType = i1017[16]
  request.r(i1017[17], i1017[18], 0, i1016, 'mesh')
  request.r(i1017[19], i1017[20], 0, i1016, 'meshRenderer')
  request.r(i1017[21], i1017[22], 0, i1016, 'skinnedMeshRenderer')
  i1016.useMeshMaterialIndex = !!i1017[23]
  i1016.meshMaterialIndex = i1017[24]
  i1016.useMeshColors = !!i1017[25]
  i1016.normalOffset = i1017[26]
  i1016.arc = i1017[27]
  i1016.arcMode = i1017[28]
  i1016.arcSpread = i1017[29]
  i1016.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[30], i1016.arcSpeed)
  i1016.donutRadius = i1017[31]
  i1016.position = new pc.Vec3( i1017[32], i1017[33], i1017[34] )
  i1016.rotation = new pc.Vec3( i1017[35], i1017[36], i1017[37] )
  i1016.scale = new pc.Vec3( i1017[38], i1017[39], i1017[40] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1018 = root || new pc.ParticleSystemSizeBySpeed()
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[1], i1018.x)
  i1018.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[2], i1018.y)
  i1018.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[3], i1018.z)
  i1018.separateAxes = !!i1019[4]
  i1018.range = new pc.Vec2( i1019[5], i1019[6] )
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1020 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[1], i1020.x)
  i1020.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[2], i1020.y)
  i1020.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[3], i1020.z)
  i1020.separateAxes = !!i1021[4]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1022 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1023 = data
  i1022.enabled = !!i1023[0]
  i1022.mode = i1023[1]
  i1022.animation = i1023[2]
  i1022.numTilesX = i1023[3]
  i1022.numTilesY = i1023[4]
  i1022.useRandomRow = !!i1023[5]
  i1022.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[6], i1022.frameOverTime)
  i1022.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[7], i1022.startFrame)
  i1022.cycleCount = i1023[8]
  i1022.rowIndex = i1023[9]
  i1022.flipU = i1023[10]
  i1022.flipV = i1023[11]
  i1022.spriteCount = i1023[12]
  var i1025 = i1023[13]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.sprites = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1028 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[1], i1028.x)
  i1028.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[2], i1028.y)
  i1028.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[3], i1028.z)
  i1028.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[4], i1028.radial)
  i1028.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[5], i1028.speedModifier)
  i1028.space = i1029[6]
  i1028.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[7], i1028.orbitalX)
  i1028.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[8], i1028.orbitalY)
  i1028.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[9], i1028.orbitalZ)
  i1028.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[10], i1028.orbitalOffsetX)
  i1028.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[11], i1028.orbitalOffsetY)
  i1028.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[12], i1028.orbitalOffsetZ)
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1030 = root || new pc.ParticleSystemNoise()
  var i1031 = data
  i1030.enabled = !!i1031[0]
  i1030.separateAxes = !!i1031[1]
  i1030.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[2], i1030.strengthX)
  i1030.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[3], i1030.strengthY)
  i1030.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[4], i1030.strengthZ)
  i1030.frequency = i1031[5]
  i1030.damping = !!i1031[6]
  i1030.octaveCount = i1031[7]
  i1030.octaveMultiplier = i1031[8]
  i1030.octaveScale = i1031[9]
  i1030.quality = i1031[10]
  i1030.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[11], i1030.scrollSpeed)
  i1030.scrollSpeedMultiplier = i1031[12]
  i1030.remapEnabled = !!i1031[13]
  i1030.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[14], i1030.remapX)
  i1030.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[15], i1030.remapY)
  i1030.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[16], i1030.remapZ)
  i1030.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[17], i1030.positionAmount)
  i1030.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[18], i1030.rotationAmount)
  i1030.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[19], i1030.sizeAmount)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1032 = root || new pc.ParticleSystemInheritVelocity()
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.mode = i1033[1]
  i1032.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[2], i1032.curve)
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1034 = root || new pc.ParticleSystemForceOverLifetime()
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[1], i1034.x)
  i1034.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[2], i1034.y)
  i1034.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[3], i1034.z)
  i1034.space = i1035[4]
  i1034.randomized = !!i1035[5]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1036 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[1], i1036.limit)
  i1036.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[2], i1036.limitX)
  i1036.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[3], i1036.limitY)
  i1036.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[4], i1036.limitZ)
  i1036.dampen = i1037[5]
  i1036.separateAxes = !!i1037[6]
  i1036.space = i1037[7]
  i1036.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[8], i1036.drag)
  i1036.multiplyDragByParticleSize = !!i1037[9]
  i1036.multiplyDragByParticleVelocity = !!i1037[10]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1039 = data
  i1038.ambientIntensity = i1039[0]
  i1038.reflectionIntensity = i1039[1]
  i1038.ambientMode = i1039[2]
  i1038.ambientLight = new pc.Color(i1039[3], i1039[4], i1039[5], i1039[6])
  i1038.ambientSkyColor = new pc.Color(i1039[7], i1039[8], i1039[9], i1039[10])
  i1038.ambientGroundColor = new pc.Color(i1039[11], i1039[12], i1039[13], i1039[14])
  i1038.ambientEquatorColor = new pc.Color(i1039[15], i1039[16], i1039[17], i1039[18])
  i1038.fogColor = new pc.Color(i1039[19], i1039[20], i1039[21], i1039[22])
  i1038.fogEndDistance = i1039[23]
  i1038.fogStartDistance = i1039[24]
  i1038.fogDensity = i1039[25]
  i1038.fog = !!i1039[26]
  request.r(i1039[27], i1039[28], 0, i1038, 'skybox')
  i1038.fogMode = i1039[29]
  var i1041 = i1039[30]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1041[i + 0]) );
  }
  i1038.lightmaps = i1040
  i1038.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1039[31], i1038.lightProbes)
  i1038.lightmapsMode = i1039[32]
  i1038.mixedBakeMode = i1039[33]
  i1038.environmentLightingMode = i1039[34]
  i1038.ambientProbe = new pc.SphericalHarmonicsL2(i1039[35])
  request.r(i1039[36], i1039[37], 0, i1038, 'customReflection')
  request.r(i1039[38], i1039[39], 0, i1038, 'defaultReflection')
  i1038.defaultReflectionMode = i1039[40]
  i1038.defaultReflectionResolution = i1039[41]
  i1038.sunLightObjectId = i1039[42]
  i1038.pixelLightCount = i1039[43]
  i1038.defaultReflectionHDR = !!i1039[44]
  i1038.hasLightDataAsset = !!i1039[45]
  i1038.hasManualGenerate = !!i1039[46]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'lightmapColor')
  request.r(i1045[2], i1045[3], 0, i1044, 'lightmapDirection')
  request.r(i1045[4], i1045[5], 0, i1044, 'shadowMask')
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1046 = root || new UnityEngine.LightProbes()
  var i1047 = data
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1057[i + 0]));
  }
  i1054.ShaderCompilationErrors = i1056
  i1054.name = i1055[1]
  i1054.guid = i1055[2]
  var i1059 = i1055[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.shaderDefinedKeywords = i1058
  var i1061 = i1055[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1061[i + 0]) );
  }
  i1054.passes = i1060
  var i1063 = i1055[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1063[i + 0]) );
  }
  i1054.usePasses = i1062
  var i1065 = i1055[6]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1065[i + 0]) );
  }
  i1054.defaultParameterValues = i1064
  request.r(i1055[7], i1055[8], 0, i1054, 'unityFallbackShader')
  i1054.readDepth = !!i1055[9]
  i1054.hasDepthOnlyPass = !!i1055[10]
  i1054.isCreatedByShaderGraph = !!i1055[11]
  i1054.disableBatching = !!i1055[12]
  i1054.compiled = !!i1055[13]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1069 = data
  i1068.shaderName = i1069[0]
  i1068.errorMessage = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1074 = root || new pc.UnityShaderPass()
  var i1075 = data
  i1074.id = i1075[0]
  i1074.subShaderIndex = i1075[1]
  i1074.name = i1075[2]
  i1074.passType = i1075[3]
  i1074.grabPassTextureName = i1075[4]
  i1074.usePass = !!i1075[5]
  i1074.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[6], i1074.zTest)
  i1074.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[7], i1074.zWrite)
  i1074.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[8], i1074.culling)
  i1074.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1075[9], i1074.blending)
  i1074.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1075[10], i1074.alphaBlending)
  i1074.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[11], i1074.colorWriteMask)
  i1074.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[12], i1074.offsetUnits)
  i1074.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[13], i1074.offsetFactor)
  i1074.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[14], i1074.stencilRef)
  i1074.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[15], i1074.stencilReadMask)
  i1074.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[16], i1074.stencilWriteMask)
  i1074.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[17], i1074.stencilOp)
  i1074.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[18], i1074.stencilOpFront)
  i1074.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[19], i1074.stencilOpBack)
  var i1077 = i1075[20]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1077[i + 0]) );
  }
  i1074.tags = i1076
  var i1079 = i1075[21]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.passDefinedKeywords = i1078
  var i1081 = i1075[22]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1081[i + 0]) );
  }
  i1074.passDefinedKeywordGroups = i1080
  var i1083 = i1075[23]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1083[i + 0]) );
  }
  i1074.variants = i1082
  var i1085 = i1075[24]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1085[i + 0]) );
  }
  i1074.excludedVariants = i1084
  i1074.hasDepthReader = !!i1075[25]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1087 = data
  i1086.val = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1089 = data
  i1088.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[0], i1088.src)
  i1088.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[1], i1088.dst)
  i1088.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[2], i1088.op)
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1091 = data
  i1090.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[0], i1090.pass)
  i1090.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[1], i1090.fail)
  i1090.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[2], i1090.zFail)
  i1090.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[3], i1090.comp)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.value = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1098.keywords = i1100
  i1098.hasDiscard = !!i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1105 = data
  i1104.passId = i1105[0]
  i1104.subShaderIndex = i1105[1]
  var i1107 = i1105[2]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1104.keywords = i1106
  i1104.vertexProgram = i1105[3]
  i1104.fragmentProgram = i1105[4]
  i1104.exportedForWebGl2 = !!i1105[5]
  i1104.readDepth = !!i1105[6]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'shader')
  i1110.pass = i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.type = i1115[1]
  i1114.value = new pc.Vec4( i1115[2], i1115[3], i1115[4], i1115[5] )
  i1114.textureValue = i1115[6]
  i1114.shaderPropertyFlag = i1115[7]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1117 = data
  i1116.name = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'texture')
  i1116.aabb = i1117[3]
  i1116.vertices = i1117[4]
  i1116.triangles = i1117[5]
  i1116.textureRect = UnityEngine.Rect.MinMaxRect(i1117[6], i1117[7], i1117[8], i1117[9])
  i1116.packedRect = UnityEngine.Rect.MinMaxRect(i1117[10], i1117[11], i1117[12], i1117[13])
  i1116.border = new pc.Vec4( i1117[14], i1117[15], i1117[16], i1117[17] )
  i1116.transparency = i1117[18]
  i1116.bounds = i1117[19]
  i1116.pixelsPerUnit = i1117[20]
  i1116.textureWidth = i1117[21]
  i1116.textureHeight = i1117[22]
  i1116.nativeSize = new pc.Vec2( i1117[23], i1117[24] )
  i1116.pivot = new pc.Vec2( i1117[25], i1117[26] )
  i1116.textureRectOffset = new pc.Vec2( i1117[27], i1117[28] )
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1119 = data
  i1118.name = i1119[0]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.wrapMode = i1121[1]
  i1120.isLooping = !!i1121[2]
  i1120.length = i1121[3]
  var i1123 = i1121[4]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1123[i + 0]) );
  }
  i1120.curves = i1122
  var i1125 = i1121[5]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1125[i + 0]) );
  }
  i1120.events = i1124
  i1120.halfPrecision = !!i1121[6]
  i1120._frameRate = i1121[7]
  i1120.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1121[8], i1120.localBounds)
  i1120.hasMuscleCurves = !!i1121[9]
  var i1127 = i1121[10]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1120.clipMuscleConstant = i1126
  i1120.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1121[11], i1120.clipBindingConstant)
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1131 = data
  i1130.path = i1131[0]
  i1130.hash = i1131[1]
  i1130.componentType = i1131[2]
  i1130.property = i1131[3]
  i1130.keys = i1131[4]
  var i1133 = i1131[5]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1133[i + 0]) );
  }
  i1130.objectReferenceKeys = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1137 = data
  i1136.time = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'value')
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1141 = data
  i1140.functionName = i1141[0]
  i1140.floatParameter = i1141[1]
  i1140.intParameter = i1141[2]
  i1140.stringParameter = i1141[3]
  request.r(i1141[4], i1141[5], 0, i1140, 'objectReferenceParameter')
  i1140.time = i1141[6]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1143 = data
  i1142.center = new pc.Vec3( i1143[0], i1143[1], i1143[2] )
  i1142.extends = new pc.Vec3( i1143[3], i1143[4], i1143[5] )
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1146.genericBindings = i1148
  var i1151 = i1147[1]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.pptrCurveMapping = i1150
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.blendParameter = i1153[1]
  i1152.blendParameterY = i1153[2]
  i1152.blendType = i1153[3]
  var i1155 = i1153[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1155[i + 0]) );
  }
  i1152.children = i1154
  i1152.useAutomaticThresholds = !!i1153[5]
  i1152.minThreshold = i1153[6]
  i1152.maxThreshold = i1153[7]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'motion')
  i1158.threshold = i1159[2]
  i1158.position = new pc.Vec2( i1159[3], i1159[4] )
  i1158.timeScale = i1159[5]
  i1158.cycleOffset = i1159[6]
  i1158.directBlendParameter = i1159[7]
  i1158.mirror = !!i1159[8]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1161 = data
  i1160.name = i1161[0]
  var i1163 = i1161[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1163[i + 0]) );
  }
  i1160.layers = i1162
  var i1165 = i1161[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1165[i + 0]) );
  }
  i1160.parameters = i1164
  i1160.animationClips = i1161[3]
  i1160.avatarUnsupported = i1161[4]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.defaultWeight = i1169[1]
  i1168.blendingMode = i1169[2]
  i1168.avatarMask = i1169[3]
  i1168.syncedLayerIndex = i1169[4]
  i1168.syncedLayerAffectsTiming = !!i1169[5]
  i1168.syncedLayers = i1169[6]
  i1168.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1169[7], i1168.stateMachine)
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.path = i1171[2]
  var i1173 = i1171[3]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1173[i + 0]) );
  }
  i1170.states = i1172
  var i1175 = i1171[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1175[i + 0]) );
  }
  i1170.machines = i1174
  var i1177 = i1171[5]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1177[i + 0]) );
  }
  i1170.entryStateTransitions = i1176
  var i1179 = i1171[6]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1170.exitStateTransitions = i1178
  var i1181 = i1171[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1181[i + 0]) );
  }
  i1170.anyStateTransitions = i1180
  i1170.defaultStateId = i1171[8]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  i1184.cycleOffset = i1185[2]
  i1184.cycleOffsetParameter = i1185[3]
  i1184.cycleOffsetParameterActive = !!i1185[4]
  i1184.mirror = !!i1185[5]
  i1184.mirrorParameter = i1185[6]
  i1184.mirrorParameterActive = !!i1185[7]
  i1184.motionId = i1185[8]
  i1184.nameHash = i1185[9]
  i1184.fullPathHash = i1185[10]
  i1184.speed = i1185[11]
  i1184.speedParameter = i1185[12]
  i1184.speedParameterActive = !!i1185[13]
  i1184.tag = i1185[14]
  i1184.tagHash = i1185[15]
  i1184.writeDefaultValues = !!i1185[16]
  var i1187 = i1185[17]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1184.behaviours = i1186
  var i1189 = i1185[18]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1184.transitions = i1188
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1195 = data
  i1194.fullPath = i1195[0]
  i1194.canTransitionToSelf = !!i1195[1]
  i1194.duration = i1195[2]
  i1194.exitTime = i1195[3]
  i1194.hasExitTime = !!i1195[4]
  i1194.hasFixedDuration = !!i1195[5]
  i1194.interruptionSource = i1195[6]
  i1194.offset = i1195[7]
  i1194.orderedInterruption = !!i1195[8]
  i1194.destinationStateId = i1195[9]
  i1194.isExit = !!i1195[10]
  i1194.mute = !!i1195[11]
  i1194.solo = !!i1195[12]
  var i1197 = i1195[13]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1197[i + 0]) );
  }
  i1194.conditions = i1196
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1201 = data
  i1200.mode = i1201[0]
  i1200.parameter = i1201[1]
  i1200.threshold = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1207 = data
  i1206.destinationStateId = i1207[0]
  i1206.isExit = !!i1207[1]
  i1206.mute = !!i1207[2]
  i1206.solo = !!i1207[3]
  var i1209 = i1207[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1209[i + 0]) );
  }
  i1206.conditions = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1213 = data
  i1212.defaultBool = !!i1213[0]
  i1212.defaultFloat = i1213[1]
  i1212.defaultInt = i1213[2]
  i1212.name = i1213[3]
  i1212.nameHash = i1213[4]
  i1212.type = i1213[5]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1215 = data
  i1214.name = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, '_runtimeAnimatorController')
  var i1217 = i1215[3]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1214._originalAnimationClips = i1216
  var i1219 = i1215[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 2, i1218, '')
  }
  i1214._overrideAnimationClips = i1218
  var i1221 = i1215[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1214._animationClips = i1220
  var i1223 = i1215[6]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('UnityEngine.AnimationClipPair', i1223[i + 0]) );
  }
  i1214._animationClipPairs = i1222
  return i1214
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'originalClip')
  request.r(i1229[2], i1229[3], 0, i1228, 'overrideClip')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.bytes64 = i1231[1]
  i1230.data = i1231[2]
  return i1230
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1233 = data
  i1232.normalStyle = i1233[0]
  i1232.normalSpacingOffset = i1233[1]
  i1232.boldStyle = i1233[2]
  i1232.boldSpacing = i1233[3]
  i1232.italicStyle = i1233[4]
  i1232.tabSize = i1233[5]
  request.r(i1233[6], i1233[7], 0, i1232, 'atlas')
  i1232.m_SourceFontFileGUID = i1233[8]
  i1232.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1233[9], i1232.m_CreationSettings)
  request.r(i1233[10], i1233[11], 0, i1232, 'm_SourceFontFile')
  i1232.m_SourceFontFilePath = i1233[12]
  i1232.m_AtlasPopulationMode = i1233[13]
  i1232.InternalDynamicOS = !!i1233[14]
  var i1235 = i1233[15]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.Glyph', i1235[i + 0]));
  }
  i1232.m_GlyphTable = i1234
  var i1237 = i1233[16]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Character', i1237[i + 0]));
  }
  i1232.m_CharacterTable = i1236
  var i1239 = i1233[17]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1232.m_AtlasTextures = i1238
  i1232.m_AtlasTextureIndex = i1233[18]
  i1232.m_IsMultiAtlasTexturesEnabled = !!i1233[19]
  i1232.m_GetFontFeatures = !!i1233[20]
  i1232.m_ClearDynamicDataOnBuild = !!i1233[21]
  i1232.m_AtlasWidth = i1233[22]
  i1232.m_AtlasHeight = i1233[23]
  i1232.m_AtlasPadding = i1233[24]
  i1232.m_AtlasRenderMode = i1233[25]
  var i1241 = i1233[26]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('UnityEngine.TextCore.GlyphRect', i1241[i + 0]));
  }
  i1232.m_UsedGlyphRects = i1240
  var i1243 = i1233[27]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.GlyphRect', i1243[i + 0]));
  }
  i1232.m_FreeGlyphRects = i1242
  i1232.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1233[28], i1232.m_FontFeatureTable)
  i1232.m_ShouldReimportFontFeatures = !!i1233[29]
  var i1245 = i1233[30]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1232.m_FallbackFontAssetTable = i1244
  var i1247 = i1233[31]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1232.m_FontWeightTable = i1246
  var i1249 = i1233[32]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('TMPro.TMP_FontWeightPair', i1249[i + 0]) );
  }
  i1232.fontWeights = i1248
  i1232.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1233[33], i1232.m_fontInfo)
  var i1251 = i1233[34]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_Glyph', i1251[i + 0]));
  }
  i1232.m_glyphInfoList = i1250
  i1232.m_KerningTable = request.d('TMPro.KerningTable', i1233[35], i1232.m_KerningTable)
  var i1253 = i1233[36]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1232.fallbackFontAssets = i1252
  i1232.m_Version = i1233[37]
  i1232.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1233[38], i1232.m_FaceInfo)
  request.r(i1233[39], i1233[40], 0, i1232, 'm_Material')
  return i1232
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1255 = data
  i1254.sourceFontFileName = i1255[0]
  i1254.sourceFontFileGUID = i1255[1]
  i1254.faceIndex = i1255[2]
  i1254.pointSizeSamplingMode = i1255[3]
  i1254.pointSize = i1255[4]
  i1254.padding = i1255[5]
  i1254.paddingMode = i1255[6]
  i1254.packingMode = i1255[7]
  i1254.atlasWidth = i1255[8]
  i1254.atlasHeight = i1255[9]
  i1254.characterSetSelectionMode = i1255[10]
  i1254.characterSequence = i1255[11]
  i1254.referencedFontAssetGUID = i1255[12]
  i1254.referencedTextAssetGUID = i1255[13]
  i1254.fontStyle = i1255[14]
  i1254.fontStyleModifier = i1255[15]
  i1254.renderMode = i1255[16]
  i1254.includeFontFeatures = !!i1255[17]
  return i1254
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1259 = data
  i1258.m_Index = i1259[0]
  i1258.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1259[1], i1258.m_Metrics)
  i1258.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1259[2], i1258.m_GlyphRect)
  i1258.m_Scale = i1259[3]
  i1258.m_AtlasIndex = i1259[4]
  i1258.m_ClassDefinitionType = i1259[5]
  return i1258
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1261 = data
  i1260.m_Width = i1261[0]
  i1260.m_Height = i1261[1]
  i1260.m_HorizontalBearingX = i1261[2]
  i1260.m_HorizontalBearingY = i1261[3]
  i1260.m_HorizontalAdvance = i1261[4]
  return i1260
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1263 = data
  i1262.m_X = i1263[0]
  i1262.m_Y = i1263[1]
  i1262.m_Width = i1263[2]
  i1262.m_Height = i1263[3]
  return i1262
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Character' )
  var i1267 = data
  i1266.m_ElementType = i1267[0]
  i1266.m_Unicode = i1267[1]
  i1266.m_GlyphIndex = i1267[2]
  i1266.m_Scale = i1267[3]
  return i1266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MultipleSubstitutionRecord', i1275[i + 0]));
  }
  i1272.m_MultipleSubstitutionRecords = i1274
  var i1277 = i1273[1]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.LigatureSubstitutionRecord', i1277[i + 0]));
  }
  i1272.m_LigatureSubstitutionRecords = i1276
  var i1279 = i1273[2]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1279[i + 0]));
  }
  i1272.m_GlyphPairAdjustmentRecords = i1278
  var i1281 = i1273[3]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1281[i + 0]));
  }
  i1272.m_MarkToBaseAdjustmentRecords = i1280
  var i1283 = i1273[4]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1283[i + 0]));
  }
  i1272.m_MarkToMarkAdjustmentRecords = i1282
  return i1272
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1287 = data
  i1286.m_TargetGlyphID = i1287[0]
  i1286.m_SubstituteGlyphIDs = i1287[1]
  return i1286
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1291 = data
  i1290.m_ComponentGlyphIDs = i1291[0]
  i1290.m_LigatureGlyphID = i1291[1]
  return i1290
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1295 = data
  i1294.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[0], i1294.m_FirstAdjustmentRecord)
  i1294.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[1], i1294.m_SecondAdjustmentRecord)
  i1294.m_FeatureLookupFlags = i1295[2]
  return i1294
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1299 = data
  i1298.m_BaseGlyphID = i1299[0]
  i1298.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1299[1], i1298.m_BaseGlyphAnchorPoint)
  i1298.m_MarkGlyphID = i1299[2]
  i1298.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1299[3], i1298.m_MarkPositionAdjustment)
  return i1298
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1303 = data
  i1302.m_BaseMarkGlyphID = i1303[0]
  i1302.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1303[1], i1302.m_BaseMarkGlyphAnchorPoint)
  i1302.m_CombiningMarkGlyphID = i1303[2]
  i1302.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1303[3], i1302.m_CombiningMarkPositionAdjustment)
  return i1302
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'regularTypeface')
  request.r(i1309[2], i1309[3], 0, i1308, 'italicTypeface')
  return i1308
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1311 = data
  i1310.Name = i1311[0]
  i1310.PointSize = i1311[1]
  i1310.Scale = i1311[2]
  i1310.CharacterCount = i1311[3]
  i1310.LineHeight = i1311[4]
  i1310.Baseline = i1311[5]
  i1310.Ascender = i1311[6]
  i1310.CapHeight = i1311[7]
  i1310.Descender = i1311[8]
  i1310.CenterLine = i1311[9]
  i1310.SuperscriptOffset = i1311[10]
  i1310.SubscriptOffset = i1311[11]
  i1310.SubSize = i1311[12]
  i1310.Underline = i1311[13]
  i1310.UnderlineThickness = i1311[14]
  i1310.strikethrough = i1311[15]
  i1310.strikethroughThickness = i1311[16]
  i1310.TabWidth = i1311[17]
  i1310.Padding = i1311[18]
  i1310.AtlasWidth = i1311[19]
  i1310.AtlasHeight = i1311[20]
  return i1310
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.x = i1315[1]
  i1314.y = i1315[2]
  i1314.width = i1315[3]
  i1314.height = i1315[4]
  i1314.xOffset = i1315[5]
  i1314.yOffset = i1315[6]
  i1314.xAdvance = i1315[7]
  i1314.scale = i1315[8]
  return i1314
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.KerningTable' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.KerningPair', i1319[i + 0]));
  }
  i1316.kerningPairs = i1318
  return i1316
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.KerningPair' )
  var i1323 = data
  i1322.xOffset = i1323[0]
  i1322.m_FirstGlyph = i1323[1]
  i1322.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[2], i1322.m_FirstGlyphAdjustments)
  i1322.m_SecondGlyph = i1323[3]
  i1322.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[4], i1322.m_SecondGlyphAdjustments)
  i1322.m_IgnoreSpacingAdjustments = !!i1323[5]
  return i1322
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1325 = data
  i1324.m_FaceIndex = i1325[0]
  i1324.m_FamilyName = i1325[1]
  i1324.m_StyleName = i1325[2]
  i1324.m_PointSize = i1325[3]
  i1324.m_Scale = i1325[4]
  i1324.m_UnitsPerEM = i1325[5]
  i1324.m_LineHeight = i1325[6]
  i1324.m_AscentLine = i1325[7]
  i1324.m_CapLine = i1325[8]
  i1324.m_MeanLine = i1325[9]
  i1324.m_Baseline = i1325[10]
  i1324.m_DescentLine = i1325[11]
  i1324.m_SuperscriptOffset = i1325[12]
  i1324.m_SuperscriptSize = i1325[13]
  i1324.m_SubscriptOffset = i1325[14]
  i1324.m_SubscriptSize = i1325[15]
  i1324.m_UnderlineOffset = i1325[16]
  i1324.m_UnderlineThickness = i1325[17]
  i1324.m_StrikethroughOffset = i1325[18]
  i1324.m_StrikethroughThickness = i1325[19]
  i1324.m_TabWidth = i1325[20]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1327 = data
  i1326.useSafeMode = !!i1327[0]
  i1326.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1327[1], i1326.safeModeOptions)
  i1326.timeScale = i1327[2]
  i1326.unscaledTimeScale = i1327[3]
  i1326.useSmoothDeltaTime = !!i1327[4]
  i1326.maxSmoothUnscaledTime = i1327[5]
  i1326.rewindCallbackMode = i1327[6]
  i1326.showUnityEditorReport = !!i1327[7]
  i1326.logBehaviour = i1327[8]
  i1326.drawGizmos = !!i1327[9]
  i1326.defaultRecyclable = !!i1327[10]
  i1326.defaultAutoPlay = i1327[11]
  i1326.defaultUpdateType = i1327[12]
  i1326.defaultTimeScaleIndependent = !!i1327[13]
  i1326.defaultEaseType = i1327[14]
  i1326.defaultEaseOvershootOrAmplitude = i1327[15]
  i1326.defaultEasePeriod = i1327[16]
  i1326.defaultAutoKill = !!i1327[17]
  i1326.defaultLoopType = i1327[18]
  i1326.debugMode = !!i1327[19]
  i1326.debugStoreTargetId = !!i1327[20]
  i1326.showPreviewPanel = !!i1327[21]
  i1326.storeSettingsLocation = i1327[22]
  i1326.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1327[23], i1326.modules)
  i1326.createASMDEF = !!i1327[24]
  i1326.showPlayingTweens = !!i1327[25]
  i1326.showPausedTweens = !!i1327[26]
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1329 = data
  i1328.logBehaviour = i1329[0]
  i1328.nestedTweenFailureBehaviour = i1329[1]
  return i1328
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1331 = data
  i1330.showPanel = !!i1331[0]
  i1330.audioEnabled = !!i1331[1]
  i1330.physicsEnabled = !!i1331[2]
  i1330.physics2DEnabled = !!i1331[3]
  i1330.spriteEnabled = !!i1331[4]
  i1330.uiEnabled = !!i1331[5]
  i1330.textMeshProEnabled = !!i1331[6]
  i1330.tk2DEnabled = !!i1331[7]
  i1330.deAudioEnabled = !!i1331[8]
  i1330.deUnityExtendedEnabled = !!i1331[9]
  i1330.epoOutlineEnabled = !!i1331[10]
  return i1330
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_Settings' )
  var i1333 = data
  i1332.assetVersion = i1333[0]
  i1332.m_TextWrappingMode = i1333[1]
  i1332.m_enableKerning = !!i1333[2]
  var i1335 = i1333[3]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(i1335[i + 0]);
  }
  i1332.m_ActiveFontFeatures = i1334
  i1332.m_enableExtraPadding = !!i1333[4]
  i1332.m_enableTintAllSprites = !!i1333[5]
  i1332.m_enableParseEscapeCharacters = !!i1333[6]
  i1332.m_EnableRaycastTarget = !!i1333[7]
  i1332.m_GetFontFeaturesAtRuntime = !!i1333[8]
  i1332.m_missingGlyphCharacter = i1333[9]
  i1332.m_ClearDynamicDataOnBuild = !!i1333[10]
  i1332.m_warningsDisabled = !!i1333[11]
  request.r(i1333[12], i1333[13], 0, i1332, 'm_defaultFontAsset')
  i1332.m_defaultFontAssetPath = i1333[14]
  i1332.m_defaultFontSize = i1333[15]
  i1332.m_defaultAutoSizeMinRatio = i1333[16]
  i1332.m_defaultAutoSizeMaxRatio = i1333[17]
  i1332.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1333[18], i1333[19] )
  i1332.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1333[20], i1333[21] )
  i1332.m_autoSizeTextContainer = !!i1333[22]
  i1332.m_IsTextObjectScaleStatic = !!i1333[23]
  var i1337 = i1333[24]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1332.m_fallbackFontAssets = i1336
  i1332.m_matchMaterialPreset = !!i1333[25]
  i1332.m_HideSubTextObjects = !!i1333[26]
  request.r(i1333[27], i1333[28], 0, i1332, 'm_defaultSpriteAsset')
  i1332.m_defaultSpriteAssetPath = i1333[29]
  i1332.m_enableEmojiSupport = !!i1333[30]
  i1332.m_MissingCharacterSpriteUnicode = i1333[31]
  var i1339 = i1333[32]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1332.m_EmojiFallbackTextAssets = i1338
  i1332.m_defaultColorGradientPresetsPath = i1333[33]
  request.r(i1333[34], i1333[35], 0, i1332, 'm_defaultStyleSheet')
  i1332.m_StyleSheetsResourcePath = i1333[36]
  request.r(i1333[37], i1333[38], 0, i1332, 'm_leadingCharacters')
  request.r(i1333[39], i1333[40], 0, i1332, 'm_followingCharacters')
  i1332.m_UseModernHangulLineBreakingRules = !!i1333[41]
  return i1332
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'spriteSheet')
  var i1345 = i1343[2]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_Sprite', i1345[i + 0]));
  }
  i1342.spriteInfoList = i1344
  var i1347 = i1343[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1342.fallbackSpriteAssets = i1346
  var i1349 = i1343[4]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.TMP_SpriteCharacter', i1349[i + 0]));
  }
  i1342.m_SpriteCharacterTable = i1348
  var i1351 = i1343[5]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_SpriteGlyph', i1351[i + 0]));
  }
  i1342.m_GlyphTable = i1350
  i1342.m_Version = i1343[6]
  i1342.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1343[7], i1342.m_FaceInfo)
  request.r(i1343[8], i1343[9], 0, i1342, 'm_Material')
  return i1342
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.hashCode = i1355[1]
  i1354.unicode = i1355[2]
  i1354.pivot = new pc.Vec2( i1355[3], i1355[4] )
  request.r(i1355[5], i1355[6], 0, i1354, 'sprite')
  i1354.id = i1355[7]
  i1354.x = i1355[8]
  i1354.y = i1355[9]
  i1354.width = i1355[10]
  i1354.height = i1355[11]
  i1354.xOffset = i1355[12]
  i1354.yOffset = i1355[13]
  i1354.xAdvance = i1355[14]
  i1354.scale = i1355[15]
  return i1354
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1361 = data
  i1360.m_Name = i1361[0]
  i1360.m_ElementType = i1361[1]
  i1360.m_Unicode = i1361[2]
  i1360.m_GlyphIndex = i1361[3]
  i1360.m_Scale = i1361[4]
  return i1360
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'sprite')
  i1364.m_Index = i1365[2]
  i1364.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1365[3], i1364.m_Metrics)
  i1364.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1365[4], i1364.m_GlyphRect)
  i1364.m_Scale = i1365[5]
  i1364.m_AtlasIndex = i1365[6]
  i1364.m_ClassDefinitionType = i1365[7]
  return i1364
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_Style', i1369[i + 0]));
  }
  i1366.m_StyleList = i1368
  return i1366
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_Style' )
  var i1373 = data
  i1372.m_Name = i1373[0]
  i1372.m_HashCode = i1373[1]
  i1372.m_OpeningDefinition = i1373[2]
  i1372.m_ClosingDefinition = i1373[3]
  i1372.m_OpeningTagArray = i1373[4]
  i1372.m_ClosingTagArray = i1373[5]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1377[i + 0]) );
  }
  i1374.files = i1376
  i1374.componentToPrefabIds = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1381 = data
  i1380.path = i1381[0]
  request.r(i1381[1], i1381[2], 0, i1380, 'unityObject')
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1385[i + 0]) );
  }
  i1382.scriptsExecutionOrder = i1384
  var i1387 = i1383[1]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1387[i + 0]) );
  }
  i1382.sortingLayers = i1386
  var i1389 = i1383[2]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1389[i + 0]) );
  }
  i1382.cullingLayers = i1388
  i1382.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1383[3], i1382.timeSettings)
  i1382.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1383[4], i1382.physicsSettings)
  i1382.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1383[5], i1382.physics2DSettings)
  i1382.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1383[6], i1382.qualitySettings)
  i1382.enableRealtimeShadows = !!i1383[7]
  i1382.enableAutoInstancing = !!i1383[8]
  i1382.enableStaticBatching = !!i1383[9]
  i1382.enableDynamicBatching = !!i1383[10]
  i1382.usePreservativeDynamicBatching = !!i1383[11]
  i1382.lightmapEncodingQuality = i1383[12]
  i1382.desiredColorSpace = i1383[13]
  var i1391 = i1383[14]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1382.allTags = i1390
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.value = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  i1398.value = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1403 = data
  i1402.id = i1403[0]
  i1402.name = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1405 = data
  i1404.fixedDeltaTime = i1405[0]
  i1404.maximumDeltaTime = i1405[1]
  i1404.timeScale = i1405[2]
  i1404.maximumParticleTimestep = i1405[3]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1407 = data
  i1406.gravity = new pc.Vec3( i1407[0], i1407[1], i1407[2] )
  i1406.defaultSolverIterations = i1407[3]
  i1406.bounceThreshold = i1407[4]
  i1406.autoSyncTransforms = !!i1407[5]
  i1406.autoSimulation = !!i1407[6]
  var i1409 = i1407[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1409[i + 0]) );
  }
  i1406.collisionMatrix = i1408
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.layerId = i1413[1]
  i1412.otherLayerId = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'material')
  i1414.gravity = new pc.Vec2( i1415[2], i1415[3] )
  i1414.positionIterations = i1415[4]
  i1414.velocityIterations = i1415[5]
  i1414.velocityThreshold = i1415[6]
  i1414.maxLinearCorrection = i1415[7]
  i1414.maxAngularCorrection = i1415[8]
  i1414.maxTranslationSpeed = i1415[9]
  i1414.maxRotationSpeed = i1415[10]
  i1414.baumgarteScale = i1415[11]
  i1414.baumgarteTOIScale = i1415[12]
  i1414.timeToSleep = i1415[13]
  i1414.linearSleepTolerance = i1415[14]
  i1414.angularSleepTolerance = i1415[15]
  i1414.defaultContactOffset = i1415[16]
  i1414.autoSimulation = !!i1415[17]
  i1414.queriesHitTriggers = !!i1415[18]
  i1414.queriesStartInColliders = !!i1415[19]
  i1414.callbacksOnDisable = !!i1415[20]
  i1414.reuseCollisionCallbacks = !!i1415[21]
  i1414.autoSyncTransforms = !!i1415[22]
  var i1417 = i1415[23]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1423 = data
  var i1425 = i1423[0]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1425[i + 0]) );
  }
  i1422.qualityLevels = i1424
  var i1427 = i1423[1]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1422.names = i1426
  i1422.shadows = i1423[2]
  i1422.anisotropicFiltering = i1423[3]
  i1422.antiAliasing = i1423[4]
  i1422.lodBias = i1423[5]
  i1422.shadowCascades = i1423[6]
  i1422.shadowDistance = i1423[7]
  i1422.shadowmaskMode = i1423[8]
  i1422.shadowProjection = i1423[9]
  i1422.shadowResolution = i1423[10]
  i1422.softParticles = !!i1423[11]
  i1422.softVegetation = !!i1423[12]
  i1422.activeColorSpace = i1423[13]
  i1422.desiredColorSpace = i1423[14]
  i1422.masterTextureLimit = i1423[15]
  i1422.maxQueuedFrames = i1423[16]
  i1422.particleRaycastBudget = i1423[17]
  i1422.pixelLightCount = i1423[18]
  i1422.realtimeReflectionProbes = !!i1423[19]
  i1422.shadowCascade2Split = i1423[20]
  i1422.shadowCascade4Split = new pc.Vec3( i1423[21], i1423[22], i1423[23] )
  i1422.streamingMipmapsActive = !!i1423[24]
  i1422.vSyncCount = i1423[25]
  i1422.asyncUploadBufferSize = i1423[26]
  i1422.asyncUploadTimeSlice = i1423[27]
  i1422.billboardsFaceCameraPosition = !!i1423[28]
  i1422.shadowNearPlaneOffset = i1423[29]
  i1422.streamingMipmapsMemoryBudget = i1423[30]
  i1422.maximumLODLevel = i1423[31]
  i1422.streamingMipmapsAddAllCameras = !!i1423[32]
  i1422.streamingMipmapsMaxLevelReduction = i1423[33]
  i1422.streamingMipmapsRenderersPerFrame = i1423[34]
  i1422.resolutionScalingFixedDPIFactor = i1423[35]
  i1422.streamingMipmapsMaxFileIORequests = i1423[36]
  i1422.currentQualityLevel = i1423[37]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1431 = data
  i1430.name = i1431[0]
  var i1433 = i1431[1]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1433[i + 0]) );
  }
  i1430.tos = i1432
  var i1435 = i1431[2]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.constant = i1434
  i1430.isValid = !!i1431[3]
  i1430.isHuman = !!i1431[4]
  i1430.hasRootMotion = !!i1431[5]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1439 = data
  i1438.hash = i1439[0]
  i1438.path = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1443 = data
  i1442.weight = i1443[0]
  i1442.vertices = i1443[1]
  i1442.normals = i1443[2]
  i1442.tangents = i1443[3]
  return i1442
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1445 = data
  request.r(i1445[0], i1445[1], 0, i1444, 'm_ObjectArgument')
  i1444.m_ObjectArgumentAssemblyTypeName = i1445[2]
  i1444.m_IntArgument = i1445[3]
  i1444.m_FloatArgument = i1445[4]
  i1444.m_StringArgument = i1445[5]
  i1444.m_BoolArgument = !!i1445[6]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1447 = data
  i1446.m_GlyphIndex = i1447[0]
  i1446.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1447[1], i1446.m_GlyphValueRecord)
  return i1446
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1449 = data
  i1448.m_XCoordinate = i1449[0]
  i1448.m_YCoordinate = i1449[1]
  return i1448
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1451 = data
  i1450.m_XPositionAdjustment = i1451[0]
  i1450.m_YPositionAdjustment = i1451[1]
  return i1450
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1453 = data
  i1452.xPlacement = i1453[0]
  i1452.yPlacement = i1453[1]
  i1452.xAdvance = i1453[2]
  i1452.yAdvance = i1453[3]
  return i1452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1455 = data
  i1454.m_XPlacement = i1455[0]
  i1454.m_YPlacement = i1455[1]
  i1454.m_XAdvance = i1455[2]
  i1454.m_YAdvance = i1455[3]
  return i1454
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

Deserializers.buildID = "b99fde5a-9fa6-4f70-a963-9e206dae80e5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

