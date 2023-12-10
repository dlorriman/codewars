/* https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

Given a binary number as a string...

Return a decimal number.

Example:
0 => 0
1101 => 13
1001001 => 73

*/

function binToDec(bin) {
    return bin.split('').reduce((a, c, i) => a + +c * 2**(bin.length-1 -i), 0)
}

function binToDec(bin) {
    return parseInt(bin,2)
}