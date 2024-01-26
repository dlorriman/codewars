/* https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

Given a number...

Return the corresponding string

if (score >= .9) return 'A'

*/

function grader(score) {
    if (score < .6 || score > 1) return 'F'
    if (score >= .9) return 'A'
    if (score >= .8) return 'B'
    if (score >= .7) return 'C'
    if (score >= .6) return 'D'
}