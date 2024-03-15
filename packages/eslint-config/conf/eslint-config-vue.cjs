/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = {
  extends: [
    '../partials/defaults.cjs',
    '../partials/typescript.cjs',
    '../partials/imports.cjs',
    '../partials/vue.cjs',
    '../partials/prettier.cjs',
  ],
}
