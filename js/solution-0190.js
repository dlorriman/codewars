/* https://codewars.com/kata/57faf7275c991027af000679

Given a string (s) and a number (n) as inputs.
Write a function remove,
Return the string with exclamation marks removed n time from left to right.

Examples:
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

Pseudocode:
Loop over the string n times removing the first exclamation mark each pass.

*/

function remove(s, n) {
    let sArr = s.split('')
    for (let i = 0; i < n; i++) {
        let index = sArr.indexOf('!')
        if (index !== -1) {
            sArr.splice(index, 1)
        } else {
            break
        }
    }
    return sArr.join('')
}

function remove(s, n) {
    while(n) {
        s = s.replace('!', '')
        n--
    }
    return s
}

function remove(s, n) {
    return n > 0 ? remove(s.replace('!', ''), n - 1) : s
}