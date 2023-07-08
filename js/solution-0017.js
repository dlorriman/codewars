// https://www.codewars.com/kata/57277a31e5e51450a4000010

// StringObject.indexOf(searchvalue,fromindex)
// StringObject.lastIndexOf(searchvalue,fromindex)
// StringObject.search(searchvalue/regexp)

let str = 'Hello World!'

console.log(str.indexOf('e')) // 1
console.log(str.lastIndexOf('e')) // 1
console.log(str.search('e')) // 1

console.log(str.indexOf('o')) // 4
console.log(str.lastIndexOf('o')) // 7
console.log(str.search('o')) // 4

console.log(str.indexOf('o',5)) // 7
console.log(str.lastIndexOf('o',5)) // 4
console.log(str.search('o')) // 4

console.log(str.indexOf('world')) // -1
console.log(str.lastIndexOf('world')) // -1
console.log(str.search(/world/i)) // 6
console.log(str.search(/word/i)) // -1

// function declaration with turnary operator
function firstToLast(str,c){
    let first = str.indexOf(c), last = str.lastIndexOf(c)
    return first === -1 ? -1 : last - first
  }

// arrow function
firstToLast = (str,c) => str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)