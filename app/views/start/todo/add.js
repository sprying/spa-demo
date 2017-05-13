/**
 * Created by sprying.fang@gmail.com on 17/5/9.
 */
define('app/views/start/todo/add', [
  'magix',
  'brix/loader',
  'app/model/TodoModel',
  'app/exts/globalTip/index'
], function (Magix, Loader, TodoModel, globalTip) {
  return Magix.View.extend({
    render: function(){
      this.data = {}
      this.setView()
    },
    doSubmit: function(e){
      var me = this
      var $el = $('#' + this.id)
      e.preventDefault()
      var auth = Loader.query('app/exts/auth/index', $el)[0].auth
      auth.test().then(function(){
        var formData = $el.find('.form').serializeJSON()

        TodoModel.addItem(me, formData).then(function(err, data){
          if(!err){
            globalTip.show({
              content: '新增成功',
              type: 'ok',
              callback: function(){
                me.navigate('/start/todo/list.htm')
              }
            })
          }
        })
        debugger
        me.data.isSending = true
        me.setView()
      })
    }
  })
})
