// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
	// Convert the number to binary and count the number of 1's
	const binaryCount = n.toString(2).split('1').length - 1

	// Check if the count is even or odd
	if (binaryCount % 2 === 0) {
		return "It's Evil!"
	} else {
		return "It's Odious!"
	}
}
