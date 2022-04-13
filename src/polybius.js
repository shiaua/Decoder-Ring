// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = { ' ': ' ', a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:13, m:23, n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55};
  const decipher = { ' ': ' ', 11:'a', 21:'b', 31:'c', 41:'d', 51:'e', 12:'f', 22:'g', 32:'h', 42:'(i/j)', 52:'k', 13:'l', 23:'m', 33:'n', 43:'o', 53:'p', 14:'q', 24:'r', 34:'s', 44:'t', 54:'u', 15:'v', 25:'w', 35:'x', 45:'y', 55:'z'};


  function encodeFunc(input) {
    let word = input.toLowerCase().split(""); 
    let output = ""; 


    for (letter of word) {
      if (letter in cipher) {
        output += cipher[letter]
      }
    }
    return output; 
  }

  function decodeFunc(input) {
   let stringToDecode = input.toString(); 
   let arrString = stringToDecode.split(""); 
   let decodedWordAsNumArr = []; 
   
  //  for (let i = 0; i <arrString.length; i = i+2) {
  //    let currentNum = arrString[i]; 
  //    let nextNum = arrString[i+1]; 
  //    if(currentNum === " ") {
  //      decodedWordAsNumArr.push(" "); 
  //      i = i-1; 
  //    } else {
  //      decodedWordAsNumArr.push(`${currentNum}${nextNum}`);
  //    }
  //  }
  //  let decodedWord = decodedWordAsNumArr.map(num => {
  //    if (num === " ") {
  //      return num; 
  //    }
  //    return decipher[num]; 
  //  })
  //  return decodedWord.join('');
  }

function decodeFunc(input) {
  let output = ''; 
  for(let i = 0; i < input.length; i +=2) {
    if (input[i] === ' ') {
      output += ' '; 
      i = i-1; 
    } else {
      current = input[i] + input[i+1]; 
      output += decipher[current]
    }
  }
  return output
}

  function polybius(input, encode = true) {
    // your solution code here
    if (encode == false) {
      if (input.split(" ").join("").length % 2 == 1) {
        return false; 
      }
      return decodeFunc(input)
    }
    return encodeFunc(input)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
