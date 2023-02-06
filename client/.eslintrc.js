module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'xo'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'capitalized-comments': 'off',
    indent: ['warn', 2],
    'arrow-parens': ['warn', 'always'],
  },
};
