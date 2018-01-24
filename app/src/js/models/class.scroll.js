export class scroll {
    constructor(domNode, animation) {
        const $ = window.$;
        // define attributes
        this.div = domNode;
        this.timeout = null;
        this.animate = animation;
        this.activeNode = null;
        this.index = 0;
        this.projects = [
            {
                slug: 'adrien',
                name: 'Adrien',
            },
            {
                slug: 'pulsar-one',
                name: 'Pulsar one [ø]',
            },
            {
                slug: 'market-me',
                name: 'Market-me.fr',
            },
            {
                slug: 'fidget-cube',
                name: 'Fidget Cube',
            },
        ];
        this.activeProject = this.projects[0];
        this.$ = {};
        this.$.items = $.all('section.project');
        this.$.active = $.el('section.project.active');
        this.$.listMenu = $.all('.nav-list li');
        this.$.hamburger = $.all('.all-links a');
        this.$.arrows = $.all('.nav-arrows svg');
        this.$.currentLabel = $.el('.current-project p');

        this.arrowDelay = parseFloat(window.getComputedStyle(this.$.arrows[0])['transitionDuration'].replace('s', '')) * 1000;
        // scope fix
        const watch = this.watch;

        // TO DO DETECT THE RIGHT LISTENER TO ADD DEPENDING OF CONTEXT
        domNode.controller = this;
        domNode.addEventListener('mousewheel', watch);
        domNode.addEventListener('DOMMouseScroll', watch);

        this.bindUInavs();
    }

    unwatch() {
        this.div.removeEventListener('mousewheel', this.watch);
        this.div.removeEventListener('DOMMouseScroll', this.watch);
    }
    rewatch() {
        this.div.addEventListener('mousewheel', this.watch);
        this.div.addEventListener('DOMMouseScroll', this.watch);
    }

    watch(event) {
        if (event) event.preventDefault();
        let orgEvent = event || window.event || window.eventBackup;
        let delta = 0
        let deltaX = 0
        let deltaY = 0;

        event = orgEvent;
        window.eventBackup = event;

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }

        const direction = delta >= 0 ? -1 : 1;
        const speed = Math.abs(delta);
        if (speed > 0.8) {
            const _this = window.controller;
            const timeout = _this.timeout;
            clearTimeout(timeout);
            _this.timeout = setTimeout(() => {
                _this.updateActiveProject(direction);
            }, 150);
        }
    }

    updateNavigationFocus() {
        const projects = window.projectsListOrdered;

        if (this.$.active.controller) {
            let index = this.index;
            // let next = null;
            if (index === Object.keys(projects).length) {
                index = 1;
            } else {
                index++;
            }
            $.el('.project-ui-focus .next img').setAttribute(
                'src',
                `dist/media/img/intros/${projects[index - 1].classList[1]}-intro.png`,
            );

            // let prev = null;
            index = this.index;
            if (index === 1) {
                index = Object.keys(projects).length ;
            } else {
              index--;
            }
            $.el('.project-ui-focus .prev  img').setAttribute(
                'src',
                `dist/media/img/intros/${projects[index - 1].classList[1]}-intro.png`,
            );
        }
    }



    updateActiveProject(direction) {
        let _this = this;
        if (_this.hasOwnProperty('animate') === false)
            _this = arguments[1];

        // _this.animate.triggerAnimation();
        // setTimeout(() => {
        //     _this.updateActiveItem(direction);
        // }, 250);
        _this.updateActiveItem(direction);
    }

    updateActiveItem(direction) {
        const bouncingArrow = $.el('.nav-arrows .next.intro')
        if (bouncingArrow) bouncingArrow.classList.remove('intro');

        window.scrollTo(0, 0);
        this.$.active.classList.remove('active');
        this.$.listMenu[this.index].classList.remove('active');
        this.$.hamburger[this.index].classList.remove('active');



        if (direction > 0) {
            if (this.index === this.projects.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
        }
        else {
          if (this.index === 0) {
            this.index = this.projects.length - 1;
          } else {
            this.index--;
          }
        }
        const eventClone = window.event || { path: [] };
        if (eventClone.target || (eventClone.path && eventClone.path.indexOf(this.$.listMenu) < 0)) {
            if (direction < 0) {
                this.$.arrows[0].classList.add('active');
                window.setTimeout(() => { this.$.arrows[0].classList.remove('active'); }, this.arrowDelay);
            } else {
                this.$.arrows[1].classList.add('active');
                window.setTimeout(() => { this.$.arrows[1].classList.remove('active'); }, this.arrowDelay);
            }
        }

        this.$.currentLabel.innerHTML = `0${this.index + 1} ${this.projects[this.index].name}`;
        this.activeProject = this.projects[this.index];
        this.$.active = $.class(this.activeProject.slug)[0];
        this.$.active.classList.add('active');
        this.$.listMenu[this.index].classList.add('active');
        this.$.hamburger[this.index].classList.add('active');
        this.updateNavigationFocus();
    }

    bindUInavs() {
        for (const arrow of $.all('.nav-arrows svg')) {
            arrow.addEventListener('click', () => {
                if (arrow.classList.contains('next')) {
                    this.updateActiveItem(1);
                } else {
                    this.updateActiveItem(-1);
                }
            });
        }

        for (const item of $.all('.nav-list li')) {
            const index = parseInt(item.getAttribute('data-index'));
            item.addEventListener('click', () => {
                item.parentNode.querySelector('.active').classList.remove('active');
                this.index = index + 1;

                if (this.index === this.projects.length) this.index -= 4;
                this.updateActiveProject(-1, this);
            });
        }
        for (const item of this.$.hamburger) {
            const index = parseInt(item.getAttribute('data-index'));
            item.addEventListener('click', () => {
                item.parentNode.parentNode.querySelector('a.active').classList.remove('active');
                this.index = index + 1;

                if (this.index === this.projects.length) this.index -= 4;
                this.updateActiveProject(-1, this);
                const hamburger = $.el('.nav-hamburger');
                const hamburgerList = $.el('.all-links');
                hamburger.classList.remove('open');
                hamburgerList.classList.remove('show');
            });
        }
    }
}
