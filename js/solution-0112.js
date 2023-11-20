/* https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

Given an array of integers...

Write a function sumOfDifferences, that sums the differences between consecutive pairs in decending order.

Examples:
sumOfDifferences([1, 2, 10]) --> 9
sumOfDifferences([-3, -2, -1]) --> 2

Pseudocode:
Sort the array in decending order
Loop over the array and reduce it down to a single number representing the sum of the differences between consecutive pairs

*/

function sumOfDifferences(arr) {
    return arr.sort((a,b) => b-a).reduce((acc, c, i, arr) => i < arr.length -1 ? acc + (c - arr[i + 1]) : acc, 0)
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}