/* https://www.codewars.com/kata/56dec885c54a926dcd001095

Given an number. 
Can be an integer or a floating point number.
Will always be of the type number.
Will never be an invalid input.
Don't need to account for unexpected edge cases.

Return its opposite.
Return a number type.

Examples:
1: -1
14: -14
-34: 34

Pseudocode:
Write a function that takes in a number.
Return its opposite number.
*/

function opposite(num) {
    return -num // or num * -1
}

const opposite = num => -num