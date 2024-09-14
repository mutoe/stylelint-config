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

  let result = await stylelint.lint({
    code: fixture,
    config: stylelintConfig,
    fix: true,
  })
  result = await stylelint.lint({
    code: result.code,
    config: stylelintConfig,
    fix: true,
  })

  const warnings = JSON.parse(result.report)[0]?.warnings ?? []
  const uniqueWarnings = new Set(warnings.map(warning => warning.rule))
  expect(uniqueWarnings).toMatchSnapshot('warnings')

  expect(result.code).toMatchSnapshot('code')
})

it.todo('should have correct order for stylus', async () => {
  const fixture = fs.readFileSync(path.join(import.meta.dirname, 'fixture.styl'), 'utf8')

  let result = await stylelint.lint({
    code: fixture,
    config: stylelintConfig,
    fix: true,
  })
  result = await stylelint.lint({
    code: result.code,
    config: stylelintConfig,
    fix: true,
  })

  const warnings = JSON.parse(result.report)[0]?.warnings ?? []
  const uniqueWarnings = new Set(warnings.map(warning => warning.rule))
  expect(uniqueWarnings).toMatchSnapshot('warnings')

  expect(result.code).toMatchSnapshot('code')
})

it('should have correct order for scss', async () => {
  const fixture = fs.readFileSync(path.join(import.meta.dirname, 'fixture.scss'), 'utf8')

  let result = await stylelint.lint({
    code: fixture,
    config: stylelintConfig,
    fix: true,
  })
  result = await stylelint.lint({
    code: result.code,
    config: stylelintConfig,
    fix: true,
  })

  const warnings = JSON.parse(result.report)[0]?.warnings ?? []
  const uniqueWarnings = new Set(warnings.map(warning => warning.rule))
  expect(uniqueWarnings).toMatchSnapshot('warnings')

  expect(result.code).toMatchSnapshot('code')
})
