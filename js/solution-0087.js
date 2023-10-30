/* https://www.codewars.com/kata/5513795bd3fafb56c200049e

Given 2 positive numbers, n and x
Write a function that returns an array of numbers representing the n multiples of x

Examples:
countBy(1,10), [1,2,3,4,5,6,7,8,9,10]
countBy(2,5), [2,4,6,8,10]

Pseudocode:
Write a function countBy with parameters x, n
Create an empty array
Loop n times, each time multiplying i by x
Return the array

*/

function countBy(x, n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i * x)
    }
    return arr
}