/* https://www.codewars.com/kata/57241e0f440cd279b5000829

Given 2 integers n & m...
Return the sum of all multiples of n < m.

Examples:
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

Pseudocode:
Loop from n to < m
Adding n to i each iteration
Return result

*/

function sumMul(n, m) {
    if (m <= 0) {
          return 'INVALID'
      } 
    
      let result = 0
      for(let i = n; i < m; i+=n) {
          result += i
      }
      return result
  }