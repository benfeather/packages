/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./eslint-config.cjs'],
  overrides: [
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'vue/attributes-order': [
          'error',
          {
            alphabetical: true,
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'TWO_WAY_BINDING',
              'CONTENT',
              'OTHER_DIRECTIVES',
              'GLOBAL',
              'UNIQUE',
              'SLOT',
              'OTHER_ATTR',
              'EVENTS',
            ],
          },
        ],
        'vue/component-name-in-template-casing': [
          'error',
          'kebab-case',
          {
            registeredComponentsOnly: false,
          },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'warn',
        'vue/no-v-html': 'off',
      },
    },
  ],
}
