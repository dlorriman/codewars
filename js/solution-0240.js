/* https://www.codewars.com/kata/5713bc89c82eff33c60009f7

Given a string,

Return a string with each word replaced with the word sex.
if empty or null return ''

Examples:
toFreud(""), ("")
toFreud("test"), ("sex")
toFreud("This is a test"), ("sex sex sex sex")

*/

function toFreud(s) {
	if (!s) return ''
	else
		return s
			.split(' ')
			.map(e => (e = 'sex'))
			.join(' ')
}
