module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    "cypress/globals": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-refresh',
    'cypress'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'operator-linebreak': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
