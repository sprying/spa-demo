## 目标
### 阶段一目标
搭建一套单页应用，同时详解每个步骤、具体代码，每天写一点代码

## 开发工具
>安装nodejs>=0.12.0
>npm i mat -g
>npm i
>mat

由于前后端是并行开发，开发过程中，前端使用rap模拟后端请求

>[rap](http://rapapi.org/org/index.do)

先去平台新建一个项目，渠道项目id，修改matfile.js对应的字段

## 前端框架
页面引入

    <script src="//g.alicdn.com/thx/brix-release/1.0.0-beta.9/require-config.js"></script>

这个js中会有路径别名配置，比如magix，后来发现没magix配置。

## 从零开始一个新建文件
### boot
通过require引入magix，brix

Magix.start时候，tagName参数在api中又没有
### 扩展View

如何定义新的渲染方法
>View.prototype.$ 获取dom

### 新建view
* 标签引用子view

        <div mx-vframe="true" mx-view="app/views/header"></div>

    
##参考链接
[mat](http://matjs.com/)

[brix book](http://thx.github.io/brix-book/)

## NOTE
### 2017-04-26
* boot时候，写正则的时候，发现自己以前正则知识体系没更新，不知道如何下手写正则了
* mat的正则匹配写法还是不好，没看懂，直接从项目里拷贝配置过来了
* 总之终于本地开发跑起来了
* 这个坑确实很大，从`mat`、`pat`的事件，`magix`方法、属性欠缺，不知道怎么用，但是我想，这也是我成长的见证，以后自己在业务里沉淀，可以写到这里

### 2017-04-28
* 启动magix，有个重要的配置，如下，这配置是vframe的标签叫什么名字，所以我们用div作为标签名
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
* 定义less文件结构
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