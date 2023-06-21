// 控制台执行 pnpm run test -- --watch
const { RuleTester } = require('eslint');
const { rules } = require('../index');
const ruleTester = new RuleTester();

ruleTester.run('ecop-window', rules['ecop-window'], {
  valid: [
    // {
    //   name: 'success1',
    //   code: `let a = 1;`
    // },
    {
      name: 'success2',
      code: `console.log(window.a);`
    }
  ],
  invalid: [
    {
      name: 'reassign1',
      code: 'window.a = 1',
      errors: [{
        message: 'can not reassign variable from window'
      }]
    }, {
      name: 'reassign2',
      code: 'window.a.b.c = 1',
      errors: [{
        message: 'can not reassign variable from window'
      }]
    }, {
      name: 'localStorage1',
      code: 'localStorage.setItem(\'a\', b);',
      errors: [{
        message: '在ecop环境下，不能直接使用localStorage，请使用@ecop/toolkit@feat-vmok-transfer'
      }]
    }, {
      name: 'localStorage1',
      code: 'window.localStorage.setItem(\'a\', b);',
      errors: [{
        message: '在ecop环境下，不能直接使用localStorage，请使用@ecop/toolkit@feat-vmok-transfer'
      }]
    }
  ]

});
