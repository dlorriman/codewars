/* https://www.codewars.com/kata/no-loops-1-small-enough

Input: an array of numbers and a value
Output: true if all values in the array are below or equal to the input value, else false

Examples:
smallEnough([66, 101], 200), true
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false
smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true

Pseudocode:
Write a function smallEnough, that has 2 parameters, a and limit
Check every elememt in the array to see if it is <= limit

*/

function smallEnough(a, limit) {
    return a.every(e => e <= limit)
}

smallEnough = (a, l) => a.every(e => e <= l)