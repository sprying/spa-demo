/**
 * Created by sprying.fang@gmail.com on 2017/7/15.
 */
var Magix = require('magix')
var Loader = require('brix/loader')

module.exports = Magix.View.extend({
  render: function () {
    var me = this
    this.data = {
      menu: 1
    }
    this.setView().then(function () {
      me.component()
    })
  },
  toggle: function () {
    var auth = Loader.query('app/exts/auth/index')[0].auth

    if(this.data.menu){
      // 新增一个表单校验
      auth.add('[name="menu_input"]')
    } else {
      // 删除一个表单校验，会删除包括错误提示、样式
      auth.remove('menu_input')
    }
  },
  component: function () {
    var auth = Loader.query('app/exts/auth/index')[0].auth

    // 获取某个field
    var minPriceField = auth.field('minPrice')
    // 获取某个field对应的DOM
    var minEl = minPriceField.get('target')
    var maxPriceField = auth.field('maxPrice')
    var maxEl = maxPriceField.get('target')

    var hasBlurMax = false
    var callNext = true

    // 表单元素新增一个自定义的校验规则，与registry有区别
    minPriceField.add('money', function (value) {
      if(!hasBlurMax) return
      if(+maxEl.val() < +value){
        // 自定义错误文案
        this.msg('error', '最大金额必须大于最小金额')
        return false
      }
      if(callNext){
        callNext = false
        // 触发单个表单元素的校验
        maxPriceField.validate()
      } else {
        callNext = true
      }
      return  true
    })
    maxPriceField.add('money', function (value) {
      hasBlurMax = true
      if(+minEl.val() > +value) {
        this.msg('error', '最大金额必须大于最小金额')
        return false
      }
      if(callNext){
        callNext = false
        minPriceField.validate()
      } else {
        callNext = true
      }
      return  true
    })
  },
  doSubmit: function () {
    var auth = Loader.query('app/exts/auth/index')[0].auth

    // 手动调用校验
    auth.test().then(function () {
      console.log('校验通过')
    })
  }
})
