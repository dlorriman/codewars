/* https://www.codewars.com/kata/57eaec5608fed543d6000021

Given an array of integers and strings...

Write a function divCon, that takes in an array of integers and strings.
Return the sum of the integers minus the sum of the string integers.

Examples:
divCon([9, 3, '7', '3']), 2);
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
*/

function divCon(arr) {
    let intSum = 0
    let strSum = 0

    for (let item of arr) {
        if (typeof item === 'number') {
            intSum += item
        } else if (!isNaN(item)) {
            strSum += Number(item)
        }
    }
    return intSum - strSum
}

function divCon(arr) {
    return arr.reduce((acc, c) => typeof c === 'number' ? acc + c : acc - +c, 0)
}

const divCon = arr => arr.reduce((acc, c) => typeof c === 'number' ? acc + c : acc - +c, 0)