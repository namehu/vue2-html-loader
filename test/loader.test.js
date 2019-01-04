import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('layout.html');
  const output = stats.toJson().modules[0].source;

  expect(output).toMatch('module.exports =');
});
