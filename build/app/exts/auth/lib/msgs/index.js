define("app/exts/auth/lib/msgs/index",["require","module","exports","jquery","underscore","app/exts/arale/base","app/exts/auth/lib/msgs/msg"],function(e,t,r){var a=(e("jquery"),e("underscore")),s=e("app/exts/arale/base"),n=e("app/exts/auth/lib/msgs/msg"),u=s.extend({initialize:function(e){var t=this;if(!e)return!1;e.on("add",function(e){var r=e.field;t._renderMsg(r)}),u.superclass.initialize.call(t,{auth:e})},_renderMsg:function(e){if(!e)return!1;var t,r=this,s=e.get("target"),u=r.get("fnWrapper");a.isFunction(u)&&(t=u.call(e,s));var i=new n({tpl:r.get("tpl"),wrapper:t});return i.set("target",s),i.set("host",e),i.render(),e.set("msg",i),i},getMsg:function(e){return this.get("auth").getField(e).get("msg")},attrs:{auth:{value:""},tpl:{value:'<p class="auth-msg auth-<%= style %>"><%= msg %></p>'},fnWrapper:{value:function(){}}}});return u});