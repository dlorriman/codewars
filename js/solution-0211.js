/* https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

Given 2 numbers...

Return the correct number based on the following conditions,

if (x > 0 && y > 0) return 1
if (x < 0 && y > 0) return 2
if (x < 0 && y < 0) return 3
else return 4

*/

function quadrant(x, y) {
    if (x > 0 && y > 0) return 1
    if (x < 0 && y > 0) return 2
    if (x < 0 && y < 0) return 3
    else return 4
}

function quadrant(x, y) {
    return (x > 0) ? ((y > 0) ? 1 : 4) : ((y > 0) ? 2 : 3);
}