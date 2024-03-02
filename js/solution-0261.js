// https://www.codewars.com/kata/570cc83df616a85944001315

function countWords(str) {
	str
		.trim()
		.split(/\s+/)
		.filter(word => word !== '').length
}

const countWords = str => str.split(/\s+/).filter(x => x).length
