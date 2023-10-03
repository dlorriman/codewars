/* https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

Input: Given a string
Output: Return a new string


Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Write a function duplicateEncode that takes in a string.
Return a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(str) {
    return str
    .toLowerCase()
    .split('')
    .map((e, i, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
    .join('')
}

// Example usage:
console.log(duplicateEncode("din"))      // Output: "((("
console.log(duplicateEncode("recede"))   // Output: "()()()"
console.log(duplicateEncode("Success"))  // Output: ")())())"
console.log(duplicateEncode("(( @"))     // Output: "))(("

