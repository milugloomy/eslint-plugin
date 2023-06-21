module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'can not directly use window under ecop environment',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code',
  },
  create(context) {
    const exclude = context.options[0];
    return {
      AssignmentExpression(node) {
        // window赋值
        let memberExpression = node.left;
        while(memberExpression.object){
          memberExpression = memberExpression.object;
        }
        const identifier = memberExpression;

        if (identifier.name === 'window') {
          context.report({
            node,
            message: '在ecop环境下，不要直接赋值window下的吧变量，请使用@ecop/toolkit@feat-vmok-transfer'
          });
        }
      },
      CallExpression(node) {
        const methodNames = ['localStorage', 'sessionStorage'];
        function report(name) {
          context.report({
            node,
            message: `在ecop环境下，不要直接使用${object.name}，请使用@ecop/toolkit@feat-vmok-transfer`
          });
        }

        let object = node.callee;
        while(object.object){
          object = object.object;
        }
        if(object.type === 'Identifier') {
          // localStorage.setItem
          if (methodNames.includes(object.name)) {
            report(object.name);
          }
          // window.localStorage.setItem
          if (object.name === 'window') {
            const property = object.parent.property;
            if (methodNames.includes(property.name)) {
              report(property.name);
            }
          }
        }
      }
    };
  }
}
