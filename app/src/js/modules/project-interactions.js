export class ProjectInteractions {
    constructor(domNode) {
        this.$ = {};
        this.$.container = domNode;
        this.name = domNode.className.replace('project ', '').replace('active', ' ').trim();
        this.$.hero = domNode.querySelector('.project__preview');
        this.$.loadBtnContainer = this.$.hero.querySelector('.project__btn');
        this.$.loadBtn = this.$.loadBtnContainer.querySelector('a');
        this.$.close = $.el('.close-focus');

        this.connectToRouter();
    }

    connectToRouter() {
        this.$.loadBtn.setAttribute('href', `/${this.name}`);
        this.$.loadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.getTemplate(this.name);
            // router.navigate(e.target.pathname);
        });
    }

    getTemplate(name) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this.$.ajaxLoader.setAttribute('data-load', `100%`);
                this.removeBtnLoad(false);

                window.controller.unwatch();
                document.body.classList.remove('no-scroll');

                this.$.container.innerHTML += xhr.responseText;
                document.body.classList.add('focus');

                const scrollTarget = this.$.container.querySelector('.chapter');
                window.setTimeout(() => {
                    smoothScroll.animateScroll(scrollTarget), 250
                    this.$.container.querySelector('.visit').focus();
                });

                this.BindReturnToNavigation();
                this.BindImgFocus();
            }
        };
        xhr.onloadstart = () => {
            this.removeBtnLoad(true);
        };
        xhr.onloadend = () => {
        };
        xhr.onprogress = (evt) => {
            if (!this.$.loadBtnContainer.querySelector('loaderAjax') && this.$.ajaxLoader)
                this.$.loadBtnContainer.appendChild(this.$.ajaxLoader);

            if (evt.lengthComputable && this.$.ajaxLoader) {
                const percentComplete = evt.loaded / evt.total;
                this.$.ajaxLoader.setAttribute('data-load', `${Math.round(percentComplete * 100)} %`);
            }
        };
        xhr.open('GET', `dist/templates/${name}.html`, true);
        xhr.send();
    }

    removeBtnLoad(param) {
        if (param) {
            this.$.loadBtn.style.display = 'none';

            const ajaxLoader = document.createElement('a');
            ajaxLoader.className = 'loaderAjax';
            this.$.ajaxLoader = ajaxLoader;
        } else {
            this.$.ajaxLoader.className += ' loaded';
        }
    }
    ReturnToNavigation() {
        // better with no scroll
        window.scrollTo(0, 0);
        // smoothScroll.animateScroll(0);
        const _this = window.ProjectInteractActive;
        const watcher = window.controller;
        watcher.rewatch();
        _this.removeBtnLoad(false);
        window.controller.watch();
        document.body.classList.add('no-scroll');
        document.body.classList.remove('focus');
        window.scrollTo(0, 0);

        _this.$.container.innerHTML = _this.$.hero.outerHTML;
        _this.constructor(_this.$.container);
        _this.$.loadBtn.removeAttribute('style');
    }

    BindReturnToNavigation() {
        const ajaxLoader = this.$.ajaxLoader;
        const callback = this.ReturnToNavigation;
        if (ajaxLoader) {
            window.ProjectInteractActive = this;
            this.$.close.onclick = callback;
            ajaxLoader.remove();
        }
    }

    BindImgFocus() {
        const imgs = this.$.container.getElementsByClassName('project-illu');

        //for (const img of imgs) {

        [].forEach.call(imgs, (img) => {
            img.addEventListener('click', () => {
                document.body.classList.add('focus-img');
                $.el('.bg-layer img').setAttribute('src', img.getAttribute('src'));
            });
        });
        $.el('.bg-layer').addEventListener('click', () => {
            document.body.classList.remove('focus-img');
        });


        $.el('.project-ui-focus .next a').onclick = (e) => {
            e.preventDefault();
            this.$.close.click();
            this.FindLogicSiblings(1);
        };
        $.el('.project-ui-focus .prev a').onclick = (e) => {
            e.preventDefault();
            this.$.close.click();
            this.FindLogicSiblings(-1);
        };
        $.el('.end-content .next').onclick = (e) => {
            e.preventDefault();
            this.$.close.click();
            this.FindLogicSiblings(1);
        };
        $.el('.end-content .prev').onclick = (e) => {
            e.preventDefault();
            this.$.close.click();
            this.FindLogicSiblings(-1);
        };
    }



    FindLogicSiblings(direction) {
        for (let i = 0; i < Object.keys(projectsList).length; i++) {
            if (projectsList[i] === this.$.container) {
                const newIndex = i + direction;
                controller.updateActiveProject(direction);
                const newActive = controller.$.active;
                if (newActive.classList.contains('adrien')) {
                  controller.updateActiveProject(direction);
                }
                // if (typeof newActive.controller !== 'undefined')
                //     newActive.controller.getTemplate(newActive.controller.name);
            }
            else continue;
        }
    }


}
