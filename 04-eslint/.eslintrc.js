module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    // Possible Errors
    'for-direction': 'error',
    'getter-return': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'warn',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': [
      'error',
      5
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true
      }
    ],
    'curly': 'error',
    'default-case': 'error',
    'dot-location': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    // Maybe turn this to 'error'
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'warn',
      {
        ignore: [
          1
        ],
        ignoreArrayIndexes: true
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'off',
    'no-new': 'warn',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': [
      'error',
      'as-needed'
    ],
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',

    // Strict Mode
    'strict': [
      'error',
      'global'
    ],

    // Variables
    'init-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',

    // Node.js and CommonJS
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': [
      'error',
      '^(err|error)$'
    ],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error',

    // Stylistic Issues
    'array-bracket-newline': [
      'error',
      'always'
    ],
    'array-bracket-spacing': 'error',
    'array-element-newline': [
      'error',
      'always'
    ],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': [
      'error',
      'never'
    ],
    'id-blacklist': 'off',
    'id-length': [
      'warn',
      {
        min: 1,
        max: 20
      }
    ],
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'error',
    'max-depth': [
      'error',
      4
    ],
    'max-len': [
      'error',
      {
        code: 80
      }
    ],
    'max-lines': [
      'warn',
      100
    ],
    'max-nested-callbacks': [
      'error',
      3
    ],
    'max-params': [
      'error',
      3
    ],
    'max-statements': [
      'error',
      10
    ],
    'max-statements-per-line': 'error',
    'multiline-comment-style': [
      'error',
      'separate-lines'
    ],
    'multiline-ternary': 'off',
    'new-cap': 'warn',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': [
      'error',
      'SequenceExpression'
    ],
    'no-tabs': 'error',
    'no-ternary': 'warn',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: true
      }
    ],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error',
      {
        minProperties: 1
      }
    ],
    'object-curly-spacing': 'error',
    'object-property-newline': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'none'
    ],
    'padded-blocks': [
      'error',
      'never'
    ],
    'padding-line-between-statements': 'off',
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'require-jsdoc': 'off',
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'off',
    'unicode-bom': 'error',
    'wrap-regex': 'off',

    // ECMAScript 6
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'off',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'off'
  }
};
