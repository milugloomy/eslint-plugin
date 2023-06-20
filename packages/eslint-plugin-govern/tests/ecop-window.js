// 控制台执行 pnpm run test -- --watch
const {RuleTester} = require('eslint');
const {rules} = require('../index');
const ruleTester = new RuleTester();

// ruleTester.run('ecop-window', rules['ecop-window'], {
//   valid: [{
//     name: 'success',
//     code: 'function name(){ return \'\'}'
//   }],
//   invalid:[]
//
// });
