/* https://www.codewars.com/kata/5a00e05cc374cb34d100000d

Given a positive integer, n.
Return an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

Pseudocode:
Write a function reverseSeq with one parameter n.
Declare a new empty array.
Count backwards from n to 1 pushing n to the new array each iteration.
Return the new array.

*/

function reverseSeq(n) {
    let array = []
    for(let i = n; i > 0; i--) {
        array.push(i)
    }
    return array
}