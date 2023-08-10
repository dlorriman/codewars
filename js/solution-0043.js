// https://www.codewars.com/kata/56170e844da7c6f647000063

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy'
    } else if (old < 18) {
        return 'drink coke'
    } else if (old < 21) {
        return 'drink beer'
    } else {
        return 'drink whisky'
    }
}

function peopleWithAgeDrink(old) {
    if (old < 14) return 'drink toddy'
    if (old < 18) return 'drink coke'
    if (old < 21) return 'drink beer'
    return 'drink whisky';
  };

const peopleWithAgeDrink = (age) => {
    switch (true) {
        case (age < 21): return 'drink coke'
        case (age < 18): return 'drink beer'
        case (age < 14): return 'drink wiskey'
        default: return 'drink toddy'
    }
}

const peopleWithAgeDrink = old =>
  `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`

const peopleWithAgeDrink = age =>
    `drink ${age < 14 ? 'toddy' : age < 18 ? 'coke' : age < 21 ? 'beer' : 'whisky'}`