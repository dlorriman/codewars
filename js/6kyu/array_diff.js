/* https://www.codewars.com/kata/523f5d21c841566fde000009

Input: Given 2 arrays, a and b.
Operation: Remove all values from list a, which are present in list b keeping their order.
Output: Return array a with the values present in array b removed.
Examples:
arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
Pseudocode:
Write a function, arrayDiff that takes in 2 arrays, a and b.
Return array a with the values present in array b removed: arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from a: arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
}