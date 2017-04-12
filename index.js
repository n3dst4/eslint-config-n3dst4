"use strict";

module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  "rules": {
    "no-multi-spaces": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none" // too annoying for e.g. callbacks with set args
      }
    ],
    "eol-last": 0,
    "no-trailing-spaces": 1,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "no-underscore-dangle": 0,
    curly: [2, "multi-line"],
    "space-infix-ops": 2,
    "no-empty": 2,
    "no-debugger": 1,
    "no-use-before-define": [
      2,
      "nofunc"
    ],
    "comma-spacing": 2,
    "no-console": 0,
    // prevents some errors if you like to leave out semicolons
    "no-unexpected-multiline": 2,
    // disable the corresponding ones from eslint core
    "generator-star-spacing": 0,
    "new-cap": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "arrow-parens": 0,
    "no-await-in-loop": 0
  },
  plugins: [
    "react"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
