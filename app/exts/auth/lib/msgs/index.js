var $ = require('jquery')
var _ = require('underscore')
var Base = require('app/exts/arale/base')
var Msg = require('app/exts/auth/lib/msgs/msg')
//消息集合
var AuthMsg = Base.extend({
  initialize: function (auth) {
    var self = this
    if (!auth) return false
    auth.on('add', function (ev) {
      var field = ev.field
      self._renderMsg(field)
    })

    AuthMsg.superclass.initialize.call(self, {auth: auth})
  },
  /**
   * 运行消息实例
   * @private
   */
  _renderMsg: function (field) {
    if (!field) return false
    var self = this
    var $target = field.get('target')
    var fnWrapper = self.get('fnWrapper')
    var wrapper
    if (_.isFunction(fnWrapper)) {
      wrapper = fnWrapper.call(field, $target)
    }

    var msg = new Msg({
      tpl: self.get('tpl'),
      wrapper: wrapper
    })
    //将Field实例和Field对应的表单元素目标注入到消息配置
    msg.set('target', $target)
    msg.set('host', field)
    msg.render()
    field.set('msg', msg)
    return msg
  },
  //获取消息实例
  getMsg: function (name) {
    var self = this
    var auth = self.get('auth')
    var field = auth.getField(name)
    return field.get('msg')
  },
  attrs: {
    //Auth实例
    auth: {value: ''},
    //消息层模版
    tpl: {
      value: '<p class="auth-msg auth-<%= style %>"><%= msg %></p>'
    },
    //消息容器函数
    fnWrapper: {
      value: function () {
      }
    }
  }
})

return AuthMsg
