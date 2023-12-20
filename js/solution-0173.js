/* https://www.codewars.com/kata/5761a717780f8950ce001473

Given two numbers, a birth year (a) and another year (b).

Return a string including the number of years difference, b - a = age.

if (age === 1) return 'You are 1 year old.'
if (age === -1) 'You will be born in 1 year.'
if (age >1) return 'You are ${age} years old.'
if (age <1) return 'You will be born in ${age} years.'
else return 'You were born this very year!'

*/

function calculateAge (a, b) {
    let age = b - a
    if (age === 1) return `You are 1 year old.`
    if (age === -1) return `You will be born in 1 year.`
    if (age >1) return `You are ${age} years old.`
    if (age <-1) return `You will be born in ${Math.abs(age)} years.`
    else return `You were born this very year!`
}