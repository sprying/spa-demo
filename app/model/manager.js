/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/29.
 */
var Magix = require('magix')
var Model = require('app/model/model')
var manager = Magix.Manager.create(Model)
manager.registerModels([{
  name: 'get_todo_list',
  url: '/todo/queryTodos.json',
  type: 'GET'
}, {
  name: 'del_todo',
  url: '/todo/del.json',
  type: 'POST'
}, {
  name: 'add_todo',
  url: '/todo/add.json',
  type: 'POST'
}])
module.exports = manager
