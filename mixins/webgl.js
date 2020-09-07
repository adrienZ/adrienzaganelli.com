import fragmentShader from '@/assets/shaders/shader.frag'
import vertexShader from '@/assets/shaders/shader.vert'
import rgbFragmentShader from '@/assets/shaders/rgb.frag'
import rgbVertexShader from '@/assets/shaders/rgb.vert'

// import { Curtains } from 'curtainsjs'
export default class WEBGL {
  constructor(set) {
    this.webGLCurtain = new window.Curtains({
      container: set.canvas,
      // watchScroll: false,
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
        this.plane.playVideos()

        this.texture.current = this.plane.createTexture("textureActive");
        this.plane.alwaysDraw = true
        this.texture.current.setSource(this.planeElement.children[1]);
        this.update();

        console.log(this.plane);


        // this.webGLCurtain.addShaderPass({
        //   rgbFragmentShader,
        //   rgbVertexShader,
        //   uniforms: {
        //     "tDiffuse": { value: null }, //diffuse texture
        //     "tDisp": { value: null }, //displacement texture for digital glitch squares
        //     "byp": { value: 0 }, //apply the glitch ?
        //     "amount": { value: 0.08 },
        //     "angle": { value: 0.02 },
        //     "seed": { value: 0.02 },
        //     "seed_x": { value: 0.02 }, //-1,1
        //     "seed_y": { value: 0.02 }, //-1,1
        //     "distortion_x": { value: 0.5 },
        //     "distortion_y": { value: 0.6 },
        //     "col_s": { value: 0.05 }
        //   },

        // })

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
