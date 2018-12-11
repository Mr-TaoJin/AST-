
#AST抽象语法树



1. 检查仓库是否被设成了淘宝镜像库
npm config get registry
2. 如是，则设回原仓库
npm config set registry=http://registry.npmjs.org
3. 登录账号（如未登录）
npm login
4. 再次发布
npm publish
5. 如发布成功，则再次将仓库地址设为淘宝镜像地址
npm config set registry=https://registry.npm.taobao.org/