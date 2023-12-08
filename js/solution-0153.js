/* https://www.codewars.com/kata/563b74ddd19a3ad462000054

Given a positive integer...

Return a string of 1 and 0 upto the interger.

Example:
6 should return :'101010'

Pseudocode:
Write a function stringy with one parameter (size).
Define an empty string.
Loop from 1 to size, if count is odd push 1 else push 0.
Return str.

*/

function stringy(size) {
    let str = ''
    for(let i = 1; i <= size; i++) {
        if (i%2) str +=1
        else str +=0
    }
    return str
}

function stringy(size) {
    let str = ''
    for(let i = 1; i <= size; i++) {
        str += i%2
    }
    return str
}