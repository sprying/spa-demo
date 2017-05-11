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

先去平台新建一个项目，渠道项目id，修改matfile.js对应的字段

## 新建工程
#### 在工程根目录下新建index.html
是个空页面，页面引入模块加载器require.js，如下

    <script src="//g.alicdn.com/thx/brix-release/1.0.0-beta.9/require-config.js"></script>

这个js中会有路径别名配置，比如jquery，underscore，brix。

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
* mat的api并不好，代理的代码这块放在mat里，感觉怪怪的，然后mat-rap、mat-proxy什么事情都没做，并且不能改rap要代理的域名，所以我干脆去掉。
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