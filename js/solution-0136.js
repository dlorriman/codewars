/* https://www.codewars.com/kata/568dcc3c7f12767a62000038

Given 2 booleans...
Write a function that returns the correct result based on the following examples,

Examples:
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

function setAlarm(a, b){
  return a && !b
}