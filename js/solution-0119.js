/* https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

Input: an array of mixed types (a) and a value (x)
Output: true if the array contains the value else false

Examples:
check([66, 101], 66), true
check([80, 117, 115, 104, 45, 85, 112, 115], 45), true
check(['t', 'e', 's', 't'], 'e'), true
check(['what', 'a', 'great', 'kata'], 'kat'), false

Pseudocode:
Write a function, check, that has 2 parameters a and x
Check to see if the value of x is included in the array a

*/

function check(a, x) {
    return a.includes(x)
}

check = (a, x) => a.includes(x)