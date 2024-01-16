/* https://www.codewars.com/kata/56453a12fcee9a6c4700009c

Given 3 parameters... a, b, margin

Write a function closeCompare that returns

if(margin === undefined) margin = 0
if(margin >= Math.abs(a - b)) return 0
if(a < b) return -1
if(a > b) return 1
if(a === b) return 0

*/

function closeCompare(a, b, margin = 0) {
    const distance = Math.abs(a - b)

    if (distance <= margin) return 0
    if (a < b) return -1
    else return 1
}