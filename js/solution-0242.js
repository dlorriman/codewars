/* https://www.codewars.com/kata/563c13853b07a8f17c000022

Given a date as input?
Check to see if it is today...
Return a boolean representing wether the date is today or not.

*/

function isToday(date) {
	const today = new Date()
	return (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear()
	)
}

function isToday(date) {
	return new Date().toDateString() === date.toDateString()
}
