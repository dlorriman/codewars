/* https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

Given an array of integers...

Return a new array consisting of the smallest, largest and the differenvce between the two in that order.

Examples:
differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]
differenceInAges([57, 99, 14, 32]), [14, 99, 85]

Pseudocode:
Write a function called difference in ages with one parameter (arr)
Return a new array, [Math.min, Math.max, Math.max - Math.min]

*/

function differenceInAges(arr) {
    return [Math.min(...arr), Math.max(...arr), Math.max(...arr) - Math.min(...arr)]
}