// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// Parameters: an array of strings
// Returns: an array of strings prepended with a number, starting at 1, plus a colon and a space. Empty array should return empty array.
// Examples: 
// assert.deepEqual(number([]), [], 'Empty array should return empty array');
// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
/* Pseudocode: 
1. iterate over the array grabing the element and the index
2. construct a new string incl index plus 1 and the original string as per the example.
*/

var number=function(array){
    return array.map((e, i) => `${i+1}: ${e}`)
}

const number = array => array.map((e, i) => `${i+1}: ${e}`)