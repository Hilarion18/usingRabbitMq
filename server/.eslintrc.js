module.exports = {
  // eslintConfig: {
  //   // "extends": "airbnb-base",
  //   env: {
  //     es6: true
  //     // "browser": true
  //   }
  // },
  // env: {
  //   es6: true,
  // },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    quotes: ['error', 'single'],
    'no-console': 'off',
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 1120,
      },
    ],
    'global-require': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'consistent-return': 0,
    'prefer-destructuring': 0,
    'no-underscore-dangle': 0,
    eqeqeq: 0,
    'no-unused-expressions': 0,
    'no-var': ['off'],
    'one-var': ['off'],
  },
};
