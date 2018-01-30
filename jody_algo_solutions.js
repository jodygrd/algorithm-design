
// --- Directions
// Given a string, return a new string with the reversed
// order of characters

function reverse(str) {
  let reversed = [];
  for (i=0; i < str.length; i++) {
    reversed.unshift(str[i])
  }
  return reversed.join('');
}


// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  for (i=0; i<str.length; i++) {
    if (str[i] === str[str.length-1-i]){
      return true
    } else {
      return false
    }
  }
}



// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n)
  const array = (n*sign).toString().split('');
  let reversed = ''
  for (let char of array) {
    reversed = char + reversed
  }
  return sign*parseInt(reversed)
}

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let maxTimes = 0
  let maxChar = ''
  
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  };
  
  for (let char in chars) {
    if (chars[char] > maxTimes) {
      maxTimes = chars[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

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
function fizzBuzz(n) {
  for (i=1; i<=n; i++){
     if (i % 5 === 0 && i % 3 === 0) {
       console.log('fizzbuzz');
     } else if ( i % 3 === 0 ) {
       console.log('fizz')
     } else if (i % 5 === 0) {
       console.log('buzz')
     } else {
       console.log(i)
     }
  }
}
//


// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //make a new array
  let chunkedArray = [];
  //walk through original array
  while (array.length > 0) {
    if (array.length > size) {
      let chunk = array.splice(0,size)
      chunkedArray.push(chunk);
    } else {
      chunkedArray.push(array);
      array = [];
    }
  }
  return chunkedArray;
}

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

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  
  if (stringA.length !== stringB.length) {
    return false;
  }
  
  let charsA = {}
  let charsB = {}
  
  for (let char of stringA) {
    if (!charsA[char]){
      charsA[char] = 1
    } else {
      charsA[char] += 1
    }
  }
  
   for (let char of stringB) {
    if (!charsB[char]){
      charsB[char] = 1
    } else {
      charsB[char] += 1
    }
  }
  
  for (let char in charsA) {
    if (charsA[char] !== charsB[char]){
      return false;
    } else {
      return true;
    }
  }
}


// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
//
function capitalize(str) {
  let array = str.split(' ');
  let newArray = []
  for (let word of array) {
    newArray.push(word[0].toUpperCase() + word.slice(1));
  }
  return newArray.join(' ');
}

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



//Jody's Non-Recursive Solution. Double For loop == O(n^2) == BAD
//function steps(n) {
//
//  for (i = 0; i < n; i++) {
//    let string = ''
//    
//    for (j = 0; j < n; j++ ) {
//      if (j <= i) {
//        string += '#'
//      } else {
//        string += ' '
//      }
//    }
//    
//    console.log(string)
//  }
//  
}

//Stephen's Recursive Solution

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }
    
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return
  }
  
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' '
  }
  
  steps(n, row, stair);
}

module.exports = steps;


// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//iterative solution
function pyramid(n) {
  const width = n * 2 - 1;
  const midpoint = Math.floor(width / 2)
  
  for (let row = 0; row < n; row++){
    let level = ''
    for ( let col = 0; col < width;  col++){
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }      
    }
    
    console.log(level)
  }

}



// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

////REGEXP SOLUTION - O(n)
function vowels(str) {
  let noVowels = str.toLowerCase().replace(/[aeiou]/g, '');
  
  return str.length - noVowels.length;
}

// iterative solution

//function vowels(str) {
//  const vowelArray = ['a','e','i','o','u'];
//  let total = 0
//  for (let char of str.toLowerCase()) {
//    if (vowelArray.includes(char)){
//      total++
//    }
//  }
//  return total;
//}
//


// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([])
  }
  
  let counter = 1;

  
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  
  while (startCol <= endCol && startRow <= endRow) {
    //top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //last row
    for (i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;
    //bottom row
    for (i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    //first col 
    for (i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++
    }
    startCol++
  }
  
  return results;
}


// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution - constant runtime - O(n)
//
//function fib(n) {
//  let previous = 0
//  let next = 1
//
//  for (let i = 1; i < n ; i++ ) {
//    next = previous + next
//    previous = next - previous
//  }
//  
//  return next
//}

//another iterative solution - constant runtime - O(n)
//function fib(n) {
//  let array = [0, 1]
//  for (let i = 2; i <= n; i++) {
//    array[i] = array[i-1] + array[i-2]  
//  }
//  return array[array.length-1]
// 
//}
//
//

//Recursive, memoized solution - including generic memoize function

//bullshit fucking recursive sol'n
function memoize(fn){
  const cache = {};
  
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    
    const result = fn.apply(this, args);
    cache[args] = result;
    
    return result;
  }
  
}


function fib(n) {
  
  if (n < 2) {
    return n;
  }
  
  return fib(n-1) + fib(n-2);
  
}

fib = memoize(fib);


// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  
  constructor(){
    this.events = {}
  }
  
  
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
    
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    
    if (this.events[eventName]) {
      for (let callback of this.events[eventName] ){
        callback();
      }
      
    }
  
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}
