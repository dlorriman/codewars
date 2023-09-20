// https://www.codewars.com/kata/532b4057484b0e58e8000766

// Given an array of numbers. Return the sum of the values in the array as a number.

// Examples:
// [1,2,3,4,5,6,7,8,9,10] // should return 55
// [71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38] // should return 32830.6

// Create a function that takes in an array of numbers
// Use the reduce method to sum the numbers
// Return the sum

function sum(array) {
    return array.reduce((acc, c) => acc + c, 0)
}

const sum = arr => arr.reduce((acc, c) => acc + c)