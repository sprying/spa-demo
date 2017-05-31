/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
var Magix = require('magix')
var TodoModel = require('app/model/TodoModel')
var globalTip = require('app/exts/globalTip/index')
return Magix.View.extend({
  render: function () {
    var me = this

    TodoModel.fetchList(this).then(function (err, data) {
      //me.setHTML(me.id, me.tmpl)
      if (err) {
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
  fresh: function (e) {
    this.render()
  },
  delItem: function (e, index, id) {
    var me = this
    TodoModel.delItem(this, {
      id: id
    }).then(function (err, data) {
      if (!err) {
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
