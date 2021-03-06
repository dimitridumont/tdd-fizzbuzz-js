const fizzBuzz = require("./index")

describe("FizzBuzz kata", () => {
    it("should returns the number", () => {
        const result = fizzBuzz(1)

        expect(result).toEqual("1")
    })

    it("should returns Fizz if the number is multiple of 3", () => {
        const result = fizzBuzz(3)

        expect(result).toEqual("Fizz")
    })

    it("should returns Buzz if the number is multiple of 5", () => {
        const result = fizzBuzz(10)

        expect(result).toEqual("Buzz")
    })

    it("should returns FizzBuzz if the number is multiple of 5 and 3", () => {
        const result = fizzBuzz(15)

        expect(result).toEqual("FizzBuzz")
    })
})
