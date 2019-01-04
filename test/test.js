const compiler = require('./compiler.js');

compiler('layout.html', {}).then(stats => {
  const output = stats.toJson().modules[0].source;
  console.log(output);
});