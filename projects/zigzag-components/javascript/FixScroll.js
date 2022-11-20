function FixScroll() {
  this.unFix = this.unFix.bind(this);
  this.fix = this.fix.bind(this);

  this.body = document.body;
  this.doc = document.documentElement;
  this.bodyPosition = 0;
  this.state = false;
}

FixScroll.prototype.fix = function (disableScrollEvents) {
  var doc = this.doc;

  this.bodyPosition = {
    top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
    left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
  };

  this.body.style.position = "fixed";
  this.body.style.top = -this.bodyPosition.top + "px";
  this.body.style.left = 0;
  this.state = true;

  if (disableScrollEvents) {
    this.disableScroll();
  }
};

FixScroll.prototype.unFix = function () {
  this.body.style.top = 0 + "px";
  this.body.style.position = "relative";

  this.state = false;
  window.scrollTo(0, this.bodyPosition.top);

  this.enableScroll();
};

FixScroll.prototype.disableScroll = function (event) {
  if (window.addEventListener)
    window.addEventListener("DOMMouseScroll", this.preventDefault, false);
  document.addEventListener("wheel", this.preventDefault, { passive: false });
  window.onwheel = this.preventDefault;
  window.onmousewheel = document.onmousewheel = this.preventDefault;
  window.ontouchmove = this.preventDefault;
  document.onkeydown = this.preventDefaultForScrollKeys;
};

FixScroll.prototype.enableScroll = function () {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
  document.removeEventListener("wheel", this.preventDefault, {
    passive: false,
  });
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};

FixScroll.prototype.preventDefault = function (e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

FixScroll.prototype.preventDefaultForScrollKeys = function (e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

export default FixScroll;
