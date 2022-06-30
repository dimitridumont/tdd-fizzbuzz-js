const fizzBuzz = (number) => {
    if (isMultipleOf(number, 5) && isMultipleOf(number, 3)) return "FizzBuzz"

    if (isMultipleOf(number, 5)) return "Buzz"

    if (isMultipleOf(number, 3)) return "Fizz"

    return number.toString()
}

const isMultipleOf = (number, divider) => number % divider === 0

module.exports = fizzBuzz
