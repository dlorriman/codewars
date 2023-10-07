/* https://www.codewars.com/kata/559590633066759614000063

Input: Given an array of numbers...
Will it always be an array that's passed in? 1d array? Yes
Will the array only contain numbers or could it contain other types of data? Only numbers!
Could there be invalid data? No
Do I need to acccount for unexpected edge cases? No

Output: Return the highest and lowest numbers in the array.
As an array? Yes

Examples:
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Pseudocode:
Write a function minMax that takes in an array of numbers.
Sort the array highest to lowest.
Return an array containing only the lowest and highest numbers.
*/

// using the sort method
function minMax(arr) {
    arr.sort((a,b) => a-b)
    return [arr[0], arr[arr.length-1]]
}

// using the Math object and min / max methods
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([4, 3, 2, 5, 1])) // [1, 5]