/* https://www.codewars.com/kata/539ee3b6757843632d00026b

Write a function called capitals that takes in a string, word.
Return an array of the indexes of the capital letters in the string.

Example: "CodEWaRs" --> [0,3,4,6]

*/

function capitals(word) {
    let arr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arr.push(i)
        }
    }
    return arr
}

const capitals = word => word
    .split('')
    .map((e, i) => e.toUpperCase() === e ? i : -1)
    .filter(i => i !== -1)