// https://www.codewars.com/kata/5949481f86420f59480000e7

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Parameters: an array of integers or empty
// Return: a string matching "odd" or "even"
// Examples: Above
// Pseudocode:
// 1. add the elements in the array together, 
// 2. determine if the sum is odd or even, 
// 3. return either 'odd' or 'even' as a string

const oddOrEven = array => array.reduce((a,c) => a+c, 0) %2 ? 'odd' : 'even'