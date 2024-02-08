/* https://www.codewars.com/kata/572b77262bedd351e9000076

Given an array and a number, (arr, n)...

Write a function 'first', that returns the first n elements of the array.
default == 1.
If n === 0, return an empty array.

Example:
let arr = ['a', 'b', 'c', 'd', 'e']
first(arr) //=> ['a']
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c']
first(arr, 0) //=> []

*/

function first(arr, n = 1) {
	return arr.slice(0, n)
}
