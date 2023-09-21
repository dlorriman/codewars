/* https://www.codewars.com/kata/5a092d9e46d843b9db000064

Given an array of positive and negative integers, except for one integer that is either only negative or only positive. The only-positive or only-negative integer may appear more than once.

Your task will be to find that integer.

Will the integer always be of the number type or do I need to account for other data types, such as a number passed as a string? Number

Will the array be a 1d array or could it be a nested array? 1d

Could there be any invalid inputs or unexpected edge cases I need to account for? No

Return that integer as a number.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

Write a function that takes in an array of integers.
Find the value that does not include the corresponding negative value

*/

function solve(arr) {
    return arr.find(value => !arr.includes(-value))
}