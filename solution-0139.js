/* https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

Given a string where the first character is always a number 0 through 9...

Return that char as an integer of the type number.

Examples:
getAge("4 years old"), 4
getAge("9 years old"), 9

Pseudocode:
Write a function getAge, that takes in a str.
Return the first char of the string converted to a number.

*/

function getAge(str) {
    return +str[0]
}

function getAge(str) {
    return Number(str[0])
}

function getAge(str) {
    return parseInt(str)
}

const getAge = parseInt