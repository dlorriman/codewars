/* https://www.codewars.com/kata/51f41b98e8f176e70d0002a8

Given an array of words...
Write a function sortme, that returns the array in alphabetical order.

Example: sortme(['one', 'two', 'three' ]), ["one", "three", "two"])
*/

// function declaration
function sortme(arr) {
    return arr.sort()
}

// arrow function
const sortme = words => words.sort()