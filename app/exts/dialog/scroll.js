define(
  'app/exts/dialog/scroll',
  [
    'jquery'
  ],
  function($) {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

    function preventDefault(e) {
      e.preventDefault()
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e)
        return false
      }
    }
    var isDisabled
    function disableScroll(el) {
      el = el || $(document)
      el.on('mousewheel', preventDefault)
      el.on('keydown', preventDefaultForScrollKeys)
      isDisabled = true
    }

    function enableScroll(el) {
      el = el || $(document)

      if (!isDisabled) return

      el.off('mousewheel', preventDefault)
      el.off('keydown', preventDefaultForScrollKeys)
      isDisabled = false
    }
    return {
      disableScroll: disableScroll,
      enableScroll: enableScroll
    }
  }
)