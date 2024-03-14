/* https://www.codewars.com/kata/59c1302ecb7fb48757000013

Given 2 arguments, (variable, type)
Return true if typeof variable === type

Example:
42, "number"   --> true
"42", "number" --> false
*/

function typeValidation(variable, type) {
	return typeof variable === type
}
