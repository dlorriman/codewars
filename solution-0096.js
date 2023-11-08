/* https://www.codewars.com/kata/58ca658cc0d6401f2700045f

Write a function, findMultiples, that accepts two positive integer values as parameters, integer & limit,
and returns an array of numbers that are multiples of integer upto and including limit.

Given an integer and a limit...
Write a function that returns an array of numbers that are multiples of integer upto and including limit.

Examples:
findMultiples(5, 25), [5, 10, 15, 20, 25])

*/

function findMultiples(n, l) {
    let result = []
    for (let i = n; i <= l; i+=n) {
        result.push(i)
    }
    return result
}