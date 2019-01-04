[![npm][npm]][npm-url]

[![deps][deps]][deps-url]

<div align="center">
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="200" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a>
  <img width="200" height="200"
    src="https://worldvectorlogo.com/logos/html5.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://worldvectorlogo.com/logos/webpack.svg">
  </a>
  <h1>Vue HTML Loader</h1>
  <p>Exports HTML as string. HTML is minimized when the compiler demands.<p>

  <p>This loader is similar to html-loader
,but the difference is, this loader treat the html template as a string, 
It does not replace custom tags and attributes and there is no intention to leave a space between the tags when removing spaces.
it may cause an error in the vue $sloat processing.
<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D vue-html-loader
```

<h2 align="center">Usage</h2>

```js
{
  test: /\.(html)$/,
  use: {
    loader: 'vue-html-loader',
    options: {
      removeComments: true,
      removeWhiteSpace: true,
      removeNewline: true,
    }
  }
}
```

```js
import template from 'path/to/your/template.html';

new Vue({
  template,
  ...otherOptions
});

Use Typescript

@Component({
  template: require('./list.html'),
})
export default class VueComponents extends Vue {}

```

## Options Quick Reference

Most of the options are disabled by default.

| Option             | Description                       | Default |
| ------------------ | --------------------------------- | ------- |
| `removeComments`   | remove html comments              | `true`  |
| `removeWhiteSpace` | remove html whiteSpace            | `true`  |
| `removeNewline`    | remove html newLine (actual \r\n) | `true`  |
