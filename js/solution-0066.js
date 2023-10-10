/* https://www.codewars.com/kata/545a4c5a61aa4c6916000755

Input: Given an array of 3 numbers...
- Will it always be an array? 1d? Yes!
- Can the array contain any type of number, integer, float, positive and negative? Yes!
- Should I account for any other data types? No
- Could there be an invalid input? No
- Do I need to account for unexpected edge cases? No

Output: Return the index of the element that is in the numerical middle
- Return it as a number? string? array? Is there a certain format? Number!

Examples:
gimme([2, 3, 1]) => 0
gimme([5.9, 10.4, 14.2]) => 1
gimme([-2, -3, -1) => 0
gimme([-5.2, -10.6, 14]) => 0

Pseudocode: 
Write a function called gimme that accepts on parameter, arr.
When an array of 3 numbers is passed in return the index of the element that is in the numerical middle.

*/

function gimme(arr) {
    // Find the middle element by sorting a shallow copy of the array
    const sorted = [...arr].sort((a,b) => a-b)
    const middle = sorted[1]
    // Find the index of the middle value in the original array
    return arr.indexOf(middle)
}

const gimme = arr => arr.indexOf([...arr].sort((a,b) => a-b)[1])

const gimme = arr => arr.indexOf(arr.concat().sort((a,b) => a-b)[1])