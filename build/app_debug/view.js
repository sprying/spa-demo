define('app/view',['require','module','exports','magix','underscore','jquery','pat','brix/loader'],function(require,module,exports){/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
  var Magix = require('magix')
  var _ = require('underscore')
  var $ = require('jquery')
  var Pat = require('pat')
  var Loader = require('brix/loader')
  Magix.View.mixin({
    setView: function(firstCallback, otherCallback){
      var me = this
      var defer = $.Deferred()
      var node = me.$(this.id)
      this.undelegateEvents(node) //只能从源码翻出来
      this.beginUpdate()
      var data = _.extend(this.data)
      if(!this.rendered){
        this._pat = new Pat({
          el: node,
          data: data,
          template: this.tmpl,
          filters: this.filters,
          dataCheckType: 'dirtyCheck'
        })
        Loader.boot(node, function(){
          me.endUpdate()
          me.delegateEvents(node)
          firstCallback && firstCallback()
          defer.resolve(Loader)
        })
      } else {
        _.extend(me._pat.$data, me.data)
        this._pat.$apply()
        Loader.boot(node, function(){
          me.endUpdate()
          me.delegateEvents(node)
          otherCallback && otherCallback()
          defer.resolve(Loader)
        })
      }
      this.on('destroy', function(){
        Loader.destroy(node)
      })
      return defer.promise()
    }
  })

});