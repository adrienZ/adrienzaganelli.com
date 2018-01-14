export default class Router {
  constructor(config) {
    this.config = config
    this.do()

    // Object.keys(config).length && window.addEventListener('hashchange', this.do.bind(this))
  }

  getRoute() {
    return window.location.hash
      .replace(/\/[0-9]/g, '')
      .replace(/^#/, '')
      .split('/')[0]
  }

  setRoute(hash) {
    this.clearRoute()
    window.location.hash = hash
  }

  clearRoute() {
    "pushState" in window.history
      ? history.pushState("", document.title, window.location.pathname)
      : window.location.hash = ''
  }

  do() {
    const route = this.getRoute()
    const config = this.config

    config.hasOwnProperty(route) && typeof config[route] === 'function' && config[route]()
  }
}
