/**
 * Created by sprying.fang@gmail.com on 17/5/9.
 */
define('app/views/start/todo/add', [
  'magix'
], function (Magix) {
  return Magix.View.extend({
    render: function(){
      this.setView()
    }
  })
})
