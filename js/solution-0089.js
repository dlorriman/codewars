/* https://www.codewars.com/kata/57eaeb9578748ff92a000009

Given a mixed array of integers represented as strings and numbers...

Write a function sumMix, that returns the sum of the array values if they where all numbers.

Examples:
sumMix([9, 3, '7', '3']), 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41

Pseudocode:
Convert all elements in the array to numbers
Return the sum

*/

function sumMix(arr) {
    return arr.reduce((acc, c) => acc + +c, 0)
}

const sumMix = arr => arr.reduce((acc, c) => acc + +c, 0)