import gsap from 'gsap'

export class PageTransition {
	static defaultTransitionIn = (el: Element, done: () => void) => {
		gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, onComplete: done })
	}

	static defaultTransitionOut = (el: Element, done: () => void) => {
		gsap.fromTo(el, { autoAlpha: 1 }, { autoAlpha: 0, onComplete: done })
	}
}
