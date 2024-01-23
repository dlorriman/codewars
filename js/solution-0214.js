/* https://www.codewars.com/kata/572b6b2772a38bc1e700007a

Given a string...
Return the sum of all the Unicode values?

Example:
uniTotal("a") == 97
uniTotal("aaa") == 291
uniTotal("Mary Had A Little Lamb", 1873) == 1873

Pseudocode:
Set a counter
Loop over each char in the str adding the char code to the total
Return the total.

*/

function uniTotal(str) {
    let total = 0
    for (let i = 0; i < str.length; i++) {
        total += str.charCodeAt(i)
    }

    return total
}

const uniTotal = str => [...str].reduce((acc, c) => acc + c.charCodeAt(0), 0)