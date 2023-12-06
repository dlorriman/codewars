/* https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

Given an array of numbers...
Write function that returns the array in reverse order.

Examples:
[1, 2, 3, 4]  -> [4, 3, 2, 1]
[9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

// using the reverse method
function reverseList(arr) {
    return arr.reverse()
}

// using a for loop
function reverseList(arr) {
    let array = []
    for (let i = arr.length-1; i >= 0; i--) {
        array.push(arr[i])
    }
    return array
}