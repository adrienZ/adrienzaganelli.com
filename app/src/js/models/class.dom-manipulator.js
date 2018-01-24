/** ======================================================================= *
* @desc jQuery $ alternative in native js                                 *
* @param node selector | :string                                          *
* @return HTMLnodeElement                                                 *
* ======================================================================= *
**/

export class DomManipulator {
  // constructor() {}
  id(id) {
      return document.getElementById(id);
  }
  el(el) {
      return document.querySelector(el);
  }
  class (elClass) {
      return document.getElementsByClassName(elClass);
  }
  tag(tag) {
      return document.getElementsByTagName(tag);
  }
  all(els) {
      return document.querySelectorAll(els);
  }
}
