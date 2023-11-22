/* https://www.codewars.com/kata/55d277882e139d0b6000005d

Input = array of numbers
Output = the average of the numbers in the array

Examples:
[1,2,3,4,5] => 3 // 15 / 5 = 3

Pseudocode:
Sum the numbers in the array and divide by the length of the array

*/

function findAverage(arr) {
    return arr.reduce((acc, c) => acc + c, 0) / arr.length
}