/* https://www.codewars.com/kata/5899642f6e1b25935d000161

Given 2 arrays of integers...

Return one array sorted in asc order with any duplicates removed

Examples:
mergeArrays([1,2,3,4], [5,6,7,8]) --> [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) --> [1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) --> [1,2,3,4,5,7,9,10,11,12]

Pseudocode:
Combine the two arrays
Convert it to a set to remove duplicates
Convert back to an array
Return the merged deduplicated array
*/

function mergeArrays(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2]
    const uniqueSet = new Set(combinedArray)
    const mergedArray = [...uniqueSet].sort((a,b) => a-b)
    return mergedArray
}

function mergeArrays(arr1, arr2) {
    const mergedArray = [...new Set([...arr1, ...arr2])]
    return mergedArray.sort((a,b) => a-b)
}

