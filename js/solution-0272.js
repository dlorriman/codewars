/* https://www.codewars.com/kata/574c5075d27783851800169e

Animal heads and legs problem. “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” Where x <= 1000 and y <=1000

Given 2 integers, (heads, legs) ....

Return an array [chickens, cows]

if 0 heads and 0 legs are given always return [0, 0]
If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions"
negative values (edge cases) will be given. */

function animals(heads, legs) {
	if (heads < 0 || legs < 0 || legs % 2 !== 0) {
		return 'No solutions'
	}
	if (heads === 0 && legs === 0) {
		return [0, 0]
	}

	const chickens = (legs - 2 * heads) / 2
	const cows = heads - chickens

	if (
		chickens < 0 ||
		cows < 0 ||
		!Number.isInteger(chickens) ||
		!Number.isInteger(cows)
	) {
		return 'No solutions'
	}

	return [chickens, cows]
}
