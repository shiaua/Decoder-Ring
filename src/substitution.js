// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const actualAlphabet = " abcdefghijklmnopqrstuvwxyz".split(""); 

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase(); 
    
    if (!alphabet || alphabet.length !== 26) {
      return false; 
    }
    const subAlpha = [" ", ...alphabet.split("")]; 

    for (let alpha of subAlpha) {
      let letterCounter = 0; 
      for (let alphaCheck of subAlpha) {
        if (alpha === alphaCheck) {
          letterCounter += 1; 
        }
        if (letterCounter >= 2) {
          return false;
        }
      }
    }
    let returnMessage = ""; 

    if (encode) {
      for (let char of input.split("")) {
        for (let i = 0; i < actualAlphabet.length; i++) {
          if (char === actualAlphabet[i]) {
            returnMessage += subAlpha[i];
          }
        }
      }
      return returnMessage
    }
    if (!encode) {
      for (let char of input.split("")) {
        for (let i = 0; i < subAlpha.length; i++) {
          if (char === subAlpha[i]) {
            returnMessage += actualAlphabet[i]; 
          }
        }
      }
      return returnMessage
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
