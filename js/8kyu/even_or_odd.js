/* https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Input: an integer, type: number

Output: A string, "Even" for even numbers or "Odd" for odd numbers

Examples:
2 => 'Even'
7 => 'Odd'
-42 => 'Even'
0 => 'Even'

Pseudocode:
Write a function that takes in an number
Check to see if the number is odd or even
Return the corresponding string
*/

function evenOrOdd(number) {
    if (number%2) return 'Odd'
    else return 'Even'
}

const evenOrOdd = n => n%2 ? 'odd' : 'even'

function evenOrOdd(number) {
    return number%2 ? 'Odd' : 'Even'
}
