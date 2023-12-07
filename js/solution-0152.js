/* https://www.codewars.com/kata/50654ddff44f800200000007

Given 2 strings a and b...

return a string of the form short+long+short

The strings will not be the same length, but they may be empty ( zero length ).

Examples:
("1", "22") --> "1221"
("22", "1") --> "1221"

Pseudocode:
Write function solution with 2 parameters a and b.
If a.length is < b.length return a+b+a
else return b+a+b

*/

function solution(a, b) {
    return a.length < b.length ? a+b+a : b+a+b
}