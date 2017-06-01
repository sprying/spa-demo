define('app/exts/auth/lib/field/field',['require','module','exports','jquery','underscore','app/exts/arale/base','app/exts/auth/lib/rule/rule','app/exts/auth/lib/rule/ruleFactory','app/exts/auth/lib/utils'],function(require,module,exports){var $ = require('jquery')
var _ = require('underscore')
var Base = require('app/exts/arale/base')
var Rule = require('app/exts/auth/lib/rule/rule')
var Factory = require('app/exts/auth/lib/rule/ruleFactory')
var Utils = require('app/exts/auth/lib/utils')
var EMPTY = ''
var DATA_FIELD = 'data-field'
/**
 * field默认配置
 * @type {Object}
 */
var defaultConfig = {
  event: 'blur',
  style: {
    'success': 'ok',
    'error': 'error'
  }
}
/**
 * 从html元素的属性中拉取规则配置
 * @param {NodeList} $field 表单域元素
 * @return {Object} rules
 */
function getFieldAttrRules($field) {
  var allRules = Factory.rules
  var rules = {}
  var sort = $field.attr('test-rules')
  if (sort) {
    var sortRules = {}
    _.each(sort.split(','), function (ruleNames) {
      if (allRules[ruleNames]) sortRules[ruleNames] = allRules[ruleNames]
    })
    allRules = sortRules
  }
  _.each(allRules, function (rule, ruleName) {
    if ($field.attr(ruleName) != undefined) {
      rules[ruleName] = {
        msg: {
          error: $field.attr(ruleName + '-msg'),
          success: $field.attr(ruleName + '-success-msg') || EMPTY,
          warn: $field.attr(ruleName + '-warn-msg') || EMPTY
        },
        propertyValue: $field.attr(ruleName)
      }
    }
  })
  return rules
}

/**
 * 获取html tag上的配置
 * @param $field
 * @return {{}}
 */
function tagConfig($field) {
  var config = {}
  $field = $($field)
  if (!$field || !$field.length) return config
  var rules = getFieldAttrRules($field)
  //合并自定义规则配置
  if (!$.isEmptyObject(rules)) config.rules = rules
  //验证事件
  var attrEvent = $field.attr('auth-event')
  if (attrEvent) config.event = attrEvent

  return config
}

/**
 * 表单字段类
 * @param target
 * @param config
 * @return {*}
 * @constructor
 */
var Field = Base.extend({
  Statics: {
    _defer: new $.Deferred()
  },
  initialize: function (target, config) {
    var self = this
    self._validateDone = {}
    //储存上一次的校验结果
    self._cache = {}
    //合并html tag上的配置
    var tc = tagConfig(target)
    _.extend(config, defaultConfig)
    _.extend(config, tc)
    _.extend(config, {target: target})
    self._cfg = config
    //保存rule的集合
    self._storage = {}

    Field.superclass.initialize.call(self, config)

    self._init()
  },
  _init: function () {
    var self = this
    var _cfg = self._cfg
    var $target = self.get('target')
    var _ruleCfg = _.extend({}, _cfg.rules)
    self._groupTarget()
    _.each(_ruleCfg, function (ruleCfg, name) {
      if (!self._storage[name] && Factory.rules[name]) {
        self._createRule(name, ruleCfg)
      }
    })
    $target.data(DATA_FIELD, self)
    var target = $target[0]
    self._targetBind(_cfg.event || Utils.getEvent(target))
    self.trigger('render')
    return self
  },
  /**
   * radio/checkedbox是一组表单元素
   * @return {NodeList}
   * @private
   */
  _groupTarget: function () {
    var self = this
    var $target = self.get('target')
    if ($.inArray($target.attr('type'), ['checkbox', 'radio']) != -1) {
      var form = $target[0].form, elName = $target.attr('name')
      var els = []
      _.each(document.getElementsByName(elName), function (item) {
        if (item.form == form) {
          els.push(item)
        }
      })
      $target = $(els)
      self.set('target', $target)
    }
    return $target
  },
  /**
   * 给表单元素绑定验证事件
   * @param v
   * @private
   */
  _targetBind: function (v) {
    var self = this
    var $target = self.get('target')
    if (!$target.length) return false
    $target.on(v, function () {
      //增加个延迟，确保原生表单改变完成
      setTimeout(function () {
        self.validate()
      }, 0)
    })
    return self
  },
  /**
   * 创建规则实例
   * @param name
   * @param ruleCfg
   * @return {Rule}
   * @private
   */
  _createRule: function (name, ruleCfg) {
    var self = this
    var $target = self.get('target')
    _.extend(ruleCfg, {
      value: $target.val(),
      target: $target,
      field: self
    })
    var rule = Factory.create(name, ruleCfg)
    self.add(name, rule)
    return rule
  },
  /**
   * 向Field添加一个规则实例
   * @param name
   * @param rule
   * @return {*}
   */
  add: function (name, rule) {
    var self = this,
      _storage = self._storage
    if (rule instanceof Rule) {
      _storage[name] = rule
    } else if (S.isFunction(rule)) {
      _storage[name] = new Rule(name, rule)
    }
    self.set('rules', _storage)
    return self
  },
  /**
   * 删除规则
   * @param name
   * @return {*}
   */
  remove: function (name) {
    var _storage = this._storage
    delete _storage[name]
    self.set('rules', _storage)
    return this
  },
  /**
   * 获取指定规则
   */
  rule: function (name) {
    var self = this
    var rules = self.get('rules')
    return rules[name]
  },
  /**
   * validate同名方法，触发字段验证
   * @param name
   * @return {Promise}
   */
  test: function (name) {
    return this.validate(name)
  },
  /**
   *
   * @param name
   *
   * @return {Promise}
   */
  validate: function (name) {
    var self = this
    var aRule = []
    var rules = self.get('rules')
    //只验证指定规则
    if (_.isString(name)) {
      var needTestRules = name.split(',')
      _.each(needTestRules, function (ruleName) {
        rules[ruleName] && aRule.push(rules[ruleName])
      })
    } else {
      //验证所有规则
      _.each(rules, function (oRule) {
        aRule.push(oRule)
      })
    }
    //排除指定的规则
    var exclude = self.get('exclude')
    if (exclude != '') {
      var aExclude = exclude.split(',')
      aRule = _.filter(aRule, function (rule) {
        return !($.inArray(rule.get('name'), aExclude) != -1)
      })
    }
    //隐藏的元素不需要触发校验
    if (!self.get('hiddenTest')) {
      var target = self.get('target')
      if (target.attr('disabled')) aRule = []
    }
    var _defer = new $.Deferred()
    //不存在需要验证的规则，直接投递成功消息
    if (!aRule.length) {
      var _emptyDefer = new $.Deferred()
      var _emptyPromise = _emptyDefer.promise()
      _emptyPromise.then(function () {
        _defer.resolve(aRule)
        self.trigger('success', {rules: aRule, target: self})
      })
      _emptyDefer.resolve()
      return _emptyPromise
    }
    //校验开始
    self.trigger('beforeTest', {rules: aRule})
    var d = new $.Deferred()
    d.resolve(true)
    var p = d.promise()
    _.each(aRule, function (oRule) {
      p = p.then(function (e) {
        return oRule.validate()
      })
    })
    p.then(function () {
      //所有规则验证通过
      _defer.resolve(aRule)
      self.trigger('success', {rules: aRule, target: self})
    }).fail(function (rule) {
      //有规则存在验证失败
      _defer.reject(rule)
      console.log && console.log(self.get('name') + '字段出错的规则是：' + rule.get('name'))
      self.trigger('error', {rule: rule})
    })
    return _defer.promise()
  },
  destroy: function () {
    var self = this
    var $target = self.get('target')
    var _cfg = self._cfg
    $target.off(_cfg.event || Utils.getEvent(target[0]))
    $target.removeData(DATA_FIELD)
  },
  attrs: {
    /**
     * 目标元素
     */
    target: {
      value: '',
      getter: function (v) {
        return $(v)
      },
      setter: function (v) {
        //重新设置target，需要设置rule的target
        var target = $(v)
        var self = this
        var rules = self.get('rules')
        if (!$.isEmptyObject(rules)) {
          _.each(rules, function (rule) {
            if (rule.set) rule.set('target', target)
          })
          target.data(DATA_FIELD, self)
        }
        return target
      }
    },
    /**
     * 字段名称
     */
    name: {
      value: ''
    },
    /**
     * 对应的元素绑定的事件（用于触发验证）
     */
    event: {
      value: '',
      setter: function (v) {
        var self = this
        self._targetBind(v)
        return v
      }
    },
    /**
     * 宿主Auth的实例
     * @type {Auth}
     */
    host: {value: ''},
    /**
     * 验证时排除的规则
     */
    exclude: {value: ''},
    /**
     *  绑定在域上的所有规则实例
     *  @type {Object}
     */
    rules: {value: {}},
    /**
     * 验证消息类实例
     * @type {Object}
     */
    msg: {value: ''}
  }
})

return Field

});