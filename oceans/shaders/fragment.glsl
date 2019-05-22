varying highp vec3 vLighting;

void main(void) {
  highp vec4 texelColor = vec4(1.0, 0.0, 0.0, 0.0);
  gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
}
