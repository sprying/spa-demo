/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/views/component/index', [
  'magix'
],function(Magix){
  return Magix.View.extend({
    render: function(){
      this.setView()
    }
  })
})
