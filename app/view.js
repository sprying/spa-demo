/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/view', [
  'magix',
  'underscore',
  'jquery',
  'pat',
  'brix/loader'
], function(Magix, _, $, Pat, Loader){
  Magix.View.mixin({
    setView: function(firstCallback){
      var me = this
      var defer = $.Deferred()
      var node = this.$(this.id)
      this.undelegateEvents()
      this.beginUpdate()
      if(!this.rendered){
        var data = _.extend(this.data)
        this.pat = new Pat({
          el: node,
          data: data,
          template: this.tmpl,
          filters: this.filters
        })
      } else {
        this.pat.$apply()
      }
      Loader.boot(node, function(){
        me.endUpdate()
        firstCallback && firstCallback()
        defer.resolve(Loader)
      })
      return defer.promise()
    }
  })
})
