const compiler = require('./compiler.js');

compiler('layout.html', {
  removeComments: true, // 移除注释
  removeWhiteSpace: false, // 移除空格
  removeNewline: false, // 移除回车换行
}).then(stats => {
  const output = stats.toJson().modules[0].source;
  console.log(output);
});