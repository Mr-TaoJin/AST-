// recast.run —— 命令行文件读取
// #!/usr/bin/env node 
const recast  = require('recast')

// recast.visit —— AST节点遍历
recast.run(function(ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function({node}) {
          console.log(node)
          return false
        }
      });
  });

recast.run(function(ast, printSource) {
recast.visit(ast, {
    visitExpressionStatement: function(path) {
        const node = path.node
        printSource(node)
        this.traverse(path)
    }
    })
});
