// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/javascript

function giveMeFive(obj) {
    let result = []
    
    for (let i in obj) {
        if (i.length === 5) {
            result.push(i)
        }
        if (obj[i].length === 5) {
            result.push(obj[i])
        }
    }
    return result
}