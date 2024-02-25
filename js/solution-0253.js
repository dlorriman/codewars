/* https://www.codewars.com/kata/57096af70dad013aa200007b

Given an array of booleans and an operator...
Return a boolean by sequentially applying the operator to the values in the array.

Examples:
assert.strictEqual(logicalCalc([true, true, true, false], "AND"), false);
assert.strictEqual(logicalCalc([true, true, true, false], "OR"), true);
assert.strictEqual(logicalCalc([true, true, true, false], "XOR"), true);

*/

function logicalCalc(arr, op) {
	if (op === 'AND') {
		return arr.every(Boolean)
	} else if (op === 'OR') {
		return arr.some(Boolean)
	} else {
		return arr.reduce((acc, val) => acc !== val, false)
	}
}
