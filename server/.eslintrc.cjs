module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'xo',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'capitalized-comments': 'off',
    indent: ['warn', 2],
    'arrow-parens': ['warn', 'always'],
    'no-warning-comments': 'off',
  },
};
