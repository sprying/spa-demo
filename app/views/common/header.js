/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/common/header', [
  'magix',
  'app/exts/menu/index'
], function(Magix, Menu){
  return Magix.View.extend({
    init: function(){
      this.observeLocation({
        path: true
      })
    },
    render: function(){
      this.data = {
        menus: Menu.getHeaderMenu()
      }
      this.setView()
    }
  })
})
