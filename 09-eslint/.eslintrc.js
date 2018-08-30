const oncodyEslintConfig = require('oncody-eslint-config');

let eslintConfig = {
  parser: 'babel-eslint',
  plugins: [
    'html'
  ],
  extends: [
    'vue'
  ]
};

eslintConfig = Object.assign(eslintConfig, oncodyEslintConfig);

module.exports = eslintConfig;
