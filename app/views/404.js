/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */
define('app/views/404', [
  'magix'
], function(Magix){
  return Magix.View.extend({
    render: function(){
      this.setHTML(this.id, this.tmpl)
    }
  })
})
