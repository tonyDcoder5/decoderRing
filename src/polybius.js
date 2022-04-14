// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const psquare = [
    [""],
    ["", "a", "f", "l", "q", "v"],
    ["", "b", "g", "m", "r", "w"],
    ["", "c", "h", "n", "s", "x"],
    ["", "d", "(i/j)", "o", "t", "y"],
    ["", "e", "k", "p", "u", "z"],
  ];

  // const input = "hello wjrld";
  const input = "251131343 2543241341"; // hello world
  const aChCode = 97;
  const zChCode = 122;

  function polybius(input, encode = true) {
    // your solution code here
    let result = [];

    if (encode === false) {
      //decode logic here
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      }

      let dconvert = [];

      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          dconvert.push(input.substr(i, 1));
          i--;
        }
        else
        { dconvert.push(input.substr(i, 2)); }
      }

      dconvert.forEach((index) => {
        if (index === " ") {
          result.push(index);
        } else {
          let psearch = index.split("");
          let pletter = psquare[psearch[0]][psearch[1]];

          result.push(pletter);
        }
      });
      
      return result.join("");
    } 
      // encode logic here
      let convert = input.toLowerCase().split("");

      convert.map((letter) => {
        let chCode = letter.charCodeAt(letter);
        if (chCode >= aChCode && chCode <= zChCode) {
          psquare.forEach((index) => {
            let pos = index.findIndex((char) => char.includes(letter));
            if (index[pos]) {
              result.push(`${psquare.indexOf(index)}` + `${pos}`);
            }
          });
        } else {
          result.push(letter);
        }

        return result;
      });
      return result.join("");
    
  }

  polybius(input, false);

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
