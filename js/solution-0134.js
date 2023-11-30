/* https://www.codewars.com/kata/58649884a1659ed6cb000072

Given a string as input... either green, yellow or red

Return a string based on the following condition,

'green' ? 'yellow'
'yellow' ? 'red'
'red' ? 'green'

Pseudocode:
Write a function updateLight that takes a string as input.
Return the correct string based on the conditions.
*/

function updateLight(string) {
    if (string === 'green') return 'yellow'
    if (string === 'yellow') return 'red'
    else return 'green'
}

updateLight = string => string === 'green' ? 'yellow' : string === 'yellow' ? 'red' : 'green'