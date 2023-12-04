/* https://www.codewars.com/kata/5865918c6b569962950002a1

Given a string and a letter...

Return an interger count of the number of times the letter appears in the string.

Examples:
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

Pseudocode:
Write a function strCount with 2 parameters, s, l.
Set a count
Loop through the string
If l = s increase count by 2
Return count

*/

function strCount(s, l) {
    return s.split('').filter(e => e === l).length
}