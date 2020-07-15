export default {
  transition: {
    css: false,
    beforeEnter(el) {
      console.log(el);
    },
    enter(el, done) {
      done()
    },
    afterEnter(el) {

    },
    enterCancelled(el) {

    },
    beforeLeave(el) {

    },
    leave(el, done) {
      done()
    },
    afterLeave(el) {

    },
    leaveCancelled(el) {

    },
  }

}