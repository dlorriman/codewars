// https://www.codewars.com/kata/57bfea4cb19505912900012c

function symmetricPoint(p, q) {
	// calculate the differences in X and Y coordinaates between P and Q
	const dx = q[0] - p[0]
	const dy = q[1] - p[1]

	// calculate the coordinates of the symmetric point P1
	const x1 = q[0] + dx
	const y1 = q[1] + dy

	// return the symmetric point P1 as an array
	return [x1, y1]
}

const symmetricPoint = (p, q) => [2 * q[0] - p[0], 2 * q[1] - p[1]]
