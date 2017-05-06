define('app/exts/globaltip/index.tpl', function() {
  return '\
<div class="globaltip-body <%= type %>">\
  <i class="iconfont <%= typeicon %>"></i>\
  <span class="text"><%= content%></span>\
</div>\
'
})