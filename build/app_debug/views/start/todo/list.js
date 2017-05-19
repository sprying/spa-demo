/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/views/start/todo/list',[
  'magix',
  'app/model/TodoModel',
  'app/exts/globalTip/index'
], function(Magix, TodoModel, globalTip){
   return Magix.View.extend({tmpl:"<div class=table-container> <div class=toolbar> <a href=\"/start/todo/add.htm\" class=\"btn btn-brand\">新建消息</a> </div> <table class=table> <thead> <tr> <th class=w40>序号</th> <th class=w60>ID</th> <th class=w100>标题</th> <th>内容</th> <th class=\"w80 center\">操作</th> </tr> </thead> <tbody> {{^if(isError)}} {{#for(item in todos)}} <tr> <td>{{__INDEX__}}</td> <td>{{item.id}}</td> <td>{{item.title}}</td> <td>{{item.content}}</td> <td class=center> <div class=operation> <a href=\"javascript:void(0);\" class=color-blue mx-click=\"delItem({{__INDEX__}}, {{item.id}})\">删除</a> </div> </td> </tr> {{/for}} {{/if}} {{#if(isError)}} <tr> <td colspan=5> <a href=\"javascript:void(0);\" class=color-blue mx-click=\"fresh()\">刷新</a> </td> </tr> {{/if}} </tbody> </table> </div> ",    render: function(){
      var me = this

      TodoModel.fetchList(this).then(function(err, data){
        //me.setHTML(me.id, me.tmpl)
        if(err){
          me.data = {
            isError: true
          }
        } else {
          me.data = {
            isError: false,
            todos: data
          }
        }
        me.setView()
      })
    },
    fresh: function(e){
      this.render()
    },
    delItem: function(e, index, id){
      var me = this
      TodoModel.delItem(this, {
        id: id
      }).then(function(err, data){
        if(!err){
          globalTip.show({
            content: '删除成功',
            type: 'ok'
          })
          me.data.todos.splice(index, 1)
          me.setView()
        }
      })
    }
  })
})
