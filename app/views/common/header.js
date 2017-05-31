/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
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
    this.data = {
      menus: Menu.getHeaderMenu()
    }
    this.setView()
  }
})
