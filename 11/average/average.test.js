const average = require('./average')

test('Empty parameter to be -1', () => {
  const response = average()

  expect(response).toBe(-1)
})

test('Array of [1,2,3,4,5] to be 3', () => {
  const response = average([1,2,3,4,5])

  expect(response).toBe(3)
})

test('Array of [3,1,5,1,65,1,7,3,13] to be 11', () => {
  const response = average([3,1,5,1,65,1,7,3,13])

  expect(response).toBe(11)
})

test('Array of [9,8,7,6,5,4,3,2] to be 5.5', () => {
  const response = average([9,8,7,6,5,4,3,2])

  expect(response).toBe(5.5)
})
