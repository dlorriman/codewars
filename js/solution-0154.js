/* https://www.codewars.com/kata/56b29582461215098d00000f

Given an array of intergers sorted in ascending order...

Return a new array of number from the first number to the last.

Examples:
pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]
pipeFix([-1,4]),[-1,0,1,2,3,4]
pipeFix([6,9]),[6,7,8,9]

Pseudocode:
Write a function pipeFix that takes an array as an argument (n)...
Return a new array of number from the first number to the last.

*/

function pipeFix(arr) {
    let newArray = []
    for(let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        newArray.push(i)
    }
    return newArray
}