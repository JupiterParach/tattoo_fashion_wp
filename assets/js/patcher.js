// this script bandaid patches errors as they are made clear. NOTE this script is not supposed to be the permanent solution as it's a bad solution
(() => {
  const body = document.getElementsByTagName('body')[0],
  style = getComputedStyle(body)
  if (/Mobi|Android/i.test(navigator.userAgent) && typeof getComputedStyle === 'function') {
    if (style.backgroundSize === 'cover') {
      // Mobile! probably...
      /*
        Wanna see what this does? Comment out or remove the () of this self invoked function.
        Mobile browsers with a hiding URL bar will cause a change to the viewport size
        which causes an issue with the css background property cover where the background
        snaps to the new size. This function sets the background size in relation to device
        screen size rather than viewport size to get around that
      */

      addEventListener("resize", () => {
        if (window.innerWidth > window.innerHeight) {
          // landscape
          body.style.backgroundSize = window.screen.width + 'px auto'
        } else {
          // portrait
          body.style.backgroundSize = 'auto ' + window.screen.height + 'px'
        }
      })

    }
  }
  // TODO: Set backgroundSize relative to screen size on mobile devices

  body.style.backgroundSize = '!important auto ' + window.screen.height + 'px'

  console.log(body.style);
})()
