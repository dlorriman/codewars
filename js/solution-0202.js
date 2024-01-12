/* https://www.codewars.com/kata/5951d30ce99cf2467e000013

Given an array of unsorted positive integers...

Write a function called isPythagoreanTriple that accepts one parameter, the array of integers [ n1, n2, n3 ].

The function should determine if it is possible to form a Pythagorean Triple using those 3 integers.

Return true if it is possible, else false.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2

Examples:
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

*/

function isPythagoreanTriple(integers) {
    integers.sort((a,b) => a-b)
    const [a, b, c] = integers
    return a**2 + b**2 === c**2 
}

function isPythagoreanTriple(integers) {
    const [a, b, c] = integers.sort((a,b) => a-b)
    return a**2 + b**2 === c**2 
}
