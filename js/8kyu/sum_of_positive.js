/* https://www.codewars.com/kata/5715eaedb436cf5606000381

Given an array of numbers, return the sum of all the positive ones.

Notes: Empty array = 0

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Pseudocode:
Write a function that takes in an array of numbers.
Check to see if the elements are greater than 0
If greater than 0 sum them
If empty return 0
*/

function positiveSum(arr) {
    return arr.reduce((acc, c) => (c > 0) ? acc + c : acc, 0)
}

const positiveSum = arr => arr.reduce((acc, c) => (c > 0) ? acc + c : acc, 0)