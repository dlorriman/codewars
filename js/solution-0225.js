/* https://www.codewars.com/kata/54598d1fcbae2ae05200112c

Given an array and a function
Return true if every element in the array matches the condition in the function, else false.

*/

function all( arr, fun ){
  return arr.every(fun)
}