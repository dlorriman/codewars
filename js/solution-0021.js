// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

let humanYearsCatYearsDogYears = function(humanYears) {
    return [humanYears, (15 + ((humanYears > 2) ? (9+(humanYears-2)*4) : humanYears === 2 ? 9 : 0)), (15 + ((humanYears > 2) ? (9+(humanYears-2)*5) : humanYears === 2 ? 9 : 0))]
}

let humanYearsCatYearsDogYears = function(y) {
    if (y === 1) return [1, 15, 15]
    else if (y === 2) return [2, 24, 24]
    else return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}