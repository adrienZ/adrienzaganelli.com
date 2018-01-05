export default class scroll {
  constructor(target, callback, force) {
    // props
    this._target = target
    this._delay = undefined
    this._force = force || .8

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
    if (this._delay) return

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

    if (this._force < speed) {
      const resetDelay = this.resetDelay.bind(this)

      this._callback({ speed, direction })
      this._delay = setTimeout(resetDelay, 700)
    }
  }

  resetDelay() {
    this._delay = clearInterval(this._delay)
  }

  setScrollHandler(callback) {
    this._callback = callback.bind(this)
  }
}
