/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */

var mat = require('mat')
var less = require('mat-less')

mat.env({
	port: 8281,
  combohandler: true
})

// 预编译less
 mat.task('less', function(){
  mat.url([/\.css/]).rewrite([
    [/\.css/g, '.less']
  ])
    .use(less())
})

mat.task('pushState', function () {
  mat.url([/^((?!\.(css|less|js|html|ico|swf)).)*$/])
    .rewrite([
      [/(\/.*)+/, 'index.html']
    ])
})

mat.task('default', ['less', 'pushState'], function(){
  mat.url([/\.json/]).use(function *(next){
    this.proxyPass = 'rapapi.org/mockjsdata/18155' // proxyPass会被mat内部处理
    yield next
  })
})
