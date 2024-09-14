import { getOrderRules } from './src/order-config.js'

export { propertyGroups } from './src/order-config.js'

/** @type {import('stylelint').Config} */
export default {
  defaultSeverity: 'warning',
  plugins: [
    'stylelint-order',
  ],
  extends: [
    // 'stylelint-stylus/standard',
    'stylelint-config-standard-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    '@stylistic/stylelint-config',
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    ...getOrderRules('warning'),
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-syntaxes', 'consecutive-duplicates-with-same-prefixless-values'],
    }],
    'no-empty-source': null,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['after-single-line-comment', 'first-nested'],
      ignore: ['after-comment'],
    }],
    'at-rule-empty-line-before': ['always', {
      ignore: ['first-nested', 'blockless-after-same-name-blockless', 'after-comment'],
    }],
    // 'stylus/pythonic': 'never',
    // 'stylus/selector-list-comma-newline-after': null,
    // 'stylus/selector-list-comma-newline-before': 'never-multi-line',
    // 'stylus/selector-list-comma': null,

    // Support VueJS rules
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] },
    ],

    // Support Tailwind / UnoCSS rules
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: ['apply', 'config', 'layer', 'responsive', 'screen', 'tailwind', 'unocss', 'variants'],
    }],
    // 'stylus/at-rule-no-unknown': [true, {
    //   ignoreAtRules: ['apply', 'config', 'layer', 'responsive', 'screen', 'tailwind', 'unocss', 'variants'],
    // }],
    // There must always be parentheses in mixin calls, even if no arguments are passed, like functions
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    '@stylistic/max-line-length': null,
    '@stylistic/indentation': [2, { baseIndentLevel: 0 }],
  },
}
