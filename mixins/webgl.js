import fragmentShader from '@/assets/shaders/shader.frag'
import vertexShader from '@/assets/shaders/shader.vert'

export default class WEBGL {
  constructor(set) {
    this.webGLCurtain = new window.Curtains({
      container: set.canvas,
      watchScroll: false,
    });
    this.planeElement = set.planeElement;
    this.texture = {
      current: "",
      next: ""
    };
    this.mouse = {
      x: 0,
      y: 0
    };
    this.params = {
      vertexShader, // our vertex shader ID
      fragmentShader, // our framgent shader ID
      widthSegments: 40,
      heightSegments: 40, // we now have 40*40*6 = 9600 vertices !
      uniforms: {
        time: {
          name: "uTime", // uniform name that will be passed to our shaders
          type: "1f", // this means our uniform is a float
          value: 0
        },
        mousepos: {
          name: "uMouse",
          type: "2f",
          value: [0, 0]
        },
        resolution: {
          name: "uReso",
          type: "2f",
          value: [innerWidth, innerHeight]
        },
        progress: {
          name: "uProgress",
          type: "1f",
          value: 0
        },
        brightness: {
          name: "uBrightness",
          type: "1f",
          value: 1
        }
      }
    };
  }

  initPlane() {
    // create our plane mesh
    this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);

    // use the onRender method of our plane fired at each requestAnimationFrame call

    if (this.plane) {
      this.plane.onReady(() => {
        this.texture.current = this.plane.createTexture("textureActive");
        this.plane.alwaysDraw = true
        this.texture.current.setSource(this.planeElement.children[1]);
        this.update();
      });
    }
  }

  update() {
    this.plane.onRender(() => {
      this.plane.updatePosition()
      this.plane.uniforms.time.value += 0.01; // update our time uniform value
    });
  }
}
