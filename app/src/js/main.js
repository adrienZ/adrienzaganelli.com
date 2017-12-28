import DomManipulator from "@js/models/class.dom-manipulator";
import style from "@sass/style.scss";
import Scroll from "@js/models/scroll"

const $ = new DomManipulator();

new Scroll(window, (e) => {
  console.log(e);
})

console.log("Elle est bonnne !", style);
console.debug("move your ", $.el("body"));
