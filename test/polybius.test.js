// Write your tests here!
const expect = require("chai").expect
const {polybius} = require("../src/polybius") 

describe("polybius", () => {
    it ("should translate 'i' and 'j' to 42", () => {
        const input = "jiggle"
        const actual = polybius(input)
        const expected = "424222221351"

        expect(actual).to.equal(expected)
    }); 
    it ("should translate 42 to 'i' or 'j'", () => {
        const input = "424222221351"
        const actual = polybius(input, false) 

        expect(actual).to.include('i')
        expect(actual).to.include('j')
    }); 
    it ("should ignore capital letters", () => {
        const input = "A Message" 
        const actual = polybius(input) 
        const expected = "11 23513434112251" 

        expect(actual).to.equal(expected)
    }); 
    it ("should maintain spaces in message before and after encoding or decoding", () => {
        const input = "my message" 
        const actual = polybius(input) 
        const expected = "2345 23513434112251" 

        expect(actual).to.equal(expected)
    });
})