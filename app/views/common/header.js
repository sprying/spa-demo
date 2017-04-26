/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/common/header', [
  'magix'
], function(Magix){
  return Magix.View.extend({
    render: function(){
      this.setHTML(this.id, this.tmpl)
    }
  })
})
