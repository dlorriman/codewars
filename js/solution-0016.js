// https://www.codewars.com/kata/57274562c8dcebe77e001012

// solution 1

function cutIt(arr) {
    // Calculate the minimum length among all strings in the array
    const minLength = Math.min(...arr.map(x => x.length));
    
    // Create a new array by mapping each string to a substring of minimum length
    const result = arr.map(x => x.slice(0, minLength));
  
    // Return the new array with truncated strings
    return result;
  }

// solution 2

function cutIt(arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        return [] // Handle edge cases of empty array or non-array input
    }

    // Find the shortest string length
    let shortestLength = arr[0].length
    for (let i = 1; i < arr.length; i++) {
        const currentLength = arr[i].length
        if (currentLength < shortestLength) {
            shortestLength = currentLength
        }
    }

    // Intersect strings to the shortest length
    const result = arr.map(str => str.slice(0, shortestLength))
    
    return result
  }


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
