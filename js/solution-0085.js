/* https://www.codewars.com/kata/57cc975ed542d3148f00015b

Given an array and a value.
Write a function that checks the array to see if the value exists.
Return 'true' if the the array contains the value and 'false' if not.

Examples:
check([66, 101], 66), true
check([101, 45, 75, 105, 99, 107], 107), true
check(['t', 'e', 's', 't'], 'e'), true
check(['what', 'a', 'great', 'kata'], 'kat'), false

Pseudocode:
loop through the array comparing the value to the element on each pass

*/

function check(arr, v) {
    return arr.includes(v)
}

const check = (a, v) => a.includes(v)
