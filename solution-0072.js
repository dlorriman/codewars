/* https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

Given a 2 dimensional non-empty array of positive integers of the type number...

Write a function sumOfMinimums, that returns the sum of the lowest value in each array.

Example:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

sum of the minimums is 1 + 5 + 20 = 26.

Pseudocode:
Find the lowest value in each array... Math.min
Sum the lowest from each and return... reduce
*/

function sumOfMinimums(arr) {
    return arr.reduce((acc, c) => acc + Math.min(...c), 0)
}

function sumOfMinimums(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i])
    }
    return sum
}

function sumOfMinimums(arr) {
    let sum = 0
    for (let row of arr) {
        sum += Math.min(...row)
    }
    return sum
}