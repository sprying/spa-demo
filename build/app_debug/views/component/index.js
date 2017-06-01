define('app/views/component/index',['require','module','exports','magix'],function(require,module,exports){/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
var Magix = require('magix')
module.exports = Magix.View.extend({
  render: function () {
    this.setView()
  }
})

});