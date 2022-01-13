const sumNumbers = (elements = [], sum = { even: 0, odd: 0}) => {

  const last = elements.pop()

  if (!last) return sum

  if (last%2===0) return sumNumbers(elements, { even: sum.even + last, odd: sum.odd })

  return sumNumbers(elements, { even: sum.even, odd: sum.odd + last } )
}

console.log(sumNumbers([4,1,3,1,5,7,2]))

module.exports = sumNumbers
