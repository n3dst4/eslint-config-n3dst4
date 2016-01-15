"use strict";

module.exports = {
  extends: "./index",
  "rules": {
    "react/display-name": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/no-unknown-property": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
  },
  plugins: [
    "react"
  ],
  ecmaFeatures: {
    "jsx": true
  }
};
