/* https://www.codewars.com/kata/5b853229cfde412a470000d0

Given 2 numbers... d, s.

Write a function twiceAsOld, that returns d - (s*2).

Examples:
twiceAsOld(36,7) , 22
twiceAsOld(55,30) , 5
twiceAsOld(42,21) , 0

*/

twiceAsOld = (d, s) => Math.abs(d - s*2)