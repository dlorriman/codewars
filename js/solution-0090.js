/* https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

Given 2 arrays of integers.
Return the sum of the elements in both arrays

Examples:
arrayPlusArray([1, 2, 3], [4, 5, 6]), 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21
arrayPlusArray([0, 0, 0], [4, 5, 6]), 15
arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100

Pseudocode:
Reduce each array to a single value
Return arr1 + arr2
*/

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, c)=> a + c) + arr2.reduce((a, c)=> a + c)
}

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, c) => a + c)
}

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a, c) => a + c)
}