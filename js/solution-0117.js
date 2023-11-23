/* https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

Input: 2 arrays of positive integers, a and b, both of length >=1 ...
Output: true if the sum of the squares in a is greater than the sum of the cubes in b.

Examples:
arrayMadness([4,5,6],[1,2,3]), true
arrayMadness([5,3,2,4,1],[15]), false
arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true

Pseudocode:
Write a function arrayMadness with 2 parameters a and b
Check to see if the sum of the squares in a is greater than the sum of the cubes in b.

*/

function arrayMadness(a, b) {
    return a.reduce((a,c) => a+c**2, 0) > b.reduce((a,c) => a+c**3, 0)
}