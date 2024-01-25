/* https://www.codewars.com/kata/5708f682c69b48047b000e07

Given an integer...

Return that number multiplied by 5 raised to the length of the number.

Examples:
multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹

Pseudocode:
split n into a string


*/

function multiply(n) {
    return Math.pow(5, Math.abs(n).toString().length) * n
}