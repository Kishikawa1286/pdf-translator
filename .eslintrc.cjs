var tsConfigs = ['./tsconfig.json'];

var ruleOverrides = {};

module.exports = {
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        'prettier',
        'plugin:tailwindcss/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsConfigs,
      },
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
      },
      files: ['*.ts', '*.tsx'],
    },
    {
      extends: ['eslint:recommended', 'prettier', 'esnext'],
      parserOptions: {
        sourceType: 'module',
      },
      files: ['./*.mjs', './*.js'],
      rules: ruleOverrides,
    },
  ],
  env: {
    es6: true,
  },
  root: true,
};
