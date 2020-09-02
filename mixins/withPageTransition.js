import gsap from 'gsap'

const defaultTransitionIn = (el, done) => {
  gsap.fromTo(el, {autoAlpha: 0 }, { autoAlpha: 1, onComplete: done })
}

const defaultTransitionOut = (el, done) => {
  gsap.fromTo(el, {autoAlpha: 1 }, { autoAlpha: 0, onComplete: done })
}

export default {
  transition: {
    css: false,
    beforeEnter(el) {},
    enter(el, done) {
      const page = this.$children[0]
      if (typeof page.transitionIn !== 'undefined' && typeof page.transitionIn === 'function') {
        page.transitionIn(el, done)
      } else {
        defaultTransitionIn(el, done)
      }
    },
    afterEnter(el) {

    },
    enterCancelled(el) {

    },
    beforeLeave(el) {

    },
    leave(el, done) {
      const page = this.$children[0]
      if (typeof page.transitionOut !== 'undefined' && typeof page.transitionOut === 'function') {
        page.transitionOut(el, done)
      } else {
        defaultTransitionOut(el, done)
      }
    },
    afterLeave(el) {

    },
    leaveCancelled(el) {

    },
  }

}