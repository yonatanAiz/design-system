/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    '*.css',
    'dist',
    'build',
    'coverage',
    'webpack.config.js',
    'jest.config.js',
    'jest.common.js',
    'jest.storyshots.config.js',
    'storybook-static',
    'plop-templates',
    '*.hbs',
    "plopfile.js"
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
