/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    /**
     * Disallow unused variables.
     * @see https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': 'off',

    /**
     * Disallow the use of undeclared variables unless mentioned in global comments.
     * @see https://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'off',
  },
}
