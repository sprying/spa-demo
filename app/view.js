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
      var node = me.$(this.id)
      this.undelegateEvents(node) //只能从源码翻出来
      this.beginUpdate()
      var data = _.extend(this.data)
      if(!this.rendered){
        this.pat = new Pat({
          el: node,
          data: data,
          template: this.tmpl,
          filters: this.filters,
          dataCheckType: 'dirtyCheck'
        })
      } else {
        this.pat.$apply()
      }
      Loader.boot(node, function(){
        me.endUpdate()
        me.delegateEvents(node)
        firstCallback && firstCallback()
        defer.resolve(Loader)
      })
      return defer.promise()
    }
  })
})
