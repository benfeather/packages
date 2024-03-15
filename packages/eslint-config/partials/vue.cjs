/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        /**
         * Enforce order of attributes.
         * @see https://eslint.vuejs.org/rules/attributes-order.html
         */
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

        /**
         * Enforce specific casing for the component naming style in template.
         * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
         */
        'vue/component-name-in-template-casing': [
          'error',
          'kebab-case',
          {
            registeredComponentsOnly: false,
          },
        ],

        /**
         * Require component names to be always multi-word.
         * @see https://eslint.vuejs.org/rules/multi-word-component-names.html
         */
        'vue/multi-word-component-names': 'off',

        /**
         * Disallow adding multiple root nodes to the template.
         * @see https://eslint.vuejs.org/rules/no-multiple-template-root.html
         */
        'vue/no-multiple-template-root': 'off',

        /**
         * Disallow use of v-html to prevent XSS attack.
         * @see https://eslint.vuejs.org/rules/no-v-html.html
         */
        'vue/no-v-html': 'off',
      },
    },
  ],
}
