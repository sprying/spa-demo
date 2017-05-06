/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/29.
 */
define('app/model/TodoModel',[
  'app/model/manager'
], function(Manager){
  return {
    fetchList: function(view, urlParams){
      var defer = $.Deferred()
      var request = Manager.createRequest(view)
      request.fetchAll([{
        name: 'get_todo_list',
        urlParams: urlParams
      }], view.wrapAsync(function(err, ResModel){
        //if(err){
        //  defer.reject(err)
        //} else {
          defer.resolve(err, ResModel.get('data'))
        //}
      }))
      return defer.promise()
    },
    delItem: function(view, formParams){
      var defer = $.Deferred()
      var request = Manager.createRequest(view)
      request.fetchAll([{
        name: 'del_todo',
        formParams: formParams
      }], view.wrapAsync(function(err, ResModel){
        defer.resolve(err, ResModel.get('data'))
      }))
      return defer.promise()
    }
  }
})
