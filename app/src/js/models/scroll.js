export default class scroll {
  constructor(target, callback) {
    // props
    this._callback = callback.bind(this)
    this._target = target
    this._delay = 0

    // binded methods
    this.watch = this.getScroll.bind(this)
  }

  destroy() {
    this._target.removeEventListener('mousewheel', this.watch)
    this._target.removeEventListener('DOMMouseScroll', this.watch)
  }
  start() {
    this._target.addEventListener('mousewheel', this.watch)
    this._target.addEventListener('DOMMouseScroll', this.watch)
  }

  getScroll(event) {
    if (event) event.preventDefault()
    let orgEvent = event || window.event || window.eventBackup
    let speed = 0
    event = orgEvent
    window.eventBackup = event

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      speed = orgEvent.wheelDelta / 120
    }
    if (orgEvent.detail) {
      speed = -orgEvent.detail / 3
    }

    const direction = speed >= 0 ? -1 : 1
    speed = Math.abs(speed)

    if (!this._delay) {
      const resetDelay = this.resetDelay.bind(this)

      this._callback({ speed, direction })
      this._delay = setTimeout(resetDelay, 2000)
    } else {
      console.warn("scroll prevented")
    }
  }

  resetDelay() {
    this._delay = clearInterval(this._delay)
  }
}
