/* https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

Given an array of numbers...
Will the array contain only numbers?
Yes. You can assume that all values are integers.

Could there be an invalid input? No
Do I need to account for unexpected edge cases? Empty array

Return the additive inverse of each element as an array.
Do not mutate the input array/list.

Examples:
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

Pseudocode:
Write a function, invert, that takes in an array of integers.
Return the additive inverse of each element as an array.
Do not mutate the input array/list.

Examples:
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

function invert(arr) {
    return arr.map(e => -e)
}

const invert = arr => arr.map(e => -e)