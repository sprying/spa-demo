/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/25.
 */
define('app/views/common/layout', [
  'magix'
], function(Magix){
  return Magix.View.extend({
    init: function(){
      this.observeLocation({
        path: true
      })
    },
    render: function(){
      //this.setHTML(this.id, this.tmpl)

      var me = this
      me.setView().then(function(){
        me._mountVframes()
      })
    },
    _mountVframes: function(){
      var mainVframe = this.vom.get('magix_vf_main')
      var path = this.location.path.substring(1).replace(/\.htm$/, '') || 'index'
      mainVframe.mountView('app/views/' + path)
    }
  })
})
