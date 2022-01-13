const invertNumber = require('./invert')

test('Empty parameter to be -1', () => {
  const response = invertNumber()
  expect(response).toBe(-1)
})

test('Number 542 to be 245', () => {
  const response = invertNumber(542)
  expect(response).toBe(245)
})

test('Number 1000 to be 1', () => {
  const response = invertNumber(1000)
  expect(response).toBe(1)
})

test('Number 17490 to be 9471', () => {
  const response = invertNumber(17490)
  expect(response).toBe(9471)
})
