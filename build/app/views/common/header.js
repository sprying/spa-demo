define("app/views/common/header",["require","module","exports","magix","app/exts/menu/index"],function(e,n,i){var a=e("magix"),t=e("app/exts/menu/index");return a.View.extend({tmpl:'<div class=header> <h3 class=fl>spa-demo\u793a\u4f8b</h3> <ul class="menus fl"> <li t-class:active=menu.checked t-for="menu in menus"> <a href="{{menu.path}}">{{menu.name}}</a> </li> </ul> </div>',init:function(){this.observeLocation({path:!0})},render:function(){this.data={menus:t.getHeaderMenu()},this.setView()}})});