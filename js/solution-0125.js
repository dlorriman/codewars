/* https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

Given 3 positive integers, h, m, s... representing hours, minutes and seconds since midnight.
Return the time that's passed since midnight in milliseconds.

Examples:
0,1,1 --> 61000
1,1,1 --> 3661000
1,0,1 --> 3601000
1,0,0 --> 3600000

Pseudocode:
Write a function past, that accepts 3 parameters, h, m, s
Return the total milliseconds by doing some simple math

*/

function past(h, m, s) {
    return (h*3600000) + (m*60000) + (s*1000)
}

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}