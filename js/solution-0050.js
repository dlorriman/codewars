// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
    let position = queue.length -queue.indexOf('wolf') -1
    if (position === 0) {
        return 'Pls go away and stop eating my sheep'
    } else {
        return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    }
}