/* https://www.codewars.com/kata/542ebbdb494db239f8000046

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, return undefined. */

function nextItem(xs, item) {
	let found = false
	for (let x of xs) {
		if (found) return x
		if (x == item) found = true
	}
	return undefined
}
