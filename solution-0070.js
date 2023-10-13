/* https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

Given a two-dimensional array of integers... 
Write a function flattenAndSort, that returns a flattened version of the array with all the integers sorted in ascending order.

Example:
[] -> []
[[], []] -> []
[[], [1]] -> [1]
[[3, 2, 1], [7, 9, 8], [6, 4, 5]] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
[[1, 3, 5], [100], [2, 4, 6]] -> [1, 2, 3, 4, 5, 6, 100]
*/

function flattenAndSort(arr) {
    return arr.flat().sort((a,b) => a-b)
}

const flattenAndSort = arr => arr.flat().sort((a,b) => a-b)