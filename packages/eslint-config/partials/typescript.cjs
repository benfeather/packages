/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = {
  overrides: [
    {
      files: ['*.cjs', '*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx', '*.vue'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        /**
         * Disallow the any type.
         * @see https://typescript-eslint.io/rules/no-explicit-any
         */
        '@typescript-eslint/no-explicit-any': 'off',

        /**
         * Disallow TypeScript namespaces.
         * @see https://typescript-eslint.io/rules/no-namespace
         */
        '@typescript-eslint/no-namespace': 'off',

        /**
         * Disallow unused variables.
         * @see https://typescript-eslint.io/rules/no-unused-vars
         */
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
