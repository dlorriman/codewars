/* https://www.codewars.com/kata/57faece99610ced690000165

Given a string...
Write a function called remove, 
that returns the string with all exclamation marks removed from the end only.

Examples:
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function remove(str) {
    let i = str.length - 1
    while (i >= 0 && str[i] === '!') {
        i--
    }
    return str.substring(0, i + 1)
}