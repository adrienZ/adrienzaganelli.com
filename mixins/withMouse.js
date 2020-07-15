export default {
  created() {
    this.onMouseMove = this.onMouseMove.bind(this)
    this.$mouse = {}
  },
  mounted() {
    this.onResize()
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onResize)

    this.$mouse.center = {
      x: 0,
      y: 0,
    }
    this.$mouse.movement = {
      x: 0,
      y: 0,
    }
    this.$mouse.position = {
      x: 0,
      y: 0,
    }
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onMouseMove({screenX, screenY}) {
      this.$mouse.position = {
        x: screenX,
        y: screenY,
      }

      this.$mouse.movement = {
        x: (this.$mouse.position.x - this.$mouse.center.x),
        y: (this.$mouse.position.y - this.$mouse.center.y),
      }
    },

    onResize() {
      this.$mouse.center = {
        y: window.innerHeight / 2,
        x: window.innerWidth / 2,
      }
    }
  }
}