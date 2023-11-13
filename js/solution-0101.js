/* https://www.codewars.com/kata/5f70c883e10f9e0001c89673

Given a letter, either 'L' or 'R' (left or right), and an array of positive integers...

If the letter is R, sort the array in asc order.

If the letter is L, sort the array in des order.

Example:
flip('R', [3, 2, 1, 2]) --> [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5]) --> [5, 5, 4, 3, 1]

Pseudocode:
Write a function, flip. That accepts 2 parameter, d and a.
if d = R, sort a asc
if d = L, sort a des
return the result

*/

function flip(d, a) {
    if (d === 'R') {a.sort((a,b) => a-b)}
    if (d === 'L') {a.sort((a,b) => b-a)}
    return a
}

const flip = (d, a) => a.sort((a,b) => d === 'R' ? a-b : b-a)