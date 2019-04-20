/**
 * html trim loader
 * @description 这是一个处理html文件的loader 主要用来除去标签之间的回车与换行
 */
const {
  getOptions
} = require('loader-utils');
const validateOptions = require('schema-utils');

const schema = require('./options');

const defaultOptions = {
  removeComments: true, // 移除注释
  removeWhiteSpace: true, // 移除空格
  removeNewline: true, // 移除回车换行
}

module.exports = function (source) {
  const resourcePath = this.resourcePath;
  if (/\.[render|function]\.html$/.test(resourcePath)) {
    return source;
  }
  let options = getOptions(this) || {};

  validateOptions(schema, options, 'Raw Loader');

  options = Object.assign({}, defaultOptions, options);

  let text = JSON.stringify(source || '')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  if (options.removeComments) {
    text = text.replace(/(<!--.*?-->)?/mg, '');
  }
  if (options.removeNewline) {
    text = text.replace(/\\r\\n( )*/g, ' ');
  }
  if (options.removeWhiteSpace) {
    text = text.trim().replace(/>( )+<(\w|\W)/g, '><$2');
  }

  return `module.exports = ${text}`;
}