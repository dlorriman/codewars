/* https://www.codewars.com/kata/57cff961eca260b71900008f */

function isVow(a) {
    return a.map(e => 'aeiou'.includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e) 
}

const isVow = a => a.map(e => 'aeiou'.includes(y=String.fromCharCode(e)) ? y : e)