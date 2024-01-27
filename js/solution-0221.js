/* https://www.codewars.com/kata/562926c855ca9fdc4800005b

Given a number and a power...
Write a function that raises number to power without using built in functions like Math.pow or **

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000

Pseudocode:
Set total to 1
Loop power times.
On each loop times total by number
Return total

*/

function numberToPower(n, p){
    let total = 1
    
    for (let i = 1; i <= p; i++) {
      total *= n
    }

    return total
}