/* https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

Given an array of numbers...
- Will the array only ever contain numbers or do I need to account for any other data types?
- Could there be an invalid input?
- Do I need to account for unexpected edge cases? Empty array = 0

Return the average of the numbers in the array.
As a number? Yes

Examples:
([1,1,1]), 1
([1,2,3]), 2
([1,2,3,4]), 2.5

Pseudocode:
Write a function called findAverage that takes in an array of numbers.
Return the average of all the numbers in the array.
Note: Empty arrays should return 0.
-Add all the numbers together and divide by the number of elements in the array.
*/

function findAverage(arr) {
    return arr.length === 0 ? 0 : arr.reduce((acc, c) => acc + c, 0) / arr.length
}

const findAverage = a => a.length === 0 ? 0 : a.reduce((acc, c) => acc + c, 0) / arr.length