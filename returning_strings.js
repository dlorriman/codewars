/* https://www.codewars.com/kata/55a70521798b14d4750000a4

Input: A string <name>
Output: A string that uses the input
Example:
'Ryan' -> 'Hello, Ryan how are you today?'
'Shingles' -> 'Hello, Shingles how are you today?'
Pseudocode:
Write a function greet that takes in a string name
Return the string name as part of a string statement
*/

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

const greet = name => `Hello, ${name} how are you doing today?`

console.log(greet('Ryan'))
console.log(greet('Shingles'))