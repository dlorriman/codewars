/* https://www.codewars.com/kata/57f6ad55cca6e045d2000627

Given an array of positive integers...

Iterate over the array and return a new array based on these conditions:

If i has an integer square root, return it, else return i squared.

Example:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

*/

function squareOrSquareRoot(arr) {
    return arr.map(e => {
        const sqrt = Math.sqrt(e)
        return sqrt % 1 === 0 ? sqrt : e*e
    })
}