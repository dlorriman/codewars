/* https://www.codewars.com/kata/65128732b5aff40032a3d8f0

Given 2 strings (s1, s2), comprising of + and -...

Write a function called neutralise that compares each character of the two strings...

Return a new string based on the following conditions,

if ()

*/

function neutralise(s1, s2) {
	newStr = ''
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] === '+' && s2[i] === '+') newStr += '+'
		else if (s1[i] === '-' && s2[i] === '-') newStr += '-'
		else newStr += '0'
	}
	return newStr
}
