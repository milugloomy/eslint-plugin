// 控制台执行 pnpm run test -- --watch
const {RuleTester} = require('eslint');
const {rules} = require('../index');
const ruleTester = new RuleTester();

ruleTester.run('get', rules['get'], {
  valid: [{
    name: 'success',
    code: 'function getName(){ return \'\'}'
  }, {
    name: 'success',
    code: 'function setName(){ }'
  }],
  invalid: [{
    name: 'body is empty',
    code: 'function getName() {}',
    output: 'function getName() {return undefined}',
    errors: [{
      message: 'getName must return a value'
    }]
  }, {
    name: 'body is not empty',
    code: 'function getName() {var name = 1;}',
    output: 'function getName() {var name = 1;return undefined}',
    errors: [{
      message: 'getName must return a value'
    }]
  }, {
    name: 'no fix',
    options: [false],
    code: 'function getName() {}',
    output: 'function getName() {}',
    errors: [{
      message: 'getName must return a value'
    }]
  }]

});
