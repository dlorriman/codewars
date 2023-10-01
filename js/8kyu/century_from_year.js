/* https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

Input: A number, representing year
Output: A number, representing century
Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Pseudocode: 
Write a function that takes in a number (year)
Return a number representing the century it is in
*/

function century(year) {
    return Math.ceil(year / 100)
}