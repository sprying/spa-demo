define("app/views/common/layout",["require","module","exports","magix","app/exts/menu/index"],function(e,i,n){var a=e("magix"),m=e("app/exts/menu/index");return a.View.extend({tmpl:'<div mx-vframe=true mx-view="app/views/common/header"></div> <div mx-vframe=true mx-view="app/views/common/sidebar"></div> <div mx-vframe=true id=magix_vf_main class=main> <div bx-name="components/spin"></div> </div>',init:function(){this.observeLocation({path:!0})},render:function(){var e=this,i=m.getSideBarMenu(),n=i.length;if(e.rendered){var a=$("#magix_vf_main");n?a.animate({marginLeft:"250px"},250,"swing"):a.delay(150).animate({marginLeft:"30px"},250,"swing",function(){a.css("margin-left","")}),e._mountVframes()}else e.setView(function(){var i=$("#magix_vf_main");n?i.css({marginLeft:"250px"}):i.css({marginLeft:""}),e._mountVframes()})},_mountVframes:function(){var e=this.vom.get("magix_vf_main"),i=this.location.path.substring(1).replace(/\.htm$/,"")||"start/todo/list";e.mountView("app/views/"+i)}})});