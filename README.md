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