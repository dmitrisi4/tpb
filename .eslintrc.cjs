module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
