import fs from 'node:fs'
import path from 'node:path'
import stylelint from 'stylelint'
import { expect, it } from 'vitest'
import stylelintConfig from '../index.js'

it('should not throw', async () => {
  await expect(async () => {
    await import(path.join(import.meta.dirname, '..', 'index.js'))
  }).not.toThrowError()
})

it('should have correct order', async () => {
  const fixture = fs.readFileSync(path.join(import.meta.dirname, 'fixture.css'), 'utf8')

  const result = await stylelint.lint({
    code: fixture,
    config: stylelintConfig,
    fix: true,
  })

  expect(result.errored).toBe(false)
  expect(result.code).toMatchSnapshot()
})
