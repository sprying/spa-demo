/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */
define('app/views/common/404', [
  'magix'
], function(Magix){
   return Magix.View.extend({tmpl:"<div class=404>404错误，未找到页面！</div>",    render: function(){
      this.setHTML(this.id, this.tmpl)
    }
  })
})
