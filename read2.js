// recast.run —— 命令行文件读取
// #!/usr/bin/env node 
const recast  = require('recast');
const TNT = recast.types.namedTypes

// TNT —— 判断AST对象类型
// recast.run(function(ast, printSource) {
//     recast.visit(ast, {
//         visitExpressionStatement: function(path) {
//           const node = path.value
//           // 判断是否为ExpressionStatement，正确则输出一行字。
//           if(TNT.ExpressionStatement.check(node)){
//             console.log('这是一个ExpressionStatement')
//           }
//           this.traverse(path);
//         }
//       });
//   });
  recast.run(function(ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function(path) {
          const node = path.node
          // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
          TNT.ExpressionStatement.assert(node)
          this.traverse(path);
        }
      });
  });