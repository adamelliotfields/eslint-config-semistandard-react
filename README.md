# ESLint Config Semistandard React
>All the rules in one place...

### Install
The plugins required for this config must be installed manually as peer dependencies.  

This is required for the config to work globally (see [Configuring Plugins](http://eslint.org/docs/3.0.0/user-guide/configuring#configuring-plugins)).  

**NPM:**

```bash
npm install --save-dev eslint eslint-config-semistandard-react eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

**Yarn:**

```bash
yarn add --dev eslint eslint-config-semistandard-react eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

**Globally:**  

Replace `--save-dev` or `--dev` with `--global`.

### Configure
Create an `.eslintrc` in your project's root folder (local installation) or your computer's $HOME directory (`~/`) (global installation) and paste the following snippet:

```json
{
  "extends": ["semistandard-react"]
}
```

### Rules
This is a unified ESLint shared configuration combining all of the rules from:
* [eslint-config-semistandard](https://github.com/Flet/eslint-config-semistandard)
* [eslint-config-standard](https://github.com/feross/eslint-config-standard)
* [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react)
* [eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)*

**standard-jsx is a dependency of standard-react.*

### Acknowledgements
* [@feross](https://github.com/feross): [Standard Style](https://standardjs.com/)  
* [@Flet](https://github.com/Flet): [Semistandard Style](https://github.com/Flet/eslint-config-semistandard)
* [@yannickcr](https://github.com/yannickcr): [ESLint React plugin](https://github.com/yannickcr/eslint-plugin-react)
* [@mysticatea](https://github.com/mysticatea): [ESLint Node plugin](https://github.com/mysticatea/eslint-plugin-node)
* [@benmosher](https://github.com/benmosher): [ESLint Import plugin](https://github.com/benmosher/eslint-plugin-import)
* [@xjamundx](https://github.com/xjamundx): [ESLint Promise plugin](https://github.com/xjamundx/eslint-plugin-promise)
