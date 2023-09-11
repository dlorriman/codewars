// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Parameters: a row number of a triangle of consecutive odd numbers starting at 1

// Returns: sum of the numbers in the nth row of this triangle

// Examples: 
// (rowSumOddNumbers(42), 74088)
// 1 -->  1
// 2 --> 3 + 5 = 8

// Pseudocode:


function rowSumOddNumbers(n) {
    return n**3
    //return n*n*n
    //return Math.pow(n, 3)
}

console.log(rowSumOddNumbers(42))