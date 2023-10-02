/* https://www.codewars.com/kata/57f781872e3d8ca2a000007e

Input: An array of integers.
Will the integer always be of the type number?
Do I need to account for other data types?
Will there ever be an invalid input?
Do I need to account for unexpected edge cases?

Output: Return a new array with each value doubled.

Examples:
[1, 2, 3] --> [2, 4, 6]
[4, 1, 1, 1, 4]) --> [8, 2, 2, 2, 8]
[2, 2, 2, 2, 2, 2]) --> [4, 4, 4, 4, 4, 4]

Pseudocode:
Write a function that takes in an array.
Return a new array with each element doubled.
*/

function maps(x) {
    return x.map(n => n*2)
}

const maps = x => x.map(x => x*2)