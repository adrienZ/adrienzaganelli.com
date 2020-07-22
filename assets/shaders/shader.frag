  #ifdef GL_ES
  precision mediump float;
  #endif
  #define TAU 6.28318530718
  #define PI 3.14159265359
  #define S(a, b, n) smoothstep(a, b, n)
  #define NUM_OCTAVES 5

  varying float vTime;
  uniform vec2 uReso;
  uniform vec2 uMouse;
  uniform sampler2D textureActive;
  uniform float uProgress;
  uniform float uBrightness;

  // get our varyings
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord0;
  varying vec2 vTextureCoord1;
  // the uniform we declared inside our javascript
  // our texture sampler (default name, to use a different name please refer to the documentation)

  void main() {
    vec2 uv0 = vTextureCoord0;
    vec2 uv1 = vTextureCoord1;

    vec4 color = texture2D(textureActive, uv0);
    gl_FragColor = color * uBrightness;
  }