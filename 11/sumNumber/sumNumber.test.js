const sumNumbers = require('./sumNumber')

test('Empty parameter to be { even: 0, odd: 0 }', () => {
  const response = sumNumbers()
  expect(response).toBe({even: 0, odd: 0})
})

test('Sum of [1,2,3,4] to be { even: 6, odd: 4 }', () => {
  const response = sumNumbers([1,2,3,4])
  expect(response).toBe({even: 6, odd: 4})
})

test('Sum of [4,1,3,1,5,7,2] to be { even: 6, odd: 17 }', () => {
  const response = sumNumbers([4,1,3,1,5,7,2])
  expect(response).toBe({ even: 6, odd: 17 })
})
