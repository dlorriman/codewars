// https://www.codewars.com/kata/57274562c8dcebe77e001012

let strLength = 'abcdefghijklmnopqrstuvwxyz'
console.log(strLength.length) // output: 26

let strIndex = 'codewars'
for (let i = 0; i < strIndex.length; i++) console.log(strIndex[i])
/* output: 
c
o
d
e
w
a
r
s
*/

let someString = 'Hello World!'
console.log(someString.slice(6))
console.log(someString.substring(6))
console.log(someString.substr(6)) // deprecated
