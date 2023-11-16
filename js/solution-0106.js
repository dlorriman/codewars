/* https://www.codewars.com/kata/56e2f59fb2ed128081001328

Given an array of strings...

Return a string consisting of each element seperated by a comma.

Examples:
["h","o","l","a"] --> "h,o,l,a"

Pseudocode:
Write a function printArray, that converts the array elements to a string using a comma as delimiter

*/

function printArray(arr) {
    return arr.join(',')
}