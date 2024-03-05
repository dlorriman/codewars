// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

function flickSwitch(arr) {
	let flick = true
	let result = []

	for (let element of arr) {
		if (element === 'flick') {
			flick = !flick
		}
		result.push(flick)
	}
	return result
}

function flickSwitch(arr) {
	let flick = true

	return arr.map(item => (item === 'flick' ? (flick = !flick) : flick))
}
