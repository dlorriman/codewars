// https://www.codewars.com/kata/596c6eb85b0f515834000049

let replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

let replaceDots = s => s.split('.').join('-')

let replaceDots = function(str) {
    let answer = ''
    for (let i = 0; i < str.length; i++) {
        answer += (str[i] !== '.') ? str[i] : '-'
    }
    return answer
}