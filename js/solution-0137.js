/* https://www.codewars.com/kata/576b93db1129fcf2200001e6

Given an array of integers...

Return the sum of all the numbers of a given array, except the highest and the lowest element (by value, not by index!).

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

Examples:
sumArray(null), 0
sumArray([ ]), 0
sumArray([ 3 ]), 0
sumArray([ 3, 5 ]), 0
sumArray([ 6, 2, 1, 8, 10 ]), 16
sumArray([ -6, -20, -1, -10, -12 ]), -28
sumArray([ -6, 20, -1, 10, -12 ]), 3

Pseudocode:
Write a function sumArray that takes a single parameter (array).
Check for invalid inputs and return 0,
else sort the array in ascending order,
slice off the first and last elements,
reduce to the sum of the remaining elements.

*/

function sumArray(array) {
    if(!array || array.length < 3) return 0
    else return array
    .sort((a,b) => a-b)
    .slice(1, -1)
    .reduce((a,c) => a+c, 0)
}

const sumArray = array => !array || array.length < 3 ? 0 : array.sort((a,b) => a-b).slice(1, -1).reduce((a,c) => a+c, 0)

sumArray = a => a ? a.sort((a,b) => a-b).slice(1, -1).reduce((a,c) => a+c, 0) : 0