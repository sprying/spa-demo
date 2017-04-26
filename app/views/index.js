/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/index', [
  'magix'
], function(Magix){
  return Magix.View.extend({
    render: function(){
      this.setHTML(this.id, this.tmpl)
    }
  })
})
