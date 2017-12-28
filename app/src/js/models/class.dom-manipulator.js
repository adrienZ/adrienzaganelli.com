/** ======================================================================= *
* @desc jQuery $ alternative in native js                                 *
* @param node selector | :string                                          *
* @return HTMLnodeElement                                                 *
* ======================================================================= *
**/

/* eslint-disable */
class DomManipulator {
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

module.exports = DomManipulator;
