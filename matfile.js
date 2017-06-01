/**
 * Created by yingchun.fyc@alibaba-inc.com on 2017/4/24.
 */

var mat = require('mat')
var less = require('mat-less')
var combineTool = require('magix-combine')
var combineToolConfig = require('./combine-tool-config')
var path = require('path')

//magix-combine工具
combineTool.config(combineToolConfig)

//分析js,打包view
function analyse() {
  return function* combine(next) {

    // console.log('文件路径：', this.path)
    yield next

    let body = this.body.toString()

    if (body == 'Not Found') {
      throw new Error('路径：' + this.path + ' 对应的文件没有找到')
    }

    let file = path.join(__dirname, this.path)
    body = yield combineTool.processContent(path.join(__dirname, this.path), '', body)

    this.body = body
  }
}

mat.env({
	port: 8281,
  combohandler: true
})

mat.task('combine', function(){
  mat.url([/\.js(\?.+)?$/])
  .use(analyse())
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

mat.task('proxy', function(){
  mat.url([/\.json/]).use(function *(next){
    this.proxyPass = 'rapapi.org/mockjsdata/18155' // proxyPass会被mat内部处理
    yield next
  })
})

mat.task('pushState_online', function () {
  mat.url([/^((?!\.(css|less|js|html|ico|swf)).)*$/])
    .rewrite([
      [/(\/.*)+/, 'index-online.html']
    ])
})

mat.task('default', ['less', 'pushState', 'combine', 'proxy'])

mat.task('compress', ['pushState_online', 'combine', 'proxy'])
