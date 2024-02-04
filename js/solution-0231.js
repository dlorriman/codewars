/* https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

Given a number (n)...

Return a string with the following sequence.

Example:
drawStairs(1), "I"
drawStairs(3), "I\n I\n  I"
drawStairs(5), "I\n I\n  I\n   I\n    I"

*/

function drawStairs(n) {
    let stairs = ['I'];
    for (let i = n - 1; i > 0; i--) {
        stairs.push(' '.repeat(n - i) + 'I');
    }
    return stairs.join('\n');
}