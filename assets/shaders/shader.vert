  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform float uTime;
  // those are the mandatory attributes that the lib sets
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  uniform mat4 textureActiveMatrix;
  uniform mat4 nextTextureMatrix;
  // if you want to pass your vertex and texture coords to the fragment shader
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord0;
  varying vec2 vTextureCoord1;
  varying float vTime;

  void main() {
    float frequency = 50.;
    vec3 vertexPosition = aVertexPosition;
    vTime = uTime;
    // set the varyings
    vTextureCoord0 = (textureActiveMatrix * vec4(aTextureCoord, 0., 1.)).xy;
    vTextureCoord1 = (nextTextureMatrix * vec4(aTextureCoord, 0., 1.)).xy;
    vVertexPosition = vertexPosition;
    vec2 center = vTextureCoord0 - .5;
    float dist = length(center);
    vertexPosition.z += cos(dist * frequency + uTime * 10.) * dist;
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
  }