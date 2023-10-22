/* https://www.codewars.com/kata/514a6336889283a3d2000001

Given an array of positive integers...

Write a function getEvenNumbers, that uses the filer function to return a new array consisting of only even numbers.

Example: getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(arr) {
    return arr.filter(e => e%2 === 0)
}