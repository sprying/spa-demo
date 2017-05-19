/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/vclick', [
  'magix',
  'jquery'
], function(Magix, $){
  $(document.body).on('click', 'a', function(e){
    var $tar = $(e.currentTarget)
    var href = $tar.attr('href')
    if(href && /^\//.test(href) && (!$tar.attr('v-ignore') || !$tar.attr('_blank'))){
      e.preventDefault() // http://api.jquery.com/category/events/event-object/
      Magix.Router.navigate(href)
    }
  })
})
