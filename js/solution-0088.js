/* https://www.codewars.com/kata/5bb904724c47249b10000131

Given an array of 10 strings in the format "x:y"

Write a function called points that calculates the a total based on the following conditions,

if x > y: +3
if x < y: +0
if x = y: +1

Examples:
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0
points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15
points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12

Pseudocode:
Write a function called points that iterates through the given array.
Set a counter starting at 0
loop over the array comparing the string value on the left and right of each string value :.
Add to the counter based on the given conditions
Return the count
*/

function points(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        const [x, y] = arr[i].split(':').map(Number)

        if (x > y) count += 3
        if (x === y) count += 1
    }
    return count
}

const points = arr => arr.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)