/* https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

Input: Given an array of mixed types
Output: A string in the format "found the needle at position x"

Examples:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Pseudocode:
Write a function that takes in an array
Search the array for the string 'needle'
Return it's position in the correct format.
*/

function findNeedle(arr) {
    return `found the needle at position ${arr.indexOf('needle')}`
}