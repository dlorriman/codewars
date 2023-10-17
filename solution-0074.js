/* https://www.codewars.com/kata/580a4734d6df748060000045

Given an array of integers...

Write a function, isSortedAndHow, that return a string of one of the following,

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

Examples:
isSortedAndHow([1, 2]), 'yes, ascending'
isSortedAndHow([15, 7, 3, -8]), 'yes, descending'
isSortedAndHow([4, 2, 30]), 'no'

Pseudocode:
Check the array to see how it's sorted
Use a conditional to return the correct string
*/

function isSortedAndHow(arr) {
    if (arr.every((e, i, a) => i === 0 || e >= arr[i - 1])) {
        return 'yes, ascending'
    } else if (arr.every((e, i, a) => i === 0 || e <= arr[i - 1])) {
        return 'yes, descending'
    } else {
        return 'no'
    }
}