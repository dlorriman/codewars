/* https://www.codewars.com/kata/545993ee52756d98ca0010e1

Given an array and a function as arguments.

Write a function called none, that accepts two arguments, an array and a function.
Return true if the function returns false for all of the items in the array. */

function none(arr, fun) {
	return arr.every(item => !fun(item))
}

function none(arr, fun) {
	return !arr.some(fun)
}
