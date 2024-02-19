/* https://www.codewars.com/kata/56bcaedfcf6b7f2125001118

Given a string containing special chars...
Return a string with the chars replaced with safe equivalents.

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;

*/

function htmlspecialchars(formData) {
	return formData
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
}
