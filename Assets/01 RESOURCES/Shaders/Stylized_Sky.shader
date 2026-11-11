Shader "Stylized/Sky" {
	Properties {
		[Header(Sun Disc)] _SunDiscColor ("Color", Color) = (1,1,1,1)
		_SunDiscMultiplier ("Multiplier", Float) = 25
		_SunDiscExponent ("Exponent", Float) = 125000
		[Header(Sun Halo)] _SunHaloColor ("Color", Color) = (0.8970588,0.7760561,0.6661981,1)
		_SunHaloExponent ("Exponent", Float) = 125
		_SunHaloContribution ("Contribution", Range(0, 1)) = 0.75
		[Header(Horizon Line)] _HorizonLineColor ("Color", Color) = (0.9044118,0.8872592,0.7913603,1)
		_HorizonLineExponent ("Exponent", Float) = 4
		_HorizonLineContribution ("Contribution", Range(0, 1)) = 0.25
		[Header(Sky Gradient)] _SkyGradientTop ("Top", Color) = (0.172549,0.5686274,0.6941177,1)
		_SkyGradientBottom ("Bottom", Color) = (0.764706,0.8156863,0.8509805,1)
		_SkyGradientExponent ("Exponent", Float) = 2.5
	}
	SubShader {
		Tags { "Queue" = "Background" "RenderType" = "Background" "PreviewType" = "Skybox" }
		Cull Off ZWrite Off

		Pass {
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"

			half4 _SunDiscColor, _SunHaloColor, _HorizonLineColor, _SkyGradientTop, _SkyGradientBottom;
			half _SunDiscMultiplier, _SunDiscExponent, _SunHaloExponent, _SunHaloContribution;
			half _HorizonLineExponent, _HorizonLineContribution, _SkyGradientExponent;

			struct appdata { float4 vertex : POSITION; };
			struct v2f { float4 pos : SV_POSITION; float3 dir : TEXCOORD0; };

			v2f vert (appdata v) {
				v2f o;
				o.pos = UnityObjectToClipPos(v.vertex);
				o.dir = v.vertex.xyz;
				return o;
			}

			half4 frag (v2f i) : SV_Target {
				float3 dir = normalize(i.dir);
				float3 sunDir = normalize(_WorldSpaceLightPos0.xyz);
				float sunDot = saturate(dot(dir, sunDir));

				// sky gradient
				float up = saturate(dir.y);
				half3 col = lerp(_SkyGradientBottom.rgb, _SkyGradientTop.rgb, pow(up, 1.0 / max(_SkyGradientExponent, 0.0001)));

				// horizon line
				float horizon = pow(1.0 - abs(dir.y), _HorizonLineExponent);
				col = lerp(col, _HorizonLineColor.rgb, horizon * _HorizonLineContribution);

				// sun halo + disc
				float halo = pow(sunDot, _SunHaloExponent);
				col = lerp(col, _SunHaloColor.rgb, halo * _SunHaloContribution);
				float disc = saturate(pow(sunDot, _SunDiscExponent) * _SunDiscMultiplier);
				col = lerp(col, _SunDiscColor.rgb, disc);

				return half4(col, 1);
			}
			ENDCG
		}
	}
	Fallback Off
}
