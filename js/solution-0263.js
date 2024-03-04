// https://www.codewars.com/kata/545af3d185166a3dec001190

function eachCons(arr, n) {
	const result = []

	for (let i = 0; i <= arr.length - n; i++) {
		result.push(arr.slice(i, i + n))
	}

	return result
}
