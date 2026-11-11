// Simplified Built-in replacement for the ripped (dummy) Cartoon FX Remaster Procedural Glow.
// No shader keywords (Luna/WebGL1 failed on the _CFXR_GLOW_POW_* variants): the power comes from the float
// _CFXR_GLOW_POW (0 = P0, 1 = P2, 2 = P4, 3 = P8 -> exponent 2^value) and the HDR boost from _HdrBoost (0/1).
Shader "Cartoon FX/Remaster/Particle Procedural Glow" {
	Properties {
		[Enum(UnityEngine.Rendering.BlendMode)] _SrcBlend ("Blend Source", Float) = 5
		[Enum(UnityEngine.Rendering.BlendMode)] _DstBlend ("Blend Destination", Float) = 10
		_CFXR_GLOW_POW ("Apply Power of (0 P0, 1 P2, 2 P4, 3 P8)", Float) = 0
		_GlowMin ("Circle Min", Float) = 0
		_GlowMax ("Circle Max", Float) = 1
		_MaxValue ("Max Value", Float) = 10
		_HdrBoost ("Enable HDR Multiplier (0/1)", Float) = 0
		_HdrMultiply ("HDR Multiplier", Float) = 2
	}
	SubShader {
		Tags { "Queue" = "Transparent" "IgnoreProjector" = "True" "RenderType" = "Transparent" "PreviewType" = "Plane" }
		Blend [_SrcBlend] [_DstBlend]
		ZWrite Off
		Cull Off
		Lighting Off

		Pass {
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"

			half _CFXR_GLOW_POW, _GlowMin, _GlowMax, _MaxValue, _HdrBoost, _HdrMultiply;

			struct appdata { float4 vertex : POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; };
			struct v2f { float4 pos : SV_POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; };

			v2f vert (appdata v) {
				v2f o;
				o.pos = UnityObjectToClipPos(v.vertex);
				o.color = v.color;
				o.uv = v.uv;
				return o;
			}

			half4 frag (v2f i) : SV_Target {
				float d = length(i.uv * 2.0 - 1.0);
				half glow = 1.0 - saturate((d - _GlowMin) / max(_GlowMax - _GlowMin, 0.0001));
				glow = pow(max(glow, 0.0001), exp2(_CFXR_GLOW_POW));
				glow = min(glow, _MaxValue);
				half4 c = i.color;
				c.a *= saturate(glow * (1.0 - step(1.0, d)));
				c.rgb *= lerp(1.0, _HdrMultiply, step(0.5, _HdrBoost));
				return c;
			}
			ENDCG
		}
	}
	Fallback Off
}
