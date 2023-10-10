/* https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

Inputs: Given an array of integers...
Output: Return the none odd elements in the order they are given
Examples:
noOdds( [0,1] ), [0]
noOdds( [0,1,2,3] ), [0,2]
Pseudocode:
Write a function, noOdds, that takes in an array of integers.
Filter the array and return only the none odd elements
*/

function noOdds(arr) {
    return(arr.filter(e => e%2 === 0))
}

const noOdds = arr => arr.filter(e => e%2 === 0)

function noOdds(arr) {
    let noOddsArray = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            noOddsArray.push(arr[i])
        }
    }
    return noOddsArray
}