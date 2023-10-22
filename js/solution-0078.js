/* https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

Given an array of integers and a number...
Write a function evenNumbers, that returns a new array consisting of the last even elements in the array of the length number.
Do not change the order.
Input array will never be empty and will contain atleast number even elements.

Examples:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

Pseudocode:
filter the array by even numbers
slice off n from the end

*/

function evenNumbers(arr, n) {
    return arr.filter(e => e%2 === 0).slice(-n)
}