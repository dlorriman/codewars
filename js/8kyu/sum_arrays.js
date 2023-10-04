/* 

Given an array of numbers.
Both integer and floating point values? Y
Do I need to account for any other data types? No
Will there be an invalid input? [] = 0
Do I need to account for unexpected edge cases?

Return the sum of the array.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
*/

function sum(num) {
    return num.reduce((a,c) => a+c, 0)
}

const sum = num => num.reduce((a,c) => a+c, 0)

function sum(num) {
    let count = 0
    for(let i = 0; i < num.length; i++) {
        count += num[i]
    }
    return count
}

function sum(num) {
    let count = 0
    num.forEach(e => {
        count += e
    })
    return count
}

function sum(num) {
    let count = 0
    for (e of num) {
        count += e
    }
    return count
}

const sum = num => {
    let count = 0
    for (e of num) {
        count += e
    }
    return count
}
