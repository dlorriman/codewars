/* https://www.codewars.com/kata/5545f109004975ea66000086

Given a 3 positive integers, n, x, y.
Return true if n is divisible by x & y, else false.

Examples:
3,3,4 = false
12,3,4 = true
8,3,4 = false
48,3,4 = true

Pseudocode:
Write a function isDivisible with 3 parameters, n, x, y.
Check to see if x && y are divisable by n
Return the appropriate boolean.

*/

function isDivisible(n, x, y) {
    return n%x === 0 && n%y === 0
}

function isDivisible(n, x, y) {
    return !(n%x || n%y)
}