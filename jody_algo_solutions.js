// --- Directions
// Given a string, return a new string with the reversed
// order of characters

//function reverse(str) {
//  let reversed = [];
//  for (i=0; i < str.length; i++) {
//    reversed.unshift(str[i])
//  }
//  return reversed.join('');
//}


// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//function palindrome(str) {
//  for (i=0; i<str.length; i++) {
//    if (str[i] === str[str.length-1-i]){
//      return true
//    } else {
//      return false
//    }
//  }
//}
//
//module.exports = palindrome;


// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//function reverseInt(n) {
//  const sign = Math.sign(n)
//  const array = (n*sign).toString().split('');
//  let reversed = ''
//  for (let char of array) {
//    reversed = char + reversed
//  }
//  return sign*parseInt(reversed)
//}

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//function maxChar(str) {
//  let chars = {}
//  let maxTimes = 0
//  let maxChar = ''
//  
//  for (let char of str) {
//    chars[char] = chars[char] + 1 || 1
//  };
//  
//  for (let char in chars) {
//    if (chars[char] > maxTimes) {
//      maxTimes = chars[char];
//      maxChar = char;
//    }
//  }
//  
//  return maxChar;
//}







