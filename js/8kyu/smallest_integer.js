/* https://www.codewars.com/kata/55a2d7ebe362935a210000b2

Input: Given an array of integers
Output: Return the smallest integer
Examples:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
Pseudocode:
Write a function that takes in an array of integers
Sort the array in ascending order
Return the first array element
*/

class SmallestIntegerFinder {
    findSmallestInt(arr) {
      return arr.sort((a,b) => a-b)[0]
    }
  }