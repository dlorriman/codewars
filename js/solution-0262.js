// https://www.codewars.com/kata/56f3f6a82010832b02000f38

// TODO: Refactor and shorten the function

const describeAge = age =>
	`You're a(n) ${
		age <= 12
			? 'kid'
			: age >= 13 && age <= 17
			? 'teenager'
			: age >= 18 && age <= 64
			? 'adult'
			: 'elderly'
	}`
