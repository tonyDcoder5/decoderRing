// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybiusTests", () => {
  describe("encoding messages", () => {
    it("should encode a message by translating each letter to number pair on square", () => {
      const input = "message";
      const actual = polybius(input);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' & 'j' to 42", () => {
      const input = "jiggle";
      const actual = polybius(input);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });
    it("spaces are left as is", () => {
      const input = "my message";
      const actual = polybius(input);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode message input by translating each pair of numbers into a letter", () => {
      const input = "23513434112251";
      const actual = polybius(input, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i/j'", () => {
      let input = "424222221351";
      const actual = polybius(input, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const input = "2345 23513434112251";
      const actual = polybius(input, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const input = "2345 235134341122514";
      const actual = polybius(input, false);

      expect(actual).to.be.false;
    });
  });
});
