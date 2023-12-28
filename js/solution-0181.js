/* https://www.codewars.com/kata/57e921d8b36340f1fd000059

Given 5 inputs...
pontoonDistance: distance from you to the pontoon.
sharkDistance: distance from the shark to the pontoon.
youSpeed: how fast you can move in m/second
sharkSpeed: how fast the shark can move in m/second.
dolphin: if true, sharkSpeed / 2

Return 'Alive!' if you make it, else 'Shark Bait!'

Examples:
shark(12, 50, 4, 8, true), "Alive!"
shark(7, 55, 4, 16, true), "Alive!"
shark(24, 0, 4, 8, true), "Shark Bait!"

Pseudocode:
If (dolphin === true) sharkSpeed / 2
If

*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin === true) sharkSpeed /= 2
    return pontoonDistance / youSpeed <= sharkDistance / sharkSpeed ? 'Alive!' : 'Shark Bait!'
}