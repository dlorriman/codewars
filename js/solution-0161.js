/* https://www.codewars.com/kata/565f5825379664a26b00007c

Given a 3 param, w, h, d...

Return an array [area, volume]

Example:
getSize(4, 2, 6), [88, 48]
getSize(10, 10, 10), [600, 1000]

Pseudocode:
Calculate the area
Calculate the volune
Return an array

*/

function getSize(w, h, d) {
    let area = 2* (w*h + w*d + h*d)
    let volume = w*h*d
    return [area, volume]
}

getSize = (w, h, d) => [2* (w*h + w*d + h*d), w*h*d]