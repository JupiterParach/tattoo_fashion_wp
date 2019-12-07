(() => {
  // the self executing function keeps variables local that doesn't
  // need to be global to minimize risk of concflict with other scripts
  // NOTE: Screw semicolons! I ain't usin' em >:D

  let transToUse, inTransit = false

  // object, string, string
  window.dropdownMenu = function (element, icon1, icon2) {

    if (!transToUse) {
      // if transToUse is undefined function checks what transition event
      // is supported by the browser. Takes first match and registers
      // addEventListener(transToUse, function (e) {...}) to element

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

      element.addEventListener(transToUse, function () {

        const regex1 = new RegExp(icon1,"i"),
        regex2 = new RegExp(icon2,"i")

        if (!inTransit) { // resets transition animation
          element.style.transition = ""
          element.style.transform = ""
          menu(element.state)
        } else if (regex1.test(element.className)) {
          element.state = "open" // menu is open
          element.className = icon2
          inTransit = !inTransit
          element.style.transform = "rotate3d(0, 1, 1, 360deg)"
          // console.log("current icon X. inTransit: ", inTransit)
        } else if (regex2.test(element.className)) {
          element.state = "closed" // menu is closed
          element.className = icon1
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
  }
  function menu (action) {
    if (action === "open") {

    } else if (action === "close") {

    }
  }
})()
