define("app/exts/arale/base",["require","module","exports","app/exts/arale/class","app/exts/arale/events","app/exts/arale/aspect","app/exts/arale/attribute"],function(t,e,a){function s(t,e){for(var a in e)if(e.hasOwnProperty(a)){var s="_onChange"+r(a);t[s]&&t.on("change:"+a,t[s])}}function r(t){return t.charAt(0).toUpperCase()+t.substring(1)}var n=t("app/exts/arale/class"),i=t("app/exts/arale/events"),p=t("app/exts/arale/aspect"),o=t("app/exts/arale/attribute");return n.create({Implements:[i,p,o],initialize:function(t){this.initAttrs(t),s(this,this.attrs)},destroy:function(){this.off();for(var t in this)this.hasOwnProperty(t)&&delete this[t];this.destroy=function(){}}})});