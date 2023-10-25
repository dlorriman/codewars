/* https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers...

Write a function countPositivesSumNegatives, that returns an array where the first element is the count of positive integers and the second number is the sum of negative integers. Zero is neither. If array is empty or null, return an empty array.

Examples: 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] --> [10, -65].
[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] --> [8, -50]

Pseudocode:
Check if array is null or empty and return []
Calculate the count of positive numbers and the sum of negative numbers
Return an array with the count of positives and the sum of negative

*/

function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let posCount = 0;
    let negSum = 0;

    for (let num of arr) {
        if (num > 0) {
            posCount++;
        } else if (num < 0) {
            negSum += num;
        }
    }

    return [posCount, negSum];
}

function countPositivesSumNegatives(arr) {
    return !arr || !arr.length ? [] : [
        arr.filter(n => n > 0).length,
        arr.filter(n < 0).reduce((a,b) => a+b)
    ]
}