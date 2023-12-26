/* https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058

Given a string of arbitrary length with any ascii characters.

Return true if the string contains the word "English".
Case doesn't matter.

*/

function spEng(str){
    return str.toLowerCase().includes('english')
}