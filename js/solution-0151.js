/* https://www.codewars.com/kata/59342039eb450e39970000a6

Given a number, n...

Return the number of positive odd integers below n. 

Expect large Inputs!

Examples:
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Pseudocode:
Write a function oddCount, that takes one parameter (n).
Count the number of odd intergers.


*/

function oddCount(n) {
    return Math.floor(n / 2)
}

oddCount = n => Math.ceil((n - 1) / 2)

oddCount = n => Math.floor(n / 2)