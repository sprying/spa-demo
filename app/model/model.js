/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/29.
 */
define('app/model/model', [
  'magix',
  'jquery',
  'components/errortips'
], function(Magix, $, Errortip){
  return Magix.Model.extend({
    sync: function(callback){
      $.ajax({
        url: this.get('url'),
        data: this.get('urlParams'),
        type: this.get('type') || 'GET',
        success: function(res){
          if(!res.info.ok) {
            callback(res.info, res)
          } else {
            callback(null ,res)
          }
        }
      })
    }
  })
})
