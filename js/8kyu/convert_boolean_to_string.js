/* https://www.codewars.com/kata/551b4501ac0447318f0009cd

Input
A boolean value, true or false

Output: 
A string representation, 'true' or 'false'

Notes:
Input will always be a valid boolean
Output should always be a string

Example:
true -> 'true'
false -> 'false'

Pseudocode:
Write a function that takes in a boolean and returns a string 'true' or 'false'
*/

function booleanToString(b) {
    if (b) return 'true' 
    else return 'false'
}

const booleanToString = b => b ? 'true' : 'false'

const booleanToString = b => b.toString()

const booleanToString = b => String(b)

const booleanToString = b => `${b}`

const booleanToString = b => b+''

const booleanToString = String

