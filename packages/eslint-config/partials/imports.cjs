/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  rules: {
    /**
     * Reports any imports that come after non-import statements.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * Reports use of an exported name as the locally imported name of a default export.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'off',

    /**
     * Ensures an imported module can be resolved to a module on the local filesystem.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',

    /**
     * Enforce a convention in the order of require() / import statements.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
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
  },
}
