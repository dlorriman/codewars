/* https://www.codewars.com/kata/525f50e3b73515a6db000b83/

Input: Given an array of 10 integers 0-9
Output: Return a string in the correct format

Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

Pseudocode:
Write a function createPhoneNumber that takes in an array of numbers.
Parse the array into the correct phone number format returned as a string
*/

function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}