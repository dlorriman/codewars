// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Parameters: an array of minimum 4 positive integers, whole numbers greater than 0.

// Results: the sum of the two lowest positive numbers, returned as a single number.

// Examples:
// Input ([5, 8, 12, 19, 22]), Output = 13
// Input ([15, 28, 4, 2, 43]), Output = 6
// Input ([3, 87, 45, 12, 7]), Output = 10
// Input ([23, 71, 33, 82, 1]), Output = 24
// Input ([52, 76, 14, 12, 4]), Output = 16

// Pseudocode

// 1. Sort the array from lowest to highest.
// 2. Add the first two numbers together and return the sum

function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a,b) => a-b)
    return (arr[0] + arr[1])
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])