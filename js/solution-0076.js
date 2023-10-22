/* https://www.codewars.com/kata/5a4138acf28b82aa43000117

Given an array of integers...

Return the maximum product obtained from multiplying 2 adjacent numbers in the array.

Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes.

Task:
Write a function, adjacentElementsProduct, that takes in an array of integers. Could be a mixture of positives, negatives also zeroes. Array size is min 2. Return the maximum product obtained from multiplying 2 adjacent numbers in the array.

Examples: 
adjacentElementsProduct([1, 2, 3]); ==> return 6
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

Pseudocode:
Loop through the array keeping track of the max product as you go.

*/

function adjacentElementsProduct(arr) {
    let maxProduct = arr[0] * arr[1]
    for (let i = 1; i < arr.length-1; i++) {
        const product = arr[i] * arr[i + 1]
        if (product > maxProduct) {
            maxProduct = product
        }
    }
    return maxProduct
}