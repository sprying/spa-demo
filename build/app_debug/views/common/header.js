/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/common/header', [
  'magix',
  'app/exts/menu/index'
], function(Magix, Menu){
   return Magix.View.extend({tmpl:"<div class=header> <h3 class=fl>spa-demo示例</h3> <ul class=\"menus fl\"> <li t-class:active=menu.checked t-for=\"menu in menus\"> <a href=\"{{menu.path}}\">{{menu.name}}</a> </li> </ul> </div>",    init: function(){
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
