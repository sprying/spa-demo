/**
 * Created by sprying.fang@gmail.com on 17/5/9.
 */
define('app/views/start/todo/add', [
  'magix',
  'brix/loader',
  'app/model/TodoModel',
  'app/exts/globalTip/index'
], function (Magix, Loader, TodoModel, globalTip) {
   return Magix.View.extend({tmpl:"<div class=todo-add> <ol class=breadcrumb> <li><a href=\"/start/todo/list.htm\">消息列表</a></li> <li class=\"active title\"><a href=\"/start/todo/add.htm\">新建消息</a></li> </ol> <form class=form bx-name=\"app/exts/auth/index\" bx-options=\"{autoRender:true}\"> <div class=form-element> <label class=form-label>消息标题</label> <input type=text name=title class=\"input w260\" id=J_title placeholder=\"请输入消息标题\" required maxlength=20 /> <span class=\"text-count ml10\" bx-name=\"app/exts/textcount/index\" bx-options=\"{\n        input:'#J_title',\n        count:20\n      }\"></span> </div> <div class=form-element> <label class=form-label>消息内容</label> <textarea name=content class=\"textarea w260\" id=J_content placeholder=\"请输入消息内容\" required maxlength=100 />\n      <span class=\"text-count vb ml10\" bx-name=\"app/exts/textcount/index\" bx-options=\"{\n        input:'#J_content',\n        count:100\n      }\"></span>\n    </div>\n    {{^if(isSending)}}\n    <button class=\"btn btn-brand w120\" mx-click=\"doSubmit\">新建消息</button>\n    {{/if}}\n    {{#if(isSending)}}\n    <button class=\"btn btn-brand w120 btn-disabled\">请求中...</button>\n    {{/if}}\n  </form>\n</div>",    render: function(){
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
})
