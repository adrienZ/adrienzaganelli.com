export default class scroll {
  constructor(target, callback) {
    this._callback = callback
    this._target = target

    this.watch = this.getScroll.bind(this)
    target.addEventListener('mousewheel', this.watch.bind(this))
    target.addEventListener('DOMMouseScroll', this.watch.bind(this))

    return this;
  }

  destroy() {
    this.div.removeEventListener('mousewheel', this.watch);
    this.div.removeEventListener('DOMMouseScroll', this.watch);
  }
  start() {
    this.div.addEventListener('mousewheel', this.watch);
    this.div.addEventListener('DOMMouseScroll', this.watch);
  }

  getScroll(event) {
    if (event) event.preventDefault();
    let orgEvent = event || window.event || window.eventBackup;
    let speed = 0
    event = orgEvent;
    window.eventBackup = event;

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      speed = orgEvent.wheelDelta / 120;
    }
    if (orgEvent.detail) {
      speed = -orgEvent.detail / 3;
    }

    const direction = speed >= 0 ? -1 : 1;
    speed = Math.abs(speed);
    this._callback({
      speed, direction
    })
  }
}
