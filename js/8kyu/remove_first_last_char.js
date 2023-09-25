/* https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

Given a string

Return the string with the first and last char removed

Pseudocode:
Write a function that takes in a string
Splice the string from the second char to the second last char
*/

function removeChar(str) {
    return str.slice(1, -1)
}

const removeChar = str => str.slice(1,-1)