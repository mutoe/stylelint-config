import { appearance } from './groups/appearance'
import { boxModel } from './groups/box-model'
import { interaction } from './groups/interaction'
import { layout } from './groups/layout'
import { positioning } from './groups/positioning'
import { svgPresentation } from './groups/svg-presentation'
import { transition } from './groups/transition'
import { typography } from './groups/typography'

export const propertyGroups = [
  ['composes'],
  ['all'],
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
