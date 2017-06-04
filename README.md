# ESLint Config Semistandard React
>All the rules...

### Install
`npm install --save eslint eslint-config-semistandard-react` or `yarn add eslint eslint-config-semistandard-react`  

Then create an `.eslintrc` in your project's root folder and paste the following snippet:

```
{
  "extends": ["eslint-config-semistandard-react"]
}
```

### Rules
This is a unified ESLint shared configuration combining all of the rules from:
* [eslint-config-semistandard](https://github.com/Flet/eslint-config-semistandard)
* [eslint-config-standard](https://github.com/feross/eslint-config-standard)
* [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react)
* [eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)

### Why?
Because this is a single `npm install` or `yarn add` that does not have any peer dependencies besides ESLint itself.

### Acknowledgements
* [@feross](https://github.com/feross): [Standard Style](https://standardjs.com/)  
* [@Flet](https://github.com/Flet): [Semistandard Style](https://github.com/Flet/eslint-config-semistandard)
* [@yannickcr](https://github.com/yannickcr): [ESLint React plugin](https://github.com/yannickcr/eslint-plugin-react)
* [@mysticatea](https://github.com/mysticatea): [ESLint Node plugin](https://github.com/mysticatea/eslint-plugin-node)
* [@benmosher](https://github.com/benmosher): [ESLint Import plugin](https://github.com/benmosher/eslint-plugin-import)
* [@xjamundx](https://github.com/xjamundx): [ESLint Promise plugin](https://github.com/xjamundx/eslint-plugin-promise)
