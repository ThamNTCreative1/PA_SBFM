// Simplified Built-in replacement for the ripped (dummy) Cartoon FX Remaster Ubershader.
// Supports: blend mode, depth write, single-channel texture, HDR boost, alpha clip. Other features are ignored.
// No shader keywords (Luna/WebGL1 failed on keyword variants): the options are the 0/1 floats
// _SingleChannel, _HdrBoost and _UseAlphaClip.
Shader "Cartoon FX/Remaster/Particle Ubershader" {
	Properties {
		[Enum(UnityEngine.Rendering.BlendMode)] _SrcBlend ("Blend Source", Float) = 5
		[Enum(UnityEngine.Rendering.BlendMode)] _DstBlend ("Blend Destination", Float) = 10
		[ToggleNoKeyword] _ZWrite ("Depth Write", Float) = 0
		[ToggleNoKeyword] _UseAlphaClip ("Alpha Clipping (Cutout)", Float) = 0
		_Cutoff ("Cutoff Threshold", Range(0.001, 1)) = 0.1
		[NoScaleOffset] _MainTex ("Texture", 2D) = "white" {}
		[ToggleNoKeyword] _SingleChannel ("Single Channel Texture", Float) = 0
		[ToggleNoKeyword] _HdrBoost ("Enable HDR Multiplier", Float) = 0
		_HdrMultiply ("HDR Multiplier", Float) = 2
	}
	SubShader {
		Tags { "Queue" = "Transparent" "IgnoreProjector" = "True" "RenderType" = "Transparent" "PreviewType" = "Plane" }
		Blend [_SrcBlend] [_DstBlend]
		ZWrite [_ZWrite]
		Cull Off
		Lighting Off

		Pass {
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"

			sampler2D _MainTex;
			half _Cutoff, _HdrMultiply, _SingleChannel, _HdrBoost, _UseAlphaClip;

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
				half4 tex = tex2D(_MainTex, i.uv);
				half single = step(0.5, _SingleChannel);
				tex = lerp(tex, half4(1, 1, 1, tex.r), single);
				half4 c = tex * i.color;
				clip(c.a - _Cutoff * step(0.5, _UseAlphaClip));
				c.rgb *= lerp(1.0, _HdrMultiply, step(0.5, _HdrBoost));
				return c;
			}
			ENDCG
		}
	}
	Fallback Off
}
