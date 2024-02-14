// https://www.codewars.com/kata/55e8aba23d399a59500000ce

class Hero {
	constructor(name) {
		this.name = name || 'Hero'
		this.position = '00'
		this.health = 100
		this.damage = 5
		this.experience = 0
	}
}

function Hero(name) {
	this.name = name || 'Hero'
	this.position = '00'
	this.health = 100
	this.damage = 5
	this.experience = 0
}
