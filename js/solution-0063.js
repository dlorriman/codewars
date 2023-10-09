/* https://www.codewars.com/kata/5813d19765d81c592200001a

Given 2 numbers representing the start and end of a range..

Write a function, dontGiveMeFive, that returns the count of all numbers in the range, inclusive, except numbers with a 5 in it.

Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

dontGiveMeFive(1,9), 8
dontGiveMeFive(4,17), 12

The start number will always be smaller than the end number. Both numbers can be also negative!
*/

function dontGiveMeFive(start, end) {
    let count = 0

    for (let i = start; i <= end; i++) {
        if (i.toString().includes('5') === false) {
            count++
        }
    }

    return count
}