/* https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

Given an array of positive integers...

Write a function called minSum, that returns the minimum sum from summing each two integers product.
Array/list will always be of even length.

Examples:
minSum([5,4,2,3]), 22 // 5*2 + 3*4 = 22
minSum([12,6,10,26,3,24]), 342 // 26*3 + 24*6 + 12*10 = 342
minSum([9,2,8,7,5,4,0,6]), 74 //  9*0 + 8*2 +7*4 +6*5 = 74

Pseudocode:
Sort the array in ascending order
Inititalize a variable 'sum' to keep a tally
Iterate over the first half of the array 
In each iteration, multiply the element with it's pair working backwards from the end
Return 'sum'
*/

function minSum(arr) {
    arr.sort((a,b) => a-b)
    let sum = 0
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - 1 - i]
    }
    return sum
}

const minSum = arr => arr.sort((a,b) => a-b).reduce((acc, c) => acc + c * arr.pop(), 0)