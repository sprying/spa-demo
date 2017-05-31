/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/29.
 */
var Base = require('brix/base')
var $ = require('jquery')
var template = require('app/exts/globalTip/index.tpl')
require('css!./index.css')
var EMPTY = ''
var GUID = [$.expando, 'tips'].join('_')

var Cfg = {
  autoHide: true,
  content: EMPTY,
  delay: 1000,
  closeable: true,
  type: 'error'
}

var TypeIcon = {
  "ok": "icon-chenggong2",
  "error": "icon-hao",
  "info": "icon-shuoming1",
  "notice": "icon-zhuyi"
}

var HiddenTimer

function show(cfg) {
  cfg = _.extend(Cfg, cfg)
  var callback = cfg.callback
  var delay = cfg.delay
  var autoHide = cfg.autoHide
  var $tips = $('#' + GUID)
  delay = $.isNumeric(delay) ? +delay : Cfg.delay
  cfg.typeicon = TypeIcon[cfg.type]


  if (!$tips.length) {
    $('<div id="' + GUID + '" class="block-global-tip"></div>').appendTo(document.body)
    $tips = $('#' + GUID)
  }

  function __show() {
    var html = _.template(template)(cfg)
    $tips.hide()
    $tips.html(html)
    $tips.find('.close')
      .off()
      .on('click', function () {
        hide()
        callback && callback()
      })
    if ($.isNumeric(cfg.zIndex)) {
      $tips.css('zIndex', +cfg.zIndex)
    }
    $tips.fadeIn(150)
  }

  if (HiddenTimer) {
    clearTimeout(HiddenTimer)
  }

  if (autoHide) {
    HiddenTimer = setTimeout(function () {
      hide()
      callback && callback()
    }, delay)
  }

  __show()
}

function hide() {
  var $tips = $('#' + GUID)
  $tips.fadeOut(150, function () {
    $tips.remove()
  })
  clearTimeout(HiddenTimer)
}

return Base.extend({}, {
  show: function (opts) {
    show(opts)
  },
  hide: function () {
    hide()
  }
})
