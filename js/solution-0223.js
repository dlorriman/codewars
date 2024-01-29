// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

function periodIsLate(last, today, cycleLength) {
    const millisecondsInADay = 24 * 60 * 60 * 1000
    const daysPassed = Math.floor((today - last) / millisecondsInADay)
    return daysPassed > cycleLength
}