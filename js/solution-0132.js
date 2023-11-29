/* https://codewars.com/kata/568d0dd208ee69389d000016

Given a number d...
Return the total.

Examples:
rentalCarCost(1), 40)
rentalCarCost(3), 100
rentalCarCost(7), 230

Pseudocode:
Write a function called rentalCarCost with one parameter, d.


*/

function rentalCarCost(d) {
    let totalCost = d*40

    if (d >= 7) return totalCost -50
    if (d >= 3) return totalCost -20
    else return totalCost
}

const rentalCarCost = d => d*40 - ((d >= 7) ? 50 : ((d >= 3) ? 20 : 0))

const rentalCarCost = d => d*40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)