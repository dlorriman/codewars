/* https://www.codewars.com/kata/563cf89eb4747c5fb100001b

Input: Given an array of integers...
Will it always be an array that's passed in? Yes
Will it always contain only integers? Could be empty
Could it contain invalid data?
Do I need to account for unexpected edge cases?

Output: 
Return a new array with the lowest value element removed.
Do not mutate the original array!
If there are multiple elements with the same value remove the one with the lowest index.
Empty array, return empty array.
Do not change the order of the elements.

Examples:
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

Pseudocode:
Write a function that takes in an array of integers.
Return a new array with the lowest value element removed.
Do not mutate the original array!
If there are multiple elements with the same value remove the one with the lowest index.
Empty array, return empty array.
Do not change the order of the elements.

Examples:
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(arr) {
    // check if array is empty and return an empty array
    if (arr.length === 0) return []
    // find the minimum value in the array
    const minValue = Math.min(...arr)
    // find the index of the first occurence of the minimum value
    const minIndex = arr.indexOf(minValue)
    // create a new array without the element at the found index
    return [...arr.slice(0, minIndex), ...arr.slice(minIndex +1)]
}

function removeSmallest(num) {
    const minIndex = num.indexOf(Math.min(...num))
    return [...num.slice(0, minIndex), ...num.slice(minIndex + 1)]
}

const removeSmallest = num => num.filter((e, i) => i !== num.indexOf(Math.min(...num)))

