/* https://www.codewars.com/kata/5966e33c4e686b508700002d

Given 2 numbers as strings (a, b). 
Empty string = 0
Return a string of a + b

Examples:
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Pseudocode:
Write a function sumStr that has 2 parameters (a, b).
Convert a & b to a number and sum them.
Return sum as a string.
*/

function sumStr(a, b) {
    let sum = +a + +b
    return sum.toString()
}

function sumStr(a, b) {
    let sum = parseInt(a) + parseInt(b)
    return toString(sum)
}