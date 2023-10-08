/* https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

Input: Given an array of strings...
All of the strings will be different lengths

Output: Return an new array containing the same strings sorted from shortest to longest.

Example: ["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]

Pseudocode:
Write a function sortByLength that takes in an array of strings.
Return an new array containing the same strings sorted from shortest to longest.
*/

function sortByLength(arr) {
    return arr.sort((a,b) => a.length - b.length)
}