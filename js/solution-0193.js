/* https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

Given a non-empty string...
Return the string with all exclamation marks removed and one added at the end.

Examples:
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"

Pseudocode:
Remove all exclamation marks from the string. ReplaceAll?
Add one at the end at the end.
Return the string.

*/

function remove(str) {
    return str.replaceAll('!', '').concat('!')
}

function remove(str) {
    return str.split('!').join('') + '!'
}