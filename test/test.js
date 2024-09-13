/* eslint-disable no-console */
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import stylelint from 'stylelint'
import stylelintConfig from '../index.js'

function testConfigFile() {
  assert.doesNotThrow(async () => {
    await import(path.join(import.meta.dirname, '..', 'index.js'))
  })

  return Promise.resolve()
}

function testOrder() {
  const fixture = fs.readFileSync(path.join(import.meta.dirname, 'fixture.css'), 'utf8')
  const expected = fs.readFileSync(path.join(import.meta.dirname, 'expected.css'), 'utf8')

  return stylelint.lint({
    code: fixture,
    config: stylelintConfig,
    fix: true,
  }).then(result => {
    assert.equal(result.errored, false)
    assert.equal(result.code, expected, 'Stylelint output does not equal expected output')
  })
}

await Promise.all([testConfigFile(), testOrder()])
console.log('OK')
