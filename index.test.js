const fizzBuzz = require("./index")

describe("FizzBuzz kata", () => {
    it("should returns the number", () => {
        const result = fizzBuzz(1)

        expect(result).toEqual("1")
    })

    it("should returns Fizz if the number is 3", () => {
        const result = fizzBuzz(3)

        expect(result).toEqual("Fizz")
    })
})
