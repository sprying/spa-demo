/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */
(function(){
  var scripts = document.getElementsByTagName('script')
  var src = scripts[scripts.length - 1].getAttribute('src')
  var base = /(.*)\/\w+.js/.exec(src)[1]

  var debug = document.location.href.search('debug') != -1
  require.config({
    paths: {
      app: base + '/',
      magix: '//g.alicdn.com/thx/magix/2.0/requirejs-magix',
      pat: '//g.alicdn.com/mm/pat/latest/pat'
    }
  })
  require(['magix', 'pat'], function(Magix, Pat){
    Pat.config({
      debug: debug
    })
    Magix.start({
      edge: true,
      tagName: 'div',
      unfoundView: 'app/views/common/404',
      extensions: [
        'app/view',
        'app/vclick', // 拦截链接跳转
        'app/serializejson'
      ],
      routes: {
        '/': 'app/views/common/layout',
        '/start/todo/list.htm': 'app/views/common/layout',
        '/start/todo/add.htm': 'app/views/common/layout',
        '/component/index.htm': 'app/views/common/layout'
      }
    })
  })
})()

