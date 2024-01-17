// https://www.codewars.com/kata/58dced7b702b805b200000be

function distanceBetweenPoints(a, b) {
    const dx = b.x - a.x
    const dy = b.y - a.y
    return Math.sqrt(dx * dx + dy * dy)
}