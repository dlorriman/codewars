/* https://www.codewars.com/kata/582cb0224e56e068d800003c

Given a number representing time, 

Will the time be given as a integer possibly a float? Both
Will the number always be of the number type? Yes
Do I need to account for invalid input or unexpected edge cases? No

Return the number *0.5 rounded down to the nearest integer.

Examples:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

Pseudocode:
Write a function that takes in a number
Times that number by .5 and round down
Return the result
*/

function litres(time) {
    return Math.floor(time * .5)
}

function litres(time) {
    return parseInt(time * .5)
}

const litres = time => Math.floor(time * .5)

const litres = t => ~~(t/2)