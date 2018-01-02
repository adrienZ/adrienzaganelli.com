
import style from "@sass/style.scss" // eslint-disable-line
import Carousel from "@js/modules/Carousel"

new Carousel(window, [] , (e) => {
  console.log(e)
}).start()
