/* https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

Given two integers n & m...
Return an integer n * m as long as neither are < 0, else 0

Examples:
5, 5 --> 25
5, -5 --> 0
-5, 5 --> 0

Pseudocode:
Write a function paperwork, that accepts to parameters, n, m.
if either n or m is < 0 return 0 else return n * m

*/

function paperwork(n, m) {
    if(n < 0 || m < 0) {return 0}
    else {return n * m}
}

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
}

paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m