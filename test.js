const test = require('ava')
const sinon = require('sinon')
let stripe = require('./lib/stripe.js')

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('fake', t => {
  const fake = sinon.replace(stripe.accounts, 'create', sinon.fake.returns('fake'))
  t.is(fake(), 'fake')
  t.is(fake.callCount, 1)
})
