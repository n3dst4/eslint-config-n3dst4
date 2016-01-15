"use strict";

module.exports = {
  extends: "eslint:recommended",
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  "rules": {
    "no-multi-spaces": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "after-used"
      }
    ],
    "eol-last": 0,
    "no-trailing-spaces": 0,
    "space-unary-ops": 0,
    "no-underscore-dangle": 0,
    "curly": 1,
    "space-infix-ops": 0,
    "no-empty": 0,
    "no-debugger": 1,
    "no-use-before-define": [
      2,
      "nofunc"
    ],
    "comma-spacing": 0,
    "no-undef": 2,
    "no-console": 0
  },
  plugins: [
  ],
  ecmaFeatures: {
  }
};
