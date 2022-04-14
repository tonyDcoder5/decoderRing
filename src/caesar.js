// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const aChCode = 97;
  const zChCode = 122;
  const alphRange = 26;

  function conversion(input) {
    let convert = input.toLowerCase().split("");
    return convert.map((index) => {
      return index.charCodeAt(index);
    });
  }

  function loopAlphaRange(index) {
    if (index < aChCode) {
      // return unicode value string, add 26 to return to bottom of range
      return String.fromCharCode((index += alphRange));
    } else if (index > zChCode) {
      // return unicode value string, minus 26 to return to top of range
      return String.fromCharCode((index -= alphRange));
    } else {
      // otherwise return unicode value as a string
      return String.fromCharCode(index);
    }
  }

  function caesar(input, shift, encode = true) {
    // your solution code here

    if (!shift || shift > 25 || shift < -25) {
      return false;
    }

    let convert = conversion(input);
    if (encode === false) {
      //decode logic here
      // pass convert arr to map method and
      convert = convert.map((index) => {
        // if charCode falls within letter range
        if (index >= aChCode && index <= zChCode) {
          // apply decode shift to charCode value
          index -= shift;
        } else {
          // otherwise return unchanged unicode value
          return String.fromCharCode(index);
        }

        // if converted unicode value falls outside letter range
        return loopAlphaRange(index);
      });
    }
    //encode logic here
    else {
      convert = convert.map((index) => {
        if (index >= aChCode && index <= zChCode) {
          index += shift;
        } else {
          return String.fromCharCode(index);
        }

        return loopAlphaRange(index);
      });
    }

    return convert.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
