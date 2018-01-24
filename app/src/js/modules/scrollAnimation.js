export class ScrollAnimation {
    constructor() {
        const $ = window.$;
        this.transitionLayer = $.el('.cd-transition-layer');
        this.transitionBackground = this.transitionLayer.children[0];
        this.modalWindow = $.el('.cd-transition-layer');
        this.modalTrigger = $.el('.me a');
        this.frameProportion = 1.78; // png frame aspect ratio
        this.frames = this.transitionLayer.getAttribute('data-frame');// number of png frames
        this.resize = false;

        // set transitionBackground dimentions
        const setLayerDimensions = this.setLayerDimensions;
        setLayerDimensions(this);
        const binder = this;
        window.addEventListener('resize', () => {
            if (!this.resize) {
                this.resize = true;
                (!window.requestAnimationFrame) ?
                setTimeout(() => binder.setLayerDimensions(), 300)
                : window.requestAnimationFrame(() => binder.setLayerDimensions);
            }
        });


        // close modal window
        this.modalWindow.addEventListener('click', (event) => {
            event.preventDefault();
            this.transitionLayer.classList.add('closing');
            this.modalWindow.classList.remove('visible');
            this.transitionBackground.addEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
                this.transitionLayer.classList.remove('closing opening visible');
                this.transitionBackground.removeEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
    }

    setLayerDimensions(binder) {
        return false;
      //   const windowWidth = window.innerWidth;
      //   const windowHeight = window.innerHeight;
      //   const frameProportion = binder.frameProportion;
      //   let layerHeight = null;
      //   let layerWidth = null;
      //
      //   if (windowWidth / windowHeight > frameProportion) {
      //       layerWidth = windowWidth;
      //       layerHeight = layerWidth / frameProportion;
      //   } else {
      //       layerHeight = windowHeight * 1.2;
      //       layerWidth = layerHeight * frameProportion;
      //   }
      //   binder.transitionBackground.style.width = layerWidth * frames + 'px',
      //   binder.transitionBackground.style.height = layerHeight + 'px',
      //
      // binder.resize = false;
    }

    triggerAnimation(event) {
      //event.preventDefault();
      // const modalId = event.target.getAttribute('href');
      this.transitionLayer.classList.add('visible', 'opening');
      const delay = ($.class('no-cssanimations').length > 0) ? 0 : 800;
      setTimeout(() => {
          // this.modalWindow.classList.add('visible');
          this.transitionLayer.classList.remove('opening');
          this.modalWindow.classList.remove('visible');
      }, delay);
    }
}
