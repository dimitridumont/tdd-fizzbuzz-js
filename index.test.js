const fizzBuzz = require("./index")

describe("FizzBuzz kata", () => {
    it("should returns the number", () => {
        const result = fizzBuzz(1)

        expect(result).toEqual("1")
    })
})
