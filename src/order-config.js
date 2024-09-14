import { appearance } from './groups/appearance.js'
import { boxModel } from './groups/box-model.js'
import { interaction } from './groups/interaction.js'
import { layout } from './groups/layout.js'
import { positioning } from './groups/positioning.js'
import { svgPresentation } from './groups/svg-presentation.js'
import { transition } from './groups/transition.js'
import { typography } from './groups/typography.js'

export const propertyGroups = [
  ['composes'],
  ['all'],
  ['content'],
  positioning,
  layout,
  boxModel,
  appearance,
  typography,
  svgPresentation,
  transition,
  interaction,
]

const propertiesOrder = propertyGroups.map(properties => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never',
  properties,
}))

export function getOrderRules({ severity }) {
  return {
    'order/order': [[
      { type: 'at-rule', name: 'import' },
      { type: 'at-rule', name: 'forward' },
      { type: 'at-rule', name: 'use' },
      'dollar-variables',
      'at-variables',
      'custom-properties',
      { type: 'at-rule', name: 'custom-media' },
      { type: 'at-rule', name: 'function' },
      { type: 'at-rule', name: 'mixin' },
      { type: 'at-rule', name: 'extend' },
      'declarations',
      { type: 'rule', selector: /^&::[\w-]+/, hasBlock: true },
      'rules',
      { type: 'at-rule', name: 'media', hasBlock: true },
    ], { severity }],
    'order/properties-order': [propertiesOrder, {
      severity,
      unspecified: 'bottomAlphabetical',
      emptyLineBeforeUnspecified: 'always',
    }],
  }
}
