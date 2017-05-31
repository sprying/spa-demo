/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */
var Magix = require('magix')
return Magix.View.extend({
  render: function () {
    this.setHTML(this.id, this.tmpl)
  }
})
