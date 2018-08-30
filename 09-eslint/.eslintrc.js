const oncodyEslintConfig = require('oncody-eslint-config');

let eslintConfig = {
  parser: 'vue-eslint-parser',
  plugins: [
    'vue'
  ],
  extends: [
    'plugin:vue/recommended'
  ]
};

eslintConfig = Object.assign(oncodyEslintConfig, eslintConfig);
oncodyEslintConfig.parserOptions.parser = 'babel-eslint';

module.exports = eslintConfig;
