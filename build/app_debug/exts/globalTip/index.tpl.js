define('app/exts/globalTip/index.tpl',['module','exports'],function(module,exports){
module.exports =  '\
<div class="globaltip-body <%= type %>">\
  <i class="iconfont <%= typeicon %>"></i>\
  <span class="text"><%= content%></span>\
</div>\
'

});