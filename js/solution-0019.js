// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

// stringObject.toUpperCase()
// stringObject.toLowerCase()
// stringObject.replace(substring/regexp,replacement)

const alienLanguage = (str) => str
    .toUpperCase()
    .split(' ')
    .map(lastToLower)
    .join(' ')

const lastToLower = (str) => str.slice(0, -1) + str.slice(-1).toLowerCase()

/* let str1 = 'My name is David'
console.log(str1.toUpperCase()) // 'MY NAME IS DAVID'
console.log(str1.toLowerCase()) // 'my name is david'

let str2 = 'this is an example.'
let result = str2[0].toUpperCase()+str2.slice(1)
console.log(result)

let str3 = 'this is an example.'
let words = str3.split(' ')
console.log(words)
for (let i = 0; i < words.length; i++) {
    words[i]=words[i][0].toUpperCase()+words[i].slice(1)
}
console.log(words.join(' '))

let str4 = 'this is an example.'
let result2 = str4.replace('this', 'that')
console.log(result2)

let str = 'this is an example.'
let words = str.split(' ')
for(let i = 0; i < words.length; i++) {
    words[i]=words[i].replace(words[i][0],words[i][0].toUpperCase())
}
console.log(words.join(' ')) */

