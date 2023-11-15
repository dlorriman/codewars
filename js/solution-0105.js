/* https://www.codewars.com/kata/559d2284b5bb6799e9000047

Write a function addLength, that takes a String and returns an Array with the length of each word added to each element.

Examples:
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

*/

function addLength(str) {
    return str.split(' ').map(word => `${word} ${word.length}`)
}