define('app/exts/auth/lib/rule/ruleFactory', [
  'jquery',
  'underscore',
  'app/exts/arale/base',
  'app/exts/auth/lib/rule/rule',
  'app/exts/auth/lib/rule/default'
], function($, _, Base, Rule, defaultRules) {
  var RuleFactory = Base.extend({
    Statics: {
      rules: _.extend({}, defaultRules),
      /**
       * 注册验证规则，当name为object时，批量添加
       * @param {String|Object} name
       * @param rule
       */
      register: function(name, rule) {
        if (_.isObject(name)) {
          _.extend(RuleFactory.rules, name)
        } else {
          RuleFactory.rules[name] = rule
        }
      },
      /**
       * 实例化Rule类
       * @param {String} ruleName 规则名称
       * @param  {Object} cfg 配置
       * @return {*}
       */
      create: function(ruleName, cfg) {
        return new Rule(ruleName, RuleFactory.rules[ruleName], cfg)
      }
    }
  })

  return RuleFactory
});