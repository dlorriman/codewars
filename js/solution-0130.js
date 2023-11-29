/* https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

Given an month as an integer from 1-12
Return a number representing which quarter of the year it belongs too.

Examples:
quarterOf(3), 1
quarterOf(8), 3
quarterOf(11), 4

Pseudocode:
Write a function quarterOf with one parameter month.
Return month divided by 3 rounded up.
*/

function quarterOf(month) {
    return Math.ceil(month / 3)
}

quarterOf = m => Math.ceil(m / 3)