/* https://www.codewars.com/kata/5ab6538b379d20ad880000ab

Given 2 positive intergers as arguments representing length and width.
Return l * w if they are equal or l + w * 2 if not.

Examples:
6, 10 --> 32
3, 3 --> 9

Pseudocode:
Write a function areaOrPerimeter with 2 parameters (l, w)


*/

function areaOrPerimeter(l, w) {
    return l===w ? l*w : (l+w)*2
}