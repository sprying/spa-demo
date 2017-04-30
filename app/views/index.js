/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/index', [
  'magix',
  'app/model/TodoModel'
], function(Magix, TodoModel){
  return Magix.View.extend({
    render: function(){
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
    }
  })
})
