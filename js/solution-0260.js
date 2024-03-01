/* https://www.codewars.com/kata/5803956ddb07c5c74200144e

Given an interger between 1 - 100 inclusive (n)...

Return a string containing two integers seperated by a -

The left side should equal n / 2 + 7 floored
The right side should equal (n - 7) * 2 floored

If n <= 14 then

min = age - 0.10 * age
max = age + 0.10 * age

Examples:
datingRange(17), "15-20"
datingRange(40), "27-66"
datingRange(15), "14-16"
datingRange(35), "24-56"
datingRange(10), "9-11"

*/

function datingRange(n) {
	if (n <= 14) {
		return `${Math.floor(n - 0.1 * n)}-${Math.floor(n + 0.1 * n)}`
	} else {
		return `${Math.floor(n / 2 + 7)}-${Math.floor((n - 7) * 2)}`
	}
}
