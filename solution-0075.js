/* https://www.codewars.com/kata/54592a5052756d5c5d0009c3

Given an array of integers...

Write 4 seperate functions, head, tail, init, and last.

head = return the first element
tail = return a new array without the first element
init = return a new array without the last element
last = return the last element in the array

Examples:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
init([1,2,3,4,5]); => [1,2,3,4]
last([1,2,3,4,5]); => 5
*/

function head(arr) {
    return arr[0]
}

function tail(arr) {
    return arr.slice(1)
}

function init(arr) {
    return arr.slice(0, -1)
}

function last(arr) {
    return arr[arr.length-1]
}