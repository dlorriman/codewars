/* https://codewars.com/kata/57e1e61ba396b3727c000251

Given a string... 
Return a new string with numbers 0-9 removed.

Examples:
stringClean("123456789"), ""
stringClean("(E3at m2e2!!)"), "(Eat me!!)"
Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"), "Why can't we buy the good software? #cheapskates"

*/

function stringClean(s){
    let result = ''
    for(let char of s) {
        if(isNaN(parseInt(char, 10))) {
            result += char
        }
    }
    return result
}

stringClean = s => s.split('').filter(n => n != parseInt(n)).join('')