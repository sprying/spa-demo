define('app/exts/textcount/index',['require','module','exports','jquery','underscore','brix/base','css!app/exts/textcount/index.css'],function(require,module,exports){var $ = require('jquery')
var _ = require('underscore')
var Brick = require('brix/base')
require('css!app/exts/textcount/index.css')
return Brick.extend({
  options: {
    input: null,
    trueLength: false,
    count: null,
    valid: true
  },
  init: function () {
    var me = this
    var options = me.options
    var $el = $(me.element)
    var input = $(options.input)

    me.handle = function () {
      // 鼠标粘贴事件，要延迟才能获取新的value
      setTimeout(function () {
        $el.html(me._countResult(input.val()))
      }, 100)
    }

    if (input.length > 0) {
      // 初始化数据
      me.handle()

      input.on('keyup', me.handle)
      input.on('paste', me.handle)
    }
  },
  _count: function (str) {
    var me = this
    var options = me.options
    var trueLength = options.trueLength
    // str = str.replace(/\n/g, '')

    if (trueLength) {
      str = str.replace(/[\u4e00-\u9fa5]/g, '**')
    }

    return str.length
  },
  _countResult: function (str) {
    var me = this
    var options = me.options
    var len = me._count(str)
    var count = options.count
    var pre = len
    if (len > count) {
      pre = '<em class="text-count-error">' + len + '</em>'
      me.valid = false
    } else {
      me.valid = true
    }
    return pre + '/' + count
  },
  isValid: function () {
    return this.valid
  },
  destroy: function () {
    var me = this
    var input = $(me.options.input)
    input.off('keyup', me.handle)
    input.off('paste', me.handle)
    input = null
  }
})

});