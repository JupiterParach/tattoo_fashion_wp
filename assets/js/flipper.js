(() => {
  // the self executing function keeps variables local that doesn't
  // need to be global to minimize risk of concflict with other scripts
  // NOTE: Screw semicolons I ain't usin' em >:D
  let transToUse

  let inTransit = false

  // object, string, string, function
  window.flipper = function (element, icon1, icon2, callback /*optional*/) {

    if (!transToUse) {
      // if transToUse is undefined function checks what transition event
      // is supported by the browser. Takes first match and registers
      // addEventListener(transToUse, () => {})

      const transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
      }

      for (t in transitions){
        if (element.style[t] !== undefined){
          transToUse = transitions[t]
          break
        }
      }

      // This event will unload showHalf, load showFull and then
      // set the appropriate icon and pop off showFull while
      // temporarily setting transition time to 0 to reset
      // the animation without the user noticing

      element.addEventListener(transToUse, function (e) {
        let classStr = e.target.className

        const regex1 = new RegExp(icon1,"i")
        const regex2 = new RegExp(icon2,"i")

        // TODO: make the icon unclickabel during transitions
        if (!inTransit) { // resets transition animation
          element.style.transition = ""
          element.style.transform = ""
        } else if (regex1.test(e.target.className)) {
          e.target.className = icon2
          inTransit = !inTransit
          element.style.transform = "rotate3d(0, 1, 1, 360deg)"
          // console.log("current icon X. inTransit: ", inTransit)
        } else if (regex2.test(e.target.className)) {
          e.target.className = icon1
          inTransit = !inTransit
          element.style.transform = "rotate3d(0, 1, 1, 360deg)"
          // console.log("current icon bars. inTransit: ", inTransit)
        }

      })
    }

    if (!inTransit) {
      inTransit = !inTransit
      element.style.transition = "0.2s ease-in"
      element.style.transform = "rotate3d(0, 1, 1, 180deg)" // at end of transform event fires
    }
    if (typeof callback === 'function')
      console.log('dick')
  }
})()

function foldOutMenu () {
  console.log('fycj');
}
