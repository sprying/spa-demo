var $ = require('jquery')
var _ = require('underscore')
var Base = require('app/exts/arale/base')
var Utils = require('app/exts/auth/lib/utils')
require('css!app/exts/auth/lib/msgs/msg.css')
var MSG_HOOK = '.auth-msg'

var Msg = Base.extend({
  initialize: function (config) {
    var self = this
    if (!config) config = {}
    Msg.superclass.initialize.call(self, config)
  },
  /**
   * 运行
   * @return {boolean}
   */
  render: function () {
    var self = this
    var $target = self.get('target')
    if (!$target.length) return false
    var $wrapper = self._getWrapper()
    self.set('wrapper', $wrapper)
    var isExist = self.get('isExist')
    if (!isExist) $wrapper.hide()

    var host = self.get('host')
    host.on('error', function (ev) {
      var rule = ev.rule
      var msg = rule.msg('error')
      var style = 'error'
      self.show(style, msg)
    })
    host.on('success', function (ev) {
      var field = ev.target
      var $field = field.get('target')
      var msg = $field.attr('success-msg')
      if (msg) {
        style = ev.style || 'success'
        self.show(style, msg)
      } else {
        self.hide()
      }
    })
  },
  /**
   * 隐藏消息层
   */
  hide: function () {
    var self = this
    var $wrapper = self.get('wrapper')
    Utils.buffer(function () {
      $wrapper.slideUp(self.get('speed'))
    }, 50)()
  },
  /**
   * 显示消息层
   * @param status 比如error
   * @param msg 比如用户名不可以为空
   * @return {*}
   */
  show: function (status, msg) {
    var self = this
    if (!_.isString(status) || !_.isString(msg)) return self
    var $wrapper = self.get('wrapper')
    Utils.buffer(function () {
      var data = {style: status, msg: msg}
      self._create(data)
      $wrapper.slideDown(self.get('speed'))
    }, 50)()
  },
  /**
   * 创建消息层
   * @private
   */
  _create: function (data) {
    var self = this
    var tpl = self.get('tpl')
    var $wrapper = self.get('wrapper')
    var html = _.template(tpl)(data)
    return $wrapper.html(html)
  },
  /**
   * 获取消息层容器
   * @private
   */
  _getWrapper: function () {
    var self = this
    var $wrapper = self.get('wrapper')
    var $target = self.get('target')
    if (!$target.length) return self
    //如果不存在容器
    //取html标签属性上存在消息层配置
    if (!$wrapper.length) {
      var wrapperHook = $target.attr('msg-wrapper')
      if (wrapperHook) $wrapper = $(wrapperHook)
    }
    //如果都没有容器，自动创建一个
    if (!$wrapper.length) {
      //radio和ckeckedbox的处理比较特殊
      if ($target.length > 1) {
        $target = $target.eq($target.length - 1)
        var $parent = $($target.parent())
        if ($parent.hasClass('radio') || $parent.hasClass('checkbox')) {
          $target = $target.parent()
        }
      }
      var $parent = $($target.parent())
      $wrapper = $('<div class="msg-wrapper"></div>').appendTo($parent)
    }
    return $wrapper
  },
  attrs: {
    /**
     * 宿主实例，一般是Field实例
     */
    host: {
      value: ''
    },
    target: {
      value: '',
      getter: function (v) {
        return $(v)
      }
    },
    /**
     * 消息层模版
     * @type String
     * @default ''
     */
    tpl: {
      value: '<p class="auth-msg auth-<%= style %>"><%= msg %></p>'
    },
    /**
     * 消息层容器
     * @type String
     * @default ''
     */
    wrapper: {
      value: '',
      getter: function (v) {
        return $(v)
      }
    },
    /**
     * 验证层是否已经存在
     */
    isExist: {
      value: false,
      getter: function (v) {
        var self = this
        var $wrapper = self.get('wrapper')
        if (!$wrapper.length) return false
        return $wrapper.find(MSG_HOOK).length
      }
    },
    speed: {value: 200}
  }
})

return Msg
