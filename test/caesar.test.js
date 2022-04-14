// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarShiftTests", () => {
    describe("error tests", () => {
      it("should return false if shift amount is 0", () => {
        const input = "zebra magazine";
        const shift = 0;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if shift amount is above 25", () => {
        const input = "zebra magazine";
        const shift = 26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if shift amount is less than -25", () => {
        const input = "zebra magazine";
        const shift = -26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
    });
  
    describe("encoding a message", () => {
      it("should encode a message with letters shifted by shift value", () => {
        const input = "message";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  
      it("leaves spaces and special chars as is", () => {
        const input = "a message.";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "d phvvdjh.";
  
        expect(actual).to.equal(expected);
      });
  
      it("ignore capital letters", () => {
        const input = "A Message";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "d phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should loop alphabet range if letter is shifted 'off' range", () => {
        const input = "zebra magazine";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "cheud pdjdclqh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const input = "zebra magazine";
        const shift = -3;
        const actual = caesar(input, shift);
        const expected = "wbyox jxdxwfkb";
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by shifting the letters in the opposite direction", () => {
        const input = "phvvdjh";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("leaves spaces and special chars as is", () => {
        const input = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "a message.";
  
        expect(actual).to.equal(expected);
      });
  
      it("should ignore capital letters", () => {
        const input = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const input = "wbyox jxdxwfkb";
        const shift = -3;
        const actual = caesar(input, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
    });
  });