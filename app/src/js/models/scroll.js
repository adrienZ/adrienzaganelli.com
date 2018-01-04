export default class scroll {
  constructor(target, callback) {
    // props
    this._target = target
    this._delay = undefined

    // binded methods
    this.watch = this.getScroll.bind(this)

    this._callback = callback ? callback : undefined

    return this
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
      // scroll prevented
    }
  }

  resetDelay() {
    this._delay = clearInterval(this._delay)
  }

  setScrollHandler(callback) {
    this._callback = callback.bind(this)
  }
}
