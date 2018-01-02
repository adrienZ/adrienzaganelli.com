import Scroll from "@js/models/Scroll"

export default class Carousel extends Scroll {
  constructor(target, data, callback) {
    super(target, callback)

    this._timeout = 0
    this._projects = data

    return this
  }
}
