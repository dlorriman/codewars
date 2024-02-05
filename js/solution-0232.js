/* https://www.codewars.com/kata/5866fc43395d9138a7000006

Given a string...

Check to see if the string ends with a question mark. 
If true return string else return string + ?

Example:
"Yes" --> "Yes?" 
"No?" --> "No?"

*/

function ensureQuestion(s) {
    return s.charAt(s.length-1) === '?' ? s : s + '?'
}

function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?'
}