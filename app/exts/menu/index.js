/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/exts/menu/index', [
  'magix',
  'underscore'
], function(Magix, _){
  var _menus = [{
    name: '入门例子',
    path: '/start/todo/list.htm',
    children: [{
      name: '增删改查',
      path: '/start/todo/list.htm',
      include: [
        '/start/todo/list.htm',
        '/start/todo/add.htm'
      ]
    }, {
      name: '测试测试',
      path: '/start/demo/demo.htm'
    }]
  }, {
    name: '组件使用',
    path: '/component/index.htm'
  }, {
    name: '使用场景',
    path: '/scene/index.htm'
  }]

  var urlCache = {}

  /**
   * 深度拷贝，可以针对数组
   * @param obj
   * @returns {*}
   */
  function deepClone(obj){
    if(_.isArray(obj)){
      var arr = []
      for(var i = 0, len = obj.length; i<len; i++){
        if(_.isObject(obj[i])){
          arr.push(deepClone(obj[i]))
        } else {
          arr.push(obj[i])
        }
      }
      return arr
    } else {
      var o = {}
      for(var pro in obj){
        if(_.isObject(obj[pro])){
          o[pro] = deepClone(obj[pro])
        } else {
          o[pro] = obj[pro]
        }
      }
      return o
    }
  }

  /**
   * 每个节点都设置include属性
   */
  function initMenuPath(){
    _.each(_menus, function(menu) {
      var include = menu.include || []
      include.push(menu.path)
      _.each(menu.children, function (child) {
        child.include = (child.include || []).concat(child.path)
        include = include.concat(child.include)
      })
      menu.include = _.uniq(include)
    })
  }
  initMenuPath()

  /**
   * url对应的菜单选中状态
   * @param path
   */
  function urlToChecked(path){
    var menus = deepClone(_menus)
    var sidebar

    _.each(menus, function(menu){
      if(menu.include.indexOf(path) !== -1){
        menu.checked = true
        sidebar = _.each(menu.children, function(child){
          if(child.include.indexOf(path) !== -1){
            child.checked = true
          }
        })
      }
    })

    urlCache[path] = {
      menu: menus,
      sidebar: sidebar || []
    }
  }
  urlToChecked('/start/todo/list.htm')

  return {
    /**
     * 获取当前路径下页头菜单数据
     * @returns {*[]}
     */
    getHeaderMenu: function(){
      var loc = Magix.Router.parse(0)
      var path =  loc.hash['path'] ||  loc.query['path']

      // 站点默认首页
      if(!path || path == '/'){
        path = '/start/todo/list.htm'
      }

      if(!urlCache[path]){
        urlToChecked(path)
      }
      return urlCache[path]['menu']
    },
    /**
     * 获取当前路径下侧边栏菜单数据
     */
    getSideBarMenu: function(){
      var loc = Magix.Router.parse(0)
      var path =  loc.hash['path'] ||  loc.query['path']

      // 站点默认首页
      if(!path || path == '/'){
        path = '/start/todo/list.htm'
      }

      if(!urlCache[path]){
        urlToChecked(path)
      }
      return urlCache[path]['sidebar']
    }
  }
})
