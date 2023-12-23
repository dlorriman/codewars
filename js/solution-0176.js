/* https://www.codewars.com/kata/570e8ec4127ad143660001fd

Given a string and a price...

Return the total price for all characters in the string.
The default price is 30 unless another value is passed in.
You can not use multiplier "*" operator.

Example:
billboard("Jeong-Ho Aristotelis"), 600
billboard("Werner Vígi",15), 165

Pseudocode:
Loop over each char in the string adding price to the total each time
*/

function billboard(name, price = 30) {
    let total = 0
    for (char of name) {
        total += price
    }
    return total
}

function billboard(name, price = 30) {
    return Array.from(name).reduce((total, char) => total + price, 0)
}

function billboard(name, price = 30) {
    return name.split('').reduce((total, char) => total + price, 0)
}

billboard = (name, price = 30) => Array.from(name).reduce((total, char) => total + price, 0)