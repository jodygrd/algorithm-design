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

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
//
//function fizzBuzz(n) {
//  for (i=1; i<=n; i++){
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log('fizzbuzz');
//     } else if ( i % 3 === 0 ) {
//       console.log('fizz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else {
//       console.log(i)
//     }
//  }
//}
//
//module.exports = fizzBuzz;


// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//function chunk(array, size) {
//  //make a new array
//  let chunkedArray = [];
//  //walk through original array
//  while (array.length > 0) {
//    if (array.length > size) {
//      let chunk = array.splice(0,size)
//      chunkedArray.push(chunk);
//    } else {
//      chunkedArray.push(array);
//      array = [];
//    }
//  }
//  return chunkedArray;
//}

//Complexity O(n) - Danger of Infinite Loop

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//function anagrams(stringA, stringB) {
//  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//  
//  if (stringA.length !== stringB.length) {
//    return false;
//  }
//  
//  let charsA = {}
//  let charsB = {}
//  
//  for (let char of stringA) {
//    if (!charsA[char]){
//      charsA[char] = 1
//    } else {
//      charsA[char] += 1
//    }
//  }
//  
//   for (let char of stringB) {
//    if (!charsB[char]){
//      charsB[char] = 1
//    } else {
//      charsB[char] += 1
//    }
//  }
//  
//  for (let char in charsA) {
//    if (charsA[char] !== charsB[char]){
//      return false;
//    } else {
//      return true;
//    }
//  }
//  
//  
//}
//
//module.exports = anagrams;







