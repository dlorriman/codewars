/* https://www.codewars.com/kata/57ab2d6072292dbf7c000039

Given a string containing diacritic letters.
Return the string with these letters converted to the latin alphabet.
Using the table provided.

Example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

function correctPolishLetters(string) {
	const diacriticsMap = {
		ą: 'a',
		ć: 'c',
		ę: 'e',
		ł: 'l',
		ń: 'n',
		ó: 'o',
		ś: 's',
		ź: 'z',
		ż: 'z'
	}

	return string
		.split('')
		.map(c => diacriticsMap[c] || c)
		.join('')
}
