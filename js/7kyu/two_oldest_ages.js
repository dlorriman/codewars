/* https://www.codewars.com/kata/511f11d355fe575d2c000001

P = Given an array of numbers.
- Will they always be of the type number or do I need to account for any other type of data?
- Will it only be a 1d array or do I need to account for nested arrays?
- Will there ever be an invalid input? Like an empty array?
- Do I need to account for any unexpected edge cases?

R = Return an array of the two highest numbers in the format [second oldest age,  oldest age].

Examples:
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

P = 

Sort the array from lowest to highest
Return a slice of the array containing only the last two values

*/

function twoOldestAges(ages){
    return ages.sort((a,b) => a-b).slice(-2)
}

const twoOldestAges = ages => ages.sort((a,b) => a-b).slice(-2)

function twoOldestAges(ages){
    ages.sort((a,b) => b-a)
    return [ages[1],ages[0]]
}