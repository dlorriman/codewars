/* https://www.codewars.com/kata/5890d8bc9f0f422cf200006b

Given a number...
Return number less 15% rounded to 2 decimal places.
if null return -1

Example: 230 -> 200
*/

function excludingVatPrice(price) {
	return price === null ? -1 : +(price / 1.15).toFixed(2)
}
