/* eslint-disable no-console,unicorn/prefer-top-level-await */
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const stylelint = require('stylelint')

function testConfigFile() {
  assert.doesNotThrow(() => {
    require(path.join(__dirname, '..', 'index.js'))
  })

  return Promise.resolve()
}

function testOrder() {
  const fixture = fs.readFileSync(path.join(__dirname, 'fixture.css'), 'utf8')
  const expected = fs.readFileSync(path.join(__dirname, 'expected.css'), 'utf8')

  return stylelint.lint({
    code: fixture,
    config: require('..'),
    fix: true,
  }).then(result => {
    assert.strictEqual(result.errored, false)
    assert.strictEqual(result.output, expected, 'Stylelint output does not equal expected output')
  })
}

Promise
  .all([testConfigFile(), testOrder()])
  .then(() => console.log('OK'))
  .catch(error => {
    console.error(error.name, error.message)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(-1)
  })
