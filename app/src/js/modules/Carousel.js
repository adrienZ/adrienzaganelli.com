import Scroll from "@js/models/Scroll"
import Timer from "@js/models/timer"

export default class Carousel extends Scroll {
  constructor(target, data) {
    super(target)

    this.__interval__ = 2000
    this._timer = new Timer(this.onTimeoutHandler.bind(this), this.__interval__)
    this._index = 0
    this._projects = data
    this.__projectsLength__ = this._projects.length

    this.setHandler(this.onChange.bind(this))
  }

  onChange(e) {
    const targetIndex = this._index + e.direction
    let newIndex = targetIndex

    if (targetIndex < 0) {
      newIndex = this.__projectsLength__
    } else if (targetIndex >= this.__projectsLength__) {
      newIndex = 0
    }

    this.setPosition(newIndex);

    if (e.hasOwnProperty('speed')) {
      this.resetTimeout()
    }
  }

  setPosition(index) {
    if (this._projects.indexOf(this._projects[index]) === -1) {
      throw new Error(`Wrong index value sent, this.projects contains ${this.__projectsLength__} items. value sent: ${index}`)
    }
    this._index = index
    this._activeItem = this._projects[index]
  }

  resetTimeout() {
    this._timer.reset(this.__interval__)
  }

  onTimeoutHandler() {
    this.onChange({ direction: 1 })
  }
}
