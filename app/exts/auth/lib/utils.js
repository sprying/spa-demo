var $ = require('jquery')
var _ = require('underscore')
return {
  toJSON: function (cfg) {
    cfg = cfg.replace(/'/g, '"')
    try {
      eval('cfg=' + cfg)
    } catch (e) {
      console.log && console.log('data-valid json is invalid')
    }
    return cfg
  },
  guid: function () {
    return 'AUTH_' + $.guid++
  },
  /**
   * 根据元素类型来绑定默认的事件
   * @param els
   * @return {string}
   */
  getEvent: function (els) {
    var event = 'blur'
    var type = $(els).attr('type') || $(els).attr('data-type')
    switch (type) {
      case 'select':
        event = 'change'
        break
      case 'select-multiple':
      case 'radio':
        event = 'click change'
        break
      case 'checkbox':
        event = 'click change'
        break
      default:
        event = 'blur'
    }
    return event
  },
  getValue: function (els) {
    var val = []
    var type = $(els).attr('type')
    switch (type) {
      case 'select-multiple':
        $.each(els.options, function (el) {
          if (el.selected) val.push(el.value)
        })
        break
      case "radio":
      case "checkbox":
        $.each(els, function (el) {
          if (el.checked) val.push(el.value)
        })
        break
      default:
        val = $(els).val()
    }
    return val
  },
  later: function (fn, when, periodic, context, data) {
    when = when || 0
    var m = fn
    var d = $.makeArray(data)
    var f
    var r

    if (typeof fn === 'string') {
      m = context[fn]
    }

    if (!m) {
      console.error && console.error('method undefined')
    }

    f = function () {
      m.apply(context, d)
    }

    r = (periodic) ? setInterval(f, when) : setTimeout(f, when)

    return {
      id: r,
      interval: periodic,
      cancel: function () {
        if (this.interval) {
          clearInterval(r)
        } else {
          clearTimeout(r)
        }
      }
    }
  },
  buffer: function (fn, ms, context) {
    var me = this

    ms = ms || 150

    if (ms === -1) {
      return function () {
        fn.apply(context || me, arguments)
      }
    }
    var bufferTimer = null

    function f() {
      f.stop()
      bufferTimer = me.later(fn, ms, 0, context || me, arguments)
    }

    f.stop = function () {
      if (bufferTimer) {
        bufferTimer.cancel()
        bufferTimer = 0
      }
    }

    return f
  }
}
