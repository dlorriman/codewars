/* https://www.codewars.com/kata/5265326f5fda8eb1160004c8

Given an integer, returns it as a string.

Examples:
123  --> "123"
999  --> "999"
-100 --> "-100"

Pseudocode:
Write a function that takes in a number and returns it as a string.
*/

function numberToString(num) {
    return String(num)
    // return num.toString()
}

const numberToString = num => `${num}`