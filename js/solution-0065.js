/* https://www.codewars.com/kata/57cc981a58da9e302a000214

Given an array of numbers and a limit...
Write a function that takes two parameters, arr and l.
Iterate over the array and determine if ALL the elements in the array are less than or equal to the limit.
Return true if they are or false if not.
*/

const smallEnough = (arr, l) => arr.every(e => e <= l)