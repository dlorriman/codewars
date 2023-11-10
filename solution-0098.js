/* https://www.codewars.com/kata/55edaba99da3a9c84000003b

Given an array of numbers and a divisor...

Return an array consisting of all numbers which are divisible by the given divisor.

Examples:
divisibleBy([1,2,3,4,5,6], 2) --> [2,4,6]
divisibleBy([1,2,3,4,5,6], 3) --> [3,6]
divisibleBy([0,1,2,3,4,5,6], 4) --> [0,4]
divisibleBy([0], 4) --> [0]
divisibleBy([1,3,5], 2) --> []

Pseudocode:
Filter the array by numbers that modulo zero

*/

function divisibleBy(arr, d) {
    return arr.filter(e => e%d===0)
}