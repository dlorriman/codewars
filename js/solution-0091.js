/* https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

Given an array...
Write a function that returns an array with every second element removed

Examples:
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]
removeEveryOther([[1, 2]]), [[1, 2]]
removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]

Pseudocode:
Filter the array by all indexes where modulus 2 = 0

*/

function removeEveryOther(arr) {
    return arr.filter((e, i) => i%2 === 0)
}

const removeEveryOther = arr => arr.filter((e, i) => !(i%2))