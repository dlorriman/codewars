// https://www.codewars.com/kata/5703c093022cd1aae90012c9

// Your task is to shorten the code as much as possible in order to meet the strict character count requirements 161

function find(array, element) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === element) return i
	}
	return 'Not found'
}

const find = (a, e) => (a.includes(e) ? a.indexOf(e) : 'Not found')
