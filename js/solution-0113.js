/* https://www.codewars.com/kata/5a34b80155519e1a00000009

Given an array of integers...

Return a new array consisting of only elements that are multiples of their index.

Examples:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

Pseudocode:
Filter the array if the element % the index === 0

*/

function multipleOfIndex(array) {
    return array.filter((e, i) => e % i === 0 || e === 0)
}