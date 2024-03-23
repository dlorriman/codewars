// https://www.codewars.com/kata/596e4ef7b61e25981200009f

function aspectRatio(x, y) {
	return [Math.ceil((x / (x / y)) * 1.77777), y]
}

function aspectRatio(x, y) {
	return [Math.ceil((y * 16) / 9), y]
}
