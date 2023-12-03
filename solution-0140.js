/* https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

Given a number 0-9...

Return a string of the number. Use a switch statement.

Examples:
1 === 'One'
4 === 'Four'
9 === 'Nine'

Pseudocode:
Write a function switchItUp that takes in a number.
Use a switch statement to return the string word of that number.
*/

function switchItUp(num) {
    switch(num) {
        case 0 : return 'Zero'
        case 1 : return 'One'
        case 2 : return 'Two'
        case 3 : return 'Three'
        case 4 : return 'Four'
        case 5 : return 'Five'
        case 6 : return 'Six'
        case 7 : return 'Seven'
        case 8 : return 'Eight'
        case 9 : return 'Nine'
    }
}