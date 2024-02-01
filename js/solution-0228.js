/* https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

Given 2 strings of only letters (s1, s2)...
Check to see if all letters in the s1 are the opposite case to s2.
Return true if they are else false if they're not.
If both strings are empty return false.

Examples:
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false

*/

function isOpposite(s1, s2) {
    if (s1 === '' || s2 === '') return false

    if (s1.length !== s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        if (
            (s1[i].toLowerCase() === s2[i] && s1[i] === s2[i].toUpperCase()) ||
            (s1[i].toUpperCase() === s2[i] && s1[i] === s2[i].toLowerCase())
        ) {
            continue
        } else {
            return false
        }
    }

    return true
}