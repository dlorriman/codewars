/* https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Given a string of two words with one space inbetween them...

Write a function that returns the first letter of each word seperated by a '.'.

Examples:
Sam Harris => S.H
patrick feeney => P.F

Pseudocode:
Split name into an array of 2 names using the space as delimiter
Map the array to a new array of only the first letters
Convert to uppercase
Join back into a string with a '.' as delimiter

*/

function abbrevName(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('.')
}