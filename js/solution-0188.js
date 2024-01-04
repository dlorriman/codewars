/* https://www.codewars.com/kata/5c374b346a5d0f77af500a5a

Given 3 inputs, left, right and call
Write a function elevator that returns left or right depending which one is closest to call
If equal return right

Examples:
elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

*/

function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'
}