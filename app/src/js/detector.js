const Detector = {
    isMobile: navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/),
};
// browserify support
if (typeof module === 'object')
    module.exports = Detector;
