/* https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

Given an array of 3 strings

Return the array with the order reversed.

Examples:
fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]

*/

function fixTheMeerkat(arr) {
    return arr.reverse()
}

const fixTheMeerkat = a => a.reverse()

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

const fixTheMeerkat = arr => [arr[2], arr[1], arr[0]]