/* https://www.codewars.com/kata/515e271a311df0350d00000f

Given an array of numbers,
Square each number and return the sum

P - 
Will it always be an array of numbers? Yes
Will the array ever be empty? Yes
Will there ever be an invalid input? No
Do I need to account for unexpected edge cases? No

R -
Do you want me to return a number? Yes

Examples:
[1,2] -> 5
[0, 3, 4, 5] -> 50
[] -> 0

Pseudocode:
Write a function that takes in an array of numbers
Square each number and add the sum of the squares together.
Return the sum as a number
*/

// using the reduce method
function squareSum(num) {
    return num.reduce((acc, c) => acc + c**2, 0)
}

// reduce method in an arrow function
const squareSum = num => num.reduce((acc, c) => acc + c**2, 0)

// using a for loop
function squareSum(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]*num[i]
    }
    return sum
}

// using a forEach loop
function squareSum(num) {
    let sum = 0
    num.forEach(n => sum += n*n)
    return sum
}