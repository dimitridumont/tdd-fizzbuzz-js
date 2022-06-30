const fizzBuzz = require("./index")

describe("FizzBuzz kata", () => {
    it("should returns 1 if the number is 1", () => {
        const result = fizzBuzz(1)

        expect(result).toEqual("1")
    })
})
