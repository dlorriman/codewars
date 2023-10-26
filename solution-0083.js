/* https://www.codewars.com/kata/57eae65a4321032ce000002d

Given a non-empty string of digits...

Write a function fakeBin, that returns a string replacing the digits below 5 with 0, and 5 or above with 1.

Examples:
fakeBin('45385593107843568'), '01011110001100111'
fakeBin('509321967506747'), '101000111101101'
fakeBin('366058562030849490134388085'), '011011110000101010000011011'

Pseudocode:
Split the string into an array of numbers
Iterate over the array checking each elements value
Replace the value with 0 or 1 depending on the condition
Return the array modified array as a string
*/

// function declaration using methods
function fakeBin(str) {
    return str
    .split('')
    .map(e => e < 5 ? 0 : 1)
    .join('')
}

// arrow function using methods
const fakeBin = str => str.split('').map(e => e < 5 ? 0 : 1).join('')

// using a for loop
function fakeBin(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 5) {
            result += '0'
        } else {
            result += '1'
        }
    }
    return result
}

// using a for of loop
function fakeBin(str) {
    let result = ''
    for (num of str) {
        if (num < 5) {
            result += '0'
        } else {
            result += '1'
        }
    }
    return result
}

// using the spread operator and a forEach loop
function fakeBin(str) {
    let result = '';
    [...str].forEach(char => {
        result += parseInt(char) < 5 ? '0' : '1'
    })
    return result
}

