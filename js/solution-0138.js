/* https://www.codewars.com/kata/56b1f01c247c01db92000076

Given a string as input...

Write a function doubleChar(str)

Return a string with each character repeated.

Examples:
"String" -> "SSttrriinngg"
"Hello World" -> "HHeelllloo  WWoorrlldd"
"1234!_ " -> "11223344!!__  "

Pseudocode:
Convert the string to an array,
map the array so that each element is repeated,
join the array back into a string

*/

function doubleChar(str) {
    return str.split('').map(e => e+e).join('')
}

doubleChar = str => str.split('').map(e => e+e).join('')