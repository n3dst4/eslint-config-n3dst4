# @n3dst4/eslint-config-n3dst4

Heyo. This is my ESLint config, meant for ES-current code (Babelified or otherwise).

[ESLint][eslint] is a very configurable tool for checking JavaScript code. Eslint configs can be [shared and distributed as npm packages][eslintdocs].

## Usage

In the package you want to lint while developing, run

```bash
npm install eslint babel-eslint eslint-plugin-babel @n3dst4/eslint-config-n3dst4 --save-dev



```

Then in your `package.json`, add:

```json
  "eslintConfig": {
    "extends": "@n3dst4/eslint-config-n3dst4"
  }
```


# React and JSX

If you're working on a project with React and/or using JSX syntax, replace the `eslintConfig` block above with:

```json
  "eslintConfig": {
    "extends": "@n3dst4/eslint-config-n3dst4/react"
  }
```

This will enable JSX support and bring in some rules about React usage, too.



[eslintdocs]: http://eslint.org/docs/developer-guide/shareable-configs
[eslint]: http://eslint.org/
