import DomManipulator from "@js/models/class.dom-manipulator";
import style from "@sass/style.scss";

const $ = new DomManipulator();

console.log("Elle est bonnne !", style);
console.debug("move your ", $.el("body"));
