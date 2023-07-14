// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

// stringObject.toUpperCase()
// stringObject.toLowerCase()
// stringObject.replace(substring/regexp,replacement)

let str1 = 'My name is David'
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

