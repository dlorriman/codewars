/* https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

Given a string...
Will the input always be of the type string? or should I account for other types of data?
Will there ever be an invalid input?
Do I need to account for unexpected edge cases?

Return the reverse of the input as a string.

Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'

Pseudocode:
Write a function that takes in a string and returns the string in reverse order.
*/

function solution(str){
    return str.split('').reverse().join('')
}

const solution = str => str.split('').reverse().join('')