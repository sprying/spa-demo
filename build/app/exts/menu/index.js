define("app/exts/menu/index",["require","module","exports","magix","jquery","underscore"],function(e,t,n){function a(e){var t=[];return t.push(e.path),t=t.concat(e.include||[]),o.each(e.children,function(e){t=t.concat(a(e))}),e.include=o.uniq(t)}function r(e){function t(n){-1!==n.include.indexOf(e)&&(n.checked=!0,n.children&&n.children.length&&a.push(o.each(n.children,function(e){t(e)})))}var n=i.extend(!0,{},u),a=[];o.each(n,function(e){t(e)}),c[e]={menu:n,sidebar:a.length?a[a.length-1]:[]}}var h=e("magix"),i=e("jquery"),o=e("underscore"),u=[{name:"\u5165\u95e8\u4f8b\u5b50",path:"/start/todo/list.htm",children:[{name:"todo\u5165\u95e8",path:"/start/todo/list.htm",include:["/start/todo/list.htm"]},{name:"\u6d4b\u8bd5\u6d4b\u8bd5",path:"/start/demo/demo.htm"}]},{name:"\u7ec4\u4ef6\u4f7f\u7528",path:"/component/index.htm",children:[{name:"\u6821\u9a8c\u7ec4\u4ef6",path:"/component/validator.htm"}]},{name:"\u4f7f\u7528\u573a\u666f",path:"/scene/index.htm"}],c={};return o.each(u,function(e){a(e)}),{getHeaderMenu:function(){var e=h.Router.parse(0),t=e.hash.path||e.query.path;return t&&"/"!=t||(t="/start/todo/list.htm"),c[t]||r(t),c[t].menu},getSideBarMenu:function(){var e=h.Router.parse(0),t=e.hash.path||e.query.path;return t&&"/"!=t||(t="/start/todo/list.htm"),c[t]||r(t),c[t].sidebar}}});