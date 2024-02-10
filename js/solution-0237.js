// https://www.codewars.com/kata/55a75e2d0803fea18f00009d

function slope(points) {
	const [a, b, c, d] = points

	if (c - a === 0) {
		return 'undefined'
	}

	const slopeValue = (d - b) / (c - a)
	return slopeValue.toString()
}
