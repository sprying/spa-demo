/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/29.
 */
define('app/model/model', [
  'magix',
  'jquery',
  'app/exts/globalTip/index'
], function(Magix, $, globalTip){
  return Magix.Model.extend({
    sync: function(callback){
      var type = this.get('type') || 'GET'
      var data = this.get('urlParams')
      if(type !== 'GET'){
        data = this.getFormParams()
      }
      $.ajax({
        url: this.get('url'),
        data: data,
        type: type,
        success: function(res){
          if(!res.info.ok) {
            globalTip.show({
              content: '调用接口错误'
            })
            callback(res.info, res)
          } else {
            callback(null ,res)
          }
        }
      })
    }
  })
})
