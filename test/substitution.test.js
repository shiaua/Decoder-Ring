// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("should return false if alphabet is not 26 characters long", () => {
        const input = "message"
        const alphabet = "short" 
        const actual = substitution(input, alphabet) 

        expect(actual).to.be.false
    }); 
    it ("should translate correctly based on alphabet given", () => {   
        const input = "message" 
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input, alphabet)
        const expected = "ykrrpik"


      expect(actual).to.equal(expected);
    }); 
    it ("should return false if there are duplicate characters", () => {
        const alphabet = "plmokanijbuhvygctfxrdzeswaq"
        const actual = substitution(alphabet) 

        expect(actual).to.be.false

    }); 
    it ("should maintain spaces", () => {
        const input = "the message" 
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input, alphabet) 
        const expected = "djk ykrrpik"

        expect(actual).to.equal(expected)
    }); 
    it ("should ignore capital letters", () => {
        const input = "A message" 
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input, alphabet) 
        const expected = "p ykrrpik"

        expect(actual).to.equal(expected)
    });
})