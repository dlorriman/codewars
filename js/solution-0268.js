// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7

Array.prototype.filter = function (fn) {
	let res = []
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			res.push(this[i])
		}
	}
	return res
}
