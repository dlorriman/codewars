/* https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

Given an integer

Return a string, 'year + has either 366 or 365 days' depending on the condition,

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)

*/

function yearDays(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return `${year} has 366 days`
	} else {
		return `${year} has 365 days`
	}
}
