// https://www.codewars.com/kata/56214b6864fe8813f1000019

let health = 100
let position = 0
let coins = 0

function main() {
	rollDice()
	move()
	combat()
	getCoins()
	buyHealth()
	printStatus()
}
