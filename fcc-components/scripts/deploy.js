const shelljs = require("shelljs");

shelljs.cp("-R", "src/components/", "packages");
shelljs.cp("-R", "plugin/", "packages");
// 这里可以去读外层的packages.json 构建自己的peer依赖 写入packages/package.json
// if (shelljs.exec("npm publish").code !== 0) {
//   shelljs.echo("Error: npm publish failed");
//   shelljs.exit(1);
// } else {
//   shelljs.echo("Success: npm publish success");
// }
