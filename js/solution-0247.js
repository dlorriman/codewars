/* https://www.codewars.com/kata/573f5c61e7752709df0005d2

Given 2 sorted arrays of intergers.
Return the arrays merged, sorted and no duplicates.
*/

function mergeArrays(a, b) {
	const result = [...new Set([...a, ...b])].sort((x, y) => x - y)
	return result
}
