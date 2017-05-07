/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/common/layout', [
  'magix',
  'app/exts/menu/index'
], function (Magix, Menu) {
  return Magix.View.extend({
    init: function () {
      this.observeLocation({
        path: true
      })
    },
    render: function () {
      var me = this
      var items = Menu.getSideBarMenu()
      var isShow = items.length

      if (!me.rendered) {
        me.setView(function () {
          var $main = $('#magix_vf_main')
          if (isShow) {
            $main.css({
              'marginLeft': '250px'
            })
          } else {
            $main.css({
              'marginLeft': ''
            })
          }
          me._mountVframes()
        })
      } else {
        var $main = $('#magix_vf_main')
        if (isShow) {
          $main.animate({
            'marginLeft': '250px'
          }, 250, 'swing')
        } else {
          $main.delay(150).animate({
            'marginLeft': '30px'
          }, 250, 'swing', function () {
            $main.css('margin-left', '')
          })
        }
        me._mountVframes()
      }
    },
    _mountVframes: function () {
      var mainVframe = this.vom.get('magix_vf_main')
      var path = this.location.path.substring(1).replace(/\.htm$/, '') || 'start/todo/list'
      mainVframe.mountView('app/views/' + path)
    }
  })
})
