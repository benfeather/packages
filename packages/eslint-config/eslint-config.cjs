/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Plugin: Prettier
    'prettier/prettier': 'warn',

    // Plugin: Import
    'import/first': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
      },
    ],

    // Plugin: TypeScript
    '@typescript-eslint/no-unused-vars': 'warn',

    // ESLint rules
    'no-fallthrough': 'error',
    'no-unused-vars': 'off',
  },
}
