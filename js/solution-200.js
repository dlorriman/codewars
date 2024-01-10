/* https://www.codewars.com/kata/57126304cdbf63c6770012bd

Given a string...
Check if the string contains a valid single integer or floating number or false if its not

Examples:

should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/

function isDigit(s) {
    s = s.trim()
    if (s === "") return false
    let n = Number(s)
    return !isNaN(n)
}

function isDigit(s) {
    return s == parseFloat(s)
}