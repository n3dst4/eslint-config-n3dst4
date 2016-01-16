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
    "no-console": 0,

    // replace certain posibly-problematic eslint rules with reimplemented ones
    // from eslint-plugin-babel
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 1,
    "babel/object-curly-spacing": 1,
    "babel/object-shorthand": 1,
    "babel/arrow-parens": 1,
    "babel/no-await-in-loop": 1,

    // disable the corresponding ones from eslint core
    "generator-star-spacing": 0,
    "new-cap": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "arrow-parens": 0,
    "no-await-in-loop": 0
  },
  plugins: [
    "babel"
  ],
  ecmaFeatures: {
  }
};
