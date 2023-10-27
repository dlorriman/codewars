/* https://www.codewars.com/kata/57f780909f7e8e3183000078

Given a non-empty array of integers...

Write a function grow, that returns the result of multiplying the values together in order.

Examples:
grow([1, 2, 3]), 6);
grow([4, 1, 1, 1, 4]), 16); 
grow([2, 2, 2, 2, 2, 2]), 64);

Pseudocode:
Multiply the elements together and return the result
*/

function grow(arr) {
    return arr.reduce((a,b) => a*b)
}