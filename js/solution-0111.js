/* https://www.codewars.com/kata/570597e258b58f6edc00230d

Given a string of char seperated by commas...

Write a function called 'array' that accepts one parameter 'string'.
Return a new string with the first and last characters removed and the commas replaced by spaces.

If the input is empty or the char count is < 3 return null

Examples:
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

Pseudocode:


*/

function array(string) {
    let result = string.split(',').slice(1, -1).join(' ')
    return result === '' ? null : result
}

const array = str => str.split(',').slice(1, -1).join(' ') || null