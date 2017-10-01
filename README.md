# ESLint Config Semistandard React
> An advanced configuration for writing clean ES7+ React (with semicolons).


### Changelog
See [`CHANGELOG.md`](https://github.com/adamelliotfields/eslint-config-semistandard-react/blob/master/CHANGELOG.md).


### Install
The plugin and parser required for this config must be installed manually as peer dependencies.

This is required for the config to work globally (see [Configuring Plugins](http://eslint.org/docs/3.0.0/user-guide/configuring#configuring-plugins)).

**NPM:**

```bash
npm install -D eslint babel-eslint eslint-config-semistandard-react eslint-plugin-semistandard-react
```

**Yarn:**

```bash
yarn add -D eslint babel-eslint eslint-config-semistandard-react eslint-plugin-semistandard-react
```

**Globally:**  

`npm install --global ...` **or** `yarn global add ...`


### Configure
Create an `.eslintrc` in your project's root folder (local installation) or your computer's $HOME
directory (global installation) and paste the following snippet:

```json
{
  "extends": ["semistandard-react"]
}
```

You may also override any rules by creating a `rules` object after the `extends` array. For example,
if you want to enforce trailing commas (aka comma dangle), simply add the following rule:

```json
{
  "extends": ["semistandard-react"],
  "rules": {
    "comma-dangle": ["error", "always-multiline"]
  }
}
```


### Rules
This is a unified ESLint shared configuration combining all of the rules from:
* [eslint-config-semistandard](https://github.com/Flet/eslint-config-semistandard)
* [eslint-config-standard](https://github.com/feross/eslint-config-standard)
* [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react)
* [eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)


### Parser
[babel-eslint](https://github.com/babel/babel-eslint) is necessary to use experimental JavaScript
features like:
* [class properties](https://babeljs.io/docs/plugins/transform-class-properties/)
* [class decorators](https://babeljs.io/docs/plugins/transform-decorators/)
* [object rest spread properties](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
* [function binding](https://babeljs.io/docs/plugins/transform-function-bind/)
* [do expressions](https://babeljs.io/docs/plugins/transform-do-expressions/)

The Babel parser also allows you to use Flow type annotations without throwing a parsing error.


### Flow
I haven't included Flow as a peer dependency, since typed JavaScript is a personal preference.  

To lint your Flow type annotations, simply install [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype),
and change your `.eslintrc` like so:

```json
{
  "extends": ["semistandard-react", "plugin:flowtype/recommended"]
}
```


### Editor Plugins
I primary use ESLint to fix errors in-editor before compiling/running. Webstorm has built-in support
for ESLint and allows you to fix an entire file with one click.

Here are links to the ESLint plugins for the other popular text editors:
* [Atom](https://atom.io/packages/linter-eslint)
* [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Sublime](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)


### Webpack
To lint your code during a Webpack compilation, use [`eslint-loader`](https://github.com/MoOx/eslint-loader)
and add this to your Webpack configuration:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint',
          baseConfig: {
            extends: ['semistandard-react']
          }
        }
      }
    ]
  }
};
```


### Acknowledgements
* [@nzakas](https://github.com/nzakas): [ESLint](https://github.com/eslint/eslint)
* [@kittens](https://github.com/kittens): [Babel](https://github.com/babel/babel)
* [@feross](https://github.com/feross): [Standard Style](https://standardjs.com/)  
* [@Flet](https://github.com/Flet): [Semistandard Style](https://github.com/Flet/eslint-config-semistandard)
