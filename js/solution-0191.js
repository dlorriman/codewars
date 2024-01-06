/* https://www.codewars.com/kata/5834fec22fb0ba7d080000e8

Given a positive integer n...
Return the number it is from 6.

Examples:
six_toast(5) == 1
six_toast(12) == 6

Pseudocode:
Take the number minus 6
Always return a positive number

*/

function sixToast(n) {
    return Math.abs(6 - n)
}

sixToast = n => Math.abs(6 - n)