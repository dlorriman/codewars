/* https://www.codewars.com/kata/55ccdf1512938ce3ac000056

Given a string...
Write a function isLockNessMonster, that checks the string and...
Returns true if it contains the substring "tree fiddy" or "3.50" or "three fifty", else false.

*/

function isLockNessMonster(s) {
    return s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")
}

function isLockNessMonster(s) {
    const substrings = ["tree fiddy", "3.50", "three fifty"]
    return substrings.some(substring => s.includes(substring))
}