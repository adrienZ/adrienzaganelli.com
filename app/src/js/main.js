import { launchApp } from './modules/loader-manager';
import { DomManipulator } from './models/class.dom-manipulator';
import { ProjectInteractions } from './modules/project-interactions';
import { scroll } from './models/class.scroll';
import { ScrollAnimation } from './modules/scrollAnimation';

// reset scroll position
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// dom manipulator helper
const $ = new DomManipulator();
window.$ = $;

// launch app at the end of page loading
const loader = $.el('.loader');
window.addEventListener('load', () => launchApp(loader));
window.addEventListener('load', () => new scroll(window, new ScrollAnimation()));

const projectsDom = $.all('.project:not(.adrien)');
for (const p of projectsDom) {
    const controller = new ProjectInteractions(p);
    p.controller = controller;
}
// quickfix
const projectsList = {
    0: projectsDom[1],
    1: projectsDom[0],
    2: projectsDom[2],
};
window.projectsListOrdered = projectsList;
window.projectsList = projectsDom;

const hamburger = $.el('.nav-hamburger');
const hamburgerList = $.el('.all-links');

hamburger.onclick = () => {
    hamburger.classList.toggle('open');
    hamburgerList.classList.toggle('show');
};
$.el('.to-top').onclick = function () {
    smoothScroll.animateScroll(0);
};
$.el('.project-hero-ui .about').onclick = (e) => {
    e.preventDefault();
    $.el('.about-full').classList.add('show');
};
$.el('.about-full .close').onclick = (e) => {
    e.preventDefault();
    $.el('.about-full').classList.remove('show');
};
