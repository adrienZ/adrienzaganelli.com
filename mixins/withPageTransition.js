import gsap from 'gsap'

export default {
  transition: {
    css: false,
    beforeEnter(el) {},
    enter(el, done) {
      gsap.fromTo(el, {autoAlpha: 0, y: 30}, { autoAlpha: 1, y: 0, onComplete: done })
    },
    afterEnter(el) {

    },
    enterCancelled(el) {

    },
    beforeLeave(el) {

    },
    leave(el, done) {
      gsap.fromTo(el, {autoAlpha: 1, y: 0}, { autoAlpha: 0, y:30, onComplete: done })
    },
    afterLeave(el) {

    },
    leaveCancelled(el) {

    },
  }

}