## 目标
### 阶段一目标
搭建一套单页应用，同时详解每个步骤、具体代码，每天写一点代码

## 开发环境
>我是先安装了[nvm](https://github.com/creationix/nvm)管理本地nodeJs多个版本，  
>nvm install node，我本地安装的是v7.10.0  
>npm i mat -g  
>npm i  
>mat

由于前后端是并行开发，开发过程中，前端使用rap模拟后端请求

>[rap](http://rapapi.org/org/index.do)

先去平台新建一个项目，取到项目id，修改matfile.js对应的字段

## 新建工程
#### 在工程根目录下新建index.html
是个空页面，页面引入模块加载器require.js，如下

    <script src="//g.alicdn.com/thx/brix-release/1.0.0-beta.9/require-config.js"></script>

这个文件前部分是requirejs源码，后部分是针对有关brix模块的配置，比如jquery，underscore，brix，使用这些模块的时候，直接引用这个名字就行

```js
  require.config({ // http://requirejs.org/docs/api.html
    waitSeconds: 0, // http://requirejs.org/docs/api.html#config-waitSeconds
    // urlArgs: "bust=" + (new Date()).getTime() // http://requirejs.org/docs/api.html#config-urlArgs
    map: { // http://requirejs.org/docs/api.html#config-map
      '*': {
        // RequireJS Loader 插件
        css: base + 'require-css/css.js'
      }
    }
  })
```
请求css时，会使用上面的js文件

```js
  var brix = {
    'brix/loader':       base + 'brix-loader/dist/' + gogogo('loader-debug', 'loader'),
    'brix/base':         base + 'brix-base/dist/' + gogogo('base-debug', 'base'),
    'brix/event':        base + 'brix-event/dist/' + gogogo('event-debug', 'event'),
    'brix/animation':    base + 'brix-animation/dist/' + gogogo('animation-debug', 'animation'),
    'brix/components':   base + 'brix-components/dist/components',
    'brix/styles':       base + 'brix-components/dist/styles',
    'brix/dependencies': base,
    'brix/deps':         base
  }
  brix.components   = brix['brix/components']
  brix.styles       = brix['brix/styles']
  brix.dependencies = brix['brix/dependencies']
  brix.deps         = brix['brix/dependencies']
  require.config({
    paths: brix
  })

  var deps = {
    jquery:      base + 'jquery/dist/' + gogogo('jquery', 'jquery.min'),
    underscore:  base + 'underscore/' + gogogo('underscore', 'underscore-min'),
    moment:      base + 'moment/' + gogogo('moment', 'min/moment.min'),
    handlebars:  base + 'handlebars/' + gogogo('handlebars', 'handlebars.min'),
    mock:        base + 'mockjs/dist/' + gogogo('mock', 'mock-min'),
    marked:      base + 'marked/lib/marked',
    highlightjs: base + 'highlightjs/highlight.pack',
    nprogress:   base + 'nprogress/nprogress',
    parsley:     base + 'parsleyjs/dist/' + gogogo('parsley', 'parsley.min'),
    accounting:  base + 'accountingjs/' + gogogo('accounting', 'accounting.min'),
    progressbar: base + 'progressbar.js/dist/progressbar',
    Sortable:    base + 'Sortable/Sortable',
    vue:         base + 'vue/dist/' + gogogo('vue', 'vue.min')
  }
```

#### 新建项目入口js，`app/boot.js`
通过require引入magix，brix

Magix.start里配置路由

#### 扩展View，`app/view.js`

定义新的渲染方法，因为这里只是一个magix，magix只是管理路由，view，具体如何拿到获取的数据和模板渲染，要业务开发方自己去实现，这里用到了pat模板引擎，很好的支持局部刷新，组件这块使用了brix。


#### 新建view
* 标签引用子view

        <div mx-vframe="true" mx-view="app/views/header"></div>


    
## 参考链接
[mat](http://matjs.com/)

[brix book](http://thx.github.io/brix-book/)

## NOTE
### 2017-04-26
* boot时候，写正则的时候，发现自己以前正则知识体系没更新，不知道如何下手写正则了
* mat的正则匹配写法还是不好，没看懂，直接从项目里拷贝配置过来了
* 总之终于本地开发跑起来了
* 这个坑确实很大，从`mat`、`pat`的事件，`magix`方法、属性欠缺，不知道怎么用，但是我想，这也是我成长的见证，以后自己在业务里沉淀，可以写到这里
* `View.prototype.$` 获取dom


### 2017-04-28
* 启动magix，有个重要的配置，如下，这配置是vframe的标签叫什么名字，所以我们用div作为标签名，tagName参数在api中又没有
```js
    Magix.start({
      // ...
      tagName: 'div',
      // ...
    })
```

* 支持brix组件调用

### 2017-04-29
* 新增pat调试模式，嗯，这个文档也没查到
* 自定义view的渲染方法，magix文档却没说要重新绑定事件，怎么接入事件绑定，如何绑定事件，坑爹
```undelegateEvents```
* 准备做一个增、查、改、删的例子，查的是rap模拟平台的数据，已经做好了

### 2017-05-01
* less文件结构
```
	└── style
	    ├── block.less // 放着业务里的公共区块
	    ├── common.less // 定义一些业务相关的可复用样式
	    ├── component.less // 放在一些组件样式
	    ├── global.less // 定义一些业务无关的可复用样式
	    ├── layout.less 
	    ├── main.less // 唯一的入口css
	    ├── pages // 放业务对应的css
	    └── var.less // 定义变量，mixin
```
* mat默认接口代理到内网rap平台，是写在插件里，不能改。于是我就没用插件，直接在mat配置文件里，写了这块回调。代理的代码这块放在mat的npm里，感觉怪怪的，然后mat-rap、mat-proxy什么事情都没做，并且不能改rap要代理的域名。
```
mat.task('default', ['less', 'pushState'], function(){
  mat.url([/\.json/]).use(function *(next){
    this.proxyPass = 'rapapi.org/mockjsdata/18155' // proxyPass会被mat内部处理
    yield next
  })
})
```
为此我还研究下koa、mat、co的源码，坑真深

### 2017-05-05
* 绑定事件，删除item时指定了两个参数，回调中怎么获取这两个参数
    ```
        <a href="javascript:void(0);" mx-click="delItem({{__INDEX__}}, {{item.id}})">删除</a>
    ```

    ```
        delItem: function(e, index, id){
    ```
* 新建一个brix组件，```globalTip```，这个是非主流用法，不是像HTML原生一样使用，而是在js中调用

    这个组件，是全局提示

* 使用[iconfont](http://iconfont.cn/)新建一个项目，将图标样式复制到项目less文件中，在globalTip提示中加图标
    ![iconfont](https://img.alicdn.com/tfs/TB1jvEIQVXXXXbqXFXXXXXXXXXX-655-454.png)
    ```
    @import url(//at.alicdn.com/t/font_jeewzi4tzgpvte29.css);
    ```

    ```
      <i class="iconfont icon-chenggong2"></i>
    ```  

### 2017-05-06
* 样式文件放在项目里定义，按前几天说的less文件结构
    ```
        └── style
            ├── block.less // 放着业务里的公共区块
            ├── common.less // 定义一些业务相关的可复用样式
            ├── component.less // 放在一些组件样式
            ├── global.less // 定义一些业务无关的可复用样式
            ├── layout.less 
            ├── main.less // 唯一的入口css
            ├── pages // 放业务对应的css
            └── var.less // 定义变量，mixin
    ```

    加上样式reset <https://thx.github.io/cube/doc/neat>
    ```
    //g.alicdn.com/thx/cube/1.3.2/neat.css
    ```

* 修改了layout布局，页头菜单和侧边栏菜单关联，在```app/exts/menu/index.js```配置。当然每个view都可以成为布局，这只是其中一个布局的例子。
    但是感觉配置太不方便了，```boot.js```需要配置，```layout.js```需要配置，简直晕了，并且每个项目都要去实现，太耗费人力了，我都花费两天才搞定。

* 侧边栏收起，当url发生变化时，magix框架使layout先监听到，触发main区块```margin-left```发生变化，而后magix框架执行一系列动作后，sidebar也监听到，触发宽度变化，但是慢一拍。慢一拍的时间又不好定，所以就尴尬了，现在main收缩时慢150ms。
* 在多页面中发现前面不合理地方，比如index.html的修改，比如layout.js中rendered判断，view.js重新render时候data填充  

### 2017-05-09
* 使用代码格式化配置
我用的IDE是webstorm，先使用了jshint，发现在工程里加了配置文件，没有生效，就换用了editorconfig，重启编辑器生效了
查了一下，发现editorconfig是webstorm默认安装的插件，jshint是webstorm已经集成了，但是没开启<https://www.jetbrains.com/help/webstorm/2017.1/jshint.html>
究竟用哪个，考虑jshint、editorconfig在sublime里都需要安装，而editorconfig默认就在webstorm里生效，所以用editorconfig


### 2017-05-10
* 重新修改了README开头说明

### 2017-05-13
* 新增表单提交
* 使用样式参考<http://thx.github.io/brix-spec/main.html>
* 在文档中又找不到js中查询brix组件方法，brix销毁也找不到，又晕
* 表单校验，使用了kissy的auth组件，我们使用jquery，所以改造了下，具体参考<http://kissygalleryteam.github.io/auth/doc/guide/index.html>
* 获取表单数据，使用了<https://github.com/marioizquierdo/jquery.serializeJSON/blob/master/jquery.serializejson.js>

### 2017-05-15
再说说前天的表单提及。
* 新增消息，已经新建保存过，再次进入，不输入任何文字，也可以点击按钮，新建消息。我觉得是校验出了问题，初步猜到是区块更新时，brix组件没有销毁。断点调试的时候，进入校验逻辑，对表单元素的校验，还是能取到值的，就是jquery选择器维持那个值。于是我在区块更新时，监听洗事件，去销毁该区块的brix组件。另外js中获取组件时，再加了个查询组件的父元素。问题就解决了。
* 在调试校验组件源码的时候，发现它的继承机制，然后花了一天时间，总结了对象、类中涉及的工具方法，只是没想到要花昨天整整一个周日时间。学习时[实例链接](http://sprying.github.io/webtest/class/index.html)

### 2017-05-19
* 新增打包gulp脚本，打包后文件分为debug和非debug版本，打包后在工程根目录下生成build目录，推送到cdn时，推送build目录下文件，后端页面代码引用cdn路径

```
npm install gulp-cli -g
npm install gulp -D
gulp build
```

* 优化菜单逻辑，深层拷贝用jquery方法

### 2017-05-23
* 想尝试将demo工程放在github的gh-pages分支下，这样可以使用github的web服务访问。这时候路由要使用hash，但是请求服务的xhr接口不支持反向代理，所以放不了
* gulp打包的依赖npm包，有几个忘加了，加了下。

### 2017-05-31
端午三天都在重新阅读requirejs源码，然后发现能支持combo，然后就实现了combo功能，结合上周修复了请求路径中带`//`

* 解决请求路径中带`//`问题，是magix库有问题，修改magix xhr请求模板那块file值

    ```js
      VProto.fetchTmpl = function(path, fn) {
        var me = this;
        var hasTemplate = 'tmpl' in me;
        if (!hasTemplate) {
          if (Has(Tmpls, path)) {
            fn(Tmpls[path]);
          } else {
            var idx = path.indexOf('/');
            var name = path.substring(0, idx);
            if (!Paths[name]) {
              Paths[name] = require.s.contexts._.config.paths[name];
            }
            var file = Paths[name] + '/' + path.substring(idx + 1) + '.html'; // 此处修改了，原先var file = Paths[name] + '/' + path.substring(idx + 1) + '.html'

     ```

* 另外修改下从cdn拷贝下来的magix未压缩代码，参考magix库在打包前源码，[链接](https://github.com/thx/magix/blob/2.0/src/2.0/magix/tmpl/magix.js#L169)，下面的代码，库官方的打包工具会对压缩和非压缩，出不同的代码，而现在打包工作由项目工程来做，先统一加上。

    ```js
    var ToTry = function(fns, args, context, i, r, e) {
        if (!G_IsArray(fns)) {
            fns = [fns];
        }
        if (!args || (!G_IsArray(args) && !args.callee)) {
            args = [args];
        }
        for (i = 0; i < fns.length; i++) {
            //KEEP /*_*/try{/*_*/
            e = fns[i];
            r = e && e.apply(context, args);
            //KEEP /*_*/}catch(x){/*_*/
            //KEEP      Cfg.error(x);/*_*/
            //KEEP /*_*/}/*_*/
        }
        return r;
    };
     ```
* 请求js时使用combo，requireJs加载器是不支持combo的，所以我们得改造它。我们将requirejs库拷贝到项目工程中，添加combo代码，覆盖req.load，关于combo的js的url划分实现，从[seajs-combo](https://github.com/seajs/seajs-combo/blob/master/src/seajs-combo.js)改造过来的

* 另外阅读源码之后，combo请求多个js时，返回的define匿名的模块，有两个时是有问题的，我们不好保证combo中没有两个匿名define，所以combo的模块中先要消除匿名define

* 支持配置哪些js不使用combo请求

    ```js
      require.config(
       comboExcludes: [
          'jquery',
          'app/view.js',
          'common/sidebar.js'
        ]
      })
    ```

* combo之后，多个模块会放在一个js中，如果没有`;`分割模块，会报错，对项目里的js加了`;`结束

* 本地开发发起combo，是向mat请求的，所以需要mat开启支持

    ```
    mat.env({
      combohandler: true
    })
    ```
    [mat api](http://matjs.com/#!/page/doc?tab=api)里是有这个参数的，但是是做什么的

* 线上静态资源服务如果是nginx，nginx搭建combo功能<https://github.com/alibaba/nginx-http-concat>


### 2017-06-01
* 本地启动mat服务，使用commonjs方法写模块，在浏览器中加载js还是使用requirejs，mat会将加载的js会自动包装一层define。

* 测试、线上环境，使用gulp将js包一层define即可发布

* 使用了<https://github.com/thx/magix-combine>，来包装一层define，但是它要求的目录结构跟我工程不一样，所以修改了下<https://github.com/sprying/magix-combine/tree/feature/1.2.10-modify>

* 浏览器中可以查看页面加载打包后的资源文件

    >mat compress

### 2017-10-03
* 将combo功能从requirejs文件剥除，单独弄成一个文件，本地开发时，为方便调试，去掉combo
* auth组件示例
* popover组件示例
* 图片水平垂直居中示例