/* https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f

Given 2 strings (firstName, surname)...

Return a string reprenting the correct alias from the object provided using the initials in uppercase.
If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Example:
aliasGen("Mike", "Millington"), "Malware Mike"
aliasGen("Daisy", "Petrovic"), "Data Payload"
aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z."

Pseudocode:
Create variable containing the initials toUpperCase
Check it see if the initials are valid A-Z if not return message
Create variables containing the corresponding alias from the object
Return the correct string format

*/

function aliasGen(firstNameStr, surnameStr) {
	const firstNameInitial = firstNameStr[0].toUpperCase()
	const surnameInitial = surnameStr[0].toUpperCase()

	if (!/^[A-Z]$/.test(firstNameInitial) || !/^[A-Z]$/.test(surnameInitial)) {
		return 'Your name must start with a letter from A - Z.'
	}

	const firstNameAlias = firstName[firstNameInitial] || ''
	const surnameAlias = surname[surnameInitial] || ''

	return `${firstNameAlias} ${surnameAlias}`
}
