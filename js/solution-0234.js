// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

function pointsPer48(ppg, mpg) {
    return parseFloat(((48 / mpg) * ppg).toFixed(1)) || 0
}