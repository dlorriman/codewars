/* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

Given an array of non-negative integers...

Write a function distinct, that returns an array with any duplicate integers removed.

Example:
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

Pseudocode:
Iterate over the arr, for loop, forEach, filter map?
Check each element to see if the indexOf === lastIndexOf and include it in the array
Return the array

*/

// for loop
function distinct(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
        return newArr
    }
}

// filter method
function distinct(arr) {
    return arr.filter((e, i) => arr.indexOf(e) === i);
  }

// forEach method
function distinct(arr) {
    let newArr = []
    arr.forEach(e => !newArr.includes(e) ? newArr.push(e) : 0)
    return newArr
}