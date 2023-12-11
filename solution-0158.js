/* https://www.codewars.com/kata/5808e2006b65bff35500008f

Given a letter as a string...

Write a function position, that returns the letters position in the alphabet.
Output the result as a string in the following format.

Example:
'a' -> 'Position of alphabet: 1'
'z' -> 'Position of alphabet: 26'
'e' -> 'Position of alphabet: 5'

*/

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1}`
}

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}


position = l => `Position of alphabet: ${l.charCodeAt() - 96}`