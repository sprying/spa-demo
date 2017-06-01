define('app/exts/auth/lib/rule/rule',['require','module','exports','jquery','underscore','app/exts/arale/base'],function(require,module,exports){var $ = require('jquery')
var _ = require('underscore')
var Base = require('app/exts/arale/base')
/**
 * 规则类
 *
 * @param {Object} ruleConfig params and msg 规则参数
 * @constructor
 */
var Rule = Base.extend({
  initialize: function (ruleName, ruleFunction, ruleConfig) {
    var self = this
    if (!_.isString(ruleName) || !_.isFunction(ruleFunction)) return self
    if (!_.isObject(ruleConfig)) ruleConfig = {args: []}

    //合并参数
    _.extend(ruleConfig, {
      name: ruleName,
      validation: ruleFunction
    })

    Rule.superclass.initialize.call(self, ruleConfig)
  },
  /**
   * 规则验证，留意返回的是Promise实例
   * @return {Promise}
   */
  validate: function () {
    var self = this
    var validation = self.get('validation')
    var args = self._getArgs()

    var _defer = self.get('_defer')
    //调用验证方法，返回promise
    var validatedApply = validation.apply(self, args)

    //非异步，普通的验证函数
    //validatedApply的值为true||false
    //注入promise
    if (_.isBoolean(validatedApply)) {
      var isPass = validatedApply
      validatedApply = _defer.promise()
      _defer[isPass && 'resolve' || 'reject'](self)
      return validatedApply
    }

    return validatedApply
  },
  /**
   * 获取/设置指定状态下的消息
   * @param status
   * @param msg
   * @return msg
   */
  msg: function (status, msg) {
    var self = this
    if (!_.isString(status) && !_.isString(msg)) return self
    var msgs = self.get('msg')
    if (!msg) {
      return msgs[status]
    } else {
      msgs[status] = msg
      return msg
    }
  },
  /**
   * 设置验证函数的参数值
   * @return {Array}
   * @private
   */
  _getArgs: function () {
    var self = this
    var _defer = new $.Deferred()
    var field = self.get('field')
    var args = [
      //目标值（指向目标表单元素的值）
      self.get('value'),
      //规则属性值
      self.get('propertyValue'),
      //promise
      _defer,
      field
    ]
    self.set('_defer', _defer)
    return args
  },
  attrs: {
    /**
     * 规则名称
     */
    name: {
      value: ''
    },
    /**
     * 需要规则验证的值
     */
    value: {
      value: '',
      getter: function (v) {
        var target = this.get('target')
        if (!target.length) return v
        return target.val()
      }
    },
    /**
     * 规则属性的值
     */
    propertyValue: {
      value: '',
      getter: function (v) {
        var target = this.get('target')
        if (!target.length) return v

        return target.attr(this.get('name'))
      }
    },
    /**
     * 消息配置
     */
    msg: {
      value: {
        error: '',
        success: ''
      }
    },
    /**
     * 验证函数
     */
    validation: {
      value: function () {
      }
    },
    /**
     * 目标元素
     */
    target: {
      value: ''
    },
    /**
     * 规则对应的表单域（指向会变化）
     * @type {Field}
     */
    field: {
      value: ''
    },
    _defer: {
      value: ''
    }
  }
})

return Rule

});