// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  let stdalph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // check if inputed alphabet equals 26 otherwise return false
    if (!alphabet || alphabet.length != stdalph.length) {
      return false;
    }

    // check if inputed alpha contains unique chars
    // split alphabet into arr of chars
    alphabet = alphabet.split("");

    for(let i in alphabet)
    {
      for(let j in alphabet)
      {
        if(i !== j && alphabet[i] == alphabet[j])
        { return false }
      }    
    }
    

    // split input message into arr of chars
    input = input.split("");

    if (encode === false) {
      // decode here
      return input.map((char) => {
        if (char != " ") {
          let charIndex = alphabet.indexOf(char);

          return stdalph[charIndex];
        }
        return char;
      }).join('');

    } else {
      // encode here
      return input.map((char) => {
        if (char != " ") {
          let charIndex = stdalph.indexOf(char);

          return alphabet[charIndex];
        }

        return char;
      }).join('');
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
