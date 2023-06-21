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
    const isFix = context.options[0];
    // visitor
    return {
      FunctionDeclaration(node) {
        const functionName = node.id.name
        // 只处理get开头的
        if (!functionName.startsWith('get')) {
          return;
        }

        const blockStatementBody = node.body.body;
        // 没有节点或者最后一个节点不是return
        const lastNode = blockStatementBody[blockStatementBody.length - 1];
        if (!lastNode || lastNode.type !== 'ReturnStatement') {
          context.report({
            node,
            message: functionName + ' must return a value',
            fix(fixer) {
              if (isFix === false) {
                return fixer.insertTextAfter(node, '');
              }
              const endPoint = node.range[1];
              return fixer.replaceTextRange([endPoint - 1, endPoint], 'return undefined}')
            }
          });
          return;
        }

      }
    };
  }
}
