define('app/exts/auth/index', [
  'jquery',
  'underscore',
  'brix/base',
  'app/exts/auth/auth',
  'app/exts/auth/lib/msgs/index'
], function($, _, Brick, Auth, AuthMsg) {
  return Brick.extend({
    options: {
      autoRender: true
    },
    render: function () {
      var $el = $(this.element)
      var options = this.options
      var auth = new Auth($el[0], {
        submitTest: false
      })
      new AuthMsg(auth)
      auth.on('add', function (ev) {
        var field = ev.field
        var $fieldEl = field.get('target')

        // 设置错误提示动画速度
        var msg = field.get('msg')
        msg.set('speed', 100)

        // 设置验证错误时field的样式
        field.on('error', function () {
          if ($fieldEl[0].tagName == 'INPUT' && $fieldEl[0].type === 'text' || $fieldEl[0].tagName == 'TEXTAREA') {
            $fieldEl.addClass('field-error')
          }
        })
        field.on('success', function () {
          $fieldEl.removeClass('field-error')
        })
      })
      this.auth = auth

      if (options.autoRender) {
        auth.render()
      }
    },
    destroy: function () {
      this.auth.destroy()
    }
  })
})