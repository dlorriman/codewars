/* https://www.codewars.com/kata/55d24f55d7dd296eb9000030

Given a positive integer greater than zero
Return the summation of every number from 1 to that number

Example:
1 -> 1 
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

Pseudocode:
Write a function that takes in an num
Set a counter to 0
Set a loop that runs n times, adding i to sum on each iteration
Return 

*/

function summation(num) {
    let count = 0
    for (let i = 0; i <= num; i++) {
        count = count + i
    }
    return count
}

const summation = n => n * (n + 1) / 2