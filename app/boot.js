/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */
(function(){
  var scripts = document.getElementsByTagName('script')
  var src = scripts[scripts.length - 1].getAttribute('src')
  var base = /(.*)\/\w+.js/.exec(src)[1]
  require.config({
    paths: {
      app: base + '/',
      magix: '//g.alicdn.com/thx/magix/2.0/requirejs-magix',
      pat: '//g.alicdn.com/mm/pat/latest/pat'
    }
  })
  require(['magix'], function(Magix){
    Magix.start({
      edge: true,
      tagName: 'div',
      unfoundView: 'app/views/404',
      extensions: [
        'app/view'
      ],
      routes: {
        '/': 'app/views/common/layout'
      }
    })
  })
})()

