define('app/exts/arale/base',['require','module','exports','app/exts/arale/class','app/exts/arale/events','app/exts/arale/aspect','app/exts/arale/attribute'],function(require,module,exports){var Class = require('app/exts/arale/class')
var Events = require('app/exts/arale/events')
var Aspect = require('app/exts/arale/aspect')
var Attribute = require('app/exts/arale/attribute')
// Base
// ---------
// Base 是一个基础类，提供 Class、Events、Attrs 和 Aspect 支持。

return Class.create({
  Implements: [Events, Aspect, Attribute],

  initialize: function (config) {
    this.initAttrs(config)

    // Automatically register `this._onChangeAttr` method as
    // a `change:attr` event handler.
    parseEventsFromInstance(this, this.attrs)
  },

  destroy: function () {
    this.off()

    for (var p in this) {
      if (this.hasOwnProperty(p)) {
        delete this[p]
      }
    }

    // Destroy should be called only once, generate a fake destroy after called
    // https://github.com/aralejs/widget/issues/50
    this.destroy = function () {
    }
  }
})


function parseEventsFromInstance(host, attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var m = '_onChange' + ucfirst(attr)
      if (host[m]) {
        host.on('change:' + attr, host[m])
      }
    }
  }
}

function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

});