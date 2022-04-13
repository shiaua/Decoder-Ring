// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
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

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    if (encode === false)  {
      shift = (shift*-1)
    }


    let word = input.toLowerCase().split("");
    let message = [];

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!alphabet.includes(letter)) {
        message.push(letter);
      }
      for (let j = 0; j < alphabet.length; j++) {
        let newIndex = parseInt(j); //reading j as a number when adding parseInt
        if (letter === alphabet[newIndex]) {
          if ((newIndex + shift) >= alphabet.length) {
            message.push(alphabet[(newIndex + shift) - alphabet.length]);
          } else if ((newIndex + shift) < 0) {
            message.push(alphabet[alphabet.length + (newIndex + shift)]);
          } else {
            message.push(alphabet[newIndex + shift]);
          }
        }
      }
    }
    return message.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
