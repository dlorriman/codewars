/* https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

Given a positive integer, n...
Return a string counting up to n in the format provided.

Examples:
countSheep(0), ""
countSheep(1), "1 sheep...")
countSheep(2), "1 sheep...2 sheep..."
countSheep(3), "1 sheep...2 sheep...3 sheep..."

Pseudocode:
Write a function countSheep with parameter (n).
Declare a var = empty string
Create a loop that counts from 1 to n
Concat the string with n + " sheep..." on each iteration
Return string

*/

function countSheep(n) {
    let sheep = ''
    for(let i = 1; i <= n; i++) {
        sheep = sheep.concat(i + ' sheep...')
    }
    return sheep
}

function countSheep(n) {
    let sheep = ''
    for(let i = 1; i <= n; i++) {
        sheep += i + ' sheep...'
    }
    return sheep
}

function countSheep(n) {
    let sheep = ''
    for(let i = 1; i <= n; i++) {
        sheep += `${i} sheep...`
    }
    return sheep
}