/* https://www.codewars.com/kata/563e320cee5dddcf77000158

Given an array of numbers, never empty

Number? Other types?
1d
Invalid or unexpected edge cases?

Return the average rounded down to its nearest integer.

Return a number?

Examples: 
[2,2,2,2] => 2
[1,2,3,4,5,] => 3
[1,1,1,1,1,1,1,2] => 1

Pseudocode:
Sum the values together
Divide the sum by the number of elements in the array
Round the answer to the nearest integer

*/

function getAverage(marks){
   return parseInt((marks.reduce((acc, c) => acc + c)) / marks.length)
}

const getAverage = marks => parseInt((marks.reduce((acc, c) => acc + c)) / marks.length)