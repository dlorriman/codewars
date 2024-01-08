/* https://www.codewars.com/kata/596fba44963025c878000039

Given a str and a char...
Replace all chars in str with char.

Examples:
contamination("abc","z"), "zzz")
contamination("","z"), ""
contamination("abc",""), ""
contamination("_3ebzgh4","&"), "&&&&&&&&"
contamination("//case"," "), "      "

*/

function contamination(text, char){
    return text.split('').map(e => char).join('')
}

function contamination(text, char){
    return char.repeat(text.length)
}

function contamination(text, char){
    return text.replace(/./g, char)
}

function contamination(text, char) {
    return text.split('').fill(char).join('');
}