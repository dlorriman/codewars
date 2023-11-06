/* https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

Given an array of strings...
Sort the array alphabetically and return the first value
Split the first value and join it back together using *** as the delimiter

Examples:
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'

*/

function twoSort(arr) {
    return arr.sort()[0].split('').join('***')
}