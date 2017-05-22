/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/5/6.
 */
define('app/exts/menu/index', [
  'magix',
  'jquery',
  'underscore'
], function (Magix, $, _) {
  var _menus = [{
    name: '入门例子',
    path: '/start/todo/list.htm',
    children: [{
      name: 'todo入门',
      path: '/start/todo/list.htm',
      include: [
        '/start/todo/list.htm',
      ]
    }, {
      name: '测试测试',
      path: '/start/demo/demo.htm'
    }]
  }, {
    name: '组件使用',
    path: '/component/index.htm',
    children: [{
      name: '校验组件',
      path: '/component/validator.htm'
    }]
  }, {
    name: '使用场景',
    path: '/scene/index.htm'
  }]

  var urlCache = {}

  function itemHierarchy(item) {
    var include = []
    include.push(item.path)
    include = include.concat(item.include || [])

    _.each(item.children, function (child) {
      include = include.concat(itemHierarchy(child))
    })
    return item.include = _.uniq(include)
  }

  // 每个节点都设置include属性
  _.each(_menus, function (menu) {
    itemHierarchy(menu)
  })

  /**
   * url对应的菜单选中状态
   * @param path
   */
  function urlToChecked(path) {
    // 深层拷贝
    var menus = $.extend(true, {}, _menus)
    var routes = []

    function itemChecked(item) {
      if (item.include.indexOf(path) !== -1) {
        item.checked = true

        if (item.children && item.children.length) {
          routes.push(_.each(item.children, function (child) {
            itemChecked(child)
          }))
        }
      }
    }

    _.each(menus, function (menu) {
      itemChecked(menu)
    })

    urlCache[path] = {
      menu: menus,
      sidebar: routes.length ? routes[routes.length - 1]: []
    }
  }


  return {
    /**
     * 获取当前路径下页头菜单数据
     * @returns {*[]}
     */
    getHeaderMenu: function () {
      var loc = Magix.Router.parse(0)
      var path = loc.hash['path'] || loc.query['path']

      // 站点默认首页
      if (!path || path == '/') {
        path = '/start/todo/list.htm'
      }

      if (!urlCache[path]) {
        urlToChecked(path)
      }
      return urlCache[path]['menu']
    },
    /**
     * 获取当前路径下侧边栏菜单数据
     */
    getSideBarMenu: function () {
      var loc = Magix.Router.parse(0)
      var path = loc.hash['path'] || loc.query['path']

      // 站点默认首页
      if (!path || path == '/') {
        path = '/start/todo/list.htm'
      }

      if (!urlCache[path]) {
        urlToChecked(path)
      }
      return urlCache[path]['sidebar']
    }
  }
})
