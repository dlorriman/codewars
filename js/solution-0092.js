/* https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

Given a number (n), write a function monkeyCount, that returns an array of numbers from 1 to n.
*/

function monkeyCount(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}