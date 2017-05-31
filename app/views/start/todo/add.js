/**
 * Created by sprying.fang@gmail.com on 17/5/9.
 */
var Magix = require('magix')
var Loader = require('brix/loader')
var TodoModel = require('app/model/TodoModel')
var globalTip = require('app/exts/globalTip/index')
return Magix.View.extend({
  render: function () {
    this.data = {}
    this.setView()
  },
  doSubmit: function (e) {
    var me = this
    var $el = $('#' + this.id)
    e.preventDefault()
    var auth = Loader.query('app/exts/auth/index', $el)[0].auth
    auth.test().then(function () {
      var formData = $el.find('.form').serializeJSON()

      TodoModel.addItem(me, formData).then(function (err, data) {
        if (!err) {
          me.navigate('/start/todo/list.htm')
          globalTip.show({
            content: '新增成功',
            type: 'ok'
          })
        }
      })
      me.data.isSending = true
      me.setView()
    })
  }
})
