function trbl(prefix) {
  const rules = []

  if (prefix) {
    rules.push(prefix)
    prefix = `${prefix}-`
  }
  else {
    prefix = ''
  }

  return rules.concat([
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`,
  ])
}

function minMax(suffix) {
  return [suffix, `min-${suffix}`, `max-${suffix}`]
}

function border(infix) {
  if (infix) {
    infix = `-${infix}`
  }
  else {
    infix = ''
  }

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
    `border${infix}-radius`,
  ]
}

const cssModules = [[
  'composes',
]].flat()

const reset = ['all']

const positioning = [[
  'position',
  'z-index',
]].flat()
  .concat(trbl())

const displayAndBoxModel = [[
  'display',
  'overflow',
]].flat()
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat([
    'box-sizing',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order',
  ])
  .concat(trbl('padding'))
  .concat([border()].flat()
    .concat(border('top'))
    .concat(border('right'))
    .concat(border('bottom'))
    .concat(border('left')))
  .concat(trbl('margin'))

export default {
  extends: [
    'stylelint-stylus/standard',
    'stylelint-config-standard-scss',
  ],
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      [cssModules].flat()
        .concat(reset)
        .concat(positioning)
        .concat(displayAndBoxModel),
      { unspecified: 'bottomAlphabetical' },
    ],
    'rule-empty-line-before': ['always-multi-line', {
      except: ['after-single-line-comment', 'first-nested'],
      ignore: ['after-comment'],
    }],
    'stylus/pythonic': 'never',
    'stylus/selector-list-comma-newline-after': null,
    'stylus/selector-list-comma-newline-before': 'never-multi-line',
    'stylus/selector-list-comma': null,

    // Support VueJS rules
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] },
    ],

    // Support Tailwind / UnoCSS rules
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: ['apply', 'config', 'layer', 'responsive', 'screen', 'tailwind', 'unocss', 'variants'],
    }],
    'stylus/at-rule-no-unknown': [true, {
      ignoreAtRules: ['apply', 'config', 'layer', 'responsive', 'screen', 'tailwind', 'unocss', 'variants'],
    }],
    // There must always be parentheses in mixin calls, even if no arguments are passed, like functions
    'scss/at-mixin-argumentless-call-parentheses': 'always',
  },
}
