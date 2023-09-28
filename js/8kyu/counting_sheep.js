/* https://www.codewars.com/kata/54edbc7200b811e956000556

Given an array of booleans...

Will it always be a boolean? No

Do I need to account for invalid input or unexpected edge cases? Yes

Return a count of all the true boolean

Example:
[] -> 0
[undefined] -> 0
[null] -> 0
[false] -> 0
[true] -> 1
[undefined,null,false,true] -> 1
[undefined,null,false,true,true,false,null,undefined] -> 2
[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true] -> 17

Psedocode:
Write a function that takes in an array.
Loop through the array checking for true
Every time you find a true add 1 to the count
*/

// for loop
function countSheeps(sheep) {
    let count = 0
    for(let i = 0; i < sheep.length; i++) {
        if(sheep[i] === true) count++
    }
    return count
}

// filter plus Boolean
function countSheeps(sheep) {
    return sheep.filter(Boolean).length
}

const countSheeps = s => s.filter(Boolean).length