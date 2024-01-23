/* https://www.codewars.com/kata/56a25ba95df27b7743000016

Given a number...
Write a function validateCode that uses regex to check if the number begins with 1, 2, or 3.
Return true if so, otherwise false.

Example:
validateCode(123), true
validateCode(8), false
validateCode(9453), false
validateCode(321), true

*/

function validateCode(n) {
    return /^[1-3]/.test(n.toString())
}

function validateCode(n) {
    const x = [...n.toString()][0]
    return x === '1' || x === '2' || x === '3'
}