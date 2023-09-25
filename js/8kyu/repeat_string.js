/* https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

Given an integer n and a string s

Return a string of s n times

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Pseudocode:

Write a function that takes a number and a string.
Loop n times, each iteration concat the string.
*/

function repeatStr (n, s) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += s
    }
    return result
}

const repeatStr = (n, s) => s.repeat(n)