/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
var Magix = require('magix')
var Menu = require('app/exts/menu/index')
return Magix.View.extend({
  init: function () {
    this.observeLocation({
      path: true
    })
  },
  render: function () {
    var items = Menu.getSideBarMenu()
    var $el = $('#' + this.id)
    var isShow = items.length
    this.data = {
      items: items
    }
    this.setView(function () {
      if (!isShow) {
        $el.hide()
      }
    }, function () {
      if (!isShow) {
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
