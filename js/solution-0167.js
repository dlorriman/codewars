/* https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

Given a postive integer n...

Write a function nearestSq, that returns the nearest square number.

Example:
nearestSq(111), 121
nearestSq(9999), 10000
nearestSq(144), 144

Pseudocode:
Calculate the square root of n
Round to the nearest integer
Return the result squared

*/

function nearestSq(n) {
    return Math.round(Math.sqrt(n)) **2
}