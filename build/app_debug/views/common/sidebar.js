/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/views/common/sidebar',[
  'magix',
  'app/exts/menu/index'
], function(Magix, Menu){
   return Magix.View.extend({tmpl:"<div class=sidebar> <ul> <li t-class:active=item.checked t-for=\"item in items\"> <a href=\"{{item.path}}\">{{item.name}}</a> </li> </ul> </div>",    init: function(){
      this.observeLocation({
        path: true
      })
    },
    render: function(){
      var items = Menu.getSideBarMenu()
      var $el = $('#' + this.id)
      var isShow = items.length
      this.data = {
        items: items
      }
      this.setView(function(){
        if(!isShow){
          $el.hide()
        }
      }, function(){
        if(!isShow){
          $el.animate({
            'width': '1px'
          }, 250, 'swing', function () {
            $el.hide()
          })
        } else {
          $el.show().animate({
            'width': '200px'
          }, 250, 'swing')
        }
      })
    }
  })
})