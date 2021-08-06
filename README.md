# DEPRECATED

This config and its corresponding plugin were just convenience methods for installing Standard style
with semicolons (AKA "SemiStandard") and additional React rules.

These were never updated and were meant to be used with a very old version of ESLint. In other
words, you should definitely not be using it today.

If you'd still like to use SemiStandard style with React, simply run the following commands in your
terminal.

First, uninstall my config and plugin:

```bash
npm uninstall \
eslint-config-semistandard-react \
eslint-plugin-semistandard-react
```

Next, install the required configs and plugins for SemiStandard React:

```
npm install --save-dev \
eslint \
eslint-config-standard \
eslint-config-semistandard \
eslint-config-standard-jsx \
eslint-config-standard-react \
eslint-plugin-import \
eslint-plugin-node \
eslint-plugin-promise \
eslint-plugin-react
```

Finally, update your `.eslintrc` so it looks like this:

```json
{
  "extends": [
    "semistandard",
    "standard-jsx",
    "standard-react"
  ]
}
```
