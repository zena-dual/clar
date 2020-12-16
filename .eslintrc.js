module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [2],
  },
  settings: {
    'import/resolver': {
      node: {
        extenstions: ['.js', '.ts', '.tsx'],
      },
    },
    react: {
      verstion: 'detect',
    },
  },
};
