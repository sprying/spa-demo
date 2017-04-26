/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */

var mat = require('mat')
var less = require('mat-less')
var rap = require('mat-rap')

// 预编译less
 mat.task('less', function(){
  mat.url([/main\.css/]).rewrite([
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
  mat.url([/\.json/]).use(rap({
    projectId: '17799' // rap平台对应的项目id，用你的替换
  }))
})
