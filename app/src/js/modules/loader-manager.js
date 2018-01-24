export function launchApp(loader) {
  // transition delay + 1s
    const loaderDelay = parseFloat(window.getComputedStyle(loader).getPropertyValue('transition-duration').replace('s', '')) * 1000 + 1200;
    loader.classList.add('loaded');
    window.setTimeout(() => {
        loader.remove();
    }, loaderDelay);
}
