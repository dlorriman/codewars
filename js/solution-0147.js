/* https://www.codewars.com/kata/58cb43f4256836ed95000f97

Given 2 arrays of 3 positive integers > 0, a & b.

Return the difference of the arrays reduced [x * x * x], the volume, regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Pseudocode:
Write a function findDifference that takes 2 parameters (a, b).
Reduce a & b down to their volumes.
Subtract the lowest from the highest.
Return
*/

function findDifference(a, b) {
    return Math.abs(a.reduce((a, c) => a * c) - b.reduce((a, c) => a * c))
}

findDifference = (a, b) => Math.abs(a.reduce((a, c) => a * c) - b.reduce((a, c) => a * c))

findDifference = (a, b) => Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])