/* https://www.codewars.com/kata/57ab3c09bb994429df000a4a

Given an array of numbers...
Return the two distict highest numbers.
If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

Pseudocode:
Sort the array from highest to lowest.
Create a Set to remove any duplicates.
Convert Set to Array and slice it to return the two highest values.

*/
function twoHighest(arr) {
	arr.sort((a, b) => a - b)
	const uniqueSet = new Set(arr)
	const result = Array.from(uniqueSet).slice(0, 2)
	return result
}

// concise syntax
function twoHighest(arr) {
	return Array.from(new Set(arr.sort((a, b) => b - a))).slice(0, 2)
}

// written as a one-liner
const twoHighest = arr =>
	Array.from(new Set(arr.sort((a, b) => b - a))).slice(0, 2)

// using the spread operator
function twoHighest(arr) {
	return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

// using the filter method instead of Set
const twoHighest = arr =>
	arr
		.filer((e, i) => i === arr.lastIndexOf(e))
		.sort((a, b) => b - a)
		.slice(0, 2)
