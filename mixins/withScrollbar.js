// import Scrollbar from 'smooth-scrollbar'
import gsap from 'gsap'

export default  {
  mounted() {
    const ModulePromise = import('smooth-scrollbar')
    ModulePromise.then(module => {
      const Scrollbar = module.default

      const defaults = {
        syncCallbacks: true,
      }

      this.scrollbar = Scrollbar.init(document.body, defaults);

      this.scrollbarFixedEls = document.querySelectorAll('[data-scrollbar-fixed]')

      this.scrollbar.addListener(({ offset }) => {
        [...this.scrollbarFixedEls].map(fixed => {
          console.log(fixed);

          // not ie
          if (!window.document.documentMode) {
            gsap.set(fixed, {
              // x: offset.x + 'px',
              y: offset.y + 'px',
            })
          }
        })
      });
    })
  },
  beforeDestroy() {
    if (this.scrollbar) {
      this.scrollbar.destroy(document.body)
      ;[...this.scrollbarFixedEls].map(fixed => {
        gsap.set(fixed, {
          // x: '0px',
          y: '0px',
        })
      })
    }
  }
}