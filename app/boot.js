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
      //defaultPath: '/start/todo/list.htm', //默认path在pushState下没用，为空时，取到的路径就是/；而在hash下，为空是取到的路径是空，这时候有用
      //defaultView: 'app/views/common/layout', // 配合上面path->view
      extensions: [
        'app/view',
        'app/vclick', // 拦截链接跳转
        'app/serializejson'
      ],
      routes: {
        '/': 'app/views/common/layout',
        '/start/todo/list.htm': 'app/views/common/layout',
        '/start/todo/add.htm': 'app/views/common/layout',
        '/component/index.htm': 'app/views/common/layout',
        '/component/validator.htm': 'app/views/common/layout'
      }
    })
  })
})()

