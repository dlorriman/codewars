/* https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

Given an array of integers...

Return the first element in the array that is not consecutive, else null.

Examples:
firstNonConsecutive([1,2,3,4,6,7,8]) -> 6
firstNonConsecutive([1,2,3,4]) -> null
firstNonConsecutive([-8,-6,-5,-3,-2,-1,0,1]) -> -3


Pseudocode:
Write a function firstNonConsecutive that takes in an array of numbers.
Check each element in the array to see if the next element is +1 or -1
Return the number if found else null

*/

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i]
        }
    }
    return null
}