/* https://www.codewars.com/kata/53af2b8861023f1d88000832

Given a string as input representing name...

Write a function areYouPlayingBanjo, that returns `${name} plays banjo` if the string begins with R or r, else `${name} does not play banjo`

Examples:
areYouPlayingBanjo("Adam") --> "Adam does not play banjo"
areYouPlayingBanjo("Ringo") --> "Ringo plays banjo"
areYouPlayingBanjo("rolf") --> "rolf plays banjo"

*/

function areYouPlayingBanjo(name) {
    name.toLowerCase()
    if(name.charAt(0) === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}

const areYouPlayingBanjo = name => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`