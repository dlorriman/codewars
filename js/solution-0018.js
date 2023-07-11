// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
    return string
    .split('')
    .join(separator + '')
    .split(separator + ' ' + separator)
    .join(' ')
}

/* stringObject.split(separator,howmany)

let str = 'My name is David'
let words = str.split(' ') //space separator
console.log(words)
//output = ['My', 'name', 'is', 'David']

let words3 = str.split(' ', 3) //limit
console.log(words3)
//output = ['My', 'name', 'is']

let letters = str.split('')
console.log(letters)
//output = ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'D', 'a', 'v', 'i', 'd']

// stringObject.concat(string1,string2,string3)

let str2 = 'My'.concat('name','is','David')
console.log(str2)
//output = MynameisDavid

// arrayObject.join(separator)

console.log(letters.join(''))
//output = 'My name is David'
*/