/* https://www.codewars.com/kata/5a07e5b7ffe75fd049000051

Given an array of strings...
Return the array sorted alphabetically.

*/

function sorter(textbooks) {
	return textbooks.sort((a, b) => {
		if (a.toLowerCase() < b.toLowerCase()) return -1
		if (a.toLowerCase() > b.toLowerCase()) return 1
		return 0
	})
}

const sorter = arr =>
	arr.sort((a, b) =>
		a.toLowerCase() < b.toLowerCase()
			? -1
			: a.toLowerCase() > b.toLowerCase()
			? 1
			: 0
	)

function sorter(arr) {
	return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
}
