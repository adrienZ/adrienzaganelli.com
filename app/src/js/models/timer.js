// all credits to: https://stackoverflow.com/a/8126515
export default class Timer {
  constructor(fn, t) {
    this.timerObj = setInterval(fn, t)
    this.t = t
    this.fn = fn
  }

  stop() {
    if (this.timerObj) {
      clearInterval(this.timerObj)
      this.timerObj = null
    }
    return this
  }

  // start timer using current settings (if it's not already running)
  start() {
    if (!this.timerObj) {
      this.stop()
      this.timerObj = setInterval(this.fn, this.t)
    }
    return this
  }

  // start with new interval, stop current interval
  reset(newT) {
    this.t = newT
    return this.stop().start()
  }
}
